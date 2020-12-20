# Microsoft.DataFactory @ 2017-09-01-preview

## Resource Microsoft.DataFactory/factories@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: FactoryIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FactoryProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/datasets@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Dataset (Required)
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/integrationRuntimes@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationRuntime (Required)
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/linkedservices@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkedService (Required)
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/pipelines@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Pipeline (Required)
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/triggers@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Trigger (Required)
* **type**: 'Microsoft.DataFactory/factories/triggers' (ReadOnly, DeployTimeConstant)

## Function listAuthKeys (Microsoft.DataFactory/factories/integrationRuntimes@2017-09-01-preview
* **Resource**: Microsoft.DataFactory/factories/integrationRuntimes@2017-09-01-preview
* **Output**: IntegrationRuntimeAuthKeys

## FactoryIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string (Required)

## FactoryProperties
### Properties
* **createTime**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **version**: string (ReadOnly)
* **vstsConfiguration**: FactoryVSTSConfiguration

## FactoryVSTSConfiguration
### Properties
* **accountName**: string
* **collaborationBranch**: string
* **lastCommitId**: string
* **projectName**: string
* **repositoryName**: string
* **rootFolder**: string
* **tenantId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dataset
* **Discriminator**: type
### Base Properties
* **annotations**: any[]
* **description**: string
* **linkedServiceName**: LinkedServiceReference (Required)
* **parameters**: Dictionary<string,ParameterSpecification>
* **structure**: any
### AmazonMWSObject
#### Properties
* **type**: 'AmazonMWSObject' (Required)

### AmazonS3Object
#### Properties
* **type**: 'AmazonS3Object' (Required)
* **typeProperties**: AmazonS3DatasetTypeProperties (Required)

### AzureBlob
#### Properties
* **type**: 'AzureBlob' (Required)
* **typeProperties**: AzureBlobDatasetTypeProperties (Required)

### AzureDataLakeStoreFile
#### Properties
* **type**: 'AzureDataLakeStoreFile' (Required)
* **typeProperties**: AzureDataLakeStoreDatasetTypeProperties (Required)

### AzureMySqlTable
#### Properties
* **type**: 'AzureMySqlTable' (Required)
* **typeProperties**: AzureMySqlTableDatasetTypeProperties (Required)

### AzurePostgreSqlTable
#### Properties
* **type**: 'AzurePostgreSqlTable' (Required)

### AzureSearchIndex
#### Properties
* **type**: 'AzureSearchIndex' (Required)
* **typeProperties**: AzureSearchIndexDatasetTypeProperties (Required)

### AzureSqlDWTable
#### Properties
* **type**: 'AzureSqlDWTable' (Required)
* **typeProperties**: AzureSqlDWTableDatasetTypeProperties (Required)

### AzureSqlTable
#### Properties
* **type**: 'AzureSqlTable' (Required)
* **typeProperties**: AzureSqlTableDatasetTypeProperties (Required)

### AzureTable
#### Properties
* **type**: 'AzureTable' (Required)
* **typeProperties**: AzureTableDatasetTypeProperties (Required)

### CassandraTable
#### Properties
* **type**: 'CassandraTable' (Required)
* **typeProperties**: CassandraTableDatasetTypeProperties (Required)

### ConcurObject
#### Properties
* **type**: 'ConcurObject' (Required)

### CouchbaseTable
#### Properties
* **type**: 'CouchbaseTable' (Required)

### DocumentDbCollection
#### Properties
* **type**: 'DocumentDbCollection' (Required)
* **typeProperties**: DocumentDbCollectionDatasetTypeProperties (Required)

### DrillTable
#### Properties
* **type**: 'DrillTable' (Required)

### DynamicsEntity
#### Properties
* **type**: 'DynamicsEntity' (Required)
* **typeProperties**: DynamicsEntityDatasetTypeProperties (Required)

### EloquaObject
#### Properties
* **type**: 'EloquaObject' (Required)

