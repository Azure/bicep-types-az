# Microsoft.StorageSync @ 2020-09-01

## Resource Microsoft.StorageSync/storageSyncServices@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageSyncServiceCreateParametersProperties
* **tags**: StorageSyncServiceCreateParametersTags
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/privateEndpointConnections@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegisteredServerCreateParametersProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CloudEndpointCreateParametersProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerEndpointCreateParametersProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant)

## StorageSyncServiceCreateParametersProperties
### Properties
* **incomingTrafficPolicy**: 'AllowAllTraffic' | 'AllowVirtualNetworksOnly'

## StorageSyncServiceCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## RegisteredServerCreateParametersProperties
### Properties
* **agentVersion**: string
* **clusterId**: string
* **clusterName**: string
* **friendlyName**: string
* **lastHeartBeat**: string
* **serverCertificate**: string
* **serverId**: string
* **serverOSVersion**: string
* **serverRole**: string

## CloudEndpointCreateParametersProperties
### Properties
* **azureFileShareName**: string
* **friendlyName**: string
* **storageAccountResourceId**: string
* **storageAccountTenantId**: string

## ServerEndpointCreateParametersProperties
### Properties
* **cloudTiering**: 'off' | 'on'
* **friendlyName**: string
* **initialDownloadPolicy**: 'AvoidTieredFiles' | 'NamespaceOnly' | 'NamespaceThenModifiedFiles'
* **localCacheMode**: 'DownloadNewAndModifiedFiles' | 'UpdateLocallyCachedFiles'
* **offlineDataTransfer**: 'off' | 'on'
* **offlineDataTransferShareName**: string
* **serverLocalPath**: string
* **serverResourceId**: string
* **tierFilesOlderThanDays**: int
* **volumeFreeSpacePercent**: int

