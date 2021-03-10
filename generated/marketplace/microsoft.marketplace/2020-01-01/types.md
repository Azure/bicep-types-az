# Microsoft.Marketplace @ 2020-01-01

## Resource Microsoft.Marketplace/privateStores@2020-01-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateStoreProperties](#privatestoreproperties)
* **type**: 'Microsoft.Marketplace/privateStores' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Marketplace/privateStores/offers@2020-01-01
* **Valid Scope(s)**: Tenant, Subscription
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OfferProperties](#offerproperties)
* **type**: 'Microsoft.Marketplace/privateStores/offers' (ReadOnly, DeployTimeConstant)

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

## OfferProperties
### Properties
* **createdAt**: string (ReadOnly)
* **eTag**: string
* **iconFileUris**: [OfferPropertiesIconFileUris](#offerpropertiesiconfileuris)
* **modifiedAt**: string (ReadOnly)
* **offerDisplayName**: string (ReadOnly)
* **plans**: [Plan](#plan)[]
* **privateStoreId**: string (ReadOnly)
* **publisherDisplayName**: string (ReadOnly)
* **specificPlanIdsLimitation**: string[]
* **uniqueOfferId**: string (ReadOnly)
* **updateSuppressedDueIdempotence**: bool

## OfferPropertiesIconFileUris
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Plan
### Properties
* **accessibility**: 'PrivateSubscriptionOnLevel' | 'PrivateTenantOnLevel' | 'Public' | 'Unknown'
* **altStackReference**: string (ReadOnly)
* **planDisplayName**: string (ReadOnly)
* **planId**: string (ReadOnly)
* **skuId**: string (ReadOnly)
* **stackType**: string (ReadOnly)

