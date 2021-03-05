# Microsoft.BotService @ 2018-07-12

## Resource Microsoft.BotService/botServices@2018-07-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-12' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'bot' | 'designer' | 'function' | 'sdk'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BotProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.BotService/botServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BotService/botServices/Connections@2018-07-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-12' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'bot' | 'designer' | 'function' | 'sdk'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionSettingProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.BotService/botServices/Connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BotService/enterpriseChannels@2018-07-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-12' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'bot' | 'designer' | 'function' | 'sdk'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnterpriseChannelProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.BotService/enterpriseChannels' (ReadOnly, DeployTimeConstant)

## BotProperties
### Properties
* **configuredChannels**: string[] (ReadOnly)
* **description**: string
* **developerAppInsightKey**: string
* **developerAppInsightsApiKey**: string
* **developerAppInsightsApplicationId**: string
* **displayName**: string (Required)
* **enabledChannels**: string[] (ReadOnly)
* **endpoint**: string (Required)
* **endpointVersion**: string (ReadOnly)
* **iconUrl**: string
* **luisAppIds**: string[]
* **luisKey**: string
* **msaAppId**: string (Required)

## Sku
### Properties
* **name**: 'F0' | 'S1' (Required)
* **tier**: 'Free' | 'Standard' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionSettingProperties
### Properties
* **clientId**: string
* **clientSecret**: string
* **parameters**: ConnectionSettingParameter[]
* **scopes**: string
* **serviceProviderDisplayName**: string
* **serviceProviderId**: string
* **settingId**: string (ReadOnly)

## ConnectionSettingParameter
### Properties
* **key**: string
* **value**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnterpriseChannelProperties
### Properties
* **nodes**: EnterpriseChannelNode[] (Required)
* **state**: 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleting' | 'StartFailed' | 'Started' | 'Starting' | 'StopFailed' | 'Stopped' | 'Stopping'

## EnterpriseChannelNode
### Properties
* **azureLocation**: string (Required)
* **azureSku**: string (Required)
* **id**: string (ReadOnly)
* **name**: string (Required)
* **state**: 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleting' | 'StartFailed' | 'Started' | 'Starting' | 'StopFailed' | 'Stopped' | 'Stopping'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

