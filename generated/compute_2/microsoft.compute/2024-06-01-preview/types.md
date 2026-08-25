# Microsoft.Compute @ 2024-06-01-preview

## Resource Microsoft.Compute/locations/diagnostics@2024-06-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
* **Discriminator**: name

### Base Properties

### Microsoft.Compute/locations/diagnostics
#### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'diskInspection' (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticProperties](#diagnosticproperties) (ReadOnly): Contains additional properties of a diagnostic
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/locations/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Compute/locations/diagnostics
#### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'spotPlacementRecommender' (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticProperties](#diagnosticproperties) (ReadOnly): Contains additional properties of a diagnostic
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/locations/diagnostics' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Compute/locations/placementScores@2024-06-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'spot' (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticProperties](#diagnosticproperties) (ReadOnly): Contains additional properties of a diagnostic
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/locations/placementScores' (ReadOnly, DeployTimeConstant): The resource type

## Function generate (Microsoft.Compute/locations/diagnostics@2024-06-01-preview)
* **Resource**: Microsoft.Compute/locations/diagnostics
* **ApiVersion**: 2024-06-01-preview
* **Input**: [SpotPlacementRecommenderInput](#spotplacementrecommenderinput)
* **Output**: [SpotPlacementRecommenderResponse](#spotplacementrecommenderresponse)

## Function generate (Microsoft.Compute/locations/placementScores@2024-06-01-preview)
* **Resource**: Microsoft.Compute/locations/placementScores
* **ApiVersion**: 2024-06-01-preview
* **Input**: [SpotPlacementScoresInput](#spotplacementscoresinput)
* **Output**: [SpotPlacementScoresResponse](#spotplacementscoresresponse)

## Function registerStorageConfiguration (Microsoft.Compute/locations/diagnostics@2024-06-01-preview)
* **Resource**: Microsoft.Compute/locations/diagnostics
* **ApiVersion**: 2024-06-01-preview
* **Input**: [StorageConfigurationInput](#storageconfigurationinput)
* **Output**: any

## Function run (Microsoft.Compute/locations/diagnostics@2024-06-01-preview)
* **Resource**: Microsoft.Compute/locations/diagnostics
* **ApiVersion**: 2024-06-01-preview
* **Input**: [RunDiskInspectionInput](#rundiskinspectioninput)
* **Output**: any

## Function validateStorageConfiguration (Microsoft.Compute/locations/diagnostics@2024-06-01-preview)
* **Resource**: Microsoft.Compute/locations/diagnostics
* **ApiVersion**: 2024-06-01-preview
* **Output**: [StorageConfigurationResponse](#storageconfigurationresponse)

## DiagnosticProperties
### Properties
* **supportedResourceTypes**: string[]: Describes what are the supported resource types for a diagnostic.

## PlacementScore
### Properties
* **availabilityZone**: string: The availability region.
* **isQuotaAvailable**: bool: Whether the desired quota is available.
* **region**: string: The region.
* **score**: string: The placement score.
* **sku**: string: The resource's CRP virtual machine SKU size.

## ResourceSize
### Properties
* **sku**: string: The resource's CRP virtual machine SKU size.

## RunDiskInspectionInput
### Properties
* **manifest**: string (Required): Name of manifest in order to trigger Disk Inspection.
* **resourceId**: string (Required): Qualified ID of the resource.
* **uploadSasUri**: string {sensitive} (Required): SAS uri to the blob where results will be uploaded.

## SpotPlacementRecommenderInput
### Properties
* **availabilityZones**: bool: Defines if the scope is zonal or regional.
* **desiredCount**: int: Desired instance count per region/zone based on the scope.
* **desiredLocations**: string[]: The desired regions
* **desiredSizes**: [ResourceSize](#resourcesize)[]: The desired resource SKUs.

## SpotPlacementRecommenderResponse
### Properties
* **availabilityZones**: bool: Defines if the scope is zonal or regional.
* **desiredCount**: int: Desired instance count per region/zone based on the scope.
* **desiredLocations**: string[]: The desired regions
* **desiredSizes**: [ResourceSize](#resourcesize)[]: The desired resource SKUs.
* **placementScores**: [PlacementScore](#placementscore)[]: The spot placement scores.

## SpotPlacementScoresInput
### Properties
* **availabilityZones**: bool: Defines if the scope is zonal or regional.
* **desiredCount**: int: Desired instance count per region/zone based on the scope.
* **desiredLocations**: string[]: The desired regions
* **desiredSizes**: [ResourceSize](#resourcesize)[]: The desired resource SKUs.

## SpotPlacementScoresResponse
### Properties
* **availabilityZones**: bool: Defines if the scope is zonal or regional.
* **desiredCount**: int: Desired instance count per region/zone based on the scope.
* **desiredLocations**: string[]: The desired regions
* **desiredSizes**: [ResourceSize](#resourcesize)[]: The desired resource SKUs.
* **placementScores**: [PlacementScore](#placementscore)[]: The spot placement scores.

## StorageConfigurationInput
### Properties
* **storageAccountId**: string (Required): Fully qualified storage account Id. Example: "/subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.Storage/storageAccounts/{storageAccountName}"

## StorageConfigurationResponse
### Properties
* **storageAccountId**: string: Fully qualified storage account Id. Example: "/subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.Storage/storageAccounts/{storageAccountName}"

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

