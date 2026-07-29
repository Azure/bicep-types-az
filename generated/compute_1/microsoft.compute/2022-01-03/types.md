# Microsoft.Compute @ 2022-01-03

## Resource Microsoft.Compute/galleries@2022-01-03
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryProperties](#galleryproperties): Describes the properties of a Shared Image Gallery.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications@2022-01-03
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationProperties](#galleryapplicationproperties): Describes the properties of a gallery Application Definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications/versions@2022-01-03
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationVersionProperties](#galleryapplicationversionproperties): Describes the properties of a gallery image version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images@2022-01-03
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): Describes the properties of a gallery image definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images/versions@2022-01-03
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageVersionProperties](#galleryimageversionproperties): Describes the properties of a gallery image version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images/versions' (ReadOnly, DeployTimeConstant): The resource type

## Function share (Microsoft.Compute/galleries@2022-01-03)
* **Resource**: Microsoft.Compute/galleries
* **ApiVersion**: 2022-01-03
* **Input**: [SharingUpdate](#sharingupdate)
* **Output**: [SharingUpdate](#sharingupdate)

## CommunityGalleryInfo
### Properties
* **communityGalleryEnabled**: bool (ReadOnly): Contains info about whether community gallery sharing is enabled.
* **eula**: string: End-user license agreement for community gallery image.
* **publicNamePrefix**: string: The prefix of the gallery name that will be displayed publicly. Visible to all users.
* **publicNames**: string[] (ReadOnly): Community gallery public name list.
* **publisherContact**: string: Community gallery publisher support email. The email address of the publisher. Visible to all users.
* **publisherUri**: string: The link to the publisher website. Visible to all users.

## DataDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string: A relative URI containing the resource ID of the disk encryption set.
* **lun**: int (Required): This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.

## Disallowed
### Properties
* **diskTypes**: string[]: A list of disk types.

## EncryptionImages
### Properties
* **dataDiskImages**: [DataDiskImageEncryption](#datadiskimageencryption)[]: A list of encryption specifications for data disk images.
* **osDiskImage**: [OSDiskImageEncryption](#osdiskimageencryption): Contains encryption settings for an OS disk image.

## GalleryApplicationProperties
### Properties
* **description**: string: The description of this gallery Application Definition resource. This property is updatable.
* **endOfLifeDate**: string: The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
* **eula**: string: The Eula agreement for the gallery Application Definition.
* **privacyStatementUri**: string: The privacy statement uri.
* **releaseNoteUri**: string: The release note uri.
* **supportedOSType**: 'Linux' | 'Windows' (Required): This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**

## GalleryApplicationVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **publishingProfile**: [GalleryApplicationVersionPublishingProfile](#galleryapplicationversionpublishingprofile) (Required): The publishing profile of a gallery image version.
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly): This is the replication status of the gallery image version.

## GalleryApplicationVersionPublishingProfile
### Properties
* **advancedSettings**: [GalleryApplicationVersionPublishingProfileAdvancedSettings](#galleryapplicationversionpublishingprofileadvancedsettings): Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only.
* **enableHealthCheck**: bool: Optional. Whether or not this application reports health.
* **endOfLifeDate**: string: The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
* **manageActions**: [UserArtifactManage](#userartifactmanage)
* **publishedDate**: string (ReadOnly): The timestamp for when the gallery image version is published.
* **replicaCount**: int: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
* **replicationMode**: 'Full' | 'Shallow' | string: Optional parameter which specifies the mode to be used for replication. This property is not updatable.
* **settings**: [UserArtifactSettings](#userartifactsettings): Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
* **source**: [UserArtifactSource](#userartifactsource) (Required): The source image from which the Image Version is going to be created.
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.
* **targetExtendedLocations**: [GalleryTargetExtendedLocation](#gallerytargetextendedlocation)[]: The target extended locations where the Image Version is going to be replicated to. This property is updatable.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the Image Version is going to be replicated to. This property is updatable.

## GalleryApplicationVersionPublishingProfileAdvancedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryArtifactVersionSource
### Properties
* **id**: string: The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
* **uri**: string: The uri of the gallery artifact version source. Currently used to specify vhd/blob source.

## GalleryDataDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite': The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
* **lun**: int (Required): This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
* **sizeInGB**: int (ReadOnly): This property indicates the size of the VHD to be created.
* **source**: [GalleryArtifactVersionSource](#galleryartifactversionsource): The gallery artifact version source.

## GalleryExtendedLocation
### Properties
* **name**: string
* **type**: 'EdgeZone' | 'Unknown' | string: It is type of the extended location.

## GalleryIdentifier
### Properties
* **uniqueName**: string (ReadOnly): The unique name of the Shared Image Gallery. This name is generated automatically by Azure.

## GalleryImageFeature
### Properties
* **name**: string: The name of the gallery image feature.
* **value**: string: The value of the gallery image feature.

## GalleryImageIdentifier
### Properties
* **offer**: string (Required): The name of the gallery image definition offer.
* **publisher**: string (Required): The name of the gallery image definition publisher.
* **sku**: string (Required): The name of the gallery image definition SKU.

## GalleryImageProperties
### Properties
* **architecture**: 'Arm64' | 'x64' | string: The architecture of the image. Applicable to OS disks only.
* **description**: string: The description of this gallery image definition resource. This property is updatable.
* **disallowed**: [Disallowed](#disallowed): Describes the disallowed disk types.
* **endOfLifeDate**: string: The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable.
* **eula**: string: The Eula agreement for the gallery image definition.
* **features**: [GalleryImageFeature](#galleryimagefeature)[]: A list of gallery image features.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier) (Required): This is the gallery image definition identifier.
* **osState**: 'Generalized' | 'Specialized' (Required): This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
* **osType**: 'Linux' | 'Windows' (Required): This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
* **privacyStatementUri**: string: The privacy statement uri.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **purchasePlan**: [ImagePurchasePlan](#imagepurchaseplan): Describes the gallery image definition purchase plan. This is used by marketplace images.
* **recommended**: [RecommendedMachineConfiguration](#recommendedmachineconfiguration): The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
* **releaseNoteUri**: string: The release note uri.

## GalleryImageVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **publishingProfile**: [GalleryImageVersionPublishingProfile](#galleryimageversionpublishingprofile): The publishing profile of a gallery image Version.
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly): This is the replication status of the gallery image version.
* **storageProfile**: [GalleryImageVersionStorageProfile](#galleryimageversionstorageprofile) (Required): This is the storage profile of a Gallery Image Version.

## GalleryImageVersionPublishingProfile
### Properties
* **endOfLifeDate**: string: The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
* **publishedDate**: string (ReadOnly): The timestamp for when the gallery image version is published.
* **replicaCount**: int: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
* **replicationMode**: 'Full' | 'Shallow' | string: Optional parameter which specifies the mode to be used for replication. This property is not updatable.
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.
* **targetExtendedLocations**: [GalleryTargetExtendedLocation](#gallerytargetextendedlocation)[]: The target extended locations where the Image Version is going to be replicated to. This property is updatable.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the Image Version is going to be replicated to. This property is updatable.

## GalleryImageVersionStorageProfile
### Properties
* **dataDiskImages**: [GalleryDataDiskImage](#gallerydatadiskimage)[]: A list of data disk images.
* **osDiskImage**: [GalleryOSDiskImage](#galleryosdiskimage): This is the OS disk image.
* **source**: [GalleryArtifactVersionSource](#galleryartifactversionsource): The gallery artifact version source.

## GalleryOSDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite': The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
* **sizeInGB**: int (ReadOnly): This property indicates the size of the VHD to be created.
* **source**: [GalleryArtifactVersionSource](#galleryartifactversionsource): The gallery artifact version source.

## GalleryProperties
### Properties
* **description**: string: The description of this Shared Image Gallery resource. This property is updatable.
* **identifier**: [GalleryIdentifier](#galleryidentifier): Describes the gallery unique name.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **sharingProfile**: [SharingProfile](#sharingprofile): Profile for gallery sharing to subscription or tenant
* **sharingStatus**: [SharingStatus](#sharingstatus) (ReadOnly): Sharing status of current gallery.
* **softDeletePolicy**: [SoftDeletePolicy](#softdeletepolicy): Contains information about the soft deletion policy of the gallery.

## GalleryTargetExtendedLocation
### Properties
* **encryption**: [EncryptionImages](#encryptionimages): Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
* **extendedLocation**: [GalleryExtendedLocation](#galleryextendedlocation): The name of the extended location.
* **extendedLocationReplicaCount**: int: The number of replicas of the Image Version to be created per extended location. This property is updatable.
* **name**: string: The name of the region.
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.

## ImagePurchasePlan
### Properties
* **name**: string: The plan ID.
* **product**: string: The product ID.
* **publisher**: string: The publisher ID.

## OSDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string: A relative URI containing the resource ID of the disk encryption set.
* **securityProfile**: [OSDiskImageSecurityProfile](#osdiskimagesecurityprofile): This property specifies the security profile of an OS disk image.

## OSDiskImageSecurityProfile
### Properties
* **confidentialVMEncryptionType**: 'EncryptedVMGuestStateOnlyWithPmk' | 'EncryptedWithCmk' | 'EncryptedWithPmk' | string: confidential VM encryption types
* **secureVMDiskEncryptionSetId**: string: secure VM disk encryption set id

## RecommendedMachineConfiguration
### Properties
* **memory**: [ResourceRange](#resourcerange): Describes the resource range.
* **vCPUs**: [ResourceRange](#resourcerange): Describes the resource range.

## RegionalReplicationStatus
### Properties
* **details**: string (ReadOnly): The details of the replication status.
* **progress**: int (ReadOnly): It indicates progress of the replication job.
* **region**: string (ReadOnly): The region to which the gallery image version is being replicated to.
* **state**: 'Completed' | 'Failed' | 'Replicating' | 'Unknown' | string (ReadOnly): This is the regional replication state.

## RegionalSharingStatus
### Properties
* **details**: string: Details of gallery regional sharing failure.
* **region**: string: Region name
* **state**: 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string (ReadOnly): Gallery sharing state in current region

## ReplicationStatus
### Properties
* **aggregatedState**: 'Completed' | 'Failed' | 'InProgress' | 'Unknown' | string (ReadOnly): This is the aggregated replication status based on all the regional replication status flags.
* **summary**: [RegionalReplicationStatus](#regionalreplicationstatus)[] (ReadOnly): This is a summary of replication status for each region.

## ResourceRange
### Properties
* **max**: int: The maximum number of the resource.
* **min**: int: The minimum number of the resource.

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

## SharingProfile
### Properties
* **communityGalleryInfo**: [CommunityGalleryInfo](#communitygalleryinfo): Information of community gallery if current gallery is shared to community.
* **groups**: [SharingProfileGroup](#sharingprofilegroup)[] (ReadOnly): A list of sharing profile groups.
* **permissions**: 'Community' | 'Groups' | 'Private' | string: This property allows you to specify the permission of sharing gallery. <br><br> Possible values are: <br><br> **Private** <br><br> **Groups** <br><br> **Community**

## SharingProfileGroup
### Properties
* **ids**: string[]: A list of subscription/tenant ids the gallery is aimed to be shared to.
* **type**: 'AADTenants' | 'Subscriptions' | string: This property allows you to specify the type of sharing group. <br><br> Possible values are: <br><br> **Subscriptions** <br><br> **AADTenants**

## SharingStatus
### Properties
* **aggregatedState**: 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string (ReadOnly): Aggregated sharing state of current gallery.
* **summary**: [RegionalSharingStatus](#regionalsharingstatus)[]: Summary of all regional sharing status.

## SharingUpdate
### Properties
* **groups**: [SharingProfileGroup](#sharingprofilegroup)[]: A list of sharing profile groups.
* **operationType**: 'Add' | 'EnableCommunity' | 'Remove' | 'Reset' | string (Required): This property allows you to specify the operation type of gallery sharing update. <br><br> Possible values are: <br><br> **Add** <br><br> **Remove** <br><br> **Reset**

## SoftDeletePolicy
### Properties
* **isSoftDeleteEnabled**: bool: Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time.

## TargetRegion
### Properties
* **encryption**: [EncryptionImages](#encryptionimages): Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
* **name**: string (Required): The name of the region.
* **regionalReplicaCount**: int: The number of replicas of the Image Version to be created per region. This property is updatable.
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.

## UserArtifactManage
### Properties
* **install**: string (Required): Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
* **remove**: string (Required): Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
* **update**: string: Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.

## UserArtifactSettings
### Properties
* **configFileName**: string: Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config".
* **packageFileName**: string: Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name.

## UserArtifactSource
### Properties
* **defaultConfigurationLink**: string: Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
* **mediaLink**: string (Required): Required. The mediaLink of the artifact, must be a readable storage page blob.

