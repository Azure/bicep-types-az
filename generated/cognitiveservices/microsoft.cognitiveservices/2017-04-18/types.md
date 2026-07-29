# Microsoft.CognitiveServices @ 2017-04-18

## Resource Microsoft.CognitiveServices/accounts@2017-04-18
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-18' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of Cognitive Services account.
* **kind**: string: The Kind of the resource.
* **location**: string: The location of the resource
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CognitiveServicesAccountProperties](#cognitiveservicesaccountproperties): Properties of Cognitive Services account.
* **sku**: [Sku](#sku): The SKU of Cognitive Services account.
* **tags**: [CognitiveServicesAccountTags](#cognitiveservicesaccounttags): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.CognitiveServices/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/privateEndpointConnections@2017-04-18
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-18' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the private endpoint connection
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.CognitiveServices/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function checkSkuAvailability (Microsoft.CognitiveServices/locations@2017-04-18)
* **Resource**: Microsoft.CognitiveServices/locations
* **ApiVersion**: 2017-04-18
* **Input**: [CheckSkuAvailabilityParameter](#checkskuavailabilityparameter)
* **Output**: [CheckSkuAvailabilityResultList](#checkskuavailabilityresultlist)

## Function listKeys (Microsoft.CognitiveServices/accounts@2017-04-18)
* **Resource**: Microsoft.CognitiveServices/accounts
* **ApiVersion**: 2017-04-18
* **Output**: [CognitiveServicesAccountKeys](#cognitiveservicesaccountkeys)

## Function regenerateKey (Microsoft.CognitiveServices/accounts@2017-04-18)
* **Resource**: Microsoft.CognitiveServices/accounts
* **ApiVersion**: 2017-04-18
* **Input**: [RegenerateKeyParameters](#regeneratekeyparameters)
* **Output**: [CognitiveServicesAccountKeys](#cognitiveservicesaccountkeys)

## CheckSkuAvailabilityParameter
### Properties
* **kind**: string (Required): The Kind of the resource.
* **skus**: string[] (Required): The SKU of the resource.
* **type**: string (Required): The Type of the resource.

## CheckSkuAvailabilityResult
### Properties
* **kind**: string: The Kind of the resource.
* **message**: string: Additional error message.
* **reason**: string: Reason why the SKU is not available.
* **skuAvailable**: bool: Indicates the given SKU is available or not.
* **skuName**: string: The SKU of Cognitive Services account.
* **type**: string: The Type of the resource.

## CheckSkuAvailabilityResultList
### Properties
* **value**: [CheckSkuAvailabilityResult](#checkskuavailabilityresult)[]: Check SKU availability result list.

## CognitiveServicesAccountApiProperties
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

## CognitiveServicesAccountKeys
### Properties
* **key1**: string: Gets the value of key 1.
* **key2**: string: Gets the value of key 2.

## CognitiveServicesAccountProperties
### Properties
* **apiProperties**: [CognitiveServicesAccountApiProperties](#cognitiveservicesaccountapiproperties): The api properties for special APIs.
* **capabilities**: [SkuCapability](#skucapability)[] (ReadOnly): Gets the capabilities of the cognitive services account. Each item indicates the capability of a specific feature. The values are read-only and for reference only.
* **customSubDomainName**: string: Optional subdomain name used for token-based authentication.
* **dateCreated**: string (ReadOnly): Gets the date of cognitive services account creation.
* **encryption**: [Encryption](#encryption): The encryption properties for this resource.
* **endpoint**: string (ReadOnly): Endpoint of the created account.
* **internalId**: string (ReadOnly): The internal identifier.
* **isMigrated**: bool (ReadOnly): If the resource is migrated from an existing key.
* **networkAcls**: [NetworkRuleSet](#networkruleset): A collection of rules governing the accessibility from specific network locations.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: The private endpoint connection associated with the Cognitive Services account.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'ResolvingDNS' | 'Succeeded' | string (ReadOnly): Gets the status of the cognitive services account at the time the operation was called.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public endpoint access is allowed for this account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
* **skuChangeInfo**: [CognitiveServicesAccountSkuChangeInfo](#cognitiveservicesaccountskuchangeinfo) (ReadOnly): Sku change info of account.
* **userOwnedStorage**: [UserOwnedStorage](#userownedstorage)[]: The storage accounts for this resource.

## CognitiveServicesAccountSkuChangeInfo
### Properties
* **countOfDowngrades**: int (ReadOnly): Gets the count of downgrades.
* **countOfUpgradesAfterDowngrades**: int (ReadOnly): Gets the count of upgrades after downgrades.
* **lastChangeDate**: string (ReadOnly): Gets the last change date.

## CognitiveServicesAccountTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Encryption
### Properties
* **keySource**: 'Microsoft.CognitiveServices' | 'Microsoft.KeyVault' | string: Enumerates the possible value of keySource for Encryption
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties of KeyVault

## Identity
### Properties
* **principalId**: string (ReadOnly): Principal Id of managed service identity.
* **tenantId**: string (ReadOnly): Tenant of managed service identity.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned': Type of managed service identity.
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
* **etag**: string (ReadOnly): Entity Tag
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string: The location of the private endpoint connection
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: The private link resource group ids.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## RegenerateKeyParameters
### Properties
* **keyName**: 'Key1' | 'Key2' (Required): key name to generate (Key1|Key2)

## Sku
### Properties
* **name**: string (Required): Gets or sets the sku name. Required for account creation, optional for update.
* **tier**: 'Enterprise' | 'Free' | 'Premium' | 'Standard' | string (ReadOnly): Gets the sku tier. This is based on the SKU name.

## SkuCapability
### Properties
* **name**: string: The name of the SkuCapability.
* **value**: string: The value of the SkuCapability.

## UserAssignedIdentity
### Properties
* **clientId**: string: Client App Id associated with this identity.
* **principalId**: string: Azure Active Directory principal ID associated with this Identity.

## UserOwnedStorage
### Properties
* **resourceId**: string: Full resource id of a Microsoft.Storage resource.

## VirtualNetworkRule
### Properties
* **id**: string (Required): Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
* **ignoreMissingVnetServiceEndpoint**: bool: Ignore missing vnet service endpoint or not.
* **state**: string: Gets the state of virtual network rule.

