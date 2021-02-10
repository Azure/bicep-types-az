# Microsoft.NetApp @ 2020-11-01

## Resource Microsoft.NetApp/netAppAccounts@2020-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: accountProperties
* **systemData**: systemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/backupPolicies@2020-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: backupPolicyProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/backupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2020-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: poolProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2020-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: volumeProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2020-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: backupProperties (Required)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2020-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: snapshotProperties
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/snapshotPolicies@2020-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: snapshotPolicyProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/snapshotPolicies' (ReadOnly, DeployTimeConstant)

## accountProperties
### Properties
* **activeDirectories**: activeDirectory[]
* **encryption**: accountEncryption
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
* **ldapOverTLS**: bool
* **ldapSigning**: bool
* **organizationalUnit**: string
* **password**: string
* **securityOperators**: string[]
* **serverRootCACertificate**: string
* **site**: string
* **smbServerName**: string
* **status**: 'Created' | 'Deleted' | 'Error' | 'InUse' | 'Updating' (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **username**: string

## accountEncryption
### Properties
* **keySource**: 'Microsoft.NetApp'

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## volumeProperties
### Properties
* **backupId**: string
* **baremetalTenantId**: string (ReadOnly)
* **creationToken**: string (Required)
* **dataProtection**: schemas:23_dataProtection
* **encryptionKeySource**: string
* **exportPolicy**: schemas:23_exportPolicy
* **fileSystemId**: string (ReadOnly)
* **isRestoring**: bool
* **kerberosEnabled**: bool
* **mountTargets**: mountTargetProperties[] (ReadOnly)
* **protocolTypes**: string[]
* **provisioningState**: string (ReadOnly)
* **securityStyle**: 'ntfs' | 'unix'
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **smbContinuouslyAvailable**: bool
* **smbEncryption**: bool
* **snapshotDirectoryVisible**: bool
* **snapshotId**: string
* **subnetId**: string (Required)
* **throughputMibps**: int
* **usageThreshold**: int (Required)
* **volumeType**: string

## schemas:23_dataProtection
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

## schemas:23_exportPolicy
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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## backupProperties
### Properties
* **backupId**: string (ReadOnly)
* **backupType**: string (ReadOnly)
* **creationDate**: string (ReadOnly)
* **failureReason**: string (ReadOnly)
* **label**: string
* **provisioningState**: string (ReadOnly)
* **size**: int (ReadOnly)

## snapshotProperties
### Properties
* **created**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

