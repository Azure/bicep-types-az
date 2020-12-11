# Microsoft.HybridData @ 2019-06-01

## Microsoft.HybridData/dataManagers
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridData/dataManagers' (ReadOnly, DeployTimeConstant)

## Sku
### Properties
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.HybridData/dataManagers/dataServices/jobDefinitions
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobDefinitionProperties (Required)
* **type**: 'Microsoft.HybridData/dataManagers/dataServices/jobDefinitions' (ReadOnly, DeployTimeConstant)

## JobDefinitionProperties
### Properties
* **customerSecrets**: CustomerSecret[]
* **dataServiceInput**: any
* **dataSinkId**: string (Required)
* **dataSourceId**: string (Required)
* **lastModifiedTime**: string
* **runLocation**: 'australiaeast' | 'australiasoutheast' | 'brazilsouth' | 'canadacentral' | 'canadaeast' | 'centralindia' | 'centralus' | 'eastasia' | 'eastus' | 'eastus2' | 'japaneast' | 'japanwest' | 'koreacentral' | 'koreasouth' | 'none' | 'northcentralus' | 'northeurope' | 'southcentralus' | 'southeastasia' | 'southindia' | 'uksouth' | 'ukwest' | 'westcentralus' | 'westeurope' | 'westindia' | 'westus' | 'westus2'
* **schedules**: Schedule[]
* **state**: 'Disabled' | 'Enabled' | 'Supported' (Required)
* **userConfirmation**: 'NotRequired' | 'Required'

## CustomerSecret
### Properties
* **algorithm**: 'None' | 'PlainText' | 'RSA_OAEP' | 'RSA1_5' (Required)
* **keyIdentifier**: string (Required)
* **keyValue**: string (Required)

## Schedule
### Properties
* **name**: string
* **policyList**: string[]

## Microsoft.HybridData/dataManagers/dataStores
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataStoreProperties (Required)
* **type**: 'Microsoft.HybridData/dataManagers/dataStores' (ReadOnly, DeployTimeConstant)

## DataStoreProperties
### Properties
* **customerSecrets**: CustomerSecret[]
* **dataStoreTypeId**: string (Required)
* **extendedProperties**: any
* **repositoryId**: string
* **state**: 'Disabled' | 'Enabled' | 'Supported' (Required)

