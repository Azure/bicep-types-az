# Microsoft.Sql @ 2014-04-01

## Resource Microsoft.Sql/servers@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerProperties](#serverproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/administrators@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerAdministratorProperties](#serveradministratorproperties)
* **type**: 'Microsoft.Sql/servers/administrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/advisors@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AdvisorProperties](#advisorproperties)
* **type**: 'Microsoft.Sql/servers/advisors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/auditingPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerTableAuditingPolicyProperties](#servertableauditingpolicyproperties)
* **type**: 'Microsoft.Sql/servers/auditingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/communicationLinks@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerCommunicationLinkProperties](#servercommunicationlinkproperties)
* **type**: 'Microsoft.Sql/servers/communicationLinks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/connectionPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerConnectionPolicyProperties](#serverconnectionpolicyproperties)
* **type**: 'Microsoft.Sql/servers/connectionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseProperties](#databaseproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/advisors@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AdvisorProperties](#advisorproperties)
* **type**: 'Microsoft.Sql/servers/databases/advisors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/auditingPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseTableAuditingPolicyProperties](#databasetableauditingpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/auditingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseConnectionPolicyProperties](#databaseconnectionpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/connectionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/dataMaskingPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataMaskingPolicyProperties](#datamaskingpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/dataMaskingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataMaskingRuleProperties](#datamaskingruleproperties)
* **type**: 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/extensions@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImportExtensionProperties](#importextensionproperties)
* **type**: 'Microsoft.Sql/servers/databases/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/geoBackupPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GeoBackupPolicyProperties](#geobackuppolicyproperties) (Required)
* **type**: 'Microsoft.Sql/servers/databases/geoBackupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseSecurityAlertPolicyProperties](#databasesecurityalertpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/transparentDataEncryption@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties)
* **type**: 'Microsoft.Sql/servers/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/disasterRecoveryConfiguration@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DisasterRecoveryConfigurationProperties](#disasterrecoveryconfigurationproperties) (ReadOnly)
* **type**: 'Microsoft.Sql/servers/disasterRecoveryConfiguration' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/elasticPools@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ElasticPoolProperties](#elasticpoolproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers/elasticPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/firewallRules@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FirewallRuleProperties](#firewallruleproperties)
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant)

## ServerProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **externalAdministratorLogin**: string (ReadOnly)
* **externalAdministratorSid**: string (ReadOnly)
* **fullyQualifiedDomainName**: string (ReadOnly)
* **state**: 'Disabled' | 'Ready' (ReadOnly)
* **version**: '12.0' | '2.0'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerAdministratorProperties
### Properties
* **administratorType**: string (Required)
* **login**: string (Required)
* **sid**: string (Required)
* **tenantId**: string (Required)

