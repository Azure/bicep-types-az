# Microsoft.AzureBridge.Admin @ 2016-01-01

## Resource Microsoft.AzureBridge.Admin/activations@2016-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant)
* **azureRegistrationResourceIdentifier**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **expiration**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **marketplaceSyndicationEnabled**: bool (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Activation (ReadOnly)
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (WriteOnly)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.AzureBridge.Admin/activations' (ReadOnly, DeployTimeConstant)
* **usageReportingEnabled**: bool (WriteOnly)

## Resource Microsoft.AzureBridge.Admin/activations/downloadedProducts@2016-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DownloadedProduct
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.AzureBridge.Admin/activations/downloadedProducts' (ReadOnly, DeployTimeConstant)

## Activation
### Properties
* **azureRegistrationResourceIdentifier**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **expiration**: string (ReadOnly)
* **marketplaceSyndicationEnabled**: bool (ReadOnly)
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (ReadOnly)
* **usageReportingEnabled**: bool (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## DownloadedProduct
### Properties
* **billingPartNumber**: string
* **compatibility**: Compatibility
* **description**: string
* **displayName**: string
* **galleryItemIdentity**: string
* **galleryPackageBlobSasUri**: string
* **iconUris**: GalleryIcons
* **legalTerms**: string
* **links**: ProductLink[]
* **offer**: string
* **offerVersion**: string
* **payloadLength**: int
* **privacyPolicy**: string
* **productDetailsProperties**: ExtendedProductProperties (ReadOnly)
* **productKind**: string
* **productProperties**: ProductProperties
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded'
* **publisherDisplayName**: string
* **publisherIdentifier**: string
* **sku**: string
* **vmExtensionType**: string

## Compatibility
### Properties
* **description**: string
* **isCompatible**: bool
* **issues**: 'ADFSIdentitySystemRequired' | 'AzureADIdentitySystemRequired' | 'CapacityBillingModelRequired' | 'ConnectionToAzureRequired' | 'ConnectionToInternetRequired' | 'DevelopmentBillingModelRequired' | 'DisconnectedEnvironmentRequired' | 'HigherDeviceVersionRequired' | 'LowerDeviceVersionRequired' | 'PayAsYouGoBillingModelRequired'[]
* **message**: string

## GalleryIcons
### Properties
* **hero**: string
* **large**: string
* **medium**: string
* **small**: string
* **wide**: string

## ProductLink
### Properties
* **displayName**: string
* **uri**: string

## ExtendedProductProperties
### Properties
* **computeRole**: 'IaaS' | 'None' | 'PaaS' (ReadOnly)
* **dataDiskImages**: DataDiskImage[] (ReadOnly)
* **isSystemExtension**: bool
* **osDiskImage**: OsDiskImage (ReadOnly)
* **sourceBlob**: Uri (ReadOnly)
* **supportMultipleExtensions**: bool
* **version**: string
* **vmOsType**: 'Linux' | 'None' | 'Windows' (ReadOnly)
* **vmScaleSetEnabled**: bool

## DataDiskImage
### Properties
* **lun**: int (ReadOnly)
* **sourceBlobSasUri**: string (ReadOnly)

## OsDiskImage
### Properties
* **operatingSystem**: 'Linux' | 'None' | 'Windows' (ReadOnly)
* **sourceBlobSasUri**: string (ReadOnly)

## Uri
### Properties
* **uri**: string

## ProductProperties
### Properties
* **version**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

