# Microsoft.StorageSync @ 2017-06-05-preview

## Microsoft.StorageSync/storageSyncServices
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageSyncServiceProperties
* **tags**: any
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant)

## StorageSyncServiceProperties
### Properties
* **storageSyncServiceStatus**: int (ReadOnly)
* **storageSyncServiceUid**: string (ReadOnly)

## Microsoft.StorageSync/storageSyncServices/registeredServers
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegisteredServerProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant)

## RegisteredServerProperties
### Properties
* **agentVersion**: string
* **clusterId**: string
* **clusterName**: string
* **lastHeartBeat**: string
* **lastWorkflowId**: string
* **provisioningState**: string
* **serverCertificate**: string
* **serverId**: string
* **serverManagementtErrorCode**: int
* **serverOSVersion**: string
* **serverRole**: string
* **storageSyncServiceUid**: string

## Microsoft.StorageSync/storageSyncServices/syncGroups
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SyncGroupProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant)

## SyncGroupProperties
### Properties
* **syncGroupStatus**: string (ReadOnly)
* **uniqueId**: string

## Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CloudEndpointProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant)

## CloudEndpointProperties
### Properties
* **backupEnabled**: bool (ReadOnly)
* **friendlyName**: string
* **lastWorkflowId**: string
* **partnershipId**: string
* **provisioningState**: string
* **storageAccount**: string
* **storageAccountKey**: string
* **storageAccountResourceId**: string
* **storageAccountShareName**: string
* **storageAccountTenantId**: string

## Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerEndpointProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant)

## ServerEndpointProperties
### Properties
* **byteProgress**: int
* **byteTotal**: int
* **cloudTiering**: 'off' | 'on'
* **currentProgressType**: 'download' | 'initialize' | 'none' | 'recall' | 'upload'
* **friendlyName**: string
* **itemDownloadErrorCount**: int
* **itemProgressCount**: int
* **itemTotalCount**: int
* **itemUploadErrorCount**: int
* **lastSyncSuccess**: string
* **lastWorkflowId**: string
* **provisioningState**: string
* **serverLocalPath**: string
* **serverResourceId**: string
* **syncErrorContext**: string
* **syncErrorDirection**: 'download' | 'initialize' | 'none' | 'recall' | 'upload'
* **syncErrorState**: string
* **syncErrorStateTimestamp**: string
* **totalProgress**: int
* **volumeFreeSpacePercent**: int

