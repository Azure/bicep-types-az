# Microsoft.EventGrid @ 2018-05-01-preview

## Resource Microsoft.EventGrid/eventSubscriptions@2018-05-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the Event Subscription
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics@2018-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicProperties](#topicproperties): Properties of the Topic
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags of the resource
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant): The resource type

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination): Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class.
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination): Information about the destination for an event subscription
* **eventDeliverySchema**: 'CloudEventV01Schema' | 'EventGridSchema' | 'InputEventSchema': The event delivery schema for the event subscription. Possible values include: 'EventGridSchema', 'InputEventSchema', 'CloudEventV01Schema'
* **filter**: [EventSubscriptionFilter](#eventsubscriptionfilter): Filter for the Event Subscription
* **labels**: string[]: List of user defined labels.
* **provisioningState**: 'AwaitingManualAction' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the event subscription. Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Canceled', 'Failed', 'AwaitingManualAction'
* **retryPolicy**: [RetryPolicy](#retrypolicy): Information about the retry policy for an event subscription
* **topic**: string (ReadOnly): Name of the topic of the event subscription.

## DeadLetterDestination
* **Discriminator**: endpointType
### Base Properties
### StorageBlob
#### Properties
* **endpointType**: 'StorageBlob' (Required): Information about the storage blob based dead letter destination.
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties): Properties of the storage blob based dead letter destination.


## StorageBlob
### Properties
* **endpointType**: 'StorageBlob' (Required): Information about the storage blob based dead letter destination.
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties): Properties of the storage blob based dead letter destination.

## StorageBlobDeadLetterDestinationProperties
### Properties
* **blobContainerName**: string: The name of the Storage blob container that is the destination of the deadletter events
* **resourceId**: string: The Azure Resource ID of the storage account that is the destination of the deadletter events

## EventSubscriptionDestination
* **Discriminator**: endpointType
### Base Properties
### EventHub
#### Properties
* **endpointType**: 'EventHub' (Required): Information about the event hub destination for an event subscription
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties): The properties for a event hub destination.

### HybridConnection
#### Properties
* **endpointType**: 'HybridConnection' (Required): Information about the HybridConnection destination for an event subscription.
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties): The properties for a hybrid connection destination.

### StorageQueue
#### Properties
* **endpointType**: 'StorageQueue' (Required): Information about the storage queue destination for an event subscription.
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties): The properties for a storage queue destination.

### WebHook
#### Properties
* **endpointType**: 'WebHook' (Required): Information about the webhook destination for an event subscription
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties): Information about the webhook destination properties for an event subscription.


## EventHub
### Properties
* **endpointType**: 'EventHub' (Required): Information about the event hub destination for an event subscription
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties): The properties for a event hub destination.

## EventHubEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.

## HybridConnection
### Properties
* **endpointType**: 'HybridConnection' (Required): Information about the HybridConnection destination for an event subscription.
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties): The properties for a hybrid connection destination.

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource ID of an hybrid connection that is the destination of an event subscription.

## StorageQueue
### Properties
* **endpointType**: 'StorageQueue' (Required): Information about the storage queue destination for an event subscription.
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties): The properties for a storage queue destination.

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueName**: string: The name of the Storage queue under a storage account that is the destination of an event subscription.
* **resourceId**: string: The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.

## WebHook
### Properties
* **endpointType**: 'WebHook' (Required): Information about the webhook destination for an event subscription
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties): Information about the webhook destination properties for an event subscription.

## WebHookEventSubscriptionDestinationProperties
### Properties
* **endpointBaseUrl**: string (ReadOnly): The base URL that represents the endpoint of the destination of an event subscription.
* **endpointUrl**: string: The URL that represents the endpoint of the destination of an event subscription.

## EventSubscriptionFilter
### Properties
* **includedEventTypes**: string[]: A list of applicable event types that need to be part of the event subscription.
If it is desired to subscribe to all event types, the string "all" needs to be specified as an element in this list.
* **isSubjectCaseSensitive**: bool: Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter
should be compared in a case sensitive manner.
* **subjectBeginsWith**: string: An optional string to filter events for an event subscription based on a resource path prefix.
The format of this depends on the publisher of the events.
Wildcard characters are not supported in this path.
* **subjectEndsWith**: string: An optional string to filter events for an event subscription based on a resource path suffix.
Wildcard characters are not supported in this path.

## RetryPolicy
### Properties
* **eventTimeToLiveInMinutes**: int: Time To Live (in minutes) for events.
* **maxDeliveryAttempts**: int: Maximum number of delivery retry attempts for events.

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the topic.
* **inputSchema**: 'CloudEventV01Schema' | 'CustomEventSchema' | 'EventGridSchema': This determines the format that Event Grid should expect for incoming events published to the topic. Possible values include: 'EventGridSchema', 'CustomEventSchema', 'CloudEventV01Schema'
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the topic. Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Canceled', 'Failed'

## InputSchemaMapping
* **Discriminator**: inputSchemaMappingType
### Base Properties
### Json
#### Properties
* **inputSchemaMappingType**: 'Json' (Required): This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema.
* **properties**: [JsonInputSchemaMappingProperties](#jsoninputschemamappingproperties): This can be used to map properties of a source schema (or default values, for certain supported properties) to properties of the EventGridEvent schema.


## Json
### Properties
* **inputSchemaMappingType**: 'Json' (Required): This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema.
* **properties**: [JsonInputSchemaMappingProperties](#jsoninputschemamappingproperties): This can be used to map properties of a source schema (or default values, for certain supported properties) to properties of the EventGridEvent schema.

## JsonInputSchemaMappingProperties
### Properties
* **dataVersion**: [JsonFieldWithDefault](#jsonfieldwithdefault): This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'subject','eventType' and 'dataVersion' properties. This represents a field in the input event schema along with a default value to be used, and at least one of these two properties should be provided.
* **eventTime**: [JsonField](#jsonfield): This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id','topic' and 'eventTime' properties. This represents a field in the input event schema.
* **eventType**: [JsonFieldWithDefault](#jsonfieldwithdefault): This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'subject','eventType' and 'dataVersion' properties. This represents a field in the input event schema along with a default value to be used, and at least one of these two properties should be provided.
* **id**: [JsonField](#jsonfield): This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id','topic' and 'eventTime' properties. This represents a field in the input event schema.
* **subject**: [JsonFieldWithDefault](#jsonfieldwithdefault): This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'subject','eventType' and 'dataVersion' properties. This represents a field in the input event schema along with a default value to be used, and at least one of these two properties should be provided.
* **topic**: [JsonField](#jsonfield): This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id','topic' and 'eventTime' properties. This represents a field in the input event schema.

## JsonFieldWithDefault
### Properties
* **defaultValue**: string: The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## JsonField
### Properties
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

