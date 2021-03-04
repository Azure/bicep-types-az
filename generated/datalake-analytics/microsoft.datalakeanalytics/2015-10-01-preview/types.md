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
* **computePolicies**: CreateComputePolicyWithAccountParameters[]
* **dataLakeStoreAccounts**: AddDataLakeStoreWithAccountParameters[] (Required)
* **defaultDataLakeStoreAccount**: string (Required)
* **firewallRules**: CreateFirewallRuleWithAccountParameters[]
* **maxDegreeOfParallelism**: int
* **maxDegreeOfParallelismPerJob**: int
* **maxJobCount**: int
* **minPriorityPerJob**: int
* **queryStoreRetention**: int
* **storageAccounts**: AddStorageAccountWithAccountParameters[]

## CreateComputePolicyWithAccountParameters
### Properties
* **name**: string (Required)
* **properties**: CreateOrUpdateComputePolicyProperties (Required)

## CreateOrUpdateComputePolicyProperties
### Properties
* **maxDegreeOfParallelismPerJob**: int
* **minPriorityPerJob**: int
* **objectId**: string (Required)
* **objectType**: 'Group' | 'ServicePrincipal' | 'User' (Required)

## AddDataLakeStoreWithAccountParameters
### Properties
* **name**: string (Required)
* **properties**: AddDataLakeStoreProperties

## AddDataLakeStoreProperties
### Properties
* **suffix**: string

## CreateFirewallRuleWithAccountParameters
### Properties
* **name**: string (Required)
* **properties**: CreateOrUpdateFirewallRuleProperties (Required)

## CreateOrUpdateFirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

## AddStorageAccountWithAccountParameters
### Properties
* **name**: string (Required)
* **properties**: StorageAccountProperties (Required)

## StorageAccountProperties
### Properties
* **suffix**: string

## CreateDataLakeAnalyticsAccountParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

