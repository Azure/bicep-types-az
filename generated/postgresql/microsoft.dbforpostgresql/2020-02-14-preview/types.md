# Microsoft.DBForPostgreSql @ 2020-02-14-preview

## Resource Microsoft.DBForPostgreSql/flexibleServers@2020-02-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The Azure Active Directory identity of the server.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [Sku](#sku): The SKU (pricing tier) of the server.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBForPostgreSql/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBForPostgreSql/flexibleServers/firewallRules@2020-02-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **type**: 'Microsoft.DBForPostgreSql/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required): The end IP address of the server firewall rule. Must be IPv4 format.
* **startIpAddress**: string (Required): The start IP address of the server firewall rule. Must be IPv4 format.

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

## ServerProperties
### Properties
* **administratorLogin**: string: The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string (WriteOnly): The administrator login password (required for server creation).
* **availabilityZone**: string: availability Zone information of the server.
* **byokEnforcement**: string (ReadOnly): Status showing whether the data encryption is enabled with customer-managed keys.
* **createMode**: 'Default' | 'PointInTimeRestore' | string (WriteOnly): The mode to create a new PostgreSQL server.
* **delegatedSubnetArguments**: [ServerPropertiesDelegatedSubnetArguments](#serverpropertiesdelegatedsubnetarguments)
* **displayName**: string: The display name of a server.
* **earliestRestoreDate**: string (ReadOnly): The earliest restore point time (ISO8601 format) for server.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **haEnabled**: 'Disabled' | 'Enabled': stand by count value can be either enabled or disabled
* **haState**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | 'ReplicatingData' | string (ReadOnly): A state of a HA server that is visible to user.
* **logBackupStorageSku**: string: The log backup storage sku of the server.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window of a server.
* **minorVersion**: string (ReadOnly): The minor version of the server.
* **pointInTimeUTC**: string: Restore point creation time (ISO8601 format), specifying the time to restore from.
* **privateDnsZoneArguments**: [ServerPropertiesPrivateDnsZoneArguments](#serverpropertiesprivatednszonearguments)
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string (ReadOnly): public network access is enabled or not
* **sourceResourceGroupName**: string: The resource group name of source serve PostgreSQL server name to restore from.
* **sourceServerName**: string: The source PostgreSQL server name to restore from.
* **sourceSubscriptionId**: string: The subscription id of source serve PostgreSQL server name to restore from.
* **standbyAvailabilityZone**: string (ReadOnly): availability Zone information of the server.
* **standbyCount**: int: The number of standbys.
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): A state of a server that is visible to user.
* **storageProfile**: [StorageProfile](#storageprofile): Storage profile of a server.
* **tags**: [ServerPropertiesTags](#serverpropertiestags): Application-specific metadata in the form of key-value pairs.
* **version**: '11' | '12' | string: PostgreSQL Server version.

## ServerPropertiesDelegatedSubnetArguments
### Properties
* **subnetArmResourceId**: string: delegated subnet arm resource id.

## ServerPropertiesPrivateDnsZoneArguments
### Properties
* **privateDnsZoneArmResourceId**: string: private dns zone arm resource id.

## ServerPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: string (Required): The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string (Required): The tier of the particular SKU, e.g. Burstable.

## StorageProfile
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **geoRedundantBackup**: 'Disabled' | 'Enabled' | string: A value indicating whether Geo-Redundant backup is enabled on the server.
* **storageMB**: int: Max storage allowed for a server.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

