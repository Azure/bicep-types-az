# Microsoft.StorageCache @ 2019-11-01

## Resource Microsoft.StorageCache/caches@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Region name string.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:4_properties](#schemas4properties): Properties of the Cache.
* **sku**: [schemas:4_sku](#schemas4sku): SKU for the Cache.
* **tags**: any: ARM tags as name/value pairs.
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageCache/caches/storageTargets@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:18_properties](#schemas18properties): Properties of the Storage Target.
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant): The resource type

## schemas:4_properties
### Properties
* **cacheSizeGB**: int: The size of this Cache, in GB.
* **health**: [CacheHealth](#cachehealth) (ReadOnly): An indication of Cache health. Gives more information about health than just that related to provisioning.
* **mountAddresses**: string[] (ReadOnly): Array of IP addresses that can be used by clients mounting this Cache.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
* **subnet**: string: A fully qualified URL.
* **upgradeStatus**: [CacheUpgradeStatus](#cacheupgradestatus): Properties describing the software upgrade state of the Cache.

## CacheHealth
### Properties
* **state**: 'Degraded' | 'Down' | 'Flushing' | 'Healthy' | 'Stopped' | 'Stopping' | 'Transitioning' | 'Unknown' | 'Upgrading': List of Cache health states.
* **statusDescription**: string: Describes explanation of state.

## CacheUpgradeStatus
### Properties
* **currentFirmwareVersion**: string (ReadOnly): Version string of the firmware currently installed on this Cache.
* **firmwareUpdateDeadline**: string (ReadOnly): Time at which the pending firmware update will automatically be installed on the Cache.
* **firmwareUpdateStatus**: 'available' | 'unavailable' (ReadOnly): True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
* **lastFirmwareUpdate**: string (ReadOnly): Time of the last successful firmware update.
* **pendingFirmwareVersion**: string (ReadOnly): When firmwareUpdateAvailable is true, this field holds the version string for the update.

## schemas:4_sku
### Properties
* **name**: string: SKU name for this Cache.

## schemas:18_properties
### Properties
* **clfs**: [clfs](#clfs): Storage container for use as a CLFS Storage Target.
* **junctions**: [NamespaceJunction](#namespacejunction)[]: List of Cache namespace junctions to target for namespace associations.
* **nfs3**: [nfs3](#nfs3): An NFSv3 mount point for use as a Storage Target.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
* **targetType**: 'clfs' | 'nfs3' | 'unknown': Type of the Storage Target.
* **unknown**: [unknown](#unknown): Storage container for use as an Unknown Storage Target.

## clfs
### Properties
* **target**: string: A fully qualified URL.

## NamespaceJunction
### Properties
* **namespacePath**: string: Namespace path on a Cache for a Storage Target.
* **nfsExport**: string: NFS export where targetPath exists.
* **targetPath**: string: Path in Storage Target to which namespacePath points.

## nfs3
### Properties
* **target**: string: IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
* **usageModel**: string: Identifies the primary usage model to be used for this Storage Target. Get choices from .../usageModels

## unknown
### Properties
* **unknownMap**: [Dictionary<string,String>](#dictionarystringstring): Properties of an unknown type of Storage Target.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

