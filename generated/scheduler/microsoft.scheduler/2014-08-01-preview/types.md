# Microsoft.Scheduler @ 2014-08-01-preview

## Resource Microsoft.Scheduler/jobCollections@2014-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the storage account location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobCollectionProperties](#jobcollectionproperties): Gets or sets the job collection properties.
* **tags**: [JobCollectionDefinitionTags](#jobcollectiondefinitiontags): Gets or sets the tags.
* **type**: 'Microsoft.Scheduler/jobCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Scheduler/jobCollections/jobs@2014-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): Gets or sets the job properties.
* **type**: 'Microsoft.Scheduler/jobCollections/jobs' (ReadOnly, DeployTimeConstant): The resource type

## HttpAuthentication
### Properties
* **type**: 'ActiveDirectoryOAuth' | 'Basic' | 'ClientCertificate' | 'NotSpecified': Gets or sets the http authentication type.

## HttpRequest
### Properties
* **authentication**: [HttpAuthentication](#httpauthentication): Gets or sets the http authentication.
* **body**: string: Gets or sets the request body.
* **headers**: [HttpRequestHeaders](#httprequestheaders): Gets or sets the headers.
* **method**: string: Gets or sets the method of the request.
* **uri**: string: Gets or sets the Uri.

## HttpRequestHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobAction
### Properties
* **errorAction**: [JobErrorAction](#joberroraction): Gets or sets the error action.
* **queueMessage**: [StorageQueueMessage](#storagequeuemessage): Gets or sets the storage queue message.
* **request**: [HttpRequest](#httprequest): Gets or sets the http requests.
* **retryPolicy**: [RetryPolicy](#retrypolicy): Gets or sets the retry policy.
* **serviceBusQueueMessage**: [ServiceBusQueueMessage](#servicebusqueuemessage): Gets or sets the service bus queue message.
* **serviceBusTopicMessage**: [ServiceBusTopicMessage](#servicebustopicmessage): Gets or sets the service bus topic message.
* **type**: 'Http' | 'Https' | 'ServiceBusQueue' | 'ServiceBusTopic' | 'StorageQueue': Gets or sets the job action type.

## JobCollectionDefinitionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobCollectionProperties
### Properties
* **quota**: [JobCollectionQuota](#jobcollectionquota): Gets or sets the job collection quota.
* **sku**: [Sku](#sku): Gets or sets the SKU.
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'Suspended': Gets or sets the state.

## JobCollectionQuota
### Properties
* **maxJobCount**: int: Gets or set the maximum job count.
* **maxJobOccurrence**: int: Gets or sets the maximum job occurrence.
* **maxRecurrence**: [JobMaxRecurrence](#jobmaxrecurrence): Gets or set the maximum recurrence.

## JobErrorAction
### Properties
* **queueMessage**: [StorageQueueMessage](#storagequeuemessage): Gets or sets the storage queue message.
* **request**: [HttpRequest](#httprequest): Gets or sets the http requests.
* **retryPolicy**: [RetryPolicy](#retrypolicy): Gets or sets the retry policy.
* **serviceBusQueueMessage**: [ServiceBusQueueMessage](#servicebusqueuemessage): Gets or sets the service bus queue message.
* **serviceBusTopicMessage**: [ServiceBusTopicMessage](#servicebustopicmessage): Gets or sets the service bus topic message.
* **type**: 'Http' | 'Https' | 'ServiceBusQueue' | 'ServiceBusTopic' | 'StorageQueue': Gets or sets the job error action type.

## JobMaxRecurrence
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week': Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
* **interval**: int: Gets or sets the interval between retries.

## JobProperties
### Properties
* **action**: [JobAction](#jobaction): Gets or sets the job action.
* **recurrence**: [JobRecurrence](#jobrecurrence): Gets or sets the job recurrence.
* **startTime**: string: Gets or sets the job start time.
* **state**: 'Completed' | 'Disabled' | 'Enabled' | 'Faulted': Gets or set the job state.
* **status**: [JobStatus](#jobstatus) (ReadOnly): Gets the job status.

## JobRecurrence
### Properties
* **count**: int: Gets or sets the maximum number of times that the job should run.
* **endTime**: string: Gets or sets the time at which the job will complete.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week': Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
* **interval**: int: Gets or sets the interval between retries.
* **schedule**: [JobRecurrenceSchedule](#jobrecurrenceschedule)

## JobRecurrenceSchedule
### Properties
* **hours**: int[]: Gets or sets the hours of the day that the job should execute at.
* **minutes**: int[]: Gets or sets the minutes of the hour that the job should execute at.
* **monthDays**: int[]: Gets or sets the days of the month that the job should execute on. Must be between 1 and 31.
* **monthlyOccurrences**: [JobRecurrenceScheduleMonthlyOccurrence](#jobrecurrenceschedulemonthlyoccurrence)[]: Gets or sets the occurrences of days within a month.
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: Gets or sets the days of the week that the job should execute on.

## JobRecurrenceScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
* **Occurrence**: int: Gets or sets the occurrence. Must be between -5 and 5.

## JobStatus
### Properties
* **executionCount**: int (ReadOnly): Gets the number of times this job has executed.
* **failureCount**: int (ReadOnly): Gets the number of times this job has failed.
* **faultedCount**: int (ReadOnly): Gets the number of faulted occurrences (occurrences that were retried and failed as many times as the retry policy states).
* **lastExecutionTime**: string (ReadOnly): Gets the time the last occurrence executed in ISO-8601 format.  Could be empty if job has not run yet.
* **nextExecutionTime**: string (ReadOnly): Gets the time of the next occurrence in ISO-8601 format. Could be empty if the job is completed.

## RetryPolicy
### Properties
* **retryCount**: int: Gets or sets the number of times a retry should be attempted.
* **retryInterval**: string: Gets or sets the retry interval between retries.
* **retryType**: 'Fixed' | 'None': Gets or sets the retry strategy to be used.

## ServiceBusAuthentication
### Properties
* **sasKey**: string: Gets or sets the SAS key.
* **sasKeyName**: string: Gets or sets the SAS key name.
* **type**: 'NotSpecified' | 'SharedAccessKey': Gets or sets the authentication type.

## ServiceBusBrokeredMessageProperties
### Properties
* **contentType**: string: Gets or sets the content type.
* **correlationId**: string: Gets or sets the correlation id.
* **forcePersistence**: bool: Gets or sets the force persistence.
* **label**: string: Gets or sets the label.
* **messageId**: string: Gets or sets the message id.
* **partitionKey**: string: Gets or sets the partition key.
* **replyTo**: string: Gets or sets the reply to.
* **replyToSessionId**: string: Gets or sets the reply to session id.
* **scheduledEnqueueTimeUtc**: string: Gets or sets the scheduled enqueue time UTC.
* **sessionId**: string: Gets or sets the session id.
* **timeToLive**: string: Gets or sets the time to live.
* **to**: string: Gets or sets the to.
* **viaPartitionKey**: string: Gets or sets the via partition key.

## ServiceBusMessageCustomMessageProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceBusMessageCustomMessageProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceBusQueueMessage
### Properties
* **authentication**: [ServiceBusAuthentication](#servicebusauthentication): Gets or sets the authentication.
* **brokeredMessageProperties**: [ServiceBusBrokeredMessageProperties](#servicebusbrokeredmessageproperties): Gets or sets the brokered message properties.
* **customMessageProperties**: [ServiceBusMessageCustomMessageProperties](#servicebusmessagecustommessageproperties): Gets or sets the custom message properties.
* **message**: string: Gets or sets the message.
* **namespace**: string: Gets or sets the namespace.
* **queueName**: string: Gets or sets the queue name.
* **transportType**: 'AMQP' | 'NetMessaging' | 'NotSpecified': Gets or sets the transport type.

## ServiceBusTopicMessage
### Properties
* **authentication**: [ServiceBusAuthentication](#servicebusauthentication): Gets or sets the authentication.
* **brokeredMessageProperties**: [ServiceBusBrokeredMessageProperties](#servicebusbrokeredmessageproperties): Gets or sets the brokered message properties.
* **customMessageProperties**: [ServiceBusMessageCustomMessageProperties](#servicebusmessagecustommessageproperties): Gets or sets the custom message properties.
* **message**: string: Gets or sets the message.
* **namespace**: string: Gets or sets the namespace.
* **topicPath**: string: Gets or sets the topic path.
* **transportType**: 'AMQP' | 'NetMessaging' | 'NotSpecified': Gets or sets the transport type.

## Sku
### Properties
* **name**: 'Free' | 'Premium' | 'Standard': Gets or set the SKU.

## StorageQueueMessage
### Properties
* **message**: string: Gets or sets the message.
* **queueName**: string: Gets or sets the queue name.
* **sasToken**: string: Gets or sets the SAS key.
* **storageAccount**: string: Gets or sets the storage account name.

