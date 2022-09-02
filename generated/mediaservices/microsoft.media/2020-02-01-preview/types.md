# Microsoft.Media @ 2020-02-01-preview

## Resource Microsoft.Media/mediaServices/mediaGraphs@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaGraphProperties](#mediagraphproperties): Class for Media Graph properties.
* **type**: 'Microsoft.Media/mediaServices/mediaGraphs' (ReadOnly, DeployTimeConstant): The resource type

## MediaGraphCertificateSource
* **Discriminator**: @odata.type

### Base Properties

### MediaGraphPemCertificateList
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphPemCertificateList' (Required): The discriminator for derived types.
* **certificates**: string[] (Required): PEM formatted public certificates, one per entry.


## MediaGraphCredentials
* **Discriminator**: @odata.type

### Base Properties

### MediaGraphUsernamePasswordCredentials
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphUsernamePasswordCredentials' (Required): The discriminator for derived types.
* **password**: string (Required): Password for a username/password pair.
* **username**: string (Required): Username for a username/password pair.


## MediaGraphEndpoint
* **Discriminator**: @odata.type

### Base Properties
* **credentials**: [MediaGraphCredentials](#mediagraphcredentials): Polymorphic credentials to present to the endpoint.
* **url**: string (Required): Url for the endpoint.

### MediaGraphClearEndpoint
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphClearEndpoint' (Required): The discriminator for derived types.

### MediaGraphTlsEndpoint
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphTlsEndpoint' (Required): The discriminator for derived types.
* **trustedCertificates**: [MediaGraphCertificateSource](#mediagraphcertificatesource): What certificates should be trusted when authenticating a TLS connection. Null designates that Azure Media's source of trust should be used.
* **validationOptions**: [MediaGraphTlsValidationOptions](#mediagraphtlsvalidationoptions): Validation options to use when authenticating a TLS connection. By default, strict validation is used.


## MediaGraphProperties
### Properties
* **created**: string (ReadOnly): Date the Media Graph was created.
* **description**: string: Media Graph description.
* **lastModified**: string (ReadOnly): Date the Media Graph was last modified.
* **sinks**: [MediaGraphSink](#mediagraphsink)[] (Required): Media Graph sinks.
* **sources**: [MediaGraphSource](#mediagraphsource)[] (Required): Media Graph sources.
* **state**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Media Graph state which indicates the resource allocation status for running the media graph pipeline.

## MediaGraphSink
* **Discriminator**: @odata.type

### Base Properties
* **inputs**: string[] (Required): Sink inputs.
* **name**: string (Required): Sink name.

### MediaGraphAssetSink
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphAssetSink' (Required): The discriminator for derived types.
* **assetName**: string (Required): Asset name.


## MediaGraphSource
* **Discriminator**: @odata.type

### Base Properties
* **name**: string (Required): Source name.

### MediaGraphRtspSource
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphRtspSource' (Required): The discriminator for derived types.
* **endpoint**: [MediaGraphEndpoint](#mediagraphendpoint) (Required): RTSP endpoint of the stream being connected to.
* **transport**: 'Http' | 'Tcp' | string (Required): Underlying RTSP transport. This can be used to enable or disable HTTP tunneling.


## MediaGraphTlsValidationOptions
### Properties
* **ignoreHostname**: bool (Required): Ignore the host name (common name) during validation.
* **ignoreSignature**: bool (Required): Ignore the integrity of the certificate chain at the current time.

