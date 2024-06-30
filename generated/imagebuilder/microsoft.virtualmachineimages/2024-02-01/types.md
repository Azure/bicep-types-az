# Microsoft.VirtualMachineImages @ 2024-02-01

## Resource Microsoft.VirtualMachineImages/imageTemplates@2024-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ImageTemplateIdentity](#imagetemplateidentity) (Required): The identity of the image template, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9-_.]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImageTemplateProperties](#imagetemplateproperties): The properties of the image template
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.VirtualMachineImages/imageTemplates/runOutputs@2024-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9-_.]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RunOutputProperties](#runoutputproperties) (ReadOnly): The properties of the run output
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates/runOutputs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.VirtualMachineImages/imageTemplates/triggers@2024-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9-_.]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TriggerProperties](#triggerproperties): The properties of a trigger
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates/triggers' (ReadOnly, DeployTimeConstant): The resource type

## DistributeVersioner
* **Discriminator**: scheme

### Base Properties

### DistributeVersionerLatest
#### Properties
* **major**: int {minValue: -1}: Major version for the generated version number. Determine what is "latest" based on versions with this value as the major version. -1 is equivalent to leaving it unset.
* **scheme**: 'Latest' (Required): Version numbering scheme to be used.

### DistributeVersionerSource
#### Properties
* **scheme**: 'Source' (Required): Version numbering scheme to be used.


## ImageTemplateAutoRun
### Properties
* **state**: 'Disabled' | 'Enabled': Enabling this field will trigger an automatic build on image template creation or update.

## ImageTemplateCustomizer
* **Discriminator**: type

### Base Properties
* **name**: string: Friendly Name to provide context on what this customization step does

### ImageTemplateFileCustomizer
#### Properties
* **destination**: string: The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
* **sha256Checksum**: string: SHA256 checksum of the file provided in the sourceUri field above
* **sourceUri**: string: The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc
* **type**: 'File' (Required): The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer

### ImageTemplatePowerShellCustomizer
#### Properties
* **inline**: string[]: Array of PowerShell commands to execute
* **runAsSystem**: bool: If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
* **runElevated**: bool: If specified, the PowerShell script will be run with elevated privileges
* **scriptUri**: string: URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **sha256Checksum**: string: SHA256 checksum of the power shell script provided in the scriptUri field above
* **type**: 'PowerShell' (Required): The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
* **validExitCodes**: int[]: Valid exit codes for the PowerShell script. [Default: 0]

### ImageTemplateShellCustomizer
#### Properties
* **inline**: string[]: Array of shell commands to execute
* **scriptUri**: string: URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
* **sha256Checksum**: string: SHA256 checksum of the shell script provided in the scriptUri field
* **type**: 'Shell' (Required): The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer

### ImageTemplateRestartCustomizer
#### Properties
* **restartCheckCommand**: string: Command to check if restart succeeded [Default: '']
* **restartCommand**: string: Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
* **restartTimeout**: string: Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
* **type**: 'WindowsRestart' (Required): The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer

### ImageTemplateWindowsUpdateCustomizer
#### Properties
* **filters**: string[]: Array of filters to select updates to apply. Omit or specify empty array to use the default (no filter). Refer to above link for examples and detailed description of this field.
* **searchCriteria**: string: Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field.
* **type**: 'WindowsUpdate' (Required): The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
* **updateLimit**: int {minValue: 0}: Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000)


## ImageTemplateDistributor
* **Discriminator**: type

