# Microsoft.Search @ 2015-02-28

## Resource Microsoft.Search/searchServices@2015-02-28
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-28' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SearchServiceProperties
* **tags**: SearchServiceCreateOrUpdateParametersTags
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## SearchServiceProperties
### Properties
* **partitionCount**: int
* **replicaCount**: int
* **sku**: Sku

## Sku
### Properties
* **name**: 'free' | 'standard' | 'standard2'

## SearchServiceCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

