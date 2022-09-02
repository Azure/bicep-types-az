# Microsoft.Media @ 2021-11-01-preview

## Resource Microsoft.Media/locations/videoAnalyzerOperationResults@2021-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VideoAnalyzerIdentity](#videoanalyzeridentity) (ReadOnly): The identities associated to the Video Analyzer resource.
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VideoAnalyzerProperties](#videoanalyzerproperties) (ReadOnly): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Media/locations/videoAnalyzerOperationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VideoAnalyzerIdentity](#videoanalyzeridentity): The identities associated to the Video Analyzer resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VideoAnalyzerProperties](#videoanalyzerproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/videoAnalyzers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/accessPolicies@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessPolicyProperties](#accesspolicyproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Media/videoAnalyzers/accessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/edgeModules@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeModuleProperties](#edgemoduleproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Media/videoAnalyzers/edgeModules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/livePipelines@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LivePipelineProperties](#livepipelineproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Media/videoAnalyzers/livePipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/pipelineJobs@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineJobProperties](#pipelinejobproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Media/videoAnalyzers/pipelineJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/pipelineTopologies@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Batch' | 'Live' | string (Required): Topology kind.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineTopologyProperties](#pipelinetopologyproperties): The resource properties.
* **sku**: [Sku](#sku) (Required): Describes the properties of a SKU.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Media/videoAnalyzers/pipelineTopologies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/privateEndpointConnections@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Media/videoAnalyzers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/privateEndpointConnections/operationResults@2021-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Media/videoAnalyzers/privateEndpointConnections/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/privateLinkResources@2021-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Media/videoAnalyzers/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/videos@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VideoProperties](#videoproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Media/videoAnalyzers/videos' (ReadOnly, DeployTimeConstant): The resource type

## Function listContentToken (Microsoft.Media/videoAnalyzers/videos@2021-11-01-preview)
* **Resource**: Microsoft.Media/videoAnalyzers/videos
* **ApiVersion**: 2021-11-01-preview
* **Output**: [VideoContentToken](#videocontenttoken)

## Function listProvisioningToken (Microsoft.Media/videoAnalyzers/edgeModules@2021-11-01-preview)
* **Resource**: Microsoft.Media/videoAnalyzers/edgeModules
* **ApiVersion**: 2021-11-01-preview
* **Input**: [ListProvisioningTokenInput](#listprovisioningtokeninput)
* **Output**: [EdgeModuleProvisioningToken](#edgemoduleprovisioningtoken)

## AccessPolicyProperties
### Properties
* **authentication**: [AuthenticationBase](#authenticationbase): Authentication method to be used when validating client API access.
* **role**: 'Reader' | string: Defines the access level granted by this policy.

## AccountEncryption
### Properties
* **identity**: [ResourceIdentity](#resourceidentity): The Key Vault identity.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The properties of the key used to encrypt the account.
* **status**: string (ReadOnly): The current status of the Key Vault mapping.
* **type**: 'CustomerKey' | 'SystemKey' | string (Required): The type of key used to encrypt the Account Key.

## AudioEncoderBase
* **Discriminator**: @type

### Base Properties
* **bitrateKbps**: string: Bitrate, in kilobits per second or Kbps, at which audio should be encoded (2-channel stereo audio at a sampling rate of 48 kHz). Allowed values are 96, 112, 128, 160, 192, 224, and 256. If omitted, the bitrate of the input audio is used.

### AudioEncoderAac
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.AudioEncoderAac' (Required): The discriminator for derived types.


## AuthenticationBase
* **Discriminator**: @type

### Base Properties

### JwtAuthentication
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.JwtAuthentication' (Required): The discriminator for derived types.
* **audiences**: string[]: List of expected token audiences. Token audience is valid if it matches at least one of the given values.
* **claims**: [TokenClaim](#tokenclaim)[]: List of additional token claims to be validated. Token must contains all claims and respective values for it to be valid.
* **issuers**: string[]: List of expected token issuers. Token issuer is valid if it matches at least one of the given values.
* **keys**: [TokenKey](#tokenkey)[]: List of keys which can be used to validate access tokens. Having multiple keys allow for seamless key rotation of the token signing key. Token signature must match exactly one key.


## CertificateSource
* **Discriminator**: @type

### Base Properties

### PemCertificateList
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.PemCertificateList' (Required): The discriminator for derived types.
* **certificates**: string[] (Required): PEM formatted public certificates. One certificate per entry.


## CredentialsBase
* **Discriminator**: @type

### Base Properties

### UsernamePasswordCredentials
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.UsernamePasswordCredentials' (Required): The discriminator for derived types.
* **password**: string (Required): Password to be presented as part of the credentials. It is recommended that this value is parameterized as a secret string in order to prevent this value to be returned as part of the resource on API requests.
* **username**: string (Required): Username to be presented as part of the credentials.


## EdgeModuleProperties
### Properties
* **edgeModuleId**: string (ReadOnly): Internal ID generated for the instance of the Video Analyzer edge module.

## EdgeModuleProvisioningToken
### Properties
* **expirationDate**: string (ReadOnly): The expiration date of the registration token. The Azure Video Analyzer IoT edge module must be initialized and connected to the Internet prior to the token expiration date.
* **token**: string (ReadOnly): The token blob to be provided to the Azure Video Analyzer IoT edge module through the Azure IoT Edge module twin properties.

## EncoderPresetBase
* **Discriminator**: @type

### Base Properties

### EncoderCustomPreset
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.EncoderCustomPreset' (Required): The discriminator for derived types.
* **audioEncoder**: [AudioEncoderBase](#audioencoderbase): Describes a custom preset for encoding audio.
* **videoEncoder**: [VideoEncoderBase](#videoencoderbase): Describes a custom preset for encoding video.

### EncoderSystemPreset
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.EncoderSystemPreset' (Required): The discriminator for derived types.
* **name**: 'SingleLayer_1080p_H264_AAC' | 'SingleLayer_2160p_H264_AAC' | 'SingleLayer_540p_H264_AAC' | 'SingleLayer_720p_H264_AAC' | string (Required): Name of the built-in encoding preset.


## Endpoint
### Properties
* **endpointUrl**: string: The URL of the endpoint.
* **type**: 'ClientApi' | string (Required): The type of the endpoint.

## EndpointBase
* **Discriminator**: @type

### Base Properties
* **credentials**: [CredentialsBase](#credentialsbase) (Required): Credentials to be presented to the endpoint.
* **tunnel**: [TunnelBase](#tunnelbase): Describes the tunnel through which Video Analyzer can connect to the endpoint URL. This is an optional property, typically used when the endpoint is behind a firewall.
* **url**: string (Required): The endpoint URL for Video Analyzer to connect to.

### TlsEndpoint
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.TlsEndpoint' (Required): The discriminator for derived types.
* **trustedCertificates**: [CertificateSource](#certificatesource): List of trusted certificate authorities when authenticating a TLS connection. A null list designates that Azure Video Analyzer's list of trusted authorities should be used.
* **validationOptions**: [TlsValidationOptions](#tlsvalidationoptions): Validation options to use when authenticating a TLS connection. By default, strict validation is used.

### UnsecuredEndpoint
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.UnsecuredEndpoint' (Required): The discriminator for derived types.


## GroupLevelAccessControl
### Properties
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public network access is allowed for specified resources under the Video Analyzer account.

## IotHub
### Properties
* **id**: string (Required): The IoT Hub resource identifier.
* **identity**: [ResourceIdentity](#resourceidentity) (Required): The IoT Hub identity.
* **status**: string (ReadOnly): The current status of the Iot Hub mapping.

## KeyVaultProperties
### Properties
* **currentKeyIdentifier**: string (ReadOnly): The current key used to encrypt Video Analyzer account, including the key version.
* **keyIdentifier**: string (Required): The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).

## ListProvisioningTokenInput
### Properties
* **expirationDate**: string (Required): The desired expiration date of the registration token. The Azure Video Analyzer IoT edge module must be initialized and connected to the Internet prior to the token expiration date.

## LivePipelineProperties
### Properties
* **bitrateKbps**: int (Required): Maximum bitrate capacity in Kbps reserved for the live pipeline. The allowed range is from 500 to 3000 Kbps in increments of 100 Kbps. If the RTSP camera exceeds this capacity, then the service will disconnect temporarily from the camera. It will retry to re-establish connection (with exponential backoff), checking to see if the camera bitrate is now below the reserved capacity. Doing so will ensure that one 'noisy neighbor' does not affect other live pipelines in your account.
* **description**: string: An optional description for the pipeline.
* **parameters**: [ParameterDefinition](#parameterdefinition)[]: List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden.
* **state**: 'Activating' | 'Active' | 'Deactivating' | 'Inactive' | string (ReadOnly): Current state of the pipeline (read-only).
* **topologyName**: string (Required): The reference to an existing pipeline topology defined for real-time content processing. When activated, this live pipeline will process content according to the pipeline topology definition.

## NetworkAccessControl
### Properties
* **consumption**: [GroupLevelAccessControl](#grouplevelaccesscontrol): Public network access for consumption group.
* **ingestion**: [GroupLevelAccessControl](#grouplevelaccesscontrol): Public network access for ingestion group.
* **integration**: [GroupLevelAccessControl](#grouplevelaccesscontrol): Public network access for integration group.

## NodeInput
### Properties
* **nodeName**: string (Required): The name of the upstream node in the pipeline which output is used as input of the current node.

## ParameterDeclaration
### Properties
* **default**: string: The default value for the parameter to be used if the pipeline does not specify a value.
* **description**: string: Description of the parameter.
* **name**: string (Required): Name of the parameter.
* **type**: 'Bool' | 'Double' | 'Int' | 'SecretString' | 'String' | string (Required): Type of the parameter.

## ParameterDefinition
### Properties
* **name**: string (Required): Name of the parameter declared in the pipeline topology.
* **value**: string: Parameter value to be applied on this specific pipeline.

## PipelineJobError
### Properties
* **code**: string: The error code.
* **message**: string: The error message.

## PipelineJobProperties
### Properties
* **description**: string: An optional description for the pipeline.
* **error**: [PipelineJobError](#pipelinejoberror) (ReadOnly): Details about the error, in case the pipeline job fails.
* **expiration**: string (ReadOnly): The date-time by when this pipeline job will be automatically deleted from your account.
* **parameters**: [ParameterDefinition](#parameterdefinition)[]: List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden.
* **state**: 'Canceled' | 'Completed' | 'Failed' | 'Processing' | string (ReadOnly): Current state of the pipeline (read-only).
* **topologyName**: string (Required): Reference to an existing pipeline topology. When activated, this pipeline job will process content according to the pipeline topology definition.

## PipelineTopologyProperties
### Properties
* **description**: string: An optional description of the pipeline topology. It is recommended that the expected use of the topology to be described here.
* **parameters**: [ParameterDeclaration](#parameterdeclaration)[]: List of the topology parameter declarations. Parameters declared here can be referenced throughout the topology nodes through the use of "${PARAMETER_NAME}" string pattern. Parameters can have optional default values and can later be defined in individual instances of the pipeline.
* **processors**: [ProcessorNodeBase](#processornodebase)[]: List of the topology processor nodes. Processor nodes enable pipeline data to be analyzed, processed or transformed.
* **sinks**: [SinkNodeBase](#sinknodebase)[] (Required): List of the topology sink nodes. Sink nodes allow pipeline data to be stored or exported.
* **sources**: [SourceNodeBase](#sourcenodebase)[] (Required): List of the topology source nodes. Source nodes enable external data to be ingested by the pipeline.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource Private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ProcessorNodeBase
* **Discriminator**: @type

### Base Properties
* **inputs**: [NodeInput](#nodeinput)[] (Required): An array of upstream node references within the topology to be used as inputs for this node.
* **name**: string (Required): Node name. Must be unique within the topology.

### EncoderProcessor
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.EncoderProcessor' (Required): The discriminator for derived types.
* **preset**: [EncoderPresetBase](#encoderpresetbase) (Required): The encoder preset, which defines the recipe or instructions on how the input content should be processed.


## ResourceIdentity
### Properties
* **userAssignedIdentity**: string (Required): The user assigned managed identity's resource identifier to use when accessing a resource.

## SinkNodeBase
* **Discriminator**: @type

### Base Properties
* **inputs**: [NodeInput](#nodeinput)[] (Required): An array of upstream node references within the topology to be used as inputs for this node.
* **name**: string (Required): Node name. Must be unique within the topology.

### VideoSink
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.VideoSink' (Required): The discriminator for derived types.
* **videoCreationProperties**: [VideoCreationProperties](#videocreationproperties): Optional video properties to be used in case a new video resource needs to be created on the service.
* **videoName**: string (Required): Name of a new or existing video resource used to capture and publish content. Note: if downstream of RTSP source, and if disableArchive is set to true, then no content is archived.
* **videoPublishingOptions**: [VideoPublishingOptions](#videopublishingoptions): Options to change how the video sink publishes content via the video resource. This property is only allowed for topologies where "kind" is set to "live".


## Sku
### Properties
* **name**: 'Batch_S1' | 'Live_S1' | string (Required): The SKU name.
* **tier**: 'Standard' | string (ReadOnly): The SKU tier.

## SourceNodeBase
* **Discriminator**: @type

### Base Properties
* **name**: string (Required): Node name. Must be unique within the topology.

### RtspSource
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.RtspSource' (Required): The discriminator for derived types.
* **endpoint**: [EndpointBase](#endpointbase) (Required): RTSP endpoint information for Video Analyzer to connect to. This contains the required information for Video Analyzer to connect to RTSP cameras and/or generic RTSP servers.
* **transport**: 'Http' | 'Tcp' | string: Network transport utilized by the RTSP and RTP exchange: TCP or HTTP. When using TCP, the RTP packets are interleaved on the TCP RTSP connection. When using HTTP, the RTSP messages are exchanged through long lived HTTP connections, and the RTP packages are interleaved in the HTTP connections alongside the RTSP messages.

### VideoSource
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.VideoSource' (Required): The discriminator for derived types.
* **timeSequences**: [TimeSequenceBase](#timesequencebase) (Required): Describes a sequence of datetime ranges. The video source only picks up recorded media within these ranges.
* **videoName**: string (Required): Name of the Video Analyzer video resource to be used as the source.


## StorageAccount
### Properties
* **id**: string (Required): The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage).
* **identity**: [ResourceIdentity](#resourceidentity): A managed identity that Video Analyzer will use to access the storage account.
* **status**: string (ReadOnly): The current status of the storage account mapping.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TimeSequenceBase
* **Discriminator**: @type

### Base Properties

### VideoSequenceAbsoluteTimeMarkers
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers' (Required): The discriminator for derived types.
* **ranges**: string (Required): The sequence of datetime ranges. Example: '[["2021-10-05T03:30:00Z", "2021-10-05T03:40:00Z"]]'.


## TlsValidationOptions
### Properties
* **ignoreHostname**: string: When set to 'true' causes the certificate subject name validation to be skipped. Default is 'false'.
* **ignoreSignature**: string: When set to 'true' causes the certificate chain trust validation to be skipped. Default is 'false'.

## TokenClaim
### Properties
* **name**: string (Required): Name of the claim which must be present on the token.
* **value**: string (Required): Expected value of the claim to be present on the token.

## TokenKey
* **Discriminator**: @type

### Base Properties
* **kid**: string (Required): JWT token key id. Validation keys are looked up based on the key id present on the JWT token header.

### EccTokenKey
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.EccTokenKey' (Required): The discriminator for derived types.
* **alg**: 'ES256' | 'ES384' | 'ES512' | string (Required): Elliptical curve algorithm to be used: ES256, ES384 or ES512.
* **x**: string (Required): X coordinate.
* **y**: string (Required): Y coordinate.

### RsaTokenKey
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.RsaTokenKey' (Required): The discriminator for derived types.
* **alg**: 'RS256' | 'RS384' | 'RS512' | string (Required): RSA algorithm to be used: RS256, RS384 or RS512.
* **e**: string (Required): RSA public key exponent.
* **n**: string (Required): RSA public key modulus.


## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TunnelBase
* **Discriminator**: @type

### Base Properties

### SecureIotDeviceRemoteTunnel
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel' (Required): The discriminator for derived types.
* **deviceId**: string (Required): The IoT device id to use when establishing the remote tunnel. This string is case-sensitive.
* **iotHubName**: string (Required): Name of the IoT Hub.


## UserAssignedManagedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedManagedIdentity](#userassignedmanagedidentity)

## UserAssignedManagedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID.
* **principalId**: string (ReadOnly): The principal ID.

## VideoAnalyzerIdentity
### Properties
* **type**: string (Required): The identity type.
* **userAssignedIdentities**: [UserAssignedManagedIdentities](#userassignedmanagedidentities): The User Assigned Managed Identities.

## VideoAnalyzerProperties
### Properties
* **encryption**: [AccountEncryption](#accountencryption): The account encryption properties.
* **endpoints**: [Endpoint](#endpoint)[] (ReadOnly): The endpoints associated with this resource.
* **iotHubs**: [IotHub](#iothub)[]: The IoT Hubs for this resource.
* **networkAccessControl**: [NetworkAccessControl](#networkaccesscontrol): Network access control for Video Analyzer.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private Endpoint Connections created under Video Analyzer account.
* **provisioningState**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Video Analyzer account.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public network access is allowed for resources under the Video Analyzer account.
* **storageAccounts**: [StorageAccount](#storageaccount)[] (Required): The storage accounts for this resource.

## VideoArchival
### Properties
* **retentionPeriod**: string: Video retention period indicates the maximum age of the video archive segments which are intended to be kept in storage. It must be provided in the ISO8601 duration format in the granularity of days, up to a maximum of 10 years. For example, if this is set to P30D (30 days), content older than 30 days will be periodically deleted. This value can be updated at any time and the new desired retention period will be effective within 24 hours.

## VideoContentToken
### Properties
* **expirationDate**: string (ReadOnly): The content token expiration date in ISO8601 format (eg. 2021-01-01T00:00:00Z).
* **token**: string (ReadOnly): The content token value to be added to the video content URL as the value for the "token" query string parameter. The token is specific to a single video.

## VideoContentUrls
### Properties
* **archiveBaseUrl**: string: Video archive streaming base URL. The archived content can be automatically played by the Azure Video Analyzer player widget. Alternatively, this URL can be used in conjunction with the video content authorization token on any compatible DASH or HLS players by appending the following to the base URL:

    - HLSv4:     /manifest(format=m3u8-aapl).m3u8
    - HLS CMAF:  /manifest(format=m3u8-cmaf)
    - DASH CMAF: /manifest(format=mpd-time-cmaf)

    Moreover, an ongoing video recording can be played in "live mode" with latencies which are approximately double of the chosen video segment length. It is available when the video type is 'archive' and video archiving is enabled.
* **downloadUrl**: string: Video file download URL. This URL can be used in conjunction with the video content authorization token to download the video MP4 file. The resulting MP4 file can be played on any standard media player. It is available when the video type is 'file' and video file is available for consumption.
* **previewImageUrls**: [VideoPreviewImageUrls](#videopreviewimageurls): Video preview image URLs. These URLs can be used in conjunction with the video content authorization token to download the most recent still image from the video archive in different resolutions. They are available when the video type is 'archive' and preview images are enabled.
* **rtspTunnelUrl**: string: Video low-latency streaming URL. The live content can be automatically played by the Azure Video Analyzer player widget. Alternatively, this URL can be used in conjunction with the video content authorization token to expose a WebSocket tunneled RTSP stream. It is available when the video type is 'archive' and a live, low-latency feed is available from the source.

## VideoCreationProperties
### Properties
* **description**: string: Optional description provided by the user. Value can be up to 2048 characters long.
* **retentionPeriod**: string: Video retention period indicates how long the video is kept in storage. Value must be specified in ISO8601 duration format (i.e. "P1D" equals 1 day) and can vary between 1 day to 10 years, in 1 day increments. When absent (null), all video content is retained indefinitely. This property is only allowed for topologies where "kind" is set to "live".
* **segmentLength**: string: Segment length indicates the length of individual content files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments. Changing this value after the initial call to create the video resource can lead to errors when uploading content to the archive. Default value is 30 seconds. This property is only allowed for topologies where "kind" is set to "live".
* **title**: string: Optional title provided by the user. Value can be up to 256 characters long.

## VideoEncoderBase
* **Discriminator**: @type

### Base Properties
* **bitrateKbps**: string: The maximum bitrate, in kilobits per second or Kbps, at which video should be encoded. If omitted, encoder sets it automatically to try and match the quality of the input video.
* **frameRate**: string: The frame rate (in frames per second) of the encoded video. The value must be greater than zero, and less than or equal to 300. If omitted, the encoder uses the average frame rate of the input video.
* **scale**: [VideoScale](#videoscale): Describes the resolution of the encoded video. If omitted, the encoder uses the resolution of the input video.

### VideoEncoderH264
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.VideoEncoderH264' (Required): The discriminator for derived types.


## VideoFlags
### Properties
* **canStream**: bool (Required): Value indicating whether or not the video can be streamed. Only "archive" type videos can be streamed.
* **hasData**: bool (Required): Value indicating whether or not there has ever been data recorded or uploaded into the video. Newly created videos have this value set to false.
* **isInUse**: bool (Required): Value indicating whether or not the video is currently being referenced be an active pipeline. The fact that is being referenced, doesn't necessarily indicate that data is being received. For example, video recording may be gated on events or camera may not be accessible at the time.

## VideoMediaInfo
### Properties
* **segmentLength**: string: Video segment length indicates the length of individual video files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments.

## VideoPreviewImageUrls
### Properties
* **large**: string: High resolution preview image URL.
* **medium**: string: Medium resolution preview image URL.
* **small**: string: Low resolution preview image URL.

## VideoProperties
### Properties
* **archival**: [VideoArchival](#videoarchival): Video archival properties.
* **contentUrls**: [VideoContentUrls](#videocontenturls) (ReadOnly): Set of URLs to the video content.
* **description**: string: Optional video description provided by the user. Value can be up to 2048 characters long.
* **flags**: [VideoFlags](#videoflags) (ReadOnly): Video flags contain information about the available video actions and its dynamic properties based on the current video state.
* **mediaInfo**: [VideoMediaInfo](#videomediainfo): Contains information about the video and audio content.
* **title**: string: Optional video title provided by the user. Value can be up to 256 characters long.
* **type**: 'Archive' | 'File' | string (ReadOnly): Video content type. Different content types are suitable for different applications and scenarios.

## VideoPublishingOptions
### Properties
* **disableArchive**: string: When set to 'true' content will not be archived or recorded. This is used, for example, when the topology is used only for low latency video streaming. Default is 'false'.  If set to 'true', then "disableRtspPublishing" must be set to 'false'.
* **disableRtspPublishing**: string: When set to 'true' the RTSP playback URL will not be published, disabling low latency streaming. This is used, for example, when the topology is used only for archiving content. Default is 'false'.  If set to 'true', then "disableArchive" must be set to 'false'.

## VideoScale
### Properties
* **height**: string: The desired output video height.
* **mode**: 'Pad' | 'PreserveAspectRatio' | 'Stretch' | string: Describes the video scaling mode to be applied. Default mode is 'Pad'. If the mode is 'Pad' or 'Stretch' then both width and height must be specified. Else if the mode is 'PreserveAspectRatio' then only one of width or height need be provided.
* **width**: string: The desired output video width.