### FileShare
#### Properties
* **type**: 'FileShare' (Required)
* **typeProperties**: FileShareDatasetTypeProperties (Required)

### GoogleBigQueryObject
#### Properties
* **type**: 'GoogleBigQueryObject' (Required)

### GreenplumTable
#### Properties
* **type**: 'GreenplumTable' (Required)

### HBaseObject
#### Properties
* **type**: 'HBaseObject' (Required)

### HiveObject
#### Properties
* **type**: 'HiveObject' (Required)

### HttpFile
#### Properties
* **type**: 'HttpFile' (Required)
* **typeProperties**: HttpDatasetTypeProperties (Required)

### HubspotObject
#### Properties
* **type**: 'HubspotObject' (Required)

### ImpalaObject
#### Properties
* **type**: 'ImpalaObject' (Required)

### JiraObject
#### Properties
* **type**: 'JiraObject' (Required)

### MagentoObject
#### Properties
* **type**: 'MagentoObject' (Required)

### MariaDBTable
#### Properties
* **type**: 'MariaDBTable' (Required)

### MarketoObject
#### Properties
* **type**: 'MarketoObject' (Required)

### MongoDbCollection
#### Properties
* **type**: 'MongoDbCollection' (Required)
* **typeProperties**: MongoDbCollectionDatasetTypeProperties (Required)

### NetezzaTable
#### Properties
* **type**: 'NetezzaTable' (Required)

### ODataResource
#### Properties
* **type**: 'ODataResource' (Required)
* **typeProperties**: ODataResourceDatasetTypeProperties (Required)

### OracleTable
#### Properties
* **type**: 'OracleTable' (Required)
* **typeProperties**: OracleTableDatasetTypeProperties (Required)

### PaypalObject
#### Properties
* **type**: 'PaypalObject' (Required)

### PhoenixObject
#### Properties
* **type**: 'PhoenixObject' (Required)

### PrestoObject
#### Properties
* **type**: 'PrestoObject' (Required)

### QuickBooksObject
#### Properties
* **type**: 'QuickBooksObject' (Required)

### RelationalTable
#### Properties
* **type**: 'RelationalTable' (Required)
* **typeProperties**: RelationalTableDatasetTypeProperties (Required)

### ResponsysObject
#### Properties
* **type**: 'ResponsysObject' (Required)

### SalesforceMarketingCloudObject
#### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required)

### SalesforceObject
#### Properties
* **type**: 'SalesforceObject' (Required)
* **typeProperties**: SalesforceObjectDatasetTypeProperties (Required)

### SapCloudForCustomerResource
#### Properties
* **type**: 'SapCloudForCustomerResource' (Required)
* **typeProperties**: SapCloudForCustomerResourceDatasetTypeProperties (Required)

### SapEccResource
#### Properties
* **type**: 'SapEccResource' (Required)
* **typeProperties**: SapEccResourceDatasetTypeProperties (Required)

### ServiceNowObject
#### Properties
* **type**: 'ServiceNowObject' (Required)

### ShopifyObject
#### Properties
* **type**: 'ShopifyObject' (Required)

### SparkObject
#### Properties
* **type**: 'SparkObject' (Required)

### SqlServerTable
#### Properties
* **type**: 'SqlServerTable' (Required)
* **typeProperties**: SqlServerTableDatasetTypeProperties (Required)

### SquareObject
#### Properties
* **type**: 'SquareObject' (Required)

### VerticaTable
#### Properties
* **type**: 'VerticaTable' (Required)

### WebTable
#### Properties
* **type**: 'WebTable' (Required)
* **typeProperties**: WebTableDatasetTypeProperties (Required)

### XeroObject
#### Properties
* **type**: 'XeroObject' (Required)

### ZohoObject
#### Properties
* **type**: 'ZohoObject' (Required)


## LinkedServiceReference
### Properties
* **parameters**: Dictionary<string,Object>
* **referenceName**: string (Required)
* **type**: string (Required)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterSpecification

## ParameterSpecification
### Properties
* **defaultValue**: any
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'SecureString' | 'String' (Required)

