# Microsoft.AzureActiveDirectory @ 2020-05-01-preview

## Resource Microsoft.AzureActiveDirectory/guestUsages@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the Guest Usages resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestUsagesResourceProperties](#guestusagesresourceproperties): The Guest Usages Resource Properties
* **tags**: [GuestUsagesResourceTags](#guestusagesresourcetags): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.AzureActiveDirectory/guestUsages' (ReadOnly, DeployTimeConstant): The resource type

## GuestUsagesResourceProperties
### Properties
* **tenantId**: string: An identifier for the tenant for which the resource is being created

## GuestUsagesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

