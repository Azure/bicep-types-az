# Microsoft.CognitiveServices @ 2017-04-18

## Resource Microsoft.CognitiveServices/accounts@2017-04-18
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-18' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Managed service identity.
* **kind**: string: Required. Indicates the type of cognitive service account.
* **location**: string: The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CognitiveServicesAccountProperties](#cognitiveservicesaccountproperties): Properties of Cognitive Services account.
* **sku**: [Sku](#sku): The SKU of the cognitive services account.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.CognitiveServices/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CognitiveServices/accounts/privateEndpointConnections@2017-04-18
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-18' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the private endpoint connection
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: 'Microsoft.CognitiveServices/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): Principal Id of managed service identity.
* **tenantId**: string (ReadOnly): Tenant of managed service identity.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned': Type of managed service identity. Possible values include: 'None', 'SystemAssigned', 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,UserAssignedIdentity>](#dictionarystringuserassignedidentity): The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}

## Dictionary<string,UserAssignedIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string: Client App Id associated with this identity.
* **principalId**: string: Azure Active Directory principal ID associated with this Identity.

## CognitiveServicesAccountProperties
### Properties
* **apiProperties**: [CognitiveServicesAccountApiProperties](#cognitiveservicesaccountapiproperties): The api properties for special APIs.
* **capabilities**: [SkuCapability](#skucapability)[] (ReadOnly): Gets the capabilities of the cognitive services account. Each item indicates the capability of a specific feature. The values are read-only and for reference only.
* **customSubDomainName**: string: Optional subdomain name used for token-based authentication.
* **dateCreated**: string (ReadOnly): Gets the date of cognitive services account creation.
* **encryption**: [Encryption](#encryption): Properties to configure Encryption
* **endpoint**: string (ReadOnly): Endpoint of the created account.
* **internalId**: string (ReadOnly): The internal identifier.
* **isMigrated**: bool (ReadOnly): If the resource is migrated from an existing key.
* **networkAcls**: [NetworkRuleSet](#networkruleset): A set of rules governing the network accessibility.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: The private endpoint connection associated with the Cognitive Services account.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): Gets the status of the cognitive services account at the time the operation was called. Possible values include: 'Creating', 'ResolvingDNS', 'Moving', 'Deleting', 'Succeeded', 'Failed'
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Whether or not public endpoint access is allowed for this account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'. Possible values include: 'Enabled', 'Disabled'
* **skuChangeInfo**: [CognitiveServicesAccountSkuChangeInfo](#cognitiveservicesaccountskuchangeinfo) (ReadOnly): Sku change info of account.
* **userOwnedStorage**: [UserOwnedStorage](#userownedstorage)[]: The storage accounts for this resource.

## CognitiveServicesAccountApiProperties
### Properties
* **aadClientId**: string: (Metrics Advisor Only) The Azure AD Client Id (Application Id).
* **aadTenantId**: string: (Metrics Advisor Only) The Azure AD Tenant Id.
* **eventHubConnectionString**: string: (Personalization Only) The flag to enable statistics of Bing Search.
* **qnaAzureSearchEndpointId**: string: (QnAMaker Only) The Azure Search endpoint id of QnAMaker.
* **qnaAzureSearchEndpointKey**: string: (QnAMaker Only) The Azure Search endpoint key of QnAMaker.
* **qnaRuntimeEndpoint**: string: (QnAMaker Only) The runtime endpoint of QnAMaker.
* **statisticsEnabled**: bool: (Bing Search Only) The flag to enable statistics of Bing Search.
* **storageAccountConnectionString**: string: (Personalization Only) The storage account connection string.
* **superUser**: string: (Metrics Advisor Only) The super user of Metrics Advisor.
* **websiteName**: string: (Metrics Advisor Only) The website name of Metrics Advisor.

## SkuCapability
### Properties
* **name**: string: The name of the SkuCapability.
* **value**: string: The value of the SkuCapability.

## Encryption
### Properties
* **keySource**: 'Microsoft.CognitiveServices' | 'Microsoft.KeyVault': Enumerates the possible value of keySource for Encryption. Possible values include: 'Microsoft.CognitiveServices', 'Microsoft.KeyVault'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties to configure keyVault Properties

## KeyVaultProperties
### Properties
* **keyName**: string: Name of the Key from KeyVault
* **keyVaultUri**: string: Uri of KeyVault
* **keyVersion**: string: Version of the Key from KeyVault

## NetworkRuleSet
### Properties
* **defaultAction**: 'Allow' | 'Deny': The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated. Possible values include: 'Allow', 'Deny'
* **ipRules**: [IpRule](#iprule)[]: The list of IP address rules.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: The list of virtual network rules.

## IpRule
### Properties
* **value**: string (Required): An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).

## VirtualNetworkRule
### Properties
* **id**: string (Required): Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
* **ignoreMissingVnetServiceEndpoint**: bool: Ignore missing vnet service endpoint or not.
* **state**: string: Gets the state of virtual network rule.

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly): Entity Tag
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string: The location of the private endpoint connection
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: The private link resource group ids.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'

## CognitiveServicesAccountSkuChangeInfo
### Properties
* **countOfDowngrades**: int (ReadOnly): Gets the count of downgrades.
* **countOfUpgradesAfterDowngrades**: int (ReadOnly): Gets the count of upgrades after downgrades.
* **lastChangeDate**: string (ReadOnly): Gets the last change date.

## UserOwnedStorage
### Properties
* **resourceId**: string: Full resource id of a Microsoft.Storage resource.

## Sku
### Properties
* **name**: string (Required): The name of SKU.
* **tier**: 'Enterprise' | 'Free' | 'Premium' | 'Standard' (ReadOnly): Gets the sku tier. This is based on the SKU name. Possible values include: 'Free', 'Standard', 'Premium', 'Enterprise'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

