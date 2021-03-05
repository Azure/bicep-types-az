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

## Resource Microsoft.BotService/botServices/channels@2020-06-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-02' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'bot' | 'designer' | 'function' | 'sdk'
* **location**: string
* **name**: 'AlexaChannel' | 'DirectLineChannel' | 'DirectLineSpeechChannel' | 'EmailChannel' | 'FacebookChannel' | 'KikChannel' | 'LineChannel' | 'MsTeamsChannel' | 'SkypeChannel' | 'SlackChannel' | 'SmsChannel' | 'TelegramChannel' | 'WebChatChannel' (Required, DeployTimeConstant)
* **properties**: Channel
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.BotService/botServices/channels' (ReadOnly, DeployTimeConstant)

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

## Channel
* **Discriminator**: channelName

### Base Properties
### AlexaChannel
#### Properties
* **channelName**: 'AlexaChannel' (Required)
* **properties**: AlexaChannelProperties

### DirectLineChannel
#### Properties
* **channelName**: 'DirectLineChannel' (Required)
* **properties**: DirectLineChannelProperties

### DirectLineSpeechChannel
#### Properties
* **channelName**: 'DirectLineSpeechChannel' (Required)
* **properties**: DirectLineSpeechChannelProperties

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

### LineChannel
#### Properties
* **channelName**: 'LineChannel' (Required)
* **properties**: LineChannelProperties

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


## AlexaChannel
### Properties
* **channelName**: 'AlexaChannel' (Required)
* **properties**: AlexaChannelProperties

## AlexaChannelProperties
### Properties
* **alexaSkillId**: string (Required)
* **isEnabled**: bool (Required)
* **serviceEndpointUri**: string (ReadOnly)
* **urlFragment**: string (ReadOnly)

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
* **isSecureSiteEnabled**: bool
* **isV1Enabled**: bool (Required)
* **isV3Enabled**: bool (Required)
* **key**: string (ReadOnly)
* **key2**: string (ReadOnly)
* **siteId**: string (ReadOnly)
* **siteName**: string (Required)
* **trustedOrigins**: string[]

## DirectLineSpeechChannel
### Properties
* **channelName**: 'DirectLineSpeechChannel' (Required)
* **properties**: DirectLineSpeechChannelProperties

## DirectLineSpeechChannelProperties
### Properties
* **cognitiveServicesSubscriptionId**: string (Required)
* **customSpeechModelId**: string
* **customVoiceDeploymentId**: string
* **isDefaultBotForCogSvcAccount**: bool
* **isEnabled**: bool

## EmailChannel
### Properties
* **channelName**: 'EmailChannel' (Required)
* **properties**: EmailChannelProperties

## EmailChannelProperties
### Properties
* **emailAddress**: string (Required)
* **isEnabled**: bool (Required)
* **password**: string

## FacebookChannel
### Properties
* **channelName**: 'FacebookChannel' (Required)
* **properties**: FacebookChannelProperties

## FacebookChannelProperties
### Properties
* **appId**: string (Required)
* **appSecret**: string
* **callbackUrl**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **pages**: FacebookPage[]
* **verifyToken**: string (ReadOnly)

## FacebookPage
### Properties
* **accessToken**: string
* **id**: string (Required)

## KikChannel
### Properties
* **channelName**: 'KikChannel' (Required)
* **properties**: KikChannelProperties

## KikChannelProperties
### Properties
* **apiKey**: string
* **isEnabled**: bool (Required)
* **isValidated**: bool
* **userName**: string (Required)

## LineChannel
### Properties
* **channelName**: 'LineChannel' (Required)
* **properties**: LineChannelProperties

## LineChannelProperties
### Properties
* **callbackUrl**: string (ReadOnly)
* **isValidated**: bool (ReadOnly)
* **lineRegistrations**: LineRegistration[] (Required)

## LineRegistration
### Properties
* **channelAccessToken**: string
* **channelSecret**: string
* **generatedId**: string (ReadOnly)

## MsTeamsChannel
### Properties
* **channelName**: 'MsTeamsChannel' (Required)
* **properties**: MsTeamsChannelProperties

## MsTeamsChannelProperties
### Properties
* **callingWebHook**: string
* **enableCalling**: bool
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
* **clientId**: string
* **clientSecret**: string
* **isEnabled**: bool (Required)
* **isValidated**: bool (ReadOnly)
* **landingPageUrl**: string
* **lastSubmissionId**: string (ReadOnly)
* **redirectAction**: string (ReadOnly)
* **registerBeforeOAuthFlow**: bool (ReadOnly)
* **signingSecret**: string
* **verificationToken**: string

## SmsChannel
### Properties
* **channelName**: 'SmsChannel' (Required)
* **properties**: SmsChannelProperties

## SmsChannelProperties
### Properties
* **accountSID**: string (Required)
* **authToken**: string
* **isEnabled**: bool (Required)
* **isValidated**: bool
* **phone**: string (Required)

## TelegramChannel
### Properties
* **channelName**: 'TelegramChannel' (Required)
* **properties**: TelegramChannelProperties

## TelegramChannelProperties
### Properties
* **accessToken**: string
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

