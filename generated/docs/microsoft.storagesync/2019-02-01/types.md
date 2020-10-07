# Microsoft.StorageSync @ 2019-02-01

## Microsoft.StorageSync/storageSyncServices/registeredServers
### Properties
* **apiVersion**: '2019-02-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegisteredServerCreateParametersProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant)

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

## Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints
### Properties
* **apiVersion**: '2019-02-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CloudEndpointCreateParametersProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant)

## CloudEndpointCreateParametersProperties
### Properties
* **azureFileShareName**: string
* **backupEnabled**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **lastOperationName**: string (ReadOnly)
* **lastWorkflowId**: string (ReadOnly)
* **partnershipId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **storageAccountResourceId**: string
* **storageAccountTenantId**: string

## Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints
### Properties
* **apiVersion**: '2019-02-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerEndpointCreateParametersProperties
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant)

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
* **syncStatus**: ServerEndpointSyncStatus (ReadOnly)
* **tierFilesOlderThanDays**: int
* **volumeFreeSpacePercent**: int

## ServerEndpointSyncStatus
### Properties
* **combinedHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly)
* **downloadActivity**: SyncActivityStatus (ReadOnly)
* **downloadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly)
* **downloadStatus**: SyncSessionStatus (ReadOnly)
* **lastUpdatedTimestamp**: string (ReadOnly)
* **offlineDataTransferStatus**: 'Complete' | 'InProgress' | 'NotRunning' | 'Stopping' (ReadOnly)
* **syncActivity**: 'Download' | 'Upload' | 'UploadAndDownload' (ReadOnly)
* **totalPersistentFilesNotSyncingCount**: int (ReadOnly)
* **uploadActivity**: SyncActivityStatus (ReadOnly)
* **uploadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly)
* **uploadStatus**: SyncSessionStatus (ReadOnly)

## SyncActivityStatus
### Properties
* **appliedBytes**: int (ReadOnly)
* **appliedItemCount**: int (ReadOnly)
* **perItemErrorCount**: int (ReadOnly)
* **timestamp**: string (ReadOnly)
* **totalBytes**: int (ReadOnly)
* **totalItemCount**: int (ReadOnly)

## SyncSessionStatus
### Properties
* **filesNotSyncingErrors**: FilesNotSyncingError[] (ReadOnly)
* **lastSyncPerItemErrorCount**: int (ReadOnly)
* **lastSyncResult**: int (ReadOnly)
* **lastSyncSuccessTimestamp**: string (ReadOnly)
* **lastSyncTimestamp**: string (ReadOnly)
* **persistentFilesNotSyncingCount**: int (ReadOnly)
* **transientFilesNotSyncingCount**: int (ReadOnly)

## FilesNotSyncingError
### Properties
* **errorCode**: int (ReadOnly)
* **persistentCount**: int (ReadOnly)
* **transientCount**: int (ReadOnly)

## Microsoft.StorageSync/storageSyncServices/syncGroups
### Properties
* **apiVersion**: '2019-02-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant)

## Microsoft.StorageSync/storageSyncServices
### Properties
* **apiVersion**: '2019-02-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

