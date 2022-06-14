# Microsoft.Authorization @ 2017-10-01-preview

## Resource Microsoft.Authorization/roleAssignments@2017-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope](#roleassignmentpropertiesorroleassignmentpropertieswithscope): Role assignment properties.
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope
### Properties
* **canDelegate**: bool: The delegation flag used for creating a role assignment
* **principalId**: string: The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
* **roleDefinitionId**: string: The role definition ID used in the role assignment.
* **scope**: string (ReadOnly): The role assignment scope.

