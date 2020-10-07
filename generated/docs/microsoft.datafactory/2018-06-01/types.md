# Microsoft.DataFactory @ 2018-06-01

## Microsoft.DataFactory/factories/dataflows
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataFlow (Required)
* **type**: 'Microsoft.DataFactory/factories/dataflows' (ReadOnly, DeployTimeConstant)

## DataFlow
* **Discriminator**: type
### Base Properties
* **annotations**: any[]
* **description**: string
* **folder**: schemas:102_folder
### MappingDataFlow
#### Properties
* **type**: 'MappingDataFlow' (Required)
* **typeProperties**: MappingDataFlowTypeProperties


## schemas:102_folder
### Properties
* **name**: string

## MappingDataFlow
### Properties
* **type**: 'MappingDataFlow' (Required)
* **typeProperties**: MappingDataFlowTypeProperties

## MappingDataFlowTypeProperties
### Properties
* **script**: string
* **sinks**: DataFlowSink[]
* **sources**: DataFlowSource[]
* **transformations**: Transformation[]

## DataFlowSink
### Properties
* **dataset**: DatasetReference
* **description**: string
* **linkedService**: LinkedServiceReference
* **name**: string (Required)
* **schemaLinkedService**: LinkedServiceReference

## DatasetReference
### Properties
* **parameters**: Dictionary<string,Object>
* **referenceName**: string (Required)
* **type**: string (Required)

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## LinkedServiceReference
### Properties
* **parameters**: Dictionary<string,Object>
* **referenceName**: string (Required)
* **type**: string (Required)

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## DataFlowSource
### Properties
* **dataset**: DatasetReference
* **description**: string
* **linkedService**: LinkedServiceReference
* **name**: string (Required)
* **schemaLinkedService**: LinkedServiceReference

## Transformation
### Properties
* **description**: string
* **name**: string (Required)

## Microsoft.DataFactory/factories/datasets
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Dataset (Required)
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant)

## Dataset
* **Discriminator**: type
### Base Properties
* **annotations**: any[]
* **description**: string
* **folder**: schemas:108_folder
* **linkedServiceName**: LinkedServiceReference (Required)
* **parameters**: Dictionary<string,ParameterSpecification>
* **schema**: any
* **structure**: any
### AmazonMWSObject
#### Properties
* **type**: 'AmazonMWSObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### AmazonRedshiftTable
#### Properties
* **type**: 'AmazonRedshiftTable' (Required)
* **typeProperties**: AmazonRedshiftTableDatasetTypeProperties

### AmazonS3Object
#### Properties
* **type**: 'AmazonS3Object' (Required)
* **typeProperties**: AmazonS3DatasetTypeProperties (Required)

### Avro
#### Properties
* **type**: 'Avro' (Required)
* **typeProperties**: AvroDatasetTypeProperties

### AzureBlob
#### Properties
* **type**: 'AzureBlob' (Required)
* **typeProperties**: AzureBlobDatasetTypeProperties

### AzureBlobFSFile
#### Properties
* **type**: 'AzureBlobFSFile' (Required)
* **typeProperties**: AzureBlobFSDatasetTypeProperties

### AzureDataExplorerTable
#### Properties
* **type**: 'AzureDataExplorerTable' (Required)
* **typeProperties**: AzureDataExplorerDatasetTypeProperties (Required)

### AzureDataLakeStoreFile
#### Properties
* **type**: 'AzureDataLakeStoreFile' (Required)
* **typeProperties**: AzureDataLakeStoreDatasetTypeProperties

### AzureDatabricksDeltaLakeDataset
#### Properties
* **type**: 'AzureDatabricksDeltaLakeDataset' (Required)
* **typeProperties**: AzureDatabricksDeltaLakeDatasetTypeProperties

### AzureMariaDBTable
#### Properties
* **type**: 'AzureMariaDBTable' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### AzureMySqlTable
#### Properties
* **type**: 'AzureMySqlTable' (Required)
* **typeProperties**: AzureMySqlTableDatasetTypeProperties (Required)

### AzurePostgreSqlTable
#### Properties
* **type**: 'AzurePostgreSqlTable' (Required)
* **typeProperties**: AzurePostgreSqlTableDatasetTypeProperties

### AzureSearchIndex
#### Properties
* **type**: 'AzureSearchIndex' (Required)
* **typeProperties**: AzureSearchIndexDatasetTypeProperties (Required)

### AzureSqlDWTable
#### Properties
* **type**: 'AzureSqlDWTable' (Required)
* **typeProperties**: AzureSqlDWTableDatasetTypeProperties

### AzureSqlMITable
#### Properties
* **type**: 'AzureSqlMITable' (Required)
* **typeProperties**: AzureSqlMITableDatasetTypeProperties

### AzureSqlTable
#### Properties
* **type**: 'AzureSqlTable' (Required)
* **typeProperties**: AzureSqlTableDatasetTypeProperties

### AzureTable
#### Properties
* **type**: 'AzureTable' (Required)
* **typeProperties**: AzureTableDatasetTypeProperties (Required)

### Binary
#### Properties
* **type**: 'Binary' (Required)
* **typeProperties**: BinaryDatasetTypeProperties

### CassandraTable
#### Properties
* **type**: 'CassandraTable' (Required)
* **typeProperties**: CassandraTableDatasetTypeProperties

### CommonDataServiceForAppsEntity
#### Properties
* **type**: 'CommonDataServiceForAppsEntity' (Required)
* **typeProperties**: CommonDataServiceForAppsEntityDatasetTypeProperties

### ConcurObject
#### Properties
* **type**: 'ConcurObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### CosmosDbMongoDbApiCollection
#### Properties
* **type**: 'CosmosDbMongoDbApiCollection' (Required)
* **typeProperties**: CosmosDbMongoDbApiCollectionDatasetTypeProperties (Required)

### CosmosDbSqlApiCollection
#### Properties
* **type**: 'CosmosDbSqlApiCollection' (Required)
* **typeProperties**: CosmosDbSqlApiCollectionDatasetTypeProperties (Required)

### CouchbaseTable
#### Properties
* **type**: 'CouchbaseTable' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### CustomDataset
#### Properties
* **type**: 'CustomDataset' (Required)
* **typeProperties**: any

### Db2Table
#### Properties
* **type**: 'Db2Table' (Required)
* **typeProperties**: Db2TableDatasetTypeProperties

### DelimitedText
#### Properties
* **type**: 'DelimitedText' (Required)
* **typeProperties**: DelimitedTextDatasetTypeProperties

### DocumentDbCollection
#### Properties
* **type**: 'DocumentDbCollection' (Required)
* **typeProperties**: DocumentDbCollectionDatasetTypeProperties (Required)

### DrillTable
#### Properties
* **type**: 'DrillTable' (Required)
* **typeProperties**: DrillDatasetTypeProperties

### DynamicsAXResource
#### Properties
* **type**: 'DynamicsAXResource' (Required)
* **typeProperties**: DynamicsAXResourceDatasetTypeProperties (Required)

### DynamicsCrmEntity
#### Properties
* **type**: 'DynamicsCrmEntity' (Required)
* **typeProperties**: DynamicsCrmEntityDatasetTypeProperties

### DynamicsEntity
#### Properties
* **type**: 'DynamicsEntity' (Required)
* **typeProperties**: DynamicsEntityDatasetTypeProperties

### EloquaObject
#### Properties
* **type**: 'EloquaObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### Excel
#### Properties
* **type**: 'Excel' (Required)
* **typeProperties**: ExcelDatasetTypeProperties

### FileShare
#### Properties
* **type**: 'FileShare' (Required)
* **typeProperties**: FileShareDatasetTypeProperties

### GoogleAdWordsObject
#### Properties
* **type**: 'GoogleAdWordsObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### GoogleBigQueryObject
#### Properties
* **type**: 'GoogleBigQueryObject' (Required)
* **typeProperties**: GoogleBigQueryDatasetTypeProperties

### GreenplumTable
#### Properties
* **type**: 'GreenplumTable' (Required)
* **typeProperties**: GreenplumDatasetTypeProperties

### HBaseObject
#### Properties
* **type**: 'HBaseObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### HiveObject
#### Properties
* **type**: 'HiveObject' (Required)
* **typeProperties**: HiveDatasetTypeProperties

### HttpFile
#### Properties
* **type**: 'HttpFile' (Required)
* **typeProperties**: HttpDatasetTypeProperties

### HubspotObject
#### Properties
* **type**: 'HubspotObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### ImpalaObject
#### Properties
* **type**: 'ImpalaObject' (Required)
* **typeProperties**: ImpalaDatasetTypeProperties

### InformixTable
#### Properties
* **type**: 'InformixTable' (Required)
* **typeProperties**: InformixTableDatasetTypeProperties

### JiraObject
#### Properties
* **type**: 'JiraObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### Json
#### Properties
* **type**: 'Json' (Required)
* **typeProperties**: JsonDatasetTypeProperties

### MagentoObject
#### Properties
* **type**: 'MagentoObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### MariaDBTable
#### Properties
* **type**: 'MariaDBTable' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### MarketoObject
#### Properties
* **type**: 'MarketoObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### MicrosoftAccessTable
#### Properties
* **type**: 'MicrosoftAccessTable' (Required)
* **typeProperties**: MicrosoftAccessTableDatasetTypeProperties

### MongoDbAtlasCollection
#### Properties
* **type**: 'MongoDbAtlasCollection' (Required)
* **typeProperties**: MongoDbAtlasCollectionDatasetTypeProperties (Required)

### MongoDbCollection
#### Properties
* **type**: 'MongoDbCollection' (Required)
* **typeProperties**: MongoDbCollectionDatasetTypeProperties (Required)

### MongoDbV2Collection
#### Properties
* **type**: 'MongoDbV2Collection' (Required)
* **typeProperties**: MongoDbV2CollectionDatasetTypeProperties (Required)

### MySqlTable
#### Properties
* **type**: 'MySqlTable' (Required)
* **typeProperties**: MySqlTableDatasetTypeProperties

### NetezzaTable
#### Properties
* **type**: 'NetezzaTable' (Required)
* **typeProperties**: NetezzaTableDatasetTypeProperties

### ODataResource
#### Properties
* **type**: 'ODataResource' (Required)
* **typeProperties**: ODataResourceDatasetTypeProperties

### OdbcTable
#### Properties
* **type**: 'OdbcTable' (Required)
* **typeProperties**: OdbcTableDatasetTypeProperties

### Office365Table
#### Properties
* **type**: 'Office365Table' (Required)
* **typeProperties**: Office365DatasetTypeProperties (Required)

### OracleServiceCloudObject
#### Properties
* **type**: 'OracleServiceCloudObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### OracleTable
#### Properties
* **type**: 'OracleTable' (Required)
* **typeProperties**: OracleTableDatasetTypeProperties

### Orc
#### Properties
* **type**: 'Orc' (Required)
* **typeProperties**: OrcDatasetTypeProperties

### Parquet
#### Properties
* **type**: 'Parquet' (Required)
* **typeProperties**: ParquetDatasetTypeProperties

### PaypalObject
#### Properties
* **type**: 'PaypalObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### PhoenixObject
#### Properties
* **type**: 'PhoenixObject' (Required)
* **typeProperties**: PhoenixDatasetTypeProperties

### PostgreSqlTable
#### Properties
* **type**: 'PostgreSqlTable' (Required)
* **typeProperties**: PostgreSqlTableDatasetTypeProperties

### PrestoObject
#### Properties
* **type**: 'PrestoObject' (Required)
* **typeProperties**: PrestoDatasetTypeProperties

### QuickBooksObject
#### Properties
* **type**: 'QuickBooksObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### RelationalTable
#### Properties
* **type**: 'RelationalTable' (Required)
* **typeProperties**: RelationalTableDatasetTypeProperties

### ResponsysObject
#### Properties
* **type**: 'ResponsysObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### RestResource
#### Properties
* **type**: 'RestResource' (Required)
* **typeProperties**: RestResourceDatasetTypeProperties

### SalesforceMarketingCloudObject
#### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### SalesforceObject
#### Properties
* **type**: 'SalesforceObject' (Required)
* **typeProperties**: SalesforceObjectDatasetTypeProperties

### SalesforceServiceCloudObject
#### Properties
* **type**: 'SalesforceServiceCloudObject' (Required)
* **typeProperties**: SalesforceServiceCloudObjectDatasetTypeProperties

### SapBwCube
#### Properties
* **type**: 'SapBwCube' (Required)

### SapCloudForCustomerResource
#### Properties
* **type**: 'SapCloudForCustomerResource' (Required)
* **typeProperties**: SapCloudForCustomerResourceDatasetTypeProperties (Required)

### SapEccResource
#### Properties
* **type**: 'SapEccResource' (Required)
* **typeProperties**: SapEccResourceDatasetTypeProperties (Required)

### SapHanaTable
#### Properties
* **type**: 'SapHanaTable' (Required)
* **typeProperties**: SapHanaTableDatasetTypeProperties

