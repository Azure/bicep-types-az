# Microsoft.Batch @ 2017-05-01

## Resource Microsoft.Batch/batchAccounts@2017-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BatchAccountCreateProperties
* **tags**: BatchAccountCreateParametersTags
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications@2017-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowUpdates**: bool
* **apiVersion**: '2017-05-01' (ReadOnly, DeployTimeConstant)
* **defaultVersion**: string (ReadOnly)
* **displayName**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **packages**: ApplicationPackage[] (ReadOnly)
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant)

## BatchAccountCreateProperties
### Properties
* **accountEndpoint**: string (ReadOnly)
* **activeJobAndJobScheduleQuota**: int (ReadOnly)
* **autoStorage**: AutoStorageBaseProperties
* **dedicatedCoreQuota**: int (ReadOnly)
* **keyVaultReference**: KeyVaultReference
* **lowPriorityCoreQuota**: int (ReadOnly)
* **poolAllocationMode**: 'BatchService' | 'UserSubscription'
* **poolQuota**: int (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Succeeded' (ReadOnly)

## AutoStorageBaseProperties
### Properties
* **lastKeySync**: string (ReadOnly)
* **storageAccountId**: string (Required)

## KeyVaultReference
### Properties
* **id**: string (Required)
* **url**: string (Required)

## BatchAccountCreateParametersTags
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

