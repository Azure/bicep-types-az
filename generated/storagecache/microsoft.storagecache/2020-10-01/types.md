# Microsoft.StorageCache @ 2020-10-01

## Resource Microsoft.StorageCache/caches@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [CacheIdentity](#cacheidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CacheProperties](#cacheproperties)
* **sku**: [CacheSku](#cachesku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: any
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageCache/caches/storageTargets@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
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
* **directoryServicesSettings**: [CacheDirectorySettings](#cachedirectorysettings)
* **encryptionSettings**: [CacheEncryptionSettings](#cacheencryptionsettings)
* **health**: [CacheHealth](#cachehealth) (ReadOnly)
* **mountAddresses**: string[] (ReadOnly)
* **networkSettings**: [CacheNetworkSettings](#cachenetworksettings)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **securitySettings**: [CacheSecuritySettings](#cachesecuritysettings)
* **subnet**: string
* **upgradeStatus**: [CacheUpgradeStatus](#cacheupgradestatus)

## CacheDirectorySettings
### Properties
* **activeDirectory**: [CacheActiveDirectorySettings](#cacheactivedirectorysettings)
* **usernameDownload**: [CacheUsernameDownloadSettings](#cacheusernamedownloadsettings)

## CacheActiveDirectorySettings
### Properties
* **cacheNetBiosName**: string (Required)
* **credentials**: [CacheActiveDirectorySettingsCredentials](#cacheactivedirectorysettingscredentials)
* **domainJoined**: 'Error' | 'No' | 'Yes' (ReadOnly)
* **domainName**: string (Required)
* **domainNetBiosName**: string (Required)
* **primaryDnsIpAddress**: string (Required)
* **secondaryDnsIpAddress**: string

## CacheActiveDirectorySettingsCredentials
### Properties
* **password**: string (Required)
* **username**: string (Required)

## CacheUsernameDownloadSettings
### Properties
* **autoDownloadCertificate**: bool
* **caCertificateURI**: string
* **credentials**: [CacheUsernameDownloadSettingsCredentials](#cacheusernamedownloadsettingscredentials)
* **encryptLdapConnection**: bool
* **extendedGroups**: bool
* **groupFileURI**: string
* **ldapBaseDN**: string
* **ldapServer**: string
* **requireValidCertificate**: bool
* **userFileURI**: string
* **usernameDownloaded**: 'Error' | 'No' | 'Yes' (ReadOnly)
* **usernameSource**: 'AD' | 'File' | 'LDAP' | 'None'

## CacheUsernameDownloadSettingsCredentials
### Properties
* **bindDn**: string
* **bindPassword**: string

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
* **accessPolicies**: [NfsAccessPolicy](#nfsaccesspolicy)[]

## NfsAccessPolicy
### Properties
* **accessRules**: [NfsAccessRule](#nfsaccessrule)[] (Required)
* **name**: string (Required)

## NfsAccessRule
### Properties
* **access**: 'no' | 'ro' | 'rw' (Required)
* **anonymousGID**: string
* **anonymousUID**: string
* **filter**: string
* **rootSquash**: bool
* **scope**: 'default' | 'host' | 'network' (Required)
* **submountAccess**: bool
* **suid**: bool

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
* **nfsAccessPolicy**: string
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

