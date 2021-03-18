# Microsoft.Sql @ 2017-10-01-preview

## Resource Microsoft.Sql/locations/instanceFailoverGroups@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InstanceFailoverGroupProperties](#instancefailovergroupproperties)
* **type**: 'Microsoft.Sql/locations/instanceFailoverGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [DatabaseVulnerabilityAssessmentProperties](#databasevulnerabilityassessmentproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' | 'master' (Required, DeployTimeConstant)
* **properties**: [DatabaseVulnerabilityAssessmentRuleBaselineProperties](#databasevulnerabilityassessmentrulebaselineproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/encryptionProtector@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceEncryptionProtectorProperties](#managedinstanceencryptionprotectorproperties)
* **type**: 'Microsoft.Sql/managedInstances/encryptionProtector' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/keys@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceKeyProperties](#managedinstancekeyproperties)
* **type**: 'Microsoft.Sql/managedInstances/keys' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseProperties](#databaseproperties)
* **sku**: [Sku](#sku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [BackupShortTermRetentionPolicyProperties](#backupshorttermretentionpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/elasticPools@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ElasticPoolProperties](#elasticpoolproperties)
* **sku**: [Sku](#sku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Sql/servers/elasticPools' (ReadOnly, DeployTimeConstant)

## InstanceFailoverGroupProperties
### Properties
* **managedInstancePairs**: [ManagedInstancePairInfo](#managedinstancepairinfo)[] (Required)
* **partnerRegions**: [PartnerRegionInfo](#partnerregioninfo)[] (Required)
* **readOnlyEndpoint**: [InstanceFailoverGroupReadOnlyEndpoint](#instancefailovergroupreadonlyendpoint)
* **readWriteEndpoint**: [InstanceFailoverGroupReadWriteEndpoint](#instancefailovergroupreadwriteendpoint) (Required)
* **replicationRole**: 'Primary' | 'Secondary' (ReadOnly)
* **replicationState**: string (ReadOnly)

## ManagedInstancePairInfo
### Properties
* **partnerManagedInstanceId**: string
* **primaryManagedInstanceId**: string

## PartnerRegionInfo
### Properties
* **location**: string
* **replicationRole**: 'Primary' | 'Secondary' (ReadOnly)

## InstanceFailoverGroupReadOnlyEndpoint
### Properties
* **failoverPolicy**: 'Disabled' | 'Enabled'

## InstanceFailoverGroupReadWriteEndpoint
### Properties
* **failoverPolicy**: 'Automatic' | 'Manual' (Required)
* **failoverWithDataLossGracePeriodMinutes**: int

## DatabaseVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties)
* **storageAccountAccessKey**: string
* **storageContainerPath**: string
* **storageContainerSasKey**: string

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]
* **emailSubscriptionAdmins**: bool
* **isEnabled**: bool

## DatabaseVulnerabilityAssessmentRuleBaselineProperties
### Properties
* **baselineResults**: [DatabaseVulnerabilityAssessmentRuleBaselineItem](#databasevulnerabilityassessmentrulebaselineitem)[] (Required)

## DatabaseVulnerabilityAssessmentRuleBaselineItem
### Properties
* **result**: string[] (Required)

## ManagedInstanceEncryptionProtectorProperties
### Properties
* **serverKeyName**: string
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **thumbprint**: string (ReadOnly)
* **uri**: string (ReadOnly)

## ManagedInstanceKeyProperties
### Properties
* **creationDate**: string (ReadOnly)
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **thumbprint**: string (ReadOnly)
* **uri**: string

## DatabaseProperties
### Properties
* **autoPauseDelay**: int
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string
* **createMode**: 'Copy' | 'Default' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary' | 'RestoreLongTermRetentionBackup' | 'Secondary'
* **creationDate**: string (ReadOnly)
* **currentServiceObjectiveName**: string (ReadOnly)
* **currentSku**: [Sku](#sku) (ReadOnly)
* **databaseId**: string (ReadOnly)
* **defaultSecondaryLocation**: string (ReadOnly)
* **earliestRestoreDate**: string (ReadOnly)
* **elasticPoolId**: string
* **failoverGroupId**: string (ReadOnly)
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
* **longTermRetentionBackupResourceId**: string
* **maxLogSizeBytes**: int (ReadOnly)
* **maxSizeBytes**: int
* **minCapacity**: int
* **pausedDate**: string (ReadOnly)
* **readReplicaCount**: int
* **readScale**: 'Disabled' | 'Enabled'
* **recoverableDatabaseId**: string
* **recoveryServicesRecoveryPointId**: string
* **requestedServiceObjectiveName**: string (ReadOnly)
* **restorableDroppedDatabaseId**: string
* **restorePointInTime**: string
* **resumedDate**: string (ReadOnly)
* **sampleName**: 'AdventureWorksLT' | 'WideWorldImportersFull' | 'WideWorldImportersStd'
* **sourceDatabaseDeletionDate**: string
* **sourceDatabaseId**: string
* **status**: 'AutoClosed' | 'Copying' | 'Creating' | 'Disabled' | 'EmergencyMode' | 'Inaccessible' | 'Offline' | 'OfflineChangingDwPerformanceTiers' | 'OfflineSecondary' | 'Online' | 'OnlineChangingDwPerformanceTiers' | 'Paused' | 'Pausing' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Resuming' | 'Scaling' | 'Shutdown' | 'Standby' | 'Suspect' (ReadOnly)
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

## BackupShortTermRetentionPolicyProperties
### Properties
* **retentionDays**: int

## ElasticPoolProperties
### Properties
* **creationDate**: string (ReadOnly)
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
* **maxSizeBytes**: int
* **perDatabaseSettings**: [ElasticPoolPerDatabaseSettings](#elasticpoolperdatabasesettings)
* **state**: 'Creating' | 'Disabled' | 'Ready' (ReadOnly)
* **zoneRedundant**: bool

## ElasticPoolPerDatabaseSettings
### Properties
* **maxCapacity**: int
* **minCapacity**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