## AmazonMWSObject
### Properties
* **type**: 'AmazonMWSObject' (Required)

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

## ZipDeflate
### Properties
* **level**: any
* **type**: 'ZipDeflate' (Required)

## DatasetStorageFormat
* **Discriminator**: type
### Base Properties
* **deserializer**: any
* **serializer**: any

## AzureBlob
### Properties
* **type**: 'AzureBlob' (Required)
* **typeProperties**: AzureBlobDatasetTypeProperties (Required)

## AzureBlobDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **fileName**: any
* **folderPath**: any
* **format**: DatasetStorageFormat
* **tableRootLocation**: any

## AzureDataLakeStoreFile
### Properties
* **type**: 'AzureDataLakeStoreFile' (Required)
* **typeProperties**: AzureDataLakeStoreDatasetTypeProperties (Required)

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **fileName**: any
* **folderPath**: any (Required)
* **format**: DatasetStorageFormat

## AzureMySqlTable
### Properties
* **type**: 'AzureMySqlTable' (Required)
* **typeProperties**: AzureMySqlTableDatasetTypeProperties (Required)

## AzureMySqlTableDatasetTypeProperties
### Properties
* **tableName**: any

## AzurePostgreSqlTable
### Properties
* **type**: 'AzurePostgreSqlTable' (Required)

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
* **typeProperties**: AzureSqlDWTableDatasetTypeProperties (Required)

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## AzureSqlTable
### Properties
* **type**: 'AzureSqlTable' (Required)
* **typeProperties**: AzureSqlTableDatasetTypeProperties (Required)

## AzureSqlTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## AzureTable
### Properties
* **type**: 'AzureTable' (Required)
* **typeProperties**: AzureTableDatasetTypeProperties (Required)

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## CassandraTable
### Properties
* **type**: 'CassandraTable' (Required)
* **typeProperties**: CassandraTableDatasetTypeProperties (Required)

## CassandraTableDatasetTypeProperties
### Properties
* **keyspace**: any
* **tableName**: any

## ConcurObject
### Properties
* **type**: 'ConcurObject' (Required)

## CouchbaseTable
### Properties
* **type**: 'CouchbaseTable' (Required)

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

## DynamicsEntity
### Properties
* **type**: 'DynamicsEntity' (Required)
* **typeProperties**: DynamicsEntityDatasetTypeProperties (Required)

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any

## EloquaObject
### Properties
* **type**: 'EloquaObject' (Required)

## FileShare
### Properties
* **type**: 'FileShare' (Required)
* **typeProperties**: FileShareDatasetTypeProperties (Required)

## FileShareDatasetTypeProperties
### Properties
* **compression**: DatasetCompression
* **fileFilter**: any
* **fileName**: any
* **folderPath**: any
* **format**: DatasetStorageFormat

## GoogleBigQueryObject
### Properties
* **type**: 'GoogleBigQueryObject' (Required)

## GreenplumTable
### Properties
* **type**: 'GreenplumTable' (Required)

## HBaseObject
### Properties
* **type**: 'HBaseObject' (Required)

## HiveObject
### Properties
* **type**: 'HiveObject' (Required)

## HttpFile
### Properties
* **type**: 'HttpFile' (Required)
* **typeProperties**: HttpDatasetTypeProperties (Required)

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

## ImpalaObject
### Properties
* **type**: 'ImpalaObject' (Required)

## JiraObject
### Properties
* **type**: 'JiraObject' (Required)

## MagentoObject
### Properties
* **type**: 'MagentoObject' (Required)

## MariaDBTable
### Properties
* **type**: 'MariaDBTable' (Required)

## MarketoObject
### Properties
* **type**: 'MarketoObject' (Required)

## MongoDbCollection
### Properties
* **type**: 'MongoDbCollection' (Required)
* **typeProperties**: MongoDbCollectionDatasetTypeProperties (Required)

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required)

## NetezzaTable
### Properties
* **type**: 'NetezzaTable' (Required)

