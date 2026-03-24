// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  EmitContext,
  Enum,
  Model,
  Namespace,
  Program,
  Type,
} from "@typespec/compiler";
import { ScopeType } from "bicep-types";
import {
  getArmResources,
  resolveArmResources,
  ArmResourceDetails,
  isSingletonResource,
  getSingletonResourceKey,
} from "@azure-tools/typespec-azure-resource-manager";
import { BicepEmitterOptions } from "./lib.js";

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
  /** The name property type on the resource. */
  nameType?: Type;
}

/**
 * An ARM resource action (POST list* operation).
 */
export interface ResourceActionDefinition {
  actionName: string;
  descriptor: ResourceDescriptor;
  requestModel?: Model;
  responseModel?: Model;
}

/**
 * All resource definitions grouped by provider namespace and API version.
 */
export interface ProviderDefinition {
  namespace: string;
  apiVersion: string;
  resourcesByType: Record<string, ResourceDefinition[]>;
  resourceActions: ResourceActionDefinition[];
}

/**
 * Get the fully qualified resource type string (e.g. "Microsoft.Storage/storageAccounts").
 */
export function getFullyQualifiedType(descriptor: ResourceDescriptor): string {
  return [descriptor.namespace, ...descriptor.typeSegments].join("/");
}

/**
 * Extract all ARM provider definitions from a TypeSpec program.
 *
 * Uses the official @azure-tools/typespec-azure-resource-manager APIs
 * (getArmResources, resolveArmResources) to discover ARM resources,
 * their operations, and determine scopes from actual REST paths.
 */
export function getProviderDefinitions(
  context: EmitContext<BicepEmitterOptions>,
): ProviderDefinition[] {
  const program = context.program;
  const providers = new Map<string, ProviderDefinition>();

  // Use the ARM library's official resource discovery API
  const armResources = getArmResources(program);
  const resolvedProvider = resolveArmResources(program);
  const resolvedResources = resolvedProvider.resources ?? [];

  for (const armResource of armResources) {
    const namespace = armResource.armProviderNamespace;
    if (!namespace) continue;

    const model = armResource.typespecType;
    const apiVersion = getApiVersion(program, model);
    if (!apiVersion) continue;

    const key = `${namespace.toLowerCase()}/${apiVersion}`;
    if (!providers.has(key)) {
      providers.set(key, {
        namespace,
        apiVersion,
        resourcesByType: {},
        resourceActions: [],
      });
    }

    const provider = providers.get(key)!;

    // Find the resolved resource to get the full type hierarchy from resourceType.types
    const resolved = resolvedResources.find(
      (r) =>
        r.type === model ||
        r.resourceName === armResource.name,
    );

    // Build type segments from the resolved resource type hierarchy.
    // The resolved resourceType.types gives us the full parent chain,
    // e.g. ["dnsZones", "dnssecConfigs"] for a child resource.
    // For parameterized segments like {recordType}, the resolver may not include
    // the collection name, so we ensure it's present.
    let typeSegments: string[];
    if (resolved?.resourceType?.types) {
      typeSegments = [...resolved.resourceType.types];
      const collectionName = armResource.collectionName;
      // If the last type segment doesn't match the collection name, append it
      // Use case-insensitive comparison to avoid duplicates like "AuthorizationRules/authorizationRules"
      if (typeSegments[typeSegments.length - 1].toLowerCase() !== collectionName.toLowerCase()) {
        typeSegments.push(collectionName);
      }
    } else {
      typeSegments = [armResource.collectionName];
    }

    // Determine scopes from operations and paths
    const { readableScopes, writableScopes } = getResourceScopesFromArm(
      program,
      armResource,
      resolvedProvider,
    );

    // Skip resources with no scopes (e.g. privateLinkResources, replicas)
    // that have no lifecycle operations (no PUT/GET with scope)
    if (readableScopes === ScopeType.None && writableScopes === ScopeType.None) {
      continue;
    }

    // Check for singleton resources (e.g. @singleton("default"))
    const isSingleton = isSingletonResource(program, model);
    const singletonKey = isSingleton ? getSingletonResourceKey(program, model) : undefined;

    // Expand parameterized segments (e.g. {recordType}) into concrete values.
    // When a collection name like "{recordType}" maps to an enum path parameter,
    // we generate a separate resource definition for each enum value
    // (e.g. dnsZones/A, dnsZones/AAAA, etc.) to match the OpenAPI behavior.
    const expandedSegmentSets = expandParameterizedSegments(
      typeSegments,
      armResource,
    );

    for (const segments of expandedSegmentSets) {
      const fullyQualifiedType = `${namespace}/${segments.join("/")}`.toLowerCase();

      if (!provider.resourcesByType[fullyQualifiedType]) {
        provider.resourcesByType[fullyQualifiedType] = [];
      }

      const definition: ResourceDefinition = {
        descriptor: {
          namespace,
          typeSegments: segments,
          apiVersion,
          readableScopes,
          writableScopes,
          constantName: singletonKey,
        },
        putModel: model,
        getModel: model,
        nameType: getResourceNameType(model),
      };

      provider.resourcesByType[fullyQualifiedType].push(definition);

      // Discover actions for this resource
      discoverResourceActionsFromArm(armResource, provider, segments);
    }
  }

  return [...providers.values()];
}

