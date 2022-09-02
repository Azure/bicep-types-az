# Microsoft.Media @ 2019-09-01-preview

## Resource Microsoft.Media/mediaServices/mediaGraphs@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaGraphProperties](#mediagraphproperties): Class for Media Graph properties
* **type**: 'Microsoft.Media/mediaServices/mediaGraphs' (ReadOnly, DeployTimeConstant): The resource type

## MediaGraphProperties
### Properties
* **created**: string (ReadOnly): Date the Media Graph was created
* **description**: string: Media Graph  description
* **lastModified**: string (ReadOnly): Date the Media Graph was last modified
* **sinks**: [MediaGraphSink](#mediagraphsink)[] (Required): Media Graph sinks
* **sources**: [MediaGraphSource](#mediagraphsource)[] (Required): Media Graph sources
* **state**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Media Graph state

## MediaGraphSink
* **Discriminator**: @odata.type

### Base Properties
* **inputs**: string[] (Required): Sink inputs
* **name**: string (Required): Sink name

### MediaGraphAssetSink
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphAssetSink' (Required): The discriminator for derived types.
* **assetName**: string (Required): Asset name


## MediaGraphSource
* **Discriminator**: @odata.type

### Base Properties
* **name**: string (Required): Source name

### MediaGraphRtspSource
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphRtspSource' (Required): The discriminator for derived types.
* **credentials**: [MediaGraphUserCredentials](#mediagraphusercredentials): RTSP Credentials
* **rtspUrl**: string (Required): RTSP URL


## MediaGraphUserCredentials
### Properties
* **password**: string (Required): Password credential
* **username**: string (Required): User name

