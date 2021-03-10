# Microsoft.EventGrid @ 2020-06-01

## Resource Microsoft.EventGrid/domains@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DomainProperties](#domainproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/domains/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.EventGrid/domains/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/domains/topics@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DomainTopicProperties](#domaintopicproperties) (ReadOnly)
* **type**: 'Microsoft.EventGrid/domains/topics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/eventSubscriptions@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties)
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TopicProperties](#topicproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.EventGrid/topics/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## DomainProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping)
* **metricResourceId**: string (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
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
* **properties**: [JsonInputSchemaMappingProperties](#jsoninputschemamappingproperties)


## Json
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DomainTopicProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination)
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
### StorageBlob
#### Properties
* **endpointType**: 'StorageBlob' (Required)
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties)


## StorageBlob
### Properties
* **endpointType**: 'StorageBlob' (Required)
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties)

## StorageBlobDeadLetterDestinationProperties
### Properties
* **blobContainerName**: string
* **resourceId**: string

## EventSubscriptionDestination
* **Discriminator**: endpointType
### Base Properties
### AzureFunction
#### Properties
* **endpointType**: 'AzureFunction' (Required)
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties)

### EventHub
#### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)

### HybridConnection
#### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties)

### ServiceBusQueue
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties)

### ServiceBusTopic
#### Properties
* **endpointType**: 'ServiceBusTopic' (Required)
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties)

### StorageQueue
#### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties)

### WebHook
#### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties)


## AzureFunction
### Properties
* **endpointType**: 'AzureFunction' (Required)
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties)

## AzureFunctionEventSubscriptionDestinationProperties
### Properties
* **maxEventsPerBatch**: int
* **preferredBatchSizeInKilobytes**: int
* **resourceId**: string

## EventHub
### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)

## EventHubEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## HybridConnection
### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties)

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## ServiceBusQueue
### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties)

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## ServiceBusTopic
### Properties
* **endpointType**: 'ServiceBusTopic' (Required)
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties)

## ServiceBusTopicEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## StorageQueue
### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties)

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueName**: string
* **resourceId**: string

## WebHook
### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties)

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
* **advancedFilters**: [AdvancedFilter](#advancedfilter)[]
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

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping)
* **metricResourceId**: string (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

