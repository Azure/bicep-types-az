# Microsoft.Media @ 2019-05-01-preview

## Resource Microsoft.Media/mediaservices/liveEvents@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveEventProperties](#liveeventproperties): The Live Event properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/liveEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/liveEvents/liveOutputs@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LiveOutputProperties](#liveoutputproperties): The JSON object that contains the properties required to create a Live Output.
* **type**: 'Microsoft.Media/mediaservices/liveEvents/liveOutputs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/streamingEndpoints@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StreamingEndpointProperties](#streamingendpointproperties): The StreamingEndpoint properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Media/mediaservices/streamingEndpoints' (ReadOnly, DeployTimeConstant): The resource type

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
* **streamOptions**: 'Default' | 'LowLatency'[]: The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated.
* **transcriptions**: [LiveEventTranscription](#liveeventtranscription)[]: The Live Event transcription.
* **vanityUrl**: bool: Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated.

## CrossSiteAccessPolicies
### Properties
* **clientAccessPolicy**: string: The content of clientaccesspolicy.xml used by Silverlight.
* **crossDomainPolicy**: string: The content of crossdomain.xml used by Silverlight.

## LiveEventEncoding
### Properties
* **encodingType**: 'Basic' | 'None' | 'Premium1080p' | 'Standard': The encoding type for Live Event.  This value is specified at creation time and cannot be updated. Possible values include: 'None', 'Basic', 'Standard', 'Premium1080p'
* **presetName**: string: The encoding preset name.  This value is specified at creation time and cannot be updated.

## LiveEventInput
### Properties
* **accessControl**: [LiveEventInputAccessControl](#liveeventinputaccesscontrol): The IP access control for Live Event Input.
* **accessToken**: string: A unique identifier for a stream.  This can be specified at creation time but cannot be updated.  If omitted, the service will generate a unique value.
* **endpoints**: [LiveEventEndpoint](#liveeventendpoint)[]: The input endpoints for the Live Event.
* **keyFrameIntervalDuration**: string: ISO 8601 timespan duration of the key frame interval duration.
* **streamingProtocol**: 'FragmentedMP4' | 'RTMP' (Required): The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated. Possible values include: 'FragmentedMP4', 'RTMP'

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

## LiveEventTranscription
### Properties
* **inputTrackSelection**: [LiveEventInputTrackSelection](#liveeventinputtrackselection)[]: Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied.
* **language**: string: Specifies the language (locale) used for speech-to-text transcription - it should match the spoken language in the audio track. The value should be in BCP-47 format of 'language tag-region' (e.g: 'en-US'). The list of supported languages are 'en-US' and 'en-GB'.
* **outputTranscriptionTrack**: [LiveEventOutputTranscriptionTrack](#liveeventoutputtranscriptiontrack): Describes a transcription track in the output of a Live Event, generated using speech-to-text transcription.

## LiveEventInputTrackSelection
### Properties
* **operation**: string: Comparing operation.
* **property**: string: Property name to select.
* **value**: string: Property value to select.

## LiveEventOutputTranscriptionTrack
### Properties
* **trackName**: string (Required): The output track name.

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
* **resourceState**: 'Creating' | 'Deleting' | 'Running' (ReadOnly): The resource state of the Live Output. Possible values include: 'Creating', 'Running', 'Deleting'

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
* **resourceState**: 'Deleting' | 'Running' | 'Scaling' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): The resource state of the StreamingEndpoint. Possible values include: 'Stopped', 'Starting', 'Running', 'Stopping', 'Deleting', 'Scaling'
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

