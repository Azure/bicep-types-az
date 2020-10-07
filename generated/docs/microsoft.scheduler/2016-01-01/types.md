# Microsoft.Scheduler @ 2016-01-01

## Microsoft.Scheduler/jobCollections/jobs
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobProperties
* **type**: 'Microsoft.Scheduler/jobCollections/jobs' (ReadOnly, DeployTimeConstant)

## JobProperties
### Properties
* **action**: JobAction
* **recurrence**: JobRecurrence
* **startTime**: string
* **state**: 'Completed' | 'Disabled' | 'Enabled' | 'Faulted'
* **status**: JobStatus (ReadOnly)

## JobAction
### Properties
* **errorAction**: JobErrorAction
* **queueMessage**: StorageQueueMessage
* **request**: HttpRequest
* **retryPolicy**: RetryPolicy
* **serviceBusQueueMessage**: ServiceBusQueueMessage
* **serviceBusTopicMessage**: ServiceBusTopicMessage
* **type**: 'Http' | 'Https' | 'ServiceBusQueue' | 'ServiceBusTopic' | 'StorageQueue'

## JobErrorAction
### Properties
* **queueMessage**: StorageQueueMessage
* **request**: HttpRequest
* **retryPolicy**: RetryPolicy
* **serviceBusQueueMessage**: ServiceBusQueueMessage
* **serviceBusTopicMessage**: ServiceBusTopicMessage
* **type**: 'Http' | 'Https' | 'ServiceBusQueue' | 'ServiceBusTopic' | 'StorageQueue'

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
* **headers**: Dictionary<string,String>
* **method**: string
* **uri**: string

## HttpAuthentication
### Properties
* **type**: 'ActiveDirectoryOAuth' | 'Basic' | 'ClientCertificate' | 'NotSpecified'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## RetryPolicy
### Properties
* **retryCount**: int
* **retryInterval**: string
* **retryType**: 'Fixed' | 'None'

## ServiceBusQueueMessage
### Properties
* **authentication**: ServiceBusAuthentication
* **brokeredMessageProperties**: ServiceBusBrokeredMessageProperties
* **customMessageProperties**: Dictionary<string,String>
* **message**: string
* **namespace**: string
* **queueName**: string
* **transportType**: 'AMQP' | 'NetMessaging' | 'NotSpecified'

## ServiceBusAuthentication
### Properties
* **sasKey**: string
* **sasKeyName**: string
* **type**: 'NotSpecified' | 'SharedAccessKey'

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ServiceBusTopicMessage
### Properties
* **authentication**: ServiceBusAuthentication
* **brokeredMessageProperties**: ServiceBusBrokeredMessageProperties
* **customMessageProperties**: Dictionary<string,String>
* **message**: string
* **namespace**: string
* **topicPath**: string
* **transportType**: 'AMQP' | 'NetMessaging' | 'NotSpecified'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## JobRecurrence
### Properties
* **count**: int
* **endTime**: string
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week'
* **interval**: int
* **schedule**: JobRecurrenceSchedule

## JobRecurrenceSchedule
### Properties
* **hours**: int[]
* **minutes**: int[]
* **monthDays**: int[]
* **monthlyOccurrences**: JobRecurrenceScheduleMonthlyOccurrence[]
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]

## JobRecurrenceScheduleMonthlyOccurrence
### Properties
* **Occurrence**: int
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'

## JobStatus
### Properties
* **executionCount**: int (ReadOnly)
* **failureCount**: int (ReadOnly)
* **faultedCount**: int (ReadOnly)
* **lastExecutionTime**: string (ReadOnly)
* **nextExecutionTime**: string (ReadOnly)

## Microsoft.Scheduler/jobCollections
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobCollectionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Scheduler/jobCollections' (ReadOnly, DeployTimeConstant)

## JobCollectionProperties
### Properties
* **quota**: JobCollectionQuota
* **sku**: Sku
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'Suspended'

## JobCollectionQuota
### Properties
* **maxJobCount**: int
* **maxJobOccurrence**: int
* **maxRecurrence**: JobMaxRecurrence

## JobMaxRecurrence
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week'
* **interval**: int

## Sku
### Properties
* **name**: 'Free' | 'Premium' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

