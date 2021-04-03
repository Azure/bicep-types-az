# Microsoft.Compute.Admin @ 2015-12-01-preview

## Resource Microsoft.Compute.Admin/locations/artifactTypes/publishers/offers/skus/versions@2015-12-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PlatformImageProperties](#platformimageproperties): Properties of platform image.
* **type**: 'Microsoft.Compute.Admin/locations/artifactTypes/publishers/offers/skus/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute.Admin/locations/artifactTypes/publishers/types/versions@2015-12-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VMExtensionProperties](#vmextensionproperties): Properties of a Virtual Machine Extension Image.
* **type**: 'Microsoft.Compute.Admin/locations/artifactTypes/publishers/types/versions' (ReadOnly, DeployTimeConstant): The resource type

## PlatformImageProperties
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]: Data disks used by the platform image.
* **details**: [ImageDetails](#imagedetails): Information about the disk image.
* **osDisk**: [OsDisk](#osdisk): Operating system disk.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'Succeeded': Provisioning status of the platform image.

## DataDisk
### Properties
* **lun**: int: Logical unit number.
* **uri**: string: Location of the disk template.

## ImageDetails
### Properties
* **billingPartNumber**: string: The part number is used to bill for software costs.

## OsDisk
### Properties
* **osType**: 'Linux' | 'Unknown' | 'Windows': Operating system type.
* **uri**: string: Location of the disk.

## VMExtensionProperties
### Properties
* **computeRole**: string: Compute role
* **isSystemExtension**: bool: Indicates if the extension is for the system.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'Succeeded': Provisioning state of extension.
* **publisher**: string: The publisher of the VM Extension
* **sourceBlob**: [AzureBlob](#azureblob): Azure or AzureStack blob information.
* **supportMultipleExtensions**: bool: True if supports multiple extensions.
* **vmOsType**: 'Linux' | 'Unknown' | 'Windows': Target virtual machine operating system type necessary for deploying the extension handler.
* **vmScaleSetEnabled**: bool: Value indicating whether the extension is enabled for virtual machine scale set support.

## AzureBlob
### Properties
* **uri**: string: URI to Azure or AzureStack blob.

