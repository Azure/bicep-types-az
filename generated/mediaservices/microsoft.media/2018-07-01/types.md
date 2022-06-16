# Microsoft.Media @ 2018-07-01

## Resource Microsoft.Media/mediaservices@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties): The resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/accountFilters@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaFilterProperties](#mediafilterproperties): The Media Filter properties.
* **type**: 'Microsoft.Media/mediaServices/accountFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssetProperties](#assetproperties): The resource properties.
* **type**: 'Microsoft.Media/mediaServices/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets/assetFilters@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaFilterProperties](#mediafilterproperties): The Media Filter properties.
* **type**: 'Microsoft.Media/mediaServices/assets/assetFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/contentKeyPolicies@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContentKeyPolicyProperties](#contentkeypolicyproperties): The properties of the Content Key Policy.
* **type**: 'Microsoft.Media/mediaServices/contentKeyPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveEventProperties](#liveeventproperties): The Live Event properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveOutputProperties](#liveoutputproperties): The Live Output properties.
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties): The StreamingEndpoint properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingLocators@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingLocatorProperties](#streaminglocatorproperties): Properties of the Streaming Locator.
* **type**: 'Microsoft.Media/mediaServices/streamingLocators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingPolicies@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingPolicyProperties](#streamingpolicyproperties): Class to specify properties of Streaming Policy
* **type**: 'Microsoft.Media/mediaServices/streamingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/transforms@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TransformProperties](#transformproperties): The resource properties.
* **type**: 'Microsoft.Media/mediaServices/transforms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/transforms/jobs@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): The resource properties.
* **type**: 'Microsoft.Media/mediaServices/transforms/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Function listContainerSas (Microsoft.Media/mediaServices/assets@2018-07-01)
* **Resource**: Microsoft.Media/mediaServices/assets
* **ApiVersion**: 2018-07-01
* **Input**: [ListContainerSasInput](#listcontainersasinput)
* **Output**: [AssetContainerSas](#assetcontainersas)

## Function listContentKeys (Microsoft.Media/mediaServices/streamingLocators@2018-07-01)
* **Resource**: Microsoft.Media/mediaServices/streamingLocators
* **ApiVersion**: 2018-07-01
* **Output**: [ListContentKeysResponse](#listcontentkeysresponse)

## Function listPaths (Microsoft.Media/mediaServices/streamingLocators@2018-07-01)
* **Resource**: Microsoft.Media/mediaServices/streamingLocators
* **ApiVersion**: 2018-07-01
* **Output**: [ListPathsResponse](#listpathsresponse)

## Function listStreamingLocators (Microsoft.Media/mediaServices/assets@2018-07-01)
* **Resource**: Microsoft.Media/mediaServices/assets
* **ApiVersion**: 2018-07-01
* **Output**: [ListStreamingLocatorsResponse](#liststreaminglocatorsresponse)

## AkamaiAccessControl
### Properties
* **akamaiSignatureHeaderAuthenticationKeyList**: [AkamaiSignatureHeaderAuthenticationKey](#akamaisignatureheaderauthenticationkey)[]: authentication key list

## AkamaiSignatureHeaderAuthenticationKey
### Properties
* **base64Key**: string: authentication key
* **expiration**: string: The expiration time of the authentication key.
* **identifier**: string: identifier of the key

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

## CbcsDrmConfiguration
### Properties
* **fairPlay**: [StreamingPolicyFairPlayConfiguration](#streamingpolicyfairplayconfiguration): FairPlay configurations
* **playReady**: [StreamingPolicyPlayReadyConfiguration](#streamingpolicyplayreadyconfiguration): PlayReady configurations
* **widevine**: [StreamingPolicyWidevineConfiguration](#streamingpolicywidevineconfiguration): Widevine configurations

## CencDrmConfiguration
### Properties
* **playReady**: [StreamingPolicyPlayReadyConfiguration](#streamingpolicyplayreadyconfiguration): PlayReady configurations
* **widevine**: [StreamingPolicyWidevineConfiguration](#streamingpolicywidevineconfiguration): Widevine configurations

## Codec
* **Discriminator**: @odata.type

### Base Properties
* **label**: string: An optional label for the codec. The label can be used to control muxing behavior.
### AacAudio
#### Properties
* **@odata.type**: '#Microsoft.Media.AacAudio' (Required): The discriminator for derived types.
* **profile**: 'AacLc' | 'HeAacV1' | 'HeAacV2' | string: The encoding profile to be used when encoding audio with AAC.

### CopyAudio
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyAudio' (Required): The discriminator for derived types.

### CopyVideo
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyVideo' (Required): The discriminator for derived types.

### H264Video
#### Properties
* **@odata.type**: '#Microsoft.Media.H264Video' (Required): The discriminator for derived types.
* **complexity**: 'Balanced' | 'Quality' | 'Speed' | string: Tells the encoder how to choose its encoding settings. The default value is Balanced.
* **layers**: [H264Layer](#h264layer)[]: The collection of output H.264 layers to be produced by the encoder.
* **sceneChangeDetection**: bool: Whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.

### JpgImage
#### Properties
* **@odata.type**: '#Microsoft.Media.JpgImage' (Required): The discriminator for derived types.
* **layers**: [JpgLayer](#jpglayer)[]: A collection of output JPEG image layers to be produced by the encoder.

### PngImage
#### Properties
* **@odata.type**: '#Microsoft.Media.PngImage' (Required): The discriminator for derived types.
* **layers**: [PngLayer](#pnglayer)[]: A collection of output PNG image layers to be produced by the encoder.


## CommonEncryptionCbcs
### Properties
* **clearTracks**: [TrackSelection](#trackselection)[]: Representing which tracks should not be encrypted
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys): Representing default content key for each encryption scheme and separate content keys for specific tracks
* **drm**: [CbcsDrmConfiguration](#cbcsdrmconfiguration): Configuration of DRMs for current encryption scheme
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Representing supported protocols

## CommonEncryptionCenc
### Properties
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
* **rentalAndLeaseKeyType**: 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' | string (Required): The rental and lease key type.
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

## DefaultKey
### Properties
* **label**: string: Label can be used to specify Content Key when creating a Streaming Locator
* **policyName**: string: Policy used by Default Key

## Deinterlace
### Properties
* **mode**: 'AutoPixelAdaptive' | 'Off' | string: The deinterlacing mode. Defaults to AutoPixelAdaptive.
* **parity**: 'Auto' | 'BottomFieldFirst' | 'TopFieldFirst' | string: The field parity for de-interlacing, defaults to Auto.

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

## Filters
### Properties
* **crop**: [Rectangle](#rectangle): The parameters for the rectangular window with which to crop the input video.
* **deinterlace**: [Deinterlace](#deinterlace): The de-interlacing settings.
* **overlays**: [Overlay](#overlay)[]: The properties of overlays to be applied to the input video. These could be audio, image or video overlays.
* **rotation**: 'Auto' | 'None' | 'Rotate0' | 'Rotate180' | 'Rotate270' | 'Rotate90' | string: The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto

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

## Format
* **Discriminator**: @odata.type

### Base Properties
* **filenamePattern**: string (Required): The pattern of the file names for the generated output files. The following macros are supported in the file name: {Basename} - The base name of the input video {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. Any unsubstituted macros will be collapsed and removed from the filename.
### JpgFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.JpgFormat' (Required): The discriminator for derived types.

### Mp4Format
#### Properties
* **@odata.type**: '#Microsoft.Media.Mp4Format' (Required): The discriminator for derived types.

### PngFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.PngFormat' (Required): The discriminator for derived types.

### TransportStreamFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.TransportStreamFormat' (Required): The discriminator for derived types.


## H264Layer
### Properties
* **@odata.type**: string (Required): The discriminator for derived types.
* **adaptiveBFrame**: bool: Whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
* **bFrames**: int: The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
* **bitrate**: int (Required): The average bitrate in bits per second at which to encode the input video when generating this layer. This is a required field.
* **bufferWindow**: string: The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
* **entropyMode**: 'Cabac' | 'Cavlc' | string: The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level.
* **frameRate**: string: The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
* **height**: string: The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
* **label**: string: The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
* **level**: string: We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.264 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
* **maxBitrate**: int: The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
* **profile**: 'Auto' | 'Baseline' | 'High' | 'High422' | 'High444' | 'Main' | string: We currently support Baseline, Main, High, High422, High444. Default is Auto.
* **referenceFrames**: int: The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
* **slices**: int: The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
* **width**: string: The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.

## Hls
### Properties
* **fragmentsPerTsSegment**: int: The amount of fragments per HTTP Live Streaming (HLS) segment.

## IPAccessControl
### Properties
* **allow**: [IPRange](#iprange)[]: The IP allow list.

## IPRange
### Properties
* **address**: string: The IP address.
* **name**: string: The friendly name for the IP address range.
* **subnetPrefixLength**: int: The subnet mask prefix length (see CIDR notation).

## JobError
### Properties
* **category**: 'Configuration' | 'Content' | 'Download' | 'Service' | 'Upload' | string (ReadOnly): Helps with categorization of errors.
* **code**: 'ConfigurationUnsupported' | 'ContentMalformed' | 'ContentUnsupported' | 'DownloadNotAccessible' | 'DownloadTransientError' | 'ServiceError' | 'ServiceTransientError' | 'UploadNotAccessible' | 'UploadTransientError' | string (ReadOnly): Error code describing the error.
* **details**: [JobErrorDetail](#joberrordetail)[] (ReadOnly): An array of details about specific errors that led to this reported error.
* **message**: string (ReadOnly): A human-readable language-dependent representation of the error.
* **retry**: 'DoNotRetry' | 'MayRetry' | string (ReadOnly): Indicates that it may be possible to retry the Job. If retry is unsuccessful, please contact Azure support via Azure Portal.

## JobErrorDetail
### Properties
* **code**: string (ReadOnly): Code describing the error detail.
* **message**: string (ReadOnly): A human-readable representation of the error.

## JobInput
* **Discriminator**: @odata.type

### Base Properties
### JobInputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputAsset' (Required): The discriminator for derived types.
* **assetName**: string (Required): The name of the input Asset.

### JobInputHttp
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputHttp' (Required): The discriminator for derived types.
* **baseUri**: string: Base URI for HTTPS job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. Maximum length of 4000 characters.

### JobInputs
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required): The discriminator for derived types.
* **inputs**: [JobInput](#jobinput)[]: List of inputs to a Job.


## JobOutput
* **Discriminator**: @odata.type

### Base Properties
* **error**: [JobError](#joberror) (ReadOnly): If the JobOutput is in the Error state, it contains the details of the error.
* **label**: string: A label that is assigned to a JobOutput in order to help uniquely identify it. This is useful when your Transform has more than one TransformOutput, whereby your Job has more than one JobOutput. In such cases, when you submit the Job, you will add two or more JobOutputs, in the same order as TransformOutputs in the Transform. Subsequently, when you retrieve the Job, either through events or on a GET request, you can use the label to easily identify the JobOutput. If a label is not provided, a default value of '{presetName}_{outputIndex}' will be used, where the preset name is the name of the preset in the corresponding TransformOutput and the output index is the relative index of the this JobOutput within the Job. Note that this index is the same as the relative index of the corresponding TransformOutput within its Transform.
* **progress**: int (ReadOnly): If the JobOutput is in a Processing state, this contains the Job completion percentage. The value is an estimate and not intended to be used to predict Job completion times. To determine if the JobOutput is complete, use the State property.
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' | string (ReadOnly): Describes the state of the JobOutput.
### JobOutputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required): The discriminator for derived types.
* **assetName**: string (Required): The name of the output Asset.


## JobProperties
### Properties
* **correlationData**: [JobPropertiesCorrelationData](#jobpropertiescorrelationdata): Customer provided key, value pairs that will be returned in Job and JobOutput state events.
* **created**: string (ReadOnly): The UTC date and time when the Job was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **description**: string: Optional customer supplied description of the Job.
* **input**: [JobInput](#jobinput) (Required): The inputs for the Job.
* **lastModified**: string (ReadOnly): The UTC date and time when the Job was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **outputs**: [JobOutput](#joboutput)[] (Required): The outputs for the Job.
* **priority**: 'High' | 'Low' | 'Normal' | string: Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal.
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' | string (ReadOnly): The current state of the job.

## JobPropertiesCorrelationData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JpgLayer
### Properties
* **@odata.type**: string (Required): The discriminator for derived types.
* **height**: string: The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
* **label**: string: The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
* **quality**: int: The compression quality of the JPEG output. Range is from 0-100 and the default is 70.
* **width**: string: The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.

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
* **encodingType**: 'Basic' | 'None' | 'Premium1080p' | 'Standard' | string: The encoding type for Live Event.  This value is specified at creation time and cannot be updated.
* **presetName**: string: The encoding preset name.  This value is specified at creation time and cannot be updated.

## LiveEventEndpoint
### Properties
* **protocol**: string: The endpoint protocol.
* **url**: string: The endpoint URL.

## LiveEventInput
### Properties
* **accessControl**: [LiveEventInputAccessControl](#liveeventinputaccesscontrol): The access control for LiveEvent Input.
* **accessToken**: string: A unique identifier for a stream.  This can be specified at creation time but cannot be updated.  If omitted, the service will generate a unique value.
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]: The input endpoints for the Live Event.
* **keyFrameIntervalDuration**: string: ISO 8601 timespan duration of the key frame interval duration.
* **streamingProtocol**: 'FragmentedMP4' | 'RTMP' | string (Required): The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated.

## LiveEventInputAccessControl
### Properties
* **ip**: [IPAccessControl](#ipaccesscontrol): The IP access control properties.

## LiveEventInputTrackSelection
### Properties
* **operation**: string: Comparing operation.
* **property**: string: Property name to select.
* **value**: string: Property value to select.

## LiveEventOutputTranscriptionTrack
### Properties
* **trackName**: string (Required): The output track name.

## LiveEventPreview
### Properties
* **accessControl**: [LiveEventPreviewAccessControl](#liveeventpreviewaccesscontrol): The access control for LiveEvent preview.
* **alternativeMediaId**: string: An Alternative Media Identifier associated with the StreamingLocator created for the preview.  This value is specified at creation time and cannot be updated.  The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]: The endpoints for preview.
* **previewLocator**: string: The identifier of the preview locator in Guid format.  Specifying this at creation time allows the caller to know the preview locator url before the event is created.  If omitted, the service will generate a random identifier.  This value cannot be updated once the live event is created.
* **streamingPolicyName**: string: The name of streaming policy used for the LiveEvent preview.  This value is specified at creation time and cannot be updated.

## LiveEventPreviewAccessControl
### Properties
* **ip**: [IPAccessControl](#ipaccesscontrol): The IP access control properties.

## LiveEventProperties
### Properties
* **created**: string (ReadOnly): The exact time the Live Event was created.
* **crossSiteAccessPolicies**: [CrossSiteAccessPolicies](#crosssiteaccesspolicies): The Live Event access policies.
* **description**: string: The Live Event description.
* **encoding**: [LiveEventEncoding](#liveeventencoding): The Live Event encoding.
* **input**: [LiveEventInput](#liveeventinput) (Required): The Live Event input.
* **lastModified**: string (ReadOnly): The exact time the Live Event was last modified.
* **preview**: [LiveEventPreview](#liveeventpreview): The Live Event preview.
* **provisioningState**: string (ReadOnly): The provisioning state of the Live Event.
* **resourceState**: 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): The resource state of the Live Event.
* **streamOptions**: 'Default' | 'LowLatency' | string[]: The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated.
* **transcriptions**: [LiveEventTranscription](#liveeventtranscription)[]: The Live Event transcription.
* **vanityUrl**: bool: Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated.

## LiveEventTranscription
### Properties
* **inputTrackSelection**: [LiveEventInputTrackSelection](#liveeventinputtrackselection)[]: Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied.
* **language**: string: Specifies the language (locale) used for speech-to-text transcription - it should match the spoken language in the audio track. The value should be in BCP-47 format of 'language tag-region' (e.g: 'en-US'). The list of supported languages are 'en-US' and 'en-GB'.
* **outputTranscriptionTrack**: [LiveEventOutputTranscriptionTrack](#liveeventoutputtranscriptiontrack): Describes a transcription track in the output of a Live Event, generated using speech-to-text transcription.

## LiveOutputProperties
### Properties
* **archiveWindowLength**: string (Required): ISO 8601 timespan duration of the archive window length. This is duration that customer want to retain the recorded content.
* **assetName**: string (Required): The asset name.
* **created**: string (ReadOnly): The exact time the Live Output was created.
* **description**: string: The description of the Live Output.
* **hls**: [Hls](#hls): The HLS configuration.
* **lastModified**: string (ReadOnly): The exact time the Live Output was last modified.
* **manifestName**: string: The manifest file name.  If not provided, the service will generate one automatically.
* **outputSnapTime**: int: The output snapshot time.
* **provisioningState**: string (ReadOnly): The provisioning state of the Live Output.
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | string (ReadOnly): The resource state of the Live Output.

## MediaFilterProperties
### Properties
* **firstQuality**: [FirstQuality](#firstquality): The first quality.
* **presentationTimeRange**: [PresentationTimeRange](#presentationtimerange): The presentation time range.
* **tracks**: [FilterTrackSelection](#filtertrackselection)[]: The tracks selection conditions.

## MediaServiceProperties
### Properties
* **mediaServiceId**: string (ReadOnly): The Media Services account ID.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.

## NoEncryption
### Properties
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Representing supported protocols

## Overlay
* **Discriminator**: @odata.type

### Base Properties
* **audioGainLevel**: int: The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
* **end**: string: The position in the input video at which the overlay ends. The value should be in ISO 8601 duration format. For example, PT30S to end the overlay at 30 seconds in to the input video. If not specified the overlay will be applied until the end of the input video if inputLoop is true. Else, if inputLoop is false, then overlay will last as long as the duration of the overlay media.
* **fadeInDuration**: string: The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
* **fadeOutDuration**: string: The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
* **inputLabel**: string (Required): The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG or PNG formats, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats.
* **start**: string: The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds in to the input video. If not specified the overlay starts from the beginning of the input video.
### AudioOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required): The discriminator for derived types.

### VideoOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required): The discriminator for derived types.
* **cropRectangle**: [Rectangle](#rectangle): An optional rectangular window used to crop the overlay image or video.
* **opacity**: int: The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque.
* **position**: [Rectangle](#rectangle): The location in the input video where the overlay is applied.


## PngLayer
### Properties
* **@odata.type**: string (Required): The discriminator for derived types.
* **height**: string: The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
* **label**: string: The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
* **width**: string: The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.

## PresentationTimeRange
### Properties
* **endTimestamp**: int: The absolute end time boundary.
* **forceEndTimestamp**: bool: The indicator of forcing existing of end time stamp.
* **liveBackoffDuration**: int: The relative to end right edge.
* **presentationWindowDuration**: int: The relative to end sliding window.
* **startTimestamp**: int: The absolute start time boundary.
* **timescale**: int: The time scale of time stamps.

## Preset
* **Discriminator**: @odata.type

### Base Properties
### BuiltInStandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required): The discriminator for derived types.
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'ContentAwareEncodingExperimental' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' | 'H264SingleBitrate1080p' | 'H264SingleBitrate720p' | 'H264SingleBitrateSD' | string (Required): The built-in preset to be used for encoding videos.

### FaceDetectorPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.FaceDetectorPreset' (Required): The discriminator for derived types.
* **resolution**: 'SourceResolution' | 'StandardDefinition' | string: Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected.

### StandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required): The discriminator for derived types.
* **codecs**: [Codec](#codec)[] (Required): The list of codecs to be used when encoding the input video.
* **filters**: [Filters](#filters): One or more filtering operations that are applied to the input media before encoding.
* **formats**: [Format](#format)[] (Required): The list of outputs to be produced by the encoder.

### VideoAnalyzerPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoAnalyzerPreset' (Required): The discriminator for derived types.
* **insightsToExtract**: 'AllInsights' | 'AudioInsightsOnly' | 'VideoInsightsOnly' | string: Defines the type of insights that you want the service to generate. The allowed values are 'AudioInsightsOnly', 'VideoInsightsOnly', and 'AllInsights'. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out.


## Rectangle
### Properties
* **height**: string: The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **left**: string: The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **top**: string: The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **width**: string: The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).

## StorageAccount
### Properties
* **id**: string: The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
* **type**: 'Primary' | 'Secondary' | string (Required): The type of the storage account.

## StreamingEndpointAccessControl
### Properties
* **akamai**: [AkamaiAccessControl](#akamaiaccesscontrol): The access control of Akamai
* **ip**: [IPAccessControl](#ipaccesscontrol): The IP access control of the StreamingEndpoint.

## StreamingEndpointProperties
### Properties
* **accessControl**: [StreamingEndpointAccessControl](#streamingendpointaccesscontrol): The access control definition of the StreamingEndpoint.
* **availabilitySetName**: string: The name of the AvailabilitySet used with this StreamingEndpoint for high availability streaming.  This value can only be set at creation time.
* **cdnEnabled**: bool: The CDN enabled flag.
* **cdnProfile**: string: The CDN profile name.
* **cdnProvider**: string: The CDN provider name.
* **created**: string (ReadOnly): The exact time the StreamingEndpoint was created.
* **crossSiteAccessPolicies**: [CrossSiteAccessPolicies](#crosssiteaccesspolicies): The StreamingEndpoint access policies.
* **customHostNames**: string[]: The custom host names of the StreamingEndpoint
* **description**: string: The StreamingEndpoint description.
* **freeTrialEndTime**: string (ReadOnly): The free trial expiration time.
* **hostName**: string (ReadOnly): The StreamingEndpoint host name.
* **lastModified**: string (ReadOnly): The exact time the StreamingEndpoint was last modified.
* **maxCacheAge**: int: Max cache age
* **provisioningState**: string (ReadOnly): The provisioning state of the StreamingEndpoint.
* **resourceState**: 'Deleting' | 'Running' | 'Scaling' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): The resource state of the StreamingEndpoint.
* **scaleUnits**: int (Required): The number of scale units.  Use the Scale operation to adjust this value.

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

## TransformOutput
### Properties
* **onError**: 'ContinueJob' | 'StopProcessingJob' | string: A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'.
* **preset**: [Preset](#preset) (Required): Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the output.
* **relativePriority**: 'High' | 'Low' | 'Normal' | string: Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal.

## TransformProperties
### Properties
* **created**: string (ReadOnly): The UTC date and time when the Transform was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **description**: string: An optional verbose description of the Transform.
* **lastModified**: string (ReadOnly): The UTC date and time when the Transform was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **outputs**: [TransformOutput](#transformoutput)[] (Required): An array of one or more TransformOutputs that the Transform should generate.

