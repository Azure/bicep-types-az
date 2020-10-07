# Microsoft.StreamAnalytics @ 2017-04-01-preview

## Microsoft.StreamAnalytics/streamingjobs/functions
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FunctionProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/functions' (ReadOnly, DeployTimeConstant)

## FunctionProperties
* **Discriminator**: type
### Base Properties
* **etag**: string (ReadOnly)
* **properties**: FunctionConfiguration
### Aggregate
#### Properties
* **type**: 'Aggregate' (Required)

### Scalar
#### Properties
* **type**: 'Scalar' (Required)


## FunctionConfiguration
### Properties
* **binding**: FunctionBinding
* **inputs**: FunctionInput[]
* **output**: FunctionOutput

## FunctionBinding
* **Discriminator**: type
### Base Properties
### Microsoft.MachineLearning/WebService
#### Properties
* **properties**: AzureMachineLearningStudioFunctionBindingProperties
* **type**: 'Microsoft.MachineLearning/WebService' (Required)

### Microsoft.MachineLearningServices
#### Properties
* **properties**: AzureMachineLearningServiceFunctionBindingProperties
* **type**: 'Microsoft.MachineLearningServices' (Required)

### Microsoft.StreamAnalytics/CLRUdf
#### Properties
* **properties**: CSharpFunctionBindingProperties
* **type**: 'Microsoft.StreamAnalytics/CLRUdf' (Required)

### Microsoft.StreamAnalytics/JavascriptUdf
#### Properties
* **properties**: JavaScriptFunctionBindingProperties
* **type**: 'Microsoft.StreamAnalytics/JavascriptUdf' (Required)


## Microsoft.MachineLearning/WebService
### Properties
* **properties**: AzureMachineLearningStudioFunctionBindingProperties
* **type**: 'Microsoft.MachineLearning/WebService' (Required)

## AzureMachineLearningStudioFunctionBindingProperties
### Properties
* **apiKey**: string
* **batchSize**: int
* **endpoint**: string
* **inputs**: AzureMachineLearningStudioInputs
* **outputs**: AzureMachineLearningStudioOutputColumn[]

## AzureMachineLearningStudioInputs
### Properties
* **columnNames**: AzureMachineLearningStudioInputColumn[]
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
* **properties**: AzureMachineLearningServiceFunctionBindingProperties
* **type**: 'Microsoft.MachineLearningServices' (Required)

## AzureMachineLearningServiceFunctionBindingProperties
### Properties
* **apiKey**: string
* **batchSize**: int
* **endpoint**: string
* **inputs**: AzureMachineLearningServiceInputColumn[]
* **numberOfParallelRequests**: int
* **outputs**: AzureMachineLearningServiceOutputColumn[]

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
* **properties**: CSharpFunctionBindingProperties
* **type**: 'Microsoft.StreamAnalytics/CLRUdf' (Required)

## CSharpFunctionBindingProperties
### Properties
* **class**: string
* **dllPath**: string
* **method**: string
* **script**: string

## Microsoft.StreamAnalytics/JavascriptUdf
### Properties
* **properties**: JavaScriptFunctionBindingProperties
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

## Microsoft.StreamAnalytics/streamingjobs/inputs
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InputProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/inputs' (ReadOnly, DeployTimeConstant)

## InputProperties
* **Discriminator**: type
### Base Properties
* **compression**: Compression
* **diagnostics**: Diagnostics (ReadOnly)
* **etag**: string (ReadOnly)
* **partitionKey**: string
* **serialization**: Serialization
### Reference
#### Properties
* **datasource**: ReferenceInputDataSource
* **type**: 'Reference' (Required)

### Stream
#### Properties
* **datasource**: StreamInputDataSource
* **type**: 'Stream' (Required)


## Compression
### Properties
* **type**: string (Required)

## Diagnostics
### Properties
* **conditions**: DiagnosticCondition[] (ReadOnly)

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
* **properties**: CsvSerializationProperties
* **type**: 'Csv' (Required)

### CustomClr
#### Properties
* **properties**: CustomClrSerializationProperties
* **type**: 'CustomClr' (Required)

