# Microsoft.Authorization @ 2018-09-01-preview

## Resource Microsoft.Authorization/roleAssignments@2018-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties) (Required): Role assignment properties with scope.
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## RoleAssignmentProperties
### Properties
* **canDelegate**: bool: The Delegation flag for the role assignment
* **principalId**: string (Required): The principal ID.
* **principalType**: 'Application' | 'DirectoryObjectOrGroup' | 'DirectoryRoleTemplate' | 'Everyone' | 'ForeignGroup' | 'Group' | 'MSI' | 'ServicePrincipal' | 'Unknown' | 'User': The principal type of the assigned principal ID.
* **roleDefinitionId**: string (Required): The role definition ID.
* **scope**: string (ReadOnly): The role assignment scope.

