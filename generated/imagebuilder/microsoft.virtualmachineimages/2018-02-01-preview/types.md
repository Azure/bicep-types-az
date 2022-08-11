# Microsoft.VirtualMachineImages @ 2018-02-01-preview

## Resource Microsoft.VirtualMachineImages/imageTemplates@2018-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageTemplateProperties](#imagetemplateproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant): The resource type

## ImageTemplateCustomizer
* **Discriminator**: type

### Base Properties
* **name**: string: Friendly Name to provide context on what this customization step does

### ImageTemplateShellCustomizer
#### Properties
* **script**: string: The shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'shell' (Required): The type of customization tool you want to use on the Image. For example, "shell" can be shellCustomizer


## ImageTemplateDistributor
* **Discriminator**: type

### Base Properties
* **artifactTags**: [ImageTemplateDistributorArtifactTags](#imagetemplatedistributorartifacttags): Tags that will be applied to the artifact once it has been created/updated by the distributor.
* **runOutputName**: string (Required): The name to be used for the associated RunOutput.

### ImageTemplateManagedImageDistributor
#### Properties
* **imageId**: string (Required): Resource Id of the Managed Disk Image
* **location**: string (Required): Azure location for the image, should match if image already exists
* **type**: 'managedImage' (Required): Type of distribution.

### ImageTemplateSharedImageDistributor
#### Properties
* **galleryImageId**: string (Required): Resource Id of the Shared Image Gallery image
* **replicationRegions**: string[] (Required)
* **type**: 'sharedImage' (Required): Type of distribution.


## ImageTemplateDistributorArtifactTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageTemplateLastRunStatus
### Properties
* **endTime**: string: End time of the last run (UTC)
* **message**: string: Verbose information about the last run state
* **runState**: 'failed' | 'partiallySucceeded' | 'ready' | 'running' | 'succeeded' | string: State of the last run
* **runSubState**: 'building' | 'customizing' | 'distributing' | 'queued' | string: Sub state of the last run
* **startTime**: string: Start time of the last run (UTC)

## ImageTemplateProperties
### Properties
* **customize**: [ImageTemplateCustomizer](#imagetemplatecustomizer)[]: Specifies the properties used to describe the customization steps of the image, like Image source etc
* **distribute**: [ImageTemplateDistributor](#imagetemplatedistributor)[] (Required): The distribution targets where the image output needs to go to.
* **lastRunStatus**: [ImageTemplateLastRunStatus](#imagetemplatelastrunstatus) (ReadOnly): State of 'run' that is currently executing or was last executed.
* **provisioningError**: [ProvisioningError](#provisioningerror) (ReadOnly): Provisioning error, if any
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource
* **source**: [ImageTemplateSource](#imagetemplatesource) (Required): Specifies the properties used to describe the source image.

## ImageTemplateSource
* **Discriminator**: type

### Base Properties

### ImageTemplateIsoSource
#### Properties
* **sha256Checksum**: string (Required): SHA256 Checksum of the ISO image.
* **sourceURI**: string (Required): URL to get the ISO image. This URL has to be accessible to the resource provider at the time of the imageTemplate creation.
* **type**: 'ISO' (Required): Specifies the type of source image you want to start with.

### ImageTemplatePlatformImageSource
#### Properties
* **offer**: string: Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **publisher**: string: Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **sku**: string: Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **type**: 'PlatformImage' (Required): Specifies the type of source image you want to start with.
* **version**: string: Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).


## ProvisioningError
### Properties
* **message**: string: Verbose error message about the provisioning failure
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadISOSource' | 'BadPIRSource' | 'BadSourceType' | 'NoCustomizerShellScript' | 'Other' | 'ServerError' | string: Error code of the provisioning failure

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

