# Microsoft.StreamAnalytics @ 2017-04-01-preview

## Resource Microsoft.StreamAnalytics/streamingjobs@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: StreamingJobProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.StreamAnalytics/streamingjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/functions@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FunctionProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/inputs@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InputProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/inputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/outputs@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OutputProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/outputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/transformations@2017-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TransformationProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/transformations' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: string

## StreamingJobProperties
### Properties
* **cluster**: ClusterInfo
* **compatibilityLevel**: '1.0'
* **contentStoragePolicy**: 'JobStorageAccount' | 'SystemAccount'
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
* **outputs**: Output[]
* **outputStartMode**: 'CustomTime' | 'JobStartTime' | 'LastOutputEventTime'
* **outputStartTime**: string
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

## StorageAccount
### Properties
* **accountKey**: string
* **accountName**: string

## Function
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: FunctionProperties
* **type**: string (ReadOnly)

## FunctionProperties
* **Discriminator**: type

### Base Properties
* **etag**: string (ReadOnly)
* **properties**: FunctionConfiguration
### AggregateFunctionProperties
#### Properties
* **type**: 'Aggregate' (Required)

### ScalarFunctionProperties
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
### AzureMachineLearningStudioFunctionBinding
#### Properties
* **properties**: AzureMachineLearningStudioFunctionBindingProperties
* **type**: 'Microsoft.MachineLearning/WebService' (Required)

### AzureMachineLearningServiceFunctionBinding
#### Properties
* **properties**: AzureMachineLearningServiceFunctionBindingProperties
* **type**: 'Microsoft.MachineLearningServices' (Required)

### CSharpFunctionBinding
#### Properties
* **properties**: CSharpFunctionBindingProperties
* **type**: 'Microsoft.StreamAnalytics/CLRUdf' (Required)

### JavaScriptFunctionBinding
#### Properties
* **properties**: JavaScriptFunctionBindingProperties
* **type**: 'Microsoft.StreamAnalytics/JavascriptUdf' (Required)


## AzureMachineLearningStudioFunctionBinding
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

## AzureMachineLearningServiceFunctionBinding
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

## CSharpFunctionBinding
### Properties
* **properties**: CSharpFunctionBindingProperties
* **type**: 'Microsoft.StreamAnalytics/CLRUdf' (Required)

## CSharpFunctionBindingProperties
### Properties
* **class**: string
* **dllPath**: string
* **method**: string
* **script**: string

## JavaScriptFunctionBinding
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

## AggregateFunctionProperties
### Properties
* **type**: 'Aggregate' (Required)

## ScalarFunctionProperties
### Properties
* **type**: 'Scalar' (Required)

## Input
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: InputProperties
* **type**: string (ReadOnly)

## InputProperties
* **Discriminator**: type

### Base Properties
* **compression**: Compression
* **diagnostics**: Diagnostics (ReadOnly)
* **etag**: string (ReadOnly)
* **partitionKey**: string
* **serialization**: Serialization
### ReferenceInputProperties
#### Properties
* **datasource**: ReferenceInputDataSource
* **type**: 'Reference' (Required)

### StreamInputProperties
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
### AvroSerialization
#### Properties
* **properties**: any
* **type**: 'Avro' (Required)

### CsvSerialization
#### Properties
* **properties**: CsvSerializationProperties
* **type**: 'Csv' (Required)

### CustomClrSerialization
#### Properties
* **properties**: CustomClrSerializationProperties
* **type**: 'CustomClr' (Required)

### JsonSerialization
#### Properties
* **properties**: JsonSerializationProperties
* **type**: 'Json' (Required)

### ParquetSerialization
#### Properties
* **properties**: any
* **type**: 'Parquet' (Required)


## AvroSerialization
### Properties
* **properties**: any
* **type**: 'Avro' (Required)

## CsvSerialization
### Properties
* **properties**: CsvSerializationProperties
* **type**: 'Csv' (Required)

## CsvSerializationProperties
### Properties
* **encoding**: 'UTF8'
* **fieldDelimiter**: string

## CustomClrSerialization
### Properties
* **properties**: CustomClrSerializationProperties
* **type**: 'CustomClr' (Required)

## CustomClrSerializationProperties
### Properties
* **serializationClassName**: string
* **serializationDllPath**: string

## JsonSerialization
### Properties
* **properties**: JsonSerializationProperties
* **type**: 'Json' (Required)

## JsonSerializationProperties
### Properties
* **encoding**: 'UTF8'
* **format**: 'Array' | 'LineSeparated'

## ParquetSerialization
### Properties
* **properties**: any
* **type**: 'Parquet' (Required)

## ReferenceInputProperties
### Properties
* **datasource**: ReferenceInputDataSource
* **type**: 'Reference' (Required)

## ReferenceInputDataSource
* **Discriminator**: type

### Base Properties
### AzureSqlReferenceInputDataSource
#### Properties
* **properties**: AzureSqlReferenceInputDataSourceProperties
* **type**: 'Microsoft.Sql/Server/Database' (Required)

### BlobReferenceInputDataSource
#### Properties
* **properties**: BlobReferenceInputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)


## AzureSqlReferenceInputDataSource
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

## BlobReferenceInputDataSource
### Properties
* **properties**: BlobReferenceInputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)

