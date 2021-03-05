# Microsoft.KeyVault @ 2018-02-14

## Resource Microsoft.KeyVault/vaults@2018-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-14' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultProperties (Required)
* **tags**: VaultCreateOrUpdateParametersTags
* **type**: 'Microsoft.KeyVault/vaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/privateEndpointConnections@2018-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-14' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **tags**: ResourceTags (ReadOnly)
* **type**: 'Microsoft.KeyVault/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/secrets@2018-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-14' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecretProperties (Required)
* **tags**: SecretCreateOrUpdateParametersTags
* **type**: 'Microsoft.KeyVault/vaults/secrets' (ReadOnly, DeployTimeConstant)

## VaultProperties
### Properties
* **accessPolicies**: AccessPolicyEntry[]
* **enabledForDeployment**: bool
* **enabledForDiskEncryption**: bool
* **enabledForTemplateDeployment**: bool
* **enablePurgeProtection**: bool
* **enableSoftDelete**: bool
* **networkAcls**: NetworkRuleSet
* **privateEndpointConnections**: PrivateEndpointConnectionItem[] (ReadOnly)
* **sku**: Sku (Required)
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

## PrivateEndpointConnectionItem
### Properties
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
* **actionRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## Sku
### Properties
* **family**: 'A' (Required)

## VaultCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

