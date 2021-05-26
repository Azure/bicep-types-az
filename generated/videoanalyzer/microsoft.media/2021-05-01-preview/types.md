# Microsoft.Media @ 2021-05-01-preview

## Resource Microsoft.Media/videoAnalyzers@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VideoAnalyzerIdentity](#videoanalyzeridentity): The managed identity for the Video Analyzer resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VideoAnalyzerProperties](#videoanalyzerproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/videoAnalyzers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/accessPolicies@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessPolicyProperties](#accesspolicyproperties): Application level properties for the access policy resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Media/videoAnalyzers/accessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/edgeModules@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeModuleProperties](#edgemoduleproperties): Application level properties for the edge module resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Media/videoAnalyzers/edgeModules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/videoAnalyzers/videos@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VideoProperties](#videoproperties): Application level properties for the video resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Media/videoAnalyzers/videos' (ReadOnly, DeployTimeConstant): The resource type

## VideoAnalyzerIdentity
### Properties
* **type**: string (Required): The identity type.
* **userAssignedIdentities**: [UserAssignedManagedIdentities](#userassignedmanagedidentities): The User Assigned Managed Identities.

## UserAssignedManagedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedManagedIdentity](#userassignedmanagedidentity)

## UserAssignedManagedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID.
* **principalId**: string (ReadOnly): The principal ID.

## VideoAnalyzerProperties
### Properties
* **encryption**: [AccountEncryption](#accountencryption): Defines how the Video Analyzer account is (optionally) encrypted.
* **endpoints**: [Endpoint](#endpoint)[] (ReadOnly): The list of endpoints associated with this resource.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.

## AccountEncryption
### Properties
* **identity**: [ResourceIdentity](#resourceidentity): The user assigned managed identity to use when accessing a resource.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The details for accessing the encryption keys in Key Vault.
* **status**: string (ReadOnly): The current status of the Key Vault mapping.
* **type**: 'CustomerKey' | 'SystemKey' (Required): The type of key used to encrypt the Account Key.

## ResourceIdentity
### Properties
* **userAssignedIdentity**: string (Required): The user assigned managed identity's resource identifier to use when accessing a resource.

## KeyVaultProperties
### Properties
* **currentKeyIdentifier**: string (ReadOnly): The current key used to encrypt Video Analyzer account, including the key version.
* **keyIdentifier**: string (Required): The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).

## Endpoint
### Properties
* **endpointUrl**: string: The URL of the endpoint.
* **type**: 'ClientApi' (Required): The type of the endpoint.

## StorageAccount
### Properties
* **id**: string: The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage).
* **identity**: [ResourceIdentity](#resourceidentity): The user assigned managed identity to use when accessing a resource.
* **status**: string (ReadOnly): The current status of the storage account mapping.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccessPolicyProperties
### Properties
* **authentication**: [AuthenticationBase](#authenticationbase): Base class for access policies authentication methods.
* **role**: 'Reader': Defines the access level granted by this policy.

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


## JwtAuthentication
### Properties
* **@type**: '#Microsoft.VideoAnalyzer.JwtAuthentication' (Required): The discriminator for derived types.
* **audiences**: string[]: List of expected token audiences. Token audience is valid if it matches at least one of the given values.
* **claims**: [TokenClaim](#tokenclaim)[]: List of additional token claims to be validated. Token must contains all claims and respective values for it to be valid.
* **issuers**: string[]: List of expected token issuers. Token issuer is valid if it matches at least one of the given values.
* **keys**: [TokenKey](#tokenkey)[]: List of keys which can be used to validate access tokens. Having multiple keys allow for seamless key rotation of the token signing key. Token signature must match exactly one key.

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
* **alg**: 'ES256' | 'ES384' | 'ES512' (Required): Elliptical curve algorithm to be used: ES256, ES384 or ES512.
* **x**: string (Required): X coordinate.
* **y**: string (Required): Y coordinate.

### RsaTokenKey
#### Properties
* **@type**: '#Microsoft.VideoAnalyzer.RsaTokenKey' (Required): The discriminator for derived types.
* **alg**: 'RS256' | 'RS384' | 'RS512' (Required): RSA algorithm to be used: RS256, RS384 or RS512.
* **e**: string (Required): RSA public key exponent.
* **n**: string (Required): RSA public key modulus.


## EccTokenKey
### Properties
* **@type**: '#Microsoft.VideoAnalyzer.EccTokenKey' (Required): The discriminator for derived types.
* **alg**: 'ES256' | 'ES384' | 'ES512' (Required): Elliptical curve algorithm to be used: ES256, ES384 or ES512.
* **x**: string (Required): X coordinate.
* **y**: string (Required): Y coordinate.

## RsaTokenKey
### Properties
* **@type**: '#Microsoft.VideoAnalyzer.RsaTokenKey' (Required): The discriminator for derived types.
* **alg**: 'RS256' | 'RS384' | 'RS512' (Required): RSA algorithm to be used: RS256, RS384 or RS512.
* **e**: string (Required): RSA public key exponent.
* **n**: string (Required): RSA public key modulus.

## EdgeModuleProperties
### Properties
* **edgeModuleId**: string (ReadOnly): Internal ID generated for the instance of the Video Analyzer edge module.

## VideoProperties
### Properties
* **description**: string: Optional video description provided by the user. Value can be up to 2048 characters long.
* **flags**: [VideoFlags](#videoflags) (ReadOnly): Video flags contain information about the available video actions and its dynamic properties based on the current video state.
* **mediaInfo**: [VideoMediaInfo](#videomediainfo) (ReadOnly): Contains information about the video and audio content.
* **streaming**: [VideoStreaming](#videostreaming) (ReadOnly): Video streaming holds information about video streaming URLs.
* **title**: string: Optional video title provided by the user. Value can be up to 256 characters long.
* **type**: 'Archive' (ReadOnly): Type of the video archive. Different archive formats provide different capabilities.

## VideoFlags
### Properties
* **canStream**: bool (Required): Value indicating whether or not the video can be streamed. Only "archive" type videos can be streamed.
* **hasData**: bool (Required): Value indicating whether or not there has ever been data recorded or uploaded into the video. Newly created videos have this value set to false.
* **isRecording**: bool (Required): Value indicating whether or not the video is currently being referenced be an active live pipeline. The fact that is being referenced, doesn't necessarily indicate that data is being received. For example, video recording may be gated on events or camera may not be accessible at the time.

## VideoMediaInfo
### Properties
* **segmentLength**: string (ReadOnly): Video segment length indicates the length of individual video files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments.

## VideoStreaming
### Properties
* **archiveBaseUrl**: string: Video streaming base URL for the video archive. When present, archived video can be played through the Azure Video Analyzer player. Alternatively, this URL can be used with compatible DASH or HLS players by appending the following to the base URL:

  - HLSv4:     /manifest(format=m3u8-aapl).m3u8
  - HLS CMAF:  /manifest(format=m3u8-cmaf)
  - DASH CMAF: /manifest(format=mpd-time-cmaf)

Moreover, an ongoing video recording can be played in "live mode" with latencies which are approximately double of the chosen video segment length.

