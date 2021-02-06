# Microsoft.StorageCache @ 2020-10-01

## Resource Microsoft.StorageCache/caches@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: CacheIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:7_properties
* **sku**: schemas:7_sku
* **systemData**: systemData (ReadOnly)
* **tags**: any
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageCache/caches/storageTargets@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageTargetProperties
* **systemData**: systemData (ReadOnly)
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant)

## CacheIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## schemas:7_properties
### Properties
* **cacheSizeGB**: int
* **directoryServicesSettings**: CacheDirectorySettings
* **encryptionSettings**: CacheEncryptionSettings
* **health**: CacheHealth (ReadOnly)
* **mountAddresses**: string[] (ReadOnly)
* **networkSettings**: CacheNetworkSettings
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **securitySettings**: CacheSecuritySettings
* **subnet**: string
* **upgradeStatus**: CacheUpgradeStatus

## CacheDirectorySettings
### Properties
* **activeDirectory**: CacheActiveDirectorySettings
* **usernameDownload**: CacheUsernameDownloadSettings

## CacheActiveDirectorySettings
### Properties
* **cacheNetBiosName**: string (Required)
* **credentials**: schemas:13_credentials
* **domainJoined**: 'Error' | 'No' | 'Yes' (ReadOnly)
* **domainName**: string (Required)
* **domainNetBiosName**: string (Required)
* **primaryDnsIpAddress**: string (Required)
* **secondaryDnsIpAddress**: string

## schemas:13_credentials
### Properties
* **password**: string (Required)
* **username**: string (Required)

## CacheUsernameDownloadSettings
### Properties
* **autoDownloadCertificate**: bool
* **caCertificateURI**: string
* **credentials**: schemas:14_credentials
* **encryptLdapConnection**: bool
* **extendedGroups**: bool
* **groupFileURI**: string
* **ldapBaseDN**: string
* **ldapServer**: string
* **requireValidCertificate**: bool
* **userFileURI**: string
* **usernameDownloaded**: 'Error' | 'No' | 'Yes' (ReadOnly)
* **usernameSource**: 'AD' | 'File' | 'LDAP' | 'None'

## schemas:14_credentials
### Properties
* **bindDn**: string
* **bindPassword**: string

## CacheEncryptionSettings
### Properties
* **keyEncryptionKey**: KeyVaultKeyReference

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required)
* **sourceVault**: schemas:17_sourceVault (Required)

## schemas:17_sourceVault
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
* **accessPolicies**: NfsAccessPolicy[]

## NfsAccessPolicy
### Properties
* **accessRules**: NfsAccessRule[] (Required)
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

## schemas:7_sku
### Properties
* **name**: string

## systemData
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
* **clfs**: ClfsTarget
* **junctions**: NamespaceJunction[]
* **nfs3**: Nfs3Target
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **unknown**: UnknownTarget
### clfs
#### Properties
* **targetType**: 'clfs' (Required)

### nfs3
#### Properties
* **targetType**: 'nfs3' (Required)

### unknown
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
* **unknownMap**: Dictionary<string,String>

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## clfs
### Properties
* **targetType**: 'clfs' (Required)

## nfs3
### Properties
* **targetType**: 'nfs3' (Required)

## unknown
### Properties
* **targetType**: 'unknown' (Required)