### SapOpenHubTable
#### Properties
* **type**: 'SapOpenHubTable' (Required)
* **typeProperties**: SapOpenHubTableDatasetTypeProperties (Required)

### SapTableResource
#### Properties
* **type**: 'SapTableResource' (Required)
* **typeProperties**: SapTableResourceDatasetTypeProperties (Required)

### ServiceNowObject
#### Properties
* **type**: 'ServiceNowObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### SharePointOnlineListResource
#### Properties
* **type**: 'SharePointOnlineListResource' (Required)
* **typeProperties**: SharePointOnlineListDatasetTypeProperties

### ShopifyObject
#### Properties
* **type**: 'ShopifyObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### SnowflakeTable
#### Properties
* **type**: 'SnowflakeTable' (Required)
* **typeProperties**: SnowflakeDatasetTypeProperties (Required)

### SparkObject
#### Properties
* **type**: 'SparkObject' (Required)
* **typeProperties**: SparkDatasetTypeProperties

### SqlServerTable
#### Properties
* **type**: 'SqlServerTable' (Required)
* **typeProperties**: SqlServerTableDatasetTypeProperties

### SquareObject
#### Properties
* **type**: 'SquareObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### SybaseTable
#### Properties
* **type**: 'SybaseTable' (Required)
* **typeProperties**: SybaseTableDatasetTypeProperties

### TeradataTable
#### Properties
* **type**: 'TeradataTable' (Required)
* **typeProperties**: TeradataTableDatasetTypeProperties

### VerticaTable
#### Properties
* **type**: 'VerticaTable' (Required)
* **typeProperties**: VerticaDatasetTypeProperties

### WebTable
#### Properties
* **type**: 'WebTable' (Required)
* **typeProperties**: WebTableDatasetTypeProperties (Required)

### XeroObject
#### Properties
* **type**: 'XeroObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

### Xml
#### Properties
* **type**: 'Xml' (Required)
* **typeProperties**: XmlDatasetTypeProperties

### ZohoObject
#### Properties
* **type**: 'ZohoObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties


## schemas:108_folder
### Properties
* **name**: string

## Dictionary<string,ParameterSpecification>
### Additional Properties
* **Additional Properties Type**: ParameterSpecification

## ParameterSpecification
### Properties
* **defaultValue**: any
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'SecureString' | 'String' (Required)

## AmazonMWSObject
### Properties
* **type**: 'AmazonMWSObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## GenericDatasetTypeProperties
### Properties
* **tableName**: any

## AmazonRedshiftTable
### Properties
* **type**: 'AmazonRedshiftTable' (Required)
* **typeProperties**: AmazonRedshiftTableDatasetTypeProperties

## AmazonRedshiftTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AmazonS3Object
### Properties
* **type**: 'AmazonS3Object' (Required)
* **typeProperties**: AmazonS3DatasetTypeProperties (Required)

## AmazonS3DatasetTypeProperties
### Properties
* **bucketName**: any (Required)
* **compression**: DatasetCompression
* **format**: DatasetStorageFormat
* **key**: any
* **modifiedDatetimeEnd**: any
* **modifiedDatetimeStart**: any
* **prefix**: any
* **version**: any

## DatasetCompression
* **Discriminator**: type
### Base Properties
### BZip2
#### Properties
* **type**: 'BZip2' (Required)

### Deflate
#### Properties
* **level**: any
* **type**: 'Deflate' (Required)

### GZip
#### Properties
* **level**: any
* **type**: 'GZip' (Required)

### Tar
#### Properties
* **type**: 'Tar' (Required)

### TarGZip
#### Properties
* **level**: any
* **type**: 'TarGZip' (Required)

### ZipDeflate
#### Properties
* **level**: any
* **type**: 'ZipDeflate' (Required)


## BZip2
### Properties
* **type**: 'BZip2' (Required)

## Deflate
### Properties
* **level**: any
* **type**: 'Deflate' (Required)

## GZip
### Properties
* **level**: any
* **type**: 'GZip' (Required)

## Tar
### Properties
* **type**: 'Tar' (Required)

## TarGZip
### Properties
* **level**: any
* **type**: 'TarGZip' (Required)

## ZipDeflate
### Properties
* **level**: any
* **type**: 'ZipDeflate' (Required)

## DatasetStorageFormat
* **Discriminator**: type
### Base Properties
* **deserializer**: any
* **serializer**: any
### AvroFormat
#### Properties
* **type**: 'AvroFormat' (Required)

### JsonFormat
#### Properties
* **encodingName**: any
* **filePattern**: any
* **jsonNodeReference**: any
* **jsonPathDefinition**: any
* **nestingSeparator**: any
* **type**: 'JsonFormat' (Required)

### OrcFormat
#### Properties
* **type**: 'OrcFormat' (Required)

### ParquetFormat
#### Properties
* **type**: 'ParquetFormat' (Required)

### TextFormat
#### Properties
* **columnDelimiter**: any
* **encodingName**: any
* **escapeChar**: any
* **firstRowAsHeader**: any
* **nullValue**: any
* **quoteChar**: any
* **rowDelimiter**: any
* **skipLineCount**: any
* **treatEmptyAsNull**: any
* **type**: 'TextFormat' (Required)


## AvroFormat
### Properties
* **type**: 'AvroFormat' (Required)

## JsonFormat
### Properties
* **encodingName**: any
* **filePattern**: any
* **jsonNodeReference**: any
* **jsonPathDefinition**: any
* **nestingSeparator**: any
* **type**: 'JsonFormat' (Required)

## OrcFormat
### Properties
* **type**: 'OrcFormat' (Required)

## ParquetFormat
### Properties
* **type**: 'ParquetFormat' (Required)

## TextFormat
### Properties
* **columnDelimiter**: any
* **encodingName**: any
* **escapeChar**: any
* **firstRowAsHeader**: any
* **nullValue**: any
* **quoteChar**: any
* **rowDelimiter**: any
* **skipLineCount**: any
* **treatEmptyAsNull**: any
* **type**: 'TextFormat' (Required)

## Avro
### Properties
* **type**: 'Avro' (Required)
* **typeProperties**: AvroDatasetTypeProperties

## AvroDatasetTypeProperties
### Properties
* **avroCompressionCodec**: 'bzip2' | 'deflate' | 'none' | 'snappy' | 'xz'
* **avroCompressionLevel**: int
* **location**: DatasetLocation (Required)

## DatasetLocation
* **Discriminator**: type
### Base Properties
* **fileName**: any
* **folderPath**: any
### AmazonS3Location
#### Properties
* **bucketName**: any
* **type**: 'AmazonS3Location' (Required)
* **version**: any

### AzureBlobFSLocation
#### Properties
* **fileSystem**: any
* **type**: 'AzureBlobFSLocation' (Required)

### AzureBlobStorageLocation
#### Properties
* **container**: any
* **type**: 'AzureBlobStorageLocation' (Required)

### AzureDataLakeStoreLocation
#### Properties
* **type**: 'AzureDataLakeStoreLocation' (Required)

### AzureFileStorageLocation
#### Properties
* **type**: 'AzureFileStorageLocation' (Required)

### FileServerLocation
#### Properties
* **type**: 'FileServerLocation' (Required)

### FtpServerLocation
#### Properties
* **type**: 'FtpServerLocation' (Required)

### GoogleCloudStorageLocation
#### Properties
* **bucketName**: any
* **type**: 'GoogleCloudStorageLocation' (Required)
* **version**: any

### HdfsLocation
#### Properties
* **type**: 'HdfsLocation' (Required)

### HttpServerLocation
#### Properties
* **relativeUrl**: any
* **type**: 'HttpServerLocation' (Required)

### SftpLocation
#### Properties
* **type**: 'SftpLocation' (Required)


## AmazonS3Location
### Properties
* **bucketName**: any
* **type**: 'AmazonS3Location' (Required)
* **version**: any

## AzureBlobFSLocation
### Properties
* **fileSystem**: any
* **type**: 'AzureBlobFSLocation' (Required)

## AzureBlobStorageLocation
### Properties
* **container**: any
* **type**: 'AzureBlobStorageLocation' (Required)

## AzureDataLakeStoreLocation
### Properties
* **type**: 'AzureDataLakeStoreLocation' (Required)

## AzureFileStorageLocation
### Properties
* **type**: 'AzureFileStorageLocation' (Required)

## FileServerLocation
### Properties
* **type**: 'FileServerLocation' (Required)

## FtpServerLocation
### Properties
* **type**: 'FtpServerLocation' (Required)

## GoogleCloudStorageLocation
### Properties
* **bucketName**: any
* **type**: 'GoogleCloudStorageLocation' (Required)
* **version**: any

## HdfsLocation
### Properties
* **type**: 'HdfsLocation' (Required)

## HttpServerLocation
### Properties
* **relativeUrl**: any
* **type**: 'HttpServerLocation' (Required)

## SftpLocation
### Properties
* **type**: 'SftpLocation' (Required)

## AzureBlob
### Properties
* **type**: 'AzureBlob' (Required)
* **typeProperties**: AzureBlobDatasetTypeProperties

## AzureBlobDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **fileName**: any
* **folderPath**: any
* **format**: DatasetStorageFormat
* **modifiedDatetimeEnd**: any
* **modifiedDatetimeStart**: any
* **tableRootLocation**: any

## AzureBlobFSFile
### Properties
* **type**: 'AzureBlobFSFile' (Required)
* **typeProperties**: AzureBlobFSDatasetTypeProperties

## AzureBlobFSDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **fileName**: any
* **folderPath**: any
* **format**: DatasetStorageFormat

## AzureDataExplorerTable
### Properties
* **type**: 'AzureDataExplorerTable' (Required)
* **typeProperties**: AzureDataExplorerDatasetTypeProperties (Required)

## AzureDataExplorerDatasetTypeProperties
### Properties
* **table**: any

## AzureDataLakeStoreFile
### Properties
* **type**: 'AzureDataLakeStoreFile' (Required)
* **typeProperties**: AzureDataLakeStoreDatasetTypeProperties

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **fileName**: any
* **folderPath**: any
* **format**: DatasetStorageFormat

## AzureDatabricksDeltaLakeDataset
### Properties
* **type**: 'AzureDatabricksDeltaLakeDataset' (Required)
* **typeProperties**: AzureDatabricksDeltaLakeDatasetTypeProperties

## AzureDatabricksDeltaLakeDatasetTypeProperties
### Properties
* **database**: any
* **table**: any

## AzureMariaDBTable
### Properties
* **type**: 'AzureMariaDBTable' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## AzureMySqlTable
### Properties
* **type**: 'AzureMySqlTable' (Required)
* **typeProperties**: AzureMySqlTableDatasetTypeProperties (Required)

## AzureMySqlTableDatasetTypeProperties
### Properties
* **table**: any
* **tableName**: any

## AzurePostgreSqlTable
### Properties
* **type**: 'AzurePostgreSqlTable' (Required)
* **typeProperties**: AzurePostgreSqlTableDatasetTypeProperties

## AzurePostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AzureSearchIndex
### Properties
* **type**: 'AzureSearchIndex' (Required)
* **typeProperties**: AzureSearchIndexDatasetTypeProperties (Required)

## AzureSearchIndexDatasetTypeProperties
### Properties
* **indexName**: any (Required)

## AzureSqlDWTable
### Properties
* **type**: 'AzureSqlDWTable' (Required)
* **typeProperties**: AzureSqlDWTableDatasetTypeProperties

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AzureSqlMITable
### Properties
* **type**: 'AzureSqlMITable' (Required)
* **typeProperties**: AzureSqlMITableDatasetTypeProperties

## AzureSqlMITableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AzureSqlTable
### Properties
* **type**: 'AzureSqlTable' (Required)
* **typeProperties**: AzureSqlTableDatasetTypeProperties

## AzureSqlTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AzureTable
### Properties
* **type**: 'AzureTable' (Required)
* **typeProperties**: AzureTableDatasetTypeProperties (Required)

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## Binary
### Properties
* **type**: 'Binary' (Required)
* **typeProperties**: BinaryDatasetTypeProperties

## BinaryDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **location**: DatasetLocation (Required)

## CassandraTable
### Properties
* **type**: 'CassandraTable' (Required)
* **typeProperties**: CassandraTableDatasetTypeProperties

## CassandraTableDatasetTypeProperties
### Properties
* **keyspace**: any
* **tableName**: any

## CommonDataServiceForAppsEntity
### Properties
* **type**: 'CommonDataServiceForAppsEntity' (Required)
* **typeProperties**: CommonDataServiceForAppsEntityDatasetTypeProperties

## CommonDataServiceForAppsEntityDatasetTypeProperties
### Properties
* **entityName**: any

## ConcurObject
### Properties
* **type**: 'ConcurObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## CosmosDbMongoDbApiCollection
### Properties
* **type**: 'CosmosDbMongoDbApiCollection' (Required)
* **typeProperties**: CosmosDbMongoDbApiCollectionDatasetTypeProperties (Required)

## CosmosDbMongoDbApiCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required)

