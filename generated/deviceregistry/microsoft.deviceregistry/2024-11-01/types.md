# Microsoft.DeviceRegistry @ 2024-11-01

## Resource Microsoft.DeviceRegistry/assetEndpointProfiles@2024-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssetEndpointProfileProperties](#assetendpointprofileproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/assetEndpointProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/assets@2024-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssetProperties](#assetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/billingContainers@2024-11-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource ETag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingContainerProperties](#billingcontainerproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/billingContainers' (ReadOnly, DeployTimeConstant): The resource type

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

## Event
### Properties
* **eventConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **eventNotifier**: string (Required): The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
* **name**: string (Required): The name of the event.
* **observabilityMode**: 'Log' | 'None' | string: An indication of how the event should be mapped to OpenTelemetry.
* **topic**: [Topic](#topic): Object that describes the topic information for the specific event.

## ExtendedLocation
### Properties
* **name**: string (Required): The extended location name.
* **type**: string (Required): The extended location type.

## MessageSchemaReference
### Properties
* **schemaName**: string (Required, ReadOnly): The message schema name.
* **schemaRegistryNamespace**: string (Required, ReadOnly): The message schema registry namespace.
* **schemaVersion**: string (Required, ReadOnly): The message schema version.

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

## UsernamePasswordCredentials
### Properties
* **passwordSecretName**: string (Required): The name of the secret containing the password.
* **usernameSecretName**: string (Required): The name of the secret containing the username.

## X509Credentials
### Properties
* **certificateSecretName**: string (Required): The name of the secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).

