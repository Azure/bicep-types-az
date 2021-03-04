# Microsoft.Sql @ 2014-04-01

## Resource Microsoft.Sql/servers@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/advisors@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AdvisorProperties
* **type**: 'Microsoft.Sql/servers/advisors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/auditingPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ServerTableAuditingPolicyProperties
* **type**: 'Microsoft.Sql/servers/auditingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/communicationLinks@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerCommunicationLinkProperties
* **type**: 'Microsoft.Sql/servers/communicationLinks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/connectionPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ServerConnectionPolicyProperties
* **type**: 'Microsoft.Sql/servers/connectionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/advisors@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AdvisorProperties
* **type**: 'Microsoft.Sql/servers/databases/advisors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/auditingPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: DatabaseTableAuditingPolicyProperties
* **type**: 'Microsoft.Sql/servers/databases/auditingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: DatabaseConnectionPolicyProperties
* **type**: 'Microsoft.Sql/servers/databases/connectionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/extensions@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'import' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Sql/servers/databases/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/geoBackupPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: GeoBackupPolicyProperties (Required)
* **type**: 'Microsoft.Sql/servers/databases/geoBackupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: DatabaseSecurityAlertPolicyProperties
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/transparentDataEncryption@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: TransparentDataEncryptionProperties
* **type**: 'Microsoft.Sql/servers/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/elasticPools@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ElasticPoolProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Sql/servers/elasticPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/firewallRules@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallRuleProperties
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant)

## ServerProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **externalAdministratorLogin**: string (ReadOnly)
* **externalAdministratorSid**: string (ReadOnly)
* **fullyQualifiedDomainName**: string (ReadOnly)
* **version**: '12.0' | '2.0'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AdvisorProperties
### Properties
* **lastChecked**: string (ReadOnly)
* **recommendationsStatus**: string (ReadOnly)

## ServerTableAuditingPolicyProperties
### Properties
* **auditingState**: string
* **auditLogsTableName**: string
* **eventTypesToAudit**: string
* **fullAuditLogsTableName**: string
* **retentionDays**: string
* **storageAccountKey**: string
* **storageAccountName**: string
* **storageAccountResourceGroupName**: string
* **storageAccountSecondaryKey**: string
* **storageAccountSubscriptionId**: string
* **storageTableEndpoint**: string

## ServerCommunicationLinkProperties
### Properties
* **partnerServer**: string (Required)
* **state**: string (ReadOnly)

## ServerConnectionPolicyProperties
### Properties

## DatabaseProperties
### Properties
* **collation**: string
* **containmentState**: int (ReadOnly)
* **createMode**: 'Copy' | 'Default' | 'NonReadableSecondary' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreLongTermRetentionBackup'
* **creationDate**: string (ReadOnly)
* **currentServiceObjectiveId**: string (ReadOnly)
* **databaseId**: string (ReadOnly)
* **defaultSecondaryLocation**: string (ReadOnly)
* **earliestRestoreDate**: string (ReadOnly)
* **edition**: 'Basic' | 'Business' | 'BusinessCritical' | 'DataWarehouse' | 'Free' | 'GeneralPurpose' | 'Hyperscale' | 'Premium' | 'PremiumRS' | 'Standard' | 'Stretch' | 'System' | 'System2' | 'Web'
* **elasticPoolName**: string
* **failoverGroupId**: string (ReadOnly)
* **maxSizeBytes**: string
* **recommendedIndex**: RecommendedIndex[] (ReadOnly)
* **recoveryServicesRecoveryPointResourceId**: string
* **requestedServiceObjectiveId**: string
* **requestedServiceObjectiveName**: 'Basic' | 'DS100' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS200' | 'DS2000' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DW100' | 'DW1000' | 'DW10000c' | 'DW1000c' | 'DW1200' | 'DW1500' | 'DW15000c' | 'DW1500c' | 'DW200' | 'DW2000' | 'DW2000c' | 'DW2500c' | 'DW300' | 'DW3000' | 'DW30000c' | 'DW3000c' | 'DW400' | 'DW500' | 'DW5000c' | 'DW600' | 'DW6000' | 'DW6000c' | 'DW7500c' | 'ElasticPool' | 'Free' | 'P1' | 'P11' | 'P15' | 'P2' | 'P3' | 'P4' | 'P6' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'S0' | 'S1' | 'S12' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'System' | 'System0' | 'System1' | 'System2' | 'System2L' | 'System3' | 'System3L' | 'System4' | 'System4L'
* **restorePointInTime**: string
* **sampleName**: 'AdventureWorksLT'
* **serviceLevelObjective**: 'Basic' | 'DS100' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS200' | 'DS2000' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DW100' | 'DW1000' | 'DW10000c' | 'DW1000c' | 'DW1200' | 'DW1500' | 'DW15000c' | 'DW1500c' | 'DW200' | 'DW2000' | 'DW2000c' | 'DW2500c' | 'DW300' | 'DW3000' | 'DW30000c' | 'DW3000c' | 'DW400' | 'DW500' | 'DW5000c' | 'DW600' | 'DW6000' | 'DW6000c' | 'DW7500c' | 'ElasticPool' | 'Free' | 'P1' | 'P11' | 'P15' | 'P2' | 'P3' | 'P4' | 'P6' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'S0' | 'S1' | 'S12' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'System' | 'System0' | 'System1' | 'System2' | 'System2L' | 'System3' | 'System3L' | 'System4' | 'System4L' (ReadOnly)
* **serviceTierAdvisors**: ServiceTierAdvisor[] (ReadOnly)
* **sourceDatabaseDeletionDate**: string
* **sourceDatabaseId**: string
* **status**: string (ReadOnly)
* **transparentDataEncryption**: TransparentDataEncryption[] (ReadOnly)
* **zoneRedundant**: bool

