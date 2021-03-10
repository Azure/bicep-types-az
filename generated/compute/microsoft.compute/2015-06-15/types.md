# Microsoft.Compute @ 2015-06-15

## Resource Microsoft.Compute/availabilitySets@2015-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachines@2015-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Plan](#plan)
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/virtualMachines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachines/extensions@2015-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachineScaleSets@2015-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineScaleSetProperties](#virtualmachinescalesetproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/virtualMachineScaleSets' (ReadOnly, DeployTimeConstant)

## AvailabilitySetProperties
### Properties
* **platformFaultDomainCount**: int
* **platformUpdateDomainCount**: int
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly)
* **virtualMachines**: [SubResource](#subresource)[]

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Plan
### Properties
* **name**: string
* **product**: string
* **promotionCode**: string
* **publisher**: string

## VirtualMachineProperties
### Properties
* **availabilitySet**: [SubResource](#subresource)
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile)
* **hardwareProfile**: [HardwareProfile](#hardwareprofile)
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly)
* **licenseType**: string
* **networkProfile**: [NetworkProfile](#networkprofile)
* **osProfile**: [OSProfile](#osprofile)
* **provisioningState**: string (ReadOnly)
* **storageProfile**: [StorageProfile](#storageprofile)

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics)

## BootDiagnostics
### Properties
* **enabled**: bool
* **storageUri**: string

## HardwareProfile
### Properties
* **vmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1_v2' | 'Standard_D1' | 'Standard_D11_v2' | 'Standard_D11' | 'Standard_D12_v2' | 'Standard_D12' | 'Standard_D13_v2' | 'Standard_D13' | 'Standard_D14_v2' | 'Standard_D14' | 'Standard_D2_v2' | 'Standard_D2' | 'Standard_D3_v2' | 'Standard_D3' | 'Standard_D4_v2' | 'Standard_D4' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5'

## VirtualMachineInstanceView
### Properties
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview)
* **disks**: [DiskInstanceView](#diskinstanceview)[]
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]
* **platformFaultDomain**: int
* **platformUpdateDomain**: int
* **rdpThumbPrint**: string
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview)

## BootDiagnosticsInstanceView
### Properties
* **consoleScreenshotBlobUri**: string (ReadOnly)
* **serialConsoleLogBlobUri**: string (ReadOnly)

## DiskInstanceView
### Properties
* **name**: string
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]

## VirtualMachineExtensionInstanceView
### Properties
* **name**: string
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]
* **substatuses**: [InstanceViewStatus](#instanceviewstatus)[]
* **type**: string
* **typeHandlerVersion**: string

## VirtualMachineAgentInstanceView
### Properties
* **extensionHandlers**: [VirtualMachineExtensionHandlerInstanceView](#virtualmachineextensionhandlerinstanceview)[]
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]
* **vmAgentVersion**: string

## VirtualMachineExtensionHandlerInstanceView
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus)
* **type**: string
* **typeHandlerVersion**: string

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterfaceReference](#networkinterfacereference)[]

## NetworkInterfaceReference
### Properties
* **id**: string
* **properties**: [NetworkInterfaceReferenceProperties](#networkinterfacereferenceproperties)

## NetworkInterfaceReferenceProperties
### Properties
* **primary**: bool

## OSProfile
### Properties
* **adminPassword**: string
* **adminUsername**: string
* **computerName**: string
* **customData**: string
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration)
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration)

## LinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool
* **ssh**: [SshConfiguration](#sshconfiguration)

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]

## SshPublicKey
### Properties
* **keyData**: string
* **path**: string

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource)
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[]

## VaultCertificate
### Properties
* **certificateStore**: string
* **certificateUrl**: string

