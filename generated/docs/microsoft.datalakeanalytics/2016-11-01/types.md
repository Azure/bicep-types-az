# Microsoft.DataLakeAnalytics @ 2016-11-01

## Microsoft.DataLakeAnalytics/accounts/computePolicies
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateComputePolicyProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/computePolicies' (ReadOnly, DeployTimeConstant)

## CreateOrUpdateComputePolicyProperties
### Properties
* **maxDegreeOfParallelismPerJob**: int
* **minPriorityPerJob**: int
* **objectId**: string (Required)
* **objectType**: 'Group' | 'ServicePrincipal' | 'User' (Required)

## Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddDataLakeStoreProperties
* **type**: 'Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts' (ReadOnly, DeployTimeConstant)

## AddDataLakeStoreProperties
### Properties
* **suffix**: string

## Microsoft.DataLakeAnalytics/accounts/firewallRules
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateFirewallRuleProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/firewallRules' (ReadOnly, DeployTimeConstant)

## CreateOrUpdateFirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

## Microsoft.DataLakeAnalytics/accounts/storageAccounts
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddStorageAccountProperties (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/storageAccounts' (ReadOnly, DeployTimeConstant)

## AddStorageAccountProperties
### Properties
* **accessKey**: string (Required, WriteOnly)
* **suffix**: string

## Microsoft.DataLakeAnalytics/accounts
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateDataLakeAnalyticsAccountProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataLakeAnalytics/accounts' (ReadOnly, DeployTimeConstant)

## CreateDataLakeAnalyticsAccountProperties
### Properties
* **accountId**: string (ReadOnly)
* **computePolicies**: CreateComputePolicyWithAccountParameters[]
* **creationTime**: string (ReadOnly)
* **currentTier**: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption' (ReadOnly)
* **dataLakeStoreAccounts**: AddDataLakeStoreWithAccountParameters[] (Required)
* **defaultDataLakeStoreAccount**: string (Required)
* **endpoint**: string (ReadOnly)
* **firewallAllowAzureIps**: 'Disabled' | 'Enabled'
* **firewallRules**: CreateFirewallRuleWithAccountParameters[]
* **firewallState**: 'Disabled' | 'Enabled'
* **lastModifiedTime**: string (ReadOnly)
* **maxDegreeOfParallelism**: int
* **maxDegreeOfParallelismPerJob**: int
* **maxJobCount**: int
* **minPriorityPerJob**: int
* **newTier**: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption'
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' | 'Undeleting' (ReadOnly)
* **queryStoreRetention**: int
* **state**: 'Active' | 'Suspended' (ReadOnly)
* **storageAccounts**: AddStorageAccountWithAccountParameters[]
* **systemMaxDegreeOfParallelism**: int (ReadOnly)
* **systemMaxJobCount**: int (ReadOnly)

## CreateComputePolicyWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: CreateOrUpdateComputePolicyProperties (Required)
* **type**: string (ReadOnly)

## AddDataLakeStoreWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: AddDataLakeStoreProperties
* **type**: string (ReadOnly)

## CreateFirewallRuleWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: CreateOrUpdateFirewallRuleProperties (Required)
* **type**: string (ReadOnly)

## AddStorageAccountWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: AddStorageAccountProperties (Required)
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

