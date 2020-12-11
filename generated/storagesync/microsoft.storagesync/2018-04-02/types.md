# Microsoft.StorageSync @ 2018-04-02

## Microsoft.StorageSync/storageSyncServices
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageSyncServiceProperties (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant)

## StorageSyncServiceProperties
### Properties
* **storageSyncServiceStatus**: int (ReadOnly)
* **storageSyncServiceUid**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.StorageSync/storageSyncServices/registeredServers
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegisteredServerCreateParametersProperties
* **tags**: Dictionary<string,String> (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.StorageSync/storageSyncServices/syncGroups
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **tags**: Dictionary<string,String> (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CloudEndpointCreateParametersProperties
* **tags**: Dictionary<string,String> (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints
### Properties
* **apiVersion**: '2018-04-02' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerEndpointCreateParametersProperties
* **tags**: Dictionary<string,String> (WriteOnly)
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

