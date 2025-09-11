# Microsoft.Security @ 2023-01-01-preview

## Resource Microsoft.Security/pricings/securityOperators@2023-01-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): Identity for the resource.
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9_]+$"} (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Security/pricings/securityOperators' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

