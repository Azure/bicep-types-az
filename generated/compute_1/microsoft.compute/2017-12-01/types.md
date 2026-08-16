# Microsoft.Compute @ 2017-12-01

## Resource Microsoft.Compute/availabilitySets@2017-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties): The instance view of a resource.
* **sku**: [Sku](#sku): Sku of the availability set
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/images@2017-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties): Describes the properties of an Image.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions@2017-12-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The supported Azure location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineImageProperties](#virtualmachineimageproperties) (ReadOnly): Describes the properties of a Virtual Machine Image.
* **tags**: [VirtualMachineImageResourceTags](#virtualmachineimageresourcetags) (ReadOnly): Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md).
* **type**: 'Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/locations/publishers/artifacttypes/types/versions@2017-12-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionImageProperties](#virtualmachineextensionimageproperties) (ReadOnly): Describes the properties of a Virtual Machine Extension Image.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Compute/locations/publishers/artifacttypes/types/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachines@2017-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
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

## Resource Microsoft.Compute/virtualMachines/extensions@2017-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets@2017-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
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

## Resource Microsoft.Compute/virtualMachineScaleSets/extensions@2017-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties): Describes the properties of a Virtual Machine Scale Set Extension.
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades@2017-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: 'latest' (Required, DeployTimeConstant): The resource name
* **properties**: [RollingUpgradeStatusInfoProperties](#rollingupgradestatusinfoproperties) (ReadOnly): The status of the latest virtual machine scale set rolling upgrade.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2017-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
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

## Function capture (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineCaptureParameters](#virtualmachinecaptureparameters)
* **Output**: [VirtualMachineCaptureResult](#virtualmachinecaptureresult)

## Function convertToManagedDisks (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function deallocate (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function deallocate (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function deallocate (Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets/virtualmachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function delete (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceRequiredIDs](#virtualmachinescalesetvminstancerequiredids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function generalize (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function getRequestRateByInterval (Microsoft.Compute/locations/logAnalytics@2017-12-01)
* **Resource**: Microsoft.Compute/locations/logAnalytics
* **ApiVersion**: 2017-12-01
* **Input**: [RequestRateByIntervalInput](#requestratebyintervalinput)
* **Output**: [LogAnalyticsOperationResult](#loganalyticsoperationresult)

## Function getThrottledRequests (Microsoft.Compute/locations/logAnalytics@2017-12-01)
* **Resource**: Microsoft.Compute/locations/logAnalytics
* **ApiVersion**: 2017-12-01
* **Input**: [ThrottledRequestsInput](#throttledrequestsinput)
* **Output**: [LogAnalyticsOperationResult](#loganalyticsoperationresult)

## Function manualupgrade (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceRequiredIDs](#virtualmachinescalesetvminstancerequiredids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function osRollingUpgrade (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function performMaintenance (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function performMaintenance (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function performMaintenance (Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets/virtualmachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function powerOff (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function poweroff (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function poweroff (Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets/virtualmachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function redeploy (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function redeploy (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function redeploy (Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets/virtualmachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function reimage (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function reimage (Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets/virtualmachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function reimageall (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function reimageall (Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets/virtualmachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function restart (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function restart (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function restart (Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets/virtualmachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function runCommand (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Input**: [RunCommandInput](#runcommandinput)
* **Output**: [RunCommandResult](#runcommandresult)

## Function start (Microsoft.Compute/virtualMachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function start (Microsoft.Compute/virtualMachineScaleSets@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets
* **ApiVersion**: 2017-12-01
* **Input**: [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function start (Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2017-12-01)
* **Resource**: Microsoft.Compute/virtualMachineScaleSets/virtualmachines
* **ApiVersion**: 2017-12-01
* **Output**: [OperationStatusResponse](#operationstatusresponse)

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

## AutoOSUpgradePolicy
### Properties
* **disableAutoRollback**: bool: Whether OS image rollback feature should be disabled. Default value is false.

## AvailabilitySetProperties
### Properties
* **platformFaultDomainCount**: int: Fault Domain count.
* **platformUpdateDomainCount**: int: Update Domain count.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly): The resource status information.
* **virtualMachines**: [SubResource](#subresource)[]: A list of references to all virtual machines in the availability set.

## BootDiagnostics
### Properties
* **enabled**: bool: Whether boot diagnostics should be enabled on the Virtual Machine.
* **storageUri**: string: Uri of the storage account to use for placing the console output and screenshot.

## BootDiagnosticsInstanceView
### Properties
* **consoleScreenshotBlobUri**: string (ReadOnly): The console screenshot blob URI.
* **serialConsoleLogBlobUri**: string (ReadOnly): The Linux serial console log blob Uri.

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' | string (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **image**: [VirtualHardDisk](#virtualharddisk): The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **vhd**: [VirtualHardDisk](#virtualharddisk): The virtual hard disk.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## DataDiskImage
### Properties
* **lun**: int (ReadOnly): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.

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
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | string: Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.

## ImageOSDisk
### Properties
* **blobUri**: string: The Virtual Hard Disk.
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **diskSizeGB**: int: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **managedDisk**: [SubResource](#subresource): The managedDisk.
* **osState**: 'Generalized' | 'Specialized' (Required): The OS State.
* **osType**: 'Linux' | 'Windows' (Required): This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
* **snapshot**: [SubResource](#subresource): The snapshot.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | string: Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.

## ImageProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state.
* **sourceVirtualMachine**: [SubResource](#subresource): The source virtual machine from which Image is created.
* **storageProfile**: [ImageStorageProfile](#imagestorageprofile): Specifies the storage settings for the virtual machine disks.

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
* **ssh**: [SshConfiguration](#sshconfiguration): Specifies the ssh key configuration for a Linux OS.

## LogAnalyticsOperationResult
### Properties
* **endTime**: string (ReadOnly): End time of the operation
* **error**: [ApiError](#apierror) (ReadOnly): Api error
* **name**: string (ReadOnly): Operation ID
* **properties**: [LogAnalyticsOutput](#loganalyticsoutput) (ReadOnly): LogAnalyticsOutput
* **startTime**: string (ReadOnly): Start time of the operation
* **status**: string (ReadOnly): Operation status

## LogAnalyticsOutput
### Properties
* **output**: string (ReadOnly): Output file Uri path to blob container.

## MaintenanceRedeployStatus
### Properties
* **isCustomerInitiatedMaintenanceAllowed**: bool: True, if customer is allowed to perform Maintenance.
* **lastOperationMessage**: string: Message returned for the last Maintenance Operation.
* **lastOperationResultCode**: 'MaintenanceAborted' | 'MaintenanceCompleted' | 'None' | 'RetryLater': The Last Maintenance Operation Result Code.
* **maintenanceWindowEndTime**: string: End Time for the Maintenance Window.
* **maintenanceWindowStartTime**: string: Start Time for the Maintenance Window.
* **preMaintenanceWindowEndTime**: string: End Time for the Pre Maintenance Window.
* **preMaintenanceWindowStartTime**: string: Start Time for the Pre Maintenance Window.

## ManagedDiskParameters
### Properties
* **id**: string: Resource Id
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | string: Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.

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

## OperationStatusResponse
### Properties
* **endTime**: string (ReadOnly): End time of the operation
* **error**: [ApiError](#apierror) (ReadOnly): Api error
* **name**: string (ReadOnly): Operation ID
* **startTime**: string (ReadOnly): Start time of the operation
* **status**: string (ReadOnly): Operation status

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' | string (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
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
* **computerName**: string: Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions).
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machine.
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## Plan
### Properties
* **name**: string: The plan ID.
* **product**: string: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **promotionCode**: string: The promotion code.
* **publisher**: string: The publisher ID.

## PurchasePlan
### Properties
* **name**: string (Required): The plan ID.
* **product**: string (Required): Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **publisher**: string (Required): The publisher ID.

## RequestRateByIntervalInput
### Properties
* **blobContainerSasUri**: string (Required): SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
* **fromTime**: string (Required): From time of the query
* **groupByOperationName**: bool: Group query result by Operation Name.
* **groupByResourceName**: bool: Group query result by Resource Name.
* **groupByThrottlePolicy**: bool: Group query result by Throttle Policy applied.
* **intervalLength**: 'FiveMins' | 'SixtyMins' | 'ThirtyMins' | 'ThreeMins' (Required): Interval value in minutes used to create LogAnalytics call rate logs.
* **toTime**: string (Required): To time of the query

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

## RunCommandInput
### Properties
* **commandId**: string (Required): The run command id.
* **parameters**: [RunCommandInputParameter](#runcommandinputparameter)[]: The run command parameters.
* **script**: string[]: Optional. The script to be executed.  When this value is given, the given script will override the default script of the command.

## RunCommandInputParameter
### Properties
* **name**: string (Required): The run command parameter name.
* **value**: string (Required): The run command parameter value.

## RunCommandResult
### Properties
* **endTime**: string (ReadOnly): End time of the operation
* **error**: [ApiError](#apierror) (ReadOnly): Api error
* **name**: string (ReadOnly): Operation ID
* **properties**: [RunCommandResultProperties](#runcommandresultproperties): Compute-specific operation properties, including output
* **startTime**: string (ReadOnly): Start time of the operation
* **status**: string (ReadOnly): Operation status

## RunCommandResultProperties
### Properties
* **output**: any: Operation output data (raw JSON)

## Sku
### Properties
* **capacity**: int: Specifies the number of virtual machines in the scale set.
* **name**: string: The sku name.
* **tier**: string: Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**

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

## ThrottledRequestsInput
### Properties
* **blobContainerSasUri**: string (Required): SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
* **fromTime**: string (Required): From time of the query
* **groupByOperationName**: bool: Group query result by Operation Name.
* **groupByResourceName**: bool: Group query result by Resource Name.
* **groupByThrottlePolicy**: bool: Group query result by Throttle Policy applied.
* **toTime**: string (Required): To time of the query

## UpgradePolicy
### Properties
* **automaticOSUpgrade**: bool: Whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the image becomes available.
* **autoOSUpgradePolicy**: [AutoOSUpgradePolicy](#autoosupgradepolicy): Configuration parameters used for performing automatic OS Upgrade.
* **mode**: 'Automatic' | 'Manual' | 'Rolling': Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
* **rollingUpgradePolicy**: [RollingUpgradePolicy](#rollingupgradepolicy): The configuration parameters used while performing a rolling upgrade.

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

## VirtualMachineCaptureParameters
### Properties
* **destinationContainerName**: string (Required): The destination container name.
* **overwriteVhds**: bool (Required): Specifies whether to overwrite the destination virtual hard disk, in case of conflict.
* **vhdPrefix**: string (Required): The captured virtual hard disk's name prefix.

## VirtualMachineCaptureResult
### Properties
* **id**: string: Resource Id
* **properties**: [VirtualMachineCaptureResultProperties](#virtualmachinecaptureresultproperties): Compute-specific operation properties, including output

## VirtualMachineCaptureResultProperties
### Properties
* **output**: any: Operation output data (raw JSON)

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
* **identityIds**: string[]: The list of user identities associated with the Virtual Machine. The user identity references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/identities/{identityName}'.
* **principalId**: string (ReadOnly): The principal id of virtual machine identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.

## VirtualMachineImageProperties
### Properties
* **dataDiskImages**: [DataDiskImage](#datadiskimage)[]
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
* **availabilitySet**: [SubResource](#subresource): Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly): The virtual machine instance view.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the virtual machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the virtual machine.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
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
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineScaleSetIdentity
### Properties
* **identityIds**: string[]: The list of user identities associated with the virtual machine scale set. The user identity references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/identities/{identityName}'.
* **principalId**: string (ReadOnly): The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set.

## VirtualMachineScaleSetIPConfiguration
### Properties
* **id**: string: Resource Id
* **name**: string (Required): The IP configuration name.
* **properties**: [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration properties.

## VirtualMachineScaleSetIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
* **loadBalancerInboundNatPools**: [SubResource](#subresource)[]: Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAddressConfiguration**: [VirtualMachineScaleSetPublicIPAddressConfiguration](#virtualmachinescalesetpublicipaddressconfiguration): The publicIPAddressConfiguration.
* **subnet**: [ApiEntityReference](#apientityreference): Specifies the identifier of the subnet.

## VirtualMachineScaleSetManagedDiskParameters
### Properties
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | string: Specifies the storage account type for the managed disk. Managed OS disk storage account type can only be set when you create the scale set. Possible values are: Standard_LRS or Premium_LRS.

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
* **overprovision**: bool: Specifies whether the Virtual Machine Scale Set should be overprovisioned.
* **platformFaultDomainCount**: int: Fault Domain count for each placement group.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
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

## VirtualMachineScaleSetStorageProfile
### Properties
* **dataDisks**: [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)[]: Specifies the parameters that are used to add data disks to the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
* **osDisk**: [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk): Specifies information about the operating system disk used by the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).

## VirtualMachineScaleSetVMInstanceIDs
### Properties
* **instanceIds**: string[]: The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set.

## VirtualMachineScaleSetVMInstanceRequiredIDs
### Properties
* **instanceIds**: string[] (Required): The virtual machine scale set instance ids.

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

## VirtualMachineScaleSetVMProfile
### Properties
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **evictionPolicy**: 'Deallocate' | 'Delete' | string: Specifies the eviction policy for virtual machines in a low priority scale set. <br><br>Minimum api-version: 2017-10-30-preview
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile): Specifies a collection of settings for extensions installed on virtual machines in the scale set.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile): Specifies properties of the network interfaces of the virtual machines in the scale set.
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile): Specifies the operating system settings for the virtual machines in the scale set.
* **priority**: 'Low' | 'Regular' | string: Specifies the priority for the virtual machines in the scale set. <br><br>Minimum api-version: 2017-10-30-preview
* **storageProfile**: [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile): Specifies the storage settings for the virtual machine disks.

## VirtualMachineScaleSetVMProperties
### Properties
* **availabilitySet**: [SubResource](#subresource): Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **instanceView**: [VirtualMachineScaleSetVMInstanceView](#virtualmachinescalesetvminstanceview) (ReadOnly): The virtual machine instance view.
* **latestModelApplied**: bool (ReadOnly): Specifies whether the latest model has been applied to the virtual machine.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the virtual machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the virtual machine.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **vmId**: string (ReadOnly): Azure VM unique ID.

## WindowsConfiguration
### Properties
* **additionalUnattendContent**: [AdditionalUnattendContent](#additionalunattendcontent)[]: Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
* **enableAutomaticUpdates**: bool: Indicates whether virtual machine is enabled for automatic updates.
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

