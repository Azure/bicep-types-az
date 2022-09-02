# Microsoft.DataFactory @ 2017-09-01-preview

## Resource Microsoft.DataFactory/factories@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [FactoryIdentity](#factoryidentity): Managed service identity of the factory.
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FactoryProperties](#factoryproperties): Properties of the factory.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/datasets@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Dataset](#dataset) (Required): Dataset properties.
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/integrationRuntimes@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationRuntime](#integrationruntime) (Required): Integration runtime properties.
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/linkedservices@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedService](#linkedservice) (Required): Properties of linked service.
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/pipelines@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Pipeline](#pipeline) (Required): Properties of the pipeline.
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/triggers@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Trigger](#trigger) (Required): Properties of the trigger.
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
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'AzureMLBatchExecution' (Required): Type of activity.
* **typeProperties**: [AzureMLBatchExecutionActivityTypeProperties](#azuremlbatchexecutionactivitytypeproperties) (Required): Azure ML Batch Execution activity properties.

### AzureMLUpdateResourceActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'AzureMLUpdateResource' (Required): Type of activity.
* **typeProperties**: [AzureMLUpdateResourceActivityTypeProperties](#azuremlupdateresourceactivitytypeproperties) (Required): Azure ML Update Resource management activity properties.

### CopyActivity
#### Properties
* **inputs**: [DatasetReference](#datasetreference)[]: List of inputs for the activity.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **outputs**: [DatasetReference](#datasetreference)[]: List of outputs for the activity.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'Copy' (Required): Type of activity.
* **typeProperties**: [CopyActivityTypeProperties](#copyactivitytypeproperties) (Required): Copy activity properties.

### CustomActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'Custom' (Required): Type of activity.
* **typeProperties**: [CustomActivityTypeProperties](#customactivitytypeproperties) (Required): Custom activity properties.

### DatabricksNotebookActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'DatabricksNotebook' (Required): Type of activity.
* **typeProperties**: [DatabricksNotebookActivityTypeProperties](#databricksnotebookactivitytypeproperties) (Required): Databricks Notebook activity properties.

### DataLakeAnalyticsUsqlActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'DataLakeAnalyticsU-SQL' (Required): Type of activity.
* **typeProperties**: [DataLakeAnalyticsUsqlActivityTypeProperties](#datalakeanalyticsusqlactivitytypeproperties) (Required): Data Lake Analytics U-SQL activity properties.

### ExecutePipelineActivity
#### Properties
* **type**: 'ExecutePipeline' (Required): Type of activity.
* **typeProperties**: [ExecutePipelineActivityTypeProperties](#executepipelineactivitytypeproperties) (Required): Execute pipeline activity properties.

### ExecuteSsisPackageActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
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
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'GetMetadata' (Required): Type of activity.
* **typeProperties**: [GetMetadataActivityTypeProperties](#getmetadataactivitytypeproperties) (Required): GetMetadata activity properties.

### HDInsightHiveActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'HDInsightHive' (Required): Type of activity.
* **typeProperties**: [HDInsightHiveActivityTypeProperties](#hdinsighthiveactivitytypeproperties) (Required): HDInsight Hive activity properties.

### HDInsightMapReduceActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'HDInsightMapReduce' (Required): Type of activity.
* **typeProperties**: [HDInsightMapReduceActivityTypeProperties](#hdinsightmapreduceactivitytypeproperties) (Required): HDInsight MapReduce activity properties.

### HDInsightPigActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'HDInsightPig' (Required): Type of activity.
* **typeProperties**: [HDInsightPigActivityTypeProperties](#hdinsightpigactivitytypeproperties) (Required): HDInsight Pig activity properties.

### HDInsightSparkActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'HDInsightSpark' (Required): Type of activity.
* **typeProperties**: [HDInsightSparkActivityTypeProperties](#hdinsightsparkactivitytypeproperties) (Required): HDInsight spark activity properties.

### HDInsightStreamingActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'HDInsightStreaming' (Required): Type of activity.
* **typeProperties**: [HDInsightStreamingActivityTypeProperties](#hdinsightstreamingactivitytypeproperties) (Required): HDInsight streaming activity properties.

### IfConditionActivity
#### Properties
* **type**: 'IfCondition' (Required): Type of activity.
* **typeProperties**: [IfConditionActivityTypeProperties](#ifconditionactivitytypeproperties) (Required): IfCondition activity properties.

### LookupActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'Lookup' (Required): Type of activity.
* **typeProperties**: [LookupActivityTypeProperties](#lookupactivitytypeproperties) (Required): Lookup activity properties.

### SqlServerStoredProcedureActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
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
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'WebActivity' (Required): Type of activity.
* **typeProperties**: [WebActivityTypeProperties](#webactivitytypeproperties) (Required): Web activity properties.


## ActivityDependency
### Properties
* **activity**: string (Required): Activity name.
* **dependencyConditions**: 'Completed' | 'Failed' | 'Skipped' | 'Succeeded' | string[] (Required): Match-Condition for the dependency.
### Additional Properties
* **Additional Properties Type**: any

## ActivityPolicy
### Properties
* **retry**: any: Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
* **retryIntervalInSeconds**: int: Interval between each retry attempt (in seconds). The default is 30 sec.
* **secureOutput**: bool: When set to true, Output from activity is considered as secure and will not be logged to monitoring.
* **timeout**: any: Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
### Additional Properties
* **Additional Properties Type**: any

## AmazonMWSLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any (Required): The access key id used to access data.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com)
* **marketplaceID**: any (Required): The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2)
* **mwsAuthToken**: [SecretBase](#secretbase): The Amazon MWS authentication token.
* **secretKey**: [SecretBase](#secretbase): The secret key used to access data.
* **sellerID**: any (Required): The Amazon seller ID.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## AmazonRedshiftLinkedServiceTypeProperties
### Properties
* **database**: any (Required): The database name of the Amazon Redshift source. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The password of the Amazon Redshift source.
* **port**: any: The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer).
* **server**: any (Required): The name of the Amazon Redshift server. Type: string (or Expression with resultType string).
* **username**: any: The username of the Amazon Redshift source. Type: string (or Expression with resultType string).

## AmazonS3DatasetTypeProperties
### Properties
* **bucketName**: any (Required): The name of the Amazon S3 bucket. Type: string (or Expression with resultType string).
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the Amazon S3 object.
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format of files.
* **key**: any: The key of the Amazon S3 object. Type: string (or Expression with resultType string).
* **prefix**: any: The prefix filter for the S3 object name. Type: string (or Expression with resultType string).
* **version**: any: The version for the S3 object. Type: string (or Expression with resultType string).

## AmazonS3LinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **secretAccessKey**: [SecretBase](#secretbase): The secret access key of the Amazon S3 Identity and Access Management (IAM) user.

## AzureBatchLinkedServiceTypeProperties
### Properties
* **accessKey**: [SecretBase](#secretbase): The Azure Batch account access key.
* **accountName**: any (Required): The Azure Batch account name. Type: string (or Expression with resultType string).
* **batchUri**: any (Required): The Azure Batch URI. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): The Azure Storage linked service reference.
* **poolName**: any (Required): The Azure Batch pool name. Type: string (or Expression with resultType string).

## AzureBlobDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the blob storage.
* **fileName**: any: The name of the Azure Blob. Type: string (or Expression with resultType string).
* **folderPath**: any: The path of the Azure Blob storage. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format of the Azure Blob storage.
* **tableRootLocation**: any: The root of blob path. Type: string (or Expression with resultType string).

## AzureDatabricksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase) (Required): Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string).
* **domain**: any (Required): <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **existingClusterId**: any: The id of an existing cluster that will be used for all runs of this job. Type: string (or Expression with resultType string).
* **newClusterNodeType**: any: The node types of new cluster. Type: string (or Expression with resultType string).
* **newClusterNumOfWorker**: any: Number of worker nodes that new cluster should have. A string formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 as min and 10 as max. Type: string (or Expression with resultType string).
* **newClusterSparkConf**: [AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf](#azuredatabrickslinkedservicetypepropertiesnewclustersparkconf): a set of optional, user-specified Spark configuration key-value pairs.
* **newClusterVersion**: any: The Spark version of new cluster. Type: string (or Expression with resultType string).

## AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureDataLakeAnalyticsLinkedServiceTypeProperties
### Properties
* **accountName**: any (Required): The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string).
* **dataLakeAnalyticsUri**: any: Azure Data Lake Analytics URI Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **resourceGroupName**: any: Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The Key of the application used to authenticate against the Azure Data Lake Analytics account.
* **subscriptionId**: any: Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
* **tenant**: any (Required): The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the item(s) in the Azure Data Lake Store.
* **fileName**: any: The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string).
* **folderPath**: any (Required): Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format of the Data Lake Store.

## AzureDataLakeStoreLinkedServiceTypeProperties
### Properties
* **accountName**: any: Data Lake Store account name. Type: string (or Expression with resultType string).
* **dataLakeStoreUri**: any (Required): Data Lake Store service URI. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **resourceGroupName**: any: Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The Key of the application used to authenticate against the Azure Data Lake Store account.
* **subscriptionId**: any: Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureKeyVaultLinkedServiceTypeProperties
### Properties
* **baseUrl**: any (Required): The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string).

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
* **apiKey**: [SecretBase](#secretbase) (Required): The API key for accessing the Azure ML model endpoint.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **mlEndpoint**: any (Required): The Batch Execution REST URL for an Azure ML Web Service endpoint. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML web service. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML web service.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **updateResourceEndpoint**: any: The Update Resource REST URL for an Azure ML Web Service endpoint. Type: string (or Expression with resultType string).

## AzureMLUpdateResourceActivityTypeProperties
### Properties
* **trainedModelFilePath**: any (Required): The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string).
* **trainedModelLinkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation.
* **trainedModelName**: any (Required): Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string).

## AzureMLWebServiceFile
### Properties
* **filePath**: any (Required): The relative file path, including container name, in the Azure Blob Storage specified by the LinkedService. Type: string (or Expression with resultType string).
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Reference to an Azure Storage LinkedService, where Azure ML WebService Input/Output file located.

## AzureMySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## AzureMySqlTableDatasetTypeProperties
### Properties
* **tableName**: any: The Azure MySQL database table name. Type: string (or Expression with resultType string).

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## AzureSearchIndexDatasetTypeProperties
### Properties
* **indexName**: any (Required): The name of the Azure Search Index. Type: string (or Expression with resultType string).

## AzureSearchLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **key**: [SecretBase](#secretbase): Admin Key for Azure Search service
* **url**: any (Required): URL for Azure Search service. Type: string (or Expression with resultType string).

## AzureSqlDatabaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against Azure SQL Database.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against Azure SQL Data Warehouse.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).

## AzureSqlTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the Azure SQL database. Type: string (or Expression with resultType string).

## AzureStorageLinkedServiceTypeProperties
### Properties
* **connectionString**: any: The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **sasUri**: [SecretBase](#secretbase): SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property.

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the Azure Table storage. Type: string (or Expression with resultType string).

## CassandraLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: AuthenticationType to be used for connection. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): Host name for connection. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for authentication.
* **port**: any: The port for the connection. Type: integer (or Expression with resultType integer).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## CassandraTableDatasetTypeProperties
### Properties
* **keyspace**: any: The keyspace of the Cassandra database. Type: string (or Expression with resultType string).
* **tableName**: any: The table name of the Cassandra database. Type: string (or Expression with resultType string).

## ConcurLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Application client_id supplied by Concur App Management.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The password corresponding to the user name that you provided in the username field.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any (Required): The user name that you use to access Concur Service.

## CopyActivityTypeProperties
### Properties
* **cloudDataMovementUnits**: any: Maximum number of cloud data movement units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0.
* **enableSkipIncompatibleRow**: any: Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean).
* **enableStaging**: any: Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
* **parallelCopies**: any: Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0.
* **redirectIncompatibleRowSettings**: [RedirectIncompatibleRowSettings](#redirectincompatiblerowsettings): Redirect incompatible row settings when EnableSkipIncompatibleRow is true.
* **sink**: [CopySink](#copysink) (Required): Copy activity sink.
* **source**: [CopySource](#copysource) (Required): Copy activity source.
* **stagingSettings**: [StagingSettings](#stagingsettings): Specifies interim staging settings when EnableStaging is true.
* **translator**: any: Copy activity translator. If not specified, tabular translator is used.

## CopySink
* **Discriminator**: type

### Base Properties
* **sinkRetryCount**: any: Sink retry count. Type: integer (or Expression with resultType integer).
* **sinkRetryWait**: any: Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **writeBatchSize**: any: Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
* **writeBatchTimeout**: any: Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).


## CopySource
* **Discriminator**: type

### Base Properties
* **sourceRetryCount**: any: Source retry count. Type: integer (or Expression with resultType integer).
* **sourceRetryWait**: any: Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).


## CosmosDbLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## CouchbaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## CustomActivityReferenceObject
### Properties
* **datasets**: [DatasetReference](#datasetreference)[]: Dataset references.
* **linkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Linked service references.

## CustomActivityTypeProperties
### Properties
* **command**: any (Required): Command for custom activity Type: string (or Expression with resultType string).
* **extendedProperties**: [CustomActivityTypePropertiesExtendedProperties](#customactivitytypepropertiesextendedproperties): User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined.
* **folderPath**: any: Folder path for resource files Type: string (or Expression with resultType string).
* **referenceObjects**: [CustomActivityReferenceObject](#customactivityreferenceobject): Reference objects
* **resourceLinkedService**: [LinkedServiceReference](#linkedservicereference): Resource linked service reference.

## CustomActivityTypePropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatabricksNotebookActivityTypeProperties
### Properties
* **baseParameters**: [DatabricksNotebookActivityTypePropertiesBaseParameters](#databricksnotebookactivitytypepropertiesbaseparameters): Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used.
* **notebookPath**: any (Required): The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string).

## DatabricksNotebookActivityTypePropertiesBaseParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DataLakeAnalyticsUsqlActivityTypeProperties
### Properties
* **compilationMode**: any: Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string).
* **degreeOfParallelism**: any: The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1.
* **parameters**: [DataLakeAnalyticsUsqlActivityTypePropertiesParameters](#datalakeanalyticsusqlactivitytypepropertiesparameters): Parameters for U-SQL job request.
* **priority**: any: Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1.
* **runtimeVersion**: any: Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string).
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference) (Required): Script linked service reference.
* **scriptPath**: any (Required): Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string).

## DataLakeAnalyticsUsqlActivityTypePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dataset
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
* **description**: string: Dataset description.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Parameters for dataset.
* **structure**: any: Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.

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
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required): SAP Cloud For Customer OData resource dataset properties.

### SapEccResourceDataset
#### Properties
* **type**: 'SapEccResource' (Required): Type of dataset.
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required): SAP ECC OData resource dataset properties.

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
* **level**: 'Fastest' | 'Optimal' | string: The Deflate compression level.
* **type**: 'Deflate' (Required): Type of dataset compression.

### DatasetGZipCompression
#### Properties
* **level**: 'Fastest' | 'Optimal' | string: The GZip compression level.
* **type**: 'GZip' (Required): Type of dataset compression.

### DatasetZipDeflateCompression
#### Properties
* **level**: 'Fastest' | 'Optimal' | string: The ZipDeflate compression level.
* **type**: 'ZipDeflate' (Required): Type of dataset compression.


## DatasetReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): Arguments for dataset.
* **referenceName**: string (Required): Reference dataset name.
* **type**: 'DatasetReference' | string (Required): Dataset reference type.

## DatasetStorageFormat
* **Discriminator**: type

### Base Properties
* **deserializer**: any: Deserializer. Type: string (or Expression with resultType string).
* **serializer**: any: Serializer. Type: string (or Expression with resultType string).


## Db2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | string: AuthenticationType to be used for connection.
* **database**: any (Required): Database name for connection. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for authentication.
* **server**: any (Required): Server name for connection. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## DocumentDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): Document Database collection name. Type: string (or Expression with resultType string).

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any: The logical name of the entity. Type: string (or Expression with resultType string).

## DynamicsLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Ifd' | 'Office365' | string (Required): The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. Type: string (or Expression with resultType string).
* **deploymentType**: 'OnPremisesWithIfd' | 'Online' | string (Required): The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **hostName**: any: The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
* **organizationName**: any: The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to access the Dynamics instance.
* **port**: any: The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
* **serviceUri**: any: The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
* **username**: any (Required): User name to access the Dynamics instance. Type: string (or Expression with resultType string).

## EloquaLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Eloqua server. (i.e. eloqua.example.com)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any (Required): The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice)

## EntityReference
### Properties
* **referenceName**: string: The name of this referenced entity.
* **type**: 'IntegrationRuntimeReference' | 'LinkedServiceReference' | string: The type of this referenced entity.

## ExecutePipelineActivityTypeProperties
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): Pipeline parameters.
* **pipeline**: [PipelineReference](#pipelinereference) (Required): Pipeline reference.
* **waitOnCompletion**: bool: Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false.

## ExecuteSsisPackageActivityTypeProperties
### Properties
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference) (Required): The integration runtime reference.
* **environmentPath**: any: The environment path to execute the SSIS package. Type: string (or Expression with resultType string).
* **executionCredential**: [SsisExecutionCredential](#ssisexecutioncredential): The package execution credential.
* **loggingLevel**: any: The logging level of SSIS package execution. Type: string (or Expression with resultType string).
* **logLocation**: [SsisLogLocation](#ssisloglocation): SSIS package execution log location.
* **packageConnectionManagers**: [ExecuteSsisPackageActivityTypePropertiesPackageConnectionManagers](#executessispackageactivitytypepropertiespackageconnectionmanagers): The package level connection managers to execute the SSIS package.
* **packageLocation**: [SsisPackageLocation](#ssispackagelocation) (Required): SSIS package location.
* **packageParameters**: [ExecuteSsisPackageActivityTypePropertiesPackageParameters](#executessispackageactivitytypepropertiespackageparameters): The package level parameters to execute the SSIS package.
* **projectConnectionManagers**: [ExecuteSsisPackageActivityTypePropertiesProjectConnectionManagers](#executessispackageactivitytypepropertiesprojectconnectionmanagers): The project level connection managers to execute the SSIS package.
* **projectParameters**: [ExecuteSsisPackageActivityTypePropertiesProjectParameters](#executessispackageactivitytypepropertiesprojectparameters): The project level parameters to execute the SSIS package.
* **propertyOverrides**: [ExecuteSsisPackageActivityTypePropertiesPropertyOverrides](#executessispackageactivitytypepropertiespropertyoverrides): The property overrides to execute the SSIS package.
* **runtime**: any: Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string).

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
* **vstsConfiguration**: [FactoryVstsConfiguration](#factoryvstsconfiguration): VSTS repo information of the factory.

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
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): Host name of the server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to logon the server.
* **userId**: any: User ID to logon the server. Type: string (or Expression with resultType string).

## FileShareDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the file system.
* **fileFilter**: any: Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string).
* **fileName**: any: The name of the on-premises file system. Type: string (or Expression with resultType string).
* **folderPath**: any: The path of the on-premises file system. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format of the files.

## FilterActivityTypeProperties
### Properties
* **condition**: [Expression](#expression) (Required): Condition to be used for filtering the input.
* **items**: [Expression](#expression) (Required): Input array on which filter should be applied.

## ForEachActivityTypeProperties
### Properties
* **activities**: [Activity](#activity)[] (Required): List of activities to execute .
* **batchCount**: int: Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
* **isSequential**: bool: Should the loop be executed in sequence or in parallel (max 50)
* **items**: [Expression](#expression) (Required): Collection to iterate.

## FtpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | string: The authentication type to be used to connect to the FTP server.
* **enableServerCertificateValidation**: any: If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
* **enableSsl**: any: If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): Host name of the FTP server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to logon the FTP server.
* **port**: any: The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0.
* **userName**: any: Username to logon the FTP server. Type: string (or Expression with resultType string).

## GetMetadataActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): GetMetadata activity dataset reference.
* **fieldList**: any[]: Fields of metadata to get from dataset.

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any: A comma-separated list of public BigQuery projects to access.
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' | string (Required): The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
* **clientId**: [SecretBase](#secretbase): The client id of the google application used to acquire the refresh token.
* **clientSecret**: [SecretBase](#secretbase): The client secret of the google application used to acquire the refresh token.
* **email**: any: The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **keyFilePath**: any: The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR.
* **project**: any (Required): The default BigQuery project to query against.
* **refreshToken**: [SecretBase](#secretbase): The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.
* **requestGoogleDriveScope**: any: Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## HBaseLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Basic' | string (Required): The authentication mechanism to use to connect to the HBase server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the HBase server. (i.e. 192.168.222.160)
* **httpPath**: any: The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name.
* **port**: any: The TCP port that the HBase instance uses to listen for client connections. The default value is 9090.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to connect to the HBase instance.

## HdfsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for Windows authentication.
* **url**: any (Required): The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string).
* **userName**: any: User name for Windows authentication. Type: string (or Expression with resultType string).

## HDInsightHiveActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **defines**: [HDInsightHiveActivityTypePropertiesDefines](#hdinsighthiveactivitytypepropertiesdefines): Allows user to specify defines for Hive job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: Debug info option.
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference): Script linked service reference.
* **scriptPath**: any: Script path. Type: string (or Expression with resultType string).
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightHiveActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightLinkedServiceTypeProperties
### Properties
* **clusterUri**: any (Required): HDInsight cluster URI. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): A reference to the Azure SQL linked service that points to the HCatalog database.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): The Azure Storage linked service reference.
* **password**: [SecretBase](#secretbase): HDInsight cluster password.
* **userName**: any: HDInsight cluster user name. Type: string (or Expression with resultType string).

## HDInsightMapReduceActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **className**: any (Required): Class name. Type: string (or Expression with resultType string).
* **defines**: [HDInsightMapReduceActivityTypePropertiesDefines](#hdinsightmapreduceactivitytypepropertiesdefines): Allows user to specify defines for the MapReduce job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: Debug info option.
* **jarFilePath**: any (Required): Jar path. Type: string (or Expression with resultType string).
* **jarLibs**: any[]: Jar libs.
* **jarLinkedService**: [LinkedServiceReference](#linkedservicereference): Jar linked service reference.
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightMapReduceActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightOnDemandLinkedServiceTypeProperties
### Properties
* **additionalLinkedServiceNames**: [LinkedServiceReference](#linkedservicereference)[]: Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf.
* **clusterNamePrefix**: any: The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string).
* **clusterPassword**: [SecretBase](#secretbase): The password to access the cluster.
* **clusterResourceGroup**: any (Required): The resource group where the cluster belongs. Type: string (or Expression with resultType string).
* **clusterSize**: any (Required): Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string).
* **clusterSshPassword**: [SecretBase](#secretbase): The password to SSH remotely connect cluster’s node (for Linux).
* **clusterSshUserName**: any: The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string).
* **clusterType**: any: The cluster type. Type: string (or Expression with resultType string).
* **clusterUserName**: any: The username to access the cluster. Type: string (or Expression with resultType string).
* **coreConfiguration**: any: Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created.
* **dataNodeSize**: any: Specifies the size of the data node for the HDInsight cluster.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **hBaseConfiguration**: any: Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster.
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore.
* **hdfsConfiguration**: any: Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster.
* **headNodeSize**: any: Specifies the size of the head node for the HDInsight cluster.
* **hiveConfiguration**: any: Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster.
* **hostSubscriptionId**: any (Required): The customer’s subscription to host the cluster. Type: string (or Expression with resultType string).
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Azure Storage linked service to be used by the on-demand cluster for storing and processing data.
* **mapReduceConfiguration**: any: Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster.
* **oozieConfiguration**: any: Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster.
* **servicePrincipalId**: any: The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key for the service principal id.
* **sparkVersion**: any: The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string).
* **stormConfiguration**: any: Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster.
* **tenant**: any (Required): The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
* **timeToLive**: any (Required): The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
* **version**: any (Required): Version of the HDInsight cluster.  Type: string (or Expression with resultType string).
* **yarnConfiguration**: any: Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster.
* **zookeeperNodeSize**: any: Specifies the size of the Zoo Keeper node for the HDInsight cluster.

## HDInsightPigActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **defines**: [HDInsightPigActivityTypePropertiesDefines](#hdinsightpigactivitytypepropertiesdefines): Allows user to specify defines for Pig job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: Debug info option.
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference): Script linked service reference.
* **scriptPath**: any: Script path. Type: string (or Expression with resultType string).
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightPigActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightSparkActivityTypeProperties
### Properties
* **arguments**: any[]: The user-specified arguments to HDInsightSparkActivity.
* **className**: string: The application's Java/Spark main class.
* **entryFilePath**: any (Required): The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string).
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: Debug info option.
* **proxyUser**: any: The user to impersonate that will execute the job. Type: string (or Expression with resultType string).
* **rootPath**: any (Required): The root path in 'sparkJobLinkedService' for all the job’s files. Type: string (or Expression with resultType string).
* **sparkConfig**: [HDInsightSparkActivityTypePropertiesSparkConfig](#hdinsightsparkactivitytypepropertiessparkconfig): Spark configuration property.
* **sparkJobLinkedService**: [LinkedServiceReference](#linkedservicereference): The storage linked service for uploading the entry file and dependencies, and for receiving logs.

## HDInsightSparkActivityTypePropertiesSparkConfig
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightStreamingActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **combiner**: any: Combiner executable name. Type: string (or Expression with resultType string).
* **commandEnvironment**: any[]: Command line environment values.
* **defines**: [HDInsightStreamingActivityTypePropertiesDefines](#hdinsightstreamingactivitytypepropertiesdefines): Allows user to specify defines for streaming job request.
* **fileLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference where the files are located.
* **filePaths**: any[] (Required): Paths to streaming job files. Can be directories.
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: Debug info option.
* **input**: any (Required): Input blob path. Type: string (or Expression with resultType string).
* **mapper**: any (Required): Mapper executable name. Type: string (or Expression with resultType string).
* **output**: any (Required): Output blob path. Type: string (or Expression with resultType string).
* **reducer**: any (Required): Reducer executable name. Type: string (or Expression with resultType string).
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightStreamingActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HiveLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' | string (Required): The authentication method used to access the Hive server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable).
* **httpPath**: any: The partial URL corresponding to the Hive server.
* **password**: [SecretBase](#secretbase): The password corresponding to the user name that you provided in the Username field
* **port**: any: The TCP port that the Hive server uses to listen for client connections.
* **serverType**: 'HiveServer1' | 'HiveServer2' | 'HiveThriftServer' | string: The type of Hive server.
* **serviceDiscoveryMode**: any: true to indicate using the ZooKeeper service, false not.
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL' | string: The transport protocol to use in the Thrift layer.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **useNativeQuery**: any: Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL.
* **username**: any: The user name that you use to access Hive Server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
* **zooKeeperNameSpace**: any: The namespace on ZooKeeper under which Hive Server 2 nodes are added.

## HttpDatasetTypeProperties
### Properties
* **additionalHeaders**: any: The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1
...
request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used on files.
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format of files.
* **relativeUrl**: any: The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string).
* **requestBody**: any: The body for the HTTP request. Type: string (or Expression with resultType string).
* **requestMethod**: any: The HTTP method for the HTTP request. Type: string (or Expression with resultType string).

## HttpLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | 'ClientCertificate' | 'Digest' | 'Windows' | string: The authentication type to be used to connect to the HTTP server.
* **certThumbprint**: any: Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
* **embeddedCertData**: any: Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
* **enableServerCertificateValidation**: any: If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication.
* **url**: any (Required): The base URL of the HTTP endpoint, e.g. https://www.microsoft.com. Type: string (or Expression with resultType string).
* **userName**: any: User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string).

## HubspotLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The access token obtained when initially authenticating your OAuth integration.
* **clientId**: any (Required): The client ID associated with your Hubspot application.
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with your Hubspot application.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **refreshToken**: [SecretBase](#secretbase): The refresh token obtained when initially authenticating your OAuth integration.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## IfConditionActivityTypeProperties
### Properties
* **expression**: [Expression](#expression) (Required): An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed.
* **ifFalseActivities**: [Activity](#activity)[]: List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action.
* **ifTrueActivities**: [Activity](#activity)[]: List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action.

## ImpalaLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'SASLUsername' | 'UsernameAndPassword' | string (Required): The authentication type to use.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the Impala server. (i.e. 192.168.222.160)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name when using UsernameAndPassword.
* **port**: any: The TCP port that the Impala server uses to listen for client connections. The default value is 21050.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to access the Impala server. The default value is anonymous when using SASLUsername.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## IntegrationRuntime
* **Discriminator**: type

### Base Properties
* **description**: string: Integration runtime description.

### ManagedIntegrationRuntime
#### Properties
* **state**: 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Integration runtime state, only valid for managed dedicated integration runtime.
* **type**: 'Managed' (Required): Type of integration runtime.
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required): Managed integration runtime properties.

### SelfHostedIntegrationRuntime
#### Properties
* **type**: 'SelfHosted' (Required): Type of integration runtime.
* **typeProperties**: [LinkedIntegrationRuntimeTypeProperties](#linkedintegrationruntimetypeproperties) (Required): When this property is not null, means this is a linked integration runtime. The property is used to access original integration runtime.


## IntegrationRuntimeAuthKeys
### Properties
* **authKey1**: string: The primary integration runtime authentication key.
* **authKey2**: string: The secondary integration runtime authentication key.

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
* **sasToken**: [SecureString](#securestring): The SAS token of the Azure blob container.

## IntegrationRuntimeDataProxyProperties
### Properties
* **connectVia**: [EntityReference](#entityreference): The self-hosted integration runtime reference.
* **path**: string: The path to contain the staged data in the Blob storage.
* **stagingLinkedService**: [EntityReference](#entityreference): The staging linked service reference.

## IntegrationRuntimeReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): Arguments for integration runtime.
* **referenceName**: string (Required): Reference integration runtime name.
* **type**: 'IntegrationRuntimeReference' | string (Required): Type of integration runtime.

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: [SecureString](#securestring): The password of the administrator user account of the catalog database.
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
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the Jira service. (e.g. jira.example.com)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name that you provided in the username field.
* **port**: any: The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any (Required): The user name that you use to access Jira Service.

## LinkedIntegrationRuntimeProperties
* **Discriminator**: authorizationType

### Base Properties

### LinkedIntegrationRuntimeKey
#### Properties
* **authorizationType**: 'Key' (Required): Type of the secret.
* **key**: [SecureString](#securestring) (Required): Type of the secret.

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
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference): The integration runtime reference.
* **description**: string: Linked service description.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Parameters for linked service.

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
* **typeProperties**: any (Required): Custom linked service properties.

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
* **typeProperties**: [WebLinkedServiceTypeProperties](#weblinkedservicetypeproperties) (Required): Web linked service properties.

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
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): Arguments for LinkedService.
* **referenceName**: string (Required): Reference LinkedService name.
* **type**: 'LinkedServiceReference' | string (Required): Linked service reference type.

## LookupActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): Lookup activity dataset reference.
* **firstRowOnly**: any: Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean).
* **source**: [CopySource](#copysource) (Required): Dataset-specific source properties, same as copy activity source.

## MagentoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The access token from Magento.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The URL of the Magento instance. (i.e. 192.168.222.110/magento3)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties): The compute resource for managed integration runtime.
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties): SSIS properties for managed integration runtime.

## MariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## MarketoLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client Id of your Marketo service.
* **clientSecret**: [SecretBase](#secretbase): The client secret of your Marketo service.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): The table name of the MongoDB database. Type: string (or Expression with resultType string).

## MongoDbLinkedServiceTypeProperties
### Properties
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean).
* **authenticationType**: 'Anonymous' | 'Basic' | string: The authentication type to be used to connect to the MongoDB database.
* **authSource**: any: Database to verify the username and password. Type: string (or Expression with resultType string).
* **databaseName**: any (Required): The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for authentication.
* **port**: any: The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0.
* **server**: any (Required): The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: [SecretBase](#secretbase) (Required): The connection string.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## ODataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | string: Type of authentication used to connect to the OData service.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password of the OData service.
* **url**: any (Required): The URL of the OData service endpoint. Type: string (or Expression with resultType string).
* **userName**: any: User name of the OData service. Type: string (or Expression with resultType string).

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any: The OData resource path. Type: string (or Expression with resultType string).

## OdbcLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
* **credential**: [SecretBase](#secretbase): The access credential portion of the connection string specified in driver-specific property-value format.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for Basic authentication.
* **userName**: any: User name for Basic authentication. Type: string (or Expression with resultType string).

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## OracleTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the on-premises Oracle database. Type: string (or Expression with resultType string).

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
* **defaultValue**: any: Default value of parameter.
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
* **clientId**: any (Required): The client ID associated with your PayPal application.
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with your PayPal application.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The URL of the PayPal instance. (i.e. api.sandbox.paypal.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## PhoenixLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' | string (Required): The authentication mechanism used to connect to the Phoenix server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the Phoenix server. (i.e. 192.168.222.160)
* **httpPath**: any: The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService.
* **password**: [SecretBase](#secretbase): The password corresponding to the user name.
* **port**: any: The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to connect to the Phoenix server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## Pipeline
### Properties
* **activities**: [Activity](#activity)[]: List of activities in pipeline.
* **annotations**: any[]: List of tags that can be used for describing the Pipeline.
* **concurrency**: int: The max number of concurrent runs for the pipeline.
* **description**: string: The description of the pipeline.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): List of parameters for pipeline.

## PipelineReference
### Properties
* **name**: string: Reference name.
* **referenceName**: string (Required): Reference pipeline name.
* **type**: 'PipelineReference' | string (Required): Pipeline reference type.

## PostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: [SecretBase](#secretbase) (Required): The connection string.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## PrestoLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'LDAP' | string (Required): The authentication mechanism used to connect to the Presto server.
* **catalog**: any (Required): The catalog context for all request against the server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The IP address or host name of the Presto server. (i.e. 192.168.222.160)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name.
* **port**: any: The TCP port that the Presto server uses to listen for client connections. The default value is 8080.
* **serverVersion**: any (Required): The version of the Presto server. (i.e. 0.148-t)
* **timeZoneID**: any: The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to connect to the Presto server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## QuickBooksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase) (Required): The access token for OAuth 1.0 authentication.
* **accessTokenSecret**: [SecretBase](#secretbase) (Required): The access token secret for OAuth 1.0 authentication.
* **companyId**: any (Required): The company ID of the QuickBooks company to authorize.
* **consumerKey**: any (Required): The consumer key for OAuth 1.0 authentication.
* **consumerSecret**: [SecretBase](#secretbase) (Required): The consumer secret for OAuth 1.0 authentication.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.

## RedirectIncompatibleRowSettings
### Properties
* **linkedServiceName**: any (Required): Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string).
* **path**: any: The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string).
### Additional Properties
* **Additional Properties Type**: any

## RelationalTableDatasetTypeProperties
### Properties
* **tableName**: any: The relational table name. Type: string (or Expression with resultType string).

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResponsysLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client ID associated with the Responsys application. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with the Responsys application. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Responsys server.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).

## SalesforceLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **environmentUrl**: any: The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The password for Basic authentication of the Salesforce instance.
* **securityToken**: [SecretBase](#secretbase): The security token is required to remotely access Salesforce instance.
* **username**: any: The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).

## SalesforceMarketingCloudLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: The Salesforce object API name. Type: string (or Expression with resultType string).

## SapBWLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to access the SAP BW server.
* **server**: any (Required): Host name of the SAP BW instance. Type: string (or Expression with resultType string).
* **systemNumber**: any (Required): System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP BW server. Type: string (or Expression with resultType string).

## SapCloudForCustomerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The password for Basic authentication.
* **url**: any (Required): The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string).
* **username**: any: The username for Basic authentication. Type: string (or Expression with resultType string).

## SapCloudForCustomerResourceDatasetTypeProperties
### Properties
* **path**: any (Required): The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string).

## SapEccLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The password for Basic authentication.
* **url**: string (Required): The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
* **username**: string: The username for Basic authentication. Type: string (or Expression with resultType string).

## SapEccResourceDatasetTypeProperties
### Properties
* **path**: any (Required): The path of the SAP ECC OData entity. Type: string (or Expression with resultType string).

## SapHanaLinkedServiceProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows' | string: The authentication type to be used to connect to the SAP HANA server.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to access the SAP HANA server.
* **server**: any (Required): Host name of the SAP HANA server. Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP HANA server. Type: string (or Expression with resultType string).

## SecretBase
* **Discriminator**: type

### Base Properties

### AzureKeyVaultSecretReference
#### Properties
* **secretName**: any (Required): The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
* **secretVersion**: any: The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
* **store**: [LinkedServiceReference](#linkedservicereference) (Required): The Azure Key Vault linked service reference.
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
* **clientId**: any: The client id for OAuth2 authentication.
* **clientSecret**: [SecretBase](#secretbase): The client secret for OAuth2 authentication.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name for Basic and OAuth2 authentication.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any: The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication.

## SftpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'SshPublicKey' | string: The authentication type to be used to connect to the FTP server.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The SFTP server host name. Type: string (or Expression with resultType string).
* **hostKeyFingerprint**: any: The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string).
* **passPhrase**: [SecretBase](#secretbase): The password to decrypt the SSH private key if the SSH private key is encrypted.
* **password**: [SecretBase](#secretbase): Password to logon the SFTP server for Basic authentication.
* **port**: any: The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0.
* **privateKeyContent**: [SecretBase](#secretbase): Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format.
* **privateKeyPath**: any: The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string).
* **skipHostKeyValidation**: any: If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean).
* **userName**: any: The username used to log on to the SFTP server. Type: string (or Expression with resultType string).

## ShopifyLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The API access token that can be used to access Shopify’s data. The token won't expire if it is offline mode.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The endpoint of the Shopify server. (i.e. mystore.myshopify.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## SparkLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' | string (Required): The authentication method used to access the Spark server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): IP address or host name of the Spark server
* **httpPath**: any: The partial URL corresponding to the Spark server.
* **password**: [SecretBase](#secretbase): The password corresponding to the user name that you provided in the Username field
* **port**: any (Required): The TCP port that the Spark server uses to listen for client connections.
* **serverType**: 'SharkServer' | 'SharkServer2' | 'SparkThriftServer' | string: The type of Spark server.
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL' | string: The transport protocol to use in the Thrift layer.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name that you use to access Spark Server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## SqlServerLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The on-premises Windows authentication password.
* **userName**: any: The on-premises Windows authentication user name. Type: string (or Expression with resultType string).

## SqlServerStoredProcedureActivityTypeProperties
### Properties
* **storedProcedureName**: any (Required): Stored procedure name. Type: string (or Expression with resultType string).
* **storedProcedureParameters**: [SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters](#sqlserverstoredprocedureactivitytypepropertiesstoredprocedureparameters): Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".

## SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## SqlServerTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the SQL Server dataset. Type: string (or Expression with resultType string).

## SquareLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client ID associated with your Square application.
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with your Square application.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The URL of the Square instance. (i.e. mystore.mysquare.com)
* **redirectUri**: any (Required): The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## SsisAccessCredential
### Properties
* **domain**: any (Required): Domain for windows authentication.
* **password**: [SecretBase](#secretbase) (Required): Password for windows authentication.
* **userName**: any (Required): UseName for windows authentication.

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
* **domain**: any (Required): Domain for windows authentication.
* **password**: [SecureString](#securestring) (Required): Password for windows authentication.
* **userName**: any (Required): UseName for windows authentication.

## SsisExecutionParameter
### Properties
* **value**: any (Required): SSIS package execution parameter value. Type: string (or Expression with resultType string).

## SsisLogLocation
### Properties
* **logPath**: any (Required): The SSIS package execution log path. Type: string (or Expression with resultType string).
* **type**: 'File' | string (Required): The type of SSIS log location.
* **typeProperties**: [SsisLogLocationTypeProperties](#ssisloglocationtypeproperties) (Required): SSIS package execution log location properties.

## SsisLogLocationTypeProperties
### Properties
* **accessCredential**: [SsisAccessCredential](#ssisaccesscredential): The package execution log access credential.
* **logRefreshInterval**: any: Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).

## SsisPackageLocation
### Properties
* **packagePath**: any (Required): The SSIS package path. Type: string (or Expression with resultType string).
* **type**: 'File' | 'SSISDB' | string: The type of SSIS package location.
* **typeProperties**: [SsisPackageLocationTypeProperties](#ssispackagelocationtypeproperties): SSIS package location properties.

## SsisPackageLocationTypeProperties
### Properties
* **accessCredential**: [SsisAccessCredential](#ssisaccesscredential): The package access credential.
* **configurationPath**: any: The configuration file of the package execution. Type: string (or Expression with resultType string).
* **packagePassword**: [SecretBase](#secretbase): Password of the package.

## SsisPropertyOverride
### Properties
* **isSensitive**: bool: Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true
* **value**: any (Required): SSIS package property override value. Type: string (or Expression with resultType string).

## StagingSettings
### Properties
* **enableCompression**: any: Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Staging linked service reference.
* **path**: any: The path to storage for storing the interim data. Type: string (or Expression with resultType string).
### Additional Properties
* **Additional Properties Type**: any

## StoredProcedureParameter
### Properties
* **type**: 'Boolean' | 'Date' | 'Decimal' | 'Guid' | 'Int' | 'Int64' | 'String' | string: Stored procedure parameter type.
* **value**: any (Required): Stored procedure parameter value. Type: string (or Expression with resultType string).

## SybaseLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows' | string: AuthenticationType to be used for connection.
* **database**: any (Required): Database name for connection. Type: string (or Expression with resultType string).
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for authentication.
* **schema**: any: Schema name for connection. Type: string (or Expression with resultType string).
* **server**: any (Required): Server name for connection. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## TeradataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows' | string: AuthenticationType to be used for connection.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for authentication.
* **server**: any (Required): Server name for connection. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## Trigger
* **Discriminator**: type

### Base Properties
* **description**: string: Trigger description.
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' | string (ReadOnly): Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.

### MultiplePipelineTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'MultiplePipelineTrigger' (Required): Trigger type.


## TriggerPipelineReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): Pipeline parameters.
* **pipelineReference**: [PipelineReference](#pipelinereference): Pipeline reference.

## UntilActivityTypeProperties
### Properties
* **activities**: [Activity](#activity)[] (Required): List of activities to execute.
* **expression**: [Expression](#expression) (Required): An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true
* **timeout**: any: Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).

## WaitActivityTypeProperties
### Properties
* **waitTimeInSeconds**: int (Required): Duration in seconds.

## WebActivityAuthentication
### Properties
* **password**: [SecureString](#securestring): Password for the PFX file or basic authentication.
* **pfx**: [SecureString](#securestring): Base64-encoded contents of a PFX file.
* **resource**: string: Resource for which Azure Auth token will be requested when using MSI Authentication.
* **type**: string (Required): Web activity authentication (Basic/ClientCertificate/MSI)
* **username**: string: Web activity authentication user name for basic authentication.

## WebActivityTypeProperties
### Properties
* **authentication**: [WebActivityAuthentication](#webactivityauthentication): Authentication method used for calling the endpoint.
* **body**: any: Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
* **datasets**: [DatasetReference](#datasetreference)[]: List of datasets passed to web endpoint.
* **disableCertValidation**: bool: When set to true, Certificate validation will be disabled.
* **headers**: any: Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
* **linkedServices**: [LinkedServiceReference](#linkedservicereference)[]: List of linked services passed to web endpoint.
* **method**: 'DELETE' | 'GET' | 'POST' | 'PUT' | string (Required): Rest API method for target endpoint.
* **url**: any (Required): Web activity target endpoint and path. Type: string (or Expression with resultType string).

## WebLinkedServiceTypeProperties
* **Discriminator**: authenticationType

### Base Properties
* **url**: any (Required): The URL of the web service endpoint, e.g. https://www.microsoft.com . Type: string (or Expression with resultType string).

### WebAnonymousAuthentication
#### Properties
* **authenticationType**: 'Anonymous' (Required): Type of authentication used to connect to the web table source.

### WebBasicAuthentication
#### Properties
* **authenticationType**: 'Basic' (Required): Type of authentication used to connect to the web table source.
* **password**: [SecretBase](#secretbase) (Required): The password for Basic authentication.
* **username**: any (Required): User name for Basic authentication. Type: string (or Expression with resultType string).

### WebClientCertificateAuthentication
#### Properties
* **authenticationType**: 'ClientCertificate' (Required): Type of authentication used to connect to the web table source.
* **password**: [SecretBase](#secretbase) (Required): Password for the PFX file.
* **pfx**: [SecretBase](#secretbase) (Required): Base64-encoded contents of a PFX file.


## WebTableDatasetTypeProperties
### Properties
* **index**: any (Required): The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0.
* **path**: any: The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string).

## XeroLinkedServiceTypeProperties
### Properties
* **consumerKey**: [SecretBase](#secretbase): The consumer key associated with the Xero application.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **host**: any (Required): The endpoint of the Xero server. (i.e. api.xero.com)
* **privateKey**: [SecretBase](#secretbase): The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(
).
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## ZohoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The access token for Zoho authentication.
* **encryptedCredential**: any: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

