# Microsoft.DataLakeAnalytics @ 2015-10-01-preview

## Resource Microsoft.DataLakeAnalytics/accounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataLakeAnalyticsAccountProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataLakeAnalytics/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataLakeStoreAccountInfoProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/StorageAccounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/StorageAccounts' (ReadOnly, DeployTimeConstant)

## DataLakeAnalyticsAccountProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataLakeStoreAccounts**: DataLakeStoreAccountInfo[]
* **defaultDataLakeStoreAccount**: string
* **endpoint**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **maxDegreeOfParallelism**: int
* **maxJobCount**: int
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' (ReadOnly)
* **state**: 'active' | 'suspended' (ReadOnly)
* **storageAccounts**: StorageAccountInfo[]

## DataLakeStoreAccountInfo
### Properties
* **name**: string (Required)
* **properties**: DataLakeStoreAccountInfoProperties

## DataLakeStoreAccountInfoProperties
### Properties
* **suffix**: string

## StorageAccountInfo
### Properties
* **name**: string (Required)
* **properties**: StorageAccountProperties (Required)

## StorageAccountProperties
### Properties
* **accessKey**: string (Required)
* **suffix**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

