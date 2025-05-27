# Microsoft.Billing @ 2024-08-01-preview

## Resource Microsoft.Billing/billingAccounts/migrations@2024-08-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [Migration](#migration): Migration Details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/migrations' (ReadOnly, DeployTimeConstant): The resource type

## Migration
### Properties
* **destinationBillingScope**: string: Destination billing scope to be mapped.
* **status**: 'Completed' | 'CompletedWithErrors' | 'Draft' | 'Failed' | 'InProgress' | string: Migration Status
* **transferId**: string (ReadOnly): Transfer Id

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

