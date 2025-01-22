# Microsoft.Billing @ 2024-08-01-preview

## Resource Microsoft.Billing/billingAccounts/migrations@2024-08-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **destinationBillingScope**: string (WriteOnly): Destination billing scope to be mapped.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **locale**: string (WriteOnly): Locale for notifications. Optional property, used only for migrate enrollment
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **products**: [Products](#products)[] (WriteOnly)
* **properties**: [Migration](#migration) (ReadOnly): Migration Details.
* **status**: 'Completed' | 'CompletedWithErrors' | 'Draft' | 'Failed' | 'InProgress' | string (WriteOnly): Migration Status
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **transferId**: string (ReadOnly, WriteOnly): Transfer Id
* **type**: 'Microsoft.Billing/billingAccounts/migrations' (ReadOnly, DeployTimeConstant): The resource type

## Migration
### Properties
* **destinationBillingScope**: string: Destination billing scope to be mapped.
* **locale**: string: Locale for notifications. Optional property, used only for migrate enrollment
* **products**: [Products](#products)[]
* **status**: 'Completed' | 'CompletedWithErrors' | 'Draft' | 'Failed' | 'InProgress' | string: Migration Status
* **transferId**: string (ReadOnly): Transfer Id

## Products
### Properties
* **name**: string (ReadOnly): product name
* **productId**: string (ReadOnly): product Id
* **productType**: string (ReadOnly): product type
* **skuDescription**: string (ReadOnly): product sku description
* **status**: 'Completed' | 'Failed' | 'InProgress' | 'NotStarted' | string (ReadOnly): product transfer status

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

