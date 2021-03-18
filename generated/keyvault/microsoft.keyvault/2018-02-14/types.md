# Microsoft.KeyVault @ 2018-02-14

## Resource Microsoft.KeyVault/vaults@2018-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-14' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VaultProperties](#vaultproperties) (Required)
* **tags**: [VaultCreateOrUpdateParametersTags](#vaultcreateorupdateparameterstags)
* **type**: 'Microsoft.KeyVault/vaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/accessPolicies@2018-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-14' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'add' | 'remove' | 'replace' (Required, DeployTimeConstant)
* **properties**: [VaultAccessPolicyProperties](#vaultaccesspolicyproperties) (Required)
* **type**: 'Microsoft.KeyVault/vaults/accessPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/privateEndpointConnections@2018-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-14' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly)
* **type**: 'Microsoft.KeyVault/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.KeyVault/vaults/secrets@2018-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-14' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecretProperties](#secretproperties) (Required)
* **tags**: [SecretCreateOrUpdateParametersTags](#secretcreateorupdateparameterstags)
* **type**: 'Microsoft.KeyVault/vaults/secrets' (ReadOnly, DeployTimeConstant)

## VaultProperties
### Properties
* **accessPolicies**: [AccessPolicyEntry](#accesspolicyentry)[]
* **createMode**: 'default' | 'recover'
* **enabledForDeployment**: bool
* **enabledForDiskEncryption**: bool
* **enabledForTemplateDeployment**: bool
* **enablePurgeProtection**: bool
* **enableSoftDelete**: bool
* **networkAcls**: [NetworkRuleSet](#networkruleset)
* **privateEndpointConnections**: [PrivateEndpointConnectionItem](#privateendpointconnectionitem)[] (ReadOnly)
* **sku**: [Sku](#sku) (Required)
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

## PrivateEndpointConnectionItem
### Properties
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
* **actionRequired**: string
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

