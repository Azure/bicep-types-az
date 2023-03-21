# Microsoft.Media @ 2023-01-01

## Resource Microsoft.Media/locations/mediaServicesOperationResults@2023-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MediaServiceIdentity](#mediaserviceidentity) (ReadOnly): The Managed Identity for the Media Services account.
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties) (ReadOnly): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Media/locations/mediaServicesOperationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MediaServiceIdentity](#mediaserviceidentity): The Managed Identity for the Media Services account.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/accountFilters@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaFilterProperties](#mediafilterproperties): The Media Filter properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/accountFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssetProperties](#assetproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets/assetFilters@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaFilterProperties](#mediafilterproperties): The Media Filter properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/assets/assetFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets/tracks@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssetTrackProperties](#assettrackproperties): The resource properties.
* **type**: 'Microsoft.Media/mediaServices/assets/tracks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/assets/tracks/operationResults@2023-01-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssetTrackProperties](#assettrackproperties) (ReadOnly): The resource properties.
* **type**: 'Microsoft.Media/mediaServices/assets/tracks/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/contentKeyPolicies@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContentKeyPolicyProperties](#contentkeypolicyproperties): The properties of the Content Key Policy.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/contentKeyPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/privateEndpointConnections@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Media/mediaservices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/privateLinkResources@2023-01-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Media/mediaservices/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingLocators@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingLocatorProperties](#streaminglocatorproperties): Properties of the Streaming Locator.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/streamingLocators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/streamingPolicies@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingPolicyProperties](#streamingpolicyproperties): Class to specify properties of Streaming Policy
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/streamingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Function listContainerSas (Microsoft.Media/mediaServices/assets@2023-01-01)
* **Resource**: Microsoft.Media/mediaServices/assets
* **ApiVersion**: 2023-01-01
* **Input**: [ListContainerSasInput](#listcontainersasinput)
* **Output**: [AssetContainerSas](#assetcontainersas)

## Function listContentKeys (Microsoft.Media/mediaServices/streamingLocators@2023-01-01)
* **Resource**: Microsoft.Media/mediaServices/streamingLocators
* **ApiVersion**: 2023-01-01
* **Output**: [ListContentKeysResponse](#listcontentkeysresponse)

## Function listEdgePolicies (Microsoft.Media/mediaservices@2023-01-01)
* **Resource**: Microsoft.Media/mediaservices
* **ApiVersion**: 2023-01-01
* **Input**: [ListEdgePoliciesInput](#listedgepoliciesinput)
* **Output**: [EdgePolicies](#edgepolicies)

## Function listPaths (Microsoft.Media/mediaServices/streamingLocators@2023-01-01)
* **Resource**: Microsoft.Media/mediaServices/streamingLocators
* **ApiVersion**: 2023-01-01
* **Output**: [ListPathsResponse](#listpathsresponse)

## Function listStreamingLocators (Microsoft.Media/mediaServices/assets@2023-01-01)
* **Resource**: Microsoft.Media/mediaServices/assets
* **ApiVersion**: 2023-01-01
* **Output**: [ListStreamingLocatorsResponse](#liststreaminglocatorsresponse)

## AccessControl
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: The behavior for IP access control in Key Delivery.
* **ipAllowList**: string[]: The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty.

## AccountEncryption
### Properties
* **identity**: [ResourceIdentity](#resourceidentity): The Key Vault identity.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The properties of the key used to encrypt the account.
* **status**: string (ReadOnly): The current status of the Key Vault mapping.
* **type**: 'CustomerKey' | 'SystemKey' | string (Required): The type of key used to encrypt the Account Key.

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
* **encryptionScope**: string: The Asset container encryption scope in the storage account.
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
* **ask**: any (Required): The key that must be used as FairPlay Application Secret key. This needs to be base64 encoded.
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

## DashSettings
### Properties
* **role**: string: The role for the DASH setting.

## DefaultKey
### Properties
* **label**: string: Label can be used to specify Content Key when creating a Streaming Locator
* **policyName**: string: Policy used by Default Key

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

## HlsSettings
### Properties
* **characteristics**: string: The characteristics for the HLS setting.
* **default**: bool: The default for the HLS setting.
* **forced**: bool: The forced for the HLS setting.

## KeyDelivery
### Properties
* **accessControl**: [AccessControl](#accesscontrol): The access control properties for Key Delivery.

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

## MediaFilterProperties
### Properties
* **firstQuality**: [FirstQuality](#firstquality): The first quality.
* **presentationTimeRange**: [PresentationTimeRange](#presentationtimerange): The presentation time range.
* **tracks**: [FilterTrackSelection](#filtertrackselection)[]: The tracks selection conditions.

## MediaServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The Principal ID of the identity.
* **tenantId**: string (ReadOnly): The Tenant ID of the identity.
* **type**: string (Required): The identity type.
* **userAssignedIdentities**: [UserAssignedManagedIdentities](#userassignedmanagedidentities): The user assigned managed identities.

## MediaServiceProperties
### Properties
* **encryption**: [AccountEncryption](#accountencryption): The account encryption properties.
* **keyDelivery**: [KeyDelivery](#keydelivery): The Key Delivery properties for Media Services account.
* **mediaServiceId**: string (ReadOnly): The Media Services account ID.
* **minimumTlsVersion**: 'Tls10' | 'Tls11' | 'Tls12' | 'Tls13' | string: The minimum TLS version allowed for this account's requests. This is an optional property. If unspecified, a secure default value will be used.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The Private Endpoint Connections created for the Media Service account.
* **provisioningState**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Media Services account.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public network access is allowed for resources under the Media Services account.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.
* **storageAuthentication**: 'ManagedIdentity' | 'System' | string

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

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
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

## ResourceIdentity
### Properties
* **userAssignedIdentity**: string: The user assigned managed identity's ARM ID to use when accessing a resource.
* **useSystemAssignedIdentity**: bool (Required): Indicates whether to use System Assigned Managed Identity. Mutual exclusive with User Assigned Managed Identity.

## StorageAccount
### Properties
* **id**: string: The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
* **identity**: [ResourceIdentity](#resourceidentity): The storage account identity.
* **status**: string (ReadOnly): The current status of the storage account mapping.
* **type**: 'Primary' | 'Secondary' | string (Required): The type of the storage account.

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

## TrackPropertyCondition
### Properties
* **operation**: 'Equal' | 'Unknown' | string (Required): Track property condition operation
* **property**: 'FourCC' | 'Unknown' | string (Required): Track property type
* **value**: string: Track property value

## TrackSelection
### Properties
* **trackSelections**: [TrackPropertyCondition](#trackpropertycondition)[]: TrackSelections is a track property condition list which can specify track(s)

## UserAssignedManagedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedManagedIdentity](#userassignedmanagedidentity)

## UserAssignedManagedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID.
* **principalId**: string (ReadOnly): The principal ID.

