# Microsoft.Sql @ 2024-05-01-preview

## Resource Microsoft.Sql/instancePools@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstancePoolProperties](#instancepoolproperties): Resource properties.
* **sku**: [Sku](#sku): The name and tier of the SKU.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/instancePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/instancePools/operations@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InstancePoolOperationProperties](#instancepooloperationproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/instancePools/operations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/deletedServers@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeletedServerProperties](#deletedserverproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/locations/deletedServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/instanceFailoverGroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceFailoverGroupProperties](#instancefailovergroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/locations/instanceFailoverGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceLongTermRetentionBackupProperties](#managedinstancelongtermretentionbackupproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/longTermRetentionServers/longTermRetentionDatabases/longTermRetentionBackups@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LongTermRetentionBackupProperties](#longtermretentionbackupproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/locations/longTermRetentionServers/longTermRetentionDatabases/longTermRetentionBackups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/managedDatabaseMoveOperationResults@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDatabaseMoveOperationResultProperties](#manageddatabasemoveoperationresultproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/locations/managedDatabaseMoveOperationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/serverTrustGroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerTrustGroupProperties](#servertrustgroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/locations/serverTrustGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/timeZones@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TimeZoneProperties](#timezoneproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/locations/timeZones' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/usages@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionUsageProperties](#subscriptionusageproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/locations/usages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The Azure Active Directory identity of the managed instance.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceProperties](#managedinstanceproperties): Resource properties.
* **sku**: [Sku](#sku): Managed instance SKU. Allowed values for sku.name: GP_Gen5, GP_G8IM, GP_G8IH, BC_Gen5, BC_G8IM, BC_G8IH
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/administrators@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ActiveDirectory' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceAdministratorProperties](#managedinstanceadministratorproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/advancedThreatProtectionSettings@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of AdvancedThreatProtectionResource.
* **type**: 'Microsoft.Sql/managedInstances/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceAzureADOnlyAuthProperties](#managedinstanceazureadonlyauthproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDatabaseProperties](#manageddatabaseproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/advancedThreatProtectionSettings@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of AdvancedThreatProtectionResource.
* **type**: 'Microsoft.Sql/managedInstances/databases/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceLongTermRetentionPolicyProperties](#managedinstancelongtermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedBackupShortTermRetentionPolicyProperties](#managedbackupshorttermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/ledgerDigestUploads@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedLedgerDigestUploadsProperties](#managedledgerdigestuploadsproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/ledgerDigestUploads' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/queries@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QueryProperties](#queryproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/queries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/restoreDetails@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDatabaseRestoreDetailsProperties](#manageddatabaserestoredetailsproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/restoreDetails' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/schemas@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Sql/managedInstances/databases/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/schemas/tables@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseTableProperties](#databasetableproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/schemas/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/schemas/tables/columns@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseColumnProperties](#databasecolumnproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **managedBy**: string (ReadOnly): Resource that manages the sensitivity label.
* **name**: 'current' | 'recommended' (Required, DeployTimeConstant): The resource name
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedTransparentDataEncryptionProperties](#managedtransparentdataencryptionproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentProperties](#databasevulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | 'master' (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentRuleBaselineProperties](#databasevulnerabilityassessmentrulebaselineproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/scans@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VulnerabilityAssessmentScanRecordProperties](#vulnerabilityassessmentscanrecordproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/scans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DistributedAvailabilityGroupProperties](#distributedavailabilitygroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/distributedAvailabilityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/dnsAliases@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **createDnsRecord**: bool (WriteOnly): Whether or not DNS record should be created for this alias.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedServerDnsAliasProperties](#managedserverdnsaliasproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/dnsAliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/dtc@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceDtcProperties](#managedinstancedtcproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/dtc' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/encryptionProtector@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceEncryptionProtectorProperties](#managedinstanceencryptionprotectorproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/encryptionProtector' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/endpointCertificates@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointCertificateProperties](#endpointcertificateproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/endpointCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/keys@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceKeyProperties](#managedinstancekeyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/operations@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceOperationProperties](#managedinstanceoperationproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/operations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/privateEndpointConnections@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstancePrivateEndpointConnectionProperties](#managedinstanceprivateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/privateLinkResources@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstancePrivateLinkProperties](#managedinstanceprivatelinkproperties) (ReadOnly): The private link resource group id.
* **type**: 'Microsoft.Sql/managedInstances/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/recoverableDatabases@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoverableManagedDatabaseProperties](#recoverablemanageddatabaseproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/recoverableDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/restorableDroppedDatabases@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RestorableDroppedManagedDatabaseProperties](#restorabledroppedmanageddatabaseproperties) (ReadOnly): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances/restorableDroppedDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedBackupShortTermRetentionPolicyProperties](#managedbackupshorttermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/securityAlertPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertsPolicyProperties](#securityalertspolicyproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SecurityAlertPolicyResource.
* **type**: 'Microsoft.Sql/managedInstances/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/serverConfigurationOptions@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'allowPolybaseExport' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerConfigurationOptionProperties](#serverconfigurationoptionproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/serverConfigurationOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/serverTrustCertificates@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerTrustCertificateProperties](#servertrustcertificateproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/serverTrustCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/sqlAgent@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [SqlAgentConfigurationProperties](#sqlagentconfigurationproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/sqlAgent' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/startStopSchedules@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [StartStopManagedInstanceScheduleProperties](#startstopmanagedinstancescheduleproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System data of the scheduled resource.
* **type**: 'Microsoft.Sql/managedInstances/startStopSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/vulnerabilityAssessments@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceVulnerabilityAssessmentProperties](#managedinstancevulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The Azure Active Directory identity of the server.
* **kind**: string (ReadOnly): Kind of sql server. This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/administrators@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ActiveDirectory' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorProperties](#administratorproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/advancedThreatProtectionSettings@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of AdvancedThreatProtectionResource.
* **type**: 'Microsoft.Sql/servers/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/advisors@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvisorPropertiesAutoGenerated](#advisorpropertiesautogenerated) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/advisors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/auditingSettings@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBlobAuditingPolicyProperties](#serverblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/auditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/automaticTuning@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [AutomaticTuningServerProperties](#automatictuningserverproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/automaticTuning' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/azureADOnlyAuthentications@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureADOnlyAuthProperties](#azureadonlyauthproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/connectionPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerConnectionPolicyProperties](#serverconnectionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/connectionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

## Resource Microsoft.Sql/servers/databases/advancedThreatProtectionSettings@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of AdvancedThreatProtectionResource.
* **type**: 'Microsoft.Sql/servers/databases/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/advisors@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvisorProperties](#advisorproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/advisors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/advisors/recommendedActions@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendedActionProperties](#recommendedactionproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/advisors/recommendedActions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/auditingSettings@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseBlobAuditingPolicyProperties](#databaseblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/auditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/automaticTuning@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseAutomaticTuningProperties](#databaseautomatictuningproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/automaticTuning' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [BaseLongTermRetentionPolicyProperties](#baselongtermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupShortTermRetentionPolicyProperties](#backupshorttermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/dataMaskingPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of Data Masking Policy. Metadata, used for Azure portal.
* **location**: string (ReadOnly): The location of the data masking policy.
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMaskingPolicyProperties](#datamaskingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/dataMaskingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of Data Masking Rule. Metadata, used for Azure portal.
* **location**: string (ReadOnly): The location of the data masking rule.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMaskingRuleProperties](#datamaskingruleproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/dataWarehouseUserActivities@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DataWarehouseUserActivitiesProperties](#datawarehouseuseractivitiesproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/dataWarehouseUserActivities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/extendedAuditingSettings@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedDatabaseBlobAuditingPolicyProperties](#extendeddatabaseblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/extendedAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/extensions@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseExtensionsProperties](#databaseextensionsproperties) (WriteOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/geoBackupPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of geo backup policy.  This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Backup policy location.
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [GeoBackupPolicyProperties](#geobackuppolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/geoBackupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/ledgerDigestUploads@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [LedgerDigestUploadsProperties](#ledgerdigestuploadsproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/ledgerDigestUploads' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/replicationLinks@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicationLinkProperties](#replicationlinkproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/replicationLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/restorePoints@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RestorePointProperties](#restorepointproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/restorePoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/schemas@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Sql/servers/databases/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/schemas/tables@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseTableProperties](#databasetableproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/schemas/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/schemas/tables/columns@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseColumnProperties](#databasecolumnproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/schemas/tables/columns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **managedBy**: string (ReadOnly): Resource that manages the sensitivity label.
* **name**: 'current' | 'recommended' (Required, DeployTimeConstant): The resource name
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertsPolicyProperties](#securityalertspolicyproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SecurityAlertPolicyResource.
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlVulnerabilityAssessmentPolicyProperties](#sqlvulnerabilityassessmentpolicyproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SqlVulnerabilityAssessmentResource.
* **type**: 'Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseSqlVulnerabilityAssessmentRuleBaselineListInputPropertiesOrDatabaseSqlVulnerabilityAssessmentBaselineSetProperties](#databasesqlvulnerabilityassessmentrulebaselinelistinputpropertiesordatabasesqlvulnerabilityassessmentbaselinesetproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of DatabaseSqlVulnerabilityAssessmentRuleBaselineListInputResource.
* **type**: 'Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines/rules@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseSqlVulnerabilityAssessmentRuleBaselineInputPropertiesOrDatabaseSqlVulnerabilityAssessmentRuleBaselineProperties](#databasesqlvulnerabilityassessmentrulebaselineinputpropertiesordatabasesqlvulnerabilityassessmentrulebaselineproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of DatabaseSqlVulnerabilityAssessmentRuleBaselineInputResource.
* **type**: 'Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines/rules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/scans@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlVulnerabilityAssessmentScanRecordProperties](#sqlvulnerabilityassessmentscanrecordproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SqlVulnerabilityAssessmentScanRecordResource.
* **type**: 'Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/scans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/scans/scanResults@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlVulnerabilityAssessmentScanResultProperties](#sqlvulnerabilityassessmentscanresultproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of AdvancedThreatProtectionResource.
* **type**: 'Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/scans/scanResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/syncGroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncGroupProperties](#syncgroupproperties): Resource properties.
* **sku**: [Sku](#sku): The name and capacity of the SKU.
* **type**: 'Microsoft.Sql/servers/databases/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/syncGroups/syncMembers@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncMemberProperties](#syncmemberproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/syncGroups/syncMembers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/transparentDataEncryption@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentProperties](#databasevulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | 'master' (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseVulnerabilityAssessmentRuleBaselineProperties](#databasevulnerabilityassessmentrulebaselineproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/vulnerabilityAssessments/scans@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VulnerabilityAssessmentScanRecordProperties](#vulnerabilityassessmentscanrecordproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments/scans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/workloadGroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadGroupProperties](#workloadgroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/workloadGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadClassifierProperties](#workloadclassifierproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/devOpsAuditingSettings@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerDevOpsAuditSettingsProperties](#serverdevopsauditsettingsproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of ServerDevOpsAuditSettingsResource.
* **type**: 'Microsoft.Sql/servers/devOpsAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/dnsAliases@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerDnsAliasProperties](#serverdnsaliasproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/dnsAliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/elasticPools@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

## Resource Microsoft.Sql/servers/encryptionProtector@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionProtectorProperties](#encryptionprotectorproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/encryptionProtector' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/extendedAuditingSettings@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedServerBlobAuditingPolicyProperties](#extendedserverblobauditingpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/extendedAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/failoverGroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FailoverGroupProperties](#failovergroupproperties): Resource properties.
* **tags**: [FailoverGroupTags](#failovergrouptags): Resource tags.
* **type**: 'Microsoft.Sql/servers/failoverGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/firewallRules@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerFirewallRuleProperties](#serverfirewallruleproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/ipv6FirewallRules@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IPv6ServerFirewallRuleProperties](#ipv6serverfirewallruleproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/ipv6FirewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [JobAgentIdentity](#jobagentidentity): The identity of the job agent.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobAgentProperties](#jobagentproperties): Resource properties.
* **sku**: [Sku](#sku): The name and tier of the SKU.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/servers/jobAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/credentials@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobCredentialProperties](#jobcredentialproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/credentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/executions@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobExecutionProperties](#jobexecutionproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/executions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/executions/steps@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobExecutionProperties](#jobexecutionproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/executions/steps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/executions/steps/targets@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobExecutionProperties](#jobexecutionproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/executions/steps/targets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/steps@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobStepProperties](#jobstepproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/steps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/versions@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: int (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/jobs/versions/steps@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobStepProperties](#jobstepproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/jobs/versions/steps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/privateEndpoints@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobPrivateEndpointProperties](#jobprivateendpointproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/privateEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/jobAgents/targetGroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobTargetGroupProperties](#jobtargetgroupproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/jobAgents/targetGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/keys@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerKeyProperties](#serverkeyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/networkSecurityPerimeterConfigurations@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/outboundFirewallRules@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OutboundFirewallRuleProperties](#outboundfirewallruleproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/outboundFirewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/privateEndpointConnections@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/privateLinkResources@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The private link resource group id.
* **type**: 'Microsoft.Sql/servers/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/recoverableDatabases@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoverableDatabaseProperties](#recoverabledatabaseproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/servers/recoverableDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/restorableDroppedDatabases@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RestorableDroppedDatabaseProperties](#restorabledroppeddatabaseproperties) (ReadOnly): Resource properties.
* **sku**: [Sku](#sku) (ReadOnly): The name and tier of the SKU.
* **tags**: [RestorableDroppedDatabaseTags](#restorabledroppeddatabasetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Sql/servers/restorableDroppedDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/securityAlertPolicies@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertsPolicyProperties](#securityalertspolicyproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SecurityAlertPolicyResource.
* **type**: 'Microsoft.Sql/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/sqlVulnerabilityAssessments@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlVulnerabilityAssessmentPolicyProperties](#sqlvulnerabilityassessmentpolicyproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SqlVulnerabilityAssessmentResource.
* **type**: 'Microsoft.Sql/servers/sqlVulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/syncAgents@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncAgentProperties](#syncagentproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/syncAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/virtualNetworkRules@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/vulnerabilityAssessments@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/virtualClusters@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualClusterProperties](#virtualclusterproperties) (ReadOnly): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Sql/virtualClusters' (ReadOnly, DeployTimeConstant): The resource type

## AdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' | string: Type of the sever administrator.
* **azureADOnlyAuthentication**: bool (ReadOnly): Azure Active Directory only Authentication enabled.
* **login**: string (Required): Login name of the server administrator.
* **sid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): SID (object ID) of the server administrator.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Tenant ID of the administrator.

## AdvancedThreatProtectionProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **state**: 'Disabled' | 'Enabled' | 'New' (Required): Specifies the state of the Advanced Threat Protection, whether it is enabled or disabled or a state has not been applied yet on the specific database or server.

## AdvisorProperties
### Properties
* **advisorStatus**: 'GA' | 'LimitedPublicPreview' | 'PrivatePreview' | 'PublicPreview' (ReadOnly): Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
* **autoExecuteStatus**: 'Default' | 'Disabled' | 'Enabled' (Required): Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
* **autoExecuteStatusInheritedFrom**: 'Database' | 'Default' | 'ElasticPool' | 'Server' | 'Subscription' (ReadOnly): Gets the resource from which current value of auto-execute status is inherited. Auto-execute status can be set on (and inherited from) different levels in the resource hierarchy. Possible values are 'Subscription', 'Server', 'ElasticPool', 'Database' and 'Default' (when status is not explicitly set on any level).
* **lastChecked**: string (ReadOnly): Gets the time when the current resource was analyzed for recommendations by this advisor.
* **recommendationsStatus**: string (ReadOnly): Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available),LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.
* **recommendedActions**: [RecommendedAction](#recommendedaction)[] (ReadOnly): Gets the recommended actions for this advisor.

## AdvisorPropertiesAutoGenerated
### Properties
* **advisorStatus**: 'GA' | 'LimitedPublicPreview' | 'PrivatePreview' | 'PublicPreview' (ReadOnly): Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
* **autoExecuteStatus**: 'Default' | 'Disabled' | 'Enabled' (Required): Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
* **autoExecuteStatusInheritedFrom**: 'Database' | 'Default' | 'ElasticPool' | 'Server' | 'Subscription' (ReadOnly): Gets the resource from which current value of auto-execute status is inherited. Auto-execute status can be set on (and inherited from) different levels in the resource hierarchy. Possible values are 'Subscription', 'Server', 'ElasticPool', 'Database' and 'Default' (when status is not explicitly set on any level).
* **lastChecked**: string (ReadOnly): Gets the time when the current resource was analyzed for recommendations by this advisor.
* **recommendationsStatus**: string (ReadOnly): Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available),LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.
* **recommendedActions**: [RecommendedActionAutoGenerated](#recommendedactionautogenerated)[] (ReadOnly): Gets the recommended actions for this advisor.

## AutomaticTuningOptions
### Properties
* **actualState**: 'Off' | 'On' (ReadOnly): Automatic tuning option actual state.
* **desiredState**: 'Default' | 'Off' | 'On': Automatic tuning option desired state.
* **reasonCode**: int (ReadOnly): Reason code if desired and actual state are different.
* **reasonDesc**: 'AutoConfigured' | 'Default' | 'Disabled' | 'InheritedFromServer' | 'NotSupported' | 'QueryStoreOff' | 'QueryStoreReadOnly' (ReadOnly): Reason description if desired and actual state are different.

## AutomaticTuningServerOptions
### Properties
* **actualState**: 'Off' | 'On' (ReadOnly): Automatic tuning option actual state.
* **desiredState**: 'Default' | 'Off' | 'On': Automatic tuning option desired state.
* **reasonCode**: int (ReadOnly): Reason code if desired and actual state are different.
* **reasonDesc**: 'AutoConfigured' | 'Default' | 'Disabled' (ReadOnly): Reason description if desired and actual state are different.

## AutomaticTuningServerProperties
### Properties
* **actualState**: 'Auto' | 'Custom' | 'Unspecified' (ReadOnly): Automatic tuning actual state.
* **desiredState**: 'Auto' | 'Custom' | 'Unspecified': Automatic tuning desired state.
* **options**: [AutomaticTuningServerPropertiesOptions](#automatictuningserverpropertiesoptions): Automatic tuning options definition.

## AutomaticTuningServerPropertiesOptions
### Properties
### Additional Properties
* **Additional Properties Type**: [AutomaticTuningServerOptions](#automatictuningserveroptions)

## AzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required): Azure Active Directory only Authentication enabled.

## BackupShortTermRetentionPolicyProperties
### Properties
* **diffBackupIntervalInHours**: int: The differential backup interval in hours. This is how many interval hours between each differential backup will be supported. This is only applicable to live databases but not dropped databases.
* **retentionDays**: int: The backup retention period in days. This is how many days Point-in-Time Restore will be supported.

## Baseline
### Properties
* **expectedResults**: string[][] (ReadOnly): SQL Vulnerability Assessment baseline expected results
* **updatedTime**: string (ReadOnly): SQL Vulnerability Assessment baseline update time (UTC)

## BaselineAdjustedResult
### Properties
* **baseline**: [Baseline](#baseline) (ReadOnly): SQL Vulnerability Assessment baseline details
* **resultsNotInBaseline**: string[][] (ReadOnly): SQL Vulnerability Assessment results that are not in baseline
* **resultsOnlyInBaseline**: string[][] (ReadOnly): SQL Vulnerability Assessment results that are in baseline.
* **status**: 'Finding' | 'InternalError' | 'NonFinding' | string (ReadOnly): SQL Vulnerability Assessment baseline status

## BaseLongTermRetentionPolicyProperties
### Properties
* **monthlyRetention**: string: The monthly retention policy for an LTR backup in an ISO 8601 format.
* **weeklyRetention**: string: The weekly retention policy for an LTR backup in an ISO 8601 format.
* **weekOfYear**: int: The week of year to take the yearly backup in an ISO 8601 format.
* **yearlyRetention**: string: The yearly retention policy for an LTR backup in an ISO 8601 format.

## BenchmarkReference
### Properties
* **benchmark**: string (ReadOnly): SQL Vulnerability Assessment benchmark name
* **reference**: string (ReadOnly): SQL Vulnerability Assessment benchmark reference.

## CertificateInfo
### Properties
* **certificateName**: string (ReadOnly): The certificate name
* **expiryDate**: string (ReadOnly): The certificate expiry date

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
* **isManagedIdentityInUse**: bool: Specifies whether Managed Identity is used to access blob storage
* **isStorageSecondaryKeyInUse**: bool: Specifies whether storageAccountAccessKey value is the storage's secondary key.
* **queueDelayMs**: int: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
* **retentionDays**: int: Specifies the number of days to keep in the audit logs in the storage account.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string {sensitive} (WriteOnly): Specifies the identifier key of the auditing storage account. 
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Specifies the blob storage subscription Id.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

## DatabaseColumnProperties
### Properties
* **columnType**: 'bigint' | 'binary' | 'bit' | 'char' | 'date' | 'datetime' | 'datetime2' | 'datetimeoffset' | 'decimal' | 'float' | 'geography' | 'geometry' | 'hierarchyid' | 'image' | 'int' | 'money' | 'nchar' | 'ntext' | 'numeric' | 'nvarchar' | 'real' | 'smalldatetime' | 'smallint' | 'smallmoney' | 'sql_variant' | 'sysname' | 'text' | 'time' | 'timestamp' | 'tinyint' | 'uniqueidentifier' | 'varbinary' | 'varchar' | 'xml' | string: The column data type.
* **isComputed**: bool: Whether or not the column is computed.
* **memoryOptimized**: bool: Whether or not the column belongs to a memory optimized table.
* **temporalType**: 'HistoryTable' | 'NonTemporalTable' | 'SystemVersionedTemporalTable' | string: The table temporal type.

## DatabaseExtensionsProperties
### Properties
* **administratorLogin**: string (WriteOnly): Administrator login name. If AuthenticationType is ManagedIdentity, this field should specify the Managed Identity's resource ID.
* **administratorLoginPassword**: string {sensitive} (WriteOnly): Administrator login password. If AuthenticationType is ManagedIdentity, this field should not be specified.
* **authenticationType**: string (WriteOnly): Authentication type used to access the SQL: Sql, ADPassword or ManagedIdentity.
* **databaseEdition**: string (WriteOnly): Database edition for the newly created database in the case of an import operation.
* **maxSizeBytes**: string (WriteOnly): Database max size in bytes for the newly created database in the case of an import operation.
* **networkIsolation**: [NetworkIsolationSettings](#networkisolationsettings) (WriteOnly): Optional resource information to enable network isolation for request.
* **operationMode**: 'Export' | 'Import' | 'PolybaseImport' | string (Required, WriteOnly): Operation mode of the operation: Import, Export, or PolybaseImport.
* **serviceObjectiveName**: string (WriteOnly): Database service level objective for the newly created database in the case of an import operation.
* **storageKey**: string (Required, WriteOnly): Storage key for the storage account. If StorageKeyType is ManagedIdentity, this field should specify the Managed Identity's resource ID.
* **storageKeyType**: 'ManagedIdentity' | 'SharedAccessKey' | 'StorageAccessKey' | string (Required, WriteOnly): Storage key type: StorageAccessKey, SharedAccessKey or ManagedIdentity.
* **storageUri**: string (Required, WriteOnly): Storage Uri for the storage account.

## DatabaseIdentity
### Properties
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'UserAssigned' | string: The identity type
* **userAssignedIdentities**: [DatabaseIdentityUserAssignedIdentities](#databaseidentityuserassignedidentities): The resource ids of the user assigned identities to use

## DatabaseIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseUserIdentity](#databaseuseridentity)

## DatabaseKey
### Properties
* **creationDate**: string (ReadOnly): The database key creation date.
* **subregion**: string (ReadOnly): Subregion of the server key.
* **thumbprint**: string (ReadOnly): Thumbprint of the database key.
* **type**: 'AzureKeyVault' | string (ReadOnly): The database key type. Only supported value is 'AzureKeyVault'.

## DatabaseProperties
### Properties
* **autoPauseDelay**: int: Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled
* **availabilityZone**: '1' | '2' | '3' | 'NoPreference' | string: Specifies the availability zone the database is pinned to.
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
* **databaseId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The ID of the database.
* **defaultSecondaryLocation**: string (ReadOnly): The default secondary region for this database.
* **earliestRestoreDate**: string (ReadOnly): This records the earliest start date and time that restore is available for this database (ISO8601 format).
* **elasticPoolId**: string: The resource identifier of the elastic pool containing this database.
* **encryptionProtector**: string: The azure key vault URI of the database if it's configured with per Database Customer Managed Keys.
* **encryptionProtectorAutoRotation**: bool: The flag to enable or disable auto rotation of database encryption protector AKV key.
* **failoverGroupId**: string (ReadOnly): Failover Group resource identifier that this database belongs to.
* **federatedClientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The Client id used for cross tenant per database CMK scenario
* **freeLimitExhaustionBehavior**: 'AutoPause' | 'BillOverUsage' | string: Specifies the behavior when monthly free limits are exhausted for the free database.

AutoPause: The database will be auto paused upon exhaustion of free limits for remainder of the month.

BillForUsage: The database will continue to be online upon exhaustion of free limits and any overage will be billed.
* **highAvailabilityReplicaCount**: int: The number of secondary replicas associated with the Business Critical, Premium, or Hyperscale edition database that are used to provide high availability. Not applicable to a Hyperscale database within an elastic pool.
* **isInfraEncryptionEnabled**: bool (ReadOnly): Infra encryption is enabled for this database.
* **isLedgerOn**: bool: Whether or not this database is a ledger database, which means all tables in the database are ledger tables. Note: the value of this property cannot be changed after the database has been created.
* **keys**: [DatabasePropertiesKeys](#databasepropertieskeys): The resource ids of the user assigned identities to use
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit.
* **longTermRetentionBackupResourceId**: string (WriteOnly): The resource identifier of the long term retention backup associated with create operation of this database.
* **maintenanceConfigurationId**: string: Maintenance configuration id assigned to the database. This configuration defines the period when the maintenance updates will occur.
* **manualCutover**: bool: Whether or not customer controlled manual cutover needs to be done during Update Database operation to Hyperscale tier.

This property is only applicable when scaling database from Business Critical/General Purpose/Premium/Standard tier to Hyperscale tier.

When manualCutover is specified, the scaling operation will wait for user input to trigger cutover to Hyperscale database.

To trigger cutover, please provide 'performCutover' parameter when the Scaling operation is in Waiting state.
* **maxLogSizeBytes**: int (ReadOnly): The max log size for this database.
* **maxSizeBytes**: int: The max size of the database expressed in bytes.
* **minCapacity**: int: Minimal capacity that database will always have allocated, if not paused
* **pausedDate**: string (ReadOnly): The date when database was paused by user configuration or action(ISO8601 format). Null if the database is ready.
* **performCutover**: bool: To trigger customer controlled manual cutover during the wait state while Scaling operation is in progress.

This property parameter is only applicable for scaling operations that are initiated along with 'manualCutover' parameter.

This property is only applicable when scaling database from Business Critical/General Purpose/Premium/Standard tier to Hyperscale tier is already in progress.

When performCutover is specified, the scaling operation will trigger cutover and perform role-change to Hyperscale database.
* **preferredEnclaveType**: 'Default' | 'VBS' | string: Type of enclave requested on the database i.e. Default or VBS enclaves.
* **readScale**: 'Disabled' | 'Enabled' | string: The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region. Not applicable to a Hyperscale database within an elastic pool.
* **recoverableDatabaseId**: string (WriteOnly): The resource identifier of the recoverable database associated with create operation of this database.
* **recoveryServicesRecoveryPointId**: string (WriteOnly): The resource identifier of the recovery point associated with create operation of this database.
* **requestedBackupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string: The storage account type to be used to store backups for this database.
* **requestedServiceObjectiveName**: string (ReadOnly): The requested service level objective name of the database.
* **restorableDroppedDatabaseId**: string (WriteOnly): The resource identifier of the restorable dropped database associated with create operation of this database.
* **restorePointInTime**: string (WriteOnly): Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **resumedDate**: string (ReadOnly): The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused.
* **sampleName**: 'AdventureWorksLT' | 'WideWorldImportersFull' | 'WideWorldImportersStd' | string (WriteOnly): The name of the sample schema to apply when creating this database.
* **secondaryType**: 'Geo' | 'Named' | 'Standby' | string: The secondary type of the database if it is a secondary.  Valid values are Geo, Named and Standby.
* **sourceDatabaseDeletionDate**: string (WriteOnly): Specifies the time that the database was deleted.
* **sourceDatabaseId**: string (WriteOnly): The resource identifier of the source database associated with create operation of this database.
* **sourceResourceId**: string (WriteOnly): The resource identifier of the source associated with the create operation of this database.

This property is only supported for DataWarehouse edition and allows to restore across subscriptions.

When sourceResourceId is specified, sourceDatabaseId, recoverableDatabaseId, restorableDroppedDatabaseId and sourceDatabaseDeletionDate must not be specified and CreateMode must be PointInTimeRestore, Restore or Recover.

When createMode is PointInTimeRestore, sourceResourceId must be the resource ID of the existing database or existing sql pool, and restorePointInTime must be specified.

When createMode is Restore, sourceResourceId must be the resource ID of restorable dropped database or restorable dropped sql pool.

When createMode is Recover, sourceResourceId must be the resource ID of recoverable database or recoverable sql pool.

When source subscription belongs to a different tenant than target subscription, “x-ms-authorization-auxiliary” header must contain authentication token for the source tenant. For more details about “x-ms-authorization-auxiliary” header see https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/authenticate-multi-tenant
* **status**: 'AutoClosed' | 'Copying' | 'Creating' | 'Disabled' | 'EmergencyMode' | 'Inaccessible' | 'Offline' | 'OfflineChangingDwPerformanceTiers' | 'OfflineSecondary' | 'Online' | 'OnlineChangingDwPerformanceTiers' | 'Paused' | 'Pausing' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Resuming' | 'Scaling' | 'Shutdown' | 'Standby' | 'Starting' | 'Stopped' | 'Stopping' | 'Suspect' | string (ReadOnly): The status of the database.
* **useFreeLimit**: bool: Whether or not the database uses free monthly limits. Allowed on one database in a subscription.
* **zoneRedundant**: bool: Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.

## DatabasePropertiesKeys
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseKey](#databasekey)

## DatabaseSqlVulnerabilityAssessmentRuleBaselineInputPropertiesOrDatabaseSqlVulnerabilityAssessmentRuleBaselineProperties
### Properties
* **latestScan**: bool (Required, WriteOnly): The latest scan flag
* **results**: string[][] (Required): The rule baseline result

## DatabaseSqlVulnerabilityAssessmentRuleBaselineListInputPropertiesOrDatabaseSqlVulnerabilityAssessmentBaselineSetProperties
### Properties
* **latestScan**: bool (Required, WriteOnly): The latest scan flag
* **results**: [DatabaseSqlVulnerabilityAssessmentRuleBaselineListInputPropertiesResults](#databasesqlvulnerabilityassessmentrulebaselinelistinputpropertiesresults) (Required): The rule baseline result list

## DatabaseSqlVulnerabilityAssessmentRuleBaselineListInputPropertiesResults
### Properties
### Additional Properties
* **Additional Properties Type**: string[][]

## DatabaseTableProperties
### Properties
* **memoryOptimized**: bool: Whether or not the table is memory optimized.
* **temporalType**: 'HistoryTable' | 'NonTemporalTable' | 'SystemVersionedTemporalTable' | string: The table temporal type.

## DatabaseUserIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The Azure Active Directory client id.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The Azure Active Directory principal id.

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

## DataWarehouseUserActivitiesProperties
### Properties
* **activeQueriesCount**: int (ReadOnly): Count of running and suspended queries.

## DeletedServerProperties
### Properties
* **deletionTime**: string (ReadOnly): The deletion time of the deleted server.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the server.
* **originalId**: string (ReadOnly): The original ID of the server before deletion.
* **version**: string (ReadOnly): The version of the deleted server.

## DistributedAvailabilityGroupDatabase
### Properties
* **connectedState**: 'CONNECTED' | 'DISCONNECTED' | string (ReadOnly): Link connected state
* **databaseName**: string: The name of the database in link
* **instanceRedoReplicationLagSeconds**: int (ReadOnly): Redo lag when Managed Instance link side is primary
* **instanceReplicaId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): Managed instance replica id
* **instanceSendReplicationLagSeconds**: int (ReadOnly): Replication lag when Managed Instance link side is primary
* **lastBackupLsn**: string (ReadOnly): Last backup LSN
* **lastBackupTime**: string (ReadOnly): Last backup LSN time
* **lastCommitLsn**: string (ReadOnly): Last commit LSN
* **lastCommitTime**: string (ReadOnly): Last commit LSN time
* **lastHardenedLsn**: string (ReadOnly): Last hardened LSN
* **lastHardenedTime**: string (ReadOnly): Last hardened LSN time
* **lastReceivedLsn**: string (ReadOnly): Last received LSN
* **lastReceivedTime**: string (ReadOnly): Last received LSN time
* **lastSentLsn**: string (ReadOnly): Last sent LSN
* **lastSentTime**: string (ReadOnly): Last sent LSN time
* **mostRecentLinkError**: string (ReadOnly): The most recent link connection error description
* **partnerAuthCertValidity**: [CertificateInfo](#certificateinfo) (ReadOnly): SQL server certificate validity
* **partnerReplicaId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): SQL server replica id
* **replicaState**: string (ReadOnly): Current link state
* **seedingProgress**: string (ReadOnly): Seeding progress
* **synchronizationHealth**: 'HEALTHY' | 'NOT_HEALTHY' | 'PARTIALLY_HEALTHY' | string (ReadOnly): Link health state

## DistributedAvailabilityGroupProperties
### Properties
* **databases**: [DistributedAvailabilityGroupDatabase](#distributedavailabilitygroupdatabase)[]: Databases in the distributed availability group
* **distributedAvailabilityGroupId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): ID of the distributed availability group
* **distributedAvailabilityGroupName**: string (ReadOnly): Name of the distributed availability group
* **failoverMode**: 'Manual' | 'None' | string: The link failover mode - can be Manual if intended to be used for two-way failover with a supported SQL Server, or None for one-way failover to Azure.
* **instanceAvailabilityGroupName**: string: Managed instance side availability group name
* **instanceLinkRole**: 'Primary' | 'Secondary' | string: Managed instance side link role
* **partnerAvailabilityGroupName**: string: SQL server side availability group name
* **partnerEndpoint**: string: SQL server side endpoint - IP or DNS resolvable name
* **partnerLinkRole**: 'Primary' | 'Secondary' | string (ReadOnly): SQL server side link role
* **replicationMode**: 'Async' | 'Sync' | string: Replication mode of the link
* **seedingMode**: 'Automatic' | 'Manual' | string: Database seeding mode – can be Automatic (default), or Manual for supported scenarios.

## ElasticPoolPerDatabaseSettings
### Properties
* **autoPauseDelay**: int: Auto Pause Delay for per database within pool
* **maxCapacity**: int: The maximum capacity any one database can consume.
* **minCapacity**: int: The minimum capacity all databases are guaranteed.

## ElasticPoolProperties
### Properties
* **autoPauseDelay**: int: Time in minutes after which elastic pool is automatically paused. A value of -1 means that automatic pause is disabled
* **availabilityZone**: '1' | '2' | '3' | 'NoPreference' | string: Specifies the availability zone the pool's primary replica is pinned to.
* **creationDate**: string (ReadOnly): The creation date of the elastic pool (ISO8601 format).
* **highAvailabilityReplicaCount**: int: The number of secondary replicas associated with the Business Critical, Premium, or Hyperscale edition elastic pool that are used to provide high availability. Applicable only to Hyperscale elastic pools.
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: The license type to apply for this elastic pool.
* **maintenanceConfigurationId**: string: Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur.
* **maxSizeBytes**: int: The storage limit for the database elastic pool in bytes.
* **minCapacity**: int: Minimal capacity that serverless pool will not shrink below, if not paused
* **perDatabaseSettings**: [ElasticPoolPerDatabaseSettings](#elasticpoolperdatabasesettings): The per database settings for the elastic pool.
* **preferredEnclaveType**: 'Default' | 'VBS' | string: Type of enclave requested on the elastic pool.
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

## EndpointCertificateProperties
### Properties
* **publicBlob**: string: The certificate public blob

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
* **isManagedIdentityInUse**: bool: Specifies whether Managed Identity is used to access blob storage
* **isStorageSecondaryKeyInUse**: bool: Specifies whether storageAccountAccessKey value is the storage's secondary key.
* **predicateExpression**: string: Specifies condition of where clause when creating an audit.
* **queueDelayMs**: int: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
* **retentionDays**: int: Specifies the number of days to keep in the audit logs in the storage account.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string {sensitive} (WriteOnly): Specifies the identifier key of the auditing storage account. 
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Specifies the blob storage subscription Id.
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
* **isManagedIdentityInUse**: bool: Specifies whether Managed Identity is used to access blob storage
* **isStorageSecondaryKeyInUse**: bool: Specifies whether storageAccountAccessKey value is the storage's secondary key.
* **predicateExpression**: string: Specifies condition of where clause when creating an audit.
* **queueDelayMs**: int: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
* **retentionDays**: int: Specifies the number of days to keep in the audit logs in the storage account.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string {sensitive} (WriteOnly): Specifies the identifier key of the auditing storage account. 
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Specifies the blob storage subscription Id.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

## FailoverGroupProperties
### Properties
* **databases**: string[]: List of databases in the failover group.
* **partnerServers**: [PartnerInfo](#partnerinfo)[] (Required): List of partner server information for the failover group.
* **readOnlyEndpoint**: [FailoverGroupReadOnlyEndpoint](#failovergroupreadonlyendpoint): Read-only endpoint of the failover group instance.
* **readWriteEndpoint**: [FailoverGroupReadWriteEndpoint](#failovergroupreadwriteendpoint) (Required): Read-write endpoint of the failover group instance.
* **replicationRole**: 'Primary' | 'Secondary' | string (ReadOnly): Local replication role of the failover group instance.
* **replicationState**: string (ReadOnly): Replication state of the failover group instance.
* **secondaryType**: 'Geo' | 'Standby' | string (WriteOnly): Databases secondary type on partner server.

## FailoverGroupReadOnlyEndpoint
### Properties
* **failoverPolicy**: 'Disabled' | 'Enabled' | string: Failover policy of the read-only endpoint for the failover group.
* **targetServer**: string: The target partner server where the read-only endpoint points to.

## FailoverGroupReadWriteEndpoint
### Properties
* **failoverPolicy**: 'Automatic' | 'Manual' | string (Required): Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
* **failoverWithDataLossGracePeriodMinutes**: int: Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.

## FailoverGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GeoBackupPolicyProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): The state of the geo backup policy.
* **storageType**: string (ReadOnly): The storage type of the geo backup policy.

## InstanceFailoverGroupProperties
### Properties
* **managedInstancePairs**: [ManagedInstancePairInfo](#managedinstancepairinfo)[] (Required): List of managed instance pairs in the failover group.
* **partnerRegions**: [PartnerRegionInfo](#partnerregioninfo)[] (Required): Partner region information for the failover group.
* **readOnlyEndpoint**: [InstanceFailoverGroupReadOnlyEndpoint](#instancefailovergroupreadonlyendpoint): Read-only endpoint of the failover group instance.
* **readWriteEndpoint**: [InstanceFailoverGroupReadWriteEndpoint](#instancefailovergroupreadwriteendpoint) (Required): Read-write endpoint of the failover group instance.
* **replicationRole**: 'Primary' | 'Secondary' | string (ReadOnly): Local replication role of the failover group instance.
* **replicationState**: string (ReadOnly): Replication state of the failover group instance.
* **secondaryType**: 'Geo' | 'Standby' | string: Type of the geo-secondary instance. Set 'Standby' if the instance is used as a DR option only.

## InstanceFailoverGroupReadOnlyEndpoint
### Properties
* **failoverPolicy**: 'Disabled' | 'Enabled' | string: Failover policy of the read-only endpoint for the failover group.

## InstanceFailoverGroupReadWriteEndpoint
### Properties
* **failoverPolicy**: 'Automatic' | 'Manual' | string (Required): Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
* **failoverWithDataLossGracePeriodMinutes**: int: Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.

## InstancePoolOperationProperties
### Properties
* **description**: string (ReadOnly): The operation description.
* **errorCode**: int (ReadOnly): The operation error code.
* **errorDescription**: string (ReadOnly): The operation error description.
* **errorSeverity**: int (ReadOnly): The operation error severity.
* **errorType**: 'None' | 'User' | string (ReadOnly): Error type (e.g. None, User).
* **estimatedCompletionTime**: string (ReadOnly): The estimated completion time of the operation.
* **instancePoolName**: string (ReadOnly): The name of the instance pool the operation is being performed on.
* **isCancellable**: bool (ReadOnly): Whether the operation can be cancelled.
* **operation**: string (ReadOnly): The name of operation.
* **operationFriendlyName**: string (ReadOnly): The friendly name of operation.
* **percentComplete**: int (ReadOnly): The percentage of the operation completed.
* **startTime**: string (ReadOnly): The operation start time.
* **state**: 'CancelInProgress' | 'Cancelled' | 'Failed' | 'InProgress' | 'Pending' | 'Succeeded' | string (ReadOnly): The operation state.

## InstancePoolProperties
### Properties
* **dnsZone**: string (ReadOnly): The Dns Zone that the managed instance pool is in.
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string (Required): The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
* **maintenanceConfigurationId**: string: Specifies maintenance configuration id to apply to this managed instance.
* **subnetId**: string (Required): Resource ID of the subnet to place this instance pool in.
* **vCores**: int (Required): Count of vCores belonging to this instance pool.

## IPv6ServerFirewallRuleProperties
### Properties
* **endIPv6Address**: string: The end IP address of the firewall rule. Must be IPv6 format. Must be greater than or equal to startIpv6Address.
* **startIPv6Address**: string: The start IP address of the firewall rule. Must be IPv6 format.

## JobAgentIdentity
### Properties
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The job agent identity tenant id
* **type**: 'None' | 'SystemAssigned' | 'SystemAssignedUserAssigned' | 'UserAssigned' | string (Required): The job agent identity type
* **userAssignedIdentities**: [JobAgentIdentityUserAssignedIdentities](#jobagentidentityuserassignedidentities): The resource ids of the user assigned identities to use

## JobAgentIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [JobAgentUserAssignedIdentity](#jobagentuserassignedidentity)

## JobAgentProperties
### Properties
* **databaseId**: string (Required): Resource ID of the database to store job metadata in.
* **state**: 'Creating' | 'Deleting' | 'Disabled' | 'Ready' | 'Updating' | string (ReadOnly): The state of the job agent.

## JobAgentUserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The Azure Active Directory client id.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The Azure Active Directory principal id.

## JobCredentialProperties
### Properties
* **password**: string (Required, WriteOnly): The credential password.
* **username**: string (Required): The credential user name.

## JobExecutionProperties
### Properties
* **createTime**: string (ReadOnly): The time that the job execution was created.
* **currentAttempts**: int: Number of times the job execution has been attempted.
* **currentAttemptStartTime**: string (ReadOnly): Start time of the current attempt.
* **endTime**: string (ReadOnly): The time that the job execution completed.
* **jobExecutionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The unique identifier of the job execution.
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

## JobPrivateEndpointProperties
### Properties
* **privateEndpointId**: string (ReadOnly): Private endpoint id of the private endpoint.
* **targetServerAzureResourceId**: string (Required): ARM resource id of the server the private endpoint will target.

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
* **credential**: string: The resource ID of the credential to use to connect to the output destination.
* **databaseName**: string (Required): The output destination database.
* **resourceGroupName**: string: The output destination resource group.
* **schemaName**: string: The output destination schema.
* **serverName**: string (Required): The output destination server name.
* **subscriptionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The output destination subscription id.
* **tableName**: string (Required): The output destination table.
* **type**: 'SqlDatabase' | string: The output destination type.

## JobStepProperties
### Properties
* **action**: [JobStepAction](#jobstepaction) (Required): The action payload of the job step.
* **credential**: string: The resource ID of the job credential that will be used to connect to the targets.
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

## LongTermRetentionBackupProperties
### Properties
* **backupExpirationTime**: string (ReadOnly): The time the long term retention backup will expire.
* **backupStorageAccessTier**: 'Archive' | 'Hot' | string (ReadOnly): The BackupStorageAccessTier for the LTR backup
* **backupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string (ReadOnly): The storage redundancy type of the backup
* **backupTime**: string (ReadOnly): The time the backup was taken
* **databaseDeletionTime**: string (ReadOnly): The delete time of the database
* **databaseName**: string (ReadOnly): The name of the database the backup belong to
* **isBackupImmutable**: bool: The setting whether the LTR backup is immutable
* **requestedBackupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string (WriteOnly): The storage redundancy type of the backup
* **serverCreateTime**: string (ReadOnly): The create time of the server.
* **serverName**: string (ReadOnly): The server name that the backup database belong to.

## ManagedBackupShortTermRetentionPolicyProperties
### Properties
* **retentionDays**: int: The backup retention period in days. This is how many days Point-in-Time Restore will be supported.

## ManagedDatabaseMoveOperationResultProperties
### Properties
* **errorCode**: int (ReadOnly): The operation error code.
* **errorDescription**: string (ReadOnly): The operation error description.
* **errorSeverity**: int (ReadOnly): The operation error severity.
* **isCancellable**: bool (ReadOnly): Is move operation cancellable.
* **isUserError**: bool (ReadOnly): Whether or not the error is a user error.
* **operation**: string (ReadOnly): The name of operation.
* **operationFriendlyName**: string (ReadOnly): The friendly name of operation.
* **operationMode**: 'Copy' | 'Move' | string (ReadOnly): Operation mode.
* **sourceDatabaseName**: string (ReadOnly): Source database name.
* **sourceManagedInstanceId**: string (ReadOnly): Source Managed Instance resource id.
* **sourceManagedInstanceName**: string (ReadOnly): Source Managed Instance name.
* **startTime**: string (ReadOnly): The operation start time.
* **state**: 'CancelInProgress' | 'Cancelled' | 'Failed' | 'InProgress' | 'Pending' | 'Succeeded' | string (ReadOnly): The operation state.
* **targetDatabaseName**: string (ReadOnly): Target database name.
* **targetManagedInstanceId**: string (ReadOnly): Target Managed instance resource id.
* **targetManagedInstanceName**: string (ReadOnly): Target Managed Instance name.

## ManagedDatabaseProperties
### Properties
* **autoCompleteRestore**: bool (WriteOnly): Whether to auto complete restore of this managed database.
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS' | string: Collation of the metadata catalog.
* **collation**: string: Collation of the managed database.
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup' | string (WriteOnly): Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
* **creationDate**: string (ReadOnly): Creation date of the database.
* **crossSubscriptionRestorableDroppedDatabaseId**: string (WriteOnly): The restorable cross-subscription dropped database resource id to restore when creating this database.
* **crossSubscriptionSourceDatabaseId**: string (WriteOnly): The resource identifier of the cross-subscription source database associated with create operation of this database.
* **crossSubscriptionTargetManagedInstanceId**: string (WriteOnly): Target managed instance id used in cross-subscription restore.
* **defaultSecondaryLocation**: string (ReadOnly): Geo paired region.
* **earliestRestorePoint**: string (ReadOnly): Earliest restore point in time for point in time restore.
* **failoverGroupId**: string (ReadOnly): Instance Failover Group resource identifier that this managed database belongs to.
* **isLedgerOn**: bool: Whether or not this database is a ledger database, which means all tables in the database are ledger tables. Note: the value of this property cannot be changed after the database has been created.
* **lastBackupName**: string (WriteOnly): Last backup file name for restore of this managed database.
* **longTermRetentionBackupResourceId**: string (WriteOnly): The name of the Long Term Retention backup to be used for restore of this managed database.
* **recoverableDatabaseId**: string (WriteOnly): The resource identifier of the recoverable database associated with create operation of this database.
* **restorableDroppedDatabaseId**: string (WriteOnly): The restorable dropped database resource id to restore when creating this database.
* **restorePointInTime**: string (WriteOnly): Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sourceDatabaseId**: string (WriteOnly): The resource identifier of the source database associated with create operation of this database.
* **status**: 'Creating' | 'DbCopying' | 'DbMoving' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): Status of the database.
* **storageContainerIdentity**: string (WriteOnly): Conditional. If createMode is RestoreExternalBackup, this value is used. Specifies the identity used for storage container authentication. Can be 'SharedAccessSignature' or 'ManagedIdentity'; if not specified 'SharedAccessSignature' is assumed.
* **storageContainerSasToken**: string (WriteOnly): Conditional. If createMode is RestoreExternalBackup and storageContainerIdentity is not ManagedIdentity, this value is required. Specifies the storage container sas token.
* **storageContainerUri**: string (WriteOnly): Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.

## ManagedDatabaseRestoreDetailsBackupSetProperties
### Properties
* **backupSizeMB**: int (ReadOnly): Backup size.
* **firstStripeName**: string (ReadOnly): First stripe name.
* **numberOfStripes**: int (ReadOnly): Number of stripes.
* **restoreFinishedTimestampUtc**: string (ReadOnly): Last restored file time.
* **restoreStartedTimestampUtc**: string (ReadOnly): Last restored file time.
* **status**: string (ReadOnly): Backup set status.

## ManagedDatabaseRestoreDetailsProperties
### Properties
* **blockReason**: string (ReadOnly): The reason why restore is in Blocked state.
* **currentBackupType**: string (ReadOnly): Current backup type.
* **currentRestoredSizeMB**: int (ReadOnly): Current restored size MB.
* **currentRestorePlanSizeMB**: int (ReadOnly): Current restore plan size MB.
* **currentRestoringFileName**: string (ReadOnly): Current restoring file name.
* **diffBackupSets**: [ManagedDatabaseRestoreDetailsBackupSetProperties](#manageddatabaserestoredetailsbackupsetproperties)[] (ReadOnly): Diff backup sets.
* **fullBackupSets**: [ManagedDatabaseRestoreDetailsBackupSetProperties](#manageddatabaserestoredetailsbackupsetproperties)[] (ReadOnly): Full backup sets.
* **lastRestoredFileName**: string (ReadOnly): Last restored file name.
* **lastRestoredFileTime**: string (ReadOnly): Last restored file time.
* **lastUploadedFileName**: string (ReadOnly): Last uploaded file name.
* **lastUploadedFileTime**: string (ReadOnly): Last uploaded file time.
* **logBackupSets**: [ManagedDatabaseRestoreDetailsBackupSetProperties](#manageddatabaserestoredetailsbackupsetproperties)[] (ReadOnly): Log backup sets.
* **numberOfFilesDetected**: int (ReadOnly): Number of files detected.
* **numberOfFilesQueued**: int (ReadOnly): Number of files queued.
* **numberOfFilesRestored**: int (ReadOnly): Number of files restored.
* **numberOfFilesRestoring**: int (ReadOnly): Number of files restoring.
* **numberOfFilesSkipped**: int (ReadOnly): Number of files skipped.
* **numberOfFilesUnrestorable**: int (ReadOnly): Number of files unrestorable.
* **percentCompleted**: int (ReadOnly): Percent completed.
* **status**: string (ReadOnly): Restore status.
* **type**: string (ReadOnly): Restore type.
* **unrestorableFiles**: [ManagedDatabaseRestoreDetailsUnrestorableFileProperties](#manageddatabaserestoredetailsunrestorablefileproperties)[] (ReadOnly): Unrestorable files.

## ManagedDatabaseRestoreDetailsUnrestorableFileProperties
### Properties
* **name**: string (ReadOnly): File name.

## ManagedInstanceAdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' | string (Required): Type of the managed instance administrator.
* **login**: string (Required): Login name of the managed instance administrator.
* **sid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): SID (object ID) of the managed instance administrator.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Tenant ID of the managed instance administrator.

## ManagedInstanceAzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required): Azure Active Directory only Authentication enabled.

## ManagedInstanceDtcProperties
### Properties
* **dtcEnabled**: bool: Active status of managed instance DTC.
* **dtcHostNameDnsSuffix**: string (ReadOnly): Host name dns suffix of managed instance DTC.
* **externalDnsSuffixSearchList**: string[]: External dns suffix search list of managed instance DTC.
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of managed instance DTC.
* **securitySettings**: [ManagedInstanceDtcSecuritySettings](#managedinstancedtcsecuritysettings): Security settings of managed instance DTC.

## ManagedInstanceDtcSecuritySettings
### Properties
* **snaLu6point2TransactionsEnabled**: bool: Allow SNA LU 6.2 Transactions to managed instance DTC.
* **transactionManagerCommunicationSettings**: [ManagedInstanceDtcTransactionManagerCommunicationSettings](#managedinstancedtctransactionmanagercommunicationsettings): Transaction Manager communication settings of managed instance DTC.
* **xaTransactionsDefaultTimeout**: int: Default timeout for XA Transactions (in seconds).
* **xaTransactionsEnabled**: bool: Allow XA Transactions to managed instance DTC.
* **xaTransactionsMaximumTimeout**: int: Maximum timeout for XA Transactions (in seconds).

## ManagedInstanceDtcTransactionManagerCommunicationSettings
### Properties
* **allowInboundEnabled**: bool: Allow Inbound traffic to managed instance DTC.
* **allowOutboundEnabled**: bool: Allow Outbound traffic of managed instance DTC.
* **authentication**: string: Authentication type of managed instance DTC.

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
* **sid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: SID (object ID) of the server administrator.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Tenant ID of the administrator.

## ManagedInstanceKeyProperties
### Properties
* **autoRotationEnabled**: bool (ReadOnly): Key auto rotation opt-in flag. Either true or false.
* **creationDate**: string (ReadOnly): The key creation date.
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' | string (Required, WriteOnly): The key type like 'ServiceManaged', 'AzureKeyVault'.
* **thumbprint**: string (ReadOnly): Thumbprint of the key.
* **uri**: string (WriteOnly): The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.

## ManagedInstanceLongTermRetentionBackupProperties
### Properties
* **backupExpirationTime**: string (ReadOnly): The time the long term retention backup will expire.
* **backupStorageAccessTier**: 'Archive' | 'Hot' | string (ReadOnly): The BackupStorageAccessTier for the LTR backup
* **backupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string (ReadOnly): The storage redundancy type of the backup
* **backupTime**: string (ReadOnly): The time the backup was taken
* **databaseDeletionTime**: string (ReadOnly): The delete time of the database
* **databaseName**: string (ReadOnly): The name of the database the backup belong to
* **managedInstanceCreateTime**: string (ReadOnly): The create time of the instance.
* **managedInstanceName**: string (ReadOnly): The managed instance that the backup database belongs to.

## ManagedInstanceLongTermRetentionPolicyProperties
### Properties
* **backupStorageAccessTier**: 'Archive' | 'Hot' | string: The BackupStorageAccessTier for the LTR backups
* **monthlyRetention**: string: The monthly retention policy for an LTR backup in an ISO 8601 format.
* **weeklyRetention**: string: The weekly retention policy for an LTR backup in an ISO 8601 format.
* **weekOfYear**: int: The week of year to take the yearly backup in an ISO 8601 format.
* **yearlyRetention**: string: The yearly retention policy for an LTR backup in an ISO 8601 format.

## ManagedInstanceOperationParametersPair
### Properties
* **currentParameters**: [UpsertManagedServerOperationParameters](#upsertmanagedserveroperationparameters) (ReadOnly): The current parameters.
* **requestedParameters**: [UpsertManagedServerOperationParameters](#upsertmanagedserveroperationparameters) (ReadOnly): The requested parameters.

## ManagedInstanceOperationProperties
### Properties
* **description**: string (ReadOnly): The operation description.
* **errorCode**: int (ReadOnly): The operation error code.
* **errorDescription**: string (ReadOnly): The operation error description.
* **errorSeverity**: int (ReadOnly): The operation error severity.
* **estimatedCompletionTime**: string (ReadOnly): The estimated completion time of the operation.
* **isCancellable**: bool (ReadOnly): Whether the operation can be cancelled.
* **isUserError**: bool (ReadOnly): Whether or not the error is a user error.
* **managedInstanceName**: string (ReadOnly): The name of the managed instance the operation is being performed on.
* **operation**: string (ReadOnly): The name of operation.
* **operationFriendlyName**: string (ReadOnly): The friendly name of operation.
* **operationParameters**: [ManagedInstanceOperationParametersPair](#managedinstanceoperationparameterspair) (ReadOnly): The operation parameters.
* **operationSteps**: [ManagedInstanceOperationSteps](#managedinstanceoperationsteps) (ReadOnly): The operation steps.
* **percentComplete**: int (ReadOnly): The percentage of the operation completed.
* **startTime**: string (ReadOnly): The operation start time.
* **state**: 'CancelInProgress' | 'Cancelled' | 'Failed' | 'InProgress' | 'Pending' | 'Succeeded' | string (ReadOnly): The operation state.

## ManagedInstanceOperationSteps
### Properties
* **currentStep**: int (ReadOnly): The number of current operation steps.
* **stepsList**: [UpsertManagedServerOperationStepWithEstimatesAndDuration](#upsertmanagedserveroperationstepwithestimatesandduration)[] (ReadOnly): The operation steps list.
* **totalSteps**: string (ReadOnly): The total number of operation steps.

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

## ManagedInstancePrivateLinkProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): The private link resource required zone names.

## ManagedInstancePrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The private link service connection description.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

## ManagedInstanceProperties
### Properties
* **administratorLogin**: string: Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
* **administratorLoginPassword**: string {sensitive} (WriteOnly): The administrator login password (required for managed instance creation).
* **administrators**: [ManagedInstanceExternalAdministrator](#managedinstanceexternaladministrator): The Azure Active Directory administrator of the instance. This can only be used at instance create time. If used for instance update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
* **authenticationMetadata**: 'AzureAD' | 'Paired' | 'Windows' | string: The managed instance's authentication metadata lookup mode.
* **collation**: string: Collation of the managed instance.
* **createTime**: string (ReadOnly): Specifies the point in time (ISO8601 format) of the Managed Instance creation.
* **currentBackupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string (ReadOnly): The storage account type used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
* **databaseFormat**: 'AlwaysUpToDate' | 'SQLServer2022' | string: Specifies the internal format of instance databases specific to the SQL engine version.
* **dnsZone**: string (ReadOnly): The Dns Zone that the managed instance is in.
* **dnsZonePartner**: string (WriteOnly): The resource id of another managed instance whose DNS zone this managed instance will share after creation.
* **externalGovernanceStatus**: 'Disabled' | 'Enabled' | string (ReadOnly): Status of external governance.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the managed instance.
* **hybridSecondaryUsage**: 'Active' | 'Passive' | string: Hybrid secondary usage. Possible values are 'Active' (default value) and 'Passive' (customer uses the secondary as Passive DR).
* **hybridSecondaryUsageDetected**: 'Active' | 'Passive' | string (ReadOnly): Hybrid secondary usage detected. Possible values are 'Active' (customer does not meet the requirements to use the secondary as Passive DR) and 'Passive' (customer meets the requirements to use the secondary as Passive DR).
* **instancePoolId**: string: The Id of the instance pool this managed server belongs to.
* **isGeneralPurposeV2**: bool: Whether or not this is a GPv2 variant of General Purpose edition.
* **keyId**: string: A CMK URI of the key to use for encryption.
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
* **maintenanceConfigurationId**: string: Specifies maintenance configuration id to apply to this managed instance.
* **managedInstanceCreateMode**: 'Default' | 'PointInTimeRestore' | string (WriteOnly): Specifies the mode of database creation.

Default: Regular instance creation.

Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
* **minimalTlsVersion**: string: Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
* **pricingModel**: 'Freemium' | 'Regular' | string: Pricing model of Managed Instance.
* **primaryUserAssignedIdentityId**: string: The resource id of a user assigned identity to be used by default.
* **privateEndpointConnections**: [ManagedInstancePecProperty](#managedinstancepecproperty)[] (ReadOnly): List of private endpoint connections on a managed instance.
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of managed instance.
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect' | string: Connection type used for connecting to the instance.
* **publicDataEndpointEnabled**: bool: Whether or not the public data endpoint is enabled.
* **requestedBackupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string: The storage account type to be used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
* **restorePointInTime**: string (WriteOnly): Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **servicePrincipal**: [ServicePrincipal](#serviceprincipal): The managed instance's service principal.
* **sourceManagedInstanceId**: string (WriteOnly): The resource identifier of the source managed instance associated with create operation of this instance.
* **state**: string (ReadOnly): The state of the managed instance.
* **storageIOps**: int: Storage IOps. Minimum value: 300. Maximum value: 80000. Increments of 1 IOps allowed only. Maximum value depends on the selected hardware family and number of vCores.
* **storageSizeInGB**: int: Storage size in GB. Minimum value: 32. Maximum value: 16384. Increments of 32 GB allowed only. Maximum value depends on the selected hardware family and number of vCores.
* **storageThroughputMBps**: int: Storage throughput MBps parameter is not supported in the instance create/update operation.
* **subnetId**: string: Subnet resource ID for the managed instance.
* **timezoneId**: string: Id of the timezone. Allowed values are timezones supported by Windows.
Windows keeps details on supported timezones, including the id, in registry under
KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
* **totalMemoryMB**: int: Total memory in MB. Minimum value: 7168. Maximum value: 891328. Increments of 1 MB allowed only. Maximum value depends on the selected hardware family and number of vCores.
* **vCores**: int: The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.
* **virtualClusterId**: string (ReadOnly): Virtual cluster resource id for the Managed Instance.
* **zoneRedundant**: bool: Whether or not the multi-az is enabled.

## ManagedInstanceVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): The recurring scans settings
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. Applies only if the storage account is not behind a Vnet or a firewall
* **storageContainerPath**: string (Required, WriteOnly): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).
* **storageContainerSasKey**: string (WriteOnly): A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. Applies only if the storage account is not behind a Vnet or a firewall

## ManagedLedgerDigestUploadsProperties
### Properties
* **digestStorageEndpoint**: string: The digest storage endpoint, which must be either an Azure blob storage endpoint or an URI for Azure Confidential Ledger.
* **state**: 'Disabled' | 'Enabled' | string (ReadOnly): Specifies the state of ledger digest upload.

## ManagedServerDnsAliasProperties
### Properties
* **azureDnsRecord**: string (ReadOnly): The fully qualified DNS record for managed server alias
* **publicAzureDnsRecord**: string (ReadOnly): The fully qualified public DNS record for managed server alias

## ManagedTransparentDataEncryptionProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the transparent data encryption.

## NetworkIsolationSettings
### Properties
* **sqlServerResourceId**: string (WriteOnly): The resource id for the SQL server which is the target of this request. If set, private endpoint connection will be created for the SQL server. Must match server which is target of the operation.
* **storageAccountResourceId**: string (WriteOnly): The resource id for the storage account used to store BACPAC file. If set, private endpoint connection will be created for the storage account. Must match storage account used for StorageUri parameter.

## NetworkSecurityPerimeterConfigurationProperties
### Properties
* **networkSecurityPerimeter**: [NSPConfigPerimeter](#nspconfigperimeter)
* **profile**: [NSPConfigProfile](#nspconfigprofile)
* **provisioningIssues**: [NSPProvisioningIssue](#nspprovisioningissue)[]
* **provisioningState**: string
* **resourceAssociation**: [NSPConfigAssociation](#nspconfigassociation)

## NSPConfigAccessRule
### Properties
* **name**: string
* **properties**: [NSPConfigAccessRuleProperties](#nspconfigaccessruleproperties)

## NSPConfigAccessRuleProperties
### Properties
* **addressPrefixes**: string[]
* **direction**: string
* **fullyQualifiedDomainNames**: string[]
* **networkSecurityPerimeters**: [NSPConfigNetworkSecurityPerimeterRule](#nspconfignetworksecurityperimeterrule)[]
* **serviceTags**: string[]
* **subscriptions**: string[]

## NSPConfigAssociation
### Properties
* **accessMode**: string
* **name**: string

## NSPConfigNetworkSecurityPerimeterRule
### Properties
* **id**: string
* **location**: string
* **perimeterGuid**: string

## NSPConfigPerimeter
### Properties
* **id**: string
* **location**: string
* **perimeterGuid**: string

## NSPConfigProfile
### Properties
* **accessRules**: [NSPConfigAccessRule](#nspconfigaccessrule)[]
* **accessRulesVersion**: string
* **name**: string

## NSPProvisioningIssue
### Properties
* **name**: string
* **properties**: [NSPProvisioningIssueProperties](#nspprovisioningissueproperties)

## NSPProvisioningIssueProperties
### Properties
* **description**: string
* **issueType**: string
* **severity**: string
* **suggestedAccessRules**: string[]
* **suggestedResourceIds**: string[]

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

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): The private link resource required zone names.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: 'None' | string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (Required): The private link service connection status.

## QueryCheck
### Properties
* **columnNames**: string[] (ReadOnly): SQL Vulnerability Assessment column names of query expected result.
* **expectedResult**: string[][] (ReadOnly): SQL Vulnerability Assessment query expected result.
* **query**: string (ReadOnly): SQL Vulnerability Assessment rule query.

## QueryProperties
### Properties
* **queryText**: string: Query text.

## RecommendedAction
### Properties
* **id**: string (ReadOnly): Resource ID.
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RecommendedActionProperties](#recommendedactionproperties): Resource properties.
* **type**: string (ReadOnly): Resource type.

## RecommendedActionAutoGenerated
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
* **actionInitiatedBy**: 'System' | 'User' (ReadOnly): Gets who initiated the execution of this recommended action. Possible Value are: User    -> When user explicity notified system to apply the recommended action. System  -> When auto-execute status of this advisor was set to 'Enabled', in which case the system applied it.
* **currentValue**: 'Active' | 'Error' | 'Executing' | 'Expired' | 'Ignored' | 'Monitoring' | 'Pending' | 'PendingRevert' | 'Resolved' | 'RevertCancelled' | 'Reverted' | 'Reverting' | 'Success' | 'Verifying' | string (Required): Current state the recommended action is in. Some commonly used states are: Active      -> recommended action is active and no action has been taken yet. Pending     -> recommended action is approved for and is awaiting execution. Executing   -> recommended action is being applied on the user database. Verifying   -> recommended action was applied and is being verified of its usefulness by the system. Success     -> recommended action was applied and improvement found during verification. Pending Revert  -> verification found little or no improvement so recommended action is queued for revert or user has manually reverted. Reverting   -> changes made while applying recommended action are being reverted on the user database. Reverted    -> successfully reverted the changes made by recommended action on user database. Ignored     -> user explicitly ignored/discarded the recommended action.
* **lastModified**: string (ReadOnly): Gets the time when the state was last modified

## RecoverableDatabaseProperties
### Properties
* **edition**: string (ReadOnly): The edition of the database.
* **elasticPoolName**: string (ReadOnly): The elastic pool name of the database
* **keys**: [RecoverableDatabasePropertiesKeys](#recoverabledatabasepropertieskeys): The resource ids of the user assigned identities to use
* **lastAvailableBackupDate**: string (ReadOnly): The last available backup date.
* **serviceLevelObjective**: string (ReadOnly): The service level objective name of the database.

## RecoverableDatabasePropertiesKeys
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseKey](#databasekey)

## RecoverableManagedDatabaseProperties
### Properties
* **lastAvailableBackupDate**: string (ReadOnly): The last available backup date.

## Remediation
### Properties
* **automated**: bool (ReadOnly): SQL Vulnerability Assessment is remediation automated.
* **description**: string (ReadOnly): SQL Vulnerability Assessment remediation description.
* **portalLink**: string (ReadOnly): SQL Vulnerability Assessment optional link to remediate in Azure Portal.
* **scripts**: string[] (ReadOnly): SQL Vulnerability Assessment remediation script.

## ReplicationLinkProperties
### Properties
* **isTerminationAllowed**: bool (ReadOnly): Whether the user is currently allowed to terminate the link.
* **linkType**: 'GEO' | 'NAMED' | 'STANDBY' | string: Link type (GEO, NAMED, STANDBY). Update operation does not support NAMED.
* **partnerDatabase**: string (ReadOnly): Resource partner database.
* **partnerDatabaseId**: string (ReadOnly): Resource partner database Id.
* **partnerLocation**: string (ReadOnly): Resource partner location.
* **partnerRole**: 'Copy' | 'NonReadableSecondary' | 'Primary' | 'Secondary' | 'Source' (ReadOnly): Partner replication role.
* **partnerServer**: string (ReadOnly): Resource partner server.
* **percentComplete**: int (ReadOnly): Seeding completion percentage for the link.
* **replicationMode**: string (ReadOnly): Replication mode.
* **replicationState**: 'CATCH_UP' | 'PENDING' | 'SEEDING' | 'SUSPENDED' | string (ReadOnly): Replication state (PENDING, SEEDING, CATCHUP, SUSPENDED).
* **role**: 'Copy' | 'NonReadableSecondary' | 'Primary' | 'Secondary' | 'Source' (ReadOnly): Local replication role.
* **startTime**: string (ReadOnly): Time at which the link was created.

## ResourceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string: The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
* **userAssignedIdentities**: [ResourceIdentityUserAssignedIdentities](#resourceidentityuserassignedidentities): The resource ids of the user assigned identities to use

## ResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## RestorableDroppedDatabaseProperties
### Properties
* **backupStorageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string (ReadOnly): The storage account type used to store backups for this database.
* **creationDate**: string (ReadOnly): The creation date of the database (ISO8601 format).
* **databaseName**: string (ReadOnly): The name of the database.
* **deletionDate**: string (ReadOnly): The deletion date of the database (ISO8601 format).
* **earliestRestoreDate**: string (ReadOnly): The earliest restore date of the database (ISO8601 format).
* **keys**: [RestorableDroppedDatabasePropertiesKeys](#restorabledroppeddatabasepropertieskeys): The resource ids of the user assigned identities to use
* **maxSizeBytes**: int (ReadOnly): The max size of the database expressed in bytes.

## RestorableDroppedDatabasePropertiesKeys
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseKey](#databasekey)

## RestorableDroppedDatabaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RestorableDroppedManagedDatabaseProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of the database (ISO8601 format).
* **databaseName**: string (ReadOnly): The name of the database.
* **deletionDate**: string (ReadOnly): The deletion date of the database (ISO8601 format).
* **earliestRestoreDate**: string (ReadOnly): The earliest restore date of the database (ISO8601 format).

## RestorePointProperties
### Properties
* **earliestRestoreDate**: string (ReadOnly): The earliest time to which this database can be restored
* **restorePointCreationDate**: string (ReadOnly): The time the backup was taken
* **restorePointLabel**: string (ReadOnly): The label of restore point for backup request by user
* **restorePointType**: 'CONTINUOUS' | 'DISCRETE' (ReadOnly): The type of restore point

## ScheduleItem
### Properties
* **startDay**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string (Required): Start day.
* **startTime**: string (Required): Start time.
* **stopDay**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string (Required): Stop day.
* **stopTime**: string (Required): Stop time.

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
* **clientClassificationSource**: 'MIP' | 'Native' | 'None' | 'Recommended' | string
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
* **isManagedIdentityInUse**: bool: Specifies whether Managed Identity is used to access blob storage
* **isStorageSecondaryKeyInUse**: bool: Specifies whether storageAccountAccessKey value is the storage's secondary key.
* **queueDelayMs**: int: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
* **retentionDays**: int: Specifies the number of days to keep in the audit logs in the storage account.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string {sensitive} (WriteOnly): Specifies the identifier key of the auditing storage account. 
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Specifies the blob storage subscription Id.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

## ServerConfigurationOptionProperties
### Properties
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of server configuration option.
* **serverConfigurationOptionValue**: int (Required): Value of the server configuration option.

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
* **isManagedIdentityInUse**: bool: Specifies whether Managed Identity is used to access blob storage
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string {sensitive} (WriteOnly): Specifies the identifier key of the auditing storage account. 
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Specifies the blob storage subscription Id.
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
* **sid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: SID (object ID) of the server administrator.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Tenant ID of the administrator.

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
* **uri**: string (WriteOnly): The URI of the server key. If the ServerKeyType is AzureKeyVault, then the URI is required. The AKV URI is required to be in this format: 'https://YourVaultName.vault.azure.net/keys/YourKeyName/YourKeyVersion'

## ServerPrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Resource ID.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Private endpoint connection properties

## ServerProperties
### Properties
* **administratorLogin**: string: Administrator username for the server. Once created it cannot be changed.
* **administratorLoginPassword**: string {sensitive} (WriteOnly): The administrator login password (required for server creation).
* **administrators**: [ServerExternalAdministrator](#serverexternaladministrator): The Azure Active Directory administrator of the server. This can only be used at server create time. If used for server update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
* **externalGovernanceStatus**: 'Disabled' | 'Enabled' | string (ReadOnly): Status of external governance.
* **federatedClientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The Client id used for cross tenant CMK scenario
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the server.
* **isIPv6Enabled**: 'Disabled' | 'Enabled' | string: Whether or not to enable IPv6 support for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
* **keyId**: string: A CMK URI of the key to use for encryption.
* **minimalTlsVersion**: '1.0' | '1.1' | '1.2' | '1.3' | 'None' | string: Minimal TLS version. Allowed values: 'None', 1.0', '1.1', '1.2', '1.3'
* **primaryUserAssignedIdentityId**: string: The resource id of a user assigned identity to be used by default.
* **privateEndpointConnections**: [ServerPrivateEndpointConnection](#serverprivateendpointconnection)[] (ReadOnly): List of private endpoint connections on a server
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' or 'SecuredByPerimeter'
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
* **trustScopes**: ('GlobalTransactions' | 'ServiceBroker' | string)[] (Required): Trust scope of the server trust group.

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

## SqlVulnerabilityAssessmentPolicyProperties
### Properties
* **state**: 'Disabled' | 'Enabled': Specifies the state of the SQL Vulnerability Assessment, whether it is enabled or disabled or a state has not been applied yet on the specific database or server.

## SqlVulnerabilityAssessmentScanError
### Properties
* **code**: string (ReadOnly): The error code.
* **message**: string (ReadOnly): The error message.

## SqlVulnerabilityAssessmentScanRecordProperties
### Properties
* **database**: string (ReadOnly): The database name.
* **endTime**: string (ReadOnly): The scan end time (UTC).
* **errors**: [SqlVulnerabilityAssessmentScanError](#sqlvulnerabilityassessmentscanerror)[] (ReadOnly): The scan errors.
* **highSeverityFailedRulesCount**: int (ReadOnly): The number of failed rules with high severity.
* **isBaselineApplied**: bool (ReadOnly): Baseline created for this database, and has one or more rules.
* **lastScanTime**: string (ReadOnly): The last scan time.
* **lowSeverityFailedRulesCount**: int (ReadOnly): The number of failed rules with low severity.
* **mediumSeverityFailedRulesCount**: int (ReadOnly): The number of failed rules with medium severity.
* **scanId**: string (ReadOnly): The scan ID.
* **server**: string (ReadOnly): The server name.
* **sqlVersion**: string (ReadOnly): The SQL version.
* **startTime**: string (ReadOnly): The scan start time (UTC).
* **state**: 'Failed' | 'FailedToRun' | 'InProgress' | 'Passed' | string (ReadOnly): The scan status.
* **totalFailedRulesCount**: int (ReadOnly): The number of total failed rules.
* **totalPassedRulesCount**: int (ReadOnly): The number of total passed rules.
* **totalRulesCount**: int (ReadOnly): The number of total rules assessed.
* **triggerType**: 'OnDemand' | 'Recurring' | string (ReadOnly): The scan trigger type.

## SqlVulnerabilityAssessmentScanResultProperties
### Properties
* **baselineAdjustedResult**: [BaselineAdjustedResult](#baselineadjustedresult) (ReadOnly): SQL Vulnerability Assessment rule result adjusted with baseline.
* **errorMessage**: string (ReadOnly): SQL Vulnerability Assessment error message.
* **isTrimmed**: bool (ReadOnly): SQL Vulnerability Assessment is the query results trimmed.
* **queryResults**: string[][] (ReadOnly): SQL Vulnerability Assessment query results that was run.
* **remediation**: [Remediation](#remediation) (ReadOnly): SQL Vulnerability Assessment the remediation details.
* **ruleId**: string (ReadOnly): SQL Vulnerability Assessment rule Id.
* **ruleMetadata**: [VaRule](#varule) (ReadOnly): SQL Vulnerability Assessment rule metadata.
* **status**: 'Finding' | 'InternalError' | 'NonFinding' | string (ReadOnly): SQL Vulnerability Assessment rule result status.

## StartStopManagedInstanceScheduleProperties
### Properties
* **description**: string: The description of the schedule.
* **nextExecutionTime**: string (ReadOnly): Timestamp when the next action will be executed in the corresponding schedule time zone.
* **nextRunAction**: string (ReadOnly): Next action to be executed (Start or Stop)
* **scheduleList**: [ScheduleItem](#scheduleitem)[] (Required): Schedule list.
* **timeZoneId**: string: The time zone of the schedule.

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
* **conflictLoggingRetentionInDays**: int: Conflict logging retention period.
* **conflictResolutionPolicy**: 'HubWin' | 'MemberWin' | string: Conflict resolution policy of the sync group.
* **enableConflictLogging**: bool: If conflict logging is enabled.
* **hubDatabasePassword**: string {sensitive} (WriteOnly): Password for the sync group hub database credential.
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
* **sqlServerDatabaseId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: SQL Server database id of the sync member.
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

## TimeZoneProperties
### Properties
* **displayName**: string (ReadOnly): The time zone display name
* **timeZoneId**: string (ReadOnly): The time zone id

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

## UpsertManagedServerOperationParameters
### Properties
* **family**: string
* **storageSizeInGB**: int
* **tier**: string
* **vCores**: int

## UpsertManagedServerOperationStepWithEstimatesAndDuration
### Properties
* **name**: string
* **order**: int
* **status**: 'Canceled' | 'Completed' | 'Failed' | 'InProgress' | 'NotStarted' | 'SlowedDown' | string (ReadOnly)
* **stepEndTime**: string
* **stepStartTime**: string
* **timeElapsed**: string

## UserIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The Azure Active Directory client id.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The Azure Active Directory principal id.

## VaRule
### Properties
* **benchmarkReferences**: [BenchmarkReference](#benchmarkreference)[] (ReadOnly): SQL Vulnerability Assessment benchmark references.
* **category**: string (ReadOnly): SQL Vulnerability Assessment rule category.
* **description**: string (ReadOnly): SQL Vulnerability Assessment rule description.
* **queryCheck**: [QueryCheck](#querycheck) (ReadOnly): SQL Vulnerability Assessment rule query details.
* **rationale**: string (ReadOnly): SQL Vulnerability Assessment rule rationale.
* **ruleId**: string (ReadOnly): SQL Vulnerability Assessment rule Id.
* **ruleType**: 'BaselineExpected' | 'Binary' | 'NegativeList' | 'PositiveList' | string (ReadOnly): SQL Vulnerability Assessment rule type.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | 'Obsolete' | string (ReadOnly): SQL Vulnerability Assessment rule severity.
* **title**: string (ReadOnly): SQL Vulnerability Assessment rule title.

## VirtualClusterProperties
### Properties
* **childResources**: string[] (ReadOnly): List of resources in this virtual cluster.
* **subnetId**: string (ReadOnly): Subnet resource ID for the virtual cluster.
* **version**: string: Virtual cluster version.

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

## VulnerabilityAssessmentScanError
### Properties
* **code**: string (ReadOnly): The error code.
* **message**: string (ReadOnly): The error message.

## VulnerabilityAssessmentScanRecordProperties
### Properties
* **endTime**: string (ReadOnly): The scan end time (UTC).
* **errors**: [VulnerabilityAssessmentScanError](#vulnerabilityassessmentscanerror)[] (ReadOnly): The scan errors.
* **numberOfFailedSecurityChecks**: int (ReadOnly): The number of failed security checks.
* **scanId**: string (ReadOnly): The scan ID.
* **startTime**: string (ReadOnly): The scan start time (UTC).
* **state**: 'Failed' | 'FailedToRun' | 'InProgress' | 'Passed' | string (ReadOnly): The scan status.
* **storageContainerPath**: string (ReadOnly): The scan results storage container path.
* **triggerType**: 'OnDemand' | 'Recurring' | string (ReadOnly): The scan trigger type.

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

