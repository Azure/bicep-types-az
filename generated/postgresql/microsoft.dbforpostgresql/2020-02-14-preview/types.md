# Microsoft.DBForPostgreSql @ 2020-02-14-preview

## Resource Microsoft.DBForPostgreSql/flexibleServers@2020-02-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerProperties](#serverproperties)
* **sku**: [Sku](#sku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DBForPostgreSql/flexibleServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSql/flexibleServers/firewallRules@2020-02-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required)
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
* **delegatedSubnetArguments**: [ServerPropertiesDelegatedSubnetArguments](#serverpropertiesdelegatedsubnetarguments)
* **displayName**: string
* **fullyQualifiedDomainName**: string (ReadOnly)
* **haEnabled**: 'Disabled' | 'Enabled'
* **haState**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | 'ReplicatingData' (ReadOnly)
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow)
* **pointInTimeUTC**: string
* **publicNetworkAccess**: 'Disabled' | 'Enabled' (ReadOnly)
* **sourceServerName**: string
* **standbyAvailabilityZone**: string (ReadOnly)
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' (ReadOnly)
* **storageProfile**: [StorageProfile](#storageprofile)
* **tags**: [ServerPropertiesTags](#serverpropertiestags)
* **version**: '11' | '12'

## ServerPropertiesDelegatedSubnetArguments
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

## ServerPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: string (Required)
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

