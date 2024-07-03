# Microsoft.NetApp @ 2023-11-01

## Resource Microsoft.NetApp/locations/quotaLimits@2023-11-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionQuotaItemProperties](#subscriptionquotaitemproperties) (ReadOnly): SubscriptionQuotaItem properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetApp/locations/quotaLimits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/locations/regionInfos@2023-11-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [RegionInfo](#regioninfo) (ReadOnly): regionInfo properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetApp/locations/regionInfos' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity used for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): NetApp Account properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/backupPolicies@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupPolicyProperties](#backuppolicyproperties) (Required): Backup policy Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetApp/netAppAccounts/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/backupVaults@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BackupVaultProperties](#backupvaultproperties): Backup Vault Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetApp/netAppAccounts/backupVaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/backupVaults/backups@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_.]{0,255}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BackupProperties](#backupproperties) (Required): Backup Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetApp/netAppAccounts/backupVaults/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties) (Required): Capacity pool properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[a-zA-Z][a-zA-Z0-9\-_]{0,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (Required): Volume properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: (string {minLength: 1, maxLength: 255})[]: Availability Zone

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Snapshot Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[a-zA-Z][a-zA-Z0-9\-_]{0,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SubvolumeProperties](#subvolumeproperties): Subvolume Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeQuotaRulesProperties](#volumequotarulesproperties): Volume Quota Rule Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/snapshotPolicies@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotPolicyProperties](#snapshotpolicyproperties) (Required): Snapshot policy Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetApp/netAppAccounts/snapshotPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/volumeGroups@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeGroupProperties](#volumegroupproperties): Volume group properties
* **type**: 'Microsoft.NetApp/netAppAccounts/volumeGroups' (ReadOnly, DeployTimeConstant): The resource type

## Function listReplications (Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2023-11-01)
* **Resource**: Microsoft.NetApp/netAppAccounts/capacityPools/volumes
* **ApiVersion**: 2023-11-01
* **Output**: [ListReplications](#listreplications)

## AccountEncryption
### Properties
* **identity**: [EncryptionIdentity](#encryptionidentity): Identity used to authenticate to KeyVault. Applicable if keySource is 'Microsoft.KeyVault'.
* **keySource**: 'Microsoft.KeyVault' | 'Microsoft.NetApp' | string: The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.NetApp, Microsoft.KeyVault
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties provided by KeVault. Applicable if keySource is 'Microsoft.KeyVault'.

## AccountProperties
### Properties
* **activeDirectories**: [ActiveDirectory](#activedirectory)[]: Active Directories
* **disableShowmount**: bool (ReadOnly): Shows the status of disableShowmount for all volumes under the subscription, null equals false
* **encryption**: [AccountEncryption](#accountencryption): Encryption settings
* **provisioningState**: string (ReadOnly): Azure lifecycle management

## ActiveDirectory
### Properties
* **activeDirectoryId**: string: Id of the Active Directory
* **administrators**: (string {minLength: 1, maxLength: 255})[]: Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier
* **adName**: string {minLength: 1, maxLength: 64}: Name of the active directory machine. This optional parameter is used only while creating kerberos volume
* **aesEncryption**: bool: If enabled, AES encryption will be enabled for SMB communication.
* **allowLocalNfsUsersWithLdap**: bool: If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes.
* **backupOperators**: (string {minLength: 1, maxLength: 255})[]: Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier
* **dns**: string {pattern: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((, ?)(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$"}: Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
* **domain**: string: Name of the Active Directory domain
* **encryptDCConnections**: bool: If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted.
* **kdcIP**: string {pattern: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((, ?)(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$"}: kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume.
* **ldapOverTLS**: bool: Specifies whether or not the LDAP traffic needs to be secured via TLS.
* **ldapSearchScope**: [LdapSearchScopeOpt](#ldapsearchscopeopt): LDAP Search scope options
* **ldapSigning**: bool: Specifies whether or not the LDAP traffic needs to be signed.
* **organizationalUnit**: string: The Organizational Unit (OU) within the Windows Active Directory
* **password**: string {sensitive, maxLength: 64}: Plain text password of Active Directory domain administrator, value is masked in the response
* **preferredServersForLdapClient**: string {maxLength: 32, pattern: "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((, ?)(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?)?$"}: Comma separated list of IPv4 addresses of preferred servers for LDAP client. At most two comma separated IPv4 addresses can be passed.
* **securityOperators**: (string {minLength: 1, maxLength: 255})[]: Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier
* **serverRootCACertificate**: string {sensitive, minLength: 1, maxLength: 10240}: When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes.
* **site**: string: The Active Directory site the service will limit Domain Controller discovery to
* **smbServerName**: string: NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
* **status**: 'Created' | 'Deleted' | 'Error' | 'InUse' | 'Updating' | string (ReadOnly): Status of the Active Directory
* **statusDetails**: string (ReadOnly): Any details in regards to the Status of the Active Directory
* **username**: string: A domain user account with permission to create machine accounts

## BackupPolicyProperties
### Properties
* **backupPolicyId**: string (ReadOnly): Backup Policy Resource ID
* **dailyBackupsToKeep**: int: Daily backups count to keep
* **enabled**: bool: The property to decide policy is enabled or not
* **monthlyBackupsToKeep**: int: Monthly backups count to keep
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **volumeBackups**: [VolumeBackups](#volumebackups)[] (ReadOnly): A list of volumes assigned to this policy
* **volumesAssigned**: int (ReadOnly): Volumes using current backup policy
* **weeklyBackupsToKeep**: int: Weekly backups count to keep

## BackupProperties
### Properties
* **backupId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): UUID v4 used to identify the Backup
* **backupPolicyResourceId**: string (ReadOnly): ResourceId used to identify the backup policy
* **backupType**: 'Manual' | 'Scheduled' | string (ReadOnly): Type of backup Manual or Scheduled
* **creationDate**: string (ReadOnly): The creation date of the backup
* **failureReason**: string (ReadOnly): Failure reason
* **label**: string: Label for backup
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **size**: int (ReadOnly): Size of backup in bytes
* **snapshotName**: string: The name of the snapshot
* **useExistingSnapshot**: bool: Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups
* **volumeResourceId**: string (Required): ResourceId used to identify the Volume

## BackupVaultProperties
### Properties
* **provisioningState**: string (ReadOnly): Azure lifecycle management

## DailySchedule
### Properties
* **hour**: int: Indicates which hour in UTC timezone a snapshot should be taken
* **minute**: int: Indicates which minute snapshot should be taken
* **snapshotsToKeep**: int: Daily snapshot count to keep
* **usedBytes**: int: Resource size in bytes, current storage usage for the volume in bytes

## EncryptionIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID (object ID) of the identity used to authenticate with key vault. Read-only.
* **userAssignedIdentity**: string: The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities.

## ExportPolicyRule
### Properties
* **allowedClients**: string: Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
* **chownMode**: 'Restricted' | 'Unrestricted' | string: This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own.
* **cifs**: bool: Allows CIFS protocol
* **hasRootAccess**: bool: Has root access to volume
* **kerberos5iReadOnly**: bool: Kerberos5i Read only access. To be use with swagger version 2020-05-01 or later
* **kerberos5iReadWrite**: bool: Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later
* **kerberos5pReadOnly**: bool: Kerberos5p Read only access. To be use with swagger version 2020-05-01 or later
* **kerberos5pReadWrite**: bool: Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later
* **kerberos5ReadOnly**: bool: Kerberos5 Read only access. To be use with swagger version 2020-05-01 or later
* **kerberos5ReadWrite**: bool: Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later
* **nfsv3**: bool: Allows NFSv3 protocol. Enable only for NFSv3 type volumes
* **nfsv41**: bool: Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes
* **ruleIndex**: int: Order index
* **unixReadOnly**: bool: Read only access
* **unixReadWrite**: bool: Read and write access

## HourlySchedule
### Properties
* **minute**: int: Indicates which minute snapshot should be taken
* **snapshotsToKeep**: int: Hourly snapshot count to keep
* **usedBytes**: int: Resource size in bytes, current storage usage for the volume in bytes

## KeyVaultProperties
### Properties
* **keyName**: string (Required): The name of KeyVault key.
* **keyVaultId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): UUID v4 used to identify the Azure Key Vault configuration
* **keyVaultResourceId**: string (Required): The resource ID of KeyVault.
* **keyVaultUri**: string (Required): The Uri of KeyVault.
* **status**: 'Created' | 'Deleted' | 'Error' | 'InUse' | 'Updating' | string (ReadOnly): Status of the KeyVault connection.

## LdapSearchScopeOpt
### Properties
* **groupDN**: string {maxLength: 255}: This specifies the group DN, which overrides the base DN for group lookups.
* **groupMembershipFilter**: string {maxLength: 255}: This specifies the custom LDAP search filter to be used when looking up group membership from LDAP server.
* **userDN**: string {maxLength: 255}: This specifies the user DN, which overrides the base DN for user lookups.

## ListReplications
### Properties
* **value**: [Replication](#replication)[]: A list of replications

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MonthlySchedule
### Properties
* **daysOfMonth**: string: Indicates which days of the month snapshot should be taken. A comma delimited string.
* **hour**: int: Indicates which hour in UTC timezone a snapshot should be taken
* **minute**: int: Indicates which minute snapshot should be taken
* **snapshotsToKeep**: int: Monthly snapshot count to keep
* **usedBytes**: int: Resource size in bytes, current storage usage for the volume in bytes

## MountTargetProperties
### Properties
* **fileSystemId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (Required): UUID v4 used to identify the MountTarget
* **ipAddress**: string (ReadOnly): The mount target's IPv4 address
* **mountTargetId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): UUID v4 used to identify the MountTarget
* **smbServerFqdn**: string: The SMB server's Fully Qualified Domain Name, FQDN

## PlacementKeyValuePairs
### Properties
* **key**: string (Required): Key for an application specific parameter for the placement of volumes in the volume group
* **value**: string (Required): Value for an application specific parameter for the placement of volumes in the volume group

## PoolProperties
### Properties
* **coolAccess**: bool: If enabled (true) the pool can contain cool Access enabled volumes.
* **encryptionType**: 'Double' | 'Single' | string: Encryption type of the capacity pool, set encryption type for data at rest for this pool and all volumes in it. This value can only be set when creating new pool.
* **poolId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): UUID v4 used to identify the Pool
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **qosType**: 'Auto' | 'Manual' | string: The qos type of the pool
* **serviceLevel**: 'Premium' | 'Standard' | 'StandardZRS' | 'Ultra' | string (Required): The service level of the file system
* **size**: int (Required): Provisioned size of the pool (in bytes). Allowed values are in 1TiB chunks (value must be multiply of 1099511627776).
* **totalThroughputMibps**: int (ReadOnly): Total throughput of pool in MiB/s
* **utilizedThroughputMibps**: int (ReadOnly): Utilized throughput of pool in MiB/s

## RegionInfo
### Properties
* **availabilityZoneMappings**: [RegionInfoAvailabilityZoneMappingsItem](#regioninfoavailabilityzonemappingsitem)[]: Provides logical availability zone mappings for the subscription for a region.
* **storageToNetworkProximity**: 'AcrossT2' | 'Default' | 'T1' | 'T1AndAcrossT2' | 'T1AndT2' | 'T1AndT2AndAcrossT2' | 'T2' | 'T2AndAcrossT2' | string: Provides storage to network proximity information in the region.

## RegionInfoAvailabilityZoneMappingsItem
### Properties
* **availabilityZone**: string: Logical availability zone.
* **isAvailable**: bool: Available availability zone

## Replication
### Properties
* **endpointType**: 'dst' | 'src' | string: Indicates whether the local volume is the source or destination for the Volume Replication
* **remoteVolumeRegion**: string: The remote region for the other end of the Volume Replication.
* **remoteVolumeResourceId**: string (Required): The resource ID of the remote volume.
* **replicationSchedule**: '_10minutely' | 'daily' | 'hourly' | string: Schedule

## ReplicationObject
### Properties
* **endpointType**: 'dst' | 'src' | string: Indicates whether the local volume is the source or destination for the Volume Replication
* **remoteVolumeRegion**: string: The remote region for the other end of the Volume Replication.
* **remoteVolumeResourceId**: string (Required): The resource ID of the remote volume.
* **replicationId**: string (ReadOnly): Id
* **replicationSchedule**: '_10minutely' | 'daily' | 'hourly' | string: Schedule

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SnapshotPolicyProperties
### Properties
* **dailySchedule**: [DailySchedule](#dailyschedule): Schedule for daily snapshots
* **enabled**: bool: The property to decide policy is enabled or not
* **hourlySchedule**: [HourlySchedule](#hourlyschedule): Schedule for hourly snapshots
* **monthlySchedule**: [MonthlySchedule](#monthlyschedule): Schedule for monthly snapshots
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **weeklySchedule**: [WeeklySchedule](#weeklyschedule): Schedule for weekly snapshots

## SnapshotProperties
### Properties
* **created**: string (ReadOnly): The creation date of the snapshot
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **snapshotId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): UUID v4 used to identify the Snapshot

## SubscriptionQuotaItemProperties
### Properties
* **current**: int (ReadOnly): The current quota value.
* **default**: int (ReadOnly): The default quota value.

## SubvolumeProperties
### Properties
* **parentPath**: string: parent path to the subvolume
* **path**: string: Path to the subvolume
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **size**: int: Truncate subvolume to the provided size in bytes

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VolumeBackupProperties
### Properties
* **backupPolicyId**: string: Backup Policy Resource ID
* **backupVaultId**: string: Backup Vault Resource ID
* **policyEnforced**: bool: Policy Enforced

## VolumeBackups
### Properties
* **backupsCount**: int: Total count of backups for volume
* **policyEnabled**: bool: Policy enabled
* **volumeName**: string: Volume name
* **volumeResourceId**: string: ResourceId used to identify the Volume

## VolumeGroupMetaData
### Properties
* **applicationIdentifier**: string: Application specific identifier
* **applicationType**: 'ORACLE' | 'SAP-HANA' | string: Application Type
* **globalPlacementRules**: [PlacementKeyValuePairs](#placementkeyvaluepairs)[]: Application specific placement rules for the volume group
* **groupDescription**: string: Group Description
* **volumesCount**: int (ReadOnly): Number of volumes in volume group

## VolumeGroupProperties
### Properties
* **groupMetaData**: [VolumeGroupMetaData](#volumegroupmetadata): Volume group details
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **volumes**: [VolumeGroupVolumeProperties](#volumegroupvolumeproperties)[]: List of volumes from group

## VolumeGroupVolumeProperties
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: Resource name
* **properties**: [VolumeProperties](#volumeproperties) (Required): Volume properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type
* **zones**: (string {minLength: 1, maxLength: 255})[]: Availability Zone

## VolumeProperties
### Properties
* **actualThroughputMibps**: int (ReadOnly): Actual throughput in MiB/s for auto qosType volumes calculated based on size and serviceLevel
* **avsDataStore**: 'Disabled' | 'Enabled' | string: Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
* **backupId**: string: Resource identifier used to identify the Backup.
* **baremetalTenantId**: string (ReadOnly): Unique Baremetal Tenant Identifier.
* **capacityPoolResourceId**: string: Pool Resource Id used in case of creating a volume through volume group
* **cloneProgress**: int (ReadOnly): When a volume is being restored from another volume's snapshot, will show the percentage completion of this cloning process. When this value is empty/null there is no cloning process currently happening on this volume. This value will update every 5 minutes during cloning.
* **coolAccess**: bool: Specifies whether Cool Access(tiering) is enabled for the volume.
* **coolAccessRetrievalPolicy**: 'Default' | 'Never' | 'OnRead' | string: coolAccessRetrievalPolicy determines the data retrieval behavior from the cool tier to standard storage based on the read pattern for cool access enabled volumes. The possible values for this field are: 
 Default - Data will be pulled from cool tier to standard storage on random reads. This policy is the default.
 OnRead - All client-driven data read is pulled from cool tier to standard storage on both sequential and random reads.
 Never - No client-driven data is pulled from cool tier to standard storage.
* **coolnessPeriod**: int {minValue: 2, maxValue: 183}: Specifies the number of days after which data that is not accessed by clients will be tiered.
* **creationToken**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z][a-zA-Z0-9\-]{0,79}$"} (Required): A unique file path for the volume. Used when creating mount targets
* **dataProtection**: [VolumePropertiesDataProtection](#volumepropertiesdataprotection): DataProtection type volumes include an object containing details of the replication
* **dataStoreResourceId**: string[] (ReadOnly): Data store resource unique identifier
* **defaultGroupQuotaInKiBs**: int: Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies.
* **defaultUserQuotaInKiBs**: int: Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies .
* **deleteBaseSnapshot**: bool: If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished.  Defaults to false
* **enableSubvolumes**: 'Disabled' | 'Enabled' | string: Flag indicating whether subvolume operations are enabled on the volume
* **encrypted**: bool (ReadOnly): Specifies if the volume is encrypted or not. Only available on volumes created or updated after 2022-01-01.
* **encryptionKeySource**: 'Microsoft.KeyVault' | 'Microsoft.NetApp' | string: Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'
* **exportPolicy**: [VolumePropertiesExportPolicy](#volumepropertiesexportpolicy): Set of export policy rules
* **fileAccessLogs**: 'Disabled' | 'Enabled' | string (ReadOnly): Flag indicating whether file access logs are enabled for the volume, based on active diagnostic settings present on the volume.
* **fileSystemId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): Unique FileSystem Identifier.
* **isDefaultQuotaEnabled**: bool: Specifies if default quota is enabled for the volume.
* **isLargeVolume**: bool: Specifies whether volume is a Large Volume or Regular Volume.
* **isRestoring**: bool: Restoring
* **kerberosEnabled**: bool: Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
* **keyVaultPrivateEndpointResourceId**: string: The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'.
* **ldapEnabled**: bool: Specifies whether LDAP is enabled or not for a given NFS volume.
* **maximumNumberOfFiles**: int (ReadOnly): Maximum number of files allowed. Needs a service request in order to be changed. Only allowed to be changed if volume quota is more than 4TiB.
* **mountTargets**: [MountTargetProperties](#mounttargetproperties)[] (ReadOnly): List of mount targets
* **networkFeatures**: 'Basic' | 'Basic_Standard' | 'Standard' | 'Standard_Basic' | string: Network features available to the volume, or current state of update.
* **networkSiblingSetId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): Network Sibling Set ID for the the group of volumes sharing networking resources.
* **originatingResourceId**: string (ReadOnly): Id of the snapshot or backup that the volume is restored from.
* **placementRules**: [PlacementKeyValuePairs](#placementkeyvaluepairs)[]: Application specific placement rules for the particular volume
* **protocolTypes**: string[]: Set of protocol types, default NFSv3, CIFS for SMB protocol
* **provisionedAvailabilityZone**: string (ReadOnly): The availability zone where the volume is provisioned. This refers to the logical availability zone where the volume resides.
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **proximityPlacementGroup**: string: Proximity placement group associated with the volume
* **securityStyle**: 'ntfs' | 'unix' | string: The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
* **serviceLevel**: 'Premium' | 'Standard' | 'StandardZRS' | 'Ultra' | string: The service level of the file system
* **smbAccessBasedEnumeration**: 'Disabled' | 'Enabled' | string: Enables access-based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume
* **smbContinuouslyAvailable**: bool: Enables continuously available share property for smb volume. Only applicable for SMB volume
* **smbEncryption**: bool: Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
* **smbNonBrowsable**: 'Disabled' | 'Enabled' | string: Enables non-browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume
* **snapshotDirectoryVisible**: bool: If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (defaults to true).
* **snapshotId**: string: Resource identifier used to identify the Snapshot.
* **storageToNetworkProximity**: 'AcrossT2' | 'Default' | 'T1' | 'T2' | string (ReadOnly): Provides storage to network proximity information for the volume.
* **subnetId**: string (Required): The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
* **t2Network**: string (ReadOnly): T2 network information
* **throughputMibps**: int: Maximum throughput in MiB/s that can be achieved by this volume and this will be accepted as input only for manual qosType volume
* **unixPermissions**: string {minLength: 4, maxLength: 4}: UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users.
* **usageThreshold**: int {minValue: 107374182400, maxValue: 2638827906662400} (Required): Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB, 500Tib for LargeVolume or 2400Tib for LargeVolume on exceptional basis. Specified in bytes.
* **volumeGroupName**: string (ReadOnly): Volume Group Name
* **volumeSpecName**: string: Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log
* **volumeType**: string: What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection

## VolumePropertiesDataProtection
### Properties
* **backup**: [VolumeBackupProperties](#volumebackupproperties): Backup Properties
* **replication**: [ReplicationObject](#replicationobject): Replication properties
* **snapshot**: [VolumeSnapshotProperties](#volumesnapshotproperties): Snapshot properties.
* **volumeRelocation**: [VolumeRelocationProperties](#volumerelocationproperties): VolumeRelocation properties

## VolumePropertiesExportPolicy
### Properties
* **rules**: [ExportPolicyRule](#exportpolicyrule)[]: Export policy rule

## VolumeQuotaRulesProperties
### Properties
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Patching' | 'Succeeded' (ReadOnly): Gets the status of the VolumeQuotaRule at the time the operation was called.
* **quotaSizeInKiBs**: int: Size of quota
* **quotaTarget**: string: UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running ‘id’ or ‘getent’ command for the user or group and SID can be found by running <wmic useraccount where name='user-name' get sid>
* **quotaType**: 'DefaultGroupQuota' | 'DefaultUserQuota' | 'IndividualGroupQuota' | 'IndividualUserQuota' | string: Type of quota

## VolumeRelocationProperties
### Properties
* **readyToBeFinalized**: bool (ReadOnly): Has relocation finished and is ready to be cleaned up
* **relocationRequested**: bool: Has relocation been requested for this volume

## VolumeSnapshotProperties
### Properties
* **snapshotPolicyId**: string: Snapshot Policy ResourceId

## WeeklySchedule
### Properties
* **day**: string: Indicates which weekdays snapshot should be taken, accepts a comma separated list of week day names in english
* **hour**: int: Indicates which hour in UTC timezone a snapshot should be taken
* **minute**: int: Indicates which minute snapshot should be taken
* **snapshotsToKeep**: int: Weekly snapshot count to keep
* **usedBytes**: int: Resource size in bytes, current storage usage for the volume in bytes

