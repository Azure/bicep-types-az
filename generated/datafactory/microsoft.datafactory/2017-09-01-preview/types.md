# Microsoft.DataFactory @ 2017-09-01-preview

## Resource Microsoft.DataFactory/factories@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [FactoryIdentity](#factoryidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FactoryProperties](#factoryproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/datasets@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Dataset](#dataset) (Required)
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/integrationRuntimes@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationRuntime](#integrationruntime) (Required)
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/linkedservices@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LinkedService](#linkedservice) (Required)
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/pipelines@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Pipeline](#pipeline) (Required)
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataFactory/factories/triggers@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Trigger](#trigger) (Required)
* **type**: 'Microsoft.DataFactory/factories/triggers' (ReadOnly, DeployTimeConstant)

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
* **vstsConfiguration**: [FactoryVSTSConfiguration](#factoryvstsconfiguration)

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
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required)
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification)
* **structure**: any
### AmazonMWSObject
#### Properties
* **type**: 'AmazonMWSObject' (Required)

### AmazonS3Object
#### Properties
* **type**: 'AmazonS3Object' (Required)
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required)

### AzureBlob
#### Properties
* **type**: 'AzureBlob' (Required)
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties) (Required)

### AzureDataLakeStoreFile
#### Properties
* **type**: 'AzureDataLakeStoreFile' (Required)
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties) (Required)

### AzureMySqlTable
#### Properties
* **type**: 'AzureMySqlTable' (Required)
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required)

### AzurePostgreSqlTable
#### Properties
* **type**: 'AzurePostgreSqlTable' (Required)

### AzureSearchIndex
#### Properties
* **type**: 'AzureSearchIndex' (Required)
* **typeProperties**: [AzureSearchIndexDatasetTypeProperties](#azuresearchindexdatasettypeproperties) (Required)

### AzureSqlDWTable
#### Properties
* **type**: 'AzureSqlDWTable' (Required)
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties) (Required)

### AzureSqlTable
#### Properties
* **type**: 'AzureSqlTable' (Required)
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties) (Required)

### AzureTable
#### Properties
* **type**: 'AzureTable' (Required)
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required)

### CassandraTable
#### Properties
* **type**: 'CassandraTable' (Required)
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties) (Required)

### ConcurObject
#### Properties
* **type**: 'ConcurObject' (Required)

### CouchbaseTable
#### Properties
* **type**: 'CouchbaseTable' (Required)

### DocumentDbCollection
#### Properties
* **type**: 'DocumentDbCollection' (Required)
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required)

### DrillTable
#### Properties
* **type**: 'DrillTable' (Required)

### DynamicsEntity
#### Properties
* **type**: 'DynamicsEntity' (Required)
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties) (Required)

### EloquaObject
#### Properties
* **type**: 'EloquaObject' (Required)

### FileShare
#### Properties
* **type**: 'FileShare' (Required)
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties) (Required)

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
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties) (Required)

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
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required)

### NetezzaTable
#### Properties
* **type**: 'NetezzaTable' (Required)

### ODataResource
#### Properties
* **type**: 'ODataResource' (Required)
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties) (Required)

### OracleTable
#### Properties
* **type**: 'OracleTable' (Required)
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties) (Required)

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
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties) (Required)

### ResponsysObject
#### Properties
* **type**: 'ResponsysObject' (Required)

### SalesforceMarketingCloudObject
#### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required)

### SalesforceObject
#### Properties
* **type**: 'SalesforceObject' (Required)
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties) (Required)

### SapCloudForCustomerResource
#### Properties
* **type**: 'SapCloudForCustomerResource' (Required)
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required)

### SapEccResource
#### Properties
* **type**: 'SapEccResource' (Required)
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required)

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
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties) (Required)

### SquareObject
#### Properties
* **type**: 'SquareObject' (Required)

### VerticaTable
#### Properties
* **type**: 'VerticaTable' (Required)

### WebTable
#### Properties
* **type**: 'WebTable' (Required)
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required)

### XeroObject
#### Properties
* **type**: 'XeroObject' (Required)

### ZohoObject
#### Properties
* **type**: 'ZohoObject' (Required)


## LinkedServiceReference
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
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required)