## WindowsConfiguration
### Properties
* **additionalUnattendContent**: [AdditionalUnattendContent](#additionalunattendcontent)[]
* **enableAutomaticUpdates**: bool
* **provisionVMAgent**: bool
* **timeZone**: string
* **winRM**: [WinRMConfiguration](#winrmconfiguration)

## AdditionalUnattendContent
### Properties
* **componentName**: 'Microsoft-Windows-Shell-Setup'
* **content**: string
* **passName**: 'OobeSystem'
* **settingName**: 'AutoLogon' | 'FirstLogonCommands'

## WinRMConfiguration
### Properties
* **listeners**: [WinRMListener](#winrmlistener)[]

## WinRMListener
### Properties
* **certificateUrl**: string
* **protocol**: 'Http' | 'Https'

## StorageProfile
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]
* **imageReference**: [ImageReference](#imagereference)
* **osDisk**: [OSDisk](#osdisk)

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **diskSizeGB**: int
* **image**: [VirtualHardDisk](#virtualharddisk)
* **lun**: int (Required)
* **name**: string (Required)
* **vhd**: [VirtualHardDisk](#virtualharddisk) (Required)

## VirtualHardDisk
### Properties
* **uri**: string

## ImageReference
### Properties
* **offer**: string
* **publisher**: string
* **sku**: string
* **version**: string

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **diskSizeGB**: int
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings)
* **image**: [VirtualHardDisk](#virtualharddisk)
* **name**: string (Required)
* **osType**: 'Linux' | 'Windows'
* **vhd**: [VirtualHardDisk](#virtualharddisk) (Required)

## DiskEncryptionSettings
### Properties
* **diskEncryptionKey**: [KeyVaultSecretReference](#keyvaultsecretreference) (Required)
* **enabled**: bool
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference)

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required)
* **sourceVault**: [SubResource](#subresource) (Required)

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: [SubResource](#subresource) (Required)

## VirtualMachineExtension
### Properties
* **id**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (ReadOnly)
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## VirtualMachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **instanceView**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)
* **protectedSettings**: any
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **settings**: any
* **type**: string
* **typeHandlerVersion**: string

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

## VirtualMachineScaleSetProperties
### Properties
* **overProvision**: bool
* **provisioningState**: string
* **upgradePolicy**: [UpgradePolicy](#upgradepolicy)
* **virtualMachineProfile**: [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile)

## UpgradePolicy
### Properties
* **mode**: 'Automatic' | 'Manual'

## VirtualMachineScaleSetVMProfile
### Properties
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile)
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile)
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile)
* **storageProfile**: [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile)

## VirtualMachineScaleSetExtensionProfile
### Properties
* **extensions**: [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)[]

## VirtualMachineScaleSetExtension
### Properties
* **id**: string
* **name**: string
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties)

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
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]

## VirtualMachineScaleSetNetworkConfiguration
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: [VirtualMachineScaleSetNetworkConfigurationProperties](#virtualmachinescalesetnetworkconfigurationproperties)

## VirtualMachineScaleSetNetworkConfigurationProperties
### Properties
* **ipConfigurations**: [VirtualMachineScaleSetIPConfiguration](#virtualmachinescalesetipconfiguration)[] (Required)
* **primary**: bool

## VirtualMachineScaleSetIPConfiguration
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties)

## VirtualMachineScaleSetIPConfigurationProperties
### Properties
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]
* **loadBalancerInboundNatPools**: [SubResource](#subresource)[]
* **subnet**: [ApiEntityReference](#apientityreference) (Required)

## ApiEntityReference
### Properties
* **id**: string

## VirtualMachineScaleSetOSProfile
### Properties
* **adminPassword**: string
* **adminUsername**: string
* **computerNamePrefix**: string
* **customData**: string
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration)
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration)

## VirtualMachineScaleSetStorageProfile
### Properties
* **imageReference**: [ImageReference](#imagereference)
* **osDisk**: [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk)

## VirtualMachineScaleSetOSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **image**: [VirtualHardDisk](#virtualharddisk)
* **name**: string (Required)
* **osType**: 'Linux' | 'Windows'
* **vhdContainers**: string[]

## Sku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

