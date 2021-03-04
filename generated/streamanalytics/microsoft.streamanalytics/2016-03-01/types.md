# Microsoft.StreamAnalytics @ 2016-03-01

## Resource Microsoft.StreamAnalytics/streamingjobs@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: StreamingJobProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.StreamAnalytics/streamingjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/functions@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FunctionProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/inputs@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InputProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/inputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/outputs@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OutputProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/outputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/transformations@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TransformationProperties
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/transformations' (ReadOnly, DeployTimeConstant)

## StreamingJobProperties
### Properties
* **compatibilityLevel**: '1.0'
* **createdDate**: string (ReadOnly)
* **dataLocale**: string
* **etag**: string (ReadOnly)
* **eventsLateArrivalMaxDelayInSeconds**: int
* **eventsOutOfOrderMaxDelayInSeconds**: int
* **eventsOutOfOrderPolicy**: 'Adjust' | 'Drop'
* **functions**: Function[]
* **inputs**: Input[]
* **jobId**: string (ReadOnly)
* **jobState**: string (ReadOnly)
* **lastOutputEventTime**: string (ReadOnly)
* **outputErrorPolicy**: 'Drop' | 'Stop'
* **outputs**: Output[]
* **outputStartMode**: 'CustomTime' | 'JobStartTime' | 'LastOutputEventTime'
* **outputStartTime**: string
* **provisioningState**: string (ReadOnly)
* **sku**: Sku
* **transformation**: Transformation

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
### ScalarFunctionProperties
#### Properties
* **properties**: ScalarFunctionConfiguration
* **type**: 'Scalar' (Required)


## ScalarFunctionProperties
### Properties
* **properties**: ScalarFunctionConfiguration
* **type**: 'Scalar' (Required)

## ScalarFunctionConfiguration
### Properties
* **binding**: FunctionBinding
* **inputs**: FunctionInput[]
* **output**: FunctionOutput

## FunctionBinding
* **Discriminator**: type

### Base Properties
### AzureMachineLearningWebServiceFunctionBinding
#### Properties
* **properties**: AzureMachineLearningWebServiceFunctionBindingProperties
* **type**: 'Microsoft.MachineLearning/WebService' (Required)

### JavaScriptFunctionBinding
#### Properties
* **properties**: JavaScriptFunctionBindingProperties
* **type**: 'Microsoft.StreamAnalytics/JavascriptUdf' (Required)


## AzureMachineLearningWebServiceFunctionBinding
### Properties
* **properties**: AzureMachineLearningWebServiceFunctionBindingProperties
* **type**: 'Microsoft.MachineLearning/WebService' (Required)

## AzureMachineLearningWebServiceFunctionBindingProperties
### Properties
* **apiKey**: string
* **batchSize**: int
* **endpoint**: string
* **inputs**: AzureMachineLearningWebServiceInputs
* **outputs**: AzureMachineLearningWebServiceOutputColumn[]

## AzureMachineLearningWebServiceInputs
### Properties
* **columnNames**: AzureMachineLearningWebServiceInputColumn[]
* **name**: string

## AzureMachineLearningWebServiceInputColumn
### Properties
* **dataType**: string
* **mapTo**: int
* **name**: string

## AzureMachineLearningWebServiceOutputColumn
### Properties
* **dataType**: string
* **name**: string

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

## Input
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: InputProperties
* **type**: string (ReadOnly)

## InputProperties
* **Discriminator**: type

### Base Properties
* **diagnostics**: Diagnostics (ReadOnly)
* **etag**: string (ReadOnly)
* **serialization**: Serialization
### ReferenceInputProperties
#### Properties
* **datasource**: ReferenceInputDataSource
* **type**: 'Reference' (Required)

### StreamInputProperties
#### Properties
* **datasource**: StreamInputDataSource
* **type**: 'Stream' (Required)


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
* **type**: 'Avro' (Required)

### CsvSerialization
#### Properties
* **properties**: CsvSerializationProperties
* **type**: 'Csv' (Required)

### JsonSerialization
#### Properties
* **properties**: JsonSerializationProperties
* **type**: 'Json' (Required)


## AvroSerialization
### Properties
* **type**: 'Avro' (Required)

## CsvSerialization
### Properties
* **properties**: CsvSerializationProperties
* **type**: 'Csv' (Required)

## CsvSerializationProperties
### Properties
* **encoding**: 'UTF8'
* **fieldDelimiter**: string

## JsonSerialization
### Properties
* **properties**: JsonSerializationProperties
* **type**: 'Json' (Required)

## JsonSerializationProperties
### Properties
* **encoding**: 'UTF8'
* **format**: 'Array' | 'LineSeparated'

## ReferenceInputProperties
### Properties
* **datasource**: ReferenceInputDataSource
* **type**: 'Reference' (Required)

## ReferenceInputDataSource
* **Discriminator**: type

### Base Properties
### BlobReferenceInputDataSource
#### Properties
* **properties**: BlobReferenceInputDataSourceProperties
* **type**: 'Microsoft.Storage/Blob' (Required)


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

## StorageAccount
### Properties
* **accountKey**: string
* **accountName**: string

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

## EventHubStreamInputDataSource
### Properties
* **properties**: EventHubStreamInputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

## EventHubStreamInputDataSourceProperties
### Properties
* **consumerGroupName**: string
* **eventHubName**: string
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string

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

## OutputDataSource
* **Discriminator**: type

### Base Properties
### AzureDataLakeStoreOutputDataSource
#### Properties
* **properties**: AzureDataLakeStoreOutputDataSourceProperties
* **type**: 'Microsoft.DataLake/Accounts' (Required)

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


## AzureDataLakeStoreOutputDataSource
### Properties
* **properties**: AzureDataLakeStoreOutputDataSourceProperties
* **type**: 'Microsoft.DataLake/Accounts' (Required)

## AzureDataLakeStoreOutputDataSourceProperties
### Properties
* **accountName**: string
* **dateFormat**: string
* **filePathPrefix**: string
* **refreshToken**: string
* **tenantId**: string
* **timeFormat**: string
* **tokenUserDisplayName**: string
* **tokenUserPrincipalName**: string

## EventHubOutputDataSource
### Properties
* **properties**: EventHubOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

## EventHubOutputDataSourceProperties
### Properties
* **eventHubName**: string
* **partitionKey**: string
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string

## ServiceBusQueueOutputDataSource
### Properties
* **properties**: ServiceBusQueueOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/Queue' (Required)

## ServiceBusQueueOutputDataSourceProperties
### Properties
* **propertyColumns**: string[]
* **queueName**: string
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string

## ServiceBusTopicOutputDataSource
### Properties
* **properties**: ServiceBusTopicOutputDataSourceProperties
* **type**: 'Microsoft.ServiceBus/Topic' (Required)

## ServiceBusTopicOutputDataSourceProperties
### Properties
* **propertyColumns**: string[]
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string
* **topicName**: string

## AzureSqlDatabaseOutputDataSource
### Properties
* **properties**: AzureSqlDatabaseOutputDataSourceProperties
* **type**: 'Microsoft.Sql/Server/Database' (Required)

## AzureSqlDatabaseOutputDataSourceProperties
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
* **dataset**: string
* **groupId**: string
* **groupName**: string
* **refreshToken**: string
* **table**: string
* **tokenUserDisplayName**: string
* **tokenUserPrincipalName**: string

## Sku
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

