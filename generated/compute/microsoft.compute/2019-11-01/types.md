# Microsoft.Compute @ 2019-11-01

## Resource Microsoft.Compute/diskEncryptionSets@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [EncryptionSetIdentity](#encryptionsetidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EncryptionSetProperties](#encryptionsetproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/diskEncryptionSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/disks@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
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

## Resource Microsoft.Compute/snapshots@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SnapshotProperties](#snapshotproperties)
* **sku**: [SnapshotSku](#snapshotsku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Compute/snapshots' (ReadOnly, DeployTimeConstant)

## EncryptionSetIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## EncryptionSetProperties
### Properties
* **activeKey**: [KeyVaultAndKeyReference](#keyvaultandkeyreference)
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
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: string (ReadOnly)
* **shareInfo**: [ShareInfoElement](#shareinfoelement)[] (ReadOnly)
* **timeCreated**: string (ReadOnly)
* **uniqueId**: string (ReadOnly)

## CreationData
### Properties
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Import' | 'Restore' | 'Upload' (Required)
* **galleryImageReference**: [ImageDiskReference](#imagediskreference)
* **imageReference**: [ImageDiskReference](#imagediskreference)
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
* **type**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformKey'

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
* **diskSizeBytes**: int (ReadOnly)
* **diskSizeGB**: int
* **encryption**: [Encryption](#encryption)
* **encryptionSettingsCollection**: [EncryptionSettingsCollection](#encryptionsettingscollection)
* **hyperVGeneration**: 'V1' | 'V2'
* **incremental**: bool
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

