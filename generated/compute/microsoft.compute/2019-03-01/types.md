# Microsoft.Compute @ 2019-03-01

## Resource Microsoft.Compute/availabilitySets@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties): The instance view of a resource.
* **sku**: [Sku](#sku): Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/disks@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **managedBy**: string (ReadOnly): A relative URI containing the ID of the VM that has the disk attached.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskProperties](#diskproperties): Disk resource properties.
* **sku**: [DiskSku](#disksku): The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/disks' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The Logical zone list for Disk.

## Resource Microsoft.Compute/galleries@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryProperties](#galleryproperties): Describes the properties of a Shared Image Gallery.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationProperties](#galleryapplicationproperties): Describes the properties of a gallery Application Definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications/versions@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationVersionProperties](#galleryapplicationversionproperties): Describes the properties of a gallery Image Version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): Describes the properties of a gallery Image Definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images/versions@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageVersionProperties](#galleryimageversionproperties): Describes the properties of a gallery Image Version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/hostGroups@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHostGroupProperties](#dedicatedhostgroupproperties): Dedicated Host Group Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/hostGroups' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.

## Resource Microsoft.Compute/hostGroups/hosts@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHostProperties](#dedicatedhostproperties): Properties of the dedicated host.
* **sku**: [Sku](#sku) (Required): SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/hostGroups/hosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/images@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties): Describes the properties of an Image.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions@2019-03-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The supported Azure location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineImageProperties](#virtualmachineimageproperties) (ReadOnly): Describes the properties of a Virtual Machine Image.
* **tags**: [VirtualMachineImageResourceTags](#virtualmachineimageresourcetags) (ReadOnly): Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md).
* **type**: 'Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/locations/publishers/artifacttypes/types/versions@2019-03-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionImageProperties](#virtualmachineextensionimageproperties) (ReadOnly): Describes the properties of a Virtual Machine Extension Image.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Compute/locations/publishers/artifacttypes/types/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/proximityPlacementGroups@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProximityPlacementGroupProperties](#proximityplacementgroupproperties): Describes the properties of a Proximity Placement Group.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/proximityPlacementGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/snapshots@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **managedBy**: string (ReadOnly): Unused. Always Null.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Snapshot resource properties.
* **sku**: [SnapshotSku](#snapshotsku): The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachines@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VirtualMachineIdentity](#virtualmachineidentity): The identity of the virtual machine, if configured.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineProperties](#virtualmachineproperties): Describes the properties of a Virtual Machine.
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly): The virtual machine child extension resources.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The virtual machine zones.

## Resource Microsoft.Compute/virtualMachines/extensions@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VirtualMachineScaleSetIdentity](#virtualmachinescalesetidentity): The identity of the virtual machine scale set, if configured.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineScaleSetProperties](#virtualmachinescalesetproperties): Describes the properties of a Virtual Machine Scale Set.
* **sku**: [Sku](#sku): The virtual machine scale set sku.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set.

## Resource Microsoft.Compute/virtualMachineScaleSets/extensions@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties): Describes the properties of a Virtual Machine Scale Set Extension.
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades@2019-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: 'latest' (Required, DeployTimeConstant): The resource name
* **properties**: [RollingUpgradeStatusInfoProperties](#rollingupgradestatusinfoproperties) (ReadOnly): The status of the latest virtual machine scale set rolling upgrade.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instanceId**: string (ReadOnly): The virtual machine instance ID.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineScaleSetVMProperties](#virtualmachinescalesetvmproperties): Describes the properties of a virtual machine scale set virtual machine.
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly): The virtual machine child extension resources.
* **sku**: [Sku](#sku) (ReadOnly): The virtual machine SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualmachines' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): The virtual machine zones.

## AdditionalCapabilities
### Properties
* **ultraSSDEnabled**: bool: The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.

## AdditionalUnattendContent
### Properties
* **componentName**: 'Microsoft-Windows-Shell-Setup': The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
* **content**: string: Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
* **passName**: 'OobeSystem': The pass name. Currently, the only allowable value is OobeSystem.
* **settingName**: 'AutoLogon' | 'FirstLogonCommands': Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.

## ApiEntityReference
### Properties
* **id**: string: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## ApiError
### Properties
* **code**: string: The error code.
* **details**: [ApiErrorBase](#apierrorbase)[]: The Api error details
* **innererror**: [InnerError](#innererror): The Api inner error
* **message**: string: The error message.
* **target**: string: The target of the particular error.

## ApiErrorBase
### Properties
* **code**: string: The error code.
* **message**: string: The error message.
* **target**: string: The target of the particular error.

## AutomaticOSUpgradePolicy
### Properties
* **disableAutomaticRollback**: bool: Whether OS image rollback feature should be disabled. Default value is false.
* **enableAutomaticOSUpgrade**: bool: Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. <br><br> If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true.

## AutomaticOSUpgradeProperties
### Properties
* **automaticOSUpgradeSupported**: bool (Required): Specifies whether automatic OS upgrade is supported on the image.

## AutomaticRepairsPolicy
### Properties
* **enabled**: bool: Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false.
* **gracePeriod**: string: The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 30 minutes (PT30M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M).

## AvailabilitySetProperties
### Properties
* **platformFaultDomainCount**: int: Fault Domain count.
* **platformUpdateDomainCount**: int: Update Domain count.
* **proximityPlacementGroup**: [SubResource](#subresource): Specifies information about the proximity placement group that the availability set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly): The resource status information.
* **virtualMachines**: [SubResource](#subresource)[]: A list of references to all virtual machines in the availability set.

## BillingProfile
### Properties
* **maxPrice**: int: Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01.

## BootDiagnostics
### Properties
* **enabled**: bool: Whether boot diagnostics should be enabled on the Virtual Machine.
* **storageUri**: string: Uri of the storage account to use for placing the console output and screenshot.

## BootDiagnosticsInstanceView
### Properties
* **consoleScreenshotBlobUri**: string (ReadOnly): The console screenshot blob URI.
* **serialConsoleLogBlobUri**: string (ReadOnly): The Linux serial console log blob Uri.
* **status**: [InstanceViewStatus](#instanceviewstatus) (ReadOnly): The boot diagnostics status information for the VM. <br><br> NOTE: It will be set only if there are errors encountered in enabling boot diagnostics.

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' | 'Restore' | 'Upload' | string (Required): This enumerates the possible sources of a disk's creation.
* **imageReference**: [ImageDiskReference](#imagediskreference): Disk source information.
* **sourceResourceId**: string: If createOption is Copy, this is the ARM id of the source snapshot or disk.
* **sourceUniqueId**: string (ReadOnly): If this field is set, this is the unique id identifying the source of this resource.
* **sourceUri**: string: If createOption is Import, this is the URI of a blob to be imported into a managed disk.
* **storageAccountId**: string: If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription
* **uploadSizeBytes**: int: If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' | string (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **image**: [VirtualHardDisk](#virtualharddisk): The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **toBeDetached**: bool: Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset
* **vhd**: [VirtualHardDisk](#virtualharddisk): The virtual hard disk.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## DataDiskImage
### Properties
* **lun**: int (ReadOnly): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.

## DedicatedHostAllocatableVM
### Properties
* **count**: int: Maximum number of VMs of size vmSize that can fit in the dedicated host's remaining capacity.
* **vmSize**: string: VM size in terms of which the unutilized capacity is represented.

## DedicatedHostAvailableCapacity
### Properties
* **allocatableVMs**: [DedicatedHostAllocatableVM](#dedicatedhostallocatablevm)[]: The unutilized capacity of the dedicated host represented in terms of each VM size that is allowed to be deployed to the dedicated host.

## DedicatedHostGroupProperties
### Properties
* **hosts**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of references to all dedicated hosts in the dedicated host group.
* **platformFaultDomainCount**: int {minValue: 1, maxValue: 3} (Required): Number of fault domains that the host group can span.

## DedicatedHostInstanceView
### Properties
* **assetId**: string (ReadOnly): Specifies the unique id of the dedicated physical machine on which the dedicated host resides.
* **availableCapacity**: [DedicatedHostAvailableCapacity](#dedicatedhostavailablecapacity): Unutilized capacity of the dedicated host.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## DedicatedHostProperties
### Properties
* **autoReplaceOnFailure**: bool: Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
* **hostId**: string (ReadOnly): A unique id generated and assigned to the dedicated host by the platform. <br><br> Does not change throughout the lifetime of the host.
* **instanceView**: [DedicatedHostInstanceView](#dedicatedhostinstanceview) (ReadOnly): The dedicated host instance view.
* **licenseType**: 'None' | 'Windows_Server_Hybrid' | 'Windows_Server_Perpetual': Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None**
* **platformFaultDomain**: int {minValue: 0, maxValue: 2}: Fault domain of the dedicated host within a dedicated host group.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **provisioningTime**: string (ReadOnly): The date when the host was first provisioned.
* **virtualMachines**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of references to all virtual machines in the Dedicated Host.

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.

## DiffDiskSettings
### Properties
* **option**: 'Local' | string: Specifies the ephemeral disk settings for operating system disk.

## Disallowed
### Properties
* **diskTypes**: string[]: A list of disk types.

## DiskEncryptionSettings
### Properties
* **diskEncryptionKey**: [KeyVaultSecretReference](#keyvaultsecretreference): Specifies the location of the disk encryption key, which is a Key Vault Secret.
* **enabled**: bool: Specifies whether disk encryption should be enabled on the virtual machine.
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference): Specifies the location of the key encryption key in Key Vault.

## DiskInstanceView
### Properties
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings)[]: Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15
* **name**: string: The disk name.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## DiskProperties
### Properties
* **creationData**: [CreationData](#creationdata) (Required): Disk source information. CreationData information cannot be changed after the disk has been created.
* **diskIOPSReadWrite**: int: The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
* **diskMBpsReadWrite**: int: The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
* **diskSizeBytes**: int (ReadOnly): The size of the disk in bytes. This field is read only.
* **diskSizeGB**: int: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
* **diskState**: 'ActiveSAS' | 'ActiveUpload' | 'Attached' | 'ReadyToUpload' | 'Reserved' | 'Unattached' | string (ReadOnly): The state of the disk.
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection): Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **osType**: 'Linux' | 'Windows': The Operating System type.
* **provisioningState**: string (ReadOnly): The disk provisioning state.
* **timeCreated**: string (ReadOnly): The time when the disk was created.
* **uniqueId**: string (ReadOnly): Unique Guid identifying the resource.

## DiskSku
### Properties
* **name**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: The sku name.
* **tier**: string (ReadOnly): The sku tier.

## EncryptionSettingsCollection
### Properties
* **enabled**: bool (Required): Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
* **encryptionSettings**: [EncryptionSettingsElement](#encryptionsettingselement)[]: A collection of encryption settings, one for each disk volume.
* **encryptionSettingsVersion**: string: Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption.

## EncryptionSettingsElement
### Properties
* **diskEncryptionKey**: [KeyVaultAndSecretReference](#keyvaultandsecretreference): Key Vault Secret Url and vault id of the disk encryption key
* **keyEncryptionKey**: [KeyVaultAndKeyReference](#keyvaultandkeyreference): Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.

## GalleryApplicationProperties
### Properties
* **description**: string: The description of this gallery Application Definition resource. This property is updatable.
* **endOfLifeDate**: string: The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
* **eula**: string: The Eula agreement for the gallery Application Definition.
* **privacyStatementUri**: string: The privacy statement uri.
* **releaseNoteUri**: string: The release note uri.
* **supportedOSType**: 'Linux' | 'Windows' (Required): This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**

## GalleryApplicationVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **publishingProfile**: [GalleryApplicationVersionPublishingProfile](#galleryapplicationversionpublishingprofile) (Required): The publishing profile of a gallery image version.
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly): This is the replication status of the gallery Image Version.

## GalleryApplicationVersionPublishingProfile
### Properties
* **enableHealthCheck**: bool: Optional. Whether or not this application reports health.
* **endOfLifeDate**: string: The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
* **manageActions**: [UserArtifactManage](#userartifactmanage)
* **publishedDate**: string (ReadOnly): The timestamp for when the gallery Image Version is published.
* **replicaCount**: int: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
* **source**: [UserArtifactSource](#userartifactsource) (Required): The source image from which the Image Version is going to be created.
* **storageAccountType**: 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the Image Version is going to be replicated to. This property is updatable.

## GalleryArtifactSource
### Properties
* **managedImage**: [ManagedArtifact](#managedartifact) (Required): The managed artifact.

## GalleryDataDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite' (ReadOnly): The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
* **lun**: int (ReadOnly): This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
* **sizeInGB**: int (ReadOnly): This property indicates the size of the VHD to be created.

## GalleryIdentifier
### Properties
* **uniqueName**: string (ReadOnly): The unique name of the Shared Image Gallery. This name is generated automatically by Azure.

## GalleryImageIdentifier
### Properties
* **offer**: string (Required): The name of the gallery Image Definition offer.
* **publisher**: string (Required): The name of the gallery Image Definition publisher.
* **sku**: string (Required): The name of the gallery Image Definition SKU.

## GalleryImageProperties
### Properties
* **description**: string: The description of this gallery Image Definition resource. This property is updatable.
* **disallowed**: [Disallowed](#disallowed): Describes the disallowed disk types.
* **endOfLifeDate**: string: The end of life date of the gallery Image Definition. This property can be used for decommissioning purposes. This property is updatable.
* **eula**: string: The Eula agreement for the gallery Image Definition.
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier) (Required): This is the gallery Image Definition identifier.
* **osState**: 'Generalized' | 'Specialized' (Required): This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
* **osType**: 'Linux' | 'Windows' (Required): This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
* **privacyStatementUri**: string: The privacy statement uri.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **purchasePlan**: [ImagePurchasePlan](#imagepurchaseplan): Describes the gallery Image Definition purchase plan. This is used by marketplace images.
* **recommended**: [RecommendedMachineConfiguration](#recommendedmachineconfiguration): The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
* **releaseNoteUri**: string: The release note uri.

## GalleryImageVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **publishingProfile**: [GalleryImageVersionPublishingProfile](#galleryimageversionpublishingprofile) (Required): The publishing profile of a gallery Image Version.
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly): This is the replication status of the gallery Image Version.
* **storageProfile**: [GalleryImageVersionStorageProfile](#galleryimageversionstorageprofile) (ReadOnly): This is the storage profile of a Gallery Image Version.

## GalleryImageVersionPublishingProfile
### Properties
* **endOfLifeDate**: string: The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
* **publishedDate**: string (ReadOnly): The timestamp for when the gallery Image Version is published.
* **replicaCount**: int: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
* **source**: [GalleryArtifactSource](#galleryartifactsource) (Required): The source image from which the Image Version is going to be created.
* **storageAccountType**: 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the Image Version is going to be replicated to. This property is updatable.

## GalleryImageVersionStorageProfile
### Properties
* **dataDiskImages**: [GalleryDataDiskImage](#gallerydatadiskimage)[] (ReadOnly): A list of data disk images.
* **osDiskImage**: [GalleryOSDiskImage](#galleryosdiskimage) (ReadOnly): This is the OS disk image.

## GalleryOSDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite' (ReadOnly): The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
* **sizeInGB**: int (ReadOnly): This property indicates the size of the VHD to be created.

## GalleryProperties
### Properties
* **description**: string: The description of this Shared Image Gallery resource. This property is updatable.
* **identifier**: [GalleryIdentifier](#galleryidentifier): Describes the gallery unique name.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.

## HardwareProfile
### Properties
* **vmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B1ms' | 'Standard_B1s' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6' | string: Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  <br><br> [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes) <br><br> [List all available virtual machine sizes in a region](https://docs.microsoft.com/rest/api/compute/virtualmachinesizes/list) <br><br> [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes)

## ImageDataDisk
### Properties
* **blobUri**: string: The Virtual Hard Disk.
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **diskSizeGB**: int: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [SubResource](#subresource): The managedDisk.
* **snapshot**: [SubResource](#subresource): The snapshot.
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.

## ImageDiskReference
### Properties
* **id**: string (Required): A relative uri containing either a Platform Image Repository or user image reference.
* **lun**: int: If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.

## ImageOSDisk
### Properties
* **blobUri**: string: The Virtual Hard Disk.
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **diskSizeGB**: int: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **managedDisk**: [SubResource](#subresource): The managedDisk.
* **osState**: 'Generalized' | 'Specialized' (Required): The OS State.
* **osType**: 'Linux' | 'Windows' (Required): This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
* **snapshot**: [SubResource](#subresource): The snapshot.
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. UltraSSD_LRS cannot be used with OS Disk.

## ImageProperties
### Properties
* **hyperVGeneration**: 'V1' | 'V2' | string: Gets the HyperVGenerationType of the VirtualMachine created from the image
* **provisioningState**: string (ReadOnly): The provisioning state.
* **sourceVirtualMachine**: [SubResource](#subresource): The source virtual machine from which Image is created.
* **storageProfile**: [ImageStorageProfile](#imagestorageprofile): Specifies the storage settings for the virtual machine disks.

## ImagePurchasePlan
### Properties
* **name**: string: The plan ID.
* **product**: string: The product ID.
* **publisher**: string: The publisher ID.

## ImageReference
### Properties
* **id**: string: Resource Id
* **offer**: string: Specifies the offer of the platform image or marketplace image used to create the virtual machine.
* **publisher**: string: The image publisher.
* **sku**: string: The image SKU.
* **version**: string: Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.

## ImageStorageProfile
### Properties
* **dataDisks**: [ImageDataDisk](#imagedatadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
* **osDisk**: [ImageOSDisk](#imageosdisk): Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
* **zoneResilient**: bool: Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS).

## InnerError
### Properties
* **errordetail**: string: The internal error message or exception dump.
* **exceptiontype**: string: The exception type.

## InstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning': The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## KeyVaultAndKeyReference
### Properties
* **keyUrl**: string (Required): Url pointing to a key or secret in KeyVault
* **sourceVault**: [SourceVault](#sourcevault) (Required): Resource id of the KeyVault containing the key or secret

## KeyVaultAndSecretReference
### Properties
* **secretUrl**: string (Required): Url pointing to a key or secret in KeyVault
* **sourceVault**: [SourceVault](#sourcevault) (Required): Resource id of the KeyVault containing the key or secret

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required): The URL referencing a key encryption key in Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required): The relative URL of the Key Vault containing the key.

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required): The URL referencing a secret in a Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required): The relative URL of the Key Vault containing the secret.

## LinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool: Specifies whether password authentication should be disabled.
* **provisionVMAgent**: bool: Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
* **ssh**: [SshConfiguration](#sshconfiguration): Specifies the ssh key configuration for a Linux OS.

## MaintenanceRedeployStatus
### Properties
* **isCustomerInitiatedMaintenanceAllowed**: bool: True, if customer is allowed to perform Maintenance.
* **lastOperationMessage**: string: Message returned for the last Maintenance Operation.
* **lastOperationResultCode**: 'MaintenanceAborted' | 'MaintenanceCompleted' | 'None' | 'RetryLater': The Last Maintenance Operation Result Code.
* **maintenanceWindowEndTime**: string: End Time for the Maintenance Window.
* **maintenanceWindowStartTime**: string: Start Time for the Maintenance Window.
* **preMaintenanceWindowEndTime**: string: End Time for the Pre Maintenance Window.
* **preMaintenanceWindowStartTime**: string: Start Time for the Pre Maintenance Window.

## ManagedArtifact
### Properties
* **id**: string (Required): The managed artifact id.

## ManagedDiskParameters
### Properties
* **id**: string: Resource Id
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.

## NetworkInterfaceReference
### Properties
* **id**: string: Resource Id
* **properties**: [NetworkInterfaceReferenceProperties](#networkinterfacereferenceproperties): Describes a network interface reference properties.

## NetworkInterfaceReferenceProperties
### Properties
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterfaceReference](#networkinterfacereference)[]: Specifies the list of resource Ids for the network interfaces associated with the virtual machine.

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' | string (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings): Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings): Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15
* **image**: [VirtualHardDisk](#virtualharddisk): The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows': This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
* **vhd**: [VirtualHardDisk](#virtualharddisk): The virtual hard disk.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## OSDiskImage
### Properties
* **operatingSystem**: 'Linux' | 'Windows' (Required): The operating system of the osDiskImage.

## OSProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
* **allowExtensionOperations**: bool: Specifies whether extension operations should be allowed on the virtual machine. <br><br>This may only be set to False when no extensions are present on the virtual machine.
* **computerName**: string: Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions).
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **requireGuestProvisionSignal**: bool: Specifies whether the guest provision signal is required from the virtual machine.
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machine.
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## Plan
### Properties
* **name**: string: The plan ID.
* **product**: string: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **promotionCode**: string: The promotion code.
* **publisher**: string: The publisher ID.

## ProximityPlacementGroupProperties
### Properties
* **availabilitySets**: [SubResource](#subresource)[] (ReadOnly): A list of references to all availability sets in the proximity placement group.
* **proximityPlacementGroupType**: 'Standard' | 'Ultra' | string: Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
* **virtualMachines**: [SubResource](#subresource)[] (ReadOnly): A list of references to all virtual machines in the proximity placement group.
* **virtualMachineScaleSets**: [SubResource](#subresource)[] (ReadOnly): A list of references to all virtual machine scale sets in the proximity placement group.

## PurchasePlan
### Properties
* **name**: string (Required): The plan ID.
* **product**: string (Required): Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **publisher**: string (Required): The publisher ID.

## RecommendedMachineConfiguration
### Properties
* **memory**: [ResourceRange](#resourcerange): Describes the resource range.
* **vCPUs**: [ResourceRange](#resourcerange): Describes the resource range.

## RegionalReplicationStatus
### Properties
* **details**: string (ReadOnly): The details of the replication status.
* **progress**: int (ReadOnly): It indicates progress of the replication job.
* **region**: string (ReadOnly): The region to which the gallery Image Version is being replicated to.
* **state**: 'Completed' | 'Failed' | 'Replicating' | 'Unknown' | string (ReadOnly): This is the regional replication state.

## ReplicationStatus
### Properties
* **aggregatedState**: 'Completed' | 'Failed' | 'InProgress' | 'Unknown' | string (ReadOnly): This is the aggregated replication status based on all the regional replication status flags.
* **summary**: [RegionalReplicationStatus](#regionalreplicationstatus)[] (ReadOnly): This is a summary of replication status for each region.

## ResourceRange
### Properties
* **max**: int: The maximum number of the resource.
* **min**: int: The minimum number of the resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RollingUpgradePolicy
### Properties
* **maxBatchInstancePercent**: int {minValue: 5, maxValue: 100}: The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
* **maxUnhealthyInstancePercent**: int {minValue: 5, maxValue: 100}: The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
* **maxUnhealthyUpgradedInstancePercent**: int {minValue: 0, maxValue: 100}: The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
* **pauseTimeBetweenBatches**: string: The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S).

## RollingUpgradeProgressInfo
### Properties
* **failedInstanceCount**: int (ReadOnly): The number of instances that have failed to be upgraded successfully.
* **inProgressInstanceCount**: int (ReadOnly): The number of instances that are currently being upgraded.
* **pendingInstanceCount**: int (ReadOnly): The number of instances that have not yet begun to be upgraded.
* **successfulInstanceCount**: int (ReadOnly): The number of instances that have been successfully upgraded.

## RollingUpgradeRunningStatus
### Properties
* **code**: 'Cancelled' | 'Completed' | 'Faulted' | 'RollingForward' (ReadOnly): Code indicating the current status of the upgrade.
* **lastAction**: 'Cancel' | 'Start' (ReadOnly): The last action performed on the rolling upgrade.
* **lastActionTime**: string (ReadOnly): Last action time of the upgrade.
* **startTime**: string (ReadOnly): Start time of the upgrade.

## RollingUpgradeStatusInfoProperties
### Properties
* **error**: [ApiError](#apierror) (ReadOnly): Error details for this upgrade, if there are any.
* **policy**: [RollingUpgradePolicy](#rollingupgradepolicy) (ReadOnly): The rolling upgrade policies applied for this upgrade.
* **progress**: [RollingUpgradeProgressInfo](#rollingupgradeprogressinfo) (ReadOnly): Information about the number of virtual machine instances in each upgrade state.
* **runningStatus**: [RollingUpgradeRunningStatus](#rollingupgraderunningstatus) (ReadOnly): Information about the current running state of the overall upgrade.

## ScaleInPolicy
### Properties
* **rules**: ('Default' | 'NewestVM' | 'OldestVM' | string)[]: The rules to be followed when scaling-in a virtual machine scale set. <br><br> Possible values are: <br><br> **Default** When a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in. <br><br> **OldestVM** When a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal. <br><br> **NewestVM** When a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. <br><br>

## ScheduledEventsProfile
### Properties
* **terminateNotificationProfile**: [TerminateNotificationProfile](#terminatenotificationprofile): Specifies Terminate Scheduled Event related configurations.

## Sku
### Properties
* **capacity**: int: Specifies the number of virtual machines in the scale set.
* **name**: string: The sku name.
* **tier**: string: Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**

## SnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata) (Required): Disk source information. CreationData information cannot be changed after the disk has been created.
* **diskSizeBytes**: int (ReadOnly): The size of the disk in bytes. This field is read only.
* **diskSizeGB**: int: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection): Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **incremental**: bool: Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
* **osType**: 'Linux' | 'Windows': The Operating System type.
* **provisioningState**: string (ReadOnly): The disk provisioning state.
* **timeCreated**: string (ReadOnly): The time when the disk was created.
* **uniqueId**: string (ReadOnly): Unique Guid identifying the resource.

## SnapshotSku
### Properties
* **name**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: The sku name.
* **tier**: string (ReadOnly): The sku tier.

## SourceVault
### Properties
* **id**: string: Resource Id

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **path**: string: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## StorageProfile
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
* **osDisk**: [OSDisk](#osdisk): Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).

## SubResource
### Properties
* **id**: string: Resource Id

## SubResourceReadOnly
### Properties
* **id**: string (ReadOnly): Resource Id

## TargetRegion
### Properties
* **name**: string (Required): The name of the region.
* **regionalReplicaCount**: int: The number of replicas of the Image Version to be created per region. This property is updatable.
* **storageAccountType**: 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.

## TerminateNotificationProfile
### Properties
* **enable**: bool: Specifies whether the Terminate Scheduled event is enabled or disabled.
* **notBeforeTimeout**: string: Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M)

## UpgradePolicy
### Properties
* **automaticOSUpgradePolicy**: [AutomaticOSUpgradePolicy](#automaticosupgradepolicy): Configuration parameters used for performing automatic OS Upgrade.
* **mode**: 'Automatic' | 'Manual' | 'Rolling': Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
* **rollingUpgradePolicy**: [RollingUpgradePolicy](#rollingupgradepolicy): The configuration parameters used while performing a rolling upgrade.

## UserArtifactManage
### Properties
* **install**: string (Required): Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
* **remove**: string (Required): Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
* **update**: string: Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.

## UserArtifactSource
### Properties
* **defaultConfigurationLink**: string: Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
* **mediaLink**: string (Required): Required. The mediaLink of the artifact, must be a readable storage page blob.

## UserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## VaultCertificate
### Properties
* **certificateStore**: string: For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted.
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource): The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[]: The list of key vault references in SourceVault which contain certificates.

## VirtualHardDisk
### Properties
* **uri**: string: Specifies the virtual hard disk's uri.

## VirtualMachineAgentInstanceView
### Properties
* **extensionHandlers**: [VirtualMachineExtensionHandlerInstanceView](#virtualmachineextensionhandlerinstanceview)[]: The virtual machine extension handler instance view.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgentVersion**: string: The VM Agent full version.

## VirtualMachineExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string (Required): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## VirtualMachineExtensionHandlerInstanceView
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus): The extension handler status.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineExtensionImageProperties
### Properties
* **computeRole**: string (Required): The type of role (IaaS or PaaS) this extension supports.
* **handlerSchema**: string (Required): The schema defined by publisher, where extension consumers should provide settings in a matching schema.
* **operatingSystem**: string (Required): The operating system this extension supports.
* **supportsMultipleExtensions**: bool: Whether the handler can support multiple extensions.
* **vmScaleSetEnabled**: bool: Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS.

## VirtualMachineExtensionInstanceView
### Properties
* **name**: string: The virtual machine extension name.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **substatuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **instanceView**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview): The virtual machine extension instance view.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineHealthStatus
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus) (ReadOnly): The health status information for the VM.

## VirtualMachineIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of virtual machine identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
* **userAssignedIdentities**: [VirtualMachineIdentityUserAssignedIdentities](#virtualmachineidentityuserassignedidentities): The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## VirtualMachineIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

## VirtualMachineImageProperties
### Properties
* **automaticOSUpgradeProperties**: [AutomaticOSUpgradeProperties](#automaticosupgradeproperties): Describes automatic OS upgrade properties on the image.
* **dataDiskImages**: [DataDiskImage](#datadiskimage)[]
* **hyperVGeneration**: 'V1' | 'V2' | string: Specifies the HyperVGeneration Type
* **osDiskImage**: [OSDiskImage](#osdiskimage): Contains the os disk image information.
* **plan**: [PurchasePlan](#purchaseplan): Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.

## VirtualMachineImageResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineInstanceView
### Properties
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.
* **computerName**: string: The computer name assigned to the virtual machine.
* **disks**: [DiskInstanceView](#diskinstanceview)[]: The virtual machine disk information.
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]: The extensions information.
* **hyperVGeneration**: 'V1' | 'V2' | string: Specifies the HyperVGeneration Type associated with a resource
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus): The Maintenance Operation status on the virtual machine.
* **osName**: string: The Operating System running on the virtual machine.
* **osVersion**: string: The version of Operating System running on the virtual machine.
* **platformFaultDomain**: int: Specifies the fault domain of the virtual machine.
* **platformUpdateDomain**: int: Specifies the update domain of the virtual machine.
* **rdpThumbPrint**: string: The Remote desktop certificate thumbprint.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview): The VM Agent running on the virtual machine.

## VirtualMachineProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Specifies additional capabilities enabled or disabled on the virtual machine.
* **availabilitySet**: [SubResource](#subresource): Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. <br><br>This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
* **billingProfile**: [BillingProfile](#billingprofile): Specifies the billing related details of a Azure Spot virtual machine. <br><br>Minimum api-version: 2019-03-01.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **evictionPolicy**: 'Deallocate' | 'Delete' | string: Specifies the eviction policy for the Azure Spot virtual machine. Only supported value is 'Deallocate'. <br><br>Minimum api-version: 2019-03-01
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **host**: [SubResource](#subresource): Specifies information about the dedicated host that the virtual machine resides in. <br><br>Minimum api-version: 2018-10-01.
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly): The virtual machine instance view.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the virtual machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the virtual machine.
* **priority**: 'Low' | 'Regular' | 'Spot' | string: Specifies the priority for the virtual machine. <br><br>Minimum api-version: 2019-03-01
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **proximityPlacementGroup**: [SubResource](#subresource): Specifies information about the proximity placement group that the virtual machine should be assigned to. <br><br>Minimum api-version: 2018-04-01.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **virtualMachineScaleSet**: [SubResource](#subresource): Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. <br><br>This property cannot exist along with a non-null properties.availabilitySet reference. <br><br>Minimum api‐version: 2019‐03‐01
* **vmId**: string (ReadOnly): Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.

## VirtualMachineScaleSetDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' | string (Required): The create option.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## VirtualMachineScaleSetExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: The name of the extension.
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties): Describes the properties of a Virtual Machine Scale Set Extension.

## VirtualMachineScaleSetExtensionProfile
### Properties
* **extensions**: [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)[]: The virtual machine scale set child extension resources.

## VirtualMachineScaleSetExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineScaleSetIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set.
* **userAssignedIdentities**: [VirtualMachineScaleSetIdentityUserAssignedIdentities](#virtualmachinescalesetidentityuserassignedidentities): The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## VirtualMachineScaleSetIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue](#virtualmachinescalesetidentityuserassignedidentitiesvalue)

## VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## VirtualMachineScaleSetIPConfiguration
### Properties
* **id**: string: Resource Id
* **name**: string (Required): The IP configuration name.
* **properties**: [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration properties.

## VirtualMachineScaleSetIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
* **applicationSecurityGroups**: [SubResource](#subresource)[]: Specifies an array of references to application security group.
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
* **loadBalancerInboundNatPools**: [SubResource](#subresource)[]: Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAddressConfiguration**: [VirtualMachineScaleSetPublicIPAddressConfiguration](#virtualmachinescalesetpublicipaddressconfiguration): The publicIPAddressConfiguration.
* **subnet**: [ApiEntityReference](#apientityreference): Specifies the identifier of the subnet.

## VirtualMachineScaleSetIpTag
### Properties
* **ipTagType**: string: IP tag type. Example: FirstPartyUsage.
* **tag**: string: IP tag associated with the public IP. Example: SQL, Storage etc.

## VirtualMachineScaleSetManagedDiskParameters
### Properties
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. Managed OS disk storage account type can only be set when you create the scale set. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.

## VirtualMachineScaleSetNetworkConfiguration
### Properties
* **id**: string: Resource Id
* **name**: string (Required): The network configuration name.
* **properties**: [VirtualMachineScaleSetNetworkConfigurationProperties](#virtualmachinescalesetnetworkconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration.

## VirtualMachineScaleSetNetworkConfigurationDnsSettings
### Properties
* **dnsServers**: string[]: List of DNS servers IP addresses

## VirtualMachineScaleSetNetworkConfigurationProperties
### Properties
* **dnsSettings**: [VirtualMachineScaleSetNetworkConfigurationDnsSettings](#virtualmachinescalesetnetworkconfigurationdnssettings): The dns settings to be applied on the network interfaces.
* **enableAcceleratedNetworking**: bool: Specifies whether the network interface is accelerated networking-enabled.
* **enableIPForwarding**: bool: Whether IP forwarding enabled on this NIC.
* **ipConfigurations**: [VirtualMachineScaleSetIPConfiguration](#virtualmachinescalesetipconfiguration)[] (Required): Specifies the IP configurations of the network interface.
* **networkSecurityGroup**: [SubResource](#subresource): The network security group.
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## VirtualMachineScaleSetNetworkProfile
### Properties
* **healthProbe**: [ApiEntityReference](#apientityreference): A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]: The list of network configurations.

## VirtualMachineScaleSetOSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' | string (Required): Specifies how the virtual machines in the scale set should be created.<br><br> The only allowed value is: **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings): Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set.
* **diskSizeGB**: int: Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **image**: [VirtualHardDisk](#virtualharddisk): Specifies information about the unmanaged user image to base the scale set on.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows': This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
* **vhdContainers**: string[]: Specifies the container urls that are used to store operating system disks for the scale set.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## VirtualMachineScaleSetOSProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
* **computerNamePrefix**: string: Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long.
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machines in the scale set.
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## VirtualMachineScaleSetProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
* **automaticRepairsPolicy**: [AutomaticRepairsPolicy](#automaticrepairspolicy): Policy for automatic repairs.
* **doNotRunExtensionsOnOverprovisionedVMs**: bool: When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
* **overprovision**: bool: Specifies whether the Virtual Machine Scale Set should be overprovisioned.
* **platformFaultDomainCount**: int: Fault Domain count for each placement group.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **proximityPlacementGroup**: [SubResource](#subresource): Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
* **scaleInPolicy**: [ScaleInPolicy](#scaleinpolicy): Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
* **singlePlacementGroup**: bool: When true this limits the scale set to a single placement group, of max size 100 virtual machines.
* **uniqueId**: string (ReadOnly): Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
* **upgradePolicy**: [UpgradePolicy](#upgradepolicy): The upgrade policy.
* **virtualMachineProfile**: [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile): The virtual machine profile.
* **zoneBalance**: bool: Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.

## VirtualMachineScaleSetPublicIPAddressConfiguration
### Properties
* **name**: string (Required): The publicIP address configuration name.
* **properties**: [VirtualMachineScaleSetPublicIPAddressConfigurationProperties](#virtualmachinescalesetpublicipaddressconfigurationproperties): Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration

## VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings
### Properties
* **domainNameLabel**: string (Required): The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created

## VirtualMachineScaleSetPublicIPAddressConfigurationProperties
### Properties
* **dnsSettings**: [VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings](#virtualmachinescalesetpublicipaddressconfigurationdnssettings): The dns settings to be applied on the publicIP addresses .
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipTags**: [VirtualMachineScaleSetIpTag](#virtualmachinescalesetiptag)[]: The list of IP tags associated with the public IP address.
* **publicIPPrefix**: [SubResource](#subresource): The PublicIPPrefix from which to allocate publicIP addresses.

## VirtualMachineScaleSetStorageProfile
### Properties
* **dataDisks**: [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)[]: Specifies the parameters that are used to add data disks to the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
* **osDisk**: [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk): Specifies information about the operating system disk used by the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).

## VirtualMachineScaleSetVMInstanceView
### Properties
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.
* **disks**: [DiskInstanceView](#diskinstanceview)[]: The disks information.
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]: The extensions information.
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus): The Maintenance Operation status on the virtual machine.
* **placementGroupId**: string: The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId.
* **platformFaultDomain**: int: The Fault Domain count.
* **platformUpdateDomain**: int: The Update Domain count.
* **rdpThumbPrint**: string: The Remote desktop certificate thumbprint.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview): The VM Agent running on the virtual machine.
* **vmHealth**: [VirtualMachineHealthStatus](#virtualmachinehealthstatus) (ReadOnly): The health status for the VM.

## VirtualMachineScaleSetVMNetworkProfileConfiguration
### Properties
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]: The list of network configurations.

## VirtualMachineScaleSetVMProfile
### Properties
* **billingProfile**: [BillingProfile](#billingprofile): Specifies the billing related details of a Azure Spot VMSS. <br><br>Minimum api-version: 2019-03-01.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **evictionPolicy**: 'Deallocate' | 'Delete' | string: Specifies the eviction policy for virtual machines in a Azure Spot scale set. <br><br>Minimum api-version: 2017-10-30-preview
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile): Specifies a collection of settings for extensions installed on virtual machines in the scale set.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile): Specifies properties of the network interfaces of the virtual machines in the scale set.
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile): Specifies the operating system settings for the virtual machines in the scale set.
* **priority**: 'Low' | 'Regular' | 'Spot' | string: Specifies the priority for the virtual machines in the scale set. <br><br>Minimum api-version: 2017-10-30-preview
* **scheduledEventsProfile**: [ScheduledEventsProfile](#scheduledeventsprofile): Specifies Scheduled Event related configurations.
* **storageProfile**: [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile): Specifies the storage settings for the virtual machine disks.

## VirtualMachineScaleSetVMProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
* **availabilitySet**: [SubResource](#subresource): Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **instanceView**: [VirtualMachineScaleSetVMInstanceView](#virtualmachinescalesetvminstanceview) (ReadOnly): The virtual machine instance view.
* **latestModelApplied**: bool (ReadOnly): Specifies whether the latest model has been applied to the virtual machine.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
* **modelDefinitionApplied**: string (ReadOnly): Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the virtual machine.
* **networkProfileConfiguration**: [VirtualMachineScaleSetVMNetworkProfileConfiguration](#virtualmachinescalesetvmnetworkprofileconfiguration): Specifies the network profile configuration of the virtual machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the virtual machine.
* **protectionPolicy**: [VirtualMachineScaleSetVMProtectionPolicy](#virtualmachinescalesetvmprotectionpolicy): Specifies the protection policy of the virtual machine.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **vmId**: string (ReadOnly): Azure VM unique ID.

## VirtualMachineScaleSetVMProtectionPolicy
### Properties
* **protectFromScaleIn**: bool: Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation.
* **protectFromScaleSetActions**: bool: Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM.

## WindowsConfiguration
### Properties
* **additionalUnattendContent**: [AdditionalUnattendContent](#additionalunattendcontent)[]: Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
* **enableAutomaticUpdates**: bool: Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. <br><br> For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
* **provisionVMAgent**: bool: Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
* **timeZone**: string: Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time"
* **winRM**: [WinRMConfiguration](#winrmconfiguration): Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell.

## WinRMConfiguration
### Properties
* **listeners**: [WinRMListener](#winrmlistener)[]: The list of Windows Remote Management listeners

## WinRMListener
### Properties
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
* **protocol**: 'Http' | 'Https': Specifies the protocol of listener. <br><br> Possible values are: <br>**http** <br><br> **https**

