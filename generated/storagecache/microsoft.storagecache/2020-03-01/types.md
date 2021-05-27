# Microsoft.StorageCache @ 2020-03-01

## Resource Microsoft.StorageCache/caches@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [CacheIdentity](#cacheidentity): Cache identity properties.
* **location**: string: Region name string.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:7_properties](#schemas7properties): Properties of the Cache.
* **sku**: [schemas:7_sku](#schemas7sku): SKU for the Cache.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: any: ARM tags as name/value pairs.
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageCache/caches/storageTargets@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region name string.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageTargetProperties](#storagetargetproperties): Properties of the Storage Target.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant): The resource type

## CacheIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the cache.
* **tenantId**: string (ReadOnly): The tenant id associated with the cache.
* **type**: 'None' | 'SystemAssigned': The type of identity used for the cache.

## schemas:7_properties
### Properties
* **cacheSizeGB**: int: The size of this Cache, in GB.
* **encryptionSettings**: [CacheEncryptionSettings](#cacheencryptionsettings): Cache encryption settings.
* **health**: [CacheHealth](#cachehealth) (ReadOnly): An indication of Cache health. Gives more information about health than just that related to provisioning.
* **mountAddresses**: string[] (ReadOnly): Array of IP addresses that can be used by clients mounting this Cache.
* **networkSettings**: [CacheNetworkSettings](#cachenetworksettings): Cache network settings.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
* **securitySettings**: [CacheSecuritySettings](#cachesecuritysettings): Cache security settings.
* **subnet**: string: A fully qualified URL.
* **upgradeStatus**: [CacheUpgradeStatus](#cacheupgradestatus): Properties describing the software upgrade state of the Cache.

## CacheEncryptionSettings
### Properties
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference): Describes a reference to Key Vault Key.

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required): The URL referencing a key encryption key in Key Vault.
* **sourceVault**: [schemas:12_sourceVault](#schemas12sourcevault) (Required): Describes a resource Id to source Key Vault.

## schemas:12_sourceVault
### Properties
* **id**: string: Resource Id.

## CacheHealth
### Properties
* **state**: 'Degraded' | 'Down' | 'Flushing' | 'Healthy' | 'Stopped' | 'Stopping' | 'Transitioning' | 'Unknown' | 'Upgrading': List of Cache health states.
* **statusDescription**: string: Describes explanation of state.

## CacheNetworkSettings
### Properties
* **mtu**: int: The IPv4 maximum transmission unit configured for the subnet.
* **utilityAddresses**: string[] (ReadOnly): Array of additional IP addresses used by this Cache.

## CacheSecuritySettings
### Properties
* **rootSquash**: bool: root squash of cache property.

## CacheUpgradeStatus
### Properties
* **currentFirmwareVersion**: string (ReadOnly): Version string of the firmware currently installed on this Cache.
* **firmwareUpdateDeadline**: string (ReadOnly): Time at which the pending firmware update will automatically be installed on the Cache.
* **firmwareUpdateStatus**: 'available' | 'unavailable' (ReadOnly): True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
* **lastFirmwareUpdate**: string (ReadOnly): Time of the last successful firmware update.
* **pendingFirmwareVersion**: string (ReadOnly): When firmwareUpdateAvailable is true, this field holds the version string for the update.

## schemas:7_sku
### Properties
* **name**: string: SKU name for this Cache.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## StorageTargetProperties
* **Discriminator**: targetType
### Base Properties
* **clfs**: [ClfsTarget](#clfstarget): Properties pertained to ClfsTarget
* **junctions**: [NamespaceJunction](#namespacejunction)[]: List of Cache namespace junctions to target for namespace associations.
* **nfs3**: [Nfs3Target](#nfs3target): Properties pertained to Nfs3Target
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
* **unknown**: [UnknownTarget](#unknowntarget): Properties pertained to UnknownTarget
### clfs
#### Properties
* **targetType**: 'clfs' (Required): Storage container for use as a CLFS Storage Target.

### nfs3
#### Properties
* **targetType**: 'nfs3' (Required): An NFSv3 mount point for use as a Storage Target.

### unknown
#### Properties
* **targetType**: 'unknown' (Required): Storage container for use as an Unknown Storage Target.


## ClfsTarget
### Properties
* **target**: string: A fully qualified URL.

## NamespaceJunction
### Properties
* **namespacePath**: string: Namespace path on a Cache for a Storage Target.
* **nfsExport**: string: NFS export where targetPath exists.
* **targetPath**: string: Path in Storage Target to which namespacePath points.

## Nfs3Target
### Properties
* **target**: string: IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
* **usageModel**: string: Identifies the primary usage model to be used for this Storage Target. Get choices from .../usageModels

## UnknownTarget
### Properties
* **unknownMap**: [Dictionary<string,String>](#dictionarystringstring): Properties of an unknown type of Storage Target.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## clfs
### Properties
* **targetType**: 'clfs' (Required): Storage container for use as a CLFS Storage Target.

## nfs3
### Properties
* **targetType**: 'nfs3' (Required): An NFSv3 mount point for use as a Storage Target.

## unknown
### Properties
* **targetType**: 'unknown' (Required): Storage container for use as an Unknown Storage Target.

