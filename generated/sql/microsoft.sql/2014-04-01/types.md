# Microsoft.Sql @ 2014-04-01

## Resource Microsoft.Sql/servers@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of sql server.  This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Represents the properties of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/administrators@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'activeDirectory' (Required, DeployTimeConstant): The resource name
* **properties**: [ServerAdministratorProperties](#serveradministratorproperties): The properties of the resource.
* **type**: 'Microsoft.Sql/servers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/advisors@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvisorProperties](#advisorproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/advisors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/auditingPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerTableAuditingPolicyProperties](#servertableauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/auditingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/communicationLinks@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Communication link kind.  This property is used for Azure Portal metadata.
* **location**: string (ReadOnly): Communication link location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerCommunicationLinkProperties](#servercommunicationlinkproperties): The properties of resource.
* **type**: 'Microsoft.Sql/servers/communicationLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/connectionPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerConnectionPolicyProperties](#serverconnectionpolicyproperties): The properties of the server secure connection policy.
* **type**: 'Microsoft.Sql/servers/connectionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of database.  This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties representing the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/advisors@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvisorProperties](#advisorproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/advisors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/auditingPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseTableAuditingPolicyProperties](#databasetableauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/auditingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseConnectionPolicyProperties](#databaseconnectionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/connectionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/dataMaskingPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of data masking policy. Metadata, used for Azure portal.
* **location**: string (ReadOnly): The location of the data masking policy.
* **name**: 'Default' (Required, DeployTimeConstant): The resource name
* **properties**: [DataMaskingPolicyProperties](#datamaskingpolicyproperties): The properties of the data masking policy.
* **type**: 'Microsoft.Sql/servers/databases/dataMaskingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of Data Masking Rule. Metadata, used for Azure portal.
* **location**: string (ReadOnly): The location of the data masking rule.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMaskingRuleProperties](#datamaskingruleproperties): The properties of the resource.
* **type**: 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/extensions@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'import' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ImportExtensionProperties](#importextensionproperties) (WriteOnly): Represents the properties of the resource.
* **type**: 'Microsoft.Sql/servers/databases/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/geoBackupPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of geo backup policy.  This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Backup policy location.
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [GeoBackupPolicyProperties](#geobackuppolicyproperties) (Required): The properties of the geo backup policy.
* **type**: 'Microsoft.Sql/servers/databases/geoBackupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string: The geo-location where the resource lives
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseSecurityAlertPolicyProperties](#databasesecurityalertpolicyproperties): Properties of the security alert policy.
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/transparentDataEncryption@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties): Represents the properties of the resource.
* **type**: 'Microsoft.Sql/servers/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/disasterRecoveryConfiguration@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the server that contains this disaster recovery configuration.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DisasterRecoveryConfigurationProperties](#disasterrecoveryconfigurationproperties) (ReadOnly): The properties representing the resource.
* **type**: 'Microsoft.Sql/servers/disasterRecoveryConfiguration' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/elasticPools@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of elastic pool.  This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ElasticPoolProperties](#elasticpoolproperties): The properties representing the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers/elasticPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/firewallRules@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of server that contains this firewall rule.
* **location**: string (ReadOnly): Location of the server that contains this firewall rule.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties): The properties representing the resource.
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## AdvisorProperties
### Properties
* **advisorStatus**: 'GA' | 'LimitedPublicPreview' | 'PrivatePreview' | 'PublicPreview' (ReadOnly): Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
* **autoExecuteValue**: 'Default' | 'Disabled' | 'Enabled' (Required): Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
* **lastChecked**: string (ReadOnly): Gets the time when the current resource was analyzed for recommendations by this advisor.
* **recommendationsStatus**: string (ReadOnly): Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available), LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.

## DatabaseConnectionPolicyProperties
### Properties
* **proxyDnsName**: string: The fully qualified host name of the auditing proxy.
* **proxyPort**: string: The port number of the auditing proxy.
* **redirectionState**: string: The state of proxy redirection.
* **securityEnabledAccess**: string: The state of security access.
* **state**: string: The connection policy state.
* **useServerDefault**: string: Whether server default is enabled or disabled.
* **visibility**: string: The visibility of the auditing proxy.

