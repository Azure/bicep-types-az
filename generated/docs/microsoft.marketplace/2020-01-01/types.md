# Microsoft.Marketplace @ 2020-01-01

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
* **createdBy**: string (ReadOnly)
* **createdDate**: string (ReadOnly)
* **eTag**: string
* **offerDisplayName**: string (ReadOnly)
* **privateStoreId**: string (ReadOnly)
* **publisherDisplayName**: string (ReadOnly)
* **specificPlanIdsLimitation**: string[]
* **uniqueOfferId**: string (ReadOnly)

## Microsoft.Marketplace/privateStores/offers
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OfferProperties
* **type**: 'Microsoft.Marketplace/privateStores/offers' (ReadOnly, DeployTimeConstant)

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
* **eTag**: string
* **privateStoreId**: string

