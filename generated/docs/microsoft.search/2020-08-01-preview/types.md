# Microsoft.Search @ 2020-08-01-preview

## Microsoft.Search/searchServices/privateEndpointConnections
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Search/searchServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: schemas:9_privateEndpoint
* **privateLinkServiceConnectionState**: schemas:9_privateLinkServiceConnectionState

## schemas:9_privateEndpoint
### Properties
* **id**: string

## schemas:9_privateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## Microsoft.Search/searchServices/sharedPrivateLinkResources
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedPrivateLinkResourceProperties
* **type**: 'Microsoft.Search/searchServices/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant)

## SharedPrivateLinkResourceProperties
### Properties
* **groupId**: string
* **privateLinkResourceId**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Incomplete' | 'Succeeded' | 'Updating'
* **requestMessage**: string
* **resourceRegion**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## Microsoft.Search/searchServices
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SearchServiceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## SearchServiceProperties
### Properties
* **hostingMode**: 'default' | 'highDensity'
* **networkRuleSet**: NetworkRuleSet
* **partitionCount**: int
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'failed' | 'provisioning' | 'succeeded' (ReadOnly)
* **publicNetworkAccess**: 'disabled' | 'enabled'
* **replicaCount**: int
* **sharedPrivateLinkResources**: SharedPrivateLinkResource[] (ReadOnly)
* **status**: 'degraded' | 'deleting' | 'disabled' | 'error' | 'provisioning' | 'running' (ReadOnly)
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

## SharedPrivateLinkResource
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: SharedPrivateLinkResourceProperties
* **type**: string (ReadOnly)

## Sku
### Properties
* **name**: 'basic' | 'free' | 'standard' | 'standard2' | 'standard3' | 'storage_optimized_l1' | 'storage_optimized_l2'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

