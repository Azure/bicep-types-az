# Microsoft.EngagementFabric @ 2018-09-01-preview

## Resource Microsoft.EngagementFabric/Accounts@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **sku**: [SKU](#sku) (Required): The SKU of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): The tags of the resource
* **type**: 'Microsoft.EngagementFabric/Accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EngagementFabric/Accounts/Channels@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChannelProperties](#channelproperties): The properties of the channel
* **type**: 'Microsoft.EngagementFabric/Accounts/Channels' (ReadOnly, DeployTimeConstant): The resource type

## Function listChannelTypes (Microsoft.EngagementFabric/Accounts@2018-09-01-preview)
* **Resource**: Microsoft.EngagementFabric/Accounts
* **ApiVersion**: 2018-09-01-preview
* **Output**: [ChannelTypeDescriptionList](#channeltypedescriptionlist)

## Function listKeys (Microsoft.EngagementFabric/Accounts@2018-09-01-preview)
* **Resource**: Microsoft.EngagementFabric/Accounts
* **ApiVersion**: 2018-09-01-preview
* **Output**: [KeyDescriptionList](#keydescriptionlist)

## ChannelProperties
### Properties
* **channelFunctions**: string[]: The functions to be enabled for the channel
* **channelType**: string (Required): The channel type
* **credentials**: [ChannelPropertiesCredentials](#channelpropertiescredentials): The channel credentials

## ChannelPropertiesCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ChannelTypeDescription
### Properties
* **channelDescription**: string (ReadOnly): Text description for the channel
* **channelFunctions**: string[] (ReadOnly): All the available functions for the channel
* **channelType**: string (ReadOnly): Channel type

## ChannelTypeDescriptionList
### Properties
* **value**: [ChannelTypeDescription](#channeltypedescription)[] (ReadOnly): Channel descriptions

## KeyDescription
### Properties
* **name**: string (ReadOnly): The name of the key
* **rank**: 'PrimaryKey' | 'SecondaryKey' | string (ReadOnly): The rank of the key
* **value**: string (ReadOnly): The value of the key

## KeyDescriptionList
### Properties
* **value**: [KeyDescription](#keydescription)[] (ReadOnly): Account keys

## SKU
### Properties
* **name**: string (Required): The name of the SKU
* **tier**: string: The price tier of the SKU

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

