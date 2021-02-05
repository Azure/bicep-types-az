# Microsoft.DBForPostgreSql @ 2020-10-05-privatepreview

## Resource Microsoft.DBForPostgreSql/serverGroupsv2@2020-10-05-privatepreview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-05-privatepreview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerGroupProperties
* **systemData**: systemData
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DBForPostgreSql/serverGroupsv2' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSql/serverGroupsv2/firewallRules@2020-10-05-privatepreview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-05-privatepreview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallRuleProperties (Required)
* **systemData**: systemData
* **type**: 'Microsoft.DBForPostgreSql/serverGroupsv2/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSql/serverGroupsv2/roles@2020-10-05-privatepreview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-05-privatepreview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleProperties
* **systemData**: systemData
* **type**: 'Microsoft.DBForPostgreSql/serverGroupsv2/roles' (ReadOnly, DeployTimeConstant)

## ServerGroupProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **availabilityZone**: string
* **backupRetentionDays**: int
* **citusVersion**: '8.3' | '9.0' | '9.1' | '9.2' | '9.3' | '9.4' | '9.5'
* **createMode**: 'Default' | 'PointInTimeRestore'
* **delegatedSubnetArguments**: schemas:17_delegatedSubnetArguments
* **earliestRestoreTime**: string (ReadOnly)
* **enableMx**: bool
* **enableShardsOnCoordinator**: bool
* **enableZfs**: bool
* **maintenanceWindow**: MaintenanceWindow
* **pointInTimeUTC**: string
* **postgresqlVersion**: '11' | '12'
* **resourceProviderType**: 'Marlin' | 'Meru' (ReadOnly)
* **serverRoleGroups**: ServerRoleGroup[]
* **sourceLocation**: string
* **sourceResourceGroupName**: string
* **sourceServerGroupName**: string
* **sourceSubscriptionId**: string
* **standbyAvailabilityZone**: string
* **state**: 'Disabled' | 'Dropping' | 'Provisioning' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating'

## schemas:17_delegatedSubnetArguments
### Properties
* **subnetArmResourceId**: string

## MaintenanceWindow
### Properties
* **customWindow**: string
* **dayOfWeek**: int
* **startHour**: int
* **startMinute**: int

## ServerRoleGroup
### Properties
* **enableHa**: bool
* **enablePublicIp**: bool (ReadOnly)
* **name**: string
* **role**: 'Coordinator' | 'Worker'
* **serverCount**: int
* **serverEdition**: 'GeneralPurpose' | 'MemoryOptimized'
* **serverNames**: ServerNameItem[] (ReadOnly)
* **storageQuotaInMb**: int
* **vCores**: int

## ServerNameItem
### Properties
* **fullyQualifiedDomainName**: string
* **name**: string

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

## RoleProperties
### Properties
* **password**: string (Required)

