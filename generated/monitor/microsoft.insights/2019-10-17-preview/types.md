# microsoft.insights @ 2019-10-17-preview

## Resource microsoft.insights/privateLinkScopes@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureMonitorPrivateLinkScopeProperties](#azuremonitorprivatelinkscopeproperties) (Required): Properties that define a Azure Monitor PrivateLinkScope resource.
* **tags**: [PrivateLinkScopesResourceTags](#privatelinkscopesresourcetags): Resource tags
* **type**: 'microsoft.insights/privateLinkScopes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.
* **type**: 'Microsoft.Insights/privateLinkScopes/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/privateLinkScopes/scopedResources@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScopedResourceProperties](#scopedresourceproperties): Properties of a private link scoped resource.
* **type**: 'Microsoft.Insights/privateLinkScopes/scopedResources' (ReadOnly, DeployTimeConstant): The resource type

## AzureMonitorPrivateLinkScopeProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **provisioningState**: string (ReadOnly): Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Azure resource Id
* **name**: string (ReadOnly): Azure resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.
* **type**: string (ReadOnly): Azure resource type

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): State of the private endpoint connection.
* **provisioningState**: string (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

## PrivateLinkScopesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScopedResourceProperties
### Properties
* **linkedResourceId**: string: The resource id of the scoped Azure monitor resource.
* **provisioningState**: string (ReadOnly): State of the private endpoint connection.

