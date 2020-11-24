# Microsoft.Marketplace @ 2020-01-01

## Microsoft.Marketplace/privateStores
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateStoreProperties
* **type**: 'Microsoft.Marketplace/privateStores' (ReadOnly, DeployTimeConstant)

## PrivateStoreProperties
### Properties
* **availability**: 'disabled' | 'enabled'
* **customerTag**: string
* **eTag**: string
* **hasCommercialAssociation**: bool
* **hasMultiTenantAssociation**: bool
* **isGov**: bool
* **privateStoreId**: string
* **privateStoreName**: string
* **tenantIds**: string[]
* **tenantTag**: string

## Microsoft.Marketplace/privateStores/offers
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OfferProperties
* **type**: 'Microsoft.Marketplace/privateStores/offers' (ReadOnly, DeployTimeConstant)

## OfferProperties
### Properties
* **createdAt**: string (ReadOnly)
* **eTag**: string
* **iconFileUris**: schemas:7_iconFileUris
* **modifiedAt**: string (ReadOnly)
* **offerDisplayName**: string (ReadOnly)
* **plans**: Plan[]
* **privateStoreId**: string (ReadOnly)
* **publisherDisplayName**: string (ReadOnly)
* **specificPlanIdsLimitation**: string[]
* **uniqueOfferId**: string (ReadOnly)
* **updateSuppressedDueIdempotence**: bool

## schemas:7_iconFileUris
### Properties
* **iconKind**: 'Hero' | 'Large' | 'Medium' | 'Small' | 'Wide'
* **uri**: string

## Plan
### Properties
* **accessibility**: 'PrivateSubscriptionOnLevel' | 'PrivateTenantOnLevel' | 'Public' | 'Unknown'
* **altStackReference**: string (ReadOnly)
* **planDisplayName**: string (ReadOnly)
* **planId**: string (ReadOnly)
* **skuId**: string (ReadOnly)
* **stackType**: string (ReadOnly)

## Microsoft.Marketplace/privateStores/offers
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OfferProperties
* **type**: 'Microsoft.Marketplace/privateStores/offers' (ReadOnly, DeployTimeConstant)

