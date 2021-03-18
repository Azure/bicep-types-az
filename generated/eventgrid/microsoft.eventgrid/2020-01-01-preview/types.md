# Microsoft.EventGrid @ 2020-01-01-preview

## Resource Microsoft.EventGrid/domains@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DomainProperties](#domainproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/domains/topics@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DomainTopicProperties](#domaintopicproperties) (ReadOnly)
* **type**: 'Microsoft.EventGrid/domains/topics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/eventSubscriptions@2020-01-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties)
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TopicProperties](#topicproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant)

## DomainProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping)
* **metricResourceId**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## InputSchemaMapping
* **Discriminator**: inputSchemaMappingType

### Base Properties
### JsonInputSchemaMapping
#### Properties
* **inputSchemaMappingType**: 'Json' (Required)
* **properties**: [JsonInputSchemaMappingProperties](#jsoninputschemamappingproperties)


## JsonInputSchemaMapping
### Properties
* **inputSchemaMappingType**: 'Json' (Required)
* **properties**: [JsonInputSchemaMappingProperties](#jsoninputschemamappingproperties)

## JsonInputSchemaMappingProperties
### Properties
* **dataVersion**: [JsonFieldWithDefault](#jsonfieldwithdefault)
* **eventTime**: [JsonField](#jsonfield)
* **eventType**: [JsonFieldWithDefault](#jsonfieldwithdefault)
* **id**: [JsonField](#jsonfield)
* **subject**: [JsonFieldWithDefault](#jsonfieldwithdefault)
* **topic**: [JsonField](#jsonfield)

## JsonFieldWithDefault
### Properties
* **defaultValue**: string
* **sourceField**: string

## JsonField
### Properties
* **sourceField**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DomainTopicProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination)
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination)
* **eventDeliverySchema**: 'CloudEventSchemaV1_0' | 'CustomInputSchema' | 'EventGridSchema'
* **expirationTimeUtc**: string
* **filter**: [EventSubscriptionFilter](#eventsubscriptionfilter)
* **labels**: string[]
* **provisioningState**: 'AwaitingManualAction' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **retryPolicy**: [RetryPolicy](#retrypolicy)
* **topic**: string (ReadOnly)

## DeadLetterDestination
* **Discriminator**: endpointType

### Base Properties
### StorageBlobDeadLetterDestination
#### Properties
* **endpointType**: 'StorageBlob' (Required)
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties)


## StorageBlobDeadLetterDestination
### Properties
* **endpointType**: 'StorageBlob' (Required)
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties)

## StorageBlobDeadLetterDestinationProperties
### Properties
* **blobContainerName**: string
* **resourceId**: string

## EventSubscriptionDestination
* **Discriminator**: endpointType

### Base Properties
### AzureFunctionEventSubscriptionDestination
#### Properties
* **endpointType**: 'AzureFunction' (Required)
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties)

### EventHubEventSubscriptionDestination
#### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)

### HybridConnectionEventSubscriptionDestination
#### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties)

### ServiceBusQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties)

### ServiceBusTopicEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusTopic' (Required)
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties)

### StorageQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties)

### WebHookEventSubscriptionDestination
#### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties)


## AzureFunctionEventSubscriptionDestination
### Properties
* **endpointType**: 'AzureFunction' (Required)
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties)

## AzureFunctionEventSubscriptionDestinationProperties
### Properties
* **maxEventsPerBatch**: int
* **preferredBatchSizeInKilobytes**: int
* **resourceId**: string

## EventHubEventSubscriptionDestination
### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)

## EventHubEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## HybridConnectionEventSubscriptionDestination
### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties)

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## ServiceBusQueueEventSubscriptionDestination
### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties)

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## ServiceBusTopicEventSubscriptionDestination
### Properties
* **endpointType**: 'ServiceBusTopic' (Required)
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties)

## ServiceBusTopicEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## StorageQueueEventSubscriptionDestination
### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties)

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueName**: string
* **resourceId**: string

## WebHookEventSubscriptionDestination
### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties)

## WebHookEventSubscriptionDestinationProperties
### Properties
* **azureActiveDirectoryApplicationIdOrUri**: string
* **azureActiveDirectoryTenantId**: string
* **endpointBaseUrl**: string (ReadOnly)
* **endpointUrl**: string
* **maxEventsPerBatch**: int
* **preferredBatchSizeInKilobytes**: int

## EventSubscriptionFilter
### Properties
* **advancedFilters**: [AdvancedFilter](#advancedfilter)[]
* **includedEventTypes**: string[]
* **isSubjectCaseSensitive**: bool
* **subjectBeginsWith**: string
* **subjectEndsWith**: string

## AdvancedFilter
* **Discriminator**: operatorType

### Base Properties
* **key**: string
### BoolEqualsAdvancedFilter
#### Properties
* **operatorType**: 'BoolEquals' (Required)
* **value**: bool

### NumberGreaterThanAdvancedFilter
#### Properties
* **operatorType**: 'NumberGreaterThan' (Required)
* **value**: int

### NumberGreaterThanOrEqualsAdvancedFilter
#### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required)
* **value**: int

### NumberInAdvancedFilter
#### Properties
* **operatorType**: 'NumberIn' (Required)
* **values**: int[]

### NumberLessThanAdvancedFilter
#### Properties
* **operatorType**: 'NumberLessThan' (Required)
* **value**: int

### NumberLessThanOrEqualsAdvancedFilter
#### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required)
* **value**: int

### NumberNotInAdvancedFilter
#### Properties
* **operatorType**: 'NumberNotIn' (Required)
* **values**: int[]

### StringBeginsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringBeginsWith' (Required)
* **values**: string[]

### StringContainsAdvancedFilter
#### Properties
* **operatorType**: 'StringContains' (Required)
* **values**: string[]

### StringEndsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringEndsWith' (Required)
* **values**: string[]

### StringInAdvancedFilter
#### Properties
* **operatorType**: 'StringIn' (Required)
* **values**: string[]

### StringNotInAdvancedFilter
#### Properties
* **operatorType**: 'StringNotIn' (Required)
* **values**: string[]


## BoolEqualsAdvancedFilter
### Properties
* **operatorType**: 'BoolEquals' (Required)
* **value**: bool

## NumberGreaterThanAdvancedFilter
### Properties
* **operatorType**: 'NumberGreaterThan' (Required)
* **value**: int

## NumberGreaterThanOrEqualsAdvancedFilter
### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required)
* **value**: int

## NumberInAdvancedFilter
### Properties
* **operatorType**: 'NumberIn' (Required)
* **values**: int[]

## NumberLessThanAdvancedFilter
### Properties
* **operatorType**: 'NumberLessThan' (Required)
* **value**: int

## NumberLessThanOrEqualsAdvancedFilter
### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required)
* **value**: int

## NumberNotInAdvancedFilter
### Properties
* **operatorType**: 'NumberNotIn' (Required)
* **values**: int[]

## StringBeginsWithAdvancedFilter
### Properties
* **operatorType**: 'StringBeginsWith' (Required)
* **values**: string[]

## StringContainsAdvancedFilter
### Properties
* **operatorType**: 'StringContains' (Required)
* **values**: string[]

## StringEndsWithAdvancedFilter
### Properties
* **operatorType**: 'StringEndsWith' (Required)
* **values**: string[]

## StringInAdvancedFilter
### Properties
* **operatorType**: 'StringIn' (Required)
* **values**: string[]

## StringNotInAdvancedFilter
### Properties
* **operatorType**: 'StringNotIn' (Required)
* **values**: string[]

## RetryPolicy
### Properties
* **eventTimeToLiveInMinutes**: int
* **maxDeliveryAttempts**: int

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping)
* **metricResourceId**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

