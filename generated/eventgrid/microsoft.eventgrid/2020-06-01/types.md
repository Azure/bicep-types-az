# Microsoft.EventGrid @ 2020-06-01

## Resource Microsoft.EventGrid/domains@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainProperties](#domainproperties): Properties of the Domain.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags of the resource.
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection resource.
* **type**: 'Microsoft.EventGrid/domains/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/topics@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainTopicProperties](#domaintopicproperties) (ReadOnly): Properties of the Domain Topic.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventGrid/domains/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/eventSubscriptions@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the Event Subscription.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicProperties](#topicproperties): Properties of the Topic
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags of the resource.
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection resource.
* **type**: 'Microsoft.EventGrid/topics/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## DomainProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the domain.
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]: This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema': This determines the format that Event Grid should expect for incoming events published to the domain.
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'.
* **metricResourceId**: string (ReadOnly): Metric resource id for the domain.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the domain.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': This determines if traffic is allowed over public network. By default it is enabled.
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />.

## InboundIpRule
### Properties
* **action**: 'Allow': Action to perform based on the match or no match of the IpMask.
* **ipMask**: string: IP Address in CIDR notation e.g., 10.0.0.0/8.

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

## JsonFieldWithDefault
### Properties
* **defaultValue**: string: The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## JsonField
### Properties
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified identifier of the resource.
* **name**: string (ReadOnly): Name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection resource.
* **type**: string (ReadOnly): Type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: GroupIds from the private link service resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): PrivateEndpoint information.
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate): ConnectionState information.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': Provisioning state of the Private Endpoint Connection.

## PrivateEndpoint
### Properties
* **id**: string: The ARM identifier for Private Endpoint.

## ConnectionState
### Properties
* **actionsRequired**: string: Actions required (if any).
* **description**: string: Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': Status of the connection.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DomainTopicProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the domain topic.

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination): Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class.
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination): Information about the destination for an event subscription.
* **eventDeliverySchema**: 'CloudEventSchemaV1_0' | 'CustomInputSchema' | 'EventGridSchema': The event delivery schema for the event subscription.
* **expirationTimeUtc**: string: Expiration time of the event subscription.
* **filter**: [EventSubscriptionFilter](#eventsubscriptionfilter): Filter for the Event Subscription.
* **labels**: string[]: List of user defined labels.
* **provisioningState**: 'AwaitingManualAction' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the event subscription.
* **retryPolicy**: [RetryPolicy](#retrypolicy): Information about the retry policy for an event subscription.
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
### AzureFunction
#### Properties
* **endpointType**: 'AzureFunction' (Required): Information about the azure function destination for an event subscription.
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties): The properties that represent the Azure Function destination of an event subscription.

### EventHub
#### Properties
* **endpointType**: 'EventHub' (Required): Information about the event hub destination for an event subscription.
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties): The properties for a event hub destination.

### HybridConnection
#### Properties
* **endpointType**: 'HybridConnection' (Required): Information about the HybridConnection destination for an event subscription.
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties): The properties for a hybrid connection destination.

### ServiceBusQueue
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required): Information about the service bus destination for an event subscription.
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties): The properties that represent the Service Bus destination of an event subscription.

### ServiceBusTopic
#### Properties
* **endpointType**: 'ServiceBusTopic' (Required): Information about the service bus topic destination for an event subscription.
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties): The properties that represent the Service Bus Topic destination of an event subscription.

### StorageQueue
#### Properties
* **endpointType**: 'StorageQueue' (Required): Information about the storage queue destination for an event subscription.
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties): The properties for a storage queue destination.

### WebHook
#### Properties
* **endpointType**: 'WebHook' (Required): Information about the webhook destination for an event subscription.
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties): Information about the webhook destination properties for an event subscription.


## AzureFunction
### Properties
* **endpointType**: 'AzureFunction' (Required): Information about the azure function destination for an event subscription.
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties): The properties that represent the Azure Function destination of an event subscription.

## AzureFunctionEventSubscriptionDestinationProperties
### Properties
* **maxEventsPerBatch**: int: Maximum number of events per batch.
* **preferredBatchSizeInKilobytes**: int: Preferred batch size in Kilobytes.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription.

## EventHub
### Properties
* **endpointType**: 'EventHub' (Required): Information about the event hub destination for an event subscription.
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

## ServiceBusQueue
### Properties
* **endpointType**: 'ServiceBusQueue' (Required): Information about the service bus destination for an event subscription.
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties): The properties that represent the Service Bus destination of an event subscription.

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription.

## ServiceBusTopic
### Properties
* **endpointType**: 'ServiceBusTopic' (Required): Information about the service bus topic destination for an event subscription.
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties): The properties that represent the Service Bus Topic destination of an event subscription.

## ServiceBusTopicEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription.

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
* **endpointType**: 'WebHook' (Required): Information about the webhook destination for an event subscription.
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties): Information about the webhook destination properties for an event subscription.

