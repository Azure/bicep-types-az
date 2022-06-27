# Microsoft.EventGrid @ 2017-09-15-preview

## Resource Microsoft.EventGrid/eventSubscriptions@2017-09-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the event subscription
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics@2017-09-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicProperties](#topicproperties): Properties of the topic
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topicTypes@2017-09-15-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicTypeProperties](#topictypeproperties) (ReadOnly): Properties of the topic type info
* **type**: 'Microsoft.EventGrid/topicTypes' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.EventGrid/topics@2017-09-15-preview)
* **Resource**: Microsoft.EventGrid/topics
* **ApiVersion**: 2017-09-15-preview
* **Output**: [TopicSharedAccessKeys](#topicsharedaccesskeys)

## EventHubEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.

## EventSubscriptionDestination
* **Discriminator**: endpointType

### Base Properties
### EventHubEventSubscriptionDestination
#### Properties
* **endpointType**: 'EventHub' (Required): Type of the endpoint for the event subscription destination
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties): Event Hub Properties of the event subscription destination

### WebHookEventSubscriptionDestination
#### Properties
* **endpointType**: 'WebHook' (Required): Type of the endpoint for the event subscription destination
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties): WebHook Properties of the event subscription destination


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

## EventSubscriptionProperties
### Properties
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination): Information about the destination where events have to be delivered for the event subscription.
* **filter**: [EventSubscriptionFilter](#eventsubscriptionfilter): Information about the filter for the event subscription.
* **labels**: string[]: List of user defined labels.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the event subscription.
* **topic**: string (ReadOnly): Name of the topic of the event subscription.

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly): Endpoint for the topic.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the topic.

## TopicSharedAccessKeys
### Properties
* **key1**: string: Shared access key1 for the topic.
* **key2**: string: Shared access key2 for the topic.

## TopicTypeProperties
### Properties
* **description**: string: Description of the topic type.
* **displayName**: string: Display Name for the topic type.
* **provider**: string: Namespace of the provider of the topic type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the topic type
* **resourceRegionType**: 'GlobalResource' | 'RegionalResource' | string: Region type of the resource.
* **supportedLocations**: string[]: List of locations supported by this topic type.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebHookEventSubscriptionDestinationProperties
### Properties
* **endpointBaseUrl**: string (ReadOnly): The base URL that represents the endpoint of the destination of an event subscription.
* **endpointUrl**: string: The URL that represents the endpoint of the destination of an event subscription.

