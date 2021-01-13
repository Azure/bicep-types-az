# Microsoft.Purview @ 2020-12-01-preview

## Resource Microsoft.Purview/accounts@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties
* **sku**: AccountSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Purview/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Purview/accounts/privateEndpointConnections@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Purview/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## AccountProperties
### Properties
* **cloudConnectors**: CloudConnectors
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByObjectId**: string (ReadOnly)
* **endpoints**: schemas:3_endpoints (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **managedResources**: schemas:3_managedResources (ReadOnly)
* **networkAcls**: NetworkAcls
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'SoftDeleted' | 'SoftDeleting' | 'Succeeded' | 'Unknown' (ReadOnly)

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

## NetworkAcls
### Properties
* **defaultAction**: 'Allow' | 'Deny'

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
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

