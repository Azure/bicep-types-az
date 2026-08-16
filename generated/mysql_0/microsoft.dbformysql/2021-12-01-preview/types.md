# Microsoft.DBforMySQL @ 2021-12-01-preview

## Resource Microsoft.DBforMySQL/flexibleServers@2021-12-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The cmk identity for the server.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][-a-z0-9]*(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [Sku](#sku): The SKU (pricing tier) of the server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforMySQL/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/administrators@2021-12-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ActiveDirectory' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorProperties](#administratorproperties): The properties of an administrator.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/backups@2021-12-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBackupProperties](#serverbackupproperties) (ReadOnly): The properties of a server backup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/configurations@2021-12-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/databases@2021-12-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/firewallRules@2021-12-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.DBforMySQL/locations@2021-12-01-preview)
* **Resource**: Microsoft.DBforMySQL/locations
* **ApiVersion**: 2021-12-01-preview
* **Input**: [NameAvailabilityRequest](#nameavailabilityrequest)
* **Output**: [NameAvailability](#nameavailability)

## Function checkVirtualNetworkSubnetUsage (Microsoft.DBforMySQL/locations@2021-12-01-preview)
* **Resource**: Microsoft.DBforMySQL/locations
* **ApiVersion**: 2021-12-01-preview
* **Input**: [VirtualNetworkSubnetUsageParameter](#virtualnetworksubnetusageparameter)
* **Output**: [VirtualNetworkSubnetUsageResult](#virtualnetworksubnetusageresult)

## Function updateConfigurations (Microsoft.DBforMySQL/flexibleServers@2021-12-01-preview)
* **Resource**: Microsoft.DBforMySQL/flexibleServers
* **ApiVersion**: 2021-12-01-preview
* **Input**: [ConfigurationListForBatchUpdate](#configurationlistforbatchupdate)
* **Output**: [ConfigurationListResult](#configurationlistresult)

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

## Configuration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
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

## FirewallRuleProperties
### Properties
* **endIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The end IP address of the server firewall rule. Must be IPv4 format.
* **startIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The start IP address of the server firewall rule. Must be IPv4 format.

## HighAvailability
### Properties
* **mode**: 'Disabled' | 'SameZone' | 'ZoneRedundant' | string: High availability mode for a server.
* **standbyAvailabilityZone**: string: Availability zone of the standby server.
* **state**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | string (ReadOnly): The state of server high availability.

## Identity
### Properties
* **principalId**: string (ReadOnly): ObjectId from the KeyVault
* **tenantId**: string (ReadOnly): TenantId from the KeyVault
* **type**: 'UserAssigned': Type of managed service identity.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): Metadata of user assigned identity.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: any

## MaintenanceWindow
### Properties
* **customWindow**: string: indicates whether custom window is enabled or disabled
* **dayOfWeek**: int: day of week for maintenance window
* **startHour**: int: start hour for maintenance window
* **startMinute**: int: start minute for maintenance window

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
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string (ReadOnly): Whether or not public network access is allowed for this server. Value is 'Disabled' when server has VNet integration.

## ServerBackupProperties
### Properties
* **backupType**: string: Backup type.
* **completedTime**: string: Backup completed time (ISO8601 format).
* **source**: string: Backup source

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
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window of a server.
* **network**: [Network](#network): Network related properties of a server.
* **replicaCapacity**: int {minValue: 0} (ReadOnly): The maximum number of replicas that a primary server can have.
* **replicationRole**: 'None' | 'Replica' | 'Source' | string: The replication role.
* **restorePointInTime**: string (WriteOnly): Restore point creation time (ISO8601 format), specifying the time to restore from.
* **sourceServerResourceId**: string: The source MySQL server id.
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): The state of a server.
* **storage**: [Storage](#storage): Storage related properties of a server.
* **version**: '5.7' | '8.0.21' | string: Server version.

## Sku
### Properties
* **name**: string (Required): The name of the sku, e.g. Standard_D32s_v3.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string (Required): The tier of the particular SKU, e.g. GeneralPurpose.

## Storage
### Properties
* **autoGrow**: 'Disabled' | 'Enabled' | string: Enable Storage Auto Grow or not.
* **autoIoScaling**: 'Disabled' | 'Enabled' | string: Enable IO Auto Scaling or not.
* **iops**: int: Storage IOPS for a server.
* **logOnDisk**: 'Disabled' | 'Enabled' | string: Enable Log On Disk or not.
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

## VirtualNetworkSubnetUsageParameter
### Properties
* **virtualNetworkResourceId**: string: Virtual network resource id.

## VirtualNetworkSubnetUsageResult
### Properties
* **delegatedSubnetsUsage**: [DelegatedSubnetUsage](#delegatedsubnetusage)[] (ReadOnly): A list of delegated subnet usage
* **location**: string (ReadOnly): The location name.
* **subscriptionId**: string (ReadOnly): The subscription id.

