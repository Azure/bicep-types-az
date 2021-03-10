# Microsoft.Search @ 2019-10-01-preview

## Resource Microsoft.Search/searchServices@2019-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SearchServiceProperties](#searchserviceproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Search/searchServices/privateEndpointConnections@2019-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Search/searchServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## SearchServiceProperties
### Properties
* **hostingMode**: 'default' | 'highDensity'
* **networkRuleSet**: [NetworkRuleSet](#networkruleset)
* **partitionCount**: int
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'failed' | 'provisioning' | 'succeeded' (ReadOnly)
* **replicaCount**: int
* **status**: 'degraded' | 'deleting' | 'disabled' | 'error' | 'provisioning' | 'running' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## NetworkRuleSet
### Properties
* **endpointAccess**: 'Private' | 'Public'
* **ipRules**: [IpRule](#iprule)[]

## IpRule
### Properties
* **value**: string

## PrivateEndpointConnection
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [schemas:9_privateEndpoint](#schemas9privateendpoint)
* **privateLinkServiceConnectionState**: [schemas:9_privateLinkServiceConnectionState](#schemas9privatelinkserviceconnectionstate)

## schemas:9_privateEndpoint
### Properties
* **id**: string

## schemas:9_privateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## Sku
### Properties
* **name**: 'basic' | 'free' | 'standard' | 'standard2' | 'standard3' | 'storage_optimized_l1' | 'storage_optimized_l2'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

