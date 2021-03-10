# Microsoft.Purview @ 2020-12-01-preview

## Resource Microsoft.Purview/accounts@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccountProperties](#accountproperties)
* **sku**: [AccountSku](#accountsku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Purview/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Purview/accounts/privateEndpointConnections@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Purview/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## AccountProperties
### Properties
* **cloudConnectors**: [CloudConnectors](#cloudconnectors)
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByObjectId**: string (ReadOnly)
* **endpoints**: [schemas:3_endpoints](#schemas3endpoints) (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **managedResources**: [schemas:3_managedResources](#schemas3managedresources) (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'SoftDeleted' | 'SoftDeleting' | 'Succeeded' | 'Unknown' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'NotSpecified'

## CloudConnectors
### Properties
* **awsExternalId**: string (ReadOnly)

## schemas:3_endpoints
### Properties
* **catalog**: string (ReadOnly)
* **guardian**: string (ReadOnly)
* **scan**: string (ReadOnly)

## schemas:3_managedResources
### Properties
* **eventHubNamespace**: string (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **storageAccount**: string (ReadOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: string (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Unknown'

## AccountSku
### Properties
* **capacity**: int
* **name**: 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