## ODataResource
### Properties
* **type**: 'ODataResource' (Required)
* **typeProperties**: ODataResourceDatasetTypeProperties (Required)

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any

## OracleTable
### Properties
* **type**: 'OracleTable' (Required)
* **typeProperties**: OracleTableDatasetTypeProperties (Required)

## OracleTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## PaypalObject
### Properties
* **type**: 'PaypalObject' (Required)

## PhoenixObject
### Properties
* **type**: 'PhoenixObject' (Required)

## PrestoObject
### Properties
* **type**: 'PrestoObject' (Required)

## QuickBooksObject
### Properties
* **type**: 'QuickBooksObject' (Required)

## RelationalTable
### Properties
* **type**: 'RelationalTable' (Required)
* **typeProperties**: RelationalTableDatasetTypeProperties (Required)

## RelationalTableDatasetTypeProperties
### Properties
* **tableName**: any

## ResponsysObject
### Properties
* **type**: 'ResponsysObject' (Required)

## SalesforceMarketingCloudObject
### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required)

## SalesforceObject
### Properties
* **type**: 'SalesforceObject' (Required)
* **typeProperties**: SalesforceObjectDatasetTypeProperties (Required)

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any

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

## ServiceNowObject
### Properties
* **type**: 'ServiceNowObject' (Required)

## ShopifyObject
### Properties
* **type**: 'ShopifyObject' (Required)

## SparkObject
### Properties
* **type**: 'SparkObject' (Required)

## SqlServerTable
### Properties
* **type**: 'SqlServerTable' (Required)
* **typeProperties**: SqlServerTableDatasetTypeProperties (Required)

## SqlServerTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## SquareObject
### Properties
* **type**: 'SquareObject' (Required)

## VerticaTable
### Properties
* **type**: 'VerticaTable' (Required)

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

## ZohoObject
### Properties
* **type**: 'ZohoObject' (Required)

## IntegrationRuntime
* **Discriminator**: type
### Base Properties
* **description**: string
### Managed
#### Properties
* **state**: 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: ManagedIntegrationRuntimeTypeProperties (Required)

### SelfHosted
#### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: LinkedIntegrationRuntimeTypeProperties (Required)


## Managed
### Properties
* **state**: 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: ManagedIntegrationRuntimeTypeProperties (Required)

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: IntegrationRuntimeComputeProperties
* **ssisProperties**: IntegrationRuntimeSsisProperties

## IntegrationRuntimeComputeProperties
### Properties
* **location**: string
* **maxParallelExecutionsPerNode**: int
* **nodeSize**: string
* **numberOfNodes**: int
* **vNetProperties**: IntegrationRuntimeVNetProperties
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeVNetProperties
### Properties
* **subnet**: string
* **vNetId**: string
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: IntegrationRuntimeSsisCatalogInfo
* **customSetupScriptProperties**: IntegrationRuntimeCustomSetupScriptProperties
* **dataProxyProperties**: IntegrationRuntimeDataProxyProperties
* **edition**: 'Enterprise' | 'Standard'
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: SecureString
* **catalogAdminUserName**: string
* **catalogPricingTier**: string
* **catalogServerEndpoint**: string
### Additional Properties
* **Additional Properties Type**: any

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

## SelfHosted
### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: LinkedIntegrationRuntimeTypeProperties (Required)

## LinkedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: LinkedIntegrationRuntimeProperties

## LinkedIntegrationRuntimeProperties
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

### AzureDatabricks
#### Properties
* **type**: 'AzureDatabricks' (Required)
* **typeProperties**: AzureDatabricksLinkedServiceTypeProperties (Required)

### AzureDataLakeAnalytics
#### Properties
* **type**: 'AzureDataLakeAnalytics' (Required)
* **typeProperties**: AzureDataLakeAnalyticsLinkedServiceTypeProperties (Required)

### AzureDataLakeStore
#### Properties
* **type**: 'AzureDataLakeStore' (Required)
* **typeProperties**: AzureDataLakeStoreLinkedServiceTypeProperties (Required)

