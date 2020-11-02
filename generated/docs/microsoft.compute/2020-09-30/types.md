# Microsoft.Compute @ 2020-09-30

## Microsoft.Compute/galleries/applications/versions
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryApplicationVersionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/galleries/applications/versions' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Compute/galleries/applications
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryApplicationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/galleries/applications' (ReadOnly, DeployTimeConstant)

## GalleryApplicationProperties
### Properties
* **description**: string
* **endOfLifeDate**: string
* **eula**: string
* **privacyStatementUri**: string
* **releaseNoteUri**: string
* **supportedOSType**: 'Linux' | 'Windows' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Compute/galleries/images/versions
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryImageVersionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/galleries/images/versions' (ReadOnly, DeployTimeConstant)

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
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **lun**: int (Required)
* **sizeInGB**: int (ReadOnly)
* **source**: GalleryArtifactVersionSource

## GalleryArtifactVersionSource
### Properties
* **id**: string
* **uri**: string

## GalleryOSDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **sizeInGB**: int (ReadOnly)
* **source**: GalleryArtifactVersionSource

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Compute/galleries/images
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryImageProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/galleries/images' (ReadOnly, DeployTimeConstant)

## GalleryImageProperties
### Properties
* **description**: string
* **disallowed**: Disallowed
* **endOfLifeDate**: string
* **eula**: string
* **features**: GalleryImageFeature[]
* **hyperVGeneration**: 'V1' | 'V2'
* **identifier**: GalleryImageIdentifier (Required)
* **osState**: 'Generalized' | 'Specialized' (Required)
* **osType**: 'Linux' | 'Windows' (Required)
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Compute/galleries
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/galleries' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

