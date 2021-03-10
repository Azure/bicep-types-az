# Microsoft.NetApp @ 2017-08-15

## Resource Microsoft.NetApp/netAppAccounts@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [accountProperties](#accountproperties) (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [poolProperties](#poolproperties) (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [volumeProperties](#volumeproperties) (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [snapshotProperties](#snapshotproperties) (Required)
* **tags**: any
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## accountProperties
### Properties
* **activeDirectories**: [activeDirectory](#activedirectory)[]
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

## poolProperties
### Properties
* **poolId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **size**: int

## volumeProperties
### Properties
* **creationToken**: string (Required)
* **exportPolicy**: [schemas:19_exportPolicy](#schemas19exportpolicy)
* **fileSystemId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required)
* **subnetId**: string
* **usageThreshold**: int

## schemas:19_exportPolicy
### Properties
* **rules**: [exportPolicyRule](#exportpolicyrule)[]

## exportPolicyRule
### Properties
* **allowedClients**: string
* **cifs**: bool
* **nfsv3**: bool
* **nfsv4**: bool
* **ruleIndex**: int
* **unixReadOnly**: bool
* **unixReadWrite**: bool

## snapshotProperties
### Properties
* **creationDate**: string (ReadOnly)
* **fileSystemId**: string (Required)
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

