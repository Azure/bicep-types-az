# Microsoft.Authorization @ 2026-06-01-preview

## Resource Microsoft.Authorization/privilegedResourceFavorites@2026-06-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2026-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9_-]{1,2048}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivilegedResourceFavoriteProperties](#privilegedresourcefavoriteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/privilegedResourceFavorites' (ReadOnly, DeployTimeConstant): The resource type

## PrivilegedResourceFavoriteProperties
### Properties
* **resourceId**: string (Required): The favorited Azure resource id. The `favoriteId` URL segment MUST equal
`base64url(lowercased(resourceId))`; the service rejects mismatches with
`400 InvalidRequest` on PUT.

Effectively immutable: set on create and never changed afterward — there is
no PATCH, and PUT validates the `favoriteId`-from-`resourceId` derivation.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

