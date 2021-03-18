# Microsoft.DataFactory @ 2018-06-01

## Resource Microsoft.DataFactory/factories@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [FactoryIdentity](#factoryidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FactoryProperties](#factoryproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/dataflows@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataFlow](#dataflow) (Required)
* **type**: 'Microsoft.DataFactory/factories/dataflows' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/datasets@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Dataset](#dataset) (Required)
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationRuntime](#integrationruntime) (Required)
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/linkedservices@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LinkedService](#linkedservice) (Required)
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedVirtualNetwork](#managedvirtualnetwork) (Required)
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedPrivateEndpoint](#managedprivateendpoint) (Required)
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/pipelines@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Pipeline](#pipeline) (Required)
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/triggers@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Trigger](#trigger) (Required)
* **type**: 'Microsoft.DataFactory/factories/triggers' (ReadOnly, DeployTimeConstant)

## FactoryIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: [Dictionary<string,Object>](#dictionarystringobject)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## FactoryProperties
### Properties
* **createTime**: string (ReadOnly)
* **encryption**: [EncryptionConfiguration](#encryptionconfiguration)
* **globalParameters**: [Dictionary<string,GlobalParameterSpecification>](#dictionarystringglobalparameterspecification)
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **repoConfiguration**: [FactoryRepoConfiguration](#factoryrepoconfiguration)
* **version**: string (ReadOnly)

## EncryptionConfiguration
### Properties
* **identity**: [CMKIdentityDefinition](#cmkidentitydefinition)
* **keyName**: string (Required)
* **keyVersion**: string
* **vaultBaseUrl**: string (Required)

## CMKIdentityDefinition
### Properties
* **userAssignedIdentity**: string

## Dictionary<string,GlobalParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [GlobalParameterSpecification](#globalparameterspecification)

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataFlow
* **Discriminator**: type
### Base Properties
* **annotations**: any[]
* **description**: string
* **folder**: [schemas:107_folder](#schemas107folder)
### MappingDataFlow
#### Properties
* **type**: 'MappingDataFlow' (Required)
* **typeProperties**: [MappingDataFlowTypeProperties](#mappingdataflowtypeproperties)


## schemas:107_folder
### Properties
* **name**: string

## MappingDataFlow
### Properties
* **type**: 'MappingDataFlow' (Required)
* **typeProperties**: [MappingDataFlowTypeProperties](#mappingdataflowtypeproperties)

## MappingDataFlowTypeProperties
### Properties
* **script**: string
* **sinks**: [DataFlowSink](#dataflowsink)[]
* **sources**: [DataFlowSource](#dataflowsource)[]
* **transformations**: [Transformation](#transformation)[]

## DataFlowSink
### Properties
* **dataset**: [DatasetReference](#datasetreference)
* **description**: string
* **linkedService**: [LinkedServiceReference](#linkedservicereference)
* **name**: string (Required)
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference)

## DatasetReference
### Properties
* **parameters**: [Dictionary<string,Object>](#dictionarystringobject)
* **referenceName**: string (Required)
* **type**: string (Required)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## LinkedServiceReference
### Properties
* **parameters**: [Dictionary<string,Object>](#dictionarystringobject)
* **referenceName**: string (Required)
* **type**: string (Required)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DataFlowSource
### Properties
* **dataset**: [DatasetReference](#datasetreference)
* **description**: string
* **linkedService**: [LinkedServiceReference](#linkedservicereference)
* **name**: string (Required)
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference)

## Transformation
### Properties
* **description**: string
* **name**: string (Required)

## Dataset
* **Discriminator**: type
### Base Properties
* **annotations**: any[]
* **description**: string
* **folder**: [schemas:113_folder](#schemas113folder)
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required)
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification)
* **schema**: any
* **structure**: any
### AmazonMWSObject
#### Properties
* **type**: 'AmazonMWSObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### AmazonRedshiftTable
#### Properties
* **type**: 'AmazonRedshiftTable' (Required)
* **typeProperties**: [AmazonRedshiftTableDatasetTypeProperties](#amazonredshifttabledatasettypeproperties)

### AmazonS3Object
#### Properties
* **type**: 'AmazonS3Object' (Required)
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required)

### Avro
#### Properties
* **type**: 'Avro' (Required)
* **typeProperties**: [AvroDatasetTypeProperties](#avrodatasettypeproperties)

### AzureBlob
#### Properties
* **type**: 'AzureBlob' (Required)
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties)

### AzureBlobFSFile
#### Properties
* **type**: 'AzureBlobFSFile' (Required)
* **typeProperties**: [AzureBlobFSDatasetTypeProperties](#azureblobfsdatasettypeproperties)

### AzureDatabricksDeltaLakeDataset
#### Properties
* **type**: 'AzureDatabricksDeltaLakeDataset' (Required)
* **typeProperties**: [AzureDatabricksDeltaLakeDatasetTypeProperties](#azuredatabricksdeltalakedatasettypeproperties)

### AzureDataExplorerTable
#### Properties
* **type**: 'AzureDataExplorerTable' (Required)
* **typeProperties**: [AzureDataExplorerDatasetTypeProperties](#azuredataexplorerdatasettypeproperties) (Required)

### AzureDataLakeStoreFile
#### Properties
* **type**: 'AzureDataLakeStoreFile' (Required)
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties)

### AzureMariaDBTable
#### Properties
* **type**: 'AzureMariaDBTable' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### AzureMySqlTable
#### Properties
* **type**: 'AzureMySqlTable' (Required)
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required)

### AzurePostgreSqlTable
#### Properties
* **type**: 'AzurePostgreSqlTable' (Required)
* **typeProperties**: [AzurePostgreSqlTableDatasetTypeProperties](#azurepostgresqltabledatasettypeproperties)

### AzureSearchIndex
#### Properties
* **type**: 'AzureSearchIndex' (Required)
* **typeProperties**: [AzureSearchIndexDatasetTypeProperties](#azuresearchindexdatasettypeproperties) (Required)

### AzureSqlDWTable
#### Properties
* **type**: 'AzureSqlDWTable' (Required)
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties)

### AzureSqlMITable
#### Properties
* **type**: 'AzureSqlMITable' (Required)
* **typeProperties**: [AzureSqlMITableDatasetTypeProperties](#azuresqlmitabledatasettypeproperties)

### AzureSqlTable
#### Properties
* **type**: 'AzureSqlTable' (Required)
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties)

### AzureTable
#### Properties
* **type**: 'AzureTable' (Required)
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required)

### Binary
#### Properties
* **type**: 'Binary' (Required)
* **typeProperties**: [BinaryDatasetTypeProperties](#binarydatasettypeproperties)

### CassandraTable
#### Properties
* **type**: 'CassandraTable' (Required)
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties)

### CommonDataServiceForAppsEntity
#### Properties
* **type**: 'CommonDataServiceForAppsEntity' (Required)
* **typeProperties**: [CommonDataServiceForAppsEntityDatasetTypeProperties](#commondataserviceforappsentitydatasettypeproperties)

### ConcurObject
#### Properties
* **type**: 'ConcurObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### CosmosDbMongoDbApiCollection
#### Properties
* **type**: 'CosmosDbMongoDbApiCollection' (Required)
* **typeProperties**: [CosmosDbMongoDbApiCollectionDatasetTypeProperties](#cosmosdbmongodbapicollectiondatasettypeproperties) (Required)

### CosmosDbSqlApiCollection
#### Properties
* **type**: 'CosmosDbSqlApiCollection' (Required)
* **typeProperties**: [CosmosDbSqlApiCollectionDatasetTypeProperties](#cosmosdbsqlapicollectiondatasettypeproperties) (Required)

### CouchbaseTable
#### Properties
* **type**: 'CouchbaseTable' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### CustomDataset
#### Properties
* **type**: 'CustomDataset' (Required)
* **typeProperties**: any

### Db2Table
#### Properties
* **type**: 'Db2Table' (Required)
* **typeProperties**: [Db2TableDatasetTypeProperties](#db2tabledatasettypeproperties)

### DelimitedText
#### Properties
* **type**: 'DelimitedText' (Required)
* **typeProperties**: [DelimitedTextDatasetTypeProperties](#delimitedtextdatasettypeproperties)

### DocumentDbCollection
#### Properties
* **type**: 'DocumentDbCollection' (Required)
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required)

### DrillTable
#### Properties
* **type**: 'DrillTable' (Required)
* **typeProperties**: [DrillDatasetTypeProperties](#drilldatasettypeproperties)

### DynamicsAXResource
#### Properties
* **type**: 'DynamicsAXResource' (Required)
* **typeProperties**: [DynamicsAXResourceDatasetTypeProperties](#dynamicsaxresourcedatasettypeproperties) (Required)

### DynamicsCrmEntity
#### Properties
* **type**: 'DynamicsCrmEntity' (Required)
* **typeProperties**: [DynamicsCrmEntityDatasetTypeProperties](#dynamicscrmentitydatasettypeproperties)

### DynamicsEntity
#### Properties
* **type**: 'DynamicsEntity' (Required)
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties)

### EloquaObject
#### Properties
* **type**: 'EloquaObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### Excel
#### Properties
* **type**: 'Excel' (Required)
* **typeProperties**: [ExcelDatasetTypeProperties](#exceldatasettypeproperties)

### FileShare
#### Properties
* **type**: 'FileShare' (Required)
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties)

### GoogleAdWordsObject
#### Properties
* **type**: 'GoogleAdWordsObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### GoogleBigQueryObject
#### Properties
* **type**: 'GoogleBigQueryObject' (Required)
* **typeProperties**: [GoogleBigQueryDatasetTypeProperties](#googlebigquerydatasettypeproperties)

### GreenplumTable
#### Properties
* **type**: 'GreenplumTable' (Required)
* **typeProperties**: [GreenplumDatasetTypeProperties](#greenplumdatasettypeproperties)

### HBaseObject
#### Properties
* **type**: 'HBaseObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### HiveObject
#### Properties
* **type**: 'HiveObject' (Required)
* **typeProperties**: [HiveDatasetTypeProperties](#hivedatasettypeproperties)

### HttpFile
#### Properties
* **type**: 'HttpFile' (Required)
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties)

### HubspotObject
#### Properties
* **type**: 'HubspotObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### ImpalaObject
#### Properties
* **type**: 'ImpalaObject' (Required)
* **typeProperties**: [ImpalaDatasetTypeProperties](#impaladatasettypeproperties)

### InformixTable
#### Properties
* **type**: 'InformixTable' (Required)
* **typeProperties**: [InformixTableDatasetTypeProperties](#informixtabledatasettypeproperties)

### JiraObject
#### Properties
* **type**: 'JiraObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### Json
#### Properties
* **type**: 'Json' (Required)
* **typeProperties**: [JsonDatasetTypeProperties](#jsondatasettypeproperties)

### MagentoObject
#### Properties
* **type**: 'MagentoObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### MariaDBTable
#### Properties
* **type**: 'MariaDBTable' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### MarketoObject
#### Properties
* **type**: 'MarketoObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### MicrosoftAccessTable
#### Properties
* **type**: 'MicrosoftAccessTable' (Required)
* **typeProperties**: [MicrosoftAccessTableDatasetTypeProperties](#microsoftaccesstabledatasettypeproperties)

### MongoDbAtlasCollection
#### Properties
* **type**: 'MongoDbAtlasCollection' (Required)
* **typeProperties**: [MongoDbAtlasCollectionDatasetTypeProperties](#mongodbatlascollectiondatasettypeproperties) (Required)

### MongoDbCollection
#### Properties
* **type**: 'MongoDbCollection' (Required)
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required)

### MongoDbV2Collection
#### Properties
* **type**: 'MongoDbV2Collection' (Required)
* **typeProperties**: [MongoDbV2CollectionDatasetTypeProperties](#mongodbv2collectiondatasettypeproperties) (Required)

### MySqlTable
#### Properties
* **type**: 'MySqlTable' (Required)
* **typeProperties**: [MySqlTableDatasetTypeProperties](#mysqltabledatasettypeproperties)

### NetezzaTable
#### Properties
* **type**: 'NetezzaTable' (Required)
* **typeProperties**: [NetezzaTableDatasetTypeProperties](#netezzatabledatasettypeproperties)

### ODataResource
#### Properties
* **type**: 'ODataResource' (Required)
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties)

### OdbcTable
#### Properties
* **type**: 'OdbcTable' (Required)
* **typeProperties**: [OdbcTableDatasetTypeProperties](#odbctabledatasettypeproperties)

### Office365Table
#### Properties
* **type**: 'Office365Table' (Required)
* **typeProperties**: [Office365DatasetTypeProperties](#office365datasettypeproperties) (Required)

### OracleServiceCloudObject
#### Properties
* **type**: 'OracleServiceCloudObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### OracleTable
#### Properties
* **type**: 'OracleTable' (Required)
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties)

### Orc
#### Properties
* **type**: 'Orc' (Required)
* **typeProperties**: [OrcDatasetTypeProperties](#orcdatasettypeproperties)

### Parquet
#### Properties
* **type**: 'Parquet' (Required)
* **typeProperties**: [ParquetDatasetTypeProperties](#parquetdatasettypeproperties)

### PaypalObject
#### Properties
* **type**: 'PaypalObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### PhoenixObject
#### Properties
* **type**: 'PhoenixObject' (Required)
* **typeProperties**: [PhoenixDatasetTypeProperties](#phoenixdatasettypeproperties)

### PostgreSqlTable
#### Properties
* **type**: 'PostgreSqlTable' (Required)
* **typeProperties**: [PostgreSqlTableDatasetTypeProperties](#postgresqltabledatasettypeproperties)

### PrestoObject
#### Properties
* **type**: 'PrestoObject' (Required)
* **typeProperties**: [PrestoDatasetTypeProperties](#prestodatasettypeproperties)

### QuickBooksObject
#### Properties
* **type**: 'QuickBooksObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### RelationalTable
#### Properties
* **type**: 'RelationalTable' (Required)
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties)

### ResponsysObject
#### Properties
* **type**: 'ResponsysObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### RestResource
#### Properties
* **type**: 'RestResource' (Required)
* **typeProperties**: [RestResourceDatasetTypeProperties](#restresourcedatasettypeproperties)

### SalesforceMarketingCloudObject
#### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### SalesforceObject
#### Properties
* **type**: 'SalesforceObject' (Required)
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties)

### SalesforceServiceCloudObject
#### Properties
* **type**: 'SalesforceServiceCloudObject' (Required)
* **typeProperties**: [SalesforceServiceCloudObjectDatasetTypeProperties](#salesforceservicecloudobjectdatasettypeproperties)

### SapBwCube
#### Properties
* **type**: 'SapBwCube' (Required)

### SapCloudForCustomerResource
#### Properties
* **type**: 'SapCloudForCustomerResource' (Required)
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required)

### SapEccResource
#### Properties
* **type**: 'SapEccResource' (Required)
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required)

### SapHanaTable
#### Properties
* **type**: 'SapHanaTable' (Required)
* **typeProperties**: [SapHanaTableDatasetTypeProperties](#saphanatabledatasettypeproperties)

### SapOpenHubTable
#### Properties
* **type**: 'SapOpenHubTable' (Required)
* **typeProperties**: [SapOpenHubTableDatasetTypeProperties](#sapopenhubtabledatasettypeproperties) (Required)

### SapTableResource
#### Properties
* **type**: 'SapTableResource' (Required)
* **typeProperties**: [SapTableResourceDatasetTypeProperties](#saptableresourcedatasettypeproperties) (Required)

### ServiceNowObject
#### Properties
* **type**: 'ServiceNowObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### SharePointOnlineListResource
#### Properties
* **type**: 'SharePointOnlineListResource' (Required)
* **typeProperties**: [SharePointOnlineListDatasetTypeProperties](#sharepointonlinelistdatasettypeproperties)

### ShopifyObject
#### Properties
* **type**: 'ShopifyObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### SnowflakeTable
#### Properties
* **type**: 'SnowflakeTable' (Required)
* **typeProperties**: [SnowflakeDatasetTypeProperties](#snowflakedatasettypeproperties) (Required)

### SparkObject
#### Properties
* **type**: 'SparkObject' (Required)
* **typeProperties**: [SparkDatasetTypeProperties](#sparkdatasettypeproperties)

### SqlServerTable
#### Properties
* **type**: 'SqlServerTable' (Required)
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties)

### SquareObject
#### Properties
* **type**: 'SquareObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### SybaseTable
#### Properties
* **type**: 'SybaseTable' (Required)
* **typeProperties**: [SybaseTableDatasetTypeProperties](#sybasetabledatasettypeproperties)

### TeradataTable
#### Properties
* **type**: 'TeradataTable' (Required)
* **typeProperties**: [TeradataTableDatasetTypeProperties](#teradatatabledatasettypeproperties)

### VerticaTable
#### Properties
* **type**: 'VerticaTable' (Required)
* **typeProperties**: [VerticaDatasetTypeProperties](#verticadatasettypeproperties)

### WebTable
#### Properties
* **type**: 'WebTable' (Required)
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required)

### XeroObject
#### Properties
* **type**: 'XeroObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

### Xml
#### Properties
* **type**: 'Xml' (Required)
* **typeProperties**: [XmlDatasetTypeProperties](#xmldatasettypeproperties)

### ZohoObject
#### Properties
* **type**: 'ZohoObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)


## schemas:113_folder
### Properties
* **name**: string

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## ParameterSpecification
### Properties
* **defaultValue**: any
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'SecureString' | 'String' (Required)

## AmazonMWSObject
### Properties
* **type**: 'AmazonMWSObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## GenericDatasetTypeProperties
### Properties
* **tableName**: any

## AmazonRedshiftTable
### Properties
* **type**: 'AmazonRedshiftTable' (Required)
* **typeProperties**: [AmazonRedshiftTableDatasetTypeProperties](#amazonredshifttabledatasettypeproperties)

## AmazonRedshiftTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AmazonS3Object
### Properties
* **type**: 'AmazonS3Object' (Required)
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required)

## AmazonS3DatasetTypeProperties
### Properties
* **bucketName**: any (Required)
* **compression**: [DatasetCompression](#datasetcompression)
* **format**: [DatasetStorageFormat](#datasetstorageformat)
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
* **typeProperties**: [AvroDatasetTypeProperties](#avrodatasettypeproperties)

## AvroDatasetTypeProperties
### Properties
* **avroCompressionCodec**: 'bzip2' | 'deflate' | 'none' | 'snappy' | 'xz'
* **avroCompressionLevel**: int
* **location**: [DatasetLocation](#datasetlocation) (Required)

## DatasetLocation
* **Discriminator**: type
### Base Properties
* **fileName**: any
* **folderPath**: any
### AmazonS3CompatibleLocation
#### Properties
* **bucketName**: any
* **type**: 'AmazonS3CompatibleLocation' (Required)
* **version**: any

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

### OracleCloudStorageLocation
#### Properties
* **bucketName**: any
* **type**: 'OracleCloudStorageLocation' (Required)
* **version**: any

### SftpLocation
#### Properties
* **type**: 'SftpLocation' (Required)


## AmazonS3CompatibleLocation
### Properties
* **bucketName**: any
* **type**: 'AmazonS3CompatibleLocation' (Required)
* **version**: any

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

## OracleCloudStorageLocation
### Properties
* **bucketName**: any
* **type**: 'OracleCloudStorageLocation' (Required)
* **version**: any

## SftpLocation
### Properties
* **type**: 'SftpLocation' (Required)

## AzureBlob
### Properties
* **type**: 'AzureBlob' (Required)
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties)

## AzureBlobDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **fileName**: any
* **folderPath**: any
* **format**: [DatasetStorageFormat](#datasetstorageformat)
* **modifiedDatetimeEnd**: any
* **modifiedDatetimeStart**: any
* **tableRootLocation**: any

## AzureBlobFSFile
### Properties
* **type**: 'AzureBlobFSFile' (Required)
* **typeProperties**: [AzureBlobFSDatasetTypeProperties](#azureblobfsdatasettypeproperties)

## AzureBlobFSDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **fileName**: any
* **folderPath**: any
* **format**: [DatasetStorageFormat](#datasetstorageformat)

## AzureDatabricksDeltaLakeDataset
### Properties
* **type**: 'AzureDatabricksDeltaLakeDataset' (Required)
* **typeProperties**: [AzureDatabricksDeltaLakeDatasetTypeProperties](#azuredatabricksdeltalakedatasettypeproperties)

## AzureDatabricksDeltaLakeDatasetTypeProperties
### Properties
* **database**: any
* **table**: any

## AzureDataExplorerTable
### Properties
* **type**: 'AzureDataExplorerTable' (Required)
* **typeProperties**: [AzureDataExplorerDatasetTypeProperties](#azuredataexplorerdatasettypeproperties) (Required)

## AzureDataExplorerDatasetTypeProperties
### Properties
* **table**: any

## AzureDataLakeStoreFile
### Properties
* **type**: 'AzureDataLakeStoreFile' (Required)
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties)

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **fileName**: any
* **folderPath**: any
* **format**: [DatasetStorageFormat](#datasetstorageformat)

## AzureMariaDBTable
### Properties
* **type**: 'AzureMariaDBTable' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## AzureMySqlTable
### Properties
* **type**: 'AzureMySqlTable' (Required)
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required)

## AzureMySqlTableDatasetTypeProperties
### Properties
* **table**: any
* **tableName**: any

## AzurePostgreSqlTable
### Properties
* **type**: 'AzurePostgreSqlTable' (Required)
* **typeProperties**: [AzurePostgreSqlTableDatasetTypeProperties](#azurepostgresqltabledatasettypeproperties)

## AzurePostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AzureSearchIndex
### Properties
* **type**: 'AzureSearchIndex' (Required)
* **typeProperties**: [AzureSearchIndexDatasetTypeProperties](#azuresearchindexdatasettypeproperties) (Required)

## AzureSearchIndexDatasetTypeProperties
### Properties
* **indexName**: any (Required)

## AzureSqlDWTable
### Properties
* **type**: 'AzureSqlDWTable' (Required)
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties)

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AzureSqlMITable
### Properties
* **type**: 'AzureSqlMITable' (Required)
* **typeProperties**: [AzureSqlMITableDatasetTypeProperties](#azuresqlmitabledatasettypeproperties)

## AzureSqlMITableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AzureSqlTable
### Properties
* **type**: 'AzureSqlTable' (Required)
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties)

## AzureSqlTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## AzureTable
### Properties
* **type**: 'AzureTable' (Required)
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required)

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## Binary
### Properties
* **type**: 'Binary' (Required)
* **typeProperties**: [BinaryDatasetTypeProperties](#binarydatasettypeproperties)

## BinaryDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **location**: [DatasetLocation](#datasetlocation) (Required)

## CassandraTable
### Properties
* **type**: 'CassandraTable' (Required)
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties)

## CassandraTableDatasetTypeProperties
### Properties
* **keyspace**: any
* **tableName**: any

## CommonDataServiceForAppsEntity
### Properties
* **type**: 'CommonDataServiceForAppsEntity' (Required)
* **typeProperties**: [CommonDataServiceForAppsEntityDatasetTypeProperties](#commondataserviceforappsentitydatasettypeproperties)

## CommonDataServiceForAppsEntityDatasetTypeProperties
### Properties
* **entityName**: any

## ConcurObject
### Properties
* **type**: 'ConcurObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## CosmosDbMongoDbApiCollection
### Properties
* **type**: 'CosmosDbMongoDbApiCollection' (Required)
* **typeProperties**: [CosmosDbMongoDbApiCollectionDatasetTypeProperties](#cosmosdbmongodbapicollectiondatasettypeproperties) (Required)

## CosmosDbMongoDbApiCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required)

## CosmosDbSqlApiCollection
### Properties
* **type**: 'CosmosDbSqlApiCollection' (Required)
* **typeProperties**: [CosmosDbSqlApiCollectionDatasetTypeProperties](#cosmosdbsqlapicollectiondatasettypeproperties) (Required)

## CosmosDbSqlApiCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required)

## CouchbaseTable
### Properties
* **type**: 'CouchbaseTable' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## CustomDataset
### Properties
* **type**: 'CustomDataset' (Required)
* **typeProperties**: any

## Db2Table
### Properties
* **type**: 'Db2Table' (Required)
* **typeProperties**: [Db2TableDatasetTypeProperties](#db2tabledatasettypeproperties)

## Db2TableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## DelimitedText
### Properties
* **type**: 'DelimitedText' (Required)
* **typeProperties**: [DelimitedTextDatasetTypeProperties](#delimitedtextdatasettypeproperties)

## DelimitedTextDatasetTypeProperties
### Properties
* **columnDelimiter**: any
* **compressionCodec**: any
* **compressionLevel**: any
* **encodingName**: any
* **escapeChar**: any
* **firstRowAsHeader**: any
* **location**: [DatasetLocation](#datasetlocation) (Required)
* **nullValue**: any
* **quoteChar**: any
* **rowDelimiter**: any

## DocumentDbCollection
### Properties
* **type**: 'DocumentDbCollection' (Required)
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required)

## DocumentDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required)

## DrillTable
### Properties
* **type**: 'DrillTable' (Required)
* **typeProperties**: [DrillDatasetTypeProperties](#drilldatasettypeproperties)

## DrillDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## DynamicsAXResource
### Properties
* **type**: 'DynamicsAXResource' (Required)
* **typeProperties**: [DynamicsAXResourceDatasetTypeProperties](#dynamicsaxresourcedatasettypeproperties) (Required)

## DynamicsAXResourceDatasetTypeProperties
### Properties
* **path**: any (Required)

## DynamicsCrmEntity
### Properties
* **type**: 'DynamicsCrmEntity' (Required)
* **typeProperties**: [DynamicsCrmEntityDatasetTypeProperties](#dynamicscrmentitydatasettypeproperties)

## DynamicsCrmEntityDatasetTypeProperties
### Properties
* **entityName**: any

## DynamicsEntity
### Properties
* **type**: 'DynamicsEntity' (Required)
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties)

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any

## EloquaObject
### Properties
* **type**: 'EloquaObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## Excel
### Properties
* **type**: 'Excel' (Required)
* **typeProperties**: [ExcelDatasetTypeProperties](#exceldatasettypeproperties)

## ExcelDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **firstRowAsHeader**: any
* **location**: [DatasetLocation](#datasetlocation) (Required)
* **nullValue**: any
* **range**: any
* **sheetName**: any (Required)

## FileShare
### Properties
* **type**: 'FileShare' (Required)
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties)

## FileShareDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **fileFilter**: any
* **fileName**: any
* **folderPath**: any
* **format**: [DatasetStorageFormat](#datasetstorageformat)
* **modifiedDatetimeEnd**: any
* **modifiedDatetimeStart**: any

## GoogleAdWordsObject
### Properties
* **type**: 'GoogleAdWordsObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## GoogleBigQueryObject
### Properties
* **type**: 'GoogleBigQueryObject' (Required)
* **typeProperties**: [GoogleBigQueryDatasetTypeProperties](#googlebigquerydatasettypeproperties)

## GoogleBigQueryDatasetTypeProperties
### Properties
* **dataset**: any
* **table**: any
* **tableName**: any

## GreenplumTable
### Properties
* **type**: 'GreenplumTable' (Required)
* **typeProperties**: [GreenplumDatasetTypeProperties](#greenplumdatasettypeproperties)

## GreenplumDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## HBaseObject
### Properties
* **type**: 'HBaseObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## HiveObject
### Properties
* **type**: 'HiveObject' (Required)
* **typeProperties**: [HiveDatasetTypeProperties](#hivedatasettypeproperties)

## HiveDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## HttpFile
### Properties
* **type**: 'HttpFile' (Required)
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties)

## HttpDatasetTypeProperties
### Properties
* **additionalHeaders**: any
* **compression**: [DatasetCompression](#datasetcompression)
* **format**: [DatasetStorageFormat](#datasetstorageformat)
* **relativeUrl**: any
* **requestBody**: any
* **requestMethod**: any

## HubspotObject
### Properties
* **type**: 'HubspotObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## ImpalaObject
### Properties
* **type**: 'ImpalaObject' (Required)
* **typeProperties**: [ImpalaDatasetTypeProperties](#impaladatasettypeproperties)

## ImpalaDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## InformixTable
### Properties
* **type**: 'InformixTable' (Required)
* **typeProperties**: [InformixTableDatasetTypeProperties](#informixtabledatasettypeproperties)

## InformixTableDatasetTypeProperties
### Properties
* **tableName**: any

## JiraObject
### Properties
* **type**: 'JiraObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## Json
### Properties
* **type**: 'Json' (Required)
* **typeProperties**: [JsonDatasetTypeProperties](#jsondatasettypeproperties)

## JsonDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **encodingName**: any
* **location**: [DatasetLocation](#datasetlocation) (Required)

## MagentoObject
### Properties
* **type**: 'MagentoObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## MariaDBTable
### Properties
* **type**: 'MariaDBTable' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## MarketoObject
### Properties
* **type**: 'MarketoObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## MicrosoftAccessTable
### Properties
* **type**: 'MicrosoftAccessTable' (Required)
* **typeProperties**: [MicrosoftAccessTableDatasetTypeProperties](#microsoftaccesstabledatasettypeproperties)

## MicrosoftAccessTableDatasetTypeProperties
### Properties
* **tableName**: any

## MongoDbAtlasCollection
### Properties
* **type**: 'MongoDbAtlasCollection' (Required)
* **typeProperties**: [MongoDbAtlasCollectionDatasetTypeProperties](#mongodbatlascollectiondatasettypeproperties) (Required)

## MongoDbAtlasCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required)

## MongoDbCollection
### Properties
* **type**: 'MongoDbCollection' (Required)
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required)

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required)

## MongoDbV2Collection
### Properties
* **type**: 'MongoDbV2Collection' (Required)
* **typeProperties**: [MongoDbV2CollectionDatasetTypeProperties](#mongodbv2collectiondatasettypeproperties) (Required)

## MongoDbV2CollectionDatasetTypeProperties
### Properties
* **collection**: any (Required)

## MySqlTable
### Properties
* **type**: 'MySqlTable' (Required)
* **typeProperties**: [MySqlTableDatasetTypeProperties](#mysqltabledatasettypeproperties)

## MySqlTableDatasetTypeProperties
### Properties
* **tableName**: any

## NetezzaTable
### Properties
* **type**: 'NetezzaTable' (Required)
* **typeProperties**: [NetezzaTableDatasetTypeProperties](#netezzatabledatasettypeproperties)

## NetezzaTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## ODataResource
### Properties
* **type**: 'ODataResource' (Required)
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties)

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any

## OdbcTable
### Properties
* **type**: 'OdbcTable' (Required)
* **typeProperties**: [OdbcTableDatasetTypeProperties](#odbctabledatasettypeproperties)

## OdbcTableDatasetTypeProperties
### Properties
* **tableName**: any

## Office365Table
### Properties
* **type**: 'Office365Table' (Required)
* **typeProperties**: [Office365DatasetTypeProperties](#office365datasettypeproperties) (Required)

## Office365DatasetTypeProperties
### Properties
* **predicate**: any
* **tableName**: any (Required)

## OracleServiceCloudObject
### Properties
* **type**: 'OracleServiceCloudObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## OracleTable
### Properties
* **type**: 'OracleTable' (Required)
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties)

## OracleTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## Orc
### Properties
* **type**: 'Orc' (Required)
* **typeProperties**: [OrcDatasetTypeProperties](#orcdatasettypeproperties)

## OrcDatasetTypeProperties
### Properties
* **location**: [DatasetLocation](#datasetlocation) (Required)
* **orcCompressionCodec**: 'lzo' | 'none' | 'snappy' | 'zlib'

## Parquet
### Properties
* **type**: 'Parquet' (Required)
* **typeProperties**: [ParquetDatasetTypeProperties](#parquetdatasettypeproperties)

## ParquetDatasetTypeProperties
### Properties
* **compressionCodec**: any
* **location**: [DatasetLocation](#datasetlocation) (Required)

## PaypalObject
### Properties
* **type**: 'PaypalObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## PhoenixObject
### Properties
* **type**: 'PhoenixObject' (Required)
* **typeProperties**: [PhoenixDatasetTypeProperties](#phoenixdatasettypeproperties)

## PhoenixDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## PostgreSqlTable
### Properties
* **type**: 'PostgreSqlTable' (Required)
* **typeProperties**: [PostgreSqlTableDatasetTypeProperties](#postgresqltabledatasettypeproperties)

## PostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## PrestoObject
### Properties
* **type**: 'PrestoObject' (Required)
* **typeProperties**: [PrestoDatasetTypeProperties](#prestodatasettypeproperties)

## PrestoDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## QuickBooksObject
### Properties
* **type**: 'QuickBooksObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## RelationalTable
### Properties
* **type**: 'RelationalTable' (Required)
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties)

## RelationalTableDatasetTypeProperties
### Properties
* **tableName**: any

## ResponsysObject
### Properties
* **type**: 'ResponsysObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## RestResource
### Properties
* **type**: 'RestResource' (Required)
* **typeProperties**: [RestResourceDatasetTypeProperties](#restresourcedatasettypeproperties)

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
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## SalesforceObject
### Properties
* **type**: 'SalesforceObject' (Required)
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties)

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any

## SalesforceServiceCloudObject
### Properties
* **type**: 'SalesforceServiceCloudObject' (Required)
* **typeProperties**: [SalesforceServiceCloudObjectDatasetTypeProperties](#salesforceservicecloudobjectdatasettypeproperties)

## SalesforceServiceCloudObjectDatasetTypeProperties
### Properties
* **objectApiName**: any

## SapBwCube
### Properties
* **type**: 'SapBwCube' (Required)

## SapCloudForCustomerResource
### Properties
* **type**: 'SapCloudForCustomerResource' (Required)
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required)

## SapCloudForCustomerResourceDatasetTypeProperties
### Properties
* **path**: any (Required)

## SapEccResource
### Properties
* **type**: 'SapEccResource' (Required)
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required)

## SapEccResourceDatasetTypeProperties
### Properties
* **path**: any (Required)

## SapHanaTable
### Properties
* **type**: 'SapHanaTable' (Required)
* **typeProperties**: [SapHanaTableDatasetTypeProperties](#saphanatabledatasettypeproperties)

## SapHanaTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any

## SapOpenHubTable
### Properties
* **type**: 'SapOpenHubTable' (Required)
* **typeProperties**: [SapOpenHubTableDatasetTypeProperties](#sapopenhubtabledatasettypeproperties) (Required)

## SapOpenHubTableDatasetTypeProperties
### Properties
* **baseRequestId**: any
* **excludeLastRequest**: any
* **openHubDestinationName**: any (Required)

## SapTableResource
### Properties
* **type**: 'SapTableResource' (Required)
* **typeProperties**: [SapTableResourceDatasetTypeProperties](#saptableresourcedatasettypeproperties) (Required)

## SapTableResourceDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## ServiceNowObject
### Properties
* **type**: 'ServiceNowObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## SharePointOnlineListResource
### Properties
* **type**: 'SharePointOnlineListResource' (Required)
* **typeProperties**: [SharePointOnlineListDatasetTypeProperties](#sharepointonlinelistdatasettypeproperties)

## SharePointOnlineListDatasetTypeProperties
### Properties
* **listName**: any

## ShopifyObject
### Properties
* **type**: 'ShopifyObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## SnowflakeTable
### Properties
* **type**: 'SnowflakeTable' (Required)
* **typeProperties**: [SnowflakeDatasetTypeProperties](#snowflakedatasettypeproperties) (Required)

## SnowflakeDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any

## SparkObject
### Properties
* **type**: 'SparkObject' (Required)
* **typeProperties**: [SparkDatasetTypeProperties](#sparkdatasettypeproperties)

## SparkDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## SqlServerTable
### Properties
* **type**: 'SqlServerTable' (Required)
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties)

## SqlServerTableDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## SquareObject
### Properties
* **type**: 'SquareObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## SybaseTable
### Properties
* **type**: 'SybaseTable' (Required)
* **typeProperties**: [SybaseTableDatasetTypeProperties](#sybasetabledatasettypeproperties)

## SybaseTableDatasetTypeProperties
### Properties
* **tableName**: any

## TeradataTable
### Properties
* **type**: 'TeradataTable' (Required)
* **typeProperties**: [TeradataTableDatasetTypeProperties](#teradatatabledatasettypeproperties)

## TeradataTableDatasetTypeProperties
### Properties
* **database**: any
* **table**: any

## VerticaTable
### Properties
* **type**: 'VerticaTable' (Required)
* **typeProperties**: [VerticaDatasetTypeProperties](#verticadatasettypeproperties)

## VerticaDatasetTypeProperties
### Properties
* **schema**: any
* **table**: any
* **tableName**: any

## WebTable
### Properties
* **type**: 'WebTable' (Required)
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required)

## WebTableDatasetTypeProperties
### Properties
* **index**: any (Required)
* **path**: any

## XeroObject
### Properties
* **type**: 'XeroObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## Xml
### Properties
* **type**: 'Xml' (Required)
* **typeProperties**: [XmlDatasetTypeProperties](#xmldatasettypeproperties)

## XmlDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **encodingName**: any
* **location**: [DatasetLocation](#datasetlocation) (Required)
* **nullValue**: any

## ZohoObject
### Properties
* **type**: 'ZohoObject' (Required)
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties)

## IntegrationRuntime
* **Discriminator**: type
### Base Properties
* **description**: string
### Managed
#### Properties
* **managedVirtualNetwork**: [ManagedVirtualNetworkReference](#managedvirtualnetworkreference)
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required)

### SelfHosted
#### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: [SelfHostedIntegrationRuntimeTypeProperties](#selfhostedintegrationruntimetypeproperties)


## Managed
### Properties
* **managedVirtualNetwork**: [ManagedVirtualNetworkReference](#managedvirtualnetworkreference)
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required)

## ManagedVirtualNetworkReference
### Properties
* **referenceName**: string (Required)
* **type**: string (Required)

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties)
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties)

## IntegrationRuntimeComputeProperties
### Properties
* **dataFlowProperties**: [IntegrationRuntimeDataFlowProperties](#integrationruntimedataflowproperties)
* **location**: string
* **maxParallelExecutionsPerNode**: int
* **nodeSize**: string
* **numberOfNodes**: int
* **vNetProperties**: [IntegrationRuntimeVNetProperties](#integrationruntimevnetproperties)
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeDataFlowProperties
### Properties
* **computeType**: 'ComputeOptimized' | 'General' | 'MemoryOptimized'
* **coreCount**: int
* **timeToLive**: int
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeVNetProperties
### Properties
* **publicIPs**: string[]
* **subnet**: string
* **vNetId**: string
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: [IntegrationRuntimeSsisCatalogInfo](#integrationruntimessiscataloginfo)
* **customSetupScriptProperties**: [IntegrationRuntimeCustomSetupScriptProperties](#integrationruntimecustomsetupscriptproperties)
* **dataProxyProperties**: [IntegrationRuntimeDataProxyProperties](#integrationruntimedataproxyproperties)
* **edition**: 'Enterprise' | 'Standard'
* **expressCustomSetupProperties**: [CustomSetupBase](#customsetupbase)[]
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
* **packageStores**: [PackageStore](#packagestore)[]
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: [SecureString](#securestring)
* **catalogAdminUserName**: string
* **catalogPricingTier**: 'Basic' | 'Premium' | 'PremiumRS' | 'Standard'
* **catalogServerEndpoint**: string
* **dualStandbyPairName**: string
### Additional Properties
* **Additional Properties Type**: any

## SecureString
### Properties
* **type**: 'SecureString' (Required)
* **value**: string (Required)

## IntegrationRuntimeCustomSetupScriptProperties
### Properties
* **blobContainerUri**: string
* **sasToken**: [SecureString](#securestring)

## IntegrationRuntimeDataProxyProperties
### Properties
* **connectVia**: [EntityReference](#entityreference)
* **path**: string
* **stagingLinkedService**: [EntityReference](#entityreference)

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
* **typeProperties**: [AzPowerShellSetupTypeProperties](#azpowershellsetuptypeproperties) (Required)

### CmdkeySetup
#### Properties
* **type**: 'CmdkeySetup' (Required)
* **typeProperties**: [CmdkeySetupTypeProperties](#cmdkeysetuptypeproperties) (Required)

### ComponentSetup
#### Properties
* **type**: 'ComponentSetup' (Required)
* **typeProperties**: [LicensedComponentSetupTypeProperties](#licensedcomponentsetuptypeproperties) (Required)

### EnvironmentVariableSetup
#### Properties
* **type**: 'EnvironmentVariableSetup' (Required)
* **typeProperties**: [EnvironmentVariableSetupTypeProperties](#environmentvariablesetuptypeproperties) (Required)


## AzPowerShellSetup
### Properties
* **type**: 'AzPowerShellSetup' (Required)
* **typeProperties**: [AzPowerShellSetupTypeProperties](#azpowershellsetuptypeproperties) (Required)

## AzPowerShellSetupTypeProperties
### Properties
* **version**: string (Required)

## CmdkeySetup
### Properties
* **type**: 'CmdkeySetup' (Required)
* **typeProperties**: [CmdkeySetupTypeProperties](#cmdkeysetuptypeproperties) (Required)

## CmdkeySetupTypeProperties
### Properties
* **password**: [SecretBase](#secretbase) (Required)
* **targetName**: any (Required)
* **userName**: any (Required)

## SecretBase
* **Discriminator**: type
### Base Properties
### AzureKeyVaultSecret
#### Properties
* **secretName**: any (Required)
* **secretVersion**: any
* **store**: [LinkedServiceReference](#linkedservicereference) (Required)
* **type**: 'AzureKeyVaultSecret' (Required)

### SecureString
#### Properties
* **type**: 'SecureString' (Required)
* **value**: string (Required)


## AzureKeyVaultSecret
### Properties
* **secretName**: any (Required)
* **secretVersion**: any
* **store**: [LinkedServiceReference](#linkedservicereference) (Required)
* **type**: 'AzureKeyVaultSecret' (Required)

## ComponentSetup
### Properties
* **type**: 'ComponentSetup' (Required)
* **typeProperties**: [LicensedComponentSetupTypeProperties](#licensedcomponentsetuptypeproperties) (Required)

## LicensedComponentSetupTypeProperties
### Properties
* **componentName**: string (Required)
* **licenseKey**: [SecretBase](#secretbase)

## EnvironmentVariableSetup
### Properties
* **type**: 'EnvironmentVariableSetup' (Required)
* **typeProperties**: [EnvironmentVariableSetupTypeProperties](#environmentvariablesetuptypeproperties) (Required)

## EnvironmentVariableSetupTypeProperties
### Properties
* **variableName**: string (Required)
* **variableValue**: string (Required)

## PackageStore
### Properties
* **name**: string (Required)
* **packageStoreLinkedService**: [EntityReference](#entityreference) (Required)

## SelfHosted
### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: [SelfHostedIntegrationRuntimeTypeProperties](#selfhostedintegrationruntimetypeproperties)

## SelfHostedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: [LinkedIntegrationRuntimeType](#linkedintegrationruntimetype)

## LinkedIntegrationRuntimeType
* **Discriminator**: authorizationType
### Base Properties
### Key
#### Properties
* **authorizationType**: 'Key' (Required)
* **key**: [SecureString](#securestring) (Required)

### RBAC
#### Properties
* **authorizationType**: 'RBAC' (Required)
* **resourceId**: string (Required)


## Key
### Properties
* **authorizationType**: 'Key' (Required)
* **key**: [SecureString](#securestring) (Required)

## RBAC
### Properties
* **authorizationType**: 'RBAC' (Required)
* **resourceId**: string (Required)

## LinkedService
* **Discriminator**: type
### Base Properties
* **annotations**: any[]
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference)
* **description**: string
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification)
### AmazonMWS
#### Properties
* **type**: 'AmazonMWS' (Required)
* **typeProperties**: [AmazonMWSLinkedServiceTypeProperties](#amazonmwslinkedservicetypeproperties) (Required)

### AmazonRedshift
#### Properties
* **type**: 'AmazonRedshift' (Required)
* **typeProperties**: [AmazonRedshiftLinkedServiceTypeProperties](#amazonredshiftlinkedservicetypeproperties) (Required)

### AmazonS3
#### Properties
* **type**: 'AmazonS3' (Required)
* **typeProperties**: [AmazonS3LinkedServiceTypeProperties](#amazons3linkedservicetypeproperties) (Required)

### AmazonS3Compatible
#### Properties
* **type**: 'AmazonS3Compatible' (Required)
* **typeProperties**: [AmazonS3CompatibleLinkedServiceTypeProperties](#amazons3compatiblelinkedservicetypeproperties) (Required)

### AzureBatch
#### Properties
* **type**: 'AzureBatch' (Required)
* **typeProperties**: [AzureBatchLinkedServiceTypeProperties](#azurebatchlinkedservicetypeproperties) (Required)

### AzureBlobFS
#### Properties
* **type**: 'AzureBlobFS' (Required)
* **typeProperties**: [AzureBlobFSLinkedServiceTypeProperties](#azureblobfslinkedservicetypeproperties) (Required)

### AzureBlobStorage
#### Properties
* **type**: 'AzureBlobStorage' (Required)
* **typeProperties**: [AzureBlobStorageLinkedServiceTypeProperties](#azureblobstoragelinkedservicetypeproperties) (Required)

### AzureDatabricks
#### Properties
* **type**: 'AzureDatabricks' (Required)
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required)

### AzureDatabricksDeltaLake
#### Properties
* **type**: 'AzureDatabricksDeltaLake' (Required)
* **typeProperties**: [AzureDatabricksDetltaLakeLinkedServiceTypeProperties](#azuredatabricksdetltalakelinkedservicetypeproperties) (Required)

### AzureDataExplorer
#### Properties
* **type**: 'AzureDataExplorer' (Required)
* **typeProperties**: [AzureDataExplorerLinkedServiceTypeProperties](#azuredataexplorerlinkedservicetypeproperties) (Required)

### AzureDataLakeAnalytics
#### Properties
* **type**: 'AzureDataLakeAnalytics' (Required)
* **typeProperties**: [AzureDataLakeAnalyticsLinkedServiceTypeProperties](#azuredatalakeanalyticslinkedservicetypeproperties) (Required)

### AzureDataLakeStore
#### Properties
* **type**: 'AzureDataLakeStore' (Required)
* **typeProperties**: [AzureDataLakeStoreLinkedServiceTypeProperties](#azuredatalakestorelinkedservicetypeproperties) (Required)

### AzureFileStorage
#### Properties
* **type**: 'AzureFileStorage' (Required)
* **typeProperties**: [AzureFileStorageLinkedServiceTypeProperties](#azurefilestoragelinkedservicetypeproperties) (Required)

### AzureFunction
#### Properties
* **type**: 'AzureFunction' (Required)
* **typeProperties**: [AzureFunctionLinkedServiceTypeProperties](#azurefunctionlinkedservicetypeproperties) (Required)

### AzureKeyVault
#### Properties
* **type**: 'AzureKeyVault' (Required)
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required)

### AzureMariaDB
#### Properties
* **type**: 'AzureMariaDB' (Required)
* **typeProperties**: [AzureMariaDBLinkedServiceTypeProperties](#azuremariadblinkedservicetypeproperties) (Required)

### AzureML
#### Properties
* **type**: 'AzureML' (Required)
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required)

### AzureMLService
#### Properties
* **type**: 'AzureMLService' (Required)
* **typeProperties**: [AzureMLServiceLinkedServiceTypeProperties](#azuremlservicelinkedservicetypeproperties) (Required)

### AzureMySql
#### Properties
* **type**: 'AzureMySql' (Required)
* **typeProperties**: [AzureMySqlLinkedServiceTypeProperties](#azuremysqllinkedservicetypeproperties) (Required)

### AzurePostgreSql
#### Properties
* **type**: 'AzurePostgreSql' (Required)
* **typeProperties**: [AzurePostgreSqlLinkedServiceTypeProperties](#azurepostgresqllinkedservicetypeproperties) (Required)

### AzureSearch
#### Properties
* **type**: 'AzureSearch' (Required)
* **typeProperties**: [AzureSearchLinkedServiceTypeProperties](#azuresearchlinkedservicetypeproperties) (Required)

### AzureSqlDatabase
#### Properties
* **type**: 'AzureSqlDatabase' (Required)
* **typeProperties**: [AzureSqlDatabaseLinkedServiceTypeProperties](#azuresqldatabaselinkedservicetypeproperties) (Required)

### AzureSqlDW
#### Properties
* **type**: 'AzureSqlDW' (Required)
* **typeProperties**: [AzureSqlDWLinkedServiceTypeProperties](#azuresqldwlinkedservicetypeproperties) (Required)

### AzureSqlMI
#### Properties
* **type**: 'AzureSqlMI' (Required)
* **typeProperties**: [AzureSqlMILinkedServiceTypeProperties](#azuresqlmilinkedservicetypeproperties) (Required)

### AzureStorage
#### Properties
* **type**: 'AzureStorage' (Required)
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required)

### AzureTableStorage
#### Properties
* **type**: 'AzureTableStorage' (Required)
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required)

### Cassandra
#### Properties
* **type**: 'Cassandra' (Required)
* **typeProperties**: [CassandraLinkedServiceTypeProperties](#cassandralinkedservicetypeproperties) (Required)

### CommonDataServiceForApps
#### Properties
* **type**: 'CommonDataServiceForApps' (Required)
* **typeProperties**: [CommonDataServiceForAppsLinkedServiceTypeProperties](#commondataserviceforappslinkedservicetypeproperties) (Required)

### Concur
#### Properties
* **type**: 'Concur' (Required)
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required)

### CosmosDb
#### Properties
* **type**: 'CosmosDb' (Required)
* **typeProperties**: [CosmosDbLinkedServiceTypeProperties](#cosmosdblinkedservicetypeproperties) (Required)

### CosmosDbMongoDbApi
#### Properties
* **type**: 'CosmosDbMongoDbApi' (Required)
* **typeProperties**: [CosmosDbMongoDbApiLinkedServiceTypeProperties](#cosmosdbmongodbapilinkedservicetypeproperties) (Required)

### Couchbase
#### Properties
* **type**: 'Couchbase' (Required)
* **typeProperties**: [CouchbaseLinkedServiceTypeProperties](#couchbaselinkedservicetypeproperties) (Required)

### CustomDataSource
#### Properties
* **type**: 'CustomDataSource' (Required)
* **typeProperties**: any (Required)

### Db2
#### Properties
* **type**: 'Db2' (Required)
* **typeProperties**: [Db2LinkedServiceTypeProperties](#db2linkedservicetypeproperties) (Required)

### Drill
#### Properties
* **type**: 'Drill' (Required)
* **typeProperties**: [DrillLinkedServiceTypeProperties](#drilllinkedservicetypeproperties) (Required)

### Dynamics
#### Properties
* **type**: 'Dynamics' (Required)
* **typeProperties**: [DynamicsLinkedServiceTypeProperties](#dynamicslinkedservicetypeproperties) (Required)

### DynamicsAX
#### Properties
* **type**: 'DynamicsAX' (Required)
* **typeProperties**: [DynamicsAXLinkedServiceTypeProperties](#dynamicsaxlinkedservicetypeproperties) (Required)

### DynamicsCrm
#### Properties
* **type**: 'DynamicsCrm' (Required)
* **typeProperties**: [DynamicsCrmLinkedServiceTypeProperties](#dynamicscrmlinkedservicetypeproperties) (Required)

### Eloqua
#### Properties
* **type**: 'Eloqua' (Required)
* **typeProperties**: [EloquaLinkedServiceTypeProperties](#eloqualinkedservicetypeproperties) (Required)

### FileServer
#### Properties
* **type**: 'FileServer' (Required)
* **typeProperties**: [FileServerLinkedServiceTypeProperties](#fileserverlinkedservicetypeproperties) (Required)

### FtpServer
#### Properties
* **type**: 'FtpServer' (Required)
* **typeProperties**: [FtpServerLinkedServiceTypeProperties](#ftpserverlinkedservicetypeproperties) (Required)

### GoogleAdWords
#### Properties
* **type**: 'GoogleAdWords' (Required)
* **typeProperties**: [GoogleAdWordsLinkedServiceTypeProperties](#googleadwordslinkedservicetypeproperties) (Required)

### GoogleBigQuery
#### Properties
* **type**: 'GoogleBigQuery' (Required)
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required)

### GoogleCloudStorage
#### Properties
* **type**: 'GoogleCloudStorage' (Required)
* **typeProperties**: [GoogleCloudStorageLinkedServiceTypeProperties](#googlecloudstoragelinkedservicetypeproperties) (Required)

### Greenplum
#### Properties
* **type**: 'Greenplum' (Required)
* **typeProperties**: [GreenplumLinkedServiceTypeProperties](#greenplumlinkedservicetypeproperties) (Required)

### HBase
#### Properties
* **type**: 'HBase' (Required)
* **typeProperties**: [HBaseLinkedServiceTypeProperties](#hbaselinkedservicetypeproperties) (Required)

### Hdfs
#### Properties
* **type**: 'Hdfs' (Required)
* **typeProperties**: [HdfsLinkedServiceTypeProperties](#hdfslinkedservicetypeproperties) (Required)

### HDInsight
#### Properties
* **type**: 'HDInsight' (Required)
* **typeProperties**: [HDInsightLinkedServiceTypeProperties](#hdinsightlinkedservicetypeproperties) (Required)

### HDInsightOnDemand
#### Properties
* **type**: 'HDInsightOnDemand' (Required)
* **typeProperties**: [HDInsightOnDemandLinkedServiceTypeProperties](#hdinsightondemandlinkedservicetypeproperties) (Required)

### Hive
#### Properties
* **type**: 'Hive' (Required)
* **typeProperties**: [HiveLinkedServiceTypeProperties](#hivelinkedservicetypeproperties) (Required)

### HttpServer
#### Properties
* **type**: 'HttpServer' (Required)
* **typeProperties**: [HttpLinkedServiceTypeProperties](#httplinkedservicetypeproperties) (Required)

### Hubspot
#### Properties
* **type**: 'Hubspot' (Required)
* **typeProperties**: [HubspotLinkedServiceTypeProperties](#hubspotlinkedservicetypeproperties) (Required)

### Impala
#### Properties
* **type**: 'Impala' (Required)
* **typeProperties**: [ImpalaLinkedServiceTypeProperties](#impalalinkedservicetypeproperties) (Required)

### Informix
#### Properties
* **type**: 'Informix' (Required)
* **typeProperties**: [InformixLinkedServiceTypeProperties](#informixlinkedservicetypeproperties) (Required)

### Jira
#### Properties
* **type**: 'Jira' (Required)
* **typeProperties**: [JiraLinkedServiceTypeProperties](#jiralinkedservicetypeproperties) (Required)

### Magento
#### Properties
* **type**: 'Magento' (Required)
* **typeProperties**: [MagentoLinkedServiceTypeProperties](#magentolinkedservicetypeproperties) (Required)

### MariaDB
#### Properties
* **type**: 'MariaDB' (Required)
* **typeProperties**: [MariaDBLinkedServiceTypeProperties](#mariadblinkedservicetypeproperties) (Required)

### Marketo
#### Properties
* **type**: 'Marketo' (Required)
* **typeProperties**: [MarketoLinkedServiceTypeProperties](#marketolinkedservicetypeproperties) (Required)

### MicrosoftAccess
#### Properties
* **type**: 'MicrosoftAccess' (Required)
* **typeProperties**: [MicrosoftAccessLinkedServiceTypeProperties](#microsoftaccesslinkedservicetypeproperties) (Required)

### MongoDb
#### Properties
* **type**: 'MongoDb' (Required)
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required)

### MongoDbAtlas
#### Properties
* **type**: 'MongoDbAtlas' (Required)
* **typeProperties**: [MongoDbAtlasLinkedServiceTypeProperties](#mongodbatlaslinkedservicetypeproperties) (Required)

### MongoDbV2
#### Properties
* **type**: 'MongoDbV2' (Required)
* **typeProperties**: [MongoDbV2LinkedServiceTypeProperties](#mongodbv2linkedservicetypeproperties) (Required)

### MySql
#### Properties
* **type**: 'MySql' (Required)
* **typeProperties**: [MySqlLinkedServiceTypeProperties](#mysqllinkedservicetypeproperties) (Required)

### Netezza
#### Properties
* **type**: 'Netezza' (Required)
* **typeProperties**: [NetezzaLinkedServiceTypeProperties](#netezzalinkedservicetypeproperties) (Required)

### OData
#### Properties
* **type**: 'OData' (Required)
* **typeProperties**: [ODataLinkedServiceTypeProperties](#odatalinkedservicetypeproperties) (Required)

### Odbc
#### Properties
* **type**: 'Odbc' (Required)
* **typeProperties**: [OdbcLinkedServiceTypeProperties](#odbclinkedservicetypeproperties) (Required)

### Office365
#### Properties
* **type**: 'Office365' (Required)
* **typeProperties**: [Office365LinkedServiceTypeProperties](#office365linkedservicetypeproperties) (Required)

### Oracle
#### Properties
* **type**: 'Oracle' (Required)
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required)

### OracleCloudStorage
#### Properties
* **type**: 'OracleCloudStorage' (Required)
* **typeProperties**: [OracleCloudStorageLinkedServiceTypeProperties](#oraclecloudstoragelinkedservicetypeproperties) (Required)

### OracleServiceCloud
#### Properties
* **type**: 'OracleServiceCloud' (Required)
* **typeProperties**: [OracleServiceCloudLinkedServiceTypeProperties](#oracleservicecloudlinkedservicetypeproperties) (Required)

### Paypal
#### Properties
* **type**: 'Paypal' (Required)
* **typeProperties**: [PaypalLinkedServiceTypeProperties](#paypallinkedservicetypeproperties) (Required)

### Phoenix
#### Properties
* **type**: 'Phoenix' (Required)
* **typeProperties**: [PhoenixLinkedServiceTypeProperties](#phoenixlinkedservicetypeproperties) (Required)

### PostgreSql
#### Properties
* **type**: 'PostgreSql' (Required)
* **typeProperties**: [PostgreSqlLinkedServiceTypeProperties](#postgresqllinkedservicetypeproperties) (Required)

### Presto
#### Properties
* **type**: 'Presto' (Required)
* **typeProperties**: [PrestoLinkedServiceTypeProperties](#prestolinkedservicetypeproperties) (Required)

### QuickBooks
#### Properties
* **type**: 'QuickBooks' (Required)
* **typeProperties**: [QuickBooksLinkedServiceTypeProperties](#quickbookslinkedservicetypeproperties) (Required)

### Responsys
#### Properties
* **type**: 'Responsys' (Required)
* **typeProperties**: [ResponsysLinkedServiceTypeProperties](#responsyslinkedservicetypeproperties) (Required)

### RestService
#### Properties
* **type**: 'RestService' (Required)
* **typeProperties**: [RestServiceLinkedServiceTypeProperties](#restservicelinkedservicetypeproperties) (Required)

### Salesforce
#### Properties
* **type**: 'Salesforce' (Required)
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required)

### SalesforceMarketingCloud
#### Properties
* **type**: 'SalesforceMarketingCloud' (Required)
* **typeProperties**: [SalesforceMarketingCloudLinkedServiceTypeProperties](#salesforcemarketingcloudlinkedservicetypeproperties) (Required)

### SalesforceServiceCloud
#### Properties
* **type**: 'SalesforceServiceCloud' (Required)
* **typeProperties**: [SalesforceServiceCloudLinkedServiceTypeProperties](#salesforceservicecloudlinkedservicetypeproperties) (Required)

### SapBW
#### Properties
* **type**: 'SapBW' (Required)
* **typeProperties**: [SapBWLinkedServiceTypeProperties](#sapbwlinkedservicetypeproperties) (Required)

### SapCloudForCustomer
#### Properties
* **type**: 'SapCloudForCustomer' (Required)
* **typeProperties**: [SapCloudForCustomerLinkedServiceTypeProperties](#sapcloudforcustomerlinkedservicetypeproperties) (Required)

### SapEcc
#### Properties
* **type**: 'SapEcc' (Required)
* **typeProperties**: [SapEccLinkedServiceTypeProperties](#sapecclinkedservicetypeproperties) (Required)

### SapHana
#### Properties
* **type**: 'SapHana' (Required)
* **typeProperties**: [SapHanaLinkedServiceProperties](#saphanalinkedserviceproperties) (Required)

### SapOpenHub
#### Properties
* **type**: 'SapOpenHub' (Required)
* **typeProperties**: [SapOpenHubLinkedServiceTypeProperties](#sapopenhublinkedservicetypeproperties) (Required)

### SapTable
#### Properties
* **type**: 'SapTable' (Required)
* **typeProperties**: [SapTableLinkedServiceTypeProperties](#saptablelinkedservicetypeproperties) (Required)

### ServiceNow
#### Properties
* **type**: 'ServiceNow' (Required)
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required)

### Sftp
#### Properties
* **type**: 'Sftp' (Required)
* **typeProperties**: [SftpServerLinkedServiceTypeProperties](#sftpserverlinkedservicetypeproperties) (Required)

### SharePointOnlineList
#### Properties
* **type**: 'SharePointOnlineList' (Required)
* **typeProperties**: [SharePointOnlineListLinkedServiceTypeProperties](#sharepointonlinelistlinkedservicetypeproperties) (Required)

### Shopify
#### Properties
* **type**: 'Shopify' (Required)
* **typeProperties**: [ShopifyLinkedServiceTypeProperties](#shopifylinkedservicetypeproperties) (Required)

### Snowflake
#### Properties
* **type**: 'Snowflake' (Required)
* **typeProperties**: [SnowflakeLinkedServiceTypeProperties](#snowflakelinkedservicetypeproperties) (Required)

### Spark
#### Properties
* **type**: 'Spark' (Required)
* **typeProperties**: [SparkLinkedServiceTypeProperties](#sparklinkedservicetypeproperties) (Required)

### SqlServer
#### Properties
* **type**: 'SqlServer' (Required)
* **typeProperties**: [SqlServerLinkedServiceTypeProperties](#sqlserverlinkedservicetypeproperties) (Required)

### Square
#### Properties
* **type**: 'Square' (Required)
* **typeProperties**: [SquareLinkedServiceTypeProperties](#squarelinkedservicetypeproperties) (Required)

### Sybase
#### Properties
* **type**: 'Sybase' (Required)
* **typeProperties**: [SybaseLinkedServiceTypeProperties](#sybaselinkedservicetypeproperties) (Required)

### Teradata
#### Properties
* **type**: 'Teradata' (Required)
* **typeProperties**: [TeradataLinkedServiceTypeProperties](#teradatalinkedservicetypeproperties) (Required)

### Vertica
#### Properties
* **type**: 'Vertica' (Required)
* **typeProperties**: [VerticaLinkedServiceTypeProperties](#verticalinkedservicetypeproperties) (Required)

### Web
#### Properties
* **type**: 'Web' (Required)
* **typeProperties**: [WebLinkedServiceTypeProperties](#weblinkedservicetypeproperties) (Required)

### Xero
#### Properties
* **type**: 'Xero' (Required)
* **typeProperties**: [XeroLinkedServiceTypeProperties](#xerolinkedservicetypeproperties) (Required)

### Zoho
#### Properties
* **type**: 'Zoho' (Required)
* **typeProperties**: [ZohoLinkedServiceTypeProperties](#zoholinkedservicetypeproperties) (Required)


## IntegrationRuntimeReference
### Properties
* **parameters**: [Dictionary<string,Object>](#dictionarystringobject)
* **referenceName**: string (Required)
* **type**: string (Required)

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
* **type**: 'AmazonMWS' (Required)
* **typeProperties**: [AmazonMWSLinkedServiceTypeProperties](#amazonmwslinkedservicetypeproperties) (Required)

## AmazonMWSLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any (Required)
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **marketplaceID**: any (Required)
* **mwsAuthToken**: [SecretBase](#secretbase)
* **secretKey**: [SecretBase](#secretbase)
* **sellerID**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## AmazonRedshift
### Properties
* **type**: 'AmazonRedshift' (Required)
* **typeProperties**: [AmazonRedshiftLinkedServiceTypeProperties](#amazonredshiftlinkedservicetypeproperties) (Required)

## AmazonRedshiftLinkedServiceTypeProperties
### Properties
* **database**: any (Required)
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **port**: any
* **server**: any (Required)
* **username**: any

## AmazonS3
### Properties
* **type**: 'AmazonS3' (Required)
* **typeProperties**: [AmazonS3LinkedServiceTypeProperties](#amazons3linkedservicetypeproperties) (Required)

## AmazonS3LinkedServiceTypeProperties
### Properties
* **accessKeyId**: any
* **authenticationType**: any
* **encryptedCredential**: any
* **secretAccessKey**: [SecretBase](#secretbase)
* **serviceUrl**: any
* **sessionToken**: [SecretBase](#secretbase)

## AmazonS3Compatible
### Properties
* **type**: 'AmazonS3Compatible' (Required)
* **typeProperties**: [AmazonS3CompatibleLinkedServiceTypeProperties](#amazons3compatiblelinkedservicetypeproperties) (Required)

## AmazonS3CompatibleLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any
* **encryptedCredential**: any
* **forcePathStyle**: any
* **secretAccessKey**: [SecretBase](#secretbase)
* **serviceUrl**: any

## AzureBatch
### Properties
* **type**: 'AzureBatch' (Required)
* **typeProperties**: [AzureBatchLinkedServiceTypeProperties](#azurebatchlinkedservicetypeproperties) (Required)

## AzureBatchLinkedServiceTypeProperties
### Properties
* **accessKey**: [SecretBase](#secretbase)
* **accountName**: any (Required)
* **batchUri**: any (Required)
* **encryptedCredential**: any
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required)
* **poolName**: any (Required)

## AzureBlobFS
### Properties
* **type**: 'AzureBlobFS' (Required)
* **typeProperties**: [AzureBlobFSLinkedServiceTypeProperties](#azureblobfslinkedservicetypeproperties) (Required)

## AzureBlobFSLinkedServiceTypeProperties
### Properties
* **accountKey**: any
* **azureCloudType**: any
* **encryptedCredential**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any
* **url**: any (Required)

## AzureBlobStorage
### Properties
* **type**: 'AzureBlobStorage' (Required)
* **typeProperties**: [AzureBlobStorageLinkedServiceTypeProperties](#azureblobstoragelinkedservicetypeproperties) (Required)

## AzureBlobStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **accountKind**: string
* **azureCloudType**: any
* **connectionString**: any
* **encryptedCredential**: string
* **sasToken**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **sasUri**: any
* **serviceEndpoint**: string
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any

## AzureDatabricks
### Properties
* **type**: 'AzureDatabricks' (Required)
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required)

## AzureDatabricksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase)
* **authentication**: any
* **domain**: any (Required)
* **encryptedCredential**: any
* **existingClusterId**: any
* **instancePoolId**: any
* **newClusterCustomTags**: [Dictionary<string,Object>](#dictionarystringobject)
* **newClusterDriverNodeType**: any
* **newClusterEnableElasticDisk**: any
* **newClusterInitScripts**: any
* **newClusterLogDestination**: any
* **newClusterNodeType**: any
* **newClusterNumOfWorker**: any
* **newClusterSparkConf**: [Dictionary<string,Object>](#dictionarystringobject)
* **newClusterSparkEnvVars**: [Dictionary<string,Object>](#dictionarystringobject)
* **newClusterVersion**: any
* **policyId**: any
* **workspaceResourceId**: any

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
* **type**: 'AzureDatabricksDeltaLake' (Required)
* **typeProperties**: [AzureDatabricksDetltaLakeLinkedServiceTypeProperties](#azuredatabricksdetltalakelinkedservicetypeproperties) (Required)

## AzureDatabricksDetltaLakeLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase)
* **clusterId**: any
* **domain**: any (Required)
* **encryptedCredential**: any

## AzureDataExplorer
### Properties
* **type**: 'AzureDataExplorer' (Required)
* **typeProperties**: [AzureDataExplorerLinkedServiceTypeProperties](#azuredataexplorerlinkedservicetypeproperties) (Required)

## AzureDataExplorerLinkedServiceTypeProperties
### Properties
* **database**: any (Required)
* **endpoint**: any (Required)
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any

## AzureDataLakeAnalytics
### Properties
* **type**: 'AzureDataLakeAnalytics' (Required)
* **typeProperties**: [AzureDataLakeAnalyticsLinkedServiceTypeProperties](#azuredatalakeanalyticslinkedservicetypeproperties) (Required)

## AzureDataLakeAnalyticsLinkedServiceTypeProperties
### Properties
* **accountName**: any (Required)
* **dataLakeAnalyticsUri**: any
* **encryptedCredential**: any
* **resourceGroupName**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **subscriptionId**: any
* **tenant**: any (Required)

## AzureDataLakeStore
### Properties
* **type**: 'AzureDataLakeStore' (Required)
* **typeProperties**: [AzureDataLakeStoreLinkedServiceTypeProperties](#azuredatalakestorelinkedservicetypeproperties) (Required)

## AzureDataLakeStoreLinkedServiceTypeProperties
### Properties
* **accountName**: any
* **azureCloudType**: any
* **dataLakeStoreUri**: any (Required)
* **encryptedCredential**: any
* **resourceGroupName**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **subscriptionId**: any
* **tenant**: any

## AzureFileStorage
### Properties
* **type**: 'AzureFileStorage' (Required)
* **typeProperties**: [AzureFileStorageLinkedServiceTypeProperties](#azurefilestoragelinkedservicetypeproperties) (Required)

## AzureFileStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **connectionString**: any
* **encryptedCredential**: any
* **fileShare**: any
* **host**: any
* **password**: [SecretBase](#secretbase)
* **sasToken**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **sasUri**: any
* **snapshot**: any
* **userId**: any

## AzureFunction
### Properties
* **type**: 'AzureFunction' (Required)
* **typeProperties**: [AzureFunctionLinkedServiceTypeProperties](#azurefunctionlinkedservicetypeproperties) (Required)

## AzureFunctionLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **functionAppUrl**: any (Required)
* **functionKey**: [SecretBase](#secretbase)

## AzureKeyVault
### Properties
* **type**: 'AzureKeyVault' (Required)
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required)

## AzureKeyVaultLinkedServiceTypeProperties
### Properties
* **baseUrl**: any (Required)

## AzureMariaDB
### Properties
* **type**: 'AzureMariaDB' (Required)
* **typeProperties**: [AzureMariaDBLinkedServiceTypeProperties](#azuremariadblinkedservicetypeproperties) (Required)

## AzureMariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## AzureML
### Properties
* **type**: 'AzureML' (Required)
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required)

## AzureMLLinkedServiceTypeProperties
### Properties
* **apiKey**: [SecretBase](#secretbase) (Required)
* **encryptedCredential**: any
* **mlEndpoint**: any (Required)
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any
* **updateResourceEndpoint**: any

## AzureMLService
### Properties
* **type**: 'AzureMLService' (Required)
* **typeProperties**: [AzureMLServiceLinkedServiceTypeProperties](#azuremlservicelinkedservicetypeproperties) (Required)

## AzureMLServiceLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **mlWorkspaceName**: any (Required)
* **resourceGroupName**: any (Required)
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **subscriptionId**: any (Required)
* **tenant**: any

## AzureMySql
### Properties
* **type**: 'AzureMySql' (Required)
* **typeProperties**: [AzureMySqlLinkedServiceTypeProperties](#azuremysqllinkedservicetypeproperties) (Required)

## AzureMySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## AzurePostgreSql
### Properties
* **type**: 'AzurePostgreSql' (Required)
* **typeProperties**: [AzurePostgreSqlLinkedServiceTypeProperties](#azurepostgresqllinkedservicetypeproperties) (Required)

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## AzureSearch
### Properties
* **type**: 'AzureSearch' (Required)
* **typeProperties**: [AzureSearchLinkedServiceTypeProperties](#azuresearchlinkedservicetypeproperties) (Required)

## AzureSearchLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **key**: [SecretBase](#secretbase)
* **url**: any (Required)

## AzureSqlDatabase
### Properties
* **type**: 'AzureSqlDatabase' (Required)
* **typeProperties**: [AzureSqlDatabaseLinkedServiceTypeProperties](#azuresqldatabaselinkedservicetypeproperties) (Required)

## AzureSqlDatabaseLinkedServiceTypeProperties
### Properties
* **azureCloudType**: any
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any

## AzureSqlDW
### Properties
* **type**: 'AzureSqlDW' (Required)
* **typeProperties**: [AzureSqlDWLinkedServiceTypeProperties](#azuresqldwlinkedservicetypeproperties) (Required)

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **azureCloudType**: any
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any

## AzureSqlMI
### Properties
* **type**: 'AzureSqlMI' (Required)
* **typeProperties**: [AzureSqlMILinkedServiceTypeProperties](#azuresqlmilinkedservicetypeproperties) (Required)

## AzureSqlMILinkedServiceTypeProperties
### Properties
* **azureCloudType**: any
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any

## AzureStorage
### Properties
* **type**: 'AzureStorage' (Required)
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required)

## AzureStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **connectionString**: any
* **encryptedCredential**: string
* **sasToken**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **sasUri**: any

## AzureTableStorage
### Properties
* **type**: 'AzureTableStorage' (Required)
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required)

## Cassandra
### Properties
* **type**: 'Cassandra' (Required)
* **typeProperties**: [CassandraLinkedServiceTypeProperties](#cassandralinkedservicetypeproperties) (Required)

## CassandraLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: [SecretBase](#secretbase)
* **port**: any
* **username**: any

## CommonDataServiceForApps
### Properties
* **type**: 'CommonDataServiceForApps' (Required)
* **typeProperties**: [CommonDataServiceForAppsLinkedServiceTypeProperties](#commondataserviceforappslinkedservicetypeproperties) (Required)

## CommonDataServiceForAppsLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'AADServicePrincipal' | 'Ifd' | 'Office365' (Required)
* **deploymentType**: 'Online' | 'OnPremisesWithIfd' (Required)
* **encryptedCredential**: any
* **hostName**: any
* **organizationName**: any
* **password**: [SecretBase](#secretbase)
* **port**: any
* **servicePrincipalCredential**: [SecretBase](#secretbase)
* **servicePrincipalCredentialType**: any
* **servicePrincipalId**: any
* **serviceUri**: any
* **username**: any

## Concur
### Properties
* **type**: 'Concur' (Required)
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required)

## ConcurLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **connectionProperties**: any
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any (Required)

## CosmosDb
### Properties
* **type**: 'CosmosDb' (Required)
* **typeProperties**: [CosmosDbLinkedServiceTypeProperties](#cosmosdblinkedservicetypeproperties) (Required)

## CosmosDbLinkedServiceTypeProperties
### Properties
* **accountEndpoint**: any
* **accountKey**: [SecretBase](#secretbase)
* **azureCloudType**: any
* **connectionMode**: 'Direct' | 'Gateway'
* **connectionString**: any
* **database**: any
* **encryptedCredential**: any
* **servicePrincipalCredential**: [SecretBase](#secretbase)
* **servicePrincipalCredentialType**: 'ServicePrincipalCert' | 'ServicePrincipalKey'
* **servicePrincipalId**: any
* **tenant**: any

## CosmosDbMongoDbApi
### Properties
* **type**: 'CosmosDbMongoDbApi' (Required)
* **typeProperties**: [CosmosDbMongoDbApiLinkedServiceTypeProperties](#cosmosdbmongodbapilinkedservicetypeproperties) (Required)

## CosmosDbMongoDbApiLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **database**: any (Required)

## Couchbase
### Properties
* **type**: 'Couchbase' (Required)
* **typeProperties**: [CouchbaseLinkedServiceTypeProperties](#couchbaselinkedservicetypeproperties) (Required)

## CouchbaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **credString**: [AzureKeyVaultSecret](#azurekeyvaultsecret)
* **encryptedCredential**: any

## CustomDataSource
### Properties
* **type**: 'CustomDataSource' (Required)
* **typeProperties**: any (Required)

## Db2
### Properties
* **type**: 'Db2' (Required)
* **typeProperties**: [Db2LinkedServiceTypeProperties](#db2linkedservicetypeproperties) (Required)

## Db2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic'
* **certificateCommonName**: any
* **connectionString**: any
* **database**: any
* **encryptedCredential**: any
* **packageCollection**: any
* **password**: [SecretBase](#secretbase)
* **server**: any
* **username**: any

## Drill
### Properties
* **type**: 'Drill' (Required)
* **typeProperties**: [DrillLinkedServiceTypeProperties](#drilllinkedservicetypeproperties) (Required)

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## Dynamics
### Properties
* **type**: 'Dynamics' (Required)
* **typeProperties**: [DynamicsLinkedServiceTypeProperties](#dynamicslinkedservicetypeproperties) (Required)

## DynamicsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required)
* **deploymentType**: any (Required)
* **encryptedCredential**: any
* **hostName**: any
* **organizationName**: any
* **password**: [SecretBase](#secretbase)
* **port**: any
* **servicePrincipalCredential**: [SecretBase](#secretbase)
* **servicePrincipalCredentialType**: any
* **servicePrincipalId**: any
* **serviceUri**: any
* **username**: any

## DynamicsAX
### Properties
* **type**: 'DynamicsAX' (Required)
* **typeProperties**: [DynamicsAXLinkedServiceTypeProperties](#dynamicsaxlinkedservicetypeproperties) (Required)

## DynamicsAXLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any (Required)
* **encryptedCredential**: any
* **servicePrincipalId**: any (Required)
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required)
* **tenant**: any (Required)
* **url**: any (Required)

## DynamicsCrm
### Properties
* **type**: 'DynamicsCrm' (Required)
* **typeProperties**: [DynamicsCrmLinkedServiceTypeProperties](#dynamicscrmlinkedservicetypeproperties) (Required)

## DynamicsCrmLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'AADServicePrincipal' | 'Ifd' | 'Office365' (Required)
* **deploymentType**: 'Online' | 'OnPremisesWithIfd' (Required)
* **encryptedCredential**: any
* **hostName**: any
* **organizationName**: any
* **password**: [SecretBase](#secretbase)
* **port**: any
* **servicePrincipalCredential**: [SecretBase](#secretbase)
* **servicePrincipalCredentialType**: any
* **servicePrincipalId**: any
* **serviceUri**: any
* **username**: any

## Eloqua
### Properties
* **type**: 'Eloqua' (Required)
* **typeProperties**: [EloquaLinkedServiceTypeProperties](#eloqualinkedservicetypeproperties) (Required)

## EloquaLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **password**: [SecretBase](#secretbase)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any (Required)

## FileServer
### Properties
* **type**: 'FileServer' (Required)
* **typeProperties**: [FileServerLinkedServiceTypeProperties](#fileserverlinkedservicetypeproperties) (Required)

## FileServerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: [SecretBase](#secretbase)
* **userId**: any

## FtpServer
### Properties
* **type**: 'FtpServer' (Required)
* **typeProperties**: [FtpServerLinkedServiceTypeProperties](#ftpserverlinkedservicetypeproperties) (Required)

## FtpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic'
* **enableServerCertificateValidation**: any
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: [SecretBase](#secretbase)
* **port**: any
* **userName**: any

## GoogleAdWords
### Properties
* **type**: 'GoogleAdWords' (Required)
* **typeProperties**: [GoogleAdWordsLinkedServiceTypeProperties](#googleadwordslinkedservicetypeproperties) (Required)

## GoogleAdWordsLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required)
* **clientCustomerID**: any (Required)
* **clientId**: any
* **clientSecret**: [SecretBase](#secretbase)
* **developerToken**: [SecretBase](#secretbase) (Required)
* **email**: any
* **encryptedCredential**: any
* **keyFilePath**: any
* **refreshToken**: [SecretBase](#secretbase)
* **trustedCertPath**: any
* **useSystemTrustStore**: any

## GoogleBigQuery
### Properties
* **type**: 'GoogleBigQuery' (Required)
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required)

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required)
* **clientId**: any
* **clientSecret**: [SecretBase](#secretbase)
* **email**: any
* **encryptedCredential**: any
* **keyFilePath**: any
* **project**: any (Required)
* **refreshToken**: [SecretBase](#secretbase)
* **requestGoogleDriveScope**: any
* **trustedCertPath**: any
* **useSystemTrustStore**: any

## GoogleCloudStorage
### Properties
* **type**: 'GoogleCloudStorage' (Required)
* **typeProperties**: [GoogleCloudStorageLinkedServiceTypeProperties](#googlecloudstoragelinkedservicetypeproperties) (Required)

## GoogleCloudStorageLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any
* **encryptedCredential**: any
* **secretAccessKey**: [SecretBase](#secretbase)
* **serviceUrl**: any

## Greenplum
### Properties
* **type**: 'Greenplum' (Required)
* **typeProperties**: [GreenplumLinkedServiceTypeProperties](#greenplumlinkedservicetypeproperties) (Required)

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## HBase
### Properties
* **type**: 'HBase' (Required)
* **typeProperties**: [HBaseLinkedServiceTypeProperties](#hbaselinkedservicetypeproperties) (Required)

## HBaseLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'Basic' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **httpPath**: any
* **password**: [SecretBase](#secretbase)
* **port**: any
* **trustedCertPath**: any
* **username**: any

## Hdfs
### Properties
* **type**: 'Hdfs' (Required)
* **typeProperties**: [HdfsLinkedServiceTypeProperties](#hdfslinkedservicetypeproperties) (Required)

## HdfsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **url**: any (Required)
* **userName**: any

## HDInsight
### Properties
* **type**: 'HDInsight' (Required)
* **typeProperties**: [HDInsightLinkedServiceTypeProperties](#hdinsightlinkedservicetypeproperties) (Required)

## HDInsightLinkedServiceTypeProperties
### Properties
* **clusterUri**: any (Required)
* **encryptedCredential**: any
* **fileSystem**: any
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference)
* **isEspEnabled**: any
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference)
* **password**: [SecretBase](#secretbase)
* **userName**: any

## HDInsightOnDemand
### Properties
* **type**: 'HDInsightOnDemand' (Required)
* **typeProperties**: [HDInsightOnDemandLinkedServiceTypeProperties](#hdinsightondemandlinkedservicetypeproperties) (Required)

## HDInsightOnDemandLinkedServiceTypeProperties
### Properties
* **additionalLinkedServiceNames**: [LinkedServiceReference](#linkedservicereference)[]
* **clusterNamePrefix**: any
* **clusterPassword**: [SecretBase](#secretbase)
* **clusterResourceGroup**: any (Required)
* **clusterSize**: any (Required)
* **clusterSshPassword**: [SecretBase](#secretbase)
* **clusterSshUserName**: any
* **clusterType**: any
* **clusterUserName**: any
* **coreConfiguration**: any
* **dataNodeSize**: any
* **encryptedCredential**: any
* **hBaseConfiguration**: any
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference)
* **hdfsConfiguration**: any
* **headNodeSize**: any
* **hiveConfiguration**: any
* **hostSubscriptionId**: any (Required)
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required)
* **mapReduceConfiguration**: any
* **oozieConfiguration**: any
* **scriptActions**: [ScriptAction](#scriptaction)[]
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
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

## Hive
### Properties
* **type**: 'Hive' (Required)
* **typeProperties**: [HiveLinkedServiceTypeProperties](#hivelinkedservicetypeproperties) (Required)

## HiveLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **httpPath**: any
* **password**: [SecretBase](#secretbase)
* **port**: any
* **serverType**: 'HiveServer1' | 'HiveServer2' | 'HiveThriftServer'
* **serviceDiscoveryMode**: any
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL'
* **trustedCertPath**: any
* **useNativeQuery**: any
* **username**: any
* **useSystemTrustStore**: any
* **zooKeeperNameSpace**: any

## HttpServer
### Properties
* **type**: 'HttpServer' (Required)
* **typeProperties**: [HttpLinkedServiceTypeProperties](#httplinkedservicetypeproperties) (Required)

## HttpLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | 'ClientCertificate' | 'Digest' | 'Windows'
* **authHeaders**: any
* **certThumbprint**: any
* **embeddedCertData**: any
* **enableServerCertificateValidation**: any
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **url**: any (Required)
* **userName**: any

## Hubspot
### Properties
* **type**: 'Hubspot' (Required)
* **typeProperties**: [HubspotLinkedServiceTypeProperties](#hubspotlinkedservicetypeproperties) (Required)

## HubspotLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase)
* **clientId**: any (Required)
* **clientSecret**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **refreshToken**: [SecretBase](#secretbase)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Impala
### Properties
* **type**: 'Impala' (Required)
* **typeProperties**: [ImpalaLinkedServiceTypeProperties](#impalalinkedservicetypeproperties) (Required)

## ImpalaLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'SASLUsername' | 'UsernameAndPassword' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: [SecretBase](#secretbase)
* **port**: any
* **trustedCertPath**: any
* **username**: any
* **useSystemTrustStore**: any

## Informix
### Properties
* **type**: 'Informix' (Required)
* **typeProperties**: [InformixLinkedServiceTypeProperties](#informixlinkedservicetypeproperties) (Required)

## InformixLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **connectionString**: any (Required)
* **credential**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **userName**: any

## Jira
### Properties
* **type**: 'Jira' (Required)
* **typeProperties**: [JiraLinkedServiceTypeProperties](#jiralinkedservicetypeproperties) (Required)

## JiraLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: [SecretBase](#secretbase)
* **port**: any
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any (Required)

## Magento
### Properties
* **type**: 'Magento' (Required)
* **typeProperties**: [MagentoLinkedServiceTypeProperties](#magentolinkedservicetypeproperties) (Required)

## MagentoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **host**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## MariaDB
### Properties
* **type**: 'MariaDB' (Required)
* **typeProperties**: [MariaDBLinkedServiceTypeProperties](#mariadblinkedservicetypeproperties) (Required)

## MariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## Marketo
### Properties
* **type**: 'Marketo' (Required)
* **typeProperties**: [MarketoLinkedServiceTypeProperties](#marketolinkedservicetypeproperties) (Required)

## MarketoLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **clientSecret**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## MicrosoftAccess
### Properties
* **type**: 'MicrosoftAccess' (Required)
* **typeProperties**: [MicrosoftAccessLinkedServiceTypeProperties](#microsoftaccesslinkedservicetypeproperties) (Required)

## MicrosoftAccessLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **connectionString**: any (Required)
* **credential**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **userName**: any

## MongoDb
### Properties
* **type**: 'MongoDb' (Required)
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required)

## MongoDbLinkedServiceTypeProperties
### Properties
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'Basic'
* **authSource**: any
* **databaseName**: any (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **port**: any
* **server**: any (Required)
* **username**: any

## MongoDbAtlas
### Properties
* **type**: 'MongoDbAtlas' (Required)
* **typeProperties**: [MongoDbAtlasLinkedServiceTypeProperties](#mongodbatlaslinkedservicetypeproperties) (Required)

## MongoDbAtlasLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **database**: any (Required)

## MongoDbV2
### Properties
* **type**: 'MongoDbV2' (Required)
* **typeProperties**: [MongoDbV2LinkedServiceTypeProperties](#mongodbv2linkedservicetypeproperties) (Required)

## MongoDbV2LinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **database**: any (Required)

## MySql
### Properties
* **type**: 'MySql' (Required)
* **typeProperties**: [MySqlLinkedServiceTypeProperties](#mysqllinkedservicetypeproperties) (Required)

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## Netezza
### Properties
* **type**: 'Netezza' (Required)
* **typeProperties**: [NetezzaLinkedServiceTypeProperties](#netezzalinkedservicetypeproperties) (Required)

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## OData
### Properties
* **type**: 'OData' (Required)
* **typeProperties**: [ODataLinkedServiceTypeProperties](#odatalinkedservicetypeproperties) (Required)

## ODataLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any
* **aadServicePrincipalCredentialType**: 'ServicePrincipalCert' | 'ServicePrincipalKey'
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' | 'Windows'
* **authHeaders**: any
* **azureCloudType**: any
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **servicePrincipalEmbeddedCert**: [SecretBase](#secretbase)
* **servicePrincipalEmbeddedCertPassword**: [SecretBase](#secretbase)
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any
* **url**: any (Required)
* **userName**: any

## Odbc
### Properties
* **type**: 'Odbc' (Required)
* **typeProperties**: [OdbcLinkedServiceTypeProperties](#odbclinkedservicetypeproperties) (Required)

## OdbcLinkedServiceTypeProperties
### Properties
* **authenticationType**: any
* **connectionString**: any (Required)
* **credential**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **userName**: any

## Office365
### Properties
* **type**: 'Office365' (Required)
* **typeProperties**: [Office365LinkedServiceTypeProperties](#office365linkedservicetypeproperties) (Required)

## Office365LinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **office365TenantId**: any (Required)
* **servicePrincipalId**: any (Required)
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required)
* **servicePrincipalTenantId**: any (Required)

## Oracle
### Properties
* **type**: 'Oracle' (Required)
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required)

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## OracleCloudStorage
### Properties
* **type**: 'OracleCloudStorage' (Required)
* **typeProperties**: [OracleCloudStorageLinkedServiceTypeProperties](#oraclecloudstoragelinkedservicetypeproperties) (Required)

## OracleCloudStorageLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any
* **encryptedCredential**: any
* **secretAccessKey**: [SecretBase](#secretbase)
* **serviceUrl**: any

## OracleServiceCloud
### Properties
* **type**: 'OracleServiceCloud' (Required)
* **typeProperties**: [OracleServiceCloudLinkedServiceTypeProperties](#oracleservicecloudlinkedservicetypeproperties) (Required)

## OracleServiceCloudLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: [SecretBase](#secretbase) (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any (Required)

## Paypal
### Properties
* **type**: 'Paypal' (Required)
* **typeProperties**: [PaypalLinkedServiceTypeProperties](#paypallinkedservicetypeproperties) (Required)

## PaypalLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **clientSecret**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **host**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Phoenix
### Properties
* **type**: 'Phoenix' (Required)
* **typeProperties**: [PhoenixLinkedServiceTypeProperties](#phoenixlinkedservicetypeproperties) (Required)

## PhoenixLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **httpPath**: any
* **password**: [SecretBase](#secretbase)
* **port**: any
* **trustedCertPath**: any
* **username**: any
* **useSystemTrustStore**: any

## PostgreSql
### Properties
* **type**: 'PostgreSql' (Required)
* **typeProperties**: [PostgreSqlLinkedServiceTypeProperties](#postgresqllinkedservicetypeproperties) (Required)

## PostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## Presto
### Properties
* **type**: 'Presto' (Required)
* **typeProperties**: [PrestoLinkedServiceTypeProperties](#prestolinkedservicetypeproperties) (Required)

## PrestoLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'LDAP' (Required)
* **catalog**: any (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **password**: [SecretBase](#secretbase)
* **port**: any
* **serverVersion**: any (Required)
* **timeZoneID**: any
* **trustedCertPath**: any
* **username**: any
* **useSystemTrustStore**: any

## QuickBooks
### Properties
* **type**: 'QuickBooks' (Required)
* **typeProperties**: [QuickBooksLinkedServiceTypeProperties](#quickbookslinkedservicetypeproperties) (Required)

## QuickBooksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase)
* **accessTokenSecret**: [SecretBase](#secretbase)
* **companyId**: any
* **connectionProperties**: any
* **consumerKey**: any
* **consumerSecret**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **endpoint**: any
* **useEncryptedEndpoints**: any

## Responsys
### Properties
* **type**: 'Responsys' (Required)
* **typeProperties**: [ResponsysLinkedServiceTypeProperties](#responsyslinkedservicetypeproperties) (Required)

## ResponsysLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **clientSecret**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## RestService
### Properties
* **type**: 'RestService' (Required)
* **typeProperties**: [RestServiceLinkedServiceTypeProperties](#restservicelinkedservicetypeproperties) (Required)

## RestServiceLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' (Required)
* **authHeaders**: any
* **azureCloudType**: any
* **enableServerCertificateValidation**: any
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any
* **url**: any (Required)
* **userName**: any

## Salesforce
### Properties
* **type**: 'Salesforce' (Required)
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required)

## SalesforceLinkedServiceTypeProperties
### Properties
* **apiVersion**: any
* **encryptedCredential**: any
* **environmentUrl**: any
* **password**: [SecretBase](#secretbase)
* **securityToken**: [SecretBase](#secretbase)
* **username**: any

## SalesforceMarketingCloud
### Properties
* **type**: 'SalesforceMarketingCloud' (Required)
* **typeProperties**: [SalesforceMarketingCloudLinkedServiceTypeProperties](#salesforcemarketingcloudlinkedservicetypeproperties) (Required)

## SalesforceMarketingCloudLinkedServiceTypeProperties
### Properties
* **clientId**: any
* **clientSecret**: [SecretBase](#secretbase)
* **connectionProperties**: any
* **encryptedCredential**: any
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## SalesforceServiceCloud
### Properties
* **type**: 'SalesforceServiceCloud' (Required)
* **typeProperties**: [SalesforceServiceCloudLinkedServiceTypeProperties](#salesforceservicecloudlinkedservicetypeproperties) (Required)

## SalesforceServiceCloudLinkedServiceTypeProperties
### Properties
* **apiVersion**: any
* **encryptedCredential**: any
* **environmentUrl**: any
* **extendedProperties**: any
* **password**: [SecretBase](#secretbase)
* **securityToken**: [SecretBase](#secretbase)
* **username**: any

## SapBW
### Properties
* **type**: 'SapBW' (Required)
* **typeProperties**: [SapBWLinkedServiceTypeProperties](#sapbwlinkedservicetypeproperties) (Required)

## SapBWLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **server**: any (Required)
* **systemNumber**: any (Required)
* **userName**: any

## SapCloudForCustomer
### Properties
* **type**: 'SapCloudForCustomer' (Required)
* **typeProperties**: [SapCloudForCustomerLinkedServiceTypeProperties](#sapcloudforcustomerlinkedservicetypeproperties) (Required)

## SapCloudForCustomerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **url**: any (Required)
* **username**: any

## SapEcc
### Properties
* **type**: 'SapEcc' (Required)
* **typeProperties**: [SapEccLinkedServiceTypeProperties](#sapecclinkedservicetypeproperties) (Required)

## SapEccLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string
* **password**: [SecretBase](#secretbase)
* **url**: string (Required)
* **username**: string

## SapHana
### Properties
* **type**: 'SapHana' (Required)
* **typeProperties**: [SapHanaLinkedServiceProperties](#saphanalinkedserviceproperties) (Required)

## SapHanaLinkedServiceProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows'
* **connectionString**: any
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **server**: any
* **userName**: any

## SapOpenHub
### Properties
* **type**: 'SapOpenHub' (Required)
* **typeProperties**: [SapOpenHubLinkedServiceTypeProperties](#sapopenhublinkedservicetypeproperties) (Required)

## SapOpenHubLinkedServiceTypeProperties
### Properties
* **clientId**: any
* **encryptedCredential**: any
* **language**: any
* **logonGroup**: any
* **messageServer**: any
* **messageServerService**: any
* **password**: [SecretBase](#secretbase)
* **server**: any
* **systemId**: any
* **systemNumber**: any
* **userName**: any

## SapTable
### Properties
* **type**: 'SapTable' (Required)
* **typeProperties**: [SapTableLinkedServiceTypeProperties](#saptablelinkedservicetypeproperties) (Required)

## SapTableLinkedServiceTypeProperties
### Properties
* **clientId**: any
* **encryptedCredential**: any
* **language**: any
* **logonGroup**: any
* **messageServer**: any
* **messageServerService**: any
* **password**: [SecretBase](#secretbase)
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
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required)

## ServiceNowLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'OAuth2' (Required)
* **clientId**: any
* **clientSecret**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **password**: [SecretBase](#secretbase)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any
* **username**: any

## Sftp
### Properties
* **type**: 'Sftp' (Required)
* **typeProperties**: [SftpServerLinkedServiceTypeProperties](#sftpserverlinkedservicetypeproperties) (Required)

## SftpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'MultiFactor' | 'SshPublicKey'
* **encryptedCredential**: any
* **host**: any (Required)
* **hostKeyFingerprint**: any
* **passPhrase**: [SecretBase](#secretbase)
* **password**: [SecretBase](#secretbase)
* **port**: any
* **privateKeyContent**: [SecretBase](#secretbase)
* **privateKeyPath**: any
* **skipHostKeyValidation**: any
* **userName**: any

## SharePointOnlineList
### Properties
* **type**: 'SharePointOnlineList' (Required)
* **typeProperties**: [SharePointOnlineListLinkedServiceTypeProperties](#sharepointonlinelistlinkedservicetypeproperties) (Required)

## SharePointOnlineListLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **servicePrincipalId**: any (Required)
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required)
* **siteUrl**: any (Required)
* **tenantId**: any (Required)

## Shopify
### Properties
* **type**: 'Shopify' (Required)
* **typeProperties**: [ShopifyLinkedServiceTypeProperties](#shopifylinkedservicetypeproperties) (Required)

## ShopifyLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **host**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Snowflake
### Properties
* **type**: 'Snowflake' (Required)
* **typeProperties**: [SnowflakeLinkedServiceTypeProperties](#snowflakelinkedservicetypeproperties) (Required)

## SnowflakeLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## Spark
### Properties
* **type**: 'Spark' (Required)
* **typeProperties**: [SparkLinkedServiceTypeProperties](#sparklinkedservicetypeproperties) (Required)

## SparkLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **host**: any (Required)
* **httpPath**: any
* **password**: [SecretBase](#secretbase)
* **port**: any (Required)
* **serverType**: 'SharkServer' | 'SharkServer2' | 'SparkThriftServer'
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL'
* **trustedCertPath**: any
* **username**: any
* **useSystemTrustStore**: any

## SqlServer
### Properties
* **type**: 'SqlServer' (Required)
* **typeProperties**: [SqlServerLinkedServiceTypeProperties](#sqlserverlinkedservicetypeproperties) (Required)

## SqlServerLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **userName**: any

## Square
### Properties
* **type**: 'Square' (Required)
* **typeProperties**: [SquareLinkedServiceTypeProperties](#squarelinkedservicetypeproperties) (Required)

## SquareLinkedServiceTypeProperties
### Properties
* **clientId**: any
* **clientSecret**: [SecretBase](#secretbase)
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
* **typeProperties**: [SybaseLinkedServiceTypeProperties](#sybaselinkedservicetypeproperties) (Required)

## SybaseLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows'
* **database**: any (Required)
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **schema**: any
* **server**: any (Required)
* **username**: any

## Teradata
### Properties
* **type**: 'Teradata' (Required)
* **typeProperties**: [TeradataLinkedServiceTypeProperties](#teradatalinkedservicetypeproperties) (Required)

## TeradataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows'
* **connectionString**: any
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **server**: any
* **username**: any

## Vertica
### Properties
* **type**: 'Vertica' (Required)
* **typeProperties**: [VerticaLinkedServiceTypeProperties](#verticalinkedservicetypeproperties) (Required)

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **pwd**: [AzureKeyVaultSecret](#azurekeyvaultsecret)

## Web
### Properties
* **type**: 'Web' (Required)
* **typeProperties**: [WebLinkedServiceTypeProperties](#weblinkedservicetypeproperties) (Required)

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
* **password**: [SecretBase](#secretbase) (Required)
* **username**: any (Required)

### ClientCertificate
#### Properties
* **authenticationType**: 'ClientCertificate' (Required)
* **password**: [SecretBase](#secretbase) (Required)
* **pfx**: [SecretBase](#secretbase) (Required)


## Anonymous
### Properties
* **authenticationType**: 'Anonymous' (Required)

## Basic
### Properties
* **authenticationType**: 'Basic' (Required)
* **password**: [SecretBase](#secretbase) (Required)
* **username**: any (Required)

## ClientCertificate
### Properties
* **authenticationType**: 'ClientCertificate' (Required)
* **password**: [SecretBase](#secretbase) (Required)
* **pfx**: [SecretBase](#secretbase) (Required)

## Xero
### Properties
* **type**: 'Xero' (Required)
* **typeProperties**: [XeroLinkedServiceTypeProperties](#xerolinkedservicetypeproperties) (Required)

## XeroLinkedServiceTypeProperties
### Properties
* **connectionProperties**: any
* **consumerKey**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **host**: any
* **privateKey**: [SecretBase](#secretbase)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Zoho
### Properties
* **type**: 'Zoho' (Required)
* **typeProperties**: [ZohoLinkedServiceTypeProperties](#zoholinkedservicetypeproperties) (Required)

## ZohoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase)
* **connectionProperties**: any
* **encryptedCredential**: any
* **endpoint**: any
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## ManagedVirtualNetwork
### Properties
* **alias**: string (ReadOnly)
* **vNetId**: string (ReadOnly)
### Additional Properties
* **Additional Properties Type**: any

## ManagedPrivateEndpoint
### Properties
* **connectionState**: [ConnectionStateProperties](#connectionstateproperties)
* **fqdns**: string[]
* **groupId**: string
* **isReserved**: bool (ReadOnly)
* **privateLinkResourceId**: string
* **provisioningState**: string (ReadOnly)
### Additional Properties
* **Additional Properties Type**: any

## ConnectionStateProperties
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: string (ReadOnly)

## Pipeline
### Properties
* **activities**: [Activity](#activity)[]
* **annotations**: any[]
* **concurrency**: int
* **description**: string
* **folder**: [schemas:568_folder](#schemas568folder)
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification)
* **policy**: [PipelinePolicy](#pipelinepolicy)
* **runDimensions**: [Dictionary<string,Object>](#dictionarystringobject)
* **variables**: [Dictionary<string,VariableSpecification>](#dictionarystringvariablespecification)

## Activity
* **Discriminator**: type
### Base Properties
* **dependsOn**: [ActivityDependency](#activitydependency)[]
* **description**: string
* **name**: string (Required)
* **userProperties**: [UserProperty](#userproperty)[]
### Container
#### Properties
* **type**: 'Container' (Required)

### Execution
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference)
* **policy**: [ActivityPolicy](#activitypolicy)
* **type**: 'Execution' (Required)


## ActivityDependency
### Properties
* **activity**: string (Required)
* **dependencyConditions**: 'Completed' | 'Failed' | 'Skipped' | 'Succeeded'[] (Required)
### Additional Properties
* **Additional Properties Type**: any

## UserProperty
### Properties
* **name**: string (Required)
* **value**: any (Required)

## Container
### Properties
* **type**: 'Container' (Required)

## Execution
### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference)
* **policy**: [ActivityPolicy](#activitypolicy)
* **type**: 'Execution' (Required)

## ActivityPolicy
### Properties
* **retry**: any
* **retryIntervalInSeconds**: int
* **secureInput**: bool
* **secureOutput**: bool
* **timeout**: any
### Additional Properties
* **Additional Properties Type**: any

## schemas:568_folder
### Properties
* **name**: string

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## PipelinePolicy
### Properties
* **elapsedTimeMetric**: [PipelineElapsedTimeMetricPolicy](#pipelineelapsedtimemetricpolicy)

## PipelineElapsedTimeMetricPolicy
### Properties
* **duration**: any

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
* **defaultValue**: any
* **type**: 'Array' | 'Bool' | 'String' (Required)

## Trigger
* **Discriminator**: type
### Base Properties
* **annotations**: any[]
* **description**: string
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' (ReadOnly)
### ChainingTrigger
#### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required)
* **type**: 'ChainingTrigger' (Required)
* **typeProperties**: [schemas:895_typeProperties](#schemas895typeproperties) (Required)

### MultiplePipelineTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]
* **type**: 'MultiplePipelineTrigger' (Required)

### RerunTumblingWindowTrigger
#### Properties
* **type**: 'RerunTumblingWindowTrigger' (Required)
* **typeProperties**: [schemas:894_typeProperties](#schemas894typeproperties) (Required)

### TumblingWindowTrigger
#### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required)
* **type**: 'TumblingWindowTrigger' (Required)
* **typeProperties**: [schemas:886_typeProperties](#schemas886typeproperties) (Required)


## ChainingTrigger
### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required)
* **type**: 'ChainingTrigger' (Required)
* **typeProperties**: [schemas:895_typeProperties](#schemas895typeproperties) (Required)

## TriggerPipelineReference
### Properties
* **parameters**: [Dictionary<string,Object>](#dictionarystringobject)
* **pipelineReference**: [PipelineReference](#pipelinereference)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PipelineReference
### Properties
* **name**: string
* **referenceName**: string (Required)
* **type**: string (Required)

## schemas:895_typeProperties
### Properties
* **dependsOn**: [PipelineReference](#pipelinereference)[] (Required)
* **runDimension**: string (Required)

## MultiplePipelineTrigger
### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]
* **type**: 'MultiplePipelineTrigger' (Required)

## RerunTumblingWindowTrigger
### Properties
* **type**: 'RerunTumblingWindowTrigger' (Required)
* **typeProperties**: [schemas:894_typeProperties](#schemas894typeproperties) (Required)

## schemas:894_typeProperties
### Properties
* **parentTrigger**: any (Required)
* **requestedEndTime**: string (Required)
* **requestedStartTime**: string (Required)
* **rerunConcurrency**: int (Required)

## TumblingWindowTrigger
### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required)
* **type**: 'TumblingWindowTrigger' (Required)
* **typeProperties**: [schemas:886_typeProperties](#schemas886typeproperties) (Required)

## schemas:886_typeProperties
### Properties
* **delay**: any
* **dependsOn**: [DependencyReference](#dependencyreference)[]
* **endTime**: string
* **frequency**: 'Hour' | 'Minute' | 'Month' (Required)
* **interval**: int (Required)
* **maxConcurrency**: int (Required)
* **retryPolicy**: [RetryPolicy](#retrypolicy)
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
* **referenceTrigger**: [TriggerReference](#triggerreference) (Required)
* **type**: 'TriggerDependencyReference' (Required)


## SelfDependencyTumblingWindowTriggerReference
### Properties
* **offset**: string (Required)
* **size**: string
* **type**: 'SelfDependencyTumblingWindowTriggerReference' (Required)

## TriggerDependencyReference
### Properties
* **referenceTrigger**: [TriggerReference](#triggerreference) (Required)
* **type**: 'TriggerDependencyReference' (Required)

## TriggerReference
### Properties
* **referenceName**: string (Required)
* **type**: string (Required)

## RetryPolicy
### Properties
* **count**: any
* **intervalInSeconds**: int

