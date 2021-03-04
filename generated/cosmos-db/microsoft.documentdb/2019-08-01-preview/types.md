# Microsoft.DocumentDB @ 2019-08-01-preview

## Resource Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## PrivateEndpointConnectionProperties
### Properties
* **groupId**: string
* **privateEndpoint**: PrivateEndpointProperty
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionStateProperty
* **provisioningState**: string

## PrivateEndpointProperty
### Properties
* **id**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string
* **status**: string

