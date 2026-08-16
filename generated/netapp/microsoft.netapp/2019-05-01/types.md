# Microsoft.NetApp @ 2019-05-01

## Resource Microsoft.NetApp/netAppAccounts@2019-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): NetApp Account properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2019-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties) (Required): Capacity pool properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2019-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (Required): Volume properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2019-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Snapshot Properties
* **tags**: any: Resource tags
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Function checkFilePathAvailability (Microsoft.NetApp/locations@2019-05-01)
* **Resource**: Microsoft.NetApp/locations
* **ApiVersion**: 2019-05-01
* **Input**: any
* **Output**: [ResourceNameAvailability](#resourcenameavailability)

## Function checkNameAvailability (Microsoft.NetApp/locations@2019-05-01)
* **Resource**: Microsoft.NetApp/locations
* **ApiVersion**: 2019-05-01
* **Input**: any
* **Output**: [ResourceNameAvailability](#resourcenameavailability)

## AccountProperties
### Properties
* **activeDirectories**: [ActiveDirectory](#activedirectory)[]: Active Directories
* **provisioningState**: string (ReadOnly): Azure lifecycle management

## ActiveDirectory
### Properties
* **activeDirectoryId**: string: Id of the Active Directory
* **dns**: string: Comma separated list of DNS server IP addresses for the Active Directory domain
* **domain**: string: Name of the Active Directory domain
* **organizationalUnit**: string: The Organizational Unit (OU) within the Windows Active Directory
* **password**: string: Plain text password of Active Directory domain administrator
* **smbServerName**: string: NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
* **status**: string: Status of the Active Directory
* **username**: string: Username of Active Directory domain administrator

## ExportPolicyRule
### Properties
* **allowedClients**: string: Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
* **cifs**: bool: Allows CIFS protocol
* **nfsv3**: bool: Allows NFSv3 protocol
* **nfsv4**: bool: Deprecated: Will use the NFSv4.1 protocol, please use swagger version 2019-07-01 or later
* **ruleIndex**: int: Order index
* **unixReadOnly**: bool: Read only access
* **unixReadWrite**: bool: Read and write access

## MountTargetProperties
### Properties
* **endIp**: string: The end of IPv4 address range to use when creating a new mount target
* **fileSystemId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (Required): UUID v4 used to identify the MountTarget
* **gateway**: string: The gateway of the IPv4 address range to use when creating a new mount target
* **ipAddress**: string (ReadOnly): The mount target's IPv4 address
* **mountTargetId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): UUID v4 used to identify the MountTarget
* **netmask**: string: The netmask of the IPv4 address range to use when creating a new mount target
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **smbServerFqdn**: string: The SMB server's Fully Qualified Domain Name, FQDN
* **startIp**: string: The start of IPv4 address range to use when creating a new mount target
* **subnet**: string: The subnet

## PoolProperties
### Properties
* **poolId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): UUID v4 used to identify the Pool
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' | string (Required): The service level of the file system
* **size**: int {minValue: 4398046511104, maxValue: 549755813888000} (Required): Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).

## ResourceNameAvailability
### Properties
* **isAvailable**: bool: <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both.
* **message**: string: If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name.
* **reason**: 'AlreadyExists' | 'Invalid' | string: <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable.

## SnapshotProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of the snapshot
* **fileSystemId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"}: UUID v4 used to identify the FileSystem
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **snapshotId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): UUID v4 used to identify the Snapshot

## VolumeProperties
### Properties
* **baremetalTenantId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): Unique Baremetal Tenant Identifier.
* **creationToken**: string (Required): A unique file path for the volume. Used when creating mount targets
* **exportPolicy**: [VolumePropertiesExportPolicy](#volumepropertiesexportpolicy): Set of export policy rules
* **fileSystemId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): Unique FileSystem Identifier.
* **mountTargets**: [MountTargetProperties](#mounttargetproperties)[]: List of mount targets
* **protocolTypes**: string[]: Set of protocol types
* **provisioningState**: string (ReadOnly): Azure lifecycle management
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' | string: The service level of the file system
* **snapshotId**: string {minLength: 36, maxLength: 36, pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"}: UUID v4 used to identify the Snapshot
* **subnetId**: string (Required): The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
* **usageThreshold**: int {minValue: 107374182400, maxValue: 109951162777600} (Required): Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.

## VolumePropertiesExportPolicy
### Properties
* **rules**: [ExportPolicyRule](#exportpolicyrule)[]: Export policy rule

