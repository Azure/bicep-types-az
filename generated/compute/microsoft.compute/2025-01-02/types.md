# Microsoft.Compute @ 2025-01-02

## Resource Microsoft.Compute/diskAccesses@2025-01-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-02' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location where the disk access will be created. Extended location cannot be changed.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskAccessProperties](#diskaccessproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Compute/diskAccesses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/diskAccesses/privateEndpointConnections@2025-01-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/diskAccesses/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/diskEncryptionSets@2025-01-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [EncryptionSetIdentity](#encryptionsetidentity): The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionSetProperties](#encryptionsetproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Compute/diskEncryptionSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/disks@2025-01-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-02' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location where the disk will be created. Extended location cannot be changed.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string (ReadOnly): A relative URI containing the ID of the VM that has the disk attached.
* **managedByExtended**: string[] (ReadOnly): List of relative URIs containing the IDs of the VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskProperties](#diskproperties): Disk resource properties.
* **sku**: [DiskSku](#disksku): The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Compute/disks' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The Logical zone list for Disk.

## Resource Microsoft.Compute/restorePointCollections/restorePoints/diskRestorePoints@2025-01-02 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskRestorePointProperties](#diskrestorepointproperties) (ReadOnly): Properties of an incremental disk restore point
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/restorePointCollections/restorePoints/diskRestorePoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/snapshots@2025-01-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-02' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location where the snapshot will be created. Extended location cannot be changed.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string (ReadOnly): Unused. Always Null.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Snapshot resource properties.
* **sku**: [SnapshotSku](#snapshotsku): The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## ApiError
### Properties
* **code**: string: The error code.
* **details**: [ApiErrorBase](#apierrorbase)[]: The Api error details
* **innererror**: [InnerError](#innererror): The Api inner error
* **message**: string: The error message.
* **target**: string: The target of the particular error.

## ApiErrorBase
### Properties
* **code**: string: The error code.
* **message**: string: The error message.
* **target**: string: The target of the particular error.

## AvailabilityPolicy
### Properties
* **actionOnDiskDelay**: 'AutomaticReattach' | 'None' | string: Determines on how to handle disks with slow I/O.

## CopyCompletionError
### Properties
* **errorCode**: 'CopySourceNotFound' | string (Required): Indicates the error code if the background copy of a resource created via the CopyStart operation fails.
* **errorMessage**: string (Required): Indicates the error message if the background copy of a resource created via the CopyStart operation fails.

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'CopyFromSanSnapshot' | 'CopyStart' | 'Empty' | 'FromImage' | 'Import' | 'ImportSecure' | 'Restore' | 'Upload' | 'UploadPreparedSecure' | string (Required): This enumerates the possible sources of a disk's creation.
* **elasticSanResourceId**: string: Required if createOption is CopyFromSanSnapshot. This is the ARM id of the source elastic san volume snapshot.
* **galleryImageReference**: [ImageDiskReference](#imagediskreference): Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk.
* **imageReference**: [ImageDiskReference](#imagediskreference): Disk source information for PIR or user images.
* **instantAccessDurationMinutes**: int {minValue: 1}: For snapshots created from Premium SSD v2 or Ultra disk, this property determines the time in minutes the snapshot is retained for instant access to enable faster restore.
* **logicalSectorSize**: int: Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default.
* **performancePlus**: bool: Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled.
* **provisionedBandwidthCopySpeed**: 'Enhanced' | 'None' | string: If this field is set on a snapshot and createOption is CopyStart, the snapshot will be copied at a quicker speed.
* **securityDataUri**: string: If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state.
* **securityMetadataUri**: string: If createOption is ImportSecure, this is the URI of a blob to be imported into VM metadata for Confidential VM.
* **sourceResourceId**: string: If createOption is Copy, this is the ARM id of the source snapshot or disk.
* **sourceUniqueId**: string (ReadOnly): If this field is set, this is the unique id identifying the source of this resource.
* **sourceUri**: string: If createOption is Import, this is the URI of a blob to be imported into a managed disk.
* **storageAccountId**: string: Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk.
* **uploadSizeBytes**: int: If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).

## DiskAccessProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported.
* **provisioningState**: string (ReadOnly): The disk access resource provisioning state.
* **timeCreated**: string (ReadOnly): The time when the disk access was created.

## DiskProperties
### Properties
* **availabilityPolicy**: [AvailabilityPolicy](#availabilitypolicy): Determines how platform treats disk failures
* **burstingEnabled**: bool: Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks.
* **burstingEnabledTime**: string (ReadOnly): Latest time when bursting was last enabled on a disk.
* **completionPercent**: int: Percentage complete for the background copy when a resource is created via the CopyStart operation.
* **creationData**: [CreationData](#creationdata) (Required): Disk source information. CreationData information cannot be changed after the disk has been created.
* **dataAccessAuthMode**: 'AzureActiveDirectory' | 'None' | string: Additional authentication requirements when exporting or uploading to a disk or snapshot.
* **diskAccessId**: string: ARM id of the DiskAccess resource for using private endpoints on disks.
* **diskIOPSReadOnly**: int: The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes.
* **diskIOPSReadWrite**: int: The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
* **diskMBpsReadOnly**: int: The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
* **diskMBpsReadWrite**: int: The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
* **diskSizeBytes**: int (ReadOnly): The size of the disk in bytes. This field is read only.
* **diskSizeGB**: int: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
* **diskState**: 'ActiveSAS' | 'ActiveSASFrozen' | 'ActiveUpload' | 'Attached' | 'Frozen' | 'ReadyToUpload' | 'Reserved' | 'Unattached' | string (ReadOnly): The state of the disk.
* **encryption**: [Encryption](#encryption): Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection): Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **LastOwnershipUpdateTime**: string (ReadOnly): The UTC time when the ownership state of the disk was last changed i.e., the time the disk was last attached or detached from a VM or the time when the VM to which the disk was attached was deallocated or started.
* **maxShares**: int: The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll' | string: Policy for accessing the disk via network.
* **optimizedForFrequentAttach**: bool: Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine.
* **osType**: 'Linux' | 'Windows': The Operating System type.
* **propertyUpdatesInProgress**: [PropertyUpdatesInProgress](#propertyupdatesinprogress) (ReadOnly): Properties of the disk for which update is pending.
* **provisioningState**: string (ReadOnly): The disk provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Policy for controlling export on the disk.
* **purchasePlan**: [DiskPurchasePlan](#diskpurchaseplan): Purchase plan information for the the image from which the OS disk was created. E.g. - {name: 2019-Datacenter, publisher: MicrosoftWindowsServer, product: WindowsServer}
* **securityProfile**: [DiskSecurityProfile](#disksecurityprofile): Contains the security related information for the resource.
* **shareInfo**: [ShareInfoElement](#shareinfoelement)[] (ReadOnly): Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
* **supportedCapabilities**: [SupportedCapabilities](#supportedcapabilities): List of supported capabilities for the image from which the OS disk was created.
* **supportsHibernation**: bool: Indicates the OS on a disk supports hibernation.
* **tier**: string: Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks.
* **timeCreated**: string (ReadOnly): The time when the disk was created.
* **uniqueId**: string (ReadOnly): Unique Guid identifying the resource.

## DiskPurchasePlan
### Properties
* **name**: string (Required): The plan ID.
* **product**: string (Required): Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **promotionCode**: string: The Offer Promotion Code.
* **publisher**: string (Required): The publisher ID.

## DiskRestorePointProperties
### Properties
* **completionPercent**: int: Percentage complete for the background copy of disk restore point when source resource is from a different region.
* **diskAccessId**: string: ARM id of the DiskAccess resource for using private endpoints on disks.
* **encryption**: [Encryption](#encryption) (ReadOnly): Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
* **familyId**: string (ReadOnly): id of the backing snapshot's MIS family
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **logicalSectorSize**: int (ReadOnly): Logical sector size in bytes for disk restore points of UltraSSD_LRS and PremiumV2_LRS disks. Supported values are 512 and 4096. 4096 is the default.
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll' | string: Policy for accessing the disk via network.
* **osType**: 'Linux' | 'Windows' (ReadOnly): The Operating System type.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Policy for controlling export on the disk.
* **purchasePlan**: [DiskPurchasePlan](#diskpurchaseplan): Purchase plan information for the the image from which the OS disk was created.
* **replicationState**: string (ReadOnly): Replication state of disk restore point when source resource is from a different region.
* **securityProfile**: [DiskSecurityProfile](#disksecurityprofile): Contains the security related information for the resource.
* **sourceResourceId**: string (ReadOnly): arm id of source disk or source disk restore point.
* **sourceResourceLocation**: string (ReadOnly): Location of source disk or source disk restore point when source resource is from a different region.
* **sourceUniqueId**: string (ReadOnly): unique incarnation id of the source disk
* **supportedCapabilities**: [SupportedCapabilities](#supportedcapabilities): List of supported capabilities for the image from which the OS disk was created.
* **supportsHibernation**: bool: Indicates the OS on a disk supports hibernation.
* **timeCreated**: string (ReadOnly): The timestamp of restorePoint creation

## DiskSecurityProfile
### Properties
* **secureVMDiskEncryptionSetId**: string: ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key
* **securityType**: 'ConfidentialVM_DiskEncryptedWithCustomerKey' | 'ConfidentialVM_DiskEncryptedWithPlatformKey' | 'ConfidentialVM_NonPersistedTPM' | 'ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey' | 'TrustedLaunch' | string: Specifies the SecurityType of the VM. Applicable for OS disks only.

## DiskSku
### Properties
* **name**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: The sku name.
* **tier**: string (ReadOnly): The sku tier.

## Encryption
### Properties
* **diskEncryptionSetId**: string: ResourceId of the disk encryption set to use for enabling encryption at rest.
* **type**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | 'EncryptionAtRestWithPlatformKey' | string: The type of key used to encrypt the data of the disk.

## EncryptionSetIdentity
### Properties
* **principalId**: string (ReadOnly): The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **tenantId**: string (ReadOnly): The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string: The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys.
* **userAssignedIdentities**: [EncryptionSetIdentityUserAssignedIdentities](#encryptionsetidentityuserassignedidentities): The list of user identities associated with the disk encryption set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## EncryptionSetIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

## EncryptionSetProperties
### Properties
* **activeKey**: [KeyForDiskEncryptionSet](#keyfordiskencryptionset): The key vault key which is currently used by this disk encryption set.
* **autoKeyRotationError**: [ApiError](#apierror) (ReadOnly): The error that was encountered during auto-key rotation. If an error is present, then auto-key rotation will not be attempted until the error on this disk encryption set is fixed.
* **encryptionType**: 'ConfidentialVmEncryptedWithCustomerKey' | 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | string: The type of key used to encrypt the data of the disk.
* **federatedClientId**: string: Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property.
* **lastKeyRotationTimestamp**: string (ReadOnly): The time when the active key of this disk encryption set was updated.
* **previousKeys**: [KeyForDiskEncryptionSet](#keyfordiskencryptionset)[] (ReadOnly): A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
* **provisioningState**: string (ReadOnly): The disk encryption set provisioning state.
* **rotationToLatestKeyVersionEnabled**: bool: Set this flag to true to enable auto-updating of this disk encryption set to the latest key version.

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

## ImageDiskReference
### Properties
* **communityGalleryImageId**: string: A relative uri containing a community Azure Compute Gallery image reference.
* **id**: string: A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference.
* **lun**: int: If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.
* **sharedGalleryImageId**: string: A relative uri containing a direct shared Azure Compute Gallery image reference.

## InnerError
### Properties
* **errordetail**: string: The internal error message or exception dump.
* **exceptiontype**: string: The exception type.

## KeyForDiskEncryptionSet
### Properties
* **keyUrl**: string (Required): Fully versioned Key Url pointing to a key in KeyVault. Version segment of the Url is required regardless of rotationToLatestKeyVersionEnabled value.
* **sourceVault**: [SourceVault](#sourcevault): Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription.

## KeyVaultAndKeyReference
### Properties
* **keyUrl**: string (Required): Url pointing to a key or secret in KeyVault
* **sourceVault**: [SourceVault](#sourcevault) (Required): Resource id of the KeyVault containing the key or secret

## KeyVaultAndSecretReference
### Properties
* **secretUrl**: string (Required): Url pointing to a key or secret in KeyVault
* **sourceVault**: [SourceVault](#sourcevault) (Required): Resource id of the KeyVault containing the key or secret

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between DiskAccess and Virtual Network.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## PropertyUpdatesInProgress
### Properties
* **targetTier**: string: The target performance tier of the disk if a tier change operation is in progress.

## ShareInfoElement
### Properties
* **vmUri**: string (ReadOnly): A relative URI containing the ID of the VM that has the disk attached.

## SnapshotProperties
### Properties
* **completionPercent**: int: Percentage complete for the background copy when a resource is created via the CopyStart operation.
* **copyCompletionError**: [CopyCompletionError](#copycompletionerror): Indicates the error details if the background copy of a resource created via the CopyStart operation fails.
* **creationData**: [CreationData](#creationdata) (Required): Disk source information. CreationData information cannot be changed after the disk has been created.
* **dataAccessAuthMode**: 'AzureActiveDirectory' | 'None' | string: Additional authentication requirements when exporting or uploading to a disk or snapshot.
* **diskAccessId**: string: ARM id of the DiskAccess resource for using private endpoints on disks.
* **diskSizeBytes**: int (ReadOnly): The size of the disk in bytes. This field is read only.
* **diskSizeGB**: int: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
* **diskState**: 'ActiveSAS' | 'ActiveSASFrozen' | 'ActiveUpload' | 'Attached' | 'Frozen' | 'ReadyToUpload' | 'Reserved' | 'Unattached' | string (ReadOnly): The state of the snapshot.
* **encryption**: [Encryption](#encryption): Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection): Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **incremental**: bool: Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
* **incrementalSnapshotFamilyId**: string (ReadOnly): Incremental snapshots for a disk share an incremental snapshot family id. The Get Page Range Diff API can only be called on incremental snapshots with the same family id.
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll' | string: Policy for accessing the disk via network.
* **osType**: 'Linux' | 'Windows': The Operating System type.
* **provisioningState**: string (ReadOnly): The disk provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Policy for controlling export on the disk.
* **purchasePlan**: [DiskPurchasePlan](#diskpurchaseplan): Purchase plan information for the image from which the source disk for the snapshot was originally created.
* **securityProfile**: [DiskSecurityProfile](#disksecurityprofile): Contains the security related information for the resource.
* **snapshotAccessState**: 'Available' | 'AvailableWithInstantAccess' | 'InstantAccess' | 'Pending' | 'Unknown' | string (ReadOnly): The state of snapshot which determines the access availability of the snapshot.
* **supportedCapabilities**: [SupportedCapabilities](#supportedcapabilities): List of supported capabilities for the image from which the source disk from the snapshot was originally created.
* **supportsHibernation**: bool: Indicates the OS on a snapshot supports hibernation.
* **timeCreated**: string (ReadOnly): The time when the snapshot was created.
* **uniqueId**: string (ReadOnly): Unique Guid identifying the resource.

## SnapshotSku
### Properties
* **name**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: The sku name.
* **tier**: string (ReadOnly): The sku tier.

## SourceVault
### Properties
* **id**: string: Resource Id

## SupportedCapabilities
### Properties
* **acceleratedNetwork**: bool: True if the image from which the OS disk is created supports accelerated networking.
* **architecture**: 'Arm64' | 'x64' | string: CPU architecture supported by an OS disk.
* **diskControllerTypes**: string: The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI.
* **supportedSecurityOption**: 'TrustedLaunchAndConfidentialVMSupported' | 'TrustedLaunchSupported' | string: Refers to the security capability of the disk supported to create a Trusted launch or Confidential VM

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

