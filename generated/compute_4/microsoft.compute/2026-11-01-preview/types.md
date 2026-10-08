# Microsoft.Compute @ 2026-11-01-preview

## Resource Microsoft.Compute/workloadSpaces@2026-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?![.-])[A-Za-z0-9_.-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadSpaceProperties](#workloadspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Compute/workloadSpaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/workloadSpaces/capabilities@2026-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'AgentSandbox' | string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?![.-])[A-Za-z0-9_.-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityProperties](#capabilityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Compute/workloadSpaces/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/workloadSpaces/runtimeBindings@2026-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Kubernetes' | 'ServerlessContainers' | string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?![.-])[A-Za-z0-9_.-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RuntimeBindingProperties](#runtimebindingproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Compute/workloadSpaces/runtimeBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/workloadSpaces/runtimeLinks@2026-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?![.-])[A-Za-z0-9_.-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RuntimeLinkProperties](#runtimelinkproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Compute/workloadSpaces/runtimeLinks' (ReadOnly, DeployTimeConstant): The resource type

## CapabilityProperties
### Properties
* **effectiveVersion**: string (ReadOnly): The effective capability version selected by the service.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the capability.
* **versionPolicy**: 'ServiceManaged' | string (Required): The version selection policy for the capability.

## CapacityProfile
### Properties
* **maximumNodes**: int {minValue: 0} (Required): The maximum number of execution nodes.
* **minimumNodes**: int {minValue: 0} (Required): The minimum number of execution nodes.

## ExecutionIdentity
* **Discriminator**: provisioningMode

### Base Properties
* **scope**: 'SandboxGroup' | string (Required): The execution boundary across which the identity is shared.

### ReferencedExecutionIdentity
#### Properties
* **provisioningMode**: 'Referenced' (Required): Indicates whether the identity is managed by the service or supplied by the customer.
* **userAssignedIdentityResourceId**: string (Required): The customer-provided user-assigned identity.

### ServiceManagedExecutionIdentity
#### Properties
* **provisioningMode**: 'ServiceManaged' (Required): Indicates whether the identity is managed by the service or supplied by the customer.
* **userAssignedIdentityResourceId**: string (ReadOnly): The service-created user-assigned identity.


## ManagedRuntimeProfile
### Properties
* **offering**: string: The required product offering when the runtime binding kind is Kubernetes.
* **provider**: string: The required provider when the runtime binding kind is ServerlessContainers.

## RuntimeBindingProperties
* **Discriminator**: provisioningMode

### Base Properties
* **identityProfile**: [RuntimeIdentityProfile](#runtimeidentityprofile): The runtime identity configuration for a managed runtime.
* **networkProfile**: [RuntimeNetworkProfile](#runtimenetworkprofile): The runtime network configuration for a managed runtime.
* **providerResourceId**: string (ReadOnly): The provider resource created or referenced by the binding.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the runtime binding.

### ManagedRuntimeBindingProperties
#### Properties
* **managedProfile**: [ManagedRuntimeProfile](#managedruntimeprofile) (Required): The limited service-managed runtime configuration.
* **provisioningMode**: 'Managed' (Required): Indicates whether Workload Manager owns or references the runtime.

### ReferencedRuntimeBindingProperties
#### Properties
* **provisioningMode**: 'Referenced' (Required): Indicates whether Workload Manager owns or references the runtime.
* **resourceId**: string (Required): The existing customer-owned runtime resource.


## RuntimeIdentityProfile
### Properties
* **executionIdentity**: [ExecutionIdentity](#executionidentity): The identity made available to the execution runtime.

## RuntimeLinkIntegrationProfile
### Properties
* **managedIdentityResourceId**: string: The user-assigned identity used by the provider integration.

## RuntimeLinkProperties
### Properties
* **capacityProfile**: [CapacityProfile](#capacityprofile): The mutable capacity policy for the runtime composition.
* **executionBindingResourceId**: string: The optional sibling runtime binding that provides execution.
* **integrationProfile**: [RuntimeLinkIntegrationProfile](#runtimelinkintegrationprofile): The provider integration identity configuration.
* **orchestratorBindingResourceId**: string (Required): The sibling runtime binding that provides orchestration.
* **providerResourceId**: string (ReadOnly): The provider resource that realizes the runtime composition.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the runtime link.

## RuntimeNetworkProfile
### Properties
* **egressMode**: 'CustomerManaged' | string: Indicates who manages runtime egress.
* **subnetResourceId**: string: The customer-provided subnet used by the runtime.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkloadSpaceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the workload space.

