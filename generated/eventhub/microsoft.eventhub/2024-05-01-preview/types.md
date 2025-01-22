# Microsoft.EventHub @ 2024-05-01-preview

## Resource Microsoft.EventHub/clusters@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string {minLength: 6, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Event Hubs Cluster properties supplied in responses in List or Get operations.
* **sku**: [ClusterSku](#clustersku): Properties of the cluster SKU.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EventHub/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Properties of BYOK Identity description
* **location**: string: Resource location.
* **name**: string {minLength: 6, maxLength: 50, pattern: "^[a-zA-Z][a-zA-Z0-9-]{6,50}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EHNamespaceProperties](#ehnamespaceproperties): Namespace properties supplied for create namespace operation.
* **sku**: [Sku](#sku): Properties of sku resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/applicationGroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 256} (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/applicationGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/authorizationRules@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): Properties supplied to create or update AuthorizationRule
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [ArmDisasterRecoveryProperties](#armdisasterrecoveryproperties): Properties required to the Create Or Update Alias(Disaster Recovery configurations)
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (ReadOnly): Properties supplied to create or update AuthorizationRule
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 256} (Required, DeployTimeConstant): The resource name
* **properties**: [EventhubProperties](#eventhubproperties): Properties supplied to the Create Or Update Event Hub operation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): Properties supplied to create or update AuthorizationRule
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [ConsumerGroupProperties](#consumergroupproperties): Single item in List or Get Consumer group operation
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkRuleSetProperties](#networkrulesetproperties): NetworkRuleSet properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/privateEndpointConnections@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/schemagroups@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 256} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaGroupProperties](#schemagroupproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.EventHub/namespaces/schemagroups' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.EventHub/namespaces/authorizationRules@2024-05-01-preview)
* **Resource**: Microsoft.EventHub/namespaces/authorizationRules
* **ApiVersion**: 2024-05-01-preview
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules@2024-05-01-preview)
* **Resource**: Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules
* **ApiVersion**: 2024-05-01-preview
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2024-05-01-preview)
* **Resource**: Microsoft.EventHub/namespaces/eventhubs/authorizationRules
* **ApiVersion**: 2024-05-01-preview
* **Output**: [AccessKeys](#accesskeys)

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the AuthorizationRule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace AuthorizationRule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace AuthorizationRule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## ApplicationGroupPolicy
* **Discriminator**: type

### Base Properties
* **name**: string (Required): The Name of this policy

### ThrottlingPolicy
#### Properties
* **metricId**: 'IncomingBytes' | 'IncomingMessages' | 'OutgoingBytes' | 'OutgoingMessages' | string (Required): Metric Id on which the throttle limit should be set, MetricId can be discovered by hovering over Metric in the Metrics section of Event Hub Namespace inside Azure Portal
* **rateLimitThreshold**: int (Required): The Threshold limit above which the application group will be throttled.Rate limit is always per second.
* **type**: 'ThrottlingPolicy' (Required): Application Group Policy types


## ApplicationGroupProperties
### Properties
* **clientAppGroupIdentifier**: string (Required): The Unique identifier for application group.Supports SAS(SASKeyName=KeyName) or AAD(AADAppID=Guid)
* **isEnabled**: bool: Determines if Application Group is allowed to create connection with namespace or not. Once the isEnabled is set to false, all the existing connections of application group gets dropped and no new connections will be allowed
* **policies**: [ApplicationGroupPolicy](#applicationgrouppolicy)[]: List of group policies that define the behavior of application group. The policies can support resource governance scenarios such as limiting ingress or egress traffic.

## ArmDisasterRecoveryProperties
### Properties
* **alternateName**: string: Alternate name specified when alias and namespace names are same.
* **partnerNamespace**: string: ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
* **pendingReplicationOperationsCount**: int (ReadOnly): Number of entities pending to be replicated.
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly): role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'

## AuthorizationRuleProperties
### Properties
* **rights**: ('Listen' | 'Manage' | 'Send' | string)[] (Required): The rights associated with the rule.

## CaptureDescription
### Properties
* **destination**: [Destination](#destination): Properties of Destination where capture will be stored. (Storage Account, Blob Names)
* **enabled**: bool: A value that indicates whether capture description is enabled.
* **encoding**: 'Avro' | 'AvroDeflate': Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version
* **intervalInSeconds**: int: The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
* **sizeLimitInBytes**: int: The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes
* **skipEmptyArchives**: bool: A value that indicates whether to Skip Empty Archives

## CaptureIdentity
### Properties
* **type**: 'SystemAssigned' | 'UserAssigned': Type of Azure Active Directory Managed Identity.
* **userAssignedIdentity**: string: ARM ID of Managed User Identity. This property is required is the type is UserAssignedIdentity. If type is SystemAssigned, then the System Assigned Identity Associated with the namespace will be used.

## ClusterProperties
### Properties
* **createdAt**: string (ReadOnly): The UTC time when the Event Hubs Cluster was created.
* **metricId**: string (ReadOnly): The metric ID of the cluster resource. Provided by the service and not modifiable by the user.
* **provisioningState**: 'Active' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Scaling' | 'Succeeded' | 'Unknown' | string (ReadOnly): Provisioning state of the Cluster.
* **status**: string (ReadOnly): Status of the Cluster resource
* **supportsScaling**: bool: A value that indicates whether Scaling is Supported.
* **updatedAt**: string (ReadOnly): The UTC time when the Event Hubs Cluster was last updated.

## ClusterSku
### Properties
* **capacity**: int {minValue: 1}: The quantity of Event Hubs Cluster Capacity Units contained in this cluster.
* **name**: 'Dedicated' | string (Required): Name of this SKU.

## ConnectionState
### Properties
* **description**: string: Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Status of the connection.

## ConsumerGroupProperties
### Properties
* **createdAt**: string (ReadOnly): Exact time the message was created.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.
* **userMetadata**: string: User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.

## Destination
### Properties
* **identity**: [CaptureIdentity](#captureidentity): A value that indicates whether capture description is enabled.
* **name**: string: Name for capture destination
* **properties**: [DestinationProperties](#destinationproperties): Properties describing the storage account, blob container and archive name format for capture destination

## DestinationProperties
### Properties
* **archiveNameFormat**: string: Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
* **blobContainer**: string: Blob container Name
* **dataLakeAccountName**: string: The Azure Data Lake Store name for the captured events
* **dataLakeFolderPath**: string: The destination folder path for the captured events
* **dataLakeSubscriptionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Subscription Id of Azure Data Lake Store
* **storageAccountResourceId**: string: Resource id of the storage account to be used to create the blobs

## EHNamespaceProperties
### Properties
* **alternateName**: string: Alternate name specified when alias and namespace names are same.
* **clusterArmId**: string: Cluster ARM ID of the Namespace.
* **createdAt**: string (ReadOnly): The time the Namespace was created.
* **disableLocalAuth**: bool: This property disables SAS authentication for the Event Hubs namespace.
* **encryption**: [Encryption](#encryption): Properties of BYOK Encryption description
* **geoDataReplication**: [GeoDataReplicationProperties](#geodatareplicationproperties): Geo Data Replication settings for the namespace
* **isAutoInflateEnabled**: bool: Value that indicates whether AutoInflate is enabled for eventhub namespace.
* **kafkaEnabled**: bool: Value that indicates whether Kafka is enabled for eventhub namespace.
* **maximumThroughputUnits**: int {minValue: 0}: Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics.
* **minimumTlsVersion**: '1.0' | '1.1' | '1.2' | string: The minimum TLS version for the cluster to support, e.g. '1.2'
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: List of private endpoint connections.
* **provisioningState**: string (ReadOnly): Provisioning state of the Namespace.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: This determines if traffic is allowed over public network. By default it is enabled.
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **status**: string (ReadOnly): Status of the Namespace.
* **updatedAt**: string (ReadOnly): The time the Namespace was updated.
* **zoneRedundant**: bool: Enabling this property creates a Standard Event Hubs Namespace in regions supported availability zones.

## Encryption
### Properties
* **keySource**: 'Microsoft.KeyVault': Enumerates the possible value of keySource for Encryption
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)[]: Properties of KeyVault
* **requireInfrastructureEncryption**: bool: Enable Infrastructure Encryption (Double Encryption)

## EventhubProperties
### Properties
* **captureDescription**: [CaptureDescription](#capturedescription): Properties of capture description
* **createdAt**: string (ReadOnly): Exact time the Event Hub was created.
* **identifier**: string (ReadOnly): Denotes the unique identifier for event hub and is generated by service while creating topic. This identifier can be used in kafka runtime apis wherever a UUID is required e.g Fetch & Delete Topic. This identifier is not supported in AMQP runtime operations yet.
* **messageRetentionInDays**: int {minValue: 1}: Number of days to retain the events for this Event Hub, value should be 1 to 7 days
* **messageTimestampDescription**: [MessageTimestampDescription](#messagetimestampdescription): Properties of MessageTimestamp Description
* **partitionCount**: int {minValue: 1}: Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
* **partitionIds**: string[] (ReadOnly): Current number of shards on the Event Hub.
* **retentionDescription**: [RetentionDescription](#retentiondescription): Event Hub retention settings
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of the Event Hub.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.
* **userMetadata**: string: Gets and Sets Metadata of User.

## GeoDataReplicationProperties
### Properties
* **locations**: [NamespaceReplicaLocation](#namespacereplicalocation)[]: A list of regions where replicas of the namespace are maintained.
* **maxReplicationLagDurationInSeconds**: int: The maximum acceptable lag for data replication operations from the primary replica to a quorum of secondary replicas.  When the lag exceeds the configured amount, operations on the primary replica will be failed. The allowed values are 0 and 5 minutes to 1 day.

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
* **keyVersion**: string: Key Version

## MessageTimestampDescription
### Properties
* **timestampType**: 'Create' | 'LogAppend' | string: Denotes the type of timestamp the message will hold.Two types of timestamp types - "AppendTime" and "CreateTime". AppendTime refers the time in which message got appended inside broker log. CreateTime refers to the time in which the message was generated on source side and producers can set this timestamp while sending the message. Default value is AppendTime. If you are using AMQP protocol, CreateTime equals AppendTime and its behavior remains the same.

## NamespaceReplicaLocation
### Properties
* **clusterArmId**: string: Optional property that denotes the ARM ID of the Cluster. This is required, if a namespace replica should be placed in a Dedicated Event Hub Cluster
* **locationName**: string: Azure regions where a replica of the namespace is maintained
* **replicaState**: string (ReadOnly): state of Namespace replica.
* **roleType**: 'Primary' | 'Secondary' | string: GeoDR Role Types

## NetworkRuleSetProperties
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: Default Action for Network Rule Set
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]: List of IpRules
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: This determines if traffic is allowed over public network. By default it is enabled. If value is SecuredByPerimeter then Inbound and Outbound communication is controlled by the network security perimeter and profile's access rules.
* **trustedServiceAccessEnabled**: bool: Value that indicates whether Trusted Service Access is Enabled or not.
* **virtualNetworkRules**: [NWRuleSetVirtualNetworkRules](#nwrulesetvirtualnetworkrules)[]: List VirtualNetwork Rules

## NWRuleSetIpRules
### Properties
* **action**: 'Allow' | string: The IP Filter Action
* **ipMask**: string: IP Mask

## NWRuleSetVirtualNetworkRules
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool: Value that indicates whether to ignore missing Vnet Service Endpoint
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

## RetentionDescription
### Properties
* **cleanupPolicy**: 'Compact' | 'Delete' | 'DeleteOrCompact' | string: Enumerates the possible values for cleanup policy
* **minCompactionLagInMins**: int: The minimum time a message will remain ineligible for compaction in the log. This value is used when cleanupPolicy is Compact or DeleteOrCompact.
* **retentionTimeInHours**: int: Number of hours to retain the events for this Event Hub. This should be positive value upto namespace SKU max. -1 is a special case where retention time is infinite, but the size of an entity is restricted and its size depends on namespace SKU type.
* **tombstoneRetentionTimeInHours**: int: Number of hours to retain the tombstone markers of a compacted Event Hub. This value is used when cleanupPolicy is Compact or DeleteOrCompact. Consumer must complete reading the tombstone marker within this specified amount of time if consumer begins from starting offset to ensure they get a valid snapshot for the specific key described by the tombstone marker within the compacted Event Hub

## SchemaGroupProperties
### Properties
* **createdAtUtc**: string (ReadOnly): Exact time the Schema Group was created.
* **eTag**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The ETag value.
* **groupProperties**: [SchemaGroupProperties](#schemagroupproperties): dictionary object for SchemaGroup group properties
* **schemaCompatibility**: 'Backward' | 'Forward' | 'None' | string
* **schemaType**: 'Avro' | 'Json' | 'ProtoBuf' | 'Unknown' | string
* **updatedAtUtc**: string (ReadOnly): Exact time the Schema Group was updated

## SchemaGroupProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int {minValue: 0}: The Event Hubs throughput units for Basic or Standard tiers, where value should be 0 to 20 throughput units. The Event Hubs premium units for Premium tier, where value should be 0 to 10 premium units.
* **name**: 'Basic' | 'Premium' | 'Standard' | string (Required): Name of this SKU.
* **tier**: 'Basic' | 'Premium' | 'Standard' | string: The billing tier of this particular SKU.

## Subnet
### Properties
* **id**: string: Resource ID of Virtual Network Subnet

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

