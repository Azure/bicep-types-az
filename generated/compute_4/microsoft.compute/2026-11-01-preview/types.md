# Microsoft.Compute @ 2026-11-01-preview

## Resource Microsoft.Compute/workloadSpaces@2026-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed service identities assigned to this resource.
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
* **kind**: 'AgentSandbox' | 'PodSnapshotRestore' | string (Required): The capability to enable, fixed when the capability is created.
* **name**: string {pattern: "^(?![.-])[A-Za-z0-9_.-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityProperties](#capabilityproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/workloadSpaces/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/workloadSpaces/runtimeBindings@2026-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Kubernetes' | 'ServerlessContainers' | string (Required): The runtime technology, fixed when the binding is created.
* **name**: string {pattern: "^(?![.-])[A-Za-z0-9_.-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RuntimeBindingProperties](#runtimebindingproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/workloadSpaces/runtimeBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/workloadSpaces/runtimeLinks@2026-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(?![.-])[A-Za-z0-9_.-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RuntimeLinkProperties](#runtimelinkproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Compute/workloadSpaces/runtimeLinks' (ReadOnly, DeployTimeConstant): The resource type

## AggregateOperationStatus
### Properties
* **capabilities**: [CapabilityDependencyStatus](#capabilitydependencystatus)[] (ReadOnly): Dependency status for each capability, identified by its resource name.
* **kubernetesBinding**: [DependencyStatus](#dependencystatus) (ReadOnly): The summarized status of Kubernetes runtime bindings.
* **runtimeLink**: [DependencyStatus](#dependencystatus) (ReadOnly): The summarized status of runtime links.
* **serverlessBinding**: [DependencyStatus](#dependencystatus) (ReadOnly): The summarized status of serverless container runtime bindings.

## CapabilityDependencyStatus
### Properties
* **message**: string (ReadOnly): Actionable detail when the dependency is not ready.
* **name**: string (Required, ReadOnly): The capability resource name.
* **state**: 'Failed' | 'InProgress' | 'NotRequested' | 'Pending' | 'Succeeded' | string (Required, ReadOnly): The current dependency state.

## CapabilityProperties
### Properties
* **message**: string (ReadOnly): Actionable detail when the capability is not ready.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the capability.
* **settings**: [CapabilitySetting](#capabilitysetting)[]: Capability-specific configuration entries. AKS core capabilities require this collection to be empty or omitted.
* **state**: 'Failed' | 'Pending' | 'Ready' | string (ReadOnly): Capability readiness, independent of the most recent write operation.
* **versionPolicy**: 'ServiceManaged' | string: The version selection policy for the capability.

## CapabilitySetting
### Properties
* **name**: string (Required): The name of the capability-specific setting.
* **value**: string (Required): The string value of the capability-specific setting.

## CapacityProfile
### Properties
* **maximumNodes**: int {minValue: 0} (Required): The maximum number of execution nodes.
* **minimumNodes**: int {minValue: 0} (Required): The minimum number of execution nodes.

## DependencyStatus
### Properties
* **message**: string (ReadOnly): Actionable detail when the dependency is not ready.
* **providerResourceId**: string (ReadOnly): The provider resource realizing the dependency.
* **state**: 'Failed' | 'InProgress' | 'NotRequested' | 'Pending' | 'Succeeded' | string (Required, ReadOnly): The current dependency state.

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
* **message**: string (ReadOnly): Actionable detail when the binding is not ready.
* **networkProfile**: [RuntimeNetworkProfile](#runtimenetworkprofile): The runtime network configuration for a managed runtime.
* **ownership**: 'Created' | 'Referenced' | string (ReadOnly): The ownership of the provider resource.
* **providerResourceId**: string (ReadOnly): The provider resource created or referenced by the binding.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the runtime binding.
* **state**: 'Failed' | 'Pending' | 'Provisioning' | 'Ready' | string (ReadOnly): Runtime readiness, independent of the most recent write operation.

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
* **executionIdentity**: [ExecutionIdentity](#executionidentity) (Required): The identity made available to the execution runtime.

## RuntimeLinkIntegrationProfile
### Properties
* **managedIdentityResourceId**: string: The user-assigned identity used by the provider integration.

## RuntimeLinkProperties
### Properties
* **capacityProfile**: [CapacityProfile](#capacityprofile): Accepted capacity intent only.
* **executionBindingResourceId**: string: The optional sibling runtime binding that provides execution.
* **integrationProfile**: [RuntimeLinkIntegrationProfile](#runtimelinkintegrationprofile): The provider integration identity configuration.
* **message**: string (ReadOnly): Actionable detail when the link is not ready.
* **orchestratorBindingResourceId**: string (Required): The sibling runtime binding that provides orchestration.
* **providerResourceId**: string (ReadOnly): The provider resource that realizes the runtime composition.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the runtime link.
* **state**: 'Failed' | 'Pending' | 'Provisioning' | 'Ready' | string (ReadOnly): Runtime-link readiness, independent of provisioning success.
* **subnetResourceId**: string: The dedicated managed virtual node pool subnet in the bindings' shared virtual network. Required for customer networks; otherwise uses the space-owned subnet. Immutable after creation.

## RuntimeNetworkProfile
### Properties
* **egressMode**: 'CustomerManaged' | 'ServiceManaged' | string: Indicates who manages runtime egress.
* **subnetResourceId**: string: The customer-provided subnet used by the runtime.

## SystemAssignedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): Type of managed service identity (either system assigned, or none).

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

## WorkloadSpaceProperties
### Properties
* **operationStatus**: [AggregateOperationStatus](#aggregateoperationstatus) (ReadOnly): Aggregate status across children and dependencies.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the workload space.
* **state**: 'Deleting' | 'Failed' | 'PendingConfiguration' | 'Ready' | string (ReadOnly): The readiness of the composed runtime environment.

