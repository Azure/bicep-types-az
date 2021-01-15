# Microsoft.EngagementFabric @ 2018-09-01-preview

## Resource Microsoft.EngagementFabric/Accounts@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: SKU (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EngagementFabric/Accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EngagementFabric/Accounts/Channels@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ChannelProperties
* **type**: 'Microsoft.EngagementFabric/Accounts/Channels' (ReadOnly, DeployTimeConstant)

## Function listChannelTypes (Microsoft.EngagementFabric/Accounts@2018-09-01-preview)
* **Resource**: Microsoft.EngagementFabric/Accounts
* **ApiVersion**: 2018-09-01-preview
* **Output**: ChannelTypeDescriptionList

## Function listKeys (Microsoft.EngagementFabric/Accounts@2018-09-01-preview)
* **Resource**: Microsoft.EngagementFabric/Accounts
* **ApiVersion**: 2018-09-01-preview
* **Output**: KeyDescriptionList

## SKU
### Properties
* **name**: string (Required)
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ChannelProperties
### Properties
* **channelFunctions**: string[]
* **channelType**: string (Required)
* **credentials**: Dictionary<string,String>

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ChannelTypeDescriptionList
### Properties
* **value**: ChannelTypeDescription[] (ReadOnly)

## ChannelTypeDescription
### Properties
* **channelDescription**: string (ReadOnly)
* **channelFunctions**: string[] (ReadOnly)
* **channelType**: string (ReadOnly)

## KeyDescriptionList
### Properties
* **value**: KeyDescription[] (ReadOnly)

## KeyDescription
### Properties
* **name**: string (ReadOnly)
* **rank**: 'PrimaryKey' | 'SecondaryKey' (ReadOnly)
* **value**: string (ReadOnly)

