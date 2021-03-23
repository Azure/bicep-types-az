# Microsoft.DocumentDB @ 2021-03-01-preview

## Resource Microsoft.DocumentDB/databaseAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseAccountCreateUpdateProperties](#databaseaccountcreateupdateproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraKeyspaceCreateUpdateProperties](#cassandrakeyspacecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraTableCreateUpdateProperties](#cassandratablecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GremlinDatabaseCreateUpdateProperties](#gremlindatabasecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GremlinGraphCreateUpdateProperties](#gremlingraphcreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MongoDBDatabaseCreateUpdateProperties](#mongodbdatabasecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MongoDBCollectionCreateUpdateProperties](#mongodbcollectioncreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [NotebookWorkspaceProperties](#notebookworkspaceproperties) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlDatabaseCreateUpdateProperties](#sqldatabasecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlContainerCreateUpdateProperties](#sqlcontainercreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlStoredProcedureCreateUpdateProperties](#sqlstoredprocedurecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlTriggerCreateUpdateProperties](#sqltriggercreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlUserDefinedFunctionCreateUpdateProperties](#sqluserdefinedfunctioncreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlRoleAssignmentResource](#sqlroleassignmentresource)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlRoleDefinitionResource](#sqlroledefinitionresource)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/tables@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TableCreateUpdateProperties](#tablecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities)

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties](#components1jq1t4ischemasmanagedserviceidentitypropertiesuserassignedidentitiesadditionalproperties)

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## DatabaseAccountCreateUpdateProperties
* **Discriminator**: createMode

### Base Properties
* **apiProperties**: [ApiProperties](#apiproperties)
* **backupPolicy**: [BackupPolicy](#backuppolicy)
* **capabilities**: [Capability](#capability)[]
* **connectorOffer**: 'Small'
* **consistencyPolicy**: [ConsistencyPolicy](#consistencypolicy)
* **cors**: [CorsPolicy](#corspolicy)[]
* **databaseAccountOfferType**: 'Standard' (Required)
* **disableKeyBasedMetadataWriteAccess**: bool
* **documentEndpoint**: string (ReadOnly)
* **enableAnalyticalStorage**: bool
* **enableAutomaticFailover**: bool
* **enableCassandraConnector**: bool
* **enableFreeTier**: bool
* **enableMultipleWriteLocations**: bool
* **failoverPolicies**: [FailoverPolicy](#failoverpolicy)[] (ReadOnly)
* **instanceId**: string (ReadOnly)
* **ipRules**: [IpAddressOrRange](#ipaddressorrange)[]
* **isVirtualNetworkFilterEnabled**: bool
* **keyVaultKeyUri**: string
* **locations**: [Location](#location)[] (Required)
* **networkAclBypass**: 'AzureServices' | 'None'
* **networkAclBypassResourceIds**: string[]
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **readLocations**: [Location](#location)[] (ReadOnly)
* **restoreParameters**: [RestoreParameters](#restoreparameters) (ReadOnly)
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]
* **writeLocations**: [Location](#location)[] (ReadOnly)
### DefaultRequestDatabaseAccountCreateUpdateProperties
#### Properties
* **createMode**: 'Default' (Required)

### RestoreReqeustDatabaseAccountCreateUpdateProperties
#### Properties
* **createMode**: 'Restore' (Required)
* **restoreParameters**: [RestoreParameters](#restoreparameters) (WriteOnly)


## ApiProperties
### Properties
* **serverVersion**: '3.2' | '3.6' | '4.0'

## BackupPolicy
* **Discriminator**: type

### Base Properties
### ContinuousModeBackupPolicy
#### Properties
* **type**: 'Continuous' (Required)

### PeriodicModeBackupPolicy
#### Properties
* **periodicModeProperties**: [PeriodicModeProperties](#periodicmodeproperties)
* **type**: 'Periodic' (Required)


## ContinuousModeBackupPolicy
### Properties
* **type**: 'Continuous' (Required)

## PeriodicModeBackupPolicy
### Properties
* **periodicModeProperties**: [PeriodicModeProperties](#periodicmodeproperties)
* **type**: 'Periodic' (Required)

## PeriodicModeProperties
### Properties
* **backupIntervalInMinutes**: int
* **backupRetentionIntervalInHours**: int
* **backupStorageRedundancy**: 'Geo' | 'Local' | 'Zone'

## Capability
### Properties
* **name**: string

## ConsistencyPolicy
### Properties
* **defaultConsistencyLevel**: 'BoundedStaleness' | 'ConsistentPrefix' | 'Eventual' | 'Session' | 'Strong' (Required)
* **maxIntervalInSeconds**: int
* **maxStalenessPrefix**: int

## CorsPolicy
### Properties
* **allowedHeaders**: string
* **allowedMethods**: string
* **allowedOrigins**: string (Required)
* **exposedHeaders**: string
* **maxAgeInSeconds**: int

## FailoverPolicy
### Properties
* **failoverPriority**: int (ReadOnly)
* **id**: string (ReadOnly)
* **locationName**: string (ReadOnly)

## IpAddressOrRange
### Properties
* **ipAddressOrRange**: string

## Location
### Properties
* **documentEndpoint**: string (ReadOnly)
* **failoverPriority**: int
* **id**: string (ReadOnly)
* **isZoneRedundant**: bool
* **locationName**: string
* **provisioningState**: string (ReadOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **groupId**: string (ReadOnly)
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty) (ReadOnly)
* **provisioningState**: string (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: string (ReadOnly)

## RestoreParameters
### Properties
* **databasesToRestore**: [DatabaseRestoreResource](#databaserestoreresource)[] (ReadOnly)
* **restoreMode**: 'PointInTime' (ReadOnly)
* **restoreSource**: string (ReadOnly)
* **restoreTimestampInUtc**: string (ReadOnly)

## DatabaseRestoreResource
### Properties
* **collectionNames**: string[] (ReadOnly)
* **databaseName**: string (ReadOnly)

## VirtualNetworkRule
### Properties
* **id**: string
* **ignoreMissingVNetServiceEndpoint**: bool

## DefaultRequestDatabaseAccountCreateUpdateProperties
### Properties
* **createMode**: 'Default' (Required)

## RestoreReqeustDatabaseAccountCreateUpdateProperties
### Properties
* **createMode**: 'Restore' (Required)
* **restoreParameters**: [RestoreParameters](#restoreparameters) (WriteOnly)

## SystemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraKeyspaceCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions)
* **resource**: [CassandraKeyspaceResource](#cassandrakeyspaceresource) (Required)

## CreateUpdateOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings)
* **throughput**: int

## AutoscaleSettings
### Properties
* **maxThroughput**: int

## CassandraKeyspaceResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **id**: string (Required)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraTableCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions)
* **resource**: [CassandraTableResource](#cassandratableresource) (Required)

## CassandraTableResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **analyticalStorageTtl**: int
* **defaultTtl**: int
* **id**: string (Required)
* **schema**: [CassandraSchema](#cassandraschema)

## CassandraSchema
### Properties
* **clusterKeys**: [ClusterKey](#clusterkey)[]
* **columns**: [Column](#column)[]
* **partitionKeys**: [CassandraPartitionKey](#cassandrapartitionkey)[]

## ClusterKey
### Properties
* **name**: string
* **orderBy**: string

## Column
### Properties
* **name**: string
* **type**: string

## CassandraPartitionKey
### Properties
* **name**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThroughputSettingsUpdateProperties
### Properties
* **resource**: [ThroughputSettingsResource](#throughputsettingsresource) (Required)

## ThroughputSettingsResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **autoscaleSettings**: [AutoscaleSettingsResource](#autoscalesettingsresource)
* **minimumThroughput**: string (ReadOnly)
* **offerReplacePending**: string (ReadOnly)
* **throughput**: int

## AutoscaleSettingsResource
### Properties
* **autoUpgradePolicy**: [AutoUpgradePolicyResource](#autoupgradepolicyresource)
* **maxThroughput**: int (Required)
* **targetMaxThroughput**: int (ReadOnly)

## AutoUpgradePolicyResource
### Properties
* **throughputPolicy**: [ThroughputPolicyResource](#throughputpolicyresource)

## ThroughputPolicyResource
### Properties
* **incrementPercent**: int
* **isEnabled**: bool

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinDatabaseCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions)
* **resource**: [GremlinDatabaseResource](#gremlindatabaseresource) (Required)

## GremlinDatabaseResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **id**: string (Required)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinGraphCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions)
* **resource**: [GremlinGraphResource](#gremlingraphresource) (Required)

## GremlinGraphResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy)
* **defaultTtl**: int
* **id**: string (Required)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy)

## ConflictResolutionPolicy
### Properties
* **conflictResolutionPath**: string
* **conflictResolutionProcedure**: string
* **mode**: 'Custom' | 'LastWriterWins'

## IndexingPolicy
### Properties
* **automatic**: bool
* **compositeIndexes**: [CompositePath](#compositepath)[][]
* **excludedPaths**: [ExcludedPath](#excludedpath)[]
* **includedPaths**: [IncludedPath](#includedpath)[]
* **indexingMode**: 'consistent' | 'lazy' | 'none'
* **spatialIndexes**: [SpatialSpec](#spatialspec)[]

## CompositePath
### Properties
* **order**: 'ascending' | 'descending'
* **path**: string

## ExcludedPath
### Properties
* **path**: string

## IncludedPath
### Properties
* **indexes**: [Indexes](#indexes)[]
* **path**: string

## Indexes
### Properties
* **dataType**: 'LineString' | 'MultiPolygon' | 'Number' | 'Point' | 'Polygon' | 'String'
* **kind**: 'Hash' | 'Range' | 'Spatial'
* **precision**: int

## SpatialSpec
### Properties
* **path**: string
* **types**: 'LineString' | 'MultiPolygon' | 'Point' | 'Polygon'[]

## ContainerPartitionKey
### Properties
* **kind**: 'Hash' | 'MultiHash' | 'Range'
* **paths**: string[]
* **systemKey**: bool (ReadOnly)
* **version**: int

## UniqueKeyPolicy
### Properties
* **uniqueKeys**: [UniqueKey](#uniquekey)[]

## UniqueKey
### Properties
* **paths**: string[]

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBDatabaseCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions)
* **resource**: [MongoDBDatabaseResource](#mongodbdatabaseresource) (Required)

## MongoDBDatabaseResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **id**: string (Required)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBCollectionCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions)
* **resource**: [MongoDBCollectionResource](#mongodbcollectionresource) (Required)

## MongoDBCollectionResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **analyticalStorageTtl**: int
* **id**: string (Required)
* **indexes**: [MongoIndex](#mongoindex)[]
* **shardKey**: [ShardKeys](#shardkeys)

## MongoIndex
### Properties
* **key**: [MongoIndexKeys](#mongoindexkeys)
* **options**: [MongoIndexOptions](#mongoindexoptions)

## MongoIndexKeys
### Properties
* **keys**: string[]

## MongoIndexOptions
### Properties
* **expireAfterSeconds**: int
* **unique**: bool

## ShardKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NotebookWorkspaceProperties
### Properties
* **notebookServerEndpoint**: string (ReadOnly)
* **status**: string (ReadOnly)

## SqlDatabaseCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions)
* **resource**: [SqlDatabaseResource](#sqldatabaseresource) (Required)

## SqlDatabaseResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlContainerCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions)
* **resource**: [SqlContainerResource](#sqlcontainerresource) (Required)

## SqlContainerResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **analyticalStorageTtl**: int
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy)
* **defaultTtl**: int
* **id**: string (Required)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlStoredProcedureCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (WriteOnly)
* **resource**: [SqlStoredProcedureResource](#sqlstoredprocedureresource) (Required)

## SqlStoredProcedureResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **body**: string
* **id**: string (Required)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlTriggerCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (WriteOnly)
* **resource**: [SqlTriggerResource](#sqltriggerresource) (Required)

## SqlTriggerResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **body**: string
* **id**: string (Required)
* **triggerOperation**: 'All' | 'Create' | 'Delete' | 'Replace' | 'Update'
* **triggerType**: 'Post' | 'Pre'

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlUserDefinedFunctionCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (WriteOnly)
* **resource**: [SqlUserDefinedFunctionResource](#sqluserdefinedfunctionresource) (Required)

## SqlUserDefinedFunctionResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **body**: string
* **id**: string (Required)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlRoleAssignmentResource
### Properties
* **principalId**: string
* **roleDefinitionId**: string
* **scope**: string

## SqlRoleDefinitionResource
### Properties
* **assignableScopes**: string[]
* **permissions**: [Permission](#permission)[]
* **roleName**: string
* **type**: 'BuiltInRole' | 'CustomRole'

## Permission
### Properties
* **dataActions**: string[]
* **notDataActions**: string[]

## TableCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions)
* **resource**: [TableResource](#tableresource) (Required)

## TableResource
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: int (ReadOnly)
* **id**: string (Required)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

