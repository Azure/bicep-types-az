# Microsoft.Automanage @ 2021-04-30-preview

## Resource Microsoft.Automanage/configurationProfileAssignments@2021-04-30-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileAssignmentProperties](#configurationprofileassignmentproperties): Properties of the configuration profile assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automanage/configurationProfileAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfiles@2021-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileProperties](#configurationprofileproperties): Properties of the configuration profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automanage/configurationProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfiles/versions@2021-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileProperties](#configurationprofileproperties): Properties of the configuration profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automanage/configurationProfiles/versions' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationProfileAssignmentProfileOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConfigurationProfileAssignmentProperties
### Properties
* **configurationProfile**: string: The Automanage configurationProfile ARM Resource URI.
* **profileOverrides**: [ConfigurationProfileAssignmentProfileOverrides](#configurationprofileassignmentprofileoverrides): The profileOverrides setting for the configuration profile assignment.
* **status**: string (ReadOnly): The status of onboarding, which only appears in the response.
* **targetId**: string (ReadOnly): The target VM resource URI

## ConfigurationProfileProperties
### Properties
* **configuration**: any: configuration dictionary of the configuration profile.
* **overrides**: any[]: overrides of the configuration profile.

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

