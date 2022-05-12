// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnySchema, ArraySchema, ChoiceSchema, ConstantSchema, DictionarySchema, ObjectSchema, PrimitiveSchema, Property, Schema, SchemaType, SealedChoiceSchema, StringSchema } from "@autorest/codemodel";
import { Channel, AutorestExtensionHost } from "@autorest/extension-base";
import { ArrayType, BuiltInTypeKind, DiscriminatedObjectType, ObjectProperty, ObjectPropertyFlags, ObjectType, ResourceFlags, ResourceFunctionType, ResourceType, StringLiteralType, TypeFactory, TypeReference, UnionType } from "./types";
import { uniq, keys, keyBy, Dictionary, flatMap } from 'lodash';
import { getFullyQualifiedType, getSerializedName, parseNameSchema, ProviderDefinition, ResourceDefinition, ResourceDescriptor } from "./resources";

export function generateTypes(host: AutorestExtensionHost, definition: ProviderDefinition) {
  const factory = new TypeFactory();
  const namedDefinitions: Dictionary<TypeReference> = {};

  function logWarning(message: string) {
    host.message({ Channel: Channel.Warning, Text: message, });
  }

  function logInfo(message: string) {
    host.message({ Channel: Channel.Information, Text: message, });
  }

  function getHttpProperties(definition: ResourceDefinition) {
    if (definition.putOperation) {
      return {
        request: definition.putOperation.request,
        parameters: definition.putOperation.parameters,
        putRequestSchema: definition.putOperation.requestSchema,
        putResponseSchema: definition.putOperation.responseSchema,
        getResponseSchema: definition.getOperation?.responseSchema,
      }
    } else if (definition.getOperation) {
      return {
        request: definition.getOperation.request,
        parameters: definition.getOperation.parameters,
        getResponseSchema: definition.getOperation.responseSchema,
      }
    }

    return;
  }

  function processResourceBody(fullyQualifiedType: string, definition: ResourceDefinition) {
    const {descriptor} = definition;
    const httpProperties = getHttpProperties(definition);

    if (!httpProperties) {
      logWarning(`Skipping resource type ${fullyQualifiedType} as it has no defined HTTP operations.`);
      return;
    }

    const {request, parameters, putRequestSchema, putResponseSchema, getResponseSchema} = httpProperties;

    const nameSchemaResult = parseNameSchema(
      request,
      parameters,
      schema => parseType(schema, schema, schema),
      (name) => factory.addType(new StringLiteralType(name)));

    if (!nameSchemaResult.success) {
      logWarning(`Skipping resource type ${fullyQualifiedType} under path '${request.path}': ${nameSchemaResult.error}`);
      return
    }

    if (!nameSchemaResult.value) {
      logWarning(`Skipping resource type ${fullyQualifiedType} under path '${request.path}': failed to obtain a name value`);
      return
    }

    const resourceProperties = getStandardizedResourceProperties(descriptor, nameSchemaResult.value);

    let resourceDefinition: TypeReference;
    const schema = putRequestSchema ?? getResponseSchema;
    if (schema) {
      resourceDefinition = createObject(getFullyQualifiedType(descriptor), schema, resourceProperties);
    } else {
      logInfo(`Resource type ${fullyQualifiedType} under path '${httpProperties.request.path}' has no body defined.`);
      resourceDefinition = factory.addType(new ObjectType(getFullyQualifiedType(descriptor), resourceProperties));
    }

    for (const { propertyName, putRequestProperty, putResponseProperty, getResponseProperty } of getObjectTypeProperties(putRequestSchema, putResponseSchema, getResponseSchema, true)) {
      if (resourceProperties[propertyName]) {
        continue;
      }

      const propertyDefinition = parseType(putRequestProperty?.schema, putResponseProperty?.schema, getResponseProperty?.schema);
      if (propertyDefinition) {
        const description = (putRequestProperty?.schema ?? getResponseProperty?.schema)?.language.default?.description;
        const flags = parsePropertyFlags(putRequestProperty, putResponseProperty, getResponseProperty);
        resourceProperties[propertyName] = createObjectProperty(propertyDefinition, flags, description);
      }
    }

    if (putRequestSchema?.discriminator || putResponseSchema?.discriminator || getResponseSchema?.discriminator) {
      const discriminatedObjectType = factory.lookupType(resourceDefinition) as DiscriminatedObjectType;

      handlePolymorphicType(discriminatedObjectType, putRequestSchema, putResponseSchema, getResponseSchema);
    }

    return resourceDefinition;
  }

  function processResource(fullyQualifiedType: string, definitions: ResourceDefinition[]) {
    if (definitions.length > 1) {
      for (const definition of definitions) {
        if (!definition.descriptor.constantName) {
          logWarning(`Skipping resource type ${fullyQualifiedType} under path '${getHttpProperties(definitions[0])?.request.path}': Found multiple definitions for the same type`);
          return null;
        }
      }

      const polymorphicBodies: Dictionary<TypeReference> = {};
      for (const definition of definitions) {
        const bodyType = processResourceBody(fullyQualifiedType, definition);
        if (!bodyType || !definition.descriptor.constantName) {
          return null;
        }

        polymorphicBodies[definition.descriptor.constantName] = bodyType;
      }

      const discriminatedBodyType = factory.addType(new DiscriminatedObjectType(
        fullyQualifiedType,
        'name',
        {},
        polymorphicBodies));

      const descriptor = {
        ...definitions[0].descriptor,
        constantName: undefined,
      };

      return {
        descriptor,
        bodyType: discriminatedBodyType
      };
    } else {
      const definition = definitions[0];
      const bodyType = processResourceBody(fullyQualifiedType, definition);
      if (!bodyType) {
        return null;
      }

      return {
        descriptor: definition.descriptor,
        bodyType: bodyType,
      };
    }
  }

  function generateTypes() {
    const { resourcesByType, resourceActions } = definition;

    for (const fullyQualifiedType in resourcesByType) {
      const definitions = resourcesByType[fullyQualifiedType];

      const output = processResource(fullyQualifiedType, definitions);
      if (!output) {
        continue;
      }

      const { descriptor, bodyType } = output;
      let flags = ResourceFlags.None;
      if (descriptor.readable && !descriptor.writable) {
        flags |= ResourceFlags.ReadOnly;
      }
      if (descriptor.writable && !descriptor.readable) {
        flags |= ResourceFlags.WriteOnly;
      }
      if (descriptor.provisionedAsynchronously) {
        flags |= ResourceFlags.Async;
      }

      factory.addType(new ResourceType(
        `${getFullyQualifiedType(descriptor)}@${descriptor.apiVersion}`,
        descriptor.scopeType,
        bodyType,
        flags));
    }

    for (const action of resourceActions) {
      let request: TypeReference | undefined;
      if (action.requestSchema) {
        request = parseType(action.requestSchema, undefined, undefined);
        if (!request) {
          continue;
        }
      }

      if (!action.responseSchema) {
        logWarning(`Skipping resource action ${action.actionName} under path '${action.postRequest.path}': failed to find a response schema`);
        continue;
      }

      // Functions only have one possible HTTP operation from which they may be returned, so pass the same response schema as both the GET and PUT response
      // schemata to ensure the `OnlyReturnedOn(Read|Write)` flags are not applied.
      const response = parseType(undefined, action.responseSchema, action.responseSchema);
      if (!response) {
        continue;
      }

      const { actionName, descriptor } = action;

      factory.addType(new ResourceFunctionType(
        actionName,
        getFullyQualifiedType(descriptor),
        descriptor.apiVersion,
        response,
        request));
    }

    return factory.types;
  }

  function getStandardizedResourceProperties(descriptor: ResourceDescriptor, resourceName: TypeReference): Dictionary<ObjectProperty> {
    const type = factory.addType(new StringLiteralType(getFullyQualifiedType(descriptor)));

    return {
      id: createObjectProperty(factory.lookupBuiltInType(BuiltInTypeKind.String), ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, 'The resource id'),
      name: createObjectProperty(resourceName, ObjectPropertyFlags.Required | ObjectPropertyFlags.DeployTimeConstant, 'The resource name'),
      type: createObjectProperty(type, ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, 'The resource type'),
      apiVersion: createObjectProperty(factory.addType(new StringLiteralType(descriptor.apiVersion)), ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, 'The resource api version'),
    };
  }

  function createObject(definitionName: string, schema: ObjectSchema, properties: Dictionary<ObjectProperty>, additionalProperties?: TypeReference) {
    if (schema.discriminator) {
      return factory.addType(new DiscriminatedObjectType(
        definitionName,
        schema.discriminator.property.serializedName,
        properties,
        {}));
    }

    return factory.addType(new ObjectType(definitionName, properties, additionalProperties));
  }

  function combineAndThrowIfNull<TSchema extends Schema>(...schemata: Array<TSchema | undefined>) {
    for (const schema of schemata) {
      if (schema) {
        return schema;
      }
    }

    throw 'Unable to find PUT or GET type';
  }

  function getSchemaProperties(schema: ObjectSchema, includeBaseProperties: boolean): Dictionary<Property> {
    const objects = [schema];
    if (includeBaseProperties) {
      for (const parent of schema.parents?.all || []) {
        if (parent instanceof ObjectSchema) {
          objects.push(parent);
        }
      }
    }

    return keyBy(flatMap(objects, o => o.properties || []), p => p.serializedName);
  }

  function* getObjectTypeProperties(
    putRequestSchema: ObjectSchema | undefined,
    putResponseSchema: ObjectSchema | undefined,
    getResponseSchema: ObjectSchema | undefined,
    includeBaseProperties: boolean
  ) {
    const putRequestProperties = putRequestSchema ? getSchemaProperties(putRequestSchema, includeBaseProperties) : {};
    const putResponseProperties = putResponseSchema ? getSchemaProperties(putResponseSchema, includeBaseProperties) : {};
    const getResponseProperties = getResponseSchema ? getSchemaProperties(getResponseSchema, includeBaseProperties) : {};

    for (const propertyName of uniq([...keys(putRequestProperties), ...keys(putResponseProperties), ...keys(getResponseProperties)])) {
      if ((putRequestSchema?.discriminator?.property && putRequestSchema.discriminator.property === putRequestProperties[propertyName]) ||
        (getResponseSchema?.discriminator?.property && getResponseSchema.discriminator.property === getResponseProperties[propertyName])) {
        continue;
      }

      yield {
        propertyName,
        putRequestProperty: putRequestProperties[propertyName],
        putResponseProperty: putResponseProperties[propertyName],
        getResponseProperty: getResponseProperties[propertyName],
      };
    }
  }

  function flattenDiscriminatorSubTypes(schema: ObjectSchema | undefined) {
    if (!schema || !schema.discriminator) {
      return {};
    }

    const output: Dictionary<ObjectSchema> = {};
    for (const key in schema.discriminator.all) {
      const value = schema.discriminator.all[key];

      if (!(value instanceof ObjectSchema)) {
        throw `Unable to flatten discriminated properties - schema '${getSerializedName(schema)}' has non-object discriminated value '${getSerializedName(value)}'.`;
      }

      if (!value.discriminator) {
        output[key] = value;
        continue;
      }

      if (schema.discriminator.property.serializedName !== value.discriminator.property.serializedName) {
        throw `Unable to flatten discriminated properties - schemas '${getSerializedName(schema)}' and '${getSerializedName(value)}' have conflicting discriminators '${schema.discriminator.property.serializedName}' and '${value.discriminator.property.serializedName}'`;
      }

      const subTypes = flattenDiscriminatorSubTypes(value);
      for (const subTypeKey in subTypes) {
        output[subTypeKey] = subTypes[subTypeKey];
      }
    }

    return output;
  }

  function* getDiscriminatedSubTypes(
    putRequestSchema: ObjectSchema | undefined,
    putResponseSchema: ObjectSchema | undefined,
    getResponseSchema: ObjectSchema | undefined
  ) {
    const putRequestSubTypes = flattenDiscriminatorSubTypes(putRequestSchema);
    const putResponseSubTypes = flattenDiscriminatorSubTypes(putResponseSchema);
    const getResponseSubTypes = flattenDiscriminatorSubTypes(getResponseSchema);

    for (const subTypeName of uniq([...keys(putRequestSubTypes), ...keys(putResponseSubTypes), ...keys(getResponseSubTypes)])) {
      yield {
        subTypeName,
        putRequestSubType: putRequestSubTypes[subTypeName],
        putResponseSubType: putResponseSubTypes[subTypeName],
        getResponseSubType: getResponseSubTypes[subTypeName],
      };
    }
  }

  function parseType(
    putRequestSchema: Schema | undefined,
    putResponseSchema: Schema | undefined,
    getResponseSchema: Schema | undefined
  ): TypeReference | undefined {
    const combinedSchema = combineAndThrowIfNull(putRequestSchema, putResponseSchema, getResponseSchema);

    // A schema that matches a JSON object with specific properties, such as
    // { "name": { "type": "string" }, "age": { "type": "number" } }
    if (combinedSchema instanceof ObjectSchema) {
      return parseObjectType(putRequestSchema as ObjectSchema, putResponseSchema as ObjectSchema, getResponseSchema as ObjectSchema, true);
    }

    // A schema that matches a "dictionary" JSON object, such as
    // { "additionalProperties": { "type": "string" } }
    if (combinedSchema instanceof DictionarySchema) {
      return parseDictionaryType(putRequestSchema as DictionarySchema, putResponseSchema as DictionarySchema, getResponseSchema as DictionarySchema);
    }

    // A schema that matches a single value from a given set of values, such as
    // { "enum": [ "a", "b" ] }
    if (combinedSchema instanceof ChoiceSchema) {
      return parseEnumType(putRequestSchema as ChoiceSchema, putResponseSchema as ChoiceSchema, getResponseSchema as ChoiceSchema);
    }
    if (combinedSchema instanceof SealedChoiceSchema) {
      return parseEnumType(putRequestSchema as SealedChoiceSchema, putResponseSchema as SealedChoiceSchema, getResponseSchema as SealedChoiceSchema);
    }
    if (combinedSchema instanceof ConstantSchema) {
      return parseConstant(putRequestSchema as ConstantSchema, putResponseSchema as ConstantSchema, getResponseSchema as ConstantSchema);
    }

    // A schema that matches an array of values, such as
    // { "items": { "type": "number" } }
    if (combinedSchema instanceof ArraySchema) {
      return parseArrayType(putRequestSchema as ArraySchema, putResponseSchema as ArraySchema, getResponseSchema as ArraySchema);
    }

    // A schema that matches simple values, such as { "type": "number" }
    if (combinedSchema instanceof PrimitiveSchema) {
      return parsePrimaryType(putRequestSchema as PrimitiveSchema, putResponseSchema as PrimitiveSchema, getResponseSchema as PrimitiveSchema);
    }

    // The 'any' type
    if (combinedSchema instanceof AnySchema) {
      return factory.lookupBuiltInType(BuiltInTypeKind.Any);
    }

    logWarning(`Unrecognized property type: ${combinedSchema.type}. Returning 'any'.`);
    return factory.lookupBuiltInType(BuiltInTypeKind.Any);
  }

  function getMutabilityFlags(property: Property | undefined) {
    const mutability = property?.extensions?.["x-ms-mutability"] as string[];
    if (!mutability) {
      return ObjectPropertyFlags.None;
    }

    const writable = mutability.includes('create') || mutability.includes('update');
    const readable = mutability.includes('read');
    if (writable && !readable) {
      return ObjectPropertyFlags.WriteOnly;
    }

    if (readable && !writable) {
      return ObjectPropertyFlags.ReadOnly;
    }

    return ObjectPropertyFlags.None;
  }

  function parsePropertyFlags(
    putRequestProperty: Property | undefined,
    putResponseProperty: Property | undefined,
    getResponseProperty: Property | undefined
  ) {
    let flags = ObjectPropertyFlags.None;

    if (putRequestProperty && putRequestProperty.required) {
      flags |= ObjectPropertyFlags.Required;
    }

    if (putRequestProperty && (putResponseProperty || getResponseProperty)) {
      flags |= getMutabilityFlags(putRequestProperty);
    }

    const writable = putRequestProperty && !putRequestProperty.readOnly;
    const readable = putResponseProperty || getResponseProperty;

    if (writable && !readable) {
      flags |= ObjectPropertyFlags.WriteOnly;
    }

    if (readable && !writable) {
      flags |= ObjectPropertyFlags.ReadOnly;
    }

    if (!readable && !writable) {
      // surprisingly, this situation occurs, usually due to errors in the provider swagger.
      // an example of when this might happen is if a property is marked as readOnly on the PUT body but is not
      // returned by either a GET or a PUT (such as `createdBy` on the
      // Microsoft.Authorization/accessReviewHistoryDefinitions@2021-11-16-preview resource)
      logWarning(`Encounter a property [${putRequestProperty?.serializedName}] that cannot be read or written in API version [${putRequestProperty?.schema?.apiVersions?.at(0)?.version}]`);
      flags |= ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.WriteOnly;
    }

    if (putResponseProperty && !getResponseProperty) {
      flags |= ObjectPropertyFlags.OnlyReturnedOnWrite;
    }

    if (getResponseProperty && !putResponseProperty) {
      flags |= ObjectPropertyFlags.OnlyReturnedOnRead;
    }

    return flags;
  }

  function parsePrimaryType(
    putRequestSchema: PrimitiveSchema | undefined,
    putResponseSchema: PrimitiveSchema | undefined,
    getResponseSchema: PrimitiveSchema | undefined
  ) {
    const combinedSchema = combineAndThrowIfNull(putRequestSchema, putResponseSchema, getResponseSchema);

    switch (combinedSchema.type) {
      case SchemaType.Boolean:
        return factory.lookupBuiltInType(BuiltInTypeKind.Bool);
      case SchemaType.Integer:
      case SchemaType.Number:
      case SchemaType.UnixTime:
        return factory.lookupBuiltInType(BuiltInTypeKind.Int);
      case SchemaType.Object:
        return factory.lookupBuiltInType(BuiltInTypeKind.Any);
      case SchemaType.ByteArray:
        return factory.lookupBuiltInType(BuiltInTypeKind.Array);
      case SchemaType.Uri:
      case SchemaType.Date:
      case SchemaType.DateTime:
      case SchemaType.Time:
      case SchemaType.String:
      case SchemaType.Uuid:
      case SchemaType.Duration:
      case SchemaType.Credential:
        return factory.lookupBuiltInType(BuiltInTypeKind.String);
      default:
        logWarning(`Unrecognized known property type: "${combinedSchema.type}"`);
        return factory.lookupBuiltInType(BuiltInTypeKind.Any);
    }
  }

  function handlePolymorphicType(
    discriminatedObjectType: DiscriminatedObjectType,
    putRequestSchema?: ObjectSchema,
    putResponseSchema?: ObjectSchema,
    getResponseSchema?: ObjectSchema
  ) {
    for (const { putRequestSubType, putResponseSubType, getResponseSubType } of getDiscriminatedSubTypes(putRequestSchema, putResponseSchema, getResponseSchema)) {
      const combinedSubType = combineAndThrowIfNull(putRequestSubType, putResponseSubType, getResponseSubType);

      if (!combinedSubType.discriminatorValue) {
        continue;
      }

      const objectTypeRef = parseObjectType(putRequestSubType, putResponseSubType, getResponseSubType, false);
      const objectType = factory.lookupType(objectTypeRef);
      if (!(objectType instanceof ObjectType)) {
        logWarning(`Found unexpected element of discriminated type '${discriminatedObjectType.Name}'`)
        continue;
      }

      discriminatedObjectType.Elements[combinedSubType.discriminatorValue] = objectTypeRef;

      const description = (putRequestSchema ?? putResponseSchema ?? getResponseSchema)?.discriminator?.property.language.default.description;
      objectType.Properties[discriminatedObjectType.Discriminator] = createObjectProperty(
        factory.addType(new StringLiteralType(combinedSubType.discriminatorValue)),
        ObjectPropertyFlags.Required,
        description);
    }
  }

  function parseObjectType(
    putRequestSchema: ObjectSchema | undefined,
    putResponseSchema: ObjectSchema | undefined,
    getResponseSchema: ObjectSchema | undefined,
    includeBaseProperties: boolean
  ) {
    const combinedSchema = combineAndThrowIfNull(putRequestSchema, putResponseSchema, getResponseSchema);
    const definitionName = getSerializedName(combinedSchema);

    if (includeBaseProperties && namedDefinitions[definitionName]) {
      // if we're building a discriminated subtype, we're going to be missing the base properties
      // so construct the type on-the-fly, and don't cache it globally
      return namedDefinitions[definitionName];
    }

    let additionalProperties: TypeReference | undefined;
    if (includeBaseProperties) {
      const putParentDictionary = (putRequestSchema?.parents?.all || []).filter(x => x instanceof DictionarySchema).map(x => x as DictionarySchema)[0];
      const putResponseParentDictionary = (putResponseSchema?.parents?.all || []).filter(x => x instanceof DictionarySchema).map(x => x as DictionarySchema)[0];
      const getParentDictionary = (getResponseSchema?.parents?.all || []).filter(x => x instanceof DictionarySchema).map(x => x as DictionarySchema)[0];

      if (putParentDictionary || getParentDictionary) {
        additionalProperties = parseType(putParentDictionary?.elementType, putResponseParentDictionary?.elementType, getParentDictionary?.elementType);
      }
    }

    const definitionProperties: Dictionary<ObjectProperty> = {};
    const definition = createObject(definitionName, combinedSchema, definitionProperties, additionalProperties);
    if (includeBaseProperties) {
      // cache the definition so that it can be re-used
      namedDefinitions[definitionName] = definition;
    }

    for (const { propertyName, putRequestProperty, putResponseProperty, getResponseProperty } of getObjectTypeProperties(putRequestSchema, putResponseSchema, getResponseSchema, includeBaseProperties)) {
      const propertyDefinition = parseType(putRequestProperty?.schema, putResponseProperty?.schema, getResponseProperty?.schema);
      if (propertyDefinition) {
        const description = (putRequestProperty?.schema ?? putResponseProperty?.schema ?? getResponseProperty?.schema)?.language.default?.description;
        const flags = parsePropertyFlags(putRequestProperty, putResponseProperty, getResponseProperty);
        definitionProperties[propertyName] = createObjectProperty(propertyDefinition, flags, description);
      }
    }

    if (combinedSchema.discriminator) {
      const discriminatedObjectType = factory.lookupType(definition) as DiscriminatedObjectType;

      handlePolymorphicType(discriminatedObjectType, putRequestSchema, putResponseSchema, getResponseSchema);
    }

    return definition;
  }

  function parseEnumType(
    putRequestSchema: ChoiceSchema | SealedChoiceSchema | undefined,
    putResponseSchema: ChoiceSchema | SealedChoiceSchema | undefined,
    getResponseSchema: ChoiceSchema | SealedChoiceSchema | undefined
  ) {
    const combinedSchema = combineAndThrowIfNull(putRequestSchema, putResponseSchema, getResponseSchema);

    if (!(combinedSchema.choiceType instanceof StringSchema)) {
      // we can only handle string enums right now
      return parseType(putRequestSchema?.choiceType, putResponseSchema?.choiceType, getResponseSchema?.choiceType);
    }

    const enumTypes = [];
    for (const enumValue of combinedSchema.choices) {
      const stringLiteralType = factory.addType(new StringLiteralType(enumValue.value.toString()));
      enumTypes.push(stringLiteralType);
    }

    if (combinedSchema.type === SchemaType.Choice) {
      enumTypes.push(factory.lookupBuiltInType(BuiltInTypeKind.String));
    }

    if (enumTypes.length === 1) {
      return enumTypes[0];
    }

    return factory.addType(new UnionType(enumTypes));
  }

  function parseConstant(
    putRequestSchema: ConstantSchema | undefined,
    putResponseSchema: ConstantSchema | undefined,
    getResponseSchema: ConstantSchema | undefined
  ) {
    const combinedSchema = combineAndThrowIfNull(putRequestSchema, putResponseSchema, getResponseSchema);
    const constantValue = combinedSchema.value;

    return factory.addType(new StringLiteralType(constantValue.value.toString()));
  }

  function parseDictionaryType(
    putRequestSchema: DictionarySchema | undefined,
    putResponseSchema: DictionarySchema | undefined,
    getResponseSchema: DictionarySchema | undefined
  ) {
    const combinedSchema = combineAndThrowIfNull(putRequestSchema, putResponseSchema, getResponseSchema);
    const additionalPropertiesType = parseType(putRequestSchema?.elementType, putResponseSchema?.elementType, getResponseSchema?.elementType);

    return factory.addType(new ObjectType(getSerializedName(combinedSchema), {}, additionalPropertiesType));
  }

  function parseArrayType(
    putRequestSchema: ArraySchema | undefined,
    putResponseSchema: ArraySchema | undefined,
    getResponseSchema: ArraySchema | undefined
  ) {
    const itemType = parseType(putRequestSchema?.elementType, putResponseSchema?.elementType, getResponseSchema?.elementType);
    if (!itemType) {
      return factory.lookupBuiltInType(BuiltInTypeKind.Array);
    }

    return factory.addType(new ArrayType(itemType));
  }

  function createObjectProperty(type: TypeReference, flags: ObjectPropertyFlags, description?: string): ObjectProperty {
    return new ObjectProperty(type, flags, description?.trim() || undefined);
  }

  return generateTypes();
}
