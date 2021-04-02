# Microsoft.RecoveryServices @ 2019-06-15

## Resource Microsoft.RecoveryServices/vaults/backupconfig@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: 'vaultconfig' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupResourceVaultConfig](#backupresourcevaultconfig): Backup resource vault config details.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupconfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectedItem](#protecteditem): Base class for backup items.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupPolicies@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionPolicy](#protectionpolicy): Base class for backup policy. Workload-specific backup policies are derived from this class.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## BackupResourceVaultConfig
### Properties
* **enhancedSecurityState**: 'Disabled' | 'Enabled' | 'Invalid': Enabled or Disabled. Possible values include: 'Invalid', 'Enabled', 'Disabled'
* **softDeleteFeatureState**: 'Disabled' | 'Enabled' | 'Invalid': Soft Delete feature state. Possible values include: 'Invalid', 'Enabled', 'Disabled'
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant': Storage type. Possible values include: 'Invalid', 'GeoRedundant', 'LocallyRedundant'
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant': Storage type. Possible values include: 'Invalid', 'GeoRedundant', 'LocallyRedundant'
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked': Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked. Possible values include: 'Invalid', 'Locked', 'Unlocked'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectedItem
* **Discriminator**: protectedItemType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup' | 'DPM' | 'Invalid' | 'MAB': Type of backup management for the backed up item. Possible values include: 'Invalid', 'AzureIaasVM', 'MAB', 'DPM', 'AzureBackupServer', 'AzureSql', 'AzureStorage', 'AzureWorkload', 'DefaultBackup'
* **backupSetName**: string: Name of the backup set the backup item belongs to
* **containerName**: string: Unique name of container
* **createMode**: 'Default' | 'Invalid' | 'Recover': Create mode to indicate recovery of existing soft deleted data source or creation of new data source. Possible values include: 'Invalid', 'Default', 'Recover'
* **deferredDeleteTimeInUTC**: string: Time for deferred deletion in UTC
* **deferredDeleteTimeRemaining**: string: Time remaining before the DS marked for deferred delete is permanently deleted
* **isDeferredDeleteScheduleUpcoming**: bool: Flag to identify whether the deferred deleted DS is to be purged soon
* **isRehydrate**: bool: Flag to identify that deferred deleted DS is to be moved into Pause state
* **isScheduledForDeferredDelete**: bool: Flag to identify whether the DS is scheduled for deferred delete
* **lastRecoveryPoint**: string: Timestamp when the last (latest) backup copy was created for this backup item.
* **policyId**: string: ID of the backup policy with which this item is backed up.
* **sourceResourceId**: string: ARM ID of the resource to be backed up.
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM': Type of workload this item represents. Possible values include: 'Invalid', 'VM', 'FileFolder', 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'VMwareVM', 'SystemState', 'Client', 'GenericDataSource', 'SQLDataBase', 'AzureFileShare', 'SAPHanaDatabase', 'SAPAseDatabase'
### AzureFileShareProtectedItem
#### Properties
* **extendedInfo**: [AzureFileshareProtectedItemExtendedInfo](#azurefileshareprotecteditemextendedinfo): Additional information about Azure File Share backup item.
* **friendlyName**: string: Friendly name of the fileshare represented by this backup item.
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails): Health details of different KPIs
* **lastBackupStatus**: string: Last backup operation status. Possible values: Healthy, Unhealthy.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required): Azure File Share workload-specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **protectionStatus**: string: Backup status of this backup item.