### AzureKeyVault
#### Properties
* **type**: 'AzureKeyVault' (Required)
* **typeProperties**: AzureKeyVaultLinkedServiceTypeProperties (Required)

### AzureML
#### Properties
* **type**: 'AzureML' (Required)
* **typeProperties**: AzureMLLinkedServiceTypeProperties (Required)

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

### AzureSqlDatabase
#### Properties
* **type**: 'AzureSqlDatabase' (Required)
* **typeProperties**: AzureSqlDatabaseLinkedServiceTypeProperties (Required)

### AzureSqlDW
#### Properties
* **type**: 'AzureSqlDW' (Required)
* **typeProperties**: AzureSqlDWLinkedServiceTypeProperties (Required)

### AzureStorage
#### Properties
* **type**: 'AzureStorage' (Required)
* **typeProperties**: AzureStorageLinkedServiceTypeProperties (Required)

### Cassandra
#### Properties
* **type**: 'Cassandra' (Required)
* **typeProperties**: CassandraLinkedServiceTypeProperties (Required)

### Concur
#### Properties
* **type**: 'Concur' (Required)
* **typeProperties**: ConcurLinkedServiceTypeProperties (Required)

### CosmosDb
#### Properties
* **type**: 'CosmosDb' (Required)
* **typeProperties**: CosmosDbLinkedServiceTypeProperties (Required)

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

### GoogleBigQuery
#### Properties
* **type**: 'GoogleBigQuery' (Required)
* **typeProperties**: GoogleBigQueryLinkedServiceTypeProperties (Required)

### Greenplum
#### Properties
* **type**: 'Greenplum' (Required)
* **typeProperties**: GreenplumLinkedServiceTypeProperties (Required)

### HBase
#### Properties
* **type**: 'HBase' (Required)
* **typeProperties**: HBaseLinkedServiceTypeProperties (Required)

### Hdfs
#### Properties
* **type**: 'Hdfs' (Required)
* **typeProperties**: HdfsLinkedServiceTypeProperties (Required)

### HDInsight
#### Properties
* **type**: 'HDInsight' (Required)
* **typeProperties**: HDInsightLinkedServiceTypeProperties (Required)

### HDInsightOnDemand
#### Properties
* **type**: 'HDInsightOnDemand' (Required)
* **typeProperties**: HDInsightOnDemandLinkedServiceTypeProperties (Required)

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

### MongoDb
#### Properties
* **type**: 'MongoDb' (Required)
* **typeProperties**: MongoDbLinkedServiceTypeProperties (Required)

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

### Oracle
#### Properties
* **type**: 'Oracle' (Required)
* **typeProperties**: OracleLinkedServiceTypeProperties (Required)

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

### Salesforce
#### Properties
* **type**: 'Salesforce' (Required)
* **typeProperties**: SalesforceLinkedServiceTypeProperties (Required)

### SalesforceMarketingCloud
#### Properties
* **type**: 'SalesforceMarketingCloud' (Required)
* **typeProperties**: SalesforceMarketingCloudLinkedServiceTypeProperties (Required)

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

### ServiceNow
#### Properties
* **type**: 'ServiceNow' (Required)
* **typeProperties**: ServiceNowLinkedServiceTypeProperties (Required)

### Sftp
#### Properties
* **type**: 'Sftp' (Required)
* **typeProperties**: SftpServerLinkedServiceTypeProperties (Required)

### Shopify
#### Properties
* **type**: 'Shopify' (Required)
* **typeProperties**: ShopifyLinkedServiceTypeProperties (Required)

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
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,ParameterSpecification>
### Properties
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
* **newClusterNodeType**: any
* **newClusterNumOfWorker**: any
* **newClusterSparkConf**: Dictionary<string,Object>
* **newClusterVersion**: any

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

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
* **dataLakeStoreUri**: any (Required)
* **encryptedCredential**: any
* **resourceGroupName**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **subscriptionId**: any
* **tenant**: any

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

