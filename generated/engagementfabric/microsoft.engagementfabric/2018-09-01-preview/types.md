# Microsoft.EngagementFabric @ 2018-09-01-preview

## Resource Microsoft.EngagementFabric/Accounts@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: [SKU](#sku) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.EngagementFabric/Accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EngagementFabric/Accounts/Channels@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ChannelProperties](#channelproperties)
* **type**: 'Microsoft.EngagementFabric/Accounts/Channels' (ReadOnly, DeployTimeConstant)

## SKU
### Properties
* **name**: string (Required)
* **tier**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ChannelProperties
### Properties
* **channelFunctions**: string[]
* **channelType**: string (Required)
* **credentials**: [ChannelPropertiesCredentials](#channelpropertiescredentials)

## ChannelPropertiesCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

