# Microsoft.Sql @ 2017-03-01-preview

## Resource Microsoft.Sql/managedInstances/databases@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedDatabaseProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ManagedBackupShortTermRetentionPolicyProperties
* **type**: 'Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: SecurityAlertPolicyProperties
* **type**: 'Microsoft.Sql/managedInstances/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ManagedBackupShortTermRetentionPolicyProperties
* **type**: 'Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/securityAlertPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: SecurityAlertPolicyProperties
* **type**: 'Microsoft.Sql/managedInstances/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseProperties
* **sku**: Sku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: LongTermRetentionPolicyProperties
* **type**: 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: DatabaseVulnerabilityAssessmentProperties
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobAgentProperties
* **sku**: Sku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Sql/servers/jobAgents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents/credentials@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobCredentialProperties
* **type**: 'Microsoft.Sql/servers/jobAgents/credentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents/jobs@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobProperties
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents/jobs/steps@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobStepProperties
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/steps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents/targetGroups@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobTargetGroupProperties
* **type**: 'Microsoft.Sql/servers/jobAgents/targetGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/securityAlertPolicies@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: SecurityAlertPolicyProperties
* **type**: 'Microsoft.Sql/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## ManagedDatabaseProperties
### Properties
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup'
* **creationDate**: string (ReadOnly)
* **defaultSecondaryLocation**: string (ReadOnly)
* **earliestRestorePoint**: string (ReadOnly)
* **failoverGroupId**: string (ReadOnly)
* **longTermRetentionBackupResourceId**: string
* **recoverableDatabaseId**: string
* **restorableDroppedDatabaseId**: string
* **restorePointInTime**: string
* **sourceDatabaseId**: string
* **status**: 'Creating' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Updating' (ReadOnly)
* **storageContainerSasToken**: string
* **storageContainerUri**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedBackupShortTermRetentionPolicyProperties
### Properties
* **retentionDays**: int

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly)
* **disabledAlerts**: string[]
* **emailAccountAdmins**: bool
* **emailAddresses**: string[]
* **retentionDays**: int
* **storageAccountAccessKey**: string
* **storageEndpoint**: string

## DatabaseProperties
### Properties
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string
* **createMode**: 'Copy' | 'Default' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary' | 'RestoreLongTermRetentionBackup' | 'Secondary'
* **creationDate**: string (ReadOnly)
* **currentServiceObjectiveName**: string (ReadOnly)
* **databaseId**: string (ReadOnly)
* **defaultSecondaryLocation**: string (ReadOnly)
* **elasticPoolId**: string
* **failoverGroupId**: string (ReadOnly)
* **longTermRetentionBackupResourceId**: string
* **maxSizeBytes**: int
* **recoverableDatabaseId**: string
* **recoveryServicesRecoveryPointId**: string
* **restorableDroppedDatabaseId**: string
* **restorePointInTime**: string
* **sampleName**: 'AdventureWorksLT' | 'WideWorldImportersFull' | 'WideWorldImportersStd'
* **sourceDatabaseDeletionDate**: string
* **sourceDatabaseId**: string
* **status**: 'AutoClosed' | 'Copying' | 'Creating' | 'EmergencyMode' | 'Inaccessible' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Paused' | 'Pausing' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Resuming' | 'Scaling' | 'Shutdown' | 'Standby' | 'Suspect' (ReadOnly)
* **zoneRedundant**: bool

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LongTermRetentionPolicyProperties
### Properties
* **monthlyRetention**: string
* **weeklyRetention**: string
* **weekOfYear**: int
* **yearlyRetention**: string

## DatabaseVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: VulnerabilityAssessmentRecurringScansProperties
* **storageAccountAccessKey**: string
* **storageContainerPath**: string
* **storageContainerSasKey**: string

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]
* **emailSubscriptionAdmins**: bool
* **isEnabled**: bool

## JobAgentProperties
### Properties
* **databaseId**: string (Required)
* **state**: 'Creating' | 'Deleting' | 'Disabled' | 'Ready' | 'Updating' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobCredentialProperties
### Properties
* **password**: string (Required)
* **username**: string (Required)

## JobProperties
### Properties
* **description**: string
* **schedule**: JobSchedule
* **version**: int (ReadOnly)

## JobSchedule
### Properties
* **enabled**: bool
* **endTime**: string
* **interval**: string
* **startTime**: string

## JobStepProperties
### Properties
* **action**: JobStepAction (Required)
* **credential**: string (Required)
* **executionOptions**: JobStepExecutionOptions
* **output**: JobStepOutput
* **stepId**: int
* **targetGroup**: string (Required)

## JobStepAction
### Properties
* **source**: 'Inline'
* **type**: 'TSql'
* **value**: string (Required)

## JobStepExecutionOptions
### Properties
* **initialRetryIntervalSeconds**: int
* **maximumRetryIntervalSeconds**: int
* **retryAttempts**: int
* **retryIntervalBackoffMultiplier**: int
* **timeoutSeconds**: int

## JobStepOutput
### Properties
* **credential**: string (Required)
* **databaseName**: string (Required)
* **resourceGroupName**: string
* **schemaName**: string
* **serverName**: string (Required)
* **subscriptionId**: string
* **tableName**: string (Required)
* **type**: 'SqlDatabase'

## JobTargetGroupProperties
### Properties
* **members**: JobTarget[] (Required)

## JobTarget
### Properties
* **databaseName**: string
* **elasticPoolName**: string
* **refreshCredential**: string
* **serverName**: string
* **shardMapName**: string
* **type**: 'SqlDatabase' | 'SqlElasticPool' | 'SqlServer' | 'SqlShardMap' | 'TargetGroup' (Required)

