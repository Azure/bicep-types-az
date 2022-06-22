# Microsoft.ServiceBus @ 2021-11-01

## Resource Microsoft.ServiceBus/namespaces@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Properties of BYOK Identity description
* **location**: string (Required): The Geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SBNamespaceProperties](#sbnamespaceproperties): Properties of the namespace.
* **sku**: [SBSku](#sbsku): Properties of SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags
* **type**: 'Microsoft.ServiceBus/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/AuthorizationRules@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SBAuthorizationRuleProperties](#sbauthorizationruleproperties): AuthorizationRule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArmDisasterRecoveryProperties](#armdisasterrecoveryproperties): Properties required to the Create Or Update Alias(Disaster Recovery configurations)
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/authorizationRules@2021-11-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SBAuthorizationRuleProperties](#sbauthorizationruleproperties) (ReadOnly): AuthorizationRule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/migrationConfigurations@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: '$default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationConfigPropertiesProperties](#migrationconfigpropertiesproperties): Properties required to the Create Migration Configuration
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/migrationConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/networkRuleSets@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkRuleSetProperties](#networkrulesetproperties): NetworkRuleSet properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/privateEndpointConnections@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/queues@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SBQueueProperties](#sbqueueproperties): Queue Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/queues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/queues/authorizationRules@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SBAuthorizationRuleProperties](#sbauthorizationruleproperties): AuthorizationRule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/queues/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/topics@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SBTopicProperties](#sbtopicproperties): Properties of topic resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/topics/authorizationRules@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SBAuthorizationRuleProperties](#sbauthorizationruleproperties): AuthorizationRule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/topics/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/topics/subscriptions@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SBSubscriptionProperties](#sbsubscriptionproperties): Properties of subscriptions resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/topics/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Ruleproperties](#ruleproperties): Properties of Rule resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.ServiceBus/namespaces/AuthorizationRules@2021-11-01)
* **Resource**: Microsoft.ServiceBus/namespaces/AuthorizationRules
* **ApiVersion**: 2021-11-01
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/authorizationRules@2021-11-01)
* **Resource**: Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/authorizationRules
* **ApiVersion**: 2021-11-01
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.ServiceBus/namespaces/queues/authorizationRules@2021-11-01)
* **Resource**: Microsoft.ServiceBus/namespaces/queues/authorizationRules
* **ApiVersion**: 2021-11-01
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.ServiceBus/namespaces/topics/authorizationRules@2021-11-01)
* **Resource**: Microsoft.ServiceBus/namespaces/topics/authorizationRules
* **ApiVersion**: 2021-11-01
* **Output**: [AccessKeys](#accesskeys)

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the authorization rule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace authorization rule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace authorization rule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the authorization rule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace authorization rule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace authorization rule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the authorization rule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace authorization rule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace authorization rule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the authorization rule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace authorization rule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace authorization rule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## Action
### Properties
* **compatibilityLevel**: int: This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
* **requiresPreprocessing**: bool: Value that indicates whether the rule action requires preprocessing.
* **sqlExpression**: string: SQL expression. e.g. MyProperty='ABC'

## ArmDisasterRecoveryProperties
### Properties
* **alternateName**: string: Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
* **partnerNamespace**: string: ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
* **pendingReplicationOperationsCount**: int (ReadOnly): Number of entities pending to be replicated.
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly): role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'

## ConnectionState
### Properties
* **description**: string: Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Status of the connection.

## CorrelationFilter
### Properties
* **contentType**: string: Content type of the message.
* **correlationId**: string: Identifier of the correlation.
* **label**: string: Application specific label.
* **messageId**: string: Identifier of the message.
* **properties**: [CorrelationFilterProperties](#correlationfilterproperties): dictionary object for custom filters
* **replyTo**: string: Address of the queue to reply to.
* **replyToSessionId**: string: Session identifier to reply to.
* **requiresPreprocessing**: bool: Value that indicates whether the rule action requires preprocessing.
* **sessionId**: string: Session identifier.
* **to**: string: Address to send to.

## CorrelationFilterProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Encryption
### Properties
* **keySource**: 'Microsoft.KeyVault': Enumerates the possible value of keySource for Encryption
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)[]: Properties of KeyVault
* **requireInfrastructureEncryption**: bool: Enable Infrastructure Encryption (Double Encryption)

