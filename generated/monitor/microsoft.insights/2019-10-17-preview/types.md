# microsoft.insights @ 2019-10-17-preview

## Resource microsoft.insights/privateLinkScopes@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AzureMonitorPrivateLinkScopeProperties](#azuremonitorprivatelinkscopeproperties) (Required)
* **tags**: [PrivateLinkScopesResourceTags](#privatelinkscopesresourcetags)
* **type**: 'microsoft.insights/privateLinkScopes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Insights/privateLinkScopes/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/privateLinkScopes/scopedResources@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScopedResourceProperties](#scopedresourceproperties)
* **type**: 'Microsoft.Insights/privateLinkScopes/scopedResources' (ReadOnly, DeployTimeConstant)

## AzureMonitorPrivateLinkScopeProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty)
* **provisioningState**: string (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (Required)
* **status**: string (Required)

## PrivateLinkScopesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScopedResourceProperties
### Properties
* **linkedResourceId**: string
* **provisioningState**: string (ReadOnly)

