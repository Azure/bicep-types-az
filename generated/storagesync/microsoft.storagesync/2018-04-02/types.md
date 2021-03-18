# Microsoft.StorageSync @ 2018-04-02

## Resource Microsoft.StorageSync/storageSyncServices@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageSyncServiceProperties](#storagesyncserviceproperties) (ReadOnly)
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags)
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegisteredServerCreateParametersProperties](#registeredservercreateparametersproperties)
* **tags**: [RegisteredServerCreateParametersTags](#registeredservercreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **tags**: [SyncGroupCreateParametersTags](#syncgroupcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CloudEndpointCreateParametersProperties](#cloudendpointcreateparametersproperties)
* **tags**: [CloudEndpointCreateParametersTags](#cloudendpointcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2018-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerEndpointCreateParametersProperties](#serverendpointcreateparametersproperties)
* **tags**: [ServerEndpointCreateParametersTags](#serverendpointcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant)

## StorageSyncServiceProperties
### Properties
* **storageSyncServiceStatus**: int (ReadOnly)
* **storageSyncServiceUid**: string (ReadOnly)

## StorageSyncServiceCreateParametersTags
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
* **provisioningState**: string (ReadOnly)
* **resourceLocation**: string (ReadOnly)
* **serverCertificate**: string
* **serverId**: string
* **serverManagementtErrorCode**: int (ReadOnly)
* **serverOSVersion**: string
* **serverRole**: string
* **serviceLocation**: string (ReadOnly)
* **storageSyncServiceUid**: string (ReadOnly)

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
* **backupEnabled**: bool (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **lastOperationName**: string (ReadOnly)
* **lastWorkflowId**: string (ReadOnly)
* **partnershipId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **storageAccountResourceId**: string
* **storageAccountShareName**: string
* **storageAccountTenantId**: string

## CloudEndpointCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerEndpointCreateParametersProperties
### Properties
* **cloudTiering**: 'off' | 'on'
* **friendlyName**: string
* **lastOperationName**: string (ReadOnly)
* **lastWorkflowId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serverLocalPath**: string
* **serverResourceId**: string
* **syncStatus**: any (ReadOnly)
* **volumeFreeSpacePercent**: int

## ServerEndpointCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

