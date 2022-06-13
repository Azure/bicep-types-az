# Microsoft.Search @ 2015-08-19

## Resource Microsoft.Search/searchServices@2015-08-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-19' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). This property is required when creating a new resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SearchServiceProperties](#searchserviceproperties): Properties of the Search service.
* **sku**: [Sku](#sku): The SKU of the Search Service, which determines price tier and capacity limits. This property is required when creating a new Search Service.
* **tags**: [ResourceTags](#resourcetags): Tags to help categorize the resource in the Azure portal.
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminKeys (Microsoft.Search/searchServices@2015-08-19)
* **Resource**: Microsoft.Search/searchServices
* **ApiVersion**: 2015-08-19
* **Output**: [AdminKeyResult](#adminkeyresult)

## Function listQueryKeys (Microsoft.Search/searchServices@2015-08-19)
* **Resource**: Microsoft.Search/searchServices
* **ApiVersion**: 2015-08-19
* **Output**: [ListQueryKeysResult](#listquerykeysresult)

## AdminKeyResult
### Properties
* **primaryKey**: string (ReadOnly): The primary admin API key of the Search service.
* **secondaryKey**: string (ReadOnly): The secondary admin API key of the Search service.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type.

## ListQueryKeysResult
### Properties
* **value**: [QueryKey](#querykey)[] (ReadOnly): The query keys for the Azure Cognitive Search service.

## QueryKey
### Properties
* **key**: string (ReadOnly): The value of the query API key.
* **name**: string (ReadOnly): The name of the query API key; may be empty.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SearchServiceProperties
### Properties
* **hostingMode**: 'default' | 'highDensity': Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
* **partitionCount**: int: The number of partitions in the Search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
* **provisioningState**: 'failed' | 'provisioning' | 'succeeded' (ReadOnly): The state of the last provisioning operation performed on the Search service. Provisioning is an intermediate state that occurs while service capacity is being established. After capacity is set up, provisioningState changes to either 'succeeded' or 'failed'. Client applications can poll provisioning status (the recommended polling interval is from 30 seconds to one minute) by using the Get Search Service operation to see when an operation is completed. If you are using the free service, this value tends to come back as 'succeeded' directly in the call to Create Search service. This is because the free service uses capacity that is already set up.
* **replicaCount**: int: The number of replicas in the Search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
* **status**: 'degraded' | 'deleting' | 'disabled' | 'error' | 'provisioning' | 'running' (ReadOnly): The status of the Search service. Possible values include: 'running': The Search service is running and no provisioning operations are underway. 'provisioning': The Search service is being provisioned or scaled up or down. 'deleting': The Search service is being deleted. 'degraded': The Search service is degraded. This can occur when the underlying search units are not healthy. The Search service is most likely operational, but performance might be slow and some requests might be dropped. 'disabled': The Search service is disabled. In this state, the service will reject all API requests. 'error': The Search service is in an error state. If your service is in the degraded, disabled, or error states, it means the Azure Cognitive Search team is actively investigating the underlying issue. Dedicated services in these states are still chargeable based on the number of search units provisioned.
* **statusDetails**: string (ReadOnly): The details of the Search service status.

## Sku
### Properties
* **name**: 'basic' | 'free' | 'standard' | 'standard2' | 'standard3' | 'storage_optimized_l1' | 'storage_optimized_l2': The SKU of the Search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.'

