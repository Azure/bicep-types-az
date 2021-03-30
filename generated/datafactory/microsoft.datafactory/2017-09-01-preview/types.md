# Microsoft.DataFactory @ 2017-09-01-preview

## Resource Microsoft.DataFactory/factories@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [FactoryIdentity](#factoryidentity): Identity properties of the factory resource.
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FactoryProperties](#factoryproperties): Factory resource properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The resource tags.
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/datasets@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Dataset](#dataset) (Required): The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents.
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/integrationRuntimes@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationRuntime](#integrationruntime) (Required): Azure Data Factory nested object which serves as a compute resource for activities.
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/linkedservices@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedService](#linkedservice) (Required): The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource.
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/pipelines@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Pipeline](#pipeline) (Required): A data factory pipeline.
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/triggers@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Trigger](#trigger) (Required): Azure data factory nested object which contains information about creating pipeline run
* **type**: 'Microsoft.DataFactory/factories/triggers' (ReadOnly, DeployTimeConstant): The resource type

## FactoryIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity.
* **tenantId**: string (ReadOnly): The client tenant id of the identity.
* **type**: string (Required): The identity type. Currently the only supported type is 'SystemAssigned'.

## FactoryProperties
### Properties
* **createTime**: string (ReadOnly): Time the factory was created in ISO8601 format.
* **provisioningState**: string (ReadOnly): Factory provisioning state, example Succeeded.
* **version**: string (ReadOnly): Version of the factory.
* **vstsConfiguration**: [FactoryVSTSConfiguration](#factoryvstsconfiguration): Factory's VSTS repo information.

## FactoryVSTSConfiguration
### Properties
* **accountName**: string: VSTS account name.
* **collaborationBranch**: string: VSTS collaboration branch.
* **lastCommitId**: string: VSTS last commit id.
* **projectName**: string: VSTS project name.
* **repositoryName**: string: VSTS repository name.
* **rootFolder**: string: VSTS root folder.
* **tenantId**: string: VSTS tenant id.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dataset
* **Discriminator**: type
### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
* **description**: string: Dataset description.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification): Definition of all parameters for an entity.
* **structure**: any: Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
### AmazonMWSObject
#### Properties
* **type**: 'AmazonMWSObject' (Required): Amazon Marketplace Web Service dataset.

### AmazonS3Object
#### Properties
* **type**: 'AmazonS3Object' (Required): A single Amazon Simple Storage Service (S3) object or a set of S3 objects.
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required): Amazon S3 dataset properties.

### AzureBlob
#### Properties
* **type**: 'AzureBlob' (Required): The Azure Blob storage.
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties) (Required): Azure Blob dataset properties.

### AzureDataLakeStoreFile
#### Properties
* **type**: 'AzureDataLakeStoreFile' (Required): Azure Data Lake Store dataset.
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties) (Required): Azure Data Lake Store dataset properties.

### AzureMySqlTable
#### Properties
* **type**: 'AzureMySqlTable' (Required): The Azure MySQL database dataset.
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required): Azure MySQL database dataset properties.

### AzurePostgreSqlTable
#### Properties
* **type**: 'AzurePostgreSqlTable' (Required): Azure PostgreSQL dataset.

### AzureSearchIndex
#### Properties
* **type**: 'AzureSearchIndex' (Required): The Azure Search Index.
* **typeProperties**: [AzureSearchIndexDatasetTypeProperties](#azuresearchindexdatasettypeproperties) (Required): Properties specific to this dataset type.

### AzureSqlDWTable
#### Properties
* **type**: 'AzureSqlDWTable' (Required): The Azure SQL Data Warehouse dataset.
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties) (Required): Azure SQL Data Warehouse dataset properties.

### AzureSqlTable
#### Properties
* **type**: 'AzureSqlTable' (Required): The Azure SQL Server database dataset.
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties) (Required): Azure SQL dataset properties.

### AzureTable
#### Properties
* **type**: 'AzureTable' (Required): The Azure Table storage dataset.
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required): Azure Table dataset properties.

### CassandraTable
#### Properties
* **type**: 'CassandraTable' (Required): The Cassandra database dataset.
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties) (Required): Cassandra dataset properties.

### ConcurObject
#### Properties
* **type**: 'ConcurObject' (Required): Concur Service dataset.

### CouchbaseTable
#### Properties
* **type**: 'CouchbaseTable' (Required): Couchbase server dataset.

### DocumentDbCollection
#### Properties
* **type**: 'DocumentDbCollection' (Required): Microsoft Azure Document Database Collection dataset.
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required): DocumentDB Collection dataset properties.

### DrillTable
#### Properties
* **type**: 'DrillTable' (Required): Drill server dataset.

### DynamicsEntity
#### Properties
* **type**: 'DynamicsEntity' (Required): The Dynamics entity dataset.
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties) (Required): Dynamics entity dataset properties.

### EloquaObject
#### Properties
* **type**: 'EloquaObject' (Required): Eloqua server dataset.

### FileShare
#### Properties
* **type**: 'FileShare' (Required): An on-premises file system dataset.
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties) (Required): On-premises file system dataset properties.

