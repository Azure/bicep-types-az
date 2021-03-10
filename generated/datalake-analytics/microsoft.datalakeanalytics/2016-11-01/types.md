# Microsoft.DataLakeAnalytics @ 2016-11-01

## Resource Microsoft.DataLakeAnalytics/accounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateDataLakeAnalyticsAccountProperties](#createdatalakeanalyticsaccountproperties) (Required)
* **tags**: [CreateDataLakeAnalyticsAccountParametersTags](#createdatalakeanalyticsaccountparameterstags)
* **type**: 'Microsoft.DataLakeAnalytics/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/computePolicies@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateOrUpdateComputePolicyProperties](#createorupdatecomputepolicyproperties) (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/computePolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AddDataLakeStoreProperties](#adddatalakestoreproperties)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/firewallRules@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties) (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataLakeAnalytics/accounts/storageAccounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AddStorageAccountProperties](#addstorageaccountproperties) (Required)
* **type**: 'Microsoft.DataLakeAnalytics/accounts/storageAccounts' (ReadOnly, DeployTimeConstant)

## CreateDataLakeAnalyticsAccountProperties
### Properties
* **accountId**: string (ReadOnly)
* **computePolicies**: [CreateComputePolicyWithAccountParameters](#createcomputepolicywithaccountparameters)[]
* **creationTime**: string (ReadOnly)
* **currentTier**: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption' (ReadOnly)
* **dataLakeStoreAccounts**: [AddDataLakeStoreWithAccountParameters](#adddatalakestorewithaccountparameters)[] (Required)
* **debugDataAccessLevel**: 'All' | 'Customer' | 'None' (ReadOnly)
* **defaultDataLakeStoreAccount**: string (Required)
* **endpoint**: string (ReadOnly)
* **firewallAllowAzureIps**: 'Disabled' | 'Enabled'
* **firewallRules**: [CreateFirewallRuleWithAccountParameters](#createfirewallrulewithaccountparameters)[]
* **firewallState**: 'Disabled' | 'Enabled'
* **hiveMetastores**: [HiveMetastore](#hivemetastore)[] (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **maxDegreeOfParallelism**: int
* **maxDegreeOfParallelismPerJob**: int
* **maxJobCount**: int
* **minPriorityPerJob**: int
* **newTier**: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption'
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' | 'Undeleting' (ReadOnly)
* **queryStoreRetention**: int
* **state**: 'Active' | 'Suspended' (ReadOnly)
* **storageAccounts**: [AddStorageAccountWithAccountParameters](#addstorageaccountwithaccountparameters)[]
* **systemMaxDegreeOfParallelism**: int (ReadOnly)
* **systemMaxJobCount**: int (ReadOnly)
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[] (ReadOnly)

## CreateComputePolicyWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: [CreateOrUpdateComputePolicyProperties](#createorupdatecomputepolicyproperties) (Required)
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
* **properties**: [AddDataLakeStoreProperties](#adddatalakestoreproperties)
* **type**: string (ReadOnly)

## AddDataLakeStoreProperties
### Properties
* **suffix**: string

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

## HiveMetastore
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [HiveMetastoreProperties](#hivemetastoreproperties) (ReadOnly)
* **type**: string (ReadOnly)

## HiveMetastoreProperties
### Properties
* **databaseName**: string (ReadOnly)
* **nestedResourceProvisioningState**: 'Canceled' | 'Failed' | 'Succeeded' (ReadOnly)
* **password**: string (ReadOnly)
* **runtimeVersion**: string (ReadOnly)
* **serverUri**: string (ReadOnly)
* **userName**: string (ReadOnly)

## AddStorageAccountWithAccountParameters
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)
* **properties**: [AddStorageAccountProperties](#addstorageaccountproperties) (Required)
* **type**: string (ReadOnly)

## AddStorageAccountProperties
### Properties
* **accessKey**: string (Required, WriteOnly)
* **suffix**: string

## VirtualNetworkRule
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties) (ReadOnly)
* **type**: string (ReadOnly)

## VirtualNetworkRuleProperties
### Properties
* **subnetId**: string (ReadOnly)
* **virtualNetworkRuleState**: 'Active' | 'Failed' | 'NetworkSourceDeleted' (ReadOnly)

## CreateDataLakeAnalyticsAccountParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

