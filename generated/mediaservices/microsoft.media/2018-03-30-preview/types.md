# Microsoft.Media @ 2018-03-30-preview

## Resource Microsoft.Media/mediaservices@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MediaServiceProperties](#mediaserviceproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/assets@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AssetProperties](#assetproperties)
* **type**: 'Microsoft.Media/mediaServices/assets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/contentKeyPolicies@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContentKeyPolicyProperties](#contentkeypolicyproperties)
* **type**: 'Microsoft.Media/mediaServices/contentKeyPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LiveEventProperties](#liveeventproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LiveOutputProperties](#liveoutputproperties)
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/streamingLocators@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingLocatorProperties](#streaminglocatorproperties)
* **type**: 'Microsoft.Media/mediaServices/streamingLocators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/streamingPolicies@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingPolicyProperties](#streamingpolicyproperties)
* **type**: 'Microsoft.Media/mediaServices/streamingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/transforms@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TransformProperties](#transformproperties)
* **type**: 'Microsoft.Media/mediaServices/transforms' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/transforms/jobs@2018-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobProperties](#jobproperties)
* **type**: 'Microsoft.Media/mediaServices/transforms/jobs' (ReadOnly, DeployTimeConstant)

## MediaServiceProperties
### Properties
* **mediaServiceId**: string (ReadOnly)
* **storageAccounts**: [StorageAccount](#storageaccount)[]

## StorageAccount
### Properties
* **id**: string
* **type**: 'Primary' | 'Secondary' (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssetProperties
### Properties
* **alternateId**: string
* **assetId**: string (ReadOnly)
* **container**: string
* **created**: string (ReadOnly)
* **description**: string
* **lastModified**: string (ReadOnly)
* **storageAccountName**: string
* **storageEncryptionFormat**: 'MediaStorageClientEncryption' | 'None' (ReadOnly)

## ContentKeyPolicyProperties
### Properties
* **created**: string (ReadOnly)
* **description**: string
* **lastModified**: string (ReadOnly)
* **options**: [ContentKeyPolicyOption](#contentkeypolicyoption)[] (Required)
* **policyId**: string (ReadOnly)

## ContentKeyPolicyOption
### Properties
* **configuration**: [ContentKeyPolicyConfiguration](#contentkeypolicyconfiguration) (Required)
* **name**: string
* **policyOptionId**: string (ReadOnly)
* **restriction**: [ContentKeyPolicyRestriction](#contentkeypolicyrestriction) (Required)

## ContentKeyPolicyConfiguration
* **Discriminator**: @odata.type

### Base Properties
### ContentKeyPolicyClearKeyConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration' (Required)

### ContentKeyPolicyFairPlayConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration' (Required)
* **ask**: any (Required)
* **fairPlayPfx**: string (Required)
* **fairPlayPfxPassword**: string (Required)
* **rentalAndLeaseKeyType**: 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required)
* **rentalDuration**: int (Required)

### ContentKeyPolicyPlayReadyConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' (Required)
* **licenses**: [ContentKeyPolicyPlayReadyLicense](#contentkeypolicyplayreadylicense)[] (Required)
* **responseCustomData**: string

### ContentKeyPolicyUnknownConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration' (Required)

### ContentKeyPolicyWidevineConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration' (Required)
* **widevineTemplate**: string (Required)


## ContentKeyPolicyClearKeyConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration' (Required)

## ContentKeyPolicyFairPlayConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration' (Required)
* **ask**: any (Required)
* **fairPlayPfx**: string (Required)
* **fairPlayPfxPassword**: string (Required)
* **rentalAndLeaseKeyType**: 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required)
* **rentalDuration**: int (Required)

## ContentKeyPolicyPlayReadyConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' (Required)
* **licenses**: [ContentKeyPolicyPlayReadyLicense](#contentkeypolicyplayreadylicense)[] (Required)
* **responseCustomData**: string

## ContentKeyPolicyPlayReadyLicense
### Properties
* **allowTestDevices**: bool (Required)
* **beginDate**: string
* **contentKeyLocation**: [ContentKeyPolicyPlayReadyContentKeyLocation](#contentkeypolicyplayreadycontentkeylocation) (Required)
* **contentType**: 'UltraVioletDownload' | 'UltraVioletStreaming' | 'Unknown' | 'Unspecified' (Required)
* **expirationDate**: string
* **gracePeriod**: string
* **licenseType**: 'NonPersistent' | 'Persistent' | 'Unknown' (Required)
* **playRight**: [ContentKeyPolicyPlayReadyPlayRight](#contentkeypolicyplayreadyplayright)
* **relativeBeginDate**: string
* **relativeExpirationDate**: string

## ContentKeyPolicyPlayReadyContentKeyLocation
* **Discriminator**: @odata.type

### Base Properties
### ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader' (Required)

### ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier' (Required)
* **keyId**: string (Required)


## ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader' (Required)

## ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier' (Required)
* **keyId**: string (Required)

## ContentKeyPolicyPlayReadyPlayRight
### Properties
* **agcAndColorStripeRestriction**: int
* **allowPassingVideoContentToUnknownOutput**: 'Allowed' | 'AllowedWithVideoConstriction' | 'NotAllowed' | 'Unknown' (Required)
* **analogVideoOpl**: int
* **compressedDigitalAudioOpl**: int
* **compressedDigitalVideoOpl**: int
* **digitalVideoOnlyContentRestriction**: bool (Required)
* **explicitAnalogTelevisionOutputRestriction**: [ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction](#contentkeypolicyplayreadyexplicitanalogtelevisionrestriction)
* **firstPlayExpiration**: string
* **imageConstraintForAnalogComponentVideoRestriction**: bool (Required)
* **imageConstraintForAnalogComputerMonitorRestriction**: bool (Required)
* **scmsRestriction**: int
* **uncompressedDigitalAudioOpl**: int
* **uncompressedDigitalVideoOpl**: int

## ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction
### Properties
* **bestEffort**: bool (Required)
* **configurationData**: int (Required)

## ContentKeyPolicyUnknownConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration' (Required)

## ContentKeyPolicyWidevineConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration' (Required)
* **widevineTemplate**: string (Required)

## ContentKeyPolicyRestriction
* **Discriminator**: @odata.type

### Base Properties
### ContentKeyPolicyOpenRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyOpenRestriction' (Required)

### ContentKeyPolicyTokenRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyTokenRestriction' (Required)
* **alternateVerificationKeys**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey)[]
* **audience**: string (Required)
* **issuer**: string (Required)
* **openIdConnectDiscoveryDocument**: string
* **primaryVerificationKey**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey) (Required)
* **requiredClaims**: [ContentKeyPolicyTokenClaim](#contentkeypolicytokenclaim)[]
* **restrictionTokenType**: 'Jwt' | 'Swt' | 'Unknown' (Required)

### ContentKeyPolicyUnknownRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownRestriction' (Required)


## ContentKeyPolicyOpenRestriction
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyOpenRestriction' (Required)

## ContentKeyPolicyTokenRestriction
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyTokenRestriction' (Required)
* **alternateVerificationKeys**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey)[]
* **audience**: string (Required)
* **issuer**: string (Required)
* **openIdConnectDiscoveryDocument**: string
* **primaryVerificationKey**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey) (Required)
* **requiredClaims**: [ContentKeyPolicyTokenClaim](#contentkeypolicytokenclaim)[]
* **restrictionTokenType**: 'Jwt' | 'Swt' | 'Unknown' (Required)

## ContentKeyPolicyRestrictionTokenKey
* **Discriminator**: @odata.type

### Base Properties
### ContentKeyPolicyRsaTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey' (Required)
* **exponent**: any (Required)
* **modulus**: any (Required)

### ContentKeyPolicySymmetricTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey' (Required)
* **keyValue**: any (Required)

### ContentKeyPolicyX509CertificateTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey' (Required)
* **rawBody**: any (Required)


## ContentKeyPolicyRsaTokenKey
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey' (Required)
* **exponent**: any (Required)
* **modulus**: any (Required)

## ContentKeyPolicySymmetricTokenKey
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey' (Required)
* **keyValue**: any (Required)

## ContentKeyPolicyX509CertificateTokenKey
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey' (Required)
* **rawBody**: any (Required)

## ContentKeyPolicyTokenClaim
### Properties
* **claimType**: string
* **claimValue**: string

## ContentKeyPolicyUnknownRestriction
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownRestriction' (Required)

## LiveEventProperties
### Properties
* **created**: string (ReadOnly)
* **crossSiteAccessPolicies**: [CrossSiteAccessPolicies](#crosssiteaccesspolicies)
* **description**: string
* **encoding**: [LiveEventEncoding](#liveeventencoding)
* **input**: [LiveEventInput](#liveeventinput) (Required)
* **lastModified**: string (ReadOnly)
* **preview**: [LiveEventPreview](#liveeventpreview)
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **streamOptions**: 'Default' | 'LowLatency'[]
* **vanityUrl**: bool

## CrossSiteAccessPolicies
### Properties
* **clientAccessPolicy**: string
* **crossDomainPolicy**: string

## LiveEventEncoding
### Properties
* **encodingType**: 'Basic' | 'None'
* **presetName**: string

## LiveEventInput
### Properties
* **accessToken**: string
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]
* **keyFrameIntervalDuration**: string
* **streamingProtocol**: 'FragmentedMP4' | 'RTMP' (Required)

## LiveEventEndpoint
### Properties
* **protocol**: string
* **url**: string

## LiveEventPreview
### Properties
* **accessControl**: [LiveEventPreviewAccessControl](#liveeventpreviewaccesscontrol)
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]
* **previewLocator**: string
* **streamingPolicyName**: string

## LiveEventPreviewAccessControl
### Properties
* **ip**: [IPAccessControl](#ipaccesscontrol)

## IPAccessControl
### Properties
* **allow**: [IPRange](#iprange)[]

## IPRange
### Properties
* **address**: string
* **name**: string
* **subnetPrefixLength**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LiveOutputProperties
### Properties
* **archiveWindowLength**: string (Required)
* **assetName**: string (Required)
* **created**: string (ReadOnly)
* **description**: string
* **hls**: [Hls](#hls)
* **lastModified**: string (ReadOnly)
* **manifestName**: string
* **outputSnapTime**: int
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Running' (ReadOnly)

## Hls
### Properties
* **fragmentsPerTsSegment**: int

## StreamingEndpointProperties
### Properties
* **accessControl**: [StreamingEndpointAccessControl](#streamingendpointaccesscontrol)
* **availabilitySetName**: string
* **cdnEnabled**: bool
* **cdnProfile**: string
* **cdnProvider**: string
* **created**: string (ReadOnly)
* **crossSiteAccessPolicies**: [CrossSiteAccessPolicies](#crosssiteaccesspolicies)
* **customHostNames**: string[]
* **description**: string
* **freeTrialEndTime**: string (ReadOnly)
* **hostName**: string (ReadOnly)
* **lastModified**: string (ReadOnly)
* **maxCacheAge**: int
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Deleting' | 'Running' | 'Scaling' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **scaleUnits**: int

## StreamingEndpointAccessControl
### Properties
* **akamai**: [AkamaiAccessControl](#akamaiaccesscontrol)
* **ip**: [IPAccessControl](#ipaccesscontrol)

## AkamaiAccessControl
### Properties
* **akamaiSignatureHeaderAuthenticationKeyList**: [AkamaiSignatureHeaderAuthenticationKey](#akamaisignatureheaderauthenticationkey)[]

## AkamaiSignatureHeaderAuthenticationKey
### Properties
* **base64Key**: string
* **expiration**: string
* **identifier**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StreamingLocatorProperties
### Properties
* **assetName**: string (Required)
* **contentKeys**: [StreamingLocatorUserDefinedContentKey](#streaminglocatoruserdefinedcontentkey)[]
* **created**: string (ReadOnly)
* **defaultContentKeyPolicyName**: string
* **endTime**: string
* **startTime**: string
* **streamingLocatorId**: string
* **streamingPolicyName**: string (Required)

## StreamingLocatorUserDefinedContentKey
### Properties
* **id**: string (Required)
* **label**: string
* **value**: string

## StreamingPolicyProperties
### Properties
* **commonEncryptionCbcs**: [CommonEncryptionCbcs](#commonencryptioncbcs)
* **commonEncryptionCenc**: [CommonEncryptionCenc](#commonencryptioncenc)
* **created**: string (ReadOnly)
* **defaultContentKeyPolicyName**: string
* **envelopeEncryption**: [EnvelopeEncryption](#envelopeencryption)
* **noEncryption**: [NoEncryption](#noencryption)

## CommonEncryptionCbcs
### Properties
* **clearTracks**: [TrackSelection](#trackselection)[]
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys)
* **drm**: [CbcsDrmConfiguration](#cbcsdrmconfiguration)
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols)

## TrackSelection
### Properties
* **trackSelections**: [TrackPropertyCondition](#trackpropertycondition)[]

## TrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'Unknown' (Required)
* **property**: 'FourCC' | 'Unknown' (Required)
* **value**: string

## StreamingPolicyContentKeys
### Properties
* **defaultKey**: [DefaultKey](#defaultkey)
* **keyToTrackMappings**: [StreamingPolicyContentKey](#streamingpolicycontentkey)[]

## DefaultKey
### Properties
* **label**: string
* **policyName**: string

## StreamingPolicyContentKey
### Properties
* **label**: string
* **policyName**: string
* **tracks**: [TrackSelection](#trackselection)[]

## CbcsDrmConfiguration
### Properties
* **fairPlay**: [StreamingPolicyFairPlayConfiguration](#streamingpolicyfairplayconfiguration)
* **playReady**: [StreamingPolicyPlayReadyConfiguration](#streamingpolicyplayreadyconfiguration)
* **widevine**: [StreamingPolicyWidevineConfiguration](#streamingpolicywidevineconfiguration)

## StreamingPolicyFairPlayConfiguration
### Properties
* **allowPersistentLicense**: bool (Required)
* **customLicenseAcquisitionUrlTemplate**: string

## StreamingPolicyPlayReadyConfiguration
### Properties
* **customLicenseAcquisitionUrlTemplate**: string
* **playReadyCustomAttributes**: string

## StreamingPolicyWidevineConfiguration
### Properties
* **customLicenseAcquisitionUrlTemplate**: string

## EnabledProtocols
### Properties
* **dash**: bool (Required)
* **download**: bool (Required)
* **hls**: bool (Required)
* **smoothStreaming**: bool (Required)

## CommonEncryptionCenc
### Properties
* **clearTracks**: [TrackSelection](#trackselection)[]
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys)
* **drm**: [CencDrmConfiguration](#cencdrmconfiguration)
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols)

## CencDrmConfiguration
### Properties
* **playReady**: [StreamingPolicyPlayReadyConfiguration](#streamingpolicyplayreadyconfiguration)
* **widevine**: [StreamingPolicyWidevineConfiguration](#streamingpolicywidevineconfiguration)

## EnvelopeEncryption
### Properties
* **clearTracks**: [TrackSelection](#trackselection)[]
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys)
* **customLicenseAcquisitionUrlTemplate**: string
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols)

## NoEncryption
### Properties
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols)

## TransformProperties
### Properties
* **created**: string (ReadOnly)
* **description**: string
* **lastModified**: string (ReadOnly)
* **outputs**: [TransformOutput](#transformoutput)[] (Required)

## TransformOutput
### Properties
* **onError**: 'ContinueJob' | 'StopProcessingJob'
* **preset**: [Preset](#preset) (Required)
* **relativePriority**: 'High' | 'Low' | 'Normal'

## Preset
* **Discriminator**: @odata.type

### Base Properties
### BuiltInStandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required)
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' (Required)

### StandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required)
* **codecs**: [Codec](#codec)[]
* **filters**: [Filters](#filters)
* **formats**: [Format](#format)[]

### VideoAnalyzerPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoAnalyzerPreset' (Required)
* **audioInsightsOnly**: bool


## BuiltInStandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required)
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' (Required)

## StandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required)
* **codecs**: [Codec](#codec)[]
* **filters**: [Filters](#filters)
* **formats**: [Format](#format)[]

## Codec
* **Discriminator**: @odata.type

### Base Properties
* **label**: string
### AacAudio
#### Properties
* **@odata.type**: '#Microsoft.Media.AacAudio' (Required)
* **profile**: 'AacLc' | 'HeAacV1' | 'HeAacV2'

### CopyAudio
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyAudio' (Required)

### CopyVideo
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyVideo' (Required)

### H264Video
#### Properties
* **@odata.type**: '#Microsoft.Media.H264Video' (Required)
* **complexity**: 'Balanced' | 'Quality' | 'Speed'
* **layers**: [H264Layer](#h264layer)[]
* **sceneChangeDetection**: bool

### JpgImage
#### Properties
* **@odata.type**: '#Microsoft.Media.JpgImage' (Required)
* **layers**: [JpgLayer](#jpglayer)[]

### PngImage
#### Properties
* **@odata.type**: '#Microsoft.Media.PngImage' (Required)
* **layers**: [PngLayer](#pnglayer)[]


## AacAudio
### Properties
* **@odata.type**: '#Microsoft.Media.AacAudio' (Required)
* **profile**: 'AacLc' | 'HeAacV1' | 'HeAacV2'

## CopyAudio
### Properties
* **@odata.type**: '#Microsoft.Media.CopyAudio' (Required)

## CopyVideo
### Properties
* **@odata.type**: '#Microsoft.Media.CopyVideo' (Required)

## H264Video
### Properties
* **@odata.type**: '#Microsoft.Media.H264Video' (Required)
* **complexity**: 'Balanced' | 'Quality' | 'Speed'
* **layers**: [H264Layer](#h264layer)[]
* **sceneChangeDetection**: bool

## H264Layer
### Properties
* **@odata.type**: string (Required)
* **adaptiveBFrame**: bool
* **bFrames**: int
* **bitrate**: int
* **bufferWindow**: string
* **entropyMode**: 'Cabac' | 'Cavlc'
* **frameRate**: string
* **height**: string
* **label**: string
* **level**: string
* **maxBitrate**: int
* **profile**: 'Auto' | 'Baseline' | 'High' | 'High422' | 'High444' | 'Main'
* **referenceFrames**: int
* **slices**: int
* **width**: string

## JpgImage
### Properties
* **@odata.type**: '#Microsoft.Media.JpgImage' (Required)
* **layers**: [JpgLayer](#jpglayer)[]

## JpgLayer
### Properties
* **@odata.type**: string (Required)
* **height**: string
* **label**: string
* **quality**: int
* **width**: string

## PngImage
### Properties
* **@odata.type**: '#Microsoft.Media.PngImage' (Required)
* **layers**: [PngLayer](#pnglayer)[]

## PngLayer
### Properties
* **@odata.type**: string (Required)
* **height**: string
* **label**: string
* **width**: string

## Filters
### Properties
* **crop**: [Rectangle](#rectangle)
* **deinterlace**: [Deinterlace](#deinterlace)
* **overlays**: [Overlay](#overlay)[]
* **rotation**: 'Auto' | 'None' | 'Rotate0' | 'Rotate180' | 'Rotate270' | 'Rotate90'

## Rectangle
### Properties
* **height**: string
* **left**: string
* **top**: string
* **width**: string

## Deinterlace
### Properties
* **mode**: 'AutoPixelAdaptive' | 'Off'
* **parity**: 'Auto' | 'BottomFieldFirst' | 'TopFieldFirst'

## Overlay
* **Discriminator**: @odata.type

### Base Properties
* **audioGainLevel**: int
* **end**: string
* **fadeInDuration**: string
* **fadeOutDuration**: string
* **inputLabel**: string
* **start**: string
### AudioOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required)

### VideoOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required)
* **cropRectangle**: [Rectangle](#rectangle)
* **opacity**: int
* **position**: [Rectangle](#rectangle)


## AudioOverlay
### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required)

## VideoOverlay
### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required)
* **cropRectangle**: [Rectangle](#rectangle)
* **opacity**: int
* **position**: [Rectangle](#rectangle)

## Format
* **Discriminator**: @odata.type

### Base Properties
* **filenamePattern**: string
### JpgFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.JpgFormat' (Required)

### Mp4Format
#### Properties
* **@odata.type**: '#Microsoft.Media.Mp4Format' (Required)

### PngFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.PngFormat' (Required)

### TransportStreamFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.TransportStreamFormat' (Required)


## JpgFormat
### Properties
* **@odata.type**: '#Microsoft.Media.JpgFormat' (Required)

## Mp4Format
### Properties
* **@odata.type**: '#Microsoft.Media.Mp4Format' (Required)

## PngFormat
### Properties
* **@odata.type**: '#Microsoft.Media.PngFormat' (Required)

## TransportStreamFormat
### Properties
* **@odata.type**: '#Microsoft.Media.TransportStreamFormat' (Required)

## VideoAnalyzerPreset
### Properties
* **@odata.type**: '#Microsoft.Media.VideoAnalyzerPreset' (Required)
* **audioInsightsOnly**: bool

## JobProperties
### Properties
* **created**: string (ReadOnly)
* **description**: string
* **input**: [JobInput](#jobinput) (Required)
* **lastModified**: string (ReadOnly)
* **outputs**: [JobOutput](#joboutput)[] (Required)
* **priority**: 'High' | 'Low' | 'Normal'
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly)

## JobInput
* **Discriminator**: @odata.type

### Base Properties
* **label**: string
### JobInputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputAsset' (Required)
* **assetName**: string (Required)

### JobInputHttp
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputHttp' (Required)
* **baseUri**: string

### JobInputs
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required)
* **inputs**: [JobInput](#jobinput)[]


## JobInputAsset
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputAsset' (Required)
* **assetName**: string (Required)

## JobInputHttp
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputHttp' (Required)
* **baseUri**: string

## JobInputs
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required)
* **inputs**: [JobInput](#jobinput)[]

## JobOutput
* **Discriminator**: @odata.type

### Base Properties
* **error**: [JobError](#joberror) (ReadOnly)
* **progress**: int (ReadOnly)
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly)
### JobOutputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required)
* **assetName**: string (Required)


## JobError
### Properties
* **category**: 'Configuration' | 'Content' | 'Download' | 'Service' | 'Upload' (ReadOnly)
* **code**: 'ConfigurationUnsupported' | 'ContentMalformed' | 'ContentUnsupported' | 'DownloadNotAccessible' | 'DownloadTransientError' | 'ServiceError' | 'ServiceTransientError' | 'UploadNotAccessible' | 'UploadTransientError' (ReadOnly)
* **details**: [JobErrorDetail](#joberrordetail)[] (ReadOnly)
* **message**: string (ReadOnly)
* **retry**: 'DoNotRetry' | 'MayRetry' (ReadOnly)

## JobErrorDetail
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## JobOutputAsset
### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required)
* **assetName**: string (Required)

