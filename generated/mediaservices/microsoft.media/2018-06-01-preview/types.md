# Microsoft.Media @ 2018-06-01-preview

## Resource Microsoft.Media/mediaservices@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties): Properties of the Media Services account.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssetProperties](#assetproperties): The Asset properties.
* **type**: 'Microsoft.Media/mediaServices/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/contentKeyPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContentKeyPolicyProperties](#contentkeypolicyproperties): The properties of the Content Key Policy.
* **type**: 'Microsoft.Media/mediaServices/contentKeyPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveEventProperties](#liveeventproperties): The Live Event properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveOutputProperties](#liveoutputproperties): The JSON object that contains the properties required to create a Live Output.
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties): The StreamingEndpoint properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingLocators@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingLocatorProperties](#streaminglocatorproperties): Class to specify properties of Streaming Locator
* **type**: 'Microsoft.Media/mediaServices/streamingLocators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingPolicyProperties](#streamingpolicyproperties): Class to specify properties of Streaming Policy
* **type**: 'Microsoft.Media/mediaServices/streamingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/transforms@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TransformProperties](#transformproperties): A Transform.
* **type**: 'Microsoft.Media/mediaServices/transforms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/transforms/jobs@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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
* **type**: 'Primary' | 'Secondary' (Required): The type of the storage account. Possible values include: 'Primary', 'Secondary'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssetProperties
### Properties
* **alternateId**: string: The alternate ID of the Asset.
* **assetId**: string (ReadOnly): The Asset ID.
* **container**: string: The name of the asset blob container.
* **created**: string (ReadOnly): The creation date of the Asset.
* **description**: string: The Asset description.
* **lastModified**: string (ReadOnly): The last modified date of the Asset.
* **storageAccountName**: string: The name of the storage account.
* **storageEncryptionFormat**: 'MediaStorageClientEncryption' | 'None' (ReadOnly): The Asset encryption format. One of None or MediaStorageEncryption. Possible values include: 'None', 'MediaStorageClientEncryption'

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
* **ask**: array (Required): The key that must be used as FairPlay ASk.
* **fairPlayPfx**: string (Required): The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
* **fairPlayPfxPassword**: string (Required): The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
* **rentalAndLeaseKeyType**: 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required): The rental and lease key type. Possible values include: 'Unknown', 'Undefined', 'PersistentUnlimited', 'PersistentLimited'
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
* **ask**: array (Required): The key that must be used as FairPlay ASk.
* **fairPlayPfx**: string (Required): The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
* **fairPlayPfxPassword**: string (Required): The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
* **rentalAndLeaseKeyType**: 'PersistentLimited' | 'PersistentUnlimited' | 'Undefined' | 'Unknown' (Required): The rental and lease key type. Possible values include: 'Unknown', 'Undefined', 'PersistentUnlimited', 'PersistentLimited'
* **rentalDuration**: int (Required): The rental duration. Must be greater than or equal to 0.

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
* **contentType**: 'UltraVioletDownload' | 'UltraVioletStreaming' | 'Unknown' | 'Unspecified' (Required): The PlayReady content type. Possible values include: 'Unknown', 'Unspecified', 'UltraVioletDownload', 'UltraVioletStreaming'
* **expirationDate**: string: The expiration date of license.
* **gracePeriod**: string: The grace period of license.
* **licenseType**: 'NonPersistent' | 'Persistent' | 'Unknown' (Required): The license type. Possible values include: 'Unknown', 'NonPersistent', 'Persistent'
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
* **allowPassingVideoContentToUnknownOutput**: 'Allowed' | 'AllowedWithVideoConstriction' | 'NotAllowed' | 'Unknown' (Required): Configures Unknown output handling settings of the license. Possible values include: 'Unknown', 'NotAllowed', 'Allowed', 'AllowedWithVideoConstriction'
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
* **restrictionTokenType**: 'Jwt' | 'Swt' | 'Unknown' (Required): The type of token. Possible values include: 'Unknown', 'Swt', 'Jwt'

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
* **restrictionTokenType**: 'Jwt' | 'Swt' | 'Unknown' (Required): The type of token. Possible values include: 'Unknown', 'Swt', 'Jwt'

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
* **resourceState**: 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): The resource state of the Live Event. Possible values include: 'Stopped', 'Starting', 'Running', 'Stopping', 'Deleting'
* **streamOptions**: 'Default' | 'LowLatency'[]: The stream options.
* **vanityUrl**: bool: The Live Event vanity URL flag.

## CrossSiteAccessPolicies
### Properties
* **clientAccessPolicy**: string: The content of clientaccesspolicy.xml used by Silverlight.
* **crossDomainPolicy**: string: The content of crossdomain.xml used by Silverlight.

