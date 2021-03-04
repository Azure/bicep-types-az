# Microsoft.Search @ 2015-08-19

## Resource Microsoft.Search/searchServices@2015-08-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SearchServiceProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## SearchServiceProperties
### Properties
* **partitionCount**: int
* **replicaCount**: int
* **statusDetails**: string (ReadOnly)

## Sku
### Properties

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

