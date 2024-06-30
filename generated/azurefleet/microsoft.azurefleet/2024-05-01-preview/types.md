# Microsoft.AzureFleet @ 2024-05-01-preview

## Resource Microsoft.AzureFleet/fleets@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[^_\W][\w-._]{0,79}(?<![-.])$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [FleetProperties](#fleetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureFleet/fleets' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Zones in which the Compute Fleet is available

## AdditionalUnattendContent
### Properties
* **componentName**: 'Microsoft-Windows-Shell-Setup': The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
* **content**: string: Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
* **passName**: 'OobeSystem': The pass name. Currently, the only allowable value is OobeSystem.
* **settingName**: 'AutoLogon' | 'FirstLogonCommands': Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.

## ApiEntityReference
### Properties
* **id**: string: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## ApplicationProfile
### Properties
* **galleryApplications**: [VMGalleryApplication](#vmgalleryapplication)[]: Specifies the gallery applications that should be made available to the VM/VMSS

## BillingProfile
### Properties
* **maxPrice**: int: Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01.

## BootDiagnostics
### Properties
* **enabled**: bool: Whether boot diagnostics should be enabled on the Virtual Machine.
* **storageUri**: string: Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used.

## CapacityReservationProfile
### Properties
* **capacityReservationGroup**: [SubResource](#subresource): Specifies the capacity reservation group resource id that should be used for allocating the virtual machine or scaleset vm instances provided enough capacity has been reserved. Please refer to https://aka.ms/CapacityReservation for more details.

## ComputeProfile
### Properties
* **baseVirtualMachineProfile**: [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile) (Required): Base Virtual Machine Profile Properties to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachineScaleSet.json#/definitions/VirtualMachineScaleSetVMProfile"
* **computeApiVersion**: string: Specifies the Microsoft.Compute API version to use when creating underlying Virtual Machine scale sets and Virtual Machines.
The default value will be the latest supported computeApiVersion by Compute Fleet.
* **platformFaultDomainCount**: int: Specifies the number of fault domains to use when creating the underlying VMSS.
A fault domain is a logical group of hardware within an Azure datacenter.
VMs in the same fault domain share a common power source and network switch.
If not specified, defaults to 1, which represents "Max Spreading" (using as many fault domains as possible).
This property cannot be updated.

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. **NOTE**: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.

## DiffDiskSettings
### Properties
* **option**: 'Local' | string: Specifies the ephemeral disk settings for operating system disk.
* **placement**: 'CacheDisk' | 'ResourceDisk' | string: Specifies the ephemeral disk placement for operating system disk. Possible values are: **CacheDisk,** **ResourceDisk.** The defaulting behavior is: **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk** is used. Refer to the VM size documentation for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk.

## DiskEncryptionSetParameters
### Properties
* **id**: string: Resource Id

## EncryptionIdentity
### Properties
* **userAssignedIdentityResourceId**: string: Specifies ARM Resource ID of one of the user identities associated with the VM.

## FleetProperties
### Properties
* **computeProfile**: [ComputeProfile](#computeprofile) (Required): Compute Profile to use for running user's workloads.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **regularPriorityProfile**: [RegularPriorityProfile](#regularpriorityprofile): Configuration Options for Regular instances in Compute Fleet.
* **spotPriorityProfile**: [SpotPriorityProfile](#spotpriorityprofile): Configuration Options for Spot instances in Compute Fleet.
* **vmSizesProfile**: [VmSizeProfile](#vmsizeprofile)[] (Required): List of VM sizes supported for Compute Fleet

## ImageReference
### Properties
* **communityGalleryImageId**: string: Specified the community gallery image unique id for vm deployment. This can be fetched from community gallery image GET call.
* **exactVersion**: string (ReadOnly): Specifies in decimal numbers, the version of platform image or marketplace image used to create the virtual machine. This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'.
* **id**: string: Resource Id
* **offer**: string: Specifies the offer of the platform image or marketplace image used to create the virtual machine.
* **publisher**: string: The image publisher.
* **sharedGalleryImageId**: string: Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call.
* **sku**: string: The image SKU.
* **version**: string: Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. Please do not use field 'version' for gallery image deployment, gallery image should always use 'id' field for deployment, to use 'latest' version of gallery image, just set '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}' in the 'id' field without version input.

## InstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning': The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required): The URL referencing a secret in a Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required): The relative URL of the Key Vault containing the secret.

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

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## OSImageNotificationProfile
### Properties
* **enable**: bool: Specifies whether the OS Image Scheduled event is enabled or disabled.
* **notBeforeTimeout**: string: Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M)

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

## ProxyAgentSettings
### Properties
* **enabled**: bool: Specifies whether ProxyAgent feature should be enabled on the virtual machine or virtual machine scale set.
* **keyIncarnationId**: int: Increase the value of this property allows user to reset the key used for securing communication channel between guest and host.
* **mode**: 'Audit' | 'Enforce' | string: Specifies the mode that ProxyAgent will execute on if the feature is enabled. ProxyAgent will start to audit or monitor but not enforce access control over requests to host endpoints in Audit mode, while in Enforce mode it will enforce access control. The default value is Enforce mode.

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string: Specify public IP sku name
* **tier**: 'Global' | 'Regional' | string: Specify public IP sku tier

## RegularPriorityProfile
### Properties
* **allocationStrategy**: 'LowestPrice' | 'Prioritized' | string: Allocation strategy to follow when determining the VM sizes distribution for Regular VMs.
* **capacity**: int {minValue: 0}: Total capacity to achieve. It is currently in terms of number of VMs.
* **minCapacity**: int {minValue: 0}: Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself.

## ResourceWithOptionalLocationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduledEventsProfile
### Properties
* **osImageNotificationProfile**: [OSImageNotificationProfile](#osimagenotificationprofile): Specifies OS Image Scheduled Event related configurations.
* **terminateNotificationProfile**: [TerminateNotificationProfile](#terminatenotificationprofile): Specifies Terminate Scheduled Event related configurations.

## SecurityPostureReference
### Properties
* **excludeExtensions**: [VirtualMachineExtension](#virtualmachineextension)[]: List of virtual machine extensions to exclude when applying the Security Posture.
* **id**: string: The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|{major.*}|latest

## SecurityProfile
### Properties
* **encryptionAtHost**: bool: This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource.
* **encryptionIdentity**: [EncryptionIdentity](#encryptionidentity): Specifies the Managed Identity used by ADE to get access token for keyvault operations.
* **proxyAgentSettings**: [ProxyAgentSettings](#proxyagentsettings): Specifies ProxyAgent settings while creating the virtual machine. Minimum api-version: 2023-09-01.
* **securityType**: 'ConfidentialVM' | 'TrustedLaunch' | string: Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set.
* **uefiSettings**: [UefiSettings](#uefisettings): Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01.

## ServiceArtifactReference
### Properties
* **id**: string: The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}

## SpotPriorityProfile
### Properties
* **allocationStrategy**: 'CapacityOptimized' | 'LowestPrice' | 'PriceCapacityOptimized' | string: Allocation strategy to follow when determining the VM sizes distribution for Spot VMs.
* **capacity**: int {minValue: 0}: Total capacity to achieve. It is currently in terms of number of VMs.
* **evictionPolicy**: 'Deallocate' | 'Delete' | string: Eviction Policy to follow when evicting Spot VMs.
* **maintain**: bool: Flag to enable/disable continuous goal seeking for the desired capacity and restoration of evicted Spot VMs.
If maintain is enabled, AzureFleetRP will use all VM sizes in vmSizesProfile to create new VMs (if VMs are evicted deleted)
or update existing VMs with new VM sizes (if VMs are evicted deallocated or failed to allocate due to capacity constraint) in order to achieve the desired capacity.
Maintain is enabled by default.
* **maxPricePerVM**: int: Price per hour of each Spot VM will never exceed this.
* **minCapacity**: int {minValue: 0}: Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself.

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
* **path**: string: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## SubResource
### Properties
* **id**: string: Resource Id

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UefiSettings
### Properties
* **secureBootEnabled**: bool: Specifies whether secure boot should be enabled on the virtual machine. Minimum api-version: 2020-12-01.
* **vTpmEnabled**: bool: Specifies whether vTPM should be enabled on the virtual machine. Minimum api-version: 2020-12-01.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VaultCertificate
### Properties
* **certificateStore**: string: For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted.
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource): The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[]: The list of key vault references in SourceVault which contain certificates.

## VirtualHardDisk
### Properties
* **uri**: string: Specifies the virtual hard disk's uri.

## VirtualMachineExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceWithOptionalLocationTags](#resourcewithoptionallocationtags): Resource tags
* **type**: string (ReadOnly): Resource type

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
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **instanceView**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview): The virtual machine extension instance view.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **protectedSettingsFromKeyVault**: [KeyVaultSecretReference](#keyvaultsecretreference): The extensions protected settings that are passed by reference, and consumed from key vault
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **suppressFailures**: bool: Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineScaleSetDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' | string (Required): The create option.
* **deleteOption**: 'Delete' | 'Detach' | string: Specifies whether data disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only).<br><br> Possible values: <br><br> **Delete** If this value is used, the data disk is deleted when the VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the data disk is retained after VMSS Flex VM is deleted.<br><br> The default value is set to **Delete**.
* **diskIOPSReadWrite**: int: Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
* **diskMBpsReadWrite**: int: Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## VirtualMachineScaleSetExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: The name of the extension.
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties): Describes the properties of a Virtual Machine Scale Set Extension.
* **type**: string (ReadOnly): Resource type

## VirtualMachineScaleSetExtensionProfile
### Properties
* **extensions**: [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)[]: The virtual machine scale set child extension resources.
* **extensionsTimeBudget**: string: Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.

## VirtualMachineScaleSetExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
* **forceUpdateTag**: string: If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **protectedSettingsFromKeyVault**: [KeyVaultSecretReference](#keyvaultsecretreference): The extensions protected settings that are passed by reference, and consumed from key vault
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **suppressFailures**: bool: Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineScaleSetHardwareProfile
### Properties
* **vmSizeProperties**: [VMSizeProperties](#vmsizeproperties): Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-11-01. Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details.

## VirtualMachineScaleSetIPConfiguration
### Properties
* **name**: string (Required): The IP configuration name.
* **properties**: [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration properties.

## VirtualMachineScaleSetIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
* **applicationSecurityGroups**: [SubResource](#subresource)[]: Specifies an array of references to application security group.
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
* **loadBalancerInboundNatPools**: [SubResource](#subresource)[]: Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
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
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Specifies the customer managed disk encryption set resource id for the managed disk.
* **securityProfile**: [VMDiskSecurityProfile](#vmdisksecurityprofile): Specifies the security profile for the managed disk.
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.

## VirtualMachineScaleSetNetworkConfiguration
### Properties
* **name**: string (Required): The network configuration name.
* **properties**: [VirtualMachineScaleSetNetworkConfigurationProperties](#virtualmachinescalesetnetworkconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration.

## VirtualMachineScaleSetNetworkConfigurationDnsSettings
### Properties
* **dnsServers**: string[]: List of DNS servers IP addresses

## VirtualMachineScaleSetNetworkConfigurationProperties
### Properties
* **auxiliaryMode**: 'AcceleratedConnections' | 'Floating' | 'None' | string: Specifies whether the Auxiliary mode is enabled for the Network Interface resource.
* **auxiliarySku**: 'A1' | 'A2' | 'A4' | 'A8' | 'None' | string: Specifies whether the Auxiliary sku is enabled for the Network Interface resource.
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the network interface when the VM is deleted
* **disableTcpStateTracking**: bool: Specifies whether the network interface is disabled for tcp state tracking.
* **dnsSettings**: [VirtualMachineScaleSetNetworkConfigurationDnsSettings](#virtualmachinescalesetnetworkconfigurationdnssettings): The dns settings to be applied on the network interfaces.
* **enableAcceleratedNetworking**: bool: Specifies whether the network interface is accelerated networking-enabled.
* **enableFpga**: bool: Specifies whether the network interface is FPGA networking-enabled.
* **enableIPForwarding**: bool: Whether IP forwarding enabled on this NIC.
* **ipConfigurations**: [VirtualMachineScaleSetIPConfiguration](#virtualmachinescalesetipconfiguration)[] (Required): Specifies the IP configurations of the network interface.
* **networkSecurityGroup**: [SubResource](#subresource): The network security group.
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## VirtualMachineScaleSetNetworkProfile
### Properties
* **healthProbe**: [ApiEntityReference](#apientityreference): A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
* **networkApiVersion**: '2020-11-01' | string: specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible'
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]: The list of network configurations.

## VirtualMachineScaleSetOSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' | string (Required): Specifies how the virtual machines in the scale set should be created. The only allowed value is: **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **deleteOption**: 'Delete' | 'Detach' | string: Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only). <br><br> Possible values: <br><br> **Delete** If this value is used, the OS disk is deleted when VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the OS disk is retained after VMSS Flex VM is deleted. <br><br> The default value is set to **Delete**. For an Ephemeral OS Disk, the default value is set to **Delete**. User cannot change the delete option for Ephemeral OS Disk.
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings): Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
* **image**: [VirtualHardDisk](#virtualharddisk): Specifies information about the unmanaged user image to base the scale set on.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows': This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
* **vhdContainers**: string[]: Specifies the container urls that are used to store operating system disks for the scale set.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## VirtualMachineScaleSetOSProfile
### Properties
* **adminPassword**: string {sensitive}: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters
* **allowExtensionOperations**: bool: Specifies whether extension operations should be allowed on the virtual machine scale set. This may only be set to False when no extensions are present on the virtual machine scale set.
* **computerNamePrefix**: string: Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long.
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init)
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
* **requireGuestProvisionSignal**: bool: Optional property which must either be set to True or omitted.
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machines in the scale set. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## VirtualMachineScaleSetPublicIPAddressConfiguration
### Properties
* **name**: string (Required): The publicIP address configuration name.
* **properties**: [VirtualMachineScaleSetPublicIPAddressConfigurationProperties](#virtualmachinescalesetpublicipaddressconfigurationproperties): Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
* **sku**: [PublicIPAddressSku](#publicipaddresssku): Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.

## VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings
### Properties
* **domainNameLabel**: string (Required): The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created
* **domainNameLabelScope**: 'NoReuse' | 'ResourceGroupReuse' | 'SubscriptionReuse' | 'TenantReuse' | string: The Domain name label scope.The concatenation of the hashed domain name label that generated according to the policy from domain name label scope and vm index will be the domain name labels of the PublicIPAddress resources that will be created

## VirtualMachineScaleSetPublicIPAddressConfigurationProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the public IP when the VM is deleted
* **dnsSettings**: [VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings](#virtualmachinescalesetpublicipaddressconfigurationdnssettings): The dns settings to be applied on the publicIP addresses .
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipTags**: [VirtualMachineScaleSetIpTag](#virtualmachinescalesetiptag)[]: The list of IP tags associated with the public IP address.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
* **publicIPPrefix**: [SubResource](#subresource): The PublicIPPrefix from which to allocate publicIP addresses.

## VirtualMachineScaleSetStorageProfile
### Properties
* **dataDisks**: [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)[]: Specifies the parameters that are used to add data disks to the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
* **diskControllerType**: string
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
* **osDisk**: [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk): Specifies information about the operating system disk used by the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).

## VirtualMachineScaleSetVMProfile
### Properties
* **applicationProfile**: [ApplicationProfile](#applicationprofile): Specifies the gallery applications that should be made available to the VM/VMSS
* **billingProfile**: [BillingProfile](#billingprofile): Specifies the billing related details of a Azure Spot VMSS. Minimum api-version: 2019-03-01.
* **capacityReservation**: [CapacityReservationProfile](#capacityreservationprofile): Specifies the capacity reservation related details of a scale set. Minimum api-version: 2021-04-01.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
* **evictionPolicy**: 'Deallocate' | 'Delete' | string: Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile): Specifies a collection of settings for extensions installed on virtual machines in the scale set.
* **hardwareProfile**: [VirtualMachineScaleSetHardwareProfile](#virtualmachinescalesethardwareprofile): Specifies the hardware profile related details of a scale set. Minimum api-version: 2021-11-01.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile): Specifies properties of the network interfaces of the virtual machines in the scale set.
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile): Specifies the operating system settings for the virtual machines in the scale set.
* **priority**: 'Low' | 'Regular' | 'Spot' | string: Specifies the priority for the virtual machines in the scale set. Minimum api-version: 2017-10-30-preview.
* **scheduledEventsProfile**: [ScheduledEventsProfile](#scheduledeventsprofile): Specifies Scheduled Event related configurations.
* **securityPostureReference**: [SecurityPostureReference](#securityposturereference): Specifies the security posture to be used for all virtual machines in the scale set. Minimum api-version: 2023-03-01
* **securityProfile**: [SecurityProfile](#securityprofile): Specifies the Security related profile settings for the virtual machines in the scale set.
* **serviceArtifactReference**: [ServiceArtifactReference](#serviceartifactreference): Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01
* **storageProfile**: [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile): Specifies the storage settings for the virtual machine disks.
* **timeCreated**: string (ReadOnly): Specifies the time in which this VM profile for the Virtual Machine Scale Set was created. Minimum API version for this property is 2023-09-01. This value will be added to VMSS Flex VM tags when creating/updating the VMSS VM Profile with minimum api-version 2023-09-01.
* **userData**: string: UserData for the virtual machines in the scale set, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.

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
* **rank**: int {minValue: 0, maxValue: 65535}: The rank of the VM size. This is used with 'RegularPriorityAllocationStrategy.Prioritized'
The lower the number, the higher the priority. Starting with 0.

## VMSizeProperties
### Properties
* **vCPUsAvailable**: int: Specifies the number of vCPUs available for the VM. When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list).
* **vCPUsPerCore**: int: Specifies the vCPU to physical core ratio. When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list). **Setting this property to 1 also means that hyper-threading is disabled.**

## WindowsConfiguration
### Properties
* **additionalUnattendContent**: [AdditionalUnattendContent](#additionalunattendcontent)[]: Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
* **enableAutomaticUpdates**: bool: Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
* **enableVMAgentPlatformUpdates**: bool: Indicates whether VMAgent Platform Updates is enabled for the Windows virtual machine. Default value is false.
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
* **protocol**: 'Http' | 'Https': Specifies the protocol of WinRM listener. Possible values are: **http,** **https.**