## DatabaseProperties
### Properties
* **collation**: string: The collation of the database. If createMode is not Default, this value is ignored.
* **containmentState**: int (ReadOnly): The containment state of the database.
* **createMode**: 'Copy' | 'Default' | 'NonReadableSecondary' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreLongTermRetentionBackup' | string (WriteOnly): Specifies the mode of database creation.

Default: regular database creation.

Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.

OnlineSecondary/NonReadableSecondary: creates a database as a (readable or nonreadable) secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.

PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.

Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.

Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.

RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.

Copy, NonReadableSecondary, OnlineSecondary and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
* **creationDate**: string (ReadOnly): The creation date of the database (ISO8601 format).
* **currentServiceObjectiveId**: string (ReadOnly): The current service level objective ID of the database. This is the ID of the service level objective that is currently active.
* **databaseId**: string (ReadOnly): The ID of the database.
* **defaultSecondaryLocation**: string (ReadOnly): The default secondary region for this database.
* **earliestRestoreDate**: string (ReadOnly): This records the earliest start date and time that restore is available for this database (ISO8601 format).
* **edition**: 'Basic' | 'Business' | 'BusinessCritical' | 'DataWarehouse' | 'Free' | 'GeneralPurpose' | 'Hyperscale' | 'Premium' | 'PremiumRS' | 'Standard' | 'Stretch' | 'System' | 'System2' | 'Web' | string: The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.

The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:

```azurecli
az sql db list-editions -l <location> -o table
````

```powershell
Get-AzSqlServerServiceObjective -Location <location>
````
* **elasticPoolName**: string: The name of the elastic pool the database is in. If elasticPoolName and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveName is ignored. Not supported for DataWarehouse edition.
* **failoverGroupId**: string (ReadOnly): The resource identifier of the failover group containing this database.
* **maxSizeBytes**: string: The max size of the database expressed in bytes. If createMode is not Default, this value is ignored. To see possible values, query the capabilities API (/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationID}/capabilities) referred to by operationId: "Capabilities_ListByLocation."
* **readScale**: 'Disabled' | 'Enabled': Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
* **recommendedIndex**: [RecommendedIndex](#recommendedindex)[] (ReadOnly): The recommended indices for this database.
* **recoveryServicesRecoveryPointResourceId**: string (WriteOnly): Conditional. If createMode is RestoreLongTermRetentionBackup, then this value is required. Specifies the resource ID of the recovery point to restore from.
* **requestedServiceObjectiveId**: string: The configured service level objective ID of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of currentServiceObjectiveId property. If requestedServiceObjectiveId and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveId overrides the value of requestedServiceObjectiveName.

The list of SKUs may vary by region and support offer. To determine the service objective ids that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API.
* **requestedServiceObjectiveName**: 'Basic' | 'DS100' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS200' | 'DS2000' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DW100' | 'DW1000' | 'DW10000c' | 'DW1000c' | 'DW1200' | 'DW1500' | 'DW15000c' | 'DW1500c' | 'DW200' | 'DW2000' | 'DW2000c' | 'DW2500c' | 'DW300' | 'DW3000' | 'DW30000c' | 'DW3000c' | 'DW400' | 'DW500' | 'DW5000c' | 'DW600' | 'DW6000' | 'DW6000c' | 'DW7500c' | 'ElasticPool' | 'Free' | 'P1' | 'P11' | 'P15' | 'P2' | 'P3' | 'P4' | 'P6' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'S0' | 'S1' | 'S12' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'System' | 'System0' | 'System1' | 'System2' | 'System2L' | 'System3' | 'System3L' | 'System4' | 'System4L' | string: The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property. 

The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:

```azurecli
az sql db list-editions -l <location> -o table
````

```powershell
Get-AzSqlServerServiceObjective -Location <location>
````
* **restorePointInTime**: string (WriteOnly): Conditional. If createMode is PointInTimeRestore, this value is required. If createMode is Restore, this value is optional. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value.
* **sampleName**: 'AdventureWorksLT' | string (WriteOnly): Indicates the name of the sample schema to apply when creating this database. If createMode is not Default, this value is ignored. Not supported for DataWarehouse edition.
* **serviceLevelObjective**: 'Basic' | 'DS100' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS200' | 'DS2000' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DW100' | 'DW1000' | 'DW10000c' | 'DW1000c' | 'DW1200' | 'DW1500' | 'DW15000c' | 'DW1500c' | 'DW200' | 'DW2000' | 'DW2000c' | 'DW2500c' | 'DW300' | 'DW3000' | 'DW30000c' | 'DW3000c' | 'DW400' | 'DW500' | 'DW5000c' | 'DW600' | 'DW6000' | 'DW6000c' | 'DW7500c' | 'ElasticPool' | 'Free' | 'P1' | 'P11' | 'P15' | 'P2' | 'P3' | 'P4' | 'P6' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'S0' | 'S1' | 'S12' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'System' | 'System0' | 'System1' | 'System2' | 'System2L' | 'System3' | 'System3L' | 'System4' | 'System4L' | string (ReadOnly): The current service level objective of the database.
* **serviceTierAdvisors**: [ServiceTierAdvisor](#servicetieradvisor)[] (ReadOnly): The list of service tier advisors for this database. Expanded property
* **sourceDatabaseDeletionDate**: string (WriteOnly): Conditional. If createMode is Restore and sourceDatabaseId is the deleted database's original resource id when it existed (as opposed to its current restorable dropped database id), then this value is required. Specifies the time that the database was deleted.
* **sourceDatabaseId**: string (WriteOnly): Conditional. If createMode is Copy, NonReadableSecondary, OnlineSecondary, PointInTimeRestore, Recovery, or Restore, then this value is required. Specifies the resource ID of the source database. If createMode is NonReadableSecondary or OnlineSecondary, the name of the source database must be the same as the new database being created.
* **status**: string (ReadOnly): The status of the database.
* **transparentDataEncryption**: [TransparentDataEncryption](#transparentdataencryption)[] (ReadOnly): The transparent data encryption info for this database.
* **zoneRedundant**: bool: Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.

## DatabaseSecurityAlertPolicyProperties
### Properties
* **disabledAlerts**: string: Specifies the semicolon-separated list of alerts that are disabled, or empty string to disable no alerts. Possible values: Sql_Injection; Sql_Injection_Vulnerability; Access_Anomaly; Data_Exfiltration; Unsafe_Action.
* **emailAccountAdmins**: 'Disabled' | 'Enabled': Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string: Specifies the semicolon-separated list of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' | 'New' (Required): Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the Threat Detection audit storage account. If state is Enabled, storageAccountAccessKey is required.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. If state is Enabled, storageEndpoint is required.
* **useServerDefault**: 'Disabled' | 'Enabled': Specifies whether to use the default server policy.

## DatabaseTableAuditingPolicyProperties
### Properties
* **auditingState**: string: The state of the policy.
* **auditLogsTableName**: string: The audit logs table name.
* **eventTypesToAudit**: string: Comma-separated list of event types to audit.
* **fullAuditLogsTableName**: string: The full audit logs table name.
* **retentionDays**: string: The number of days to keep in the audit logs.
* **storageAccountKey**: string: The key of the auditing storage account.
* **storageAccountName**: string: The table storage account name
* **storageAccountResourceGroupName**: string: The table storage account resource group name
* **storageAccountSecondaryKey**: string: The secondary key of the auditing storage account.
* **storageAccountSubscriptionId**: string: The table storage subscription Id.
* **storageTableEndpoint**: string: The storage table endpoint.
* **useServerDefault**: string: Whether server default is enabled or disabled.

## DataMaskingPolicyProperties
### Properties
* **applicationPrincipals**: string (ReadOnly): The list of the application principals. This is a legacy parameter and is no longer used.
* **dataMaskingState**: 'Disabled' | 'Enabled' (Required): The state of the data masking policy.
* **exemptPrincipals**: string: The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries.
* **maskingLevel**: string (ReadOnly): The masking level. This is a legacy parameter and is no longer used.

## DataMaskingRuleProperties
### Properties
* **aliasName**: string: The alias name. This is a legacy parameter and is no longer used.
* **columnName**: string (Required): The column name on which the data masking rule is applied.
* **id**: string (ReadOnly): The rule Id.
* **maskingFunction**: 'CCN' | 'Default' | 'Email' | 'Number' | 'SSN' | 'Text' (Required): The masking function that is used for the data masking rule.
* **numberFrom**: string: The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored.
* **numberTo**: string: The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored.
* **prefixSize**: string: If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored.
* **replacementString**: string: If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored.
* **ruleState**: 'Disabled' | 'Enabled': The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState.
* **schemaName**: string (Required): The schema name on which the data masking rule is applied.
* **suffixSize**: string: If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored.
* **tableName**: string (Required): The table name on which the data masking rule is applied.

## DisasterRecoveryConfigurationProperties
### Properties
* **autoFailover**: 'Off' | 'On' | string (Required): Whether or not failover can be done automatically.
* **failoverPolicy**: 'Automatic' | 'Manual' | string (Required): How aggressive the automatic failover should be.
* **logicalServerName**: string (ReadOnly): Logical name of the server.
* **partnerLogicalServerName**: string (ReadOnly): Logical name of the partner server.
* **partnerServerId**: string (Required): Id of the partner server.
* **role**: 'None' | 'Primary' | 'Secondary' | string (ReadOnly): The role of the current server in the disaster recovery configuration.
* **status**: 'Creating' | 'Dropping' | 'FailingOver' | 'Ready' | string (ReadOnly): The status of the disaster recovery configuration.

## ElasticPoolProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of the elastic pool (ISO8601 format).
* **databaseDtuMax**: int: The maximum DTU any one database can consume.
* **databaseDtuMin**: int: The minimum DTU all databases are guaranteed.
* **dtu**: int: The total shared DTU for the database elastic pool.
* **edition**: 'Basic' | 'BusinessCritical' | 'GeneralPurpose' | 'Premium' | 'Standard' | string: The edition of the elastic pool.
* **state**: 'Creating' | 'Disabled' | 'Ready' | string (ReadOnly): The state of the elastic pool.
* **storageMB**: int: Gets storage limit for the database elastic pool in MB.
* **zoneRedundant**: bool: Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones.

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required): The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
* **startIpAddress**: string (Required): The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.

## GeoBackupPolicyProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): The state of the geo backup policy.
* **storageType**: string (ReadOnly): The storage type of the geo backup policy.

## ImportExtensionProperties
### Properties
* **administratorLogin**: string (Required): The name of the SQL administrator.
* **administratorLoginPassword**: string (Required): The password of the SQL administrator.
* **authenticationType**: 'ADPassword' | 'SQL': The authentication type.
* **operationMode**: 'Import' (Required): The type of import operation being performed. This is always Import.
* **storageKey**: string (Required): The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a "?."
* **storageKeyType**: 'SharedAccessKey' | 'StorageAccessKey' (Required): The type of the storage key to use.
* **storageUri**: string (Required): The storage uri to use.

## OperationImpact
### Properties
* **changeValueAbsolute**: int (ReadOnly): The absolute impact to dimension.
* **changeValueRelative**: int (ReadOnly): The relative impact to dimension (null if not applicable)
* **name**: string (ReadOnly): The name of the impact dimension.
* **unit**: string (ReadOnly): The unit in which estimated impact to dimension is measured.

## RecommendedIndex
### Properties
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RecommendedIndexProperties](#recommendedindexproperties) (ReadOnly): The properties representing the resource.
* **type**: string (ReadOnly): Resource type.

## RecommendedIndexProperties
### Properties
* **action**: 'Create' | 'Drop' | 'Rebuild' (ReadOnly): The proposed index action. You can create a missing index, drop an unused index, or rebuild an existing index to improve its performance.
* **columns**: string[] (ReadOnly): Columns over which to build index
* **created**: string (ReadOnly): The UTC datetime showing when this resource was created (ISO8601 format).
* **estimatedImpact**: [OperationImpact](#operationimpact)[] (ReadOnly): The estimated impact of doing recommended index action.
* **includedColumns**: string[] (ReadOnly): The list of column names to be included in the index
* **indexScript**: string (ReadOnly): The full build index script
* **indexType**: 'CLUSTERED COLUMNSTORE' | 'CLUSTERED' | 'COLUMNSTORE' | 'NONCLUSTERED' (ReadOnly): The type of index (CLUSTERED, NONCLUSTERED, COLUMNSTORE, CLUSTERED COLUMNSTORE)
* **lastModified**: string (ReadOnly): The UTC datetime of when was this resource last changed (ISO8601 format).
* **reportedImpact**: [OperationImpact](#operationimpact)[] (ReadOnly): The values reported after index action is complete.
* **schema**: string (ReadOnly): The schema where table to build index over resides
* **state**: 'Active' | 'Blocked' | 'Executing' | 'Expired' | 'Ignored' | 'Pending Revert' | 'Pending' | 'Reverted' | 'Reverting' | 'Success' | 'Verifying' (ReadOnly): The current recommendation state.
* **table**: string (ReadOnly): The table on which to build index.

## ServerAdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' (Required): The type of administrator.
* **login**: string (Required): The server administrator login value.
* **sid**: string (Required): The server administrator Sid (Secure ID).
* **tenantId**: string (Required): The server Active Directory Administrator tenant id.

## ServerCommunicationLinkProperties
### Properties
* **partnerServer**: string (Required): The name of the partner server.
* **state**: string (ReadOnly): The state.

## ServerConnectionPolicyProperties
### Properties
* **connectionType**: 'Default' | 'Proxy' | 'Redirect' (Required): The server connection type.

## ServerProperties
### Properties
* **administratorLogin**: string: Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string (WriteOnly): The administrator login password (required for server creation).
* **externalAdministratorLogin**: string (ReadOnly): The display name of the Azure Active Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators
* **externalAdministratorSid**: string (ReadOnly): The ID of the Active Azure Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the server.
* **state**: 'Disabled' | 'Ready' (ReadOnly): The state of the server.
* **version**: '12.0' | '2.0' | string: The version of the server.

## ServerTableAuditingPolicyProperties
### Properties
* **auditingState**: string: The state of the policy.
* **auditLogsTableName**: string: The audit logs table name.
* **eventTypesToAudit**: string: Comma-separated list of event types to audit.
* **fullAuditLogsTableName**: string: The full audit logs table name.
* **retentionDays**: string: The number of days to keep in the audit logs.
* **storageAccountKey**: string: The key of the auditing storage account.
* **storageAccountName**: string: The table storage account name
* **storageAccountResourceGroupName**: string: The table storage account resource group name
* **storageAccountSecondaryKey**: string: The secondary key of the auditing storage account.
* **storageAccountSubscriptionId**: string: The table storage subscription Id.
* **storageTableEndpoint**: string: The storage table endpoint.

## ServiceTierAdvisor
### Properties
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ServiceTierAdvisorProperties](#servicetieradvisorproperties) (ReadOnly): The properties representing the resource.
* **type**: string (ReadOnly): Resource type.

## ServiceTierAdvisorProperties
### Properties
* **activeTimeRatio**: int (ReadOnly): The activeTimeRatio for service tier advisor.
* **avgDtu**: int (ReadOnly): Gets or sets avgDtu for service tier advisor.
* **confidence**: int (ReadOnly): Gets or sets confidence for service tier advisor.
* **currentServiceLevelObjective**: string (ReadOnly): Gets or sets currentServiceLevelObjective for service tier advisor.
* **currentServiceLevelObjectiveId**: string (ReadOnly): Gets or sets currentServiceLevelObjectiveId for service tier advisor.
* **databaseSizeBasedRecommendationServiceLevelObjective**: string (ReadOnly): Gets or sets databaseSizeBasedRecommendationServiceLevelObjective for service tier advisor.
* **databaseSizeBasedRecommendationServiceLevelObjectiveId**: string (ReadOnly): Gets or sets databaseSizeBasedRecommendationServiceLevelObjectiveId for service tier advisor.
* **disasterPlanBasedRecommendationServiceLevelObjective**: string (ReadOnly): Gets or sets disasterPlanBasedRecommendationServiceLevelObjective for service tier advisor.
* **disasterPlanBasedRecommendationServiceLevelObjectiveId**: string (ReadOnly): Gets or sets disasterPlanBasedRecommendationServiceLevelObjectiveId for service tier advisor.
* **maxDtu**: int (ReadOnly): Gets or sets maxDtu for service tier advisor.
* **maxSizeInGB**: int (ReadOnly): Gets or sets maxSizeInGB for service tier advisor.
* **minDtu**: int (ReadOnly): Gets or sets minDtu for service tier advisor.
* **observationPeriodEnd**: string (ReadOnly): The observation period start (ISO8601 format).
* **observationPeriodStart**: string (ReadOnly): The observation period start (ISO8601 format).
* **overallRecommendationServiceLevelObjective**: string (ReadOnly): Gets or sets overallRecommendationServiceLevelObjective for service tier advisor.
* **overallRecommendationServiceLevelObjectiveId**: string (ReadOnly): Gets or sets overallRecommendationServiceLevelObjectiveId for service tier advisor.
* **serviceLevelObjectiveUsageMetrics**: [SloUsageMetric](#slousagemetric)[] (ReadOnly): Gets or sets serviceLevelObjectiveUsageMetrics for the service tier advisor.
* **usageBasedRecommendationServiceLevelObjective**: string (ReadOnly): Gets or sets usageBasedRecommendationServiceLevelObjective for service tier advisor.
* **usageBasedRecommendationServiceLevelObjectiveId**: string (ReadOnly): Gets or sets usageBasedRecommendationServiceLevelObjectiveId for service tier advisor.

## SloUsageMetric
### Properties
* **inRangeTimeRatio**: int (ReadOnly): Gets or sets inRangeTimeRatio for SLO usage metric.
* **serviceLevelObjective**: 'Basic' | 'DS100' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS200' | 'DS2000' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DW100' | 'DW1000' | 'DW10000c' | 'DW1000c' | 'DW1200' | 'DW1500' | 'DW15000c' | 'DW1500c' | 'DW200' | 'DW2000' | 'DW2000c' | 'DW2500c' | 'DW300' | 'DW3000' | 'DW30000c' | 'DW3000c' | 'DW400' | 'DW500' | 'DW5000c' | 'DW600' | 'DW6000' | 'DW6000c' | 'DW7500c' | 'ElasticPool' | 'Free' | 'P1' | 'P11' | 'P15' | 'P2' | 'P3' | 'P4' | 'P6' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'S0' | 'S1' | 'S12' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'System' | 'System0' | 'System1' | 'System2' | 'System2L' | 'System3' | 'System3L' | 'System4' | 'System4L' | string (ReadOnly): The serviceLevelObjective for SLO usage metric.
* **serviceLevelObjectiveId**: string (ReadOnly): The serviceLevelObjectiveId for SLO usage metric.

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

## TransparentDataEncryption
### Properties
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties): Represents the properties of the resource.
* **type**: string (ReadOnly): Resource type.

## TransparentDataEncryptionProperties
### Properties
* **status**: 'Disabled' | 'Enabled': The status of the database transparent data encryption.