### GoogleBigQueryObject
#### Properties
* **type**: 'GoogleBigQueryObject' (Required): Google BigQuery service dataset.

### GreenplumTable
#### Properties
* **type**: 'GreenplumTable' (Required): Greenplum Database dataset.

### HBaseObject
#### Properties
* **type**: 'HBaseObject' (Required): HBase server dataset.

### HiveObject
#### Properties
* **type**: 'HiveObject' (Required): Hive Server dataset.

### HttpFile
#### Properties
* **type**: 'HttpFile' (Required): A file in an HTTP web server.
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties) (Required): Properties specific to this dataset type.

### HubspotObject
#### Properties
* **type**: 'HubspotObject' (Required): Hubspot Service dataset.

### ImpalaObject
#### Properties
* **type**: 'ImpalaObject' (Required): Impala server dataset.

### JiraObject
#### Properties
* **type**: 'JiraObject' (Required): Jira Service dataset.

### MagentoObject
#### Properties
* **type**: 'MagentoObject' (Required): Magento server dataset.

### MariaDBTable
#### Properties
* **type**: 'MariaDBTable' (Required): MariaDB server dataset.

### MarketoObject
#### Properties
* **type**: 'MarketoObject' (Required): Marketo server dataset.

### MongoDbCollection
#### Properties
* **type**: 'MongoDbCollection' (Required): The MongoDB database dataset.
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required): MongoDB database dataset properties.

### NetezzaTable
#### Properties
* **type**: 'NetezzaTable' (Required): Netezza dataset.

### ODataResource
#### Properties
* **type**: 'ODataResource' (Required): The Open Data Protocol (OData) resource dataset.
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties) (Required): OData dataset properties.

### OracleTable
#### Properties
* **type**: 'OracleTable' (Required): The on-premises Oracle database dataset.
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties) (Required): On-premises Oracle dataset properties.

### PaypalObject
#### Properties
* **type**: 'PaypalObject' (Required): Paypal Service dataset.

### PhoenixObject
#### Properties
* **type**: 'PhoenixObject' (Required): Phoenix server dataset.

### PrestoObject
#### Properties
* **type**: 'PrestoObject' (Required): Presto server dataset.

### QuickBooksObject
#### Properties
* **type**: 'QuickBooksObject' (Required): QuickBooks server dataset.

### RelationalTable
#### Properties
* **type**: 'RelationalTable' (Required): The relational table dataset.
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties) (Required): Relational table dataset properties.

### ResponsysObject
#### Properties
* **type**: 'ResponsysObject' (Required): Responsys dataset.

### SalesforceMarketingCloudObject
#### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required): Salesforce Marketing Cloud dataset.

### SalesforceObject
#### Properties
* **type**: 'SalesforceObject' (Required): The Salesforce object dataset.
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties) (Required): Salesforce object dataset properties.

### SapCloudForCustomerResource
#### Properties
* **type**: 'SapCloudForCustomerResource' (Required): The path of the SAP Cloud for Customer OData entity.
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required): Sap Cloud For Customer OData resource dataset properties.

### SapEccResource
#### Properties
* **type**: 'SapEccResource' (Required): The path of the SAP ECC OData entity.
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required): Sap ECC OData resource dataset properties.

### ServiceNowObject
#### Properties
* **type**: 'ServiceNowObject' (Required): ServiceNow server dataset.

### ShopifyObject
#### Properties
* **type**: 'ShopifyObject' (Required): Shopify Service dataset.

### SparkObject
#### Properties
* **type**: 'SparkObject' (Required): Spark Server dataset.

### SqlServerTable
#### Properties
* **type**: 'SqlServerTable' (Required): The on-premises SQL Server dataset.
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties) (Required): On-premises SQL Server dataset properties.

### SquareObject
#### Properties
* **type**: 'SquareObject' (Required): Square Service dataset.

### VerticaTable
#### Properties
* **type**: 'VerticaTable' (Required): Vertica dataset.

### WebTable
#### Properties
* **type**: 'WebTable' (Required): The dataset points to a HTML table in the web page.
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required): Web table dataset properties.

### XeroObject
#### Properties
* **type**: 'XeroObject' (Required): Xero Service dataset.

### ZohoObject
#### Properties
* **type**: 'ZohoObject' (Required): Zoho server dataset.


## LinkedServiceReference
### Properties
* **parameters**: [Dictionary<string,Object>](#dictionarystringobject): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference LinkedService name.
* **type**: string (Required): Linked service reference type.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## ParameterSpecification
### Properties
* **defaultValue**: any: Default value of parameter.
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'SecureString' | 'String' (Required): Parameter type. Possible values include: 'Object', 'String', 'Int', 'Float', 'Bool', 'Array', 'SecureString'

## AmazonMWSObject
### Properties
* **type**: 'AmazonMWSObject' (Required): Amazon Marketplace Web Service dataset.

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

## ZipDeflate
### Properties
* **level**: any: The ZipDeflate compression level.
* **type**: 'ZipDeflate' (Required): The ZipDeflate compression method used on a dataset.

## DatasetStorageFormat
* **Discriminator**: type
### Base Properties
* **deserializer**: any: Deserializer. Type: string (or Expression with resultType string).
* **serializer**: any: Serializer. Type: string (or Expression with resultType string).

## AzureBlob
### Properties
* **type**: 'AzureBlob' (Required): The Azure Blob storage.
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties) (Required): Azure Blob dataset properties.

## AzureBlobDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: The name of the Azure Blob. Type: string (or Expression with resultType string).
* **folderPath**: any: The path of the Azure Blob storage. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **tableRootLocation**: any: The root of blob path. Type: string (or Expression with resultType string).

## AzureDataLakeStoreFile
### Properties
* **type**: 'AzureDataLakeStoreFile' (Required): Azure Data Lake Store dataset.
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties) (Required): Azure Data Lake Store dataset properties.

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string).
* **folderPath**: any (Required): Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.

## AzureMySqlTable
### Properties
* **type**: 'AzureMySqlTable' (Required): The Azure MySQL database dataset.
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required): Azure MySQL database dataset properties.

## AzureMySqlTableDatasetTypeProperties
### Properties
* **tableName**: any: The Azure MySQL database table name. Type: string (or Expression with resultType string).

## AzurePostgreSqlTable
### Properties
* **type**: 'AzurePostgreSqlTable' (Required): Azure PostgreSQL dataset.

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
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties) (Required): Azure SQL Data Warehouse dataset properties.

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).

## AzureSqlTable
### Properties
* **type**: 'AzureSqlTable' (Required): The Azure SQL Server database dataset.
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties) (Required): Azure SQL dataset properties.

## AzureSqlTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the Azure SQL database. Type: string (or Expression with resultType string).

## AzureTable
### Properties
* **type**: 'AzureTable' (Required): The Azure Table storage dataset.
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required): Azure Table dataset properties.

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the Azure Table storage. Type: string (or Expression with resultType string).

## CassandraTable
### Properties
* **type**: 'CassandraTable' (Required): The Cassandra database dataset.
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties) (Required): Cassandra dataset properties.

## CassandraTableDatasetTypeProperties
### Properties
* **keyspace**: any: The keyspace of the Cassandra database. Type: string (or Expression with resultType string).
* **tableName**: any: The table name of the Cassandra database. Type: string (or Expression with resultType string).

## ConcurObject
### Properties
* **type**: 'ConcurObject' (Required): Concur Service dataset.

## CouchbaseTable
### Properties
* **type**: 'CouchbaseTable' (Required): Couchbase server dataset.

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

## DynamicsEntity
### Properties
* **type**: 'DynamicsEntity' (Required): The Dynamics entity dataset.
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties) (Required): Dynamics entity dataset properties.

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any: The logical name of the entity. Type: string (or Expression with resultType string).

## EloquaObject
### Properties
* **type**: 'EloquaObject' (Required): Eloqua server dataset.

## FileShare
### Properties
* **type**: 'FileShare' (Required): An on-premises file system dataset.
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties) (Required): On-premises file system dataset properties.

## FileShareDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileFilter**: any: Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string).
* **fileName**: any: The name of the on-premises file system. Type: string (or Expression with resultType string).
* **folderPath**: any: The path of the on-premises file system. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.

## GoogleBigQueryObject
### Properties
* **type**: 'GoogleBigQueryObject' (Required): Google BigQuery service dataset.

## GreenplumTable
### Properties
* **type**: 'GreenplumTable' (Required): Greenplum Database dataset.

## HBaseObject
### Properties
* **type**: 'HBaseObject' (Required): HBase server dataset.

## HiveObject
### Properties
* **type**: 'HiveObject' (Required): Hive Server dataset.

## HttpFile
### Properties
* **type**: 'HttpFile' (Required): A file in an HTTP web server.
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties) (Required): Properties specific to this dataset type.

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

## ImpalaObject
### Properties
* **type**: 'ImpalaObject' (Required): Impala server dataset.

## JiraObject
### Properties
* **type**: 'JiraObject' (Required): Jira Service dataset.

## MagentoObject
### Properties
* **type**: 'MagentoObject' (Required): Magento server dataset.

## MariaDBTable
### Properties
* **type**: 'MariaDBTable' (Required): MariaDB server dataset.

## MarketoObject
### Properties
* **type**: 'MarketoObject' (Required): Marketo server dataset.

## MongoDbCollection
### Properties
* **type**: 'MongoDbCollection' (Required): The MongoDB database dataset.
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required): MongoDB database dataset properties.

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): The table name of the MongoDB database. Type: string (or Expression with resultType string).

## NetezzaTable
### Properties
* **type**: 'NetezzaTable' (Required): Netezza dataset.

## ODataResource
### Properties
* **type**: 'ODataResource' (Required): The Open Data Protocol (OData) resource dataset.
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties) (Required): OData dataset properties.

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any: The OData resource path. Type: string (or Expression with resultType string).

## OracleTable
### Properties
* **type**: 'OracleTable' (Required): The on-premises Oracle database dataset.
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties) (Required): On-premises Oracle dataset properties.

## OracleTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the on-premises Oracle database. Type: string (or Expression with resultType string).

## PaypalObject
### Properties
* **type**: 'PaypalObject' (Required): Paypal Service dataset.

## PhoenixObject
### Properties
* **type**: 'PhoenixObject' (Required): Phoenix server dataset.

## PrestoObject
### Properties
* **type**: 'PrestoObject' (Required): Presto server dataset.

## QuickBooksObject
### Properties
* **type**: 'QuickBooksObject' (Required): QuickBooks server dataset.

## RelationalTable
### Properties
* **type**: 'RelationalTable' (Required): The relational table dataset.
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties) (Required): Relational table dataset properties.

## RelationalTableDatasetTypeProperties
### Properties
* **tableName**: any: The relational table name. Type: string (or Expression with resultType string).

## ResponsysObject
### Properties
* **type**: 'ResponsysObject' (Required): Responsys dataset.

## SalesforceMarketingCloudObject
### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required): Salesforce Marketing Cloud dataset.

## SalesforceObject
### Properties
* **type**: 'SalesforceObject' (Required): The Salesforce object dataset.
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties) (Required): Salesforce object dataset properties.

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: The Salesforce object API name. Type: string (or Expression with resultType string).

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

## ServiceNowObject
### Properties
* **type**: 'ServiceNowObject' (Required): ServiceNow server dataset.

## ShopifyObject
### Properties
* **type**: 'ShopifyObject' (Required): Shopify Service dataset.

## SparkObject
### Properties
* **type**: 'SparkObject' (Required): Spark Server dataset.

## SqlServerTable
### Properties
* **type**: 'SqlServerTable' (Required): The on-premises SQL Server dataset.
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties) (Required): On-premises SQL Server dataset properties.

## SqlServerTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the SQL Server dataset. Type: string (or Expression with resultType string).

## SquareObject
### Properties
* **type**: 'SquareObject' (Required): Square Service dataset.

## VerticaTable
### Properties
* **type**: 'VerticaTable' (Required): Vertica dataset.

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

## ZohoObject
### Properties
* **type**: 'ZohoObject' (Required): Zoho server dataset.

## IntegrationRuntime
* **Discriminator**: type
### Base Properties
* **description**: string: Integration runtime description.
### Managed
#### Properties
* **state**: 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): Integration runtime state, only valid for managed dedicated integration runtime. Possible values include: 'Initial', 'Stopped', 'Started', 'Starting', 'Stopping', 'NeedRegistration', 'Online', 'Limited', 'Offline'
* **type**: 'Managed' (Required): Managed integration runtime, including managed elastic and managed dedicated integration runtimes.
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required): Managed integration runtime type properties.

### SelfHosted
#### Properties
* **type**: 'SelfHosted' (Required): Self-hosted integration runtime.
* **typeProperties**: [LinkedIntegrationRuntimeTypeProperties](#linkedintegrationruntimetypeproperties) (Required): The base definition of a secret type.


## Managed
### Properties
* **state**: 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): Integration runtime state, only valid for managed dedicated integration runtime. Possible values include: 'Initial', 'Stopped', 'Started', 'Starting', 'Stopping', 'NeedRegistration', 'Online', 'Limited', 'Offline'
* **type**: 'Managed' (Required): Managed integration runtime, including managed elastic and managed dedicated integration runtimes.
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required): Managed integration runtime type properties.

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties): The compute resource properties for managed integration runtime.
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties): SSIS properties for managed integration runtime.

