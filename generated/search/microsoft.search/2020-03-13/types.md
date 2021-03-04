# Microsoft.Search @ 2020-03-13

## Resource Microsoft.Search/searchServices@2020-03-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-13' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SearchServiceProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Search/searchServices/privateEndpointConnections@2020-03-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-13' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Search/searchServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## SearchServiceProperties
### Properties
* **networkRuleSet**: NetworkRuleSet
* **partitionCount**: int
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **replicaCount**: int
* **statusDetails**: string (ReadOnly)

## NetworkRuleSet
### Properties
* **ipRules**: IpRule[]

## IpRule
### Properties
* **value**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpointConnectionPropertiesPrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState

## PrivateEndpointConnectionPropertiesPrivateEndpoint
### Properties
* **id**: string

## PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string

## Sku
### Properties

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