## BlobReferenceInputDataSourceProperties
### Properties
* **container**: string
* **dateFormat**: string
* **pathPattern**: string
* **storageAccounts**: StorageAccount[]
* **timeFormat**: string

## StreamInputProperties
### Properties
* **datasource**: StreamInputDataSource
* **type**: 'Stream' (Required)

## StreamInputDataSource
* **Discriminator**: type

### Base Properties
### IoTHubStreamInputDataSource
#### Properties
* **properties**: IoTHubStreamInputDataSourceProperties
* **type**: 'Microsoft.Devices/IotHubs' (Required)

### EventHubV2StreamInputDataSource
#### Properties
* **properties**: EventHubStreamInputDataSourceProperties
* **type**: 'Microsoft.EventHub/EventHub' (Required)

### EventHubStreamInputDataSource
#### Properties
* **properties**: EventHubStreamInputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

### BlobStreamInputDataSource
#### Properties
* **properties**: BlobStreamInputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)


## IoTHubStreamInputDataSource
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

## EventHubV2StreamInputDataSource
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

## EventHubStreamInputDataSource
### Properties
* **properties**: EventHubStreamInputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

## BlobStreamInputDataSource
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
### AzureFunctionOutputDataSource
#### Properties
* **properties**: AzureFunctionOutputDataSourceProperties
* **type**: 'Microsoft.AzureFunction' (Required)

### AzureDataLakeStoreOutputDataSource
#### Properties
* **properties**: AzureDataLakeStoreOutputDataSourceProperties
* **type**: 'Microsoft.DataLake/Accounts' (Required)

### EventHubV2OutputDataSource
#### Properties
* **properties**: EventHubOutputDataSourceProperties
* **type**: 'Microsoft.EventHub/EventHub' (Required)

### EventHubOutputDataSource
#### Properties
* **properties**: EventHubOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

### ServiceBusQueueOutputDataSource
#### Properties
* **properties**: ServiceBusQueueOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/Queue' (Required)

### ServiceBusTopicOutputDataSource
#### Properties
* **properties**: ServiceBusTopicOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/Topic' (Required)

### AzureSqlDatabaseOutputDataSource
#### Properties
* **properties**: AzureSqlDatabaseOutputDataSourceProperties
* **type**: 'Microsoft.Sql/Server/Database' (Required)

### AzureSynapseOutputDataSource
#### Properties
* **properties**: AzureSynapseOutputDataSourceProperties
* **type**: 'Microsoft.Sql/Server/DataWarehouse' (Required)

### BlobOutputDataSource
#### Properties
* **properties**: BlobOutputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)

### DocumentDbOutputDataSource
#### Properties
* **properties**: DocumentDbOutputDataSourceProperties
* **type**: 'Microsoft.Storage/DocumentDB' (Required)

### AzureTableOutputDataSource
#### Properties
* **properties**: AzureTableOutputDataSourceProperties
* **type**: 'Microsoft.Storage/Table' (Required)

### PowerBIOutputDataSource
#### Properties
* **properties**: PowerBIOutputDataSourceProperties
* **type**: 'PowerBI' (Required)


## AzureFunctionOutputDataSource
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

## AzureDataLakeStoreOutputDataSource
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

## EventHubV2OutputDataSource
### Properties
* **properties**: EventHubOutputDataSourceProperties
* **type**: 'Microsoft.EventHub/EventHub' (Required)

## EventHubOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **eventHubName**: string
* **partitionKey**: string
* **propertyColumns**: string[]
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string

## EventHubOutputDataSource
### Properties
* **properties**: EventHubOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

## ServiceBusQueueOutputDataSource
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
* **systemPropertyColumns**: ServiceBusQueueOutputDataSourcePropertiesSystemPropertyColumns

## ServiceBusQueueOutputDataSourcePropertiesSystemPropertyColumns
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceBusTopicOutputDataSource
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
* **systemPropertyColumns**: ServiceBusTopicOutputDataSourcePropertiesSystemPropertyColumns
* **topicName**: string

## ServiceBusTopicOutputDataSourcePropertiesSystemPropertyColumns
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureSqlDatabaseOutputDataSource
### Properties
* **properties**: AzureSqlDatabaseOutputDataSourceProperties
* **type**: 'Microsoft.Sql/Server/Database' (Required)

## AzureSqlDatabaseOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **database**: string
* **maxBatchCount**: int
* **maxWriterCount**: int
* **password**: string
* **server**: string
* **table**: string
* **user**: string

## AzureSynapseOutputDataSource
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

## BlobOutputDataSource
### Properties
* **properties**: BlobOutputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)

## BlobOutputDataSourceProperties
### Properties
* **authenticationMode**: 'ConnectionString' | 'Msi' | 'UserToken'
* **container**: string
* **dateFormat**: string
* **pathPattern**: string
* **storageAccounts**: StorageAccount[]
* **timeFormat**: string

## DocumentDbOutputDataSource
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

## AzureTableOutputDataSource
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

## PowerBIOutputDataSource
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

## StreamingJobSku
### Properties
* **name**: 'Standard'

## Transformation
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: TransformationProperties
* **type**: string (ReadOnly)

## TransformationProperties
### Properties
* **etag**: string (ReadOnly)
* **query**: string
* **streamingUnits**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

