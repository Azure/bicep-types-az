# Microsoft.Media @ 2020-05-01

## Resource Microsoft.Media/mediaservices@2020-05-01
* **Valid Scope(s)**: Subscription (ReadOnly), ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MediaServiceIdentity](#mediaserviceidentity): The Managed Identity for the Media Services account.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/accountFilters@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaFilterProperties](#mediafilterproperties): The Media Filter properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/accountFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssetProperties](#assetproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets/assetFilters@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaFilterProperties](#mediafilterproperties): The Media Filter properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/assets/assetFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/contentKeyPolicies@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContentKeyPolicyProperties](#contentkeypolicyproperties): The properties of the Content Key Policy.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/contentKeyPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveEventProperties](#liveeventproperties): The live event properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveOutputProperties](#liveoutputproperties): Live output properties.
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/privateEndpointConnections@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Media/mediaservices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/privateLinkResources@2020-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Media/mediaservices/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties): The streaming endpoint properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingLocators@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingLocatorProperties](#streaminglocatorproperties): Properties of the Streaming Locator.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/streamingLocators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingPolicies@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingPolicyProperties](#streamingpolicyproperties): Class to specify properties of Streaming Policy
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/streamingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/transforms@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TransformProperties](#transformproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/transforms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/transforms/jobs@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/transforms/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Function listContainerSas (Microsoft.Media/mediaServices/assets@2020-05-01)
* **Resource**: Microsoft.Media/mediaServices/assets
* **ApiVersion**: 2020-05-01
* **Input**: [ListContainerSasInput](#listcontainersasinput)
* **Output**: [AssetContainerSas](#assetcontainersas)

## Function listContentKeys (Microsoft.Media/mediaServices/streamingLocators@2020-05-01)
* **Resource**: Microsoft.Media/mediaServices/streamingLocators
* **ApiVersion**: 2020-05-01
* **Output**: [ListContentKeysResponse](#listcontentkeysresponse)

## Function listEdgePolicies (Microsoft.Media/mediaservices@2020-05-01)
* **Resource**: Microsoft.Media/mediaservices
* **ApiVersion**: 2020-05-01
* **Input**: [ListEdgePoliciesInput](#listedgepoliciesinput)
* **Output**: [EdgePolicies](#edgepolicies)

## Function listPaths (Microsoft.Media/mediaServices/streamingLocators@2020-05-01)
* **Resource**: Microsoft.Media/mediaServices/streamingLocators
* **ApiVersion**: 2020-05-01
* **Output**: [ListPathsResponse](#listpathsresponse)

## Function listStreamingLocators (Microsoft.Media/mediaServices/assets@2020-05-01)
* **Resource**: Microsoft.Media/mediaServices/assets
* **ApiVersion**: 2020-05-01
* **Output**: [ListStreamingLocatorsResponse](#liststreaminglocatorsresponse)

## AccountEncryption
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The properties of the key used to encrypt the account.
* **type**: 'CustomerKey' | 'SystemKey' | string (Required): The type of key used to encrypt the Account Key.

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

## ClipTime
* **Discriminator**: @odata.type

### Base Properties
### AbsoluteClipTime
#### Properties
* **@odata.type**: '#Microsoft.Media.AbsoluteClipTime' (Required): The discriminator for derived types.
* **time**: string (Required): The time position on the timeline of the input media. It is usually specified as an ISO8601 period. e.g PT30S for 30 seconds.

### UtcClipTime
#### Properties
* **@odata.type**: '#Microsoft.Media.UtcClipTime' (Required): The discriminator for derived types.
* **time**: string (Required): The time position on the timeline of the input media based on Utc time.


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

### H265Video
#### Properties
* **@odata.type**: '#Microsoft.Media.H265Video' (Required): The discriminator for derived types.
* **complexity**: 'Balanced' | 'Quality' | 'Speed' | string: Tells the encoder how to choose its encoding settings.  Quality will provide for a higher compression ratio but at a higher cost and longer compute time.  Speed will produce a relatively larger file but is faster and more economical. The default value is Balanced.
* **layers**: [H265Layer](#h265layer)[]: The collection of output H.265 layers to be produced by the encoder.
* **sceneChangeDetection**: bool: Specifies whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.

### JpgImage
#### Properties
* **@odata.type**: '#Microsoft.Media.JpgImage' (Required): The discriminator for derived types.
* **layers**: [JpgLayer](#jpglayer)[]: A collection of output JPEG image layers to be produced by the encoder.
* **spriteColumn**: int: Sets the number of columns used in thumbnail sprite image.  The number of rows are automatically calculated and a VTT file is generated with the coordinate mappings for each thumbnail in the sprite. Note: this value should be a positive integer and a proper value is recommended so that the output image resolution will not go beyond JPEG maximum pixel resolution limit 65535x65535.

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

## EdgePolicies
### Properties
* **usageDataCollectionPolicy**: [EdgeUsageDataCollectionPolicy](#edgeusagedatacollectionpolicy)

## EdgeUsageDataCollectionPolicy
### Properties
* **dataCollectionFrequency**: string: Usage data collection frequency in ISO 8601 duration format e.g. PT10M , PT5H.
* **dataReportingFrequency**: string: Usage data reporting frequency in ISO 8601 duration format e.g. PT10M , PT5H.
* **eventHubDetails**: [EdgeUsageDataEventHub](#edgeusagedataeventhub): Details of Event Hub where the usage will be reported.
* **maxAllowedUnreportedUsageDuration**: string: Maximum time for which the functionality of the device will not be hampered for not reporting the usage data.

## EdgeUsageDataEventHub
### Properties
* **name**: string: Name of the Event Hub where usage will be reported.
* **namespace**: string: Namespace of the Event Hub where usage will be reported.
* **token**: string: SAS token needed to interact with Event Hub.

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

## FaceDetectorPresetExperimentalOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **filenamePattern**: string (Required): The pattern of the file names for the generated output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
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

## H265Layer
### Properties
* **@odata.type**: string (Required): The discriminator for derived types.
* **adaptiveBFrame**: bool: Specifies whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
* **bFrames**: int: The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
* **bitrate**: int (Required): The average bitrate in bits per second at which to encode the input video when generating this layer. For example: a target bitrate of 3000Kbps or 3Mbps means this value should be 3000000 This is a required field.
* **bufferWindow**: string: The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
* **frameRate**: string: The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
* **height**: string: The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
* **label**: string: The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
* **level**: string: We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.265 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
* **maxBitrate**: int: The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
* **profile**: 'Auto' | 'Main' | string: We currently support Main. Default is Auto.
* **referenceFrames**: int: The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
* **slices**: int: The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
* **width**: string: The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.

## Hls
### Properties
* **fragmentsPerTsSegment**: int: The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output.

## InputDefinition
* **Discriminator**: @odata.type

### Base Properties
* **includedTracks**: [TrackDescriptor](#trackdescriptor)[]: The list of TrackDescriptors which define the metadata and selection of tracks in the input.
### FromAllInputFile
#### Properties
* **@odata.type**: '#Microsoft.Media.FromAllInputFile' (Required): The discriminator for derived types.

### FromEachInputFile
#### Properties
* **@odata.type**: '#Microsoft.Media.FromEachInputFile' (Required): The discriminator for derived types.

### InputFile
#### Properties
* **@odata.type**: '#Microsoft.Media.InputFile' (Required): The discriminator for derived types.
* **filename**: string: Name of the file that this input definition applies to.


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

### JobInputSequence
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputSequence' (Required): The discriminator for derived types.
* **inputs**: [JobInputClip](#jobinputclip)[]: JobInputs that make up the timeline.


## JobInputClip
* **Discriminator**: @odata.type

### Base Properties
* **end**: [ClipTime](#cliptime): Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
* **files**: string[]: List of files. Required for JobInputHttp. Maximum of 4000 characters each.
* **inputDefinitions**: [InputDefinition](#inputdefinition)[]: Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
* **label**: string: A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
* **start**: [ClipTime](#cliptime): Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.
### JobInputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputAsset' (Required): The discriminator for derived types.
* **assetName**: string (Required): The name of the input Asset.

### JobInputHttp
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputHttp' (Required): The discriminator for derived types.
* **baseUri**: string: Base URI for HTTPS job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. Maximum length of 4000 characters.


## JobOutput
* **Discriminator**: @odata.type

### Base Properties
* **endTime**: string (ReadOnly): The UTC date and time at which this Job Output finished processing.
* **error**: [JobError](#joberror) (ReadOnly): If the JobOutput is in the Error state, it contains the details of the error.
* **label**: string: A label that is assigned to a JobOutput in order to help uniquely identify it. This is useful when your Transform has more than one TransformOutput, whereby your Job has more than one JobOutput. In such cases, when you submit the Job, you will add two or more JobOutputs, in the same order as TransformOutputs in the Transform. Subsequently, when you retrieve the Job, either through events or on a GET request, you can use the label to easily identify the JobOutput. If a label is not provided, a default value of '{presetName}_{outputIndex}' will be used, where the preset name is the name of the preset in the corresponding TransformOutput and the output index is the relative index of the this JobOutput within the Job. Note that this index is the same as the relative index of the corresponding TransformOutput within its Transform.
* **progress**: int (ReadOnly): If the JobOutput is in a Processing state, this contains the Job completion percentage. The value is an estimate and not intended to be used to predict Job completion times. To determine if the JobOutput is complete, use the State property.
* **startTime**: string (ReadOnly): The UTC date and time at which this Job Output began processing.
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' | string (ReadOnly): Describes the state of the JobOutput.
### JobOutputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required): The discriminator for derived types.
* **assetName**: string (Required): The name of the output Asset.


## JobProperties
### Properties
* **correlationData**: [JobPropertiesCorrelationData](#jobpropertiescorrelationdata): Customer provided key, value pairs that will be returned in Job and JobOutput state events.
* **created**: string (ReadOnly): The UTC date and time when the customer has created the Job, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **description**: string: Optional customer supplied description of the Job.
* **endTime**: string (ReadOnly): The UTC date and time at which this Job finished processing.
* **input**: [JobInput](#jobinput) (Required): The inputs for the Job.
* **lastModified**: string (ReadOnly): The UTC date and time when the customer has last updated the Job, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **outputs**: [JobOutput](#joboutput)[] (Required): The outputs for the Job.
* **priority**: 'High' | 'Low' | 'Normal' | string: Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal.
* **startTime**: string (ReadOnly): The UTC date and time at which this Job began processing.
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

## KeyVaultProperties
### Properties
* **currentKeyIdentifier**: string (ReadOnly): The current key used to encrypt the Media Services account, including the key version.
* **keyIdentifier**: string: The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).

## ListContainerSasInput
### Properties
* **expiryTime**: string: The SAS URL expiration time.  This must be less than 24 hours from the current time.
* **permissions**: 'Read' | 'ReadWrite' | 'ReadWriteDelete' | string: The permissions to set on the SAS URL.

## ListContentKeysResponse
### Properties
* **contentKeys**: [StreamingLocatorContentKey](#streaminglocatorcontentkey)[]: ContentKeys used by current Streaming Locator

## ListEdgePoliciesInput
### Properties
* **deviceId**: string: Unique identifier of the edge device.

## ListPathsResponse
### Properties
* **downloadPaths**: string[]: Download Paths supported by current Streaming Locator
* **streamingPaths**: [StreamingPath](#streamingpath)[]: Streaming Paths supported by current Streaming Locator

## ListStreamingLocatorsResponse
### Properties
* **streamingLocators**: [AssetStreamingLocator](#assetstreaminglocator)[] (ReadOnly): The list of Streaming Locators.

## LiveEventEncoding
### Properties
* **encodingType**: 'None' | 'Premium1080p' | 'Standard' | string: Live event type. When encodingType is set to None, the service simply passes through the incoming video and audio layer(s) to the output. When encodingType is set to Standard or Premium1080p, a live encoder transcodes the incoming stream into multiple bitrates or layers. See https://go.microsoft.com/fwlink/?linkid=2095101 for more information. This property cannot be modified after the live event is created.
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
* **streamOptions**: 'Default' | 'LowLatency' | string[]: The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. The valid values for the array entry values are 'Default' and 'LowLatency'.
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

## MediaFilterProperties
### Properties
* **firstQuality**: [FirstQuality](#firstquality): The first quality.
* **presentationTimeRange**: [PresentationTimeRange](#presentationtimerange): The presentation time range.
* **tracks**: [FilterTrackSelection](#filtertrackselection)[]: The tracks selection conditions.

## MediaServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The Principal ID of the identity.
* **tenantId**: string (ReadOnly): The Tenant ID of the identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): The identity type.

## MediaServiceProperties
### Properties
* **encryption**: [AccountEncryption](#accountencryption): The account encryption properties.
* **mediaServiceId**: string (ReadOnly): The Media Services account ID.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.
* **storageAuthentication**: 'ManagedIdentity' | 'System' | string

## NoEncryption
### Properties
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Representing supported protocols

## Overlay
* **Discriminator**: @odata.type

### Base Properties
* **audioGainLevel**: int: The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
* **end**: string: The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration.
* **fadeInDuration**: string: The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
* **fadeOutDuration**: string: The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
* **inputLabel**: string (Required): The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats.
* **start**: string: The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video.
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
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'ContentAwareEncoding' | 'ContentAwareEncodingExperimental' | 'CopyAllBitrateNonInterleaved' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' | 'H264SingleBitrate1080p' | 'H264SingleBitrate720p' | 'H264SingleBitrateSD' | 'H265AdaptiveStreaming' | 'H265ContentAwareEncoding' | 'H265SingleBitrate1080p' | 'H265SingleBitrate4K' | 'H265SingleBitrate720p' | string (Required): The built-in preset to be used for encoding videos.

### FaceDetectorPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.FaceDetectorPreset' (Required): The discriminator for derived types.
* **blurType**: 'Black' | 'Box' | 'High' | 'Low' | 'Med' | string: Blur type
* **experimentalOptions**: [FaceDetectorPresetExperimentalOptions](#facedetectorpresetexperimentaloptions): Dictionary containing key value pairs for parameters not exposed in the preset itself
* **mode**: 'Analyze' | 'Combined' | 'Redact' | string: This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction.
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


## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

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

## TrackDescriptor
* **Discriminator**: @odata.type

### Base Properties
### SelectAudioTrackByAttribute
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectAudioTrackByAttribute' (Required): The discriminator for derived types.
* **attribute**: 'Bitrate' | 'Language' | string (Required): The TrackAttribute to filter the tracks by.
* **filter**: 'All' | 'Bottom' | 'Top' | 'ValueEquals' | string (Required): The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks.
* **filterValue**: string: The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property.

### SelectAudioTrackById
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectAudioTrackById' (Required): The discriminator for derived types.
* **trackId**: int (Required): Track identifier to select

### SelectVideoTrackByAttribute
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectVideoTrackByAttribute' (Required): The discriminator for derived types.
* **attribute**: 'Bitrate' | 'Language' | string (Required): The TrackAttribute to filter the tracks by.
* **filter**: 'All' | 'Bottom' | 'Top' | 'ValueEquals' | string (Required): The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks.
* **filterValue**: string: The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property. For TrackAttribute.Bitrate, this should be an integer value in bits per second (e.g: '1500000').  The TrackAttribute.Language is not supported for video tracks.

### SelectVideoTrackById
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectVideoTrackById' (Required): The discriminator for derived types.
* **trackId**: int (Required): Track identifier to select


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

