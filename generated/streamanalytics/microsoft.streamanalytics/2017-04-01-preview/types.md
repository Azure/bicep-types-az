# Microsoft.StreamAnalytics @ 2017-04-01-preview

## Resource Microsoft.StreamAnalytics/streamingjobs@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Describes the system-assigned managed identity assigned to this job that can be used to authenticate with inputs and outputs.
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingJobProperties](#streamingjobproperties): The properties that are associated with a streaming job.  Required on PUT (CreateOrReplace) requests.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StreamAnalytics/streamingjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StreamAnalytics/streamingjobs/functions@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FunctionProperties](#functionproperties): The properties that are associated with a function.
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StreamAnalytics/streamingjobs/inputs@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InputProperties](#inputproperties): The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/inputs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StreamAnalytics/streamingjobs/outputs@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OutputProperties](#outputproperties): The properties that are associated with an output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/outputs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StreamAnalytics/streamingjobs/transformations@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TransformationProperties](#transformationproperties): The properties that are associated with a transformation. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/transformations' (ReadOnly, DeployTimeConstant): The resource type

## AzureDataLakeStoreOutputDataSourceProperties
### Properties
* **accountName**: string: The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests.
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **dateFormat**: string: The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead.
* **filePathPrefix**: string: The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests.
* **refreshToken**: string: A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
* **tenantId**: string: The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests.
* **timeFormat**: string: The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead.
* **tokenUserDisplayName**: string: The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
* **tokenUserPrincipalName**: string: The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.

## AzureFunctionOutputDataSourceProperties
### Properties
* **apiKey**: string: If you want to use an Azure Function from another subscription, you can do so by providing the key to access your function.
* **functionAppName**: string: The name of your Azure Functions app.
* **functionName**: string: The name of the function in your Azure Functions app.
* **maxBatchCount**: int: A property that lets you specify the maximum number of events in each batch that's sent to Azure Functions. The default value is 100.
* **maxBatchSize**: int: A property that lets you set the maximum size for each output batch that's sent to your Azure function. The input unit is in bytes. By default, this value is 262,144 bytes (256 KB).

## AzureMachineLearningServiceFunctionBindingProperties
### Properties
* **apiKey**: string: The API key used to authenticate with Request-Response endpoint.
* **batchSize**: int: Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
* **endpoint**: string: The Request-Response execute endpoint of the Azure Machine Learning web service.
* **inputs**: [AzureMachineLearningServiceInputColumn](#azuremachinelearningserviceinputcolumn)[]: The inputs for the Azure Machine Learning web service endpoint.
* **numberOfParallelRequests**: int: The number of parallel requests that will be sent per partition of your job to the machine learning service. Default is 1.
* **outputs**: [AzureMachineLearningServiceOutputColumn](#azuremachinelearningserviceoutputcolumn)[]: A list of outputs from the Azure Machine Learning web service endpoint execution.

## AzureMachineLearningServiceInputColumn
### Properties
* **dataType**: string: The (Azure Machine Learning supported) data type of the input column.
* **mapTo**: int: The zero based index of the function parameter this input maps to.
* **name**: string: The name of the input column.

## AzureMachineLearningServiceOutputColumn
### Properties
* **dataType**: string: The (Azure Machine Learning supported) data type of the output column.
* **mapTo**: int: The zero based index of the function parameter this input maps to.
* **name**: string: The name of the output column.

## AzureMachineLearningStudioFunctionBindingProperties
### Properties
* **apiKey**: string: The API key used to authenticate with Request-Response endpoint.
* **batchSize**: int: Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
* **endpoint**: string: The Request-Response execute endpoint of the Azure Machine Learning Studio. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
* **inputs**: [AzureMachineLearningStudioInputs](#azuremachinelearningstudioinputs): The inputs for the Azure Machine Learning Studio endpoint.
* **outputs**: [AzureMachineLearningStudioOutputColumn](#azuremachinelearningstudiooutputcolumn)[]: A list of outputs from the Azure Machine Learning Studio endpoint execution.

## AzureMachineLearningStudioInputColumn
### Properties
* **dataType**: string: The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
* **mapTo**: int: The zero based index of the function parameter this input maps to.
* **name**: string: The name of the input column.

## AzureMachineLearningStudioInputs
### Properties
* **columnNames**: [AzureMachineLearningStudioInputColumn](#azuremachinelearningstudioinputcolumn)[]: A list of input columns for the Azure Machine Learning Studio endpoint.
* **name**: string: The name of the input. This is the name provided while authoring the endpoint.

## AzureMachineLearningStudioOutputColumn
### Properties
* **dataType**: string: The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
* **name**: string: The name of the output column.

## AzureSqlDatabaseOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **database**: string: The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
* **maxBatchCount**: int: Max Batch count for write to Sql database, the default value is 10,000. Optional on PUT requests.
* **maxWriterCount**: int: Max Write r count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
* **password**: string: The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
* **server**: string: The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
* **table**: string: The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
* **user**: string: The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.

## AzureSqlReferenceInputDataSourceProperties
### Properties
* **database**: string: This element is associated with the datasource element. This is the name of the database that output will be written to.
* **deltaSnapshotQuery**: string: This element is associated with the datasource element. This query is used to fetch incremental changes from the SQL database. To use this option, we recommend using temporal tables in Azure SQL Database.
* **fullSnapshotQuery**: string: This element is associated with the datasource element. This query is used to fetch data from the sql database.
* **password**: string: This element is associated with the datasource element. This is the password that will be used to connect to the SQL Database instance.
* **refreshRate**: string: This element is associated with the datasource element. This indicates how frequently the data will be fetched from the database. It is of DateTime format.
* **refreshType**: string: This element is associated with the datasource element. This element is of enum type. It indicates what kind of data refresh option do we want to use:Static/RefreshPeriodicallyWithFull/RefreshPeriodicallyWithDelta
* **server**: string: This element is associated with the datasource element. This is the name of the server that contains the database that will be written to.
* **table**: string: This element is associated with the datasource element. The name of the table in the Azure SQL database..
* **user**: string: This element is associated with the datasource element. This is the user name that will be used to connect to the SQL Database instance.

## AzureSynapseOutputDataSourceProperties
### Properties
* **database**: string: The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
* **password**: string: The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
* **server**: string: The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
* **table**: string: The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
* **user**: string: The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.

## AzureTableOutputDataSourceProperties
### Properties
* **accountKey**: string: The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
* **accountName**: string: The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
* **batchSize**: int: The number of rows to write to the Azure Table at a time.
* **columnsToRemove**: string[]: If specified, each item in the array is the name of a column to remove (if present) from output event entities.
* **partitionKey**: string: This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests.
* **rowKey**: string: This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests.
* **table**: string: The name of the Azure Table. Required on PUT (CreateOrReplace) requests.

## BlobOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **container**: string: The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
* **dateFormat**: string: The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
* **pathPattern**: string: The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
* **timeFormat**: string: The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.

## BlobReferenceInputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **container**: string: The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
* **dateFormat**: string: The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
* **pathPattern**: string: The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
* **timeFormat**: string: The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.

## BlobStreamInputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **container**: string: The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
* **dateFormat**: string: The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
* **pathPattern**: string: The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
* **sourcePartitionCount**: int: The partition count of the blob input data source. Range 1 - 1024.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
* **timeFormat**: string: The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.

## ClusterInfo
### Properties
* **id**: string: The resource id of cluster.

## Compression
### Properties
* **type**: string (Required)

## CSharpFunctionBindingProperties
### Properties
* **class**: string: The Csharp code containing a single function definition.
* **dllPath**: string: The Csharp code containing a single function definition.
* **method**: string: The Csharp code containing a single function definition.
* **script**: string: The Csharp code containing a single function definition.

## CsvSerializationProperties
### Properties
* **encoding**: 'UTF8' | string: Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
* **fieldDelimiter**: string: Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests.

## CustomClrSerializationProperties
### Properties
* **serializationClassName**: string: The serialization class name.
* **serializationDllPath**: string: The serialization library path.

## DiagnosticCondition
### Properties
* **code**: string (ReadOnly): The opaque diagnostic code.
* **message**: string (ReadOnly): The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request.
* **since**: string (ReadOnly): The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time.

## Diagnostics
### Properties
* **conditions**: [DiagnosticCondition](#diagnosticcondition)[] (ReadOnly): A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention.

## DocumentDbOutputDataSourceProperties
### Properties
* **accountId**: string: The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests.
* **accountKey**: string: The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests.
* **collectionNamePattern**: string: The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests.
* **database**: string: The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests.
* **documentId**: string: The name of the field in output events used to specify the primary key which insert or update operations are based on.
* **partitionKey**: string: The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified.

## EventHubOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **eventHubName**: string: The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
* **partitionKey**: string: The key/column that is used to determine to which partition to send event data.
* **propertyColumns**: string[]
* **serviceBusNamespace**: string: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyKey**: string: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyName**: string: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.

## EventHubStreamInputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **consumerGroupName**: string: The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
* **eventHubName**: string: The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
* **serviceBusNamespace**: string: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyKey**: string: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyName**: string: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.

## External
### Properties
* **container**: string
* **path**: string
* **storageAccount**: [StorageAccount](#storageaccount): The properties that are associated with an Azure Storage account

## Function
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: Resource name
* **properties**: [FunctionProperties](#functionproperties): The properties that are associated with a function.
* **type**: string (ReadOnly): Resource type

## FunctionBinding
* **Discriminator**: type

### Base Properties
### AzureMachineLearningStudioFunctionBinding
#### Properties
* **properties**: [AzureMachineLearningStudioFunctionBindingProperties](#azuremachinelearningstudiofunctionbindingproperties): The binding properties associated with an Azure Machine learning Studio.
* **type**: 'Microsoft.MachineLearning/WebService' (Required): Indicates the function binding type.

### AzureMachineLearningServiceFunctionBinding
#### Properties
* **properties**: [AzureMachineLearningServiceFunctionBindingProperties](#azuremachinelearningservicefunctionbindingproperties): The binding properties associated with an Azure Machine learning web service.
* **type**: 'Microsoft.MachineLearningServices' (Required): Indicates the function binding type.

### CSharpFunctionBinding
#### Properties
* **properties**: [CSharpFunctionBindingProperties](#csharpfunctionbindingproperties): The binding properties associated with a CSharp function.
* **type**: 'Microsoft.StreamAnalytics/CLRUdf' (Required): Indicates the function binding type.

### JavaScriptFunctionBinding
#### Properties
* **properties**: [JavaScriptFunctionBindingProperties](#javascriptfunctionbindingproperties): The binding properties associated with a JavaScript function.
* **type**: 'Microsoft.StreamAnalytics/JavascriptUdf' (Required): Indicates the function binding type.


## FunctionConfiguration
### Properties
* **binding**: [FunctionBinding](#functionbinding): The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
* **inputs**: [FunctionInput](#functioninput)[]
* **output**: [FunctionOutput](#functionoutput): Describes the output of a function.

## FunctionInput
### Properties
* **dataType**: string: The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
* **isConfigurationParameter**: bool: A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.

## FunctionOutput
### Properties
* **dataType**: string: The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx

## FunctionProperties
* **Discriminator**: type

### Base Properties
* **etag**: string (ReadOnly): The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
* **properties**: [FunctionConfiguration](#functionconfiguration)
### AggregateFunctionProperties
#### Properties
* **type**: 'Aggregate' (Required): Indicates the type of function.

### ScalarFunctionProperties
#### Properties
* **type**: 'Scalar' (Required): Indicates the type of function.


## Identity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: string

## Input
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: Resource name
* **properties**: [InputProperties](#inputproperties): The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
* **type**: string (ReadOnly): Resource type

## InputProperties
* **Discriminator**: type

### Base Properties
* **compression**: [Compression](#compression): Describes how input data is compressed
* **diagnostics**: [Diagnostics](#diagnostics) (ReadOnly): Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
* **etag**: string (ReadOnly): The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
* **partitionKey**: string: partitionKey Describes a key in the input data which is used for partitioning the input data
* **serialization**: [Serialization](#serialization): Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
### ReferenceInputProperties
#### Properties
* **datasource**: [ReferenceInputDataSource](#referenceinputdatasource): Describes an input data source that contains reference data. Required on PUT (CreateOrReplace) requests.
* **type**: 'Reference' (Required): Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.

### StreamInputProperties
#### Properties
* **datasource**: [StreamInputDataSource](#streaminputdatasource): Describes an input data source that contains stream data. Required on PUT (CreateOrReplace) requests.
* **type**: 'Stream' (Required): Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.


## IoTHubStreamInputDataSourceProperties
### Properties
* **consumerGroupName**: string: The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group.
* **endpoint**: string: The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.).
* **iotHubNamespace**: string: The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyKey**: string: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyName**: string: The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests.

## JavaScriptFunctionBindingProperties
### Properties
* **script**: string: The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'

## JobStorageAccount
### Properties
* **accountKey**: string: The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
* **accountName**: string: The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.

## JsonSerializationProperties
### Properties
* **encoding**: 'UTF8' | string: Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
* **format**: 'Array' | 'LineSeparated' | string: This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.

## Output
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: Resource name
* **properties**: [OutputProperties](#outputproperties): The properties that are associated with an output. Required on PUT (CreateOrReplace) requests.
* **type**: string (ReadOnly): Resource type

## OutputDataSource
* **Discriminator**: type

### Base Properties
### AzureFunctionOutputDataSource
#### Properties
* **properties**: [AzureFunctionOutputDataSourceProperties](#azurefunctionoutputdatasourceproperties): The properties that are associated with a Azure Function output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.AzureFunction' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### AzureDataLakeStoreOutputDataSource
#### Properties
* **properties**: [AzureDataLakeStoreOutputDataSourceProperties](#azuredatalakestoreoutputdatasourceproperties): The properties that are associated with an Azure Data Lake Store output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.DataLake/Accounts' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### EventHubV2OutputDataSource
#### Properties
* **properties**: [EventHubOutputDataSourceProperties](#eventhuboutputdatasourceproperties): The properties that are associated with an Event Hub output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.EventHub/EventHub' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### EventHubOutputDataSource
#### Properties
* **properties**: [EventHubOutputDataSourceProperties](#eventhuboutputdatasourceproperties): The properties that are associated with an Event Hub output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.ServiceBus/EventHub' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### ServiceBusQueueOutputDataSource
#### Properties
* **properties**: [ServiceBusQueueOutputDataSourceProperties](#servicebusqueueoutputdatasourceproperties): The properties that are associated with a Service Bus Queue output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.ServiceBus/Queue' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### ServiceBusTopicOutputDataSource
#### Properties
* **properties**: [ServiceBusTopicOutputDataSourceProperties](#servicebustopicoutputdatasourceproperties): The properties that are associated with a Service Bus Topic output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.ServiceBus/Topic' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### AzureSqlDatabaseOutputDataSource
#### Properties
* **properties**: [AzureSqlDatabaseOutputDataSourceProperties](#azuresqldatabaseoutputdatasourceproperties): The properties that are associated with an Azure SQL database output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.Sql/Server/Database' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### AzureSynapseOutputDataSource
#### Properties
* **properties**: [AzureSynapseOutputDataSourceProperties](#azuresynapseoutputdatasourceproperties): The properties that are associated with an Azure Synapse output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.Sql/Server/DataWarehouse' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### BlobOutputDataSource
#### Properties
* **properties**: [BlobOutputDataSourceProperties](#bloboutputdatasourceproperties): The properties that are associated with a blob output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.Storage/Blob' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### DocumentDbOutputDataSource
#### Properties
* **properties**: [DocumentDbOutputDataSourceProperties](#documentdboutputdatasourceproperties): The properties that are associated with a DocumentDB output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.Storage/DocumentDB' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### AzureTableOutputDataSource
#### Properties
* **properties**: [AzureTableOutputDataSourceProperties](#azuretableoutputdatasourceproperties): The properties that are associated with an Azure Table output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.Storage/Table' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### PowerBIOutputDataSource
#### Properties
* **properties**: [PowerBIOutputDataSourceProperties](#powerbioutputdatasourceproperties): The properties that are associated with a Power BI output. Required on PUT (CreateOrReplace) requests.
* **type**: 'PowerBI' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### RawOutputDatasource
#### Properties
* **properties**: [RawOutputDatasourceProperties](#rawoutputdatasourceproperties): The properties that are associated with a raw output. Required on PUT (CreateOrReplace) requests.
* **type**: 'Raw' (Required): Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.


## OutputProperties
### Properties
* **datasource**: [OutputDataSource](#outputdatasource): Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
* **diagnostics**: [Diagnostics](#diagnostics) (ReadOnly): Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
* **etag**: string (ReadOnly): The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
* **serialization**: [Serialization](#serialization): Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
* **sizeWindow**: int
* **timeWindow**: string

## PowerBIOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **dataset**: string: The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests.
* **groupId**: string: The ID of the Power BI group.
* **groupName**: string: The name of the Power BI group. Use this property to help remember which specific Power BI group id was used.
* **refreshToken**: string: A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
* **table**: string: The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests.
* **tokenUserDisplayName**: string: The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
* **tokenUserPrincipalName**: string: The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.

## RawInputDatasourceProperties
### Properties
* **payload**: string: The JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.
* **payloadUri**: string: The SAS URL to a blob containing the JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.

## RawOutputDatasourceProperties
### Properties
* **payloadUri**: string: The SAS URL to a blob where the output should be written. If this property is not set, output data will be written into a temporary storage, and a SAS URL to that temporary storage will be included in the result.

## ReferenceInputDataSource
* **Discriminator**: type

### Base Properties
### AzureSqlReferenceInputDataSource
#### Properties
* **properties**: [AzureSqlReferenceInputDataSourceProperties](#azuresqlreferenceinputdatasourceproperties): Describes Azure SQL database reference input data source properties.
* **type**: 'Microsoft.Sql/Server/Database' (Required): Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.

### BlobReferenceInputDataSource
#### Properties
* **properties**: [BlobReferenceInputDataSourceProperties](#blobreferenceinputdatasourceproperties): The properties that are associated with a blob input containing reference data. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.Storage/Blob' (Required): Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.

### RawReferenceInputDataSource
#### Properties
* **properties**: [RawInputDatasourceProperties](#rawinputdatasourceproperties): The properties that are associated with a raw input containing reference data. Required on PUT (CreateOrReplace) requests.
* **type**: 'Raw' (Required): Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.


## Serialization
* **Discriminator**: type

### Base Properties
### AvroSerialization
#### Properties
* **properties**: any: The properties that are associated with the Avro serialization type. Required on PUT (CreateOrReplace) requests.
* **type**: 'Avro' (Required): Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.

### CsvSerialization
#### Properties
* **properties**: [CsvSerializationProperties](#csvserializationproperties): The properties that are associated with the CSV serialization type. Required on PUT (CreateOrReplace) requests.
* **type**: 'Csv' (Required): Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.

### CustomClrSerialization
#### Properties
* **properties**: [CustomClrSerializationProperties](#customclrserializationproperties): The properties that are associated with the CustomClr serialization type. Required on PUT (CreateOrReplace) requests.
* **type**: 'CustomClr' (Required): Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.

### JsonSerialization
#### Properties
* **properties**: [JsonSerializationProperties](#jsonserializationproperties): The properties that are associated with the JSON serialization type. Required on PUT (CreateOrReplace) requests.
* **type**: 'Json' (Required): Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.

### ParquetSerialization
#### Properties
* **properties**: any: The properties that are associated with the Parquet serialization type. Required on PUT (CreateOrReplace) requests.
* **type**: 'Parquet' (Required): Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.


## ServiceBusQueueOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **propertyColumns**: string[]: A string array of the names of output columns to be attached to Service Bus messages as custom properties.
* **queueName**: string: The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests.
* **serviceBusNamespace**: string: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyKey**: string: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyName**: string: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
* **systemPropertyColumns**: [ServiceBusQueueOutputDataSourcePropertiesSystemPropertyColumns](#servicebusqueueoutputdatasourcepropertiessystempropertycolumns): Dictionary of <string>

## ServiceBusQueueOutputDataSourcePropertiesSystemPropertyColumns
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceBusTopicOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken' | string: Authentication Mode.
* **propertyColumns**: string[]: A string array of the names of output columns to be attached to Service Bus messages as custom properties.
* **serviceBusNamespace**: string: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyKey**: string: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
* **sharedAccessPolicyName**: string: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
* **systemPropertyColumns**: [ServiceBusTopicOutputDataSourcePropertiesSystemPropertyColumns](#servicebustopicoutputdatasourcepropertiessystempropertycolumns): Dictionary of <string>
* **topicName**: string: The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests.

## ServiceBusTopicOutputDataSourcePropertiesSystemPropertyColumns
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageAccount
### Properties
* **accountKey**: string: The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
* **accountName**: string: The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.

## StreamingJobProperties
### Properties
* **cluster**: [ClusterInfo](#clusterinfo): The cluster which streaming jobs will run on.
* **compatibilityLevel**: '1.0' | string: Controls certain runtime behaviors of the streaming job.
* **contentStoragePolicy**: 'JobStorageAccount' | 'SystemAccount' | string: Valid values are JobStorageAccount and SystemAccount. If set to JobStorageAccount, this requires the user to also specify jobStorageAccount property. .
* **createdDate**: string (ReadOnly): Value is an ISO-8601 formatted UTC timestamp indicating when the streaming job was created.
* **dataLocale**: string: The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified.
* **etag**: string (ReadOnly): The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
* **eventsLateArrivalMaxDelayInSeconds**: int: The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1.
* **eventsOutOfOrderMaxDelayInSeconds**: int: The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order.
* **eventsOutOfOrderPolicy**: 'Adjust' | 'Drop' | string: Indicates the policy to apply to events that arrive out of order in the input event stream.
* **externals**: [External](#external): The storage account where the custom code artifacts are located.
* **functions**: [Function](#function)[]: A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
* **inputs**: [Input](#input)[]: A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input.
* **jobId**: string (ReadOnly): A GUID uniquely identifying the streaming job. This GUID is generated upon creation of the streaming job.
* **jobState**: string (ReadOnly): Describes the state of the streaming job.
* **jobStorageAccount**: [JobStorageAccount](#jobstorageaccount): The properties that are associated with an Azure Storage account with MSI
* **jobType**: 'Cloud' | 'Edge' | string: Describes the type of the job. Valid modes are `Cloud` and 'Edge'.
* **lastOutputEventTime**: string (ReadOnly): Value is either an ISO-8601 formatted timestamp indicating the last output event time of the streaming job or null indicating that output has not yet been produced. In case of multiple outputs or multiple streams, this shows the latest value in that set.
* **outputErrorPolicy**: 'Drop' | 'Stop' | string: Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).
* **outputs**: [Output](#output)[]: A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output.
* **outputStartMode**: 'CustomTime' | 'JobStartTime' | 'LastOutputEventTime' | string: This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.
* **outputStartTime**: string: Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime.
* **provisioningState**: string (ReadOnly): Describes the provisioning status of the streaming job.
* **sku**: [StreamingJobSku](#streamingjobsku): Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests.
* **transformation**: [Transformation](#transformation): Indicates the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.

## StreamingJobSku
### Properties
* **name**: 'Standard' | string: The name of the SKU. Required on PUT (CreateOrReplace) requests.

## StreamInputDataSource
* **Discriminator**: type

### Base Properties
### IoTHubStreamInputDataSource
#### Properties
* **properties**: [IoTHubStreamInputDataSourceProperties](#iothubstreaminputdatasourceproperties): The properties that are associated with an IoT Hub input containing stream data. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.Devices/IotHubs' (Required): Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.

### EventHubV2StreamInputDataSource
#### Properties
* **properties**: [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties): The properties that are associated with an Event Hub input containing stream data. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.EventHub/EventHub' (Required): Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.

### EventHubStreamInputDataSource
#### Properties
* **properties**: [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties): The properties that are associated with an Event Hub input containing stream data. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.ServiceBus/EventHub' (Required): Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.

### BlobStreamInputDataSource
#### Properties
* **properties**: [BlobStreamInputDataSourceProperties](#blobstreaminputdatasourceproperties): The properties that are associated with a blob input containing stream data. Required on PUT (CreateOrReplace) requests.
* **type**: 'Microsoft.Storage/Blob' (Required): Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.

### RawStreamInputDataSource
#### Properties
* **properties**: [RawInputDatasourceProperties](#rawinputdatasourceproperties): The properties that are associated with a raw input. Required on PUT (CreateOrReplace) requests.
* **type**: 'Raw' (Required): Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.


## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Transformation
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: Resource name
* **properties**: [TransformationProperties](#transformationproperties): The properties that are associated with a transformation. Required on PUT (CreateOrReplace) requests.
* **type**: string (ReadOnly): Resource type

## TransformationProperties
### Properties
* **etag**: string (ReadOnly): The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
* **query**: string: Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests.
* **streamingUnits**: int: Specifies the number of streaming units that the streaming job uses.