## CosmosDbSqlApiCollection
### Properties
* **type**: 'CosmosDbSqlApiCollection' (Required)
* **typeProperties**: CosmosDbSqlApiCollectionDatasetTypeProperties (Required)

## CosmosDbSqlApiCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required)

## CouchbaseTable
### Properties
* **type**: 'CouchbaseTable' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## CustomDataset
### Properties
* **type**: 'CustomDataset' (Required)
* **typeProperties**: any

## Db2Table
### Properties
* **type**: 'Db2Table' (Required)
* **typeProperties**: Db2TableDatasetTypeProperties

## Db2TableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## DelimitedText
### Properties
* **type**: 'DelimitedText' (Required)
* **typeProperties**: DelimitedTextDatasetTypeProperties

## DelimitedTextDatasetTypeProperties
### Properties
* **columnDelimiter**: any
* **compressionCodec**: any
* **compressionLevel**: any
* **encodingName**: any
* **escapeChar**: any
* **firstRowAsHeader**: any
* **location**: DatasetLocation (Required)
* **nullValue**: any
* **quoteChar**: any
* **rowDelimiter**: any

## DocumentDbCollection
### Properties
* **type**: 'DocumentDbCollection' (Required)
* **typeProperties**: DocumentDbCollectionDatasetTypeProperties (Required)

## DocumentDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required)

## DrillTable
### Properties
* **type**: 'DrillTable' (Required)
* **typeProperties**: DrillDatasetTypeProperties

## DrillDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## DynamicsAXResource
### Properties
* **type**: 'DynamicsAXResource' (Required)
* **typeProperties**: DynamicsAXResourceDatasetTypeProperties (Required)

## DynamicsAXResourceDatasetTypeProperties
### Properties
* **path**: any (Required)

## DynamicsCrmEntity
### Properties
* **type**: 'DynamicsCrmEntity' (Required)
* **typeProperties**: DynamicsCrmEntityDatasetTypeProperties

## DynamicsCrmEntityDatasetTypeProperties
### Properties
* **entityName**: any

## DynamicsEntity
### Properties
* **type**: 'DynamicsEntity' (Required)
* **typeProperties**: DynamicsEntityDatasetTypeProperties

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any

## EloquaObject
### Properties
* **type**: 'EloquaObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## Excel
### Properties
* **type**: 'Excel' (Required)
* **typeProperties**: ExcelDatasetTypeProperties

## ExcelDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **firstRowAsHeader**: any
* **location**: DatasetLocation (Required)
* **nullValue**: any
* **range**: any
* **sheetName**: any (Required)

## FileShare
### Properties
* **type**: 'FileShare' (Required)
* **typeProperties**: FileShareDatasetTypeProperties

## FileShareDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **fileFilter**: any
* **fileName**: any
* **folderPath**: any
* **format**: DatasetStorageFormat
* **modifiedDatetimeEnd**: any
* **modifiedDatetimeStart**: any

## GoogleAdWordsObject
### Properties
* **type**: 'GoogleAdWordsObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## GoogleBigQueryObject
### Properties
* **type**: 'GoogleBigQueryObject' (Required)
* **typeProperties**: GoogleBigQueryDatasetTypeProperties

## GoogleBigQueryDatasetTypeProperties
### Properties
* **dataset**: any
* **table**: any
* **tableName**: any

## GreenplumTable
### Properties
* **type**: 'GreenplumTable' (Required)
* **typeProperties**: GreenplumDatasetTypeProperties

## GreenplumDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## HBaseObject
### Properties
* **type**: 'HBaseObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## HiveObject
### Properties
* **type**: 'HiveObject' (Required)
* **typeProperties**: HiveDatasetTypeProperties

## HiveDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## HttpFile
### Properties
* **type**: 'HttpFile' (Required)
* **typeProperties**: HttpDatasetTypeProperties

## HttpDatasetTypeProperties
### Properties
* **additionalHeaders**: any
* **compression**: DatasetCompression
* **format**: DatasetStorageFormat
* **relativeUrl**: any
* **requestBody**: any
* **requestMethod**: any

## HubspotObject
### Properties
* **type**: 'HubspotObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## ImpalaObject
### Properties
* **type**: 'ImpalaObject' (Required)
* **typeProperties**: ImpalaDatasetTypeProperties

## ImpalaDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## InformixTable
### Properties
* **type**: 'InformixTable' (Required)
* **typeProperties**: InformixTableDatasetTypeProperties

## InformixTableDatasetTypeProperties
### Properties
* **tableName**: any

## JiraObject
### Properties
* **type**: 'JiraObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## Json
### Properties
* **type**: 'Json' (Required)
* **typeProperties**: JsonDatasetTypeProperties

## JsonDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **encodingName**: any
* **location**: DatasetLocation (Required)

## MagentoObject
### Properties
* **type**: 'MagentoObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## MariaDBTable
### Properties
* **type**: 'MariaDBTable' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## MarketoObject
### Properties
* **type**: 'MarketoObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## MicrosoftAccessTable
### Properties
* **type**: 'MicrosoftAccessTable' (Required)
* **typeProperties**: MicrosoftAccessTableDatasetTypeProperties

## MicrosoftAccessTableDatasetTypeProperties
### Properties
* **tableName**: any

## MongoDbAtlasCollection
### Properties
* **type**: 'MongoDbAtlasCollection' (Required)
* **typeProperties**: MongoDbAtlasCollectionDatasetTypeProperties (Required)

## MongoDbAtlasCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required)

## MongoDbCollection
### Properties
* **type**: 'MongoDbCollection' (Required)
* **typeProperties**: MongoDbCollectionDatasetTypeProperties (Required)

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required)

## MongoDbV2Collection
### Properties
* **type**: 'MongoDbV2Collection' (Required)
* **typeProperties**: MongoDbV2CollectionDatasetTypeProperties (Required)

## MongoDbV2CollectionDatasetTypeProperties
### Properties
* **collection**: any (Required)

## MySqlTable
### Properties
* **type**: 'MySqlTable' (Required)
* **typeProperties**: MySqlTableDatasetTypeProperties

## MySqlTableDatasetTypeProperties
### Properties
* **tableName**: any

## NetezzaTable
### Properties
* **type**: 'NetezzaTable' (Required)
* **typeProperties**: NetezzaTableDatasetTypeProperties

## NetezzaTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## ODataResource
### Properties
* **type**: 'ODataResource' (Required)
* **typeProperties**: ODataResourceDatasetTypeProperties

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any

## OdbcTable
### Properties
* **type**: 'OdbcTable' (Required)
* **typeProperties**: OdbcTableDatasetTypeProperties

## OdbcTableDatasetTypeProperties
### Properties
* **tableName**: any

## Office365Table
### Properties
* **type**: 'Office365Table' (Required)
* **typeProperties**: Office365DatasetTypeProperties (Required)

## Office365DatasetTypeProperties
### Properties
* **predicate**: any
* **tableName**: any (Required)

## OracleServiceCloudObject
### Properties
* **type**: 'OracleServiceCloudObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## OracleTable
### Properties
* **type**: 'OracleTable' (Required)
* **typeProperties**: OracleTableDatasetTypeProperties

## OracleTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## Orc
### Properties
* **type**: 'Orc' (Required)
* **typeProperties**: OrcDatasetTypeProperties

## OrcDatasetTypeProperties
### Properties
* **location**: DatasetLocation (Required)
* **orcCompressionCodec**: 'lzo' | 'none' | 'snappy' | 'zlib'

## Parquet
### Properties
* **type**: 'Parquet' (Required)
* **typeProperties**: ParquetDatasetTypeProperties

## ParquetDatasetTypeProperties
### Properties
* **compressionCodec**: any
* **location**: DatasetLocation (Required)

## PaypalObject
### Properties
* **type**: 'PaypalObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## PhoenixObject
### Properties
* **type**: 'PhoenixObject' (Required)
* **typeProperties**: PhoenixDatasetTypeProperties

## PhoenixDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## PostgreSqlTable
### Properties
* **type**: 'PostgreSqlTable' (Required)
* **typeProperties**: PostgreSqlTableDatasetTypeProperties

## PostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## PrestoObject
### Properties
* **type**: 'PrestoObject' (Required)
* **typeProperties**: PrestoDatasetTypeProperties

## PrestoDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## QuickBooksObject
### Properties
* **type**: 'QuickBooksObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## RelationalTable
### Properties
* **type**: 'RelationalTable' (Required)
* **typeProperties**: RelationalTableDatasetTypeProperties

## RelationalTableDatasetTypeProperties
### Properties
* **tableName**: any

## ResponsysObject
### Properties
* **type**: 'ResponsysObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## RestResource
### Properties
* **type**: 'RestResource' (Required)
* **typeProperties**: RestResourceDatasetTypeProperties

## RestResourceDatasetTypeProperties
### Properties
* **additionalHeaders**: any
* **paginationRules**: any
* **relativeUrl**: any
* **requestBody**: any
* **requestMethod**: any

## SalesforceMarketingCloudObject
### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## SalesforceObject
### Properties
* **type**: 'SalesforceObject' (Required)
* **typeProperties**: SalesforceObjectDatasetTypeProperties

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any

## SalesforceServiceCloudObject
### Properties
* **type**: 'SalesforceServiceCloudObject' (Required)
* **typeProperties**: SalesforceServiceCloudObjectDatasetTypeProperties

## SalesforceServiceCloudObjectDatasetTypeProperties
### Properties
* **objectApiName**: any

## SapBwCube
### Properties
* **type**: 'SapBwCube' (Required)

## SapCloudForCustomerResource
### Properties
* **type**: 'SapCloudForCustomerResource' (Required)
* **typeProperties**: SapCloudForCustomerResourceDatasetTypeProperties (Required)

## SapCloudForCustomerResourceDatasetTypeProperties
### Properties
* **path**: any (Required)

## SapEccResource
### Properties
* **type**: 'SapEccResource' (Required)
* **typeProperties**: SapEccResourceDatasetTypeProperties (Required)

## SapEccResourceDatasetTypeProperties
### Properties
* **path**: any (Required)

## SapHanaTable
### Properties
* **type**: 'SapHanaTable' (Required)
* **typeProperties**: SapHanaTableDatasetTypeProperties

## SapHanaTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any

## SapOpenHubTable
### Properties
* **type**: 'SapOpenHubTable' (Required)
* **typeProperties**: SapOpenHubTableDatasetTypeProperties (Required)

## SapOpenHubTableDatasetTypeProperties
### Properties
* **baseRequestId**: any
* **excludeLastRequest**: any
* **openHubDestinationName**: any (Required)

## SapTableResource
### Properties
* **type**: 'SapTableResource' (Required)
* **typeProperties**: SapTableResourceDatasetTypeProperties (Required)

## SapTableResourceDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## ServiceNowObject
### Properties
* **type**: 'ServiceNowObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## SharePointOnlineListResource
### Properties
* **type**: 'SharePointOnlineListResource' (Required)
* **typeProperties**: SharePointOnlineListDatasetTypeProperties

## SharePointOnlineListDatasetTypeProperties
### Properties
* **listName**: any

## ShopifyObject
### Properties
* **type**: 'ShopifyObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## SnowflakeTable
### Properties
* **type**: 'SnowflakeTable' (Required)
* **typeProperties**: SnowflakeDatasetTypeProperties (Required)

## SnowflakeDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any

## SparkObject
### Properties
* **type**: 'SparkObject' (Required)
* **typeProperties**: SparkDatasetTypeProperties

## SparkDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## SqlServerTable
### Properties
* **type**: 'SqlServerTable' (Required)
* **typeProperties**: SqlServerTableDatasetTypeProperties

## SqlServerTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## SquareObject
### Properties
* **type**: 'SquareObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## SybaseTable
### Properties
* **type**: 'SybaseTable' (Required)
* **typeProperties**: SybaseTableDatasetTypeProperties

## SybaseTableDatasetTypeProperties
### Properties
* **tableName**: any

## TeradataTable
### Properties
* **type**: 'TeradataTable' (Required)
* **typeProperties**: TeradataTableDatasetTypeProperties

## TeradataTableDatasetTypeProperties
### Properties
* **database**: any
* **table**: any

## VerticaTable
### Properties
* **type**: 'VerticaTable' (Required)
* **typeProperties**: VerticaDatasetTypeProperties

## VerticaDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## WebTable
### Properties
* **type**: 'WebTable' (Required)
* **typeProperties**: WebTableDatasetTypeProperties (Required)

## WebTableDatasetTypeProperties
### Properties
* **index**: any (Required)
* **path**: any

## XeroObject
### Properties
* **type**: 'XeroObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## Xml
### Properties
* **type**: 'Xml' (Required)
* **typeProperties**: XmlDatasetTypeProperties

## XmlDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **encodingName**: any
* **location**: DatasetLocation (Required)
* **nullValue**: any

## ZohoObject
### Properties
* **type**: 'ZohoObject' (Required)
* **typeProperties**: GenericDatasetTypeProperties

## Microsoft.DataFactory/factories/integrationRuntimes
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationRuntime (Required)
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant)

