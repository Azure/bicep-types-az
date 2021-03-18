// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChoiceSchema, CodeModel, HttpMethod, HttpParameter, HttpRequest, HttpResponse, ImplementationLocation, ObjectSchema, Operation, Parameter, ParameterLocation, Request, Response, Schema, SchemaResponse, SealedChoiceSchema } from "@autorest/codemodel";
import { Channel, Host } from "@autorest/extension-base";
import { keys, Dictionary, values } from 'lodash';

export enum ScopeType {
  Unknown = 0,
  Tenant = 1 << 0,
  ManagementGroup = 1 << 1,
  Subscription = 1 << 2,
  ResourceGroup = 1 << 3,
  Extension = 1 << 4,
}

export interface ResourceDescriptor {
  scopeType: ScopeType;
  namespace: string;
  typeSegments: string[];
  apiVersion: string;
  constantName?: string;
}

export interface ProviderDefinition {
  namespace: string;
  apiVersion: string;
  resourcesByType: Dictionary<ResourceDefinition[]>;
}

export interface ResourceDefinition {
  descriptor: ResourceDescriptor;
  putRequest: HttpRequest;
  putParameters: Parameter[];
  putSchema?: ObjectSchema;
  getSchema?: ObjectSchema;
}

const parentScopePrefix = /^.*\/providers\//ig;
const managementGroupPrefix = /^\/providers\/Microsoft.Management\/managementGroups\/{\w+}\/$/i;
const tenantPrefix = /^\/$/i;
const subscriptionPrefix = /^\/subscriptions\/{\w+}\/$/i;
const resourceGroupPrefix = /^\/subscriptions\/{\w+}\/resourceGroups\/{\w+}\/$/i;
const resourceGroupMethod = /^\/subscriptions\/{\w+}\/resourceGroups\/{\w+}$/i;

function trimScope(scope: string) {
  return scope.replace(/\/*$/, '').replace(/^\/*/, '');
}

function isPathVariable(pathSegment: string) {
  return pathSegment.startsWith('{') && pathSegment.endsWith('}');
}

function trimParamBraces(pathSegment: string) {
  return pathSegment.substr(1, pathSegment.length - 2);
}

export function getFullyQualifiedType(descriptor: ResourceDescriptor) {
  return [descriptor.namespace, ...descriptor.typeSegments].join('/');
}

export function isRootType(descriptor: ResourceDescriptor) {
  return descriptor.typeSegments.length === 1;
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

function getNormalizedMethodPath(path: string) {
  if (resourceGroupMethod.test(path)) {
    // resource groups are a special case - the swagger API is not defined as a provider API, but they are still deployable in a template as if it was.
    return "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/resourceGroups/{resourceGroupName}";
  }

  return path;
}

export function parseNameSchema<T>(descriptor: ResourceDescriptor, request: HttpRequest, parameters: Parameter[], parseType: (schema: Schema) => T, createConstantName: (descriptor: ResourceDescriptor, name: string) => T) {
  const path = getNormalizedMethodPath(request.path);

  const finalProvidersMatch = path.match(parentScopePrefix)?.last;
  if (!finalProvidersMatch) {
    return { success: false, failureReason: `Unable to locate "/providers/" segment`, name: null };
  }

  const routingScope = trimScope(path.substr(finalProvidersMatch.length));

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

    var nameType = parseType(param.schema);

    return { success: true, failureReason: '', name: nameType };
  }

  if (!/^[a-zA-Z0-9]*$/.test(resNameParam)) {
    return { success: false, failureReason: `Unable to process non-alphanumeric name '${resNameParam}'`, name: null };
  }

  return { success: true, failureReason: '', name: createConstantName(descriptor, resNameParam), };
}

export function getProviderDefinitions(codeModel: CodeModel, host: Host): ProviderDefinition[] {
  function logWarning(message: string) {
    host.Message({
      Channel: Channel.Warning,
      Text: message,
    })
  }

  function getProviderDefinitions() {
    const apiVersions = codeModel.operationGroups
      .flatMap(group => group.operations
        .flatMap(op => (op.apiVersions ?? []).map(v => v.version)))
      .filter((x, i, a) => a.indexOf(x) === i);

    return apiVersions.flatMap(v => getProviderDefinitionsForApiVersion(v));
  }

  function getProviderDefinitionsForApiVersion(apiVersion: string) {
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

    const resourcesByProvider: Dictionary<ResourceDefinition[]> = {};
    for (const lcPath in putOperationsByPath) {
      const putOperation = putOperationsByPath[lcPath];
      const getOperation = getOperationsByPath[lcPath];

      const putData = getPutSchema(putOperation);
      const getData = getGetSchema(getOperation) ?? putData;
      if (!putData) {
        continue;
      }

      const { success, failureReason, descriptors } = parseMethod(putData.request.path, putData.parameters, apiVersion);
      if (!success) {
        logWarning(`Skipping path '${putData.request.path}': ${failureReason}`);
        continue;
      }

      for (const descriptor of descriptors) {
        const namespace = descriptor.namespace.toLowerCase();

        if (!providerDefinitions[namespace]) {
          providerDefinitions[namespace] = {
            namespace: descriptor.namespace,
            apiVersion,
            resourcesByType: {},
          };
        }

        const resource: ResourceDefinition = {
          descriptor,
          putRequest: putData.request,
          putParameters: putData.parameters,
          putSchema: putData.schema,
          getSchema: getData?.schema,
        };

        resourcesByProvider[namespace] = [
          ...(resourcesByProvider[namespace] || []),
          resource
        ];
      }
    }

    for (const namespace of keys(providerDefinitions)) {
      providerDefinitions[namespace].resourcesByType = collapseDefinitions(resourcesByProvider[namespace]);
    }

    return values(providerDefinitions);
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

        const choiceSchema = parameter.schema;
        if (!(choiceSchema instanceof ChoiceSchema || choiceSchema instanceof SealedChoiceSchema)) {
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

  return getProviderDefinitions();
}