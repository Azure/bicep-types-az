# Microsoft.Search @ 2015-02-28

## Resource Microsoft.Search/searchServices@2015-02-28
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-28' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geographic location of the Search service.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SearchServiceProperties](#searchserviceproperties): Properties of the Search service.
* **tags**: [SearchServiceCreateOrUpdateParametersTags](#searchservicecreateorupdateparameterstags): Tags to help categorize the Search service in the Azure Portal.
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminKeys (Microsoft.Search/searchServices@2015-02-28)
* **Resource**: Microsoft.Search/searchServices
* **ApiVersion**: 2015-02-28
* **Output**: [AdminKeyResult](#adminkeyresult)

## AdminKeyResult
### Properties
* **primaryKey**: string (ReadOnly): The primary API key of the Search service.
* **secondaryKey**: string (ReadOnly): The secondary API key of the Search service.

## SearchServiceCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SearchServiceProperties
### Properties
* **partitionCount**: int: The number of partitions in the Search service; if specified, it can be 1, 2, 3, 4, 6, or 12.
* **replicaCount**: int: The number of replicas in the Search service. If specified, it must be a value between 1 and 6 inclusive.
* **sku**: [Sku](#sku): The SKU of the Search Service, which determines price tier and capacity limits.

## Sku
### Properties
* **name**: 'free' | 'standard' | 'standard2': The SKU of the Search service.

