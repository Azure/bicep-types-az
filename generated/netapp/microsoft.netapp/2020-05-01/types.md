# Microsoft.NetApp @ 2020-05-01

## Resource Microsoft.NetApp/netAppAccounts@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: accountProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/backupPolicies@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: backupPolicyProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/backupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: poolProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: volumeProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: backupProperties (Required)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: snapshotProperties
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/snapshotPolicies@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: snapshotPolicyProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/snapshotPolicies' (ReadOnly, DeployTimeConstant)

## accountProperties
### Properties
* **activeDirectories**: activeDirectory[]
* **provisioningState**: string (ReadOnly)

## activeDirectory
### Properties
* **activeDirectoryId**: string
* **adName**: string
* **backupOperators**: string[]
* **dns**: string
* **domain**: string
* **kdcIP**: string
* **organizationalUnit**: string
* **password**: string
* **site**: string
* **smbServerName**: string
* **status**: string
* **username**: string

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
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required)
* **size**: int (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **snapshotDirectoryVisible**: bool
* **snapshotId**: string
* **subnetId**: string (Required)
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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## backupProperties
### Properties
* **backupType**: string (ReadOnly)
* **creationDate**: string (ReadOnly)
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

