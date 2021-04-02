# Microsoft.EngagementFabric @ 2018-09-01-preview

## Resource Microsoft.EngagementFabric/Accounts@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **sku**: [SKU](#sku) (Required): The EngagementFabric SKU
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource
* **type**: 'Microsoft.EngagementFabric/Accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EngagementFabric/Accounts/Channels@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChannelProperties](#channelproperties): The EngagementFabric channel properties
* **type**: 'Microsoft.EngagementFabric/Accounts/Channels' (ReadOnly, DeployTimeConstant): The resource type

## SKU
### Properties
* **name**: string (Required): The name of the SKU
* **tier**: string: The price tier of the SKU

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ChannelProperties
### Properties
* **channelFunctions**: string[]: The functions to be enabled for the channel
* **channelType**: string (Required): The channel type
* **credentials**: [Dictionary<string,String>](#dictionarystringstring): The channel credentials

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

