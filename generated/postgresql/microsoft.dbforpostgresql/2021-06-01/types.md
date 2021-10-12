# Microsoft.DBforPostgreSQL @ 2021-06-01

## Resource Microsoft.DBforPostgreSQL/flexibleServers@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): The properties of a server.
* **sku**: [Sku](#sku): Sku information related properties of a server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/configurations@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/databases@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a server firewall rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## ServerProperties
### Properties
* **administratorLogin**: string: The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string: The administrator login password (required for server creation).
* **availabilityZone**: string: availability zone information of the server.
* **backup**: [Backup](#backup): Backup properties of a server
* **createMode**: 'Create' | 'Default' | 'PointInTimeRestore' | 'Update': The mode to create a new PostgreSQL server.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **highAvailability**: [HighAvailability](#highavailability): High availability properties of a server
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window properties of a server.
* **minorVersion**: string (ReadOnly): The minor version of the server.
* **network**: [Network](#network): Network properties of a server
* **pointInTimeUTC**: string: Restore point creation time (ISO8601 format), specifying the time to restore from. It's required when 'createMode' is 'PointInTimeRestore'.
* **sourceServerResourceId**: string: The source server resource ID to restore from. It's required when 'createMode' is 'PointInTimeRestore'.
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' (ReadOnly): A state of a server that is visible to user.
* **storage**: [Storage](#storage): Storage properties of a server
* **tags**: [ServerPropertiesTags](#serverpropertiestags): Application-specific metadata in the form of key-value pairs.
* **version**: '11' | '12' | '13': The version of a server.

## Backup
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **earliestRestoreDate**: string (ReadOnly): The earliest restore point time (ISO8601 format) for server.
* **geoRedundantBackup**: 'Disabled' | 'Enabled': A value indicating whether Geo-Redundant backup is enabled on the server.

## HighAvailability
### Properties
* **mode**: 'Disabled' | 'ZoneRedundant': The HA mode for the server.
* **standbyAvailabilityZone**: string: availability zone information of the standby.
* **state**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | 'ReplicatingData' (ReadOnly): A state of a HA server that is visible to user.

## MaintenanceWindow
### Properties
* **customWindow**: string: indicates whether custom window is enabled or disabled
* **dayOfWeek**: int: day of week for maintenance window
* **startHour**: int: start hour for maintenance window
* **startMinute**: int: start minute for maintenance window

## Network
### Properties
* **delegatedSubnetResourceId**: string: delegated subnet arm resource id.
* **privateDnsZoneArmResourceId**: string: private dns zone arm resource id.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' (ReadOnly): public network access is enabled or not

## Storage
### Properties
* **storageSizeGB**: int: Max storage allowed for a server.

## ServerPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: string (Required): The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' (Required): The tier of the particular SKU, e.g. Burstable.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly): Allowed values of the configuration.
* **dataType**: 'Boolean' | 'Enumeration' | 'Integer' | 'Numeric' (ReadOnly): Data type of the configuration.
* **defaultValue**: string (ReadOnly): Default value of the configuration.
* **description**: string (ReadOnly): Description of the configuration.
* **source**: string: Source of the configuration.
* **value**: string: Value of the configuration.

## DatabaseProperties
### Properties
* **charset**: string: The charset of the database.
* **collation**: string: The collation of the database.

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required): The end IP address of the server firewall rule. Must be IPv4 format.
* **startIpAddress**: string (Required): The start IP address of the server firewall rule. Must be IPv4 format.

