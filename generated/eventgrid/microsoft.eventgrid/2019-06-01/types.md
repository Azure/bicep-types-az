# Microsoft.EventGrid @ 2019-06-01

## Resource Microsoft.EventGrid/domains@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DomainProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/eventSubscriptions@2019-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventSubscriptionProperties
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TopicProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant)

## DomainProperties
### Properties
* **endpoint**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: DeadLetterDestination
* **destination**: EventSubscriptionDestination
* **expirationTimeUtc**: string
* **filter**: EventSubscriptionFilter
* **labels**: string[]
* **provisioningState**: 'AwaitingManualAction' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **retryPolicy**: RetryPolicy
* **topic**: string (ReadOnly)

## DeadLetterDestination
* **Discriminator**: endpointType

### Base Properties
### StorageBlobDeadLetterDestination
#### Properties
* **endpointType**: 'StorageBlob' (Required)
* **properties**: StorageBlobDeadLetterDestinationProperties


## StorageBlobDeadLetterDestination
### Properties
* **endpointType**: 'StorageBlob' (Required)
* **properties**: StorageBlobDeadLetterDestinationProperties

## StorageBlobDeadLetterDestinationProperties
### Properties
* **blobContainerName**: string
* **resourceId**: string

## EventSubscriptionDestination
* **Discriminator**: endpointType

### Base Properties
### EventHubEventSubscriptionDestination
#### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: EventHubEventSubscriptionDestinationProperties

### HybridConnectionEventSubscriptionDestination
#### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: HybridConnectionEventSubscriptionDestinationProperties

### ServiceBusQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: ServiceBusQueueEventSubscriptionDestinationProperties

### StorageQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: StorageQueueEventSubscriptionDestinationProperties

### WebHookEventSubscriptionDestination
#### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: WebHookEventSubscriptionDestinationProperties


## EventHubEventSubscriptionDestination
### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: EventHubEventSubscriptionDestinationProperties

## EventHubEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## HybridConnectionEventSubscriptionDestination
### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: HybridConnectionEventSubscriptionDestinationProperties

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## ServiceBusQueueEventSubscriptionDestination
### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: ServiceBusQueueEventSubscriptionDestinationProperties

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## StorageQueueEventSubscriptionDestination
### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: StorageQueueEventSubscriptionDestinationProperties

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueName**: string
* **resourceId**: string

## WebHookEventSubscriptionDestination
### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: WebHookEventSubscriptionDestinationProperties

## WebHookEventSubscriptionDestinationProperties
### Properties
* **endpointBaseUrl**: string (ReadOnly)
* **endpointUrl**: string

## EventSubscriptionFilter
### Properties
* **advancedFilters**: AdvancedFilter[]
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
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