### AzureIaaSVMProtectedItem
#### Properties
* **extendedInfo**: [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo): Additional information on Azure IaaS VM specific backup item.
* **extendedProperties**: [ExtendedProperties](#extendedproperties): Extended Properties for Azure IaasVM Backup.
* **friendlyName**: string: Friendly name of the VM represented by this backup item.
* **healthDetails**: [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)[]: Health details on this backup item.
* **healthStatus**: 'ActionRequired' | 'ActionSuggested' | 'Invalid' | 'Passed': Health status of protected item. Possible values include: 'Passed', 'ActionRequired', 'ActionSuggested', 'Invalid'
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails): Health details of different KPIs
* **lastBackupStatus**: string: Last backup operation status.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemDataId**: string: Data ID of the protected item.
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required): IaaS VM workload-specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **protectionStatus**: string: Backup status of this backup item.
* **virtualMachineId**: string: Fully qualified ARM ID of the virtual machine represented by this item.

### AzureVmWorkloadProtectedItem
#### Properties
* **extendedInfo**: [AzureVmWorkloadProtectedItemExtendedInfo](#azurevmworkloadprotecteditemextendedinfo): Additional information on Azure Workload for SQL specific backup item.
* **friendlyName**: string: Friendly name of the DB represented by this backup item.
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails): Health details of different KPIs
* **lastBackupErrorDetail**: [ErrorDetail](#errordetail): Error Detail class which encapsulates Code, Message and Recommendations.
* **lastBackupStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'Unhealthy': Last backup operation status. Possible values: Healthy, Unhealthy. Possible values include: 'Invalid', 'Healthy', 'Unhealthy', 'IRPending'
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **parentName**: string: Parent name of the DB such as Instance or Availability Group.
* **parentType**: string: Parent type of protected item, example: for a DB, standalone server or distributed
* **protectedItemDataSourceId**: string: Data ID of the protected item.
* **protectedItemHealthStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'NotReachable' | 'Unhealthy': Health status of the backup item, evaluated based on last heartbeat received. Possible values include: 'Invalid', 'Healthy', 'Unhealthy', 'NotReachable', 'IRPending'
* **protectedItemType**: 'AzureVmWorkloadProtectedItem' (Required): Azure VM workload-specific protected item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **protectionStatus**: string: Backup status of this backup item.
* **serverName**: string: Host/Cluster Name for instance or AG

### DPMProtectedItem
#### Properties
* **backupEngineName**: string: Backup Management server protecting this backup item
* **extendedInfo**: [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo): Additional information of DPM Protected item.
* **friendlyName**: string: Friendly name of the managed item
* **protectedItemType**: 'DPMProtectedItem' (Required): Additional information on Backup engine specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Protection state of the backup engine. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'

### GenericProtectedItem
#### Properties
* **fabricName**: string: Name of this backup item's fabric.
* **friendlyName**: string: Friendly name of the container.
* **policyState**: string: Indicates consistency of policy object and policy applied to this backup item.
* **protectedItemId**: int: Data Plane Service ID of the protected item.
* **protectedItemType**: 'GenericProtectedItem' (Required): Base class for backup items.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **sourceAssociations**: [Dictionary<string,String>](#dictionarystringstring): Loosely coupled (type, value) associations (example - parent of a protected item)

### MabFileFolderProtectedItem
#### Properties
* **computerName**: string: Name of the computer associated with this backup item.
* **deferredDeleteSyncTimeInUTC**: int: Sync time for deferred deletion in UTC
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo): Additional information on the backed up item.
* **friendlyName**: string: Friendly name of this backup item.
* **lastBackupStatus**: string: Status of last backup operation.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required): MAB workload-specific backup item.
* **protectionState**: string: Protected, ProtectionStopped, IRPending or ProtectionError

### Microsoft.Sql/servers/databases
#### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo): Additional information on Azure Sql specific protected item.
* **protectedItemDataId**: string: Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services.
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required): Azure SQL workload-specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of the backed up item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'


## AzureFileShareProtectedItem
### Properties
* **extendedInfo**: [AzureFileshareProtectedItemExtendedInfo](#azurefileshareprotecteditemextendedinfo): Additional information about Azure File Share backup item.
* **friendlyName**: string: Friendly name of the fileshare represented by this backup item.
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails): Health details of different KPIs
* **lastBackupStatus**: string: Last backup operation status. Possible values: Healthy, Unhealthy.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required): Azure File Share workload-specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **protectionStatus**: string: Backup status of this backup item.

## AzureFileshareProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this item in the service.
* **policyState**: string: Indicates consistency of policy object and policy applied to this backup item.
* **recoveryPointCount**: int: Number of available backup copies associated with this backup item.
* **resourceState**: string (ReadOnly): Indicates the state of this resource. Possible values are from enum ResourceState {Invalid, Active, SoftDeleted, Deleted}
* **resourceStateSyncTime**: string (ReadOnly): The resource state sync time for this backup item.

## Dictionary<string,KPIResourceHealthDetails>
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## KPIResourceHealthDetails
### Properties
* **resourceHealthDetails**: [ResourceHealthDetails](#resourcehealthdetails)[]: Resource Health Status
* **resourceHealthStatus**: 'Healthy' | 'Invalid' | 'PersistentDegraded' | 'PersistentUnhealthy' | 'TransientDegraded' | 'TransientUnhealthy': Resource Health Status. Possible values include: 'Healthy', 'TransientDegraded', 'PersistentDegraded', 'TransientUnhealthy', 'PersistentUnhealthy', 'Invalid'

## ResourceHealthDetails
### Properties
* **code**: int (ReadOnly): Health Code
* **message**: string (ReadOnly): Health Message
* **recommendations**: string[] (ReadOnly): Health Recommended Actions
* **title**: string (ReadOnly): Health Title

## AzureIaaSVMProtectedItem
### Properties
* **extendedInfo**: [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo): Additional information on Azure IaaS VM specific backup item.
* **extendedProperties**: [ExtendedProperties](#extendedproperties): Extended Properties for Azure IaasVM Backup.
* **friendlyName**: string: Friendly name of the VM represented by this backup item.
* **healthDetails**: [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)[]: Health details on this backup item.
* **healthStatus**: 'ActionRequired' | 'ActionSuggested' | 'Invalid' | 'Passed': Health status of protected item. Possible values include: 'Passed', 'ActionRequired', 'ActionSuggested', 'Invalid'
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails): Health details of different KPIs
* **lastBackupStatus**: string: Last backup operation status.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemDataId**: string: Data ID of the protected item.
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required): IaaS VM workload-specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **protectionStatus**: string: Backup status of this backup item.
* **virtualMachineId**: string: Fully qualified ARM ID of the virtual machine represented by this item.

## AzureIaaSVMProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this backup item.
* **policyInconsistent**: bool: Specifies if backup policy associated with the backup item is inconsistent.
* **recoveryPointCount**: int: Number of backup copies available for this backup item.

