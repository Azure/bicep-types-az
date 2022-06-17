# Microsoft.Sql @ 2015-05-01-preview

## Resource Microsoft.Sql/locations/usages@2015-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionUsageProperties](#subscriptionusageproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/locations/usages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The Azure Active Directory identity of the managed instance.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceProperties](#managedinstanceproperties): Resource properties.
* **sku**: [Sku](#sku): Managed instance SKU. Allowed values for sku.name: GP_Gen4, GP_Gen5, BC_Gen4, BC_Gen5
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The Azure Active Directory identity of the server.
* **kind**: string (ReadOnly): Kind of sql server. This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/advisors@2015-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvisorProperties](#advisorproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/advisors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/advisors@2015-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvisorProperties](#advisorproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/advisors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/advisors/recommendedActions@2015-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendedActionProperties](#recommendedactionproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/advisors/recommendedActions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/auditingSettings@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseBlobAuditingPolicyProperties](#databaseblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/auditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/automaticTuning@2015-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseAutomaticTuningProperties](#databaseautomatictuningproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/automaticTuning' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/syncGroups@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncGroupProperties](#syncgroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/syncGroups/syncMembers@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncMemberProperties](#syncmemberproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/syncGroups/syncMembers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/encryptionProtector@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionProtectorProperties](#encryptionprotectorproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/encryptionProtector' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/failoverGroups@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FailoverGroupProperties](#failovergroupproperties): Resource properties.
* **tags**: [FailoverGroupTags](#failovergrouptags): Resource tags.
* **type**: 'Microsoft.Sql/servers/failoverGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/firewallRules@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerFirewallRuleProperties](#serverfirewallruleproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/keys@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of encryption protector. This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerKeyProperties](#serverkeyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/syncAgents@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncAgentProperties](#syncagentproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/syncAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/virtualNetworkRules@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/virtualClusters@2015-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualClusterProperties](#virtualclusterproperties) (ReadOnly): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Sql/virtualClusters' (ReadOnly, DeployTimeConstant): The resource type

## AdvisorProperties
### Properties
* **advisorStatus**: 'GA' | 'LimitedPublicPreview' | 'PrivatePreview' | 'PublicPreview' (ReadOnly): Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
* **autoExecuteStatus**: 'Default' | 'Disabled' | 'Enabled' (Required): Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
* **autoExecuteStatusInheritedFrom**: 'Database' | 'Default' | 'ElasticPool' | 'Server' | 'Subscription' (ReadOnly): Gets the resource from which current value of auto-execute status is inherited. Auto-execute status can be set on (and inherited from) different levels in the resource hierarchy. Possible values are 'Subscription', 'Server', 'ElasticPool', 'Database' and 'Default' (when status is not explicitly set on any level).
* **lastChecked**: string (ReadOnly): Gets the time when the current resource was analyzed for recommendations by this advisor.
* **recommendationsStatus**: string (ReadOnly): Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available),LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.
* **recommendedActions**: [RecommendedAction](#recommendedaction)[] (ReadOnly): Gets the recommended actions for this advisor.

## AutomaticTuningOptions
### Properties
* **actualState**: 'Off' | 'On' (ReadOnly): Automatic tuning option actual state.
* **desiredState**: 'Default' | 'Off' | 'On': Automatic tuning option desired state.
* **reasonCode**: int (ReadOnly): Reason code if desired and actual state are different.
* **reasonDesc**: 'AutoConfigured' | 'Default' | 'Disabled' | 'InheritedFromServer' | 'NotSupported' | 'QueryStoreOff' | 'QueryStoreReadOnly' (ReadOnly): Reason description if desired and actual state are different.

## DatabaseAutomaticTuningProperties
### Properties
* **actualState**: 'Auto' | 'Custom' | 'Inherit' | 'Unspecified' (ReadOnly): Automatic tuning actual state.
* **desiredState**: 'Auto' | 'Custom' | 'Inherit' | 'Unspecified': Automatic tuning desired state.
* **options**: [DatabaseAutomaticTuningPropertiesOptions](#databaseautomatictuningpropertiesoptions): Automatic tuning options definition.

## DatabaseAutomaticTuningPropertiesOptions
### Properties
### Additional Properties
* **Additional Properties Type**: [AutomaticTuningOptions](#automatictuningoptions)

## DatabaseBlobAuditingPolicyProperties
### Properties
* **auditActionsAndGroups**: string[]: Specifies the Actions-Groups and Actions to audit.

The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:

BATCH_COMPLETED_GROUP,
SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
FAILED_DATABASE_AUTHENTICATION_GROUP.

This above combination is also the set that is configured by default when enabling auditing from the Azure portal.

The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):

APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
BACKUP_RESTORE_GROUP
DATABASE_LOGOUT_GROUP
DATABASE_OBJECT_CHANGE_GROUP
DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
DATABASE_OPERATION_GROUP
DATABASE_PERMISSION_CHANGE_GROUP
DATABASE_PRINCIPAL_CHANGE_GROUP
DATABASE_PRINCIPAL_IMPERSONATION_GROUP
DATABASE_ROLE_MEMBER_CHANGE_GROUP
FAILED_DATABASE_AUTHENTICATION_GROUP
SCHEMA_OBJECT_ACCESS_GROUP
SCHEMA_OBJECT_CHANGE_GROUP
SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
USER_CHANGE_PASSWORD_GROUP
BATCH_STARTED_GROUP
BATCH_COMPLETED_GROUP

These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.

For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).

For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
SELECT
UPDATE
INSERT
DELETE
EXECUTE
RECEIVE
REFERENCES

The general form for defining an action to be audited is:
{action} ON {object} BY {principal}

Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.

For example:
SELECT on dbo.myTable by public
SELECT on DATABASE::myDatabase by public
SELECT on SCHEMA::mySchema by public

For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
* **isAzureMonitorTargetEnabled**: bool: Specifies whether audit events are sent to Azure Monitor. 
In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.

When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
Note that for server level audit you should use the 'master' database as {databaseName}.

Diagnostic Settings URI format:
PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview

For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
* **isStorageSecondaryKeyInUse**: bool: Specifies whether storageAccountAccessKey value is the storage's secondary key.
* **queueDelayMs**: int: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
* **retentionDays**: int: Specifies the number of days to keep in the audit logs in the storage account.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the auditing storage account. 
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string: Specifies the blob storage subscription Id.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

## EncryptionProtectorProperties
### Properties
* **serverKeyName**: string: The name of the server key.
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' | string (Required): The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
* **subregion**: string (ReadOnly): Subregion of the encryption protector.
* **thumbprint**: string (ReadOnly): Thumbprint of the server key.
* **uri**: string (ReadOnly): The URI of the server key.

## FailoverGroupProperties
### Properties
* **databases**: string[]: List of databases in the failover group.
* **partnerServers**: [PartnerInfo](#partnerinfo)[] (Required): List of partner server information for the failover group.
* **readOnlyEndpoint**: [FailoverGroupReadOnlyEndpoint](#failovergroupreadonlyendpoint): Read-only endpoint of the failover group instance.
* **readWriteEndpoint**: [FailoverGroupReadWriteEndpoint](#failovergroupreadwriteendpoint) (Required): Read-write endpoint of the failover group instance.
* **replicationRole**: 'Primary' | 'Secondary' | string (ReadOnly): Local replication role of the failover group instance.
* **replicationState**: string (ReadOnly): Replication state of the failover group instance.

## FailoverGroupReadOnlyEndpoint
### Properties
* **failoverPolicy**: 'Disabled' | 'Enabled' | string: Failover policy of the read-only endpoint for the failover group.

## FailoverGroupReadWriteEndpoint
### Properties
* **failoverPolicy**: 'Automatic' | 'Manual' | string (Required): Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
* **failoverWithDataLossGracePeriodMinutes**: int: Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.

## FailoverGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedInstanceProperties
### Properties
* **administratorLogin**: string: Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
* **administratorLoginPassword**: string (WriteOnly): The administrator login password (required for managed instance creation).
* **collation**: string: Collation of the managed instance.
* **dnsZone**: string (ReadOnly): The Dns Zone that the managed instance is in.
* **dnsZonePartner**: string (WriteOnly): The resource id of another managed instance whose DNS zone this managed instance will share after creation.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the managed instance.
* **instancePoolId**: string: The Id of the instance pool this managed server belongs to.
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
* **maintenanceConfigurationId**: string: Specifies maintenance configuration id to apply to this managed instance.
* **managedInstanceCreateMode**: 'Default' | 'PointInTimeRestore' | string (WriteOnly): Specifies the mode of database creation.

Default: Regular instance creation.

Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
* **minimalTlsVersion**: string: Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect' | string: Connection type used for connecting to the instance.
* **publicDataEndpointEnabled**: bool: Whether or not the public data endpoint is enabled.
* **restorePointInTime**: string (WriteOnly): Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sourceManagedInstanceId**: string (WriteOnly): The resource identifier of the source managed instance associated with create operation of this instance.
* **state**: string (ReadOnly): The state of the managed instance.
* **storageSizeInGB**: int: Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only.
* **subnetId**: string: Subnet resource ID for the managed instance.
* **timezoneId**: string: Id of the timezone. Allowed values are timezones supported by Windows.
Windows keeps details on supported timezones, including the id, in registry under
KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
* **vCores**: int: The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.

## PartnerInfo
### Properties
* **id**: string (Required): Resource identifier of the partner server.
* **location**: string (ReadOnly): Geo location of the partner server.
* **replicationRole**: 'Primary' | 'Secondary' | string (ReadOnly): Replication role of the partner server.

## RecommendedAction
### Properties
* **id**: string (ReadOnly): Resource ID.
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RecommendedActionProperties](#recommendedactionproperties): Resource properties.
* **type**: string (ReadOnly): Resource type.

## RecommendedActionErrorInfo
### Properties
* **errorCode**: string (ReadOnly): Gets the reason why the recommended action was put to error state. e.g., DatabaseHasQdsOff, IndexAlreadyExists
* **isRetryable**: 'No' | 'Yes' (ReadOnly): Gets whether the error could be ignored and recommended action could be retried. Possible values are: Yes/No

## RecommendedActionImpactRecord
### Properties
* **absoluteValue**: int (ReadOnly): Gets the absolute value of this dimension if applicable. e.g., Number of Queries affected
* **changeValueAbsolute**: int (ReadOnly): Gets the absolute change in the value of this dimension. e.g., Absolute Disk space change in Megabytes
* **changeValueRelative**: int (ReadOnly): Gets the relative change in the value of this dimension. e.g., Relative Disk space change in Percentage
* **dimensionName**: string (ReadOnly): Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected.
* **unit**: string (ReadOnly): Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected.

## RecommendedActionImplementationInfo
### Properties
* **method**: 'AzurePowerShell' | 'TSql' (ReadOnly): Gets the method in which this recommended action can be manually implemented. e.g., TSql, AzurePowerShell.
* **script**: string (ReadOnly): Gets the manual implementation script. e.g., T-SQL script that could be executed on the database.

## RecommendedActionMetricInfo
### Properties
* **metricName**: string (ReadOnly): Gets the name of the metric. e.g., CPU, Number of Queries.
* **startTime**: string (ReadOnly): Gets the start time of time interval given by this MetricInfo.
* **timeGrain**: string (ReadOnly): Gets the duration of time interval for the value given by this MetricInfo. e.g., PT1H (1 hour)
* **unit**: string (ReadOnly): Gets the unit in which metric is measured. e.g., DTU, Frequency
* **value**: int (ReadOnly): Gets the value of the metric in the time interval given by this MetricInfo.

## RecommendedActionProperties
### Properties
* **details**: [RecommendedActionPropertiesDetails](#recommendedactionpropertiesdetails) (ReadOnly): Gets additional details specific to this recommended action.
* **errorDetails**: [RecommendedActionErrorInfo](#recommendedactionerrorinfo) (ReadOnly): Gets the error details if and why this recommended action is put to error state.
* **estimatedImpact**: [RecommendedActionImpactRecord](#recommendedactionimpactrecord)[] (ReadOnly): Gets the estimated impact info for this recommended action e.g., Estimated CPU gain, Estimated Disk Space change
* **executeActionDuration**: string (ReadOnly): Gets the time taken for applying this recommended action on user resource. e.g., time taken for index creation
* **executeActionInitiatedBy**: 'System' | 'User' (ReadOnly): Gets if approval for applying this recommended action was given by user/system.
* **executeActionInitiatedTime**: string (ReadOnly): Gets the time when this recommended action was approved for execution.
* **executeActionStartTime**: string (ReadOnly): Gets the time when system started applying this recommended action on the user resource. e.g., index creation start time
* **implementationDetails**: [RecommendedActionImplementationInfo](#recommendedactionimplementationinfo) (ReadOnly): Gets the implementation details of this recommended action for user to apply it manually.
* **isArchivedAction**: bool (ReadOnly): Gets if this recommended action was suggested some time ago but user chose to ignore this and system added a new recommended action again.
* **isExecutableAction**: bool (ReadOnly): Gets if this recommended action is actionable by user
* **isRevertableAction**: bool (ReadOnly): Gets if changes applied by this recommended action can be reverted by user
* **lastRefresh**: string (ReadOnly): Gets time when this recommended action was last refreshed.
* **linkedObjects**: string[] (ReadOnly): Gets the linked objects, if any.
* **observedImpact**: [RecommendedActionImpactRecord](#recommendedactionimpactrecord)[] (ReadOnly): Gets the observed/actual impact info for this recommended action e.g., Actual CPU gain, Actual Disk Space change
* **recommendationReason**: string (ReadOnly): Gets the reason for recommending this action. e.g., DuplicateIndex
* **revertActionDuration**: string (ReadOnly): Gets the time taken for reverting changes of this recommended action on user resource. e.g., time taken for dropping the created index.
* **revertActionInitiatedBy**: 'System' | 'User' (ReadOnly): Gets if approval for reverting this recommended action was given by user/system.
* **revertActionInitiatedTime**: string (ReadOnly): Gets the time when this recommended action was approved for revert.
* **revertActionStartTime**: string (ReadOnly): Gets the time when system started reverting changes of this recommended action on user resource. e.g., time when index drop is executed.
* **score**: int (ReadOnly): Gets the impact of this recommended action. Possible values are 1 - Low impact, 2 - Medium Impact and 3 - High Impact
* **state**: [RecommendedActionStateInfo](#recommendedactionstateinfo) (Required): Gets the info of the current state the recommended action is in.
* **timeSeries**: [RecommendedActionMetricInfo](#recommendedactionmetricinfo)[] (ReadOnly): Gets the time series info of metrics for this recommended action e.g., CPU consumption time series
* **validSince**: string (ReadOnly): Gets the time since when this recommended action is valid.

## RecommendedActionPropertiesDetails
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RecommendedActionStateInfo
### Properties
* **actionInitiatedBy**: 'System' | 'User' (ReadOnly): Gets who initiated the execution of this recommended action. Possible Value are: User    -> When user explicitly notified system to apply the recommended action. System  -> When auto-execute status of this advisor was set to 'Enabled', in which case the system applied it.
* **currentValue**: 'Active' | 'Error' | 'Executing' | 'Expired' | 'Ignored' | 'Monitoring' | 'Pending' | 'PendingRevert' | 'Resolved' | 'RevertCancelled' | 'Reverted' | 'Reverting' | 'Success' | 'Verifying' | string (Required): Current state the recommended action is in. Some commonly used states are: Active      -> recommended action is active and no action has been taken yet. Pending     -> recommended action is approved for and is awaiting execution. Executing   -> recommended action is being applied on the user database. Verifying   -> recommended action was applied and is being verified of its usefulness by the system. Success     -> recommended action was applied and improvement found during verification. Pending Revert  -> verification found little or no improvement so recommended action is queued for revert or user has manually reverted. Reverting   -> changes made while applying recommended action are being reverted on the user database. Reverted    -> successfully reverted the changes made by recommended action on user database. Ignored     -> user explicitly ignored/discarded the recommended action.
* **lastModified**: string (ReadOnly): Gets the time when the state was last modified

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string: The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.

## ServerFirewallRuleProperties
### Properties
* **endIpAddress**: string: The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' for all Azure-internal IP addresses.
* **startIpAddress**: string: The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' for all Azure-internal IP addresses.

## ServerKeyProperties
### Properties
* **creationDate**: string: The server key creation date.
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' | string (Required): The server key type like 'ServiceManaged', 'AzureKeyVault'.
* **subregion**: string (ReadOnly): Subregion of the server key.
* **thumbprint**: string: Thumbprint of the server key.
* **uri**: string: The URI of the server key.

## ServerProperties
### Properties
* **administratorLogin**: string: Administrator username for the server. Once created it cannot be changed.
* **administratorLoginPassword**: string (WriteOnly): The administrator login password (required for server creation).
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the server.
* **state**: string (ReadOnly): The state of the server.
* **version**: string: The version of the server.

## Sku
### Properties
* **capacity**: int: Capacity of the particular SKU.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU, typically, a letter + Number code, e.g. P3.
* **size**: string: Size of the particular SKU
* **tier**: string: The tier or edition of the particular SKU, e.g. Basic, Premium.

## SubscriptionUsageProperties
### Properties
* **currentValue**: int (ReadOnly): Current value of the metric.
* **displayName**: string (ReadOnly): User-readable name of the metric.
* **limit**: int (ReadOnly): Boundary value of the metric.
* **unit**: string (ReadOnly): Unit of the metric.

## SyncAgentProperties
### Properties
* **expiryTime**: string (ReadOnly): Expiration time of the sync agent version.
* **isUpToDate**: bool (ReadOnly): If the sync agent version is up to date.
* **lastAliveTime**: string (ReadOnly): Last alive time of the sync agent.
* **name**: string (ReadOnly): Name of the sync agent.
* **state**: 'NeverConnected' | 'Offline' | 'Online' | string (ReadOnly): State of the sync agent.
* **syncDatabaseId**: string: ARM resource id of the sync database in the sync agent.
* **version**: string (ReadOnly): Version of the sync agent.

## SyncGroupProperties
### Properties
* **conflictResolutionPolicy**: 'HubWin' | 'MemberWin' | string: Conflict resolution policy of the sync group.
* **hubDatabasePassword**: string (WriteOnly): Password for the sync group hub database credential.
* **hubDatabaseUserName**: string: User name for the sync group hub database credential.
* **interval**: int: Sync interval of the sync group.
* **lastSyncTime**: string (ReadOnly): Last sync time of the sync group.
* **schema**: [SyncGroupSchema](#syncgroupschema): Sync schema of the sync group.
* **syncDatabaseId**: string: ARM resource id of the sync database in the sync group.
* **syncState**: 'Error' | 'Good' | 'NotReady' | 'Progressing' | 'Warning' | string (ReadOnly): Sync state of the sync group.

## SyncGroupSchema
### Properties
* **masterSyncMemberName**: string: Name of master sync member where the schema is from.
* **tables**: [SyncGroupSchemaTable](#syncgroupschematable)[]: List of tables in sync group schema.

## SyncGroupSchemaTable
### Properties
* **columns**: [SyncGroupSchemaTableColumn](#syncgroupschematablecolumn)[]: List of columns in sync group schema.
* **quotedName**: string: Quoted name of sync group schema table.

## SyncGroupSchemaTableColumn
### Properties
* **dataSize**: string: Data size of the column.
* **dataType**: string: Data type of the column.
* **quotedName**: string: Quoted name of sync group table column.

## SyncMemberProperties
### Properties
* **databaseName**: string: Database name of the member database in the sync member.
* **databaseType**: 'AzureSqlDatabase' | 'SqlServerDatabase' | string: Database type of the sync member.
* **password**: string (WriteOnly): Password of the member database in the sync member.
* **serverName**: string: Server name of the member database in the sync member
* **sqlServerDatabaseId**: string: SQL Server database id of the sync member.
* **syncAgentId**: string: ARM resource id of the sync agent in the sync member.
* **syncDirection**: 'Bidirectional' | 'OneWayHubToMember' | 'OneWayMemberToHub' | string: Sync direction of the sync member.
* **syncState**: 'DeProvisionFailed' | 'DeProvisioned' | 'DeProvisioning' | 'DisabledBackupRestore' | 'DisabledTombstoneCleanup' | 'ProvisionFailed' | 'Provisioned' | 'Provisioning' | 'ReprovisionFailed' | 'Reprovisioning' | 'SyncCancelled' | 'SyncCancelling' | 'SyncFailed' | 'SyncInProgress' | 'SyncSucceeded' | 'SyncSucceededWithWarnings' | 'UnProvisioned' | 'UnReprovisioned' | string (ReadOnly): Sync state of the sync member.
* **userName**: string: User name of the member database in the sync member.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualClusterProperties
### Properties
* **childResources**: string[] (ReadOnly): List of resources in this virtual cluster.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **subnetId**: string (ReadOnly): Subnet resource ID for the virtual cluster.

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool: Create firewall rule before the virtual network has vnet service endpoint enabled.
* **state**: 'Deleting' | 'InProgress' | 'Initializing' | 'Ready' | 'Unknown' | string (ReadOnly): Virtual Network Rule State
* **virtualNetworkSubnetId**: string (Required): The ARM resource id of the virtual network subnet.

