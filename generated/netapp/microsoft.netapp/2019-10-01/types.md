# Microsoft.NetApp @ 2019-10-01

## Resource Microsoft.NetApp/netAppAccounts@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PoolProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VolumeProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SnapshotProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## AccountProperties
### Properties
* **activeDirectories**: ActiveDirectory[]
* **provisioningState**: string (ReadOnly)

## ActiveDirectory
### Properties
* **activeDirectoryId**: string
* **dns**: string
* **domain**: string
* **organizationalUnit**: string
* **password**: string
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
* **dataProtection**: VolumePropertiesDataProtection
* **exportPolicy**: VolumePropertiesExportPolicy
* **fileSystemId**: string (ReadOnly)
* **isRestoring**: bool
* **mountTargets**: MountTargetProperties[] (ReadOnly)
* **protocolTypes**: string[]
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **snapshotId**: string
* **subnetId**: string (Required)
* **usageThreshold**: int (Required)
* **usedBytes**: int (ReadOnly)
* **volumeType**: string

## VolumePropertiesDataProtection
### Properties
* **replication**: ReplicationObject

## ReplicationObject
### Properties
* **endpointType**: 'dst' | 'src'
* **remoteVolumeRegion**: string
* **remoteVolumeResourceId**: string (Required)
* **replicationId**: string
* **replicationSchedule**: '_10minutely' | 'daily' | 'hourly' (Required)

## VolumePropertiesExportPolicy
### Properties
* **rules**: ExportPolicyRule[]

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
* **provisioningState**: string (ReadOnly)
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
* **fileSystemId**: string
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