## AdvisorProperties
### Properties
* **advisorStatus**: 'GA' | 'LimitedPublicPreview' | 'PrivatePreview' | 'PublicPreview' (ReadOnly)
* **autoExecuteValue**: 'Default' | 'Disabled' | 'Enabled' (Required)
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
* **connectionType**: 'Default' | 'Proxy' | 'Redirect' (Required)

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
* **readScale**: 'Disabled' | 'Enabled'
* **recommendedIndex**: [RecommendedIndex](#recommendedindex)[] (ReadOnly)
* **recoveryServicesRecoveryPointResourceId**: string
* **requestedServiceObjectiveId**: string
* **requestedServiceObjectiveName**: 'Basic' | 'DS100' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS200' | 'DS2000' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DW100' | 'DW1000' | 'DW10000c' | 'DW1000c' | 'DW1200' | 'DW1500' | 'DW15000c' | 'DW1500c' | 'DW200' | 'DW2000' | 'DW2000c' | 'DW2500c' | 'DW300' | 'DW3000' | 'DW30000c' | 'DW3000c' | 'DW400' | 'DW500' | 'DW5000c' | 'DW600' | 'DW6000' | 'DW6000c' | 'DW7500c' | 'ElasticPool' | 'Free' | 'P1' | 'P11' | 'P15' | 'P2' | 'P3' | 'P4' | 'P6' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'S0' | 'S1' | 'S12' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'System' | 'System0' | 'System1' | 'System2' | 'System2L' | 'System3' | 'System3L' | 'System4' | 'System4L'
* **restorePointInTime**: string
* **sampleName**: 'AdventureWorksLT'
* **serviceLevelObjective**: 'Basic' | 'DS100' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS200' | 'DS2000' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DW100' | 'DW1000' | 'DW10000c' | 'DW1000c' | 'DW1200' | 'DW1500' | 'DW15000c' | 'DW1500c' | 'DW200' | 'DW2000' | 'DW2000c' | 'DW2500c' | 'DW300' | 'DW3000' | 'DW30000c' | 'DW3000c' | 'DW400' | 'DW500' | 'DW5000c' | 'DW600' | 'DW6000' | 'DW6000c' | 'DW7500c' | 'ElasticPool' | 'Free' | 'P1' | 'P11' | 'P15' | 'P2' | 'P3' | 'P4' | 'P6' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'S0' | 'S1' | 'S12' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'System' | 'System0' | 'System1' | 'System2' | 'System2L' | 'System3' | 'System3L' | 'System4' | 'System4L' (ReadOnly)
* **serviceTierAdvisors**: [ServiceTierAdvisor](#servicetieradvisor)[] (ReadOnly)
* **sourceDatabaseDeletionDate**: string
* **sourceDatabaseId**: string
* **status**: string (ReadOnly)
* **transparentDataEncryption**: [TransparentDataEncryption](#transparentdataencryption)[] (ReadOnly)
* **zoneRedundant**: bool

## RecommendedIndex
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [RecommendedIndexProperties](#recommendedindexproperties) (ReadOnly)
* **type**: string (ReadOnly)

## RecommendedIndexProperties
### Properties
* **action**: 'Create' | 'Drop' | 'Rebuild' (ReadOnly)
* **columns**: string[] (ReadOnly)
* **created**: string (ReadOnly)
* **estimatedImpact**: [OperationImpact](#operationimpact)[] (ReadOnly)
* **includedColumns**: string[] (ReadOnly)
* **indexScript**: string (ReadOnly)
* **indexType**: 'CLUSTERED COLUMNSTORE' | 'CLUSTERED' | 'COLUMNSTORE' | 'NONCLUSTERED' (ReadOnly)
* **lastModified**: string (ReadOnly)
* **reportedImpact**: [OperationImpact](#operationimpact)[] (ReadOnly)
* **schema**: string (ReadOnly)
* **state**: 'Active' | 'Blocked' | 'Executing' | 'Expired' | 'Ignored' | 'Pending Revert' | 'Pending' | 'Reverted' | 'Reverting' | 'Success' | 'Verifying' (ReadOnly)
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
* **properties**: [ServiceTierAdvisorProperties](#servicetieradvisorproperties) (ReadOnly)
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
* **serviceLevelObjectiveUsageMetrics**: [SloUsageMetric](#slousagemetric)[] (ReadOnly)
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
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties)
* **type**: string (ReadOnly)

## TransparentDataEncryptionProperties
### Properties
* **status**: 'Disabled' | 'Enabled'

## Dictionary<string,String>
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

## DataMaskingPolicyProperties
### Properties
* **applicationPrincipals**: string (ReadOnly)
* **dataMaskingState**: 'Disabled' | 'Enabled' (Required)
* **exemptPrincipals**: string
* **maskingLevel**: string (ReadOnly)

## DataMaskingRuleProperties
### Properties
* **aliasName**: string
* **columnName**: string (Required)
* **id**: string (ReadOnly)
* **maskingFunction**: 'CCN' | 'Default' | 'Email' | 'Number' | 'SSN' | 'Text' (Required)
* **numberFrom**: string
* **numberTo**: string
* **prefixSize**: string
* **replacementString**: string
* **ruleState**: 'Disabled' | 'Enabled'
* **schemaName**: string (Required)
* **suffixSize**: string
* **tableName**: string (Required)

## ImportExtensionProperties
### Properties
* **administratorLogin**: string (Required)
* **administratorLoginPassword**: string (Required)
* **authenticationType**: 'ADPassword' | 'SQL'
* **operationMode**: string (Required)
* **storageKey**: string (Required)
* **storageKeyType**: 'SharedAccessKey' | 'StorageAccessKey' (Required)
* **storageUri**: string (Required)

## GeoBackupPolicyProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageType**: string (ReadOnly)

## DatabaseSecurityAlertPolicyProperties
### Properties
* **disabledAlerts**: string
* **emailAccountAdmins**: 'Disabled' | 'Enabled'
* **emailAddresses**: string
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' | 'New' (Required)
* **storageAccountAccessKey**: string
* **storageEndpoint**: string
* **useServerDefault**: 'Disabled' | 'Enabled'

## DisasterRecoveryConfigurationProperties
### Properties
* **autoFailover**: 'Off' | 'On' (ReadOnly)
* **failoverPolicy**: 'Automatic' | 'Manual' (ReadOnly)
* **logicalServerName**: string (ReadOnly)
* **partnerLogicalServerName**: string (ReadOnly)
* **partnerServerId**: string (ReadOnly)
* **role**: 'None' | 'Primary' | 'Secondary' (ReadOnly)
* **status**: 'Creating' | 'Dropping' | 'FailingOver' | 'Ready' (ReadOnly)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

