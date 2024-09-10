# Microsoft.DataFactory @ 2018-06-01

## Resource Microsoft.DataFactory/factories@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [FactoryIdentity](#factoryidentity): Managed service identity of the factory.
* **location**: string: The resource location.
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FactoryProperties](#factoryproperties): Properties of the factory.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/adfcdcs@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 260, pattern: "^[A-Za-z0-9_][^<>*#.%&:\\+?/]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ChangeDataCapture](#changedatacapture) (Required): Properties of the change data capture.
* **type**: 'Microsoft.DataFactory/factories/adfcdcs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/credentials@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 127, pattern: "^([_A-Za-z0-9]|([_A-Za-z0-9][-_A-Za-z0-9]{0,125}[_A-Za-z0-9]))$"} (Required, DeployTimeConstant): The resource name
* **properties**: [Credential](#credential) (Required): Properties of credentials.
* **type**: 'Microsoft.DataFactory/factories/credentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/dataflows@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 260, pattern: "^[A-Za-z0-9_][^<>*#.%&:\\+?/]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataFlow](#dataflow) (Required): Data flow properties.
* **type**: 'Microsoft.DataFactory/factories/dataflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/datasets@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 260, pattern: "^[A-Za-z0-9_][^<>*#.%&:\\+?/]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [Dataset](#dataset) (Required): Dataset properties.
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/globalParameters@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 260, pattern: "^[A-Za-z0-9_][^<>*#.%&:\\+?/]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GlobalParameter](#globalparameter) (Required): Properties of the global parameter.
* **type**: 'Microsoft.DataFactory/factories/globalParameters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationRuntime](#integrationruntime) (Required): Integration runtime properties.
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/linkedservices@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 260, pattern: "^[A-Za-z0-9_][^<>*#.%&:\\+?/]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedService](#linkedservice) (Required): Properties of linked service.
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 127, pattern: "^([_A-Za-z0-9]|([_A-Za-z0-9][-_A-Za-z0-9]{0,125}[_A-Za-z0-9]))$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedVirtualNetwork](#managedvirtualnetwork) (Required): Managed Virtual Network properties.
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 127, pattern: "^([_A-Za-z0-9]|([_A-Za-z0-9][-_A-Za-z0-9]{0,125}[_A-Za-z0-9]))$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedPrivateEndpoint](#managedprivateendpoint) (Required): Managed private endpoint properties.
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/pipelines@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 260, pattern: "^[A-Za-z0-9_][^<>*#.%&:\\+?/]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [Pipeline](#pipeline) (Required): Properties of the pipeline.
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnection](#privatelinkconnectionapprovalrequestorremoteprivateendpointconnection): Core resource properties
* **type**: 'Microsoft.DataFactory/factories/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/triggers@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 260, pattern: "^[A-Za-z0-9_][^<>*#.%&:\\+?/]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [Trigger](#trigger) (Required): Properties of the trigger.
* **type**: 'Microsoft.DataFactory/factories/triggers' (ReadOnly, DeployTimeConstant): The resource type

## Function listAuthKeys (Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01)
* **Resource**: Microsoft.DataFactory/factories/integrationRuntimes
* **ApiVersion**: 2018-06-01
* **Output**: [IntegrationRuntimeAuthKeys](#integrationruntimeauthkeys)

## Activity
* **Discriminator**: type

### Base Properties
* **dependsOn**: [ActivityDependency](#activitydependency)[]: Activity depends on condition.
* **description**: string: Activity description.
* **name**: string (Required): Activity name.
* **onInactiveMarkAs**: 'Failed' | 'Skipped' | 'Succeeded' | string: Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
* **state**: 'Active' | 'Inactive' | string: Activity state. This is an optional property and if not provided, the state will be Active by default.
* **userProperties**: [UserProperty](#userproperty)[]: Activity user properties.

### AppendVariableActivity
#### Properties
* **type**: 'AppendVariable' (Required): Type of activity.
* **typeProperties**: [AppendVariableActivityTypeProperties](#appendvariableactivitytypeproperties) (Required): Append Variable activity properties.

### AzureDataExplorerCommandActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'AzureDataExplorerCommand' (Required): Type of activity.
* **typeProperties**: [AzureDataExplorerCommandActivityTypeProperties](#azuredataexplorercommandactivitytypeproperties) (Required): Azure Data Explorer command activity properties.

### AzureFunctionActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'AzureFunctionActivity' (Required): Type of activity.
* **typeProperties**: [AzureFunctionActivityTypeProperties](#azurefunctionactivitytypeproperties) (Required): Azure Function activity properties.

### AzureMLBatchExecutionActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'AzureMLBatchExecution' (Required): Type of activity.
* **typeProperties**: [AzureMLBatchExecutionActivityTypeProperties](#azuremlbatchexecutionactivitytypeproperties) (Required): Azure ML Batch Execution activity properties.

### AzureMLExecutePipelineActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'AzureMLExecutePipeline' (Required): Type of activity.
* **typeProperties**: [AzureMLExecutePipelineActivityTypeProperties](#azuremlexecutepipelineactivitytypeproperties) (Required): Azure ML Execute Pipeline activity properties.

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

### DatabricksSparkJarActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'DatabricksSparkJar' (Required): Type of activity.
* **typeProperties**: [DatabricksSparkJarActivityTypeProperties](#databrickssparkjaractivitytypeproperties) (Required): Databricks SparkJar activity properties.

### DatabricksSparkPythonActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'DatabricksSparkPython' (Required): Type of activity.
* **typeProperties**: [DatabricksSparkPythonActivityTypeProperties](#databrickssparkpythonactivitytypeproperties) (Required): Databricks SparkPython activity properties.

### DataLakeAnalyticsUsqlActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'DataLakeAnalyticsU-SQL' (Required): Type of activity.
* **typeProperties**: [DataLakeAnalyticsUsqlActivityTypeProperties](#datalakeanalyticsusqlactivitytypeproperties) (Required): Data Lake Analytics U-SQL activity properties.

### DeleteActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'Delete' (Required): Type of activity.
* **typeProperties**: [DeleteActivityTypeProperties](#deleteactivitytypeproperties) (Required): Delete activity properties.

### ExecuteDataFlowActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'ExecuteDataFlow' (Required): Type of activity.
* **typeProperties**: [ExecuteDataFlowActivityTypeProperties](#executedataflowactivitytypeproperties) (Required): Execute data flow activity properties.

### ExecutePipelineActivity
#### Properties
* **policy**: [ExecutePipelineActivityPolicy](#executepipelineactivitypolicy): Execute pipeline activity policy.
* **type**: 'ExecutePipeline' (Required): Type of activity.
* **typeProperties**: [ExecutePipelineActivityTypeProperties](#executepipelineactivitytypeproperties) (Required): Execute pipeline activity properties.

### ExecuteSsisPackageActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'ExecuteSSISPackage' (Required): Type of activity.
* **typeProperties**: [ExecuteSsisPackageActivityTypeProperties](#executessispackageactivitytypeproperties) (Required): Execute SSIS package activity properties.

### ExecuteWranglingDataflowActivity
#### Properties
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'ExecuteWranglingDataflow' (Required): Type of activity.
* **typeProperties**: [ExecutePowerQueryActivityTypeProperties](#executepowerqueryactivitytypeproperties) (Required): Execute power query activity properties.

### FailActivity
#### Properties
* **type**: 'Fail' (Required): Type of activity.
* **typeProperties**: [FailActivityTypeProperties](#failactivitytypeproperties) (Required): Fail activity properties.

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

### ScriptActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'Script' (Required): Type of activity.
* **typeProperties**: [ScriptActivityTypeProperties](#scriptactivitytypeproperties) (Required): Script activity properties.

### SetVariableActivity
#### Properties
* **policy**: [SecureInputOutputPolicy](#secureinputoutputpolicy): Activity policy.
* **type**: 'SetVariable' (Required): Type of activity.
* **typeProperties**: [SetVariableActivityTypeProperties](#setvariableactivitytypeproperties) (Required): Set Variable activity properties.

### SynapseSparkJobDefinitionActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'SparkJob' (Required): Type of activity.
* **typeProperties**: [SynapseSparkJobActivityTypeProperties](#synapsesparkjobactivitytypeproperties) (Required): Execute spark job activity properties.

### SqlServerStoredProcedureActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'SqlServerStoredProcedure' (Required): Type of activity.
* **typeProperties**: [SqlServerStoredProcedureActivityTypeProperties](#sqlserverstoredprocedureactivitytypeproperties) (Required): SQL stored procedure activity properties.

### SwitchActivity
#### Properties
* **type**: 'Switch' (Required): Type of activity.
* **typeProperties**: [SwitchActivityTypeProperties](#switchactivitytypeproperties) (Required): Switch activity properties.

### SynapseNotebookActivity
#### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **policy**: [ActivityPolicy](#activitypolicy): Activity policy.
* **type**: 'SynapseNotebook' (Required): Type of activity.
* **typeProperties**: [SynapseNotebookActivityTypeProperties](#synapsenotebookactivitytypeproperties) (Required): Execute Synapse notebook activity properties.

### UntilActivity
#### Properties
* **type**: 'Until' (Required): Type of activity.
* **typeProperties**: [UntilActivityTypeProperties](#untilactivitytypeproperties) (Required): Until activity properties.

### ValidationActivity
#### Properties
* **type**: 'Validation' (Required): Type of activity.
* **typeProperties**: [ValidationActivityTypeProperties](#validationactivitytypeproperties) (Required): Validation activity properties.

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

### WebHookActivity
#### Properties
* **policy**: [SecureInputOutputPolicy](#secureinputoutputpolicy): Activity policy.
* **type**: 'WebHook' (Required): Type of activity.
* **typeProperties**: [WebHookActivityTypeProperties](#webhookactivitytypeproperties) (Required): WebHook activity properties.


## ActivityDependency
### Properties
* **activity**: string (Required): Activity name.
* **dependencyConditions**: ('Completed' | 'Failed' | 'Skipped' | 'Succeeded' | string)[] (Required): Match-Condition for the dependency.
### Additional Properties
* **Additional Properties Type**: any

## ActivityPolicy
### Properties
* **retry**: any: Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
* **retryIntervalInSeconds**: int {minValue: 30, maxValue: 86400}: Interval between each retry attempt (in seconds). The default is 30 sec.
* **secureInput**: bool: When set to true, Input from activity is considered as secure and will not be logged to monitoring.
* **secureOutput**: bool: When set to true, Output from activity is considered as secure and will not be logged to monitoring.
* **timeout**: any: Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
### Additional Properties
* **Additional Properties Type**: any

## AmazonMWSLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any (Required): The access key id used to access data.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **endpoint**: any (Required): The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com)
* **marketplaceID**: any (Required): The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2)
* **mwsAuthToken**: [SecretBase](#secretbase): The Amazon MWS authentication token.
* **secretKey**: [SecretBase](#secretbase): The secret key used to access data.
* **sellerID**: any (Required): The Amazon seller ID.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## AmazonRdsForLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): The Azure key vault secret reference of password in connection string.

## AmazonRdsForOraclePartitionSettings
### Properties
* **partitionColumnName**: any: The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
* **partitionLowerBound**: any: The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
* **partitionNames**: any: Names of the physical partitions of AmazonRdsForOracle table.
* **partitionUpperBound**: any: The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).

## AmazonRdsForOracleTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string).
* **table**: any: The table name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string).

## AmazonRdsForSqlServerLinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **applicationIntent**: any: The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
* **authenticationType**: 'SQL' | 'Windows' | string: The type used for authentication. Type: string.
* **commandTimeout**: any: The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **connectionString**: any: The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **connectRetryCount**: any: The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
* **connectRetryInterval**: any: The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
* **connectTimeout**: any: The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **database**: any: The name of the database, used by recommended version. Type: string (or Expression with resultType string).
* **encrypt**: any: Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **failoverPartner**: any: The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
* **hostNameInCertificate**: any: The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
* **integratedSecurity**: any: Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **loadBalanceTimeout**: any: The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
* **maxPoolSize**: any: The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **minPoolSize**: any: The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **multipleActiveResultSets**: any: When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **multiSubnetFailover**: any: If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **packetSize**: any: The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
* **password**: [SecretBase](#secretbase): The on-premises Windows authentication password.
* **pooling**: any: Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **server**: any: The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
* **trustServerCertificate**: any: Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **userName**: any: The on-premises Windows authentication user name. Type: string (or Expression with resultType string).

## AmazonRdsForSqlServerTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the SQL Server dataset. Type: string (or Expression with resultType string).
* **table**: any: The table name of the SQL Server dataset. Type: string (or Expression with resultType string).

## AmazonRedshiftLinkedServiceTypeProperties
### Properties
* **database**: any (Required): The database name of the Amazon Redshift source. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): The password of the Amazon Redshift source.
* **port**: any: The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer).
* **server**: any (Required): The name of the Amazon Redshift server. Type: string (or Expression with resultType string).
* **username**: any: The username of the Amazon Redshift source. Type: string (or Expression with resultType string).

## AmazonRedshiftTableDatasetTypeProperties
### Properties
* **schema**: any: The Amazon Redshift schema name. Type: string (or Expression with resultType string).
* **table**: any: The Amazon Redshift table name. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## AmazonS3CompatibleLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: The access key identifier of the Amazon S3 Compatible Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **forcePathStyle**: any: If true, use S3 path-style access instead of virtual hosted-style access. Default value is false. Type: boolean (or Expression with resultType boolean).
* **secretAccessKey**: [SecretBase](#secretbase): The secret access key of the Amazon S3 Compatible Identity and Access Management (IAM) user.
* **serviceUrl**: any: This value specifies the endpoint to access with the Amazon S3 Compatible Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).

## AmazonS3DatasetTypeProperties
### Properties
* **bucketName**: any (Required): The name of the Amazon S3 bucket. Type: string (or Expression with resultType string).
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the Amazon S3 object.
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format of files.
* **key**: any: The key of the Amazon S3 object. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of S3 object's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of S3 object's modified datetime. Type: string (or Expression with resultType string).
* **prefix**: any: The prefix filter for the S3 object name. Type: string (or Expression with resultType string).
* **version**: any: The version for the S3 object. Type: string (or Expression with resultType string).

## AmazonS3LinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
* **authenticationType**: any: The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **secretAccessKey**: [SecretBase](#secretbase): The secret access key of the Amazon S3 Identity and Access Management (IAM) user.
* **serviceUrl**: any: This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
* **sessionToken**: [SecretBase](#secretbase): The session token for the S3 temporary security credential.

## AppendVariableActivityTypeProperties
### Properties
* **value**: any: Value to be appended. Type: could be a static value matching type of the variable item or Expression with resultType matching type of the variable item
* **variableName**: string: Name of the variable whose value needs to be appended to.

## AppFiguresLinkedServiceTypeProperties
### Properties
* **clientKey**: [SecretBase](#secretbase) (Required): The client key for the AppFigures source.
* **password**: [SecretBase](#secretbase) (Required): The password of the AppFigures source.
* **userName**: any (Required): The username of the Appfigures source. Type: string (or Expression with resultType string).

## AsanaLinkedServiceTypeProperties
### Properties
* **apiToken**: [SecretBase](#secretbase) (Required): The api token for the Asana source.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.

## AvroDatasetTypeProperties
### Properties
* **avroCompressionCodec**: any: The data avroCompressionCodec. Type: string (or Expression with resultType string).
* **avroCompressionLevel**: int {minValue: 1, maxValue: 9}
* **location**: [DatasetLocation](#datasetlocation) (Required): The location of the avro storage.

## AvroWriteSettings
### Properties
* **fileNamePrefix**: any: Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
* **maxRowsPerFile**: any: Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
* **recordName**: string: Top level record name in write result, which is required in AVRO spec.
* **recordNamespace**: string: Record namespace in the write result.
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## AzPowerShellSetupTypeProperties
### Properties
* **version**: string (Required): The required version of Azure PowerShell to install.

## AzureBatchLinkedServiceTypeProperties
### Properties
* **accessKey**: [SecretBase](#secretbase): The Azure Batch account access key.
* **accountName**: any (Required): The Azure Batch account name. Type: string (or Expression with resultType string).
* **batchUri**: any (Required): The Azure Batch URI. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): The Azure Storage linked service reference.
* **poolName**: any (Required): The Azure Batch pool name. Type: string (or Expression with resultType string).

## AzureBlobDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the blob storage.
* **fileName**: any: The name of the Azure Blob. Type: string (or Expression with resultType string).
* **folderPath**: any: The path of the Azure Blob storage. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format of the Azure Blob storage.
* **modifiedDatetimeEnd**: any: The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string).
* **tableRootLocation**: any: The root of blob path. Type: string (or Expression with resultType string).

## AzureBlobFSDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the blob storage.
* **fileName**: any: The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string).
* **folderPath**: any: The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format of the Azure Data Lake Storage Gen2 storage.

## AzureBlobFSLinkedServiceTypeProperties
### Properties
* **accountKey**: any: Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **sasToken**: [SecretBase](#secretbase): The Azure key vault secret reference of sasToken in sas uri.
* **sasUri**: any: SAS URI of the Azure Data Lake Storage Gen2 service. Type: string, SecureString or AzureKeyVaultSecretReference.
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **url**: any: Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).

## AzureBlobStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of accountKey in connection string.
* **accountKind**: any: Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string).
* **authenticationType**: 'AccountKey' | 'Anonymous' | 'Msi' | 'SasUri' | 'ServicePrincipal' | string: The type used for authentication. Type: string.
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **connectionString**: any: The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **containerUri**: any: Container uri of the Azure Blob Storage resource only support for anonymous access. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **sasToken**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of sasToken in sas uri.
* **sasUri**: any: SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **serviceEndpoint**: any: Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property.
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against Azure SQL Data Warehouse.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureDatabricksDeltaLakeDatasetTypeProperties
### Properties
* **database**: any: The database name of delta table. Type: string (or Expression with resultType string).
* **table**: any: The name of delta table. Type: string (or Expression with resultType string).

## AzureDatabricksDeltaLakeExportCommand
### Properties
* **dateFormat**: any: Specify the date format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
* **timestampFormat**: any: Specify the timestamp format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
* **type**: string (Required): The export setting type.
### Additional Properties
* **Additional Properties Type**: any

## AzureDatabricksDeltaLakeImportCommand
### Properties
* **dateFormat**: any: Specify the date format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
* **timestampFormat**: any: Specify the timestamp format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
* **type**: string (Required): The import setting type.
### Additional Properties
* **Additional Properties Type**: any

## AzureDatabricksDetltaLakeLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string, SecureString or AzureKeyVaultSecretReference.
* **clusterId**: any: The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **domain**: any (Required): <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **workspaceResourceId**: any: Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).

## AzureDatabricksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string).
* **authentication**: any: Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **domain**: any (Required): <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **existingClusterId**: any: The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string).
* **instancePoolId**: any: The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string).
* **newClusterCustomTags**: [AzureDatabricksLinkedServiceTypePropertiesNewClusterCustomTags](#azuredatabrickslinkedservicetypepropertiesnewclustercustomtags): Additional tags for cluster resources. This property is ignored in instance pool configurations.
* **newClusterDriverNodeType**: any: The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string).
* **newClusterEnableElasticDisk**: any: Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean).
* **newClusterInitScripts**: any: User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings).
* **newClusterLogDestination**: any: Specify a location to deliver Spark driver, worker, and event logs. Type: string (or Expression with resultType string).
* **newClusterNodeType**: any: The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string).
* **newClusterNumOfWorker**: any: If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string).
* **newClusterSparkConf**: [AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf](#azuredatabrickslinkedservicetypepropertiesnewclustersparkconf): A set of optional, user-specified Spark configuration key-value pairs.
* **newClusterSparkEnvVars**: [AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkEnvVars](#azuredatabrickslinkedservicetypepropertiesnewclustersparkenvvars): A set of optional, user-specified Spark environment variables key-value pairs.
* **newClusterVersion**: any: If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string).
* **policyId**: any: The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string).
* **workspaceResourceId**: any: Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).

## AzureDatabricksLinkedServiceTypePropertiesNewClusterCustomTags
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkEnvVars
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureDataExplorerCommandActivityTypeProperties
### Properties
* **command**: any (Required): A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string).
* **commandTimeout**: any: Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..)

## AzureDataExplorerDatasetTypeProperties
### Properties
* **table**: any: The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string).

## AzureDataExplorerLinkedServiceTypeProperties
### Properties
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **database**: any (Required): Database name for connection. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string)
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against Kusto.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureDataLakeAnalyticsLinkedServiceTypeProperties
### Properties
* **accountName**: any (Required): The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string).
* **dataLakeAnalyticsUri**: any: Azure Data Lake Analytics URI Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **resourceGroupName**: any: Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The Key of the application used to authenticate against the Azure Data Lake Analytics account.
* **subscriptionId**: any: Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
* **tenant**: any (Required): The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the item(s) in the Azure Data Lake Store.
* **fileName**: any: The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string).
* **folderPath**: any: Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string).
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format of the Data Lake Store.

## AzureDataLakeStoreLinkedServiceTypeProperties
### Properties
* **accountName**: any: Data Lake Store account name. Type: string (or Expression with resultType string).
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **dataLakeStoreUri**: any (Required): Data Lake Store service URI. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **resourceGroupName**: any: Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The Key of the application used to authenticate against the Azure Data Lake Store account.
* **subscriptionId**: any: Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## AzureFileStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of accountKey in connection string.
* **connectionString**: any: The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **fileShare**: any: The azure file share name. It is required when auth with accountKey/sasToken. Type: string (or Expression with resultType string).
* **host**: any: Host name of the server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to logon the server.
* **sasToken**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of sasToken in sas uri.
* **sasUri**: any: SAS URI of the Azure File resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **serviceEndpoint**: any: File service endpoint of the Azure File Storage resource. It is mutually exclusive with connectionString, sasUri property.
* **snapshot**: any: The azure file share snapshot version. Type: string (or Expression with resultType string).
* **userId**: any: User ID to logon the server. Type: string (or Expression with resultType string).

## AzureFunctionActivityTypeProperties
### Properties
* **body**: any: Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
* **functionName**: any (Required): Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string)
* **headers**: [AzureFunctionActivityTypePropertiesHeaders](#azurefunctionactivitytypepropertiesheaders): Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
* **method**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE' | string (Required): Rest API method for target endpoint.

## AzureFunctionActivityTypePropertiesHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureFunctionLinkedServiceTypeProperties
### Properties
* **authentication**: any: Type of authentication (Required to specify MSI) used to connect to AzureFunction. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **functionAppUrl**: any (Required): The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net. Type: string (or Expression with resultType string).
* **functionKey**: [SecretBase](#secretbase): Function or Host key for Azure Function App.
* **resourceId**: any: Allowed token audiences for azure function. Type: string (or Expression with resultType string).

## AzureKeyVaultLinkedServiceTypeProperties
### Properties
* **baseUrl**: any (Required): The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.

## AzureKeyVaultSecretReference
### Properties
* **secretName**: any (Required): The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
* **secretVersion**: any: The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
* **store**: [LinkedServiceReference](#linkedservicereference) (Required): The Azure Key Vault linked service reference.
* **type**: string (Required): Type of the secret.

## AzureMariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.

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

## AzureMLExecutePipelineActivityTypeProperties
### Properties
* **continueOnStepFailure**: any: Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean).
* **dataPathAssignments**: any: Dictionary used for changing data path assignments without retraining. Values will be passed in the dataPathAssignments property of the published pipeline execution request. Type: object (or Expression with resultType object).
* **experimentName**: any: Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string).
* **mlParentRunId**: any: The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string).
* **mlPipelineEndpointId**: any: ID of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string).
* **mlPipelineId**: any: ID of the published Azure ML pipeline. Type: string (or Expression with resultType string).
* **mlPipelineParameters**: any: Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object).
* **version**: any: Version of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string).

## AzureMLLinkedServiceTypeProperties
### Properties
* **apiKey**: [SecretBase](#secretbase) (Required): The API key for accessing the Azure ML model endpoint.
* **authentication**: any: Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **mlEndpoint**: any (Required): The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **updateResourceEndpoint**: any: The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).

## AzureMLServiceLinkedServiceTypeProperties
### Properties
* **authentication**: any: Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **mlWorkspaceName**: any (Required): Azure ML Service workspace name. Type: string (or Expression with resultType string).
* **resourceGroupName**: any (Required): Azure ML Service workspace resource group name. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline.
* **subscriptionId**: any (Required): Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string).
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

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
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.

## AzureMySqlTableDatasetTypeProperties
### Properties
* **table**: any: The name of Azure MySQL database table. Type: string (or Expression with resultType string).
* **tableName**: any: The Azure MySQL database table name. Type: string (or Expression with resultType string).

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.

## AzurePostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string).
* **tableName**: any: The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string).

## AzureSearchIndexDatasetTypeProperties
### Properties
* **indexName**: any (Required): The name of the Azure Search Index. Type: string (or Expression with resultType string).

## AzureSearchLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **key**: [SecretBase](#secretbase): Admin Key for Azure Search service
* **url**: any (Required): URL for Azure Search service. Type: string (or Expression with resultType string).

## AzureSqlDatabaseLinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **applicationIntent**: any: The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
* **authenticationType**: 'SQL' | 'ServicePrincipal' | 'SystemAssignedManagedIdentity' | 'UserAssignedManagedIdentity' | string: The type used for authentication. Type: string.
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **commandTimeout**: any: The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **connectionString**: any: The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **connectRetryCount**: any: The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
* **connectRetryInterval**: any: The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
* **connectTimeout**: any: The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **database**: any: The name of the database, used by recommended version. Type: string (or Expression with resultType string).
* **encrypt**: any: Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **failoverPartner**: any: The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
* **hostNameInCertificate**: any: The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
* **integratedSecurity**: any: Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **loadBalanceTimeout**: any: The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
* **maxPoolSize**: any: The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **minPoolSize**: any: The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **multipleActiveResultSets**: any: When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **multiSubnetFailover**: any: If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **packetSize**: any: The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.
* **pooling**: any: Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **server**: any: The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against Azure SQL Database.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **trustServerCertificate**: any: Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **userName**: any: The user name to be used when connecting to server. Type: string (or Expression with resultType string).

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **applicationIntent**: any: The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
* **authenticationType**: 'SQL' | 'ServicePrincipal' | 'SystemAssignedManagedIdentity' | 'UserAssignedManagedIdentity' | string: The type used for authentication. Type: string.
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **commandTimeout**: any: The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **connectionString**: any: The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **connectRetryCount**: any: The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
* **connectRetryInterval**: any: The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
* **connectTimeout**: any: The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **database**: any: The name of the database, used by recommended version. Type: string (or Expression with resultType string).
* **encrypt**: any: Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **failoverPartner**: any: The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
* **hostNameInCertificate**: any: The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
* **integratedSecurity**: any: Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **loadBalanceTimeout**: any: The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
* **maxPoolSize**: any: The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **minPoolSize**: any: The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **multipleActiveResultSets**: any: When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **multiSubnetFailover**: any: If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **packetSize**: any: The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.
* **pooling**: any: Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **server**: any: The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against Azure SQL Data Warehouse.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **trustServerCertificate**: any: Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **userName**: any: The user name to be used when connecting to server. Type: string (or Expression with resultType string).

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## AzureSqlMILinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **applicationIntent**: any: The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
* **authenticationType**: 'SQL' | 'ServicePrincipal' | 'SystemAssignedManagedIdentity' | 'UserAssignedManagedIdentity' | string: The type used for authentication. Type: string.
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **commandTimeout**: any: The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **connectionString**: any: The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **connectRetryCount**: any: The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
* **connectRetryInterval**: any: The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
* **connectTimeout**: any: The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **database**: any: The name of the database, used by recommended version. Type: string (or Expression with resultType string).
* **encrypt**: any: Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **failoverPartner**: any: The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
* **hostNameInCertificate**: any: The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
* **integratedSecurity**: any: Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **loadBalanceTimeout**: any: The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
* **maxPoolSize**: any: The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **minPoolSize**: any: The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **multipleActiveResultSets**: any: When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **multiSubnetFailover**: any: If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **packetSize**: any: The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.
* **pooling**: any: Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **server**: any: The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against Azure SQL Managed Instance.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **trustServerCertificate**: any: Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **userName**: any: The user name to be used when connecting to server. Type: string (or Expression with resultType string).

## AzureSqlMITableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## AzureSqlTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Azure SQL database. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Azure SQL database. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## AzureStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of accountKey in connection string.
* **connectionString**: any: The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **sasToken**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of sasToken in sas uri.
* **sasUri**: any: SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.

## AzureSynapseArtifactsLinkedServiceTypeProperties
### Properties
* **authentication**: any: Required to specify MSI, if using system assigned managed identity as authentication method. Type: string (or Expression with resultType string).
* **endpoint**: any (Required): https://<workspacename>.dev.azuresynapse.net, Azure Synapse Analytics workspace URL. Type: string (or Expression with resultType string).
* **workspaceResourceId**: any: The resource ID of the Synapse workspace. The format should be: /subscriptions/{subscriptionID}/resourceGroups/{resourceGroup}/providers/Microsoft.Synapse/workspaces/{workspaceName}. Type: string (or Expression with resultType string).

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): The table name of the Azure Table storage. Type: string (or Expression with resultType string).

## AzureTableStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of accountKey in connection string.
* **connectionString**: any: The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **sasToken**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of sasToken in sas uri.
* **sasUri**: any: SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **serviceEndpoint**: any: Table service endpoint of the Azure Table Storage resource. It is mutually exclusive with connectionString, sasUri property.

## BigDataPoolParametrizationReference
### Properties
* **referenceName**: any (Required): Reference big data pool name. Type: string (or Expression with resultType string).
* **type**: 'BigDataPoolReference' | string (Required): Big data pool reference type.

## BinaryDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the binary dataset.
* **location**: [DatasetLocation](#datasetlocation) (Required): The location of the Binary storage.

## BinaryReadSettings
### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **type**: string (Required): The read setting type.
### Additional Properties
* **Additional Properties Type**: any

## BlobEventsTriggerTypeProperties
### Properties
* **blobPathBeginsWith**: string: The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
* **blobPathEndsWith**: string: The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
* **events**: ('Microsoft.Storage.BlobCreated' | 'Microsoft.Storage.BlobDeleted' | string)[] (Required): The type of events that cause this trigger to fire.
* **ignoreEmptyBlobs**: bool: If set to true, blobs with zero bytes will be ignored.
* **scope**: string (Required): The ARM resource ID of the Storage Account.

## BlobTriggerTypeProperties
### Properties
* **folderPath**: string (Required): The path of the container/folder that will trigger the pipeline.
* **linkedService**: [LinkedServiceReference](#linkedservicereference) (Required): The Azure Storage linked service reference.
* **maxConcurrency**: int (Required): The max number of parallel files to handle when it is triggered.

## CassandraLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: AuthenticationType to be used for connection. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): Host name for connection. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for authentication.
* **port**: any: The port for the connection. Type: integer (or Expression with resultType integer).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## CassandraTableDatasetTypeProperties
### Properties
* **keyspace**: any: The keyspace of the Cassandra database. Type: string (or Expression with resultType string).
* **tableName**: any: The table name of the Cassandra database. Type: string (or Expression with resultType string).

## ChainingTriggerTypeProperties
### Properties
* **dependsOn**: [PipelineReference](#pipelinereference)[] (Required): Upstream Pipelines.
* **runDimension**: string (Required): Run Dimension property that needs to be emitted by upstream pipelines.

## ChangeDataCapture
### Properties
* **allowVNetOverride**: bool: A boolean to determine if the vnet configuration needs to be overwritten.
* **description**: string: The description of the change data capture.
* **folder**: [ChangeDataCaptureFolder](#changedatacapturefolder): The folder that this CDC is in. If not specified, CDC will appear at the root level.
* **policy**: [MapperPolicy](#mapperpolicy) (Required): CDC policy
* **sourceConnectionsInfo**: [MapperSourceConnectionsInfo](#mappersourceconnectionsinfo)[] (Required): List of sources connections that can be used as sources in the CDC.
* **status**: string: Status of the CDC as to if it is running or stopped.
* **targetConnectionsInfo**: [MapperTargetConnectionsInfo](#mappertargetconnectionsinfo)[] (Required): List of target connections that can be used as sources in the CDC.

## ChangeDataCaptureFolder
### Properties
* **name**: string: The name of the folder that this CDC is in.

## CmdkeySetupTypeProperties
### Properties
* **password**: [SecretBase](#secretbase) (Required): The password of data source access.
* **targetName**: any (Required): The server name of data source access. Type: string.
* **userName**: any (Required): The user name of data source access. Type: string.

## CMKIdentityDefinition
### Properties
* **userAssignedIdentity**: string: The resource id of the user assigned identity to authenticate to customer's key vault.

## CommonDataServiceForAppsEntityDatasetTypeProperties
### Properties
* **entityName**: any: The logical name of the entity. Type: string (or Expression with resultType string).

## CommonDataServiceForAppsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario, 'Active Directory' for Dynamics on-premises with IFD. Type: string (or Expression with resultType string).
* **deploymentType**: any (Required): The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string).
* **domain**: any: The Active Directory domain that will verify user credentials. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **hostName**: any: The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
* **organizationName**: any: The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to access the Common Data Service for Apps instance.
* **port**: any: The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
* **serviceUri**: any: The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
* **username**: any: User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string).

## CompressionReadSettings
* **Discriminator**: type

### Base Properties

### TarGZipReadSettings
#### Properties
* **preserveCompressionFileNameAsFolder**: any: Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean).
* **type**: 'TarGZipReadSettings' (Required): The Compression setting type.

### TarReadSettings
#### Properties
* **preserveCompressionFileNameAsFolder**: any: Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean).
* **type**: 'TarReadSettings' (Required): The Compression setting type.

### ZipDeflateReadSettings
#### Properties
* **preserveZipFileNameAsFolder**: any: Preserve the zip file name as folder path. Type: boolean (or Expression with resultType boolean).
* **type**: 'ZipDeflateReadSettings' (Required): The Compression setting type.


## ConcurLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Application client_id supplied by Concur App Management.
* **connectionProperties**: any: Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): The password corresponding to the user name that you provided in the username field.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any (Required): The user name that you use to access Concur Service.

## ConnectionStateProperties
### Properties
* **actionsRequired**: string (ReadOnly): The actions required on the managed private endpoint
* **description**: string (ReadOnly): The managed private endpoint description
* **status**: string (ReadOnly): The approval status

## ContinuationSettingsReference
### Properties
* **continuationTtlInMinutes**: any: Continuation TTL in minutes.
* **customizedCheckpointKey**: any: Customized checkpoint key.
* **idleCondition**: any: Idle condition.

## CopyActivityLogSettings
### Properties
* **enableReliableLogging**: any: Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean).
* **logLevel**: any: Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string).

## CopyActivityTypeProperties
### Properties
* **dataIntegrationUnits**: any: Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0.
* **enableSkipIncompatibleRow**: any: Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean).
* **enableStaging**: any: Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
* **logSettings**: [LogSettings](#logsettings): Log settings customer needs provide when enabling log.
* **logStorageSettings**: [LogStorageSettings](#logstoragesettings): (Deprecated. Please use LogSettings) Log storage settings customer need to provide when enabling session log.
* **parallelCopies**: any: Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0.
* **preserve**: any[]: Preserve rules.
* **preserveRules**: any[]: Preserve Rules.
* **redirectIncompatibleRowSettings**: [RedirectIncompatibleRowSettings](#redirectincompatiblerowsettings): Redirect incompatible row settings when EnableSkipIncompatibleRow is true.
* **sink**: [CopySink](#copysink) (Required): Copy activity sink.
* **skipErrorFile**: [SkipErrorFile](#skiperrorfile): Specify the fault tolerance for data consistency.
* **source**: [CopySource](#copysource) (Required): Copy activity source.
* **stagingSettings**: [StagingSettings](#stagingsettings): Specifies interim staging settings when EnableStaging is true.
* **translator**: any: Copy activity translator. If not specified, tabular translator is used.
* **validateDataConsistency**: any: Whether to enable Data Consistency validation. Type: boolean (or Expression with resultType boolean).

## CopyComputeScaleProperties
### Properties
* **dataIntegrationUnit**: int {minValue: 4}: DIU number setting reserved for copy activity execution. Supported values are multiples of 4 in range 4-256.
* **timeToLive**: int {minValue: 5}: Time to live (in minutes) setting of integration runtime which will execute copy activity.
### Additional Properties
* **Additional Properties Type**: any

## CopySink
* **Discriminator**: type

### Base Properties
* **disableMetricsCollection**: any: If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
* **maxConcurrentConnections**: any: The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
* **sinkRetryCount**: any: Sink retry count. Type: integer (or Expression with resultType integer).
* **sinkRetryWait**: any: Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **writeBatchSize**: any: Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
* **writeBatchTimeout**: any: Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).

### AvroSink
#### Properties
* **formatSettings**: [AvroWriteSettings](#avrowritesettings): Avro format settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Avro store settings.
* **type**: 'AvroSink' (Required): Copy sink type.

### AzureBlobFSSink
#### Properties
* **copyBehavior**: any: The type of copy behavior for copy sink. Type: string (or Expression with resultType string).
* **metadata**: [MetadataItem](#metadataitem)[]: Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
* **type**: 'AzureBlobFSSink' (Required): Copy sink type.

### AzureDatabricksDeltaLakeSink
#### Properties
* **importSettings**: [AzureDatabricksDeltaLakeImportCommand](#azuredatabricksdeltalakeimportcommand): Azure Databricks Delta Lake import settings.
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **type**: 'AzureDatabricksDeltaLakeSink' (Required): Copy sink type.

### AzureDataExplorerSink
#### Properties
* **flushImmediately**: any: If set to true, any aggregation will be skipped. Default is false. Type: boolean.
* **ingestionMappingAsJson**: any: An explicit column mapping description provided in a json format. Type: string.
* **ingestionMappingName**: any: A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string.
* **type**: 'AzureDataExplorerSink' (Required): Copy sink type.

### AzureDataLakeStoreSink
#### Properties
* **copyBehavior**: any: The type of copy behavior for copy sink. Type: string (or Expression with resultType string).
* **enableAdlsSingleFileParallel**: any: Single File Parallel.
* **type**: 'AzureDataLakeStoreSink' (Required): Copy sink type.

### AzureMySqlSink
#### Properties
* **preCopyScript**: any: A query to execute before starting the copy. Type: string (or Expression with resultType string).
* **type**: 'AzureMySqlSink' (Required): Copy sink type.

### AzurePostgreSqlSink
#### Properties
* **preCopyScript**: any: A query to execute before starting the copy. Type: string (or Expression with resultType string).
* **type**: 'AzurePostgreSqlSink' (Required): Copy sink type.

### AzureQueueSink
#### Properties
* **type**: 'AzureQueueSink' (Required): Copy sink type.

### AzureSearchIndexSink
#### Properties
* **type**: 'AzureSearchIndexSink' (Required): Copy sink type.
* **writeBehavior**: 'Merge' | 'Upload' | string: Specify the write behavior when upserting documents into Azure Search Index.

### AzureSqlSink
#### Properties
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **sqlWriterStoredProcedureName**: any: SQL writer stored procedure name. Type: string (or Expression with resultType string).
* **sqlWriterTableType**: any: SQL writer table type. Type: string (or Expression with resultType string).
* **sqlWriterUseTableLock**: any: Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
* **storedProcedureParameters**: any: SQL stored procedure parameters.
* **storedProcedureTableTypeParameterName**: any: The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
* **tableOption**: any: The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
* **type**: 'AzureSqlSink' (Required): Copy sink type.
* **upsertSettings**: [SqlUpsertSettings](#sqlupsertsettings): SQL upsert settings.
* **writeBehavior**: any: Write behavior when copying data into Azure SQL. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum)

### AzureTableSink
#### Properties
* **azureTableDefaultPartitionKeyValue**: any: Azure Table default partition key value. Type: string (or Expression with resultType string).
* **azureTableInsertType**: any: Azure Table insert type. Type: string (or Expression with resultType string).
* **azureTablePartitionKeyName**: any: Azure Table partition key name. Type: string (or Expression with resultType string).
* **azureTableRowKeyName**: any: Azure Table row key name. Type: string (or Expression with resultType string).
* **type**: 'AzureTableSink' (Required): Copy sink type.

### BinarySink
#### Properties
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Binary store settings.
* **type**: 'BinarySink' (Required): Copy sink type.

### BlobSink
#### Properties
* **blobWriterAddHeader**: any: Blob writer add header. Type: boolean (or Expression with resultType boolean).
* **blobWriterDateTimeFormat**: any: Blob writer date time format. Type: string (or Expression with resultType string).
* **blobWriterOverwriteFiles**: any: Blob writer overwrite files. Type: boolean (or Expression with resultType boolean).
* **copyBehavior**: any: The type of copy behavior for copy sink.
* **metadata**: [MetadataItem](#metadataitem)[]: Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
* **type**: 'BlobSink' (Required): Copy sink type.

### CommonDataServiceForAppsSink
#### Properties
* **alternateKeyName**: any: The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
* **ignoreNullValues**: any: The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
* **type**: 'CommonDataServiceForAppsSink' (Required): Copy sink type.
* **writeBehavior**: 'Upsert' | string (Required): The write behavior for the operation.

### CosmosDbMongoDbApiSink
#### Properties
* **type**: 'CosmosDbMongoDbApiSink' (Required): Copy sink type.
* **writeBehavior**: any: Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).

### CosmosDbSqlApiSink
#### Properties
* **type**: 'CosmosDbSqlApiSink' (Required): Copy sink type.
* **writeBehavior**: any: Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert.

### DelimitedTextSink
#### Properties
* **formatSettings**: [DelimitedTextWriteSettings](#delimitedtextwritesettings): DelimitedText format settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): DelimitedText store settings.
* **type**: 'DelimitedTextSink' (Required): Copy sink type.

### DocumentDbCollectionSink
#### Properties
* **nestingSeparator**: any: Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string).
* **type**: 'DocumentDbCollectionSink' (Required): Copy sink type.
* **writeBehavior**: any: Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert.

### DynamicsCrmSink
#### Properties
* **alternateKeyName**: any: The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
* **ignoreNullValues**: any: The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
* **type**: 'DynamicsCrmSink' (Required): Copy sink type.
* **writeBehavior**: 'Upsert' | string (Required): The write behavior for the operation.

### DynamicsSink
#### Properties
* **alternateKeyName**: any: The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
* **ignoreNullValues**: any: The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
* **type**: 'DynamicsSink' (Required): Copy sink type.
* **writeBehavior**: 'Upsert' | string (Required): The write behavior for the operation.

### FileSystemSink
#### Properties
* **copyBehavior**: any: The type of copy behavior for copy sink.
* **type**: 'FileSystemSink' (Required): Copy sink type.

### IcebergSink
#### Properties
* **formatSettings**: [IcebergWriteSettings](#icebergwritesettings): Iceberg format settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Iceberg store settings.
* **type**: 'IcebergSink' (Required): Copy sink type.

### InformixSink
#### Properties
* **preCopyScript**: any: A query to execute before starting the copy. Type: string (or Expression with resultType string).
* **type**: 'InformixSink' (Required): Copy sink type.

### JsonSink
#### Properties
* **formatSettings**: [JsonWriteSettings](#jsonwritesettings): Json format settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Json store settings.
* **type**: 'JsonSink' (Required): Copy sink type.

### LakeHouseTableSink
#### Properties
* **partitionNameList**: any: Specify the partition column names from sink columns. Type: array of objects (or Expression with resultType array of objects).
* **partitionOption**: any: Create partitions in folder structure based on one or multiple columns. Each distinct column value (pair) will be a new partition. Possible values include: "None", "PartitionByKey".
* **tableActionOption**: any: The type of table action for LakeHouse Table sink. Possible values include: "None", "Append", "Overwrite".
* **type**: 'LakeHouseTableSink' (Required): Copy sink type.

### MicrosoftAccessSink
#### Properties
* **preCopyScript**: any: A query to execute before starting the copy. Type: string (or Expression with resultType string).
* **type**: 'MicrosoftAccessSink' (Required): Copy sink type.

### MongoDbAtlasSink
#### Properties
* **type**: 'MongoDbAtlasSink' (Required): Copy sink type.
* **writeBehavior**: any: Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).

### MongoDbV2Sink
#### Properties
* **type**: 'MongoDbV2Sink' (Required): Copy sink type.
* **writeBehavior**: any: Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).

### OdbcSink
#### Properties
* **preCopyScript**: any: A query to execute before starting the copy. Type: string (or Expression with resultType string).
* **type**: 'OdbcSink' (Required): Copy sink type.

### OracleSink
#### Properties
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **type**: 'OracleSink' (Required): Copy sink type.

### OrcSink
#### Properties
* **formatSettings**: [OrcWriteSettings](#orcwritesettings): ORC format settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): ORC store settings.
* **type**: 'OrcSink' (Required): Copy sink type.

### ParquetSink
#### Properties
* **formatSettings**: [ParquetWriteSettings](#parquetwritesettings): Parquet format settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Parquet store settings.
* **type**: 'ParquetSink' (Required): Copy sink type.

### RestSink
#### Properties
* **additionalHeaders**: any: The additional HTTP headers in the request to the RESTful API. Type: key value pairs (value should be string type).
* **httpCompressionType**: any: Http Compression Type to Send data in compressed format with Optimal Compression Level, Default is None. And The Only Supported option is Gzip. Type: string (or Expression with resultType string).
* **httpRequestTimeout**: any: The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **requestInterval**: any: The time to await before sending next request, in milliseconds
* **requestMethod**: any: The HTTP method used to call the RESTful API. The default is POST. Type: string (or Expression with resultType string).
* **type**: 'RestSink' (Required): Copy sink type.

### SalesforceServiceCloudSink
#### Properties
* **externalIdFieldName**: any: The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
* **ignoreNullValues**: any: The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
* **type**: 'SalesforceServiceCloudSink' (Required): Copy sink type.
* **writeBehavior**: 'Insert' | 'Upsert' | string: The write behavior for the operation. Default is Insert.

### SalesforceServiceCloudV2Sink
#### Properties
* **externalIdFieldName**: any: The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
* **ignoreNullValues**: any: The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
* **type**: 'SalesforceServiceCloudV2Sink' (Required): Copy sink type.
* **writeBehavior**: 'Insert' | 'Upsert' | string: The write behavior for the operation. Default is Insert.

### SalesforceSink
#### Properties
* **externalIdFieldName**: any: The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
* **ignoreNullValues**: any: The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
* **type**: 'SalesforceSink' (Required): Copy sink type.
* **writeBehavior**: 'Insert' | 'Upsert' | string: The write behavior for the operation. Default is Insert.

### SalesforceV2Sink
#### Properties
* **externalIdFieldName**: any: The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
* **ignoreNullValues**: any: The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
* **type**: 'SalesforceV2Sink' (Required): Copy sink type.
* **writeBehavior**: 'Insert' | 'Upsert' | string: The write behavior for the operation. Default is Insert.

### SapCloudForCustomerSink
#### Properties
* **httpRequestTimeout**: any: The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'SapCloudForCustomerSink' (Required): Copy sink type.
* **writeBehavior**: 'Insert' | 'Update' | string: The write behavior for the operation. Default is 'Insert'.

### SnowflakeSink
#### Properties
* **importSettings**: [SnowflakeImportCopyCommand](#snowflakeimportcopycommand): Snowflake import settings.
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **type**: 'SnowflakeSink' (Required): Copy sink type.

### SnowflakeV2Sink
#### Properties
* **importSettings**: [SnowflakeImportCopyCommand](#snowflakeimportcopycommand): Snowflake import settings.
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **type**: 'SnowflakeV2Sink' (Required): Copy sink type.

### SqlDWSink
#### Properties
* **allowCopyCommand**: any: Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean).
* **allowPolyBase**: any: Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean).
* **copyCommandSettings**: [DWCopyCommandSettings](#dwcopycommandsettings): Specifies Copy Command related settings when allowCopyCommand is true.
* **polyBaseSettings**: [PolybaseSettings](#polybasesettings): Specifies PolyBase-related settings when allowPolyBase is true.
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **sqlWriterUseTableLock**: any: Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
* **tableOption**: any: The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
* **type**: 'SqlDWSink' (Required): Copy sink type.
* **upsertSettings**: [SqlDWUpsertSettings](#sqldwupsertsettings): SQL DW upsert settings.
* **writeBehavior**: any: Write behavior when copying data into azure SQL DW. Type: SqlDWWriteBehaviorEnum (or Expression with resultType SqlDWWriteBehaviorEnum)

### SqlMISink
#### Properties
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **sqlWriterStoredProcedureName**: any: SQL writer stored procedure name. Type: string (or Expression with resultType string).
* **sqlWriterTableType**: any: SQL writer table type. Type: string (or Expression with resultType string).
* **sqlWriterUseTableLock**: any: Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
* **storedProcedureParameters**: any: SQL stored procedure parameters.
* **storedProcedureTableTypeParameterName**: any: The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
* **tableOption**: any: The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
* **type**: 'SqlMISink' (Required): Copy sink type.
* **upsertSettings**: [SqlUpsertSettings](#sqlupsertsettings): SQL upsert settings.
* **writeBehavior**: any: White behavior when copying data into azure SQL MI. Type: string (or Expression with resultType string)

### SqlServerSink
#### Properties
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **sqlWriterStoredProcedureName**: any: SQL writer stored procedure name. Type: string (or Expression with resultType string).
* **sqlWriterTableType**: any: SQL writer table type. Type: string (or Expression with resultType string).
* **sqlWriterUseTableLock**: any: Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
* **storedProcedureParameters**: any: SQL stored procedure parameters.
* **storedProcedureTableTypeParameterName**: any: The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
* **tableOption**: any: The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
* **type**: 'SqlServerSink' (Required): Copy sink type.
* **upsertSettings**: [SqlUpsertSettings](#sqlupsertsettings): SQL upsert settings.
* **writeBehavior**: any: Write behavior when copying data into sql server. Type: string (or Expression with resultType string).

### SqlSink
#### Properties
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **sqlWriterStoredProcedureName**: any: SQL writer stored procedure name. Type: string (or Expression with resultType string).
* **sqlWriterTableType**: any: SQL writer table type. Type: string (or Expression with resultType string).
* **sqlWriterUseTableLock**: any: Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
* **storedProcedureParameters**: any: SQL stored procedure parameters.
* **storedProcedureTableTypeParameterName**: any: The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
* **tableOption**: any: The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
* **type**: 'SqlSink' (Required): Copy sink type.
* **upsertSettings**: [SqlUpsertSettings](#sqlupsertsettings): SQL upsert settings.
* **writeBehavior**: any: Write behavior when copying data into sql. Type: string (or Expression with resultType string).

### WarehouseSink
#### Properties
* **allowCopyCommand**: any: Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean).
* **copyCommandSettings**: [DWCopyCommandSettings](#dwcopycommandsettings): Specifies Copy Command related settings when allowCopyCommand is true.
* **preCopyScript**: any: SQL pre-copy script. Type: string (or Expression with resultType string).
* **tableOption**: any: The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
* **type**: 'WarehouseSink' (Required): Copy sink type.
* **writeBehavior**: any: Write behavior when copying data into azure Microsoft Fabric Data Warehouse. Type: DWWriteBehaviorEnum (or Expression with resultType DWWriteBehaviorEnum)


## CopySource
* **Discriminator**: type

### Base Properties
* **disableMetricsCollection**: any: If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
* **maxConcurrentConnections**: any: The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
* **sourceRetryCount**: any: Source retry count. Type: integer (or Expression with resultType integer).
* **sourceRetryWait**: any: Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).

### AmazonMWSSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'AmazonMWSSource' (Required): Copy source type.

### AmazonRdsForOracleSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **oracleReaderQuery**: any: AmazonRdsForOracle reader query. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for AmazonRdsForOracle read in parallel. Type: string (or Expression with resultType string).
* **partitionSettings**: [AmazonRdsForOraclePartitionSettings](#amazonrdsfororaclepartitionsettings): The settings that will be leveraged for AmazonRdsForOracle source partitioning.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'AmazonRdsForOracleSource' (Required): Copy source type.

### AmazonRdsForSqlServerSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **isolationLevel**: any: Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **produceAdditionalTypes**: any: Which additional types to produce.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **sqlReaderQuery**: any: SQL reader query. Type: string (or Expression with resultType string).
* **sqlReaderStoredProcedureName**: any: Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
* **storedProcedureParameters**: any: Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'AmazonRdsForSqlServerSource' (Required): Copy source type.

### AmazonRedshiftSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **redshiftUnloadSettings**: [RedshiftUnloadSettings](#redshiftunloadsettings): The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3.
* **type**: 'AmazonRedshiftSource' (Required): Copy source type.

### AvroSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **storeSettings**: [StoreReadSettings](#storereadsettings): Avro store settings.
* **type**: 'AvroSource' (Required): Copy source type.

### AzureBlobFSSource
#### Properties
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **skipHeaderLineCount**: any: Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer).
* **treatEmptyAsNull**: any: Treat empty as null. Type: boolean (or Expression with resultType boolean).
* **type**: 'AzureBlobFSSource' (Required): Copy source type.

### AzureDatabricksDeltaLakeSource
#### Properties
* **exportSettings**: [AzureDatabricksDeltaLakeExportCommand](#azuredatabricksdeltalakeexportcommand): Azure Databricks Delta Lake export settings.
* **query**: any: Azure Databricks Delta Lake Sql query. Type: string (or Expression with resultType string).
* **type**: 'AzureDatabricksDeltaLakeSource' (Required): Copy source type.

### AzureDataExplorerSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **noTruncation**: any: The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit.
* **query**: any (Required): Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..
* **type**: 'AzureDataExplorerSource' (Required): Copy source type.

### AzureDataLakeStoreSource
#### Properties
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'AzureDataLakeStoreSource' (Required): Copy source type.

### AzureMariaDBSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'AzureMariaDBSource' (Required): Copy source type.

### AzureMySqlSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'AzureMySqlSource' (Required): Copy source type.

### AzurePostgreSqlSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'AzurePostgreSqlSource' (Required): Copy source type.

### AzureSqlSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **isolationLevel**: any: Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **produceAdditionalTypes**: any: Which additional types to produce.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **sqlReaderQuery**: any: SQL reader query. Type: string (or Expression with resultType string).
* **sqlReaderStoredProcedureName**: any: Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
* **storedProcedureParameters**: any: Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'AzureSqlSource' (Required): Copy source type.

### AzureTableSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **azureTableSourceIgnoreTableNotFound**: any: Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean).
* **azureTableSourceQuery**: any: Azure Table source query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'AzureTableSource' (Required): Copy source type.

### BinarySource
#### Properties
* **formatSettings**: [BinaryReadSettings](#binaryreadsettings): Binary format settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): Binary store settings.
* **type**: 'BinarySource' (Required): Copy source type.

### BlobSource
#### Properties
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **skipHeaderLineCount**: any: Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer).
* **treatEmptyAsNull**: any: Treat empty as null. Type: boolean (or Expression with resultType boolean).
* **type**: 'BlobSource' (Required): Copy source type.

### CassandraSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **consistencyLevel**: 'ALL' | 'EACH_QUORUM' | 'LOCAL_ONE' | 'LOCAL_QUORUM' | 'LOCAL_SERIAL' | 'ONE' | 'QUORUM' | 'SERIAL' | 'THREE' | 'TWO' | string: The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive.
* **query**: any: Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'CassandraSource' (Required): Copy source type.

### CommonDataServiceForAppsSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string).
* **type**: 'CommonDataServiceForAppsSource' (Required): Copy source type.

### ConcurSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'ConcurSource' (Required): Copy source type.

### CosmosDbMongoDbApiSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **batchSize**: any: Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
* **cursorMethods**: [MongoDbCursorMethodsProperties](#mongodbcursormethodsproperties): Cursor methods for Mongodb query.
* **filter**: any: Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'CosmosDbMongoDbApiSource' (Required): Copy source type.

### CosmosDbSqlApiSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **detectDatetime**: any: Whether detect primitive values as datetime values. Type: boolean (or Expression with resultType boolean).
* **pageSize**: any: Page size of the result. Type: integer (or Expression with resultType integer).
* **preferredRegions**: any: Preferred regions. Type: array of strings (or Expression with resultType array of strings).
* **query**: any: SQL API query. Type: string (or Expression with resultType string).
* **type**: 'CosmosDbSqlApiSource' (Required): Copy source type.

### CouchbaseSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'CouchbaseSource' (Required): Copy source type.

### Db2Source
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'Db2Source' (Required): Copy source type.

### DelimitedTextSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **formatSettings**: [DelimitedTextReadSettings](#delimitedtextreadsettings): DelimitedText format settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): DelimitedText store settings.
* **type**: 'DelimitedTextSource' (Required): Copy source type.

### DocumentDbCollectionSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **nestingSeparator**: any: Nested properties separator. Type: string (or Expression with resultType string).
* **query**: any: Documents query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'DocumentDbCollectionSource' (Required): Copy source type.

### DrillSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'DrillSource' (Required): Copy source type.

### DynamicsAXSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **httpRequestTimeout**: any: The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'DynamicsAXSource' (Required): Copy source type.

### DynamicsCrmSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string).
* **type**: 'DynamicsCrmSource' (Required): Copy source type.

### DynamicsSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string).
* **type**: 'DynamicsSource' (Required): Copy source type.

### EloquaSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'EloquaSource' (Required): Copy source type.

### ExcelSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **storeSettings**: [StoreReadSettings](#storereadsettings): Excel store settings.
* **type**: 'ExcelSource' (Required): Copy source type.

### FileSystemSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'FileSystemSource' (Required): Copy source type.

### GoogleAdWordsSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'GoogleAdWordsSource' (Required): Copy source type.

### GoogleBigQuerySource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'GoogleBigQuerySource' (Required): Copy source type.

### GoogleBigQueryV2Source
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'GoogleBigQueryV2Source' (Required): Copy source type.

### GreenplumSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'GreenplumSource' (Required): Copy source type.

### HBaseSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'HBaseSource' (Required): Copy source type.

### HdfsSource
#### Properties
* **distcpSettings**: [DistcpSettings](#distcpsettings): Specifies Distcp-related settings.
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'HdfsSource' (Required): Copy source type.

### HiveSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'HiveSource' (Required): Copy source type.

### HttpSource
#### Properties
* **httpRequestTimeout**: any: Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'HttpSource' (Required): Copy source type.

### HubspotSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'HubspotSource' (Required): Copy source type.

### ImpalaSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'ImpalaSource' (Required): Copy source type.

### InformixSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'InformixSource' (Required): Copy source type.

### JiraSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'JiraSource' (Required): Copy source type.

### JsonSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **formatSettings**: [JsonReadSettings](#jsonreadsettings): Json format settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): Json store settings.
* **type**: 'JsonSource' (Required): Copy source type.

### LakeHouseTableSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **timestampAsOf**: any: Query an older snapshot by timestamp. Type: string (or Expression with resultType string).
* **type**: 'LakeHouseTableSource' (Required): Copy source type.
* **versionAsOf**: any: Query an older snapshot by version. Type: integer (or Expression with resultType integer).

### MagentoSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'MagentoSource' (Required): Copy source type.

### MariaDBSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'MariaDBSource' (Required): Copy source type.

### MarketoSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'MarketoSource' (Required): Copy source type.

### MicrosoftAccessSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **type**: 'MicrosoftAccessSource' (Required): Copy source type.

### MongoDbAtlasSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **batchSize**: any: Specifies the number of documents to return in each batch of the response from MongoDB Atlas instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
* **cursorMethods**: [MongoDbCursorMethodsProperties](#mongodbcursormethodsproperties): Cursor methods for Mongodb query
* **filter**: any: Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'MongoDbAtlasSource' (Required): Copy source type.

### MongoDbSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string).
* **type**: 'MongoDbSource' (Required): Copy source type.

### MongoDbV2Source
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **batchSize**: any: Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
* **cursorMethods**: [MongoDbCursorMethodsProperties](#mongodbcursormethodsproperties): Cursor methods for Mongodb query
* **filter**: any: Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'MongoDbV2Source' (Required): Copy source type.

### MySqlSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'MySqlSource' (Required): Copy source type.

### NetezzaSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **partitionOption**: any: The partition mechanism that will be used for Netezza read in parallel. Possible values include: "None", "DataSlice", "DynamicRange".
* **partitionSettings**: [NetezzaPartitionSettings](#netezzapartitionsettings): The settings that will be leveraged for Netezza source partitioning.
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'NetezzaSource' (Required): Copy source type.

### ODataSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **httpRequestTimeout**: any: The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **query**: any: OData query. For example, "$top=1". Type: string (or Expression with resultType string).
* **type**: 'ODataSource' (Required): Copy source type.

### OdbcSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'OdbcSource' (Required): Copy source type.

### Office365Source
#### Properties
* **allowedGroups**: any: The groups containing all the users. Type: array of strings (or Expression with resultType array of strings).
* **dateFilterColumn**: any: The Column to apply the <paramref name="StartTime"/> and <paramref name="EndTime"/>. Type: string (or Expression with resultType string).
* **endTime**: any: End time of the requested range for this dataset. Type: string (or Expression with resultType string).
* **outputColumns**: any: The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). itemType: OutputColumn. Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ]
* **startTime**: any: Start time of the requested range for this dataset. Type: string (or Expression with resultType string).
* **type**: 'Office365Source' (Required): Copy source type.
* **userScopeFilterUri**: any: The user scope uri. Type: string (or Expression with resultType string).

### OracleServiceCloudSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'OracleServiceCloudSource' (Required): Copy source type.

### OracleSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **oracleReaderQuery**: any: Oracle reader query. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for Oracle read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
* **partitionSettings**: [OraclePartitionSettings](#oraclepartitionsettings): The settings that will be leveraged for Oracle source partitioning.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'OracleSource' (Required): Copy source type.

### OrcSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **storeSettings**: [StoreReadSettings](#storereadsettings): ORC store settings.
* **type**: 'OrcSource' (Required): Copy source type.

### ParquetSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **formatSettings**: [ParquetReadSettings](#parquetreadsettings): Parquet format settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): Parquet store settings.
* **type**: 'ParquetSource' (Required): Copy source type.

### PaypalSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'PaypalSource' (Required): Copy source type.

### PhoenixSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'PhoenixSource' (Required): Copy source type.

### PostgreSqlSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'PostgreSqlSource' (Required): Copy source type.

### PostgreSqlV2Source
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'PostgreSqlV2Source' (Required): Copy source type.

### PrestoSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'PrestoSource' (Required): Copy source type.

### QuickBooksSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'QuickBooksSource' (Required): Copy source type.

### RelationalSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **type**: 'RelationalSource' (Required): Copy source type.

### ResponsysSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'ResponsysSource' (Required): Copy source type.

### RestSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: key value pairs (value should be string type).
* **additionalHeaders**: any: The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
* **httpRequestTimeout**: any: The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **paginationRules**: any: The pagination rules to compose next page requests. Type: string (or Expression with resultType string).
* **requestBody**: any: The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
* **requestInterval**: any: The time to await before sending next page request.
* **requestMethod**: any: The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
* **type**: 'RestSource' (Required): Copy source type.

### SalesforceMarketingCloudSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'SalesforceMarketingCloudSource' (Required): Copy source type.

### SalesforceServiceCloudSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **readBehavior**: any: The read behavior for the operation. Default is Query. Allowed values: Query/QueryAll. Type: string (or Expression with resultType string).
* **type**: 'SalesforceServiceCloudSource' (Required): Copy source type.

### SalesforceServiceCloudV2Source
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **includeDeletedObjects**: any: This property control whether query result contains Deleted objects. Default is false. Type: boolean (or Expression with resultType boolean).
* **query**: any: You can only use Salesforce Object Query Language (SOQL) query with limitations. For SOQL limitations, see this article: https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/queries.htm#SOQL%20Considerations. If query is not specified, all the data of the Salesforce object specified in ObjectApiName/reportId in dataset will be retrieved. Type: string (or Expression with resultType string).
* **SOQLQuery**: any: Deprecating, please use 'query' property instead. Type: string (or Expression with resultType string).
* **type**: 'SalesforceServiceCloudV2Source' (Required): Copy source type.

### SalesforceSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **readBehavior**: any: The read behavior for the operation. Default is Query. Allowed values: Query/QueryAll. Type: string (or Expression with resultType string).
* **type**: 'SalesforceSource' (Required): Copy source type.

### SalesforceV2Source
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **includeDeletedObjects**: any: This property control whether query result contains Deleted objects. Default is false. Type: boolean (or Expression with resultType boolean).
* **query**: any: You can only use Salesforce Object Query Language (SOQL) query with limitations. For SOQL limitations, see this article: https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/queries.htm#SOQL%20Considerations. If query is not specified, all the data of the Salesforce object specified in ObjectApiName/reportId in dataset will be retrieved. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **SOQLQuery**: any: Deprecating, please use 'query' property instead. Type: string (or Expression with resultType string).
* **type**: 'SalesforceV2Source' (Required): Copy source type.

### SapBwSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: MDX query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'SapBwSource' (Required): Copy source type.

### SapCloudForCustomerSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **httpRequestTimeout**: any: The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **query**: any: SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'SapCloudForCustomerSource' (Required): Copy source type.

### SapEccSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **httpRequestTimeout**: any: The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **query**: any: SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'SapEccSource' (Required): Copy source type.

### SapHanaSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **packetSize**: any: The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer).
* **partitionOption**: any: The partition mechanism that will be used for SAP HANA read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "SapHanaDynamicRange".
* **partitionSettings**: [SapHanaPartitionSettings](#saphanapartitionsettings): The settings that will be leveraged for SAP HANA source partitioning.
* **query**: any: SAP HANA Sql query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'SapHanaSource' (Required): Copy source type.

### SapOdpSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **extractionMode**: any: The extraction mode. Allowed value include: Full, Delta and Recovery. The default value is Full. Type: string (or Expression with resultType string).
* **projection**: any: Specifies the columns to be selected from source data. Type: array of objects(projection) (or Expression with resultType array of objects).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **selection**: any: Specifies the selection conditions from source data. Type: array of objects(selection) (or Expression with resultType array of objects).
* **subscriberProcess**: any: The subscriber process to manage the delta process. Type: string (or Expression with resultType string).
* **type**: 'SapOdpSource' (Required): Copy source type.

### SapOpenHubSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **baseRequestId**: any: The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
* **customRfcReadTableFunctionModule**: any: Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string).
* **excludeLastRequest**: any: Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **sapDataColumnDelimiter**: any: The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string).
* **type**: 'SapOpenHubSource' (Required): Copy source type.

### SapTableSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **batchSize**: any: Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer).
* **customRfcReadTableFunctionModule**: any: Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for SAP table read in parallel. Possible values include: "None", "PartitionOnInt", "PartitionOnCalendarYear", "PartitionOnCalendarMonth", "PartitionOnCalendarDate", "PartitionOnTime".
* **partitionSettings**: [SapTablePartitionSettings](#saptablepartitionsettings): The settings that will be leveraged for SAP table source partitioning.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **rfcTableFields**: any: The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string).
* **rfcTableOptions**: any: The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string).
* **rowCount**: any: The number of rows to be retrieved. Type: integer(or Expression with resultType integer).
* **rowSkips**: any: The number of rows that will be skipped. Type: integer (or Expression with resultType integer).
* **sapDataColumnDelimiter**: any: The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string).
* **type**: 'SapTableSource' (Required): Copy source type.

### ServiceNowSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'ServiceNowSource' (Required): Copy source type.

### ServiceNowV2Source
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **expression**: [ExpressionV2](#expressionv2): Expression to filter data from source.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'ServiceNowV2Source' (Required): Copy source type.

### SharePointOnlineListSource
#### Properties
* **httpRequestTimeout**: any: The wait time to get a response from SharePoint Online. Default value is 5 minutes (00:05:00). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **query**: any: The OData query to filter the data in SharePoint Online list. For example, "$top=1". Type: string (or Expression with resultType string).
* **type**: 'SharePointOnlineListSource' (Required): Copy source type.

### ShopifySource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'ShopifySource' (Required): Copy source type.

### SnowflakeSource
#### Properties
* **exportSettings**: [SnowflakeExportCopyCommand](#snowflakeexportcopycommand) (Required): Snowflake export settings.
* **query**: any: Snowflake Sql query. Type: string (or Expression with resultType string).
* **type**: 'SnowflakeSource' (Required): Copy source type.

### SnowflakeV2Source
#### Properties
* **exportSettings**: [SnowflakeExportCopyCommand](#snowflakeexportcopycommand) (Required): Snowflake export settings.
* **query**: any: Snowflake Sql query. Type: string (or Expression with resultType string).
* **type**: 'SnowflakeV2Source' (Required): Copy source type.

### SparkSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'SparkSource' (Required): Copy source type.

### SqlDWSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **isolationLevel**: any: Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **sqlReaderQuery**: any: SQL Data Warehouse reader query. Type: string (or Expression with resultType string).
* **sqlReaderStoredProcedureName**: any: Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
* **storedProcedureParameters**: any: Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter.
* **type**: 'SqlDWSource' (Required): Copy source type.

### SqlMISource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **isolationLevel**: any: Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **produceAdditionalTypes**: any: Which additional types to produce.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **sqlReaderQuery**: any: SQL reader query. Type: string (or Expression with resultType string).
* **sqlReaderStoredProcedureName**: any: Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
* **storedProcedureParameters**: any: Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'SqlMISource' (Required): Copy source type.

### SqlServerSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **isolationLevel**: any: Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **produceAdditionalTypes**: any: Which additional types to produce.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **sqlReaderQuery**: any: SQL reader query. Type: string (or Expression with resultType string).
* **sqlReaderStoredProcedureName**: any: Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
* **storedProcedureParameters**: any: Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'SqlServerSource' (Required): Copy source type.

### SqlSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **isolationLevel**: any: Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **sqlReaderQuery**: any: SQL reader query. Type: string (or Expression with resultType string).
* **sqlReaderStoredProcedureName**: any: Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
* **storedProcedureParameters**: any: Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'SqlSource' (Required): Copy source type.

### SquareSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'SquareSource' (Required): Copy source type.

### SybaseSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: Database query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'SybaseSource' (Required): Copy source type.

### TeradataSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **partitionOption**: any: The partition mechanism that will be used for teradata read in parallel. Possible values include: "None", "Hash", "DynamicRange".
* **partitionSettings**: [TeradataPartitionSettings](#teradatapartitionsettings): The settings that will be leveraged for teradata source partitioning.
* **query**: any: Teradata query. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'TeradataSource' (Required): Copy source type.

### VerticaSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'VerticaSource' (Required): Copy source type.

### WarehouseSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **isolationLevel**: any: Specifies the transaction locking behavior for the Microsoft Fabric Warehouse source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
* **partitionOption**: any: The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **sqlReaderQuery**: any: Microsoft Fabric Warehouse reader query. Type: string (or Expression with resultType string).
* **sqlReaderStoredProcedureName**: any: Name of the stored procedure for a Microsoft Fabric Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
* **storedProcedureParameters**: any: Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter.
* **type**: 'WarehouseSource' (Required): Copy source type.

### WebSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **type**: 'WebSource' (Required): Copy source type.

### XeroSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'XeroSource' (Required): Copy source type.

### XmlSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **formatSettings**: [XmlReadSettings](#xmlreadsettings): Xml format settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): Xml store settings.
* **type**: 'XmlSource' (Required): Copy source type.

### ZohoSource
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **query**: any: A query to retrieve data from source. Type: string (or Expression with resultType string).
* **queryTimeout**: any: Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **type**: 'ZohoSource' (Required): Copy source type.


## CosmosDbLinkedServiceTypeProperties
### Properties
* **accountEndpoint**: any: The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string)
* **accountKey**: [SecretBase](#secretbase): The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference.
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **connectionMode**: 'Direct' | 'Gateway' | string: The connection mode used to access CosmosDB account. Type: string.
* **connectionString**: any: The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **database**: any: The name of the database. Type: string (or Expression with resultType string)
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string.
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).

## CosmosDbMongoDbApiCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required): The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string).

## CosmosDbMongoDbApiLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any (Required): The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string).
* **isServerVersionAbove32**: any: Whether the CosmosDB (MongoDB API) server version is higher than 3.2. The default value is false. Type: boolean (or Expression with resultType boolean).

## CosmosDbSqlApiCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string).

## CouchbaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **credString**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of credString in connection string.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.

## Credential
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Credential.
* **description**: string: Credential description.

### ManagedIdentityCredential
#### Properties
* **type**: 'ManagedIdentity' (Required): Type of credential.
* **typeProperties**: [ManagedIdentityTypeProperties](#managedidentitytypeproperties): Managed identity credential properties.

### ServicePrincipalCredential
#### Properties
* **type**: 'ServicePrincipal' (Required): Type of credential.
* **typeProperties**: [ServicePrincipalCredentialTypeProperties](#serviceprincipalcredentialtypeproperties) (Required): Service Principal credential properties.


## CredentialReference
### Properties
* **referenceName**: string (Required): Reference credential name.
* **type**: 'CredentialReference' | string (Required): Credential reference type.
### Additional Properties
* **Additional Properties Type**: any

## CustomActivityReferenceObject
### Properties
* **datasets**: [DatasetReference](#datasetreference)[]: Dataset references.
* **linkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Linked service references.

## CustomActivityTypeProperties
### Properties
* **autoUserSpecification**: any: Elevation level and scope for the user, default is nonadmin task. Type: string (or Expression with resultType double).
* **command**: any (Required): Command for custom activity Type: string (or Expression with resultType string).
* **extendedProperties**: [CustomActivityTypePropertiesExtendedProperties](#customactivitytypepropertiesextendedproperties): User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined.
* **folderPath**: any: Folder path for resource files Type: string (or Expression with resultType string).
* **referenceObjects**: [CustomActivityReferenceObject](#customactivityreferenceobject): Reference objects
* **resourceLinkedService**: [LinkedServiceReference](#linkedservicereference): Resource linked service reference.
* **retentionTimeInDays**: any: The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double).

## CustomActivityTypePropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## CustomEventsTriggerTypeProperties
### Properties
* **events**: any[] (Required): The list of event types that cause this trigger to fire.
* **scope**: string (Required): The ARM resource ID of the Azure Event Grid Topic.
* **subjectBeginsWith**: string: The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.
* **subjectEndsWith**: string: The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.

## CustomSetupBase
* **Discriminator**: type

### Base Properties

### AzPowerShellSetup
#### Properties
* **type**: 'AzPowerShellSetup' (Required): The type of custom setup.
* **typeProperties**: [AzPowerShellSetupTypeProperties](#azpowershellsetuptypeproperties) (Required): Install Azure PowerShell type properties.

### CmdkeySetup
#### Properties
* **type**: 'CmdkeySetup' (Required): The type of custom setup.
* **typeProperties**: [CmdkeySetupTypeProperties](#cmdkeysetuptypeproperties) (Required): Cmdkey command custom setup type properties.

### ComponentSetup
#### Properties
* **type**: 'ComponentSetup' (Required): The type of custom setup.
* **typeProperties**: [LicensedComponentSetupTypeProperties](#licensedcomponentsetuptypeproperties) (Required): Install 3rd party component type properties.

### EnvironmentVariableSetup
#### Properties
* **type**: 'EnvironmentVariableSetup' (Required): The type of custom setup.
* **typeProperties**: [EnvironmentVariableSetupTypeProperties](#environmentvariablesetuptypeproperties) (Required): Add environment variable type properties.


## DatabricksNotebookActivityTypeProperties
### Properties
* **baseParameters**: [DatabricksNotebookActivityTypePropertiesBaseParameters](#databricksnotebookactivitytypepropertiesbaseparameters): Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used.
* **libraries**: [DatabricksNotebookActivityTypePropertiesLibrariesItem](#databricksnotebookactivitytypepropertieslibrariesitem)[]: A list of libraries to be installed on the cluster that will execute the job.
* **notebookPath**: any (Required): The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string).

## DatabricksNotebookActivityTypePropertiesBaseParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatabricksNotebookActivityTypePropertiesLibrariesItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatabricksSparkJarActivityTypeProperties
### Properties
* **libraries**: [DatabricksSparkJarActivityTypePropertiesLibrariesItem](#databrickssparkjaractivitytypepropertieslibrariesitem)[]: A list of libraries to be installed on the cluster that will execute the job.
* **mainClassName**: any (Required): The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string).
* **parameters**: any[]: Parameters that will be passed to the main method.

## DatabricksSparkJarActivityTypePropertiesLibrariesItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatabricksSparkPythonActivityTypeProperties
### Properties
* **libraries**: [DatabricksSparkPythonActivityTypePropertiesLibrariesItem](#databrickssparkpythonactivitytypepropertieslibrariesitem)[]: A list of libraries to be installed on the cluster that will execute the job.
* **parameters**: any[]: Command line parameters that will be passed to the Python file.
* **pythonFile**: any (Required): The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string).

## DatabricksSparkPythonActivityTypePropertiesLibrariesItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DataFlow
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the data flow.
* **description**: string: The description of the data flow.
* **folder**: [DataFlowFolder](#dataflowfolder): The folder that this data flow is in. If not specified, Data flow will appear at the root level.

### Flowlet
#### Properties
* **type**: 'Flowlet' (Required): Type of data flow.
* **typeProperties**: [FlowletTypeProperties](#flowlettypeproperties): Flowlet type properties.

### MappingDataFlow
#### Properties
* **type**: 'MappingDataFlow' (Required): Type of data flow.
* **typeProperties**: [MappingDataFlowTypeProperties](#mappingdataflowtypeproperties): Mapping data flow type properties.

### WranglingDataFlow
#### Properties
* **type**: 'WranglingDataFlow' (Required): Type of data flow.
* **typeProperties**: [PowerQueryTypeProperties](#powerquerytypeproperties): PowerQuery data flow type properties.


## DataFlowFolder
### Properties
* **name**: string: The name of the folder that this data flow is in.

## DataFlowReference
### Properties
* **datasetParameters**: any: Reference data flow parameters from dataset.
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): Data flow parameters
* **referenceName**: string (Required): Reference data flow name.
* **type**: 'DataFlowReference' | string (Required): Data flow reference type.
### Additional Properties
* **Additional Properties Type**: any

## DataFlowSink
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference.
* **description**: string: Transformation description.
* **flowlet**: [DataFlowReference](#dataflowreference): Flowlet Reference
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **name**: string (Required): Transformation name.
* **rejectedDataLinkedService**: [LinkedServiceReference](#linkedservicereference): Rejected data linked service reference.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Schema linked service reference.

## DataFlowSource
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference.
* **description**: string: Transformation description.
* **flowlet**: [DataFlowReference](#dataflowreference): Flowlet Reference
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **name**: string (Required): Transformation name.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Schema linked service reference.

## DataFlowStagingInfo
### Properties
* **folderPath**: any: Folder path for staging blob. Type: string (or Expression with resultType string)
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Staging linked service reference.

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

## DataMapperMapping
### Properties
* **attributeMappingInfo**: [MapperAttributeMappings](#mapperattributemappings): This holds the user provided attribute mapping information.
* **sourceConnectionReference**: [MapperConnectionReference](#mapperconnectionreference): The connection reference for the source connection.
* **sourceDenormalizeInfo**: any: This holds the source denormalization information used while joining multiple sources.
* **sourceEntityName**: string: Name of the source table
* **targetEntityName**: string: Name of the target table

## Dataset
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
* **description**: string: Dataset description.
* **folder**: [DatasetFolder](#datasetfolder): The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Parameters for dataset.
* **schema**: any: Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
* **structure**: any: Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.

### AmazonMWSObjectDataset
#### Properties
* **type**: 'AmazonMWSObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### AmazonRdsForOracleTableDataset
#### Properties
* **type**: 'AmazonRdsForOracleTable' (Required): Type of dataset.
* **typeProperties**: [AmazonRdsForOracleTableDatasetTypeProperties](#amazonrdsfororacletabledatasettypeproperties): AmazonRdsForOracle dataset properties.

### AmazonRdsForSqlServerTableDataset
#### Properties
* **type**: 'AmazonRdsForSqlServerTable' (Required): Type of dataset.
* **typeProperties**: [AmazonRdsForSqlServerTableDatasetTypeProperties](#amazonrdsforsqlservertabledatasettypeproperties): The Amazon RDS for SQL Server dataset properties.

### AmazonRedshiftTableDataset
#### Properties
* **type**: 'AmazonRedshiftTable' (Required): Type of dataset.
* **typeProperties**: [AmazonRedshiftTableDatasetTypeProperties](#amazonredshifttabledatasettypeproperties): Amazon Redshift table dataset properties.

### AmazonS3Dataset
#### Properties
* **type**: 'AmazonS3Object' (Required): Type of dataset.
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required): Amazon S3 dataset properties.

### AvroDataset
#### Properties
* **type**: 'Avro' (Required): Type of dataset.
* **typeProperties**: [AvroDatasetTypeProperties](#avrodatasettypeproperties): Avro dataset properties.

### AzureBlobDataset
#### Properties
* **type**: 'AzureBlob' (Required): Type of dataset.
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties): Azure Blob dataset properties.

### AzureBlobFSDataset
#### Properties
* **type**: 'AzureBlobFSFile' (Required): Type of dataset.
* **typeProperties**: [AzureBlobFSDatasetTypeProperties](#azureblobfsdatasettypeproperties): Azure Data Lake Storage Gen2 dataset properties.

### AzureDatabricksDeltaLakeDataset
#### Properties
* **type**: 'AzureDatabricksDeltaLakeDataset' (Required): Type of dataset.
* **typeProperties**: [AzureDatabricksDeltaLakeDatasetTypeProperties](#azuredatabricksdeltalakedatasettypeproperties): Properties specific to this dataset type.

### AzureDataExplorerTableDataset
#### Properties
* **type**: 'AzureDataExplorerTable' (Required): Type of dataset.
* **typeProperties**: [AzureDataExplorerDatasetTypeProperties](#azuredataexplorerdatasettypeproperties) (Required): Azure Data Explorer (Kusto) dataset properties.

### AzureDataLakeStoreDataset
#### Properties
* **type**: 'AzureDataLakeStoreFile' (Required): Type of dataset.
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties): Azure Data Lake Store dataset properties.

### AzureMariaDBTableDataset
#### Properties
* **type**: 'AzureMariaDBTable' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### AzureMySqlTableDataset
#### Properties
* **type**: 'AzureMySqlTable' (Required): Type of dataset.
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required): Azure MySQL database dataset properties.

### AzurePostgreSqlTableDataset
#### Properties
* **type**: 'AzurePostgreSqlTable' (Required): Type of dataset.
* **typeProperties**: [AzurePostgreSqlTableDatasetTypeProperties](#azurepostgresqltabledatasettypeproperties): Properties specific to this dataset type.

### AzureSearchIndexDataset
#### Properties
* **type**: 'AzureSearchIndex' (Required): Type of dataset.
* **typeProperties**: [AzureSearchIndexDatasetTypeProperties](#azuresearchindexdatasettypeproperties) (Required): Properties specific to this dataset type.

### AzureSqlDWTableDataset
#### Properties
* **type**: 'AzureSqlDWTable' (Required): Type of dataset.
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties): Azure SQL Data Warehouse dataset properties.

### AzureSqlMITableDataset
#### Properties
* **type**: 'AzureSqlMITable' (Required): Type of dataset.
* **typeProperties**: [AzureSqlMITableDatasetTypeProperties](#azuresqlmitabledatasettypeproperties): Azure SQL Managed Instance dataset properties.

### AzureSqlTableDataset
#### Properties
* **type**: 'AzureSqlTable' (Required): Type of dataset.
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties): Azure SQL dataset properties.

### AzureTableDataset
#### Properties
* **type**: 'AzureTable' (Required): Type of dataset.
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required): Azure Table dataset properties.

### BinaryDataset
#### Properties
* **type**: 'Binary' (Required): Type of dataset.
* **typeProperties**: [BinaryDatasetTypeProperties](#binarydatasettypeproperties): Binary dataset properties.

### CassandraTableDataset
#### Properties
* **type**: 'CassandraTable' (Required): Type of dataset.
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties): Cassandra dataset properties.

### CommonDataServiceForAppsEntityDataset
#### Properties
* **type**: 'CommonDataServiceForAppsEntity' (Required): Type of dataset.
* **typeProperties**: [CommonDataServiceForAppsEntityDatasetTypeProperties](#commondataserviceforappsentitydatasettypeproperties): Common Data Service for Apps entity dataset properties.

### ConcurObjectDataset
#### Properties
* **type**: 'ConcurObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### CosmosDbMongoDbApiCollectionDataset
#### Properties
* **type**: 'CosmosDbMongoDbApiCollection' (Required): Type of dataset.
* **typeProperties**: [CosmosDbMongoDbApiCollectionDatasetTypeProperties](#cosmosdbmongodbapicollectiondatasettypeproperties) (Required): CosmosDB (MongoDB API) database dataset properties.

### CosmosDbSqlApiCollectionDataset
#### Properties
* **type**: 'CosmosDbSqlApiCollection' (Required): Type of dataset.
* **typeProperties**: [CosmosDbSqlApiCollectionDatasetTypeProperties](#cosmosdbsqlapicollectiondatasettypeproperties) (Required): CosmosDB (SQL API) Collection dataset properties.

### CouchbaseTableDataset
#### Properties
* **type**: 'CouchbaseTable' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### CustomDataset
#### Properties
* **type**: 'CustomDataset' (Required): Type of dataset.
* **typeProperties**: any: Custom dataset properties.

### Db2TableDataset
#### Properties
* **type**: 'Db2Table' (Required): Type of dataset.
* **typeProperties**: [Db2TableDatasetTypeProperties](#db2tabledatasettypeproperties): Db2 table dataset properties.

### DelimitedTextDataset
#### Properties
* **type**: 'DelimitedText' (Required): Type of dataset.
* **typeProperties**: [DelimitedTextDatasetTypeProperties](#delimitedtextdatasettypeproperties): Delimited text dataset properties.

### DocumentDbCollectionDataset
#### Properties
* **type**: 'DocumentDbCollection' (Required): Type of dataset.
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required): DocumentDB Collection dataset properties.

### DrillTableDataset
#### Properties
* **type**: 'DrillTable' (Required): Type of dataset.
* **typeProperties**: [DrillDatasetTypeProperties](#drilldatasettypeproperties): Properties specific to this dataset type.

### DynamicsAXResourceDataset
#### Properties
* **type**: 'DynamicsAXResource' (Required): Type of dataset.
* **typeProperties**: [DynamicsAXResourceDatasetTypeProperties](#dynamicsaxresourcedatasettypeproperties) (Required): Dynamics AX OData resource dataset properties.

### DynamicsCrmEntityDataset
#### Properties
* **type**: 'DynamicsCrmEntity' (Required): Type of dataset.
* **typeProperties**: [DynamicsCrmEntityDatasetTypeProperties](#dynamicscrmentitydatasettypeproperties): Dynamics CRM entity dataset properties.

### DynamicsEntityDataset
#### Properties
* **type**: 'DynamicsEntity' (Required): Type of dataset.
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties): Dynamics entity dataset properties.

### EloquaObjectDataset
#### Properties
* **type**: 'EloquaObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### ExcelDataset
#### Properties
* **type**: 'Excel' (Required): Type of dataset.
* **typeProperties**: [ExcelDatasetTypeProperties](#exceldatasettypeproperties): Excel dataset properties.

### FileShareDataset
#### Properties
* **type**: 'FileShare' (Required): Type of dataset.
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties): On-premises file system dataset properties.

### GoogleAdWordsObjectDataset
#### Properties
* **type**: 'GoogleAdWordsObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### GoogleBigQueryObjectDataset
#### Properties
* **type**: 'GoogleBigQueryObject' (Required): Type of dataset.
* **typeProperties**: [GoogleBigQueryDatasetTypeProperties](#googlebigquerydatasettypeproperties): Properties specific to this dataset type.

### GoogleBigQueryV2ObjectDataset
#### Properties
* **type**: 'GoogleBigQueryV2Object' (Required): Type of dataset.
* **typeProperties**: [GoogleBigQueryV2DatasetTypeProperties](#googlebigqueryv2datasettypeproperties): Properties specific to this dataset type.

### GreenplumTableDataset
#### Properties
* **type**: 'GreenplumTable' (Required): Type of dataset.
* **typeProperties**: [GreenplumDatasetTypeProperties](#greenplumdatasettypeproperties): Properties specific to this dataset type.

### HBaseObjectDataset
#### Properties
* **type**: 'HBaseObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### HiveObjectDataset
#### Properties
* **type**: 'HiveObject' (Required): Type of dataset.
* **typeProperties**: [HiveDatasetTypeProperties](#hivedatasettypeproperties): Properties specific to this dataset type.

### HttpDataset
#### Properties
* **type**: 'HttpFile' (Required): Type of dataset.
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties): Properties specific to this dataset type.

### HubspotObjectDataset
#### Properties
* **type**: 'HubspotObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### IcebergDataset
#### Properties
* **type**: 'Iceberg' (Required): Type of dataset.
* **typeProperties**: [IcebergDatasetTypeProperties](#icebergdatasettypeproperties): Iceberg dataset properties.

### ImpalaObjectDataset
#### Properties
* **type**: 'ImpalaObject' (Required): Type of dataset.
* **typeProperties**: [ImpalaDatasetTypeProperties](#impaladatasettypeproperties): Properties specific to this dataset type.

### InformixTableDataset
#### Properties
* **type**: 'InformixTable' (Required): Type of dataset.
* **typeProperties**: [InformixTableDatasetTypeProperties](#informixtabledatasettypeproperties): Informix table dataset properties.

### JiraObjectDataset
#### Properties
* **type**: 'JiraObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### JsonDataset
#### Properties
* **type**: 'Json' (Required): Type of dataset.
* **typeProperties**: [JsonDatasetTypeProperties](#jsondatasettypeproperties): Json dataset properties.

### LakeHouseTableDataset
#### Properties
* **type**: 'LakeHouseTable' (Required): Type of dataset.
* **typeProperties**: [LakeHouseTableDatasetTypeProperties](#lakehousetabledatasettypeproperties): Microsoft Fabric LakeHouse Table dataset properties.

### MagentoObjectDataset
#### Properties
* **type**: 'MagentoObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### MariaDBTableDataset
#### Properties
* **type**: 'MariaDBTable' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### MarketoObjectDataset
#### Properties
* **type**: 'MarketoObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### MicrosoftAccessTableDataset
#### Properties
* **type**: 'MicrosoftAccessTable' (Required): Type of dataset.
* **typeProperties**: [MicrosoftAccessTableDatasetTypeProperties](#microsoftaccesstabledatasettypeproperties): Microsoft Access table dataset properties.

### MongoDbAtlasCollectionDataset
#### Properties
* **type**: 'MongoDbAtlasCollection' (Required): Type of dataset.
* **typeProperties**: [MongoDbAtlasCollectionDatasetTypeProperties](#mongodbatlascollectiondatasettypeproperties) (Required): MongoDB Atlas database dataset properties.

### MongoDbCollectionDataset
#### Properties
* **type**: 'MongoDbCollection' (Required): Type of dataset.
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required): MongoDB database dataset properties.

### MongoDbV2CollectionDataset
#### Properties
* **type**: 'MongoDbV2Collection' (Required): Type of dataset.
* **typeProperties**: [MongoDbV2CollectionDatasetTypeProperties](#mongodbv2collectiondatasettypeproperties) (Required): MongoDB database dataset properties.

### MySqlTableDataset
#### Properties
* **type**: 'MySqlTable' (Required): Type of dataset.
* **typeProperties**: [MySqlTableDatasetTypeProperties](#mysqltabledatasettypeproperties): MySQL table dataset properties.

### NetezzaTableDataset
#### Properties
* **type**: 'NetezzaTable' (Required): Type of dataset.
* **typeProperties**: [NetezzaTableDatasetTypeProperties](#netezzatabledatasettypeproperties): Properties specific to this dataset type.

### ODataResourceDataset
#### Properties
* **type**: 'ODataResource' (Required): Type of dataset.
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties): OData dataset properties.

### OdbcTableDataset
#### Properties
* **type**: 'OdbcTable' (Required): Type of dataset.
* **typeProperties**: [OdbcTableDatasetTypeProperties](#odbctabledatasettypeproperties): ODBC table dataset properties.

### Office365Dataset
#### Properties
* **type**: 'Office365Table' (Required): Type of dataset.
* **typeProperties**: [Office365DatasetTypeProperties](#office365datasettypeproperties) (Required): Office365 dataset properties.

### OracleServiceCloudObjectDataset
#### Properties
* **type**: 'OracleServiceCloudObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### OracleTableDataset
#### Properties
* **type**: 'OracleTable' (Required): Type of dataset.
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties): On-premises Oracle dataset properties.

### OrcDataset
#### Properties
* **type**: 'Orc' (Required): Type of dataset.
* **typeProperties**: [OrcDatasetTypeProperties](#orcdatasettypeproperties): ORC dataset properties.

### ParquetDataset
#### Properties
* **type**: 'Parquet' (Required): Type of dataset.
* **typeProperties**: [ParquetDatasetTypeProperties](#parquetdatasettypeproperties): Parquet dataset properties.

### PaypalObjectDataset
#### Properties
* **type**: 'PaypalObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### PhoenixObjectDataset
#### Properties
* **type**: 'PhoenixObject' (Required): Type of dataset.
* **typeProperties**: [PhoenixDatasetTypeProperties](#phoenixdatasettypeproperties): Properties specific to this dataset type.

### PostgreSqlTableDataset
#### Properties
* **type**: 'PostgreSqlTable' (Required): Type of dataset.
* **typeProperties**: [PostgreSqlTableDatasetTypeProperties](#postgresqltabledatasettypeproperties): PostgreSQL table dataset properties.

### PostgreSqlV2TableDataset
#### Properties
* **type**: 'PostgreSqlV2Table' (Required): Type of dataset.
* **typeProperties**: [PostgreSqlV2TableDatasetTypeProperties](#postgresqlv2tabledatasettypeproperties): PostgreSQLV2 table dataset properties.

### PrestoObjectDataset
#### Properties
* **type**: 'PrestoObject' (Required): Type of dataset.
* **typeProperties**: [PrestoDatasetTypeProperties](#prestodatasettypeproperties): Properties specific to this dataset type.

### QuickBooksObjectDataset
#### Properties
* **type**: 'QuickBooksObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### RelationalTableDataset
#### Properties
* **type**: 'RelationalTable' (Required): Type of dataset.
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties): Relational table dataset properties.

### ResponsysObjectDataset
#### Properties
* **type**: 'ResponsysObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### RestResourceDataset
#### Properties
* **type**: 'RestResource' (Required): Type of dataset.
* **typeProperties**: [RestResourceDatasetTypeProperties](#restresourcedatasettypeproperties): Properties specific to this dataset type.

### SalesforceMarketingCloudObjectDataset
#### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SalesforceObjectDataset
#### Properties
* **type**: 'SalesforceObject' (Required): Type of dataset.
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties): Salesforce object dataset properties.

### SalesforceServiceCloudObjectDataset
#### Properties
* **type**: 'SalesforceServiceCloudObject' (Required): Type of dataset.
* **typeProperties**: [SalesforceServiceCloudObjectDatasetTypeProperties](#salesforceservicecloudobjectdatasettypeproperties): Salesforce Service Cloud object dataset properties.

### SalesforceServiceCloudV2ObjectDataset
#### Properties
* **type**: 'SalesforceServiceCloudV2Object' (Required): Type of dataset.
* **typeProperties**: [SalesforceServiceCloudV2ObjectDatasetTypeProperties](#salesforceservicecloudv2objectdatasettypeproperties): Salesforce Service Cloud V2 object dataset properties.

### SalesforceV2ObjectDataset
#### Properties
* **type**: 'SalesforceV2Object' (Required): Type of dataset.
* **typeProperties**: [SalesforceV2ObjectDatasetTypeProperties](#salesforcev2objectdatasettypeproperties): Salesforce V2 object dataset properties.

### SapBwCubeDataset
#### Properties
* **type**: 'SapBwCube' (Required): Type of dataset.

### SapCloudForCustomerResourceDataset
#### Properties
* **type**: 'SapCloudForCustomerResource' (Required): Type of dataset.
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required): SAP Cloud For Customer OData resource dataset properties.

### SapEccResourceDataset
#### Properties
* **type**: 'SapEccResource' (Required): Type of dataset.
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required): SAP ECC OData resource dataset properties.

### SapHanaTableDataset
#### Properties
* **type**: 'SapHanaTable' (Required): Type of dataset.
* **typeProperties**: [SapHanaTableDatasetTypeProperties](#saphanatabledatasettypeproperties): SAP HANA Table properties.

### SapOdpResourceDataset
#### Properties
* **type**: 'SapOdpResource' (Required): Type of dataset.
* **typeProperties**: [SapOdpResourceDatasetTypeProperties](#sapodpresourcedatasettypeproperties) (Required): SAP ODP Resource properties.

### SapOpenHubTableDataset
#### Properties
* **type**: 'SapOpenHubTable' (Required): Type of dataset.
* **typeProperties**: [SapOpenHubTableDatasetTypeProperties](#sapopenhubtabledatasettypeproperties) (Required): Sap Business Warehouse Open Hub Destination Table properties.

### SapTableResourceDataset
#### Properties
* **type**: 'SapTableResource' (Required): Type of dataset.
* **typeProperties**: [SapTableResourceDatasetTypeProperties](#saptableresourcedatasettypeproperties) (Required): SAP Table Resource properties.

### ServiceNowObjectDataset
#### Properties
* **type**: 'ServiceNowObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### ServiceNowV2ObjectDataset
#### Properties
* **type**: 'ServiceNowV2Object' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SharePointOnlineListResourceDataset
#### Properties
* **type**: 'SharePointOnlineListResource' (Required): Type of dataset.
* **typeProperties**: [SharePointOnlineListDatasetTypeProperties](#sharepointonlinelistdatasettypeproperties): Sharepoint online list dataset properties.

### ShopifyObjectDataset
#### Properties
* **type**: 'ShopifyObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SnowflakeDataset
#### Properties
* **type**: 'SnowflakeTable' (Required): Type of dataset.
* **typeProperties**: [SnowflakeDatasetTypeProperties](#snowflakedatasettypeproperties) (Required): Snowflake dataset properties.

### SnowflakeV2Dataset
#### Properties
* **type**: 'SnowflakeV2Table' (Required): Type of dataset.
* **typeProperties**: [SnowflakeDatasetTypeProperties](#snowflakedatasettypeproperties) (Required): Snowflake dataset properties.

### SparkObjectDataset
#### Properties
* **type**: 'SparkObject' (Required): Type of dataset.
* **typeProperties**: [SparkDatasetTypeProperties](#sparkdatasettypeproperties): Properties specific to this dataset type.

### SqlServerTableDataset
#### Properties
* **type**: 'SqlServerTable' (Required): Type of dataset.
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties): On-premises SQL Server dataset properties.

### SquareObjectDataset
#### Properties
* **type**: 'SquareObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SybaseTableDataset
#### Properties
* **type**: 'SybaseTable' (Required): Type of dataset.
* **typeProperties**: [SybaseTableDatasetTypeProperties](#sybasetabledatasettypeproperties): Sybase table dataset properties.

### TeradataTableDataset
#### Properties
* **type**: 'TeradataTable' (Required): Type of dataset.
* **typeProperties**: [TeradataTableDatasetTypeProperties](#teradatatabledatasettypeproperties): Teradata dataset properties.

### VerticaTableDataset
#### Properties
* **type**: 'VerticaTable' (Required): Type of dataset.
* **typeProperties**: [VerticaDatasetTypeProperties](#verticadatasettypeproperties): Properties specific to this dataset type.

### WarehouseTableDataset
#### Properties
* **type**: 'WarehouseTable' (Required): Type of dataset.
* **typeProperties**: [WarehouseTableDatasetTypeProperties](#warehousetabledatasettypeproperties): Microsoft Fabric Warehouse dataset properties.

### WebTableDataset
#### Properties
* **type**: 'WebTable' (Required): Type of dataset.
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required): Web table dataset properties.

### XeroObjectDataset
#### Properties
* **type**: 'XeroObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### XmlDataset
#### Properties
* **type**: 'Xml' (Required): Type of dataset.
* **typeProperties**: [XmlDatasetTypeProperties](#xmldatasettypeproperties): Xml dataset properties.

### ZohoObjectDataset
#### Properties
* **type**: 'ZohoObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.


## DatasetCompression
### Properties
* **level**: any: The dataset compression level. Type: string (or Expression with resultType string).
* **type**: any (Required): Type of dataset compression. Type: string (or Expression with resultType string).
### Additional Properties
* **Additional Properties Type**: any

## DatasetFolder
### Properties
* **name**: string: The name of the folder that this Dataset is in.

## DatasetLocation
* **Discriminator**: type

### Base Properties
* **fileName**: any: Specify the file name of dataset. Type: string (or Expression with resultType string).
* **folderPath**: any: Specify the folder path of dataset. Type: string (or Expression with resultType string)

### AmazonS3CompatibleLocation
#### Properties
* **bucketName**: any: Specify the bucketName of Amazon S3 Compatible. Type: string (or Expression with resultType string)
* **type**: 'AmazonS3CompatibleLocation' (Required): Type of dataset storage location.
* **version**: any: Specify the version of Amazon S3 Compatible. Type: string (or Expression with resultType string).

### AmazonS3Location
#### Properties
* **bucketName**: any: Specify the bucketName of amazon S3. Type: string (or Expression with resultType string)
* **type**: 'AmazonS3Location' (Required): Type of dataset storage location.
* **version**: any: Specify the version of amazon S3. Type: string (or Expression with resultType string).

### AzureBlobFSLocation
#### Properties
* **fileSystem**: any: Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string).
* **type**: 'AzureBlobFSLocation' (Required): Type of dataset storage location.

### AzureBlobStorageLocation
#### Properties
* **container**: any: Specify the container of azure blob. Type: string (or Expression with resultType string).
* **type**: 'AzureBlobStorageLocation' (Required): Type of dataset storage location.

### AzureDataLakeStoreLocation
#### Properties
* **type**: 'AzureDataLakeStoreLocation' (Required): Type of dataset storage location.

### AzureFileStorageLocation
#### Properties
* **type**: 'AzureFileStorageLocation' (Required): Type of dataset storage location.

### FileServerLocation
#### Properties
* **type**: 'FileServerLocation' (Required): Type of dataset storage location.

### FtpServerLocation
#### Properties
* **type**: 'FtpServerLocation' (Required): Type of dataset storage location.

### GoogleCloudStorageLocation
#### Properties
* **bucketName**: any: Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string)
* **type**: 'GoogleCloudStorageLocation' (Required): Type of dataset storage location.
* **version**: any: Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string).

### HdfsLocation
#### Properties
* **type**: 'HdfsLocation' (Required): Type of dataset storage location.

### HttpServerLocation
#### Properties
* **relativeUrl**: any: Specify the relativeUrl of http server. Type: string (or Expression with resultType string)
* **type**: 'HttpServerLocation' (Required): Type of dataset storage location.

### LakeHouseLocation
#### Properties
* **type**: 'LakeHouseLocation' (Required): Type of dataset storage location.

### OracleCloudStorageLocation
#### Properties
* **bucketName**: any: Specify the bucketName of Oracle Cloud Storage. Type: string (or Expression with resultType string)
* **type**: 'OracleCloudStorageLocation' (Required): Type of dataset storage location.
* **version**: any: Specify the version of Oracle Cloud Storage. Type: string (or Expression with resultType string).

### SftpLocation
#### Properties
* **type**: 'SftpLocation' (Required): Type of dataset storage location.


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

### AvroFormat
#### Properties
* **type**: 'AvroFormat' (Required): Type of dataset storage format.

### JsonFormat
#### Properties
* **encodingName**: any: The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string).
* **filePattern**: any: File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive.
* **jsonNodeReference**: any: The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string).
* **jsonPathDefinition**: any: The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object).
* **nestingSeparator**: any: The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string).
* **type**: 'JsonFormat' (Required): Type of dataset storage format.

### OrcFormat
#### Properties
* **type**: 'OrcFormat' (Required): Type of dataset storage format.

### ParquetFormat
#### Properties
* **type**: 'ParquetFormat' (Required): Type of dataset storage format.

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
* **type**: 'TextFormat' (Required): Type of dataset storage format.


## DataworldLinkedServiceTypeProperties
### Properties
* **apiToken**: [SecretBase](#secretbase) (Required): The api token for the Dataworld source.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.

## Db2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | string: AuthenticationType to be used for connection. It is mutually exclusive with connectionString property.
* **certificateCommonName**: any: Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
* **connectionString**: any: The connection string. It is mutually exclusive with server, database, authenticationType, userName, packageCollection and certificateCommonName property. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any: Database name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string.
* **packageCollection**: any: Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password for authentication.
* **server**: any: Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).

## Db2TableDatasetTypeProperties
### Properties
* **schema**: any: The Db2 schema name. Type: string (or Expression with resultType string).
* **table**: any: The Db2 table name. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## DeleteActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): Delete activity dataset reference.
* **enableLogging**: any: Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean).
* **logStorageSettings**: [LogStorageSettings](#logstoragesettings): Log storage settings customer need to provide when enableLogging is true.
* **maxConcurrentConnections**: int {minValue: 1}: The max concurrent connections to connect data source at the same time.
* **recursive**: any: If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean).
* **storeSettings**: [StoreReadSettings](#storereadsettings): Delete activity store settings.

## DelimitedTextDatasetTypeProperties
### Properties
* **columnDelimiter**: any: The column delimiter. Type: string (or Expression with resultType string).
* **compressionCodec**: any: The data compressionCodec. Type: string (or Expression with resultType string).
* **compressionLevel**: any: The data compression method used for DelimitedText.
* **encodingName**: any: The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
* **escapeChar**: any: The escape character. Type: string (or Expression with resultType string).
* **firstRowAsHeader**: any: When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
* **location**: [DatasetLocation](#datasetlocation) (Required): The location of the delimited text storage.
* **nullValue**: any: The null value string. Type: string (or Expression with resultType string).
* **quoteChar**: any: The quote character. Type: string (or Expression with resultType string).
* **rowDelimiter**: any: The row delimiter. Type: string (or Expression with resultType string).

## DelimitedTextReadSettings
### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **skipLineCount**: any: Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer).
* **type**: string (Required): The read setting type.
### Additional Properties
* **Additional Properties Type**: any

## DelimitedTextWriteSettings
### Properties
* **fileExtension**: any (Required): The file extension used to create the files. Type: string (or Expression with resultType string).
* **fileNamePrefix**: any: Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
* **maxRowsPerFile**: any: Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
* **quoteAllText**: any: Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean).
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## DependencyReference
* **Discriminator**: type

### Base Properties

### SelfDependencyTumblingWindowTriggerReference
#### Properties
* **offset**: string {minLength: 8, maxLength: 15, pattern: "-((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))"} (Required): Timespan applied to the start time of a tumbling window when evaluating dependency.
* **size**: string {minLength: 8, maxLength: 15, pattern: "((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))"}: The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
* **type**: 'SelfDependencyTumblingWindowTriggerReference' (Required): The type of dependency reference.

### TumblingWindowTriggerDependencyReference
#### Properties
* **offset**: string {minLength: 8, maxLength: 15, pattern: "-?((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))"}: Timespan applied to the start time of a tumbling window when evaluating dependency.
* **referenceTrigger**: [TriggerReference](#triggerreference) (Required): Referenced trigger.
* **size**: string {minLength: 8, maxLength: 15, pattern: "((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))"}: The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
* **type**: 'TumblingWindowTriggerDependencyReference' (Required): The type of dependency reference.


## DistcpSettings
### Properties
* **distcpOptions**: any: Specifies the Distcp options. Type: string (or Expression with resultType string).
* **resourceManagerEndpoint**: any (Required): Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string).
* **tempScriptPath**: any (Required): Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string).

## DocumentDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): Document Database collection name. Type: string (or Expression with resultType string).

## DrillDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Drill. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Drill. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.

## DWCopyCommandDefaultValue
### Properties
* **columnName**: any: Column name. Type: object (or Expression with resultType string).
* **defaultValue**: any: The default value of the column. Type: object (or Expression with resultType string).

## DWCopyCommandSettings
### Properties
* **additionalOptions**: [DWCopyCommandSettingsAdditionalOptions](#dwcopycommandsettingsadditionaloptions): Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" }
* **defaultValues**: [DWCopyCommandDefaultValue](#dwcopycommanddefaultvalue)[]: Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects).

## DWCopyCommandSettingsAdditionalOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DynamicsAXLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any (Required): Specify the resource you are requesting authorization. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **servicePrincipalId**: any (Required): Specify the application's client ID. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required): Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string).
* **tenant**: any (Required): Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string).
* **url**: any (Required): The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint.

## DynamicsAXResourceDatasetTypeProperties
### Properties
* **path**: any (Required): The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string).

## DynamicsCrmEntityDatasetTypeProperties
### Properties
* **entityName**: any: The logical name of the entity. Type: string (or Expression with resultType string).

## DynamicsCrmLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario, 'Active Directory' for Dynamics on-premises with IFD. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **deploymentType**: any (Required): The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string).
* **domain**: any: The Active Directory domain that will verify user credentials. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **hostName**: any: The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
* **organizationName**: any: The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to access the Dynamics CRM instance.
* **port**: any: The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
* **serviceUri**: any: The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
* **username**: any: User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string).

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any: The logical name of the entity. Type: string (or Expression with resultType string).

## DynamicsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario, 'Active Directory' for Dynamics on-premises with IFD. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **deploymentType**: any (Required): The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
* **domain**: any: The Active Directory domain that will verify user credentials. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **hostName**: any: The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
* **organizationName**: any: The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to access the Dynamics instance.
* **port**: any: The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
* **serviceUri**: any: The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
* **username**: any: User name to access the Dynamics instance. Type: string (or Expression with resultType string).

## EloquaLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **endpoint**: any (Required): The endpoint of the Eloqua server. (i.e. eloqua.example.com)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any (Required): The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice)

## EncryptionConfiguration
### Properties
* **identity**: [CMKIdentityDefinition](#cmkidentitydefinition): User assigned identity to use to authenticate to customer's key vault. If not provided Managed Service Identity will be used.
* **keyName**: string (Required): The name of the key in Azure Key Vault to use as Customer Managed Key.
* **keyVersion**: string: The version of the key used for CMK. If not provided, latest version will be used.
* **vaultBaseUrl**: string (Required): The url of the Azure Key Vault used for CMK.

## EntityReference
### Properties
* **referenceName**: string: The name of this referenced entity.
* **type**: 'IntegrationRuntimeReference' | 'LinkedServiceReference' | string: The type of this referenced entity.

## EnvironmentVariableSetupTypeProperties
### Properties
* **variableName**: string (Required): The name of the environment variable.
* **variableValue**: string (Required): The value of the environment variable.

## ExcelDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the json dataset.
* **firstRowAsHeader**: any: When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
* **location**: [DatasetLocation](#datasetlocation) (Required): The location of the excel storage.
* **nullValue**: any: The null value string. Type: string (or Expression with resultType string).
* **range**: any: The partial data of one sheet. Type: string (or Expression with resultType string).
* **sheetIndex**: any: The sheet index of excel file and default value is 0. Type: integer (or Expression with resultType integer)
* **sheetName**: any: The sheet name of excel file. Type: string (or Expression with resultType string).

## ExecuteDataFlowActivityTypeProperties
### Properties
* **compute**: [ExecuteDataFlowActivityTypePropertiesCompute](#executedataflowactivitytypepropertiescompute): Compute properties for data flow activity.
* **continuationSettings**: [ContinuationSettingsReference](#continuationsettingsreference): Continuation settings for execute data flow activity.
* **continueOnError**: any: Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean)
* **dataFlow**: [DataFlowReference](#dataflowreference) (Required): Data flow reference.
* **integrationRuntime**: [IntegrationRuntimeReference](#integrationruntimereference): The integration runtime reference.
* **runConcurrently**: any: Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean)
* **sourceStagingConcurrency**: any: Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer)
* **staging**: [DataFlowStagingInfo](#dataflowstaginginfo): Staging info for execute data flow activity.
* **traceLevel**: any: Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string)

## ExecuteDataFlowActivityTypePropertiesCompute
### Properties
* **computeType**: any: Compute type of the cluster which will execute data flow job. Possible values include: 'General', 'MemoryOptimized', 'ComputeOptimized'. Type: string (or Expression with resultType string)
* **coreCount**: any: Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. Type: integer (or Expression with resultType integer)

## ExecutePipelineActivityPolicy
### Properties
* **secureInput**: bool: When set to true, Input from activity is considered as secure and will not be logged to monitoring.
### Additional Properties
* **Additional Properties Type**: any

## ExecutePipelineActivityTypeProperties
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): Pipeline parameters.
* **pipeline**: [PipelineReference](#pipelinereference) (Required): Pipeline reference.
* **waitOnCompletion**: bool: Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false.

## ExecutePowerQueryActivityTypeProperties
### Properties
* **compute**: [ExecuteDataFlowActivityTypePropertiesCompute](#executedataflowactivitytypepropertiescompute): Compute properties for data flow activity.
* **continuationSettings**: [ContinuationSettingsReference](#continuationsettingsreference): Continuation settings for execute data flow activity.
* **continueOnError**: any: Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean)
* **dataFlow**: [DataFlowReference](#dataflowreference) (Required): Data flow reference.
* **integrationRuntime**: [IntegrationRuntimeReference](#integrationruntimereference): The integration runtime reference.
* **queries**: [PowerQuerySinkMapping](#powerquerysinkmapping)[]: List of mapping for Power Query mashup query to sink dataset(s).
* **runConcurrently**: any: Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean)
* **sinks**: [ExecutePowerQueryActivityTypePropertiesSinks](#executepowerqueryactivitytypepropertiessinks): (Deprecated. Please use Queries). List of Power Query activity sinks mapped to a queryName.
* **sourceStagingConcurrency**: any: Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer)
* **staging**: [DataFlowStagingInfo](#dataflowstaginginfo): Staging info for execute data flow activity.
* **traceLevel**: any: Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string)

## ExecutePowerQueryActivityTypePropertiesSinks
### Properties
### Additional Properties
* **Additional Properties Type**: [PowerQuerySink](#powerquerysink)

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

## ExpressionV2
### Properties
* **operands**: [ExpressionV2](#expressionv2)[]: List of nested expressions.
* **operators**: string[]: Expression operator value Type: list of strings.
* **type**: 'Binary' | 'Constant' | 'Field' | 'NAry' | 'Unary' | string: Type of expressions supported by the system. Type: string.
* **value**: string: Value for Constant/Field Type: string.

## FactoryIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal id of the identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client tenant id of the identity.
* **type**: 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): The identity type.
* **userAssignedIdentities**: [UserAssignedIdentitiesDefinitionSpecification](#userassignedidentitiesdefinitionspecification): List of user assigned identities for the factory.

## FactoryProperties
### Properties
* **createTime**: string (ReadOnly): Time the factory was created in ISO8601 format.
* **encryption**: [EncryptionConfiguration](#encryptionconfiguration): Properties to enable Customer Managed Key for the factory.
* **globalParameters**: [GlobalParameterDefinitionSpecification](#globalparameterdefinitionspecification): List of parameters for factory.
* **provisioningState**: string (ReadOnly): Factory provisioning state, example Succeeded.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public network access is allowed for the data factory.
* **purviewConfiguration**: [PurviewConfiguration](#purviewconfiguration): Purview information of the factory.
* **repoConfiguration**: [FactoryRepoConfiguration](#factoryrepoconfiguration): Git repo information of the factory.
* **version**: string (ReadOnly): Version of the factory.

## FactoryRepoConfiguration
* **Discriminator**: type

### Base Properties
* **accountName**: string (Required): Account name.
* **collaborationBranch**: string (Required): Collaboration branch.
* **disablePublish**: bool: Disable manual publish operation in ADF studio to favor automated publish.
* **lastCommitId**: string: Last commit id.
* **repositoryName**: string (Required): Repository name.
* **rootFolder**: string (Required): Root folder.

### FactoryGitHubConfiguration
#### Properties
* **clientId**: string: GitHub bring your own app client id.
* **clientSecret**: [GitHubClientSecret](#githubclientsecret): GitHub bring your own app client secret information.
* **hostName**: string: GitHub Enterprise host name. For example: `https://github.mydomain.com`
* **type**: 'FactoryGitHubConfiguration' (Required): Type of repo configuration.

### FactoryVstsConfiguration
#### Properties
* **projectName**: string (Required): VSTS project name.
* **tenantId**: string: VSTS tenant id.
* **type**: 'FactoryVSTSConfiguration' (Required): Type of repo configuration.


## FailActivityTypeProperties
### Properties
* **errorCode**: any (Required): The error code that categorizes the error type of the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string).
* **message**: any (Required): The error message that surfaced in the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string).

## FileServerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
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
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).

## FilterActivityTypeProperties
### Properties
* **condition**: [Expression](#expression) (Required): Condition to be used for filtering the input.
* **items**: [Expression](#expression) (Required): Input array on which filter should be applied.

## FlowletTypeProperties
### Properties
* **script**: string: Flowlet script.
* **scriptLines**: string[]: Flowlet script lines.
* **sinks**: [DataFlowSink](#dataflowsink)[]: List of sinks in Flowlet.
* **sources**: [DataFlowSource](#dataflowsource)[]: List of sources in Flowlet.
* **transformations**: [Transformation](#transformation)[]: List of transformations in Flowlet.

## ForEachActivityTypeProperties
### Properties
* **activities**: [Activity](#activity)[] (Required): List of activities to execute .
* **batchCount**: int {maxValue: 50}: Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
* **isSequential**: bool: Should the loop be executed in sequence or in parallel (max 50)
* **items**: [Expression](#expression) (Required): Collection to iterate.

## FormatReadSettings
* **Discriminator**: type

### Base Properties

### BinaryReadSettings
#### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **type**: 'BinaryReadSettings' (Required): The read setting type.

### DelimitedTextReadSettings
#### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **skipLineCount**: any: Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer).
* **type**: 'DelimitedTextReadSettings' (Required): The read setting type.

### JsonReadSettings
#### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **type**: 'JsonReadSettings' (Required): The read setting type.

### ParquetReadSettings
#### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **type**: 'ParquetReadSettings' (Required): The read setting type.

### XmlReadSettings
#### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **detectDataType**: any: Indicates whether type detection is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean).
* **namespacePrefixes**: any: Namespace uri to prefix mappings to override the prefixes in column names when namespace is enabled, if no prefix is defined for a namespace uri, the prefix of xml element/attribute name in the xml data file will be used. Example: "{"http://www.example.com/xml":"prefix"}" Type: object (or Expression with resultType object).
* **namespaces**: any: Indicates whether namespace is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean).
* **type**: 'XmlReadSettings' (Required): The read setting type.
* **validationMode**: any: Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string).


## FtpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | string: The authentication type to be used to connect to the FTP server.
* **enableServerCertificateValidation**: any: If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
* **enableSsl**: any: If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): Host name of the FTP server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to logon the FTP server.
* **port**: any: The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0.
* **userName**: any: Username to logon the FTP server. Type: string (or Expression with resultType string).

## GenericDatasetTypeProperties
### Properties
* **tableName**: any: The table name. Type: string (or Expression with resultType string).

## GetMetadataActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): GetMetadata activity dataset reference.
* **fieldList**: any[]: Fields of metadata to get from dataset.
* **formatSettings**: [FormatReadSettings](#formatreadsettings): GetMetadata activity format settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): GetMetadata activity store settings.

## GitHubClientSecret
### Properties
* **byoaSecretAkvUrl**: string: Bring your own app client secret AKV URL.
* **byoaSecretName**: string: Bring your own app client secret name in AKV.

## GlobalParameter
### Properties
### Additional Properties
* **Additional Properties Type**: [GlobalParameterSpecification](#globalparameterspecification)

## GlobalParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [GlobalParameterSpecification](#globalparameterspecification)

## GlobalParameterSpecification
### Properties
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'String' | string (Required): Global Parameter type.
* **value**: any (Required): Value of parameter.

## GoogleAdWordsLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' | string: The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
* **clientCustomerID**: any: The Client customer ID of the AdWords account that you want to fetch report data for. Type: string (or Expression with resultType string).
* **clientId**: any: The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret of the google application used to acquire the refresh token.
* **connectionProperties**: any: (Deprecated) Properties used to connect to GoogleAds. It is mutually exclusive with any other properties in the linked service. Type: object.
* **developerToken**: [SecretBase](#secretbase): The developer token associated with the manager account that you use to grant access to the AdWords API.
* **email**: any: The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **googleAdsApiVersion**: any: The Google Ads API major version such as v14. The supported major versions could be found on https://developers.google.com/google-ads/api/docs/release-notes. Type: string (or Expression with resultType string).
* **keyFilePath**: any: (Deprecated) The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
* **loginCustomerID**: any: The customer ID of the Google Ads Manager account through which you want to fetch report data of specific Customer. Type: string (or Expression with resultType string).
* **privateKey**: [SecretBase](#secretbase): The private key that is used to authenticate the service account email address and can only be used on self-hosted IR.
* **refreshToken**: [SecretBase](#secretbase): The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication.
* **supportLegacyDataTypes**: any: Specifies whether to use the legacy data type mappings, which maps float, int32 and int64 from Google to string. Do not set this to true unless you want to keep backward compatibility with legacy driver's data type mappings. Type: boolean (or Expression with resultType boolean).
* **trustedCertPath**: any: (Deprecated) The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. Type: string (or Expression with resultType string).
* **useSystemTrustStore**: any: (Deprecated) Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. Type: boolean (or Expression with resultType boolean).

## GoogleBigQueryDatasetTypeProperties
### Properties
* **dataset**: any: The database name of the Google BigQuery. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Google BigQuery. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using database + table properties instead.

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any: A comma-separated list of public BigQuery projects to access. Type: string (or Expression with resultType string).
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' | string (Required): The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
* **clientId**: any: The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret of the google application used to acquire the refresh token.
* **email**: any: The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **keyFilePath**: any: The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
* **project**: any (Required): The default BigQuery project to query against. Type: string (or Expression with resultType string).
* **refreshToken**: [SecretBase](#secretbase): The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.
* **requestGoogleDriveScope**: any: Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false. Type: string (or Expression with resultType string).
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. Type: string (or Expression with resultType string).
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.Type: boolean (or Expression with resultType boolean).

## GoogleBigQueryV2DatasetTypeProperties
### Properties
* **dataset**: any: The database name of the Google BigQuery. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Google BigQuery. Type: string (or Expression with resultType string).

## GoogleBigQueryV2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' | string (Required): The OAuth 2.0 authentication mechanism used for authentication.
* **clientId**: any: The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret of the google application used to acquire the refresh token.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **keyFileContent**: [SecretBase](#secretbase): The content of the .json key file that is used to authenticate the service account. Type: string (or Expression with resultType string).
* **projectId**: any (Required): The default BigQuery project id to query against. Type: string (or Expression with resultType string).
* **refreshToken**: [SecretBase](#secretbase): The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.

## GoogleCloudStorageLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **secretAccessKey**: [SecretBase](#secretbase): The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user.
* **serviceUrl**: any: This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).

## GoogleSheetsLinkedServiceTypeProperties
### Properties
* **apiToken**: [SecretBase](#secretbase) (Required): The api token for the GoogleSheets source.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.

## GreenplumDatasetTypeProperties
### Properties
* **schema**: any: The schema name of Greenplum. Type: string (or Expression with resultType string).
* **table**: any: The table name of Greenplum. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.

## HBaseLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Basic' | string (Required): The authentication mechanism to use to connect to the HBase server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): The IP address or host name of the HBase server. (i.e. 192.168.222.160)
* **httpPath**: any: The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name.
* **port**: any: The TCP port that the HBase instance uses to listen for client connections. The default value is 9090.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to connect to the HBase instance.

## HdfsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password for Windows authentication.
* **url**: any (Required): The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string).
* **userName**: any: User name for Windows authentication. Type: string (or Expression with resultType string).

## HDInsightHiveActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **defines**: [HDInsightHiveActivityTypePropertiesDefines](#hdinsighthiveactivitytypepropertiesdefines): Allows user to specify defines for Hive job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None' | string: Debug info option.
* **queryTimeout**: int: Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package)
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference): Script linked service reference.
* **scriptPath**: any: Script path. Type: string (or Expression with resultType string).
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.
* **variables**: [HDInsightHiveActivityTypePropertiesVariables](#hdinsighthiveactivitytypepropertiesvariables): User specified arguments under hivevar namespace.

## HDInsightHiveActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightHiveActivityTypePropertiesVariables
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightLinkedServiceTypeProperties
### Properties
* **clusterUri**: any (Required): HDInsight cluster URI. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **fileSystem**: any: Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string).
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): A reference to the Azure SQL linked service that points to the HCatalog database.
* **isEspEnabled**: any: Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean.
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
* **clusterSize**: any (Required): Number of worker/data nodes in the cluster. Suggestion value: 4. Type: int (or Expression with resultType int).
* **clusterSshPassword**: [SecretBase](#secretbase): The password to SSH remotely connect cluster’s node (for Linux).
* **clusterSshUserName**: any: The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string).
* **clusterType**: any: The cluster type. Type: string (or Expression with resultType string).
* **clusterUserName**: any: The username to access the cluster. Type: string (or Expression with resultType string).
* **coreConfiguration**: any: Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created.
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **dataNodeSize**: any: Specifies the size of the data node for the HDInsight cluster.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **hBaseConfiguration**: any: Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster.
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore.
* **hdfsConfiguration**: any: Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster.
* **headNodeSize**: any: Specifies the size of the head node for the HDInsight cluster.
* **hiveConfiguration**: any: Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster.
* **hostSubscriptionId**: any (Required): The customer’s subscription to host the cluster. Type: string (or Expression with resultType string).
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Azure Storage linked service to be used by the on-demand cluster for storing and processing data.
* **mapReduceConfiguration**: any: Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster.
* **oozieConfiguration**: any: Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster.
* **scriptActions**: [ScriptAction](#scriptaction)[]: Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions.
* **servicePrincipalId**: any: The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key for the service principal id.
* **sparkVersion**: any: The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string).
* **stormConfiguration**: any: Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster.
* **subnetName**: any: The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string).
* **tenant**: any (Required): The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
* **timeToLive**: any (Required): The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
* **version**: any (Required): Version of the HDInsight cluster.  Type: string (or Expression with resultType string).
* **virtualNetworkId**: any: The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string).
* **yarnConfiguration**: any: Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster.
* **zookeeperNodeSize**: any: Specifies the size of the Zoo Keeper node for the HDInsight cluster.

## HDInsightPigActivityTypeProperties
### Properties
* **arguments**: any: User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array).
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

## HiveDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Hive. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Hive. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## HiveLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' | string (Required): The authentication method used to access the Hive server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
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
* **authHeaders**: any: The additional HTTP headers in the request to RESTful API used for authorization. Type: key value pairs (value should be string type).
* **certThumbprint**: any: Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
* **embeddedCertData**: any: Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
* **enableServerCertificateValidation**: any: If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication.
* **url**: any (Required): The base URL of the HTTP endpoint, e.g. https://www.microsoft.com. Type: string (or Expression with resultType string).
* **userName**: any: User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string).

## HubspotLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The access token obtained when initially authenticating your OAuth integration.
* **clientId**: any (Required): The client ID associated with your Hubspot application.
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with your Hubspot application.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **refreshToken**: [SecretBase](#secretbase): The refresh token obtained when initially authenticating your OAuth integration.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## IcebergDatasetTypeProperties
### Properties
* **location**: [DatasetLocation](#datasetlocation) (Required): The location of the iceberg storage. Setting a file name is not allowed for iceberg format.

## IcebergWriteSettings
### Properties
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## IfConditionActivityTypeProperties
### Properties
* **expression**: [Expression](#expression) (Required): An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed.
* **ifFalseActivities**: [Activity](#activity)[]: List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action.
* **ifTrueActivities**: [Activity](#activity)[]: List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action.

## ImpalaDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Impala. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Impala. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## ImpalaLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'SASLUsername' | 'UsernameAndPassword' | string (Required): The authentication type to use.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): The IP address or host name of the Impala server. (i.e. 192.168.222.160)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name when using UsernameAndPassword.
* **port**: any: The TCP port that the Impala server uses to listen for client connections. The default value is 21050.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to access the Impala server. The default value is anonymous when using SASLUsername.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## InformixLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, or SecureString, or AzureKeyVaultSecretReference, or Expression with resultType string.
* **credential**: [SecretBase](#secretbase): The access credential portion of the connection string specified in driver-specific property-value format.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password for Basic authentication.
* **userName**: any: User name for Basic authentication. Type: string (or Expression with resultType string).

## InformixTableDatasetTypeProperties
### Properties
* **tableName**: any: The Informix table name. Type: string (or Expression with resultType string).

## IntegrationRuntime
* **Discriminator**: type

### Base Properties
* **description**: string: Integration runtime description.

### ManagedIntegrationRuntime
#### Properties
* **managedVirtualNetwork**: [ManagedVirtualNetworkReference](#managedvirtualnetworkreference): Managed Virtual Network reference.
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Integration runtime state, only valid for managed dedicated integration runtime.
* **type**: 'Managed' (Required): Type of integration runtime.
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required): Managed integration runtime properties.

### SelfHostedIntegrationRuntime
#### Properties
* **type**: 'SelfHosted' (Required): Type of integration runtime.
* **typeProperties**: [SelfHostedIntegrationRuntimeTypeProperties](#selfhostedintegrationruntimetypeproperties): When this property is not null, means this is a linked integration runtime. The property is used to access original integration runtime.


## IntegrationRuntimeAuthKeys
### Properties
* **authKey1**: string: The primary integration runtime authentication key.
* **authKey2**: string: The secondary integration runtime authentication key.

## IntegrationRuntimeComputeProperties
### Properties
* **copyComputeScaleProperties**: [CopyComputeScaleProperties](#copycomputescaleproperties): CopyComputeScale properties for managed integration runtime.
* **dataFlowProperties**: [IntegrationRuntimeDataFlowProperties](#integrationruntimedataflowproperties): Data flow properties for managed integration runtime.
* **location**: string: The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
* **maxParallelExecutionsPerNode**: int {minValue: 1}: Maximum parallel executions count per node for managed integration runtime.
* **nodeSize**: string: The node size requirement to managed integration runtime.
* **numberOfNodes**: int {minValue: 1}: The required number of nodes for managed integration runtime.
* **pipelineExternalComputeScaleProperties**: [PipelineExternalComputeScaleProperties](#pipelineexternalcomputescaleproperties): PipelineExternalComputeScale properties for managed integration runtime.
* **vNetProperties**: [IntegrationRuntimeVNetProperties](#integrationruntimevnetproperties): VNet properties for managed integration runtime.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeCustomerVirtualNetwork
### Properties
* **subnetId**: string: The ID of subnet to which Azure-SSIS integration runtime will join.

## IntegrationRuntimeCustomSetupScriptProperties
### Properties
* **blobContainerUri**: string: The URI of the Azure blob container that contains the custom setup script.
* **sasToken**: [SecureString](#securestring): The SAS token of the Azure blob container.

## IntegrationRuntimeDataFlowProperties
### Properties
* **cleanup**: bool: Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as false. Default is true.
* **computeType**: 'ComputeOptimized' | 'General' | 'MemoryOptimized' | string: Compute type of the cluster which will execute data flow job.
* **coreCount**: int: Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
* **customProperties**: [IntegrationRuntimeDataFlowPropertiesCustomPropertiesItem](#integrationruntimedataflowpropertiescustompropertiesitem)[]: Custom properties are used to tune the data flow runtime performance.
* **timeToLive**: int {minValue: 0}: Time to live (in minutes) setting of the cluster which will execute data flow job.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeDataFlowPropertiesCustomPropertiesItem
### Properties
* **name**: string: Name of custom property.
* **value**: string: Value of custom property.

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
* **catalogAdminUserName**: string {minLength: 1, maxLength: 128}: The administrator user name of catalog database.
* **catalogPricingTier**: 'Basic' | 'Premium' | 'PremiumRS' | 'Standard' | string: The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
* **catalogServerEndpoint**: string: The catalog database server URL.
* **dualStandbyPairName**: string: The dual standby pair name of Azure-SSIS Integration Runtimes to support SSISDB failover.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: [IntegrationRuntimeSsisCatalogInfo](#integrationruntimessiscataloginfo): Catalog information for managed dedicated integration runtime.
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **customSetupScriptProperties**: [IntegrationRuntimeCustomSetupScriptProperties](#integrationruntimecustomsetupscriptproperties): Custom setup script properties for a managed dedicated integration runtime.
* **dataProxyProperties**: [IntegrationRuntimeDataProxyProperties](#integrationruntimedataproxyproperties): Data proxy properties for a managed dedicated integration runtime.
* **edition**: 'Enterprise' | 'Standard' | string: The edition for the SSIS Integration Runtime
* **expressCustomSetupProperties**: [CustomSetupBase](#customsetupbase)[]: Custom setup without script properties for a SSIS integration runtime.
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: License type for bringing your own license scenario.
* **packageStores**: [PackageStore](#packagestore)[]: Package stores for the SSIS Integration Runtime.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeVNetProperties
### Properties
* **publicIPs**: string[]: Resource IDs of the public IP addresses that this integration runtime will use.
* **subnet**: string: The name of the subnet this integration runtime will join.
* **subnetId**: string: The ID of subnet, to which this Azure-SSIS integration runtime will be joined.
* **vNetId**: string: The ID of the VNet that this integration runtime will join.
### Additional Properties
* **Additional Properties Type**: any

## JiraLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): The IP address or host name of the Jira service. (e.g. jira.example.com)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name that you provided in the username field.
* **port**: any: The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any (Required): The user name that you use to access Jira Service.

## JsonDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the json dataset.
* **encodingName**: any: The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
* **location**: [DatasetLocation](#datasetlocation) (Required): The location of the json data storage.

## JsonReadSettings
### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **type**: string (Required): The read setting type.
### Additional Properties
* **Additional Properties Type**: any

## JsonWriteSettings
### Properties
* **filePattern**: any: File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive.
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## LakeHouseLinkedServiceTypeProperties
### Properties
* **artifactId**: any: The ID of Microsoft Fabric LakeHouse artifact. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against Microsoft Fabric LakeHouse. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The Key of the application used to authenticate against Microsoft Fabric LakeHouse.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **workspaceId**: any: The ID of Microsoft Fabric workspace. Type: string (or Expression with resultType string).

## LakeHouseTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of Microsoft Fabric LakeHouse Table. Type: string (or Expression with resultType string).
* **table**: any: The name of Microsoft Fabric LakeHouse Table. Type: string (or Expression with resultType string).

## LicensedComponentSetupTypeProperties
### Properties
* **componentName**: string (Required): The name of the 3rd party component.
* **licenseKey**: [SecretBase](#secretbase): The license key to activate the component.

## LinkedIntegrationRuntimeType
* **Discriminator**: authorizationType

### Base Properties

### LinkedIntegrationRuntimeKeyAuthorization
#### Properties
* **authorizationType**: 'Key' (Required): The authorization type for integration runtime sharing.
* **key**: [SecureString](#securestring) (Required): The key used for authorization.

### LinkedIntegrationRuntimeRbacAuthorization
#### Properties
* **authorizationType**: 'RBAC' (Required): The authorization type for integration runtime sharing.
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **resourceId**: string (Required): The resource identifier of the integration runtime to be shared.


## LinkedService
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the linked service.
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference): The integration runtime reference.
* **description**: string: Linked service description.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Parameters for linked service.
* **version**: string: Version of the linked service.

### AmazonMWSLinkedService
#### Properties
* **type**: 'AmazonMWS' (Required): Type of linked service.
* **typeProperties**: [AmazonMWSLinkedServiceTypeProperties](#amazonmwslinkedservicetypeproperties) (Required): Amazon Marketplace Web Service linked service properties.

### AmazonRdsForOracleLinkedService
#### Properties
* **type**: 'AmazonRdsForOracle' (Required): Type of linked service.
* **typeProperties**: [AmazonRdsForLinkedServiceTypeProperties](#amazonrdsforlinkedservicetypeproperties) (Required): AmazonRdsForOracle database linked service properties.

### AmazonRdsForSqlServerLinkedService
#### Properties
* **type**: 'AmazonRdsForSqlServer' (Required): Type of linked service.
* **typeProperties**: [AmazonRdsForSqlServerLinkedServiceTypeProperties](#amazonrdsforsqlserverlinkedservicetypeproperties) (Required): Amazon RDS for SQL Server linked service properties.

### AmazonRedshiftLinkedService
#### Properties
* **type**: 'AmazonRedshift' (Required): Type of linked service.
* **typeProperties**: [AmazonRedshiftLinkedServiceTypeProperties](#amazonredshiftlinkedservicetypeproperties) (Required): Amazon Redshift linked service properties.

### AmazonS3LinkedService
#### Properties
* **type**: 'AmazonS3' (Required): Type of linked service.
* **typeProperties**: [AmazonS3LinkedServiceTypeProperties](#amazons3linkedservicetypeproperties) (Required): Amazon S3 linked service properties.

### AmazonS3CompatibleLinkedService
#### Properties
* **type**: 'AmazonS3Compatible' (Required): Type of linked service.
* **typeProperties**: [AmazonS3CompatibleLinkedServiceTypeProperties](#amazons3compatiblelinkedservicetypeproperties) (Required): Amazon S3 Compatible linked service properties.

### AppFiguresLinkedService
#### Properties
* **type**: 'AppFigures' (Required): Type of linked service.
* **typeProperties**: [AppFiguresLinkedServiceTypeProperties](#appfigureslinkedservicetypeproperties) (Required): AppFigures linked service properties.

### AsanaLinkedService
#### Properties
* **type**: 'Asana' (Required): Type of linked service.
* **typeProperties**: [AsanaLinkedServiceTypeProperties](#asanalinkedservicetypeproperties) (Required): Asana linked service properties.

### AzureBatchLinkedService
#### Properties
* **type**: 'AzureBatch' (Required): Type of linked service.
* **typeProperties**: [AzureBatchLinkedServiceTypeProperties](#azurebatchlinkedservicetypeproperties) (Required): Azure Batch linked service properties.

### AzureBlobFSLinkedService
#### Properties
* **type**: 'AzureBlobFS' (Required): Type of linked service.
* **typeProperties**: [AzureBlobFSLinkedServiceTypeProperties](#azureblobfslinkedservicetypeproperties) (Required): Azure Data Lake Storage Gen2 linked service properties.

### AzureBlobStorageLinkedService
#### Properties
* **type**: 'AzureBlobStorage' (Required): Type of linked service.
* **typeProperties**: [AzureBlobStorageLinkedServiceTypeProperties](#azureblobstoragelinkedservicetypeproperties) (Required): Azure Blob Storage linked service properties.

### AzureDatabricksLinkedService
#### Properties
* **type**: 'AzureDatabricks' (Required): Type of linked service.
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required): Azure Databricks linked service properties.

### AzureDatabricksDeltaLakeLinkedService
#### Properties
* **type**: 'AzureDatabricksDeltaLake' (Required): Type of linked service.
* **typeProperties**: [AzureDatabricksDetltaLakeLinkedServiceTypeProperties](#azuredatabricksdetltalakelinkedservicetypeproperties) (Required): Azure Databricks Delta Lake linked service properties.

### AzureDataExplorerLinkedService
#### Properties
* **type**: 'AzureDataExplorer' (Required): Type of linked service.
* **typeProperties**: [AzureDataExplorerLinkedServiceTypeProperties](#azuredataexplorerlinkedservicetypeproperties) (Required): Azure Data Explorer (Kusto) linked service properties.

### AzureDataLakeAnalyticsLinkedService
#### Properties
* **type**: 'AzureDataLakeAnalytics' (Required): Type of linked service.
* **typeProperties**: [AzureDataLakeAnalyticsLinkedServiceTypeProperties](#azuredatalakeanalyticslinkedservicetypeproperties) (Required): Azure Data Lake Analytics linked service properties.

### AzureDataLakeStoreLinkedService
#### Properties
* **type**: 'AzureDataLakeStore' (Required): Type of linked service.
* **typeProperties**: [AzureDataLakeStoreLinkedServiceTypeProperties](#azuredatalakestorelinkedservicetypeproperties) (Required): Azure Data Lake Store linked service properties.

### AzureFileStorageLinkedService
#### Properties
* **type**: 'AzureFileStorage' (Required): Type of linked service.
* **typeProperties**: [AzureFileStorageLinkedServiceTypeProperties](#azurefilestoragelinkedservicetypeproperties) (Required): Azure File Storage linked service properties.

### AzureFunctionLinkedService
#### Properties
* **type**: 'AzureFunction' (Required): Type of linked service.
* **typeProperties**: [AzureFunctionLinkedServiceTypeProperties](#azurefunctionlinkedservicetypeproperties) (Required): Azure Function linked service properties.

### AzureKeyVaultLinkedService
#### Properties
* **type**: 'AzureKeyVault' (Required): Type of linked service.
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required): Azure Key Vault linked service properties.

### AzureMariaDBLinkedService
#### Properties
* **type**: 'AzureMariaDB' (Required): Type of linked service.
* **typeProperties**: [AzureMariaDBLinkedServiceTypeProperties](#azuremariadblinkedservicetypeproperties) (Required): Azure Database for MariaDB linked service properties.

### AzureMLLinkedService
#### Properties
* **type**: 'AzureML' (Required): Type of linked service.
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required): Azure ML Studio Web Service linked service properties.

### AzureMLServiceLinkedService
#### Properties
* **type**: 'AzureMLService' (Required): Type of linked service.
* **typeProperties**: [AzureMLServiceLinkedServiceTypeProperties](#azuremlservicelinkedservicetypeproperties) (Required): Azure ML Service linked service properties.

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

### AzureSqlMILinkedService
#### Properties
* **type**: 'AzureSqlMI' (Required): Type of linked service.
* **typeProperties**: [AzureSqlMILinkedServiceTypeProperties](#azuresqlmilinkedservicetypeproperties) (Required): Azure SQL Managed Instance linked service properties.

### AzureStorageLinkedService
#### Properties
* **type**: 'AzureStorage' (Required): Type of linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

### AzureSynapseArtifactsLinkedService
#### Properties
* **type**: 'AzureSynapseArtifacts' (Required): Type of linked service.
* **typeProperties**: [AzureSynapseArtifactsLinkedServiceTypeProperties](#azuresynapseartifactslinkedservicetypeproperties) (Required): Azure Synapse Analytics (Artifacts) linked service properties.

### AzureTableStorageLinkedService
#### Properties
* **type**: 'AzureTableStorage' (Required): Type of linked service.
* **typeProperties**: [AzureTableStorageLinkedServiceTypeProperties](#azuretablestoragelinkedservicetypeproperties) (Required): Azure Table Storage linked service properties.

### CassandraLinkedService
#### Properties
* **type**: 'Cassandra' (Required): Type of linked service.
* **typeProperties**: [CassandraLinkedServiceTypeProperties](#cassandralinkedservicetypeproperties) (Required): Cassandra linked service properties.

### CommonDataServiceForAppsLinkedService
#### Properties
* **type**: 'CommonDataServiceForApps' (Required): Type of linked service.
* **typeProperties**: [CommonDataServiceForAppsLinkedServiceTypeProperties](#commondataserviceforappslinkedservicetypeproperties) (Required): Common Data Service for Apps linked service properties.

### ConcurLinkedService
#### Properties
* **type**: 'Concur' (Required): Type of linked service.
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required): Concur Service linked service properties.

### CosmosDbLinkedService
#### Properties
* **type**: 'CosmosDb' (Required): Type of linked service.
* **typeProperties**: [CosmosDbLinkedServiceTypeProperties](#cosmosdblinkedservicetypeproperties) (Required): CosmosDB linked service properties.

### CosmosDbMongoDbApiLinkedService
#### Properties
* **type**: 'CosmosDbMongoDbApi' (Required): Type of linked service.
* **typeProperties**: [CosmosDbMongoDbApiLinkedServiceTypeProperties](#cosmosdbmongodbapilinkedservicetypeproperties) (Required): CosmosDB (MongoDB API) linked service properties.

### CouchbaseLinkedService
#### Properties
* **type**: 'Couchbase' (Required): Type of linked service.
* **typeProperties**: [CouchbaseLinkedServiceTypeProperties](#couchbaselinkedservicetypeproperties) (Required): Couchbase server linked service properties.

### CustomDataSourceLinkedService
#### Properties
* **type**: 'CustomDataSource' (Required): Type of linked service.
* **typeProperties**: any (Required): Custom linked service properties.

### DataworldLinkedService
#### Properties
* **type**: 'Dataworld' (Required): Type of linked service.
* **typeProperties**: [DataworldLinkedServiceTypeProperties](#dataworldlinkedservicetypeproperties) (Required): Dataworld linked service properties.

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

### DynamicsAXLinkedService
#### Properties
* **type**: 'DynamicsAX' (Required): Type of linked service.
* **typeProperties**: [DynamicsAXLinkedServiceTypeProperties](#dynamicsaxlinkedservicetypeproperties) (Required): Dynamics AX linked service properties.

### DynamicsCrmLinkedService
#### Properties
* **type**: 'DynamicsCrm' (Required): Type of linked service.
* **typeProperties**: [DynamicsCrmLinkedServiceTypeProperties](#dynamicscrmlinkedservicetypeproperties) (Required): Dynamics CRM linked service properties.

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

### GoogleAdWordsLinkedService
#### Properties
* **type**: 'GoogleAdWords' (Required): Type of linked service.
* **typeProperties**: [GoogleAdWordsLinkedServiceTypeProperties](#googleadwordslinkedservicetypeproperties) (Required): Google AdWords service linked service properties.

### GoogleBigQueryLinkedService
#### Properties
* **type**: 'GoogleBigQuery' (Required): Type of linked service.
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required): Google BigQuery service linked service properties.

### GoogleBigQueryV2LinkedService
#### Properties
* **type**: 'GoogleBigQueryV2' (Required): Type of linked service.
* **typeProperties**: [GoogleBigQueryV2LinkedServiceTypeProperties](#googlebigqueryv2linkedservicetypeproperties) (Required): Google BigQuery service linked service properties.

### GoogleCloudStorageLinkedService
#### Properties
* **type**: 'GoogleCloudStorage' (Required): Type of linked service.
* **typeProperties**: [GoogleCloudStorageLinkedServiceTypeProperties](#googlecloudstoragelinkedservicetypeproperties) (Required): Google Cloud Storage linked service properties.

### GoogleSheetsLinkedService
#### Properties
* **type**: 'GoogleSheets' (Required): Type of linked service.
* **typeProperties**: [GoogleSheetsLinkedServiceTypeProperties](#googlesheetslinkedservicetypeproperties) (Required): GoogleSheets linked service properties.

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

### InformixLinkedService
#### Properties
* **type**: 'Informix' (Required): Type of linked service.
* **typeProperties**: [InformixLinkedServiceTypeProperties](#informixlinkedservicetypeproperties) (Required): Informix linked service properties.

### JiraLinkedService
#### Properties
* **type**: 'Jira' (Required): Type of linked service.
* **typeProperties**: [JiraLinkedServiceTypeProperties](#jiralinkedservicetypeproperties) (Required): Jira Service linked service properties.

### LakeHouseLinkedService
#### Properties
* **type**: 'LakeHouse' (Required): Type of linked service.
* **typeProperties**: [LakeHouseLinkedServiceTypeProperties](#lakehouselinkedservicetypeproperties) (Required): Microsoft Fabric LakeHouse linked service properties.

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

### MicrosoftAccessLinkedService
#### Properties
* **type**: 'MicrosoftAccess' (Required): Type of linked service.
* **typeProperties**: [MicrosoftAccessLinkedServiceTypeProperties](#microsoftaccesslinkedservicetypeproperties) (Required): Microsoft Access linked service properties.

### MongoDbLinkedService
#### Properties
* **type**: 'MongoDb' (Required): Type of linked service.
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required): MongoDB linked service properties.

### MongoDbAtlasLinkedService
#### Properties
* **type**: 'MongoDbAtlas' (Required): Type of linked service.
* **typeProperties**: [MongoDbAtlasLinkedServiceTypeProperties](#mongodbatlaslinkedservicetypeproperties) (Required): MongoDB Atlas linked service properties.

### MongoDbV2LinkedService
#### Properties
* **type**: 'MongoDbV2' (Required): Type of linked service.
* **typeProperties**: [MongoDbV2LinkedServiceTypeProperties](#mongodbv2linkedservicetypeproperties) (Required): MongoDB linked service properties.

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

### Office365LinkedService
#### Properties
* **type**: 'Office365' (Required): Type of linked service.
* **typeProperties**: [Office365LinkedServiceTypeProperties](#office365linkedservicetypeproperties) (Required): Office365 linked service properties.

### OracleLinkedService
#### Properties
* **type**: 'Oracle' (Required): Type of linked service.
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required): Oracle database linked service properties.

### OracleCloudStorageLinkedService
#### Properties
* **type**: 'OracleCloudStorage' (Required): Type of linked service.
* **typeProperties**: [OracleCloudStorageLinkedServiceTypeProperties](#oraclecloudstoragelinkedservicetypeproperties) (Required): Oracle Cloud Storage linked service properties.

### OracleServiceCloudLinkedService
#### Properties
* **type**: 'OracleServiceCloud' (Required): Type of linked service.
* **typeProperties**: [OracleServiceCloudLinkedServiceTypeProperties](#oracleservicecloudlinkedservicetypeproperties) (Required): Oracle Service Cloud linked service properties.

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

### PostgreSqlV2LinkedService
#### Properties
* **type**: 'PostgreSqlV2' (Required): Type of linked service.
* **typeProperties**: [PostgreSqlV2LinkedServiceTypeProperties](#postgresqlv2linkedservicetypeproperties) (Required): PostgreSQLV2 linked service properties.

### PrestoLinkedService
#### Properties
* **type**: 'Presto' (Required): Type of linked service.
* **typeProperties**: [PrestoLinkedServiceTypeProperties](#prestolinkedservicetypeproperties) (Required): Presto server linked service properties.

### QuickbaseLinkedService
#### Properties
* **type**: 'Quickbase' (Required): Type of linked service.
* **typeProperties**: [QuickbaseLinkedServiceTypeProperties](#quickbaselinkedservicetypeproperties) (Required): Quickbase linked service properties.

### QuickBooksLinkedService
#### Properties
* **type**: 'QuickBooks' (Required): Type of linked service.
* **typeProperties**: [QuickBooksLinkedServiceTypeProperties](#quickbookslinkedservicetypeproperties) (Required): QuickBooks server linked service properties.

### ResponsysLinkedService
#### Properties
* **type**: 'Responsys' (Required): Type of linked service.
* **typeProperties**: [ResponsysLinkedServiceTypeProperties](#responsyslinkedservicetypeproperties) (Required): Responsys linked service properties.

### RestServiceLinkedService
#### Properties
* **type**: 'RestService' (Required): Type of linked service.
* **typeProperties**: [RestServiceLinkedServiceTypeProperties](#restservicelinkedservicetypeproperties) (Required): Rest Service linked service properties.

### SalesforceLinkedService
#### Properties
* **type**: 'Salesforce' (Required): Type of linked service.
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required): Salesforce linked service properties.

### SalesforceMarketingCloudLinkedService
#### Properties
* **type**: 'SalesforceMarketingCloud' (Required): Type of linked service.
* **typeProperties**: [SalesforceMarketingCloudLinkedServiceTypeProperties](#salesforcemarketingcloudlinkedservicetypeproperties) (Required): Salesforce Marketing Cloud linked service properties.

### SalesforceServiceCloudLinkedService
#### Properties
* **type**: 'SalesforceServiceCloud' (Required): Type of linked service.
* **typeProperties**: [SalesforceServiceCloudLinkedServiceTypeProperties](#salesforceservicecloudlinkedservicetypeproperties) (Required): Salesforce Service Cloud linked service properties.

### SalesforceServiceCloudV2LinkedService
#### Properties
* **type**: 'SalesforceServiceCloudV2' (Required): Type of linked service.
* **typeProperties**: [SalesforceServiceCloudV2LinkedServiceTypeProperties](#salesforceservicecloudv2linkedservicetypeproperties) (Required): Salesforce Service Cloud V2 linked service properties.

### SalesforceV2LinkedService
#### Properties
* **type**: 'SalesforceV2' (Required): Type of linked service.
* **typeProperties**: [SalesforceV2LinkedServiceTypeProperties](#salesforcev2linkedservicetypeproperties) (Required): Salesforce V2 linked service properties.

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

### SapOdpLinkedService
#### Properties
* **type**: 'SapOdp' (Required): Type of linked service.
* **typeProperties**: [SapOdpLinkedServiceTypeProperties](#sapodplinkedservicetypeproperties) (Required): Properties specific to SAP ODP linked service type.

### SapOpenHubLinkedService
#### Properties
* **type**: 'SapOpenHub' (Required): Type of linked service.
* **typeProperties**: [SapOpenHubLinkedServiceTypeProperties](#sapopenhublinkedservicetypeproperties) (Required): Properties specific to SAP Business Warehouse Open Hub Destination linked service type.

### SapTableLinkedService
#### Properties
* **type**: 'SapTable' (Required): Type of linked service.
* **typeProperties**: [SapTableLinkedServiceTypeProperties](#saptablelinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### ServiceNowLinkedService
#### Properties
* **type**: 'ServiceNow' (Required): Type of linked service.
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required): ServiceNow server linked service properties.

### ServiceNowV2LinkedService
#### Properties
* **type**: 'ServiceNowV2' (Required): Type of linked service.
* **typeProperties**: [ServiceNowV2LinkedServiceTypeProperties](#servicenowv2linkedservicetypeproperties) (Required): ServiceNowV2 server linked service properties.

### SftpServerLinkedService
#### Properties
* **type**: 'Sftp' (Required): Type of linked service.
* **typeProperties**: [SftpServerLinkedServiceTypeProperties](#sftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### SharePointOnlineListLinkedService
#### Properties
* **type**: 'SharePointOnlineList' (Required): Type of linked service.
* **typeProperties**: [SharePointOnlineListLinkedServiceTypeProperties](#sharepointonlinelistlinkedservicetypeproperties) (Required): SharePoint Online List linked service properties.

### ShopifyLinkedService
#### Properties
* **type**: 'Shopify' (Required): Type of linked service.
* **typeProperties**: [ShopifyLinkedServiceTypeProperties](#shopifylinkedservicetypeproperties) (Required): Shopify Service linked service properties.

### SmartsheetLinkedService
#### Properties
* **type**: 'Smartsheet' (Required): Type of linked service.
* **typeProperties**: [SmartsheetLinkedServiceTypeProperties](#smartsheetlinkedservicetypeproperties) (Required): Smartsheet linked service properties.

### SnowflakeLinkedService
#### Properties
* **type**: 'Snowflake' (Required): Type of linked service.
* **typeProperties**: [SnowflakeLinkedServiceTypeProperties](#snowflakelinkedservicetypeproperties) (Required): Snowflake linked service properties.

### SnowflakeV2LinkedService
#### Properties
* **type**: 'SnowflakeV2' (Required): Type of linked service.
* **typeProperties**: [SnowflakeLinkedV2ServiceTypeProperties](#snowflakelinkedv2servicetypeproperties) (Required): Snowflake linked service properties.

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

### TeamDeskLinkedService
#### Properties
* **type**: 'TeamDesk' (Required): Type of linked service.
* **typeProperties**: [TeamDeskLinkedServiceTypeProperties](#teamdesklinkedservicetypeproperties) (Required): TeamDesk linked service properties.

### TeradataLinkedService
#### Properties
* **type**: 'Teradata' (Required): Type of linked service.
* **typeProperties**: [TeradataLinkedServiceTypeProperties](#teradatalinkedservicetypeproperties) (Required): Teradata linked service properties.

### TwilioLinkedService
#### Properties
* **type**: 'Twilio' (Required): Type of linked service.
* **typeProperties**: [TwilioLinkedServiceTypeProperties](#twiliolinkedservicetypeproperties) (Required): Twilio linked service properties.

### VerticaLinkedService
#### Properties
* **type**: 'Vertica' (Required): Type of linked service.
* **typeProperties**: [VerticaLinkedServiceTypeProperties](#verticalinkedservicetypeproperties) (Required): Vertica linked service properties.

### WarehouseLinkedService
#### Properties
* **type**: 'Warehouse' (Required): Type of linked service.
* **typeProperties**: [WarehouseLinkedServiceTypeProperties](#warehouselinkedservicetypeproperties) (Required): Microsoft Fabric Warehouse linked service properties.

### WebLinkedService
#### Properties
* **type**: 'Web' (Required): Type of linked service.
* **typeProperties**: [WebLinkedServiceTypeProperties](#weblinkedservicetypeproperties) (Required): Web linked service properties.

### XeroLinkedService
#### Properties
* **type**: 'Xero' (Required): Type of linked service.
* **typeProperties**: [XeroLinkedServiceTypeProperties](#xerolinkedservicetypeproperties) (Required): Xero Service linked service properties.

### ZendeskLinkedService
#### Properties
* **type**: 'Zendesk' (Required): Type of linked service.
* **typeProperties**: [ZendeskLinkedServiceTypeProperties](#zendesklinkedservicetypeproperties) (Required): Zendesk linked service properties.

### ZohoLinkedService
#### Properties
* **type**: 'Zoho' (Required): Type of linked service.
* **typeProperties**: [ZohoLinkedServiceTypeProperties](#zoholinkedservicetypeproperties) (Required): Zoho server linked service properties.


## LinkedServiceReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): Arguments for LinkedService.
* **referenceName**: string (Required): Reference LinkedService name.
* **type**: 'LinkedServiceReference' | string (Required): Linked service reference type.

## LogLocationSettings
### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Log storage linked service reference.
* **path**: any: The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string).

## LogSettings
### Properties
* **copyActivityLogSettings**: [CopyActivityLogSettings](#copyactivitylogsettings): Specifies settings for copy activity log.
* **enableCopyActivityLog**: any: Specifies whether to enable copy activity log. Type: boolean (or Expression with resultType boolean).
* **logLocationSettings**: [LogLocationSettings](#loglocationsettings) (Required): Log location settings customer needs to provide when enabling log.

## LogStorageSettings
### Properties
* **enableReliableLogging**: any: Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean).
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Log storage linked service reference.
* **logLevel**: any: Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string).
* **path**: any: The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string).
### Additional Properties
* **Additional Properties Type**: any

## LookupActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): Lookup activity dataset reference.
* **firstRowOnly**: any: Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean).
* **source**: [CopySource](#copysource) (Required): Dataset-specific source properties, same as copy activity source.

## MagentoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The access token from Magento.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): The URL of the Magento instance. (i.e. 192.168.222.110/magento3)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## ManagedIdentityTypeProperties
### Properties
* **resourceId**: string: The resource id of user assigned managed identity

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties): The compute resource for managed integration runtime.
* **customerVirtualNetwork**: [IntegrationRuntimeCustomerVirtualNetwork](#integrationruntimecustomervirtualnetwork): The name of virtual network to which Azure-SSIS integration runtime will join
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties): SSIS properties for managed integration runtime.

## ManagedPrivateEndpoint
### Properties
* **connectionState**: [ConnectionStateProperties](#connectionstateproperties): The managed private endpoint connection state
* **fqdns**: string[]: Fully qualified domain names
* **groupId**: string: The groupId to which the managed private endpoint is created
* **isReserved**: bool (ReadOnly): Denotes whether the managed private endpoint is reserved
* **privateLinkResourceId**: string: The ARM resource ID of the resource to which the managed private endpoint is created
* **provisioningState**: string (ReadOnly): The managed private endpoint provisioning state
### Additional Properties
* **Additional Properties Type**: any

## ManagedVirtualNetwork
### Properties
* **alias**: string (ReadOnly): Managed Virtual Network alias.
* **vNetId**: string (ReadOnly): Managed Virtual Network ID.
### Additional Properties
* **Additional Properties Type**: any

## ManagedVirtualNetworkReference
### Properties
* **referenceName**: string (Required): Reference ManagedVirtualNetwork name.
* **type**: 'ManagedVirtualNetworkReference' | string (Required): Managed Virtual Network reference type.

## MapperAttributeMapping
### Properties
* **attributeReference**: [MapperAttributeReference](#mapperattributereference): Reference of the source column used in the mapping. It is used for 'Direct' mapping type only.
* **attributeReferences**: [MapperAttributeReference](#mapperattributereference)[]: List of references for source columns. It is used for 'Derived' and 'Aggregate' type mappings only.
* **expression**: string: Expression used for 'Aggregate' and 'Derived' type mapping.
* **functionName**: string: Name of the function used for 'Aggregate' and 'Derived' (except 'Advanced') type mapping.
* **name**: string: Name of the target column.
* **type**: 'Aggregate' | 'Derived' | 'Direct' | string: Type of the CDC attribute mapping. Note: 'Advanced' mapping type is also saved as 'Derived'.

## MapperAttributeMappings
### Properties
* **attributeMappings**: [MapperAttributeMapping](#mapperattributemapping)[]: List of attribute mappings.

## MapperAttributeReference
### Properties
* **entity**: string: Name of the table.
* **entityConnectionReference**: [MapperConnectionReference](#mapperconnectionreference): The connection reference for the connection.
* **name**: string: Name of the column.

## MapperConnection
### Properties
* **commonDslConnectorProperties**: [MapperDslConnectorProperties](#mapperdslconnectorproperties)[]: List of name/value pairs for connection properties.
* **isInlineDataset**: bool: A boolean indicating whether linked service is of type inline dataset. Currently only inline datasets are supported.
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **linkedServiceType**: string: Type of the linked service e.g.: AzureBlobFS.
* **type**: 'linkedservicetype' | string (Required): Type of connection via linked service or dataset.

## MapperConnectionReference
### Properties
* **connectionName**: string: Name of the connection
* **type**: 'linkedservicetype' | string: Type of connection via linked service or dataset.

## MapperDslConnectorProperties
### Properties
* **name**: string: Name of the property.
* **value**: any: Value of the property.

## MapperPolicy
### Properties
* **mode**: string: Mode of running the CDC: batch vs continuous.
* **recurrence**: [MapperPolicyRecurrence](#mapperpolicyrecurrence): Defines the frequency and interval for running the CDC for batch mode.

## MapperPolicyRecurrence
### Properties
* **frequency**: 'Hour' | 'Minute' | 'Second' | string: Frequency of period in terms of 'Hour', 'Minute' or 'Second'.
* **interval**: int: Actual interval value as per chosen frequency.

## MapperSourceConnectionsInfo
### Properties
* **connection**: [MapperConnection](#mapperconnection): Source connection details.
* **sourceEntities**: [MapperTable](#mappertable)[]: List of source tables for a source connection.

## MapperTable
### Properties
* **name**: string: Name of the table.
* **properties**: [MapperTableProperties](#mappertableproperties): Table properties.

## MapperTableProperties
### Properties
* **dslConnectorProperties**: [MapperDslConnectorProperties](#mapperdslconnectorproperties)[]: List of name/value pairs for connection properties.
* **schema**: [MapperTableSchema](#mappertableschema)[]: List of columns for the source table.

## MapperTableSchema
### Properties
* **dataType**: string: Data type of the column.
* **name**: string: Name of the column.

## MapperTargetConnectionsInfo
### Properties
* **connection**: [MapperConnection](#mapperconnection): Source connection details.
* **dataMapperMappings**: [DataMapperMapping](#datamappermapping)[]: List of table mappings.
* **relationships**: any[]: List of relationship info among the tables.
* **targetEntities**: [MapperTable](#mappertable)[]: List of source tables for a target connection.

## MappingDataFlowTypeProperties
### Properties
* **script**: string: DataFlow script.
* **scriptLines**: string[]: Data flow script lines.
* **sinks**: [DataFlowSink](#dataflowsink)[]: List of sinks in data flow.
* **sources**: [DataFlowSource](#dataflowsource)[]: List of sources in data flow.
* **transformations**: [Transformation](#transformation)[]: List of transformations in data flow.

## MariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any: Database name for connection. Type: string.
* **driverVersion**: any: The version of the MariaDB driver. Type: string. V1 or empty for legacy driver, V2 for new driver. V1 can support connection string and property bag, V2 can only support connection string. The legacy driver is scheduled for deprecation by October 2024.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.
* **port**: any: The port for the connection. Type: integer.
* **server**: any: Server name for connection. Type: string.
* **sslMode**: any: This option specifies whether the driver uses TLS encryption and verification when connecting to MariaDB. E.g., SSLMode=<0/1/2/3/4>. Options: DISABLED (0) / PREFERRED (1) (Default) / REQUIRED (2) / VERIFY_CA (3) / VERIFY_IDENTITY (4), REQUIRED (2) is recommended to only allow connections encrypted with SSL/TLS.
* **username**: any: Username for authentication. Type: string.
* **useSystemTrustStore**: any: This option specifies whether to use a CA certificate from the system trust store, or from a specified PEM file. E.g. UseSystemTrustStore=<0/1>; Options: Enabled (1) / Disabled (0) (Default)

## MarketoLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client Id of your Marketo service.
* **clientSecret**: [SecretBase](#secretbase): The client secret of your Marketo service.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **endpoint**: any (Required): The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## MetadataItem
### Properties
* **name**: any: Metadata item key name. Type: string (or Expression with resultType string).
* **value**: any: Metadata item value. Type: string (or Expression with resultType string).

## MicrosoftAccessLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, or SecureString, or AzureKeyVaultSecretReference, or Expression with resultType string.
* **credential**: [SecretBase](#secretbase): The access credential portion of the connection string specified in driver-specific property-value format.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password for Basic authentication.
* **userName**: any: User name for Basic authentication. Type: string (or Expression with resultType string).

## MicrosoftAccessTableDatasetTypeProperties
### Properties
* **tableName**: any: The Microsoft Access table name. Type: string (or Expression with resultType string).

## MongoDbAtlasCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required): The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string).

## MongoDbAtlasLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The MongoDB Atlas connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any (Required): The name of the MongoDB Atlas database that you want to access. Type: string (or Expression with resultType string).
* **driverVersion**: any: The driver version that you want to choose. Allowed value are v1 and v2. Type: string (or Expression with resultType string).

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): The table name of the MongoDB database. Type: string (or Expression with resultType string).

## MongoDbCursorMethodsProperties
### Properties
* **limit**: any: Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer).
* **project**: any: Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string).
* **skip**: any: Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer).
* **sort**: any: Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
### Additional Properties
* **Additional Properties Type**: any

## MongoDbLinkedServiceTypeProperties
### Properties
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean).
* **authenticationType**: 'Anonymous' | 'Basic' | string: The authentication type to be used to connect to the MongoDB database.
* **authSource**: any: Database to verify the username and password. Type: string (or Expression with resultType string).
* **databaseName**: any (Required): The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password for authentication.
* **port**: any: The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0.
* **server**: any (Required): The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## MongoDbV2CollectionDatasetTypeProperties
### Properties
* **collection**: any (Required): The collection name of the MongoDB database. Type: string (or Expression with resultType string).

## MongoDbV2LinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any (Required): The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any: The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any: Database name for connection. Type: string.
* **driverVersion**: any: The version of the MySQL driver. Type: string. V1 or empty for legacy driver, V2 for new driver. V1 can support connection string and property bag, V2 can only support connection string.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.
* **port**: any: The port for the connection. Type: integer.
* **server**: any: Server name for connection. Type: string.
* **sslMode**: any: SSL mode for connection. Type: integer. 0: disable, 1: prefer, 2: require, 3: verify-ca, 4: verify-full.
* **username**: any: Username for authentication. Type: string.
* **useSystemTrustStore**: any: Use system trust store for connection. Type: integer. 0: enable, 1: disable.

## MySqlTableDatasetTypeProperties
### Properties
* **tableName**: any: The MySQL table name. Type: string (or Expression with resultType string).

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.

## NetezzaPartitionSettings
### Properties
* **partitionColumnName**: any: The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
* **partitionLowerBound**: any: The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
* **partitionUpperBound**: any: The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).

## NetezzaTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Netezza. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Netezza. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## NotebookParameter
### Properties
* **type**: 'bool' | 'float' | 'int' | 'string' | string: Notebook parameter type.
* **value**: any: Notebook parameter value. Type: string (or Expression with resultType string).

## ODataLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any: Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string).
* **aadServicePrincipalCredentialType**: 'ServicePrincipalCert' | 'ServicePrincipalKey' | string: Specify the credential type (key or cert) is used for service principal.
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' | 'Windows' | string: Type of authentication used to connect to the OData service.
* **authHeaders**: any: The additional HTTP headers in the request to RESTful API used for authorization. Type: key value pairs (value should be string type).
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password of the OData service.
* **servicePrincipalEmbeddedCert**: [SecretBase](#secretbase): Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
* **servicePrincipalEmbeddedCertPassword**: [SecretBase](#secretbase): Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
* **tenant**: any: Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string).
* **url**: any (Required): The URL of the OData service endpoint. Type: string (or Expression with resultType string).
* **userName**: any: User name of the OData service. Type: string (or Expression with resultType string).

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any: The OData resource path. Type: string (or Expression with resultType string).

## OdbcLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
* **connectionString**: any (Required): The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, or SecureString, or AzureKeyVaultSecretReference, or Expression with resultType string.
* **credential**: [SecretBase](#secretbase): The access credential portion of the connection string specified in driver-specific property-value format.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password for Basic authentication.
* **userName**: any: User name for Basic authentication. Type: string (or Expression with resultType string).

## OdbcTableDatasetTypeProperties
### Properties
* **tableName**: any: The ODBC table name. Type: string (or Expression with resultType string).

## Office365DatasetTypeProperties
### Properties
* **predicate**: any: A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string).
* **tableName**: any (Required): Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string).

## Office365LinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **office365TenantId**: any (Required): Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any (Required): Specify the application's client ID. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required): Specify the application's key.
* **servicePrincipalTenantId**: any (Required): Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string).

## OracleCloudStorageLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: The access key identifier of the Oracle Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **secretAccessKey**: [SecretBase](#secretbase): The secret access key of the Oracle Cloud Storage Identity and Access Management (IAM) user.
* **serviceUrl**: any: This value specifies the endpoint to access with the Oracle Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.

## OraclePartitionSettings
### Properties
* **partitionColumnName**: any: The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
* **partitionLowerBound**: any: The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
* **partitionNames**: any: Names of the physical partitions of Oracle table.
* **partitionUpperBound**: any: The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).

## OracleServiceCloudLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): The URL of the Oracle Service Cloud instance.
* **password**: [SecretBase](#secretbase) (Required): The password corresponding to the user name that you provided in the username key.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **username**: any (Required): The user name that you use to access Oracle Service Cloud server.

## OracleTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string).
* **table**: any: The table name of the on-premises Oracle database. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## OrcDatasetTypeProperties
### Properties
* **location**: [DatasetLocation](#datasetlocation) (Required): The location of the ORC data storage.
* **orcCompressionCodec**: any: The data orcCompressionCodec. Type: string (or Expression with resultType string).

## OrcWriteSettings
### Properties
* **fileNamePrefix**: any: Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
* **maxRowsPerFile**: any: Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## PackageStore
### Properties
* **name**: string (Required): The name of the package store
* **packageStoreLinkedService**: [EntityReference](#entityreference) (Required): The package store linked service reference.

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

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ParquetDatasetTypeProperties
### Properties
* **compressionCodec**: any: The data compressionCodec. Type: string (or Expression with resultType string).
* **location**: [DatasetLocation](#datasetlocation) (Required): The location of the parquet storage.

## ParquetReadSettings
### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **type**: string (Required): The read setting type.
### Additional Properties
* **Additional Properties Type**: any

## ParquetWriteSettings
### Properties
* **fileNamePrefix**: any: Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
* **maxRowsPerFile**: any: Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## PaypalLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client ID associated with your PayPal application.
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with your PayPal application.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): The URL of the PayPal instance. (i.e. api.sandbox.paypal.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## PhoenixDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Phoenix. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Phoenix. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## PhoenixLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' | string (Required): The authentication mechanism used to connect to the Phoenix server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
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
* **concurrency**: int {minValue: 1}: The max number of concurrent runs for the pipeline.
* **description**: string: The description of the pipeline.
* **folder**: [PipelineFolder](#pipelinefolder): The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): List of parameters for pipeline.
* **policy**: [PipelinePolicy](#pipelinepolicy): Pipeline Policy.
* **runDimensions**: [PipelineRunDimensions](#pipelinerundimensions): Dimensions emitted by Pipeline.
* **variables**: [VariableDefinitionSpecification](#variabledefinitionspecification): List of variables for pipeline.

## PipelineElapsedTimeMetricPolicy
### Properties
* **duration**: any: TimeSpan value, after which an Azure Monitoring Metric is fired.

## PipelineExternalComputeScaleProperties
### Properties
* **numberOfExternalNodes**: int {minValue: 1, maxValue: 10}: Number of the the external nodes, which should be greater than 0 and less than 11.
* **numberOfPipelineNodes**: int {minValue: 1, maxValue: 10}: Number of the pipeline nodes, which should be greater than 0 and less than 11.
* **timeToLive**: int {minValue: 5}: Time to live (in minutes) setting of integration runtime which will execute pipeline and external activity.
### Additional Properties
* **Additional Properties Type**: any

## PipelineFolder
### Properties
* **name**: string: The name of the folder that this Pipeline is in.

## PipelinePolicy
### Properties
* **elapsedTimeMetric**: [PipelineElapsedTimeMetricPolicy](#pipelineelapsedtimemetricpolicy): Pipeline ElapsedTime Metric Policy.

## PipelineReference
### Properties
* **name**: string: Reference name.
* **referenceName**: string (Required): Reference pipeline name.
* **type**: 'PipelineReference' | string (Required): Pipeline reference type.

## PipelineRunDimensions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PolybaseSettings
### Properties
* **rejectSampleValue**: any: Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0.
* **rejectType**: 'percentage' | 'value' | string: Reject type.
* **rejectValue**: any: Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0.
* **useTypeDefault**: any: Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean).
### Additional Properties
* **Additional Properties Type**: any

## PostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.

## PostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any: The PostgreSQL schema name. Type: string (or Expression with resultType string).
* **table**: any: The PostgreSQL table name. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## PostgreSqlV2LinkedServiceTypeProperties
### Properties
* **commandTimeout**: any: The time to wait (in seconds) while trying to execute a command before terminating the attempt and generating an error. Set to zero for infinity. Type: integer.
* **connectionTimeout**: any: The time to wait (in seconds) while trying to establish a connection before terminating the attempt and generating an error. Type: integer.
* **database**: any (Required): Database name for connection. Type: string.
* **encoding**: any: Gets or sets the .NET encoding that will be used to encode/decode PostgreSQL string data. Type: string
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **logParameters**: any: When enabled, parameter values are logged when commands are executed. Type: boolean.
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string. Type: string.
* **pooling**: any: Whether connection pooling should be used. Type: boolean.
* **port**: any: The port for the connection. Type: integer.
* **readBufferSize**: any: Determines the size of the internal buffer uses when reading. Increasing may improve performance if transferring large values from the database. Type: integer.
* **schema**: any: Sets the schema search path. Type: string.
* **server**: any (Required): Server name for connection. Type: string.
* **sslCertificate**: any: Location of a client certificate to be sent to the server. Type: string.
* **sslKey**: any: Location of a client key for a client certificate to be sent to the server. Type: string.
* **sslMode**: any (Required): SSL mode for connection. Type: integer. 0: disable, 1:allow, 2: prefer, 3: require, 4: verify-ca, 5: verify-full. Type: integer.
* **sslPassword**: any: Password for a key for a client certificate. Type: string.
* **timezone**: any: Gets or sets the session timezone. Type: string.
* **trustServerCertificate**: any: Whether to trust the server certificate without validating it. Type: boolean.
* **username**: any (Required): Username for authentication. Type: string.

## PostgreSqlV2TableDatasetTypeProperties
### Properties
* **schema**: any: The PostgreSQL schema name. Type: string (or Expression with resultType string).
* **table**: any: The PostgreSQL table name. Type: string (or Expression with resultType string).

## PowerQuerySink
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference.
* **description**: string: Transformation description.
* **flowlet**: [DataFlowReference](#dataflowreference): Flowlet Reference
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **name**: string (Required): Transformation name.
* **rejectedDataLinkedService**: [LinkedServiceReference](#linkedservicereference): Rejected data linked service reference.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Schema linked service reference.
* **script**: string: sink script.

## PowerQuerySinkMapping
### Properties
* **dataflowSinks**: [PowerQuerySink](#powerquerysink)[]: List of sinks mapped to Power Query mashup query.
* **queryName**: string: Name of the query in Power Query mashup document.

## PowerQuerySource
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference.
* **description**: string: Transformation description.
* **flowlet**: [DataFlowReference](#dataflowreference): Flowlet Reference
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **name**: string (Required): Transformation name.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Schema linked service reference.
* **script**: string: source script.

## PowerQueryTypeProperties
### Properties
* **documentLocale**: string: Locale of the Power query mashup document.
* **script**: string: Power query mashup script.
* **sources**: [PowerQuerySource](#powerquerysource)[]: List of sources in Power Query.

## PrestoDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Presto. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Presto. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## PrestoLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'LDAP' | string (Required): The authentication mechanism used to connect to the Presto server.
* **catalog**: any (Required): The catalog context for all request against the server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): The IP address or host name of the Presto server. (i.e. 192.168.222.160)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name.
* **port**: any: The TCP port that the Presto server uses to listen for client connections. The default value is 8080.
* **serverVersion**: any (Required): The version of the Presto server. (i.e. 0.148-t)
* **timeZoneID**: any: The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name used to connect to the Presto server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## PrivateEndpointOrArmIdWrapper
### Properties
* **id**: string: The resource Id for private endpoint

## PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnection
### Properties
* **privateEndpoint**: [PrivateEndpointOrArmIdWrapper](#privateendpointorarmidwrapper): The resource of private endpoint.
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate): The state of a private link connection
* **provisioningState**: string (ReadOnly)

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string: ActionsRequired for a private link connection
* **description**: string: Description of a private link connection
* **status**: string: Status of a private link connection

## PurviewConfiguration
### Properties
* **purviewResourceId**: string: Purview resource id.

## QuickbaseLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **url**: any (Required): The url to connect Quickbase source. Type: string (or Expression with resultType string).
* **userToken**: [SecretBase](#secretbase) (Required): The user token for the Quickbase source.

## QuickBooksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The access token for OAuth 1.0 authentication.
* **accessTokenSecret**: [SecretBase](#secretbase): The access token secret for OAuth 1.0 authentication.
* **companyId**: any: The company ID of the QuickBooks company to authorize.
* **connectionProperties**: any: Properties used to connect to QuickBooks. It is mutually exclusive with any other properties in the linked service. Type: object.
* **consumerKey**: any: The consumer key for OAuth 1.0 authentication.
* **consumerSecret**: [SecretBase](#secretbase): The consumer secret for OAuth 1.0 authentication.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **endpoint**: any: The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.

## RecurrenceSchedule
### Properties
* **hours**: int[]: The hours.
* **minutes**: int[]: The minutes.
* **monthDays**: int[]: The month days.
* **monthlyOccurrences**: [RecurrenceScheduleOccurrence](#recurrencescheduleoccurrence)[]: The monthly occurrences.
* **weekDays**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: The days of the week.
### Additional Properties
* **Additional Properties Type**: any

## RecurrenceScheduleOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': The day of the week.
* **occurrence**: int: The occurrence.
### Additional Properties
* **Additional Properties Type**: any

## RedirectIncompatibleRowSettings
### Properties
* **linkedServiceName**: any (Required): Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string).
* **path**: any: The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string).
### Additional Properties
* **Additional Properties Type**: any

## RedshiftUnloadSettings
### Properties
* **bucketName**: any (Required): The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string).
* **s3LinkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source.

## RelationalTableDatasetTypeProperties
### Properties
* **tableName**: any: The relational table name. Type: string (or Expression with resultType string).

## RerunTumblingWindowTriggerTypeProperties
### Properties
* **parentTrigger**: any (Required): The parent trigger reference.
* **requestedEndTime**: string (Required): The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
* **requestedStartTime**: string (Required): The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
* **rerunConcurrency**: int {minValue: 1, maxValue: 50} (Required): The max number of parallel time windows (ready for execution) for which a rerun is triggered.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResponsysLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): The client ID associated with the Responsys application. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with the Responsys application. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **endpoint**: any (Required): The endpoint of the Responsys server.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).

## RestResourceDatasetTypeProperties
### Properties
* **additionalHeaders**: [RestResourceDatasetTypePropertiesAdditionalHeaders](#restresourcedatasettypepropertiesadditionalheaders): The additional HTTP headers in the request to the RESTful API.
* **paginationRules**: [RestResourceDatasetTypePropertiesPaginationRules](#restresourcedatasettypepropertiespaginationrules): The pagination rules to compose next page requests.
* **relativeUrl**: any: The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string).
* **requestBody**: any: The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
* **requestMethod**: any: The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).

## RestResourceDatasetTypePropertiesAdditionalHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RestResourceDatasetTypePropertiesPaginationRules
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RestServiceLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any: The resource you are requesting authorization to use. Type: string (or Expression with resultType string).
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' | 'OAuth2ClientCredential' | string (Required): Type of authentication used to connect to the REST service.
* **authHeaders**: any: The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object).
* **azureCloudType**: any: Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
* **clientId**: any: The client ID associated with your application. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with your application.
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **enableServerCertificateValidation**: any: Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): The password used in Basic authentication type.
* **resource**: any: The target service or resource to which the access will be requested. Type: string (or Expression with resultType string).
* **scope**: any: The scope of the access required. It describes what kind of access will be requested. Type: string (or Expression with resultType string).
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalEmbeddedCert**: [SecretBase](#secretbase): Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
* **servicePrincipalEmbeddedCertPassword**: [SecretBase](#secretbase): Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The application's client ID used in AadServicePrincipal authentication type. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The application's key used in AadServicePrincipal authentication type.
* **tenant**: any: The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides. Type: string (or Expression with resultType string).
* **tokenEndpoint**: any: The token endpoint of the authorization server to acquire access token. Type: string (or Expression with resultType string).
* **url**: any (Required): The base URL of the REST service. Type: string (or Expression with resultType string).
* **userName**: any: The user name used in Basic authentication type. Type: string (or Expression with resultType string).

## RetryPolicy
### Properties
* **count**: any: Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
* **intervalInSeconds**: int {minValue: 30, maxValue: 86400}: Interval between retries in seconds. Default is 30.

## SalesforceLinkedServiceTypeProperties
### Properties
* **apiVersion**: any: The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **environmentUrl**: any: The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The password for Basic authentication of the Salesforce instance.
* **securityToken**: [SecretBase](#secretbase): The security token is optional to remotely access Salesforce instance.
* **username**: any: The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).

## SalesforceMarketingCloudLinkedServiceTypeProperties
### Properties
* **clientId**: any: The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
* **connectionProperties**: any: Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: The Salesforce object API name. Type: string (or Expression with resultType string).

## SalesforceServiceCloudLinkedServiceTypeProperties
### Properties
* **apiVersion**: any: The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **environmentUrl**: any: The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
* **extendedProperties**: any: Extended properties appended to the connection string. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The password for Basic authentication of the Salesforce instance.
* **securityToken**: [SecretBase](#secretbase): The security token is optional to remotely access Salesforce instance.
* **username**: any: The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).

## SalesforceServiceCloudObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string).

## SalesforceServiceCloudV2LinkedServiceTypeProperties
### Properties
* **apiVersion**: any: The Salesforce API version used in ADF. The version must be larger than or equal to 47.0 which is required by Salesforce BULK API 2.0. Type: string (or Expression with resultType string).
* **authenticationType**: any: The authentication type to be used to connect to the Salesforce. Currently, we only support OAuth2ClientCredentials, it is also the default value
* **clientId**: any: The client Id for OAuth 2.0 Client Credentials Flow authentication of the Salesforce instance. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret for OAuth 2.0 Client Credentials Flow authentication of the Salesforce instance.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **environmentUrl**: any: The URL of Salesforce Service Cloud instance. For example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).

## SalesforceServiceCloudV2ObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: The Salesforce Service Cloud V2 object API name. Type: string (or Expression with resultType string).
* **reportId**: any: The Salesforce Service Cloud V2 reportId. Type: string (or Expression with resultType string).

## SalesforceV2LinkedServiceTypeProperties
### Properties
* **apiVersion**: any: The Salesforce API version used in ADF. The version must be larger than or equal to 47.0 which is required by Salesforce BULK API 2.0. Type: string (or Expression with resultType string).
* **authenticationType**: any: The authentication type to be used to connect to the Salesforce. Currently, we only support OAuth2ClientCredentials, it is also the default value
* **clientId**: any: The client Id for OAuth 2.0 Client Credentials Flow authentication of the Salesforce instance. Type: string (or Expression with resultType string).
* **clientSecret**: [SecretBase](#secretbase): The client secret for OAuth 2.0 Client Credentials Flow authentication of the Salesforce instance.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **environmentUrl**: any: The URL of Salesforce instance. For example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).

## SalesforceV2ObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: The Salesforce V2 object API name. Type: string (or Expression with resultType string).
* **reportId**: any: The Salesforce V2 report Id. Type: string (or Expression with resultType string).

## SapBWLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password to access the SAP BW server.
* **server**: any (Required): Host name of the SAP BW instance. Type: string (or Expression with resultType string).
* **systemNumber**: any (Required): System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP BW server. Type: string (or Expression with resultType string).

## SapCloudForCustomerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string.
* **password**: [SecretBase](#secretbase): The password for Basic authentication.
* **url**: any (Required): The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string).
* **username**: any: The username for Basic authentication. Type: string (or Expression with resultType string).

## SapCloudForCustomerResourceDatasetTypeProperties
### Properties
* **path**: any (Required): The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string).

## SapEccLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string.
* **password**: [SecretBase](#secretbase): The password for Basic authentication.
* **url**: any (Required): The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
* **username**: any: The username for Basic authentication. Type: string (or Expression with resultType string).

## SapEccResourceDatasetTypeProperties
### Properties
* **path**: any (Required): The path of the SAP ECC OData entity. Type: string (or Expression with resultType string).

## SapHanaLinkedServiceProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows' | string: The authentication type to be used to connect to the SAP HANA server.
* **connectionString**: any: SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password to access the SAP HANA server.
* **server**: any: Host name of the SAP HANA server. Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP HANA server. Type: string (or Expression with resultType string).

## SapHanaPartitionSettings
### Properties
* **partitionColumnName**: any: The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).

## SapHanaTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of SAP HANA. Type: string (or Expression with resultType string).
* **table**: any: The table name of SAP HANA. Type: string (or Expression with resultType string).

## SapOdpLinkedServiceTypeProperties
### Properties
* **clientId**: any: Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **language**: any: Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string).
* **logonGroup**: any: The Logon Group for the SAP System. Type: string (or Expression with resultType string).
* **messageServer**: any: The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
* **messageServerService**: any: The service name or port number of the Message Server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to access the SAP server where the table is located.
* **server**: any: Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string).
* **sncLibraryPath**: any: External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **sncMode**: any: SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string).
* **sncMyName**: any: Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **sncPartnerName**: any: Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **sncQop**: any: SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string).
* **subscriberName**: any: The subscriber name. Type: string (or Expression with resultType string).
* **systemId**: any: SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
* **systemNumber**: any: System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **x509CertificatePath**: any: SNC X509 certificate file path. Type: string (or Expression with resultType string).

## SapOdpResourceDatasetTypeProperties
### Properties
* **context**: any (Required): The context of the SAP ODP Object. Type: string (or Expression with resultType string).
* **objectName**: any (Required): The name of the SAP ODP Object. Type: string (or Expression with resultType string).

## SapOpenHubLinkedServiceTypeProperties
### Properties
* **clientId**: any: Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **language**: any: Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string).
* **logonGroup**: any: The Logon Group for the SAP System. Type: string (or Expression with resultType string).
* **messageServer**: any: The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
* **messageServerService**: any: The service name or port number of the Message Server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to access the SAP BW server where the open hub destination is located.
* **server**: any: Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string).
* **systemId**: any: SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
* **systemNumber**: any: System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string).

## SapOpenHubTableDatasetTypeProperties
### Properties
* **baseRequestId**: any: The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
* **excludeLastRequest**: any: Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
* **openHubDestinationName**: any (Required): The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string).

## SapTableLinkedServiceTypeProperties
### Properties
* **clientId**: any: Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **language**: any: Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string).
* **logonGroup**: any: The Logon Group for the SAP System. Type: string (or Expression with resultType string).
* **messageServer**: any: The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
* **messageServerService**: any: The service name or port number of the Message Server. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): Password to access the SAP server where the table is located.
* **server**: any: Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string).
* **sncLibraryPath**: any: External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **sncMode**: any: SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string).
* **sncMyName**: any: Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **sncPartnerName**: any: Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
* **sncQop**: any: SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string).
* **systemId**: any: SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
* **systemNumber**: any: System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
* **userName**: any: Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).

## SapTablePartitionSettings
### Properties
* **maxPartitionsNumber**: any: The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string).
* **partitionColumnName**: any: The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
* **partitionLowerBound**: any: The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
* **partitionUpperBound**: any: The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).

## SapTableResourceDatasetTypeProperties
### Properties
* **tableName**: any (Required): The name of the SAP Table. Type: string (or Expression with resultType string).

## ScheduleTriggerRecurrence
### Properties
* **endTime**: string: The end time.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'NotSpecified' | 'Week' | 'Year' | string: The frequency.
* **interval**: int: The interval.
* **schedule**: [RecurrenceSchedule](#recurrenceschedule): The recurrence schedule.
* **startTime**: string: The start time.
* **timeZone**: string: The time zone.
### Additional Properties
* **Additional Properties Type**: any

## ScheduleTriggerTypeProperties
### Properties
* **recurrence**: [ScheduleTriggerRecurrence](#scheduletriggerrecurrence) (Required): Recurrence schedule configuration.

## ScriptAction
### Properties
* **name**: string (Required): The user provided name of the script action.
* **parameters**: string: The parameters for the script action.
* **roles**: any (Required): The node types on which the script action should be executed.
* **uri**: string (Required): The URI for the script action.

## ScriptActivityParameter
### Properties
* **direction**: 'Input' | 'InputOutput' | 'Output' | string: The direction of the parameter.
* **name**: any: The name of the parameter. Type: string (or Expression with resultType string).
* **size**: int: The size of the output direction parameter.
* **type**: 'Boolean' | 'DateTime' | 'DateTimeOffset' | 'Decimal' | 'Double' | 'Guid' | 'Int16' | 'Int32' | 'Int64' | 'Single' | 'String' | 'Timespan' | string: The type of the parameter.
* **value**: any: The value of the parameter. Type: string (or Expression with resultType string).

## ScriptActivityScriptBlock
### Properties
* **parameters**: [ScriptActivityParameter](#scriptactivityparameter)[]: Array of script parameters. Type: array.
* **text**: any (Required): The query text. Type: string (or Expression with resultType string).
* **type**: any (Required): The type of the query. Please refer to the ScriptType for valid options. Type: string (or Expression with resultType string).

## ScriptActivityTypeProperties
### Properties
* **logSettings**: [ScriptActivityTypePropertiesLogSettings](#scriptactivitytypepropertieslogsettings): Log settings of script activity.
* **scriptBlockExecutionTimeout**: any: ScriptBlock execution timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **scripts**: [ScriptActivityScriptBlock](#scriptactivityscriptblock)[]: Array of script blocks. Type: array.

## ScriptActivityTypePropertiesLogSettings
### Properties
* **logDestination**: 'ActivityOutput' | 'ExternalStore' | string (Required): The destination of logs. Type: string.
* **logLocationSettings**: [LogLocationSettings](#loglocationsettings): Log location settings customer needs to provide when enabling log.

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


## SecureInputOutputPolicy
### Properties
* **secureInput**: bool: When set to true, Input from activity is considered as secure and will not be logged to monitoring.
* **secureOutput**: bool: When set to true, Output from activity is considered as secure and will not be logged to monitoring.

## SecureString
### Properties
* **type**: string (Required): Type of the secret.
* **value**: string (Required): Value of secure string.

## SelfHostedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: [LinkedIntegrationRuntimeType](#linkedintegrationruntimetype): The base definition of a linked integration runtime.
* **selfContainedInteractiveAuthoringEnabled**: bool: An alternative option to ensure interactive authoring function when your self-hosted integration runtime is unable to establish a connection with Azure Relay.

## ServiceNowLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'OAuth2' | string (Required): The authentication type to use.
* **clientId**: any: The client id for OAuth2 authentication.
* **clientSecret**: [SecretBase](#secretbase): The client secret for OAuth2 authentication.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **endpoint**: any (Required): The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com)
* **password**: [SecretBase](#secretbase): The password corresponding to the user name for Basic and OAuth2 authentication.
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
* **username**: any: The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication.

## ServiceNowV2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'OAuth2' | string (Required): The authentication type to use.
* **clientId**: any: The client id for OAuth2 authentication.
* **clientSecret**: [SecretBase](#secretbase): The client secret for OAuth2 authentication.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **endpoint**: any (Required): The endpoint of the ServiceNowV2 server. (i.e. <instance>.service-now.com)
* **grantType**: any: GrantType for OAuth2 authentication. Default value is password.
* **password**: [SecretBase](#secretbase): The password corresponding to the user name for Basic and OAuth2 authentication.
* **username**: any: The user name used to connect to the ServiceNowV2 server for Basic and OAuth2 authentication.

## ServicePrincipalCredentialTypeProperties
### Properties
* **servicePrincipalId**: any: The app ID of the service principal used to authenticate
* **servicePrincipalKey**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The key of the service principal used to authenticate.
* **tenant**: any: The ID of the tenant to which the service principal belongs

## SetVariableActivityTypeProperties
### Properties
* **setSystemVariable**: bool: If set to true, it sets the pipeline run return value.
* **value**: any: Value to be set. Could be a static value or Expression.
* **variableName**: string: Name of the variable whose value needs to be set.

## SftpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'MultiFactor' | 'SshPublicKey' | string: The authentication type to be used to connect to the FTP server.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): The SFTP server host name. Type: string (or Expression with resultType string).
* **hostKeyFingerprint**: any: The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string).
* **passPhrase**: [SecretBase](#secretbase): The password to decrypt the SSH private key if the SSH private key is encrypted.
* **password**: [SecretBase](#secretbase): Password to logon the SFTP server for Basic authentication.
* **port**: any: The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0.
* **privateKeyContent**: [SecretBase](#secretbase): Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format.
* **privateKeyPath**: any: The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string).
* **skipHostKeyValidation**: any: If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean).
* **userName**: any: The username used to log on to the SFTP server. Type: string (or Expression with resultType string).

## SharePointOnlineListDatasetTypeProperties
### Properties
* **listName**: any: The name of the SharePoint Online list. Type: string (or Expression with resultType string).

## SharePointOnlineListLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalEmbeddedCert**: [SecretBase](#secretbase): Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
* **servicePrincipalEmbeddedCertPassword**: [SecretBase](#secretbase): Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any (Required): The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
* **siteUrl**: any (Required): The URL of the SharePoint Online site. For example, https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string).
* **tenantId**: any (Required): The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string).

## ShopifyLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The API access token that can be used to access Shopify’s data. The token won't expire if it is offline mode.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): The endpoint of the Shopify server. (i.e. mystore.myshopify.com)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## SkipErrorFile
### Properties
* **dataInconsistency**: any: Skip if source/sink file changed by other concurrent write. Default is false. Type: boolean (or Expression with resultType boolean).
* **fileMissing**: any: Skip if file is deleted by other client during copy. Default is true. Type: boolean (or Expression with resultType boolean).

## SmartsheetLinkedServiceTypeProperties
### Properties
* **apiToken**: [SecretBase](#secretbase) (Required): The api token for the Smartsheet source.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.

## SnowflakeDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Snowflake database. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Snowflake database. Type: string (or Expression with resultType string).

## SnowflakeExportCopyCommand
### Properties
* **additionalCopyOptions**: [SnowflakeExportCopyCommandAdditionalCopyOptions](#snowflakeexportcopycommandadditionalcopyoptions): Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
* **additionalFormatOptions**: [SnowflakeExportCopyCommandAdditionalFormatOptions](#snowflakeexportcopycommandadditionalformatoptions): Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" }
* **storageIntegration**: any: The name of the snowflake storage integration to use for the copy operation. Type: string (or Expression with resultType string).
* **type**: string (Required): The export setting type.
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeExportCopyCommandAdditionalCopyOptions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeExportCopyCommandAdditionalFormatOptions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeImportCopyCommand
### Properties
* **additionalCopyOptions**: [SnowflakeImportCopyCommandAdditionalCopyOptions](#snowflakeimportcopycommandadditionalcopyoptions): Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
* **additionalFormatOptions**: [SnowflakeImportCopyCommandAdditionalFormatOptions](#snowflakeimportcopycommandadditionalformatoptions): Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" }
* **storageIntegration**: any: The name of the snowflake storage integration to use for the copy operation. Type: string (or Expression with resultType string).
* **type**: string (Required): The import setting type.
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeImportCopyCommandAdditionalCopyOptions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeImportCopyCommandAdditionalFormatOptions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): The connection string of snowflake. Type: string, SecureString.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.

## SnowflakeLinkedV2ServiceTypeProperties
### Properties
* **accountIdentifier**: any (Required): The account identifier of your Snowflake account, e.g. xy12345.east-us-2.azure
* **authenticationType**: 'AADServicePrincipal' | 'Basic' | 'KeyPair' | string: The type used for authentication. Type: string.
* **clientId**: any: The client ID of the application registered in Azure Active Directory for AADServicePrincipal authentication.
* **clientSecret**: [SecretBase](#secretbase): The Azure key vault secret reference of client secret for AADServicePrincipal authentication.
* **database**: any (Required): The name of the Snowflake database.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): The Azure key vault secret reference of password in connection string.
* **privateKey**: [SecretBase](#secretbase): The Azure key vault secret reference of privateKey for KeyPair auth.
* **privateKeyPassphrase**: [SecretBase](#secretbase): The Azure key vault secret reference of private key password for KeyPair auth with encrypted private key.
* **scope**: any: The scope of the application registered in Azure Active Directory for AADServicePrincipal authentication.
* **tenantId**: any: The tenant ID of the application registered in Azure Active Directory for AADServicePrincipal authentication.
* **user**: any: The name of the Snowflake user.
* **warehouse**: any (Required): The name of the Snowflake warehouse.

## SparkConfigurationParametrizationReference
### Properties
* **referenceName**: any (Required): Reference spark configuration name. Type: string (or Expression with resultType string).
* **type**: 'SparkConfigurationReference' | string (Required): Spark configuration reference type.

## SparkDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Spark. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Spark. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## SparkLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
* **allowSelfSignedServerCert**: any: Specifies whether to allow self-signed certificates from the server. The default value is false.
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' | string (Required): The authentication method used to access the Spark server.
* **enableSsl**: any: Specifies whether the connections to the server are encrypted using SSL. The default value is false.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any (Required): IP address or host name of the Spark server
* **httpPath**: any: The partial URL corresponding to the Spark server.
* **password**: [SecretBase](#secretbase): The password corresponding to the user name that you provided in the Username field
* **port**: any (Required): The TCP port that the Spark server uses to listen for client connections.
* **serverType**: 'SharkServer' | 'SharkServer2' | 'SparkThriftServer' | string: The type of Spark server.
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL' | string: The transport protocol to use in the Thrift layer.
* **trustedCertPath**: any: The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
* **username**: any: The user name that you use to access Spark Server.
* **useSystemTrustStore**: any: Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.

## SqlAlwaysEncryptedProperties
### Properties
* **alwaysEncryptedAkvAuthType**: 'ManagedIdentity' | 'ServicePrincipal' | 'UserAssignedManagedIdentity' | string (Required): Sql always encrypted AKV authentication type. Type: string.
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **servicePrincipalId**: any: The client ID of the application in Azure Active Directory used for Azure Key Vault authentication. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The key of the service principal used to authenticate against Azure Key Vault.

## SqlDWUpsertSettings
### Properties
* **interimSchemaName**: any: Schema name for interim table. Type: string (or Expression with resultType string).
* **keys**: any: Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings).

## SqlPartitionSettings
### Properties
* **partitionColumnName**: any: The name of the column in integer or datetime type that will be used for proceeding partitioning. If not specified, the primary key of the table is auto-detected and used as the partition column. Type: string (or Expression with resultType string).
* **partitionLowerBound**: any: The minimum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string).
* **partitionUpperBound**: any: The maximum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string).

## SqlServerLinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **applicationIntent**: any: The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
* **authenticationType**: 'SQL' | 'UserAssignedManagedIdentity' | 'Windows' | string: The type used for authentication. Type: string.
* **commandTimeout**: any: The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **connectionString**: any: The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **connectRetryCount**: any: The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
* **connectRetryInterval**: any: The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
* **connectTimeout**: any: The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **database**: any: The name of the database, used by recommended version. Type: string (or Expression with resultType string).
* **encrypt**: any: Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **failoverPartner**: any: The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
* **hostNameInCertificate**: any: The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
* **integratedSecurity**: any: Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **loadBalanceTimeout**: any: The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
* **maxPoolSize**: any: The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **minPoolSize**: any: The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
* **multipleActiveResultSets**: any: When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **multiSubnetFailover**: any: If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **packetSize**: any: The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
* **password**: [SecretBase](#secretbase): The on-premises Windows authentication password.
* **pooling**: any: Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **server**: any: The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
* **trustServerCertificate**: any: Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
* **userName**: any: The on-premises Windows authentication user name. Type: string (or Expression with resultType string).

## SqlServerStoredProcedureActivityTypeProperties
### Properties
* **storedProcedureName**: any (Required): Stored procedure name. Type: string (or Expression with resultType string).
* **storedProcedureParameters**: any: Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".

## SqlServerTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the SQL Server dataset. Type: string (or Expression with resultType string).
* **table**: any: The table name of the SQL Server dataset. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## SqlUpsertSettings
### Properties
* **interimSchemaName**: any: Schema name for interim table. Type: string (or Expression with resultType string).
* **keys**: any: Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings).
* **useTempDB**: any: Specifies whether to use temp db for upsert interim table. Type: boolean (or Expression with resultType boolean).

## SquareLinkedServiceTypeProperties
### Properties
* **clientId**: any: The client ID associated with your Square application.
* **clientSecret**: [SecretBase](#secretbase): The client secret associated with your Square application.
* **connectionProperties**: any: Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any: The URL of the Square instance. (i.e. mystore.mysquare.com)
* **redirectUri**: any: The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## SsisAccessCredential
### Properties
* **domain**: any (Required): Domain for windows authentication. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase) (Required): Password for windows authentication.
* **userName**: any (Required): UseName for windows authentication. Type: string (or Expression with resultType string).

## SsisChildPackage
### Properties
* **packageContent**: any (Required): Content for embedded child package. Type: string (or Expression with resultType string).
* **packageLastModifiedDate**: string: Last modified date for embedded child package.
* **packageName**: string: Name for embedded child package.
* **packagePath**: any (Required): Path for embedded child package. Type: string (or Expression with resultType string).

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
* **domain**: any (Required): Domain for windows authentication. Type: string (or Expression with resultType string).
* **password**: [SecureString](#securestring) (Required): Password for windows authentication.
* **userName**: any (Required): UseName for windows authentication. Type: string (or Expression with resultType string).

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
* **packagePath**: any: The SSIS package path. Type: string (or Expression with resultType string).
* **type**: 'File' | 'InlinePackage' | 'PackageStore' | 'SSISDB' | string: The type of SSIS package location.
* **typeProperties**: [SsisPackageLocationTypeProperties](#ssispackagelocationtypeproperties): SSIS package location properties.

## SsisPackageLocationTypeProperties
### Properties
* **accessCredential**: [SsisAccessCredential](#ssisaccesscredential): The package access credential.
* **childPackages**: [SsisChildPackage](#ssischildpackage)[]: The embedded child package list.
* **configurationAccessCredential**: [SsisAccessCredential](#ssisaccesscredential): The configuration file access credential.
* **configurationPath**: any: The configuration file of the package execution. Type: string (or Expression with resultType string).
* **packageContent**: any: The embedded package content. Type: string (or Expression with resultType string).
* **packageLastModifiedDate**: string: The embedded package last modified date.
* **packageName**: string: The package name.
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

## StoreReadSettings
* **Discriminator**: type

### Base Properties
* **disableMetricsCollection**: any: If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
* **maxConcurrentConnections**: any: The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).

### AmazonS3CompatibleReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **prefix**: any: The prefix filter for the S3 Compatible object name. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'AmazonS3CompatibleReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Amazon S3 Compatible wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: Amazon S3 Compatible wildcardFolderPath. Type: string (or Expression with resultType string).

### AmazonS3ReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **prefix**: any: The prefix filter for the S3 object name. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'AmazonS3ReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: AmazonS3 wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string).

### AzureBlobFSReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'AzureBlobFSReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Azure blobFS wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string).

### AzureBlobStorageReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **prefix**: any: The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'AzureBlobStorageReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Azure blob wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: Azure blob wildcardFolderPath. Type: string (or Expression with resultType string).

### AzureDataLakeStoreReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **listAfter**: any: Lists files after the value (exclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string).
* **listBefore**: any: Lists files before the value (inclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'AzureDataLakeStoreReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: ADLS wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: ADLS wildcardFolderPath. Type: string (or Expression with resultType string).

### AzureFileStorageReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **prefix**: any: The prefix filter for the Azure File name starting from root path. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'AzureFileStorageReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Azure File Storage wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string).

### FileServerReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileFilter**: any: Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'FileServerReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: FileServer wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: FileServer wildcardFolderPath. Type: string (or Expression with resultType string).

### FtpReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **disableChunking**: any: If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'FtpReadSettings' (Required): The read setting type.
* **useBinaryTransfer**: any: Specify whether to use binary transfer mode for FTP stores. Type: boolean (or Expression with resultType boolean).
* **wildcardFileName**: any: Ftp wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: Ftp wildcardFolderPath. Type: string (or Expression with resultType string).

### GoogleCloudStorageReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **prefix**: any: The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'GoogleCloudStorageReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string).

### HdfsReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **distcpSettings**: [DistcpSettings](#distcpsettings): Specifies Distcp-related settings.
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'HdfsReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: HDFS wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: HDFS wildcardFolderPath. Type: string (or Expression with resultType string).

### HttpReadSettings
#### Properties
* **additionalColumns**: any: Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
* **additionalHeaders**: any: The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
* **requestBody**: any: The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
* **requestMethod**: any: The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
* **requestTimeout**: any: Specifies the timeout for a HTTP client to get HTTP response from HTTP server. Type: string (or Expression with resultType string).
* **type**: 'HttpReadSettings' (Required): The read setting type.

### LakeHouseReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'LakeHouseReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Microsoft Fabric LakeHouse Files wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: Microsoft Fabric LakeHouse Files wildcardFolderPath. Type: string (or Expression with resultType string).

### OracleCloudStorageReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **prefix**: any: The prefix filter for the Oracle Cloud Storage object name. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'OracleCloudStorageReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Oracle Cloud Storage wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: Oracle Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string).

### SftpReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
* **disableChunking**: any: If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean).
* **enablePartitionDiscovery**: any: Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
* **fileListPath**: any: Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
* **modifiedDatetimeEnd**: any: The end of file's modified datetime. Type: string (or Expression with resultType string).
* **modifiedDatetimeStart**: any: The start of file's modified datetime. Type: string (or Expression with resultType string).
* **partitionRootPath**: any: Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
* **recursive**: any: If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
* **type**: 'SftpReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Sftp wildcardFileName. Type: string (or Expression with resultType string).
* **wildcardFolderPath**: any: Sftp wildcardFolderPath. Type: string (or Expression with resultType string).


## StoreWriteSettings
* **Discriminator**: type

### Base Properties
* **copyBehavior**: any: The type of copy behavior for copy sink.
* **disableMetricsCollection**: any: If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
* **maxConcurrentConnections**: any: The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
* **metadata**: [MetadataItem](#metadataitem)[]: Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).

### AzureBlobFSWriteSettings
#### Properties
* **blockSizeInMB**: any: Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer).
* **type**: 'AzureBlobFSWriteSettings' (Required): The write setting type.

### AzureBlobStorageWriteSettings
#### Properties
* **blockSizeInMB**: any: Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer).
* **type**: 'AzureBlobStorageWriteSettings' (Required): The write setting type.

### AzureDataLakeStoreWriteSettings
#### Properties
* **expiryDateTime**: any: Specifies the expiry time of the written files. The time is applied to the UTC time zone in the format of "2018-12-01T05:00:00Z". Default value is NULL. Type: string (or Expression with resultType string).
* **type**: 'AzureDataLakeStoreWriteSettings' (Required): The write setting type.

### AzureFileStorageWriteSettings
#### Properties
* **type**: 'AzureFileStorageWriteSettings' (Required): The write setting type.

### FileServerWriteSettings
#### Properties
* **type**: 'FileServerWriteSettings' (Required): The write setting type.

### LakeHouseWriteSettings
#### Properties
* **type**: 'LakeHouseWriteSettings' (Required): The write setting type.

### SftpWriteSettings
#### Properties
* **operationTimeout**: any: Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string).
* **type**: 'SftpWriteSettings' (Required): The write setting type.
* **useTempFileRename**: any: Upload to temporary file(s) and rename. Disable this option if your SFTP server doesn't support rename operation. Type: boolean (or Expression with resultType boolean).


## SwitchActivityTypeProperties
### Properties
* **cases**: [SwitchCase](#switchcase)[]: List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities.
* **defaultActivities**: [Activity](#activity)[]: List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action.
* **on**: [Expression](#expression) (Required): An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed.

## SwitchCase
### Properties
* **activities**: [Activity](#activity)[]: List of activities to execute for satisfied case condition.
* **value**: string: Expected value that satisfies the expression result of the 'on' property.

## SybaseLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows' | string: AuthenticationType to be used for connection.
* **database**: any (Required): Database name for connection. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password for authentication.
* **schema**: any: Schema name for connection. Type: string (or Expression with resultType string).
* **server**: any (Required): Server name for connection. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## SybaseTableDatasetTypeProperties
### Properties
* **tableName**: any: The Sybase table name. Type: string (or Expression with resultType string).

## SynapseNotebookActivityTypeProperties
### Properties
* **conf**: any: Spark configuration properties, which will override the 'conf' of the notebook you provide.
* **configurationType**: 'Artifact' | 'Customized' | 'Default' | string: The type of the spark config.
* **driverSize**: any: Number of core and memory to be used for driver allocated in the specified Spark pool for the session, which will be used for overriding 'driverCores' and 'driverMemory' of the notebook you provide. Type: string (or Expression with resultType string).
* **executorSize**: any: Number of core and memory to be used for executors allocated in the specified Spark pool for the session, which will be used for overriding 'executorCores' and 'executorMemory' of the notebook you provide. Type: string (or Expression with resultType string).
* **notebook**: [SynapseNotebookReference](#synapsenotebookreference) (Required): Synapse notebook reference.
* **numExecutors**: any: Number of executors to launch for this session, which will override the 'numExecutors' of the notebook you provide. Type: integer (or Expression with resultType integer).
* **parameters**: [SynapseNotebookActivityTypePropertiesParameters](#synapsenotebookactivitytypepropertiesparameters): Notebook parameters.
* **sparkConfig**: [SynapseNotebookActivityTypePropertiesSparkConfig](#synapsenotebookactivitytypepropertiessparkconfig): Spark configuration property.
* **sparkPool**: [BigDataPoolParametrizationReference](#bigdatapoolparametrizationreference): The name of the big data pool which will be used to execute the notebook.
* **targetSparkConfiguration**: [SparkConfigurationParametrizationReference](#sparkconfigurationparametrizationreference): The spark configuration of the spark job.

## SynapseNotebookActivityTypePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [NotebookParameter](#notebookparameter)

## SynapseNotebookActivityTypePropertiesSparkConfig
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SynapseNotebookReference
### Properties
* **referenceName**: any (Required): Reference notebook name. Type: string (or Expression with resultType string).
* **type**: 'NotebookReference' | string (Required): Synapse notebook reference type.

## SynapseSparkJobActivityTypeProperties
### Properties
* **args**: any[]: User specified arguments to SynapseSparkJobDefinitionActivity.
* **className**: any: The fully-qualified identifier or the main class that is in the main definition file, which will override the 'className' of the spark job definition you provide. Type: string (or Expression with resultType string).
* **conf**: any: Spark configuration properties, which will override the 'conf' of the spark job definition you provide.
* **configurationType**: 'Artifact' | 'Customized' | 'Default' | string: The type of the spark config.
* **driverSize**: any: Number of core and memory to be used for driver allocated in the specified Spark pool for the job, which will be used for overriding 'driverCores' and 'driverMemory' of the spark job definition you provide. Type: string (or Expression with resultType string).
* **executorSize**: any: Number of core and memory to be used for executors allocated in the specified Spark pool for the job, which will be used for overriding 'executorCores' and 'executorMemory' of the spark job definition you provide. Type: string (or Expression with resultType string).
* **file**: any: The main file used for the job, which will override the 'file' of the spark job definition you provide. Type: string (or Expression with resultType string).
* **files**: any[]: (Deprecated. Please use pythonCodeReference and filesV2) Additional files used for reference in the main definition file, which will override the 'files' of the spark job definition you provide.
* **filesV2**: any[]: Additional files used for reference in the main definition file, which will override the 'jars' and 'files' of the spark job definition you provide.
* **numExecutors**: any: Number of executors to launch for this job, which will override the 'numExecutors' of the spark job definition you provide. Type: integer (or Expression with resultType integer).
* **pythonCodeReference**: any[]: Additional python code files used for reference in the main definition file, which will override the 'pyFiles' of the spark job definition you provide.
* **scanFolder**: any: Scanning subfolders from the root folder of the main definition file, these files will be added as reference files. The folders named 'jars', 'pyFiles', 'files' or 'archives' will be scanned, and the folders name are case sensitive. Type: boolean (or Expression with resultType boolean).
* **sparkConfig**: [SynapseSparkJobActivityTypePropertiesSparkConfig](#synapsesparkjobactivitytypepropertiessparkconfig): Spark configuration property.
* **sparkJob**: [SynapseSparkJobReference](#synapsesparkjobreference) (Required): Synapse spark job reference.
* **targetBigDataPool**: [BigDataPoolParametrizationReference](#bigdatapoolparametrizationreference): The name of the big data pool which will be used to execute the spark batch job, which will override the 'targetBigDataPool' of the spark job definition you provide.
* **targetSparkConfiguration**: [SparkConfigurationParametrizationReference](#sparkconfigurationparametrizationreference): The spark configuration of the spark job.

## SynapseSparkJobActivityTypePropertiesSparkConfig
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SynapseSparkJobReference
### Properties
* **referenceName**: any (Required): Reference spark job name. Expression with resultType string.
* **type**: 'SparkJobDefinitionReference' | string (Required): Synapse spark job reference type.

## TeamDeskLinkedServiceTypeProperties
### Properties
* **apiToken**: [SecretBase](#secretbase): The api token for the TeamDesk source.
* **authenticationType**: 'Basic' | 'Token' | string (Required): The authentication type to use.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): The password of the TeamDesk source.
* **url**: any (Required): The url to connect TeamDesk source. Type: string (or Expression with resultType string).
* **userName**: any: The username of the TeamDesk source. Type: string (or Expression with resultType string).

## TeradataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows' | string: AuthenticationType to be used for connection.
* **connectionString**: any: Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): Password for authentication.
* **server**: any: Server name for connection. Type: string (or Expression with resultType string).
* **username**: any: Username for authentication. Type: string (or Expression with resultType string).

## TeradataPartitionSettings
### Properties
* **partitionColumnName**: any: The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string).
* **partitionLowerBound**: any: The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
* **partitionUpperBound**: any: The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).

## TeradataTableDatasetTypeProperties
### Properties
* **database**: any: The database name of Teradata. Type: string (or Expression with resultType string).
* **table**: any: The table name of Teradata. Type: string (or Expression with resultType string).

## Transformation
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference.
* **description**: string: Transformation description.
* **flowlet**: [DataFlowReference](#dataflowreference): Flowlet Reference
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference.
* **name**: string (Required): Transformation name.

## Trigger
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the trigger.
* **description**: string: Trigger description.
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' | string (ReadOnly): Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.

### BlobEventsTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'BlobEventsTrigger' (Required): Trigger type.
* **typeProperties**: [BlobEventsTriggerTypeProperties](#blobeventstriggertypeproperties) (Required): Blob Events Trigger properties.

### BlobTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'BlobTrigger' (Required): Trigger type.
* **typeProperties**: [BlobTriggerTypeProperties](#blobtriggertypeproperties) (Required): Blob Trigger properties.

### ChainingTrigger
#### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required): Pipeline for which runs are created when all upstream pipelines complete successfully.
* **type**: 'ChainingTrigger' (Required): Trigger type.
* **typeProperties**: [ChainingTriggerTypeProperties](#chainingtriggertypeproperties) (Required): Chaining Trigger properties.

### CustomEventsTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'CustomEventsTrigger' (Required): Trigger type.
* **typeProperties**: [CustomEventsTriggerTypeProperties](#customeventstriggertypeproperties) (Required): Custom Events Trigger properties.

### RerunTumblingWindowTrigger
#### Properties
* **type**: 'RerunTumblingWindowTrigger' (Required): Trigger type.
* **typeProperties**: [RerunTumblingWindowTriggerTypeProperties](#reruntumblingwindowtriggertypeproperties) (Required): Rerun Trigger properties.

### ScheduleTrigger
#### Properties
* **pipelines**: [TriggerPipelineReference](#triggerpipelinereference)[]: Pipelines that need to be started.
* **type**: 'ScheduleTrigger' (Required): Trigger type.
* **typeProperties**: [ScheduleTriggerTypeProperties](#scheduletriggertypeproperties) (Required): Schedule Trigger properties.

### TumblingWindowTrigger
#### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required): Pipeline for which runs are created when an event is fired for trigger window that is ready.
* **type**: 'TumblingWindowTrigger' (Required): Trigger type.
* **typeProperties**: [TumblingWindowTriggerTypeProperties](#tumblingwindowtriggertypeproperties) (Required): Tumbling Window Trigger properties.


## TriggerPipelineReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): Pipeline parameters.
* **pipelineReference**: [PipelineReference](#pipelinereference): Pipeline reference.

## TriggerReference
### Properties
* **referenceName**: string (Required): Reference trigger name.
* **type**: 'TriggerReference' | string (Required): Trigger reference type.

## TumblingWindowTriggerTypeProperties
### Properties
* **delay**: any: Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **dependsOn**: [DependencyReference](#dependencyreference)[]: Triggers that this trigger depends on. Only tumbling window triggers are supported.
* **endTime**: string: The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
* **frequency**: 'Hour' | 'Minute' | 'Month' | string (Required): The frequency of the time windows.
* **interval**: int (Required): The interval of the time windows. The minimum interval allowed is 15 Minutes.
* **maxConcurrency**: int {minValue: 1, maxValue: 50} (Required): The max number of parallel time windows (ready for execution) for which a new run is triggered.
* **retryPolicy**: [RetryPolicy](#retrypolicy): Retry policy that will be applied for failed pipeline runs.
* **startTime**: string (Required): The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.

## TwilioLinkedServiceTypeProperties
### Properties
* **password**: [SecretBase](#secretbase) (Required): The auth token of Twilio service.
* **userName**: any (Required): The Account SID of Twilio service. Type: string (or Expression with resultType string).

## UntilActivityTypeProperties
### Properties
* **activities**: [Activity](#activity)[] (Required): List of activities to execute.
* **expression**: [Expression](#expression) (Required): An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true
* **timeout**: any: Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).

## UserAssignedIdentitiesDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## UserProperty
### Properties
* **name**: string (Required): User property name.
* **value**: any (Required): User property value. Type: string (or Expression with resultType string).

## ValidationActivityTypeProperties
### Properties
* **childItems**: any: Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean).
* **dataset**: [DatasetReference](#datasetreference) (Required): Validation activity dataset reference.
* **minimumSize**: any: Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer).
* **sleep**: any: A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer).
* **timeout**: any: Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).

## VariableDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [VariableSpecification](#variablespecification)

## VariableSpecification
### Properties
* **defaultValue**: any: Default value of variable.
* **type**: 'Array' | 'Bool' | 'String' | string (Required): Variable type.

## VerticaDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Vertica. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Vertica. Type: string (or Expression with resultType string).
* **tableName**: any: This property will be retired. Please consider using schema + table properties instead.

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
* **database**: any: Database name for connection. Type: string.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **port**: any: The port for the connection. Type: integer.
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): The Azure key vault secret reference of password in connection string.
* **server**: any: Server name for connection. Type: string.
* **uid**: any: Username for authentication. Type: string.

## WaitActivityTypeProperties
### Properties
* **waitTimeInSeconds**: any (Required): Duration in seconds. Type: integer (or Expression with resultType integer).

## WarehouseLinkedServiceTypeProperties
### Properties
* **artifactId**: any (Required): The ID of Microsoft Fabric Warehouse artifact. Type: string (or Expression with resultType string).
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **endpoint**: any (Required): The endpoint of Microsoft Fabric Warehouse server. Type: string (or Expression with resultType string).
* **servicePrincipalCredential**: [SecretBase](#secretbase): The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
* **servicePrincipalCredentialType**: any: The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: The ID of the application used to authenticate against Microsoft Fabric Warehouse. Type: string (or Expression with resultType string).
* **servicePrincipalKey**: [SecretBase](#secretbase): The Key of the application used to authenticate against Microsoft Fabric Warehouse.
* **tenant**: any: The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
* **workspaceId**: any: The ID of Microsoft Fabric workspace. Type: string (or Expression with resultType string).

## WarehouseTableDatasetTypeProperties
### Properties
* **schema**: any: The schema name of the Microsoft Fabric Warehouse. Type: string (or Expression with resultType string).
* **table**: any: The table name of the Microsoft Fabric Warehouse. Type: string (or Expression with resultType string).

## WebActivityAuthentication
### Properties
* **credential**: [CredentialReference](#credentialreference): The credential reference containing authentication information.
* **password**: [SecretBase](#secretbase): Password for the PFX file or basic authentication / Secret when used for ServicePrincipal
* **pfx**: [SecretBase](#secretbase): Base64-encoded contents of a PFX file or Certificate when used for ServicePrincipal
* **resource**: any: Resource for which Azure Auth token will be requested when using MSI Authentication. Type: string (or Expression with resultType string).
* **type**: string: Web activity authentication (Basic/ClientCertificate/MSI/ServicePrincipal)
* **username**: any: Web activity authentication user name for basic authentication or ClientID when used for ServicePrincipal. Type: string (or Expression with resultType string).
* **userTenant**: any: TenantId for which Azure Auth token will be requested when using ServicePrincipal Authentication. Type: string (or Expression with resultType string).

## WebActivityTypeProperties
### Properties
* **authentication**: [WebActivityAuthentication](#webactivityauthentication): Authentication method used for calling the endpoint.
* **body**: any: Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference): The integration runtime reference.
* **datasets**: [DatasetReference](#datasetreference)[]: List of datasets passed to web endpoint.
* **disableCertValidation**: bool: When set to true, Certificate validation will be disabled.
* **headers**: [WebActivityTypePropertiesHeaders](#webactivitytypepropertiesheaders): Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
* **httpRequestTimeout**: any: Timeout for the HTTP request to get a response. Format is in TimeSpan (hh:mm:ss). This value is the timeout to get a response, not the activity timeout. The default value is 00:01:00 (1 minute). The range is from 1 to 10 minutes
* **linkedServices**: [LinkedServiceReference](#linkedservicereference)[]: List of linked services passed to web endpoint.
* **method**: 'DELETE' | 'GET' | 'POST' | 'PUT' | string (Required): Rest API method for target endpoint.
* **turnOffAsync**: bool: Option to disable invoking HTTP GET on location given in response header of a HTTP 202 Response. If set true, it stops invoking HTTP GET on http location given in response header. If set false then continues to invoke HTTP GET call on location given in http response headers.
* **url**: any (Required): Web activity target endpoint and path. Type: string (or Expression with resultType string).

## WebActivityTypePropertiesHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: any

## WebHookActivityTypeProperties
### Properties
* **authentication**: [WebActivityAuthentication](#webactivityauthentication): Authentication method used for calling the endpoint.
* **body**: any: Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
* **headers**: [WebHookActivityTypePropertiesHeaders](#webhookactivitytypepropertiesheaders): Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
* **method**: 'POST' | string (Required): Rest API method for target endpoint.
* **reportStatusOnCallBack**: any: When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean).
* **timeout**: string: The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **url**: any (Required): WebHook activity target endpoint and path. Type: string (or Expression with resultType string).

## WebHookActivityTypePropertiesHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: any

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
* **connectionProperties**: any: Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object.
* **consumerKey**: [SecretBase](#secretbase): The consumer key associated with the Xero application.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **host**: any: The endpoint of the Xero server. (i.e. api.xero.com)
* **privateKey**: [SecretBase](#secretbase): The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(
).
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

## XmlDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The data compression method used for the json dataset.
* **encodingName**: any: The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
* **location**: [DatasetLocation](#datasetlocation) (Required): The location of the json data storage.
* **nullValue**: any: The null value string. Type: string (or Expression with resultType string).

## XmlReadSettings
### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression settings.
* **detectDataType**: any: Indicates whether type detection is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean).
* **namespacePrefixes**: any: Namespace uri to prefix mappings to override the prefixes in column names when namespace is enabled, if no prefix is defined for a namespace uri, the prefix of xml element/attribute name in the xml data file will be used. Example: "{"http://www.example.com/xml":"prefix"}" Type: object (or Expression with resultType object).
* **namespaces**: any: Indicates whether namespace is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean).
* **type**: string (Required): The read setting type.
* **validationMode**: any: Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string).
### Additional Properties
* **Additional Properties Type**: any

## ZendeskLinkedServiceTypeProperties
### Properties
* **apiToken**: [SecretBase](#secretbase): The api token for the Zendesk source.
* **authenticationType**: 'Basic' | 'Token' | string (Required): The authentication type to use.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **password**: [SecretBase](#secretbase): The password of the Zendesk source.
* **url**: any (Required): The url to connect Zendesk source. Type: string (or Expression with resultType string).
* **userName**: any: The username of the Zendesk source. Type: string (or Expression with resultType string).

## ZohoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The access token for Zoho authentication.
* **connectionProperties**: any: Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
* **endpoint**: any: The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
* **useEncryptedEndpoints**: any: Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
* **useHostVerification**: any: Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
* **usePeerVerification**: any: Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.

