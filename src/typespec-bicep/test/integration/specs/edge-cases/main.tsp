// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Integration test spec for edge-case handling:
//   String constraint decorators (@pattern, @minLength, @maxLength)
//   Case-insensitive segment deduplication
//   Skip resources with no lifecycle scopes (Scope None)
//   ARM response envelope unwrapping for function outputs

import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;
using Azure.ResourceManager;

@armProviderNamespace
@service(#{
  title: "Test.EdgeCases",
})
@doc("Test.EdgeCases spec for integration testing edge cases")
namespace Test.EdgeCases;

/** API Versions */
enum Versions {
  @doc("2024-01-01")
  `2024-01-01`,
}

// ============================================================
// String constraint decorators
// ============================================================

@doc("Properties with string constraints")
model ConstrainedProperties {
  @doc("A name with pattern, minLength, and maxLength constraints")
  @pattern("^[a-zA-Z][a-zA-Z0-9-]*$")
  @minLength(3)
  @maxLength(63)
  displayName?: string;

  @doc("A property with only a pattern constraint.")
  @pattern("^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$")
  correlationId?: string;

  @doc("A property with only minLength.")
  @minLength(1)
  requiredName?: string;

  @doc("A property with only maxLength.")
  @maxLength(256)
  description?: string;
}

@doc("A resource with string-constrained properties")
model ConstrainedResource is TrackedResource<ConstrainedProperties> {
  @doc("The resource name.")
  @key("constrainedResourceName")
  @segment("constrainedResources")
  @path
  name: string;
}

// ============================================================
// Case-insensitive segment deduplication
// Parent resource "Namespaces" with a child whose ARM collectionName
// may differ in casing (e.g. parent segment "Namespaces" vs child
// collectionName "namespaces" or "AuthorizationRules" vs "authorizationRules").
// The emitter should not generate duplicate path segments.
// ============================================================

@doc("A namespace resource (parent for case-insensitive segment test).")
model NamespaceResource is TrackedResource<NamespaceProperties> {
  @doc("The namespace name.")
  @key("namespaceName")
  @segment("Namespaces")
  @path
  name: string;
}

@doc("Namespace properties")
model NamespaceProperties {
  @doc("The namespace status")
  @visibility(Lifecycle.Read)
  status?: string;
}

@doc("An authorization rule (child resource with different-cased segment).")
@parentResource(NamespaceResource)
model AuthorizationRule is ProxyResource<AuthorizationRuleProperties> {
  @doc("The authorization rule name.")
  @key("authorizationRuleName")
  @segment("AuthorizationRules")
  @path
  name: string;
}

@doc("AuthorizationRule properties")
model AuthorizationRuleProperties {
  @doc("The rights associated with the rule.")
  rights?: string[];
}

// ============================================================
// Scope None resources (should be skipped)
// A resource that has only a list operation (no GET/PUT/DELETE)
// should not be emitted as a deployable ResourceType.
// ============================================================

@doc("A private link resource (read-only, no PUT, should be skipped).")
@parentResource(NamespaceResource)
model PrivateLinkResource is ProxyResource<PrivateLinkResourceProperties> {
  @doc("The private link resource name.")
  @key("privateLinkResourceName")
  @segment("privateLinkResources")
  @path
  name: string;
}

@doc("Private link resource properties")
model PrivateLinkResourceProperties {
  @doc("Group ID")
  @visibility(Lifecycle.Read)
  groupId?: string;

  @doc("Required members")
  @visibility(Lifecycle.Read)
  requiredMembers?: string[];
}

// ============================================================
// ARM response envelope unwrapping
// A POST action that returns a concrete model (should unwrap from
// ArmResponse<T>) and a POST action that returns void (should be skipped).
// ============================================================

@doc("Keys list result for envelope unwrapping test")
model KeyListResult {
  @doc("The list of keys.")
  keys?: KeyInfo[];

  @doc("The next link.")
  nextLink?: string;
}

@doc("A key information entry.")
model KeyInfo {
  @doc("The key name.")
  keyName?: string;

  @doc("The key value.")
  keyValue?: string;
}

// ============================================================
// ARM Operations
// ============================================================

interface Operations extends Azure.ResourceManager.Operations {}

@armResourceOperations
interface ConstrainedResourceOperations {
  get is ArmResourceRead<ConstrainedResource>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<ConstrainedResource>;
}

@armResourceOperations
interface NamespaceOperations {
  get is ArmResourceRead<NamespaceResource>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<NamespaceResource>;
  listKeys is ArmResourceActionSync<NamespaceResource, void, KeyListResult>;
  regenerateKey is ArmResourceActionNoResponseContentAsync<NamespaceResource, KeyInfo>;
}

@armResourceOperations
interface AuthorizationRuleOperations {
  get is ArmResourceRead<AuthorizationRule>;
  createOrUpdate is ArmResourceCreateOrReplaceSync<AuthorizationRule>;
}

@armResourceOperations
interface PrivateLinkResourceOperations {
  get is ArmResourceRead<PrivateLinkResource>;
}
