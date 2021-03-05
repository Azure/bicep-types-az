# Microsoft.StorageCache @ 2019-08-01-preview

## Resource Microsoft.StorageCache/caches@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: CacheProperties
* **sku**: CacheSku
* **tags**: any
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageCache/caches/storageTargets@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageTargetProperties
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant)

## CacheProperties
### Properties
* **cacheSizeGB**: int
* **health**: CacheHealth (ReadOnly)
* **mountAddresses**: string[] (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **subnet**: string
* **upgradeStatus**: CacheUpgradeStatus

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
* **clfs**: ClfsTarget
* **junctions**: NamespaceJunction[]
* **nfs3**: Nfs3Target
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **targetType**: 'clfs' | 'nfs3' | 'unknown'
* **unknown**: UnknownTarget

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
* **unknownMap**: UnknownProperties

## UnknownProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

