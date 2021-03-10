# Microsoft.KeyVault @ 2015-06-01

## Resource Microsoft.KeyVault/vaults@2015-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VaultProperties](#vaultproperties) (Required)
* **tags**: [VaultCreateOrUpdateParametersTags](#vaultcreateorupdateparameterstags)
* **type**: 'Microsoft.KeyVault/vaults' (ReadOnly, DeployTimeConstant)

## VaultProperties
### Properties
* **accessPolicies**: [AccessPolicyEntry](#accesspolicyentry)[] (Required)
* **enabledForDeployment**: bool
* **enabledForDiskEncryption**: bool
* **enabledForTemplateDeployment**: bool
* **enableSoftDelete**: bool
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
* **certificates**: 'all' | 'create' | 'delete' | 'deleteissuers' | 'get' | 'getissuers' | 'import' | 'list' | 'listissuers' | 'managecontacts' | 'manageissuers' | 'purge' | 'recover' | 'setissuers' | 'update'[]
* **keys**: 'all' | 'backup' | 'create' | 'decrypt' | 'delete' | 'encrypt' | 'get' | 'import' | 'list' | 'purge' | 'recover' | 'restore' | 'sign' | 'unwrapKey' | 'update' | 'verify' | 'wrapKey'[]
* **secrets**: 'all' | 'backup' | 'delete' | 'get' | 'list' | 'purge' | 'recover' | 'restore' | 'set'[]

## Sku
### Properties
* **family**: 'A' (Required)
* **name**: 'premium' | 'standard' (Required)

## VaultCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

