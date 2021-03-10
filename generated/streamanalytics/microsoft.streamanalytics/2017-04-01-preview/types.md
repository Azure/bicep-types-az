# Microsoft.StreamAnalytics @ 2017-04-01-preview

## Resource Microsoft.StreamAnalytics/streamingjobs@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingJobProperties](#streamingjobproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.StreamAnalytics/streamingjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/functions@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FunctionProperties](#functionproperties)
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/inputs@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InputProperties](#inputproperties)
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/inputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/outputs@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OutputProperties](#outputproperties)
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/outputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/transformations@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TransformationProperties](#transformationproperties)
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/transformations' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: string

## StreamingJobProperties
### Properties
* **cluster**: [ClusterInfo](#clusterinfo)
* **compatibilityLevel**: '1.0'
* **contentStoragePolicy**: 'JobStorageAccount' | 'SystemAccount'
* **createdDate**: string (ReadOnly)
* **dataLocale**: string
* **etag**: string (ReadOnly)
* **eventsLateArrivalMaxDelayInSeconds**: int
* **eventsOutOfOrderMaxDelayInSeconds**: int
* **eventsOutOfOrderPolicy**: 'Adjust' | 'Drop'
* **externals**: [External](#external)
* **functions**: [Function](#function)[]
* **inputs**: [Input](#input)[]
* **jobId**: string (ReadOnly)
* **jobState**: string (ReadOnly)
* **jobStorageAccount**: [JobStorageAccount](#jobstorageaccount)
* **jobType**: 'Cloud' | 'Edge'
* **lastOutputEventTime**: string (ReadOnly)
* **outputErrorPolicy**: 'Drop' | 'Stop'
* **outputs**: [Output](#output)[]
* **outputStartMode**: 'CustomTime' | 'JobStartTime' | 'LastOutputEventTime'
* **outputStartTime**: string
* **provisioningState**: string (ReadOnly)
* **sku**: [StreamingJobSku](#streamingjobsku)
* **transformation**: [Transformation](#transformation)

## ClusterInfo
### Properties
* **id**: string

## External
### Properties
* **container**: string
* **path**: string
* **storageAccount**: [StorageAccount](#storageaccount)

## StorageAccount
### Properties
* **accountKey**: string
* **accountName**: string

## Function
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: [FunctionProperties](#functionproperties)
* **type**: string (ReadOnly)

## FunctionProperties
* **Discriminator**: type
### Base Properties
* **etag**: string (ReadOnly)
* **properties**: [FunctionConfiguration](#functionconfiguration)
### Aggregate
#### Properties
* **type**: 'Aggregate' (Required)

### Scalar
#### Properties
* **type**: 'Scalar' (Required)


## FunctionConfiguration
### Properties
* **binding**: [FunctionBinding](#functionbinding)
* **inputs**: [FunctionInput](#functioninput)[]
* **output**: [FunctionOutput](#functionoutput)

## FunctionBinding
* **Discriminator**: type
### Base Properties
### Microsoft.MachineLearning/WebService
#### Properties
* **properties**: [AzureMachineLearningStudioFunctionBindingProperties](#azuremachinelearningstudiofunctionbindingproperties)
* **type**: 'Microsoft.MachineLearning/WebService' (Required)

### Microsoft.MachineLearningServices
#### Properties
* **properties**: [AzureMachineLearningServiceFunctionBindingProperties](#azuremachinelearningservicefunctionbindingproperties)
* **type**: 'Microsoft.MachineLearningServices' (Required)

### Microsoft.StreamAnalytics/CLRUdf
#### Properties
* **properties**: [CSharpFunctionBindingProperties](#csharpfunctionbindingproperties)
* **type**: 'Microsoft.StreamAnalytics/CLRUdf' (Required)

### Microsoft.StreamAnalytics/JavascriptUdf
#### Properties
* **properties**: [JavaScriptFunctionBindingProperties](#javascriptfunctionbindingproperties)
* **type**: 'Microsoft.StreamAnalytics/JavascriptUdf' (Required)


## Microsoft.MachineLearning/WebService
### Properties
* **properties**: [AzureMachineLearningStudioFunctionBindingProperties](#azuremachinelearningstudiofunctionbindingproperties)
* **type**: 'Microsoft.MachineLearning/WebService' (Required)

## AzureMachineLearningStudioFunctionBindingProperties
### Properties
* **apiKey**: string
* **batchSize**: int
* **endpoint**: string
* **inputs**: [AzureMachineLearningStudioInputs](#azuremachinelearningstudioinputs)
* **outputs**: [AzureMachineLearningStudioOutputColumn](#azuremachinelearningstudiooutputcolumn)[]

## AzureMachineLearningStudioInputs
### Properties
* **columnNames**: [AzureMachineLearningStudioInputColumn](#azuremachinelearningstudioinputcolumn)[]
* **name**: string

## AzureMachineLearningStudioInputColumn
### Properties
* **dataType**: string
* **mapTo**: int
* **name**: string

## AzureMachineLearningStudioOutputColumn
### Properties
* **dataType**: string
* **name**: string

## Microsoft.MachineLearningServices
### Properties
* **properties**: [AzureMachineLearningServiceFunctionBindingProperties](#azuremachinelearningservicefunctionbindingproperties)
* **type**: 'Microsoft.MachineLearningServices' (Required)

## AzureMachineLearningServiceFunctionBindingProperties
### Properties
* **apiKey**: string
* **batchSize**: int
* **endpoint**: string
* **inputs**: [AzureMachineLearningServiceInputColumn](#azuremachinelearningserviceinputcolumn)[]
* **numberOfParallelRequests**: int
* **outputs**: [AzureMachineLearningServiceOutputColumn](#azuremachinelearningserviceoutputcolumn)[]

## AzureMachineLearningServiceInputColumn
### Properties
* **dataType**: string
* **mapTo**: int
* **name**: string

## AzureMachineLearningServiceOutputColumn
### Properties
* **dataType**: string
* **mapTo**: int
* **name**: string

## Microsoft.StreamAnalytics/CLRUdf
### Properties
* **properties**: [CSharpFunctionBindingProperties](#csharpfunctionbindingproperties)
* **type**: 'Microsoft.StreamAnalytics/CLRUdf' (Required)

## CSharpFunctionBindingProperties
### Properties
* **class**: string
* **dllPath**: string
* **method**: string
* **script**: string

## Microsoft.StreamAnalytics/JavascriptUdf
### Properties
* **properties**: [JavaScriptFunctionBindingProperties](#javascriptfunctionbindingproperties)
* **type**: 'Microsoft.StreamAnalytics/JavascriptUdf' (Required)

## JavaScriptFunctionBindingProperties
### Properties
* **script**: string

## FunctionInput
### Properties
* **dataType**: string
* **isConfigurationParameter**: bool

## FunctionOutput
### Properties
* **dataType**: string

## Aggregate
### Properties
* **type**: 'Aggregate' (Required)

## Scalar
### Properties
* **type**: 'Scalar' (Required)

## Input
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: [InputProperties](#inputproperties)
* **type**: string (ReadOnly)

## InputProperties
* **Discriminator**: type
### Base Properties
* **compression**: [Compression](#compression)
* **diagnostics**: [Diagnostics](#diagnostics) (ReadOnly)
* **etag**: string (ReadOnly)
* **partitionKey**: string
* **serialization**: [Serialization](#serialization)
### Reference
#### Properties
* **datasource**: [ReferenceInputDataSource](#referenceinputdatasource)
* **type**: 'Reference' (Required)

### Stream
#### Properties
* **datasource**: [StreamInputDataSource](#streaminputdatasource)
* **type**: 'Stream' (Required)


## Compression
### Properties
* **type**: string (Required)

## Diagnostics
### Properties
* **conditions**: [DiagnosticCondition](#diagnosticcondition)[] (ReadOnly)

## DiagnosticCondition
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)
* **since**: string (ReadOnly)

## Serialization
* **Discriminator**: type
### Base Properties
### Avro
#### Properties
* **properties**: any
* **type**: 'Avro' (Required)

### Csv
#### Properties
* **properties**: [CsvSerializationProperties](#csvserializationproperties)
* **type**: 'Csv' (Required)

### CustomClr
#### Properties
* **properties**: [CustomClrSerializationProperties](#customclrserializationproperties)
* **type**: 'CustomClr' (Required)

### Json
#### Properties
* **properties**: [JsonSerializationProperties](#jsonserializationproperties)
* **type**: 'Json' (Required)

### Parquet
#### Properties
* **properties**: any
* **type**: 'Parquet' (Required)


## Avro
### Properties
* **properties**: any
* **type**: 'Avro' (Required)

## Csv
### Properties
* **properties**: [CsvSerializationProperties](#csvserializationproperties)
* **type**: 'Csv' (Required)

## CsvSerializationProperties
### Properties
* **encoding**: 'UTF8'
* **fieldDelimiter**: string

## CustomClr
### Properties
* **properties**: [CustomClrSerializationProperties](#customclrserializationproperties)
* **type**: 'CustomClr' (Required)

## CustomClrSerializationProperties
### Properties
* **serializationClassName**: string
* **serializationDllPath**: string

## Json
### Properties
* **properties**: [JsonSerializationProperties](#jsonserializationproperties)
* **type**: 'Json' (Required)

## JsonSerializationProperties
### Properties
* **encoding**: 'UTF8'
* **format**: 'Array' | 'LineSeparated'

## Parquet
### Properties
* **properties**: any
* **type**: 'Parquet' (Required)

## Reference
### Properties
* **datasource**: [ReferenceInputDataSource](#referenceinputdatasource)
* **type**: 'Reference' (Required)

## ReferenceInputDataSource
* **Discriminator**: type
### Base Properties
### Microsoft.Sql/Server/Database
#### Properties
* **properties**: [AzureSqlReferenceInputDataSourceProperties](#azuresqlreferenceinputdatasourceproperties)
* **type**: 'Microsoft.Sql/Server/Database' (Required)

### Microsoft.Storage/Blob
#### Properties
* **properties**: [BlobStreamInputDataSourceProperties](#blobstreaminputdatasourceproperties)
* **type**: 'Microsoft.Storage/Blob' (Required)


## Microsoft.Sql/Server/Database
### Properties
* **properties**: [AzureSqlReferenceInputDataSourceProperties](#azuresqlreferenceinputdatasourceproperties)
* **type**: 'Microsoft.Sql/Server/Database' (Required)

## AzureSqlReferenceInputDataSourceProperties
### Properties
* **database**: string
* **deltaSnapshotQuery**: string
* **fullSnapshotQuery**: string
* **password**: string
* **refreshRate**: string
* **refreshType**: string
* **server**: string
* **table**: string
* **user**: string

## Microsoft.Storage/Blob
### Properties
* **properties**: [BlobStreamInputDataSourceProperties](#blobstreaminputdatasourceproperties)
* **type**: 'Microsoft.Storage/Blob' (Required)

## BlobStreamInputDataSourceProperties
### Properties
* **container**: string
* **dateFormat**: string
* **pathPattern**: string
* **sourcePartitionCount**: int
* **storageAccounts**: [StorageAccount](#storageaccount)[]
* **timeFormat**: string

## Stream
### Properties
* **datasource**: [StreamInputDataSource](#streaminputdatasource)
* **type**: 'Stream' (Required)

## StreamInputDataSource
* **Discriminator**: type
### Base Properties
### Microsoft.Devices/IotHubs
#### Properties
* **properties**: [IoTHubStreamInputDataSourceProperties](#iothubstreaminputdatasourceproperties)
* **type**: 'Microsoft.Devices/IotHubs' (Required)

### Microsoft.EventHub/EventHub
#### Properties
* **properties**: [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties)
* **type**: 'Microsoft.EventHub/EventHub' (Required)

### Microsoft.ServiceBus/EventHub
#### Properties
* **properties**: [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

### Microsoft.Storage/Blob
#### Properties
* **properties**: [BlobStreamInputDataSourceProperties](#blobstreaminputdatasourceproperties)
* **type**: 'Microsoft.Storage/Blob' (Required)


## Microsoft.Devices/IotHubs
### Properties
* **properties**: [IoTHubStreamInputDataSourceProperties](#iothubstreaminputdatasourceproperties)
* **type**: 'Microsoft.Devices/IotHubs' (Required)

## IoTHubStreamInputDataSourceProperties
### Properties
* **consumerGroupName**: string
* **endpoint**: string
* **iotHubNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string

## Microsoft.EventHub/EventHub
### Properties
* **properties**: [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties)
* **type**: 'Microsoft.EventHub/EventHub' (Required)

## EventHubStreamInputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **consumerGroupName**: string
* **eventHubName**: string
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string

## Microsoft.ServiceBus/EventHub
### Properties
* **properties**: [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

## JobStorageAccount
### Properties
* **accountKey**: string
* **accountName**: string
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'

## Output
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: [OutputProperties](#outputproperties)
* **type**: string (ReadOnly)

## OutputProperties
### Properties
* **datasource**: [OutputDataSource](#outputdatasource)
* **diagnostics**: [Diagnostics](#diagnostics) (ReadOnly)
* **etag**: string (ReadOnly)
* **serialization**: [Serialization](#serialization)
* **sizeWindow**: int
* **timeWindow**: string

## OutputDataSource
* **Discriminator**: type
### Base Properties
### Microsoft.AzureFunction
#### Properties
* **properties**: [AzureFunctionOutputDataSourceProperties](#azurefunctionoutputdatasourceproperties)
* **type**: 'Microsoft.AzureFunction' (Required)

### Microsoft.DataLake/Accounts
#### Properties
* **properties**: [AzureDataLakeStoreOutputDataSourceProperties](#azuredatalakestoreoutputdatasourceproperties)
* **type**: 'Microsoft.DataLake/Accounts' (Required)

### Microsoft.EventHub/EventHub
#### Properties
* **properties**: [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties)
* **type**: 'Microsoft.EventHub/EventHub' (Required)

### Microsoft.ServiceBus/EventHub
#### Properties
* **properties**: [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

### Microsoft.ServiceBus/Queue
#### Properties
* **properties**: [ServiceBusQueueOutputDataSourceProperties](#servicebusqueueoutputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/Queue' (Required)

### Microsoft.ServiceBus/Topic
#### Properties
* **properties**: [ServiceBusTopicOutputDataSourceProperties](#servicebustopicoutputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/Topic' (Required)

### Microsoft.Sql/Server/Database
#### Properties
* **properties**: [AzureSqlReferenceInputDataSourceProperties](#azuresqlreferenceinputdatasourceproperties)
* **type**: 'Microsoft.Sql/Server/Database' (Required)

### Microsoft.Sql/Server/DataWarehouse
#### Properties
* **properties**: [AzureSynapseOutputDataSourceProperties](#azuresynapseoutputdatasourceproperties)
* **type**: 'Microsoft.Sql/Server/DataWarehouse' (Required)

### Microsoft.Storage/Blob
#### Properties
* **properties**: [BlobStreamInputDataSourceProperties](#blobstreaminputdatasourceproperties)
* **type**: 'Microsoft.Storage/Blob' (Required)

### Microsoft.Storage/DocumentDB
#### Properties
* **properties**: [DocumentDbOutputDataSourceProperties](#documentdboutputdatasourceproperties)
* **type**: 'Microsoft.Storage/DocumentDB' (Required)

### Microsoft.Storage/Table
#### Properties
* **properties**: [AzureTableOutputDataSourceProperties](#azuretableoutputdatasourceproperties)
* **type**: 'Microsoft.Storage/Table' (Required)

### PowerBI
#### Properties
* **properties**: [PowerBIOutputDataSourceProperties](#powerbioutputdatasourceproperties)
* **type**: 'PowerBI' (Required)


## Microsoft.AzureFunction
### Properties
* **properties**: [AzureFunctionOutputDataSourceProperties](#azurefunctionoutputdatasourceproperties)
* **type**: 'Microsoft.AzureFunction' (Required)

## AzureFunctionOutputDataSourceProperties
### Properties
* **apiKey**: string
* **functionAppName**: string
* **functionName**: string
* **maxBatchCount**: int
* **maxBatchSize**: int

## Microsoft.DataLake/Accounts
### Properties
* **properties**: [AzureDataLakeStoreOutputDataSourceProperties](#azuredatalakestoreoutputdatasourceproperties)
* **type**: 'Microsoft.DataLake/Accounts' (Required)

## AzureDataLakeStoreOutputDataSourceProperties
### Properties
* **accountName**: string
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **dateFormat**: string
* **filePathPrefix**: string
* **refreshToken**: string
* **tenantId**: string
* **timeFormat**: string
* **tokenUserDisplayName**: string
* **tokenUserPrincipalName**: string

## Microsoft.ServiceBus/Queue
### Properties
* **properties**: [ServiceBusQueueOutputDataSourceProperties](#servicebusqueueoutputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/Queue' (Required)

## ServiceBusQueueOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **propertyColumns**: string[]
* **queueName**: string
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string
* **systemPropertyColumns**: [Dictionary<string,String>](#dictionarystringstring)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ServiceBus/Topic
### Properties
* **properties**: [ServiceBusTopicOutputDataSourceProperties](#servicebustopicoutputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/Topic' (Required)

## ServiceBusTopicOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **propertyColumns**: string[]
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string
* **systemPropertyColumns**: [Dictionary<string,String>](#dictionarystringstring)
* **topicName**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Sql/Server/DataWarehouse
### Properties
* **properties**: [AzureSynapseOutputDataSourceProperties](#azuresynapseoutputdatasourceproperties)
* **type**: 'Microsoft.Sql/Server/DataWarehouse' (Required)

## AzureSynapseOutputDataSourceProperties
### Properties
* **database**: string
* **password**: string
* **server**: string
* **table**: string
* **user**: string

## Microsoft.Storage/DocumentDB
### Properties
* **properties**: [DocumentDbOutputDataSourceProperties](#documentdboutputdatasourceproperties)
* **type**: 'Microsoft.Storage/DocumentDB' (Required)

## DocumentDbOutputDataSourceProperties
### Properties
* **accountId**: string
* **accountKey**: string
* **collectionNamePattern**: string
* **database**: string
* **documentId**: string
* **partitionKey**: string

## Microsoft.Storage/Table
### Properties
* **properties**: [AzureTableOutputDataSourceProperties](#azuretableoutputdatasourceproperties)
* **type**: 'Microsoft.Storage/Table' (Required)

## AzureTableOutputDataSourceProperties
### Properties
* **accountKey**: string
* **accountName**: string
* **batchSize**: int
* **columnsToRemove**: string[]
* **partitionKey**: string
* **rowKey**: string
* **table**: string

## PowerBI
### Properties
* **properties**: [PowerBIOutputDataSourceProperties](#powerbioutputdatasourceproperties)
* **type**: 'PowerBI' (Required)

## PowerBIOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **dataset**: string
* **groupId**: string
* **groupName**: string
* **refreshToken**: string
* **table**: string
* **tokenUserDisplayName**: string
* **tokenUserPrincipalName**: string

## StreamingJobSku
### Properties
* **name**: 'Standard'

## Transformation
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: [TransformationProperties](#transformationproperties)
* **type**: string (ReadOnly)

## TransformationProperties
### Properties
* **etag**: string (ReadOnly)
* **query**: string
* **streamingUnits**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

