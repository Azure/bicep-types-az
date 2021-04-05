# Microsoft.StorageSync @ 2018-04-02

## Resource Microsoft.StorageSync/storageSyncServices@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageSyncServiceProperties](#storagesyncserviceproperties) (ReadOnly): Storage Sync Service Properties object.
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags): Resource tags.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerCreateParametersProperties](#registeredservercreateparametersproperties): RegisteredServer Properties object.
* **tags**: [RegisteredServerCreateParametersTags](#registeredservercreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: SyncGroup Properties object.
* **tags**: [SyncGroupCreateParametersTags](#syncgroupcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointCreateParametersProperties](#cloudendpointcreateparametersproperties): CloudEndpoint Properties object.
* **tags**: [CloudEndpointCreateParametersTags](#cloudendpointcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointCreateParametersProperties](#serverendpointcreateparametersproperties): ServerEndpoint Properties object.
* **tags**: [ServerEndpointCreateParametersTags](#serverendpointcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## StorageSyncServiceProperties
### Properties
* **storageSyncServiceStatus**: int (ReadOnly): Storage Sync service status.
* **storageSyncServiceUid**: string (ReadOnly): Storage Sync service Uid

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
* **provisioningState**: string (ReadOnly): Registered Server Provisioning State
* **resourceLocation**: string (ReadOnly): Resource Location
* **serverCertificate**: string: Registered Server Certificate
* **serverId**: string: Registered Server serverId
* **serverManagementtErrorCode**: int (ReadOnly): Registered Server Management Error Code
* **serverOSVersion**: string: Registered Server OS Version
* **serverRole**: string: Registered Server serverRole
* **serviceLocation**: string (ReadOnly): Service Location
* **storageSyncServiceUid**: string (ReadOnly): Registered Server storageSyncServiceUid

## RegisteredServerCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SyncGroupCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CloudEndpointCreateParametersProperties
### Properties
* **backupEnabled**: bool (ReadOnly): Backup Enabled
* **friendlyName**: string (ReadOnly): Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): CloudEndpoint lastWorkflowId
* **partnershipId**: string (ReadOnly): Partnership Id
* **provisioningState**: string (ReadOnly): CloudEndpoint Provisioning State
* **storageAccountResourceId**: string: Storage Account Resource Id
* **storageAccountShareName**: string: Storage Account Share name
* **storageAccountTenantId**: string: Storage Account Tenant Id

## CloudEndpointCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerEndpointCreateParametersProperties
### Properties
* **cloudTiering**: 'off' | 'on': Type of the Feature Status
* **friendlyName**: string: Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): ServerEndpoint lastWorkflowId
* **provisioningState**: string (ReadOnly): ServerEndpoint Provisioning State
* **serverLocalPath**: string: Server folder used for data synchronization
* **serverResourceId**: string: Arm resource identifier.
* **syncStatus**: any (ReadOnly): Any object
* **volumeFreeSpacePercent**: int: Level of free space to be maintained by Cloud Tiering if it is enabled.

## ServerEndpointCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

