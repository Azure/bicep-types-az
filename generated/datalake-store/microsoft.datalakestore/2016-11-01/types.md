# Microsoft.DataLakeStore @ 2016-11-01

## Resource Microsoft.DataLakeStore/accounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: EncryptionIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateDataLakeStoreAccountProperties
* **tags**: CreateDataLakeStoreAccountParametersTags
* **type**: 'Microsoft.DataLakeStore/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeStore/accounts/firewallRules@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateFirewallRuleProperties (Required)
* **type**: 'Microsoft.DataLakeStore/accounts/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeStore/accounts/trustedIdProviders@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateTrustedIdProviderProperties (Required)
* **type**: 'Microsoft.DataLakeStore/accounts/trustedIdProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeStore/accounts/virtualNetworkRules@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateVirtualNetworkRuleProperties (Required)
* **type**: 'Microsoft.DataLakeStore/accounts/virtualNetworkRules' (ReadOnly, DeployTimeConstant)

## EncryptionIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## CreateDataLakeStoreAccountProperties
### Properties
* **accountId**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **defaultGroup**: string
* **encryptionConfig**: EncryptionConfig
* **endpoint**: string (ReadOnly)
* **firewallRules**: CreateFirewallRuleWithAccountParameters[]
* **lastModifiedTime**: string (ReadOnly)
* **trustedIdProviders**: CreateTrustedIdProviderWithAccountParameters[]
* **virtualNetworkRules**: CreateVirtualNetworkRuleWithAccountParameters[]

## EncryptionConfig
### Properties
* **keyVaultMetaInfo**: KeyVaultMetaInfo

## KeyVaultMetaInfo
### Properties
* **encryptionKeyName**: string (Required)
* **encryptionKeyVersion**: string (Required)
* **keyVaultResourceId**: string (Required)

## CreateFirewallRuleWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: CreateOrUpdateFirewallRuleProperties (Required)
* **type**: string (ReadOnly)

## CreateOrUpdateFirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

## CreateTrustedIdProviderWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: CreateOrUpdateTrustedIdProviderProperties (Required)
* **type**: string (ReadOnly)

## CreateOrUpdateTrustedIdProviderProperties
### Properties
* **idProvider**: string (Required)

## CreateVirtualNetworkRuleWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: CreateOrUpdateVirtualNetworkRuleProperties (Required)
* **type**: string (ReadOnly)

## CreateOrUpdateVirtualNetworkRuleProperties
### Properties
* **subnetId**: string (Required)

## CreateDataLakeStoreAccountParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

