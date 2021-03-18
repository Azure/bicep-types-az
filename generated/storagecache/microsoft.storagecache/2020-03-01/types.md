# Microsoft.StorageCache @ 2020-03-01

## Resource Microsoft.StorageCache/caches@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [CacheIdentity](#cacheidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CacheProperties](#cacheproperties)
* **sku**: [CacheSku](#cachesku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: any
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageCache/caches/storageTargets@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageTargetProperties](#storagetargetproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant)

## CacheIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## CacheProperties
### Properties
* **cacheSizeGB**: int
* **encryptionSettings**: [CacheEncryptionSettings](#cacheencryptionsettings)
* **health**: [CacheHealth](#cachehealth) (ReadOnly)
* **mountAddresses**: string[] (ReadOnly)
* **networkSettings**: [CacheNetworkSettings](#cachenetworksettings)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **securitySettings**: [CacheSecuritySettings](#cachesecuritysettings)
* **subnet**: string
* **upgradeStatus**: [CacheUpgradeStatus](#cacheupgradestatus)

## CacheEncryptionSettings
### Properties
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference)

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: [KeyVaultKeyReferenceSourceVault](#keyvaultkeyreferencesourcevault) (Required)

## KeyVaultKeyReferenceSourceVault
### Properties
* **id**: string

## CacheHealth
### Properties
* **state**: 'Degraded' | 'Down' | 'Flushing' | 'Healthy' | 'Stopped' | 'Stopping' | 'Transitioning' | 'Unknown' | 'Upgrading'
* **statusDescription**: string

## CacheNetworkSettings
### Properties
* **mtu**: int
* **utilityAddresses**: string[] (ReadOnly)

## CacheSecuritySettings
### Properties
* **rootSquash**: bool

## CacheUpgradeStatus
### Properties
* **currentFirmwareVersion**: string (ReadOnly)
* **firmwareUpdateDeadline**: string (ReadOnly)
* **firmwareUpdateStatus**: 'available' | 'unavailable' (ReadOnly)
* **lastFirmwareUpdate**: string (ReadOnly)
* **pendingFirmwareVersion**: string (ReadOnly)

## CacheSku
### Properties
* **name**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## StorageTargetProperties
* **Discriminator**: targetType

### Base Properties
* **clfs**: [ClfsTarget](#clfstarget)
* **junctions**: [NamespaceJunction](#namespacejunction)[]
* **nfs3**: [Nfs3Target](#nfs3target)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **unknown**: [UnknownTarget](#unknowntarget)
### ClfsTargetProperties
#### Properties
* **targetType**: 'clfs' (Required)

### Nfs3TargetProperties
#### Properties
* **targetType**: 'nfs3' (Required)

### UnknownTargetProperties
#### Properties
* **targetType**: 'unknown' (Required)


## ClfsTarget
### Properties
* **target**: string

## NamespaceJunction
### Properties
* **namespacePath**: string
* **nfsExport**: string
* **targetPath**: string

## Nfs3Target
### Properties
* **target**: string
* **usageModel**: string

## UnknownTarget
### Properties
* **unknownMap**: [UnknownProperties](#unknownproperties)

## UnknownProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ClfsTargetProperties
### Properties
* **targetType**: 'clfs' (Required)

## Nfs3TargetProperties
### Properties
* **targetType**: 'nfs3' (Required)

## UnknownTargetProperties
### Properties
* **targetType**: 'unknown' (Required)

