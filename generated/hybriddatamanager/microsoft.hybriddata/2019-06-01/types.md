# Microsoft.HybridData @ 2019-06-01

## Resource Microsoft.HybridData/dataManagers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.HybridData/dataManagers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobDefinitionProperties (Required)
* **type**: 'Microsoft.HybridData/dataManagers/dataServices/jobDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridData/dataManagers/dataStores@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataStoreProperties (Required)
* **type**: 'Microsoft.HybridData/dataManagers/dataStores' (ReadOnly, DeployTimeConstant)

## Sku
### Properties
* **name**: string
* **tier**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobDefinitionProperties
### Properties
* **customerSecrets**: CustomerSecret[]
* **dataSinkId**: string (Required)
* **dataSourceId**: string (Required)
* **lastModifiedTime**: string
* **schedules**: Schedule[]

## CustomerSecret
### Properties
* **keyIdentifier**: string (Required)
* **keyValue**: string (Required)

## Schedule
### Properties
* **name**: string
* **policyList**: string[]

## DataStoreProperties
### Properties
* **customerSecrets**: CustomerSecret[]
* **dataStoreTypeId**: string (Required)
* **repositoryId**: string

