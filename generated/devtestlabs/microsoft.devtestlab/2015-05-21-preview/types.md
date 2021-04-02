# Microsoft.DevTestLab @ 2015-05-21-preview

## Resource Microsoft.DevTestLab/labs@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabProperties](#labproperties): Properties of a lab.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/artifactsources@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArtifactSourceProperties](#artifactsourceproperties): Properties of an artifact source.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/artifactsources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/customimages@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomImageProperties](#customimageproperties): Properties of a custom image.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/customimages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/formulas@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FormulaProperties](#formulaproperties): Properties of a formula.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/formulas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/policysets/policies@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyProperties](#policyproperties): Properties of a Policy.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/policysets/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/schedules@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties): Properties of a schedule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/virtualmachines@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabVirtualMachineProperties](#labvirtualmachineproperties): Properties of a virtual machine.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/virtualmachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/virtualnetworks@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties): Properties of a virtual network.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/virtualnetworks' (ReadOnly, DeployTimeConstant): The resource type

## LabProperties
### Properties
* **artifactsStorageAccount**: string: The artifact storage account of the lab.
* **createdDate**: string: The creation date of the lab.
* **defaultStorageAccount**: string: The lab's default storage account.
* **defaultVirtualNetworkId**: string: The default virtual network identifier of the lab.
* **labStorageType**: 'Premium' | 'Standard': The type of the lab storage. Possible values include: 'Standard', 'Premium'
* **provisioningState**: string: The provisioning status of the resource.
* **storageAccounts**: string[]: The storage accounts of the lab.
* **vaultName**: string: The name of the key vault of the lab.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ArtifactSourceProperties
### Properties
* **branchRef**: string: The branch reference of the artifact source.
* **displayName**: string: The display name of the artifact source.
* **folderPath**: string: The folder path of the artifact source.
* **provisioningState**: string: The provisioning status of the resource.
* **securityToken**: string: The security token of the artifact source.
* **sourceType**: 'GitHub' | 'VsoGit': The type of the artifact source. Possible values include: 'VsoGit', 'GitHub'
* **status**: 'Disabled' | 'Enabled': The status of the artifact source. Possible values include: 'Enabled', 'Disabled'
* **uri**: string: The URI of the artifact source.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomImageProperties
### Properties
* **author**: string: The author of the custom image.
* **creationDate**: string: The creation date of the custom image.
* **description**: string: The description of the custom image.
* **osType**: 'Linux' | 'None' | 'Windows': The OS type of the custom image. Possible values include: 'Windows', 'Linux', 'None'
* **provisioningState**: string: The provisioning status of the resource.
* **vhd**: [CustomImagePropertiesCustom](#customimagepropertiescustom): Properties for creating a custom image from a VHD.
* **vm**: [CustomImagePropertiesFromVm](#customimagepropertiesfromvm): Properties for creating a custom image from a virtual machine.

## CustomImagePropertiesCustom
### Properties
* **imageName**: string: The image name.
* **sysPrep**: bool: Indicates whether sysprep has been run on the VHD.

## CustomImagePropertiesFromVm
### Properties
* **linuxOsInfo**: [LinuxOsInfo](#linuxosinfo): Information about a Linux OS.
* **sourceVmId**: string: The source vm identifier.
* **sysPrep**: bool: Indicates whether sysprep has been run on the VHD.
* **windowsOsInfo**: [WindowsOsInfo](#windowsosinfo): Information about a Windows OS.

## LinuxOsInfo
### Properties
* **linuxOsState**: 'DeprovisionApplied' | 'DeprovisionRequested' | 'NonDeprovisioned': The state of the Linux OS. Possible values include: 'NonDeprovisioned', 'DeprovisionRequested', 'DeprovisionApplied'

## WindowsOsInfo
### Properties
* **windowsOsState**: 'NonSysprepped' | 'SysprepApplied' | 'SysprepRequested': The state of the Windows OS. Possible values include: 'NonSysprepped', 'SysprepRequested', 'SysprepApplied'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FormulaProperties
### Properties
* **author**: string: The author of the formula.
* **creationDate**: string: The creation date of the formula.
* **description**: string: The description of the formula.
* **formulaContent**: [LabVirtualMachine](#labvirtualmachine): A virtual machine.
* **osType**: string: The OS type of the formula.
* **provisioningState**: string: The provisioning status of the resource.
* **vm**: [FormulaPropertiesFromVm](#formulapropertiesfromvm): Information about a VM from which a formula is to be created.

## LabVirtualMachine
### Properties
* **id**: string: The identifier of the resource.
* **location**: string: The location of the resource.
* **name**: string: The name of the resource.
* **properties**: [LabVirtualMachineProperties](#labvirtualmachineproperties): Properties of a virtual machine.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: string: The type of the resource.

## LabVirtualMachineProperties
### Properties
* **artifactDeploymentStatus**: [ArtifactDeploymentStatusProperties](#artifactdeploymentstatusproperties): Properties of an artifact deployment.
* **artifacts**: [ArtifactInstallProperties](#artifactinstallproperties)[]: The artifacts to be installed on the virtual machine.
* **computeId**: string: The resource identifier (Microsoft.Compute) of the virtual machine.
* **createdByUser**: string: The email address of creator of the virtual machine.
* **createdByUserId**: string: The object identifier of the creator of the virtual machine.
* **customImageId**: string: The custom image identifier of the virtual machine.
* **disallowPublicIpAddress**: bool: Indicates whether the virtual machine is to be created without a public IP address.
* **fqdn**: string: The fully-qualified domain name of the virtual machine.
* **galleryImageReference**: [GalleryImageReference](#galleryimagereference): The reference information for an Azure Marketplace image.
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

## GalleryImageReference
### Properties
* **offer**: string: The offer of the gallery image.
* **osType**: string: The OS type of the gallery image.
* **publisher**: string: The publisher of the gallery image.
* **sku**: string: The SKU of the gallery image.
* **version**: string: The version of the gallery image.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FormulaPropertiesFromVm
### Properties
* **labVmId**: string: The identifier of the VM from which a formula is to be created.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PolicyProperties
### Properties
* **description**: string: The description of the policy.
* **evaluatorType**: 'AllowedValuesPolicy' | 'MaxValuePolicy': The evaluator type of the policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'
* **factData**: string: The fact data of the policy.
* **factName**: 'GalleryImage' | 'LabVmCount' | 'LabVmSize' | 'UserOwnedLabVmCount' | 'UserOwnedLabVmCountInSubnet': The fact name of the policy. Possible values include: 'UserOwnedLabVmCount', 'LabVmCount', 'LabVmSize', 'GalleryImage', 'UserOwnedLabVmCountInSubnet'
* **provisioningState**: string: The provisioning status of the resource.
* **status**: 'Disabled' | 'Enabled': The status of the policy. Possible values include: 'Enabled', 'Disabled'
* **threshold**: string: The threshold of the policy.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleProperties
### Properties
* **dailyRecurrence**: [DayDetails](#daydetails): Properties of a daily schedule.
* **hourlyRecurrence**: [HourDetails](#hourdetails): Properties of an hourly schedule.
* **provisioningState**: string: The provisioning status of the resource.
* **status**: 'Disabled' | 'Enabled': The status of the schedule. Possible values include: 'Enabled', 'Disabled'
* **taskType**: 'LabBillingTask' | 'LabVmsShutdownTask' | 'LabVmsStartupTask': The task type of the schedule. Possible values include: 'LabVmsShutdownTask', 'LabVmsStartupTask', 'LabBillingTask'
* **timeZoneId**: string: The time zone id.
* **weeklyRecurrence**: [WeekDetails](#weekdetails): Properties of a weekly schedule.

## DayDetails
### Properties
* **time**: string:

## HourDetails
### Properties
* **minute**: int: Minutes of the hour the schedule will run.

## WeekDetails
### Properties
* **time**: string: The time of the day.
* **weekdays**: string[]: The days of the week.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkProperties
### Properties
* **allowedSubnets**: [Subnet](#subnet)[]: The allowed subnets of the virtual network.
* **description**: string: The description of the virtual network.
* **externalProviderResourceId**: string: The Microsoft.Network resource identifier of the virtual network.
* **provisioningState**: string: The provisioning status of the resource.
* **subnetOverrides**: [SubnetOverride](#subnetoverride)[]: The subnet overrides of the virtual network.

## Subnet
### Properties
* **allowPublicIp**: 'Allow' | 'Default' | 'Deny': Possible values include: 'Default', 'Deny', 'Allow'
* **labSubnetName**: string:
* **resourceId**: string:

## SubnetOverride
### Properties
* **labSubnetName**: string: The name given to the subnet within the lab.
* **resourceId**: string: The resource identifier of the subnet.
* **useInVmCreationPermission**: 'Allow' | 'Default' | 'Deny': Indicates whether this subnet can be used during virtual machine creation. Possible values include: 'Default', 'Deny', 'Allow'
* **usePublicIpAddressPermission**: 'Allow' | 'Default' | 'Deny': Indicates whether public IP addresses can be assigned to virtual machines on this subnet. Possible values include: 'Default', 'Deny', 'Allow'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

