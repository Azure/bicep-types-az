# Microsoft.Media @ 2019-09-01-preview

## Resource Microsoft.Media/mediaServices/mediaGraphs@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MediaGraphProperties](#mediagraphproperties)
* **type**: 'Microsoft.Media/mediaServices/mediaGraphs' (ReadOnly, DeployTimeConstant)

## MediaGraphProperties
### Properties
* **created**: string (ReadOnly)
* **description**: string
* **lastModified**: string (ReadOnly)
* **sinks**: [MediaGraphSink](#mediagraphsink)[] (Required)
* **sources**: [MediaGraphSource](#mediagraphsource)[] (Required)
* **state**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)

## MediaGraphSink
* **Discriminator**: @odata.type

### Base Properties
* **inputs**: string[] (Required)
* **name**: string (Required)
### MediaGraphAssetSink
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphAssetSink' (Required)
* **assetName**: string (Required)


## MediaGraphAssetSink
### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphAssetSink' (Required)
* **assetName**: string (Required)

## MediaGraphSource
* **Discriminator**: @odata.type

### Base Properties
* **name**: string (Required)
### MediaGraphRtspSource
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphRtspSource' (Required)
* **credentials**: [MediaGraphUserCredentials](#mediagraphusercredentials)
* **rtspUrl**: string (Required)


## MediaGraphRtspSource
### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphRtspSource' (Required)
* **credentials**: [MediaGraphUserCredentials](#mediagraphusercredentials)
* **rtspUrl**: string (Required)

## MediaGraphUserCredentials
### Properties
* **password**: string (Required)
* **username**: string (Required)

