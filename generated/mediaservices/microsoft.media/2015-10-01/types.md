# Microsoft.Media @ 2015-10-01

## Resource Microsoft.Media/mediaservices@2015-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MediaServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.Media/mediaservices@2015-10-01)
* **Resource**: Microsoft.Media/mediaservices
* **ApiVersion**: 2015-10-01
* **Output**: ServiceKeys

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceKeys
### Properties
* **primaryAuthEndpoint**: string (ReadOnly)
* **primaryKey**: string (ReadOnly)
* **scope**: string (ReadOnly)
* **secondaryAuthEndpoint**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