## IntegrationRuntime
* **Discriminator**: type
### Base Properties
* **description**: string
### Managed
#### Properties
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: ManagedIntegrationRuntimeTypeProperties (Required)

### SelfHosted
#### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: SelfHostedIntegrationRuntimeTypeProperties


## Managed
### Properties
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: ManagedIntegrationRuntimeTypeProperties (Required)

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: IntegrationRuntimeComputeProperties
* **ssisProperties**: IntegrationRuntimeSsisProperties

## IntegrationRuntimeComputeProperties
### Properties
* **dataFlowProperties**: IntegrationRuntimeDataFlowProperties
* **location**: string
* **maxParallelExecutionsPerNode**: int
* **nodeSize**: string
* **numberOfNodes**: int
* **vNetProperties**: IntegrationRuntimeVNetProperties

## IntegrationRuntimeDataFlowProperties
### Properties
* **computeType**: 'ComputeOptimized' | 'General' | 'MemoryOptimized'
* **coreCount**: int
* **timeToLive**: int

## IntegrationRuntimeVNetProperties
### Properties
* **publicIPs**: string[]
* **subnet**: string
* **vNetId**: string

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: IntegrationRuntimeSsisCatalogInfo
* **customSetupScriptProperties**: IntegrationRuntimeCustomSetupScriptProperties
* **dataProxyProperties**: IntegrationRuntimeDataProxyProperties
* **edition**: 'Enterprise' | 'Standard'
* **expressCustomSetupProperties**: CustomSetupBase[]
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
* **packageStores**: PackageStore[]

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: SecureString
* **catalogAdminUserName**: string
* **catalogPricingTier**: 'Basic' | 'Premium' | 'PremiumRS' | 'Standard'
* **catalogServerEndpoint**: string

## SecureString
### Properties
* **type**: 'SecureString' (Required)
* **value**: string (Required)

## IntegrationRuntimeCustomSetupScriptProperties
### Properties
* **blobContainerUri**: string
* **sasToken**: SecureString

## IntegrationRuntimeDataProxyProperties
### Properties
* **connectVia**: EntityReference
* **path**: string
* **stagingLinkedService**: EntityReference

## EntityReference
### Properties
* **referenceName**: string
* **type**: 'IntegrationRuntimeReference' | 'LinkedServiceReference'

## CustomSetupBase
* **Discriminator**: type
### Base Properties
### AzPowerShellSetup
#### Properties
* **type**: 'AzPowerShellSetup' (Required)
* **typeProperties**: AzPowerShellSetupTypeProperties (Required)

### CmdkeySetup
#### Properties
* **type**: 'CmdkeySetup' (Required)
* **typeProperties**: CmdkeySetupTypeProperties (Required)

### ComponentSetup
#### Properties
* **type**: 'ComponentSetup' (Required)
* **typeProperties**: LicensedComponentSetupTypeProperties (Required)

### EnvironmentVariableSetup
#### Properties
* **type**: 'EnvironmentVariableSetup' (Required)
* **typeProperties**: EnvironmentVariableSetupTypeProperties (Required)


## AzPowerShellSetup
### Properties
* **type**: 'AzPowerShellSetup' (Required)
* **typeProperties**: AzPowerShellSetupTypeProperties (Required)

## AzPowerShellSetupTypeProperties
### Properties
* **version**: string (Required)

## CmdkeySetup
### Properties
* **type**: 'CmdkeySetup' (Required)
* **typeProperties**: CmdkeySetupTypeProperties (Required)

## CmdkeySetupTypeProperties
### Properties
* **password**: SecretBase (Required)
* **targetName**: any (Required)
* **userName**: any (Required)

## SecretBase
* **Discriminator**: type
### Base Properties
### AzureKeyVaultSecret
#### Properties
* **secretName**: any (Required)
* **secretVersion**: any
* **store**: LinkedServiceReference (Required)
* **type**: 'AzureKeyVaultSecret' (Required)

### SecureString
#### Properties
* **type**: 'SecureString' (Required)
* **value**: string (Required)


## AzureKeyVaultSecret
### Properties
* **secretName**: any (Required)
* **secretVersion**: any
* **store**: LinkedServiceReference (Required)
* **type**: 'AzureKeyVaultSecret' (Required)

## ComponentSetup
### Properties
* **type**: 'ComponentSetup' (Required)
* **typeProperties**: LicensedComponentSetupTypeProperties (Required)

## LicensedComponentSetupTypeProperties
### Properties
* **componentName**: string (Required)
* **licenseKey**: SecretBase

## EnvironmentVariableSetup
### Properties
* **type**: 'EnvironmentVariableSetup' (Required)
* **typeProperties**: EnvironmentVariableSetupTypeProperties (Required)

## EnvironmentVariableSetupTypeProperties
### Properties
* **variableName**: string (Required)
* **variableValue**: string (Required)

## PackageStore
### Properties
* **name**: string (Required)
* **packageStoreLinkedService**: EntityReference (Required)

## SelfHosted
### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: SelfHostedIntegrationRuntimeTypeProperties

## SelfHostedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: LinkedIntegrationRuntimeType

## LinkedIntegrationRuntimeType
* **Discriminator**: authorizationType
### Base Properties
### Key
#### Properties
* **authorizationType**: 'Key' (Required)
* **key**: SecureString (Required)

### RBAC
#### Properties
* **authorizationType**: 'RBAC' (Required)
* **resourceId**: string (Required)


## Key
### Properties
* **authorizationType**: 'Key' (Required)
* **key**: SecureString (Required)

## RBAC
### Properties
* **authorizationType**: 'RBAC' (Required)
* **resourceId**: string (Required)

## Microsoft.DataFactory/factories/linkedservices
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkedService (Required)
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant)

## LinkedService
* **Discriminator**: type
### Base Properties
* **annotations**: any[]
* **connectVia**: IntegrationRuntimeReference
* **description**: string
* **parameters**: Dictionary<string,ParameterSpecification>
### AmazonMWS
#### Properties
* **type**: 'AmazonMWS' (Required)
* **typeProperties**: AmazonMWSLinkedServiceTypeProperties (Required)

### AmazonRedshift
#### Properties
* **type**: 'AmazonRedshift' (Required)
* **typeProperties**: AmazonRedshiftLinkedServiceTypeProperties (Required)

### AmazonS3
#### Properties
* **type**: 'AmazonS3' (Required)
* **typeProperties**: AmazonS3LinkedServiceTypeProperties (Required)

### AzureBatch
#### Properties
* **type**: 'AzureBatch' (Required)
* **typeProperties**: AzureBatchLinkedServiceTypeProperties (Required)

### AzureBlobFS
#### Properties
* **type**: 'AzureBlobFS' (Required)
* **typeProperties**: AzureBlobFSLinkedServiceTypeProperties (Required)

### AzureBlobStorage
#### Properties
* **type**: 'AzureBlobStorage' (Required)
* **typeProperties**: AzureBlobStorageLinkedServiceTypeProperties (Required)

### AzureDataExplorer
#### Properties
* **type**: 'AzureDataExplorer' (Required)
* **typeProperties**: AzureDataExplorerLinkedServiceTypeProperties (Required)

### AzureDataLakeAnalytics
#### Properties
* **type**: 'AzureDataLakeAnalytics' (Required)
* **typeProperties**: AzureDataLakeAnalyticsLinkedServiceTypeProperties (Required)

### AzureDataLakeStore
#### Properties
* **type**: 'AzureDataLakeStore' (Required)
* **typeProperties**: AzureDataLakeStoreLinkedServiceTypeProperties (Required)

### AzureDatabricks
#### Properties
* **type**: 'AzureDatabricks' (Required)
* **typeProperties**: AzureDatabricksLinkedServiceTypeProperties (Required)

### AzureDatabricksDeltaLake
#### Properties
* **type**: 'AzureDatabricksDeltaLake' (Required)
* **typeProperties**: AzureDatabricksDetltaLakeLinkedServiceTypeProperties (Required)

### AzureFileStorage
#### Properties
* **type**: 'AzureFileStorage' (Required)
* **typeProperties**: AzureFileStorageLinkedServiceTypeProperties (Required)

### AzureFunction
#### Properties
* **type**: 'AzureFunction' (Required)
* **typeProperties**: AzureFunctionLinkedServiceTypeProperties (Required)

### AzureKeyVault
#### Properties
* **type**: 'AzureKeyVault' (Required)
* **typeProperties**: AzureKeyVaultLinkedServiceTypeProperties (Required)

### AzureML
#### Properties
* **type**: 'AzureML' (Required)
* **typeProperties**: AzureMLLinkedServiceTypeProperties (Required)

### AzureMLService
#### Properties
* **type**: 'AzureMLService' (Required)
* **typeProperties**: AzureMLServiceLinkedServiceTypeProperties (Required)

### AzureMariaDB
#### Properties
* **type**: 'AzureMariaDB' (Required)
* **typeProperties**: AzureMariaDBLinkedServiceTypeProperties (Required)

### AzureMySql
#### Properties
* **type**: 'AzureMySql' (Required)
* **typeProperties**: AzureMySqlLinkedServiceTypeProperties (Required)

### AzurePostgreSql
#### Properties
* **type**: 'AzurePostgreSql' (Required)
* **typeProperties**: AzurePostgreSqlLinkedServiceTypeProperties (Required)

### AzureSearch
#### Properties
* **type**: 'AzureSearch' (Required)
* **typeProperties**: AzureSearchLinkedServiceTypeProperties (Required)

### AzureSqlDW
#### Properties
* **type**: 'AzureSqlDW' (Required)
* **typeProperties**: AzureSqlDWLinkedServiceTypeProperties (Required)

### AzureSqlDatabase
#### Properties
* **type**: 'AzureSqlDatabase' (Required)
* **typeProperties**: AzureSqlDatabaseLinkedServiceTypeProperties (Required)

### AzureSqlMI
#### Properties
* **type**: 'AzureSqlMI' (Required)
* **typeProperties**: AzureSqlMILinkedServiceTypeProperties (Required)

### AzureStorage
#### Properties
* **type**: 'AzureStorage' (Required)
* **typeProperties**: AzureStorageLinkedServiceTypeProperties (Required)

### AzureTableStorage
#### Properties
* **type**: 'AzureTableStorage' (Required)
* **typeProperties**: AzureStorageLinkedServiceTypeProperties (Required)

### Cassandra
#### Properties
* **type**: 'Cassandra' (Required)
* **typeProperties**: CassandraLinkedServiceTypeProperties (Required)

### CommonDataServiceForApps
#### Properties
* **type**: 'CommonDataServiceForApps' (Required)
* **typeProperties**: CommonDataServiceForAppsLinkedServiceTypeProperties (Required)

### Concur
#### Properties
* **type**: 'Concur' (Required)
* **typeProperties**: ConcurLinkedServiceTypeProperties (Required)

### CosmosDb
#### Properties
* **type**: 'CosmosDb' (Required)
* **typeProperties**: CosmosDbLinkedServiceTypeProperties (Required)

### CosmosDbMongoDbApi
#### Properties
* **type**: 'CosmosDbMongoDbApi' (Required)
* **typeProperties**: CosmosDbMongoDbApiLinkedServiceTypeProperties (Required)

### Couchbase
#### Properties
* **type**: 'Couchbase' (Required)
* **typeProperties**: CouchbaseLinkedServiceTypeProperties (Required)

### CustomDataSource
#### Properties
* **type**: 'CustomDataSource' (Required)
* **typeProperties**: any (Required)

### Db2
#### Properties
* **type**: 'Db2' (Required)
* **typeProperties**: Db2LinkedServiceTypeProperties (Required)

### Drill
#### Properties
* **type**: 'Drill' (Required)
* **typeProperties**: DrillLinkedServiceTypeProperties (Required)

### Dynamics
#### Properties
* **type**: 'Dynamics' (Required)
* **typeProperties**: DynamicsLinkedServiceTypeProperties (Required)

### DynamicsAX
#### Properties
* **type**: 'DynamicsAX' (Required)
* **typeProperties**: DynamicsAXLinkedServiceTypeProperties (Required)

### DynamicsCrm
#### Properties
* **type**: 'DynamicsCrm' (Required)
* **typeProperties**: DynamicsCrmLinkedServiceTypeProperties (Required)

### Eloqua
#### Properties
* **type**: 'Eloqua' (Required)
* **typeProperties**: EloquaLinkedServiceTypeProperties (Required)

### FileServer
#### Properties
* **type**: 'FileServer' (Required)
* **typeProperties**: FileServerLinkedServiceTypeProperties (Required)

### FtpServer
#### Properties
* **type**: 'FtpServer' (Required)
* **typeProperties**: FtpServerLinkedServiceTypeProperties (Required)

### GoogleAdWords
#### Properties
* **type**: 'GoogleAdWords' (Required)
* **typeProperties**: GoogleAdWordsLinkedServiceTypeProperties (Required)

### GoogleBigQuery
#### Properties
* **type**: 'GoogleBigQuery' (Required)
* **typeProperties**: GoogleBigQueryLinkedServiceTypeProperties (Required)

