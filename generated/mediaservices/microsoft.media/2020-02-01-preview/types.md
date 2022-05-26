# Microsoft.Media @ 2020-02-01-preview

## Resource Microsoft.Media/mediaServices/mediaGraphs@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaGraphProperties](#mediagraphproperties): Class for Media Graph properties.
* **type**: 'Microsoft.Media/mediaServices/mediaGraphs' (ReadOnly, DeployTimeConstant): The resource type

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
* **endpoint**: [MediaGraphEndpoint](#mediagraphendpoint) (Required): Base class for endpoints.
* **transport**: 'Http' | 'Tcp' | string (Required): Underlying RTSP transport. This can be used to enable or disable HTTP tunneling.


## MediaGraphEndpoint
* **Discriminator**: @odata.type

### Base Properties
* **credentials**: [MediaGraphCredentials](#mediagraphcredentials): Credentials to present during authentication.
* **url**: string (Required): Url for the endpoint.
### MediaGraphClearEndpoint
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphClearEndpoint' (Required): The discriminator for derived types.

### MediaGraphTlsEndpoint
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphTlsEndpoint' (Required): The discriminator for derived types.
* **trustedCertificates**: [MediaGraphCertificateSource](#mediagraphcertificatesource): Base class for certificate sources.
* **validationOptions**: [MediaGraphTlsValidationOptions](#mediagraphtlsvalidationoptions): Options for controlling the authentication of TLS endpoints.


## MediaGraphCredentials
* **Discriminator**: @odata.type

### Base Properties
### MediaGraphUsernamePasswordCredentials
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphUsernamePasswordCredentials' (Required): The discriminator for derived types.
* **password**: string (Required): Password for a username/password pair.
* **username**: string (Required): Username for a username/password pair.


## MediaGraphCertificateSource
* **Discriminator**: @odata.type

### Base Properties
### MediaGraphPemCertificateList
#### Properties
* **@odata.type**: '#Microsoft.Media.MediaGraphPemCertificateList' (Required): The discriminator for derived types.
* **certificates**: string[] (Required): PEM formatted public certificates, one per entry.


## MediaGraphTlsValidationOptions
### Properties
* **ignoreHostname**: bool (Required): Ignore the host name (common name) during validation.
* **ignoreSignature**: bool (Required): Ignore the integrity of the certificate chain at the current time.

