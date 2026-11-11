// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.ResourceManager;

@armProviderNamespace
@service(#{ title: "Test.SeparateBodies" })
namespace Test.SeparateBodies;

enum Versions {
  `2024-01-01`,
}

model Account is ProxyResource<AccountResponseProperties> {
  ...ResourceNameParameter<Account, KeyName = "accountName", SegmentName = "accounts">;
}

model AccountResponseProperties {
  @visibility(Lifecycle.Read)
  databaseAccountOfferType?: "Standard";

  @visibility(Lifecycle.Read)
  locations?: ResponseLocation[];

  @visibility(Lifecycle.Read)
  status: string;

  nested?: ResponseNested;
  otherNested?: OtherResponseNested;
  entries?: Record<ResponseNested>;
  shared?: Shared;
  polymorphic?: ResponseBase;
}

model AccountRequest {
  @doc("Required account settings.")
  properties: AccountRequestProperties;
}

model AccountRequestProperties {
  databaseAccountOfferType: "Standard";
  @minItems(1)
  @maxItems(3)
  locations: RequestLocation[];

  @secret
  password: string;

  nested?: RequestNested;
  otherNested?: RequestNested;
  entries?: Record<RequestNested>;
  shared?: Shared;
  polymorphic?: RequestBase;
}

model RequestLocation {
  locationName: string;
  @minValue(0)
  failoverPriority: int32;
  isZoneRedundant?: boolean;
}

model ResponseLocation {
  @visibility(Lifecycle.Read)
  locationName?: string;
  @visibility(Lifecycle.Read)
  failoverPriority?: int32;
  @visibility(Lifecycle.Read)
  isZoneRedundant?: boolean;
  endpoint?: string;
}

model RequestNested {
  @maxLength(30)
  value: string;
  next?: RequestNested;
}

model ResponseNested {
  @visibility(Lifecycle.Read)
  value?: string;
  next?: ResponseNested;
  result?: string;
}

model OtherResponseNested {
  value?: string;
  otherResult?: string;
}

@discriminator("kind")
model RequestBase {
  kind: string;
}

model RequestVariant extends RequestBase {
  kind: "shared";
  value: string;
}

@discriminator("kind")
model ResponseBase {
  kind: string;
}

model ResponseVariant extends ResponseBase {
  kind: "shared";
  @visibility(Lifecycle.Read)
  value?: string;
  result?: string;
}

model ResponseOnlyVariant extends ResponseBase {
  kind: "response-only";
  @visibility(Lifecycle.Read)
  result?: string;
}

model Shared {
  value?: string;
  @visibility(Lifecycle.Read)
  status?: string;
}

interface Operations extends Azure.ResourceManager.Operations {}

@armResourceOperations
interface Accounts {
  get is ArmResourceRead<Account>;

  @put
  createOrUpdate is Azure.ResourceManager.Foundations.ArmCreateOperation<
    ResourceInstanceParameters<Account>,
    AccountRequest,
    Response = ArmResponse<Account>,
    ErrorResponse = Azure.ResourceManager.CommonTypes.ErrorResponse
  >;
}

model RegisteredAccount is ProxyResource<AccountResponseProperties> {
  ...ResourceNameParameter<RegisteredAccount, KeyName = "accountName", SegmentName = "registeredAccounts">;
}

@armResourceOperations
interface RegisteredAccounts {
  get is ArmResourceRead<RegisteredAccount>;

  @armResourceCreateOrUpdate(RegisteredAccount)
  @put
  createOrUpdate is Azure.ResourceManager.Foundations.ArmCreateOperation<
    ResourceInstanceParameters<RegisteredAccount>,
    AccountRequest,
    Response = ArmResponse<RegisteredAccount>,
    ErrorResponse = Azure.ResourceManager.CommonTypes.ErrorResponse
  >;
}
