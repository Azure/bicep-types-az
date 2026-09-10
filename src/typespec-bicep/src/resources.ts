// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EmitContext, getNamespaceFullName, Model, ModelProperty, Namespace, Operation, Program, Type } from "@typespec/compiler";
import { ScopeType } from "@azure/bicep-types";
import { getArmResources, resolveArmResources, resolveResourceOperations, ArmResourceDetails, ResolvedResource,
  isSingletonResource, getSingletonResourceKey } from "@azure-tools/typespec-azure-resource-manager";
import { getAllHttpServices, getHttpOperation, HttpOperation } from "@typespec/http";
import { BicepEmitterOptions, $lib } from "./lib.js";
import { expandParameterizedSegments, getDefaultScopeFromKind, getFullyQualifiedType, getResolvedTypeSegments,
  getScopeFromPath, getTypeSegmentsFromPath, isResourceInstancePath } from "./resource-helpers.js";

/**
 * Describes the scope path segments for an ARM resource type.
 */
export interface ResourceDescriptor {
  namespace: string;
  typeSegments: string[];
  apiVersion: string;
  readableScopes: ScopeType;
  writableScopes: ScopeType;
  constantName?: string;
}

/**
 * A single ARM resource definition extracted from the TypeSpec program.
 */
export interface ResourceDefinition {
  descriptor: ResourceDescriptor;
  /** The TypeSpec Model representing the resource body (PUT request body). */
  putModel?: Model;
  /** The TypeSpec Model representing the resource response (GET response). */
  getModel?: Model;
  /** The name property on the resource, including any constraint decorators. */
  nameProperty?: ModelProperty;
}

/**
 * An ARM resource action (POST list* operation).
 */
export interface ResourceActionDefinition {
  actionName: string;
  descriptor: ResourceDescriptor;
  requestModel?: Model;
  responseType?: Type;
}

/**
 * A top-level provider operation (e.g. checkNameAvailability).
 */
export interface ProviderOperationDefinition {
  operationName: string;
  namespace: string;
  apiVersion: string;
  requestModel?: Model;
  responseType?: Type;
}

/**
 * All resource definitions grouped by provider namespace and API version.
 */
export interface ProviderDefinition {
  namespace: string;
  apiVersion: string;
  resourcesByType: Record<string, ResourceDefinition[]>;
  resourceActions: ResourceActionDefinition[];
  providerOperations: ProviderOperationDefinition[];
}

/**
 * Get the existing provider entry for a namespace/apiVersion pair, creating it if absent.
 */
function getOrCreateProvider(providers: Map<string, ProviderDefinition>, namespace: string, apiVersion: string): ProviderDefinition {
  const key = `${namespace.toLowerCase()}/${apiVersion}`;
  let provider = providers.get(key);
  if (!provider) {
    provider = { namespace, apiVersion, resourcesByType: {}, resourceActions: [], providerOperations: [] };
    providers.set(key, provider);
  }
  return provider;
}

/**
 * Extract all ARM provider definitions from a TypeSpec program.
 *
 * Uses the official @azure-tools/typespec-azure-resource-manager APIs
 * (getArmResources, resolveArmResources) to discover ARM resources,
 * their operations, and determine scopes from actual REST paths.
 */