### GoogleCloudStorage
#### Properties
* **type**: 'GoogleCloudStorage' (Required)
* **typeProperties**: GoogleCloudStorageLinkedServiceTypeProperties (Required)

### Greenplum
#### Properties
* **type**: 'Greenplum' (Required)
* **typeProperties**: GreenplumLinkedServiceTypeProperties (Required)

### HBase
#### Properties
* **type**: 'HBase' (Required)
* **typeProperties**: HBaseLinkedServiceTypeProperties (Required)

### HDInsight
#### Properties
* **type**: 'HDInsight' (Required)
* **typeProperties**: HDInsightLinkedServiceTypeProperties (Required)

### HDInsightOnDemand
#### Properties
* **type**: 'HDInsightOnDemand' (Required)
* **typeProperties**: HDInsightOnDemandLinkedServiceTypeProperties (Required)

### Hdfs
#### Properties
* **type**: 'Hdfs' (Required)
* **typeProperties**: HdfsLinkedServiceTypeProperties (Required)

### Hive
#### Properties
* **type**: 'Hive' (Required)
* **typeProperties**: HiveLinkedServiceTypeProperties (Required)

### HttpServer
#### Properties
* **type**: 'HttpServer' (Required)
* **typeProperties**: HttpLinkedServiceTypeProperties (Required)

### Hubspot
#### Properties
* **type**: 'Hubspot' (Required)
* **typeProperties**: HubspotLinkedServiceTypeProperties (Required)

### Impala
#### Properties
* **type**: 'Impala' (Required)
* **typeProperties**: ImpalaLinkedServiceTypeProperties (Required)

### Informix
#### Properties
* **type**: 'Informix' (Required)
* **typeProperties**: InformixLinkedServiceTypeProperties (Required)

### Jira
#### Properties
* **type**: 'Jira' (Required)
* **typeProperties**: JiraLinkedServiceTypeProperties (Required)

### Magento
#### Properties
* **type**: 'Magento' (Required)
* **typeProperties**: MagentoLinkedServiceTypeProperties (Required)

### MariaDB
#### Properties
* **type**: 'MariaDB' (Required)
* **typeProperties**: MariaDBLinkedServiceTypeProperties (Required)

### Marketo
#### Properties
* **type**: 'Marketo' (Required)
* **typeProperties**: MarketoLinkedServiceTypeProperties (Required)

### MicrosoftAccess
#### Properties
* **type**: 'MicrosoftAccess' (Required)
* **typeProperties**: MicrosoftAccessLinkedServiceTypeProperties (Required)

### MongoDb
#### Properties
* **type**: 'MongoDb' (Required)
* **typeProperties**: MongoDbLinkedServiceTypeProperties (Required)

### MongoDbAtlas
#### Properties
* **type**: 'MongoDbAtlas' (Required)
* **typeProperties**: MongoDbAtlasLinkedServiceTypeProperties (Required)

### MongoDbV2
#### Properties
* **type**: 'MongoDbV2' (Required)
* **typeProperties**: MongoDbV2LinkedServiceTypeProperties (Required)

### MySql
#### Properties
* **type**: 'MySql' (Required)
* **typeProperties**: MySqlLinkedServiceTypeProperties (Required)

### Netezza
#### Properties
* **type**: 'Netezza' (Required)
* **typeProperties**: NetezzaLinkedServiceTypeProperties (Required)

### OData
#### Properties
* **type**: 'OData' (Required)
* **typeProperties**: ODataLinkedServiceTypeProperties (Required)

### Odbc
#### Properties
* **type**: 'Odbc' (Required)
* **typeProperties**: OdbcLinkedServiceTypeProperties (Required)

### Office365
#### Properties
* **type**: 'Office365' (Required)
* **typeProperties**: Office365LinkedServiceTypeProperties (Required)

### Oracle
#### Properties
* **type**: 'Oracle' (Required)
* **typeProperties**: OracleLinkedServiceTypeProperties (Required)

### OracleServiceCloud
#### Properties
* **type**: 'OracleServiceCloud' (Required)
* **typeProperties**: OracleServiceCloudLinkedServiceTypeProperties (Required)

### Paypal
#### Properties
* **type**: 'Paypal' (Required)
* **typeProperties**: PaypalLinkedServiceTypeProperties (Required)

### Phoenix
#### Properties
* **type**: 'Phoenix' (Required)
* **typeProperties**: PhoenixLinkedServiceTypeProperties (Required)

### PostgreSql
#### Properties
* **type**: 'PostgreSql' (Required)
* **typeProperties**: PostgreSqlLinkedServiceTypeProperties (Required)

### Presto
#### Properties
* **type**: 'Presto' (Required)
* **typeProperties**: PrestoLinkedServiceTypeProperties (Required)

### QuickBooks
#### Properties
* **type**: 'QuickBooks' (Required)
* **typeProperties**: QuickBooksLinkedServiceTypeProperties (Required)

### Responsys
#### Properties
* **type**: 'Responsys' (Required)
* **typeProperties**: ResponsysLinkedServiceTypeProperties (Required)

### RestService
#### Properties
* **type**: 'RestService' (Required)
* **typeProperties**: RestServiceLinkedServiceTypeProperties (Required)

### Salesforce
#### Properties
* **type**: 'Salesforce' (Required)
* **typeProperties**: SalesforceLinkedServiceTypeProperties (Required)

### SalesforceMarketingCloud
#### Properties
* **type**: 'SalesforceMarketingCloud' (Required)
* **typeProperties**: SalesforceMarketingCloudLinkedServiceTypeProperties (Required)

### SalesforceServiceCloud
#### Properties
* **type**: 'SalesforceServiceCloud' (Required)
* **typeProperties**: SalesforceServiceCloudLinkedServiceTypeProperties (Required)

### SapBW
#### Properties
* **type**: 'SapBW' (Required)
* **typeProperties**: SapBWLinkedServiceTypeProperties (Required)

### SapCloudForCustomer
#### Properties
* **type**: 'SapCloudForCustomer' (Required)
* **typeProperties**: SapCloudForCustomerLinkedServiceTypeProperties (Required)

### SapEcc
#### Properties
* **type**: 'SapEcc' (Required)
* **typeProperties**: SapEccLinkedServiceTypeProperties (Required)

### SapHana
#### Properties
* **type**: 'SapHana' (Required)
* **typeProperties**: SapHanaLinkedServiceProperties (Required)

### SapOpenHub
#### Properties
* **type**: 'SapOpenHub' (Required)
* **typeProperties**: SapOpenHubLinkedServiceTypeProperties (Required)

### SapTable
#### Properties
* **type**: 'SapTable' (Required)
* **typeProperties**: SapTableLinkedServiceTypeProperties (Required)

### ServiceNow
#### Properties
* **type**: 'ServiceNow' (Required)
* **typeProperties**: ServiceNowLinkedServiceTypeProperties (Required)

### Sftp
#### Properties
* **type**: 'Sftp' (Required)
* **typeProperties**: SftpServerLinkedServiceTypeProperties (Required)

### SharePointOnlineList
#### Properties
* **type**: 'SharePointOnlineList' (Required)
* **typeProperties**: SharePointOnlineListLinkedServiceTypeProperties (Required)

### Shopify
#### Properties
* **type**: 'Shopify' (Required)
* **typeProperties**: ShopifyLinkedServiceTypeProperties (Required)

### Snowflake
#### Properties
* **type**: 'Snowflake' (Required)
* **typeProperties**: SnowflakeLinkedServiceTypeProperties (Required)

### Spark
#### Properties
* **type**: 'Spark' (Required)
* **typeProperties**: SparkLinkedServiceTypeProperties (Required)

### SqlServer
#### Properties
* **type**: 'SqlServer' (Required)
* **typeProperties**: SqlServerLinkedServiceTypeProperties (Required)

### Square
#### Properties
* **type**: 'Square' (Required)
* **typeProperties**: SquareLinkedServiceTypeProperties (Required)

### Sybase
#### Properties
* **type**: 'Sybase' (Required)
* **typeProperties**: SybaseLinkedServiceTypeProperties (Required)

### Teradata
#### Properties
* **type**: 'Teradata' (Required)
* **typeProperties**: TeradataLinkedServiceTypeProperties (Required)

### Vertica
#### Properties
* **type**: 'Vertica' (Required)
* **typeProperties**: VerticaLinkedServiceTypeProperties (Required)

### Web
#### Properties
* **type**: 'Web' (Required)
* **typeProperties**: WebLinkedServiceTypeProperties (Required)

### Xero
#### Properties
* **type**: 'Xero' (Required)
* **typeProperties**: XeroLinkedServiceTypeProperties (Required)

### Zoho
#### Properties
* **type**: 'Zoho' (Required)
* **typeProperties**: ZohoLinkedServiceTypeProperties (Required)


## IntegrationRuntimeReference
### Properties
* **parameters**: Dictionary<string,Object>
* **referenceName**: string (Required)
* **type**: string (Required)

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,ParameterSpecification>
### Additional Properties
* **Additional Properties Type**: ParameterSpecification

## AmazonMWS
### Properties
* **type**: 'AmazonMWS' (Required)
* **typeProperties**: AmazonMWSLinkedServiceTypeProperties (Required)

## AmazonMWSLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any (Required)
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **marketplaceID**: any (Required)
* **mwsAuthToken**: SecretBase
* **secretKey**: SecretBase
* **sellerID**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## AmazonRedshift
### Properties
* **type**: 'AmazonRedshift' (Required)
* **typeProperties**: AmazonRedshiftLinkedServiceTypeProperties (Required)

## AmazonRedshiftLinkedServiceTypeProperties
### Properties
* **database**: any (Required)
* **encryptedCredential**: any
* **password**: SecretBase
* **port**: any
* **server**: any (Required)
* **username**: any

## AmazonS3
### Properties
* **type**: 'AmazonS3' (Required)
* **typeProperties**: AmazonS3LinkedServiceTypeProperties (Required)

## AmazonS3LinkedServiceTypeProperties
### Properties
* **accessKeyId**: any
* **encryptedCredential**: any
* **secretAccessKey**: SecretBase
* **serviceUrl**: any

## AzureBatch
### Properties
* **type**: 'AzureBatch' (Required)
* **typeProperties**: AzureBatchLinkedServiceTypeProperties (Required)

## AzureBatchLinkedServiceTypeProperties
### Properties
* **accessKey**: SecretBase
* **accountName**: any (Required)
* **batchUri**: any (Required)
* **encryptedCredential**: any
* **linkedServiceName**: LinkedServiceReference (Required)
* **poolName**: any (Required)

## AzureBlobFS
### Properties
* **type**: 'AzureBlobFS' (Required)
* **typeProperties**: AzureBlobFSLinkedServiceTypeProperties (Required)

## AzureBlobFSLinkedServiceTypeProperties
### Properties
* **accountKey**: any
* **azureCloudType**: any
* **encryptedCredential**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any
* **url**: any (Required)

## AzureBlobStorage
### Properties
* **type**: 'AzureBlobStorage' (Required)
* **typeProperties**: AzureBlobStorageLinkedServiceTypeProperties (Required)

## AzureBlobStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: AzureKeyVaultSecret
* **azureCloudType**: any
* **connectionString**: any
* **encryptedCredential**: string
* **sasToken**: AzureKeyVaultSecret
* **sasUri**: any
* **serviceEndpoint**: string
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any

## AzureDataExplorer
### Properties
* **type**: 'AzureDataExplorer' (Required)
* **typeProperties**: AzureDataExplorerLinkedServiceTypeProperties (Required)

## AzureDataExplorerLinkedServiceTypeProperties
### Properties
* **database**: any (Required)
* **endpoint**: any (Required)
* **servicePrincipalId**: any (Required)
* **servicePrincipalKey**: SecretBase (Required)
* **tenant**: any (Required)

## AzureDataLakeAnalytics
### Properties
* **type**: 'AzureDataLakeAnalytics' (Required)
* **typeProperties**: AzureDataLakeAnalyticsLinkedServiceTypeProperties (Required)

## AzureDataLakeAnalyticsLinkedServiceTypeProperties
### Properties
* **accountName**: any (Required)
* **dataLakeAnalyticsUri**: any
* **encryptedCredential**: any
* **resourceGroupName**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **subscriptionId**: any
* **tenant**: any (Required)

## AzureDataLakeStore
### Properties
* **type**: 'AzureDataLakeStore' (Required)
* **typeProperties**: AzureDataLakeStoreLinkedServiceTypeProperties (Required)

## AzureDataLakeStoreLinkedServiceTypeProperties
### Properties
* **accountName**: any
* **azureCloudType**: any
* **dataLakeStoreUri**: any (Required)
* **encryptedCredential**: any
* **resourceGroupName**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **subscriptionId**: any
* **tenant**: any

## AzureDatabricks
### Properties
* **type**: 'AzureDatabricks' (Required)
* **typeProperties**: AzureDatabricksLinkedServiceTypeProperties (Required)

