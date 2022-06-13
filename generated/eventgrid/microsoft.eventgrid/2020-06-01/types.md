# Microsoft.EventGrid @ 2020-06-01

## Resource Microsoft.EventGrid/domains@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainProperties](#domainproperties): Properties of the domain.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Domain resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **type**: 'Microsoft.EventGrid/domains/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/topics@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainTopicProperties](#domaintopicproperties) (ReadOnly): Properties of the Domain Topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Domain Topic resource.
* **type**: 'Microsoft.EventGrid/domains/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/eventSubscriptions@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the event subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Event Subscription resource.
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicProperties](#topicproperties): Properties of the topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Topic resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **type**: 'Microsoft.EventGrid/topics/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.EventGrid/domains@2020-06-01)
* **Resource**: Microsoft.EventGrid/domains
* **ApiVersion**: 2020-06-01
* **Output**: [DomainSharedAccessKeys](#domainsharedaccesskeys)

## Function listKeys (Microsoft.EventGrid/topics@2020-06-01)
* **Resource**: Microsoft.EventGrid/topics
* **ApiVersion**: 2020-06-01
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

## ConnectionState
### Properties
* **actionsRequired**: string: Actions required (if any).
* **description**: string: Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Status of the connection.

## DeadLetterDestination
* **Discriminator**: endpointType

### Base Properties
### StorageBlobDeadLetterDestination
#### Properties
* **endpointType**: 'StorageBlob' (Required): Type of the endpoint for the dead letter destination
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties): The properties of the Storage Blob based deadletter destination


## DomainProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the domain.
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]: This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema' | string: This determines the format that Event Grid should expect for incoming events published to the domain.
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): Information about the InputSchemaMapping which specified the info about mapping event payload.
* **metricResourceId**: string (ReadOnly): Metric resource id for the domain.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the domain.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: This determines if traffic is allowed over public network. By default it is enabled. 
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />

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
* **endpointType**: 'AzureFunction' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties): Azure Function Properties of the event subscription destination.

### EventHubEventSubscriptionDestination
#### Properties
* **endpointType**: 'EventHub' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties): Event Hub Properties of the event subscription destination.

### HybridConnectionEventSubscriptionDestination
#### Properties
* **endpointType**: 'HybridConnection' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties): Hybrid connection Properties of the event subscription destination.

### ServiceBusQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties): Service Bus Properties of the event subscription destination.

### ServiceBusTopicEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusTopic' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties): Service Bus Topic Properties of the event subscription destination.

### StorageQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'StorageQueue' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties): Storage Queue Properties of the event subscription destination.

### WebHookEventSubscriptionDestination
#### Properties
* **endpointType**: 'WebHook' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties): WebHook Properties of the event subscription destination.


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
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination): The DeadLetter destination of the event subscription.
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination): Information about the destination where events have to be delivered for the event subscription.
* **eventDeliverySchema**: 'CloudEventSchemaV1_0' | 'CustomInputSchema' | 'EventGridSchema' | string: The event delivery schema for the event subscription.
* **expirationTimeUtc**: string: Expiration time of the event subscription.
* **filter**: [EventSubscriptionFilter](#eventsubscriptionfilter): Information about the filter for the event subscription.
* **labels**: string[]: List of user defined labels.
* **provisioningState**: 'AwaitingManualAction' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the event subscription.
* **retryPolicy**: [RetryPolicy](#retrypolicy): The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
* **topic**: string (ReadOnly): Name of the topic of the event subscription.

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource ID of an hybrid connection that is the destination of an event subscription.

## InboundIpRule
### Properties
* **action**: 'Allow' | string: Action to perform based on the match or no match of the IpMask.
* **ipMask**: string: IP Address in CIDR notation e.g., 10.0.0.0/8.

## InputSchemaMapping
* **Discriminator**: inputSchemaMappingType

### Base Properties
### JsonInputSchemaMapping
#### Properties
* **inputSchemaMappingType**: 'Json' (Required): Type of the custom mapping
* **properties**: [JsonInputSchemaMappingProperties](#jsoninputschemamappingproperties): JSON Properties of the input schema mapping


## JsonField
### Properties
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## JsonFieldWithDefault
### Properties
* **defaultValue**: string: The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## JsonInputSchemaMappingProperties
### Properties
* **dataVersion**: [JsonFieldWithDefault](#jsonfieldwithdefault): The mapping information for the DataVersion property of the Event Grid Event.
* **eventTime**: [JsonField](#jsonfield): The mapping information for the EventTime property of the Event Grid Event.
* **eventType**: [JsonFieldWithDefault](#jsonfieldwithdefault): The mapping information for the EventType property of the Event Grid Event.
* **id**: [JsonField](#jsonfield): The mapping information for the Id property of the Event Grid Event.
* **subject**: [JsonFieldWithDefault](#jsonfieldwithdefault): The mapping information for the Subject property of the Event Grid Event.
* **topic**: [JsonField](#jsonfield): The mapping information for the Topic property of the Event Grid Event.

## PrivateEndpoint
### Properties
* **id**: string: The ARM identifier for Private Endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified identifier of the resource.
* **name**: string (ReadOnly): Name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **type**: string (ReadOnly): Type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: GroupIds from the private link service resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource for this Connection.
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate): Details about the state of the connection.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the Private Endpoint Connection.

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

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the topic.
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]: This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema' | string: This determines the format that Event Grid should expect for incoming events published to the topic.
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
* **metricResourceId**: string (ReadOnly): Metric resource id for the topic.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the topic.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: This determines if traffic is allowed over public network. By default it is enabled. 
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />

## TopicSharedAccessKeys
### Properties
* **key1**: string (ReadOnly): Shared access key1 for the topic.
* **key2**: string (ReadOnly): Shared access key2 for the topic.

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

