# Microsoft.Authorization @ 2020-04-01-preview

## Resource Microsoft.Authorization/roleAssignments@2020-04-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties) (Required): Role assignment properties.
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## RoleAssignmentProperties
### Properties
* **canDelegate**: bool: The delegation flag used for creating a role assignment
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdBy**: string (ReadOnly): Id of the user who created the assignment
* **createdOn**: string (ReadOnly): Time it was created
* **delegatedManagedIdentityResourceId**: string: Id of the delegated managed identity resource
* **description**: string: Description of role assignment
* **principalId**: string (Required): The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
* **principalType**: 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string: The principal type of the assigned principal ID.
* **roleDefinitionId**: string (Required): The role definition ID used in the role assignment.
* **scope**: string (ReadOnly): The role assignment scope.
* **updatedBy**: string (ReadOnly): Id of the user who updated the assignment
* **updatedOn**: string (ReadOnly): Time it was updated

