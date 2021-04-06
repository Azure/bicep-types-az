# Microsoft.NetApp @ 2020-09-01

## Resource Microsoft.NetApp/netAppAccounts@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [accountProperties](#accountproperties): NetApp account properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags are a list of key-value pairs that describe the resource
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/backupPolicies@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [backupPolicyProperties](#backuppolicyproperties) (Required): Backup policy properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags are a list of key-value pairs that describe the resource
* **type**: 'Microsoft.NetApp/netAppAccounts/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [poolProperties](#poolproperties) (Required): Pool properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags are a list of key-value pairs that describe the resource
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [volumeProperties](#volumeproperties) (Required): Volume properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags are a list of key-value pairs that describe the resource
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [backupProperties](#backupproperties) (Required): Backup properties
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [snapshotProperties](#snapshotproperties): Snapshot properties
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/snapshotPolicies@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [snapshotPolicyProperties](#snapshotpolicyproperties) (Required): Snapshot policy properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags are a list of key-value pairs that describe the resource
* **type**: 'Microsoft.NetApp/netAppAccounts/snapshotPolicies' (ReadOnly, DeployTimeConstant): The resource type

## accountProperties
### Properties
* **activeDirectories**: [activeDirectory](#activedirectory)[]: Active Directories
* **provisioningState**: string (ReadOnly): Azure lifecycle management

## activeDirectory
### Properties
* **activeDirectoryId**: string: Id of the Active Directory
* **adName**: string: Name of the active directory machine. This optional parameter is used only while creating kerberos volume
* **aesEncryption**: bool: If enabled, AES encryption will be enabled for SMB communication.
* **backupOperators**: string[]: Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier
* **dns**: string: Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
* **domain**: string: Name of the Active Directory domain
* **kdcIP**: string: kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume.
* **ldapSigning**: bool: Specifies whether or not the LDAP traffic needs to be signed.
* **organizationalUnit**: string: The Organizational Unit (OU) within the Windows Active Directory
* **password**: string: Plain text password of Active Directory domain administrator, value is masked in the response
* **securityOperators**: string[]: Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier
* **serverRootCACertificate**: string: When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes.
* **site**: string: The Active Directory site the service will limit Domain Controller discovery to
* **smbServerName**: string: NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
* **status**: 'Created' | 'Deleted' | 'Error' | 'InUse' | 'Updating' (ReadOnly): Status of the Active Directory.
* **statusDetails**: string (ReadOnly): Any details in regards to the Status of the Active Directory
* **username**: string: Username of Active Directory domain administrator

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## backupPolicyProperties
### Properties
* **dailyBackupsToKeep**: int: Daily backups count to keep
* **enabled**: bool: The property to decide policy is enabled or not
* **monthlyBackupsToKeep**: int: Monthly backups count to keep
* **name**: string (ReadOnly): Name of backup policy
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **volumeBackups**: [volumeBackups](#volumebackups)[]: A list of volumes assigned to this policy
* **volumesAssigned**: int: Volumes using current backup policy
* **weeklyBackupsToKeep**: int: Weekly backups count to keep
* **yearlyBackupsToKeep**: int: Yearly backups count to keep

## volumeBackups
### Properties
* **backupsCount**: int: Total count of backups for volume
* **policyEnabled**: bool: Policy enabled
* **volumeName**: string: Volume name

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## poolProperties
### Properties
* **poolId**: string (ReadOnly): UUID v4 used to identify the Pool
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **qosType**: 'Auto' | 'Manual': The qos type of the pool.
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required): The service level of the file system.
* **size**: int (Required): Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).
* **totalThroughputMibps**: int (ReadOnly): Total throughput of pool in Mibps
* **utilizedThroughputMibps**: int (ReadOnly): Utilized throughput of pool in Mibps

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## volumeProperties
### Properties
* **backupId**: string: UUID v4 or resource identifier used to identify the Backup.
* **baremetalTenantId**: string (ReadOnly): Unique Baremetal Tenant Identifier.
* **creationToken**: string (Required): A unique file path for the volume. Used when creating mount targets
* **dataProtection**: [schemas:22_dataProtection](#schemas22dataprotection): DataProtection type volumes include an object containing details of the replication
* **exportPolicy**: [schemas:22_exportPolicy](#schemas22exportpolicy): Set of export policy rules
* **fileSystemId**: string (ReadOnly): Unique FileSystem Identifier.
* **isRestoring**: bool: Restoring
* **kerberosEnabled**: bool: Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
* **mountTargets**: [mountTargetProperties](#mounttargetproperties)[] (ReadOnly): List of mount targets
* **protocolTypes**: string[]: Set of protocol types, default NFSv3, CIFS for SMB protocol
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **securityStyle**: 'ntfs' | 'unix': The security style of volume, default unix, ntfs for dual protocol or CIFS protocol.
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra': The service level of the file system.
* **smbContinuouslyAvailable**: bool: Enables continuously available share property for smb volume. Only applicable for SMB volume
* **smbEncryption**: bool: Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
* **snapshotDirectoryVisible**: bool: If enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots (default to true).
* **snapshotId**: string: UUID v4 or resource identifier used to identify the Snapshot.
* **subnetId**: string (Required): The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
* **throughputMibps**: int:
* **usageThreshold**: int (Required): Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
* **volumeType**: string: What type of volume is this

## schemas:22_dataProtection
### Properties
* **backup**: [volumeBackupProperties](#volumebackupproperties): Volume Backup Properties
* **replication**: [replicationObject](#replicationobject): Replication properties
* **snapshot**: [volumeSnapshotProperties](#volumesnapshotproperties): Volume Snapshot Properties

## volumeBackupProperties
### Properties
* **backupEnabled**: bool: Backup Enabled
* **backupPolicyId**: string: Backup Policy Resource ID
* **policyEnforced**: bool: Policy Enforced
* **vaultId**: string: Vault Resource ID

## replicationObject
### Properties
* **endpointType**: 'dst' | 'src': Indicates whether the local volume is the source or destination for the Volume Replication.
* **remoteVolumeRegion**: string: The remote region for the other end of the Volume Replication.
* **remoteVolumeResourceId**: string (Required): The resource ID of the remote volume.
* **replicationId**: string: Id
* **replicationSchedule**: '_10minutely' | 'daily' | 'hourly' (Required): Schedule.

## volumeSnapshotProperties
### Properties
* **snapshotPolicyId**: string: Snapshot Policy ResourceId

## schemas:22_exportPolicy
### Properties
* **rules**: [exportPolicyRule](#exportpolicyrule)[]: Export policy rule

## exportPolicyRule
### Properties
* **allowedClients**: string: Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
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

## mountTargetProperties
### Properties
* **fileSystemId**: string (Required): UUID v4 used to identify the MountTarget
* **ipAddress**: string (ReadOnly): The mount target's IPv4 address
* **mountTargetId**: string (ReadOnly): UUID v4 used to identify the MountTarget
* **smbServerFqdn**: string: The SMB server's Fully Qualified Domain Name, FQDN

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## backupProperties
### Properties
* **backupId**: string (ReadOnly): UUID v4 used to identify the Backup
* **backupType**: 'Manual' | 'Scheduled' (ReadOnly): Type of backup Manual or Scheduled.
* **creationDate**: string (ReadOnly): The creation date of the backup
* **label**: string: Label for backup
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **size**: int (ReadOnly): Size of backup

## snapshotProperties
### Properties
* **created**: string (ReadOnly): The creation date of the snapshot
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **snapshotId**: string (ReadOnly): UUID v4 used to identify the Snapshot

## snapshotPolicyProperties
### Properties
* **dailySchedule**: [dailySchedule](#dailyschedule): Daily Schedule properties
* **enabled**: bool: The property to decide policy is enabled or not
* **hourlySchedule**: [hourlySchedule](#hourlyschedule): Hourly Schedule properties
* **monthlySchedule**: [monthlySchedule](#monthlyschedule): Monthly Schedule properties
* **name**: string (ReadOnly): Snapshot policy name
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **weeklySchedule**: [weeklySchedule](#weeklyschedule): Weekly Schedule properties, make a snapshot every week at a specific day or days

## dailySchedule
### Properties
* **hour**: int: Indicates which hour in UTC timezone a snapshot should be taken
* **minute**: int: Indicates which minute snapshot should be taken
* **snapshotsToKeep**: int: Daily snapshot count to keep
* **usedBytes**: int: Resource size in bytes, current storage usage for the volume in bytes

## hourlySchedule
### Properties
* **minute**: int: Indicates which minute snapshot should be taken
* **snapshotsToKeep**: int: Hourly snapshot count to keep
* **usedBytes**: int: Resource size in bytes, current storage usage for the volume in bytes

## monthlySchedule
### Properties
* **daysOfMonth**: string: Indicates which days of the month snapshot should be taken. A comma delimited string.
* **hour**: int: Indicates which hour in UTC timezone a snapshot should be taken
* **minute**: int: Indicates which minute snapshot should be taken
* **snapshotsToKeep**: int: Monthly snapshot count to keep
* **usedBytes**: int: Resource size in bytes, current storage usage for the volume in bytes

## weeklySchedule
### Properties
* **day**: string: Indicates which weekdays snapshot should be taken, accepts a comma separated list of week day names in english
* **hour**: int: Indicates which hour in UTC timezone a snapshot should be taken
* **minute**: int: Indicates which minute snapshot should be taken
* **snapshotsToKeep**: int: Weekly snapshot count to keep
* **usedBytes**: int: Resource size in bytes, current storage usage for the volume in bytes

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

