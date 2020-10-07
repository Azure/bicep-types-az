# microsoft.insights @ 2019-10-17-preview

## Microsoft.Insights/privateLinkScopes/privateEndpointConnections
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Insights/privateLinkScopes/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Insights/privateLinkScopes/scopedResources
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScopedResourceProperties
* **type**: 'Microsoft.Insights/privateLinkScopes/scopedResources' (ReadOnly, DeployTimeConstant)

## ScopedResourceProperties
### Properties
* **linkedResourceId**: string
* **provisioningState**: string (ReadOnly)

## microsoft.insights/privateLinkScopes
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AzureMonitorPrivateLinkScopeProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/privateLinkScopes' (ReadOnly, DeployTimeConstant)

## AzureMonitorPrivateLinkScopeProperties
### Properties
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: string (ReadOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

