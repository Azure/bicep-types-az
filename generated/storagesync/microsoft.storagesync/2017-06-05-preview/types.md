# Microsoft.StorageSync @ 2017-06-05-preview

## Resource Microsoft.StorageSync/storageSyncServices@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageSyncServiceProperties](#storagesyncserviceproperties)
* **tags**: any
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegisteredServerProperties](#registeredserverproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SyncGroupProperties](#syncgroupproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CloudEndpointProperties](#cloudendpointproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerEndpointProperties](#serverendpointproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant)

## StorageSyncServiceProperties
### Properties
* **storageSyncServiceStatus**: int (ReadOnly)
* **storageSyncServiceUid**: string (ReadOnly)

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

## SyncGroupProperties
### Properties
* **syncGroupStatus**: string (ReadOnly)
* **uniqueId**: string

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

