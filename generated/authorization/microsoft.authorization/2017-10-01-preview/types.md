# Microsoft.Authorization @ 2017-10-01-preview

## Resource Microsoft.Authorization/roleAssignments@2017-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties): Role assignment properties with scope.
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## RoleAssignmentProperties
### Properties
* **canDelegate**: bool: The Delegation flag for the role assignment
* **principalId**: string: The principal ID.
* **roleDefinitionId**: string: The role definition ID.
* **scope**: string (ReadOnly): The role assignment scope.

