# Microsoft.KeyVault @ 2020-04-01-preview

## Resource Microsoft.KeyVault/managedHSMs@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedHsmProperties
* **sku**: ManagedHsmSku
* **tags**: ManagedHsmResourceTags
* **type**: 'Microsoft.KeyVault/managedHSMs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultProperties (Required)
* **tags**: VaultCreateOrUpdateParametersTags
* **type**: 'Microsoft.KeyVault/vaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/accessPolicies@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly, WriteOnly)
* **name**: 'add' | 'remove' | 'replace' (Required, DeployTimeConstant)
* **properties**: VaultAccessPolicyProperties (Required, WriteOnly)
* **type**: 'Microsoft.KeyVault/vaults/accessPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/privateEndpointConnections@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **tags**: ResourceTags (ReadOnly)
* **type**: 'Microsoft.KeyVault/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/secrets@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecretProperties (Required)
* **tags**: SecretCreateOrUpdateParametersTags
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
* **accessPolicies**: AccessPolicyEntry[]
* **createMode**: 'default' | 'recover'
* **enabledForDeployment**: bool
* **enabledForDiskEncryption**: bool
* **enabledForTemplateDeployment**: bool
* **enablePurgeProtection**: bool
* **enableRbacAuthorization**: bool
* **enableSoftDelete**: bool
* **networkAcls**: NetworkRuleSet
* **privateEndpointConnections**: PrivateEndpointConnectionItem[] (ReadOnly)
* **provisioningState**: 'RegisteringDns' | 'Succeeded'
* **sku**: Sku (Required)
* **softDeleteRetentionInDays**: int
* **tenantId**: string (Required)
* **vaultUri**: string

## AccessPolicyEntry
### Properties
* **applicationId**: string
* **objectId**: string (Required)
* **permissions**: Permissions (Required)
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
* **ipRules**: IPRule[]
* **virtualNetworkRules**: VirtualNetworkRule[]

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
* **properties**: PrivateEndpointConnectionProperties

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
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
* **accessPolicies**: AccessPolicyEntry[] (Required, WriteOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretProperties
### Properties
* **attributes**: SecretAttributes
* **contentType**: string
* **secretUri**: string (ReadOnly)
* **secretUriWithVersion**: string (ReadOnly)
* **value**: string

## SecretAttributes
### Properties
* **created**: int (ReadOnly)
* **enabled**: bool
* **expires**: int
* **notBefore**: int
* **updated**: int (ReadOnly)

## SecretCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

