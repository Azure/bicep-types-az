// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
  title: "Test.Rp1",
})
@doc("Test.Rp1 spec")
namespace Test.Rp1;

/** API Versions */
enum Versions {
  @doc("2021-10-31")
  `2021-10-31`,
}

// ---- Shared types ----

@doc("Description for a basic enum property.")
union StringEnum {
  string,
  @doc("Foo value is set.")
  Foo: "Foo",
  @doc("Bar value is set.")
  Bar: "Bar",
}

@doc("Encryption status values")
union EncryptionStatus {
  string,
  @doc("Encryption is enabled")
  enabled: "enabled",
  @doc("Encryption is disabled")
  disabled: "disabled",
}

@doc("Encryption properties")
model EncryptionProperties {
  @doc("Indicates whether or not the encryption is enabled for container registry.")
  status?: EncryptionStatus;

  @doc("Key vault properties.")
  keyVaultProperties?: KeyVaultProperties;
}

@doc("Key vault properties")
model KeyVaultProperties {
  @doc("Key vault uri to access the encryption key.")
  keyIdentifier?: string;

  @doc("The client ID of the identity which will be used to access key vault.")
  identity?: string;
}

@doc("Location data")
model LocationData {
  @doc("A canonical name for the geographic or physical location.")
  name: string;

  @doc("The city or locality where the resource is located.")
  city?: string;

  @doc("The district, state, or province where the resource is located.")
  district?: string;

  @doc("The country or region where the resource is located.")
  countryOrRegion?: string;
}

@doc("Plan information")
model Plan {
  @doc("The plan name")
  name?: string;
  @doc("The plan publisher")
  publisher?: string;
  @doc("The plan product")
  product?: string;
}

// ---- TestType1 Resource (ResourceGroup scope, GET+PUT) ----

@doc("The testType1 resource.")
model TestType1 is TrackedResource<TestType1Properties> {
  @doc("The testType1 resource name.")
  @key("typeName")
  @segment("testType1")
  @pattern("^[a-z][a-z0-9]*$")
  @minLength(1)
  @maxLength(12)
  @path
  name: string;
}

@doc("TestType1 properties")
model TestType1Properties {
  @doc("Description for a basic string property.")
  basicString?: string;

  @doc("Description for a basic enum property.")
  stringEnum?: StringEnum;

  @doc("Description for a empty enum property.")
  emptyEnum?: string;

  @doc("TestType1 encryption properties")
  encryptionProperties?: EncryptionProperties;

  @secret
  password?: string;

  @doc("A UUID property")
  uuidProperty?: string;

  @doc("An integer with a default value")
  intWithDefaultValue?: int32;

  @doc("A property with special characters in its name")
  `special.char-property`?: string;

  @visibility(Lifecycle.Read)
  @doc("Metadata pertaining to the geographic location of the resource.")
  locationData?: LocationData;

  @visibility(Lifecycle.Read)
  @doc("Base64 encoded bytes")
  base64EncodedBytes?: string;

  @visibility(Lifecycle.Read)
  @doc("A binary buffer property")
  binaryBuffer?: bytes;

  @visibility(Lifecycle.Read)
  @doc("A fully-qualified resource ID")
  subnetId?: Azure.Core.armResourceIdentifier;

  @visibility(Lifecycle.Read)
  @doc("A percentage property")
  @minValue(0)
  @maxValue(100)
  percentageProperty?: int32;
}

// ---- ReadOnly Resource (ResourceGroup scope, GET only) ----

@doc("A read-only test resource.")
model ReadOnlyTestType is TrackedResource<ReadOnlyTestTypeProperties> {
  @doc("The read-only test type name.")
  @key("readOnlyTypeName")
  @segment("readOnlyTestType")
  @path
  name: string;
}

@doc("ReadOnly test type properties")
model ReadOnlyTestTypeProperties {
  @visibility(Lifecycle.Read)
  @doc("A plan property")
  plan?: Plan;
}

// ---- WriteOnly Resource (ResourceGroup scope, PUT only) ----

@doc("A write-only test resource.")
model WriteOnlyTestType is TrackedResource<WriteOnlyTestTypeProperties> {
  @doc("The write-only test type name.")
  @key("writeOnlyTypeName")
  @segment("writeOnlyTestType")
  @path
  name: string;
}

