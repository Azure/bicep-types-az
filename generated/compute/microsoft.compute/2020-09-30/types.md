# Microsoft.Compute @ 2020-09-30

## Resource Microsoft.Compute/diskAccesses@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiskAccessProperties](#diskaccessproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/diskAccesses' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/diskAccesses/privateEndpointConnections@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Compute/diskAccesses/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/diskEncryptionSets@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [EncryptionSetIdentity](#encryptionsetidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EncryptionSetProperties](#encryptionsetproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/diskEncryptionSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/disks@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **extendedLocation**: [ExtendedLocation](#extendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **managedByExtended**: string[] (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiskProperties](#diskproperties)
* **sku**: [DiskSku](#disksku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/disks' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Compute/galleries@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GalleryProperties](#galleryproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/galleries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/applications@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GalleryApplicationProperties](#galleryapplicationproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/galleries/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/applications/versions@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GalleryApplicationVersionProperties](#galleryapplicationversionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/galleries/applications/versions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/images@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GalleryImageProperties](#galleryimageproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/galleries/images' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/images/versions@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GalleryImageVersionProperties](#galleryimageversionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/galleries/images/versions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/snapshots@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **extendedLocation**: [ExtendedLocation](#extendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SnapshotProperties](#snapshotproperties)
* **sku**: [SnapshotSku](#snapshotsku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant)

## DiskAccessProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Pending' | 'Rejected'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EncryptionSetIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## EncryptionSetProperties
### Properties
* **activeKey**: [KeyForDiskEncryptionSet](#keyfordiskencryptionset)
* **encryptionType**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys'
* **previousKeys**: [KeyForDiskEncryptionSet](#keyfordiskencryptionset)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)

## KeyForDiskEncryptionSet
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: [SourceVault](#sourcevault)

## SourceVault
### Properties
* **id**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtendedLocation
### Properties
* **name**: string
* **type**: 'EdgeZone'

## DiskProperties
### Properties
* **burstingEnabled**: bool
* **creationData**: [CreationData](#creationdata) (Required)
* **diskAccessId**: string
* **diskIOPSReadOnly**: int
* **diskIOPSReadWrite**: int
* **diskMBpsReadOnly**: int
* **diskMBpsReadWrite**: int
* **diskSizeBytes**: int (ReadOnly)
* **diskSizeGB**: int
* **diskState**: 'ActiveSAS' | 'ActiveUpload' | 'Attached' | 'ReadyToUpload' | 'Reserved' | 'Unattached' (ReadOnly)
* **encryption**: [Encryption](#encryption)
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection)
* **hyperVGeneration**: 'V1' | 'V2'
* **maxShares**: int
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll'
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: string (ReadOnly)
* **purchasePlan**: [PurchasePlan](#purchaseplan)
* **shareInfo**: [ShareInfoElement](#shareinfoelement)[] (ReadOnly)
* **tier**: string
* **timeCreated**: string (ReadOnly)
* **uniqueId**: string (ReadOnly)

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' | 'Restore' | 'Upload' (Required)
* **galleryImageReference**: [ImageDiskReference](#imagediskreference)
* **imageReference**: [ImageDiskReference](#imagediskreference)
* **logicalSectorSize**: int
* **sourceResourceId**: string
* **sourceUniqueId**: string (ReadOnly)
* **sourceUri**: string
* **storageAccountId**: string
* **uploadSizeBytes**: int

## ImageDiskReference
### Properties
* **id**: string (Required)
* **lun**: int

## Encryption
### Properties
* **diskEncryptionSetId**: string
* **type**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | 'EncryptionAtRestWithPlatformKey'

## EncryptionSettingsCollection
### Properties
* **enabled**: bool (Required)
* **encryptionSettings**: [EncryptionSettingsElement](#encryptionsettingselement)[]
* **encryptionSettingsVersion**: string

## EncryptionSettingsElement
### Properties
* **diskEncryptionKey**: [KeyVaultAndSecretReference](#keyvaultandsecretreference)
* **keyEncryptionKey**: [KeyVaultAndKeyReference](#keyvaultandkeyreference)

## KeyVaultAndSecretReference
### Properties
* **secretUrl**: string (Required)
* **sourceVault**: [SourceVault](#sourcevault) (Required)

## KeyVaultAndKeyReference
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: [SourceVault](#sourcevault) (Required)

## PurchasePlan
### Properties
* **name**: string (Required)
* **product**: string (Required)
* **promotionCode**: string
* **publisher**: string (Required)

## ShareInfoElement
### Properties
* **vmUri**: string (ReadOnly)

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
* **sharingProfile**: [SharingProfile](#sharingprofile)

## GalleryIdentifier
### Properties
* **uniqueName**: string (ReadOnly)

## SharingProfile
### Properties
* **groups**: [SharingProfileGroup](#sharingprofilegroup)[] (ReadOnly)
* **permissions**: 'Groups' | 'Private'

## SharingProfileGroup
### Properties
* **ids**: string[]
* **type**: 'AADTenants' | 'Subscriptions'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryApplicationProperties
### Properties
* **description**: string
* **endOfLifeDate**: string
* **eula**: string
* **privacyStatementUri**: string
* **releaseNoteUri**: string
* **supportedOSType**: 'Linux' | 'Windows' (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryApplicationVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)
* **publishingProfile**: [GalleryApplicationVersionPublishingProfile](#galleryapplicationversionpublishingprofile) (Required)
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly)

## GalleryApplicationVersionPublishingProfile
### Properties
* **enableHealthCheck**: bool
* **endOfLifeDate**: string
* **excludeFromLatest**: bool
* **manageActions**: [UserArtifactManage](#userartifactmanage)
* **publishedDate**: string (ReadOnly)
* **replicaCount**: int
* **source**: [UserArtifactSource](#userartifactsource) (Required)
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'
* **targetRegions**: [TargetRegion](#targetregion)[]

## UserArtifactManage
### Properties
* **install**: string (Required)
* **remove**: string (Required)
* **update**: string

## UserArtifactSource
### Properties
* **defaultConfigurationLink**: string
* **mediaLink**: string (Required)

## TargetRegion
### Properties
* **encryption**: [EncryptionImages](#encryptionimages)
* **name**: string (Required)
* **regionalReplicaCount**: int
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'

## EncryptionImages
### Properties
* **dataDiskImages**: [DataDiskImageEncryption](#datadiskimageencryption)[]
* **osDiskImage**: [OSDiskImageEncryption](#osdiskimageencryption)

## DataDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string
* **lun**: int (Required)

## OSDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string

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
* **features**: [GalleryImageFeature](#galleryimagefeature)[]
* **hyperVGeneration**: 'V1' | 'V2'
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

## GalleryImageFeature
### Properties
* **name**: string
* **value**: string

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
* **publishingProfile**: [GalleryImageVersionPublishingProfile](#galleryimageversionpublishingprofile)
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly)
* **storageProfile**: [GalleryImageVersionStorageProfile](#galleryimageversionstorageprofile) (Required)

## GalleryImageVersionPublishingProfile
### Properties
* **endOfLifeDate**: string
* **excludeFromLatest**: bool
* **publishedDate**: string (ReadOnly)
* **replicaCount**: int
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'
* **targetRegions**: [TargetRegion](#targetregion)[]

## GalleryImageVersionStorageProfile
### Properties
* **dataDiskImages**: [GalleryDataDiskImage](#gallerydatadiskimage)[]
* **osDiskImage**: [GalleryOSDiskImage](#galleryosdiskimage)
* **source**: [GalleryArtifactVersionSource](#galleryartifactversionsource)

## GalleryDataDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **lun**: int (Required)
* **sizeInGB**: int (ReadOnly)
* **source**: [GalleryArtifactVersionSource](#galleryartifactversionsource)

## GalleryArtifactVersionSource
### Properties
* **id**: string
* **uri**: string

## GalleryOSDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **sizeInGB**: int (ReadOnly)
* **source**: [GalleryArtifactVersionSource](#galleryartifactversionsource)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata) (Required)
* **diskAccessId**: string
* **diskSizeBytes**: int (ReadOnly)
* **diskSizeGB**: int
* **diskState**: 'ActiveSAS' | 'ActiveUpload' | 'Attached' | 'ReadyToUpload' | 'Reserved' | 'Unattached' (ReadOnly)
* **encryption**: [Encryption](#encryption)
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection)
* **hyperVGeneration**: 'V1' | 'V2'
* **incremental**: bool
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll'
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: string (ReadOnly)
* **purchasePlan**: [PurchasePlan](#purchaseplan)
* **timeCreated**: string (ReadOnly)
* **uniqueId**: string (ReadOnly)

## SnapshotSku
### Properties
* **name**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'
* **tier**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

