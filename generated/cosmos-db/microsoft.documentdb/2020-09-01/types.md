# Microsoft.DocumentDB @ 2020-09-01

## Resource Microsoft.DocumentDB/databaseAccounts@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseAccountCreateUpdateProperties](#databaseaccountcreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraKeyspaceCreateUpdateProperties](#cassandrakeyspacecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraTableCreateUpdateProperties](#cassandratablecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GremlinDatabaseCreateUpdateProperties](#gremlindatabasecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GremlinGraphCreateUpdateProperties](#gremlingraphcreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MongoDBDatabaseCreateUpdateProperties](#mongodbdatabasecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MongoDBCollectionCreateUpdateProperties](#mongodbcollectioncreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [NotebookWorkspaceProperties](#notebookworkspaceproperties) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlDatabaseCreateUpdateProperties](#sqldatabasecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlContainerCreateUpdateProperties](#sqlcontainercreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlStoredProcedureCreateUpdateProperties](#sqlstoredprocedurecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlTriggerCreateUpdateProperties](#sqltriggercreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlUserDefinedFunctionCreateUpdateProperties](#sqluserdefinedfunctioncreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/tables@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TableCreateUpdateProperties](#tablecreateupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings' (ReadOnly, DeployTimeConstant)

## DatabaseAccountCreateUpdateProperties
### Properties
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
* **ipRules**: [IpAddressOrRange](#ipaddressorrange)[]
* **isVirtualNetworkFilterEnabled**: bool
* **keyVaultKeyUri**: string
* **locations**: [Location](#location)[] (Required)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled' (ReadOnly)
* **readLocations**: [Location](#location)[] (ReadOnly)
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]
* **writeLocations**: [Location](#location)[] (ReadOnly)

## ApiProperties
### Properties
* **serverVersion**: '3.2' | '3.6'

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
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty) (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **status**: string (ReadOnly)

## VirtualNetworkRule
### Properties
* **id**: string
* **ignoreMissingVNetServiceEndpoint**: bool

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
* **indexingMode**: 'Consistent' | 'Lazy' | 'None'
* **spatialIndexes**: [SpatialSpec](#spatialspec)[]

## CompositePath
### Properties
* **order**: 'Ascending' | 'Descending'
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
* **kind**: 'Hash' | 'Range'
* **paths**: string[]
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

