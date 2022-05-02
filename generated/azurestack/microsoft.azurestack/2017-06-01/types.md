# Microsoft.AzureStack @ 2017-06-01

## Resource Microsoft.AzureStack/cloudManifestFiles@2017-06-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudManifestFileProperties](#cloudmanifestfileproperties) (ReadOnly): Cloud specific manifest JSON properties.
* **type**: 'Microsoft.AzureStack/cloudManifestFiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStack/registrations@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: 'global' (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistrationParameterProperties](#registrationparameterproperties) (Required): Properties of the Azure Stack registration resource
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Custom tags for the resource.
* **type**: 'Microsoft.AzureStack/registrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStack/registrations/customerSubscriptions@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerSubscriptionProperties](#customersubscriptionproperties): Customer subscription properties.
* **type**: 'Microsoft.AzureStack/registrations/customerSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStack/registrations/products@2017-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductNestedProperties](#productnestedproperties) (ReadOnly): Properties portion of the product resource.
* **type**: 'Microsoft.AzureStack/registrations/products' (ReadOnly, DeployTimeConstant): The resource type

## Function listDetails (Microsoft.AzureStack/registrations/products@2017-06-01)
* **Resource**: Microsoft.AzureStack/registrations/products
* **ApiVersion**: 2017-06-01
* **Output**: [ExtendedProduct](#extendedproduct)

## CloudManifestFileProperties
### Properties
* **deploymentData**: [CloudManifestFileDeploymentData](#cloudmanifestfiledeploymentdata) (ReadOnly): Cloud specific manifest data for AzureStack deployment.
* **signature**: string (ReadOnly): Signature of the cloud specific manifest data.

## CloudManifestFileDeploymentData
### Properties
* **customCloudVerificationKey**: string (ReadOnly): Signing verification public key.
* **customEnvironmentEndpoints**: [CloudManifestFileEnvironmentEndpoints](#cloudmanifestfileenvironmentendpoints) (ReadOnly): Cloud specific environment endpoints for AzureStack deployment.
* **externalDsmsCertificates**: string (ReadOnly): Dsms external certificates.

## CloudManifestFileEnvironmentEndpoints
### Properties
* **customCloudArmEndpoint**: string (ReadOnly): ARM endpoint.
* **externalDsmsEndpoint**: string (ReadOnly): Dsms endpoint.

## RegistrationParameterProperties
### Properties
* **billingModel**: string (ReadOnly): Specifies the billing mode for the Azure Stack registration.
* **cloudId**: string (ReadOnly): The identifier of the registered Azure Stack.
* **objectId**: string (ReadOnly): The object identifier associated with the Azure Stack connecting to Azure.
* **registrationToken**: string (Required, WriteOnly): The token identifying registered Azure Stack

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomerSubscriptionProperties
### Properties
* **tenantId**: string: Tenant Id.

## ProductNestedProperties
### Properties
* **billingPartNumber**: string (ReadOnly): The part number used for billing purposes.
* **compatibility**: [Compatibility](#compatibility) (ReadOnly): Product compatibility
* **description**: string (ReadOnly): The description of the product.
* **displayName**: string (ReadOnly): The display name of the product.
* **galleryItemIdentity**: string (ReadOnly): The identifier of the gallery item corresponding to the product.
* **iconUris**: [IconUris](#iconuris) (ReadOnly): Links to product icons.
* **legalTerms**: string (ReadOnly): The legal terms.
* **links**: [ProductLink](#productlink)[] (ReadOnly): Additional links available for this product.
* **offer**: string (ReadOnly): The offer representing the product.
* **offerVersion**: string (ReadOnly): The version of the product offer.
* **payloadLength**: int (ReadOnly): The length of product content.
* **privacyPolicy**: string (ReadOnly): The privacy policy.
* **productKind**: string (ReadOnly): The kind of the product (virtualMachine or virtualMachineExtension)
* **productProperties**: [ProductProperties](#productproperties) (ReadOnly): Additional properties of the product
* **publisherDisplayName**: string (ReadOnly): The user-friendly name of the product publisher.
* **publisherIdentifier**: string (ReadOnly): Publisher identifier.
* **sku**: string (ReadOnly): The product SKU.
* **vmExtensionType**: string (ReadOnly): The type of the Virtual Machine Extension.

## Compatibility
### Properties
* **description**: string (ReadOnly): Full error message if any compatibility issues are found
* **isCompatible**: bool (ReadOnly): Tells if product is compatible with current device
* **issues**: 'ADFSIdentitySystemRequired' | 'AzureADIdentitySystemRequired' | 'CapacityBillingModelRequired' | 'ConnectionToAzureRequired' | 'ConnectionToInternetRequired' | 'DevelopmentBillingModelRequired' | 'DisconnectedEnvironmentRequired' | 'HigherDeviceVersionRequired' | 'LowerDeviceVersionRequired' | 'PayAsYouGoBillingModelRequired'[] (ReadOnly): List of all issues found
* **message**: string (ReadOnly): Short error message if any compatibility issues are found

## IconUris
### Properties
* **hero**: string (ReadOnly): URI to hero icon.
* **large**: string (ReadOnly): URI to large icon.
* **medium**: string (ReadOnly): URI to medium icon.
* **small**: string (ReadOnly): URI to small icon.
* **wide**: string (ReadOnly): URI to wide icon.

## ProductLink
### Properties
* **displayName**: string (ReadOnly): The description of the link.
* **uri**: string (ReadOnly): The URI corresponding to the link.

## ProductProperties
### Properties
* **version**: string (ReadOnly): The version.

## ExtendedProduct
### Properties
* **galleryPackageBlobSasUri**: string (ReadOnly): The URI to the .azpkg file that provides information required for showing product in the gallery.
* **productKind**: string (ReadOnly): Specifies the kind of the product (virtualMachine or virtualMachineExtension).
* **properties**: [ExtendedProductProperties](#extendedproductproperties) (ReadOnly): Product information.

## ExtendedProductProperties
### Properties
* **computeRole**: 'IaaS' | 'None' | 'PaaS' (ReadOnly): Compute role type (IaaS or PaaS).
* **dataDiskImages**: [DataDiskImage](#datadiskimage)[] (ReadOnly): List of attached data disks.
* **isSystemExtension**: bool (ReadOnly): Specifies if product is a Virtual Machine Extension.
* **osDiskImage**: [OsDiskImage](#osdiskimage) (ReadOnly): OS disk image.
* **sourceBlob**: [Uri](#uri) (ReadOnly): The URI.
* **supportMultipleExtensions**: bool (ReadOnly): Indicates if specified product supports multiple extensions.
* **version**: string (ReadOnly): Specifies product version.
* **vmOsType**: 'Linux' | 'None' | 'Windows' (ReadOnly): Operating system type (Windows or Linux).
* **vmScaleSetEnabled**: bool (ReadOnly): Indicates if virtual machine Scale Set is enabled in the specified product.

## DataDiskImage
### Properties
* **lun**: int (ReadOnly): The LUN.
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## OsDiskImage
### Properties
* **operatingSystem**: 'Linux' | 'None' | 'Windows' (ReadOnly): Operating system type (Windows or Linux).
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## Uri
### Properties
* **uri**: string (ReadOnly): The URI.

