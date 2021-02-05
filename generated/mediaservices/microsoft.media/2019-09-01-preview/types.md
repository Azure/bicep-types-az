# Microsoft.Media @ 2019-09-01-preview

## Resource Microsoft.Media/mediaServices/mediaGraphs@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MediaGraphProperties
* **type**: 'Microsoft.Media/mediaServices/mediaGraphs' (ReadOnly, DeployTimeConstant)

## MediaGraphProperties
### Properties
* **created**: string (ReadOnly)
* **description**: string
* **lastModified**: string (ReadOnly)
* **sinks**: MediaGraphSink[] (Required)
* **sources**: MediaGraphSource[] (Required)
* **state**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)

## MediaGraphSink
* **Discriminator**: @odata.type
### Base Properties
* **inputs**: string[] (Required)
* **name**: string (Required)
### #Microsoft.Media.MediaGraphAssetSink
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphAssetSink' (Required)
* **assetName**: string (Required)


## #Microsoft.Media.MediaGraphAssetSink
### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphAssetSink' (Required)
* **assetName**: string (Required)

## MediaGraphSource
* **Discriminator**: @odata.type
### Base Properties
* **name**: string (Required)
### #Microsoft.Media.MediaGraphRtspSource
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphRtspSource' (Required)
* **credentials**: MediaGraphUserCredentials
* **rtspUrl**: string (Required)


## #Microsoft.Media.MediaGraphRtspSource
### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphRtspSource' (Required)
* **credentials**: MediaGraphUserCredentials
* **rtspUrl**: string (Required)

## MediaGraphUserCredentials
### Properties
* **password**: string (Required)
* **username**: string (Required)

