# Microsoft.Sql @ 2017-03-01-preview

## Resource Microsoft.Sql/managedInstances/administrators@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ActiveDirectory' (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceAdministratorProperties](#managedinstanceadministratorproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDatabaseProperties](#manageddatabaseproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedBackupShortTermRetentionPolicyProperties](#managedbackupshorttermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedBackupShortTermRetentionPolicyProperties](#managedbackupshorttermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/securityAlertPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/auditingSettings@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBlobAuditingPolicyProperties](#serverblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/auditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of database. This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): Resource properties.
* **sku**: [Sku](#sku): The name and tier of the SKU.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/auditingSettings@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseBlobAuditingPolicyProperties](#databaseblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/auditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [LongTermRetentionPolicyProperties](#longtermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/extendedAuditingSettings@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedDatabaseBlobAuditingPolicyProperties](#extendeddatabaseblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/extendedAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentProperties](#databasevulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | 'master' (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentRuleBaselineProperties](#databasevulnerabilityassessmentrulebaselineproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/dnsAliases@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerDnsAliasProperties](#serverdnsaliasproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/dnsAliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/extendedAuditingSettings@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedServerBlobAuditingPolicyProperties](#extendedserverblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/extendedAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobAgentProperties](#jobagentproperties): Resource properties.
* **sku**: [Sku](#sku): The name and tier of the SKU.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers/jobAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/credentials@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobCredentialProperties](#jobcredentialproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/credentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/executions@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobExecutionProperties](#jobexecutionproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/executions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/steps@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobStepProperties](#jobstepproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/steps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/targetGroups@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobTargetGroupProperties](#jobtargetgroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/targetGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/securityAlertPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

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
DBCC_GROUP
DATABASE_OWNERSHIP_CHANGE_GROUP
DATABASE_CHANGE_GROUP

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

## DatabaseProperties
### Properties
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS' | string: Collation of the metadata catalog.
* **collation**: string: The collation of the database.
* **createMode**: 'Copy' | 'Default' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary' | 'RestoreLongTermRetentionBackup' | 'Secondary' | string (WriteOnly): Specifies the mode of database creation.

Default: regular database creation.

Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.

Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.

PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.

Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.

Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.

RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.

Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
* **creationDate**: string (ReadOnly): The creation date of the database (ISO8601 format).
* **currentServiceObjectiveName**: string (ReadOnly): The current service level objective name of the database.
* **databaseId**: string (ReadOnly): The ID of the database.
* **defaultSecondaryLocation**: string (ReadOnly): The default secondary region for this database.
* **elasticPoolId**: string: The resource identifier of the elastic pool containing this database.
* **failoverGroupId**: string (ReadOnly): Failover Group resource identifier that this database belongs to.
* **longTermRetentionBackupResourceId**: string (WriteOnly): The resource identifier of the long term retention backup associated with create operation of this database.
* **maxSizeBytes**: int: The max size of the database expressed in bytes.
* **recoverableDatabaseId**: string (WriteOnly): The resource identifier of the recoverable database associated with create operation of this database.
* **recoveryServicesRecoveryPointId**: string (WriteOnly): The resource identifier of the recovery point associated with create operation of this database.
* **restorableDroppedDatabaseId**: string (WriteOnly): The resource identifier of the restorable dropped database associated with create operation of this database.
* **restorePointInTime**: string (WriteOnly): Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sampleName**: 'AdventureWorksLT' | 'WideWorldImportersFull' | 'WideWorldImportersStd' | string (WriteOnly): The name of the sample schema to apply when creating this database.
* **sourceDatabaseDeletionDate**: string (WriteOnly): Specifies the time that the database was deleted.
* **sourceDatabaseId**: string (WriteOnly): The resource identifier of the source database associated with create operation of this database.
* **status**: 'AutoClosed' | 'Copying' | 'Creating' | 'EmergencyMode' | 'Inaccessible' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Paused' | 'Pausing' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Resuming' | 'Scaling' | 'Shutdown' | 'Standby' | 'Suspect' | string (ReadOnly): The status of the database.
* **zoneRedundant**: bool: Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.

## DatabaseVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): The recurring scans settings
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required.
* **storageContainerPath**: string (WriteOnly): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).  It is required if server level vulnerability assessment policy doesn't set
* **storageContainerSasKey**: string (WriteOnly): A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required.

## DatabaseVulnerabilityAssessmentRuleBaselineItem
### Properties
* **result**: string[] (Required): The rule baseline result

## DatabaseVulnerabilityAssessmentRuleBaselineProperties
### Properties
* **baselineResults**: [DatabaseVulnerabilityAssessmentRuleBaselineItem](#databasevulnerabilityassessmentrulebaselineitem)[] (Required): The rule baseline result

## ExtendedDatabaseBlobAuditingPolicyProperties
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
DBCC_GROUP
DATABASE_OWNERSHIP_CHANGE_GROUP
DATABASE_CHANGE_GROUP

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
* **predicateExpression**: string: Specifies condition of where clause when creating an audit.
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

## ExtendedServerBlobAuditingPolicyProperties
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
DBCC_GROUP
DATABASE_OWNERSHIP_CHANGE_GROUP
DATABASE_CHANGE_GROUP

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
* **predicateExpression**: string: Specifies condition of where clause when creating an audit.
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

## JobAgentProperties
### Properties
* **databaseId**: string (Required): Resource ID of the database to store job metadata in.
* **state**: 'Creating' | 'Deleting' | 'Disabled' | 'Ready' | 'Updating' | string (ReadOnly): The state of the job agent.

## JobCredentialProperties
### Properties
* **password**: string (Required, WriteOnly): The credential password.
* **username**: string (Required): The credential user name.

## JobExecutionProperties
### Properties
* **createTime**: string (ReadOnly): The time that the job execution was created.
* **currentAttempts**: int (ReadOnly): Number of times the job execution has been attempted.
* **currentAttemptStartTime**: string (ReadOnly): Start time of the current attempt.
* **endTime**: string (ReadOnly): The time that the job execution completed.
* **jobExecutionId**: string (ReadOnly): The unique identifier of the job execution.
* **jobVersion**: int (ReadOnly): The job version number.
* **lastMessage**: string (ReadOnly): The last status or error message.
* **lifecycle**: 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Skipped' | 'Succeeded' | 'SucceededWithSkipped' | 'TimedOut' | 'WaitingForChildJobExecutions' | 'WaitingForRetry' | string (ReadOnly): The detailed state of the job execution.
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The ARM provisioning state of the job execution.
* **startTime**: string (ReadOnly): The time that the job execution started.
* **stepId**: int (ReadOnly): The job step id.
* **stepName**: string (ReadOnly): The job step name.
* **target**: [JobExecutionTarget](#jobexecutiontarget) (ReadOnly): The target that this execution is executed on.

## JobExecutionTarget
### Properties
* **databaseName**: string (ReadOnly): The database name.
* **serverName**: string (ReadOnly): The server name.
* **type**: 'SqlDatabase' | 'SqlElasticPool' | 'SqlServer' | 'SqlShardMap' | 'TargetGroup' | string (ReadOnly): The type of the target.

## JobProperties
### Properties
* **description**: string: User-defined description of the job.
* **schedule**: [JobSchedule](#jobschedule): Schedule properties of the job.
* **version**: int (ReadOnly): The job version number.

## JobSchedule
### Properties
* **enabled**: bool: Whether or not the schedule is enabled.
* **endTime**: string: Schedule end time.
* **interval**: string: Value of the schedule's recurring interval, if the schedule type is recurring. ISO8601 duration format.
* **startTime**: string: Schedule start time.
* **type**: 'Once' | 'Recurring': Schedule interval type

## JobStepAction
### Properties
* **source**: 'Inline' | string: The source of the action to execute.
* **type**: 'TSql' | string: Type of action being executed by the job step.
* **value**: string (Required): The action value, for example the text of the T-SQL script to execute.

## JobStepExecutionOptions
### Properties
* **initialRetryIntervalSeconds**: int: Initial delay between retries for job step execution.
* **maximumRetryIntervalSeconds**: int: The maximum amount of time to wait between retries for job step execution.
* **retryAttempts**: int: Maximum number of times the job step will be reattempted if the first attempt fails.
* **retryIntervalBackoffMultiplier**: int: The backoff multiplier for the time between retries.
* **timeoutSeconds**: int: Execution timeout for the job step.

## JobStepOutput
### Properties
* **credential**: string (Required): The resource ID of the credential to use to connect to the output destination.
* **databaseName**: string (Required): The output destination database.
* **resourceGroupName**: string: The output destination resource group.
* **schemaName**: string: The output destination schema.
* **serverName**: string (Required): The output destination server name.
* **subscriptionId**: string: The output destination subscription id.
* **tableName**: string (Required): The output destination table.
* **type**: 'SqlDatabase' | string: The output destination type.

## JobStepProperties
### Properties
* **action**: [JobStepAction](#jobstepaction) (Required): The action payload of the job step.
* **credential**: string (Required): The resource ID of the job credential that will be used to connect to the targets.
* **executionOptions**: [JobStepExecutionOptions](#jobstepexecutionoptions): Execution options for the job step.
* **output**: [JobStepOutput](#jobstepoutput): Output destination properties of the job step.
* **stepId**: int: The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
* **targetGroup**: string (Required): The resource ID of the target group that the job step will be executed on.

## JobTarget
### Properties
* **databaseName**: string: The target database name.
* **elasticPoolName**: string: The target elastic pool name.
* **membershipType**: 'Exclude' | 'Include': Whether the target is included or excluded from the group.
* **refreshCredential**: string: The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target.
* **serverName**: string: The target server name.
* **shardMapName**: string: The target shard map.
* **type**: 'SqlDatabase' | 'SqlElasticPool' | 'SqlServer' | 'SqlShardMap' | 'TargetGroup' | string (Required): The target type.

## JobTargetGroupProperties
### Properties
* **members**: [JobTarget](#jobtarget)[] (Required): Members of the target group.

## LongTermRetentionPolicyProperties
### Properties
* **monthlyRetention**: string: The monthly retention policy for an LTR backup in an ISO 8601 format.
* **weeklyRetention**: string: The weekly retention policy for an LTR backup in an ISO 8601 format.
* **weekOfYear**: int: The week of year to take the yearly backup in an ISO 8601 format.
* **yearlyRetention**: string: The yearly retention policy for an LTR backup in an ISO 8601 format.

## ManagedBackupShortTermRetentionPolicyProperties
### Properties
* **retentionDays**: int: The backup retention period in days. This is how many days Point-in-Time Restore will be supported.

## ManagedDatabaseProperties
### Properties
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS' | string: Collation of the metadata catalog.
* **collation**: string: Collation of the managed database.
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup' | string (WriteOnly): Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore.
* **creationDate**: string (ReadOnly): Creation date of the database.
* **defaultSecondaryLocation**: string (ReadOnly): Geo paired region.
* **earliestRestorePoint**: string (ReadOnly): Earliest restore point in time for point in time restore.
* **failoverGroupId**: string (ReadOnly): Instance Failover Group resource identifier that this managed database belongs to.
* **longTermRetentionBackupResourceId**: string (WriteOnly): The name of the Long Term Retention backup to be used for restore of this managed database.
* **recoverableDatabaseId**: string (WriteOnly): The resource identifier of the recoverable database associated with create operation of this database.
* **restorableDroppedDatabaseId**: string (WriteOnly): The restorable dropped database resource id to restore when creating this database.
* **restorePointInTime**: string (WriteOnly): Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sourceDatabaseId**: string (WriteOnly): The resource identifier of the source database associated with create operation of this database.
* **status**: 'Creating' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Updating' | string (ReadOnly): Status of the database.
* **storageContainerSasToken**: string (WriteOnly): Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
* **storageContainerUri**: string (WriteOnly): Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.

## ManagedInstanceAdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' | string (Required): Type of the managed instance administrator.
* **login**: string (Required): Login name of the managed instance administrator.
* **sid**: string (Required): SID (object ID) of the managed instance administrator.
* **tenantId**: string: Tenant ID of the managed instance administrator.

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **disabledAlerts**: string[]: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action
* **emailAccountAdmins**: bool: Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string[]: Specifies an array of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' | 'New' (Required): Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
* **storageAccountAccessKey**: string: Specifies the identifier key of the Threat Detection audit storage account.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.

## SensitivityLabelProperties
### Properties
* **informationType**: string: The information type.
* **informationTypeId**: string: The information type ID.
* **isDisabled**: bool (ReadOnly): Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
* **labelId**: string: The label ID.
* **labelName**: string: The label name.
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None'

## ServerBlobAuditingPolicyProperties
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
DBCC_GROUP
DATABASE_OWNERSHIP_CHANGE_GROUP
DATABASE_CHANGE_GROUP

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

## ServerDnsAliasProperties
### Properties
* **azureDnsRecord**: string (ReadOnly): The fully qualified DNS record for alias

## Sku
### Properties
* **capacity**: int: Capacity of the particular SKU.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU, typically, a letter + Number code, e.g. P3.
* **size**: string: Size of the particular SKU
* **tier**: string: The tier or edition of the particular SKU, e.g. Basic, Premium.

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

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]: Specifies an array of e-mail addresses to which the scan notification is sent.
* **emailSubscriptionAdmins**: bool: Specifies that the schedule scan notification will be is sent to the subscription administrators.
* **isEnabled**: bool: Recurring scans state.

