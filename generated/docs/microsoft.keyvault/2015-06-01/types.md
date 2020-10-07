# Microsoft.KeyVault @ 2015-06-01

## Microsoft.KeyVault/vaults
### Properties
* **apiVersion**: '2015-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.KeyVault/vaults' (ReadOnly, DeployTimeConstant)

## VaultProperties
### Properties
* **accessPolicies**: AccessPolicyEntry[] (Required)
* **enableSoftDelete**: bool
* **enabledForDeployment**: bool
* **enabledForDiskEncryption**: bool
* **enabledForTemplateDeployment**: bool
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
* **certificates**: 'all' | 'create' | 'delete' | 'deleteissuers' | 'get' | 'getissuers' | 'import' | 'list' | 'listissuers' | 'managecontacts' | 'manageissuers' | 'purge' | 'recover' | 'setissuers' | 'update'[]
* **keys**: 'all' | 'backup' | 'create' | 'decrypt' | 'delete' | 'encrypt' | 'get' | 'import' | 'list' | 'purge' | 'recover' | 'restore' | 'sign' | 'unwrapKey' | 'update' | 'verify' | 'wrapKey'[]
* **secrets**: 'all' | 'backup' | 'delete' | 'get' | 'list' | 'purge' | 'recover' | 'restore' | 'set'[]

## Sku
### Properties
* **family**: string (Required)
* **name**: 'premium' | 'standard' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

