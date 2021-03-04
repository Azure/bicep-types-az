// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ArraySchema, ChoiceSchema, CodeModel, DictionarySchema, HttpMethod, HttpParameter, HttpRequest, HttpResponse, ImplementationLocation, ObjectSchema, Operation, Parameter, ParameterLocation, PrimitiveSchema, Property, Request, Response, Schema, SchemaResponse, SchemaType, StringSchema } from "@autorest/codemodel";
import { Channel, Host } from "@autorest/extension-base";
import { ProviderDefinition, ResourceDefinition, ResourceDescriptor, ScopeType } from './models';
import { ArrayType, BuiltInTypeKind, DiscriminatedObjectType, ObjectProperty, ObjectPropertyFlags, ObjectType, ResourceType, StringLiteralType, TypeFactory, TypeReference, UnionType } from "./types";
import { uniq, keys, keyBy, Dictionary, mapValues, flatMap, values } from 'lodash';

export function generateTypes(codeModel: CodeModel, host: Host) {
  function logWarning(message: string) {
    host.Message({
      Channel: Channel.Warning,
      Text: message,
    })
  }

  function generateTypesForApiVersion(apiVersion: string) {
    const providerDefinitions: Dictionary<ProviderDefinition> = {};
    const operations = codeModel.operationGroups.flatMap(x => x.operations);

    const getOperationsByPath: Dictionary<Operation> = {};
    const putOperationsByPath: Dictionary<Operation> = {};
    operations.forEach(operation => {
      const requests = getHttpRequests(operation.requests);
      const getRequest = requests.filter(r => r.method === HttpMethod.Get)[0];
      if (getRequest) {
        getOperationsByPath[getRequest.path.toLowerCase()] = operation;
      }
      const putRequest = requests.filter(r => r.method === HttpMethod.Put)[0];
      if (putRequest) {
        putOperationsByPath[putRequest.path.toLowerCase()] = operation;
      }
    });

    for (const lcPath in putOperationsByPath) {
      const putOperation = putOperationsByPath[lcPath];
      const getOperation = getOperationsByPath[lcPath];

      const putData = getPutSchema(putOperation);
      const getData = getGetSchema(getOperation);
      if (!putData) {
        continue;
      }

      const { success, failureReason, descriptors } = parseMethod(putData.request.path, putData.parameters, apiVersion);
      if (!success) {
        logWarning(`Skipping path '${putData.request.path}': ${failureReason}`);
        continue;
      }

      for (const descriptor of descriptors) {
        if (!providerDefinitions[descriptor.namespace]) {
          providerDefinitions[descriptor.namespace] = {
            namespace: descriptor.namespace,
            apiVersion,
            resources: []
          };
        }
        const providerDefinition = providerDefinitions[descriptor.namespace];

        providerDefinition.resources.push({
          descriptor,
          putRequest: putData.request,
          putParameters: putData.parameters,
          putSchema: putData.schema,
          getSchema: getData?.schema,
        });
      }
    }

    return mapValues(
      providerDefinitions,
      definition => generateProviderTypes(definition));
  }

  function generateProviderTypes(definition: ProviderDefinition) {
    const definitionsByType = collapseDefinitions(definition.resources);
    const factory = new TypeFactory();

    for (const fullyQualifiedType in definitionsByType) {
      const definitions = definitionsByType[fullyQualifiedType];
      if (definitions.length > 1) {
        logWarning(`Skipping resource type ${fullyQualifiedType} under path '${definitions[0].putRequest.path}': Found multiple definitions for the same type`);
        continue;
      }

      const { descriptor, putRequest, putParameters, putSchema, getSchema, } = definitions[0];
      const { success, failureReason, name } = parseNameSchema(factory, descriptor, putRequest, putParameters);

      if (!success || !name) {
        logWarning(`Skipping resource type ${fullyQualifiedType} under path '${putRequest.path}': ${failureReason}`);
        continue;
      }

      if (!putSchema) {
        logWarning(`Skipping resource type ${fullyQualifiedType} under path '${putRequest.path}': No resource body defined`);
        continue;
      }

      const resourceProperties = getStandardizedResourceProperties(factory, descriptor, name);
      const resourceDefinition = createObject(factory, getFullyQualifiedType(descriptor), putSchema, resourceProperties);
      const combinedSchema = combineAndThrowIfNull(getSchema, putSchema);

      factory.addType(new ResourceType(
        `${getFullyQualifiedType(descriptor)}@${descriptor.apiVersion}`,
        descriptor.scopeType,
        resourceDefinition));

      for (const { propertyName, putProperty, getProperty } of getObjectTypeProperties(putSchema, getSchema, true)) {
        if (resourceProperties[propertyName]) {
          continue;
        }

        const propertyDefinition = parseType(factory, putProperty?.schema, getProperty?.schema);
        if (propertyDefinition) {
          var flags = parsePropertyFlags(putProperty, getProperty);
          resourceProperties[propertyName] = new ObjectProperty(propertyDefinition, flags);
        }
      }

      if (combinedSchema.discriminator) {
        const discriminatedObjectType = factory.lookupType(resourceDefinition) as DiscriminatedObjectType;

        handlePolymorphicType(factory, discriminatedObjectType, putSchema, getSchema);
      }
    }

    return factory.types;
  }

  function getHttpRequests(requests: Request[] | undefined) {
    return requests?.map(x => x.protocol.http as HttpRequest).filter(x => !!x) ?? [];
  }

  function hasStatusCode(response: Response, statusCode: string) {
    const statusCodes = (response.protocol.http as HttpResponse)?.statusCodes;
    if (!statusCodes) {
      return;
    }

    return (statusCodes as string[]).includes(statusCode);
  }

  function getGetSchema(operation?: Operation) {
    const responses = operation?.responses ?? [];
    const validResponses = [
      // order 200 responses before default
      ...responses.filter(r => hasStatusCode(r, "200")),
      ...responses.filter(r => hasStatusCode(r, "default")),
    ];

    if (!operation || validResponses.length === 0) {
      return;
    }

    for (const response of validResponses) {
      const schemaResponse = response as SchemaResponse;
      if (schemaResponse) {
        return {
          response: (response.protocol.http as HttpResponse),
          schema: schemaResponse.schema as ObjectSchema,
        };
      }
    }

    return {
      response: (validResponses[0].protocol.http as HttpResponse),
    };
  }

  function combineParameters(operation: Operation, request: Request) {
    return [...(operation.parameters || []), ...(request.parameters || [])];
  }

  function getPutSchema(operation?: Operation) {
    const requests = operation?.requests ?? [];
    const validRequests = requests.filter(r => (r.protocol.http as HttpRequest)?.method === HttpMethod.Put);

    if (!operation || validRequests.length === 0) {
      return;
    }

    for (const request of validRequests) {
      const parameters = combineParameters(operation, request);
      const bodyParameters = parameters.filter(p => (p.protocol.http as HttpParameter)?.in === ParameterLocation.Body);
      if (bodyParameters.length > 0) {
        return {
          request: (request.protocol.http as HttpRequest),
          parameters,
          schema: bodyParameters[0].schema as ObjectSchema,
        };
      }
    }

    return {
      request: (validRequests[0].protocol.http as HttpRequest),
      parameters: combineParameters(operation, validRequests[0]),
    };
  }

  const parentScopePrefix = /^.*\/providers\//ig;
  const managementGroupPrefix = /^\/providers\/Microsoft.Management\/managementGroups\/{\w+}\/$/i;
  const tenantPrefix = /^\/$/i;
  const subscriptionPrefix = /^\/subscriptions\/{\w+}\/$/i;
  const resourceGroupPrefix = /^\/subscriptions\/{\w+}\/resourceGroups\/{\w+}\/$/i;
  const resourceGroupMethod = /^\/subscriptions\/{\w+}\/resourceGroups\/{\w+}$/i;

  function parseMethod(path: string, parameters: Parameter[], apiVersion: string) {
    path = getNormalizedMethodPath(path);

    const finalProvidersMatch = path.match(parentScopePrefix)?.last;
    if (!finalProvidersMatch) {
      return { success: false, failureReason: `Unable to locate "/providers/" segment`, descriptors: [] };
    }

    const parentScope = path.substr(0, finalProvidersMatch.length - "providers/".length);
    const routingScope = trimScope(path.substr(finalProvidersMatch.length));

    const namespace = routingScope.substr(0, routingScope.indexOf('/'));
    if (isPathVariable(namespace)) {
      return { success: false, failureReason: `Unable to process parameterized provider namespace "${namespace}"`, descriptors: [] };
    }

    const { success, failureReason, resourceTypes } = parseResourceTypes(parameters, routingScope);
    if (!success) {
      return { success: false, failureReason, descriptors: [] };
    }

    const resNameParam = routingScope.substr(routingScope.lastIndexOf('/') + 1);
    const constantName = isPathVariable(resNameParam) ? undefined : resNameParam;

    const scopeType = getScopeTypeFromParentScope(parentScope);

    const descriptors: ResourceDescriptor[] = resourceTypes.map(type => ({
      scopeType,
      namespace,
      typeSegments: type,
      apiVersion,
      constantName,
    }));

    return { success: true, failureReason: '', descriptors };
  }

  function parseResourceTypes(parameters: Parameter[], routingScope: string) {
    const typeSegments = routingScope.split('/').slice(1).filter((_, i) => i % 2 === 0);
    const nameSegments = routingScope.split('/').slice(1).filter((_, i) => i % 2 === 1);

    if (typeSegments.length === 0) {
      return { success: false, failureReason: `Unable to find type segments`, resourceTypes: [] };
    }

    if (typeSegments.length !== nameSegments.length) {
      return { success: false, failureReason: `Found mismatch between type segments (${typeSegments.length}) and name segments (${nameSegments.length})`, resourceTypes: [] };
    }

    let resourceTypes: string[][] = [[]];
    for (const typeSegment of typeSegments) {
      if (isPathVariable(typeSegment)) {
        const parameterName = trimParamBraces(typeSegment);
        const parameter = parameters.filter(p =>
          p.implementation === ImplementationLocation.Method &&
          p.language.default.name === parameterName)[0];

        if (!parameter) {
          return { success: false, failureReason: `Found undefined parameter reference ${typeSegment}`, resourceTypes: [] };
        }

        const choiceSchema = (parameter.schema as ChoiceSchema);
        if (!choiceSchema) {
          return { success: false, failureReason: `Parameter reference ${typeSegment} is not defined as an enum`, resourceTypes: [] };
        }

        if (choiceSchema.choices.length === 0) {
          return { success: false, failureReason: `Parameter reference ${typeSegment} is defined as an enum, but doesn't have any specified values`, resourceTypes: [] };
        }

        resourceTypes = resourceTypes.flatMap(type => choiceSchema.choices.map(v => [...type, v.value.toString()]));
      } else {
        resourceTypes = resourceTypes.map(type => [...type, typeSegment]);
      }
    }

    return { success: true, failureReason: '', resourceTypes };
  }

  function getNormalizedMethodPath(path: string) {
    if (resourceGroupMethod.test(path)) {
      // resource groups are a special case - the swagger API is not defined as a provider API, but they are still deployable in a template as if it was.
      return "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/resourceGroups/{resourceGroupName}";
    }

    return path;
  }

  function getScopeTypeFromParentScope(parentScope: string) {
    if (tenantPrefix.test(parentScope)) {
      return ScopeType.Tenant;
    }

    if (managementGroupPrefix.test(parentScope)) {
      return ScopeType.ManagementGroup;
    }

    if (resourceGroupPrefix.test(parentScope)) {
      return ScopeType.ResourceGroup;
    }

    if (subscriptionPrefix.test(parentScope)) {
      return ScopeType.Subscription;
    }

    if (parentScopePrefix.test(parentScope)) {
      return ScopeType.Extension;
    }

    // ambiguous - without any further information, we have to assume 'all'
    return ScopeType.Unknown;
  }

  function trimScope(scope: string) {
    return scope.replace(/\/*$/, '').replace(/^\/*/, '');
  }

  function isPathVariable(pathSegment: string) {
    return pathSegment.startsWith('{') && pathSegment.endsWith('}');
  }

  function trimParamBraces(pathSegment: string) {
    return pathSegment.substr(1, pathSegment.length - 2);
  }

  function parseNameSchema(factory: TypeFactory, descriptor: ResourceDescriptor, request: HttpRequest, parameters: Parameter[]) {
    const finalProvidersMatch = request.path.match(parentScopePrefix)?.last;
    const routingScope = trimScope(request.path.substr(finalProvidersMatch!.length));

    // get the resource name parameter, e.g. {fooName}
    var resNameParam = routingScope.substr(routingScope.lastIndexOf('/') + 1);

    if (isPathVariable(resNameParam)) {
      // strip the enclosing braces
      resNameParam = trimParamBraces(resNameParam);

      // look up the type
      var param = parameters.filter(p => p.language.default.name === resNameParam)[0];
      if (!param) {
        return { success: false, failureReason: `Unable to locate parameter with name '${resNameParam}'`, name: null };
      }

      var nameType = parseType(factory, param.schema, param.schema);

      return { success: true, failureReason: '', name: nameType };
    }

    if (!/^[a-zA-Z0-9]*$/.test(resNameParam)) {
      return { success: false, failureReason: `Unable to process non-alphanumeric name '${resNameParam}'`, name: null };
    }

    return { success: true, failureReason: '', name: createConstantResourceName(factory, descriptor, resNameParam), };
  }

  function createConstantResourceName(factory: TypeFactory, descriptor: ResourceDescriptor, nameValue: string) {
    if (isRootType(descriptor)) {
      return factory.addType(new StringLiteralType(nameValue));
    }

    return factory.lookupBuiltInType(BuiltInTypeKind.String);
  }

  function getFullyQualifiedType(descriptor: ResourceDescriptor) {
    return [descriptor.namespace, ...descriptor.typeSegments].join('/');
  }

  function isRootType(descriptor: ResourceDescriptor) {
    return descriptor.typeSegments.length === 1;
  }

  function collapseDefinitionScopes(resources: ResourceDefinition[]) {
    const definitionsByName: Dictionary<ResourceDefinition> = {};
    for (const resource of resources) {
      const name = resource.descriptor.constantName ?? '';
      if (definitionsByName[name]) {
        const curDescriptor = definitionsByName[name].descriptor;
        const newDescriptor = resource.descriptor;

        definitionsByName[name] = {
          ...definitionsByName[name],
          descriptor: {
            ...curDescriptor,
            scopeType: curDescriptor.scopeType | newDescriptor.scopeType,
          },
        };
      } else {
        definitionsByName[name] = resource;
      }
    }

    return Object.values(definitionsByName);
  }

  function groupByType(resources: ResourceDefinition[]) {
    return resources.reduce((prev, cur) => {
      const key = getFullyQualifiedType(cur.descriptor).toLowerCase();
      prev[key] = [...(prev[key] ?? []), cur];

      return prev;
    }, {} as Dictionary<ResourceDefinition[]>);
  }

  function collapseDefinitions(resources: ResourceDefinition[]) {
    const resourcesByType = groupByType(resources);
    const collapsedResources = Object.values(resourcesByType).flatMap(collapseDefinitionScopes);

    return groupByType(collapsedResources);
  }

  function getStandardizedResourceProperties(factory: TypeFactory, descriptor: ResourceDescriptor, resourceName: TypeReference): Dictionary<ObjectProperty> {
    var type = factory.addType(new StringLiteralType(getFullyQualifiedType(descriptor)));

    return {
      id: { type: factory.lookupBuiltInType(BuiltInTypeKind.String), flags: ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, },
      name: { type: resourceName, flags: ObjectPropertyFlags.Required | ObjectPropertyFlags.DeployTimeConstant, },
      type: { type: type, flags: ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, },
      apiVersion: { type: factory.addType(new StringLiteralType(descriptor.apiVersion)), flags: ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, },
    };
  }

  function createObject(factory: TypeFactory, definitionName: string, schema: ObjectSchema, properties: Dictionary<ObjectProperty>) {
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

    return keyBy(flatMap(objects, o => o.properties || []), p => p?.language.default.name);
  }

  function* getObjectTypeProperties(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined, includeParents: boolean) {
    const putProperties = putSchema ? getSchemaProperties(putSchema, includeParents) : {};
    const getProperties = getSchema ? getSchemaProperties(getSchema, includeParents) : {};

    for (const propertyName of uniq([...keys(putProperties), ...keys(getProperties)])) {
      if (putSchema?.discriminator?.property === putProperties[propertyName] ||
        getSchema?.discriminator?.property === getProperties[propertyName]) {
        continue;
      }

      const putProperty = putProperties[propertyName] as Property | undefined
      const getProperty = getProperties[propertyName] as Property | undefined

      yield { propertyName, putProperty, getProperty };
    }
  }

  function* getDiscriminatedSubTypes(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined) {
    const putSubTypes = putSchema?.discriminator?.all || {};
    const getSubTypes = getSchema?.discriminator?.all || {};

    for (const subTypeName of uniq([...keys(putSubTypes), ...keys(getSubTypes)])) {
      const putSubType = putSubTypes[subTypeName] instanceof ObjectSchema ? (putSubTypes[subTypeName] as ObjectSchema) : undefined;
      const getSubType = putSubTypes[subTypeName] instanceof ObjectSchema ? (getSubTypes[subTypeName] as ObjectSchema) : undefined;

      yield { subTypeName, putSubType, getSubType };
    }
  }

  function parseType(factory: TypeFactory, putSchema: Schema | undefined, getSchema: Schema | undefined): TypeReference | undefined {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);

    // A schema that matches a JSON object with specific properties, such as
    // { "name": { "type": "string" }, "age": { "type": "number" } }
    if (combinedSchema instanceof ObjectSchema) {
      return parseObjectType(factory, putSchema as ObjectSchema, getSchema as ObjectSchema, true);
    }

    // A schema that matches a "dictionary" JSON object, such as
    // { "additionalProperties": { "type": "string" } }
    if (combinedSchema instanceof DictionarySchema) {
      return parseDictionaryType(factory, putSchema as DictionarySchema, getSchema as DictionarySchema);
    }

    // A schema that matches a single value from a given set of values, such as
    // { "enum": [ "a", "b" ] }
    if (combinedSchema instanceof ChoiceSchema) {
      return parseEnumType(factory, putSchema as ChoiceSchema, getSchema as ChoiceSchema);
    }

    // A schema that matches simple values, such as { "type": "number" }
    if (combinedSchema instanceof PrimitiveSchema) {
      return parsePrimaryType(factory, putSchema as PrimitiveSchema, getSchema as PrimitiveSchema);
    }

    // A schema that matches an array of values, such as
    // { "items": { "type": "number" } }
    if (combinedSchema instanceof ArraySchema) {
      return parseArrayType(factory, putSchema as ArraySchema, getSchema as ArraySchema);
    }

    logWarning(`Unrecognized property type: ${combinedSchema.type}`);
    return;
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

  function parsePrimaryType(factory: TypeFactory, putSchema: PrimitiveSchema | undefined, getSchema: PrimitiveSchema | undefined) {
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
        return factory.lookupBuiltInType(BuiltInTypeKind.String);
      default:
        logWarning(`Unrecognized known property type: "${combinedSchema.type}"`);
        return factory.lookupBuiltInType(BuiltInTypeKind.Any);
    }
  }

  function handlePolymorphicType(factory: TypeFactory, discriminatedObjectType: DiscriminatedObjectType, putSchema?: ObjectSchema, getSchema?: ObjectSchema) {
    for (const { putSubType, getSubType } of getDiscriminatedSubTypes(putSchema, getSchema)) {
      const combinedSubType = combineAndThrowIfNull(putSubType, getSubType);

      if (!combinedSubType.discriminatorValue) {
        continue;
      }

      const objectTypeRef = parseObjectType(factory, putSubType, getSubType, false);
      discriminatedObjectType.elements[combinedSubType.discriminatorValue] = objectTypeRef;

      const objectType = factory.lookupType(objectTypeRef) as ObjectType;
      objectType.properties[discriminatedObjectType.discriminator] = new ObjectProperty(
        factory.addType(new StringLiteralType(combinedSubType.discriminatorValue)),
        ObjectPropertyFlags.Required);
    }
  }

  function parseObjectType(factory: TypeFactory, putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined, includeParents: boolean) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    const definitionName = combinedSchema.language.default.name;

    if (!factory.namedDefinitions[definitionName]) {
      const definitionProperties: Dictionary<ObjectProperty> = {};
      const definition = createObject(factory, definitionName, combinedSchema, definitionProperties);
      factory.namedDefinitions[definitionName] = definition;

      for (const { propertyName, putProperty, getProperty } of getObjectTypeProperties(putSchema, getSchema, includeParents)) {
        const propertyDefinition = parseType(factory, putProperty?.schema, getProperty?.schema);
        if (propertyDefinition) {
          const flags = parsePropertyFlags(putProperty, getProperty);
          definitionProperties[propertyName] = new ObjectProperty(propertyDefinition, flags);
        }
      }

      /*
  var (putAdditionalType, getAdditionalType) = getObjectTypeAdditionalProperties(factory, putSchema, getSchema, includeParents);
  if ((putAdditionalType ?? getAdditionalType) != null && definition is ObjectType definitionObjectType)
  {
      var additionalPropertiesType = ParseType(putAdditionalType?.ValueType, getAdditionalType?.ValueType);
      definitionObjectType.AdditionalProperties = factory.GetReference(additionalPropertiesType);
  }
  */

      if (combinedSchema.discriminator) {
        const discriminatedObjectType = factory.lookupType(definition) as DiscriminatedObjectType;

        handlePolymorphicType(factory, discriminatedObjectType, putSchema, getSchema);
      }
    }

    return factory.namedDefinitions[definitionName];
  }

  function parseEnumType(factory: TypeFactory, putSchema: ChoiceSchema | undefined, getSchema: ChoiceSchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);

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

  function parseDictionaryType(factory: TypeFactory, putSchema: DictionarySchema | undefined, getSchema: DictionarySchema | undefined) {
    const combinedSchema = combineAndThrowIfNull(putSchema, getSchema);
    const additionalPropertiesType = parseType(factory, putSchema?.elementType, getSchema?.elementType);

    return factory.addType(new ObjectType(combinedSchema.language.default.name, {}, additionalPropertiesType));
  }

  function parseArrayType(factory: TypeFactory, putSchema: ArraySchema | undefined, getSchema: ArraySchema | undefined) {
    var itemType = parseType(factory, putSchema?.elementType, getSchema?.elementType);
    if (!itemType) {
      return factory.lookupBuiltInType(BuiltInTypeKind.Array);
    }

    return factory.addType(new ArrayType(itemType));
  }

  function* generateTypes() {
    const apiVersions = codeModel.operationGroups
      .flatMap(group => group.operations
        .flatMap(op => (op.apiVersions ?? []).map(v => v.version)))
      .filter((x, i, a) => a.indexOf(x) === i);

    for (const apiVersion of apiVersions) {
      const typesByProvider = generateTypesForApiVersion(apiVersion);

      for (const provider of keys(typesByProvider)) {
        yield {
          provider,
          apiVersion,
          types: typesByProvider[provider],
        };
      }
    }
  }

  return generateTypes();
}