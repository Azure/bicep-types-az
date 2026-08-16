# Microsoft.Compute @ 2025-06-05

## Resource Microsoft.Compute/locations/placementScores@2025-06-05
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-05' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'spot' (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticProperties](#diagnosticproperties) (ReadOnly): Contains additional properties of a diagnostic
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/locations/placementScores' (ReadOnly, DeployTimeConstant): The resource type

## Function generate (Microsoft.Compute/locations/placementScores@2025-06-05)
* **Resource**: Microsoft.Compute/locations/placementScores
* **ApiVersion**: 2025-06-05
* **Input**: [SpotPlacementScoresInput](#spotplacementscoresinput)
* **Output**: [SpotPlacementScoresResponse](#spotplacementscoresresponse)

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

