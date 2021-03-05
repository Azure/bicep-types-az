# Microsoft.Maps @ 2017-01-01-preview

## Resource Microsoft.Maps/accounts@2017-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MapsAccountProperties (ReadOnly)
* **sku**: Sku (Required)
* **tags**: MapsAccountCreateParametersTags
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant)

## MapsAccountProperties
### Properties
* **xMsClientId**: string (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: string (ReadOnly)

## MapsAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

