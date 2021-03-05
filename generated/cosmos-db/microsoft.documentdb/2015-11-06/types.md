# Microsoft.DocumentDB @ 2015-11-06

## Resource Microsoft.DocumentDB/databaseAccounts@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseAccountCreateUpdateProperties (Required)
* **tags**: Tags
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlDatabaseCreateUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MongoDBCollectionCreateUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlContainerCreateUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GremlinGraphCreateUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/databases/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CassandraKeyspaceCreateUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CassandraTableCreateUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TableCreateUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2015-11-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-06' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThroughputUpdateProperties (Required)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/apis/tables/settings' (ReadOnly, DeployTimeConstant)

## DatabaseAccountCreateUpdateProperties
### Properties
* **capabilities**: Capability[]
* **connectorOffer**: 'Small'
* **consistencyPolicy**: ConsistencyPolicy
* **enableAutomaticFailover**: bool
* **enableCassandraConnector**: bool
* **enableMultipleWriteLocations**: bool
* **ipRangeFilter**: string
* **isVirtualNetworkFilterEnabled**: bool
* **virtualNetworkRules**: VirtualNetworkRule[]

## Capability
### Properties
* **name**: string

## ConsistencyPolicy
### Properties
* **maxIntervalInSeconds**: int
* **maxStalenessPrefix**: int

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

## MongoDBCollectionCreateUpdateProperties
### Properties

## ThroughputUpdateProperties
### Properties

## SqlContainerCreateUpdateProperties
### Properties

## GremlinGraphCreateUpdateProperties
### Properties

## CassandraKeyspaceCreateUpdateProperties
### Properties

## CassandraTableCreateUpdateProperties
### Properties

## TableCreateUpdateProperties
### Properties

