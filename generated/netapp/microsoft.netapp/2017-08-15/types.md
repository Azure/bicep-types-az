# Microsoft.NetApp @ 2017-08-15

## Resource Microsoft.NetApp/netAppAccounts@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties) (Required): NetApp Account properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties) (Required): Capacity pool properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (Required): Volume properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2017-08-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties) (Required): Snapshot Properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## AccountProperties
### Properties
* **activeDirectories**: [ActiveDirectory](#activedirectory)[]: Active Directories
* **provisioningState**: string (ReadOnly): Azure lifecycle management

## ActiveDirectory
### Properties
* **activeDirectoryId**: string: Id of the Active Directory
* **dNS**: string: Comma separated list of DNS server IP addresses for the Active Directory domain
* **domain**: string: Name of the Active Directory domain
* **organizationalUnit**: string: The Organizational Unit (OU) within the Windows Active Directory
* **password**: string: Plain text password of Active Directory domain administrator
* **sMBServerName**: string: NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
* **status**: string: Status of the Active Directory
* **username**: string: Username of Active Directory domain administrator

## ExportPolicyRule
### Properties
* **allowedClients**: string: Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
* **cifs**: bool: Allows CIFS protocol
* **nfsv3**: bool: Allows NFSv3 protocol
* **nfsv4**: bool: Allows NFSv4 protocol
* **ruleIndex**: int: Order index
* **unixReadOnly**: bool: Read only access
* **unixReadWrite**: bool: Read and write access

## PoolProperties
### Properties
* **poolId**: string (ReadOnly): UUID v4 used to identify the Pool
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' | string: The service level of the file system
* **size**: int: Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).

## SnapshotProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of the snapshot
* **fileSystemId**: string (Required): UUID v4 used to identify the FileSystem
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **snapshotId**: string (ReadOnly): UUID v4 used to identify the Snapshot

## VolumeProperties
### Properties
* **creationToken**: string (Required): A unique file path for the volume. Used when creating mount targets
* **exportPolicy**: [VolumePropertiesExportPolicy](#volumepropertiesexportpolicy): Export policy rule
* **fileSystemId**: string (ReadOnly): Unique FileSystem Identifier.
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' | string (Required): The service level of the file system
* **subnetId**: string: The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
* **usageThreshold**: int: Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB.

## VolumePropertiesExportPolicy
### Properties
* **rules**: [ExportPolicyRule](#exportpolicyrule)[]

