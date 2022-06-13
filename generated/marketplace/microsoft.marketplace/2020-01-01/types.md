# Microsoft.Marketplace @ 2020-01-01

## Resource Microsoft.Marketplace/privateStores@2020-01-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateStoreProperties](#privatestoreproperties): The PrivateStore data structure.
* **type**: 'Microsoft.Marketplace/privateStores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Marketplace/privateStores/offers@2020-01-01
* **Valid Scope(s)**: Tenant, Subscription
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfferProperties](#offerproperties): The privateStore offer data structure.
* **type**: 'Microsoft.Marketplace/privateStores/offers' (ReadOnly, DeployTimeConstant): The resource type

## OfferProperties
### Properties
* **createdAt**: string (ReadOnly): Private store offer creation date
* **eTag**: string: Identifier for purposes of race condition
* **iconFileUris**: [OfferPropertiesIconFileUris](#offerpropertiesiconfileuris): Icon File Uris
* **modifiedAt**: string (ReadOnly): Private store offer modification date
* **offerDisplayName**: string (ReadOnly): It will be displayed prominently in the marketplace
* **plans**: [Plan](#plan)[]: Offer plans
* **privateStoreId**: string (ReadOnly): Private store unique id
* **publisherDisplayName**: string (ReadOnly): Publisher name that will be displayed prominently in the marketplace
* **specificPlanIdsLimitation**: string[]: Plan ids limitation for this offer
* **uniqueOfferId**: string (ReadOnly): Offers unique id
* **updateSuppressedDueIdempotence**: bool: Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.

## OfferPropertiesIconFileUris
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Plan
### Properties
* **accessibility**: 'PrivateSubscriptionOnLevel' | 'PrivateTenantOnLevel' | 'Public' | 'Unknown' | string: Plan accessibility
* **altStackReference**: string (ReadOnly): Alternative stack type
* **planDisplayName**: string (ReadOnly): Friendly name for the plan for display in the marketplace
* **planId**: string (ReadOnly): Text identifier for this plan
* **skuId**: string (ReadOnly): Identifier for this plan
* **stackType**: string (ReadOnly): Stack type (classic or arm)

## PrivateStoreProperties
### Properties
* **availability**: 'disabled' | 'enabled' | string: Indicates private store availability
* **customerTag**: string: Customer tag
* **eTag**: string: Identifier for purposes of race condition
* **hasCommercialAssociation**: bool: Indicating whether private store has association with Commercial's Billing Account (through billing account's customer tag retrieved from GSM for a subscription
* **hasMultiTenantAssociation**: bool: Indicating whether private store has association with multiple tenants (through tenant's tag retrieved from AAD
* **isGov**: bool: Is government
* **privateStoreId**: string: Private Store id
* **privateStoreName**: string: Private Store Name
* **tenantIds**: string[]: Tenant ids
* **tenantTag**: string: Tenant Tag

