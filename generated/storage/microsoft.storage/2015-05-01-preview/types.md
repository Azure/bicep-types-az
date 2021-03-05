# Microsoft.Storage @ 2015-05-01-preview

## Resource Microsoft.Storage/storageAccounts@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **tags**: ResourceTags
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## StorageAccountPropertiesCreateParameters
### Properties
* **creationTime**: string (ReadOnly)
* **customDomain**: CustomDomain (ReadOnly)
* **lastGeoFailoverTime**: string (ReadOnly)
* **primaryEndpoints**: Endpoints (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **secondaryEndpoints**: Endpoints (ReadOnly)
* **secondaryLocation**: string (ReadOnly)

## CustomDomain
### Properties
* **name**: string (ReadOnly)
* **useSubDomainName**: bool (ReadOnly)

## Endpoints
### Properties
* **blob**: string (ReadOnly)
* **queue**: string (ReadOnly)
* **table**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

