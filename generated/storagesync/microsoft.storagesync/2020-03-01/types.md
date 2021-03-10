# Microsoft.StorageSync @ 2020-03-01

## Resource Microsoft.StorageSync/storageSyncServices@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageSyncServiceCreateParametersProperties](#storagesyncservicecreateparametersproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/privateEndpointConnections@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegisteredServerCreateParametersProperties](#registeredservercreateparametersproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CloudEndpointCreateParametersProperties](#cloudendpointcreateparametersproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerEndpointCreateParametersProperties](#serverendpointcreateparametersproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant)

## StorageSyncServiceCreateParametersProperties
### Properties
* **incomingTrafficPolicy**: 'AllowAllTraffic' | 'AllowVirtualNetworksOnly'
* **lastOperationName**: string (ReadOnly)
* **lastWorkflowId**: string (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **storageSyncServiceStatus**: int (ReadOnly)
* **storageSyncServiceUid**: string (ReadOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: 'Approved' | 'Pending' | 'Rejected' (ReadOnly)

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
* **monitoringEndpointUri**: string (ReadOnly)
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
* **azureFileShareName**: string
* **backupEnabled**: string (ReadOnly)
* **friendlyName**: string
* **lastOperationName**: string (ReadOnly)
* **lastWorkflowId**: string (ReadOnly)
* **partnershipId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **storageAccountResourceId**: string
* **storageAccountTenantId**: string

## ServerEndpointCreateParametersProperties
### Properties
* **cloudTiering**: 'off' | 'on'
* **cloudTieringStatus**: [ServerEndpointCloudTieringStatus](#serverendpointcloudtieringstatus) (ReadOnly)
* **friendlyName**: string
* **initialDownloadPolicy**: 'AvoidTieredFiles' | 'NamespaceOnly' | 'NamespaceThenModifiedFiles'
* **lastOperationName**: string (ReadOnly)
* **lastWorkflowId**: string (ReadOnly)
* **localCacheMode**: 'DownloadNewAndModifiedFiles' | 'UpdateLocallyCachedFiles'
* **offlineDataTransfer**: 'off' | 'on'
* **offlineDataTransferShareName**: string
* **offlineDataTransferStorageAccountResourceId**: string (ReadOnly)
* **offlineDataTransferStorageAccountTenantId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **recallStatus**: [ServerEndpointRecallStatus](#serverendpointrecallstatus) (ReadOnly)
* **serverLocalPath**: string
* **serverResourceId**: string
* **syncStatus**: [ServerEndpointSyncStatus](#serverendpointsyncstatus) (ReadOnly)
* **tierFilesOlderThanDays**: int
* **volumeFreeSpacePercent**: int

## ServerEndpointCloudTieringStatus
### Properties
* **cachePerformance**: [CloudTieringCachePerformance](#cloudtieringcacheperformance) (ReadOnly)
* **datePolicyStatus**: [CloudTieringDatePolicyStatus](#cloudtieringdatepolicystatus) (ReadOnly)
* **filesNotTiering**: [CloudTieringFilesNotTiering](#cloudtieringfilesnottiering) (ReadOnly)
* **health**: 'Error' | 'Healthy' (ReadOnly)
* **healthLastUpdatedTimestamp**: string (ReadOnly)
* **lastCloudTieringResult**: int (ReadOnly)
* **lastSuccessTimestamp**: string (ReadOnly)
* **lastUpdatedTimestamp**: string (ReadOnly)
* **spaceSavings**: [CloudTieringSpaceSavings](#cloudtieringspacesavings) (ReadOnly)
* **volumeFreeSpacePolicyStatus**: [CloudTieringVolumeFreeSpacePolicyStatus](#cloudtieringvolumefreespacepolicystatus) (ReadOnly)

## CloudTieringCachePerformance
### Properties
* **cacheHitBytes**: int (ReadOnly)
* **cacheHitBytesPercent**: int (ReadOnly)
* **cacheMissBytes**: int (ReadOnly)
* **lastUpdatedTimestamp**: string (ReadOnly)

## CloudTieringDatePolicyStatus
### Properties
* **lastUpdatedTimestamp**: string (ReadOnly)
* **tieredFilesMostRecentAccessTimestamp**: string (ReadOnly)

## CloudTieringFilesNotTiering
### Properties
* **errors**: [FilesNotTieringError](#filesnottieringerror)[] (ReadOnly)
* **lastUpdatedTimestamp**: string (ReadOnly)
* **totalFileCount**: int (ReadOnly)

## FilesNotTieringError
### Properties
* **errorCode**: int (ReadOnly)
* **fileCount**: int (ReadOnly)

## CloudTieringSpaceSavings
### Properties
* **cachedSizeBytes**: int (ReadOnly)
* **lastUpdatedTimestamp**: string (ReadOnly)
* **spaceSavingsBytes**: int (ReadOnly)
* **spaceSavingsPercent**: int (ReadOnly)
* **totalSizeCloudBytes**: int (ReadOnly)
* **volumeSizeBytes**: int (ReadOnly)

## CloudTieringVolumeFreeSpacePolicyStatus
### Properties
* **currentVolumeFreeSpacePercent**: int (ReadOnly)
* **effectiveVolumeFreeSpacePolicy**: int (ReadOnly)
* **lastUpdatedTimestamp**: string (ReadOnly)

## ServerEndpointRecallStatus
### Properties
* **lastUpdatedTimestamp**: string (ReadOnly)
* **recallErrors**: [ServerEndpointRecallError](#serverendpointrecallerror)[] (ReadOnly)
* **totalRecallErrorsCount**: int (ReadOnly)

## ServerEndpointRecallError
### Properties
* **count**: int (ReadOnly)
* **errorCode**: int (ReadOnly)

## ServerEndpointSyncStatus
### Properties
* **combinedHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly)
* **downloadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly)
* **downloadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly)
* **downloadStatus**: [ServerEndpointSyncSessionStatus](#serverendpointsyncsessionstatus) (ReadOnly)
* **lastUpdatedTimestamp**: string (ReadOnly)
* **offlineDataTransferStatus**: 'Complete' | 'InProgress' | 'NotRunning' | 'Stopping' (ReadOnly)
* **syncActivity**: 'Download' | 'Upload' | 'UploadAndDownload' (ReadOnly)
* **totalPersistentFilesNotSyncingCount**: int (ReadOnly)
* **uploadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly)
* **uploadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' (ReadOnly)
* **uploadStatus**: [ServerEndpointSyncSessionStatus](#serverendpointsyncsessionstatus) (ReadOnly)

## ServerEndpointSyncActivityStatus
### Properties
* **appliedBytes**: int (ReadOnly)
* **appliedItemCount**: int (ReadOnly)
* **perItemErrorCount**: int (ReadOnly)
* **timestamp**: string (ReadOnly)
* **totalBytes**: int (ReadOnly)
* **totalItemCount**: int (ReadOnly)

## ServerEndpointSyncSessionStatus
### Properties
* **filesNotSyncingErrors**: [ServerEndpointFilesNotSyncingError](#serverendpointfilesnotsyncingerror)[] (ReadOnly)
* **lastSyncPerItemErrorCount**: int (ReadOnly)
* **lastSyncResult**: int (ReadOnly)
* **lastSyncSuccessTimestamp**: string (ReadOnly)
* **lastSyncTimestamp**: string (ReadOnly)
* **persistentFilesNotSyncingCount**: int (ReadOnly)
* **transientFilesNotSyncingCount**: int (ReadOnly)

## ServerEndpointFilesNotSyncingError
### Properties
* **errorCode**: int (ReadOnly)
* **persistentCount**: int (ReadOnly)
* **transientCount**: int (ReadOnly)

