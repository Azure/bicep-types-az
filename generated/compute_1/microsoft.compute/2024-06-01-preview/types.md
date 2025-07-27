# Microsoft.Compute @ 2024-06-01-preview

## Resource Microsoft.Compute/locations/diagnostics@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
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


## Resource Microsoft.Compute/locations/placementScores@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'spot' (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticProperties](#diagnosticproperties) (ReadOnly): Contains additional properties of a diagnostic
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/locations/placementScores' (ReadOnly, DeployTimeConstant): The resource type

## DiagnosticProperties
### Properties
* **supportedResourceTypes**: string[]: Describes what are the supported resource types for a diagnostic.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

