# Microsoft.Scheduler @ 2014-08-01-preview

## Resource Microsoft.Scheduler/jobCollections@2014-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobCollectionProperties](#jobcollectionproperties)
* **tags**: [JobCollectionDefinitionTags](#jobcollectiondefinitiontags)
* **type**: 'Microsoft.Scheduler/jobCollections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Scheduler/jobCollections/jobs@2014-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobProperties](#jobproperties)
* **type**: 'Microsoft.Scheduler/jobCollections/jobs' (ReadOnly, DeployTimeConstant)

## JobCollectionProperties
### Properties
* **quota**: [JobCollectionQuota](#jobcollectionquota)
* **sku**: [Sku](#sku)
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'Suspended'

## JobCollectionQuota
### Properties
* **maxJobCount**: int
* **maxJobOccurrence**: int
* **maxRecurrence**: [JobMaxRecurrence](#jobmaxrecurrence)

## JobMaxRecurrence
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week'
* **interval**: int

## Sku
### Properties
* **name**: 'Free' | 'Premium' | 'Standard'

## JobCollectionDefinitionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobProperties
### Properties
* **action**: [JobAction](#jobaction)
* **recurrence**: [JobRecurrence](#jobrecurrence)
* **startTime**: string
* **state**: 'Completed' | 'Disabled' | 'Enabled' | 'Faulted'
* **status**: [JobStatus](#jobstatus) (ReadOnly)

## JobAction
### Properties
* **errorAction**: [JobErrorAction](#joberroraction)
* **queueMessage**: [StorageQueueMessage](#storagequeuemessage)
* **request**: [HttpRequest](#httprequest)
* **retryPolicy**: [RetryPolicy](#retrypolicy)
* **serviceBusQueueMessage**: [ServiceBusQueueMessage](#servicebusqueuemessage)
* **serviceBusTopicMessage**: [ServiceBusTopicMessage](#servicebustopicmessage)
* **type**: 'Http' | 'Https' | 'ServiceBusQueue' | 'ServiceBusTopic' | 'StorageQueue'

## JobErrorAction
### Properties
* **queueMessage**: [StorageQueueMessage](#storagequeuemessage)
* **request**: [HttpRequest](#httprequest)
* **retryPolicy**: [RetryPolicy](#retrypolicy)
* **serviceBusQueueMessage**: [ServiceBusQueueMessage](#servicebusqueuemessage)
* **serviceBusTopicMessage**: [ServiceBusTopicMessage](#servicebustopicmessage)
* **type**: 'Http' | 'Https' | 'ServiceBusQueue' | 'ServiceBusTopic' | 'StorageQueue'

## StorageQueueMessage
### Properties
* **message**: string
* **queueName**: string
* **sasToken**: string
* **storageAccount**: string

## HttpRequest
### Properties
* **authentication**: [HttpAuthentication](#httpauthentication)
* **body**: string
* **headers**: [HttpRequestHeaders](#httprequestheaders)
* **method**: string
* **uri**: string

## HttpAuthentication
### Properties
* **type**: 'ActiveDirectoryOAuth' | 'Basic' | 'ClientCertificate' | 'NotSpecified'

## HttpRequestHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RetryPolicy
### Properties
* **retryCount**: int
* **retryInterval**: string
* **retryType**: 'Fixed' | 'None'

## ServiceBusQueueMessage
### Properties
* **authentication**: [ServiceBusAuthentication](#servicebusauthentication)
* **brokeredMessageProperties**: [ServiceBusBrokeredMessageProperties](#servicebusbrokeredmessageproperties)
* **customMessageProperties**: [ServiceBusMessageCustomMessageProperties](#servicebusmessagecustommessageproperties)
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

## ServiceBusMessageCustomMessageProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceBusTopicMessage
### Properties
* **authentication**: [ServiceBusAuthentication](#servicebusauthentication)
* **brokeredMessageProperties**: [ServiceBusBrokeredMessageProperties](#servicebusbrokeredmessageproperties)
* **customMessageProperties**: [ServiceBusMessageCustomMessageProperties](#servicebusmessagecustommessageproperties)
* **message**: string
* **namespace**: string
* **topicPath**: string
* **transportType**: 'AMQP' | 'NetMessaging' | 'NotSpecified'

## ServiceBusMessageCustomMessageProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobRecurrence
### Properties
* **count**: int
* **endTime**: string
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week'
* **interval**: int
* **schedule**: [JobRecurrenceSchedule](#jobrecurrenceschedule)

## JobRecurrenceSchedule
### Properties
* **hours**: int[]
* **minutes**: int[]
* **monthDays**: int[]
* **monthlyOccurrences**: [JobRecurrenceScheduleMonthlyOccurrence](#jobrecurrenceschedulemonthlyoccurrence)[]
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]

## JobRecurrenceScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **Occurrence**: int

## JobStatus
### Properties
* **executionCount**: int (ReadOnly)
* **failureCount**: int (ReadOnly)
* **faultedCount**: int (ReadOnly)
* **lastExecutionTime**: string (ReadOnly)
* **nextExecutionTime**: string (ReadOnly)

