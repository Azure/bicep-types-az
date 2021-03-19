# Microsoft.ServiceBus @ 2018-01-01-preview

## Resource Microsoft.ServiceBus/namespaces@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SBNamespaceProperties](#sbnamespaceproperties)
* **sku**: [SBSku](#sbsku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ServiceBus/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/AuthorizationRules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:22_properties](#schemas22properties)
* **type**: 'Microsoft.ServiceBus/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:28_properties](#schemas28properties)
* **type**: 'Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/ipfilterrules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:0_properties](#schemas0properties)
* **type**: 'Microsoft.ServiceBus/namespaces/ipfilterrules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/migrationConfigurations@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:48_properties](#schemas48properties)
* **type**: 'Microsoft.ServiceBus/namespaces/migrationConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/networkRuleSets@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:45_properties](#schemas45properties)
* **type**: 'Microsoft.ServiceBus/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/privateEndpointConnections@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.ServiceBus/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/queues@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SBQueueProperties](#sbqueueproperties)
* **type**: 'Microsoft.ServiceBus/namespaces/queues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/queues/authorizationRules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:22_properties](#schemas22properties)
* **type**: 'Microsoft.ServiceBus/namespaces/queues/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/topics@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SBTopicProperties](#sbtopicproperties)
* **type**: 'Microsoft.ServiceBus/namespaces/topics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/topics/authorizationRules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:22_properties](#schemas22properties)
* **type**: 'Microsoft.ServiceBus/namespaces/topics/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/topics/subscriptions@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SBSubscriptionProperties](#sbsubscriptionproperties)
* **type**: 'Microsoft.ServiceBus/namespaces/topics/subscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Ruleproperties](#ruleproperties)
* **type**: 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceBus/namespaces/virtualnetworkrules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:19_properties](#schemas19properties)
* **type**: 'Microsoft.ServiceBus/namespaces/virtualnetworkrules' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'SystemAssigned'

## SBNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly)
* **encryption**: [Encryption](#encryption)
* **metricId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **zoneRedundant**: bool

## Encryption
### Properties
* **keySource**: 'Microsoft.KeyVault'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)

## KeyVaultProperties
### Properties
* **keyName**: string
* **keyVaultUri**: string

## SBSku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'Premium' | 'Standard' (Required)
* **tier**: 'Basic' | 'Premium' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:22_properties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## schemas:28_properties
### Properties
* **alternateName**: string
* **partnerNamespace**: string
* **pendingReplicationOperationsCount**: int (ReadOnly)
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly)
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly)

## schemas:0_properties
### Properties
* **action**: 'Accept' | 'Reject'
* **filterName**: string
* **ipMask**: string

## schemas:48_properties
### Properties
* **migrationState**: string (ReadOnly)
* **pendingReplicationOperationsCount**: int (ReadOnly)
* **postMigrationName**: string (Required)
* **provisioningState**: string (ReadOnly)
* **targetNamespace**: string (Required)

## schemas:45_properties
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]
* **virtualNetworkRules**: [NWRuleSetVirtualNetworkRules](#nwrulesetvirtualnetworkrules)[]

## NWRuleSetIpRules
### Properties
* **action**: 'Allow'
* **ipMask**: string

## NWRuleSetVirtualNetworkRules
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **subnet**: [Subnet](#subnet)

## Subnet
### Properties
* **id**: string (Required)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## PrivateEndpoint
### Properties
* **id**: string

## ConnectionState
### Properties
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## SBQueueProperties
### Properties
* **accessedAt**: string (ReadOnly)
* **autoDeleteOnIdle**: string
* **countDetails**: [MessageCountDetails](#messagecountdetails) (ReadOnly)
* **createdAt**: string (ReadOnly)
* **deadLetteringOnMessageExpiration**: bool
* **defaultMessageTimeToLive**: string
* **duplicateDetectionHistoryTimeWindow**: string
* **enableBatchedOperations**: bool
* **enableExpress**: bool
* **enablePartitioning**: bool
* **forwardDeadLetteredMessagesTo**: string
* **forwardTo**: string
* **lockDuration**: string
* **maxDeliveryCount**: int
* **maxSizeInMegabytes**: int
* **messageCount**: int (ReadOnly)
* **requiresDuplicateDetection**: bool
* **requiresSession**: bool
* **sizeInBytes**: int (ReadOnly)
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **updatedAt**: string (ReadOnly)

## MessageCountDetails
### Properties
* **activeMessageCount**: int (ReadOnly)
* **deadLetterMessageCount**: int (ReadOnly)
* **scheduledMessageCount**: int (ReadOnly)
* **transferDeadLetterMessageCount**: int (ReadOnly)
* **transferMessageCount**: int (ReadOnly)

## SBTopicProperties
### Properties
* **accessedAt**: string (ReadOnly)
* **autoDeleteOnIdle**: string
* **countDetails**: [MessageCountDetails](#messagecountdetails) (ReadOnly)
* **createdAt**: string (ReadOnly)
* **defaultMessageTimeToLive**: string
* **duplicateDetectionHistoryTimeWindow**: string
* **enableBatchedOperations**: bool
* **enableExpress**: bool
* **enablePartitioning**: bool
* **maxSizeInMegabytes**: int
* **requiresDuplicateDetection**: bool
* **sizeInBytes**: int (ReadOnly)
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **subscriptionCount**: int (ReadOnly)
* **supportOrdering**: bool
* **updatedAt**: string (ReadOnly)

## SBSubscriptionProperties
### Properties
* **accessedAt**: string (ReadOnly)
* **autoDeleteOnIdle**: string
* **countDetails**: [MessageCountDetails](#messagecountdetails) (ReadOnly)
* **createdAt**: string (ReadOnly)
* **deadLetteringOnFilterEvaluationExceptions**: bool
* **deadLetteringOnMessageExpiration**: bool
* **defaultMessageTimeToLive**: string
* **duplicateDetectionHistoryTimeWindow**: string
* **enableBatchedOperations**: bool
* **forwardDeadLetteredMessagesTo**: string
* **forwardTo**: string
* **lockDuration**: string
* **maxDeliveryCount**: int
* **messageCount**: int (ReadOnly)
* **requiresSession**: bool
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **updatedAt**: string (ReadOnly)

## Ruleproperties
### Properties
* **action**: [Action](#action)
* **correlationFilter**: [CorrelationFilter](#correlationfilter)
* **filterType**: 'CorrelationFilter' | 'SqlFilter'
* **sqlFilter**: [SqlFilter](#sqlfilter)

## Action
### Properties
* **compatibilityLevel**: int
* **requiresPreprocessing**: bool
* **sqlExpression**: string

## CorrelationFilter
### Properties
* **contentType**: string
* **correlationId**: string
* **label**: string
* **messageId**: string
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **replyTo**: string
* **replyToSessionId**: string
* **requiresPreprocessing**: bool
* **sessionId**: string
* **to**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlFilter
### Properties
* **compatibilityLevel**: int
* **requiresPreprocessing**: bool
* **sqlExpression**: string

## schemas:19_properties
### Properties
* **virtualNetworkSubnetId**: string