## LiveEventEncoding
### Properties
* **encodingType**: 'Basic' | 'None': The encoding type for Live Event. Possible values include: 'None', 'Basic'
* **presetName**: string: The encoding preset name.

## LiveEventInput
### Properties
* **accessToken**: string: The access token.
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]: The input endpoints for the Live Event.
* **keyFrameIntervalDuration**: string: ISO 8601 timespan duration of the key frame interval duration.
* **streamingProtocol**: 'FragmentedMP4' | 'RTMP' (Required): The streaming protocol for the Live Event. Possible values include: 'FragmentedMP4', 'RTMP'

## LiveEventEndpoint
### Properties
* **protocol**: string: The endpoint protocol.
* **url**: string: The endpoint URL.

## LiveEventPreview
### Properties
* **accessControl**: [LiveEventPreviewAccessControl](#liveeventpreviewaccesscontrol): The IP access control for Live Event preview.
* **alternativeMediaId**: string: An Alternative Media Identifier associated with the preview url.  This identifier can be used to distinguish the preview of different live events for authorization purposes in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]: The endpoints for preview.
* **previewLocator**: string: The preview locator Guid.
* **streamingPolicyName**: string: The name of streaming policy used for LiveEvent preview

## LiveEventPreviewAccessControl
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
* **manifestName**: string: The manifest file name.
* **outputSnapTime**: int: The output snapshot time.
* **provisioningState**: string (ReadOnly): The provisioning state of the Live Output.
* **resourceState**: 'Creating' | 'Deleting' | 'Running' (ReadOnly): The resource state of the Live Output. Possible values include: 'Creating', 'Running', 'Deleting'

## Hls
### Properties
* **fragmentsPerTsSegment**: int: The amount of fragments per HTTP Live Streaming (HLS) segment.

