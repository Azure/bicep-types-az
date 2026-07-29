# Microsoft.AzureBridge.Admin @ 2016-01-01

## Resource Microsoft.AzureBridge.Admin/activations@2016-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **azureRegistrationResourceIdentifier**: string (WriteOnly): Azure registration resource identifier.
* **displayName**: string (WriteOnly): Name displayed for the product.
* **expiration**: string (WriteOnly): The activation expiration.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource
* **marketplaceSyndicationEnabled**: bool (WriteOnly): Value indicating whether the marketplace syndication feature is enabled.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Activation](#activation) (ReadOnly): Properties of the resource.
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' | string (WriteOnly): Provisioning state of the resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key value pairs.
* **type**: 'Microsoft.AzureBridge.Admin/activations' (ReadOnly, DeployTimeConstant): The resource type
* **usageReportingEnabled**: bool (WriteOnly): Value indicating whether the usage reporting feature is enabled.

## Resource Microsoft.AzureBridge.Admin/activations/downloadedProducts@2016-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DownloadedProduct](#downloadedproduct): Properties of the resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key value pairs.
* **type**: 'Microsoft.AzureBridge.Admin/activations/downloadedProducts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureBridge.Admin/activations/products@2016-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Product](#product) (ReadOnly): Properties of the resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key value pairs.
* **type**: 'Microsoft.AzureBridge.Admin/activations/products' (ReadOnly, DeployTimeConstant): The resource type

## Function download (Microsoft.AzureBridge.Admin/activations/products@2016-01-01)
* **Resource**: Microsoft.AzureBridge.Admin/activations/products
* **ApiVersion**: 2016-01-01
* **Output**: [DownloadedProductResource](#downloadedproductresource)

## Activation
### Properties
* **azureRegistrationResourceIdentifier**: string: Azure registration resource identifier.
* **displayName**: string: Name displayed for the product.
* **expiration**: string: The activation expiration.
* **marketplaceSyndicationEnabled**: bool: Value indicating whether the marketplace syndication feature is enabled.
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' | string: Provisioning state of the resource.
* **usageReportingEnabled**: bool: Value indicating whether the usage reporting feature is enabled.

## Compatibility
### Properties
* **description**: string: Full error message if any compatibility issues are found
* **isCompatible**: bool: Tells if product is compatible with current device
* **issues**: ('ADFSIdentitySystemRequired' | 'AzureADIdentitySystemRequired' | 'CapacityBillingModelRequired' | 'ConnectionToAzureRequired' | 'ConnectionToInternetRequired' | 'DevelopmentBillingModelRequired' | 'DisconnectedEnvironmentRequired' | 'HigherDeviceVersionRequired' | 'LowerDeviceVersionRequired' | 'PayAsYouGoBillingModelRequired' | string)[]: List of all issues found
* **message**: string: Short error message if any compatibility issues are found

## DataDiskImage
### Properties
* **lun**: int (ReadOnly): The LUN.
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## DownloadedProduct
### Properties
* **billingPartNumber**: string: Billing part number.
* **compatibility**: [Compatibility](#compatibility): Product compatibility with current device.
* **description**: string: Description of the product.
* **displayName**: string: Name displayed for the product.
* **galleryItemIdentity**: string: Gallery item identity.
* **galleryPackageBlobSasUri**: string: The URI to the .azpkg file that provides information required for showing product in the gallery.
* **iconUris**: [GalleryIcons](#galleryicons): Information about gallery icons.
* **legalTerms**: string: Legal terms for the product.
* **links**: [ProductLink](#productlink)[]: Gallery item identity.
* **offer**: string: Offer name.
* **offerVersion**: string: Offer version.
* **payloadLength**: int: Size in bytes.
* **privacyPolicy**: string: Privacy policy of the product.
* **productDetailsProperties**: [ExtendedProductProperties](#extendedproductproperties) (ReadOnly): Specifies additional properties describing the product.
* **productKind**: string: The kind. E.g. VirtualMachineProductProperties.ProductKind or WebApp, SolutionTemplate.
* **productProperties**: [ProductProperties](#productproperties): the product properties. At the moment only VirtualMachineProductProperties is allowed.
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' | string: Provisioning state of the resource.
* **publisherDisplayName**: string: Name of publisher.
* **publisherIdentifier**: string: Publisher identifier.
* **sku**: string: Product SKU.
* **vmExtensionType**: string: Extension type of the VM.

## DownloadedProductResource
### Properties
* **id**: string: URI of the resource.
* **location**: string (ReadOnly): Location of the resource
* **name**: string: Name of the resource.
* **properties**: [DownloadedProduct](#downloadedproduct): Properties of the resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key value pairs.
* **type**: string: Type of resource.

## ExtendedProductProperties
### Properties
* **computeRole**: 'IaaS' | 'None' | 'PaaS' | string (ReadOnly): Specifies kind of compute role included in the package.
* **dataDiskImages**: [DataDiskImage](#datadiskimage)[] (ReadOnly): List of attached data disks.
* **isSystemExtension**: bool: Specifies if product is a Virtual Machine Extension.
* **osDiskImage**: [OsDiskImage](#osdiskimage) (ReadOnly): OS disk image used by product.
* **sourceBlob**: [Uri](#uri) (ReadOnly): Specifies a download location where content can be downloaded from.
* **supportMultipleExtensions**: bool: Indicates if specified product supports multiple extensions.
* **version**: string: Specifies product version.
* **vmOsType**: 'Linux' | 'None' | 'Windows' | string (ReadOnly): Specifies operating system used by the product.
* **vmScaleSetEnabled**: bool: Indicates if virtual machine Scale Set is enabled in the specified product.

## GalleryIcons
### Properties
* **hero**: string: The hero (815x290) icon relative path.
* **large**: string: The large (115x115) icon relative path.
* **medium**: string: The medium (90x90) icon relative path.
* **small**: string: The small (40x40) icon relative path.
* **wide**: string: The wide (255x115) icon relative path.

## OsDiskImage
### Properties
* **operatingSystem**: 'Linux' | 'None' | 'Windows' | string (ReadOnly): OS operating system type.
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## Product
### Properties
* **billingPartNumber**: string: Billing part number.
* **compatibility**: [Compatibility](#compatibility): Product compatibility with current device.
* **description**: string: Description of the product.
* **displayName**: string: Name displayed for the product.
* **galleryItemIdentity**: string: Gallery item identity.
* **iconUris**: [GalleryIcons](#galleryicons): Information about gallery icons.
* **legalTerms**: string: Legal terms for the product.
* **links**: [ProductLink](#productlink)[]: Gallery item identity.
* **offer**: string: Offer name.
* **offerVersion**: string: Offer version.
* **payloadLength**: int: Size in bytes.
* **privacyPolicy**: string: Privacy policy of the product.
* **productKind**: string: The kind. E.g. VirtualMachineProductProperties.ProductKind or WebApp, SolutionTemplate.
* **productProperties**: [ProductProperties](#productproperties): the product properties. At the moment only VirtualMachineProductProperties is allowed.
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' | string: Provisioning state of the resource.
* **publisherDisplayName**: string: Name of publisher.
* **publisherIdentifier**: string: Publisher identifier.
* **sku**: string: Product SKU.
* **vmExtensionType**: string: Extension type of the VM.

## ProductLink
### Properties
* **displayName**: string: Displayed name of product.
* **uri**: string: URI to product.

## ProductProperties
### Properties
* **version**: string: The version of the product

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Uri
### Properties
* **uri**: string: The URI.

