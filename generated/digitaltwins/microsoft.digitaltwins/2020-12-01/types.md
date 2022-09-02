# Microsoft.DigitalTwins @ 2020-12-01

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DigitalTwinsIdentity](#digitaltwinsidentity): The managed identity for the DigitalTwinsInstance.
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsProperties](#digitaltwinsproperties): DigitalTwins instance properties.
* **tags**: [DigitalTwinsResourceTags](#digitaltwinsresourcetags): The resource tags.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsEndpointResourceProperties](#digitaltwinsendpointresourceproperties) (Required): DigitalTwinsInstance endpoint resource properties.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required)
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## ConnectionPropertiesPrivateEndpoint
### Properties
* **id**: string (ReadOnly): The resource identifier.

## ConnectionPropertiesPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Actions required for a private endpoint connection.
* **description**: string (Required): The description for the current state of a private endpoint connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (Required): The status of a private endpoint connection.

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType

### Base Properties
* **authenticationType**: 'IdentityBased' | 'KeyBased' | string: Specifies the authentication type being used for connecting to the endpoint.
* **createdTime**: string (ReadOnly): Time when the Endpoint was added to DigitalTwinsInstance.
* **deadLetterSecret**: string: Dead letter storage secret for key-based authentication. Will be obfuscated during read.
* **deadLetterUri**: string: Dead letter storage URL for identity-based authentication.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Disabled' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' | string (ReadOnly): The provisioning state.

### EventGrid
#### Properties
* **accessKey1**: string (Required): EventGrid secondary accesskey. Will be obfuscated during read.
* **accessKey2**: string: EventGrid secondary accesskey. Will be obfuscated during read.
* **endpointType**: 'EventGrid' (Required): The type of Digital Twins endpoint
* **TopicEndpoint**: string (Required): EventGrid Topic Endpoint

### EventHub
#### Properties
* **connectionStringPrimaryKey**: string: PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
* **connectionStringSecondaryKey**: string: SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
* **endpointType**: 'EventHub' (Required): The type of Digital Twins endpoint
* **endpointUri**: string: The URL of the EventHub namespace for identity-based authentication. It must include the protocol sb://
* **entityPath**: string: The EventHub name in the EventHub namespace for identity-based authentication.

### ServiceBus
#### Properties
* **endpointType**: 'ServiceBus' (Required): The type of Digital Twins endpoint
* **endpointUri**: string: The URL of the ServiceBus namespace for identity-based authentication. It must include the protocol sb://
* **entityPath**: string: The ServiceBus Topic name for identity-based authentication
* **primaryConnectionString**: string: PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
* **secondaryConnectionString**: string: SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.


## DigitalTwinsIdentity
### Properties
* **principalId**: string (ReadOnly): The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **tenantId**: string (ReadOnly): The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **type**: 'None' | 'SystemAssigned' | string: The type of Managed Identity used by the DigitalTwinsInstance. Only SystemAssigned is supported.

## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly): Time when DigitalTwinsInstance was created.
* **hostName**: string (ReadOnly): Api endpoint to work with DigitalTwinsInstance.
* **lastUpdatedTime**: string (ReadOnly): Time when DigitalTwinsInstance was updated.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Updating' | 'Warning' | string (ReadOnly): The provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Public network access for the DigitalTwinsInstance.

## DigitalTwinsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The resource name.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required)
* **type**: string (ReadOnly): The resource type.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: The list of group ids for the private endpoint connection.
* **privateEndpoint**: [ConnectionPropertiesPrivateEndpoint](#connectionpropertiesprivateendpoint)
* **privateLinkServiceConnectionState**: [ConnectionPropertiesPrivateLinkServiceConnectionState](#connectionpropertiesprivatelinkserviceconnectionstate)
* **provisioningState**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (ReadOnly): The provisioning state.

