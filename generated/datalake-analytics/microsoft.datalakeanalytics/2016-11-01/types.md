# Microsoft.DataLakeAnalytics @ 2016-11-01

## Resource Microsoft.DataLakeAnalytics/accounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateDataLakeAnalyticsAccountProperties (Required)
* **tags**: CreateDataLakeAnalyticsAccountParametersTags
* **type**: 'Microsoft.DataLakeAnalytics/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/computePolicies@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateComputePolicyProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/computePolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddDataLakeStoreProperties
* **type**: 'Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/firewallRules@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateFirewallRuleProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/storageAccounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddStorageAccountProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/storageAccounts' (ReadOnly, DeployTimeConstant)

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
* **properties**: AddStorageAccountProperties (Required)

## AddStorageAccountProperties
### Properties
* **suffix**: string

## CreateDataLakeAnalyticsAccountParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

