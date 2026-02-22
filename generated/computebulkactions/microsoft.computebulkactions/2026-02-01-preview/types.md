# Microsoft.ComputeBulkActions @ 2026-02-01-preview

## Resource Microsoft.ComputeBulkActions/locations/launchBulkInstancesOperations@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **name**: string {minLength: 1, pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [LaunchBulkInstancesOperationProperties](#launchbulkinstancesoperationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [LocationBasedLaunchBulkInstancesOperationTags](#locationbasedlaunchbulkinstancesoperationtags): Resource tags.
* **type**: 'Microsoft.ComputeBulkActions/locations/launchBulkInstancesOperations' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Zones in which the LaunchBulkInstancesOperation is available

## AdditionalCapabilities
### Properties
* **hibernationEnabled**: bool: The flag that enables or disables hibernation capability on the VM.
* **ultraSSDEnabled**: bool: The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.

## AdditionalUnattendContent
### Properties
* **componentName**: 'Microsoft-Windows-Shell-Setup': The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
* **content**: string: Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
* **passName**: 'OobeSystem': The pass name. Currently, the only allowable value is OobeSystem.
* **settingName**: 'AutoLogon' | 'FirstLogonCommands' | string: Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.

## AllInstancesDown
### Properties
* **automaticallyApprove**: bool: Specifies if Scheduled Events should be auto-approved when all instances are down. Its default value is true.

