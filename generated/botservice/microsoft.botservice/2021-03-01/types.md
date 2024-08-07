# Microsoft.BotService @ 2021-03-01

## Resource Microsoft.BotService/botServices@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BotProperties](#botproperties): The set of properties specific to bot resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.BotService/botServices' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): Entity zones

## Resource Microsoft.BotService/botServices/channels@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: 'AcsChatChannel' | 'AlexaChannel' | 'DirectLineChannel' | 'DirectLineSpeechChannel' | 'EmailChannel' | 'FacebookChannel' | 'KikChannel' | 'LineChannel' | 'M365Extensions' | 'MsTeamsChannel' | 'Omnichannel' | 'OutlookChannel' | 'SearchAssistant' | 'SkypeChannel' | 'SlackChannel' | 'SmsChannel' | 'TelegramChannel' | 'TelephonyChannel' | 'WebChatChannel' | string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [Channel](#channel): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.BotService/botServices/channels' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): Entity zones

## Resource Microsoft.BotService/botServices/connections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][\sa-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionSettingProperties](#connectionsettingproperties): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.BotService/botServices/connections' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): Entity zones

## Function listChannelWithKeys (Microsoft.BotService/botServices/channels@2021-03-01)
* **Resource**: Microsoft.BotService/botServices/channels
* **ApiVersion**: 2021-03-01
* **Output**: [ListChannelWithKeysResponse](#listchannelwithkeysresponse)

## Function listWithSecrets (Microsoft.BotService/botServices/connections@2021-03-01)
* **Resource**: Microsoft.BotService/botServices/connections
* **ApiVersion**: 2021-03-01
* **Output**: [ConnectionSetting](#connectionsetting)

## AlexaChannelProperties
### Properties
* **alexaSkillId**: string (Required): The Alexa skill Id
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **serviceEndpointUri**: string (ReadOnly): Full Uri used to configured the skill in Alexa
* **urlFragment**: string (ReadOnly): Url fragment used in part of the Uri configured in Alexa

## BotProperties
### Properties
* **allSettings**: [BotPropertiesAllSettings](#botpropertiesallsettings): Contains resource all settings defined as key/value pairs.
* **appPasswordHint**: string: The hint (e.g. keyVault secret resourceId) on how to fetch the app secret
* **cmekEncryptionStatus**: string (ReadOnly): The CMK encryption status
* **cmekKeyVaultUrl**: string: The CMK Url
* **configuredChannels**: string[] (ReadOnly): Collection of channels for which the bot is configured
* **description**: string: The description of the bot
* **developerAppInsightKey**: string: The Application Insights key
* **developerAppInsightsApiKey**: string: The Application Insights Api Key
* **developerAppInsightsApplicationId**: string: The Application Insights App Id
* **disableLocalAuth**: bool: Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
* **displayName**: string (Required): The Name of the bot
* **enabledChannels**: string[] (ReadOnly): Collection of channels for which the bot is enabled
* **endpoint**: string (Required): The bot's endpoint
* **endpointVersion**: string (ReadOnly): The bot's endpoint version
* **iconUrl**: string: The Icon Url of the bot
* **isCmekEnabled**: bool: Whether Cmek is enabled
* **isDeveloperAppInsightsApiKeySet**: bool (ReadOnly): Whether the bot is developerAppInsightsApiKey set
* **isStreamingSupported**: bool: Whether the bot is streaming supported
* **luisAppIds**: string[]: Collection of LUIS App Ids
* **luisKey**: string: The LUIS Key
* **manifestUrl**: string: The bot's manifest url
* **migrationToken**: string (ReadOnly): Token used to migrate non Azure bot to azure subscription
* **msaAppId**: string (Required): Microsoft App Id for the bot
* **msaAppMSIResourceId**: string: Microsoft App Managed Identity Resource Id for the bot
* **msaAppTenantId**: string: Microsoft App Tenant Id for the bot
* **msaAppType**: 'MultiTenant' | 'SingleTenant' | 'UserAssignedMSI' | string: Microsoft App Type for the bot
* **openWithHint**: string: The hint to browser (e.g. protocol handler) on how to open the bot for authoring
* **parameters**: [BotPropertiesParameters](#botpropertiesparameters): Contains resource parameters defined as key/value pairs.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether the bot is in an isolated network
* **publishingCredentials**: string: Publishing credentials of the resource
* **schemaTransformationVersion**: string: The channel schema transformation version for the bot
* **storageResourceId**: string: The storage resourceId for the bot
* **tenantId**: string: The Tenant Id for the bot

## BotPropertiesAllSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BotPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Channel
* **Discriminator**: channelName

### Base Properties
* **etag**: string: Entity Tag of the resource
* **location**: string: Specifies the location of the resource.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource

### AcsChatChannel
#### Properties
* **channelName**: 'AcsChatChannel' (Required): The channel name

### AlexaChannel
#### Properties
* **channelName**: 'AlexaChannel' (Required): The channel name
* **properties**: [AlexaChannelProperties](#alexachannelproperties): The set of properties specific to Alexa channel resource

### DirectLineChannel
#### Properties
* **channelName**: 'DirectLineChannel' (Required): The channel name
* **properties**: [DirectLineChannelProperties](#directlinechannelproperties): The set of properties specific to Direct Line channel resource

### DirectLineSpeechChannel
#### Properties
* **channelName**: 'DirectLineSpeechChannel' (Required): The channel name
* **properties**: [DirectLineSpeechChannelProperties](#directlinespeechchannelproperties): The set of properties specific to DirectLine Speech channel resource

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

### LineChannel
#### Properties
* **channelName**: 'LineChannel' (Required): The channel name
* **properties**: [LineChannelProperties](#linechannelproperties): The set of properties specific to line channel resource

### M365Extensions
#### Properties
* **channelName**: 'M365Extensions' (Required): The channel name

### MsTeamsChannel
#### Properties
* **channelName**: 'MsTeamsChannel' (Required): The channel name
* **properties**: [MsTeamsChannelProperties](#msteamschannelproperties): The set of properties specific to Microsoft Teams channel resource

### Omnichannel
#### Properties
* **channelName**: 'Omnichannel' (Required): The channel name

### OutlookChannel
#### Properties
* **channelName**: 'OutlookChannel' (Required): The channel name

### SearchAssistant
#### Properties
* **channelName**: 'SearchAssistant' (Required): The channel name

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

### TelephonyChannel
#### Properties
* **channelName**: 'TelephonyChannel' (Required): The channel name
* **properties**: [TelephonyChannelProperties](#telephonychannelproperties): The set of properties specific to Telephony channel resource

### WebChatChannel
#### Properties
* **channelName**: 'WebChatChannel' (Required): The channel name
* **properties**: [WebChatChannelProperties](#webchatchannelproperties): The set of properties specific to Web Chat channel resource


## ChannelSettings
### Properties
* **botIconUrl**: string: The bot icon url
* **botId**: string: The bot id
* **channelDisplayName**: string: The channel display name
* **channelId**: string: The channel id
* **disableLocalAuth**: bool: Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
* **extensionKey1**: string: The extensionKey1
* **extensionKey2**: string: The extensionKey2
* **isEnabled**: bool: Whether this channel is enabled for the bot
* **requireTermsAgreement**: bool: Whether customer needs to agree to new terms.
* **sites**: [Site](#site)[]: The list of sites

## ConnectionSetting
### Properties
* **etag**: string: Entity Tag
* **id**: string (ReadOnly): Specifies the resource ID.
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [ConnectionSettingProperties](#connectionsettingproperties): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): Specifies the type of the resource.
* **zones**: string[] (ReadOnly): Entity zones

## ConnectionSettingParameter
### Properties
* **key**: string: Key for the Connection Setting Parameter.
* **value**: string: Value associated with the Connection Setting Parameter.

## ConnectionSettingProperties
### Properties
* **clientId**: string: Client Id associated with the Connection Setting.
* **clientSecret**: string {sensitive}: Client Secret associated with the Connection Setting
* **parameters**: [ConnectionSettingParameter](#connectionsettingparameter)[]: Service Provider Parameters associated with the Connection Setting
* **provisioningState**: string: Provisioning state of the resource
* **scopes**: string: Scopes associated with the Connection Setting
* **serviceProviderDisplayName**: string: Service Provider Display Name associated with the Connection Setting
* **serviceProviderId**: string: Service Provider Id associated with the Connection Setting
* **settingId**: string (ReadOnly): Setting Id set by the service for the Connection Setting.

## DirectLineChannelProperties
### Properties
* **DirectLineEmbedCode**: string: Direct Line embed code of the resource
* **extensionKey1**: string: The extensionKey1
* **extensionKey2**: string: The extensionKey2
* **sites**: [DirectLineSite](#directlinesite)[]: The list of Direct Line sites

## DirectLineSite
### Properties
* **appId**: string: DirectLine application id
* **eTag**: string: Entity Tag
* **isBlockUserUploadEnabled**: bool: Whether this site is enabled for block user upload.
* **isDetailedLoggingEnabled**: bool: Whether this site is disabled detailed logging for
* **isEnabled**: bool (Required): Whether this site is enabled for DirectLine channel
* **isEndpointParametersEnabled**: bool: Whether this site is EndpointParameters enabled for channel
* **isNoStorageEnabled**: bool: Whether this no-storage site is disabled detailed logging for
* **isSecureSiteEnabled**: bool: Whether this site is enabled for authentication with Bot Framework.
* **isTokenEnabled**: bool (ReadOnly): Whether this site is token enabled for channel
* **isV1Enabled**: bool: Whether this site is enabled for Bot Framework V1 protocol.
* **isV3Enabled**: bool: Whether this site is enabled for Bot Framework V3 protocol.
* **isWebchatPreviewEnabled**: bool: Whether this site is enabled for preview versions of Webchat
* **isWebChatSpeechEnabled**: bool: Whether this site is enabled for Webchat Speech
* **key**: string (ReadOnly): Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **key2**: string (ReadOnly): Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **siteId**: string (ReadOnly): Site Id
* **siteName**: string (Required): Site name
* **tenantId**: string: Tenant Id
* **trustedOrigins**: string[]: List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.

## DirectLineSpeechChannelProperties
### Properties
* **cognitiveServiceRegion**: string: The cognitive service region with this channel registration.
* **cognitiveServiceResourceId**: string: The cognitive service id with this channel registration.
* **cognitiveServiceSubscriptionKey**: string {sensitive}: The cognitive service subscription key to use with this channel registration.
* **customSpeechModelId**: string: Custom voice deployment id (optional).
* **customVoiceDeploymentId**: string: Custom speech model id (optional).
* **isDefaultBotForCogSvcAccount**: bool: Make this a default bot for chosen cognitive service account.
* **isEnabled**: bool: Whether this channel is enabled or not.

## EmailChannelProperties
### Properties
* **authMethod**: int: Email channel auth method. 0 Password (Default); 1 Graph.
* **emailAddress**: string (Required): The email address
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **magicCode**: string: The magic code for setting up the modern authentication.
* **password**: string: The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty.

## FacebookChannelProperties
### Properties
* **appId**: string (Required): Facebook application id
* **appSecret**: string {sensitive}: Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty.
* **callbackUrl**: string (ReadOnly): Callback Url
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **pages**: [FacebookPage](#facebookpage)[]: The list of Facebook pages
* **verifyToken**: string {sensitive} (ReadOnly): Verify token. Value only returned through POST to the action Channel List API, otherwise empty.

## FacebookPage
### Properties
* **accessToken**: string {sensitive}: Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty.
* **id**: string (Required): Page id

## KikChannelProperties
### Properties
* **apiKey**: string: Kik API key. Value only returned through POST to the action Channel List API, otherwise empty.
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **isValidated**: bool: Whether this channel is validated for the bot
* **userName**: string (Required): The Kik user name

## LineChannelProperties
### Properties
* **callbackUrl**: string (ReadOnly): Callback Url to enter in line registration.
* **isValidated**: bool (ReadOnly): Whether this channel is validated for the bot
* **lineRegistrations**: [LineRegistration](#lineregistration)[] (Required): The list of line channel registrations

## LineRegistration
### Properties
* **channelAccessToken**: string {sensitive}: Access token for the line channel registration
* **channelSecret**: string {sensitive}: Secret for the line channel registration
* **generatedId**: string (ReadOnly): Id generated for the line channel registration

## ListChannelWithKeysResponse
### Properties
* **changedTime**: string: Changed time of the resource
* **entityTag**: string: Entity tag of the resource
* **etag**: string: Entity Tag
* **id**: string (ReadOnly): Specifies the resource ID.
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [Channel](#channel): The set of properties specific to bot channel resource
* **provisioningState**: string: Provisioning state of the resource
* **resource**: [Channel](#channel): The set of properties specific to bot channel resource
* **setting**: [ChannelSettings](#channelsettings): Channel settings
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): Specifies the type of the resource.
* **zones**: string[] (ReadOnly): Entity zones

## MsTeamsChannelProperties
### Properties
* **acceptedTerms**: bool: Whether this channel accepted terms
* **callingWebhook**: string: Webhook for Microsoft Teams channel calls
* **deploymentEnvironment**: string: Deployment environment for Microsoft Teams channel calls
* **enableCalling**: bool: Enable calling for Microsoft Teams channel
* **incomingCallRoute**: string: Webhook for Microsoft Teams channel calls
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

## Site
### Properties
* **appId**: string: DirectLine application id
* **eTag**: string: Entity Tag
* **isBlockUserUploadEnabled**: bool: Whether this site is enabled for block user upload.
* **isDetailedLoggingEnabled**: bool: Whether this site is disabled detailed logging for
* **isEnabled**: bool (Required): Whether this site is enabled for DirectLine channel
* **isEndpointParametersEnabled**: bool: Whether this site is EndpointParameters enabled for channel
* **isNoStorageEnabled**: bool: Whether this no-storage site is disabled detailed logging for
* **isSecureSiteEnabled**: bool: Whether this site is enabled for authentication with Bot Framework.
* **isTokenEnabled**: bool (ReadOnly): Whether this site is token enabled for channel
* **isV1Enabled**: bool: Whether this site is enabled for Bot Framework V1 protocol.
* **isV3Enabled**: bool: Whether this site is enabled for Bot Framework V3 protocol.
* **isWebchatPreviewEnabled**: bool: Whether this site is enabled for preview versions of Webchat
* **isWebChatSpeechEnabled**: bool: Whether this site is enabled for Webchat Speech
* **key**: string (ReadOnly): Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **key2**: string (ReadOnly): Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **siteId**: string (ReadOnly): Site Id
* **siteName**: string (Required): Site name
* **tenantId**: string: Tenant Id
* **trustedOrigins**: string[]: List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.

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
* **incomingCallRoute**: string: Incoming call route for Skype channel
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot

## SlackChannelProperties
### Properties
* **clientId**: string: The Slack client id
* **clientSecret**: string {sensitive}: The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty.
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **IsValidated**: bool (ReadOnly): Whether this channel is validated for the bot
* **landingPageUrl**: string: The Slack landing page Url
* **lastSubmissionId**: string (ReadOnly): The Sms auth token
* **redirectAction**: string (ReadOnly): The Slack redirect action
* **registerBeforeOAuthFlow**: bool (ReadOnly): Whether to register the settings before OAuth validation is performed. Recommended to True.
* **scopes**: string: The Slack permission scopes.
* **signingSecret**: string {sensitive}: The Slack signing secret.
* **verificationToken**: string {sensitive}: The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty.

## SmsChannelProperties
### Properties
* **accountSID**: string (Required): The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty.
* **authToken**: string {sensitive}: The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty.
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **isValidated**: bool: Whether this channel is validated for the bot
* **phone**: string (Required): The Sms phone

## TelegramChannelProperties
### Properties
* **accessToken**: string {sensitive}: The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty.
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **isValidated**: bool: Whether this channel is validated for the bot

## TelephonyChannelProperties
### Properties
* **apiConfigurations**: [TelephonyChannelResourceApiConfiguration](#telephonychannelresourceapiconfiguration)[]: The list of Telephony api configuration
* **cognitiveServiceRegion**: string: The extensionKey2
* **cognitiveServiceSubscriptionKey**: string: The extensionKey1
* **defaultLocale**: string: The default locale of the channel
* **isEnabled**: bool: Whether the channel is enabled
* **phoneNumbers**: [TelephonyPhoneNumbers](#telephonyphonenumbers)[]: The list of Telephony phone numbers
* **premiumSKU**: string: The premium SKU applied to the channel

## TelephonyChannelResourceApiConfiguration
### Properties
* **cognitiveServiceRegion**: string: The cognitive service region.
* **cognitiveServiceResourceId**: string: The cognitive service resourceId.
* **cognitiveServiceSubscriptionKey**: string: The cognitive service subscription key.
* **defaultLocale**: string: The default locale.
* **id**: string: The id of config.
* **providerName**: string: The provider name.

## TelephonyPhoneNumbers
### Properties
* **acsEndpoint**: string: The endpoint of ACS.
* **acsResourceId**: string: The resource id of ACS.
* **acsSecret**: string: The secret of ACS.
* **cognitiveServiceRegion**: string: The service region of cognitive service.
* **cognitiveServiceResourceId**: string: The resource id of cognitive service.
* **cognitiveServiceSubscriptionKey**: string: The subscription key of cognitive service.
* **defaultLocale**: string: The default locale of the phone number.
* **id**: string: The element id.
* **offerType**: string: Optional Property that will determine the offering type of the phone.
* **phoneNumber**: string: The phone number.

## WebChatChannelProperties
### Properties
* **sites**: [WebChatSite](#webchatsite)[]: The list of Web Chat sites
* **webChatEmbedCode**: string (ReadOnly): Web chat control embed code

## WebChatSite
### Properties
* **appId**: string: DirectLine application id
* **eTag**: string: Entity Tag
* **isBlockUserUploadEnabled**: bool: Whether this site is enabled for block user upload.
* **isDetailedLoggingEnabled**: bool: Whether this site is disabled detailed logging for
* **isEnabled**: bool (Required): Whether this site is enabled for DirectLine channel
* **isEndpointParametersEnabled**: bool: Whether this site is EndpointParameters enabled for channel
* **isNoStorageEnabled**: bool: Whether this no-storage site is disabled detailed logging for
* **isSecureSiteEnabled**: bool: Whether this site is enabled for authentication with Bot Framework.
* **isTokenEnabled**: bool (ReadOnly): Whether this site is token enabled for channel
* **isV1Enabled**: bool: Whether this site is enabled for Bot Framework V1 protocol.
* **isV3Enabled**: bool: Whether this site is enabled for Bot Framework V3 protocol.
* **isWebchatPreviewEnabled**: bool: Whether this site is enabled for preview versions of Webchat
* **isWebChatSpeechEnabled**: bool: Whether this site is enabled for Webchat Speech
* **key**: string (ReadOnly): Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **key2**: string (ReadOnly): Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
* **siteId**: string (ReadOnly): Site Id
* **siteName**: string (Required): Site name
* **tenantId**: string: Tenant Id
* **trustedOrigins**: string[]: List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.

