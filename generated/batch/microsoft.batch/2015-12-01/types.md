# Microsoft.Batch @ 2015-12-01

## Resource Microsoft.Batch/batchAccounts@2015-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BatchAccountBaseProperties
* **tags**: BatchAccountCreateParametersTags
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications@2015-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowUpdates**: bool
* **apiVersion**: '2015-12-01' (ReadOnly, DeployTimeConstant)
* **displayName**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant)

## BatchAccountBaseProperties
### Properties
* **autoStorage**: AutoStorageBaseProperties

## AutoStorageBaseProperties
### Properties
* **storageAccountId**: string (Required)

## BatchAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

