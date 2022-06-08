# Microsoft.EventGrid @ 2020-01-01-preview

## Resource Microsoft.EventGrid/domains@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainProperties](#domainproperties): Properties of the Domain
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/topics@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainTopicProperties](#domaintopicproperties) (ReadOnly): Properties of the Domain Topic
* **type**: 'Microsoft.EventGrid/domains/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/eventSubscriptions@2020-01-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the Event Subscription
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicProperties](#topicproperties): Properties of the Topic
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topicTypes@2020-01-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicTypeProperties](#topictypeproperties) (ReadOnly): Properties of a topic type.
* **type**: 'Microsoft.EventGrid/topicTypes' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.EventGrid/domains@2020-01-01-preview)
* **Resource**: Microsoft.EventGrid/domains
* **ApiVersion**: 2020-01-01-preview
* **Output**: [DomainSharedAccessKeys](#domainsharedaccesskeys)

## Function listKeys (Microsoft.EventGrid/topics@2020-01-01-preview)
* **Resource**: Microsoft.EventGrid/topics
* **ApiVersion**: 2020-01-01-preview
* **Output**: [TopicSharedAccessKeys](#topicsharedaccesskeys)

## AdvancedFilter
* **Discriminator**: operatorType

### Base Properties
* **key**: string: The field/property in the event based on which you want to filter.
### BoolEqualsAdvancedFilter
#### Properties
* **operatorType**: 'BoolEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: bool: The boolean filter value.

### NumberGreaterThanAdvancedFilter
#### Properties
* **operatorType**: 'NumberGreaterThan' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberGreaterThanOrEqualsAdvancedFilter
#### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberInAdvancedFilter
#### Properties
* **operatorType**: 'NumberIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[]: The set of filter values.

### NumberLessThanAdvancedFilter
#### Properties
* **operatorType**: 'NumberLessThan' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberLessThanOrEqualsAdvancedFilter
#### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberNotInAdvancedFilter
#### Properties
* **operatorType**: 'NumberNotIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[]: The set of filter values.

### StringBeginsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringBeginsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringContainsAdvancedFilter
#### Properties
* **operatorType**: 'StringContains' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringEndsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringEndsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringInAdvancedFilter
#### Properties
* **operatorType**: 'StringIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotInAdvancedFilter
#### Properties
* **operatorType**: 'StringNotIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.


## AzureFunctionEventSubscriptionDestinationProperties
### Properties
* **maxEventsPerBatch**: int: Maximum number of events per batch.
* **preferredBatchSizeInKilobytes**: int: Preferred batch size in Kilobytes.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription.

## DeadLetterDestination
* **Discriminator**: endpointType

### Base Properties
### StorageBlobDeadLetterDestination
#### Properties
* **endpointType**: 'StorageBlob' (Required): Type of the endpoint for the dead letter destination
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties): Properties of the storage blob based dead letter destination.


## DomainProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the domain.
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema' | string: This determines the format that Event Grid should expect for incoming events published to the domain.
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'.
* **metricResourceId**: string (ReadOnly): Metric resource id for the domain.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the domain.

## DomainSharedAccessKeys
### Properties
* **key1**: string (ReadOnly): Shared access key1 for the domain.
* **key2**: string (ReadOnly): Shared access key2 for the domain.

## DomainTopicProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the domain topic.

## EventHubEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.

## EventSubscriptionDestination
* **Discriminator**: endpointType

### Base Properties
### AzureFunctionEventSubscriptionDestination
#### Properties
* **endpointType**: 'AzureFunction' (Required): Type of the endpoint for the event subscription destination
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties): The properties that represent the Azure Function destination of an event subscription.

### EventHubEventSubscriptionDestination
#### Properties
* **endpointType**: 'EventHub' (Required): Type of the endpoint for the event subscription destination
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties): The properties for a event hub destination.

### HybridConnectionEventSubscriptionDestination
#### Properties
* **endpointType**: 'HybridConnection' (Required): Type of the endpoint for the event subscription destination
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties): The properties for a hybrid connection destination.

### ServiceBusQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required): Type of the endpoint for the event subscription destination
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties): The properties that represent the Service Bus destination of an event subscription.

### ServiceBusTopicEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusTopic' (Required): Type of the endpoint for the event subscription destination
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties): The properties that represent the Service Bus Topic destination of an event subscription.

### StorageQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'StorageQueue' (Required): Type of the endpoint for the event subscription destination
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties): The properties for a storage queue destination.

### WebHookEventSubscriptionDestination
#### Properties
* **endpointType**: 'WebHook' (Required): Type of the endpoint for the event subscription destination
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties): Information about the webhook destination properties for an event subscription.


