# Microsoft.Sql @ 2020-02-02-preview

## Resource Microsoft.Sql/instancePools@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InstancePoolProperties](#instancepoolproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/instancePools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/locations/instanceFailoverGroups@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InstanceFailoverGroupProperties](#instancefailovergroupproperties)
* **type**: 'Microsoft.Sql/locations/instanceFailoverGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/locations/serverTrustGroups@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerTrustGroupProperties](#servertrustgroupproperties)
* **type**: 'Microsoft.Sql/locations/serverTrustGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceProperties](#managedinstanceproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/administrators@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceAdministratorProperties](#managedinstanceadministratorproperties)
* **type**: 'Microsoft.Sql/managedInstances/administrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceAzureADOnlyAuthProperties](#managedinstanceazureadonlyauthproperties)
* **type**: 'Microsoft.Sql/managedInstances/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedDatabaseProperties](#manageddatabaseproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BaseLongTermRetentionPolicyProperties](#baselongtermretentionpolicyproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedBackupShortTermRetentionPolicyProperties](#managedbackupshorttermretentionpolicyproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedTransparentDataEncryptionProperties](#managedtransparentdataencryptionproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseVulnerabilityAssessmentProperties](#databasevulnerabilityassessmentproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' | 'master' (Required, DeployTimeConstant)
* **properties**: [DatabaseVulnerabilityAssessmentRuleBaselineProperties](#databasevulnerabilityassessmentrulebaselineproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/encryptionProtector@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceEncryptionProtectorProperties](#managedinstanceencryptionprotectorproperties)
* **type**: 'Microsoft.Sql/managedInstances/encryptionProtector' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/keys@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceKeyProperties](#managedinstancekeyproperties)
* **type**: 'Microsoft.Sql/managedInstances/keys' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/privateEndpointConnections@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstancePrivateEndpointConnectionProperties](#managedinstanceprivateendpointconnectionproperties)
* **type**: 'Microsoft.Sql/managedInstances/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedBackupShortTermRetentionPolicyProperties](#managedbackupshorttermretentionpolicyproperties)
* **type**: 'Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/securityAlertPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAlertsPolicyProperties](#securityalertspolicyproperties)
* **type**: 'Microsoft.Sql/managedInstances/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/sqlAgent@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlAgentConfigurationProperties](#sqlagentconfigurationproperties)
* **type**: 'Microsoft.Sql/managedInstances/sqlAgent' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/vulnerabilityAssessments@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceVulnerabilityAssessmentProperties](#managedinstancevulnerabilityassessmentproperties)
* **type**: 'Microsoft.Sql/managedInstances/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerProperties](#serverproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/administrators@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AdministratorProperties](#administratorproperties)
* **type**: 'Microsoft.Sql/servers/administrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/auditingSettings@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerBlobAuditingPolicyProperties](#serverblobauditingpolicyproperties)
* **type**: 'Microsoft.Sql/servers/auditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/azureADOnlyAuthentications@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AzureADOnlyAuthProperties](#azureadonlyauthproperties)
* **type**: 'Microsoft.Sql/servers/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseProperties](#databaseproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/auditingSettings@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseBlobAuditingPolicyProperties](#databaseblobauditingpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/auditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BaseLongTermRetentionPolicyProperties](#baselongtermretentionpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupShortTermRetentionPolicyProperties](#backupshorttermretentionpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/extendedAuditingSettings@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExtendedDatabaseBlobAuditingPolicyProperties](#extendeddatabaseblobauditingpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/extendedAuditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/maintenanceWindows@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MaintenanceWindowsProperties](#maintenancewindowsproperties)
* **type**: 'Microsoft.Sql/servers/databases/maintenanceWindows' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties)
* **type**: 'Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAlertsPolicyProperties](#securityalertspolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/syncGroups@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SyncGroupProperties](#syncgroupproperties)
* **sku**: [Sku](#sku)
* **type**: 'Microsoft.Sql/servers/databases/syncGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/syncGroups/syncMembers@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SyncMemberProperties](#syncmemberproperties)
* **type**: 'Microsoft.Sql/servers/databases/syncGroups/syncMembers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/transparentDataEncryption@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties)
* **type**: 'Microsoft.Sql/servers/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseVulnerabilityAssessmentProperties](#databasevulnerabilityassessmentproperties)
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' | 'master' (Required, DeployTimeConstant)
* **properties**: [DatabaseVulnerabilityAssessmentRuleBaselineProperties](#databasevulnerabilityassessmentrulebaselineproperties)
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/workloadGroups@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkloadGroupProperties](#workloadgroupproperties)
* **type**: 'Microsoft.Sql/servers/databases/workloadGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkloadClassifierProperties](#workloadclassifierproperties)
* **type**: 'Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/devOpsAuditingSettings@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerDevOpsAuditSettingsProperties](#serverdevopsauditsettingsproperties)
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Sql/servers/devOpsAuditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/dnsAliases@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerDnsAliasProperties](#serverdnsaliasproperties) (ReadOnly)
* **type**: 'Microsoft.Sql/servers/dnsAliases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/elasticPools@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ElasticPoolProperties](#elasticpoolproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers/elasticPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/encryptionProtector@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EncryptionProtectorProperties](#encryptionprotectorproperties)
* **type**: 'Microsoft.Sql/servers/encryptionProtector' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/extendedAuditingSettings@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExtendedServerBlobAuditingPolicyProperties](#extendedserverblobauditingpolicyproperties)
* **type**: 'Microsoft.Sql/servers/extendedAuditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/failoverGroups@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FailoverGroupProperties](#failovergroupproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers/failoverGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/firewallRules@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerFirewallRuleProperties](#serverfirewallruleproperties)
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobAgentProperties](#jobagentproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers/jobAgents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents/credentials@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobCredentialProperties](#jobcredentialproperties)
* **type**: 'Microsoft.Sql/servers/jobAgents/credentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents/jobs@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobProperties](#jobproperties)
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents/jobs/executions@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobExecutionProperties](#jobexecutionproperties) (ReadOnly)
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/executions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents/jobs/steps@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobStepProperties](#jobstepproperties)
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/steps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/jobAgents/targetGroups@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobTargetGroupProperties](#jobtargetgroupproperties)
* **type**: 'Microsoft.Sql/servers/jobAgents/targetGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/keys@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerKeyProperties](#serverkeyproperties)
* **type**: 'Microsoft.Sql/servers/keys' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/privateEndpointConnections@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Sql/servers/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/securityAlertPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAlertsPolicyProperties](#securityalertspolicyproperties)
* **type**: 'Microsoft.Sql/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/syncAgents@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SyncAgentProperties](#syncagentproperties)
* **type**: 'Microsoft.Sql/servers/syncAgents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/virtualNetworkRules@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties)
* **type**: 'Microsoft.Sql/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/vulnerabilityAssessments@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties)
* **type**: 'Microsoft.Sql/servers/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## InstancePoolProperties
### Properties
* **licenseType**: 'BasePrice' | 'LicenseIncluded' (Required)
* **subnetId**: string (Required)
* **vCores**: int (Required)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ServerTrustGroupProperties
### Properties
* **groupMembers**: [ServerInfo](#serverinfo)[] (Required)
* **trustScopes**: 'GlobalTransactions'[] (Required)

## ServerInfo
### Properties
* **serverId**: string (Required)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned'

## ManagedInstanceProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **collation**: string
* **dnsZone**: string (ReadOnly)
* **dnsZonePartner**: string
* **fullyQualifiedDomainName**: string (ReadOnly)
* **instancePoolId**: string
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
* **maintenanceConfigurationId**: string
* **managedInstanceCreateMode**: 'Default' | 'PointInTimeRestore'
* **minimalTlsVersion**: string
* **privateEndpointConnections**: [ManagedInstancePecProperty](#managedinstancepecproperty)[] (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect'
* **publicDataEndpointEnabled**: bool
* **restorePointInTime**: string
* **sourceManagedInstanceId**: string
* **state**: string (ReadOnly)
* **storageAccountType**: 'GRS' | 'LRS' | 'ZRS'
* **storageSizeInGB**: int
* **subnetId**: string
* **timezoneId**: string
* **vCores**: int
* **zoneRedundant**: bool

## ManagedInstancePecProperty
### Properties
* **id**: string (ReadOnly)
* **properties**: [ManagedInstancePrivateEndpointConnectionProperties](#managedinstanceprivateendpointconnectionproperties) (ReadOnly)

## ManagedInstancePrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [ManagedInstancePrivateEndpointProperty](#managedinstanceprivateendpointproperty)
* **privateLinkServiceConnectionState**: [ManagedInstancePrivateLinkServiceConnectionStateProperty](#managedinstanceprivatelinkserviceconnectionstateproperty)
* **provisioningState**: string (ReadOnly)

## ManagedInstancePrivateEndpointProperty
### Properties
* **id**: string

## ManagedInstancePrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (Required)
* **status**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedInstanceAdministratorProperties
### Properties
* **administratorType**: string (Required)
* **login**: string (Required)
* **sid**: string (Required)
* **tenantId**: string

## ManagedInstanceAzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required)

## ManagedDatabaseProperties
### Properties
* **autoCompleteRestore**: bool
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup'
* **creationDate**: string (ReadOnly)
* **defaultSecondaryLocation**: string (ReadOnly)
* **earliestRestorePoint**: string (ReadOnly)
* **failoverGroupId**: string (ReadOnly)
* **lastBackupName**: string
* **longTermRetentionBackupResourceId**: string
* **recoverableDatabaseId**: string
* **restorableDroppedDatabaseId**: string
* **restorePointInTime**: string
* **sourceDatabaseId**: string
* **status**: 'Creating' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Updating' (ReadOnly)
* **storageContainerSasToken**: string
* **storageContainerUri**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BaseLongTermRetentionPolicyProperties
### Properties
* **monthlyRetention**: string
* **weeklyRetention**: string
* **weekOfYear**: int
* **yearlyRetention**: string

## ManagedBackupShortTermRetentionPolicyProperties
### Properties
* **retentionDays**: int

## SensitivityLabelProperties
### Properties
* **columnName**: string (ReadOnly)
* **informationType**: string
* **informationTypeId**: string
* **isDisabled**: bool (ReadOnly)
* **labelId**: string
* **labelName**: string
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None'
* **schemaName**: string (ReadOnly)
* **tableName**: string (ReadOnly)

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly)
* **disabledAlerts**: string[]
* **emailAccountAdmins**: bool
* **emailAddresses**: string[]
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' | 'New' (Required)
* **storageAccountAccessKey**: string
* **storageEndpoint**: string

## ManagedTransparentDataEncryptionProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required)

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

## SecurityAlertsPolicyProperties
### Properties
* **creationTime**: string (ReadOnly)
* **state**: 'Disabled' | 'Enabled' (Required)

## SqlAgentConfigurationProperties
### Properties
* **state**: 'Disabled' | 'Enabled'

## ManagedInstanceVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties)
* **storageAccountAccessKey**: string
* **storageContainerPath**: string (Required)
* **storageContainerSasKey**: string

## ServerProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **fullyQualifiedDomainName**: string (ReadOnly)
* **minimalTlsVersion**: string
* **privateEndpointConnections**: [ServerPrivateEndpointConnection](#serverprivateendpointconnection)[] (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **state**: string (ReadOnly)
* **version**: string

## ServerPrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty)
* **provisioningState**: 'Approving' | 'Dropping' | 'Failed' | 'Ready' | 'Rejecting' (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: 'None' (ReadOnly)
* **description**: string (Required)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AdministratorProperties
### Properties
* **administratorType**: string (Required)
* **azureADOnlyAuthentication**: bool (ReadOnly)
* **login**: string (Required)
* **sid**: string (Required)
* **tenantId**: string

## ServerBlobAuditingPolicyProperties
### Properties
* **auditActionsAndGroups**: string[]
* **isAzureMonitorTargetEnabled**: bool
* **isDevopsAuditEnabled**: bool
* **isStorageSecondaryKeyInUse**: bool
* **queueDelayMs**: int
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## AzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required)

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
* **storageAccountType**: 'GRS' | 'LRS' | 'ZRS'
* **zoneRedundant**: bool

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseBlobAuditingPolicyProperties
### Properties
* **auditActionsAndGroups**: string[]
* **isAzureMonitorTargetEnabled**: bool
* **isStorageSecondaryKeyInUse**: bool
* **queueDelayMs**: int
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## BackupShortTermRetentionPolicyProperties
### Properties
* **retentionDays**: int

## ExtendedDatabaseBlobAuditingPolicyProperties
### Properties
* **auditActionsAndGroups**: string[]
* **isAzureMonitorTargetEnabled**: bool
* **isStorageSecondaryKeyInUse**: bool
* **predicateExpression**: string
* **queueDelayMs**: int
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## MaintenanceWindowsProperties
### Properties
* **timeRanges**: [MaintenanceWindowTimeRange](#maintenancewindowtimerange)[]

## MaintenanceWindowTimeRange
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **duration**: string
* **startTime**: string

## SyncGroupProperties
### Properties
* **conflictLoggingRetentionInDays**: int
* **conflictResolutionPolicy**: 'HubWin' | 'MemberWin'
* **enableConflictLogging**: bool
* **hubDatabasePassword**: string
* **hubDatabaseUserName**: string
* **interval**: int
* **lastSyncTime**: string (ReadOnly)
* **privateEndpointName**: string (ReadOnly)
* **schema**: [SyncGroupSchema](#syncgroupschema)
* **syncDatabaseId**: string
* **syncState**: 'Error' | 'Good' | 'NotReady' | 'Progressing' | 'Warning' (ReadOnly)
* **usePrivateLinkConnection**: bool

## SyncGroupSchema
### Properties
* **masterSyncMemberName**: string
* **tables**: [SyncGroupSchemaTable](#syncgroupschematable)[]

## SyncGroupSchemaTable
### Properties
* **columns**: [SyncGroupSchemaTableColumn](#syncgroupschematablecolumn)[]
* **quotedName**: string

## SyncGroupSchemaTableColumn
### Properties
* **dataSize**: string
* **dataType**: string
* **quotedName**: string

## SyncMemberProperties
### Properties
* **databaseName**: string
* **databaseType**: 'AzureSqlDatabase' | 'SqlServerDatabase'
* **password**: string
* **privateEndpointName**: string (ReadOnly)
* **serverName**: string
* **sqlServerDatabaseId**: string
* **syncAgentId**: string
* **syncDirection**: 'Bidirectional' | 'OneWayHubToMember' | 'OneWayMemberToHub'
* **syncMemberAzureDatabaseResourceId**: string
* **syncState**: 'DeProvisioned' | 'DeProvisionFailed' | 'DeProvisioning' | 'DisabledBackupRestore' | 'DisabledTombstoneCleanup' | 'Provisioned' | 'ProvisionFailed' | 'Provisioning' | 'ReprovisionFailed' | 'Reprovisioning' | 'SyncCancelled' | 'SyncCancelling' | 'SyncFailed' | 'SyncInProgress' | 'SyncSucceeded' | 'SyncSucceededWithWarnings' | 'UnProvisioned' | 'UnReprovisioned' (ReadOnly)
* **usePrivateLinkConnection**: bool
* **userName**: string

## TransparentDataEncryptionProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required)

## WorkloadGroupProperties
### Properties
* **importance**: string
* **maxResourcePercent**: int (Required)
* **maxResourcePercentPerRequest**: int
* **minResourcePercent**: int (Required)
* **minResourcePercentPerRequest**: int (Required)
* **queryExecutionTimeout**: int

## WorkloadClassifierProperties
### Properties
* **context**: string
* **endTime**: string
* **importance**: string
* **label**: string
* **memberName**: string (Required)
* **startTime**: string

## ServerDevOpsAuditSettingsProperties
### Properties
* **isAzureMonitorTargetEnabled**: bool
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## systemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## ServerDnsAliasProperties
### Properties
* **azureDnsRecord**: string (ReadOnly)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EncryptionProtectorProperties
### Properties
* **serverKeyName**: string
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **subregion**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **uri**: string (ReadOnly)

## ExtendedServerBlobAuditingPolicyProperties
### Properties
* **auditActionsAndGroups**: string[]
* **isAzureMonitorTargetEnabled**: bool
* **isDevopsAuditEnabled**: bool
* **isStorageSecondaryKeyInUse**: bool
* **predicateExpression**: string
* **queueDelayMs**: int
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## FailoverGroupProperties
### Properties
* **databases**: string[]
* **partnerServers**: [PartnerInfo](#partnerinfo)[] (Required)
* **readOnlyEndpoint**: [FailoverGroupReadOnlyEndpoint](#failovergroupreadonlyendpoint)
* **readWriteEndpoint**: [FailoverGroupReadWriteEndpoint](#failovergroupreadwriteendpoint) (Required)
* **replicationRole**: 'Primary' | 'Secondary' (ReadOnly)
* **replicationState**: string (ReadOnly)

## PartnerInfo
### Properties
* **id**: string (Required)
* **location**: string (ReadOnly)
* **replicationRole**: 'Primary' | 'Secondary' (ReadOnly)

## FailoverGroupReadOnlyEndpoint
### Properties
* **failoverPolicy**: 'Disabled' | 'Enabled'

## FailoverGroupReadWriteEndpoint
### Properties
* **failoverPolicy**: 'Automatic' | 'Manual' (Required)
* **failoverWithDataLossGracePeriodMinutes**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerFirewallRuleProperties
### Properties
* **endIpAddress**: string
* **startIpAddress**: string

## JobAgentProperties
### Properties
* **databaseId**: string (Required)
* **state**: 'Creating' | 'Deleting' | 'Disabled' | 'Ready' | 'Updating' (ReadOnly)

## Dictionary<string,String>
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
* **schedule**: [JobSchedule](#jobschedule)
* **version**: int (ReadOnly)

## JobSchedule
### Properties
* **enabled**: bool
* **endTime**: string
* **interval**: string
* **startTime**: string
* **type**: 'Once' | 'Recurring'

## JobExecutionProperties
### Properties
* **createTime**: string (ReadOnly)
* **currentAttempts**: int (ReadOnly)
* **currentAttemptStartTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **jobExecutionId**: string (ReadOnly)
* **jobVersion**: int (ReadOnly)
* **lastMessage**: string (ReadOnly)
* **lifecycle**: 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Skipped' | 'Succeeded' | 'SucceededWithSkipped' | 'TimedOut' | 'WaitingForChildJobExecutions' | 'WaitingForRetry' (ReadOnly)
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **startTime**: string (ReadOnly)
* **stepId**: int (ReadOnly)
* **stepName**: string (ReadOnly)
* **target**: [JobExecutionTarget](#jobexecutiontarget) (ReadOnly)

## JobExecutionTarget
### Properties
* **databaseName**: string (ReadOnly)
* **serverName**: string (ReadOnly)
* **type**: 'SqlDatabase' | 'SqlElasticPool' | 'SqlServer' | 'SqlShardMap' | 'TargetGroup' (ReadOnly)

## JobStepProperties
### Properties
* **action**: [JobStepAction](#jobstepaction) (Required)
* **credential**: string (Required)
* **executionOptions**: [JobStepExecutionOptions](#jobstepexecutionoptions)
* **output**: [JobStepOutput](#jobstepoutput)
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
* **members**: [JobTarget](#jobtarget)[] (Required)

## JobTarget
### Properties
* **databaseName**: string
* **elasticPoolName**: string
* **membershipType**: 'Exclude' | 'Include'
* **refreshCredential**: string
* **serverName**: string
* **shardMapName**: string
* **type**: 'SqlDatabase' | 'SqlElasticPool' | 'SqlServer' | 'SqlShardMap' | 'TargetGroup' (Required)

## ServerKeyProperties
### Properties
* **creationDate**: string (ReadOnly)
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **subregion**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **uri**: string

## SyncAgentProperties
### Properties
* **expiryTime**: string (ReadOnly)
* **isUpToDate**: bool (ReadOnly)
* **lastAliveTime**: string (ReadOnly)
* **name**: string (ReadOnly)
* **state**: 'NeverConnected' | 'Offline' | 'Online' (ReadOnly)
* **syncDatabaseId**: string
* **version**: string (ReadOnly)

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **state**: 'Deleting' | 'Failed' | 'Initializing' | 'InProgress' | 'Ready' | 'Unknown' (ReadOnly)
* **virtualNetworkSubnetId**: string (Required)

## ServerVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties)
* **storageAccountAccessKey**: string
* **storageContainerPath**: string (Required)
* **storageContainerSasKey**: string

