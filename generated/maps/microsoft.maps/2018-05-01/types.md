# Microsoft.Maps @ 2018-05-01

## Resource Microsoft.Maps/accounts@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MapsAccountProperties (ReadOnly)
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.Maps/accounts@2018-05-01
* **Resource**: Microsoft.Maps/accounts@2018-05-01
* **Output**: MapsAccountKeys

## MapsAccountProperties
### Properties
* **x-ms-client-id**: string (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MapsAccountKeys
### Properties
* **id**: string (ReadOnly)
* **primaryKey**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

