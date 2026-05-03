# Microsoft.Security @ 2023-01-01-preview

## Resource Microsoft.Security/pricings/securityOperators@2023-01-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): Identity for the resource.
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9_]+$"} (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Security/pricings/securityOperators' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of resource identity. The value must be an UUID.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of resource. The value must be an UUID.
* **type**: 'SystemAssigned': The identity type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

