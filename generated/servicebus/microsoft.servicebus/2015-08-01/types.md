# Microsoft.ServiceBus @ 2015-08-01

## Resource Microsoft.ServiceBus/namespaces@2015-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Namespace location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): Properties of the namespace.
* **sku**: [Sku](#sku): SKU of the namespace.
* **tags**: [NamespaceCreateOrUpdateParametersTags](#namespacecreateorupdateparameterstags): Namespace tags.
* **type**: 'Microsoft.ServiceBus/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/AuthorizationRules@2015-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: data center location.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties): SharedAccessAuthorizationRule properties.
* **type**: 'Microsoft.ServiceBus/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/queues@2015-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): location of the resource.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [QueueProperties](#queueproperties): The Queue Properties definition.
* **type**: 'Microsoft.ServiceBus/namespaces/queues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/queues/authorizationRules@2015-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: data center location.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties): SharedAccessAuthorizationRule properties.
* **type**: 'Microsoft.ServiceBus/namespaces/queues/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/topics@2015-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [TopicProperties](#topicproperties): The Topic Properties definition.
* **type**: 'Microsoft.ServiceBus/namespaces/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/topics/authorizationRules@2015-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: data center location.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties): SharedAccessAuthorizationRule properties.
* **type**: 'Microsoft.ServiceBus/namespaces/topics/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/topics/subscriptions@2015-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Subscription data center location.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionProperties](#subscriptionproperties): Description of Subscription Resource.
* **type**: 'Microsoft.ServiceBus/namespaces/topics/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.ServiceBus/namespaces/AuthorizationRules@2015-08-01)
* **Resource**: Microsoft.ServiceBus/namespaces/AuthorizationRules
* **ApiVersion**: 2015-08-01
* **Output**: [ResourceListKeys](#resourcelistkeys)

## Function listKeys (Microsoft.ServiceBus/namespaces/queues/authorizationRules@2015-08-01)
* **Resource**: Microsoft.ServiceBus/namespaces/queues/authorizationRules
* **ApiVersion**: 2015-08-01
* **Output**: [ResourceListKeys](#resourcelistkeys)

## Function listKeys (Microsoft.ServiceBus/namespaces/topics/authorizationRules@2015-08-01)
* **Resource**: Microsoft.ServiceBus/namespaces/topics/authorizationRules
* **ApiVersion**: 2015-08-01
* **Output**: [ResourceListKeys](#resourcelistkeys)

## Function regenerateKeys (Microsoft.ServiceBus/namespaces/AuthorizationRules@2015-08-01)
* **Resource**: Microsoft.ServiceBus/namespaces/AuthorizationRules
* **ApiVersion**: 2015-08-01
* **Input**: [RegenerateKeysParameters](#regeneratekeysparameters)
* **Output**: [ResourceListKeys](#resourcelistkeys)

## Function regenerateKeys (Microsoft.ServiceBus/namespaces/queues/authorizationRules@2015-08-01)
* **Resource**: Microsoft.ServiceBus/namespaces/queues/authorizationRules
* **ApiVersion**: 2015-08-01
* **Input**: [RegenerateKeysParameters](#regeneratekeysparameters)
* **Output**: [ResourceListKeys](#resourcelistkeys)

## Function regenerateKeys (Microsoft.ServiceBus/namespaces/topics/authorizationRules@2015-08-01)
* **Resource**: Microsoft.ServiceBus/namespaces/topics/authorizationRules
* **ApiVersion**: 2015-08-01
* **Input**: [RegenerateKeysParameters](#regeneratekeysparameters)
* **Output**: [ResourceListKeys](#resourcelistkeys)

## MessageCountDetails
### Properties
* **activeMessageCount**: int (ReadOnly): Number of active messages in the queue, topic, or subscription.
* **deadLetterMessageCount**: int (ReadOnly): Number of messages that are dead lettered.
* **scheduledMessageCount**: int (ReadOnly): Number of scheduled messages.
* **transferDeadLetterMessageCount**: int (ReadOnly): Number of messages transferred into dead letters.
* **transferMessageCount**: int (ReadOnly): Number of messages transferred to another queue, topic, or subscription.

## NamespaceCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NamespaceProperties
### Properties
* **createACSNamespace**: bool: Indicates whether to create an ACS namespace.
* **createdAt**: string (ReadOnly): The time the namespace was created.
* **enabled**: bool: Specifies whether this instance is enabled.
* **provisioningState**: string (ReadOnly): Provisioning state of the namespace.
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **status**: 'Activating' | 'Active' | 'Created' | 'Creating' | 'Disabled' | 'Disabling' | 'Enabling' | 'Failed' | 'Removed' | 'Removing' | 'SoftDeleted' | 'SoftDeleting' | 'Unknown': State of the namespace.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.

## QueueProperties
### Properties
* **accessedAt**: string (ReadOnly): Last time a message was sent, or the last time there was a receive request to this queue.
* **autoDeleteOnIdle**: string: the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
* **countDetails**: [MessageCountDetails](#messagecountdetails) (ReadOnly): Message Count Details.
* **createdAt**: string (ReadOnly): The exact time the message was created.
* **deadLetteringOnMessageExpiration**: bool: A value that indicates whether this queue has dead letter support when a message expires.
* **defaultMessageTimeToLive**: string: The default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
* **duplicateDetectionHistoryTimeWindow**: string: TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
* **enableBatchedOperations**: bool: A value that indicates whether server-side batched operations are enabled.
* **enableExpress**: bool: A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
* **enablePartitioning**: bool: A value that indicates whether the queue is to be partitioned across multiple message brokers.
* **entityAvailabilityStatus**: 'Available' | 'Limited' | 'Renaming' | 'Restoring' | 'Unknown': Entity availability status for the queue.
* **isAnonymousAccessible**: bool: A value that indicates whether the message is accessible anonymously.
* **lockDuration**: string: The duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
* **maxDeliveryCount**: int: The maximum delivery count. A message is automatically deadlettered after this number of deliveries.
* **maxSizeInMegabytes**: int: The maximum size of the queue in megabytes, which is the size of memory allocated for the queue.
* **messageCount**: int (ReadOnly): The number of messages in the queue.
* **requiresDuplicateDetection**: bool: A value indicating if this queue requires duplicate detection.
* **requiresSession**: bool: A value that indicates whether the queue supports the concept of sessions.
* **sizeInBytes**: int (ReadOnly): The size of the queue, in bytes.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of a messaging entity.
* **supportOrdering**: bool: A value that indicates whether the queue supports ordering.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

## RegenerateKeysParameters
### Properties
* **Policykey**: 'PrimaryKey' | 'SecondaryKey': Key that needs to be regenerated.

## ResourceListKeys
### Properties
* **keyName**: string: A string that describes the authorization rule.
* **primaryConnectionString**: string: Primary connection string of the created namespace authorization rule.
* **primaryKey**: string: A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string: Secondary connection string of the created namespace authorization rule.
* **secondaryKey**: string: A base64-encoded 256-bit primary key for signing and validating the SAS token.

## SharedAccessAuthorizationRuleProperties
### Properties
* **rights**: ('Listen' | 'Manage' | 'Send')[] (Required): The rights associated with the rule.

## Sku
### Properties
* **capacity**: int: The specified messaging units for the tier.
* **name**: 'Basic' | 'Premium' | 'Standard' | string: Name of this SKU.
* **tier**: 'Basic' | 'Premium' | 'Standard' | string (Required): The billing tier of this particular SKU.

## SubscriptionProperties
### Properties
* **accessedAt**: string (ReadOnly): Last time there was a receive request to this subscription.
* **autoDeleteOnIdle**: string: TimeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
* **countDetails**: [MessageCountDetails](#messagecountdetails) (ReadOnly): Message Count Details.
* **createdAt**: string (ReadOnly): Exact time the message was created.
* **deadLetteringOnFilterEvaluationExceptions**: bool: Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
* **deadLetteringOnMessageExpiration**: bool: Value that indicates whether a subscription has dead letter support when a message expires.
* **defaultMessageTimeToLive**: string: Default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
* **enableBatchedOperations**: bool: Value that indicates whether server-side batched operations are enabled.
* **entityAvailabilityStatus**: 'Available' | 'Limited' | 'Renaming' | 'Restoring' | 'Unknown': Entity availability status for the topic.
* **isReadOnly**: bool: Value that indicates whether the entity description is read-only.
* **lockDuration**: string: The lock duration time span for the subscription.
* **maxDeliveryCount**: int: Number of maximum deliveries.
* **messageCount**: int (ReadOnly): Number of messages.
* **requiresSession**: bool: Value indicating if a subscription supports the concept of sessions.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of a messaging entity.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

## TopicProperties
### Properties
* **accessedAt**: string (ReadOnly): Last time the message was sent, or a request was received, for this topic.
* **autoDeleteOnIdle**: string: TimeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
* **countDetails**: [MessageCountDetails](#messagecountdetails) (ReadOnly): Message Count Details.
* **createdAt**: string (ReadOnly): Exact time the message was created.
* **defaultMessageTimeToLive**: string: Default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
* **duplicateDetectionHistoryTimeWindow**: string: TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
* **enableBatchedOperations**: bool: Value that indicates whether server-side batched operations are enabled.
* **enableExpress**: bool: Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
* **enablePartitioning**: bool: Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
* **entityAvailabilityStatus**: 'Available' | 'Limited' | 'Renaming' | 'Restoring' | 'Unknown': Entity availability status for the topic.
* **filteringMessagesBeforePublishing**: bool: Whether messages should be filtered before publishing.
* **isAnonymousAccessible**: bool: Value that indicates whether the message is accessible anonymously.
* **isExpress**: bool
* **maxSizeInMegabytes**: int: Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic.
* **requiresDuplicateDetection**: bool: Value indicating if this topic requires duplicate detection.
* **sizeInBytes**: int (ReadOnly): Size of the topic, in bytes.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of a messaging entity.
* **subscriptionCount**: int (ReadOnly): Number of subscriptions.
* **supportOrdering**: bool: Value that indicates whether the topic supports ordering.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

