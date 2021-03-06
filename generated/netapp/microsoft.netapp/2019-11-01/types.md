# Microsoft.NetApp @ 2019-11-01

## Resource Microsoft.NetApp/netAppAccounts@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): NetApp account properties
* **tags**: [ResourceTags](#resourcetags): Tags are a list of key-value pairs that describe the resource
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties) (Required): Pool properties
* **tags**: [ResourceTags](#resourcetags): Tags are a list of key-value pairs that describe the resource
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (Required): Volume properties
* **tags**: [ResourceTags](#resourcetags): Tags are a list of key-value pairs that describe the resource
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Snapshot properties
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## AccountProperties
### Properties
* **activeDirectories**: [ActiveDirectory](#activedirectory)[]: Active Directories
* **provisioningState**: string (ReadOnly): Azure lifecycle management

## ActiveDirectory
### Properties
* **activeDirectoryId**: string: Id of the Active Directory
* **dns**: string: Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
* **domain**: string: Name of the Active Directory domain
* **organizationalUnit**: string: The Organizational Unit (OU) within the Windows Active Directory
* **password**: string: Plain text password of Active Directory domain administrator
* **site**: string: The Active Directory site the service will limit Domain Controller discovery to
* **smbServerName**: string: NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
* **status**: string: Status of the Active Directory
* **username**: string: Username of Active Directory domain administrator

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PoolProperties
### Properties
* **poolId**: string (ReadOnly): UUID v4 used to identify the Pool
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required): The service level of the file system
* **size**: int (Required): Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeProperties
### Properties
* **baremetalTenantId**: string (ReadOnly): Unique Baremetal Tenant Identifier.
* **creationToken**: string (Required): A unique file path for the volume. Used when creating mount targets
* **dataProtection**: [VolumePropertiesDataProtection](#volumepropertiesdataprotection): DataProtection type volumes include an object containing details of the replication
* **exportPolicy**: [VolumePropertiesExportPolicy](#volumepropertiesexportpolicy): Set of export policy rules
* **fileSystemId**: string (ReadOnly): Unique FileSystem Identifier.
* **isRestoring**: bool: Restoring
* **mountTargets**: [MountTargetProperties](#mounttargetproperties)[] (ReadOnly): List of mount targets
* **protocolTypes**: string[]: Set of protocol types, default NFSv3, CIFS for SMB protocol
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra': The service level of the file system
* **snapshotId**: string: UUID v4 or resource identifier used to identify the Snapshot.
* **subnetId**: string (Required): The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
* **usageThreshold**: int (Required): Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
* **usedBytes**: int (ReadOnly): Resource size in bytes, current storage usage for the volume in bytes
* **volumeType**: string: What type of volume is this

## VolumePropertiesDataProtection
### Properties
* **replication**: [ReplicationObject](#replicationobject): Replication properties

## ReplicationObject
### Properties
* **endpointType**: 'dst' | 'src': Indicates whether the local volume is the source or destination for the Volume Replication
* **remoteVolumeRegion**: string: The remote region for the other end of the Volume Replication.
* **remoteVolumeResourceId**: string (Required): The resource ID of the remote volume.
* **replicationId**: string: Id
* **replicationSchedule**: '_10minutely' | 'daily' | 'hourly' (Required): Schedule

## VolumePropertiesExportPolicy
### Properties
* **rules**: [ExportPolicyRule](#exportpolicyrule)[]: Export policy rule

## ExportPolicyRule
### Properties
* **allowedClients**: string: Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
* **cifs**: bool: Allows CIFS protocol
* **nfsv3**: bool: Allows NFSv3 protocol
* **nfsv41**: bool: Allows NFSv4.1 protocol
* **ruleIndex**: int: Order index
* **unixReadOnly**: bool: Read only access
* **unixReadWrite**: bool: Read and write access

## MountTargetProperties
### Properties
* **endIp**: string: The end of IPv4 address range to use when creating a new mount target
* **fileSystemId**: string (Required): UUID v4 used to identify the MountTarget
* **gateway**: string: The gateway of the IPv4 address range to use when creating a new mount target
* **ipAddress**: string (ReadOnly): The mount target's IPv4 address
* **mountTargetId**: string (ReadOnly): UUID v4 used to identify the MountTarget
* **netmask**: string: The netmask of the IPv4 address range to use when creating a new mount target
* **smbServerFqdn**: string: The SMB server's Fully Qualified Domain Name, FQDN
* **startIp**: string: The start of IPv4 address range to use when creating a new mount target
* **subnet**: string: The subnet

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SnapshotProperties
### Properties
* **created**: string (ReadOnly): The creation date of the snapshot
* **fileSystemId**: string: UUID v4 used to identify the FileSystem
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **snapshotId**: string (ReadOnly): UUID v4 used to identify the Snapshot

