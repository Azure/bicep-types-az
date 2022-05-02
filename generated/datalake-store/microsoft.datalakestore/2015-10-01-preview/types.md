# Microsoft.DataLakeStore @ 2015-10-01-preview

## Resource Microsoft.DataLakeStore/accounts@2015-10-01-preview (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [EncryptionIdentity](#encryptionidentity) (WriteOnly)
* **location**: string (WriteOnly): the account regional location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataLakeStoreAccountProperties](#datalakestoreaccountproperties) (WriteOnly): Data Lake Store account properties information
* **tags**: [DataLakeStoreAccountTags](#datalakestoreaccounttags) (WriteOnly): the value of custom properties.
* **type**: 'Microsoft.DataLakeStore/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeStore/accounts/firewallRules@2015-10-01-preview (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): the firewall rule's regional location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (WriteOnly): Data Lake Store firewall rule properties information
* **type**: 'Microsoft.DataLakeStore/accounts/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## EncryptionIdentity
### Properties
* **principalId**: string (ReadOnly, WriteOnly): The principal identifier associated with the encryption.
* **tenantId**: string (ReadOnly, WriteOnly): The tenant identifier associated with the encryption.
* **type**: 'SystemAssigned' (WriteOnly): The type of encryption being used. Currently the only supported type is 'SystemAssigned'.

## DataLakeStoreAccountProperties
### Properties
* **creationTime**: string (ReadOnly, WriteOnly): the account creation time.
* **defaultGroup**: string (WriteOnly): the default owner group for all new folders and files created in the Data Lake Store account.
* **encryptionConfig**: [EncryptionConfig](#encryptionconfig) (WriteOnly)
* **encryptionProvisioningState**: 'Creating' | 'Succeeded' (ReadOnly, WriteOnly): The current state of encryption provisioning for this Data Lake store account.
* **encryptionState**: 'Disabled' | 'Enabled' (WriteOnly): The current state of encryption for this Data Lake store account.
* **endpoint**: string (WriteOnly): the gateway host.
* **lastModifiedTime**: string (ReadOnly, WriteOnly): the account last modified time.
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' (ReadOnly, WriteOnly): the status of the Data Lake Store account while being provisioned.
* **state**: 'active' | 'suspended' (ReadOnly, WriteOnly): the status of the Data Lake Store account after provisioning has completed.

## EncryptionConfig
### Properties
* **keyVaultMetaInfo**: [KeyVaultMetaInfo](#keyvaultmetainfo) (WriteOnly)
* **type**: 'ServiceManaged' | 'UserManaged' (WriteOnly): The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.

## KeyVaultMetaInfo
### Properties
* **encryptionKeyName**: string (WriteOnly): The name of the user managed encryption key.
* **encryptionKeyVersion**: string (WriteOnly): The version of the user managed encryption key.
* **keyVaultResourceId**: string (WriteOnly): The resource identifier for the user managed Key Vault being used to encrypt.

## DataLakeStoreAccountTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (WriteOnly): the end IP address for the firewall rule.
* **startIpAddress**: string (WriteOnly): the start IP address for the firewall rule.

