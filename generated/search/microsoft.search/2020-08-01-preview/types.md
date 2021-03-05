# Microsoft.Search @ 2020-08-01-preview

## Resource Microsoft.Search/searchServices@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SearchServiceProperties
* **sku**: Sku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Search/searchServices/privateEndpointConnections@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Search/searchServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Search/searchServices/sharedPrivateLinkResources@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedPrivateLinkResourceProperties
* **type**: 'Microsoft.Search/searchServices/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant)

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
* **sharedPrivateLinkResources**: SharedPrivateLinkResource[] (ReadOnly)
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

## SharedPrivateLinkResource
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: SharedPrivateLinkResourceProperties
* **type**: string (ReadOnly)

## SharedPrivateLinkResourceProperties
### Properties
* **groupId**: string
* **privateLinkResourceId**: string
* **requestMessage**: string
* **resourceRegion**: string

## Sku
### Properties

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

