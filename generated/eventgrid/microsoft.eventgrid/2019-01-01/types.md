# Microsoft.EventGrid @ 2019-01-01

## Resource Microsoft.EventGrid/eventSubscriptions@2019-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventSubscriptionProperties
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics@2019-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TopicProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant)

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: DeadLetterDestination
* **destination**: EventSubscriptionDestination
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
* **includedEventTypes**: string[]
* **isSubjectCaseSensitive**: bool
* **subjectBeginsWith**: string
* **subjectEndsWith**: string

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

