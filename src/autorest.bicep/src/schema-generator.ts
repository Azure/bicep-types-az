// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AutorestExtensionHost, Channel } from '@autorest/extension-base';
import { JSONSchema4, JSONSchema4TypeName } from 'json-schema';
import { chain, Dictionary, escapeRegExp, keys, orderBy, uniq } from 'lodash';
import { getFullyQualifiedType, getNameSchema, getSerializedName, NameSchema, ProviderDefinition, ResourceDefinition, ResourceDescriptor } from "./resources";
import { isEmpty } from 'lodash';
import { ScopeType } from "bicep-types";
import { AnyObjectSchema, AnySchema, ArraySchema, ByteArraySchema, ChoiceSchema, ComplexSchema, ConstantSchema, DateTimeSchema, DictionarySchema, Metadata, NumberSchema, ObjectSchema, PrimitiveSchema, Property, Schema, SchemaType, SealedChoiceSchema, StringSchema, UuidSchema } from '@autorest/codemodel';
import { failure, success } from './utils';

interface SchemaData {
  definitions: Dictionary<JSONSchema4>;
  rgResources: Dictionary<JSONSchema4>;
  subResources: Dictionary<JSONSchema4>;
  mgResources: Dictionary<JSONSchema4>;
  tenantResources: Dictionary<JSONSchema4>;
  extensionResources: Dictionary<JSONSchema4>;
  unknownResources: Dictionary<JSONSchema4>;
}

