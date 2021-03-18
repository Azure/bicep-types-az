# Microsoft.StorageSync @ 2018-07-01

## Resource Microsoft.StorageSync/storageSyncServices@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags)
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegisteredServerCreateParametersProperties](#registeredservercreateparametersproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CloudEndpointCreateParametersProperties](#cloudendpointcreateparametersproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerEndpointCreateParametersProperties](#serverendpointcreateparametersproperties)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant)

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
* **monitoringConfiguration**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **resourceLocation**: string (ReadOnly)
* **serverCertificate**: string
* **serverId**: string
* **serverManagementtErrorCode**: int (ReadOnly)
* **serverOSVersion**: string
* **serverRole**: string
* **serviceLocation**: string (ReadOnly)
* **storageSyncServiceUid**: string (ReadOnly)

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
* **tierFilesOlderThanDays**: int
* **volumeFreeSpacePercent**: int

