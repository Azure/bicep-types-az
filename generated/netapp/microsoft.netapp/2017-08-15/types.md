# Microsoft.NetApp @ 2017-08-15

## Microsoft.NetApp/netAppAccounts
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: accountProperties (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## accountProperties
### Properties
* **activeDirectories**: activeDirectory[]
* **provisioningState**: string (ReadOnly)

## activeDirectory
### Properties
* **activeDirectoryId**: string
* **dNS**: string
* **domain**: string
* **organizationalUnit**: string
* **password**: string
* **sMBServerName**: string
* **status**: string
* **username**: string

## Microsoft.NetApp/netAppAccounts/capacityPools
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: poolProperties (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## poolProperties
### Properties
* **poolId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **size**: int

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: volumeProperties (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## volumeProperties
### Properties
* **creationToken**: string (Required)
* **exportPolicy**: schemas:19_exportPolicy
* **fileSystemId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required)
* **subnetId**: string
* **usageThreshold**: int

## schemas:19_exportPolicy
### Properties
* **rules**: exportPolicyRule[]

## exportPolicyRule
### Properties
* **allowedClients**: string
* **cifs**: bool
* **nfsv3**: bool
* **nfsv4**: bool
* **ruleIndex**: int
* **unixReadOnly**: bool
* **unixReadWrite**: bool

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: snapshotProperties (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## snapshotProperties
### Properties
* **creationDate**: string (ReadOnly)
* **fileSystemId**: string (Required)
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

