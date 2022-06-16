# Microsoft.StorageSync @ 2020-09-01

## Resource Microsoft.StorageSync/storageSyncServices@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageSyncServiceCreateParametersPropertiesOrStorageSyncServiceProperties](#storagesyncservicecreateparameterspropertiesorstoragesyncserviceproperties): The parameters used to create the storage sync service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/privateEndpointConnections@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageSync/storageSyncServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties](#registeredservercreateparameterspropertiesorregisteredserverproperties): The parameters used to create the registered server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: The parameters used to create the sync group
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties](#cloudendpointcreateparameterspropertiesorcloudendpointproperties): The parameters used to create the cloud endpoint.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointCreateParametersPropertiesOrServerEndpointProperties](#serverendpointcreateparameterspropertiesorserverendpointproperties): The parameters used to create the server endpoint.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## CloudEndpointChangeEnumerationActivity
### Properties
* **deletesProgressPercent**: int (ReadOnly): Progress percentage for processing deletes. This is done separately from the rest of the enumeration run
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **minutesRemaining**: int (ReadOnly): Estimate of time remaining for the enumeration run
* **operationState**: 'EnumerationInProgress' | 'InitialEnumerationInProgress' | string (ReadOnly): Change enumeration operation state
* **processedDirectoriesCount**: int (ReadOnly): Count of directories processed
* **processedFilesCount**: int (ReadOnly): Count of files processed
* **progressPercent**: int (ReadOnly): Progress percentage for change enumeration run, excluding processing of deletes
* **startedTimestamp**: string (ReadOnly): Timestamp when change enumeration started
* **statusCode**: int (ReadOnly): When non-zero, indicates an issue that is delaying change enumeration
* **totalCountsState**: 'Calculating' | 'Final' | string (ReadOnly): Change enumeration total counts state
* **totalDirectoriesCount**: int (ReadOnly): Total count of directories enumerated
* **totalFilesCount**: int (ReadOnly): Total count of files enumerated
* **totalSizeBytes**: int (ReadOnly): Total enumerated size in bytes

## CloudEndpointChangeEnumerationStatus
### Properties
* **activity**: [CloudEndpointChangeEnumerationActivity](#cloudendpointchangeenumerationactivity) (ReadOnly): Change enumeration activity
* **lastEnumerationStatus**: [CloudEndpointLastChangeEnumerationStatus](#cloudendpointlastchangeenumerationstatus) (ReadOnly): Status of last completed change enumeration
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp

## CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties
### Properties
* **azureFileShareName**: string: Azure file share name
* **backupEnabled**: string (ReadOnly): Backup Enabled
* **changeEnumerationStatus**: [CloudEndpointChangeEnumerationStatus](#cloudendpointchangeenumerationstatus) (ReadOnly): Cloud endpoint change enumeration status
* **friendlyName**: string: Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): CloudEndpoint lastWorkflowId
* **partnershipId**: string (ReadOnly): Partnership Id
* **provisioningState**: string (ReadOnly): CloudEndpoint Provisioning State
* **storageAccountResourceId**: string: Storage Account Resource Id
* **storageAccountTenantId**: string: Storage Account Tenant Id

## CloudEndpointLastChangeEnumerationStatus
### Properties
* **completedTimestamp**: string (ReadOnly): Timestamp when change enumeration completed
* **namespaceDirectoriesCount**: int (ReadOnly): Count of directories in the namespace
* **namespaceFilesCount**: int (ReadOnly): Count of files in the namespace
* **namespaceSizeBytes**: int (ReadOnly): Namespace size in bytes
* **nextRunTimestamp**: string (ReadOnly): Timestamp of when change enumeration is expected to run again
* **startedTimestamp**: string (ReadOnly): Timestamp when change enumeration started

## CloudTieringCachePerformance
### Properties
* **cacheHitBytes**: int (ReadOnly): Count of bytes that were served from the local server
* **cacheHitBytesPercent**: int (ReadOnly): Percentage of total bytes (hit + miss) that were served from the local server
* **cacheMissBytes**: int (ReadOnly): Count of bytes that were served from the cloud
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp

## CloudTieringDatePolicyStatus
### Properties
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **tieredFilesMostRecentAccessTimestamp**: string (ReadOnly): Most recent access time of tiered files

## CloudTieringFilesNotTiering
### Properties
* **errors**: [FilesNotTieringError](#filesnottieringerror)[] (ReadOnly): Array of tiering errors
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **totalFileCount**: int (ReadOnly): Last cloud tiering result (HResult)

## CloudTieringSpaceSavings
### Properties
* **cachedSizeBytes**: int (ReadOnly): Cached content size on the server
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **spaceSavingsBytes**: int (ReadOnly): Count of bytes saved on the server
* **spaceSavingsPercent**: int (ReadOnly): Percentage of cached size over total size
* **totalSizeCloudBytes**: int (ReadOnly): Total size of content in the azure file share
* **volumeSizeBytes**: int (ReadOnly): Volume size

## CloudTieringVolumeFreeSpacePolicyStatus
### Properties
* **currentVolumeFreeSpacePercent**: int (ReadOnly): Current volume free space percentage.
* **effectiveVolumeFreeSpacePolicy**: int (ReadOnly): In the case where multiple server endpoints are present in a volume, an effective free space policy is applied.
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp

## FilesNotTieringError
### Properties
* **errorCode**: int (ReadOnly): Error code (HResult)
* **fileCount**: int (ReadOnly): Count of files with this error

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
* **serverName**: string (ReadOnly): Server name
* **serverOSVersion**: string: Registered Server OS Version
* **serverRole**: string: Registered Server serverRole
* **serviceLocation**: string (ReadOnly): Service Location
* **storageSyncServiceUid**: string (ReadOnly): Registered Server storageSyncServiceUid

## ServerEndpointBackgroundDataDownloadActivity
### Properties
* **downloadedBytes**: int (ReadOnly): Running count of bytes downloaded
* **percentProgress**: int (ReadOnly): Progress percentage
* **startedTimestamp**: string (ReadOnly): Timestamp when the operation started
* **timestamp**: string (ReadOnly): Timestamp when properties were updated

## ServerEndpointCloudTieringStatus
### Properties
* **cachePerformance**: [CloudTieringCachePerformance](#cloudtieringcacheperformance) (ReadOnly): Information regarding how well the local cache on the server is performing.
* **datePolicyStatus**: [CloudTieringDatePolicyStatus](#cloudtieringdatepolicystatus) (ReadOnly): Status of the date policy
* **filesNotTiering**: [CloudTieringFilesNotTiering](#cloudtieringfilesnottiering) (ReadOnly): Information regarding files that failed to be tiered
* **health**: 'Error' | 'Healthy' | 'Unavailable' | string (ReadOnly): Cloud tiering health state.
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
* **initialUploadPolicy**: 'Merge' | 'ServerAuthoritative' | string: Policy for how the initial upload sync session is performed.
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
* **serverName**: string (ReadOnly): Server name
* **serverResourceId**: string: Server Resource Id.
* **syncStatus**: [ServerEndpointSyncStatus](#serverendpointsyncstatus) (ReadOnly): Server Endpoint sync status
* **tierFilesOlderThanDays**: int: Tier files older than days.
* **volumeFreeSpacePercent**: int: Level of free space to be maintained by Cloud Tiering if it is enabled.

## ServerEndpointFilesNotSyncingError
### Properties
* **errorCode**: int (ReadOnly): Error code (HResult)
* **persistentCount**: int (ReadOnly): Count of persistent files not syncing with the specified error code
* **transientCount**: int (ReadOnly): Count of transient files not syncing with the specified error code

## ServerEndpointRecallError
### Properties
* **count**: int (ReadOnly): Count of occurences of the error
* **errorCode**: int (ReadOnly): Error code (HResult)

## ServerEndpointRecallStatus
### Properties
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **recallErrors**: [ServerEndpointRecallError](#serverendpointrecallerror)[] (ReadOnly): Array of recall errors
* **totalRecallErrorsCount**: int (ReadOnly): Total count of recall errors.

## ServerEndpointSyncActivityStatus
### Properties
* **appliedBytes**: int (ReadOnly): Applied bytes
* **appliedItemCount**: int (ReadOnly): Applied item count.
* **perItemErrorCount**: int (ReadOnly): Per item error count
* **sessionMinutesRemaining**: int (ReadOnly): Session minutes remaining (if available)
* **syncMode**: 'InitialFullDownload' | 'InitialUpload' | 'NamespaceDownload' | 'Regular' | 'SnapshotUpload' | string (ReadOnly): Sync mode
* **timestamp**: string (ReadOnly): Timestamp when properties were updated
* **totalBytes**: int (ReadOnly): Total bytes (if available)
* **totalItemCount**: int (ReadOnly): Total item count (if available)

## ServerEndpointSyncSessionStatus
### Properties
* **filesNotSyncingErrors**: [ServerEndpointFilesNotSyncingError](#serverendpointfilesnotsyncingerror)[] (ReadOnly): Array of per-item errors coming from the last sync session.
* **lastSyncMode**: 'InitialFullDownload' | 'InitialUpload' | 'NamespaceDownload' | 'Regular' | 'SnapshotUpload' | string (ReadOnly): Sync mode
* **lastSyncPerItemErrorCount**: int (ReadOnly): Last sync per item error count.
* **lastSyncResult**: int (ReadOnly): Last sync result (HResult)
* **lastSyncSuccessTimestamp**: string (ReadOnly): Last sync success timestamp
* **lastSyncTimestamp**: string (ReadOnly): Last sync timestamp
* **persistentFilesNotSyncingCount**: int (ReadOnly): Count of persistent files not syncing.
* **transientFilesNotSyncingCount**: int (ReadOnly): Count of transient files not syncing.

## ServerEndpointSyncStatus
### Properties
* **backgroundDataDownloadActivity**: [ServerEndpointBackgroundDataDownloadActivity](#serverendpointbackgrounddatadownloadactivity) (ReadOnly): Background data download activity
* **combinedHealth**: 'Error' | 'Healthy' | 'Unavailable' | string (ReadOnly): Combined Health Status.
* **downloadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly): Download sync activity
* **downloadHealth**: 'Error' | 'Healthy' | 'Unavailable' | string (ReadOnly): Download Health Status.
* **downloadStatus**: [ServerEndpointSyncSessionStatus](#serverendpointsyncsessionstatus) (ReadOnly): Download Status
* **lastUpdatedTimestamp**: string (ReadOnly): Last Updated Timestamp
* **offlineDataTransferStatus**: 'Complete' | 'InProgress' | 'NotRunning' | 'Stopping' | string (ReadOnly): Offline Data Transfer State
* **syncActivity**: 'Download' | 'Upload' | 'UploadAndDownload' | string (ReadOnly): Sync activity
* **totalPersistentFilesNotSyncingCount**: int (ReadOnly): Total count of persistent files not syncing (combined upload + download).
* **uploadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly): Upload sync activity
* **uploadHealth**: 'Error' | 'Healthy' | 'Unavailable' | string (ReadOnly): Upload Health Status.
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

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

