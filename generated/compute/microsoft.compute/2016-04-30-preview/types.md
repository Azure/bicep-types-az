# Microsoft.Compute @ 2016-04-30-preview

## Resource Microsoft.Compute/availabilitySets@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties): The instance view of a resource.
* **sku**: [Sku](#sku): Describes a virtual machine scale set sku.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/disks@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskProperties](#diskproperties): Disk resource properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/disks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/images@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties): Describes the properties of an Image.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/snapshots@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskProperties](#diskproperties): Disk resource properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachines@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VirtualMachineIdentity](#virtualmachineidentity): Identity for the virtual machine.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineProperties](#virtualmachineproperties): Describes the properties of a Virtual Machine.
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly): The virtual machine child extension resources.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachines/extensions@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VirtualMachineScaleSetIdentity](#virtualmachinescalesetidentity): Identity for the virtual machine scale set.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineScaleSetProperties](#virtualmachinescalesetproperties): Describes the properties of a Virtual Machine Scale Set.
* **sku**: [Sku](#sku): Describes a virtual machine scale set sku.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets' (ReadOnly, DeployTimeConstant): The resource type

## AvailabilitySetProperties
### Properties
* **managed**: bool: If the availability set supports managed disks.
* **platformFaultDomainCount**: int: Fault Domain count.
* **platformUpdateDomainCount**: int: Update Domain count.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly): The resource status information.
* **virtualMachines**: [SubResource](#subresource)[]: A list of references to all virtual machines in the availability set.

## InstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning': The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## SubResource
### Properties
* **id**: string: Resource Id

## Sku
### Properties
* **capacity**: int: Specifies the number of virtual machines in the scale set.
* **name**: string: The sku name.
* **tier**: string: Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DiskProperties
### Properties
* **accountType**: 'Premium_LRS' | 'Standard_LRS': Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.
* **creationData**: [CreationData](#creationdata) (Required): Data used when creating a disk.
* **diskSizeGB**: int: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
* **encryptionSettings**: [EncryptionSettings](#encryptionsettings): Encryption settings for disk or snapshot
* **osType**: 'Linux' | 'Windows': The operating system of the osDiskImage.
* **ownerId**: string (ReadOnly): A relative URI containing the VM id that has the disk attached.
* **provisioningState**: string (ReadOnly): The disk provisioning state.
* **timeCreated**: string (ReadOnly): The time when the disk was created.

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' | 'Restore' (Required): This enumerates the possible sources of a disk's creation.
* **imageReference**: [ImageDiskReference](#imagediskreference): The source image used for creating the disk.
* **sourceResourceId**: string: If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.
* **sourceUri**: string: If createOption is Import, this is a SAS URI to a blob to be imported into a managed disk. If createOption is Copy, this is a relative Uri containing the id of the source snapshot to be copied into a managed disk.
* **storageAccountId**: string: If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription

## ImageDiskReference
### Properties
* **id**: string (Required): A relative uri containing either a Platform Image Repository or user image reference.
* **lun**: int: If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.

## EncryptionSettings
### Properties
* **diskEncryptionKey**: [KeyVaultAndSecretReference](#keyvaultandsecretreference): Key Vault Secret Url and vault id of the encryption key
* **enabled**: bool: Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
* **keyEncryptionKey**: [KeyVaultAndKeyReference](#keyvaultandkeyreference): Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey

## KeyVaultAndSecretReference
### Properties
* **secretUrl**: string (Required): Url pointing to a key or secret in KeyVault
* **sourceVault**: [SourceVault](#sourcevault) (Required): The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}

## SourceVault
### Properties
* **id**: string: Resource Id

## KeyVaultAndKeyReference
### Properties
* **keyUrl**: string (Required): Url pointing to a key or secret in KeyVault
* **sourceVault**: [SourceVault](#sourcevault) (Required): The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state.
* **sourceVirtualMachine**: [SubResource](#subresource)
* **storageProfile**: [ImageStorageProfile](#imagestorageprofile): Describes a storage profile.

## ImageStorageProfile
### Properties
* **dataDisks**: [ImageDataDisk](#imagedatadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
* **osDisk**: [ImageOSDisk](#imageosdisk) (Required): Describes an Operating System disk.

## ImageDataDisk
### Properties
* **blobUri**: string: The Virtual Hard Disk.
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **diskSizeGB**: int: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [SubResource](#subresource)
* **snapshot**: [SubResource](#subresource)

## ImageOSDisk
### Properties
* **blobUri**: string: The Virtual Hard Disk.
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **diskSizeGB**: int: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **managedDisk**: [SubResource](#subresource)
* **osState**: 'Generalized' | 'Specialized' (Required): The OS State.
* **osType**: 'Linux' | 'Windows' (Required): The operating system of the osDiskImage.
* **snapshot**: [SubResource](#subresource)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of virtual machine identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine.
* **type**: 'SystemAssigned': The type of identity used for the virtual machine. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.

## Plan
### Properties
* **name**: string: The plan ID.
* **product**: string: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **promotionCode**: string: The promotion code.
* **publisher**: string: The publisher ID.

## VirtualMachineProperties
### Properties
* **availabilitySet**: [SubResource](#subresource)
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly): The instance view of a virtual machine.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the virtual machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the virtual machine.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **vmId**: string (ReadOnly): Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.

## BootDiagnostics
### Properties
* **enabled**: bool: Whether boot diagnostics should be enabled on the Virtual Machine.
* **storageUri**: string: Uri of the storage account to use for placing the console output and screenshot.

## HardwareProfile
### Properties
* **vmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5': Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  <br><br> [List all available virtual machine sizes in an availability set](virtualmachines-list-sizes-availability-set.md) <br><br> [List all available virtual machine sizes in a region](virtualmachines-list-sizes-region.md) <br><br> [List all available virtual machine sizes for resizing](virtualmachines-list-sizes-for-resizing.md)

## VirtualMachineInstanceView
### Properties
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview): The instance view of a virtual machine boot diagnostics.
* **disks**: [DiskInstanceView](#diskinstanceview)[]: The virtual machine disk information.
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]: The extensions information.
* **platformFaultDomain**: int: Specifies the fault domain of the virtual machine.
* **platformUpdateDomain**: int: Specifies the update domain of the virtual machine.
* **rdpThumbPrint**: string: The Remote desktop certificate thumbprint.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview): The instance view of the VM Agent running on the virtual machine.

## BootDiagnosticsInstanceView
### Properties
* **consoleScreenshotBlobUri**: string (ReadOnly): The console screenshot blob URI.
* **serialConsoleLogBlobUri**: string (ReadOnly): The Linux serial console log blob Uri.

## DiskInstanceView
### Properties
* **name**: string: The disk name.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## VirtualMachineExtensionInstanceView
### Properties
* **name**: string: The virtual machine extension name.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **substatuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineAgentInstanceView
### Properties
* **extensionHandlers**: [VirtualMachineExtensionHandlerInstanceView](#virtualmachineextensionhandlerinstanceview)[]: The virtual machine extension handler instance view.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgentVersion**: string: The VM Agent full version.

## VirtualMachineExtensionHandlerInstanceView
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus): Instance view status.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterfaceReference](#networkinterfacereference)[]: Specifies the list of resource Ids for the network interfaces associated with the virtual machine.

## NetworkInterfaceReference
### Properties
* **id**: string: Resource Id
* **properties**: [NetworkInterfaceReferenceProperties](#networkinterfacereferenceproperties): Describes a network interface reference properties.

## NetworkInterfaceReferenceProperties
### Properties
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## OSProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
* **computerName**: string: Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions).
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machine.
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## LinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool: Specifies whether password authentication should be disabled.
* **ssh**: [SshConfiguration](#sshconfiguration): SSH configuration for Linux based VMs running on Azure

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **path**: string: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource)
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[]: The list of key vault references in SourceVault which contain certificates.

## VaultCertificate
### Properties
* **certificateStore**: string: For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}

## WindowsConfiguration
### Properties
* **additionalUnattendContent**: [AdditionalUnattendContent](#additionalunattendcontent)[]: Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
* **enableAutomaticUpdates**: bool: Indicates whether virtual machine is enabled for automatic updates.
* **provisionVMAgent**: bool: Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
* **timeZone**: string: Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time"
* **winRM**: [WinRMConfiguration](#winrmconfiguration): Describes Windows Remote Management configuration of the VM

## AdditionalUnattendContent
### Properties
* **componentName**: 'Microsoft-Windows-Shell-Setup': The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
* **content**: string: Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
* **passName**: 'OobeSystem': The pass name. Currently, the only allowable value is OobeSystem.
* **settingName**: 'AutoLogon' | 'FirstLogonCommands': Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.

## WinRMConfiguration
### Properties
* **listeners**: [WinRMListener](#winrmlistener)[]: The list of Windows Remote Management listeners

## WinRMListener
### Properties
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
* **protocol**: 'Http' | 'Https': Specifies the protocol of listener. <br><br> Possible values are: <br>**http** <br><br> **https**

## StorageProfile
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
* **osDisk**: [OSDisk](#osdisk): Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **image**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The parameters of a managed disk.
* **name**: string: The disk name.
* **vhd**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.

## VirtualHardDisk
### Properties
* **uri**: string: Specifies the virtual hard disk's uri.

## ManagedDiskParameters
### Properties
* **id**: string: Resource Id
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS': Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.

## ImageReference
### Properties
* **id**: string: Resource Id
* **offer**: string: Specifies the offer of the platform image or marketplace image used to create the virtual machine.
* **publisher**: string: The image publisher.
* **sku**: string: The image SKU.
* **version**: string: Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings): Describes a Encryption Settings for a Disk
* **image**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The parameters of a managed disk.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows': The operating system of the osDiskImage.
* **vhd**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.

## DiskEncryptionSettings
### Properties
* **diskEncryptionKey**: [KeyVaultSecretReference](#keyvaultsecretreference): Describes a reference to Key Vault Secret
* **enabled**: bool: Specifies whether disk encryption should be enabled on the virtual machine.
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference): Describes a reference to Key Vault Key

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required): The URL referencing a secret in a Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required)

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required): The URL referencing a key encryption key in Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required)

## VirtualMachineExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string (Required): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## VirtualMachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **instanceView**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview): The instance view of a virtual machine extension.
* **protectedSettings**: any: Any object
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Any object
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

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

## VirtualMachineScaleSetIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of virtual machine scale set identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine scale set.
* **type**: 'SystemAssigned': The type of identity used for the virtual machine. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.

## VirtualMachineScaleSetProperties
### Properties
* **overProvision**: bool: Specifies whether the Virtual Machine Scale Set should be overprovisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **singlePlacementGroup**: bool: When true this limits the scale set to a single placement group, of max size 100 virtual machines.
* **upgradePolicy**: [UpgradePolicy](#upgradepolicy): Describes an upgrade policy - automatic or manual.
* **virtualMachineProfile**: [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile): Describes a virtual machine scale set virtual machine profile.

## UpgradePolicy
### Properties
* **mode**: 'Automatic' | 'Manual': Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.

## VirtualMachineScaleSetVMProfile
### Properties
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile): Describes a virtual machine scale set extension profile.
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile): Describes a virtual machine scale set network profile.
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile): Describes a virtual machine scale set OS profile.
* **storageProfile**: [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile): Describes a virtual machine scale set storage profile.

## VirtualMachineScaleSetExtensionProfile
### Properties
* **extensions**: [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)[]: The virtual machine scale set child extension resources.

## VirtualMachineScaleSetExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: The name of the extension.
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties): Describes the properties of a Virtual Machine Scale Set Extension.

## VirtualMachineScaleSetExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **protectedSettings**: any: Any object
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Any object
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineScaleSetNetworkProfile
### Properties
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]: The list of network configurations.

## VirtualMachineScaleSetNetworkConfiguration
### Properties
* **id**: string: Resource Id
* **name**: string (Required): The network configuration name.
* **properties**: [VirtualMachineScaleSetNetworkConfigurationProperties](#virtualmachinescalesetnetworkconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration.

## VirtualMachineScaleSetNetworkConfigurationProperties
### Properties
* **ipConfigurations**: [VirtualMachineScaleSetIPConfiguration](#virtualmachinescalesetipconfiguration)[] (Required): The virtual machine scale set IP Configuration.
* **primary**: bool: Whether this is a primary NIC on a virtual machine.

## VirtualMachineScaleSetIPConfiguration
### Properties
* **id**: string: Resource Id
* **name**: string (Required): The IP configuration name.
* **properties**: [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration properties.

## VirtualMachineScaleSetIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]: The application gateway backend address pools.
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: The load balancer backend address pools.
* **loadBalancerInboundNatPools**: [SubResource](#subresource)[]: The load balancer inbound nat pools.
* **subnet**: [ApiEntityReference](#apientityreference) (Required): The API entity reference.

## ApiEntityReference
### Properties
* **id**: string: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## VirtualMachineScaleSetOSProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
* **computerNamePrefix**: string: Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long.
* **customData**: string: A base-64 encoded string of custom data.
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: The List of certificates for addition to the VM.
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## VirtualMachineScaleSetStorageProfile
### Properties
* **dataDisks**: [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)[]: The data disks.
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
* **osDisk**: [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk): Describes a virtual machine scale set operating system disk.

## VirtualMachineScaleSetDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): Describes the parameters of a ScaleSet managed disk.
* **name**: string: The disk name.

## VirtualMachineScaleSetManagedDiskParameters
### Properties
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS': Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.

## VirtualMachineScaleSetOSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **image**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): Describes the parameters of a ScaleSet managed disk.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows': The operating system of the osDiskImage.
* **vhdContainers**: string[]: The list of virtual hard disk container uris.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

