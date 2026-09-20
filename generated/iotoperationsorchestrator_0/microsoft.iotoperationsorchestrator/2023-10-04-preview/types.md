# Microsoft.IoTOperationsOrchestrator @ 2023-10-04-preview

## Resource Microsoft.IoTOperationsOrchestrator/instances@2023-10-04-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,60}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceProperties](#instanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTOperationsOrchestrator/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperationsOrchestrator/solutions@2023-10-04-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,60}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionProperties](#solutionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTOperationsOrchestrator/solutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperationsOrchestrator/targets@2023-10-04-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,60}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTOperationsOrchestrator/targets' (ReadOnly, DeployTimeConstant): The resource type

## BindingProperties
### Properties
* **config**: [BindingPropertiesConfig](#bindingpropertiesconfig) (Required): Configuration values for the binding.
* **provider**: string (Required): Name of the provider.
* **role**: string (Required): Role that the provider binds to with the component.

## BindingPropertiesConfig
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ComponentProperties
### Properties
* **dependencies**: string[]: Component dependencies.
* **name**: string (Required): Name of the component.
* **properties**: [ComponentProperties](#componentproperties): Properties of the component.
* **type**: string (Required): Component type.

## ComponentProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ExtendedLocation
### Properties
* **name**: string (Required): The name of the extended location.
* **type**: string (Required): The type of the extended location.

## InstanceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Reconciling' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **reconciliationPolicy**: [ReconciliationPolicy](#reconciliationpolicy): Reconciliation Policy.
* **scope**: string: Deployment scope (such as Kubernetes namespace).
* **solution**: string: Name of the solution.
* **target**: [TargetSelectorProperties](#targetselectorproperties): Defines the Target the Instance will deploy to.
* **version**: string: Version of the particular resource.

## ReconciliationPolicy
### Properties
* **interval**: string {minLength: 1}: Policy interval.
* **type**: 'periodic' | string (Required): Policy type

## SolutionProperties
### Properties
* **components**: [ComponentProperties](#componentproperties)[]: A list of components
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **version**: string: Version of the particular resource.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetProperties
### Properties
* **components**: [ComponentProperties](#componentproperties)[]: A list of components.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Reconciling' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **reconciliationPolicy**: [ReconciliationPolicy](#reconciliationpolicy): Reconciliation Policy.
* **scope**: string: Deployment scope (such as Kubernetes namespace).
* **topologies**: [TopologiesProperties](#topologiesproperties)[]: Defines the device topology for a target or instance.
* **version**: string: Version of the particular resource.

## TargetSelectorProperties
### Properties
* **name**: string: Name of the target.

## TopologiesProperties
### Properties
* **bindings**: [BindingProperties](#bindingproperties)[]: bindings description.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

