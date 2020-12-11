# Microsoft.Compute @ 2016-04-30-preview

## Resource Microsoft.Compute/availabilitySets@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AvailabilitySetProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/disks@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiskProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/disks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/images@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImageProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/snapshots@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiskProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachines@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: VirtualMachineIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: VirtualMachineProperties
* **resources**: VirtualMachineExtension[] (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/virtualMachines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachines/extensions@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualMachineExtensionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachineScaleSets@2016-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: VirtualMachineScaleSetIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: VirtualMachineScaleSetProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/virtualMachineScaleSets' (ReadOnly, DeployTimeConstant)

## AvailabilitySetProperties
### Properties
* **managed**: bool
* **platformFaultDomainCount**: int
* **platformUpdateDomainCount**: int
* **statuses**: InstanceViewStatus[] (ReadOnly)
* **virtualMachines**: SubResource[]

## InstanceViewStatus
### Properties
* **code**: string
* **displayStatus**: string
* **level**: 'Error' | 'Info' | 'Warning'
* **message**: string
* **time**: string

## SubResource
### Properties
* **id**: string

## Sku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## DiskProperties
### Properties
* **accountType**: 'Premium_LRS' | 'Standard_LRS'
* **creationData**: CreationData (Required)
* **diskSizeGB**: int
* **encryptionSettings**: EncryptionSettings
* **osType**: 'Linux' | 'Windows'
* **ownerId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' | 'Restore' (Required)
* **imageReference**: ImageDiskReference
* **sourceResourceId**: string
* **sourceUri**: string
* **storageAccountId**: string

## ImageDiskReference
### Properties
* **id**: string (Required)
* **lun**: int

## EncryptionSettings
### Properties
* **diskEncryptionKey**: KeyVaultAndSecretReference
* **enabled**: bool
* **keyEncryptionKey**: KeyVaultAndKeyReference

## KeyVaultAndSecretReference
### Properties
* **secretUrl**: string (Required)
* **sourceVault**: SourceVault (Required)

## SourceVault
### Properties
* **id**: string

## KeyVaultAndKeyReference
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: SourceVault (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ImageProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **sourceVirtualMachine**: SubResource
* **storageProfile**: ImageStorageProfile

## ImageStorageProfile
### Properties
* **dataDisks**: ImageDataDisk[]
* **osDisk**: ImageOSDisk (Required)

## ImageDataDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskSizeGB**: int
* **lun**: int (Required)
* **managedDisk**: SubResource
* **snapshot**: SubResource

## ImageOSDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskSizeGB**: int
* **managedDisk**: SubResource
* **osState**: 'Generalized' | 'Specialized' (Required)
* **osType**: 'Linux' | 'Windows' (Required)
* **snapshot**: SubResource

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## Plan
### Properties
* **name**: string
* **product**: string
* **promotionCode**: string
* **publisher**: string

## VirtualMachineProperties
### Properties
* **availabilitySet**: SubResource
* **diagnosticsProfile**: DiagnosticsProfile
* **hardwareProfile**: HardwareProfile
* **instanceView**: VirtualMachineInstanceView (ReadOnly)
* **licenseType**: string
* **networkProfile**: NetworkProfile
* **osProfile**: OSProfile
* **provisioningState**: string (ReadOnly)
* **storageProfile**: StorageProfile
* **vmId**: string (ReadOnly)

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: BootDiagnostics

## BootDiagnostics
### Properties
* **enabled**: bool
* **storageUri**: string

## HardwareProfile
### Properties
* **vmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1_v2' | 'Standard_D1' | 'Standard_D11_v2' | 'Standard_D11' | 'Standard_D12_v2' | 'Standard_D12' | 'Standard_D13_v2' | 'Standard_D13' | 'Standard_D14_v2' | 'Standard_D14' | 'Standard_D15_v2' | 'Standard_D2_v2' | 'Standard_D2' | 'Standard_D3_v2' | 'Standard_D3' | 'Standard_D4_v2' | 'Standard_D4' | 'Standard_D5_v2' | 'Standard_DS1_v2' | 'Standard_DS1' | 'Standard_DS11_v2' | 'Standard_DS11' | 'Standard_DS12_v2' | 'Standard_DS12' | 'Standard_DS13_v2' | 'Standard_DS13' | 'Standard_DS14_v2' | 'Standard_DS14' | 'Standard_DS15_v2' | 'Standard_DS2_v2' | 'Standard_DS2' | 'Standard_DS3_v2' | 'Standard_DS3' | 'Standard_DS4_v2' | 'Standard_DS4' | 'Standard_DS5_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5'

## VirtualMachineInstanceView
### Properties
* **bootDiagnostics**: BootDiagnosticsInstanceView
* **disks**: DiskInstanceView[]
* **extensions**: VirtualMachineExtensionInstanceView[]
* **platformFaultDomain**: int
* **platformUpdateDomain**: int
* **rdpThumbPrint**: string
* **statuses**: InstanceViewStatus[]
* **vmAgent**: VirtualMachineAgentInstanceView

## BootDiagnosticsInstanceView
### Properties
* **consoleScreenshotBlobUri**: string (ReadOnly)
* **serialConsoleLogBlobUri**: string (ReadOnly)

## DiskInstanceView
### Properties
* **name**: string
* **statuses**: InstanceViewStatus[]

## VirtualMachineExtensionInstanceView
### Properties
* **name**: string
* **statuses**: InstanceViewStatus[]
* **substatuses**: InstanceViewStatus[]
* **type**: string
* **typeHandlerVersion**: string

## VirtualMachineAgentInstanceView
### Properties
* **extensionHandlers**: VirtualMachineExtensionHandlerInstanceView[]
* **statuses**: InstanceViewStatus[]
* **vmAgentVersion**: string

## VirtualMachineExtensionHandlerInstanceView
### Properties
* **status**: InstanceViewStatus
* **type**: string
* **typeHandlerVersion**: string

## NetworkProfile
### Properties
* **networkInterfaces**: NetworkInterfaceReference[]

## NetworkInterfaceReference
### Properties
* **id**: string
* **properties**: NetworkInterfaceReferenceProperties

## NetworkInterfaceReferenceProperties
### Properties
* **primary**: bool

## OSProfile
### Properties
* **adminPassword**: string
* **adminUsername**: string
* **computerName**: string
* **customData**: string
* **linuxConfiguration**: LinuxConfiguration
* **secrets**: VaultSecretGroup[]
* **windowsConfiguration**: WindowsConfiguration

## LinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool
* **ssh**: SshConfiguration

## SshConfiguration
### Properties
* **publicKeys**: SshPublicKey[]

## SshPublicKey
### Properties
* **keyData**: string
* **path**: string

## VaultSecretGroup
### Properties
* **sourceVault**: SubResource
* **vaultCertificates**: VaultCertificate[]

## VaultCertificate
### Properties
* **certificateStore**: string
* **certificateUrl**: string

## WindowsConfiguration
### Properties
* **additionalUnattendContent**: AdditionalUnattendContent[]
* **enableAutomaticUpdates**: bool
* **provisionVMAgent**: bool
* **timeZone**: string
* **winRM**: WinRMConfiguration

## AdditionalUnattendContent
### Properties
* **componentName**: 'Microsoft-Windows-Shell-Setup'
* **content**: string
* **passName**: 'OobeSystem'
* **settingName**: 'AutoLogon' | 'FirstLogonCommands'

## WinRMConfiguration
### Properties
* **listeners**: WinRMListener[]

## WinRMListener
### Properties
* **certificateUrl**: string
* **protocol**: 'Http' | 'Https'

## StorageProfile
### Properties
* **dataDisks**: DataDisk[]
* **imageReference**: ImageReference
* **osDisk**: OSDisk

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **diskSizeGB**: int
* **image**: VirtualHardDisk
* **lun**: int (Required)
* **managedDisk**: ManagedDiskParameters
* **name**: string
* **vhd**: VirtualHardDisk

## VirtualHardDisk
### Properties
* **uri**: string

## ManagedDiskParameters
### Properties
* **id**: string
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS'

## ImageReference
### Properties
* **id**: string
* **offer**: string
* **publisher**: string
* **sku**: string
* **version**: string

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **diskSizeGB**: int
* **encryptionSettings**: DiskEncryptionSettings
* **image**: VirtualHardDisk
* **managedDisk**: ManagedDiskParameters
* **name**: string
* **osType**: 'Linux' | 'Windows'
* **vhd**: VirtualHardDisk

## DiskEncryptionSettings
### Properties
* **diskEncryptionKey**: KeyVaultSecretReference
* **enabled**: bool
* **keyEncryptionKey**: KeyVaultKeyReference

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required)
* **sourceVault**: SubResource (Required)

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: SubResource (Required)

## VirtualMachineExtension
### Properties
* **id**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (ReadOnly)
* **properties**: VirtualMachineExtensionProperties
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## VirtualMachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **instanceView**: VirtualMachineExtensionInstanceView
* **protectedSettings**: any
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **settings**: any
* **type**: string
* **typeHandlerVersion**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineScaleSetIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## VirtualMachineScaleSetProperties
### Properties
* **overProvision**: bool
* **provisioningState**: string (ReadOnly)
* **singlePlacementGroup**: bool
* **upgradePolicy**: UpgradePolicy
* **virtualMachineProfile**: VirtualMachineScaleSetVMProfile

## UpgradePolicy
### Properties
* **mode**: 'Automatic' | 'Manual'

## VirtualMachineScaleSetVMProfile
### Properties
* **extensionProfile**: VirtualMachineScaleSetExtensionProfile
* **networkProfile**: VirtualMachineScaleSetNetworkProfile
* **osProfile**: VirtualMachineScaleSetOSProfile
* **storageProfile**: VirtualMachineScaleSetStorageProfile

## VirtualMachineScaleSetExtensionProfile
### Properties
* **extensions**: VirtualMachineScaleSetExtension[]

## VirtualMachineScaleSetExtension
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: VirtualMachineScaleSetExtensionProperties

## VirtualMachineScaleSetExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **protectedSettings**: any
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **settings**: any
* **type**: string
* **typeHandlerVersion**: string

## VirtualMachineScaleSetNetworkProfile
### Properties
* **networkInterfaceConfigurations**: VirtualMachineScaleSetNetworkConfiguration[]

## VirtualMachineScaleSetNetworkConfiguration
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: VirtualMachineScaleSetNetworkConfigurationProperties

## VirtualMachineScaleSetNetworkConfigurationProperties
### Properties
* **ipConfigurations**: VirtualMachineScaleSetIPConfiguration[] (Required)
* **primary**: bool

## VirtualMachineScaleSetIPConfiguration
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: VirtualMachineScaleSetIPConfigurationProperties

## VirtualMachineScaleSetIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: SubResource[]
* **loadBalancerBackendAddressPools**: SubResource[]
* **loadBalancerInboundNatPools**: SubResource[]
* **subnet**: ApiEntityReference (Required)

## ApiEntityReference
### Properties
* **id**: string

## VirtualMachineScaleSetOSProfile
### Properties
* **adminPassword**: string
* **adminUsername**: string
* **computerNamePrefix**: string
* **customData**: string
* **linuxConfiguration**: LinuxConfiguration
* **secrets**: VaultSecretGroup[]
* **windowsConfiguration**: WindowsConfiguration

## VirtualMachineScaleSetStorageProfile
### Properties
* **dataDisks**: VirtualMachineScaleSetDataDisk[]
* **imageReference**: ImageReference
* **osDisk**: VirtualMachineScaleSetOSDisk

## VirtualMachineScaleSetDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **diskSizeGB**: int
* **lun**: int (Required)
* **managedDisk**: VirtualMachineScaleSetManagedDiskParameters
* **name**: string

## VirtualMachineScaleSetManagedDiskParameters
### Properties
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS'

## VirtualMachineScaleSetOSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **image**: VirtualHardDisk
* **managedDisk**: VirtualMachineScaleSetManagedDiskParameters
* **name**: string
* **osType**: 'Linux' | 'Windows'
* **vhdContainers**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

