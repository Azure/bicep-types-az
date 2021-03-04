# Microsoft.Compute @ 2020-09-30

## Resource Microsoft.Compute/diskAccesses@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiskAccessProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Compute/diskAccesses' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/diskAccesses/privateEndpointConnections@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Compute/diskAccesses/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/diskEncryptionSets@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: EncryptionSetIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EncryptionSetProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Compute/diskEncryptionSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/disks@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **extendedLocation**: ExtendedLocation
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **managedByExtended**: string[] (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiskProperties
* **sku**: DiskSku
* **tags**: ResourceTags
* **type**: 'Microsoft.Compute/disks' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Compute/galleries@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Compute/galleries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/applications@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryApplicationProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Compute/galleries/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/applications/versions@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryApplicationVersionProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Compute/galleries/applications/versions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/images@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryImageProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Compute/galleries/images' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/galleries/images/versions@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryImageVersionProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Compute/galleries/images/versions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/snapshots@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **extendedLocation**: ExtendedLocation
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SnapshotProperties
* **sku**: SnapshotSku
* **tags**: ResourceTags
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant)

## DiskAccessProperties
### Properties
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
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
* **activeKey**: KeyForDiskEncryptionSet
* **encryptionType**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys'
* **previousKeys**: KeyForDiskEncryptionSet[] (ReadOnly)
* **provisioningState**: string (ReadOnly)

## KeyForDiskEncryptionSet
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: SourceVault

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
* **creationData**: CreationData (Required)
* **diskAccessId**: string
* **diskIopsReadOnly**: int
* **diskIopsReadWrite**: int
* **diskMBpsReadOnly**: int
* **diskMBpsReadWrite**: int
* **diskSizeBytes**: int (ReadOnly)
* **diskSizeGB**: int
* **diskState**: 'ActiveSAS' | 'ActiveUpload' | 'Attached' | 'ReadyToUpload' | 'Reserved' | 'Unattached' (ReadOnly)
* **encryption**: Encryption
* **encryptionSettingsCollection**: EncryptionSettingsCollection
* **hyperVGeneration**: 'V1' | 'V2'
* **maxShares**: int
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll'
* **provisioningState**: string (ReadOnly)
* **purchasePlan**: PurchasePlan
* **shareInfo**: ShareInfoElement[] (ReadOnly)
* **tier**: string
* **timeCreated**: string (ReadOnly)
* **uniqueId**: string (ReadOnly)

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' | 'Restore' | 'Upload' (Required)
* **galleryImageReference**: ImageDiskReference
* **imageReference**: ImageDiskReference
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
* **encryptionSettings**: EncryptionSettingsElement[]
* **encryptionSettingsVersion**: string

## EncryptionSettingsElement
### Properties
* **diskEncryptionKey**: KeyVaultAndSecretReference
* **keyEncryptionKey**: KeyVaultAndKeyReference

## KeyVaultAndSecretReference
### Properties
* **secretUrl**: string (Required)
* **sourceVault**: SourceVault (Required)

## KeyVaultAndKeyReference
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: SourceVault (Required)

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
* **identifier**: GalleryIdentifier
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)
* **sharingProfile**: SharingProfile

## GalleryIdentifier
### Properties
* **uniqueName**: string (ReadOnly)

## SharingProfile
### Properties
* **groups**: SharingProfileGroup[] (ReadOnly)
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryApplicationVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)
* **publishingProfile**: GalleryApplicationVersionPublishingProfile (Required)
* **replicationStatus**: ReplicationStatus (ReadOnly)

## GalleryApplicationVersionPublishingProfile
### Properties
* **enableHealthCheck**: bool
* **endOfLifeDate**: string
* **excludeFromLatest**: bool
* **manageActions**: UserArtifactManage
* **publishedDate**: string (ReadOnly)
* **replicaCount**: int
* **source**: UserArtifactSource (Required)
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'
* **targetRegions**: TargetRegion[]

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
* **encryption**: EncryptionImages
* **name**: string (Required)
* **regionalReplicaCount**: int
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'

## EncryptionImages
### Properties
* **dataDiskImages**: DataDiskImageEncryption[]
* **osDiskImage**: OSDiskImageEncryption

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
* **summary**: RegionalReplicationStatus[] (ReadOnly)

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
* **disallowed**: Disallowed
* **endOfLifeDate**: string
* **eula**: string
* **features**: GalleryImageFeature[]
* **hyperVGeneration**: 'V1' | 'V2'
* **identifier**: GalleryImageIdentifier (Required)
* **privacyStatementUri**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)
* **purchasePlan**: ImagePurchasePlan
* **recommended**: RecommendedMachineConfiguration
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
* **memory**: ResourceRange
* **vCPUs**: ResourceRange

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
* **publishingProfile**: GalleryImageVersionPublishingProfile
* **replicationStatus**: ReplicationStatus (ReadOnly)
* **storageProfile**: GalleryImageVersionStorageProfile (Required)

## GalleryImageVersionPublishingProfile
### Properties
* **endOfLifeDate**: string
* **excludeFromLatest**: bool
* **publishedDate**: string (ReadOnly)
* **replicaCount**: int
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'
* **targetRegions**: TargetRegion[]

## GalleryImageVersionStorageProfile
### Properties
* **dataDiskImages**: GalleryDataDiskImage[]
* **osDiskImage**: GalleryOSDiskImage
* **source**: GalleryArtifactVersionSource

## GalleryDataDiskImage
### Properties
* **lun**: int (Required)
* **sizeInGB**: int (ReadOnly)
* **source**: GalleryArtifactVersionSource

## GalleryArtifactVersionSource
### Properties
* **id**: string
* **uri**: string

## GalleryOSDiskImage
### Properties
* **sizeInGB**: int (ReadOnly)
* **source**: GalleryArtifactVersionSource

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SnapshotProperties
### Properties
* **creationData**: CreationData (Required)
* **diskAccessId**: string
* **diskSizeBytes**: int (ReadOnly)
* **diskSizeGB**: int
* **diskState**: 'ActiveSAS' | 'ActiveUpload' | 'Attached' | 'ReadyToUpload' | 'Reserved' | 'Unattached' (ReadOnly)
* **encryption**: Encryption
* **encryptionSettingsCollection**: EncryptionSettingsCollection
* **hyperVGeneration**: 'V1' | 'V2'
* **incremental**: bool
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll'
* **provisioningState**: string (ReadOnly)
* **purchasePlan**: PurchasePlan
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

