# Microsoft.DeviceRegistry @ 2025-10-01

## Resource Microsoft.DeviceRegistry/assetEndpointProfiles@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssetEndpointProfileProperties](#assetendpointprofileproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/assetEndpointProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/assets@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssetProperties](#assetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/billingContainers@2025-10-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource ETag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingContainerProperties](#billingcontainerproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/billingContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/assets@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceAssetProperties](#namespaceassetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/devices@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Tag.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceDeviceProperties](#namespacedeviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/devices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/discoveredAssets@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceDiscoveredAssetProperties](#namespacediscoveredassetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/discoveredAssets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/discoveredDevices@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceDiscoveredDeviceProperties](#namespacediscovereddeviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/discoveredDevices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/schemaRegistries@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaRegistryProperties](#schemaregistryproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/schemaRegistries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/schemaRegistries/schemas@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaProperties](#schemaproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/schemaRegistries/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/schemaRegistries/schemas/schemaVersions@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 10, pattern: "^[0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaVersionProperties](#schemaversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/schemaRegistries/schemas/schemaVersions' (ReadOnly, DeployTimeConstant): The resource type

## Function migrate (Microsoft.DeviceRegistry/namespaces@2025-10-01)
* **Resource**: Microsoft.DeviceRegistry/namespaces
* **ApiVersion**: 2025-10-01
* **Input**: [NamespaceMigrateRequest](#namespacemigraterequest)
* **Output**: [NamespaceMigrateResponse](#namespacemigrateresponse)

## AssetEndpointProfileProperties
### Properties
* **additionalConfiguration**: string: Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
* **authentication**: [Authentication](#authentication): Defines the client authentication mechanism to the server.
* **discoveredAssetEndpointProfileRef**: string: Reference to a discovered asset endpoint profile. Populated only if the asset endpoint profile has been created from discovery flow. Discovered asset endpoint profile name must be provided.
* **endpointProfileType**: string (Required): Defines the configuration for the connector type that is being used with the endpoint profile.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: [AssetEndpointProfileStatus](#assetendpointprofilestatus) (ReadOnly): Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
* **targetAddress**: string (Required): The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.

## AssetEndpointProfileStatus
### Properties
* **errors**: [AssetEndpointProfileStatusError](#assetendpointprofilestatuserror)[] (ReadOnly): Array object to transfer and persist errors that originate from the Edge.

## AssetEndpointProfileStatusError
### Properties
* **code**: int (ReadOnly): Error code for classification of errors (ex: 400, 404, 500, etc.).
* **message**: string (ReadOnly): Human readable helpful error message to provide additional context for error (ex: “targetAddress 'foo' is not a valid url”).

## AssetProperties
### Properties
* **assetEndpointProfileRef**: string (Required): A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must provide asset endpoint profile name.
* **attributes**: [AssetPropertiesAttributes](#assetpropertiesattributes): A set of key-value pairs that contain custom attributes set by the customer.
* **datasets**: [Dataset](#dataset)[]: Array of datasets that are part of the asset. Each dataset describes the data points that make up the set.
* **defaultDatasetsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
* **defaultEventsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
* **defaultTopic**: [Topic](#topic): Object that describes the default topic information for the asset.
* **description**: string: Human-readable description of the asset.
* **discoveredAssetRefs**: string[]: Reference to a list of discovered assets. Populated only if the asset has been created from discovery flow. Discovered asset names must be provided.
* **displayName**: string: Human-readable display name.
* **documentationUri**: string: Reference to the documentation.
* **enabled**: bool: Enabled/Disabled status of the asset.
* **events**: [Event](#event)[]: Array of events that are part of the asset. Each event can have per-event configuration.
* **externalAssetId**: string: Asset id provided by the customer.
* **hardwareRevision**: string: Revision number of the hardware.
* **manufacturer**: string: Asset manufacturer name.
* **manufacturerUri**: string: Asset manufacturer URI.
* **model**: string: Asset model name.
* **productCode**: string: Asset product code.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **serialNumber**: string: Asset serial number.
* **softwareRevision**: string: Revision number of the software.
* **status**: [AssetStatus](#assetstatus) (ReadOnly): Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.
* **version**: int (ReadOnly): An integer that is incremented each time the resource is modified.

## AssetPropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AssetStatus
### Properties
* **datasets**: [AssetStatusDataset](#assetstatusdataset)[] (ReadOnly): Array of dataset statuses that describe the status of each dataset.
* **errors**: [AssetStatusError](#assetstatuserror)[] (ReadOnly): Array object to transfer and persist errors that originate from the Edge.
* **events**: [AssetStatusEvent](#assetstatusevent)[] (ReadOnly): Array of event statuses that describe the status of each event.
* **version**: int (ReadOnly): A read only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (Edge) state of the Asset. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version.

## AssetStatusDataset
### Properties
* **messageSchemaReference**: [MessageSchemaReference](#messageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the dataset. Must be unique within the status.datasets array. This name is used to correlate between the spec and status dataset information.

## AssetStatusError
### Properties
* **code**: int (ReadOnly): Error code for classification of errors (ex: 400, 404, 500, etc.).
* **message**: string (ReadOnly): Human readable helpful error message to provide additional context for error (ex: “capability Id 'foo' does not exist”).

## AssetStatusEvent
### Properties
* **messageSchemaReference**: [MessageSchemaReference](#messageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the event. Must be unique within the status.events array. This name is used to correlate between the spec and status event information.

## Authentication
### Properties
* **method**: 'Anonymous' | 'Certificate' | 'UsernamePassword' | string (Required): Defines the method to authenticate the user of the client at the server.
* **usernamePasswordCredentials**: [UsernamePasswordCredentials](#usernamepasswordcredentials): Defines the username and password references when UsernamePassword user authentication mode is selected.
* **x509Credentials**: [X509Credentials](#x509credentials): Defines the certificate reference when Certificate user authentication mode is selected.

## BillingContainerProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

## BrokerStateStoreDestinationConfiguration
### Properties
* **key**: string (Required): The MQTT broker state store destination key.

## DataPoint
### Properties
* **dataPointConfiguration**: string: Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **dataSource**: string (Required): The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
* **name**: string (Required): The name of the data point.
* **observabilityMode**: 'Counter' | 'Gauge' | 'Histogram' | 'Log' | 'None' | string: An indication of how the data point should be mapped to OpenTelemetry.

## Dataset
### Properties
* **dataPoints**: [DataPoint](#datapoint)[]: Array of data points that are part of the dataset. Each data point can have per-data point configuration.
* **datasetConfiguration**: string: Stringified JSON that contains connector-specific JSON string that describes configuration for the specific dataset.
* **name**: string (Required): Name of the dataset.
* **topic**: [Topic](#topic): Object that describes the topic information for the specific dataset.

## DatasetDestination
* **Discriminator**: target

### Base Properties

### DatasetBrokerStateStoreDestination
#### Properties
* **configuration**: [BrokerStateStoreDestinationConfiguration](#brokerstatestoredestinationconfiguration) (Required): The MQTT broker state store destination configuration.
* **target**: 'BrokerStateStore' (Required): Target destination.

### DatasetMqttDestination
#### Properties
* **configuration**: [MqttDestinationConfiguration](#mqttdestinationconfiguration) (Required): The MQTT destination configuration.
* **target**: 'Mqtt' (Required): Target destination.

### DatasetStorageDestination
#### Properties
* **configuration**: [StorageDestinationConfiguration](#storagedestinationconfiguration) (Required): The storage destination configuration.
* **target**: 'Storage' (Required): Target destination.


## DeviceMessagingEndpoint
### Properties
* **address**: string (Required): The endpoint address to connect to.
* **endpointType**: string: Type of connection used for the messaging endpoint.

## DeviceRef
### Properties
* **deviceName**: string (Required): Name of the device resource
* **endpointName**: string (Required): The name of endpoint to use

## DeviceStatus
### Properties
* **config**: [StatusConfig](#statusconfig) (ReadOnly): Defines the device status config properties.
* **endpoints**: [DeviceStatusEndpoints](#devicestatusendpoints) (ReadOnly): Defines the device status for inbound/outbound endpoints.

## DeviceStatusEndpoint
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Defines the error related to this endpoint.

## DeviceStatusEndpoints
### Properties
* **inbound**: [DeviceStatusEndpointsInbound](#devicestatusendpointsinbound) (ReadOnly): KeyValue pair representing status of inbound endpoints.

## DeviceStatusEndpointsInbound
### Properties
### Additional Properties
* **Additional Properties Type**: [DeviceStatusEndpoint](#devicestatusendpoint)

## DiscoveredInboundEndpoints
### Properties
* **additionalConfiguration**: string: Stringified JSON that contains configuration to be used by the connector (e.g., OPC UA, ONVIF).
* **address**: string (Required): The endpoint address & port. This can be either an IP address (e.g., 192.168.1.1) or a fully qualified domain name (FQDN, e.g., server.example.com).
* **endpointType**: string (Required): Type of connection endpoint.
* **lastUpdatedOn**: string: The timestamp (in UTC) when the endpoint was discovered.
* **supportedAuthenticationMethods**: ('Anonymous' | 'Certificate' | 'UsernamePassword' | string)[]: List of supported authentication methods supported by device for Inbound connections.
* **version**: string: Protocol version associated with the endpoint e.g. 1 or 2 for endpointType Microsoft.HTTP, and 3.5 or 5.0 for endpointType Microsoft.Mqtt etc.

## DiscoveredMessagingEndpoints
### Properties
* **inbound**: [DiscoveredMessagingEndpointsInbound](#discoveredmessagingendpointsinbound): Set of endpoints to connect to the device.
* **outbound**: [DiscoveredOutboundEndpoints](#discoveredoutboundendpoints): Set of endpoints a device can connect to.

## DiscoveredMessagingEndpointsInbound
### Properties
### Additional Properties
* **Additional Properties Type**: [DiscoveredInboundEndpoints](#discoveredinboundendpoints)

## DiscoveredOutboundEndpoints
### Properties
* **assigned**: [DiscoveredOutboundEndpointsAssigned](#discoveredoutboundendpointsassigned) (Required): Endpoints the device can connect to.

## DiscoveredOutboundEndpointsAssigned
### Properties
### Additional Properties
* **Additional Properties Type**: [DeviceMessagingEndpoint](#devicemessagingendpoint)

## Error
### Properties
* **code**: string (ReadOnly): Error code for classification of errors (ex: '400', '404', '500', etc.).
* **details**: [ErrorDetails](#errordetails)[] (ReadOnly): Array of error details that describe the status of each error.
* **message**: string (ReadOnly): Human-readable helpful error message to provide additional context for error (e.g.,: “Capability ID 'foo' does not exist”).

## ErrorDetails
### Properties
* **code**: string (ReadOnly): Multi-part error code for classification and root causing of errors (ex: 400.200.100.432).
* **correlationId**: string (ReadOnly): Unique identifier for the transaction to aid in debugging.
* **info**: string (ReadOnly): Human-readable helpful detailed text context for debugging (ex: “The following mechanisms are supported...”).
* **message**: string (ReadOnly): Human-readable helpful error message to provide additional context for error (ex: “Authentication method not supported”).

## Event
### Properties
* **eventConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **eventNotifier**: string (Required): The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
* **name**: string (Required): The name of the event.
* **observabilityMode**: 'Log' | 'None' | string: An indication of how the event should be mapped to OpenTelemetry.
* **topic**: [Topic](#topic): Object that describes the topic information for the specific event.

## EventDestination
* **Discriminator**: target

### Base Properties

### EventMqttDestination
#### Properties
* **configuration**: [MqttDestinationConfiguration](#mqttdestinationconfiguration) (Required): The MQTT destination configuration.
* **target**: 'Mqtt' (Required): Target destination.

### EventStorageDestination
#### Properties
* **configuration**: [StorageDestinationConfiguration](#storagedestinationconfiguration) (Required): The storage destination configuration.
* **target**: 'Storage' (Required): Target destination.


## ExtendedLocation
### Properties
* **name**: string (Required): The extended location name.
* **type**: string (Required): The extended location type.

## HostAuthentication
### Properties
* **method**: 'Anonymous' | 'Certificate' | 'UsernamePassword' | string (Required): Defines the method to authenticate the user of the client at the server.
* **usernamePasswordCredentials**: [UsernamePasswordCredentials](#usernamepasswordcredentials): Defines the username and password references when UsernamePassword user authentication mode is selected.
* **x509Credentials**: [X509CertificateCredentials](#x509certificatecredentials): Defines the certificate reference when Certificate user authentication mode is selected.

## InboundEndpoints
### Properties
* **additionalConfiguration**: string: Stringified JSON that contains configuration to be used by the connector (e.g., OPC UA, ONVIF).
* **address**: string (Required): The endpoint address & port. This can be either an IP address (e.g., 192.168.1.1) or a fully qualified domain name (FQDN, e.g., server.example.com).
* **authentication**: [HostAuthentication](#hostauthentication): Defines the client authentication mechanism to the server.
* **endpointType**: string (Required): Type of connection endpoint.
* **trustSettings**: [TrustSettings](#trustsettings): Defines server trust settings for the endpoint.
* **version**: string: Protocol version associated with the endpoint e.g. 1 or 2 for endpointType Microsoft.HTTP, and 3.5 or 5.0 for endpointType Microsoft.Mqtt etc.

## ManagementAction
### Properties
* **actionConfiguration**: string: Stringified JSON that contains connector-specific configuration for the action.
* **actionType**: 'Call' | 'Read' | 'Write' | string: The type of the action.
* **name**: string (Required): Name of the action.
* **targetUri**: string (Required): The target URI on which a client can invoke the specific action.
* **timeoutInSeconds**: int: Response timeout for the action.
* **topic**: string: The MQTT topic path on which a client will receive the request for the action.
* **typeRef**: string: URI or type definition ID.

## ManagementGroup
### Properties
* **actions**: [ManagementAction](#managementaction)[]: Array of actions that are part of the management group. Each action can have an individual configuration.
* **dataSource**: string: Reference to a data source for a given management group.
* **defaultTimeoutInSeconds**: int: Default response timeout for all actions that are part of the management group.
* **defaultTopic**: string: Default MQTT topic path on which a client will receive the request for all actions that are part of the management group.
* **managementGroupConfiguration**: string: Stringified JSON that contains connector-specific configuration for the management group.
* **name**: string (Required): Name of the management group.
* **typeRef**: string: URI or type definition ID.

## MessageSchemaReference
### Properties
* **schemaName**: string (Required, ReadOnly): The message schema name.
* **schemaRegistryNamespace**: string (Required, ReadOnly): The message schema registry namespace.
* **schemaVersion**: string (Required, ReadOnly): The message schema version.

## Messaging
### Properties
* **endpoints**: [MessagingEndpoints](#messagingendpoints): Dictionary of messaging endpoints.

## MessagingEndpoint
### Properties
* **address**: string (Required): The endpoint address to connect to.
* **endpointType**: string: Type of connection used for messaging endpoint.
* **resourceId**: string: The messaging endpoint Azure resource Id.

## MessagingEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [MessagingEndpoint](#messagingendpoint)

## MessagingEndpoints
### Properties
* **inbound**: [MessagingEndpointsInbound](#messagingendpointsinbound): Set of endpoints to connect to the device.
* **outbound**: [OutboundEndpoints](#outboundendpoints): Set of endpoints a device can connect to.

## MessagingEndpointsInbound
### Properties
### Additional Properties
* **Additional Properties Type**: [InboundEndpoints](#inboundendpoints)

## MigrateResult
### Properties
* **error**: [Error](#error): The error if the migrate operation is not successful.
* **resourceId**: string: The resource Id of the asset resource.
* **result**: 'Failed' | 'Succeeded' | string (ReadOnly): The result of the migrate operation.

## MqttDestinationConfiguration
### Properties
* **qos**: 'Qos0' | 'Qos1' | string: The MQTT QoS setting. Defaults to QoS 1.
* **retain**: 'Keep' | 'Never' | string: When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'.
* **topic**: string (Required): The MQTT topic.
* **ttl**: int: The MQTT TTL setting.

## NamespaceAssetProperties
### Properties
* **assetTypeRefs**: string[]: URIs or type definition IDs.
* **attributes**: [NamespaceAssetPropertiesAttributes](#namespaceassetpropertiesattributes): A set of key-value pairs that contain custom attributes set by the customer.
* **datasets**: [NamespaceDataset](#namespacedataset)[]: Array of datasets that are part of the asset. Each dataset describes the data points that make up the set.
* **defaultDatasetsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
* **defaultDatasetsDestinations**: [DatasetDestination](#datasetdestination)[]: Default destinations for a dataset.
* **defaultEventsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
* **defaultEventsDestinations**: [EventDestination](#eventdestination)[]: Default destinations for an event.
* **defaultManagementGroupsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all management groups. Each management group can have its own configuration that overrides the default settings here.
* **defaultStreamsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all streams. Each stream can have its own configuration that overrides the default settings here.
* **defaultStreamsDestinations**: [StreamDestination](#streamdestination)[]: Default destinations for a stream.
* **description**: string: Human-readable description of the asset.
* **deviceRef**: [DeviceRef](#deviceref) (Required): Reference to the device that provides data for this asset. Must provide device name & endpoint on the device to use.
* **discoveredAssetRefs**: string[]: Reference to a list of discovered assets. Populated only if the asset has been created from discovery flow. Discovered asset names must be provided.
* **displayName**: string: Human-readable display name.
* **documentationUri**: string: Asset documentation reference.
* **enabled**: bool: Enabled/disabled status of the asset.
* **eventGroups**: [NamespaceEventGroup](#namespaceeventgroup)[]: Array of event groups that are part of the asset. Each event group can have per-event group configuration.
* **externalAssetId**: string: Asset ID provided by the customer.
* **hardwareRevision**: string: Asset hardware revision number.
* **lastTransitionTime**: string (ReadOnly): A timestamp (in UTC) that is updated each time the resource is modified.
* **managementGroups**: [ManagementGroup](#managementgroup)[]: Array of management groups that are part of the asset. Each management group can have a per-group configuration.
* **manufacturer**: string: Asset manufacturer.
* **manufacturerUri**: string: Asset manufacturer URI.
* **model**: string: Asset model.
* **productCode**: string: Asset product code.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **serialNumber**: string: Asset serial number.
* **softwareRevision**: string: Asset software revision number.
* **status**: [NamespaceAssetStatus](#namespaceassetstatus) (ReadOnly): Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
* **streams**: [NamespaceStream](#namespacestream)[]: Array of streams that are part of the asset. Each stream can have a per-stream configuration.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable ID.
* **version**: int (ReadOnly): An integer that is incremented each time the resource is modified.

## NamespaceAssetPropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## NamespaceAssetStatus
### Properties
* **config**: [StatusConfig](#statusconfig) (ReadOnly): Defines the asset status config properties.
* **datasets**: [NamespaceAssetStatusDataset](#namespaceassetstatusdataset)[] (ReadOnly): Array of dataset statuses that describe the status of each dataset.
* **eventGroups**: [NamespaceAssetStatusEventGroup](#namespaceassetstatuseventgroup)[] (ReadOnly): Array of event group statuses that describe the status of each event group.
* **managementGroups**: [NamespaceAssetStatusManagementGroup](#namespaceassetstatusmanagementgroup)[] (ReadOnly): Array of management group statuses that describe the status of each management group.
* **streams**: [NamespaceAssetStatusStream](#namespaceassetstatusstream)[] (ReadOnly): Array of stream statuses that describe the status of each stream.

## NamespaceAssetStatusDataset
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **messageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the dataset. Must be unique within the status.datasets array. This name is used to correlate between the spec and status dataset information.

## NamespaceAssetStatusEvent
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **messageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the event. Must be unique within the status.events array. This name is used to correlate between the spec and status event information.

## NamespaceAssetStatusEventGroup
### Properties
* **events**: [NamespaceAssetStatusEvent](#namespaceassetstatusevent)[] (ReadOnly): Array of event statuses that describe the status of each event in the event group.
* **name**: string (Required, ReadOnly): The name of the event group. Must be unique within the status.eventGroups array. This name is used to correlate between the spec and status event group information.

## NamespaceAssetStatusManagementAction
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **name**: string (Required, ReadOnly): The name of the action. Must be unique within the status.actions array. This name is used to correlate between the spec and status event information.
* **requestMessageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The request message schema reference object for the action.
* **responseMessageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The response message schema reference object for the action.

## NamespaceAssetStatusManagementGroup
### Properties
* **actions**: [NamespaceAssetStatusManagementAction](#namespaceassetstatusmanagementaction)[] (ReadOnly): Array of action statuses that describe the status of each action.
* **name**: string (Required, ReadOnly): The name of the management group. Must be unique within the status.managementGroups array. This name is used to correlate between the spec and status event information.

## NamespaceAssetStatusStream
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **messageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the stream. Must be unique within the status.streams array. This name is used to correlate between the spec and status event information.

## NamespaceDataset
### Properties
* **dataPoints**: [NamespaceDatasetDataPoint](#namespacedatasetdatapoint)[]: Array of data points that are part of the dataset. Each data point can have per-data point configuration.
* **datasetConfiguration**: string: Stringified JSON that contains connector-specific JSON string that describes configuration for the specific dataset.
* **dataSource**: string: Reference to a data source for a given dataset.
* **destinations**: [DatasetDestination](#datasetdestination)[]: Destinations for a dataset.
* **name**: string (Required): Name of the dataset.
* **typeRef**: string: URI or type definition ID.

## NamespaceDatasetDataPoint
### Properties
* **dataPointConfiguration**: string: Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **dataSource**: string (Required): The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
* **name**: string (Required): The name of the data point.
* **typeRef**: string: URI or type definition ID.

## NamespaceDeviceProperties
### Properties
* **attributes**: [NamespaceDevicePropertiesAttributes](#namespacedevicepropertiesattributes): A set of key-value pairs that contain custom attributes set by the customer.
* **discoveredDeviceRef**: string: Reference to a device. Populated only if the device had been created from discovery flow. Discovered device name must be provided.
* **enabled**: bool: Indicates if the resource is enabled or not.
* **endpoints**: [MessagingEndpoints](#messagingendpoints): Property bag containing the device's unassigned and assigned endpoints.
* **externalDeviceId**: string: The Device ID provided by the customer.
* **lastTransitionTime**: string (ReadOnly): A timestamp (in UTC) that is updated each time the resource is modified.
* **manufacturer**: string: Device manufacturer.
* **model**: string: Device model.
* **operatingSystem**: string: Device operating system.
* **operatingSystemVersion**: string: Device operating system version.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: [DeviceStatus](#devicestatus) (ReadOnly): Device status updates.
* **uuid**: string (ReadOnly): A unique identifier for the device.
* **version**: int (ReadOnly): An integer that is incremented each time the resource is modified.

## NamespaceDevicePropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## NamespaceDiscoveredAssetProperties
### Properties
* **assetTypeRefs**: string[]: URIs or type definition IDs.
* **attributes**: [NamespaceDiscoveredAssetPropertiesAttributes](#namespacediscoveredassetpropertiesattributes): A set of key-value pairs that contain custom attributes.
* **datasets**: [NamespaceDiscoveredDataset](#namespacediscovereddataset)[]: Array of datasets that are part of the asset. Each dataset spec describes the data points that make up the set.
* **defaultDatasetsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
* **defaultDatasetsDestinations**: [DatasetDestination](#datasetdestination)[]: Default destinations for a dataset.
* **defaultEventsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
* **defaultEventsDestinations**: [EventDestination](#eventdestination)[]: Default destinations for an event.
* **defaultManagementGroupsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all management groups. Each management group can have its own configuration that overrides the default settings here.
* **defaultStreamsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all streams. Each stream can have its own configuration that overrides the default settings here.
* **defaultStreamsDestinations**: [StreamDestination](#streamdestination)[]: Default destinations for a stream.
* **description**: string: Human-readable description of the asset.
* **deviceRef**: [DeviceRef](#deviceref) (Required): Reference to the device that provides data for this asset. Must provide device name & endpoint on the device to use.
* **discoveryId**: string (Required): Identifier used to detect changes in the asset.
* **displayName**: string: Human-readable display name.
* **documentationUri**: string: Asset documentation reference.
* **eventGroups**: [NamespaceDiscoveredEventGroup](#namespacediscoveredeventgroup)[]: Array of event groups that are part of the asset. Each event group can have per-event group configuration.
* **externalAssetId**: string: Asset ID provided by the customer.
* **hardwareRevision**: string: Asset hardware revision number.
* **managementGroups**: [NamespaceDiscoveredManagementGroup](#namespacediscoveredmanagementgroup)[]: Array of management groups that are part of the asset. Each management group can have a per-group configuration.
* **manufacturer**: string: Asset manufacturer.
* **manufacturerUri**: string: Asset manufacturer URI.
* **model**: string: Asset model.
* **productCode**: string: Asset product code.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **serialNumber**: string: Asset serial number.
* **softwareRevision**: string: Asset software revision number.
* **streams**: [NamespaceDiscoveredStream](#namespacediscoveredstream)[]: Array of streams that are part of the asset. Each stream can have a per-stream configuration.
* **version**: int (Required): An integer that is incremented each time the resource is modified.

## NamespaceDiscoveredAssetPropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## NamespaceDiscoveredDataset
### Properties
* **dataPoints**: [NamespaceDiscoveredDatasetDataPoint](#namespacediscovereddatasetdatapoint)[]: Array of data points that are part of the dataset. Each data point can have per-data point configuration.
* **datasetConfiguration**: string: Stringified JSON that contains connector-specific properties that describes configuration for the specific dataset.
* **dataSource**: string: Reference to a data source for a given dataset.
* **destinations**: [DatasetDestination](#datasetdestination)[]: Destinations for a dataset.
* **lastUpdatedOn**: string: Timestamp (in UTC) indicating when the dataset was added or modified.
* **name**: string (Required): Name of the dataset.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredDatasetDataPoint
### Properties
* **dataPointConfiguration**: string: Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **dataSource**: string (Required): The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
* **lastUpdatedOn**: string: UTC timestamp indicating when the data point was added or modified.
* **name**: string (Required): The name of the data point.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredDeviceProperties
### Properties
* **attributes**: [NamespaceDiscoveredDevicePropertiesAttributes](#namespacediscovereddevicepropertiesattributes): A set of key-value pairs that contain custom attributes.
* **discoveryId**: string (Required): Identifier used to detect changes in the discovered device.
* **endpoints**: [DiscoveredMessagingEndpoints](#discoveredmessagingendpoints): Endpoints for discovered devices.
* **externalDeviceId**: string: A device ID that represents the device in a system external to Azure. Unique within scope of an Azure tenant.
* **manufacturer**: string: Device manufacturer.
* **model**: string: Device model.
* **operatingSystem**: string: Device operating system name.
* **operatingSystemVersion**: string: Device operating system version.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **version**: int (Required): An integer that is incremented each time the resource is modified.

## NamespaceDiscoveredDevicePropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## NamespaceDiscoveredEvent
### Properties
* **dataSource**: string: Reference to a data source for a given event.
* **destinations**: [EventDestination](#eventdestination)[]: Destinations for an event.
* **eventConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **lastUpdatedOn**: string: UTC timestamp indicating when the event was added or modified.
* **name**: string (Required): The name of the event.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredEventGroup
### Properties
* **dataSource**: string: The address of the notifier of the event group in the asset (e.g. URL) so that a client can access the event group on the asset.
* **defaultDestinations**: [EventDestination](#eventdestination)[]: Destinations for events. Default destinations when destinations is not defined at the event level.
* **eventGroupConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event group. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **events**: [NamespaceDiscoveredEvent](#namespacediscoveredevent)[]: Array of events that are part of the event group.
* **name**: string (Required): The name of the event group.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredManagementAction
### Properties
* **actionConfiguration**: string: Stringified JSON that contains connector-specific configuration for the action.
* **actionType**: 'Call' | 'Read' | 'Write' | string: The type of the action.
* **lastUpdatedOn**: string: Timestamp (in UTC) indicating when the management action was added or modified.
* **name**: string (Required): Name of the action.
* **targetUri**: string (Required): The target URI on which a client can invoke the specific action.
* **timeoutInSeconds**: int: Response timeout for the action.
* **topic**: string: The MQTT topic path on which a client will receive the request for the action.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredManagementGroup
### Properties
* **actions**: [NamespaceDiscoveredManagementAction](#namespacediscoveredmanagementaction)[]: Array of actions that are part of the management group. Each action can have an individual configuration.
* **dataSource**: string: Reference to a data source for a given management group.
* **defaultTimeoutInSeconds**: int: Default response timeout for all actions that are part of the management group.
* **defaultTopic**: string: Default MQTT topic path on which a client will receive the request for all actions that are part of the management group.
* **lastUpdatedOn**: string: Timestamp (in UTC) indicating when the management group was added or modified.
* **managementGroupConfiguration**: string: Stringified JSON that contains connector-specific configuration for the management group.
* **name**: string (Required): Name of the management group.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredStream
### Properties
* **destinations**: [StreamDestination](#streamdestination)[]: Destinations for a stream.
* **lastUpdatedOn**: string: Timestamp (in UTC) indicating when the stream was added or modified.
* **name**: string (Required): Name of the stream definition.
* **streamConfiguration**: string: Stringified JSON that contains connector-specific configuration for the specific stream.
* **typeRef**: string: URI or type definition ID.

## NamespaceEvent
### Properties
* **dataSource**: string: Reference to a data source for a given event.
* **destinations**: [EventDestination](#eventdestination)[]: Destinations for an event.
* **eventConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **name**: string (Required): The name of the event.
* **typeRef**: string: URI or type definition ID.

## NamespaceEventGroup
### Properties
* **dataSource**: string: The address of the notifier of the event group in the asset (e.g. URL) so that a client can access the event group on the asset.
* **defaultDestinations**: [EventDestination](#eventdestination)[]: Destinations for events. Default destinations when destinations is not defined at the event level.
* **eventGroupConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event group. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **events**: [NamespaceEvent](#namespaceevent)[]: Array of events that are part of the event group.
* **name**: string (Required): The name of the event group.
* **typeRef**: string: URI or type definition ID.

## NamespaceMessageSchemaReference
### Properties
* **schemaName**: string (Required, ReadOnly): The message schema name.
* **schemaRegistryNamespace**: string (Required, ReadOnly): The message schema registry namespace.
* **schemaVersion**: string (Required, ReadOnly): The message schema version.

## NamespaceMigrateRequest
### Properties
* **resourceIds**: string[]: List of asset resources to be migrated.
* **scope**: 'Resources' | string: Scope of the migrate resources operation.

## NamespaceMigrateResponse
### Properties
* **migrateResults**: [MigrateResult](#migrateresult)[]: List of migrate results containing result of each asset migrate operation.

## NamespaceProperties
### Properties
* **messaging**: [Messaging](#messaging): Assigned and unassigned messaging endpoints.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable ID.

## NamespaceStream
### Properties
* **destinations**: [StreamDestination](#streamdestination)[]: Destinations for a stream.
* **name**: string (Required): Name of the stream definition.
* **streamConfiguration**: string: Stringified JSON that contains connector-specific configuration for the specific stream.
* **typeRef**: string: URI or type definition ID.

## OutboundEndpoints
### Properties
* **assigned**: [OutboundEndpointsAssigned](#outboundendpointsassigned) (Required): Endpoints the device can connect to.
* **unassigned**: [OutboundEndpointsUnassigned](#outboundendpointsunassigned): Set of most recently removed endpoints.

## OutboundEndpointsAssigned
### Properties
### Additional Properties
* **Additional Properties Type**: [DeviceMessagingEndpoint](#devicemessagingendpoint)

## OutboundEndpointsUnassigned
### Properties
### Additional Properties
* **Additional Properties Type**: [DeviceMessagingEndpoint](#devicemessagingendpoint)

## SchemaProperties
### Properties
* **description**: string: Human-readable description of the schema.
* **displayName**: string: Human-readable display name.
* **format**: 'Delta/1.0' | 'JsonSchema/draft-07' | string (Required): Format of the schema.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **schemaType**: 'MessageSchema' | string (Required): Type of the schema.
* **tags**: [SchemaPropertiesTags](#schemapropertiestags): Schema tags.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.

## SchemaPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SchemaRegistryProperties
### Properties
* **description**: string: Human-readable description of the schema registry.
* **displayName**: string: Human-readable display name.
* **namespace**: string {maxLength: 32, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required): Schema registry namespace. Uniquely identifies a schema registry within a tenant.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **storageAccountContainerUrl**: string (Required): The Storage Account's Container URL where schemas will be stored.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.

## SchemaVersionProperties
### Properties
* **description**: string: Human-readable description of the schema.
* **hash**: string (ReadOnly): Hash of the schema content.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **schemaContent**: string (Required): Schema content.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.

## StatusConfig
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **lastTransitionTime**: string (ReadOnly): A read-only timestamp indicating the last time the configuration has been modified from the perspective of the current actual (edge) state of the CRD. Edge would be the only writer of this value and would sync back up to the cloud.
* **version**: int (ReadOnly): A read-only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (edge) state of the CRD. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version.

## StatusError
### Properties
* **code**: string (ReadOnly): Error code for classification of errors (ex: '400', '404', '500', etc.).
* **details**: [ErrorDetails](#errordetails)[] (ReadOnly): Array of error details that describe the status of each error.
* **message**: string (ReadOnly): Human-readable helpful error message to provide additional context for error (e.g.,: “Capability ID 'foo' does not exist”).

## StorageDestinationConfiguration
### Properties
* **path**: string (Required): The storage destination path.

## StreamDestination
* **Discriminator**: target

### Base Properties

### StreamMqttDestination
#### Properties
* **configuration**: [MqttDestinationConfiguration](#mqttdestinationconfiguration) (Required): The MQTT destination configuration.
* **target**: 'Mqtt' (Required): Target destination.

### StreamStorageDestination
#### Properties
* **configuration**: [StorageDestinationConfiguration](#storagedestinationconfiguration) (Required): The storage destination configuration.
* **target**: 'Storage' (Required): Target destination.


## SystemAssignedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): Type of managed service identity (either system assigned, or none).

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Topic
### Properties
* **path**: string (Required): The topic path for messages published to an MQTT broker.
* **retain**: 'Keep' | 'Never' | string: When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrustSettings
### Properties
* **trustList**: string: Defines a secret reference for certificates to trust.

## UsernamePasswordCredentials
### Properties
* **passwordSecretName**: string (Required): The name of the secret containing the password.
* **usernameSecretName**: string (Required): The name of the secret containing the username.

## X509CertificateCredentials
### Properties
* **certificateSecretName**: string (Required): The name of the secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).
* **intermediateCertificatesSecretName**: string: The name of the secret containing the combined intermediate certificates in PEM format.
* **keySecretName**: string: The name of the secret containing the certificate private key in PEM or DER format.

## X509Credentials
### Properties
* **certificateSecretName**: string (Required): The name of the secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).