## Identity
### Properties
* **principalId**: string (ReadOnly): ObjectId from the KeyVault
* **tenantId**: string (ReadOnly): TenantId from the KeyVault
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': Type of managed service identity.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): Properties for User Assigned Identities

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## KeyVaultProperties
### Properties
* **identity**: [UserAssignedIdentityProperties](#userassignedidentityproperties)
* **keyName**: string: Name of the Key from KeyVault
* **keyVaultUri**: string: Uri of KeyVault
* **keyVersion**: string: Version of KeyVault

## MessageCountDetails
### Properties
* **activeMessageCount**: int (ReadOnly): Number of active messages in the queue, topic, or subscription.
* **deadLetterMessageCount**: int (ReadOnly): Number of messages that are dead lettered.
* **scheduledMessageCount**: int (ReadOnly): Number of scheduled messages.
* **transferDeadLetterMessageCount**: int (ReadOnly): Number of messages transferred into dead letters.
* **transferMessageCount**: int (ReadOnly): Number of messages transferred to another queue, topic, or subscription.

## MigrationConfigPropertiesProperties
### Properties
* **migrationState**: string (ReadOnly): State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
* **pendingReplicationOperationsCount**: int (ReadOnly): Number of entities pending to be replicated.
* **postMigrationName**: string (Required): Name to access Standard Namespace after migration
* **provisioningState**: string (ReadOnly): Provisioning state of Migration Configuration
* **targetNamespace**: string (Required): Existing premium Namespace ARM Id name which has no entities, will be used for migration

## NetworkRuleSetProperties
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: Default Action for Network Rule Set
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]: List of IpRules
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: This determines if traffic is allowed over public network. By default it is enabled.
* **trustedServiceAccessEnabled**: bool: Value that indicates whether Trusted Service Access is Enabled or not.
* **virtualNetworkRules**: [NWRuleSetVirtualNetworkRules](#nwrulesetvirtualnetworkrules)[]: List VirtualNetwork Rules

## NWRuleSetIpRules
### Properties
* **action**: 'Allow' | string: The IP Filter Action
* **ipMask**: string: IP Mask

## NWRuleSetVirtualNetworkRules
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool: Value that indicates whether to ignore missing VNet Service Endpoint
* **subnet**: [Subnet](#subnet): Subnet properties

## PrivateEndpoint
### Properties
* **id**: string: The ARM identifier for Private Endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource for this Connection.
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate): Details about the state of the connection.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the Private Endpoint Connection.

## Ruleproperties
### Properties
* **action**: [Action](#action): Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
* **correlationFilter**: [CorrelationFilter](#correlationfilter): Properties of correlationFilter
* **filterType**: 'CorrelationFilter' | 'SqlFilter': Filter type that is evaluated against a BrokeredMessage.
* **sqlFilter**: [SqlFilter](#sqlfilter): Properties of sqlFilter

## SBAuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required): The rights associated with the rule.

## SBClientAffineProperties
### Properties
* **clientId**: string: Indicates the Client ID of the application that created the client-affine subscription.
* **isDurable**: bool: For client-affine subscriptions, this value indicates whether the subscription is durable or not.
* **isShared**: bool: For client-affine subscriptions, this value indicates whether the subscription is shared or not.

## SBNamespaceProperties
### Properties
* **alternateName**: string: Alternate name for namespace
* **createdAt**: string (ReadOnly): The time the namespace was created
* **disableLocalAuth**: bool: This property disables SAS authentication for the Service Bus namespace.
* **encryption**: [Encryption](#encryption): Properties of BYOK Encryption description
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: List of private endpoint connections.
* **provisioningState**: string (ReadOnly): Provisioning state of the namespace.
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **status**: string (ReadOnly): Status of the namespace.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.
* **zoneRedundant**: bool: Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.

## SBQueueProperties
### Properties
* **accessedAt**: string (ReadOnly): Last time a message was sent, or the last time there was a receive request to this queue.
* **autoDeleteOnIdle**: string: ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
* **countDetails**: [MessageCountDetails](#messagecountdetails) (ReadOnly): Message Count Details.
* **createdAt**: string (ReadOnly): The exact time the message was created.
* **deadLetteringOnMessageExpiration**: bool: A value that indicates whether this queue has dead letter support when a message expires.
* **defaultMessageTimeToLive**: string: ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
* **duplicateDetectionHistoryTimeWindow**: string: ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
* **enableBatchedOperations**: bool: Value that indicates whether server-side batched operations are enabled.
* **enableExpress**: bool: A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
* **enablePartitioning**: bool: A value that indicates whether the queue is to be partitioned across multiple message brokers.
* **forwardDeadLetteredMessagesTo**: string: Queue/Topic name to forward the Dead Letter message
* **forwardTo**: string: Queue/Topic name to forward the messages
* **lockDuration**: string: ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
* **maxDeliveryCount**: int: The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10.
* **maxMessageSizeInKilobytes**: int: Maximum size (in KB) of the message payload that can be accepted by the queue. This property is only used in Premium today and default is 1024.
* **maxSizeInMegabytes**: int: The maximum size of the queue in megabytes, which is the size of memory allocated for the queue. Default is 1024.
* **messageCount**: int (ReadOnly): The number of messages in the queue.
* **requiresDuplicateDetection**: bool: A value indicating if this queue requires duplicate detection.
* **requiresSession**: bool: A value that indicates whether the queue supports the concept of sessions.
* **sizeInBytes**: int (ReadOnly): The size of the queue, in bytes.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of a messaging entity.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

## SBSku
### Properties
* **capacity**: int: The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
* **name**: 'Basic' | 'Premium' | 'Standard' (Required): Name of this SKU.
* **tier**: 'Basic' | 'Premium' | 'Standard': The billing tier of this particular SKU.

## SBSubscriptionProperties
### Properties
* **accessedAt**: string (ReadOnly): Last time there was a receive request to this subscription.
* **autoDeleteOnIdle**: string: ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
* **clientAffineProperties**: [SBClientAffineProperties](#sbclientaffineproperties): Properties specific to client affine subscriptions.
* **countDetails**: [MessageCountDetails](#messagecountdetails) (ReadOnly): Message count details
* **createdAt**: string (ReadOnly): Exact time the message was created.
* **deadLetteringOnFilterEvaluationExceptions**: bool: Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
* **deadLetteringOnMessageExpiration**: bool: Value that indicates whether a subscription has dead letter support when a message expires.
* **defaultMessageTimeToLive**: string: ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
* **duplicateDetectionHistoryTimeWindow**: string: ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
* **enableBatchedOperations**: bool: Value that indicates whether server-side batched operations are enabled.
* **forwardDeadLetteredMessagesTo**: string: Queue/Topic name to forward the Dead Letter message
* **forwardTo**: string: Queue/Topic name to forward the messages
* **isClientAffine**: bool: Value that indicates whether the subscription has an affinity to the client id.
* **lockDuration**: string: ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
* **maxDeliveryCount**: int: Number of maximum deliveries.
* **messageCount**: int (ReadOnly): Number of messages.
* **requiresSession**: bool: Value indicating if a subscription supports the concept of sessions.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of a messaging entity.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

## SBTopicProperties
### Properties
* **accessedAt**: string (ReadOnly): Last time the message was sent, or a request was received, for this topic.
* **autoDeleteOnIdle**: string: ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
* **countDetails**: [MessageCountDetails](#messagecountdetails) (ReadOnly): Message count details
* **createdAt**: string (ReadOnly): Exact time the message was created.
* **defaultMessageTimeToLive**: string: ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
* **duplicateDetectionHistoryTimeWindow**: string: ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
* **enableBatchedOperations**: bool: Value that indicates whether server-side batched operations are enabled.
* **enableExpress**: bool: Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
* **enablePartitioning**: bool: Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
* **maxMessageSizeInKilobytes**: int: Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024.
* **maxSizeInMegabytes**: int: Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
* **requiresDuplicateDetection**: bool: Value indicating if this topic requires duplicate detection.
* **sizeInBytes**: int (ReadOnly): Size of the topic, in bytes.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of a messaging entity.
* **subscriptionCount**: int (ReadOnly): Number of subscriptions.
* **supportOrdering**: bool: Value that indicates whether the topic supports ordering.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

## SqlFilter
### Properties
* **compatibilityLevel**: int: This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
* **requiresPreprocessing**: bool: Value that indicates whether the rule action requires preprocessing.
* **sqlExpression**: string: The SQL expression. e.g. MyProperty='ABC'

## Subnet
### Properties
* **id**: string (Required): Resource ID of Virtual Network Subnet

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): Client Id of user assigned identity
* **principalId**: string (ReadOnly): Principal Id of user assigned identity

## UserAssignedIdentityProperties
### Properties
* **userAssignedIdentity**: string: ARM ID of user Identity selected for encryption