### Json
#### Properties
* **properties**: JsonSerializationProperties
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
* **properties**: CsvSerializationProperties
* **type**: 'Csv' (Required)

## CsvSerializationProperties
### Properties
* **encoding**: 'UTF8'
* **fieldDelimiter**: string

## CustomClr
### Properties
* **properties**: CustomClrSerializationProperties
* **type**: 'CustomClr' (Required)

## CustomClrSerializationProperties
### Properties
* **serializationClassName**: string
* **serializationDllPath**: string

## Json
### Properties
* **properties**: JsonSerializationProperties
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
* **datasource**: ReferenceInputDataSource
* **type**: 'Reference' (Required)

## ReferenceInputDataSource
* **Discriminator**: type
### Base Properties
### Microsoft.Sql/Server/Database
#### Properties
* **properties**: AzureSqlReferenceInputDataSourceProperties
* **type**: 'Microsoft.Sql/Server/Database' (Required)

### Microsoft.Storage/Blob
#### Properties
* **properties**: BlobStreamInputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)


## Microsoft.Sql/Server/Database
### Properties
* **properties**: AzureSqlReferenceInputDataSourceProperties
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
* **properties**: BlobStreamInputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)

## BlobStreamInputDataSourceProperties
### Properties
* **container**: string
* **dateFormat**: string
* **pathPattern**: string
* **sourcePartitionCount**: int
* **storageAccounts**: StorageAccount[]
* **timeFormat**: string

## StorageAccount
### Properties
* **accountKey**: string
* **accountName**: string

## Stream
### Properties
* **datasource**: StreamInputDataSource
* **type**: 'Stream' (Required)

## StreamInputDataSource
* **Discriminator**: type
### Base Properties
### Microsoft.Devices/IotHubs
#### Properties
* **properties**: IoTHubStreamInputDataSourceProperties
* **type**: 'Microsoft.Devices/IotHubs' (Required)

### Microsoft.EventHub/EventHub
#### Properties
* **properties**: EventHubStreamInputDataSourceProperties
* **type**: 'Microsoft.EventHub/EventHub' (Required)

### Microsoft.ServiceBus/EventHub
#### Properties
* **properties**: EventHubStreamInputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

### Microsoft.Storage/Blob
#### Properties
* **properties**: BlobStreamInputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)


## Microsoft.Devices/IotHubs
### Properties
* **properties**: IoTHubStreamInputDataSourceProperties
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
* **properties**: EventHubStreamInputDataSourceProperties
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
* **properties**: EventHubStreamInputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

## Microsoft.StreamAnalytics/streamingjobs/outputs
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OutputProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/outputs' (ReadOnly, DeployTimeConstant)

## OutputProperties
### Properties
* **datasource**: OutputDataSource
* **diagnostics**: Diagnostics (ReadOnly)
* **etag**: string (ReadOnly)
* **serialization**: Serialization
* **sizeWindow**: int
* **timeWindow**: string

## OutputDataSource
* **Discriminator**: type
### Base Properties
### Microsoft.AzureFunction
#### Properties
* **properties**: AzureFunctionOutputDataSourceProperties
* **type**: 'Microsoft.AzureFunction' (Required)

### Microsoft.DataLake/Accounts
#### Properties
* **properties**: AzureDataLakeStoreOutputDataSourceProperties
* **type**: 'Microsoft.DataLake/Accounts' (Required)

### Microsoft.EventHub/EventHub
#### Properties
* **properties**: EventHubStreamInputDataSourceProperties
* **type**: 'Microsoft.EventHub/EventHub' (Required)

### Microsoft.ServiceBus/EventHub
#### Properties
* **properties**: EventHubStreamInputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

### Microsoft.ServiceBus/Queue
#### Properties
* **properties**: ServiceBusQueueOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/Queue' (Required)

### Microsoft.ServiceBus/Topic
#### Properties
* **properties**: ServiceBusTopicOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/Topic' (Required)

### Microsoft.Sql/Server/DataWarehouse
#### Properties
* **properties**: AzureSynapseOutputDataSourceProperties
* **type**: 'Microsoft.Sql/Server/DataWarehouse' (Required)

