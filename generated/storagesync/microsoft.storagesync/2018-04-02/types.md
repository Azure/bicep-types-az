# Microsoft.StorageSync @ 2018-04-02

## Resource Microsoft.StorageSync/storageSyncServices@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageSyncServiceProperties](#storagesyncserviceproperties) (ReadOnly): Storage Sync Service properties.
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties](#registeredservercreateparameterspropertiesorregisteredserverproperties): The parameters used to create the storage sync service.
* **tags**: [RegisteredServerCreateParametersTags](#registeredservercreateparameterstags) (WriteOnly): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: The parameters used to create the sync group
* **tags**: [SyncGroupCreateParametersTags](#syncgroupcreateparameterstags) (WriteOnly): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties](#cloudendpointcreateparameterspropertiesorcloudendpointproperties): The parameters used to create the storage sync service.
* **tags**: [CloudEndpointCreateParametersTags](#cloudendpointcreateparameterstags) (WriteOnly): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointCreateParametersPropertiesOrServerEndpointProperties](#serverendpointcreateparameterspropertiesorserverendpointproperties): The parameters used to create the storage sync service.
* **tags**: [ServerEndpointCreateParametersTags](#serverendpointcreateparameterstags) (WriteOnly): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties
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

## ServerEndpointCreateParametersPropertiesOrServerEndpointProperties
### Properties
* **cloudTiering**: 'off' | 'on' | string: Cloud Tiering.
* **friendlyName**: string: Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): ServerEndpoint lastWorkflowId
* **provisioningState**: string (ReadOnly): ServerEndpoint Provisioning State
* **serverLocalPath**: string: Server Local path.
* **serverResourceId**: string: Server Resource Id.
* **syncStatus**: any (ReadOnly): Sync Health Status
* **volumeFreeSpacePercent**: int: Level of free space to be maintained by Cloud Tiering if it is enabled.

## ServerEndpointCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageSyncServiceCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageSyncServiceProperties
### Properties
* **storageSyncServiceStatus**: int (ReadOnly): Storage Sync service status.
* **storageSyncServiceUid**: string (ReadOnly): Storage Sync service Uid

## SyncGroupCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