## IntegrationRuntimeComputeProperties
### Properties
* **location**: string: The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
* **maxParallelExecutionsPerNode**: int: Maximum parallel executions count per node for managed integration runtime.
* **nodeSize**: string: The node size requirement to managed integration runtime.
* **numberOfNodes**: int: The required number of nodes for managed integration runtime.
* **vNetProperties**: [IntegrationRuntimeVNetProperties](#integrationruntimevnetproperties): VNet properties for managed integration runtime.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeVNetProperties
### Properties
* **subnet**: string: The name of the subnet this integration runtime will join.
* **vNetId**: string: The ID of the VNet that this integration runtime will join.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: [IntegrationRuntimeSsisCatalogInfo](#integrationruntimessiscataloginfo): Catalog information for managed dedicated integration runtime.
* **customSetupScriptProperties**: [IntegrationRuntimeCustomSetupScriptProperties](#integrationruntimecustomsetupscriptproperties): Custom setup script properties for a managed dedicated integration runtime.
* **dataProxyProperties**: [IntegrationRuntimeDataProxyProperties](#integrationruntimedataproxyproperties): Data proxy properties for a managed dedicated integration runtime.
* **edition**: 'Enterprise' | 'Standard': The edition for the SSIS Integration Runtime. Possible values include: 'Standard', 'Enterprise'
* **licenseType**: 'BasePrice' | 'LicenseIncluded': License type for bringing your own license scenario. Possible values include: 'BasePrice', 'LicenseIncluded'
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: [SecureString](#securestring): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **catalogAdminUserName**: string: The administrator user name of catalog database.
* **catalogPricingTier**: string: The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
* **catalogServerEndpoint**: string: The catalog database server URL.
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
* **type**: 'IntegrationRuntimeReference' | 'LinkedServiceReference': The type of this referenced entity. Possible values include: 'IntegrationRuntimeReference', 'LinkedServiceReference'

## SelfHosted
### Properties
* **type**: 'SelfHosted' (Required): Self-hosted integration runtime.
* **typeProperties**: [LinkedIntegrationRuntimeTypeProperties](#linkedintegrationruntimetypeproperties) (Required): The base definition of a secret type.

## LinkedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: [LinkedIntegrationRuntimeProperties](#linkedintegrationruntimeproperties): The base definition of a secret type.

## LinkedIntegrationRuntimeProperties
* **Discriminator**: authorizationType
### Base Properties
### Key
#### Properties
* **authorizationType**: 'Key' (Required): The base definition of a secret type.
* **key**: [SecureString](#securestring) (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

### RBAC
#### Properties
* **authorizationType**: 'RBAC' (Required): The base definition of a secret type.
* **resourceId**: string (Required): The resource ID of the integration runtime to be shared.


## Key
### Properties
* **authorizationType**: 'Key' (Required): The base definition of a secret type.
* **key**: [SecureString](#securestring) (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

## RBAC
### Properties
* **authorizationType**: 'RBAC' (Required): The base definition of a secret type.
* **resourceId**: string (Required): The resource ID of the integration runtime to be shared.

## LinkedService
* **Discriminator**: type
### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
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

### AzureBatch
#### Properties
* **type**: 'AzureBatch' (Required): Azure Batch linked service.
* **typeProperties**: [AzureBatchLinkedServiceTypeProperties](#azurebatchlinkedservicetypeproperties) (Required): Azure Batch linked service properties.

### AzureDatabricks
#### Properties
* **type**: 'AzureDatabricks' (Required): Azure Databricks linked service.
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required): Azure Databricks linked service properties.

### AzureDataLakeAnalytics
#### Properties
* **type**: 'AzureDataLakeAnalytics' (Required): Azure Data Lake Analytics linked service.
* **typeProperties**: [AzureDataLakeAnalyticsLinkedServiceTypeProperties](#azuredatalakeanalyticslinkedservicetypeproperties) (Required): Azure Data Lake Analytics linked service properties.

### AzureDataLakeStore
#### Properties
* **type**: 'AzureDataLakeStore' (Required): Azure Data Lake Store linked service.
* **typeProperties**: [AzureDataLakeStoreLinkedServiceTypeProperties](#azuredatalakestorelinkedservicetypeproperties) (Required): Azure Data Lake Store linked service properties.

### AzureKeyVault
#### Properties
* **type**: 'AzureKeyVault' (Required): Azure Key Vault linked service.
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required): Azure Key Vault linked service properties.

### AzureML
#### Properties
* **type**: 'AzureML' (Required): Azure ML Web Service linked service.
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required): Azure ML Web Service linked service properties.

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

### AzureStorage
#### Properties
* **type**: 'AzureStorage' (Required): The storage account linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

### Cassandra
#### Properties
* **type**: 'Cassandra' (Required): Linked service for Cassandra data source.
* **typeProperties**: [CassandraLinkedServiceTypeProperties](#cassandralinkedservicetypeproperties) (Required): Cassandra linked service properties.

### Concur
#### Properties
* **type**: 'Concur' (Required): Concur Service linked service.
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required): Concur Service linked service properties.

### CosmosDb
#### Properties
* **type**: 'CosmosDb' (Required): Microsoft Azure Cosmos Database (CosmosDB) linked service.
* **typeProperties**: [CosmosDbLinkedServiceTypeProperties](#cosmosdblinkedservicetypeproperties) (Required): CosmosDB linked service properties.

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

### GoogleBigQuery
#### Properties
* **type**: 'GoogleBigQuery' (Required): Google BigQuery service linked service.
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required): Google BigQuery service linked service properties.

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

### MongoDb
#### Properties
* **type**: 'MongoDb' (Required): Linked service for MongoDb data source.
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required): MongoDB linked service properties.

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

### Oracle
#### Properties
* **type**: 'Oracle' (Required): Oracle database.
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required): Oracle database linked service properties.

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

### Salesforce
#### Properties
* **type**: 'Salesforce' (Required): Linked service for Salesforce.
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required): Salesforce linked service properties.

### SalesforceMarketingCloud
#### Properties
* **type**: 'SalesforceMarketingCloud' (Required): Salesforce Marketing Cloud linked service.
* **typeProperties**: [SalesforceMarketingCloudLinkedServiceTypeProperties](#salesforcemarketingcloudlinkedservicetypeproperties) (Required): Salesforce Marketing Cloud linked service properties.

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

### ServiceNow
#### Properties
* **type**: 'ServiceNow' (Required): ServiceNow server linked service.
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required): ServiceNow server linked service properties.

### Sftp
#### Properties
* **type**: 'Sftp' (Required): A linked service for an SSH File Transfer Protocol (SFTP) server.
* **typeProperties**: [SftpServerLinkedServiceTypeProperties](#sftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### Shopify
#### Properties
* **type**: 'Shopify' (Required): Shopify Service linked service.
* **typeProperties**: [ShopifyLinkedServiceTypeProperties](#shopifylinkedservicetypeproperties) (Required): Shopify Service linked service properties.

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
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.

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

## AzureDatabricks
### Properties
* **type**: 'AzureDatabricks' (Required): Azure Databricks linked service.
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required): Azure Databricks linked service properties.

## AzureDatabricksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **domain**: any (Required): <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **existingClusterId**: any: The id of an existing cluster that will be used for all runs of this job. Type: string (or Expression with resultType string).
* **newClusterNodeType**: any: The node types of new cluster. Type: string (or Expression with resultType string).
* **newClusterNumOfWorker**: any: Number of worker nodes that new cluster should have. A string formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 as min and 10 as max. Type: string (or Expression with resultType string).
* **newClusterSparkConf**: [Dictionary<string,Object>](#dictionarystringobject): a set of optional, user-specified Spark configuration key-value pairs.
* **newClusterVersion**: any: The Spark version of new cluster. Type: string (or Expression with resultType string).

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

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
* **dataLakeStoreUri**: any (Required): Data Lake Store service URI. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **resourceGroupName**: any: Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **subscriptionId**: any: Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureKeyVault
### Properties
* **type**: 'AzureKeyVault' (Required): Azure Key Vault linked service.
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required): Azure Key Vault linked service properties.

## AzureKeyVaultLinkedServiceTypeProperties
### Properties
* **baseUrl**: any (Required): The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string).

## AzureML
### Properties
* **type**: 'AzureML' (Required): Azure ML Web Service linked service.
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required): Azure ML Web Service linked service properties.

## AzureMLLinkedServiceTypeProperties
### Properties
* **apiKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **mlEndpoint**: any (Required): The Batch Execution REST URL for an Azure ML Web Service endpoint. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML web service. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **updateResourceEndpoint**: any: The Update Resource REST URL for an Azure ML Web Service endpoint. Type: string (or Expression with resultType string).

## AzureMySql
### Properties
* **type**: 'AzureMySql' (Required): Azure MySQL database linked service.
* **typeProperties**: [AzureMySqlLinkedServiceTypeProperties](#azuremysqllinkedservicetypeproperties) (Required): Azure MySQL database linked service properties.

## AzureMySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## AzurePostgreSql
### Properties
* **type**: 'AzurePostgreSql' (Required): Azure PostgreSQL linked service.
* **typeProperties**: [AzurePostgreSqlLinkedServiceTypeProperties](#azurepostgresqllinkedservicetypeproperties) (Required): Azure PostgreSQL linked service properties.

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

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
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureSqlDW
### Properties
* **type**: 'AzureSqlDW' (Required): Azure SQL Data Warehouse linked service.
* **typeProperties**: [AzureSqlDWLinkedServiceTypeProperties](#azuresqldwlinkedservicetypeproperties) (Required): Azure SQL Data Warehouse linked service properties.

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureStorage
### Properties
* **type**: 'AzureStorage' (Required): The storage account linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

## AzureStorageLinkedServiceTypeProperties
### Properties
* **connectionString**: any: The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **sasUri**: [SecretBase](#secretbase): The base definition of a secret type.

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

## Concur
### Properties
* **type**: 'Concur' (Required): Concur Service linked service.
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required): Concur Service linked service properties.

## ConcurLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Application client_id supplied by Concur App Management.
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
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## Couchbase
### Properties
* **type**: 'Couchbase' (Required): Couchbase server linked service.
* **typeProperties**: [CouchbaseLinkedServiceTypeProperties](#couchbaselinkedservicetypeproperties) (Required): Couchbase server linked service properties.

## CouchbaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
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
* **authenticationType**: 'Basic': AuthenticationType to be used for connection. Possible values include: 'Basic'
* **database**: any (Required): Database name for connection. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any (Required): Server name for connection. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## Drill
### Properties
* **type**: 'Drill' (Required): Drill server linked service.
* **typeProperties**: [DrillLinkedServiceTypeProperties](#drilllinkedservicetypeproperties) (Required): Drill server linked service properties.

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## Dynamics
### Properties
* **type**: 'Dynamics' (Required): Dynamics linked service.
* **typeProperties**: [DynamicsLinkedServiceTypeProperties](#dynamicslinkedservicetypeproperties) (Required): Dynamics linked service properties.

## DynamicsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. Type: string (or Expression with resultType string).
* **deploymentType**: any (Required): The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **hostName**: any: The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
* **organizationName**: any: The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
* **serviceUri**: any: The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
* **username**: any (Required): User name to access the Dynamics instance. Type: string (or Expression with resultType string).

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
* **authenticationType**: 'Anonymous' | 'Basic': The authentication type to be used to connect to the FTP server. Possible values include: 'Basic', 'Anonymous'
* **enableServerCertificateValidation**: any: If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
* **enableSsl**: any: If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): Host name of the FTP server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0.
* **userName**: any: Username to logon the FTP server. Type: string (or Expression with resultType string).

## GoogleBigQuery
### Properties
* **type**: 'GoogleBigQuery' (Required): Google BigQuery service linked service.
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required): Google BigQuery service linked service properties.

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any: A comma-separated list of public BigQuery projects to access.
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required): The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. Possible values include: 'ServiceAuthentication', 'UserAuthentication'
* **clientId**: [SecretBase](#secretbase): The base definition of a secret type.
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **email**: any: The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **keyFilePath**: any: The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR.
* **project**: any (Required): The default BigQuery project to query against.
* **refreshToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **requestGoogleDriveScope**: any: Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## Greenplum
### Properties
* **type**: 'Greenplum' (Required): Greenplum Database linked service.
* **typeProperties**: [GreenplumLinkedServiceTypeProperties](#greenplumlinkedservicetypeproperties) (Required): Greenplum Database linked service properties.

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## HBase
### Properties
* **type**: 'HBase' (Required): HBase server linked service.
* **typeProperties**: [HBaseLinkedServiceTypeProperties](#hbaselinkedservicetypeproperties) (Required): HBase server linked service properties.

## HBaseLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Basic' (Required): The authentication mechanism to use to connect to the HBase server. Possible values include: 'Anonymous', 'Basic'
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
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
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
* **servicePrincipalId**: any: The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **sparkVersion**: any: The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string).
* **stormConfiguration**: any: Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster.
* **tenant**: any (Required): The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
* **timeToLive**: any (Required): The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
* **version**: any (Required): Version of the HDInsight cluster.  Type: string (or Expression with resultType string).
* **yarnConfiguration**: any: Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster.
* **zookeeperNodeSize**: any: Specifies the size of the Zoo Keeper node for the HDInsight cluster.

## Hive
### Properties
* **type**: 'Hive' (Required): Hive Server linked service.
* **typeProperties**: [HiveLinkedServiceTypeProperties](#hivelinkedservicetypeproperties) (Required): Hive Server linked service properties.

## HiveLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required): The authentication method used to access the Hive server. Possible values include: 'Anonymous', 'Username', 'UsernameAndPassword', 'WindowsAzureHDInsightService'
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable).
* **httpPath**: any: The partial URL corresponding to the Hive server.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port that the Hive server uses to listen for client connections.
* **serverType**: 'HiveServer1' | 'HiveServer2' | 'HiveThriftServer': The type of Hive server. Possible values include: 'HiveServer1', 'HiveServer2', 'HiveThriftServer'
* **serviceDiscoveryMode**: any: true to indicate using the ZooKeeper service, false not.
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL': The transport protocol to use in the Thrift layer. Possible values include: 'Binary', 'SASL', 'HTTP '
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
* **authenticationType**: 'Anonymous' | 'Basic' | 'ClientCertificate' | 'Digest' | 'Windows': The authentication type to be used to connect to the HTTP server. Possible values include: 'Basic', 'Anonymous', 'Digest', 'Windows', 'ClientCertificate'
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
* **authenticationType**: 'Anonymous' | 'SASLUsername' | 'UsernameAndPassword' (Required): The authentication type to use. Possible values include: 'Anonymous', 'SASLUsername', 'UsernameAndPassword'
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the Impala server. (i.e. 192.168.222.160)
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port that the Impala server uses to listen for client connections. The default value is 21050.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to access the Impala server. The default value is anonymous when using SASLUsername.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

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

## MongoDb
### Properties
* **type**: 'MongoDb' (Required): Linked service for MongoDb data source.
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required): MongoDB linked service properties.

## MongoDbLinkedServiceTypeProperties
### Properties
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean).
* **authenticationType**: 'Anonymous' | 'Basic': The authentication type to be used to connect to the MongoDB database. Possible values include: 'Basic', 'Anonymous'
* **authSource**: any: Database to verify the username and password. Type: string (or Expression with resultType string).
* **databaseName**: any (Required): The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0.
* **server**: any (Required): The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## MySql
### Properties
* **type**: 'MySql' (Required): Linked service for MySQL data source.
* **typeProperties**: [MySqlLinkedServiceTypeProperties](#mysqllinkedservicetypeproperties) (Required): MySQL linked service properties.

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## Netezza
### Properties
* **type**: 'Netezza' (Required): Netezza linked service.
* **typeProperties**: [NetezzaLinkedServiceTypeProperties](#netezzalinkedservicetypeproperties) (Required): Netezza linked service properties.

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## OData
### Properties
* **type**: 'OData' (Required): Open Data Protocol (OData) linked service.
* **typeProperties**: [ODataLinkedServiceTypeProperties](#odatalinkedservicetypeproperties) (Required): OData linked service properties.

## ODataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic': Type of authentication used to connect to the OData service. Possible values include: 'Basic', 'Anonymous'
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
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

## Oracle
### Properties
* **type**: 'Oracle' (Required): Oracle database.
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required): Oracle database linked service properties.

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

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
* **authenticationType**: 'Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required): The authentication mechanism used to connect to the Phoenix server. Possible values include: 'Anonymous', 'UsernameAndPassword', 'WindowsAzureHDInsightService'
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
* **connectionString**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## Presto
### Properties
* **type**: 'Presto' (Required): Presto server linked service.
* **typeProperties**: [PrestoLinkedServiceTypeProperties](#prestolinkedservicetypeproperties) (Required): Presto server linked service properties.

## PrestoLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'LDAP' (Required): The authentication mechanism used to connect to the Presto server. Possible values include: 'Anonymous', 'LDAP'
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
* **accessToken**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **accessTokenSecret**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **companyId**: any (Required): The company ID of the QuickBooks company to authorize.
* **consumerKey**: any (Required): The consumer key for OAuth 1.0 authentication.
* **consumerSecret**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
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

## Salesforce
### Properties
* **type**: 'Salesforce' (Required): Linked service for Salesforce.
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required): Salesforce linked service properties.

## SalesforceLinkedServiceTypeProperties
### Properties
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
* **clientId**: any (Required): The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).

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
* **authenticationType**: 'Basic' | 'Windows': The authentication type to be used to connect to the SAP HANA server. Possible values include: 'Basic', 'Windows'
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any (Required): Host name of the SAP HANA server. Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP HANA server. Type: string (or Expression with resultType string).

## ServiceNow
### Properties
* **type**: 'ServiceNow' (Required): ServiceNow server linked service.
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required): ServiceNow server linked service properties.

## ServiceNowLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'OAuth2' (Required): The authentication type to use. Possible values include: 'Basic', 'OAuth2'
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
* **authenticationType**: 'Basic' | 'SshPublicKey': The authentication type to be used to connect to the FTP server. Possible values include: 'Basic', 'SshPublicKey'
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

## Spark
### Properties
* **type**: 'Spark' (Required): Spark Server linked service.
* **typeProperties**: [SparkLinkedServiceTypeProperties](#sparklinkedservicetypeproperties) (Required): Spark Server linked service properties.

## SparkLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required): The authentication method used to access the Spark server. Possible values include: 'Anonymous', 'Username', 'UsernameAndPassword', 'WindowsAzureHDInsightService'
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): IP address or host name of the Spark server
* **httpPath**: any: The partial URL corresponding to the Spark server.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any (Required): The TCP port that the Spark server uses to listen for client connections.
* **serverType**: 'SharkServer' | 'SharkServer2' | 'SparkThriftServer': The type of Spark server. Possible values include: 'SharkServer', 'SharkServer2', 'SparkThriftServer'
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL': The transport protocol to use in the Thrift layer. Possible values include: 'Binary', 'SASL', 'HTTP '
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name that you use to access Spark Server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## SqlServer
### Properties
* **type**: 'SqlServer' (Required): SQL Server linked service.
* **typeProperties**: [SqlServerLinkedServiceTypeProperties](#sqlserverlinkedservicetypeproperties) (Required): SQL Server linked service properties.

## SqlServerLinkedServiceTypeProperties
### Properties
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
* **clientId**: any (Required): The client ID associated with your Square application.
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The URL of the Square instance. (i.e. mystore.mysquare.com)
* **redirectUri**: any (Required): The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## Sybase
### Properties
* **type**: 'Sybase' (Required): Linked service for Sybase data source.
* **typeProperties**: [SybaseLinkedServiceTypeProperties](#sybaselinkedservicetypeproperties) (Required): Sybase linked service properties.

## SybaseLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows': AuthenticationType to be used for connection. Possible values include: 'Basic', 'Windows'
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
* **authenticationType**: 'Basic' | 'Windows': AuthenticationType to be used for connection. Possible values include: 'Basic', 'Windows'
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any (Required): Server name for connection. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## Vertica
### Properties
* **type**: 'Vertica' (Required): Vertica linked service.
* **typeProperties**: [VerticaLinkedServiceTypeProperties](#verticalinkedservicetypeproperties) (Required): Vertica linked service properties.

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

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
* **consumerKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The endpoint of the Xero server. (i.e. api.xero.com)
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
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## Pipeline
### Properties
* **activities**: [Activity](#activity)[]: List of activities in pipeline.
* **annotations**: any[]: List of tags that can be used for describing the Pipeline.
* **concurrency**: int: The max number of concurrent runs for the pipeline.
* **description**: string: The description of the pipeline.
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification): Definition of all parameters for an entity.

## Activity
* **Discriminator**: type
### Base Properties
* **dependsOn**: [ActivityDependency](#activitydependency)[]: Activity depends on condition.
* **description**: string: Activity description.
* **name**: string (Required): Activity name.
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
* **secureOutput**: bool: When set to true, Output from activity is considered as secure and will not be logged to monitoring.
* **timeout**: any: Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## Trigger
* **Discriminator**: type
### Base Properties
* **description**: string: Trigger description.
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' (ReadOnly): Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger. Possible values include: 'Started', 'Stopped', 'Disabled'
### MultiplePipelineTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'MultiplePipelineTrigger' (Required): Base class for all triggers that support one to many model for trigger to pipeline.


## MultiplePipelineTrigger
### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'MultiplePipelineTrigger' (Required): Base class for all triggers that support one to many model for trigger to pipeline.

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

