# Microsoft.Media @ 2020-05-01

## Resource Microsoft.Media/mediaservices@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: MediaServiceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MediaServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/accountFilters@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MediaFilterProperties
* **type**: 'Microsoft.Media/mediaServices/accountFilters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/assets@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AssetProperties
* **type**: 'Microsoft.Media/mediaServices/assets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/assets/assetFilters@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MediaFilterProperties
* **type**: 'Microsoft.Media/mediaServices/assets/assetFilters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/contentKeyPolicies@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ContentKeyPolicyProperties
* **type**: 'Microsoft.Media/mediaServices/contentKeyPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LiveEventProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LiveOutputProperties
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/privateEndpointConnections@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Media/mediaservices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StreamingEndpointProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/streamingLocators@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StreamingLocatorProperties
* **type**: 'Microsoft.Media/mediaServices/streamingLocators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/streamingPolicies@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StreamingPolicyProperties
* **type**: 'Microsoft.Media/mediaServices/streamingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/transforms@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TransformProperties
* **type**: 'Microsoft.Media/mediaServices/transforms' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/transforms/jobs@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobProperties
* **type**: 'Microsoft.Media/mediaServices/transforms/jobs' (ReadOnly, DeployTimeConstant)

## MediaServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## MediaServiceProperties
### Properties
* **encryption**: AccountEncryption
* **mediaServiceId**: string (ReadOnly)
* **storageAccounts**: StorageAccount[]
* **storageAuthentication**: 'ManagedIdentity' | 'System'

## AccountEncryption
### Properties
* **keyVaultProperties**: KeyVaultProperties
* **type**: 'CustomerKey' | 'SystemKey' (Required)

## KeyVaultProperties
### Properties
* **currentKeyIdentifier**: string (ReadOnly)
* **keyIdentifier**: string

## StorageAccount
### Properties
* **id**: string
* **type**: 'Primary' | 'Secondary' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MediaFilterProperties
### Properties
* **firstQuality**: FirstQuality
* **presentationTimeRange**: PresentationTimeRange
* **tracks**: FilterTrackSelection[]

## FirstQuality
### Properties
* **bitrate**: int (Required)

## PresentationTimeRange
### Properties
* **endTimestamp**: int
* **forceEndTimestamp**: bool
* **liveBackoffDuration**: int
* **presentationWindowDuration**: int
* **startTimestamp**: int
* **timescale**: int

## FilterTrackSelection
### Properties
* **trackSelections**: FilterTrackPropertyCondition[] (Required)

## FilterTrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'NotEqual' (Required)
* **property**: 'Bitrate' | 'FourCC' | 'Language' | 'Name' | 'Type' | 'Unknown' (Required)
* **value**: string (Required)

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
* **options**: ContentKeyPolicyOption[] (Required)
* **policyId**: string (ReadOnly)

## ContentKeyPolicyOption
### Properties
* **configuration**: ContentKeyPolicyConfiguration (Required)
* **name**: string
* **policyOptionId**: string (ReadOnly)
* **restriction**: ContentKeyPolicyRestriction (Required)

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
* **offlineRentalConfiguration**: ContentKeyPolicyFairPlayOfflineRentalConfiguration
* **rentalAndLeaseKeyType**: 'DualExpiry' | 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required)
* **rentalDuration**: int (Required)

### #Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' (Required)
* **licenses**: ContentKeyPolicyPlayReadyLicense[] (Required)
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
* **offlineRentalConfiguration**: ContentKeyPolicyFairPlayOfflineRentalConfiguration
* **rentalAndLeaseKeyType**: 'DualExpiry' | 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required)
* **rentalDuration**: int (Required)

## ContentKeyPolicyFairPlayOfflineRentalConfiguration
### Properties
* **playbackDurationSeconds**: int (Required)
* **storageDurationSeconds**: int (Required)

## #Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' (Required)
* **licenses**: ContentKeyPolicyPlayReadyLicense[] (Required)
* **responseCustomData**: string