export function getProviderDefinitions(context: EmitContext<BicepEmitterOptions>): ProviderDefinition[] {
  const program = context.program;
  const providers = new Map<string, ProviderDefinition>();

  // Use the ARM library's official resource discovery API
  const armResources = getArmResources(program);
  const resolvedProvider = resolveArmResources(program);
  const resolvedResources = resolvedProvider.resources ?? [];
  const providerOperations = resolvedProvider.providerOperations ?? [];
  const { customResourceRoutes, httpResourceScopes } = getHttpResourceMetadata(program);

  /** Discover a single ARM resource's type(s) and record them on its provider. */
  function processArmResource(armResource: (typeof armResources)[number]): void {
    const namespace = armResource.armProviderNamespace;
    if (!namespace) {
      $lib.reportDiagnostic(program, {
        code: "missing-provider-namespace",
        target: armResource.typespecType,
        format: { resource: armResource.name },
      });
      return;
    }

    const model = armResource.typespecType;
    const apiVersion = getApiVersion(model.namespace);
    if (!apiVersion) {
      $lib.reportDiagnostic(program, {
        code: "missing-api-version",
        target: model,
        format: { resource: armResource.name },
      });
      return;
    }

    const provider = getOrCreateProvider(providers, namespace, apiVersion);

    // A single resource model can be exposed at multiple paths. Preserve every
    // resolved instance instead of selecting only the first one. Exclude
    // instances that merely share a route with the resource but whose actual
    // lifecycle operation returns a different model (e.g. a "backups" or
    // "commands" sub-path read that returns an unrelated response type) —
    // those aren't real instances of this resource.
    const resolvedMatches = resolvedResources.filter((r) => (r.type === model || r.resourceName === armResource.name) && resolvedRepresentsModel(r, armResource));

    // Determine scopes from operations and paths
    const { readableScopes, writableScopes } = getResourceScopesFromArm(program, armResource, resolvedMatches, httpResourceScopes);

    const routeMatches = customResourceRoutes.get(model) ?? [];
    if (readableScopes === ScopeType.None && writableScopes === ScopeType.None && routeMatches.length === 0) {
      $lib.reportDiagnostic(program, {
        code: "no-resource-scopes",
        target: model,
        format: { resource: armResource.name },
      });
      return;
    }

    // Check for singleton resources (e.g. @singleton("default"))
    const isSingleton = isSingletonResource(program, model);
    const singletonKey = isSingleton ? getSingletonResourceKey(program, model) : undefined;

    // Build resource paths with fallback priority:
    // 1. Use resolved matches from ARM library
    // 2. Fall back to custom HTTP routes
    // 3. Fall back to collection name or empty
    const resourcePaths = buildResourcePaths(resolvedMatches, routeMatches, armResource, readableScopes, writableScopes);
    const seenResourcePaths = new Set<string>();

    for (const resourcePath of resourcePaths) {
      if (resourcePath.typeSegments.length === 0) {
        $lib.reportDiagnostic(program, {
          code: "unmapped-type-segments",
          target: model,
          format: { resource: armResource.name },
        });
        continue;
      }

      const expandedSegmentSets = expandParameterizedSegments(resourcePath.typeSegments, armResource);

      for (const segments of expandedSegmentSets) {
        const fullyQualifiedType = `${namespace}/${segments.join("/")}`.toLowerCase();
        if (seenResourcePaths.has(fullyQualifiedType)) {
          continue;
        }
        seenResourcePaths.add(fullyQualifiedType);

        if (!provider.resourcesByType[fullyQualifiedType]) {
          provider.resourcesByType[fullyQualifiedType] = [];
        }

        const definition: ResourceDefinition = {
          descriptor: {
            namespace,
            typeSegments: segments,
            apiVersion,
            readableScopes: resourcePath.readableScopes,
            writableScopes: resourcePath.writableScopes,
            constantName: singletonKey,
          },
          putModel: model,
          getModel: model,
          nameProperty: getResourceNameProperty(model),
        };
        provider.resourcesByType[fullyQualifiedType].push(definition);

        if (resourcePath.resolved) {
          discoverResourceActions(resourcePath.resolved, provider, segments);
        }
      }
    }
  }

  /** Record a top-level provider operation (e.g. checkNameAvailability) on its provider. */
  function processProviderOperation(operation: (typeof providerOperations)[number]): void {
    if (operation.httpOperation.verb !== "post") {
      return;
    }

    const operationNs = operation.operation.namespace;
    if (!operationNs) {
      return;
    }
    const operationNamespace = getNamespaceFullName(operationNs);

    const apiVersion = getApiVersion(operationNs);
    if (!apiVersion) {
      return;
    }

    const provider = getOrCreateProvider(providers, operationNamespace, apiVersion);
    const operationName = operation.name;

    // Avoid duplicates
    if (provider.providerOperations.some((op) => op.operationName.toLowerCase() === operationName.toLowerCase())) {
      return;
    }

    provider.providerOperations.push({
      operationName,
      namespace: operationNamespace,
      apiVersion,
      requestModel: getOperationRequestModel(operation),
      responseType: getOperationResponseType(operation),
    });
  }

  for (const armResource of armResources) {
    processArmResource(armResource);
  }

  for (const operation of providerOperations) {
    processProviderOperation(operation);
  }

  return [...providers.values()];
}

interface ResourceRoute {
  typeSegments: string[];
  readableScopes: ScopeType;
  writableScopes: ScopeType;
  resolved?: ResolvedResource;
}

interface ResourceScopes {
  readableScopes: ScopeType;
  writableScopes: ScopeType;
}

/**
 * Determines whether a resolved resource actually represents an instance of
 * `model`, as opposed to a synthetic entry created because some operation
 * (e.g. a read-styled action with extra path segments like a "backups" or
 * "commands" sub-path) shares the resource's route but returns a different
 * model. `resolveArmResources` groups operations purely by instance path, so
 * such operations get attached to the outer resource type even though their
 * request/response body is unrelated to it.
 */
function resolvedRepresentsModel(resolved: ResolvedResource, armResource: ArmResourceDetails): boolean {
  const collectionName = armResource.collectionName;
  return collectionName !== undefined && resolved.resourceType.types.at(-1)?.toLowerCase() === collectionName.toLowerCase();
}

