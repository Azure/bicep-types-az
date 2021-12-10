# Microsoft.Automanage @ 2021-04-30-preview

## Resource Microsoft.Automanage/configurationProfileAssignments@2021-04-30-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileAssignmentProperties](#configurationprofileassignmentproperties): Automanage configuration profile assignment properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Automanage/configurationProfileAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfiles@2021-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileProperties](#configurationprofileproperties): Automanage configuration profile properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automanage/configurationProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfiles/versions@2021-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileProperties](#configurationprofileproperties): Automanage configuration profile properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automanage/configurationProfiles/versions' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationProfileAssignmentProperties
### Properties
* **configurationProfile**: string: The Automanage configurationProfile ARM Resource URI.
* **profileOverrides**: [ConfigurationProfileAssignmentProfileOverrides](#configurationprofileassignmentprofileoverrides): Data related to configuration profile assignment profile overrides.
* **status**: string (ReadOnly): The status of onboarding, which only appears in the response.
* **targetId**: string: The target VM resource URI

## ConfigurationProfileAssignmentProfileOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## ConfigurationProfileProperties
### Properties
* **configuration**: any: Any object
* **overrides**: any[]: The custom overrides for configuration profile

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

