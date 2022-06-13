# Microsoft.Media @ 2021-05-01-preview

## Resource Microsoft.Media/videoAnalyzers@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VideoAnalyzerIdentity](#videoanalyzeridentity): The set of managed identities associated with the Video Analyzer resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VideoAnalyzerProperties](#videoanalyzerproperties): The properties of the Video Analyzer account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data of the Video Analyzer account.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/videoAnalyzers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/accessPolicies@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessPolicyProperties](#accesspolicyproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/videoAnalyzers/accessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/edgeModules@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeModuleProperties](#edgemoduleproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/videoAnalyzers/edgeModules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/videos@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VideoProperties](#videoproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/videoAnalyzers/videos' (ReadOnly, DeployTimeConstant): The resource type

## Function listProvisioningToken (Microsoft.Media/videoAnalyzers/edgeModules@2021-05-01-preview)
* **Resource**: Microsoft.Media/videoAnalyzers/edgeModules
* **ApiVersion**: 2021-05-01-preview
* **Input**: [ListProvisioningTokenInput](#listprovisioningtokeninput)
* **Output**: [EdgeModuleProvisioningToken](#edgemoduleprovisioningtoken)

## Function listStreamingToken (Microsoft.Media/videoAnalyzers/videos@2021-05-01-preview)
* **Resource**: Microsoft.Media/videoAnalyzers/videos
* **ApiVersion**: 2021-05-01-preview
* **Output**: [VideoStreamingToken](#videostreamingtoken)

## AccessPolicyProperties
### Properties
* **authentication**: [AuthenticationBase](#authenticationbase): Authentication method to be used when validating client API access.
* **role**: 'Reader' | string: Defines the access level granted by this policy.

## AccountEncryption
### Properties
* **identity**: [ResourceIdentity](#resourceidentity): The Key Vault identity.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The properties of the key used to encrypt the account.
* **status**: string (ReadOnly): The current status of the Key Vault mapping.
* **type**: 'CustomerKey' | 'SystemKey' | string (Required): The type of key used to encrypt the Account Key.

## AuthenticationBase
* **Discriminator**: @type

### Base Properties
### JwtAuthentication
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.JwtAuthentication' (Required): The discriminator for derived types.
* **audiences**: string[]: List of expected token audiences. Token audience is valid if it matches at least one of the given values.
* **claims**: [TokenClaim](#tokenclaim)[]: List of additional token claims to be validated. Token must contains all claims and respective values for it to be valid.
* **issuers**: string[]: List of expected token issuers. Token issuer is valid if it matches at least one of the given values.
* **keys**: [TokenKey](#tokenkey)[]: List of keys which can be used to validate access tokens. Having multiple keys allow for seamless key rotation of the token signing key. Token signature must match exactly one key.


## EdgeModuleProperties
### Properties
* **edgeModuleId**: string (ReadOnly): Internal ID generated for the instance of the Video Analyzer edge module.

## EdgeModuleProvisioningToken
### Properties
* **expirationDate**: string (ReadOnly): The expiration date of the registration token. The Azure Video Analyzer IoT edge module must be initialized and connected to the Internet prior to the token expiration date.
* **token**: string (ReadOnly): The token blob to be provided to the Azure Video Analyzer IoT edge module through the Azure IoT Edge module twin properties.

## Endpoint
### Properties
* **endpointUrl**: string: The URL of the endpoint.
* **type**: 'ClientApi' | string (Required): The type of the endpoint.

## KeyVaultProperties
### Properties
* **currentKeyIdentifier**: string (ReadOnly): The current key used to encrypt Video Analyzer account, including the key version.
* **keyIdentifier**: string (Required): The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).

## ListProvisioningTokenInput
### Properties
* **expirationDate**: string (Required, WriteOnly): The desired expiration date of the registration token. The Azure Video Analyzer IoT edge module must be initialized and connected to the Internet prior to the token expiration date.

## ResourceIdentity
### Properties
* **userAssignedIdentity**: string (Required): The user assigned managed identity's resource identifier to use when accessing a resource.

## StorageAccount
### Properties
* **id**: string: The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage).
* **identity**: [ResourceIdentity](#resourceidentity): A managed identity that Video Analyzer will use to access the storage account.
* **status**: string (ReadOnly): The current status of the storage account mapping.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TokenClaim
### Properties
* **name**: string (Required): Name of the claim which must be present on the token.
* **value**: string (Required): Expected value of the claim to be present on the token.

## TokenKey
* **Discriminator**: @type

### Base Properties
* **kid**: string (Required): JWT token key id. Validation keys are looked up based on the key id present on the JWT token header.
### EccTokenKey
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.EccTokenKey' (Required): The discriminator for derived types.
* **alg**: 'ES256' | 'ES384' | 'ES512' | string (Required): Elliptical curve algorithm to be used: ES256, ES384 or ES512.
* **x**: string (Required): X coordinate.
* **y**: string (Required): Y coordinate.

### RsaTokenKey
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.RsaTokenKey' (Required): The discriminator for derived types.
* **alg**: 'RS256' | 'RS384' | 'RS512' | string (Required): RSA algorithm to be used: RS256, RS384 or RS512.
* **e**: string (Required): RSA public key exponent.
* **n**: string (Required): RSA public key modulus.


## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedManagedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedManagedIdentity](#userassignedmanagedidentity)

## UserAssignedManagedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID.
* **principalId**: string (ReadOnly): The principal ID.

## VideoAnalyzerIdentity
### Properties
* **type**: string (Required): The identity type.
* **userAssignedIdentities**: [UserAssignedManagedIdentities](#userassignedmanagedidentities): The User Assigned Managed Identities.

## VideoAnalyzerProperties
### Properties
* **encryption**: [AccountEncryption](#accountencryption): The account encryption properties.
* **endpoints**: [Endpoint](#endpoint)[] (ReadOnly): The list of endpoints associated with this resource.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.

## VideoFlags
### Properties
* **canStream**: bool (Required): Value indicating whether or not the video can be streamed. Only "archive" type videos can be streamed.
* **hasData**: bool (Required): Value indicating whether or not there has ever been data recorded or uploaded into the video. Newly created videos have this value set to false.
* **isRecording**: bool (Required): Value indicating whether or not the video is currently being referenced be an active live pipeline. The fact that is being referenced, doesn't necessarily indicate that data is being received. For example, video recording may be gated on events or camera may not be accessible at the time.

## VideoMediaInfo
### Properties
* **segmentLength**: string (ReadOnly): Video segment length indicates the length of individual video files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments.

## VideoProperties
### Properties
* **description**: string: Optional video description provided by the user. Value can be up to 2048 characters long.
* **flags**: [VideoFlags](#videoflags) (ReadOnly): Video flags contain information about the available video actions and its dynamic properties based on the current video state.
* **mediaInfo**: [VideoMediaInfo](#videomediainfo) (ReadOnly): Contains information about the video and audio content.
* **streaming**: [VideoStreaming](#videostreaming) (ReadOnly): Video streaming holds information about video streaming URLs.
* **title**: string: Optional video title provided by the user. Value can be up to 256 characters long.
* **type**: 'Archive' | string (ReadOnly): Type of the video archive. Different archive formats provide different capabilities.

## VideoStreaming
### Properties
* **archiveBaseUrl**: string: Video streaming base URL for the video archive. When present, archived video can be played through the Azure Video Analyzer player. Alternatively, this URL can be used with compatible DASH or HLS players by appending the following to the base URL:

  - HLSv4:     /manifest(format=m3u8-aapl).m3u8
  - HLS CMAF:  /manifest(format=m3u8-cmaf)
  - DASH CMAF: /manifest(format=mpd-time-cmaf)

Moreover, an ongoing video recording can be played in "live mode" with latencies which are approximately double of the chosen video segment length.

## VideoStreamingToken
### Properties
* **expirationDate**: string (ReadOnly): The streaming token expiration date in ISO8601 format (eg. 2021-01-01T00:00:00Z).
* **token**: string (ReadOnly): The streaming token value to be added to the video streaming URL as the value for a "token" query string parameter. The token is specific to a single video.

