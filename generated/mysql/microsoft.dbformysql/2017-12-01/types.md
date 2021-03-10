# Microsoft.DBForMySQL @ 2017-12-01

## Resource Microsoft.DBForMySQL/servers@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerPropertiesForCreate](#serverpropertiesforcreate) (Required)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DBForMySQL/servers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMySQL/servers/administrators@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerAdministratorProperties](#serveradministratorproperties)
* **type**: 'Microsoft.DBForMySQL/servers/administrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMySQL/servers/configurations@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationProperties](#configurationproperties)
* **type**: 'Microsoft.DBForMySQL/servers/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMySQL/servers/databases@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseProperties](#databaseproperties)
* **type**: 'Microsoft.DBForMySQL/servers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMySQL/servers/firewallRules@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required)
* **type**: 'Microsoft.DBForMySQL/servers/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties)
* **type**: 'Microsoft.DBforMySQL/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMySQL/servers/virtualNetworkRules@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties)
* **type**: 'Microsoft.DBForMySQL/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## ServerPropertiesForCreate
* **Discriminator**: createMode
### Base Properties
* **administratorLogin**: string (ReadOnly)
* **byokEnforcement**: string (ReadOnly)
* **earliestRestoreDate**: string (ReadOnly)
* **fullyQualifiedDomainName**: string (ReadOnly)
* **infrastructureEncryption**: 'Disabled' | 'Enabled'
* **masterServerId**: string (ReadOnly)
* **minimalTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2' | 'TLSEnforcementDisabled'
* **privateEndpointConnections**: [ServerPrivateEndpointConnection](#serverprivateendpointconnection)[] (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **replicaCapacity**: int (ReadOnly)
* **replicationRole**: string (ReadOnly)
* **sslEnforcement**: 'Disabled' | 'Enabled'
* **storageProfile**: [StorageProfile](#storageprofile)
* **userVisibleState**: 'Disabled' | 'Dropping' | 'Inaccessible' | 'Ready' (ReadOnly)
* **version**: '5.6' | '5.7' | '8.0'
### Default
#### Properties
* **administratorLogin**: string (Required, WriteOnly)
* **administratorLoginPassword**: string (Required, WriteOnly)
* **createMode**: 'Default' (Required)

### GeoRestore
#### Properties
* **createMode**: 'GeoRestore' (Required)
* **sourceServerId**: string (Required, WriteOnly)

### PointInTimeRestore
#### Properties
* **createMode**: 'PointInTimeRestore' (Required)
* **restorePointInTime**: string (Required, WriteOnly)
* **sourceServerId**: string (Required, WriteOnly)

### Replica
#### Properties
* **createMode**: 'Replica' (Required)
* **sourceServerId**: string (Required, WriteOnly)


## ServerPrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **properties**: [ServerPrivateEndpointConnectionProperties](#serverprivateendpointconnectionproperties) (ReadOnly)

## ServerPrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty) (ReadOnly)
* **privateLinkServiceConnectionState**: [ServerPrivateLinkServiceConnectionStateProperty](#serverprivatelinkserviceconnectionstateproperty) (ReadOnly)
* **provisioningState**: 'Approving' | 'Dropping' | 'Failed' | 'Ready' | 'Rejecting' (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string (ReadOnly)

## ServerPrivateLinkServiceConnectionStateProperty
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

## Default
### Properties
* **administratorLogin**: string (Required, WriteOnly)
* **administratorLoginPassword**: string (Required, WriteOnly)
* **createMode**: 'Default' (Required)

## GeoRestore
### Properties
* **createMode**: 'GeoRestore' (Required)
* **sourceServerId**: string (Required, WriteOnly)

## PointInTimeRestore
### Properties
* **createMode**: 'PointInTimeRestore' (Required)
* **restorePointInTime**: string (Required, WriteOnly)
* **sourceServerId**: string (Required, WriteOnly)

## Replica
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerAdministratorProperties
### Properties
* **administratorType**: string (Required)
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
* **state**: 'Deleting' | 'Initializing' | 'InProgress' | 'Ready' | 'Unknown' (ReadOnly)
* **virtualNetworkSubnetId**: string (Required)

