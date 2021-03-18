# Microsoft.DataLakeStore @ 2016-11-01

## Resource Microsoft.DataLakeStore/accounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [EncryptionIdentity](#encryptionidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateDataLakeStoreAccountProperties](#createdatalakestoreaccountproperties)
* **tags**: [CreateDataLakeStoreAccountParametersTags](#createdatalakestoreaccountparameterstags)
* **type**: 'Microsoft.DataLakeStore/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeStore/accounts/firewallRules@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties) (Required)
* **type**: 'Microsoft.DataLakeStore/accounts/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeStore/accounts/trustedIdProviders@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateOrUpdateTrustedIdProviderProperties](#createorupdatetrustedidproviderproperties) (Required)
* **type**: 'Microsoft.DataLakeStore/accounts/trustedIdProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeStore/accounts/virtualNetworkRules@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateOrUpdateVirtualNetworkRuleProperties](#createorupdatevirtualnetworkruleproperties) (Required)
* **type**: 'Microsoft.DataLakeStore/accounts/virtualNetworkRules' (ReadOnly, DeployTimeConstant)

## EncryptionIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned' (Required)

## CreateDataLakeStoreAccountProperties
### Properties
* **accountId**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **currentTier**: 'Commitment_100TB' | 'Commitment_10TB' | 'Commitment_1PB' | 'Commitment_1TB' | 'Commitment_500TB' | 'Commitment_5PB' | 'Consumption' (ReadOnly)
* **defaultGroup**: string
* **encryptionConfig**: [EncryptionConfig](#encryptionconfig)
* **encryptionProvisioningState**: 'Creating' | 'Succeeded' (ReadOnly)
* **encryptionState**: 'Disabled' | 'Enabled'
* **endpoint**: string (ReadOnly)
* **firewallAllowAzureIps**: 'Disabled' | 'Enabled'
* **firewallRules**: [CreateFirewallRuleWithAccountParameters](#createfirewallrulewithaccountparameters)[]
* **firewallState**: 'Disabled' | 'Enabled'
* **lastModifiedTime**: string (ReadOnly)
* **newTier**: 'Commitment_100TB' | 'Commitment_10TB' | 'Commitment_1PB' | 'Commitment_1TB' | 'Commitment_500TB' | 'Commitment_5PB' | 'Consumption'
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' | 'Undeleting' (ReadOnly)
* **state**: 'Active' | 'Suspended' (ReadOnly)
* **trustedIdProviders**: [CreateTrustedIdProviderWithAccountParameters](#createtrustedidproviderwithaccountparameters)[]
* **trustedIdProviderState**: 'Disabled' | 'Enabled'
* **virtualNetworkRules**: [CreateVirtualNetworkRuleWithAccountParameters](#createvirtualnetworkrulewithaccountparameters)[]

## EncryptionConfig
### Properties
* **keyVaultMetaInfo**: [KeyVaultMetaInfo](#keyvaultmetainfo)
* **type**: 'ServiceManaged' | 'UserManaged' (Required)

## KeyVaultMetaInfo
### Properties
* **encryptionKeyName**: string (Required)
* **encryptionKeyVersion**: string (Required)
* **keyVaultResourceId**: string (Required)

## CreateFirewallRuleWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties) (Required)
* **type**: string (ReadOnly)

## CreateOrUpdateFirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

## CreateTrustedIdProviderWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: [CreateOrUpdateTrustedIdProviderProperties](#createorupdatetrustedidproviderproperties) (Required)
* **type**: string (ReadOnly)

## CreateOrUpdateTrustedIdProviderProperties
### Properties
* **idProvider**: string (Required)

## CreateVirtualNetworkRuleWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: [CreateOrUpdateVirtualNetworkRuleProperties](#createorupdatevirtualnetworkruleproperties) (Required)
* **type**: string (ReadOnly)

## CreateOrUpdateVirtualNetworkRuleProperties
### Properties
* **subnetId**: string (Required)

## CreateDataLakeStoreAccountParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

