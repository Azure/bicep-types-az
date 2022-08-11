# Microsoft.VirtualMachineImages @ 2019-02-01-preview

## Resource Microsoft.VirtualMachineImages/imageTemplates@2019-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

### ImageTemplatePowerShellCustomizer
#### Properties
* **inline**: string[]: Array of PowerShell commands to execute
* **script**: string: The PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'PowerShell' (Required): The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
* **validExitCodes**: int[]: Valid exit codes for the PowerShell script. [Default: 0]

### ImageTemplateShellCustomizer
#### Properties
* **inline**: string[]: Array of shell commands to execute
* **script**: string: The shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'Shell' (Required): The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer

### ImageTemplateRestartCustomizer
#### Properties
* **restartCheckCommand**: string: Command to check if restart succeeded [Default: '']
* **restartCommand**: string: Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
* **restartTimeout**: string: Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
* **type**: 'WindowsRestart' (Required): The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer


## ImageTemplateDistributor
* **Discriminator**: type

### Base Properties
* **artifactTags**: [ImageTemplateDistributorArtifactTags](#imagetemplatedistributorartifacttags): Tags that will be applied to the artifact once it has been created/updated by the distributor.
* **runOutputName**: string (Required): The name to be used for the associated RunOutput.

### ImageTemplateManagedImageDistributor
#### Properties
* **imageId**: string (Required): Resource Id of the Managed Disk Image
* **location**: string (Required): Azure location for the image, should match if image already exists
* **type**: 'ManagedImage' (Required): Type of distribution.

### ImageTemplateSharedImageDistributor
#### Properties
* **galleryImageId**: string (Required): Resource Id of the Shared Image Gallery image
* **replicationRegions**: string[] (Required)
* **type**: 'SharedImage' (Required): Type of distribution.

### ImageTemplateVhdDistributor
#### Properties
* **type**: 'VHD' (Required): Type of distribution.


## ImageTemplateDistributorArtifactTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageTemplateLastRunStatus
### Properties
* **endTime**: string: End time of the last run (UTC)
* **message**: string: Verbose information about the last run state
* **runState**: 'Failed' | 'PartiallySucceeded' | 'Running' | 'Succeeded' | string: State of the last run
* **runSubState**: 'Building' | 'Customizing' | 'Distributing' | 'Queued' | string: Sub-state of the last run
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
* **sourceURI**: string (Required): URI to get the ISO image. This URI has to be accessible to the resource provider at the time of the image template creation.
* **type**: 'ISO' (Required): Specifies the type of source image you want to start with.

### ImageTemplateManagedImageSource
#### Properties
* **imageId**: string (Required): ARM resource id of the managed image in customer subscription
* **type**: 'ManagedImage' (Required): Specifies the type of source image you want to start with.

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
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadDistributeType' | 'BadISOSource' | 'BadManagedImageSource' | 'BadPIRSource' | 'BadSharedImageDistribute' | 'BadSourceType' | 'NoCustomizerScript' | 'Other' | 'ServerError' | 'UnsupportedCustomizerType' | string: Error code of the provisioning failure

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

