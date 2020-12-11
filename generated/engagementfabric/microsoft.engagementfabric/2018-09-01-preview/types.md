# Microsoft.EngagementFabric @ 2018-09-01-preview

## Microsoft.EngagementFabric/Accounts
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: SKU (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EngagementFabric/Accounts' (ReadOnly, DeployTimeConstant)

## SKU
### Properties
* **name**: string (Required)
* **tier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.EngagementFabric/Accounts/Channels
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ChannelProperties
* **type**: 'Microsoft.EngagementFabric/Accounts/Channels' (ReadOnly, DeployTimeConstant)

## ChannelProperties
### Properties
* **channelFunctions**: string[]
* **channelType**: string (Required)
* **credentials**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

