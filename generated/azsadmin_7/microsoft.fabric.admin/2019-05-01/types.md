# Microsoft.Fabric.Admin @ 2019-05-01

## Resource Microsoft.Fabric.Admin/fabricLocations/nasClusters@2019-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NasClusterModel](#nasclustermodel) (ReadOnly): Properties of a nas cluster.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/nasClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems/drives@2019-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DriveModel](#drivemodel) (ReadOnly): Properties of a drive.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems/drives' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems/volumes@2019-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeModel](#volumemodel) (ReadOnly): Properties of a volume.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems/volumes' (ReadOnly, DeployTimeConstant): The resource type

## DriveModel
### Properties
* **action**: string (ReadOnly): Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
* **capacityGB**: int (ReadOnly): Total capacity in GB of the drive.
* **description**: string (ReadOnly): Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
* **firmwareVersion**: string (ReadOnly): The firmware version of the drive.
* **healthStatus**: string (ReadOnly): Health status of the drive.
* **isIndicationEnabled**: bool (ReadOnly): Indicate whether the drive's identification LEDs are active or not.
* **manufacturer**: string (ReadOnly): The name of the drive's manufacturer.
* **mediaType**: string (ReadOnly): Media type of the drive.
* **model**: string (ReadOnly): Model of the drive.
* **operationalStatus**: string (ReadOnly): Operational status of the drive.
* **physicalLocation**: string (ReadOnly): Indicate where the hardware is located.
* **serialNumber**: string (ReadOnly): Serial number of the drive.
* **storageNode**: string (ReadOnly): Node that the drive is physically connected.
* **storagePool**: string (ReadOnly): The storage pool where the drive is located.
* **usage**: string (ReadOnly): Intended usage of the drive.

## NasClusterModel
### Properties
* **clusterName**: string (ReadOnly): Name of nas cluster
* **portalUri**: string (ReadOnly): The portal Uri of Nas Cluster
* **size**: int (ReadOnly): The size of Nas Cluster in bytes
* **sizeRemaining**: int (ReadOnly): The remaining size of Nas Cluster in bytes

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeModel
### Properties
* **action**: string (ReadOnly): Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
* **description**: string (ReadOnly): Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
* **healthStatus**: string (ReadOnly): Health status of the volume.
* **operationalStatus**: string (ReadOnly): Operational status of the volume.
* **remainingCapacityGB**: int (ReadOnly): Remaining capacity in GB of the volume.
* **repairStatus**: string (ReadOnly): Repair status of the volume. Empty if no repair job running, something like 'Running, 90%' when repairing.
* **totalCapacityGB**: int (ReadOnly): Total capacity in GB of the volume.
* **volumeLabel**: string (ReadOnly): Volume label.