## ApiEntityReference
### Properties
* **id**: string: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## ApplicationProfile
### Properties
* **galleryApplications**: [VMGalleryApplication](#vmgalleryapplication)[]: Specifies the gallery applications that should be made available to the VM

## BootDiagnostics
### Properties
* **enabled**: bool: Whether boot diagnostics should be enabled on the Virtual Machine.
* **storageUri**: string: Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used.

## CapacityReservationProfile
### Properties
* **capacityReservationGroup**: [SubResource](#subresource): Specifies the capacity reservation group resource id that should be used for allocating the virtual machine provided enough capacity has been reserved. Please refer to https://aka.ms/CapacityReservation for more details.

## ComputeProfile
### Properties
* **computeApiVersion**: string: Specifies the Microsoft.Compute API version to use when creating underlying Virtual Machines.
The default value will be the latest supported computeApiVersion by LaunchBulkInstancesOperation.
* **extensions**: [VirtualMachineExtension](#virtualmachineextension)[]: Virtual Machine Extensions Array to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachine.json#/definitions/VirtualMachineExtension"
* **virtualMachineProfile**: [VirtualMachineProfile](#virtualmachineprofile) (Required): Base Virtual Machine Profile Properties to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachine.json#/definitions/VirtualMachineProperties"

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite' | string: Specifies the caching requirements. Possible values are: None, ReadOnly, ReadWrite. The defaulting behavior is: None for Standard storage. ReadOnly for Premium storage.
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Restore' | string (Required): Specifies how the virtual machine disk should be created. Possible values are Attach, FromImage, Empty, Copy, Restore.
* **deleteOption**: 'Delete' | 'Detach' | string: Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are: Delete, Detach. The default value is set to Detach.
* **detachOption**: 'ForceDetach' | string: Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values: ForceDetach. This feature is still in preview. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
* **image**: [VirtualHardDisk](#virtualharddisk): The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **sourceResource**: [ApiEntityReference](#apientityreference): The source resource identifier. It can be a snapshot, or disk restore point from which to create a disk.
* **toBeDetached**: bool: Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset.
* **vhd**: [VirtualHardDisk](#virtualharddisk): The virtual hard disk.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. **NOTE**: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.

## DiffDiskSettings
### Properties
* **option**: 'Local' | string: Specifies the ephemeral disk settings for operating system disk.
* **placement**: 'CacheDisk' | 'NvmeDisk' | 'ResourceDisk' | string: Specifies the ephemeral disk placement for operating system disk. Possible values are: CacheDisk, ResourceDisk, NvmeDisk. The defaulting behavior is: CacheDisk if one is configured for the VM size otherwise ResourceDisk or NvmeDisk is used. Minimum api-version for NvmeDisk: 2024-03-01.

## DiskEncryptionSetParameters
### Properties
* **id**: string: The ID of the sub-resource.

## DiskEncryptionSettings
### Properties
* **diskEncryptionKey**: [KeyVaultSecretReference](#keyvaultsecretreference): Specifies the location of the disk encryption key, which is a Key Vault Secret.
* **enabled**: bool: Specifies whether disk encryption should be enabled on the virtual machine.
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference): Specifies the location of the key encryption key in Key Vault.

## EncryptionIdentity
### Properties
* **userAssignedIdentityResourceId**: string: Specifies ARM Resource ID of one of the user identities associated with the VM.

## EventGridAndResourceGraph
### Properties
* **enable**: bool: Specifies if event grid and resource graph is enabled for Scheduled event related configurations.
* **scheduledEventsApiVersion**: string: Specifies the api-version to determine which Scheduled Events configuration schema version will be delivered.

## HostEndpointSettings
### Properties
* **inVMAccessControlProfileReferenceId**: string: Specifies the InVMAccessControlProfileVersion resource id in the format of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/inVMAccessControlProfiles/{profile}/versions/{version}
* **mode**: 'Audit' | 'Disabled' | 'Enforce' | string: Specifies the execution mode. In Audit mode, the system acts as if it is enforcing the access control policy, including emitting access denial entries in the logs but it does not actually deny any requests to host endpoints. In Enforce mode, the system will enforce the access control and it is the recommended mode of operation.

## ImageReference
### Properties
* **communityGalleryImageId**: string: Specified the community gallery image unique id for vm deployment. This can be fetched from community gallery image GET call.
* **id**: string: The ID of the sub-resource.
* **offer**: string: Specifies the offer of the platform image or marketplace image used to create the virtual machine.
* **publisher**: string: The image publisher.
* **sharedGalleryImageId**: string: Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call.
* **sku**: string: The image SKU.
* **version**: string: Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. Please do not use field 'version' for gallery image deployment, gallery image should always use 'id' field for deployment, to use 'latest' version of gallery image, just set '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}' in the 'id' field without version input.

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required): The URL referencing a key encryption key in Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required): The relative URL of the Key Vault containing the key.

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required): The URL referencing a secret in a Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required): The relative URL of the Key Vault containing the secret.

## LaunchBulkInstancesOperationProperties
### Properties
* **capacity**: int {minValue: 1} (Required): Total capacity to achieve. It can be in terms of VMs or vCPUs.
* **capacityType**: 'VCpu' | 'VM' | string: Specifies capacity type for launching instances. It can be in terms of VMs or vCPUs.
* **computeProfile**: [ComputeProfile](#computeprofile) (Required): Compute Profile to configure the Virtual Machines.
* **priorityProfile**: [PriorityProfile](#priorityprofile) (Required): Configuration Options for Regular or Spot instances in LaunchBulkInstancesOperation.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **retryPolicy**: [RetryPolicy](#retrypolicy): Retry policy the user can pass
* **vmAttributes**: [VMAttributes](#vmattributes): Attributes to launch instances.
* **vmSizesProfile**: [VmSizeProfile](#vmsizeprofile)[]: List of VM sizes supported for LaunchBulkInstancesOperation
* **zoneAllocationPolicy**: [ZoneAllocationPolicy](#zoneallocationpolicy): Zone Allocation Policy for launching instances.

## LinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool: Specifies whether password authentication should be disabled.
* **enableVMAgentPlatformUpdates**: bool: Indicates whether VMAgent Platform Updates is enabled for the Linux virtual machine. Default value is false.
* **patchSettings**: [LinuxPatchSettings](#linuxpatchsettings): [Preview Feature] Specifies settings related to VM Guest Patching on Linux.
* **provisionVMAgent**: bool: Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
* **ssh**: [SshConfiguration](#sshconfiguration): Specifies the ssh key configuration for a Linux OS.

## LinuxPatchSettings
### Properties
* **assessmentMode**: 'AutomaticByPlatform' | 'ImageDefault' | string: Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
* **automaticByPlatformSettings**: [LinuxVMGuestPatchAutomaticByPlatformSettings](#linuxvmguestpatchautomaticbyplatformsettings): Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Linux.
* **patchMode**: 'AutomaticByPlatform' | 'ImageDefault' | string: Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true

## LinuxVMGuestPatchAutomaticByPlatformSettings
### Properties
* **bypassPlatformSafetyChecksOnUserSchedule**: bool: Enables customer to schedule patching without accidental upgrades
* **rebootSetting**: 'Always' | 'IfRequired' | 'Never' | 'Unknown' | string: Specifies the reboot setting for all AutomaticByPlatform patch installation operations.

## LocationBasedLaunchBulkInstancesOperationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedDiskParameters
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Specifies the customer managed disk encryption set resource id for the managed disk.
* **id**: string: The ID of the sub-resource.
* **securityProfile**: [VMDiskSecurityProfile](#vmdisksecurityprofile): Specifies the security profile for the managed disk.
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## NetworkInterfaceReference
### Properties
* **id**: string: The ID of the sub-resource.
* **properties**: [NetworkInterfaceReferenceProperties](#networkinterfacereferenceproperties): Describes a network interface reference properties.

## NetworkInterfaceReferenceProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the network interface when the VM is deleted
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## NetworkProfile
### Properties
* **networkApiVersion**: '2020-11-01' | '2022-11-01' | string: specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations
* **networkInterfaceConfigurations**: [VirtualMachineNetworkInterfaceConfiguration](#virtualmachinenetworkinterfaceconfiguration)[]: Specifies the networking configurations that will be used to create the virtual machine networking resources.
* **networkInterfaces**: [NetworkInterfaceReference](#networkinterfacereference)[]: Specifies the list of resource Ids for the network interfaces associated with the virtual machine.

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite' | string: Specifies the caching requirements. Possible values are: None, ReadOnly, ReadWrite. The defaulting behavior is: None for Standard storage. ReadOnly for Premium storage.
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Restore' | string (Required): Specifies how the virtual machine disk should be created. Possible values are Attach, FromImage. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
* **deleteOption**: 'Delete' | 'Detach' | string: Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are: Delete, Detach. The default value is set to Detach. For an ephemeral OS Disk, the default value is set to Delete. The user cannot change the delete option for an ephemeral OS Disk.
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings): Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings): Specifies the encryption settings for the OS Disk. Minimum compute api-version: 2015-06-15.
* **image**: [VirtualHardDisk](#virtualharddisk): The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows' | string: This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: Windows, Linux.
* **vhd**: [VirtualHardDisk](#virtualharddisk): The virtual hard disk.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## OSImageNotificationProfile
### Properties
* **enable**: bool: Specifies whether the OS Image Scheduled event is enabled or disabled.
* **notBeforeTimeout**: string: Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M)

## OSProfile
### Properties
* **adminPassword**: string {sensitive}: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
* **allowExtensionOperations**: bool: Specifies whether extension operations should be allowed on the virtual machine. This may only be set to False when no extensions are present on the virtual machine.
* **computerName**: string: Specifies the host OS name of the virtual machine. This name cannot be updated after the VM is created. **Max-length (Windows):** 15 characters. **Max-length (Linux):** 64 characters. For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules).
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. **Note: Do not pass any secrets or passwords in customData property.** This property cannot be updated after the VM is created. The property 'customData' is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/blog/custom-data-and-cloud-init-on-windows-azure/). For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init).
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
* **requireGuestProvisionSignal**: bool: Optional property which must either be set to True or omitted.
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## PatchSettings
### Properties
* **assessmentMode**: 'AutomaticByPlatform' | 'ImageDefault' | string: Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
* **automaticByPlatformSettings**: [WindowsVMGuestPatchAutomaticByPlatformSettings](#windowsvmguestpatchautomaticbyplatformsettings): Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Windows.
* **enableHotpatching**: bool: Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'.
* **patchMode**: 'AutomaticByOS' | 'AutomaticByPlatform' | 'Manual' | string: Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true

## Plan
### Properties
* **name**: string (Required): A user defined name of the 3rd Party Artifact that is being procured.
* **product**: string (Required): The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
* **promotionCode**: string: A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
* **publisher**: string (Required): The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
* **version**: string: The version of the desired product/artifact.

## PriorityProfile
### Properties
* **allocationStrategy**: 'CapacityOptimized' | 'LowestPrice' | 'Prioritized' | string: Allocation strategy to follow when determining the VM sizes distribution.
* **evictionPolicy**: 'Deallocate' | 'Delete' | string: Eviction Policy to follow when evicting Spot VMs.
* **maxPricePerVM**: int: Price per hour of each Spot VM will never exceed this.
* **type**: 'Regular' | 'Spot' | string: Specifies the type of Virtual Machine.

## ProxyAgentSettings
### Properties
* **addProxyAgentExtension**: bool: Specify whether to implicitly install the ProxyAgent Extension. This option is currently applicable only for Linux Os.
* **enabled**: bool: Specifies whether ProxyAgent feature should be enabled on the virtual machine or virtual machine scale set.
* **imds**: [HostEndpointSettings](#hostendpointsettings): Specifies the IMDS endpoint settings while creating the virtual machine or virtual machine scale set. Minimum api-version: 2024-03-01.
* **keyIncarnationId**: int: Increase the value of this property allows users to reset the key used for securing communication channel between guest and host.
* **mode**: 'Audit' | 'Enforce' | string: Specifies the mode that ProxyAgent will execute on. Warning: this property has been deprecated, please specify 'mode' under particular hostendpoint setting.
* **wireServer**: [HostEndpointSettings](#hostendpointsettings): Specifies the Wire Server endpoint settings while creating the virtual machine or virtual machine scale set. Minimum api-version: 2024-03-01.

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string: Specify public IP sku name
* **tier**: 'Global' | 'Regional' | string: Specify public IP sku tier

## RetryPolicy
### Properties
* **retryCount**: int: Retry count for user request
* **retryWindowInMinutes**: int: Retry window in minutes for user request

## ScheduledEventsAdditionalPublishingTargets
### Properties
* **eventGridAndResourceGraph**: [EventGridAndResourceGraph](#eventgridandresourcegraph): The configuration parameters used while creating eventGridAndResourceGraph Scheduled Event setting.

## ScheduledEventsPolicy
### Properties
* **allInstancesDown**: [AllInstancesDown](#allinstancesdown): The configuration parameters used while creating AllInstancesDown scheduled event setting creation.
* **scheduledEventsAdditionalPublishingTargets**: [ScheduledEventsAdditionalPublishingTargets](#scheduledeventsadditionalpublishingtargets): The configuration parameters used while publishing scheduledEventsAdditionalPublishingTargets.
* **userInitiatedReboot**: [UserInitiatedReboot](#userinitiatedreboot): The configuration parameters used while creating userInitiatedReboot scheduled event setting creation.
* **userInitiatedRedeploy**: [UserInitiatedRedeploy](#userinitiatedredeploy): The configuration parameters used while creating userInitiatedRedeploy scheduled event setting creation.

## ScheduledEventsProfile
### Properties
* **osImageNotificationProfile**: [OSImageNotificationProfile](#osimagenotificationprofile): Specifies OS Image Scheduled Event related configurations.
* **terminateNotificationProfile**: [TerminateNotificationProfile](#terminatenotificationprofile): Specifies Terminate Scheduled Event related configurations.

## SecurityProfile
### Properties
* **encryptionAtHost**: bool: This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource.
* **encryptionIdentity**: [EncryptionIdentity](#encryptionidentity): Specifies the Managed Identity used by ADE to get access token for keyvault operations.
* **proxyAgentSettings**: [ProxyAgentSettings](#proxyagentsettings): Specifies ProxyAgent settings while creating the virtual machine. Minimum compute api-version: 2023-09-01.
* **securityType**: 'ConfidentialVM' | 'TrustedLaunch' | string: Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set.
* **uefiSettings**: [UefiSettings](#uefisettings): Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum compute api-version: 2020-12-01.

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
* **path**: string: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## StorageProfile
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
* **diskControllerType**: 'NVMe' | 'SCSI' | string: Specifies the disk controller type configured for the VM. **Note:** This property will be set to the default disk controller type if not specified provided virtual machine is being created with 'hyperVGeneration' set to V2 based on the capabilities of the operating system disk and VM size from the the specified minimum api version. You need to deallocate the VM before updating its disk controller type unless you are updating the VM size in the VM configuration which implicitly deallocates and reallocates the VM. Minimum api-version: 2022-08-01.
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
* **osDisk**: [OSDisk](#osdisk): Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).

## SubResource
### Properties
* **id**: string: The ID of the sub-resource.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TerminateNotificationProfile
### Properties
* **enable**: bool: Specifies whether the Terminate Scheduled event is enabled or disabled.
* **notBeforeTimeout**: string: Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M)

## UefiSettings
### Properties
* **secureBootEnabled**: bool: Specifies whether secure boot should be enabled on the virtual machine. Minimum compute api-version: 2020-12-01.
* **vTpmEnabled**: bool: Specifies whether vTPM should be enabled on the virtual machine. Minimum compute api-version: 2020-12-01.

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserInitiatedReboot
### Properties
* **automaticallyApprove**: bool: Specifies Reboot Scheduled Event related configurations.

## UserInitiatedRedeploy
### Properties
* **automaticallyApprove**: bool: Specifies Redeploy Scheduled Event related configurations.

## VaultCertificate
### Properties
* **certificateStore**: string: For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  'data':'<Base64-encoded-certificate>',<br>  'dataType':'pfx',<br>  'password':'<pfx-file-password>'<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource): The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[]: The list of key vault references in SourceVault which contain certificates.

## VirtualHardDisk
### Properties
* **uri**: string: Specifies the virtual hard disk's uri.

## VirtualMachineExtension
### Properties
* **name**: string (Required): The name of the virtual machine extension.
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties) (Required): Properties of the virtual machine extension.

## VirtualMachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **protectedSettings**: [VirtualMachineExtensionPropertiesProtectedSettings](#virtualmachineextensionpropertiesprotectedsettings): The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **protectedSettingsFromKeyVault**: [KeyVaultSecretReference](#keyvaultsecretreference): The extensions protected settings that are passed by reference, and consumed from key vault
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: [VirtualMachineExtensionPropertiesSettings](#virtualmachineextensionpropertiessettings): JSON formatted public settings for the extension.
* **suppressFailures**: bool: Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
* **type**: string: Specifies the type of the extension; an example is 'CustomScriptExtension'.
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineExtensionPropertiesProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## VirtualMachineExtensionPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## VirtualMachineIpTag
### Properties
* **ipTagType**: string: IP tag type. Example: FirstPartyUsage.
* **tag**: string: IP tag associated with the public IP. Example: SQL, Storage etc.

## VirtualMachineNetworkInterfaceConfiguration
### Properties
* **name**: string (Required): The network interface configuration name.
* **properties**: [VirtualMachineNetworkInterfaceConfigurationProperties](#virtualmachinenetworkinterfaceconfigurationproperties): Describes a virtual machine network profile's IP configuration.
* **tags**: [VirtualMachineNetworkInterfaceConfigurationTags](#virtualmachinenetworkinterfaceconfigurationtags): Resource tags applied to the networkInterface address created by this NetworkInterfaceConfiguration

## VirtualMachineNetworkInterfaceConfigurationProperties
### Properties
* **auxiliaryMode**: 'AcceleratedConnections' | 'Floating' | 'None' | string: Specifies whether the Auxiliary mode is enabled for the Network Interface resource.
* **auxiliarySku**: 'A1' | 'A2' | 'A4' | 'A8' | 'None' | string: Specifies whether the Auxiliary sku is enabled for the Network Interface resource.
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the network interface when the VM is deleted
* **disableTcpStateTracking**: bool: Specifies whether the network interface is disabled for tcp state tracking.
* **dnsSettings**: [VirtualMachineNetworkInterfaceDnsSettingsConfiguration](#virtualmachinenetworkinterfacednssettingsconfiguration): The dns settings to be applied on the network interfaces.
* **dscpConfiguration**: [SubResource](#subresource): The DSCP configuration for the network interface.
* **enableAcceleratedNetworking**: bool: Specifies whether the network interface is accelerated networking-enabled.
* **enableFpga**: bool: Specifies whether the network interface is FPGA networking-enabled.
* **enableIPForwarding**: bool: Whether IP forwarding enabled on this NIC.
* **ipConfigurations**: [VirtualMachineNetworkInterfaceIPConfiguration](#virtualmachinenetworkinterfaceipconfiguration)[] (Required): Specifies the IP configurations of the network interface.
* **networkSecurityGroup**: [SubResource](#subresource): The network security group.
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## VirtualMachineNetworkInterfaceConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineNetworkInterfaceDnsSettingsConfiguration
### Properties
* **dnsServers**: string[]: List of DNS servers IP addresses

## VirtualMachineNetworkInterfaceIPConfiguration
### Properties
* **name**: string (Required): The IP configuration name.
* **properties**: [VirtualMachineNetworkInterfaceIPConfigurationProperties](#virtualmachinenetworkinterfaceipconfigurationproperties): Describes a virtual machine network interface IP configuration properties.

## VirtualMachineNetworkInterfaceIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway.
* **applicationSecurityGroups**: [SubResource](#subresource)[]: Specifies an array of references to application security group.
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer].
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAddressConfiguration**: [VirtualMachinePublicIPAddressConfiguration](#virtualmachinepublicipaddressconfiguration): The publicIPAddressConfiguration.
* **subnet**: [SubResource](#subresource): Specifies the identifier of the subnet.

## VirtualMachineProfile
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Specifies additional capabilities enabled or disabled on the virtual machine.
* **applicationProfile**: [ApplicationProfile](#applicationprofile): Specifies the gallery applications that should be made available to the VM.
* **capacityReservation**: [CapacityReservationProfile](#capacityreservationprofile): Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum compute api-version: 2021-04-01.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. Minimum compute api-version: 2015-06-15.
* **extensionsTimeBudget**: string: Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum compute api-version: 2020-06-01.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the virtual machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned.
* **scheduledEventsPolicy**: [ScheduledEventsPolicy](#scheduledeventspolicy): Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the virtual machine.
* **scheduledEventsProfile**: [ScheduledEventsProfile](#scheduledeventsprofile): Specifies Scheduled Event related configurations.
* **securityProfile**: [SecurityProfile](#securityprofile): Specifies the Security related profile settings for the virtual machine.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **userData**: string: UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum compute api-version: 2021-03-01.

## VirtualMachinePublicIPAddressConfiguration
### Properties
* **name**: string (Required): The publicIP address configuration name.
* **properties**: [VirtualMachinePublicIPAddressConfigurationProperties](#virtualmachinepublicipaddressconfigurationproperties): Describes a virtual machines IP Configuration's PublicIPAddress configuration
* **sku**: [PublicIPAddressSku](#publicipaddresssku): Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
* **tags**: [VirtualMachinePublicIPAddressConfigurationTags](#virtualmachinepublicipaddressconfigurationtags): Resource tags applied to the publicIP address created by this PublicIPAddressConfiguration

## VirtualMachinePublicIPAddressConfigurationProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the public IP address when the VM is deleted
* **dnsSettings**: [VirtualMachinePublicIPAddressDnsSettingsConfiguration](#virtualmachinepublicipaddressdnssettingsconfiguration): The dns settings to be applied on the publicIP addresses .
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipTags**: [VirtualMachineIpTag](#virtualmachineiptag)[]: The list of IP tags associated with the public IP address.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: Specify the public IP allocation type
* **publicIPPrefix**: [SubResource](#subresource): The PublicIPPrefix from which to allocate publicIP addresses.

## VirtualMachinePublicIPAddressConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachinePublicIPAddressDnsSettingsConfiguration
### Properties
* **domainNameLabel**: string (Required): The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID.
* **domainNameLabelScope**: 'NoReuse' | 'ResourceGroupReuse' | 'SubscriptionReuse' | 'TenantReuse' | string: The Domain name label scope of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the hashed domain name label with policy according to the domain name label scope and vm network profile unique ID.

## VMAttributeMinMaxDouble
### Properties
* **max**: int {minValue: 0}: Maximum value. Must be greater than zero. Double.MaxValue(1.7976931348623157E+308).
* **min**: int {minValue: 0}: Minimum value. If not specified, no minimum filter is applied.

## VMAttributeMinMaxInteger
### Properties
* **max**: int {minValue: 0}: Max VMSize from CRS, Max = 4294967295 (uint.MaxValue) if not specified.
* **min**: int {minValue: 0}: Min VMSize from CRS, Min = 0 (uint.MinValue) if not specified.

## VMAttributes
### Properties
* **acceleratorCount**: [VMAttributeMinMaxInteger](#vmattributeminmaxinteger): The range of accelerator count specified from min to max. Optional parameter. Either Min or Max is required if specified.
acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
If acceleratorSupport is "Excluded", this VMAttribute can not be used.
* **acceleratorManufacturers**: ('AMD' | 'Nvidia' | 'Xilinx' | string)[]: The accelerator manufacturers specified as a list. 
acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
If acceleratorSupport is "Excluded", this VMAttribute can not be used.
* **acceleratorSupport**: 'Excluded' | 'Included' | 'Required' | string: Specifies whether the VMSize supporting accelerator should be used to launch instances or not.
acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
If acceleratorSupport is "Excluded", this VMAttribute can not be used.
* **acceleratorTypes**: ('FPGA' | 'GPU' | string)[]: The accelerator types specified as a list. acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
If acceleratorSupport is "Excluded", this VMAttribute can not be used.
* **allowedVMSizes**: string[]: Specifies which VMSizes should be allowed while filtering on VMAttributes. Cannot be specified together with excludedVMSizes. Maximum of 10 VM sizes allowed. Optional parameter.
* **architectureTypes**: ('ARM64' | 'X64' | string)[] (Required): The VM architecture types specified as a list. Must be specified if VMAttributes are specified. Must be compatible with image used.
* **burstableSupport**: 'Excluded' | 'Included' | 'Required' | string: Specifies whether the VMSize supporting burstable capability should be used to launch instances or not.
* **cpuManufacturers**: ('AMD' | 'Ampere' | 'Intel' | 'Microsoft' | string)[]: The VM CPU manufacturers specified as a list. Optional parameter.
* **dataDiskCount**: [VMAttributeMinMaxInteger](#vmattributeminmaxinteger): The range of data disk count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
* **excludedVMSizes**: string[]: Specifies which VMSizes should be excluded while filtering on VMAttributes. Cannot be specified together with allowedVMSizes. Maximum of 10 VM sizes allowed. Optional parameter.
* **hyperVGenerations**: ('Gen1' | 'Gen2' | string)[]: The hyperV generations specified as a list. Optional parameter.
* **localStorageDiskTypes**: ('HDD' | 'SSD' | string)[]: The local storage disk types specified as a list. LocalStorageSupport should be set to "Included" or "Required" to use this VMAttribute. 
If localStorageSupport is "Excluded", this VMAttribute can not be used.
* **localStorageInGiB**: [VMAttributeMinMaxDouble](#vmattributeminmaxdouble): LocalStorageSupport should be set to "Included" or "Required" to use this VMAttribute. 
If localStorageSupport is "Excluded", this VMAttribute can not be used.
* **localStorageSupport**: 'Excluded' | 'Included' | 'Required' | string: Specifies whether the VMSize supporting local storage should be used to launch instances or not.
Included - Default if not specified as most Azure VMs support local storage.
* **memoryInGiB**: [VMAttributeMinMaxDouble](#vmattributeminmaxdouble) (Required): The range of memory specified from Min to Max. Must be specified if VMAttributes are specified, either Min or Max is required if specified.
* **memoryInGiBPerVCpu**: [VMAttributeMinMaxDouble](#vmattributeminmaxdouble): The range of memory in GiB per vCPU specified from min to max. Optional parameter. Either Min or Max is required if specified.
* **networkBandwidthInMbps**: [VMAttributeMinMaxDouble](#vmattributeminmaxdouble): The range of network bandwidth in Mbps specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
* **networkInterfaceCount**: [VMAttributeMinMaxInteger](#vmattributeminmaxinteger): The range of network interface count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
* **rdmaNetworkInterfaceCount**: [VMAttributeMinMaxInteger](#vmattributeminmaxinteger): The range of RDMA (Remote Direct Memory Access) network interface count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
rdmaSupport should be set to "Included" or "Required" to use this VMAttribute. 
If rdmaSupport is "Excluded", this VMAttribute can not be used.
* **rdmaSupport**: 'Excluded' | 'Included' | 'Required' | string: Specifies whether the VMSize supporting RDMA (Remote Direct Memory Access) should be used to build launch instances or not.
* **vCpuCount**: [VMAttributeMinMaxInteger](#vmattributeminmaxinteger) (Required): The range of vCpuCount specified from Min to Max. Must be specified if VMAttributes are specified, either Min or Max is required if specified.
* **vmCategories**: ('ComputeOptimized' | 'FpgaAccelerated' | 'GeneralPurpose' | 'GpuAccelerated' | 'HighPerformanceCompute' | 'MemoryOptimized' | 'StorageOptimized' | string)[]: The VM category specified as a list. Optional parameter.

## VMDiskSecurityProfile
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob.
* **securityEncryptionType**: 'DiskWithVMGuestState' | 'NonPersistedTPM' | 'VMGuestStateOnly' | string: Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and NonPersistedTPM for not persisting firmware state in the VMGuestState blob.. **Note:** It can be set for only Confidential VMs.

## VMGalleryApplication
### Properties
* **configurationReference**: string: Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided
* **enableAutomaticUpgrade**: bool: If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS
* **order**: int: Optional, Specifies the order in which the packages have to be installed
* **packageReferenceId**: string (Required): Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version}
* **tags**: string: Optional, Specifies a passthrough value for more generic context.
* **treatFailureAsDeploymentFailure**: bool: Optional, If true, any failure for any operation in the VmApplication will fail the deployment

## VmSizeProfile
### Properties
* **name**: string (Required): The Sku name (e.g. 'Standard_DS1_v2')
* **rank**: int {minValue: 0, maxValue: 65535}: The rank of the VM size. This is used with 'AllocationStrategy.Prioritized'
The lower the number, the higher the priority. Starting with 0.

## WindowsConfiguration
### Properties
* **additionalUnattendContent**: [AdditionalUnattendContent](#additionalunattendcontent)[]: Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
* **enableAutomaticUpdates**: bool: Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
* **patchSettings**: [PatchSettings](#patchsettings): [Preview Feature] Specifies settings related to VM Guest Patching on Windows.
* **provisionVMAgent**: bool: Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, it is set to true by default. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
* **timeZone**: string: Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones).
* **winRM**: [WinRMConfiguration](#winrmconfiguration): Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell.

## WindowsVMGuestPatchAutomaticByPlatformSettings
### Properties
* **bypassPlatformSafetyChecksOnUserSchedule**: bool: Enables customer to schedule patching without accidental upgrades
* **rebootSetting**: 'Always' | 'IfRequired' | 'Never' | 'Unknown' | string: Specifies the reboot setting for all AutomaticByPlatform patch installation operations.

## WinRMConfiguration
### Properties
* **listeners**: [WinRMListener](#winrmlistener)[]: The list of Windows Remote Management listeners

## WinRMListener
### Properties
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
* **protocol**: 'Http' | 'Https' | string: Specifies the protocol of WinRM listener. Possible values are: **http,** **https.**

## ZoneAllocationPolicy
### Properties
* **distributionStrategy**: 'BestEffortBalanced' | 'BestEffortSingleZone' | 'Prioritized' | 'StrictBalanced' | string (Required): Distribution strategy used for zone allocation policy.
* **zonePreferences**: [ZonePreference](#zonepreference)[]: Zone preferences, required when zone distribution strategy is Prioritized.

## ZonePreference
### Properties
* **rank**: int {minValue: 0, maxValue: 65535}: The rank of the zone. This is used with 'Prioritized' ZoneDistributionStrategy.
    The lower the number, the higher the priority, starting with 0.
    0 is the highest rank. If not specified, defaults to lowest rank.
* **zone**: string (Required): Name of the zone.

