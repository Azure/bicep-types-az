# Microsoft.Security @ 2021-08-01-preview

## Resource Microsoft.Security/assignments@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity tag is used for comparing two or more entities from the same requested resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string: Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssignmentProperties](#assignmentproperties): Properties of a security assignment
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.Security/assignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/standards@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity tag is used for comparing two or more entities from the same requested resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string: Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StandardProperties](#standardproperties): Properties of a security standard
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.Security/standards' (ReadOnly, DeployTimeConstant): The resource type

## AssignedComponentItem
### Properties
* **key**: string: unique key to a security assessment object

## AssignedStandardItem
### Properties
* **id**: string: full resourceId of the Microsoft.Security/standard object

## AssignmentProperties
### Properties
* **additionalData**: [AssignmentPropertiesAdditionalData](#assignmentpropertiesadditionaldata): Additional data about the assignment
* **assignedComponent**: [AssignedComponentItem](#assignedcomponentitem): Component item with key as applied to this standard assignment over the given scope
* **assignedStandard**: [AssignedStandardItem](#assignedstandarditem): Standard item with key as applied to this standard assignment over the given scope
* **description**: string: description of the standardAssignment
* **displayName**: string: display name of the standardAssignment
* **effect**: string: expected effect of this assignment (Disable/Exempt/etc)
* **expiresOn**: string: Expiration date of this assignment as a full ISO date
* **metadata**: any: The assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
* **scope**: string: Scope to which the standardAssignment applies - can be a subscription path or a resource group under that subscription

## AssignmentPropertiesAdditionalData
### Properties
* **exemptionCategory**: string: Exemption category of this assignment

## StandardComponentProperties
### Properties
* **key**: string: Component Key matching componentMetadata

## StandardProperties
### Properties
* **category**: string: category of the standard provided
* **components**: [StandardComponentProperties](#standardcomponentproperties)[]: List of component objects containing component unique keys (such as assessment keys) to apply to standard scope.  Currently only supports assessment keys.
* **description**: string: description of the standard
* **displayName**: string: display name of the standard, equivalent to the standardId
* **standardType**: string (ReadOnly): standard type (Custom or BuiltIn only currently)
* **supportedClouds**: 'AWS' | 'GCP'[]: List of all standard supported clouds.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

