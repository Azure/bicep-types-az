# Microsoft.Advisor @ 2016-07-12-preview

## Resource Microsoft.Advisor/recommendations/suppressions@2016-07-12-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2016-07-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **suppressionId**: string: The GUID of the suppression.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **ttl**: string: The duration for which the suppression is valid.
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant): The resource type

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

