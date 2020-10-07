# Microsoft.StorageCache @ 2019-11-01

## Microsoft.StorageCache/caches/storageTargets
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:18_properties
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant)

## schemas:18_properties
### Properties
* **clfs**: clfs
* **junctions**: NamespaceJunction[]
* **nfs3**: nfs3
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **targetType**: 'clfs' | 'nfs3' | 'unknown'
* **unknown**: unknown

## clfs
### Properties
* **target**: string

## NamespaceJunction
### Properties
* **namespacePath**: string
* **nfsExport**: string
* **targetPath**: string

## nfs3
### Properties
* **target**: string
* **usageModel**: string

## unknown
### Properties
* **unknownMap**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.StorageCache/caches
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:4_properties
* **sku**: schemas:4_sku
* **tags**: any
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant)

## schemas:4_properties
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

## schemas:4_sku
### Properties
* **name**: string

