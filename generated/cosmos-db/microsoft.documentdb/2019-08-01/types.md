# Microsoft.DocumentDB @ 2019-08-01

## Resource Microsoft.DocumentDB/databaseAccounts@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseAccountCreateUpdateProperties](#databaseaccountcreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraKeyspaceCreateUpdateProperties](#cassandrakeyspacecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraTableCreateUpdateProperties](#cassandratablecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GremlinDatabaseCreateUpdateProperties](#gremlindatabasecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GremlinGraphCreateUpdateProperties](#gremlingraphcreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MongoDBDatabaseCreateUpdateProperties](#mongodbdatabasecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MongoDBCollectionCreateUpdateProperties](#mongodbcollectioncreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NotebookWorkspaceProperties](#notebookworkspaceproperties) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlDatabaseCreateUpdateProperties](#sqldatabasecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlContainerCreateUpdateProperties](#sqlcontainercreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlStoredProcedureCreateUpdateProperties](#sqlstoredprocedurecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlTriggerCreateUpdateProperties](#sqltriggercreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlUserDefinedFunctionCreateUpdateProperties](#sqluserdefinedfunctioncreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/tables@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TableCreateUpdateProperties](#tablecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings' (ReadOnly, DeployTimeConstant)

## DatabaseAccountCreateUpdateProperties
### Properties
* **capabilities**: [Capability](#capability)[]
* **connectorOffer**: 'Small'
* **consistencyPolicy**: [ConsistencyPolicy](#consistencypolicy)
* **databaseAccountOfferType**: string (Required)
* **disableKeyBasedMetadataWriteAccess**: bool
* **documentEndpoint**: string (ReadOnly)
* **enableAutomaticFailover**: bool
* **enableCassandraConnector**: bool
* **enableMultipleWriteLocations**: bool
* **failoverPolicies**: [FailoverPolicy](#failoverpolicy)[] (ReadOnly)
* **ipRangeFilter**: string
* **isVirtualNetworkFilterEnabled**: bool
* **locations**: [Location](#location)[] (Required)
* **provisioningState**: string (ReadOnly)
* **readLocations**: [Location](#location)[] (ReadOnly)
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]
* **writeLocations**: [Location](#location)[] (ReadOnly)

## Capability
### Properties
* **name**: string

## ConsistencyPolicy
### Properties
* **defaultConsistencyLevel**: 'BoundedStaleness' | 'ConsistentPrefix' | 'Eventual' | 'Session' | 'Strong' (Required)
* **maxIntervalInSeconds**: int
* **maxStalenessPrefix**: int

## FailoverPolicy
### Properties
* **failoverPriority**: int (ReadOnly)
* **id**: string (ReadOnly)
* **locationName**: string (ReadOnly)

## Location
### Properties
* **documentEndpoint**: string (ReadOnly)
* **failoverPriority**: int
* **id**: string (ReadOnly)
* **isZoneRedundant**: bool
* **locationName**: string
* **provisioningState**: string

## VirtualNetworkRule
### Properties
* **id**: string
* **ignoreMissingVNetServiceEndpoint**: bool

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraKeyspaceCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [CassandraKeyspaceResource](#cassandrakeyspaceresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraKeyspaceResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraTableCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [CassandraTableResource](#cassandratableresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraTableResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required)
* **schema**: [CassandraSchema](#cassandraschema) (WriteOnly)

## CassandraSchema
### Properties
* **clusterKeys**: [ClusterKey](#clusterkey)[] (WriteOnly)
* **columns**: [Column](#column)[] (WriteOnly)
* **partitionKeys**: [CassandraPartitionKey](#cassandrapartitionkey)[] (WriteOnly)

## ClusterKey
### Properties
* **name**: string (WriteOnly)
* **orderBy**: string (WriteOnly)

## Column
### Properties
* **name**: string (WriteOnly)
* **type**: string (WriteOnly)

## CassandraPartitionKey
### Properties
* **name**: string (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThroughputSettingsUpdateProperties
### Properties
* **resource**: [ThroughputSettingsResource](#throughputsettingsresource) (Required)

## ThroughputSettingsResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (ReadOnly)
* **minimumThroughput**: string (ReadOnly, WriteOnly)
* **offerReplacePending**: string (ReadOnly, WriteOnly)
* **throughput**: int (Required, WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinDatabaseCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [GremlinDatabaseResource](#gremlindatabaseresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinDatabaseResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinGraphCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [GremlinGraphResource](#gremlingraphresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinGraphResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (WriteOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (WriteOnly)

## ConflictResolutionPolicy
### Properties
* **conflictResolutionPath**: string (WriteOnly)
* **conflictResolutionProcedure**: string (WriteOnly)
* **mode**: 'Custom' | 'LastWriterWins' (WriteOnly)

## IndexingPolicy
### Properties
* **automatic**: bool (WriteOnly)
* **compositeIndexes**: [CompositePath](#compositepath)[][] (WriteOnly)
* **excludedPaths**: [ExcludedPath](#excludedpath)[] (WriteOnly)
* **includedPaths**: [IncludedPath](#includedpath)[] (WriteOnly)
* **indexingMode**: 'Consistent' | 'Lazy' | 'None' (WriteOnly)
* **spatialIndexes**: [SpatialSpec](#spatialspec)[] (WriteOnly)

## CompositePath
### Properties
* **order**: 'Ascending' | 'Descending' (WriteOnly)
* **path**: string (WriteOnly)

## ExcludedPath
### Properties
* **path**: string (WriteOnly)

## IncludedPath
### Properties
* **indexes**: [Indexes](#indexes)[] (WriteOnly)
* **path**: string (WriteOnly)

## Indexes
### Properties
* **dataType**: 'LineString' | 'MultiPolygon' | 'Number' | 'Point' | 'Polygon' | 'String' (WriteOnly)
* **kind**: 'Hash' | 'Range' | 'Spatial' (WriteOnly)
* **precision**: int (WriteOnly)

## SpatialSpec
### Properties
* **path**: string (WriteOnly)
* **types**: 'LineString' | 'MultiPolygon' | 'Point' | 'Polygon'[] (WriteOnly)

## ContainerPartitionKey
### Properties
* **kind**: 'Hash' | 'Range' (WriteOnly)
* **paths**: string[] (WriteOnly)
* **version**: int (WriteOnly)

## UniqueKeyPolicy
### Properties
* **uniqueKeys**: [UniqueKey](#uniquekey)[] (WriteOnly)

## UniqueKey
### Properties
* **paths**: string[] (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBDatabaseCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [MongoDBDatabaseResource](#mongodbdatabaseresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBDatabaseResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBCollectionCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [MongoDBCollectionResource](#mongodbcollectionresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBCollectionResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)
* **indexes**: [MongoIndex](#mongoindex)[] (WriteOnly)
* **shardKey**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)

## MongoIndex
### Properties
* **key**: [MongoIndexKeys](#mongoindexkeys) (WriteOnly)
* **options**: [MongoIndexOptions](#mongoindexoptions) (WriteOnly)

## MongoIndexKeys
### Properties
* **keys**: string[] (WriteOnly)

## MongoIndexOptions
### Properties
* **expireAfterSeconds**: int (WriteOnly)
* **unique**: bool (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NotebookWorkspaceProperties
### Properties
* **notebookServerEndpoint**: string (ReadOnly)
* **status**: string (ReadOnly)

## SqlDatabaseCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [SqlDatabaseResource](#sqldatabaseresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlDatabaseResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlContainerCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [SqlContainerResource](#sqlcontainerresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlContainerResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (WriteOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlStoredProcedureCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [SqlStoredProcedureResource](#sqlstoredprocedureresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlStoredProcedureResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **body**: string (WriteOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlTriggerCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [SqlTriggerResource](#sqltriggerresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlTriggerResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **body**: string (WriteOnly)
* **id**: string (Required)
* **triggerOperation**: 'All' | 'Create' | 'Delete' | 'Replace' | 'Update' (WriteOnly)
* **triggerType**: 'Post' | 'Pre' (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlUserDefinedFunctionCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [SqlUserDefinedFunctionResource](#sqluserdefinedfunctionresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlUserDefinedFunctionResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **body**: string (WriteOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TableCreateUpdateProperties
### Properties
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [TableResource](#tableresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TableResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

