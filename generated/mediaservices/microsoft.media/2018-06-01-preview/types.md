# Microsoft.Media @ 2018-06-01-preview

## Resource Microsoft.Media/mediaservices@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MediaServiceProperties](#mediaserviceproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/assets@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AssetProperties](#assetproperties)
* **type**: 'Microsoft.Media/mediaServices/assets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/contentKeyPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContentKeyPolicyProperties](#contentkeypolicyproperties)
* **type**: 'Microsoft.Media/mediaServices/contentKeyPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LiveEventProperties](#liveeventproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LiveOutputProperties](#liveoutputproperties)
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/streamingLocators@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingLocatorProperties](#streaminglocatorproperties)
* **type**: 'Microsoft.Media/mediaServices/streamingLocators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/streamingPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingPolicyProperties](#streamingpolicyproperties)
* **type**: 'Microsoft.Media/mediaServices/streamingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/transforms@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TransformProperties](#transformproperties)
* **type**: 'Microsoft.Media/mediaServices/transforms' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/transforms/jobs@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
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

## Dictionary<string,String>
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
### #Microsoft.Media.ContentKeyPolicyClearKeyConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration' (Required)

### #Microsoft.Media.ContentKeyPolicyFairPlayConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration' (Required)
* **ask**: array (Required)
* **fairPlayPfx**: string (Required)
* **fairPlayPfxPassword**: string (Required)
* **rentalAndLeaseKeyType**: 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required)
* **rentalDuration**: int (Required)

### #Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' (Required)
* **licenses**: [ContentKeyPolicyPlayReadyLicense](#contentkeypolicyplayreadylicense)[] (Required)
* **responseCustomData**: string

### #Microsoft.Media.ContentKeyPolicyUnknownConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration' (Required)

### #Microsoft.Media.ContentKeyPolicyWidevineConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration' (Required)
* **widevineTemplate**: string (Required)


## #Microsoft.Media.ContentKeyPolicyClearKeyConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration' (Required)

## #Microsoft.Media.ContentKeyPolicyFairPlayConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration' (Required)
* **ask**: array (Required)
* **fairPlayPfx**: string (Required)
* **fairPlayPfxPassword**: string (Required)
* **rentalAndLeaseKeyType**: 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required)
* **rentalDuration**: int (Required)

## #Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration
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
### #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader' (Required)

### #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier' (Required)
* **keyId**: string (Required)


## #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader' (Required)

## #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier
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

## #Microsoft.Media.ContentKeyPolicyUnknownConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration' (Required)

## #Microsoft.Media.ContentKeyPolicyWidevineConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration' (Required)
* **widevineTemplate**: string (Required)

## ContentKeyPolicyRestriction
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.ContentKeyPolicyOpenRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyOpenRestriction' (Required)

