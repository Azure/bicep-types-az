# Microsoft.Media @ 2019-05-01-preview

## Resource Microsoft.Media/mediaservices/liveEvents@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LiveEventProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LiveOutputProperties
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: StreamingEndpointProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant)

## LiveEventProperties
### Properties
* **created**: string (ReadOnly)
* **crossSiteAccessPolicies**: CrossSiteAccessPolicies
* **description**: string
* **encoding**: LiveEventEncoding
* **input**: LiveEventInput (Required)
* **lastModified**: string (ReadOnly)
* **preview**: LiveEventPreview
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **streamOptions**: 'Default' | 'LowLatency'[]
* **transcriptions**: LiveEventTranscription[]
* **vanityUrl**: bool

## CrossSiteAccessPolicies
### Properties
* **clientAccessPolicy**: string
* **crossDomainPolicy**: string

## LiveEventEncoding
### Properties
* **encodingType**: 'Basic' | 'None' | 'Premium1080p' | 'Standard'
* **presetName**: string

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

