# Microsoft.Search @ 2015-02-28

## Resource Microsoft.Search/searchServices@2015-02-28
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-28' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SearchServiceProperties](#searchserviceproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## SearchServiceProperties
### Properties
* **partitionCount**: int
* **replicaCount**: int
* **sku**: [Sku](#sku)

## Sku
### Properties
* **name**: 'free' | 'standard' | 'standard2'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

