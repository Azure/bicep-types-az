# Microsoft.StorageSync @ 2017-06-05-preview

## Resource Microsoft.StorageSync/storageSyncServices@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageSyncServiceProperties](#storagesyncserviceproperties): Storage Sync Service properties.
* **tags**: any: The tags of the resource.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerProperties](#registeredserverproperties): RegisteredServer properties.
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SyncGroupProperties](#syncgroupproperties): SyncGroup properties.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointProperties](#cloudendpointproperties): Cloud Endpoint properties.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2017-06-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointProperties](#serverendpointproperties): Server Endpoint properties.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## CloudEndpointProperties
### Properties
* **backupEnabled**: bool (ReadOnly): Backup Enabled
* **friendlyName**: string: Friendly Name
* **lastWorkflowId**: string: CloudEndpoint lastWorkflowId
* **partnershipId**: string: Partnership Id
* **provisioningState**: string: CloudEndpoint Provisioning State
* **storageAccount**: string: Storage Account name.
* **storageAccountKey**: string: Storage Account access key.
* **storageAccountResourceId**: string: Storage Account Resource Id
* **storageAccountShareName**: string: Storage Account Share name
* **storageAccountTenantId**: string: Storage Account Tenant Id

## RegisteredServerProperties
### Properties
* **agentVersion**: string: Registered Server Agent Version
* **clusterId**: string: Registered Server clusterId
* **clusterName**: string: Registered Server clusterName
* **lastHeartBeat**: string: Registered Server last heart beat
* **lastWorkflowId**: string: Registered Server lastWorkflowId
* **provisioningState**: string: Registered Server Provisioning State
* **serverCertificate**: string: Registered Server Certificate
* **serverId**: string: Registered Server serverId
* **serverManagementtErrorCode**: int: Registered Server Management Error Code
* **serverOSVersion**: string: Registered Server OS Version
* **serverRole**: string: Registered Server serverRole
* **storageSyncServiceUid**: string: Registered Server storageSyncServiceUid

## ServerEndpointProperties
### Properties
* **byteProgress**: int: Bytes in progress
* **byteTotal**: int: Bytes total
* **cloudTiering**: 'off' | 'on' | string: Cloud Tiering.
* **currentProgressType**: 'download' | 'initialize' | 'none' | 'recall' | 'upload' | string: current progress type.
* **friendlyName**: string: Friendly Name
* **itemDownloadErrorCount**: int: Item download error count.
* **itemProgressCount**: int: Item Progress Count
* **itemTotalCount**: int: Item Total Count
* **itemUploadErrorCount**: int: Item Upload Error Count.
* **lastSyncSuccess**: string: Last Sync Success
* **lastWorkflowId**: string: ServerEndpoint lastWorkflowId
* **provisioningState**: string: ServerEndpoint Provisioning State
* **serverLocalPath**: string: Server Local path.
* **serverResourceId**: string: Server Resource Id.
* **syncErrorContext**: string: sync error context.
* **syncErrorDirection**: 'download' | 'initialize' | 'none' | 'recall' | 'upload' | string: Sync Error Direction.
* **syncErrorState**: string: Sync Error State
* **syncErrorStateTimestamp**: string: Sync Error State Timestamp
* **totalProgress**: int: Total progress
* **volumeFreeSpacePercent**: int: Level of free space to be maintained by Cloud Tiering if it is enabled.

## StorageSyncServiceProperties
### Properties
* **storageSyncServiceStatus**: int (ReadOnly): Storage Sync service status.
* **storageSyncServiceUid**: string (ReadOnly): Storage Sync service Uid

## SyncGroupProperties
### Properties
* **syncGroupStatus**: string (ReadOnly): Sync group status
* **uniqueId**: string: Unique Id

