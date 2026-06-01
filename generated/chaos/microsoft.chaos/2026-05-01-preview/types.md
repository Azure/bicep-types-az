# Microsoft.Chaos @ 2026-05-01-preview

## Resource Microsoft.Chaos/experiments@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentProperties](#experimentproperties) (Required): The properties of the experiment resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/experiments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/experiments/executions@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentExecutionProperties](#experimentexecutionproperties) (ReadOnly): The properties of experiment execution status.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/experiments/executions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/actions@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ActionProperties](#actionproperties) (ReadOnly): The properties of the action resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/actions/versions@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ActionProperties](#actionproperties) (ReadOnly): The properties of the action version resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/actions/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetTypeProperties](#targettypeproperties) (ReadOnly): The properties of the target type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/targetTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes/capabilityTypes@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityTypeProperties](#capabilitytypeproperties) (ReadOnly): The properties of the capability type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/targetTypes/capabilityTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/privateAccesses@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAccessProperties](#privateaccessproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/privateAccesses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/privateAccesses/privateEndpointConnections@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/privateAccesses/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets@2026-05-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure resource location.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties) (Required): The properties of the target resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/targets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets/capabilities@2026-05-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityProperties](#capabilityproperties): The properties of a capability resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/targets/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties) (Required): The properties of the Workspace resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/discoveredResources@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[a-zA-Z0-9-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiscoveredResourceProperties](#discoveredresourceproperties) (ReadOnly): The properties of the discovered resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/discoveredResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/scenarios@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScenarioProperties](#scenarioproperties): The properties of scenario.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/scenarios' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/scenarios/configurations@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScenarioConfigurationProperties](#scenarioconfigurationproperties): The properties of scenario definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/scenarios/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/scenarios/runs@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScenarioRunProperties](#scenariorunproperties) (ReadOnly): The properties of scenario run.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/scenarios/runs' (ReadOnly, DeployTimeConstant): The resource type

## ActionDependency
### Properties
* **name**: string (Required): Name of the action this depends on.
* **onActionLifecycle**: 'AnyTerminal' | 'Failure' | 'Running' | 'Skipped' | 'Start' | 'Success' | string: The lifecycle state of the dependency action that triggers this action to start.
* **type**: 'Action' | string (Required): The type of dependency.

