# Microsoft.StorageSync @ 2019-03-01

## Resource Microsoft.StorageSync/storageSyncServices@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: Storage Sync Service Properties object.
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags): Resource tags.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerCreateParametersProperties](#registeredservercreateparametersproperties): RegisteredServer Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: SyncGroup Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointCreateParametersProperties](#cloudendpointcreateparametersproperties): CloudEndpoint Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointCreateParametersProperties](#serverendpointcreateparametersproperties): ServerEndpoint Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## StorageSyncServiceCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RegisteredServerCreateParametersProperties
### Properties
* **agentVersion**: string: Registered Server Agent Version
* **clusterId**: string: Registered Server clusterId
* **clusterName**: string: Registered Server clusterName
* **discoveryEndpointUri**: string (ReadOnly): Resource discoveryEndpointUri
* **friendlyName**: string: Friendly Name
* **lastHeartBeat**: string: Registered Server last heart beat
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): Registered Server lastWorkflowId
* **managementEndpointUri**: string (ReadOnly): Management Endpoint Uri
* **monitoringConfiguration**: string (ReadOnly): Monitoring Configuration
* **provisioningState**: string (ReadOnly): Registered Server Provisioning State
* **resourceLocation**: string (ReadOnly): Resource Location
* **serverCertificate**: string: Registered Server Certificate
* **serverId**: string: Registered Server serverId
* **serverManagementErrorCode**: int (ReadOnly): Registered Server Management Error Code
* **serverOSVersion**: string: Registered Server OS Version
* **serverRole**: string: Registered Server serverRole
* **serviceLocation**: string (ReadOnly): Service Location
* **storageSyncServiceUid**: string (ReadOnly): Registered Server storageSyncServiceUid

## CloudEndpointCreateParametersProperties
### Properties
* **azureFileShareName**: string: Azure file share name
* **backupEnabled**: string (ReadOnly): Backup Enabled
* **friendlyName**: string: Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): CloudEndpoint lastWorkflowId
* **partnershipId**: string (ReadOnly): Partnership Id
* **provisioningState**: string (ReadOnly): CloudEndpoint Provisioning State
* **storageAccountResourceId**: string: Storage Account Resource Id
* **storageAccountTenantId**: string: Storage Account Tenant Id

## ServerEndpointCreateParametersProperties
### Properties
* **cloudTiering**: 'off' | 'on': Type of the Feature Status
* **friendlyName**: string: Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): ServerEndpoint lastWorkflowId
* **offlineDataTransfer**: 'off' | 'on': Type of the Feature Status
* **offlineDataTransferShareName**: string: Offline data transfer share name
* **offlineDataTransferStorageAccountResourceId**: string (ReadOnly): Offline data transfer storage account resource ID
* **offlineDataTransferStorageAccountTenantId**: string (ReadOnly): Offline data transfer storage account tenant ID
* **provisioningState**: string (ReadOnly): ServerEndpoint Provisioning State
* **serverLocalPath**: string: Server folder used for data synchronization
* **serverResourceId**: string: Arm resource identifier.
* **syncStatus**: [ServerEndpointSyncStatus](#serverendpointsyncstatus) (ReadOnly): Server Endpoint sync status
* **tierFilesOlderThanDays**: int: Tier files older than days.
* **volumeFreeSpacePercent**: int: Level of free space to be maintained by Cloud Tiering if it is enabled.

## ServerEndpointSyncStatus
### Properties
* **combinedHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly): Type of the Health state
* **downloadActivity**: [SyncActivityStatus](#syncactivitystatus) (ReadOnly): Sync Session status object.
* **downloadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly): Type of the Health state
* **downloadStatus**: [SyncSessionStatus](#syncsessionstatus) (ReadOnly): Sync Session status object.
* **lastUpdatedTimestamp**: string (ReadOnly): Last Updated Timestamp
* **offlineDataTransferStatus**: 'Complete' | 'InProgress' | 'NotRunning' | 'Stopping' (ReadOnly): Type of the Health state
* **syncActivity**: 'Download' | 'Upload' | 'UploadAndDownload' (ReadOnly): Type of the sync activity state
* **totalPersistentFilesNotSyncingCount**: int (ReadOnly): Total count of persistent files not syncing (combined upload + download). Reserved for future use.
* **uploadActivity**: [SyncActivityStatus](#syncactivitystatus) (ReadOnly): Sync Session status object.
* **uploadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly): Type of the Health state
* **uploadStatus**: [SyncSessionStatus](#syncsessionstatus) (ReadOnly): Sync Session status object.

## SyncActivityStatus
### Properties
* **appliedBytes**: int (ReadOnly): Applied bytes
* **appliedItemCount**: int (ReadOnly): Applied item count.
* **perItemErrorCount**: int (ReadOnly): Per item error count
* **timestamp**: string (ReadOnly): Timestamp when properties were updated
* **totalBytes**: int (ReadOnly): Total bytes (if available)
* **totalItemCount**: int (ReadOnly): Total item count (if available)

## SyncSessionStatus
### Properties
* **filesNotSyncingErrors**: [FilesNotSyncingError](#filesnotsyncingerror)[] (ReadOnly): Array of per-item errors coming from the last sync session. Reserved for future use.
* **lastSyncPerItemErrorCount**: int (ReadOnly): Last sync per item error count.
* **lastSyncResult**: int (ReadOnly): Last sync result (HResult)
* **lastSyncSuccessTimestamp**: string (ReadOnly): Last sync success timestamp
* **lastSyncTimestamp**: string (ReadOnly): Last sync timestamp
* **persistentFilesNotSyncingCount**: int (ReadOnly): Count of persistent files not syncing. Reserved for future use.
* **transientFilesNotSyncingCount**: int (ReadOnly): Count of transient files not syncing. Reserved for future use.

## FilesNotSyncingError
### Properties
* **errorCode**: int (ReadOnly): Error code (HResult)
* **persistentCount**: int (ReadOnly): Count of persistent files not syncing with the specified error code
* **transientCount**: int (ReadOnly): Count of transient files not syncing with the specified error code

