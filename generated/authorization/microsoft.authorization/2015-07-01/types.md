# Microsoft.Authorization @ 2015-07-01

## Resource Microsoft.Authorization/roleAssignments@2015-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2015-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties) (Required): Role assignment properties with scope.
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleDefinitions@2015-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2015-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleDefinitionProperties](#roledefinitionproperties): Role definition properties.
* **type**: 'Microsoft.Authorization/roleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## RoleAssignmentProperties
### Properties
* **principalId**: string (Required): The principal ID.
* **roleDefinitionId**: string (Required): The role definition ID.
* **scope**: string (ReadOnly): The role assignment scope.

## RoleDefinitionProperties
### Properties
* **assignableScopes**: string[]: Role definition assignable scopes.
* **description**: string: The role definition description.
* **permissions**: [Permission](#permission)[]: Role definition permissions.
* **roleName**: string: The role name.
* **type**: string: The role type.

## Permission
### Properties
* **actions**: string[]: Allowed actions.
* **notActions**: string[]: Denied actions.

