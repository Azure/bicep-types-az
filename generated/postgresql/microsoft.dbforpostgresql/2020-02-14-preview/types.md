# Microsoft.DBForPostgreSql @ 2020-02-14-preview

## Resource Microsoft.DBForPostgreSql/flexibleServers@2020-02-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DBForPostgreSql/flexibleServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSql/flexibleServers/firewallRules@2020-02-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallRuleProperties (Required)
* **type**: 'Microsoft.DBForPostgreSql/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## ServerProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **availabilityZone**: string
* **byokEnforcement**: string (ReadOnly)
* **createMode**: 'Default' | 'PointInTimeRestore'
* **delegatedSubnetArguments**: schemas:11_delegatedSubnetArguments
* **displayName**: string
* **fullyQualifiedDomainName**: string (ReadOnly)
* **haEnabled**: 'Disabled' | 'Enabled'
* **haState**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | 'ReplicatingData' (ReadOnly)
* **maintenanceWindow**: MaintenanceWindow
* **pointInTimeUTC**: string
* **publicNetworkAccess**: 'Disabled' | 'Enabled' (ReadOnly)
* **sourceServerName**: string
* **standbyAvailabilityZone**: string (ReadOnly)
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' (ReadOnly)
* **storageProfile**: StorageProfile
* **tags**: Dictionary<string,String>
* **version**: '11' | '12'

## schemas:11_delegatedSubnetArguments
### Properties
* **subnetArmResourceId**: string

## MaintenanceWindow
### Properties
* **customWindow**: string
* **dayOfWeek**: int
* **startHour**: int
* **startMinute**: int

## StorageProfile
### Properties
* **backupRetentionDays**: int
* **storageMB**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: string (Required)
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

