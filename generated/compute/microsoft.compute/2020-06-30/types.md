# Microsoft.Compute @ 2020-06-30

## Resource Microsoft.Compute/diskAccesses@2020-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiskAccessProperties](#diskaccessproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/diskAccesses' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/diskEncryptionSets@2020-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [EncryptionSetIdentity](#encryptionsetidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EncryptionSetProperties](#encryptionsetproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/diskEncryptionSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/disks@2020-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-30' (ReadOnly, DeployTimeConstant)
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

## Resource Microsoft.Compute/snapshots@2020-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-30' (ReadOnly, DeployTimeConstant)
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
* **type**: 'SystemAssigned'

## EncryptionSetProperties
### Properties
* **activeKey**: [KeyVaultAndKeyReference](#keyvaultandkeyreference)
* **encryptionType**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys'
* **previousKeys**: [KeyVaultAndKeyReference](#keyvaultandkeyreference)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)

## KeyVaultAndKeyReference
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: [SourceVault](#sourcevault) (Required)

## SourceVault
### Properties
* **id**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DiskProperties
### Properties
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

