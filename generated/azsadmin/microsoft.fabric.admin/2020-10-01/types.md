# Microsoft.Fabric.Admin @ 2020-10-01

## Resource Microsoft.Fabric.Admin/fabricLocations/computeOperationResults@2020-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ComputeOperationResultModel](#computeoperationresultmodel) (ReadOnly): Compute operation result properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/computeOperationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Fabric.Admin/fabricLocations/scaleUnitNodes@2020-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScaleUnitNodeModel](#scaleunitnodemodel) (ReadOnly): Holds all properties related to a scale unit node.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/scaleUnitNodes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Fabric.Admin/fabricLocations/scaleUnits@2020-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScaleUnitModel](#scaleunitmodel) (ReadOnly): Properties of a scale unit.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/scaleUnits' (ReadOnly, DeployTimeConstant): The resource type

## ComputeOperationResultModel
### Properties
* **instances**: string[]: List of operation result instances.
* **provisioningState**: string: Success or failure of operation.

## GpuModel
### Properties
* **hostDriverVersion**: string: GPU host driver version.
* **name**: string: GPU name.
* **oem**: string: GPU OEM information
* **partitionSize**: int: GPU partition size.
* **slotLocation**: string: GPU slot location.
* **type**: 'DDA' | 'GPUP' | 'None' | string: Type of GPU.

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

## ScaleUnitCapacity
### Properties
* **cores**: int: The number of CPU cores for the physical machine.
* **memoryGB**: int: The memory for the physical machine.

## ScaleUnitModel
### Properties
* **gpuPartitionSize**: int: GPU partition size.
* **gpuType**: 'DDA' | 'GPUP' | 'None' | string: Type of GPU.
* **isGpuAvailable**: bool: Denotes if GPU resource is available in the cluster.
* **isMultiNode**: bool: Denotes if more than one node in cluster.
* **logicalFaultDomain**: int: Fault domain name of the cluster.
* **model**: string: Model of the servers in the cluster.
* **nodes**: string[]: List of nodes in the server.
* **scaleUnitType**: 'ComputeOnly' | 'HyperConverged' | 'StorageOnly' | 'Unknown' | string: Type of cluster.
* **state**: 'Creating' | 'Deleting' | 'Running' | 'Unknown' | 'Upgrading' | string: Current state of the cluster.
* **totalCapacity**: [ScaleUnitCapacity](#scaleunitcapacity): Capacity information for the cluster.

## ScaleUnitNodeModel
### Properties
* **biosVersion**: string: BIOS version of the physical machine.
* **bmcAddress**: string: BMC address of the physical machine.
* **canPowerOff**: bool: Value indicating whether the node can be powered off.
* **capacity**: [ScaleUnitCapacity](#scaleunitcapacity): Capacity of the physical machine.
* **gpus**: [GpuModel](#gpumodel)[]: GPU resource list of the physical machine.
* **model**: string: Model of the physical machine.
* **powerState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string: PowerState of the physical machine.
* **scaleUnitName**: string: Cluster name of the physical machine.
* **scaleUnitNodeStatus**: 'Maintenance' | 'Running' | 'Stopped' | string: Status of the physical machine.
* **scaleUnitUri**: string: URI of the corresponding cluster.
* **serialNumber**: string: Serial number of the physical machine.
* **vendor**: string: Vendor of the physical machine.

