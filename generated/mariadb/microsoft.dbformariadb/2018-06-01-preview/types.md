# Microsoft.DBForMariaDB @ 2018-06-01-preview

## Resource Microsoft.DBForMariaDB/servers@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerPropertiesForCreate (Required)
* **sku**: Sku
* **tags**: ServerForCreateTags
* **type**: 'Microsoft.DBForMariaDB/servers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMariaDB/servers/configurations@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationProperties
* **type**: 'Microsoft.DBForMariaDB/servers/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMariaDB/servers/databases@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseProperties
* **type**: 'Microsoft.DBForMariaDB/servers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMariaDB/servers/firewallRules@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallRuleProperties (Required)
* **type**: 'Microsoft.DBForMariaDB/servers/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMariaDB/servers/securityAlertPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: SecurityAlertPolicyProperties
* **type**: 'Microsoft.DBForMariaDB/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMariaDB/servers/virtualNetworkRules@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkRuleProperties
* **type**: 'Microsoft.DBForMariaDB/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant)

## ServerPropertiesForCreate
* **Discriminator**: createMode

### Base Properties
* **administratorLogin**: string (ReadOnly)
* **earliestRestoreDate**: string (ReadOnly)
* **fullyQualifiedDomainName**: string (ReadOnly)
* **masterServerId**: string (ReadOnly)
* **replicaCapacity**: int (ReadOnly)
* **replicationRole**: string (ReadOnly)
* **storageProfile**: StorageProfile
* **userVisibleState**: 'Disabled' | 'Dropping' | 'Ready' (ReadOnly)
* **version**: '10.2' | '10.3'
### ServerPropertiesForDefaultCreate
#### Properties
* **createMode**: 'Default' (Required)

### ServerPropertiesForGeoRestore
#### Properties
* **createMode**: 'GeoRestore' (Required)

### ServerPropertiesForRestore
#### Properties
* **createMode**: 'PointInTimeRestore' (Required)

### ServerPropertiesForReplica
#### Properties
* **createMode**: 'Replica' (Required)


## StorageProfile
### Properties
* **backupRetentionDays**: int
* **geoRedundantBackup**: 'Disabled' | 'Enabled'
* **storageAutogrow**: 'Disabled' | 'Enabled'
* **storageMB**: int

## ServerPropertiesForDefaultCreate
### Properties
* **createMode**: 'Default' (Required)

## ServerPropertiesForGeoRestore
### Properties
* **createMode**: 'GeoRestore' (Required)

## ServerPropertiesForRestore
### Properties
* **createMode**: 'PointInTimeRestore' (Required)

## ServerPropertiesForReplica
### Properties
* **createMode**: 'Replica' (Required)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: 'Basic' | 'GeneralPurpose' | 'MemoryOptimized'

## ServerForCreateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly)
* **dataType**: string (ReadOnly)
* **defaultValue**: string (ReadOnly)
* **description**: string (ReadOnly)
* **source**: string
* **value**: string

## DatabaseProperties
### Properties
* **charset**: string
* **collation**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

## SecurityAlertPolicyProperties
### Properties
* **disabledAlerts**: string[]
* **emailAccountAdmins**: bool
* **emailAddresses**: string[]
* **retentionDays**: int
* **storageAccountAccessKey**: string
* **storageEndpoint**: string

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **state**: 'Deleting' | 'InProgress' | 'Initializing' | 'Ready' | 'Unknown' (ReadOnly)
* **virtualNetworkSubnetId**: string (Required)

