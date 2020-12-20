# Microsoft.Search @ 2015-02-28

## Resource Microsoft.Search/searchServices@2015-02-28
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-28' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SearchServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## Function listAdminKeys (Microsoft.Search/searchServices@2015-02-28
* **Resource**: Microsoft.Search/searchServices@2015-02-28
* **Output**: AdminKeyResult

## SearchServiceProperties
### Properties
* **partitionCount**: int
* **replicaCount**: int
* **sku**: Sku

## Sku
### Properties
* **name**: 'free' | 'standard' | 'standard2'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AdminKeyResult
### Properties
* **primaryKey**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

