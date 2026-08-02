# Microsoft.Compute @ 2026-05-05-preview

## Resource Microsoft.Compute/locations/placementScores@2026-05-05-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'spot' (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticProperties](#diagnosticproperties) (ReadOnly): Contains additional properties of a diagnostic
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/locations/placementScores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/locations/skuMixPlacementScores@2026-05-05-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'recommendations' (Required, DeployTimeConstant): The resource name
* **properties**: [SkuMixPlacementProperties](#skumixplacementproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/locations/skuMixPlacementScores' (ReadOnly, DeployTimeConstant): The resource type

## Function generate (Microsoft.Compute/locations/placementScores@2026-05-05-preview)
* **Resource**: Microsoft.Compute/locations/placementScores
* **ApiVersion**: 2026-05-05-preview
* **Input**: [SpotPlacementScoresInput](#spotplacementscoresinput)
* **Output**: [SpotPlacementScoresResponse](#spotplacementscoresresponse)

## Function generate (Microsoft.Compute/locations/skuMixPlacementScores@2026-05-05-preview)
* **Resource**: Microsoft.Compute/locations/skuMixPlacementScores
* **ApiVersion**: 2026-05-05-preview
* **Input**: [SkuMixPlacementRequest](#skumixplacementrequest)
* **Output**: [SkuMixPlacementResponse](#skumixplacementresponse)

## DiagnosticProperties
### Properties
* **supportedResourceTypes**: string[]: Describes what are the supported resource types for a diagnostic.

## PlacementScore
### Properties
* **availabilityZone**: string: The availability zone.
* **isQuotaAvailable**: bool: Whether the desired quota is available.
* **region**: string: The region.
* **score**: string: A placement score indicating the likelihood of successfully allocating the specified Spot VM(s), as well as the expected lifetimes of the Spot VM(s) after allocation.
* **sku**: string: The resource's CRP virtual machine SKU size.

## ResourceSize
### Properties
* **sku**: string: The resource's CRP virtual machine SKU size.

## SkuMixPlacementCapacityProfile
### Properties
* **allocationStrategy**: 'EvictionOptimized' | 'LowestPrice' | 'Prioritized' | string (Required): The allocation strategy for determining the optimal SKU split.
* **capacity**: int (Required): The capacity to run the workload. For VMs: [1..10,000]. For vCPUs: [1..100,000].
* **capacityType**: 'VCpu' | 'VM' | string (Required): The unit type for the capacity value.
* **osType**: 'Linux' | 'Windows' | string: The OS type. Required when allocationStrategy is LowestPrice because pricing varies by OS.
* **priority**: 'Regular' | 'Spot' | string (Required): The priority of the VMs to allocate.
* **spotPriorityProfile**: [SkuMixPlacementSpotPriorityProfile](#skumixplacementspotpriorityprofile): Required when priority is Spot. Contains spot-specific configuration.
* **zoneAllocationPolicy**: [SkuMixPlacementZoneAllocationPolicy](#skumixplacementzoneallocationpolicy): Zone allocation policy. Default: BestEffortBalanced.

## SkuMixPlacementDeploymentChoice
### Properties
* **id**: string (Required): Unique identifier for this deployment choice.
* **score**: int {minValue: 1, maxValue: 10} (Required): Placement score from 1 to 10 (inclusive). Higher is better.
* **skuSplit**: [SkuMixPlacementItem](#skumixplacementitem)[] (Required): The list of VM size / zone allocations that make up this deployment choice.

## SkuMixPlacementInstanceDescription
### Properties
* **type**: 'VMAttributes' | 'VMSizes' | string (Required): The type of instance description.
* **vmAttributes**: [VmAttributes](#vmattributes): VM attribute constraints. Required when type is VMAttributes.
* **vmSizes**: [SkuMixPlacementVMSize](#skumixplacementvmsize)[]: The list of VM sizes. Required when type is VMSizes.

## SkuMixPlacementItem
### Properties
* **capacity**: int (Required): Recommended allocation capacity.
* **name**: string (Required): VM size name (e.g. Standard_D2s_v3).
* **priority**: 'Regular' | 'Spot' | string (Required): Priority of this allocation (Regular or Spot).
* **zone**: string: Logical zone (e.g. "1", "2", "3"). Omitted or empty for regional deployments.

## SkuMixPlacementProperties
### Properties
* **supportedResourceTypes**: string[]: Describes what resource types are supported by the mix placement scoring service.

## SkuMixPlacementRequest
### Properties
* **capacityProfile**: [SkuMixPlacementCapacityProfile](#skumixplacementcapacityprofile) (Required): All capacity-related properties.
* **instanceDescription**: [SkuMixPlacementInstanceDescription](#skumixplacementinstancedescription) (Required): Describes how the service should choose candidate VM sizes.
* **zones**: string[]: Optional logical zones to consider (e.g. ["1","2","3"]). Omitted or empty implies regional deployment.

## SkuMixPlacementResponse
### Properties
* **partialFulfillmentReason**: 'InsufficientCapacity' | 'InsufficientQuota' | 'None' | string (Required): Indicates whether the response is a complete or partial fulfillment.
* **placementChoices**: [SkuMixPlacementDeploymentChoice](#skumixplacementdeploymentchoice)[] (Required): List of placement choice recommendations.

## SkuMixPlacementSpotPriorityProfile
### Properties
* **maxPricePerVm**: int: Maximum price per VM the customer is willing to pay. Default: -1 (no price restriction).

## SkuMixPlacementVMSize
### Properties
* **name**: string (Required): SKU name (e.g. Standard_D2s_v3).
* **rank**: int: Rank of the VM size. Lower = higher priority (starting at 0). Only valid with Prioritized strategy.

## SkuMixPlacementZoneAllocationPolicy
### Properties
* **distributionStrategy**: 'BestEffortBalanced' | 'Prioritized' | string: Distribution strategy for allocating capacity across zones.
* **zonePreferences**: [SkuMixPlacementZonePreference](#skumixplacementzonepreference)[]: Per-zone allocation preferences. Used with the Prioritized strategy.

## SkuMixPlacementZonePreference
### Properties
* **rank**: int: Rank of the zone. Lower values = higher priority (0 is highest).
* **zone**: string (Required): Logical zone (e.g. "1", "2", "3").

## SpotPlacementScoresInput
### Properties
* **availabilityZones**: bool: Defines if the scope is zonal or regional.
* **desiredCount**: int: Desired instance count per region/zone based on the scope.
* **desiredLocations**: string[]: The desired regions
* **desiredSizes**: [ResourceSize](#resourcesize)[]: The desired virtual machine SKU sizes.

## SpotPlacementScoresResponse
### Properties
* **availabilityZones**: bool: Defines if the scope is zonal or regional.
* **desiredCount**: int: Desired instance count per region/zone based on the scope.
* **desiredLocations**: string[]: The desired regions
* **desiredSizes**: [ResourceSize](#resourcesize)[]: The desired virtual machine SKU sizes.
* **placementScores**: [PlacementScore](#placementscore)[]: A placement score indicating the likelihood of successfully allocating the specified Spot VM(s), as well as the expected lifetimes of the Spot VM(s) after allocation.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## VmAttributeMinMaxDouble
### Properties
* **max**: int: Maximum value.
* **min**: int: Minimum value.

## VmAttributeMinMaxInteger
### Properties
* **max**: int: Maximum value.
* **min**: int: Minimum value.

## VmAttributes
### Properties
* **acceleratorCount**: [VmAttributeMinMaxInteger](#vmattributeminmaxinteger): Accelerator count range.
* **acceleratorManufacturers**: ('AMD' | 'Nvidia' | 'Xilinx' | string)[]: Allowed accelerator manufacturers.
* **acceleratorSupport**: 'Excluded' | 'Included' | 'Required' | string: Whether accelerator support should be excluded, included, or required.
* **acceleratorTypes**: ('FPGA' | 'GPU' | string)[]: Allowed accelerator types.
* **allowedVMSizes**: string[]: VM sizes to explicitly allow; attribute filtering applied only to this set.
* **architectureTypes**: ('ARM64' | 'X64' | string)[] (Required): Supported VM architectures. Required.
* **burstableSupport**: 'Excluded' | 'Included' | 'Required' | string: Whether burstable SKUs should be excluded, included, or required.
* **cpuManufacturers**: ('AMD' | 'Ampere' | 'Intel' | 'Microsoft' | string)[]: Allowed CPU manufacturers.
* **dataDiskCount**: [VmAttributeMinMaxInteger](#vmattributeminmaxinteger): Data disk count range.
* **excludedVMSizes**: string[]: VM sizes to explicitly exclude.
* **hyperVGenerations**: ('Gen1' | 'Gen2' | string)[]: Allowed Hyper-V generations.
* **localStorageDiskTypes**: ('HDD' | 'SSD' | string)[]: Allowed local storage disk types.
* **localStorageInGiB**: [VmAttributeMinMaxDouble](#vmattributeminmaxdouble): Local storage capacity range in GiB.
* **localStorageSupport**: 'Excluded' | 'Included' | 'Required' | string: Whether local storage support should be excluded, included, or required.
* **memoryInGiB**: [VmAttributeMinMaxDouble](#vmattributeminmaxdouble) (Required): Memory range in GiB. Required.
* **memoryInGiBPerVCpu**: [VmAttributeMinMaxDouble](#vmattributeminmaxdouble): Memory-per-vCPU range in GiB.
* **networkBandwidthInMbps**: [VmAttributeMinMaxDouble](#vmattributeminmaxdouble): Network bandwidth range in Mbps.
* **networkInterfaceCount**: [VmAttributeMinMaxInteger](#vmattributeminmaxinteger): NIC count range.
* **rdmaNetworkInterfaceCount**: [VmAttributeMinMaxInteger](#vmattributeminmaxinteger): RDMA NIC count range.
* **rdmaSupport**: 'Excluded' | 'Included' | 'Required' | string: Whether RDMA support should be excluded, included, or required.
* **vCpuCount**: [VmAttributeMinMaxInteger](#vmattributeminmaxinteger) (Required): vCPU count range. Required.
* **vmCategories**: ('ComputeOptimized' | 'FpgaAccelerated' | 'GeneralPurpose' | 'GpuAccelerated' | 'HighPerformanceCompute' | 'MemoryOptimized' | 'StorageOptimized' | string)[]: Allowed VM categories.

