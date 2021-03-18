# Microsoft.Compute @ 2018-06-01

## Resource Microsoft.Compute/availabilitySets@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/disks@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiskProperties](#diskproperties)
* **sku**: [DiskSku](#disksku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/disks' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Compute/galleries@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GalleryProperties](#galleryproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/galleries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/images@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GalleryImageProperties](#galleryimageproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/galleries/images' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/images/versions@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GalleryImageVersionProperties](#galleryimageversionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/galleries/images/versions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/images@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImageProperties](#imageproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/proximityPlacementGroups@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProximityPlacementGroupProperties](#proximityplacementgroupproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/proximityPlacementGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/snapshots@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SnapshotProperties](#snapshotproperties)
* **sku**: [SnapshotSku](#snapshotsku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachines@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
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

## Resource Microsoft.Compute/virtualMachines/extensions@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachineScaleSets@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
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

## Resource Microsoft.Compute/virtualMachineScaleSets/extensions@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties)
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
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

## DiskProperties
### Properties
* **creationData**: [CreationData](#creationdata) (Required)
* **diskIOPSReadWrite**: int
* **diskMBpsReadWrite**: int
* **diskSizeGB**: int
* **encryptionSettings**: [EncryptionSettings](#encryptionsettings)
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' | 'Restore' (Required)
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
* **name**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'
* **tier**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryProperties
### Properties
* **description**: string
* **identifier**: [GalleryIdentifier](#galleryidentifier)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)

## GalleryIdentifier
### Properties
* **uniqueName**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryImageProperties
### Properties
* **description**: string
* **disallowed**: [Disallowed](#disallowed)
* **endOfLifeDate**: string
* **eula**: string
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier) (Required)
* **osState**: 'Generalized' | 'Specialized' (Required)
* **osType**: 'Linux' | 'Windows' (Required)
* **privacyStatementUri**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)
* **purchasePlan**: [ImagePurchasePlan](#imagepurchaseplan)
* **recommended**: [RecommendedMachineConfiguration](#recommendedmachineconfiguration)
* **releaseNoteUri**: string

## Disallowed
### Properties
* **diskTypes**: string[]

## GalleryImageIdentifier
### Properties
* **offer**: string (Required)
* **publisher**: string (Required)
* **sku**: string (Required)

## ImagePurchasePlan
### Properties
* **name**: string
* **product**: string
* **publisher**: string

## RecommendedMachineConfiguration
### Properties
* **memory**: [ResourceRange](#resourcerange)
* **vCPUs**: [ResourceRange](#resourcerange)

## ResourceRange
### Properties
* **max**: int
* **min**: int

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryImageVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)
* **publishingProfile**: [GalleryImageVersionPublishingProfile](#galleryimageversionpublishingprofile) (Required)
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly)
* **storageProfile**: [GalleryImageVersionStorageProfile](#galleryimageversionstorageprofile) (ReadOnly)

## GalleryImageVersionPublishingProfile
### Properties
* **endOfLifeDate**: string
* **excludeFromLatest**: bool
* **publishedDate**: string (ReadOnly)
* **replicaCount**: int
* **source**: [GalleryArtifactSource](#galleryartifactsource) (Required)
* **targetRegions**: [TargetRegion](#targetregion)[]

## GalleryArtifactSource
### Properties
* **managedImage**: [ManagedArtifact](#managedartifact) (Required)

## ManagedArtifact
### Properties
* **id**: string (Required)

## TargetRegion
### Properties
* **name**: string (Required)
* **regionalReplicaCount**: int

## ReplicationStatus
### Properties
* **aggregatedState**: 'Completed' | 'Failed' | 'InProgress' | 'Unknown' (ReadOnly)
* **summary**: [RegionalReplicationStatus](#regionalreplicationstatus)[] (ReadOnly)

## RegionalReplicationStatus
### Properties
* **details**: string (ReadOnly)
* **progress**: int (ReadOnly)
* **region**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'Replicating' | 'Unknown' (ReadOnly)

## GalleryImageVersionStorageProfile
### Properties
* **dataDiskImages**: [GalleryDataDiskImage](#gallerydatadiskimage)[] (ReadOnly)
* **osDiskImage**: [GalleryOSDiskImage](#galleryosdiskimage) (ReadOnly)

## GalleryDataDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite' (ReadOnly)
* **lun**: int (ReadOnly)
* **sizeInGB**: int (ReadOnly)

## GalleryOSDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite' (ReadOnly)
* **sizeInGB**: int (ReadOnly)

## ResourceTags
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
* **osDisk**: [ImageOSDisk](#imageosdisk)
* **zoneResilient**: bool

## ImageDataDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskSizeGB**: int
* **lun**: int (Required)
* **managedDisk**: [SubResource](#subresource)
* **snapshot**: [SubResource](#subresource)
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'

## ImageOSDisk
### Properties
* **blobUri**: string
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
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
* **availabilitySets**: [SubResource](#subresource)[] (ReadOnly)
* **proximityPlacementGroupType**: 'Standard' | 'Ultra'
* **virtualMachines**: [SubResource](#subresource)[] (ReadOnly)
* **virtualMachineScaleSets**: [SubResource](#subresource)[] (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata) (Required)
* **diskSizeGB**: int
* **encryptionSettings**: [EncryptionSettings](#encryptionsettings)
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## SnapshotSku
### Properties
* **name**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'
* **tier**: string (ReadOnly)

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
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile)
* **hardwareProfile**: [HardwareProfile](#hardwareprofile)
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly)
* **licenseType**: string
* **networkProfile**: [NetworkProfile](#networkprofile)
* **osProfile**: [OSProfile](#osprofile)
* **provisioningState**: string (ReadOnly)
* **proximityPlacementGroup**: [SubResource](#subresource)
* **storageProfile**: [StorageProfile](#storageprofile)
* **vmId**: string (ReadOnly)

## AdditionalCapabilities
### Properties
* **ultraSSDEnabled**: bool

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
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview)
* **computerName**: string
* **disks**: [DiskInstanceView](#diskinstanceview)[]
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus)
* **osName**: string
* **osVersion**: string
* **platformFaultDomain**: int
* **platformUpdateDomain**: int
* **rdpThumbPrint**: string
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview)

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
* **allowExtensionOperations**: bool
* **computerName**: string
* **customData**: string
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration)
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration)

## LinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool
* **provisionVMAgent**: bool
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
* **writeAcceleratorEnabled**: bool

## VirtualHardDisk
### Properties
* **uri**: string

## ManagedDiskParameters
### Properties
* **id**: string
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'

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
* **overprovision**: bool
* **platformFaultDomainCount**: int
* **provisioningState**: string (ReadOnly)
* **proximityPlacementGroup**: [SubResource](#subresource)
* **singlePlacementGroup**: bool
* **uniqueId**: string (ReadOnly)
* **upgradePolicy**: [UpgradePolicy](#upgradepolicy)
* **virtualMachineProfile**: [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile)
* **zoneBalance**: bool

## UpgradePolicy
### Properties
* **automaticOSUpgrade**: bool
* **autoOSUpgradePolicy**: [AutoOSUpgradePolicy](#autoosupgradepolicy)
* **mode**: 'Automatic' | 'Manual' | 'Rolling'
* **rollingUpgradePolicy**: [RollingUpgradePolicy](#rollingupgradepolicy)

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
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities)
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile)
* **evictionPolicy**: 'Deallocate' | 'Delete'
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile)
* **licenseType**: string
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile)
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile)
* **priority**: 'Low' | 'Regular'
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
* **writeAcceleratorEnabled**: bool

## VirtualMachineScaleSetManagedDiskParameters
### Properties
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
* **networkProfile**: [NetworkProfile](#networkprofile)
* **osProfile**: [OSProfile](#osprofile)
* **provisioningState**: string (ReadOnly)
* **storageProfile**: [StorageProfile](#storageprofile)
* **vmId**: string (ReadOnly)

## VirtualMachineScaleSetVMInstanceView
### Properties
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

## VirtualMachineHealthStatus
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus) (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

