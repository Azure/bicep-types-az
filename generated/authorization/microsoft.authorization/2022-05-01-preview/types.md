# Microsoft.Authorization @ 2022-05-01-preview

## Resource Microsoft.Authorization/roleDefinitions@2022-05-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleDefinitionProperties](#roledefinitionproperties): Role definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Permission
### Properties
* **actions**: string[]: Allowed actions.
* **condition**: string (ReadOnly): The conditions on the role definition. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string (ReadOnly): Version of the condition. Currently the only accepted value is '2.0'
* **dataActions**: string[]: Allowed Data actions.
* **notActions**: string[]: Denied actions.
* **notDataActions**: string[]: Denied Data actions.

## RoleDefinitionProperties
### Properties
* **assignableScopes**: string[]: Role definition assignable scopes.
* **createdBy**: string (ReadOnly): Id of the user who created the assignment
* **createdOn**: string (ReadOnly): Time it was created
* **description**: string: The role definition description.
* **permissions**: [Permission](#permission)[]: Role definition permissions.
* **roleName**: string: The role name.
* **type**: string: The role type.
* **updatedBy**: string (ReadOnly): Id of the user who updated the assignment
* **updatedOn**: string (ReadOnly): Time it was updated

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

