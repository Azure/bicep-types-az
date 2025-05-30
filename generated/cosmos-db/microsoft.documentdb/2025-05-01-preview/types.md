# Microsoft.DocumentDB @ 2025-05-01-preview

## Resource Microsoft.DocumentDB/cassandraClusters@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedCassandraManagedServiceIdentity](#managedcassandramanagedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string {minLength: 1, maxLength: 100, pattern: "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterResourceProperties](#clusterresourceproperties): Properties of a managed Cassandra cluster.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/cassandraClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/cassandraClusters/dataCenters@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 100, pattern: "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataCenterResourceProperties](#datacenterresourceproperties): Properties of a managed Cassandra data center.
* **type**: 'Microsoft.DocumentDB/cassandraClusters/dataCenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse' | string: Indicates the type of database account. This can only be set at database account creation.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountGetProperties](#databaseaccountcreateupdatepropertiesordatabaseaccountgetproperties) (Required): Properties to create and update Azure Cosmos DB database accounts.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceGetProperties](#cassandrakeyspacecreateupdatepropertiesorcassandrakeyspacegetproperties) (Required): Properties to create and update Azure Cosmos DB Cassandra keyspace.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraTableCreateUpdatePropertiesOrCassandraTableGetProperties](#cassandratablecreateupdatepropertiesorcassandratablegetproperties) (Required): Properties to create and update Azure Cosmos DB Cassandra table.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraViewCreateUpdatePropertiesOrCassandraViewGetProperties](#cassandraviewcreateupdatepropertiesorcassandraviewgetproperties) (Required): Properties to create and update Azure Cosmos DB Cassandra view.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraRoleAssignments@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraRoleAssignmentResourceProperties](#cassandraroleassignmentresourceproperties): Properties to create and update an Azure Cosmos DB Cassandra Role Assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraRoleDefinitions@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CassandraRoleDefinitionResourceProperties](#cassandraroledefinitionresourceproperties): Properties to create and update an Azure Cosmos DB Cassandra Role Definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/chaosFaults@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChaosFaultProperties](#chaosfaultproperties): A request object to enable/disable the chaos fault.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/chaosFaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/copyJobs@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CopyJobProperties](#copyjobproperties) (Required): The properties of a Copy Job
* **type**: 'Microsoft.DocumentDB/databaseAccounts/copyJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/dataTransferJobs@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataTransferJobProperties](#datatransferjobproperties) (Required): Data Transfer Create Job Properties
* **type**: 'Microsoft.DocumentDB/databaseAccounts/dataTransferJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/graphs@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GraphResourceCreateUpdatePropertiesOrGraphResourceGetProperties](#graphresourcecreateupdatepropertiesorgraphresourcegetproperties) (Required): Properties to create and update Azure Cosmos DB Graph resource.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/graphs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GremlinDatabaseCreateUpdatePropertiesOrGremlinDatabaseGetProperties](#gremlindatabasecreateupdatepropertiesorgremlindatabasegetproperties) (Required): Properties to create and update Azure Cosmos DB Gremlin database.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GremlinGraphCreateUpdatePropertiesOrGremlinGraphGetProperties](#gremlingraphcreateupdatepropertiesorgremlingraphgetproperties) (Required): Properties to create and update Azure Cosmos DB Gremlin graph.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinRoleAssignments@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GremlinRoleAssignmentResourceProperties](#gremlinroleassignmentresourceproperties): Properties to create and update an Azure Cosmos DB Gremlin Role Assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinRoleDefinitions@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GremlinRoleDefinitionResourceProperties](#gremlinroledefinitionresourceproperties): Properties to create and update an Azure Cosmos DB Gremlin Role Definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoDBDatabaseCreateUpdatePropertiesOrMongoDBDatabaseGetProperties](#mongodbdatabasecreateupdatepropertiesormongodbdatabasegetproperties) (Required): Properties to create and update Azure Cosmos DB MongoDB database.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionGetProperties](#mongodbcollectioncreateupdatepropertiesormongodbcollectiongetproperties) (Required): Properties to create and update Azure Cosmos DB MongoDB collection.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoRoleDefinitionResource](#mongoroledefinitionresource): Properties to create and update an Azure Cosmos DB Mongo Role Definition.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoUserDefinitionResource](#mongouserdefinitionresource): Properties to create and update an Azure Cosmos DB Mongo User Definition.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongoMIRoleAssignments@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoMIRoleAssignmentResourceProperties](#mongomiroleassignmentresourceproperties): Properties to create and update an Azure Cosmos DB MongoMI Role Assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongoMIRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/mongoMIRoleDefinitions@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MongoMIRoleDefinitionResourceProperties](#mongomiroledefinitionresourceproperties): Properties to create and update an Azure Cosmos DB MongoMI Role Definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongoMIRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/networkSecurityPerimeterConfigurations@2025-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Network security configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [NotebookWorkspaceProperties](#notebookworkspaceproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/privateLinkResources@2025-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/services@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceResourceCreateUpdatePropertiesOrServiceResourceProperties](#serviceresourcecreateupdatepropertiesorserviceresourceproperties): Properties in ServiceResourceCreateUpdateParameters.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseGetProperties](#sqldatabasecreateupdatepropertiesorsqldatabasegetproperties) (Required): Properties to create and update Azure Cosmos DB SQL database.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClientEncryptionKeyCreateUpdatePropertiesOrClientEncryptionKeyGetProperties](#clientencryptionkeycreateupdatepropertiesorclientencryptionkeygetproperties) (Required): Properties to create and update ClientEncryptionKey.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlContainerCreateUpdatePropertiesOrSqlContainerGetProperties](#sqlcontainercreateupdatepropertiesorsqlcontainergetproperties) (Required): Properties to create and update Azure Cosmos DB container.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlStoredProcedureCreateUpdatePropertiesOrSqlStoredProcedureGetProperties](#sqlstoredprocedurecreateupdatepropertiesorsqlstoredproceduregetproperties) (Required): Properties to create and update Azure Cosmos DB storedProcedure.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlTriggerCreateUpdatePropertiesOrSqlTriggerGetProperties](#sqltriggercreateupdatepropertiesorsqltriggergetproperties) (Required): Properties to create and update Azure Cosmos DB trigger.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlUserDefinedFunctionCreateUpdatePropertiesOrSqlUserDefinedFunctionGetProperties](#sqluserdefinedfunctioncreateupdatepropertiesorsqluserdefinedfunctiongetproperties) (Required): Properties to create and update Azure Cosmos DB userDefinedFunction.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlRoleAssignmentResource](#sqlroleassignmentresource): Properties to create and update an Azure Cosmos DB SQL Role Assignment.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlRoleDefinitionResource](#sqlroledefinitionresource): Properties to create and update an Azure Cosmos DB SQL Role Definition.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/tableRoleAssignments@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableRoleAssignmentResourceProperties](#tableroleassignmentresourceproperties): Properties to create and update an Azure Cosmos DB Table Role Assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tableRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/tableRoleDefinitions@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableRoleDefinitionResourceProperties](#tableroledefinitionresourceproperties): Properties to create and update an Azure Cosmos DB Table Role Definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tableRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/tables@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableCreateUpdatePropertiesOrTableGetProperties](#tablecreateupdatepropertiesortablegetproperties) (Required): Properties to create and update Azure Cosmos DB Table.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: The location of the resource group to which the resource belongs.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties](#throughputsettingsupdatepropertiesorthroughputsettingsgetproperties) (Required): Properties to update Azure Cosmos DB resource throughput.
* **tags**: [Tags](#tags): Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/fleets@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetResourceProperties](#fleetresourceproperties): Properties to update Azure Cosmos DB fleet resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DocumentDB/fleets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/fleets/fleetAnalytics@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetAnalyticsProperties](#fleetanalyticsproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/fleets/fleetAnalytics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/fleets/fleetspaces@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetspaceProperties](#fleetspaceproperties): Properties to update Azure Cosmos DB Fleetspace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/fleets/fleetspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/fleets/fleetspaces/fleetspaceAccounts@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetspaceAccountProperties](#fleetspaceaccountproperties): An Azure Cosmos DB Global Database Account which is part of a Fleetspace Account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/fleets/fleetspaces/fleetspaceAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/locations@2025-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LocationProperties](#locationproperties) (ReadOnly): Cosmos DB location metadata
* **type**: 'Microsoft.DocumentDB/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/throughputPools@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputPoolProperties](#throughputpoolproperties): Properties to update Azure Cosmos DB throughput pool.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DocumentDB/throughputPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/throughputPools/throughputPoolAccounts@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [ThroughputPoolAccountProperties](#throughputpoolaccountproperties): An Azure Cosmos DB Global Database Account which is part of a Throughputpool.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/throughputPools/throughputPoolAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectionInfo (Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2025-05-01-preview)
* **Resource**: Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces
* **ApiVersion**: 2025-05-01-preview
* **Output**: [NotebookWorkspaceConnectionInfoResult](#notebookworkspaceconnectioninforesult)

## Function listConnectionStrings (Microsoft.DocumentDB/databaseAccounts@2025-05-01-preview)
* **Resource**: Microsoft.DocumentDB/databaseAccounts
* **ApiVersion**: 2025-05-01-preview
* **Output**: [DatabaseAccountListConnectionStringsResult](#databaseaccountlistconnectionstringsresult)

## Function listKeys (Microsoft.DocumentDB/databaseAccounts@2025-05-01-preview)
* **Resource**: Microsoft.DocumentDB/databaseAccounts
* **ApiVersion**: 2025-05-01-preview
* **Output**: [DatabaseAccountListKeysResult](#databaseaccountlistkeysresult)

## AccessRule
### Properties
* **name**: string: Name of the access rule
* **properties**: [AccessRuleProperties](#accessruleproperties): Properties of Access Rule

## AccessRuleProperties
### Properties
* **addressPrefixes**: string[]: Address prefixes in the CIDR format for inbound rules
* **direction**: 'Inbound' | 'Outbound' | string: Direction of Access Rule
* **emailAddresses**: string[]: Email addresses for outbound rules
* **fullyQualifiedDomainNames**: string[]: Fully qualified domain names (FQDN) for outbound rules
* **networkSecurityPerimeters**: [NetworkSecurityPerimeter](#networksecurityperimeter)[]: Network security perimeters for inbound rules
* **phoneNumbers**: string[]: Phone numbers for outbound rules
* **subscriptions**: [AccessRulePropertiesSubscriptionsItem](#accessrulepropertiessubscriptionsitem)[]: Subscriptions for inbound rules

## AccessRulePropertiesSubscriptionsItem
### Properties
* **id**: string: The fully qualified Azure resource ID of the subscription e.g. ('/subscriptions/00000000-0000-0000-0000-000000000000')

## AccountKeyMetadata
### Properties
* **generationTime**: string (ReadOnly): Generation time in UTC of the key in ISO-8601 format. If the value is missing from the object, it means that the last key regeneration was triggered before 2022-06-18.

## AnalyticalStorageConfiguration
### Properties
* **schemaType**: 'FullFidelity' | 'WellDefined' | string: Describes the types of schema for analytical storage.

## ApiProperties
### Properties
* **serverVersion**: '3.2' | '3.6' | '4.0' | '4.2' | '5.0' | '6.0' | '7.0' | string: Describes the version of the MongoDB account.

## AuthenticationMethodLdapProperties
### Properties
* **connectionTimeoutInMs**: int: Timeout for connecting to the LDAP server in miliseconds. The default is 5000 ms.
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

## AzureBlobContainer
### Properties
* **containerName**: string (Required): Azure Blob container.

## AzureBlobSourceSinkDetails
### Properties
* **endpointUrl**: string {pattern: "^https?://[^/$.?# ]+.[^ ]*$"} (Required): Azure Blob container endpoint.

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

## BackupSchedule
### Properties
* **cronExpression**: string: The cron expression that defines when you want to back up your data.
* **retentionInHours**: int: The retention period (hours) of the backups. If you want to retain data forever, set retention to 0.
* **scheduleName**: string: The unique identifier of backup schedule.

## BaseCopyJobProperties
* **Discriminator**: jobType

### Base Properties

### BlobToCassandraRUCopyJobProperties
#### Properties
* **destinationDetails**: [CosmosDBSourceSinkDetails](#cosmosdbsourcesinkdetails): Destination Cassandra DataStore details
* **jobType**: 'AzureBlobStorageToCassandraRU' (Required): Copy Job Type
* **sourceDetails**: [AzureBlobSourceSinkDetails](#azureblobsourcesinkdetails) (Required): Azure Storage container DataStore details
* **tasks**: [BlobToCassandraRUCopyJobTask](#blobtocassandrarucopyjobtask)[] (Required): Copy Job tasks.

### CassandraRUToBlobCopyJobProperties
#### Properties
* **destinationDetails**: [AzureBlobSourceSinkDetails](#azureblobsourcesinkdetails) (Required): Destination Cassandra DataStore details
* **jobType**: 'CassandraRUToAzureBlobStorage' (Required): Copy Job Type
* **sourceDetails**: [CosmosDBSourceSinkDetails](#cosmosdbsourcesinkdetails): Source Cassandra DataStore details
* **tasks**: [CassandraRUToBlobCopyJobTask](#cassandrarutoblobcopyjobtask)[] (Required): Copy Job tasks.

### CassandraRUToCassandraRUCopyJobProperties
#### Properties
* **destinationDetails**: [CosmosDBSourceSinkDetails](#cosmosdbsourcesinkdetails): Destination Cassandra DataStore details
* **jobType**: 'CassandraRUToCassandraRU' (Required): Copy Job Type
* **sourceDetails**: [CosmosDBSourceSinkDetails](#cosmosdbsourcesinkdetails): Source Cassandra DataStore details
* **tasks**: [CassandraRUToCassandraRUCopyJobTask](#cassandrarutocassandrarucopyjobtask)[] (Required): Copy Job tasks.

### MongoRUToMongoRUCopyJobProperties
#### Properties
* **destinationDetails**: [CosmosDBSourceSinkDetails](#cosmosdbsourcesinkdetails): Destination Mongo DataStore details
* **jobType**: 'MongoRUToMongoRU' (Required): Copy Job Type
* **sourceDetails**: [CosmosDBSourceSinkDetails](#cosmosdbsourcesinkdetails): Source Mongo DataStore details
* **tasks**: [MongoRUToMongoRUCopyJobTask](#mongorutomongorucopyjobtask)[] (Required): Copy Job tasks.

### MongoRUToMongoVCoreCopyJobProperties
#### Properties
* **destinationDetails**: [MongoVCoreSourceSinkDetails](#mongovcoresourcesinkdetails) (Required): Destination Mongo (vCore) DataStore details
* **jobType**: 'MongoRUToMongoVCore' (Required): Copy Job Type
* **sourceDetails**: [CosmosDBSourceSinkDetails](#cosmosdbsourcesinkdetails): Source Mongo (RU) DataStore details
* **tasks**: [MongoRUToMongoVCoreCopyJobTask](#mongorutomongovcorecopyjobtask)[] (Required): Copy Job tasks.

### NoSqlRUToNoSqlRUCopyJobProperties
#### Properties
* **destinationDetails**: [CosmosDBSourceSinkDetails](#cosmosdbsourcesinkdetails): Destination SQL DataStore details
* **jobType**: 'NoSqlRUToNoSqlRU' (Required): Copy Job Type
* **sourceDetails**: [CosmosDBSourceSinkDetails](#cosmosdbsourcesinkdetails): Source SQL DataStore details
* **tasks**: [NoSqlRUToNoSqlRUCopyJobTask](#nosqlrutonosqlrucopyjobtask)[] (Required): Copy Job tasks.


## BlobToCassandraRUCopyJobTask
### Properties
* **destination**: [CosmosDBCassandraTable](#cosmosdbcassandratable) (Required): Destination Cassandra table
* **processedCount**: int (ReadOnly): Task level Processed Count.
* **source**: [AzureBlobContainer](#azureblobcontainer) (Required): Source Azure Blob container
* **totalCount**: int (ReadOnly): Task level Total Count.

## Capability
### Properties
* **name**: string: Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".

## Capacity
### Properties
* **totalThroughputLimit**: int {minValue: -1}: The total throughput limit imposed on the account. A totalThroughputLimit of 2000 imposes a strict limit of max throughput that can be provisioned on that account to be 2000. A totalThroughputLimit of -1 indicates no limits on provisioning of throughput.

## CapacityModeChangeTransitionState
### Properties
* **capacityModeLastSuccessfulTransitionEndTimestamp**: string (ReadOnly): End time in UTC of the last successful capacity mode change.
* **capacityModeTransitionBeginTimestamp**: string (ReadOnly): Begin time in UTC of the capacity mode change.
* **capacityModeTransitionEndTimestamp**: string (ReadOnly): End time in UTC of the capacity mode change.
* **capacityModeTransitionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Initialized' | 'Invalid' | string: The transition status of capacity mode.
* **currentCapacityMode**: 'None' | 'Provisioned' | 'Serverless' | string: Indicates the current capacity mode of the account.
* **previousCapacityMode**: 'None' | 'Provisioned' | 'Serverless' | string: Indicates the previous capacity mode of the account before successful transition.

## CassandraError
### Properties
* **additionalErrorInfo**: string: Additional information about the error.
* **code**: string: The code of error that occurred.
* **message**: string: The message of the error.
* **target**: string: The target resource of the error.

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

## CassandraRoleAssignmentResourceProperties
### Properties
* **principalId**: string: The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Cassandra Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource.
* **roleDefinitionId**: string: The unique identifier for the associated Role Definition.
* **scope**: string: The data plane resource path for which access is being granted through this Cassandra Role Assignment.

## CassandraRoleDefinitionResourceProperties
### Properties
* **assignableScopes**: string[]: A set of fully qualified Scopes at or below which Cassandra Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
* **id**: string: The path id for the Role Definition.
* **permissions**: [PermissionAutoGenerated2](#permissionautogenerated2)[]: The set of operations allowed through this Role Definition.
* **roleName**: string: A user-friendly name for the Role Definition. Must be unique for the database account.
* **type**: 'BuiltInRole' | 'CustomRole': Indicates whether the Role Definition was built-in or user created.

## CassandraRUToBlobCopyJobTask
### Properties
* **destination**: [AzureBlobContainer](#azureblobcontainer) (Required): Destination Azure Blob container
* **processedCount**: int (ReadOnly): Task level Processed Count.
* **source**: [CosmosDBCassandraTable](#cosmosdbcassandratable) (Required): Source Cassandra table
* **totalCount**: int (ReadOnly): Task level Total Count.

## CassandraRUToCassandraRUCopyJobTask
### Properties
* **destination**: [CosmosDBCassandraTable](#cosmosdbcassandratable) (Required): Destination Cassandra table
* **processedCount**: int (ReadOnly): Task level Processed Count.
* **source**: [CosmosDBCassandraTable](#cosmosdbcassandratable) (Required): Source Cassandra table
* **totalCount**: int (ReadOnly): Task level Total Count.

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

## ChaosFaultProperties
### Properties
* **action**: 'Disable' | 'Enable': Indicates whether what action to take for the Chaos Fault.
* **containerName**: string: Container name.
* **databaseName**: string: Database name.
* **provisioningState**: string (ReadOnly): A provisioning state of the Chaos Fault.
* **region**: string: Region of the account where the Chaos Fault is to be enabled/disabled.

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
* **policyFormatVersion**: int {minValue: 1, maxValue: 2} (Required): Version of the client encryption policy definition. Supported versions are 1 and 2. Version 2 supports id and partition key path encryption.

## ClusterKey
### Properties
* **name**: string: Name of the Cosmos DB Cassandra table cluster key
* **orderBy**: string: Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc"

## ClusterResourceProperties
### Properties
* **authenticationMethod**: 'Cassandra' | 'Ldap' | 'None' | string: Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'.
* **autoReplicate**: 'AllKeyspaces' | 'None' | 'SystemKeyspaces' | string: The form of AutoReplicate that is being used by this cluster.
* **azureConnectionMethod**: 'None' | 'VPN' | string: How to connect to the azure services needed for running the cluster
* **backupSchedules**: [BackupSchedule](#backupschedule)[]: List of backup schedules that define when you want to back up your data.
* **cassandraAuditLoggingEnabled**: bool: Whether Cassandra audit logging is enabled
* **cassandraVersion**: string: Which version of Cassandra should this cluster converge to running (e.g., 3.11). When updated, the cluster may take some time to migrate to the new version.
* **clientCertificates**: [Certificate](#certificate)[]: List of TLS certificates used to authorize clients connecting to the cluster. All connections are TLS encrypted whether clientCertificates is set or not, but if clientCertificates is set, the managed Cassandra cluster will reject all connections not bearing a TLS client certificate that can be validated from one or more of the public certificates in this property.
* **clusterNameOverride**: string: If you need to set the clusterName property in cassandra.yaml to something besides the resource name of the cluster, set the value to use on this property.
* **clusterType**: 'NonProduction' | 'Production' | string: Type of the cluster. If set to Production, some operations might not be permitted on cluster.
* **deallocated**: bool: Whether the cluster and associated data centers has been deallocated.
* **delegatedManagementSubnetId**: string: Resource id of a subnet that this cluster's management service should have its network interface attached to. The subnet must be routable to all subnets that will be delegated to data centers. The resource id must be of the form '/subscriptions/<subscription id>/resourceGroups/<resource group>/providers/Microsoft.Network/virtualNetworks/<virtual network>/subnets/<subnet>'
* **extensions**: string[]: Extensions to be added or updated on cluster.
* **externalDataCenters**: string[]: List of the data center names for unmanaged data centers in this cluster to be included in auto-replication.
* **externalGossipCertificates**: [Certificate](#certificate)[]: List of TLS certificates used to authorize gossip from unmanaged data centers. The TLS certificates of all nodes in unmanaged data centers must be verifiable using one of the certificates provided in this property.
* **externalSeedNodes**: [SeedNode](#seednode)[]: List of IP addresses of seed nodes in unmanaged data centers. These will be added to the seed node lists of all managed nodes.
* **gossipCertificates**: [Certificate](#certificate)[] (ReadOnly): List of TLS certificates that unmanaged nodes must trust for gossip with managed nodes. All managed nodes will present TLS client certificates that are verifiable using one of the certificates provided in this property.
* **hoursBetweenBackups**: int: (Deprecated) Number of hours to wait between taking a backup of the cluster.
* **initialCassandraAdminPassword**: string {sensitive} (WriteOnly): Initial password for clients connecting as admin to the cluster. Should be changed after cluster creation. Returns null on GET. This field only applies when the authenticationMethod field is 'Cassandra'.
* **privateLinkResourceId**: string (ReadOnly): If the Connection Method is Vpn, this is the Id of the private link resource that the datacenters need to connect to.
* **prometheusEndpoint**: [SeedNode](#seednode): Hostname or IP address where the Prometheus endpoint containing data about the managed Cassandra nodes can be reached.
* **provisionError**: [CassandraError](#cassandraerror): Error related to resource provisioning.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The status of the resource at the time the operation was called.
* **repairEnabled**: bool: Should automatic repairs run on this cluster? If omitted, this is true, and should stay true unless you are running a hybrid cluster where you are already doing your own repairs.
* **restoreFromBackupId**: string (WriteOnly): To create an empty cluster, omit this field or set it to null. To restore a backup into a new cluster, set this field to the resource id of the backup.
* **scheduledEventStrategy**: 'Ignore' | 'StopAny' | 'StopByRack' | string: How the nodes in the cluster react to scheduled events
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

## ComputedProperty
### Properties
* **name**: string: The name of a computed property, for example - "cp_lowerName"
* **query**: string: The query that evaluates the value for computed property, for example - "SELECT VALUE LOWER(c.name) FROM c"

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
* **kind**: 'Hash' | 'MultiHash' | 'Range' | string: Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create
* **paths**: string[]: List of paths using which data within the container can be partitioned
* **systemKey**: bool (ReadOnly): Indicates if the container is using a system generated partition key
* **version**: int {minValue: 1, maxValue: 2}: Indicates the version of the partition key definition

## ContinuousModeProperties
### Properties
* **tier**: 'Continuous30Days' | 'Continuous7Days' | string: Enum to indicate type of Continuos backup mode

## CopyJobProperties
### Properties
* **duration**: string (ReadOnly): Total Duration of Job
* **error**: [ErrorResponseAutoGenerated](#errorresponseautogenerated) (ReadOnly): Error response for Faulted job
* **jobProperties**: [BaseCopyJobProperties](#basecopyjobproperties) (Required): Job Properties
* **lastUpdatedUtcTime**: string (ReadOnly): Last Updated Time (ISO-8601 format)
* **mode**: 'Offline' | 'Online' | string: Mode of job execution
* **processedCount**: int (ReadOnly): Processed Count
* **status**: 'Cancelled' | 'Completed' | 'Faulted' | 'Partitioning' | 'Paused' | 'Pending' | 'Running' | string (ReadOnly): Job Status
* **totalCount**: int (ReadOnly): Total Count
* **workerCount**: int {minValue: 0}: Worker count

## CorsPolicy
### Properties
* **allowedHeaders**: string: The request headers that the origin domain may specify on the CORS request.
* **allowedMethods**: string: The methods (HTTP request verbs) that the origin domain may use for a CORS request.
* **allowedOrigins**: string (Required): The origin domains that are permitted to make a request against the service via CORS.
* **exposedHeaders**: string: The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer.
* **maxAgeInSeconds**: int {minValue: 1, maxValue: 2147483647}: The maximum amount time that a browser should cache the preflight OPTIONS request.

## CosmosDBCassandraTable
### Properties
* **keyspaceName**: string (Required): Azure Cosmos DB for Apache Cassandra keyspace.
* **tableName**: string (Required): Azure Cosmos DB for Apache Cassandra table.

## CosmosDBMongoCollection
### Properties
* **collectionName**: string (Required): Azure Cosmos DB for MongoDB (RU) collection.
* **databaseName**: string (Required): Azure Cosmos DB for MongoDB (RU) database.

## CosmosDBMongoVCoreCollection
### Properties
* **collectionName**: string (Required): Azure Cosmos DB for MongoDB (vCore) collection.
* **databaseName**: string (Required): Azure Cosmos DB for MongoDB (vCore) database.

## CosmosDBNoSqlContainer
### Properties
* **containerName**: string (Required): Azure Cosmos DB for NoSQL container.
* **databaseName**: string (Required): Azure Cosmos DB for NoSQL database.

## CosmosDBSourceSinkDetails
### Properties
* **remoteAccountName**: string: Name of remote account in case of cross-account data transfer.

## CreateUpdateOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrCassandraKeyspaceGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrCassandraTableGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrCassandraViewGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrGraphResourceGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrGremlinDatabaseGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrGremlinGraphGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrMongoDBCollectionGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrMongoDBDatabaseGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrSqlContainerGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrSqlDatabaseGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## CreateUpdateOptionsOrTableGetPropertiesOptions
### Properties
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings): Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
* **throughput**: int: Request Units per second. For example, "throughput": 10000.

## DatabaseAccountConnectionString
### Properties
* **connectionString**: string (ReadOnly): Value of the connection string
* **description**: string (ReadOnly): Description of the connection string
* **keyKind**: 'Primary' | 'PrimaryReadonly' | 'Secondary' | 'SecondaryReadonly' | string (ReadOnly): Kind of the connection string key
* **type**: 'Cassandra' | 'CassandraConnectorMetadata' | 'Gremlin' | 'GremlinV2' | 'MongoDB' | 'Sql' | 'SqlDedicatedGateway' | 'Table' | 'Undefined' | string (ReadOnly): Type of the connection string

## DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountGetProperties
### Properties
* **analyticalStorageConfiguration**: [AnalyticalStorageConfiguration](#analyticalstorageconfiguration): Analytical storage specific properties.
* **apiProperties**: [ApiProperties](#apiproperties): API specific properties. Currently, supported only for MongoDB API.
* **backupPolicy**: [BackupPolicy](#backuppolicy): The object representing the policy for taking backups on an account.
* **capabilities**: [Capability](#capability)[]: List of Cosmos DB capabilities for the account
* **capacity**: [Capacity](#capacity): The object that represents all properties related to capacity enforcement on an account.
* **capacityMode**: 'None' | 'Provisioned' | 'Serverless' | string: Indicates the capacityMode of the Cosmos DB account.
* **capacityModeChangeTransitionState**: [CapacityModeChangeTransitionState](#capacitymodechangetransitionstate) (ReadOnly): The object that represents the migration state for the CapacityMode of the Cosmos DB account.
* **connectorOffer**: 'Small' | string: The cassandra connector offer type for the Cosmos DB database C* account.
* **consistencyPolicy**: [ConsistencyPolicy](#consistencypolicy): The consistency policy for the Cosmos DB account.
* **cors**: [CorsPolicy](#corspolicy)[]: The CORS policy for the Cosmos DB database account.
* **createMode**: 'Default' | 'Restore' | string: Enum to indicate the mode of account creation.
* **customerManagedKeyStatus**: string: Indicates the status of the Customer Managed Key feature on the account. In case there are errors, the property provides troubleshooting guidance.
* **databaseAccountOfferType**: 'Standard' (Required): The offer type for the database
* **defaultIdentity**: string: The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more.
* **defaultPriorityLevel**: 'High' | 'Low' | string: Enum to indicate default Priority Level of request for Priority Based Execution.
* **diagnosticLogSettings**: [DiagnosticLogSettings](#diagnosticlogsettings): The Object representing the different Diagnostic log settings for the Cosmos DB Account.
* **disableKeyBasedMetadataWriteAccess**: bool: Disable write operations on metadata resources (databases, containers, throughput) via account keys
* **disableLocalAuth**: bool: Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
* **documentEndpoint**: string (ReadOnly): The connection endpoint for the Cosmos DB database account.
* **enableAllVersionsAndDeletesChangeFeed**: bool: Flag to indicate if All Versions and Deletes Change feed feature is enabled on the account
* **enableAnalyticalStorage**: bool: Flag to indicate whether to enable storage analytics.
* **enableAutomaticFailover**: bool: Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
* **enableBurstCapacity**: bool: Flag to indicate enabling/disabling of Burst Capacity Preview feature on the account
* **enableCassandraConnector**: bool: Enables the cassandra connector on the Cosmos DB C* account
* **enableFreeTier**: bool: Flag to indicate whether Free Tier is enabled.
* **enableMaterializedViews**: bool: Flag to indicate whether to enable MaterializedViews on the Cosmos DB account
* **enableMultipleWriteLocations**: bool: Enables the account to write in multiple locations
* **enablePartitionMerge**: bool: Flag to indicate enabling/disabling of Partition Merge feature on the account
* **enablePerRegionPerPartitionAutoscale**: bool: Flag to indicate enabling/disabling of Per-Region Per-partition autoscale Preview feature on the account
* **enablePriorityBasedExecution**: bool: Flag to indicate enabling/disabling of Priority Based Execution Preview feature on the account
* **failoverPolicies**: [FailoverPolicy](#failoverpolicy)[] (ReadOnly): An array that contains the regions ordered by their failover priorities.
* **instanceId**: string (ReadOnly): A unique identifier assigned to the database account
* **ipRules**: [IpAddressOrRange](#ipaddressorrange)[]: List of IpRules.
* **isVirtualNetworkFilterEnabled**: bool: Flag to indicate whether to enable/disable Virtual Network ACL rules.
* **keysMetadata**: [DatabaseAccountKeysMetadata](#databaseaccountkeysmetadata) (ReadOnly): This property is ignored during the update/create operation, as the metadata is read-only. The object represents the metadata for the Account Keys of the Cosmos DB account.
* **keyVaultKeyUri**: string: The URI of the key vault
* **locations**: [Location](#location)[] (Required): An array that contains the georeplication locations enabled for the Cosmos DB account.
* **minimalTlsVersion**: 'Tls' | 'Tls11' | 'Tls12' | string: Indicates the minimum allowed Tls version. The default is Tls 1.0, except for Cassandra and Mongo API's, which only work with Tls 1.2.
* **networkAclBypass**: 'AzureServices' | 'None': Indicates what services are allowed to bypass firewall checks.
* **networkAclBypassResourceIds**: string[]: An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of Private Endpoint Connections configured for the Cosmos DB account.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: Whether requests from Public Network are allowed
* **readLocations**: [Location](#location)[] (ReadOnly): An array that contains of the read locations enabled for the Cosmos DB account.
* **restoreParameters**: [RestoreParameters](#restoreparameters): Parameters to indicate the information about the restore.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: List of Virtual Network ACL rules configured for the Cosmos DB account.
* **writeLocations**: [Location](#location)[] (ReadOnly): An array that contains the write location for the Cosmos DB account.

## DatabaseAccountKeysMetadata
### Properties
* **primaryMasterKey**: [AccountKeyMetadata](#accountkeymetadata) (ReadOnly): The metadata related to the Primary Read-Write Key for the given Cosmos DB database account.
* **primaryReadonlyMasterKey**: [AccountKeyMetadata](#accountkeymetadata) (ReadOnly): The metadata related to the Primary Read-Only Key for the given Cosmos DB database account.
* **secondaryMasterKey**: [AccountKeyMetadata](#accountkeymetadata) (ReadOnly): The metadata related to the Secondary Read-Write Key for the given Cosmos DB database account.
* **secondaryReadonlyMasterKey**: [AccountKeyMetadata](#accountkeymetadata) (ReadOnly): The metadata related to the Secondary Read-Only Key for the given Cosmos DB database account.

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
* **availabilityZone**: bool: If the data center has Availability Zone support, apply it to the Virtual Machine ScaleSet that host the cassandra data center virtual machines.
* **backupStorageCustomerKeyUri**: string: Indicates the Key Uri of the customer key to use for encryption of the backup storage account.
* **base64EncodedCassandraYamlFragment**: string: A fragment of a cassandra.yaml configuration file to be included in the cassandra.yaml for all nodes in this data center. The fragment should be Base64 encoded, and only a subset of keys are allowed.
* **dataCenterLocation**: string: The region this data center should be created in.
* **deallocated**: bool: Whether the data center has been deallocated.
* **delegatedSubnetId**: string: Resource id of a subnet the nodes in this data center should have their network interfaces connected to. The subnet must be in the same region specified in 'dataCenterLocation' and must be able to route to the subnet specified in the cluster's 'delegatedManagementSubnetId' property. This resource id will be of the form '/subscriptions/<subscription id>/resourceGroups/<resource group>/providers/Microsoft.Network/virtualNetworks/<virtual network>/subnets/<subnet>'.
* **diskCapacity**: int: Number of disks attached to each node. Default is 4.
* **diskSku**: string: Disk SKU used for data centers. Default value is P30.
* **managedDiskCustomerKeyUri**: string: Key uri to use for encryption of managed disks. Ensure the system assigned identity of the cluster has been assigned appropriate permissions(key get/wrap/unwrap permissions) on the key.
* **nodeCount**: int: The number of nodes the data center should have. This is the desired number. After it is set, it may take some time for the data center to be scaled to match. To monitor the number of nodes and their status, use the fetchNodeStatus method on the cluster.
* **privateEndpointIpAddress**: string: Ip of the VPN Endpoint for this data center.
* **provisionError**: [CassandraError](#cassandraerror): Error related to resource provisioning.
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
* **remoteAccountName**: string
* **tableName**: string (Required)

### CosmosMongoDataTransferDataSourceSink
#### Properties
* **collectionName**: string (Required)
* **component**: 'CosmosDBMongo' (Required)
* **databaseName**: string (Required)
* **remoteAccountName**: string

### CosmosMongoVCoreDataTransferDataSourceSink
#### Properties
* **collectionName**: string (Required)
* **component**: 'CosmosDBMongoVCore' (Required)
* **connectionStringKeyVaultUri**: string
* **databaseName**: string (Required)
* **hostName**: string

### CosmosSqlDataTransferDataSourceSink
#### Properties
* **component**: 'CosmosDBSql' (Required)
* **containerName**: string (Required)
* **databaseName**: string (Required)
* **remoteAccountName**: string


## DataTransferJobProperties
### Properties
* **destination**: [DataTransferDataSourceSink](#datatransferdatasourcesink) (Required): Destination DataStore details
* **duration**: string (ReadOnly): Total Duration of Job
* **error**: [ErrorResponseAutoGenerated](#errorresponseautogenerated) (ReadOnly): Error response for Faulted job
* **jobName**: string (ReadOnly): Job Name
* **lastUpdatedUtcTime**: string (ReadOnly): Last Updated Time (ISO-8601 format).
* **mode**: 'Offline' | 'Online' | string: Mode of job execution
* **processedCount**: int (ReadOnly): Processed Count.
* **source**: [DataTransferDataSourceSink](#datatransferdatasourcesink) (Required): Source DataStore details
* **status**: string (ReadOnly): Job Status
* **totalCount**: int (ReadOnly): Total Count.
* **workerCount**: int {minValue: 0}: Worker count

## DataTransferRegionalServiceResource
### Properties
* **location**: string (ReadOnly): The location name.
* **name**: string (ReadOnly): The regional service name.
* **status**: 'Creating' | 'Deleting' | 'Error' | 'Running' | 'Stopped' | 'Updating' | string (ReadOnly): Describes the status of a service.

## DiagnosticLogSettings
### Properties
* **enableFullTextQuery**: 'False' | 'None' | 'True': Describe the level of detail with which queries are to be logged.

## ErrorResponseAutoGenerated
### Properties
* **code**: string: Error code.
* **message**: string: Error message indicating why the operation failed.

## ExcludedPath
### Properties
* **path**: string: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)

## FailoverPolicy
### Properties
* **failoverPriority**: int {minValue: 0}: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
* **id**: string (ReadOnly): The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
* **locationName**: string: The name of the region in which the database account exists.

## FleetAnalyticsProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Initializing' | 'InternallyReady' | 'Online' | 'Succeeded' | 'Uninitialized' | 'Updating' | string: A provisioning state of the FleetAnalytics.
* **storageLocationType**: 'FabricLakehouse' | 'StorageAccount' | string: The type of the fleet analytics resource.
* **storageLocationUri**: string: The unique identifier of the fleet analytics resource.

## FleetResourceProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Initializing' | 'InternallyReady' | 'Online' | 'Succeeded' | 'Uninitialized' | 'Updating' | string: A provisioning state of the Fleet.

## FleetspaceAccountProperties
### Properties
* **globalDatabaseAccountProperties**: [FleetspaceAccountPropertiesGlobalDatabaseAccountProperties](#fleetspaceaccountpropertiesglobaldatabaseaccountproperties): Configuration for fleetspace Account in the fleetspace.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Initializing' | 'InternallyReady' | 'Online' | 'Succeeded' | 'Uninitialized' | 'Updating' | string: A provisioning state of the Fleetspace Account.

## FleetspaceAccountPropertiesGlobalDatabaseAccountProperties
### Properties
* **armLocation**: string: The location of  global database account in the Fleetspace Account.
* **resourceId**: string: The resource identifier of global database account in the Fleetspace Account.

## FleetspaceProperties
### Properties
* **fleetspaceApiKind**: 'NoSQL' | string: The kind of API this fleetspace belongs to. Acceptable values: 'NoSQL'
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Initializing' | 'InternallyReady' | 'Online' | 'Succeeded' | 'Uninitialized' | 'Updating' | string: A provisioning state of the Fleetspace.
* **throughputPoolConfiguration**: [FleetspacePropertiesThroughputPoolConfiguration](#fleetspacepropertiesthroughputpoolconfiguration): Configuration for throughput pool in the fleetspace.

## FleetspacePropertiesThroughputPoolConfiguration
### Properties
* **dataRegions**: string[] {minLength: 1}: List of data regions assigned to the fleetspace. Eg [westus2]
* **maxThroughput**: int: Maximum throughput for the pool.
* **minThroughput**: int: Minimum throughput for the pool.
* **serviceTier**: 'BusinessCritical' | 'GeneralPurpose' | string: Service Tier for the fleetspace. GeneralPurpose types refers to single write region accounts that can be added to this fleetspace, whereas BusinessCritical refers to multi write region.

## FullTextPath
### Properties
* **language**: string: The language of the full text field in the document.
* **path**: string (Required): The path to the full text field in the document.

## FullTextPolicy
### Properties
* **defaultLanguage**: string: The default language for a full text paths.
* **fullTextPaths**: [FullTextPath](#fulltextpath)[]: List of FullText Paths

## GraphAPIComputeRegionalServiceResource
### Properties
* **graphApiComputeEndpoint**: string (ReadOnly): The regional endpoint for GraphAPICompute.
* **location**: string (ReadOnly): The location name.
* **name**: string (ReadOnly): The regional service name.
* **status**: 'Creating' | 'Deleting' | 'Error' | 'Running' | 'Stopped' | 'Updating' | string (ReadOnly): Describes the status of a service.

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
* **createMode**: 'Default' | 'Restore' | string: Enum to indicate the mode of resource creation.
* **id**: string (Required): Name of the Cosmos DB Gremlin database
* **restoreParameters**: [ResourceRestoreParameters](#resourcerestoreparameters): Parameters to indicate the information about the restore

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
* **analyticalStorageTtl**: int: Analytical TTL.
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy): The conflict resolution policy for the graph.
* **createMode**: 'Default' | 'Restore' | string: Enum to indicate the mode of resource creation.
* **defaultTtl**: int: Default time to live
* **id**: string (Required): Name of the Cosmos DB Gremlin graph
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy): The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey): The configuration of the partition key to be used for partitioning data into multiple partitions
* **restoreParameters**: [ResourceRestoreParameters](#resourcerestoreparameters): Parameters to indicate the information about the restore
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy): The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.

## GremlinRoleAssignmentResourceProperties
### Properties
* **principalId**: string: The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Gremlin Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource.
* **roleDefinitionId**: string: The unique identifier for the associated Role Definition.
* **scope**: string: The data plane resource path for which access is being granted through this Gremlin Role Assignment.

## GremlinRoleDefinitionResourceProperties
### Properties
* **assignableScopes**: string[]: A set of fully qualified Scopes at or below which Gremlin Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
* **id**: string: The path id for the Role Definition.
* **permissions**: [PermissionAutoGenerated4](#permissionautogenerated4)[]: The set of operations allowed through this Role Definition.
* **roleName**: string: A user-friendly name for the Role Definition. Must be unique for the database account.
* **type**: 'BuiltInRole' | 'CustomRole': Indicates whether the Role Definition was built-in or user created.

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
* **vectorIndexes**: [VectorIndex](#vectorindex)[]: List of paths to include in the vector indexing

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
* **failoverPriority**: int {minValue: 0}: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
* **id**: string (ReadOnly): The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
* **isZoneRedundant**: bool: Flag to indicate whether or not this region is an AvailabilityZone region
* **locationName**: string: The name of the region.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## LocationProperties
### Properties
* **backupStorageRedundancies**: ('Geo' | 'Local' | 'Zone' | string)[] (ReadOnly): The properties of available backup storage redundancies.
* **isResidencyRestricted**: bool (ReadOnly): Flag indicating whether the location is residency sensitive.
* **isSubscriptionRegionAccessAllowedForAz**: bool (ReadOnly): Flag indicating whether the subscription have access in region for Availability Zones(Az).
* **isSubscriptionRegionAccessAllowedForRegular**: bool (ReadOnly): Flag indicating whether the subscription have access in region for Non-Availability Zones.
* **status**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Initializing' | 'InternallyReady' | 'Online' | 'Succeeded' | 'Uninitialized' | 'Updating' | string (ReadOnly): Enum to indicate current buildout status of the region.
* **supportsAvailabilityZone**: bool (ReadOnly): Flag indicating whether the location supports availability zones or not.

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

## MaterializedViewDefinition
### Properties
* **definition**: string (Required): The definition should be an SQL query which would be used to fetch data from the source container to populate into the Materialized View container.
* **sourceCollectionId**: string (Required): The name of the source container on which the Materialized View will be created.
* **sourceCollectionRid**: string (ReadOnly): An unique identifier for the source collection. This is a system generated property.

## MaterializedViewDetails
### Properties
* **_rid**: string: _rid field of Materialized container.
* **id**: string: Id field of Materialized container.

## MaterializedViewsBuilderRegionalServiceResource
### Properties
* **location**: string (ReadOnly): The location name.
* **name**: string (ReadOnly): The regional service name.
* **status**: 'Creating' | 'Deleting' | 'Error' | 'Running' | 'Stopped' | 'Updating' | string (ReadOnly): Describes the status of a service.

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
* **createMode**: 'Default' | 'Restore' | string: Enum to indicate the mode of resource creation.
* **id**: string (Required): Name of the Cosmos DB MongoDB collection
* **indexes**: [MongoIndex](#mongoindex)[]: List of index keys
* **restoreParameters**: [ResourceRestoreParameters](#resourcerestoreparameters): Parameters to indicate the information about the restore
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
* **createMode**: 'Default' | 'Restore' | string: Enum to indicate the mode of resource creation.
* **id**: string (Required): Name of the Cosmos DB MongoDB database
* **restoreParameters**: [ResourceRestoreParameters](#resourcerestoreparameters): Parameters to indicate the information about the restore

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

## MongoMIRoleAssignmentResourceProperties
### Properties
* **principalId**: string: The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this MongoMI Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource.
* **roleDefinitionId**: string: The unique identifier for the associated Role Definition.
* **scope**: string: The data plane resource path for which access is being granted through this MongoMI Role Assignment.

## MongoMIRoleDefinitionResourceProperties
### Properties
* **assignableScopes**: string[]: A set of fully qualified Scopes at or below which MongoMI Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
* **id**: string: The path id for the Role Definition.
* **permissions**: [PermissionAutoGenerated3](#permissionautogenerated3)[]: The set of operations allowed through this Role Definition.
* **roleName**: string: A user-friendly name for the Role Definition. Must be unique for the database account.
* **type**: 'BuiltInRole' | 'CustomRole': Indicates whether the Role Definition was built-in or user created.

## MongoRoleDefinitionResource
### Properties
* **databaseName**: string: The database name for which access is being granted for this Role Definition.
* **privileges**: [Privilege](#privilege)[]: A set of privileges contained by the Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Scopes higher than Database are not enforceable as privilege.
* **roleName**: string: A user-friendly name for the Role Definition. Must be unique for the database account.
* **roles**: [Role](#role)[]: The set of roles inherited by this Role Definition.
* **type**: 'BuiltInRole' | 'CustomRole': Indicates whether the Role Definition was built-in or user created.

## MongoRUToMongoRUCopyJobTask
### Properties
* **destination**: [CosmosDBMongoCollection](#cosmosdbmongocollection) (Required): Destination Mongo (RU) collection
* **processedCount**: int (ReadOnly): Task level Processed Count.
* **source**: [CosmosDBMongoCollection](#cosmosdbmongocollection) (Required): Source Mongo (RU) collection
* **totalCount**: int (ReadOnly): Task level Total Count.

## MongoRUToMongoVCoreCopyJobTask
### Properties
* **destination**: [CosmosDBMongoVCoreCollection](#cosmosdbmongovcorecollection) (Required): Destination Mongo (vCore) collection
* **processedCount**: int (ReadOnly): Task level Processed Count.
* **source**: [CosmosDBMongoCollection](#cosmosdbmongocollection) (Required): Source Mongo (RU) collection
* **totalCount**: int (ReadOnly): Task level Total Count.

## MongoUserDefinitionResource
### Properties
* **customData**: string: A custom definition for the USer Definition.
* **databaseName**: string: The database name for which access is being granted for this User Definition.
* **mechanisms**: string: The Mongo Auth mechanism. For now, we only support auth mechanism SCRAM-SHA-256.
* **password**: string: The password for User Definition. Response does not contain user password.
* **roles**: [Role](#role)[]: The set of roles inherited by the User Definition.
* **userName**: string: The user name for User Definition.

## MongoVCoreSourceSinkDetails
### Properties
* **connectionStringKeyVaultUri**: string {pattern: "^https?://[^/$.?# ]+.[^ ]*$"}: URI of Azure KeyVault secret containing connection string.
* **hostName**: string

## NetworkSecurityPerimeter
### Properties
* **id**: string: Fully qualified Azure resource ID of the NSP resource
* **location**: string: Location of the network security perimeter
* **perimeterGuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Universal unique ID (UUID) of the network security perimeter

## NetworkSecurityPerimeterConfigurationProperties
### Properties
* **networkSecurityPerimeter**: [NetworkSecurityPerimeter](#networksecurityperimeter): Information about a network security perimeter (NSP)
* **profile**: [NetworkSecurityProfile](#networksecurityprofile): Network security perimeter configuration profile
* **provisioningIssues**: [ProvisioningIssue](#provisioningissue)[] (ReadOnly): List of provisioning issues, if any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of a network security perimeter configuration that is being created or updated.
* **resourceAssociation**: [ResourceAssociation](#resourceassociation): Information about resource association

## NetworkSecurityProfile
### Properties
* **accessRules**: [AccessRule](#accessrule)[]: List of Access Rules
* **accessRulesVersion**: int: Current access rules version
* **diagnosticSettingsVersion**: int: Current diagnostic settings version
* **enabledLogCategories**: string[]: List of log categories that are enabled
* **name**: string: Name of the profile

## NoSqlRUToNoSqlRUCopyJobTask
### Properties
* **destination**: [CosmosDBNoSqlContainer](#cosmosdbnosqlcontainer) (Required): Destination SQL container
* **processedCount**: int (ReadOnly): Task level Processed Count.
* **source**: [CosmosDBNoSqlContainer](#cosmosdbnosqlcontainer) (Required): Source SQL container
* **totalCount**: int (ReadOnly): Task level Total Count.

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
* **backupIntervalInMinutes**: int {minValue: 0}: An integer representing the interval in minutes between two backups
* **backupRetentionIntervalInHours**: int {minValue: 0}: An integer representing the time (in hours) that each backup is retained
* **backupStorageRedundancy**: 'Geo' | 'Local' | 'Zone' | string: Enum to indicate type of backup residency

## Permission
### Properties
* **dataActions**: string[]: An array of data actions that are allowed.
* **notDataActions**: string[]: An array of data actions that are denied.

## PermissionAutoGenerated
### Properties
* **dataActions**: string[]: An array of data actions that are allowed.
* **id**: string: The id for the permission.
* **notDataActions**: string[]: An array of data actions that are denied.

## PermissionAutoGenerated2
### Properties
* **dataActions**: string[]: An array of data actions that are allowed.
* **id**: string: The id for the permission.
* **notDataActions**: string[]: An array of data actions that are denied.

## PermissionAutoGenerated3
### Properties
* **dataActions**: string[]: An array of data actions that are allowed.
* **id**: string: The id for the permission.
* **notDataActions**: string[]: An array of data actions that are denied.

## PermissionAutoGenerated4
### Properties
* **dataActions**: string[]: An array of data actions that are allowed.
* **id**: string: The id for the permission.
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

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): The private link resource required zone names.

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

## ProvisioningIssue
### Properties
* **name**: string (ReadOnly): Name of the issue
* **properties**: [ProvisioningIssueProperties](#provisioningissueproperties) (ReadOnly): Details of a provisioning issue for a network security perimeter (NSP) configuration. Resource providers should generate separate provisioning issue elements for each separate issue detected, and include a meaningful and distinctive description, as well as any appropriate suggestedResourceIds and suggestedAccessRules

## ProvisioningIssueProperties
### Properties
* **description**: string (ReadOnly): Description of the issue
* **issueType**: 'ConfigurationPropagationFailure' | 'MissingIdentityConfiguration' | 'MissingPerimeterConfiguration' | 'Unknown' | string (ReadOnly): Type of issue
* **severity**: 'Error' | 'Warning' | string (ReadOnly): Severity of the issue.
* **suggestedAccessRules**: [AccessRule](#accessrule)[] (ReadOnly): Access rules that can be added to the network security profile (NSP) to remediate the issue.
* **suggestedResourceIds**: string[] (ReadOnly): Fully qualified resource IDs of suggested resources that can be associated to the network security perimeter (NSP) to remediate the issue.

## ResourceAssociation
### Properties
* **accessMode**: 'Audit' | 'Enforced' | 'Learning' | string: Access mode of the resource association
* **name**: string: Name of the resource association

## ResourceRestoreParameters
### Properties
* **restoreSource**: string: The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
* **restoreTimestampInUtc**: string: Time to which the account has to be restored (ISO-8601 format).
* **restoreWithTtlDisabled**: bool: Specifies whether the restored account will have Time-To-Live disabled upon the successful restore.

## RestoreParameters
### Properties
* **databasesToRestore**: [DatabaseRestoreResource](#databaserestoreresource)[]: List of specific databases available for restore.
* **gremlinDatabasesToRestore**: [GremlinDatabaseRestoreResource](#gremlindatabaserestoreresource)[]: List of specific gremlin databases available for restore.
* **restoreMode**: 'PointInTime' | string: Describes the mode of the restore.
* **restoreSource**: string: The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
* **restoreTimestampInUtc**: string: Time to which the account has to be restored (ISO-8601 format).
* **restoreWithTtlDisabled**: bool: Specifies whether the restored account will have Time-To-Live disabled upon the successful restore.
* **sourceBackupLocation**: string: The source backup location for restore.
* **tablesToRestore**: string[]: List of specific tables available for restore.

## Role
### Properties
* **db**: string: The database name the role is applied.
* **role**: string: The role name.

## SeedNode
### Properties
* **ipAddress**: string: IP address of this seed node.

## ServiceResourceCreateUpdatePropertiesOrServiceResourceProperties
* **Discriminator**: serviceType

### Base Properties
* **creationTime**: string (ReadOnly): Time of the last state change (ISO-8601 format).
* **instanceCount**: int {minValue: 0}: Instance count for the service.
* **instanceSize**: 'Cosmos.D16s' | 'Cosmos.D4s' | 'Cosmos.D8s' | string: Instance type for the service.
* **status**: 'Creating' | 'Deleting' | 'Error' | 'Running' | 'Stopped' | 'Updating' | string (ReadOnly): Describes the status of a service.

### DataTransferServiceResourceCreateUpdatePropertiesOrDataTransferServiceResourceProperties
#### Properties
* **locations**: [DataTransferRegionalServiceResource](#datatransferregionalserviceresource)[] (ReadOnly): An array that contains all of the locations for the service.
* **serviceType**: 'DataTransfer' (Required): ServiceType for the service.

### GraphAPIComputeServiceResourceCreateUpdatePropertiesOrGraphAPIComputeServiceResourceProperties
#### Properties
* **graphApiComputeEndpoint**: string (ReadOnly): GraphAPICompute endpoint for the service.
* **locations**: [GraphAPIComputeRegionalServiceResource](#graphapicomputeregionalserviceresource)[] (ReadOnly): An array that contains all of the locations for the service.
* **serviceType**: 'GraphAPICompute' (Required): ServiceType for the service.

### MaterializedViewsBuilderServiceResourceCreateUpdatePropertiesOrMaterializedViewsBuilderServiceResourceProperties
#### Properties
* **locations**: [MaterializedViewsBuilderRegionalServiceResource](#materializedviewsbuilderregionalserviceresource)[] (ReadOnly): An array that contains all of the locations for the service.
* **serviceType**: 'MaterializedViewsBuilder' (Required): ServiceType for the service.

### SqlDedicatedGatewayServiceResourceCreateUpdatePropertiesOrSqlDedicatedGatewayServiceResourceProperties
#### Properties
* **dedicatedGatewayType**: 'DistributedQuery' | 'IntegratedCache' | string: DedicatedGatewayType for the service.
* **locations**: [SqlDedicatedGatewayRegionalServiceResource](#sqldedicatedgatewayregionalserviceresource)[] (ReadOnly): An array that contains all of the locations for the service.
* **serviceType**: 'SqlDedicatedGateway' (Required): ServiceType for the service.
* **sqlDedicatedGatewayEndpoint**: string (ReadOnly): SqlDedicatedGateway endpoint for the service.


## ShardKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SpatialSpec
### Properties
* **path**: string: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
* **types**: ('LineString' | 'MultiPolygon' | 'Point' | 'Polygon' | string)[]: List of path's spatial type

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
* **computedProperties**: [ComputedProperty](#computedproperty)[]: List of computed properties
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy): The conflict resolution policy for the container.
* **createMode**: 'Default' | 'Restore' | string: Enum to indicate the mode of resource creation.
* **defaultTtl**: int: Default time to live
* **fullTextPolicy**: [FullTextPolicy](#fulltextpolicy): The FullText policy for the container.
* **id**: string (Required): Name of the Cosmos DB SQL container
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy): The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container
* **materializedViewDefinition**: [MaterializedViewDefinition](#materializedviewdefinition): The configuration for defining Materialized Views. This must be specified only for creating a Materialized View container.
* **materializedViews**: [MaterializedViewDetails](#materializedviewdetails)[]: Materialized Views defined on the container.
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey): The configuration of the partition key to be used for partitioning data into multiple partitions
* **restoreParameters**: [ResourceRestoreParameters](#resourcerestoreparameters): Parameters to indicate the information about the restore
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy): The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
* **vectorEmbeddingPolicy**: [VectorEmbeddingPolicy](#vectorembeddingpolicy): The vector embedding policy for the container.

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
* **createMode**: 'Default' | 'Restore' | string: Enum to indicate the mode of resource creation.
* **id**: string (Required): Name of the Cosmos DB SQL database
* **restoreParameters**: [ResourceRestoreParameters](#resourcerestoreparameters): Parameters to indicate the information about the restore

## SqlDedicatedGatewayRegionalServiceResource
### Properties
* **location**: string (ReadOnly): The location name.
* **name**: string (ReadOnly): The regional service name.
* **sqlDedicatedGatewayEndpoint**: string (ReadOnly): The regional endpoint for SqlDedicatedGateway.
* **status**: 'Creating' | 'Deleting' | 'Error' | 'Running' | 'Stopped' | 'Updating' | string (ReadOnly): Describes the status of a service.

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
* **createMode**: 'Default' | 'Restore' | string: Enum to indicate the mode of resource creation.
* **id**: string (Required): Name of the Cosmos DB table
* **restoreParameters**: [ResourceRestoreParameters](#resourcerestoreparameters): Parameters to indicate the information about the restore

## TableRoleAssignmentResourceProperties
### Properties
* **principalId**: string: The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Table Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource.
* **roleDefinitionId**: string: The unique identifier for the associated Role Definition.
* **scope**: string: The data plane resource path for which access is being granted through this Table Role Assignment.

## TableRoleDefinitionResourceProperties
### Properties
* **assignableScopes**: string[]: A set of fully qualified Scopes at or below which Table Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
* **id**: string: The path id for the Role Definition.
* **permissions**: [PermissionAutoGenerated](#permissionautogenerated)[]: The set of operations allowed through this Role Definition.
* **roleName**: string: A user-friendly name for the Role Definition. Must be unique for the database account.
* **type**: 'BuiltInRole' | 'CustomRole': Indicates whether the Role Definition was built-in or user created.

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

## ThroughputBucketResource
### Properties
* **id**: int (Required): Represents the throughput bucket id
* **maxThroughputPercentage**: int (Required): Represents maximum percentage throughput that can be used by the bucket

## ThroughputPolicyResource
### Properties
* **incrementPercent**: int: Represents the percentage by which throughput can increase every time throughput policy kicks in.
* **isEnabled**: bool: Determines whether the ThroughputPolicy is active or not

## ThroughputPoolAccountProperties
### Properties
* **accountInstanceId**: string (ReadOnly): The instance id of global database account in the throughputPool.
* **accountLocation**: string: The location of  global database account in the throughputPool.
* **accountResourceIdentifier**: string: The resource identifier of global database account in the throughputPool.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Initializing' | 'InternallyReady' | 'Online' | 'Succeeded' | 'Uninitialized' | 'Updating' | string: A provisioning state of the ThroughputPool Account.

## ThroughputPoolProperties
### Properties
* **maxThroughput**: int: Value for throughput to be shared among CosmosDB resources in the pool.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Initializing' | 'InternallyReady' | 'Online' | 'Succeeded' | 'Uninitialized' | 'Updating' | string: A provisioning state of the ThroughputPool.

## ThroughputSettingsResourceOrThroughputSettingsGetPropertiesResource
### Properties
* **_etag**: string (ReadOnly): A system generated property representing the resource etag required for optimistic concurrency control.
* **_rid**: string (ReadOnly): A system generated property. A unique identifier.
* **_ts**: int (ReadOnly): A system generated property that denotes the last updated timestamp of the resource.
* **autoscaleSettings**: [AutoscaleSettingsResource](#autoscalesettingsresource): Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both.
* **instantMaximumThroughput**: string (ReadOnly): The offer throughput value to instantly scale up without triggering splits
* **minimumThroughput**: string (ReadOnly): The minimum throughput of the resource
* **offerReplacePending**: string (ReadOnly): The throughput replace is pending
* **softAllowedMaximumThroughput**: string (ReadOnly): The maximum throughput value or the maximum maxThroughput value (for autoscale) that can be specified
* **throughput**: int: Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both.
* **throughputBuckets**: [ThroughputBucketResource](#throughputbucketresource)[]: Array of Throughput Bucket limits to be applied to the Cosmos DB container

## ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties
### Properties
* **resource**: [ThroughputSettingsResourceOrThroughputSettingsGetPropertiesResource](#throughputsettingsresourceorthroughputsettingsgetpropertiesresource) (Required): The standard JSON format of a resource throughput

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UniqueKey
### Properties
* **paths**: string[]: List of paths must be unique for each document in the Azure Cosmos DB service

## UniqueKeyPolicy
### Properties
* **uniqueKeys**: [UniqueKey](#uniquekey)[]: List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.

## VectorEmbedding
### Properties
* **dataType**: 'float32' | 'int8' | 'uint8' | string (Required): Indicates the data type of vector.
* **dimensions**: int (Required): The number of dimensions in the vector.
* **distanceFunction**: 'cosine' | 'dotproduct' | 'euclidean' | string (Required): The distance function to use for distance calculation in between vectors.
* **path**: string (Required): The path to the vector field in the document.

## VectorEmbeddingPolicy
### Properties
* **vectorEmbeddings**: [VectorEmbedding](#vectorembedding)[]: List of vector embeddings

## VectorIndex
### Properties
* **path**: string (Required): The path to the vector field in the document.
* **type**: 'diskANN' | 'flat' | 'quantizedFlat' | string (Required): The index type of the vector. Currently, flat, diskANN, and quantizedFlat are supported.

## VirtualNetworkRule
### Properties
* **id**: string: Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.
* **ignoreMissingVNetServiceEndpoint**: bool: Create firewall rule before the virtual network has vnet service endpoint enabled.

