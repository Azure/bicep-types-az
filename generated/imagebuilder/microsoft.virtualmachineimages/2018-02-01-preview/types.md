# Microsoft.VirtualMachineImages @ 2018-02-01-preview

## Resource Microsoft.VirtualMachineImages/imageTemplates@2018-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageTemplateProperties](#imagetemplateproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant): The resource type

## ImageTemplateProperties
### Properties
* **customize**: [ImageTemplateCustomizer](#imagetemplatecustomizer)[]: Specifies the properties used to describe the customization steps of the image, like Image source etc
* **distribute**: [ImageTemplateDistributor](#imagetemplatedistributor)[] (Required): The distribution targets where the image output needs to go to.
* **lastRunStatus**: [ImageTemplateLastRunStatus](#imagetemplatelastrunstatus) (ReadOnly)
* **provisioningError**: [ProvisioningError](#provisioningerror) (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state of the resource.
* **source**: [ImageTemplateSource](#imagetemplatesource) (Required)

## ImageTemplateCustomizer
* **Discriminator**: type
### Base Properties
* **name**: string: Friendly Name to provide context on what this customization step does
### shell
#### Properties
* **script**: string: The shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'shell' (Required): Runs a shell script during the customization phase


## shell
### Properties
* **script**: string: The shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'shell' (Required): Runs a shell script during the customization phase

## ImageTemplateDistributor
* **Discriminator**: type
### Base Properties
* **artifactTags**: [Dictionary<string,String>](#dictionarystringstring): Tags that will be applied to the artifact once it has been created/updated by the distributor.
* **runOutputName**: string (Required): The name to be used for the associated RunOutput.
### managedImage
#### Properties
* **imageId**: string (Required): Resource Id of the Managed Disk Image
* **location**: string (Required): Azure location for the image, should match if image already exists
* **type**: 'managedImage' (Required): Distribute as a Managed Disk Image.

### sharedImage
#### Properties
* **galleryImageId**: string (Required): Resource Id of the Shared Image Gallery image
* **replicationRegions**: string[] (Required)
* **type**: 'sharedImage' (Required): Distribute via Shared Image Gallery.


## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## managedImage
### Properties
* **imageId**: string (Required): Resource Id of the Managed Disk Image
* **location**: string (Required): Azure location for the image, should match if image already exists
* **type**: 'managedImage' (Required): Distribute as a Managed Disk Image.

## sharedImage
### Properties
* **galleryImageId**: string (Required): Resource Id of the Shared Image Gallery image
* **replicationRegions**: string[] (Required)
* **type**: 'sharedImage' (Required): Distribute via Shared Image Gallery.

## ImageTemplateLastRunStatus
### Properties
* **endTime**: string: End time of the last run (UTC)
* **message**: string: Verbose information about the last run state
* **runState**: 'failed' | 'partiallySucceeded' | 'ready' | 'running' | 'succeeded': State of the last run.
* **runSubState**: 'building' | 'customizing' | 'distributing' | 'queued': Sub state of the last run.
* **startTime**: string: Start time of the last run (UTC)

## ProvisioningError
### Properties
* **message**: string: Verbose error message about the provisioning failure
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadISOSource' | 'BadPIRSource' | 'BadSourceType' | 'NoCustomizerShellScript' | 'Other' | 'ServerError': Error code of the provisioning failure.

## ImageTemplateSource
* **Discriminator**: type
### Base Properties
### ISO
#### Properties
* **sha256Checksum**: string (Required): SHA256 Checksum of the ISO image.
* **sourceURI**: string (Required): URL to get the ISO image. This URL has to be accessible to the resource provider at the time of the imageTemplate creation.
* **type**: 'ISO' (Required): Describes an image source that is an installation ISO. Currently only supports Red Hat Enterprise Linux 7.2-7.5 ISO's.

### PlatformImage
#### Properties
* **offer**: string: Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **publisher**: string: Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **sku**: string: Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **type**: 'PlatformImage' (Required): Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **version**: string: Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).


## ISO
### Properties
* **sha256Checksum**: string (Required): SHA256 Checksum of the ISO image.
* **sourceURI**: string (Required): URL to get the ISO image. This URL has to be accessible to the resource provider at the time of the imageTemplate creation.
* **type**: 'ISO' (Required): Describes an image source that is an installation ISO. Currently only supports Red Hat Enterprise Linux 7.2-7.5 ISO's.

## PlatformImage
### Properties
* **offer**: string: Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **publisher**: string: Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **sku**: string: Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **type**: 'PlatformImage' (Required): Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **version**: string: Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

