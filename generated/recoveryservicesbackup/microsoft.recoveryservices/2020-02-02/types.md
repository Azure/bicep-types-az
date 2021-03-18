# Microsoft.RecoveryServices @ 2020-02-02

## Resource Microsoft.RecoveryServices/vaults/privateEndpointConnections@2020-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnection](#privateendpointconnection)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: 'Deleting' | 'Failed' | 'Pending' | 'Succeeded'

## PrivateEndpoint
### Properties
* **id**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

