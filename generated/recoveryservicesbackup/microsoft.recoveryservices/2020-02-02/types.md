# Microsoft.RecoveryServices @ 2020-02-02

## Resource Microsoft.RecoveryServices/vaults/privateEndpointConnections@2020-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnection](#privateendpointconnection): PrivateEndpointConnectionResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## PrivateEndpoint
### Properties
* **id**: string: Gets or sets id

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Gets or sets private endpoint associated with the private endpoint connection
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Gets or sets private link service connection state
* **provisioningState**: 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | string: Gets or sets provisioning state of the private endpoint connection

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string: Gets or sets actions required
* **description**: string: Gets or sets description
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Gets or sets the status

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

