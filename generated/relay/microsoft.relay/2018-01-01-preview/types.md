# Microsoft.Relay @ 2018-01-01-preview

## Resource Microsoft.Relay/namespaces@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RelayNamespaceProperties](#relaynamespaceproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/privateEndpointConnections@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Relay/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly)
* **metricId**: string (ReadOnly)
* **provisioningState**: 'Created' | 'Deleted' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: 'Creating' | 'Deleting' | 'DeletingByProxy' | 'Succeeded' | 'Unknown' | 'Updating' | 'UpdatingByProxy'

## PrivateEndpoint
### Properties
* **id**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

