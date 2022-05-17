# Microsoft.EventHub @ 2022-01-01-preview

## Resource Microsoft.EventHub/clusters@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Event Hubs Cluster properties supplied in responses in List or Get operations.
* **sku**: [ClusterSku](#clustersku): SKU parameters particular to a cluster instance.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EventHub/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Properties to configure Identity for Bring your Own Keys
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EHNamespaceProperties](#ehnamespaceproperties): Namespace properties supplied for create namespace operation.
* **sku**: [Sku](#sku): SKU parameters supplied to the create namespace operation
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/applicationGroups@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventHub/namespaces/applicationGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/authorizationRules@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): Properties supplied to create or update AuthorizationRule
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventHub/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArmDisasterRecoveryProperties](#armdisasterrecoveryproperties): Properties required to the Create Or Update Alias(Disaster Recovery configurations)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventhubProperties](#eventhubproperties): Properties supplied to the Create Or Update Event Hub operation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): Properties supplied to create or update AuthorizationRule
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConsumerGroupProperties](#consumergroupproperties): Single item in List or Get Consumer group operation
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkRuleSetProperties](#networkrulesetproperties): NetworkRuleSet properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/privateEndpointConnections@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventHub/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/schemagroups@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaGroupProperties](#schemagroupproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.EventHub/namespaces/schemagroups' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.EventHub/namespaces/authorizationRules@2022-01-01-preview)
* **Resource**: Microsoft.EventHub/namespaces/authorizationRules
* **ApiVersion**: 2022-01-01-preview
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules@2022-01-01-preview)
* **Resource**: Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules
* **ApiVersion**: 2022-01-01-preview
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2022-01-01-preview)
* **Resource**: Microsoft.EventHub/namespaces/eventhubs/authorizationRules
* **ApiVersion**: 2022-01-01-preview
* **Output**: [AccessKeys](#accesskeys)

## ClusterProperties
### Properties
* **createdAt**: string (ReadOnly): The UTC time when the Event Hubs Cluster was created.
* **metricId**: string (ReadOnly): The metric ID of the cluster resource. Provided by the service and not modifiable by the user.
* **status**: string (ReadOnly): Status of the Cluster resource
* **supportsScaling**: bool: A value that indicates whether Scaling is Supported.
* **updatedAt**: string (ReadOnly): The UTC time when the Event Hubs Cluster was last updated.

## ClusterSku
### Properties
* **capacity**: int: The quantity of Event Hubs Cluster Capacity Units contained in this cluster.
* **name**: 'Dedicated' (Required): Name of this SKU.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): Client Id of user assigned identity
* **principalId**: string (ReadOnly): Principal Id of user assigned identity

## EHNamespaceProperties
### Properties
* **alternateName**: string: Alternate name specified when alias and namespace names are same.
* **clusterArmId**: string: Cluster ARM ID of the Namespace.
* **createdAt**: string (ReadOnly): The time the Namespace was created.
* **disableLocalAuth**: bool: This property disables SAS authentication for the Event Hubs namespace.
* **encryption**: [Encryption](#encryption): Properties to configure Encryption
* **isAutoInflateEnabled**: bool: Value that indicates whether AutoInflate is enabled for eventhub namespace.
* **kafkaEnabled**: bool: Value that indicates whether Kafka is enabled for eventhub namespace.
* **maximumThroughputUnits**: int: Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics.
* **minimumTlsVersion**: '1.0' | '1.1' | '1.2': The minimum TLS version for the cluster to support, e.g. '1.2'
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: List of private endpoint connections.
* **provisioningState**: string (ReadOnly): Provisioning state of the Namespace.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter': This determines if traffic is allowed over public network. By default it is enabled.
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **status**: string (ReadOnly): Status of the Namespace.
* **updatedAt**: string (ReadOnly): The time the Namespace was updated.
* **zoneRedundant**: bool: Enabling this property creates a Standard Event Hubs Namespace in regions supported availability zones.

## Encryption
### Properties
* **keySource**: 'Microsoft.KeyVault': Enumerates the possible value of keySource for Encryption
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)[]: Properties of KeyVault
* **requireInfrastructureEncryption**: bool: Enable Infrastructure Encryption (Double Encryption)

## KeyVaultProperties
### Properties
* **identity**: [UserAssignedIdentityProperties](#userassignedidentityproperties)
* **keyName**: string: Name of the Key from KeyVault
* **keyVaultUri**: string: Uri of KeyVault
* **keyVersion**: string: Key Version

## UserAssignedIdentityProperties
### Properties
* **userAssignedIdentity**: string: ARM ID of user Identity selected for encryption

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): PrivateEndpoint information.
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate): ConnectionState information.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': Provisioning state of the Private Endpoint Connection.

## PrivateEndpoint
### Properties
* **id**: string: The ARM identifier for Private Endpoint.

## ConnectionState
### Properties
* **description**: string: Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': Status of the connection.

