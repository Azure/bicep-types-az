# Microsoft.NetApp @ 2017-08-15

## Resource Microsoft.NetApp/netAppAccounts@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PoolProperties (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VolumeProperties (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SnapshotProperties (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## AccountProperties
### Properties
* **activeDirectories**: ActiveDirectory[]
* **provisioningState**: string (ReadOnly)

## ActiveDirectory
### Properties
* **activeDirectoryId**: string
* **dNS**: string
* **domain**: string
* **organizationalUnit**: string
* **password**: string
* **sMBServerName**: string
* **status**: string
* **username**: string

## PoolProperties
### Properties
* **poolId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **size**: int

## VolumeProperties
### Properties
* **creationToken**: string (Required)
* **exportPolicy**: VolumePropertiesExportPolicy
* **fileSystemId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required)
* **subnetId**: string
* **usageThreshold**: int

## VolumePropertiesExportPolicy
### Properties
* **rules**: ExportPolicyRule[]

## ExportPolicyRule
### Properties
* **allowedClients**: string
* **cifs**: bool
* **nfsv3**: bool
* **nfsv4**: bool
* **ruleIndex**: int
* **unixReadOnly**: bool
* **unixReadWrite**: bool

## SnapshotProperties
### Properties
* **creationDate**: string (ReadOnly)
* **fileSystemId**: string (Required)
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

