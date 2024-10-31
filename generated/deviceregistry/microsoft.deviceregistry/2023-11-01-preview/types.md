# Microsoft.DeviceRegistry @ 2023-11-01-preview

## Resource Microsoft.DeviceRegistry/assetEndpointProfiles@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssetEndpointProfileProperties](#assetendpointprofileproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/assetEndpointProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/assets@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssetProperties](#assetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/assets' (ReadOnly, DeployTimeConstant): The resource type

## AssetEndpointProfileProperties
### Properties
* **additionalConfiguration**: string: Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **targetAddress**: string (Required): The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration.
* **transportAuthentication**: [TransportAuthentication](#transportauthentication): Defines the authentication mechanism for the southbound connector connecting to the shop floor/OT device.
* **userAuthentication**: [UserAuthentication](#userauthentication): Defines the client authentication mechanism to the server.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.

## AssetProperties
### Properties
* **assetEndpointProfileUri**: string (Required): A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must have the format <ModuleCR.metadata.namespace>/<ModuleCR.metadata.name>.
* **assetType**: string: Resource path to asset type (model) definition.
* **attributes**: [AssetPropertiesAttributes](#assetpropertiesattributes): A set of key-value pairs that contain custom attributes set by the customer.
* **dataPoints**: [DataPoint](#datapoint)[]: Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration.
* **defaultDataPointsConfiguration**: string: Stringified JSON that contains protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here.
* **defaultEventsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
* **description**: string: Human-readable description of the asset.
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
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
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
* **errors**: [AssetStatusError](#assetstatuserror)[] (ReadOnly): Array object to transfer and persist errors that originate from the Edge.
* **version**: int (ReadOnly): A read only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (Edge) state of the Asset. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version.

## AssetStatusError
### Properties
* **code**: int (ReadOnly): Error code for classification of errors (ex: 400, 404, 500, etc.).
* **message**: string (ReadOnly): Human readable helpful error message to provide additional context for error (ex: “capability Id 'foo' does not exist”).

## DataPoint
### Properties
* **capabilityId**: string: The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1.
* **dataPointConfiguration**: string: Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **dataSource**: string (Required): The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
* **name**: string: The name of the data point.
* **observabilityMode**: 'counter' | 'gauge' | 'histogram' | 'log' | 'none' | string: An indication of how the data point should be mapped to OpenTelemetry.

## Event
### Properties
* **capabilityId**: string: The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1.
* **eventConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **eventNotifier**: string (Required): The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
* **name**: string: The name of the event.
* **observabilityMode**: 'log' | 'none' | string: An indication of how the event should be mapped to OpenTelemetry.

## ExtendedLocation
### Properties
* **name**: string (Required): The extended location name.
* **type**: string (Required): The extended location type.

## OwnCertificate
### Properties
* **certPasswordReference**: string: Secret Reference Name (Pfx or Pem password).
* **certSecretReference**: string: Secret Reference name (cert and private key).
* **certThumbprint**: string: Certificate thumbprint.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
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

## TransportAuthentication
### Properties
* **ownCertificates**: [OwnCertificate](#owncertificate)[] (Required): Defines a reference to a secret which contains all certificates and private keys that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys.

## UserAuthentication
### Properties
* **mode**: 'Anonymous' | 'Certificate' | 'UsernamePassword' | string (Required): Defines the method to authenticate the user of the client at the server.
* **usernamePasswordCredentials**: [UsernamePasswordCredentials](#usernamepasswordcredentials): Defines the username and password references when UsernamePassword user authentication mode is selected.
* **x509Credentials**: [X509Credentials](#x509credentials): Defines the certificate reference when Certificate user authentication mode is selected.

## UsernamePasswordCredentials
### Properties
* **passwordReference**: string (Required): A reference to secret containing the password.
* **usernameReference**: string (Required): A reference to secret containing the username.

## X509Credentials
### Properties
* **certificateReference**: string (Required): A reference to secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).

