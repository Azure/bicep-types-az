# Microsoft.Compute @ 2017-03-30

## Resource Microsoft.Compute/availabilitySets@2017-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/disks@2017-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiskProperties](#diskproperties)
* **sku**: [DiskSku](#disksku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/disks' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Compute/images@2017-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImageProperties](#imageproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/snapshots@2017-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiskProperties](#diskproperties)
* **sku**: [DiskSku](#disksku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachines@2017-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [VirtualMachineIdentity](#virtualmachineidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Plan](#plan)
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/virtualMachines' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Compute/virtualMachines/extensions@2017-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachineScaleSets@2017-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [VirtualMachineScaleSetIdentity](#virtualmachinescalesetidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Plan](#plan)
* **properties**: [VirtualMachineScaleSetProperties](#virtualmachinescalesetproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/virtualMachineScaleSets' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Compute/virtualMachineScaleSets/extensions@2017-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties)
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/extensions' (ReadOnly, DeployTimeConstant)

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

## Sku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DiskProperties
### Properties
* **creationData**: [CreationData](#creationdata) (Required)
* **diskSizeGB**: int
* **encryptionSettings**: [EncryptionSettings](#encryptionsettings)
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' (Required)
* **imageReference**: [ImageDiskReference](#imagediskreference)
* **sourceResourceId**: string
* **sourceUri**: string
* **storageAccountId**: string

## ImageDiskReference
### Properties
* **id**: string (Required)
* **lun**: int

## EncryptionSettings
### Properties
* **diskEncryptionKey**: [KeyVaultAndSecretReference](#keyvaultandsecretreference)
* **enabled**: bool
* **keyEncryptionKey**: [KeyVaultAndKeyReference](#keyvaultandkeyreference)

## KeyVaultAndSecretReference
### Properties
* **secretUrl**: string (Required)
* **sourceVault**: [SourceVault](#sourcevault) (Required)

## SourceVault
### Properties
* **id**: string

## KeyVaultAndKeyReference
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: [SourceVault](#sourcevault) (Required)

## DiskSku
### Properties
* **name**: 'Premium_LRS' | 'Standard_LRS'
* **tier**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **sourceVirtualMachine**: [SubResource](#subresource)
* **storageProfile**: [ImageStorageProfile](#imagestorageprofile)

## ImageStorageProfile
### Properties
* **dataDisks**: [ImageDataDisk](#imagedatadisk)[]
* **osDisk**: [ImageOSDisk](#imageosdisk) (Required)

## ImageDataDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskSizeGB**: int
* **lun**: int (Required)
* **managedDisk**: [SubResource](#subresource)
* **snapshot**: [SubResource](#subresource)
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS'

## ImageOSDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskSizeGB**: int
* **managedDisk**: [SubResource](#subresource)
* **osState**: 'Generalized' | 'Specialized' (Required)
* **osType**: 'Linux' | 'Windows' (Required)
* **snapshot**: [SubResource](#subresource)
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
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
* **availabilitySet**: [SubResource](#subresource)
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile)
* **hardwareProfile**: [HardwareProfile](#hardwareprofile)
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly)
* **licenseType**: string
* **networkProfile**: [NetworkProfile](#networkprofile)
* **osProfile**: [OSProfile](#osprofile)
* **provisioningState**: string (ReadOnly)
* **storageProfile**: [StorageProfile](#storageprofile)
* **vmId**: string (ReadOnly)

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics)

## BootDiagnostics
### Properties
* **enabled**: bool
* **storageUri**: string

## HardwareProfile
### Properties
* **vmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1_v2' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2_v2' | 'Standard_A2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4_v2' | 'Standard_A4' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8_v2' | 'Standard_A8' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_D1_v2' | 'Standard_D1' | 'Standard_D11_v2' | 'Standard_D11' | 'Standard_D12_v2' | 'Standard_D12' | 'Standard_D13_v2' | 'Standard_D13' | 'Standard_D14_v2' | 'Standard_D14' | 'Standard_D15_v2' | 'Standard_D2_v2' | 'Standard_D2' | 'Standard_D3_v2' | 'Standard_D3' | 'Standard_D4_v2' | 'Standard_D4' | 'Standard_D5_v2' | 'Standard_DS1_v2' | 'Standard_DS1' | 'Standard_DS11_v2' | 'Standard_DS11' | 'Standard_DS12_v2' | 'Standard_DS12' | 'Standard_DS13_v2' | 'Standard_DS13' | 'Standard_DS14_v2' | 'Standard_DS14' | 'Standard_DS15_v2' | 'Standard_DS2_v2' | 'Standard_DS2' | 'Standard_DS3_v2' | 'Standard_DS3' | 'Standard_DS4_v2' | 'Standard_DS4' | 'Standard_DS5_v2' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F8' | 'Standard_F8s' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_NC12' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC6' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6'

## VirtualMachineInstanceView
### Properties
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview)
* **disks**: [DiskInstanceView](#diskinstanceview)[]
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus)
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
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings)[]
* **name**: string
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]

## DiskEncryptionSettings
### Properties
* **diskEncryptionKey**: [KeyVaultSecretReference](#keyvaultsecretreference)
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

## VirtualMachineExtensionInstanceView
### Properties
* **name**: string
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]
* **substatuses**: [InstanceViewStatus](#instanceviewstatus)[]
* **type**: string
* **typeHandlerVersion**: string

## MaintenanceRedeployStatus
### Properties
* **isCustomerInitiatedMaintenanceAllowed**: bool
* **lastOperationMessage**: string
* **lastOperationResultCode**: 'MaintenanceAborted' | 'MaintenanceCompleted' | 'None' | 'RetryLater'
* **maintenanceWindowEndTime**: string
* **maintenanceWindowStartTime**: string
* **preMaintenanceWindowEndTime**: string
* **preMaintenanceWindowStartTime**: string

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
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters)
* **name**: string
* **vhd**: [VirtualHardDisk](#virtualharddisk)

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
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings)
* **image**: [VirtualHardDisk](#virtualharddisk)
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters)
* **name**: string
* **osType**: 'Linux' | 'Windows'
* **vhd**: [VirtualHardDisk](#virtualharddisk)

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

## VirtualMachineScaleSetIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## VirtualMachineScaleSetProperties
### Properties
* **overprovision**: bool
* **provisioningState**: string (ReadOnly)
* **singlePlacementGroup**: bool
* **uniqueId**: string (ReadOnly)
* **upgradePolicy**: [UpgradePolicy](#upgradepolicy)
* **virtualMachineProfile**: [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile)

## UpgradePolicy
### Properties
* **automaticOSUpgrade**: bool
* **mode**: 'Automatic' | 'Manual' | 'Rolling'
* **rollingUpgradePolicy**: [RollingUpgradePolicy](#rollingupgradepolicy)

## RollingUpgradePolicy
### Properties
* **maxBatchInstancePercent**: int
* **maxUnhealthyInstancePercent**: int
* **maxUnhealthyUpgradedInstancePercent**: int
* **pauseTimeBetweenBatches**: string

## VirtualMachineScaleSetVMProfile
### Properties
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile)
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile)
* **licenseType**: string
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile)
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile)
* **storageProfile**: [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile)

## VirtualMachineScaleSetExtensionProfile
### Properties
* **extensions**: [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)[]

## VirtualMachineScaleSetExtension
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties)

## VirtualMachineScaleSetExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **protectedSettings**: any
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **settings**: any
* **type**: string
* **typeHandlerVersion**: string

## VirtualMachineScaleSetNetworkProfile
### Properties
* **healthProbe**: [ApiEntityReference](#apientityreference)
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]

## ApiEntityReference
### Properties
* **id**: string

## VirtualMachineScaleSetNetworkConfiguration
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: [VirtualMachineScaleSetNetworkConfigurationProperties](#virtualmachinescalesetnetworkconfigurationproperties)

## VirtualMachineScaleSetNetworkConfigurationProperties
### Properties
* **dnsSettings**: [VirtualMachineScaleSetNetworkConfigurationDnsSettings](#virtualmachinescalesetnetworkconfigurationdnssettings)
* **enableAcceleratedNetworking**: bool
* **ipConfigurations**: [VirtualMachineScaleSetIPConfiguration](#virtualmachinescalesetipconfiguration)[] (Required)
* **networkSecurityGroup**: [SubResource](#subresource)
* **primary**: bool

## VirtualMachineScaleSetNetworkConfigurationDnsSettings
### Properties
* **dnsServers**: string[]

## VirtualMachineScaleSetIPConfiguration
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties)

## VirtualMachineScaleSetIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]
* **loadBalancerInboundNatPools**: [SubResource](#subresource)[]
* **primary**: bool
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPAddressConfiguration**: [VirtualMachineScaleSetPublicIPAddressConfiguration](#virtualmachinescalesetpublicipaddressconfiguration)
* **subnet**: [ApiEntityReference](#apientityreference)

## VirtualMachineScaleSetPublicIPAddressConfiguration
### Properties
* **name**: string (Required)
* **properties**: [VirtualMachineScaleSetPublicIPAddressConfigurationProperties](#virtualmachinescalesetpublicipaddressconfigurationproperties)

## VirtualMachineScaleSetPublicIPAddressConfigurationProperties
### Properties
* **dnsSettings**: [VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings](#virtualmachinescalesetpublicipaddressconfigurationdnssettings)
* **idleTimeoutInMinutes**: int

## VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings
### Properties
* **domainNameLabel**: string (Required)

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
* **dataDisks**: [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)[]
* **imageReference**: [ImageReference](#imagereference)
* **osDisk**: [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk)

## VirtualMachineScaleSetDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **diskSizeGB**: int
* **lun**: int (Required)
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters)
* **name**: string

## VirtualMachineScaleSetManagedDiskParameters
### Properties
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS'

## VirtualMachineScaleSetOSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **image**: [VirtualHardDisk](#virtualharddisk)
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters)
* **name**: string
* **osType**: 'Linux' | 'Windows'
* **vhdContainers**: string[]

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

