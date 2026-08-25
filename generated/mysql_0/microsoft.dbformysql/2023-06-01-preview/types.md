# Microsoft.DBforMySQL @ 2023-06-01-preview

## Resource Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MySQLServerIdentity](#mysqlserveridentity): The cmk identity for the server.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][-a-z0-9]*(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [MySQLServerSku](#mysqlserversku): The SKU (pricing tier) of the server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforMySQL/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/administrators@2023-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ActiveDirectory' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorProperties](#administratorproperties): The properties of an administrator.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/backups@2023-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBackupProperties](#serverbackupproperties) (ReadOnly): The properties of a server backup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/configurations@2023-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/databases@2023-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/firewallRules@2023-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][-_a-zA-Z0-9]{0,79}(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/locations/capabilitySets@2023-06-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9][-a-z0-9]*(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityPropertiesV2](#capabilitypropertiesv2) (ReadOnly): The properties of a location capability set.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/locations/capabilitySets' (ReadOnly, DeployTimeConstant): The resource type

## Function backupAndExport (Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2023-06-01-preview
* **Input**: [BackupAndExportRequest](#backupandexportrequest)
* **Output**: [BackupAndExportResponse](#backupandexportresponse)

## Function checkNameAvailability (Microsoft.DBforMySQL/locations@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/locations
* **ApiVersion**: 2023-06-01-preview
* **Input**: [NameAvailabilityRequest](#nameavailabilityrequest)
* **Output**: [NameAvailability](#nameavailability)

## Function checkVirtualNetworkSubnetUsage (Microsoft.DBforMySQL/locations@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/locations
* **ApiVersion**: 2023-06-01-preview
* **Input**: [VirtualNetworkSubnetUsageParameter](#virtualnetworksubnetusageparameter)
* **Output**: [VirtualNetworkSubnetUsageResult](#virtualnetworksubnetusageresult)

## Function cutoverMigration (Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2023-06-01-preview
* **Output**: [Server](#server)

## Function failover (Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2023-06-01-preview
* **Output**: any

## Function resetGtid (Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2023-06-01-preview
* **Input**: [ServerGtidSetParameter](#servergtidsetparameter)
* **Output**: any

## Function restart (Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2023-06-01-preview
* **Input**: [ServerRestartParameter](#serverrestartparameter)
* **Output**: any

## Function start (Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2023-06-01-preview
* **Output**: any

## Function stop (Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2023-06-01-preview
* **Output**: any

## Function updateConfigurations (Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2023-06-01-preview
* **Input**: [ConfigurationListForBatchUpdate](#configurationlistforbatchupdate)
* **Output**: [ConfigurationListResult](#configurationlistresult)

## Function validateBackup (Microsoft.DBforMySQL/flexibleServers@2023-06-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2023-06-01-preview
* **Output**: [ValidateBackupResponse](#validatebackupresponse)

## AdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' | string: Type of the sever administrator.
* **identityResourceId**: string: The resource id of the identity used for AAD Authentication.
* **login**: string: Login name of the server administrator.
* **sid**: string: SID (object ID) of the server administrator.
* **tenantId**: string: Tenant ID of the administrator.

## Backup
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **earliestRestoreDate**: string (ReadOnly): Earliest restore point creation time (ISO8601 format)
* **geoRedundantBackup**: 'Disabled' | 'Enabled' | string: Whether or not geo redundant backup is enabled.

## BackupAndExportRequest
### Properties
* **backupSettings**: [BackupSettings](#backupsettings) (Required): Backup Settings
* **targetDetails**: [BackupStoreDetails](#backupstoredetails) (Required): Backup Target Store Details

## BackupAndExportResponse
### Properties
* **endTime**: string: End time
* **error**: [ErrorDetail](#errordetail): The error object.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **percentComplete**: int {minValue: 0, maxValue: 100}: Operation progress (0-100).
* **properties**: [BackupAndExportResponseProperties](#backupandexportresponseproperties): The response properties of a backup and export operation.
* **startTime**: string: Start time
* **status**: 'CancelInProgress' | 'Canceled' | 'Failed' | 'InProgress' | 'Pending' | 'Succeeded': The operation status
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## BackupAndExportResponseProperties
### Properties
* **backupMetadata**: string: Metadata related to backup to be stored for restoring resource in key-value pairs.
* **datasourceSizeInBytes**: int: Size of datasource in bytes
* **dataTransferredInBytes**: int: Data transferred in bytes

## BackupSettings
### Properties
* **backupFormat**: 'CollatedFormat' | 'Raw' | string: Backup Format for the current backup. (CollatedFormat is INTERNAL – DO NOT USE)
* **backupName**: string {pattern: "(^[a-z0-9]$)|(^[a-z0-9][a-z0-9-]*[a-z0-9]$)"} (Required): The name of the backup.

## BackupStoreDetails
* **Discriminator**: objectType

### Base Properties

### FullBackupStoreDetails
#### Properties
* **objectType**: 'FullBackupStoreDetails' (Required): Type of the specific object - used for deserializing
* **sasUriList**: string[] (Required): SASUriList of storage containers where backup data is to be streamed/copied.


## CapabilityPropertiesV2
### Properties
* **supportedFlexibleServerEditions**: [ServerEditionCapabilityV2](#servereditioncapabilityv2)[] (ReadOnly): A list of supported flexible server editions.
* **supportedGeoBackupRegions**: string[] (ReadOnly): supported geo backup regions
* **supportedServerVersions**: [ServerVersionCapabilityV2](#serverversioncapabilityv2)[] (ReadOnly): A list of supported server versions.

## Configuration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ConfigurationForBatchUpdate
### Properties
* **name**: string: Name of the configuration.
* **properties**: [ConfigurationForBatchUpdateProperties](#configurationforbatchupdateproperties): The properties can be updated for a configuration.

## ConfigurationForBatchUpdateProperties
### Properties
* **source**: string: Source of the configuration.
* **value**: string: Value of the configuration.

## ConfigurationListForBatchUpdate
### Properties
* **resetAllToDefault**: 'False' | 'True' | string: Whether to reset all server parameters to default.
* **value**: [ConfigurationForBatchUpdate](#configurationforbatchupdate)[]: The list of server configurations.

## ConfigurationListResult
### Properties
* **nextLink**: string: The link used to get the next page of operations.
* **value**: [Configuration](#configuration)[]: The list of server configurations.

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

## DelegatedSubnetUsage
### Properties
* **subnetName**: string (ReadOnly): name of the subnet
* **usage**: int (ReadOnly): Number of used delegated subnets

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

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

## NameAvailability
### Properties
* **message**: string: Error Message.
* **nameAvailable**: bool: Indicates whether the resource name is available.
* **reason**: string: Reason for name being unavailable.

## NameAvailabilityRequest
### Properties
* **name**: string (Required): Resource name to verify.
* **type**: string: Resource type used for verification.

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

## Server
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **identity**: [MySQLServerIdentity](#mysqlserveridentity): The cmk identity for the server.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [MySQLServerSku](#mysqlserversku): The SKU (pricing tier) of the server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ServerBackupProperties
### Properties
* **backupType**: string: Backup type.
* **completedTime**: string: Backup completed time (ISO8601 format).
* **source**: string: Backup source

## ServerEditionCapabilityV2
### Properties
* **defaultSku**: string (ReadOnly): Default Sku name
* **defaultStorageSize**: int (ReadOnly): Default storage size
* **name**: string (ReadOnly): Server edition name
* **supportedSkus**: [SkuCapabilityV2](#skucapabilityv2)[] (ReadOnly): A list of supported Skus
* **supportedStorageEditions**: [StorageEditionCapability](#storageeditioncapability)[] (ReadOnly): A list of supported storage editions

## ServerGtidSetParameter
### Properties
* **gtidSet**: string: The Gtid set of server.

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

## ServerRestartParameter
### Properties
* **maxFailoverSeconds**: int: The maximum allowed failover time in seconds.
* **restartWithFailover**: 'Disabled' | 'Enabled' | string: Whether or not failover to standby server when restarting a server with high availability enabled.

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
* **maxBackupRetentionDays**: int (ReadOnly): Maximum backup retention days
* **maxStorageSize**: int (ReadOnly): The maximum supported storage size.
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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ValidateBackupResponse
### Properties
* **properties**: [ValidateBackupResponseProperties](#validatebackupresponseproperties): The response properties of a pre backup operation.

## ValidateBackupResponseProperties
### Properties
* **numberOfContainers**: int: Estimated no of storage containers required for resource data to be backed up.

## VirtualNetworkSubnetUsageParameter
### Properties
* **virtualNetworkResourceId**: string: Virtual network resource id.

## VirtualNetworkSubnetUsageResult
### Properties
* **delegatedSubnetsUsage**: [DelegatedSubnetUsage](#delegatedsubnetusage)[] (ReadOnly): A list of delegated subnet usage
* **location**: string (ReadOnly): The location name.
* **subscriptionId**: string (ReadOnly): The subscription id.

