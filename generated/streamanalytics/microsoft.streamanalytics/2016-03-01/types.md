# Microsoft.StreamAnalytics @ 2016-03-01

## Resource Microsoft.StreamAnalytics/streamingjobs@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingJobProperties](#streamingjobproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.StreamAnalytics/streamingjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/functions@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FunctionProperties](#functionproperties)
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/inputs@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InputProperties](#inputproperties)
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/inputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/outputs@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OutputProperties](#outputproperties)
* **type**: 'Microsoft.StreamAnalytics/streamingjobs/outputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/streamingjobs/transformations@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TransformationProperties](#transformationproperties)
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
* **functions**: [Function](#function)[]
* **inputs**: [Input](#input)[]
* **jobId**: string (ReadOnly)
* **jobState**: string (ReadOnly)
* **lastOutputEventTime**: string (ReadOnly)
* **outputErrorPolicy**: 'Drop' | 'Stop'
* **outputs**: [Output](#output)[]
* **outputStartMode**: 'CustomTime' | 'JobStartTime' | 'LastOutputEventTime'
* **outputStartTime**: string
* **provisioningState**: string (ReadOnly)
* **sku**: [Sku](#sku)
* **transformation**: [Transformation](#transformation)

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
### Scalar
#### Properties
* **properties**: [ScalarFunctionConfiguration](#scalarfunctionconfiguration)
* **type**: 'Scalar' (Required)


## Scalar
### Properties
* **properties**: [ScalarFunctionConfiguration](#scalarfunctionconfiguration)
* **type**: 'Scalar' (Required)

## ScalarFunctionConfiguration
### Properties
* **binding**: [FunctionBinding](#functionbinding)
* **inputs**: [FunctionInput](#functioninput)[]
* **output**: [FunctionOutput](#functionoutput)

## FunctionBinding
* **Discriminator**: type
### Base Properties
### Microsoft.MachineLearning/WebService
#### Properties
* **properties**: [AzureMachineLearningWebServiceFunctionBindingProperties](#azuremachinelearningwebservicefunctionbindingproperties)
* **type**: 'Microsoft.MachineLearning/WebService' (Required)

### Microsoft.StreamAnalytics/JavascriptUdf
#### Properties
* **properties**: [JavaScriptFunctionBindingProperties](#javascriptfunctionbindingproperties)
* **type**: 'Microsoft.StreamAnalytics/JavascriptUdf' (Required)


## Microsoft.MachineLearning/WebService
### Properties
* **properties**: [AzureMachineLearningWebServiceFunctionBindingProperties](#azuremachinelearningwebservicefunctionbindingproperties)
* **type**: 'Microsoft.MachineLearning/WebService' (Required)

## AzureMachineLearningWebServiceFunctionBindingProperties
### Properties
* **apiKey**: string
* **batchSize**: int
* **endpoint**: string
* **inputs**: [AzureMachineLearningWebServiceInputs](#azuremachinelearningwebserviceinputs)
* **outputs**: [AzureMachineLearningWebServiceOutputColumn](#azuremachinelearningwebserviceoutputcolumn)[]

## AzureMachineLearningWebServiceInputs
### Properties
* **columnNames**: [AzureMachineLearningWebServiceInputColumn](#azuremachinelearningwebserviceinputcolumn)[]
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

## Input
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: [InputProperties](#inputproperties)
* **type**: string (ReadOnly)

## InputProperties
* **Discriminator**: type
### Base Properties
* **diagnostics**: [Diagnostics](#diagnostics) (ReadOnly)
* **etag**: string (ReadOnly)
* **serialization**: [Serialization](#serialization)
### Reference
#### Properties
* **datasource**: [ReferenceInputDataSource](#referenceinputdatasource)
* **type**: 'Reference' (Required)

### Stream
#### Properties
* **datasource**: [StreamInputDataSource](#streaminputdatasource)
* **type**: 'Stream' (Required)


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

### Json
#### Properties
* **properties**: [JsonSerializationProperties](#jsonserializationproperties)
* **type**: 'Json' (Required)


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

## Json
### Properties
* **properties**: [JsonSerializationProperties](#jsonserializationproperties)
* **type**: 'Json' (Required)

## JsonSerializationProperties
### Properties
* **encoding**: 'UTF8'
* **format**: 'Array' | 'LineSeparated'

## Reference
### Properties
* **datasource**: [ReferenceInputDataSource](#referenceinputdatasource)
* **type**: 'Reference' (Required)

## ReferenceInputDataSource
* **Discriminator**: type
### Base Properties
### Microsoft.Storage/Blob
#### Properties
* **properties**: [BlobStreamInputDataSourceProperties](#blobstreaminputdatasourceproperties)
* **type**: 'Microsoft.Storage/Blob' (Required)


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

## StorageAccount
### Properties
* **accountKey**: string
* **accountName**: string

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

## Microsoft.ServiceBus/EventHub
### Properties
* **properties**: [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/EventHub' (Required)

## EventHubStreamInputDataSourceProperties
### Properties
* **consumerGroupName**: string
* **eventHubName**: string
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string

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

## OutputDataSource
* **Discriminator**: type
### Base Properties
### Microsoft.DataLake/Accounts
#### Properties
* **properties**: [AzureDataLakeStoreOutputDataSourceProperties](#azuredatalakestoreoutputdatasourceproperties)
* **type**: 'Microsoft.DataLake/Accounts' (Required)

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
* **properties**: [AzureSqlDatabaseOutputDataSourceProperties](#azuresqldatabaseoutputdatasourceproperties)
* **type**: 'Microsoft.Sql/Server/Database' (Required)

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


## Microsoft.DataLake/Accounts
### Properties
* **properties**: [AzureDataLakeStoreOutputDataSourceProperties](#azuredatalakestoreoutputdatasourceproperties)
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

## Microsoft.ServiceBus/Queue
### Properties
* **properties**: [ServiceBusQueueOutputDataSourceProperties](#servicebusqueueoutputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/Queue' (Required)

## ServiceBusQueueOutputDataSourceProperties
### Properties
* **propertyColumns**: string[]
* **queueName**: string
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string

## Microsoft.ServiceBus/Topic
### Properties
* **properties**: [ServiceBusTopicOutputDataSourceProperties](#servicebustopicoutputdatasourceproperties)
* **type**: 'Microsoft.ServiceBus/Topic' (Required)

## ServiceBusTopicOutputDataSourceProperties
### Properties
* **propertyColumns**: string[]
* **serviceBusNamespace**: string
* **sharedAccessPolicyKey**: string
* **sharedAccessPolicyName**: string
* **topicName**: string

## Microsoft.Sql/Server/Database
### Properties
* **properties**: [AzureSqlDatabaseOutputDataSourceProperties](#azuresqldatabaseoutputdatasourceproperties)
* **type**: 'Microsoft.Sql/Server/Database' (Required)

## AzureSqlDatabaseOutputDataSourceProperties
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