## WebHookEventSubscriptionDestinationProperties
### Properties
* **azureActiveDirectoryApplicationIdOrUri**: string: The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
* **azureActiveDirectoryTenantId**: string: The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
* **endpointBaseUrl**: string (ReadOnly): The base URL that represents the endpoint of the destination of an event subscription.
* **endpointUrl**: string: The URL that represents the endpoint of the destination of an event subscription.
* **maxEventsPerBatch**: int: Maximum number of events per batch.
* **preferredBatchSizeInKilobytes**: int: Preferred batch size in Kilobytes.

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

## AdvancedFilter
* **Discriminator**: operatorType
### Base Properties
* **key**: string: The field/property in the event based on which you want to filter.
### BoolEquals
#### Properties
* **operatorType**: 'BoolEquals' (Required): BoolEquals Advanced Filter.
* **value**: bool: The boolean filter value.

### NumberGreaterThan
#### Properties
* **operatorType**: 'NumberGreaterThan' (Required): NumberGreaterThan Advanced Filter.
* **value**: int: The filter value.

### NumberGreaterThanOrEquals
#### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required): NumberGreaterThanOrEquals Advanced Filter.
* **value**: int: The filter value.

### NumberIn
#### Properties
* **operatorType**: 'NumberIn' (Required): NumberIn Advanced Filter.
* **values**: int[]: The set of filter values.

### NumberLessThan
#### Properties
* **operatorType**: 'NumberLessThan' (Required): NumberLessThan Advanced Filter.
* **value**: int: The filter value.

### NumberLessThanOrEquals
#### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required): NumberLessThanOrEquals Advanced Filter.
* **value**: int: The filter value.

### NumberNotIn
#### Properties
* **operatorType**: 'NumberNotIn' (Required): NumberNotIn Advanced Filter.
* **values**: int[]: The set of filter values.

### StringBeginsWith
#### Properties
* **operatorType**: 'StringBeginsWith' (Required): StringBeginsWith Advanced Filter.
* **values**: string[]: The set of filter values.

### StringContains
#### Properties
* **operatorType**: 'StringContains' (Required): StringContains Advanced Filter.
* **values**: string[]: The set of filter values.

### StringEndsWith
#### Properties
* **operatorType**: 'StringEndsWith' (Required): StringEndsWith Advanced Filter.
* **values**: string[]: The set of filter values.

### StringIn
#### Properties
* **operatorType**: 'StringIn' (Required): StringIn Advanced Filter.
* **values**: string[]: The set of filter values.

### StringNotIn
#### Properties
* **operatorType**: 'StringNotIn' (Required): StringNotIn Advanced Filter.
* **values**: string[]: The set of filter values.


## BoolEquals
### Properties
* **operatorType**: 'BoolEquals' (Required): BoolEquals Advanced Filter.
* **value**: bool: The boolean filter value.

## NumberGreaterThan
### Properties
* **operatorType**: 'NumberGreaterThan' (Required): NumberGreaterThan Advanced Filter.
* **value**: int: The filter value.

## NumberGreaterThanOrEquals
### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required): NumberGreaterThanOrEquals Advanced Filter.
* **value**: int: The filter value.

## NumberIn
### Properties
* **operatorType**: 'NumberIn' (Required): NumberIn Advanced Filter.
* **values**: int[]: The set of filter values.

## NumberLessThan
### Properties
* **operatorType**: 'NumberLessThan' (Required): NumberLessThan Advanced Filter.
* **value**: int: The filter value.

## NumberLessThanOrEquals
### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required): NumberLessThanOrEquals Advanced Filter.
* **value**: int: The filter value.

## NumberNotIn
### Properties
* **operatorType**: 'NumberNotIn' (Required): NumberNotIn Advanced Filter.
* **values**: int[]: The set of filter values.

## StringBeginsWith
### Properties
* **operatorType**: 'StringBeginsWith' (Required): StringBeginsWith Advanced Filter.
* **values**: string[]: The set of filter values.

## StringContains
### Properties
* **operatorType**: 'StringContains' (Required): StringContains Advanced Filter.
* **values**: string[]: The set of filter values.

## StringEndsWith
### Properties
* **operatorType**: 'StringEndsWith' (Required): StringEndsWith Advanced Filter.
* **values**: string[]: The set of filter values.

## StringIn
### Properties
* **operatorType**: 'StringIn' (Required): StringIn Advanced Filter.
* **values**: string[]: The set of filter values.

## StringNotIn
### Properties
* **operatorType**: 'StringNotIn' (Required): StringNotIn Advanced Filter.
* **values**: string[]: The set of filter values.

## RetryPolicy
### Properties
* **eventTimeToLiveInMinutes**: int: Time To Live (in minutes) for events.
* **maxDeliveryAttempts**: int: Maximum number of delivery retry attempts for events.

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the topic.
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]: This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema': This determines the format that Event Grid should expect for incoming events published to the topic.
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'.
* **metricResourceId**: string (ReadOnly): Metric resource id for the topic.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly):
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the topic.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': This determines if traffic is allowed over public network. By default it is enabled.
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

