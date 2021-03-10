# Microsoft.NetApp @ 2020-03-01

## Resource Microsoft.NetApp/netAppAccounts@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccountProperties](#accountproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PoolProperties](#poolproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VolumeProperties](#volumeproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SnapshotProperties](#snapshotproperties)
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## AccountProperties
### Properties
* **activeDirectories**: [ActiveDirectory](#activedirectory)[]
* **provisioningState**: string (ReadOnly)

## ActiveDirectory
### Properties
* **activeDirectoryId**: string
* **backupOperators**: string[]
* **dns**: string
* **domain**: string
* **organizationalUnit**: string
* **password**: string
* **site**: string
* **smbServerName**: string
* **status**: string
* **username**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PoolProperties
### Properties
* **poolId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required)
* **size**: int (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeProperties
### Properties
* **baremetalTenantId**: string (ReadOnly)
* **creationToken**: string (Required)
* **dataProtection**: [VolumePropertiesDataProtection](#volumepropertiesdataprotection)
* **exportPolicy**: [VolumePropertiesExportPolicy](#volumepropertiesexportpolicy)
* **fileSystemId**: string (ReadOnly)
* **isRestoring**: bool
* **mountTargets**: [MountTargetProperties](#mounttargetproperties)[]
* **protocolTypes**: string[]
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **snapshotDirectoryVisible**: bool
* **snapshotId**: string
* **subnetId**: string (Required)
* **usageThreshold**: int (Required)
* **volumeType**: string

## VolumePropertiesDataProtection
### Properties
* **replication**: [ReplicationObject](#replicationobject)
* **snapshot**: [VolumeSnapshotProperties](#volumesnapshotproperties)

## ReplicationObject
### Properties
* **endpointType**: 'dst' | 'src'
* **remoteVolumeRegion**: string
* **remoteVolumeResourceId**: string (Required)
* **replicationId**: string
* **replicationSchedule**: '_10minutely' | 'daily' | 'hourly' | 'monthly' | 'weekly' (Required)

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
* **nfsv3**: bool
* **nfsv41**: bool
* **ruleIndex**: int
* **unixReadOnly**: bool
* **unixReadWrite**: bool

## MountTargetProperties
### Properties
* **endIp**: string
* **fileSystemId**: string (Required)
* **gateway**: string
* **ipAddress**: string (ReadOnly)
* **mountTargetId**: string (ReadOnly)
* **netmask**: string
* **smbServerFqdn**: string
* **startIp**: string
* **subnet**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SnapshotProperties
### Properties
* **created**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

