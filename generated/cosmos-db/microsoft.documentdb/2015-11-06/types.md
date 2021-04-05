# Microsoft.DocumentDB @ 2015-11-06

## Resource Microsoft.DocumentDB/databaseAccounts@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse': Indicates the type of database account. This can only be set at database account creation.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseAccountCreateUpdateProperties](#databaseaccountcreateupdateproperties) (Required): Properties for the database account.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlDatabaseCreateUpdateProperties](#sqldatabasecreateupdateproperties) (Required): The properties of an Azure Cosmos DB SQL database
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoDBCollectionCreateUpdateProperties](#mongodbcollectioncreateupdateproperties) (Required): The properties of an Azure Cosmos DB MongoDB collection
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required): The properties of an Azure Cosmos DB resource throughput
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlContainerCreateUpdateProperties](#sqlcontainercreateupdateproperties) (Required): The properties of an Azure Cosmos DB container
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required): The properties of an Azure Cosmos DB resource throughput
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GremlinGraphCreateUpdateProperties](#gremlingraphcreateupdateproperties) (Required): The properties of an Azure Cosmos DB Gremlin graph
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required): The properties of an Azure Cosmos DB resource throughput
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required): The properties of an Azure Cosmos DB resource throughput
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraKeyspaceCreateUpdateProperties](#cassandrakeyspacecreateupdateproperties) (Required): The properties of an Azure Cosmos DB Cassandra keyspace
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required): The properties of an Azure Cosmos DB resource throughput
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraTableCreateUpdateProperties](#cassandratablecreateupdateproperties) (Required): The properties of an Azure Cosmos DB Cassandra table
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required): The properties of an Azure Cosmos DB resource throughput
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableCreateUpdateProperties](#tablecreateupdateproperties) (Required): The properties of an Azure Cosmos Table
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdateProperties](#throughputupdateproperties) (Required): The properties of an Azure Cosmos DB resource throughput
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables/settings' (ReadOnly, DeployTimeConstant): The resource type

## DatabaseAccountCreateUpdateProperties
### Properties
* **capabilities**: [Capability](#capability)[]: List of Cosmos DB capabilities for the account
* **connectorOffer**: 'Small': The cassandra connector offer type for the Cosmos DB C* database account.
* **consistencyPolicy**: [ConsistencyPolicy](#consistencypolicy): The consistency policy for the Cosmos DB database account.
* **databaseAccountOfferType**: 'Standard' (Required): The offer type for the Cosmos DB database account.
* **documentEndpoint**: string (ReadOnly): The connection endpoint for the Cosmos DB database account.
* **enableAutomaticFailover**: bool: Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
* **enableCassandraConnector**: bool: Enables the cassandra connector on the Cosmos DB C* account
* **enableMultipleWriteLocations**: bool: Enables the account to write in multiple locations
* **failoverPolicies**: [FailoverPolicy](#failoverpolicy)[] (ReadOnly): An array that contains the regions ordered by their failover priorities.
* **ipRangeFilter**: string: Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
* **isVirtualNetworkFilterEnabled**: bool: Flag to indicate whether to enable/disable Virtual Network ACL rules.
* **locations**: [Location](#location)[] (Required, WriteOnly)
* **provisioningState**: string (ReadOnly): The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'Offline' - the Cosmos DB account is not active. 'DeletionFailed' – the Cosmos DB account deletion failed.
* **readLocations**: [Location](#location)[] (ReadOnly): An array that contains of the read locations enabled for the Cosmos DB account.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: List of Virtual Network ACL rules configured for the Cosmos DB account.
* **writeLocations**: [Location](#location)[] (ReadOnly): An array that contains the write location for the Cosmos DB account.

## Capability
### Properties
* **name**: string: Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".

## ConsistencyPolicy
### Properties
* **defaultConsistencyLevel**: 'BoundedStaleness' | 'ConsistentPrefix' | 'Eventual' | 'Session' | 'Strong' (Required): The default consistency level and configuration settings of the Cosmos DB account.
* **maxIntervalInSeconds**: int: When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
* **maxStalenessPrefix**: int: When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.

## FailoverPolicy
### Properties
* **failoverPriority**: int (ReadOnly): The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
* **id**: string (ReadOnly): The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
* **locationName**: string (ReadOnly): The name of the region in which the database account exists.

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
* **id**: string: Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.
* **ignoreMissingVNetServiceEndpoint**: bool: Create firewall rule before the virtual network has vnet service endpoint enabled.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlDatabaseCreateUpdateProperties
### Properties
* **_colls**: string (ReadOnly): A system generated property that specified the addressable path of the collections resource.
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: any (ReadOnly): Any object
* **_users**: string (ReadOnly): A system generated property that specifies the addressable path of the users resource.
* **id**: string (ReadOnly): Name of the Cosmos DB SQL database
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **resource**: [SqlDatabaseResource](#sqldatabaseresource) (Required, WriteOnly)

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
* **id**: string (ReadOnly): Name of the Cosmos DB MongoDB collection
* **indexes**: [MongoIndex](#mongoindex)[] (ReadOnly): List of index keys
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **resource**: [MongoDBCollectionResource](#mongodbcollectionresource) (Required, WriteOnly)
* **shardKey**: [ShardKeys](#shardkeys) (ReadOnly): The shard key and partition kind pair, only support "Hash" partition kind

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

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBCollectionResource
### Properties
* **id**: string (Required, WriteOnly)
* **indexes**: [MongoIndex](#mongoindex)[] (WriteOnly)
* **shardKey**: [ShardKeys](#shardkeys) (WriteOnly)

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
* **resource**: [ThroughputResource](#throughputresource) (Required, WriteOnly)
* **throughput**: int (ReadOnly): Value of the Cosmos DB resource throughput

## ThroughputResource
### Properties
* **throughput**: int (Required, WriteOnly)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlContainerCreateUpdateProperties
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: any (ReadOnly): Any object
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (ReadOnly): The conflict resolution policy for the container.
* **defaultTtl**: int (ReadOnly): Default time to live
* **id**: string (ReadOnly): Name of the Cosmos DB SQL container
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (ReadOnly): Cosmos DB indexing policy
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (ReadOnly): The configuration of the partition key to be used for partitioning data into multiple partitions
* **resource**: [SqlContainerResource](#sqlcontainerresource) (Required, WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (ReadOnly): The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.

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
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: any (ReadOnly): Any object
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (ReadOnly): The conflict resolution policy for the container.
* **defaultTtl**: int (ReadOnly): Default time to live
* **id**: string (ReadOnly): Name of the Cosmos DB Gremlin graph
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (ReadOnly): Cosmos DB indexing policy
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (ReadOnly): The configuration of the partition key to be used for partitioning data into multiple partitions
* **resource**: [GremlinGraphResource](#gremlingraphresource) (Required, WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (ReadOnly): The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.

## CreateUpdateOptions
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
* **id**: string (ReadOnly): Name of the Cosmos DB Cassandra keyspace
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **resource**: [CassandraKeyspaceResource](#cassandrakeyspaceresource) (Required, WriteOnly)

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
* **defaultTtl**: int (ReadOnly): Time to live of the Cosmos DB Cassandra table
* **id**: string (ReadOnly): Name of the Cosmos DB Cassandra table
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **resource**: [CassandraTableResource](#cassandratableresource) (Required, WriteOnly)
* **schema**: [CassandraSchema](#cassandraschema) (ReadOnly): Cosmos DB Cassandra table schema

## CreateUpdateOptions
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
* **id**: string (ReadOnly): Name of the Cosmos DB table
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **resource**: [TableResource](#tableresource) (Required, WriteOnly)

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