## AzureDatabricksLinkedServiceTypeProperties
### Properties
* **accessToken**: SecretBase (Required)
* **domain**: any (Required)
* **encryptedCredential**: any
* **existingClusterId**: any
* **instancePoolId**: any
* **newClusterCustomTags**: Dictionary<string,Object>
* **newClusterDriverNodeType**: any
* **newClusterEnableElasticDisk**: any
* **newClusterInitScripts**: any
* **newClusterLogDestination**: any
* **newClusterNodeType**: any
* **newClusterNumOfWorker**: any
* **newClusterSparkConf**: Dictionary<string,Object>
* **newClusterSparkEnvVars**: Dictionary<string,Object>
* **newClusterVersion**: any

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## AzureDatabricksDeltaLake
### Properties
* **type**: 'AzureDatabricksDeltaLake' (Required)
* **typeProperties**: AzureDatabricksDetltaLakeLinkedServiceTypeProperties (Required)

## AzureDatabricksDetltaLakeLinkedServiceTypeProperties
### Properties
* **accessToken**: SecretBase
* **clusterId**: any
* **domain**: any (Required)
* **encryptedCredential**: any

## AzureFileStorage
### Properties
* **type**: 'AzureFileStorage' (Required)
* **typeProperties**: AzureFileStorageLinkedServiceTypeProperties (Required)

## AzureFileStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: AzureKeyVaultSecret
* **connectionString**: any
* **encryptedCredential**: any
* **fileShare**: any
* **host**: any
* **password**: SecretBase
* **sasToken**: AzureKeyVaultSecret
* **sasUri**: any
* **snapshot**: any
* **userId**: any

## AzureFunction
### Properties
* **type**: 'AzureFunction' (Required)
* **typeProperties**: AzureFunctionLinkedServiceTypeProperties (Required)

## AzureFunctionLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **functionAppUrl**: any (Required)
* **functionKey**: SecretBase

## AzureKeyVault
### Properties
* **type**: 'AzureKeyVault' (Required)
* **typeProperties**: AzureKeyVaultLinkedServiceTypeProperties (Required)

## AzureKeyVaultLinkedServiceTypeProperties
### Properties
* **baseUrl**: any (Required)

## AzureML
### Properties
* **type**: 'AzureML' (Required)
* **typeProperties**: AzureMLLinkedServiceTypeProperties (Required)

## AzureMLLinkedServiceTypeProperties
### Properties
* **apiKey**: SecretBase (Required)
* **encryptedCredential**: any
* **mlEndpoint**: any (Required)
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any
* **updateResourceEndpoint**: any

## AzureMLService
### Properties
* **type**: 'AzureMLService' (Required)
* **typeProperties**: AzureMLServiceLinkedServiceTypeProperties (Required)

## AzureMLServiceLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **mlWorkspaceName**: any (Required)
* **resourceGroupName**: any (Required)
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **subscriptionId**: any (Required)
* **tenant**: any

## AzureMariaDB
### Properties
* **type**: 'AzureMariaDB' (Required)
* **typeProperties**: AzureMariaDBLinkedServiceTypeProperties (Required)

## AzureMariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: AzureKeyVaultSecret

## AzureMySql
### Properties
* **type**: 'AzureMySql' (Required)
* **typeProperties**: AzureMySqlLinkedServiceTypeProperties (Required)

## AzureMySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: AzureKeyVaultSecret

## AzurePostgreSql
### Properties
* **type**: 'AzurePostgreSql' (Required)
* **typeProperties**: AzurePostgreSqlLinkedServiceTypeProperties (Required)

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **password**: AzureKeyVaultSecret

## AzureSearch
### Properties
* **type**: 'AzureSearch' (Required)
* **typeProperties**: AzureSearchLinkedServiceTypeProperties (Required)

## AzureSearchLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **key**: SecretBase
* **url**: any (Required)

## AzureSqlDW
### Properties
* **type**: 'AzureSqlDW' (Required)
* **typeProperties**: AzureSqlDWLinkedServiceTypeProperties (Required)

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **azureCloudType**: any
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: AzureKeyVaultSecret
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any

## AzureSqlDatabase
### Properties
* **type**: 'AzureSqlDatabase' (Required)
* **typeProperties**: AzureSqlDatabaseLinkedServiceTypeProperties (Required)

## AzureSqlDatabaseLinkedServiceTypeProperties
### Properties
* **azureCloudType**: any
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: AzureKeyVaultSecret
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any

## AzureSqlMI
### Properties
* **type**: 'AzureSqlMI' (Required)
* **typeProperties**: AzureSqlMILinkedServiceTypeProperties (Required)

## AzureSqlMILinkedServiceTypeProperties
### Properties
* **azureCloudType**: any
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: AzureKeyVaultSecret
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any

## AzureStorage
### Properties
* **type**: 'AzureStorage' (Required)
* **typeProperties**: AzureStorageLinkedServiceTypeProperties (Required)

## AzureStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: AzureKeyVaultSecret
* **connectionString**: any
* **encryptedCredential**: string
* **sasToken**: AzureKeyVaultSecret
* **sasUri**: any

## AzureTableStorage
### Properties
* **type**: 'AzureTableStorage' (Required)
* **typeProperties**: AzureStorageLinkedServiceTypeProperties (Required)

## Cassandra
### Properties
* **type**: 'Cassandra' (Required)
* **typeProperties**: CassandraLinkedServiceTypeProperties (Required)

## CassandraLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: SecretBase
* **port**: any
* **username**: any

## CommonDataServiceForApps
### Properties
* **type**: 'CommonDataServiceForApps' (Required)
* **typeProperties**: CommonDataServiceForAppsLinkedServiceTypeProperties (Required)

## CommonDataServiceForAppsLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'AADServicePrincipal' | 'Ifd' | 'Office365' (Required)
* **deploymentType**: 'OnPremisesWithIfd' | 'Online' (Required)
* **encryptedCredential**: any
* **hostName**: any
* **organizationName**: any
* **password**: SecretBase
* **port**: any
* **servicePrincipalCredential**: SecretBase
* **servicePrincipalCredentialType**: any
* **servicePrincipalId**: any
* **serviceUri**: any
* **username**: any

## Concur
### Properties
* **type**: 'Concur' (Required)
* **typeProperties**: ConcurLinkedServiceTypeProperties (Required)

## ConcurLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **encryptedCredential**: any
* **password**: SecretBase
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any (Required)

## CosmosDb
### Properties
* **type**: 'CosmosDb' (Required)
* **typeProperties**: CosmosDbLinkedServiceTypeProperties (Required)

## CosmosDbLinkedServiceTypeProperties
### Properties
* **accountEndpoint**: any
* **accountKey**: SecretBase
* **connectionString**: any
* **database**: any
* **encryptedCredential**: any

## CosmosDbMongoDbApi
### Properties
* **type**: 'CosmosDbMongoDbApi' (Required)
* **typeProperties**: CosmosDbMongoDbApiLinkedServiceTypeProperties (Required)

## CosmosDbMongoDbApiLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **database**: any (Required)

## Couchbase
### Properties
* **type**: 'Couchbase' (Required)
* **typeProperties**: CouchbaseLinkedServiceTypeProperties (Required)

## CouchbaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **credString**: AzureKeyVaultSecret
* **encryptedCredential**: any

## CustomDataSource
### Properties
* **type**: 'CustomDataSource' (Required)
* **typeProperties**: any (Required)

## Db2
### Properties
* **type**: 'Db2' (Required)
* **typeProperties**: Db2LinkedServiceTypeProperties (Required)

## Db2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic'
* **certificateCommonName**: any
* **connectionString**: any
* **database**: any
* **encryptedCredential**: any
* **packageCollection**: any
* **password**: SecretBase
* **server**: any
* **username**: any

## Drill
### Properties
* **type**: 'Drill' (Required)
* **typeProperties**: DrillLinkedServiceTypeProperties (Required)

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: AzureKeyVaultSecret

## Dynamics
### Properties
* **type**: 'Dynamics' (Required)
* **typeProperties**: DynamicsLinkedServiceTypeProperties (Required)

## DynamicsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required)
* **deploymentType**: any (Required)
* **encryptedCredential**: any
* **hostName**: any
* **organizationName**: any
* **password**: SecretBase
* **port**: any
* **servicePrincipalCredential**: SecretBase
* **servicePrincipalCredentialType**: any
* **servicePrincipalId**: any
* **serviceUri**: any
* **username**: any

## DynamicsAX
### Properties
* **type**: 'DynamicsAX' (Required)
* **typeProperties**: DynamicsAXLinkedServiceTypeProperties (Required)

## DynamicsAXLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any (Required)
* **encryptedCredential**: any
* **servicePrincipalId**: any (Required)
* **servicePrincipalKey**: SecretBase (Required)
* **tenant**: any (Required)
* **url**: any (Required)

## DynamicsCrm
### Properties
* **type**: 'DynamicsCrm' (Required)
* **typeProperties**: DynamicsCrmLinkedServiceTypeProperties (Required)

## DynamicsCrmLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'AADServicePrincipal' | 'Ifd' | 'Office365' (Required)
* **deploymentType**: 'OnPremisesWithIfd' | 'Online' (Required)
* **encryptedCredential**: any
* **hostName**: any
* **organizationName**: any
* **password**: SecretBase
* **port**: any
* **servicePrincipalCredential**: SecretBase
* **servicePrincipalCredentialType**: any
* **servicePrincipalId**: any
* **serviceUri**: any
* **username**: any

## Eloqua
### Properties
* **type**: 'Eloqua' (Required)
* **typeProperties**: EloquaLinkedServiceTypeProperties (Required)

## EloquaLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **password**: SecretBase
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any (Required)

## FileServer
### Properties
* **type**: 'FileServer' (Required)
* **typeProperties**: FileServerLinkedServiceTypeProperties (Required)

## FileServerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: SecretBase
* **userId**: any

## FtpServer
### Properties
* **type**: 'FtpServer' (Required)
* **typeProperties**: FtpServerLinkedServiceTypeProperties (Required)

## FtpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic'
* **enableServerCertificateValidation**: any
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: SecretBase
* **port**: any
* **userName**: any

## GoogleAdWords
### Properties
* **type**: 'GoogleAdWords' (Required)
* **typeProperties**: GoogleAdWordsLinkedServiceTypeProperties (Required)

## GoogleAdWordsLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required)
* **clientCustomerID**: any (Required)
* **clientId**: any
* **clientSecret**: SecretBase
* **developerToken**: SecretBase (Required)
* **email**: any
* **encryptedCredential**: any
* **keyFilePath**: any
* **refreshToken**: SecretBase
* **trustedCertPath**: any
* **useSystemTrustStore**: any

## GoogleBigQuery
### Properties
* **type**: 'GoogleBigQuery' (Required)
* **typeProperties**: GoogleBigQueryLinkedServiceTypeProperties (Required)

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required)
* **clientId**: any
* **clientSecret**: SecretBase
* **email**: any
* **encryptedCredential**: any
* **keyFilePath**: any
* **project**: any (Required)
* **refreshToken**: SecretBase
* **requestGoogleDriveScope**: any
* **trustedCertPath**: any
* **useSystemTrustStore**: any

## GoogleCloudStorage
### Properties
* **type**: 'GoogleCloudStorage' (Required)
* **typeProperties**: GoogleCloudStorageLinkedServiceTypeProperties (Required)

## GoogleCloudStorageLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any
* **encryptedCredential**: any
* **secretAccessKey**: SecretBase
* **serviceUrl**: any

## Greenplum
### Properties
* **type**: 'Greenplum' (Required)
* **typeProperties**: GreenplumLinkedServiceTypeProperties (Required)

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: AzureKeyVaultSecret

## HBase
### Properties
* **type**: 'HBase' (Required)
* **typeProperties**: HBaseLinkedServiceTypeProperties (Required)

## HBaseLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'Basic' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **httpPath**: any
* **password**: SecretBase
* **port**: any
* **trustedCertPath**: any
* **username**: any

## HDInsight
### Properties
* **type**: 'HDInsight' (Required)
* **typeProperties**: HDInsightLinkedServiceTypeProperties (Required)

## HDInsightLinkedServiceTypeProperties
### Properties
* **clusterUri**: any (Required)
* **encryptedCredential**: any
* **fileSystem**: any
* **hcatalogLinkedServiceName**: LinkedServiceReference
* **isEspEnabled**: any
* **linkedServiceName**: LinkedServiceReference
* **password**: SecretBase
* **userName**: any

## HDInsightOnDemand
### Properties
* **type**: 'HDInsightOnDemand' (Required)
* **typeProperties**: HDInsightOnDemandLinkedServiceTypeProperties (Required)

