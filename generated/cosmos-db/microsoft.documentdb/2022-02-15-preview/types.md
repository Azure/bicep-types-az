# Microsoft.DocumentDB @ 2022-02-15-preview

## Resource Microsoft.DocumentDB/cassandraClusters@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedCassandraManagedServiceIdentity](#managedcassandramanagedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterResourceProperties](#clusterresourceproperties): Properties of a managed Cassandra cluster.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/cassandraClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/cassandraClusters/dataCenters@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataCenterResourceProperties](#datacenterresourceproperties): Properties of a managed Cassandra data center.
* **type**: 'Microsoft.DocumentDB/cassandraClusters/dataCenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse' | string: Indicates the type of database account. This can only be set at database account creation.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountGetProperties](#databaseaccountcreateupdatepropertiesordatabaseaccountgetproperties) (Required): Properties to create and update Azure Cosmos DB database accounts.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceGetProperties](#cassandrakeyspacecreateupdatepropertiesorcassandrakeyspacegetproperties) (Required): Properties to create and update Azure Cosmos DB Cassandra keyspace.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraTableCreateUpdatePropertiesOrCassandraTableGetProperties](#cassandratablecreateupdatepropertiesorcassandratablegetproperties) (Required): Properties to create and update Azure Cosmos DB Cassandra table.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraViewCreateUpdatePropertiesOrCassandraViewGetProperties](#cassandraviewcreateupdatepropertiesorcassandraviewgetproperties) (Required): Properties to create and update Azure Cosmos DB Cassandra view.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/dataTransferJobs@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataTransferJobProperties](#datatransferjobproperties) (Required): Data Transfer Create Job Properties
* **type**: 'Microsoft.DocumentDB/databaseAccounts/dataTransferJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/graphs@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GraphResourceCreateUpdatePropertiesOrGraphResourceGetProperties](#graphresourcecreateupdatepropertiesorgraphresourcegetproperties) (Required): Properties to create and update Azure Cosmos DB Graph resource.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/graphs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GremlinDatabaseCreateUpdatePropertiesOrGremlinDatabaseGetProperties](#gremlindatabasecreateupdatepropertiesorgremlindatabasegetproperties) (Required): Properties to create and update Azure Cosmos DB Gremlin database.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GremlinGraphCreateUpdatePropertiesOrGremlinGraphGetProperties](#gremlingraphcreateupdatepropertiesorgremlingraphgetproperties) (Required): Properties to create and update Azure Cosmos DB Gremlin graph.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoDBDatabaseCreateUpdatePropertiesOrMongoDBDatabaseGetProperties](#mongodbdatabasecreateupdatepropertiesormongodbdatabasegetproperties) (Required): Properties to create and update Azure Cosmos DB MongoDB database.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionGetProperties](#mongodbcollectioncreateupdatepropertiesormongodbcollectiongetproperties) (Required): Properties to create and update Azure Cosmos DB MongoDB collection.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoRoleDefinitionResource](#mongoroledefinitionresource): Properties to create and update an Azure Cosmos DB Mongo Role Definition.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoUserDefinitionResource](#mongouserdefinitionresource): Properties to create and update an Azure Cosmos DB Mongo User Definition.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [NotebookWorkspaceProperties](#notebookworkspaceproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/services@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceResourceCreateUpdatePropertiesOrServiceResourceProperties](#serviceresourcecreateupdatepropertiesorserviceresourceproperties): Properties in ServiceResourceCreateUpdateParameters.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseGetProperties](#sqldatabasecreateupdatepropertiesorsqldatabasegetproperties) (Required): Properties to create and update Azure Cosmos DB SQL database.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClientEncryptionKeyCreateUpdatePropertiesOrClientEncryptionKeyGetProperties](#clientencryptionkeycreateupdatepropertiesorclientencryptionkeygetproperties) (Required): Properties to create and update ClientEncryptionKey.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlContainerCreateUpdatePropertiesOrSqlContainerGetProperties](#sqlcontainercreateupdatepropertiesorsqlcontainergetproperties) (Required): Properties to create and update Azure Cosmos DB container.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlStoredProcedureCreateUpdatePropertiesOrSqlStoredProcedureGetProperties](#sqlstoredprocedurecreateupdatepropertiesorsqlstoredproceduregetproperties) (Required): Properties to create and update Azure Cosmos DB storedProcedure.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlTriggerCreateUpdatePropertiesOrSqlTriggerGetProperties](#sqltriggercreateupdatepropertiesorsqltriggergetproperties) (Required): Properties to create and update Azure Cosmos DB trigger.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlUserDefinedFunctionCreateUpdatePropertiesOrSqlUserDefinedFunctionGetProperties](#sqluserdefinedfunctioncreateupdatepropertiesorsqluserdefinedfunctiongetproperties) (Required): Properties to create and update Azure Cosmos DB userDefinedFunction.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlRoleAssignmentResource](#sqlroleassignmentresource): Properties to create and update an Azure Cosmos DB SQL Role Assignment.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlRoleDefinitionResource](#sqlroledefinitionresource): Properties to create and update an Azure Cosmos DB SQL Role Definition.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/tables@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableCreateUpdatePropertiesOrTableGetProperties](#tablecreateupdatepropertiesortablegetproperties) (Required): Properties to create and update Azure Cosmos DB Table.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2022-02-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectionInfo (Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2022-02-15-preview)
* **Resource**: Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces
* **ApiVersion**: 2022-02-15-preview
* **Output**: [NotebookWorkspaceConnectionInfoResult](#notebookworkspaceconnectioninforesult)

## Function listConnectionStrings (Microsoft.DocumentDB/databaseAccounts@2022-02-15-preview)
* **Resource**: Microsoft.DocumentDB/databaseAccounts
* **ApiVersion**: 2022-02-15-preview
* **Output**: [DatabaseAccountListConnectionStringsResult](#databaseaccountlistconnectionstringsresult)

## Function listKeys (Microsoft.DocumentDB/databaseAccounts@2022-02-15-preview)
* **Resource**: Microsoft.DocumentDB/databaseAccounts
* **ApiVersion**: 2022-02-15-preview
* **Output**: [DatabaseAccountListKeysResult](#databaseaccountlistkeysresult)

## AnalyticalStorageConfiguration
### Properties
* **schemaType**: 'FullFidelity' | 'WellDefined' | string: Describes the types of schema for analytical storage.

## ApiProperties
### Properties
* **serverVersion**: '3.2' | '3.6' | '4.0' | '4.2' | string: Describes the ServerVersion of an a MongoDB account.

## AuthenticationMethodLdapProperties
### Properties
* **searchBaseDistinguishedName**: string: Distinguished name of the object to start the recursive search of users from.
* **searchFilterTemplate**: string: Template to use for searching. Defaults to (cn=%s) where %s will be replaced by the username used to login.
* **serverCertificates**: [Certificate](#certificate)[]
* **serverHostname**: string: Hostname of the LDAP server.
* **serverPort**: int: Port of the LDAP server.
* **serviceUserDistinguishedName**: string: Distinguished name of the look up user account, who can look up user details on authentication.
* **serviceUserPassword**: string: Password of the look up user.

## AutoscaleSettings
### Properties
* **maxThroughput**: int: Represents maximum throughput, the resource can scale up to.

## AutoscaleSettingsResource
### Properties
* **autoUpgradePolicy**: [AutoUpgradePolicyResource](#autoupgradepolicyresource): Cosmos DB resource auto-upgrade policy
* **maxThroughput**: int (Required): Represents maximum throughput container can scale up to.
* **targetMaxThroughput**: int (ReadOnly): Represents target maximum throughput container can scale up to once offer is no longer in pending state.

## AutoUpgradePolicyResource
### Properties
* **throughputPolicy**: [ThroughputPolicyResource](#throughputpolicyresource): Represents throughput policy which service must adhere to for auto-upgrade

## BackupPolicy
* **Discriminator**: type

### Base Properties
* **migrationState**: [BackupPolicyMigrationState](#backuppolicymigrationstate): The object representing the state of the migration between the backup policies.
### ContinuousModeBackupPolicy
#### Properties
* **continuousModeProperties**: [ContinuousModeProperties](#continuousmodeproperties): Configuration values for continuous mode backup
* **type**: 'Continuous' (Required): Describes the mode of backups.

### PeriodicModeBackupPolicy
#### Properties
* **periodicModeProperties**: [PeriodicModeProperties](#periodicmodeproperties): Configuration values for periodic mode backup
* **type**: 'Periodic' (Required): Describes the mode of backups.


## BackupPolicyMigrationState
### Properties
* **startTime**: string: Time at which the backup policy migration started (ISO-8601 format).
* **status**: 'Completed' | 'Failed' | 'InProgress' | 'Invalid' | string: Describes the status of migration between backup policy types.
* **targetType**: 'Continuous' | 'Periodic' | string: Describes the target backup policy type of the backup policy migration.

## Capability
### Properties
* **name**: string: Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".

## Capacity
### Properties
* **totalThroughputLimit**: int: The total throughput limit imposed on the account. A totalThroughputLimit of 2000 imposes a strict limit of max throughput that can be provisioned on that account to be 2000. A totalThroughputLimit of -1 indicates no limits on provisioning of throughput.

## CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrCassandraKeyspaceGetPropertiesOptions](#createupdateoptionsorcassandrakeyspacegetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [CassandraKeyspaceResourceOrCassandraKeyspaceGetPropertiesResource](#cassandrakeyspaceresourceorcassandrakeyspacegetpropertiesresource) (Required): The standard JSON format of a Cassandra keyspace

## CassandraKeyspaceResourceOrCassandraKeyspaceGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **id**: string (Required): Name of the Cosmos DB Cassandra keyspace

## CassandraPartitionKey
### Properties
* **name**: string: Name of the Cosmos DB Cassandra table partition key

## CassandraSchema
### Properties
* **clusterKeys**: [ClusterKey](#clusterkey)[]: List of cluster key.
* **columns**: [Column](#column)[]: List of Cassandra table columns.
* **partitionKeys**: [CassandraPartitionKey](#cassandrapartitionkey)[]: List of partition key.

## CassandraTableCreateUpdatePropertiesOrCassandraTableGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrCassandraTableGetPropertiesOptions](#createupdateoptionsorcassandratablegetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [CassandraTableResourceOrCassandraTableGetPropertiesResource](#cassandratableresourceorcassandratablegetpropertiesresource) (Required): The standard JSON format of a Cassandra table

## CassandraTableResourceOrCassandraTableGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **analyticalStorageTtl**: int: Analytical TTL.
* **defaultTtl**: int: Time to live of the Cosmos DB Cassandra table
* **id**: string (Required): Name of the Cosmos DB Cassandra table
* **schema**: [CassandraSchema](#cassandraschema): Schema of the Cosmos DB Cassandra table

## CassandraViewCreateUpdatePropertiesOrCassandraViewGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrCassandraViewGetPropertiesOptions](#createupdateoptionsorcassandraviewgetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [CassandraViewResourceOrCassandraViewGetPropertiesResource](#cassandraviewresourceorcassandraviewgetpropertiesresource) (Required): The standard JSON format of a Cassandra view

## CassandraViewResourceOrCassandraViewGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **id**: string (Required): Name of the Cosmos DB Cassandra view
* **viewDefinition**: string (Required): View Definition of the Cosmos DB Cassandra view

## Certificate
### Properties
* **pem**: string: PEM formatted public key.

## ClientEncryptionIncludedPath
### Properties
* **clientEncryptionKeyId**: string (Required): The identifier of the Client Encryption Key to be used to encrypt the path.
* **encryptionAlgorithm**: string (Required): The encryption algorithm which will be used. Eg - AEAD_AES_256_CBC_HMAC_SHA256.
* **encryptionType**: string (Required): The type of encryption to be performed. Eg - Deterministic, Randomized.
* **path**: string (Required): Path that needs to be encrypted.

## ClientEncryptionKeyCreateUpdatePropertiesOrClientEncryptionKeyGetProperties
### Properties
* **resource**: [ClientEncryptionKeyResourceOrClientEncryptionKeyGetPropertiesResource](#clientencryptionkeyresourceorclientencryptionkeygetpropertiesresource) (Required): The standard JSON format of a ClientEncryptionKey

## ClientEncryptionKeyResourceOrClientEncryptionKeyGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **encryptionAlgorithm**: string: Encryption algorithm that will be used along with this client encryption key to encrypt/decrypt data.
* **id**: string: Name of the ClientEncryptionKey
* **keyWrapMetadata**: [KeyWrapMetadata](#keywrapmetadata): Metadata for the wrapping provider that can be used to unwrap the wrapped client encryption key.
* **wrappedDataEncryptionKey**: any: Wrapped (encrypted) form of the key represented as a byte array.

## ClientEncryptionPolicy
### Properties
* **includedPaths**: [ClientEncryptionIncludedPath](#clientencryptionincludedpath)[] (Required): Paths of the item that need encryption along with path-specific settings.
* **policyFormatVersion**: int: Version of the client encryption policy definition. Please note, user passed value is ignored. Default policy version is 1.

## ClusterKey
### Properties
* **name**: string: Name of the Cosmos DB Cassandra table cluster key
* **orderBy**: string: Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc"

## ClusterResourceProperties
### Properties
* **authenticationMethod**: 'Cassandra' | 'Ldap' | 'None' | string: Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'. 'Ldap' is in preview.
* **cassandraAuditLoggingEnabled**: bool: Whether Cassandra audit logging is enabled
* **cassandraVersion**: string: Which version of Cassandra should this cluster converge to running (e.g., 3.11). When updated, the cluster may take some time to migrate to the new version.
* **clientCertificates**: [Certificate](#certificate)[]: List of TLS certificates used to authorize clients connecting to the cluster. All connections are TLS encrypted whether clientCertificates is set or not, but if clientCertificates is set, the managed Cassandra cluster will reject all connections not bearing a TLS client certificate that can be validated from one or more of the public certificates in this property.
* **clusterNameOverride**: string: If you need to set the clusterName property in cassandra.yaml to something besides the resource name of the cluster, set the value to use on this property.
* **deallocated**: bool: Whether the cluster and associated data centers has been deallocated.
* **delegatedManagementSubnetId**: string: Resource id of a subnet that this cluster's management service should have its network interface attached to. The subnet must be routable to all subnets that will be delegated to data centers. The resource id must be of the form '/subscriptions/<subscription id>/resourceGroups/<resource group>/providers/Microsoft.Network/virtualNetworks/<virtual network>/subnets/<subnet>'
* **externalGossipCertificates**: [Certificate](#certificate)[]: List of TLS certificates used to authorize gossip from unmanaged data centers. The TLS certificates of all nodes in unmanaged data centers must be verifiable using one of the certificates provided in this property.
* **externalSeedNodes**: [SeedNode](#seednode)[]: List of IP addresses of seed nodes in unmanaged data centers. These will be added to the seed node lists of all managed nodes.
* **gossipCertificates**: [Certificate](#certificate)[] (ReadOnly): List of TLS certificates that unmanaged nodes must trust for gossip with managed nodes. All managed nodes will present TLS client certificates that are verifiable using one of the certificates provided in this property.
* **hoursBetweenBackups**: int: Number of hours to wait between taking a backup of the cluster.
* **initialCassandraAdminPassword**: string (WriteOnly): Initial password for clients connecting as admin to the cluster. Should be changed after cluster creation. Returns null on GET. This field only applies when the authenticationMethod field is 'Cassandra'.
* **prometheusEndpoint**: [SeedNode](#seednode): Hostname or IP address where the Prometheus endpoint containing data about the managed Cassandra nodes can be reached.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The status of the resource at the time the operation was called.
* **repairEnabled**: bool: Should automatic repairs run on this cluster? If omitted, this is true, and should stay true unless you are running a hybrid cluster where you are already doing your own repairs.
* **restoreFromBackupId**: string (WriteOnly): To create an empty cluster, omit this field or set it to null. To restore a backup into a new cluster, set this field to the resource id of the backup.
* **seedNodes**: [SeedNode](#seednode)[] (ReadOnly): List of IP addresses of seed nodes in the managed data centers. These should be added to the seed node lists of all unmanaged nodes.

## Column
### Properties
* **name**: string: Name of the Cosmos DB Cassandra table column
* **type**: string: Type of the Cosmos DB Cassandra table column

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## CompositePath
### Properties
* **order**: 'ascending' | 'descending' | string: Sort order for composite paths.
* **path**: string: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)

## ConflictResolutionPolicy
### Properties
* **conflictResolutionPath**: string: The conflict resolution path in the case of LastWriterWins mode.
* **conflictResolutionProcedure**: string: The procedure to resolve conflicts in the case of custom mode.
* **mode**: 'Custom' | 'LastWriterWins' | string: Indicates the conflict resolution mode.

## ConsistencyPolicy
### Properties
* **defaultConsistencyLevel**: 'BoundedStaleness' | 'ConsistentPrefix' | 'Eventual' | 'Session' | 'Strong' (Required): The default consistency level and configuration settings of the Cosmos DB account.
* **maxIntervalInSeconds**: int: When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
* **maxStalenessPrefix**: int: When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.

## ContainerPartitionKey
### Properties
* **kind**: 'Hash' | 'MultiHash' | 'Range' | string: Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create
* **paths**: string[]: List of paths using which data within the container can be partitioned
* **systemKey**: bool (ReadOnly): Indicates if the container is using a system generated partition key
* **version**: int: Indicates the version of the partition key definition

## ContinuousModeProperties
### Properties
* **tier**: 'Continuous30Days' | 'Continuous7Days' | string: Enum to indicate type of Continuos backup mode

## CorsPolicy
### Properties
* **allowedHeaders**: string: The request headers that the origin domain may specify on the CORS request.
* **allowedMethods**: string: The methods (HTTP request verbs) that the origin domain may use for a CORS request.
* **allowedOrigins**: string (Required): The origin domains that are permitted to make a request against the service via CORS.
* **exposedHeaders**: string: The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer.
* **maxAgeInSeconds**: int: The maximum amount time that a browser should cache the preflight OPTIONS request.

## CreateUpdateOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrCassandraKeyspaceGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrCassandraTableGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrCassandraViewGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrGraphResourceGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrGremlinDatabaseGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrGremlinGraphGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrMongoDBCollectionGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrMongoDBDatabaseGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrSqlContainerGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrSqlDatabaseGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrTableGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## DatabaseAccountConnectionString
### Properties
* **connectionString**: string (ReadOnly): Value of the connection string
* **description**: string (ReadOnly): Description of the connection string

## DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountGetProperties
### Properties
* **analyticalStorageConfiguration**: [AnalyticalStorageConfiguration](#analyticalstorageconfiguration): Analytical storage specific properties.
* **apiProperties**: [ApiProperties](#apiproperties): API specific properties. Currently, supported only for MongoDB API.
* **backupPolicy**: [BackupPolicy](#backuppolicy): The object representing the policy for taking backups on an account.
* **capabilities**: [Capability](#capability)[]: List of Cosmos DB capabilities for the account
* **capacity**: [Capacity](#capacity): The object that represents all properties related to capacity enforcement on an account.
* **connectorOffer**: 'Small' | string: The cassandra connector offer type for the Cosmos DB database C* account.
* **consistencyPolicy**: [ConsistencyPolicy](#consistencypolicy): The consistency policy for the Cosmos DB account.
* **cors**: [CorsPolicy](#corspolicy)[]: The CORS policy for the Cosmos DB database account.
* **createMode**: 'Default' | 'Restore' | string: Enum to indicate the mode of account creation.
* **databaseAccountOfferType**: 'Standard' (Required): The offer type for the database
* **defaultIdentity**: string: The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more.
* **diagnosticLogSettings**: [DiagnosticLogSettings](#diagnosticlogsettings): The Object representing the different Diagnostic log settings for the Cosmos DB Account.
* **disableKeyBasedMetadataWriteAccess**: bool: Disable write operations on metadata resources (databases, containers, throughput) via account keys
* **disableLocalAuth**: bool: Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
* **documentEndpoint**: string (ReadOnly): The connection endpoint for the Cosmos DB database account.
* **enableAnalyticalStorage**: bool: Flag to indicate whether to enable storage analytics.
* **enableAutomaticFailover**: bool: Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
* **enableCassandraConnector**: bool: Enables the cassandra connector on the Cosmos DB C* account
* **enableFreeTier**: bool: Flag to indicate whether Free Tier is enabled.
* **enableMaterializedViews**: bool: Flag to indicate whether to enable MaterializedViews on the Cosmos DB account
* **enableMultipleWriteLocations**: bool: Enables the account to write in multiple locations
* **failoverPolicies**: [FailoverPolicy](#failoverpolicy)[] (ReadOnly): An array that contains the regions ordered by their failover priorities.
* **instanceId**: string (ReadOnly): A unique identifier assigned to the database account
* **ipRules**: [IpAddressOrRange](#ipaddressorrange)[]: List of IpRules.
* **isVirtualNetworkFilterEnabled**: bool: Flag to indicate whether to enable/disable Virtual Network ACL rules.
* **keyVaultKeyUri**: string: The URI of the key vault
* **locations**: [Location](#location)[] (Required): An array that contains the georeplication locations enabled for the Cosmos DB account.
* **networkAclBypass**: 'AzureServices' | 'None': Indicates what services are allowed to bypass firewall checks.
* **networkAclBypassResourceIds**: string[]: An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of Private Endpoint Connections configured for the Cosmos DB account.
* **provisioningState**: string (ReadOnly): The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'DeletionFailed' – the Cosmos DB account deletion failed.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether requests from Public Network are allowed
* **readLocations**: [Location](#location)[] (ReadOnly): An array that contains of the read locations enabled for the Cosmos DB account.
* **restoreParameters**: [RestoreParameters](#restoreparameters): Parameters to indicate the information about the restore.
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

## DatabaseRestoreResource
### Properties
* **collectionNames**: string[]: The names of the collections available for restore.
* **databaseName**: string: The name of the database available for restore.

## DataCenterResourceProperties
### Properties
* **authenticationMethodLdapProperties**: [AuthenticationMethodLdapProperties](#authenticationmethodldapproperties): Ldap authentication method properties. This feature is in preview.
* **availabilityZone**: bool: If the data center has Availability Zone feature, apply it to the Virtual Machine ScaleSet that host the cassandra data center virtual machines.
* **backupStorageCustomerKeyUri**: string: Indicates the Key Uri of the customer key to use for encryption of the backup storage account.
* **base64EncodedCassandraYamlFragment**: string: A fragment of a cassandra.yaml configuration file to be included in the cassandra.yaml for all nodes in this data center. The fragment should be Base64 encoded, and only a subset of keys are allowed.
* **dataCenterLocation**: string: The region this data center should be created in.
* **delegatedSubnetId**: string: Resource id of a subnet the nodes in this data center should have their network interfaces connected to. The subnet must be in the same region specified in 'dataCenterLocation' and must be able to route to the subnet specified in the cluster's 'delegatedManagementSubnetId' property. This resource id will be of the form '/subscriptions/<subscription id>/resourceGroups/<resource group>/providers/Microsoft.Network/virtualNetworks/<virtual network>/subnets/<subnet>'.
* **diskCapacity**: int: Number of disk used for data centers. Default value is 4.
* **diskSku**: string: Disk SKU used for data centers. Default value is P30.
* **managedDiskCustomerKeyUri**: string: Key uri to use for encryption of managed disks. Ensure the system assigned identity of the cluster has been assigned appropriate permissions(key get/wrap/unwrap permissions) on the key.
* **nodeCount**: int: The number of nodes the data center should have. This is the desired number. After it is set, it may take some time for the data center to be scaled to match. To monitor the number of nodes and their status, use the fetchNodeStatus method on the cluster.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The status of the resource at the time the operation was called.
* **seedNodes**: [SeedNode](#seednode)[] (ReadOnly): IP addresses for seed nodes in this data center. This is for reference. Generally you will want to use the seedNodes property on the cluster, which aggregates the seed nodes from all data centers in the cluster.
* **sku**: string: Virtual Machine SKU used for data centers. Default value is Standard_DS14_v2

## DataTransferDataSourceSink
* **Discriminator**: component

### Base Properties
### AzureBlobDataTransferDataSourceSink
#### Properties
* **component**: 'AzureBlobStorage' (Required)
* **containerName**: string (Required)
* **endpointUrl**: string

### CosmosCassandraDataTransferDataSourceSink
#### Properties
* **component**: 'CosmosDBCassandra' (Required)
* **keyspaceName**: string (Required)
* **tableName**: string (Required)

### CosmosSqlDataTransferDataSourceSink
#### Properties
* **component**: 'CosmosDBSql' (Required)
* **containerName**: string (Required)
* **databaseName**: string (Required)


## DataTransferJobProperties
### Properties
* **destination**: [DataTransferDataSourceSink](#datatransferdatasourcesink) (Required): Destination DataStore details
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): Error response for Faulted job
* **jobName**: string (ReadOnly): Job Name
* **lastUpdatedUtcTime**: string (ReadOnly): Last Updated Time (ISO-8601 format).
* **processedCount**: int (ReadOnly): Processed Count.
* **source**: [DataTransferDataSourceSink](#datatransferdatasourcesink) (Required): Source DataStore details
* **status**: string (ReadOnly): Job Status
* **totalCount**: int (ReadOnly): Total Count.
* **workerCount**: int: Worker count

## DiagnosticLogSettings
### Properties
* **enableFullTextQuery**: 'False' | 'None' | 'True': Describe the level of detail with which queries are to be logged.

## ErrorResponse
### Properties
* **code**: string: Error code.
* **message**: string: Error message indicating why the operation failed.

## ExcludedPath
### Properties
* **path**: string: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)

## FailoverPolicy
### Properties
* **failoverPriority**: int: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
* **id**: string (ReadOnly): The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
* **locationName**: string: The name of the region in which the database account exists.

## GraphResourceCreateUpdatePropertiesOrGraphResourceGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrGraphResourceGetPropertiesOptions](#createupdateoptionsorgraphresourcegetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [GraphResourceOrGraphResourceGetPropertiesResource](#graphresourceorgraphresourcegetpropertiesresource) (Required): The standard JSON format of a Graph resource

## GraphResourceOrGraphResourceGetPropertiesResource
### Properties
* **id**: string (Required): Name of the Cosmos DB Graph

## GremlinDatabaseCreateUpdatePropertiesOrGremlinDatabaseGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrGremlinDatabaseGetPropertiesOptions](#createupdateoptionsorgremlindatabasegetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [GremlinDatabaseResourceOrGremlinDatabaseGetPropertiesResource](#gremlindatabaseresourceorgremlindatabasegetpropertiesresource) (Required): The standard JSON format of a Gremlin database

## GremlinDatabaseResourceOrGremlinDatabaseGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **id**: string (Required): Name of the Cosmos DB Gremlin database

## GremlinDatabaseRestoreResource
### Properties
* **databaseName**: string: The name of the gremlin database available for restore.
* **graphNames**: string[]: The names of the graphs available for restore.

## GremlinGraphCreateUpdatePropertiesOrGremlinGraphGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrGremlinGraphGetPropertiesOptions](#createupdateoptionsorgremlingraphgetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [GremlinGraphResourceOrGremlinGraphGetPropertiesResource](#gremlingraphresourceorgremlingraphgetpropertiesresource) (Required): The standard JSON format of a Gremlin graph

## GremlinGraphResourceOrGremlinGraphGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
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
* **compositeIndexes**: [CompositePath](#compositepath)[][]: List of composite path list
* **excludedPaths**: [ExcludedPath](#excludedpath)[]: List of paths to exclude from indexing
* **includedPaths**: [IncludedPath](#includedpath)[]: List of paths to include in the indexing
* **indexingMode**: 'consistent' | 'lazy' | 'none' | string: Indicates the indexing mode.
* **spatialIndexes**: [SpatialSpec](#spatialspec)[]: List of spatial specifics

## IpAddressOrRange
### Properties
* **ipAddressOrRange**: string: A single IPv4 address or a single IPv4 address range in CIDR format. Provided IPs must be well-formatted and cannot be contained in one of the following ranges: 10.0.0.0/8, 100.64.0.0/10, 172.16.0.0/12, 192.168.0.0/16, since these are not enforceable by the IP address filter. Example of valid inputs: “23.40.210.245” or “23.40.210.0/8”.

## KeyWrapMetadata
### Properties
* **algorithm**: string: Algorithm used in wrapping and unwrapping of the data encryption key.
* **name**: string: The name of associated KeyEncryptionKey (aka CustomerManagedKey).
* **type**: string: ProviderName of KeyStoreProvider.
* **value**: string: Reference / link to the KeyEncryptionKey.

## Location
### Properties
* **documentEndpoint**: string (ReadOnly): The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
* **failoverPriority**: int: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
* **id**: string (ReadOnly): The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
* **isZoneRedundant**: bool: Flag to indicate whether or not this region is an AvailabilityZone region
* **locationName**: string: The name of the region.
* **provisioningState**: string (ReadOnly): The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'DeletionFailed' – the Cosmos DB account deletion failed.

## ManagedCassandraManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The object id of the identity resource.
* **tenantId**: string (ReadOnly): The tenant id of the resource.
* **type**: 'None' | 'SystemAssigned' | string: The type of the resource.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned': The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties](#components1jq1t4ischemasmanagedserviceidentitypropertiesuserassignedidentitiesadditionalproperties)

## MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrMongoDBCollectionGetPropertiesOptions](#createupdateoptionsormongodbcollectiongetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [MongoDBCollectionResourceOrMongoDBCollectionGetPropertiesResource](#mongodbcollectionresourceormongodbcollectiongetpropertiesresource) (Required): The standard JSON format of a MongoDB collection

## MongoDBCollectionResourceOrMongoDBCollectionGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **analyticalStorageTtl**: int: Analytical TTL.
* **id**: string (Required): Name of the Cosmos DB MongoDB collection
* **indexes**: [MongoIndex](#mongoindex)[]: List of index keys
* **shardKey**: [ShardKeys](#shardkeys): A key-value pair of shard keys to be applied for the request.

## MongoDBDatabaseCreateUpdatePropertiesOrMongoDBDatabaseGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrMongoDBDatabaseGetPropertiesOptions](#createupdateoptionsormongodbdatabasegetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [MongoDBDatabaseResourceOrMongoDBDatabaseGetPropertiesResource](#mongodbdatabaseresourceormongodbdatabasegetpropertiesresource) (Required): The standard JSON format of a MongoDB database

## MongoDBDatabaseResourceOrMongoDBDatabaseGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **id**: string (Required): Name of the Cosmos DB MongoDB database

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

## MongoRoleDefinitionResource
### Properties
* **databaseName**: string: The database name for which access is being granted for this Role Definition.
* **privileges**: [Privilege](#privilege)[]: A set of privileges contained by the Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Scopes higher than Database are not enforceable as privilege.
* **roleName**: string: A user-friendly name for the Role Definition. Must be unique for the database account.
* **roles**: [Role](#role)[]: The set of roles inherited by this Role Definition.
* **type**: 'BuiltInRole' | 'CustomRole': Indicates whether the Role Definition was built-in or user created.

## MongoUserDefinitionResource
### Properties
* **customData**: string: A custom definition for the USer Definition.
* **databaseName**: string: The database name for which access is being granted for this User Definition.
* **mechanisms**: string: The Mongo Auth mechanism. For now, we only support auth mechanism SCRAM-SHA-256.
* **password**: string: The password for User Definition. Response does not contain user password.
* **roles**: [Role](#role)[]: The set of roles inherited by the User Definition.
* **userName**: string: The user name for User Definition.

## NotebookWorkspaceConnectionInfoResult
### Properties
* **authToken**: string (ReadOnly): Specifies auth token used for connecting to Notebook server (uses token-based auth).
* **notebookServerEndpoint**: string (ReadOnly): Specifies the endpoint of Notebook server.

## NotebookWorkspaceProperties
### Properties
* **notebookServerEndpoint**: string (ReadOnly): Specifies the endpoint of Notebook server.
* **status**: string (ReadOnly): Status of the notebook workspace. Possible values are: Creating, Online, Deleting, Failed, Updating.

## PeriodicModeProperties
### Properties
* **backupIntervalInMinutes**: int: An integer representing the interval in minutes between two backups
* **backupRetentionIntervalInHours**: int: An integer representing the time (in hours) that each backup is retained
* **backupStorageRedundancy**: 'Geo' | 'Local' | 'Zone' | string: Enum to indicate type of backup residency

## Permission
### Properties
* **dataActions**: string[]: An array of data actions that are allowed.
* **notDataActions**: string[]: An array of data actions that are denied.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupId**: string: Group id of the private endpoint.
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): Connection State of the Private Endpoint Connection.
* **provisioningState**: string: Provisioning state of the private endpoint.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): Any action that is required beyond basic workflow (approve/ reject/ disconnect)
* **description**: string: The private link service connection description.
* **status**: string: The private link service connection status.

## Privilege
### Properties
* **actions**: string[]: An array of actions that are allowed.
* **resource**: [PrivilegeResource](#privilegeresource): An Azure Cosmos DB Mongo DB Resource.

## PrivilegeResource
### Properties
* **collection**: string: The collection name the role is applied.
* **db**: string: The database name the role is applied.

## RestoreParameters
### Properties
* **databasesToRestore**: [DatabaseRestoreResource](#databaserestoreresource)[]: List of specific databases available for restore.
* **gremlinDatabasesToRestore**: [GremlinDatabaseRestoreResource](#gremlindatabaserestoreresource)[]: List of specific gremlin databases available for restore.
* **restoreMode**: 'PointInTime' | string: Describes the mode of the restore.
* **restoreSource**: string: The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
* **restoreTimestampInUtc**: string: Time to which the account has to be restored (ISO-8601 format).
* **tablesToRestore**: string[]: List of specific tables available for restore.

## Role
### Properties
* **db**: string: The database name the role is applied.
* **role**: string: The role name.

## SeedNode
### Properties
* **ipAddress**: string: IP address of this seed node.

## ServiceResourceCreateUpdatePropertiesOrServiceResourceProperties
### Properties
* **creationTime**: string (ReadOnly): Time of the last state change (ISO-8601 format).
* **instanceCount**: int: Instance count for the service.
* **instanceSize**: 'Cosmos.D16s' | 'Cosmos.D4s' | 'Cosmos.D8s' | string: Instance type for the service.
* **status**: 'Creating' | 'Deleting' | 'Error' | 'Running' | 'Stopped' | 'Updating' | string (ReadOnly): Describes the status of a service.
### Additional Properties
* **Additional Properties Type**: any

## ShardKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SpatialSpec
### Properties
* **path**: string: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
* **types**: 'LineString' | 'MultiPolygon' | 'Point' | 'Polygon' | string[]: List of path's spatial type

## SqlContainerCreateUpdatePropertiesOrSqlContainerGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrSqlContainerGetPropertiesOptions](#createupdateoptionsorsqlcontainergetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [SqlContainerResourceOrSqlContainerGetPropertiesResource](#sqlcontainerresourceorsqlcontainergetpropertiesresource) (Required): The standard JSON format of a container

## SqlContainerResourceOrSqlContainerGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **analyticalStorageTtl**: int: Analytical TTL.
* **clientEncryptionPolicy**: [ClientEncryptionPolicy](#clientencryptionpolicy): The client encryption policy for the container.
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy): The conflict resolution policy for the container.
* **defaultTtl**: int: Default time to live
* **id**: string (Required): Name of the Cosmos DB SQL container
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy): The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey): The configuration of the partition key to be used for partitioning data into multiple partitions
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy): The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.

## SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrSqlDatabaseGetPropertiesOptions](#createupdateoptionsorsqldatabasegetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [SqlDatabaseResourceOrSqlDatabaseGetPropertiesResource](#sqldatabaseresourceorsqldatabasegetpropertiesresource) (Required): The standard JSON format of a SQL database

## SqlDatabaseResourceOrSqlDatabaseGetPropertiesResource
### Properties
* **_colls**: string (ReadOnly): A system generated property that specified the addressable path of the collections resource.
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **_users**: string (ReadOnly): A system generated property that specifies the addressable path of the users resource.
* **id**: string (Required): Name of the Cosmos DB SQL database

## SqlRoleAssignmentResource
### Properties
* **principalId**: string: The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
* **roleDefinitionId**: string: The unique identifier for the associated Role Definition.
* **scope**: string: The data plane resource path for which access is being granted through this Role Assignment.

## SqlRoleDefinitionResource
### Properties
* **assignableScopes**: string[]: A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
* **permissions**: [Permission](#permission)[]: The set of operations allowed through this Role Definition.
* **roleName**: string: A user-friendly name for the Role Definition. Must be unique for the database account.
* **type**: 'BuiltInRole' | 'CustomRole': Indicates whether the Role Definition was built-in or user created.

## SqlStoredProcedureCreateUpdatePropertiesOrSqlStoredProcedureGetProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [SqlStoredProcedureResourceOrSqlStoredProcedureGetPropertiesResource](#sqlstoredprocedureresourceorsqlstoredproceduregetpropertiesresource) (Required): The standard JSON format of a storedProcedure

## SqlStoredProcedureResourceOrSqlStoredProcedureGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **body**: string: Body of the Stored Procedure
* **id**: string (Required): Name of the Cosmos DB SQL storedProcedure

## SqlTriggerCreateUpdatePropertiesOrSqlTriggerGetProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [SqlTriggerResourceOrSqlTriggerGetPropertiesResource](#sqltriggerresourceorsqltriggergetpropertiesresource) (Required): The standard JSON format of a trigger

## SqlTriggerResourceOrSqlTriggerGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **body**: string: Body of the Trigger
* **id**: string (Required): Name of the Cosmos DB SQL trigger
* **triggerOperation**: 'All' | 'Create' | 'Delete' | 'Replace' | 'Update' | string: The operation the trigger is associated with
* **triggerType**: 'Post' | 'Pre' | string: Type of the Trigger

## SqlUserDefinedFunctionCreateUpdatePropertiesOrSqlUserDefinedFunctionGetProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (WriteOnly): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [SqlUserDefinedFunctionResourceOrSqlUserDefinedFunctionGetPropertiesResource](#sqluserdefinedfunctionresourceorsqluserdefinedfunctiongetpropertiesresource) (Required): The standard JSON format of a userDefinedFunction

## SqlUserDefinedFunctionResourceOrSqlUserDefinedFunctionGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **body**: string: Body of the User Defined Function
* **id**: string (Required): Name of the Cosmos DB SQL userDefinedFunction

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TableCreateUpdatePropertiesOrTableGetProperties
### Properties
* **options**: [CreateUpdateOptionsOrTableGetPropertiesOptions](#createupdateoptionsortablegetpropertiesoptions): A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
* **resource**: [TableResourceOrTableGetPropertiesResource](#tableresourceortablegetpropertiesresource) (Required): The standard JSON format of a Table

## TableResourceOrTableGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
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

## ThroughputPolicyResource
### Properties
* **incrementPercent**: int: Represents the percentage by which throughput can increase every time throughput policy kicks in.
* **isEnabled**: bool: Determines whether the ThroughputPolicy is active or not

## ThroughputSettingsResourceOrThroughputSettingsGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **autoscaleSettings**: [AutoscaleSettingsResource](#autoscalesettingsresource): Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both.
* **minimumThroughput**: string (ReadOnly): The minimum throughput of the resource
* **offerReplacePending**: string (ReadOnly): The throughput replace is pending
* **throughput**: int: Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both.

## ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties
### Properties
* **resource**: [ThroughputSettingsResourceOrThroughputSettingsGetPropertiesResource](#throughputsettingsresourceorthroughputsettingsgetpropertiesresource) (Required): The standard JSON format of a resource throughput

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

