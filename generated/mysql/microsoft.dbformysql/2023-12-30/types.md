# Microsoft.DBforMySQL @ 2023-12-30

## Resource Microsoft.DBforMySQL/flexibleServers@2023-12-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MySQLServerIdentity](#mysqlserveridentity): The cmk identity for the server.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][-a-z0-9]*(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [MySQLServerSku](#mysqlserversku): The SKU (pricing tier) of the server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforMySQL/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/administrators@2023-12-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ActiveDirectory' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorProperties](#administratorproperties): The properties of an administrator.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/advancedThreatProtectionSettings@2023-12-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/backups@2023-12-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBackupProperties](#serverbackupproperties) (ReadOnly): The properties of a server backup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/backupsV2@2023-12-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBackupPropertiesV2](#serverbackuppropertiesv2): The properties of a server backup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/backupsV2' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/configurations@2023-12-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/databases@2023-12-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/firewallRules@2023-12-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][-_a-zA-Z0-9]{0,79}(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/maintenances@2023-12-30 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceProperties](#maintenanceproperties) (ReadOnly): The properties of a maintenance
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/maintenances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/locations/capabilitySets@2023-12-30 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-12-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9][-a-z0-9]*(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityPropertiesV2](#capabilitypropertiesv2) (ReadOnly): The properties of a location capability set.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/locations/capabilitySets' (ReadOnly, DeployTimeConstant): The resource type

## AdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' | string: Type of the sever administrator.
* **identityResourceId**: string: The resource id of the identity used for AAD Authentication.
* **login**: string: Login name of the server administrator.
* **sid**: string: SID (object ID) of the server administrator.
* **tenantId**: string: Tenant ID of the administrator.

## AdvancedThreatProtectionProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Threat Protection.
* **state**: 'Disabled' | 'Enabled' | string: Specifies the state of the Advanced Threat Protection, whether it is enabled or disabled or a state has not been applied yet on the specific database or server.

## Backup
### Properties
* **backupIntervalHours**: int: Backup interval hours for the server.
* **backupRetentionDays**: int: Backup retention days for the server.
* **earliestRestoreDate**: string (ReadOnly): Earliest restore point creation time (ISO8601 format)
* **geoRedundantBackup**: 'Disabled' | 'Enabled' | string: Whether or not geo redundant backup is enabled.

## CapabilityPropertiesV2
### Properties
* **supportedFlexibleServerEditions**: [ServerEditionCapabilityV2](#servereditioncapabilityv2)[] (ReadOnly): A list of supported flexible server editions.
* **supportedGeoBackupRegions**: string[] (ReadOnly): supported geo backup regions
* **supportedServerVersions**: [ServerVersionCapabilityV2](#serverversioncapabilityv2)[] (ReadOnly): A list of supported server versions.

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly): Allowed values of the configuration.
* **currentValue**: string: Current value of the configuration.
* **dataType**: string (ReadOnly): Data type of the configuration.
* **defaultValue**: string (ReadOnly): Default value of the configuration.
* **description**: string (ReadOnly): Description of the configuration.
* **documentationLink**: string (ReadOnly): The link used to get the document from community or Azure site.
* **isConfigPendingRestart**: 'False' | 'True' | string (ReadOnly): If is the configuration pending restart or not.
* **isDynamicConfig**: 'False' | 'True' | string (ReadOnly): If is the configuration dynamic.
* **isReadOnly**: 'False' | 'True' | string (ReadOnly): If is the configuration read only.
* **source**: 'system-default' | 'user-override' | string: Source of the configuration.
* **value**: string: Value of the configuration.

## DatabaseProperties
### Properties
* **charset**: string: The charset of the database.
* **collation**: string: The collation of the database.

## DataEncryption
### Properties
* **geoBackupKeyURI**: string: Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup
* **geoBackupUserAssignedIdentityId**: string: Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup
* **primaryKeyURI**: string: Primary key uri
* **primaryUserAssignedIdentityId**: string: Primary user identity resource id
* **type**: 'AzureKeyVault' | 'SystemManaged': The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.

## FirewallRuleProperties
### Properties
* **endIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The end IP address of the server firewall rule. Must be IPv4 format.
* **startIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The start IP address of the server firewall rule. Must be IPv4 format.

## HighAvailability
### Properties
* **mode**: 'Disabled' | 'SameZone' | 'ZoneRedundant' | string: High availability mode for a server.
* **standbyAvailabilityZone**: string: Availability zone of the standby server.
* **state**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | string (ReadOnly): The state of server high availability.

## ImportSourceProperties
### Properties
* **dataDirPath**: string: Relative path of data directory in storage.
* **sasToken**: string {sensitive} (WriteOnly): Sas token for accessing source storage. Read and list permissions are required for sas token.
* **storageType**: 'AzureBlob' | string: Storage type of import source.
* **storageUrl**: string: Uri of the import source storage.

## MaintenanceProperties
### Properties
* **maintenanceAvailableScheduleMaxTime**: string (ReadOnly): The max time the maintenance can be rescheduled.
* **maintenanceAvailableScheduleMinTime**: string (ReadOnly): The min time the maintenance can be rescheduled.
* **maintenanceDescription**: string (ReadOnly): The maintenance description.
* **maintenanceEndTime**: string (ReadOnly): The end time for a maintenance.
* **maintenanceExecutionEndTime**: string (ReadOnly): The end time for a maintenance execution.
* **maintenanceExecutionStartTime**: string (ReadOnly): The start time for a maintenance execution.
* **maintenanceStartTime**: string: The start time for a maintenance.
* **maintenanceState**: 'Canceled' | 'Completed' | 'InPreparation' | 'Processing' | 'ReScheduled' | 'Scheduled' | string (ReadOnly): A string describes the maintenance status
* **maintenanceTitle**: string (ReadOnly): The maintenance title.
* **maintenanceType**: 'HotFixes' | 'MinorVersionUpgrade' | 'RoutineMaintenance' | 'SecurityPatches' | string (ReadOnly): A string defines maintenance type.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the Maintenance.

## MaintenanceWindow
### Properties
* **customWindow**: string: indicates whether custom window is enabled or disabled
* **dayOfWeek**: int: day of week for maintenance window
* **startHour**: int: start hour for maintenance window
* **startMinute**: int: start minute for maintenance window

## MySQLServerIdentity
### Properties
* **principalId**: string (ReadOnly): ObjectId from the KeyVault
* **tenantId**: string (ReadOnly): TenantId from the KeyVault
* **type**: 'UserAssigned' | string: Type of managed service identity.
* **userAssignedIdentities**: [MySQLServerIdentityUserAssignedIdentities](#mysqlserveridentityuserassignedidentities): Metadata of user assigned identity.

## MySQLServerIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: any

## MySQLServerSku
### Properties
* **name**: string (Required): The name of the sku, e.g. Standard_D32s_v3.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string (Required): The tier of the particular SKU, e.g. GeneralPurpose.

## Network
### Properties
* **delegatedSubnetResourceId**: string: Delegated subnet resource id used to setup vnet for a server.
* **privateDnsZoneResourceId**: string: Private DNS zone resource id.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public network access is allowed for this server. Value is 'Disabled' when server has VNet integration.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ServerBackupProperties
### Properties
* **backupType**: string: Backup type.
* **completedTime**: string: Backup completed time (ISO8601 format).
* **source**: string: Backup source

## ServerBackupPropertiesV2
### Properties
* **backupNameV2**: string: Backup name
* **backupType**: 'FULL' | string
* **completedTime**: string: Backup completed time (ISO8601 format).
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of backup resource.
* **source**: string: Backup source

## ServerEditionCapabilityV2
### Properties
* **defaultSku**: string (ReadOnly): Default Sku name
* **defaultStorageSize**: int (ReadOnly): Default storage size
* **name**: string (ReadOnly): Server edition name
* **supportedSkus**: [SkuCapabilityV2](#skucapabilityv2)[] (ReadOnly): A list of supported Skus
* **supportedStorageEditions**: [StorageEditionCapability](#storageeditioncapability)[] (ReadOnly): A list of supported storage editions

## ServerProperties
### Properties
* **administratorLogin**: string: The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string {sensitive} (WriteOnly): The password of the administrator login (required for server creation).
* **availabilityZone**: string: availability Zone information of the server.
* **backup**: [Backup](#backup): Backup related properties of a server.
* **createMode**: 'Default' | 'GeoRestore' | 'PointInTimeRestore' | 'Replica' | string (WriteOnly): The mode to create a new MySQL server.
* **dataEncryption**: [DataEncryption](#dataencryption): The Data Encryption for CMK.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **highAvailability**: [HighAvailability](#highavailability): High availability related properties of a server.
* **importSourceProperties**: [ImportSourceProperties](#importsourceproperties): Source properties for import from storage.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window of a server.
* **network**: [Network](#network): Network related properties of a server.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): PrivateEndpointConnections related properties of a server.
* **replicaCapacity**: int {minValue: 0} (ReadOnly): The maximum number of replicas that a primary server can have.
* **replicationRole**: 'None' | 'Replica' | 'Source' | string: The replication role.
* **restorePointInTime**: string (WriteOnly): Restore point creation time (ISO8601 format), specifying the time to restore from.
* **sourceServerResourceId**: string: The source MySQL server id.
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): The state of a server.
* **storage**: [Storage](#storage): Storage related properties of a server.
* **version**: '5.7' | '8.0.21' | string: Server version.

## ServerVersionCapabilityV2
### Properties
* **name**: string (ReadOnly): server version

## SkuCapabilityV2
### Properties
* **name**: string (ReadOnly): vCore name
* **supportedHAMode**: string[] (ReadOnly): Supported high availability mode
* **supportedIops**: int (ReadOnly): supported IOPS
* **supportedMemoryPerVCoreMB**: int (ReadOnly): supported memory per vCore in MB
* **supportedZones**: string[] (ReadOnly): Supported zones
* **vCores**: int (ReadOnly): supported vCores

## Storage
### Properties
* **autoGrow**: 'Disabled' | 'Enabled' | string: Enable Storage Auto Grow or not.
* **autoIoScaling**: 'Disabled' | 'Enabled' | string: Enable IO Auto Scaling or not.
* **iops**: int: Storage IOPS for a server.
* **logOnDisk**: 'Disabled' | 'Enabled' | string: Enable Log On Disk or not.
* **storageSizeGB**: int: Max storage size allowed for a server.
* **storageSku**: string (ReadOnly): The sku name of the server storage.

## StorageEditionCapability
### Properties
* **maxBackupIntervalHours**: int (ReadOnly): Maximum backup interval hours
* **maxBackupRetentionDays**: int (ReadOnly): Maximum backup retention days
* **maxStorageSize**: int (ReadOnly): The maximum supported storage size.
* **minBackupIntervalHours**: int (ReadOnly): Minimal backup interval hours
* **minBackupRetentionDays**: int (ReadOnly): Minimal backup retention days
* **minStorageSize**: int (ReadOnly): The minimal supported storage size.
* **name**: string (ReadOnly): storage edition name

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

