# Microsoft.StorageSync @ 2018-07-01

## Resource Microsoft.StorageSync/storageSyncServices@2018-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: Anything
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2018-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties](#registeredservercreateparameterspropertiesorregisteredserverproperties): The parameters used to create the registered server.
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2018-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: The parameters used to create the sync group
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties](#cloudendpointcreateparameterspropertiesorcloudendpointproperties): The parameters used to create the cloud endpoint.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2018-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointCreateParametersPropertiesOrServerEndpointProperties](#serverendpointcreateparameterspropertiesorserverendpointproperties): The parameters used to create the server endpoint.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/workflows@2018-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties) (ReadOnly): Workflow properties.
* **type**: 'Microsoft.StorageSync/storageSyncServices/workflows' (ReadOnly, DeployTimeConstant): The resource type

## Function abort (Microsoft.StorageSync/storageSyncServices/workflows@2018-07-01)
* **Resource**: Microsoft.StorageSync/storageSyncServices/workflows
* **ApiVersion**: 2018-07-01
* **Output**: any

## Function checkNameAvailability (Microsoft.StorageSync/locations@2018-07-01)
* **Resource**: Microsoft.StorageSync/locations
* **ApiVersion**: 2018-07-01
* **Input**: [CheckNameAvailabilityParameters](#checknameavailabilityparameters)
* **Output**: [CheckNameAvailabilityResult](#checknameavailabilityresult)

## Function postbackup (Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-07-01)
* **Resource**: Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints
* **ApiVersion**: 2018-07-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [PostBackupResponse](#postbackupresponse)

## Function postrestore (Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-07-01)
* **Resource**: Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints
* **ApiVersion**: 2018-07-01
* **Input**: [PostRestoreRequest](#postrestorerequest)
* **Output**: any

## Function prebackup (Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-07-01)
* **Resource**: Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints
* **ApiVersion**: 2018-07-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: any

## Function prerestore (Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-07-01)
* **Resource**: Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints
* **ApiVersion**: 2018-07-01
* **Input**: [PreRestoreRequest](#prerestorerequest)
* **Output**: any

## Function recallAction (Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2018-07-01)
* **Resource**: Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints
* **ApiVersion**: 2018-07-01
* **Input**: [RecallActionParameters](#recallactionparameters)
* **Output**: any

## Function restoreheartbeat (Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2018-07-01)
* **Resource**: Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints
* **ApiVersion**: 2018-07-01
* **Output**: any

## Function triggerRollover (Microsoft.StorageSync/storageSyncServices/registeredServers@2018-07-01)
* **Resource**: Microsoft.StorageSync/storageSyncServices/registeredServers
* **ApiVersion**: 2018-07-01
* **Input**: [TriggerRolloverRequest](#triggerrolloverrequest)
* **Output**: any

## BackupRequest
### Properties
* **azureFileShare**: string: Azure File Share.

## CheckNameAvailabilityParameters
### Properties
* **name**: string (Required): The name to check for availability
* **type**: 'Microsoft.StorageSync/storageSyncServices' (Required): The resource type. Must be set to Microsoft.StorageSync/storageSyncServices

## CheckNameAvailabilityResult
### Properties
* **message**: string (ReadOnly): Gets an error message explaining the Reason value in more detail.
* **nameAvailable**: bool (ReadOnly): Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or invalid and cannot be used.
* **reason**: 'AlreadyExists' | 'Invalid' (ReadOnly): Gets the reason that a Storage Sync Service name could not be used. The Reason element is only returned if NameAvailable is false.

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

## PostBackupResponse
### Properties
* **backupMetadata**: [PostBackupResponseProperties](#postbackupresponseproperties): Post Backup Response Properties

## PostBackupResponseProperties
### Properties
* **cloudEndpointName**: string (ReadOnly): cloud endpoint Name.

## PostRestoreRequest
### Properties
* **azureFileShareUri**: string: Post Restore Azure file share uri.
* **failedFileList**: string: Post Restore Azure failed file list.
* **partition**: string: Post Restore partition.
* **replicaGroup**: string: Post Restore replica group.
* **requestId**: string: Post Restore request id.
* **restoreFileSpec**: [RestoreFileSpec](#restorefilespec)[]: Post Restore restore file spec array.
* **sourceAzureFileShareUri**: string: Post Restore Azure source azure file share uri.
* **status**: string: Post Restore Azure status.

## PreRestoreRequest
### Properties
* **azureFileShareUri**: string: Pre Restore Azure file share uri.
* **backupMetadataPropertyBag**: string: Pre Restore backup metadata property bag.
* **partition**: string: Pre Restore partition.
* **pauseWaitForSyncDrainTimePeriodInSeconds**: int: Pre Restore pause wait for sync drain time period in seconds.
* **replicaGroup**: string: Pre Restore replica group.
* **requestId**: string: Pre Restore request id.
* **restoreFileSpec**: [RestoreFileSpec](#restorefilespec)[]: Pre Restore restore file spec array.
* **sourceAzureFileShareUri**: string: Pre Restore Azure source azure file share uri.
* **status**: string: Pre Restore Azure status.

## RecallActionParameters
### Properties
* **pattern**: string: Pattern of the files.
* **recallPath**: string: Recall path.

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
* **serverManagementtErrorCode**: int (ReadOnly): Registered Server Management Error Code
* **serverOSVersion**: string: Registered Server OS Version
* **serverRole**: string: Registered Server serverRole
* **serviceLocation**: string (ReadOnly): Service Location
* **storageSyncServiceUid**: string (ReadOnly): Registered Server storageSyncServiceUid

## RestoreFileSpec
### Properties
* **isdir**: bool (ReadOnly): Restore file spec isdir
* **path**: string: Restore file spec path

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
* **tierFilesOlderThanDays**: int {minValue: 0, maxValue: 2147483647}: Tier files older than days.
* **volumeFreeSpacePercent**: int {minValue: 0, maxValue: 100}: Level of free space to be maintained by Cloud Tiering if it is enabled.

## StorageSyncServiceCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TriggerRolloverRequest
### Properties
* **serverCertificate**: string: Certificate Data

## WorkflowProperties
### Properties
* **lastOperationId**: string: workflow last operation identifier.
* **lastStepName**: string: last step name
* **operation**: 'cancel' | 'do' | 'undo' | string: operation direction.
* **status**: 'aborted' | 'active' | 'expired' | 'failed' | 'succeeded' | string: workflow status.
* **steps**: string: workflow steps

