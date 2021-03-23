# Microsoft.EventGrid @ 2020-10-15-preview

## Resource Microsoft.EventGrid/domains@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityInfo](#identityinfo)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DomainProperties](#domainproperties)
* **sku**: [ResourceSku](#resourcesku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/domains/privateEndpointConnections@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.EventGrid/domains/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/domains/topics@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DomainTopicProperties](#domaintopicproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.EventGrid/domains/topics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/eventSubscriptions@2020-10-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerNamespaces@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PartnerNamespaceProperties](#partnernamespaceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.EventGrid/partnerNamespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerNamespaces/eventChannels@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventChannelProperties](#eventchannelproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.EventGrid/partnerNamespaces/eventChannels' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerRegistrations@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PartnerRegistrationProperties](#partnerregistrationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.EventGrid/partnerRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerTopics/eventSubscriptions@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.EventGrid/partnerTopics/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/systemTopics@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityInfo](#identityinfo)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SystemTopicProperties](#systemtopicproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.EventGrid/systemTopics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/systemTopics/eventSubscriptions@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.EventGrid/systemTopics/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **extendedLocation**: [ExtendedLocation](#extendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityInfo](#identityinfo)
* **kind**: 'Azure' | 'AzureArc'
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TopicProperties](#topicproperties)
* **sku**: [ResourceSku](#resourcesku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics/privateEndpointConnections@2020-10-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.EventGrid/topics/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## IdentityInfo
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [IdentityInfoUserAssignedIdentities](#identityinfouserassignedidentities)

## IdentityInfoUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## UserIdentityProperties
### Properties
* **clientId**: string
* **principalId**: string

## DomainProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping)
* **metricResourceId**: string (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## InboundIpRule
### Properties
* **action**: 'Allow'
* **ipMask**: string

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

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## PrivateEndpoint
### Properties
* **id**: string

## ConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## ResourceSku
### Properties
* **name**: 'Basic' | 'Premium'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

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
* **deadLetterWithResourceIdentity**: [DeadLetterWithResourceIdentity](#deadletterwithresourceidentity)
* **deliveryWithResourceIdentity**: [DeliveryWithResourceIdentity](#deliverywithresourceidentity)
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

## DeadLetterWithResourceIdentity
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination)
* **identity**: [EventSubscriptionIdentity](#eventsubscriptionidentity)

## EventSubscriptionIdentity
### Properties
* **type**: 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentity**: string

## DeliveryWithResourceIdentity
### Properties
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination)
* **identity**: [EventSubscriptionIdentity](#eventsubscriptionidentity)

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
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]
* **maxEventsPerBatch**: int
* **preferredBatchSizeInKilobytes**: int
* **resourceId**: string

## DeliveryAttributeMapping
* **Discriminator**: type

### Base Properties
* **name**: string
### DynamicDeliveryAttributeMapping
#### Properties
* **properties**: [DynamicDeliveryAttributeMappingProperties](#dynamicdeliveryattributemappingproperties)
* **type**: 'Dynamic' (Required)

### StaticDeliveryAttributeMapping
#### Properties
* **properties**: [StaticDeliveryAttributeMappingProperties](#staticdeliveryattributemappingproperties)
* **type**: 'Static' (Required)


## DynamicDeliveryAttributeMapping
### Properties
* **properties**: [DynamicDeliveryAttributeMappingProperties](#dynamicdeliveryattributemappingproperties)
* **type**: 'Dynamic' (Required)

## DynamicDeliveryAttributeMappingProperties
### Properties
* **sourceField**: string

## StaticDeliveryAttributeMapping
### Properties
* **properties**: [StaticDeliveryAttributeMappingProperties](#staticdeliveryattributemappingproperties)
* **type**: 'Static' (Required)

## StaticDeliveryAttributeMappingProperties
### Properties
* **isSecret**: bool
* **value**: string

## EventHubEventSubscriptionDestination
### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)

## EventHubEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]
* **resourceId**: string

## HybridConnectionEventSubscriptionDestination
### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties)

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]
* **resourceId**: string

## ServiceBusQueueEventSubscriptionDestination
### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties)

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]
* **resourceId**: string

## ServiceBusTopicEventSubscriptionDestination
### Properties
* **endpointType**: 'ServiceBusTopic' (Required)
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties)

## ServiceBusTopicEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]
* **resourceId**: string

## StorageQueueEventSubscriptionDestination
### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties)

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueMessageTimeToLiveInSeconds**: int
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
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]
* **endpointBaseUrl**: string (ReadOnly)
* **endpointUrl**: string
* **maxEventsPerBatch**: int
* **preferredBatchSizeInKilobytes**: int

## EventSubscriptionFilter
### Properties
* **advancedFilters**: [AdvancedFilter](#advancedfilter)[]
* **enableAdvancedFilteringOnArrays**: bool
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

### IsNotNullAdvancedFilter
#### Properties
* **operatorType**: 'IsNotNull' (Required)

### IsNullOrUndefinedAdvancedFilter
#### Properties
* **operatorType**: 'IsNullOrUndefined' (Required)

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

### NumberInRangeAdvancedFilter
#### Properties
* **operatorType**: 'NumberInRange' (Required)
* **values**: int[][]

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

### NumberNotInRangeAdvancedFilter
#### Properties
* **operatorType**: 'NumberNotInRange' (Required)
* **values**: int[][]

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

### StringNotBeginsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringNotBeginsWith' (Required)
* **values**: string[]

### StringNotContainsAdvancedFilter
#### Properties
* **operatorType**: 'StringNotContains' (Required)
* **values**: string[]

### StringNotEndsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringNotEndsWith' (Required)
* **values**: string[]

### StringNotInAdvancedFilter
#### Properties
* **operatorType**: 'StringNotIn' (Required)
* **values**: string[]


## BoolEqualsAdvancedFilter
### Properties
* **operatorType**: 'BoolEquals' (Required)
* **value**: bool

## IsNotNullAdvancedFilter
### Properties
* **operatorType**: 'IsNotNull' (Required)

## IsNullOrUndefinedAdvancedFilter
### Properties
* **operatorType**: 'IsNullOrUndefined' (Required)

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

## NumberInRangeAdvancedFilter
### Properties
* **operatorType**: 'NumberInRange' (Required)
* **values**: int[][]

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

## NumberNotInRangeAdvancedFilter
### Properties
* **operatorType**: 'NumberNotInRange' (Required)
* **values**: int[][]

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

## StringNotBeginsWithAdvancedFilter
### Properties
* **operatorType**: 'StringNotBeginsWith' (Required)
* **values**: string[]

## StringNotContainsAdvancedFilter
### Properties
* **operatorType**: 'StringNotContains' (Required)
* **values**: string[]

## StringNotEndsWithAdvancedFilter
### Properties
* **operatorType**: 'StringNotEndsWith' (Required)
* **values**: string[]

## StringNotInAdvancedFilter
### Properties
* **operatorType**: 'StringNotIn' (Required)
* **values**: string[]

## RetryPolicy
### Properties
* **eventTimeToLiveInMinutes**: int
* **maxDeliveryAttempts**: int

## PartnerNamespaceProperties
### Properties
* **endpoint**: string (ReadOnly)
* **partnerRegistrationFullyQualifiedId**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventChannelProperties
### Properties
* **destination**: [EventChannelDestination](#eventchanneldestination)
* **expirationTimeIfNotActivatedUtc**: string
* **filter**: [EventChannelFilter](#eventchannelfilter)
* **partnerTopicFriendlyDescription**: string
* **partnerTopicReadinessState**: 'ActivatedByUser' | 'DeactivatedByUser' | 'DeletedByUser' | 'NotActivatedByUserYet' (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: [EventChannelSource](#eventchannelsource)

## EventChannelDestination
### Properties
* **azureSubscriptionId**: string
* **partnerTopicName**: string
* **resourceGroup**: string

## EventChannelFilter
### Properties
* **advancedFilters**: [AdvancedFilter](#advancedfilter)[]
* **enableAdvancedFilteringOnArrays**: bool

## EventChannelSource
### Properties
* **source**: string

## PartnerRegistrationProperties
### Properties
* **authorizedAzureSubscriptionIds**: string[]
* **customerServiceUri**: string
* **logoUri**: string
* **longDescription**: string
* **partnerCustomerServiceExtension**: string
* **partnerCustomerServiceNumber**: string
* **partnerName**: string
* **partnerResourceTypeDescription**: string
* **partnerResourceTypeDisplayName**: string
* **partnerResourceTypeName**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **setupUri**: string
* **visibilityState**: 'GenerallyAvailable' | 'Hidden' | 'PublicPreview'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemTopicProperties
### Properties
* **metricResourceId**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: string
* **topicType**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtendedLocation
### Properties
* **name**: string
* **type**: string

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping)
* **metricResourceId**: string (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

