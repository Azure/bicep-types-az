# Microsoft.MixedReality @ 2019-02-28-preview

## Resource Microsoft.MixedReality/spatialAnchorsAccounts@2019-02-28-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-28-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SpatialAnchorsAccountProperties](#spatialanchorsaccountproperties): Spatial Anchors Account Customize Properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.MixedReality/spatialAnchorsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type. Possible values include: 'SystemAssigned'

## SpatialAnchorsAccountProperties
### Properties
* **accountDomain**: string (ReadOnly): Correspond domain name of certain Spatial Anchors Account
* **accountId**: string (ReadOnly): unique id of certain Spatial Anchors Account data contract.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

