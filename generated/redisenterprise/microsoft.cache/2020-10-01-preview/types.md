# Microsoft.Cache @ 2020-10-01-preview

## Resource Microsoft.Cache/redisEnterprise@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: Sku (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Cache/redisEnterprise' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Cache/redisEnterprise/databases@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseProperties
* **type**: 'Microsoft.Cache/redisEnterprise/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/redisEnterprise/privateEndpointConnections@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Cache/redisEnterprise/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **hostName**: string (ReadOnly)
* **minimumTlsVersion**: string
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **redisVersion**: string (ReadOnly)
* **resourceState**: 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleting' | 'DisableFailed' | 'Disabled' | 'Disabling' | 'EnableFailed' | 'Enabling' | 'Running' | 'UpdateFailed' | 'Updating' (ReadOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Pending' | 'Rejected'

## Sku
### Properties
* **capacity**: int
* **name**: 'EnterpriseFlash_F1500' | 'EnterpriseFlash_F300' | 'EnterpriseFlash_F700' | 'Enterprise_E10' | 'Enterprise_E100' | 'Enterprise_E20' | 'Enterprise_E50' (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseProperties
### Properties
* **clientProtocol**: 'Encrypted' | 'Plaintext'
* **clusteringPolicy**: 'EnterpriseCluster' | 'OSSCluster'
* **evictionPolicy**: 'AllKeysLFU' | 'AllKeysLRU' | 'AllKeysRandom' | 'NoEviction' | 'VolatileLFU' | 'VolatileLRU' | 'VolatileRandom' | 'VolatileTTL'
* **modules**: Module[]
* **port**: int
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceState**: 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleting' | 'DisableFailed' | 'Disabled' | 'Disabling' | 'EnableFailed' | 'Enabling' | 'Running' | 'UpdateFailed' | 'Updating' (ReadOnly)

## Module
### Properties
* **args**: string
* **name**: string (Required)
* **version**: string (ReadOnly)

