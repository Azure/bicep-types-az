# Microsoft.Media @ 2015-10-01

## Microsoft.Media/mediaservices
### Properties
* **apiVersion**: '2015-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MediaServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant)

## MediaServiceProperties
### Properties
* **apiEndpoints**: ApiEndpoint[] (ReadOnly)
* **storageAccounts**: StorageAccount[]

## ApiEndpoint
### Properties
* **endpoint**: string
* **majorVersion**: string

## StorageAccount
### Properties
* **id**: string (Required)
* **isPrimary**: bool (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

