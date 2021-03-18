# Microsoft.DBForMySql @ 2020-07-01-preview

## Resource Microsoft.DBForMySql/flexibleServers@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerProperties](#serverproperties)
* **sku**: [Sku](#sku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DBForMySql/flexibleServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMySql/flexibleServers/databases@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseProperties](#databaseproperties)
* **type**: 'Microsoft.DBForMySql/flexibleServers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMySql/flexibleServers/firewallRules@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required)
* **type**: 'Microsoft.DBForMySql/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMySql/flexibleServers/keys@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerKeyProperties](#serverkeyproperties)
* **type**: 'Microsoft.DBForMySql/flexibleServers/keys' (ReadOnly, DeployTimeConstant)

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
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Replica'
* **delegatedSubnetArguments**: [DelegatedSubnetArguments](#delegatedsubnetarguments)
* **earliestRestoreDate**: string (ReadOnly)
* **fullyQualifiedDomainName**: string (ReadOnly)
* **haEnabled**: 'Disabled' | 'Enabled'
* **haState**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | 'ReplicatingData' (ReadOnly)
* **infrastructureEncryption**: 'Disabled' | 'Enabled'
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow)
* **publicNetworkAccess**: 'Disabled' | 'Enabled' (ReadOnly)
* **replicaCapacity**: int (ReadOnly)
* **replicationRole**: string
* **restorePointInTime**: string
* **sourceServerId**: string
* **sslEnforcement**: 'Disabled' | 'Enabled'
* **standbyAvailabilityZone**: string (ReadOnly)
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' (ReadOnly)
* **storageProfile**: [StorageProfile](#storageprofile)
* **tags**: [ServerPropertiesTags](#serverpropertiestags)
* **version**: '5.7'

## DelegatedSubnetArguments
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
* **storageAutogrow**: 'Disabled' | 'Enabled'
* **storageIops**: int
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

## DatabaseProperties
### Properties
* **charset**: string
* **collation**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

## ServerKeyProperties
### Properties
* **creationDate**: string (ReadOnly)
* **serverKeyType**: 'AzureKeyVault' (Required)
* **uri**: string

