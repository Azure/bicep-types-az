# Microsoft.NetApp @ 2019-05-01

## Resource Microsoft.NetApp/netAppAccounts@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccountProperties](#accountproperties)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PoolProperties](#poolproperties) (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VolumeProperties](#volumeproperties) (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SnapshotProperties](#snapshotproperties)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## AccountProperties
### Properties
* **activeDirectories**: [ActiveDirectory](#activedirectory)[]
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

## PoolProperties
### Properties
* **poolId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required)
* **size**: int (Required)

## VolumeProperties
### Properties
* **baremetalTenantId**: string (ReadOnly)
* **creationToken**: string (Required)
* **exportPolicy**: [VolumePropertiesExportPolicy](#volumepropertiesexportpolicy)
* **fileSystemId**: string (ReadOnly)
* **mountTargets**: [MountTargetProperties](#mounttargetproperties)[]
* **protocolTypes**: string[]
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **snapshotId**: string
* **subnetId**: string (Required)
* **usageThreshold**: int (Required)

## VolumePropertiesExportPolicy
### Properties
* **rules**: [ExportPolicyRule](#exportpolicyrule)[]

## ExportPolicyRule
### Properties
* **allowedClients**: string
* **cifs**: bool
* **nfsv3**: bool
* **nfsv4**: bool
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

## SnapshotProperties
### Properties
* **creationDate**: string (ReadOnly)
* **fileSystemId**: string
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

