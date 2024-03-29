# Microsoft.DocumentDB @ 2015-04-01

## Resource Microsoft.DocumentDB/databaseAccounts@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse' | string: Indicates the type of database account. This can only be set at database account creation.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountProperties](#databaseaccountcreateupdatepropertiesordatabaseaccountproperties) (Required): Properties to create and update Azure Cosmos DB database accounts.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseProperties](#sqldatabasecreateupdatepropertiesorsqldatabaseproperties) (Required): Properties to create and update Azure Cosmos DB SQL database.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionProperties](#mongodbcollectioncreateupdatepropertiesormongodbcollectionproperties) (Required): Properties to create and update Azure Cosmos DB MongoDB collection.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdatePropertiesOrThroughputProperties](#throughputupdatepropertiesorthroughputproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlContainerCreateUpdatePropertiesOrSqlContainerProperties](#sqlcontainercreateupdatepropertiesorsqlcontainerproperties) (Required): Properties to create and update Azure Cosmos DB container.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdatePropertiesOrThroughputProperties](#throughputupdatepropertiesorthroughputproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GremlinGraphCreateUpdatePropertiesOrGremlinGraphProperties](#gremlingraphcreateupdatepropertiesorgremlingraphproperties) (Required): Properties to create and update Azure Cosmos DB Gremlin graph.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdatePropertiesOrThroughputProperties](#throughputupdatepropertiesorthroughputproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdatePropertiesOrThroughputProperties](#throughputupdatepropertiesorthroughputproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceProperties](#cassandrakeyspacecreateupdatepropertiesorcassandrakeyspaceproperties) (Required): Properties to create and update Azure Cosmos DB Cassandra keyspace.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdatePropertiesOrThroughputProperties](#throughputupdatepropertiesorthroughputproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraTableCreateUpdatePropertiesOrCassandraTableProperties](#cassandratablecreateupdatepropertiesorcassandratableproperties) (Required): Properties to create and update Azure Cosmos DB Cassandra table.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdatePropertiesOrThroughputProperties](#throughputupdatepropertiesorthroughputproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableCreateUpdatePropertiesOrTableProperties](#tablecreateupdatepropertiesortableproperties) (Required): Properties to create and update Azure Cosmos DB Table.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the resource group to which the resource belongs.
* **name**: 'throughput' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputUpdatePropertiesOrThroughputProperties](#throughputupdatepropertiesorthroughputproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags) (ReadOnly): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables/settings' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectionStrings (Microsoft.DocumentDB/databaseAccounts@2015-04-01)
* **Resource**: Microsoft.DocumentDB/databaseAccounts
* **ApiVersion**: 2015-04-01
* **Output**: [DatabaseAccountListConnectionStringsResult](#databaseaccountlistconnectionstringsresult)

## Function listKeys (Microsoft.DocumentDB/databaseAccounts@2015-04-01)
* **Resource**: Microsoft.DocumentDB/databaseAccounts
* **ApiVersion**: 2015-04-01
* **Output**: [DatabaseAccountListKeysResult](#databaseaccountlistkeysresult)

## Capability
### Properties
* **name**: string: Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".

## CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceProperties
### Properties
* **id**: string (ReadOnly): Name of the Cosmos DB Cassandra keyspace
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [CassandraKeyspaceResource](#cassandrakeyspaceresource) (Required, WriteOnly): The standard JSON format of a Cassandra keyspace

## CassandraKeyspaceResource
### Properties
* **id**: string (Required): Name of the Cosmos DB Cassandra keyspace

## CassandraPartitionKey
### Properties
* **name**: string: Name of the Cosmos DB Cassandra table partition key

## CassandraSchema
### Properties
* **clusterKeys**: [ClusterKey](#clusterkey)[]: List of cluster key.
* **columns**: [Column](#column)[]: List of Cassandra table columns.
* **partitionKeys**: [CassandraPartitionKey](#cassandrapartitionkey)[]: List of partition key.

## CassandraTableCreateUpdatePropertiesOrCassandraTableProperties
### Properties
* **defaultTtl**: int (ReadOnly): Time to live of the Cosmos DB Cassandra table
* **id**: string (ReadOnly): Name of the Cosmos DB Cassandra table
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [CassandraTableResource](#cassandratableresource) (Required, WriteOnly): The standard JSON format of a Cassandra table
* **schema**: [CassandraSchema](#cassandraschema) (ReadOnly): Schema of the Cosmos DB Cassandra table

## CassandraTableResource
### Properties
* **defaultTtl**: int: Time to live of the Cosmos DB Cassandra table
* **id**: string (Required): Name of the Cosmos DB Cassandra table
* **schema**: [CassandraSchema](#cassandraschema): Schema of the Cosmos DB Cassandra table

## ClusterKey
### Properties
* **name**: string: Name of the Cosmos DB Cassandra table cluster key
* **orderBy**: string: Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc"

## Column
### Properties
* **name**: string: Name of the Cosmos DB Cassandra table column
* **type**: string: Type of the Cosmos DB Cassandra table column

## ConflictResolutionPolicy
### Properties
* **conflictResolutionPath**: string: The conflict resolution path in the case of LastWriterWins mode.
* **conflictResolutionProcedure**: string: The procedure to resolve conflicts in the case of custom mode.
* **mode**: 'Custom' | 'LastWriterWins' | string: Indicates the conflict resolution mode.

## ConsistencyPolicy
### Properties
* **defaultConsistencyLevel**: 'BoundedStaleness' | 'ConsistentPrefix' | 'Eventual' | 'Session' | 'Strong' (Required): The default consistency level and configuration settings of the Cosmos DB account.
* **maxIntervalInSeconds**: int {minValue: 5, maxValue: 86400}: When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
* **maxStalenessPrefix**: int {minValue: 1, maxValue: 2147483647}: When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.

## ContainerPartitionKey
### Properties
* **kind**: 'Hash' | 'Range' | string: Indicates the kind of algorithm used for partitioning
* **paths**: string[]: List of paths using which data within the container can be partitioned

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateUpdateOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseAccountConnectionString
### Properties
* **connectionString**: string (ReadOnly): Value of the connection string
* **description**: string (ReadOnly): Description of the connection string

## DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountProperties
### Properties
* **capabilities**: [Capability](#capability)[]: List of Cosmos DB capabilities for the account
* **connectorOffer**: 'Small' | string: The cassandra connector offer type for the Cosmos DB database C* account.
* **consistencyPolicy**: [ConsistencyPolicy](#consistencypolicy): The consistency policy for the Cosmos DB account.
* **databaseAccountOfferType**: 'Standard' (Required): The offer type for the database
* **documentEndpoint**: string (ReadOnly): The connection endpoint for the Cosmos DB database account.
* **enableAutomaticFailover**: bool: Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
* **enableCassandraConnector**: bool: Enables the cassandra connector on the Cosmos DB C* account
* **enableMultipleWriteLocations**: bool: Enables the account to write in multiple locations
* **failoverPolicies**: [FailoverPolicy](#failoverpolicy)[] (ReadOnly): An array that contains the regions ordered by their failover priorities.
* **ipRangeFilter**: string: Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
* **isVirtualNetworkFilterEnabled**: bool: Flag to indicate whether to enable/disable Virtual Network ACL rules.
* **locations**: [Location](#location)[] (Required, WriteOnly): An array that contains the georeplication locations enabled for the Cosmos DB account.
* **provisioningState**: string (ReadOnly): The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'Offline' - the Cosmos DB account is not active. 'DeletionFailed' – the Cosmos DB account deletion failed.
* **readLocations**: [Location](#location)[] (ReadOnly): An array that contains of the read locations enabled for the Cosmos DB account.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: List of Virtual Network ACL rules configured for the Cosmos DB account.
* **writeLocations**: [Location](#location)[] (ReadOnly): An array that contains the write location for the Cosmos DB account.

## DatabaseAccountListConnectionStringsResult
### Properties
* **connectionStrings**: [DatabaseAccountConnectionString](#databaseaccountconnectionstring)[]: An array that contains the connection strings for the Cosmos DB account.

## DatabaseAccountListKeysResult
### Properties
* **primaryMasterKey**: string (ReadOnly): Base 64 encoded value of the primary read-write key.
* **primaryReadonlyMasterKey**: string (ReadOnly): Base 64 encoded value of the primary read-only key.
* **secondaryMasterKey**: string (ReadOnly): Base 64 encoded value of the secondary read-write key.
* **secondaryReadonlyMasterKey**: string (ReadOnly): Base 64 encoded value of the secondary read-only key.

## ExcludedPath
### Properties
* **path**: string: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)

## FailoverPolicy
### Properties
* **failoverPriority**: int {minValue: 0}: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
* **id**: string (ReadOnly): The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
* **locationName**: string: The name of the region in which the database account exists.

## GremlinGraphCreateUpdatePropertiesOrGremlinGraphProperties
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: any (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (ReadOnly): The conflict resolution policy for the graph.
* **defaultTtl**: int (ReadOnly): Default time to live
* **id**: string (ReadOnly): Name of the Cosmos DB Gremlin graph
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (ReadOnly): The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (ReadOnly): The configuration of the partition key to be used for partitioning data into multiple partitions
* **resource**: [GremlinGraphResource](#gremlingraphresource) (Required, WriteOnly): The standard JSON format of a Gremlin graph
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (ReadOnly): The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.

## GremlinGraphResource
### Properties
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy): The conflict resolution policy for the graph.
* **defaultTtl**: int: Default time to live
* **id**: string (Required): Name of the Cosmos DB Gremlin graph
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy): The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey): The configuration of the partition key to be used for partitioning data into multiple partitions
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy): The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.

## IncludedPath
### Properties
* **indexes**: [Indexes](#indexes)[]: List of indexes for this path
* **path**: string: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)

## Indexes
### Properties
* **dataType**: 'LineString' | 'MultiPolygon' | 'Number' | 'Point' | 'Polygon' | 'String' | string: The datatype for which the indexing behavior is applied to.
* **kind**: 'Hash' | 'Range' | 'Spatial' | string: Indicates the type of index.
* **precision**: int: The precision of the index. -1 is maximum precision.

## IndexingPolicy
### Properties
* **automatic**: bool: Indicates if the indexing policy is automatic
* **excludedPaths**: [ExcludedPath](#excludedpath)[]: List of paths to exclude from indexing
* **includedPaths**: [IncludedPath](#includedpath)[]: List of paths to include in the indexing
* **indexingMode**: 'Consistent' | 'Lazy' | 'None' | string: Indicates the indexing mode.

## Location
### Properties
* **documentEndpoint**: string (ReadOnly): The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
* **failoverPriority**: int {minValue: 0}: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
* **id**: string (ReadOnly): The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
* **isZoneRedundant**: bool: Flag to indicate whether or not this region is an AvailabilityZone region
* **locationName**: string: The name of the region.
* **provisioningState**: string (ReadOnly): The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'Offline' - the Cosmos DB account is not active. 'DeletionFailed' – the Cosmos DB account deletion failed.

## MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionProperties
### Properties
* **id**: string (ReadOnly): Name of the Cosmos DB MongoDB collection
* **indexes**: [MongoIndex](#mongoindex)[] (ReadOnly): List of index keys
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [MongoDBCollectionResource](#mongodbcollectionresource) (Required, WriteOnly): The standard JSON format of a MongoDB collection
* **shardKey**: [ShardKeys](#shardkeys) (ReadOnly): A key-value pair of shard keys to be applied for the request.

## MongoDBCollectionResource
### Properties
* **id**: string (Required): Name of the Cosmos DB MongoDB collection
* **indexes**: [MongoIndex](#mongoindex)[]: List of index keys
* **shardKey**: [ShardKeys](#shardkeys): A key-value pair of shard keys to be applied for the request.

## MongoIndex
### Properties
* **key**: [MongoIndexKeys](#mongoindexkeys): Cosmos DB MongoDB collection index keys
* **options**: [MongoIndexOptions](#mongoindexoptions): Cosmos DB MongoDB collection index key options

## MongoIndexKeys
### Properties
* **keys**: string[]: List of keys for each MongoDB collection in the Azure Cosmos DB service

## MongoIndexOptions
### Properties
* **expireAfterSeconds**: int: Expire after seconds
* **unique**: bool: Is unique or not

## ShardKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ShardKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlContainerCreateUpdatePropertiesOrSqlContainerProperties
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: any (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (ReadOnly): The conflict resolution policy for the container.
* **defaultTtl**: int (ReadOnly): Default time to live
* **id**: string (ReadOnly): Name of the Cosmos DB SQL container
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (ReadOnly): The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (ReadOnly): The configuration of the partition key to be used for partitioning data into multiple partitions
* **resource**: [SqlContainerResource](#sqlcontainerresource) (Required, WriteOnly): The standard JSON format of a container
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (ReadOnly): The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.

## SqlContainerResource
### Properties
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy): The conflict resolution policy for the container.
* **defaultTtl**: int: Default time to live
* **id**: string (Required): Name of the Cosmos DB SQL container
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy): The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey): The configuration of the partition key to be used for partitioning data into multiple partitions
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy): The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.

## SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseProperties
### Properties
* **_colls**: string (ReadOnly): A system generated property that specified the addressable path of the collections resource.
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: any (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **_users**: string (ReadOnly): A system generated property that specifies the addressable path of the users resource.
* **id**: string (ReadOnly): Name of the Cosmos DB SQL database
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [SqlDatabaseResource](#sqldatabaseresource) (Required, WriteOnly): The standard JSON format of a SQL database

## SqlDatabaseResource
### Properties
* **id**: string (Required): Name of the Cosmos DB SQL database

## TableCreateUpdatePropertiesOrTableProperties
### Properties
* **id**: string (ReadOnly): Name of the Cosmos DB table
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [TableResource](#tableresource) (Required, WriteOnly): The standard JSON format of a Table

## TableResource
### Properties
* **id**: string (Required): Name of the Cosmos DB table

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

## ThroughputResource
### Properties
* **throughput**: int (Required): Value of the Cosmos DB resource throughput

## ThroughputUpdatePropertiesOrThroughputProperties
### Properties
* **resource**: [ThroughputResource](#throughputresource) (Required, WriteOnly): The standard JSON format of a resource throughput
* **throughput**: int (ReadOnly): Value of the Cosmos DB resource throughput

## UniqueKey
### Properties
* **paths**: string[]: List of paths must be unique for each document in the Azure Cosmos DB service

## UniqueKeyPolicy
### Properties
* **uniqueKeys**: [UniqueKey](#uniquekey)[]: List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.

## VirtualNetworkRule
### Properties
* **id**: string: Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.
* **ignoreMissingVNetServiceEndpoint**: bool: Create firewall rule before the virtual network has vnet service endpoint enabled.

