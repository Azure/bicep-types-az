# Microsoft.VirtualMachineImages @ 2019-02-01-preview

## Resource Microsoft.VirtualMachineImages/imageTemplates@2019-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageTemplateProperties](#imagetemplateproperties):
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant): The resource type

## ImageTemplateProperties
### Properties
* **customize**: [ImageTemplateCustomizer](#imagetemplatecustomizer)[]: Specifies the properties used to describe the customization steps of the image, like Image source etc
* **distribute**: [ImageTemplateDistributor](#imagetemplatedistributor)[] (Required): The distribution targets where the image output needs to go to.
* **lastRunStatus**: [ImageTemplateLastRunStatus](#imagetemplatelastrunstatus) (ReadOnly):
* **provisioningError**: [ProvisioningError](#provisioningerror) (ReadOnly):
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state of the resource.
* **source**: [ImageTemplateSource](#imagetemplatesource) (Required):

## ImageTemplateCustomizer
* **Discriminator**: type
### Base Properties
* **name**: string: Friendly Name to provide context on what this customization step does
### PowerShell
#### Properties
* **inline**: string[]: Array of PowerShell commands to execute
* **script**: string: The PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'PowerShell' (Required): Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'script' or 'inline' can be specified.
* **validExitCodes**: int[]: Valid exit codes for the PowerShell script. [Default: 0]

### Shell
#### Properties
* **inline**: string[]: Array of shell commands to execute
* **script**: string: The shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'Shell' (Required): Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'script' or 'inline' can be specified.

### WindowsRestart
#### Properties
* **restartCheckCommand**: string: Command to check if restart succeeded [Default: '']
* **restartCommand**: string: Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
* **restartTimeout**: string: Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
* **type**: 'WindowsRestart' (Required): Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner


## PowerShell
### Properties
* **inline**: string[]: Array of PowerShell commands to execute
* **script**: string: The PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'PowerShell' (Required): Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'script' or 'inline' can be specified.
* **validExitCodes**: int[]: Valid exit codes for the PowerShell script. [Default: 0]

## Shell
### Properties
* **inline**: string[]: Array of shell commands to execute
* **script**: string: The shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'Shell' (Required): Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'script' or 'inline' can be specified.

## WindowsRestart
### Properties
* **restartCheckCommand**: string: Command to check if restart succeeded [Default: '']
* **restartCommand**: string: Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
* **restartTimeout**: string: Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
* **type**: 'WindowsRestart' (Required): Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner

## ImageTemplateDistributor
* **Discriminator**: type
### Base Properties
* **artifactTags**: [Dictionary<string,String>](#dictionarystringstring): Tags that will be applied to the artifact once it has been created/updated by the distributor.
* **runOutputName**: string (Required): The name to be used for the associated RunOutput.
### ManagedImage
#### Properties
* **imageId**: string (Required): ARM resource id of the managed image in customer subscription
* **type**: 'ManagedImage' (Required): Distribute as a Managed Disk Image.

### SharedImage
#### Properties
* **galleryImageId**: string (Required): Resource Id of the Shared Image Gallery image
* **replicationRegions**: string[] (Required):
* **type**: 'SharedImage' (Required): Distribute via Shared Image Gallery.

### VHD
#### Properties
* **type**: 'VHD' (Required): Distribute via VHD in a storage account.


## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedImage
### Properties
* **imageId**: string (Required): ARM resource id of the managed image in customer subscription
* **type**: 'ManagedImage' (Required): Distribute as a Managed Disk Image.

## SharedImage
### Properties
* **galleryImageId**: string (Required): Resource Id of the Shared Image Gallery image
* **replicationRegions**: string[] (Required):
* **type**: 'SharedImage' (Required): Distribute via Shared Image Gallery.

## VHD
### Properties
* **type**: 'VHD' (Required): Distribute via VHD in a storage account.

## ImageTemplateLastRunStatus
### Properties
* **endTime**: string: End time of the last run (UTC)
* **message**: string: Verbose information about the last run state
* **runState**: 'Failed' | 'PartiallySucceeded' | 'Running' | 'Succeeded': State of the last run.
* **runSubState**: 'Building' | 'Customizing' | 'Distributing' | 'Queued': Sub-state of the last run.
* **startTime**: string: Start time of the last run (UTC)

## ProvisioningError
### Properties
* **message**: string: Verbose error message about the provisioning failure
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadDistributeType' | 'BadISOSource' | 'BadManagedImageSource' | 'BadPIRSource' | 'BadSharedImageDistribute' | 'BadSourceType' | 'NoCustomizerScript' | 'Other' | 'ServerError' | 'UnsupportedCustomizerType': Error code of the provisioning failure.

## ImageTemplateSource
* **Discriminator**: type
### Base Properties
### ISO
#### Properties
* **sha256Checksum**: string (Required): SHA256 Checksum of the ISO image.
* **sourceURI**: string (Required): URI to get the ISO image. This URI has to be accessible to the resource provider at the time of the image template creation.
* **type**: 'ISO' (Required): Describes an image source that is an installation ISO. Currently only supports Red Hat Enterprise Linux 7.2-7.5 ISO's.

### ManagedImage
#### Properties
* **imageId**: string (Required): ARM resource id of the managed image in customer subscription
* **type**: 'ManagedImage' (Required): Distribute as a Managed Disk Image.

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
* **sourceURI**: string (Required): URI to get the ISO image. This URI has to be accessible to the resource provider at the time of the image template creation.
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