export function generateSchema(host: AutorestExtensionHost, definition: ProviderDefinition): JSONSchema4 {
  const schemaData: SchemaData = {
    definitions: {},
    rgResources: {},
    subResources: {},
    mgResources: {},
    tenantResources: {},
    extensionResources: {},
    unknownResources: {},
  }

  function logWarning(message: string) {
    host.message({ Channel: Channel.Warning, Text: message, });
  }

  function getResourcePath(definition: ResourceDefinition) {
    return (definition.putOperation ?? definition.getOperation)?.request.path;
  }

  function tryGetConstantName(nameSchema: NameSchema) {
    if (nameSchema.type === 'constant') {
      return nameSchema.value;
    }

    if ((nameSchema.schema instanceof ChoiceSchema ||  nameSchema.schema instanceof SealedChoiceSchema) &&
      nameSchema.schema.choices.length === 1 && typeof nameSchema.schema.choices[0].value === 'string')
    {
      return nameSchema.schema.choices[0].value;
    }

    return;
  }

  function getResourceNameSchema(descriptor: ResourceDescriptor, nameSchema: NameSchema, isChildDefinition: boolean): JSONSchema4 {
    const constName = tryGetConstantName(nameSchema);

    if (constName) {
      if (descriptor.typeSegments.length < 2 || isChildDefinition) {
        return addExpressionOneOf({
          type: 'string',
          enum: [constName],
        });
      } else {
        return addExpressionOneOf({
          type: 'string',
          pattern: `^.*/${escapeRegExp(constName)}$`,
        });
      }
    }

    return (nameSchema.type == 'parameterized' ? parseType(nameSchema.schema, true) : undefined) ?? { type: 'string' };
  }

  function createObject(properties: Dictionary<JSONSchema4>, additionalProperties?: JSONSchema4): JSONSchema4 {
    return {
      type: 'object',
      properties,
      additionalProperties,
    };
  }

  function throwIfNull<TSchema extends Schema>(putSchema: TSchema | undefined) {
    const output = putSchema;
    if (!output) {
      throw 'Unable to find PUT schema';
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

  function* getObjectTypeProperties(putSchema: ObjectSchema | undefined, ancestorsToExclude?: Set<ComplexSchema>) {
    const putProperties = putSchema ? getSchemaProperties(putSchema, ancestorsToExclude) : {};

    for (const propertyName of keys(putProperties)) {
      if (putSchema?.discriminator?.property && putSchema.discriminator.property === putProperties[propertyName]) {
        continue;
      }

      const putProperty = putProperties[propertyName];

      // exclude readonly properties - they cannot be set in template schemas
      if (isReadOnly(putProperty)) {
        continue;
      }

      yield { propertyName, putProperty };
    }
  }

  function getDescription(schema: Metadata | undefined) {
    return schema?.language.default.description || undefined;
  }

  function getPropertyDescription(putProperty: Property | undefined) {
    return getDescription(putProperty) ?? getDescription(putProperty?.schema);
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

  function* getDiscriminatedSubTypes(putSchema: ObjectSchema | undefined) {
    const putSubTypes = flattenDiscriminatorSubTypes(putSchema);

    for (const subTypeName of uniq([...keys(putSubTypes)])) {
      yield {
        subTypeName,
        putSubType: putSubTypes[subTypeName],
      };
    }
  }

  function parseType(putSchema: Schema | undefined, supportsExpression: boolean) {
    const schema = parseTypeInternal(putSchema);

    if (schema === undefined ||
        isEmpty(schema) ||
        (schema.type === 'string' && !schema.enum && !schema.pattern) ||
        !supportsExpression) {
      return schema;
    }

    return addExpressionOneOf(schema);
  }

  function addExpressionOneOf(schema: JSONSchema4) {
    return {
      oneOf: [
        schema,
        {
          '$ref': 'https://schema.management.azure.com/schemas/common/definitions.json#/definitions/expression',
        }
      ]
    };
  }

  function parseTypeInternal(putSchema: Schema | undefined): JSONSchema4 | undefined {
    // A schema that matches a JSON object with specific properties, such as
    // { "name": { "type": "string" }, "age": { "type": "number" } }
    if (putSchema instanceof ObjectSchema) {
      return parseObjectType(putSchema as ObjectSchema);
    }

    // A schema that matches a "dictionary" JSON object, such as
    // { "additionalProperties": { "type": "string" } }
    if (putSchema instanceof DictionarySchema) {
      return parseDictionaryType(putSchema as DictionarySchema);
    }

    // A schema that matches a single value from a given set of values, such as
    // { "enum": [ "a", "b" ] }
    if (putSchema instanceof ChoiceSchema) {
      return parseEnumType(putSchema as ChoiceSchema);
    }
    if (putSchema instanceof SealedChoiceSchema) {
      return parseEnumType(putSchema as SealedChoiceSchema);
    }
    if (putSchema instanceof ConstantSchema) {
      return parseConstant(putSchema as ConstantSchema);
    }

    // A schema that matches an array of values, such as
    // { "items": { "type": "number" } }
    if (putSchema instanceof ArraySchema) {
      return parseArrayType(putSchema as ArraySchema);
    }

    // A schema that matches simple values (or that is serialized to simple values), such
    // as { "type": "number" } or { "type": "string", "format": "base64url" }
    if (putSchema instanceof PrimitiveSchema || (putSchema instanceof ByteArraySchema && putSchema.format !== 'byte')) {
      return parsePrimaryType(putSchema as PrimitiveSchema);
    }

    if (putSchema instanceof AnyObjectSchema) {
      return {
        type: 'object',
      };
    }

    // The 'any' type
    if (putSchema instanceof AnySchema) {
      return {};
    }

    logWarning(`Unrecognized property type: ${putSchema?.type}. Returning 'any'.`);
    return {};
  }

  function toBuiltInTypeKind(schema: PrimitiveSchema): JSONSchema4TypeName {
    switch (schema.type) {
      case SchemaType.Boolean:
        return 'boolean';
      case SchemaType.Integer:
      case SchemaType.UnixTime:
        return 'integer';
      case SchemaType.Number:
        return 'number'
      case SchemaType.Object:
        return 'object';
      case SchemaType.ByteArray:
        // TODO implement https://github.com/Azure/autorest.azureresourceschema/blob/14a17d2c77e3c0c1180ca19ee59a3b2f414eaf93/src/ResourceSchemaParser.cs#L644-L647
        return (schema as ByteArraySchema).format === 'base64url'
          ? 'string'
          : 'array';
      case SchemaType.Uri:
      case SchemaType.Date:
      case SchemaType.DateTime:
      case SchemaType.Time:
      case SchemaType.String:
      case SchemaType.Uuid:
      case SchemaType.Duration:
      case SchemaType.Credential:
      case SchemaType.ArmId:
        return 'string';
      default:
        logWarning(`Unrecognized known property type: "${schema.type}"`);
        return 'any';
    }
  }

  function parsePrimaryType(putSchema: PrimitiveSchema | undefined): JSONSchema4 {
    const combinedSchema = throwIfNull(putSchema);

    if (combinedSchema instanceof DateTimeSchema) {
      return {
        type: 'string',
        format: combinedSchema.format,
        default: combinedSchema.defaultValue,
      };
    }

    if (combinedSchema instanceof UuidSchema) {
      return {
        type: 'string',
        pattern: '^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$',
        default: combinedSchema.defaultValue,
      };
    }

    if (combinedSchema instanceof StringSchema) {
      return {
        type: 'string',
        pattern: combinedSchema.pattern,
        default: combinedSchema.defaultValue,
        minLength: combinedSchema.minLength,
        maxLength: combinedSchema.maxLength,
      };
    }

    if (combinedSchema instanceof NumberSchema) {
      return {
        type: combinedSchema.type,
        default: combinedSchema.defaultValue,
        minimum: combinedSchema.minimum,
        maximum: combinedSchema.maximum,
        multipleOf: combinedSchema.multipleOf,
      }
    }

    return {
      type: toBuiltInTypeKind(combinedSchema),
      default: combinedSchema.defaultValue,
    };
  }

  function handlePolymorphicType(schema: JSONSchema4, putSchema?: ObjectSchema) {
    const ancestorsToExclude: Set<ComplexSchema> = new Set([...(putSchema?.parents?.all || [])]);
    if (putSchema) {
      ancestorsToExclude.add(putSchema);
    }

    const discriminatorName = putSchema?.discriminator?.property.serializedName;

    const oneOf: JSONSchema4[] = [];
    for (const { subTypeName, putSubType } of getDiscriminatedSubTypes(putSchema)) {
      const childSchema = parseObjectType(putSubType, ancestorsToExclude);

      if (!putSubType.discriminatorValue) {
        logWarning(`Found discriminated sub-type '${subTypeName}' without discriminator value`);
        continue;
      }
 
      if (childSchema.type !== 'object') {
        logWarning(`Found unexpected element of discriminated type '${childSchema.type}'`);
        continue;
      }

      if (discriminatorName) {
        childSchema.properties ??= {};
        childSchema.properties[discriminatorName] = {
          type: 'string',
          enum: [putSubType.discriminatorValue],
        };
  
        childSchema.required = Array.isArray(childSchema.required) ? childSchema.required : [];
        childSchema.required.push(discriminatorName);
      }

      oneOf.push(childSchema);
    }

    if (oneOf.length > 0) {
      schema.oneOf = oneOf;
    }
  }

  function processResourceBody(fullyQualifiedType: string, definition: ResourceDefinition, isChildDefinition: boolean) {
    const { descriptor, putOperation } = definition;

    if (!putOperation) {
      return
    }

    const r = getNameSchema(putOperation.request, putOperation.parameters);
    if (!r.success) {
      logWarning(`Skipping resource type ${fullyQualifiedType} under path '${putOperation.request.path}': ${r.error}`);
      return
    }

    const name = getResourceNameSchema(descriptor, r.value, isChildDefinition);
    if (r.value.type === 'parameterized') {
      name.description = r.value.description;
    }

    const schema: JSONSchema4 = {
      type: 'object',
      properties: {
        name,
      },
      required: [
        'name'
      ],
    };

    const putSchema = putOperation.requestSchema;
    if (!putSchema) {
      return schema;
    }

    for (const { propertyName, putProperty } of getObjectTypeProperties(putSchema)) {
      if (schema.properties![propertyName]) {
        continue;
      }

      const propertyDefinition = parseType(putProperty?.schema, true);
      if (propertyDefinition !== undefined) {
        const description = getPropertyDescription(putProperty);
        schema.properties![propertyName] = {
          ...propertyDefinition,
          description,
        };
      }
    }

    if (schema?.discriminator) {
      handlePolymorphicType(schema, putSchema);
    }

    // TODO this is just here for parity with autorest.azureresourceschema - we sholud consider relaxing it in future.
    if (schema.properties && schema.properties['properties']) {
      schema.required = Array.isArray(schema.required) ? schema.required : [];
      if (schema.required.indexOf('properties') < 0) {
        schema.required.push('properties');
      }
    }

    return schema;
  }

  function addResourceTypeAndApiVersion(descriptor: ResourceDescriptor, schema: JSONSchema4, isChildDefinition: boolean): JSONSchema4 {
    schema.description ??= getFullyQualifiedType(descriptor),
    schema.properties ??= {};
    schema.required ??= [];

    schema.properties['apiVersion'] = {
      type: 'string',
      enum: [descriptor.apiVersion],
    };

    const typeName = isChildDefinition ? descriptor.typeSegments[descriptor.typeSegments.length - 1] : getFullyQualifiedType(descriptor)
    schema.properties['type'] = {
      type: 'string',
      enum: [typeName],
    };

    schema.required = uniq([
      ...(schema.required as string[]),
      'apiVersion',
      'type'
    ]);

    return schema;
  }

  function processResource(fullyQualifiedType: string, definitions: ResourceDefinition[], isChildDefinition: boolean) {
    const descriptor = definitions[0].descriptor;
    if (definitions.length > 1) {
      for (const definition of definitions) {
        if (!definition.descriptor.constantName) {
          logWarning(`Skipping resource type ${fullyQualifiedType} under path '${getResourcePath(definitions[0])}': Found multiple definitions for the same type`);
          return null;
        }
      }

      const oneOf: JSONSchema4[] = [];
      for (const definition of definitions) {
        const bodyType = processResourceBody(fullyQualifiedType, definition, isChildDefinition);
        if (!bodyType || !definition.descriptor.constantName) {
          return null;
        }

        oneOf.push(bodyType);
      }

      const schema: JSONSchema4 = {
        oneOf: oneOf,
      };

      return {
        descriptor: {
          ...descriptor,
          constantName: undefined,
        },
        schema: addResourceTypeAndApiVersion(descriptor, schema, isChildDefinition),
      };
    } else {
      const definition = definitions[0];
      const schema = processResourceBody(fullyQualifiedType, definition, isChildDefinition);
      if (!schema) {
        return null;
      }

      return {
        descriptor,
        schema: addResourceTypeAndApiVersion(descriptor, schema, isChildDefinition),
      };
    }
  }

  function getObjectName(putSchema: ObjectSchema | undefined) {
    return putSchema ? getSerializedName(putSchema) : undefined;
  }

  function parseObjectType(putSchema: ObjectSchema | undefined, ancestorsToExclude?: Set<ComplexSchema>) {
    putSchema = throwIfNull(putSchema);
    const definitionName = getObjectName(putSchema);

    if (!ancestorsToExclude && schemaData.definitions[definitionName]) {
      // if we're building a discriminated subtype, we're going to be missing the base properties
      // so construct the type on-the-fly, and don't cache it globally
      return {
        '$ref': `#/definitions/${definitionName}`,
      };
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
    const additionalProperties = putParentDictionary ? parseType(putParentDictionary?.elementType, true) : undefined;

    const definition = createObject({}, additionalProperties);
    definition.description = getDescription(putSchema);
    if (!ancestorsToExclude) {
      // cache the definition so that it can be re-used
      schemaData.definitions[definitionName] = definition;
    }

    for (const { propertyName, putProperty } of getObjectTypeProperties(putSchema, ancestorsToExclude)) {
      const propertyDefinition = parseType(putProperty?.schema, true);
      if (propertyDefinition !== undefined) {
        const description = getPropertyDescription(putProperty);
        definition.properties![propertyName] = {
          ...propertyDefinition,
          description,
        };

        if (putProperty?.required) {
          const oldRequired = Array.isArray(definition.required) ? definition.required : [];
          definition.required = [...oldRequired, propertyName];
        }
      }
    }

    if (putSchema.discriminator) {
      handlePolymorphicType(definition, putSchema);
    }

    if (!ancestorsToExclude) {
      return {
        '$ref': `#/definitions/${definitionName}`,
      };
    }

    return definition;
  }

  function getValuesForEnum(schema: ChoiceSchema | SealedChoiceSchema) {
    if (!(schema.choiceType instanceof StringSchema)) {
      // we can only handle string enums right now
      return failure('Only string enums can be converted to union types');
    }

    return success({
      values: schema.choices.map(c => c.value.toString()),
      closed: schema instanceof SealedChoiceSchema
    });
  }

  function parseEnumType(putSchema: ChoiceSchema | SealedChoiceSchema | undefined): JSONSchema4 | undefined {
    const combinedSchema = throwIfNull(putSchema);

    const enumValues = getValuesForEnum(combinedSchema);
    if (!enumValues.success) {
      return parseType(combinedSchema.choiceType, true);
    }

    const { values } = enumValues.value;

    // TODO handle 'open' enums?

    return {
      type: 'string',
      enum: values,
    };
  }

  function parseConstant(putSchema: ConstantSchema | undefined): JSONSchema4 {
    const combinedSchema = throwIfNull(putSchema);
    const constantValue = combinedSchema.value;

    return {
      type: 'string',
      enum: [constantValue.value.toString()],
    };
  }

  function parseDictionaryType(putSchema: DictionarySchema | undefined): JSONSchema4 {
    const combinedSchema = throwIfNull(putSchema);
    const additionalPropertiesType = parseType(combinedSchema.elementType, false);

    return {
      type: 'object',
      properties: {},
      additionalProperties: additionalPropertiesType
    };
  }

  function parseArrayType(putSchema: ArraySchema | undefined): JSONSchema4 {
    const itemType = parseType(putSchema?.elementType, false);
    if (itemType === undefined) {
      return {
        type: 'array'
      };
    }

    return {
      type: 'array',
      items: itemType,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function sortObjByKey(value: any): any {
    return (typeof value === 'object') ?
      (Array.isArray(value) ?
        value.map(sortObjByKey) :
        Object.keys(value).sort().reduce(
          (o, key) => {
            const v = value[key];
            o[key] = sortObjByKey(v);
            return o;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }, {} as any)
      ) :
      value;
  }

  function generateSchema(): JSONSchema4 {
    const { resourcesByType } = definition;

    const generated: Dictionary<JSONSchema4> = {};
    // order by length to ensure parent resources are processed before children
    for (const fullyQualifiedType of orderBy(keys(resourcesByType), x => x.length)) {
      const definitions = resourcesByType[fullyQualifiedType];

      const output = processResource(fullyQualifiedType, definitions, false);
      if (!output) {
        continue;
      }

      const { descriptor, schema } = output;
      generated[fullyQualifiedType.toLowerCase()] = schema;
      const definitionName = descriptor.typeSegments.join('_');

      if (ScopeType.Tenant === (descriptor.scopeType & ScopeType.Tenant)) {
        schemaData.tenantResources[definitionName] = schema;
      }
      if (ScopeType.ManagementGroup === (descriptor.scopeType & ScopeType.ManagementGroup)) {
        schemaData.mgResources[definitionName] = schema;
      }
      if (ScopeType.Subscription === (descriptor.scopeType & ScopeType.Subscription)) {
        schemaData.subResources[definitionName] = schema;
      }
      if (ScopeType.ResourceGroup === (descriptor.scopeType & ScopeType.ResourceGroup)) {
        schemaData.rgResources[definitionName] = schema;
      }
      if (ScopeType.Extension === (descriptor.scopeType & ScopeType.Extension)) {
        schemaData.extensionResources[definitionName] = schema;
      }
      if (descriptor.scopeType === ScopeType.Unknown) {
        schemaData.unknownResources[definitionName] = schema;
      }

      if (descriptor.typeSegments.length > 1) {
        const parentType = [descriptor.namespace, ...descriptor.typeSegments.slice(0, -1)].join('/');
        const parentSchema = generated[parentType.toLowerCase()];

        if (parentSchema) {
          // generate nested resource schema definitions
          const output = processResource(fullyQualifiedType, definitions, true);
          if (!output) {
            continue;
          }
    
          const { schema } = output;
          const childResourceDefinitionName = `${definitionName}_childResource`;
          schemaData.definitions[childResourceDefinitionName] = schema;
          
          parentSchema.properties!['resources'] ??= {
            type: 'array',
            items: {
              oneOf: [],
            },
          };

          const items = parentSchema.properties!['resources'].items as JSONSchema4;
          items.oneOf = [...(items.oneOf || []), { '$ref': `#/definitions/${childResourceDefinitionName}` }]
        }
      }
    }

    return {
      id: `https://schema.management.azure.com/schemas/${definition.apiVersion}/${definition.namespace}.json#`,
      title: definition.namespace,
      description: `${definition.namespace.replace('.', ' ')} Resource Types`,
      '$schema': "http://json-schema.org/draft-04/schema#",
      resourceDefinitions: isEmpty(schemaData.rgResources) ? undefined : sortObjByKey(schemaData.rgResources),
      subscription_resourceDefinitions: isEmpty(schemaData.subResources) ? undefined : sortObjByKey(schemaData.subResources),
      managementGroup_resourceDefinitions: isEmpty(schemaData.mgResources) ? undefined : sortObjByKey(schemaData.mgResources),
      tenant_resourceDefinitions: isEmpty(schemaData.tenantResources) ? undefined : sortObjByKey(schemaData.tenantResources),
      extension_resourceDefinitions: isEmpty(schemaData.extensionResources) ? undefined : sortObjByKey(schemaData.extensionResources),
      unknown_resourceDefinitions: isEmpty(schemaData.unknownResources) ? undefined : sortObjByKey(schemaData.unknownResources),
      definitions: sortObjByKey(schemaData.definitions),
    };
  }

  return generateSchema();
}

function isReadOnly(property: Property | undefined) {
  const mutability = property?.extensions?.["x-ms-mutability"] as string[];

  if (mutability && !(mutability.includes('create') || mutability.includes('update'))) {
    return true;
  }

  if (property?.readOnly === true) {
    return true;
  }

  return false;
}