/**
 * Expand parameterized type segments into concrete values.
 *
 * When a segment is a path parameter reference like "{recordType}", this
 * finds the corresponding enum (or union of string literals) from the
 * resource's operations and expands it into separate segment arrays.
 *
 * For example, if typeSegments is ["dnsZones", "{recordType}"] and the
 * RecordType enum has values [A, AAAA, CAA, ...], this returns
 * [["dnsZones", "A"], ["dnsZones", "AAAA"], ["dnsZones", "CAA"], ...].
 *
 * If no parameterized segments exist, returns the original array wrapped
 * in a single-element array.
 */
function expandParameterizedSegments(
  typeSegments: string[],
  armResource: ArmResourceDetails,
): string[][] {
  // Find parameterized segments (segments wrapped in {})
  const paramIndex = typeSegments.findIndex(
    (seg) => seg.startsWith("{") && seg.endsWith("}"),
  );
  if (paramIndex === -1) {
    return [typeSegments];
  }

  const paramName = typeSegments[paramIndex].slice(1, -1);
  const enumValues = resolvePathParameterEnum(paramName, armResource);
  if (!enumValues || enumValues.length === 0) {
    // Cannot resolve — keep the parameterized segment as-is
    return [typeSegments];
  }

  // Replace the parameterized segment with each concrete value
  const result: string[][] = [];
  for (const value of enumValues) {
    const expanded = [...typeSegments];
    expanded[paramIndex] = value;
    result.push(expanded);
  }
  return result;
}

/**
 * Resolve the concrete string values for a path parameter enum.
 *
 * Searches the resource's lifecycle and action operations for a @path
 * parameter matching the given name, then extracts enum member values.
 */
function resolvePathParameterEnum(
  paramName: string,
  armResource: ArmResourceDetails,
): string[] | undefined {
  // Collect all operations to search through
  const ops = armResource.operations;
  const allOps: { httpOperation: { parameters: { parameters: { param: { name: string; type: Type } }[] } } }[] = [];

  if (ops.lifecycle.read) allOps.push(ops.lifecycle.read);
  if (ops.lifecycle.createOrUpdate) allOps.push(ops.lifecycle.createOrUpdate);
  if (ops.lifecycle.update) allOps.push(ops.lifecycle.update);
  if (ops.lifecycle.delete) allOps.push(ops.lifecycle.delete);
  for (const action of Object.values(ops.actions)) {
    allOps.push(action);
  }
  for (const list of Object.values(ops.lists)) {
    allOps.push(list);
  }

  for (const op of allOps) {
    for (const httpParam of op.httpOperation.parameters.parameters) {
      if (httpParam.param.name === paramName) {
        return extractEnumValues(httpParam.param.type);
      }
    }
  }

  return undefined;
}

/**
 * Extract string values from an Enum or Union type.
 */
function extractEnumValues(type: Type): string[] | undefined {
  if (type.kind === "Enum") {
    const enumType = type as Enum;
    const values: string[] = [];
    for (const member of enumType.members.values()) {
      const value = typeof member.value === "string" ? member.value : member.name;
      values.push(value);
    }
    return values.length > 0 ? values : undefined;
  }

  if (type.kind === "Union") {
    const values: string[] = [];
    for (const variant of type.variants.values()) {
      if (variant.type.kind === "String") {
        values.push(variant.type.value);
      } else if (variant.type.kind === "EnumMember") {
        const value = typeof variant.type.value === "string" ? variant.type.value : variant.type.name;
        values.push(value);
      }
    }
    return values.length > 0 ? values : undefined;
  }

  return undefined;
}

/**
 * Determine readable and writable scopes for a resource by examining its
 * resolved operations and their HTTP paths.
 */
