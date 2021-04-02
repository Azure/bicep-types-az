# Microsoft.MixedReality @ 2019-12-02-preview

## Resource Microsoft.MixedReality/remoteRenderingAccounts@2019-12-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties): Common Properties shared by Mixed Reality Accounts
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.MixedReality/remoteRenderingAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MixedReality/spatialAnchorsAccounts@2019-12-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties): Common Properties shared by Mixed Reality Accounts
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.MixedReality/spatialAnchorsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## MixedRealityAccountProperties
### Properties
* **accountDomain**: string (ReadOnly): Correspond domain name of certain Spatial Anchors Account
* **accountId**: string (ReadOnly): unique id of certain account.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

