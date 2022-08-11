# Microsoft.BotService @ 2017-12-01

## Resource Microsoft.BotService/botServices@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BotProperties](#botproperties): The set of properties specific to bot resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.BotService/botServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BotService/botServices/channels@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: 'DirectLineChannel' | 'EmailChannel' | 'FacebookChannel' | 'KikChannel' | 'MsTeamsChannel' | 'SkypeChannel' | 'SlackChannel' | 'SmsChannel' | 'TelegramChannel' | 'WebChatChannel' | string (Required, DeployTimeConstant): The resource name
* **properties**: [Channel](#channel): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.BotService/botServices/channels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BotService/botServices/Connections@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionSettingProperties](#connectionsettingproperties): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.BotService/botServices/Connections' (ReadOnly, DeployTimeConstant): The resource type

## Function listChannelWithKeys (Microsoft.BotService/botServices/channels@2017-12-01)
* **Resource**: Microsoft.BotService/botServices/channels
* **ApiVersion**: 2017-12-01
* **Output**: [BotChannel](#botchannel)

## Function listWithSecrets (Microsoft.BotService/botServices/Connections@2017-12-01)
* **Resource**: Microsoft.BotService/botServices/Connections
* **ApiVersion**: 2017-12-01
* **Output**: [ConnectionSetting](#connectionsetting)

## BotChannel
### Properties
* **etag**: string: Entity Tag
* **id**: string (ReadOnly): Specifies the resource ID.
* **kind**: 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [Channel](#channel): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): Specifies the type of the resource.

## BotProperties
### Properties
* **configuredChannels**: string[] (ReadOnly): Collection of channels for which the bot is configured
* **description**: string: The description of the bot
* **developerAppInsightKey**: string: The Application Insights key
* **developerAppInsightsApiKey**: string: The Application Insights Api Key
* **developerAppInsightsApplicationId**: string: The Application Insights App Id
* **displayName**: string (Required): The Name of the bot
* **enabledChannels**: string[] (ReadOnly): Collection of channels for which the bot is enabled
* **endpoint**: string (Required): The bot's endpoint
* **endpointVersion**: string (ReadOnly): The bot's endpoint version
* **iconUrl**: string: The Icon Url of the bot
* **luisAppIds**: string[]: Collection of LUIS App Ids
* **luisKey**: string: The LUIS Key
* **msaAppId**: string (Required): Microsoft App Id for the bot

## Channel
* **Discriminator**: channelName

### Base Properties

### DirectLineChannel
#### Properties
* **channelName**: 'DirectLineChannel' (Required): The channel name
* **properties**: [DirectLineChannelProperties](#directlinechannelproperties): The set of properties specific to Direct Line channel resource

### EmailChannel
#### Properties
* **channelName**: 'EmailChannel' (Required): The channel name
* **properties**: [EmailChannelProperties](#emailchannelproperties): The set of properties specific to email channel resource

### FacebookChannel
#### Properties
* **channelName**: 'FacebookChannel' (Required): The channel name
* **properties**: [FacebookChannelProperties](#facebookchannelproperties): The set of properties specific to bot facebook channel

### KikChannel
#### Properties
* **channelName**: 'KikChannel' (Required): The channel name
* **properties**: [KikChannelProperties](#kikchannelproperties): The set of properties specific to Kik channel resource

### MsTeamsChannel
#### Properties
* **channelName**: 'MsTeamsChannel' (Required): The channel name
* **properties**: [MsTeamsChannelProperties](#msteamschannelproperties): The set of properties specific to Microsoft Teams channel resource

### SkypeChannel
#### Properties
* **channelName**: 'SkypeChannel' (Required): The channel name
* **properties**: [SkypeChannelProperties](#skypechannelproperties): The set of properties specific to Skype channel resource

### SlackChannel
#### Properties
* **channelName**: 'SlackChannel' (Required): The channel name
* **properties**: [SlackChannelProperties](#slackchannelproperties): The set of properties specific to Slack channel resource

### SmsChannel
#### Properties
* **channelName**: 'SmsChannel' (Required): The channel name
* **properties**: [SmsChannelProperties](#smschannelproperties): The set of properties specific to Sms channel resource

### TelegramChannel
#### Properties
* **channelName**: 'TelegramChannel' (Required): The channel name
* **properties**: [TelegramChannelProperties](#telegramchannelproperties): The set of properties specific to Telegram channel resource

### WebChatChannel
#### Properties
* **channelName**: 'WebChatChannel' (Required): The channel name
* **properties**: [WebChatChannelProperties](#webchatchannelproperties): The set of properties specific to Web Chat channel resource


## ConnectionSetting
### Properties
* **etag**: string: Entity Tag
* **id**: string (ReadOnly): Specifies the resource ID.
* **kind**: 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [ConnectionSettingProperties](#connectionsettingproperties): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): Specifies the type of the resource.

## ConnectionSettingParameter
### Properties
* **key**: string: Key for the Connection Setting Parameter.
* **value**: string: Value associated with the Connection Setting Parameter.

## ConnectionSettingProperties
### Properties
* **clientId**: string: Client Id associated with the Connection Setting.
* **clientSecret**: string: Client Secret associated with the Connection Setting
* **parameters**: [ConnectionSettingParameter](#connectionsettingparameter)[]: Service Provider Parameters associated with the Connection Setting
* **scopes**: string: Scopes associated with the Connection Setting
* **serviceProviderDisplayName**: string: Service Provider Display Name associated with the Connection Setting
* **serviceProviderId**: string: Service Provider Id associated with the Connection Setting
* **settingId**: string (ReadOnly): Setting Id set by the service for the Connection Setting.

## DirectLineChannelProperties
### Properties
* **sites**: [DirectLineSite](#directlinesite)[]: The list of Direct Line sites

## DirectLineSite
### Properties
* **isEnabled**: bool (Required): Whether this site is enabled for DirectLine channel
* **isV1Enabled**: bool (Required): Whether this site is enabled for Bot Framework V1 protocol
* **isV3Enabled**: bool (Required): Whether this site is enabled for Bot Framework V1 protocol
* **key**: string (ReadOnly): Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **key2**: string (ReadOnly): Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **siteId**: string (ReadOnly): Site Id
* **siteName**: string (Required): Site name

## EmailChannelProperties
### Properties
* **emailAddress**: string (Required): The email address
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **password**: string (Required): The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty.

## FacebookChannelProperties
### Properties
* **appId**: string (Required): Facebook application id
* **appSecret**: string (Required): Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty.
* **callbackUrl**: string (ReadOnly): Callback Url
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **pages**: [FacebookPage](#facebookpage)[]: The list of Facebook pages
* **verifyToken**: string (ReadOnly): Verify token. Value only returned through POST to the action Channel List API, otherwise empty.

## FacebookPage
### Properties
* **accessToken**: string (Required): Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty.
* **id**: string (Required): Page id

## KikChannelProperties
### Properties
* **apiKey**: string (Required): Kik API key. Value only returned through POST to the action Channel List API, otherwise empty.
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **isValidated**: bool: Whether this channel is validated for the bot
* **userName**: string (Required): The Kik user name

## MsTeamsChannelProperties
### Properties
* **callMode**: string: Enable messaging for Microsoft Teams channel
* **enableCalling**: bool: Enable calling for Microsoft Teams channel
* **enableMediaCards**: bool: Enable media cards for Microsoft Teams channel
* **enableMessaging**: bool: Enable messaging for Microsoft Teams channel
* **enableVideo**: bool: Enable video for Microsoft Teams channel
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: 'F0' | 'S1' | string (Required): The sku name
* **tier**: 'Free' | 'Standard' | string (ReadOnly): Gets the sku tier. This is based on the SKU name.

## SkypeChannelProperties
### Properties
* **callingWebHook**: string: Calling web hook for Skype channel
* **enableCalling**: bool: Enable calling for Skype channel
* **enableGroups**: bool: Enable groups for Skype channel
* **enableMediaCards**: bool: Enable media cards for Skype channel
* **enableMessaging**: bool: Enable messaging for Skype channel
* **enableScreenSharing**: bool: Enable screen sharing for Skype channel
* **enableVideo**: bool: Enable video for Skype channel
* **groupsMode**: string: Group mode for Skype channel
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot

## SlackChannelProperties
### Properties
* **clientId**: string (Required): The Slack client id
* **clientSecret**: string (Required): The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty.
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **isValidated**: bool (ReadOnly): Whether this channel is validated for the bot
* **landingPageUrl**: string: The Slack landing page Url
* **lastSubmissionId**: string (ReadOnly): The Sms auth token
* **redirectAction**: string (ReadOnly): The Slack redirect action
* **registerBeforeOAuthFlow**: bool (ReadOnly): Whether to register the settings before OAuth validation is performed. Recommended to True.
* **verificationToken**: string (Required): The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty.

## SmsChannelProperties
### Properties
* **accountSID**: string (Required): The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty.
* **authToken**: string (Required): The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty.
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **isValidated**: bool: Whether this channel is validated for the bot
* **phone**: string (Required): The Sms phone

## TelegramChannelProperties
### Properties
* **accessToken**: string (Required): The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty.
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **isValidated**: bool: Whether this channel is validated for the bot

## WebChatChannelProperties
### Properties
* **sites**: [WebChatSite](#webchatsite)[]: The list of Web Chat sites
* **webChatEmbedCode**: string (ReadOnly): Web chat control embed code

## WebChatSite
### Properties
* **enablePreview**: bool (Required): Whether this site is enabled for preview versions of Webchat
* **isEnabled**: bool (Required): Whether this site is enabled for DirectLine channel
* **key**: string (ReadOnly): Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **key2**: string (ReadOnly): Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **siteId**: string (ReadOnly): Site Id
* **siteName**: string (Required): Site name

