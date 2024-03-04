# Microsoft.StandbyPool @ 2023-12-01-preview

## Resource Microsoft.StandbyPool/standbyContainerGroupPools@2023-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StandbyContainerGroupPoolResourceProperties](#standbycontainergrouppoolresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StandbyPool/standbyContainerGroupPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StandbyPool/standbyVirtualMachinePools@2023-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StandbyVirtualMachinePoolResourceProperties](#standbyvirtualmachinepoolresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StandbyPool/standbyVirtualMachinePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StandbyPool/standbyVirtualMachinePools/standbyVirtualMachines@2023-12-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[_a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StandbyVirtualMachineResourceProperties](#standbyvirtualmachineresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StandbyPool/standbyVirtualMachinePools/standbyVirtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## ContainerGroupProfile
### Properties
* **id**: string (Required): Specifies container group profile id of standby container groups.
* **revision**: int: Specifies revision of container group profile.

## ContainerGroupProperties
### Properties
* **containerGroupProfile**: [ContainerGroupProfile](#containergroupprofile) (Required): Specifies container group profile of standby container groups.
* **subnetIds**: [Subnet](#subnet)[]: Specifies subnet Ids for container group.

## StandbyContainerGroupPoolElasticityProfile
### Properties
* **maxReadyCapacity**: int {minValue: 0, maxValue: 2000} (Required): Specifies maximum number of standby container groups in the standby pool.
* **refillPolicy**: 'always' | string: Specifies refill policy of the pool.

## StandbyContainerGroupPoolResourceProperties
### Properties
* **containerGroupProperties**: [ContainerGroupProperties](#containergroupproperties) (Required): Specifies container group properties of standby container group pools.
* **elasticityProfile**: [StandbyContainerGroupPoolElasticityProfile](#standbycontainergrouppoolelasticityprofile) (Required): Specifies elasticity profile of standby container group pools.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

## StandbyVirtualMachinePoolElasticityProfile
### Properties
* **maxReadyCapacity**: int {minValue: 0, maxValue: 2000} (Required): Specifies maximum number of virtual machines in the standby virtual machine pool.

## StandbyVirtualMachinePoolResourceProperties
### Properties
* **attachedVirtualMachineScaleSetId**: string: Specifies the fully qualified resource ID of a virtual machine scale set the pool is attached to.
* **elasticityProfile**: [StandbyVirtualMachinePoolElasticityProfile](#standbyvirtualmachinepoolelasticityprofile): Specifies the elasticity profile of the standby virtual machine pools.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **virtualMachineState**: 'Deallocated' | 'Running' | string (Required): Specifies the desired state of virtual machines in the pool.

## StandbyVirtualMachineResourceProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **virtualMachineResourceId**: string (Required): Resource id of the virtual machine.

## Subnet
### Properties
* **id**: string (Required): Specifies ARM resource id of the subnet.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

