# Microsoft.Insights @ 2019-10-17-preview

## Resource Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Insights/privateLinkScopes/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/privateLinkScopes/scopedResources@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScopedResourceProperties
* **type**: 'Microsoft.Insights/privateLinkScopes/scopedResources' (ReadOnly, DeployTimeConstant)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpointProperty
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionStateProperty
* **provisioningState**: string (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (Required)
* **status**: string (Required)

## ScopedResourceProperties
### Properties
* **linkedResourceId**: string
* **provisioningState**: string (ReadOnly)

