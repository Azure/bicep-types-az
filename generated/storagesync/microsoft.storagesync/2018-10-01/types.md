# Microsoft.StorageSync @ 2018-10-01

## Resource Microsoft.StorageSync/storageSyncServices@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: Anything
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties](#registeredservercreateparameterspropertiesorregisteredserverproperties): The parameters used to create the registered server.
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: The parameters used to create the sync group
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties](#cloudendpointcreateparameterspropertiesorcloudendpointproperties): The parameters used to create the cloud endpoint.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointCreateParametersPropertiesOrServerEndpointProperties](#serverendpointcreateparameterspropertiesorserverendpointproperties): The parameters used to create the server endpoint.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties
### Properties
* **backupEnabled**: string (ReadOnly): Backup Enabled
* **friendlyName**: string (ReadOnly): Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): CloudEndpoint lastWorkflowId
* **partnershipId**: string (ReadOnly): Partnership Id
* **provisioningState**: string (ReadOnly): CloudEndpoint Provisioning State
* **storageAccountResourceId**: string: Storage Account Resource Id
* **storageAccountShareName**: string: Storage Account Share name
* **storageAccountTenantId**: string: Storage Account Tenant Id

## RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties
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

## ServerEndpointCreateParametersPropertiesOrServerEndpointProperties
### Properties
* **cloudTiering**: 'off' | 'on' | string: Cloud Tiering.
* **friendlyName**: string: Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): ServerEndpoint lastWorkflowId
* **offlineDataTransfer**: 'off' | 'on' | string: Offline data transfer
* **offlineDataTransferShareName**: string: Offline data transfer share name
* **offlineDataTransferStorageAccountResourceId**: string (ReadOnly): Offline data transfer storage account resource ID
* **offlineDataTransferStorageAccountTenantId**: string (ReadOnly): Offline data transfer storage account tenant ID
* **provisioningState**: string (ReadOnly): ServerEndpoint Provisioning State
* **serverLocalPath**: string: Server Local path.
* **serverResourceId**: string: Server Resource Id.
* **syncStatus**: [ServerEndpointHealth](#serverendpointhealth) (ReadOnly): Server Endpoint properties.
* **tierFilesOlderThanDays**: int: Tier files older than days.
* **volumeFreeSpacePercent**: int: Level of free space to be maintained by Cloud Tiering if it is enabled.

## ServerEndpointHealth
### Properties
* **combinedHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' | string: Combined Health Status.
* **currentProgress**: [SyncProgressStatus](#syncprogressstatus): Current progress
* **downloadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' | string: Download Health Status.
* **downloadStatus**: [SyncSessionStatus](#syncsessionstatus): Download Status
* **lastUpdatedTimestamp**: string: Last Updated Timestamp
* **offlineDataTransferStatus**: 'Complete' | 'InProgress' | 'NotRunning' | 'Stopping' | string: Offline Data Transfer State
* **uploadHealth**: 'Error' | 'Healthy' | 'NoActivity' | 'SyncBlockedForChangeDetectionPostRestore' | 'SyncBlockedForRestore' | string: Upload Health Status.
* **uploadStatus**: [SyncSessionStatus](#syncsessionstatus): Upload Status

## StorageSyncServiceCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SyncProgressStatus
### Properties
* **appliedBytes**: int: Applied bytes
* **appliedItemCount**: int: Applied item count.
* **perItemErrorCount**: int: Per item error count
* **progressTimestamp**: string: Progress timestamp
* **syncDirection**: 'download' | 'initialize' | 'none' | 'recall' | 'upload' | string: Sync direction.
* **totalBytes**: int: Total bytes
* **totalItemCount**: int: Total item count

## SyncSessionStatus
### Properties
* **lastSyncPerItemErrorCount**: int: Last sync per item error count.
* **lastSyncResult**: int: Last sync status
* **lastSyncSuccessTimestamp**: string: Last sync success timestamp
* **lastSyncTimestamp**: string: Last sync timestamp

