# Microsoft.DataLakeStore @ 2016-11-01

## Resource Microsoft.DataLakeStore/accounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [EncryptionIdentity](#encryptionidentity): The Key Vault encryption identity, if any.
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateDataLakeStoreAccountProperties](#createdatalakestoreaccountproperties): The Data Lake Store account properties to use for creating.
* **tags**: [CreateDataLakeStoreAccountParametersTags](#createdatalakestoreaccountparameterstags): The resource tags.
* **type**: 'Microsoft.DataLakeStore/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeStore/accounts/firewallRules@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties) (Required): The firewall rule properties to use when creating a new firewall rule.
* **type**: 'Microsoft.DataLakeStore/accounts/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeStore/accounts/trustedIdProviders@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateTrustedIdProviderProperties](#createorupdatetrustedidproviderproperties) (Required): The trusted identity provider properties to use when creating a new trusted identity provider.
* **type**: 'Microsoft.DataLakeStore/accounts/trustedIdProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeStore/accounts/virtualNetworkRules@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateVirtualNetworkRuleProperties](#createorupdatevirtualnetworkruleproperties) (Required): The virtual network rule properties to use when creating a new virtual network rule.
* **type**: 'Microsoft.DataLakeStore/accounts/virtualNetworkRules' (ReadOnly, DeployTimeConstant): The resource type

## CreateDataLakeStoreAccountParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateDataLakeStoreAccountProperties
### Properties
* **accountId**: string (ReadOnly): The unique identifier associated with this Data Lake Store account.
* **creationTime**: string (ReadOnly): The account creation time.
* **currentTier**: 'Commitment_100TB' | 'Commitment_10TB' | 'Commitment_1PB' | 'Commitment_1TB' | 'Commitment_500TB' | 'Commitment_5PB' | 'Consumption' (ReadOnly): The commitment tier in use for the current month.
* **defaultGroup**: string: The default owner group for all new folders and files created in the Data Lake Store account.
* **encryptionConfig**: [EncryptionConfig](#encryptionconfig): The Key Vault encryption configuration.
* **encryptionProvisioningState**: 'Creating' | 'Succeeded' (ReadOnly): The current state of encryption provisioning for this Data Lake Store account.
* **encryptionState**: 'Disabled' | 'Enabled': The current state of encryption for this Data Lake Store account.
* **endpoint**: string (ReadOnly): The full CName endpoint for this account.
* **firewallAllowAzureIps**: 'Disabled' | 'Enabled': The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
* **firewallRules**: [CreateFirewallRuleWithAccountParameters](#createfirewallrulewithaccountparameters)[]: The list of firewall rules associated with this Data Lake Store account.
* **firewallState**: 'Disabled' | 'Enabled': The current state of the IP address firewall for this Data Lake Store account.
* **lastModifiedTime**: string (ReadOnly): The account last modified time.
* **newTier**: 'Commitment_100TB' | 'Commitment_10TB' | 'Commitment_1PB' | 'Commitment_1TB' | 'Commitment_500TB' | 'Commitment_5PB' | 'Consumption': The commitment tier to use for next month.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' | 'Undeleting' (ReadOnly): The provisioning status of the Data Lake Store account.
* **state**: 'Active' | 'Suspended' (ReadOnly): The state of the Data Lake Store account.
* **trustedIdProviders**: [CreateTrustedIdProviderWithAccountParameters](#createtrustedidproviderwithaccountparameters)[]: The list of trusted identity providers associated with this Data Lake Store account.
* **trustedIdProviderState**: 'Disabled' | 'Enabled': The current state of the trusted identity provider feature for this Data Lake Store account.
* **virtualNetworkRules**: [CreateVirtualNetworkRuleWithAccountParameters](#createvirtualnetworkrulewithaccountparameters)[]: The list of virtual network rules associated with this Data Lake Store account.

## CreateFirewallRuleWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The unique name of the firewall rule to create.
* **properties**: [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties) (Required): The firewall rule properties to use when creating a new firewall rule.
* **type**: string (ReadOnly): The resource type.

## CreateOrUpdateFirewallRuleProperties
### Properties
* **endIpAddress**: string (Required): The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
* **startIpAddress**: string (Required): The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.

## CreateOrUpdateTrustedIdProviderProperties
### Properties
* **idProvider**: string (Required): The URL of this trusted identity provider.

## CreateOrUpdateVirtualNetworkRuleProperties
### Properties
* **subnetId**: string (Required): The resource identifier for the subnet.

## CreateTrustedIdProviderWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The unique name of the trusted identity provider to create.
* **properties**: [CreateOrUpdateTrustedIdProviderProperties](#createorupdatetrustedidproviderproperties) (Required): The trusted identity provider properties to use when creating a new trusted identity provider.
* **type**: string (ReadOnly): The resource type.

## CreateVirtualNetworkRuleWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The unique name of the virtual network rule to create.
* **properties**: [CreateOrUpdateVirtualNetworkRuleProperties](#createorupdatevirtualnetworkruleproperties) (Required): The virtual network rule properties to use when creating a new virtual network rule.
* **type**: string (ReadOnly): The resource type.

## EncryptionConfig
### Properties
* **keyVaultMetaInfo**: [KeyVaultMetaInfo](#keyvaultmetainfo): The Key Vault information for connecting to user managed encryption keys.
* **type**: 'ServiceManaged' | 'UserManaged' (Required): The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.

## EncryptionIdentity
### Properties
* **principalId**: string (ReadOnly): The principal identifier associated with the encryption.
* **tenantId**: string (ReadOnly): The tenant identifier associated with the encryption.
* **type**: 'SystemAssigned' (Required): The type of encryption being used. Currently the only supported type is 'SystemAssigned'.

## KeyVaultMetaInfo
### Properties
* **encryptionKeyName**: string (Required): The name of the user managed encryption key.
* **encryptionKeyVersion**: string (Required): The version of the user managed encryption key.
* **keyVaultResourceId**: string (Required): The resource identifier for the user managed Key Vault being used to encrypt.

