# Microsoft.Compute @ 2020-12-01

## Resource Microsoft.Compute/availabilitySets@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/hostGroups@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DedicatedHostGroupProperties](#dedicatedhostgroupproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/hostGroups' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Compute/hostGroups/hosts@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DedicatedHostProperties](#dedicatedhostproperties)
* **sku**: [Sku](#sku) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/hostGroups/hosts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/images@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **extendedLocation**: [ExtendedLocation](#extendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImageProperties](#imageproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/proximityPlacementGroups@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProximityPlacementGroupProperties](#proximityplacementgroupproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/proximityPlacementGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/sshPublicKeys@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SshPublicKeyResourceProperties](#sshpublickeyresourceproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/sshPublicKeys' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachines@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **extendedLocation**: [ExtendedLocation](#extendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [VirtualMachineIdentity](#virtualmachineidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Plan](#plan)
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/virtualMachines' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Compute/virtualMachines/extensions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachines/runCommands@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineRunCommandProperties](#virtualmachineruncommandproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/virtualMachines/runCommands' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachineScaleSets@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **extendedLocation**: [ExtendedLocation](#extendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [VirtualMachineScaleSetIdentity](#virtualmachinescalesetidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Plan](#plan)
* **properties**: [VirtualMachineScaleSetProperties](#virtualmachinescalesetproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/virtualMachineScaleSets' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Compute/virtualMachineScaleSets/extensions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties)
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **instanceId**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Plan](#plan)
* **properties**: [VirtualMachineScaleSetVMProperties](#virtualmachinescalesetvmproperties)
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly)
* **sku**: [Sku](#sku) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualmachines' (ReadOnly, DeployTimeConstant)
* **zones**: string[] (ReadOnly)

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties)
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineRunCommandProperties](#virtualmachineruncommandproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands' (ReadOnly, DeployTimeConstant)

## AvailabilitySetProperties
### Properties
* **platformFaultDomainCount**: int
* **platformUpdateDomainCount**: int
* **proximityPlacementGroup**: [SubResource](#subresource)
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly)
* **virtualMachines**: [SubResource](#subresource)[]

## SubResource
### Properties
* **id**: string

## InstanceViewStatus
### Properties
* **code**: string
* **displayStatus**: string
* **level**: 'Error' | 'Info' | 'Warning'
* **message**: string
* **time**: string

## Sku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DedicatedHostGroupProperties
### Properties
* **hosts**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly)
* **instanceView**: [DedicatedHostGroupInstanceView](#dedicatedhostgroupinstanceview) (ReadOnly)
* **platformFaultDomainCount**: int (Required)
* **supportAutomaticPlacement**: bool

## SubResourceReadOnly
### Properties
* **id**: string (ReadOnly)

## DedicatedHostGroupInstanceView
### Properties
* **hosts**: [DedicatedHostInstanceViewWithName](#dedicatedhostinstanceviewwithname)[]

## DedicatedHostInstanceViewWithName
### Properties
* **assetId**: string (ReadOnly)
* **availableCapacity**: [DedicatedHostAvailableCapacity](#dedicatedhostavailablecapacity)
* **name**: string (ReadOnly)
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]

## DedicatedHostAvailableCapacity
### Properties
* **allocatableVMs**: [DedicatedHostAllocatableVM](#dedicatedhostallocatablevm)[]

## DedicatedHostAllocatableVM
### Properties
* **count**: int
* **vmSize**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DedicatedHostProperties
### Properties
* **autoReplaceOnFailure**: bool
* **hostId**: string (ReadOnly)
* **instanceView**: [DedicatedHostInstanceView](#dedicatedhostinstanceview) (ReadOnly)
* **licenseType**: 'None' | 'Windows_Server_Hybrid' | 'Windows_Server_Perpetual'
* **platformFaultDomain**: int
* **provisioningState**: string (ReadOnly)
* **provisioningTime**: string (ReadOnly)
* **virtualMachines**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly)

## DedicatedHostInstanceView
### Properties
* **assetId**: string (ReadOnly)
* **availableCapacity**: [DedicatedHostAvailableCapacity](#dedicatedhostavailablecapacity)
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtendedLocation
### Properties
* **name**: string
* **type**: 'EdgeZone'

## ImageProperties
### Properties
* **hyperVGeneration**: 'V1' | 'V2'
* **provisioningState**: string (ReadOnly)
* **sourceVirtualMachine**: [SubResource](#subresource)
* **storageProfile**: [ImageStorageProfile](#imagestorageprofile)

## ImageStorageProfile
### Properties
* **dataDisks**: [ImageDataDisk](#imagedatadisk)[]
* **osDisk**: [ImageOSDisk](#imageosdisk)
* **zoneResilient**: bool

## ImageDataDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters)
* **diskSizeGB**: int
* **lun**: int (Required)
* **managedDisk**: [SubResource](#subresource)
* **snapshot**: [SubResource](#subresource)
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'

## DiskEncryptionSetParameters
### Properties
* **id**: string

## ImageOSDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters)
* **diskSizeGB**: int
* **managedDisk**: [SubResource](#subresource)
* **osState**: 'Generalized' | 'Specialized' (Required)
* **osType**: 'Linux' | 'Windows' (Required)
* **snapshot**: [SubResource](#subresource)
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProximityPlacementGroupProperties
### Properties
* **availabilitySets**: [SubResourceWithColocationStatus](#subresourcewithcolocationstatus)[] (ReadOnly)
* **colocationStatus**: [InstanceViewStatus](#instanceviewstatus)
* **proximityPlacementGroupType**: 'Standard' | 'Ultra'
* **virtualMachines**: [SubResourceWithColocationStatus](#subresourcewithcolocationstatus)[] (ReadOnly)
* **virtualMachineScaleSets**: [SubResourceWithColocationStatus](#subresourcewithcolocationstatus)[] (ReadOnly)

## SubResourceWithColocationStatus
### Properties
* **colocationStatus**: [InstanceViewStatus](#instanceviewstatus)
* **id**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SshPublicKeyResourceProperties
### Properties
* **publicKey**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [VirtualMachineIdentityUserAssignedIdentities](#virtualmachineidentityuserassignedidentities)

## VirtualMachineIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

## UserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## Plan
### Properties
* **name**: string
* **product**: string
* **promotionCode**: string
* **publisher**: string

## VirtualMachineProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities)
* **availabilitySet**: [SubResource](#subresource)
* **billingProfile**: [BillingProfile](#billingprofile)
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile)
* **evictionPolicy**: 'Deallocate' | 'Delete'
* **extensionsTimeBudget**: string
* **hardwareProfile**: [HardwareProfile](#hardwareprofile)
* **host**: [SubResource](#subresource)
* **hostGroup**: [SubResource](#subresource)
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly)
* **licenseType**: string
* **networkProfile**: [NetworkProfile](#networkprofile)
* **osProfile**: [OSProfile](#osprofile)
* **platformFaultDomain**: int
* **priority**: 'Low' | 'Regular' | 'Spot'
* **provisioningState**: string (ReadOnly)
* **proximityPlacementGroup**: [SubResource](#subresource)
* **securityProfile**: [SecurityProfile](#securityprofile)
* **storageProfile**: [StorageProfile](#storageprofile)
* **virtualMachineScaleSet**: [SubResource](#subresource)
* **vmId**: string (ReadOnly)

## AdditionalCapabilities
### Properties
* **ultraSSDEnabled**: bool

## BillingProfile
### Properties
* **maxPrice**: int

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics)

## BootDiagnostics
### Properties
* **enabled**: bool
* **storageUri**: string

## HardwareProfile
### Properties
* **vmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B1ms' | 'Standard_B1s' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6'

## VirtualMachineInstanceView
### Properties
* **assignedHost**: string (ReadOnly)
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview)
* **computerName**: string
* **disks**: [DiskInstanceView](#diskinstanceview)[]
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]
* **hyperVGeneration**: 'V1' | 'V2'
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus)
* **osName**: string
* **osVersion**: string
* **patchStatus**: [VirtualMachinePatchStatus](#virtualmachinepatchstatus)
* **platformFaultDomain**: int
* **platformUpdateDomain**: int
* **rdpThumbPrint**: string
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview)
* **vmHealth**: [VirtualMachineHealthStatus](#virtualmachinehealthstatus) (ReadOnly)

## BootDiagnosticsInstanceView
### Properties
* **consoleScreenshotBlobUri**: string (ReadOnly)
* **serialConsoleLogBlobUri**: string (ReadOnly)
* **status**: [InstanceViewStatus](#instanceviewstatus) (ReadOnly)

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

## VirtualMachinePatchStatus
### Properties
* **availablePatchSummary**: [AvailablePatchSummary](#availablepatchsummary)
* **configurationStatuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly)
* **lastPatchInstallationSummary**: [LastPatchInstallationSummary](#lastpatchinstallationsummary)

## AvailablePatchSummary
### Properties
* **assessmentActivityId**: string (ReadOnly)
* **criticalAndSecurityPatchCount**: int (ReadOnly)
* **error**: [ApiError](#apierror) (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **otherPatchCount**: int (ReadOnly)
* **rebootPending**: bool (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' (ReadOnly)

## ApiError
### Properties
* **code**: string
* **details**: [ApiErrorBase](#apierrorbase)[]
* **innererror**: [InnerError](#innererror)
* **message**: string
* **target**: string

## ApiErrorBase
### Properties
* **code**: string
* **message**: string
* **target**: string

## InnerError
### Properties
* **errordetail**: string
* **exceptiontype**: string

## LastPatchInstallationSummary
### Properties
* **error**: [ApiError](#apierror) (ReadOnly)
* **excludedPatchCount**: int (ReadOnly)
* **failedPatchCount**: int (ReadOnly)
* **installationActivityId**: string (ReadOnly)
* **installedPatchCount**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **maintenanceWindowExceeded**: bool (ReadOnly)
* **notSelectedPatchCount**: int (ReadOnly)
* **pendingPatchCount**: int (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' (ReadOnly)

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

## VirtualMachineHealthStatus
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus) (ReadOnly)

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
* **allowExtensionOperations**: bool
* **computerName**: string
* **customData**: string
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration)
* **requireGuestProvisionSignal**: bool
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration)

## LinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool
* **patchSettings**: [LinuxPatchSettings](#linuxpatchsettings)
* **provisionVMAgent**: bool
* **ssh**: [SshConfiguration](#sshconfiguration)

## LinuxPatchSettings
### Properties
* **patchMode**: 'AutomaticByPlatform' | 'ImageDefault'

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
* **patchSettings**: [PatchSettings](#patchsettings)
* **provisionVMAgent**: bool
* **timeZone**: string
* **winRM**: [WinRMConfiguration](#winrmconfiguration)

## AdditionalUnattendContent
### Properties
* **componentName**: 'Microsoft-Windows-Shell-Setup'
* **content**: string
* **passName**: 'OobeSystem'
* **settingName**: 'AutoLogon' | 'FirstLogonCommands'

## PatchSettings
### Properties
* **enableHotpatching**: bool
* **patchMode**: 'AutomaticByOS' | 'AutomaticByPlatform' | 'Manual'

## WinRMConfiguration
### Properties
* **listeners**: [WinRMListener](#winrmlistener)[]

## WinRMListener
### Properties
* **certificateUrl**: string
* **protocol**: 'Http' | 'Https'

## SecurityProfile
### Properties
* **encryptionAtHost**: bool
* **securityType**: 'TrustedLaunch'
* **uefiSettings**: [UefiSettings](#uefisettings)

## UefiSettings
### Properties
* **secureBootEnabled**: bool
* **vTpmEnabled**: bool

## StorageProfile
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]
* **imageReference**: [ImageReference](#imagereference)
* **osDisk**: [OSDisk](#osdisk)

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **detachOption**: 'ForceDetach'
* **diskIOPSReadWrite**: int (ReadOnly)
* **diskMBpsReadWrite**: int (ReadOnly)
* **diskSizeGB**: int
* **image**: [VirtualHardDisk](#virtualharddisk)
* **lun**: int (Required)
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters)
* **name**: string
* **toBeDetached**: bool
* **vhd**: [VirtualHardDisk](#virtualharddisk)
* **writeAcceleratorEnabled**: bool

## VirtualHardDisk
### Properties
* **uri**: string

## ManagedDiskParameters
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters)
* **id**: string
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'

## ImageReference
### Properties
* **exactVersion**: string (ReadOnly)
* **id**: string
* **offer**: string
* **publisher**: string
* **sku**: string
* **version**: string

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings)
* **diskSizeGB**: int
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings)
* **image**: [VirtualHardDisk](#virtualharddisk)
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters)
* **name**: string
* **osType**: 'Linux' | 'Windows'
* **vhd**: [VirtualHardDisk](#virtualharddisk)
* **writeAcceleratorEnabled**: bool

## DiffDiskSettings
### Properties
* **option**: 'Local'
* **placement**: 'CacheDisk' | 'ResourceDisk'

## VirtualMachineExtension
### Properties
* **id**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (ReadOnly)
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## VirtualMachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **enableAutomaticUpgrade**: bool
* **forceUpdateTag**: string
* **instanceView**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)
* **protectedSettings**: any
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **settings**: any
* **type**: string
* **typeHandlerVersion**: string

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

## VirtualMachineRunCommandProperties
### Properties
* **asyncExecution**: bool
* **errorBlobUri**: string
* **instanceView**: [VirtualMachineRunCommandInstanceView](#virtualmachineruncommandinstanceview) (ReadOnly)
* **outputBlobUri**: string
* **parameters**: [RunCommandInputParameter](#runcommandinputparameter)[]
* **protectedParameters**: [RunCommandInputParameter](#runcommandinputparameter)[]
* **provisioningState**: string (ReadOnly)
* **runAsPassword**: string
* **runAsUser**: string
* **source**: [VirtualMachineRunCommandScriptSource](#virtualmachineruncommandscriptsource)
* **timeoutInSeconds**: int

## VirtualMachineRunCommandInstanceView
### Properties
* **endTime**: string
* **error**: string
* **executionMessage**: string
* **executionState**: 'Canceled' | 'Failed' | 'Pending' | 'Running' | 'Succeeded' | 'TimedOut' | 'Unknown'
* **exitCode**: int
* **output**: string
* **startTime**: string
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]

## RunCommandInputParameter
### Properties
* **name**: string (Required)
* **value**: string (Required)

## VirtualMachineRunCommandScriptSource
### Properties
* **commandId**: string
* **script**: string
* **scriptUri**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineScaleSetIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [VirtualMachineScaleSetIdentityUserAssignedIdentities](#virtualmachinescalesetidentityuserassignedidentities)

## VirtualMachineScaleSetIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue](#virtualmachinescalesetidentityuserassignedidentitiesvalue)

## VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## VirtualMachineScaleSetProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities)
* **automaticRepairsPolicy**: [AutomaticRepairsPolicy](#automaticrepairspolicy)
* **doNotRunExtensionsOnOverprovisionedVMs**: bool
* **hostGroup**: [SubResource](#subresource)
* **orchestrationMode**: 'Flexible' | 'Uniform'
* **overprovision**: bool
* **platformFaultDomainCount**: int
* **provisioningState**: string (ReadOnly)
* **proximityPlacementGroup**: [SubResource](#subresource)
* **scaleInPolicy**: [ScaleInPolicy](#scaleinpolicy)
* **singlePlacementGroup**: bool
* **uniqueId**: string (ReadOnly)
* **upgradePolicy**: [UpgradePolicy](#upgradepolicy)
* **virtualMachineProfile**: [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile)
* **zoneBalance**: bool

## AutomaticRepairsPolicy
### Properties
* **enabled**: bool
* **gracePeriod**: string

## ScaleInPolicy
### Properties
* **rules**: 'Default' | 'NewestVM' | 'OldestVM'[]

## UpgradePolicy
### Properties
* **automaticOSUpgradePolicy**: [AutomaticOSUpgradePolicy](#automaticosupgradepolicy)
* **mode**: 'Automatic' | 'Manual' | 'Rolling'
* **rollingUpgradePolicy**: [RollingUpgradePolicy](#rollingupgradepolicy)

## AutomaticOSUpgradePolicy
### Properties
* **disableAutomaticRollback**: bool
* **enableAutomaticOSUpgrade**: bool

## RollingUpgradePolicy
### Properties
* **enableCrossZoneUpgrade**: bool
* **maxBatchInstancePercent**: int
* **maxUnhealthyInstancePercent**: int
* **maxUnhealthyUpgradedInstancePercent**: int
* **pauseTimeBetweenBatches**: string
* **prioritizeUnhealthyInstances**: bool

## VirtualMachineScaleSetVMProfile
### Properties
* **billingProfile**: [BillingProfile](#billingprofile)
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile)
* **evictionPolicy**: 'Deallocate' | 'Delete'
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile)
* **licenseType**: string
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile)
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile)
* **priority**: 'Low' | 'Regular' | 'Spot'
* **scheduledEventsProfile**: [ScheduledEventsProfile](#scheduledeventsprofile)
* **securityProfile**: [SecurityProfile](#securityprofile)
* **storageProfile**: [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile)

## VirtualMachineScaleSetExtensionProfile
### Properties
* **extensions**: [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)[]
* **extensionsTimeBudget**: string

## VirtualMachineScaleSetExtension
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties)
* **type**: string (ReadOnly)

## VirtualMachineScaleSetExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **enableAutomaticUpgrade**: bool
* **forceUpdateTag**: string
* **protectedSettings**: any
* **provisionAfterExtensions**: string[]
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
* **enableFpga**: bool
* **enableIPForwarding**: bool
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
* **applicationSecurityGroups**: [SubResource](#subresource)[]
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
* **ipTags**: [VirtualMachineScaleSetIpTag](#virtualmachinescalesetiptag)[]
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPPrefix**: [SubResource](#subresource)

## VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings
### Properties
* **domainNameLabel**: string (Required)

## VirtualMachineScaleSetIpTag
### Properties
* **ipTagType**: string
* **tag**: string

## VirtualMachineScaleSetOSProfile
### Properties
* **adminPassword**: string
* **adminUsername**: string
* **computerNamePrefix**: string
* **customData**: string
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration)
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration)

## ScheduledEventsProfile
### Properties
* **terminateNotificationProfile**: [TerminateNotificationProfile](#terminatenotificationprofile)

## TerminateNotificationProfile
### Properties
* **enable**: bool
* **notBeforeTimeout**: string

## VirtualMachineScaleSetStorageProfile
### Properties
* **dataDisks**: [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)[]
* **imageReference**: [ImageReference](#imagereference)
* **osDisk**: [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk)

## VirtualMachineScaleSetDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **diskIOPSReadWrite**: int
* **diskMBpsReadWrite**: int
* **diskSizeGB**: int
* **lun**: int (Required)
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters)
* **name**: string
* **writeAcceleratorEnabled**: bool

## VirtualMachineScaleSetManagedDiskParameters
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters)
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'

## VirtualMachineScaleSetOSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required)
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings)
* **diskSizeGB**: int
* **image**: [VirtualHardDisk](#virtualharddisk)
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters)
* **name**: string
* **osType**: 'Linux' | 'Windows'
* **vhdContainers**: string[]
* **writeAcceleratorEnabled**: bool

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineScaleSetVMProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities)
* **availabilitySet**: [SubResource](#subresource)
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile)
* **hardwareProfile**: [HardwareProfile](#hardwareprofile)
* **instanceView**: [VirtualMachineScaleSetVMInstanceView](#virtualmachinescalesetvminstanceview) (ReadOnly)
* **latestModelApplied**: bool (ReadOnly)
* **licenseType**: string
* **modelDefinitionApplied**: string (ReadOnly)
* **networkProfile**: [NetworkProfile](#networkprofile)
* **networkProfileConfiguration**: [VirtualMachineScaleSetVMNetworkProfileConfiguration](#virtualmachinescalesetvmnetworkprofileconfiguration)
* **osProfile**: [OSProfile](#osprofile)
* **protectionPolicy**: [VirtualMachineScaleSetVMProtectionPolicy](#virtualmachinescalesetvmprotectionpolicy)
* **provisioningState**: string (ReadOnly)
* **securityProfile**: [SecurityProfile](#securityprofile)
* **storageProfile**: [StorageProfile](#storageprofile)
* **vmId**: string (ReadOnly)

## VirtualMachineScaleSetVMInstanceView
### Properties
* **assignedHost**: string (ReadOnly)
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview)
* **disks**: [DiskInstanceView](#diskinstanceview)[]
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus)
* **placementGroupId**: string
* **platformFaultDomain**: int
* **platformUpdateDomain**: int
* **rdpThumbPrint**: string
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview)
* **vmHealth**: [VirtualMachineHealthStatus](#virtualmachinehealthstatus) (ReadOnly)

## VirtualMachineScaleSetVMNetworkProfileConfiguration
### Properties
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]

## VirtualMachineScaleSetVMProtectionPolicy
### Properties
* **protectFromScaleIn**: bool
* **protectFromScaleSetActions**: bool

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