## ExtendedProperties
### Properties
* **diskExclusionProperties**: [DiskExclusionProperties](#diskexclusionproperties):

## DiskExclusionProperties
### Properties
* **diskLunList**: int[]: List of Disks' Logical Unit Numbers (LUN) to be used for VM Protection.
* **isInclusionList**: bool: Flag to indicate whether DiskLunList is to be included/ excluded from backup.

## AzureIaaSVMHealthDetails
### Properties
* **code**: int (ReadOnly): Health Code
* **message**: string (ReadOnly): Health Message
* **recommendations**: string[] (ReadOnly): Health Recommended Actions
* **title**: string (ReadOnly): Health Title

## Dictionary<string,KPIResourceHealthDetails>
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## AzureVmWorkloadProtectedItem
### Properties
* **extendedInfo**: [AzureVmWorkloadProtectedItemExtendedInfo](#azurevmworkloadprotecteditemextendedinfo): Additional information on Azure Workload for SQL specific backup item.
* **friendlyName**: string: Friendly name of the DB represented by this backup item.
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails): Health details of different KPIs
* **lastBackupErrorDetail**: [ErrorDetail](#errordetail): Error Detail class which encapsulates Code, Message and Recommendations.
* **lastBackupStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'Unhealthy': Last backup operation status. Possible values: Healthy, Unhealthy. Possible values include: 'Invalid', 'Healthy', 'Unhealthy', 'IRPending'
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **parentName**: string: Parent name of the DB such as Instance or Availability Group.
* **parentType**: string: Parent type of protected item, example: for a DB, standalone server or distributed
* **protectedItemDataSourceId**: string: Data ID of the protected item.
* **protectedItemHealthStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'NotReachable' | 'Unhealthy': Health status of the backup item, evaluated based on last heartbeat received. Possible values include: 'Invalid', 'Healthy', 'Unhealthy', 'NotReachable', 'IRPending'
* **protectedItemType**: 'AzureVmWorkloadProtectedItem' (Required): Azure VM workload-specific protected item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **protectionStatus**: string: Backup status of this backup item.
* **serverName**: string: Host/Cluster Name for instance or AG

## AzureVmWorkloadProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this backup item.
* **policyState**: string: Indicates consistency of policy object and policy applied to this backup item.
* **recoveryPointCount**: int: Number of backup copies available for this backup item.

## Dictionary<string,KPIResourceHealthDetails>
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## ErrorDetail
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error Message related to the Code.
* **recommendations**: string[] (ReadOnly): List of recommendation strings.

## DPMProtectedItem
### Properties
* **backupEngineName**: string: Backup Management server protecting this backup item
* **extendedInfo**: [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo): Additional information of DPM Protected item.
* **friendlyName**: string: Friendly name of the managed item
* **protectedItemType**: 'DPMProtectedItem' (Required): Additional information on Backup engine specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Protection state of the backup engine. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'

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
* **protectableObjectLoadPath**: [Dictionary<string,String>](#dictionarystringstring): Attribute to provide information on various DBs.
* **protected**: bool: To check if backup item is disk protected.
* **protectionGroupName**: string: Protection group name of the backup item.
* **recoveryPointCount**: int: cloud recovery point count.
* **totalDiskStorageSizeInBytes**: string: total Disk storage in bytes.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GenericProtectedItem
### Properties
* **fabricName**: string: Name of this backup item's fabric.
* **friendlyName**: string: Friendly name of the container.
* **policyState**: string: Indicates consistency of policy object and policy applied to this backup item.
* **protectedItemId**: int: Data Plane Service ID of the protected item.
* **protectedItemType**: 'GenericProtectedItem' (Required): Base class for backup items.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **sourceAssociations**: [Dictionary<string,String>](#dictionarystringstring): Loosely coupled (type, value) associations (example - parent of a protected item)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MabFileFolderProtectedItem
### Properties
* **computerName**: string: Name of the computer associated with this backup item.
* **deferredDeleteSyncTimeInUTC**: int: Sync time for deferred deletion in UTC
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo): Additional information on the backed up item.
* **friendlyName**: string: Friendly name of this backup item.
* **lastBackupStatus**: string: Status of last backup operation.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required): MAB workload-specific backup item.
* **protectionState**: string: Protected, ProtectionStopped, IRPending or ProtectionError

## MabFileFolderProtectedItemExtendedInfo
### Properties
* **lastRefreshedAt**: string: Last time when the agent data synced to service.
* **oldestRecoveryPoint**: string: The oldest backup copy available.
* **recoveryPointCount**: int: Number of backup copies associated with the backup item.

## Microsoft.Sql/servers/databases
### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo): Additional information on Azure Sql specific protected item.
* **protectedItemDataId**: string: Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services.
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required): Azure SQL workload-specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of the backed up item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'

## AzureSqlProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this item in the service.
* **policyState**: string: State of the backup policy associated with this backup item.
* **recoveryPointCount**: int: Number of available backup copies associated with this backup item.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionPolicy
* **Discriminator**: backupManagementType
### Base Properties
* **protectedItemsCount**: int: Number of items associated with this policy.
### AzureIaasVM
#### Properties
* **backupManagementType**: 'AzureIaasVM' (Required): IaaS VM workload-specific backup policy.
* **instantRPDetails**: [InstantRPAdditionalDetails](#instantrpadditionaldetails):
* **instantRpRetentionRangeInDays**: int: Instant RP retention policy range in days
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

### AzureSql
#### Properties
* **backupManagementType**: 'AzureSql' (Required): Azure SQL workload-specific backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.

### AzureStorage
#### Properties
* **backupManagementType**: 'AzureStorage' (Required): AzureStorage backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM': Type of workload for the backup management. Possible values include: 'Invalid', 'VM', 'FileFolder', 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'VMwareVM', 'SystemState', 'Client', 'GenericDataSource', 'SQLDataBase', 'AzureFileShare', 'SAPHanaDatabase', 'SAPAseDatabase'

### AzureWorkload
#### Properties
* **backupManagementType**: 'AzureWorkload' (Required): Azure VM (Mercury) workload-specific backup policy.
* **makePolicyConsistent**: bool: Fix the policy inconsistency
* **settings**: [Settings](#settings): Common settings field for backup management
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]: List of sub-protection policies which includes schedule and retention
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM': Type of workload for the backup management. Possible values include: 'Invalid', 'VM', 'FileFolder', 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'VMwareVM', 'SystemState', 'Client', 'GenericDataSource', 'SQLDataBase', 'AzureFileShare', 'SAPHanaDatabase', 'SAPAseDatabase'

### GenericProtectionPolicy
#### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required): Azure VM (Mercury) workload-specific backup policy.
* **fabricName**: string: Name of this policy's fabric.
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]: List of sub-protection policies which includes schedule and retention
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

### MAB
#### Properties
* **backupManagementType**: 'MAB' (Required): Mab container-specific backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.


## AzureIaasVM
### Properties
* **backupManagementType**: 'AzureIaasVM' (Required): IaaS VM workload-specific backup policy.
* **instantRPDetails**: [InstantRPAdditionalDetails](#instantrpadditionaldetails):
* **instantRpRetentionRangeInDays**: int: Instant RP retention policy range in days
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

## InstantRPAdditionalDetails
### Properties
* **azureBackupRGNamePrefix**: string:
* **azureBackupRGNameSuffix**: string:

## RetentionPolicy
* **Discriminator**: retentionPolicyType
### Base Properties
### LongTermRetentionPolicy
#### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule): Daily retention schedule.
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule): Monthly retention schedule.
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required): Long term retention policy.
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule): Weekly retention schedule.
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule): Yearly retention schedule.

