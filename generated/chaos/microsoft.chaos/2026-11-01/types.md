# Microsoft.Chaos @ 2026-11-01

## Resource Microsoft.Chaos/experiments@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentProperties](#experimentproperties) (Required): The properties of the experiment resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/experiments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/experiments/executions@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentExecutionProperties](#experimentexecutionproperties) (ReadOnly): The properties of experiment execution status.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/experiments/executions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/actions@2026-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ActionProperties](#actionproperties) (ReadOnly): The properties of the action resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/actions/versions@2026-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ActionProperties](#actionproperties) (ReadOnly): The properties of the action version resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/actions/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes@2026-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetTypeProperties](#targettypeproperties) (ReadOnly): The properties of the target type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/targetTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes/capabilityTypes@2026-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityTypeProperties](#capabilitytypeproperties) (ReadOnly): The properties of the capability type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/targetTypes/capabilityTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/scenarioTemplates@2026-11-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[A-Za-z0-9\-._~]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScenarioTemplateProperties](#scenariotemplateproperties) (ReadOnly): The properties of the scenario template's newest published version.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/scenarioTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/scenarioTemplates/versions@2026-11-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[A-Za-z0-9\-._~]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScenarioTemplateVersionProperties](#scenariotemplateversionproperties) (ReadOnly): The properties of the scenario template version.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/scenarioTemplates/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets@2026-11-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure resource location.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties) (Required): The properties of the target resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/targets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets/capabilities@2026-11-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityProperties](#capabilityproperties): The properties of a capability resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/targets/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties) (Required): The properties of the Workspace resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/connections@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionProperties](#connectionproperties): The properties of the connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/discoveredResources@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[a-zA-Z0-9-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiscoveredResourceProperties](#discoveredresourceproperties) (ReadOnly): The properties of the discovered resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/discoveredResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/discoveries@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(latest|[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceDiscoveryProperties](#workspacediscoveryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/discoveries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/evaluations@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(latest|[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceEvaluationProperties](#workspaceevaluationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/evaluations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/scenarios@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScenarioProperties](#scenarioproperties): The properties of scenario.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/scenarios' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/scenarios/configurations@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScenarioConfigurationProperties](#scenarioconfigurationproperties): The properties of scenario definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/scenarios/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/workspaces/scenarios/runs@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScenarioRunProperties](#scenariorunproperties) (ReadOnly): The properties of scenario run.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/workspaces/scenarios/runs' (ReadOnly, DeployTimeConstant): The resource type

## Function cancel (Microsoft.Chaos/experiments@2026-11-01)
* **Resource**: Microsoft.Chaos/experiments
* **ApiVersion**: 2026-11-01
* **Output**: any

## Function cancel (Microsoft.Chaos/workspaces/scenarios/runs@2026-11-01)
* **Resource**: Microsoft.Chaos/workspaces/scenarios/runs
* **ApiVersion**: 2026-11-01
* **Output**: any

