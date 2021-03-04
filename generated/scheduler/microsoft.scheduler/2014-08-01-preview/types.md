# Microsoft.Scheduler @ 2014-08-01-preview

## Resource Microsoft.Scheduler/jobCollections@2014-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobCollectionProperties
* **tags**: JobCollectionDefinitionTags
* **type**: 'Microsoft.Scheduler/jobCollections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Scheduler/jobCollections/jobs@2014-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobProperties
* **type**: 'Microsoft.Scheduler/jobCollections/jobs' (ReadOnly, DeployTimeConstant)

## JobCollectionProperties
### Properties
* **quota**: JobCollectionQuota
* **sku**: Sku

## JobCollectionQuota
### Properties
* **maxJobCount**: int
* **maxJobOccurrence**: int
* **maxRecurrence**: JobMaxRecurrence

## JobMaxRecurrence
### Properties
* **interval**: int

## Sku
### Properties

## JobCollectionDefinitionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobProperties
### Properties
* **action**: JobAction
* **recurrence**: JobRecurrence
* **startTime**: string
* **status**: JobStatus (ReadOnly)

## JobAction
### Properties
* **errorAction**: JobErrorAction
* **queueMessage**: StorageQueueMessage
* **request**: HttpRequest
* **retryPolicy**: RetryPolicy
* **serviceBusQueueMessage**: ServiceBusQueueMessage
* **serviceBusTopicMessage**: ServiceBusTopicMessage

## JobErrorAction
### Properties
* **queueMessage**: StorageQueueMessage
* **request**: HttpRequest
* **retryPolicy**: RetryPolicy
* **serviceBusQueueMessage**: ServiceBusQueueMessage
* **serviceBusTopicMessage**: ServiceBusTopicMessage

## StorageQueueMessage
### Properties
* **message**: string
* **queueName**: string
* **sasToken**: string
* **storageAccount**: string

## HttpRequest
### Properties
* **authentication**: HttpAuthentication
* **body**: string
* **headers**: HttpRequestHeaders
* **method**: string
* **uri**: string

## HttpAuthentication
### Properties

## HttpRequestHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RetryPolicy
### Properties
* **retryCount**: int
* **retryInterval**: any

## ServiceBusQueueMessage
### Properties
* **authentication**: ServiceBusAuthentication
* **brokeredMessageProperties**: ServiceBusBrokeredMessageProperties
* **customMessageProperties**: ServiceBusMessageCustomMessageProperties
* **message**: string
* **namespace**: string
* **queueName**: string

## ServiceBusAuthentication
### Properties
* **sasKey**: string
* **sasKeyName**: string

## ServiceBusBrokeredMessageProperties
### Properties
* **contentType**: string
* **correlationId**: string
* **forcePersistence**: bool
* **label**: string
* **messageId**: string
* **partitionKey**: string
* **replyTo**: string
* **replyToSessionId**: string
* **scheduledEnqueueTimeUtc**: string
* **sessionId**: string
* **timeToLive**: string
* **to**: string
* **viaPartitionKey**: string

## ServiceBusMessageCustomMessageProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceBusTopicMessage
### Properties
* **authentication**: ServiceBusAuthentication
* **brokeredMessageProperties**: ServiceBusBrokeredMessageProperties
* **customMessageProperties**: ServiceBusMessageCustomMessageProperties
* **message**: string
* **namespace**: string
* **topicPath**: string

## ServiceBusMessageCustomMessageProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobRecurrence
### Properties
* **count**: int
* **endTime**: string
* **interval**: int
* **schedule**: JobRecurrenceSchedule

## JobRecurrenceSchedule
### Properties
* **hours**: int[]
* **minutes**: int[]
* **monthDays**: int[]
* **monthlyOccurrences**: JobRecurrenceScheduleMonthlyOccurrence[]
* **weekDays**: array

## JobRecurrenceScheduleMonthlyOccurrence
### Properties
* **occurrence**: int

## JobStatus
### Properties
* **executionCount**: int (ReadOnly)
* **failureCount**: int (ReadOnly)
* **faultedCount**: int (ReadOnly)
* **lastExecutionTime**: string (ReadOnly)
* **nextExecutionTime**: string (ReadOnly)

