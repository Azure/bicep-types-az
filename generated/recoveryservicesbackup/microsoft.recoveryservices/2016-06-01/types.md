# Microsoft.RecoveryServices @ 2016-06-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectedItem](#protecteditem): The base class for backup items.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupPolicies@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionPolicy](#protectionpolicy): The base class for a backup policy. Workload-specific backup policies are derived from this class.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## AzureSqlProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this item in the service.
* **policyState**: string: The state of the backup policy associated with this backup item.
* **recoveryPointCount**: int: The number of available backup copies for this backup item.

## DailyRetentionFormat
### Properties
* **daysOfTheMonth**: [Day](#day)[]: List of days of the month.

## DailyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): The retention duration of retention policy.
* **retentionTimes**: string[]: The retention times of retention policy.

## Day
### Properties
* **date**: int
* **isLast**: bool

## MabFileFolderProtectedItemExtendedInfo
### Properties
* **lastRefreshedAt**: string: The last day and time the agent synced with the service.
* **oldestRecoveryPoint**: string: The oldest backup copy available.
* **recoveryPointCount**: int: The number of backup copies associated with the backup item.

## MonthlyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of the retention policy.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format for the monthly retention policy.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly': Retention schedule format type for monthly retention policy.
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format for the monthly retention policy.
* **retentionTimes**: string[]: Retention times of the retention policy.

## ProtectedItem
* **Discriminator**: protectedItemType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'DPM' | 'Invalid' | 'MAB': The backup management type associated with the backup item.
* **lastRecoveryPoint**: string: The timestamp when the most recent backup copy was created for this backup item.
* **policyId**: string: The ID of the backup policy associated with this backup item.
* **sourceResourceId**: string: The ID of the resource to be backed up.
* **workloadType**: 'AzureSqlDb' | 'DPMUnknown' | 'Exchange' | 'FileFolder' | 'Invalid' | 'SQLDB' | 'Sharepoint' | 'VM': The workload type for this item.
### MabFileFolderProtectedItem
#### Properties
* **computerName**: string: The name of the computer associated with this backup item.
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo): Additional information for this backup item.
* **friendlyName**: string: The friendly name of this backup item.
* **isScheduledForDeferredDelete**: bool
* **lastBackupStatus**: string: The status of last backup operation.
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required): The backup item type.
* **protectionState**: string: The states for this property are: Protected, ProtectionStopped, IRPending, or ProtectionError.

### AzureIaaSClassicComputeVMProtectedItem
#### Properties
* **protectedItemType**: 'Microsoft.ClassicCompute/virtualMachines' (Required): The backup item type.

### AzureIaaSComputeVMProtectedItem
#### Properties
* **protectedItemType**: 'Microsoft.Compute/virtualMachines' (Required): The backup item type.

### AzureSqlProtectedItem
#### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo): Additional information for this backup item.
* **protectedItemDataId**: string: The internal ID of a backup item. The internal ID is used by the Azure SQL Backup engine to contact Recovery Services.
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required): The backup item type.
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': The backup state of the backup item.


## ProtectionPolicy
* **Discriminator**: backupManagementType

### Base Properties
* **protectedItemsCount**: int: The number of items associated with this policy.
### AzureIaaSVMProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureIaasVM' (Required): This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The retention policy with the details on backup copy retention ranges.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): The backup schedule specified as part of backup policy.

### AzureSqlProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureSql' (Required): This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The retention policy details.

### MabProtectionPolicy
#### Properties
* **backupManagementType**: 'MAB' (Required): This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The details specified in the Retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): The schedule specified in the backup policy.


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
* **count**: int: Count of the duration types. Retention duration is determined by the combining the Count times and durationType. 
   For example, if Count = 3 and durationType = Weeks, then the retention duration is three weeks.
* **durationType**: 'Days' | 'Invalid' | 'Months' | 'Weeks' | 'Years': The retention duration type of the retention policy.

## RetentionPolicy
* **Discriminator**: retentionPolicyType

### Base Properties
### LongTermRetentionPolicy
#### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule): Daily retention schedule of the backup policy.
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule): Monthly retention schedule of the backup policy.
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required): This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule): Weekly retention schedule of the backup policy.
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule): Yearly retention schedule of the backup policy.

### SimpleRetentionPolicy
#### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of the protection policy.
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required): This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.


## SchedulePolicy
* **Discriminator**: schedulePolicyType

### Base Properties
### LongTermSchedulePolicy
#### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required): This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### SimpleSchedulePolicy
#### Properties
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required): This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: This list is the days of the week when the schedule runs.
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly': Defines the frequency interval (daily or weekly) for the schedule policy.
* **scheduleRunTimes**: string[]: List of times, during a day, when the schedule runs.
* **scheduleWeeklyFrequency**: int: The number of times per week the schedule runs.


## WeeklyRetentionFormat
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of the week.
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third'[]: List of weeks of the month.

## WeeklyRetentionSchedule
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of the days of the week for the weekly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of retention policy.
* **retentionTimes**: string[]: Retention times of the retention policy.

## YearlyRetentionSchedule
### Properties
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'Invalid' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]: List of the months of year for the yearly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration for the retention policy.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format for the yearly retention policy.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly': Retention schedule format for the yearly retention policy.
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format for the yearly retention policy.
* **retentionTimes**: string[]: Retention times for the retention policy.

