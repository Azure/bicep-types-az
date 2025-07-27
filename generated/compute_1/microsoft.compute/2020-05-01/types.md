# Microsoft.Compute @ 2020-05-01

## Resource Microsoft.Compute/diskAccesses@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskAccessProperties](#diskaccessproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/diskAccesses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/diskEncryptionSets@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [EncryptionSetIdentity](#encryptionsetidentity): The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionSetProperties](#encryptionsetproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/diskEncryptionSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/disks@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
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

## Resource Microsoft.Compute/snapshots@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **managedBy**: string (ReadOnly): Unused. Always Null.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Snapshot resource properties.
* **sku**: [SnapshotSku](#snapshotsku): The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' | 'Restore' | 'Upload' | string (Required): This enumerates the possible sources of a disk's creation.
* **galleryImageReference**: [ImageDiskReference](#imagediskreference): Required if creating from a Gallery Image. The id of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk.
* **imageReference**: [ImageDiskReference](#imagediskreference): Disk source information.
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
* **shareInfo**: [ShareInfoElement](#shareinfoelement)[] (ReadOnly): Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
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

## EncryptionSetIdentity
### Properties
* **principalId**: string (ReadOnly): The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **tenantId**: string (ReadOnly): The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
* **type**: 'SystemAssigned' | string: The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported.

## EncryptionSetProperties
### Properties
* **activeKey**: [KeyVaultAndKeyReference](#keyvaultandkeyreference): The key vault key which is currently used by this disk encryption set.
* **encryptionType**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | 'EncryptionAtRestWithPlatformKey' | string: The type of key used to encrypt the data of the disk.
* **previousKeys**: [KeyVaultAndKeyReference](#keyvaultandkeyreference)[] (ReadOnly): A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
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

## ImageDiskReference
### Properties
* **id**: string (Required): A relative uri containing either a Platform Image Repository or user image reference.
* **lun**: int: If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.

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

## SnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata) (Required): Disk source information. CreationData information cannot be changed after the disk has been created.
* **diskAccessId**: string: ARM id of the DiskAccess resource for using private endpoints on disks.
* **diskSizeBytes**: int (ReadOnly): The size of the disk in bytes. This field is read only.
* **diskSizeGB**: int: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
* **encryption**: [Encryption](#encryption): Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection): Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **incremental**: bool: Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
* **networkAccessPolicy**: 'AllowAll' | 'AllowPrivate' | 'DenyAll' | string: Policy for accessing the disk via network.
* **osType**: 'Linux' | 'Windows': The Operating System type.
* **provisioningState**: string (ReadOnly): The disk provisioning state.
* **timeCreated**: string (ReadOnly): The time when the snapshot was created.
* **uniqueId**: string (ReadOnly): Unique Guid identifying the resource.

## SnapshotSku
### Properties
* **name**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: The sku name.
* **tier**: string (ReadOnly): The sku tier.

## SourceVault
### Properties
* **id**: string: Resource Id

