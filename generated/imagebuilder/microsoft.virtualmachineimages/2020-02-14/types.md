# Microsoft.VirtualMachineImages @ 2020-02-14

## Resource Microsoft.VirtualMachineImages/imageTemplates@2020-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-14' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ImageTemplateIdentity](#imagetemplateidentity) (Required): Identity for the image template.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageTemplateProperties](#imagetemplateproperties): Describes the properties of an image template
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant): The resource type

## ImageTemplateIdentity
### Properties
* **type**: 'None' | 'UserAssigned': The type of identity used for the image template. The type 'None' will remove any identities from the image template.
* **userAssignedIdentities**: [Dictionary<string,Schemas22UserAssignedIdentitiesValue>](#dictionarystringschemas22userassignedidentitiesvalue): The list of user identities associated with the image template. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## Dictionary<string,Schemas22UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:22_userAssignedIdentitiesValue](#schemas22userassignedidentitiesvalue)

## schemas:22_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ImageTemplateProperties
### Properties
* **buildTimeoutInMinutes**: int: Maximum duration to wait while building the image template. Omit or specify 0 to use the default (4 hours).
* **customize**: [ImageTemplateCustomizer](#imagetemplatecustomizer)[]: Specifies the properties used to describe the customization steps of the image, like Image source etc
* **distribute**: [ImageTemplateDistributor](#imagetemplatedistributor)[] (Required): The distribution targets where the image output needs to go to.
* **lastRunStatus**: [ImageTemplateLastRunStatus](#imagetemplatelastrunstatus) (ReadOnly): Describes the latest status of running an image template
* **provisioningError**: [ProvisioningError](#provisioningerror) (ReadOnly): Describes the error happened when create or update an image template
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **source**: [ImageTemplateSource](#imagetemplatesource) (Required): Describes a virtual machine image source for building, customizing and distributing
* **vmProfile**: [ImageTemplateVmProfile](#imagetemplatevmprofile): Describes the virtual machine used to build, customize and capture images

## ImageTemplateCustomizer
* **Discriminator**: type
### Base Properties
* **name**: string: Friendly Name to provide context on what this customization step does
### File
#### Properties
* **destination**: string: The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
* **sha256Checksum**: string: SHA256 checksum of the file provided in the sourceUri field above
* **sourceUri**: string: The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'File' (Required): Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner

### PowerShell
#### Properties
* **inline**: string[]: Array of PowerShell commands to execute
* **runAsSystem**: bool: If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
* **runElevated**: bool: If specified, the PowerShell script will be run with elevated privileges
* **scriptUri**: string: URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **sha256Checksum**: string: SHA256 checksum of the power shell script provided in the scriptUri field above
* **type**: 'PowerShell' (Required): Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
* **validExitCodes**: int[]: Valid exit codes for the PowerShell script. [Default: 0]

### Shell
#### Properties
* **inline**: string[]: Array of shell commands to execute
* **scriptUri**: string: URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **sha256Checksum**: string: SHA256 checksum of the shell script provided in the scriptUri field
* **type**: 'Shell' (Required): Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.

### WindowsRestart
#### Properties
* **restartCheckCommand**: string: Command to check if restart succeeded [Default: '']
* **restartCommand**: string: Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
* **restartTimeout**: string: Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
* **type**: 'WindowsRestart' (Required): Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner

### WindowsUpdate
#### Properties
* **filters**: string[]: Array of filters to select updates to apply. Omit or specify empty array to use the default (no filter). Refer to above link for examples and detailed description of this field.
* **searchCriteria**: string: Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field.
* **type**: 'WindowsUpdate' (Required): Installs Windows Updates. Corresponds to Packer Windows Update Provisioner (https://github.com/rgl/packer-provisioner-windows-update)
* **updateLimit**: int: Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000)


## File
### Properties
* **destination**: string: The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
* **sha256Checksum**: string: SHA256 checksum of the file provided in the sourceUri field above
* **sourceUri**: string: The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'File' (Required): Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner

## PowerShell
### Properties
* **inline**: string[]: Array of PowerShell commands to execute
* **runAsSystem**: bool: If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
* **runElevated**: bool: If specified, the PowerShell script will be run with elevated privileges
* **scriptUri**: string: URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **sha256Checksum**: string: SHA256 checksum of the power shell script provided in the scriptUri field above
* **type**: 'PowerShell' (Required): Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
* **validExitCodes**: int[]: Valid exit codes for the PowerShell script. [Default: 0]

## Shell
### Properties
* **inline**: string[]: Array of shell commands to execute
* **scriptUri**: string: URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **sha256Checksum**: string: SHA256 checksum of the shell script provided in the scriptUri field
* **type**: 'Shell' (Required): Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.

## WindowsRestart
### Properties
* **restartCheckCommand**: string: Command to check if restart succeeded [Default: '']
* **restartCommand**: string: Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
* **restartTimeout**: string: Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
* **type**: 'WindowsRestart' (Required): Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner

## WindowsUpdate
### Properties
* **filters**: string[]: Array of filters to select updates to apply. Omit or specify empty array to use the default (no filter). Refer to above link for examples and detailed description of this field.
* **searchCriteria**: string: Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field.
* **type**: 'WindowsUpdate' (Required): Installs Windows Updates. Corresponds to Packer Windows Update Provisioner (https://github.com/rgl/packer-provisioner-windows-update)
* **updateLimit**: int: Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000)

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
* **excludeFromLatest**: bool: Flag that indicates whether created image version should be excluded from latest. Omit to use the default (false).
* **galleryImageId**: string (Required): Resource Id of the Shared Image Gallery image
* **replicationRegions**: string[] (Required): A list of regions that the image will be replicated to
* **storageAccountType**: 'Standard_LRS' | 'Standard_ZRS': Storage account type to be used to store the shared image. Omit to use the default (Standard_LRS).
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
* **excludeFromLatest**: bool: Flag that indicates whether created image version should be excluded from latest. Omit to use the default (false).
* **galleryImageId**: string (Required): Resource Id of the Shared Image Gallery image
* **replicationRegions**: string[] (Required): A list of regions that the image will be replicated to
* **storageAccountType**: 'Standard_LRS' | 'Standard_ZRS': Storage account type to be used to store the shared image. Omit to use the default (Standard_LRS).
* **type**: 'SharedImage' (Required): Distribute via Shared Image Gallery.

## VHD
### Properties
* **type**: 'VHD' (Required): Distribute via VHD in a storage account.

## ImageTemplateLastRunStatus
### Properties
* **endTime**: string: End time of the last run (UTC)
* **message**: string: Verbose information about the last run state
* **runState**: 'Canceled' | 'Canceling' | 'Failed' | 'PartiallySucceeded' | 'Running' | 'Succeeded': State of the last run.
* **runSubState**: 'Building' | 'Customizing' | 'Distributing' | 'Queued': Sub-state of the last run.
* **startTime**: string: Start time of the last run (UTC)

## ProvisioningError
### Properties
* **message**: string: Verbose error message about the provisioning failure
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadDistributeType' | 'BadManagedImageSource' | 'BadPIRSource' | 'BadSharedImageDistribute' | 'BadSharedImageVersionSource' | 'BadSourceType' | 'NoCustomizerScript' | 'Other' | 'ServerError' | 'UnsupportedCustomizerType': Error code of the provisioning failure.

## ImageTemplateSource
* **Discriminator**: type
### Base Properties
### ManagedImage
#### Properties
* **imageId**: string (Required): ARM resource id of the managed image in customer subscription
* **type**: 'ManagedImage' (Required): Distribute as a Managed Disk Image.

### PlatformImage
#### Properties
* **offer**: string: Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **planInfo**: [PlatformImagePurchasePlan](#platformimagepurchaseplan): Purchase plan configuration for platform image.
* **publisher**: string: Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **sku**: string: Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **type**: 'PlatformImage' (Required): Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **version**: string: Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). If 'latest' is specified here, the version is evaluated when the image build takes place, not when the template is submitted. Specifying 'latest' could cause ROUNDTRIP_INCONSISTENT_PROPERTY issue which will be fixed.

### SharedImageVersion
#### Properties
* **imageVersionId**: string (Required): ARM resource id of the image version in the shared image gallery
* **type**: 'SharedImageVersion' (Required): Describes an image source that is an image version in a shared image gallery.


## PlatformImage
### Properties
* **offer**: string: Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **planInfo**: [PlatformImagePurchasePlan](#platformimagepurchaseplan): Purchase plan configuration for platform image.
* **publisher**: string: Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **sku**: string: Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **type**: 'PlatformImage' (Required): Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **version**: string: Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). If 'latest' is specified here, the version is evaluated when the image build takes place, not when the template is submitted. Specifying 'latest' could cause ROUNDTRIP_INCONSISTENT_PROPERTY issue which will be fixed.

## PlatformImagePurchasePlan
### Properties
* **planName**: string (Required): Name of the purchase plan.
* **planProduct**: string (Required): Product of the purchase plan.
* **planPublisher**: string (Required): Publisher of the purchase plan.

## SharedImageVersion
### Properties
* **imageVersionId**: string (Required): ARM resource id of the image version in the shared image gallery
* **type**: 'SharedImageVersion' (Required): Describes an image source that is an image version in a shared image gallery.

## ImageTemplateVmProfile
### Properties
* **osDiskSizeGB**: int: Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size.
* **vmSize**: string: Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2).
* **vnetConfig**: [VirtualNetworkConfig](#virtualnetworkconfig): Virtual Network configuration.

## VirtualNetworkConfig
### Properties
* **subnetId**: string: Resource id of a pre-existing subnet.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

