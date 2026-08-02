# Microsoft.BotService @ 2023-09-15-preview

## Resource Microsoft.BotService/botServices@2023-09-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity Tag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BotProperties](#botproperties): The set of properties specific to bot resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [BotTags](#bottags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.BotService/botServices' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): Entity zones

## Resource Microsoft.BotService/botServices/channels@2023-09-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity Tag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: 'AcsChatChannel' | 'AlexaChannel' | 'DirectLineChannel' | 'DirectLineSpeechChannel' | 'EmailChannel' | 'FacebookChannel' | 'KikChannel' | 'LineChannel' | 'M365Extensions' | 'MsTeamsChannel' | 'Omnichannel' | 'OutlookChannel' | 'SearchAssistant' | 'SkypeChannel' | 'SlackChannel' | 'SmsChannel' | 'TelegramChannel' | 'TelephonyChannel' | 'WebChatChannel' | string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [Channel](#channel): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [BotChannelTags](#botchanneltags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.BotService/botServices/channels' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): Entity zones

## Resource Microsoft.BotService/botServices/connections@2023-09-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity Tag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][\sa-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionSettingProperties](#connectionsettingproperties): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ConnectionSettingTags](#connectionsettingtags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.BotService/botServices/connections' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): Entity zones

## Resource Microsoft.BotService/botServices/networkSecurityPerimeterConfigurations@2023-09-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Properties of the Network Security Perimeter configuration
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BotService/botServices/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BotService/botServices/privateEndpointConnections@2023-09-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BotService/botServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function createEmailSignInUrl (Microsoft.BotService/botServices@2023-09-15-preview)
* **Resource**: Microsoft.BotService/botServices
* **ApiVersion**: 2023-09-15-preview
* **Output**: [CreateEmailSignInUrlResponse](#createemailsigninurlresponse)

## Function listChannelWithKeys (Microsoft.BotService/botServices/channels@2023-09-15-preview)
* **Resource**: Microsoft.BotService/botServices/channels
* **ApiVersion**: 2023-09-15-preview
* **Output**: [ListChannelWithKeysResponse](#listchannelwithkeysresponse)

## Function listWithSecrets (Microsoft.BotService/botServices/connections@2023-09-15-preview)
* **Resource**: Microsoft.BotService/botServices/connections
* **ApiVersion**: 2023-09-15-preview
* **Output**: [ConnectionSetting](#connectionsetting)

## Function reconcile (Microsoft.BotService/botServices/networkSecurityPerimeterConfigurations@2023-09-15-preview)
* **Resource**: Microsoft.BotService/botServices/networkSecurityPerimeterConfigurations
* **ApiVersion**: 2023-09-15-preview
* **Output**: [NetworkSecurityPerimeterConfiguration](#networksecurityperimeterconfiguration)

## Function regeneratekeys (Microsoft.BotService/botServices/channels@2023-09-15-preview)
* **Resource**: Microsoft.BotService/botServices/channels
* **ApiVersion**: 2023-09-15-preview
* **Input**: [SiteInfo](#siteinfo)
* **Output**: [BotChannel](#botchannel)

## AlexaChannelProperties
### Properties
* **alexaSkillId**: string (Required): The Alexa skill Id
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot
* **serviceEndpointUri**: string (ReadOnly): Full Uri used to configured the skill in Alexa
* **urlFragment**: string (ReadOnly): Url fragment used in part of the Uri configured in Alexa

## BotChannel
### Properties
* **etag**: string: Entity Tag.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [Channel](#channel): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [BotChannelTags](#botchanneltags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
* **zones**: string[] (ReadOnly): Entity zones

## BotChannelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BotChannelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BotChannelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **networkSecurityPerimeterConfigurations**: [NetworkSecurityPerimeterConfiguration](#networksecurityperimeterconfiguration)[] (ReadOnly): List of Network Security Perimeter configurations for the bot
* **openWithHint**: string: The hint to browser (e.g. protocol handler) on how to open the bot for authoring
* **parameters**: [BotPropertiesParameters](#botpropertiesparameters): Contains resource parameters defined as key/value pairs.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of Private Endpoint Connections configured for the bot
* **provisioningState**: string (ReadOnly): Provisioning state of the resource
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: Whether the bot is in an isolated network
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

## BotTags
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
* **etag**: string: Entity Tag.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ConnectionSettingProperties](#connectionsettingproperties): The set of properties specific to bot channel resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ConnectionSettingTags](#connectionsettingtags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
* **zones**: string[] (ReadOnly): Entity zones

## ConnectionSettingParameter
### Properties
* **key**: string: Key for the Connection Setting Parameter.
* **value**: string: Value associated with the Connection Setting Parameter.

## ConnectionSettingProperties
### Properties
* **clientId**: string: Client Id associated with the Connection Setting.
* **clientSecret**: string {sensitive}: Client Secret associated with the Connection Setting
* **id**: string: Id of the Connection Setting.
* **name**: string: Name of the Connection Setting.
* **parameters**: [ConnectionSettingParameter](#connectionsettingparameter)[]: Service Provider Parameters associated with the Connection Setting
* **provisioningState**: string: Provisioning state of the resource
* **scopes**: string: Scopes associated with the Connection Setting
* **serviceProviderDisplayName**: string: Service Provider Display Name associated with the Connection Setting
* **serviceProviderId**: string: Service Provider Id associated with the Connection Setting
* **settingId**: string (ReadOnly): Setting Id set by the service for the Connection Setting.

## ConnectionSettingTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionSettingTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateEmailSignInUrlResponse
### Properties
* **id**: string (ReadOnly): Specifies the resource ID.
* **location**: string: Specifies the location of the resource.
* **properties**: [CreateEmailSignInUrlResponseProperties](#createemailsigninurlresponseproperties): The set of properties specific to sign in url

## CreateEmailSignInUrlResponseProperties
### Properties
* **url**: string: Sign in url.

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
* **etag**: string: Entity Tag.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **kind**: 'azurebot' | 'bot' | 'designer' | 'function' | 'sdk' | string: Required. Gets or sets the Kind of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [Channel](#channel): The set of properties specific to bot channel resource
* **provisioningState**: string: Provisioning state of the resource
* **resource**: [Channel](#channel): The set of properties specific to bot channel resource
* **setting**: [ChannelSettings](#channelsettings): Channel settings
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [BotChannelTags](#botchanneltags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
* **zones**: string[] (ReadOnly): Entity zones

## MsTeamsChannelProperties
### Properties
* **acceptedTerms**: bool: Whether this channel accepted terms
* **callingWebhook**: string: Webhook for Microsoft Teams channel calls
* **deploymentEnvironment**: string: Deployment environment for Microsoft Teams channel calls
* **enableCalling**: bool: Enable calling for Microsoft Teams channel
* **incomingCallRoute**: string: Webhook for Microsoft Teams channel calls
* **isEnabled**: bool (Required): Whether this channel is enabled for the bot

## NetworkSecurityPerimeter
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **location**: string: Location of the Network Security Perimeter
* **perimeterGuid**: string: Guid of the Network Security Perimeter

## NetworkSecurityPerimeterConfiguration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties): Properties of the Network Security Perimeter configuration
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## NetworkSecurityPerimeterConfigurationProperties
### Properties
* **networkSecurityPerimeter**: [NetworkSecurityPerimeter](#networksecurityperimeter) (ReadOnly): Information about Network Security Perimeter
* **profile**: [Profile](#profile) (ReadOnly): Information about profile
* **provisioningIssues**: [ProvisioningIssue](#provisioningissue)[]: List of Provisioning Issues if any
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string
* **resourceAssociation**: [ResourceAssociation](#resourceassociation) (ReadOnly): Information about resource association

## NspAccessRule
### Properties
* **name**: string: Name of the access rule
* **properties**: [NspAccessRuleProperties](#nspaccessruleproperties) (ReadOnly): Properties of Access Rule

## NspAccessRuleProperties
### Properties
* **addressPrefixes**: string[]: Address prefixes in the CIDR format for inbound rules
* **direction**: 'Inbound' | 'Outbound' | string: Direction of Access Rule
* **emailAddresses**: string[] (ReadOnly): Email addresses for outbound rules
* **fullyQualifiedDomainNames**: string[] (ReadOnly): FQDN for outbound rules
* **networkSecurityPerimeters**: [NetworkSecurityPerimeter](#networksecurityperimeter)[] (ReadOnly): NetworkSecurityPerimeters for inbound rules
* **phoneNumbers**: string[] (ReadOnly): Phone numbers for outbound rules
* **subscriptions**: [NspAccessRulePropertiesSubscriptionsItem](#nspaccessrulepropertiessubscriptionsitem)[]: Subscriptions for inbound rules

## NspAccessRulePropertiesSubscriptionsItem
### Properties
* **id**: string: Fully qualified identifier of subscription

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: Group ids
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## Profile
### Properties
* **accessRules**: [NspAccessRule](#nspaccessrule)[]: List of Access Rules
* **accessRulesVersion**: int: Current access rules version
* **diagnosticSettingsVersion**: int: Current diagnostic settings version
* **enabledLogCategories**: string[] (ReadOnly): List of log categories
* **name**: string: Name of the profile

## ProvisioningIssue
### Properties
* **name**: string: Name of the issue
* **properties**: [ProvisioningIssueProperties](#provisioningissueproperties) (ReadOnly): Properties of Provisioning Issue

## ProvisioningIssueProperties
### Properties
* **description**: string: Description of the issue
* **issueType**: string: Type of Issue
* **severity**: 'Error' | 'Warning' | string: Provisioning state of Network Security Perimeter configuration propagation
* **suggestedAccessRules**: [NspAccessRule](#nspaccessrule)[]: Access rules that can be added to the same profile to remediate the issue.
* **suggestedResourceIds**: string[] (ReadOnly): ARM IDs of resources that can be associated to the same perimeter to remediate the issue.

## ResourceAssociation
### Properties
* **accessMode**: 'Audit' | 'Enforced' | 'Learning' | string: Access Mode of the resource association
* **name**: string: Name of the resource association

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

## SiteInfo
### Properties
* **key**: 'key1' | 'key2' (Required): Determines which key is to be regenerated
* **siteName**: string (Required): The site name

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
* **registerBeforeOAuthFlow**: bool: Whether to register the settings before OAuth validation is performed. Recommended to True.
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

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

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

