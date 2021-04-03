# Microsoft.AzureBridge.Admin @ 2016-01-01

## Resource Microsoft.AzureBridge.Admin/activations@2016-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **azureRegistrationResourceIdentifier**: string (WriteOnly): Azure registration resource identifier.
* **displayName**: string (WriteOnly): Name displayed for the product.
* **expiration**: string (WriteOnly): The activation expiration.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource
* **marketplaceSyndicationEnabled**: bool (WriteOnly): Value indicating whether the marketplace syndication feature is enabled.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Activation](#activation) (ReadOnly): Holds properties related to activation.
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (WriteOnly): Provisioning state of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): List of key value pairs.
* **type**: 'Microsoft.AzureBridge.Admin/activations' (ReadOnly, DeployTimeConstant): The resource type
* **usageReportingEnabled**: bool (WriteOnly): Value indicating whether the usage reporting feature is enabled.

## Resource Microsoft.AzureBridge.Admin/activations/downloadedProducts@2016-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DownloadedProduct](#downloadedproduct): Properties for aggregate usage.
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): List of key value pairs.
* **type**: 'Microsoft.AzureBridge.Admin/activations/downloadedProducts' (ReadOnly, DeployTimeConstant): The resource type

## Activation
### Properties
* **azureRegistrationResourceIdentifier**: string (ReadOnly): Azure registration resource identifier.
* **displayName**: string (ReadOnly): Name displayed for the product.
* **expiration**: string (ReadOnly): The activation expiration.
* **marketplaceSyndicationEnabled**: bool (ReadOnly): Value indicating whether the marketplace syndication feature is enabled.
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (ReadOnly): Provisioning state of the resource.
* **usageReportingEnabled**: bool (ReadOnly): Value indicating whether the usage reporting feature is enabled.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DownloadedProduct
### Properties
* **billingPartNumber**: string: Billing part number.
* **compatibility**: [Compatibility](#compatibility): Product compatibility
* **description**: string: Description of the product.
* **displayName**: string: Name displayed for the product.
* **galleryItemIdentity**: string: Gallery item identity.
* **galleryPackageBlobSasUri**: string: The URI to the .azpkg file that provides information required for showing product in the gallery.
* **iconUris**: [GalleryIcons](#galleryicons): Icons for the gallery items.
* **legalTerms**: string: Legal terms for the product.
* **links**: [ProductLink](#productlink)[]: List of product links.
* **offer**: string: Offer name.
* **offerVersion**: string: Offer version.
* **payloadLength**: int: Size in bytes.
* **privacyPolicy**: string: Privacy policy of the product.
* **productDetailsProperties**: [ExtendedProductProperties](#extendedproductproperties) (ReadOnly): Product information.
* **productKind**: string: The kind. E.g. VirtualMachineProductProperties.ProductKind or WebApp, SolutionTemplate.
* **productProperties**: [ProductProperties](#productproperties): Additional properties of the product
* **provisioningState**: 'Downloading' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded': Provisioning state of the resource.
* **publisherDisplayName**: string: Name of publisher.
* **publisherIdentifier**: string: Publisher identifier.
* **sku**: string: Product SKU.
* **vmExtensionType**: string: Extension type of the VM.

## Compatibility
### Properties
* **description**: string: Full error message if any compatibility issues are found
* **isCompatible**: bool: Tells if product is compatible with current device
* **issues**: 'ADFSIdentitySystemRequired' | 'AzureADIdentitySystemRequired' | 'CapacityBillingModelRequired' | 'ConnectionToAzureRequired' | 'ConnectionToInternetRequired' | 'DevelopmentBillingModelRequired' | 'DisconnectedEnvironmentRequired' | 'HigherDeviceVersionRequired' | 'LowerDeviceVersionRequired' | 'PayAsYouGoBillingModelRequired'[]: List of all issues found
* **message**: string: Short error message if any compatibility issues are found

## GalleryIcons
### Properties
* **hero**: string: The hero (815x290) icon relative path.
* **large**: string: The large (115x115) icon relative path.
* **medium**: string: The medium (90x90) icon relative path.
* **small**: string: The small (40x40) icon relative path.
* **wide**: string: The wide (255x115) icon relative path.

## ProductLink
### Properties
* **displayName**: string: Displayed name of product.
* **uri**: string: URI to product.

## ExtendedProductProperties
### Properties
* **computeRole**: 'IaaS' | 'None' | 'PaaS' (ReadOnly): Specifies kind of compute role included in the package.
* **dataDiskImages**: [DataDiskImage](#datadiskimage)[] (ReadOnly): List of attached data disks.
* **isSystemExtension**: bool: Specifies if product is a Virtual Machine Extension.
* **osDiskImage**: [OsDiskImage](#osdiskimage) (ReadOnly): OS disk image.
* **sourceBlob**: [Uri](#uri) (ReadOnly): The URI.
* **supportMultipleExtensions**: bool: Indicates if specified product supports multiple extensions.
* **version**: string: Specifies product version.
* **vmOsType**: 'Linux' | 'None' | 'Windows' (ReadOnly): Specifies operating system used by the product.
* **vmScaleSetEnabled**: bool: Indicates if virtual machine Scale Set is enabled in the specified product.

## DataDiskImage
### Properties
* **lun**: int (ReadOnly): The LUN.
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## OsDiskImage
### Properties
* **operatingSystem**: 'Linux' | 'None' | 'Windows' (ReadOnly): OS operating system type.
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## Uri
### Properties
* **uri**: string: The URI.

## ProductProperties
### Properties
* **version**: string: The version of the product

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

