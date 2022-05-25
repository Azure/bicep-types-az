# microsoft.aadiam @ 2020-03-01

## Resource microsoft.aadiam/privateLinkForAzureAd@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allTenants**: bool: Flag indicating whether all tenants are allowed
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **ownerTenantId**: string: Guid of the owner tenant
* **resourceGroup**: string: Name of the resource group
* **resourceName**: string: Name of the private link policy resource
* **subscriptionId**: string: Subscription Identifier
* **tags**: [PrivateLinkPolicyTags](#privatelinkpolicytags): Resource tags.
* **tenants**: string[]: The list of tenantIds.
* **type**: 'microsoft.aadiam/privateLinkForAzureAd' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.aadiam/privateLinkForAzureAd/privateEndpointConnections@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection resource.
* **type**: 'microsoft.aadiam/privateLinkForAzureAd/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## PrivateLinkPolicyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Private endpoint object properties.
* **privateLinkConnectionTags**: [TagsResource](#tagsresource) (WriteOnly): A container holding only the Tags for a resource, allowing the user to update the tags on a PrivateLinkConnection instance.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): An object that represents the approval state of the private link connection.
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The current provisioning state.

## PrivateEndpoint
### Properties
* **id**: string: Full identifier of the private endpoint resource.

## TagsResource
### Properties
* **tags**: [TagsResourceTags](#tagsresourcetags): Resource tags

## TagsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval or rejection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: The private endpoint connection status.