## HDInsightOnDemandLinkedServiceTypeProperties
### Properties
* **additionalLinkedServiceNames**: LinkedServiceReference[]
* **clusterNamePrefix**: any
* **clusterPassword**: SecretBase
* **clusterResourceGroup**: any (Required)
* **clusterSize**: any (Required)
* **clusterSshPassword**: SecretBase
* **clusterSshUserName**: any
* **clusterType**: any
* **clusterUserName**: any
* **coreConfiguration**: any
* **dataNodeSize**: any
* **encryptedCredential**: any
* **hBaseConfiguration**: any
* **hcatalogLinkedServiceName**: LinkedServiceReference
* **hdfsConfiguration**: any
* **headNodeSize**: any
* **hiveConfiguration**: any
* **hostSubscriptionId**: any (Required)
* **linkedServiceName**: LinkedServiceReference (Required)
* **mapReduceConfiguration**: any
* **oozieConfiguration**: any
* **scriptActions**: ScriptAction[]
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **sparkVersion**: any
* **stormConfiguration**: any
* **subnetName**: any
* **tenant**: any (Required)
* **timeToLive**: any (Required)
* **version**: any (Required)
* **virtualNetworkId**: any
* **yarnConfiguration**: any
* **zookeeperNodeSize**: any

## ScriptAction
### Properties
* **name**: string (Required)
* **parameters**: string
* **roles**: any (Required)
* **uri**: string (Required)

## Hdfs
### Properties
* **type**: 'Hdfs' (Required)
* **typeProperties**: HdfsLinkedServiceTypeProperties (Required)

## HdfsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **encryptedCredential**: any
* **password**: SecretBase
* **url**: any (Required)
* **userName**: any

## Hive
### Properties
* **type**: 'Hive' (Required)
* **typeProperties**: HiveLinkedServiceTypeProperties (Required)

## HiveLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **httpPath**: any
* **password**: SecretBase
* **port**: any
* **serverType**: 'HiveServer1' | 'HiveServer2' | 'HiveThriftServer'
* **serviceDiscoveryMode**: any
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL'
* **trustedCertPath**: any
* **useNativeQuery**: any
* **useSystemTrustStore**: any
* **username**: any
* **zooKeeperNameSpace**: any

## HttpServer
### Properties
* **type**: 'HttpServer' (Required)
* **typeProperties**: HttpLinkedServiceTypeProperties (Required)

## HttpLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | 'ClientCertificate' | 'Digest' | 'Windows'
* **certThumbprint**: any
* **embeddedCertData**: any
* **enableServerCertificateValidation**: any
* **encryptedCredential**: any
* **password**: SecretBase
* **url**: any (Required)
* **userName**: any

## Hubspot
### Properties
* **type**: 'Hubspot' (Required)
* **typeProperties**: HubspotLinkedServiceTypeProperties (Required)

## HubspotLinkedServiceTypeProperties
### Properties
* **accessToken**: SecretBase
* **clientId**: any (Required)
* **clientSecret**: SecretBase
* **encryptedCredential**: any
* **refreshToken**: SecretBase
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Impala
### Properties
* **type**: 'Impala' (Required)
* **typeProperties**: ImpalaLinkedServiceTypeProperties (Required)

## ImpalaLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'SASLUsername' | 'UsernameAndPassword' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: SecretBase
* **port**: any
* **trustedCertPath**: any
* **useSystemTrustStore**: any
* **username**: any

## Informix
### Properties
* **type**: 'Informix' (Required)
* **typeProperties**: InformixLinkedServiceTypeProperties (Required)

## InformixLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **connectionString**: any (Required)
* **credential**: SecretBase
* **encryptedCredential**: any
* **password**: SecretBase
* **userName**: any

## Jira
### Properties
* **type**: 'Jira' (Required)
* **typeProperties**: JiraLinkedServiceTypeProperties (Required)

## JiraLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: SecretBase
* **port**: any
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any (Required)

## Magento
### Properties
* **type**: 'Magento' (Required)
* **typeProperties**: MagentoLinkedServiceTypeProperties (Required)

## MagentoLinkedServiceTypeProperties
### Properties
* **accessToken**: SecretBase
* **encryptedCredential**: any
* **host**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## MariaDB
### Properties
* **type**: 'MariaDB' (Required)
* **typeProperties**: MariaDBLinkedServiceTypeProperties (Required)

## MariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: AzureKeyVaultSecret

## Marketo
### Properties
* **type**: 'Marketo' (Required)
* **typeProperties**: MarketoLinkedServiceTypeProperties (Required)

## MarketoLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **clientSecret**: SecretBase
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## MicrosoftAccess
### Properties
* **type**: 'MicrosoftAccess' (Required)
* **typeProperties**: MicrosoftAccessLinkedServiceTypeProperties (Required)

## MicrosoftAccessLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **connectionString**: any (Required)
* **credential**: SecretBase
* **encryptedCredential**: any
* **password**: SecretBase
* **userName**: any

## MongoDb
### Properties
* **type**: 'MongoDb' (Required)
* **typeProperties**: MongoDbLinkedServiceTypeProperties (Required)

