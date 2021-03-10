# Microsoft.HybridData @ 2019-06-01

## Resource Microsoft.HybridData/dataManagers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.HybridData/dataManagers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobDefinitionProperties](#jobdefinitionproperties) (Required)
* **type**: 'Microsoft.HybridData/dataManagers/dataServices/jobDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridData/dataManagers/dataStores@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataStoreProperties](#datastoreproperties) (Required)
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
* **customerSecrets**: [CustomerSecret](#customersecret)[]
* **dataServiceInput**: any
* **dataSinkId**: string (Required)
* **dataSourceId**: string (Required)
* **lastModifiedTime**: string
* **runLocation**: 'australiaeast' | 'australiasoutheast' | 'brazilsouth' | 'canadacentral' | 'canadaeast' | 'centralindia' | 'centralus' | 'eastasia' | 'eastus' | 'eastus2' | 'japaneast' | 'japanwest' | 'koreacentral' | 'koreasouth' | 'none' | 'northcentralus' | 'northeurope' | 'southcentralus' | 'southeastasia' | 'southindia' | 'uksouth' | 'ukwest' | 'westcentralus' | 'westeurope' | 'westindia' | 'westus' | 'westus2'
* **schedules**: [Schedule](#schedule)[]
* **state**: 'Disabled' | 'Enabled' | 'Supported' (Required)
* **userConfirmation**: 'NotRequired' | 'Required'

## CustomerSecret
### Properties
* **algorithm**: 'None' | 'PlainText' | 'RSA1_5' | 'RSA_OAEP' (Required)
* **keyIdentifier**: string (Required)
* **keyValue**: string (Required)

## Schedule
### Properties
* **name**: string
* **policyList**: string[]

## DataStoreProperties
### Properties
* **customerSecrets**: [CustomerSecret](#customersecret)[]
* **dataStoreTypeId**: string (Required)
* **extendedProperties**: any
* **repositoryId**: string
* **state**: 'Disabled' | 'Enabled' | 'Supported' (Required)