## RecommendedIndex
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: RecommendedIndexProperties (ReadOnly)
* **type**: string (ReadOnly)

## RecommendedIndexProperties
### Properties
* **columns**: string[] (ReadOnly)
* **created**: string (ReadOnly)
* **estimatedImpact**: OperationImpact[] (ReadOnly)
* **includedColumns**: string[] (ReadOnly)
* **indexScript**: string (ReadOnly)
* **lastModified**: string (ReadOnly)
* **reportedImpact**: OperationImpact[] (ReadOnly)
* **schema**: string (ReadOnly)
* **table**: string (ReadOnly)

## OperationImpact
### Properties
* **changeValueAbsolute**: int (ReadOnly)
* **changeValueRelative**: int (ReadOnly)
* **name**: string (ReadOnly)
* **unit**: string (ReadOnly)

## ServiceTierAdvisor
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ServiceTierAdvisorProperties (ReadOnly)
* **type**: string (ReadOnly)

## ServiceTierAdvisorProperties
### Properties
* **activeTimeRatio**: int (ReadOnly)
* **avgDtu**: int (ReadOnly)
* **confidence**: int (ReadOnly)
* **currentServiceLevelObjective**: string (ReadOnly)
* **currentServiceLevelObjectiveId**: string (ReadOnly)
* **databaseSizeBasedRecommendationServiceLevelObjective**: string (ReadOnly)
* **databaseSizeBasedRecommendationServiceLevelObjectiveId**: string (ReadOnly)
* **disasterPlanBasedRecommendationServiceLevelObjective**: string (ReadOnly)
* **disasterPlanBasedRecommendationServiceLevelObjectiveId**: string (ReadOnly)
* **maxDtu**: int (ReadOnly)
* **maxSizeInGB**: int (ReadOnly)
* **minDtu**: int (ReadOnly)
* **observationPeriodEnd**: string (ReadOnly)
* **observationPeriodStart**: string (ReadOnly)
* **overallRecommendationServiceLevelObjective**: string (ReadOnly)
* **overallRecommendationServiceLevelObjectiveId**: string (ReadOnly)
* **serviceLevelObjectiveUsageMetrics**: SloUsageMetric[] (ReadOnly)
* **usageBasedRecommendationServiceLevelObjective**: string (ReadOnly)
* **usageBasedRecommendationServiceLevelObjectiveId**: string (ReadOnly)

## SloUsageMetric
### Properties
* **inRangeTimeRatio**: int (ReadOnly)
* **serviceLevelObjective**: 'Basic' | 'DS100' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS200' | 'DS2000' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DW100' | 'DW1000' | 'DW10000c' | 'DW1000c' | 'DW1200' | 'DW1500' | 'DW15000c' | 'DW1500c' | 'DW200' | 'DW2000' | 'DW2000c' | 'DW2500c' | 'DW300' | 'DW3000' | 'DW30000c' | 'DW3000c' | 'DW400' | 'DW500' | 'DW5000c' | 'DW600' | 'DW6000' | 'DW6000c' | 'DW7500c' | 'ElasticPool' | 'Free' | 'P1' | 'P11' | 'P15' | 'P2' | 'P3' | 'P4' | 'P6' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'S0' | 'S1' | 'S12' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'System' | 'System0' | 'System1' | 'System2' | 'System2L' | 'System3' | 'System3L' | 'System4' | 'System4L' (ReadOnly)
* **serviceLevelObjectiveId**: string (ReadOnly)

## TransparentDataEncryption
### Properties
* **id**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: TransparentDataEncryptionProperties
* **type**: string (ReadOnly)

## TransparentDataEncryptionProperties
### Properties

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseTableAuditingPolicyProperties
### Properties
* **auditingState**: string
* **auditLogsTableName**: string
* **eventTypesToAudit**: string
* **fullAuditLogsTableName**: string
* **retentionDays**: string
* **storageAccountKey**: string
* **storageAccountName**: string
* **storageAccountResourceGroupName**: string
* **storageAccountSecondaryKey**: string
* **storageAccountSubscriptionId**: string
* **storageTableEndpoint**: string
* **useServerDefault**: string

## DatabaseConnectionPolicyProperties
### Properties
* **proxyDnsName**: string
* **proxyPort**: string
* **redirectionState**: string
* **securityEnabledAccess**: string
* **state**: string
* **useServerDefault**: string
* **visibility**: string

## GeoBackupPolicyProperties
### Properties
* **storageType**: string (ReadOnly)

## DatabaseSecurityAlertPolicyProperties
### Properties
* **disabledAlerts**: string
* **emailAddresses**: string
* **retentionDays**: int
* **storageAccountAccessKey**: string
* **storageEndpoint**: string

## ElasticPoolProperties
### Properties
* **creationDate**: string (ReadOnly)
* **databaseDtuMax**: int
* **databaseDtuMin**: int
* **dtu**: int
* **edition**: 'Basic' | 'BusinessCritical' | 'GeneralPurpose' | 'Premium' | 'Standard'
* **state**: 'Creating' | 'Disabled' | 'Ready' (ReadOnly)
* **storageMB**: int
* **zoneRedundant**: bool

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

