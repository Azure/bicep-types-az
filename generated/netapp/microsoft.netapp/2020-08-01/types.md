# Microsoft.NetApp @ 2020-08-01

## Resource Microsoft.NetApp/netAppAccounts@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccountProperties](#accountproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/backupPolicies@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupPolicyProperties](#backuppolicyproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.NetApp/netAppAccounts/backupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PoolProperties](#poolproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VolumeProperties](#volumeproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupProperties](#backupproperties) (Required)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SnapshotProperties](#snapshotproperties)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/snapshotPolicies@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SnapshotPolicyProperties](#snapshotpolicyproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.NetApp/netAppAccounts/snapshotPolicies' (ReadOnly, DeployTimeConstant)

## AccountProperties
### Properties
* **activeDirectories**: [ActiveDirectory](#activedirectory)[]
* **provisioningState**: string (ReadOnly)

## ActiveDirectory
### Properties
* **activeDirectoryId**: string
* **adName**: string
* **aesEncryption**: bool
* **backupOperators**: string[]
* **dns**: string
* **domain**: string
* **kdcIP**: string
* **ldapSigning**: bool
* **organizationalUnit**: string
* **password**: string
* **serverRootCACertificate**: string
* **site**: string
* **smbServerName**: string
* **status**: 'Created' | 'Deleted' | 'Error' | 'InUse' | 'Updating' (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **username**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupPolicyProperties
### Properties
* **dailyBackupsToKeep**: int
* **enabled**: bool
* **monthlyBackupsToKeep**: int
* **name**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **volumeBackups**: [VolumeBackups](#volumebackups)[]
* **volumesAssigned**: int
* **weeklyBackupsToKeep**: int
* **yearlyBackupsToKeep**: int

## VolumeBackups
### Properties
* **backupsCount**: int
* **policyEnabled**: bool
* **volumeName**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PoolProperties
### Properties
* **poolId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **qosType**: 'Auto' | 'Manual'
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required)
* **size**: int (Required)
* **totalThroughputMibps**: int (ReadOnly)
* **utilizedThroughputMibps**: int (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeProperties
### Properties
* **backupId**: string
* **baremetalTenantId**: string (ReadOnly)
* **creationToken**: string (Required)
* **dataProtection**: [VolumePropertiesDataProtection](#volumepropertiesdataprotection)
* **exportPolicy**: [VolumePropertiesExportPolicy](#volumepropertiesexportpolicy)
* **fileSystemId**: string (ReadOnly)
* **isRestoring**: bool
* **kerberosEnabled**: bool
* **mountTargets**: [MountTargetProperties](#mounttargetproperties)[] (ReadOnly)
* **protocolTypes**: string[]
* **provisioningState**: string (ReadOnly)
* **securityStyle**: 'ntfs' | 'unix'
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **snapshotDirectoryVisible**: bool
* **snapshotId**: string
* **subnetId**: string (Required)
* **throughputMibps**: int
* **usageThreshold**: int (Required)
* **volumeType**: string

## VolumePropertiesDataProtection
### Properties
* **backup**: [VolumeBackupProperties](#volumebackupproperties)
* **replication**: [ReplicationObject](#replicationobject)
* **snapshot**: [VolumeSnapshotProperties](#volumesnapshotproperties)

## VolumeBackupProperties
### Properties
* **backupEnabled**: bool
* **backupPolicyId**: string
* **policyEnforced**: bool
* **vaultId**: string

## ReplicationObject
### Properties
* **endpointType**: 'dst' | 'src'
* **remoteVolumeRegion**: string
* **remoteVolumeResourceId**: string (Required)
* **replicationId**: string
* **replicationSchedule**: '_10minutely' | 'daily' | 'hourly' (Required)

## VolumeSnapshotProperties
### Properties
* **snapshotPolicyId**: string

## VolumePropertiesExportPolicy
### Properties
* **rules**: [ExportPolicyRule](#exportpolicyrule)[]

## ExportPolicyRule
### Properties
* **allowedClients**: string
* **cifs**: bool
* **hasRootAccess**: bool
* **kerberos5iReadOnly**: bool
* **kerberos5iReadWrite**: bool
* **kerberos5pReadOnly**: bool
* **kerberos5pReadWrite**: bool
* **kerberos5ReadOnly**: bool
* **kerberos5ReadWrite**: bool
* **nfsv3**: bool
* **nfsv41**: bool
* **ruleIndex**: int
* **unixReadOnly**: bool
* **unixReadWrite**: bool

## MountTargetProperties
### Properties
* **fileSystemId**: string (Required)
* **ipAddress**: string (ReadOnly)
* **mountTargetId**: string (ReadOnly)
* **smbServerFqdn**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupProperties
### Properties
* **backupId**: string (ReadOnly)
* **backupType**: string (ReadOnly)
* **creationDate**: string (ReadOnly)
* **label**: string
* **provisioningState**: string (ReadOnly)
* **size**: int (ReadOnly)

## SnapshotProperties
### Properties
* **created**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

## SnapshotPolicyProperties
### Properties
* **dailySchedule**: [DailySchedule](#dailyschedule)
* **enabled**: bool
* **hourlySchedule**: [HourlySchedule](#hourlyschedule)
* **monthlySchedule**: [MonthlySchedule](#monthlyschedule)
* **name**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **weeklySchedule**: [WeeklySchedule](#weeklyschedule)

## DailySchedule
### Properties
* **hour**: int
* **minute**: int
* **snapshotsToKeep**: int
* **usedBytes**: int

## HourlySchedule
### Properties
* **minute**: int
* **snapshotsToKeep**: int
* **usedBytes**: int

## MonthlySchedule
### Properties
* **daysOfMonth**: string
* **hour**: int
* **minute**: int
* **snapshotsToKeep**: int
* **usedBytes**: int

## WeeklySchedule
### Properties
* **day**: string
* **hour**: int
* **minute**: int
* **snapshotsToKeep**: int
* **usedBytes**: int

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

