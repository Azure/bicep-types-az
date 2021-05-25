# Microsoft.StorageCache @ 2019-08-01-preview

## Resource Microsoft.StorageCache/caches@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Region name string.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CacheProperties](#cacheproperties): Properties for the cache.
* **sku**: [CacheSku](#cachesku): Sku for the cache.
* **tags**: any: Any object
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageCache/caches/storageTargets@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageTargetProperties](#storagetargetproperties): Properties of the storage target.
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant): The resource type

## CacheProperties
### Properties
* **cacheSizeGB**: int: The size of this cache's cache, in GB.
* **health**: [CacheHealth](#cachehealth) (ReadOnly): An indication of cache health.  Gives more information about health than just that related to provisioning.
* **mountAddresses**: string[] (ReadOnly): Array of IP addresses that can be used by clients mounting this Cache.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
* **subnet**: string: A fully qualified URL.
* **upgradeStatus**: [CacheUpgradeStatus](#cacheupgradestatus): Properties describing the software upgrade state of the cache

## CacheHealth
### Properties
* **state**: 'Degraded' | 'Down' | 'Flushing' | 'Healthy' | 'Stopped' | 'Stopping' | 'Transitioning' | 'Unknown' | 'Upgrading': List of cache health states.
* **statusDescription**: string: Describes explanation of state.

## CacheUpgradeStatus
### Properties
* **currentFirmwareVersion**: string (ReadOnly): Version string of the firmware currently installed on this cache.
* **firmwareUpdateDeadline**: string (ReadOnly): Time at which the pending firmware update will automatically be installed on the cache.
* **firmwareUpdateStatus**: 'available' | 'unavailable' (ReadOnly): True if there is a firmware update ready to install on this cache.  The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
* **lastFirmwareUpdate**: string (ReadOnly): Time of the last successful firmware update.
* **pendingFirmwareVersion**: string (ReadOnly): When firmwareUpdateAvailable is true, this field holds the version string for the update.

## CacheSku
### Properties
* **name**: string: Sku name for this cache.

## StorageTargetProperties
### Properties
* **clfs**: [ClfsTarget](#clfstarget): Storage container for use as a CLFS StorageTarget.
* **junctions**: [NamespaceJunction](#namespacejunction)[]: List of cache namespace to target namespace associations.
* **nfs3**: [Nfs3Target](#nfs3target): An NFS mount point for use as a StorageTarget.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
* **targetType**: 'clfs' | 'nfs3' | 'unknown': Type for storage target.
* **unknown**: [UnknownTarget](#unknowntarget): Storage container for use as a Unknown StorageTarget.

## ClfsTarget
### Properties
* **target**: string: A fully qualified URL.

## NamespaceJunction
### Properties
* **namespacePath**: string: Namespace path on a cache for a storage target.
* **nfsExport**: string: NFS export where targetPath exists.
* **targetPath**: string: Path in storage target to which namespacePath points.

## Nfs3Target
### Properties
* **target**: string: IP or name of an NFS Storage Target host, ie: 10.0.44.44
* **usageModel**: string: Identifies the primary usage model to be used for this storage target.   GET choices from .../usageModels

## UnknownTarget
### Properties
* **unknownMap**: [UnknownProperties](#unknownproperties): Properties of an unknown type of StorageTarget

## UnknownProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

