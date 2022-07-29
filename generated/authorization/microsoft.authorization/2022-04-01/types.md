# Microsoft.Authorization @ 2022-04-01

## Resource Microsoft.Authorization/roleAssignments@2022-04-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties) (Required): Role assignment properties.
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleDefinitions@2022-04-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleDefinitionProperties](#roledefinitionproperties): Role definition properties.
* **type**: 'Microsoft.Authorization/roleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Permission
### Properties
* **actions**: string[]: Allowed actions.
* **dataActions**: string[]: Allowed Data actions.
* **notActions**: string[]: Denied actions.
* **notDataActions**: string[]: Denied Data actions.

## RoleAssignmentProperties
### Properties
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently the only accepted value is '2.0'
* **createdBy**: string (ReadOnly): Id of the user who created the assignment
* **createdOn**: string (ReadOnly): Time it was created
* **delegatedManagedIdentityResourceId**: string: Id of the delegated managed identity resource
* **description**: string: Description of role assignment
* **principalId**: string (Required): The principal ID.
* **principalType**: 'Device' | 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string: The principal type of the assigned principal ID.
* **roleDefinitionId**: string (Required): The role definition ID.
* **scope**: string (ReadOnly): The role assignment scope.
* **updatedBy**: string (ReadOnly): Id of the user who updated the assignment
* **updatedOn**: string (ReadOnly): Time it was updated

## RoleDefinitionProperties
### Properties
* **assignableScopes**: string[]: Role definition assignable scopes.
* **description**: string: The role definition description.
* **permissions**: [Permission](#permission)[]: Role definition permissions.
* **roleName**: string: The role name.
* **type**: string: The role type.

