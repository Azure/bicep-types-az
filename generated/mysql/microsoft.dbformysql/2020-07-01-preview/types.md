# Microsoft.DBForMySql @ 2020-07-01-preview

## Resource Microsoft.DBForMySql/flexibleServers@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The Azure Active Directory identity of the server.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [Sku](#sku): The SKU (pricing tier) of the server.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBForMySql/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBForMySql/flexibleServers/databases@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **type**: 'Microsoft.DBForMySql/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBForMySql/flexibleServers/firewallRules@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **type**: 'Microsoft.DBForMySql/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBForMySql/flexibleServers/keys@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector used to protect the key.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerKeyProperties](#serverkeyproperties): Properties of the ServerKey Resource.
* **type**: 'Microsoft.DBForMySql/flexibleServers/keys' (ReadOnly, DeployTimeConstant): The resource type

## DatabaseProperties
### Properties
* **charset**: string: The charset of the database.
* **collation**: string: The collation of the database.

## DelegatedSubnetArguments
### Properties
* **subnetArmResourceId**: string: delegated subnet arm resource id.

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

## PrivateDnsZoneArguments
### Properties
* **privateDnsZoneArmResourceId**: string: private dns zone arm resource id.

## ServerKeyProperties
### Properties
* **creationDate**: string (ReadOnly): The key creation date.
* **serverKeyType**: 'AzureKeyVault' | string (Required): The key type like 'AzureKeyVault'.
* **uri**: string: The URI of the key.

## ServerProperties
### Properties
* **administratorLogin**: string: The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string (WriteOnly): The password of the administrator login (required for server creation).
* **availabilityZone**: string: availability Zone information of the server.
* **byokEnforcement**: string (ReadOnly): Status showing whether the data encryption is enabled with customer-managed keys.
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Replica' | string (WriteOnly): The mode to create a new MySQL server.
* **delegatedSubnetArguments**: [DelegatedSubnetArguments](#delegatedsubnetarguments): Delegated subnet arguments.
* **earliestRestoreDate**: string (ReadOnly): Earliest restore point creation time (ISO8601 format)
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **haEnabled**: 'Disabled' | 'Enabled' | string: Enable HA or not for a server.
* **haState**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | 'ReplicatingData' | string (ReadOnly): The state of a HA server.
* **infrastructureEncryption**: 'Disabled' | 'Enabled' | string (WriteOnly): Status showing whether the server enabled infrastructure encryption.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window of a server.
* **privateDnsZoneArguments**: [PrivateDnsZoneArguments](#privatednszonearguments): private dns zone arguments.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string (ReadOnly): Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
* **replicaCapacity**: int (ReadOnly): The maximum number of replicas that a primary server can have.
* **replicationRole**: string: The replication role.
* **restorePointInTime**: string (WriteOnly): Restore point creation time (ISO8601 format), specifying the time to restore from.
* **sourceServerId**: string: The source MySQL server id.
* **sslEnforcement**: 'Disabled' | 'Enabled' | string: Enable ssl enforcement or not when connect to server.
* **standbyAvailabilityZone**: string (ReadOnly): availability Zone information of the server.
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): The state of a server.
* **storageProfile**: [StorageProfile](#storageprofile): Storage profile of a server.
* **tags**: [ServerPropertiesTags](#serverpropertiestags): Application-specific metadata in the form of key-value pairs.
* **version**: '5.7' | string: Server version.

## ServerPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: string (Required): The name of the sku, e.g. Standard_D32s_v3.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string (Required): The tier of the particular SKU, e.g. GeneralPurpose.

## StorageProfile
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **fileStorageSkuName**: string (ReadOnly): The sku name of the file storage.
* **storageAutogrow**: 'Disabled' | 'Enabled' | string: Enable Storage Auto Grow.
* **storageIops**: int: Storage IOPS for a server.
* **storageMB**: int: Max storage allowed for a server.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

