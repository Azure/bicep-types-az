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
* **tags**: [ResourceTags](#resourcetags): The resource tags.
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

## Function listAuthKeys (Microsoft.DataFactory/factories/integrationRuntimes@2017-09-01-preview)
* **Resource**: Microsoft.DataFactory/factories/integrationRuntimes
* **ApiVersion**: 2017-09-01-preview
* **Output**: [IntegrationRuntimeAuthKeys](#integrationruntimeauthkeys)

## Activity
* **Discriminator**: type

### Base Properties
* **dependsOn**: [ActivityDependency](#activitydependency)[]: Activity depends on condition.
* **description**: string: Activity description.
* **name**: string (Required): Activity name.
### AzureMLBatchExecutionActivity
#### Properties
* **type**: 'AzureMLBatchExecution' (Required): Type of activity.
* **typeProperties**: [AzureMLBatchExecutionActivityTypeProperties](#azuremlbatchexecutionactivitytypeproperties) (Required): Azure ML Batch Execution activity properties.

### AzureMLUpdateResourceActivity
#### Properties
* **type**: 'AzureMLUpdateResource' (Required): Type of activity.
* **typeProperties**: [AzureMLUpdateResourceActivityTypeProperties](#azuremlupdateresourceactivitytypeproperties) (Required): Azure ML Update Resource activity properties.

### CopyActivity
#### Properties
* **inputs**: [DatasetReference](#datasetreference)[]: List of inputs for the activity.
* **outputs**: [DatasetReference](#datasetreference)[]: List of outputs for the activity.
* **type**: 'Copy' (Required): Type of activity.
* **typeProperties**: [CopyActivityTypeProperties](#copyactivitytypeproperties) (Required): Copy activity properties.

### CustomActivity
#### Properties
* **type**: 'Custom' (Required): Type of activity.
* **typeProperties**: [CustomActivityTypeProperties](#customactivitytypeproperties) (Required): Custom activity properties.

### DatabricksNotebookActivity
#### Properties
* **type**: 'DatabricksNotebook' (Required): Type of activity.
* **typeProperties**: [DatabricksNotebookActivityTypeProperties](#databricksnotebookactivitytypeproperties) (Required): Databricks Notebook activity properties.

### DataLakeAnalyticsUsqlActivity
#### Properties
* **type**: 'DataLakeAnalyticsU-SQL' (Required): Type of activity.
* **typeProperties**: [DataLakeAnalyticsUsqlActivityTypeProperties](#datalakeanalyticsusqlactivitytypeproperties) (Required): DataLakeAnalyticsU-SQL activity properties.

### ExecutePipelineActivity
#### Properties
* **type**: 'ExecutePipeline' (Required): Type of activity.
* **typeProperties**: [ExecutePipelineActivityTypeProperties](#executepipelineactivitytypeproperties) (Required): Execute pipeline activity properties.

### ExecuteSsisPackageActivity
#### Properties
* **type**: 'ExecuteSSISPackage' (Required): Type of activity.
* **typeProperties**: [ExecuteSsisPackageActivityTypeProperties](#executessispackageactivitytypeproperties) (Required): Execute SSIS package activity properties.

### FilterActivity
#### Properties
* **type**: 'Filter' (Required): Type of activity.
* **typeProperties**: [FilterActivityTypeProperties](#filteractivitytypeproperties) (Required): Filter activity properties.

### ForEachActivity
#### Properties
* **type**: 'ForEach' (Required): Type of activity.
* **typeProperties**: [ForEachActivityTypeProperties](#foreachactivitytypeproperties) (Required): ForEach activity properties.

### GetMetadataActivity
#### Properties
* **type**: 'GetMetadata' (Required): Type of activity.
* **typeProperties**: [GetMetadataActivityTypeProperties](#getmetadataactivitytypeproperties) (Required): GetMetadata activity properties.

### HDInsightHiveActivity
#### Properties
* **type**: 'HDInsightHive' (Required): Type of activity.
* **typeProperties**: [HDInsightHiveActivityTypeProperties](#hdinsighthiveactivitytypeproperties) (Required): HDInsight Hive activity properties.

### HDInsightMapReduceActivity
#### Properties
* **type**: 'HDInsightMapReduce' (Required): Type of activity.
* **typeProperties**: [HDInsightMapReduceActivityTypeProperties](#hdinsightmapreduceactivitytypeproperties) (Required): HDInsight MapReduce activity properties.

### HDInsightPigActivity
#### Properties
* **type**: 'HDInsightPig' (Required): Type of activity.
* **typeProperties**: [HDInsightPigActivityTypeProperties](#hdinsightpigactivitytypeproperties) (Required): HDInsight Pig activity properties.

### HDInsightSparkActivity
#### Properties
* **type**: 'HDInsightSpark' (Required): Type of activity.
* **typeProperties**: [HDInsightSparkActivityTypeProperties](#hdinsightsparkactivitytypeproperties) (Required): HDInsight spark activity properties.

### HDInsightStreamingActivity
#### Properties
* **type**: 'HDInsightStreaming' (Required): Type of activity.
* **typeProperties**: [HDInsightStreamingActivityTypeProperties](#hdinsightstreamingactivitytypeproperties) (Required): HDInsight streaming activity properties.

### IfConditionActivity
#### Properties
* **type**: 'IfCondition' (Required): Type of activity.
* **typeProperties**: [IfConditionActivityTypeProperties](#ifconditionactivitytypeproperties) (Required): IfCondition activity properties.

### LookupActivity
#### Properties
* **type**: 'Lookup' (Required): Type of activity.
* **typeProperties**: [LookupActivityTypeProperties](#lookupactivitytypeproperties) (Required): Lookup activity properties.

### SqlServerStoredProcedureActivity
#### Properties
* **type**: 'SqlServerStoredProcedure' (Required): Type of activity.
* **typeProperties**: [SqlServerStoredProcedureActivityTypeProperties](#sqlserverstoredprocedureactivitytypeproperties) (Required): SQL stored procedure activity properties.

### UntilActivity
#### Properties
* **type**: 'Until' (Required): Type of activity.
* **typeProperties**: [UntilActivityTypeProperties](#untilactivitytypeproperties) (Required): Until activity properties.

### WaitActivity
#### Properties
* **type**: 'Wait' (Required): Type of activity.
* **typeProperties**: [WaitActivityTypeProperties](#waitactivitytypeproperties) (Required): Wait activity properties.

### WebActivity
#### Properties
* **type**: 'WebActivity' (Required): Type of activity.
* **typeProperties**: [WebActivityTypeProperties](#webactivitytypeproperties) (Required): Web activity type properties.


## ActivityDependency
### Properties
* **activity**: string (Required): Activity name.
* **dependencyConditions**: 'Completed' | 'Failed' | 'Skipped' | 'Succeeded' | string[] (Required): Match-Condition for the dependency.
### Additional Properties
* **Additional Properties Type**: any

## AmazonMWSLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **marketplaceID**: any (Required): Any object
* **mwsAuthToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **secretKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **sellerID**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## AmazonRedshiftLinkedServiceTypeProperties
### Properties
* **database**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **server**: any (Required): Any object
* **username**: any: Any object

## AmazonS3DatasetTypeProperties
### Properties
* **bucketName**: any (Required): Any object
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **key**: any: Any object
* **prefix**: any: Any object
* **version**: any: Any object

## AmazonS3LinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: Any object
* **encryptedCredential**: any: Any object
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.

## AzureBatchLinkedServiceTypeProperties
### Properties
* **accessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **accountName**: any (Required): Any object
* **batchUri**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **poolName**: any (Required): Any object

## AzureBlobDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: Any object
* **folderPath**: any: Any object
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **tableRootLocation**: any: Any object

## AzureDatabricksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **domain**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **existingClusterId**: any: Any object
* **newClusterNodeType**: any: Any object
* **newClusterNumOfWorker**: any: Any object
* **newClusterSparkConf**: [AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf](#azuredatabrickslinkedservicetypepropertiesnewclustersparkconf): a set of optional, user-specified Spark configuration key-value pairs.
* **newClusterVersion**: any: Any object

## AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureDataLakeAnalyticsLinkedServiceTypeProperties
### Properties
* **accountName**: any (Required): Any object
* **dataLakeAnalyticsUri**: any: Any object
* **encryptedCredential**: any: Any object
* **resourceGroupName**: any: Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **subscriptionId**: any: Any object
* **tenant**: any (Required): Any object

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: Any object
* **folderPath**: any (Required): Any object
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.

## AzureDataLakeStoreLinkedServiceTypeProperties
### Properties
* **accountName**: any: Any object
* **dataLakeStoreUri**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **resourceGroupName**: any: Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **subscriptionId**: any: Any object
* **tenant**: any: Any object

## AzureKeyVaultLinkedServiceTypeProperties
### Properties
* **baseUrl**: any (Required): Any object

## AzureMLBatchExecutionActivityTypeProperties
### Properties
* **globalParameters**: [AzureMLBatchExecutionActivityTypePropertiesGlobalParameters](#azuremlbatchexecutionactivitytypepropertiesglobalparameters): Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request.
* **webServiceInputs**: [AzureMLBatchExecutionActivityTypePropertiesWebServiceInputs](#azuremlbatchexecutionactivitytypepropertieswebserviceinputs): Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request.
* **webServiceOutputs**: [AzureMLBatchExecutionActivityTypePropertiesWebServiceOutputs](#azuremlbatchexecutionactivitytypepropertieswebserviceoutputs): Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request.

## AzureMLBatchExecutionActivityTypePropertiesGlobalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureMLBatchExecutionActivityTypePropertiesWebServiceInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureMLWebServiceFile](#azuremlwebservicefile)

## AzureMLBatchExecutionActivityTypePropertiesWebServiceOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureMLWebServiceFile](#azuremlwebservicefile)

## AzureMLLinkedServiceTypeProperties
### Properties
* **apiKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **mlEndpoint**: any (Required): Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object
* **updateResourceEndpoint**: any: Any object

## AzureMLUpdateResourceActivityTypeProperties
### Properties
* **trainedModelFilePath**: any (Required): Any object
* **trainedModelLinkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **trainedModelName**: any (Required): Any object

## AzureMLWebServiceFile
### Properties
* **filePath**: any (Required): Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.

## AzureMySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object

## AzureMySqlTableDatasetTypeProperties
### Properties
* **tableName**: any: Any object

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object

## AzureSearchIndexDatasetTypeProperties
### Properties
* **indexName**: any (Required): Any object

## AzureSearchLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **key**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): Any object

## AzureSqlDatabaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): Any object

## AzureSqlTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): Any object

## AzureStorageLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **sasUri**: [SecretBase](#secretbase): The base definition of a secret type.

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): Any object

## CassandraLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **username**: any: Any object

## CassandraTableDatasetTypeProperties
### Properties
* **keyspace**: any: Any object
* **tableName**: any: Any object

## ConcurLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object
* **username**: any (Required): Any object

## CopyActivityTypeProperties
### Properties
* **cloudDataMovementUnits**: any: Any object
* **enableSkipIncompatibleRow**: any: Any object
* **enableStaging**: any: Any object
* **parallelCopies**: any: Any object
* **redirectIncompatibleRowSettings**: [RedirectIncompatibleRowSettings](#redirectincompatiblerowsettings): Redirect incompatible row settings
* **sink**: [CopySink](#copysink) (Required): A copy activity sink.
* **source**: [CopySource](#copysource) (Required): A copy activity source.
* **stagingSettings**: [StagingSettings](#stagingsettings): Staging settings.
* **translator**: any: Any object

## CopySink
* **Discriminator**: type

### Base Properties
* **sinkRetryCount**: any: Any object
* **sinkRetryWait**: any: Any object
* **writeBatchSize**: any: Any object
* **writeBatchTimeout**: any: Any object

## CopySource
* **Discriminator**: type

### Base Properties
* **sourceRetryCount**: any: Any object
* **sourceRetryWait**: any: Any object

## CosmosDbLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object

## CouchbaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object

## CustomActivityReferenceObject
### Properties
* **datasets**: [DatasetReference](#datasetreference)[]: Dataset references.
* **linkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Linked service references.

## CustomActivityTypeProperties
### Properties
* **command**: any (Required): Any object
* **extendedProperties**: [CustomActivityTypePropertiesExtendedProperties](#customactivitytypepropertiesextendedproperties): User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined.
* **folderPath**: any: Any object
* **referenceObjects**: [CustomActivityReferenceObject](#customactivityreferenceobject): Reference objects for custom activity
* **resourceLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.

## CustomActivityTypePropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatabricksNotebookActivityTypeProperties
### Properties
* **baseParameters**: [DatabricksNotebookActivityTypePropertiesBaseParameters](#databricksnotebookactivitytypepropertiesbaseparameters): Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used.
* **notebookPath**: any (Required): Any object

## DatabricksNotebookActivityTypePropertiesBaseParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DataLakeAnalyticsUsqlActivityTypeProperties
### Properties
* **compilationMode**: any: Any object
* **degreeOfParallelism**: any: Any object
* **parameters**: [DataLakeAnalyticsUsqlActivityTypePropertiesParameters](#datalakeanalyticsusqlactivitytypepropertiesparameters): Parameters for U-SQL job request.
* **priority**: any: Any object
* **runtimeVersion**: any: Any object
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **scriptPath**: any (Required): Any object

## DataLakeAnalyticsUsqlActivityTypePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dataset
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
* **description**: string: Dataset description.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Definition of all parameters for an entity.
* **structure**: any: Any object
### AmazonMWSObjectDataset
#### Properties
* **type**: 'AmazonMWSObject' (Required): Type of dataset.

### AmazonS3Dataset
#### Properties
* **type**: 'AmazonS3Object' (Required): Type of dataset.
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required): Amazon S3 dataset properties.

### AzureBlobDataset
#### Properties
* **type**: 'AzureBlob' (Required): Type of dataset.
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties) (Required): Azure Blob dataset properties.

### AzureDataLakeStoreDataset
#### Properties
* **type**: 'AzureDataLakeStoreFile' (Required): Type of dataset.
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties) (Required): Azure Data Lake Store dataset properties.

### AzureMySqlTableDataset
#### Properties
* **type**: 'AzureMySqlTable' (Required): Type of dataset.
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required): Azure MySQL database dataset properties.

### AzurePostgreSqlTableDataset
#### Properties
* **type**: 'AzurePostgreSqlTable' (Required): Type of dataset.

### AzureSearchIndexDataset
#### Properties
* **type**: 'AzureSearchIndex' (Required): Type of dataset.
* **typeProperties**: [AzureSearchIndexDatasetTypeProperties](#azuresearchindexdatasettypeproperties) (Required): Properties specific to this dataset type.

### AzureSqlDWTableDataset
#### Properties
* **type**: 'AzureSqlDWTable' (Required): Type of dataset.
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties) (Required): Azure SQL Data Warehouse dataset properties.

### AzureSqlTableDataset
#### Properties
* **type**: 'AzureSqlTable' (Required): Type of dataset.
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties) (Required): Azure SQL dataset properties.

### AzureTableDataset
#### Properties
* **type**: 'AzureTable' (Required): Type of dataset.
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required): Azure Table dataset properties.

### CassandraTableDataset
#### Properties
* **type**: 'CassandraTable' (Required): Type of dataset.
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties) (Required): Cassandra dataset properties.

### ConcurObjectDataset
#### Properties
* **type**: 'ConcurObject' (Required): Type of dataset.

### CouchbaseTableDataset
#### Properties
* **type**: 'CouchbaseTable' (Required): Type of dataset.

### DocumentDbCollectionDataset
#### Properties
* **type**: 'DocumentDbCollection' (Required): Type of dataset.
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required): DocumentDB Collection dataset properties.

### DrillTableDataset
#### Properties
* **type**: 'DrillTable' (Required): Type of dataset.

### DynamicsEntityDataset
#### Properties
* **type**: 'DynamicsEntity' (Required): Type of dataset.
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties) (Required): Dynamics entity dataset properties.

### EloquaObjectDataset
#### Properties
* **type**: 'EloquaObject' (Required): Type of dataset.

### FileShareDataset
#### Properties
* **type**: 'FileShare' (Required): Type of dataset.
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties) (Required): On-premises file system dataset properties.

### GoogleBigQueryObjectDataset
#### Properties
* **type**: 'GoogleBigQueryObject' (Required): Type of dataset.

### GreenplumTableDataset
#### Properties
* **type**: 'GreenplumTable' (Required): Type of dataset.

### HBaseObjectDataset
#### Properties
* **type**: 'HBaseObject' (Required): Type of dataset.

### HiveObjectDataset
#### Properties
* **type**: 'HiveObject' (Required): Type of dataset.

### HttpDataset
#### Properties
* **type**: 'HttpFile' (Required): Type of dataset.
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties) (Required): Properties specific to this dataset type.

### HubspotObjectDataset
#### Properties
* **type**: 'HubspotObject' (Required): Type of dataset.

### ImpalaObjectDataset
#### Properties
* **type**: 'ImpalaObject' (Required): Type of dataset.

### JiraObjectDataset
#### Properties
* **type**: 'JiraObject' (Required): Type of dataset.

### MagentoObjectDataset
#### Properties
* **type**: 'MagentoObject' (Required): Type of dataset.

### MariaDBTableDataset
#### Properties
* **type**: 'MariaDBTable' (Required): Type of dataset.

### MarketoObjectDataset
#### Properties
* **type**: 'MarketoObject' (Required): Type of dataset.

### MongoDbCollectionDataset
#### Properties
* **type**: 'MongoDbCollection' (Required): Type of dataset.
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required): MongoDB database dataset properties.

### NetezzaTableDataset
#### Properties
* **type**: 'NetezzaTable' (Required): Type of dataset.

### ODataResourceDataset
#### Properties
* **type**: 'ODataResource' (Required): Type of dataset.
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties) (Required): OData dataset properties.

### OracleTableDataset
#### Properties
* **type**: 'OracleTable' (Required): Type of dataset.
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties) (Required): On-premises Oracle dataset properties.

### PaypalObjectDataset
#### Properties
* **type**: 'PaypalObject' (Required): Type of dataset.

### PhoenixObjectDataset
#### Properties
* **type**: 'PhoenixObject' (Required): Type of dataset.

### PrestoObjectDataset
#### Properties
* **type**: 'PrestoObject' (Required): Type of dataset.

### QuickBooksObjectDataset
#### Properties
* **type**: 'QuickBooksObject' (Required): Type of dataset.

### RelationalTableDataset
#### Properties
* **type**: 'RelationalTable' (Required): Type of dataset.
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties) (Required): Relational table dataset properties.

### ResponsysObjectDataset
#### Properties
* **type**: 'ResponsysObject' (Required): Type of dataset.

### SalesforceMarketingCloudObjectDataset
#### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required): Type of dataset.

### SalesforceObjectDataset
#### Properties
* **type**: 'SalesforceObject' (Required): Type of dataset.
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties) (Required): Salesforce object dataset properties.

### SapCloudForCustomerResourceDataset
#### Properties
* **type**: 'SapCloudForCustomerResource' (Required): Type of dataset.
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required): Sap Cloud For Customer OData resource dataset properties.

### SapEccResourceDataset
#### Properties
* **type**: 'SapEccResource' (Required): Type of dataset.
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required): Sap ECC OData resource dataset properties.

### ServiceNowObjectDataset
#### Properties
* **type**: 'ServiceNowObject' (Required): Type of dataset.

### ShopifyObjectDataset
#### Properties
* **type**: 'ShopifyObject' (Required): Type of dataset.

### SparkObjectDataset
#### Properties
* **type**: 'SparkObject' (Required): Type of dataset.

### SqlServerTableDataset
#### Properties
* **type**: 'SqlServerTable' (Required): Type of dataset.
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties) (Required): On-premises SQL Server dataset properties.

### SquareObjectDataset
#### Properties
* **type**: 'SquareObject' (Required): Type of dataset.

### VerticaTableDataset
#### Properties
* **type**: 'VerticaTable' (Required): Type of dataset.

### WebTableDataset
#### Properties
* **type**: 'WebTable' (Required): Type of dataset.
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required): Web table dataset properties.

### XeroObjectDataset
#### Properties
* **type**: 'XeroObject' (Required): Type of dataset.

### ZohoObjectDataset
#### Properties
* **type**: 'ZohoObject' (Required): Type of dataset.


## DatasetCompression
* **Discriminator**: type

### Base Properties
### DatasetBZip2Compression
#### Properties
* **type**: 'BZip2' (Required): Type of dataset compression.

### DatasetDeflateCompression
#### Properties
* **level**: 'Fastest' | 'Optimal' | string: All available compression levels.
* **type**: 'Deflate' (Required): Type of dataset compression.

### DatasetGZipCompression
#### Properties
* **level**: 'Fastest' | 'Optimal' | string: All available compression levels.
* **type**: 'GZip' (Required): Type of dataset compression.

### DatasetZipDeflateCompression
#### Properties
* **level**: 'Fastest' | 'Optimal' | string: All available compression levels.
* **type**: 'ZipDeflate' (Required): Type of dataset compression.


## DatasetReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference dataset name.
* **type**: 'DatasetReference' | string (Required): Dataset reference type.

## DatasetStorageFormat
* **Discriminator**: type

### Base Properties
* **deserializer**: any: Any object
* **serializer**: any: Any object

## Db2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | string: AuthenticationType to be used for connection.
* **database**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any (Required): Any object
* **username**: any: Any object

## DocumentDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): Any object

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any: Any object

## DynamicsLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Ifd' | 'Office365' | string (Required): The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. Type: string (or Expression with resultType string).
* **deploymentType**: 'OnPremisesWithIfd' | 'Online' | string (Required): The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: Any object
* **hostName**: any: Any object
* **organizationName**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **serviceUri**: any: Any object
* **username**: any (Required): Any object

## EloquaLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object
* **username**: any (Required): Any object

## EntityReference
### Properties
* **referenceName**: string: The name of this referenced entity.
* **type**: 'IntegrationRuntimeReference' | 'LinkedServiceReference' | string: The type of this referenced entity.

## ExecutePipelineActivityTypeProperties
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **pipeline**: [PipelineReference](#pipelinereference) (Required): Pipeline reference type.
* **waitOnCompletion**: bool: Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false.

## ExecuteSsisPackageActivityTypeProperties
### Properties
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference) (Required): Integration runtime reference type.
* **environmentPath**: any: Any object
* **executionCredential**: [SsisExecutionCredential](#ssisexecutioncredential): SSIS package execution credential.
* **loggingLevel**: any: Any object
* **logLocation**: [SsisLogLocation](#ssisloglocation): SSIS package execution log location
* **packageConnectionManagers**: [ExecuteSsisPackageActivityTypePropertiesPackageConnectionManagers](#executessispackageactivitytypepropertiespackageconnectionmanagers): The package level connection managers to execute the SSIS package.
* **packageLocation**: [SsisPackageLocation](#ssispackagelocation) (Required): SSIS package location.
* **packageParameters**: [ExecuteSsisPackageActivityTypePropertiesPackageParameters](#executessispackageactivitytypepropertiespackageparameters): The package level parameters to execute the SSIS package.
* **projectConnectionManagers**: [ExecuteSsisPackageActivityTypePropertiesProjectConnectionManagers](#executessispackageactivitytypepropertiesprojectconnectionmanagers): The project level connection managers to execute the SSIS package.
* **projectParameters**: [ExecuteSsisPackageActivityTypePropertiesProjectParameters](#executessispackageactivitytypepropertiesprojectparameters): The project level parameters to execute the SSIS package.
* **propertyOverrides**: [ExecuteSsisPackageActivityTypePropertiesPropertyOverrides](#executessispackageactivitytypepropertiespropertyoverrides): The property overrides to execute the SSIS package.
* **runtime**: any: Any object

## ExecuteSsisPackageActivityTypePropertiesPackageConnectionManagers
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisConnectionManager](#ssisconnectionmanager)

## ExecuteSsisPackageActivityTypePropertiesPackageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisExecutionParameter](#ssisexecutionparameter)

## ExecuteSsisPackageActivityTypePropertiesProjectConnectionManagers
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisConnectionManager](#ssisconnectionmanager)

## ExecuteSsisPackageActivityTypePropertiesProjectParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisExecutionParameter](#ssisexecutionparameter)

## ExecuteSsisPackageActivityTypePropertiesPropertyOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisPropertyOverride](#ssispropertyoverride)

## Expression
### Properties
* **type**: 'Expression' | string (Required): Expression type.
* **value**: string (Required): Expression value.

## FactoryIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity.
* **tenantId**: string (ReadOnly): The client tenant id of the identity.
* **type**: 'SystemAssigned' (Required): The identity type. Currently the only supported type is 'SystemAssigned'.

## FactoryProperties
### Properties
* **createTime**: string (ReadOnly): Time the factory was created in ISO8601 format.
* **provisioningState**: string (ReadOnly): Factory provisioning state, example Succeeded.
* **version**: string (ReadOnly): Version of the factory.
* **vstsConfiguration**: [FactoryVstsConfiguration](#factoryvstsconfiguration): Factory's VSTS repo information.

## FactoryVstsConfiguration
### Properties
* **accountName**: string: VSTS account name.
* **collaborationBranch**: string: VSTS collaboration branch.
* **lastCommitId**: string: VSTS last commit id.
* **projectName**: string: VSTS project name.
* **repositoryName**: string: VSTS repository name.
* **rootFolder**: string: VSTS root folder.
* **tenantId**: string: VSTS tenant id.

## FileServerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userId**: any: Any object

## FileShareDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileFilter**: any: Any object
* **fileName**: any: Any object
* **folderPath**: any: Any object
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.

## FilterActivityTypeProperties
### Properties
* **condition**: [Expression](#expression) (Required): Azure Data Factory expression definition.
* **items**: [Expression](#expression) (Required): Azure Data Factory expression definition.

## ForEachActivityTypeProperties
### Properties
* **activities**: [Activity](#activity)[] (Required): List of activities to execute .
* **batchCount**: int: Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
* **isSequential**: bool: Should the loop be executed in sequence or in parallel (max 50)
* **items**: [Expression](#expression) (Required): Azure Data Factory expression definition.

## FtpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | string: The authentication type to be used to connect to the FTP server.
* **enableServerCertificateValidation**: any: Any object
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **userName**: any: Any object

## GetMetadataActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): Dataset reference type.
* **fieldList**: any[]: Fields of metadata to get from dataset.

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any: Any object
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' | string (Required): The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
* **clientId**: [SecretBase](#secretbase): The base definition of a secret type.
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **email**: any: Any object
* **encryptedCredential**: any: Any object
* **keyFilePath**: any: Any object
* **project**: any (Required): Any object
* **refreshToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **requestGoogleDriveScope**: any: Any object
* **trustedCertPath**: any: Any object
* **useSystemTrustStore**: any: Any object

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object

## HBaseLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'Basic' | string (Required): The authentication mechanism to use to connect to the HBase server.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **httpPath**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **trustedCertPath**: any: Any object
* **username**: any: Any object

## HdfsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): Any object
* **userName**: any: Any object

## HDInsightHiveActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **defines**: [HDInsightHiveActivityTypePropertiesDefines](#hdinsighthiveactivitytypepropertiesdefines): Allows user to specify defines for Hive job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: The HDInsightActivityDebugInfoOption settings to use.
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **scriptPath**: any: Any object
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightHiveActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightLinkedServiceTypeProperties
### Properties
* **clusterUri**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: Any object

## HDInsightMapReduceActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **className**: any (Required): Any object
* **defines**: [HDInsightMapReduceActivityTypePropertiesDefines](#hdinsightmapreduceactivitytypepropertiesdefines): Allows user to specify defines for the MapReduce job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: The HDInsightActivityDebugInfoOption settings to use.
* **jarFilePath**: any (Required): Any object
* **jarLibs**: any[]: Jar libs.
* **jarLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightMapReduceActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightOnDemandLinkedServiceTypeProperties
### Properties
* **additionalLinkedServiceNames**: [LinkedServiceReference](#linkedservicereference)[]: Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf.
* **clusterNamePrefix**: any: Any object
* **clusterPassword**: [SecretBase](#secretbase): The base definition of a secret type.
* **clusterResourceGroup**: any (Required): Any object
* **clusterSize**: any (Required): Any object
* **clusterSshPassword**: [SecretBase](#secretbase): The base definition of a secret type.
* **clusterSshUserName**: any: Any object
* **clusterType**: any: Any object
* **clusterUserName**: any: Any object
* **coreConfiguration**: any: Any object
* **dataNodeSize**: any: Any object
* **encryptedCredential**: any: Any object
* **hBaseConfiguration**: any: Any object
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **hdfsConfiguration**: any: Any object
* **headNodeSize**: any: Any object
* **hiveConfiguration**: any: Any object
* **hostSubscriptionId**: any (Required): Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **mapReduceConfiguration**: any: Any object
* **oozieConfiguration**: any: Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **sparkVersion**: any: Any object
* **stormConfiguration**: any: Any object
* **tenant**: any (Required): Any object
* **timeToLive**: any (Required): Any object
* **version**: any (Required): Any object
* **yarnConfiguration**: any: Any object
* **zookeeperNodeSize**: any: Any object

## HDInsightPigActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **defines**: [HDInsightPigActivityTypePropertiesDefines](#hdinsightpigactivitytypepropertiesdefines): Allows user to specify defines for Pig job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: The HDInsightActivityDebugInfoOption settings to use.
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **scriptPath**: any: Any object
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightPigActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightSparkActivityTypeProperties
### Properties
* **arguments**: any[]: The user-specified arguments to HDInsightSparkActivity.
* **className**: string: The application's Java/Spark main class.
* **entryFilePath**: any (Required): Any object
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: The HDInsightActivityDebugInfoOption settings to use.
* **proxyUser**: any: Any object
* **rootPath**: any (Required): Any object
* **sparkConfig**: [HDInsightSparkActivityTypePropertiesSparkConfig](#hdinsightsparkactivitytypepropertiessparkconfig): Spark configuration property.
* **sparkJobLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.

## HDInsightSparkActivityTypePropertiesSparkConfig
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightStreamingActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **combiner**: any: Any object
* **commandEnvironment**: any[]: Command line environment values.
* **defines**: [HDInsightStreamingActivityTypePropertiesDefines](#hdinsightstreamingactivitytypepropertiesdefines): Allows user to specify defines for streaming job request.
* **fileLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **filePaths**: any[] (Required): Paths to streaming job files. Can be directories.
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: The HDInsightActivityDebugInfoOption settings to use.
* **input**: any (Required): Any object
* **mapper**: any (Required): Any object
* **output**: any (Required): Any object
* **reducer**: any (Required): Any object
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightStreamingActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HiveLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' | string (Required): The authentication method used to access the Hive server.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **httpPath**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **serverType**: 'HiveServer1' | 'HiveServer2' | 'HiveThriftServer' | string: The type of Hive server.
* **serviceDiscoveryMode**: any: Any object
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL' | string: The transport protocol to use in the Thrift layer.
* **trustedCertPath**: any: Any object
* **useNativeQuery**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object
* **zooKeeperNameSpace**: any: Any object

## HttpDatasetTypeProperties
### Properties
* **additionalHeaders**: any: Any object
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **relativeUrl**: any: Any object
* **requestBody**: any: Any object
* **requestMethod**: any: Any object

## HttpLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | 'ClientCertificate' | 'Digest' | 'Windows' | string: The authentication type to be used to connect to the HTTP server.
* **certThumbprint**: any: Any object
* **embeddedCertData**: any: Any object
* **enableServerCertificateValidation**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): Any object
* **userName**: any: Any object

## HubspotLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **refreshToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## IfConditionActivityTypeProperties
### Properties
* **expression**: [Expression](#expression) (Required): Azure Data Factory expression definition.
* **ifFalseActivities**: [Activity](#activity)[]: List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action.
* **ifTrueActivities**: [Activity](#activity)[]: List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action.

## ImpalaLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'SASLUsername' | 'UsernameAndPassword' | string (Required): The authentication type to use.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **trustedCertPath**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object

## IntegrationRuntime
* **Discriminator**: type

### Base Properties
* **description**: string: Integration runtime description.
### ManagedIntegrationRuntime
#### Properties
* **state**: 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): The state of integration runtime.
* **type**: 'Managed' (Required): Type of integration runtime.
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required): Managed integration runtime type properties.

### SelfHostedIntegrationRuntime
#### Properties
* **type**: 'SelfHosted' (Required): Type of integration runtime.
* **typeProperties**: [LinkedIntegrationRuntimeTypeProperties](#linkedintegrationruntimetypeproperties) (Required): The base definition of a secret type.


## IntegrationRuntimeAuthKeys
### Properties
* **authKey1**: string (ReadOnly): The primary integration runtime authentication key.
* **authKey2**: string (ReadOnly): The secondary integration runtime authentication key.

## IntegrationRuntimeComputeProperties
### Properties
* **location**: string: The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
* **maxParallelExecutionsPerNode**: int: Maximum parallel executions count per node for managed integration runtime.
* **nodeSize**: string: The node size requirement to managed integration runtime.
* **numberOfNodes**: int: The required number of nodes for managed integration runtime.
* **vNetProperties**: [IntegrationRuntimeVNetProperties](#integrationruntimevnetproperties): VNet properties for managed integration runtime.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeCustomSetupScriptProperties
### Properties
* **blobContainerUri**: string: The URI of the Azure blob container that contains the custom setup script.
* **sasToken**: [SecureString](#securestring): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

## IntegrationRuntimeDataProxyProperties
### Properties
* **connectVia**: [EntityReference](#entityreference): The entity reference.
* **path**: string: The path to contain the staged data in the Blob storage.
* **stagingLinkedService**: [EntityReference](#entityreference): The entity reference.

## IntegrationRuntimeReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference integration runtime name.
* **type**: 'IntegrationRuntimeReference' | string (Required): Type of integration runtime.

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: [SecureString](#securestring): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **catalogAdminUserName**: string: The administrator user name of catalog database.
* **catalogPricingTier**: string: The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
* **catalogServerEndpoint**: string: The catalog database server URL.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: [IntegrationRuntimeSsisCatalogInfo](#integrationruntimessiscataloginfo): Catalog information for managed dedicated integration runtime.
* **customSetupScriptProperties**: [IntegrationRuntimeCustomSetupScriptProperties](#integrationruntimecustomsetupscriptproperties): Custom setup script properties for a managed dedicated integration runtime.
* **dataProxyProperties**: [IntegrationRuntimeDataProxyProperties](#integrationruntimedataproxyproperties): Data proxy properties for a managed dedicated integration runtime.
* **edition**: 'Enterprise' | 'Standard' | string: The edition for the SSIS Integration Runtime
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: License type for bringing your own license scenario.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeVNetProperties
### Properties
* **subnet**: string: The name of the subnet this integration runtime will join.
* **vNetId**: string: The ID of the VNet that this integration runtime will join.
### Additional Properties
* **Additional Properties Type**: any

## JiraLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object
* **username**: any (Required): Any object

## LinkedIntegrationRuntimeProperties
* **Discriminator**: authorizationType

### Base Properties
### LinkedIntegrationRuntimeKey
#### Properties
* **authorizationType**: 'Key' (Required): Type of the secret.
* **key**: [SecureString](#securestring) (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

### LinkedIntegrationRuntimeRbac
#### Properties
* **authorizationType**: 'RBAC' (Required): Type of the secret.
* **resourceId**: string (Required): The resource ID of the integration runtime to be shared.


## LinkedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: [LinkedIntegrationRuntimeProperties](#linkedintegrationruntimeproperties): The base definition of a secret type.

## LinkedService
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference): Integration runtime reference type.
* **description**: string: Linked service description.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Definition of all parameters for an entity.
### AmazonMWSLinkedService
#### Properties
* **type**: 'AmazonMWS' (Required): Type of linked service.
* **typeProperties**: [AmazonMWSLinkedServiceTypeProperties](#amazonmwslinkedservicetypeproperties) (Required): Amazon Marketplace Web Service linked service properties.

### AmazonRedshiftLinkedService
#### Properties
* **type**: 'AmazonRedshift' (Required): Type of linked service.
* **typeProperties**: [AmazonRedshiftLinkedServiceTypeProperties](#amazonredshiftlinkedservicetypeproperties) (Required): Amazon Redshift linked service properties.

### AmazonS3LinkedService
#### Properties
* **type**: 'AmazonS3' (Required): Type of linked service.
* **typeProperties**: [AmazonS3LinkedServiceTypeProperties](#amazons3linkedservicetypeproperties) (Required): Amazon S3 linked service properties.

### AzureBatchLinkedService
#### Properties
* **type**: 'AzureBatch' (Required): Type of linked service.
* **typeProperties**: [AzureBatchLinkedServiceTypeProperties](#azurebatchlinkedservicetypeproperties) (Required): Azure Batch linked service properties.

### AzureDatabricksLinkedService
#### Properties
* **type**: 'AzureDatabricks' (Required): Type of linked service.
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required): Azure Databricks linked service properties.

### AzureDataLakeAnalyticsLinkedService
#### Properties
* **type**: 'AzureDataLakeAnalytics' (Required): Type of linked service.
* **typeProperties**: [AzureDataLakeAnalyticsLinkedServiceTypeProperties](#azuredatalakeanalyticslinkedservicetypeproperties) (Required): Azure Data Lake Analytics linked service properties.

### AzureDataLakeStoreLinkedService
#### Properties
* **type**: 'AzureDataLakeStore' (Required): Type of linked service.
* **typeProperties**: [AzureDataLakeStoreLinkedServiceTypeProperties](#azuredatalakestorelinkedservicetypeproperties) (Required): Azure Data Lake Store linked service properties.

### AzureKeyVaultLinkedService
#### Properties
* **type**: 'AzureKeyVault' (Required): Type of linked service.
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required): Azure Key Vault linked service properties.

### AzureMLLinkedService
#### Properties
* **type**: 'AzureML' (Required): Type of linked service.
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required): Azure ML Web Service linked service properties.

### AzureMySqlLinkedService
#### Properties
* **type**: 'AzureMySql' (Required): Type of linked service.
* **typeProperties**: [AzureMySqlLinkedServiceTypeProperties](#azuremysqllinkedservicetypeproperties) (Required): Azure MySQL database linked service properties.

### AzurePostgreSqlLinkedService
#### Properties
* **type**: 'AzurePostgreSql' (Required): Type of linked service.
* **typeProperties**: [AzurePostgreSqlLinkedServiceTypeProperties](#azurepostgresqllinkedservicetypeproperties) (Required): Azure PostgreSQL linked service properties.

### AzureSearchLinkedService
#### Properties
* **type**: 'AzureSearch' (Required): Type of linked service.
* **typeProperties**: [AzureSearchLinkedServiceTypeProperties](#azuresearchlinkedservicetypeproperties) (Required): Windows Azure Search Service linked service properties.

### AzureSqlDatabaseLinkedService
#### Properties
* **type**: 'AzureSqlDatabase' (Required): Type of linked service.
* **typeProperties**: [AzureSqlDatabaseLinkedServiceTypeProperties](#azuresqldatabaselinkedservicetypeproperties) (Required): Azure SQL Database linked service properties.

### AzureSqlDWLinkedService
#### Properties
* **type**: 'AzureSqlDW' (Required): Type of linked service.
* **typeProperties**: [AzureSqlDWLinkedServiceTypeProperties](#azuresqldwlinkedservicetypeproperties) (Required): Azure SQL Data Warehouse linked service properties.

### AzureStorageLinkedService
#### Properties
* **type**: 'AzureStorage' (Required): Type of linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

### CassandraLinkedService
#### Properties
* **type**: 'Cassandra' (Required): Type of linked service.
* **typeProperties**: [CassandraLinkedServiceTypeProperties](#cassandralinkedservicetypeproperties) (Required): Cassandra linked service properties.

### ConcurLinkedService
#### Properties
* **type**: 'Concur' (Required): Type of linked service.
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required): Concur Service linked service properties.

### CosmosDbLinkedService
#### Properties
* **type**: 'CosmosDb' (Required): Type of linked service.
* **typeProperties**: [CosmosDbLinkedServiceTypeProperties](#cosmosdblinkedservicetypeproperties) (Required): CosmosDB linked service properties.

### CouchbaseLinkedService
#### Properties
* **type**: 'Couchbase' (Required): Type of linked service.
* **typeProperties**: [CouchbaseLinkedServiceTypeProperties](#couchbaselinkedservicetypeproperties) (Required): Couchbase server linked service properties.

### CustomDataSourceLinkedService
#### Properties
* **type**: 'CustomDataSource' (Required): Type of linked service.
* **typeProperties**: any (Required): Any object

### Db2LinkedService
#### Properties
* **type**: 'Db2' (Required): Type of linked service.
* **typeProperties**: [Db2LinkedServiceTypeProperties](#db2linkedservicetypeproperties) (Required): DB2 linked service properties.

### DrillLinkedService
#### Properties
* **type**: 'Drill' (Required): Type of linked service.
* **typeProperties**: [DrillLinkedServiceTypeProperties](#drilllinkedservicetypeproperties) (Required): Drill server linked service properties.

### DynamicsLinkedService
#### Properties
* **type**: 'Dynamics' (Required): Type of linked service.
* **typeProperties**: [DynamicsLinkedServiceTypeProperties](#dynamicslinkedservicetypeproperties) (Required): Dynamics linked service properties.

### EloquaLinkedService
#### Properties
* **type**: 'Eloqua' (Required): Type of linked service.
* **typeProperties**: [EloquaLinkedServiceTypeProperties](#eloqualinkedservicetypeproperties) (Required): Eloqua server linked service properties.

### FileServerLinkedService
#### Properties
* **type**: 'FileServer' (Required): Type of linked service.
* **typeProperties**: [FileServerLinkedServiceTypeProperties](#fileserverlinkedservicetypeproperties) (Required): File system linked service properties.

### FtpServerLinkedService
#### Properties
* **type**: 'FtpServer' (Required): Type of linked service.
* **typeProperties**: [FtpServerLinkedServiceTypeProperties](#ftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### GoogleBigQueryLinkedService
#### Properties
* **type**: 'GoogleBigQuery' (Required): Type of linked service.
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required): Google BigQuery service linked service properties.

### GreenplumLinkedService
#### Properties
* **type**: 'Greenplum' (Required): Type of linked service.
* **typeProperties**: [GreenplumLinkedServiceTypeProperties](#greenplumlinkedservicetypeproperties) (Required): Greenplum Database linked service properties.

### HBaseLinkedService
#### Properties
* **type**: 'HBase' (Required): Type of linked service.
* **typeProperties**: [HBaseLinkedServiceTypeProperties](#hbaselinkedservicetypeproperties) (Required): HBase server linked service properties.

### HdfsLinkedService
#### Properties
* **type**: 'Hdfs' (Required): Type of linked service.
* **typeProperties**: [HdfsLinkedServiceTypeProperties](#hdfslinkedservicetypeproperties) (Required): HDFS linked service properties.

### HDInsightLinkedService
#### Properties
* **type**: 'HDInsight' (Required): Type of linked service.
* **typeProperties**: [HDInsightLinkedServiceTypeProperties](#hdinsightlinkedservicetypeproperties) (Required): HDInsight linked service properties.

### HDInsightOnDemandLinkedService
#### Properties
* **type**: 'HDInsightOnDemand' (Required): Type of linked service.
* **typeProperties**: [HDInsightOnDemandLinkedServiceTypeProperties](#hdinsightondemandlinkedservicetypeproperties) (Required): HDInsight ondemand linked service properties.

### HiveLinkedService
#### Properties
* **type**: 'Hive' (Required): Type of linked service.
* **typeProperties**: [HiveLinkedServiceTypeProperties](#hivelinkedservicetypeproperties) (Required): Hive Server linked service properties.

### HttpLinkedService
#### Properties
* **type**: 'HttpServer' (Required): Type of linked service.
* **typeProperties**: [HttpLinkedServiceTypeProperties](#httplinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### HubspotLinkedService
#### Properties
* **type**: 'Hubspot' (Required): Type of linked service.
* **typeProperties**: [HubspotLinkedServiceTypeProperties](#hubspotlinkedservicetypeproperties) (Required): Hubspot Service linked service properties.

### ImpalaLinkedService
#### Properties
* **type**: 'Impala' (Required): Type of linked service.
* **typeProperties**: [ImpalaLinkedServiceTypeProperties](#impalalinkedservicetypeproperties) (Required): Impala server linked service properties.

### JiraLinkedService
#### Properties
* **type**: 'Jira' (Required): Type of linked service.
* **typeProperties**: [JiraLinkedServiceTypeProperties](#jiralinkedservicetypeproperties) (Required): Jira Service linked service properties.

### MagentoLinkedService
#### Properties
* **type**: 'Magento' (Required): Type of linked service.
* **typeProperties**: [MagentoLinkedServiceTypeProperties](#magentolinkedservicetypeproperties) (Required): Magento server linked service properties.

### MariaDBLinkedService
#### Properties
* **type**: 'MariaDB' (Required): Type of linked service.
* **typeProperties**: [MariaDBLinkedServiceTypeProperties](#mariadblinkedservicetypeproperties) (Required): MariaDB server linked service properties.

### MarketoLinkedService
#### Properties
* **type**: 'Marketo' (Required): Type of linked service.
* **typeProperties**: [MarketoLinkedServiceTypeProperties](#marketolinkedservicetypeproperties) (Required): Marketo server linked service properties.

### MongoDbLinkedService
#### Properties
* **type**: 'MongoDb' (Required): Type of linked service.
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required): MongoDB linked service properties.

### MySqlLinkedService
#### Properties
* **type**: 'MySql' (Required): Type of linked service.
* **typeProperties**: [MySqlLinkedServiceTypeProperties](#mysqllinkedservicetypeproperties) (Required): MySQL linked service properties.

### NetezzaLinkedService
#### Properties
* **type**: 'Netezza' (Required): Type of linked service.
* **typeProperties**: [NetezzaLinkedServiceTypeProperties](#netezzalinkedservicetypeproperties) (Required): Netezza linked service properties.

### ODataLinkedService
#### Properties
* **type**: 'OData' (Required): Type of linked service.
* **typeProperties**: [ODataLinkedServiceTypeProperties](#odatalinkedservicetypeproperties) (Required): OData linked service properties.

### OdbcLinkedService
#### Properties
* **type**: 'Odbc' (Required): Type of linked service.
* **typeProperties**: [OdbcLinkedServiceTypeProperties](#odbclinkedservicetypeproperties) (Required): ODBC linked service properties.

### OracleLinkedService
#### Properties
* **type**: 'Oracle' (Required): Type of linked service.
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required): Oracle database linked service properties.

### PaypalLinkedService
#### Properties
* **type**: 'Paypal' (Required): Type of linked service.
* **typeProperties**: [PaypalLinkedServiceTypeProperties](#paypallinkedservicetypeproperties) (Required): Paypal Service linked service properties.

### PhoenixLinkedService
#### Properties
* **type**: 'Phoenix' (Required): Type of linked service.
* **typeProperties**: [PhoenixLinkedServiceTypeProperties](#phoenixlinkedservicetypeproperties) (Required): Phoenix server linked service properties.

### PostgreSqlLinkedService
#### Properties
* **type**: 'PostgreSql' (Required): Type of linked service.
* **typeProperties**: [PostgreSqlLinkedServiceTypeProperties](#postgresqllinkedservicetypeproperties) (Required): PostgreSQL linked service properties.

### PrestoLinkedService
#### Properties
* **type**: 'Presto' (Required): Type of linked service.
* **typeProperties**: [PrestoLinkedServiceTypeProperties](#prestolinkedservicetypeproperties) (Required): Presto server linked service properties.

### QuickBooksLinkedService
#### Properties
* **type**: 'QuickBooks' (Required): Type of linked service.
* **typeProperties**: [QuickBooksLinkedServiceTypeProperties](#quickbookslinkedservicetypeproperties) (Required): QuickBooks server linked service properties.

### ResponsysLinkedService
#### Properties
* **type**: 'Responsys' (Required): Type of linked service.
* **typeProperties**: [ResponsysLinkedServiceTypeProperties](#responsyslinkedservicetypeproperties) (Required): Responsys linked service properties.

### SalesforceLinkedService
#### Properties
* **type**: 'Salesforce' (Required): Type of linked service.
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required): Salesforce linked service properties.

### SalesforceMarketingCloudLinkedService
#### Properties
* **type**: 'SalesforceMarketingCloud' (Required): Type of linked service.
* **typeProperties**: [SalesforceMarketingCloudLinkedServiceTypeProperties](#salesforcemarketingcloudlinkedservicetypeproperties) (Required): Salesforce Marketing Cloud linked service properties.

### SapBWLinkedService
#### Properties
* **type**: 'SapBW' (Required): Type of linked service.
* **typeProperties**: [SapBWLinkedServiceTypeProperties](#sapbwlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### SapCloudForCustomerLinkedService
#### Properties
* **type**: 'SapCloudForCustomer' (Required): Type of linked service.
* **typeProperties**: [SapCloudForCustomerLinkedServiceTypeProperties](#sapcloudforcustomerlinkedservicetypeproperties) (Required): SAP Cloud for Customer linked service properties.

### SapEccLinkedService
#### Properties
* **type**: 'SapEcc' (Required): Type of linked service.
* **typeProperties**: [SapEccLinkedServiceTypeProperties](#sapecclinkedservicetypeproperties) (Required): SAP ECC linked service properties.

### SapHanaLinkedService
#### Properties
* **type**: 'SapHana' (Required): Type of linked service.
* **typeProperties**: [SapHanaLinkedServiceProperties](#saphanalinkedserviceproperties) (Required): Properties specific to this linked service type.

### ServiceNowLinkedService
#### Properties
* **type**: 'ServiceNow' (Required): Type of linked service.
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required): ServiceNow server linked service properties.

### SftpServerLinkedService
#### Properties
* **type**: 'Sftp' (Required): Type of linked service.
* **typeProperties**: [SftpServerLinkedServiceTypeProperties](#sftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### ShopifyLinkedService
#### Properties
* **type**: 'Shopify' (Required): Type of linked service.
* **typeProperties**: [ShopifyLinkedServiceTypeProperties](#shopifylinkedservicetypeproperties) (Required): Shopify Service linked service properties.

### SparkLinkedService
#### Properties
* **type**: 'Spark' (Required): Type of linked service.
* **typeProperties**: [SparkLinkedServiceTypeProperties](#sparklinkedservicetypeproperties) (Required): Spark Server linked service properties.

### SqlServerLinkedService
#### Properties
* **type**: 'SqlServer' (Required): Type of linked service.
* **typeProperties**: [SqlServerLinkedServiceTypeProperties](#sqlserverlinkedservicetypeproperties) (Required): SQL Server linked service properties.

### SquareLinkedService
#### Properties
* **type**: 'Square' (Required): Type of linked service.
* **typeProperties**: [SquareLinkedServiceTypeProperties](#squarelinkedservicetypeproperties) (Required): Square Service linked service properties.

### SybaseLinkedService
#### Properties
* **type**: 'Sybase' (Required): Type of linked service.
* **typeProperties**: [SybaseLinkedServiceTypeProperties](#sybaselinkedservicetypeproperties) (Required): Sybase linked service properties.

### TeradataLinkedService
#### Properties
* **type**: 'Teradata' (Required): Type of linked service.
* **typeProperties**: [TeradataLinkedServiceTypeProperties](#teradatalinkedservicetypeproperties) (Required): Teradata linked service properties.

### VerticaLinkedService
#### Properties
* **type**: 'Vertica' (Required): Type of linked service.
* **typeProperties**: [VerticaLinkedServiceTypeProperties](#verticalinkedservicetypeproperties) (Required): Vertica linked service properties.

### WebLinkedService
#### Properties
* **type**: 'Web' (Required): Type of linked service.
* **typeProperties**: [WebLinkedServiceTypeProperties](#weblinkedservicetypeproperties) (Required): Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models.

### XeroLinkedService
#### Properties
* **type**: 'Xero' (Required): Type of linked service.
* **typeProperties**: [XeroLinkedServiceTypeProperties](#xerolinkedservicetypeproperties) (Required): Xero Service linked service properties.

### ZohoLinkedService
#### Properties
* **type**: 'Zoho' (Required): Type of linked service.
* **typeProperties**: [ZohoLinkedServiceTypeProperties](#zoholinkedservicetypeproperties) (Required): Zoho server linked service properties.


## LinkedServiceReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference LinkedService name.
* **type**: 'LinkedServiceReference' | string (Required): Linked service reference type.

## LookupActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): Dataset reference type.
* **firstRowOnly**: any: Any object
* **source**: [CopySource](#copysource) (Required): A copy activity source.

## MagentoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties): The compute resource properties for managed integration runtime.
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties): SSIS properties for managed integration runtime.

## MariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object

## MarketoLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): Any object

## MongoDbLinkedServiceTypeProperties
### Properties
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'Basic' | string: The authentication type to be used to connect to the MongoDB database.
* **authSource**: any: Any object
* **databaseName**: any (Required): Any object
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **server**: any (Required): Any object
* **username**: any: Any object

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **encryptedCredential**: any: Any object

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object

## ODataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | string: Type of authentication used to connect to the OData service.
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): Any object
* **userName**: any: Any object

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any: Any object

## OdbcLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Any object
* **connectionString**: any (Required): Any object
* **credential**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: Any object

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object

## OracleTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): Any object

## ParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## ParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## ParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## ParameterSpecification
### Properties
* **defaultValue**: any: Any object
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'SecureString' | 'String' | string (Required): Parameter type.

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PaypalLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## PhoenixLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' | string (Required): The authentication mechanism used to connect to the Phoenix server.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **httpPath**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **trustedCertPath**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object

## Pipeline
### Properties
* **activities**: [Activity](#activity)[]: List of activities in pipeline.
* **annotations**: any[]: List of tags that can be used for describing the Pipeline.
* **concurrency**: int: The max number of concurrent runs for the pipeline.
* **description**: string: The description of the pipeline.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Definition of all parameters for an entity.

## PipelineReference
### Properties
* **name**: string: Reference name.
* **referenceName**: string (Required): Reference pipeline name.
* **type**: 'PipelineReference' | string (Required): Pipeline reference type.

## PostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **encryptedCredential**: any: Any object

## PrestoLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'LDAP' | string (Required): The authentication mechanism used to connect to the Presto server.
* **catalog**: any (Required): Any object
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **serverVersion**: any (Required): Any object
* **timeZoneID**: any: Any object
* **trustedCertPath**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object

## QuickBooksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **accessTokenSecret**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **companyId**: any (Required): Any object
* **consumerKey**: any (Required): Any object
* **consumerSecret**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object

## RedirectIncompatibleRowSettings
### Properties
* **linkedServiceName**: any (Required): Any object
* **path**: any: Any object
### Additional Properties
* **Additional Properties Type**: any

## RelationalTableDatasetTypeProperties
### Properties
* **tableName**: any: Any object

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResponsysLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## SalesforceLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **environmentUrl**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **securityToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **username**: any: Any object

## SalesforceMarketingCloudLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: Any object

## SapBWLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any (Required): Any object
* **systemNumber**: any (Required): Any object
* **userName**: any: Any object

## SapCloudForCustomerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): Any object
* **username**: any: Any object

## SapCloudForCustomerResourceDatasetTypeProperties
### Properties
* **path**: any (Required): Any object

## SapEccLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: string (Required): The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
* **username**: string: The username for Basic authentication. Type: string (or Expression with resultType string).

## SapEccResourceDatasetTypeProperties
### Properties
* **path**: any (Required): Any object

## SapHanaLinkedServiceProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows' | string: The authentication type to be used to connect to the SAP HANA server.
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any (Required): Any object
* **userName**: any: Any object

## SecretBase
* **Discriminator**: type

### Base Properties
### AzureKeyVaultSecretReference
#### Properties
* **secretName**: any (Required): Any object
* **secretVersion**: any: Any object
* **store**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **type**: 'AzureKeyVaultSecret' (Required): Type of the secret.

### SecureString
#### Properties
* **type**: 'SecureString' (Required): Type of the secret.
* **value**: string (Required): Value of secure string.


## SecureString
### Properties
* **type**: string (Required): Type of the secret.
* **value**: string (Required): Value of secure string.

## ServiceNowLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'OAuth2' | string (Required): The authentication type to use.
* **clientId**: any: Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object
* **username**: any: Any object

## SftpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'SshPublicKey' | string: The authentication type to be used to connect to the FTP server.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **hostKeyFingerprint**: any: Any object
* **passPhrase**: [SecretBase](#secretbase): The base definition of a secret type.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **privateKeyContent**: [SecretBase](#secretbase): The base definition of a secret type.
* **privateKeyPath**: any: Any object
* **skipHostKeyValidation**: any: Any object
* **userName**: any: Any object

## ShopifyLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## SparkLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' | string (Required): The authentication method used to access the Spark server.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **httpPath**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any (Required): Any object
* **serverType**: 'SharkServer' | 'SharkServer2' | 'SparkThriftServer' | string: The type of Spark server.
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL' | string: The transport protocol to use in the Thrift layer.
* **trustedCertPath**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object

## SqlServerLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: Any object

## SqlServerStoredProcedureActivityTypeProperties
### Properties
* **storedProcedureName**: any (Required): Any object
* **storedProcedureParameters**: [SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters](#sqlserverstoredprocedureactivitytypepropertiesstoredprocedureparameters): Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".

## SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## SqlServerTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): Any object

## SquareLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **redirectUri**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## SsisAccessCredential
### Properties
* **domain**: any (Required): Any object
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **userName**: any (Required): Any object

## SsisConnectionManager
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisExecutionParameter](#ssisexecutionparameter)

## SsisConnectionManager
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisExecutionParameter](#ssisexecutionparameter)

## SsisExecutionCredential
### Properties
* **domain**: any (Required): Any object
* **password**: [SecureString](#securestring) (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **userName**: any (Required): Any object

## SsisExecutionParameter
### Properties
* **value**: any (Required): Any object

## SsisLogLocation
### Properties
* **logPath**: any (Required): Any object
* **type**: 'File' | string (Required): The type of SSIS log location.
* **typeProperties**: [SsisLogLocationTypeProperties](#ssisloglocationtypeproperties) (Required): SSIS package execution log location properties.

## SsisLogLocationTypeProperties
### Properties
* **accessCredential**: [SsisAccessCredential](#ssisaccesscredential): SSIS access credential.
* **logRefreshInterval**: any: Any object

## SsisPackageLocation
### Properties
* **packagePath**: any (Required): Any object
* **type**: 'File' | 'SSISDB' | string: The type of SSIS package location.
* **typeProperties**: [SsisPackageLocationTypeProperties](#ssispackagelocationtypeproperties): SSIS package location properties.

## SsisPackageLocationTypeProperties
### Properties
* **accessCredential**: [SsisAccessCredential](#ssisaccesscredential): SSIS access credential.
* **configurationPath**: any: Any object
* **packagePassword**: [SecretBase](#secretbase): The base definition of a secret type.

## SsisPropertyOverride
### Properties
* **isSensitive**: bool: Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true
* **value**: any (Required): Any object

## StagingSettings
### Properties
* **enableCompression**: any: Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **path**: any: Any object
### Additional Properties
* **Additional Properties Type**: any

## StoredProcedureParameter
### Properties
* **type**: 'Boolean' | 'Date' | 'Decimal' | 'Guid' | 'Int' | 'Int64' | 'String' | string: Stored procedure parameter type.
* **value**: any (Required): Any object

## SybaseLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows' | string: AuthenticationType to be used for connection.
* **database**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **schema**: any: Any object
* **server**: any (Required): Any object
* **username**: any: Any object

## TeradataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows' | string: AuthenticationType to be used for connection.
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any (Required): Any object
* **username**: any: Any object

## Trigger
* **Discriminator**: type

### Base Properties
* **description**: string: Trigger description.
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' | string (ReadOnly): Enumerates possible state of Triggers.
### MultiplePipelineTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'MultiplePipelineTrigger' (Required): Trigger type.


## TriggerPipelineReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **pipelineReference**: [PipelineReference](#pipelinereference): Pipeline reference type.

## UntilActivityTypeProperties
### Properties
* **activities**: [Activity](#activity)[] (Required): List of activities to execute.
* **expression**: [Expression](#expression) (Required): Azure Data Factory expression definition.
* **timeout**: any: Any object

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object

## WaitActivityTypeProperties
### Properties
* **waitTimeInSeconds**: int (Required): Duration in seconds.

## WebActivityAuthentication
### Properties
* **password**: [SecureString](#securestring): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **pfx**: [SecureString](#securestring): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **resource**: string: Resource for which Azure Auth token will be requested when using MSI Authentication.
* **type**: string (Required): Web activity authentication (Basic/ClientCertificate/MSI)
* **username**: string: Web activity authentication user name for basic authentication.

## WebActivityTypeProperties
### Properties
* **authentication**: [WebActivityAuthentication](#webactivityauthentication): Web activity authentication properties.
* **body**: any: Any object
* **datasets**: [DatasetReference](#datasetreference)[]: List of datasets passed to web endpoint.
* **disableCertValidation**: bool: When set to true, Certificate validation will be disabled.
* **headers**: any: Any object
* **linkedServices**: [LinkedServiceReference](#linkedservicereference)[]: List of linked services passed to web endpoint.
* **method**: 'DELETE' | 'GET' | 'POST' | 'PUT' | string (Required): The list of HTTP methods supported by a WebActivity.
* **url**: any (Required): Any object

## WebLinkedServiceTypeProperties
* **Discriminator**: authenticationType

### Base Properties
* **url**: any (Required): Any object
### WebAnonymousAuthentication
#### Properties
* **authenticationType**: 'Anonymous' (Required): Type of authentication used to connect to the web table source.

### WebBasicAuthentication
#### Properties
* **authenticationType**: 'Basic' (Required): Type of authentication used to connect to the web table source.
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **username**: any (Required): Any object

### WebClientCertificateAuthentication
#### Properties
* **authenticationType**: 'ClientCertificate' (Required): Type of authentication used to connect to the web table source.
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **pfx**: [SecretBase](#secretbase) (Required): The base definition of a secret type.


## WebTableDatasetTypeProperties
### Properties
* **index**: any (Required): Any object
* **path**: any: Any object

## XeroLinkedServiceTypeProperties
### Properties
* **consumerKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **privateKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## ZohoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

