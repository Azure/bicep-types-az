# Microsoft.DBforMySQL @ 2021-05-01-preview

## Resource Microsoft.DBforMySQL/flexibleServers@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The Azure Active Directory identity of the server.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [Sku](#sku): The SKU (pricing tier) of the server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforMySQL/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/backups@2021-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBackupProperties](#serverbackupproperties) (ReadOnly): The properties of a server backup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/configurations@2021-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties) (ReadOnly): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/databases@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/flexibleServers/firewallRules@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.DBforMySQL/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Backup
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **earliestRestoreDate**: string (ReadOnly): Earliest restore point creation time (ISO8601 format)
* **geoRedundantBackup**: 'Disabled' | 'Enabled' | string: Whether or not geo redundant backup is enabled.

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly): Allowed values of the configuration.
* **dataType**: string (ReadOnly): Data type of the configuration.
* **defaultValue**: string (ReadOnly): Default value of the configuration.
* **description**: string (ReadOnly): Description of the configuration.
* **isConfigPendingRestart**: 'False' | 'True' | string (ReadOnly): If is the configuration pending restart or not.
* **isDynamicConfig**: 'False' | 'True' | string (ReadOnly): If is the configuration dynamic.
* **isReadOnly**: 'False' | 'True' | string (ReadOnly): If is the configuration read only.
* **source**: 'system-default' | 'user-override' | string: Source of the configuration.
* **value**: string: Value of the configuration.

## DatabaseProperties
### Properties
* **charset**: string: The charset of the database.
* **collation**: string: The collation of the database.

## FirewallRuleProperties
### Properties
* **endIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The end IP address of the server firewall rule. Must be IPv4 format.
* **startIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The start IP address of the server firewall rule. Must be IPv4 format.

## HighAvailability
### Properties
* **mode**: 'Disabled' | 'Enabled' | 'SameZone' | 'ZoneRedundant' | string: High availability mode for a server.
* **standbyAvailabilityZone**: string: Availability zone of the standby server.
* **state**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | string (ReadOnly): The state of server high availability.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## MaintenanceWindow
### Properties
* **customWindow**: string: indicates whether custom window is enabled or disabled
* **dayOfWeek**: int: day of week for maintenance window
* **startHour**: int: start hour for maintenance window
* **startMinute**: int: start minute for maintenance window

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
* **iops**: int: Storage IOPS for a server.
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

