# Microsoft.DataFactory @ 2018-06-01

## Resource Microsoft.DataFactory/factories@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [FactoryIdentity](#factoryidentity): Identity properties of the factory resource.
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FactoryProperties](#factoryproperties): Factory resource properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The resource tags.
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/dataflows@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataFlow](#dataflow) (Required): Azure Data Factory nested object which contains a flow with data movements and transformations.
* **type**: 'Microsoft.DataFactory/factories/dataflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/datasets@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Dataset](#dataset) (Required): The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents.
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationRuntime](#integrationruntime) (Required): Azure Data Factory nested object which serves as a compute resource for activities.
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/linkedservices@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedService](#linkedservice) (Required): The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource.
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedVirtualNetwork](#managedvirtualnetwork) (Required): A managed Virtual Network associated with the Azure Data Factory
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedPrivateEndpoint](#managedprivateendpoint) (Required): Properties of a managed private endpoint
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/pipelines@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Pipeline](#pipeline) (Required): A data factory pipeline.
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.DataFactory/factories/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/triggers@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Trigger](#trigger) (Required): Azure data factory nested object which contains information about creating pipeline run
* **type**: 'Microsoft.DataFactory/factories/triggers' (ReadOnly, DeployTimeConstant): The resource type

## FactoryIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity.
* **tenantId**: string (ReadOnly): The client tenant id of the identity.
* **type**: 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned' (Required): The identity type.
* **userAssignedIdentities**: [Dictionary<string,Object>](#dictionarystringobject): Definition of all user assigned identities for a factory.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## FactoryProperties
### Properties
* **createTime**: string (ReadOnly): Time the factory was created in ISO8601 format.
* **encryption**: [EncryptionConfiguration](#encryptionconfiguration): Definition of CMK for the factory.
* **globalParameters**: [Dictionary<string,GlobalParameterSpecification>](#dictionarystringglobalparameterspecification): Definition of all parameters for an entity.
* **provisioningState**: string (ReadOnly): Factory provisioning state, example Succeeded.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Whether or not public network access is allowed for the data factory.
* **repoConfiguration**: [FactoryRepoConfiguration](#factoryrepoconfiguration): Factory's git repo information.
* **version**: string (ReadOnly): Version of the factory.

## EncryptionConfiguration
### Properties
* **identity**: [CMKIdentityDefinition](#cmkidentitydefinition): Managed Identity used for CMK.
* **keyName**: string (Required): The name of the key in Azure Key Vault to use as Customer Managed Key.
* **keyVersion**: string: The version of the key used for CMK. If not provided, latest version will be used.
* **vaultBaseUrl**: string (Required): The url of the Azure Key Vault used for CMK.

## CMKIdentityDefinition
### Properties
* **userAssignedIdentity**: string: The resource id of the user assigned identity to authenticate to customer's key vault.

## Dictionary<string,GlobalParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [GlobalParameterSpecification](#globalparameterspecification)

## GlobalParameterSpecification
### Properties
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'String' (Required): Global Parameter type.
* **value**: any (Required): Value of parameter.

## FactoryRepoConfiguration
* **Discriminator**: type
### Base Properties
* **accountName**: string (Required): Account name.
* **collaborationBranch**: string (Required): Collaboration branch.
* **lastCommitId**: string: Last commit id.
* **repositoryName**: string (Required): Repository name.
* **rootFolder**: string (Required): Root folder.
### FactoryGitHubConfiguration
#### Properties
* **hostName**: string: GitHub Enterprise host name. For example: https://github.mydomain.com
* **type**: 'FactoryGitHubConfiguration' (Required): Factory's GitHub repo information.

### FactoryVSTSConfiguration
#### Properties
* **projectName**: string (Required): VSTS project name.
* **tenantId**: string: VSTS tenant id.
* **type**: 'FactoryVSTSConfiguration' (Required): Factory's VSTS repo information.


## FactoryGitHubConfiguration
### Properties
* **hostName**: string: GitHub Enterprise host name. For example: https://github.mydomain.com
* **type**: 'FactoryGitHubConfiguration' (Required): Factory's GitHub repo information.

## FactoryVSTSConfiguration
### Properties
* **projectName**: string (Required): VSTS project name.
* **tenantId**: string: VSTS tenant id.
* **type**: 'FactoryVSTSConfiguration' (Required): Factory's VSTS repo information.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataFlow
* **Discriminator**: type
### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the data flow.
* **description**: string: The description of the data flow.
* **folder**: [schemas:117_folder](#schemas117folder): The folder that this data flow is in. If not specified, Data flow will appear at the root level.
### MappingDataFlow
#### Properties
* **type**: 'MappingDataFlow' (Required): Mapping data flow.
* **typeProperties**: [MappingDataFlowTypeProperties](#mappingdataflowtypeproperties): Mapping data flow type properties.


## schemas:117_folder
### Properties
* **name**: string: The name of the folder that this data flow is in.

## MappingDataFlow
### Properties
* **type**: 'MappingDataFlow' (Required): Mapping data flow.
* **typeProperties**: [MappingDataFlowTypeProperties](#mappingdataflowtypeproperties): Mapping data flow type properties.

## MappingDataFlowTypeProperties
### Properties
* **script**: string: DataFlow script.
* **sinks**: [DataFlowSink](#dataflowsink)[]: List of sinks in data flow.
* **sources**: [DataFlowSource](#dataflowsource)[]: List of sources in data flow.
* **transformations**: [Transformation](#transformation)[]: List of transformations in data flow.

## DataFlowSink
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference type.
* **description**: string: Transformation description.
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **name**: string (Required): Transformation name.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.

## DatasetReference
### Properties
* **parameters**: [Dictionary<string,Object>](#dictionarystringobject): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference dataset name.
* **type**: string (Required): Dataset reference type.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## LinkedServiceReference
### Properties
* **parameters**: [Dictionary<string,Object>](#dictionarystringobject): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference LinkedService name.
* **type**: string (Required): Linked service reference type.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DataFlowSource
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference type.
* **description**: string: Transformation description.
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **name**: string (Required): Transformation name.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.

## Transformation
### Properties
* **description**: string: Transformation description.
* **name**: string (Required): Transformation name.

## Dataset
* **Discriminator**: type
### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
* **description**: string: Dataset description.
* **folder**: [schemas:123_folder](#schemas123folder): The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification): Definition of all parameters for an entity.
* **schema**: any: Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
* **structure**: any: Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
### AmazonMWSObject
#### Properties
* **type**: 'AmazonMWSObject' (Required): Amazon Marketplace Web Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### AmazonRedshiftTable
#### Properties
* **type**: 'AmazonRedshiftTable' (Required): The Amazon Redshift table dataset.
* **typeProperties**: [AmazonRedshiftTableDatasetTypeProperties](#amazonredshifttabledatasettypeproperties): Amazon Redshift table dataset properties.

### AmazonS3Object
#### Properties
* **type**: 'AmazonS3Object' (Required): A single Amazon Simple Storage Service (S3) object or a set of S3 objects.
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required): Amazon S3 dataset properties.

### Avro
#### Properties
* **type**: 'Avro' (Required): Avro dataset.
* **typeProperties**: [AvroDatasetTypeProperties](#avrodatasettypeproperties): Avro dataset properties.

### AzureBlob
#### Properties
* **type**: 'AzureBlob' (Required): The Azure Blob storage.
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties): Azure Blob dataset properties.

### AzureBlobFSFile
#### Properties
* **type**: 'AzureBlobFSFile' (Required): The Azure Data Lake Storage Gen2 storage.
* **typeProperties**: [AzureBlobFSDatasetTypeProperties](#azureblobfsdatasettypeproperties): Azure Data Lake Storage Gen2 dataset properties.

### AzureDatabricksDeltaLakeDataset
#### Properties
* **type**: 'AzureDatabricksDeltaLakeDataset' (Required): Azure Databricks Delta Lake dataset.
* **typeProperties**: [AzureDatabricksDeltaLakeDatasetTypeProperties](#azuredatabricksdeltalakedatasettypeproperties): Azure Databricks Delta Lake Dataset Properties

### AzureDataExplorerTable
#### Properties
* **type**: 'AzureDataExplorerTable' (Required): The Azure Data Explorer (Kusto) dataset.
* **typeProperties**: [AzureDataExplorerDatasetTypeProperties](#azuredataexplorerdatasettypeproperties) (Required): Azure Data Explorer (Kusto) dataset properties.

### AzureDataLakeStoreFile
#### Properties
* **type**: 'AzureDataLakeStoreFile' (Required): Azure Data Lake Store dataset.
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties): Azure Data Lake Store dataset properties.

### AzureMariaDBTable
#### Properties
* **type**: 'AzureMariaDBTable' (Required): Azure Database for MariaDB dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### AzureMySqlTable
#### Properties
* **type**: 'AzureMySqlTable' (Required): The Azure MySQL database dataset.
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required): Azure MySQL database dataset properties.

### AzurePostgreSqlTable
#### Properties
* **type**: 'AzurePostgreSqlTable' (Required): Azure PostgreSQL dataset.
* **typeProperties**: [AzurePostgreSqlTableDatasetTypeProperties](#azurepostgresqltabledatasettypeproperties): Azure PostgreSQL dataset properties.

### AzureSearchIndex
#### Properties
* **type**: 'AzureSearchIndex' (Required): The Azure Search Index.
* **typeProperties**: [AzureSearchIndexDatasetTypeProperties](#azuresearchindexdatasettypeproperties) (Required): Properties specific to this dataset type.

### AzureSqlDWTable
#### Properties
* **type**: 'AzureSqlDWTable' (Required): The Azure SQL Data Warehouse dataset.
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties): Azure SQL Data Warehouse dataset properties.

### AzureSqlMITable
#### Properties
* **type**: 'AzureSqlMITable' (Required): The Azure SQL Managed Instance dataset.
* **typeProperties**: [AzureSqlMITableDatasetTypeProperties](#azuresqlmitabledatasettypeproperties): Azure SQL Managed Instance dataset properties.

### AzureSqlTable
#### Properties
* **type**: 'AzureSqlTable' (Required): The Azure SQL Server database dataset.
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties): Azure SQL dataset properties.

### AzureTable
#### Properties
* **type**: 'AzureTable' (Required): The Azure Table storage dataset.
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required): Azure Table dataset properties.

### Binary
#### Properties
* **type**: 'Binary' (Required): Binary dataset.
* **typeProperties**: [BinaryDatasetTypeProperties](#binarydatasettypeproperties): Binary dataset properties.

### CassandraTable
#### Properties
* **type**: 'CassandraTable' (Required): The Cassandra database dataset.
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties): Cassandra dataset properties.

### CommonDataServiceForAppsEntity
#### Properties
* **type**: 'CommonDataServiceForAppsEntity' (Required): The Common Data Service for Apps entity dataset.
* **typeProperties**: [CommonDataServiceForAppsEntityDatasetTypeProperties](#commondataserviceforappsentitydatasettypeproperties): Common Data Service for Apps entity dataset properties.

### ConcurObject
#### Properties
* **type**: 'ConcurObject' (Required): Concur Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### CosmosDbMongoDbApiCollection
#### Properties
* **type**: 'CosmosDbMongoDbApiCollection' (Required): The CosmosDB (MongoDB API) database dataset.
* **typeProperties**: [CosmosDbMongoDbApiCollectionDatasetTypeProperties](#cosmosdbmongodbapicollectiondatasettypeproperties) (Required): CosmosDB (MongoDB API) database dataset properties.

### CosmosDbSqlApiCollection
#### Properties
* **type**: 'CosmosDbSqlApiCollection' (Required): Microsoft Azure CosmosDB (SQL API) Collection dataset.
* **typeProperties**: [CosmosDbSqlApiCollectionDatasetTypeProperties](#cosmosdbsqlapicollectiondatasettypeproperties) (Required): CosmosDB (SQL API) Collection dataset properties.

### CouchbaseTable
#### Properties
* **type**: 'CouchbaseTable' (Required): Couchbase server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### CustomDataset
#### Properties
* **type**: 'CustomDataset' (Required): The custom dataset.
* **typeProperties**: any: Custom dataset properties.

### Db2Table
#### Properties
* **type**: 'Db2Table' (Required): The Db2 table dataset.
* **typeProperties**: [Db2TableDatasetTypeProperties](#db2tabledatasettypeproperties): Db2 table dataset properties.

### DelimitedText
#### Properties
* **type**: 'DelimitedText' (Required): Delimited text dataset.
* **typeProperties**: [DelimitedTextDatasetTypeProperties](#delimitedtextdatasettypeproperties): DelimitedText dataset properties.

### DocumentDbCollection
#### Properties
* **type**: 'DocumentDbCollection' (Required): Microsoft Azure Document Database Collection dataset.
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required): DocumentDB Collection dataset properties.

### DrillTable
#### Properties
* **type**: 'DrillTable' (Required): Drill server dataset.
* **typeProperties**: [DrillDatasetTypeProperties](#drilldatasettypeproperties): Drill Dataset Properties

### DynamicsAXResource
#### Properties
* **type**: 'DynamicsAXResource' (Required): The path of the Dynamics AX OData entity.
* **typeProperties**: [DynamicsAXResourceDatasetTypeProperties](#dynamicsaxresourcedatasettypeproperties) (Required): Dynamics AX OData resource dataset properties.

### DynamicsCrmEntity
#### Properties
* **type**: 'DynamicsCrmEntity' (Required): The Dynamics CRM entity dataset.
* **typeProperties**: [DynamicsCrmEntityDatasetTypeProperties](#dynamicscrmentitydatasettypeproperties): Dynamics CRM entity dataset properties.

### DynamicsEntity
#### Properties
* **type**: 'DynamicsEntity' (Required): The Dynamics entity dataset.
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties): Dynamics entity dataset properties.

### EloquaObject
#### Properties
* **type**: 'EloquaObject' (Required): Eloqua server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### Excel
#### Properties
* **type**: 'Excel' (Required): Excel dataset.
* **typeProperties**: [ExcelDatasetTypeProperties](#exceldatasettypeproperties): Excel dataset properties.

### FileShare
#### Properties
* **type**: 'FileShare' (Required): An on-premises file system dataset.
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties): On-premises file system dataset properties.

### GoogleAdWordsObject
#### Properties
* **type**: 'GoogleAdWordsObject' (Required): Google AdWords service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### GoogleBigQueryObject
#### Properties
* **type**: 'GoogleBigQueryObject' (Required): Google BigQuery service dataset.
* **typeProperties**: [GoogleBigQueryDatasetTypeProperties](#googlebigquerydatasettypeproperties): Google BigQuery Dataset Properties

### GreenplumTable
#### Properties
* **type**: 'GreenplumTable' (Required): Greenplum Database dataset.
* **typeProperties**: [GreenplumDatasetTypeProperties](#greenplumdatasettypeproperties): Greenplum Dataset Properties

### HBaseObject
#### Properties
* **type**: 'HBaseObject' (Required): HBase server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### HiveObject
#### Properties
* **type**: 'HiveObject' (Required): Hive Server dataset.
* **typeProperties**: [HiveDatasetTypeProperties](#hivedatasettypeproperties): Hive Properties

### HttpFile
#### Properties
* **type**: 'HttpFile' (Required): A file in an HTTP web server.
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties): Properties specific to this dataset type.

### HubspotObject
#### Properties
* **type**: 'HubspotObject' (Required): Hubspot Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### ImpalaObject
#### Properties
* **type**: 'ImpalaObject' (Required): Impala server dataset.
* **typeProperties**: [ImpalaDatasetTypeProperties](#impaladatasettypeproperties): Impala Dataset Properties

### InformixTable
#### Properties
* **type**: 'InformixTable' (Required): The Informix table dataset.
* **typeProperties**: [InformixTableDatasetTypeProperties](#informixtabledatasettypeproperties): Informix table dataset properties.

### JiraObject
#### Properties
* **type**: 'JiraObject' (Required): Jira Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### Json
#### Properties
* **type**: 'Json' (Required): Json dataset.
* **typeProperties**: [JsonDatasetTypeProperties](#jsondatasettypeproperties): Json dataset properties.

### MagentoObject
#### Properties
* **type**: 'MagentoObject' (Required): Magento server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### MariaDBTable
#### Properties
* **type**: 'MariaDBTable' (Required): MariaDB server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### MarketoObject
#### Properties
* **type**: 'MarketoObject' (Required): Marketo server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### MicrosoftAccessTable
#### Properties
* **type**: 'MicrosoftAccessTable' (Required): The Microsoft Access table dataset.
* **typeProperties**: [MicrosoftAccessTableDatasetTypeProperties](#microsoftaccesstabledatasettypeproperties): Microsoft Access table dataset properties.

### MongoDbAtlasCollection
#### Properties
* **type**: 'MongoDbAtlasCollection' (Required): The MongoDB Atlas database dataset.
* **typeProperties**: [MongoDbAtlasCollectionDatasetTypeProperties](#mongodbatlascollectiondatasettypeproperties) (Required): MongoDB Atlas database dataset properties.

### MongoDbCollection
#### Properties
* **type**: 'MongoDbCollection' (Required): The MongoDB database dataset.
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required): MongoDB database dataset properties.

### MongoDbV2Collection
#### Properties
* **type**: 'MongoDbV2Collection' (Required): The MongoDB database dataset.
* **typeProperties**: [MongoDbV2CollectionDatasetTypeProperties](#mongodbv2collectiondatasettypeproperties) (Required): MongoDB database dataset properties.

### MySqlTable
#### Properties
* **type**: 'MySqlTable' (Required): The MySQL table dataset.
* **typeProperties**: [MySqlTableDatasetTypeProperties](#mysqltabledatasettypeproperties): MySql table dataset properties.

### NetezzaTable
#### Properties
* **type**: 'NetezzaTable' (Required): Netezza dataset.
* **typeProperties**: [NetezzaTableDatasetTypeProperties](#netezzatabledatasettypeproperties): Netezza dataset properties.

### ODataResource
#### Properties
* **type**: 'ODataResource' (Required): The Open Data Protocol (OData) resource dataset.
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties): OData dataset properties.

### OdbcTable
#### Properties
* **type**: 'OdbcTable' (Required): The ODBC table dataset.
* **typeProperties**: [OdbcTableDatasetTypeProperties](#odbctabledatasettypeproperties): ODBC table dataset properties.

### Office365Table
#### Properties
* **type**: 'Office365Table' (Required): The Office365 account.
* **typeProperties**: [Office365DatasetTypeProperties](#office365datasettypeproperties) (Required): Office365 dataset properties.

### OracleServiceCloudObject
#### Properties
* **type**: 'OracleServiceCloudObject' (Required): Oracle Service Cloud dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### OracleTable
#### Properties
* **type**: 'OracleTable' (Required): The on-premises Oracle database dataset.
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties): On-premises Oracle dataset properties.

### Orc
#### Properties
* **type**: 'Orc' (Required): ORC dataset.
* **typeProperties**: [OrcDatasetTypeProperties](#orcdatasettypeproperties): ORC dataset properties.

### Parquet
#### Properties
* **type**: 'Parquet' (Required): Parquet dataset.
* **typeProperties**: [ParquetDatasetTypeProperties](#parquetdatasettypeproperties): Parquet dataset properties.

### PaypalObject
#### Properties
* **type**: 'PaypalObject' (Required): Paypal Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### PhoenixObject
#### Properties
* **type**: 'PhoenixObject' (Required): Phoenix server dataset.
* **typeProperties**: [PhoenixDatasetTypeProperties](#phoenixdatasettypeproperties): Phoenix Dataset Properties

### PostgreSqlTable
#### Properties
* **type**: 'PostgreSqlTable' (Required): The PostgreSQL table dataset.
* **typeProperties**: [PostgreSqlTableDatasetTypeProperties](#postgresqltabledatasettypeproperties): PostgreSQL table dataset properties.

### PrestoObject
#### Properties
* **type**: 'PrestoObject' (Required): Presto server dataset.
* **typeProperties**: [PrestoDatasetTypeProperties](#prestodatasettypeproperties): Presto Dataset Properties

### QuickBooksObject
#### Properties
* **type**: 'QuickBooksObject' (Required): QuickBooks server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### RelationalTable
#### Properties
* **type**: 'RelationalTable' (Required): The relational table dataset.
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties): Relational table dataset properties.

### ResponsysObject
#### Properties
* **type**: 'ResponsysObject' (Required): Responsys dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### RestResource
#### Properties
* **type**: 'RestResource' (Required): A Rest service dataset.
* **typeProperties**: [RestResourceDatasetTypeProperties](#restresourcedatasettypeproperties): Properties specific to this dataset type.

### SalesforceMarketingCloudObject
#### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required): Salesforce Marketing Cloud dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SalesforceObject
#### Properties
* **type**: 'SalesforceObject' (Required): The Salesforce object dataset.
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties): Salesforce object dataset properties.

### SalesforceServiceCloudObject
#### Properties
* **type**: 'SalesforceServiceCloudObject' (Required): The Salesforce Service Cloud object dataset.
* **typeProperties**: [SalesforceServiceCloudObjectDatasetTypeProperties](#salesforceservicecloudobjectdatasettypeproperties): Salesforce Service Cloud object dataset properties.

### SapBwCube
#### Properties
* **type**: 'SapBwCube' (Required): The SAP BW cube dataset.

### SapCloudForCustomerResource
#### Properties
* **type**: 'SapCloudForCustomerResource' (Required): The path of the SAP Cloud for Customer OData entity.
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required): Sap Cloud For Customer OData resource dataset properties.

### SapEccResource
#### Properties
* **type**: 'SapEccResource' (Required): The path of the SAP ECC OData entity.
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required): Sap ECC OData resource dataset properties.

### SapHanaTable
#### Properties
* **type**: 'SapHanaTable' (Required): SAP HANA Table properties.
* **typeProperties**: [SapHanaTableDatasetTypeProperties](#saphanatabledatasettypeproperties): SAP HANA Table properties.

### SapOpenHubTable
#### Properties
* **type**: 'SapOpenHubTable' (Required): Sap Business Warehouse Open Hub Destination Table properties.
* **typeProperties**: [SapOpenHubTableDatasetTypeProperties](#sapopenhubtabledatasettypeproperties) (Required): Sap Business Warehouse Open Hub Destination Table properties.

### SapTableResource
#### Properties
* **type**: 'SapTableResource' (Required): SAP Table Resource properties.
* **typeProperties**: [SapTableResourceDatasetTypeProperties](#saptableresourcedatasettypeproperties) (Required): SAP Table Resource properties.

### ServiceNowObject
#### Properties
* **type**: 'ServiceNowObject' (Required): ServiceNow server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SharePointOnlineListResource
#### Properties
* **type**: 'SharePointOnlineListResource' (Required): The sharepoint online list resource dataset.
* **typeProperties**: [SharePointOnlineListDatasetTypeProperties](#sharepointonlinelistdatasettypeproperties): Sharepoint online list dataset properties.

### ShopifyObject
#### Properties
* **type**: 'ShopifyObject' (Required): Shopify Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SnowflakeTable
#### Properties
* **type**: 'SnowflakeTable' (Required): The snowflake dataset.
* **typeProperties**: [SnowflakeDatasetTypeProperties](#snowflakedatasettypeproperties) (Required): Snowflake dataset properties.

### SparkObject
#### Properties
* **type**: 'SparkObject' (Required): Spark Server dataset.
* **typeProperties**: [SparkDatasetTypeProperties](#sparkdatasettypeproperties): Spark Properties

### SqlServerTable
#### Properties
* **type**: 'SqlServerTable' (Required): The on-premises SQL Server dataset.
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties): On-premises SQL Server dataset properties.

### SquareObject
#### Properties
* **type**: 'SquareObject' (Required): Square Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SybaseTable
#### Properties
* **type**: 'SybaseTable' (Required): The Sybase table dataset.
* **typeProperties**: [SybaseTableDatasetTypeProperties](#sybasetabledatasettypeproperties): Sybase table dataset properties.

### TeradataTable
#### Properties
* **type**: 'TeradataTable' (Required): The Teradata database dataset.
* **typeProperties**: [TeradataTableDatasetTypeProperties](#teradatatabledatasettypeproperties): Teradata dataset properties.

### VerticaTable
#### Properties
* **type**: 'VerticaTable' (Required): Vertica dataset.
* **typeProperties**: [VerticaDatasetTypeProperties](#verticadatasettypeproperties): Vertica Properties

### WebTable
#### Properties
* **type**: 'WebTable' (Required): The dataset points to a HTML table in the web page.
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required): Web table dataset properties.

### XeroObject
#### Properties
* **type**: 'XeroObject' (Required): Xero Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### Xml
#### Properties
* **type**: 'Xml' (Required): Xml dataset.
* **typeProperties**: [XmlDatasetTypeProperties](#xmldatasettypeproperties): Xml dataset properties.

### ZohoObject
#### Properties
* **type**: 'ZohoObject' (Required): Zoho server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.


## schemas:123_folder
### Properties
* **name**: string: The name of the folder that this Dataset is in.

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## ParameterSpecification
### Properties
* **defaultValue**: any: Default value of parameter.
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'SecureString' | 'String' (Required): Parameter type.

## AmazonMWSObject
### Properties
* **type**: 'AmazonMWSObject' (Required): Amazon Marketplace Web Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## GenericDatasetTypeProperties
### Properties
* **tableName**: any: The table name. Type: string (or Expression with resultType string).

## AmazonRedshiftTable
### Properties
* **type**: 'AmazonRedshiftTable' (Required): The Amazon Redshift table dataset.
* **typeProperties**: [AmazonRedshiftTableDatasetTypeProperties](#amazonredshifttabledatasettypeproperties): Amazon Redshift table dataset properties.

## AmazonRedshiftTableDatasetTypeProperties
### Properties
* **schema**: any: The Amazon Redshift schema name. Type: string (or Expression with resultType string).
* **table**: any: The Amazon Redshift table name. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## AmazonS3Object
### Properties
* **type**: 'AmazonS3Object' (Required): A single Amazon Simple Storage Service (S3) object or a set of S3 objects.
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required): Amazon S3 dataset properties.

## AmazonS3DatasetTypeProperties
### Properties
* **bucketName**: any (Required): The name of the Amazon S3 bucket. Type: string (or Expression with resultType string).
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **key**: any: The key of the Amazon S3 object. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of S3 object's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of S3 object's modified datetime. Type: string (or Expression with resultType string).
* **prefix**: any: The prefix filter for the S3 object name. Type: string (or Expression with resultType string).
* **version**: any: The version for the S3 object. Type: string (or Expression with resultType string).

## DatasetCompression
* **Discriminator**: type
### Base Properties
### BZip2
#### Properties
* **type**: 'BZip2' (Required): The BZip2 compression method used on a dataset.

### Deflate
#### Properties
* **level**: any: The Deflate compression level.
* **type**: 'Deflate' (Required): The Deflate compression method used on a dataset.

### GZip
#### Properties
* **level**: any: The GZip compression level.
* **type**: 'GZip' (Required): The GZip compression method used on a dataset.

### Tar
#### Properties
* **type**: 'Tar' (Required): The Tar archive method used on a dataset.

### TarGZip
#### Properties
* **level**: any: The TarGZip compression level.
* **type**: 'TarGZip' (Required): The TarGZip compression method used on a dataset.

### ZipDeflate
#### Properties
* **level**: any: The ZipDeflate compression level.
* **type**: 'ZipDeflate' (Required): The ZipDeflate compression method used on a dataset.


## BZip2
### Properties
* **type**: 'BZip2' (Required): The BZip2 compression method used on a dataset.

## Deflate
### Properties
* **level**: any: The Deflate compression level.
* **type**: 'Deflate' (Required): The Deflate compression method used on a dataset.

## GZip
### Properties
* **level**: any: The GZip compression level.
* **type**: 'GZip' (Required): The GZip compression method used on a dataset.

## Tar
### Properties
* **type**: 'Tar' (Required): The Tar archive method used on a dataset.

## TarGZip
### Properties
* **level**: any: The TarGZip compression level.
* **type**: 'TarGZip' (Required): The TarGZip compression method used on a dataset.

## ZipDeflate
### Properties
* **level**: any: The ZipDeflate compression level.
* **type**: 'ZipDeflate' (Required): The ZipDeflate compression method used on a dataset.

## DatasetStorageFormat
* **Discriminator**: type
### Base Properties
* **deserializer**: any: Deserializer. Type: string (or Expression with resultType string).
* **serializer**: any: Serializer. Type: string (or Expression with resultType string).
### AvroFormat
#### Properties
* **type**: 'AvroFormat' (Required): The data stored in Avro format.

### JsonFormat
#### Properties
* **encodingName**: any: The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string).
* **filePattern**: any: File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive.
* **jsonNodeReference**: any: The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string).
* **jsonPathDefinition**: any: The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object).
* **nestingSeparator**: any: The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string).
* **type**: 'JsonFormat' (Required): The data stored in JSON format.

### OrcFormat
#### Properties
* **type**: 'OrcFormat' (Required): The data stored in Optimized Row Columnar (ORC) format.

### ParquetFormat
#### Properties
* **type**: 'ParquetFormat' (Required): The data stored in Parquet format.

### TextFormat
#### Properties
* **columnDelimiter**: any: The column delimiter. Type: string (or Expression with resultType string).
* **encodingName**: any: The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
* **escapeChar**: any: The escape character. Type: string (or Expression with resultType string).
* **firstRowAsHeader**: any: When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
* **nullValue**: any: The null value string. Type: string (or Expression with resultType string).
* **quoteChar**: any: The quote character. Type: string (or Expression with resultType string).
* **rowDelimiter**: any: The row delimiter. Type: string (or Expression with resultType string).
* **skipLineCount**: any: The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer).
* **treatEmptyAsNull**: any: Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'TextFormat' (Required): The data stored in text format.


## AvroFormat
### Properties
* **type**: 'AvroFormat' (Required): The data stored in Avro format.

## JsonFormat
### Properties
* **encodingName**: any: The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string).
* **filePattern**: any: File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive.
* **jsonNodeReference**: any: The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string).
* **jsonPathDefinition**: any: The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object).
* **nestingSeparator**: any: The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string).
* **type**: 'JsonFormat' (Required): The data stored in JSON format.

## OrcFormat
### Properties
* **type**: 'OrcFormat' (Required): The data stored in Optimized Row Columnar (ORC) format.

## ParquetFormat
### Properties
* **type**: 'ParquetFormat' (Required): The data stored in Parquet format.

## TextFormat
### Properties
* **columnDelimiter**: any: The column delimiter. Type: string (or Expression with resultType string).
* **encodingName**: any: The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
* **escapeChar**: any: The escape character. Type: string (or Expression with resultType string).
* **firstRowAsHeader**: any: When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
* **nullValue**: any: The null value string. Type: string (or Expression with resultType string).
* **quoteChar**: any: The quote character. Type: string (or Expression with resultType string).
* **rowDelimiter**: any: The row delimiter. Type: string (or Expression with resultType string).
* **skipLineCount**: any: The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer).
* **treatEmptyAsNull**: any: Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'TextFormat' (Required): The data stored in text format.

## Avro
### Properties
* **type**: 'Avro' (Required): Avro dataset.
* **typeProperties**: [AvroDatasetTypeProperties](#avrodatasettypeproperties): Avro dataset properties.

## AvroDatasetTypeProperties
### Properties
* **avroCompressionCodec**: 'bzip2' | 'deflate' | 'none' | 'snappy' | 'xz'
* **avroCompressionLevel**: int
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.

## DatasetLocation
* **Discriminator**: type
### Base Properties
* **fileName**: any: Specify the file name of dataset. Type: string (or Expression with resultType string).
* **folderPath**: any: Specify the folder path of dataset. Type: string (or Expression with resultType string)
### AmazonS3CompatibleLocation
#### Properties
* **bucketName**: any: Specify the bucketName of Amazon S3 Compatible. Type: string (or Expression with resultType string)
* **type**: 'AmazonS3CompatibleLocation' (Required): The location of Amazon S3 Compatible dataset.
* **version**: any: Specify the version of Amazon S3 Compatible. Type: string (or Expression with resultType string).

### AmazonS3Location
#### Properties
* **bucketName**: any: Specify the bucketName of amazon S3. Type: string (or Expression with resultType string)
* **type**: 'AmazonS3Location' (Required): The location of amazon S3 dataset.
* **version**: any: Specify the version of amazon S3. Type: string (or Expression with resultType string).

### AzureBlobFSLocation
#### Properties
* **fileSystem**: any: Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string).
* **type**: 'AzureBlobFSLocation' (Required): The location of azure blobFS dataset.

### AzureBlobStorageLocation
#### Properties
* **container**: any: Specify the container of azure blob. Type: string (or Expression with resultType string).
* **type**: 'AzureBlobStorageLocation' (Required): The location of azure blob dataset.

### AzureDataLakeStoreLocation
#### Properties
* **type**: 'AzureDataLakeStoreLocation' (Required): The location of azure data lake store dataset.

### AzureFileStorageLocation
#### Properties
* **type**: 'AzureFileStorageLocation' (Required): The location of file server dataset.

### FileServerLocation
#### Properties
* **type**: 'FileServerLocation' (Required): The location of file server dataset.

### FtpServerLocation
#### Properties
* **type**: 'FtpServerLocation' (Required): The location of ftp server dataset.

### GoogleCloudStorageLocation
#### Properties
* **bucketName**: any: Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string)
* **type**: 'GoogleCloudStorageLocation' (Required): The location of Google Cloud Storage dataset.
* **version**: any: Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string).

### HdfsLocation
#### Properties
* **type**: 'HdfsLocation' (Required): The location of HDFS.

### HttpServerLocation
#### Properties
* **relativeUrl**: any: Specify the relativeUrl of http server. Type: string (or Expression with resultType string)
* **type**: 'HttpServerLocation' (Required): The location of http server.

### OracleCloudStorageLocation
#### Properties
* **bucketName**: any: Specify the bucketName of Oracle Cloud Storage. Type: string (or Expression with resultType string)
* **type**: 'OracleCloudStorageLocation' (Required): The location of Oracle Cloud Storage dataset.
* **version**: any: Specify the version of Oracle Cloud Storage. Type: string (or Expression with resultType string).

### SftpLocation
#### Properties
* **type**: 'SftpLocation' (Required): The location of SFTP dataset.


## AmazonS3CompatibleLocation
### Properties
* **bucketName**: any: Specify the bucketName of Amazon S3 Compatible. Type: string (or Expression with resultType string)
* **type**: 'AmazonS3CompatibleLocation' (Required): The location of Amazon S3 Compatible dataset.
* **version**: any: Specify the version of Amazon S3 Compatible. Type: string (or Expression with resultType string).

## AmazonS3Location
### Properties
* **bucketName**: any: Specify the bucketName of amazon S3. Type: string (or Expression with resultType string)
* **type**: 'AmazonS3Location' (Required): The location of amazon S3 dataset.
* **version**: any: Specify the version of amazon S3. Type: string (or Expression with resultType string).

## AzureBlobFSLocation
### Properties
* **fileSystem**: any: Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string).
* **type**: 'AzureBlobFSLocation' (Required): The location of azure blobFS dataset.

## AzureBlobStorageLocation
### Properties
* **container**: any: Specify the container of azure blob. Type: string (or Expression with resultType string).
* **type**: 'AzureBlobStorageLocation' (Required): The location of azure blob dataset.

## AzureDataLakeStoreLocation
### Properties
* **type**: 'AzureDataLakeStoreLocation' (Required): The location of azure data lake store dataset.

## AzureFileStorageLocation
### Properties
* **type**: 'AzureFileStorageLocation' (Required): The location of file server dataset.

## FileServerLocation
### Properties
* **type**: 'FileServerLocation' (Required): The location of file server dataset.

## FtpServerLocation
### Properties
* **type**: 'FtpServerLocation' (Required): The location of ftp server dataset.

## GoogleCloudStorageLocation
### Properties
* **bucketName**: any: Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string)
* **type**: 'GoogleCloudStorageLocation' (Required): The location of Google Cloud Storage dataset.
* **version**: any: Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string).

## HdfsLocation
### Properties
* **type**: 'HdfsLocation' (Required): The location of HDFS.

## HttpServerLocation
### Properties
* **relativeUrl**: any: Specify the relativeUrl of http server. Type: string (or Expression with resultType string)
* **type**: 'HttpServerLocation' (Required): The location of http server.

## OracleCloudStorageLocation
### Properties
* **bucketName**: any: Specify the bucketName of Oracle Cloud Storage. Type: string (or Expression with resultType string)
* **type**: 'OracleCloudStorageLocation' (Required): The location of Oracle Cloud Storage dataset.
* **version**: any: Specify the version of Oracle Cloud Storage. Type: string (or Expression with resultType string).

## SftpLocation
### Properties
* **type**: 'SftpLocation' (Required): The location of SFTP dataset.

## AzureBlob
### Properties
* **type**: 'AzureBlob' (Required): The Azure Blob storage.
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties): Azure Blob dataset properties.

## AzureBlobDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: The name of the Azure Blob. Type: string (or Expression with resultType string).
* **folderPath**: any: The path of the Azure Blob storage. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **modifiedDatetimeEnd**: any: The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string).
* **tableRootLocation**: any: The root of blob path. Type: string (or Expression with resultType string).

## AzureBlobFSFile
### Properties
* **type**: 'AzureBlobFSFile' (Required): The Azure Data Lake Storage Gen2 storage.
* **typeProperties**: [AzureBlobFSDatasetTypeProperties](#azureblobfsdatasettypeproperties): Azure Data Lake Storage Gen2 dataset properties.

## AzureBlobFSDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string).
* **folderPath**: any: The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.

## AzureDatabricksDeltaLakeDataset
### Properties
* **type**: 'AzureDatabricksDeltaLakeDataset' (Required): Azure Databricks Delta Lake dataset.
* **typeProperties**: [AzureDatabricksDeltaLakeDatasetTypeProperties](#azuredatabricksdeltalakedatasettypeproperties): Azure Databricks Delta Lake Dataset Properties

## AzureDatabricksDeltaLakeDatasetTypeProperties
### Properties
* **database**: any: The database name of delta table. Type: string (or Expression with resultType string).
* **table**: any: The name of delta table. Type: string (or Expression with resultType string).

## AzureDataExplorerTable
### Properties
* **type**: 'AzureDataExplorerTable' (Required): The Azure Data Explorer (Kusto) dataset.
* **typeProperties**: [AzureDataExplorerDatasetTypeProperties](#azuredataexplorerdatasettypeproperties) (Required): Azure Data Explorer (Kusto) dataset properties.

## AzureDataExplorerDatasetTypeProperties
### Properties
* **table**: any: The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string).

## AzureDataLakeStoreFile
### Properties
* **type**: 'AzureDataLakeStoreFile' (Required): Azure Data Lake Store dataset.
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties): Azure Data Lake Store dataset properties.

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string).
* **folderPath**: any: Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.

## AzureMariaDBTable
### Properties
* **type**: 'AzureMariaDBTable' (Required): Azure Database for MariaDB dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## AzureMySqlTable
### Properties
* **type**: 'AzureMySqlTable' (Required): The Azure MySQL database dataset.
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required): Azure MySQL database dataset properties.

## AzureMySqlTableDatasetTypeProperties
### Properties
* **table**: any: The name of Azure MySQL database table. Type: string (or Expression with resultType string).
* **tableName**: any: The Azure MySQL database table name. Type: string (or Expression with resultType string).

## AzurePostgreSqlTable
### Properties
* **type**: 'AzurePostgreSqlTable' (Required): Azure PostgreSQL dataset.
* **typeProperties**: [AzurePostgreSqlTableDatasetTypeProperties](#azurepostgresqltabledatasettypeproperties): Azure PostgreSQL dataset properties.

## AzurePostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string).
* **tableName**: any: The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string).

## AzureSearchIndex
### Properties
* **type**: 'AzureSearchIndex' (Required): The Azure Search Index.
* **typeProperties**: [AzureSearchIndexDatasetTypeProperties](#azuresearchindexdatasettypeproperties) (Required): Properties specific to this dataset type.

## AzureSearchIndexDatasetTypeProperties
### Properties
* **indexName**: any (Required): The name of the Azure Search Index. Type: string (or Expression with resultType string).

## AzureSqlDWTable
### Properties
* **type**: 'AzureSqlDWTable' (Required): The Azure SQL Data Warehouse dataset.
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties): Azure SQL Data Warehouse dataset properties.

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## AzureSqlMITable
### Properties
* **type**: 'AzureSqlMITable' (Required): The Azure SQL Managed Instance dataset.
* **typeProperties**: [AzureSqlMITableDatasetTypeProperties](#azuresqlmitabledatasettypeproperties): Azure SQL Managed Instance dataset properties.

## AzureSqlMITableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## AzureSqlTable
### Properties
* **type**: 'AzureSqlTable' (Required): The Azure SQL Server database dataset.
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties): Azure SQL dataset properties.

## AzureSqlTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Azure SQL database. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Azure SQL database. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## AzureTable
### Properties
* **type**: 'AzureTable' (Required): The Azure Table storage dataset.
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required): Azure Table dataset properties.

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the Azure Table storage. Type: string (or Expression with resultType string).

## Binary
### Properties
* **type**: 'Binary' (Required): Binary dataset.
* **typeProperties**: [BinaryDatasetTypeProperties](#binarydatasettypeproperties): Binary dataset properties.

## BinaryDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.

## CassandraTable
### Properties
* **type**: 'CassandraTable' (Required): The Cassandra database dataset.
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties): Cassandra dataset properties.

## CassandraTableDatasetTypeProperties
### Properties
* **keyspace**: any: The keyspace of the Cassandra database. Type: string (or Expression with resultType string).
* **tableName**: any: The table name of the Cassandra database. Type: string (or Expression with resultType string).

## CommonDataServiceForAppsEntity
### Properties
* **type**: 'CommonDataServiceForAppsEntity' (Required): The Common Data Service for Apps entity dataset.
* **typeProperties**: [CommonDataServiceForAppsEntityDatasetTypeProperties](#commondataserviceforappsentitydatasettypeproperties): Common Data Service for Apps entity dataset properties.

## CommonDataServiceForAppsEntityDatasetTypeProperties
### Properties
* **entityName**: any: The logical name of the entity. Type: string (or Expression with resultType string).

## ConcurObject
### Properties
* **type**: 'ConcurObject' (Required): Concur Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## CosmosDbMongoDbApiCollection
### Properties
* **type**: 'CosmosDbMongoDbApiCollection' (Required): The CosmosDB (MongoDB API) database dataset.
* **typeProperties**: [CosmosDbMongoDbApiCollectionDatasetTypeProperties](#cosmosdbmongodbapicollectiondatasettypeproperties) (Required): CosmosDB (MongoDB API) database dataset properties.

## CosmosDbMongoDbApiCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required): The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string).

## CosmosDbSqlApiCollection
### Properties
* **type**: 'CosmosDbSqlApiCollection' (Required): Microsoft Azure CosmosDB (SQL API) Collection dataset.
* **typeProperties**: [CosmosDbSqlApiCollectionDatasetTypeProperties](#cosmosdbsqlapicollectiondatasettypeproperties) (Required): CosmosDB (SQL API) Collection dataset properties.

## CosmosDbSqlApiCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string).

## CouchbaseTable
### Properties
* **type**: 'CouchbaseTable' (Required): Couchbase server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## CustomDataset
### Properties
* **type**: 'CustomDataset' (Required): The custom dataset.
* **typeProperties**: any: Custom dataset properties.

## Db2Table
### Properties
* **type**: 'Db2Table' (Required): The Db2 table dataset.
* **typeProperties**: [Db2TableDatasetTypeProperties](#db2tabledatasettypeproperties): Db2 table dataset properties.

## Db2TableDatasetTypeProperties
### Properties
* **schema**: any: The Db2 schema name. Type: string (or Expression with resultType string).
* **table**: any: The Db2 table name. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## DelimitedText
### Properties
* **type**: 'DelimitedText' (Required): Delimited text dataset.
* **typeProperties**: [DelimitedTextDatasetTypeProperties](#delimitedtextdatasettypeproperties): DelimitedText dataset properties.

## DelimitedTextDatasetTypeProperties
### Properties
* **columnDelimiter**: any: The column delimiter. Type: string (or Expression with resultType string).
* **compressionCodec**: any: The data compressionCodec. Type: string (or Expression with resultType string).
* **compressionLevel**: any: The data compression method used for DelimitedText.
* **encodingName**: any: The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
* **escapeChar**: any: The escape character. Type: string (or Expression with resultType string).
* **firstRowAsHeader**: any: When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.
* **nullValue**: any: The null value string. Type: string (or Expression with resultType string).
* **quoteChar**: any: The quote character. Type: string (or Expression with resultType string).
* **rowDelimiter**: any: The row delimiter. Type: string (or Expression with resultType string).

## DocumentDbCollection
### Properties
* **type**: 'DocumentDbCollection' (Required): Microsoft Azure Document Database Collection dataset.
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required): DocumentDB Collection dataset properties.

## DocumentDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): Document Database collection name. Type: string (or Expression with resultType string).

## DrillTable
### Properties
* **type**: 'DrillTable' (Required): Drill server dataset.
* **typeProperties**: [DrillDatasetTypeProperties](#drilldatasettypeproperties): Drill Dataset Properties

## DrillDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Drill. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Drill. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## DynamicsAXResource
### Properties
* **type**: 'DynamicsAXResource' (Required): The path of the Dynamics AX OData entity.
* **typeProperties**: [DynamicsAXResourceDatasetTypeProperties](#dynamicsaxresourcedatasettypeproperties) (Required): Dynamics AX OData resource dataset properties.

## DynamicsAXResourceDatasetTypeProperties
### Properties
* **path**: any (Required): The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string).

## DynamicsCrmEntity
### Properties
* **type**: 'DynamicsCrmEntity' (Required): The Dynamics CRM entity dataset.
* **typeProperties**: [DynamicsCrmEntityDatasetTypeProperties](#dynamicscrmentitydatasettypeproperties): Dynamics CRM entity dataset properties.

## DynamicsCrmEntityDatasetTypeProperties
### Properties
* **entityName**: any: The logical name of the entity. Type: string (or Expression with resultType string).

## DynamicsEntity
### Properties
* **type**: 'DynamicsEntity' (Required): The Dynamics entity dataset.
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties): Dynamics entity dataset properties.

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any: The logical name of the entity. Type: string (or Expression with resultType string).

## EloquaObject
### Properties
* **type**: 'EloquaObject' (Required): Eloqua server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## Excel
### Properties
* **type**: 'Excel' (Required): Excel dataset.
* **typeProperties**: [ExcelDatasetTypeProperties](#exceldatasettypeproperties): Excel dataset properties.

## ExcelDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **firstRowAsHeader**: any: When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.
* **nullValue**: any: The null value string. Type: string (or Expression with resultType string).
* **range**: any: The partial data of one sheet. Type: string (or Expression with resultType string).
* **sheetIndex**: any: The sheet index of excel file and default value is 0. Type: integer (or Expression with resultType integer)
* **sheetName**: any: The sheet name of excel file. Type: string (or Expression with resultType string).

## FileShare
### Properties
* **type**: 'FileShare' (Required): An on-premises file system dataset.
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties): On-premises file system dataset properties.

## FileShareDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileFilter**: any: Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string).
* **fileName**: any: The name of the on-premises file system. Type: string (or Expression with resultType string).
* **folderPath**: any: The path of the on-premises file system. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).

## GoogleAdWordsObject
### Properties
* **type**: 'GoogleAdWordsObject' (Required): Google AdWords service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## GoogleBigQueryObject
### Properties
* **type**: 'GoogleBigQueryObject' (Required): Google BigQuery service dataset.
* **typeProperties**: [GoogleBigQueryDatasetTypeProperties](#googlebigquerydatasettypeproperties): Google BigQuery Dataset Properties

## GoogleBigQueryDatasetTypeProperties
### Properties
* **dataset**: any: The database name of the Google BigQuery. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Google BigQuery. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using database + table properties instead.

## GreenplumTable
### Properties
* **type**: 'GreenplumTable' (Required): Greenplum Database dataset.
* **typeProperties**: [GreenplumDatasetTypeProperties](#greenplumdatasettypeproperties): Greenplum Dataset Properties

## GreenplumDatasetTypeProperties
### Properties
* **schema**: any: The schema name of Greenplum. Type: string (or Expression with resultType string).
* **table**: any: The table name of Greenplum. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## HBaseObject
### Properties
* **type**: 'HBaseObject' (Required): HBase server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## HiveObject
### Properties
* **type**: 'HiveObject' (Required): Hive Server dataset.
* **typeProperties**: [HiveDatasetTypeProperties](#hivedatasettypeproperties): Hive Properties

## HiveDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Hive. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Hive. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## HttpFile
### Properties
* **type**: 'HttpFile' (Required): A file in an HTTP web server.
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties): Properties specific to this dataset type.

## HttpDatasetTypeProperties
### Properties
* **additionalHeaders**: any: The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1
...
request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **relativeUrl**: any: The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string).
* **requestBody**: any: The body for the HTTP request. Type: string (or Expression with resultType string).
* **requestMethod**: any: The HTTP method for the HTTP request. Type: string (or Expression with resultType string).

## HubspotObject
### Properties
* **type**: 'HubspotObject' (Required): Hubspot Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## ImpalaObject
### Properties
* **type**: 'ImpalaObject' (Required): Impala server dataset.
* **typeProperties**: [ImpalaDatasetTypeProperties](#impaladatasettypeproperties): Impala Dataset Properties

## ImpalaDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Impala. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Impala. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## InformixTable
### Properties
* **type**: 'InformixTable' (Required): The Informix table dataset.
* **typeProperties**: [InformixTableDatasetTypeProperties](#informixtabledatasettypeproperties): Informix table dataset properties.

## InformixTableDatasetTypeProperties
### Properties
* **tableName**: any: The Informix table name. Type: string (or Expression with resultType string).

## JiraObject
### Properties
* **type**: 'JiraObject' (Required): Jira Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## Json
### Properties
* **type**: 'Json' (Required): Json dataset.
* **typeProperties**: [JsonDatasetTypeProperties](#jsondatasettypeproperties): Json dataset properties.

## JsonDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **encodingName**: any: The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.

## MagentoObject
### Properties
* **type**: 'MagentoObject' (Required): Magento server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## MariaDBTable
### Properties
* **type**: 'MariaDBTable' (Required): MariaDB server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## MarketoObject
### Properties
* **type**: 'MarketoObject' (Required): Marketo server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## MicrosoftAccessTable
### Properties
* **type**: 'MicrosoftAccessTable' (Required): The Microsoft Access table dataset.
* **typeProperties**: [MicrosoftAccessTableDatasetTypeProperties](#microsoftaccesstabledatasettypeproperties): Microsoft Access table dataset properties.

## MicrosoftAccessTableDatasetTypeProperties
### Properties
* **tableName**: any: The Microsoft Access table name. Type: string (or Expression with resultType string).

## MongoDbAtlasCollection
### Properties
* **type**: 'MongoDbAtlasCollection' (Required): The MongoDB Atlas database dataset.
* **typeProperties**: [MongoDbAtlasCollectionDatasetTypeProperties](#mongodbatlascollectiondatasettypeproperties) (Required): MongoDB Atlas database dataset properties.

## MongoDbAtlasCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required): The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string).

## MongoDbCollection
### Properties
* **type**: 'MongoDbCollection' (Required): The MongoDB database dataset.
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required): MongoDB database dataset properties.

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): The table name of the MongoDB database. Type: string (or Expression with resultType string).

## MongoDbV2Collection
### Properties
* **type**: 'MongoDbV2Collection' (Required): The MongoDB database dataset.
* **typeProperties**: [MongoDbV2CollectionDatasetTypeProperties](#mongodbv2collectiondatasettypeproperties) (Required): MongoDB database dataset properties.

## MongoDbV2CollectionDatasetTypeProperties
### Properties
* **collection**: any (Required): The collection name of the MongoDB database. Type: string (or Expression with resultType string).

## MySqlTable
### Properties
* **type**: 'MySqlTable' (Required): The MySQL table dataset.
* **typeProperties**: [MySqlTableDatasetTypeProperties](#mysqltabledatasettypeproperties): MySql table dataset properties.

## MySqlTableDatasetTypeProperties
### Properties
* **tableName**: any: The MySQL table name. Type: string (or Expression with resultType string).

## NetezzaTable
### Properties
* **type**: 'NetezzaTable' (Required): Netezza dataset.
* **typeProperties**: [NetezzaTableDatasetTypeProperties](#netezzatabledatasettypeproperties): Netezza dataset properties.

## NetezzaTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Netezza. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Netezza. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## ODataResource
### Properties
* **type**: 'ODataResource' (Required): The Open Data Protocol (OData) resource dataset.
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties): OData dataset properties.

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any: The OData resource path. Type: string (or Expression with resultType string).

## OdbcTable
### Properties
* **type**: 'OdbcTable' (Required): The ODBC table dataset.
* **typeProperties**: [OdbcTableDatasetTypeProperties](#odbctabledatasettypeproperties): ODBC table dataset properties.

## OdbcTableDatasetTypeProperties
### Properties
* **tableName**: any: The ODBC table name. Type: string (or Expression with resultType string).

## Office365Table
### Properties
* **type**: 'Office365Table' (Required): The Office365 account.
* **typeProperties**: [Office365DatasetTypeProperties](#office365datasettypeproperties) (Required): Office365 dataset properties.

## Office365DatasetTypeProperties
### Properties
* **predicate**: any: A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string).
* **tableName**: any (Required): Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string).

## OracleServiceCloudObject
### Properties
* **type**: 'OracleServiceCloudObject' (Required): Oracle Service Cloud dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## OracleTable
### Properties
* **type**: 'OracleTable' (Required): The on-premises Oracle database dataset.
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties): On-premises Oracle dataset properties.

## OracleTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string).
* **table**: any: The table name of the on-premises Oracle database. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## Orc
### Properties
* **type**: 'Orc' (Required): ORC dataset.
* **typeProperties**: [OrcDatasetTypeProperties](#orcdatasettypeproperties): ORC dataset properties.

## OrcDatasetTypeProperties
### Properties
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.
* **orcCompressionCodec**: 'lzo' | 'none' | 'snappy' | 'zlib'

## Parquet
### Properties
* **type**: 'Parquet' (Required): Parquet dataset.
* **typeProperties**: [ParquetDatasetTypeProperties](#parquetdatasettypeproperties): Parquet dataset properties.

## ParquetDatasetTypeProperties
### Properties
* **compressionCodec**: any: The data compressionCodec. Type: string (or Expression with resultType string).
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.

## PaypalObject
### Properties
* **type**: 'PaypalObject' (Required): Paypal Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## PhoenixObject
### Properties
* **type**: 'PhoenixObject' (Required): Phoenix server dataset.
* **typeProperties**: [PhoenixDatasetTypeProperties](#phoenixdatasettypeproperties): Phoenix Dataset Properties

## PhoenixDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Phoenix. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Phoenix. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## PostgreSqlTable
### Properties
* **type**: 'PostgreSqlTable' (Required): The PostgreSQL table dataset.
* **typeProperties**: [PostgreSqlTableDatasetTypeProperties](#postgresqltabledatasettypeproperties): PostgreSQL table dataset properties.

## PostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any: The PostgreSQL schema name. Type: string (or Expression with resultType string).
* **table**: any: The PostgreSQL table name. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## PrestoObject
### Properties
* **type**: 'PrestoObject' (Required): Presto server dataset.
* **typeProperties**: [PrestoDatasetTypeProperties](#prestodatasettypeproperties): Presto Dataset Properties

## PrestoDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Presto. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Presto. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## QuickBooksObject
### Properties
* **type**: 'QuickBooksObject' (Required): QuickBooks server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## RelationalTable
### Properties
* **type**: 'RelationalTable' (Required): The relational table dataset.
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties): Relational table dataset properties.

## RelationalTableDatasetTypeProperties
### Properties
* **tableName**: any: The relational table name. Type: string (or Expression with resultType string).

## ResponsysObject
### Properties
* **type**: 'ResponsysObject' (Required): Responsys dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## RestResource
### Properties
* **type**: 'RestResource' (Required): A Rest service dataset.
* **typeProperties**: [RestResourceDatasetTypeProperties](#restresourcedatasettypeproperties): Properties specific to this dataset type.

## RestResourceDatasetTypeProperties
### Properties
* **additionalHeaders**: any: The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
* **paginationRules**: any: The pagination rules to compose next page requests. Type: string (or Expression with resultType string).
* **relativeUrl**: any: The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string).
* **requestBody**: any: The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
* **requestMethod**: any: The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).

## SalesforceMarketingCloudObject
### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required): Salesforce Marketing Cloud dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## SalesforceObject
### Properties
* **type**: 'SalesforceObject' (Required): The Salesforce object dataset.
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties): Salesforce object dataset properties.

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: The Salesforce object API name. Type: string (or Expression with resultType string).

## SalesforceServiceCloudObject
### Properties
* **type**: 'SalesforceServiceCloudObject' (Required): The Salesforce Service Cloud object dataset.
* **typeProperties**: [SalesforceServiceCloudObjectDatasetTypeProperties](#salesforceservicecloudobjectdatasettypeproperties): Salesforce Service Cloud object dataset properties.

## SalesforceServiceCloudObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string).

## SapBwCube
### Properties
* **type**: 'SapBwCube' (Required): The SAP BW cube dataset.

## SapCloudForCustomerResource
### Properties
* **type**: 'SapCloudForCustomerResource' (Required): The path of the SAP Cloud for Customer OData entity.
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required): Sap Cloud For Customer OData resource dataset properties.

## SapCloudForCustomerResourceDatasetTypeProperties
### Properties
* **path**: any (Required): The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string).

## SapEccResource
### Properties
* **type**: 'SapEccResource' (Required): The path of the SAP ECC OData entity.
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required): Sap ECC OData resource dataset properties.

## SapEccResourceDatasetTypeProperties
### Properties
* **path**: any (Required): The path of the SAP ECC OData entity. Type: string (or Expression with resultType string).

## SapHanaTable
### Properties
* **type**: 'SapHanaTable' (Required): SAP HANA Table properties.
* **typeProperties**: [SapHanaTableDatasetTypeProperties](#saphanatabledatasettypeproperties): SAP HANA Table properties.

## SapHanaTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of SAP HANA. Type: string (or Expression with resultType string).
* **table**: any: The table name of SAP HANA. Type: string (or Expression with resultType string).

## SapOpenHubTable
### Properties
* **type**: 'SapOpenHubTable' (Required): Sap Business Warehouse Open Hub Destination Table properties.
* **typeProperties**: [SapOpenHubTableDatasetTypeProperties](#sapopenhubtabledatasettypeproperties) (Required): Sap Business Warehouse Open Hub Destination Table properties.

## SapOpenHubTableDatasetTypeProperties
### Properties
* **baseRequestId**: any: The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
* **excludeLastRequest**: any: Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
* **openHubDestinationName**: any (Required): The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string).

## SapTableResource
### Properties
* **type**: 'SapTableResource' (Required): SAP Table Resource properties.
* **typeProperties**: [SapTableResourceDatasetTypeProperties](#saptableresourcedatasettypeproperties) (Required): SAP Table Resource properties.

## SapTableResourceDatasetTypeProperties
### Properties
* **tableName**: any (Required): The name of the SAP Table. Type: string (or Expression with resultType string).

## ServiceNowObject
### Properties
* **type**: 'ServiceNowObject' (Required): ServiceNow server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## SharePointOnlineListResource
### Properties
* **type**: 'SharePointOnlineListResource' (Required): The sharepoint online list resource dataset.
* **typeProperties**: [SharePointOnlineListDatasetTypeProperties](#sharepointonlinelistdatasettypeproperties): Sharepoint online list dataset properties.

## SharePointOnlineListDatasetTypeProperties
### Properties
* **listName**: any: The name of the SharePoint Online list. Type: string (or Expression with resultType string).

## ShopifyObject
### Properties
* **type**: 'ShopifyObject' (Required): Shopify Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## SnowflakeTable
### Properties
* **type**: 'SnowflakeTable' (Required): The snowflake dataset.
* **typeProperties**: [SnowflakeDatasetTypeProperties](#snowflakedatasettypeproperties) (Required): Snowflake dataset properties.

## SnowflakeDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Snowflake database. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Snowflake database. Type: string (or Expression with resultType string).

## SparkObject
### Properties
* **type**: 'SparkObject' (Required): Spark Server dataset.
* **typeProperties**: [SparkDatasetTypeProperties](#sparkdatasettypeproperties): Spark Properties

## SparkDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Spark. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Spark. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## SqlServerTable
### Properties
* **type**: 'SqlServerTable' (Required): The on-premises SQL Server dataset.
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties): On-premises SQL Server dataset properties.

## SqlServerTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the SQL Server dataset. Type: string (or Expression with resultType string).
* **table**: any: The table name of the SQL Server dataset. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## SquareObject
### Properties
* **type**: 'SquareObject' (Required): Square Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## SybaseTable
### Properties
* **type**: 'SybaseTable' (Required): The Sybase table dataset.
* **typeProperties**: [SybaseTableDatasetTypeProperties](#sybasetabledatasettypeproperties): Sybase table dataset properties.

## SybaseTableDatasetTypeProperties
### Properties
* **tableName**: any: The Sybase table name. Type: string (or Expression with resultType string).

## TeradataTable
### Properties
* **type**: 'TeradataTable' (Required): The Teradata database dataset.
* **typeProperties**: [TeradataTableDatasetTypeProperties](#teradatatabledatasettypeproperties): Teradata dataset properties.

## TeradataTableDatasetTypeProperties
### Properties
* **database**: any: The database name of Teradata. Type: string (or Expression with resultType string).
* **table**: any: The table name of Teradata. Type: string (or Expression with resultType string).

## VerticaTable
### Properties
* **type**: 'VerticaTable' (Required): Vertica dataset.
* **typeProperties**: [VerticaDatasetTypeProperties](#verticadatasettypeproperties): Vertica Properties

## VerticaDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Vertica. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Vertica. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## WebTable
### Properties
* **type**: 'WebTable' (Required): The dataset points to a HTML table in the web page.
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required): Web table dataset properties.

## WebTableDatasetTypeProperties
### Properties
* **index**: any (Required): The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0.
* **path**: any: The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string).

## XeroObject
### Properties
* **type**: 'XeroObject' (Required): Xero Service dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## Xml
### Properties
* **type**: 'Xml' (Required): Xml dataset.
* **typeProperties**: [XmlDatasetTypeProperties](#xmldatasettypeproperties): Xml dataset properties.

## XmlDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **encodingName**: any: The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.
* **nullValue**: any: The null value string. Type: string (or Expression with resultType string).

## ZohoObject
### Properties
* **type**: 'ZohoObject' (Required): Zoho server dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

## IntegrationRuntime
* **Discriminator**: type
### Base Properties
* **description**: string: Integration runtime description.
### Managed
#### Properties
* **managedVirtualNetwork**: [ManagedVirtualNetworkReference](#managedvirtualnetworkreference): Managed Virtual Network reference type.
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): Integration runtime state, only valid for managed dedicated integration runtime.
* **type**: 'Managed' (Required): Managed integration runtime, including managed elastic and managed dedicated integration runtimes.
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required): Managed integration runtime type properties.

### SelfHosted
#### Properties
* **type**: 'SelfHosted' (Required): Self-hosted integration runtime.
* **typeProperties**: [SelfHostedIntegrationRuntimeTypeProperties](#selfhostedintegrationruntimetypeproperties): The self-hosted integration runtime properties.


## Managed
### Properties
* **managedVirtualNetwork**: [ManagedVirtualNetworkReference](#managedvirtualnetworkreference): Managed Virtual Network reference type.
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): Integration runtime state, only valid for managed dedicated integration runtime.
* **type**: 'Managed' (Required): Managed integration runtime, including managed elastic and managed dedicated integration runtimes.
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required): Managed integration runtime type properties.

## ManagedVirtualNetworkReference
### Properties
* **referenceName**: string (Required): Reference ManagedVirtualNetwork name.
* **type**: string (Required): Managed Virtual Network reference type.

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties): The compute resource properties for managed integration runtime.
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties): SSIS properties for managed integration runtime.

## IntegrationRuntimeComputeProperties
### Properties
* **dataFlowProperties**: [IntegrationRuntimeDataFlowProperties](#integrationruntimedataflowproperties): Data flow properties for managed integration runtime.
* **location**: string: The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
* **maxParallelExecutionsPerNode**: int: Maximum parallel executions count per node for managed integration runtime.
* **nodeSize**: string: The node size requirement to managed integration runtime.
* **numberOfNodes**: int: The required number of nodes for managed integration runtime.
* **vNetProperties**: [IntegrationRuntimeVNetProperties](#integrationruntimevnetproperties): VNet properties for managed integration runtime.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeDataFlowProperties
### Properties
* **computeType**: 'ComputeOptimized' | 'General' | 'MemoryOptimized': Compute type of the cluster which will execute data flow job.
* **coreCount**: int: Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
* **timeToLive**: int: Time to live (in minutes) setting of the cluster which will execute data flow job.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeVNetProperties
### Properties
* **publicIPs**: string[]: Resource IDs of the public IP addresses that this integration runtime will use.
* **subnet**: string: The name of the subnet this integration runtime will join.
* **vNetId**: string: The ID of the VNet that this integration runtime will join.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: [IntegrationRuntimeSsisCatalogInfo](#integrationruntimessiscataloginfo): Catalog information for managed dedicated integration runtime.
* **customSetupScriptProperties**: [IntegrationRuntimeCustomSetupScriptProperties](#integrationruntimecustomsetupscriptproperties): Custom setup script properties for a managed dedicated integration runtime.
* **dataProxyProperties**: [IntegrationRuntimeDataProxyProperties](#integrationruntimedataproxyproperties): Data proxy properties for a managed dedicated integration runtime.
* **edition**: 'Enterprise' | 'Standard': The edition for the SSIS Integration Runtime.
* **expressCustomSetupProperties**: [CustomSetupBase](#customsetupbase)[]: Custom setup without script properties for a SSIS integration runtime.
* **licenseType**: 'BasePrice' | 'LicenseIncluded': License type for bringing your own license scenario.
* **managedCredential**: [EntityReference](#entityreference): The entity reference.
* **packageStores**: [PackageStore](#packagestore)[]: Package stores for the SSIS Integration Runtime.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: [SecureString](#securestring): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **catalogAdminUserName**: string: The administrator user name of catalog database.
* **catalogPricingTier**: 'Basic' | 'Premium' | 'PremiumRS' | 'Standard': The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/.
* **catalogServerEndpoint**: string: The catalog database server URL.
* **dualStandbyPairName**: string: The dual standby pair name of Azure-SSIS Integration Runtimes to support SSISDB failover.
### Additional Properties
* **Additional Properties Type**: any

## SecureString
### Properties
* **type**: 'SecureString' (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **value**: string (Required): Value of secure string.

## IntegrationRuntimeCustomSetupScriptProperties
### Properties
* **blobContainerUri**: string: The URI of the Azure blob container that contains the custom setup script.
* **sasToken**: [SecureString](#securestring): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

## IntegrationRuntimeDataProxyProperties
### Properties
* **connectVia**: [EntityReference](#entityreference): The entity reference.
* **path**: string: The path to contain the staged data in the Blob storage.
* **stagingLinkedService**: [EntityReference](#entityreference): The entity reference.

## EntityReference
### Properties
* **referenceName**: string: The name of this referenced entity.
* **type**: 'CredentialReference' | 'IntegrationRuntimeReference' | 'LinkedServiceReference': The type of this referenced entity.

## CustomSetupBase
* **Discriminator**: type
### Base Properties
### AzPowerShellSetup
#### Properties
* **type**: 'AzPowerShellSetup' (Required): The express custom setup of installing Azure PowerShell.
* **typeProperties**: [AzPowerShellSetupTypeProperties](#azpowershellsetuptypeproperties) (Required): Installation of Azure PowerShell type properties.

### CmdkeySetup
#### Properties
* **type**: 'CmdkeySetup' (Required): The custom setup of running cmdkey commands.
* **typeProperties**: [CmdkeySetupTypeProperties](#cmdkeysetuptypeproperties) (Required): Cmdkey command custom setup type properties.

### ComponentSetup
#### Properties
* **type**: 'ComponentSetup' (Required): The custom setup of installing 3rd party components.
* **typeProperties**: [LicensedComponentSetupTypeProperties](#licensedcomponentsetuptypeproperties) (Required): Installation of licensed component setup type properties.

### EnvironmentVariableSetup
#### Properties
* **type**: 'EnvironmentVariableSetup' (Required): The custom setup of setting environment variable.
* **typeProperties**: [EnvironmentVariableSetupTypeProperties](#environmentvariablesetuptypeproperties) (Required): Environment variable custom setup type properties.


## AzPowerShellSetup
### Properties
* **type**: 'AzPowerShellSetup' (Required): The express custom setup of installing Azure PowerShell.
* **typeProperties**: [AzPowerShellSetupTypeProperties](#azpowershellsetuptypeproperties) (Required): Installation of Azure PowerShell type properties.

## AzPowerShellSetupTypeProperties
### Properties
* **version**: string (Required): The required version of Azure PowerShell to install.

## CmdkeySetup
### Properties
* **type**: 'CmdkeySetup' (Required): The custom setup of running cmdkey commands.
* **typeProperties**: [CmdkeySetupTypeProperties](#cmdkeysetuptypeproperties) (Required): Cmdkey command custom setup type properties.

## CmdkeySetupTypeProperties
### Properties
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **targetName**: any (Required): The server name of data source access.
* **userName**: any (Required): The user name of data source access.

## SecretBase
* **Discriminator**: type
### Base Properties
### AzureKeyVaultSecret
#### Properties
* **secretName**: any (Required): The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
* **secretVersion**: any: The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
* **store**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **type**: 'AzureKeyVaultSecret' (Required): Azure Key Vault secret reference.

### SecureString
#### Properties
* **type**: 'SecureString' (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **value**: string (Required): Value of secure string.


## AzureKeyVaultSecret
### Properties
* **secretName**: any (Required): The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
* **secretVersion**: any: The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
* **store**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **type**: 'AzureKeyVaultSecret' (Required): Azure Key Vault secret reference.

## ComponentSetup
### Properties
* **type**: 'ComponentSetup' (Required): The custom setup of installing 3rd party components.
* **typeProperties**: [LicensedComponentSetupTypeProperties](#licensedcomponentsetuptypeproperties) (Required): Installation of licensed component setup type properties.

## LicensedComponentSetupTypeProperties
### Properties
* **componentName**: string (Required): The name of the 3rd party component.
* **licenseKey**: [SecretBase](#secretbase): The base definition of a secret type.

## EnvironmentVariableSetup
### Properties
* **type**: 'EnvironmentVariableSetup' (Required): The custom setup of setting environment variable.
* **typeProperties**: [EnvironmentVariableSetupTypeProperties](#environmentvariablesetuptypeproperties) (Required): Environment variable custom setup type properties.

## EnvironmentVariableSetupTypeProperties
### Properties
* **variableName**: string (Required): The name of the environment variable.
* **variableValue**: string (Required): The value of the environment variable.

## PackageStore
### Properties
* **name**: string (Required): The name of the package store
* **packageStoreLinkedService**: [EntityReference](#entityreference) (Required): The entity reference.

## SelfHosted
### Properties
* **type**: 'SelfHosted' (Required): Self-hosted integration runtime.
* **typeProperties**: [SelfHostedIntegrationRuntimeTypeProperties](#selfhostedintegrationruntimetypeproperties): The self-hosted integration runtime properties.

## SelfHostedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: [LinkedIntegrationRuntimeType](#linkedintegrationruntimetype): The base definition of a linked integration runtime.

## LinkedIntegrationRuntimeType
* **Discriminator**: authorizationType
### Base Properties
### Key
#### Properties
* **authorizationType**: 'Key' (Required): The key authorization type integration runtime.
* **key**: [SecureString](#securestring) (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

### RBAC
#### Properties
* **authorizationType**: 'RBAC' (Required): The role based access control (RBAC) authorization type integration runtime.
* **resourceId**: string (Required): The resource identifier of the integration runtime to be shared.


## Key
### Properties
* **authorizationType**: 'Key' (Required): The key authorization type integration runtime.
* **key**: [SecureString](#securestring) (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

## RBAC
### Properties
* **authorizationType**: 'RBAC' (Required): The role based access control (RBAC) authorization type integration runtime.
* **resourceId**: string (Required): The resource identifier of the integration runtime to be shared.

## LinkedService
* **Discriminator**: type
### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the linked service.
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference): Integration runtime reference type.
* **description**: string: Linked service description.
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification): Definition of all parameters for an entity.
### AmazonMWS
#### Properties
* **type**: 'AmazonMWS' (Required): Amazon Marketplace Web Service linked service.
* **typeProperties**: [AmazonMWSLinkedServiceTypeProperties](#amazonmwslinkedservicetypeproperties) (Required): Amazon Marketplace Web Service linked service properties.

### AmazonRedshift
#### Properties
* **type**: 'AmazonRedshift' (Required): Linked service for Amazon Redshift.
* **typeProperties**: [AmazonRedshiftLinkedServiceTypeProperties](#amazonredshiftlinkedservicetypeproperties) (Required): Amazon Redshift linked service properties.

### AmazonS3
#### Properties
* **type**: 'AmazonS3' (Required): Linked service for Amazon S3.
* **typeProperties**: [AmazonS3LinkedServiceTypeProperties](#amazons3linkedservicetypeproperties) (Required): Amazon S3 linked service properties.

### AmazonS3Compatible
#### Properties
* **type**: 'AmazonS3Compatible' (Required): Linked service for Amazon S3 Compatible.
* **typeProperties**: [AmazonS3CompatibleLinkedServiceTypeProperties](#amazons3compatiblelinkedservicetypeproperties) (Required): Amazon S3 Compatible linked service properties.

### AzureBatch
#### Properties
* **type**: 'AzureBatch' (Required): Azure Batch linked service.
* **typeProperties**: [AzureBatchLinkedServiceTypeProperties](#azurebatchlinkedservicetypeproperties) (Required): Azure Batch linked service properties.

### AzureBlobFS
#### Properties
* **type**: 'AzureBlobFS' (Required): Azure Data Lake Storage Gen2 linked service.
* **typeProperties**: [AzureBlobFSLinkedServiceTypeProperties](#azureblobfslinkedservicetypeproperties) (Required): Azure Data Lake Storage Gen2 linked service properties.

### AzureBlobStorage
#### Properties
* **type**: 'AzureBlobStorage' (Required): The azure blob storage linked service.
* **typeProperties**: [AzureBlobStorageLinkedServiceTypeProperties](#azureblobstoragelinkedservicetypeproperties) (Required): Azure Blob Storage linked service properties.

### AzureDatabricks
#### Properties
* **type**: 'AzureDatabricks' (Required): Azure Databricks linked service.
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required): Azure Databricks linked service properties.

### AzureDatabricksDeltaLake
#### Properties
* **type**: 'AzureDatabricksDeltaLake' (Required): Azure Databricks Delta Lake linked service.
* **typeProperties**: [AzureDatabricksDetltaLakeLinkedServiceTypeProperties](#azuredatabricksdetltalakelinkedservicetypeproperties) (Required): Azure Databricks Delta Lake linked service properties.

### AzureDataExplorer
#### Properties
* **type**: 'AzureDataExplorer' (Required): Azure Data Explorer (Kusto) linked service.
* **typeProperties**: [AzureDataExplorerLinkedServiceTypeProperties](#azuredataexplorerlinkedservicetypeproperties) (Required): Azure Data Explorer (Kusto) linked service properties.

### AzureDataLakeAnalytics
#### Properties
* **type**: 'AzureDataLakeAnalytics' (Required): Azure Data Lake Analytics linked service.
* **typeProperties**: [AzureDataLakeAnalyticsLinkedServiceTypeProperties](#azuredatalakeanalyticslinkedservicetypeproperties) (Required): Azure Data Lake Analytics linked service properties.

### AzureDataLakeStore
#### Properties
* **type**: 'AzureDataLakeStore' (Required): Azure Data Lake Store linked service.
* **typeProperties**: [AzureDataLakeStoreLinkedServiceTypeProperties](#azuredatalakestorelinkedservicetypeproperties) (Required): Azure Data Lake Store linked service properties.

### AzureFileStorage
#### Properties
* **type**: 'AzureFileStorage' (Required): Azure File Storage linked service.
* **typeProperties**: [AzureFileStorageLinkedServiceTypeProperties](#azurefilestoragelinkedservicetypeproperties) (Required): Azure File Storage linked service properties.

### AzureFunction
#### Properties
* **type**: 'AzureFunction' (Required): Azure Function linked service.
* **typeProperties**: [AzureFunctionLinkedServiceTypeProperties](#azurefunctionlinkedservicetypeproperties) (Required): Azure Function linked service properties.

### AzureKeyVault
#### Properties
* **type**: 'AzureKeyVault' (Required): Azure Key Vault linked service.
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required): Azure Key Vault linked service properties.

### AzureMariaDB
#### Properties
* **type**: 'AzureMariaDB' (Required): Azure Database for MariaDB linked service.
* **typeProperties**: [AzureMariaDBLinkedServiceTypeProperties](#azuremariadblinkedservicetypeproperties) (Required): Azure Database for MariaDB linked service properties.

### AzureML
#### Properties
* **type**: 'AzureML' (Required): Azure ML Studio Web Service linked service.
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required): Azure ML Studio Web Service linked service properties.

### AzureMLService
#### Properties
* **type**: 'AzureMLService' (Required): Azure ML Service linked service.
* **typeProperties**: [AzureMLServiceLinkedServiceTypeProperties](#azuremlservicelinkedservicetypeproperties) (Required): Azure ML Service linked service properties.

### AzureMySql
#### Properties
* **type**: 'AzureMySql' (Required): Azure MySQL database linked service.
* **typeProperties**: [AzureMySqlLinkedServiceTypeProperties](#azuremysqllinkedservicetypeproperties) (Required): Azure MySQL database linked service properties.

### AzurePostgreSql
#### Properties
* **type**: 'AzurePostgreSql' (Required): Azure PostgreSQL linked service.
* **typeProperties**: [AzurePostgreSqlLinkedServiceTypeProperties](#azurepostgresqllinkedservicetypeproperties) (Required): Azure PostgreSQL linked service properties.

### AzureSearch
#### Properties
* **type**: 'AzureSearch' (Required): Linked service for Windows Azure Search Service.
* **typeProperties**: [AzureSearchLinkedServiceTypeProperties](#azuresearchlinkedservicetypeproperties) (Required): Windows Azure Search Service linked service properties.

### AzureSqlDatabase
#### Properties
* **type**: 'AzureSqlDatabase' (Required): Microsoft Azure SQL Database linked service.
* **typeProperties**: [AzureSqlDatabaseLinkedServiceTypeProperties](#azuresqldatabaselinkedservicetypeproperties) (Required): Azure SQL Database linked service properties.

### AzureSqlDW
#### Properties
* **type**: 'AzureSqlDW' (Required): Azure SQL Data Warehouse linked service.
* **typeProperties**: [AzureSqlDWLinkedServiceTypeProperties](#azuresqldwlinkedservicetypeproperties) (Required): Azure SQL Data Warehouse linked service properties.

### AzureSqlMI
#### Properties
* **type**: 'AzureSqlMI' (Required): Azure SQL Managed Instance linked service.
* **typeProperties**: [AzureSqlMILinkedServiceTypeProperties](#azuresqlmilinkedservicetypeproperties) (Required): Azure SQL Managed Instance linked service properties.

### AzureStorage
#### Properties
* **type**: 'AzureStorage' (Required): The storage account linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

### AzureTableStorage
#### Properties
* **type**: 'AzureTableStorage' (Required): The azure table storage linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

### Cassandra
#### Properties
* **type**: 'Cassandra' (Required): Linked service for Cassandra data source.
* **typeProperties**: [CassandraLinkedServiceTypeProperties](#cassandralinkedservicetypeproperties) (Required): Cassandra linked service properties.

### CommonDataServiceForApps
#### Properties
* **type**: 'CommonDataServiceForApps' (Required): Common Data Service for Apps linked service.
* **typeProperties**: [CommonDataServiceForAppsLinkedServiceTypeProperties](#commondataserviceforappslinkedservicetypeproperties) (Required): Common Data Service for Apps linked service properties.

### Concur
#### Properties
* **type**: 'Concur' (Required): Concur Service linked service.
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required): Concur Service linked service properties.

### CosmosDb
#### Properties
* **type**: 'CosmosDb' (Required): Microsoft Azure Cosmos Database (CosmosDB) linked service.
* **typeProperties**: [CosmosDbLinkedServiceTypeProperties](#cosmosdblinkedservicetypeproperties) (Required): CosmosDB linked service properties.

### CosmosDbMongoDbApi
#### Properties
* **type**: 'CosmosDbMongoDbApi' (Required): Linked service for CosmosDB (MongoDB API) data source.
* **typeProperties**: [CosmosDbMongoDbApiLinkedServiceTypeProperties](#cosmosdbmongodbapilinkedservicetypeproperties) (Required): CosmosDB (MongoDB API) linked service properties.

### Couchbase
#### Properties
* **type**: 'Couchbase' (Required): Couchbase server linked service.
* **typeProperties**: [CouchbaseLinkedServiceTypeProperties](#couchbaselinkedservicetypeproperties) (Required): Couchbase server linked service properties.

### CustomDataSource
#### Properties
* **type**: 'CustomDataSource' (Required): Custom linked service.
* **typeProperties**: any (Required): Custom linked service properties.

### Db2
#### Properties
* **type**: 'Db2' (Required): Linked service for DB2 data source.
* **typeProperties**: [Db2LinkedServiceTypeProperties](#db2linkedservicetypeproperties) (Required): DB2 linked service properties.

### Drill
#### Properties
* **type**: 'Drill' (Required): Drill server linked service.
* **typeProperties**: [DrillLinkedServiceTypeProperties](#drilllinkedservicetypeproperties) (Required): Drill server linked service properties.

### Dynamics
#### Properties
* **type**: 'Dynamics' (Required): Dynamics linked service.
* **typeProperties**: [DynamicsLinkedServiceTypeProperties](#dynamicslinkedservicetypeproperties) (Required): Dynamics linked service properties.

### DynamicsAX
#### Properties
* **type**: 'DynamicsAX' (Required): Dynamics AX linked service.
* **typeProperties**: [DynamicsAXLinkedServiceTypeProperties](#dynamicsaxlinkedservicetypeproperties) (Required): Dynamics AX linked service properties.

### DynamicsCrm
#### Properties
* **type**: 'DynamicsCrm' (Required): Dynamics CRM linked service.
* **typeProperties**: [DynamicsCrmLinkedServiceTypeProperties](#dynamicscrmlinkedservicetypeproperties) (Required): Dynamics CRM linked service properties.

### Eloqua
#### Properties
* **type**: 'Eloqua' (Required): Eloqua server linked service.
* **typeProperties**: [EloquaLinkedServiceTypeProperties](#eloqualinkedservicetypeproperties) (Required): Eloqua server linked service properties.

### FileServer
#### Properties
* **type**: 'FileServer' (Required): File system linked service.
* **typeProperties**: [FileServerLinkedServiceTypeProperties](#fileserverlinkedservicetypeproperties) (Required): File system linked service properties.

### FtpServer
#### Properties
* **type**: 'FtpServer' (Required): A FTP server Linked Service.
* **typeProperties**: [FtpServerLinkedServiceTypeProperties](#ftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### GoogleAdWords
#### Properties
* **type**: 'GoogleAdWords' (Required): Google AdWords service linked service.
* **typeProperties**: [GoogleAdWordsLinkedServiceTypeProperties](#googleadwordslinkedservicetypeproperties) (Required): Google AdWords service linked service properties.

### GoogleBigQuery
#### Properties
* **type**: 'GoogleBigQuery' (Required): Google BigQuery service linked service.
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required): Google BigQuery service linked service properties.

### GoogleCloudStorage
#### Properties
* **type**: 'GoogleCloudStorage' (Required): Linked service for Google Cloud Storage.
* **typeProperties**: [GoogleCloudStorageLinkedServiceTypeProperties](#googlecloudstoragelinkedservicetypeproperties) (Required): Google Cloud Storage linked service properties.

### Greenplum
#### Properties
* **type**: 'Greenplum' (Required): Greenplum Database linked service.
* **typeProperties**: [GreenplumLinkedServiceTypeProperties](#greenplumlinkedservicetypeproperties) (Required): Greenplum Database linked service properties.

### HBase
#### Properties
* **type**: 'HBase' (Required): HBase server linked service.
* **typeProperties**: [HBaseLinkedServiceTypeProperties](#hbaselinkedservicetypeproperties) (Required): HBase server linked service properties.

### Hdfs
#### Properties
* **type**: 'Hdfs' (Required): Hadoop Distributed File System (HDFS) linked service.
* **typeProperties**: [HdfsLinkedServiceTypeProperties](#hdfslinkedservicetypeproperties) (Required): HDFS linked service properties.

### HDInsight
#### Properties
* **type**: 'HDInsight' (Required): HDInsight linked service.
* **typeProperties**: [HDInsightLinkedServiceTypeProperties](#hdinsightlinkedservicetypeproperties) (Required): HDInsight linked service properties.

### HDInsightOnDemand
#### Properties
* **type**: 'HDInsightOnDemand' (Required): HDInsight ondemand linked service.
* **typeProperties**: [HDInsightOnDemandLinkedServiceTypeProperties](#hdinsightondemandlinkedservicetypeproperties) (Required): HDInsight ondemand linked service properties.

### Hive
#### Properties
* **type**: 'Hive' (Required): Hive Server linked service.
* **typeProperties**: [HiveLinkedServiceTypeProperties](#hivelinkedservicetypeproperties) (Required): Hive Server linked service properties.

### HttpServer
#### Properties
* **type**: 'HttpServer' (Required): Linked service for an HTTP source.
* **typeProperties**: [HttpLinkedServiceTypeProperties](#httplinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### Hubspot
#### Properties
* **type**: 'Hubspot' (Required): Hubspot Service linked service.
* **typeProperties**: [HubspotLinkedServiceTypeProperties](#hubspotlinkedservicetypeproperties) (Required): Hubspot Service linked service properties.

### Impala
#### Properties
* **type**: 'Impala' (Required): Impala server linked service.
* **typeProperties**: [ImpalaLinkedServiceTypeProperties](#impalalinkedservicetypeproperties) (Required): Impala server linked service properties.

### Informix
#### Properties
* **type**: 'Informix' (Required): Informix linked service.
* **typeProperties**: [InformixLinkedServiceTypeProperties](#informixlinkedservicetypeproperties) (Required): Informix linked service properties.

### Jira
#### Properties
* **type**: 'Jira' (Required): Jira Service linked service.
* **typeProperties**: [JiraLinkedServiceTypeProperties](#jiralinkedservicetypeproperties) (Required): Jira Service linked service properties.

### Magento
#### Properties
* **type**: 'Magento' (Required): Magento server linked service.
* **typeProperties**: [MagentoLinkedServiceTypeProperties](#magentolinkedservicetypeproperties) (Required): Magento server linked service properties.

### MariaDB
#### Properties
* **type**: 'MariaDB' (Required): MariaDB server linked service.
* **typeProperties**: [MariaDBLinkedServiceTypeProperties](#mariadblinkedservicetypeproperties) (Required): MariaDB server linked service properties.

### Marketo
#### Properties
* **type**: 'Marketo' (Required): Marketo server linked service.
* **typeProperties**: [MarketoLinkedServiceTypeProperties](#marketolinkedservicetypeproperties) (Required): Marketo server linked service properties.

### MicrosoftAccess
#### Properties
* **type**: 'MicrosoftAccess' (Required): Microsoft Access linked service.
* **typeProperties**: [MicrosoftAccessLinkedServiceTypeProperties](#microsoftaccesslinkedservicetypeproperties) (Required): Microsoft Access linked service properties.

### MongoDb
#### Properties
* **type**: 'MongoDb' (Required): Linked service for MongoDb data source.
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required): MongoDB linked service properties.

### MongoDbAtlas
#### Properties
* **type**: 'MongoDbAtlas' (Required): Linked service for MongoDB Atlas data source.
* **typeProperties**: [MongoDbAtlasLinkedServiceTypeProperties](#mongodbatlaslinkedservicetypeproperties) (Required): MongoDB Atlas linked service properties.

### MongoDbV2
#### Properties
* **type**: 'MongoDbV2' (Required): Linked service for MongoDB data source.
* **typeProperties**: [MongoDbV2LinkedServiceTypeProperties](#mongodbv2linkedservicetypeproperties) (Required): MongoDB linked service properties.

### MySql
#### Properties
* **type**: 'MySql' (Required): Linked service for MySQL data source.
* **typeProperties**: [MySqlLinkedServiceTypeProperties](#mysqllinkedservicetypeproperties) (Required): MySQL linked service properties.

### Netezza
#### Properties
* **type**: 'Netezza' (Required): Netezza linked service.
* **typeProperties**: [NetezzaLinkedServiceTypeProperties](#netezzalinkedservicetypeproperties) (Required): Netezza linked service properties.

### OData
#### Properties
* **type**: 'OData' (Required): Open Data Protocol (OData) linked service.
* **typeProperties**: [ODataLinkedServiceTypeProperties](#odatalinkedservicetypeproperties) (Required): OData linked service properties.

### Odbc
#### Properties
* **type**: 'Odbc' (Required): Open Database Connectivity (ODBC) linked service.
* **typeProperties**: [OdbcLinkedServiceTypeProperties](#odbclinkedservicetypeproperties) (Required): ODBC linked service properties.

### Office365
#### Properties
* **type**: 'Office365' (Required): Office365 linked service.
* **typeProperties**: [Office365LinkedServiceTypeProperties](#office365linkedservicetypeproperties) (Required): Office365 linked service properties.

### Oracle
#### Properties
* **type**: 'Oracle' (Required): Oracle database.
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required): Oracle database linked service properties.

### OracleCloudStorage
#### Properties
* **type**: 'OracleCloudStorage' (Required): Linked service for Oracle Cloud Storage.
* **typeProperties**: [OracleCloudStorageLinkedServiceTypeProperties](#oraclecloudstoragelinkedservicetypeproperties) (Required): Oracle Cloud Storage linked service properties.

### OracleServiceCloud
#### Properties
* **type**: 'OracleServiceCloud' (Required): Oracle Service Cloud linked service.
* **typeProperties**: [OracleServiceCloudLinkedServiceTypeProperties](#oracleservicecloudlinkedservicetypeproperties) (Required): Oracle Service Cloud linked service properties.

### Paypal
#### Properties
* **type**: 'Paypal' (Required): Paypal Service linked service.
* **typeProperties**: [PaypalLinkedServiceTypeProperties](#paypallinkedservicetypeproperties) (Required): Paypal Service linked service properties.

### Phoenix
#### Properties
* **type**: 'Phoenix' (Required): Phoenix server linked service.
* **typeProperties**: [PhoenixLinkedServiceTypeProperties](#phoenixlinkedservicetypeproperties) (Required): Phoenix server linked service properties.

### PostgreSql
#### Properties
* **type**: 'PostgreSql' (Required): Linked service for PostgreSQL data source.
* **typeProperties**: [PostgreSqlLinkedServiceTypeProperties](#postgresqllinkedservicetypeproperties) (Required): PostgreSQL linked service properties.

### Presto
#### Properties
* **type**: 'Presto' (Required): Presto server linked service.
* **typeProperties**: [PrestoLinkedServiceTypeProperties](#prestolinkedservicetypeproperties) (Required): Presto server linked service properties.

### QuickBooks
#### Properties
* **type**: 'QuickBooks' (Required): QuickBooks server linked service.
* **typeProperties**: [QuickBooksLinkedServiceTypeProperties](#quickbookslinkedservicetypeproperties) (Required): QuickBooks server linked service properties.

### Responsys
#### Properties
* **type**: 'Responsys' (Required): Responsys linked service.
* **typeProperties**: [ResponsysLinkedServiceTypeProperties](#responsyslinkedservicetypeproperties) (Required): Responsys linked service properties.

### RestService
#### Properties
* **type**: 'RestService' (Required): Rest Service linked service.
* **typeProperties**: [RestServiceLinkedServiceTypeProperties](#restservicelinkedservicetypeproperties) (Required): Rest Service linked service properties.

### Salesforce
#### Properties
* **type**: 'Salesforce' (Required): Linked service for Salesforce.
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required): Salesforce linked service properties.

### SalesforceMarketingCloud
#### Properties
* **type**: 'SalesforceMarketingCloud' (Required): Salesforce Marketing Cloud linked service.
* **typeProperties**: [SalesforceMarketingCloudLinkedServiceTypeProperties](#salesforcemarketingcloudlinkedservicetypeproperties) (Required): Salesforce Marketing Cloud linked service properties.

### SalesforceServiceCloud
#### Properties
* **type**: 'SalesforceServiceCloud' (Required): Linked service for Salesforce Service Cloud.
* **typeProperties**: [SalesforceServiceCloudLinkedServiceTypeProperties](#salesforceservicecloudlinkedservicetypeproperties) (Required): Salesforce Service Cloud linked service properties.

### SapBW
#### Properties
* **type**: 'SapBW' (Required): SAP Business Warehouse Linked Service.
* **typeProperties**: [SapBWLinkedServiceTypeProperties](#sapbwlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### SapCloudForCustomer
#### Properties
* **type**: 'SapCloudForCustomer' (Required): Linked service for SAP Cloud for Customer.
* **typeProperties**: [SapCloudForCustomerLinkedServiceTypeProperties](#sapcloudforcustomerlinkedservicetypeproperties) (Required): SAP Cloud for Customer linked service properties.

### SapEcc
#### Properties
* **type**: 'SapEcc' (Required): Linked service for SAP ERP Central Component(SAP ECC).
* **typeProperties**: [SapEccLinkedServiceTypeProperties](#sapecclinkedservicetypeproperties) (Required): SAP ECC linked service properties.

### SapHana
#### Properties
* **type**: 'SapHana' (Required): SAP HANA Linked Service.
* **typeProperties**: [SapHanaLinkedServiceProperties](#saphanalinkedserviceproperties) (Required): Properties specific to this linked service type.

### SapOpenHub
#### Properties
* **type**: 'SapOpenHub' (Required): SAP Business Warehouse Open Hub Destination Linked Service.
* **typeProperties**: [SapOpenHubLinkedServiceTypeProperties](#sapopenhublinkedservicetypeproperties) (Required): Properties specific to SAP Business Warehouse Open Hub Destination linked service type.

### SapTable
#### Properties
* **type**: 'SapTable' (Required): SAP Table Linked Service.
* **typeProperties**: [SapTableLinkedServiceTypeProperties](#saptablelinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### ServiceNow
#### Properties
* **type**: 'ServiceNow' (Required): ServiceNow server linked service.
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required): ServiceNow server linked service properties.

### Sftp
#### Properties
* **type**: 'Sftp' (Required): A linked service for an SSH File Transfer Protocol (SFTP) server.
* **typeProperties**: [SftpServerLinkedServiceTypeProperties](#sftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### SharePointOnlineList
#### Properties
* **type**: 'SharePointOnlineList' (Required): SharePoint Online List linked service.
* **typeProperties**: [SharePointOnlineListLinkedServiceTypeProperties](#sharepointonlinelistlinkedservicetypeproperties) (Required): SharePoint Online List linked service properties.

### Shopify
#### Properties
* **type**: 'Shopify' (Required): Shopify Service linked service.
* **typeProperties**: [ShopifyLinkedServiceTypeProperties](#shopifylinkedservicetypeproperties) (Required): Shopify Service linked service properties.

### Snowflake
#### Properties
* **type**: 'Snowflake' (Required): Snowflake linked service.
* **typeProperties**: [SnowflakeLinkedServiceTypeProperties](#snowflakelinkedservicetypeproperties) (Required): Snowflake linked service properties.

### Spark
#### Properties
* **type**: 'Spark' (Required): Spark Server linked service.
* **typeProperties**: [SparkLinkedServiceTypeProperties](#sparklinkedservicetypeproperties) (Required): Spark Server linked service properties.

### SqlServer
#### Properties
* **type**: 'SqlServer' (Required): SQL Server linked service.
* **typeProperties**: [SqlServerLinkedServiceTypeProperties](#sqlserverlinkedservicetypeproperties) (Required): SQL Server linked service properties.

### Square
#### Properties
* **type**: 'Square' (Required): Square Service linked service.
* **typeProperties**: [SquareLinkedServiceTypeProperties](#squarelinkedservicetypeproperties) (Required): Square Service linked service properties.

### Sybase
#### Properties
* **type**: 'Sybase' (Required): Linked service for Sybase data source.
* **typeProperties**: [SybaseLinkedServiceTypeProperties](#sybaselinkedservicetypeproperties) (Required): Sybase linked service properties.

### Teradata
#### Properties
* **type**: 'Teradata' (Required): Linked service for Teradata data source.
* **typeProperties**: [TeradataLinkedServiceTypeProperties](#teradatalinkedservicetypeproperties) (Required): Teradata linked service properties.

### Vertica
#### Properties
* **type**: 'Vertica' (Required): Vertica linked service.
* **typeProperties**: [VerticaLinkedServiceTypeProperties](#verticalinkedservicetypeproperties) (Required): Vertica linked service properties.

### Web
#### Properties
* **type**: 'Web' (Required): Web linked service.
* **typeProperties**: [WebLinkedServiceTypeProperties](#weblinkedservicetypeproperties) (Required): Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models.

### Xero
#### Properties
* **type**: 'Xero' (Required): Xero Service linked service.
* **typeProperties**: [XeroLinkedServiceTypeProperties](#xerolinkedservicetypeproperties) (Required): Xero Service linked service properties.

### Zoho
#### Properties
* **type**: 'Zoho' (Required): Zoho server linked service.
* **typeProperties**: [ZohoLinkedServiceTypeProperties](#zoholinkedservicetypeproperties) (Required): Zoho server linked service properties.


## IntegrationRuntimeReference
### Properties
* **parameters**: [Dictionary<string,Object>](#dictionarystringobject): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference integration runtime name.
* **type**: string (Required): Type of integration runtime.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## AmazonMWS
### Properties
* **type**: 'AmazonMWS' (Required): Amazon Marketplace Web Service linked service.
* **typeProperties**: [AmazonMWSLinkedServiceTypeProperties](#amazonmwslinkedservicetypeproperties) (Required): Amazon Marketplace Web Service linked service properties.

## AmazonMWSLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any (Required): The access key id used to access data.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com)
* **marketplaceID**: any (Required): The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2)
* **mwsAuthToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **secretKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **sellerID**: any (Required): The Amazon seller ID.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## AmazonRedshift
### Properties
* **type**: 'AmazonRedshift' (Required): Linked service for Amazon Redshift.
* **typeProperties**: [AmazonRedshiftLinkedServiceTypeProperties](#amazonredshiftlinkedservicetypeproperties) (Required): Amazon Redshift linked service properties.

## AmazonRedshiftLinkedServiceTypeProperties
### Properties
* **database**: any (Required): The database name of the Amazon Redshift source. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer).
* **server**: any (Required): The name of the Amazon Redshift server. Type: string (or Expression with resultType string).
* **username**: any: The username of the Amazon Redshift source. Type: string (or Expression with resultType string).

## AmazonS3
### Properties
* **type**: 'AmazonS3' (Required): Linked service for Amazon S3.
* **typeProperties**: [AmazonS3LinkedServiceTypeProperties](#amazons3linkedservicetypeproperties) (Required): Amazon S3 linked service properties.

## AmazonS3LinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
* **authenticationType**: any: The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **serviceUrl**: any: This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
* **sessionToken**: [SecretBase](#secretbase): The base definition of a secret type.

## AmazonS3Compatible
### Properties
* **type**: 'AmazonS3Compatible' (Required): Linked service for Amazon S3 Compatible.
* **typeProperties**: [AmazonS3CompatibleLinkedServiceTypeProperties](#amazons3compatiblelinkedservicetypeproperties) (Required): Amazon S3 Compatible linked service properties.

## AmazonS3CompatibleLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: The access key identifier of the Amazon S3 Compatible Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **forcePathStyle**: any: If true, use S3 path-style access instead of virtual hosted-style access. Default value is false. Type: boolean (or Expression with resultType boolean).
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **serviceUrl**: any: This value specifies the endpoint to access with the Amazon S3 Compatible Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).

## AzureBatch
### Properties
* **type**: 'AzureBatch' (Required): Azure Batch linked service.
* **typeProperties**: [AzureBatchLinkedServiceTypeProperties](#azurebatchlinkedservicetypeproperties) (Required): Azure Batch linked service properties.

## AzureBatchLinkedServiceTypeProperties
### Properties
* **accessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **accountName**: any (Required): The Azure Batch account name. Type: string (or Expression with resultType string).
* **batchUri**: any (Required): The Azure Batch URI. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **poolName**: any (Required): The Azure Batch pool name. Type: string (or Expression with resultType string).

## AzureBlobFS
### Properties
* **type**: 'AzureBlobFS' (Required): Azure Data Lake Storage Gen2 linked service.
* **typeProperties**: [AzureBlobFSLinkedServiceTypeProperties](#azureblobfslinkedservicetypeproperties) (Required): Azure Data Lake Storage Gen2 linked service properties.

## AzureBlobFSLinkedServiceTypeProperties
### Properties
* **accountKey**: any: Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **url**: any (Required): Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).

## AzureBlobStorage
### Properties
* **type**: 'AzureBlobStorage' (Required): The azure blob storage linked service.
* **typeProperties**: [AzureBlobStorageLinkedServiceTypeProperties](#azureblobstoragelinkedservicetypeproperties) (Required): Azure Blob Storage linked service properties.

## AzureBlobStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **accountKind**: string: Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string).
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **connectionString**: any: The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **sasToken**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **sasUri**: any: SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **serviceEndpoint**: string: Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property.
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureDatabricks
### Properties
* **type**: 'AzureDatabricks' (Required): Azure Databricks linked service.
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required): Azure Databricks linked service properties.

## AzureDatabricksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **authentication**: any: Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
* **domain**: any (Required): <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **existingClusterId**: any: The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string).
* **instancePoolId**: any: The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string).
* **newClusterCustomTags**: [Dictionary<string,Object>](#dictionarystringobject): Additional tags for cluster resources. This property is ignored in instance pool configurations.
* **newClusterDriverNodeType**: any: The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string).
* **newClusterEnableElasticDisk**: any: Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean).
* **newClusterInitScripts**: any: User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings).
* **newClusterLogDestination**: any: Specify a location to deliver Spark driver, worker, and event logs. Type: string (or Expression with resultType string).
* **newClusterNodeType**: any: The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string).
* **newClusterNumOfWorker**: any: If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string).
* **newClusterSparkConf**: [Dictionary<string,Object>](#dictionarystringobject): A set of optional, user-specified Spark configuration key-value pairs.
* **newClusterSparkEnvVars**: [Dictionary<string,Object>](#dictionarystringobject): A set of optional, user-specified Spark environment variables key-value pairs.
* **newClusterVersion**: any: If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string).
* **policyId**: any: The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string).
* **workspaceResourceId**: any: Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureDatabricksDeltaLake
### Properties
* **type**: 'AzureDatabricksDeltaLake' (Required): Azure Databricks Delta Lake linked service.
* **typeProperties**: [AzureDatabricksDetltaLakeLinkedServiceTypeProperties](#azuredatabricksdetltalakelinkedservicetypeproperties) (Required): Azure Databricks Delta Lake linked service properties.

## AzureDatabricksDetltaLakeLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **clusterId**: any: The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string).
* **domain**: any (Required): <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## AzureDataExplorer
### Properties
* **type**: 'AzureDataExplorer' (Required): Azure Data Explorer (Kusto) linked service.
* **typeProperties**: [AzureDataExplorerLinkedServiceTypeProperties](#azuredataexplorerlinkedservicetypeproperties) (Required): Azure Data Explorer (Kusto) linked service properties.

## AzureDataExplorerLinkedServiceTypeProperties
### Properties
* **database**: any (Required): Database name for connection. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string)
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureDataLakeAnalytics
### Properties
* **type**: 'AzureDataLakeAnalytics' (Required): Azure Data Lake Analytics linked service.
* **typeProperties**: [AzureDataLakeAnalyticsLinkedServiceTypeProperties](#azuredatalakeanalyticslinkedservicetypeproperties) (Required): Azure Data Lake Analytics linked service properties.

## AzureDataLakeAnalyticsLinkedServiceTypeProperties
### Properties
* **accountName**: any (Required): The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string).
* **dataLakeAnalyticsUri**: any: Azure Data Lake Analytics URI Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **resourceGroupName**: any: Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **subscriptionId**: any: Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
* **tenant**: any (Required): The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureDataLakeStore
### Properties
* **type**: 'AzureDataLakeStore' (Required): Azure Data Lake Store linked service.
* **typeProperties**: [AzureDataLakeStoreLinkedServiceTypeProperties](#azuredatalakestorelinkedservicetypeproperties) (Required): Azure Data Lake Store linked service properties.

## AzureDataLakeStoreLinkedServiceTypeProperties
### Properties
* **accountName**: any: Data Lake Store account name. Type: string (or Expression with resultType string).
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **dataLakeStoreUri**: any (Required): Data Lake Store service URI. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **resourceGroupName**: any: Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **subscriptionId**: any: Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureFileStorage
### Properties
* **type**: 'AzureFileStorage' (Required): Azure File Storage linked service.
* **typeProperties**: [AzureFileStorageLinkedServiceTypeProperties](#azurefilestoragelinkedservicetypeproperties) (Required): Azure File Storage linked service properties.

## AzureFileStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **connectionString**: any: The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **fileShare**: any: The azure file share name. It is required when auth with accountKey/sasToken. Type: string (or Expression with resultType string).
* **host**: any: Host name of the server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **sasToken**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **sasUri**: any: SAS URI of the Azure File resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **snapshot**: any: The azure file share snapshot version. Type: string (or Expression with resultType string).
* **userId**: any: User ID to logon the server. Type: string (or Expression with resultType string).

## AzureFunction
### Properties
* **type**: 'AzureFunction' (Required): Azure Function linked service.
* **typeProperties**: [AzureFunctionLinkedServiceTypeProperties](#azurefunctionlinkedservicetypeproperties) (Required): Azure Function linked service properties.

## AzureFunctionLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **functionAppUrl**: any (Required): The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net.
* **functionKey**: [SecretBase](#secretbase): The base definition of a secret type.

## AzureKeyVault
### Properties
* **type**: 'AzureKeyVault' (Required): Azure Key Vault linked service.
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required): Azure Key Vault linked service properties.

## AzureKeyVaultLinkedServiceTypeProperties
### Properties
* **baseUrl**: any (Required): The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string).

## AzureMariaDB
### Properties
* **type**: 'AzureMariaDB' (Required): Azure Database for MariaDB linked service.
* **typeProperties**: [AzureMariaDBLinkedServiceTypeProperties](#azuremariadblinkedservicetypeproperties) (Required): Azure Database for MariaDB linked service properties.

## AzureMariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## AzureML
### Properties
* **type**: 'AzureML' (Required): Azure ML Studio Web Service linked service.
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required): Azure ML Studio Web Service linked service properties.

## AzureMLLinkedServiceTypeProperties
### Properties
* **apiKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **mlEndpoint**: any (Required): The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **updateResourceEndpoint**: any: The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).

## AzureMLService
### Properties
* **type**: 'AzureMLService' (Required): Azure ML Service linked service.
* **typeProperties**: [AzureMLServiceLinkedServiceTypeProperties](#azuremlservicelinkedservicetypeproperties) (Required): Azure ML Service linked service properties.

## AzureMLServiceLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **mlWorkspaceName**: any (Required): Azure ML Service workspace name. Type: string (or Expression with resultType string).
* **resourceGroupName**: any (Required): Azure ML Service workspace resource group name. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **subscriptionId**: any (Required): Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string).
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureMySql
### Properties
* **type**: 'AzureMySql' (Required): Azure MySQL database linked service.
* **typeProperties**: [AzureMySqlLinkedServiceTypeProperties](#azuremysqllinkedservicetypeproperties) (Required): Azure MySQL database linked service properties.

## AzureMySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## AzurePostgreSql
### Properties
* **type**: 'AzurePostgreSql' (Required): Azure PostgreSQL linked service.
* **typeProperties**: [AzurePostgreSqlLinkedServiceTypeProperties](#azurepostgresqllinkedservicetypeproperties) (Required): Azure PostgreSQL linked service properties.

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## AzureSearch
### Properties
* **type**: 'AzureSearch' (Required): Linked service for Windows Azure Search Service.
* **typeProperties**: [AzureSearchLinkedServiceTypeProperties](#azuresearchlinkedservicetypeproperties) (Required): Windows Azure Search Service linked service properties.

## AzureSearchLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **key**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): URL for Azure Search service. Type: string (or Expression with resultType string).

## AzureSqlDatabase
### Properties
* **type**: 'AzureSqlDatabase' (Required): Microsoft Azure SQL Database linked service.
* **typeProperties**: [AzureSqlDatabaseLinkedServiceTypeProperties](#azuresqldatabaselinkedservicetypeproperties) (Required): Azure SQL Database linked service properties.

## AzureSqlDatabaseLinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## SqlAlwaysEncryptedProperties
### Properties
* **alwaysEncryptedAkvAuthType**: 'ManagedIdentity' | 'ServicePrincipal' (Required): Sql always encrypted AKV authentication type. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Azure Key Vault authentication. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.

## AzureSqlDW
### Properties
* **type**: 'AzureSqlDW' (Required): Azure SQL Data Warehouse linked service.
* **typeProperties**: [AzureSqlDWLinkedServiceTypeProperties](#azuresqldwlinkedservicetypeproperties) (Required): Azure SQL Data Warehouse linked service properties.

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureSqlMI
### Properties
* **type**: 'AzureSqlMI' (Required): Azure SQL Managed Instance linked service.
* **typeProperties**: [AzureSqlMILinkedServiceTypeProperties](#azuresqlmilinkedservicetypeproperties) (Required): Azure SQL Managed Instance linked service properties.

## AzureSqlMILinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureStorage
### Properties
* **type**: 'AzureStorage' (Required): The storage account linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

## AzureStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **connectionString**: any: The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **sasToken**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **sasUri**: any: SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.

## AzureTableStorage
### Properties
* **type**: 'AzureTableStorage' (Required): The azure table storage linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

## Cassandra
### Properties
* **type**: 'Cassandra' (Required): Linked service for Cassandra data source.
* **typeProperties**: [CassandraLinkedServiceTypeProperties](#cassandralinkedservicetypeproperties) (Required): Cassandra linked service properties.

## CassandraLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: AuthenticationType to be used for connection. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): Host name for connection. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The port for the connection. Type: integer (or Expression with resultType integer).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## CommonDataServiceForApps
### Properties
* **type**: 'CommonDataServiceForApps' (Required): Common Data Service for Apps linked service.
* **typeProperties**: [CommonDataServiceForAppsLinkedServiceTypeProperties](#commondataserviceforappslinkedservicetypeproperties) (Required): Common Data Service for Apps linked service properties.

## CommonDataServiceForAppsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
* **deploymentType**: any (Required): The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **hostName**: any: The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
* **organizationName**: any: The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
* **servicePrincipalCredential**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
* **serviceUri**: any: The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
* **username**: any: User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string).

## Concur
### Properties
* **type**: 'Concur' (Required): Concur Service linked service.
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required): Concur Service linked service properties.

## ConcurLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Application client_id supplied by Concur App Management.
* **connectionProperties**: any: Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any (Required): The user name that you use to access Concur Service.

## CosmosDb
### Properties
* **type**: 'CosmosDb' (Required): Microsoft Azure Cosmos Database (CosmosDB) linked service.
* **typeProperties**: [CosmosDbLinkedServiceTypeProperties](#cosmosdblinkedservicetypeproperties) (Required): CosmosDB linked service properties.

## CosmosDbLinkedServiceTypeProperties
### Properties
* **accountEndpoint**: any: The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string)
* **accountKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **connectionMode**: 'Direct' | 'Gateway': The connection mode used to access CosmosDB account. Type: string (or Expression with resultType string).
* **connectionString**: any: The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any: The name of the database. Type: string (or Expression with resultType string)
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **servicePrincipalCredential**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalCredentialType**: 'ServicePrincipalCert' | 'ServicePrincipalKey': The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## CosmosDbMongoDbApi
### Properties
* **type**: 'CosmosDbMongoDbApi' (Required): Linked service for CosmosDB (MongoDB API) data source.
* **typeProperties**: [CosmosDbMongoDbApiLinkedServiceTypeProperties](#cosmosdbmongodbapilinkedservicetypeproperties) (Required): CosmosDB (MongoDB API) linked service properties.

## CosmosDbMongoDbApiLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any (Required): The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string).

## Couchbase
### Properties
* **type**: 'Couchbase' (Required): Couchbase server linked service.
* **typeProperties**: [CouchbaseLinkedServiceTypeProperties](#couchbaselinkedservicetypeproperties) (Required): Couchbase server linked service properties.

## CouchbaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **credString**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## CustomDataSource
### Properties
* **type**: 'CustomDataSource' (Required): Custom linked service.
* **typeProperties**: any (Required): Custom linked service properties.

## Db2
### Properties
* **type**: 'Db2' (Required): Linked service for DB2 data source.
* **typeProperties**: [Db2LinkedServiceTypeProperties](#db2linkedservicetypeproperties) (Required): DB2 linked service properties.

## Db2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic': AuthenticationType to be used for connection. It is mutually exclusive with connectionString property.
* **certificateCommonName**: any: Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
* **connectionString**: any: The connection string. It is mutually exclusive with server, database, authenticationType, userName, packageCollection and certificateCommonName property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any: Database name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
* **packageCollection**: any: Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).

## Drill
### Properties
* **type**: 'Drill' (Required): Drill server linked service.
* **typeProperties**: [DrillLinkedServiceTypeProperties](#drilllinkedservicetypeproperties) (Required): Drill server linked service properties.

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## Dynamics
### Properties
* **type**: 'Dynamics' (Required): Dynamics linked service.
* **typeProperties**: [DynamicsLinkedServiceTypeProperties](#dynamicslinkedservicetypeproperties) (Required): Dynamics linked service properties.

## DynamicsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
* **deploymentType**: any (Required): The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **hostName**: any: The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
* **organizationName**: any: The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
* **servicePrincipalCredential**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
* **serviceUri**: any: The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
* **username**: any: User name to access the Dynamics instance. Type: string (or Expression with resultType string).

## DynamicsAX
### Properties
* **type**: 'DynamicsAX' (Required): Dynamics AX linked service.
* **typeProperties**: [DynamicsAXLinkedServiceTypeProperties](#dynamicsaxlinkedservicetypeproperties) (Required): Dynamics AX linked service properties.

## DynamicsAXLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any (Required): Specify the resource you are requesting authorization. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any (Required): Specify the application's client ID. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **tenant**: any (Required): Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string).
* **url**: any (Required): The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint.

## DynamicsCrm
### Properties
* **type**: 'DynamicsCrm' (Required): Dynamics CRM linked service.
* **typeProperties**: [DynamicsCrmLinkedServiceTypeProperties](#dynamicscrmlinkedservicetypeproperties) (Required): Dynamics CRM linked service properties.

## DynamicsCrmLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
* **deploymentType**: any (Required): The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **hostName**: any: The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
* **organizationName**: any: The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
* **servicePrincipalCredential**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
* **serviceUri**: any: The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
* **username**: any: User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string).

## Eloqua
### Properties
* **type**: 'Eloqua' (Required): Eloqua server linked service.
* **typeProperties**: [EloquaLinkedServiceTypeProperties](#eloqualinkedservicetypeproperties) (Required): Eloqua server linked service properties.

## EloquaLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Eloqua server. (i.e. eloqua.example.com)
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any (Required): The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice)

## FileServer
### Properties
* **type**: 'FileServer' (Required): File system linked service.
* **typeProperties**: [FileServerLinkedServiceTypeProperties](#fileserverlinkedservicetypeproperties) (Required): File system linked service properties.

## FileServerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): Host name of the server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userId**: any: User ID to logon the server. Type: string (or Expression with resultType string).

## FtpServer
### Properties
* **type**: 'FtpServer' (Required): A FTP server Linked Service.
* **typeProperties**: [FtpServerLinkedServiceTypeProperties](#ftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

## FtpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic': The authentication type to be used to connect to the FTP server.
* **enableServerCertificateValidation**: any: If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
* **enableSsl**: any: If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): Host name of the FTP server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0.
* **userName**: any: Username to logon the FTP server. Type: string (or Expression with resultType string).

## GoogleAdWords
### Properties
* **type**: 'GoogleAdWords' (Required): Google AdWords service linked service.
* **typeProperties**: [GoogleAdWordsLinkedServiceTypeProperties](#googleadwordslinkedservicetypeproperties) (Required): Google AdWords service linked service properties.

## GoogleAdWordsLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required): The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
* **clientCustomerID**: any (Required): The Client customer ID of the AdWords account that you want to fetch report data for.
* **clientId**: any: The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **developerToken**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **email**: any: The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **keyFilePath**: any: The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR.
* **refreshToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## GoogleBigQuery
### Properties
* **type**: 'GoogleBigQuery' (Required): Google BigQuery service linked service.
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required): Google BigQuery service linked service properties.

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any: A comma-separated list of public BigQuery projects to access.
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required): The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
* **clientId**: any: The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **email**: any: The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **keyFilePath**: any: The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR.
* **project**: any (Required): The default BigQuery project to query against.
* **refreshToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **requestGoogleDriveScope**: any: Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## GoogleCloudStorage
### Properties
* **type**: 'GoogleCloudStorage' (Required): Linked service for Google Cloud Storage.
* **typeProperties**: [GoogleCloudStorageLinkedServiceTypeProperties](#googlecloudstoragelinkedservicetypeproperties) (Required): Google Cloud Storage linked service properties.

## GoogleCloudStorageLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **serviceUrl**: any: This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).

## Greenplum
### Properties
* **type**: 'Greenplum' (Required): Greenplum Database linked service.
* **typeProperties**: [GreenplumLinkedServiceTypeProperties](#greenplumlinkedservicetypeproperties) (Required): Greenplum Database linked service properties.

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## HBase
### Properties
* **type**: 'HBase' (Required): HBase server linked service.
* **typeProperties**: [HBaseLinkedServiceTypeProperties](#hbaselinkedservicetypeproperties) (Required): HBase server linked service properties.

## HBaseLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Basic' (Required): The authentication mechanism to use to connect to the HBase server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the HBase server. (i.e. 192.168.222.160)
* **httpPath**: any: The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version)
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port that the HBase instance uses to listen for client connections. The default value is 9090.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to connect to the HBase instance.

## Hdfs
### Properties
* **type**: 'Hdfs' (Required): Hadoop Distributed File System (HDFS) linked service.
* **typeProperties**: [HdfsLinkedServiceTypeProperties](#hdfslinkedservicetypeproperties) (Required): HDFS linked service properties.

## HdfsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string).
* **userName**: any: User name for Windows authentication. Type: string (or Expression with resultType string).

## HDInsight
### Properties
* **type**: 'HDInsight' (Required): HDInsight linked service.
* **typeProperties**: [HDInsightLinkedServiceTypeProperties](#hdinsightlinkedservicetypeproperties) (Required): HDInsight linked service properties.

## HDInsightLinkedServiceTypeProperties
### Properties
* **clusterUri**: any (Required): HDInsight cluster URI. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **fileSystem**: any: Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string).
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **isEspEnabled**: any: Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: HDInsight cluster user name. Type: string (or Expression with resultType string).

## HDInsightOnDemand
### Properties
* **type**: 'HDInsightOnDemand' (Required): HDInsight ondemand linked service.
* **typeProperties**: [HDInsightOnDemandLinkedServiceTypeProperties](#hdinsightondemandlinkedservicetypeproperties) (Required): HDInsight ondemand linked service properties.

## HDInsightOnDemandLinkedServiceTypeProperties
### Properties
* **additionalLinkedServiceNames**: [LinkedServiceReference](#linkedservicereference)[]: Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf.
* **clusterNamePrefix**: any: The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string).
* **clusterPassword**: [SecretBase](#secretbase): The base definition of a secret type.
* **clusterResourceGroup**: any (Required): The resource group where the cluster belongs. Type: string (or Expression with resultType string).
* **clusterSize**: any (Required): Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string).
* **clusterSshPassword**: [SecretBase](#secretbase): The base definition of a secret type.
* **clusterSshUserName**: any: The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string).
* **clusterType**: any: The cluster type. Type: string (or Expression with resultType string).
* **clusterUserName**: any: The username to access the cluster. Type: string (or Expression with resultType string).
* **coreConfiguration**: any: Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created.
* **dataNodeSize**: any: Specifies the size of the data node for the HDInsight cluster.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **hBaseConfiguration**: any: Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster.
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **hdfsConfiguration**: any: Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster.
* **headNodeSize**: any: Specifies the size of the head node for the HDInsight cluster.
* **hiveConfiguration**: any: Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster.
* **hostSubscriptionId**: any (Required): The customer’s subscription to host the cluster. Type: string (or Expression with resultType string).
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **mapReduceConfiguration**: any: Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster.
* **oozieConfiguration**: any: Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster.
* **scriptActions**: [ScriptAction](#scriptaction)[]: Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions.
* **servicePrincipalId**: any: The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **sparkVersion**: any: The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string).
* **stormConfiguration**: any: Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster.
* **subnetName**: any: The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string).
* **tenant**: any (Required): The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
* **timeToLive**: any (Required): The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
* **version**: any (Required): Version of the HDInsight cluster.  Type: string (or Expression with resultType string).
* **virtualNetworkId**: any: The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string).
* **yarnConfiguration**: any: Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster.
* **zookeeperNodeSize**: any: Specifies the size of the Zoo Keeper node for the HDInsight cluster.

## ScriptAction
### Properties
* **name**: string (Required): The user provided name of the script action.
* **parameters**: string: The parameters for the script action.
* **roles**: any (Required): The node types on which the script action should be executed.
* **uri**: string (Required): The URI for the script action.

## Hive
### Properties
* **type**: 'Hive' (Required): Hive Server linked service.
* **typeProperties**: [HiveLinkedServiceTypeProperties](#hivelinkedservicetypeproperties) (Required): Hive Server linked service properties.

## HiveLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required): The authentication method used to access the Hive server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable).
* **httpPath**: any: The partial URL corresponding to the Hive server.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port that the Hive server uses to listen for client connections.
* **serverType**: 'HiveServer1' | 'HiveServer2' | 'HiveThriftServer': The type of Hive server.
* **serviceDiscoveryMode**: any: true to indicate using the ZooKeeper service, false not.
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL': The transport protocol to use in the Thrift layer.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **useNativeQuery**: any: Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL.
* **username**: any: The user name that you use to access Hive Server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
* **zooKeeperNameSpace**: any: The namespace on ZooKeeper under which Hive Server 2 nodes are added.

## HttpServer
### Properties
* **type**: 'HttpServer' (Required): Linked service for an HTTP source.
* **typeProperties**: [HttpLinkedServiceTypeProperties](#httplinkedservicetypeproperties) (Required): Properties specific to this linked service type.

## HttpLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | 'ClientCertificate' | 'Digest' | 'Windows': The authentication type to be used to connect to the HTTP server.
* **authHeaders**: any: The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object).
* **certThumbprint**: any: Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
* **embeddedCertData**: any: Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
* **enableServerCertificateValidation**: any: If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): The base URL of the HTTP endpoint, e.g. http://www.microsoft.com. Type: string (or Expression with resultType string).
* **userName**: any: User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string).

## Hubspot
### Properties
* **type**: 'Hubspot' (Required): Hubspot Service linked service.
* **typeProperties**: [HubspotLinkedServiceTypeProperties](#hubspotlinkedservicetypeproperties) (Required): Hubspot Service linked service properties.

## HubspotLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **clientId**: any (Required): The client ID associated with your Hubspot application.
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **refreshToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## Impala
### Properties
* **type**: 'Impala' (Required): Impala server linked service.
* **typeProperties**: [ImpalaLinkedServiceTypeProperties](#impalalinkedservicetypeproperties) (Required): Impala server linked service properties.

## ImpalaLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'SASLUsername' | 'UsernameAndPassword' (Required): The authentication type to use.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the Impala server. (i.e. 192.168.222.160)
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port that the Impala server uses to listen for client connections. The default value is 21050.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to access the Impala server. The default value is anonymous when using SASLUsername.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## Informix
### Properties
* **type**: 'Informix' (Required): Informix linked service.
* **typeProperties**: [InformixLinkedServiceTypeProperties](#informixlinkedservicetypeproperties) (Required): Informix linked service properties.

## InformixLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
* **credential**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: User name for Basic authentication. Type: string (or Expression with resultType string).

## Jira
### Properties
* **type**: 'Jira' (Required): Jira Service linked service.
* **typeProperties**: [JiraLinkedServiceTypeProperties](#jiralinkedservicetypeproperties) (Required): Jira Service linked service properties.

## JiraLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the Jira service. (e.g. jira.example.com)
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any (Required): The user name that you use to access Jira Service.

## Magento
### Properties
* **type**: 'Magento' (Required): Magento server linked service.
* **typeProperties**: [MagentoLinkedServiceTypeProperties](#magentolinkedservicetypeproperties) (Required): Magento server linked service properties.

## MagentoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The URL of the Magento instance. (i.e. 192.168.222.110/magento3)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## MariaDB
### Properties
* **type**: 'MariaDB' (Required): MariaDB server linked service.
* **typeProperties**: [MariaDBLinkedServiceTypeProperties](#mariadblinkedservicetypeproperties) (Required): MariaDB server linked service properties.

## MariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## Marketo
### Properties
* **type**: 'Marketo' (Required): Marketo server linked service.
* **typeProperties**: [MarketoLinkedServiceTypeProperties](#marketolinkedservicetypeproperties) (Required): Marketo server linked service properties.

## MarketoLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client Id of your Marketo service.
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## MicrosoftAccess
### Properties
* **type**: 'MicrosoftAccess' (Required): Microsoft Access linked service.
* **typeProperties**: [MicrosoftAccessLinkedServiceTypeProperties](#microsoftaccesslinkedservicetypeproperties) (Required): Microsoft Access linked service properties.

## MicrosoftAccessLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
* **credential**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: User name for Basic authentication. Type: string (or Expression with resultType string).

## MongoDb
### Properties
* **type**: 'MongoDb' (Required): Linked service for MongoDb data source.
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required): MongoDB linked service properties.

## MongoDbLinkedServiceTypeProperties
### Properties
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean).
* **authenticationType**: 'Anonymous' | 'Basic': The authentication type to be used to connect to the MongoDB database.
* **authSource**: any: Database to verify the username and password. Type: string (or Expression with resultType string).
* **databaseName**: any (Required): The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0.
* **server**: any (Required): The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## MongoDbAtlas
### Properties
* **type**: 'MongoDbAtlas' (Required): Linked service for MongoDB Atlas data source.
* **typeProperties**: [MongoDbAtlasLinkedServiceTypeProperties](#mongodbatlaslinkedservicetypeproperties) (Required): MongoDB Atlas linked service properties.

## MongoDbAtlasLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The MongoDB Atlas connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any (Required): The name of the MongoDB Atlas database that you want to access. Type: string (or Expression with resultType string).

## MongoDbV2
### Properties
* **type**: 'MongoDbV2' (Required): Linked service for MongoDB data source.
* **typeProperties**: [MongoDbV2LinkedServiceTypeProperties](#mongodbv2linkedservicetypeproperties) (Required): MongoDB linked service properties.

## MongoDbV2LinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any (Required): The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).

## MySql
### Properties
* **type**: 'MySql' (Required): Linked service for MySQL data source.
* **typeProperties**: [MySqlLinkedServiceTypeProperties](#mysqllinkedservicetypeproperties) (Required): MySQL linked service properties.

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## Netezza
### Properties
* **type**: 'Netezza' (Required): Netezza linked service.
* **typeProperties**: [NetezzaLinkedServiceTypeProperties](#netezzalinkedservicetypeproperties) (Required): Netezza linked service properties.

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## OData
### Properties
* **type**: 'OData' (Required): Open Data Protocol (OData) linked service.
* **typeProperties**: [ODataLinkedServiceTypeProperties](#odatalinkedservicetypeproperties) (Required): OData linked service properties.

## ODataLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any: Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string).
* **aadServicePrincipalCredentialType**: 'ServicePrincipalCert' | 'ServicePrincipalKey': Specify the credential type (key or cert) is used for service principal.
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' | 'Windows': Type of authentication used to connect to the OData service.
* **authHeaders**: any: The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object).
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalEmbeddedCert**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalEmbeddedCertPassword**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalId**: any: Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string).
* **url**: any (Required): The URL of the OData service endpoint. Type: string (or Expression with resultType string).
* **userName**: any: User name of the OData service. Type: string (or Expression with resultType string).

## Odbc
### Properties
* **type**: 'Odbc' (Required): Open Database Connectivity (ODBC) linked service.
* **typeProperties**: [OdbcLinkedServiceTypeProperties](#odbclinkedservicetypeproperties) (Required): ODBC linked service properties.

## OdbcLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
* **credential**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: User name for Basic authentication. Type: string (or Expression with resultType string).

## Office365
### Properties
* **type**: 'Office365' (Required): Office365 linked service.
* **typeProperties**: [Office365LinkedServiceTypeProperties](#office365linkedservicetypeproperties) (Required): Office365 linked service properties.

## Office365LinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **office365TenantId**: any (Required): Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any (Required): Specify the application's client ID. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **servicePrincipalTenantId**: any (Required): Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string).

## Oracle
### Properties
* **type**: 'Oracle' (Required): Oracle database.
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required): Oracle database linked service properties.

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## OracleCloudStorage
### Properties
* **type**: 'OracleCloudStorage' (Required): Linked service for Oracle Cloud Storage.
* **typeProperties**: [OracleCloudStorageLinkedServiceTypeProperties](#oraclecloudstoragelinkedservicetypeproperties) (Required): Oracle Cloud Storage linked service properties.

## OracleCloudStorageLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: The access key identifier of the Oracle Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **serviceUrl**: any: This value specifies the endpoint to access with the Oracle Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).

## OracleServiceCloud
### Properties
* **type**: 'OracleServiceCloud' (Required): Oracle Service Cloud linked service.
* **typeProperties**: [OracleServiceCloudLinkedServiceTypeProperties](#oracleservicecloudlinkedservicetypeproperties) (Required): Oracle Service Cloud linked service properties.

## OracleServiceCloudLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The URL of the Oracle Service Cloud instance.
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **username**: any (Required): The user name that you use to access Oracle Service Cloud server.

## Paypal
### Properties
* **type**: 'Paypal' (Required): Paypal Service linked service.
* **typeProperties**: [PaypalLinkedServiceTypeProperties](#paypallinkedservicetypeproperties) (Required): Paypal Service linked service properties.

## PaypalLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client ID associated with your PayPal application.
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The URL of the PayPal instance. (i.e. api.sandbox.paypal.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## Phoenix
### Properties
* **type**: 'Phoenix' (Required): Phoenix server linked service.
* **typeProperties**: [PhoenixLinkedServiceTypeProperties](#phoenixlinkedservicetypeproperties) (Required): Phoenix server linked service properties.

## PhoenixLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required): The authentication mechanism used to connect to the Phoenix server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the Phoenix server. (i.e. 192.168.222.160)
* **httpPath**: any: The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to connect to the Phoenix server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## PostgreSql
### Properties
* **type**: 'PostgreSql' (Required): Linked service for PostgreSQL data source.
* **typeProperties**: [PostgreSqlLinkedServiceTypeProperties](#postgresqllinkedservicetypeproperties) (Required): PostgreSQL linked service properties.

## PostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## Presto
### Properties
* **type**: 'Presto' (Required): Presto server linked service.
* **typeProperties**: [PrestoLinkedServiceTypeProperties](#prestolinkedservicetypeproperties) (Required): Presto server linked service properties.

## PrestoLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'LDAP' (Required): The authentication mechanism used to connect to the Presto server.
* **catalog**: any (Required): The catalog context for all request against the server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the Presto server. (i.e. 192.168.222.160)
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port that the Presto server uses to listen for client connections. The default value is 8080.
* **serverVersion**: any (Required): The version of the Presto server. (i.e. 0.148-t)
* **timeZoneID**: any: The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to connect to the Presto server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## QuickBooks
### Properties
* **type**: 'QuickBooks' (Required): QuickBooks server linked service.
* **typeProperties**: [QuickBooksLinkedServiceTypeProperties](#quickbookslinkedservicetypeproperties) (Required): QuickBooks server linked service properties.

## QuickBooksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **accessTokenSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **companyId**: any: The company ID of the QuickBooks company to authorize.
* **connectionProperties**: any: Properties used to connect to QuickBooks. It is mutually exclusive with any other properties in the linked service. Type: object.
* **consumerKey**: any: The consumer key for OAuth 1.0 authentication.
* **consumerSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any: The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.

## Responsys
### Properties
* **type**: 'Responsys' (Required): Responsys linked service.
* **typeProperties**: [ResponsysLinkedServiceTypeProperties](#responsyslinkedservicetypeproperties) (Required): Responsys linked service properties.

## ResponsysLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client ID associated with the Responsys application. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Responsys server.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).

## RestService
### Properties
* **type**: 'RestService' (Required): Rest Service linked service.
* **typeProperties**: [RestServiceLinkedServiceTypeProperties](#restservicelinkedservicetypeproperties) (Required): Rest Service linked service properties.

## RestServiceLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any: The resource you are requesting authorization to use.
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' (Required): Type of authentication used to connect to the REST service.
* **authHeaders**: any: The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object).
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **enableServerCertificateValidation**: any: Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalId**: any: The application's client ID used in AadServicePrincipal authentication type.
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides.
* **url**: any (Required): The base URL of the REST service.
* **userName**: any: The user name used in Basic authentication type.

## Salesforce
### Properties
* **type**: 'Salesforce' (Required): Linked service for Salesforce.
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required): Salesforce linked service properties.

## SalesforceLinkedServiceTypeProperties
### Properties
* **apiVersion**: any: The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **environmentUrl**: any: The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **securityToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **username**: any: The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).

## SalesforceMarketingCloud
### Properties
* **type**: 'SalesforceMarketingCloud' (Required): Salesforce Marketing Cloud linked service.
* **typeProperties**: [SalesforceMarketingCloudLinkedServiceTypeProperties](#salesforcemarketingcloudlinkedservicetypeproperties) (Required): Salesforce Marketing Cloud linked service properties.

## SalesforceMarketingCloudLinkedServiceTypeProperties
### Properties
* **clientId**: any: The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **connectionProperties**: any: Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).

## SalesforceServiceCloud
### Properties
* **type**: 'SalesforceServiceCloud' (Required): Linked service for Salesforce Service Cloud.
* **typeProperties**: [SalesforceServiceCloudLinkedServiceTypeProperties](#salesforceservicecloudlinkedservicetypeproperties) (Required): Salesforce Service Cloud linked service properties.

## SalesforceServiceCloudLinkedServiceTypeProperties
### Properties
* **apiVersion**: any: The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **environmentUrl**: any: The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
* **extendedProperties**: any: Extended properties appended to the connection string. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **securityToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **username**: any: The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).

## SapBW
### Properties
* **type**: 'SapBW' (Required): SAP Business Warehouse Linked Service.
* **typeProperties**: [SapBWLinkedServiceTypeProperties](#sapbwlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

## SapBWLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any (Required): Host name of the SAP BW instance. Type: string (or Expression with resultType string).
* **systemNumber**: any (Required): System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP BW server. Type: string (or Expression with resultType string).

## SapCloudForCustomer
### Properties
* **type**: 'SapCloudForCustomer' (Required): Linked service for SAP Cloud for Customer.
* **typeProperties**: [SapCloudForCustomerLinkedServiceTypeProperties](#sapcloudforcustomerlinkedservicetypeproperties) (Required): SAP Cloud for Customer linked service properties.

## SapCloudForCustomerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string).
* **username**: any: The username for Basic authentication. Type: string (or Expression with resultType string).

## SapEcc
### Properties
* **type**: 'SapEcc' (Required): Linked service for SAP ERP Central Component(SAP ECC).
* **typeProperties**: [SapEccLinkedServiceTypeProperties](#sapecclinkedservicetypeproperties) (Required): SAP ECC linked service properties.

## SapEccLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: string (Required): The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
* **username**: string: The username for Basic authentication. Type: string (or Expression with resultType string).

## SapHana
### Properties
* **type**: 'SapHana' (Required): SAP HANA Linked Service.
* **typeProperties**: [SapHanaLinkedServiceProperties](#saphanalinkedserviceproperties) (Required): Properties specific to this linked service type.

## SapHanaLinkedServiceProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows': The authentication type to be used to connect to the SAP HANA server.
* **connectionString**: any: SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Host name of the SAP HANA server. Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP HANA server. Type: string (or Expression with resultType string).

## SapOpenHub
### Properties
* **type**: 'SapOpenHub' (Required): SAP Business Warehouse Open Hub Destination Linked Service.
* **typeProperties**: [SapOpenHubLinkedServiceTypeProperties](#sapopenhublinkedservicetypeproperties) (Required): Properties specific to SAP Business Warehouse Open Hub Destination linked service type.

## SapOpenHubLinkedServiceTypeProperties
### Properties
* **clientId**: any: Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **language**: any: Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string).
* **logonGroup**: any: The Logon Group for the SAP System. Type: string (or Expression with resultType string).
* **messageServer**: any: The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
* **messageServerService**: any: The service name or port number of the Message Server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string).
* **systemId**: any: SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
* **systemNumber**: any: System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string).

## SapTable
### Properties
* **type**: 'SapTable' (Required): SAP Table Linked Service.
* **typeProperties**: [SapTableLinkedServiceTypeProperties](#saptablelinkedservicetypeproperties) (Required): Properties specific to this linked service type.

## SapTableLinkedServiceTypeProperties
### Properties
* **clientId**: any: Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **language**: any: Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string).
* **logonGroup**: any: The Logon Group for the SAP System. Type: string (or Expression with resultType string).
* **messageServer**: any: The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
* **messageServerService**: any: The service name or port number of the Message Server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string).
* **sncLibraryPath**: any: External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **sncMode**: any: SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string).
* **sncMyName**: any: Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **sncPartnerName**: any: Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **sncQop**: any: SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string).
* **systemId**: any: SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
* **systemNumber**: any: System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).

## ServiceNow
### Properties
* **type**: 'ServiceNow' (Required): ServiceNow server linked service.
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required): ServiceNow server linked service properties.

## ServiceNowLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'OAuth2' (Required): The authentication type to use.
* **clientId**: any: The client id for OAuth2 authentication.
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com)
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any: The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication.

## Sftp
### Properties
* **type**: 'Sftp' (Required): A linked service for an SSH File Transfer Protocol (SFTP) server.
* **typeProperties**: [SftpServerLinkedServiceTypeProperties](#sftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

## SftpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'MultiFactor' | 'SshPublicKey': The authentication type to be used to connect to the FTP server.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The SFTP server host name. Type: string (or Expression with resultType string).
* **hostKeyFingerprint**: any: The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string).
* **passPhrase**: [SecretBase](#secretbase): The base definition of a secret type.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0.
* **privateKeyContent**: [SecretBase](#secretbase): The base definition of a secret type.
* **privateKeyPath**: any: The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string).
* **skipHostKeyValidation**: any: If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean).
* **userName**: any: The username used to log on to the SFTP server. Type: string (or Expression with resultType string).

## SharePointOnlineList
### Properties
* **type**: 'SharePointOnlineList' (Required): SharePoint Online List linked service.
* **typeProperties**: [SharePointOnlineListLinkedServiceTypeProperties](#sharepointonlinelistlinkedservicetypeproperties) (Required): SharePoint Online List linked service properties.

## SharePointOnlineListLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any (Required): The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **siteUrl**: any (Required): The URL of the SharePoint Online site. For example, https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string).
* **tenantId**: any (Required): The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string).

## Shopify
### Properties
* **type**: 'Shopify' (Required): Shopify Service linked service.
* **typeProperties**: [ShopifyLinkedServiceTypeProperties](#shopifylinkedservicetypeproperties) (Required): Shopify Service linked service properties.

## ShopifyLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The endpoint of the Shopify server. (i.e. mystore.myshopify.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## Snowflake
### Properties
* **type**: 'Snowflake' (Required): Snowflake linked service.
* **typeProperties**: [SnowflakeLinkedServiceTypeProperties](#snowflakelinkedservicetypeproperties) (Required): Snowflake linked service properties.

## SnowflakeLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string of snowflake. Type: string, SecureString.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## Spark
### Properties
* **type**: 'Spark' (Required): Spark Server linked service.
* **typeProperties**: [SparkLinkedServiceTypeProperties](#sparklinkedservicetypeproperties) (Required): Spark Server linked service properties.

## SparkLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required): The authentication method used to access the Spark server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): IP address or host name of the Spark server
* **httpPath**: any: The partial URL corresponding to the Spark server.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any (Required): The TCP port that the Spark server uses to listen for client connections.
* **serverType**: 'SharkServer' | 'SharkServer2' | 'SparkThriftServer': The type of Spark server.
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL': The transport protocol to use in the Thrift layer.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name that you use to access Spark Server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## SqlServer
### Properties
* **type**: 'SqlServer' (Required): SQL Server linked service.
* **typeProperties**: [SqlServerLinkedServiceTypeProperties](#sqlserverlinkedservicetypeproperties) (Required): SQL Server linked service properties.

## SqlServerLinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: The on-premises Windows authentication user name. Type: string (or Expression with resultType string).

## Square
### Properties
* **type**: 'Square' (Required): Square Service linked service.
* **typeProperties**: [SquareLinkedServiceTypeProperties](#squarelinkedservicetypeproperties) (Required): Square Service linked service properties.

## SquareLinkedServiceTypeProperties
### Properties
* **clientId**: any: The client ID associated with your Square application.
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **connectionProperties**: any: Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any: The URL of the Square instance. (i.e. mystore.mysquare.com)
* **redirectUri**: any: The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## Sybase
### Properties
* **type**: 'Sybase' (Required): Linked service for Sybase data source.
* **typeProperties**: [SybaseLinkedServiceTypeProperties](#sybaselinkedservicetypeproperties) (Required): Sybase linked service properties.

## SybaseLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows': AuthenticationType to be used for connection.
* **database**: any (Required): Database name for connection. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **schema**: any: Schema name for connection. Type: string (or Expression with resultType string).
* **server**: any (Required): Server name for connection. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## Teradata
### Properties
* **type**: 'Teradata' (Required): Linked service for Teradata data source.
* **typeProperties**: [TeradataLinkedServiceTypeProperties](#teradatalinkedservicetypeproperties) (Required): Teradata linked service properties.

## TeradataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows': AuthenticationType to be used for connection.
* **connectionString**: any: Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Server name for connection. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## Vertica
### Properties
* **type**: 'Vertica' (Required): Vertica linked service.
* **typeProperties**: [VerticaLinkedServiceTypeProperties](#verticalinkedservicetypeproperties) (Required): Vertica linked service properties.

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret): Azure Key Vault secret reference.

## Web
### Properties
* **type**: 'Web' (Required): Web linked service.
* **typeProperties**: [WebLinkedServiceTypeProperties](#weblinkedservicetypeproperties) (Required): Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models.

## WebLinkedServiceTypeProperties
* **Discriminator**: authenticationType
### Base Properties
* **url**: any (Required): The URL of the web service endpoint, e.g. http://www.microsoft.com . Type: string (or Expression with resultType string).
### Anonymous
#### Properties
* **authenticationType**: 'Anonymous' (Required): A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint.

### Basic
#### Properties
* **authenticationType**: 'Basic' (Required): A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint.
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **username**: any (Required): User name for Basic authentication. Type: string (or Expression with resultType string).

### ClientCertificate
#### Properties
* **authenticationType**: 'ClientCertificate' (Required): A WebLinkedService that uses client certificate based authentication to communicate with an HTTP endpoint. This scheme follows mutual authentication; the server must also provide valid credentials to the client.
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **pfx**: [SecretBase](#secretbase) (Required): The base definition of a secret type.


## Anonymous
### Properties
* **authenticationType**: 'Anonymous' (Required): A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint.

## Basic
### Properties
* **authenticationType**: 'Basic' (Required): A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint.
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **username**: any (Required): User name for Basic authentication. Type: string (or Expression with resultType string).

## ClientCertificate
### Properties
* **authenticationType**: 'ClientCertificate' (Required): A WebLinkedService that uses client certificate based authentication to communicate with an HTTP endpoint. This scheme follows mutual authentication; the server must also provide valid credentials to the client.
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **pfx**: [SecretBase](#secretbase) (Required): The base definition of a secret type.

## Xero
### Properties
* **type**: 'Xero' (Required): Xero Service linked service.
* **typeProperties**: [XeroLinkedServiceTypeProperties](#xerolinkedservicetypeproperties) (Required): Xero Service linked service properties.

## XeroLinkedServiceTypeProperties
### Properties
* **connectionProperties**: any: Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object.
* **consumerKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any: The endpoint of the Xero server. (i.e. api.xero.com)
* **privateKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## Zoho
### Properties
* **type**: 'Zoho' (Required): Zoho server linked service.
* **typeProperties**: [ZohoLinkedServiceTypeProperties](#zoholinkedservicetypeproperties) (Required): Zoho server linked service properties.

## ZohoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **connectionProperties**: any: Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any: The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## ManagedVirtualNetwork
### Properties
* **alias**: string (ReadOnly): Managed Virtual Network alias.
* **vNetId**: string (ReadOnly): Managed Virtual Network ID.
### Additional Properties
* **Additional Properties Type**: any

## ManagedPrivateEndpoint
### Properties
* **connectionState**: [ConnectionStateProperties](#connectionstateproperties): The connection state of a managed private endpoint
* **fqdns**: string[]: Fully qualified domain names
* **groupId**: string: The groupId to which the managed private endpoint is created
* **isReserved**: bool (ReadOnly): Denotes whether the managed private endpoint is reserved
* **privateLinkResourceId**: string: The ARM resource ID of the resource to which the managed private endpoint is created
* **provisioningState**: string (ReadOnly): The managed private endpoint provisioning state
### Additional Properties
* **Additional Properties Type**: any

## ConnectionStateProperties
### Properties
* **actionsRequired**: string (ReadOnly): The actions required on the managed private endpoint
* **description**: string (ReadOnly): The managed private endpoint description
* **status**: string (ReadOnly): The approval status

## Pipeline
### Properties
* **activities**: [Activity](#activity)[]: List of activities in pipeline.
* **annotations**: any[]: List of tags that can be used for describing the Pipeline.
* **concurrency**: int: The max number of concurrent runs for the pipeline.
* **description**: string: The description of the pipeline.
* **folder**: [schemas:584_folder](#schemas584folder): The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification): Definition of all parameters for an entity.
* **policy**: [PipelinePolicy](#pipelinepolicy): Pipeline Policy.
* **runDimensions**: [Dictionary<string,Object>](#dictionarystringobject): Dimensions emitted by Pipeline.
* **variables**: [Dictionary<string,VariableSpecification>](#dictionarystringvariablespecification): Definition of variable for a Pipeline.

## Activity
* **Discriminator**: type
### Base Properties
* **dependsOn**: [ActivityDependency](#activitydependency)[]: Activity depends on condition.
* **description**: string: Activity description.
* **name**: string (Required): Activity name.
* **userProperties**: [UserProperty](#userproperty)[]: Activity user properties.
### Container
#### Properties
* **type**: 'Container' (Required): Base class for all control activities like IfCondition, ForEach , Until.

### Execution
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **policy**: [ActivityPolicy](#activitypolicy): Execution policy for an activity.
* **type**: 'Execution' (Required): Base class for all execution activities.


## ActivityDependency
### Properties
* **activity**: string (Required): Activity name.
* **dependencyConditions**: 'Completed' | 'Failed' | 'Skipped' | 'Succeeded'[] (Required): Match-Condition for the dependency.
### Additional Properties
* **Additional Properties Type**: any

## UserProperty
### Properties
* **name**: string (Required): User property name.
* **value**: any (Required): User property value. Type: string (or Expression with resultType string).

## Container
### Properties
* **type**: 'Container' (Required): Base class for all control activities like IfCondition, ForEach , Until.

## Execution
### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **policy**: [ActivityPolicy](#activitypolicy): Execution policy for an activity.
* **type**: 'Execution' (Required): Base class for all execution activities.

## ActivityPolicy
### Properties
* **retry**: any: Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
* **retryIntervalInSeconds**: int: Interval between each retry attempt (in seconds). The default is 30 sec.
* **secureInput**: bool: When set to true, Input from activity is considered as secure and will not be logged to monitoring.
* **secureOutput**: bool: When set to true, Output from activity is considered as secure and will not be logged to monitoring.
* **timeout**: any: Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
### Additional Properties
* **Additional Properties Type**: any

## schemas:584_folder
### Properties
* **name**: string: The name of the folder that this Pipeline is in.

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## PipelinePolicy
### Properties
* **elapsedTimeMetric**: [PipelineElapsedTimeMetricPolicy](#pipelineelapsedtimemetricpolicy): Pipeline ElapsedTime Metric Policy.

## PipelineElapsedTimeMetricPolicy
### Properties
* **duration**: any: TimeSpan value, after which an Azure Monitoring Metric is fired.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,VariableSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [VariableSpecification](#variablespecification)

## VariableSpecification
### Properties
* **defaultValue**: any: Default value of variable.
* **type**: 'Array' | 'Bool' | 'String' (Required): Variable type.

## PrivateLinkConnectionApprovalRequest
### Properties
* **privateEndpoint**: [ArmIdWrapper](#armidwrapper) (ReadOnly): A wrapper for an ARM resource id
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate): The state of a private link connection
* **provisioningState**: string (ReadOnly)

## ArmIdWrapper
### Properties
* **id**: string (ReadOnly)

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string: ActionsRequired for a private link connection
* **description**: string: Description of a private link connection
* **status**: string: Status of a private link connection

## Trigger
* **Discriminator**: type
### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the trigger.
* **description**: string: Trigger description.
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' (ReadOnly): Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
### ChainingTrigger
#### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required): Pipeline that needs to be triggered with the given parameters.
* **type**: 'ChainingTrigger' (Required): Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs.
* **typeProperties**: [schemas:915_typeProperties](#schemas915typeproperties) (Required): Chaining Trigger properties.

### MultiplePipelineTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'MultiplePipelineTrigger' (Required): Base class for all triggers that support one to many model for trigger to pipeline.

### RerunTumblingWindowTrigger
#### Properties
* **type**: 'RerunTumblingWindowTrigger' (Required): Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time.
* **typeProperties**: [schemas:914_typeProperties](#schemas914typeproperties) (Required): Rerun Trigger properties.

### TumblingWindowTrigger
#### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required): Pipeline that needs to be triggered with the given parameters.
* **type**: 'TumblingWindowTrigger' (Required): Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past).
* **typeProperties**: [schemas:906_typeProperties](#schemas906typeproperties) (Required): Tumbling Window Trigger properties.


## ChainingTrigger
### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required): Pipeline that needs to be triggered with the given parameters.
* **type**: 'ChainingTrigger' (Required): Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs.
* **typeProperties**: [schemas:915_typeProperties](#schemas915typeproperties) (Required): Chaining Trigger properties.

## TriggerPipelineReference
### Properties
* **parameters**: [Dictionary<string,Object>](#dictionarystringobject): An object mapping parameter names to argument values.
* **pipelineReference**: [PipelineReference](#pipelinereference): Pipeline reference type.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PipelineReference
### Properties
* **name**: string: Reference name.
* **referenceName**: string (Required): Reference pipeline name.
* **type**: string (Required): Pipeline reference type.

## schemas:915_typeProperties
### Properties
* **dependsOn**: [PipelineReference](#pipelinereference)[] (Required): Upstream Pipelines.
* **runDimension**: string (Required): Run Dimension property that needs to be emitted by upstream pipelines.

## MultiplePipelineTrigger
### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'MultiplePipelineTrigger' (Required): Base class for all triggers that support one to many model for trigger to pipeline.

## RerunTumblingWindowTrigger
### Properties
* **type**: 'RerunTumblingWindowTrigger' (Required): Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time.
* **typeProperties**: [schemas:914_typeProperties](#schemas914typeproperties) (Required): Rerun Trigger properties.

## schemas:914_typeProperties
### Properties
* **parentTrigger**: any (Required): The parent trigger reference.
* **requestedEndTime**: string (Required): The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
* **requestedStartTime**: string (Required): The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
* **rerunConcurrency**: int (Required): The max number of parallel time windows (ready for execution) for which a rerun is triggered.

## TumblingWindowTrigger
### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required): Pipeline that needs to be triggered with the given parameters.
* **type**: 'TumblingWindowTrigger' (Required): Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past).
* **typeProperties**: [schemas:906_typeProperties](#schemas906typeproperties) (Required): Tumbling Window Trigger properties.

## schemas:906_typeProperties
### Properties
* **delay**: any: Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **dependsOn**: [DependencyReference](#dependencyreference)[]: Triggers that this trigger depends on. Only tumbling window triggers are supported.
* **endTime**: string: The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
* **frequency**: 'Hour' | 'Minute' | 'Month' (Required): The frequency of the time windows.
* **interval**: int (Required): The interval of the time windows. The minimum interval allowed is 15 Minutes.
* **maxConcurrency**: int (Required): The max number of parallel time windows (ready for execution) for which a new run is triggered.
* **retryPolicy**: [RetryPolicy](#retrypolicy): Execution policy for an activity.
* **startTime**: string (Required): The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.

## DependencyReference
* **Discriminator**: type
### Base Properties
### SelfDependencyTumblingWindowTriggerReference
#### Properties
* **offset**: string (Required): Timespan applied to the start time of a tumbling window when evaluating dependency.
* **size**: string: The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
* **type**: 'SelfDependencyTumblingWindowTriggerReference' (Required): Self referenced tumbling window trigger dependency.

### TriggerDependencyReference
#### Properties
* **referenceTrigger**: [TriggerReference](#triggerreference) (Required): Trigger reference type.
* **type**: 'TriggerDependencyReference' (Required): Trigger referenced dependency.


## SelfDependencyTumblingWindowTriggerReference
### Properties
* **offset**: string (Required): Timespan applied to the start time of a tumbling window when evaluating dependency.
* **size**: string: The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
* **type**: 'SelfDependencyTumblingWindowTriggerReference' (Required): Self referenced tumbling window trigger dependency.

## TriggerDependencyReference
### Properties
* **referenceTrigger**: [TriggerReference](#triggerreference) (Required): Trigger reference type.
* **type**: 'TriggerDependencyReference' (Required): Trigger referenced dependency.

## TriggerReference
### Properties
* **referenceName**: string (Required): Reference trigger name.
* **type**: string (Required): Trigger reference type.

## RetryPolicy
### Properties
* **count**: any: Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
* **intervalInSeconds**: int: Interval between retries in seconds. Default is 30.

