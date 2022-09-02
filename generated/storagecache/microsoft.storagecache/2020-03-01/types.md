# Microsoft.StorageCache @ 2020-03-01

## Resource Microsoft.StorageCache/caches@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [CacheIdentity](#cacheidentity): The identity of the cache, if configured.
* **location**: string: Region name string.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CacheProperties](#cacheproperties): Properties of the Cache.
* **sku**: [CacheSku](#cachesku): SKU for the Cache.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: any: ARM tags as name/value pairs.
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageCache/caches/storageTargets@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region name string.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageTargetProperties](#storagetargetproperties): StorageTarget properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant): The resource type

## CacheEncryptionSettings
### Properties
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference): Specifies the location of the key encryption key in Key Vault.

## CacheHealth
### Properties
* **state**: 'Degraded' | 'Down' | 'Flushing' | 'Healthy' | 'Stopped' | 'Stopping' | 'Transitioning' | 'Unknown' | 'Upgrading' | string: List of Cache health states.
* **statusDescription**: string: Describes explanation of state.

## CacheIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the cache.
* **tenantId**: string (ReadOnly): The tenant id associated with the cache.
* **type**: 'None' | 'SystemAssigned': The type of identity used for the cache

## CacheNetworkSettings
### Properties
* **mtu**: int: The IPv4 maximum transmission unit configured for the subnet.
* **utilityAddresses**: string[] (ReadOnly): Array of additional IP addresses used by this Cache.

## CacheProperties
### Properties
* **cacheSizeGB**: int: The size of this Cache, in GB.
* **encryptionSettings**: [CacheEncryptionSettings](#cacheencryptionsettings): Specifies encryption settings of the cache.
* **health**: [CacheHealth](#cachehealth) (ReadOnly): Health of the Cache.
* **mountAddresses**: string[] (ReadOnly): Array of IP addresses that can be used by clients mounting this Cache.
* **networkSettings**: [CacheNetworkSettings](#cachenetworksettings): Specifies network settings of the cache.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
* **securitySettings**: [CacheSecuritySettings](#cachesecuritysettings): Specifies security settings of the cache.
* **subnet**: string: Subnet used for the Cache.
* **upgradeStatus**: [CacheUpgradeStatus](#cacheupgradestatus): Upgrade status of the Cache.

## CacheSecuritySettings
### Properties
* **rootSquash**: bool: root squash of cache property.

## CacheSku
### Properties
* **name**: string: SKU name for this Cache.

## CacheUpgradeStatus
### Properties
* **currentFirmwareVersion**: string (ReadOnly): Version string of the firmware currently installed on this Cache.
* **firmwareUpdateDeadline**: string (ReadOnly): Time at which the pending firmware update will automatically be installed on the Cache.
* **firmwareUpdateStatus**: 'available' | 'unavailable' | string (ReadOnly): True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
* **lastFirmwareUpdate**: string (ReadOnly): Time of the last successful firmware update.
* **pendingFirmwareVersion**: string (ReadOnly): When firmwareUpdateAvailable is true, this field holds the version string for the update.

## ClfsTarget
### Properties
* **target**: string: Resource ID of storage container.

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required): The URL referencing a key encryption key in Key Vault.
* **sourceVault**: [KeyVaultKeyReferenceSourceVault](#keyvaultkeyreferencesourcevault) (Required): Describes a resource Id to source Key Vault.

## KeyVaultKeyReferenceSourceVault
### Properties
* **id**: string: Resource Id.

## NamespaceJunction
### Properties
* **namespacePath**: string: Namespace path on a Cache for a Storage Target.
* **nfsExport**: string: NFS export where targetPath exists.
* **targetPath**: string: Path in Storage Target to which namespacePath points.

## Nfs3Target
### Properties
* **target**: string: IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
* **usageModel**: string: Identifies the primary usage model to be used for this Storage Target. Get choices from .../usageModels

## StorageTargetProperties
* **Discriminator**: targetType

### Base Properties
* **clfs**: [ClfsTarget](#clfstarget): Properties when targetType is clfs.
* **junctions**: [NamespaceJunction](#namespacejunction)[]: List of Cache namespace junctions to target for namespace associations.
* **nfs3**: [Nfs3Target](#nfs3target): Properties when targetType is nfs3.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
* **unknown**: [UnknownTarget](#unknowntarget): Properties when targetType is unknown.

### ClfsTargetProperties
#### Properties
* **targetType**: 'clfs' (Required): Type of the Storage Target.

### Nfs3TargetProperties
#### Properties
* **targetType**: 'nfs3' (Required): Type of the Storage Target.

### UnknownTargetProperties
#### Properties
* **targetType**: 'unknown' (Required): Type of the Storage Target.


## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UnknownProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UnknownTarget
### Properties
* **unknownMap**: [UnknownProperties](#unknownproperties): Dictionary of string->string pairs containing information about the Storage Target.