## ContentKeyPolicyPlayReadyLicense
### Properties
* **allowTestDevices**: bool (Required)
* **beginDate**: string
* **contentKeyLocation**: ContentKeyPolicyPlayReadyContentKeyLocation (Required)
* **contentType**: 'UltraVioletDownload' | 'UltraVioletStreaming' | 'Unknown' | 'Unspecified' (Required)
* **expirationDate**: string
* **gracePeriod**: string
* **licenseType**: 'NonPersistent' | 'Persistent' | 'Unknown' (Required)
* **playRight**: ContentKeyPolicyPlayReadyPlayRight
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
* **explicitAnalogTelevisionOutputRestriction**: ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction
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
* **alternateVerificationKeys**: ContentKeyPolicyRestrictionTokenKey[]
* **audience**: string (Required)
* **issuer**: string (Required)
* **openIdConnectDiscoveryDocument**: string
* **primaryVerificationKey**: ContentKeyPolicyRestrictionTokenKey (Required)
* **requiredClaims**: ContentKeyPolicyTokenClaim[]
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
* **alternateVerificationKeys**: ContentKeyPolicyRestrictionTokenKey[]
* **audience**: string (Required)
* **issuer**: string (Required)
* **openIdConnectDiscoveryDocument**: string
* **primaryVerificationKey**: ContentKeyPolicyRestrictionTokenKey (Required)
* **requiredClaims**: ContentKeyPolicyTokenClaim[]
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
* **crossSiteAccessPolicies**: CrossSiteAccessPolicies
* **description**: string
* **encoding**: LiveEventEncoding
* **hostnamePrefix**: string
* **input**: LiveEventInput (Required)
* **lastModified**: string (ReadOnly)
* **preview**: LiveEventPreview
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Allocating' | 'Deleting' | 'Running' | 'StandBy' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **streamOptions**: 'Default' | 'LowLatency'[]
* **transcriptions**: LiveEventTranscription[]
* **useStaticHostname**: bool

## CrossSiteAccessPolicies
### Properties
* **clientAccessPolicy**: string
* **crossDomainPolicy**: string

## LiveEventEncoding
### Properties
* **encodingType**: 'None' | 'Premium1080p' | 'Standard'
* **keyFrameInterval**: string
* **presetName**: string
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None'

## LiveEventInput
### Properties
* **accessControl**: LiveEventInputAccessControl
* **accessToken**: string
* **endpoints**: LiveEventEndpoint[]
* **keyFrameIntervalDuration**: string
* **streamingProtocol**: 'FragmentedMP4' | 'RTMP' (Required)

## LiveEventInputAccessControl
### Properties
* **ip**: IPAccessControl

## IPAccessControl
### Properties
* **allow**: IPRange[]

## IPRange
### Properties
* **address**: string
* **name**: string
* **subnetPrefixLength**: int

## LiveEventEndpoint
### Properties
* **protocol**: string
* **url**: string

## LiveEventPreview
### Properties
* **accessControl**: LiveEventPreviewAccessControl
* **alternativeMediaId**: string
* **endpoints**: LiveEventEndpoint[]
* **previewLocator**: string
* **streamingPolicyName**: string

## LiveEventPreviewAccessControl
### Properties
* **ip**: IPAccessControl

## LiveEventTranscription
### Properties
* **inputTrackSelection**: LiveEventInputTrackSelection[]
* **language**: string
* **outputTranscriptionTrack**: LiveEventOutputTranscriptionTrack

## LiveEventInputTrackSelection
### Properties
* **operation**: string
* **property**: string
* **value**: string

## LiveEventOutputTranscriptionTrack
### Properties
* **trackName**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## LiveOutputProperties
### Properties
* **archiveWindowLength**: string (Required)
* **assetName**: string (Required)
* **created**: string (ReadOnly)
* **description**: string
* **hls**: Hls
* **lastModified**: string (ReadOnly)
* **manifestName**: string
* **outputSnapTime**: int
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Running' (ReadOnly)

## Hls
### Properties
* **fragmentsPerTsSegment**: int

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded'

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Pending' | 'Rejected'

## StreamingEndpointProperties
### Properties
* **accessControl**: StreamingEndpointAccessControl
* **availabilitySetName**: string
* **cdnEnabled**: bool
* **cdnProfile**: string
* **cdnProvider**: string
* **created**: string (ReadOnly)
* **crossSiteAccessPolicies**: CrossSiteAccessPolicies
* **customHostNames**: string[]
* **description**: string
* **freeTrialEndTime**: string (ReadOnly)
* **hostName**: string (ReadOnly)
* **lastModified**: string (ReadOnly)
* **maxCacheAge**: int
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Deleting' | 'Running' | 'Scaling' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **scaleUnits**: int (Required)

## StreamingEndpointAccessControl
### Properties
* **akamai**: AkamaiAccessControl
* **ip**: IPAccessControl

## AkamaiAccessControl
### Properties
* **akamaiSignatureHeaderAuthenticationKeyList**: AkamaiSignatureHeaderAuthenticationKey[]

