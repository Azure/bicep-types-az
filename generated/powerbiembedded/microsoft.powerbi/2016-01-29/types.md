# Microsoft.PowerBI @ 2016-01-29

## Resource Microsoft.PowerBI/workspaceCollections@2016-01-29
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-29' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: any (ReadOnly)
* **sku**: AzureSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.PowerBI/workspaceCollections' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.PowerBI/workspaceCollections@2016-01-29
* **Resource**: Microsoft.PowerBI/workspaceCollections@2016-01-29
* **Output**: WorkspaceCollectionAccessKeys

## AzureSku
### Properties
* **name**: string (Required)
* **tier**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceCollectionAccessKeys
### Properties
* **key1**: string (ReadOnly)
* **key2**: string (ReadOnly)

