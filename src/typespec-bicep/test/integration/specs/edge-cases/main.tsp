// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Integration test spec for edge-case handling:
//   String constraint decorators (@pattern, @minLength, @maxLength)
//   Case-insensitive segment deduplication
//   Skip resources with no lifecycle scopes (Scope None)
//   ARM response envelope unwrapping for function outputs
//   Discriminator values, escaped descriptions, and secret properties
//   Resource models exposed through multiple or custom routes

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

@pattern("^[a-z]+$")
@minLength(2)
@maxLength(32)
scalar ConstrainedString extends string;

/** API Versions */
enum Versions {
  @doc("2024-01-01")
  `2024-01-01`,
}

namespace FirstModels {
  model Shared {
    firstValue?: string;
  }
}

namespace SecondModels {
  model Shared {
    secondValue?: string;
  }
}

enum NumericKind {
  One: 1,
  Two: 2,
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

  @doc("An array with minItems and maxItems constraints.")
  @minItems(1)
  @maxItems(3)
  constrainedItems?: string[];

  @doc("A property with an empty pattern, which should be excluded.")
  @pattern("")
  emptyPattern?: string;

  @doc("A scalar alias with string constraints.")
  constrainedAlias?: ConstrainedString;

  @doc("A description containing an escaped \"quoted value\".")
  quotedDescription?: string;

  @secret
  @doc("A sensitive value.")
  password?: string;

  @doc("A polymorphic value.")
  polymorphicValue?: PolymorphicBase;

  firstShared?: FirstModels.Shared;
  secondShared?: SecondModels.Shared;
  numericKind?: NumericKind;
}

@discriminator("kind")
model PolymorphicBase {
  @doc("The polymorphic kind.")
  kind: string;
}

model FirstVariant extends PolymorphicBase {
  @doc("The first variant kind.")
  kind: "first-value";
  firstProperty?: string;
}

model SecondVariant extends PolymorphicBase {
  kind: "second-value";
  secondProperty?: string;
}

@doc("A resource with string-constrained properties")
model ConstrainedResource is TrackedResource<ConstrainedProperties> {
  @doc("The resource name.")
  @key("constrainedResourceName")
  @segment("constrainedResources")
  @path
  name: string;
}

model ExtensionProperties {
  value?: string;
}

model ExtensionTestResource is ExtensionResource<ExtensionProperties> {
  @key("extensionTestResourceName")
  @segment("extensionTestResources")
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
// Custom resource routes
// ============================================================

@doc("A resource exposed through custom HTTP routes.")
model CustomRouteResource is ProxyResource<CustomRouteProperties> {
  @key("customRouteName")
  @segment("customRouteResources")
  @path
  name: string;
}

model CustomRouteProperties {
  value?: string;
}

#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-interface-requires-decorator" "Custom route regression coverage"
#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "Custom route regression coverage"
interface CustomRouteOperations {
  @route("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Test.EdgeCases/parents/{parentName}/customRouteResources/{customRouteName}")
  @get
  get(
    ...ApiVersionParameter,
    ...SubscriptionIdParameter,
    ...ResourceGroupParameter,
    @path parentName: string,
    @path customRouteName: string,
  ): ArmResponse<CustomRouteResource> | ErrorResponse;

  @route("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Test.EdgeCases/alternateParents/{parentName}/customRouteResources/{customRouteName}")
  @get
  getAlternate(
    ...ApiVersionParameter,
    ...SubscriptionIdParameter,
    ...ResourceGroupParameter,
    @path parentName: string,
    @path customRouteName: string,
  ): ArmResponse<CustomRouteResource> | ErrorResponse;
}

enum ParameterizedResourceKind {
  First,
  Second,
}

@parentResource(NamespaceResource)
model ParameterizedRouteResource is ProxyResource<CustomRouteProperties> {
  @key("parameterizedRouteName")
  @segment("{resourceKind}")
  @path
  name: string;
}

#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-interface-requires-decorator" "Parameterized route regression coverage"
#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "Parameterized route regression coverage"
interface ParameterizedRouteOperations {
  @route("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Test.EdgeCases/Namespaces/{namespaceName}/{resourceKind}/{parameterizedRouteName}")
  @get
  @armResourceRead(ParameterizedRouteResource)
  get(
    ...ApiVersionParameter,
    ...SubscriptionIdParameter,
    ...ResourceGroupParameter,
    @path namespaceName: string,
    @path resourceKind: ParameterizedResourceKind,
    @path parameterizedRouteName: string,
  ): ArmResponse<ParameterizedRouteResource> | ErrorResponse;

  @route("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Test.EdgeCases/Namespaces/{namespaceName}/{resourceKind}/{parameterizedRouteName}")
  @put
  @armResourceCreateOrUpdate(ParameterizedRouteResource)
  createOrUpdate(
    ...ApiVersionParameter,
    ...SubscriptionIdParameter,
    ...ResourceGroupParameter,
    @path namespaceName: string,
    @path resourceKind: ParameterizedResourceKind,
    @path parameterizedRouteName: string,
    @bodyRoot resource: ParameterizedRouteResource,
  ): ArmResponse<ParameterizedRouteResource> | ErrorResponse;
}

// ============================================================
// ARM response envelope unwrapping
// A POST action that returns a concrete model (should unwrap from
// ArmResponse<T>) and a POST action that returns void (should return any).
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
interface ExtensionTestResourceOperations
  extends ExtensionResourceOperations<ExtensionTestResource, ExtensionProperties> {}

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
