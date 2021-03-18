# Microsoft.Media @ 2020-02-01-preview

## Resource Microsoft.Media/mediaServices/mediaGraphs@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
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
* **endpoint**: [MediaGraphEndpoint](#mediagraphendpoint) (Required)
* **transport**: 'Http' | 'Tcp' (Required)


## MediaGraphRtspSource
### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphRtspSource' (Required)
* **endpoint**: [MediaGraphEndpoint](#mediagraphendpoint) (Required)
* **transport**: 'Http' | 'Tcp' (Required)

## MediaGraphEndpoint
* **Discriminator**: @odata.type

### Base Properties
* **credentials**: [MediaGraphCredentials](#mediagraphcredentials)
* **url**: string (Required)
### MediaGraphClearEndpoint
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphClearEndpoint' (Required)

### MediaGraphTlsEndpoint
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphTlsEndpoint' (Required)
* **trustedCertificates**: [MediaGraphCertificateSource](#mediagraphcertificatesource)
* **validationOptions**: [MediaGraphTlsValidationOptions](#mediagraphtlsvalidationoptions)


## MediaGraphCredentials
* **Discriminator**: @odata.type

### Base Properties
### MediaGraphUsernamePasswordCredentials
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphUsernamePasswordCredentials' (Required)
* **password**: string (Required)
* **username**: string (Required)


## MediaGraphUsernamePasswordCredentials
### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphUsernamePasswordCredentials' (Required)
* **password**: string (Required)
* **username**: string (Required)

## MediaGraphClearEndpoint
### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphClearEndpoint' (Required)

## MediaGraphTlsEndpoint
### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphTlsEndpoint' (Required)
* **trustedCertificates**: [MediaGraphCertificateSource](#mediagraphcertificatesource)
* **validationOptions**: [MediaGraphTlsValidationOptions](#mediagraphtlsvalidationoptions)

## MediaGraphCertificateSource
* **Discriminator**: @odata.type

### Base Properties
### MediaGraphPemCertificateList
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphPemCertificateList' (Required)
* **certificates**: string[] (Required)


## MediaGraphPemCertificateList
### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphPemCertificateList' (Required)
* **certificates**: string[] (Required)

## MediaGraphTlsValidationOptions
### Properties
* **ignoreHostname**: bool (Required)
* **ignoreSignature**: bool (Required)

