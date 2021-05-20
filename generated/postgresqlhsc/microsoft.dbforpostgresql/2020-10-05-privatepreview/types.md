# Microsoft.DBForPostgreSql @ 2020-10-05-privatepreview

## Resource Microsoft.DBForPostgreSql/serverGroupsv2@2020-10-05-privatepreview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-05-privatepreview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerGroupProperties](#servergroupproperties): The properties used to create a new server group.
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DBForPostgreSql/serverGroupsv2' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBForPostgreSql/serverGroupsv2/firewallRules@2020-10-05-privatepreview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-05-privatepreview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a server group firewall rule.
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DBForPostgreSql/serverGroupsv2/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBForPostgreSql/serverGroupsv2/roles@2020-10-05-privatepreview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-05-privatepreview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleProperties](#roleproperties): The properties of a server group role.
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DBForPostgreSql/serverGroupsv2/roles' (ReadOnly, DeployTimeConstant): The resource type

## ServerGroupProperties
### Properties
* **administratorLogin**: string: The administrator's login name of servers in server group. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string: The password of the administrator login.
* **availabilityZone**: string: Availability Zone information of the server group.
* **backupRetentionDays**: int: The backup retention days for server group.
* **citusVersion**: '8.3' | '9.0' | '9.1' | '9.2' | '9.3' | '9.4' | '9.5': The Citus version of server group.
* **createMode**: 'Default' | 'PointInTimeRestore' | 'ReadReplica': The mode to create a new server group.
* **delegatedSubnetArguments**: [schemas:17_delegatedSubnetArguments](#schemas17delegatedsubnetarguments): The delegated subnet arguments for a server group.
* **earliestRestoreTime**: string (ReadOnly): The earliest restore point time (ISO8601 format) for server group.
* **enableMx**: bool: If Citus MX is enabled or not for the server group.
* **enableShardsOnCoordinator**: bool: If shards on coordinator is enabled or not for the server group.
* **enableZfs**: bool: If ZFS compression is enabled or not for the server group.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window of a server group.
* **pointInTimeUTC**: string: Restore point creation time (ISO8601 format), specifying the time to restore from. It's required when 'createMode' is 'PointInTimeRestore'
* **postgresqlVersion**: '11' | '12': The PostgreSQL version of server group.
* **privateDnsZoneArguments**: [schemas:17_privateDnsZoneArguments](#schemas17privatednszonearguments): The private dns zone arguments for a server group.
* **readReplicas**: string[] (ReadOnly): The array of read replica server groups.
* **resourceProviderType**: 'Marlin' | 'Meru' (ReadOnly): The resource provider type of server group.
* **serverRoleGroups**: [ServerRoleGroup](#serverrolegroup)[]: The list of server role groups.
* **sourceLocation**: string: The source server group location to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'ReadReplica'
* **sourceResourceGroupName**: string: The source resource group name to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'ReadReplica'
* **sourceServerGroup**: string (ReadOnly): The source server group id for read replica server groups.
* **sourceServerGroupName**: string: The source server group name to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'ReadReplica'
* **sourceSubscriptionId**: string: The source subscription id to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'ReadReplica'
* **standbyAvailabilityZone**: string: Standby Availability Zone information of the server group.
* **state**: 'Disabled' | 'Dropping' | 'Provisioning' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating': A state of a server group that is visible to user.

## schemas:17_delegatedSubnetArguments
### Properties
* **subnetArmResourceId**: string: delegated subnet arm resource id.

## MaintenanceWindow
### Properties
* **customWindow**: string: indicates whether custom window is enabled or disabled
* **dayOfWeek**: int: day of week for maintenance window
* **startHour**: int: start hour for maintenance window
* **startMinute**: int: start minute for maintenance window

## schemas:17_privateDnsZoneArguments
### Properties
* **privateDnsZoneArmResourceId**: string: private dns zone arm resource id.

## ServerRoleGroup
### Properties
* **enableHa**: bool: If high availability is enabled or not for the server.
* **enablePublicIp**: bool (ReadOnly): If public IP is requested or not for a server.
* **name**: string: The name of the server role group.
* **role**: 'Coordinator' | 'Worker': The role of servers in the server role group.
* **serverCount**: int: The number of servers in the server role group.
* **serverEdition**: 'GeneralPurpose' | 'MemoryOptimized': The edition of a server (default: GeneralPurpose).
* **serverNames**: [ServerNameItem](#servernameitem)[] (ReadOnly): The list of server names in the server role group.
* **storageQuotaInMb**: int: The storage of a server in MB (max: 2097152 = 2TiB).
* **vCores**: int: The vCores count of a server (max: 64).

## ServerNameItem
### Properties
* **fullyQualifiedDomainName**: string: The fully qualified domain name of a server.
* **name**: string: The name of a server.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required): The end IP address of the server group firewall rule. Must be IPv4 format.
* **startIpAddress**: string (Required): The start IP address of the server group firewall rule. Must be IPv4 format.

## RoleProperties
### Properties
* **password**: string (Required): The password of the server group role.