## AzureMySql
### Properties
* **type**: 'AzureMySql' (Required)
* **typeProperties**: AzureMySqlLinkedServiceTypeProperties (Required)

## AzureMySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any

## AzurePostgreSql
### Properties
* **type**: 'AzurePostgreSql' (Required)
* **typeProperties**: AzurePostgreSqlLinkedServiceTypeProperties (Required)

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

## AzureSearch
### Properties
* **type**: 'AzureSearch' (Required)
* **typeProperties**: AzureSearchLinkedServiceTypeProperties (Required)

## AzureSearchLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any
* **key**: SecretBase
* **url**: any (Required)

## AzureSqlDatabase
### Properties
* **type**: 'AzureSqlDatabase' (Required)
* **typeProperties**: AzureSqlDatabaseLinkedServiceTypeProperties (Required)

## AzureSqlDatabaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any

## AzureSqlDW
### Properties
* **type**: 'AzureSqlDW' (Required)
* **typeProperties**: AzureSqlDWLinkedServiceTypeProperties (Required)

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **tenant**: any

## AzureStorage
### Properties
* **type**: 'AzureStorage' (Required)
* **typeProperties**: AzureStorageLinkedServiceTypeProperties (Required)

## AzureStorageLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **sasUri**: SecretBase

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
* **connectionString**: any (Required)
* **encryptedCredential**: any

## Couchbase
### Properties
* **type**: 'Couchbase' (Required)
* **typeProperties**: CouchbaseLinkedServiceTypeProperties (Required)

## CouchbaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any
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
* **database**: any (Required)
* **encryptedCredential**: any
* **password**: SecretBase
* **server**: any (Required)
* **username**: any

## Drill
### Properties
* **type**: 'Drill' (Required)
* **typeProperties**: DrillLinkedServiceTypeProperties (Required)

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

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
* **serviceUri**: any
* **username**: any (Required)

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

## GoogleBigQuery
### Properties
* **type**: 'GoogleBigQuery' (Required)
* **typeProperties**: GoogleBigQueryLinkedServiceTypeProperties (Required)

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required)
* **clientId**: SecretBase
* **clientSecret**: SecretBase
* **email**: any
* **encryptedCredential**: any
* **keyFilePath**: any
* **project**: any (Required)
* **refreshToken**: SecretBase
* **requestGoogleDriveScope**: any
* **trustedCertPath**: any
* **useSystemTrustStore**: any

## Greenplum
### Properties
* **type**: 'Greenplum' (Required)
* **typeProperties**: GreenplumLinkedServiceTypeProperties (Required)

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

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

## HDInsight
### Properties
* **type**: 'HDInsight' (Required)
* **typeProperties**: HDInsightLinkedServiceTypeProperties (Required)

## HDInsightLinkedServiceTypeProperties
### Properties
* **clusterUri**: any (Required)
* **encryptedCredential**: any
* **hcatalogLinkedServiceName**: LinkedServiceReference
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
* **servicePrincipalId**: any
* **servicePrincipalKey**: SecretBase
* **sparkVersion**: any
* **stormConfiguration**: any
* **tenant**: any (Required)
* **timeToLive**: any (Required)
* **version**: any (Required)
* **yarnConfiguration**: any
* **zookeeperNodeSize**: any

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
* **username**: any
* **useSystemTrustStore**: any
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
* **username**: any
* **useSystemTrustStore**: any

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

## MongoDb
### Properties
* **type**: 'MongoDb' (Required)
* **typeProperties**: MongoDbLinkedServiceTypeProperties (Required)

## MongoDbLinkedServiceTypeProperties
### Properties
* **allowSelfSignedServerCert**: any
* **authenticationType**: 'Anonymous' | 'Basic'
* **authSource**: any
* **databaseName**: any (Required)
* **enableSsl**: any
* **encryptedCredential**: any
* **password**: SecretBase
* **port**: any
* **server**: any (Required)
* **username**: any

