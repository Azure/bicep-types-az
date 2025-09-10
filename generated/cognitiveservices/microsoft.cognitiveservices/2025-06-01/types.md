# Microsoft.CognitiveServices @ 2025-06-01

## Resource Microsoft.CognitiveServices/accounts@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **kind**: string: The Kind of the resource.
* **location**: string: The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): Properties of Cognitive Services account.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [AccountTags](#accounttags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/capabilityHosts@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityHostProperties](#capabilityhostproperties) (Required): [Required] Additional attributes of the entity.
* **type**: 'Microsoft.CognitiveServices/accounts/capabilityHosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/commitmentPlans@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The Kind of the resource.
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommitmentPlanProperties](#commitmentplanproperties): Properties of Cognitive Services account commitment plan.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [CommitmentPlanTags](#commitmentplantags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/accounts/commitmentPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/connections@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{2,32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionPropertiesV2](#connectionpropertiesv2) (Required): Connection property base schema.
* **type**: 'Microsoft.CognitiveServices/accounts/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/defenderForAISettings@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DefenderForAISettingProperties](#defenderforaisettingproperties): The Defender for AI resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DefenderForAISettingTags](#defenderforaisettingtags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/accounts/defenderForAISettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/deployments@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Properties of Cognitive Services account deployment.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DeploymentTags](#deploymenttags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/accounts/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/encryptionScopes@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionScopeProperties](#encryptionscopeproperties): Properties of Cognitive Services EncryptionScope.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [EncryptionScopeTags](#encryptionscopetags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/accounts/encryptionScopes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/networkSecurityPerimeterConfigurations@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): NSP Configuration properties.
* **type**: 'Microsoft.CognitiveServices/accounts/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/privateEndpointConnections@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the private endpoint connection
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.CognitiveServices/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/projects@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Properties of Cognitive Services project.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ProjectTags](#projecttags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/accounts/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/projects/capabilityHosts@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityHostProperties](#capabilityhostproperties) (Required): [Required] Additional attributes of the entity.
* **type**: 'Microsoft.CognitiveServices/accounts/projects/capabilityHosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/projects/connections@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{2,32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionPropertiesV2](#connectionpropertiesv2) (Required): Connection property base schema.
* **type**: 'Microsoft.CognitiveServices/accounts/projects/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/raiBlocklists@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RaiBlocklistProperties](#raiblocklistproperties): Properties of Cognitive Services RaiBlocklist.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [RaiBlocklistTags](#raiblocklisttags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/accounts/raiBlocklists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/raiBlocklists/raiBlocklistItems@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RaiBlocklistItemProperties](#raiblocklistitemproperties): Properties of Cognitive Services RaiBlocklist Item.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [RaiBlocklistItemTags](#raiblocklistitemtags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/accounts/raiBlocklists/raiBlocklistItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/raiPolicies@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RaiPolicyProperties](#raipolicyproperties): Properties of Cognitive Services RaiPolicy.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [RaiPolicyTags](#raipolicytags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/accounts/raiPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/commitmentPlans@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The Kind of the resource.
* **location**: string: The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CommitmentPlanProperties](#commitmentplanproperties): Properties of Cognitive Services account commitment plan.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [CommitmentPlanTags](#commitmentplantags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/commitmentPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/commitmentPlans/accountAssociations@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CommitmentPlanAccountAssociationProperties](#commitmentplanaccountassociationproperties): Properties of Cognitive Services account commitment plan association.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [CommitmentPlanAccountAssociationTags](#commitmentplanaccountassociationtags): Resource tags.
* **type**: 'Microsoft.CognitiveServices/commitmentPlans/accountAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/locations/raiContentFilters@2025-06-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RaiContentFilterProperties](#raicontentfilterproperties) (ReadOnly): Azure OpenAI Content Filter Properties.
* **type**: 'Microsoft.CognitiveServices/locations/raiContentFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/locations/resourceGroups/deletedAccounts@2025-06-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): Identity for the resource.
* **kind**: string (ReadOnly): The Kind of the resource.
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties) (ReadOnly): Properties of Cognitive Services account.
* **sku**: [Sku](#sku) (ReadOnly): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [AccountTags](#accounttags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.CognitiveServices/locations/resourceGroups/deletedAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.CognitiveServices/accounts@2025-06-01)
* **Resource**: Microsoft.CognitiveServices/accounts
* **ApiVersion**: 2025-06-01
* **Output**: [ApiKeys](#apikeys)

## AbusePenalty
### Properties
* **action**: 'Block' | 'Throttle' | string: The action of AbusePenalty.
* **expiration**: string: The datetime of expiration of the AbusePenalty.
* **rateLimitPercentage**: int: The percentage of rate limit.

## AccountProperties
### Properties
* **abusePenalty**: [AbusePenalty](#abusepenalty) (ReadOnly): The abuse penalty.
* **allowedFqdnList**: string[]
* **allowProjectManagement**: bool: Specifies whether this resource support project management as child resources, used as containers for access management, data isolation and cost in AI Foundry.
* **amlWorkspace**: [UserOwnedAmlWorkspace](#userownedamlworkspace): The user owned AML account properties.
* **apiProperties**: [ApiProperties](#apiproperties): The api properties for special APIs.
* **associatedProjects**: string[]: Specifies the projects, by project name, that are associated with this resource.
* **callRateLimit**: [CallRateLimit](#callratelimit) (ReadOnly): The call rate limit Cognitive Services account.
* **capabilities**: [SkuCapability](#skucapability)[] (ReadOnly): Gets the capabilities of the cognitive services account. Each item indicates the capability of a specific feature. The values are read-only and for reference only.
* **commitmentPlanAssociations**: [CommitmentPlanAssociation](#commitmentplanassociation)[] (ReadOnly): The commitment plan associations of Cognitive Services account.
* **customSubDomainName**: string: Optional subdomain name used for token-based authentication.
* **dateCreated**: string (ReadOnly): Gets the date of cognitive services account creation.
* **defaultProject**: string: Specifies the project, by project name, that is targeted when data plane endpoints are called without a project parameter.
* **deletionDate**: string (ReadOnly): The deletion date, only available for deleted account.
* **disableLocalAuth**: bool
* **dynamicThrottlingEnabled**: bool: The flag to enable dynamic throttling.
* **encryption**: [Encryption](#encryption): The encryption properties for this resource.
* **endpoint**: string (ReadOnly): Endpoint of the created account.
* **endpoints**: [AccountPropertiesEndpoints](#accountpropertiesendpoints) (ReadOnly): Dictionary of <string>
* **internalId**: string (ReadOnly): The internal identifier (deprecated, do not use this property).
* **isMigrated**: bool (ReadOnly): If the resource is migrated from an existing key.
* **locations**: [MultiRegionSettings](#multiregionsettings): The multiregion settings of Cognitive Services account.
* **migrationToken**: string: Resource migration token.
* **networkAcls**: [NetworkRuleSet](#networkruleset): A collection of rules governing the accessibility from specific network locations.
* **networkInjections**: [NetworkInjections](#networkinjections): Specifies in AI Foundry where virtual network injection occurs to secure scenarios like Agents entirely within the user's private network, eliminating public internet exposure while maintaining control over network configurations and resources.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The private endpoint connection associated with the Cognitive Services account.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'ResolvingDNS' | 'Succeeded' | string (ReadOnly): Gets the status of the cognitive services account at the time the operation was called.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public endpoint access is allowed for this account.
* **quotaLimit**: [QuotaLimit](#quotalimit) (ReadOnly)
* **raiMonitorConfig**: [RaiMonitorConfig](#raimonitorconfig): Cognitive Services Rai Monitor Config.
* **restore**: bool (WriteOnly)
* **restrictOutboundNetworkAccess**: bool
* **scheduledPurgeDate**: string (ReadOnly): The scheduled purge date, only available for deleted account.
* **skuChangeInfo**: [SkuChangeInfo](#skuchangeinfo) (ReadOnly): Sku change info of account.
* **userOwnedStorage**: [UserOwnedStorage](#userownedstorage)[]: The storage accounts for this resource.

## AccountPropertiesEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccountTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccountTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiKeys
### Properties
* **key1**: string: Gets the value of key 1.
* **key2**: string: Gets the value of key 2.

## ApiProperties
### Properties
* **aadClientId**: string {maxLength: 500}: (Metrics Advisor Only) The Azure AD Client Id (Application Id).
* **aadTenantId**: string {maxLength: 500}: (Metrics Advisor Only) The Azure AD Tenant Id.
* **eventHubConnectionString**: string {maxLength: 1000, pattern: "^( *)Endpoint=sb://(.*);( *)SharedAccessKeyName=(.*);( *)SharedAccessKey=(.*)$"}: (Personalization Only) The flag to enable statistics of Bing Search.
* **qnaAzureSearchEndpointId**: string: (QnAMaker Only) The Azure Search endpoint id of QnAMaker.
* **qnaAzureSearchEndpointKey**: string: (QnAMaker Only) The Azure Search endpoint key of QnAMaker.
* **qnaRuntimeEndpoint**: string: (QnAMaker Only) The runtime endpoint of QnAMaker.
* **statisticsEnabled**: bool: (Bing Search Only) The flag to enable statistics of Bing Search.
* **storageAccountConnectionString**: string {maxLength: 1000, pattern: "^(( *)DefaultEndpointsProtocol=(http|https)( *);( *))?AccountName=(.*)AccountKey=(.*)EndpointSuffix=(.*)$"}: (Personalization Only) The storage account connection string.
* **superUser**: string {maxLength: 500}: (Metrics Advisor Only) The super user of Metrics Advisor.
* **websiteName**: string {maxLength: 500}: (Metrics Advisor Only) The website name of Metrics Advisor.
### Additional Properties
* **Additional Properties Type**: any

## CallRateLimit
### Properties
* **count**: int: The count value of Call Rate Limit.
* **renewalPeriod**: int: The renewal period in seconds of Call Rate Limit.
* **rules**: [ThrottlingRule](#throttlingrule)[]

## CapabilityHostProperties
### Properties
* **aiServicesConnections**: string[]: List of AI services connections.
* **capabilityHostKind**: 'Agents' | string: Kind of this capability host.
* **customerSubnet**: string: Customer subnet info to help set up this capability host.
* **description**: string: The asset description text.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the CapabilityHost.
* **storageConnections**: string[]: List of connection names from those available in the account or project to be used as a storage resource.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.
* **threadStorageConnections**: string[]: List of connection names from those available in the account or project to be used for Thread storage.
* **vectorStoreConnections**: string[]: List of connection names from those available in the account or project to be used for vector database (e.g. CosmosDB).

## CommitmentPeriod
### Properties
* **count**: int: Commitment period commitment count.
* **endDate**: string (ReadOnly): Commitment period end date.
* **quota**: [CommitmentQuota](#commitmentquota) (ReadOnly): Cognitive Services account commitment quota.
* **startDate**: string (ReadOnly): Commitment period start date.
* **tier**: string: Commitment period commitment tier.

## CommitmentPlanAccountAssociationProperties
### Properties
* **accountId**: string: The Azure resource id of the account.

## CommitmentPlanAccountAssociationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommitmentPlanAssociation
### Properties
* **commitmentPlanId**: string: The Azure resource id of the commitment plan.
* **commitmentPlanLocation**: string: The location of of the commitment plan.

## CommitmentPlanProperties
### Properties
* **autoRenew**: bool: AutoRenew commitment plan.
* **commitmentPlanGuid**: string: Commitment plan guid.
* **current**: [CommitmentPeriod](#commitmentperiod): Cognitive Services account commitment period.
* **hostingModel**: 'ConnectedContainer' | 'DisconnectedContainer' | 'ProvisionedWeb' | 'Web' | string: Account hosting model.
* **last**: [CommitmentPeriod](#commitmentperiod) (ReadOnly): Cognitive Services account commitment period.
* **next**: [CommitmentPeriod](#commitmentperiod): Cognitive Services account commitment period.
* **planType**: string: Commitment plan type.
* **provisioningIssues**: string[] (ReadOnly): The list of ProvisioningIssue.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Gets the status of the resource at the time the operation was called.

## CommitmentPlanTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommitmentPlanTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommitmentQuota
### Properties
* **quantity**: int: Commitment quota quantity.
* **unit**: string: Commitment quota unit.

## ConnectionAccessKey
### Properties
* **accessKeyId**: string
* **secretAccessKey**: string {sensitive}

## ConnectionAccountKey
### Properties
* **key**: string {sensitive}

## ConnectionApiKey
### Properties
* **key**: string {sensitive}

## ConnectionManagedIdentity
### Properties
* **clientId**: string
* **resourceId**: string

## ConnectionOAuth2
### Properties
* **authUrl**: string: Required by Concur connection category
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Client id in the format of UUID
* **clientSecret**: string {sensitive}
* **developerToken**: string {sensitive}: Required by GoogleAdWords connection category
* **password**: string {sensitive}
* **refreshToken**: string {sensitive}: Required by GoogleBigQuery, GoogleAdWords, Hubspot, QuickBooks, Square, Xero, Zoho
where user needs to get RefreshToken offline
* **tenantId**: string: Required by QuickBooks and Xero connection categories
* **username**: string: Concur, ServiceNow auth server AccessToken grant type is 'Password'
which requires UsernamePassword

## ConnectionPersonalAccessToken
### Properties
* **pat**: string {sensitive}

## ConnectionPropertiesV2
* **Discriminator**: authType

### Base Properties
* **category**: 'ADLSGen2' | 'AIServices' | 'AmazonMws' | 'AmazonRdsForOracle' | 'AmazonRdsForSqlServer' | 'AmazonRedshift' | 'AmazonS3Compatible' | 'ApiKey' | 'AzureBlob' | 'AzureDataExplorer' | 'AzureDatabricksDeltaLake' | 'AzureMariaDb' | 'AzureMySqlDb' | 'AzureOneLake' | 'AzureOpenAI' | 'AzurePostgresDb' | 'AzureSqlDb' | 'AzureSqlMi' | 'AzureSynapseAnalytics' | 'AzureTableStorage' | 'BingLLMSearch' | 'Cassandra' | 'CognitiveSearch' | 'CognitiveService' | 'Concur' | 'ContainerRegistry' | 'CosmosDb' | 'CosmosDbMongoDbApi' | 'Couchbase' | 'CustomKeys' | 'Db2' | 'Drill' | 'Dynamics' | 'DynamicsAx' | 'DynamicsCrm' | 'Elasticsearch' | 'Eloqua' | 'FileServer' | 'FtpServer' | 'GenericContainerRegistry' | 'GenericHttp' | 'GenericRest' | 'Git' | 'GoogleAdWords' | 'GoogleBigQuery' | 'GoogleCloudStorage' | 'Greenplum' | 'Hbase' | 'Hdfs' | 'Hive' | 'Hubspot' | 'Impala' | 'Informix' | 'Jira' | 'Magento' | 'ManagedOnlineEndpoint' | 'MariaDb' | 'Marketo' | 'MicrosoftAccess' | 'MongoDbAtlas' | 'MongoDbV2' | 'MySql' | 'Netezza' | 'ODataRest' | 'Odbc' | 'Office365' | 'OpenAI' | 'Oracle' | 'OracleCloudStorage' | 'OracleServiceCloud' | 'PayPal' | 'Phoenix' | 'Pinecone' | 'PostgreSql' | 'Presto' | 'PythonFeed' | 'QuickBooks' | 'Redis' | 'Responsys' | 'S3' | 'Salesforce' | 'SalesforceMarketingCloud' | 'SalesforceServiceCloud' | 'SapBw' | 'SapCloudForCustomer' | 'SapEcc' | 'SapHana' | 'SapOpenHub' | 'SapTable' | 'Serp' | 'Serverless' | 'ServiceNow' | 'Sftp' | 'SharePointOnlineList' | 'Shopify' | 'Snowflake' | 'Spark' | 'SqlServer' | 'Square' | 'Sybase' | 'Teradata' | 'Vertica' | 'WebTable' | 'Xero' | 'Zoho' | string: Category of the connection
* **createdByWorkspaceArmId**: string (ReadOnly)
* **error**: string: Provides the error message if the connection fails
* **expiryTime**: string
* **group**: 'Azure' | 'AzureAI' | 'Database' | 'File' | 'GenericProtocol' | 'NoSQL' | 'ServicesAndApps' | string (ReadOnly): Group based on connection category
* **isSharedToAll**: bool
* **metadata**: [ConnectionPropertiesV2Metadata](#connectionpropertiesv2metadata): Store user metadata for this connection
* **peRequirement**: 'NotApplicable' | 'NotRequired' | 'Required' | string: Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
* **peStatus**: 'Active' | 'Inactive' | 'NotApplicable' | string: Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
* **sharedUserList**: string[]
* **target**: string: The connection URL to be used.
* **useWorkspaceManagedIdentity**: bool

### AADAuthTypeConnectionProperties
#### Properties
* **authType**: 'AAD' (Required): Authentication type of the connection target

### AccessKeyAuthTypeConnectionProperties
#### Properties
* **authType**: 'AccessKey' (Required): Authentication type of the connection target
* **credentials**: [ConnectionAccessKey](#connectionaccesskey)

### AccountKeyAuthTypeConnectionProperties
#### Properties
* **authType**: 'AccountKey' (Required): Authentication type of the connection target
* **credentials**: [ConnectionAccountKey](#connectionaccountkey): Account key object for connection credential.

### ApiKeyAuthConnectionProperties
#### Properties
* **authType**: 'ApiKey' (Required): Authentication type of the connection target
* **credentials**: [ConnectionApiKey](#connectionapikey): Api key object for connection credential.

### CustomKeysConnectionProperties
#### Properties
* **authType**: 'CustomKeys' (Required): Authentication type of the connection target
* **credentials**: [CustomKeys](#customkeys): Custom Keys credential object

### ManagedIdentityAuthTypeConnectionProperties
#### Properties
* **authType**: 'ManagedIdentity' (Required): Authentication type of the connection target
* **credentials**: [ConnectionManagedIdentity](#connectionmanagedidentity)

### NoneAuthTypeConnectionProperties
#### Properties
* **authType**: 'None' (Required): Authentication type of the connection target

### OAuth2AuthTypeConnectionProperties
#### Properties
* **authType**: 'OAuth2' (Required): Authentication type of the connection target
* **credentials**: [ConnectionOAuth2](#connectionoauth2): ClientId and ClientSecret are required. Other properties are optional
depending on each OAuth2 provider's implementation.

### PATAuthTypeConnectionProperties
#### Properties
* **authType**: 'PAT' (Required): Authentication type of the connection target
* **credentials**: [ConnectionPersonalAccessToken](#connectionpersonalaccesstoken)

### SASAuthTypeConnectionProperties
#### Properties
* **authType**: 'SAS' (Required): Authentication type of the connection target
* **credentials**: [ConnectionSharedAccessSignature](#connectionsharedaccesssignature)

### ServicePrincipalAuthTypeConnectionProperties
#### Properties
* **authType**: 'ServicePrincipal' (Required): Authentication type of the connection target
* **credentials**: [ConnectionServicePrincipal](#connectionserviceprincipal)

### UsernamePasswordAuthTypeConnectionProperties
#### Properties
* **authType**: 'UsernamePassword' (Required): Authentication type of the connection target
* **credentials**: [ConnectionUsernamePassword](#connectionusernamepassword)


## ConnectionPropertiesV2Metadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionServicePrincipal
### Properties
* **clientId**: string
* **clientSecret**: string {sensitive}
* **tenantId**: string

## ConnectionSharedAccessSignature
### Properties
* **sas**: string {sensitive}

## ConnectionUsernamePassword
### Properties
* **password**: string {sensitive}
* **securityToken**: string {sensitive}: Optional, required by connections like SalesForce for extra security in addition to UsernamePassword
* **username**: string

## CustomBlocklistConfig
### Properties
* **blocking**: bool: If blocking would occur.
* **blocklistName**: string: Name of ContentFilter.
* **source**: 'Completion' | 'Prompt' | string: Content source to apply the Content Filters.

## CustomKeys
### Properties
* **keys**: [CustomKeys](#customkeys): Dictionary of <string>

## CustomKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DefenderForAISettingProperties
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Defender for AI state on the AI resource.

## DefenderForAISettingTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeploymentCapacitySettings
### Properties
* **designatedCapacity**: int {minValue: 0}: The designated capacity.
* **priority**: int {minValue: 0}: The priority of this capacity setting.

## DeploymentModel
### Properties
* **callRateLimit**: [CallRateLimit](#callratelimit) (ReadOnly): The call rate limit Cognitive Services account.
* **format**: string: Deployment model format.
* **name**: string: Deployment model name.
* **publisher**: string: Deployment model publisher.
* **source**: string: Optional. Deployment model source ARM resource ID.
* **sourceAccount**: string: Optional. Source of the model, another Microsoft.CognitiveServices accounts ARM resource ID.
* **version**: string: Optional. Deployment model version. If version is not specified, a default version will be assigned. The default version is different for different models and might change when there is new version available for a model. Default version for a model could be found from list models API.

## DeploymentProperties
### Properties
* **callRateLimit**: [CallRateLimit](#callratelimit) (ReadOnly): The call rate limit Cognitive Services account.
* **capabilities**: [DeploymentPropertiesCapabilities](#deploymentpropertiescapabilities) (ReadOnly): The capabilities.
* **capacitySettings**: [DeploymentCapacitySettings](#deploymentcapacitysettings): Internal use only.
* **currentCapacity**: int: The current capacity.
* **dynamicThrottlingEnabled**: bool (ReadOnly): If the dynamic throttling is enabled.
* **model**: [DeploymentModel](#deploymentmodel): Properties of Cognitive Services account deployment model.
* **parentDeploymentName**: string: The name of parent deployment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Disabled' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Gets the status of the resource at the time the operation was called.
* **raiPolicyName**: string: The name of RAI policy.
* **rateLimits**: [ThrottlingRule](#throttlingrule)[] (ReadOnly)
* **scaleSettings**: [DeploymentScaleSettings](#deploymentscalesettings): Properties of Cognitive Services account deployment model. (Deprecated, please use Deployment.sku instead.)
* **spilloverDeploymentName**: string: Specifies the deployment name that should serve requests when the request would have otherwise been throttled due to reaching current deployment throughput limit.
* **versionUpgradeOption**: 'NoAutoUpgrade' | 'OnceCurrentVersionExpired' | 'OnceNewDefaultVersionAvailable' | string: Deployment model version upgrade option.

## DeploymentPropertiesCapabilities
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeploymentScaleSettings
### Properties
* **activeCapacity**: int (ReadOnly): Deployment active capacity. This value might be different from `capacity` if customer recently updated `capacity`.
* **capacity**: int: Deployment capacity.
* **scaleType**: 'Manual' | 'Standard' | string: Deployment scale type.

## DeploymentTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Encryption
### Properties
* **keySource**: 'Microsoft.CognitiveServices' | 'Microsoft.KeyVault' | string: Enumerates the possible value of keySource for Encryption
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties of KeyVault

## EncryptionScopeProperties
### Properties
* **keySource**: 'Microsoft.CognitiveServices' | 'Microsoft.KeyVault' | string: Enumerates the possible value of keySource for Encryption
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties of KeyVault
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Gets the status of the resource at the time the operation was called.
* **state**: 'Disabled' | 'Enabled' | string: The encryptionScope state.

## EncryptionScopeTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## IpRule
### Properties
* **value**: string (Required): An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).

## KeyVaultProperties
### Properties
* **identityClientId**: string
* **keyName**: string: Name of the Key from KeyVault
* **keyVaultUri**: string: Uri of KeyVault
* **keyVersion**: string: Version of the Key from KeyVault

## MultiRegionSettings
### Properties
* **regions**: [RegionSetting](#regionsetting)[]
* **routingMethod**: 'Performance' | 'Priority' | 'Weighted' | string: Multiregion routing methods.

## NetworkInjections
### Properties
* **scenario**: 'agent' | 'none' | string: Specifies what features in AI Foundry network injection applies to. Currently only supports 'agent' for agent scenarios. 'none' means no network injection.
* **subnetArmId**: string: Specify the subnet for which your Agent Client is injected into.
* **useMicrosoftManagedNetwork**: bool: Boolean to enable Microsoft Managed Network for subnet delegation

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'None' | string: Setting for trusted services.
* **defaultAction**: 'Allow' | 'Deny' | string: The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
* **ipRules**: [IpRule](#iprule)[]: The list of IP address rules.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: The list of virtual network rules.

## NetworkSecurityPerimeter
### Properties
* **id**: string: Fully qualified identifier of the resource
* **location**: string: Location of the resource
* **perimeterGuid**: string: Guid of the resource

## NetworkSecurityPerimeterAccessRule
### Properties
* **name**: string: Network Security Perimeter Access Rule Name
* **properties**: [NetworkSecurityPerimeterAccessRuleProperties](#networksecurityperimeteraccessruleproperties): Properties of Network Security Perimeter Access Rule

## NetworkSecurityPerimeterAccessRuleProperties
### Properties
* **addressPrefixes**: string[]: Address prefixes for inbound rules
* **direction**: 'Inbound' | 'Outbound' | string: Direction of Access Rule
* **fullyQualifiedDomainNames**: string[]: Fully qualified domain name for outbound rules
* **networkSecurityPerimeters**: [NetworkSecurityPerimeter](#networksecurityperimeter)[]: NetworkSecurityPerimeters for inbound rules
* **subscriptions**: [NetworkSecurityPerimeterAccessRulePropertiesSubscriptionsItem](#networksecurityperimeteraccessrulepropertiessubscriptionsitem)[]: Subscriptions for inbound rules

## NetworkSecurityPerimeterAccessRulePropertiesSubscriptionsItem
### Properties
* **id**: string: Fully qualified identifier of subscription

## NetworkSecurityPerimeterConfigurationAssociationInfo
### Properties
* **accessMode**: string: Access Mode of the resource association
* **name**: string: Name of the resource association

## NetworkSecurityPerimeterConfigurationProperties
### Properties
* **networkSecurityPerimeter**: [NetworkSecurityPerimeter](#networksecurityperimeter): Information about a linked Network Security Perimeter
* **profile**: [NetworkSecurityPerimeterProfileInfo](#networksecurityperimeterprofileinfo): Network Security Perimeter Profile Information
* **provisioningIssues**: [ProvisioningIssue](#provisioningissue)[]: List of Provisioning Issues
* **provisioningState**: string (ReadOnly): Provisioning state of NetworkSecurityPerimeter configuration
* **resourceAssociation**: [NetworkSecurityPerimeterConfigurationAssociationInfo](#networksecurityperimeterconfigurationassociationinfo): Network Security Perimeter Configuration Association Information

## NetworkSecurityPerimeterProfileInfo
### Properties
* **accessRules**: [NetworkSecurityPerimeterAccessRule](#networksecurityperimeteraccessrule)[]
* **accessRulesVersion**: int: Access rules version of the resource profile
* **diagnosticSettingsVersion**: int: Current diagnostic settings version
* **enabledLogCategories**: string[]: List of enabled log categories
* **name**: string: Name of the resource profile

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string: The location of the private endpoint connection
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: The private link resource group ids.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ProjectProperties
### Properties
* **description**: string: The description of the Cognitive Services Project.
* **displayName**: string: The display name of the Cognitive Services Project.
* **endpoints**: [ProjectPropertiesEndpoints](#projectpropertiesendpoints) (ReadOnly): The list of endpoint for this Cognitive Services Project.
* **isDefault**: bool (ReadOnly): Indicates whether the project is the default project for the account.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'ResolvingDNS' | 'Succeeded' | string (ReadOnly): Gets the status of the cognitive services project at the time the operation was called.

## ProjectPropertiesEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProvisioningIssue
### Properties
* **name**: string: Name of the NSP provisioning issue
* **properties**: [ProvisioningIssueProperties](#provisioningissueproperties): Properties of Provisioning Issue

## ProvisioningIssueProperties
### Properties
* **description**: string: Description of the issue
* **issueType**: string: Type of Issue
* **severity**: string: Severity of the issue
* **suggestedAccessRules**: [NetworkSecurityPerimeterAccessRule](#networksecurityperimeteraccessrule)[]: Optional array, suggested access rules
* **suggestedResourceIds**: string[]: IDs of resources that can be associated to the same perimeter to remediate the issue.

## QuotaLimit
### Properties
* **count**: int
* **renewalPeriod**: int
* **rules**: [ThrottlingRule](#throttlingrule)[]

## RaiBlocklistItemProperties
### Properties
* **isRegex**: bool: If the pattern is a regex pattern.
* **pattern**: string: Pattern to match against.

## RaiBlocklistItemTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RaiBlocklistProperties
### Properties
* **description**: string: Description of the block list.

## RaiBlocklistTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RaiContentFilterProperties
### Properties
* **isMultiLevelFilter**: bool: If the Content Filter has multi severity levels(Low, Medium, or High).
* **name**: string: Name of Content Filter.
* **source**: 'Completion' | 'Prompt' | string: Content source to apply the Content Filters.

## RaiMonitorConfig
### Properties
* **adxStorageResourceId**: string: The storage resource Id.
* **identityClientId**: string: The identity client Id to access the storage.

## RaiPolicyContentFilter
### Properties
* **blocking**: bool: If blocking would occur.
* **enabled**: bool: If the ContentFilter is enabled.
* **name**: string: Name of ContentFilter.
* **severityThreshold**: 'High' | 'Low' | 'Medium' | string: Level at which content is filtered.
* **source**: 'Completion' | 'Prompt' | string: Content source to apply the Content Filters.

## RaiPolicyProperties
### Properties
* **basePolicyName**: string: Name of Rai policy.
* **contentFilters**: [RaiPolicyContentFilter](#raipolicycontentfilter)[]: The list of Content Filters.
* **customBlocklists**: [CustomBlocklistConfig](#customblocklistconfig)[]: The list of custom Blocklist.
* **mode**: 'Asynchronous_filter' | 'Blocking' | 'Default' | 'Deferred' | string: Rai policy mode. The enum value mapping is as below: Default = 0, Deferred=1, Blocking=2, Asynchronous_filter =3. Please use 'Asynchronous_filter' after 2025-06-01. It is the same as 'Deferred' in previous version.
* **type**: 'SystemManaged' | 'UserManaged' | string (ReadOnly): Content Filters policy type.

## RaiPolicyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RegionSetting
### Properties
* **customsubdomain**: string: Maps the region to the regional custom subdomain.
* **name**: string: Name of the region.
* **value**: int: A value for priority or weighted routing methods.

## RequestMatchPattern
### Properties
* **method**: string
* **path**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Enterprise' | 'Free' | 'Premium' | 'Standard' | string: This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## SkuCapability
### Properties
* **name**: string: The name of the SkuCapability.
* **value**: string: The value of the SkuCapability.

## SkuChangeInfo
### Properties
* **countOfDowngrades**: int: Gets the count of downgrades.
* **countOfUpgradesAfterDowngrades**: int: Gets the count of upgrades after downgrades.
* **lastChangeDate**: string: Gets the last change date.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ThrottlingRule
### Properties
* **count**: int
* **dynamicThrottlingEnabled**: bool
* **key**: string
* **matchPatterns**: [RequestMatchPattern](#requestmatchpattern)[]
* **minCount**: int
* **renewalPeriod**: int

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): Client App Id associated with this identity.
* **principalId**: string (ReadOnly): Azure Active Directory principal ID associated with this Identity.

## UserOwnedAmlWorkspace
### Properties
* **identityClientId**: string: Identity Client id of a AML account resource.
* **resourceId**: string: Full resource id of a AML account resource.

## UserOwnedStorage
### Properties
* **identityClientId**: string
* **resourceId**: string: Full resource id of a Microsoft.Storage resource.

## VirtualNetworkRule
### Properties
* **id**: string (Required): Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
* **ignoreMissingVnetServiceEndpoint**: bool: Ignore missing vnet service endpoint or not.
* **state**: string: Gets the state of virtual network rule.

