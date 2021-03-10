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
* **properties**: [BotProperties](#botproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
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
* **properties**: [Channel](#channel)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
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
* **properties**: [ConnectionSettingProperties](#connectionsettingproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
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
* **properties**: [AlexaChannelProperties](#alexachannelproperties)

### DirectLineChannel
#### Properties
* **channelName**: 'DirectLineChannel' (Required)
* **properties**: [DirectLineChannelProperties](#directlinechannelproperties)

### DirectLineSpeechChannel
#### Properties
* **channelName**: 'DirectLineSpeechChannel' (Required)
* **properties**: [DirectLineSpeechChannelProperties](#directlinespeechchannelproperties)

### EmailChannel
#### Properties
* **channelName**: 'EmailChannel' (Required)
* **properties**: [EmailChannelProperties](#emailchannelproperties)

### FacebookChannel
#### Properties
* **channelName**: 'FacebookChannel' (Required)
* **properties**: [FacebookChannelProperties](#facebookchannelproperties)

### KikChannel
#### Properties
* **channelName**: 'KikChannel' (Required)
* **properties**: [KikChannelProperties](#kikchannelproperties)

### LineChannel
#### Properties
* **channelName**: 'LineChannel' (Required)
* **properties**: [LineChannelProperties](#linechannelproperties)

### MsTeamsChannel
#### Properties
* **channelName**: 'MsTeamsChannel' (Required)
* **properties**: [MsTeamsChannelProperties](#msteamschannelproperties)

### SkypeChannel
#### Properties
* **channelName**: 'SkypeChannel' (Required)
* **properties**: [SkypeChannelProperties](#skypechannelproperties)

### SlackChannel
#### Properties
* **channelName**: 'SlackChannel' (Required)
* **properties**: [SlackChannelProperties](#slackchannelproperties)

### SmsChannel
#### Properties
* **channelName**: 'SmsChannel' (Required)
* **properties**: [SmsChannelProperties](#smschannelproperties)

### TelegramChannel
#### Properties
* **channelName**: 'TelegramChannel' (Required)
* **properties**: [TelegramChannelProperties](#telegramchannelproperties)

### WebChatChannel
#### Properties
* **channelName**: 'WebChatChannel' (Required)
* **properties**: [WebChatChannelProperties](#webchatchannelproperties)


## AlexaChannel
### Properties
* **channelName**: 'AlexaChannel' (Required)
* **properties**: [AlexaChannelProperties](#alexachannelproperties)

## AlexaChannelProperties
### Properties
* **alexaSkillId**: string (Required)
* **isEnabled**: bool (Required)
* **serviceEndpointUri**: string (ReadOnly)
* **urlFragment**: string (ReadOnly)

## DirectLineChannel
### Properties
* **channelName**: 'DirectLineChannel' (Required)
* **properties**: [DirectLineChannelProperties](#directlinechannelproperties)

## DirectLineChannelProperties
### Properties
* **sites**: [DirectLineSite](#directlinesite)[]

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
* **properties**: [DirectLineSpeechChannelProperties](#directlinespeechchannelproperties)

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
* **properties**: [EmailChannelProperties](#emailchannelproperties)

## EmailChannelProperties
### Properties
* **emailAddress**: string (Required)
* **isEnabled**: bool (Required)
* **password**: string

## FacebookChannel
### Properties
* **channelName**: 'FacebookChannel' (Required)
* **properties**: [FacebookChannelProperties](#facebookchannelproperties)

## FacebookChannelProperties
### Properties
* **appId**: string (Required)
* **appSecret**: string
* **callbackUrl**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **pages**: [FacebookPage](#facebookpage)[]
* **verifyToken**: string (ReadOnly)

## FacebookPage
### Properties
* **accessToken**: string
* **id**: string (Required)

## KikChannel
### Properties
* **channelName**: 'KikChannel' (Required)
* **properties**: [KikChannelProperties](#kikchannelproperties)

## KikChannelProperties
### Properties
* **apiKey**: string
* **isEnabled**: bool (Required)
* **isValidated**: bool
* **userName**: string (Required)

## LineChannel
### Properties
* **channelName**: 'LineChannel' (Required)
* **properties**: [LineChannelProperties](#linechannelproperties)

## LineChannelProperties
### Properties
* **callbackUrl**: string (ReadOnly)
* **isValidated**: bool (ReadOnly)
* **lineRegistrations**: [LineRegistration](#lineregistration)[] (Required)

## LineRegistration
### Properties
* **channelAccessToken**: string
* **channelSecret**: string
* **generatedId**: string (ReadOnly)

## MsTeamsChannel
### Properties
* **channelName**: 'MsTeamsChannel' (Required)
* **properties**: [MsTeamsChannelProperties](#msteamschannelproperties)

## MsTeamsChannelProperties
### Properties
* **callingWebHook**: string
* **enableCalling**: bool
* **isEnabled**: bool (Required)

## SkypeChannel
### Properties
* **channelName**: 'SkypeChannel' (Required)
* **properties**: [SkypeChannelProperties](#skypechannelproperties)

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
* **properties**: [SlackChannelProperties](#slackchannelproperties)

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
* **properties**: [SmsChannelProperties](#smschannelproperties)

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
* **properties**: [TelegramChannelProperties](#telegramchannelproperties)

## TelegramChannelProperties
### Properties
* **accessToken**: string
* **isEnabled**: bool (Required)
* **isValidated**: bool

## WebChatChannel
### Properties
* **channelName**: 'WebChatChannel' (Required)
* **properties**: [WebChatChannelProperties](#webchatchannelproperties)

## WebChatChannelProperties
### Properties
* **sites**: [WebChatSite](#webchatsite)[]
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
* **parameters**: [ConnectionSettingParameter](#connectionsettingparameter)[]
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

