# Microsoft.DevTestLab @ 2015-05-21-preview

## Resource Microsoft.DevTestLab/labs@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabProperties](#labproperties): The properties of the resource.
* **tags**: [LabTags](#labtags): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/artifactsources@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArtifactSourceProperties](#artifactsourceproperties): The properties of the resource.
* **tags**: [ArtifactSourceTags](#artifactsourcetags): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/artifactsources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/customimages@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomImageProperties](#customimageproperties): The properties of the resource.
* **tags**: [CustomImageTags](#customimagetags): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/customimages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/formulas@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FormulaProperties](#formulaproperties): The properties of the resource.
* **tags**: [FormulaTags](#formulatags): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/formulas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/policysets/policies@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyProperties](#policyproperties): The properties of the resource.
* **tags**: [PolicyTags](#policytags): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/policysets/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/schedules@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties): The properties of the resource.
* **tags**: [ScheduleTags](#scheduletags): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/virtualmachines@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabVirtualMachineProperties](#labvirtualmachineproperties): The properties of the resource.
* **tags**: [LabVirtualMachineTags](#labvirtualmachinetags): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/virtualmachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/virtualnetworks@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties): The properties of the resource.
* **tags**: [VirtualNetworkTags](#virtualnetworktags): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/virtualnetworks' (ReadOnly, DeployTimeConstant): The resource type

## Function listVhds (Microsoft.DevTestLab/labs@2015-05-21-preview)
* **Resource**: Microsoft.DevTestLab/labs
* **ApiVersion**: 2015-05-21-preview
* **Output**: [ResponseWithContinuationLabVhd](#responsewithcontinuationlabvhd)

## ArtifactDeploymentStatusProperties
### Properties
* **artifactsApplied**: int: The total count of the artifacts that were successfully applied.
* **deploymentStatus**: string: The deployment status of the artifact.
* **totalArtifacts**: int: The total count of the artifacts that were tentatively applied.

## ArtifactInstallProperties
### Properties
* **artifactId**: string: The artifact's identifier.
* **parameters**: [ArtifactParameterProperties](#artifactparameterproperties)[]: The parameters of the artifact.

## ArtifactParameterProperties
### Properties
* **name**: string: The name of the artifact parameter.
* **value**: string: The value of the artifact parameter.

## ArtifactSourceProperties
### Properties
* **branchRef**: string: The branch reference of the artifact source.
* **displayName**: string: The display name of the artifact source.
* **folderPath**: string: The folder path of the artifact source.
* **provisioningState**: string: The provisioning status of the resource.
* **securityToken**: string: The security token of the artifact source.
* **sourceType**: 'GitHub' | 'VsoGit' | string: The type of the artifact source.
* **status**: 'Disabled' | 'Enabled' | string: The status of the artifact source.
* **uri**: string: The URI of the artifact source.

## ArtifactSourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomImageProperties
### Properties
* **author**: string: The author of the custom image.
* **creationDate**: string: The creation date of the custom image.
* **description**: string: The description of the custom image.
* **osType**: 'Linux' | 'None' | 'Windows' | string: The OS type of the custom image.
* **provisioningState**: string: The provisioning status of the resource.
* **vhd**: [CustomImagePropertiesCustom](#customimagepropertiescustom): The VHD from which the image is to be created.
* **vm**: [CustomImagePropertiesFromVm](#customimagepropertiesfromvm): Properties for creating a custom image from a virtual machine.

## CustomImagePropertiesCustom
### Properties
* **imageName**: string: The image name.
* **sysPrep**: bool: Indicates whether sysprep has been run on the VHD.

## CustomImagePropertiesFromVm
### Properties
* **linuxOsInfo**: [LinuxOsInfo](#linuxosinfo): The Linux OS information of the VM.
* **sourceVmId**: string: The source vm identifier.
* **sysPrep**: bool: Indicates whether sysprep has been run on the VHD.
* **windowsOsInfo**: [WindowsOsInfo](#windowsosinfo): The Windows OS information of the VM.

## CustomImageTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DayDetails
### Properties
* **time**: string

## FormulaProperties
### Properties
* **author**: string: The author of the formula.
* **creationDate**: string: The creation date of the formula.
* **description**: string: The description of the formula.
* **formulaContent**: [LabVirtualMachine](#labvirtualmachine): The content of the formula.
* **osType**: string: The OS type of the formula.
* **provisioningState**: string: The provisioning status of the resource.
* **vm**: [FormulaPropertiesFromVm](#formulapropertiesfromvm): Information about a VM from which a formula is to be created.

## FormulaPropertiesFromVm
### Properties
* **labVmId**: string: The identifier of the VM from which a formula is to be created.

## FormulaTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryImageReference
### Properties
* **offer**: string: The offer of the gallery image.
* **osType**: string: The OS type of the gallery image.
* **publisher**: string: The publisher of the gallery image.
* **sku**: string: The SKU of the gallery image.
* **version**: string: The version of the gallery image.

## HourDetails
### Properties
* **minute**: int: Minutes of the hour the schedule will run.

## LabProperties
### Properties
* **artifactsStorageAccount**: string: The artifact storage account of the lab.
* **createdDate**: string: The creation date of the lab.
* **defaultStorageAccount**: string: The lab's default storage account.
* **defaultVirtualNetworkId**: string: The default virtual network identifier of the lab.
* **labStorageType**: 'Premium' | 'Standard' | string: The type of the lab storage.
* **provisioningState**: string: The provisioning status of the resource.
* **storageAccounts**: string[]: The storage accounts of the lab.
* **vaultName**: string: The name of the key vault of the lab.

## LabTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LabVhd
### Properties
* **id**: string: The absolute URI of the VHD.

## LabVirtualMachine
### Properties
* **id**: string: The identifier of the resource.
* **location**: string: The location of the resource.
* **name**: string: The name of the resource.
* **properties**: [LabVirtualMachineProperties](#labvirtualmachineproperties): The properties of the resource.
* **tags**: [LabVirtualMachineTags](#labvirtualmachinetags): The tags of the resource.
* **type**: string: The type of the resource.

## LabVirtualMachineProperties
### Properties
* **artifactDeploymentStatus**: [ArtifactDeploymentStatusProperties](#artifactdeploymentstatusproperties): The artifact deployment status for the virtual machine.
* **artifacts**: [ArtifactInstallProperties](#artifactinstallproperties)[]: The artifacts to be installed on the virtual machine.
* **computeId**: string: The resource identifier (Microsoft.Compute) of the virtual machine.
* **createdByUser**: string: The email address of creator of the virtual machine.
* **createdByUserId**: string: The object identifier of the creator of the virtual machine.
* **customImageId**: string: The custom image identifier of the virtual machine.
* **disallowPublicIpAddress**: bool: Indicates whether the virtual machine is to be created without a public IP address.
* **fqdn**: string: The fully-qualified domain name of the virtual machine.
* **galleryImageReference**: [GalleryImageReference](#galleryimagereference): The Microsoft Azure Marketplace image reference of the virtual machine.
* **isAuthenticationWithSshKey**: bool: A value indicating whether this virtual machine uses an SSH key for authentication.
* **labSubnetName**: string: The lab subnet name of the virtual machine.
* **labVirtualNetworkId**: string: The lab virtual network identifier of the virtual machine.
* **notes**: string: The notes of the virtual machine.
* **osType**: string: The OS type of the virtual machine.
* **ownerObjectId**: string: The object identifier of the owner of the virtual machine.
* **password**: string: The password of the virtual machine administrator.
* **provisioningState**: string: The provisioning status of the resource.
* **size**: string: The size of the virtual machine.
* **sshKey**: string: The SSH key of the virtual machine administrator.
* **userName**: string: The user name of the virtual machine.

## LabVirtualMachineTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LabVirtualMachineTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinuxOsInfo
### Properties
* **linuxOsState**: 'DeprovisionApplied' | 'DeprovisionRequested' | 'NonDeprovisioned' | string: The state of the Linux OS.

## PolicyProperties
### Properties
* **description**: string: The description of the policy.
* **evaluatorType**: 'AllowedValuesPolicy' | 'MaxValuePolicy' | string: The evaluator type of the policy.
* **factData**: string: The fact data of the policy.
* **factName**: 'GalleryImage' | 'LabVmCount' | 'LabVmSize' | 'UserOwnedLabVmCount' | 'UserOwnedLabVmCountInSubnet' | string: The fact name of the policy.
* **provisioningState**: string: The provisioning status of the resource.
* **status**: 'Disabled' | 'Enabled' | string: The status of the policy.
* **threshold**: string: The threshold of the policy.

## PolicyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResponseWithContinuationLabVhd
### Properties
* **nextLink**: string: Link for next set of results.
* **value**: [LabVhd](#labvhd)[]: Results of the list operation.

## ScheduleProperties
### Properties
* **dailyRecurrence**: [DayDetails](#daydetails): The daily recurrence of the schedule.
* **hourlyRecurrence**: [HourDetails](#hourdetails): The hourly recurrence of the schedule.
* **provisioningState**: string: The provisioning status of the resource.
* **status**: 'Disabled' | 'Enabled' | string: The status of the schedule.
* **taskType**: 'LabBillingTask' | 'LabVmsShutdownTask' | 'LabVmsStartupTask' | string: The task type of the schedule.
* **timeZoneId**: string: The time zone id.
* **weeklyRecurrence**: [WeekDetails](#weekdetails): The weekly recurrence of the schedule.

## ScheduleTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Subnet
### Properties
* **allowPublicIp**: 'Allow' | 'Default' | 'Deny' | string
* **labSubnetName**: string
* **resourceId**: string

## SubnetOverride
### Properties
* **labSubnetName**: string: The name given to the subnet within the lab.
* **resourceId**: string: The resource identifier of the subnet.
* **useInVmCreationPermission**: 'Allow' | 'Default' | 'Deny' | string: Indicates whether this subnet can be used during virtual machine creation.
* **usePublicIpAddressPermission**: 'Allow' | 'Default' | 'Deny' | string: Indicates whether public IP addresses can be assigned to virtual machines on this subnet.

## VirtualNetworkProperties
### Properties
* **allowedSubnets**: [Subnet](#subnet)[]: The allowed subnets of the virtual network.
* **description**: string: The description of the virtual network.
* **externalProviderResourceId**: string: The Microsoft.Network resource identifier of the virtual network.
* **provisioningState**: string: The provisioning status of the resource.
* **subnetOverrides**: [SubnetOverride](#subnetoverride)[]: The subnet overrides of the virtual network.

## VirtualNetworkTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WeekDetails
### Properties
* **time**: string: The time of the day.
* **weekdays**: string[]: The days of the week.

## WindowsOsInfo
### Properties
* **windowsOsState**: 'NonSysprepped' | 'SysprepApplied' | 'SysprepRequested' | string: The state of the Windows OS.

