# Microsoft.DevTestLab @ 2018-09-15

## Resource Microsoft.DevTestLab/labs@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabProperties](#labproperties): Properties of a lab.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/artifactsources@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArtifactSourceProperties](#artifactsourceproperties) (Required): Properties of an artifact source.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/artifactsources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/costs@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabCostProperties](#labcostproperties) (Required): Properties of a cost item.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/costs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/customimages@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomImageProperties](#customimageproperties) (Required): Properties of a custom image.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/customimages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/formulas@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FormulaProperties](#formulaproperties) (Required): Properties of a formula.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/formulas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/notificationchannels@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationChannelProperties](#notificationchannelproperties) (Required): Properties of a schedule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/notificationchannels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/policysets/policies@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyProperties](#policyproperties) (Required): Properties of a Policy.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/policysets/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/schedules@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties) (Required): Properties of a schedule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/servicerunners@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Properties of a managed identity
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/servicerunners' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/users@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties): Properties of a lab user profile.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/users' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/users/disks@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskProperties](#diskproperties) (Required): Properties of a disk.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/users/disks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/users/environments@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentProperties](#environmentproperties) (Required): Properties of an environment.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/users/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/users/secrets@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecretProperties](#secretproperties) (Required): Properties of a secret.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/users/secrets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/users/servicefabrics@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceFabricProperties](#servicefabricproperties) (Required): Properties of a service fabric.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/users/servicefabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/users/servicefabrics/schedules@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties) (Required): Properties of a schedule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/users/servicefabrics/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/virtualmachines@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabVirtualMachineProperties](#labvirtualmachineproperties) (Required): Properties of a virtual machine.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/virtualmachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/virtualmachines/schedules@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties) (Required): Properties of a schedule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/virtualmachines/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/labs/virtualnetworks@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties): Properties of a virtual network.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/labs/virtualnetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevTestLab/schedules@2018-09-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties) (Required): Properties of a schedule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.DevTestLab/schedules' (ReadOnly, DeployTimeConstant): The resource type

## LabProperties
### Properties
* **announcement**: [LabAnnouncementProperties](#labannouncementproperties): Properties of a lab's announcement banner
* **artifactsStorageAccount**: string (ReadOnly): The lab's artifact storage account.
* **createdDate**: string (ReadOnly): The creation date of the lab.
* **defaultPremiumStorageAccount**: string (ReadOnly): The lab's default premium storage account.
* **defaultStorageAccount**: string (ReadOnly): The lab's default storage account.
* **environmentPermission**: 'Contributor' | 'Reader': The access rights to be granted to the user when provisioning an environment.
* **extendedProperties**: [Dictionary<string,String>](#dictionarystringstring): Extended properties of the lab used for experimental features
* **labStorageType**: 'Premium' | 'Standard' | 'StandardSSD': Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
* **loadBalancerId**: string (ReadOnly): The load balancer used to for lab VMs that use shared IP address.
* **mandatoryArtifactsResourceIdsLinux**: string[]: The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
* **mandatoryArtifactsResourceIdsWindows**: string[]: The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
* **networkSecurityGroupId**: string (ReadOnly): The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
* **premiumDataDisks**: 'Disabled' | 'Enabled': The setting to enable usage of premium data disks.
When its value is 'Enabled', creation of standard or premium data disks is allowed.
When its value is 'Disabled', only creation of standard data disks is allowed.
* **premiumDataDiskStorageAccount**: string (ReadOnly): The lab's premium data disk storage account.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **publicIpId**: string (ReadOnly): The public IP address for the lab's load balancer.
* **support**: [LabSupportProperties](#labsupportproperties): Properties of a lab's support banner
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).
* **vaultName**: string (ReadOnly): The lab's Key vault.
* **vmCreationResourceGroup**: string (ReadOnly): The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.

## LabAnnouncementProperties
### Properties
* **enabled**: 'Disabled' | 'Enabled': Is the lab announcement active/enabled at this time?.
* **expirationDate**: string: The time at which the announcement expires (null for never)
* **expired**: bool: Has this announcement expired?
* **markdown**: string: The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **title**: string: The plain text title for the lab announcement
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LabSupportProperties
### Properties
* **enabled**: 'Disabled' | 'Enabled': Is the lab support banner active/enabled at this time?.
* **markdown**: string: The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ArtifactSourceProperties
### Properties
* **armTemplateFolderPath**: string: The folder containing Azure Resource Manager templates.
* **branchRef**: string: The artifact source's branch reference.
* **createdDate**: string (ReadOnly): The artifact source's creation date.
* **displayName**: string: The artifact source's display name.
* **folderPath**: string: The folder containing artifacts.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **securityToken**: string: The security token to authenticate to the artifact source.
* **sourceType**: 'GitHub' | 'StorageAccount' | 'VsoGit': The artifact source's type.
* **status**: 'Disabled' | 'Enabled': Indicates if the artifact source is enabled (values: Enabled, Disabled).
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).
* **uri**: string: The artifact source's URI.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LabCostProperties
### Properties
* **createdDate**: string: The creation date of the cost.
* **currencyCode**: string: The currency code of the cost.
* **endDateTime**: string: The end time of the cost data.
* **labCostDetails**: [LabCostDetailsProperties](#labcostdetailsproperties)[] (ReadOnly): The lab cost details component of the cost data.
* **labCostSummary**: [LabCostSummaryProperties](#labcostsummaryproperties) (ReadOnly): The properties of the cost summary.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **resourceCosts**: [LabResourceCostProperties](#labresourcecostproperties)[] (ReadOnly): The resource cost component of the cost data.
* **startDateTime**: string: The start time of the cost data.
* **targetCost**: [TargetCostProperties](#targetcostproperties): Properties of a cost target.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).

## LabCostDetailsProperties
### Properties
* **cost**: int: The cost component of the cost item.
* **costType**: 'Projected' | 'Reported' | 'Unavailable': The type of the cost.
* **date**: string: The date of the cost item.

## LabCostSummaryProperties
### Properties
* **estimatedLabCost**: int: The cost component of the cost item.

## LabResourceCostProperties
### Properties
* **externalResourceId**: string: The ID of the external resource
* **resourceCost**: int: The cost component of the resource cost item.
* **resourceId**: string: The ID of the resource
* **resourcename**: string: The name of the resource.
* **resourceOwner**: string: The owner of the resource (ex. janedoe@microsoft.com)
* **resourcePricingTier**: string: The category of the resource (ex. Premium_LRS, Standard_DS1)
* **resourceStatus**: string: The status of the resource (ex. Active)
* **resourceType**: string: The logical resource type (ex. virtualmachine, storageaccount)
* **resourceUId**: string: The unique identifier of the resource.

## TargetCostProperties
### Properties
* **costThresholds**: [CostThresholdProperties](#costthresholdproperties)[]: Cost thresholds.
* **cycleEndDateTime**: string: Reporting cycle end date.
* **cycleStartDateTime**: string: Reporting cycle start date.
* **cycleType**: 'CalendarMonth' | 'Custom': Reporting cycle type.
* **status**: 'Disabled' | 'Enabled': Target cost status.
* **target**: int: Lab target cost

## CostThresholdProperties
### Properties
* **displayOnChart**: 'Disabled' | 'Enabled': Indicates whether this threshold will be displayed on cost charts.
* **notificationSent**: string: Indicates the datetime when notifications were last sent for this threshold.
* **percentageThreshold**: [PercentageCostThresholdProperties](#percentagecostthresholdproperties): Properties of a percentage cost threshold.
* **sendNotificationWhenExceeded**: 'Disabled' | 'Enabled': Indicates whether notifications will be sent when this threshold is exceeded.
* **thresholdId**: string: The ID of the cost threshold item.

## PercentageCostThresholdProperties
### Properties
* **thresholdValue**: int: The cost threshold value.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomImageProperties
### Properties
* **author**: string: The author of the custom image.
* **creationDate**: string (ReadOnly): The creation date of the custom image.
* **customImagePlan**: [CustomImagePropertiesFromPlan](#customimagepropertiesfromplan): Properties for plan on a custom image.
* **dataDiskStorageInfo**: [DataDiskStorageTypeInfo](#datadiskstoragetypeinfo)[]: Storage information about the data disks present in the custom image
* **description**: string: The description of the custom image.
* **isPlanAuthorized**: bool: Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
* **managedImageId**: string: The Managed Image Id backing the custom image.
* **managedSnapshotId**: string: The Managed Snapshot Id backing the custom image.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).
* **vhd**: [CustomImagePropertiesCustom](#customimagepropertiescustom): Properties for creating a custom image from a VHD.
* **vm**: [CustomImagePropertiesFromVm](#customimagepropertiesfromvm): Properties for creating a custom image from a virtual machine.

## CustomImagePropertiesFromPlan
### Properties
* **id**: string: The id of the plan, equivalent to name of the plan
* **offer**: string: The offer for the plan from the marketplace image the custom image is derived from
* **publisher**: string: The publisher for the plan from the marketplace image the custom image is derived from

## DataDiskStorageTypeInfo
### Properties
* **lun**: string: Disk Lun
* **storageType**: 'Premium' | 'Standard' | 'StandardSSD': Disk Storage Type.

## CustomImagePropertiesCustom
### Properties
* **imageName**: string: The image name.
* **osType**: 'Linux' | 'None' | 'Windows' (Required): The OS type of the custom image (i.e. Windows, Linux).
* **sysPrep**: bool: Indicates whether sysprep has been run on the VHD.

## CustomImagePropertiesFromVm
### Properties
* **linuxOsInfo**: [LinuxOsInfo](#linuxosinfo): Information about a Linux OS.
* **sourceVmId**: string: The source vm identifier.
* **windowsOsInfo**: [WindowsOsInfo](#windowsosinfo): Information about a Windows OS.

## LinuxOsInfo
### Properties
* **linuxOsState**: 'DeprovisionApplied' | 'DeprovisionRequested' | 'NonDeprovisioned': The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied).

## WindowsOsInfo
### Properties
* **windowsOsState**: 'NonSysprepped' | 'SysprepApplied' | 'SysprepRequested': The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FormulaProperties
### Properties
* **author**: string (ReadOnly): The author of the formula.
* **creationDate**: string (ReadOnly): The creation date of the formula.
* **description**: string: The description of the formula.
* **formulaContent**: [LabVirtualMachineCreationParameter](#labvirtualmachinecreationparameter): Properties for creating a virtual machine.
* **osType**: string: The OS type of the formula.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).
* **vm**: [FormulaPropertiesFromVm](#formulapropertiesfromvm): Information about a VM from which a formula is to be created.

## LabVirtualMachineCreationParameter
### Properties
* **location**: string: The location of the new virtual machine or environment
* **name**: string: The name of the virtual machine or environment
* **properties**: [LabVirtualMachineCreationParameterProperties](#labvirtualmachinecreationparameterproperties): Properties for virtual machine creation.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.

## LabVirtualMachineCreationParameterProperties
### Properties
* **allowClaim**: bool: Indicates whether another user can take ownership of the virtual machine
* **artifacts**: [ArtifactInstallProperties](#artifactinstallproperties)[]: The artifacts to be installed on the virtual machine.
* **bulkCreationParameters**: [BulkCreationParameters](#bulkcreationparameters): Parameters for creating multiple virtual machines as a single action.
* **createdDate**: string: The creation date of the virtual machine.
* **customImageId**: string: The custom image identifier of the virtual machine.
* **dataDiskParameters**: [DataDiskProperties](#datadiskproperties)[]: New or existing data disks to attach to the virtual machine after creation
* **disallowPublicIpAddress**: bool: Indicates whether the virtual machine is to be created without a public IP address.
* **environmentId**: string: The resource ID of the environment that contains this virtual machine, if any.
* **expirationDate**: string: The expiration date for VM.
* **galleryImageReference**: [GalleryImageReference](#galleryimagereference): The reference information for an Azure Marketplace image.
* **isAuthenticationWithSshKey**: bool: Indicates whether this virtual machine uses an SSH key for authentication.
* **labSubnetName**: string: The lab subnet name of the virtual machine.
* **labVirtualNetworkId**: string: The lab virtual network identifier of the virtual machine.
* **networkInterface**: [NetworkInterfaceProperties](#networkinterfaceproperties): Properties of a network interface.
* **notes**: string: The notes of the virtual machine.
* **ownerObjectId**: string: The object identifier of the owner of the virtual machine.
* **ownerUserPrincipalName**: string: The user principal name of the virtual machine owner.
* **password**: string: The password of the virtual machine administrator.
* **planId**: string: The id of the plan associated with the virtual machine image
* **scheduleParameters**: [ScheduleCreationParameter](#schedulecreationparameter)[]: Virtual Machine schedules to be created
* **size**: string: The size of the virtual machine.
* **sshKey**: string: The SSH key of the virtual machine administrator.
* **storageType**: string: Storage type to use for virtual machine (i.e. Standard, Premium).
* **userName**: string: The user name of the virtual machine.

## ArtifactInstallProperties
### Properties
* **artifactId**: string: The artifact's identifier.
* **artifactTitle**: string: The artifact's title.
* **deploymentStatusMessage**: string: The status message from the deployment.
* **installTime**: string: The time that the artifact starts to install on the virtual machine.
* **parameters**: [ArtifactParameterProperties](#artifactparameterproperties)[]: The parameters of the artifact.
* **status**: string: The status of the artifact.
* **vmExtensionStatusMessage**: string: The status message from the virtual machine extension.

## ArtifactParameterProperties
### Properties
* **name**: string: The name of the artifact parameter.
* **value**: string: The value of the artifact parameter.

## BulkCreationParameters
### Properties
* **instanceCount**: int: The number of virtual machine instances to create.

## DataDiskProperties
### Properties
* **attachNewDataDiskOptions**: [AttachNewDataDiskOptions](#attachnewdatadiskoptions): Properties to attach new disk to the Virtual Machine.
* **existingLabDiskId**: string: Specifies the existing lab disk id to attach to virtual machine.
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite': Caching option for a data disk (i.e. None, ReadOnly, ReadWrite).

## AttachNewDataDiskOptions
### Properties
* **diskName**: string: The name of the disk to be attached.
* **diskSizeGiB**: int: Size of the disk to be attached in Gibibytes.
* **diskType**: 'Premium' | 'Standard' | 'StandardSSD': The storage type for the disk (i.e. Standard, Premium).

## GalleryImageReference
### Properties
* **offer**: string: The offer of the gallery image.
* **osType**: string: The OS type of the gallery image.
* **publisher**: string: The publisher of the gallery image.
* **sku**: string: The SKU of the gallery image.
* **version**: string: The version of the gallery image.

## NetworkInterfaceProperties
### Properties
* **dnsName**: string: The DNS name.
* **privateIpAddress**: string: The private IP address.
* **publicIpAddress**: string: The public IP address.
* **publicIpAddressId**: string: The resource ID of the public IP address.
* **rdpAuthority**: string: The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
* **sharedPublicIpAddressConfiguration**: [SharedPublicIpAddressConfiguration](#sharedpublicipaddressconfiguration): Properties of a virtual machine that determine how it is connected to a load balancer.
* **sshAuthority**: string: The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.
* **subnetId**: string: The resource ID of the sub net.
* **virtualNetworkId**: string: The resource ID of the virtual network.

## SharedPublicIpAddressConfiguration
### Properties
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]: The incoming NAT rules

## InboundNatRule
### Properties
* **backendPort**: int: The port to which the external traffic will be redirected.
* **frontendPort**: int: The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
* **transportProtocol**: 'Tcp' | 'Udp': The transport protocol for the endpoint.

## ScheduleCreationParameter
### Properties
* **location**: string: The location of the new virtual machine or environment
* **name**: string: The name of the virtual machine or environment
* **properties**: [ScheduleCreationParameterProperties](#schedulecreationparameterproperties): Properties for schedule creation.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.

## ScheduleCreationParameterProperties
### Properties
* **dailyRecurrence**: [DayDetails](#daydetails): Properties of a daily schedule.
* **hourlyRecurrence**: [HourDetails](#hourdetails): Properties of an hourly schedule.
* **notificationSettings**: [NotificationSettings](#notificationsettings): Notification settings for a schedule.
* **status**: 'Disabled' | 'Enabled': The status of the schedule (i.e. Enabled, Disabled).
* **targetResourceId**: string: The resource ID to which the schedule belongs
* **taskType**: string: The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
* **timeZoneId**: string: The time zone ID (e.g. Pacific Standard time).
* **weeklyRecurrence**: [WeekDetails](#weekdetails): Properties of a weekly schedule.

## DayDetails
### Properties
* **time**: string: The time of day the schedule will occur.

## HourDetails
### Properties
* **minute**: int: Minutes of the hour the schedule will run.

## NotificationSettings
### Properties
* **emailRecipient**: string: The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
* **notificationLocale**: string: The locale to use when sending a notification (fallback for unsupported languages is EN).
* **status**: 'Disabled' | 'Enabled': If notifications are enabled for this schedule (i.e. Enabled, Disabled).
* **timeInMinutes**: int: Time in minutes before event at which notification will be sent.
* **webhookUrl**: string: The webhook URL to which the notification will be sent.

## WeekDetails
### Properties
* **time**: string: The time of the day the schedule will occur.
* **weekdays**: string[]: The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## NotificationChannelProperties
### Properties
* **createdDate**: string (ReadOnly): The creation date of the notification channel.
* **description**: string: Description of notification.
* **emailRecipient**: string: The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
* **events**: [Event](#event)[]: The list of event for which this notification is enabled.
* **notificationLocale**: string: The locale to use when sending a notification (fallback for unsupported languages is EN).
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).
* **webHookUrl**: string: The webhook URL to send notifications to.

## Event
### Properties
* **eventName**: 'AutoShutdown' | 'Cost': The event type for which this notification is enabled (i.e. AutoShutdown, Cost).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PolicyProperties
### Properties
* **createdDate**: string (ReadOnly): The creation date of the policy.
* **description**: string: The description of the policy.
* **evaluatorType**: 'AllowedValuesPolicy' | 'MaxValuePolicy': The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
* **factData**: string: The fact data of the policy.
* **factName**: 'EnvironmentTemplate' | 'GalleryImage' | 'LabPremiumVmCount' | 'LabTargetCost' | 'LabVmCount' | 'LabVmSize' | 'ScheduleEditPermission' | 'UserOwnedLabPremiumVmCount' | 'UserOwnedLabVmCount' | 'UserOwnedLabVmCountInSubnet': The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **status**: 'Disabled' | 'Enabled': The status of the policy.
* **threshold**: string: The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleProperties
### Properties
* **createdDate**: string (ReadOnly): The creation date of the schedule.
* **dailyRecurrence**: [DayDetails](#daydetails): Properties of a daily schedule.
* **hourlyRecurrence**: [HourDetails](#hourdetails): Properties of an hourly schedule.
* **notificationSettings**: [NotificationSettings](#notificationsettings): Notification settings for a schedule.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **status**: 'Disabled' | 'Enabled': The status of the schedule (i.e. Enabled, Disabled).
* **targetResourceId**: string: The resource ID to which the schedule belongs
* **taskType**: string: The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
* **timeZoneId**: string: The time zone ID (e.g. Pacific Standard time).
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).
* **weeklyRecurrence**: [WeekDetails](#weekdetails): Properties of a weekly schedule.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IdentityProperties
### Properties
* **clientSecretUrl**: string: The client secret URL of the identity.
* **principalId**: string: The principal id of resource identity.
* **tenantId**: string: The tenant identifier of resource.
* **type**: 'None' | 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned': Managed identity.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserProperties
### Properties
* **createdDate**: string (ReadOnly): The creation date of the user profile.
* **identity**: [UserIdentity](#useridentity): Identity attributes of a lab user.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **secretStore**: [UserSecretStore](#usersecretstore): Properties of a user's secret store.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).

## UserIdentity
### Properties
* **appId**: string: Set to the app Id of the client JWT making the request.
* **objectId**: string: Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available.
* **principalId**: string: Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id.
* **principalName**: string: Set to the principal name / UPN of the client JWT making the request.
* **tenantId**: string: Set to the tenant ID of the client JWT making the request.

## UserSecretStore
### Properties
* **keyVaultId**: string: The ID of the user's Key vault.
* **keyVaultUri**: string: The URI of the user's Key vault.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DiskProperties
### Properties
* **createdDate**: string (ReadOnly): The creation date of the disk.
* **diskBlobName**: string: When backed by a blob, the name of the VHD blob without extension.
* **diskSizeGiB**: int: The size of the disk in Gibibytes.
* **diskType**: 'Premium' | 'Standard' | 'StandardSSD': The storage type for the disk (i.e. Standard, Premium).
* **diskUri**: string: When backed by a blob, the URI of underlying blob.
* **hostCaching**: string: The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
* **leasedByLabVmId**: string: The resource ID of the VM to which this disk is leased.
* **managedDiskId**: string: When backed by managed disk, this is the ID of the compute disk resource.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **storageAccountId**: string: When backed by a blob, the storage account where the blob is.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentProperties
### Properties
* **armTemplateDisplayName**: string: The display name of the Azure Resource Manager template that produced the environment.
* **createdByUser**: string (ReadOnly): The creator of the environment.
* **deploymentProperties**: [EnvironmentDeploymentProperties](#environmentdeploymentproperties): Properties of an environment deployment.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **resourceGroupId**: string (ReadOnly): The identifier of the resource group containing the environment's resources.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).

## EnvironmentDeploymentProperties
### Properties
* **armTemplateId**: string: The Azure Resource Manager template's identifier.
* **parameters**: [ArmTemplateParameterProperties](#armtemplateparameterproperties)[]: The parameters of the Azure Resource Manager template.

## ArmTemplateParameterProperties
### Properties
* **name**: string: The name of the template parameter.
* **value**: string: The value of the template parameter.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).
* **value**: string: The value of the secret for secret creation.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceFabricProperties
### Properties
* **applicableSchedule**: [ApplicableSchedule](#applicableschedule) (ReadOnly): Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.
* **environmentId**: string: The resource id of the environment under which the service fabric resource is present
* **externalServiceFabricId**: string: The backing service fabric resource's id
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).

## ApplicableSchedule
### Properties
* **id**: string (ReadOnly): The identifier of the resource.
* **location**: string: The location of the resource.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [ApplicableScheduleProperties](#applicablescheduleproperties) (Required): Properties of a schedules applicable to a virtual machine.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: string (ReadOnly): The type of the resource.

## ApplicableScheduleProperties
### Properties
* **labVmsShutdown**: [Schedule](#schedule): A schedule.
* **labVmsStartup**: [Schedule](#schedule): A schedule.

## Schedule
### Properties
* **id**: string (ReadOnly): The identifier of the resource.
* **location**: string: The location of the resource.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [ScheduleProperties](#scheduleproperties) (Required): Properties of a schedule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: string (ReadOnly): The type of the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LabVirtualMachineProperties
### Properties
* **allowClaim**: bool: Indicates whether another user can take ownership of the virtual machine
* **applicableSchedule**: [ApplicableSchedule](#applicableschedule) (ReadOnly): Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.
* **artifactDeploymentStatus**: [ArtifactDeploymentStatusProperties](#artifactdeploymentstatusproperties) (ReadOnly): Properties of an artifact deployment.
* **artifacts**: [ArtifactInstallProperties](#artifactinstallproperties)[]: The artifacts to be installed on the virtual machine.
* **computeId**: string (ReadOnly): The resource identifier (Microsoft.Compute) of the virtual machine.
* **computeVm**: [ComputeVmProperties](#computevmproperties) (ReadOnly): Properties of a virtual machine returned by the Microsoft.Compute API.
* **createdByUser**: string (ReadOnly): The email address of creator of the virtual machine.
* **createdByUserId**: string (ReadOnly): The object identifier of the creator of the virtual machine.
* **createdDate**: string: The creation date of the virtual machine.
* **customImageId**: string: The custom image identifier of the virtual machine.
* **dataDiskParameters**: [DataDiskProperties](#datadiskproperties)[]: New or existing data disks to attach to the virtual machine after creation
* **disallowPublicIpAddress**: bool: Indicates whether the virtual machine is to be created without a public IP address.
* **environmentId**: string: The resource ID of the environment that contains this virtual machine, if any.
* **expirationDate**: string: The expiration date for VM.
* **fqdn**: string (ReadOnly): The fully-qualified domain name of the virtual machine.
* **galleryImageReference**: [GalleryImageReference](#galleryimagereference): The reference information for an Azure Marketplace image.
* **isAuthenticationWithSshKey**: bool: Indicates whether this virtual machine uses an SSH key for authentication.
* **labSubnetName**: string: The lab subnet name of the virtual machine.
* **labVirtualNetworkId**: string: The lab virtual network identifier of the virtual machine.
* **lastKnownPowerState**: string (ReadOnly): Last known compute power state captured in DTL
* **networkInterface**: [NetworkInterfaceProperties](#networkinterfaceproperties): Properties of a network interface.
* **notes**: string: The notes of the virtual machine.
* **osType**: string (ReadOnly): The OS type of the virtual machine.
* **ownerObjectId**: string: The object identifier of the owner of the virtual machine.
* **ownerUserPrincipalName**: string: The user principal name of the virtual machine owner.
* **password**: string: The password of the virtual machine administrator.
* **planId**: string: The id of the plan associated with the virtual machine image
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **scheduleParameters**: [ScheduleCreationParameter](#schedulecreationparameter)[]: Virtual Machine schedules to be created
* **size**: string: The size of the virtual machine.
* **sshKey**: string: The SSH key of the virtual machine administrator.
* **storageType**: string: Storage type to use for virtual machine (i.e. Standard, Premium).
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).
* **userName**: string: The user name of the virtual machine.
* **virtualMachineCreationSource**: 'FromCustomImage' | 'FromGalleryImage' | 'FromSharedGalleryImage' (ReadOnly): Tells source of creation of lab virtual machine. Output property only.

## ArtifactDeploymentStatusProperties
### Properties
* **artifactsApplied**: int: The total count of the artifacts that were successfully applied.
* **deploymentStatus**: string: The deployment status of the artifact.
* **totalArtifacts**: int: The total count of the artifacts that were tentatively applied.

## ComputeVmProperties
### Properties
* **dataDiskIds**: string[]: Gets data disks blob uri for the virtual machine.
* **dataDisks**: [ComputeDataDisk](#computedatadisk)[]: Gets all data disks attached to the virtual machine.
* **networkInterfaceId**: string: Gets the network interface ID of the virtual machine.
* **osDiskId**: string: Gets OS disk blob uri for the virtual machine.
* **osType**: string: Gets the OS type of the virtual machine.
* **statuses**: [ComputeVmInstanceViewStatus](#computevminstanceviewstatus)[]: Gets the statuses of the virtual machine.
* **vmSize**: string: Gets the size of the virtual machine.

## ComputeDataDisk
### Properties
* **diskSizeGiB**: int: Gets data disk size in GiB.
* **diskUri**: string: When backed by a blob, the URI of underlying blob.
* **managedDiskId**: string: When backed by managed disk, this is the ID of the compute disk resource.
* **name**: string: Gets data disk name.

## ComputeVmInstanceViewStatus
### Properties
* **code**: string: Gets the status Code.
* **displayStatus**: string: Gets the short localizable label for the status.
* **message**: string: Gets the message associated with the status.

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
* **createdDate**: string (ReadOnly): The creation date of the virtual network.
* **description**: string: The description of the virtual network.
* **externalProviderResourceId**: string: The Microsoft.Network resource identifier of the virtual network.
* **externalSubnets**: [ExternalSubnet](#externalsubnet)[] (ReadOnly): The external subnet properties.
* **provisioningState**: string (ReadOnly): The provisioning status of the resource.
* **subnetOverrides**: [SubnetOverride](#subnetoverride)[]: The subnet overrides of the virtual network.
* **uniqueIdentifier**: string (ReadOnly): The unique immutable identifier of a resource (Guid).

## Subnet
### Properties
* **allowPublicIp**: 'Allow' | 'Default' | 'Deny': The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)).
* **labSubnetName**: string: The name of the subnet as seen in the lab.
* **resourceId**: string: The resource ID of the subnet.

## ExternalSubnet
### Properties
* **id**: string: Gets or sets the identifier.
* **name**: string: Gets or sets the name.

## SubnetOverride
### Properties
* **labSubnetName**: string: The name given to the subnet within the lab.
* **resourceId**: string: The resource ID of the subnet.
* **sharedPublicIpAddressConfiguration**: [SubnetSharedPublicIpAddressConfiguration](#subnetsharedpublicipaddressconfiguration): Configuration for public IP address sharing.
* **useInVmCreationPermission**: 'Allow' | 'Default' | 'Deny': Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny).
* **usePublicIpAddressPermission**: 'Allow' | 'Default' | 'Deny': Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny).
* **virtualNetworkPoolName**: string: The virtual network pool associated with this subnet.

## SubnetSharedPublicIpAddressConfiguration
### Properties
* **allowedPorts**: [Port](#port)[]: Backend ports that virtual machines on this subnet are allowed to expose

## Port
### Properties
* **backendPort**: int: Backend port of the target virtual machine.
* **transportProtocol**: 'Tcp' | 'Udp': Protocol type of the port.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

