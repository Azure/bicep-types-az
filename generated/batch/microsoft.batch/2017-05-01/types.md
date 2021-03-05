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
* **displayName**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant)

## BatchAccountCreateProperties
### Properties
* **autoStorage**: AutoStorageBaseProperties
* **keyVaultReference**: KeyVaultReference

## AutoStorageBaseProperties
### Properties
* **storageAccountId**: string (Required)

## KeyVaultReference
### Properties
* **id**: string (Required)
* **url**: string (Required)

## BatchAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