## ActionProperties
### Properties
* **actionName**: string (ReadOnly): The short name of the action (e.g., "Shutdown").
* **actionType**: 'Cancelable' | 'Continuous' | 'Discrete' | string (ReadOnly): The type of the action.
* **canonicalId**: string (ReadOnly): Canonical identifier of the action (e.g., "microsoft-compute-shutdown/1.0").
* **description**: string (ReadOnly): Description of what this action does.
* **displayName**: string (ReadOnly): Human-readable display name of the action.
* **parametersSchema**: any (ReadOnly): JSON Schema describing the parameters for this action.
* **recommendedRoles**: (string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"})[] (ReadOnly): Recommended Azure RBAC role definition GUIDs for this action.
* **supportedTargetTypes**: [ActionSupportedTargetType](#actionsupportedtargettype)[] (ReadOnly): List of target types supported by this action.
* **version**: string (ReadOnly): The version of the action (e.g., "1.0.0").

## ActionSupportedTargetType
### Properties
* **requiredPermissions**: string[]: List of Azure permissions required for this target type.
* **targetType**: string: The Azure resource type (e.g., "Microsoft.Compute/virtualMachines").

## CapabilityProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **parametersSchema**: string {maxLength: 2048} (ReadOnly): URL to retrieve JSON schema of the Capability parameters.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Resource provisioning state. Not currently in use because resource is created synchronously.
* **publisher**: string (ReadOnly): String of the Publisher that this Capability extends.
* **targetType**: string (ReadOnly): String of the Target Type that this Capability extends.
* **urn**: string {maxLength: 2048} (ReadOnly): String of the URN for this Capability Type.

## CapabilityTypeProperties
### Properties
* **azureRbacActions**: string[] (ReadOnly): Control plane actions necessary to execute capability type.
* **azureRbacDataActions**: string[] (ReadOnly): Data plane actions necessary to execute capability type.
* **description**: string (ReadOnly): Localized string of the description.
* **displayName**: string (ReadOnly): Localized string of the display name.
* **kind**: string (ReadOnly): String of the kind of this Capability Type.
* **parametersSchema**: string {maxLength: 2048} (ReadOnly): URL to retrieve JSON schema of the Capability Type parameters.
* **publisher**: string (ReadOnly): String of the Publisher that this Capability Type extends.
* **requiredAzureRoleDefinitionIds**: string[] (ReadOnly): Required Azure Role Definition Ids to execute capability type.
* **runtimeProperties**: [CapabilityTypePropertiesRuntimeProperties](#capabilitytypepropertiesruntimeproperties) (ReadOnly): Runtime properties of this Capability Type.
* **targetType**: string (ReadOnly): String of the Target Type that this Capability Type extends.
* **urn**: string {maxLength: 2048} (ReadOnly): String of the URN for this Capability Type.

## CapabilityTypePropertiesRuntimeProperties
### Properties
* **kind**: string (ReadOnly): String of the kind of the resource's action type (continuous or discrete).

## ChaosExperimentAction
* **Discriminator**: type

### Base Properties
* **name**: string {maxLength: 2048} (Required): String that represents a Capability URN.

### ContinuousAction
#### Properties
* **duration**: string (Required): ISO8601 formatted string that represents a duration.
* **parameters**: [KeyValuePair](#keyvaluepair)[] (Required): List of key value pairs.
* **selectorId**: string {minLength: 1} (Required): String that represents a selector.
* **type**: 'continuous' (Required): Chaos experiment action discriminator type

### DelayAction
#### Properties
* **duration**: string (Required): ISO8601 formatted string that represents a duration.
* **type**: 'delay' (Required): Chaos experiment action discriminator type

### DiscreteAction
#### Properties
* **parameters**: [KeyValuePair](#keyvaluepair)[] (Required): List of key value pairs.
* **selectorId**: string {minLength: 1} (Required): String that represents a selector.
* **type**: 'discrete' (Required): Chaos experiment action discriminator type


## ChaosExperimentBranch
### Properties
* **actions**: [ChaosExperimentAction](#chaosexperimentaction)[] (Required): List of actions.
* **name**: string {minLength: 1} (Required): String of the branch name.

## ChaosExperimentStep
### Properties
* **branches**: [ChaosExperimentBranch](#chaosexperimentbranch)[] (Required): List of branches.
* **name**: string {minLength: 1} (Required): String of the step name.

## ChaosTargetFilter
* **Discriminator**: type

### Base Properties

### ChaosTargetSimpleFilter
#### Properties
* **parameters**: [ChaosTargetSimpleFilterParameters](#chaostargetsimplefilterparameters): Model that represents the Simple filter parameters.
* **type**: 'Simple' (Required): Chaos target filter discriminator type


## ChaosTargetSelector
* **Discriminator**: type

### Base Properties
* **filter**: [ChaosTargetFilter](#chaostargetfilter): Model that represents available filter types that can be applied to a targets list.
* **id**: string {minLength: 1} (Required): String of the selector ID.

### ChaosTargetListSelector
#### Properties
* **targets**: [TargetReference](#targetreference)[] (Required): List of Target references.
* **type**: 'List' (Required): Chaos target selector discriminator type

### ChaosTargetQuerySelector
#### Properties
* **queryString**: string (Required): Azure Resource Graph (ARG) Query Language query for target resources.
* **subscriptionIds**: string[] (Required): Subscription id list to scope resource query.
* **type**: 'Query' (Required): Chaos target selector discriminator type


## ChaosTargetSimpleFilterParameters
### Properties
* **zones**: string[]: List of Azure availability zones to filter targets by.

## ConfigurationExclusions
### Properties
* **resources**: string[]: Array of specific resource IDs to exclude from fault injection.
* **tags**: [KeyValuePair](#keyvaluepair)[]: Array of tag key-value pairs. Resources with matching tags are excluded.
* **types**: string[]: Array of resource types. All resources of these types are excluded.

## ConfigurationFilters
### Properties
* **locations**: string[]: Array of Azure location strings. Only resources in these locations are included.

Null or omitted means all locations (no filter). Empty array means include nothing.
* **physicalZones**: string[]: Array of physical availability zone identifiers in `{region}-az{N}` format
(e.g., `"westus2-az1"`). Only resources in the corresponding logical zone
for each subscription are included.

At execution time, each physical zone is resolved to per-subscription
logical zones via the Azure locations API. The resolved mapping is surfaced
on the scenario run response (`zoneResolution`).

Null or omitted means physical zone targeting is not used.
Only one physical zone is supported in preview.

Mutually exclusive with `zones` — set one or the other, not both.
* **zones**: string[]: Array of availability zone identifiers ("1", "2", "3", "zone-redundant").
Only resources whose zones intersect this list are included.

Null or omitted means all zones (including non-zonal). Empty array means include nothing.

Mutually exclusive with `physicalZones` — set one or the other, not both.

## CustomerDataStorageProperties
### Properties
* **blobContainerName**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9]([a-z0-9]|(-(?!-))){1,61}[a-z0-9]$"}: Name of the Azure Blob Storage container to use or create.
* **storageAccountResourceId**: string: Azure Resource ID of the Storage account to use for Customer Data storage.

## DiscoveredResourceProperties
### Properties
* **discoveredAt**: string (Required, ReadOnly): The date and time when the resource was discovered.
* **fullyQualifiedIdentifier**: string (Required, ReadOnly): The fully qualified identifier of the discovered resource.
* **namespace**: string (Required, ReadOnly): The namespace of the discovered resource.
* **resourceName**: string (Required, ReadOnly): The name of the discovered resource.
* **resourceType**: string (Required, ReadOnly): The resource type of the discovered resource.
* **scope**: string (Required, ReadOnly): The scope of the discovered resource.

## EntraIdentity
### Properties
* **objectId**: string (Required, ReadOnly): The identity object id.
* **tenantId**: string (Required, ReadOnly): The identity tenant id.

## ExperimentExecutionProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Resource provisioning state. Not currently in use for executions.
* **startedAt**: string (ReadOnly): String that represents the start date time.
* **status**: string (ReadOnly): The status of the execution.
* **stoppedAt**: string (ReadOnly): String that represents the stop date time.

## ExperimentProperties
### Properties
* **customerDataStorage**: [CustomerDataStorageProperties](#customerdatastorageproperties): Optional customer-managed Storage account where Experiment schema will be stored.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given experiment resource.
* **selectors**: [ChaosTargetSelector](#chaostargetselector)[] (Required): List of selectors.
* **steps**: [ChaosExperimentStep](#chaosexperimentstep)[] (Required): List of steps.

## ExternalResource
### Properties
* **resourceId**: string: The resource ID of the external resource.

## KeyValuePair
### Properties
* **key**: string {minLength: 1} (Required): The name of the setting for the action.
* **value**: string {minLength: 1} (Required): The value of the setting for the action.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## OperationError
### Properties
* **errorCode**: string (Required): The error code identifying the type of system error.
* **errorMessage**: string (Required): A human-readable description of the system error.

## PermissionError
### Properties
* **identity**: [EntraIdentity](#entraidentity) (ReadOnly): The identity.
* **missingPermissions**: string[] (Required, ReadOnly): The missing permissions.
* **recommendedRoles**: string[] (Required, ReadOnly): The recommended roles.
* **requiredPermissions**: string[] (Required, ReadOnly): The required permissions.
* **resourceId**: string (Required, ReadOnly): The resource id for the affected resource.

## PhysicalToLogicalZoneMapping
### Properties
* **logicalZone**: string (Required, ReadOnly): The logical availability zone resolved for this subscription
(e.g., `"1"`, `"2"`, `"3"`).
* **physicalZone**: string (Required, ReadOnly): The physical availability zone (e.g., `"westus2-az1"`).

## PrivateAccessProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): A readonly collection of private endpoint connection. Currently only one endpoint connection is supported.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given privateAccess resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Public Network Access Control for PrivateAccess resource.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The Azure identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## Recommendation
### Properties
* **evaluationRunAt**: string (ReadOnly): The UTC time when the recommendation was evaluated.
* **recommendationStatus**: 'Evaluating' | 'EvaluationCancelled' | 'EvaluationFailed' | 'NotApplicable' | 'NotEvaluated' | 'Recommended' | string (Required, ReadOnly): The recommendation status.

## ResourceStateError
### Properties
* **errorCode**: int (Required, ReadOnly): The error code.
* **errorMessage**: string (Required, ReadOnly): The error message.
* **remediationUri**: string (Required, ReadOnly): The remediation uri.
* **resourceId**: string (Required, ReadOnly): The resource id for the affected resource.

## RunAfter
### Properties
* **behavior**: 'All' | 'Any' | 'AtLeastOne' | string: Defines how multiple dependencies are evaluated.
* **items**: [ActionDependency](#actiondependency)[] {minLength: 1} (Required): Array of action dependencies.

## ScenarioAction
### Properties
* **actionId**: string (Required): Identifier of the action and version (e.g., "microsoft-compute-shutdown/1.0").
* **description**: string: Human-readable description of what this action does.
* **duration**: string (Required): ISO 8601 duration for how long the action runs (e.g., PT30M for 30 minutes). Supports template macro syntax (%%\{parameters.\<name\>\}%%).
* **externalResource**: [ExternalResource](#externalresource): External resource reference for the action.
* **name**: string {pattern: "^[a-zA-Z0-9-_]+$"} (Required): Unique name for the action.
* **parameters**: [KeyValuePair](#keyvaluepair)[]: Action-specific parameter values.
* **runAfter**: [RunAfter](#runafter): Action dependencies that control when this action starts.
* **timeout**: string: ISO 8601 duration for maximum action execution time. Supports template macro syntax.
* **waitBefore**: string: ISO 8601 duration to wait before action starts (e.g., PT30S for 30 seconds). Supports template macro syntax.

## ScenarioConfigurationProperties
### Properties
* **exclusions**: [ConfigurationExclusions](#configurationexclusions): Exclusion criteria for protecting resources from fault injection.
* **filters**: [ConfigurationFilters](#configurationfilters): Filter criteria used to constrain which discovered resources participate in fault injection.
* **parameters**: [KeyValuePair](#keyvaluepair)[]: Runtime parameter values for the scenario. Keys must match parameter names defined in the scenario.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given scenario resource.
* **scenarioId**: string (Required): Resource ID of the scenario this configuration applies to.

## ScenarioErrors
### Properties
* **errorCode**: string: Error code for internal server errors.
* **errorMessage**: string: Error message for internal server errors.
* **permission**: [PermissionError](#permissionerror)[] (Required, ReadOnly): Any permission errors associated with the scenario run.
* **resource**: [ResourceStateError](#resourcestateerror)[] (Required, ReadOnly): Any resource state errors associated with the scenario run.

## ScenarioParameter
### Properties
* **default**: string: Default value for the parameter.
* **description**: string: Description of the parameter.
* **name**: string {minLength: 1} (Required): The name of the parameter.
* **required**: bool: Whether this parameter is required.
* **type**: 'array' | 'boolean' | 'number' | 'object' | 'string' | string (Required): Parameter data type.

## ScenarioProperties
### Properties
* **actions**: [ScenarioAction](#scenarioaction)[] {minLength: 1} (Required): Array of actions that define the scenario's orchestration.
* **createdFrom**: string (ReadOnly): Resource ID of the template version this scenario was created from (optional).
* **description**: string: Description of what this scenario does (optional).
* **parameters**: [ScenarioParameter](#scenarioparameter)[] (Required): Parameter definitions for the scenario.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given scenario resource.
* **recommendation**: [Recommendation](#recommendation) (ReadOnly): The recommendation information for this scenario.
* **version**: string (ReadOnly): Version of the scenario.

## ScenarioRunProperties
### Properties
* **endTime**: string (ReadOnly): When the scenario run was completed.
* **errors**: [OperationError](#operationerror)[] (ReadOnly): System or infrastructure errors encountered during the scenario run.
* **executionErrors**: [ScenarioErrors](#scenarioerrors) (ReadOnly): Business errors from fault injection — permission and resource state issues.
* **managedIdentityPrincipalId**: string (Required, ReadOnly): The principal id for the managed identity used for the run.
* **resources**: [ScenarioRunResource](#scenariorunresource)[] (Required, ReadOnly): All resources discovered for the scenario run.
* **scenarioConfigurationName**: string (Required, ReadOnly): The scenario configuration name.
* **scenarioName**: string (Required, ReadOnly): The scenario name.
* **scenarioRunJson**: string (ReadOnly): The scenario run json.
* **scenarioRunSummary**: [ScenarioRunSummaryAction](#scenariorunsummaryaction)[] (ReadOnly): The scenario run summary.
* **startTime**: string (Required, ReadOnly): When the scenario run was started.
* **status**: 'Canceled' | 'Canceling' | 'CleaningUp' | 'Failed' | 'Generating' | 'Preparing' | 'Queued' | 'Resolving' | 'Running' | 'Starting' | 'Succeeded' | 'Validating' | 'ValidationSucceeded' | string (Required, ReadOnly): The scenario run status.
* **workspaceName**: string (Required, ReadOnly): The workspace name.
* **zoneResolution**: [ZoneResolutionInfo](#zoneresolutioninfo) (ReadOnly): Zone resolution information. Present when the scenario configuration
used physical zone targeting (`physicalZones`). Contains the mode,
requested physical zones, and per-subscription logical zone mappings.

## ScenarioRunResource
### Properties
* **id**: string (Required, ReadOnly): The resource id.

## ScenarioRunSummaryAction
### Properties
* **actionUrn**: string (Required, ReadOnly): The urn for the given chaos action.
* **completedAt**: string (ReadOnly): When the action was completed.
* **resources**: [ScenarioRunResource](#scenariorunresource)[] (Required, ReadOnly): The resources associated with the specified action.
* **startedAt**: string (ReadOnly): When the action was started.
* **state**: 'Canceled' | 'Canceling' | 'Failed' | 'FailingOnError' | 'Pending' | 'Running' | 'Skipped' | 'Starting' | 'Stopping' | 'Succeeded' | string (Required, ReadOnly): The state of the action.

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
### Additional Properties
* **Additional Properties Type**: any

## TargetReference
### Properties
* **id**: string (Required): String of the resource ID of a Target resource.
* **type**: 'ChaosTarget' | string (Required): Enum of the Target reference type.

## TargetTypeProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **displayName**: string (ReadOnly): Localized string of the display name.
* **propertiesSchema**: string {maxLength: 2048} (ReadOnly): URL to retrieve JSON schema of the Target Type properties.
* **resourceTypes**: string[] (ReadOnly): List of resource types this Target Type can extend.

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WorkspaceProperties
### Properties
* **communicationEndpoint**: string (ReadOnly): The communication endpoint used to connect and communicate with the workspace for fault-injection orchestration.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given Workspace resource.
* **scopes**: string[] (Required): The intended workspace-level resource scope to be used by child scenarios.

## ZoneResolutionInfo
### Properties
* **mode**: 'logical' | 'physical' | string (Required, ReadOnly): The zone targeting mode used for this run.
`logical` — customer specified logical zone identifiers directly.
`physical` — customer specified physical zone identifiers; the system
resolved them to per-subscription logical zones at execution time.
* **requestedPhysicalZones**: string[] (Required, ReadOnly): The physical zone identifiers requested by the customer in the
scenario configuration (e.g., `["westus2-az1"]`).
Empty array when `mode` is `logical`.
* **subscriptionZoneMappings**: [ZoneResolutionMapping](#zoneresolutionmapping)[] (Required, ReadOnly): Per-subscription zone resolution results. Each entry maps a subscription
to the logical zone resolved from the requested physical zone.
Empty when `mode` is `logical`.

## ZoneResolutionMapping
### Properties
* **subscriptionId**: string (Required, ReadOnly): The subscription ID (e.g., `"6b052e15-03d3-4f17-b2e1-be7f07588291"`).
* **zoneMappings**: [PhysicalToLogicalZoneMapping](#physicaltologicalzonemapping)[] (Required, ReadOnly): The physical-to-logical zone mappings for this subscription.

