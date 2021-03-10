# Microsoft.EventGrid @ 2018-09-15-preview

## Resource Microsoft.EventGrid/domains@2018-09-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DomainProperties](#domainproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/eventSubscriptions@2018-09-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-09-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties)
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics@2018-09-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TopicProperties](#topicproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant)

## DomainProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inputSchema**: 'CloudEventV01Schema' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination)
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination)
* **eventDeliverySchema**: 'CloudEventV01Schema' | 'CustomInputSchema' | 'EventGridSchema'
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
### EventHub
#### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)

### HybridConnection
#### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties)

### StorageQueue
#### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties)

### WebHook
#### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties)


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
* **endpointBaseUrl**: string (ReadOnly)
* **endpointUrl**: string

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
* **inputSchema**: 'CloudEventV01Schema' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

