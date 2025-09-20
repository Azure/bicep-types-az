# Microsoft.FileShares @ 2025-06-01-preview

## Resource Microsoft.FileShares/fileShares@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-z]|[0-9])([a-z]|[0-9]|(-(?!-))){1,61}([a-z]|[0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FileShareProperties](#fileshareproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.FileShares/fileShares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.FileShares/fileShares/fileShareSnapshots@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^([a-z]|[0-9])([a-z]|[0-9]|(-(?!-))){1,61}([a-z]|[0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FileShareSnapshotProperties](#filesharesnapshotproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.FileShares/fileShares/fileShareSnapshots' (ReadOnly, DeployTimeConstant): The resource type

## FileShareProperties
### Properties
* **hostName**: string (ReadOnly): The host name of the file share.
* **includedBurstIOPerSec**: int {minValue: 3000} (ReadOnly): Burst IOPS are extra buffer IOPS enabling you to consume more than your provisioned IOPS for a short period of time, depending on the burst credits available for your share.
* **maxBurstIOPerSecCredits**: int {minValue: 0} (ReadOnly): Max burst IOPS credits shows the maximum number of burst credits the share can have at the current IOPS provisioning level.
* **mediaTier**: 'SSD' | string: The storage media tier of the file share.
* **mountName**: string: The name of the file share as seen by the end user when mounting the share, such as in a URI or UNC format in their operating system.
* **nfsProtocolProperties**: [NfsProtocolProperties](#nfsprotocolproperties): Protocol settings specific NFS.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of associated private endpoint connections.
* **protocol**: 'NFS' | string: The file sharing protocol for this file share.
* **provisionedIOPerSec**: int: The provisioned IO / sec of the share.
* **provisionedIOPerSecNextAllowedDowngrade**: string (ReadOnly): A date/time value that specifies when the provisioned IOPS for the file share is permitted to be reduced.
* **provisionedStorageGiB**: int: The provisioned storage size of the share in GiB (1 GiB is 1024^3 bytes or 1073741824 bytes). A component of the file share's bill is the provisioned storage, regardless of the amount of used storage.
* **provisionedStorageNextAllowedDowngrade**: string (ReadOnly): A date/time value that specifies when the provisioned storage for the file share is permitted to be reduced.
* **provisionedThroughputMiBPerSec**: int: The provisioned throughput / sec of the share.
* **provisionedThroughputNextAllowedDowngrade**: string (ReadOnly): A date/time value that specifies when the provisioned throughput for the file share is permitted to be reduced.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'Patching' | 'Posting' | 'Provisioning' | 'Succeeded' | 'TransientFailure' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicAccessProperties**: [PublicAccessProperties](#publicaccessproperties): The set of properties for control public access.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Gets or sets allow or disallow public network access to azure managed file share
* **redundancy**: 'Local' | 'Zone' | string: The chosen redundancy level of the file share.

## FileShareSnapshotProperties
### Properties
* **initiatorId**: string (ReadOnly): The initiator of the FileShareSnapshot. This is a user-defined value.
* **metadata**: [FileShareSnapshotPropertiesMetadata](#filesharesnapshotpropertiesmetadata): The metadata
* **snapshotTime**: string (ReadOnly): The FileShareSnapshot time in UTC in string representation

## FileShareSnapshotPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NfsProtocolProperties
### Properties
* **rootSquash**: 'AllSquash' | 'NoRootSquash' | 'RootSquash' | string: Root squash defines how root users on clients are mapped to the NFS share.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## PublicAccessProperties
### Properties
* **allowedSubnets**: string[]: The allowed set of subnets when access is restricted.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

