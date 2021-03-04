# Microsoft.EventGrid @ 2020-04-01-preview

## Resource Microsoft.EventGrid/domains@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityInfo
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DomainProperties
* **sku**: ResourceSku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/domains/privateEndpointConnections@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.EventGrid/domains/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/eventSubscriptions@2020-04-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventSubscriptionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerNamespaces@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PartnerNamespaceProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventGrid/partnerNamespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerNamespaces/eventChannels@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventChannelProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.EventGrid/partnerNamespaces/eventChannels' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerRegistrations@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PartnerRegistrationProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventGrid/partnerRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerTopics/eventSubscriptions@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventSubscriptionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.EventGrid/partnerTopics/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/systemTopics@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SystemTopicProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventGrid/systemTopics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/systemTopics/eventSubscriptions@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventSubscriptionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.EventGrid/systemTopics/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityInfo
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TopicProperties
* **sku**: ResourceSku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics/privateEndpointConnections@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.EventGrid/topics/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## IdentityInfo
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: IdentityInfoUserAssignedIdentities

## IdentityInfoUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: UserIdentityProperties

## UserIdentityProperties
### Properties
* **clientId**: string
* **principalId**: string

## DomainProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inboundIpRules**: InboundIpRule[]
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: InputSchemaMapping
* **metricResourceId**: string (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnection[]
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
* **properties**: JsonInputSchemaMappingProperties


## JsonInputSchemaMapping
### Properties
* **inputSchemaMappingType**: 'Json' (Required)
* **properties**: JsonInputSchemaMappingProperties

## JsonInputSchemaMappingProperties
### Properties
* **dataVersion**: JsonFieldWithDefault
* **eventTime**: JsonField
* **eventType**: JsonFieldWithDefault
* **id**: JsonField
* **subject**: JsonFieldWithDefault
* **topic**: JsonField

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
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: ConnectionState
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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: DeadLetterDestination
* **deadLetterWithResourceIdentity**: DeadLetterWithResourceIdentity
* **deliveryWithResourceIdentity**: DeliveryWithResourceIdentity
* **destination**: EventSubscriptionDestination
* **eventDeliverySchema**: 'CloudEventSchemaV1_0' | 'CustomInputSchema' | 'EventGridSchema'
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

## DeadLetterWithResourceIdentity
### Properties
* **deadLetterDestination**: DeadLetterDestination
* **identity**: EventSubscriptionIdentity

## EventSubscriptionIdentity
### Properties
* **type**: 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentity**: string

## DeliveryWithResourceIdentity
### Properties
* **destination**: EventSubscriptionDestination
* **identity**: EventSubscriptionIdentity

## EventSubscriptionDestination
* **Discriminator**: endpointType

### Base Properties
### AzureFunctionEventSubscriptionDestination
#### Properties
* **endpointType**: 'AzureFunction' (Required)
* **properties**: AzureFunctionEventSubscriptionDestinationProperties

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

### ServiceBusTopicEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusTopic' (Required)
* **properties**: ServiceBusTopicEventSubscriptionDestinationProperties

### StorageQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: StorageQueueEventSubscriptionDestinationProperties

### WebHookEventSubscriptionDestination
#### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: WebHookEventSubscriptionDestinationProperties


## AzureFunctionEventSubscriptionDestination
### Properties
* **endpointType**: 'AzureFunction' (Required)
* **properties**: AzureFunctionEventSubscriptionDestinationProperties

## AzureFunctionEventSubscriptionDestinationProperties
### Properties
* **maxEventsPerBatch**: int
* **preferredBatchSizeInKilobytes**: int
* **resourceId**: string

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

## ServiceBusTopicEventSubscriptionDestination
### Properties
* **endpointType**: 'ServiceBusTopic' (Required)
* **properties**: ServiceBusTopicEventSubscriptionDestinationProperties

## ServiceBusTopicEventSubscriptionDestinationProperties
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
* **azureActiveDirectoryApplicationIdOrUri**: string
* **azureActiveDirectoryTenantId**: string
* **endpointBaseUrl**: string (ReadOnly)
* **endpointUrl**: string
* **maxEventsPerBatch**: int
* **preferredBatchSizeInKilobytes**: int

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

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

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
* **destination**: EventChannelDestination
* **expirationTimeIfNotActivatedUtc**: string
* **filter**: EventChannelFilter
* **partnerTopicFriendlyDescription**: string
* **partnerTopicReadinessState**: 'ActivatedByUser' | 'DeactivatedByUser' | 'DeletedByUser' | 'NotActivatedByUserYet' (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: EventChannelSource

## EventChannelDestination
### Properties
* **azureSubscriptionId**: string
* **partnerTopicName**: string
* **resourceGroup**: string

## EventChannelFilter
### Properties
* **advancedFilters**: AdvancedFilter[]

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

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inboundIpRules**: InboundIpRule[]
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: InputSchemaMapping
* **metricResourceId**: string (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnection[]
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

