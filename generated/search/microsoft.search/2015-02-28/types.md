# Microsoft.Search @ 2015-02-28

## Resource Microsoft.Search/searchServices@2015-02-28
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-28' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SearchServiceProperties (WriteOnly)
* **tags**: SearchServiceCreateOrUpdateParametersTags (WriteOnly)
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## SearchServiceProperties
### Properties
* **partitionCount**: int (WriteOnly)
* **replicaCount**: int (WriteOnly)
* **sku**: Sku (WriteOnly)

## Sku
### Properties

## SearchServiceCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