## AkamaiSignatureHeaderAuthenticationKey
### Properties
* **base64Key**: string
* **expiration**: string
* **identifier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## StreamingLocatorProperties
### Properties
* **alternativeMediaId**: string
* **assetName**: string (Required)
* **contentKeys**: StreamingLocatorContentKey[]
* **created**: string (ReadOnly)
* **defaultContentKeyPolicyName**: string
* **endTime**: string
* **filters**: string[]
* **startTime**: string
* **streamingLocatorId**: string
* **streamingPolicyName**: string (Required)

## StreamingLocatorContentKey
### Properties
* **id**: string (Required)
* **labelReferenceInStreamingPolicy**: string
* **policyName**: string (ReadOnly)
* **tracks**: TrackSelection[] (ReadOnly)
* **type**: 'CommonEncryptionCbcs' | 'CommonEncryptionCenc' | 'EnvelopeEncryption' (ReadOnly)
* **value**: string

## TrackSelection
### Properties
* **trackSelections**: TrackPropertyCondition[]

## TrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'Unknown' (Required)
* **property**: 'FourCC' | 'Unknown' (Required)
* **value**: string

## StreamingPolicyProperties
### Properties
* **commonEncryptionCbcs**: CommonEncryptionCbcs
* **commonEncryptionCenc**: CommonEncryptionCenc
* **created**: string (ReadOnly)
* **defaultContentKeyPolicyName**: string
* **envelopeEncryption**: EnvelopeEncryption
* **noEncryption**: NoEncryption

## CommonEncryptionCbcs
### Properties
* **clearTracks**: TrackSelection[]
* **contentKeys**: StreamingPolicyContentKeys
* **drm**: CbcsDrmConfiguration
* **enabledProtocols**: EnabledProtocols

## StreamingPolicyContentKeys
### Properties
* **defaultKey**: DefaultKey
* **keyToTrackMappings**: StreamingPolicyContentKey[]

## DefaultKey
### Properties
* **label**: string
* **policyName**: string

## StreamingPolicyContentKey
### Properties
* **label**: string
* **policyName**: string
* **tracks**: TrackSelection[]

## CbcsDrmConfiguration
### Properties
* **fairPlay**: StreamingPolicyFairPlayConfiguration
* **playReady**: StreamingPolicyPlayReadyConfiguration
* **widevine**: StreamingPolicyWidevineConfiguration

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
* **clearTracks**: TrackSelection[]
* **contentKeys**: StreamingPolicyContentKeys
* **drm**: CencDrmConfiguration
* **enabledProtocols**: EnabledProtocols

## CencDrmConfiguration
### Properties
* **playReady**: StreamingPolicyPlayReadyConfiguration
* **widevine**: StreamingPolicyWidevineConfiguration

## EnvelopeEncryption
### Properties
* **clearTracks**: TrackSelection[]
* **contentKeys**: StreamingPolicyContentKeys
* **customKeyAcquisitionUrlTemplate**: string
* **enabledProtocols**: EnabledProtocols

## NoEncryption
### Properties
* **enabledProtocols**: EnabledProtocols

## TransformProperties
### Properties
* **created**: string (ReadOnly)
* **description**: string
* **lastModified**: string (ReadOnly)
* **outputs**: TransformOutput[] (Required)

## TransformOutput
### Properties
* **onError**: 'ContinueJob' | 'StopProcessingJob'
* **preset**: Preset (Required)
* **relativePriority**: 'High' | 'Low' | 'Normal'

## Preset
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.AudioAnalyzerPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioAnalyzerPreset' (Required)
* **audioLanguage**: string
* **experimentalOptions**: Dictionary<string,String>
* **mode**: 'Basic' | 'Standard'

### #Microsoft.Media.BuiltInStandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required)
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'ContentAwareEncoding' | 'ContentAwareEncodingExperimental' | 'CopyAllBitrateNonInterleaved' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' | 'H264SingleBitrate1080p' | 'H264SingleBitrate720p' | 'H264SingleBitrateSD' (Required)

### #Microsoft.Media.FaceDetectorPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.FaceDetectorPreset' (Required)
* **experimentalOptions**: Dictionary<string,String>
* **resolution**: 'SourceResolution' | 'StandardDefinition'

### #Microsoft.Media.StandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required)
* **codecs**: Codec[] (Required)
* **filters**: Filters
* **formats**: Format[] (Required)


## #Microsoft.Media.AudioAnalyzerPreset
### Properties
* **@odata.type**: '#Microsoft.Media.AudioAnalyzerPreset' (Required)
* **audioLanguage**: string
* **experimentalOptions**: Dictionary<string,String>
* **mode**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## #Microsoft.Media.BuiltInStandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required)
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'ContentAwareEncoding' | 'ContentAwareEncodingExperimental' | 'CopyAllBitrateNonInterleaved' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' | 'H264SingleBitrate1080p' | 'H264SingleBitrate720p' | 'H264SingleBitrateSD' (Required)

