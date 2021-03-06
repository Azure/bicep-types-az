# Microsoft.RecoveryServices @ 2019-05-13

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2019-05-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-13' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectedItem](#protecteditem): Base class for backup items.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupPolicies@2019-05-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-13' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionPolicy](#protectionpolicy): Base class for backup policy. Workload-specific backup policies are derived from this class.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## ProtectedItem
* **Discriminator**: protectedItemType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB': Backup management type to execute the current job.
* **backupSetName**: string: Name of the backup set the backup item belongs to
* **containerName**: string: Unique name of container
* **createMode**: 'Default' | 'Invalid' | 'Recover': Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
* **deferredDeleteTimeInUTC**: string: Time for deferred deletion in UTC
* **deferredDeleteTimeRemaining**: string: Time remaining before the DS marked for deferred delete is permanently deleted
* **isDeferredDeleteScheduleUpcoming**: bool: Flag to identify whether the deferred deleted DS is to be purged soon
* **isRehydrate**: bool: Flag to identify that deferred deleted DS is to be moved into Pause state
* **isScheduledForDeferredDelete**: bool: Flag to identify whether the DS is scheduled for deferred delete
* **lastRecoveryPoint**: string: Timestamp when the last (latest) backup copy was created for this backup item.
* **policyId**: string: ID of the backup policy with which this item is backed up.
* **sourceResourceId**: string: ARM ID of the resource to be backed up.
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM': Type of workload this item represents.
### AzureFileshareProtectedItem
#### Properties
* **extendedInfo**: [AzureFileshareProtectedItemExtendedInfo](#azurefileshareprotecteditemextendedinfo): Additional information about Azure File Share backup item.
* **friendlyName**: string: Friendly name of the fileshare represented by this backup item.
* **healthStatus**: 'ActionRequired' | 'ActionSuggested' | 'Invalid' | 'Passed': backups running status for this backup item.
* **lastBackupStatus**: string: Last backup operation status. Possible values: Healthy, Unhealthy.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item.
* **protectionStatus**: string: Backup status of this backup item.

### AzureVmWorkloadSAPAseDatabaseProtectedItem
#### Properties
* **protectedItemType**: 'AzureVmWorkloadSAPAseDatabase' (Required): backup item type.

### AzureVmWorkloadSAPHanaDatabaseProtectedItem
#### Properties
* **protectedItemType**: 'AzureVmWorkloadSAPHanaDatabase' (Required): backup item type.

### AzureVmWorkloadSQLDatabaseProtectedItem
#### Properties
* **protectedItemType**: 'AzureVmWorkloadSQLDatabase' (Required): backup item type.

### DPMProtectedItem
#### Properties
* **backupEngineName**: string: Backup Management server protecting this backup item
* **extendedInfo**: [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo): Additional information of DPM Protected item.
* **friendlyName**: string: Friendly name of the managed item
* **protectedItemType**: 'DPMProtectedItem' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of the backed up item.

### GenericProtectedItem
#### Properties
* **fabricName**: string: Name of this backup item's fabric.
* **friendlyName**: string: Friendly name of the container.
* **policyState**: string: Indicates consistency of policy object and policy applied to this backup item.
* **protectedItemId**: int: Data Plane Service ID of the protected item.
* **protectedItemType**: 'GenericProtectedItem' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of this backup item.
* **sourceAssociations**: [GenericProtectedItemSourceAssociations](#genericprotecteditemsourceassociations): Loosely coupled (type, value) associations (example - parent of a protected item)

### MabFileFolderProtectedItem
#### Properties
* **computerName**: string: Name of the computer associated with this backup item.
* **deferredDeleteSyncTimeInUTC**: int: Sync time for deferred deletion in UTC
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo): Additional information on the backed up item.
* **friendlyName**: string: Friendly name of this backup item.
* **lastBackupStatus**: string: Status of last backup operation.
* **lastBackupTime**: string: Timestamp of the last backup operation on this backup item.
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required): backup item type.
* **protectionState**: string: Protected, ProtectionStopped, IRPending or ProtectionError

### AzureIaaSClassicComputeVMProtectedItem
#### Properties
* **protectedItemType**: 'Microsoft.ClassicCompute/virtualMachines' (Required): backup item type.

### AzureIaaSComputeVMProtectedItem
#### Properties
* **protectedItemType**: 'Microsoft.Compute/virtualMachines' (Required): backup item type.

### AzureSqlProtectedItem
#### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo): Additional information on Azure Sql specific protected item.
* **protectedItemDataId**: string: Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services.
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required): backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': Backup state of the backed up item.


## AzureFileshareProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this item in the service.
* **policyState**: string: Indicates consistency of policy object and policy applied to this backup item.
* **recoveryPointCount**: int: Number of available backup copies associated with this backup item.
* **resourceState**: string (ReadOnly): Indicates the state of this resource. Possible values are from enum ResourceState {Invalid, Active, SoftDeleted, Deleted}
* **resourceStateSyncTime**: string (ReadOnly): The resource state sync time for this backup item.

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

## GenericProtectedItemSourceAssociations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MabFileFolderProtectedItemExtendedInfo
### Properties
* **lastRefreshedAt**: string: Last time when the agent data synced to service.
* **oldestRecoveryPoint**: string: The oldest backup copy available.
* **recoveryPointCount**: int: Number of backup copies associated with the backup item.

## AzureSqlProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this item in the service.
* **policyState**: string: State of the backup policy associated with this backup item.
* **recoveryPointCount**: int: Number of available backup copies associated with this backup item.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionPolicy
* **Discriminator**: backupManagementType

### Base Properties
* **protectedItemsCount**: int: Number of items associated with this policy.
### AzureIaaSVMProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureIaasVM' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **instantRpRetentionRangeInDays**: int: Instant RP retention policy range in days
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

### AzureSqlProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureSql' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.

### AzureFileShareProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureStorage' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM': Type of workload for the backup management

### AzureVmWorkloadProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureWorkload' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **makePolicyConsistent**: bool: Fix the policy inconsistency
* **settings**: [Settings](#settings): Common settings field for backup management
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]: List of sub-protection policies which includes schedule and retention
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM': Type of workload for the backup management

### GenericProtectionPolicy
#### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **fabricName**: string: Name of this policy's fabric.
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]: List of sub-protection policies which includes schedule and retention
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

### MabProtectionPolicy
#### Properties
* **backupManagementType**: 'MAB' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.


## RetentionPolicy
* **Discriminator**: retentionPolicyType

### Base Properties
### LongTermRetentionPolicy
#### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule): Daily retention schedule.
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule): Monthly retention schedule.
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule): Weekly retention schedule.
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule): Yearly retention schedule.

### SimpleRetentionPolicy
#### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.


## DailyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionTimes**: string[]: Retention times of retention policy.

## RetentionDuration
### Properties
* **count**: int: Count of duration types. Retention duration is obtained by the counting the duration type Count times.
For example, when Count = 3 and DurationType = Weeks, retention duration will be three weeks.
* **durationType**: 'Days' | 'Invalid' | 'Months' | 'Weeks' | 'Years': Retention duration type of retention policy.

## MonthlyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly': Retention schedule format type for monthly retention policy.
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
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly': Retention schedule format type for monthly retention policy.
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format.
* **retentionTimes**: string[]: Retention times of retention policy.

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
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of week this schedule has to be run.
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly': Frequency of the schedule operation of this policy.
* **scheduleRunTimes**: string[]: List of times of day this schedule has to be run.
* **scheduleWeeklyFrequency**: int: At every number weeks this schedule has to be run.


## Settings
### Properties
* **isCompression**: bool: Workload compression flag. This has been added so that 'isSqlCompression'
will be deprecated once clients upgrade to consider this flag.
* **issqlcompression**: bool: SQL compression flag
* **timeZone**: string: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

## SubProtectionPolicy
### Properties
* **policyType**: 'CopyOnlyFull' | 'Differential' | 'Full' | 'Invalid' | 'Log': Type of backup policy type
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Base class for backup schedule.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