## MongoDbLinkedServiceTypeProperties
### Properties
* **allowSelfSignedServerCert**: any
* **authSource**: any
* **authenticationType**: 'Anonymous' | 'Basic'
* **databaseName**: any (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **password**: SecretBase
* **port**: any
* **server**: any (Required)
* **username**: any

## MongoDbAtlas
### Properties
* **type**: 'MongoDbAtlas' (Required)
* **typeProperties**: MongoDbAtlasLinkedServiceTypeProperties (Required)

## MongoDbAtlasLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **database**: any (Required)

## MongoDbV2
### Properties
* **type**: 'MongoDbV2' (Required)
* **typeProperties**: MongoDbV2LinkedServiceTypeProperties (Required)

## MongoDbV2LinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **database**: any (Required)

## MySql
### Properties
* **type**: 'MySql' (Required)
* **typeProperties**: MySqlLinkedServiceTypeProperties (Required)

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: AzureKeyVaultSecret

## Netezza
### Properties
* **type**: 'Netezza' (Required)
* **typeProperties**: NetezzaLinkedServiceTypeProperties (Required)

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: AzureKeyVaultSecret

## OData
### Properties
* **type**: 'OData' (Required)
* **typeProperties**: ODataLinkedServiceTypeProperties (Required)

## ODataLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any
* **aadServicePrincipalCredentialType**: 'ServicePrincipalCert' | 'ServicePrincipalKey'
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' | 'Windows'
* **azureCloudType**: any
* **encryptedCredential**: any
* **password**: SecretBase
* **servicePrincipalEmbeddedCert**: SecretBase
* **servicePrincipalEmbeddedCertPassword**: SecretBase
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any
* **url**: any (Required)
* **userName**: any

## Odbc
### Properties
* **type**: 'Odbc' (Required)
* **typeProperties**: OdbcLinkedServiceTypeProperties (Required)

## OdbcLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **connectionString**: any (Required)
* **credential**: SecretBase
* **encryptedCredential**: any
* **password**: SecretBase
* **userName**: any

## Office365
### Properties
* **type**: 'Office365' (Required)
* **typeProperties**: Office365LinkedServiceTypeProperties (Required)

## Office365LinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **office365TenantId**: any (Required)
* **servicePrincipalId**: any (Required)
* **servicePrincipalKey**: SecretBase (Required)
* **servicePrincipalTenantId**: any (Required)

## Oracle
### Properties
* **type**: 'Oracle' (Required)
* **typeProperties**: OracleLinkedServiceTypeProperties (Required)

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: AzureKeyVaultSecret

## OracleServiceCloud
### Properties
* **type**: 'OracleServiceCloud' (Required)
* **typeProperties**: OracleServiceCloudLinkedServiceTypeProperties (Required)

## OracleServiceCloudLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: SecretBase (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any (Required)

## Paypal
### Properties
* **type**: 'Paypal' (Required)
* **typeProperties**: PaypalLinkedServiceTypeProperties (Required)

## PaypalLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **clientSecret**: SecretBase
* **encryptedCredential**: any
* **host**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Phoenix
### Properties
* **type**: 'Phoenix' (Required)
* **typeProperties**: PhoenixLinkedServiceTypeProperties (Required)

## PhoenixLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **httpPath**: any
* **password**: SecretBase
* **port**: any
* **trustedCertPath**: any
* **useSystemTrustStore**: any
* **username**: any

## PostgreSql
### Properties
* **type**: 'PostgreSql' (Required)
* **typeProperties**: PostgreSqlLinkedServiceTypeProperties (Required)

## PostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: AzureKeyVaultSecret

## Presto
### Properties
* **type**: 'Presto' (Required)
* **typeProperties**: PrestoLinkedServiceTypeProperties (Required)

## PrestoLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'LDAP' (Required)
* **catalog**: any (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: SecretBase
* **port**: any
* **serverVersion**: any (Required)
* **timeZoneID**: any
* **trustedCertPath**: any
* **useSystemTrustStore**: any
* **username**: any

## QuickBooks
### Properties
* **type**: 'QuickBooks' (Required)
* **typeProperties**: QuickBooksLinkedServiceTypeProperties (Required)

## QuickBooksLinkedServiceTypeProperties
### Properties
* **accessToken**: SecretBase
* **accessTokenSecret**: SecretBase
* **companyId**: any
* **connectionProperties**: any
* **consumerKey**: any
* **consumerSecret**: SecretBase
* **encryptedCredential**: any
* **endpoint**: any
* **useEncryptedEndpoints**: any

## Responsys
### Properties
* **type**: 'Responsys' (Required)
* **typeProperties**: ResponsysLinkedServiceTypeProperties (Required)

## ResponsysLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **clientSecret**: SecretBase
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## RestService
### Properties
* **type**: 'RestService' (Required)
* **typeProperties**: RestServiceLinkedServiceTypeProperties (Required)

## RestServiceLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' (Required)
* **azureCloudType**: any
* **enableServerCertificateValidation**: any
* **encryptedCredential**: any
* **password**: SecretBase
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any
* **url**: any (Required)
* **userName**: any

## Salesforce
### Properties
* **type**: 'Salesforce' (Required)
* **typeProperties**: SalesforceLinkedServiceTypeProperties (Required)

## SalesforceLinkedServiceTypeProperties
### Properties
* **apiVersion**: any
* **encryptedCredential**: any
* **environmentUrl**: any
* **password**: SecretBase
* **securityToken**: SecretBase
* **username**: any

## SalesforceMarketingCloud
### Properties
* **type**: 'SalesforceMarketingCloud' (Required)
* **typeProperties**: SalesforceMarketingCloudLinkedServiceTypeProperties (Required)

## SalesforceMarketingCloudLinkedServiceTypeProperties
### Properties
* **clientId**: any
* **clientSecret**: SecretBase
* **connectionProperties**: any
* **encryptedCredential**: any
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## SalesforceServiceCloud
### Properties
* **type**: 'SalesforceServiceCloud' (Required)
* **typeProperties**: SalesforceServiceCloudLinkedServiceTypeProperties (Required)

## SalesforceServiceCloudLinkedServiceTypeProperties
### Properties
* **apiVersion**: any
* **encryptedCredential**: any
* **environmentUrl**: any
* **extendedProperties**: any
* **password**: SecretBase
* **securityToken**: SecretBase
* **username**: any

## SapBW
### Properties
* **type**: 'SapBW' (Required)
* **typeProperties**: SapBWLinkedServiceTypeProperties (Required)

## SapBWLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **encryptedCredential**: any
* **password**: SecretBase
* **server**: any (Required)
* **systemNumber**: any (Required)
* **userName**: any

## SapCloudForCustomer
### Properties
* **type**: 'SapCloudForCustomer' (Required)
* **typeProperties**: SapCloudForCustomerLinkedServiceTypeProperties (Required)

## SapCloudForCustomerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **password**: SecretBase
* **url**: any (Required)
* **username**: any

## SapEcc
### Properties
* **type**: 'SapEcc' (Required)
* **typeProperties**: SapEccLinkedServiceTypeProperties (Required)

## SapEccLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string
* **password**: SecretBase
* **url**: string (Required)
* **username**: string

## SapHana
### Properties
* **type**: 'SapHana' (Required)
* **typeProperties**: SapHanaLinkedServiceProperties (Required)

## SapHanaLinkedServiceProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows'
* **connectionString**: any
* **encryptedCredential**: any
* **password**: SecretBase
* **server**: any
* **userName**: any

## SapOpenHub
### Properties
* **type**: 'SapOpenHub' (Required)
* **typeProperties**: SapOpenHubLinkedServiceTypeProperties (Required)

## SapOpenHubLinkedServiceTypeProperties
### Properties
* **clientId**: any
* **encryptedCredential**: any
* **language**: any
* **logonGroup**: any
* **messageServer**: any
* **messageServerService**: any
* **password**: SecretBase
* **server**: any
* **systemId**: any
* **systemNumber**: any
* **userName**: any

## SapTable
### Properties
* **type**: 'SapTable' (Required)
* **typeProperties**: SapTableLinkedServiceTypeProperties (Required)

## SapTableLinkedServiceTypeProperties
### Properties
* **clientId**: any
* **encryptedCredential**: any
* **language**: any
* **logonGroup**: any
* **messageServer**: any
* **messageServerService**: any
* **password**: SecretBase
* **server**: any
* **sncLibraryPath**: any
* **sncMode**: any
* **sncMyName**: any
* **sncPartnerName**: any
* **sncQop**: any
* **systemId**: any
* **systemNumber**: any
* **userName**: any

## ServiceNow
### Properties
* **type**: 'ServiceNow' (Required)
* **typeProperties**: ServiceNowLinkedServiceTypeProperties (Required)

## ServiceNowLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'OAuth2' (Required)
* **clientId**: any
* **clientSecret**: SecretBase
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **password**: SecretBase
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any

## Sftp
### Properties
* **type**: 'Sftp' (Required)
* **typeProperties**: SftpServerLinkedServiceTypeProperties (Required)

## SftpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'SshPublicKey'
* **encryptedCredential**: any
* **host**: any (Required)
* **hostKeyFingerprint**: any
* **passPhrase**: SecretBase
* **password**: SecretBase
* **port**: any
* **privateKeyContent**: SecretBase
* **privateKeyPath**: any
* **skipHostKeyValidation**: any
* **userName**: any

## SharePointOnlineList
### Properties
* **type**: 'SharePointOnlineList' (Required)
* **typeProperties**: SharePointOnlineListLinkedServiceTypeProperties (Required)

## SharePointOnlineListLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **servicePrincipalId**: any (Required)
* **servicePrincipalKey**: SecretBase (Required)
* **siteUrl**: any (Required)
* **tenantId**: any (Required)

## Shopify
### Properties
* **type**: 'Shopify' (Required)
* **typeProperties**: ShopifyLinkedServiceTypeProperties (Required)

## ShopifyLinkedServiceTypeProperties
### Properties
* **accessToken**: SecretBase
* **encryptedCredential**: any
* **host**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Snowflake
### Properties
* **type**: 'Snowflake' (Required)
* **typeProperties**: SnowflakeLinkedServiceTypeProperties (Required)

## SnowflakeLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: AzureKeyVaultSecret

## Spark
### Properties
* **type**: 'Spark' (Required)
* **typeProperties**: SparkLinkedServiceTypeProperties (Required)

## SparkLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **httpPath**: any
* **password**: SecretBase
* **port**: any (Required)
* **serverType**: 'SharkServer' | 'SharkServer2' | 'SparkThriftServer'
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL'
* **trustedCertPath**: any
* **useSystemTrustStore**: any
* **username**: any

## SqlServer
### Properties
* **type**: 'SqlServer' (Required)
* **typeProperties**: SqlServerLinkedServiceTypeProperties (Required)

## SqlServerLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: SecretBase
* **userName**: any

## Square
### Properties
* **type**: 'Square' (Required)
* **typeProperties**: SquareLinkedServiceTypeProperties (Required)

## SquareLinkedServiceTypeProperties
### Properties
* **clientId**: any
* **clientSecret**: SecretBase
* **connectionProperties**: any
* **encryptedCredential**: any
* **host**: any
* **redirectUri**: any
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Sybase
### Properties
* **type**: 'Sybase' (Required)
* **typeProperties**: SybaseLinkedServiceTypeProperties (Required)

## SybaseLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows'
* **database**: any (Required)
* **encryptedCredential**: any
* **password**: SecretBase
* **schema**: any
* **server**: any (Required)
* **username**: any

## Teradata
### Properties
* **type**: 'Teradata' (Required)
* **typeProperties**: TeradataLinkedServiceTypeProperties (Required)

## TeradataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows'
* **connectionString**: any
* **encryptedCredential**: any
* **password**: SecretBase
* **server**: any
* **username**: any

## Vertica
### Properties
* **type**: 'Vertica' (Required)
* **typeProperties**: VerticaLinkedServiceTypeProperties (Required)

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: AzureKeyVaultSecret

## Web
### Properties
* **type**: 'Web' (Required)
* **typeProperties**: WebLinkedServiceTypeProperties (Required)

## WebLinkedServiceTypeProperties
* **Discriminator**: authenticationType
### Base Properties
* **url**: any (Required)
### Anonymous
#### Properties
* **authenticationType**: 'Anonymous' (Required)

### Basic
#### Properties
* **authenticationType**: 'Basic' (Required)
* **password**: SecretBase (Required)
* **username**: any (Required)

### ClientCertificate
#### Properties
* **authenticationType**: 'ClientCertificate' (Required)
* **password**: SecretBase (Required)
* **pfx**: SecretBase (Required)


## Anonymous
### Properties
* **authenticationType**: 'Anonymous' (Required)

## Basic
### Properties
* **authenticationType**: 'Basic' (Required)
* **password**: SecretBase (Required)
* **username**: any (Required)

## ClientCertificate
### Properties
* **authenticationType**: 'ClientCertificate' (Required)
* **password**: SecretBase (Required)
* **pfx**: SecretBase (Required)

## Xero
### Properties
* **type**: 'Xero' (Required)
* **typeProperties**: XeroLinkedServiceTypeProperties (Required)

## XeroLinkedServiceTypeProperties
### Properties
* **connectionProperties**: any
* **consumerKey**: SecretBase
* **encryptedCredential**: any
* **host**: any
* **privateKey**: SecretBase
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Zoho
### Properties
* **type**: 'Zoho' (Required)
* **typeProperties**: ZohoLinkedServiceTypeProperties (Required)

## ZohoLinkedServiceTypeProperties
### Properties
* **accessToken**: SecretBase
* **connectionProperties**: any
* **encryptedCredential**: any
* **endpoint**: any
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedPrivateEndpoint (Required)
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints' (ReadOnly, DeployTimeConstant)

## ManagedPrivateEndpoint
### Properties
* **connectionState**: ConnectionStateProperties
* **fqdns**: string[]
* **groupId**: string
* **isReserved**: bool (ReadOnly)
* **privateLinkResourceId**: string
* **provisioningState**: string (ReadOnly)

## ConnectionStateProperties
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: string (ReadOnly)

## Microsoft.DataFactory/factories/managedVirtualNetworks
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedVirtualNetwork (Required)
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks' (ReadOnly, DeployTimeConstant)

## ManagedVirtualNetwork
### Properties
* **alias**: string (ReadOnly)
* **vNetId**: string (ReadOnly)

## Microsoft.DataFactory/factories/pipelines
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Pipeline (Required)
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant)

## Pipeline
### Properties
* **activities**: Activity[]
* **annotations**: any[]
* **concurrency**: int
* **description**: string
* **folder**: schemas:557_folder
* **parameters**: Dictionary<string,ParameterSpecification>
* **runDimensions**: Dictionary<string,Object>
* **variables**: Dictionary<string,VariableSpecification>

## Activity
* **Discriminator**: type
### Base Properties
* **dependsOn**: ActivityDependency[]
* **description**: string
* **name**: string (Required)
* **userProperties**: UserProperty[]
### Container
#### Properties
* **type**: 'Container' (Required)

### Execution
#### Properties
* **linkedServiceName**: LinkedServiceReference
* **policy**: ActivityPolicy
* **type**: 'Execution' (Required)


## ActivityDependency
### Properties
* **activity**: string (Required)
* **dependencyConditions**: 'Completed' | 'Failed' | 'Skipped' | 'Succeeded'[] (Required)

## UserProperty
### Properties
* **name**: string (Required)
* **value**: any (Required)

## Container
### Properties
* **type**: 'Container' (Required)

## Execution
### Properties
* **linkedServiceName**: LinkedServiceReference
* **policy**: ActivityPolicy
* **type**: 'Execution' (Required)

## ActivityPolicy
### Properties
* **retry**: any
* **retryIntervalInSeconds**: int
* **secureInput**: bool
* **secureOutput**: bool
* **timeout**: any

## schemas:557_folder
### Properties
* **name**: string

## Dictionary<string,ParameterSpecification>
### Additional Properties
* **Additional Properties Type**: ParameterSpecification

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,VariableSpecification>
### Additional Properties
* **Additional Properties Type**: VariableSpecification

## VariableSpecification
### Properties
* **defaultValue**: any
* **type**: 'Array' | 'Bool' | 'String' (Required)

## Microsoft.DataFactory/factories/triggers
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Trigger (Required)
* **type**: 'Microsoft.DataFactory/factories/triggers' (ReadOnly, DeployTimeConstant)

## Trigger
* **Discriminator**: type
### Base Properties
* **annotations**: any[]
* **description**: string
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' (ReadOnly)
### ChainingTrigger
#### Properties
* **pipeline**: TriggerPipelineReference (Required)
* **type**: 'ChainingTrigger' (Required)
* **typeProperties**: schemas:870_typeProperties (Required)

### MultiplePipelineTrigger
#### Properties
* **pipelines**: TriggerPipelineReference[]
* **type**: 'MultiplePipelineTrigger' (Required)

### RerunTumblingWindowTrigger
#### Properties
* **type**: 'RerunTumblingWindowTrigger' (Required)
* **typeProperties**: schemas:869_typeProperties (Required)

### TumblingWindowTrigger
#### Properties
* **pipeline**: TriggerPipelineReference (Required)
* **type**: 'TumblingWindowTrigger' (Required)
* **typeProperties**: schemas:861_typeProperties (Required)


## ChainingTrigger
### Properties
* **pipeline**: TriggerPipelineReference (Required)
* **type**: 'ChainingTrigger' (Required)
* **typeProperties**: schemas:870_typeProperties (Required)

## TriggerPipelineReference
### Properties
* **parameters**: Dictionary<string,Object>
* **pipelineReference**: PipelineReference

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## PipelineReference
### Properties
* **name**: string
* **referenceName**: string (Required)
* **type**: string (Required)

## schemas:870_typeProperties
### Properties
* **dependsOn**: PipelineReference[] (Required)
* **runDimension**: string (Required)

## MultiplePipelineTrigger
### Properties
* **pipelines**: TriggerPipelineReference[]
* **type**: 'MultiplePipelineTrigger' (Required)

## RerunTumblingWindowTrigger
### Properties
* **type**: 'RerunTumblingWindowTrigger' (Required)
* **typeProperties**: schemas:869_typeProperties (Required)

## schemas:869_typeProperties
### Properties
* **parentTrigger**: any (Required)
* **requestedEndTime**: string (Required)
* **requestedStartTime**: string (Required)
* **rerunConcurrency**: int (Required)

## TumblingWindowTrigger
### Properties
* **pipeline**: TriggerPipelineReference (Required)
* **type**: 'TumblingWindowTrigger' (Required)
* **typeProperties**: schemas:861_typeProperties (Required)

## schemas:861_typeProperties
### Properties
* **delay**: any
* **dependsOn**: DependencyReference[]
* **endTime**: string
* **frequency**: 'Hour' | 'Minute' (Required)
* **interval**: int (Required)
* **maxConcurrency**: int (Required)
* **retryPolicy**: RetryPolicy
* **startTime**: string (Required)

## DependencyReference
* **Discriminator**: type
### Base Properties
### SelfDependencyTumblingWindowTriggerReference
#### Properties
* **offset**: string (Required)
* **size**: string
* **type**: 'SelfDependencyTumblingWindowTriggerReference' (Required)

### TriggerDependencyReference
#### Properties
* **referenceTrigger**: TriggerReference (Required)
* **type**: 'TriggerDependencyReference' (Required)


## SelfDependencyTumblingWindowTriggerReference
### Properties
* **offset**: string (Required)
* **size**: string
* **type**: 'SelfDependencyTumblingWindowTriggerReference' (Required)

## TriggerDependencyReference
### Properties
* **referenceTrigger**: TriggerReference (Required)
* **type**: 'TriggerDependencyReference' (Required)

## TriggerReference
### Properties
* **referenceName**: string (Required)
* **type**: string (Required)

## RetryPolicy
### Properties
* **count**: any
* **intervalInSeconds**: int

## Microsoft.DataFactory/factories
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: FactoryIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FactoryProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant)

## FactoryIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string (Required)

## FactoryProperties
### Properties
* **createTime**: string (ReadOnly)
* **globalParameters**: Dictionary<string,GlobalParameterSpecification>
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **repoConfiguration**: FactoryRepoConfiguration
* **version**: string (ReadOnly)

## Dictionary<string,GlobalParameterSpecification>
### Additional Properties
* **Additional Properties Type**: GlobalParameterSpecification

## GlobalParameterSpecification
### Properties
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'String' (Required)
* **value**: any (Required)

## FactoryRepoConfiguration
* **Discriminator**: type
### Base Properties
* **accountName**: string (Required)
* **collaborationBranch**: string (Required)
* **lastCommitId**: string
* **repositoryName**: string (Required)
* **rootFolder**: string (Required)
### FactoryGitHubConfiguration
#### Properties
* **hostName**: string
* **type**: 'FactoryGitHubConfiguration' (Required)

### FactoryVSTSConfiguration
#### Properties
* **projectName**: string (Required)
* **tenantId**: string
* **type**: 'FactoryVSTSConfiguration' (Required)


## FactoryGitHubConfiguration
### Properties
* **hostName**: string
* **type**: 'FactoryGitHubConfiguration' (Required)

## FactoryVSTSConfiguration
### Properties
* **projectName**: string (Required)
* **tenantId**: string
* **type**: 'FactoryVSTSConfiguration' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

