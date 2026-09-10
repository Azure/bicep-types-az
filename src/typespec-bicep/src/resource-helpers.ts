// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScopeType } from "@azure/bicep-types";
import type { ResourceDescriptor } from "./resources.js";
import type { Enum, Type } from "@typespec/compiler";
import type { ArmResourceDetails, ArmResourceKind } from "@azure-tools/typespec-azure-resource-manager";

/**
 * Get the fully qualified resource type string (e.g. "Microsoft.Storage/storageAccounts").
 */
export function getFullyQualifiedType(descriptor: ResourceDescriptor): string {
  return [descriptor.namespace, ...descriptor.typeSegments].join("/");
}

export function getResolvedTypeSegments(resolvedTypes: string[], collectionName: string | undefined): string[] {
  const typeSegments = [...resolvedTypes];
  if (collectionName && typeSegments.at(-1)?.toLowerCase() !== collectionName.toLowerCase()) {
    typeSegments.push(collectionName);
  }

  return typeSegments;
}

export function isResourceInstancePath(path: string): boolean {
  return path.split("/").filter(Boolean).at(-1)?.startsWith("{") === true;
}

export function getTypeSegmentsFromPath(path: string): string[] | undefined {
  const segments = path.split("/").filter(Boolean);
  const providerIndex = segments.findIndex((segment) => segment.toLowerCase() === "providers");
  if (providerIndex < 0 || providerIndex + 2 >= segments.length) {
    return undefined;
  }

  const resourcePath = segments.slice(providerIndex + 2);
  const typeSegments = resourcePath.filter((_, index) => index % 2 === 0);
  return typeSegments.length > 0 ? typeSegments : undefined;
}

/**
 * Determine scope from an HTTP path by analyzing the path prefix.
 */
export function getScopeFromPath(path: string): ScopeType {
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
export function getDefaultScopeFromKind(kind: ArmResourceKind | "legacy" | "legacy-extension"): ScopeType {
  return kind === "Extension" ? ScopeType.Extension : ScopeType.ResourceGroup;
}

/**
 * Expand parameterized type segments into concrete values.
 *
 * When a segment is a path parameter reference like "{recordType}", this
 * finds the corresponding enum (or union of string literals) from the
 * resource's operations and expands it into separate segment arrays.
 */
export function expandParameterizedSegments(typeSegments: string[], armResource: ArmResourceDetails): string[][] {
  let expandedSegments: string[][] = [[]];

  for (const segment of typeSegments) {
    const isParameter = segment.startsWith("{") && segment.endsWith("}");
    const values = isParameter ? (resolvePathParameterEnum(segment.slice(1, -1), armResource) ?? [segment]) : [segment];

    expandedSegments = expandedSegments.flatMap((prefix) => values.map((value) => [...prefix, value]));
  }

  return expandedSegments;
}

function resolvePathParameterEnum(paramName: string, armResource: ArmResourceDetails): string[] | undefined {
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
export function extractEnumValues(type: Type): string[] | undefined {
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