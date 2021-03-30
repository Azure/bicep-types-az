# Microsoft.NetApp @ 2017-08-15

## Resource Microsoft.NetApp/netAppAccounts@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [accountProperties](#accountproperties) (Required): NetApp account properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [poolProperties](#poolproperties) (Required): Pool properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [volumeProperties](#volumeproperties) (Required): Volume properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [snapshotProperties](#snapshotproperties) (Required): Snapshot properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## accountProperties
### Properties
* **activeDirectories**: [activeDirectory](#activedirectory)[]: Active Directories
* **provisioningState**: string (ReadOnly): Azure lifecycle management

## activeDirectory
### Properties
* **activeDirectoryId**: string: Id of the Active Directory
* **dNS**: string: Comma separated list of DNS server IP addresses for the Active Directory domain
* **domain**: string: Name of the Active Directory domain
* **organizationalUnit**: string: The Organizational Unit (OU) within the Windows Active Directory
* **password**: string: Plain text password of Active Directory domain administrator
* **sMBServerName**: string: NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
* **status**: string: Status of the Active Directory
* **username**: string: Username of Active Directory domain administrator

## poolProperties
### Properties
* **poolId**: string (ReadOnly): UUID v4 used to identify the Pool
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra': The service level of the file system. Possible values include: 'Standard', 'Premium', 'Ultra'
* **size**: int: Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).

## volumeProperties
### Properties
* **creationToken**: string (Required): A unique file path for the volume. Used when creating mount targets
* **exportPolicy**: [schemas:19_exportPolicy](#schemas19exportpolicy): Export policy rule
* **fileSystemId**: string (ReadOnly): Unique FileSystem Identifier.
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required): The service level of the file system. Possible values include: 'Standard', 'Premium', 'Ultra'
* **subnetId**: string: The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
* **usageThreshold**: int: Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB.

## schemas:19_exportPolicy
### Properties
* **rules**: [exportPolicyRule](#exportpolicyrule)[]:

## exportPolicyRule
### Properties
* **allowedClients**: string: Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
* **cifs**: bool: Allows CIFS protocol
* **nfsv3**: bool: Allows NFSv3 protocol
* **nfsv4**: bool: Allows NFSv4 protocol
* **ruleIndex**: int: Order index
* **unixReadOnly**: bool: Read only access
* **unixReadWrite**: bool: Read and write access

## snapshotProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of the snapshot
* **fileSystemId**: string (Required): UUID v4 used to identify the FileSystem
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **snapshotId**: string (ReadOnly): UUID v4 used to identify the Snapshot

