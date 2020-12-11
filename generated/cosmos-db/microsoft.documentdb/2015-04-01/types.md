# Microsoft.DocumentDB @ 2015-04-01

## Microsoft.DocumentDB/databaseAccounts
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseAccountCreateUpdateProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant)

## DatabaseAccountCreateUpdateProperties
### Properties
* **capabilities**: Capability[]
* **connectorOffer**: 'Small'
* **consistencyPolicy**: ConsistencyPolicy
* **databaseAccountOfferType**: string (Required)
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
* **provisioningState**: string (WriteOnly)

## VirtualNetworkRule
### Properties
* **id**: string
* **ignoreMissingVNetServiceEndpoint**: bool

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/databases/collections
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MongoDBCollectionCreateUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections' (ReadOnly, DeployTimeConstant)

## MongoDBCollectionCreateUpdateProperties
### Properties
* **id**: string (ReadOnly)
* **indexes**: MongoIndex[] (ReadOnly)
* **options**: Dictionary<string,String> (Required, WriteOnly)
* **resource**: MongoDBCollectionResource (Required, WriteOnly)
* **shardKey**: Dictionary<string,String> (ReadOnly)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MongoDBCollectionResource
### Properties
* **id**: string (Required, WriteOnly)
* **indexes**: MongoIndex[] (WriteOnly)
* **shardKey**: Dictionary<string,String> (WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings' (ReadOnly, DeployTimeConstant)

## ThroughputUpdateProperties
### Properties
* **resource**: ThroughputResource (Required, WriteOnly)
* **throughput**: int (ReadOnly)

## ThroughputResource
### Properties
* **throughput**: int (Required, WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/databases/containers
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlContainerCreateUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers' (ReadOnly, DeployTimeConstant)

## SqlContainerCreateUpdateProperties
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **conflictResolutionPolicy**: ConflictResolutionPolicy (ReadOnly)
* **defaultTtl**: int (ReadOnly)
* **id**: string (ReadOnly)
* **indexingPolicy**: IndexingPolicy (ReadOnly)
* **options**: Dictionary<string,String> (Required, WriteOnly)
* **partitionKey**: ContainerPartitionKey (ReadOnly)
* **resource**: SqlContainerResource (Required, WriteOnly)
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

## Dictionary<string,String>
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GremlinGraphCreateUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs' (ReadOnly, DeployTimeConstant)

## GremlinGraphCreateUpdateProperties
### Properties
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **conflictResolutionPolicy**: ConflictResolutionPolicy (ReadOnly)
* **defaultTtl**: int (ReadOnly)
* **id**: string (ReadOnly)
* **indexingPolicy**: IndexingPolicy (ReadOnly)
* **options**: Dictionary<string,String> (Required, WriteOnly)
* **partitionKey**: ContainerPartitionKey (ReadOnly)
* **resource**: GremlinGraphResource (Required, WriteOnly)
* **uniqueKeyPolicy**: UniqueKeyPolicy (ReadOnly)

## Dictionary<string,String>
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CassandraKeyspaceCreateUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces' (ReadOnly, DeployTimeConstant)

## CassandraKeyspaceCreateUpdateProperties
### Properties
* **id**: string (ReadOnly)
* **options**: Dictionary<string,String> (Required, WriteOnly)
* **resource**: CassandraKeyspaceResource (Required, WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## CassandraKeyspaceResource
### Properties
* **id**: string (Required, WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CassandraTableCreateUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables' (ReadOnly, DeployTimeConstant)

## CassandraTableCreateUpdateProperties
### Properties
* **defaultTtl**: int (ReadOnly)
* **id**: string (ReadOnly)
* **options**: Dictionary<string,String> (Required, WriteOnly)
* **resource**: CassandraTableResource (Required, WriteOnly)
* **schema**: CassandraSchema (ReadOnly)

## Dictionary<string,String>
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/tables
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TableCreateUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables' (ReadOnly, DeployTimeConstant)

## TableCreateUpdateProperties
### Properties
* **id**: string (ReadOnly)
* **options**: Dictionary<string,String> (Required, WriteOnly)
* **resource**: TableResource (Required, WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## TableResource
### Properties
* **id**: string (Required, WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DocumentDB/databaseAccounts/apis/tables/settings
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables/settings' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

