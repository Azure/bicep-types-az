# Microsoft.BotService @ 2020-06-02

## Resource Microsoft.BotService/botServices@2020-06-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-02' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'bot' | 'designer' | 'function' | 'sdk'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BotProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.BotService/botServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BotService/botServices/connections@2020-06-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-02' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'bot' | 'designer' | 'function' | 'sdk'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionSettingProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.BotService/botServices/connections' (ReadOnly, DeployTimeConstant)

## BotProperties
### Properties
* **cmekKeyVaultUrl**: string
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
* **isCmekEnabled**: bool
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