## MySql
### Properties
* **type**: 'MySql' (Required)
* **typeProperties**: MySqlLinkedServiceTypeProperties (Required)

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: SecretBase (Required)
* **encryptedCredential**: any

## Netezza
### Properties
* **type**: 'Netezza' (Required)
* **typeProperties**: NetezzaLinkedServiceTypeProperties (Required)

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

## OData
### Properties
* **type**: 'OData' (Required)
* **typeProperties**: ODataLinkedServiceTypeProperties (Required)

## ODataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic'
* **encryptedCredential**: any
* **password**: SecretBase
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

## Oracle
### Properties
* **type**: 'Oracle' (Required)
* **typeProperties**: OracleLinkedServiceTypeProperties (Required)

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any

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
* **username**: any
* **useSystemTrustStore**: any

## PostgreSql
### Properties
* **type**: 'PostgreSql' (Required)
* **typeProperties**: PostgreSqlLinkedServiceTypeProperties (Required)

## PostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: SecretBase (Required)
* **encryptedCredential**: any

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
* **username**: any
* **useSystemTrustStore**: any

## QuickBooks
### Properties
* **type**: 'QuickBooks' (Required)
* **typeProperties**: QuickBooksLinkedServiceTypeProperties (Required)

## QuickBooksLinkedServiceTypeProperties
### Properties
* **accessToken**: SecretBase (Required)
* **accessTokenSecret**: SecretBase (Required)
* **companyId**: any (Required)
* **consumerKey**: any (Required)
* **consumerSecret**: SecretBase (Required)
* **encryptedCredential**: any
* **endpoint**: any (Required)
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

## Salesforce
### Properties
* **type**: 'Salesforce' (Required)
* **typeProperties**: SalesforceLinkedServiceTypeProperties (Required)

## SalesforceLinkedServiceTypeProperties
### Properties
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
* **clientId**: any (Required)
* **clientSecret**: SecretBase
* **encryptedCredential**: any
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

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
* **encryptedCredential**: any
* **password**: SecretBase
* **server**: any (Required)
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
* **username**: any
* **useSystemTrustStore**: any

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
* **clientId**: any (Required)
* **clientSecret**: SecretBase
* **encryptedCredential**: any
* **host**: any (Required)
* **redirectUri**: any (Required)
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
* **encryptedCredential**: any
* **password**: SecretBase
* **server**: any (Required)
* **username**: any

## Vertica
### Properties
* **type**: 'Vertica' (Required)
* **typeProperties**: VerticaLinkedServiceTypeProperties (Required)

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

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
* **consumerKey**: SecretBase
* **encryptedCredential**: any
* **host**: any (Required)
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
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Pipeline
### Properties
* **activities**: Activity[]
* **annotations**: any[]
* **concurrency**: int
* **description**: string
* **parameters**: Dictionary<string,ParameterSpecification>

## Activity
* **Discriminator**: type
### Base Properties
* **dependsOn**: ActivityDependency[]
* **description**: string
* **name**: string (Required)
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
### Additional Properties
* **Additional Properties Type**: any

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
* **secureOutput**: bool
* **timeout**: any
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterSpecification

## Trigger
* **Discriminator**: type
### Base Properties
* **description**: string
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' (ReadOnly)
### MultiplePipelineTrigger
#### Properties
* **pipelines**: TriggerPipelineReference[]
* **type**: 'MultiplePipelineTrigger' (Required)


## MultiplePipelineTrigger
### Properties
* **pipelines**: TriggerPipelineReference[]
* **type**: 'MultiplePipelineTrigger' (Required)

## TriggerPipelineReference
### Properties
* **parameters**: Dictionary<string,Object>
* **pipelineReference**: PipelineReference

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PipelineReference
### Properties
* **name**: string
* **referenceName**: string (Required)
* **type**: string (Required)

## IntegrationRuntimeAuthKeys
### Properties
* **authKey1**: string (ReadOnly)
* **authKey2**: string (ReadOnly)