## #Microsoft.Media.FaceDetectorPreset
### Properties
* **@odata.type**: '#Microsoft.Media.FaceDetectorPreset' (Required)
* **experimentalOptions**: Dictionary<string,String>
* **resolution**: 'SourceResolution' | 'StandardDefinition'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## #Microsoft.Media.StandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required)
* **codecs**: Codec[] (Required)
* **filters**: Filters
* **formats**: Format[] (Required)

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
* **syncMode**: 'Auto' | 'Cfr' | 'Passthrough' | 'Vfr'


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
* **syncMode**: 'Auto' | 'Cfr' | 'Passthrough' | 'Vfr'

## Filters
### Properties
* **crop**: Rectangle
* **deinterlace**: Deinterlace
* **overlays**: Overlay[]
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
* **inputLabel**: string (Required)
* **start**: string
### #Microsoft.Media.AudioOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required)

### #Microsoft.Media.VideoOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required)
* **cropRectangle**: Rectangle
* **opacity**: int
* **position**: Rectangle


## #Microsoft.Media.AudioOverlay
### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required)

## #Microsoft.Media.VideoOverlay
### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required)
* **cropRectangle**: Rectangle
* **opacity**: int
* **position**: Rectangle

## Format
* **Discriminator**: @odata.type
### Base Properties
* **filenamePattern**: string (Required)
### #Microsoft.Media.ImageFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.ImageFormat' (Required)

### #Microsoft.Media.MultiBitrateFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.MultiBitrateFormat' (Required)
* **outputFiles**: OutputFile[]


## #Microsoft.Media.ImageFormat
### Properties
* **@odata.type**: '#Microsoft.Media.ImageFormat' (Required)

## #Microsoft.Media.MultiBitrateFormat
### Properties
* **@odata.type**: '#Microsoft.Media.MultiBitrateFormat' (Required)
* **outputFiles**: OutputFile[]

## OutputFile
### Properties
* **labels**: string[] (Required)

## JobProperties
### Properties
* **correlationData**: Dictionary<string,String>
* **created**: string (ReadOnly)
* **description**: string
* **endTime**: string (ReadOnly)
* **input**: JobInput (Required)
* **lastModified**: string (ReadOnly)
* **outputs**: JobOutput[] (Required)
* **priority**: 'High' | 'Low' | 'Normal'
* **startTime**: string (ReadOnly)
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## JobInput
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.JobInputClip
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputClip' (Required)
* **end**: ClipTime
* **files**: string[]
* **label**: string
* **start**: ClipTime

### #Microsoft.Media.JobInputs
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required)
* **inputs**: JobInput[]


## #Microsoft.Media.JobInputClip
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputClip' (Required)
* **end**: ClipTime
* **files**: string[]
* **label**: string
* **start**: ClipTime

## ClipTime
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.AbsoluteClipTime
#### Properties
* **@odata.type**: '#Microsoft.Media.AbsoluteClipTime' (Required)
* **time**: string (Required)

### #Microsoft.Media.UtcClipTime
#### Properties
* **@odata.type**: '#Microsoft.Media.UtcClipTime' (Required)
* **time**: string (Required)


## #Microsoft.Media.AbsoluteClipTime
### Properties
* **@odata.type**: '#Microsoft.Media.AbsoluteClipTime' (Required)
* **time**: string (Required)

## #Microsoft.Media.UtcClipTime
### Properties
* **@odata.type**: '#Microsoft.Media.UtcClipTime' (Required)
* **time**: string (Required)

## #Microsoft.Media.JobInputs
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required)
* **inputs**: JobInput[]

## JobOutput
* **Discriminator**: @odata.type
### Base Properties
* **endTime**: string (ReadOnly)
* **error**: JobError (ReadOnly)
* **label**: string
* **progress**: int (ReadOnly)
* **startTime**: string (ReadOnly)
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly)
### #Microsoft.Media.JobOutputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required)
* **assetName**: string (Required)


## JobError
### Properties
* **category**: 'Configuration' | 'Content' | 'Download' | 'Service' | 'Upload' (ReadOnly)
* **code**: 'ConfigurationUnsupported' | 'ContentMalformed' | 'ContentUnsupported' | 'DownloadNotAccessible' | 'DownloadTransientError' | 'ServiceError' | 'ServiceTransientError' | 'UploadNotAccessible' | 'UploadTransientError' (ReadOnly)
* **details**: JobErrorDetail[] (ReadOnly)
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

