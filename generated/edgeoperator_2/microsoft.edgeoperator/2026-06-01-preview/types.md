# Microsoft.EdgeOperator @ 2026-06-01-preview

## Resource Microsoft.EdgeOperator/systemReadiness@2026-06-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SystemReadinessProperties](#systemreadinessproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.EdgeOperator/systemReadiness' (ReadOnly, DeployTimeConstant): The resource type

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## SystemReadinessCategory
### Properties
* **categoryName**: string (Required): The provider-defined name of the readiness category (for example, `services`, `diagnostics`, `identity`, `networking`). Categories may be added, renamed, or removed without an API-version change and must be treated as an open string.
* **errorMessageDetails**: string[] (Required): The error messages reported for the category. The list is empty when no specific errors are available.
* **readinessPercentage**: int {minValue: 0, maxValue: 100} (Required): The readiness percentage reported by the category, from 0 (not ready) to 100 (fully ready).

## SystemReadinessProperties
### Properties
* **categories**: [SystemReadinessCategory](#systemreadinesscategory)[] (Required, ReadOnly): The readiness state reported for each provider-defined category.
* **systemReady**: bool (Required, ReadOnly): Indicates whether the system is ready. `true` when every readiness category has reported 100 percent.

