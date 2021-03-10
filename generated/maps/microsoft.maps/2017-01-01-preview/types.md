# Microsoft.Maps @ 2017-01-01-preview

## Resource Microsoft.Maps/accounts@2017-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MapsAccountProperties](#mapsaccountproperties) (ReadOnly)
* **sku**: [Sku](#sku) (Required)
* **tags**: [MapsAccountCreateParametersTags](#mapsaccountcreateparameterstags)
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant)

## MapsAccountProperties
### Properties
* **x-ms-client-id**: string (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: string (ReadOnly)

## MapsAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

