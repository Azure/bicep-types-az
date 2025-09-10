# Microsoft.Chaos @ 2025-01-01

## Resource Microsoft.Chaos/experiments@2025-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentProperties](#experimentproperties) (Required): The properties of the experiment resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/experiments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/experiments/executions@2025-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentExecutionProperties](#experimentexecutionproperties) (ReadOnly): The properties of experiment execution status.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/experiments/executions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes@2025-01-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetTypeProperties](#targettypeproperties) (ReadOnly): The properties of the target type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/targetTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes/capabilityTypes@2025-01-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityTypeProperties](#capabilitytypeproperties) (ReadOnly): The properties of the capability type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/targetTypes/capabilityTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets@2025-01-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure resource location.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties) (Required): The properties of the target resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/targets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets/capabilities@2025-01-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityProperties](#capabilityproperties): The properties of a capability resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/targets/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## CapabilityProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **parametersSchema**: string {maxLength: 2048} (ReadOnly): URL to retrieve JSON schema of the Capability parameters.
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

## ExperimentExecutionProperties
### Properties
* **startedAt**: string (ReadOnly): String that represents the start date time.
* **status**: string (ReadOnly): The status of the execution.
* **stoppedAt**: string (ReadOnly): String that represents the stop date time.

## ExperimentProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given experiment resource.
* **selectors**: [ChaosTargetSelector](#chaostargetselector)[] (Required): List of selectors.
* **steps**: [ChaosExperimentStep](#chaosexperimentstep)[] (Required): List of steps.

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

