# Microsoft.RecoveryServices @ 2023-01-15

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints@2023-01-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-01-15' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryPoint](#recoverypoint) (ReadOnly): RecoveryPointResource properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupstorageconfig@2023-01-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: 'vaultstorageconfig' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupResourceConfig](#backupresourceconfig): BackupResourceConfigResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupstorageconfig' (ReadOnly, DeployTimeConstant): The resource type

## Function accessToken (Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints@2023-01-15)
* **Resource**: Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints
* **ApiVersion**: 2023-01-15
* **Input**: [AADPropertiesResource](#aadpropertiesresource)
* **Output**: [CrrAccessTokenResource](#crraccesstokenresource)

## Function backupCrrJob (Microsoft.RecoveryServices/locations@2023-01-15)
* **Resource**: Microsoft.RecoveryServices/locations
* **ApiVersion**: 2023-01-15
* **Input**: [CrrJobRequest](#crrjobrequest)
* **Output**: [JobResource](#jobresource)

## Function backupCrrJobs (Microsoft.RecoveryServices/locations@2023-01-15)
* **Resource**: Microsoft.RecoveryServices/locations
* **ApiVersion**: 2023-01-15
* **Input**: [CrrJobRequest](#crrjobrequest)
* **Output**: [JobResourceList](#jobresourcelist)

## AADProperties
### Properties
* **audience**: string
* **authority**: string
* **servicePrincipalClientId**: string
* **servicePrincipalObjectId**: string
* **tenantId**: string

## AADPropertiesResource
### Properties
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly): Resource Id represents the complete path to the resource.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name associated with the resource.
* **properties**: [AADProperties](#aadproperties): AADPropertiesResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

## AzureIaaSVMErrorInfo
### Properties
* **errorCode**: int (ReadOnly): Error code.
* **errorString**: string (ReadOnly): Localized error string.
* **errorTitle**: string (ReadOnly): Title: Typically, the entity that the error pertains to.
* **recommendations**: string[] (ReadOnly): List of localized recommendations for above error code.

## AzureIaaSVMJobExtendedInfo
### Properties
* **dynamicErrorMessage**: string: Non localized error message on job execution.
* **estimatedRemainingDuration**: string: Time remaining for execution of this job.
* **internalPropertyBag**: [AzureIaaSVMJobExtendedInfoInternalPropertyBag](#azureiaasvmjobextendedinfointernalpropertybag): Job internal properties.
* **progressPercentage**: int: Indicates progress of the job. Null if it has not started or completed.
* **propertyBag**: [AzureIaaSVMJobExtendedInfoPropertyBag](#azureiaasvmjobextendedinfopropertybag): Job properties.
* **tasksList**: [AzureIaaSVMJobTaskDetails](#azureiaasvmjobtaskdetails)[]: List of tasks associated with this job.

## AzureIaaSVMJobExtendedInfoInternalPropertyBag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureIaaSVMJobExtendedInfoPropertyBag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureIaaSVMJobTaskDetails
### Properties
* **duration**: string: Time elapsed for task.
* **endTime**: string: The end time.
* **instanceId**: string: The instanceId.
* **progressPercentage**: int: Progress of the task.
* **startTime**: string: The start time.
* **status**: string: The status.
* **taskExecutionDetails**: string: Details about execution of the task.
eg: number of bytes transferred etc
* **taskId**: string: The task display name.

## AzureStorageErrorInfo
### Properties
* **errorCode**: int: Error code.
* **errorString**: string: Localized error string.
* **recommendations**: string[]: List of localized recommendations for above error code.

## AzureStorageJobExtendedInfo
### Properties
* **dynamicErrorMessage**: string: Non localized error message on job execution.
* **propertyBag**: [AzureStorageJobExtendedInfoPropertyBag](#azurestoragejobextendedinfopropertybag): Job properties.
* **tasksList**: [AzureStorageJobTaskDetails](#azurestoragejobtaskdetails)[]: List of tasks for this job

## AzureStorageJobExtendedInfoPropertyBag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureStorageJobTaskDetails
### Properties
* **status**: string: The status.
* **taskId**: string: The task display name.

## AzureWorkloadErrorInfo
### Properties
* **additionalDetails**: string: Additional details for above error code.
* **errorCode**: int: Error code.
* **errorString**: string: Localized error string.
* **errorTitle**: string: Title: Typically, the entity that the error pertains to.
* **recommendations**: string[]: List of localized recommendations for above error code.

## AzureWorkloadJobExtendedInfo
### Properties
* **dynamicErrorMessage**: string: Non localized error message on job execution.
* **propertyBag**: [AzureWorkloadJobExtendedInfoPropertyBag](#azureworkloadjobextendedinfopropertybag): Job properties.
* **tasksList**: [AzureWorkloadJobTaskDetails](#azureworkloadjobtaskdetails)[]: List of tasks for this job

## AzureWorkloadJobExtendedInfoPropertyBag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureWorkloadJobTaskDetails
### Properties
* **status**: string: The status.
* **taskId**: string: The task display name.

## AzureWorkloadRecoveryPointMoveReadinessInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [RecoveryPointMoveReadinessInfo](#recoverypointmovereadinessinfo)

## AzureWorkloadRecoveryPointMoveReadinessInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [RecoveryPointMoveReadinessInfo](#recoverypointmovereadinessinfo)

## AzureWorkloadRecoveryPointMoveReadinessInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [RecoveryPointMoveReadinessInfo](#recoverypointmovereadinessinfo)

## AzureWorkloadSQLRecoveryPointExtendedInfo
### Properties
* **dataDirectoryPaths**: [SQLDataDirectory](#sqldatadirectory)[] (ReadOnly): List of data directory paths during restore operation.
* **dataDirectoryTimeInUTC**: string (ReadOnly): UTC time at which data directory info was captured

## BackupResourceConfig
### Properties
* **crossRegionRestoreFlag**: bool: Opt in details of Cross Region Restore feature.
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant' | string: Storage type
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant' | string: Storage type.
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked' | string: Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.

## BEKDetails
### Properties
* **secretData**: string: BEK data.
* **secretUrl**: string: Secret is BEK.
* **secretVaultId**: string: ID of the Key Vault where this Secret is stored.

## CrrAccessToken
* **Discriminator**: objectType

### Base Properties
* **accessTokenString**: string: Access token used for authentication
* **backupManagementType**: string: Backup Management Type
* **bMSActiveRegion**: string: Active region name of BMS Stamp
* **containerName**: string: Container Unique name
* **containerType**: string: Container Type
* **coordinatorServiceStampId**: string: CoordinatorServiceStampId to be used by BCM in restore call
* **coordinatorServiceStampUri**: string: CoordinatorServiceStampUri to be used by BCM in restore call
* **datasourceContainerName**: string: Datasource Container Unique Name
* **datasourceId**: string: Datasource Id
* **datasourceName**: string: Datasource Friendly Name
* **datasourceType**: string: Datasource Type
* **protectionContainerId**: int: Protected item container id
* **protectionServiceStampId**: string: ProtectionServiceStampId to be used by BCM in restore call
* **protectionServiceStampUri**: string: ProtectionServiceStampUri to be used by BCM in restore call
* **recoveryPointId**: string: Recovery Point Id
* **recoveryPointTime**: string: Recovery Point Time
* **resourceGroupName**: string: Resource Group name of the source vault
* **resourceId**: string: Resource Id of the source vault
* **resourceName**: string: Resource Name of the source vault
* **rpIsManagedVirtualMachine**: bool: Recovery point information: Managed virtual machine
* **rpOriginalSAOption**: bool: Recovery point information: Original SA option
* **rpTierInformation**: [CrrAccessTokenRpTierInformation](#crraccesstokenrptierinformation): Recovery point Tier Information
* **rpVMSizeDescription**: string: Recovery point information: VM size description
* **subscriptionId**: string: Subscription Id of the source vault
* **tokenExtendedInformation**: string: Extended Information about the token like FileSpec etc.

### WorkloadCrrAccessToken
#### Properties
* **containerId**: string: Container Id
* **objectType**: 'WorkloadCrrAccessToken' (Required): Type of the specific object - used for deserializing
* **policyId**: string: Policy Id
* **policyName**: string: Policy Name
* **protectableObjectContainerHostOsName**: string
* **protectableObjectFriendlyName**: string
* **protectableObjectParentLogicalContainerName**: string
* **protectableObjectProtectionState**: string
* **protectableObjectUniqueName**: string
* **protectableObjectWorkloadType**: string


## CrrAccessTokenResource
### Properties
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly): Resource Id represents the complete path to the resource.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name associated with the resource.
* **properties**: [CrrAccessToken](#crraccesstoken): CrrAccessTokenResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

## CrrAccessTokenRpTierInformation
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CrrJobRequest
### Properties
* **jobName**: string: Job Name of the job to be fetched
* **resourceId**: string: Entire ARM resource id of the resource

## DiskInformation
### Properties
* **lun**: int
* **name**: string

## DpmErrorInfo
### Properties
* **errorString**: string: Localized error string.
* **recommendations**: string[]: List of localized recommendations for above error code.

## DpmJobExtendedInfo
### Properties
* **dynamicErrorMessage**: string: Non localized error message on job execution.
* **propertyBag**: [DpmJobExtendedInfoPropertyBag](#dpmjobextendedinfopropertybag): The job properties.
* **tasksList**: [DpmJobTaskDetails](#dpmjobtaskdetails)[]: List of tasks associated with this job.

## DpmJobExtendedInfoPropertyBag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DpmJobTaskDetails
### Properties
* **duration**: string: Time elapsed for task.
* **endTime**: string: The end time.
* **startTime**: string: The start time.
* **status**: string: The status.
* **taskId**: string: The task display name.

## IaasVMRecoveryPointMoveReadinessInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [RecoveryPointMoveReadinessInfo](#recoverypointmovereadinessinfo)

## Job
* **Discriminator**: jobType

### Base Properties
* **activityId**: string: ActivityId of job.
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB' | string: Backup management type to execute the current job.
* **endTime**: string: The end time.
* **entityFriendlyName**: string: Friendly name of the entity on which the current job is executing.
* **operation**: string: The operation name.
* **startTime**: string: The start time.
* **status**: string: Job status.

### AzureIaaSVMJob
#### Properties
* **actionsInfo**: ('Cancellable' | 'Invalid' | 'Retriable')[]: Gets or sets the state/actions applicable on this job like cancel/retry.
* **duration**: string: Time elapsed during the execution of this job.
* **errorDetails**: [AzureIaaSVMErrorInfo](#azureiaasvmerrorinfo)[]: Error details on execution of this job.
* **extendedInfo**: [AzureIaaSVMJobExtendedInfo](#azureiaasvmjobextendedinfo): Additional information for this job.
* **jobType**: 'AzureIaaSVMJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **virtualMachineVersion**: string: Specifies whether the backup item is a Classic or an Azure Resource Manager VM.

### AzureStorageJob
#### Properties
* **actionsInfo**: ('Cancellable' | 'Invalid' | 'Retriable')[]: Gets or sets the state/actions applicable on this job like cancel/retry.
* **duration**: string: Time elapsed during the execution of this job.
* **errorDetails**: [AzureStorageErrorInfo](#azurestorageerrorinfo)[]: Error details on execution of this job.
* **extendedInfo**: [AzureStorageJobExtendedInfo](#azurestoragejobextendedinfo): Additional information about the job.
* **jobType**: 'AzureStorageJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **storageAccountName**: string: Specifies friendly name of the storage account.
* **storageAccountVersion**: string: Specifies whether the Storage account is a Classic or an Azure Resource Manager Storage account.

### AzureWorkloadJob
#### Properties
* **actionsInfo**: ('Cancellable' | 'Invalid' | 'Retriable')[]: Gets or sets the state/actions applicable on this job like cancel/retry.
* **duration**: string: Time elapsed during the execution of this job.
* **errorDetails**: [AzureWorkloadErrorInfo](#azureworkloaderrorinfo)[]: Error details on execution of this job.
* **extendedInfo**: [AzureWorkloadJobExtendedInfo](#azureworkloadjobextendedinfo): Additional information about the job.
* **jobType**: 'AzureWorkloadJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **workloadType**: string: Workload type of the job

### DpmJob
#### Properties
* **actionsInfo**: ('Cancellable' | 'Invalid' | 'Retriable')[]: The state/actions applicable on this job like cancel/retry.
* **containerName**: string: Name of cluster/server protecting current backup item, if any.
* **containerType**: string: Type of container.
* **dpmServerName**: string: DPM server name managing the backup item or backup job.
* **duration**: string: Time elapsed for job.
* **errorDetails**: [DpmErrorInfo](#dpmerrorinfo)[]: The errors.
* **extendedInfo**: [DpmJobExtendedInfo](#dpmjobextendedinfo): Additional information for this job.
* **jobType**: 'DpmJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **workloadType**: string: Type of backup item.

### MabJob
#### Properties
* **actionsInfo**: ('Cancellable' | 'Invalid' | 'Retriable')[]: The state/actions applicable on jobs like cancel/retry.
* **duration**: string: Time taken by job to run.
* **errorDetails**: [MabErrorInfo](#maberrorinfo)[]: The errors.
* **extendedInfo**: [MabJobExtendedInfo](#mabjobextendedinfo): Additional information on the job.
* **jobType**: 'MabJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **mabServerName**: string: Name of server protecting the DS.
* **mabServerType**: 'AzureBackupServerContainer' | 'AzureSqlContainer' | 'Cluster' | 'DPMContainer' | 'GenericContainer' | 'IaasVMContainer' | 'IaasVMServiceContainer' | 'Invalid' | 'MABContainer' | 'SQLAGWorkLoadContainer' | 'StorageContainer' | 'Unknown' | 'VCenter' | 'VMAppContainer' | 'Windows' | string: Server type of MAB container.
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Workload type of backup item.


## JobResource
### Properties
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly): Resource Id represents the complete path to the resource.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name associated with the resource.
* **properties**: [Job](#job): JobResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

## JobResourceList
### Properties
* **nextLink**: string: The uri to fetch the next page of resources. Call ListNext() fetches next page of resources.
* **value**: [JobResource](#jobresource)[]: List of resources.

## KEKDetails
### Properties
* **keyBackupData**: string: KEK data.
* **keyUrl**: string: Key is KEK.
* **keyVaultId**: string: Key Vault ID where this Key is stored.

## KeyAndSecretDetails
### Properties
* **bekDetails**: [BEKDetails](#bekdetails): BEK is bitlocker encryption key.
* **encryptionMechanism**: string: Encryption mechanism: None/ SinglePass/ DoublePass
* **kekDetails**: [KEKDetails](#kekdetails): KEK is encryption key for BEK.

## MabErrorInfo
### Properties
* **errorString**: string (ReadOnly): Localized error string.
* **recommendations**: string[] (ReadOnly): List of localized recommendations.

## MabJobExtendedInfo
### Properties
* **dynamicErrorMessage**: string: Non localized error message specific to this job.
* **propertyBag**: [MabJobExtendedInfoPropertyBag](#mabjobextendedinfopropertybag): The job properties.
* **tasksList**: [MabJobTaskDetails](#mabjobtaskdetails)[]: List of tasks for this job.

## MabJobExtendedInfoPropertyBag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MabJobTaskDetails
### Properties
* **duration**: string: Time elapsed for task.
* **endTime**: string: The end time.
* **startTime**: string: The start time.
* **status**: string: The status.
* **taskId**: string: The task display name.

## PointInTimeRange
### Properties
* **endTime**: string: End time of the time range for log recovery.
* **startTime**: string: Start time of the time range for log recovery.

## RecoveryPoint
* **Discriminator**: objectType

### Base Properties

### AzureFileShareRecoveryPoint
#### Properties
* **fileShareSnapshotUri**: string (ReadOnly): Contains Url to the snapshot of fileshare, if applicable
* **objectType**: 'AzureFileShareRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointSizeInGB**: int (ReadOnly): Contains recovery point size
* **recoveryPointTime**: string (ReadOnly): Time at which this backup copy was created.
* **recoveryPointType**: string (ReadOnly): Type of the backup copy. Specifies whether it is a crash consistent backup or app consistent.

### AzureWorkloadSAPHanaPointInTimeRecoveryPoint
#### Properties
* **objectType**: 'AzureWorkloadSAPHanaPointInTimeRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointMoveReadinessInfo**: [AzureWorkloadRecoveryPointMoveReadinessInfo](#azureworkloadrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTierDetails**: [RecoveryPointTierInformation](#recoverypointtierinformation)[]: Recovery point tier information.
* **recoveryPointTimeInUTC**: string (ReadOnly): UTC time at which recovery point was created
* **timeRanges**: [PointInTimeRange](#pointintimerange)[]: List of log ranges
* **type**: 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string (ReadOnly): Type of restore point

### AzureWorkloadSAPHanaRecoveryPoint
#### Properties
* **objectType**: 'AzureWorkloadSAPHanaRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointMoveReadinessInfo**: [AzureWorkloadRecoveryPointMoveReadinessInfo](#azureworkloadrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTierDetails**: [RecoveryPointTierInformation](#recoverypointtierinformation)[]: Recovery point tier information.
* **recoveryPointTimeInUTC**: string (ReadOnly): UTC time at which recovery point was created
* **type**: 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string (ReadOnly): Type of restore point

### AzureWorkloadSQLPointInTimeRecoveryPoint
#### Properties
* **extendedInfo**: [AzureWorkloadSQLRecoveryPointExtendedInfo](#azureworkloadsqlrecoverypointextendedinfo): Extended Info that provides data directory details. Will be populated in two cases:
When a specific recovery point is accessed using GetRecoveryPoint
Or when ListRecoveryPoints is called for Log RP only with ExtendedInfo query filter
* **objectType**: 'AzureWorkloadSQLPointInTimeRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointMoveReadinessInfo**: [AzureWorkloadRecoveryPointMoveReadinessInfo](#azureworkloadrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTierDetails**: [RecoveryPointTierInformation](#recoverypointtierinformation)[]: Recovery point tier information.
* **recoveryPointTimeInUTC**: string (ReadOnly): UTC time at which recovery point was created
* **timeRanges**: [PointInTimeRange](#pointintimerange)[]: List of log ranges
* **type**: 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string (ReadOnly): Type of restore point

### GenericRecoveryPoint
#### Properties
* **friendlyName**: string: Friendly name of the backup copy.
* **objectType**: 'GenericRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointAdditionalInfo**: string: Additional information associated with this backup copy.
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTime**: string: Time at which this backup copy was created.
* **recoveryPointType**: string: Type of the backup copy.

### IaasVMRecoveryPoint
#### Properties
* **isInstantIlrSessionActive**: bool: Is the session to recover items from this backup copy still active.
* **isManagedVirtualMachine**: bool: Whether VM is with Managed Disks
* **isSourceVMEncrypted**: bool (ReadOnly): Identifies whether the VM was encrypted when the backup copy is created.
* **keyAndSecret**: [KeyAndSecretDetails](#keyandsecretdetails): Required details for recovering an encrypted VM. Applicable only when IsSourceVMEncrypted is true.
* **objectType**: 'IaasVMRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **originalStorageAccountOption**: bool: Original Storage Account Option
* **osType**: string: OS type
* **recoveryPointAdditionalInfo**: string (ReadOnly): Additional information associated with this backup copy.
* **recoveryPointDiskConfiguration**: [RecoveryPointDiskConfiguration](#recoverypointdiskconfiguration): Disk configuration
* **recoveryPointMoveReadinessInfo**: [IaasVMRecoveryPointMoveReadinessInfo](#iaasvmrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTierDetails**: [RecoveryPointTierInformation](#recoverypointtierinformation)[]: Recovery point tier information.
* **recoveryPointTime**: string (ReadOnly): Time at which this backup copy was created.
* **recoveryPointType**: string (ReadOnly): Type of the backup copy.
* **sourceVMStorageType**: string (ReadOnly): Storage type of the VM whose backup copy is created.
* **virtualMachineSize**: string: Virtual Machine Size
* **zones**: string[]: Identifies the zone of the VM at the time of backup. Applicable only for zone-pinned Vms


## RecoveryPointDiskConfiguration
### Properties
* **excludedDiskList**: [DiskInformation](#diskinformation)[]: Information of disks excluded from backup
* **includedDiskList**: [DiskInformation](#diskinformation)[]: Information of disks included in backup
* **numberOfDisksAttachedToVm**: int: Number of disks attached to the VM
* **numberOfDisksIncludedInBackup**: int: Number of disks included in backup

## RecoveryPointMoveReadinessInfo
### Properties
* **additionalInfo**: string
* **isReadyForMove**: bool

## RecoveryPointProperties
### Properties
* **expiryTime**: string: Expiry time of Recovery Point in UTC.
* **isSoftDeleted**: bool: Bool to indicate whether RP is in soft delete state or not
* **ruleName**: string: Rule name tagged on Recovery Point that governs life cycle

## RecoveryPointTierInformation
### Properties
* **extendedInfo**: [RecoveryPointTierInformationExtendedInfo](#recoverypointtierinformationextendedinfo): Recovery point tier status.
* **status**: 'Deleted' | 'Disabled' | 'Invalid' | 'Rehydrated' | 'Valid': Recovery point tier status.
* **type**: 'ArchivedRP' | 'HardenedRP' | 'InstantRP' | 'Invalid': Recovery point tier type.

## RecoveryPointTierInformationExtendedInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SQLDataDirectory
### Properties
* **logicalName**: string: Logical name of the file
* **path**: string: File path
* **type**: 'Data' | 'Invalid' | 'Log' | string: Type of data directory mapping

