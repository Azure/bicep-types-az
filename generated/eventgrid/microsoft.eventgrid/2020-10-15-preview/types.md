# Microsoft.EventGrid @ 2020-10-15-preview

## Resource Microsoft.EventGrid/domains@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityInfo](#identityinfo): The identity information for the resource.
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainProperties](#domainproperties): Properties of the Domain.
* **sku**: [ResourceSku](#resourcesku): Describes an EventGrid Resource Sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/privateEndpointConnections@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection resource.
* **type**: 'Microsoft.EventGrid/domains/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/topics@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainTopicProperties](#domaintopicproperties) (ReadOnly): Properties of the Domain Topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventGrid/domains/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/eventSubscriptions@2020-10-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the Event Subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/extensionTopics@2020-10-15-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionTopicProperties](#extensiontopicproperties) (ReadOnly): Properties of the Extension Topic
* **type**: 'Microsoft.EventGrid/extensionTopics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerNamespaces@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerNamespaceProperties](#partnernamespaceproperties): Properties of the partner namespace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/partnerNamespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerNamespaces/eventChannels@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventChannelProperties](#eventchannelproperties): Properties of the Event Channel.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventGrid/partnerNamespaces/eventChannels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerRegistrations@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerRegistrationProperties](#partnerregistrationproperties): Properties of the partner registration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/partnerRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerTopics@2020-10-15-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityInfo](#identityinfo) (ReadOnly): The identity information for the resource.
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerTopicProperties](#partnertopicproperties) (ReadOnly): Properties of the Partner Topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Tags of the resource.
* **type**: 'Microsoft.EventGrid/partnerTopics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerTopics/eventSubscriptions@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the Event Subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventGrid/partnerTopics/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/systemTopics@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityInfo](#identityinfo): The identity information for the resource.
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SystemTopicProperties](#systemtopicproperties): Properties of the System Topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/systemTopics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/systemTopics/eventSubscriptions@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the Event Subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventGrid/systemTopics/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Definition of an Extended Location
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityInfo](#identityinfo): The identity information for the resource.
* **kind**: 'Azure' | 'AzureArc': Kind of the resource.
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicProperties](#topicproperties): Properties of the Topic
* **sku**: [ResourceSku](#resourcesku): Describes an EventGrid Resource Sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics/privateEndpointConnections@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection resource.
* **type**: 'Microsoft.EventGrid/topics/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topicTypes@2020-10-15-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicTypeProperties](#topictypeproperties) (ReadOnly): Properties of a topic type.
* **type**: 'Microsoft.EventGrid/topicTypes' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.EventGrid/domains@2020-10-15-preview)
* **Resource**: Microsoft.EventGrid/domains
* **ApiVersion**: 2020-10-15-preview
* **Output**: [DomainSharedAccessKeys](#domainsharedaccesskeys)

## Function listKeys (Microsoft.EventGrid/partnerNamespaces@2020-10-15-preview)
* **Resource**: Microsoft.EventGrid/partnerNamespaces
* **ApiVersion**: 2020-10-15-preview
* **Output**: [PartnerNamespaceSharedAccessKeys](#partnernamespacesharedaccesskeys)

## Function listKeys (Microsoft.EventGrid/topics@2020-10-15-preview)
* **Resource**: Microsoft.EventGrid/topics
* **ApiVersion**: 2020-10-15-preview
* **Output**: [TopicSharedAccessKeys](#topicsharedaccesskeys)

## IdentityInfo
### Properties
* **principalId**: string: The principal ID of resource identity.
* **tenantId**: string: The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
* **userAssignedIdentities**: [IdentityInfoUserAssignedIdentities](#identityinfouserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
This property is currently not used and reserved for future usage.

## IdentityInfoUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## UserIdentityProperties
### Properties
* **clientId**: string: The client id of user assigned identity.
* **principalId**: string: The principal id of user assigned identity.

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
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />

## InboundIpRule
### Properties
* **action**: 'Allow': Action to perform based on the match or no match of the IpMask.
* **ipMask**: string: IP Address in CIDR notation e.g., 10.0.0.0/8.

## InputSchemaMapping
* **Discriminator**: inputSchemaMappingType

### Base Properties
### JsonInputSchemaMapping
#### Properties
* **inputSchemaMappingType**: 'Json' (Required): Type of the custom mapping
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

## ResourceSku
### Properties
* **name**: 'Basic' | 'Premium': The Sku name of the resource. The possible values are: Basic or Premium.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DomainTopicProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the domain topic.

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination): Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class.
* **deadLetterWithResourceIdentity**: [DeadLetterWithResourceIdentity](#deadletterwithresourceidentity): Information about the deadletter destination with resource identity.
* **deliveryWithResourceIdentity**: [DeliveryWithResourceIdentity](#deliverywithresourceidentity): Information about the delivery for an event subscription with resource identity.
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
### StorageBlobDeadLetterDestination
#### Properties
* **endpointType**: 'StorageBlob' (Required): Type of the endpoint for the dead letter destination
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties): Properties of the storage blob based dead letter destination.


## StorageBlobDeadLetterDestinationProperties
### Properties
* **blobContainerName**: string: The name of the Storage blob container that is the destination of the deadletter events
* **resourceId**: string: The Azure Resource ID of the storage account that is the destination of the deadletter events

## DeadLetterWithResourceIdentity
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination): Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class.
* **identity**: [EventSubscriptionIdentity](#eventsubscriptionidentity): The identity information with the event subscription.

## EventSubscriptionIdentity
### Properties
* **type**: 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
* **userAssignedIdentity**: string: The user identity associated with the resource.

## DeliveryWithResourceIdentity
### Properties
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination): Information about the destination for an event subscription.
* **identity**: [EventSubscriptionIdentity](#eventsubscriptionidentity): The identity information with the event subscription.

## EventSubscriptionDestination
* **Discriminator**: endpointType

### Base Properties
### AzureFunctionEventSubscriptionDestination
#### Properties
* **endpointType**: 'AzureFunction' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties): The properties that represent the Azure Function destination of an event subscription.

### EventHubEventSubscriptionDestination
#### Properties
* **endpointType**: 'EventHub' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties): The properties for a event hub destination.

### HybridConnectionEventSubscriptionDestination
#### Properties
* **endpointType**: 'HybridConnection' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties): The properties for a hybrid connection destination.

### ServiceBusQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties): The properties that represent the Service Bus destination of an event subscription.

### ServiceBusTopicEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusTopic' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties): The properties that represent the Service Bus Topic destination of an event subscription.

### StorageQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'StorageQueue' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties): The properties for a storage queue destination.

### WebHookEventSubscriptionDestination
#### Properties
* **endpointType**: 'WebHook' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties): Information about the webhook destination properties for an event subscription.


## AzureFunctionEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **maxEventsPerBatch**: int: Maximum number of events per batch.
* **preferredBatchSizeInKilobytes**: int: Preferred batch size in Kilobytes.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription.

## DeliveryAttributeMapping
* **Discriminator**: type

### Base Properties
* **name**: string: Name of the delivery attribute or header.
### DynamicDeliveryAttributeMapping
#### Properties
* **properties**: [DynamicDeliveryAttributeMappingProperties](#dynamicdeliveryattributemappingproperties): Properties of dynamic delivery attribute mapping.
* **type**: 'Dynamic' (Required): Type of the delivery attribute or header name.

### StaticDeliveryAttributeMapping
#### Properties
* **properties**: [StaticDeliveryAttributeMappingProperties](#staticdeliveryattributemappingproperties): Properties of static delivery attribute mapping.
* **type**: 'Static' (Required): Type of the delivery attribute or header name.


## DynamicDeliveryAttributeMappingProperties
### Properties
* **sourceField**: string: JSON path in the event which contains attribute value.

## StaticDeliveryAttributeMappingProperties
### Properties
* **isSecret**: bool: Boolean flag to tell if the attribute contains sensitive information .
* **value**: string: Value of the delivery attribute.

## EventHubEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **resourceId**: string: The Azure Resource ID of an hybrid connection that is the destination of an event subscription.

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription.

## ServiceBusTopicEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription.

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueMessageTimeToLiveInSeconds**: int: Storage queue message time to live in seconds.
* **queueName**: string: The name of the Storage queue under a storage account that is the destination of an event subscription.
* **resourceId**: string: The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.

## WebHookEventSubscriptionDestinationProperties
### Properties
* **azureActiveDirectoryApplicationIdOrUri**: string: The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
* **azureActiveDirectoryTenantId**: string: The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **endpointBaseUrl**: string (ReadOnly): The base URL that represents the endpoint of the destination of an event subscription.
* **endpointUrl**: string: The URL that represents the endpoint of the destination of an event subscription.
* **maxEventsPerBatch**: int: Maximum number of events per batch.
* **preferredBatchSizeInKilobytes**: int: Preferred batch size in Kilobytes.

## EventSubscriptionFilter
### Properties
* **advancedFilters**: [AdvancedFilter](#advancedfilter)[]: An array of advanced filters that are used for filtering event subscriptions.
* **enableAdvancedFilteringOnArrays**: bool: Allows advanced filters to be evaluated against an array of values instead of expecting a singular value.
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
### BoolEqualsAdvancedFilter
#### Properties
* **operatorType**: 'BoolEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: bool: The boolean filter value.

### IsNotNullAdvancedFilter
#### Properties
* **operatorType**: 'IsNotNull' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### IsNullOrUndefinedAdvancedFilter
#### Properties
* **operatorType**: 'IsNullOrUndefined' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

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

### NumberInRangeAdvancedFilter
#### Properties
* **operatorType**: 'NumberInRange' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[][]: The set of filter values.

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

### NumberNotInRangeAdvancedFilter
#### Properties
* **operatorType**: 'NumberNotInRange' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[][]: The set of filter values.

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

### StringNotBeginsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringNotBeginsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotContainsAdvancedFilter
#### Properties
* **operatorType**: 'StringNotContains' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotEndsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringNotEndsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotInAdvancedFilter
#### Properties
* **operatorType**: 'StringNotIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.


## RetryPolicy
### Properties
* **eventTimeToLiveInMinutes**: int: Time To Live (in minutes) for events.
* **maxDeliveryAttempts**: int: Maximum number of delivery retry attempts for events.

## ExtensionTopicProperties
### Properties
* **description**: string (ReadOnly): Description of the extension topic.
* **systemTopic**: string (ReadOnly): System topic resource id which is mapped to the source.

## PartnerNamespaceProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the partner namespace.
* **partnerRegistrationFullyQualifiedId**: string: The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format:
/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the partner namespace.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventChannelProperties
### Properties
* **destination**: [EventChannelDestination](#eventchanneldestination): Properties of the destination of an event channel.
* **expirationTimeIfNotActivatedUtc**: string: Expiration time of the event channel. If this timer expires while the corresponding partner topic is never activated,
the event channel and corresponding partner topic are deleted.
* **filter**: [EventChannelFilter](#eventchannelfilter): Filter for the Event Channel.
* **partnerTopicFriendlyDescription**: string: Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
* **partnerTopicReadinessState**: 'ActivatedByUser' | 'DeactivatedByUser' | 'DeletedByUser' | 'NotActivatedByUserYet' (ReadOnly): The readiness state of the corresponding partner topic.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the event channel.
* **source**: [EventChannelSource](#eventchannelsource): Properties of the source of an event channel.

## EventChannelDestination
### Properties
* **azureSubscriptionId**: string: Azure subscription ID of the customer creating the event channel. The partner topic
associated with the event channel will be created under this Azure subscription.
* **partnerTopicName**: string: Name of the partner topic associated with the event channel.
* **resourceGroup**: string: Azure Resource Group of the customer creating the event channel. The partner topic
associated with the event channel will be created under this resource group.

## EventChannelFilter
### Properties
* **advancedFilters**: [AdvancedFilter](#advancedfilter)[]: An array of advanced filters that are used for filtering event channels.
* **enableAdvancedFilteringOnArrays**: bool: Allows advanced filters to be evaluated against an array of values instead of expecting a singular value.

## EventChannelSource
### Properties
* **source**: string: The identifier of the resource that's the source of the events.
This represents a unique resource in the partner's resource model.

## PartnerRegistrationProperties
### Properties
* **authorizedAzureSubscriptionIds**: string[]: List of Azure subscription Ids that are authorized to create a partner namespace
associated with this partner registration. This is an optional property. Creating
partner namespaces is always permitted under the same Azure subscription as the one used
for creating the partner registration.
* **customerServiceUri**: string: The extension of the customer service URI of the publisher.
* **logoUri**: string: URI of the logo.
* **longDescription**: string: Long description for the custom scenarios and integration to be displayed in the portal if needed.
Length of this description should not exceed 2048 characters.
* **partnerCustomerServiceExtension**: string: The extension of the customer service number of the publisher. Only digits are allowed and number of digits should not exceed 10.
* **partnerCustomerServiceNumber**: string: The customer service number of the publisher. The expected phone format should start with a '+' sign 
followed by the country code. The remaining digits are then followed. Only digits and spaces are allowed and its
length cannot exceed 16 digits including country code. Examples of valid phone numbers are: +1 515 123 4567 and
+966 7 5115 2471. Examples of invalid phone numbers are: +1 (515) 123-4567, 1 515 123 4567 and +966 121 5115 24 7 551 1234 43
* **partnerName**: string: Official name of the partner name. For example: "Contoso".
* **partnerResourceTypeDescription**: string: Short description of the partner resource type. The length of this description should not exceed 256 characters.
* **partnerResourceTypeDisplayName**: string: Display name of the partner resource type.
* **partnerResourceTypeName**: string: Name of the partner resource type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the partner registration.
* **setupUri**: string: URI of the partner website that can be used by Azure customers to setup Event Grid
integration on an event source.
* **visibilityState**: 'GenerallyAvailable' | 'Hidden' | 'PublicPreview': Visibility state of the partner registration.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PartnerTopicProperties
### Properties
* **activationState**: 'Activated' | 'Deactivated' | 'NeverActivated' (ReadOnly): Activation state of the partner topic.
* **expirationTimeIfNotActivatedUtc**: string (ReadOnly): Expiration time of the partner topic. If this timer expires while the partner topic is still never activated,
the partner topic and corresponding event channel are deleted.
* **partnerTopicFriendlyDescription**: string (ReadOnly): Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the partner topic.
* **source**: string (ReadOnly): Source associated with this partner topic. This represents a unique partner resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemTopicProperties
### Properties
* **metricResourceId**: string (ReadOnly): Metric resource id for the system topic.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the Private Endpoint Connection.
* **source**: string: Source for the system topic.
* **topicType**: string: TopicType for the system topic.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtendedLocation
### Properties
* **name**: string: Fully qualified name of the extended location.
* **type**: string: Type of the extended location.

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the topic.
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]: This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema': This determines the format that Event Grid should expect for incoming events published to the domain.
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'.
* **metricResourceId**: string (ReadOnly): Metric resource id for the topic.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Array of PrivateEndpointConnection
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the topic.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': This determines if traffic is allowed over public network. By default it is enabled. 
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TopicTypeProperties
### Properties
* **description**: string (ReadOnly): Description of the topic type.
* **displayName**: string (ReadOnly): Display Name for the topic type.
* **provider**: string (ReadOnly): Namespace of the provider of the topic type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the topic type
* **resourceRegionType**: 'GlobalResource' | 'RegionalResource' (ReadOnly): Region type of the resource.
* **sourceResourceFormat**: string (ReadOnly): Source resource format.
* **supportedLocations**: string[] (ReadOnly): List of locations supported by this topic type.
* **supportedScopesForSource**: 'AzureSubscription' | 'Resource' | 'ResourceGroup'[] (ReadOnly): Supported source scopes.

## DomainSharedAccessKeys
### Properties
* **key1**: string (ReadOnly): Shared access key1 for the domain.
* **key2**: string (ReadOnly): Shared access key2 for the domain.

## PartnerNamespaceSharedAccessKeys
### Properties
* **key1**: string (ReadOnly): Shared access key1 for the partner namespace.
* **key2**: string (ReadOnly): Shared access key2 for the partner namespace.

## TopicSharedAccessKeys
### Properties
* **key1**: string (ReadOnly): Shared access key1 for the topic.
* **key2**: string (ReadOnly): Shared access key2 for the topic.

