# Microsoft.KeyVault @ 2020-04-01-preview

## Resource Microsoft.KeyVault/managedHSMs@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedHsmProperties](#managedhsmproperties)
* **sku**: [ManagedHsmSku](#managedhsmsku)
* **tags**: [ManagedHsmResourceTags](#managedhsmresourcetags)
* **type**: 'Microsoft.KeyVault/managedHSMs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VaultProperties](#vaultproperties) (Required)
* **tags**: [VaultCreateOrUpdateParametersTags](#vaultcreateorupdateparameterstags)
* **type**: 'Microsoft.KeyVault/vaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/accessPolicies@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'add' | 'remove' | 'replace' (Required, DeployTimeConstant)
* **properties**: [VaultAccessPolicyProperties](#vaultaccesspolicyproperties) (Required)
* **type**: 'Microsoft.KeyVault/vaults/accessPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/privateEndpointConnections@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly)
* **type**: 'Microsoft.KeyVault/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/secrets@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecretProperties](#secretproperties) (Required)
* **tags**: [SecretCreateOrUpdateParametersTags](#secretcreateorupdateparameterstags)
* **type**: 'Microsoft.KeyVault/vaults/secrets' (ReadOnly, DeployTimeConstant)

## ManagedHsmProperties
### Properties
* **createMode**: 'default' | 'recover'
* **enablePurgeProtection**: bool
* **enableSoftDelete**: bool
* **hsmUri**: string (ReadOnly)
* **initialAdminObjectIds**: string[]
* **provisioningState**: 'Activated' | 'Deleting' | 'Failed' | 'Provisioning' | 'Restoring' | 'SecurityDomainRestore' | 'Succeeded' | 'Updating' (ReadOnly)
* **softDeleteRetentionInDays**: int
* **statusMessage**: string (ReadOnly)
* **tenantId**: string

## ManagedHsmSku
### Properties
* **family**: 'B' (Required)
* **name**: 'Custom_B32' | 'Standard_B1' (Required)

## ManagedHsmResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VaultProperties
### Properties
* **accessPolicies**: [AccessPolicyEntry](#accesspolicyentry)[]
* **createMode**: 'default' | 'recover'
* **enabledForDeployment**: bool
* **enabledForDiskEncryption**: bool
* **enabledForTemplateDeployment**: bool
* **enablePurgeProtection**: bool
* **enableRbacAuthorization**: bool
* **enableSoftDelete**: bool
* **networkAcls**: [NetworkRuleSet](#networkruleset)
* **privateEndpointConnections**: [PrivateEndpointConnectionItem](#privateendpointconnectionitem)[] (ReadOnly)
* **provisioningState**: 'RegisteringDns' | 'Succeeded'
* **sku**: [Sku](#sku) (Required)
* **softDeleteRetentionInDays**: int
* **tenantId**: string (Required)
* **vaultUri**: string

## AccessPolicyEntry
### Properties
* **applicationId**: string
* **objectId**: string (Required)
* **permissions**: [Permissions](#permissions) (Required)
* **tenantId**: string (Required)

## Permissions
### Properties
* **certificates**: 'backup' | 'create' | 'delete' | 'deleteissuers' | 'get' | 'getissuers' | 'import' | 'list' | 'listissuers' | 'managecontacts' | 'manageissuers' | 'purge' | 'recover' | 'restore' | 'setissuers' | 'update'[]
* **keys**: 'backup' | 'create' | 'decrypt' | 'delete' | 'encrypt' | 'get' | 'import' | 'list' | 'purge' | 'recover' | 'restore' | 'sign' | 'unwrapKey' | 'update' | 'verify' | 'wrapKey'[]
* **secrets**: 'backup' | 'delete' | 'get' | 'list' | 'purge' | 'recover' | 'restore' | 'set'[]
* **storage**: 'backup' | 'delete' | 'deletesas' | 'get' | 'getsas' | 'list' | 'listsas' | 'purge' | 'recover' | 'regeneratekey' | 'restore' | 'set' | 'setsas' | 'update'[]

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'None'
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: [IPRule](#iprule)[]
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]

## IPRule
### Properties
* **value**: string (Required)

## VirtualNetworkRule
### Properties
* **id**: string (Required)
* **ignoreMissingVnetServiceEndpoint**: bool

## PrivateEndpointConnectionItem
### Properties
* **id**: string
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: 'Creating' | 'Deleting' | 'Disconnected' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None'
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## Sku
### Properties
* **family**: 'A' (Required)
* **name**: 'premium' | 'standard' (Required)

## VaultCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VaultAccessPolicyProperties
### Properties
* **accessPolicies**: [AccessPolicyEntry](#accesspolicyentry)[] (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretProperties
### Properties
* **attributes**: [SecretAttributes](#secretattributes)
* **contentType**: string
* **secretUri**: string (ReadOnly)
* **secretUriWithVersion**: string (ReadOnly)
* **value**: string

## SecretAttributes
### Properties
* **created**: int (ReadOnly)
* **enabled**: bool
* **exp**: int
* **nbf**: int
* **updated**: int (ReadOnly)

## SecretCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

