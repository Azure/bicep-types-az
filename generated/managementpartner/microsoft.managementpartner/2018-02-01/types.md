# Microsoft.ManagementPartner @ 2018-02-01

## Resource Microsoft.ManagementPartner/partners@2018-02-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly): Type of the partner
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerProperties](#partnerproperties) (ReadOnly): Properties of the partner
* **type**: 'Microsoft.ManagementPartner/partners' (ReadOnly, DeployTimeConstant): The resource type

## PartnerProperties
### Properties
* **createdTime**: string: This is the DateTime when the partner was created.
* **objectId**: string: This is the object id.
* **partnerId**: string: This is the partner id
* **partnerName**: string: This is the partner name
* **state**: 'Active' | 'Deleted' | string: This is the partner state
* **tenantId**: string: This is the tenant id.
* **updatedTime**: string: This is the DateTime when the partner was updated.
* **version**: int: This is the version.

