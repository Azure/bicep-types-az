# Microsoft.Media @ 2020-05-01

## Resource Microsoft.Media/mediaservices@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [MediaServiceIdentity](#mediaserviceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MediaServiceProperties](#mediaserviceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/accountFilters@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MediaFilterProperties](#mediafilterproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Media/mediaServices/accountFilters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/assets@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AssetProperties](#assetproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Media/mediaServices/assets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/assets/assetFilters@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MediaFilterProperties](#mediafilterproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Media/mediaServices/assets/assetFilters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/contentKeyPolicies@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContentKeyPolicyProperties](#contentkeypolicyproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Media/mediaServices/contentKeyPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LiveEventProperties](#liveeventproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LiveOutputProperties](#liveoutputproperties)
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/privateEndpointConnections@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Media/mediaservices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/streamingLocators@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingLocatorProperties](#streaminglocatorproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Media/mediaServices/streamingLocators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/streamingPolicies@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingPolicyProperties](#streamingpolicyproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Media/mediaServices/streamingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/transforms@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TransformProperties](#transformproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Media/mediaServices/transforms' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaServices/transforms/jobs@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobProperties](#jobproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Media/mediaServices/transforms/jobs' (ReadOnly, DeployTimeConstant)

## MediaServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## MediaServiceProperties
### Properties
* **encryption**: [AccountEncryption](#accountencryption)
* **mediaServiceId**: string (ReadOnly)
* **storageAccounts**: [StorageAccount](#storageaccount)[]
* **storageAuthentication**: 'ManagedIdentity' | 'System'

## AccountEncryption
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)
* **type**: 'CustomerKey' | 'SystemKey' (Required)

## KeyVaultProperties
### Properties
* **currentKeyIdentifier**: string (ReadOnly)
* **keyIdentifier**: string

## StorageAccount
### Properties
* **id**: string
* **type**: 'Primary' | 'Secondary' (Required)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MediaFilterProperties
### Properties
* **firstQuality**: [FirstQuality](#firstquality)
* **presentationTimeRange**: [PresentationTimeRange](#presentationtimerange)
* **tracks**: [FilterTrackSelection](#filtertrackselection)[]

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
* **trackSelections**: [FilterTrackPropertyCondition](#filtertrackpropertycondition)[] (Required)

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
* **offlineRentalConfiguration**: [ContentKeyPolicyFairPlayOfflineRentalConfiguration](#contentkeypolicyfairplayofflinerentalconfiguration)
* **rentalAndLeaseKeyType**: 'DualExpiry' | 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required)
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
* **offlineRentalConfiguration**: [ContentKeyPolicyFairPlayOfflineRentalConfiguration](#contentkeypolicyfairplayofflinerentalconfiguration)
* **rentalAndLeaseKeyType**: 'DualExpiry' | 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required)
* **rentalDuration**: int (Required)

## ContentKeyPolicyFairPlayOfflineRentalConfiguration
### Properties
* **playbackDurationSeconds**: int (Required)
* **storageDurationSeconds**: int (Required)

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
* **hostnamePrefix**: string
* **input**: [LiveEventInput](#liveeventinput) (Required)
* **lastModified**: string (ReadOnly)
* **preview**: [LiveEventPreview](#liveeventpreview)
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Allocating' | 'Deleting' | 'Running' | 'StandBy' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **streamOptions**: 'Default' | 'LowLatency'[]
* **transcriptions**: [LiveEventTranscription](#liveeventtranscription)[]
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
* **accessControl**: [LiveEventInputAccessControl](#liveeventinputaccesscontrol)
* **accessToken**: string
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]
* **keyFrameIntervalDuration**: string
* **streamingProtocol**: 'FragmentedMP4' | 'RTMP' (Required)

## LiveEventInputAccessControl
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

## LiveEventTranscription
### Properties
* **inputTrackSelection**: [LiveEventInputTrackSelection](#liveeventinputtrackselection)[]
* **language**: string
* **outputTranscriptionTrack**: [LiveEventOutputTranscriptionTrack](#liveeventoutputtranscriptiontrack)

## LiveEventInputTrackSelection
### Properties
* **operation**: string
* **property**: string
* **value**: string

## LiveEventOutputTranscriptionTrack
### Properties
* **trackName**: string (Required)

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

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

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
* **scaleUnits**: int (Required)

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
* **alternativeMediaId**: string
* **assetName**: string (Required)
* **contentKeys**: [StreamingLocatorContentKey](#streaminglocatorcontentkey)[]
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
* **tracks**: [TrackSelection](#trackselection)[] (ReadOnly)
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
### BuiltInStandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required)
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'ContentAwareEncoding' | 'ContentAwareEncodingExperimental' | 'CopyAllBitrateNonInterleaved' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' | 'H264SingleBitrate1080p' | 'H264SingleBitrate720p' | 'H264SingleBitrateSD' | 'H265AdaptiveStreaming' | 'H265ContentAwareEncoding' | 'H265SingleBitrate1080p' | 'H265SingleBitrate4K' | 'H265SingleBitrate720p' (Required)

### FaceDetectorPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.FaceDetectorPreset' (Required)
* **blurType**: 'Black' | 'Box' | 'High' | 'Low' | 'Med'
* **experimentalOptions**: [FaceDetectorPresetExperimentalOptions](#facedetectorpresetexperimentaloptions)
* **mode**: 'Analyze' | 'Combined' | 'Redact'
* **resolution**: 'SourceResolution' | 'StandardDefinition'

### StandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required)
* **codecs**: [Codec](#codec)[] (Required)
* **filters**: [Filters](#filters)
* **formats**: [Format](#format)[] (Required)

### VideoAnalyzerPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoAnalyzerPreset' (Required)
* **insightsToExtract**: 'AllInsights' | 'AudioInsightsOnly' | 'VideoInsightsOnly'


## BuiltInStandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required)
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'ContentAwareEncoding' | 'ContentAwareEncodingExperimental' | 'CopyAllBitrateNonInterleaved' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' | 'H264SingleBitrate1080p' | 'H264SingleBitrate720p' | 'H264SingleBitrateSD' | 'H265AdaptiveStreaming' | 'H265ContentAwareEncoding' | 'H265SingleBitrate1080p' | 'H265SingleBitrate4K' | 'H265SingleBitrate720p' (Required)

## FaceDetectorPreset
### Properties
* **@odata.type**: '#Microsoft.Media.FaceDetectorPreset' (Required)
* **blurType**: 'Black' | 'Box' | 'High' | 'Low' | 'Med'
* **experimentalOptions**: [FaceDetectorPresetExperimentalOptions](#facedetectorpresetexperimentaloptions)
* **mode**: 'Analyze' | 'Combined' | 'Redact'
* **resolution**: 'SourceResolution' | 'StandardDefinition'

## FaceDetectorPresetExperimentalOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required)
* **codecs**: [Codec](#codec)[] (Required)
* **filters**: [Filters](#filters)
* **formats**: [Format](#format)[] (Required)

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

### H265Video
#### Properties
* **@odata.type**: '#Microsoft.Media.H265Video' (Required)
* **complexity**: 'Balanced' | 'Quality' | 'Speed'
* **layers**: [H265Layer](#h265layer)[]
* **sceneChangeDetection**: bool

### JpgImage
#### Properties
* **@odata.type**: '#Microsoft.Media.JpgImage' (Required)
* **layers**: [JpgLayer](#jpglayer)[]
* **spriteColumn**: int

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
* **bitrate**: int (Required)
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

## H265Video
### Properties
* **@odata.type**: '#Microsoft.Media.H265Video' (Required)
* **complexity**: 'Balanced' | 'Quality' | 'Speed'
* **layers**: [H265Layer](#h265layer)[]
* **sceneChangeDetection**: bool

## H265Layer
### Properties
* **@odata.type**: string (Required)
* **adaptiveBFrame**: bool
* **bFrames**: int
* **bitrate**: int (Required)
* **bufferWindow**: string
* **frameRate**: string
* **height**: string
* **label**: string
* **level**: string
* **maxBitrate**: int
* **profile**: 'Auto' | 'Main'
* **referenceFrames**: int
* **slices**: int
* **width**: string

## JpgImage
### Properties
* **@odata.type**: '#Microsoft.Media.JpgImage' (Required)
* **layers**: [JpgLayer](#jpglayer)[]
* **spriteColumn**: int

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
* **inputLabel**: string (Required)
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
* **filenamePattern**: string (Required)
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
* **insightsToExtract**: 'AllInsights' | 'AudioInsightsOnly' | 'VideoInsightsOnly'

## JobProperties
### Properties
* **correlationData**: [JobPropertiesCorrelationData](#jobpropertiescorrelationdata)
* **created**: string (ReadOnly)
* **description**: string
* **endTime**: string (ReadOnly)
* **input**: [JobInput](#jobinput) (Required)
* **lastModified**: string (ReadOnly)
* **outputs**: [JobOutput](#joboutput)[] (Required)
* **priority**: 'High' | 'Low' | 'Normal'
* **startTime**: string (ReadOnly)
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly)

## JobPropertiesCorrelationData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobInput
* **Discriminator**: @odata.type

### Base Properties
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

### JobInputSequence
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputSequence' (Required)
* **inputs**: [JobInputClip](#jobinputclip)[]


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

## JobInputSequence
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputSequence' (Required)
* **inputs**: [JobInputClip](#jobinputclip)[]

## JobInputClip
* **Discriminator**: @odata.type

### Base Properties
* **end**: [ClipTime](#cliptime)
* **files**: string[]
* **inputDefinitions**: [InputDefinition](#inputdefinition)[]
* **label**: string
* **start**: [ClipTime](#cliptime)
### JobInputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputAsset' (Required)
* **assetName**: string (Required)

### JobInputHttp
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputHttp' (Required)
* **baseUri**: string


## ClipTime
* **Discriminator**: @odata.type

### Base Properties
### AbsoluteClipTime
#### Properties
* **@odata.type**: '#Microsoft.Media.AbsoluteClipTime' (Required)
* **time**: string (Required)

### UtcClipTime
#### Properties
* **@odata.type**: '#Microsoft.Media.UtcClipTime' (Required)
* **time**: string (Required)


## AbsoluteClipTime
### Properties
* **@odata.type**: '#Microsoft.Media.AbsoluteClipTime' (Required)
* **time**: string (Required)

## UtcClipTime
### Properties
* **@odata.type**: '#Microsoft.Media.UtcClipTime' (Required)
* **time**: string (Required)

## InputDefinition
* **Discriminator**: @odata.type

### Base Properties
* **includedTracks**: [TrackDescriptor](#trackdescriptor)[]
### FromAllInputFile
#### Properties
* **@odata.type**: '#Microsoft.Media.FromAllInputFile' (Required)

### FromEachInputFile
#### Properties
* **@odata.type**: '#Microsoft.Media.FromEachInputFile' (Required)

### InputFile
#### Properties
* **@odata.type**: '#Microsoft.Media.InputFile' (Required)
* **filename**: string


## TrackDescriptor
* **Discriminator**: @odata.type

### Base Properties
### SelectAudioTrackByAttribute
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectAudioTrackByAttribute' (Required)
* **attribute**: 'Bitrate' | 'Language' (Required)
* **filter**: 'All' | 'Bottom' | 'Top' | 'ValueEquals' (Required)
* **filterValue**: string

### SelectAudioTrackById
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectAudioTrackById' (Required)
* **trackId**: int (Required)

### SelectVideoTrackByAttribute
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectVideoTrackByAttribute' (Required)
* **attribute**: 'Bitrate' | 'Language' (Required)
* **filter**: 'All' | 'Bottom' | 'Top' | 'ValueEquals' (Required)
* **filterValue**: string

### SelectVideoTrackById
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectVideoTrackById' (Required)
* **trackId**: int (Required)


## SelectAudioTrackByAttribute
### Properties
* **@odata.type**: '#Microsoft.Media.SelectAudioTrackByAttribute' (Required)
* **attribute**: 'Bitrate' | 'Language' (Required)
* **filter**: 'All' | 'Bottom' | 'Top' | 'ValueEquals' (Required)
* **filterValue**: string

## SelectAudioTrackById
### Properties
* **@odata.type**: '#Microsoft.Media.SelectAudioTrackById' (Required)
* **trackId**: int (Required)

## SelectVideoTrackByAttribute
### Properties
* **@odata.type**: '#Microsoft.Media.SelectVideoTrackByAttribute' (Required)
* **attribute**: 'Bitrate' | 'Language' (Required)
* **filter**: 'All' | 'Bottom' | 'Top' | 'ValueEquals' (Required)
* **filterValue**: string

## SelectVideoTrackById
### Properties
* **@odata.type**: '#Microsoft.Media.SelectVideoTrackById' (Required)
* **trackId**: int (Required)

## FromAllInputFile
### Properties
* **@odata.type**: '#Microsoft.Media.FromAllInputFile' (Required)

## FromEachInputFile
### Properties
* **@odata.type**: '#Microsoft.Media.FromEachInputFile' (Required)

## InputFile
### Properties
* **@odata.type**: '#Microsoft.Media.InputFile' (Required)
* **filename**: string

## JobOutput
* **Discriminator**: @odata.type

### Base Properties
* **endTime**: string (ReadOnly)
* **error**: [JobError](#joberror) (ReadOnly)
* **label**: string
* **progress**: int (ReadOnly)
* **startTime**: string (ReadOnly)
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

