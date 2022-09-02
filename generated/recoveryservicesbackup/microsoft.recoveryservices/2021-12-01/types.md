# Microsoft.RecoveryServices @ 2021-12-01

## Resource Microsoft.RecoveryServices/vaults/backupconfig@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: 'vaultconfig' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupResourceVaultConfig](#backupresourcevaultconfig): BackupResourceVaultConfigResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupconfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: 'backupResourceEncryptionConfig' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupResourceEncryptionConfigOrBackupResourceEncryptionConfigExtended](#backupresourceencryptionconfigorbackupresourceencryptionconfigextended): BackupResourceEncryptionConfigResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupEncryptionConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupEngines@2021-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupEngineBase](#backupenginebase) (ReadOnly): BackupEngineBaseResource properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupEngines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionIntent](#protectionintent): ProtectionIntentResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionContainer](#protectioncontainer): ProtectionContainerResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults@2021-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionContainer](#protectioncontainer) (ReadOnly): ProtectionContainerResource properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectedItem](#protecteditem): ProtectedItemResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/operationResults@2021-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectedItem](#protecteditem) (ReadOnly): ProtectedItemResource properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints@2021-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryPoint](#recoverypoint) (ReadOnly): RecoveryPointResource properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupJobs@2021-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Job](#job) (ReadOnly): JobResource properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupPolicies@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionPolicy](#protectionpolicy): ProtectionPolicyResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupPolicies/operationResults@2021-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionPolicy](#protectionpolicy) (ReadOnly): ProtectionPolicyResource properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupResourceGuardProxies@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGuardProxyBase](#resourceguardproxybase) (ReadOnly): ResourceGuardProxyBaseResource properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupResourceGuardProxies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupstorageconfig@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: 'vaultstorageconfig' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupResourceConfig](#backupresourceconfig): BackupResourceConfigResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupstorageconfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/privateEndpointConnections@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnection](#privateendpointconnection): PrivateEndpointConnectionResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## AzureFileshareProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this item in the service.
* **policyState**: string: Indicates consistency of policy object and policy applied to this backup item.
* **recoveryPointCount**: int: Number of available backup copies associated with this backup item.
* **resourceState**: string (ReadOnly): Indicates the state of this resource. Possible values are from enum ResourceState {Invalid, Active, SoftDeleted, Deleted}
* **resourceStateSyncTime**: string (ReadOnly): The resource state sync time for this backup item.

## AzureFileshareProtectedItemKpisHealths
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## AzureIaaSVMErrorInfo
### Properties
* **errorCode**: int (ReadOnly): Error code.
* **errorString**: string (ReadOnly): Localized error string.
* **errorTitle**: string (ReadOnly): Title: Typically, the entity that the error pertains to.
* **recommendations**: string[] (ReadOnly): List of localized recommendations for above error code.

## AzureIaaSVMHealthDetails
### Properties
* **code**: int (ReadOnly): Health Code
* **message**: string (ReadOnly): Health Message
* **recommendations**: string[] (ReadOnly): Health Recommended Actions
* **title**: string (ReadOnly): Health Title

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

## AzureIaaSVMProtectedItemExtendedInfo
### Properties
* **newestRecoveryPointInArchive**: string: The latest backup copy available for this backup item in archive tier
* **oldestRecoveryPoint**: string: The oldest backup copy available for this backup item across all tiers.
* **oldestRecoveryPointInArchive**: string: The oldest backup copy available for this backup item in archive tier
* **oldestRecoveryPointInVault**: string: The oldest backup copy available for this backup item in vault tier
* **policyInconsistent**: bool: Specifies if backup policy associated with the backup item is inconsistent.
* **recoveryPointCount**: int: Number of backup copies available for this backup item.