## AmazonS3DatasetTypeProperties
### Properties
* **bucketName**: any (Required)
* **compression**: [DatasetCompression](#datasetcompression)
* **format**: [DatasetStorageFormat](#datasetstorageformat)
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
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties) (Required)

## AzureBlobDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **fileName**: any
* **folderPath**: any
* **format**: [DatasetStorageFormat](#datasetstorageformat)
* **tableRootLocation**: any

## AzureDataLakeStoreFile
### Properties
* **type**: 'AzureDataLakeStoreFile' (Required)
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties) (Required)

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **fileName**: any
* **folderPath**: any (Required)
* **format**: [DatasetStorageFormat](#datasetstorageformat)

## AzureMySqlTable
### Properties
* **type**: 'AzureMySqlTable' (Required)
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required)

## AzureMySqlTableDatasetTypeProperties
### Properties
* **tableName**: any

## AzurePostgreSqlTable
### Properties
* **type**: 'AzurePostgreSqlTable' (Required)

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
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties) (Required)

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## AzureSqlTable
### Properties
* **type**: 'AzureSqlTable' (Required)
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties) (Required)

## AzureSqlTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## AzureTable
### Properties
* **type**: 'AzureTable' (Required)
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required)

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required)

## CassandraTable
### Properties
* **type**: 'CassandraTable' (Required)
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties) (Required)

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
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required)

## DocumentDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required)

## DrillTable
### Properties
* **type**: 'DrillTable' (Required)

## DynamicsEntity
### Properties
* **type**: 'DynamicsEntity' (Required)
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties) (Required)

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any

## EloquaObject
### Properties
* **type**: 'EloquaObject' (Required)

## FileShare
### Properties
* **type**: 'FileShare' (Required)
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties) (Required)

## FileShareDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression)
* **fileFilter**: any
* **fileName**: any
* **folderPath**: any
* **format**: [DatasetStorageFormat](#datasetstorageformat)

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
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties) (Required)

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
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required)

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required)

## NetezzaTable
### Properties
* **type**: 'NetezzaTable' (Required)

## ODataResource
### Properties
* **type**: 'ODataResource' (Required)
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties) (Required)

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any

## OracleTable
### Properties
* **type**: 'OracleTable' (Required)
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties) (Required)

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
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties) (Required)

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
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties) (Required)

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any

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
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties) (Required)

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
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required)

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
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required)

### SelfHosted
#### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: [LinkedIntegrationRuntimeTypeProperties](#linkedintegrationruntimetypeproperties) (Required)


## Managed
### Properties
* **state**: 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required)

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties)
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties)

