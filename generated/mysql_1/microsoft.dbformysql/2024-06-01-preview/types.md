# Microsoft.DBforMySQL @ 2024-06-01-preview

## Resource Microsoft.DBforMySQL/flexibleServers@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MySQLServerIdentity](#mysqlserveridentity): The cmk identity for the server.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][-a-z0-9]*(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [MySQLServerSku](#mysqlserversku): The SKU (pricing tier) of the server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforMySQL/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/advancedThreatProtectionSettings@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

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

## DataEncryption
### Properties
* **geoBackupKeyURI**: string: Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup
* **geoBackupUserAssignedIdentityId**: string: Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup
* **primaryKeyURI**: string: Primary key uri
* **primaryUserAssignedIdentityId**: string: Primary user identity resource id
* **type**: 'AzureKeyVault' | 'SystemManaged': The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.

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

## MaintenancePolicy
### Properties
* **patchStrategy**: 'Regular' | 'VirtualCanary' | string: The patch strategy of this server

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

## ServerProperties
### Properties
* **administratorLogin**: string: The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string {sensitive} (WriteOnly): The password of the administrator login (required for server creation).
* **availabilityZone**: string: availability Zone information of the server.
* **backup**: [Backup](#backup): Backup related properties of a server.
* **createMode**: 'Default' | 'GeoRestore' | 'PointInTimeRestore' | 'Replica' | string (WriteOnly): The mode to create a new MySQL server.
* **databasePort**: int: The server database port. Can only be specified when the server is being created.
* **dataEncryption**: [DataEncryption](#dataencryption): The Data Encryption for CMK.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **highAvailability**: [HighAvailability](#highavailability): High availability related properties of a server.
* **importSourceProperties**: [ImportSourceProperties](#importsourceproperties): Source properties for import from storage.
* **maintenancePolicy**: [MaintenancePolicy](#maintenancepolicy): Maintenance policy of a server.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window of a server. Known issue: cannot be set during server creation or updated with other properties during server update; must be updated separately.
* **network**: [Network](#network): Network related properties of a server.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): PrivateEndpointConnections related properties of a server.
* **replicaCapacity**: int {minValue: 0} (ReadOnly): The maximum number of replicas that a primary server can have.
* **replicationRole**: 'None' | 'Replica' | 'Source' | string: The replication role.
* **restorePointInTime**: string (WriteOnly): Restore point creation time (ISO8601 format), specifying the time to restore from.
* **sourceServerResourceId**: string: The source MySQL server id.
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): The state of a server.
* **storage**: [Storage](#storage): Storage related properties of a server.
* **version**: '5.7' | '8.0.21' | string: Server version.

## Storage
### Properties
* **autoGrow**: 'Disabled' | 'Enabled' | string: Enable Storage Auto Grow or not.
* **autoIoScaling**: 'Disabled' | 'Enabled' | string: Enable IO Auto Scaling or not.
* **iops**: int: Storage IOPS for a server.
* **logOnDisk**: 'Disabled' | 'Enabled' | string: Enable Log On Disk or not.
* **storageRedundancy**: 'LocalRedundancy' | 'ZoneRedundancy' | string: The redundant type of the server storage. The parameter is used for server creation.
* **storageSizeGB**: int: Max storage size allowed for a server.
* **storageSku**: string (ReadOnly): The sku name of the server storage.

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

