# Microsoft.MixedReality @ 2020-04-06-preview

## Resource Microsoft.MixedReality/remoteRenderingAccounts@2020-04-06-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-06-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [schemas:0_identity](#schemas0identity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MixedReality/remoteRenderingAccounts' (ReadOnly, DeployTimeConstant)

## schemas:0_identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## MixedRealityAccountProperties
### Properties
* **accountDomain**: string (ReadOnly)
* **accountId**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

