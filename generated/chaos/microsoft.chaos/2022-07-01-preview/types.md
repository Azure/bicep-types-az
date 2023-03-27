# Microsoft.Chaos @ 2022-07-01-preview

## Resource Microsoft.Chaos/experiments@2022-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The identity of the experiment resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentProperties](#experimentproperties) (Required): The properties of the experiment resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata of the experiment resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/experiments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes@2022-07-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the Target Type resource.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetTypeProperties](#targettypeproperties) (ReadOnly): The properties of the target type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata properties of the target type resource.
* **type**: 'Microsoft.Chaos/locations/targetTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes/capabilityTypes@2022-07-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the Capability Type resource.
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityTypeProperties](#capabilitytypeproperties) (ReadOnly): The properties of the capability type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata properties of the capability type resource.
* **type**: 'Microsoft.Chaos/locations/targetTypes/capabilityTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets@2022-07-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the target resource.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties) (Required): The properties of the target resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata of the target resource.
* **type**: 'Microsoft.Chaos/targets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets/capabilities@2022-07-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityProperties](#capabilityproperties) (ReadOnly): The properties of a capability resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The standard system metadata of a resource type.
* **type**: 'Microsoft.Chaos/targets/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## Action
* **Discriminator**: type

### Base Properties
* **name**: string {maxLength: 2048} (Required): String that represents a Capability URN.

### ContinuousAction
#### Properties
* **duration**: string {pattern: "^P(\d+Y)?(\d+M)?(\d+D)?(T(\d+H)?(\d+M)?(\d+(\.\d+)?S)?)?$"} (Required): ISO8601 formatted string that represents a duration.
* **parameters**: [KeyValuePair](#keyvaluepair)[] (Required): List of key value pairs.
* **selectorId**: string {minLength: 1} (Required): String that represents a selector.
* **type**: 'continuous' (Required): Enum that discriminates between action models.

### DelayAction
#### Properties
* **duration**: string {pattern: "^P(\d+Y)?(\d+M)?(\d+D)?(T(\d+H)?(\d+M)?(\d+(\.\d+)?S)?)?$"} (Required): ISO8601 formatted string that represents a duration.
* **type**: 'delay' (Required): Enum that discriminates between action models.

### DiscreteAction
#### Properties
* **parameters**: [KeyValuePair](#keyvaluepair)[] (Required): List of key value pairs.
* **selectorId**: string {minLength: 1} (Required): String that represents a selector.
* **type**: 'discrete' (Required): Enum that discriminates between action models.


## Branch
### Properties
* **actions**: [Action](#action)[] (Required): List of actions.
* **name**: string {minLength: 1} (Required): String of the branch name.

## CapabilityProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **parametersSchema**: string {maxLength: 2048} (ReadOnly): URL to retrieve JSON schema of the Capability parameters.
* **publisher**: string (ReadOnly): String of the Publisher that this Capability extends.
* **targetType**: string (ReadOnly): String of the Target Type that this Capability extends.
* **urn**: string {maxLength: 2048} (ReadOnly): String of the URN for this Capability Type.

## CapabilityTypeProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **displayName**: string (ReadOnly): Localized string of the display name.
* **kind**: string (ReadOnly): String of the kind of this Capability Type.
* **parametersSchema**: string {maxLength: 2048} (ReadOnly): URL to retrieve JSON schema of the Capability Type parameters.
* **publisher**: string (ReadOnly): String of the Publisher that this Capability Type extends.
* **runtimeProperties**: [CapabilityTypePropertiesRuntimeProperties](#capabilitytypepropertiesruntimeproperties): Runtime properties of this Capability Type.
* **targetType**: string (ReadOnly): String of the Target Type that this Capability Type extends.
* **urn**: string {maxLength: 2048} (ReadOnly): String of the URN for this Capability Type.

## CapabilityTypePropertiesRuntimeProperties
### Properties
* **kind**: string (ReadOnly): String of the kind of the resource's action type (continuous or discrete).

## ExperimentProperties
### Properties
* **selectors**: [Selector](#selector)[] (Required): List of selectors.
* **startOnCreation**: bool: A boolean value that indicates if experiment should be started on creation or not.
* **steps**: [Step](#step)[] (Required): List of steps.

## KeyValuePair
### Properties
* **key**: string {minLength: 1} (Required): The name of the setting for the action.
* **value**: string {minLength: 1} (Required): The value of the setting for the action.

## ResourceIdentity
### Properties
* **principalId**: string {pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): GUID that represents the principal ID of this resource identity.
* **tenantId**: string {pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (ReadOnly): GUID that represents the tenant ID of this resource identity.
* **type**: 'None' | 'SystemAssigned' (Required): String of the resource identity type.

## Selector
### Properties
* **id**: string {minLength: 1} (Required): String of the selector ID.
* **targets**: [TargetReference](#targetreference)[] (Required): List of Target references.
* **type**: 'List' | 'Percent' | 'Random' | 'Tag' (Required): Enum of the selector type.

## Step
### Properties
* **branches**: [Branch](#branch)[] (Required): List of branches.
* **name**: string {minLength: 1} (Required): String of the step name.

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
* **id**: string {pattern: "^\/[Ss][Uu][Bb][Ss][Cc][Rr][Ii][Pp][Tt][Ii][Oo][Nn][Ss]\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\/[Rr][Ee][Ss][Oo][Uu][Rr][Cc][Ee][Gg][Rr][Oo][Uu][Pp][Ss]\/[a-zA-Z0-9_\-\.\(\)]*[a-zA-Z0-9_\-\(\)]\/[Pp][Rr][Oo][Vv][Ii][Dd][Ee][Rr][Ss]\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+\/[a-zA-Z0-9_\-\.]+\/[a-zA-Z0-9_\-\.]+\/[Pp][Rr][Oo][Vv][Ii][Dd][Ee][Rr][Ss]\/[Mm][Ii][Cc][Rr][Oo][Ss][Oo][Ff][Tt]\.[Cc][Hh][Aa][Oo][Ss]\/[Tt][Aa][Rr][Gg][Ee][Tt][Ss]\/[a-zA-Z0-9_\-\.]+$"} (Required): String of the resource ID of a Target resource.
* **type**: 'ChaosTarget' (Required): Enum of the Target reference type.

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

