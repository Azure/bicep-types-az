# Microsoft.Synapse @ 2021-03-01

## Resource Microsoft.Synapse/privateLinkHubs@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkHubProperties](#privatelinkhubproperties): PrivateLinkHub properties
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Synapse/privateLinkHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/privateLinkHubs/privateLinkResources@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Properties of a private link resource.
* **type**: 'Microsoft.Synapse/privateLinkHubs/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentity](#managedidentity): The workspace managed identity
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Synapse/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/administrators@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'activeDirectory' (Required, DeployTimeConstant): The resource name
* **properties**: [AadAdminProperties](#aadadminproperties): Workspace active directory administrator properties
* **type**: 'Microsoft.Synapse/workspaces/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/auditingSettings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBlobAuditingPolicyProperties](#serverblobauditingpolicyproperties): Properties of a server blob auditing policy.
* **type**: 'Microsoft.Synapse/workspaces/auditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/bigDataPools@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BigDataPoolResourceProperties](#bigdatapoolresourceproperties): Properties of a Big Data pool powered by Apache Spark
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Synapse/workspaces/bigDataPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/encryptionProtector@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector. This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionProtectorProperties](#encryptionprotectorproperties): Properties for an encryption protector execution.
* **type**: 'Microsoft.Synapse/workspaces/encryptionProtector' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/extendedAuditingSettings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedServerBlobAuditingPolicyProperties](#extendedserverblobauditingpolicyproperties): Properties of an extended server blob auditing policy.
* **type**: 'Microsoft.Synapse/workspaces/extendedAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/firewallRules@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IpFirewallRuleProperties](#ipfirewallruleproperties): IP firewall rule properties
* **type**: 'Microsoft.Synapse/workspaces/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/integrationRuntimes@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationRuntime](#integrationruntime) (Required): Azure Synapse nested object which serves as a compute resource for activities.
* **type**: 'Microsoft.Synapse/workspaces/integrationRuntimes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/keys@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [KeyProperties](#keyproperties): Key properties
* **type**: 'Microsoft.Synapse/workspaces/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/libraries@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LibraryInfo](#libraryinfo) (ReadOnly): Library/package information of a Big Data pool powered by Apache Spark
* **type**: 'Microsoft.Synapse/workspaces/libraries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedIdentitySqlControlSettingsModelProperties](#managedidentitysqlcontrolsettingsmodelproperties): Sql Control Settings for workspace managed identity
* **type**: 'Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/privateEndpointConnections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.
* **type**: 'Microsoft.Synapse/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/privateLinkResources@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Properties of a private link resource.
* **type**: 'Microsoft.Synapse/workspaces/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/recoverableSqlPools@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoverableSqlPoolProperties](#recoverablesqlpoolproperties) (ReadOnly): The properties of a recoverable sql pool
* **type**: 'Microsoft.Synapse/workspaces/recoverableSqlPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/restorableDroppedSqlPools@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RestorableDroppedSqlPoolProperties](#restorabledroppedsqlpoolproperties) (ReadOnly): The properties of a restorable dropped Sql pool
* **type**: 'Microsoft.Synapse/workspaces/restorableDroppedSqlPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/securityAlertPolicies@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' (Required, DeployTimeConstant): The resource name
* **properties**: [ServerSecurityAlertPolicyProperties](#serversecurityalertpolicyproperties): Properties of a security alert policy.
* **type**: 'Microsoft.Synapse/workspaces/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlAdministrators@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'activeDirectory' (Required, DeployTimeConstant): The resource name
* **properties**: [AadAdminProperties](#aadadminproperties): Workspace active directory administrator properties
* **type**: 'Microsoft.Synapse/workspaces/sqlAdministrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlPoolResourceProperties](#sqlpoolresourceproperties): Properties of a SQL Analytics pool
* **sku**: [Sku](#sku): SQL pool SKU
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SqlPoolBlobAuditingPolicyProperties](#sqlpoolblobauditingpolicyproperties): Properties of a Sql pool blob auditing policy.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/auditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/connectionPolicies@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Resource kind.
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SqlPoolConnectionPolicyProperties](#sqlpoolconnectionpolicyproperties) (ReadOnly): Properties of a Sql pool connection policy.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/connectionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of data masking policy. Metadata, used for Azure portal.
* **location**: string (ReadOnly): The location of the data masking policy.
* **managedBy**: string (ReadOnly): Fully qualified resource ID of the sql pool
* **name**: 'Default' (Required, DeployTimeConstant): The resource name
* **properties**: [DataMaskingPolicyProperties](#datamaskingpolicyproperties): The properties of a database data masking policy.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of Data Masking Rule. Metadata, used for Azure portal.
* **location**: string (ReadOnly): The location of the data masking rule.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMaskingRuleProperties](#datamaskingruleproperties): The properties of a Sql pool data masking rule.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/dataWarehouseUserActivities@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [DataWarehouseUserActivitiesProperties](#datawarehouseuseractivitiesproperties) (ReadOnly): User activities of a data warehouse. This currently includes the count of running or suspended queries. For more information, please view the sys.dm_pdw_exec_requests dynamic management view (DMV).
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/dataWarehouseUserActivities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedSqlPoolBlobAuditingPolicyProperties](#extendedsqlpoolblobauditingpolicyproperties): Properties of an extended Sql pool blob auditing policy.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of geo backup policy.  This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Backup policy location.
* **name**: 'Default' (Required, DeployTimeConstant): The resource name
* **properties**: [GeoBackupPolicyProperties](#geobackuppolicyproperties) (Required): The properties of the geo backup policy.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/maintenanceWindowOptions@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceWindowOptionsProperties](#maintenancewindowoptionsproperties) (ReadOnly): Maintenance window options properties.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/maintenanceWindowOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/maintenancewindows@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceWindowsProperties](#maintenancewindowsproperties): Maintenance windows resource properties.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/maintenancewindows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/metadataSync@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'config' (Required, DeployTimeConstant): The resource name
* **properties**: [MetadataSyncConfigProperties](#metadatasyncconfigproperties): Metadata Sync Config properties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/metadataSync' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/replicationLinks@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the workspace that contains this firewall rule.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicationLinkProperties](#replicationlinkproperties) (ReadOnly): Represents the properties of a Sql pool replication link.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/replicationLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/restorePoints@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RestorePointProperties](#restorepointproperties) (ReadOnly): Properties of a database restore point
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/restorePoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/schemas@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/schemas/tables@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/schemas/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlPoolColumnProperties](#sqlpoolcolumnproperties) (ReadOnly): Sql pool column properties.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **managedBy**: string (ReadOnly): managed by
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties): Properties of a sensitivity label.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Properties of a security alert policy.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties): Represents the properties of a database transparent data encryption.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SqlPoolVulnerabilityAssessmentProperties](#sqlpoolvulnerabilityassessmentproperties): Properties of a Sql pool Vulnerability Assessment.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | 'master' (Required, DeployTimeConstant): The resource name
* **properties**: [SqlPoolVulnerabilityAssessmentRuleBaselineProperties](#sqlpoolvulnerabilityassessmentrulebaselineproperties): Properties of a Sql pool vulnerability assessment rule baseline.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/scans@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VulnerabilityAssessmentScanRecordProperties](#vulnerabilityassessmentscanrecordproperties) (ReadOnly): Properties of a vulnerability assessment scan record.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/scans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadGroupProperties](#workloadgroupproperties): Workload group definition. For more information look at sys.workload_management_workload_groups (DMV).
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadClassifierProperties](#workloadclassifierproperties): Workload classifier definition. For more information look at sys.workload_management_workload_classifiers (DMV).
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/vulnerabilityAssessments@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties): Properties of a server Vulnerability Assessment.
* **type**: 'Microsoft.Synapse/workspaces/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Function listAuthKeys (Microsoft.Synapse/workspaces/integrationRuntimes@2021-03-01)
* **Resource**: Microsoft.Synapse/workspaces/integrationRuntimes
* **ApiVersion**: 2021-03-01
* **Output**: [IntegrationRuntimeAuthKeys](#integrationruntimeauthkeys)

## PrivateLinkHubProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnectionForPrivateLinkHubBasic](#privateendpointconnectionforprivatelinkhubbasic)[] (ReadOnly): List of private endpoint connections
* **provisioningState**: string: PrivateLinkHub provisioning state

## PrivateEndpointConnectionForPrivateLinkHubBasic
### Properties
* **id**: string (ReadOnly): identifier
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Private endpoint details
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Connection state details of the private endpoint
* **provisioningState**: string (ReadOnly): Provisioning state of the private endpoint connection.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): Resource id of the private endpoint.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): The actions required for private link service connection.
* **description**: string: The private link service connection description.
* **status**: string: The private link service connection status.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): Required DNS zone names of the the private link resource.

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of the workspace managed identity
* **tenantId**: string (ReadOnly): The tenant ID of the workspace managed identity
* **type**: 'None' | 'SystemAssigned': The type of managed identity for the workspace

## WorkspaceProperties
### Properties
* **adlaResourceId**: string (ReadOnly): The ADLA resource ID.
* **connectivityEndpoints**: [WorkspacePropertiesConnectivityEndpoints](#workspacepropertiesconnectivityendpoints): Connectivity endpoints
* **defaultDataLakeStorage**: [DataLakeStorageAccountDetails](#datalakestorageaccountdetails): Details of the data lake storage account associated with the workspace
* **encryption**: [EncryptionDetails](#encryptiondetails): Details of the encryption associated with the workspace
* **extraProperties**: [WorkspacePropertiesExtraProperties](#workspacepropertiesextraproperties) (ReadOnly): Workspace level configs and feature flags
* **managedResourceGroupName**: string: Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.'
* **managedVirtualNetwork**: string: Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user.
* **managedVirtualNetworkSettings**: [ManagedVirtualNetworkSettings](#managedvirtualnetworksettings): Managed Virtual Network Settings
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: Private endpoint connections to the workspace
* **provisioningState**: string (ReadOnly): Resource provisioning state
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Enable or Disable public network access to workspace
* **purviewConfiguration**: [PurviewConfiguration](#purviewconfiguration): Purview Configuration
* **sqlAdministratorLogin**: string: Login for workspace SQL active directory administrator
* **sqlAdministratorLoginPassword**: string: SQL administrator login password
* **virtualNetworkProfile**: [VirtualNetworkProfile](#virtualnetworkprofile): Virtual Network Profile
* **workspaceRepositoryConfiguration**: [WorkspaceRepositoryConfiguration](#workspacerepositoryconfiguration): Git integration settings
* **workspaceUID**: string (ReadOnly): The workspace unique identifier

## WorkspacePropertiesConnectivityEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataLakeStorageAccountDetails
### Properties
* **accountUrl**: string: Account URL
* **filesystem**: string: Filesystem name

## EncryptionDetails
### Properties
* **cmk**: [CustomerManagedKeyDetails](#customermanagedkeydetails): Details of the customer managed key associated with the workspace
* **doubleEncryptionEnabled**: bool (ReadOnly): Double Encryption enabled

## CustomerManagedKeyDetails
### Properties
* **key**: [WorkspaceKeyDetails](#workspacekeydetails): Details of the customer managed key associated with the workspace
* **status**: string (ReadOnly): The customer managed key status on the workspace

## WorkspaceKeyDetails
### Properties
* **keyVaultUrl**: string: Workspace Key sub-resource key vault url
* **name**: string: Workspace Key sub-resource name

## WorkspacePropertiesExtraProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ManagedVirtualNetworkSettings
### Properties
* **allowedAadTenantIdsForLinking**: string[]: Allowed Aad Tenant Ids For Linking
* **linkedAccessCheckOnTargetResource**: bool: Linked Access Check On Target Resource
* **preventDataExfiltration**: bool: Prevent Data Exfiltration

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PurviewConfiguration
### Properties
* **purviewResourceId**: string: Purview Resource ID

## VirtualNetworkProfile
### Properties
* **computeSubnetId**: string: Subnet ID used for computes in workspace

## WorkspaceRepositoryConfiguration
### Properties
* **accountName**: string: Account name
* **collaborationBranch**: string: Collaboration branch
* **hostName**: string: GitHub Enterprise host name. For example: https://github.mydomain.com
* **lastCommitId**: string: The last commit ID
* **projectName**: string: VSTS project name
* **repositoryName**: string: Repository name
* **rootFolder**: string: Root folder to use in the repository
* **tenantId**: string: The VSTS tenant ID
* **type**: string: Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AadAdminProperties
### Properties
* **administratorType**: string: Workspace active directory administrator type
* **login**: string: Login of the workspace active directory administrator
* **sid**: string: Object ID of the workspace active directory administrator
* **tenantId**: string: Tenant ID of the workspace active directory administrator

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

## BigDataPoolResourceProperties
### Properties
* **autoPause**: [AutoPauseProperties](#autopauseproperties): Auto-pausing properties of a Big Data pool powered by Apache Spark
* **autoScale**: [AutoScaleProperties](#autoscaleproperties): Auto-scaling properties of a Big Data pool powered by Apache Spark
* **cacheSize**: int: The cache size
* **creationDate**: string: The time when the Big Data pool was created.
* **customLibraries**: [LibraryInfo](#libraryinfo)[]: List of custom libraries/packages associated with the spark pool.
* **defaultSparkLogFolder**: string: The default folder where Spark logs will be written.
* **dynamicExecutorAllocation**: [DynamicExecutorAllocation](#dynamicexecutorallocation): Dynamic Executor Allocation Properties
* **isComputeIsolationEnabled**: bool: Whether compute isolation is required or not.
* **lastSucceededTimestamp**: string (ReadOnly): The time when the Big Data pool was updated successfully.
* **libraryRequirements**: [LibraryRequirements](#libraryrequirements): Library requirements for a Big Data pool powered by Apache Spark
* **nodeCount**: int: The number of nodes in the Big Data pool.
* **nodeSize**: 'Large' | 'Medium' | 'None' | 'Small' | 'XLarge' | 'XXLarge' | 'XXXLarge': The level of compute power that each node in the Big Data pool has.
* **nodeSizeFamily**: 'HardwareAcceleratedFPGA' | 'HardwareAcceleratedGPU' | 'MemoryOptimized' | 'None': The kind of nodes that the Big Data pool provides.
* **provisioningState**: string: The state of the Big Data pool.
* **sessionLevelPackagesEnabled**: bool: Whether session level packages enabled.
* **sparkConfigProperties**: [LibraryRequirements](#libraryrequirements): Library requirements for a Big Data pool powered by Apache Spark
* **sparkEventsFolder**: string: The Spark events folder
* **sparkVersion**: string: The Apache Spark version.

## AutoPauseProperties
### Properties
* **delayInMinutes**: int: Number of minutes of idle time before the Big Data pool is automatically paused.
* **enabled**: bool: Whether auto-pausing is enabled for the Big Data pool.

## AutoScaleProperties
### Properties
* **enabled**: bool: Whether automatic scaling is enabled for the Big Data pool.
* **maxNodeCount**: int: The maximum number of nodes the Big Data pool can support.
* **minNodeCount**: int: The minimum number of nodes the Big Data pool can support.

## LibraryInfo
### Properties
* **containerName**: string: Storage blob container name.
* **creatorId**: string (ReadOnly): Creator Id of the library/package.
* **name**: string: Name of the library.
* **path**: string: Storage blob path of library.
* **provisioningStatus**: string (ReadOnly): Provisioning status of the library/package.
* **type**: string: Type of the library.
* **uploadedTimestamp**: string (ReadOnly): The last update time of the library.

## DynamicExecutorAllocation
### Properties
* **enabled**: bool: Indicates whether Dynamic Executor Allocation is enabled or not.

## LibraryRequirements
### Properties
* **content**: string: The library requirements.
* **filename**: string: The filename of the library requirements file.
* **time**: string (ReadOnly): The last update time of the library requirements file.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EncryptionProtectorProperties
### Properties
* **serverKeyName**: string: The name of the server key.
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required): The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
* **subregion**: string (ReadOnly): Subregion of the encryption protector.
* **thumbprint**: string (ReadOnly): Thumbprint of the server key.
* **uri**: string (ReadOnly): The URI of the server key.

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

## IpFirewallRuleProperties
### Properties
* **endIpAddress**: string: The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress
* **provisioningState**: 'DeleteError' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly): Resource provisioning state
* **startIpAddress**: string: The start IP address of the firewall rule. Must be IPv4 format

## IntegrationRuntime
* **Discriminator**: type

### Base Properties
* **description**: string: Integration runtime description.
### ManagedIntegrationRuntime
#### Properties
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): The state of integration runtime.
* **type**: 'Managed' (Required): Type of integration runtime.
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required): Managed integration runtime type properties.

### SelfHostedIntegrationRuntime
#### Properties
* **type**: 'SelfHosted' (Required): Type of integration runtime.
* **typeProperties**: [SelfHostedIntegrationRuntimeTypeProperties](#selfhostedintegrationruntimetypeproperties): The self-hosted integration runtime properties.


## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties): The compute resource properties for managed integration runtime.
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties): SSIS properties for managed integration runtime.

## IntegrationRuntimeComputeProperties
### Properties
* **dataFlowProperties**: [IntegrationRuntimeDataFlowProperties](#integrationruntimedataflowproperties): Data flow properties for managed integration runtime.
* **location**: string: The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
* **maxParallelExecutionsPerNode**: int: Maximum parallel executions count per node for managed integration runtime.
* **nodeSize**: string: The node size requirement to managed integration runtime.
* **numberOfNodes**: int: The required number of nodes for managed integration runtime.
* **vNetProperties**: [IntegrationRuntimeVNetProperties](#integrationruntimevnetproperties): VNet properties for managed integration runtime.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeDataFlowProperties
### Properties
* **computeType**: 'ComputeOptimized' | 'General' | 'MemoryOptimized': Compute type of the cluster which will execute data flow job.
* **coreCount**: int: Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
* **timeToLive**: int: Time to live (in minutes) setting of the cluster which will execute data flow job.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeVNetProperties
### Properties
* **publicIPs**: string[]: Resource IDs of the public IP addresses that this integration runtime will use.
* **subnet**: string: The name of the subnet this integration runtime will join.
* **subnetId**: string: The ID of subnet, to which this Azure-SSIS integration runtime will be joined.
* **vNetId**: string: The ID of the VNet that this integration runtime will join.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: [IntegrationRuntimeSsisCatalogInfo](#integrationruntimessiscataloginfo): Catalog information for managed dedicated integration runtime.
* **customSetupScriptProperties**: [IntegrationRuntimeCustomSetupScriptProperties](#integrationruntimecustomsetupscriptproperties): Custom setup script properties for a managed dedicated integration runtime.
* **dataProxyProperties**: [IntegrationRuntimeDataProxyProperties](#integrationruntimedataproxyproperties): Data proxy properties for a managed dedicated integration runtime.
* **edition**: 'Enterprise' | 'Standard': The edition for the SSIS Integration Runtime
* **expressCustomSetupProperties**: [CustomSetupBase](#customsetupbase)[]: Custom setup without script properties for a SSIS integration runtime.
* **licenseType**: 'BasePrice' | 'LicenseIncluded': License type for bringing your own license scenario.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: [SecureString](#securestring): Azure Synapse secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **catalogAdminUserName**: string: The administrator user name of catalog database.
* **catalogPricingTier**: 'Basic' | 'Premium' | 'PremiumRS' | 'Standard': The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
* **catalogServerEndpoint**: string: The catalog database server URL.
### Additional Properties
* **Additional Properties Type**: any

## SecureString
### Properties
* **type**: string (Required): Type of the secret.
* **value**: string (Required): Value of secure string.

## IntegrationRuntimeCustomSetupScriptProperties
### Properties
* **blobContainerUri**: string: The URI of the Azure blob container that contains the custom setup script.
* **sasToken**: [SecureString](#securestring): Azure Synapse secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

## IntegrationRuntimeDataProxyProperties
### Properties
* **connectVia**: [EntityReference](#entityreference): The entity reference.
* **path**: string: The path to contain the staged data in the Blob storage.
* **stagingLinkedService**: [EntityReference](#entityreference): The entity reference.

## EntityReference
### Properties
* **referenceName**: string: The name of this referenced entity.
* **type**: 'IntegrationRuntimeReference' | 'LinkedServiceReference': The type of this referenced entity.

## CustomSetupBase
* **Discriminator**: type

### Base Properties
### CmdkeySetup
#### Properties
* **type**: 'CmdkeySetup' (Required): The type of custom setup.
* **typeProperties**: [CmdkeySetupTypeProperties](#cmdkeysetuptypeproperties) (Required): Cmdkey command custom setup type properties.

### ComponentSetup
#### Properties
* **type**: 'ComponentSetup' (Required): The type of custom setup.
* **typeProperties**: [LicensedComponentSetupTypeProperties](#licensedcomponentsetuptypeproperties) (Required): Installation of licensed component setup type properties.

### EnvironmentVariableSetup
#### Properties
* **type**: 'EnvironmentVariableSetup' (Required): The type of custom setup.
* **typeProperties**: [EnvironmentVariableSetupTypeProperties](#environmentvariablesetuptypeproperties) (Required): Environment variable custom setup type properties.


## CmdkeySetupTypeProperties
### Properties
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **targetName**: any (Required): Any object
* **userName**: any (Required): Any object

## SecretBase
* **Discriminator**: type

### Base Properties
### SecureString
#### Properties
* **type**: 'SecureString' (Required): Type of the secret.
* **value**: string (Required): Value of secure string.


## LicensedComponentSetupTypeProperties
### Properties
* **componentName**: string (Required): The name of the 3rd party component.
* **licenseKey**: [SecretBase](#secretbase): The base definition of a secret type.

## EnvironmentVariableSetupTypeProperties
### Properties
* **variableName**: string (Required): The name of the environment variable.
* **variableValue**: string (Required): The value of the environment variable.

## SelfHostedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: [LinkedIntegrationRuntimeType](#linkedintegrationruntimetype): The base definition of a linked integration runtime.

## LinkedIntegrationRuntimeType
* **Discriminator**: authorizationType

### Base Properties
### LinkedIntegrationRuntimeKeyAuthorization
#### Properties
* **authorizationType**: 'Key' (Required): The authorization type for integration runtime sharing.
* **key**: [SecureString](#securestring) (Required): Azure Synapse secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

### LinkedIntegrationRuntimeRbacAuthorization
#### Properties
* **authorizationType**: 'RBAC' (Required): The authorization type for integration runtime sharing.
* **resourceId**: string (Required): The resource identifier of the integration runtime to be shared.


## KeyProperties
### Properties
* **isActiveCMK**: bool: Used to activate the workspace after a customer managed key is provided.
* **keyVaultUrl**: string: The Key Vault Url of the workspace key.

## ManagedIdentitySqlControlSettingsModelProperties
### Properties
* **grantSqlControlToManagedIdentity**: [ManagedIdentitySqlControlSettingsModelPropertiesGrantSqlControlToManagedIdentity](#managedidentitysqlcontrolsettingsmodelpropertiesgrantsqlcontroltomanagedidentity): Grant sql control to managed identity

## ManagedIdentitySqlControlSettingsModelPropertiesGrantSqlControlToManagedIdentity
### Properties
* **actualState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Unknown' (ReadOnly): Actual state
* **desiredState**: 'Disabled' | 'Enabled': Desired state

## RecoverableSqlPoolProperties
### Properties
* **edition**: string (ReadOnly): The edition of the database
* **elasticPoolName**: string (ReadOnly): The elastic pool name of the database
* **lastAvailableBackupDate**: string (ReadOnly): The last available backup date of the database (ISO8601 format)
* **serviceLevelObjective**: string (ReadOnly): The service level objective name of the database

## RestorableDroppedSqlPoolProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of the database (ISO8601 format)
* **databaseName**: string (ReadOnly): The name of the database
* **deletionDate**: string (ReadOnly): The deletion date of the database (ISO8601 format)
* **earliestRestoreDate**: string (ReadOnly): The earliest restore date of the database (ISO8601 format)
* **edition**: string (ReadOnly): The edition of the database
* **elasticPoolName**: string (ReadOnly): The elastic pool name of the database
* **maxSizeBytes**: string (ReadOnly): The max size in bytes of the database
* **serviceLevelObjective**: string (ReadOnly): The service level objective name of the database

## ServerSecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **disabledAlerts**: string[]: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action
* **emailAccountAdmins**: bool: Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string[]: Specifies an array of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' | 'New' (Required): Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific Sql pool.
* **storageAccountAccessKey**: string: Specifies the identifier key of the Threat Detection audit storage account.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.

## SqlPoolResourceProperties
### Properties
* **collation**: string: Collation mode
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'Restore': Specifies the mode of sql pool creation.

Default: regular sql pool creation.

PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.

Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.

Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified.
* **creationDate**: string: Date the SQL pool was created
* **maxSizeBytes**: int: Maximum size in bytes
* **provisioningState**: string: Resource state
* **recoverableDatabaseId**: string: Backup database to restore from
* **restorePointInTime**: string: Snapshot time to restore
* **sourceDatabaseId**: string: Source database to create from
* **status**: string: Resource status
* **storageAccountType**: 'GRS' | 'LRS' | 'ZRS': The storage account type used to store backups for this sql pool.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **name**: string: The SKU name
* **tier**: string: The service tier

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlPoolBlobAuditingPolicyProperties
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
* **retentionDays**: int: Specifies the number of days to keep in the audit logs in the storage account.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required.
* **storageAccountSubscriptionId**: string: Specifies the blob storage subscription Id.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint is required.

## SqlPoolConnectionPolicyProperties
### Properties
* **proxyDnsName**: string (ReadOnly): The fully qualified host name of the auditing proxy.
* **proxyPort**: string (ReadOnly): The port number of the auditing proxy.
* **redirectionState**: string (ReadOnly): The state of proxy redirection.
* **securityEnabledAccess**: string (ReadOnly): The state of security access.
* **state**: string (ReadOnly): The connection policy state.
* **useServerDefault**: string (ReadOnly): Whether server default is enabled or disabled.
* **visibility**: string (ReadOnly): The visibility of the auditing proxy.

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

## ExtendedSqlPoolBlobAuditingPolicyProperties
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

## GeoBackupPolicyProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): The state of the geo backup policy.
* **storageType**: string (ReadOnly): The storage type of the geo backup policy.

## MaintenanceWindowOptionsProperties
### Properties
* **allowMultipleMaintenanceWindowsPerCycle**: bool (ReadOnly): Whether we allow multiple maintenance windows per cycle.
* **defaultDurationInMinutes**: int (ReadOnly): Default duration for maintenance window.
* **isEnabled**: bool (ReadOnly): Whether maintenance windows are enabled for the database.
* **maintenanceWindowCycles**: [MaintenanceWindowTimeRange](#maintenancewindowtimerange)[] (ReadOnly): Available maintenance cycles e.g. {Saturday, 0, 48*60}, {Wednesday, 0, 24*60}.
* **minCycles**: int (ReadOnly): Minimum number of maintenance windows cycles to be set on the database.
* **minDurationInMinutes**: int (ReadOnly): Minimum duration of maintenance window.
* **timeGranularityInMinutes**: int (ReadOnly): Time granularity in minutes for maintenance windows.

## MaintenanceWindowTimeRange
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Day of maintenance window.
* **duration**: string: Duration of maintenance window in minutes.
* **startTime**: string: Start time minutes offset from 12am.

## MaintenanceWindowsProperties
### Properties
* **timeRanges**: [MaintenanceWindowTimeRange](#maintenancewindowtimerange)[]: Array of MaintenanceWindowTimeRange

## MetadataSyncConfigProperties
### Properties
* **enabled**: bool: Indicates whether the metadata sync is enabled or disabled
* **syncIntervalInMinutes**: int: The Sync Interval in minutes.

## ReplicationLinkProperties
### Properties
* **isTerminationAllowed**: bool (ReadOnly): Legacy value indicating whether termination is allowed.  Currently always returns true.
* **partnerDatabase**: string (ReadOnly): The name of the partner Sql pool.
* **partnerLocation**: string (ReadOnly): The Azure Region of the partner Sql pool.
* **partnerRole**: 'Copy' | 'NonReadableSecondary' | 'Primary' | 'Secondary' | 'Source' (ReadOnly): The role of the Sql pool in the replication link.
* **partnerServer**: string (ReadOnly): The name of the workspace hosting the partner Sql pool.
* **percentComplete**: int (ReadOnly): The percentage of seeding complete for the replication link.
* **replicationMode**: string (ReadOnly): Replication mode of this replication link.
* **replicationState**: 'CATCH_UP' | 'PENDING' | 'SEEDING' | 'SUSPENDED' (ReadOnly): The replication state for the replication link.
* **role**: 'Copy' | 'NonReadableSecondary' | 'Primary' | 'Secondary' | 'Source' (ReadOnly): The role of the Sql pool in the replication link.
* **startTime**: string (ReadOnly): The start time for the replication link.

## RestorePointProperties
### Properties
* **earliestRestoreDate**: string (ReadOnly): The earliest time to which this database can be restored
* **restorePointCreationDate**: string (ReadOnly): The time the backup was taken
* **restorePointLabel**: string (ReadOnly): The label of restore point for backup request by user
* **restorePointType**: 'CONTINUOUS' | 'DISCRETE' (ReadOnly): The type of restore point

## SqlPoolColumnProperties
### Properties
* **columnType**: 'bigint' | 'binary' | 'bit' | 'char' | 'date' | 'datetime' | 'datetime2' | 'datetimeoffset' | 'decimal' | 'float' | 'geography' | 'geometry' | 'hierarchyid' | 'image' | 'int' | 'money' | 'nchar' | 'ntext' | 'numeric' | 'nvarchar' | 'real' | 'smalldatetime' | 'smallint' | 'smallmoney' | 'sql_variant' | 'sysname' | 'text' | 'time' | 'timestamp' | 'tinyint' | 'uniqueidentifier' | 'varbinary' | 'varchar' | 'xml' (ReadOnly): The column data type.
* **isComputed**: bool (ReadOnly): Indicates whether column value is computed or not

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

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **disabledAlerts**: string[]: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action
* **emailAccountAdmins**: bool: Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string[]: Specifies an array of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' | 'New' (Required): Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific Sql pool.
* **storageAccountAccessKey**: string: Specifies the identifier key of the Threat Detection audit storage account.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.

## TransparentDataEncryptionProperties
### Properties
* **status**: 'Disabled' | 'Enabled': The status of the database transparent data encryption.

## SqlPoolVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): Properties of a Vulnerability Assessment recurring scans.
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required.
* **storageContainerPath**: string (WriteOnly): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).  It is required if server level vulnerability assessment policy doesn't set
* **storageContainerSasKey**: string (WriteOnly): A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required.

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]: Specifies an array of e-mail addresses to which the scan notification is sent.
* **emailSubscriptionAdmins**: bool: Specifies that the schedule scan notification will be is sent to the subscription administrators.
* **isEnabled**: bool: Recurring scans state.

## SqlPoolVulnerabilityAssessmentRuleBaselineProperties
### Properties
* **baselineResults**: [SqlPoolVulnerabilityAssessmentRuleBaselineItem](#sqlpoolvulnerabilityassessmentrulebaselineitem)[] (Required): The rule baseline result

## SqlPoolVulnerabilityAssessmentRuleBaselineItem
### Properties
* **result**: string[] (Required): The rule baseline result

## VulnerabilityAssessmentScanRecordProperties
### Properties
* **endTime**: string (ReadOnly): The scan end time (UTC).
* **errors**: [VulnerabilityAssessmentScanError](#vulnerabilityassessmentscanerror)[] (ReadOnly): The scan errors.
* **numberOfFailedSecurityChecks**: int (ReadOnly): The number of failed security checks.
* **scanId**: string (ReadOnly): The scan ID.
* **startTime**: string (ReadOnly): The scan start time (UTC).
* **state**: 'Failed' | 'FailedToRun' | 'InProgress' | 'Passed' (ReadOnly): The scan status.
* **storageContainerPath**: string (ReadOnly): The scan results storage container path.
* **triggerType**: 'OnDemand' | 'Recurring' (ReadOnly): The scan trigger type.

## VulnerabilityAssessmentScanError
### Properties
* **code**: string (ReadOnly): The error code.
* **message**: string (ReadOnly): The error message.

## WorkloadGroupProperties
### Properties
* **importance**: string: The workload group importance level.
* **maxResourcePercent**: int (Required): The workload group cap percentage resource.
* **maxResourcePercentPerRequest**: int: The workload group request maximum grant percentage.
* **minResourcePercent**: int (Required): The workload group minimum percentage resource.
* **minResourcePercentPerRequest**: int (Required): The workload group request minimum grant percentage.
* **queryExecutionTimeout**: int: The workload group query execution timeout.

## WorkloadClassifierProperties
### Properties
* **context**: string: The workload classifier context.
* **endTime**: string: The workload classifier end time for classification.
* **importance**: string: The workload classifier importance.
* **label**: string: The workload classifier label.
* **memberName**: string (Required): The workload classifier member name.
* **startTime**: string: The workload classifier start time for classification.

## ServerVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): Properties of a Vulnerability Assessment recurring scans.
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required.
* **storageContainerPath**: string (Required): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).
* **storageContainerSasKey**: string (WriteOnly): A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required.

## IntegrationRuntimeAuthKeys
### Properties
* **authKey1**: string (ReadOnly): The primary integration runtime authentication key.
* **authKey2**: string (ReadOnly): The secondary integration runtime authentication key.

