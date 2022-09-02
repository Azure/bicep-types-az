# Microsoft.Media @ 2022-08-01

## Resource Microsoft.Media/mediaServices/accountFilters@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaFilterProperties](#mediafilterproperties): The Media Filter properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/accountFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssetProperties](#assetproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets/assetFilters@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaFilterProperties](#mediafilterproperties): The Media Filter properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/assets/assetFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets/tracks@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssetTrackProperties](#assettrackproperties): The resource properties.
* **type**: 'Microsoft.Media/mediaServices/assets/tracks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets/tracks/operationResults@2022-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssetTrackProperties](#assettrackproperties) (ReadOnly): The resource properties.
* **type**: 'Microsoft.Media/mediaServices/assets/tracks/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/contentKeyPolicies@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContentKeyPolicyProperties](#contentkeypolicyproperties): The properties of the Content Key Policy.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/contentKeyPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveEventProperties](#liveeventproperties): The live event properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveOutputProperties](#liveoutputproperties): Live output properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs/operationLocations@2022-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveOutputProperties](#liveoutputproperties) (ReadOnly): Live output properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs/operationLocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents/operationLocations@2022-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveEventProperties](#liveeventproperties) (ReadOnly): The live event properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/liveEvents/operationLocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties): The streaming endpoint properties.
* **sku**: [ArmStreamingEndpointCurrentSku](#armstreamingendpointcurrentsku): The streaming endpoint sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/streamingEndpoints/operationLocations@2022-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties) (ReadOnly): The streaming endpoint properties.
* **sku**: [ArmStreamingEndpointCurrentSku](#armstreamingendpointcurrentsku) (ReadOnly): The streaming endpoint sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints/operationLocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingLocators@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingLocatorProperties](#streaminglocatorproperties): Properties of the Streaming Locator.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/streamingLocators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingPolicies@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingPolicyProperties](#streamingpolicyproperties): Class to specify properties of Streaming Policy
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/streamingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Function listContainerSas (Microsoft.Media/mediaServices/assets@2022-08-01)
* **Resource**: Microsoft.Media/mediaServices/assets
* **ApiVersion**: 2022-08-01
* **Input**: [ListContainerSasInput](#listcontainersasinput)
* **Output**: [AssetContainerSas](#assetcontainersas)

## Function listContentKeys (Microsoft.Media/mediaServices/streamingLocators@2022-08-01)
* **Resource**: Microsoft.Media/mediaServices/streamingLocators
* **ApiVersion**: 2022-08-01
* **Output**: [ListContentKeysResponse](#listcontentkeysresponse)

## Function listPaths (Microsoft.Media/mediaServices/streamingLocators@2022-08-01)
* **Resource**: Microsoft.Media/mediaServices/streamingLocators
* **ApiVersion**: 2022-08-01
* **Output**: [ListPathsResponse](#listpathsresponse)

## Function listStreamingLocators (Microsoft.Media/mediaServices/assets@2022-08-01)
* **Resource**: Microsoft.Media/mediaServices/assets
* **ApiVersion**: 2022-08-01
* **Output**: [ListStreamingLocatorsResponse](#liststreaminglocatorsresponse)

## AkamaiAccessControl
### Properties
* **akamaiSignatureHeaderAuthenticationKeyList**: [AkamaiSignatureHeaderAuthenticationKey](#akamaisignatureheaderauthenticationkey)[]: authentication key list

## AkamaiSignatureHeaderAuthenticationKey
### Properties
* **base64Key**: string: authentication key
* **expiration**: string: The expiration time of the authentication key.
* **identifier**: string: identifier of the key

## ArmStreamingEndpointCurrentSku
### Properties
* **capacity**: int: The streaming endpoint sku capacity.
* **name**: string (ReadOnly): The streaming endpoint sku name.

## AssetContainerSas
### Properties
* **assetContainerSasUrls**: string[]: The list of Asset container SAS URLs.

## AssetProperties
### Properties
* **alternateId**: string: The alternate ID of the Asset.
* **assetId**: string (ReadOnly): The Asset ID.
* **container**: string: The name of the asset blob container.
* **created**: string (ReadOnly): The creation date of the Asset.
* **description**: string: The Asset description.
* **lastModified**: string (ReadOnly): The last modified date of the Asset.
* **storageAccountName**: string: The name of the storage account.
* **storageEncryptionFormat**: 'MediaStorageClientEncryption' | 'None' | string (ReadOnly): The Asset encryption format. One of None or MediaStorageEncryption.

## AssetStreamingLocator
### Properties
* **assetName**: string (ReadOnly): Asset Name.
* **created**: string (ReadOnly): The creation time of the Streaming Locator.
* **defaultContentKeyPolicyName**: string (ReadOnly): Name of the default ContentKeyPolicy used by this Streaming Locator.
* **endTime**: string (ReadOnly): The end time of the Streaming Locator.
* **name**: string (ReadOnly): Streaming Locator name.
* **startTime**: string (ReadOnly): The start time of the Streaming Locator.
* **streamingLocatorId**: string (ReadOnly): StreamingLocatorId of the Streaming Locator.
* **streamingPolicyName**: string (ReadOnly): Name of the Streaming Policy used by this Streaming Locator.

## AssetTrackProperties
### Properties
* **provisioningState**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the asset track.
* **track**: [TrackBase](#trackbase): Detailed information about a track in the asset.

## CbcsDrmConfiguration
### Properties
* **fairPlay**: [StreamingPolicyFairPlayConfiguration](#streamingpolicyfairplayconfiguration): FairPlay configurations
* **playReady**: [StreamingPolicyPlayReadyConfiguration](#streamingpolicyplayreadyconfiguration): PlayReady configurations
* **widevine**: [StreamingPolicyWidevineConfiguration](#streamingpolicywidevineconfiguration): Widevine configurations

## CencDrmConfiguration
### Properties
* **playReady**: [StreamingPolicyPlayReadyConfiguration](#streamingpolicyplayreadyconfiguration): PlayReady configurations
* **widevine**: [StreamingPolicyWidevineConfiguration](#streamingpolicywidevineconfiguration): Widevine configurations

## ClearKeyEncryptionConfiguration
### Properties
* **customKeysAcquisitionUrlTemplate**: string: Template for the URL of the custom service delivering content keys to end user players. Not required when using Azure Media Services for issuing licenses. The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token value is {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId.

## CommonEncryptionCbcs
### Properties
* **clearKeyEncryptionConfiguration**: [ClearKeyEncryptionConfiguration](#clearkeyencryptionconfiguration): Optional configuration supporting ClearKey in CommonEncryptionCbcs encryption scheme.
* **clearTracks**: [TrackSelection](#trackselection)[]: Representing which tracks should not be encrypted
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys): Representing default content key for each encryption scheme and separate content keys for specific tracks
* **drm**: [CbcsDrmConfiguration](#cbcsdrmconfiguration): Configuration of DRMs for current encryption scheme
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Representing supported protocols

## CommonEncryptionCenc
### Properties
* **clearKeyEncryptionConfiguration**: [ClearKeyEncryptionConfiguration](#clearkeyencryptionconfiguration): Optional configuration supporting ClearKey in CommonEncryptionCenc encryption scheme.
* **clearTracks**: [TrackSelection](#trackselection)[]: Representing which tracks should not be encrypted
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys): Representing default content key for each encryption scheme and separate content keys for specific tracks
* **drm**: [CencDrmConfiguration](#cencdrmconfiguration): Configuration of DRMs for CommonEncryptionCenc encryption scheme
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Representing supported protocols

## ContentKeyPolicyConfiguration
* **Discriminator**: @odata.type

### Base Properties

### ContentKeyPolicyClearKeyConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration' (Required): The discriminator for derived types.

### ContentKeyPolicyFairPlayConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration' (Required): The discriminator for derived types.
* **ask**: any (Required): The key that must be used as FairPlay Application Secret key.
* **fairPlayPfx**: string (Required): The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
* **fairPlayPfxPassword**: string (Required): The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
* **offlineRentalConfiguration**: [ContentKeyPolicyFairPlayOfflineRentalConfiguration](#contentkeypolicyfairplayofflinerentalconfiguration): Offline rental policy
* **rentalAndLeaseKeyType**: 'DualExpiry' | 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' | string (Required): The rental and lease key type.
* **rentalDuration**: int (Required): The rental duration. Must be greater than or equal to 0.

### ContentKeyPolicyPlayReadyConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' (Required): The discriminator for derived types.
* **licenses**: [ContentKeyPolicyPlayReadyLicense](#contentkeypolicyplayreadylicense)[] (Required): The PlayReady licenses.
* **responseCustomData**: string: The custom response data.

### ContentKeyPolicyUnknownConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration' (Required): The discriminator for derived types.

### ContentKeyPolicyWidevineConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration' (Required): The discriminator for derived types.
* **widevineTemplate**: string (Required): The Widevine template.


## ContentKeyPolicyFairPlayOfflineRentalConfiguration
### Properties
* **playbackDurationSeconds**: int (Required): Playback duration
* **storageDurationSeconds**: int (Required): Storage duration

## ContentKeyPolicyOption
### Properties
* **configuration**: [ContentKeyPolicyConfiguration](#contentkeypolicyconfiguration) (Required): The key delivery configuration.
* **name**: string: The Policy Option description.
* **policyOptionId**: string (ReadOnly): The legacy Policy Option ID.
* **restriction**: [ContentKeyPolicyRestriction](#contentkeypolicyrestriction) (Required): The requirements that must be met to deliver keys with this configuration

## ContentKeyPolicyPlayReadyContentKeyLocation
* **Discriminator**: @odata.type

### Base Properties

### ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader' (Required): The discriminator for derived types.

### ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier' (Required): The discriminator for derived types.
* **keyId**: string (Required): The content key ID.


## ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction
### Properties
* **bestEffort**: bool (Required): Indicates whether this restriction is enforced on a Best Effort basis.
* **configurationData**: int (Required): Configures the restriction control bits. Must be between 0 and 3 inclusive.

## ContentKeyPolicyPlayReadyLicense
### Properties
* **allowTestDevices**: bool (Required): A flag indicating whether test devices can use the license.
* **beginDate**: string: The begin date of license
* **contentKeyLocation**: [ContentKeyPolicyPlayReadyContentKeyLocation](#contentkeypolicyplayreadycontentkeylocation) (Required): The content key location.
* **contentType**: 'UltraVioletDownload' | 'UltraVioletStreaming' | 'Unknown' | 'Unspecified' | string (Required): The PlayReady content type.
* **expirationDate**: string: The expiration date of license.
* **gracePeriod**: string: The grace period of license.
* **licenseType**: 'NonPersistent' | 'Persistent' | 'Unknown' | string (Required): The license type.
* **playRight**: [ContentKeyPolicyPlayReadyPlayRight](#contentkeypolicyplayreadyplayright): The license PlayRight
* **relativeBeginDate**: string: The relative begin date of license.
* **relativeExpirationDate**: string: The relative expiration date of license.
* **securityLevel**: 'SL150' | 'SL2000' | 'SL3000' | 'Unknown' | string: The security level.

## ContentKeyPolicyPlayReadyPlayRight
### Properties
* **agcAndColorStripeRestriction**: int: Configures Automatic Gain Control (AGC) and Color Stripe in the license. Must be between 0 and 3 inclusive.
* **allowPassingVideoContentToUnknownOutput**: 'Allowed' | 'AllowedWithVideoConstriction' | 'NotAllowed' | 'Unknown' | string (Required): Configures Unknown output handling settings of the license.
* **analogVideoOpl**: int: Specifies the output protection level for compressed digital audio.
* **compressedDigitalAudioOpl**: int: Specifies the output protection level for compressed digital audio.
* **compressedDigitalVideoOpl**: int: Specifies the output protection level for compressed digital video.
* **digitalVideoOnlyContentRestriction**: bool (Required): Enables the Image Constraint For Analog Component Video Restriction in the license.
* **explicitAnalogTelevisionOutputRestriction**: [ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction](#contentkeypolicyplayreadyexplicitanalogtelevisionrestriction): Configures the Explicit Analog Television Output Restriction in the license. Configuration data must be between 0 and 3 inclusive.
* **firstPlayExpiration**: string: The amount of time that the license is valid after the license is first used to play content.
* **imageConstraintForAnalogComponentVideoRestriction**: bool (Required): Enables the Image Constraint For Analog Component Video Restriction in the license.
* **imageConstraintForAnalogComputerMonitorRestriction**: bool (Required): Enables the Image Constraint For Analog Component Video Restriction in the license.
* **scmsRestriction**: int: Configures the Serial Copy Management System (SCMS) in the license. Must be between 0 and 3 inclusive.
* **uncompressedDigitalAudioOpl**: int: Specifies the output protection level for uncompressed digital audio.
* **uncompressedDigitalVideoOpl**: int: Specifies the output protection level for uncompressed digital video.

## ContentKeyPolicyProperties
### Properties
* **created**: string (ReadOnly): The creation date of the Policy
* **description**: string: A description for the Policy.
* **lastModified**: string (ReadOnly): The last modified date of the Policy
* **options**: [ContentKeyPolicyOption](#contentkeypolicyoption)[] (Required): The Key Policy options.
* **policyId**: string (ReadOnly): The legacy Policy ID.

## ContentKeyPolicyRestriction
* **Discriminator**: @odata.type

### Base Properties

### ContentKeyPolicyOpenRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyOpenRestriction' (Required): The discriminator for derived types.

### ContentKeyPolicyTokenRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyTokenRestriction' (Required): The discriminator for derived types.
* **alternateVerificationKeys**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey)[]: A list of alternative verification keys.
* **audience**: string (Required): The audience for the token.
* **issuer**: string (Required): The token issuer.
* **openIdConnectDiscoveryDocument**: string: The OpenID connect discovery document.
* **primaryVerificationKey**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey) (Required): The primary verification key.
* **requiredClaims**: [ContentKeyPolicyTokenClaim](#contentkeypolicytokenclaim)[]: A list of required token claims.
* **restrictionTokenType**: 'Jwt' | 'Swt' | 'Unknown' | string (Required): The type of token.

### ContentKeyPolicyUnknownRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownRestriction' (Required): The discriminator for derived types.


## ContentKeyPolicyRestrictionTokenKey
* **Discriminator**: @odata.type

### Base Properties

### ContentKeyPolicyRsaTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey' (Required): The discriminator for derived types.
* **exponent**: any (Required): The RSA Parameter exponent
* **modulus**: any (Required): The RSA Parameter modulus

### ContentKeyPolicySymmetricTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey' (Required): The discriminator for derived types.
* **keyValue**: any (Required): The key value of the key

### ContentKeyPolicyX509CertificateTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey' (Required): The discriminator for derived types.
* **rawBody**: any (Required): The raw data field of a certificate in PKCS 12 format (X509Certificate2 in .NET)


## ContentKeyPolicyTokenClaim
### Properties
* **claimType**: string: Token claim type.
* **claimValue**: string: Token claim value.

## CrossSiteAccessPolicies
### Properties
* **clientAccessPolicy**: string: The content of clientaccesspolicy.xml used by Silverlight.
* **crossDomainPolicy**: string: The content of crossdomain.xml used by Silverlight.

## DashSettings
### Properties
* **role**: string: The role for the DASH setting.

## DefaultKey
### Properties
* **label**: string: Label can be used to specify Content Key when creating a Streaming Locator
* **policyName**: string: Policy used by Default Key

## EnabledProtocols
### Properties
* **dash**: bool (Required): Enable DASH protocol or not
* **download**: bool (Required): Enable Download protocol or not
* **hls**: bool (Required): Enable HLS protocol or not
* **smoothStreaming**: bool (Required): Enable SmoothStreaming protocol or not

## EnvelopeEncryption
### Properties
* **clearTracks**: [TrackSelection](#trackselection)[]: Representing which tracks should not be encrypted
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys): Representing default content key for each encryption scheme and separate content keys for specific tracks
* **customKeyAcquisitionUrlTemplate**: string: Template for the URL of the custom service delivering keys to end user players.  Not required when using Azure Media Services for issuing keys.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Representing supported protocols

## FilterTrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'NotEqual' | string (Required): The track property condition operation.
* **property**: 'Bitrate' | 'FourCC' | 'Language' | 'Name' | 'Type' | 'Unknown' | string (Required): The track property type.
* **value**: string (Required): The track property value.

## FilterTrackSelection
### Properties
* **trackSelections**: [FilterTrackPropertyCondition](#filtertrackpropertycondition)[] (Required): The track selections.

## FirstQuality
### Properties
* **bitrate**: int (Required): The first quality bitrate.

## Hls
### Properties
* **fragmentsPerTsSegment**: int: The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output.

## HlsSettings
### Properties
* **characteristics**: string: The characteristics for the HLS setting.
* **default**: bool: The default for the HLS setting.
* **forced**: bool: The forced for the HLS setting.

## IPAccessControl
### Properties
* **allow**: [IPRange](#iprange)[]: The IP allow list.

## IPRange
### Properties
* **address**: string: The IP address.
* **name**: string: The friendly name for the IP address range.
* **subnetPrefixLength**: int: The subnet mask prefix length (see CIDR notation).

## ListContainerSasInput
### Properties
* **expiryTime**: string: The SAS URL expiration time.  This must be less than 24 hours from the current time.
* **permissions**: 'Read' | 'ReadWrite' | 'ReadWriteDelete' | string: The permissions to set on the SAS URL.

## ListContentKeysResponse
### Properties
* **contentKeys**: [StreamingLocatorContentKey](#streaminglocatorcontentkey)[]: ContentKeys used by current Streaming Locator

## ListPathsResponse
### Properties
* **downloadPaths**: string[]: Download Paths supported by current Streaming Locator
* **streamingPaths**: [StreamingPath](#streamingpath)[]: Streaming Paths supported by current Streaming Locator

## ListStreamingLocatorsResponse
### Properties
* **streamingLocators**: [AssetStreamingLocator](#assetstreaminglocator)[] (ReadOnly): The list of Streaming Locators.

## LiveEventEncoding
### Properties
* **encodingType**: 'None' | 'PassthroughBasic' | 'PassthroughStandard' | 'Premium1080p' | 'Standard' | string: Live event type. When encodingType is set to PassthroughBasic or PassthroughStandard, the service simply passes through the incoming video and audio layer(s) to the output. When encodingType is set to Standard or Premium1080p, a live encoder transcodes the incoming stream into multiple bitrates or layers. See https://go.microsoft.com/fwlink/?linkid=2095101 for more information. This property cannot be modified after the live event is created.
* **keyFrameInterval**: string: Use an ISO 8601 time value between 0.5 to 20 seconds to specify the output fragment length for the video and audio tracks of an encoding live event. For example, use PT2S to indicate 2 seconds. For the video track it also defines the key frame interval, or the length of a GoP (group of pictures).   If this value is not set for an encoding live event, the fragment duration defaults to 2 seconds. The value cannot be set for pass-through live events.
* **presetName**: string: The optional encoding preset name, used when encodingType is not None. This value is specified at creation time and cannot be updated. If the encodingType is set to Standard, then the default preset name is ‘Default720p’. Else if the encodingType is set to Premium1080p, the default preset is ‘Default1080p’.
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None' | string: Specifies how the input video will be resized to fit the desired output resolution(s). Default is None

## LiveEventEndpoint
### Properties
* **protocol**: string: The endpoint protocol.
* **url**: string: The endpoint URL.

## LiveEventInput
### Properties
* **accessControl**: [LiveEventInputAccessControl](#liveeventinputaccesscontrol): Access control for live event input.
* **accessToken**: string: A UUID in string form to uniquely identify the stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value.
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]: The input endpoints for the live event.
* **keyFrameIntervalDuration**: string: ISO 8601 time duration of the key frame interval duration of the input. This value sets the EXT-X-TARGETDURATION property in the HLS output. For example, use PT2S to indicate 2 seconds. Leave the value empty for encoding live events.
* **streamingProtocol**: 'FragmentedMP4' | 'RTMP' | string (Required): The input protocol for the live event. This is specified at creation time and cannot be updated.

## LiveEventInputAccessControl
### Properties
* **ip**: [IPAccessControl](#ipaccesscontrol): The IP access control properties.

## LiveEventInputTrackSelection
### Properties
* **operation**: string: Comparing operation. This property is reserved for future use, any value set on this property will be ignored.
* **property**: string: Property name to select. This property is reserved for future use, any value set on this property will be ignored.
* **value**: string: Property value to select. This property is reserved for future use, any value set on this property will be ignored.

## LiveEventOutputTranscriptionTrack
### Properties
* **trackName**: string (Required): The output track name. This property is reserved for future use, any value set on this property will be ignored.

## LiveEventPreview
### Properties
* **accessControl**: [LiveEventPreviewAccessControl](#liveeventpreviewaccesscontrol): The access control for live event preview.
* **alternativeMediaId**: string: An alternative media identifier associated with the streaming locator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]: The endpoints for preview. Do not share the preview URL with the live event audience.
* **previewLocator**: string: The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created.
* **streamingPolicyName**: string: The name of streaming policy used for the live event preview. This value is specified at creation time and cannot be updated.

## LiveEventPreviewAccessControl
### Properties
* **ip**: [IPAccessControl](#ipaccesscontrol): The IP access control properties.

## LiveEventProperties
### Properties
* **created**: string (ReadOnly): The creation time for the live event
* **crossSiteAccessPolicies**: [CrossSiteAccessPolicies](#crosssiteaccesspolicies): Live event cross site access policies.
* **description**: string: A description for the live event.
* **encoding**: [LiveEventEncoding](#liveeventencoding): Encoding settings for the live event. It configures whether a live encoder is used for the live event and settings for the live encoder if it is used.
* **hostnamePrefix**: string: When useStaticHostname is set to true, the hostnamePrefix specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center.
* **input**: [LiveEventInput](#liveeventinput) (Required): Live event input settings. It defines how the live event receives input from a contribution encoder.
* **lastModified**: string (ReadOnly): The last modified time of the live event.
* **preview**: [LiveEventPreview](#liveeventpreview): Live event preview settings. Preview allows live event producers to preview the live streaming content without creating any live output.
* **provisioningState**: string (ReadOnly): The provisioning state of the live event.
* **resourceState**: 'Allocating' | 'Deleting' | 'Running' | 'StandBy' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): The resource state of the live event. See https://go.microsoft.com/fwlink/?linkid=2139012 for more information.
* **streamOptions**: 'Default' | 'LowLatency' | 'LowLatencyV2' | string[]: The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. The valid values for the array entry values are 'Default' and 'LowLatency'.
* **transcriptions**: [LiveEventTranscription](#liveeventtranscription)[]: Live transcription settings for the live event. See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature.
* **useStaticHostname**: bool: Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. This value can only be updated if the live event is in Standby state

## LiveEventTranscription
### Properties
* **inputTrackSelection**: [LiveEventInputTrackSelection](#liveeventinputtrackselection)[]: Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied. This property is reserved for future use, any value set on this property will be ignored.
* **language**: string: Specifies the language (locale) to be used for speech-to-text transcription – it should match the spoken language in the audio track. The value should be in BCP-47 format (e.g: 'en-US'). See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature and the list of supported languages.
* **outputTranscriptionTrack**: [LiveEventOutputTranscriptionTrack](#liveeventoutputtranscriptiontrack): Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.

## LiveOutputProperties
### Properties
* **archiveWindowLength**: string (Required): ISO 8601 time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use PT1H30M to indicate 1 hour and 30 minutes of archive window.
* **assetName**: string (Required): The asset that the live output will write to.
* **created**: string (ReadOnly): The creation time the live output.
* **description**: string: The description of the live output.
* **hls**: [Hls](#hls): HTTP Live Streaming (HLS) packing setting for the live output.
* **lastModified**: string (ReadOnly): The time the live output was last modified.
* **manifestName**: string: The manifest file name. If not provided, the service will generate one automatically.
* **outputSnapTime**: int: The initial timestamp that the live output will start at, any content before this value will not be archived.
* **provisioningState**: string (ReadOnly): The provisioning state of the live output.
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | string (ReadOnly): The resource state of the live output.
* **rewindWindowLength**: string: ISO 8601 time between 1 minute to the duration of archiveWindowLength to control seek-able window length during Live. The service won't use this property once LiveOutput stops. The archived VOD will have full content with original ArchiveWindowLength. For example, use PT1H30M to indicate 1 hour and 30 minutes of rewind window length. Service will use implicit default value 30m only if Live Event enables LL.

## MediaFilterProperties
### Properties
* **firstQuality**: [FirstQuality](#firstquality): The first quality.
* **presentationTimeRange**: [PresentationTimeRange](#presentationtimerange): The presentation time range.
* **tracks**: [FilterTrackSelection](#filtertrackselection)[]: The tracks selection conditions.

## NoEncryption
### Properties
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Representing supported protocols

## PresentationTimeRange
### Properties
* **endTimestamp**: int: The absolute end time boundary.
* **forceEndTimestamp**: bool: The indicator of forcing existing of end time stamp.
* **liveBackoffDuration**: int: The relative to end right edge.
* **presentationWindowDuration**: int: The relative to end sliding window.
* **startTimestamp**: int: The absolute start time boundary.
* **timescale**: int: The time scale of time stamps.

## StreamingEndpointAccessControl
### Properties
* **akamai**: [AkamaiAccessControl](#akamaiaccesscontrol): The access control of Akamai
* **ip**: [IPAccessControl](#ipaccesscontrol): The IP access control of the streaming endpoint.

## StreamingEndpointProperties
### Properties
* **accessControl**: [StreamingEndpointAccessControl](#streamingendpointaccesscontrol): The access control definition of the streaming endpoint.
* **availabilitySetName**: string: This feature is deprecated, do not set a value for this property.
* **cdnEnabled**: bool: The CDN enabled flag.
* **cdnProfile**: string: The CDN profile name.
* **cdnProvider**: string: The CDN provider name.
* **created**: string (ReadOnly): The exact time the streaming endpoint was created.
* **crossSiteAccessPolicies**: [CrossSiteAccessPolicies](#crosssiteaccesspolicies): The streaming endpoint access policies.
* **customHostNames**: string[]: The custom host names of the streaming endpoint
* **description**: string: The streaming endpoint description.
* **freeTrialEndTime**: string (ReadOnly): The free trial expiration time.
* **hostName**: string (ReadOnly): The streaming endpoint host name.
* **lastModified**: string (ReadOnly): The exact time the streaming endpoint was last modified.
* **maxCacheAge**: int: Max cache age
* **provisioningState**: string (ReadOnly): The provisioning state of the streaming endpoint.
* **resourceState**: 'Deleting' | 'Running' | 'Scaling' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): The resource state of the streaming endpoint.
* **scaleUnits**: int (Required): The number of scale units. Use the Scale operation to adjust this value.

## StreamingLocatorContentKey
### Properties
* **id**: string (Required): ID of Content Key
* **labelReferenceInStreamingPolicy**: string: Label of Content Key as specified in the Streaming Policy
* **policyName**: string (ReadOnly): ContentKeyPolicy used by Content Key
* **tracks**: [TrackSelection](#trackselection)[] (ReadOnly): Tracks which use this Content Key
* **type**: 'CommonEncryptionCbcs' | 'CommonEncryptionCenc' | 'EnvelopeEncryption' | string (ReadOnly): Encryption type of Content Key
* **value**: string: Value of Content Key

## StreamingLocatorProperties
### Properties
* **alternativeMediaId**: string: Alternative Media ID of this Streaming Locator
* **assetName**: string (Required): Asset Name
* **contentKeys**: [StreamingLocatorContentKey](#streaminglocatorcontentkey)[]: The ContentKeys used by this Streaming Locator.
* **created**: string (ReadOnly): The creation time of the Streaming Locator.
* **defaultContentKeyPolicyName**: string: Name of the default ContentKeyPolicy used by this Streaming Locator.
* **endTime**: string: The end time of the Streaming Locator.
* **filters**: string[]: A list of asset or account filters which apply to this streaming locator
* **startTime**: string: The start time of the Streaming Locator.
* **streamingLocatorId**: string: The StreamingLocatorId of the Streaming Locator.
* **streamingPolicyName**: string (Required): Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and 'Predefined_MultiDrmStreaming'

## StreamingPath
### Properties
* **encryptionScheme**: 'CommonEncryptionCbcs' | 'CommonEncryptionCenc' | 'EnvelopeEncryption' | 'NoEncryption' | string (Required): Encryption scheme
* **paths**: string[]: Streaming paths for each protocol and encryptionScheme pair
* **streamingProtocol**: 'Dash' | 'Download' | 'Hls' | 'SmoothStreaming' | string (Required): Streaming protocol

## StreamingPolicyContentKey
### Properties
* **label**: string: Label can be used to specify Content Key when creating a Streaming Locator
* **policyName**: string: Policy used by Content Key
* **tracks**: [TrackSelection](#trackselection)[]: Tracks which use this content key

## StreamingPolicyContentKeys
### Properties
* **defaultKey**: [DefaultKey](#defaultkey): Default content key for an encryption scheme
* **keyToTrackMappings**: [StreamingPolicyContentKey](#streamingpolicycontentkey)[]: Representing tracks needs separate content key

## StreamingPolicyFairPlayConfiguration
### Properties
* **allowPersistentLicense**: bool (Required): All license to be persistent or not
* **customLicenseAcquisitionUrlTemplate**: string: Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.

## StreamingPolicyPlayReadyConfiguration
### Properties
* **customLicenseAcquisitionUrlTemplate**: string: Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
* **playReadyCustomAttributes**: string: Custom attributes for PlayReady

## StreamingPolicyProperties
### Properties
* **commonEncryptionCbcs**: [CommonEncryptionCbcs](#commonencryptioncbcs): Configuration of CommonEncryptionCbcs
* **commonEncryptionCenc**: [CommonEncryptionCenc](#commonencryptioncenc): Configuration of CommonEncryptionCenc
* **created**: string (ReadOnly): Creation time of Streaming Policy
* **defaultContentKeyPolicyName**: string: Default ContentKey used by current Streaming Policy
* **envelopeEncryption**: [EnvelopeEncryption](#envelopeencryption): Configuration of EnvelopeEncryption
* **noEncryption**: [NoEncryption](#noencryption): Configurations of NoEncryption

## StreamingPolicyWidevineConfiguration
### Properties
* **customLicenseAcquisitionUrlTemplate**: string: Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackBase
* **Discriminator**: @odata.type

### Base Properties

### AudioTrack
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioTrack' (Required): The discriminator for derived types.
* **bitRate**: int (ReadOnly): The stream bit rate for the audio track.
* **dashSettings**: [DashSettings](#dashsettings): The DASH specific setting for the audio track.
* **displayName**: string: The display name of the audio track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
* **fileName**: string: The file name to the source file. This file is located in the storage container of the asset.
* **hlsSettings**: [HlsSettings](#hlssettings): The HLS specific setting for the audio track.
* **languageCode**: string: The RFC5646 language code for the audio track.
* **mpeg4TrackId**: int: The MPEG-4 audio track ID for the audio track.

### TextTrack
#### Properties
* **@odata.type**: '#Microsoft.Media.TextTrack' (Required): The discriminator for derived types.
* **displayName**: string: The display name of the text track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
* **fileName**: string: The file name to the source file. This file is located in the storage container of the asset.
* **hlsSettings**: [HlsSettings](#hlssettings): The HLS specific setting for the text track.
* **languageCode**: string (ReadOnly): The RFC5646 language code for the text track.
* **playerVisibility**: 'Hidden' | 'Visible' | string: When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible".

### VideoTrack
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoTrack' (Required): The discriminator for derived types.


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

## TrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'Unknown' | string (Required): Track property condition operation
* **property**: 'FourCC' | 'Unknown' | string (Required): Track property type
* **value**: string: Track property value

## TrackSelection
### Properties
* **trackSelections**: [TrackPropertyCondition](#trackpropertycondition)[]: TrackSelections is a track property condition list which can specify track(s)

