# Microsoft.StorageCache @ 2023-05-01

## Resource Microsoft.StorageCache/amlFilesystems@2023-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [AmlFilesystemIdentity](#amlfilesystemidentity): The managed identity used by the AML file system, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AmlFilesystemProperties](#amlfilesystemproperties): Properties of the AML file system.
* **sku**: [SkuName](#skuname): SKU for the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StorageCache/amlFilesystems' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Availability zones for resources. This field should only contain a single element in the array.

## Resource Microsoft.StorageCache/caches@2023-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [CacheIdentity](#cacheidentity): The identity of the cache, if configured.
* **location**: string: Region name string.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CacheProperties](#cacheproperties): Properties of the cache.
* **sku**: [CacheSku](#cachesku): SKU for the cache.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [CacheTags](#cachetags): Resource tags.
* **type**: 'Microsoft.StorageCache/caches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageCache/caches/storageTargets@2023-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region name string.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageTargetProperties](#storagetargetproperties): StorageTarget properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.StorageCache/caches/storageTargets' (ReadOnly, DeployTimeConstant): The resource type

## AmlFilesystemArchive
### Properties
* **filesystemPath**: string (ReadOnly): Lustre file system path to archive relative to the file system root.  Specify '/' to archive all modified data.
* **status**: [AmlFilesystemArchiveStatus](#amlfilesystemarchivestatus) (ReadOnly): The status of the archive

## AmlFilesystemArchiveStatus
### Properties
* **errorCode**: string (ReadOnly): Server-defined error code for the archive operation
* **errorMessage**: string (ReadOnly): Server-defined error message for the archive operation
* **lastCompletionTime**: string (ReadOnly): The time of the last completed archive operation
* **lastStartedTime**: string (ReadOnly): The time the latest archive operation started
* **percentComplete**: int (ReadOnly): The completion percentage of the archive operation
* **state**: 'Canceled' | 'Cancelling' | 'Completed' | 'FSScanInProgress' | 'Failed' | 'Idle' | 'InProgress' | 'NotConfigured' | string (ReadOnly): The state of the archive operation

## AmlFilesystemClientInfo
### Properties
* **containerStorageInterface**: [AmlFilesystemContainerStorageInterface](#amlfilesystemcontainerstorageinterface) (ReadOnly): Container Storage Interface information for the AML file system.
* **lustreVersion**: string (ReadOnly): The version of Lustre running in the AML file system
* **mgsAddress**: string (ReadOnly): The IPv4 address used by clients to mount the AML file system's Lustre Management Service (MGS).
* **mountCommand**: string (ReadOnly): Recommended command to mount the AML file system

## AmlFilesystemContainerStorageInterface
### Properties
* **persistentVolume**: string (ReadOnly): Recommended AKS Persistent Volume for the CSI driver, in Base64 encoded YAML
* **persistentVolumeClaim**: string (ReadOnly): Recommended AKS Persistent Volume Claim for the CSI driver, in Base64 encoded YAML
* **storageClass**: string (ReadOnly): Recommended AKS Storage Class for the CSI driver, in Base64 encoded YAML

## AmlFilesystemEncryptionSettings
### Properties
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference): Specifies the location of the encryption key in Key Vault.

## AmlFilesystemHealth
### Properties
* **state**: 'Available' | 'Degraded' | 'Maintenance' | 'Transitioning' | 'Unavailable' | string: List of AML file system health states.
* **statusCode**: string: Server-defined error code for the AML file system health
* **statusDescription**: string: Describes the health state.

## AmlFilesystemHsmSettings
### Properties
* **container**: string (Required): Resource ID of storage container used for hydrating the namespace and archiving from the namespace. The resource provider must have permission to create SAS tokens on the storage account.
* **importPrefix**: string: Only blobs in the non-logging container that start with this path/prefix get hydrated into the cluster namespace.
* **loggingContainer**: string (Required): Resource ID of storage container used for logging events and errors.  Must be a separate container in the same storage account as the hydration and archive container. The resource provider must have permission to create SAS tokens on the storage account.

## AmlFilesystemIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID for the user-assigned identity of the resource.
* **tenantId**: string (ReadOnly): The tenant ID associated with the resource.
* **type**: 'None' | 'UserAssigned': The type of identity used for the resource.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary.

## AmlFilesystemProperties
### Properties
* **clientInfo**: [AmlFilesystemClientInfo](#amlfilesystemclientinfo) (ReadOnly): Client information for the AML file system.
* **encryptionSettings**: [AmlFilesystemEncryptionSettings](#amlfilesystemencryptionsettings): Specifies encryption settings of the AML file system.
* **filesystemSubnet**: string (Required): Subnet used for managing the AML file system and for client-facing operations. This subnet should have at least a /24 subnet mask within the VNET's address space.
* **health**: [AmlFilesystemHealth](#amlfilesystemhealth) (ReadOnly): Health of the AML file system.
* **hsm**: [AmlFilesystemPropertiesHsm](#amlfilesystempropertieshsm): Hydration and archive settings and status
* **maintenanceWindow**: [AmlFilesystemPropertiesMaintenanceWindow](#amlfilesystempropertiesmaintenancewindow) (Required): Start time of a 30-minute weekly maintenance window.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): ARM provisioning state.
* **storageCapacityTiB**: int (Required): The size of the AML file system, in TiB. This might be rounded up.
* **throughputProvisionedMBps**: int (ReadOnly): Throughput provisioned in MB per sec, calculated as storageCapacityTiB * per-unit storage throughput

## AmlFilesystemPropertiesHsm
### Properties
* **archiveStatus**: [AmlFilesystemArchive](#amlfilesystemarchive)[] (ReadOnly): Archive status
* **settings**: [AmlFilesystemHsmSettings](#amlfilesystemhsmsettings): Specifies HSM settings of the AML file system.

## AmlFilesystemPropertiesMaintenanceWindow
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Day of the week on which the maintenance window will occur.
* **timeOfDayUTC**: string: The time of day (in UTC) to start the maintenance window.

## BlobNfsTarget
### Properties
* **target**: string: Resource ID of the storage container.
* **usageModel**: string: Identifies the StorageCache usage model to be used for this storage target.
* **verificationTimer**: int: Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates.
* **writeBackTimer**: int: Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage.

## CacheActiveDirectorySettings
### Properties
* **cacheNetBiosName**: string (Required): The NetBIOS name to assign to the HPC Cache when it joins the Active Directory domain as a server. Length must 1-15 characters from the class [-0-9a-zA-Z].
* **credentials**: [CacheActiveDirectorySettingsCredentials](#cacheactivedirectorysettingscredentials): Active Directory admin credentials used to join the HPC Cache to a domain.
* **domainJoined**: 'Error' | 'No' | 'Yes' | string (ReadOnly): True if the HPC Cache is joined to the Active Directory domain.
* **domainName**: string (Required): The fully qualified domain name of the Active Directory domain controller.
* **domainNetBiosName**: string (Required): The Active Directory domain's NetBIOS name.
* **primaryDnsIpAddress**: string (Required): Primary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.
* **secondaryDnsIpAddress**: string: Secondary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.

## CacheActiveDirectorySettingsCredentials
### Properties
* **password**: string: Plain text password of the Active Directory domain administrator. This value is stored encrypted and not returned on response.
* **username**: string (Required): Username of the Active Directory domain administrator. This value is stored encrypted and not returned on response.

## CacheDirectorySettings
### Properties
* **activeDirectory**: [CacheActiveDirectorySettings](#cacheactivedirectorysettings): Specifies settings for joining the HPC Cache to an Active Directory domain.
* **usernameDownload**: [CacheUsernameDownloadSettings](#cacheusernamedownloadsettings): Specifies settings for Extended Groups. Extended Groups allows users to be members of more than 16 groups.

## CacheEncryptionSettings
### Properties
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference): Specifies the location of the key encryption key in key vault.
* **rotationToLatestKeyVersionEnabled**: bool: Specifies whether the service will automatically rotate to the newest version of the key in the key vault.

## CacheHealth
### Properties
* **conditions**: [Condition](#condition)[] (ReadOnly): Outstanding conditions that need to be investigated and resolved.
* **state**: 'Degraded' | 'Down' | 'Flushing' | 'Healthy' | 'StartFailed' | 'Stopped' | 'Stopping' | 'Transitioning' | 'Unknown' | 'UpgradeFailed' | 'Upgrading' | 'WaitingForKey' | string: List of cache health states. Down is when the cluster is not responding.  Degraded is when its functioning but has some alerts. Transitioning when it is creating or deleting. Unknown will be returned in old api versions when a new value is added in future versions. WaitingForKey is when the create is waiting for the system assigned identity to be given access to the encryption key in the encryption settings.
* **statusDescription**: string: Describes explanation of state.

## CacheIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID for the system-assigned identity of the cache.
* **tenantId**: string (ReadOnly): The tenant ID associated with the cache.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the cache
* **userAssignedIdentities**: [CacheIdentityUserAssignedIdentities](#cacheidentityuserassignedidentities): A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary.

## CacheIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValueAutoGenerated](#userassignedidentitiesvalueautogenerated)

## CacheNetworkSettings
### Properties
* **dnsSearchDomain**: string: DNS search domain
* **dnsServers**: string[]: DNS servers for the cache to use.  It will be set from the network configuration if no value is provided.
* **mtu**: int: The IPv4 maximum transmission unit configured for the subnet.
* **ntpServer**: string: NTP server IP Address or FQDN for the cache to use. The default is time.windows.com.
* **utilityAddresses**: string[] (ReadOnly): Array of additional IP addresses used by this cache.

## CacheProperties
### Properties
* **cacheSizeGB**: int: The size of this Cache, in GB.
* **directoryServicesSettings**: [CacheDirectorySettings](#cachedirectorysettings): Specifies Directory Services settings of the cache.
* **encryptionSettings**: [CacheEncryptionSettings](#cacheencryptionsettings): Specifies encryption settings of the cache.
* **health**: [CacheHealth](#cachehealth) (ReadOnly): Health of the cache.
* **mountAddresses**: string[] (ReadOnly): Array of IPv4 addresses that can be used by clients mounting this cache.
* **networkSettings**: [CacheNetworkSettings](#cachenetworksettings): Specifies network settings of the cache.
* **primingJobs**: [PrimingJob](#primingjob)[] (ReadOnly): Specifies the priming jobs defined in the cache.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
* **securitySettings**: [CacheSecuritySettings](#cachesecuritysettings): Specifies security settings of the cache.
* **spaceAllocation**: [StorageTargetSpaceAllocation](#storagetargetspaceallocation)[] (ReadOnly): Specifies the space allocation percentage for each storage target in the cache.
* **subnet**: string: Subnet used for the cache.
* **upgradeSettings**: [CacheUpgradeSettings](#cacheupgradesettings): Upgrade settings of the cache.
* **upgradeStatus**: [CacheUpgradeStatus](#cacheupgradestatus) (ReadOnly): Upgrade status of the cache.
* **zones**: string[]: Availability zones for resources. This field should only contain a single element in the array.

## CacheSecuritySettings
### Properties
* **accessPolicies**: [NfsAccessPolicy](#nfsaccesspolicy)[]: NFS access policies defined for this cache.

## CacheSku
### Properties
* **name**: string: SKU name for this cache.

## CacheTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CacheUpgradeSettings
### Properties
* **scheduledTime**: string: When upgradeScheduleEnabled is true, this field holds the user-chosen upgrade time. At the user-chosen time, the firmware update will automatically be installed on the cache.
* **upgradeScheduleEnabled**: bool: True if the user chooses to select an installation time between now and firmwareUpdateDeadline. Else the firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.

## CacheUpgradeStatus
### Properties
* **currentFirmwareVersion**: string (ReadOnly): Version string of the firmware currently installed on this cache.
* **firmwareUpdateDeadline**: string (ReadOnly): Time at which the pending firmware update will automatically be installed on the cache.
* **firmwareUpdateStatus**: 'available' | 'unavailable' | string (ReadOnly): True if there is a firmware update ready to install on this cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
* **lastFirmwareUpdate**: string (ReadOnly): Time of the last successful firmware update.
* **pendingFirmwareVersion**: string (ReadOnly): When firmwareUpdateAvailable is true, this field holds the version string for the update.

## CacheUsernameDownloadSettings
### Properties
* **autoDownloadCertificate**: bool: Determines if the certificate should be automatically downloaded. This applies to 'caCertificateURI' only if 'requireValidCertificate' is true.
* **caCertificateURI**: string: The URI of the CA certificate to validate the LDAP secure connection. This field must be populated when 'requireValidCertificate' is set to true.
* **credentials**: [CacheUsernameDownloadSettingsCredentials](#cacheusernamedownloadsettingscredentials): When present, these are the credentials for the secure LDAP connection.
* **encryptLdapConnection**: bool: Whether or not the LDAP connection should be encrypted.
* **extendedGroups**: bool: Whether or not Extended Groups is enabled.
* **groupFileURI**: string: The URI of the file containing group information (in /etc/group file format). This field must be populated when 'usernameSource' is set to 'File'.
* **ldapBaseDN**: string: The base distinguished name for the LDAP domain.
* **ldapServer**: string: The fully qualified domain name or IP address of the LDAP server to use.
* **requireValidCertificate**: bool: Determines if the certificates must be validated by a certificate authority. When true, caCertificateURI must be provided.
* **userFileURI**: string: The URI of the file containing user information (in /etc/passwd file format). This field must be populated when 'usernameSource' is set to 'File'.
* **usernameDownloaded**: 'Error' | 'No' | 'Yes' | string (ReadOnly): Indicates whether or not the HPC Cache has performed the username download successfully.
* **usernameSource**: 'AD' | 'File' | 'LDAP' | 'None' | string: This setting determines how the cache gets username and group names for clients.

## CacheUsernameDownloadSettingsCredentials
### Properties
* **bindDn**: string: The Bind Distinguished Name identity to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.
* **bindPassword**: string: The Bind password to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.

## ClfsTarget
### Properties
* **target**: string: Resource ID of storage container.

## Condition
### Properties
* **message**: string (ReadOnly): The issue requiring attention.
* **timestamp**: string (ReadOnly): The time when the condition was raised.

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required): The URL referencing a key encryption key in key vault.
* **sourceVault**: [KeyVaultKeyReferenceSourceVault](#keyvaultkeyreferencesourcevault) (Required): Describes a resource Id to source key vault.

## KeyVaultKeyReferenceSourceVault
### Properties
* **id**: string: Resource Id.

## NamespaceJunction
### Properties
* **namespacePath**: string: Namespace path on a cache for a Storage Target.
* **nfsAccessPolicy**: string: Name of the access policy applied to this junction.
* **nfsExport**: string: NFS export where targetPath exists.
* **targetPath**: string: Path in Storage Target to which namespacePath points.

## Nfs3Target
### Properties
* **target**: string: IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
* **usageModel**: string: Identifies the StorageCache usage model to be used for this storage target.
* **verificationTimer**: int: Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates.
* **writeBackTimer**: int: Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage.

## NfsAccessPolicy
### Properties
* **accessRules**: [NfsAccessRule](#nfsaccessrule)[] (Required): The set of rules describing client accesses allowed under this policy.
* **name**: string (Required): Name identifying this policy. Access Policy names are not case sensitive.

## NfsAccessRule
### Properties
* **access**: 'no' | 'ro' | 'rw' | string (Required): Access allowed by this rule.
* **anonymousGID**: string: GID value that replaces 0 when rootSquash is true. This will use the value of anonymousUID if not provided.
* **anonymousUID**: string: UID value that replaces 0 when rootSquash is true. 65534 will be used if not provided.
* **filter**: string: Filter applied to the scope for this rule. The filter's format depends on its scope. 'default' scope matches all clients and has no filter value. 'network' scope takes a filter in CIDR format (for example, 10.99.1.0/24). 'host' takes an IP address or fully qualified domain name as filter. If a client does not match any filter rule and there is no default rule, access is denied.
* **rootSquash**: bool: Map root accesses to anonymousUID and anonymousGID.
* **scope**: 'default' | 'host' | 'network' | string (Required): Scope for this rule. The scope and filter determine which clients match the rule.
* **submountAccess**: bool: For the default policy, allow access to subdirectories under the root export. If this is set to no, clients can only mount the path '/'. If set to yes, clients can mount a deeper path, like '/a/b'.
* **suid**: bool: Allow SUID semantics.

## PrimingJob
### Properties
* **primingJobDetails**: string (ReadOnly): The job details or error information if any.
* **primingJobId**: string (ReadOnly): The unique identifier of the priming job.
* **primingJobName**: string (Required): The priming job name.
* **primingJobPercentComplete**: int (ReadOnly): The current progress of the priming job, as a percentage.
* **primingJobState**: 'Complete' | 'Paused' | 'Queued' | 'Running' | string (ReadOnly): The state of the priming operation.
* **primingJobStatus**: string (ReadOnly): The status code of the priming job.
* **primingManifestUrl**: string (Required, WriteOnly): The URL for the priming manifest file to download. This file must be readable from the HPC Cache. When the file is in Azure blob storage the URL should include a Shared Access Signature (SAS) granting read permissions on the blob.

## SkuName
### Properties
* **name**: string: SKU name for this resource.

## StorageTargetProperties
### Properties
* **allocationPercentage**: int (ReadOnly): The percentage of cache space allocated for this storage target
* **blobNfs**: [BlobNfsTarget](#blobnfstarget): Properties when targetType is blobNfs.
* **clfs**: [ClfsTarget](#clfstarget): Properties when targetType is clfs.
* **junctions**: [NamespaceJunction](#namespacejunction)[]: List of cache namespace junctions to target for namespace associations.
* **nfs3**: [Nfs3Target](#nfs3target): Properties when targetType is nfs3.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
* **state**: 'Busy' | 'Flushing' | 'Ready' | 'Suspended' | string: Storage target operational state.
* **targetType**: 'blobNfs' | 'clfs' | 'nfs3' | 'unknown' | string (Required): Type of the Storage Target.
* **unknown**: [UnknownTarget](#unknowntarget): Properties when targetType is unknown.

## StorageTargetSpaceAllocation
### Properties
* **allocationPercentage**: int: The percentage of cache space allocated for this storage target
* **name**: string: Name of the storage target.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UnknownProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UnknownTarget
### Properties
* **attributes**: [UnknownProperties](#unknownproperties): Dictionary of string->string pairs containing information about the Storage Target.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

## UserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client ID of the user-assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user-assigned identity.

## UserAssignedIdentitiesValueAutoGenerated
### Properties
* **clientId**: string (ReadOnly): The client ID of the user-assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user-assigned identity.

