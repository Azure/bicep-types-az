# Microsoft.StorageSync @ 2019-06-01

## Resource Microsoft.StorageSync/storageSyncServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any:
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerCreateParametersProperties](#registeredservercreateparametersproperties):
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: Sync Group Create Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointCreateParametersProperties](#cloudendpointcreateparametersproperties): CloudEndpoint Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointCreateParametersProperties](#serverendpointcreateparametersproperties): ServerEndpoint Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
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
* **cloudTiering**: 'off' | 'on': Cloud Tiering. Possible values include: 'on', 'off'
* **cloudTieringStatus**: [ServerEndpointCloudTieringStatus](#serverendpointcloudtieringstatus) (ReadOnly): Server endpoint cloud tiering status object.
* **friendlyName**: string: Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): ServerEndpoint lastWorkflowId
* **offlineDataTransfer**: 'off' | 'on': Offline data transfer. Possible values include: 'on', 'off'
* **offlineDataTransferShareName**: string: Offline data transfer share name
* **offlineDataTransferStorageAccountResourceId**: string (ReadOnly): Offline data transfer storage account resource ID
* **offlineDataTransferStorageAccountTenantId**: string (ReadOnly): Offline data transfer storage account tenant ID
* **provisioningState**: string (ReadOnly): ServerEndpoint Provisioning State
* **recallStatus**: [ServerEndpointRecallStatus](#serverendpointrecallstatus) (ReadOnly): Server endpoint recall status object.
* **serverLocalPath**: string: Server folder used for data synchronization
* **serverResourceId**: string: Arm resource identifier.
* **syncStatus**: [ServerEndpointSyncStatus](#serverendpointsyncstatus) (ReadOnly): Server Endpoint sync status
* **tierFilesOlderThanDays**: int: Tier files older than days.
* **volumeFreeSpacePercent**: int: Level of free space to be maintained by Cloud Tiering if it is enabled.

## ServerEndpointCloudTieringStatus
### Properties
* **health**: 'Error' | 'Healthy' (ReadOnly): Cloud tiering health state. Possible values include: 'Healthy', 'Error'
* **lastCloudTieringResult**: int (ReadOnly): Last cloud tiering result (HResult)
* **lastSuccessTimestamp**: string (ReadOnly): Last cloud tiering success timestamp
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp

## ServerEndpointRecallStatus
### Properties
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **recallErrors**: [ServerEndpointRecallError](#serverendpointrecallerror)[] (ReadOnly): Array of recall errors
* **totalRecallErrorsCount**: int (ReadOnly): Total count of recall errors.

## ServerEndpointRecallError
### Properties
* **count**: int (ReadOnly): Count of occurences of the error
* **errorCode**: int (ReadOnly): Error code (HResult)

## ServerEndpointSyncStatus
### Properties
* **combinedHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly): Combined Health Status. Possible values include: 'Healthy', 'Error', 'SyncBlockedForRestore', 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
* **downloadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly): Sync Session status object.
* **downloadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly): Download Health Status. Possible values include: 'Healthy', 'Error', 'SyncBlockedForRestore', 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
* **downloadStatus**: [ServerEndpointSyncSessionStatus](#serverendpointsyncsessionstatus) (ReadOnly): Sync Session status object.
* **lastUpdatedTimestamp**: string (ReadOnly): Last Updated Timestamp
* **offlineDataTransferStatus**: 'Complete' | 'InProgress' | 'NotRunning' | 'Stopping' (ReadOnly): Offline Data Transfer State. Possible values include: 'InProgress', 'Stopping', 'NotRunning', 'Complete'
* **syncActivity**: 'Download' | 'Upload' | 'UploadAndDownload' (ReadOnly): Sync activity. Possible values include: 'Upload', 'Download', 'UploadAndDownload'
* **totalPersistentFilesNotSyncingCount**: int (ReadOnly): Total count of persistent files not syncing (combined upload + download).
* **uploadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly): Sync Session status object.
* **uploadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly): Upload Health Status. Possible values include: 'Healthy', 'Error', 'SyncBlockedForRestore', 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
* **uploadStatus**: [ServerEndpointSyncSessionStatus](#serverendpointsyncsessionstatus) (ReadOnly): Sync Session status object.

## ServerEndpointSyncActivityStatus
### Properties
* **appliedBytes**: int (ReadOnly): Applied bytes
* **appliedItemCount**: int (ReadOnly): Applied item count.
* **perItemErrorCount**: int (ReadOnly): Per item error count
* **timestamp**: string (ReadOnly): Timestamp when properties were updated
* **totalBytes**: int (ReadOnly): Total bytes (if available)
* **totalItemCount**: int (ReadOnly): Total item count (if available)

## ServerEndpointSyncSessionStatus
### Properties
* **filesNotSyncingErrors**: [ServerEndpointFilesNotSyncingError](#serverendpointfilesnotsyncingerror)[] (ReadOnly): Array of per-item errors coming from the last sync session.
* **lastSyncPerItemErrorCount**: int (ReadOnly): Last sync per item error count.
* **lastSyncResult**: int (ReadOnly): Last sync result (HResult)
* **lastSyncSuccessTimestamp**: string (ReadOnly): Last sync success timestamp
* **lastSyncTimestamp**: string (ReadOnly): Last sync timestamp
* **persistentFilesNotSyncingCount**: int (ReadOnly): Count of persistent files not syncing.
* **transientFilesNotSyncingCount**: int (ReadOnly): Count of transient files not syncing.

## ServerEndpointFilesNotSyncingError
### Properties
* **errorCode**: int (ReadOnly): Error code (HResult)
* **persistentCount**: int (ReadOnly): Count of persistent files not syncing with the specified error code
* **transientCount**: int (ReadOnly): Count of transient files not syncing with the specified error code

