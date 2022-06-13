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
* **createdTime**: string (ReadOnly): This is the DateTime when the partner was created.
* **objectId**: string (ReadOnly): This is the object id.
* **partnerId**: string (ReadOnly): This is the partner id
* **partnerName**: string (ReadOnly): This is the partner name
* **state**: 'Active' | 'Deleted' | string (ReadOnly): This is the partner state
* **tenantId**: string (ReadOnly): This is the tenant id.
* **updatedTime**: string (ReadOnly): This is the DateTime when the partner was updated.
* **version**: int (ReadOnly): This is the version.