/**
 * Build the list of resource paths with fallback priority:
 * 1. If resolved matches exist from ARM library, use those
 * 2. Else if custom HTTP routes exist, use those
 * 3. Else create a default route from collection name
 */
function buildResourcePaths(
  resolvedMatches: ResolvedResource[],
  routeMatches: ResourceRoute[],
  armResource: ArmResourceDetails,
  readableScopes: ScopeType,
  writableScopes: ScopeType
): ResourceRoute[] {
  if (resolvedMatches.length > 0) {
    return resolvedMatches.map((resolved) => ({
      typeSegments: getResolvedTypeSegments(resolved.resourceType.types, armResource.collectionName),
      readableScopes,
      writableScopes,
      resolved,
    }));
  }

  if (routeMatches.length > 0) {
    return routeMatches.map((route) => ({
      ...route,
      readableScopes: route.readableScopes | readableScopes,
      writableScopes: route.writableScopes | writableScopes,
    }));
  }

  // Default: use collection name as a single type segment
  return [
    {
      typeSegments: armResource.collectionName ? [armResource.collectionName] : [],
      readableScopes,
      writableScopes,
    },
  ];
}

/**
 * Finds resource instance GET routes that are intentionally implemented as
 * custom HTTP operations instead of @armResourceOperations interfaces.
 */
function getHttpResourceMetadata(program: Program): {
  customResourceRoutes: Map<Model, ResourceRoute[]>;
  httpResourceScopes: Map<string, ResourceScopes>;
} {
  const customResourceRoutes = new Map<Model, ResourceRoute[]>();
  const httpResourceScopes = new Map<string, ResourceScopes>();
  const [services, diagnostics] = getAllHttpServices(program);
  program.reportDiagnostics(diagnostics);

  for (const service of services) {
    for (const operation of service.operations) {
      if (!isResourceInstancePath(operation.path)) {
        continue;
      }

      const typeSegments = getTypeSegmentsFromPath(operation.path);
      if (!typeSegments) continue;

      const key = typeSegments.join("/").toLowerCase();
      const scopes = httpResourceScopes.get(key) ?? {
        readableScopes: ScopeType.None,
        writableScopes: ScopeType.None,
      };
      const scope = getScopeFromPath(operation.path);

      if (operation.verb === "get") {
        scopes.readableScopes |= scope;

        for (const responseModel of getResponseBodyModels(operation)) {
          const existing = customResourceRoutes.get(responseModel) ?? [];
          if (!existing.some((route) => route.typeSegments.join("/").toLowerCase() === key)) {
            existing.push({
              typeSegments,
              readableScopes: scope,
              writableScopes: ScopeType.None,
            });
            customResourceRoutes.set(responseModel, existing);
          }
        }
      } else if (operation.verb === "put" || operation.verb === "patch") {
        scopes.writableScopes |= scope;
      }
      httpResourceScopes.set(key, scopes);
    }
  }

  return { customResourceRoutes, httpResourceScopes };
}

function* getResponseBodyModels(operation: HttpOperation): IterableIterator<Model> {
  for (const response of operation.responses) {
    for (const content of response.responses) {
      if (content.body?.type.kind === "Model") {
        yield content.body.type;
      }
    }
  }
}

/**
 * Determine readable and writable scopes for a resource by examining its
 * resolved operations and their HTTP paths.
 */
function getResourceScopesFromArm(
  _program: Program,
  armResource: ArmResourceDetails,
  resolvedMatches: ResolvedResource[],
  httpResourceScopes: Map<string, ResourceScopes>,
): { readableScopes: ScopeType; writableScopes: ScopeType } {
  const lifecycle = resolveResourceOperations(_program, armResource.typespecType).lifecycle;

  if (resolvedMatches.length > 0) {
    let readableScopes = ScopeType.None;
    let writableScopes = ScopeType.None;

    for (const resolved of resolvedMatches) {
      const scope = armResource.kind === "Extension" ? ScopeType.Extension : getScopeFromPath(resolved.resourceInstancePath);
      const ops = resolved.operations;

      // Check for read operations
      if (ops.lifecycle?.read) {
        readableScopes |= scope;
      }

      // Check for create/update operations (write)
      if (ops.lifecycle?.createOrUpdate || ops.lifecycle?.update) {
        writableScopes |= scope;
      }
    }

    for (const resolved of resolvedMatches) {
      const httpScopes = httpResourceScopes.get(resolved.resourceType.types.join("/").toLowerCase());
      if (httpScopes) {
        readableScopes |= httpScopes.readableScopes;
        writableScopes |= httpScopes.writableScopes;
      }
    }

    // Resolved metadata supplies path-specific scopes, while lifecycle presence
    // remains authoritative in the ARM resource metadata.
    const defaultScope = getDefaultScopeFromKind(armResource.kind);
    if (lifecycle.read && readableScopes === ScopeType.None) {
      readableScopes |= defaultScope;
    }
    if ((lifecycle.createOrUpdate || lifecycle.update) && writableScopes === ScopeType.None) {
      writableScopes |= defaultScope;
    }

    return { readableScopes, writableScopes };
  }

  // Fall back: use lifecycle operations from ArmResourceDetails
  const hasRead = !!lifecycle.read;
  const hasWrite = !!lifecycle.createOrUpdate || !!lifecycle.update;

  // Determine scope from the resource kind and any available path
  let scope = getDefaultScopeFromKind(armResource.kind);

  // Refine scope from read operation path if available
  const firstLifecycleOperation = lifecycle.read ?? lifecycle.createOrUpdate ?? lifecycle.update;
  if (firstLifecycleOperation && armResource.kind !== "Extension") {
    scope = getArmOperationScope(_program, firstLifecycleOperation);
  }

  const result = {
    readableScopes: hasRead ? scope : ScopeType.None,
    writableScopes: hasWrite ? scope : ScopeType.None,
  };
  return result;
}

