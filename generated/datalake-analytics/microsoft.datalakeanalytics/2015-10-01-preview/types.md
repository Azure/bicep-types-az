# Microsoft.DataLakeAnalytics @ 2015-10-01-preview

## Resource Microsoft.DataLakeAnalytics/accounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateDataLakeAnalyticsAccountProperties (Required)
* **tags**: CreateDataLakeAnalyticsAccountParametersTags
* **type**: 'Microsoft.DataLakeAnalytics/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddDataLakeStoreProperties
* **type**: 'Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/StorageAccounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/StorageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/computePolicies@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateComputePolicyProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/computePolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/firewallRules@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateFirewallRuleProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/firewallRules' (ReadOnly, DeployTimeConstant)

## CreateDataLakeAnalyticsAccountProperties
### Properties
* **accountId**: string (ReadOnly)
* **computePolicies**: CreateComputePolicyWithAccountParameters[]
* **creationTime**: string (ReadOnly)
* **dataLakeStoreAccounts**: AddDataLakeStoreWithAccountParameters[] (Required)
* **defaultDataLakeStoreAccount**: string (Required)
* **endpoint**: string (ReadOnly)
* **firewallRules**: CreateFirewallRuleWithAccountParameters[]
* **hiveMetastores**: HiveMetastore[] (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **maxDegreeOfParallelism**: int
* **maxDegreeOfParallelismPerJob**: int
* **maxJobCount**: int
* **minPriorityPerJob**: int
* **queryStoreRetention**: int
* **storageAccounts**: AddStorageAccountWithAccountParameters[]
* **systemMaxDegreeOfParallelism**: int (ReadOnly)
* **systemMaxJobCount**: int (ReadOnly)
* **virtualNetworkRules**: VirtualNetworkRule[] (ReadOnly)

## CreateComputePolicyWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: CreateOrUpdateComputePolicyProperties (Required)
* **type**: string (ReadOnly)

## CreateOrUpdateComputePolicyProperties
### Properties
* **maxDegreeOfParallelismPerJob**: int
* **minPriorityPerJob**: int
* **objectId**: string (Required)
* **objectType**: 'Group' | 'ServicePrincipal' | 'User' (Required)

## AddDataLakeStoreWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: AddDataLakeStoreProperties
* **type**: string (ReadOnly)

## AddDataLakeStoreProperties
### Properties
* **suffix**: string

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

## HiveMetastore
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: HiveMetastoreProperties (ReadOnly)
* **type**: string (ReadOnly)

## HiveMetastoreProperties
### Properties
* **databaseName**: string (ReadOnly)
* **password**: string (ReadOnly)
* **runtimeVersion**: string (ReadOnly)
* **serverUri**: string (ReadOnly)
* **userName**: string (ReadOnly)

## AddStorageAccountWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: StorageAccountProperties (Required)
* **type**: string (ReadOnly)

## StorageAccountProperties
### Properties
* **accessKey**: string (Required, WriteOnly)
* **suffix**: string

## VirtualNetworkRule
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: VirtualNetworkRuleProperties (ReadOnly)
* **type**: string (ReadOnly)

## VirtualNetworkRuleProperties
### Properties
* **subnetId**: string (ReadOnly)

## CreateDataLakeAnalyticsAccountParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