## EventSubscriptionFilter
### Properties
* **advancedFilters**: [AdvancedFilter](#advancedfilter)[]: An array of advanced filters that are used for filtering event subscriptions.
* **includedEventTypes**: string[]: A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.
* **isSubjectCaseSensitive**: bool: Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter 
should be compared in a case sensitive manner.
* **subjectBeginsWith**: string: An optional string to filter events for an event subscription based on a resource path prefix.
The format of this depends on the publisher of the events. 
Wildcard characters are not supported in this path.
* **subjectEndsWith**: string: An optional string to filter events for an event subscription based on a resource path suffix.
Wildcard characters are not supported in this path.

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination): Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class.
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination): Information about the destination for an event subscription
* **eventDeliverySchema**: 'CloudEventSchemaV1_0' | 'CustomInputSchema' | 'EventGridSchema' | string: The event delivery schema for the event subscription.
* **expirationTimeUtc**: string: Expiration time of the event subscription.
* **filter**: [EventSubscriptionFilter](#eventsubscriptionfilter): Filter for the Event Subscription
* **labels**: string[]: List of user defined labels.
* **provisioningState**: 'AwaitingManualAction' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the event subscription.
* **retryPolicy**: [RetryPolicy](#retrypolicy): Information about the retry policy for an event subscription
* **topic**: string (ReadOnly): Name of the topic of the event subscription.

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource ID of an hybrid connection that is the destination of an event subscription.

## InputSchemaMapping
* **Discriminator**: inputSchemaMappingType

### Base Properties
### JsonInputSchemaMapping
#### Properties
* **inputSchemaMappingType**: 'Json' (Required): Type of the custom mapping
* **properties**: [JsonInputSchemaMappingProperties](#jsoninputschemamappingproperties): This can be used to map properties of a source schema (or default values, for certain supported properties) to properties of the EventGridEvent schema.


## JsonField
### Properties
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## JsonFieldWithDefault
### Properties
* **defaultValue**: string: The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## JsonInputSchemaMappingProperties
### Properties
* **dataVersion**: [JsonFieldWithDefault](#jsonfieldwithdefault): This is used to express the source of an input schema mapping for a single target field
in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
'eventtype' and 'dataversion' properties. This represents a field in the input event schema
along with a default value to be used, and at least one of these two properties should be provided.
* **eventTime**: [JsonField](#jsonfield): This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema.
* **eventType**: [JsonFieldWithDefault](#jsonfieldwithdefault): This is used to express the source of an input schema mapping for a single target field
in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
'eventtype' and 'dataversion' properties. This represents a field in the input event schema
along with a default value to be used, and at least one of these two properties should be provided.
* **id**: [JsonField](#jsonfield): This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema.
* **subject**: [JsonFieldWithDefault](#jsonfieldwithdefault): This is used to express the source of an input schema mapping for a single target field
in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
'eventtype' and 'dataversion' properties. This represents a field in the input event schema
along with a default value to be used, and at least one of these two properties should be provided.
* **topic**: [JsonField](#jsonfield): This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema.

## RetryPolicy
### Properties
* **eventTimeToLiveInMinutes**: int: Time To Live (in minutes) for events.
* **maxDeliveryAttempts**: int: Maximum number of delivery retry attempts for events.

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription.

## ServiceBusTopicEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription.

## StorageBlobDeadLetterDestinationProperties
### Properties
* **blobContainerName**: string: The name of the Storage blob container that is the destination of the deadletter events
* **resourceId**: string: The Azure Resource ID of the storage account that is the destination of the deadletter events

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueName**: string: The name of the Storage queue under a storage account that is the destination of an event subscription.
* **resourceId**: string: The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the topic.
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema' | string: This determines the format that Event Grid should expect for incoming events published to the domain.
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'.
* **metricResourceId**: string (ReadOnly): Metric resource id for the topic.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the topic.

## TopicSharedAccessKeys
### Properties
* **key1**: string (ReadOnly): Shared access key1 for the topic.
* **key2**: string (ReadOnly): Shared access key2 for the topic.

## TopicTypeProperties
### Properties
* **description**: string (ReadOnly): Description of the topic type.
* **displayName**: string (ReadOnly): Display Name for the topic type.
* **provider**: string (ReadOnly): Namespace of the provider of the topic type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the topic type
* **resourceRegionType**: 'GlobalResource' | 'RegionalResource' | string (ReadOnly): Region type of the resource.
* **supportedLocations**: string[] (ReadOnly): List of locations supported by this topic type.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebHookEventSubscriptionDestinationProperties
### Properties
* **azureActiveDirectoryApplicationIdOrUri**: string: The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
* **azureActiveDirectoryTenantId**: string: The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
* **endpointBaseUrl**: string (ReadOnly): The base URL that represents the endpoint of the destination of an event subscription.
* **endpointUrl**: string: The URL that represents the endpoint of the destination of an event subscription.
* **maxEventsPerBatch**: int: Maximum number of events per batch.
* **preferredBatchSizeInKilobytes**: int: Preferred batch size in Kilobytes.