function getArmOperationScope(
  program: Program,
  operation: {
    path?: string;
    operation: Operation;
    resourceKind?: "legacy" | "legacy-extension";
  },
): ScopeType {
  if (operation.path) {
    return getScopeFromPath(operation.path);
  }

  const [httpOperation, diagnostics] = getHttpOperation(program, operation.operation);
  program.reportDiagnostics(diagnostics);
  return httpOperation.path ? getScopeFromPath(httpOperation.path) : getDefaultScopeFromKind(operation.resourceKind ?? "Proxy");
}

/**
 * Discover POST actions associated with a canonical resolved resource path.
 */
function discoverResourceActions(resolved: ResolvedResource, provider: ProviderDefinition, typeSegments: string[]): void {
  const operations = [...resolved.operations.actions, ...resolved.operations.lists];

  for (const action of operations) {
    if (action.httpOperation.verb !== "post") continue;

    const actionName = action.path.split("/").filter(Boolean).at(-1);
    if (!actionName || actionName.startsWith("{")) continue;

    const responseType = getOperationResponseType(action);
    const requestModel = getOperationRequestModel(action);

    const descriptor: ResourceDescriptor = {
      namespace: provider.namespace,
      typeSegments,
      apiVersion: provider.apiVersion,
      readableScopes: getScopeFromPath(action.path),
      writableScopes: getScopeFromPath(action.path),
    };
    const duplicate = provider.resourceActions.some(
      (existing) => existing.actionName.toLowerCase() === actionName.toLowerCase() && getFullyQualifiedType(existing.descriptor).toLowerCase() === getFullyQualifiedType(descriptor).toLowerCase(),
    );
    if (duplicate) continue;

    provider.resourceActions.push({
      actionName,
      descriptor,
      requestModel,
      responseType,
    });
  }
}

/**
 * Get the API version from a provider namespace object.
 */
function getApiVersion(ns: Namespace | undefined): string | undefined {
  if (!ns) return undefined;

  // Look for a "Versions" enum in the namespace or parent namespaces
  let current: Namespace | undefined = ns;
  while (current) {
    const versionsEnum = current.enums.get("Versions");
    if (versionsEnum) {
      const members = [...versionsEnum.members.values()];
      if (members.length > 0) {
        const lastMember = members[members.length - 1];
        const value = lastMember.value ?? lastMember.name;
        return typeof value === "string" ? value : String(value);
      }
    }
    current = current.namespace;
  }

  return undefined;
}

/**
 * Get the 'name' property on a resource model.
 */
function getResourceNameProperty(model: Model): ModelProperty | undefined {
  return model.properties.get("name");
}

/**
 * Get the response body type from the first successful ARM operation response.
 */
function getOperationResponseType(action: { httpOperation: HttpOperation }): Type | undefined {
  for (const response of action.httpOperation.responses) {
    const statusCodes = response.statusCodes;
    const isSuccess =
      typeof statusCodes === "number"
        ? statusCodes >= 200 && statusCodes < 300
        : statusCodes !== "*" && statusCodes.start < 300 && statusCodes.end >= 200;
    if (!isSuccess) {
      continue;
    }

    for (const content of response.responses) {
      if (content.body) {
        return content.body.type;
      }
    }
  }
  return undefined;
}

/**
 * Get the request body model from an ARM resource operation.
 */
function getOperationRequestModel(action: { httpOperation: { parameters: { body?: { type?: Type } } } }): Model | undefined {
  const body = action.httpOperation.parameters.body;
  if (body?.type?.kind === "Model") {
    return body.type;
  }
  return undefined;
}
