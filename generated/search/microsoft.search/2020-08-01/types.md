# Microsoft.Search @ 2020-08-01

## Resource Microsoft.Search/searchServices@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SearchServiceProperties](#searchserviceproperties): Properties of the search service.
* **sku**: [Sku](#sku): Defines the SKU of an Azure Cognitive Search Service, which determines price tier and capacity limits.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Search/searchServices/privateEndpointConnections@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service.
* **type**: 'Microsoft.Search/searchServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Search/searchServices/sharedPrivateLinkResources@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of an existing Shared Private Link Resource managed by the Azure Cognitive Search service.
* **type**: 'Microsoft.Search/searchServices/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type.

## SearchServiceProperties
### Properties
* **hostingMode**: 'default' | 'highDensity': Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
* **networkRuleSet**: [NetworkRuleSet](#networkruleset): Network specific rules that determine how the Azure Cognitive Search service may be reached.
* **partitionCount**: int: The number of partitions in the search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections to the Azure Cognitive Search service.
* **provisioningState**: 'failed' | 'provisioning' | 'succeeded' (ReadOnly): The state of the last provisioning operation performed on the search service. Provisioning is an intermediate state that occurs while service capacity is being established. After capacity is set up, provisioningState changes to either 'succeeded' or 'failed'. Client applications can poll provisioning status (the recommended polling interval is from 30 seconds to one minute) by using the Get Search Service operation to see when an operation is completed. If you are using the free service, this value tends to come back as 'succeeded' directly in the call to Create search service. This is because the free service uses capacity that is already set up.
* **publicNetworkAccess**: 'disabled' | 'enabled': This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
* **replicaCount**: int: The number of replicas in the search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[] (ReadOnly): The list of shared private link resources managed by the Azure Cognitive Search service.
* **status**: 'degraded' | 'deleting' | 'disabled' | 'error' | 'provisioning' | 'running' (ReadOnly): The status of the search service.
* **statusDetails**: string (ReadOnly): The details of the search service status.

## NetworkRuleSet
### Properties
* **ipRules**: [IpRule](#iprule)[]: A list of IP restriction rules that defines the inbound network(s) with allowing access to the search service endpoint. At the meantime, all other public IP networks are blocked by the firewall. These restriction rules are applied only when the 'publicNetworkAccess' of the search service is 'enabled'; otherwise, traffic over public interface is not allowed even with any public IP rules, and private endpoint connections would be the exclusive access method.

## IpRule
### Properties
* **value**: string: Value corresponding to a single IPv4 address (eg., 123.1.2.3) or an IP range in CIDR format (eg., 123.1.2.3/24) to be allowed.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [schemas:9_privateEndpoint](#schemas9privateendpoint): The private endpoint resource from Microsoft.Network provider.
* **privateLinkServiceConnectionState**: [schemas:9_privateLinkServiceConnectionState](#schemas9privatelinkserviceconnectionstate): Describes the current state of an existing Private Link Service connection to the Azure Private Endpoint.

## schemas:9_privateEndpoint
### Properties
* **id**: string: The resource id of the private endpoint resource from Microsoft.Network provider.

## schemas:9_privateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A description of any extra actions that may be required.
* **description**: string: The description for the private link service connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': Status of the the private link service connection. Can be Pending, Approved, Rejected, or Disconnected.

## SharedPrivateLinkResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of an existing Shared Private Link Resource managed by the Azure Cognitive Search service.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## SharedPrivateLinkResourceProperties
### Properties
* **groupId**: string: The group id from the provider of resource the shared private link resource is for.
* **privateLinkResourceId**: string: The resource id of the resource the shared private link resource is for.
* **provisioningState**: 'Deleting' | 'Failed' | 'Incomplete' | 'Succeeded' | 'Updating': The provisioning state of the shared private link resource. Can be Updating, Deleting, Failed, Succeeded or Incomplete.
* **requestMessage**: string: The request message for requesting approval of the shared private link resource.
* **resourceRegion**: string: Optional. Can be used to specify the Azure Resource Manager location of the resource to which a shared private link is to be created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service).
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': Status of the shared private link resource. Can be Pending, Approved, Rejected or Disconnected.

## Sku
### Properties
* **name**: 'basic' | 'free' | 'standard' | 'standard2' | 'standard3' | 'storage_optimized_l1' | 'storage_optimized_l2': The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.'.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

