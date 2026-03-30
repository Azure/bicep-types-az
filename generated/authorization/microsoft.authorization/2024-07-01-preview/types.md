# Microsoft.Authorization @ 2024-07-01-preview

## Resource Microsoft.Authorization/denyAssignments@2024-07-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DenyAssignmentProperties](#denyassignmentproperties): Deny assignment properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/denyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## DenyAssignmentPermission
### Properties
* **actions**: string[]: Actions to which the deny assignment does not grant access.
* **condition**: string: The conditions on the Deny assignment permission. This limits the resources it applies to.
* **conditionVersion**: string: Version of the condition.
* **dataActions**: string[]: Data actions to which the deny assignment does not grant access.
* **notActions**: string[]: Actions to exclude from that the deny assignment does not grant access.
* **notDataActions**: string[]: Data actions to exclude from that the deny assignment does not grant access.

## DenyAssignmentPrincipal
### Properties
* **id**: string: The object ID of the principal.
* **type**: string: The type of the principal such as user, group, servicePrincipal, etc.

## DenyAssignmentProperties
### Properties
* **condition**: string: The conditions on the deny assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition.
* **createdBy**: string (ReadOnly): Id of the user who created the assignment
* **createdOn**: string (ReadOnly): Time it was created
* **denyAssignmentEffect**: 'audit' | 'enforced' | string: The effect of the deny assignment. 'enforced' blocks access, 'audit' logs without blocking.
* **denyAssignmentName**: string: The display name of the deny assignment.
* **description**: string: The description of the deny assignment.
* **doNotApplyToChildScopes**: bool: Determines if the deny assignment applies to child scopes. Default value is false.
* **excludePrincipals**: [DenyAssignmentPrincipal](#denyassignmentprincipal)[]: Array of principals to which the deny assignment does not apply.
* **isSystemProtected**: bool: Specifies whether this deny assignment was created by Azure and cannot be edited or deleted.
* **permissions**: [DenyAssignmentPermission](#denyassignmentpermission)[]: An array of permissions that are denied by the deny assignment.
* **principals**: [DenyAssignmentPrincipal](#denyassignmentprincipal)[]: Array of principals to which the deny assignment applies.
* **scope**: string (ReadOnly): The deny assignment scope.
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

