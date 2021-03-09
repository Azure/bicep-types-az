// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnySchema, ArraySchema, ChoiceSchema, ConstantSchema, DictionarySchema, ObjectSchema, PrimitiveSchema, Property, Schema, SchemaType, SealedChoiceSchema, StringSchema } from "@autorest/codemodel";
import { Channel, Host } from "@autorest/extension-base";
import { ArrayType, BuiltInTypeKind, DiscriminatedObjectType, ObjectProperty, ObjectPropertyFlags, ObjectType, ResourceType, StringLiteralType, TypeFactory, TypeReference, UnionType } from "./types";
import { uniq, keys, keyBy, Dictionary, flatMap } from 'lodash';
import { getFullyQualifiedType, isRootType, parseNameSchema, ProviderDefinition, ResourceDescriptor } from "./resources";

export function generateTypes(host: Host, definition: ProviderDefinition) {
  const factory = new TypeFactory();
  const namedDefinitions: Dictionary<TypeReference> = {};

  function logWarning(message: string) {
    host.Message({
      Channel: Channel.Warning,
      Text: message,
    })
  }

  function generateTypes() {
    const resourcesByType = definition.resourcesByType;

    for (const fullyQualifiedType in resourcesByType) {
      const definitions = resourcesByType[fullyQualifiedType];
      if (definitions.length > 1) {
        logWarning(`Skipping resource type ${fullyQualifiedType} under path '${definitions[0].putRequest.path}': Found multiple definitions for the same type`);
        continue;
      }

      const { descriptor, putRequest, putParameters, putSchema, getSchema, } = definitions[0];
      const { success, failureReason, name } = parseNameSchema(
        descriptor,
        putRequest,
        putParameters,
        schema => parseType(schema, schema),
        (descriptor, name) => createConstantResourceName(descriptor, name));

      if (!success || !name) {
        logWarning(`Skipping resource type ${fullyQualifiedType} under path '${putRequest.path}': ${failureReason}`);
        continue;
      }

      const resourceProperties = getStandardizedResourceProperties(descriptor, name);

      let resourceDefinition: TypeReference;
      if (putSchema) {
        resourceDefinition = createObject(getFullyQualifiedType(descriptor), putSchema, resourceProperties);
      } else {
        logWarning(`Resource type ${fullyQualifiedType} under path '${putRequest.path}' has no body defined.`);
        resourceDefinition = factory.addType(new ObjectType(getFullyQualifiedType(descriptor), resourceProperties));
      }

      factory.addType(new ResourceType(
        `${getFullyQualifiedType(descriptor)}@${descriptor.apiVersion}`,
        descriptor.scopeType,
        resourceDefinition));

      for (const { propertyName, putProperty, getProperty } of getObjectTypeProperties(putSchema, getSchema, true)) {
        if (resourceProperties[propertyName]) {
          continue;
        }

        const propertyDefinition = parseType(putProperty?.schema, getProperty?.schema);
        if (propertyDefinition) {
          var flags = parsePropertyFlags(putProperty, getProperty);
          resourceProperties[propertyName] = new ObjectProperty(propertyDefinition, flags);
        }
      }

      if (putSchema?.discriminator || getSchema?.discriminator) {
        const discriminatedObjectType = factory.lookupType(resourceDefinition) as DiscriminatedObjectType;

        handlePolymorphicType(discriminatedObjectType, putSchema, getSchema);
      }
    }

    return factory.types;
  }

  function createConstantResourceName(descriptor: ResourceDescriptor, nameValue: string) {
    if (isRootType(descriptor)) {
      return factory.addType(new StringLiteralType(nameValue));
    }

    return factory.lookupBuiltInType(BuiltInTypeKind.String);
  }

  function getStandardizedResourceProperties(descriptor: ResourceDescriptor, resourceName: TypeReference): Dictionary<ObjectProperty> {
    var type = factory.addType(new StringLiteralType(getFullyQualifiedType(descriptor)));

    return {
      id: { type: factory.lookupBuiltInType(BuiltInTypeKind.String), flags: ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, },
      name: { type: resourceName, flags: ObjectPropertyFlags.Required | ObjectPropertyFlags.DeployTimeConstant, },
      type: { type: type, flags: ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, },
      apiVersion: { type: factory.addType(new StringLiteralType(descriptor.apiVersion)), flags: ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, },
    };
  }

  function createObject(definitionName: string, schema: ObjectSchema, properties: Dictionary<ObjectProperty>) {
    if (schema.discriminator) {
      return factory.addType(new DiscriminatedObjectType(
        definitionName,
        schema.discriminator.property.serializedName,
        properties,
        {}));
    }

    return factory.addType(new ObjectType(definitionName, properties));
  }

  function combineAndThrowIfNull<TSchema extends Schema>(putSchema: TSchema | undefined, getSchema: TSchema | undefined) {
    const output = putSchema ?? getSchema;
    if (!output) {
      throw 'Unable to find PUT or GET type';
    }

    return output;
  }

  function getSchemaProperties(schema: ObjectSchema, includeParents: boolean): Dictionary<Property> {
    const objects = [schema];
    if (includeParents) {
      for (const parent of schema.parents?.all || []) {
        if (parent instanceof ObjectSchema) {
          objects.push(parent);
        }
      }
    }

    return keyBy(flatMap(objects, o => o.properties || []), p => p.serializedName);
  }

  function* getObjectTypeProperties(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined, includeParents: boolean) {
    const putProperties = putSchema ? getSchemaProperties(putSchema, includeParents) : {};
    const getProperties = getSchema ? getSchemaProperties(getSchema, includeParents) : {};

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

  function flattenDiscriminatorSubTypes(schema: ObjectSchema | undefined) {
    if (!schema || !schema.discriminator) {
      return {};
    }

    const output: Dictionary<ObjectSchema> = {};
    for (const key in schema.discriminator.all) {
      const value = schema.discriminator.all[key];

      if (!(value instanceof ObjectSchema)) {
        throw `Unable to flatten discriminated properties - schema '${schema.language.default.name}' has non-object discriminated value '${value.language.default.name}'.`;
      }

      if (!value.discriminator) {
        output[key] = value;
        continue;
      }

      if (schema.discriminator.property.serializedName !== value.discriminator.property.serializedName) {
        throw `Unable to flatten discriminated properties - schemas '${schema.language.default.name}' and '${value.language.default.name}' have conflicting discriminators '${schema.discriminator.property.serializedName}' and '${value.discriminator.property.serializedName}'`;
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
      return parseObjectType(putSchema as ObjectSchema, getSchema as ObjectSchema, true);
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

    // A schema that matches simple values, such as { "type": "number" }
    if (combinedSchema instanceof PrimitiveSchema) {
      return parsePrimaryType(putSchema as PrimitiveSchema, getSchema as PrimitiveSchema);
    }

    // The 'any' type
    if (combinedSchema instanceof AnySchema) {
      return factory.lookupBuiltInType(BuiltInTypeKind.Any);
    }

    logWarning(`Unrecognized property type: ${combinedSchema.type}. Returning 'any'.`);
    return factory.lookupBuiltInType(BuiltInTypeKind.Any);
  }

  function parsePropertyFlags(putProperty: Property | undefined, getProperty: Property | undefined) {
    let flags = ObjectPropertyFlags.None;

    if (putProperty && putProperty.required) {
      flags |= ObjectPropertyFlags.Required;
    }

    if (!putProperty || putProperty.readOnly) {
      flags |= ObjectPropertyFlags.ReadOnly;
    }

    if (!getProperty) {
      flags |= ObjectPropertyFlags.WriteOnly;
    }

    return flags;
  }

  function parsePrimaryType(putSchema: PrimitiveSchema | undefined, getSchema: PrimitiveSchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);

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
      case SchemaType.UnixTime:
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

  function handlePolymorphicType(discriminatedObjectType: DiscriminatedObjectType, putSchema?: ObjectSchema, getSchema?: ObjectSchema) {
    for (const { putSubType, getSubType } of getDiscriminatedSubTypes(putSchema, getSchema)) {
      const combinedSubType = combineAndThrowIfNull(putSubType, getSubType);

      if (!combinedSubType.discriminatorValue) {
        continue;
      }

      const objectTypeRef = parseObjectType(putSubType, getSubType, false);
      const objectType = factory.lookupType(objectTypeRef);
      if (!(objectType instanceof ObjectType)) {
        logWarning(`Found unexpected element of discriminated type '${discriminatedObjectType.name}'`)
        continue;
      }

      discriminatedObjectType.elements[combinedSubType.discriminatorValue] = objectTypeRef;

      objectType.properties[discriminatedObjectType.discriminator] = new ObjectProperty(
        factory.addType(new StringLiteralType(combinedSubType.discriminatorValue)),
        ObjectPropertyFlags.Required);
    }
  }

  function parseObjectType(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined, includeParents: boolean) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    const definitionName = combinedSchema.language.default.name;

    if (!namedDefinitions[definitionName]) {
      const definitionProperties: Dictionary<ObjectProperty> = {};
      const definition = createObject(definitionName, combinedSchema, definitionProperties);
      namedDefinitions[definitionName] = definition;

      for (const { propertyName, putProperty, getProperty } of getObjectTypeProperties(putSchema, getSchema, includeParents)) {
        const propertyDefinition = parseType(putProperty?.schema, getProperty?.schema);
        if (propertyDefinition) {
          const flags = parsePropertyFlags(putProperty, getProperty);
          definitionProperties[propertyName] = new ObjectProperty(propertyDefinition, flags);
        }
      }

      /*
  var (putAdditionalType, getAdditionalType) = getObjectTypeAdditionalProperties(putSchema, getSchema, includeParents);
  if ((putAdditionalType ?? getAdditionalType) != null && definition is ObjectType definitionObjectType)
  {
      var additionalPropertiesType = ParseType(putAdditionalType?.ValueType, getAdditionalType?.ValueType);
      definitionObjectType.AdditionalProperties = factory.GetReference(additionalPropertiesType);
  }
  */

      if (combinedSchema.discriminator) {
        const discriminatedObjectType = factory.lookupType(definition) as DiscriminatedObjectType;

        handlePolymorphicType(discriminatedObjectType, putSchema, getSchema);
      }
    }

    return namedDefinitions[definitionName];
  }

  function parseEnumType(putSchema: ChoiceSchema | SealedChoiceSchema | undefined, getSchema: ChoiceSchema | SealedChoiceSchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);

    if (!(combinedSchema.choiceType instanceof StringSchema)) {
      // we can only handle string enums right now
      return parseType(putSchema?.choiceType, getSchema?.choiceType);
    }

    const enumTypes = [];
    for (const enumValue of combinedSchema.choices) {
      const stringLiteralType = factory.addType(new StringLiteralType(enumValue.value.toString()));
      enumTypes.push(stringLiteralType);
    }

    if (enumTypes.length === 1) {
      return enumTypes[0];
    }

    return factory.addType(new UnionType(enumTypes));
  }

  function parseConstant(putSchema: ConstantSchema | undefined, getSchema: ConstantSchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    const constantValue = combinedSchema.value;

    return factory.addType(new StringLiteralType(constantValue.value.toString()));
  }

  function parseDictionaryType(putSchema: DictionarySchema | undefined, getSchema: DictionarySchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    const additionalPropertiesType = parseType(putSchema?.elementType, getSchema?.elementType);

    return factory.addType(new ObjectType(combinedSchema.language.default.name, {}, additionalPropertiesType));
  }

  function parseArrayType(putSchema: ArraySchema | undefined, getSchema: ArraySchema | undefined) {
    var itemType = parseType(putSchema?.elementType, getSchema?.elementType);
    if (!itemType) {
      return factory.lookupBuiltInType(BuiltInTypeKind.Array);
    }

    return factory.addType(new ArrayType(itemType));
  }

  return generateTypes();
}