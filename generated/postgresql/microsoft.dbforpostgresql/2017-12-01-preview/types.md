# Microsoft.DBForPostgreSQL @ 2017-12-01-preview

## Resource Microsoft.DBForPostgreSQL/servers@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity) (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerPropertiesForCreate](#serverpropertiesforcreate) (Required)
* **sku**: [Sku](#sku)
* **tags**: [ServerForCreateTags](#serverforcreatetags)
* **type**: 'Microsoft.DBForPostgreSQL/servers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSQL/servers/administrators@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'activeDirectory' (Required, DeployTimeConstant)
* **properties**: [ServerAdministratorProperties](#serveradministratorproperties)
* **type**: 'Microsoft.DBForPostgreSQL/servers/administrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSQL/servers/configurations@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationProperties](#configurationproperties)
* **type**: 'Microsoft.DBForPostgreSQL/servers/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSQL/servers/databases@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseProperties](#databaseproperties)
* **type**: 'Microsoft.DBForPostgreSQL/servers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSQL/servers/firewallRules@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required)
* **type**: 'Microsoft.DBForPostgreSQL/servers/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSQL/servers/securityAlertPolicies@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties)
* **type**: 'Microsoft.DBForPostgreSQL/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForPostgreSQL/servers/virtualNetworkRules@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties)
* **type**: 'Microsoft.DBForPostgreSQL/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned' (ReadOnly)

## ServerPropertiesForCreate
* **Discriminator**: createMode

### Base Properties
* **administratorLogin**: string (ReadOnly)
* **byokEnforcement**: string (ReadOnly)
* **earliestRestoreDate**: string (ReadOnly)
* **fullyQualifiedDomainName**: string (ReadOnly)
* **infrastructureEncryption**: 'Disabled' | 'Enabled' (ReadOnly)
* **masterServerId**: string (ReadOnly)
* **minimalTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2' | 'TLSEnforcementDisabled'
* **privateEndpointConnections**: [ServerPrivateEndpointConnection](#serverprivateendpointconnection)[] (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled' (ReadOnly)
* **replicaCapacity**: int (ReadOnly)
* **replicationRole**: string (ReadOnly)
* **sslEnforcement**: 'Disabled' | 'Enabled'
* **storageProfile**: [StorageProfile](#storageprofile)
* **userVisibleState**: 'Disabled' | 'Dropping' | 'Inaccessible' | 'Ready' (ReadOnly)
* **version**: '10' | '10.0' | '10.2' | '11' | '9.5' | '9.6'
### ServerPropertiesForDefaultCreate
#### Properties
* **administratorLogin**: string (Required, WriteOnly)
* **administratorLoginPassword**: string (Required, WriteOnly)
* **createMode**: 'Default' (Required)

### ServerPropertiesForGeoRestore
#### Properties
* **createMode**: 'GeoRestore' (Required)
* **sourceServerId**: string (Required, WriteOnly)

### ServerPropertiesForRestore
#### Properties
* **createMode**: 'PointInTimeRestore' (Required)
* **restorePointInTime**: string (Required, WriteOnly)
* **sourceServerId**: string (Required, WriteOnly)

### ServerPropertiesForReplica
#### Properties
* **createMode**: 'Replica' (Required)
* **sourceServerId**: string (Required, WriteOnly)


## ServerPrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty) (ReadOnly)
* **provisioningState**: 'Approving' | 'Dropping' | 'Failed' | 'Ready' | 'Rejecting' (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: 'None' (ReadOnly)
* **description**: string (ReadOnly)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (ReadOnly)

## StorageProfile
### Properties
* **backupRetentionDays**: int
* **geoRedundantBackup**: 'Disabled' | 'Enabled'
* **storageAutogrow**: 'Disabled' | 'Enabled'
* **storageMB**: int

## ServerPropertiesForDefaultCreate
### Properties
* **administratorLogin**: string (Required, WriteOnly)
* **administratorLoginPassword**: string (Required, WriteOnly)
* **createMode**: 'Default' (Required)

## ServerPropertiesForGeoRestore
### Properties
* **createMode**: 'GeoRestore' (Required)
* **sourceServerId**: string (Required, WriteOnly)

## ServerPropertiesForRestore
### Properties
* **createMode**: 'PointInTimeRestore' (Required)
* **restorePointInTime**: string (Required, WriteOnly)
* **sourceServerId**: string (Required, WriteOnly)

## ServerPropertiesForReplica
### Properties
* **createMode**: 'Replica' (Required)
* **sourceServerId**: string (Required, WriteOnly)

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

## ServerAdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' (Required)
* **login**: string (Required)
* **sid**: string (Required)
* **tenantId**: string (Required)

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
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageEndpoint**: string

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **state**: 'Deleting' | 'InProgress' | 'Initializing' | 'Ready' | 'Unknown' (ReadOnly)
* **virtualNetworkSubnetId**: string (Required)

