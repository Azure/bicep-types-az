# Microsoft.StreamAnalytics @ 2020-03-01-preview

## Resource Microsoft.StreamAnalytics/clusters@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterProperties](#clusterproperties)
* **sku**: [ClusterSku](#clustersku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.StreamAnalytics/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointProperties](#privateendpointproperties)
* **type**: 'Microsoft.StreamAnalytics/clusters/privateEndpoints' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **capacityAllocated**: int (ReadOnly)
* **capacityAssigned**: int (ReadOnly)
* **clusterId**: string (ReadOnly)
* **createdDate**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)

## ClusterSku
### Properties
* **capacity**: int
* **name**: 'Default'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointProperties
### Properties
* **createdDate**: string (ReadOnly)
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]

## PrivateLinkServiceConnection
### Properties
* **properties**: [PrivateLinkServiceConnectionProperties](#privatelinkserviceconnectionproperties)

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate)
* **privateLinkServiceId**: string
* **requestMessage**: string

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: string (ReadOnly)