## AzureIaaSVMProtectedItemKpisHealths
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## AzureIaaSVMProtectedItemKpisHealths
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## AzureIaaSVMProtectionPolicyTieringPolicy
### Properties
### Additional Properties
* **Additional Properties Type**: [TieringPolicy](#tieringpolicy)

## AzureSqlProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this item in the service.
* **policyState**: string: State of the backup policy associated with this backup item.
* **recoveryPointCount**: int: Number of available backup copies associated with this backup item.

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

## AzureVmWorkloadProtectedItemExtendedInfo
### Properties
* **newestRecoveryPointInArchive**: string: The latest backup copy available for this backup item in archive tier
* **oldestRecoveryPoint**: string: The oldest backup copy available for this backup item across all tiers.
* **oldestRecoveryPointInArchive**: string: The oldest backup copy available for this backup item in archive tier
* **oldestRecoveryPointInVault**: string: The oldest backup copy available for this backup item in vault tier
* **policyState**: string: Indicates consistency of policy object and policy applied to this backup item.
* **recoveryModel**: string: Indicates consistency of policy object and policy applied to this backup item.
* **recoveryPointCount**: int: Number of backup copies available for this backup item.

## AzureVmWorkloadProtectedItemKpisHealths
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## AzureVmWorkloadProtectedItemKpisHealths
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## AzureVmWorkloadProtectedItemKpisHealths
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## AzureWorkloadContainerExtendedInfo
### Properties
* **hostServerName**: string: Host Os Name in case of Stand Alone and Cluster Name in case of distributed container.
* **inquiryInfo**: [InquiryInfo](#inquiryinfo): Inquiry Status for the container.
* **nodesList**: [DistributedNodesInfo](#distributednodesinfo)[]: List of the nodes in case of distributed container.

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
* **dataDirectoryPaths**: [SQLDataDirectory](#sqldatadirectory)[]: List of data directory paths during restore operation.
* **dataDirectoryTimeInUTC**: string: UTC time at which data directory info was captured

## BackupEngineBase
* **Discriminator**: backupEngineType

### Base Properties
* **azureBackupAgentVersion**: string: Backup agent version
* **backupEngineId**: string: ID of the backup engine.
* **backupEngineState**: string: Status of the backup engine with the Recovery Services Vault. = {Active/Deleting/DeleteFailed}
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB' | string: Type of backup management for the backup engine.
* **canReRegister**: bool: Flag indicating if the backup engine be registered, once already registered.
* **dpmVersion**: string: Backup engine version
* **extendedInfo**: [BackupEngineExtendedInfo](#backupengineextendedinfo): Extended info of the backupengine
* **friendlyName**: string: Friendly name of the backup engine.
* **healthStatus**: string: Backup status of the backup engine.
* **isAzureBackupAgentUpgradeAvailable**: bool: To check if backup agent upgrade available
* **isDpmUpgradeAvailable**: bool: To check if backup engine upgrade available
* **registrationStatus**: string: Registration status of the backup engine with the Recovery Services Vault.

### AzureBackupServerEngine
#### Properties
* **backupEngineType**: 'AzureBackupServerEngine' (Required): Type of the backup engine.

### DpmBackupEngine
#### Properties
* **backupEngineType**: 'DpmBackupEngine' (Required): Type of the backup engine.


## BackupEngineExtendedInfo
### Properties
* **availableDiskSpace**: int: Disk space currently available in the backup engine.
* **azureProtectedInstances**: int: Protected instances in the backup engine.
* **databaseName**: string: Database name of backup engine.
* **diskCount**: int: Number of disks in the backup engine.
* **protectedItemsCount**: int: Number of protected items in the backup engine.
* **protectedServersCount**: int: Number of protected servers in the backup engine.
* **refreshedAt**: string: Last refresh time in the backup engine.
* **usedDiskSpace**: int: Disk space used in the backup engine.

## BackupResourceConfig
### Properties
* **crossRegionRestoreFlag**: bool: Opt in details of Cross Region Restore feature.
* **dedupState**: 'Disabled' | 'Enabled' | 'Invalid' | string: Vault Dedup state
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant' | string: Storage type
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant' | string: Storage type.
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked' | string: Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.
* **xcoolState**: 'Disabled' | 'Enabled' | 'Invalid' | string: Vault x-cool state

## BackupResourceEncryptionConfigOrBackupResourceEncryptionConfigExtended
### Properties
* **encryptionAtRestType**: 'CustomerManaged' | 'Invalid' | 'MicrosoftManaged' | string: Encryption At Rest Type
* **infrastructureEncryptionState**: 'Disabled' | 'Enabled' | 'Invalid' | string
* **keyUri**: string: Key Vault Key URI
* **lastUpdateStatus**: 'Failed' | 'FirstInitialization' | 'Initialized' | 'Invalid' | 'NotEnabled' | 'PartiallyFailed' | 'PartiallySucceeded' | 'Succeeded' | string
* **subscriptionId**: string: Key Vault Subscription Id
* **userAssignedIdentity**: string (ReadOnly): User Assigned Identity Id
* **useSystemAssignedIdentity**: bool (ReadOnly): bool to indicate whether to use system Assigned Identity or not

## BackupResourceVaultConfig
### Properties
* **enhancedSecurityState**: 'Disabled' | 'Enabled' | 'Invalid' | string: Enabled or Disabled.
* **isSoftDeleteFeatureStateEditable**: bool: Is soft delete feature state editable
* **resourceGuardOperationRequests**: string[]: ResourceGuard Operation Requests
* **softDeleteFeatureState**: 'Disabled' | 'Enabled' | 'Invalid' | string: Soft Delete feature state
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant' | string: Storage type.
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant' | string: Storage type.
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked' | string: Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.

## BEKDetails
### Properties
* **secretData**: string: BEK data.
* **secretUrl**: string: Secret is BEK.
* **secretVaultId**: string: ID of the Key Vault where this Secret is stored.

## ContainerIdentityInfo
### Properties
* **aadTenantId**: string: Protection container identity - AAD Tenant
* **audience**: string: Protection container identity - Audience
* **servicePrincipalClientId**: string: Protection container identity - AAD Service Principal
* **uniqueName**: string: Unique name of the container

## DailyRetentionFormat
### Properties
* **daysOfTheMonth**: [Day](#day)[]: List of days of the month.

## DailyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of retention Policy.
* **retentionTimes**: string[]: Retention times of retention policy.

## DailySchedule
### Properties
* **scheduleRunTimes**: string[]: List of times of day this schedule has to be run.

## Day
### Properties
* **date**: int: Date of the month
* **isLast**: bool: Whether Date is last date of month

## DiskExclusionProperties
### Properties
* **diskLunList**: int[]: List of Disks' Logical Unit Numbers (LUN) to be used for VM Protection.
* **isInclusionList**: bool: Flag to indicate whether DiskLunList is to be included/ excluded from backup.

## DiskInformation
### Properties
* **lun**: int
* **name**: string

## DistributedNodesInfo
### Properties
* **errorDetail**: [ErrorDetail](#errordetail): Error Details if the Status is non-success.
* **nodeName**: string: Name of the node under a distributed container.
* **status**: string: Status of this Node.
Failed | Succeeded

## DPMContainerExtendedInfo
### Properties
* **lastRefreshedAt**: string: Last refresh time of the DPMContainer.

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

## DPMProtectedItemExtendedInfo
### Properties
* **diskStorageUsedInBytes**: string: Used Disk storage in bytes.
* **isCollocated**: bool: To check if backup item is collocated.
* **isPresentOnCloud**: bool: To check if backup item is cloud protected.
* **lastBackupStatus**: string: Last backup status information on backup item.
* **lastRefreshedAt**: string: Last refresh time on backup item.
* **oldestRecoveryPoint**: string: Oldest cloud recovery point time.
* **onPremiseLatestRecoveryPoint**: string: latest disk recovery point time.
* **onPremiseOldestRecoveryPoint**: string: Oldest disk recovery point time.
* **onPremiseRecoveryPointCount**: int: disk recovery point count.
* **protectableObjectLoadPath**: [DPMProtectedItemExtendedInfoProtectableObjectLoadPath](#dpmprotecteditemextendedinfoprotectableobjectloadpath): Attribute to provide information on various DBs.
* **protected**: bool: To check if backup item is disk protected.
* **protectionGroupName**: string: Protection group name of the backup item.
* **recoveryPointCount**: int: cloud recovery point count.
* **totalDiskStorageSizeInBytes**: string: total Disk storage in bytes.

## DPMProtectedItemExtendedInfoProtectableObjectLoadPath
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ErrorDetail
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error Message related to the Code.
* **recommendations**: string[] (ReadOnly): List of recommendation strings.

## ExtendedProperties
### Properties
* **diskExclusionProperties**: [DiskExclusionProperties](#diskexclusionproperties): Extended Properties for Disk Exclusion.
* **linuxVmApplicationName**: string: Linux VM name

## GenericContainerExtendedInfo
### Properties
* **containerIdentityInfo**: [ContainerIdentityInfo](#containeridentityinfo): Container identity information
* **rawCertData**: string: Public key of container cert
* **serviceEndpoints**: [GenericContainerExtendedInfoServiceEndpoints](#genericcontainerextendedinfoserviceendpoints): Azure Backup Service Endpoints for the container

## GenericContainerExtendedInfoServiceEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GenericProtectedItemSourceAssociations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HourlySchedule
### Properties
* **interval**: int: Interval at which backup needs to be triggered. For hourly the value
 can be 4/6/8/12
* **scheduleWindowDuration**: int: To specify duration of the backup window
* **scheduleWindowStartTime**: string: To specify start time of the backup window

## IaasVMRecoveryPointMoveReadinessInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [RecoveryPointMoveReadinessInfo](#recoverypointmovereadinessinfo)

## InquiryInfo
### Properties
* **errorDetail**: [ErrorDetail](#errordetail): Error Details if the Status is non-success.
* **inquiryDetails**: [WorkloadInquiryDetails](#workloadinquirydetails)[]: Inquiry Details which will have workload specific details.
For e.g. - For SQL and oracle this will contain different details.
* **status**: string: Inquiry Status for this container such as
InProgress | Failed | Succeeded

## InquiryValidation
### Properties
* **additionalDetail**: string (ReadOnly): Error Additional Detail in case the status is non-success.
* **errorDetail**: [ErrorDetail](#errordetail): Error Detail in case the status is non-success.
* **status**: string: Status for the Inquiry Validation.

## InstantRPAdditionalDetails
### Properties
* **azureBackupRGNamePrefix**: string
* **azureBackupRGNameSuffix**: string

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
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: Gets or sets the state/actions applicable on this job like cancel/retry.
* **containerName**: string: Container name of the entity on which the current job is executing.
* **duration**: string: Time elapsed during the execution of this job.
* **errorDetails**: [AzureIaaSVMErrorInfo](#azureiaasvmerrorinfo)[]: Error details on execution of this job.
* **extendedInfo**: [AzureIaaSVMJobExtendedInfo](#azureiaasvmjobextendedinfo): Additional information for this job.
* **isUserTriggered**: bool: Indicated that whether the job is adhoc(true) or scheduled(false)
* **jobType**: 'AzureIaaSVMJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **virtualMachineVersion**: string: Specifies whether the backup item is a Classic or an Azure Resource Manager VM.

### AzureIaaSVMJobV2
#### Properties
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: Gets or sets the state/actions applicable on this job like cancel/retry.
* **containerName**: string: Container name of the entity on which the current job is executing.
* **duration**: string: Time elapsed during the execution of this job.
* **errorDetails**: [AzureIaaSVMErrorInfo](#azureiaasvmerrorinfo)[]: Error details on execution of this job.
* **extendedInfo**: [AzureIaaSVMJobExtendedInfo](#azureiaasvmjobextendedinfo): Additional information for this job.
* **jobType**: 'AzureIaaSVMJobV2' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **virtualMachineVersion**: string: Specifies whether the backup item is a Classic or an Azure Resource Manager VM.

### AzureStorageJob
#### Properties
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: Gets or sets the state/actions applicable on this job like cancel/retry.
* **duration**: string: Time elapsed during the execution of this job.
* **errorDetails**: [AzureStorageErrorInfo](#azurestorageerrorinfo)[]: Error details on execution of this job.
* **extendedInfo**: [AzureStorageJobExtendedInfo](#azurestoragejobextendedinfo): Additional information about the job.
* **isUserTriggered**: bool: Indicated that whether the job is adhoc(true) or scheduled(false)
* **jobType**: 'AzureStorageJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **storageAccountName**: string: Specifies friendly name of the storage account.
* **storageAccountVersion**: string: Specifies whether the Storage account is a Classic or an Azure Resource Manager Storage account.

### AzureWorkloadJob
#### Properties
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: Gets or sets the state/actions applicable on this job like cancel/retry.
* **duration**: string: Time elapsed during the execution of this job.
* **errorDetails**: [AzureWorkloadErrorInfo](#azureworkloaderrorinfo)[]: Error details on execution of this job.
* **extendedInfo**: [AzureWorkloadJobExtendedInfo](#azureworkloadjobextendedinfo): Additional information about the job.
* **jobType**: 'AzureWorkloadJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **workloadType**: string: Workload type of the job

### DpmJob
#### Properties
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: The state/actions applicable on this job like cancel/retry.
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
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: The state/actions applicable on jobs like cancel/retry.
* **duration**: string: Time taken by job to run.
* **errorDetails**: [MabErrorInfo](#maberrorinfo)[]: The errors.
* **extendedInfo**: [MabJobExtendedInfo](#mabjobextendedinfo): Additional information on the job.
* **jobType**: 'MabJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **mabServerName**: string: Name of server protecting the DS.
* **mabServerType**: 'AzureBackupServerContainer' | 'AzureSqlContainer' | 'Cluster' | 'DPMContainer' | 'GenericContainer' | 'IaasVMContainer' | 'IaasVMServiceContainer' | 'Invalid' | 'MABContainer' | 'SQLAGWorkLoadContainer' | 'StorageContainer' | 'Unknown' | 'VCenter' | 'VMAppContainer' | 'Windows' | string: Server type of MAB container.
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Workload type of backup item.

### VaultJob
#### Properties
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: Gets or sets the state/actions applicable on this job like cancel/retry.
* **duration**: string: Time elapsed during the execution of this job.
* **errorDetails**: [VaultJobErrorInfo](#vaultjoberrorinfo)[]: Error details on execution of this job.
* **extendedInfo**: [VaultJobExtendedInfo](#vaultjobextendedinfo): Additional information about the job.
* **jobType**: 'VaultJob' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.


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

## KPIResourceHealthDetails
### Properties
* **resourceHealthDetails**: [ResourceHealthDetails](#resourcehealthdetails)[]: Resource Health Status
* **resourceHealthStatus**: 'Healthy' | 'Invalid' | 'PersistentDegraded' | 'PersistentUnhealthy' | 'TransientDegraded' | 'TransientUnhealthy' | string: Resource Health Status

## MabContainerExtendedInfo
### Properties
* **backupItems**: string[]: List of backup items associated with this container.
* **backupItemType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Type of backup items associated with this container.
* **lastBackupStatus**: string: Latest backup status of this container.
* **lastRefreshedAt**: string: Time stamp when this container was refreshed.
* **policyName**: string: Backup policy associated with this container.

## MABContainerHealthDetails
### Properties
* **code**: int: Health Code
* **message**: string: Health Message
* **recommendations**: string[]: Health Recommended Actions
* **title**: string: Health Title

## MabErrorInfo
### Properties
* **errorString**: string (ReadOnly): Localized error string.
* **recommendations**: string[] (ReadOnly): List of localized recommendations.

## MabFileFolderProtectedItemExtendedInfo
### Properties
* **lastRefreshedAt**: string: Last time when the agent data synced to service.
* **oldestRecoveryPoint**: string: The oldest backup copy available.
* **recoveryPointCount**: int: Number of backup copies associated with the backup item.

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

## MonthlyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of retention Policy.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format for monthly retention policy.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly' | string: Retention schedule format type for monthly retention policy.
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format for monthly retention policy.
* **retentionTimes**: string[]: Retention times of retention policy.

## PointInTimeRange
### Properties
* **endTime**: string: End time of the time range for log recovery.
* **startTime**: string: Start time of the time range for log recovery.

## PrivateEndpoint
### Properties
* **id**: string: Gets or sets id

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Gets or sets private endpoint associated with the private endpoint connection
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Gets or sets private link service connection state
* **provisioningState**: 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | string: Gets or sets provisioning state of the private endpoint connection

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string: Gets or sets actions required
* **description**: string: Gets or sets description
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Gets or sets the status

## ProtectedItem
* **Discriminator**: protectedItemType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB' | string: Type of backup management for the backed up item.
* **backupSetName**: string: Name of the backup set the backup item belongs to
* **containerName**: string: Unique name of container
* **createMode**: 'Default' | 'Invalid' | 'Recover' | string: Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
* **deferredDeleteTimeInUTC**: string: Time for deferred deletion in UTC
* **deferredDeleteTimeRemaining**: string: Time remaining before the DS marked for deferred delete is permanently deleted
* **isArchiveEnabled**: bool: Flag to identify whether datasource is protected in archive
* **isDeferredDeleteScheduleUpcoming**: bool: Flag to identify whether the deferred deleted DS is to be purged soon
* **isRehydrate**: bool: Flag to identify that deferred deleted DS is to be moved into Pause state
* **isScheduledForDeferredDelete**: bool: Flag to identify whether the DS is scheduled for deferred delete
* **lastRecoveryPoint**: string: Timestamp when the last (latest) backup copy was created for this backup item.
* **policyId**: string: ID of the backup policy with which this item is backed up.
* **policyName**: string: Name of the policy used for protection
* **resourceGuardOperationRequests**: string[]: ResourceGuardOperationRequests on which LAC check will be performed
* **sourceResourceId**: string: ARM ID of the resource to be backed up.
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Type of workload this item represents.

### AzureFileshareProtectedItem
#### Properties
* **extendedInfo**: [AzureFileshareProtectedItemExtendedInfo](#azurefileshareprotecteditemextendedinfo): Additional information with this backup item.
* **friendlyName**: string: Friendly name of the fileshare represented by this backup item.
* **kpisHealths**: [AzureFileshareProtectedItemKpisHealths](#azurefileshareprotecteditemkpishealths): Health details of different KPIs
* **lastBackupStatus**: string: Last backup operation status. Possible values: Healthy, Unhealthy.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped' | string: Backup state of this backup item.
* **protectionStatus**: string: Backup status of this backup item.

### AzureVmWorkloadSAPAseDatabaseProtectedItem
#### Properties
* **extendedInfo**: [AzureVmWorkloadProtectedItemExtendedInfo](#azurevmworkloadprotecteditemextendedinfo): Additional information for this backup item.
* **friendlyName**: string: Friendly name of the DB represented by this backup item.
* **kpisHealths**: [AzureVmWorkloadProtectedItemKpisHealths](#azurevmworkloadprotecteditemkpishealths): Health details of different KPIs
* **lastBackupErrorDetail**: [ErrorDetail](#errordetail): Error details in last backup
* **lastBackupStatus**: 'Healthy' | 'IRPending' | 'Invalid' | 'Unhealthy' | string: Last backup operation status. Possible values: Healthy, Unhealthy.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **parentName**: string: Parent name of the DB such as Instance or Availability Group.
* **parentType**: string: Parent type of protected item, example: for a DB, standalone server or distributed
* **protectedItemDataSourceId**: string: Data ID of the protected item.
* **protectedItemHealthStatus**: 'Healthy' | 'IRPending' | 'Invalid' | 'NotReachable' | 'Unhealthy' | string: Health status of the backup item, evaluated based on last heartbeat received
* **protectedItemType**: 'AzureVmWorkloadSAPAseDatabase' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped' | string: Backup state of this backup item.
* **protectionStatus**: string: Backup status of this backup item.
* **serverName**: string: Host/Cluster Name for instance or AG

### AzureVmWorkloadSAPHanaDatabaseProtectedItem
#### Properties
* **extendedInfo**: [AzureVmWorkloadProtectedItemExtendedInfo](#azurevmworkloadprotecteditemextendedinfo): Additional information for this backup item.
* **friendlyName**: string: Friendly name of the DB represented by this backup item.
* **kpisHealths**: [AzureVmWorkloadProtectedItemKpisHealths](#azurevmworkloadprotecteditemkpishealths): Health details of different KPIs
* **lastBackupErrorDetail**: [ErrorDetail](#errordetail): Error details in last backup
* **lastBackupStatus**: 'Healthy' | 'IRPending' | 'Invalid' | 'Unhealthy' | string: Last backup operation status. Possible values: Healthy, Unhealthy.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **parentName**: string: Parent name of the DB such as Instance or Availability Group.
* **parentType**: string: Parent type of protected item, example: for a DB, standalone server or distributed
* **protectedItemDataSourceId**: string: Data ID of the protected item.
* **protectedItemHealthStatus**: 'Healthy' | 'IRPending' | 'Invalid' | 'NotReachable' | 'Unhealthy' | string: Health status of the backup item, evaluated based on last heartbeat received
* **protectedItemType**: 'AzureVmWorkloadSAPHanaDatabase' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped' | string: Backup state of this backup item.
* **protectionStatus**: string: Backup status of this backup item.
* **serverName**: string: Host/Cluster Name for instance or AG

### AzureVmWorkloadSQLDatabaseProtectedItem
#### Properties
* **extendedInfo**: [AzureVmWorkloadProtectedItemExtendedInfo](#azurevmworkloadprotecteditemextendedinfo): Additional information for this backup item.
* **friendlyName**: string: Friendly name of the DB represented by this backup item.
* **kpisHealths**: [AzureVmWorkloadProtectedItemKpisHealths](#azurevmworkloadprotecteditemkpishealths): Health details of different KPIs
* **lastBackupErrorDetail**: [ErrorDetail](#errordetail): Error details in last backup
* **lastBackupStatus**: 'Healthy' | 'IRPending' | 'Invalid' | 'Unhealthy' | string: Last backup operation status. Possible values: Healthy, Unhealthy.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **parentName**: string: Parent name of the DB such as Instance or Availability Group.
* **parentType**: string: Parent type of protected item, example: for a DB, standalone server or distributed
* **protectedItemDataSourceId**: string: Data ID of the protected item.
* **protectedItemHealthStatus**: 'Healthy' | 'IRPending' | 'Invalid' | 'NotReachable' | 'Unhealthy' | string: Health status of the backup item, evaluated based on last heartbeat received
* **protectedItemType**: 'AzureVmWorkloadSQLDatabase' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped' | string: Backup state of this backup item.
* **protectionStatus**: string: Backup status of this backup item.
* **serverName**: string: Host/Cluster Name for instance or AG

### DPMProtectedItem
#### Properties
* **backupEngineName**: string: Backup Management server protecting this backup item
* **extendedInfo**: [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo): Extended info of the backup item.
* **friendlyName**: string: Friendly name of the managed item
* **protectedItemType**: 'DPMProtectedItem' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped' | string: Protection state of the backup engine

### GenericProtectedItem
#### Properties
* **fabricName**: string: Name of this backup item's fabric.
* **friendlyName**: string: Friendly name of the container.
* **policyState**: string: Indicates consistency of policy object and policy applied to this backup item.
* **protectedItemId**: int: Data Plane Service ID of the protected item.
* **protectedItemType**: 'GenericProtectedItem' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped' | string: Backup state of this backup item.
* **sourceAssociations**: [GenericProtectedItemSourceAssociations](#genericprotecteditemsourceassociations): Loosely coupled (type, value) associations (example - parent of a protected item)

### MabFileFolderProtectedItem
#### Properties
* **computerName**: string: Name of the computer associated with this backup item.
* **deferredDeleteSyncTimeInUTC**: int: Sync time for deferred deletion in UTC
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo): Additional information with this backup item.
* **friendlyName**: string: Friendly name of this backup item.
* **lastBackupStatus**: string: Status of last backup operation.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required): backup item type.
* **protectionState**: string: Protected, ProtectionStopped, IRPending or ProtectionError

### AzureIaaSClassicComputeVMProtectedItem
#### Properties
* **extendedInfo**: [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo): Additional information for this backup item.
* **extendedProperties**: [ExtendedProperties](#extendedproperties): Extended Properties for Azure IaasVM Backup.
* **friendlyName**: string: Friendly name of the VM represented by this backup item.
* **healthDetails**: [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)[]: Health details on this backup item.
* **healthStatus**: 'ActionRequired' | 'ActionSuggested' | 'Invalid' | 'Passed' | string: Health status of protected item.
* **kpisHealths**: [AzureIaaSVMProtectedItemKpisHealths](#azureiaasvmprotecteditemkpishealths): Health details of different KPIs
* **lastBackupStatus**: string: Last backup operation status.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemDataId**: string: Data ID of the protected item.
* **protectedItemType**: 'Microsoft.ClassicCompute/virtualMachines' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped' | string: Backup state of this backup item.
* **protectionStatus**: string: Backup status of this backup item.
* **virtualMachineId**: string: Fully qualified ARM ID of the virtual machine represented by this item.

### AzureIaaSComputeVMProtectedItem
#### Properties
* **extendedInfo**: [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo): Additional information for this backup item.
* **extendedProperties**: [ExtendedProperties](#extendedproperties): Extended Properties for Azure IaasVM Backup.
* **friendlyName**: string: Friendly name of the VM represented by this backup item.
* **healthDetails**: [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)[]: Health details on this backup item.
* **healthStatus**: 'ActionRequired' | 'ActionSuggested' | 'Invalid' | 'Passed' | string: Health status of protected item.
* **kpisHealths**: [AzureIaaSVMProtectedItemKpisHealths](#azureiaasvmprotecteditemkpishealths): Health details of different KPIs
* **lastBackupStatus**: string: Last backup operation status.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemDataId**: string: Data ID of the protected item.
* **protectedItemType**: 'Microsoft.Compute/virtualMachines' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped' | string: Backup state of this backup item.
* **protectionStatus**: string: Backup status of this backup item.
* **virtualMachineId**: string: Fully qualified ARM ID of the virtual machine represented by this item.

### AzureSqlProtectedItem
#### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo): Additional information for this backup item.
* **protectedItemDataId**: string: Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services.
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped' | string: Backup state of the backed up item.


## ProtectionContainer
* **Discriminator**: containerType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB' | string: Type of backup management for the container.
* **friendlyName**: string: Friendly name of the container.
* **healthStatus**: string: Status of health of the container.
* **protectableObjectType**: string: Type of the protectable object associated with this container
* **registrationStatus**: string: Status of registration of the container with the Recovery Services Vault.

### AzureBackupServerContainer
#### Properties
* **canReRegister**: bool: Specifies whether the container is re-registrable.
* **containerId**: string: ID of container.
* **containerType**: 'AzureBackupServerContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **dpmAgentVersion**: string: Backup engine Agent version
* **dpmServers**: string[]: List of BackupEngines protecting the container
* **extendedInfo**: [DPMContainerExtendedInfo](#dpmcontainerextendedinfo): Extended Info of the container.
* **protectedItemCount**: int: Number of protected items in the BackupEngine
* **protectionStatus**: string: Protection status of the container.
* **upgradeAvailable**: bool: To check if upgrade available

### AzureSqlContainer
#### Properties
* **containerType**: 'AzureSqlContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer

### GenericContainer
#### Properties
* **containerType**: 'GenericContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **extendedInformation**: [GenericContainerExtendedInfo](#genericcontainerextendedinfo): Extended information (not returned in List container API calls)
* **fabricName**: string: Name of the container's fabric

### AzureIaaSClassicComputeVMContainer
#### Properties
* **containerType**: 'Microsoft.ClassicCompute/virtualMachines' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **resourceGroup**: string: Resource group name of Recovery Services Vault.
* **virtualMachineId**: string: Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
* **virtualMachineVersion**: string: Specifies whether the container represents a Classic or an Azure Resource Manager VM.

### AzureIaaSComputeVMContainer
#### Properties
* **containerType**: 'Microsoft.Compute/virtualMachines' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **resourceGroup**: string: Resource group name of Recovery Services Vault.
* **virtualMachineId**: string: Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
* **virtualMachineVersion**: string: Specifies whether the container represents a Classic or an Azure Resource Manager VM.

### AzureSqlagWorkloadContainerProtectionContainer
#### Properties
* **containerType**: 'SQLAGWorkLoadContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **extendedInfo**: [AzureWorkloadContainerExtendedInfo](#azureworkloadcontainerextendedinfo): Additional details of a workload container.
* **lastUpdatedTime**: string: Time stamp when this container was updated.
* **operationType**: 'Invalid' | 'Register' | 'Reregister' | string: Re-Do Operation
* **sourceResourceId**: string: ARM ID of the virtual machine represented by this Azure Workload Container
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Workload type for which registration was sent.

### AzureStorageContainer
#### Properties
* **acquireStorageAccountLock**: 'Acquire' | 'NotAcquire' | string: Whether storage account lock is to be acquired for this container or not.
* **containerType**: 'StorageContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **protectedItemCount**: int: Number of items backed up in this container.
* **resourceGroup**: string: Resource group name of Recovery Services Vault.
* **sourceResourceId**: string: Fully qualified ARM url.
* **storageAccountVersion**: string: Storage account version.

### AzureVMAppContainerProtectionContainer
#### Properties
* **containerType**: 'VMAppContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **extendedInfo**: [AzureWorkloadContainerExtendedInfo](#azureworkloadcontainerextendedinfo): Additional details of a workload container.
* **lastUpdatedTime**: string: Time stamp when this container was updated.
* **operationType**: 'Invalid' | 'Register' | 'Reregister' | string: Re-Do Operation
* **sourceResourceId**: string: ARM ID of the virtual machine represented by this Azure Workload Container
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Workload type for which registration was sent.

### MabContainer
#### Properties
* **agentVersion**: string: Agent version of this container.
* **canReRegister**: bool: Can the container be registered one more time.
* **containerHealthState**: string: Health state of mab container.
* **containerId**: int: ContainerID represents the container.
* **containerType**: 'Windows' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **extendedInfo**: [MabContainerExtendedInfo](#mabcontainerextendedinfo): Additional information for this container
* **mabContainerHealthDetails**: [MABContainerHealthDetails](#mabcontainerhealthdetails)[]: Health details on this mab container.
* **protectedItemCount**: int: Number of items backed up in this container.


## ProtectionIntent
* **Discriminator**: protectionIntentItemType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB' | string: Type of backup management for the backed up item.
* **itemId**: string: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
* **policyId**: string: ID of the backup policy with which this item is backed up.
* **protectionState**: 'Invalid' | 'NotProtected' | 'Protected' | 'Protecting' | 'ProtectionFailed' | string: Backup state of this backup item.
* **sourceResourceId**: string: ARM ID of the resource to be backed up.

### AzureResourceProtectionIntent
#### Properties
* **friendlyName**: string: Friendly name of the VM represented by this backup item.
* **protectionIntentItemType**: 'AzureResourceItem' (Required): backup protectionIntent type.

### AzureWorkloadContainerAutoProtectionIntent
#### Properties
* **protectionIntentItemType**: 'AzureWorkloadContainerAutoProtectionIntent' (Required): backup protectionIntent type.

### AzureWorkloadSQLAutoProtectionIntent
#### Properties
* **protectionIntentItemType**: 'AzureWorkloadSQLAutoProtectionIntent' (Required): backup protectionIntent type.
* **workloadItemType**: 'Invalid' | 'SAPAseDatabase' | 'SAPAseSystem' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLDataBase' | 'SQLInstance' | string: Workload item type of the item for which intent is to be set


## ProtectionPolicy
* **Discriminator**: backupManagementType

### Base Properties
* **protectedItemsCount**: int: Number of items associated with this policy.
* **resourceGuardOperationRequests**: string[]: ResourceGuard Operation Requests

### AzureIaaSVMProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureIaasVM' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **instantRPDetails**: [InstantRPAdditionalDetails](#instantrpadditionaldetails)
* **instantRpRetentionRangeInDays**: int: Instant RP retention policy range in days
* **policyType**: 'Invalid' | 'V1' | 'V2' | string
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Retention policy with the details on backup copy retention ranges.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Backup schedule specified as part of backup policy.
* **tieringPolicy**: [AzureIaaSVMProtectionPolicyTieringPolicy](#azureiaasvmprotectionpolicytieringpolicy): Tiering policy to automatically move RPs to another tier
Key is Target Tier, defined in RecoveryPointTierType enum.
Tiering policy specifies the criteria to move RP to the target tier.
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

### AzureSqlProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureSql' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Retention policy details.

### AzureFileShareProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureStorage' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Retention policy with the details on backup copy retention ranges.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Backup schedule specified as part of backup policy.
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Type of workload for the backup management

### AzureVmWorkloadProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureWorkload' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **makePolicyConsistent**: bool: Fix the policy inconsistency
* **settings**: [Settings](#settings): Common settings for the backup management
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]: List of sub-protection policies which includes schedule and retention
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Type of workload for the backup management

### GenericProtectionPolicy
#### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **fabricName**: string: Name of this policy's fabric.
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]: List of sub-protection policies which includes schedule and retention
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

### MabProtectionPolicy
#### Properties
* **backupManagementType**: 'MAB' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Retention policy details.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Backup schedule of backup policy.


## RecoveryPoint
* **Discriminator**: objectType

### Base Properties

### AzureFileShareRecoveryPoint
#### Properties
* **fileShareSnapshotUri**: string: Contains Url to the snapshot of fileshare, if applicable
* **objectType**: 'AzureFileShareRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointSizeInGB**: int: Contains recovery point size
* **recoveryPointTime**: string: Time at which this backup copy was created.
* **recoveryPointType**: string: Type of the backup copy. Specifies whether it is a crash consistent backup or app consistent.

### AzureWorkloadSAPHanaPointInTimeRecoveryPoint
#### Properties
* **objectType**: 'AzureWorkloadSAPHanaPointInTimeRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointMoveReadinessInfo**: [AzureWorkloadRecoveryPointMoveReadinessInfo](#azureworkloadrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointTierDetails**: [RecoveryPointTierInformationV2](#recoverypointtierinformationv2)[]: Recovery point tier information.
* **recoveryPointTimeInUTC**: string: UTC time at which recovery point was created
* **timeRanges**: [PointInTimeRange](#pointintimerange)[]: List of log ranges
* **type**: 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string: Type of restore point

### AzureWorkloadSAPHanaRecoveryPoint
#### Properties
* **objectType**: 'AzureWorkloadSAPHanaRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointMoveReadinessInfo**: [AzureWorkloadRecoveryPointMoveReadinessInfo](#azureworkloadrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointTierDetails**: [RecoveryPointTierInformationV2](#recoverypointtierinformationv2)[]: Recovery point tier information.
* **recoveryPointTimeInUTC**: string: UTC time at which recovery point was created
* **type**: 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string: Type of restore point

### AzureWorkloadSQLPointInTimeRecoveryPoint
#### Properties
* **extendedInfo**: [AzureWorkloadSQLRecoveryPointExtendedInfo](#azureworkloadsqlrecoverypointextendedinfo): Extended Info that provides data directory details. Will be populated in two cases:
When a specific recovery point is accessed using GetRecoveryPoint
Or when ListRecoveryPoints is called for Log RP only with ExtendedInfo query filter
* **objectType**: 'AzureWorkloadSQLPointInTimeRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointMoveReadinessInfo**: [AzureWorkloadRecoveryPointMoveReadinessInfo](#azureworkloadrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointTierDetails**: [RecoveryPointTierInformationV2](#recoverypointtierinformationv2)[]: Recovery point tier information.
* **recoveryPointTimeInUTC**: string: UTC time at which recovery point was created
* **timeRanges**: [PointInTimeRange](#pointintimerange)[]: List of log ranges
* **type**: 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string: Type of restore point

### GenericRecoveryPoint
#### Properties
* **friendlyName**: string: Friendly name of the backup copy.
* **objectType**: 'GenericRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointAdditionalInfo**: string: Additional information associated with this backup copy.
* **recoveryPointTime**: string: Time at which this backup copy was created.
* **recoveryPointType**: string: Type of the backup copy.

### IaasVMRecoveryPoint
#### Properties
* **isInstantIlrSessionActive**: bool: Is the session to recover items from this backup copy still active.
* **isManagedVirtualMachine**: bool: Whether VM is with Managed Disks
* **isSourceVMEncrypted**: bool: Identifies whether the VM was encrypted when the backup copy is created.
* **keyAndSecret**: [KeyAndSecretDetails](#keyandsecretdetails): Required details for recovering an encrypted VM. Applicable only when IsSourceVMEncrypted is true.
* **objectType**: 'IaasVMRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **originalStorageAccountOption**: bool: Original Storage Account Option
* **osType**: string: OS type
* **recoveryPointAdditionalInfo**: string: Additional information associated with this backup copy.
* **recoveryPointDiskConfiguration**: [RecoveryPointDiskConfiguration](#recoverypointdiskconfiguration): Disk configuration
* **recoveryPointMoveReadinessInfo**: [IaasVMRecoveryPointMoveReadinessInfo](#iaasvmrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointTierDetails**: [RecoveryPointTierInformationV2](#recoverypointtierinformationv2)[]: Recovery point tier information.
* **recoveryPointTime**: string: Time at which this backup copy was created.
* **recoveryPointType**: string: Type of the backup copy.
* **sourceVMStorageType**: string: Storage type of the VM whose backup copy is created.
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

## RecoveryPointTierInformationExtendedInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecoveryPointTierInformationV2
### Properties
* **extendedInfo**: [RecoveryPointTierInformationExtendedInfo](#recoverypointtierinformationextendedinfo): Recovery point tier status.
* **status**: 'Deleted' | 'Disabled' | 'Invalid' | 'Rehydrated' | 'Valid': Recovery point tier status.
* **type**: 'ArchivedRP' | 'HardenedRP' | 'InstantRP' | 'Invalid': Recovery point tier type.

## ResourceGuardOperationDetail
### Properties
* **defaultResourceRequest**: string
* **vaultCriticalOperation**: string

## ResourceGuardProxyBase
### Properties
* **description**: string
* **lastUpdatedTime**: string
* **resourceGuardOperationDetails**: [ResourceGuardOperationDetail](#resourceguardoperationdetail)[]
* **resourceGuardResourceId**: string

## ResourceHealthDetails
### Properties
* **code**: int (ReadOnly): Health Code
* **message**: string (ReadOnly): Health Message
* **recommendations**: string[] (ReadOnly): Health Recommended Actions
* **title**: string (ReadOnly): Health Title

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

## RetentionDuration
### Properties
* **count**: int: Count of duration types. Retention duration is obtained by the counting the duration type Count times.
For example, when Count = 3 and DurationType = Weeks, retention duration will be three weeks.
* **durationType**: 'Days' | 'Invalid' | 'Months' | 'Weeks' | 'Years' | string: Retention duration type of retention policy.

## RetentionPolicy
* **Discriminator**: retentionPolicyType

### Base Properties

### LongTermRetentionPolicy
#### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule): Daily retention schedule of the protection policy.
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule): Monthly retention schedule of the protection policy.
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule): Weekly retention schedule of the protection policy.
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule): Yearly retention schedule of the protection policy.

### SimpleRetentionPolicy
#### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of the protection policy.
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.


## SchedulePolicy
* **Discriminator**: schedulePolicyType

### Base Properties

### LogSchedulePolicy
#### Properties
* **scheduleFrequencyInMins**: int: Frequency of the log schedule operation of this policy in minutes.
* **schedulePolicyType**: 'LogSchedulePolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.

### LongTermSchedulePolicy
#### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.

### SimpleSchedulePolicy
#### Properties
* **hourlySchedule**: [HourlySchedule](#hourlyschedule): Hourly Schedule of this Policy
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of week this schedule has to be run.
* **scheduleRunFrequency**: 'Daily' | 'Hourly' | 'Invalid' | 'Weekly' | string: Frequency of the schedule operation of this policy.
* **scheduleRunTimes**: string[]: List of times of day this schedule has to be run.
* **scheduleWeeklyFrequency**: int: At every number weeks this schedule has to be run.

### SimpleSchedulePolicyV2
#### Properties
* **dailySchedule**: [DailySchedule](#dailyschedule): Daily schedule of this policy
* **hourlySchedule**: [HourlySchedule](#hourlyschedule): hourly schedule of this policy
* **schedulePolicyType**: 'SimpleSchedulePolicyV2' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **scheduleRunFrequency**: 'Daily' | 'Hourly' | 'Invalid' | 'Weekly' | string: Frequency of the schedule operation of this policy.
* **weeklySchedule**: [WeeklySchedule](#weeklyschedule): Weekly schedule of this policy


## Settings
### Properties
* **isCompression**: bool: Workload compression flag. This has been added so that 'isSqlCompression'
will be deprecated once clients upgrade to consider this flag.
* **issqlcompression**: bool: SQL compression flag
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

## SQLDataDirectory
### Properties
* **logicalName**: string: Logical name of the file
* **path**: string: File path
* **type**: 'Data' | 'Invalid' | 'Log' | string: Type of data directory mapping

## SubProtectionPolicy
### Properties
* **policyType**: 'CopyOnlyFull' | 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string: Type of backup policy type
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Retention policy with the details on backup copy retention ranges.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Backup schedule specified as part of backup policy.
* **tieringPolicy**: [SubProtectionPolicyTieringPolicy](#subprotectionpolicytieringpolicy): Tiering policy to automatically move RPs to another tier.
Key is Target Tier, defined in RecoveryPointTierType enum.
Tiering policy specifies the criteria to move RP to the target tier.

## SubProtectionPolicyTieringPolicy
### Properties
### Additional Properties
* **Additional Properties Type**: [TieringPolicy](#tieringpolicy)

## TieringPolicy
### Properties
* **duration**: int: Number of days/weeks/months/years to retain backups in current tier before tiering.
Used only if TieringMode is set to TierAfter
* **durationType**: 'Days' | 'Invalid' | 'Months' | 'Weeks' | 'Years' | string: Retention duration type: days/weeks/months/years
Used only if TieringMode is set to TierAfter
* **tieringMode**: 'DoNotTier' | 'Invalid' | 'TierAfter' | 'TierRecommended' | string: Tiering Mode to control automatic tiering of recovery points. Supported values are:
1. TierRecommended: Tier all recovery points recommended to be tiered
2. TierAfter: Tier all recovery points after a fixed period, as specified in duration + durationType below.
3. DoNotTier: Do not tier any recovery points

## VaultJobErrorInfo
### Properties
* **errorCode**: int: Error code.
* **errorString**: string: Localized error string.
* **recommendations**: string[]: List of localized recommendations for above error code.

## VaultJobExtendedInfo
### Properties
* **propertyBag**: [VaultJobExtendedInfoPropertyBag](#vaultjobextendedinfopropertybag): Job properties.

## VaultJobExtendedInfoPropertyBag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WeeklyRetentionFormat
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of the week.
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Invalid' | 'Last' | 'Second' | 'Third'[]: List of weeks of month.

## WeeklyRetentionSchedule
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of week for weekly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of retention Policy.
* **retentionTimes**: string[]: Retention times of retention policy.

## WeeklySchedule
### Properties
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **scheduleRunTimes**: string[]: List of times of day this schedule has to be run.

## WorkloadInquiryDetails
### Properties
* **inquiryValidation**: [InquiryValidation](#inquiryvalidation): Inquiry validation such as permissions and other backup validations.
* **itemCount**: int: Contains the protectable item Count inside this Container.
* **type**: string: Type of the Workload such as SQL, Oracle etc.

## YearlyRetentionSchedule
### Properties
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'Invalid' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]: List of months of year of yearly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of retention Policy.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format for yearly retention policy.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly' | string: Retention schedule format for yearly retention policy.
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format for yearly retention policy.
* **retentionTimes**: string[]: Retention times of retention policy.

