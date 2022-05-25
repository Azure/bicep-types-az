# Microsoft.AzureStack @ 2016-01-01

## Resource Microsoft.AzureStack/registrations@2016-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: 'global' | string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistrationParameterProperties](#registrationparameterproperties) (Required): Properties of the Azure Stack registration resource
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.AzureStack/registrations' (ReadOnly, DeployTimeConstant): The resource type

## Function listDetails (Microsoft.AzureStack/registrations/products@2016-01-01)
* **Resource**: Microsoft.AzureStack/registrations/products
* **ApiVersion**: 2016-01-01
* **Output**: [ExtendedProduct](#extendedproduct)

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

## ExtendedProduct
### Properties
* **galleryPackageBlobSasUri**: string (ReadOnly): The URI to the .azpkg file that provides information required for showing product in the gallery.
* **productKind**: string (ReadOnly): Specifies the kind of the product (virtualMachine or virtualMachineExtension).
* **properties**: [ExtendedProductProperties](#extendedproductproperties) (ReadOnly): Product information.

## ExtendedProductProperties
### Properties
* **computeRole**: 'IaaS' | 'None' | 'PaaS' | string (ReadOnly): Compute role type (IaaS or PaaS).
* **dataDiskImages**: [DataDiskImage](#datadiskimage)[] (ReadOnly): List of attached data disks.
* **isSystemExtension**: bool (ReadOnly): Specifies if product is a Virtual Machine Extension.
* **osDiskImage**: [OsDiskImage](#osdiskimage) (ReadOnly): OS disk image.
* **sourceBlob**: [Uri](#uri) (ReadOnly): The URI.
* **supportMultipleExtensions**: bool (ReadOnly): Indicates if specified product supports multiple extensions.
* **version**: string (ReadOnly): Specifies product version.
* **vmOsType**: 'Linux' | 'None' | 'Windows' | string (ReadOnly): Operating system type (Windows or Linux).
* **vmScaleSetEnabled**: bool (ReadOnly): Indicates if virtual machine Scale Set is enabled in the specified product.

## DataDiskImage
### Properties
* **lun**: int (ReadOnly): The LUN.
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## OsDiskImage
### Properties
* **operatingSystem**: 'Linux' | 'None' | 'Windows' | string (ReadOnly): Operating system type (Windows or Linux).
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## Uri
### Properties
* **uri**: string (ReadOnly): The URI.