### Microsoft.Sql/Server/Database
#### Properties
* **properties**: AzureSqlReferenceInputDataSourceProperties
* **type**: 'Microsoft.Sql/Server/Database' (Required)

### Microsoft.Storage/Blob
#### Properties
* **properties**: BlobStreamInputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)

### Microsoft.Storage/DocumentDB
#### Properties
* **properties**: DocumentDbOutputDataSourceProperties
* **type**: 'Microsoft.Storage/DocumentDB' (Required)

### Microsoft.Storage/Table
#### Properties
* **properties**: AzureTableOutputDataSourceProperties
* **type**: 'Microsoft.Storage/Table' (Required)

### PowerBI
#### Properties
* **properties**: PowerBIOutputDataSourceProperties
* **type**: 'PowerBI' (Required)


## Microsoft.AzureFunction
### Properties
* **properties**: AzureFunctionOutputDataSourceProperties
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
* **properties**: AzureDataLakeStoreOutputDataSourceProperties
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
* **properties**: ServiceBusQueueOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/Queue' (Required)

## ServiceBusQueueOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **propertyColumns**: string[]
* **queueName**: string
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string
* **systemPropertyColumns**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ServiceBus/Topic
### Properties
* **properties**: ServiceBusTopicOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/Topic' (Required)

## ServiceBusTopicOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **propertyColumns**: string[]
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string
* **systemPropertyColumns**: Dictionary<string,String>
* **topicName**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Sql/Server/DataWarehouse
### Properties
* **properties**: AzureSynapseOutputDataSourceProperties
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
* **properties**: DocumentDbOutputDataSourceProperties
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
* **properties**: AzureTableOutputDataSourceProperties
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
* **properties**: PowerBIOutputDataSourceProperties
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

## Microsoft.StreamAnalytics/streamingjobs/transformations
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TransformationProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/transformations' (ReadOnly, DeployTimeConstant)

## TransformationProperties
### Properties
* **etag**: string (ReadOnly)
* **query**: string
* **streamingUnits**: int

## Microsoft.StreamAnalytics/streamingjobs
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: StreamingJobProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.StreamAnalytics/streamingjobs' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: string

## StreamingJobProperties
### Properties
* **cluster**: ClusterInfo
* **compatibilityLevel**: '1.0'
* **contentStoragePolicy**: 'JobStorageAccount' | 'SystemAccount' (ReadOnly)
* **createdDate**: string (ReadOnly)
* **dataLocale**: string
* **etag**: string (ReadOnly)
* **eventsLateArrivalMaxDelayInSeconds**: int
* **eventsOutOfOrderMaxDelayInSeconds**: int
* **eventsOutOfOrderPolicy**: 'Adjust' | 'Drop'
* **externals**: External
* **functions**: Function[]
* **inputs**: Input[]
* **jobId**: string (ReadOnly)
* **jobState**: string (ReadOnly)
* **jobStorageAccount**: JobStorageAccount
* **jobType**: 'Cloud' | 'Edge'
* **lastOutputEventTime**: string (ReadOnly)
* **outputErrorPolicy**: 'Drop' | 'Stop'
* **outputStartMode**: 'CustomTime' | 'JobStartTime' | 'LastOutputEventTime'
* **outputStartTime**: string
* **outputs**: Output[]
* **provisioningState**: string (ReadOnly)
* **sku**: StreamingJobSku
* **transformation**: Transformation

## ClusterInfo
### Properties
* **id**: string

## External
### Properties
* **container**: string
* **path**: string
* **storageAccount**: StorageAccount

## Function
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: FunctionProperties
* **type**: string (ReadOnly)

## Input
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: InputProperties
* **type**: string (ReadOnly)

## JobStorageAccount
### Properties
* **accountKey**: string
* **accountName**: string
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'

## Output
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: OutputProperties
* **type**: string (ReadOnly)

## StreamingJobSku
### Properties
* **name**: 'Standard'

## Transformation
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: TransformationProperties
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

