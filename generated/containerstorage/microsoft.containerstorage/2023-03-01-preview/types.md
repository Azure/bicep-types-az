# Microsoft.ContainerStorage @ 2023-03-01-preview

## Resource Microsoft.ContainerStorage/pools@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerStorage/pools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerStorage/pools/volumes@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerStorage/pools/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerStorage/pools/volumeSnapshots@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeSnapshotProperties](#volumesnapshotproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerStorage/pools/volumeSnapshots' (ReadOnly, DeployTimeConstant): The resource type

## DiskPoolProperties
### Properties
* **csiParams**: [DiskPoolPropertiesCsiParams](#diskpoolpropertiescsiparams): List of KV pairs to set in StorageClass to configure CSI driver.
* **disks**: string[]: Only required if individual disk selection is desired. Path to disk, e.g. <nodename>:/dev/sda or WWN. Supports specifying multiple disks (same syntax as tags).
* **maxVolumeCapacityGiB**: int: Maximum capacity of the volumes in GiB the user intends to create. Default 512.

## DiskPoolPropertiesCsiParams
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ElasticSanPoolProperties
### Properties
* **resourceGroup**: string (Required): Resource group of an existing SAN.
* **sanName**: string (Required): Name of an existing SAN.
* **volumeGroup**: string (Required): Volume group of an existing SAN.

## EphemeralPoolProperties
### Properties
* **diskFormat**: bool: Consent to format the local disks.
* **disks**: string[] (Required): Only required if individual disk selection is desired. Path to disk, e.g. <nodename>:/dev/sda or WWN. Supports specifying multiple disks (same syntax as tags).
* **diskSelector**: string[] (Required): Template name or KV pairs containing disk selection criteria, e.g. model="Microsoft NVMe Direct Disk" to match all Lsv2 NVMe disks.

## PoolProperties
### Properties
* **assignments**: string[] (Required): List of resources that should have access to the pool. Typically ARM references to AKS clusters or ACI Container Groups. For local and standard this must be a single reference. For portable there can be many.
* **diskPoolProperties**: [DiskPoolProperties](#diskpoolproperties): Disk Pool Properties
* **elasticSanPoolProperties**: [ElasticSanPoolProperties](#elasticsanpoolproperties) (Required): Elastic San Pool Properties
* **ephemeralPoolProperties**: [EphemeralPoolProperties](#ephemeralpoolproperties): Ephemeral Pool Properties
* **poolCapacityGiB**: int (Required): Initial capacity of the pool in GiB.
* **poolType**: int (Required): Type of the Pool: ephemeral, disk, managed, or elasticsan.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **zones**: string[] (Required): List of availability zones that resources can be created in.

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

## VolumeProperties
### Properties
* **capacityGiB**: int (Required): Requested capacity in GiB
* **labels**: [VolumePropertiesLabels](#volumepropertieslabels) (Required): String KV pairs indicating labels
* **mountOptions**: string[] (Required): List of string mount options
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **reclaimPolicy**: 'Delete' | 'Retain' | string (Required): Reclaim Policy, Delete or Retain
* **volumeMode**: 'Filesystem' | 'Raw' | string (Required): Indicates how the volume should be attached

## VolumePropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeSnapshotProperties
### Properties
* **mountOptions**: string[] (Required): List of string mount options
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **reclaimPolicy**: 'Delete' | 'Retain' | string (Required): Reclaim Policy, Delete or Retain
* **source**: string (Required): Reference to the source volume
* **volumeMode**: 'Filesystem' | 'Raw' | string (Required): Indicates how the volumes created from the snapshot should be attached

