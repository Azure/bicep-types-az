# Microsoft.Sql @ 2017-10-01-preview

## Microsoft.Sql/locations/instanceFailoverGroups
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InstanceFailoverGroupProperties
* **type**: 'Microsoft.Sql/locations/instanceFailoverGroups' (ReadOnly, DeployTimeConstant)

## InstanceFailoverGroupProperties
### Properties
* **managedInstancePairs**: ManagedInstancePairInfo[] (Required)
* **partnerRegions**: PartnerRegionInfo[] (Required)
* **readOnlyEndpoint**: InstanceFailoverGroupReadOnlyEndpoint
* **readWriteEndpoint**: InstanceFailoverGroupReadWriteEndpoint (Required)
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

## Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' | 'master' (Required, DeployTimeConstant)
* **properties**: DatabaseVulnerabilityAssessmentRuleBaselineProperties
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant)

## DatabaseVulnerabilityAssessmentRuleBaselineProperties
### Properties
* **baselineResults**: DatabaseVulnerabilityAssessmentRuleBaselineItem[] (Required)

## DatabaseVulnerabilityAssessmentRuleBaselineItem
### Properties
* **result**: string[] (Required)

## Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseVulnerabilityAssessmentProperties
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## DatabaseVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: VulnerabilityAssessmentRecurringScansProperties
* **storageAccountAccessKey**: string
* **storageContainerPath**: string
* **storageContainerSasKey**: string

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emailSubscriptionAdmins**: bool
* **emails**: string[]
* **isEnabled**: bool

## Microsoft.Sql/managedInstances/encryptionProtector
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedInstanceEncryptionProtectorProperties
* **type**: 'Microsoft.Sql/managedInstances/encryptionProtector' (ReadOnly, DeployTimeConstant)

## ManagedInstanceEncryptionProtectorProperties
### Properties
* **serverKeyName**: string
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **thumbprint**: string (ReadOnly)
* **uri**: string (ReadOnly)

## Microsoft.Sql/managedInstances/keys
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedInstanceKeyProperties
* **type**: 'Microsoft.Sql/managedInstances/keys' (ReadOnly, DeployTimeConstant)

## ManagedInstanceKeyProperties
### Properties
* **creationDate**: string (ReadOnly)
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **thumbprint**: string (ReadOnly)
* **uri**: string

## Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupShortTermRetentionPolicyProperties
* **type**: 'Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## BackupShortTermRetentionPolicyProperties
### Properties
* **retentionDays**: int

## Microsoft.Sql/servers/databases
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant)

## DatabaseProperties
### Properties
* **autoPauseDelay**: int
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string
* **createMode**: 'Copy' | 'Default' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary' | 'RestoreLongTermRetentionBackup' | 'Secondary'
* **creationDate**: string (ReadOnly)
* **currentServiceObjectiveName**: string (ReadOnly)
* **currentSku**: Sku (ReadOnly)
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Sql/servers/elasticPools
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ElasticPoolProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/servers/elasticPools' (ReadOnly, DeployTimeConstant)

## ElasticPoolProperties
### Properties
* **creationDate**: string (ReadOnly)
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
* **maxSizeBytes**: int
* **perDatabaseSettings**: ElasticPoolPerDatabaseSettings
* **state**: 'Creating' | 'Disabled' | 'Ready' (ReadOnly)
* **zoneRedundant**: bool

## ElasticPoolPerDatabaseSettings
### Properties
* **maxCapacity**: int
* **minCapacity**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

