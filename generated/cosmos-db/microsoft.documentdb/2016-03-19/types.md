# Microsoft.DocumentDB @ 2016-03-19

## Resource Microsoft.DocumentDB/databaseAccounts@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseAccountCreateUpdateProperties (Required)
* **tags**: Tags
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlDatabaseCreateUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MongoDBCollectionCreateUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlContainerCreateUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GremlinGraphCreateUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CassandraKeyspaceCreateUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CassandraTableCreateUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TableCreateUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2016-03-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Tags (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables/settings' (ReadOnly, DeployTimeConstant)

## DatabaseAccountCreateUpdateProperties
### Properties
* **capabilities**: Capability[]
* **connectorOffer**: 'Small'
* **consistencyPolicy**: ConsistencyPolicy
* **databaseAccountOfferType**: '[object Object]' (Required)
* **documentEndpoint**: string (ReadOnly)
* **enableAutomaticFailover**: bool
* **enableCassandraConnector**: bool
* **enableMultipleWriteLocations**: bool
* **failoverPolicies**: FailoverPolicy[] (ReadOnly)
* **ipRangeFilter**: string
* **isVirtualNetworkFilterEnabled**: bool
* **locations**: Location[] (Required, WriteOnly)
* **provisioningState**: string (ReadOnly)
* **readLocations**: Location[] (ReadOnly)
* **virtualNetworkRules**: VirtualNetworkRule[]
* **writeLocations**: Location[] (ReadOnly)

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
* **provisioningState**: string (ReadOnly, WriteOnly)

## VirtualNetworkRule
### Properties
* **id**: string
* **ignoreMissingVNetServiceEndpoint**: bool

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlDatabaseCreateUpdateProperties
### Properties
* **colls**: string (ReadOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly)
* **options**: CreateUpdateOptions (Required, WriteOnly)
* **resource**: SqlDatabaseResource (Required, WriteOnly)
* **rid**: string (ReadOnly)
* **ts**: any (ReadOnly)
* **users**: string (ReadOnly)

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlDatabaseResource
### Properties
* **id**: string (Required, WriteOnly)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBCollectionCreateUpdateProperties
### Properties
* **id**: string (ReadOnly)
* **indexes**: MongoIndex[] (ReadOnly)
* **options**: CreateUpdateOptions (Required, WriteOnly)
* **resource**: MongoDBCollectionResource (Required, WriteOnly)
* **shardKey**: ShardKeys (ReadOnly)

## MongoIndex
### Properties
* **key**: MongoIndexKeys (WriteOnly)
* **options**: MongoIndexOptions (WriteOnly)

## MongoIndexKeys
### Properties
* **keys**: string[] (WriteOnly)

## MongoIndexOptions
### Properties
* **expireAfterSeconds**: int (WriteOnly)
* **unique**: bool (WriteOnly)

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBCollectionResource
### Properties
* **id**: string (Required, WriteOnly)
* **indexes**: MongoIndex[] (WriteOnly)
* **shardKey**: ShardKeys (WriteOnly)

## ShardKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ShardKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThroughputUpdateProperties
### Properties
* **resource**: ThroughputResource (Required, WriteOnly)
* **throughput**: int (ReadOnly)

## ThroughputResource
### Properties
* **throughput**: int (Required, WriteOnly)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlContainerCreateUpdateProperties
### Properties
* **conflictResolutionPolicy**: ConflictResolutionPolicy (ReadOnly)
* **defaultTtl**: int (ReadOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly)
* **indexingPolicy**: IndexingPolicy (ReadOnly)
* **options**: CreateUpdateOptions (Required, WriteOnly)
* **partitionKey**: ContainerPartitionKey (ReadOnly)
* **resource**: SqlContainerResource (Required, WriteOnly)
* **rid**: string (ReadOnly)
* **ts**: any (ReadOnly)
* **uniqueKeyPolicy**: UniqueKeyPolicy (ReadOnly)

## ConflictResolutionPolicy
### Properties
* **conflictResolutionPath**: string (WriteOnly)
* **conflictResolutionProcedure**: string (WriteOnly)
* **mode**: 'Custom' | 'LastWriterWins' (WriteOnly)

## IndexingPolicy
### Properties
* **automatic**: bool (WriteOnly)
* **excludedPaths**: ExcludedPath[] (WriteOnly)
* **includedPaths**: IncludedPath[] (WriteOnly)
* **indexingMode**: 'Consistent' | 'Lazy' | 'None' (WriteOnly)

## ExcludedPath
### Properties
* **path**: string (WriteOnly)

## IncludedPath
### Properties
* **indexes**: Indexes[] (WriteOnly)
* **path**: string (WriteOnly)

## Indexes
### Properties
* **dataType**: 'LineString' | 'MultiPolygon' | 'Number' | 'Point' | 'Polygon' | 'String' (WriteOnly)
* **kind**: 'Hash' | 'Range' | 'Spatial' (WriteOnly)
* **precision**: int (WriteOnly)

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ContainerPartitionKey
### Properties
* **kind**: 'Hash' | 'Range' (WriteOnly)
* **paths**: string[] (WriteOnly)

## SqlContainerResource
### Properties
* **conflictResolutionPolicy**: ConflictResolutionPolicy (WriteOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required, WriteOnly)
* **indexingPolicy**: IndexingPolicy (WriteOnly)
* **partitionKey**: ContainerPartitionKey (WriteOnly)
* **uniqueKeyPolicy**: UniqueKeyPolicy (WriteOnly)

## UniqueKeyPolicy
### Properties
* **uniqueKeys**: UniqueKey[] (WriteOnly)

## UniqueKey
### Properties
* **paths**: string[] (WriteOnly)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinGraphCreateUpdateProperties
### Properties
* **conflictResolutionPolicy**: ConflictResolutionPolicy (ReadOnly)
* **defaultTtl**: int (ReadOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly)
* **indexingPolicy**: IndexingPolicy (ReadOnly)
* **options**: CreateUpdateOptions (Required, WriteOnly)
* **partitionKey**: ContainerPartitionKey (ReadOnly)
* **resource**: GremlinGraphResource (Required, WriteOnly)
* **rid**: string (ReadOnly)
* **ts**: any (ReadOnly)
* **uniqueKeyPolicy**: UniqueKeyPolicy (ReadOnly)

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinGraphResource
### Properties
* **conflictResolutionPolicy**: ConflictResolutionPolicy (WriteOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required, WriteOnly)
* **indexingPolicy**: IndexingPolicy (WriteOnly)
* **partitionKey**: ContainerPartitionKey (WriteOnly)
* **uniqueKeyPolicy**: UniqueKeyPolicy (WriteOnly)

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

## CassandraKeyspaceCreateUpdateProperties
### Properties
* **id**: string (ReadOnly)
* **options**: CreateUpdateOptions (Required, WriteOnly)
* **resource**: CassandraKeyspaceResource (Required, WriteOnly)

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraKeyspaceResource
### Properties
* **id**: string (Required, WriteOnly)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraTableCreateUpdateProperties
### Properties
* **defaultTtl**: int (ReadOnly)
* **id**: string (ReadOnly)
* **options**: CreateUpdateOptions (Required, WriteOnly)
* **resource**: CassandraTableResource (Required, WriteOnly)
* **schema**: CassandraSchema (ReadOnly)

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraTableResource
### Properties
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required, WriteOnly)
* **schema**: CassandraSchema (WriteOnly)

## CassandraSchema
### Properties
* **clusterKeys**: ClusterKey[] (WriteOnly)
* **columns**: Column[] (WriteOnly)
* **partitionKeys**: CassandraPartitionKey[] (WriteOnly)

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
* **id**: string (ReadOnly)
* **options**: CreateUpdateOptions (Required, WriteOnly)
* **resource**: TableResource (Required, WriteOnly)

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TableResource
### Properties
* **id**: string (Required, WriteOnly)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