function getResourceScopesFromArm(
  _program: Program,
  armResource: ArmResourceDetails,
  resolvedProvider: ReturnType<typeof resolveArmResources>,
): { readableScopes: ScopeType; writableScopes: ScopeType } {
  // Try to find resolved resource details with path information
  const resolvedResources = resolvedProvider.resources ?? [];
  const matched = resolvedResources.filter(
    (r) =>
      r.type === armResource.typespecType ||
      r.resourceName === armResource.name,
  );

  if (matched.length > 0) {
    let readableScopes = ScopeType.None;
    let writableScopes = ScopeType.None;

    for (const resolved of matched) {
      const scope = getScopeFromPath(resolved.resourceInstancePath);
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

    // If we found specific scope info, use it
    if (readableScopes !== ScopeType.None || writableScopes !== ScopeType.None) {
      return { readableScopes, writableScopes };
    }
  }

  // Fall back: use lifecycle operations from ArmResourceDetails
  const ops = armResource.operations;
  const hasRead = !!ops.lifecycle.read;
  const hasWrite = !!ops.lifecycle.createOrUpdate;

  // Determine scope from the resource kind and any available path
  let scope = getDefaultScopeFromKind(armResource.kind);

  // Refine scope from read operation path if available
  if (ops.lifecycle.read) {
    scope = getScopeFromPath(ops.lifecycle.read.path);
  } else if (ops.lifecycle.createOrUpdate) {
    scope = getScopeFromPath(ops.lifecycle.createOrUpdate.path);
  }

  return {
    readableScopes: hasRead ? scope : ScopeType.None,
    writableScopes: hasWrite ? scope : ScopeType.None,
  };
}

/**
 * Determine scope from an HTTP path by analyzing the path prefix.
 */
function getScopeFromPath(path: string): ScopeType {
  // Management group: /providers/Microsoft.Management/managementGroups/{mgId}/providers/...
  if (path.match(/\/providers\/Microsoft\.Management\/managementGroups\//i)) {
    return ScopeType.ManagementGroup;
  }

  // Resource group: /subscriptions/{sub}/resourceGroups/{rg}/providers/...
  if (path.match(/\/subscriptions\/[^/]+\/resourceGroups\//i)) {
    return ScopeType.ResourceGroup;
  }

  // Subscription: /subscriptions/{sub}/providers/...
  if (path.match(/\/subscriptions\/[^/]+\/providers\//i)) {
    return ScopeType.Subscription;
  }

  // Tenant: /providers/... (no subscription or RG prefix)
  if (path.match(/^\/providers\//i)) {
    return ScopeType.Tenant;
  }

  // Extension scope: {resourceUri}/providers/...
  if (path.match(/\{[^}]+\}\/providers\//i)) {
    return ScopeType.Extension;
  }

  return ScopeType.ResourceGroup;
}

/**
 * Get default scope based on ARM resource kind.
 */
function getDefaultScopeFromKind(kind: string): ScopeType {
  switch (kind) {
    case "Extension":
      return ScopeType.Extension;
    case "Tracked":
      return ScopeType.ResourceGroup;
    case "Proxy":
      return ScopeType.ResourceGroup;
    default:
      return ScopeType.ResourceGroup;
  }
}

/**
 * Discover POST actions from ARM resource metadata.
 * Only POST operations (like listKeys) become resource function types.
 * GET operations (even if marked @action) are list operations, not functions.
 */
function discoverResourceActionsFromArm(
  armResource: ArmResourceDetails,
  provider: ProviderDefinition,
  typeSegments: string[],
): void {
  const actions = armResource.operations.actions;
  for (const [actionName, action] of Object.entries(actions)) {
    // Only include POST actions — GET @action operations are list operations
    const httpVerb = action.httpOperation.verb;
    if (httpVerb !== "post") {
      continue;
    }

    const responseModel = getOperationResponseModel(action);
    const requestModel = getOperationRequestModel(action);

    provider.resourceActions.push({
      actionName,
      descriptor: {
        namespace: provider.namespace,
        typeSegments,
        apiVersion: provider.apiVersion,
        readableScopes: ScopeType.ResourceGroup,
        writableScopes: ScopeType.ResourceGroup,
      },
      requestModel,
      responseModel,
    });
  }
}

/**
 * Get the API version for a resource model.
 */
function getApiVersion(
  _program: Program,
  model: Model,
): string | undefined {
  const ns = model.namespace;
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
 * Get the type of the 'name' property on a resource model.
 */
function getResourceNameType(
  model: Model,
): Type | undefined {
  const nameProp = model.properties.get("name");
  if (!nameProp) return undefined;
  return nameProp.type;
}

/**
 * Get the response model from an ARM resource operation.
 */
function getOperationResponseModel(
  action: { httpOperation: { responses: readonly { type?: Type }[] } },
): Model | undefined {
  for (const response of action.httpOperation.responses) {
    if (response.type && response.type.kind === "Model") {
      return response.type;
    }
  }
  return undefined;
}

/**
 * Get the request body model from an ARM resource operation.
 */
function getOperationRequestModel(
  action: { httpOperation: { parameters: { body?: { type?: Type } } } },
): Model | undefined {
  const body = action.httpOperation.parameters.body;
  if (body?.type?.kind === "Model") {
    return body.type;
  }
  return undefined;
}
