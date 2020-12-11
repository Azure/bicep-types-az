# Microsoft.NetApp @ 2020-07-01

## Microsoft.NetApp/netAppAccounts
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: accountProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## accountProperties
### Properties
* **activeDirectories**: activeDirectory[]
* **provisioningState**: string (ReadOnly)

## activeDirectory
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.NetApp/netAppAccounts/backupPolicies
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: backupPolicyProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/backupPolicies' (ReadOnly, DeployTimeConstant)

## backupPolicyProperties
### Properties
* **dailyBackupsToKeep**: int
* **enabled**: bool
* **monthlyBackupsToKeep**: int
* **name**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **volumeBackups**: volumeBackups[]
* **volumesAssigned**: int
* **weeklyBackupsToKeep**: int
* **yearlyBackupsToKeep**: int

## volumeBackups
### Properties
* **backupsCount**: int
* **policyEnabled**: bool
* **volumeName**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.NetApp/netAppAccounts/capacityPools
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: poolProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## poolProperties
### Properties
* **poolId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **qosType**: 'Auto' | 'Manual'
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required)
* **size**: int (Required)
* **totalThroughputMibps**: int (ReadOnly)
* **utilizedThroughputMibps**: int (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: volumeProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## volumeProperties
### Properties
* **backupId**: string
* **baremetalTenantId**: string (ReadOnly)
* **creationToken**: string (Required)
* **dataProtection**: schemas:22_dataProtection
* **exportPolicy**: schemas:22_exportPolicy
* **fileSystemId**: string (ReadOnly)
* **isRestoring**: bool
* **kerberosEnabled**: bool
* **mountTargets**: mountTargetProperties[]
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

## schemas:22_dataProtection
### Properties
* **backup**: volumeBackupProperties
* **replication**: replicationObject
* **snapshot**: volumeSnapshotProperties

## volumeBackupProperties
### Properties
* **backupEnabled**: bool
* **backupPolicyId**: string
* **policyEnforced**: bool
* **vaultId**: string

## replicationObject
### Properties
* **endpointType**: 'dst' | 'src'
* **remoteVolumeRegion**: string
* **remoteVolumeResourceId**: string (Required)
* **replicationId**: string
* **replicationSchedule**: '_10minutely' | 'daily' | 'hourly' (Required)

## volumeSnapshotProperties
### Properties
* **snapshotPolicyId**: string

## schemas:22_exportPolicy
### Properties
* **rules**: exportPolicyRule[]

## exportPolicyRule
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

## mountTargetProperties
### Properties
* **fileSystemId**: string (Required)
* **ipAddress**: string (ReadOnly)
* **mountTargetId**: string (ReadOnly)
* **smbServerFqdn**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: backupProperties (Required)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups' (ReadOnly, DeployTimeConstant)

## backupProperties
### Properties
* **backupId**: string (ReadOnly)
* **backupType**: string (ReadOnly)
* **creationDate**: string (ReadOnly)
* **label**: string
* **provisioningState**: string (ReadOnly)
* **size**: int (ReadOnly)

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: snapshotProperties
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## snapshotProperties
### Properties
* **created**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

## Microsoft.NetApp/netAppAccounts/snapshotPolicies
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: snapshotPolicyProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/snapshotPolicies' (ReadOnly, DeployTimeConstant)

## snapshotPolicyProperties
### Properties
* **dailySchedule**: dailySchedule
* **enabled**: bool
* **hourlySchedule**: hourlySchedule
* **monthlySchedule**: monthlySchedule
* **name**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **weeklySchedule**: weeklySchedule

## dailySchedule
### Properties
* **hour**: int
* **minute**: int
* **snapshotsToKeep**: int
* **usedBytes**: int

## hourlySchedule
### Properties
* **minute**: int
* **snapshotsToKeep**: int
* **usedBytes**: int

## monthlySchedule
### Properties
* **daysOfMonth**: string
* **hour**: int
* **minute**: int
* **snapshotsToKeep**: int
* **usedBytes**: int

## weeklySchedule
### Properties
* **day**: string
* **hour**: int
* **minute**: int
* **snapshotsToKeep**: int
* **usedBytes**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

