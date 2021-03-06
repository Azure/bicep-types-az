# Microsoft.Scheduler @ 2016-03-01

## Resource Microsoft.Scheduler/jobCollections@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the storage account location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobCollectionProperties](#jobcollectionproperties)
* **tags**: [JobCollectionDefinitionTags](#jobcollectiondefinitiontags): Gets or sets the tags.
* **type**: 'Microsoft.Scheduler/jobCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Scheduler/jobCollections/jobs@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties)
* **type**: 'Microsoft.Scheduler/jobCollections/jobs' (ReadOnly, DeployTimeConstant): The resource type

## JobCollectionProperties
### Properties
* **quota**: [JobCollectionQuota](#jobcollectionquota)
* **sku**: [Sku](#sku)
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'Suspended': Gets or sets the state.

## JobCollectionQuota
### Properties
* **maxJobCount**: int: Gets or set the maximum job count.
* **maxJobOccurrence**: int: Gets or sets the maximum job occurrence.
* **maxRecurrence**: [JobMaxRecurrence](#jobmaxrecurrence)

## JobMaxRecurrence
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week': Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
* **interval**: int: Gets or sets the interval between retries.

## Sku
### Properties
* **name**: 'Free' | 'P10Premium' | 'P20Premium' | 'Standard': Gets or set the SKU.

## JobCollectionDefinitionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobProperties
### Properties
* **action**: [JobAction](#jobaction)
* **recurrence**: [JobRecurrence](#jobrecurrence)
* **startTime**: string: Gets or sets the job start time.
* **state**: 'Completed' | 'Disabled' | 'Enabled' | 'Faulted': Gets or set the job state.
* **status**: [JobStatus](#jobstatus) (ReadOnly)

## JobAction
### Properties
* **errorAction**: [JobErrorAction](#joberroraction)
* **queueMessage**: [StorageQueueMessage](#storagequeuemessage)
* **request**: [HttpRequest](#httprequest)
* **retryPolicy**: [RetryPolicy](#retrypolicy)
* **serviceBusQueueMessage**: [ServiceBusQueueMessage](#servicebusqueuemessage)
* **serviceBusTopicMessage**: [ServiceBusTopicMessage](#servicebustopicmessage)
* **type**: 'Http' | 'Https' | 'ServiceBusQueue' | 'ServiceBusTopic' | 'StorageQueue': Gets or sets the job action type.

## JobErrorAction
### Properties
* **queueMessage**: [StorageQueueMessage](#storagequeuemessage)
* **request**: [HttpRequest](#httprequest)
* **retryPolicy**: [RetryPolicy](#retrypolicy)
* **serviceBusQueueMessage**: [ServiceBusQueueMessage](#servicebusqueuemessage)
* **serviceBusTopicMessage**: [ServiceBusTopicMessage](#servicebustopicmessage)
* **type**: 'Http' | 'Https' | 'ServiceBusQueue' | 'ServiceBusTopic' | 'StorageQueue': Gets or sets the job action type.

## StorageQueueMessage
### Properties
* **message**: string: Gets or sets the message.
* **queueName**: string: Gets or sets the queue name.
* **sasToken**: string: Gets or sets the SAS key.
* **storageAccount**: string: Gets or sets the storage account name.

## HttpRequest
### Properties
* **authentication**: [HttpAuthentication](#httpauthentication)
* **body**: string: Gets or sets the request body.
* **headers**: [HttpRequestHeaders](#httprequestheaders): Gets or sets the headers.
* **method**: string: Gets or sets the method of the request.
* **uri**: string: Gets or sets the URI of the request.

## HttpAuthentication
* **Discriminator**: type

### Base Properties
### OAuthAuthentication
#### Properties
* **audience**: string: Gets or sets the audience.
* **clientId**: string: Gets or sets the client identifier.
* **secret**: string: Gets or sets the secret, return value will always be empty.
* **tenant**: string: Gets or sets the tenant.
* **type**: 'ActiveDirectoryOAuth' (Required): Gets or sets the HTTP authentication type.

### BasicAuthentication
#### Properties
* **password**: string: Gets or sets the password, return value will always be empty.
* **type**: 'Basic' (Required): Gets or sets the HTTP authentication type.
* **username**: string: Gets or sets the username.

### ClientCertAuthentication
#### Properties
* **certificateExpirationDate**: string: Gets or sets the certificate expiration date.
* **certificateSubjectName**: string: Gets or sets the certificate subject name.
* **certificateThumbprint**: string: Gets or sets the certificate thumbprint.
* **password**: string: Gets or sets the certificate password, return value will always be empty.
* **pfx**: string: Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty.
* **type**: 'ClientCertificate' (Required): Gets or sets the HTTP authentication type.


## HttpRequestHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RetryPolicy
### Properties
* **retryCount**: int: Gets or sets the number of times a retry should be attempted.
* **retryInterval**: string: Gets or sets the retry interval between retries, specify duration in ISO 8601 format.
* **retryType**: 'Fixed' | 'None': Gets or sets the retry strategy to be used.

## ServiceBusQueueMessage
### Properties
* **authentication**: [ServiceBusAuthentication](#servicebusauthentication)
* **brokeredMessageProperties**: [ServiceBusBrokeredMessageProperties](#servicebusbrokeredmessageproperties)
* **customMessageProperties**: [ServiceBusMessageCustomMessageProperties](#servicebusmessagecustommessageproperties): Gets or sets the custom message properties.
* **message**: string: Gets or sets the message.
* **namespace**: string: Gets or sets the namespace.
* **queueName**: string: Gets or sets the queue name.
* **transportType**: 'AMQP' | 'NetMessaging' | 'NotSpecified': Gets or sets the transport type.

## ServiceBusAuthentication
### Properties
* **sasKey**: string: Gets or sets the SAS key.
* **sasKeyName**: string: Gets or sets the SAS key name.
* **type**: 'NotSpecified' | 'SharedAccessKey': Gets or sets the authentication type.

## ServiceBusBrokeredMessageProperties
### Properties
* **contentType**: string: Gets or sets the content type.
* **correlationId**: string: Gets or sets the correlation ID.
* **forcePersistence**: bool: Gets or sets the force persistence.
* **label**: string: Gets or sets the label.
* **messageId**: string: Gets or sets the message ID.
* **partitionKey**: string: Gets or sets the partition key.
* **replyTo**: string: Gets or sets the reply to.
* **replyToSessionId**: string: Gets or sets the reply to session ID.
* **scheduledEnqueueTimeUtc**: string: Gets or sets the scheduled enqueue time UTC.
* **sessionId**: string: Gets or sets the session ID.
* **timeToLive**: string: Gets or sets the time to live.
* **to**: string: Gets or sets the to.
* **viaPartitionKey**: string: Gets or sets the via partition key.

## ServiceBusMessageCustomMessageProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceBusTopicMessage
### Properties
* **authentication**: [ServiceBusAuthentication](#servicebusauthentication)
* **brokeredMessageProperties**: [ServiceBusBrokeredMessageProperties](#servicebusbrokeredmessageproperties)
* **customMessageProperties**: [ServiceBusMessageCustomMessageProperties](#servicebusmessagecustommessageproperties): Gets or sets the custom message properties.
* **message**: string: Gets or sets the message.
* **namespace**: string: Gets or sets the namespace.
* **topicPath**: string: Gets or sets the topic path.
* **transportType**: 'AMQP' | 'NetMessaging' | 'NotSpecified': Gets or sets the transport type.

## ServiceBusMessageCustomMessageProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

