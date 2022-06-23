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
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'microsoft.aadiam/privateLinkForAzureAd/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.aadiam/privateLinkForAzureAd/privateLinkResources@2020-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **type**: 'microsoft.aadiam/privateLinkForAzureAd/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## PrivateEndpoint
### Properties
* **id**: string: Full identifier of the private endpoint resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Properties of the private endpoint object.
* **privateLinkConnectionTags**: [TagsResource](#tagsresource) (WriteOnly): Updated tag information to set into the PrivateLinkConnection instance.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Approval state of the private link connection.
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the private endpoint connection.

## PrivateLinkPolicyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval or rejection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been approved, rejected or removed by the given policy owner.

## TagsResource
### Properties
* **tags**: [TagsResourceTags](#tagsresourcetags): Resource tags

## TagsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