### #Microsoft.Media.ContentKeyPolicyTokenRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyTokenRestriction' (Required)
* **alternateVerificationKeys**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey)[]
* **audience**: string (Required)
* **issuer**: string (Required)
* **openIdConnectDiscoveryDocument**: string
* **primaryVerificationKey**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey) (Required)
* **requiredClaims**: [ContentKeyPolicyTokenClaim](#contentkeypolicytokenclaim)[]
* **restrictionTokenType**: 'Jwt' | 'Swt' | 'Unknown' (Required)

### #Microsoft.Media.ContentKeyPolicyUnknownRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownRestriction' (Required)


## #Microsoft.Media.ContentKeyPolicyOpenRestriction
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyOpenRestriction' (Required)

## #Microsoft.Media.ContentKeyPolicyTokenRestriction
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
### #Microsoft.Media.ContentKeyPolicyRsaTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey' (Required)
* **exponent**: array (Required)
* **modulus**: array (Required)

### #Microsoft.Media.ContentKeyPolicySymmetricTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey' (Required)
* **keyValue**: array (Required)

### #Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey' (Required)
* **rawBody**: array (Required)


## #Microsoft.Media.ContentKeyPolicyRsaTokenKey
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey' (Required)
* **exponent**: array (Required)
* **modulus**: array (Required)

## #Microsoft.Media.ContentKeyPolicySymmetricTokenKey
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey' (Required)
* **keyValue**: array (Required)

## #Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey' (Required)
* **rawBody**: array (Required)

## ContentKeyPolicyTokenClaim
### Properties
* **claimType**: string
* **claimValue**: string

## #Microsoft.Media.ContentKeyPolicyUnknownRestriction
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
* **alternativeMediaId**: string
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

## Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StreamingLocatorProperties
### Properties
* **alternativeMediaId**: string
* **assetName**: string (Required)
* **contentKeys**: [StreamingLocatorContentKey](#streaminglocatorcontentkey)[]
* **created**: string (ReadOnly)
* **defaultContentKeyPolicyName**: string
* **endTime**: string
* **startTime**: string
* **streamingLocatorId**: string
* **streamingPolicyName**: string (Required)

## StreamingLocatorContentKey
### Properties
* **id**: string (Required)
* **label**: string
* **policyName**: string (ReadOnly)
* **tracks**: [TrackSelection](#trackselection)[]
* **type**: 'CommonEncryptionCbcs' | 'CommonEncryptionCenc' | 'EnvelopeEncryption' (ReadOnly)
* **value**: string

## TrackSelection
### Properties
* **trackSelections**: [TrackPropertyCondition](#trackpropertycondition)[]

## TrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'Unknown' (Required)
* **property**: 'FourCC' | 'Unknown' (Required)
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
* **customKeyAcquisitionUrlTemplate**: string
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
### #Microsoft.Media.AudioAnalyzerPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioAnalyzerPreset' (Required)
* **audioLanguage**: string

### #Microsoft.Media.BuiltInStandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required)
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' (Required)

### #Microsoft.Media.StandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required)
* **codecs**: [Codec](#codec)[]
* **filters**: [Filters](#filters)
* **formats**: [Format](#format)[]


## #Microsoft.Media.AudioAnalyzerPreset
### Properties
* **@odata.type**: '#Microsoft.Media.AudioAnalyzerPreset' (Required)
* **audioLanguage**: string

## #Microsoft.Media.BuiltInStandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required)
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' (Required)

## #Microsoft.Media.StandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required)
* **codecs**: [Codec](#codec)[]
* **filters**: [Filters](#filters)
* **formats**: [Format](#format)[]

## Codec
* **Discriminator**: @odata.type
### Base Properties
* **label**: string
### #Microsoft.Media.Audio
#### Properties
* **@odata.type**: '#Microsoft.Media.Audio' (Required)
* **bitrate**: int
* **channels**: int
* **samplingRate**: int

### #Microsoft.Media.CopyAudio
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyAudio' (Required)

### #Microsoft.Media.CopyVideo
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyVideo' (Required)

### #Microsoft.Media.Video
#### Properties
* **@odata.type**: '#Microsoft.Media.Video' (Required)
* **keyFrameInterval**: string
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None'


## #Microsoft.Media.Audio
### Properties
* **@odata.type**: '#Microsoft.Media.Audio' (Required)
* **bitrate**: int
* **channels**: int
* **samplingRate**: int

## #Microsoft.Media.CopyAudio
### Properties
* **@odata.type**: '#Microsoft.Media.CopyAudio' (Required)

## #Microsoft.Media.CopyVideo
### Properties
* **@odata.type**: '#Microsoft.Media.CopyVideo' (Required)

## #Microsoft.Media.Video
### Properties
* **@odata.type**: '#Microsoft.Media.Video' (Required)
* **keyFrameInterval**: string
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None'

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
### #Microsoft.Media.AudioOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required)

### #Microsoft.Media.VideoOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required)
* **cropRectangle**: [Rectangle](#rectangle)
* **opacity**: int
* **position**: [Rectangle](#rectangle)


## #Microsoft.Media.AudioOverlay
### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required)

## #Microsoft.Media.VideoOverlay
### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required)
* **cropRectangle**: [Rectangle](#rectangle)
* **opacity**: int
* **position**: [Rectangle](#rectangle)

## Format
* **Discriminator**: @odata.type
### Base Properties
* **filenamePattern**: string
### #Microsoft.Media.ImageFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.ImageFormat' (Required)

### #Microsoft.Media.MultiBitrateFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.MultiBitrateFormat' (Required)
* **outputFiles**: [OutputFile](#outputfile)[]


## #Microsoft.Media.ImageFormat
### Properties
* **@odata.type**: '#Microsoft.Media.ImageFormat' (Required)

## #Microsoft.Media.MultiBitrateFormat
### Properties
* **@odata.type**: '#Microsoft.Media.MultiBitrateFormat' (Required)
* **outputFiles**: [OutputFile](#outputfile)[]

## OutputFile
### Properties
* **labels**: string[]

## JobProperties
### Properties
* **correlationData**: [Dictionary<string,String>](#dictionarystringstring)
* **created**: string (ReadOnly)
* **description**: string
* **input**: [JobInput](#jobinput) (Required)
* **lastModified**: string (ReadOnly)
* **outputs**: [JobOutput](#joboutput)[] (Required)
* **priority**: 'High' | 'Low' | 'Normal'
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobInput
* **Discriminator**: @odata.type
### Base Properties
* **label**: string
### #Microsoft.Media.JobInputClip
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputClip' (Required)
* **files**: string[]

### #Microsoft.Media.JobInputs
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required)
* **inputs**: [JobInput](#jobinput)[]


## #Microsoft.Media.JobInputClip
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputClip' (Required)
* **files**: string[]

## #Microsoft.Media.JobInputs
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required)
* **inputs**: [JobInput](#jobinput)[]

## JobOutput
* **Discriminator**: @odata.type
### Base Properties
* **error**: [JobError](#joberror) (ReadOnly)
* **progress**: int (ReadOnly)
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly)
### #Microsoft.Media.JobOutputAsset
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

## #Microsoft.Media.JobOutputAsset
### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required)
* **assetName**: string (Required)

