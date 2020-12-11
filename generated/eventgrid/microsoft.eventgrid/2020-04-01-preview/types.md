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
* **tags**: Dictionary<string,String>
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
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerNamespaces@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PartnerNamespaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EventGrid/partnerNamespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerNamespaces/eventChannels@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventChannelProperties
* **type**: 'Microsoft.EventGrid/partnerNamespaces/eventChannels' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerRegistrations@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PartnerRegistrationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EventGrid/partnerRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/partnerTopics/eventSubscriptions@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventSubscriptionProperties
* **type**: 'Microsoft.EventGrid/partnerTopics/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/systemTopics@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SystemTopicProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EventGrid/systemTopics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/systemTopics/eventSubscriptions@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventSubscriptionProperties
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
* **tags**: Dictionary<string,String>
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
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserIdentityProperties>

## Dictionary<string,UserIdentityProperties>
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
### Json
#### Properties
* **inputSchemaMappingType**: 'Json' (Required)
* **properties**: JsonInputSchemaMappingProperties


## Json
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

## Dictionary<string,String>
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
### StorageBlob
#### Properties
* **endpointType**: 'StorageBlob' (Required)
* **properties**: StorageBlobDeadLetterDestinationProperties


## StorageBlob
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
### AzureFunction
#### Properties
* **endpointType**: 'AzureFunction' (Required)
* **properties**: AzureFunctionEventSubscriptionDestinationProperties

### EventHub
#### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: EventHubEventSubscriptionDestinationProperties

### HybridConnection
#### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: HybridConnectionEventSubscriptionDestinationProperties

### ServiceBusQueue
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: ServiceBusQueueEventSubscriptionDestinationProperties

### ServiceBusTopic
#### Properties
* **endpointType**: 'ServiceBusTopic' (Required)
* **properties**: ServiceBusTopicEventSubscriptionDestinationProperties

### StorageQueue
#### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: StorageQueueEventSubscriptionDestinationProperties

### WebHook
#### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: WebHookEventSubscriptionDestinationProperties


## AzureFunction
### Properties
* **endpointType**: 'AzureFunction' (Required)
* **properties**: AzureFunctionEventSubscriptionDestinationProperties

## AzureFunctionEventSubscriptionDestinationProperties
### Properties
* **maxEventsPerBatch**: int
* **preferredBatchSizeInKilobytes**: int
* **resourceId**: string

## EventHub
### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: EventHubEventSubscriptionDestinationProperties

## EventHubEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## HybridConnection
### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: HybridConnectionEventSubscriptionDestinationProperties

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## ServiceBusQueue
### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: ServiceBusQueueEventSubscriptionDestinationProperties

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## ServiceBusTopic
### Properties
* **endpointType**: 'ServiceBusTopic' (Required)
* **properties**: ServiceBusTopicEventSubscriptionDestinationProperties

## ServiceBusTopicEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## StorageQueue
### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: StorageQueueEventSubscriptionDestinationProperties

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueName**: string
* **resourceId**: string

## WebHook
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
### BoolEquals
#### Properties
* **operatorType**: 'BoolEquals' (Required)
* **value**: bool

### NumberGreaterThan
#### Properties
* **operatorType**: 'NumberGreaterThan' (Required)
* **value**: int

### NumberGreaterThanOrEquals
#### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required)
* **value**: int

### NumberIn
#### Properties
* **operatorType**: 'NumberIn' (Required)
* **values**: int[]

### NumberLessThan
#### Properties
* **operatorType**: 'NumberLessThan' (Required)
* **value**: int

### NumberLessThanOrEquals
#### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required)
* **value**: int

### NumberNotIn
#### Properties
* **operatorType**: 'NumberNotIn' (Required)
* **values**: int[]

### StringBeginsWith
#### Properties
* **operatorType**: 'StringBeginsWith' (Required)
* **values**: string[]

### StringContains
#### Properties
* **operatorType**: 'StringContains' (Required)
* **values**: string[]

### StringEndsWith
#### Properties
* **operatorType**: 'StringEndsWith' (Required)
* **values**: string[]

### StringIn
#### Properties
* **operatorType**: 'StringIn' (Required)
* **values**: string[]

### StringNotIn
#### Properties
* **operatorType**: 'StringNotIn' (Required)
* **values**: string[]


## BoolEquals
### Properties
* **operatorType**: 'BoolEquals' (Required)
* **value**: bool

## NumberGreaterThan
### Properties
* **operatorType**: 'NumberGreaterThan' (Required)
* **value**: int

## NumberGreaterThanOrEquals
### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required)
* **value**: int

## NumberIn
### Properties
* **operatorType**: 'NumberIn' (Required)
* **values**: int[]

## NumberLessThan
### Properties
* **operatorType**: 'NumberLessThan' (Required)
* **value**: int

## NumberLessThanOrEquals
### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required)
* **value**: int

## NumberNotIn
### Properties
* **operatorType**: 'NumberNotIn' (Required)
* **values**: int[]

## StringBeginsWith
### Properties
* **operatorType**: 'StringBeginsWith' (Required)
* **values**: string[]

## StringContains
### Properties
* **operatorType**: 'StringContains' (Required)
* **values**: string[]

## StringEndsWith
### Properties
* **operatorType**: 'StringEndsWith' (Required)
* **values**: string[]

## StringIn
### Properties
* **operatorType**: 'StringIn' (Required)
* **values**: string[]

## StringNotIn
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

## Dictionary<string,String>
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## SystemTopicProperties
### Properties
* **metricResourceId**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: string
* **topicType**: string

## Dictionary<string,String>
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

