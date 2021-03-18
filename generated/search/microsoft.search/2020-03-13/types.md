# Microsoft.Search @ 2020-03-13

## Resource Microsoft.Search/searchServices@2020-03-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-13' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SearchServiceProperties](#searchserviceproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Search/searchServices/privateEndpointConnections@2020-03-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-13' (ReadOnly, DeployTimeConstant)
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
* **publicNetworkAccess**: 'disabled' | 'enabled'
* **replicaCount**: int
* **status**: 'degraded' | 'deleting' | 'disabled' | 'error' | 'provisioning' | 'running' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## NetworkRuleSet
### Properties
* **ipRules**: [IpRule](#iprule)[]

## IpRule
### Properties
* **value**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointConnectionPropertiesPrivateEndpoint](#privateendpointconnectionpropertiesprivateendpoint)
* **privateLinkServiceConnectionState**: [PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState](#privateendpointconnectionpropertiesprivatelinkserviceconnectionstate)

## PrivateEndpointConnectionPropertiesPrivateEndpoint
### Properties
* **id**: string

## PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## Sku
### Properties
* **name**: 'basic' | 'free' | 'standard' | 'standard2' | 'standard3' | 'storage_optimized_l1' | 'storage_optimized_l2'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

