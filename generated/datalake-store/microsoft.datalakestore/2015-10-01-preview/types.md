# Microsoft.DataLakeStore @ 2015-10-01-preview

## Resource Microsoft.DataLakeStore/accounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: EncryptionIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataLakeStoreAccountProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataLakeStore/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeStore/accounts/firewallRules@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallRuleProperties
* **type**: 'Microsoft.DataLakeStore/accounts/firewallRules' (ReadOnly, DeployTimeConstant)

## EncryptionIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## DataLakeStoreAccountProperties
### Properties
* **creationTime**: string (ReadOnly)
* **defaultGroup**: string
* **encryptionConfig**: EncryptionConfig
* **encryptionProvisioningState**: 'Creating' | 'Succeeded' (ReadOnly)
* **encryptionState**: 'Disabled' | 'Enabled'
* **endpoint**: string
* **lastModifiedTime**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' (ReadOnly)
* **state**: 'active' | 'suspended' (ReadOnly)

## EncryptionConfig
### Properties
* **keyVaultMetaInfo**: KeyVaultMetaInfo
* **type**: 'ServiceManaged' | 'UserManaged'

## KeyVaultMetaInfo
### Properties
* **encryptionKeyName**: string
* **encryptionKeyVersion**: string
* **keyVaultResourceId**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string
* **startIpAddress**: string

