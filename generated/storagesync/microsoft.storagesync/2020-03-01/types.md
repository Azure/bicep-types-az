# Microsoft.StorageSync @ 2020-03-01

## Resource Microsoft.StorageSync/storageSyncServices@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageSyncServiceCreateParametersPropertiesOrStorageSyncServiceProperties](#storagesyncservicecreateparameterspropertiesorstoragesyncserviceproperties): The parameters used to create the storage sync service.
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/privateEndpointConnections@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.StorageSync/storageSyncServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties](#registeredservercreateparameterspropertiesorregisteredserverproperties): The parameters used to create the registered server.
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: The parameters used to create the sync group
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties](#cloudendpointcreateparameterspropertiesorcloudendpointproperties): The parameters used to create the cloud endpoint.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointCreateParametersPropertiesOrServerEndpointProperties](#serverendpointcreateparameterspropertiesorserverendpointproperties): The parameters used to create the server endpoint.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/workflows@2020-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties) (ReadOnly): Workflow properties.
* **type**: 'Microsoft.StorageSync/storageSyncServices/workflows' (ReadOnly, DeployTimeConstant): The resource type

## CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties
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

## CloudTieringCachePerformance
### Properties
* **cacheHitBytes**: int {minValue: 0} (ReadOnly): Count of bytes that were served from the local server
* **cacheHitBytesPercent**: int {minValue: 0, maxValue: 100} (ReadOnly): Percentage of total bytes (hit + miss) that were served from the local server
* **cacheMissBytes**: int {minValue: 0} (ReadOnly): Count of bytes that were served from the cloud
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp

## CloudTieringDatePolicyStatus
### Properties
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **tieredFilesMostRecentAccessTimestamp**: string (ReadOnly): Most recent access time of tiered files

## CloudTieringFilesNotTiering
### Properties
* **errors**: [FilesNotTieringError](#filesnottieringerror)[] (ReadOnly): Array of tiering errors
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **totalFileCount**: int {minValue: 0} (ReadOnly): Last cloud tiering result (HResult)

## CloudTieringSpaceSavings
### Properties
* **cachedSizeBytes**: int {minValue: 0} (ReadOnly): Cached content size on the server
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **spaceSavingsBytes**: int {minValue: 0} (ReadOnly): Count of bytes saved on the server
* **spaceSavingsPercent**: int {minValue: 0, maxValue: 100} (ReadOnly): Percentage of cached size over total size
* **totalSizeCloudBytes**: int {minValue: 0} (ReadOnly): Total size of content in the azure file share
* **volumeSizeBytes**: int {minValue: 0} (ReadOnly): Volume size

## CloudTieringVolumeFreeSpacePolicyStatus
### Properties
* **currentVolumeFreeSpacePercent**: int {minValue: 0, maxValue: 100} (ReadOnly): Current volume free space percentage.
* **effectiveVolumeFreeSpacePolicy**: int {minValue: 0, maxValue: 100} (ReadOnly): In the case where multiple server endpoints are present in a volume, an effective free space policy is applied.
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp

## FilesNotTieringError
### Properties
* **errorCode**: int (ReadOnly): Error code (HResult)
* **fileCount**: int {minValue: 0} (ReadOnly): Count of files with this error

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties
### Properties
* **agentVersion**: string: Registered Server Agent Version
* **agentVersionExpirationDate**: string (ReadOnly): Registered Server Agent Version Expiration Date
* **agentVersionStatus**: 'Blocked' | 'Expired' | 'NearExpiry' | 'Ok' | string (ReadOnly): Registered Server Agent Version Status
* **clusterId**: string: Registered Server clusterId
* **clusterName**: string: Registered Server clusterName
* **discoveryEndpointUri**: string (ReadOnly): Resource discoveryEndpointUri
* **friendlyName**: string: Friendly Name
* **lastHeartBeat**: string: Registered Server last heart beat
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): Registered Server lastWorkflowId
* **managementEndpointUri**: string (ReadOnly): Management Endpoint Uri
* **monitoringConfiguration**: string (ReadOnly): Monitoring Configuration
* **monitoringEndpointUri**: string (ReadOnly): Telemetry Endpoint Uri
* **provisioningState**: string (ReadOnly): Registered Server Provisioning State
* **resourceLocation**: string (ReadOnly): Resource Location
* **serverCertificate**: string: Registered Server Certificate
* **serverId**: string: Registered Server serverId
* **serverManagementErrorCode**: int (ReadOnly): Registered Server Management Error Code
* **serverOSVersion**: string: Registered Server OS Version
* **serverRole**: string: Registered Server serverRole
* **serviceLocation**: string (ReadOnly): Service Location
* **storageSyncServiceUid**: string (ReadOnly): Registered Server storageSyncServiceUid

## ServerEndpointCloudTieringStatus
### Properties
* **cachePerformance**: [CloudTieringCachePerformance](#cloudtieringcacheperformance) (ReadOnly): Information regarding how well the local cache on the server is performing.
* **datePolicyStatus**: [CloudTieringDatePolicyStatus](#cloudtieringdatepolicystatus) (ReadOnly): Status of the date policy
* **filesNotTiering**: [CloudTieringFilesNotTiering](#cloudtieringfilesnottiering) (ReadOnly): Information regarding files that failed to be tiered
* **health**: 'Error' | 'Healthy' | string (ReadOnly): Cloud tiering health state.
* **healthLastUpdatedTimestamp**: string (ReadOnly): The last updated timestamp of health state
* **lastCloudTieringResult**: int (ReadOnly): Last cloud tiering result (HResult)
* **lastSuccessTimestamp**: string (ReadOnly): Last cloud tiering success timestamp
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **spaceSavings**: [CloudTieringSpaceSavings](#cloudtieringspacesavings) (ReadOnly): Information regarding how much local space cloud tiering is saving.
* **volumeFreeSpacePolicyStatus**: [CloudTieringVolumeFreeSpacePolicyStatus](#cloudtieringvolumefreespacepolicystatus) (ReadOnly): Status of the volume free space policy

## ServerEndpointCreateParametersPropertiesOrServerEndpointProperties
### Properties
* **cloudTiering**: 'off' | 'on' | string: Cloud Tiering.
* **cloudTieringStatus**: [ServerEndpointCloudTieringStatus](#serverendpointcloudtieringstatus) (ReadOnly): Cloud tiering status. Only populated if cloud tiering is enabled.
* **friendlyName**: string: Friendly Name
* **initialDownloadPolicy**: 'AvoidTieredFiles' | 'NamespaceOnly' | 'NamespaceThenModifiedFiles' | string: Policy for how namespace and files are recalled during FastDr.
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): ServerEndpoint lastWorkflowId
* **localCacheMode**: 'DownloadNewAndModifiedFiles' | 'UpdateLocallyCachedFiles' | string: Policy for enabling follow-the-sun business models: link local cache to cloud behavior to pre-populate before local access.
* **offlineDataTransfer**: 'off' | 'on' | string: Offline data transfer
* **offlineDataTransferShareName**: string: Offline data transfer share name
* **offlineDataTransferStorageAccountResourceId**: string (ReadOnly): Offline data transfer storage account resource ID
* **offlineDataTransferStorageAccountTenantId**: string (ReadOnly): Offline data transfer storage account tenant ID
* **provisioningState**: string (ReadOnly): ServerEndpoint Provisioning State
* **recallStatus**: [ServerEndpointRecallStatus](#serverendpointrecallstatus) (ReadOnly): Recall status. Only populated if cloud tiering is enabled.
* **serverLocalPath**: string: Server Local path.
* **serverResourceId**: string: Server Resource Id.
* **syncStatus**: [ServerEndpointSyncStatus](#serverendpointsyncstatus) (ReadOnly): Server Endpoint sync status
* **tierFilesOlderThanDays**: int {minValue: 0, maxValue: 2147483647}: Tier files older than days.
* **volumeFreeSpacePercent**: int {minValue: 0, maxValue: 100}: Level of free space to be maintained by Cloud Tiering if it is enabled.

## ServerEndpointFilesNotSyncingError
### Properties
* **errorCode**: int (ReadOnly): Error code (HResult)
* **persistentCount**: int {minValue: 0} (ReadOnly): Count of persistent files not syncing with the specified error code
* **transientCount**: int {minValue: 0} (ReadOnly): Count of transient files not syncing with the specified error code

## ServerEndpointRecallError
### Properties
* **count**: int {minValue: 0} (ReadOnly): Count of occurences of the error
* **errorCode**: int (ReadOnly): Error code (HResult)

## ServerEndpointRecallStatus
### Properties
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **recallErrors**: [ServerEndpointRecallError](#serverendpointrecallerror)[] (ReadOnly): Array of recall errors
* **totalRecallErrorsCount**: int {minValue: 0} (ReadOnly): Total count of recall errors.

## ServerEndpointSyncActivityStatus
### Properties
* **appliedBytes**: int {minValue: 0} (ReadOnly): Applied bytes
* **appliedItemCount**: int {minValue: 0} (ReadOnly): Applied item count.
* **perItemErrorCount**: int {minValue: 0} (ReadOnly): Per item error count
* **syncMode**: 'InitialFullDownload' | 'InitialUpload' | 'NamespaceDownload' | 'Regular' | 'SnapshotUpload' | string (ReadOnly): Sync mode
* **timestamp**: string (ReadOnly): Timestamp when properties were updated
* **totalBytes**: int {minValue: 0} (ReadOnly): Total bytes (if available)
* **totalItemCount**: int {minValue: 0} (ReadOnly): Total item count (if available)

## ServerEndpointSyncSessionStatus
### Properties
* **filesNotSyncingErrors**: [ServerEndpointFilesNotSyncingError](#serverendpointfilesnotsyncingerror)[] (ReadOnly): Array of per-item errors coming from the last sync session.
* **lastSyncMode**: 'InitialFullDownload' | 'InitialUpload' | 'NamespaceDownload' | 'Regular' | 'SnapshotUpload' | string (ReadOnly): Sync mode
* **lastSyncPerItemErrorCount**: int {minValue: 0} (ReadOnly): Last sync per item error count.
* **lastSyncResult**: int (ReadOnly): Last sync result (HResult)
* **lastSyncSuccessTimestamp**: string (ReadOnly): Last sync success timestamp
* **lastSyncTimestamp**: string (ReadOnly): Last sync timestamp
* **persistentFilesNotSyncingCount**: int {minValue: 0} (ReadOnly): Count of persistent files not syncing.
* **transientFilesNotSyncingCount**: int {minValue: 0} (ReadOnly): Count of transient files not syncing.

## ServerEndpointSyncStatus
### Properties
* **combinedHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' | string (ReadOnly): Combined Health Status.
* **downloadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly): Download sync activity
* **downloadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' | string (ReadOnly): Download Health Status.
* **downloadStatus**: [ServerEndpointSyncSessionStatus](#serverendpointsyncsessionstatus) (ReadOnly): Download Status
* **lastUpdatedTimestamp**: string (ReadOnly): Last Updated Timestamp
* **offlineDataTransferStatus**: 'Complete' | 'InProgress' | 'NotRunning' | 'Stopping' | string (ReadOnly): Offline Data Transfer State
* **syncActivity**: 'Download' | 'Upload' | 'UploadAndDownload' | string (ReadOnly): Sync activity
* **totalPersistentFilesNotSyncingCount**: int {minValue: 0} (ReadOnly): Total count of persistent files not syncing (combined upload + download).
* **uploadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly): Upload sync activity
* **uploadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' | string (ReadOnly): Upload Health Status.
* **uploadStatus**: [ServerEndpointSyncSessionStatus](#serverendpointsyncsessionstatus) (ReadOnly): Upload Status

## StorageSyncServiceCreateParametersPropertiesOrStorageSyncServiceProperties
### Properties
* **incomingTrafficPolicy**: 'AllowAllTraffic' | 'AllowVirtualNetworksOnly' | string: Incoming Traffic Policy
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): StorageSyncService lastWorkflowId
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection associated with the specified storage sync service
* **provisioningState**: string (ReadOnly): StorageSyncService Provisioning State
* **storageSyncServiceStatus**: int (ReadOnly): Storage Sync service status.
* **storageSyncServiceUid**: string (ReadOnly): Storage Sync service Uid

## StorageSyncServiceCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowProperties
### Properties
* **lastOperationId**: string: workflow last operation identifier.
* **lastStepName**: string: last step name
* **operation**: 'cancel' | 'do' | 'undo' | string: operation direction.
* **status**: 'aborted' | 'active' | 'expired' | 'failed' | 'succeeded' | string: workflow status.
* **steps**: string: workflow steps

