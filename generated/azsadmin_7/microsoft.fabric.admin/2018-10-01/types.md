# Microsoft.Fabric.Admin @ 2018-10-01

## Resource Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems@2018-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageSubSystemModel](#storagesubsystemmodel) (ReadOnly): All properties of a storage subsystem.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems/drives@2018-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DriveModel](#drivemodel) (ReadOnly): Properties of a drive.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems/drives' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems/volumes@2018-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeModel](#volumemodel) (ReadOnly): Properties of a volume.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/scaleUnits/storageSubSystems/volumes' (ReadOnly, DeployTimeConstant): The resource type

## DriveModel
### Properties
* **action**: string: Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
* **cannotPoolReason**: string: Specify the reasons why the drive cannot be added to the pool.
* **canPool**: bool: Indicate whether the drive can be added to the pool.
* **capacityGB**: int: Total capacity in GB of the drive.
* **description**: string: Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
* **healthStatus**: string: Health status of the drive.
* **mediaType**: string: Media type of the drive.
* **model**: string: Model of the drive.
* **operationalStatus**: string: Operational status of the drive.
* **physicalLocation**: string: Indicate where the hardware is located.
* **serialNumber**: string: Serial number of the drive.
* **storageNode**: string: Node that the drive is physically connected.
* **usage**: string: Intended usage of the drive.

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

## StorageSubSystemModel
### Properties
* **healthStatus**: string: Health status of the subsystem.
* **operationalStatus**: string: Operational status of the subsystem.
* **rebalanceStatus**: string: Rebalance status of the subsystem.
* **remainingCapacityGB**: int: Remaining capacity in GB of the subsystem.
* **totalCapacityGB**: int: Total capacity in GB of the subsystem.

## VolumeModel
### Properties
* **action**: string: Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
* **description**: string: Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
* **healthStatus**: string: Health status of the volume.
* **operationalStatus**: string: Operational status of the volume.
* **remainingCapacityGB**: int: Remaining capacity in GB of the volume.
* **repairStatus**: string: Repair status of the volume. Empty if no repair job running, something like 'Running, 90%' when repairing.
* **totalCapacityGB**: int: Total capacity in GB of the volume.
* **volumeLabel**: string: Volume label.

