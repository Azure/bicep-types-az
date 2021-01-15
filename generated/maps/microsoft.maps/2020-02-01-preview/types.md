# Microsoft.Maps @ 2020-02-01-preview

## Resource Microsoft.Maps/accounts@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MapsAccountProperties (ReadOnly)
* **sku**: Sku (Required)
* **systemData**: systemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maps/accounts/creators@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreatorProperties (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Maps/accounts/creators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maps/accounts/privateAtlases@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateAtlasProperties (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Maps/accounts/privateAtlases' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.Maps/accounts@2020-02-01-preview)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2020-02-01-preview
* **Output**: MapsAccountKeys

## MapsAccountProperties
### Properties
* **x-ms-client-id**: string (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: string (ReadOnly)

## systemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreatorProperties
### Properties
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateAtlasProperties
### Properties
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MapsAccountKeys
### Properties
* **id**: string (ReadOnly)
* **primaryKey**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

