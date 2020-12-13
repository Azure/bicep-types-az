# Microsoft.BotService @ 2017-12-01

## Resource Microsoft.BotService/botServices@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'bot' | 'designer' | 'function' | 'sdk'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BotProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.BotService/botServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BotService/botServices/channels@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'bot' | 'designer' | 'function' | 'sdk'
* **location**: string
* **name**: 'DirectLineChannel' | 'EmailChannel' | 'FacebookChannel' | 'KikChannel' | 'MsTeamsChannel' | 'SkypeChannel' | 'SlackChannel' | 'SmsChannel' | 'TelegramChannel' | 'WebChatChannel' (Required, DeployTimeConstant)
* **properties**: Channel
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.BotService/botServices/channels' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BotService/botServices/Connections@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'bot' | 'designer' | 'function' | 'sdk'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionSettingProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.BotService/botServices/Connections' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Channel
* **Discriminator**: channelName
### Base Properties
### DirectLineChannel
#### Properties
* **channelName**: 'DirectLineChannel' (Required)
* **properties**: DirectLineChannelProperties

### EmailChannel
#### Properties
* **channelName**: 'EmailChannel' (Required)
* **properties**: EmailChannelProperties

### FacebookChannel
#### Properties
* **channelName**: 'FacebookChannel' (Required)
* **properties**: FacebookChannelProperties

### KikChannel
#### Properties
* **channelName**: 'KikChannel' (Required)
* **properties**: KikChannelProperties

### MsTeamsChannel
#### Properties
* **channelName**: 'MsTeamsChannel' (Required)
* **properties**: MsTeamsChannelProperties

### SkypeChannel
#### Properties
* **channelName**: 'SkypeChannel' (Required)
* **properties**: SkypeChannelProperties

### SlackChannel
#### Properties
* **channelName**: 'SlackChannel' (Required)
* **properties**: SlackChannelProperties

### SmsChannel
#### Properties
* **channelName**: 'SmsChannel' (Required)
* **properties**: SmsChannelProperties

### TelegramChannel
#### Properties
* **channelName**: 'TelegramChannel' (Required)
* **properties**: TelegramChannelProperties

### WebChatChannel
#### Properties
* **channelName**: 'WebChatChannel' (Required)
* **properties**: WebChatChannelProperties


## DirectLineChannel
### Properties
* **channelName**: 'DirectLineChannel' (Required)
* **properties**: DirectLineChannelProperties

## DirectLineChannelProperties
### Properties
* **sites**: DirectLineSite[]

## DirectLineSite
### Properties
* **isEnabled**: bool (Required)
* **isV1Enabled**: bool (Required)
* **isV3Enabled**: bool (Required)
* **key**: string (ReadOnly)
* **key2**: string (ReadOnly)
* **siteId**: string (ReadOnly)
* **siteName**: string (Required)

## EmailChannel
### Properties
* **channelName**: 'EmailChannel' (Required)
* **properties**: EmailChannelProperties

## EmailChannelProperties
### Properties
* **emailAddress**: string (Required)
* **isEnabled**: bool (Required)
* **password**: string (Required)

## FacebookChannel
### Properties
* **channelName**: 'FacebookChannel' (Required)
* **properties**: FacebookChannelProperties

## FacebookChannelProperties
### Properties
* **appId**: string (Required)
* **appSecret**: string (Required)
* **callbackUrl**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **pages**: FacebookPage[]
* **verifyToken**: string (ReadOnly)

## FacebookPage
### Properties
* **accessToken**: string (Required)
* **id**: string (Required)

## KikChannel
### Properties
* **channelName**: 'KikChannel' (Required)
* **properties**: KikChannelProperties

## KikChannelProperties
### Properties
* **apiKey**: string (Required)
* **isEnabled**: bool (Required)
* **isValidated**: bool
* **userName**: string (Required)

## MsTeamsChannel
### Properties
* **channelName**: 'MsTeamsChannel' (Required)
* **properties**: MsTeamsChannelProperties

## MsTeamsChannelProperties
### Properties
* **callMode**: string
* **enableCalling**: bool
* **enableMediaCards**: bool
* **enableMessaging**: bool
* **enableVideo**: bool
* **isEnabled**: bool (Required)

## SkypeChannel
### Properties
* **channelName**: 'SkypeChannel' (Required)
* **properties**: SkypeChannelProperties

## SkypeChannelProperties
### Properties
* **callingWebHook**: string
* **enableCalling**: bool
* **enableGroups**: bool
* **enableMediaCards**: bool
* **enableMessaging**: bool
* **enableScreenSharing**: bool
* **enableVideo**: bool
* **groupsMode**: string
* **isEnabled**: bool (Required)

## SlackChannel
### Properties
* **channelName**: 'SlackChannel' (Required)
* **properties**: SlackChannelProperties

## SlackChannelProperties
### Properties
* **clientId**: string (Required)
* **clientSecret**: string (Required)
* **isEnabled**: bool (Required)
* **isValidated**: bool (ReadOnly)
* **landingPageUrl**: string
* **lastSubmissionId**: string (ReadOnly)
* **redirectAction**: string (ReadOnly)
* **registerBeforeOAuthFlow**: bool (ReadOnly)
* **verificationToken**: string (Required)

## SmsChannel
### Properties
* **channelName**: 'SmsChannel' (Required)
* **properties**: SmsChannelProperties

## SmsChannelProperties
### Properties
* **accountSID**: string (Required)
* **authToken**: string (Required)
* **isEnabled**: bool (Required)
* **isValidated**: bool
* **phone**: string (Required)

## TelegramChannel
### Properties
* **channelName**: 'TelegramChannel' (Required)
* **properties**: TelegramChannelProperties

## TelegramChannelProperties
### Properties
* **accessToken**: string (Required)
* **isEnabled**: bool (Required)
* **isValidated**: bool

## WebChatChannel
### Properties
* **channelName**: 'WebChatChannel' (Required)
* **properties**: WebChatChannelProperties

## WebChatChannelProperties
### Properties
* **sites**: WebChatSite[]
* **webChatEmbedCode**: string (ReadOnly)

## WebChatSite
### Properties
* **enablePreview**: bool (Required)
* **isEnabled**: bool (Required)
* **key**: string (ReadOnly)
* **key2**: string (ReadOnly)
* **siteId**: string (ReadOnly)
* **siteName**: string (Required)

## Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