### Base Properties
* **artifactTags**: [ImageTemplateDistributorArtifactTags](#imagetemplatedistributorartifacttags): Tags that will be applied to the artifact once it has been created/updated by the distributor.
* **runOutputName**: string {pattern: "^[A-Za-z0-9-_.]{1,64}$"} (Required): The name to be used for the associated RunOutput.

### ImageTemplateManagedImageDistributor
#### Properties
* **imageId**: string (Required): Resource Id of the Managed Disk Image
* **location**: string (Required): Azure location for the image, should match if image already exists
* **type**: 'ManagedImage' (Required): Type of distribution.

### ImageTemplateSharedImageDistributor
#### Properties
* **excludeFromLatest**: bool: Flag that indicates whether created image version should be excluded from latest. Omit to use the default (false).
* **galleryImageId**: string (Required): Resource Id of the Azure Compute Gallery image
* **replicationRegions**: string[]: [Deprecated] A list of regions that the image will be replicated to. This list can be specified only if targetRegions is not specified. This field is deprecated - use targetRegions instead.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: [Deprecated] Storage account type to be used to store the shared image. Omit to use the default (Standard_LRS). This field can be specified only if replicationRegions is specified. This field is deprecated - use targetRegions instead.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the distributed Image Version is going to be replicated to. This object supersedes replicationRegions and can be specified only if replicationRegions is not specified.
* **type**: 'SharedImage' (Required): Type of distribution.
* **versioning**: [DistributeVersioner](#distributeversioner): Describes how to generate new x.y.z version number for distribution.

### ImageTemplateVhdDistributor
#### Properties
* **type**: 'VHD' (Required): Type of distribution.
* **uri**: string: Optional Azure Storage URI for the distributed VHD blob. Omit to use the default (empty string) in which case VHD would be published to the storage account in the staging resource group.


## ImageTemplateDistributorArtifactTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageTemplateIdentity
### Properties
* **type**: 'None' | 'UserAssigned': The type of identity used for the image template. The type 'None' will remove any identities from the image template.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ImageTemplateInVMValidator
* **Discriminator**: type

### Base Properties
* **name**: string: Friendly Name to provide context on what this validation step does

### ImageTemplateFileValidator
#### Properties
* **destination**: string: The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
* **sha256Checksum**: string: SHA256 checksum of the file provided in the sourceUri field above
* **sourceUri**: string: The URI of the file to be uploaded to the VM for validation. It can be a github link, Azure Storage URI (authorized or SAS), etc
* **type**: 'File' (Required): The type of validation you want to use on the Image. For example, "Shell" can be shell validation

### ImageTemplatePowerShellValidator
#### Properties
* **inline**: string[]: Array of PowerShell commands to execute
* **runAsSystem**: bool: If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
* **runElevated**: bool: If specified, the PowerShell script will be run with elevated privileges
* **scriptUri**: string: URI of the PowerShell script to be run for validation. It can be a github link, Azure Storage URI, etc
* **sha256Checksum**: string: SHA256 checksum of the power shell script provided in the scriptUri field above
* **type**: 'PowerShell' (Required): The type of validation you want to use on the Image. For example, "Shell" can be shell validation
* **validExitCodes**: int[]: Valid exit codes for the PowerShell script. [Default: 0]

### ImageTemplateShellValidator
#### Properties
* **inline**: string[]: Array of shell commands to execute
* **scriptUri**: string: URI of the shell script to be run for validation. It can be a github link, Azure Storage URI, etc
* **sha256Checksum**: string: SHA256 checksum of the shell script provided in the scriptUri field
* **type**: 'Shell' (Required): The type of validation you want to use on the Image. For example, "Shell" can be shell validation


## ImageTemplateLastRunStatus
### Properties
* **endTime**: string: End time of the last run (UTC)
* **message**: string: Verbose information about the last run state
* **runState**: 'Canceled' | 'Canceling' | 'Failed' | 'PartiallySucceeded' | 'Running' | 'Succeeded': State of the last run
* **runSubState**: 'Building' | 'Customizing' | 'Distributing' | 'Optimizing' | 'Queued' | 'Validating': Sub-state of the last run
* **startTime**: string: Start time of the last run (UTC)

## ImageTemplateProperties
### Properties
* **autoRun**: [ImageTemplateAutoRun](#imagetemplateautorun): Indicates whether or not to automatically run the image template build on template creation or update.
* **buildTimeoutInMinutes**: int {minValue: 0, maxValue: 960}: Maximum duration to wait while building the image template (includes all customizations, optimization, validations, and distributions). Omit or specify 0 to use the default (4 hours).
* **customize**: [ImageTemplateCustomizer](#imagetemplatecustomizer)[]: Specifies the properties used to describe the customization steps of the image, like Image source etc
* **distribute**: [ImageTemplateDistributor](#imagetemplatedistributor)[] (Required): The distribution targets where the image output needs to go to.
* **errorHandling**: [ImageTemplatePropertiesErrorHandling](#imagetemplatepropertieserrorhandling): Error handling options upon a build failure
* **exactStagingResourceGroup**: string (ReadOnly): The staging resource group id in the same subscription as the image template that will be used to build the image. This read-only field differs from 'stagingResourceGroup' only if the value specified in the 'stagingResourceGroup' field is empty.
* **lastRunStatus**: [ImageTemplateLastRunStatus](#imagetemplatelastrunstatus) (ReadOnly): State of 'run' that is currently executing or was last executed.
* **managedResourceTags**: [ImageTemplatePropertiesManagedResourceTags](#imagetemplatepropertiesmanagedresourcetags): Tags that will be applied to the resource group and/or resources created by the service.
* **optimize**: [ImageTemplatePropertiesOptimize](#imagetemplatepropertiesoptimize): Specifies optimization to be performed on image.
* **provisioningError**: [ProvisioningError](#provisioningerror) (ReadOnly): Provisioning error, if any
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource
* **source**: [ImageTemplateSource](#imagetemplatesource) (Required): Specifies the properties used to describe the source image.
* **stagingResourceGroup**: string: The staging resource group id in the same subscription as the image template that will be used to build the image. If this field is empty, a resource group with a random name will be created. If the resource group specified in this field doesn't exist, it will be created with the same name. If the resource group specified exists, it must be empty and in the same region as the image template. The resource group created will be deleted during template deletion if this field is empty or the resource group specified doesn't exist, but if the resource group specified exists the resources created in the resource group will be deleted during template deletion and the resource group itself will remain.
* **validate**: [ImageTemplatePropertiesValidate](#imagetemplatepropertiesvalidate): Configuration options and list of validations to be performed on the resulting image.
* **vmProfile**: [ImageTemplateVmProfile](#imagetemplatevmprofile): Describes how virtual machine is set up to build images

## ImageTemplatePropertiesErrorHandling
### Properties
* **onCustomizerError**: 'abort' | 'cleanup' | string: If there is a customizer error and this field is set to 'cleanup', the build VM and associated network resources will be cleaned up. This is the default behavior. If there is a customizer error and this field is set to 'abort', the build VM will be preserved.
* **onValidationError**: 'abort' | 'cleanup' | string: If there is a validation error and this field is set to 'cleanup', the build VM and associated network resources will be cleaned up. This is the default behavior. If there is a validation error and this field is set to 'abort', the build VM will be preserved.

## ImageTemplatePropertiesManagedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageTemplatePropertiesOptimize
### Properties
* **vmBoot**: [ImageTemplatePropertiesOptimizeVmBoot](#imagetemplatepropertiesoptimizevmboot): Optimization is applied on the image for a faster VM boot.

## ImageTemplatePropertiesOptimizeVmBoot
### Properties
* **state**: 'Disabled' | 'Enabled': Enabling this field will improve VM boot time by optimizing the final customized image output.

## ImageTemplatePropertiesValidate
### Properties
* **continueDistributeOnFailure**: bool: If validation fails and this field is set to false, output image(s) will not be distributed. This is the default behavior. If validation fails and this field is set to true, output image(s) will still be distributed. Please use this option with caution as it may result in bad images being distributed for use. In either case (true or false), the end to end image run will be reported as having failed in case of a validation failure. [Note: This field has no effect if validation succeeds.]
* **inVMValidations**: [ImageTemplateInVMValidator](#imagetemplateinvmvalidator)[]: List of validations to be performed.
* **sourceValidationOnly**: bool: If this field is set to true, the image specified in the 'source' section will directly be validated. No separate build will be run to generate and then validate a customized image.

## ImageTemplateSource
* **Discriminator**: type

### Base Properties

### ImageTemplateManagedImageSource
#### Properties
* **imageId**: string (Required): ARM resource id of the managed image in customer subscription
* **type**: 'ManagedImage' (Required): Specifies the type of source image you want to start with.

### ImageTemplatePlatformImageSource
#### Properties
* **exactVersion**: string (ReadOnly): Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'.
* **offer**: string: Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **planInfo**: [PlatformImagePurchasePlan](#platformimagepurchaseplan): Optional configuration of purchase plan for platform image.
* **publisher**: string: Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **sku**: string: Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
* **type**: 'PlatformImage' (Required): Specifies the type of source image you want to start with.
* **version**: string: Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). If 'latest' is specified here, the version is evaluated when the image build takes place, not when the template is submitted.

### ImageTemplateSharedImageVersionSource
#### Properties
* **exactVersion**: string (ReadOnly): Exact ARM resource id of the image version. This readonly field differs from the image version Id in 'imageVersionId' only if the version name specified in 'imageVersionId' field is 'latest'.
* **imageVersionId**: string (Required): ARM resource id of the image version. When image version name is 'latest', the version is evaluated when the image build takes place.
* **type**: 'SharedImageVersion' (Required): Specifies the type of source image you want to start with.


## ImageTemplateVmProfile
### Properties
* **osDiskSizeGB**: int {minValue: 0}: Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size.
* **userAssignedIdentities**: string[]: Optional array of resource IDs of user assigned managed identities to be configured on the build VM and validation VM. This may include the identity of the image template.
* **vmSize**: string: Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2 for Gen1 images and Standard_D2ds_v4 for Gen2 images).
* **vnetConfig**: [VirtualNetworkConfig](#virtualnetworkconfig): Optional configuration of the virtual network to use to deploy the build VM and validation VM in. Omit if no specific virtual network needs to be used.

## PlatformImagePurchasePlan
### Properties
* **planName**: string (Required): Name of the purchase plan.
* **planProduct**: string (Required): Product of the purchase plan.
* **planPublisher**: string (Required): Publisher of the purchase plan.

## ProvisioningError
### Properties
* **message**: string: Verbose error message about the provisioning failure
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadDistributeType' | 'BadManagedImageSource' | 'BadPIRSource' | 'BadSharedImageDistribute' | 'BadSharedImageVersionSource' | 'BadSourceType' | 'BadStagingResourceGroup' | 'BadValidatorType' | 'NoCustomizerScript' | 'NoValidatorScript' | 'Other' | 'ServerError' | 'UnsupportedCustomizerType' | 'UnsupportedValidatorType' | string: Error code of the provisioning failure

## RunOutputProperties
### Properties
* **artifactId**: string: The resource id of the artifact.
* **artifactUri**: string: The location URI of the artifact.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetRegion
### Properties
* **name**: string (Required): The name of the region.
* **replicaCount**: int {minValue: 1}: The number of replicas of the Image Version to be created in this region. Omit to use the default (1).
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image in this region. Omit to use the default (Standard_LRS).

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TriggerProperties
* **Discriminator**: kind

### Base Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource
* **status**: [TriggerStatus](#triggerstatus) (ReadOnly): Trigger status

### SourceImageTriggerProperties
#### Properties
* **kind**: 'SourceImage' (Required): The kind of trigger.


## TriggerStatus
### Properties
* **code**: string (ReadOnly): The status code.
* **message**: string (ReadOnly): The detailed status message, including for alerts and error messages.
* **time**: string (ReadOnly): The time of the status.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

## VirtualNetworkConfig
### Properties
* **containerInstanceSubnetId**: string: Resource id of a pre-existing subnet on which Azure Container Instance will be deployed for Isolated Builds. This field may be specified only if `subnetId` is also specified and must be on the same Virtual Network as the subnet specified in `subnetId`.
* **proxyVmSize**: string: Size of the proxy virtual machine used to pass traffic to the build VM and validation VM. This must not be specified if `containerInstanceSubnetId` is specified because no proxy virtual machine is deployed in that case. Omit or specify empty string to use the default (Standard_A1_v2).
* **subnetId**: string: Resource id of a pre-existing subnet on which the build VM and validation VM will be deployed