### SimpleRetentionPolicy
#### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required): Simple policy retention.


## LongTermRetentionPolicy
### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule): Daily retention schedule.
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule): Monthly retention schedule.
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required): Long term retention policy.
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule): Weekly retention schedule.
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule): Yearly retention schedule.

## DailyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionTimes**: string[]: Retention times of retention policy.

## RetentionDuration
### Properties
* **count**: int: Count of duration types. Retention duration is obtained by the counting the duration type Count times.
For example, when Count = 3 and DurationType = Weeks, retention duration will be three weeks.
* **durationType**: 'Days' | 'Invalid' | 'Months' | 'Weeks' | 'Years': Retention duration type of retention policy. Possible values include: 'Invalid', 'Days', 'Weeks', 'Months', 'Years'

## MonthlyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly': Retention schedule format type for monthly retention policy. Possible values include: 'Invalid', 'Daily', 'Weekly'
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format.
* **retentionTimes**: string[]: Retention times of retention policy.

## DailyRetentionFormat
### Properties
* **daysOfTheMonth**: [Day](#day)[]: List of days of the month.

## Day
### Properties
* **date**: int: Date of the month
* **isLast**: bool: Whether Date is last date of month

## WeeklyRetentionFormat
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of the week.
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Invalid' | 'Last' | 'Second' | 'Third'[]: List of weeks of month.

## WeeklyRetentionSchedule
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of week for weekly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionTimes**: string[]: Retention times of retention policy.

## YearlyRetentionSchedule
### Properties
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'Invalid' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]: List of months of year of yearly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly': Retention schedule format for yearly retention policy. Possible values include: 'Invalid', 'Daily', 'Weekly'
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format.
* **retentionTimes**: string[]: Retention times of retention policy.

