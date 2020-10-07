# Microsoft.ServiceBus @ 2015-08-01

## Microsoft.ServiceBus/namespaces/AuthorizationRules
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties
* **type**: 'Microsoft.ServiceBus/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## SharedAccessAuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## Microsoft.ServiceBus/namespaces/queues/authorizationRules
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties
* **type**: 'Microsoft.ServiceBus/namespaces/queues/authorizationRules' (ReadOnly, DeployTimeConstant)

## Microsoft.ServiceBus/namespaces/queues
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: QueueProperties
* **type**: 'Microsoft.ServiceBus/namespaces/queues' (ReadOnly, DeployTimeConstant)

## QueueProperties
### Properties
* **accessedAt**: string (ReadOnly)
* **autoDeleteOnIdle**: string
* **countDetails**: MessageCountDetails (ReadOnly)
* **createdAt**: string (ReadOnly)
* **deadLetteringOnMessageExpiration**: bool
* **defaultMessageTimeToLive**: string
* **duplicateDetectionHistoryTimeWindow**: string
* **enableBatchedOperations**: bool
* **enableExpress**: bool
* **enablePartitioning**: bool
* **entityAvailabilityStatus**: 'Available' | 'Limited' | 'Renaming' | 'Restoring' | 'Unknown'
* **isAnonymousAccessible**: bool
* **lockDuration**: string
* **maxDeliveryCount**: int
* **maxSizeInMegabytes**: int
* **messageCount**: int (ReadOnly)
* **requiresDuplicateDetection**: bool
* **requiresSession**: bool
* **sizeInBytes**: int (ReadOnly)
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **supportOrdering**: bool
* **updatedAt**: string (ReadOnly)

## MessageCountDetails
### Properties
* **activeMessageCount**: int (ReadOnly)
* **deadLetterMessageCount**: int (ReadOnly)
* **scheduledMessageCount**: int (ReadOnly)
* **transferDeadLetterMessageCount**: int (ReadOnly)
* **transferMessageCount**: int (ReadOnly)

## Microsoft.ServiceBus/namespaces/topics/authorizationRules
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties
* **type**: 'Microsoft.ServiceBus/namespaces/topics/authorizationRules' (ReadOnly, DeployTimeConstant)

## Microsoft.ServiceBus/namespaces/topics/subscriptions
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubscriptionProperties
* **type**: 'Microsoft.ServiceBus/namespaces/topics/subscriptions' (ReadOnly, DeployTimeConstant)

## SubscriptionProperties
### Properties
* **accessedAt**: string (ReadOnly)
* **autoDeleteOnIdle**: string
* **countDetails**: MessageCountDetails (ReadOnly)
* **createdAt**: string (ReadOnly)
* **deadLetteringOnFilterEvaluationExceptions**: bool
* **deadLetteringOnMessageExpiration**: bool
* **defaultMessageTimeToLive**: string
* **enableBatchedOperations**: bool
* **entityAvailabilityStatus**: 'Available' | 'Limited' | 'Renaming' | 'Restoring' | 'Unknown'
* **isReadOnly**: bool
* **lockDuration**: string
* **maxDeliveryCount**: int
* **messageCount**: int (ReadOnly)
* **requiresSession**: bool
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **updatedAt**: string (ReadOnly)

## Microsoft.ServiceBus/namespaces/topics
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TopicProperties
* **type**: 'Microsoft.ServiceBus/namespaces/topics' (ReadOnly, DeployTimeConstant)

## TopicProperties
### Properties
* **accessedAt**: string (ReadOnly)
* **autoDeleteOnIdle**: string
* **countDetails**: MessageCountDetails (ReadOnly)
* **createdAt**: string (ReadOnly)
* **defaultMessageTimeToLive**: string
* **duplicateDetectionHistoryTimeWindow**: string
* **enableBatchedOperations**: bool
* **enableExpress**: bool
* **enablePartitioning**: bool
* **entityAvailabilityStatus**: 'Available' | 'Limited' | 'Renaming' | 'Restoring' | 'Unknown'
* **filteringMessagesBeforePublishing**: bool
* **isAnonymousAccessible**: bool
* **isExpress**: bool
* **maxSizeInMegabytes**: int
* **requiresDuplicateDetection**: bool
* **sizeInBytes**: int (ReadOnly)
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **subscriptionCount**: int (ReadOnly)
* **supportOrdering**: bool
* **updatedAt**: string (ReadOnly)

## Microsoft.ServiceBus/namespaces
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NamespaceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceBus/namespaces' (ReadOnly, DeployTimeConstant)

## NamespaceProperties
### Properties
* **createACSNamespace**: bool
* **createdAt**: string (ReadOnly)
* **enabled**: bool
* **provisioningState**: string (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **status**: 'Activating' | 'Active' | 'Created' | 'Creating' | 'Disabled' | 'Disabling' | 'Enabling' | 'Failed' | 'Removed' | 'Removing' | 'SoftDeleted' | 'SoftDeleting' | 'Unknown'
* **updatedAt**: string (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'Premium' | 'Standard'
* **tier**: 'Basic' | 'Premium' | 'Standard' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

