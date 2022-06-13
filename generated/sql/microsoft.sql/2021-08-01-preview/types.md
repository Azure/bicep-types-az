# Microsoft.Sql @ 2021-08-01-preview

## Resource Microsoft.Sql/instancePools@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstancePoolProperties](#instancepoolproperties): Resource properties.
* **sku**: [Sku](#sku): The name and tier of the SKU.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/instancePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/instanceFailoverGroups@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceFailoverGroupProperties](#instancefailovergroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/locations/instanceFailoverGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/serverTrustGroups@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerTrustGroupProperties](#servertrustgroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/locations/serverTrustGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The Azure Active Directory identity of the managed instance.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceProperties](#managedinstanceproperties): Resource properties.
* **sku**: [Sku](#sku): Managed instance SKU. Allowed values for sku.name: GP_Gen4, GP_Gen5, BC_Gen4, BC_Gen5
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/administrators@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ActiveDirectory' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceAdministratorProperties](#managedinstanceadministratorproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceAzureADOnlyAuthProperties](#managedinstanceazureadonlyauthproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDatabaseProperties](#manageddatabaseproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [BaseLongTermRetentionPolicyProperties](#baselongtermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedBackupShortTermRetentionPolicyProperties](#managedbackupshorttermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **managedBy**: string (ReadOnly): Resource that manages the sensitivity label.
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedTransparentDataEncryptionProperties](#managedtransparentdataencryptionproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentProperties](#databasevulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | 'master' (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentRuleBaselineProperties](#databasevulnerabilityassessmentrulebaselineproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DistributedAvailabilityGroupProperties](#distributedavailabilitygroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/distributedAvailabilityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/encryptionProtector@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceEncryptionProtectorProperties](#managedinstanceencryptionprotectorproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/encryptionProtector' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/keys@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceKeyProperties](#managedinstancekeyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/privateEndpointConnections@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstancePrivateEndpointConnectionProperties](#managedinstanceprivateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedBackupShortTermRetentionPolicyProperties](#managedbackupshorttermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/securityAlertPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertsPolicyProperties](#securityalertspolicyproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SecurityAlertPolicyResource.
* **type**: 'Microsoft.Sql/managedInstances/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/serverTrustCertificates@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerTrustCertificateProperties](#servertrustcertificateproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/serverTrustCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/sqlAgent@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [SqlAgentConfigurationProperties](#sqlagentconfigurationproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/sqlAgent' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/vulnerabilityAssessments@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceVulnerabilityAssessmentProperties](#managedinstancevulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The Azure Active Directory identity of the server.
* **kind**: string (ReadOnly): Kind of sql server. This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/administrators@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ActiveDirectory' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorProperties](#administratorproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/auditingSettings@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBlobAuditingPolicyProperties](#serverblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/auditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/azureADOnlyAuthentications@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureADOnlyAuthProperties](#azureadonlyauthproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/connectionPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerConnectionPolicyProperties](#serverconnectionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/connectionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DatabaseIdentity](#databaseidentity): The Azure Active Directory identity of the database.
* **kind**: string (ReadOnly): Kind of database. This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **managedBy**: string (ReadOnly): Resource that manages the database.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): Resource properties.
* **sku**: [Sku](#sku): The database SKU.

The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:

```azurecli
az sql db list-editions -l <location> -o table
````

```powershell
Get-AzSqlServerServiceObjective -Location <location>
````
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/auditingSettings@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseBlobAuditingPolicyProperties](#databaseblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/auditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [BaseLongTermRetentionPolicyProperties](#baselongtermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupShortTermRetentionPolicyProperties](#backupshorttermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/extendedAuditingSettings@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedDatabaseBlobAuditingPolicyProperties](#extendeddatabaseblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/extendedAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/extensions@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseExtensionsProperties](#databaseextensionsproperties) (WriteOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/ledgerDigestUploads@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [LedgerDigestUploadsProperties](#ledgerdigestuploadsproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/ledgerDigestUploads' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/maintenanceWindows@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceWindowsProperties](#maintenancewindowsproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/maintenanceWindows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **managedBy**: string (ReadOnly): Resource that manages the sensitivity label.
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertsPolicyProperties](#securityalertspolicyproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SecurityAlertPolicyResource.
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/syncGroups@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncGroupProperties](#syncgroupproperties): Resource properties.
* **sku**: [Sku](#sku): The name and capacity of the SKU.
* **type**: 'Microsoft.Sql/servers/databases/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/syncGroups/syncMembers@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncMemberProperties](#syncmemberproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/syncGroups/syncMembers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/transparentDataEncryption@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentProperties](#databasevulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | 'master' (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentRuleBaselineProperties](#databasevulnerabilityassessmentrulebaselineproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/workloadGroups@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadGroupProperties](#workloadgroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/workloadGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadClassifierProperties](#workloadclassifierproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/devOpsAuditingSettings@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerDevOpsAuditSettingsProperties](#serverdevopsauditsettingsproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of ServerDevOpsAuditSettingsResource.
* **type**: 'Microsoft.Sql/servers/devOpsAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/dnsAliases@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerDnsAliasProperties](#serverdnsaliasproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/dnsAliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/elasticPools@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of elastic pool. This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ElasticPoolProperties](#elasticpoolproperties): Resource properties.
* **sku**: [Sku](#sku): The elastic pool SKU.

The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or the following command:

```azurecli
az sql elastic-pool list-editions -l <location> -o table
````
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers/elasticPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/encryptionProtector@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionProtectorProperties](#encryptionprotectorproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/encryptionProtector' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/extendedAuditingSettings@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedServerBlobAuditingPolicyProperties](#extendedserverblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/extendedAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/failoverGroups@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FailoverGroupProperties](#failovergroupproperties): Resource properties.
* **tags**: [FailoverGroupTags](#failovergrouptags): Resource tags.
* **type**: 'Microsoft.Sql/servers/failoverGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/firewallRules@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerFirewallRuleProperties](#serverfirewallruleproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/ipv6FirewallRules@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IPv6ServerFirewallRuleProperties](#ipv6serverfirewallruleproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/ipv6FirewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobAgentProperties](#jobagentproperties): Resource properties.
* **sku**: [Sku](#sku): The name and tier of the SKU.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers/jobAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/credentials@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobCredentialProperties](#jobcredentialproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/credentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/executions@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobExecutionProperties](#jobexecutionproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/executions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/steps@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobStepProperties](#jobstepproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/steps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/targetGroups@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobTargetGroupProperties](#jobtargetgroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/targetGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/keys@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerKeyProperties](#serverkeyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/outboundFirewallRules@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OutboundFirewallRuleProperties](#outboundfirewallruleproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/outboundFirewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/privateEndpointConnections@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/securityAlertPolicies@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertsPolicyProperties](#securityalertspolicyproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SecurityAlertPolicyResource.
* **type**: 'Microsoft.Sql/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/syncAgents@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncAgentProperties](#syncagentproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/syncAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/virtualNetworkRules@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/vulnerabilityAssessments@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## AdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' | string (Required): Type of the sever administrator.
* **azureADOnlyAuthentication**: bool (ReadOnly): Azure Active Directory only Authentication enabled.
* **login**: string (Required): Login name of the server administrator.
* **sid**: string (Required): SID (object ID) of the server administrator.
* **tenantId**: string: Tenant ID of the administrator.

## AzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required): Azure Active Directory only Authentication enabled.

## BackupShortTermRetentionPolicyProperties
### Properties
* **diffBackupIntervalInHours**: int: The differential backup interval in hours. This is how many interval hours between each differential backup will be supported. This is only applicable to live databases but not dropped databases.
* **retentionDays**: int: The backup retention period in days. This is how many days Point-in-Time Restore will be supported.

## BaseLongTermRetentionPolicyProperties
### Properties
* **monthlyRetention**: string: The monthly retention policy for an LTR backup in an ISO 8601 format.
* **weeklyRetention**: string: The weekly retention policy for an LTR backup in an ISO 8601 format.
* **weekOfYear**: int: The week of year to take the yearly backup in an ISO 8601 format.
* **yearlyRetention**: string: The yearly retention policy for an LTR backup in an ISO 8601 format.

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
LEDGER_OPERATION_GROUP

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
In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.

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
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the auditing storage account. 
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string: Specifies the blob storage subscription Id.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

## DatabaseExtensionsProperties
### Properties
* **administratorLogin**: string (WriteOnly): Administrator login name.
* **administratorLoginPassword**: string (WriteOnly): Administrator login password.
* **authenticationType**: string (WriteOnly): Authentication type: SQL authentication or AD password.
* **databaseEdition**: string (WriteOnly): Database edition for the newly created database in the case of an import operation.
* **maxSizeBytes**: string (WriteOnly): Database max size in bytes for the newly created database in the case of an import operation.
* **networkIsolation**: [NetworkIsolationSettings](#networkisolationsettings) (WriteOnly): Optional resource information to enable network isolation for request.
* **operationMode**: 'Export' | 'Import' | 'PolybaseImport' | string (Required, WriteOnly): Operation mode of the operation: Import, Export, or PolybaseImport.
* **serviceObjectiveName**: string (WriteOnly): Database service level objective for the newly created database in the case of an import operation.
* **storageKey**: string (Required, WriteOnly): Storage key for the storage account.
* **storageKeyType**: 'SharedAccessKey' | 'StorageAccessKey' | string (Required, WriteOnly): Storage key type: StorageAccessKey or SharedAccessKey.
* **storageUri**: string (Required, WriteOnly): Storage Uri for the storage account.

## DatabaseIdentity
### Properties
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'UserAssigned' | string: The identity type
* **userAssignedIdentities**: [DatabaseIdentityUserAssignedIdentities](#databaseidentityuserassignedidentities): The resource ids of the user assigned identities to use

## DatabaseIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseUserIdentity](#databaseuseridentity)

## DatabaseProperties
### Properties
* **autoPauseDelay**: int: Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled
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
* **currentBackupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string (ReadOnly): The storage account type used to store backups for this database.
* **currentServiceObjectiveName**: string (ReadOnly): The current service level objective name of the database.
* **currentSku**: [Sku](#sku) (ReadOnly): The name and tier of the SKU.
* **databaseId**: string (ReadOnly): The ID of the database.
* **defaultSecondaryLocation**: string (ReadOnly): The default secondary region for this database.
* **earliestRestoreDate**: string (ReadOnly): This records the earliest start date and time that restore is available for this database (ISO8601 format).
* **elasticPoolId**: string: The resource identifier of the elastic pool containing this database.
* **failoverGroupId**: string (ReadOnly): Failover Group resource identifier that this database belongs to.
* **federatedClientId**: string: The Client id used for cross tenant per database CMK scenario
* **highAvailabilityReplicaCount**: int: The number of secondary replicas associated with the database that are used to provide high availability. Not applicable to a Hyperscale database within an elastic pool.
* **isInfraEncryptionEnabled**: bool (ReadOnly): Infra encryption is enabled for this database.
* **isLedgerOn**: bool: Whether or not this database is a ledger database, which means all tables in the database are ledger tables. Note: the value of this property cannot be changed after the database has been created.
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit.
* **longTermRetentionBackupResourceId**: string (WriteOnly): The resource identifier of the long term retention backup associated with create operation of this database.
* **maintenanceConfigurationId**: string: Maintenance configuration id assigned to the database. This configuration defines the period when the maintenance updates will occur.
* **maxLogSizeBytes**: int (ReadOnly): The max log size for this database.
* **maxSizeBytes**: int: The max size of the database expressed in bytes.
* **minCapacity**: int: Minimal capacity that database will always have allocated, if not paused
* **pausedDate**: string (ReadOnly): The date when database was paused by user configuration or action(ISO8601 format). Null if the database is ready.
* **readScale**: 'Disabled' | 'Enabled' | string: The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region. Not applicable to a Hyperscale database within an elastic pool.
* **recoverableDatabaseId**: string (WriteOnly): The resource identifier of the recoverable database associated with create operation of this database.
* **recoveryServicesRecoveryPointId**: string (WriteOnly): The resource identifier of the recovery point associated with create operation of this database.
* **requestedBackupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string: The storage account type to be used to store backups for this database.
* **requestedServiceObjectiveName**: string (ReadOnly): The requested service level objective name of the database.
* **restorableDroppedDatabaseId**: string (WriteOnly): The resource identifier of the restorable dropped database associated with create operation of this database.
* **restorePointInTime**: string (WriteOnly): Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **resumedDate**: string (ReadOnly): The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused.
* **sampleName**: 'AdventureWorksLT' | 'WideWorldImportersFull' | 'WideWorldImportersStd' | string (WriteOnly): The name of the sample schema to apply when creating this database.
* **secondaryType**: 'Geo' | 'Named' | string: The secondary type of the database if it is a secondary.  Valid values are Geo and Named.
* **sourceDatabaseDeletionDate**: string (WriteOnly): Specifies the time that the database was deleted.
* **sourceDatabaseId**: string (WriteOnly): The resource identifier of the source database associated with create operation of this database.
* **sourceResourceId**: string (WriteOnly): The resource identifier of the source associated with the create operation of this database.

When sourceResourceId is specified, sourceDatabaseId, recoverableDatabaseId, restorableDroppedDatabaseId and sourceDatabaseDeletionDate must not be specified and CreateMode must be PointInTimeRestore, Restore or Recover.

When createMode is PointInTimeRestore, sourceResourceId must be the resource ID of an existing database or existing sql pool, and restorePointInTime must be specified.

When createMode is Restore, sourceResourceId must be the resource ID of restorable dropped database or restorable dropped sql pool.

When createMode is Recover, sourceResourceId must be the resource ID of recoverable database or recoverable sql pool.

This property allows to restore across subscriptions which is only supported for DataWarehouse edition.

When source subscription belongs to a different tenant than target subscription, “x-ms-authorization-auxiliary” header must contain authentication token for the source tenant. For more details about “x-ms-authorization-auxiliary” header see https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/authenticate-multi-tenant
* **status**: 'AutoClosed' | 'Copying' | 'Creating' | 'Disabled' | 'EmergencyMode' | 'Inaccessible' | 'Offline' | 'OfflineChangingDwPerformanceTiers' | 'OfflineSecondary' | 'Online' | 'OnlineChangingDwPerformanceTiers' | 'Paused' | 'Pausing' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Resuming' | 'Scaling' | 'Shutdown' | 'Standby' | 'Starting' | 'Stopped' | 'Stopping' | 'Suspect' | string (ReadOnly): The status of the database.
* **zoneRedundant**: bool: Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.

## DatabaseUserIdentity
### Properties
* **clientId**: string (ReadOnly): The Azure Active Directory client id.
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.

## DatabaseVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): The recurring scans settings
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. Applies only if the storage account is not behind a Vnet or a firewall
* **storageContainerPath**: string (WriteOnly): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).  It is required if server level vulnerability assessment policy doesn't set
* **storageContainerSasKey**: string (WriteOnly): A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. Applies only if the storage account is not behind a Vnet or a firewall

## DatabaseVulnerabilityAssessmentRuleBaselineItem
### Properties
* **result**: string[] (Required): The rule baseline result

## DatabaseVulnerabilityAssessmentRuleBaselineProperties
### Properties
* **baselineResults**: [DatabaseVulnerabilityAssessmentRuleBaselineItem](#databasevulnerabilityassessmentrulebaselineitem)[] (Required): The rule baseline result

## DistributedAvailabilityGroupProperties
### Properties
* **distributedAvailabilityGroupId**: string (ReadOnly): The distributed availability group id
* **lastHardenedLsn**: string (ReadOnly): The last hardened lsn
* **linkState**: string (ReadOnly): The link state
* **primaryAvailabilityGroupName**: string: The primary availability group name
* **replicationMode**: 'Async' | 'Sync' | string: The replication mode of a distributed availability group. Parameter will be ignored during link creation.
* **secondaryAvailabilityGroupName**: string: The secondary availability group name
* **sourceEndpoint**: string: The source endpoint
* **sourceReplicaId**: string (ReadOnly): The source replica id
* **targetDatabase**: string: The name of the target database
* **targetReplicaId**: string (ReadOnly): The target replica id

## ElasticPoolPerDatabaseSettings
### Properties
* **maxCapacity**: int: The maximum capacity any one database can consume.
* **minCapacity**: int: The minimum capacity all databases are guaranteed.

## ElasticPoolProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of the elastic pool (ISO8601 format).
* **highAvailabilityReplicaCount**: int: The number of secondary replicas associated with the elastic pool that are used to provide high availability.
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: The license type to apply for this elastic pool.
* **maintenanceConfigurationId**: string: Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur.
* **maxSizeBytes**: int: The storage limit for the database elastic pool in bytes.
* **perDatabaseSettings**: [ElasticPoolPerDatabaseSettings](#elasticpoolperdatabasesettings): The per database settings for the elastic pool.
* **state**: 'Creating' | 'Disabled' | 'Ready' | string (ReadOnly): The state of the elastic pool.
* **zoneRedundant**: bool: Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.

## EncryptionProtectorProperties
### Properties
* **autoRotationEnabled**: bool: Key auto rotation opt-in flag. Either true or false.
* **serverKeyName**: string: The name of the server key.
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' | string (Required): The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
* **subregion**: string (ReadOnly): Subregion of the encryption protector.
* **thumbprint**: string (ReadOnly): Thumbprint of the server key.
* **uri**: string (ReadOnly): The URI of the server key.

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
LEDGER_OPERATION_GROUP

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
In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.

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
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
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
LEDGER_OPERATION_GROUP

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
In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.

When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
Note that for server level audit you should use the 'master' database as {databaseName}.

Diagnostic Settings URI format:
PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview

For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
* **isDevopsAuditEnabled**: bool: Specifies the state of devops audit. If state is Enabled, devops logs will be sent to Azure Monitor.
In order to send the events to Azure Monitor, specify 'State' as 'Enabled', 'IsAzureMonitorTargetEnabled' as true and 'IsDevopsAuditEnabled' as true

When using REST API to configure auditing, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should also be created.

Diagnostic Settings URI format:
PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview

For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
* **isStorageSecondaryKeyInUse**: bool: Specifies whether storageAccountAccessKey value is the storage's secondary key.
* **predicateExpression**: string: Specifies condition of where clause when creating an audit.
* **queueDelayMs**: int: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
* **retentionDays**: int: Specifies the number of days to keep in the audit logs in the storage account.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the auditing storage account. 
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string: Specifies the blob storage subscription Id.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

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

## InstanceFailoverGroupProperties
### Properties
* **managedInstancePairs**: [ManagedInstancePairInfo](#managedinstancepairinfo)[] (Required): List of managed instance pairs in the failover group.
* **partnerRegions**: [PartnerRegionInfo](#partnerregioninfo)[] (Required): Partner region information for the failover group.
* **readOnlyEndpoint**: [InstanceFailoverGroupReadOnlyEndpoint](#instancefailovergroupreadonlyendpoint): Read-only endpoint of the failover group instance.
* **readWriteEndpoint**: [InstanceFailoverGroupReadWriteEndpoint](#instancefailovergroupreadwriteendpoint) (Required): Read-write endpoint of the failover group instance.
* **replicationRole**: 'Primary' | 'Secondary' | string (ReadOnly): Local replication role of the failover group instance.
* **replicationState**: string (ReadOnly): Replication state of the failover group instance.

## InstanceFailoverGroupReadOnlyEndpoint
### Properties
* **failoverPolicy**: 'Disabled' | 'Enabled' | string: Failover policy of the read-only endpoint for the failover group.

## InstanceFailoverGroupReadWriteEndpoint
### Properties
* **failoverPolicy**: 'Automatic' | 'Manual' | string (Required): Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
* **failoverWithDataLossGracePeriodMinutes**: int: Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.

## InstancePoolProperties
### Properties
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string (Required): The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
* **subnetId**: string (Required): Resource ID of the subnet to place this instance pool in.
* **vCores**: int (Required): Count of vCores belonging to this instance pool.

## IPv6ServerFirewallRuleProperties
### Properties
* **endIPv6Address**: string: The end IP address of the firewall rule. Must be IPv6 format. Must be greater than or equal to startIpAddress.
* **startIPv6Address**: string: The start IP address of the firewall rule. Must be IPv6 format.

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
* **interval**: string: Value of the schedule's recurring interval, if the ScheduleType is recurring. ISO8601 duration format.
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

## LedgerDigestUploadsProperties
### Properties
* **digestStorageEndpoint**: string: The digest storage endpoint, which must be either an Azure blob storage endpoint or an URI for Azure Confidential Ledger.
* **state**: 'Disabled' | 'Enabled' (ReadOnly): Specifies the state of ledger digest upload.

## MaintenanceWindowsProperties
### Properties
* **timeRanges**: [MaintenanceWindowTimeRange](#maintenancewindowtimerange)[]

## MaintenanceWindowTimeRange
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string: Day of maintenance window.
* **duration**: string: Duration of maintenance window in minutes.
* **startTime**: string: Start time minutes offset from 12am.

## ManagedBackupShortTermRetentionPolicyProperties
### Properties
* **retentionDays**: int: The backup retention period in days. This is how many days Point-in-Time Restore will be supported.

## ManagedDatabaseProperties
### Properties
* **autoCompleteRestore**: bool (WriteOnly): Whether to auto complete restore of this managed database.
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS' | string: Collation of the metadata catalog.
* **collation**: string: Collation of the managed database.
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup' | string (WriteOnly): Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
* **creationDate**: string (ReadOnly): Creation date of the database.
* **defaultSecondaryLocation**: string (ReadOnly): Geo paired region.
* **earliestRestorePoint**: string (ReadOnly): Earliest restore point in time for point in time restore.
* **failoverGroupId**: string (ReadOnly): Instance Failover Group resource identifier that this managed database belongs to.
* **lastBackupName**: string (WriteOnly): Last backup file name for restore of this managed database.
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

## ManagedInstanceAzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required): Azure Active Directory only Authentication enabled.

## ManagedInstanceEncryptionProtectorProperties
### Properties
* **autoRotationEnabled**: bool: Key auto rotation opt-in flag. Either true or false.
* **serverKeyName**: string: The name of the managed instance key.
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' | string (Required): The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
* **thumbprint**: string (ReadOnly): Thumbprint of the server key.
* **uri**: string (ReadOnly): The URI of the server key.

## ManagedInstanceExternalAdministrator
### Properties
* **administratorType**: 'ActiveDirectory' | string: Type of the sever administrator.
* **azureADOnlyAuthentication**: bool: Azure Active Directory only Authentication enabled.
* **login**: string: Login name of the server administrator.
* **principalType**: 'Application' | 'Group' | 'User' | string: Principal Type of the sever administrator.
* **sid**: string: SID (object ID) of the server administrator.
* **tenantId**: string: Tenant ID of the administrator.

## ManagedInstanceKeyProperties
### Properties
* **autoRotationEnabled**: bool (ReadOnly): Key auto rotation opt-in flag. Either true or false.
* **creationDate**: string (ReadOnly): The key creation date.
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' | string (Required, WriteOnly): The key type like 'ServiceManaged', 'AzureKeyVault'.
* **thumbprint**: string (ReadOnly): Thumbprint of the key.
* **uri**: string (WriteOnly): The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.

## ManagedInstancePairInfo
### Properties
* **partnerManagedInstanceId**: string: Id of Partner Managed Instance in pair.
* **primaryManagedInstanceId**: string: Id of Primary Managed Instance in pair.

## ManagedInstancePecProperty
### Properties
* **id**: string (ReadOnly): Resource ID.
* **properties**: [ManagedInstancePrivateEndpointConnectionProperties](#managedinstanceprivateendpointconnectionproperties) (ReadOnly): Private endpoint connection properties

## ManagedInstancePrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [ManagedInstancePrivateEndpointProperty](#managedinstanceprivateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [ManagedInstancePrivateLinkServiceConnectionStateProperty](#managedinstanceprivatelinkserviceconnectionstateproperty): Connection State of the Private Endpoint Connection.
* **provisioningState**: string (ReadOnly): State of the Private Endpoint Connection.

## ManagedInstancePrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## ManagedInstancePrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The private link service connection description.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

## ManagedInstanceProperties
### Properties
* **administratorLogin**: string: Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
* **administratorLoginPassword**: string (WriteOnly): The administrator login password (required for managed instance creation).
* **administrators**: [ManagedInstanceExternalAdministrator](#managedinstanceexternaladministrator): The Azure Active Directory administrator of the server.
* **collation**: string: Collation of the managed instance.
* **currentBackupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string (ReadOnly): The storage account type used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
* **dnsZone**: string (ReadOnly): The Dns Zone that the managed instance is in.
* **dnsZonePartner**: string (WriteOnly): The resource id of another managed instance whose DNS zone this managed instance will share after creation.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the managed instance.
* **instancePoolId**: string: The Id of the instance pool this managed server belongs to.
* **keyId**: string: A CMK URI of the key to use for encryption.
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
* **maintenanceConfigurationId**: string: Specifies maintenance configuration id to apply to this managed instance.
* **managedInstanceCreateMode**: 'Default' | 'PointInTimeRestore' | string (WriteOnly): Specifies the mode of database creation.

Default: Regular instance creation.

Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
* **minimalTlsVersion**: string: Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
* **primaryUserAssignedIdentityId**: string: The resource id of a user assigned identity to be used by default.
* **privateEndpointConnections**: [ManagedInstancePecProperty](#managedinstancepecproperty)[] (ReadOnly): List of private endpoint connections on a managed instance.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Registering' | 'Running' | 'Succeeded' | 'TimedOut' | 'Unknown' | 'Unrecognized' | 'Updating' | string (ReadOnly)
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect' | string: Connection type used for connecting to the instance.
* **publicDataEndpointEnabled**: bool: Whether or not the public data endpoint is enabled.
* **requestedBackupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string: The storage account type to be used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
* **restorePointInTime**: string (WriteOnly): Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **servicePrincipal**: [ServicePrincipal](#serviceprincipal): The managed instance's service principal.
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
* **zoneRedundant**: bool: Whether or not the multi-az is enabled.

## ManagedInstanceVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): The recurring scans settings
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. Applies only if the storage account is not behind a Vnet or a firewall
* **storageContainerPath**: string (Required, WriteOnly): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).
* **storageContainerSasKey**: string (WriteOnly): A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. Applies only if the storage account is not behind a Vnet or a firewall

## ManagedTransparentDataEncryptionProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the transparent data encryption.

## NetworkIsolationSettings
### Properties
* **sqlServerResourceId**: string (WriteOnly): The resource id for the SQL server which is the target of this request. If set, private endpoint connection will be created for the SQL server. Must match server which is target of the operation.
* **storageAccountResourceId**: string (WriteOnly): The resource id for the storage account used to store BACPAC file. If set, private endpoint connection will be created for the storage account. Must match storage account used for StorageUri parameter.

## OutboundFirewallRuleProperties
### Properties
* **provisioningState**: string (ReadOnly): The state of the outbound rule.

## PartnerInfo
### Properties
* **id**: string (Required): Resource identifier of the partner server.
* **location**: string (ReadOnly): Geo location of the partner server.
* **replicationRole**: 'Primary' | 'Secondary' | string (ReadOnly): Replication role of the partner server.

## PartnerRegionInfo
### Properties
* **location**: string: Geo location of the partner managed instances.
* **replicationRole**: 'Primary' | 'Secondary' | string (ReadOnly): Replication role of the partner managed instances.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): Group IDs.
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): Connection state of the private endpoint connection.
* **provisioningState**: 'Approving' | 'Dropping' | 'Failed' | 'Ready' | 'Rejecting' | string (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: 'None' | string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (Required): The private link service connection status.

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string: The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
* **userAssignedIdentities**: [ResourceIdentityUserAssignedIdentities](#resourceidentityuserassignedidentities): The resource ids of the user assigned identities to use

## ResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **disabledAlerts**: string[]: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action, Brute_Force
* **emailAccountAdmins**: bool: Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string[]: Specifies an array of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' | 'New' (Required): Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
* **storageAccountAccessKey**: string: Specifies the identifier key of the Threat Detection audit storage account.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.

## SecurityAlertsPolicyProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **disabledAlerts**: string[]: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action, Brute_Force
* **emailAccountAdmins**: bool: Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string[]: Specifies an array of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
* **storageAccountAccessKey**: string: Specifies the identifier key of the Threat Detection audit storage account.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.

## SensitivityLabelProperties
### Properties
* **columnName**: string (ReadOnly): The column name.
* **informationType**: string: The information type.
* **informationTypeId**: string: The information type ID.
* **isDisabled**: bool (ReadOnly): Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
* **labelId**: string: The label ID.
* **labelName**: string: The label name.
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None'
* **schemaName**: string (ReadOnly): The schema name.
* **tableName**: string (ReadOnly): The table name.

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
LEDGER_OPERATION_GROUP

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
In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.

When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
Note that for server level audit you should use the 'master' database as {databaseName}.

Diagnostic Settings URI format:
PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview

For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
* **isDevopsAuditEnabled**: bool: Specifies the state of devops audit. If state is Enabled, devops logs will be sent to Azure Monitor.
In order to send the events to Azure Monitor, specify 'State' as 'Enabled', 'IsAzureMonitorTargetEnabled' as true and 'IsDevopsAuditEnabled' as true

When using REST API to configure auditing, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should also be created.

Diagnostic Settings URI format:
PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview

For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
* **isStorageSecondaryKeyInUse**: bool: Specifies whether storageAccountAccessKey value is the storage's secondary key.
* **queueDelayMs**: int: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
* **retentionDays**: int: Specifies the number of days to keep in the audit logs in the storage account.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the auditing storage account. 
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string: Specifies the blob storage subscription Id.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

## ServerConnectionPolicyProperties
### Properties
* **connectionType**: 'Default' | 'Proxy' | 'Redirect' | string (Required): The server connection type.

## ServerDevOpsAuditSettingsProperties
### Properties
* **isAzureMonitorTargetEnabled**: bool: Specifies whether DevOps audit events are sent to Azure Monitor. 
In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.

When using REST API to configure DevOps audit, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should be also created.

Diagnostic Settings URI format:
PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview

For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
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

## ServerExternalAdministrator
### Properties
* **administratorType**: 'ActiveDirectory' | string: Type of the sever administrator.
* **azureADOnlyAuthentication**: bool: Azure Active Directory only Authentication enabled.
* **login**: string: Login name of the server administrator.
* **principalType**: 'Application' | 'Group' | 'User' | string: Principal Type of the sever administrator.
* **sid**: string: SID (object ID) of the server administrator.
* **tenantId**: string: Tenant ID of the administrator.

## ServerFirewallRuleProperties
### Properties
* **endIpAddress**: string: The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' for all Azure-internal IP addresses.
* **startIpAddress**: string: The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' for all Azure-internal IP addresses.

## ServerInfo
### Properties
* **serverId**: string (Required): Server Id.

## ServerKeyProperties
### Properties
* **autoRotationEnabled**: bool (ReadOnly): Key auto rotation opt-in flag. Either true or false.
* **creationDate**: string (ReadOnly): The server key creation date.
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' | string (Required, WriteOnly): The server key type like 'ServiceManaged', 'AzureKeyVault'.
* **subregion**: string (ReadOnly): Subregion of the server key.
* **thumbprint**: string (ReadOnly): Thumbprint of the server key.
* **uri**: string (WriteOnly): The URI of the server key. If the ServerKeyType is AzureKeyVault, then the URI is required.

## ServerPrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Resource ID.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Private endpoint connection properties

## ServerProperties
### Properties
* **administratorLogin**: string: Administrator username for the server. Once created it cannot be changed.
* **administratorLoginPassword**: string (WriteOnly): The administrator login password (required for server creation).
* **administrators**: [ServerExternalAdministrator](#serverexternaladministrator): The Azure Active Directory administrator of the server.
* **federatedClientId**: string: The Client id used for cross tenant CMK scenario
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the server.
* **keyId**: string: A CMK URI of the key to use for encryption.
* **minimalTlsVersion**: string: Minimal TLS version. Allowed values: '1.0', '1.1', '1.2'
* **primaryUserAssignedIdentityId**: string: The resource id of a user assigned identity to be used by default.
* **privateEndpointConnections**: [ServerPrivateEndpointConnection](#serverprivateendpointconnection)[] (ReadOnly): List of private endpoint connections on a server
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
* **restrictOutboundNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not to restrict outbound network access for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
* **state**: string (ReadOnly): The state of the server.
* **version**: string: The version of the server.
* **workspaceFeature**: 'Connected' | 'Disconnected' | string (ReadOnly): Whether or not existing server has a workspace created and if it allows connection from workspace

## ServerTrustCertificateProperties
### Properties
* **certificateName**: string (ReadOnly): The certificate name
* **publicBlob**: string: The certificate public blob
* **thumbprint**: string (ReadOnly): The certificate thumbprint

## ServerTrustGroupProperties
### Properties
* **groupMembers**: [ServerInfo](#serverinfo)[] (Required): Group members information for the server trust group.
* **trustScopes**: 'GlobalTransactions' | 'ServiceBroker' | string[] (Required): Trust scope of the server trust group.

## ServerVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): The recurring scans settings
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. Applies only if the storage account is not behind a Vnet or a firewall
* **storageContainerPath**: string (Required, WriteOnly): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).
* **storageContainerSasKey**: string (WriteOnly): A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. Applies only if the storage account is not behind a Vnet or a firewall

## ServicePrincipal
### Properties
* **clientId**: string (ReadOnly): The Azure Active Directory application client id.
* **principalId**: string (ReadOnly): The Azure Active Directory application object id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'SystemAssigned' | string: Service principal type.

## Sku
### Properties
* **capacity**: int: Capacity of the particular SKU.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU, typically, a letter + Number code, e.g. P3.
* **size**: string: Size of the particular SKU
* **tier**: string: The tier or edition of the particular SKU, e.g. Basic, Premium.

## SqlAgentConfigurationProperties
### Properties
* **state**: 'Disabled' | 'Enabled' | string: The state of Sql Agent.

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
* **conflictLoggingRetentionInDays**: int: Conflict logging retention period.
* **conflictResolutionPolicy**: 'HubWin' | 'MemberWin' | string: Conflict resolution policy of the sync group.
* **enableConflictLogging**: bool: If conflict logging is enabled.
* **hubDatabasePassword**: string (WriteOnly): Password for the sync group hub database credential.
* **hubDatabaseUserName**: string: User name for the sync group hub database credential.
* **interval**: int: Sync interval of the sync group.
* **lastSyncTime**: string (ReadOnly): Last sync time of the sync group.
* **privateEndpointName**: string (ReadOnly): Private endpoint name of the sync group if use private link connection is enabled.
* **schema**: [SyncGroupSchema](#syncgroupschema): Sync schema of the sync group.
* **syncDatabaseId**: string: ARM resource id of the sync database in the sync group.
* **syncState**: 'Error' | 'Good' | 'NotReady' | 'Progressing' | 'Warning' | string (ReadOnly): Sync state of the sync group.
* **usePrivateLinkConnection**: bool: If use private link connection is enabled.

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
* **privateEndpointName**: string (ReadOnly): Private endpoint name of the sync member if use private link connection is enabled, for sync members in Azure.
* **serverName**: string: Server name of the member database in the sync member
* **sqlServerDatabaseId**: string: SQL Server database id of the sync member.
* **syncAgentId**: string: ARM resource id of the sync agent in the sync member.
* **syncDirection**: 'Bidirectional' | 'OneWayHubToMember' | 'OneWayMemberToHub' | string: Sync direction of the sync member.
* **syncMemberAzureDatabaseResourceId**: string: ARM resource id of the sync member logical database, for sync members in Azure.
* **syncState**: 'DeProvisionFailed' | 'DeProvisioned' | 'DeProvisioning' | 'DisabledBackupRestore' | 'DisabledTombstoneCleanup' | 'ProvisionFailed' | 'Provisioned' | 'Provisioning' | 'ReprovisionFailed' | 'Reprovisioning' | 'SyncCancelled' | 'SyncCancelling' | 'SyncFailed' | 'SyncInProgress' | 'SyncSucceeded' | 'SyncSucceededWithWarnings' | 'UnProvisioned' | 'UnReprovisioned' | string (ReadOnly): Sync state of the sync member.
* **usePrivateLinkConnection**: bool: Whether to use private link connection.
* **userName**: string: User name of the member database in the sync member.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TransparentDataEncryptionProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the transparent data encryption.

## UserIdentity
### Properties
* **clientId**: string (ReadOnly): The Azure Active Directory client id.
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool: Create firewall rule before the virtual network has vnet service endpoint enabled.
* **state**: 'Deleting' | 'Failed' | 'InProgress' | 'Initializing' | 'Ready' | 'Unknown' | string (ReadOnly): Virtual Network Rule State
* **virtualNetworkSubnetId**: string (Required): The ARM resource id of the virtual network subnet.

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]: Specifies an array of e-mail addresses to which the scan notification is sent.
* **emailSubscriptionAdmins**: bool: Specifies that the schedule scan notification will be is sent to the subscription administrators.
* **isEnabled**: bool: Recurring scans state.

## WorkloadClassifierProperties
### Properties
* **context**: string: The workload classifier context.
* **endTime**: string: The workload classifier end time for classification.
* **importance**: string: The workload classifier importance.
* **label**: string: The workload classifier label.
* **memberName**: string (Required): The workload classifier member name.
* **startTime**: string: The workload classifier start time for classification.

## WorkloadGroupProperties
### Properties
* **importance**: string: The workload group importance level.
* **maxResourcePercent**: int (Required): The workload group cap percentage resource.
* **maxResourcePercentPerRequest**: int: The workload group request maximum grant percentage.
* **minResourcePercent**: int (Required): The workload group minimum percentage resource.
* **minResourcePercentPerRequest**: int (Required): The workload group request minimum grant percentage.
* **queryExecutionTimeout**: int: The workload group query execution timeout.

