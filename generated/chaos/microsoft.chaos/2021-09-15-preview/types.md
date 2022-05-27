# Microsoft.Chaos @ 2021-09-15-preview

## Resource Microsoft.Chaos/experiments@2021-09-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The managed identity of a resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentProperties](#experimentproperties) (Required): Model that represents the Experiment properties model.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/experiments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes@2021-09-15-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the Target Type resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TargetTypeProperties](#targettypeproperties) (ReadOnly): Model that represents the base Target Type properties model.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Chaos/locations/targetTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes/capabilityTypes@2021-09-15-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the Capability Type resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityTypeProperties](#capabilitytypeproperties) (ReadOnly): Model that represents the Capability Type properties model.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Chaos/locations/targetTypes/capabilityTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets@2021-09-15-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the target resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties) (Required): Model that represents the base Target properties model.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Chaos/targets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets/capabilities@2021-09-15-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityProperties](#capabilityproperties) (ReadOnly): Model that represents the Capability properties model.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Chaos/targets/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): GUID that represents the principal ID of this resource identity.
* **tenantId**: string (ReadOnly): GUID that represents the tenant ID of this resource identity.
* **type**: 'None' | 'SystemAssigned' (Required): String of the resource identity type.

## ExperimentProperties
### Properties
* **selectors**: [Selector](#selector)[] (Required): List of selectors.
* **startOnCreation**: bool: A boolean value that indicates if experiment should be started on creation or not.
* **steps**: [Step](#step)[] (Required): List of steps.

## Selector
### Properties
* **id**: string (Required): String of the selector ID.
* **targets**: [TargetReference](#targetreference)[] (Required): List of Target references.
* **type**: 'List' | 'Percent' | 'Random' | 'Tag' (Required): Enum of the selector type.

## TargetReference
### Properties
* **id**: string (Required): String of the resource ID of a Target resource.
* **type**: 'ChaosTarget' (Required): Enum of the Target reference type.

## Step
### Properties
* **branches**: [Branch](#branch)[] (Required): List of branches.
* **name**: string (Required): String of the step name.

## Branch
### Properties
* **actions**: [Action](#action)[] (Required): List of actions.
* **name**: string (Required): String of the branch name.

## Action
* **Discriminator**: type

### Base Properties
* **name**: string (Required): String that represents a URN.
### ContinuousAction
#### Properties
* **duration**: string (Required): ISO8601 formatted string that represents a duration.
* **parameters**: [KeyValuePair](#keyvaluepair)[] (Required): List of key value pairs.
* **selectorId**: string (Required): String that represents a selector.
* **type**: 'continuous' (Required): Enum that discriminates between action models.

### DelayAction
#### Properties
* **duration**: string (Required): ISO8601 formatted string that represents a duration.
* **type**: 'delay' (Required): Enum that discriminates between action models.

### DiscreteAction
#### Properties
* **parameters**: [KeyValuePair](#keyvaluepair)[] (Required): List of key value pairs.
* **selectorId**: string (Required): String that represents a selector.
* **type**: 'discrete' (Required): Enum that discriminates between action models.


## KeyValuePair
### Properties
* **key**: string (Required): The name of the setting for the action.
* **value**: string (Required): The value of the setting for the action.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TargetTypeProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **displayName**: string (ReadOnly): Localized string of the display name.
* **propertiesSchema**: string (ReadOnly): String that represents a URL.
* **resourceTypes**: string[] (ReadOnly): List of resource types this Target Type can extend.

## CapabilityTypeProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **displayName**: string (ReadOnly): Localized string of the display name.
* **parametersSchema**: string (ReadOnly): String that represents a URL.
* **publisher**: string (ReadOnly): String of the Publisher that this Capability Type extends.
* **targetType**: string (ReadOnly): String of the Target Type that this Capability Type extends.
* **urn**: string (ReadOnly): String that represents a URN.

## TargetProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## CapabilityProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **parametersSchema**: string (ReadOnly): String that represents a URL.
* **publisher**: string (ReadOnly): String of the Publisher that this Capability extends.
* **targetType**: string (ReadOnly): String of the Target Type that this Capability extends.
* **urn**: string (ReadOnly): String that represents a URN.

