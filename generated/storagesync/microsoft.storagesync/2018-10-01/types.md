# Microsoft.StorageSync @ 2018-10-01

## Resource Microsoft.StorageSync/storageSyncServices@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegisteredServerCreateParametersProperties](#registeredservercreateparametersproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CloudEndpointCreateParametersProperties](#cloudendpointcreateparametersproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerEndpointCreateParametersProperties](#serverendpointcreateparametersproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RegisteredServerCreateParametersProperties
### Properties
* **agentVersion**: string
* **clusterId**: string
* **clusterName**: string
* **discoveryEndpointUri**: string (ReadOnly)
* **friendlyName**: string
* **lastHeartBeat**: string
* **lastOperationName**: string (ReadOnly)
* **lastWorkflowId**: string (ReadOnly)
* **managementEndpointUri**: string (ReadOnly)
* **monitoringConfiguration**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **resourceLocation**: string (ReadOnly)
* **serverCertificate**: string
* **serverId**: string
* **serverManagementErrorCode**: int (ReadOnly)
* **serverOSVersion**: string
* **serverRole**: string
* **serviceLocation**: string (ReadOnly)
* **storageSyncServiceUid**: string (ReadOnly)

## CloudEndpointCreateParametersProperties
### Properties
* **backupEnabled**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **lastOperationName**: string (ReadOnly)
* **lastWorkflowId**: string (ReadOnly)
* **partnershipId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **storageAccountResourceId**: string
* **storageAccountShareName**: string
* **storageAccountTenantId**: string

## ServerEndpointCreateParametersProperties
### Properties
* **cloudTiering**: 'off' | 'on'
* **friendlyName**: string
* **lastOperationName**: string (ReadOnly)
* **lastWorkflowId**: string (ReadOnly)
* **offlineDataTransfer**: 'off' | 'on'
* **offlineDataTransferShareName**: string
* **offlineDataTransferStorageAccountResourceId**: string (ReadOnly)
* **offlineDataTransferStorageAccountTenantId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serverLocalPath**: string
* **serverResourceId**: string
* **syncStatus**: [ServerEndpointHealth](#serverendpointhealth) (ReadOnly)
* **tierFilesOlderThanDays**: int
* **volumeFreeSpacePercent**: int

## ServerEndpointHealth
### Properties
* **combinedHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly)
* **currentProgress**: [SyncProgressStatus](#syncprogressstatus) (ReadOnly)
* **downloadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly)
* **downloadStatus**: [SyncSessionStatus](#syncsessionstatus) (ReadOnly)
* **lastUpdatedTimestamp**: string (ReadOnly)
* **offlineDataTransferStatus**: 'Complete' | 'InProgress' | 'NotRunning' | 'Stopping' (ReadOnly)
* **uploadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly)
* **uploadStatus**: [SyncSessionStatus](#syncsessionstatus) (ReadOnly)

## SyncProgressStatus
### Properties
* **appliedBytes**: int (ReadOnly)
* **appliedItemCount**: int (ReadOnly)
* **perItemErrorCount**: int (ReadOnly)
* **progressTimestamp**: string (ReadOnly)
* **syncDirection**: 'download' | 'initialize' | 'none' | 'recall' | 'upload' (ReadOnly)
* **totalBytes**: int (ReadOnly)
* **totalItemCount**: int (ReadOnly)

## SyncSessionStatus
### Properties
* **lastSyncPerItemErrorCount**: int (ReadOnly)
* **lastSyncResult**: int (ReadOnly)
* **lastSyncSuccessTimestamp**: string (ReadOnly)
* **lastSyncTimestamp**: string (ReadOnly)