@doc("WriteOnly test type properties")
model WriteOnlyTestTypeProperties {
  @doc("A basic string property.")
  basicString?: string;
}

// ---- Tenant Scope Resource (Tenant scope, GET+PUT) ----

@doc("A tenant-scoped test resource.")
model TenantScopeType is TrackedResource<TenantScopeTypeProperties> {
  @doc("The tenant scope type name.")
  @key("tenantScopeTypeName")
  @segment("tenantScopeType")
  @path
  name: string;
}

@doc("TenantScopeType properties")
model TenantScopeTypeProperties {
  @doc("A basic string property.")
  basicString?: string;
}

// ---- Subscription Scope Resource (Subscription scope, GET+PUT) ----

@doc("A subscription-scoped test resource.")
model SubscriptionScopeType is TrackedResource<SubscriptionScopeTypeProperties> {
  @doc("The subscription scope type name.")
  @key("subscriptionScopeTypeName")
  @segment("subscriptionScopeType")
  @path
  name: string;
}

@doc("SubscriptionScopeType properties")
model SubscriptionScopeTypeProperties {
  @doc("A basic string property.")
  basicString?: string;
}

// ---- Discriminated Union Resource (ResourceGroup scope, GET+PUT) ----

@doc("The discriminated union test type resource.")
model DiscriminatedUnionTestType is TrackedResource<DiscriminatedUnionTestTypeProperties> {
  @doc("The discriminated union test type name.")
  @key("discriminatedUnionTypeName")
  @segment("discriminatedUnionTestType")
  @path
  name: string;
}

@discriminator("type")
@doc("Discriminated union test type properties")
model DiscriminatedUnionTestTypeProperties {
  @doc("The foo property")
  foo?: string;

  @doc("The bar property")
  bar?: string;
}

@doc("Branch with inherited properties")
model BranchWithInheritedProps extends DiscriminatedUnionTestTypeProperties {
  @doc("The variant type")
  type: "inherited";

  @doc("The baz property")
  baz?: string;

  @doc("A property defined inline")
  quux?: string;
}

@doc("Branch with all inline properties")
model BranchWithAllInlineProps extends DiscriminatedUnionTestTypeProperties {
  @doc("The variant type")
  type: "inline";

  @doc("The fizz property")
  fizz?: string;

  @doc("The buzz property")
  buzz?: string;

  @doc("The pop property")
  pop?: string;
}

@doc("Branch with override")
model BranchWithOverride extends DiscriminatedUnionTestTypeProperties {
  @doc("The variant type")
  type: "override";

  @doc("The overridden foo integer property")
  fooOverride?: int32;
}

// ---- List action request/response types ----

@doc("Foos request")
model FoosRequest {
  @doc("The foo request string")
  someString: string;

  @doc("Location data")
  locationData?: LocationData;
}

@doc("Foos response")
model FoosResponse {
  @doc("The foo response string")
  someString?: string;
}

// ---- ARM Operations ----

interface Operations extends Azure.ResourceManager.Operations {}

@armResourceOperations
interface TestType1Operations {
  get is ArmResourceRead<TestType1>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<TestType1>;
  listFoos is ArmResourceActionSync<TestType1, FoosRequest, FoosResponse>;
}

@armResourceOperations
interface ReadOnlyTestTypeOperations {
  get is ArmResourceRead<ReadOnlyTestType>;
}

@armResourceOperations
interface WriteOnlyTestTypeOperations {
  createOrUpdate is ArmResourceCreateOrReplaceAsync<WriteOnlyTestType>;
}

@armResourceOperations
interface TenantScopeTypeOperations {
  get is ArmResourceRead<TenantScopeType, Azure.ResourceManager.Foundations.TenantBaseParameters>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<TenantScopeType, Azure.ResourceManager.Foundations.TenantBaseParameters>;
}

@armResourceOperations
interface SubscriptionScopeTypeOperations {
  get is ArmResourceRead<SubscriptionScopeType, Azure.ResourceManager.Foundations.SubscriptionBaseParameters>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<SubscriptionScopeType, Azure.ResourceManager.Foundations.SubscriptionBaseParameters>;
}

@armResourceOperations
interface DiscriminatedUnionTestTypeOperations {
  get is ArmResourceRead<DiscriminatedUnionTestType>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<DiscriminatedUnionTestType>;
}
