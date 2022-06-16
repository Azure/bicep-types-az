# Microsoft.Authorization @ 2018-09-01-preview

## Resource Microsoft.Authorization/roleAssignments@2018-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope](#roleassignmentpropertiesorroleassignmentpropertieswithscope) (Required): Role assignment properties.
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope
### Properties
* **canDelegate**: bool: The delegation flag used for creating a role assignment
* **principalId**: string (Required): The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
* **principalType**: 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string: The principal type of the assigned principal ID.
* **roleDefinitionId**: string (Required): The role definition ID used in the role assignment.
* **scope**: string (ReadOnly): The role assignment scope.

