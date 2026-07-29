# Microsoft.CognitiveServices @ 2021-04-30

## Resource Microsoft.CognitiveServices/accounts@2021-04-30
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-30' (ReadOnly, DeployTimeConstant): The resource api version
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

## Resource Microsoft.CognitiveServices/accounts/privateEndpointConnections@2021-04-30
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the private endpoint connection
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.CognitiveServices/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/locations/resourceGroups/deletedAccounts@2021-04-30
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2021-04-30' (ReadOnly, DeployTimeConstant): The resource api version
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

## Function checkSkuAvailability (Microsoft.CognitiveServices/locations@2021-04-30)
* **Resource**: Microsoft.CognitiveServices/locations
* **ApiVersion**: 2021-04-30
* **Input**: [CheckSkuAvailabilityParameter](#checkskuavailabilityparameter)
* **Output**: [SkuAvailabilityListResult](#skuavailabilitylistresult)

## Function listKeys (Microsoft.CognitiveServices/accounts@2021-04-30)
* **Resource**: Microsoft.CognitiveServices/accounts
* **ApiVersion**: 2021-04-30
* **Output**: [ApiKeys](#apikeys)

## Function regenerateKey (Microsoft.CognitiveServices/accounts@2021-04-30)
* **Resource**: Microsoft.CognitiveServices/accounts
* **ApiVersion**: 2021-04-30
* **Input**: [RegenerateKeyParameters](#regeneratekeyparameters)
* **Output**: [ApiKeys](#apikeys)

## AccountProperties
### Properties
* **allowedFqdnList**: string[]
* **apiProperties**: [ApiProperties](#apiproperties): The api properties for special APIs.
* **callRateLimit**: [CallRateLimit](#callratelimit) (ReadOnly): The call rate limit Cognitive Services account.
* **capabilities**: [SkuCapability](#skucapability)[] (ReadOnly): Gets the capabilities of the cognitive services account. Each item indicates the capability of a specific feature. The values are read-only and for reference only.
* **customSubDomainName**: string: Optional subdomain name used for token-based authentication.
* **dateCreated**: string (ReadOnly): Gets the date of cognitive services account creation.
* **disableLocalAuth**: bool
* **encryption**: [Encryption](#encryption): The encryption properties for this resource.
* **endpoint**: string (ReadOnly): Endpoint of the created account.
* **endpoints**: [AccountPropertiesEndpoints](#accountpropertiesendpoints) (ReadOnly): Dictionary of <string>
* **internalId**: string (ReadOnly): The internal identifier (deprecated, do not use this property).
* **isMigrated**: bool (ReadOnly): If the resource is migrated from an existing key.
* **migrationToken**: string: Resource migration token.
* **networkAcls**: [NetworkRuleSet](#networkruleset): A collection of rules governing the accessibility from specific network locations.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The private endpoint connection associated with the Cognitive Services account.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'ResolvingDNS' | 'Succeeded' | string (ReadOnly): Gets the status of the cognitive services account at the time the operation was called.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public endpoint access is allowed for this account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
* **quotaLimit**: [QuotaLimit](#quotalimit) (ReadOnly)
* **restore**: bool
* **restrictOutboundNetworkAccess**: bool
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

## CheckSkuAvailabilityParameter
### Properties
* **kind**: string (Required): The Kind of the resource.
* **skus**: string[] (Required): The SKU of the resource.
* **type**: string (Required): The Type of the resource.

## Encryption
### Properties
* **keySource**: 'Microsoft.CognitiveServices' | 'Microsoft.KeyVault' | string: Enumerates the possible value of keySource for Encryption
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties of KeyVault

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

## NetworkRuleSet
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
* **ipRules**: [IpRule](#iprule)[]: The list of IP address rules.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: The list of virtual network rules.

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

## QuotaLimit
### Properties
* **count**: int
* **renewalPeriod**: int
* **rules**: [ThrottlingRule](#throttlingrule)[]

## RegenerateKeyParameters
### Properties
* **keyName**: 'Key1' | 'Key2' (Required): key name to generate (Key1|Key2)

## RequestMatchPattern
### Properties
* **method**: string
* **path**: string

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Enterprise' | 'Free' | 'Premium' | 'Standard' | string: This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## SkuAvailability
### Properties
* **kind**: string: The Kind of the resource.
* **message**: string: Additional error message.
* **reason**: string: Reason why the SKU is not available.
* **skuAvailable**: bool: Indicates the given SKU is available or not.
* **skuName**: string: The SKU of Cognitive Services account.
* **type**: string: The Type of the resource.

## SkuAvailabilityListResult
### Properties
* **value**: [SkuAvailability](#skuavailability)[]: Check SKU availability result list.

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

## UserOwnedStorage
### Properties
* **identityClientId**: string
* **resourceId**: string: Full resource id of a Microsoft.Storage resource.

## VirtualNetworkRule
### Properties
* **id**: string (Required): Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
* **ignoreMissingVnetServiceEndpoint**: bool: Ignore missing vnet service endpoint or not.
* **state**: string: Gets the state of virtual network rule.

