// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AnySchema,
  ArraySchema,
  ByteArraySchema,
  ChoiceSchema,
  ComplexSchema,
  ConstantSchema,
  CredentialSchema,
  DictionarySchema,
  NumberSchema,
  ObjectSchema,
  PrimitiveSchema,
  Property,
  Schema,
  SchemaType,
  SealedChoiceSchema,
  StringSchema,
  UriSchema,
} from "@autorest/codemodel";
import { Channel, AutorestExtensionHost } from "@autorest/extension-base";
import { DiscriminatedObjectType, ObjectTypeProperty, ObjectTypePropertyFlags, ResourceFlags, TypeBaseKind, TypeFactory, TypeReference } from "bicep-types";
import { uniq, keys, Dictionary, chain } from 'lodash';
import { getFullyQualifiedType, getNameSchema, getSerializedName, NameSchema, ProviderDefinition, ResourceDefinition, ResourceDescriptor, ResourceOperationDefintion } from "./resources";
import { failure, success } from "./utils";

export function generateTypes(host: AutorestExtensionHost, definition: ProviderDefinition) {
  const factory = new TypeFactory();
  const namedDefinitions: Dictionary<TypeReference> = {};

  function logWarning(message: string) {
    host.message({ Channel: Channel.Warning, Text: message, });
  }

  function logInfo(message: string) {
    host.message({ Channel: Channel.Information, Text: message, });
  }

  function getResourcePath(definition: ResourceDefinition) {
    return (definition.putOperation ?? definition.getOperation)?.request.path;
  }

  function nameIsString(nameSchema?: NameSchema) {
    return nameSchema?.type == "parameterized" && nameSchema.schema instanceof PrimitiveSchema && isStringSchema(nameSchema.schema);
  }

  function getNameType(fullyQualifiedType: string, definition: ResourceDefinition) {
    function getSchema(op: ResourceOperationDefintion) {
      const r = getNameSchema(op.request, op.parameters);

      if (!r.success) {
        logWarning(`Skipping resource type ${fullyQualifiedType} under path '${op.request.path}': ${r.error}`);
        return
      }

      return r.value;
    }

    // In some cases, the one of the PUT or GET operations for a resource is defined with a constant name while the
    // other defines a parameterized name, or a resource may use an enum to strictly enforce what names may be used to
    // PUT a resource while reserving itself some flexibility by providing a looser definition of what will be returned
    // by a GET. Because the resource's name property will be used both when defining the resource and when using the
    // `existing` keyword, the two definitions of a resource's name need to be reconciled with a different approach than
    // is used for other resource properties.
    const {putOperation, getOperation} = definition;
    const nameLiterals = new Set<string>();
    const nameTypes = new Set<TypeReference>();
    const nameSchemata = {
      put: putOperation ? getSchema(putOperation) : undefined,
      get: getOperation ? getSchema(getOperation) : undefined,
    };

    // if both the PUT and the GET define the name schema as a string, just use the name from the PUT
    const nameSchemataToCombine = nameIsString(nameSchemata.put) && nameIsString(nameSchemata.get)
      ? [nameSchemata.put]
      : [nameSchemata.put, nameSchemata.get];

    for (const ns of nameSchemataToCombine) {
      if (!ns) {
        continue;
      }

      if (ns.type === 'parameterized') {
        const {schema} = ns;
        if (schema instanceof ConstantSchema && isStringSchema(schema.valueType)) {
          nameLiterals.add(schema.value.value);
        } else if (schema instanceof ChoiceSchema || schema instanceof SealedChoiceSchema) {
          const enumValues = getValuesForEnum(schema);
          if (enumValues.success) {
            const {values, closed} = enumValues.value;
            values.forEach(v => nameLiterals.add(v));
            if (!closed) {
              nameTypes.add(factory.addStringType());
            }
          }
        } else {
          nameTypes.add(toBuiltInType(schema));
        }
      } else {
        nameLiterals.add(ns.value);
      }
    }

    const enumTypes = [...nameLiterals].map(l => factory.addStringLiteralType(l))
      .concat([...nameTypes]);

    if (enumTypes.length === 1) {
      return success(enumTypes[0]);
    } else if (enumTypes.length > 0) {
      return success(factory.addUnionType(enumTypes));
    }

    return failure('failed to obtain a name value');
  }

  function processResourceBody(fullyQualifiedType: string, definition: ResourceDefinition) {
    const { descriptor, putOperation, getOperation } = definition;
    const {requestSchema: putSchema} = putOperation || {};
    const getSchema = getOperation ? getOperation.responseSchema : putSchema;

    const nameType = getNameType(fullyQualifiedType, definition);

    if (!nameType.success) {
      logWarning(`Skipping resource type ${fullyQualifiedType} under path '${getResourcePath(definition)}': ${nameType.error}`);
      return
    }

    const resourceProperties = getStandardizedResourceProperties(descriptor, nameType.value);

    let resourceDefinition: TypeReference;
    const schema = definition.putOperation ? putSchema : getSchema;
    if (schema) {
      resourceDefinition = createObject(getFullyQualifiedType(descriptor), schema, resourceProperties);
    } else {
      logInfo(`Resource type ${fullyQualifiedType} under path '${getResourcePath(definition)}' has no body defined.`);
      resourceDefinition = factory.addObjectType(getFullyQualifiedType(descriptor), resourceProperties);
    }

    for (const { propertyName, putProperty, getProperty } of getObjectTypeProperties(putSchema, getSchema)) {
      if (resourceProperties[propertyName]) {
        continue;
      }

      const propertyDefinition = parseType(putProperty?.schema, getProperty?.schema);
      if (propertyDefinition !== undefined) {
        const description = getPropertyDescription(putProperty, getProperty);
        const flags = parsePropertyFlags(putProperty, getProperty);
        resourceProperties[propertyName] = createObjectTypeProperty(propertyDefinition, flags, description);
      }
    }

    if (schema?.discriminator) {
      const discriminatedObjectType = factory.lookupType(resourceDefinition) as DiscriminatedObjectType;

      handlePolymorphicType(discriminatedObjectType, putSchema, getSchema);
    }

    return resourceDefinition;
  }

  function processResource(fullyQualifiedType: string, definitions: ResourceDefinition[]) {
    if (definitions.length > 1) {
      for (const definition of definitions) {
        if (!definition.descriptor.constantName) {
          logWarning(`Skipping resource type ${fullyQualifiedType} under path '${getResourcePath(definitions[0])}': Found multiple definitions for the same type`);
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

      const discriminatedBodyType = factory.addDiscriminatedObjectType(
        fullyQualifiedType,
        'name',
        {},
        polymorphicBodies);

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
      if (descriptor.readonlyScopes === descriptor.scopeType) {
        flags |= ResourceFlags.ReadOnly;
      }

      factory.addResourceType(
        `${getFullyQualifiedType(descriptor)}@${descriptor.apiVersion}`,
        descriptor.scopeType,
        descriptor.readonlyScopes !== descriptor.scopeType ? descriptor.readonlyScopes : undefined,
        bodyType,
        flags);
    }

    for (const action of resourceActions) {
      let request: TypeReference | undefined;
      if (action.requestSchema) {
        request = parseType(action.requestSchema, undefined);
        if (request === undefined) {
          continue;
        }
      }

      if (!action.responseSchema) {
        logWarning(`Skipping resource action ${action.actionName} under path '${action.postRequest.path}': failed to find a response schema`);
        continue;
      }

      const response = parseType(undefined, action.responseSchema);
      if (response === undefined) {
        continue;
      }

      const { actionName, descriptor } = action;

      factory.addResourceFunctionType(
        actionName,
        getFullyQualifiedType(descriptor),
        descriptor.apiVersion,
        response,
        request);
    }

    return factory.types;
  }

  function getStandardizedResourceProperties(descriptor: ResourceDescriptor, resourceName: TypeReference): Dictionary<ObjectTypeProperty> {
    const type = factory.addStringLiteralType(getFullyQualifiedType(descriptor));

    return {
      id: createObjectTypeProperty(factory.addStringType(), ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant, 'The resource id'),
      name: createObjectTypeProperty(resourceName, ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.DeployTimeConstant, 'The resource name'),
      type: createObjectTypeProperty(type, ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant, 'The resource type'),
      apiVersion: createObjectTypeProperty(factory.addStringLiteralType(descriptor.apiVersion), ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant, 'The resource api version'),
    };
  }

  function createObject(definitionName: string, schema: ObjectSchema, properties: Dictionary<ObjectTypeProperty>, additionalProperties?: TypeReference) {
    if (schema.discriminator) {
      return factory.addDiscriminatedObjectType(
        definitionName,
        schema.discriminator.property.serializedName,
        properties,
        {});
    }

    return factory.addObjectType(definitionName, properties, additionalProperties, schema.extensions?.['x-ms-secret']);
  }

  function combineAndThrowIfNull<TSchema extends Schema>(putSchema: TSchema | undefined, getSchema: TSchema | undefined) {
    const output = putSchema ?? getSchema;
    if (!output) {
      throw 'Unable to find PUT or GET type';
    }

    return output;
  }

  function getSchemaProperties(schema: ObjectSchema, ancestorsToExclude?: Set<ComplexSchema>): Dictionary<Property> {
    const objects = [schema];
    for (const parent of schema.parents?.all || []) {
      if (parent instanceof ObjectSchema) {
        objects.push(parent);
      }
    }

    return chain(objects).filter(o => !(ancestorsToExclude?.has(o))).flatMap(o => o.properties || []).keyBy(p => p.serializedName).value();
  }

  function* getObjectTypeProperties(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined, ancestorsToExclude?: Set<ComplexSchema>) {
    const putProperties = putSchema ? getSchemaProperties(putSchema, ancestorsToExclude) : {};
    const getProperties = getSchema ? getSchemaProperties(getSchema, ancestorsToExclude) : {};

    for (const propertyName of uniq([...keys(putProperties), ...keys(getProperties)])) {
      if ((putSchema?.discriminator?.property && putSchema.discriminator.property === putProperties[propertyName]) ||
        (getSchema?.discriminator?.property && getSchema.discriminator.property === getProperties[propertyName])) {
        continue;
      }

      const putProperty = putProperties[propertyName] as Property | undefined
      const getProperty = getProperties[propertyName] as Property | undefined

      yield { propertyName, putProperty, getProperty };
    }
  }

  function getPropertyDescription(putProperty: Property | undefined, getProperty: Property | undefined) {
    const propertyDescription = (putProperty ?? getProperty)?.language.default?.description;
    const typeDescription = (putProperty?.schema ?? getProperty?.schema)?.language.default?.description;

    return propertyDescription ?? typeDescription;
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

  function* getDiscriminatedSubTypes(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined) {
    const putSubTypes = flattenDiscriminatorSubTypes(putSchema);
    const getSubTypes = flattenDiscriminatorSubTypes(getSchema);

    for (const subTypeName of uniq([...keys(putSubTypes), ...keys(getSubTypes)])) {
      yield {
        subTypeName,
        putSubType: putSubTypes[subTypeName],
        getSubType: getSubTypes[subTypeName],
      };
    }
  }

  function parseType(putSchema: Schema | undefined, getSchema: Schema | undefined): TypeReference | undefined {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);

    // A schema that matches a JSON object with specific properties, such as
    // { "name": { "type": "string" }, "age": { "type": "number" } }
    if (combinedSchema instanceof ObjectSchema) {
      return parseObjectType(putSchema as ObjectSchema, getSchema as ObjectSchema);
    }

    // A schema that matches a "dictionary" JSON object, such as
    // { "additionalProperties": { "type": "string" } }
    if (combinedSchema instanceof DictionarySchema) {
      return parseDictionaryType(putSchema as DictionarySchema, getSchema as DictionarySchema);
    }

    // A schema that matches a single value from a given set of values, such as
    // { "enum": [ "a", "b" ] }
    if (combinedSchema instanceof ChoiceSchema) {
      return parseEnumType(putSchema as ChoiceSchema, getSchema as ChoiceSchema);
    }
    if (combinedSchema instanceof SealedChoiceSchema) {
      return parseEnumType(putSchema as SealedChoiceSchema, getSchema as SealedChoiceSchema);
    }
    if (combinedSchema instanceof ConstantSchema) {
      return parseConstant(putSchema as ConstantSchema, getSchema as ConstantSchema);
    }

    // A schema that matches an array of values, such as
    // { "items": { "type": "number" } }
    if (combinedSchema instanceof ArraySchema) {
      return parseArrayType(putSchema as ArraySchema, getSchema as ArraySchema);
    }

    // A schema that matches simple values (or that is serialized to simple values), such
    // as { "type": "number" } or { "type": "string", "format": "base64url" }
    if (combinedSchema instanceof PrimitiveSchema || (combinedSchema instanceof ByteArraySchema && combinedSchema.format !== 'byte')) {
      return parsePrimaryType(putSchema as PrimitiveSchema, getSchema as PrimitiveSchema);
    }

    // The 'any' type
    if (combinedSchema instanceof AnySchema) {
      return factory.addAnyType();
    }

    logWarning(`Unrecognized property type: ${combinedSchema.type}. Returning 'any'.`);
    return factory.addAnyType();
  }

  function getMutabilityFlags(property: Property | undefined) {
    const mutability = property?.extensions?.["x-ms-mutability"] as string[];
    if (!mutability) {
      return ObjectTypePropertyFlags.None;
    }

    const writable = mutability.includes('create') || mutability.includes('update');
    const readable = mutability.includes('read');

    if (writable && !readable) {
      return ObjectTypePropertyFlags.WriteOnly;
    }

    if (readable && !writable) {
      return ObjectTypePropertyFlags.ReadOnly;
    }

    return ObjectTypePropertyFlags.None;
  }

  function parsePropertyFlags(putProperty: Property | undefined, getProperty: Property | undefined) {
    let flags = ObjectTypePropertyFlags.None;

    if (putProperty && putProperty.required) {
      flags |= ObjectTypePropertyFlags.Required;
    }

    if (putProperty && getProperty) {
      flags |= getMutabilityFlags(putProperty);
    }

    if (!putProperty || putProperty.readOnly) {
      flags |= ObjectTypePropertyFlags.ReadOnly;
    }

    if (!getProperty) {
      flags |= ObjectTypePropertyFlags.WriteOnly;
    }

    // There is ambiguity between OpenApi v2 & v3 about whether properties can be readonly & required.
    // We can work around this by just stripping out required if a property is readonly.
    if (flags & ObjectTypePropertyFlags.ReadOnly) {
      flags &= ~ObjectTypePropertyFlags.Required;
    }

    return flags;
  }

  function toBuiltInType(schema: PrimitiveSchema): TypeReference {
    switch (schema.type) {
      case SchemaType.Boolean:
        return factory.addBooleanType();
      case SchemaType.Integer:
      case SchemaType.Number:
        return convertNumberSchema(schema as NumberSchema);
      case SchemaType.UnixTime:
        return factory.addIntegerType();
      case SchemaType.Object:
        return factory.addAnyType();
      case SchemaType.ByteArray:
        return (schema as ByteArraySchema).format === 'base64url'
          ? factory.addStringType()
          : factory.addArrayType(factory.addAnyType());
      case SchemaType.Uri:
      case SchemaType.Date:
      case SchemaType.DateTime:
      case SchemaType.Time:
      case SchemaType.String:
      case SchemaType.Uuid:
      case SchemaType.Duration:
      case SchemaType.Credential:
      case SchemaType.ArmId:
        return convertStringSchema(schema);
      default:
        logWarning(`Unrecognized known property type: "${schema.type}"`);
        return factory.addAnyType();
    }
  }

  function convertNumberSchema(schema: NumberSchema): TypeReference {
    let minimum: number|undefined = schema.minimum;
    if (minimum !== undefined && schema.exclusiveMinimum) {
      minimum += 1;
    }

    let maximum: number|undefined = schema.maximum;
    if (maximum !== undefined && schema.exclusiveMaximum) {
      maximum -= 1;
    }
    
    // Round up the minimum and down the maximum to the nearest integer
    // in case they are floating-point numbers, which are not yet supported in Bicep.
    // This ensures correct type checking for integers, while still allowing
    // users the flexibility to use json('float').
    if (minimum !== undefined) {
      minimum = Math.ceil(minimum);
    }
    if (maximum !== undefined) {
      maximum = Math.floor(maximum);
    }

    return factory.addIntegerType(minimum, maximum);
  }

  function convertStringSchema(schema: PrimitiveSchema): TypeReference {
    const secret: true|undefined = schema.extensions?.['x-ms-secret'] === true ? true : undefined;
    let minLength: number|undefined;
    let maxLength: number|undefined;
    let pattern: string|undefined;

    switch (schema.type) {
      case SchemaType.Uri:
      case SchemaType.String:
      case SchemaType.Credential:
        minLength = (schema as CredentialSchema | StringSchema | UriSchema).minLength;
        maxLength = (schema as CredentialSchema | StringSchema | UriSchema).maxLength;
        pattern = (schema as CredentialSchema | StringSchema | UriSchema).pattern;
        break;
      case SchemaType.Uuid:
        // In JSON Schema, the following refinements are implicit in the string format of 'uuid'
        minLength = 36;
        maxLength = 36;
        pattern = "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$";
        break;
    }

    return factory.addStringType(secret, minLength, maxLength, pattern);
  }

  function isStringSchema(schema: PrimitiveSchema): boolean
  {
    switch (schema.type)
    {
      case SchemaType.Uri:
      case SchemaType.Date:
      case SchemaType.DateTime:
      case SchemaType.Time:
      case SchemaType.String:
      case SchemaType.Uuid:
      case SchemaType.Duration:
      case SchemaType.Credential:
      case SchemaType.ArmId:
        return true;
    }

    return false;
  }

  function parsePrimaryType(putSchema: PrimitiveSchema | undefined, getSchema: PrimitiveSchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    return toBuiltInType(combinedSchema);
  }

  function handlePolymorphicType(discriminatedObjectType: DiscriminatedObjectType, putSchema?: ObjectSchema, getSchema?: ObjectSchema) {
    const ancestorsToExclude: Set<ComplexSchema> = new Set([...(putSchema?.parents?.all || []), ...(getSchema?.parents?.all || [])]);
    if (putSchema) {
      ancestorsToExclude.add(putSchema);
    }
    if (getSchema) {
      ancestorsToExclude.add(getSchema);
    }

    for (const { putSubType, getSubType } of getDiscriminatedSubTypes(putSchema, getSchema)) {
      const combinedSubType = combineAndThrowIfNull(putSubType, getSubType);

      if (!combinedSubType.discriminatorValue) {
        continue;
      }

      const objectTypeRef = parseObjectType(putSubType, getSubType, ancestorsToExclude);
      const objectType = factory.lookupType(objectTypeRef);
      if (objectType.type !== TypeBaseKind.ObjectType) {
        logWarning(`Found unexpected element of discriminated type '${discriminatedObjectType.name}'`)
        continue;
      }

      discriminatedObjectType.elements[combinedSubType.discriminatorValue] = objectTypeRef;

      const description = (putSchema ?? getSchema)?.discriminator?.property.language.default.description;
      objectType.properties[discriminatedObjectType.discriminator] = createObjectTypeProperty(
        factory.addStringLiteralType(combinedSubType.discriminatorValue),
        ObjectTypePropertyFlags.Required,
        description);
    }
  }

  function getObjectName(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined) {
    const putName = putSchema ? getSerializedName(putSchema) : undefined;
    const getName = getSchema ? getSerializedName(getSchema) : undefined;

    if (putSchema) {
      if (getSchema) {
        if (putName !== getName) {
          return {
            syntheticObject: true,
            definitionName: `${putName}Or${getName}`,
          };
        }
      }

      return {syntheticObject: false, definitionName: putName};
    }

    return {syntheticObject: false, definitionName: getName};
  }

  function parseObjectType(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined, ancestorsToExclude?: Set<ComplexSchema>) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    const {syntheticObject, definitionName} = getObjectName(putSchema, getSchema);

    if (!ancestorsToExclude && namedDefinitions[definitionName]) {
      // if we're building a discriminated subtype, we're going to be missing the base properties
      // so construct the type on-the-fly, and don't cache it globally
      return namedDefinitions[definitionName];
    }

    const lookupParentDictionary = (s: ObjectSchema | undefined) => chain(s?.parents?.all || [])
      .filter(s => {
        if (ancestorsToExclude && ancestorsToExclude.has(s)) {
          return false;
        }

        return s instanceof DictionarySchema;
      })
      .map(s => s as DictionarySchema)
      .first()
      .value();

    const putParentDictionary = lookupParentDictionary(putSchema);
    const getParentDictionary = lookupParentDictionary(getSchema);
    const additionalProperties = putParentDictionary || getParentDictionary
      ? parseType(putParentDictionary?.elementType, getParentDictionary?.elementType)
      : undefined;

    const definitionProperties: Dictionary<ObjectTypeProperty> = {};
    const definition = createObject(definitionName, combinedSchema, definitionProperties, additionalProperties);
    if (!ancestorsToExclude) {
      // cache the definition so that it can be re-used
      namedDefinitions[definitionName] = definition;
    }

    // Only make a distinction between what's defined on PUT vs GET if we're dealing with a synthetic object or a discriminated subtype.
    // If the schema on both PUT and GET is the same named object (or if one of the two is undefined),
    // use the combined schema as both GET and PUT schemata to prevent ReadOnly/WriteOnly flags from trickling down
    // to object properties (which is problematic if shapes are reused across resources)
    //
    // For discriminated subtypes, Bicep's type system does not have a great way to communicate which variants are available on read vs write, but this
    // can be communicated on variant properties. NB: `putSchema` and `getSchema` will only be different in a discriminated subtype if the discriminated
    // object was synthetic.
    const [schemaForPut, schemaForGet] = syntheticObject || ancestorsToExclude ? [putSchema, getSchema] : [combinedSchema, combinedSchema];

    for (const { propertyName, putProperty, getProperty } of getObjectTypeProperties(schemaForPut, schemaForGet, ancestorsToExclude)) {
      const propertyDefinition = parseType(putProperty?.schema, getProperty?.schema);
      if (propertyDefinition !== undefined) {
        const description = getPropertyDescription(putProperty, getProperty);
        const flags = parsePropertyFlags(putProperty, getProperty);
        definitionProperties[propertyName] = createObjectTypeProperty(propertyDefinition, flags, description);
      }
    }

    if (combinedSchema.discriminator) {
      const discriminatedObjectType = factory.lookupType(definition) as DiscriminatedObjectType;

      handlePolymorphicType(discriminatedObjectType, schemaForPut, schemaForGet);
    }

    return definition;
  }

  function getValuesForEnum(schema: ChoiceSchema|SealedChoiceSchema) {
    if (!(schema.choiceType instanceof StringSchema)) {
      // we can only handle string enums right now
      return failure('Only string enums can be converted to union types');
    }

    return success({
      values: schema.choices.map(c => c.value.toString()),
      closed: schema instanceof SealedChoiceSchema
    });
  }

  function parseEnumType(putSchema: ChoiceSchema | SealedChoiceSchema | undefined, getSchema: ChoiceSchema | SealedChoiceSchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);

    const enumValues = getValuesForEnum(combinedSchema);

    if (!enumValues.success) {
      return parseType(putSchema?.choiceType, getSchema?.choiceType);
    }

    const {values, closed} = enumValues.value;

    const enumTypes = values.map(s => factory.addStringLiteralType(s));

    if (!closed) {
      enumTypes.push(factory.addStringType());
    }

    if (enumTypes.length === 1) {
      return enumTypes[0];
    }

    return factory.addUnionType(enumTypes);
  }

  function parseConstant(putSchema: ConstantSchema | undefined, getSchema: ConstantSchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    const constantValue = combinedSchema.value;

    return factory.addStringLiteralType(constantValue.value.toString());
  }

  function parseDictionaryType(putSchema: DictionarySchema | undefined, getSchema: DictionarySchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    const additionalPropertiesType = parseType(putSchema?.elementType, getSchema?.elementType);

    return factory.addObjectType(getSerializedName(combinedSchema), {}, additionalPropertiesType);
  }

  function parseArrayType(putSchema: ArraySchema | undefined, getSchema: ArraySchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    const itemType = parseType(putSchema?.elementType, getSchema?.elementType);
    if (itemType === undefined) {
      return factory.addArrayType(factory.addAnyType(), combinedSchema.minItems, combinedSchema.maxItems);
    }

    return factory.addArrayType(itemType, combinedSchema.minItems, combinedSchema.maxItems);
  }

  function createObjectTypeProperty(type: TypeReference, flags: ObjectTypePropertyFlags, description?: string): ObjectTypeProperty {
    return { type: type, flags: flags, description: description?.trim() || undefined };
  }

  return generateTypes();
}
