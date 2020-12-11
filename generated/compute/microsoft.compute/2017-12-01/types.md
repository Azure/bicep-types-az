# Microsoft.Compute @ 2017-12-01

## Microsoft.Compute/availabilitySets
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AvailabilitySetProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant)

## AvailabilitySetProperties
### Properties
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

## Microsoft.Compute/images
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImageProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant)

## ImageProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **sourceVirtualMachine**: SubResource
* **storageProfile**: ImageStorageProfile

## ImageStorageProfile
### Properties
* **dataDisks**: ImageDataDisk[]
* **osDisk**: ImageOSDisk
* **zoneResilient**: bool

## ImageDataDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskSizeGB**: int
* **lun**: int (Required)
* **managedDisk**: SubResource
* **snapshot**: SubResource
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS'

## ImageOSDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskSizeGB**: int
* **managedDisk**: SubResource
* **osState**: 'Generalized' | 'Specialized' (Required)
* **osType**: 'Linux' | 'Windows' (Required)
* **snapshot**: SubResource
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Compute/virtualMachines
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: VirtualMachineIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: VirtualMachineProperties
* **resources**: VirtualMachineExtension[] (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/virtualMachines' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## VirtualMachineIdentity
### Properties
* **identityIds**: string[]
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'

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
* **vmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1_v2' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2_v2' | 'Standard_A2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4_v2' | 'Standard_A4' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8_v2' | 'Standard_A8' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B1ms' | 'Standard_B1s' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1_v2' | 'Standard_D1' | 'Standard_D11_v2' | 'Standard_D11' | 'Standard_D12_v2' | 'Standard_D12' | 'Standard_D13_v2' | 'Standard_D13' | 'Standard_D14_v2' | 'Standard_D14' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2' | 'Standard_D2s_v3' | 'Standard_D3_v2' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1_v2' | 'Standard_DS1' | 'Standard_DS11_v2' | 'Standard_DS11' | 'Standard_DS12_v2' | 'Standard_DS12' | 'Standard_DS13_v2' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13' | 'Standard_DS14_v2' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14' | 'Standard_DS15_v2' | 'Standard_DS2_v2' | 'Standard_DS2' | 'Standard_DS3_v2' | 'Standard_DS3' | 'Standard_DS4_v2' | 'Standard_DS4' | 'Standard_DS5_v2' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32_v3' | 'Standard_E32-16_v3' | 'Standard_E32-8s_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s_v2' | 'Standard_F16s' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s_v2' | 'Standard_F2s' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s_v2' | 'Standard_F4s' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s_v2' | 'Standard_F8s' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS4' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_GS5' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6'

## VirtualMachineInstanceView
### Properties
* **bootDiagnostics**: BootDiagnosticsInstanceView
* **computerName**: string
* **disks**: DiskInstanceView[]
* **extensions**: VirtualMachineExtensionInstanceView[]
* **maintenanceRedeployStatus**: MaintenanceRedeployStatus
* **osName**: string
* **osVersion**: string
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
* **encryptionSettings**: DiskEncryptionSettings[]
* **name**: string
* **statuses**: InstanceViewStatus[]

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

## VirtualMachineExtensionInstanceView
### Properties
* **name**: string
* **statuses**: InstanceViewStatus[]
* **substatuses**: InstanceViewStatus[]
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
* **writeAcceleratorEnabled**: bool

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
* **writeAcceleratorEnabled**: bool

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

## Microsoft.Compute/virtualMachines/extensions
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualMachineExtensionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Compute/virtualMachineScaleSets
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: VirtualMachineScaleSetIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: VirtualMachineScaleSetProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/virtualMachineScaleSets' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## VirtualMachineScaleSetIdentity
### Properties
* **identityIds**: string[]
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'

## VirtualMachineScaleSetProperties
### Properties
* **overprovision**: bool
* **platformFaultDomainCount**: int
* **provisioningState**: string (ReadOnly)
* **singlePlacementGroup**: bool
* **uniqueId**: string (ReadOnly)
* **upgradePolicy**: UpgradePolicy
* **virtualMachineProfile**: VirtualMachineScaleSetVMProfile
* **zoneBalance**: bool

## UpgradePolicy
### Properties
* **automaticOSUpgrade**: bool
* **autoOSUpgradePolicy**: AutoOSUpgradePolicy
* **mode**: 'Automatic' | 'Manual' | 'Rolling'
* **rollingUpgradePolicy**: RollingUpgradePolicy

## AutoOSUpgradePolicy
### Properties
* **disableAutoRollback**: bool

## RollingUpgradePolicy
### Properties
* **maxBatchInstancePercent**: int
* **maxUnhealthyInstancePercent**: int
* **maxUnhealthyUpgradedInstancePercent**: int
* **pauseTimeBetweenBatches**: string

## VirtualMachineScaleSetVMProfile
### Properties
* **diagnosticsProfile**: DiagnosticsProfile
* **evictionPolicy**: 'Deallocate' | 'Delete'
* **extensionProfile**: VirtualMachineScaleSetExtensionProfile
* **licenseType**: string
* **networkProfile**: VirtualMachineScaleSetNetworkProfile
* **osProfile**: VirtualMachineScaleSetOSProfile
* **priority**: 'Low' | 'Regular'
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
* **forceUpdateTag**: string
* **protectedSettings**: any
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **settings**: any
* **type**: string
* **typeHandlerVersion**: string

## VirtualMachineScaleSetNetworkProfile
### Properties
* **healthProbe**: ApiEntityReference
* **networkInterfaceConfigurations**: VirtualMachineScaleSetNetworkConfiguration[]

## ApiEntityReference
### Properties
* **id**: string

## VirtualMachineScaleSetNetworkConfiguration
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: VirtualMachineScaleSetNetworkConfigurationProperties

## VirtualMachineScaleSetNetworkConfigurationProperties
### Properties
* **dnsSettings**: VirtualMachineScaleSetNetworkConfigurationDnsSettings
* **enableAcceleratedNetworking**: bool
* **enableIPForwarding**: bool
* **ipConfigurations**: VirtualMachineScaleSetIPConfiguration[] (Required)
* **networkSecurityGroup**: SubResource
* **primary**: bool

## VirtualMachineScaleSetNetworkConfigurationDnsSettings
### Properties
* **dnsServers**: string[]

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
* **primary**: bool
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPAddressConfiguration**: VirtualMachineScaleSetPublicIPAddressConfiguration
* **subnet**: ApiEntityReference

## VirtualMachineScaleSetPublicIPAddressConfiguration
### Properties
* **name**: string (Required)
* **properties**: VirtualMachineScaleSetPublicIPAddressConfigurationProperties

## VirtualMachineScaleSetPublicIPAddressConfigurationProperties
### Properties
* **dnsSettings**: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings
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
* **writeAcceleratorEnabled**: bool

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
* **writeAcceleratorEnabled**: bool

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Compute/virtualMachineScaleSets/extensions
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualMachineScaleSetExtensionProperties
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/extensions' (ReadOnly, DeployTimeConstant)

## Microsoft.Compute/virtualMachineScaleSets/virtualmachines
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **instanceId**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: VirtualMachineScaleSetVMProperties
* **resources**: VirtualMachineExtension[] (ReadOnly)
* **sku**: Sku (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualmachines' (ReadOnly, DeployTimeConstant)

## VirtualMachineScaleSetVMProperties
### Properties
* **availabilitySet**: SubResource
* **diagnosticsProfile**: DiagnosticsProfile
* **hardwareProfile**: HardwareProfile
* **instanceView**: VirtualMachineScaleSetVMInstanceView (ReadOnly)
* **latestModelApplied**: bool (ReadOnly)
* **licenseType**: string
* **networkProfile**: NetworkProfile
* **osProfile**: OSProfile
* **provisioningState**: string (ReadOnly)
* **storageProfile**: StorageProfile
* **vmId**: string (ReadOnly)

## VirtualMachineScaleSetVMInstanceView
### Properties
* **bootDiagnostics**: BootDiagnosticsInstanceView
* **disks**: DiskInstanceView[]
* **extensions**: VirtualMachineExtensionInstanceView[]
* **maintenanceRedeployStatus**: MaintenanceRedeployStatus
* **placementGroupId**: string
* **platformFaultDomain**: int
* **platformUpdateDomain**: int
* **rdpThumbPrint**: string
* **statuses**: InstanceViewStatus[]
* **vmAgent**: VirtualMachineAgentInstanceView
* **vmHealth**: VirtualMachineHealthStatus (ReadOnly)

## VirtualMachineHealthStatus
### Properties
* **status**: InstanceViewStatus (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

