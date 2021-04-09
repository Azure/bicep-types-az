# Microsoft.Media @ 2018-07-01

## Resource Microsoft.Media/mediaservices@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties): Properties of the Media Services account.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
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
* **properties**: [AssetProperties](#assetproperties): The Asset properties.
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
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveOutputProperties](#liveoutputproperties): The JSON object that contains the properties required to create a Live Output.
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties): The StreamingEndpoint properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
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
* **properties**: [TransformProperties](#transformproperties): A Transform.
* **type**: 'Microsoft.Media/mediaServices/transforms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/transforms/jobs@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): Properties of the Job.
* **type**: 'Microsoft.Media/mediaServices/transforms/jobs' (ReadOnly, DeployTimeConstant): The resource type

## MediaServiceProperties
### Properties
* **mediaServiceId**: string (ReadOnly): The Media Services account ID.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.

## StorageAccount
### Properties
* **id**: string: The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
* **type**: 'Primary' | 'Secondary' (Required): The type of the storage account.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MediaFilterProperties
### Properties
* **firstQuality**: [FirstQuality](#firstquality): Filter First Quality
* **presentationTimeRange**: [PresentationTimeRange](#presentationtimerange): The presentation time range, this is asset related and not recommended for Account Filter.
* **tracks**: [FilterTrackSelection](#filtertrackselection)[]: The tracks selection conditions.

## FirstQuality
### Properties
* **bitrate**: int (Required): The first quality bitrate.

## PresentationTimeRange
### Properties
* **endTimestamp**: int: The absolute end time boundary.
* **forceEndTimestamp**: bool: The indicator of forcing existing of end time stamp.
* **liveBackoffDuration**: int: The relative to end right edge.
* **presentationWindowDuration**: int: The relative to end sliding window.
* **startTimestamp**: int: The absolute start time boundary.
* **timescale**: int: The time scale of time stamps.

## FilterTrackSelection
### Properties
* **trackSelections**: [FilterTrackPropertyCondition](#filtertrackpropertycondition)[] (Required): The track selections.

## FilterTrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'NotEqual' (Required): The track property condition operation.
* **property**: 'Bitrate' | 'FourCC' | 'Language' | 'Name' | 'Type' | 'Unknown' (Required): The track property type.
* **value**: string (Required): The track property value.

## AssetProperties
### Properties
* **alternateId**: string: The alternate ID of the Asset.
* **assetId**: string (ReadOnly): The Asset ID.
* **container**: string: The name of the asset blob container.
* **created**: string (ReadOnly): The creation date of the Asset.
* **description**: string: The Asset description.
* **lastModified**: string (ReadOnly): The last modified date of the Asset.
* **storageAccountName**: string: The name of the storage account.
* **storageEncryptionFormat**: 'MediaStorageClientEncryption' | 'None' (ReadOnly): The Asset encryption format. One of None or MediaStorageEncryption.

## ContentKeyPolicyProperties
### Properties
* **created**: string (ReadOnly): The creation date of the Policy
* **description**: string: A description for the Policy.
* **lastModified**: string (ReadOnly): The last modified date of the Policy
* **options**: [ContentKeyPolicyOption](#contentkeypolicyoption)[] (Required): The Key Policy options.
* **policyId**: string (ReadOnly): The legacy Policy ID.

## ContentKeyPolicyOption
### Properties
* **configuration**: [ContentKeyPolicyConfiguration](#contentkeypolicyconfiguration) (Required): Base class for Content Key Policy configuration. A derived class must be used to create a configuration.
* **name**: string: The Policy Option description.
* **policyOptionId**: string (ReadOnly): The legacy Policy Option ID.
* **restriction**: [ContentKeyPolicyRestriction](#contentkeypolicyrestriction) (Required): Base class for Content Key Policy restrictions. A derived class must be used to create a restriction.

## ContentKeyPolicyConfiguration
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.ContentKeyPolicyClearKeyConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration' (Required): Represents a configuration for non-DRM keys.

### #Microsoft.Media.ContentKeyPolicyFairPlayConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration' (Required): Specifies a configuration for FairPlay licenses.
* **ask**: array (Required): The key that must be used as FairPlay Application Secret key.
* **fairPlayPfx**: string (Required): The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
* **fairPlayPfxPassword**: string (Required): The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
* **offlineRentalConfiguration**: [ContentKeyPolicyFairPlayOfflineRentalConfiguration](#contentkeypolicyfairplayofflinerentalconfiguration)
* **rentalAndLeaseKeyType**: 'DualExpiry' | 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required): The rental and lease key type.
* **rentalDuration**: int (Required): The rental duration. Must be greater than or equal to 0.

### #Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' (Required): Specifies a configuration for PlayReady licenses.
* **licenses**: [ContentKeyPolicyPlayReadyLicense](#contentkeypolicyplayreadylicense)[] (Required): The PlayReady licenses.
* **responseCustomData**: string: The custom response data.

### #Microsoft.Media.ContentKeyPolicyUnknownConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration' (Required): Represents a ContentKeyPolicyConfiguration that is unavailable in the current API version.

### #Microsoft.Media.ContentKeyPolicyWidevineConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration' (Required): Specifies a configuration for Widevine licenses.
* **widevineTemplate**: string (Required): The Widevine template.


## #Microsoft.Media.ContentKeyPolicyClearKeyConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration' (Required): Represents a configuration for non-DRM keys.

## #Microsoft.Media.ContentKeyPolicyFairPlayConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration' (Required): Specifies a configuration for FairPlay licenses.
* **ask**: array (Required): The key that must be used as FairPlay Application Secret key.
* **fairPlayPfx**: string (Required): The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
* **fairPlayPfxPassword**: string (Required): The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
* **offlineRentalConfiguration**: [ContentKeyPolicyFairPlayOfflineRentalConfiguration](#contentkeypolicyfairplayofflinerentalconfiguration)
* **rentalAndLeaseKeyType**: 'DualExpiry' | 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required): The rental and lease key type.
* **rentalDuration**: int (Required): The rental duration. Must be greater than or equal to 0.

## ContentKeyPolicyFairPlayOfflineRentalConfiguration
### Properties
* **playbackDurationSeconds**: int (Required): Playback duration
* **storageDurationSeconds**: int (Required): Storage duration

## #Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' (Required): Specifies a configuration for PlayReady licenses.
* **licenses**: [ContentKeyPolicyPlayReadyLicense](#contentkeypolicyplayreadylicense)[] (Required): The PlayReady licenses.
* **responseCustomData**: string: The custom response data.

## ContentKeyPolicyPlayReadyLicense
### Properties
* **allowTestDevices**: bool (Required): A flag indicating whether test devices can use the license.
* **beginDate**: string: The begin date of license
* **contentKeyLocation**: [ContentKeyPolicyPlayReadyContentKeyLocation](#contentkeypolicyplayreadycontentkeylocation) (Required): Base class for content key ID location. A derived class must be used to represent the location.
* **contentType**: 'UltraVioletDownload' | 'UltraVioletStreaming' | 'Unknown' | 'Unspecified' (Required): The PlayReady content type.
* **expirationDate**: string: The expiration date of license.
* **gracePeriod**: string: The grace period of license.
* **licenseType**: 'NonPersistent' | 'Persistent' | 'Unknown' (Required): The license type.
* **playRight**: [ContentKeyPolicyPlayReadyPlayRight](#contentkeypolicyplayreadyplayright): Configures the Play Right in the PlayReady license.
* **relativeBeginDate**: string: The relative begin date of license.
* **relativeExpirationDate**: string: The relative expiration date of license.

## ContentKeyPolicyPlayReadyContentKeyLocation
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader' (Required): Specifies that the content key ID is in the PlayReady header.

### #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier' (Required): Specifies that the content key ID is specified in the PlayReady configuration.
* **keyId**: string (Required): The content key ID.


## #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader' (Required): Specifies that the content key ID is in the PlayReady header.

## #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier' (Required): Specifies that the content key ID is specified in the PlayReady configuration.
* **keyId**: string (Required): The content key ID.

## ContentKeyPolicyPlayReadyPlayRight
### Properties
* **agcAndColorStripeRestriction**: int: Configures Automatic Gain Control (AGC) and Color Stripe in the license. Must be between 0 and 3 inclusive.
* **allowPassingVideoContentToUnknownOutput**: 'Allowed' | 'AllowedWithVideoConstriction' | 'NotAllowed' | 'Unknown' (Required): Configures Unknown output handling settings of the license.
* **analogVideoOpl**: int: Specifies the output protection level for compressed digital audio.
* **compressedDigitalAudioOpl**: int: Specifies the output protection level for compressed digital audio.
* **compressedDigitalVideoOpl**: int: Specifies the output protection level for compressed digital video.
* **digitalVideoOnlyContentRestriction**: bool (Required): Enables the Image Constraint For Analog Component Video Restriction in the license.
* **explicitAnalogTelevisionOutputRestriction**: [ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction](#contentkeypolicyplayreadyexplicitanalogtelevisionrestriction): Configures the Explicit Analog Television Output Restriction control bits. For further details see the PlayReady Compliance Rules.
* **firstPlayExpiration**: string: The amount of time that the license is valid after the license is first used to play content.
* **imageConstraintForAnalogComponentVideoRestriction**: bool (Required): Enables the Image Constraint For Analog Component Video Restriction in the license.
* **imageConstraintForAnalogComputerMonitorRestriction**: bool (Required): Enables the Image Constraint For Analog Component Video Restriction in the license.
* **scmsRestriction**: int: Configures the Serial Copy Management System (SCMS) in the license. Must be between 0 and 3 inclusive.
* **uncompressedDigitalAudioOpl**: int: Specifies the output protection level for uncompressed digital audio.
* **uncompressedDigitalVideoOpl**: int: Specifies the output protection level for uncompressed digital video.

## ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction
### Properties
* **bestEffort**: bool (Required): Indicates whether this restriction is enforced on a Best Effort basis.
* **configurationData**: int (Required): Configures the restriction control bits. Must be between 0 and 3 inclusive.

## #Microsoft.Media.ContentKeyPolicyUnknownConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration' (Required): Represents a ContentKeyPolicyConfiguration that is unavailable in the current API version.

## #Microsoft.Media.ContentKeyPolicyWidevineConfiguration
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration' (Required): Specifies a configuration for Widevine licenses.
* **widevineTemplate**: string (Required): The Widevine template.

## ContentKeyPolicyRestriction
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.ContentKeyPolicyOpenRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyOpenRestriction' (Required): Represents an open restriction. License or key will be delivered on every request.

### #Microsoft.Media.ContentKeyPolicyTokenRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyTokenRestriction' (Required): Represents a token restriction. Provided token must match these requirements for successful license or key delivery.
* **alternateVerificationKeys**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey)[]: A list of alternative verification keys.
* **audience**: string (Required): The audience for the token.
* **issuer**: string (Required): The token issuer.
* **openIdConnectDiscoveryDocument**: string: The OpenID connect discovery document.
* **primaryVerificationKey**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey) (Required): Base class for Content Key Policy key for token validation. A derived class must be used to create a token key.
* **requiredClaims**: [ContentKeyPolicyTokenClaim](#contentkeypolicytokenclaim)[]: A list of required token claims.
* **restrictionTokenType**: 'Jwt' | 'Swt' | 'Unknown' (Required): The type of token.

### #Microsoft.Media.ContentKeyPolicyUnknownRestriction
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownRestriction' (Required): Represents a ContentKeyPolicyRestriction that is unavailable in the current API version.


## #Microsoft.Media.ContentKeyPolicyOpenRestriction
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyOpenRestriction' (Required): Represents an open restriction. License or key will be delivered on every request.

## #Microsoft.Media.ContentKeyPolicyTokenRestriction
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyTokenRestriction' (Required): Represents a token restriction. Provided token must match these requirements for successful license or key delivery.
* **alternateVerificationKeys**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey)[]: A list of alternative verification keys.
* **audience**: string (Required): The audience for the token.
* **issuer**: string (Required): The token issuer.
* **openIdConnectDiscoveryDocument**: string: The OpenID connect discovery document.
* **primaryVerificationKey**: [ContentKeyPolicyRestrictionTokenKey](#contentkeypolicyrestrictiontokenkey) (Required): Base class for Content Key Policy key for token validation. A derived class must be used to create a token key.
* **requiredClaims**: [ContentKeyPolicyTokenClaim](#contentkeypolicytokenclaim)[]: A list of required token claims.
* **restrictionTokenType**: 'Jwt' | 'Swt' | 'Unknown' (Required): The type of token.

## ContentKeyPolicyRestrictionTokenKey
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.ContentKeyPolicyRsaTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey' (Required): Specifies a RSA key for token validation
* **exponent**: array (Required): The RSA Parameter exponent
* **modulus**: array (Required): The RSA Parameter modulus

### #Microsoft.Media.ContentKeyPolicySymmetricTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey' (Required): Specifies a symmetric key for token validation.
* **keyValue**: array (Required): The key value of the key

### #Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey
#### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey' (Required): Specifies a certificate for token validation.
* **rawBody**: array (Required): The raw data field of a certificate in PKCS 12 format (X509Certificate2 in .NET)


## #Microsoft.Media.ContentKeyPolicyRsaTokenKey
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey' (Required): Specifies a RSA key for token validation
* **exponent**: array (Required): The RSA Parameter exponent
* **modulus**: array (Required): The RSA Parameter modulus

## #Microsoft.Media.ContentKeyPolicySymmetricTokenKey
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey' (Required): Specifies a symmetric key for token validation.
* **keyValue**: array (Required): The key value of the key

## #Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey' (Required): Specifies a certificate for token validation.
* **rawBody**: array (Required): The raw data field of a certificate in PKCS 12 format (X509Certificate2 in .NET)

## ContentKeyPolicyTokenClaim
### Properties
* **claimType**: string: Token claim type.
* **claimValue**: string: Token claim value.

## #Microsoft.Media.ContentKeyPolicyUnknownRestriction
### Properties
* **@odata.type**: '#Microsoft.Media.ContentKeyPolicyUnknownRestriction' (Required): Represents a ContentKeyPolicyRestriction that is unavailable in the current API version.

## LiveEventProperties
### Properties
* **created**: string (ReadOnly): The exact time the Live Event was created.
* **crossSiteAccessPolicies**: [CrossSiteAccessPolicies](#crosssiteaccesspolicies): The client access policy.
* **description**: string: The Live Event description.
* **encoding**: [LiveEventEncoding](#liveeventencoding): The Live Event encoding.
* **input**: [LiveEventInput](#liveeventinput) (Required): The Live Event input.
* **lastModified**: string (ReadOnly): The exact time the Live Event was last modified.
* **preview**: [LiveEventPreview](#liveeventpreview): The Live Event preview.
* **provisioningState**: string (ReadOnly): The provisioning state of the Live Event.
* **resourceState**: 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): The resource state of the Live Event.
* **streamOptions**: 'Default' | 'LowLatency'[]: The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated.
* **vanityUrl**: bool: Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated.

## CrossSiteAccessPolicies
### Properties
* **clientAccessPolicy**: string: The content of clientaccesspolicy.xml used by Silverlight.
* **crossDomainPolicy**: string: The content of crossdomain.xml used by Silverlight.

## LiveEventEncoding
### Properties
* **encodingType**: 'Basic' | 'None' | 'Premium1080p' | 'Standard': The encoding type for Live Event.  This value is specified at creation time and cannot be updated.
* **presetName**: string: The encoding preset name.  This value is specified at creation time and cannot be updated.

## LiveEventInput
### Properties
* **accessControl**: [LiveEventInputAccessControl](#liveeventinputaccesscontrol): The IP access control for Live Event Input.
* **accessToken**: string: A unique identifier for a stream.  This can be specified at creation time but cannot be updated.  If omitted, the service will generate a unique value.
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]: The input endpoints for the Live Event.
* **keyFrameIntervalDuration**: string: ISO 8601 timespan duration of the key frame interval duration.
* **streamingProtocol**: 'FragmentedMP4' | 'RTMP' (Required): The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated.

## LiveEventInputAccessControl
### Properties
* **ip**: [IPAccessControl](#ipaccesscontrol): The IP access control.

## IPAccessControl
### Properties
* **allow**: [IPRange](#iprange)[]: The IP allow list.

## IPRange
### Properties
* **address**: string: The IP address.
* **name**: string: The friendly name for the IP address range.
* **subnetPrefixLength**: int: The subnet mask prefix length (see CIDR notation).

## LiveEventEndpoint
### Properties
* **protocol**: string: The endpoint protocol.
* **url**: string: The endpoint URL.

## LiveEventPreview
### Properties
* **accessControl**: [LiveEventPreviewAccessControl](#liveeventpreviewaccesscontrol): The IP access control for Live Event preview.
* **alternativeMediaId**: string: An Alternative Media Identifier associated with the StreamingLocator created for the preview.  This value is specified at creation time and cannot be updated.  The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]: The endpoints for preview.
* **previewLocator**: string: The identifier of the preview locator in Guid format.  Specifying this at creation time allows the caller to know the preview locator url before the event is created.  If omitted, the service will generate a random identifier.  This value cannot be updated once the live event is created.
* **streamingPolicyName**: string: The name of streaming policy used for the LiveEvent preview.  This value is specified at creation time and cannot be updated.

## LiveEventPreviewAccessControl
### Properties
* **ip**: [IPAccessControl](#ipaccesscontrol): The IP access control.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **resourceState**: 'Creating' | 'Deleting' | 'Running' (ReadOnly): The resource state of the Live Output.

## Hls
### Properties
* **fragmentsPerTsSegment**: int: The amount of fragments per HTTP Live Streaming (HLS) segment.

## StreamingEndpointProperties
### Properties
* **accessControl**: [StreamingEndpointAccessControl](#streamingendpointaccesscontrol): StreamingEndpoint access control definition.
* **availabilitySetName**: string: The name of the AvailabilitySet used with this StreamingEndpoint for high availability streaming.  This value can only be set at creation time.
* **cdnEnabled**: bool: The CDN enabled flag.
* **cdnProfile**: string: The CDN profile name.
* **cdnProvider**: string: The CDN provider name.
* **created**: string (ReadOnly): The exact time the StreamingEndpoint was created.
* **crossSiteAccessPolicies**: [CrossSiteAccessPolicies](#crosssiteaccesspolicies): The client access policy.
* **customHostNames**: string[]: The custom host names of the StreamingEndpoint
* **description**: string: The StreamingEndpoint description.
* **freeTrialEndTime**: string (ReadOnly): The free trial expiration time.
* **hostName**: string (ReadOnly): The StreamingEndpoint host name.
* **lastModified**: string (ReadOnly): The exact time the StreamingEndpoint was last modified.
* **maxCacheAge**: int: Max cache age
* **provisioningState**: string (ReadOnly): The provisioning state of the StreamingEndpoint.
* **resourceState**: 'Deleting' | 'Running' | 'Scaling' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): The resource state of the StreamingEndpoint.
* **scaleUnits**: int (Required): The number of scale units.  Use the Scale operation to adjust this value.

## StreamingEndpointAccessControl
### Properties
* **akamai**: [AkamaiAccessControl](#akamaiaccesscontrol): Akamai access control
* **ip**: [IPAccessControl](#ipaccesscontrol): The IP access control.

## AkamaiAccessControl
### Properties
* **akamaiSignatureHeaderAuthenticationKeyList**: [AkamaiSignatureHeaderAuthenticationKey](#akamaisignatureheaderauthenticationkey)[]: authentication key list

## AkamaiSignatureHeaderAuthenticationKey
### Properties
* **base64Key**: string: authentication key
* **expiration**: string: The expiration time of the authentication key.
* **identifier**: string: identifier of the key

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## StreamingLocatorContentKey
### Properties
* **id**: string (Required): ID of Content Key
* **labelReferenceInStreamingPolicy**: string: Label of Content Key as specified in the Streaming Policy
* **policyName**: string (ReadOnly): ContentKeyPolicy used by Content Key
* **tracks**: [TrackSelection](#trackselection)[] (ReadOnly): Tracks which use this Content Key
* **type**: 'CommonEncryptionCbcs' | 'CommonEncryptionCenc' | 'EnvelopeEncryption' (ReadOnly): Encryption type of Content Key.
* **value**: string: Value of Content Key

## TrackSelection
### Properties
* **trackSelections**: [TrackPropertyCondition](#trackpropertycondition)[]: TrackSelections is a track property condition list which can specify track(s)

## TrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'Unknown' (Required): Track property condition operation.
* **property**: 'FourCC' | 'Unknown' (Required): Track property type.
* **value**: string: Track property value

## StreamingPolicyProperties
### Properties
* **commonEncryptionCbcs**: [CommonEncryptionCbcs](#commonencryptioncbcs): Class for CommonEncryptionCbcs encryption scheme
* **commonEncryptionCenc**: [CommonEncryptionCenc](#commonencryptioncenc): Class for envelope encryption scheme
* **created**: string (ReadOnly): Creation time of Streaming Policy
* **defaultContentKeyPolicyName**: string: Default ContentKey used by current Streaming Policy
* **envelopeEncryption**: [EnvelopeEncryption](#envelopeencryption): Class for EnvelopeEncryption encryption scheme
* **noEncryption**: [NoEncryption](#noencryption): Class for NoEncryption scheme

## CommonEncryptionCbcs
### Properties
* **clearTracks**: [TrackSelection](#trackselection)[]: Representing which tracks should not be encrypted
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys): Class to specify properties of all content keys in Streaming Policy
* **drm**: [CbcsDrmConfiguration](#cbcsdrmconfiguration): Class to specify DRM configurations of CommonEncryptionCbcs scheme in Streaming Policy
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Class to specify which protocols are enabled

## StreamingPolicyContentKeys
### Properties
* **defaultKey**: [DefaultKey](#defaultkey): Class to specify properties of default content key for each encryption scheme
* **keyToTrackMappings**: [StreamingPolicyContentKey](#streamingpolicycontentkey)[]: Representing tracks needs separate content key

## DefaultKey
### Properties
* **label**: string: Label can be used to specify Content Key when creating a Streaming Locator
* **policyName**: string: Policy used by Default Key

## StreamingPolicyContentKey
### Properties
* **label**: string: Label can be used to specify Content Key when creating a Streaming Locator
* **policyName**: string: Policy used by Content Key
* **tracks**: [TrackSelection](#trackselection)[]: Tracks which use this content key

## CbcsDrmConfiguration
### Properties
* **fairPlay**: [StreamingPolicyFairPlayConfiguration](#streamingpolicyfairplayconfiguration): Class to specify configurations of FairPlay in Streaming Policy
* **playReady**: [StreamingPolicyPlayReadyConfiguration](#streamingpolicyplayreadyconfiguration): Class to specify configurations of PlayReady in Streaming Policy
* **widevine**: [StreamingPolicyWidevineConfiguration](#streamingpolicywidevineconfiguration): Class to specify configurations of Widevine in Streaming Policy

## StreamingPolicyFairPlayConfiguration
### Properties
* **allowPersistentLicense**: bool (Required): All license to be persistent or not
* **customLicenseAcquisitionUrlTemplate**: string: Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.

## StreamingPolicyPlayReadyConfiguration
### Properties
* **customLicenseAcquisitionUrlTemplate**: string: Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
* **playReadyCustomAttributes**: string: Custom attributes for PlayReady

## StreamingPolicyWidevineConfiguration
### Properties
* **customLicenseAcquisitionUrlTemplate**: string: Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.

## EnabledProtocols
### Properties
* **dash**: bool (Required): Enable DASH protocol or not
* **download**: bool (Required): Enable Download protocol or not
* **hls**: bool (Required): Enable HLS protocol or not
* **smoothStreaming**: bool (Required): Enable SmoothStreaming protocol or not

## CommonEncryptionCenc
### Properties
* **clearTracks**: [TrackSelection](#trackselection)[]: Representing which tracks should not be encrypted
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys): Class to specify properties of all content keys in Streaming Policy
* **drm**: [CencDrmConfiguration](#cencdrmconfiguration): Class to specify DRM configurations of CommonEncryptionCenc scheme in Streaming Policy
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Class to specify which protocols are enabled

## CencDrmConfiguration
### Properties
* **playReady**: [StreamingPolicyPlayReadyConfiguration](#streamingpolicyplayreadyconfiguration): Class to specify configurations of PlayReady in Streaming Policy
* **widevine**: [StreamingPolicyWidevineConfiguration](#streamingpolicywidevineconfiguration): Class to specify configurations of Widevine in Streaming Policy

## EnvelopeEncryption
### Properties
* **clearTracks**: [TrackSelection](#trackselection)[]: Representing which tracks should not be encrypted
* **contentKeys**: [StreamingPolicyContentKeys](#streamingpolicycontentkeys): Class to specify properties of all content keys in Streaming Policy
* **customKeyAcquisitionUrlTemplate**: string: Template for the URL of the custom service delivering keys to end user players.  Not required when using Azure Media Services for issuing keys.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Class to specify which protocols are enabled

## NoEncryption
### Properties
* **enabledProtocols**: [EnabledProtocols](#enabledprotocols): Class to specify which protocols are enabled

## TransformProperties
### Properties
* **created**: string (ReadOnly): The UTC date and time when the Transform was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **description**: string: An optional verbose description of the Transform.
* **lastModified**: string (ReadOnly): The UTC date and time when the Transform was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **outputs**: [TransformOutput](#transformoutput)[] (Required): An array of one or more TransformOutputs that the Transform should generate.

## TransformOutput
### Properties
* **onError**: 'ContinueJob' | 'StopProcessingJob': A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'.
* **preset**: [Preset](#preset) (Required): Base type for all Presets, which define the recipe or instructions on how the input media files should be processed.
* **relativePriority**: 'High' | 'Low' | 'Normal': Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal.

## Preset
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.AudioAnalyzerPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioAnalyzerPreset' (Required): The Audio Analyzer preset applies a pre-defined set of AI-based analysis operations, including speech transcription. Currently, the preset supports processing of content with a single audio track.
* **audioLanguage**: string: The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here: https://go.microsoft.com/fwlink/?linkid=2109463
* **experimentalOptions**: [Dictionary<string,String>](#dictionarystringstring): Dictionary containing key value pairs for parameters not exposed in the preset itself

### #Microsoft.Media.BuiltInStandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required): Describes a built-in preset for encoding the input video with the Standard Encoder.
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'ContentAwareEncoding' | 'ContentAwareEncodingExperimental' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' | 'H264SingleBitrate1080p' | 'H264SingleBitrate720p' | 'H264SingleBitrateSD' (Required): The built-in preset to be used for encoding videos.

### #Microsoft.Media.FaceDetectorPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.FaceDetectorPreset' (Required): Describes all the settings to be used when analyzing a video in order to detect all the faces present.
* **experimentalOptions**: [Dictionary<string,String>](#dictionarystringstring): Dictionary containing key value pairs for parameters not exposed in the preset itself
* **resolution**: 'SourceResolution' | 'StandardDefinition': Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected.

### #Microsoft.Media.StandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required): Describes all the settings to be used when encoding the input video with the Standard Encoder.
* **codecs**: [Codec](#codec)[] (Required): The list of codecs to be used when encoding the input video.
* **filters**: [Filters](#filters): Describes all the filtering operations, such as de-interlacing, rotation etc. that are to be applied to the input media before encoding.
* **formats**: [Format](#format)[] (Required): The list of outputs to be produced by the encoder.


## #Microsoft.Media.AudioAnalyzerPreset
### Properties
* **@odata.type**: '#Microsoft.Media.AudioAnalyzerPreset' (Required): The Audio Analyzer preset applies a pre-defined set of AI-based analysis operations, including speech transcription. Currently, the preset supports processing of content with a single audio track.
* **audioLanguage**: string: The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here: https://go.microsoft.com/fwlink/?linkid=2109463
* **experimentalOptions**: [Dictionary<string,String>](#dictionarystringstring): Dictionary containing key value pairs for parameters not exposed in the preset itself

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## #Microsoft.Media.BuiltInStandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required): Describes a built-in preset for encoding the input video with the Standard Encoder.
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'ContentAwareEncoding' | 'ContentAwareEncodingExperimental' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' | 'H264SingleBitrate1080p' | 'H264SingleBitrate720p' | 'H264SingleBitrateSD' (Required): The built-in preset to be used for encoding videos.

## #Microsoft.Media.FaceDetectorPreset
### Properties
* **@odata.type**: '#Microsoft.Media.FaceDetectorPreset' (Required): Describes all the settings to be used when analyzing a video in order to detect all the faces present.
* **experimentalOptions**: [Dictionary<string,String>](#dictionarystringstring): Dictionary containing key value pairs for parameters not exposed in the preset itself
* **resolution**: 'SourceResolution' | 'StandardDefinition': Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## #Microsoft.Media.StandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required): Describes all the settings to be used when encoding the input video with the Standard Encoder.
* **codecs**: [Codec](#codec)[] (Required): The list of codecs to be used when encoding the input video.
* **filters**: [Filters](#filters): Describes all the filtering operations, such as de-interlacing, rotation etc. that are to be applied to the input media before encoding.
* **formats**: [Format](#format)[] (Required): The list of outputs to be produced by the encoder.

## Codec
* **Discriminator**: @odata.type
### Base Properties
* **label**: string: An optional label for the codec. The label can be used to control muxing behavior.
### #Microsoft.Media.Audio
#### Properties
* **@odata.type**: '#Microsoft.Media.Audio' (Required): Defines the common properties for all audio codecs.
* **bitrate**: int: The bitrate, in bits per second, of the output encoded audio.
* **channels**: int: The number of channels in the audio.
* **samplingRate**: int: The sampling rate to use for encoding in hertz.

### #Microsoft.Media.CopyAudio
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyAudio' (Required): A codec flag, which tells the encoder to copy the input audio bitstream.

### #Microsoft.Media.CopyVideo
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyVideo' (Required): A codec flag, which tells the encoder to copy the input video bitstream without re-encoding.

### #Microsoft.Media.Video
#### Properties
* **@odata.type**: '#Microsoft.Media.Video' (Required): Describes the basic properties for encoding the input video.
* **keyFrameInterval**: string: The distance between two key frames, thereby defining a group of pictures (GOP). The value should be a non-zero integer in the range [1, 30] seconds, specified in ISO 8601 format. The default is 2 seconds (PT2S).
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None': The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize.


## #Microsoft.Media.Audio
### Properties
* **@odata.type**: '#Microsoft.Media.Audio' (Required): Defines the common properties for all audio codecs.
* **bitrate**: int: The bitrate, in bits per second, of the output encoded audio.
* **channels**: int: The number of channels in the audio.
* **samplingRate**: int: The sampling rate to use for encoding in hertz.

## #Microsoft.Media.CopyAudio
### Properties
* **@odata.type**: '#Microsoft.Media.CopyAudio' (Required): A codec flag, which tells the encoder to copy the input audio bitstream.

## #Microsoft.Media.CopyVideo
### Properties
* **@odata.type**: '#Microsoft.Media.CopyVideo' (Required): A codec flag, which tells the encoder to copy the input video bitstream without re-encoding.

## #Microsoft.Media.Video
### Properties
* **@odata.type**: '#Microsoft.Media.Video' (Required): Describes the basic properties for encoding the input video.
* **keyFrameInterval**: string: The distance between two key frames, thereby defining a group of pictures (GOP). The value should be a non-zero integer in the range [1, 30] seconds, specified in ISO 8601 format. The default is 2 seconds (PT2S).
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None': The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize.

## Filters
### Properties
* **crop**: [Rectangle](#rectangle): Describes the properties of a rectangular window applied to the input media before processing it.
* **deinterlace**: [Deinterlace](#deinterlace): Describes the de-interlacing settings.
* **overlays**: [Overlay](#overlay)[]: The properties of overlays to be applied to the input video. These could be audio, image or video overlays.
* **rotation**: 'Auto' | 'None' | 'Rotate0' | 'Rotate180' | 'Rotate270' | 'Rotate90': The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto.

## Rectangle
### Properties
* **height**: string: The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **left**: string: The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **top**: string: The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **width**: string: The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).

## Deinterlace
### Properties
* **mode**: 'AutoPixelAdaptive' | 'Off': The deinterlacing mode. Defaults to AutoPixelAdaptive.
* **parity**: 'Auto' | 'BottomFieldFirst' | 'TopFieldFirst': The field parity for de-interlacing, defaults to Auto.

## Overlay
* **Discriminator**: @odata.type
### Base Properties
* **audioGainLevel**: int: The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
* **end**: string: The position in the input video at which the overlay ends. The value should be in ISO 8601 duration format. For example, PT30S to end the overlay at 30 seconds in to the input video. If not specified the overlay will be applied until the end of the input video if inputLoop is true. Else, if inputLoop is false, then overlay will last as long as the duration of the overlay media.
* **fadeInDuration**: string: The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
* **fadeOutDuration**: string: The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
* **inputLabel**: string (Required): The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG or PNG formats, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats.
* **start**: string: The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds in to the input video. If not specified the overlay starts from the beginning of the input video.
### #Microsoft.Media.AudioOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required): Describes the properties of an audio overlay.

### #Microsoft.Media.VideoOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required): Describes the properties of a video overlay.
* **cropRectangle**: [Rectangle](#rectangle): Describes the properties of a rectangular window applied to the input media before processing it.
* **opacity**: int: The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque.
* **position**: [Rectangle](#rectangle): Describes the properties of a rectangular window applied to the input media before processing it.


## #Microsoft.Media.AudioOverlay
### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required): Describes the properties of an audio overlay.

## #Microsoft.Media.VideoOverlay
### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required): Describes the properties of a video overlay.
* **cropRectangle**: [Rectangle](#rectangle): Describes the properties of a rectangular window applied to the input media before processing it.
* **opacity**: int: The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque.
* **position**: [Rectangle](#rectangle): Describes the properties of a rectangular window applied to the input media before processing it.

## Format
* **Discriminator**: @odata.type
### Base Properties
* **filenamePattern**: string (Required): The pattern of the file names for the generated output files. The following macros are supported in the file name: {Basename} - The base name of the input video {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. Any unsubstituted macros will be collapsed and removed from the filename.
### #Microsoft.Media.ImageFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.ImageFormat' (Required): Describes the properties for an output image file.

### #Microsoft.Media.MultiBitrateFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.MultiBitrateFormat' (Required): Describes the properties for producing a collection of GOP aligned multi-bitrate files. The default behavior is to produce one output file for each video layer which is muxed together with all the audios. The exact output files produced can be controlled by specifying the outputFiles collection.
* **outputFiles**: [OutputFile](#outputfile)[]: The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .


## #Microsoft.Media.ImageFormat
### Properties
* **@odata.type**: '#Microsoft.Media.ImageFormat' (Required): Describes the properties for an output image file.

## #Microsoft.Media.MultiBitrateFormat
### Properties
* **@odata.type**: '#Microsoft.Media.MultiBitrateFormat' (Required): Describes the properties for producing a collection of GOP aligned multi-bitrate files. The default behavior is to produce one output file for each video layer which is muxed together with all the audios. The exact output files produced can be controlled by specifying the outputFiles collection.
* **outputFiles**: [OutputFile](#outputfile)[]: The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .

## OutputFile
### Properties
* **labels**: string[] (Required): The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like '[v1, a1]' tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1.

## JobProperties
### Properties
* **correlationData**: [Dictionary<string,String>](#dictionarystringstring): Customer provided key, value pairs that will be returned in Job and JobOutput state events.
* **created**: string (ReadOnly): The UTC date and time when the Job was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **description**: string: Optional customer supplied description of the Job.
* **endTime**: string (ReadOnly): The UTC date and time at which this Job finished processing.
* **input**: [JobInput](#jobinput) (Required): Base class for inputs to a Job.
* **lastModified**: string (ReadOnly): The UTC date and time when the Job was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **outputs**: [JobOutput](#joboutput)[] (Required): The outputs for the Job.
* **priority**: 'High' | 'Low' | 'Normal': Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal.
* **startTime**: string (ReadOnly): The UTC date and time at which this Job began processing.
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly): The current state of the job.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobInput
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.JobInputClip
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputClip' (Required): Represents input files for a Job.
* **end**: [ClipTime](#cliptime): Base class for specifying a clip time. Use sub classes of this class to specify the time position in the media.
* **files**: string[]: List of files. Required for JobInputHttp. Maximum of 4000 characters each.
* **label**: string: A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
* **start**: [ClipTime](#cliptime): Base class for specifying a clip time. Use sub classes of this class to specify the time position in the media.

### #Microsoft.Media.JobInputs
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required): Describes a list of inputs to a Job.
* **inputs**: [JobInput](#jobinput)[]: List of inputs to a Job.


## #Microsoft.Media.JobInputClip
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputClip' (Required): Represents input files for a Job.
* **end**: [ClipTime](#cliptime): Base class for specifying a clip time. Use sub classes of this class to specify the time position in the media.
* **files**: string[]: List of files. Required for JobInputHttp. Maximum of 4000 characters each.
* **label**: string: A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
* **start**: [ClipTime](#cliptime): Base class for specifying a clip time. Use sub classes of this class to specify the time position in the media.

## ClipTime
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.AbsoluteClipTime
#### Properties
* **@odata.type**: '#Microsoft.Media.AbsoluteClipTime' (Required): Specifies the clip time as an absolute time position in the media file.  The absolute time can point to a different position depending on whether the media file starts from a timestamp of zero or not.
* **time**: string (Required): The time position on the timeline of the input media. It is usually specified as an ISO8601 period. e.g PT30S for 30 seconds.


## #Microsoft.Media.AbsoluteClipTime
### Properties
* **@odata.type**: '#Microsoft.Media.AbsoluteClipTime' (Required): Specifies the clip time as an absolute time position in the media file.  The absolute time can point to a different position depending on whether the media file starts from a timestamp of zero or not.
* **time**: string (Required): The time position on the timeline of the input media. It is usually specified as an ISO8601 period. e.g PT30S for 30 seconds.

## #Microsoft.Media.JobInputs
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required): Describes a list of inputs to a Job.
* **inputs**: [JobInput](#jobinput)[]: List of inputs to a Job.

## JobOutput
* **Discriminator**: @odata.type
### Base Properties
* **endTime**: string (ReadOnly): The UTC date and time at which this Job Output finished processing.
* **error**: [JobError](#joberror) (ReadOnly): Details of JobOutput errors.
* **label**: string: A label that is assigned to a JobOutput in order to help uniquely identify it. This is useful when your Transform has more than one TransformOutput, whereby your Job has more than one JobOutput. In such cases, when you submit the Job, you will add two or more JobOutputs, in the same order as TransformOutputs in the Transform. Subsequently, when you retrieve the Job, either through events or on a GET request, you can use the label to easily identify the JobOutput. If a label is not provided, a default value of '{presetName}_{outputIndex}' will be used, where the preset name is the name of the preset in the corresponding TransformOutput and the output index is the relative index of the this JobOutput within the Job. Note that this index is the same as the relative index of the corresponding TransformOutput within its Transform.
* **progress**: int (ReadOnly): If the JobOutput is in a Processing state, this contains the Job completion percentage. The value is an estimate and not intended to be used to predict Job completion times. To determine if the JobOutput is complete, use the State property.
* **startTime**: string (ReadOnly): The UTC date and time at which this Job Output began processing.
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly): Describes the state of the JobOutput.
### #Microsoft.Media.JobOutputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required): Represents an Asset used as a JobOutput.
* **assetName**: string (Required): The name of the output Asset.


## JobError
### Properties
* **category**: 'Configuration' | 'Content' | 'Download' | 'Service' | 'Upload' (ReadOnly): Helps with categorization of errors.
* **code**: 'ConfigurationUnsupported' | 'ContentMalformed' | 'ContentUnsupported' | 'DownloadNotAccessible' | 'DownloadTransientError' | 'ServiceError' | 'ServiceTransientError' | 'UploadNotAccessible' | 'UploadTransientError' (ReadOnly): Error code describing the error.
* **details**: [JobErrorDetail](#joberrordetail)[] (ReadOnly): An array of details about specific errors that led to this reported error.
* **message**: string (ReadOnly): A human-readable language-dependent representation of the error.
* **retry**: 'DoNotRetry' | 'MayRetry' (ReadOnly): Indicates that it may be possible to retry the Job. If retry is unsuccessful, please contact Azure support via Azure Portal.

## JobErrorDetail
### Properties
* **code**: string (ReadOnly): Code describing the error detail.
* **message**: string (ReadOnly): A human-readable representation of the error.

## #Microsoft.Media.JobOutputAsset
### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required): Represents an Asset used as a JobOutput.
* **assetName**: string (Required): The name of the output Asset.

