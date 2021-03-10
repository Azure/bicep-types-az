# Microsoft.CognitiveServices @ 2017-04-18

## Resource Microsoft.CognitiveServices/accounts@2017-04-18
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-18' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **kind**: string
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CognitiveServicesAccountProperties](#cognitiveservicesaccountproperties)
* **sku**: [Sku](#sku)
* **tags**: [CognitiveServicesAccountTags](#cognitiveservicesaccounttags)
* **type**: 'Microsoft.CognitiveServices/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CognitiveServices/accounts/privateEndpointConnections@2017-04-18
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-18' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.CognitiveServices/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities)

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string
* **principalId**: string

## CognitiveServicesAccountProperties
### Properties
* **apiProperties**: [CognitiveServicesAccountApiProperties](#cognitiveservicesaccountapiproperties)
* **capabilities**: [SkuCapability](#skucapability)[] (ReadOnly)
* **customSubDomainName**: string
* **dateCreated**: string (ReadOnly)
* **encryption**: [Encryption](#encryption)
* **endpoint**: string (ReadOnly)
* **internalId**: string (ReadOnly)
* **networkAcls**: [NetworkRuleSet](#networkruleset)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'ResolvingDNS' | 'Succeeded' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **userOwnedStorage**: [UserOwnedStorage](#userownedstorage)[]

## CognitiveServicesAccountApiProperties
### Properties
* **aadClientId**: string
* **aadTenantId**: string
* **eventHubConnectionString**: string
* **qnaRuntimeEndpoint**: string
* **statisticsEnabled**: bool
* **storageAccountConnectionString**: string
* **superUser**: string
* **websiteName**: string

## SkuCapability
### Properties
* **name**: string
* **value**: string

## Encryption
### Properties
* **keySource**: 'Microsoft.CognitiveServices' | 'Microsoft.KeyVault'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)

## KeyVaultProperties
### Properties
* **keyName**: string
* **keyVaultUri**: string
* **keyVersion**: string

## NetworkRuleSet
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: [IpRule](#iprule)[]
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]

## IpRule
### Properties
* **value**: string (Required)

## VirtualNetworkRule
### Properties
* **id**: string (Required)
* **ignoreMissingVnetServiceEndpoint**: bool
* **state**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## UserOwnedStorage
### Properties
* **resourceId**: string

## Sku
### Properties
* **name**: string (Required)
* **tier**: 'Enterprise' | 'Free' | 'Premium' | 'Standard' (ReadOnly)

## CognitiveServicesAccountTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

