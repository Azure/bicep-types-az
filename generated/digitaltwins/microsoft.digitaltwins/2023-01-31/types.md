# Microsoft.DigitalTwins @ 2023-01-31

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DigitalTwinsIdentity](#digitaltwinsidentity): The managed identity for the DigitalTwinsInstance.
* **location**: string (Required): The resource location.
* **name**: string {minLength: 3, maxLength: 63, pattern: "^(?!-)[A-Za-z0-9-]{3,63}(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsProperties](#digitaltwinsproperties): DigitalTwins instance properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the DigitalTwinsInstance.
* **tags**: [DigitalTwinsResourceTags](#digitaltwinsresourcetags): The resource tags.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 2, maxLength: 49, pattern: "^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsEndpointResourceProperties](#digitaltwinsendpointresourceproperties) (Required): DigitalTwinsInstance endpoint resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2023-01-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionProperties](#connectionproperties) (Required): The connection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the private endpoint connection.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections@2023-01-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 2, maxLength: 49, pattern: "^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TimeSeriesDatabaseConnectionProperties](#timeseriesdatabaseconnectionproperties): Properties of a specific time series database connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections' (ReadOnly, DeployTimeConstant): The resource type

## ConnectionProperties
### Properties
* **groupIds**: string[]: The list of group ids for the private endpoint connection.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint.
* **privateLinkServiceConnectionState**: [ConnectionPropertiesPrivateLinkServiceConnectionState](#connectionpropertiesprivatelinkserviceconnectionstate): The connection state.
* **provisioningState**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (ReadOnly): The provisioning state.

## ConnectionPropertiesPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Actions required for a private endpoint connection.
* **description**: string (Required): The description for the current state of a private endpoint connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (Required): The status of a private endpoint connection.

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType

### Base Properties
* **authenticationType**: 'IdentityBased' | 'KeyBased' | string: Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified.
* **createdTime**: string (ReadOnly): Time when the Endpoint was added to DigitalTwinsInstance.
* **deadLetterSecret**: string {sensitive}: Dead letter storage secret for key-based authentication. Will be obfuscated during read.
* **deadLetterUri**: string: Dead letter storage URL for identity-based authentication.
* **identity**: [ManagedIdentityReference](#managedidentityreference): Managed identity properties for the endpoint.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Disabled' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Updating' | 'Warning' | string (ReadOnly): The provisioning state.

### EventGrid
#### Properties
* **accessKey1**: string {sensitive} (Required): EventGrid secondary accesskey. Will be obfuscated during read.
* **accessKey2**: string {sensitive}: EventGrid secondary accesskey. Will be obfuscated during read.
* **endpointType**: 'EventGrid' (Required): The type of Digital Twins endpoint
* **TopicEndpoint**: string (Required): EventGrid Topic Endpoint.

### EventHub
#### Properties
* **connectionStringPrimaryKey**: string {sensitive}: PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
* **connectionStringSecondaryKey**: string {sensitive}: SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
* **endpointType**: 'EventHub' (Required): The type of Digital Twins endpoint
* **endpointUri**: string: The URL of the EventHub namespace for identity-based authentication. It must include the protocol 'sb://'.
* **entityPath**: string: The EventHub name in the EventHub namespace for identity-based authentication.

### ServiceBus
#### Properties
* **endpointType**: 'ServiceBus' (Required): The type of Digital Twins endpoint
* **endpointUri**: string: The URL of the ServiceBus namespace for identity-based authentication. It must include the protocol 'sb://'.
* **entityPath**: string: The ServiceBus Topic name for identity-based authentication.
* **primaryConnectionString**: string {sensitive}: PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
* **secondaryConnectionString**: string {sensitive}: SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.


## DigitalTwinsIdentity
### Properties
* **principalId**: string (ReadOnly): The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **tenantId**: string (ReadOnly): The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string: The type of Managed Identity used by the DigitalTwinsInstance.
* **userAssignedIdentities**: [DigitalTwinsIdentityUserAssignedIdentities](#digitaltwinsidentityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
.

## DigitalTwinsIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly): Time when DigitalTwinsInstance was created.
* **hostName**: string (ReadOnly): Api endpoint to work with DigitalTwinsInstance.
* **lastUpdatedTime**: string (ReadOnly): Time when DigitalTwinsInstance was updated.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: The private endpoint connections.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Updating' | 'Warning' | string (ReadOnly): The provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Public network access for the DigitalTwinsInstance.

## DigitalTwinsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentityReference
### Properties
* **type**: 'SystemAssigned' | 'UserAssigned' | string: The type of managed identity used.
* **userAssignedIdentity**: string: The user identity ARM resource id if the managed identity type is 'UserAssigned'.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The resource identifier.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string {pattern: "^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$"} (ReadOnly): The resource name.
* **properties**: [ConnectionProperties](#connectionproperties) (Required): The connection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the private endpoint connection.
* **type**: string (ReadOnly): The resource type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TimeSeriesDatabaseConnectionProperties
* **Discriminator**: connectionType

### Base Properties
* **identity**: [ManagedIdentityReference](#managedidentityreference): Managed identity properties for the time series database connection resource.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Disabled' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Updating' | 'Warning' | string (ReadOnly): The provisioning state.

### AzureDataExplorerConnectionProperties
#### Properties
* **adxDatabaseName**: string (Required): The name of the Azure Data Explorer database.
* **adxEndpointUri**: string (Required): The URI of the Azure Data Explorer endpoint.
* **adxRelationshipLifecycleEventsTableName**: string: The name of the Azure Data Explorer table used for recording relationship lifecycle events. The table will not be created if this property is left unspecified.
* **adxResourceId**: string (Required): The resource ID of the Azure Data Explorer cluster.
* **adxTableName**: string: The name of the Azure Data Explorer table used for storing updates to properties of twins and relationships. Defaults to AdtPropertyEvents.
* **adxTwinLifecycleEventsTableName**: string: The name of the Azure Data Explorer table used for recording twin lifecycle events. The table will not be created if this property is left unspecified.
* **connectionType**: 'AzureDataExplorer' (Required): The type of time series connection resource.
* **eventHubConsumerGroup**: string: The EventHub consumer group to use when ADX reads from EventHub. Defaults to $Default.
* **eventHubEndpointUri**: string (Required): The URL of the EventHub namespace for identity-based authentication. It must include the protocol sb://
* **eventHubEntityPath**: string (Required): The EventHub name in the EventHub namespace for identity-based authentication.
* **eventHubNamespaceResourceId**: string (Required): The resource ID of the EventHub namespace.
* **recordPropertyAndItemRemovals**: 'false' | 'true' | string: Specifies whether or not to record twin / relationship property and item removals, including removals of indexed or keyed values (such as map entries, array elements, etc.). This feature is de-activated unless explicitly set to 'true'. Setting this property to 'true' will generate an additional column in the property events table in ADX.


## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client id of the User Assigned Identity Resource.
* **principalId**: string (ReadOnly): The object id of the User Assigned Identity Resource.

