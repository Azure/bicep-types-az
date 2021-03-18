# Microsoft.StorageCache @ 2019-11-01

## Resource Microsoft.StorageCache/caches@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CacheProperties](#cacheproperties)
* **sku**: [CacheSku](#cachesku)
* **tags**: any
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageCache/caches/storageTargets@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageTargetProperties](#storagetargetproperties)
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant)

## CacheProperties
### Properties
* **cacheSizeGB**: int
* **health**: [CacheHealth](#cachehealth) (ReadOnly)
* **mountAddresses**: string[] (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **subnet**: string
* **upgradeStatus**: [CacheUpgradeStatus](#cacheupgradestatus)

## CacheHealth
### Properties
* **state**: 'Degraded' | 'Down' | 'Flushing' | 'Healthy' | 'Stopped' | 'Stopping' | 'Transitioning' | 'Unknown' | 'Upgrading'
* **statusDescription**: string

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

## StorageTargetProperties
### Properties
* **clfs**: [ClfsTarget](#clfstarget)
* **junctions**: [NamespaceJunction](#namespacejunction)[]
* **nfs3**: [Nfs3Target](#nfs3target)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **targetType**: 'clfs' | 'nfs3' | 'unknown'
* **unknown**: [UnknownTarget](#unknowntarget)

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