## StreamingEndpointProperties
### Properties
* **accessControl**: [StreamingEndpointAccessControl](#streamingendpointaccesscontrol): StreamingEndpoint access control definition.
* **availabilitySetName**: string: AvailabilitySet name
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
* **resourceState**: 'Deleting' | 'Running' | 'Scaling' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): The resource state of the StreamingEndpoint. Possible values include: 'Stopped', 'Starting', 'Running', 'Stopping', 'Deleting', 'Scaling'
* **scaleUnits**: int: The number of scale units.

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
* **expiration**: string: The exact time the authentication key.
* **identifier**: string: identifier of the key

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StreamingLocatorProperties
### Properties
* **alternativeMediaId**: string: An Alternative Media Identifier associated with the StreamingLocator.  This identifier can be used to distinguish different StreamingLocators for the same Asset for authorization purposes in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
* **assetName**: string (Required): Asset Name
* **contentKeys**: [StreamingLocatorContentKey](#streaminglocatorcontentkey)[]: ContentKeys used by this Streaming Locator
* **created**: string (ReadOnly): Creation time of Streaming Locator
* **defaultContentKeyPolicyName**: string: Default ContentKeyPolicy used by this Streaming Locator
* **endTime**: string: EndTime of Streaming Locator
* **startTime**: string: StartTime of Streaming Locator
* **streamingLocatorId**: string: StreamingLocatorId of Streaming Locator
* **streamingPolicyName**: string (Required): Streaming policy name used by this streaming locator. Either specify the name of streaming policy you created or use one of the predefined streaming polices. The predefined streaming policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_SecureStreaming' and 'Predefined_SecureStreamingWithFairPlay'

## StreamingLocatorContentKey
### Properties
* **id**: string (Required): ID of Content Key
* **label**: string: Label of Content Key
* **policyName**: string (ReadOnly): ContentKeyPolicy used by Content Key
* **tracks**: [TrackSelection](#trackselection)[]: Tracks which use this Content Key
* **type**: 'CommonEncryptionCbcs' | 'CommonEncryptionCenc' | 'EnvelopeEncryption' (ReadOnly): Encryption type of Content Key. Possible values include: 'CommonEncryptionCenc', 'CommonEncryptionCbcs', 'EnvelopeEncryption'
* **value**: string: Value of Content Key

## TrackSelection
### Properties
* **trackSelections**: [TrackPropertyCondition](#trackpropertycondition)[]: TrackSelections is a track property condition list which can specify track(s)

## TrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'Unknown' (Required): Track property condition operation. Possible values include: 'Unknown', 'Equal'
* **property**: 'FourCC' | 'Unknown' (Required): Track property type. Possible values include: 'Unknown', 'FourCC'
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
* **customLicenseAcquisitionUrlTemplate**: string: The template for a customer service to deliver keys to end users.  Not needed when using Azure Media Services for issuing keys.

## StreamingPolicyPlayReadyConfiguration
### Properties
* **customLicenseAcquisitionUrlTemplate**: string: The template for a customer service to deliver keys to end users.  Not needed when using Azure Media Services for issuing keys.
* **playReadyCustomAttributes**: string: Custom attributes for PlayReady

## StreamingPolicyWidevineConfiguration
### Properties
* **customLicenseAcquisitionUrlTemplate**: string: The template for a customer service to deliver keys to end users.  Not needed when using Azure Media Services for issuing keys.

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
* **customKeyAcquisitionUrlTemplate**: string: KeyAcquisitionUrlTemplate is used to point to user specified service to delivery content keys
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
* **onError**: 'ContinueJob' | 'StopProcessingJob': A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The default is stop. Possible values include: 'StopProcessingJob', 'ContinueJob'
* **preset**: [Preset](#preset) (Required): Base type for all Presets, which define the recipe or instructions on how the input media files should be processed.
* **relativePriority**: 'High' | 'Low' | 'Normal': Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal. Possible values include: 'Low', 'Normal', 'High'

## Preset
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Media.AudioAnalyzerPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioAnalyzerPreset' (Required): The Audio Analyzer preset applies a pre-defined set of AI-based analysis operations, including speech transcription. Currently, the preset supports processing of content with a single audio track.
* **audioLanguage**: string: The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US'). The list of supported languages are, 'en-US', 'en-GB', 'es-ES', 'es-MX', 'fr-FR', 'it-IT', 'ja-JP', 'pt-BR', 'zh-CN'.

### #Microsoft.Media.BuiltInStandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required): Describes a built-in preset for encoding the input video with the Standard Encoder.
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' (Required): The built-in preset to be used for encoding videos. Possible values include: 'AdaptiveStreaming', 'AACGoodQualityAudio', 'H264MultipleBitrate1080p', 'H264MultipleBitrate720p', 'H264MultipleBitrateSD'

### #Microsoft.Media.StandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required): Describes all the settings to be used when encoding the input video with the Standard Encoder.
* **codecs**: [Codec](#codec)[]: The list of codecs to be used when encoding the input video.
* **filters**: [Filters](#filters): Describes all the filtering operations, such as de-interlacing, rotation etc. that are to be applied to the input media before encoding.
* **formats**: [Format](#format)[]: The list of outputs to be produced by the encoder.


## #Microsoft.Media.AudioAnalyzerPreset
### Properties
* **@odata.type**: '#Microsoft.Media.AudioAnalyzerPreset' (Required): The Audio Analyzer preset applies a pre-defined set of AI-based analysis operations, including speech transcription. Currently, the preset supports processing of content with a single audio track.
* **audioLanguage**: string: The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US'). The list of supported languages are, 'en-US', 'en-GB', 'es-ES', 'es-MX', 'fr-FR', 'it-IT', 'ja-JP', 'pt-BR', 'zh-CN'.

## #Microsoft.Media.BuiltInStandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required): Describes a built-in preset for encoding the input video with the Standard Encoder.
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' (Required): The built-in preset to be used for encoding videos. Possible values include: 'AdaptiveStreaming', 'AACGoodQualityAudio', 'H264MultipleBitrate1080p', 'H264MultipleBitrate720p', 'H264MultipleBitrateSD'

## #Microsoft.Media.StandardEncoderPreset
### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required): Describes all the settings to be used when encoding the input video with the Standard Encoder.
* **codecs**: [Codec](#codec)[]: The list of codecs to be used when encoding the input video.
* **filters**: [Filters](#filters): Describes all the filtering operations, such as de-interlacing, rotation etc. that are to be applied to the input media before encoding.
* **formats**: [Format](#format)[]: The list of outputs to be produced by the encoder.

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
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None': The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize. Possible values include: 'None', 'AutoSize', 'AutoFit'


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
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None': The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize. Possible values include: 'None', 'AutoSize', 'AutoFit'

## Filters
### Properties
* **crop**: [Rectangle](#rectangle): Describes the properties of a rectangular window applied to the input media before processing it.
* **deinterlace**: [Deinterlace](#deinterlace): Describes the de-interlacing settings.
* **overlays**: [Overlay](#overlay)[]: The properties of overlays to be applied to the input video. These could be audio, image or video overlays.
* **rotation**: 'Auto' | 'None' | 'Rotate0' | 'Rotate180' | 'Rotate270' | 'Rotate90': The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto. Possible values include: 'Auto', 'None', 'Rotate0', 'Rotate90', 'Rotate180', 'Rotate270'

## Rectangle
### Properties
* **height**: string: The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **left**: string: The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **top**: string: The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **width**: string: The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).

## Deinterlace
### Properties
* **mode**: 'AutoPixelAdaptive' | 'Off': The deinterlacing mode. Defaults to AutoPixelAdaptive. Possible values include: 'Off', 'AutoPixelAdaptive'
* **parity**: 'Auto' | 'BottomFieldFirst' | 'TopFieldFirst': The field parity for de-interlacing, defaults to Auto. Possible values include: 'Auto', 'TopFieldFirst', 'BottomFieldFirst'

## Overlay
* **Discriminator**: @odata.type
### Base Properties
* **audioGainLevel**: int: The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
* **end**: string: The position in the input video at which the overlay ends. The value should be in ISO 8601 duration format. For example, PT30S to end the overlay at 30 seconds in to the input video. If not specified the overlay will be applied until the end of the input video if inputLoop is true. Else, if inputLoop is false, then overlay will last as long as the duration of the overlay media.
* **fadeInDuration**: string: The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
* **fadeOutDuration**: string: The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
* **inputLabel**: string: The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG or PNG formats, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats.
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
* **filenamePattern**: string: The pattern of the file names for the generated output files. The following macros are supported in the file name: {Basename} - The base name of the input video {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. Any unsubstituted macros will be collapsed and removed from the filename.
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
* **labels**: string[]: The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like '[v1, a1]' tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1.

## JobProperties
### Properties
* **correlationData**: [Dictionary<string,String>](#dictionarystringstring): Customer provided correlation data that will be returned in Job completed events.
* **created**: string (ReadOnly): The UTC date and time when the Job was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **description**: string: Optional customer supplied description of the Job.
* **input**: [JobInput](#jobinput) (Required): Base class for inputs to a Job.
* **lastModified**: string (ReadOnly): The UTC date and time when the Job was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **outputs**: [JobOutput](#joboutput)[] (Required): The outputs for the Job.
* **priority**: 'High' | 'Low' | 'Normal': Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal. Possible values include: 'Low', 'Normal', 'High'
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly): The current state of the job. Possible values include: 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing', 'Queued', 'Scheduled'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobInput
* **Discriminator**: @odata.type
### Base Properties
* **label**: string: A label that is assigned to a JobInput, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
### #Microsoft.Media.JobInputClip
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputClip' (Required): Represents input files for a Job.
* **files**: string[]: List of files. Required for JobInputHttp.

### #Microsoft.Media.JobInputs
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required): Describes a list of inputs to a Job.
* **inputs**: [JobInput](#jobinput)[]: List of inputs to a Job.


## #Microsoft.Media.JobInputClip
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputClip' (Required): Represents input files for a Job.
* **files**: string[]: List of files. Required for JobInputHttp.

## #Microsoft.Media.JobInputs
### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required): Describes a list of inputs to a Job.
* **inputs**: [JobInput](#jobinput)[]: List of inputs to a Job.

## JobOutput
* **Discriminator**: @odata.type
### Base Properties
* **error**: [JobError](#joberror) (ReadOnly): Details of JobOutput errors.
* **progress**: int (ReadOnly): If the JobOutput is in a Processing state, this contains the job completion percentage.  The value is an estimate and not intended to be used to predict job completion times. To determine if the JobOutput is complete, use the State property.
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' (ReadOnly): Describes the state of the JobOutput. Possible values include: 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing', 'Queued', 'Scheduled'
### #Microsoft.Media.JobOutputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required): Represents an Asset used as a JobOutput.
* **assetName**: string (Required): The name of the output Asset.


## JobError
### Properties
* **category**: 'Configuration' | 'Content' | 'Download' | 'Service' | 'Upload' (ReadOnly): Helps with categorization of errors. Possible values include: 'Service', 'Download', 'Upload', 'Configuration', 'Content'
* **code**: 'ConfigurationUnsupported' | 'ContentMalformed' | 'ContentUnsupported' | 'DownloadNotAccessible' | 'DownloadTransientError' | 'ServiceError' | 'ServiceTransientError' | 'UploadNotAccessible' | 'UploadTransientError' (ReadOnly): Error code describing the error. Possible values include: 'ServiceError', 'ServiceTransientError', 'DownloadNotAccessible', 'DownloadTransientError', 'UploadNotAccessible', 'UploadTransientError', 'ConfigurationUnsupported', 'ContentMalformed', 'ContentUnsupported'
* **details**: [JobErrorDetail](#joberrordetail)[] (ReadOnly): An array of details about specific errors that led to this reported error.
* **message**: string (ReadOnly): A human-readable language-dependent representation of the error.
* **retry**: 'DoNotRetry' | 'MayRetry' (ReadOnly): Indicates that it may be possible to retry the Job. If retry is unsuccessful, please contact Azure support via Azure Portal. Possible values include: 'DoNotRetry', 'MayRetry'

## JobErrorDetail
### Properties
* **code**: string (ReadOnly): Code describing the error detail.
* **message**: string (ReadOnly): A human-readable representation of the error.

## #Microsoft.Media.JobOutputAsset
### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required): Represents an Asset used as a JobOutput.
* **assetName**: string (Required): The name of the output Asset.

