# Microsoft.StreamAnalytics @ 2020-03-01-preview

## Resource Microsoft.StreamAnalytics/clusters@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: ClusterSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.StreamAnalytics/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointProperties
* **type**: 'Microsoft.StreamAnalytics/clusters/privateEndpoints' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **capacityAllocated**: int (ReadOnly)
* **capacityAssigned**: int (ReadOnly)
* **clusterId**: string (ReadOnly)
* **createdDate**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded'

## ClusterSku
### Properties
* **capacity**: int
* **name**: 'Default'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointProperties
### Properties
* **createdDate**: string (ReadOnly)
* **manualPrivateLinkServiceConnections**: PrivateLinkServiceConnection[]

## PrivateLinkServiceConnection
### Properties
* **properties**: PrivateLinkServiceConnectionProperties

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]
* **privateLinkServiceConnectionState**: PrivateLinkConnectionState
* **privateLinkServiceId**: string
* **requestMessage**: string

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: string (ReadOnly)