## SimpleRetentionPolicy
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required): Simple policy retention.

## SchedulePolicy
* **Discriminator**: schedulePolicyType
### Base Properties
### LogSchedulePolicy
#### Properties
* **scheduleFrequencyInMins**: int: Frequency of the log schedule operation of this policy in minutes.
* **schedulePolicyType**: 'LogSchedulePolicy' (Required): Log policy schedule.

### LongTermSchedulePolicy
#### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required): Long term policy schedule.

### SimpleSchedulePolicy
#### Properties
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required): Simple policy schedule.
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of week this schedule has to be run.
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly': Frequency of the schedule operation of this policy. Possible values include: 'Invalid', 'Daily', 'Weekly'
* **scheduleRunTimes**: string[]: List of times of day this schedule has to be run.
* **scheduleWeeklyFrequency**: int: At every number weeks this schedule has to be run.


## LogSchedulePolicy
### Properties
* **scheduleFrequencyInMins**: int: Frequency of the log schedule operation of this policy in minutes.
* **schedulePolicyType**: 'LogSchedulePolicy' (Required): Log policy schedule.

## LongTermSchedulePolicy
### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required): Long term policy schedule.

## SimpleSchedulePolicy
### Properties
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required): Simple policy schedule.
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of week this schedule has to be run.
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly': Frequency of the schedule operation of this policy. Possible values include: 'Invalid', 'Daily', 'Weekly'
* **scheduleRunTimes**: string[]: List of times of day this schedule has to be run.
* **scheduleWeeklyFrequency**: int: At every number weeks this schedule has to be run.

## AzureSql
### Properties
* **backupManagementType**: 'AzureSql' (Required): Azure SQL workload-specific backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.

## AzureStorage
### Properties
* **backupManagementType**: 'AzureStorage' (Required): AzureStorage backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM': Type of workload for the backup management. Possible values include: 'Invalid', 'VM', 'FileFolder', 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'VMwareVM', 'SystemState', 'Client', 'GenericDataSource', 'SQLDataBase', 'AzureFileShare', 'SAPHanaDatabase', 'SAPAseDatabase'

## AzureWorkload
### Properties
* **backupManagementType**: 'AzureWorkload' (Required): Azure VM (Mercury) workload-specific backup policy.
* **makePolicyConsistent**: bool: Fix the policy inconsistency
* **settings**: [Settings](#settings): Common settings field for backup management
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]: List of sub-protection policies which includes schedule and retention
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM': Type of workload for the backup management. Possible values include: 'Invalid', 'VM', 'FileFolder', 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'VMwareVM', 'SystemState', 'Client', 'GenericDataSource', 'SQLDataBase', 'AzureFileShare', 'SAPHanaDatabase', 'SAPAseDatabase'

## Settings
### Properties
* **isCompression**: bool: Workload compression flag. This has been added so that 'isSqlCompression'
will be deprecated once clients upgrade to consider this flag.
* **issqlcompression**: bool: SQL compression flag
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

## SubProtectionPolicy
### Properties
* **policyType**: 'CopyOnlyFull' | 'Differential' | 'Full' | 'Invalid' | 'Log': Type of backup policy type. Possible values include: 'Invalid', 'Full', 'Differential', 'Log', 'CopyOnlyFull'
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.

## GenericProtectionPolicy
### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required): Azure VM (Mercury) workload-specific backup policy.
* **fabricName**: string: Name of this policy's fabric.
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]: List of sub-protection policies which includes schedule and retention
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

## MAB
### Properties
* **backupManagementType**: 'MAB' (Required): Mab container-specific backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

