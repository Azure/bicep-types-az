# Microsoft.Authorization @ 2020-08-01-preview

## Resource Microsoft.Authorization/roleAssignments@2020-08-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties) (Required): Role assignment properties.
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Function validate (Microsoft.Authorization/roleAssignments@2020-08-01-preview)
* **Resource**: Microsoft.Authorization/roleAssignments
* **ApiVersion**: 2020-08-01-preview
* **Input**: [RoleAssignmentCreateParameters](#roleassignmentcreateparameters)
* **Output**: [ValidationResponse](#validationresponse)

## RoleAssignmentCreateParameters
### Properties
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties) (Required): Role assignment properties.

## RoleAssignmentProperties
### Properties
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdBy**: string (ReadOnly): Id of the user who created the assignment
* **createdOn**: string (ReadOnly): Time it was created
* **delegatedManagedIdentityResourceId**: string: Id of the delegated managed identity resource
* **description**: string: Description of role assignment
* **principalId**: string (Required): The principal ID.
* **principalType**: 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string: The principal type of the assigned principal ID.
* **roleDefinitionId**: string (Required): The role definition ID.
* **scope**: string (ReadOnly): The role assignment scope.
* **updatedBy**: string (ReadOnly): Id of the user who updated the assignment
* **updatedOn**: string (ReadOnly): Time it was updated

## ValidationResponse
### Properties
* **errorInfo**: [ValidationResponseErrorInfo](#validationresponseerrorinfo): Failed validation result details
* **isValid**: bool (ReadOnly): Whether or not validation succeeded

## ValidationResponseErrorInfo
### Properties
* **code**: string (ReadOnly): Error code indicating why validation failed
* **message**: string (ReadOnly): Message indicating why validation failed

