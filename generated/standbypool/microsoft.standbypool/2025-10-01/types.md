# Microsoft.StandbyPool @ 2025-10-01

## Resource Microsoft.StandbyPool/standbyContainerGroupPools@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StandbyContainerGroupPoolResourceProperties](#standbycontainergrouppoolresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StandbyPool/standbyContainerGroupPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StandbyPool/standbyContainerGroupPools/runtimeViews@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{0,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StandbyContainerGroupPoolRuntimeViewResourceProperties](#standbycontainergrouppoolruntimeviewresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StandbyPool/standbyContainerGroupPools/runtimeViews' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StandbyPool/standbyVirtualMachinePools@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StandbyVirtualMachinePoolResourceProperties](#standbyvirtualmachinepoolresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StandbyPool/standbyVirtualMachinePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StandbyPool/standbyVirtualMachinePools/runtimeViews@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{0,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StandbyVirtualMachinePoolRuntimeViewResourceProperties](#standbyvirtualmachinepoolruntimeviewresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StandbyPool/standbyVirtualMachinePools/runtimeViews' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StandbyPool/standbyVirtualMachinePools/standbyVirtualMachines@2025-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[_a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StandbyVirtualMachineResourceProperties](#standbyvirtualmachineresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StandbyPool/standbyVirtualMachinePools/standbyVirtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## ContainerGroupInstanceCountSummary
### Properties
* **instanceCountsByState**: [PoolContainerGroupStateCount](#poolcontainergroupstatecount)[] (Required): The count of pooled container groups in each state for the given zone.
* **zone**: int: The zone that the provided counts are in. It will not have a value if zones are not enabled.

## ContainerGroupProfile
### Properties
* **id**: string (Required): Specifies container group profile id of standby container groups.
* **revision**: int: Specifies revision of container group profile.

## ContainerGroupProperties
### Properties
* **containerGroupProfile**: [ContainerGroupProfile](#containergroupprofile) (Required): Specifies container group profile of standby container groups.
* **subnetIds**: [Subnet](#subnet)[]: Specifies subnet Ids for container group.

## DynamicSizing
### Properties
* **enabled**: bool: Indicates whether dynamic sizing is enabled for the standby pool.

## PoolContainerGroupStateCount
### Properties
* **count**: int (Required): The count of pooled container groups in the given state.
* **state**: 'Creating' | 'Deleting' | 'Running' | string (Required): The state that the pooled container groups count is for.

## PoolStatus
### Properties
* **code**: 'HealthState/degraded' | 'HealthState/healthy' | string (Required, ReadOnly): Displays the healthy state of the StandbyPool.
* **message**: string (ReadOnly): Displays the StandbyPool health state details.

## PoolVirtualMachineStateCount
### Properties
* **count**: int (Required): The count of pooled virtual machines in the given state.
* **state**: 'Creating' | 'Deallocated' | 'Deallocating' | 'Deleting' | 'Hibernated' | 'Hibernating' | 'Running' | 'Starting' | string (Required): The state that the pooled virtual machines count is for.

## StandbyContainerGroupPoolElasticityProfile
### Properties
* **dynamicSizing**: [DynamicSizing](#dynamicsizing): Specifies the dynamic sizing configuration.
* **maxReadyCapacity**: int {minValue: 0} (Required): Specifies maximum number of standby container groups in the standby pool.
* **refillPolicy**: 'always' | string: Specifies refill policy of the pool.

## StandbyContainerGroupPoolForecastValues
### Properties
* **instancesRequestedCount**: int[] (Required, ReadOnly): Displays the predicted count of instances to be requested from the standby pool.

## StandbyContainerGroupPoolPrediction
### Properties
* **forecastInfo**: string (Required, ReadOnly): Displays additional information for the prediction of the standby pool.
* **forecastStartTime**: string (Required, ReadOnly): Displays the UTC timestamp of when the prediction was retrieved for the standby pool.
* **forecastValues**: [StandbyContainerGroupPoolForecastValues](#standbycontainergrouppoolforecastvalues) (Required, ReadOnly): Displays the forecast information of the standby pool.

## StandbyContainerGroupPoolResourceProperties
### Properties
* **containerGroupProperties**: [ContainerGroupProperties](#containergroupproperties) (Required): Specifies container group properties of standby container group pools.
* **elasticityProfile**: [StandbyContainerGroupPoolElasticityProfile](#standbycontainergrouppoolelasticityprofile) (Required): Specifies elasticity profile of standby container group pools.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **zones**: string[]: Specifies zones of standby container group pools.

## StandbyContainerGroupPoolRuntimeViewResourceProperties
### Properties
* **instanceCountSummary**: [ContainerGroupInstanceCountSummary](#containergroupinstancecountsummary)[] (Required, ReadOnly): A list containing the counts of container groups in each possible state, as known by the StandbyPool resource provider.
* **prediction**: [StandbyContainerGroupPoolPrediction](#standbycontainergrouppoolprediction) (ReadOnly): Displays prediction information of the standby pool
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Displays the provisioning state of the standby pool
* **status**: [PoolStatus](#poolstatus) (ReadOnly): Display status of the standby pool

## StandbyVirtualMachinePoolElasticityProfile
### Properties
* **dynamicSizing**: [DynamicSizing](#dynamicsizing): Specifies the dynamic sizing configuration.
* **maxReadyCapacity**: int {minValue: 0} (Required): Specifies the maximum number of virtual machines in the standby virtual machine pool.
* **minReadyCapacity**: int {minValue: 0}: Specifies the desired minimum number of virtual machines in the standby virtual machine pool. MinReadyCapacity cannot exceed MaxReadyCapacity.
* **postProvisioningDelay**: string: Specifies the duration to wait after virtual machine provisioning before the virtual machine becomes available for use. The duration should be specified in ISO 8601 format (e.g., PT2S for 2 seconds).

## StandbyVirtualMachinePoolForecastValues
### Properties
* **instancesRequestedCount**: int[] (Required, ReadOnly): Displays the predicted count of instances to be requested from the standby pool.

## StandbyVirtualMachinePoolPrediction
### Properties
* **forecastInfo**: string (Required, ReadOnly): Displays additional information for the prediction of the standby pool.
* **forecastStartTime**: string (Required, ReadOnly): Displays the UTC timestamp of when the prediction was retrieved for the standby pool.
* **forecastValues**: [StandbyVirtualMachinePoolForecastValues](#standbyvirtualmachinepoolforecastvalues) (Required, ReadOnly): Displays the forecast information of the standby pool.

## StandbyVirtualMachinePoolResourceProperties
### Properties
* **attachedVirtualMachineScaleSetId**: string: Specifies the fully qualified resource ID of a virtual machine scale set the pool is attached to.
* **elasticityProfile**: [StandbyVirtualMachinePoolElasticityProfile](#standbyvirtualmachinepoolelasticityprofile): Specifies the elasticity profile of the standby virtual machine pools.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **virtualMachineState**: 'Deallocated' | 'Hibernated' | 'Running' | string (Required): Specifies the desired state of virtual machines in the pool.

## StandbyVirtualMachinePoolRuntimeViewResourceProperties
### Properties
* **instanceCountSummary**: [VirtualMachineInstanceCountSummary](#virtualmachineinstancecountsummary)[] (Required, ReadOnly): A list containing the counts of virtual machines in each possible power state for each zone if enabled, as known by the StandbyPool resource provider. If zones are not enabled on the attached VMSS, the list will contain a single entry without zone values. Note: any resources in the Running state may still be installing extensions / not fully provisioned.
* **prediction**: [StandbyVirtualMachinePoolPrediction](#standbyvirtualmachinepoolprediction) (ReadOnly): Displays prediction information of the standby pool
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Displays the provisioning state of the standby pool
* **status**: [PoolStatus](#poolstatus) (ReadOnly): Display status of the standby pool

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

## VirtualMachineInstanceCountSummary
### Properties
* **instanceCountsByState**: [PoolVirtualMachineStateCount](#poolvirtualmachinestatecount)[] (Required): The count of pooled virtual machines in each state for the given zone.
* **zone**: int: The zone that the provided counts are in. It will not have a value if zones are not enabled on the attached VMSS.

