# Microsoft.Media @ 2019-05-01-preview

## Resource Microsoft.Media/mediaservices/liveEvents@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LiveEventProperties](#liveeventproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LiveOutputProperties](#liveoutputproperties)
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant)

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
* **transcriptions**: [LiveEventTranscription](#liveeventtranscription)[]
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

