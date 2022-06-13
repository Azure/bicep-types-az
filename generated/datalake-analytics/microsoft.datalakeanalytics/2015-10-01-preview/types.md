# Microsoft.DataLakeAnalytics @ 2015-10-01-preview

## Resource Microsoft.DataLakeAnalytics/accounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateDataLakeAnalyticsAccountProperties](#createdatalakeanalyticsaccountproperties) (Required): The Data Lake Analytics account properties to use for creating.
* **tags**: [CreateDataLakeAnalyticsAccountParametersTags](#createdatalakeanalyticsaccountparameterstags): The resource tags.
* **type**: 'Microsoft.DataLakeAnalytics/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeAnalytics/accounts/computePolicies@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateComputePolicyProperties](#createorupdatecomputepolicyproperties) (Required): The compute policy properties to use when creating a new compute policy.
* **type**: 'Microsoft.DataLakeAnalytics/accounts/computePolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddDataLakeStoreProperties](#adddatalakestoreproperties): The Data Lake Store account properties to use when adding a new Data Lake Store account.
* **type**: 'Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeAnalytics/accounts/firewallRules@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties) (Required): The firewall rule properties to use when creating a new firewall rule.
* **type**: 'Microsoft.DataLakeAnalytics/accounts/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeAnalytics/accounts/StorageAccounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountProperties](#storageaccountproperties) (Required): The Azure Storage account properties to use when adding a new Azure Storage account.
* **type**: 'Microsoft.DataLakeAnalytics/accounts/StorageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Function listSasTokens (Microsoft.DataLakeAnalytics/accounts/storageAccounts/containers@2015-10-01-preview)
* **Resource**: Microsoft.DataLakeAnalytics/accounts/storageAccounts/containers
* **ApiVersion**: 2015-10-01-preview
* **Output**: [SasTokenInformationListResult](#sastokeninformationlistresult)

## AddDataLakeStoreProperties
### Properties
* **suffix**: string: The optional suffix for the Data Lake Store account.

## AddDataLakeStoreWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The unique name of the Data Lake Store account to add.
* **properties**: [AddDataLakeStoreProperties](#adddatalakestoreproperties): The Data Lake Store account properties to use when adding a new Data Lake Store account.
* **type**: string (ReadOnly): The resource type.

## AddStorageAccountWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The unique name of the Azure Storage account to add.
* **properties**: [StorageAccountProperties](#storageaccountproperties) (Required): The Azure Storage account properties to use when adding a new Azure Storage account.
* **type**: string (ReadOnly): The resource type.

## CreateComputePolicyWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The unique name of the compute policy to create.
* **properties**: [CreateOrUpdateComputePolicyProperties](#createorupdatecomputepolicyproperties) (Required): The compute policy properties to use when creating a new compute policy.
* **type**: string (ReadOnly): The resource type.

## CreateDataLakeAnalyticsAccountParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateDataLakeAnalyticsAccountProperties
### Properties
* **accountId**: string (ReadOnly): The unique identifier associated with this Data Lake Analytics account.
* **computePolicies**: [CreateComputePolicyWithAccountParameters](#createcomputepolicywithaccountparameters)[]: The list of compute policies associated with this account.
* **creationTime**: string (ReadOnly): The account creation time.
* **currentTier**: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption' (ReadOnly): The commitment tier in use for the current month.
* **dataLakeStoreAccounts**: [AddDataLakeStoreWithAccountParameters](#adddatalakestorewithaccountparameters)[] (Required): The list of Data Lake Store accounts associated with this account.
* **debugDataAccessLevel**: 'All' | 'Customer' | 'None' (ReadOnly): The current state of the DebugDataAccessLevel for this account.
* **defaultDataLakeStoreAccount**: string (Required): The default Data Lake Store account associated with this account.
* **endpoint**: string (ReadOnly): The full CName endpoint for this account.
* **firewallAllowAzureIps**: 'Disabled' | 'Enabled': The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
* **firewallRules**: [CreateFirewallRuleWithAccountParameters](#createfirewallrulewithaccountparameters)[]: The list of firewall rules associated with this account.
* **firewallState**: 'Disabled' | 'Enabled': The current state of the IP address firewall for this account.
* **hierarchicalQueueState**: string (ReadOnly): The hierarchical queue state associated with this account.
* **hiveMetastores**: [HiveMetastore](#hivemetastore)[] (ReadOnly): The list of hiveMetastores associated with this account.
* **lastModifiedTime**: string (ReadOnly): The account last modified time.
* **maxDegreeOfParallelism**: int: The maximum supported degree of parallelism for this account.
* **maxDegreeOfParallelismPerJob**: int: The maximum supported degree of parallelism per job for this account.
* **maxJobCount**: int: The maximum supported jobs running under the account at the same time.
* **minPriorityPerJob**: int: The minimum supported priority per job for this account.
* **newTier**: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption': The commitment tier for the next month.
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' (ReadOnly): The provisioning status of the Data Lake Analytics account.
* **publicDataLakeStoreAccounts**: [DataLakeStoreAccountInformation](#datalakestoreaccountinformation)[] (ReadOnly): The list of Data Lake Store accounts associated with this account.
* **queryStoreRetention**: int: The number of days that job metadata is retained.
* **state**: 'active' | 'suspended' (ReadOnly): The state of the Data Lake Analytics account.
* **storageAccounts**: [AddStorageAccountWithAccountParameters](#addstorageaccountwithaccountparameters)[]: The list of Azure Blob Storage accounts associated with this account.
* **systemMaxDegreeOfParallelism**: int (ReadOnly): The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account.
* **systemMaxJobCount**: int (ReadOnly): The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[] (ReadOnly): The list of virtualNetwork rules associated with this account.

## CreateFirewallRuleWithAccountParameters
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (Required): The unique name of the firewall rule to create.
* **properties**: [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties) (Required): The firewall rule properties to use when creating a new firewall rule.
* **type**: string (ReadOnly): The resource type.

## CreateOrUpdateComputePolicyProperties
### Properties
* **maxDegreeOfParallelismPerJob**: int: The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
* **minPriorityPerJob**: int: The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
* **objectId**: string (Required): The AAD object identifier for the entity to create a policy for.
* **objectType**: 'Group' | 'ServicePrincipal' | 'User' | string (Required): The type of AAD object the object identifier refers to.

## CreateOrUpdateFirewallRuleProperties
### Properties
* **endIpAddress**: string (Required): The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
* **startIpAddress**: string (Required): The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.

## DataLakeStoreAccountInfoProperties
### Properties
* **suffix**: string (ReadOnly): The optional suffix for the Data Lake Store account.

## DataLakeStoreAccountInformation
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The resource name.
* **properties**: [DataLakeStoreAccountInfoProperties](#datalakestoreaccountinfoproperties) (ReadOnly): The Data Lake Store account properties.
* **type**: string (ReadOnly): The resource type.

## HiveMetastore
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The resource name.
* **properties**: [HiveMetastoreProperties](#hivemetastoreproperties) (ReadOnly): The  HiveMetastoreProperties rule properties.
* **type**: string (ReadOnly): The resource type.

## HiveMetastoreProperties
### Properties
* **databaseName**: string (ReadOnly): The databaseName for the Hive MetaStore
* **nestedResourceProvisioningState**: 'Canceled' | 'Failed' | 'Succeeded' (ReadOnly): The current state of the NestedResource
* **password**: string (ReadOnly): The password for the Hive MetaStore
* **runtimeVersion**: string (ReadOnly): The runtimeVersion for the Hive MetaStore
* **serverUri**: string (ReadOnly): The serverUri for the Hive MetaStore
* **userName**: string (ReadOnly): The userName for the Hive MetaStore

## SasTokenInformation
### Properties
* **accessToken**: string (ReadOnly): The access token for the associated Azure Storage Container.

## SasTokenInformationListResult
### Properties
* **nextLink**: string (ReadOnly): The link (url) to the next page of results.
* **value**: [SasTokenInformation](#sastokeninformation)[] (ReadOnly): The results of the list operation.

## StorageAccountProperties
### Properties
* **accessKey**: string (Required, WriteOnly): The access key associated with this Azure Storage account that will be used to connect to it.
* **suffix**: string: The optional suffix for the storage account.

## VirtualNetworkRule
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The resource name.
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties) (ReadOnly): The  VirtualNetwork rule properties.
* **type**: string (ReadOnly): The resource type.

## VirtualNetworkRuleProperties
### Properties
* **subnetId**: string (ReadOnly): The resource identifier for the subnet
* **virtualNetworkRuleState**: 'Active' | 'Failed' | 'NetworkSourceDeleted' (ReadOnly): The current state of the VirtualNetwork Rule

