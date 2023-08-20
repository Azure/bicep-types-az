# Microsoft.ContainerStorage @ 2023-07-01-preview

## Resource Microsoft.ContainerStorage/pools@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerStorage/pools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerStorage/pools/snapshots@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerStorage/pools/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerStorage/pools/volumes@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerStorage/pools/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Assignment
### Properties
* **id**: string (Required): Resource id for the assigned resource
* **status**: [AssignmentStatus](#assignmentstatus) (ReadOnly): Indicates if the assignment is in a usable state

## AssignmentStatus
### Properties
* **message**: string: Reason for the status
* **state**: 'Assigned' | 'Assigning' | 'Failed' | 'Unassigning' | string (Required): State of the assignment resource

## AzureDisk
### Properties
* **disks**: [Disk](#disk)[]: Only required if individual disk selection is desired. Path to disk, e.g. <nodename>:/dev/sda or WWN. Supports specifying multiple disks (same syntax as tags).
* **encryption**: [Encryption](#encryption): Encryption specifies the encryption configuration for the Azure Disk pool
* **resourceGroup**: string (ReadOnly): Managed resource group for the pool.
* **skuName**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Sku name

## Disk
### Properties
* **id**: string (Required): ID is the disk identifier visible to the OS. It is typically the WWN or disk ID in formats such as eui.e8238fa6bf530001001b448b45263379 or 0x5002cf6cbc5dd460
* **reference**: string (Required): Reference is the location of the disk in an external system.

## ElasticSan
### Properties
* **encryption**: [Encryption](#encryption): Encryption specifies the encryption configuration for the Azure Disk pool
* **resourceGroup**: string (ReadOnly): Managed resource group for the pool.
* **skuName**: 'Premium_LRS' | 'Premium_ZRS' | string: Sku name

## ElasticSanVolumeProperties
### Properties
* **targetIqn**: string (Required): iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server"
* **targetPortalHostname**: string (Required): iSCSI Target Portal Host Name
* **targetPortalPort**: int (Required): iSCSI Target Portal Port

## Encryption
### Properties
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **keyName**: string (Required): The name of the key vault key.
* **keyVaultUri**: string (Required): The URI of the key vault.

## EphemeralDisk
### Properties
* **disks**: [Disk](#disk)[]: Only required if individual disk selection is desired. Path to disk, e.g. <nodename>:/dev/sda or WWN. Supports specifying multiple disks (same syntax as tags).
* **replicas**: int: The number of data copies. Default 3.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## PoolProperties
### Properties
* **assignments**: [Assignment](#assignment)[]: List of resources that should have access to the pool. Typically ARM references to AKS clusters or ACI Container Groups. For local and standard this must be a single reference. For ElasticSAN there can be many.
* **poolType**: [PoolType](#pooltype) (Required): Type of the Pool: ephemeralDisk, azureDisk, or elasticsan.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **reclaimPolicy**: 'Delete' | 'Retain' | string: ReclaimPolicy defines what happens to the backend storage when StoragePool is deleted
* **resources**: [Resources](#resources): Resources represent the resources the pool should have.
* **status**: [ResourceOperationalStatus](#resourceoperationalstatus) (ReadOnly): The operational status of the resource
* **zones**: '1' | '2' | '3' | string[]: List of availability zones that resources can be created in.

## PoolType
### Properties
* **azureDisk**: [AzureDisk](#azuredisk): Disk Pool Properties
* **elasticSan**: [ElasticSan](#elasticsan): Elastic San Pool Properties
* **ephemeralDisk**: [EphemeralDisk](#ephemeraldisk): Ephemeral Pool Properties

## Requests
### Properties
* **storage**: int: Requested capacity of the pool in GiB.

## ResourceOperationalStatus
### Properties
* **message**: string: Reason for state.
* **state**: 'Available' | 'Pending' | 'Unavailable' | string (Required): state of the resource

## Resources
### Properties
* **requests**: [Requests](#requests): Requests for capacity for the pool.

## SnapshotProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **source**: string (Required): Reference to the source volume
* **status**: [ResourceOperationalStatus](#resourceoperationalstatus) (ReadOnly): The status of the resource.

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

## VolumeProperties
### Properties
* **capacityGiB**: int (Required): Requested capacity in GiB
* **labels**: [VolumePropertiesLabels](#volumepropertieslabels) (Required): String KV pairs indicating labels
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **status**: [ResourceOperationalStatus](#resourceoperationalstatus) (ReadOnly): The status of the resource.
* **volumeType**: [VolumeType](#volumetype) (ReadOnly): Properties of the volume

## VolumePropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeType
### Properties
* **elasticSan**: [ElasticSanVolumeProperties](#elasticsanvolumeproperties) (ReadOnly): Properties of the ElasticSAN iSCSI target