## Sku
### Properties
* **capacity**: int: The Event Hubs throughput units for Basic or Standard tiers, where value should be 0 to 20 throughput units. The Event Hubs premium units for Premium tier, where value should be 0 to 10 premium units.
* **name**: 'Basic' | 'Premium' | 'Standard' (Required): Name of this SKU.
* **tier**: 'Basic' | 'Premium' | 'Standard': The billing tier of this particular SKU.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationGroupProperties
### Properties
* **clientAppGroupIdentifier**: string (Required): The Unique identifier for application group.Supports SAS(SASKeyName=KeyName) or AAD(AADAppID=Guid)
* **isEnabled**: bool: Determines if Application Group is allowed to create connection with namespace or not. Once the isEnabled is set to false, all the existing connections of application group gets dropped and no new connections will be allowed
* **policies**: [ApplicationGroupPolicy](#applicationgrouppolicy)[]: List of group policies that define the behavior of application group. The policies can support resource governance scenarios such as limiting ingress or egress traffic.

## ApplicationGroupPolicy
* **Discriminator**: type

### Base Properties
* **name**: string (Required): The Name of this policy
### ThrottlingPolicy
#### Properties
* **metricId**: 'IncomingBytes' | 'IncomingMessages' | 'OutgoingBytes' | 'OutgoingMessages' (Required): Metric Id on which the throttle limit should be set, MetricId can be discovered by hovering over Metric in the Metrics section of Event Hub Namespace inside Azure Portal
* **rateLimitThreshold**: int (Required): The Threshold limit above which the application group will be throttled.Rate limit is always per second.
* **type**: 'ThrottlingPolicy' (Required): Application Group Policy types


## AuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required): The rights associated with the rule.

## ArmDisasterRecoveryProperties
### Properties
* **alternateName**: string: Alternate name specified when alias and namespace names are same.
* **partnerNamespace**: string: ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
* **pendingReplicationOperationsCount**: int (ReadOnly): Number of entities pending to be replicated.
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly): role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'

## EventhubProperties
### Properties
* **captureDescription**: [CaptureDescription](#capturedescription): Properties to configure capture description for eventhub
* **createdAt**: string (ReadOnly): Exact time the Event Hub was created.
* **messageRetentionInDays**: int: Number of days to retain the events for this Event Hub, value should be 1 to 7 days
* **partitionCount**: int: Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
* **partitionIds**: string[] (ReadOnly): Current number of shards on the Event Hub.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of the Event Hub.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

## CaptureDescription
### Properties
* **destination**: [Destination](#destination): Capture storage details for capture description
* **enabled**: bool: A value that indicates whether capture description is enabled.
* **encoding**: 'Avro' | 'AvroDeflate': Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version
* **intervalInSeconds**: int: The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
* **sizeLimitInBytes**: int: The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes
* **skipEmptyArchives**: bool: A value that indicates whether to Skip Empty Archives

## Destination
### Properties
* **name**: string: Name for capture destination
* **properties**: [DestinationProperties](#destinationproperties): Properties describing the storage account, blob container and archive name format for capture destination

## DestinationProperties
### Properties
* **archiveNameFormat**: string: Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
* **blobContainer**: string: Blob container Name
* **dataLakeAccountName**: string: The Azure Data Lake Store name for the captured events
* **dataLakeFolderPath**: string: The destination folder path for the captured events
* **dataLakeSubscriptionId**: string: Subscription Id of Azure Data Lake Store
* **storageAccountResourceId**: string: Resource id of the storage account to be used to create the blobs

## ConsumerGroupProperties
### Properties
* **createdAt**: string (ReadOnly): Exact time the message was created.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.
* **userMetadata**: string: User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.

## NetworkRuleSetProperties
### Properties
* **defaultAction**: 'Allow' | 'Deny': Default Action for Network Rule Set
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]: List of IpRules
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter': This determines if traffic is allowed over public network. By default it is enabled. If value is SecuredByPerimeter then Inbound and Outbound communication is controlled by the network security perimeter and profile's access rules.
* **trustedServiceAccessEnabled**: bool: Value that indicates whether Trusted Service Access is Enabled or not.
* **virtualNetworkRules**: [NWRuleSetVirtualNetworkRules](#nwrulesetvirtualnetworkrules)[]: List VirtualNetwork Rules

## NWRuleSetIpRules
### Properties
* **action**: 'Allow': The IP Filter Action
* **ipMask**: string: IP Mask

## NWRuleSetVirtualNetworkRules
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool: Value that indicates whether to ignore missing Vnet Service Endpoint
* **subnet**: [Subnet](#subnet): Properties supplied for Subnet

## Subnet
### Properties
* **id**: string: Resource ID of Virtual Network Subnet

## SchemaGroupProperties
### Properties
* **createdAtUtc**: string (ReadOnly): Exact time the Schema Group was created.
* **eTag**: string (ReadOnly): The ETag value.
* **groupProperties**: [SchemaGroupProperties](#schemagroupproperties): dictionary object for SchemaGroup group properties
* **schemaCompatibility**: 'Backward' | 'Forward' | 'None'
* **schemaType**: 'Avro' | 'Unknown'
* **updatedAtUtc**: string (ReadOnly): Exact time the Schema Group was updated

## SchemaGroupProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the AuthorizationRule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace AuthorizationRule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace AuthorizationRule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the AuthorizationRule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace AuthorizationRule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace AuthorizationRule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the AuthorizationRule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace AuthorizationRule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace AuthorizationRule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

