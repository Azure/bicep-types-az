# Microsoft.Batch @ 2017-01-01

## Resource Microsoft.Batch/batchAccounts@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BatchAccountBaseProperties](#batchaccountbaseproperties)
* **tags**: [BatchAccountCreateParametersTags](#batchaccountcreateparameterstags)
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowUpdates**: bool
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **defaultVersion**: string (ReadOnly)
* **displayName**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **packages**: [ApplicationPackage](#applicationpackage)[] (ReadOnly)
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications/versions@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **format**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **lastActivationTime**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **state**: 'active' | 'pending' | 'unmapped' (ReadOnly)
* **storageUrl**: string (ReadOnly)
* **storageUrlExpiry**: string (ReadOnly)
* **type**: 'Microsoft.Batch/batchAccounts/applications/versions' (ReadOnly, DeployTimeConstant)
* **version**: string (ReadOnly)

## BatchAccountBaseProperties
### Properties
* **accountEndpoint**: string (ReadOnly)
* **activeJobAndJobScheduleQuota**: int (ReadOnly)
* **autoStorage**: [AutoStorageBaseProperties](#autostoragebaseproperties)
* **coreQuota**: int (ReadOnly)
* **keyVaultReference**: [KeyVaultReference](#keyvaultreference)
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

