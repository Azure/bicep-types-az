# Microsoft.DBforPostgreSQL @ 2022-12-01

## Resource Microsoft.DBforPostgreSQL/flexibleServers@2022-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [UserAssignedIdentity](#userassignedidentity): Describes the identity of the application.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [Sku](#sku): The SKU (pricing tier) of the server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/administrators@2022-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorPropertiesForAddOrAdministratorProperties](#administratorpropertiesforaddoradministratorproperties): Properties of the active directory administrator.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/backups@2022-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBackupProperties](#serverbackupproperties) (ReadOnly): The properties of a server backup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/configurations@2022-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/databases@2022-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2022-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## AdministratorPropertiesForAddOrAdministratorProperties
### Properties
* **objectId**: string (ReadOnly): The objectId of the Active Directory administrator.
* **principalName**: string: Active Directory administrator principal name.
* **principalType**: 'Group' | 'ServicePrincipal' | 'Unknown' | 'User' | string: The principal type used to represent the type of Active Directory Administrator.
* **tenantId**: string (WriteOnly): The tenantId of the Active Directory administrator.

## AuthConfig
### Properties
* **activeDirectoryAuth**: 'Disabled' | 'Enabled' | string: If Enabled, Azure Active Directory authentication is enabled.
* **passwordAuth**: 'Disabled' | 'Enabled' | string: If Enabled, Password authentication is enabled.
* **tenantId**: string: Tenant id of the server.

## Backup
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **earliestRestoreDate**: string (ReadOnly): The earliest restore point time (ISO8601 format) for server.
* **geoRedundantBackup**: 'Disabled' | 'Enabled' | string: A value indicating whether Geo-Redundant backup is enabled on the server.

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly): Allowed values of the configuration.
* **dataType**: 'Boolean' | 'Enumeration' | 'Integer' | 'Numeric' | string (ReadOnly): Data type of the configuration.
* **defaultValue**: string (ReadOnly): Default value of the configuration.
* **description**: string (ReadOnly): Description of the configuration.
* **documentationLink**: string (ReadOnly): Configuration documentation link.
* **isConfigPendingRestart**: bool (ReadOnly): Configuration is pending restart or not.
* **isDynamicConfig**: bool (ReadOnly): Configuration dynamic or static.
* **isReadOnly**: bool (ReadOnly): Configuration read-only or not.
* **source**: string: Source of the configuration.
* **unit**: string (ReadOnly): Configuration unit.
* **value**: string: Value of the configuration.

## DatabaseProperties
### Properties
* **charset**: string: The charset of the database.
* **collation**: string: The collation of the database.

## DataEncryption
### Properties
* **primaryKeyURI**: string: URI for the key for data encryption for primary server.
* **primaryUserAssignedIdentityId**: string: Resource Id for the User assigned identity to be used for data encryption for primary server.
* **type**: 'AzureKeyVault' | 'SystemManaged' | string: Data encryption type to depict if it is System Managed vs Azure Key vault.

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required): The end IP address of the server firewall rule. Must be IPv4 format.
* **startIpAddress**: string (Required): The start IP address of the server firewall rule. Must be IPv4 format.

## HighAvailability
### Properties
* **mode**: 'Disabled' | 'SameZone' | 'ZoneRedundant' | string: The HA mode for the server.
* **standbyAvailabilityZone**: string: availability zone information of the standby.
* **state**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | 'ReplicatingData' | string (ReadOnly): A state of a HA server that is visible to user.

## MaintenanceWindow
### Properties
* **customWindow**: string: indicates whether custom window is enabled or disabled
* **dayOfWeek**: int: day of week for maintenance window
* **startHour**: int: start hour for maintenance window
* **startMinute**: int: start minute for maintenance window

## Network
### Properties
* **delegatedSubnetResourceId**: string: Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
* **privateDnsZoneArmResourceId**: string: Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string (ReadOnly): public network access is enabled or not

## ServerBackupProperties
### Properties
* **backupType**: 'Full' | string: Backup type.
* **completedTime**: string: Backup completed time (ISO8601 format).
* **source**: string: Backup source

## ServerProperties
### Properties
* **administratorLogin**: string: The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string (WriteOnly): The administrator login password (required for server creation).
* **authConfig**: [AuthConfig](#authconfig): AuthConfig properties of a server.
* **availabilityZone**: string: availability zone information of the server.
* **backup**: [Backup](#backup): Backup properties of a server.
* **createMode**: 'Create' | 'Default' | 'GeoRestore' | 'PointInTimeRestore' | 'Replica' | 'Update' | string (WriteOnly): The mode to create a new PostgreSQL server.
* **dataEncryption**: [DataEncryption](#dataencryption): Data encryption properties of a server.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **highAvailability**: [HighAvailability](#highavailability): High availability properties of a server.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window properties of a server.
* **minorVersion**: string (ReadOnly): The minor version of the server.
* **network**: [Network](#network): Network properties of a server. This Network property is required to be passed only in case you want the server to be Private access server.
* **pointInTimeUTC**: string (WriteOnly): Restore point creation time (ISO8601 format), specifying the time to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore'.
* **replicaCapacity**: int (ReadOnly): Replicas allowed for a server.
* **replicationRole**: 'AsyncReplica' | 'GeoAsyncReplica' | 'None' | 'Primary' | string: Replication role of the server
* **sourceServerResourceId**: string: The source server resource ID to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'Replica'. This property is returned only for Replica server
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): A state of a server that is visible to user.
* **storage**: [Storage](#storage): Storage properties of a server.
* **version**: '11' | '12' | '13' | '14' | string: PostgreSQL Server version.

## Sku
### Properties
* **name**: string (Required): The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string (Required): The tier of the particular SKU, e.g. Burstable.

## Storage
### Properties
* **storageSizeGB**: int: Max storage allowed for a server.

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

## UserAssignedIdentity
### Properties
* **tenantId**: string (ReadOnly): Tenant id of the server.
* **type**: 'None' | 'UserAssigned' | string (Required): the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
* **userAssignedIdentities**: [UserAssignedIdentityMap](#userassignedidentitymap): represents user assigned identities map.

## UserAssignedIdentityMap
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## UserIdentity
### Properties
* **clientId**: string: the client identifier of the Service Principal which this identity represents.
* **principalId**: string: the object identifier of the Service Principal which this identity represents.

