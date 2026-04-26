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

## DiagnosticProperties
### Properties
* **supportedResourceTypes**: string[]: Describes what are the supported resource types for a diagnostic.

## SkuMixPlacementProperties
### Properties
* **supportedResourceTypes**: string[]: Describes what resource types are supported by the mix placement scoring service.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

