# Microsoft.MixedReality @ 2020-04-06-preview

## Resource Microsoft.MixedReality/remoteRenderingAccounts@2020-04-06-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-06-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **kind**: [Sku](#sku)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Identity](#identity)
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties)
* **sku**: [Sku](#sku)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MixedReality/remoteRenderingAccounts' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard'

## MixedRealityAccountProperties
### Properties
* **accountDomain**: string (ReadOnly)
* **accountId**: string (ReadOnly)
* **storageAccountName**: string

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

