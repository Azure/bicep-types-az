# Microsoft.DataLakeAnalytics @ 2016-11-01

## Resource Microsoft.DataLakeAnalytics/accounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateDataLakeAnalyticsAccountProperties](#createdatalakeanalyticsaccountproperties) (Required): The account specific properties that are associated with an underlying Data Lake Analytics account. Returned only when retrieving a specific account.
* **tags**: [CreateDataLakeAnalyticsAccountParametersTags](#createdatalakeanalyticsaccountparameterstags): The resource tags.
* **type**: 'Microsoft.DataLakeAnalytics/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeAnalytics/accounts/computePolicies@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateComputePolicyProperties](#createorupdatecomputepolicyproperties) (Required): The compute policy properties.
* **type**: 'Microsoft.DataLakeAnalytics/accounts/computePolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddDataLakeStoreProperties](#adddatalakestoreproperties): The Data Lake Store account properties.
* **type**: 'Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeAnalytics/accounts/firewallRules@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties) (Required): The firewall rule properties.
* **type**: 'Microsoft.DataLakeAnalytics/accounts/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeAnalytics/accounts/storageAccounts@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddStorageAccountProperties](#addstorageaccountproperties) (Required): The Azure Storage account properties.
* **type**: 'Microsoft.DataLakeAnalytics/accounts/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## CreateDataLakeAnalyticsAccountProperties
### Properties
* **accountId**: string (ReadOnly): The unique identifier associated with this Data Lake Analytics account.
* **computePolicies**: [CreateComputePolicyWithAccountParameters](#createcomputepolicywithaccountparameters)[]: The list of compute policies associated with this account.
* **creationTime**: string (ReadOnly): The account creation time.
* **currentTier**: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption' (ReadOnly): The commitment tier for the next month.
* **dataLakeStoreAccounts**: [AddDataLakeStoreWithAccountParameters](#adddatalakestorewithaccountparameters)[] (Required): The list of Data Lake Store accounts associated with this account.
* **debugDataAccessLevel**: 'All' | 'Customer' | 'None' (ReadOnly): The current state of the DebugDataAccessLevel for this account.
* **defaultDataLakeStoreAccount**: string (Required): The default Data Lake Store account associated with this account.
* **endpoint**: string (ReadOnly): The full CName endpoint for this account.
* **firewallAllowAzureIps**: 'Disabled' | 'Enabled': The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
* **firewallRules**: [CreateFirewallRuleWithAccountParameters](#createfirewallrulewithaccountparameters)[]: The list of firewall rules associated with this account.
* **firewallState**: 'Disabled' | 'Enabled': The current state of the IP address firewall for this account.
* **hiveMetastores**: [HiveMetastore](#hivemetastore)[] (ReadOnly): The list of hiveMetastores associated with this account.
* **lastModifiedTime**: string (ReadOnly): The account last modified time.
* **maxDegreeOfParallelism**: int: The maximum supported degree of parallelism for this account.
* **maxDegreeOfParallelismPerJob**: int: The maximum supported degree of parallelism per job for this account.
* **maxJobCount**: int: The maximum supported jobs running under the account at the same time.
* **minPriorityPerJob**: int: The minimum supported priority per job for this account.
* **newTier**: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption': The commitment tier for the next month.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' | 'Undeleting' (ReadOnly): The provisioning status of the Data Lake Analytics account.
* **publicDataLakeStoreAccounts**: [DataLakeStoreAccountInformation](#datalakestoreaccountinformation)[] (ReadOnly): The list of Data Lake Store accounts associated with this account.
* **queryStoreRetention**: int: The number of days that job metadata is retained.
* **state**: 'Active' | 'Suspended' (ReadOnly): The state of the Data Lake Analytics account.
* **storageAccounts**: [AddStorageAccountWithAccountParameters](#addstorageaccountwithaccountparameters)[]: The list of Azure Blob Storage accounts associated with this account.
* **systemMaxDegreeOfParallelism**: int (ReadOnly): The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account.
* **systemMaxJobCount**: int (ReadOnly): The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[] (ReadOnly): The list of virtualNetwork rules associated with this account.

## CreateComputePolicyWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The resource name.
* **properties**: [CreateOrUpdateComputePolicyProperties](#createorupdatecomputepolicyproperties) (Required): The compute policy properties.
* **type**: string (ReadOnly): The resource type.

## CreateOrUpdateComputePolicyProperties
### Properties
* **maxDegreeOfParallelismPerJob**: int: The maximum degree of parallelism per job this user can use to submit jobs.
* **minPriorityPerJob**: int: The minimum priority per job this user can use to submit jobs.
* **objectId**: string (Required): The AAD object identifier for the entity to create a policy for.
* **objectType**: 'Group' | 'ServicePrincipal' | 'User' (Required): The type of AAD object the object identifier refers to.

## AddDataLakeStoreWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The resource name.
* **properties**: [AddDataLakeStoreProperties](#adddatalakestoreproperties): The Data Lake Store account properties.
* **type**: string (ReadOnly): The resource type.

## AddDataLakeStoreProperties
### Properties
* **suffix**: string: The optional suffix for the Data Lake Store account.

## CreateFirewallRuleWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The resource name.
* **properties**: [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties) (Required): The firewall rule properties.
* **type**: string (ReadOnly): The resource type.

## CreateOrUpdateFirewallRuleProperties
### Properties
* **endIpAddress**: string (Required): The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
* **startIpAddress**: string (Required): The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.

## HiveMetastore
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The resource name.
* **properties**: [HiveMetastoreProperties](#hivemetastoreproperties) (ReadOnly): The HiveMetastore  properties.
* **type**: string (ReadOnly): The resource type.

## HiveMetastoreProperties
### Properties
* **databaseName**: string (ReadOnly): The databaseName for the Hive MetaStore
* **nestedResourceProvisioningState**: 'Canceled' | 'Failed' | 'Succeeded' (ReadOnly): The current state of the NestedResourceProvisioning for this account.
* **password**: string (ReadOnly): The password for the Hive MetaStore
* **runtimeVersion**: string (ReadOnly): The runtimeVersion for the Hive MetaStore
* **serverUri**: string (ReadOnly): The serverUri for the Hive MetaStore
* **userName**: string (ReadOnly): The userName for the Hive MetaStore

## DataLakeStoreAccountInformation
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The resource name.
* **properties**: [DataLakeStoreAccountInformationProperties](#datalakestoreaccountinformationproperties) (ReadOnly): The Data Lake Store account properties.
* **type**: string (ReadOnly): The resource type.

## DataLakeStoreAccountInformationProperties
### Properties
* **suffix**: string (ReadOnly): The optional suffix for the Data Lake Store account.

## AddStorageAccountWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The resource name.
* **properties**: [AddStorageAccountProperties](#addstorageaccountproperties) (Required): The Azure Storage account properties.
* **type**: string (ReadOnly): The resource type.

## AddStorageAccountProperties
### Properties
* **accessKey**: string (Required, WriteOnly)
* **suffix**: string: The optional suffix for the storage account.

## VirtualNetworkRule
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The resource name.
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties) (ReadOnly): The VirtualNetwork Rule properties.
* **type**: string (ReadOnly): The resource type.

## VirtualNetworkRuleProperties
### Properties
* **subnetId**: string (ReadOnly): The resource identifier for the subnet
* **virtualNetworkRuleState**: 'Active' | 'Failed' | 'NetworkSourceDeleted' (ReadOnly): The current state of the VirtualNetworkRule for this account.

## CreateDataLakeAnalyticsAccountParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

