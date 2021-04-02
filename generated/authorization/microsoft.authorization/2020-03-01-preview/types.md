# Microsoft.Authorization @ 2020-03-01-preview

## Resource Microsoft.Authorization/denyAssignments@2020-03-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DenyAssignmentProperties](#denyassignmentproperties) (Required): Deny assignment properties.
* **type**: 'Microsoft.Authorization/denyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleAssignments@2020-03-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties) (Required): Role assignment properties.
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleDefinitions@2020-03-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleDefinitionProperties](#roledefinitionproperties): Role definition properties.
* **type**: 'Microsoft.Authorization/roleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## DenyAssignmentProperties
### Properties
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdBy**: string (ReadOnly): Id of the user who created the assignment
* **createdOn**: string (ReadOnly): Time it was created
* **denyAssignmentName**: string: The display name of the deny assignment.
* **description**: string: The description of the deny assignment.
* **doNotApplyToChildScopes**: bool: Determines if the deny assignment applies to child scopes. Default value is false.
* **excludePrincipals**: [Principal](#principal)[]: Array of principals to which the deny assignment does not apply.
* **isSystemProtected**: bool: Specifies whether this deny assignment was created by Azure and cannot be edited or deleted.
* **permissions**: [Permission](#permission)[] (Required): An array of permissions that are denied by the deny assignment.
* **principals**: [Principal](#principal)[] (Required): Array of principals to which the deny assignment applies.
* **scope**: string: The deny assignment scope.
* **updatedBy**: string (ReadOnly): Id of the user who updated the assignment
* **updatedOn**: string (ReadOnly): Time it was updated

## Principal
### Properties
* **id**: string: Object ID of the Azure AD principal (user, group, or service principal) to which the deny assignment applies. An empty guid '00000000-0000-0000-0000-000000000000' as principal id and principal type as 'Everyone' represents all users, groups and service principals.
* **type**: string: Type of object represented by principal id (user, group, or service principal). An empty guid '00000000-0000-0000-0000-000000000000' as principal id and principal type as 'Everyone' represents all users, groups and service principals.

## Permission
### Properties
* **actions**: string[]: Allowed actions.
* **dataActions**: string[]: Allowed Data actions.
* **notActions**: string[]: Denied actions.
* **notDataActions**: string[]: Denied Data actions.

## RoleAssignmentProperties
### Properties
* **canDelegate**: bool: The delegation flag used for creating a role assignment
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdBy**: string (ReadOnly): Id of the user who created the assignment
* **createdOn**: string (ReadOnly): Time it was created
* **delegatedManagedIdentityResourceId**: string: Id of the delegated managed identity resource
* **principalId**: string (Required): The principal ID.
* **principalType**: 'Application' | 'DirectoryObjectOrGroup' | 'DirectoryRoleTemplate' | 'Everyone' | 'ForeignGroup' | 'Group' | 'MSI' | 'ServicePrincipal' | 'Unknown' | 'User': The principal type of the assigned principal ID.
* **roleDefinitionId**: string (Required): The role definition ID.
* **scope**: string: The role assignment scope.
* **updatedBy**: string (ReadOnly): Id of the user who updated the assignment
* **updatedOn**: string (ReadOnly): Time it was updated

## RoleDefinitionProperties
### Properties
* **assignableScopes**: string[]: Role definition assignable scopes.
* **description**: string: The role definition description.
* **permissions**: [Permission](#permission)[]: Role definition permissions.
* **roleName**: string: The role name.
* **type**: string: The role type.

