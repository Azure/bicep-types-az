# Microsoft.Compute @ 2020-09-30

## Resource Microsoft.Compute/diskAccesses@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskAccessProperties](#diskaccessproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/diskAccesses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/diskAccesses/privateEndpointConnections@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Compute/diskAccesses/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/diskEncryptionSets@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [EncryptionSetIdentity](#encryptionsetidentity): The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionSetProperties](#encryptionsetproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/diskEncryptionSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/disks@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location where the disk will be created. Extended location cannot be changed.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **managedBy**: string (ReadOnly): A relative URI containing the ID of the VM that has the disk attached.
* **managedByExtended**: string[] (ReadOnly): List of relative URIs containing the IDs of the VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskProperties](#diskproperties): Disk resource properties.
* **sku**: [DiskSku](#disksku): The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/disks' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The Logical zone list for Disk.

## Resource Microsoft.Compute/galleries@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryProperties](#galleryproperties): Describes the properties of a Shared Image Gallery.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationProperties](#galleryapplicationproperties): Describes the properties of a gallery Application Definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications/versions@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationVersionProperties](#galleryapplicationversionproperties): Describes the properties of a gallery image version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): Describes the properties of a gallery image definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images/versions@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageVersionProperties](#galleryimageversionproperties): Describes the properties of a gallery image version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/snapshots@2020-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-30' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location where the snapshot will be created. Extended location cannot be changed.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **managedBy**: string (ReadOnly): Unused. Always Null.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Snapshot resource properties.
* **sku**: [SnapshotSku](#snapshotsku): The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' | 'Restore' | 'Upload' | string (Required): This enumerates the possible sources of a disk's creation.
* **galleryImageReference**: [ImageDiskReference](#imagediskreference): Required if creating from a Gallery Image. The id of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk.
* **imageReference**: [ImageDiskReference](#imagediskreference): Disk source information.
* **logicalSectorSize**: int: Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default.
* **sourceResourceId**: string: If createOption is Copy, this is the ARM id of the source snapshot or disk.
* **sourceUniqueId**: string (ReadOnly): If this field is set, this is the unique id identifying the source of this resource.
* **sourceUri**: string: If createOption is Import, this is the URI of a blob to be imported into a managed disk.
* **storageAccountId**: string: Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk.
* **uploadSizeBytes**: int: If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).

## DataDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string: A relative URI containing the resource ID of the disk encryption set.
* **lun**: int (Required): This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.

## Disallowed
### Properties
* **diskTypes**: string[]: A list of disk types.

## DiskAccessProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported.
* **provisioningState**: string (ReadOnly): The disk access resource provisioning state.
* **timeCreated**: string (ReadOnly): The time when the disk access was created.

## DiskProperties
### Properties
* **burstingEnabled**: bool: Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks.
* **creationData**: [CreationData](#creationdata) (Required): Disk source information. CreationData information cannot be changed after the disk has been created.
* **diskAccessId**: string: ARM id of the DiskAccess resource for using private endpoints on disks.
* **diskIOPSReadOnly**: int: The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes.
* **diskIOPSReadWrite**: int: The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
* **diskMBpsReadOnly**: int: The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
* **diskMBpsReadWrite**: int: The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
* **diskSizeBytes**: int (ReadOnly): The size of the disk in bytes. This field is read only.
* **diskSizeGB**: int: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
* **diskState**: 'ActiveSAS' | 'ActiveUpload' | 'Attached' | 'ReadyToUpload' | 'Reserved' | 'Unattached' | string (ReadOnly): The state of the disk.
* **encryption**: [Encryption](#encryption): Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection): Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **maxShares**: int: The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll' | string: Policy for accessing the disk via network.
* **osType**: 'Linux' | 'Windows': The Operating System type.
* **provisioningState**: string (ReadOnly): The disk provisioning state.
* **purchasePlan**: [PurchasePlan](#purchaseplan): Purchase plan information for the the image from which the OS disk was created. E.g. - {name: 2019-Datacenter, publisher: MicrosoftWindowsServer, product: WindowsServer}
* **shareInfo**: [ShareInfoElement](#shareinfoelement)[] (ReadOnly): Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
* **tier**: string: Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks.
* **timeCreated**: string (ReadOnly): The time when the disk was created.
* **uniqueId**: string (ReadOnly): Unique Guid identifying the resource.

## DiskSku
### Properties
* **name**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: The sku name.
* **tier**: string (ReadOnly): The sku tier.

## Encryption
### Properties
* **diskEncryptionSetId**: string: ResourceId of the disk encryption set to use for enabling encryption at rest.
* **type**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | 'EncryptionAtRestWithPlatformKey' | string: The type of key used to encrypt the data of the disk.

## EncryptionImages
### Properties
* **dataDiskImages**: [DataDiskImageEncryption](#datadiskimageencryption)[]: A list of encryption specifications for data disk images.
* **osDiskImage**: [OSDiskImageEncryption](#osdiskimageencryption): Contains encryption settings for an OS disk image.

## EncryptionSetIdentity
### Properties
* **principalId**: string (ReadOnly): The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **tenantId**: string (ReadOnly): The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **type**: 'None' | 'SystemAssigned' | string: The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys.

## EncryptionSetProperties
### Properties
* **activeKey**: [KeyForDiskEncryptionSet](#keyfordiskencryptionset): The key vault key which is currently used by this disk encryption set.
* **encryptionType**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | string: The type of key used to encrypt the data of the disk.
* **previousKeys**: [KeyForDiskEncryptionSet](#keyfordiskencryptionset)[] (ReadOnly): A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
* **provisioningState**: string (ReadOnly): The disk encryption set provisioning state.

## EncryptionSettingsCollection
### Properties
* **enabled**: bool (Required): Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
* **encryptionSettings**: [EncryptionSettingsElement](#encryptionsettingselement)[]: A collection of encryption settings, one for each disk volume.
* **encryptionSettingsVersion**: string: Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption.

## EncryptionSettingsElement
### Properties
* **diskEncryptionKey**: [KeyVaultAndSecretReference](#keyvaultandsecretreference): Key Vault Secret Url and vault id of the disk encryption key
* **keyEncryptionKey**: [KeyVaultAndKeyReference](#keyvaultandkeyreference): Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone' | string: The type of the extended location.

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
* **enableHealthCheck**: bool: Optional. Whether or not this application reports health.
* **endOfLifeDate**: string: The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
* **manageActions**: [UserArtifactManage](#userartifactmanage)
* **publishedDate**: string (ReadOnly): The timestamp for when the gallery image version is published.
* **replicaCount**: int: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
* **source**: [UserArtifactSource](#userartifactsource) (Required): The source image from which the Image Version is going to be created.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the Image Version is going to be replicated to. This property is updatable.

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
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.
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

## ImageDiskReference
### Properties
* **id**: string (Required): A relative uri containing either a Platform Image Repository or user image reference.
* **lun**: int: If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.

## ImagePurchasePlan
### Properties
* **name**: string: The plan ID.
* **product**: string: The product ID.
* **publisher**: string: The publisher ID.

## KeyForDiskEncryptionSet
### Properties
* **keyUrl**: string (Required): Fully versioned Key Url pointing to a key in KeyVault
* **sourceVault**: [SourceVault](#sourcevault): Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription.

## KeyVaultAndKeyReference
### Properties
* **keyUrl**: string (Required): Url pointing to a key or secret in KeyVault
* **sourceVault**: [SourceVault](#sourcevault) (Required): Resource id of the KeyVault containing the key or secret

## KeyVaultAndSecretReference
### Properties
* **secretUrl**: string (Required): Url pointing to a key or secret in KeyVault
* **sourceVault**: [SourceVault](#sourcevault) (Required): Resource id of the KeyVault containing the key or secret

## OSDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string: A relative URI containing the resource ID of the disk encryption set.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): private endpoint connection Id
* **name**: string (ReadOnly): private endpoint connection name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: string (ReadOnly): private endpoint connection type

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between DiskAccess and Virtual Network.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## PurchasePlan
### Properties
* **name**: string (Required): The plan ID.
* **product**: string (Required): Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **promotionCode**: string: The Offer Promotion Code.
* **publisher**: string (Required): The publisher ID.

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

## ShareInfoElement
### Properties
* **vmUri**: string (ReadOnly): A relative URI containing the ID of the VM that has the disk attached.

## SharingProfile
### Properties
* **groups**: [SharingProfileGroup](#sharingprofilegroup)[] (ReadOnly): A list of sharing profile groups.
* **permissions**: 'Groups' | 'Private' | string: This property allows you to specify the permission of sharing gallery. <br><br> Possible values are: <br><br> **Private** <br><br> **Groups**

## SharingProfileGroup
### Properties
* **ids**: string[]: A list of subscription/tenant ids the gallery is aimed to be shared to.
* **type**: 'AADTenants' | 'Subscriptions' | string: This property allows you to specify the type of sharing group. <br><br> Possible values are: <br><br> **Subscriptions** <br><br> **AADTenants**

## SnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata) (Required): Disk source information. CreationData information cannot be changed after the disk has been created.
* **diskAccessId**: string: ARM id of the DiskAccess resource for using private endpoints on disks.
* **diskSizeBytes**: int (ReadOnly): The size of the disk in bytes. This field is read only.
* **diskSizeGB**: int: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
* **diskState**: 'ActiveSAS' | 'ActiveUpload' | 'Attached' | 'ReadyToUpload' | 'Reserved' | 'Unattached' | string (ReadOnly): The state of the snapshot.
* **encryption**: [Encryption](#encryption): Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection): Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **incremental**: bool: Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll' | string: Policy for accessing the disk via network.
* **osType**: 'Linux' | 'Windows': The Operating System type.
* **provisioningState**: string (ReadOnly): The disk provisioning state.
* **purchasePlan**: [PurchasePlan](#purchaseplan): Purchase plan information for the image from which the source disk for the snapshot was originally created.
* **timeCreated**: string (ReadOnly): The time when the snapshot was created.
* **uniqueId**: string (ReadOnly): Unique Guid identifying the resource.

## SnapshotSku
### Properties
* **name**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: The sku name.
* **tier**: string (ReadOnly): The sku tier.

## SourceVault
### Properties
* **id**: string: Resource Id

## TargetRegion
### Properties
* **encryption**: [EncryptionImages](#encryptionimages): Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
* **name**: string (Required): The name of the region.
* **regionalReplicaCount**: int: The number of replicas of the Image Version to be created per region. This property is updatable.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.

## UserArtifactManage
### Properties
* **install**: string (Required): Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
* **remove**: string (Required): Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
* **update**: string: Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.

## UserArtifactSource
### Properties
* **defaultConfigurationLink**: string: Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
* **mediaLink**: string (Required): Required. The mediaLink of the artifact, must be a readable storage page blob.