## Function discover (Microsoft.Chaos/workspaces@2026-11-01)
* **Resource**: Microsoft.Chaos/workspaces
* **ApiVersion**: 2026-11-01
* **Output**: [WorkspaceDiscovery](#workspacediscovery)

## Function evaluate (Microsoft.Chaos/workspaces@2026-11-01)
* **Resource**: Microsoft.Chaos/workspaces
* **ApiVersion**: 2026-11-01
* **Output**: [WorkspaceEvaluation](#workspaceevaluation)

## Function execute (Microsoft.Chaos/workspaces/scenarios/configurations@2026-11-01)
* **Resource**: Microsoft.Chaos/workspaces/scenarios/configurations
* **ApiVersion**: 2026-11-01
* **Output**: any

## Function fixResourcePermissions (Microsoft.Chaos/workspaces/scenarios/configurations@2026-11-01)
* **Resource**: Microsoft.Chaos/workspaces/scenarios/configurations
* **ApiVersion**: 2026-11-01
* **Input**: [FixResourcePermissionsRequest](#fixresourcepermissionsrequest)
* **Output**: any

## Function getExecutionDetails (Microsoft.Chaos/experiments/executions@2026-11-01)
* **Resource**: Microsoft.Chaos/experiments/executions
* **ApiVersion**: 2026-11-01
* **Output**: [ExperimentExecutionDetails](#experimentexecutiondetails)

## Function start (Microsoft.Chaos/experiments@2026-11-01)
* **Resource**: Microsoft.Chaos/experiments
* **ApiVersion**: 2026-11-01
* **Output**: any

## Function validate (Microsoft.Chaos/workspaces/scenarios/configurations@2026-11-01)
* **Resource**: Microsoft.Chaos/workspaces/scenarios/configurations
* **ApiVersion**: 2026-11-01
* **Output**: any

## ActionDependency
### Properties
* **name**: string (Required): Name of the action this depends on.
* **onActionLifecycle**: 'AnyTerminal' | 'Failure' | 'Running' | 'Skipped' | 'Start' | 'Success' | string: The lifecycle state of the dependency action that triggers this action to start.
* **type**: 'Action' | string (Required): The type of dependency.

## ActionError
### Properties
* **code**: string (Required, ReadOnly): The stable code that identifies the action failure.
* **details**: [ActionErrorDetail](#actionerrordetail)[] (ReadOnly): Additional customer-safe details about the action failure.
* **message**: string (Required, ReadOnly): The customer-safe description of the action failure.

## ActionErrorDetail
### Properties
* **code**: string (Required, ReadOnly): The stable code that identifies the failure detail.
* **message**: string (Required, ReadOnly): The customer-safe description of the failure detail.
* **target**: string (ReadOnly): The target associated with the failure detail.

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

## ActionStatus
### Properties
* **actionId**: string (ReadOnly): The id of the action status.
* **actionName**: string (ReadOnly): The name of the action status.
* **endTime**: string (ReadOnly): String that represents the end time of the action.
* **startTime**: string (ReadOnly): String that represents the start time of the action.
* **status**: string (ReadOnly): The status of the action.
* **targets**: [ExperimentExecutionActionTargetDetailsProperties](#experimentexecutionactiontargetdetailsproperties)[] (ReadOnly): The array of targets.

## ActionSupportedTargetType
### Properties
* **requiredPermissions**: string[]: List of Azure permissions required for this target type.
* **targetType**: string: The Azure resource type (e.g., "Microsoft.Compute/virtualMachines").

## BranchStatus
### Properties
* **actions**: [ActionStatus](#actionstatus)[] (ReadOnly): The array of actions.
* **branchId**: string (ReadOnly): The id of the branch status.
* **branchName**: string (ReadOnly): The name of the branch status.
* **status**: string (ReadOnly): The status of the branch.

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

## ConnectionProperties
### Properties
* **certificateIssuer**: string: The issuer of the certificate used to authenticate the connection.
* **certificateSubjectName**: string: The subject name of the certificate used to authenticate the connection.
* **dataPlaneEndpoint**: string (ReadOnly): The regional Chaos Studio data-plane endpoint assigned to this connection.
Clients and agents use this endpoint to reach the Chaos Studio data plane
for the connection.
* **kind**: 'AksExtension' | 'ChaosAgent' | string (Required): The kind of connection, indicating the actor type authorized to reach the Chaos Studio data plane for the workspace and target.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The Microsoft Entra principal (object) ID of the identity used by the connection.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): The most recent provisioning state for the connection resource.
* **status**: 'Connected' | 'Disconnected' | 'Pending' | 'Revoked' | string (ReadOnly): The current status of the connection.
* **targetResourceId**: string (Required): The fully qualified Azure resource ID of the target resource this connection is established with.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The Microsoft Entra tenant ID that the connection identity belongs to.

## CustomerDataStorageProperties
### Properties
* **blobContainerName**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9]([a-z0-9]|(-(?!-))){1,61}[a-z0-9]$"}: Name of the Azure Blob Storage container to use or create.
* **storageAccountResourceId**: string: Azure Resource ID of the Storage account to use for Customer Data storage.

## DiscoveredResourceProperties
### Properties
* **discoveredAt**: string (Required, ReadOnly): The date and time when the resource was discovered.
* **fullyQualifiedIdentifier**: string (Required, ReadOnly): The fully qualified identifier of the discovered resource.
* **location**: string (ReadOnly): The Azure region the discovered resource is deployed to, in lowercase with no spaces. Absent when no single deployment region was captured, including global and multi-region resources.
* **namespace**: string (Required, ReadOnly): The namespace of the discovered resource.
* **resourceName**: string (Required, ReadOnly): The name of the discovered resource.
* **resourceType**: string (Required, ReadOnly): The resource type of the discovered resource.
* **scope**: string (Required, ReadOnly): The scope of the discovered resource.
* **zones**: string[] (ReadOnly): The availability zones the discovered resource occupies. Values are logical zone identifiers, such as `["1", "2"]` for a zone-pinned resource, or the single value `zone-redundant` when redundancy is expressed as a flag or SKU rather than a zone list. Absent, and never empty, when no zone information was captured; a non-zone-aware resource and a zone-aware resource without an assigned zone are not distinguished.

## EntraIdentity
### Properties
* **objectId**: string (Required, ReadOnly): The identity object id.
* **tenantId**: string (Required, ReadOnly): The identity tenant id.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExperimentExecutionActionTargetDetailsError
### Properties
* **code**: string (ReadOnly): The error code.
* **message**: string (ReadOnly): The error message

## ExperimentExecutionActionTargetDetailsProperties
### Properties
* **error**: [ExperimentExecutionActionTargetDetailsError](#experimentexecutionactiontargetdetailserror) (ReadOnly): The error of the action.
* **status**: string (ReadOnly): The status of the execution.
* **target**: string (ReadOnly): The target for the action.
* **targetCompletedTime**: string (ReadOnly): String that represents the completed date time.
* **targetFailedTime**: string (ReadOnly): String that represents the failed date time.

## ExperimentExecutionDetails
### Properties
* **id**: string (ReadOnly): String of the fully qualified resource ID.
* **name**: string (ReadOnly): String of the resource name.
* **properties**: [ExperimentExecutionDetailsProperties](#experimentexecutiondetailsproperties) (ReadOnly): The properties of the experiment execution details.
* **type**: string (ReadOnly): String of the resource type.

## ExperimentExecutionDetailsProperties
### Properties
* **failureReason**: string (ReadOnly): The reason why the execution failed.
* **lastActionAt**: string (ReadOnly): String that represents the last action date time.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Resource provisioning state. Not currently in use for executions.
* **runInformation**: [ExperimentExecutionDetailsPropertiesRunInformation](#experimentexecutiondetailspropertiesruninformation) (ReadOnly): The information of the experiment run.
* **startedAt**: string (ReadOnly): String that represents the start date time.
* **status**: string (ReadOnly): The status of the execution.
* **stoppedAt**: string (ReadOnly): String that represents the stop date time.

## ExperimentExecutionDetailsPropertiesRunInformation
### Properties
* **steps**: [StepStatus](#stepstatus)[] (ReadOnly): The steps of the experiment run.

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

## FixResourcePermissionsRequest
### Properties
* **whatIf**: bool: Optional value that indicates whether to run a "dry run" of fixing resource permissions.

## KeyValuePair
### Properties
* **key**: string {minLength: 1} (Required): The name of the setting for the action.
* **value**: string {minLength: 1} (Required): The value of the setting for the action.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## OperationError
### Properties
* **errorCode**: string (Required): The error code identifying the type of system error.
* **errorMessage**: string (Required): A human-readable description of the system error.

## PermissionError
### Properties
* **errorMessage**: string (ReadOnly): The error message describing the permission validation failure, when the
failure carries a distinct message (for example, when the target could not
be read to evaluate access).
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

## Recommendation
### Properties
* **evaluationRunAt**: string (ReadOnly): The UTC time when the recommendation was evaluated.
* **recommendationStatus**: 'Evaluating' | 'EvaluationCancelled' | 'EvaluationFailed' | 'NotApplicable' | 'NotEvaluated' | 'Recommended' | string (Required, ReadOnly): The recommendation status.

## ResourceStateError
### Properties
* **errorCode**: string (Required, ReadOnly): The error code.
* **errorMessage**: string (Required, ReadOnly): The error message.
* **remediationUri**: string (Required, ReadOnly): The remediation uri.
* **resourceId**: string (Required, ReadOnly): The resource id for the affected resource.

## ResourceTargeting
### Properties
* **exclude**: [ResourceTargetingCriteria](#resourcetargetingcriteria): Exclusion criteria. Resources matching ANY active dimension are removed.
Null or omitted means no exclusions applied.
* **include**: [ResourceTargetingCriteria](#resourcetargetingcriteria): Inclusion criteria. Resources must match ALL active dimensions to be candidates.
Null or omitted means no inclusion filtering (all resources are candidates).

## ResourceTargetingCriteria
### Properties
* **locations**: string[]: Array of Azure location strings (e.g., "eastus", "westeurope", "global").
Case-insensitive, normalized form only (e.g., "eastus" not "East US").
* **physicalZones**: string[]: Array of physical datacenter zone identifiers in `{region}-az{N}` format
(e.g., "westus2-az1"). Resolved to logical zones per-subscription at execution time.

Mutually exclusive with `zones` — set one or the other, not both.
* **resources**: string[]: Array of fully qualified Azure resource IDs. Case-insensitive equality.
* **tags**: [KeyValuePair](#keyvaluepair)[]: Array of tag key-value pairs for filtering by Azure resource tags.
Key and value are matched case-insensitively. Use "*" as value to match any value for a key.
* **types**: string[]: Array of Azure resource type strings (e.g., "Microsoft.Compute/virtualMachines").
Case-insensitive equality. Supports trailing wildcard (e.g., "Microsoft.Compute/*").
* **zones**: string[]: Array of logical availability zone identifiers (e.g., "1", "2", "3", "zone-redundant").

Mutually exclusive with `physicalZones` — set one or the other, not both.
When set, `locations` must also be set on the same side (zone IDs are only meaningful within a region).

## RunAfter
### Properties
* **behavior**: 'All' | 'Any' | 'AtLeastOne' | string: Defines how multiple dependencies are evaluated.
* **items**: [ActionDependency](#actiondependency)[] (Required): Array of action dependencies.

## ScenarioAction
### Properties
* **actionId**: string (Required): Identifier of the action and version (e.g., "microsoft-compute-shutdown/1.0").
* **description**: string: Human-readable description of what this action does.
* **duration**: string (Required): ISO 8601 duration for how long the action runs (e.g., PT30M for 30 minutes). Supports template macro syntax (%%\{parameters.\<name\>\}%%).
* **externalResource**: [ExternalResource](#externalresource): External resource reference for the action.
* **failureBehavior**: 'Continue' | 'Stop' | string: Per-action override for how the scenario run reacts when this action fails. When omitted,
the action inherits the scenario-level `failureBehavior`; when neither is supplied the
effective behavior is `Stop`.
* **name**: string {pattern: "^[a-zA-Z0-9-_]+$"} (Required): Unique name for the action.
* **parameters**: [KeyValuePair](#keyvaluepair)[]: Action-specific parameter values.
* **runAfter**: [RunAfter](#runafter): Action dependencies that control when this action starts.
* **selectors**: [ScenarioActionSelector](#scenarioactionselector)[] {minLength: 1, maxLength: 2}: Action-specific target selectors evaluated during execution. When provided,
the collection must contain either `logicalZone` and `location`, or `physicalZone`.
Selector names must be unique, the two modes cannot be combined, and the service
enforces the cross-item combination at runtime.
* **timeout**: string: ISO 8601 duration for maximum action execution time. Supports template macro syntax.
* **waitBefore**: string: ISO 8601 duration to wait before action starts (e.g., PT30S for 30 seconds). Supports template macro syntax.

## ScenarioActionSelector
### Properties
* **name**: 'location' | 'logicalZone' | 'physicalZone' | string (Required): The selector name, such as `logicalZone`, `physicalZone`, or `location`.
* **value**: string (Required): The value that targets must match. Supports template macro syntax.

## ScenarioConfigurationProperties
### Properties
* **parameters**: [KeyValuePair](#keyvaluepair)[]: Runtime parameter values for the scenario. Keys must match parameter names defined in the scenario.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given scenario resource.
* **resourceTargeting**: [ResourceTargeting](#resourcetargeting): Unified resource targeting policy that controls which discovered resources participate
in fault injection. Replaces the separate `exclusions` and `filters` properties with
symmetric include/exclude criteria.

Include uses AND logic — a resource must match ALL active include dimensions.
Exclude uses OR logic — a resource is removed if it matches ANY exclude dimension.
When include and exclude conflict on the same resource, exclude wins.

Null or omitted means all discovered resources participate (no targeting constraints).
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
* **format**: [ScenarioParameterFormat](#scenarioparameterformat): Format validation applied to the parameter's value, and examples of values that satisfy it.
* **name**: string {minLength: 1} (Required): The name of the parameter.
* **required**: bool: Whether this parameter is required.
* **type**: 'array' | 'boolean' | 'number' | 'object' | 'string' | string (Required): Parameter data type.

## ScenarioParameterFormat
### Properties
* **examples**: string[]: Human-readable examples of values that satisfy the format.
* **formatType**: 'AzureRegion' | 'AzureResourceId' | 'AzureZone' | 'Duration' | 'Json' | string: The built-in format the value is validated against.

## ScenarioProperties
### Properties
* **actions**: [ScenarioAction](#scenarioaction)[] {minLength: 1}: Array of actions that define the scenario's orchestration.
* **createdFrom**: string: Resource ID of the template version this scenario was created from (optional).
The ID has the form
`/providers/Microsoft.Chaos/scenarioTemplates/{scenarioTemplateName}/versions/{version}`.
This property retains its existing string representation for compatibility
with earlier API versions and SDKs.

A scenario's structure comes from exactly one of two mutually exclusive sources.
When `createdFrom` is supplied on create, the referenced template version is the
authoritative source for the scenario's structure; inline `parameters` and
`actions` are not used. When `createdFrom` is absent, the structure comes from
the inline `parameters` and `actions` supplied in the request.
Supplying neither source is rejected by request validation.
* **description**: string: Description of what this scenario does (optional).
* **failureBehavior**: 'Continue' | 'Stop' | string: Scenario-wide default for how a scenario run reacts when one of its actions fails.
An action that does not supply its own `failureBehavior` inherits this value; when
neither is supplied the effective behavior is `Stop`.

Not used when `createdFrom` is supplied, for the same reason as `parameters` and
`actions`: the referenced template version is then the authoritative source for the
scenario's structure, and it supplies this policy too. A value sent in the request is
ignored in that case — on create the referenced template's policy is used, and on update
the policy of the already persisted template is preserved.
* **parameters**: [ScenarioParameter](#scenarioparameter)[]: Parameter definitions for the scenario.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given scenario resource.
* **recommendation**: [Recommendation](#recommendation) (ReadOnly): The recommendation information for this scenario.
* **version**: string: Version of the scenario, supplied by the author. Defaults to `1.0` when not
supplied on create. This is the scenario's own version and is independent of
the version of any template it was created from.

## ScenarioRunEffectiveTarget
### Properties
* **completedAt**: string (ReadOnly): When target processing completed.
* **id**: string (Required, ReadOnly): The target resource ID.
* **startedAt**: string (ReadOnly): When target processing started.
* **state**: 'Failed' | 'NotApplicable' | 'Skipped' | 'Succeeded' | string (Required, ReadOnly): The target execution state.

## ScenarioRunProperties
### Properties
* **endTime**: string (ReadOnly): When the scenario run was completed.
* **errors**: [OperationError](#operationerror)[] (ReadOnly): System or infrastructure errors encountered during the scenario run.
* **excludedResources**: [ScenarioRunResource](#scenariorunresource)[] (ReadOnly): Resources that matched the scenario's target resource types but were excluded
from fault injection by the configuration's resource-targeting filters
(for example zone, location, or explicit exclusions). These resources will not be impacted by the run.
* **executionErrors**: [ScenarioErrors](#scenarioerrors) (ReadOnly): Business errors from fault injection — permission and resource state issues.
* **managedIdentityPrincipalId**: string (Required, ReadOnly): The principal id for the managed identity used for the run.
* **resources**: [ScenarioRunResource](#scenariorunresource)[] (Required, ReadOnly): All resources discovered for the scenario run.
* **resourceSnapshotId**: string (ReadOnly): The resource snapshot ID this run is pinned to. Resolved from the scenario's
pinned evaluation snapshot (template scenarios) or the latest discovery
snapshot (custom scenarios) at run creation, ensuring the run executes against
the same set of discovered resources that produced the recommendation.
* **scenarioConfigurationName**: string (Required, ReadOnly): The scenario configuration name.
* **scenarioName**: string (Required, ReadOnly): The scenario name.
* **scenarioRunJson**: string (ReadOnly): The scenario run json.
* **scenarioRunSummary**: [ScenarioRunSummaryAction](#scenariorunsummaryaction)[] (ReadOnly): The scenario run summary.
* **startTime**: string (Required, ReadOnly): When the scenario run was started.
* **status**: 'Canceled' | 'Canceling' | 'CleaningUp' | 'Failed' | 'Generating' | 'PartiallySucceeded' | 'Preparing' | 'Queued' | 'Resolving' | 'Running' | 'Starting' | 'Succeeded' | 'Validating' | 'ValidationSucceeded' | string (Required, ReadOnly): The scenario run status.
* **warnings**: [ScenarioRunWarning](#scenariorunwarning)[] (ReadOnly): Customer-actionable warnings encountered during the scenario run.
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
* **error**: [ActionError](#actionerror) (ReadOnly): Structured information about the action failure.
* **failureSuppressed**: bool (ReadOnly): Whether this action's failure was suppressed by the effective `failureBehavior`
and therefore did not fail the scenario run. Present only for actions in the
`Failed` state; absent otherwise.
* **resources**: [ScenarioRunSummaryResource](#scenariorunsummaryresource)[] (Required, ReadOnly): The resources associated with the specified action, including the concrete targets
evaluated during execution.
* **startedAt**: string (ReadOnly): When the action was started.
* **state**: 'Canceled' | 'Canceling' | 'Failed' | 'FailingOnError' | 'Pending' | 'Running' | 'Skipped' | 'Starting' | 'Stopping' | 'Succeeded' | string (Required, ReadOnly): The state of the action.

## ScenarioRunSummaryResource
### Properties
* **affectedResources**: [ScenarioRunEffectiveTarget](#scenarioruneffectivetarget)[] (ReadOnly): The resources affected during action execution.
* **id**: string (Required, ReadOnly): The resource ID.

## ScenarioRunWarning
### Properties
* **code**: string (Required, ReadOnly): The stable code that identifies the warning.
* **details**: [ScenarioRunWarningDetail](#scenariorunwarningdetail)[] (ReadOnly): Additional customer-safe details about the warning.
* **message**: string (Required, ReadOnly): The customer-safe description of the warning.

## ScenarioRunWarningDetail
### Properties
* **code**: string (Required, ReadOnly): The stable code that identifies the warning detail.
* **message**: string (Required, ReadOnly): The customer-safe description of the warning detail.
* **target**: string (ReadOnly): The target associated with the warning detail.

## ScenarioTemplateProperties
### Properties
* **actions**: [ScenarioAction](#scenarioaction)[] {minLength: 1} (Required, ReadOnly): The actions that define the template's orchestration. These are the same model a scenario
publishes, and carry unresolved `%%\{...\}%%` macros; the macros are substituted when the
scenario runs, not when it is read or created.

Three macro namespaces may appear:

- `%%\{parameters.\<name\>\}%%` — resolves from the parameter values supplied when the
scenario is configured. The accepted names are declared by `parameters`.
- `%%\{resourceTargeting.include.\<dimension\>\}%%` — resolves from the resource targeting
of the scenario's configuration (for example `zones`, `locations`). The template does not
declare these; they are dimensions of the configuration supplied at run time.
- `%%\{filters.\<dimension\>\}%%` — deprecated spelling of `resourceTargeting.include.`,
retained only so that superseded template versions keep resolving. Do not depend on it;
the newest version of every template uses `resourceTargeting.include.`.

An action's `failureBehavior` overrides the template-wide `failureBehavior` for that action
alone; an action that does not carry one inherits the template-wide value.
* **description**: string (ReadOnly): Description of what the template does, and what resilience question it answers.
* **displayName**: string (ReadOnly): Localized display name of the template.
* **failureBehavior**: 'Continue' | 'Stop' | string (ReadOnly): Template-wide default for how a scenario run reacts when one of this template's actions
fails. An action that does not carry its own `failureBehavior` inherits this value; when
neither is present the effective behavior is `Stop`.

A scenario created from this template takes this policy with the rest of the template's
structure, so it is also the scenario's resolved `failureBehavior`. Template versions
published before this policy existed do not carry one and report it as absent, which the
run resolves as `Stop`.
* **latestVersion**: string (Required, ReadOnly): The newest published version of the template, for example 1.2. This is the version whose
content the remaining properties describe, and the version a scenario records when it is
created from the template without naming one.
* **parameters**: [ScenarioParameter](#scenarioparameter)[] (ReadOnly): Parameter definitions the template accepts. Values are supplied when the scenario created
from this template is configured, and are referenced from an action through the
`%%\{parameters.\<name\>\}%%` macro.

## ScenarioTemplateVersionProperties
### Properties
* **actions**: [ScenarioAction](#scenarioaction)[] {minLength: 1} (Required, ReadOnly): The actions that define the template's orchestration. These are the same model a scenario
publishes, and carry unresolved `%%\{...\}%%` macros; the macros are substituted when the
scenario runs, not when it is read or created.

Three macro namespaces may appear:

- `%%\{parameters.\<name\>\}%%` — resolves from the parameter values supplied when the
scenario is configured. The accepted names are declared by `parameters`.
- `%%\{resourceTargeting.include.\<dimension\>\}%%` — resolves from the resource targeting
of the scenario's configuration (for example `zones`, `locations`). The template does not
declare these; they are dimensions of the configuration supplied at run time.
- `%%\{filters.\<dimension\>\}%%` — deprecated spelling of `resourceTargeting.include.`,
retained only so that superseded template versions keep resolving. Do not depend on it;
the newest version of every template uses `resourceTargeting.include.`.

An action's `failureBehavior` overrides the template-wide `failureBehavior` for that action
alone; an action that does not carry one inherits the template-wide value.
* **description**: string (ReadOnly): Description of what the template does, and what resilience question it answers.
* **displayName**: string (ReadOnly): Localized display name of the template.
* **failureBehavior**: 'Continue' | 'Stop' | string (ReadOnly): Template-wide default for how a scenario run reacts when one of this template's actions
fails. An action that does not carry its own `failureBehavior` inherits this value; when
neither is present the effective behavior is `Stop`.

A scenario created from this template takes this policy with the rest of the template's
structure, so it is also the scenario's resolved `failureBehavior`. Template versions
published before this policy existed do not carry one and report it as absent, which the
run resolves as `Stop`.
* **parameters**: [ScenarioParameter](#scenarioparameter)[] (ReadOnly): Parameter definitions the template accepts. Values are supplied when the scenario created
from this template is configured, and are referenced from an action through the
`%%\{parameters.\<name\>\}%%` macro.

## StepStatus
### Properties
* **branches**: [BranchStatus](#branchstatus)[] (ReadOnly): The array of branches.
* **status**: string (ReadOnly): The value of the status of the step.
* **stepId**: string (ReadOnly): The id of the step.
* **stepName**: string (ReadOnly): The name of the step.

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

## TemplateEvaluationResultItem
### Properties
* **evaluationResult**: 'Evaluating' | 'EvaluationCancelled' | 'EvaluationFailed' | 'NotApplicable' | 'NotEvaluated' | 'Recommended' | string (Required): The evaluation result for this template.
* **templateId**: string (Required, ReadOnly): The canonical ARM ID of the evaluated scenario-template version. Scenario IDs and versionless template aliases are not valid substitutes.
* **templateName**: string {minLength: 1} (Required, ReadOnly): The stable catalog name of the evaluated scenario template, not a localized display name.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WorkspaceCustomerManagedKeyEncryption
### Properties
* **keyEncryptionKeyUrl**: string {pattern: "^https://[a-zA-Z0-9-]+\.vault\.[a-zA-Z0-9.-]+/keys/[a-zA-Z0-9-]+$"} (Required): The versionless HTTPS Key Vault key URI in the supported cloud and Workspace
tenant. The key vault must belong to the same Microsoft Entra tenant as
the Workspace. Its HTTPS origin must match the vault referenced by
keyVaultResourceId. The service validates the effective pair and caller
vault-read permission synchronously through Azure Resource Manager before
creating public operation metadata, accepting the configuration operation,
persisting requested encryption, or changing Storage or customer data.
Supports RSA keys in Azure Key Vault and RSA-HSM keys in Premium Key Vault,
with key sizes of 2048, 3072, or 4096 bits. Premium RSA-HSM keys use the same
vault URL. The separate Azure Managed HSM service is not supported;
Managed HSM endpoints are rejected before operation acceptance.
A key version, query string, or fragment is not permitted.
Azure Storage follows key versions automatically. Keep the previous version
available for at least 24 hours after rotation.
* **keyVaultResourceId**: string (Required): The fully qualified Azure resource ID of the key vault that contains the key.
Use /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName},
not a key child resource, Managed HSM, or URL. Full PUT with CMK and PATCH
that changes either CMK member require Microsoft.KeyVault/vaults/read on
the effective vault. The service compares its canonical ID, tenant, and
vault URI with the requested pair before accepting the operation.

## WorkspaceCustomerManagedKeyOnboarding
### Properties
* **applicationId**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, ReadOnly): The Microsoft Entra application ID used for customer consent, returned for
existing Workspaces, including Microsoft-managed Workspaces. This does not
permit adding CMK to an existing Microsoft-managed Workspace. Before
creating a Workspace with a customer key, obtain the application name and
ID for the target cloud from the service onboarding documentation or Portal,
then consent and grant key access. The configuring caller separately needs
Microsoft.KeyVault/vaults/read on the referenced vault.
GET returns the same application ID.
This is not a service principal object ID or an identity selector.
The Workspace's top-level identity does not select this application.

## WorkspaceDiscovery
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [WorkspaceDiscoveryProperties](#workspacediscoveryproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## WorkspaceDiscoveryCoverageSummary
### Properties
* **resources**: [WorkspaceDiscoveryResourceCoverageSummary](#workspacediscoveryresourcecoveragesummary) (ReadOnly): Required resource occurrences only from scopes with a known complete expected inventory set. Absent exactly when knownExpectedSetCount is zero. Unknown is not a known empty set.
* **scopes**: [WorkspaceDiscoveryScopeCoverageSummary](#workspacediscoveryscopecoveragesummary) (Required, ReadOnly): The scope-occurrence coverage partitions for this discovery result.

## WorkspaceDiscoveryProperties
### Properties
* **completeness**: 'BaselineUnknown' | 'Established' | 'KnownPartial' | 'VerificationIncomplete' | string (ReadOnly): The coverage established by the accepted discovery result for Azure Resource Manager scopes. Present with coverageSummary on newly produced snapshot results; absence is not Established or a known zero.
* **coverageSummary**: [WorkspaceDiscoveryCoverageSummary](#workspacediscoverycoveragesummary) (ReadOnly): Coverage facts for the accepted result. Scope counts, resource-occurrence counts, warning counts, and returned inventory-row counts are different units and must not be combined.
* **endTime**: string (ReadOnly): The discovery UTC end time.
* **errors**: [OperationError](#operationerror)[] (ReadOnly): System or infrastructure errors encountered during discovery.
* **resourceSnapshotId**: string (ReadOnly): The resource snapshot ID produced by this discovery.
* **startTime**: string (ReadOnly): The discovery UTC start time.
* **status**: 'Canceled' | 'Failed' | 'InProgress' | 'PartiallySucceeded' | 'Pending' | 'Queued' | 'Succeeded' | string (Required, ReadOnly): The discovery status.
* **warnings**: [WorkspaceDiscoveryWarning](#workspacediscoverywarning)[] (ReadOnly): Confirmed access, missing-resource, or access-indeterminate guidance. System verification failures are reported in errors, not as permission warnings. The returned array may be a subset; use warningsTotalCount and warningsTruncated.
* **warningsTotalCount**: int {minValue: 0} (ReadOnly): The deduplicated number of warning identities before sampling. Identity consists of the expanded scope, affected resource, and reason. Absent means no accepted warning population was recorded, not zero warnings.
* **warningsTruncated**: bool (ReadOnly): Whether warnings contains fewer entries than warningsTotalCount. False requires equality; true requires a smaller returned array. An accepted empty warning population is an empty array, zero total, and false.
* **workspaceId**: string (Required, ReadOnly): The workspace ID this discovery belongs to.

## WorkspaceDiscoveryResourceCoverageSummary
### Properties
* **classifiedCount**: int {minValue: 0} (Required, ReadOnly): The number of expected occurrences with a terminal access or presence classification.
* **coveredCount**: int {minValue: 0} (Required, ReadOnly): The number of classified expected occurrences actually represented in the produced snapshot. Access to a container or its descendants does not invent a resource occurrence.
* **expectedCount**: int {minValue: 0} (Required, ReadOnly): The number of unique required resource occurrences across known-set scopes, not the number of service-group container members or listed inventory rows.
* **unclassifiedCount**: int {minValue: 0} (Required, ReadOnly): The number of expected occurrences that required system verification could not classify.

## WorkspaceDiscoveryScopeCoverageSummary
### Properties
* **baselineUnknownCount**: int {minValue: 0} (Required, ReadOnly): The number of scopes with a structurally unavailable denominator and no observed shortfall, including successful observed-empty container scans.
* **establishedCount**: int {minValue: 0} (Required, ReadOnly): The number of scopes with Established coverage.
* **knownExpectedSetCount**: int {minValue: 0} (Required, ReadOnly): The number of scopes with an authoritative complete expected resource-occurrence set, including authoritatively empty sets.
* **knownPartialCount**: int {minValue: 0} (Required, ReadOnly): The number of scopes with confirmed undelivered obligations and no remaining system-verification gap.
* **totalCount**: int {minValue: 0} (Required, ReadOnly): The number of expanded Azure Resource Manager scope occurrences represented by the result.
* **unknownExpectedSetCount**: int {minValue: 0} (Required, ReadOnly): The number of scopes whose complete expected inventory set is unavailable. A service group's known subscription or resource-group membership does not establish its descendant-resource denominator.
* **verificationIncompleteCount**: int {minValue: 0} (Required, ReadOnly): The number of scopes with required verification failure, unavailable required child enumeration, or a proven accessible required resource absent from the snapshot.

## WorkspaceDiscoveryWarning
* **Discriminator**: reason

### Base Properties
* **message**: string (Required, ReadOnly): Human-readable guidance with attribution appropriate to the reason.
* **scopeId**: string (Required, ReadOnly): The normalized expanded source scope where the affected obligation was encountered.
* **scopeKind**: string (Required, ReadOnly): The source scope kind, such as Subscription, ResourceGroup, ServiceGroup, or Resource.

### WorkspaceDiscoveryAccessWarning
#### Properties
* **reason**: 'AccessIndeterminate' (Required): The confirmed guidance reason, not a system-verification failure.
* **resourceId**: string (Required, ReadOnly): The affected resource or member identity.

### WorkspaceDiscoveryPermissionWarning
#### Properties
* **permission**: [PermissionError](#permissionerror) (Required, ReadOnly): The affected resource, required permissions, recommended roles, and optional identity details.
* **reason**: 'RbacValidationFailed' (Required): The confirmed guidance reason, not a system-verification failure.

### WorkspaceDiscoveryResourceWarning
#### Properties
* **reason**: 'TargetNotFound' (Required): The confirmed guidance reason, not a system-verification failure.
* **resourceId**: string (Required, ReadOnly): The affected resource or member identity.


## WorkspaceEncryption
### Properties
* **customerManagedKeyEncryption**: [WorkspaceCustomerManagedKeyEncryption](#workspacecustomermanagedkeyencryption): The requested customer-managed key. Its presence is fixed by accepted
Workspace creation: adding CMK to a Microsoft-managed Workspace or removing
CMK from a CMK-created Workspace is rejected with InvalidEncryptionConfiguration.
The key pair remains updateable on CMK-created Workspaces, including after
a failed creation. A present object requires a coherent keyEncryptionKeyUrl and
keyVaultResourceId pair. After synchronous caller and vault validation,
the accepted pair can be returned while configuration is Pending.
It does not prove that active data already uses the requested key.
* **customerManagedKeyOnboarding**: [WorkspaceCustomerManagedKeyOnboarding](#workspacecustomermanagedkeyonboarding) (ReadOnly): The service application to authorize before creating a new CMK Workspace; also returned for existing Workspaces.
* **status**: [WorkspaceEncryptionStatus](#workspaceencryptionstatus) (ReadOnly): The observed result, separate from the requested setting.

## WorkspaceEncryptionStatus
### Properties
* **error**: [ErrorDetail](#errordetail) (ReadOnly): The configuration or health error. Failed state includes a code and message.
CustomerKeyAccessFailed means Azure Storage cannot use the customer key.
EncryptionConfigurationFailed means a service-side configuration step failed.
A more specific cause is included only when the platform response identifies it.
* **lastCheckedAt**: string (ReadOnly): The UTC time of the observation, including a failed check.
* **observedKeyEncryptionKeyUrl**: string (ReadOnly): The active key URI reported by Azure Storage, including its version when
available. Omitted when unknown or when protection is Microsoft-managed.
This value is not inferred from the requested key.
* **observedProtection**: 'CustomerManaged' | 'MicrosoftManaged' | string (ReadOnly): The last directly observed active protection. Omitted when unknown.
* **state**: 'Applied' | 'Failed' | 'NotConfigured' | 'Pending' | 'Unknown' | string (Required, ReadOnly): The result of configuration or the most recent usable health observation.

## WorkspaceEvaluation
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [WorkspaceEvaluationProperties](#workspaceevaluationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## WorkspaceEvaluationProperties
### Properties
* **discoveryResultId**: string (Required, ReadOnly): The canonical Azure resource ID of the retained discovery result that supplied resourceSnapshotId. This reference does not change when the latest discovery changes and never identifies the latest alias or a protected LRO polling handle.
* **endTime**: string (ReadOnly): The evaluation UTC end time.
* **errors**: [OperationError](#operationerror)[] (ReadOnly): System or infrastructure errors encountered during evaluation.
* **numTemplatesEvaluatedCancelled**: int {minValue: 0} (Required, ReadOnly): The number of templates that were cancelled during evaluation.
* **numTemplatesEvaluatedFailed**: int {minValue: 0} (Required, ReadOnly): The number of templates that failed evaluation.
* **numTemplatesEvaluatedSucceeded**: int {minValue: 0} (Required, ReadOnly): The number of templates that evaluated successfully.
* **numTemplatesToEvaluate**: int {minValue: 0} (Required, ReadOnly): The number of templates to evaluate.
* **resourceSnapshotId**: string (Required, ReadOnly): The resource snapshot ID used for this evaluation.
* **results**: [TemplateEvaluationResultItem](#templateevaluationresultitem)[] (ReadOnly): Per-template evaluation results.
* **startTime**: string (ReadOnly): The evaluation UTC start time.
* **status**: 'Canceled' | 'Failed' | 'InProgress' | 'PartiallySucceeded' | 'Pending' | 'Queued' | 'Succeeded' | string (Required, ReadOnly): The evaluation status.
* **workspaceId**: string (Required, ReadOnly): The workspace ID this evaluation belongs to.

## WorkspaceProperties
### Properties
* **encryption**: [WorkspaceEncryption](#workspaceencryption): The requested customer key and service observations. Accepted creation fixes
whether customerManagedKeyEncryption is present. On PUT, omission of
encryption or its CMK object, or an empty encryption object, is valid for
Microsoft-managed Workspaces but rejected for CMK-created Workspaces.
Null is not a valid PUT value. A CMK-created Workspace can replace its key.
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

