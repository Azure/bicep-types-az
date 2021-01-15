# Microsoft.Batch @ 2015-12-01

## Resource Microsoft.Batch/batchAccounts@2015-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BatchAccountBaseProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications@2015-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowUpdates**: bool
* **apiVersion**: '2015-12-01' (ReadOnly, DeployTimeConstant)
* **defaultVersion**: string (ReadOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **displayName**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **packages**: ApplicationPackage[] (ReadOnly)
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.Batch/batchAccounts@2015-12-01)
* **Resource**: Microsoft.Batch/batchAccounts
* **ApiVersion**: 2015-12-01
* **Output**: BatchAccountKeys

## BatchAccountBaseProperties
### Properties
* **accountEndpoint**: string (ReadOnly)
* **activeJobAndJobScheduleQuota**: int (ReadOnly)
* **autoStorage**: AutoStorageBaseProperties
* **coreQuota**: int (ReadOnly)
* **poolQuota**: int (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Succeeded' (ReadOnly)

## AutoStorageBaseProperties
### Properties
* **lastKeySync**: string (ReadOnly)
* **storageAccountId**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationPackage
### Properties
* **format**: string (ReadOnly)
* **id**: string (ReadOnly)
* **lastActivationTime**: string (ReadOnly)
* **state**: 'active' | 'pending' | 'unmapped' (ReadOnly)
* **storageUrl**: string (ReadOnly)
* **storageUrlExpiry**: string (ReadOnly)
* **version**: string (ReadOnly)

## BatchAccountKeys
### Properties
* **primary**: string (ReadOnly)
* **secondary**: string (ReadOnly)

