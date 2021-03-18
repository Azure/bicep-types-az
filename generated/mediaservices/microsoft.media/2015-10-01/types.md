# Microsoft.Media @ 2015-10-01

## Resource Microsoft.Media/mediaservices@2015-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MediaServiceProperties](#mediaserviceproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant)

## MediaServiceProperties
### Properties
* **apiEndpoints**: [ApiEndpoint](#apiendpoint)[] (ReadOnly)
* **storageAccounts**: [StorageAccount](#storageaccount)[]

## ApiEndpoint
### Properties
* **endpoint**: string
* **majorVersion**: string

## StorageAccount
### Properties
* **id**: string (Required)
* **isPrimary**: bool (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