## IntegrationRuntimeComputeProperties
### Properties
* **location**: string
* **maxParallelExecutionsPerNode**: int
* **nodeSize**: string
* **numberOfNodes**: int
* **vNetProperties**: [IntegrationRuntimeVNetProperties](#integrationruntimevnetproperties)
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
* **catalogInfo**: [IntegrationRuntimeSsisCatalogInfo](#integrationruntimessiscataloginfo)
* **customSetupScriptProperties**: [IntegrationRuntimeCustomSetupScriptProperties](#integrationruntimecustomsetupscriptproperties)
* **dataProxyProperties**: [IntegrationRuntimeDataProxyProperties](#integrationruntimedataproxyproperties)
* **edition**: 'Enterprise' | 'Standard'
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: [SecureString](#securestring)
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

## SelfHosted
### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: [LinkedIntegrationRuntimeTypeProperties](#linkedintegrationruntimetypeproperties) (Required)

## LinkedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: [LinkedIntegrationRuntimeProperties](#linkedintegrationruntimeproperties)

## LinkedIntegrationRuntimeProperties
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

### AzureBatch
#### Properties
* **type**: 'AzureBatch' (Required)
* **typeProperties**: [AzureBatchLinkedServiceTypeProperties](#azurebatchlinkedservicetypeproperties) (Required)

### AzureDatabricks
#### Properties
* **type**: 'AzureDatabricks' (Required)
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required)

### AzureDataLakeAnalytics
#### Properties
* **type**: 'AzureDataLakeAnalytics' (Required)
* **typeProperties**: [AzureDataLakeAnalyticsLinkedServiceTypeProperties](#azuredatalakeanalyticslinkedservicetypeproperties) (Required)

### AzureDataLakeStore
#### Properties
* **type**: 'AzureDataLakeStore' (Required)
* **typeProperties**: [AzureDataLakeStoreLinkedServiceTypeProperties](#azuredatalakestorelinkedservicetypeproperties) (Required)

### AzureKeyVault
#### Properties
* **type**: 'AzureKeyVault' (Required)
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required)

### AzureML
#### Properties
* **type**: 'AzureML' (Required)
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required)

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

### AzureStorage
#### Properties
* **type**: 'AzureStorage' (Required)
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required)

### Cassandra
#### Properties
* **type**: 'Cassandra' (Required)
* **typeProperties**: [CassandraLinkedServiceTypeProperties](#cassandralinkedservicetypeproperties) (Required)

### Concur
#### Properties
* **type**: 'Concur' (Required)
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required)

### CosmosDb
#### Properties
* **type**: 'CosmosDb' (Required)
* **typeProperties**: [CosmosDbLinkedServiceTypeProperties](#cosmosdblinkedservicetypeproperties) (Required)

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

### GoogleBigQuery
#### Properties
* **type**: 'GoogleBigQuery' (Required)
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required)

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

### MongoDb
#### Properties
* **type**: 'MongoDb' (Required)
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required)

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

### Oracle
#### Properties
* **type**: 'Oracle' (Required)
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required)

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

### Salesforce
#### Properties
* **type**: 'Salesforce' (Required)
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required)

### SalesforceMarketingCloud
#### Properties
* **type**: 'SalesforceMarketingCloud' (Required)
* **typeProperties**: [SalesforceMarketingCloudLinkedServiceTypeProperties](#salesforcemarketingcloudlinkedservicetypeproperties) (Required)

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

### ServiceNow
#### Properties
* **type**: 'ServiceNow' (Required)
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required)

### Sftp
#### Properties
* **type**: 'Sftp' (Required)
* **typeProperties**: [SftpServerLinkedServiceTypeProperties](#sftpserverlinkedservicetypeproperties) (Required)

### Shopify
#### Properties
* **type**: 'Shopify' (Required)
* **typeProperties**: [ShopifyLinkedServiceTypeProperties](#shopifylinkedservicetypeproperties) (Required)

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
* **encryptedCredential**: any
* **secretAccessKey**: [SecretBase](#secretbase)

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

## AzureDatabricks
### Properties
* **type**: 'AzureDatabricks' (Required)
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required)

## AzureDatabricksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase) (Required)
* **domain**: any (Required)
* **encryptedCredential**: any
* **existingClusterId**: any
* **newClusterNodeType**: any
* **newClusterNumOfWorker**: any
* **newClusterSparkConf**: [Dictionary<string,Object>](#dictionarystringobject)
* **newClusterVersion**: any

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

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
* **dataLakeStoreUri**: any (Required)
* **encryptedCredential**: any
* **resourceGroupName**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **subscriptionId**: any
* **tenant**: any

## AzureKeyVault
### Properties
* **type**: 'AzureKeyVault' (Required)
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required)

## AzureKeyVaultLinkedServiceTypeProperties
### Properties
* **baseUrl**: any (Required)

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

## AzureMySql
### Properties
* **type**: 'AzureMySql' (Required)
* **typeProperties**: [AzureMySqlLinkedServiceTypeProperties](#azuremysqllinkedservicetypeproperties) (Required)

## AzureMySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any

## AzurePostgreSql
### Properties
* **type**: 'AzurePostgreSql' (Required)
* **typeProperties**: [AzurePostgreSqlLinkedServiceTypeProperties](#azurepostgresqllinkedservicetypeproperties) (Required)

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

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
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any

## AzureSqlDW
### Properties
* **type**: 'AzureSqlDW' (Required)
* **typeProperties**: [AzureSqlDWLinkedServiceTypeProperties](#azuresqldwlinkedservicetypeproperties) (Required)

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
* **tenant**: any

## AzureStorage
### Properties
* **type**: 'AzureStorage' (Required)
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required)

## AzureStorageLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any
* **sasUri**: [SecretBase](#secretbase)

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

## Concur
### Properties
* **type**: 'Concur' (Required)
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required)

## ConcurLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required)
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
* **connectionString**: any (Required)
* **encryptedCredential**: any

## Couchbase
### Properties
* **type**: 'Couchbase' (Required)
* **typeProperties**: [CouchbaseLinkedServiceTypeProperties](#couchbaselinkedservicetypeproperties) (Required)

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
* **typeProperties**: [Db2LinkedServiceTypeProperties](#db2linkedservicetypeproperties) (Required)

## Db2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic'
* **database**: any (Required)
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **server**: any (Required)
* **username**: any

## Drill
### Properties
* **type**: 'Drill' (Required)
* **typeProperties**: [DrillLinkedServiceTypeProperties](#drilllinkedservicetypeproperties) (Required)

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

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
* **serviceUri**: any
* **username**: any (Required)

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

## GoogleBigQuery
### Properties
* **type**: 'GoogleBigQuery' (Required)
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required)

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required)
* **clientId**: [SecretBase](#secretbase)
* **clientSecret**: [SecretBase](#secretbase)
* **email**: any
* **encryptedCredential**: any
* **keyFilePath**: any
* **project**: any (Required)
* **refreshToken**: [SecretBase](#secretbase)
* **requestGoogleDriveScope**: any
* **trustedCertPath**: any
* **useSystemTrustStore**: any

## Greenplum
### Properties
* **type**: 'Greenplum' (Required)
* **typeProperties**: [GreenplumLinkedServiceTypeProperties](#greenplumlinkedservicetypeproperties) (Required)

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

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
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference)
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
* **servicePrincipalId**: any
* **servicePrincipalKey**: [SecretBase](#secretbase)
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

## MySql
### Properties
* **type**: 'MySql' (Required)
* **typeProperties**: [MySqlLinkedServiceTypeProperties](#mysqllinkedservicetypeproperties) (Required)

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: [SecretBase](#secretbase) (Required)
* **encryptedCredential**: any

## Netezza
### Properties
* **type**: 'Netezza' (Required)
* **typeProperties**: [NetezzaLinkedServiceTypeProperties](#netezzalinkedservicetypeproperties) (Required)

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

## OData
### Properties
* **type**: 'OData' (Required)
* **typeProperties**: [ODataLinkedServiceTypeProperties](#odatalinkedservicetypeproperties) (Required)

## ODataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic'
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
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

## Oracle
### Properties
* **type**: 'Oracle' (Required)
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required)

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required)
* **encryptedCredential**: any

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
* **connectionString**: [SecretBase](#secretbase) (Required)
* **encryptedCredential**: any

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
* **accessToken**: [SecretBase](#secretbase) (Required)
* **accessTokenSecret**: [SecretBase](#secretbase) (Required)
* **companyId**: any (Required)
* **consumerKey**: any (Required)
* **consumerSecret**: [SecretBase](#secretbase) (Required)
* **encryptedCredential**: any
* **endpoint**: any (Required)
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

## Salesforce
### Properties
* **type**: 'Salesforce' (Required)
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required)

## SalesforceLinkedServiceTypeProperties
### Properties
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
* **clientId**: any (Required)
* **clientSecret**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

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
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **server**: any (Required)
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
* **authenticationType**: 'Basic' | 'SshPublicKey'
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
* **clientId**: any (Required)
* **clientSecret**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **host**: any (Required)
* **redirectUri**: any (Required)
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
* **encryptedCredential**: any
* **password**: [SecretBase](#secretbase)
* **server**: any (Required)
* **username**: any

## Vertica
### Properties
* **type**: 'Vertica' (Required)
* **typeProperties**: [VerticaLinkedServiceTypeProperties](#verticalinkedservicetypeproperties) (Required)

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any
* **encryptedCredential**: any

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
* **consumerKey**: [SecretBase](#secretbase)
* **encryptedCredential**: any
* **host**: any (Required)
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
* **encryptedCredential**: any
* **endpoint**: any (Required)
* **useEncryptedEndpoints**: any
* **useHostVerification**: any
* **usePeerVerification**: any

## Pipeline
### Properties
* **activities**: [Activity](#activity)[]
* **annotations**: any[]
* **concurrency**: int
* **description**: string
* **parameters**: [Dictionary<string,ParameterSpecification>](#dictionarystringparameterspecification)

## Activity
* **Discriminator**: type
### Base Properties
* **dependsOn**: [ActivityDependency](#activitydependency)[]
* **description**: string
* **name**: string (Required)
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
* **secureOutput**: bool
* **timeout**: any
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,ParameterSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## Trigger
* **Discriminator**: type
### Base Properties
* **description**: string
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' (ReadOnly)
### MultiplePipelineTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]
* **type**: 'MultiplePipelineTrigger' (Required)


## MultiplePipelineTrigger
### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]
* **type**: 'MultiplePipelineTrigger' (Required)

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

