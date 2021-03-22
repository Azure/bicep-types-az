# Microsoft.DocumentDB @ 2015-11-06

## Resource Microsoft.DocumentDB/databaseAccounts@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseAccountCreateUpdateProperties](#databaseaccountcreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlDatabaseCreateUpdateProperties](#sqldatabasecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MongoDBCollectionCreateUpdateProperties](#mongodbcollectioncreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'throughput' (Required, DeployTimeConstant)
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlContainerCreateUpdateProperties](#sqlcontainercreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'throughput' (Required, DeployTimeConstant)
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GremlinGraphCreateUpdateProperties](#gremlingraphcreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'throughput' (Required, DeployTimeConstant)
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'throughput' (Required, DeployTimeConstant)
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraKeyspaceCreateUpdateProperties](#cassandrakeyspacecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'throughput' (Required, DeployTimeConstant)
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraTableCreateUpdateProperties](#cassandratablecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'throughput' (Required, DeployTimeConstant)
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TableCreateUpdateProperties](#tablecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'throughput' (Required, DeployTimeConstant)
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables/settings' (ReadOnly, DeployTimeConstant)

## DatabaseAccountCreateUpdateProperties
### Properties
* **capabilities**: [Capability](#capability)[]
* **connectorOffer**: 'Small'
* **consistencyPolicy**: [ConsistencyPolicy](#consistencypolicy)
* **databaseAccountOfferType**: string (Required)
* **documentEndpoint**: string (ReadOnly)
* **enableAutomaticFailover**: bool
* **enableCassandraConnector**: bool
* **enableMultipleWriteLocations**: bool
* **failoverPolicies**: [FailoverPolicy](#failoverpolicy)[] (ReadOnly)
* **ipRangeFilter**: string
* **isVirtualNetworkFilterEnabled**: bool
* **locations**: [Location](#location)[] (Required, WriteOnly)
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
* **documentEndpoint**: string (ReadOnly, WriteOnly)
* **failoverPriority**: int (WriteOnly)
* **id**: string (ReadOnly, WriteOnly)
* **isZoneRedundant**: bool (WriteOnly)
* **locationName**: string (WriteOnly)
* **provisioningState**: string (WriteOnly)

## VirtualNetworkRule
### Properties
* **id**: string
* **ignoreMissingVNetServiceEndpoint**: bool

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlDatabaseCreateUpdateProperties
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (ReadOnly)
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [SqlDatabaseResource](#sqldatabaseresource) (Required, WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlDatabaseResource
### Properties
* **id**: string (Required, WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBCollectionCreateUpdateProperties
### Properties
* **id**: string (ReadOnly)
* **indexes**: [MongoIndex](#mongoindex)[] (ReadOnly)
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [MongoDBCollectionResource](#mongodbcollectionresource) (Required, WriteOnly)
* **shardKey**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)

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

## MongoDBCollectionResource
### Properties
* **id**: string (Required, WriteOnly)
* **indexes**: [MongoIndex](#mongoindex)[] (WriteOnly)
* **shardKey**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)

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

## ThroughputUpdateProperties
### Properties
* **resource**: [ThroughputResource](#throughputresource) (Required, WriteOnly)
* **throughput**: int (ReadOnly)

## ThroughputResource
### Properties
* **throughput**: int (Required, WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlContainerCreateUpdateProperties
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (ReadOnly)
* **defaultTtl**: int (ReadOnly)
* **id**: string (ReadOnly)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (ReadOnly)
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (ReadOnly)
* **resource**: [SqlContainerResource](#sqlcontainerresource) (Required, WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (ReadOnly)

## ConflictResolutionPolicy
### Properties
* **conflictResolutionPath**: string (WriteOnly)
* **conflictResolutionProcedure**: string (WriteOnly)
* **mode**: 'Custom' | 'LastWriterWins' (WriteOnly)

## IndexingPolicy
### Properties
* **automatic**: bool (WriteOnly)
* **excludedPaths**: [ExcludedPath](#excludedpath)[] (WriteOnly)
* **includedPaths**: [IncludedPath](#includedpath)[] (WriteOnly)
* **indexingMode**: 'Consistent' | 'Lazy' | 'None' (WriteOnly)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ContainerPartitionKey
### Properties
* **kind**: 'Hash' | 'Range' (WriteOnly)
* **paths**: string[] (WriteOnly)

## SqlContainerResource
### Properties
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (WriteOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required, WriteOnly)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (WriteOnly)

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

## GremlinGraphCreateUpdateProperties
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (ReadOnly)
* **defaultTtl**: int (ReadOnly)
* **id**: string (ReadOnly)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (ReadOnly)
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (ReadOnly)
* **resource**: [GremlinGraphResource](#gremlingraphresource) (Required, WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinGraphResource
### Properties
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (WriteOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required, WriteOnly)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (WriteOnly)

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

## CassandraKeyspaceCreateUpdateProperties
### Properties
* **id**: string (ReadOnly)
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [CassandraKeyspaceResource](#cassandrakeyspaceresource) (Required, WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraKeyspaceResource
### Properties
* **id**: string (Required, WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraTableCreateUpdateProperties
### Properties
* **defaultTtl**: int (ReadOnly)
* **id**: string (ReadOnly)
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [CassandraTableResource](#cassandratableresource) (Required, WriteOnly)
* **schema**: [CassandraSchema](#cassandraschema) (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraTableResource
### Properties
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required, WriteOnly)
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TableCreateUpdateProperties
### Properties
* **id**: string (ReadOnly)
* **options**: [Dictionary<string,String>](#dictionarystringstring) (Required, WriteOnly)
* **resource**: [TableResource](#tableresource) (Required, WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TableResource
### Properties
* **id**: string (Required, WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

