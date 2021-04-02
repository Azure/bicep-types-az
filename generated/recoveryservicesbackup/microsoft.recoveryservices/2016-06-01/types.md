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
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
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
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## ProtectedItem
* **Discriminator**: protectedItemType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'DPM' | 'Invalid' | 'MAB': The backup management type associated with the backup item. Possible values include: 'Invalid', 'AzureIaasVM', 'MAB', 'DPM', 'AzureBackupServer', 'AzureSql'
* **lastRecoveryPoint**: string: The timestamp when the most recent backup copy was created for this backup item.
* **policyId**: string: The ID of the backup policy associated with this backup item.
* **sourceResourceId**: string: The ID of the resource to be backed up.
* **workloadType**: 'AzureSqlDb' | 'DPMUnknown' | 'Exchange' | 'FileFolder' | 'Invalid' | 'Sharepoint' | 'SQLDB' | 'VM': The workload type for this item. Possible values include: 'Invalid', 'VM', 'FileFolder', 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'DPMUnknown'
### AzureIaaSVMProtectedItem
#### Properties
* **extendedInfo**: [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo): Additional information for the Azure VM (also known as IaaS VM)-specific backup item.
* **friendlyName**: string: The friendly name of the VM represented by this backup item.
* **lastBackupStatus**: string: The last backup operation status. The possible values are: Healthy or Unhealthy.
* **lastBackupTime**: string: The timestamp of the last backup operation for this backup item.
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required): This Azure VM workload-specific (also known as IaaS VM workload-specific) backup item has been backed up.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': The backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **protectionStatus**: string: The backup status of this backup item.
* **virtualMachineId**: string: The fully qualified Resource Manager ID of the virtual machine represented by this item.

### MabFileFolderProtectedItem
#### Properties
* **computerName**: string: The name of the computer associated with this backup item.
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo): Additional information for the backup item.
* **friendlyName**: string: The friendly name of this backup item.
* **isScheduledForDeferredDelete**: bool:
* **lastBackupStatus**: string: The status of last backup operation.
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required): This is a file or folder workload-specific backup item.
* **protectionState**: string: The states for this property are: Protected, ProtectionStopped, IRPending, or ProtectionError.

### Microsoft.Sql/servers/databases
#### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo): Additional information for the Azure SQL specific backup item.
* **protectedItemDataId**: string: The internal ID of a backup item. The internal ID is used by the Azure SQL Backup engine to contact Recovery Services.
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required): This is an Azure SQL workload-specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': The backup state of the backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'


## AzureIaaSVMProtectedItem
### Properties
* **extendedInfo**: [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo): Additional information for the Azure VM (also known as IaaS VM)-specific backup item.
* **friendlyName**: string: The friendly name of the VM represented by this backup item.
* **lastBackupStatus**: string: The last backup operation status. The possible values are: Healthy or Unhealthy.
* **lastBackupTime**: string: The timestamp of the last backup operation for this backup item.
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required): This Azure VM workload-specific (also known as IaaS VM workload-specific) backup item has been backed up.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': The backup state of this backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
* **protectionStatus**: string: The backup status of this backup item.
* **virtualMachineId**: string: The fully qualified Resource Manager ID of the virtual machine represented by this item.

## AzureIaaSVMProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this backup item.
* **policyInconsistent**: bool: Specifies if the backup policy associated with the backup item is inconsistent.
* **recoveryPointCount**: int: The number of backup copies available for this backup item.

## MabFileFolderProtectedItem
### Properties
* **computerName**: string: The name of the computer associated with this backup item.
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo): Additional information for the backup item.
* **friendlyName**: string: The friendly name of this backup item.
* **isScheduledForDeferredDelete**: bool:
* **lastBackupStatus**: string: The status of last backup operation.
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required): This is a file or folder workload-specific backup item.
* **protectionState**: string: The states for this property are: Protected, ProtectionStopped, IRPending, or ProtectionError.

## MabFileFolderProtectedItemExtendedInfo
### Properties
* **lastRefreshedAt**: string: The last day and time the agent synced with the service.
* **oldestRecoveryPoint**: string: The oldest backup copy available.
* **recoveryPointCount**: int: The number of backup copies associated with the backup item.

## Microsoft.Sql/servers/databases
### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo): Additional information for the Azure SQL specific backup item.
* **protectedItemDataId**: string: The internal ID of a backup item. The internal ID is used by the Azure SQL Backup engine to contact Recovery Services.
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required): This is an Azure SQL workload-specific backup item.
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped': The backup state of the backup item. Possible values include: 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'

## AzureSqlProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this item in the service.
* **policyState**: string: The state of the backup policy associated with this backup item.
* **recoveryPointCount**: int: The number of available backup copies for this backup item.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionPolicy
* **Discriminator**: backupManagementType
### Base Properties
* **protectedItemsCount**: int: The number of items associated with this policy.
### AzureIaasVM
#### Properties
* **backupManagementType**: 'AzureIaasVM' (Required): Azure VM (also known as IaaS VM) workload-specific backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): The base class for backup schedules.

### AzureSql
#### Properties
* **backupManagementType**: 'AzureSql' (Required):  The Azure SQL workload-specific backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The base class for retention policy.

### MAB
#### Properties
* **backupManagementType**: 'MAB' (Required): The backup policy for the file or folder container.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): The base class for backup schedules.


## AzureIaasVM
### Properties
* **backupManagementType**: 'AzureIaasVM' (Required): Azure VM (also known as IaaS VM) workload-specific backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): The base class for backup schedules.

## RetentionPolicy
* **Discriminator**: retentionPolicyType
### Base Properties
### LongTermRetentionPolicy
#### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule): Daily retention schedule.
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule): The monthly retention schedule.
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required): Long-term retention policy.
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule): Weekly retention schedule.
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule): Yearly retention schedule.

### SimpleRetentionPolicy
#### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required): Simple policy retention.


## LongTermRetentionPolicy
### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule): Daily retention schedule.
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule): The monthly retention schedule.
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required): Long-term retention policy.
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule): Weekly retention schedule.
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule): Yearly retention schedule.

## DailyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionTimes**: string[]: The retention times of retention policy.

## RetentionDuration
### Properties
* **count**: int: Count of the duration types. Retention duration is determined by the combining the Count times and durationType.
   For example, if Count = 3 and durationType = Weeks, then the retention duration is three weeks.
* **durationType**: 'Days' | 'Invalid' | 'Months' | 'Weeks' | 'Years': The retention duration type of the retention policy. Possible values include: 'Invalid', 'Days', 'Weeks', 'Months', 'Years'

## MonthlyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly': Retention schedule format type for monthly retention policy. Possible values include: 'Invalid', 'Daily', 'Weekly'
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format.
* **retentionTimes**: string[]: Retention times of the retention policy.

## DailyRetentionFormat
### Properties
* **daysOfTheMonth**: [Day](#day)[]: List of days of the month.

## Day
### Properties
* **date**: int:
* **isLast**: bool:

## WeeklyRetentionFormat
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of days of the week.
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third'[]: List of weeks of the month.

## WeeklyRetentionSchedule
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: List of the days of the week for the weekly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionTimes**: string[]: Retention times of the retention policy.

## YearlyRetentionSchedule
### Properties
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'Invalid' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]: List of the months of year for the yearly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly': Retention schedule format for the yearly retention policy. Possible values include: 'Invalid', 'Daily', 'Weekly'
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format.
* **retentionTimes**: string[]: Retention times for the retention policy.

## SimpleRetentionPolicy
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration.
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required): Simple policy retention.

## SchedulePolicy
* **Discriminator**: schedulePolicyType
### Base Properties
### LongTermSchedulePolicy
#### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required): Long-term policy schedule.

### SimpleSchedulePolicy
#### Properties
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required): Simple policy schedule.
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: This list is the days of the week when the schedule runs.
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly': Defines the frequency interval (daily or weekly) for the schedule policy. Possible values include: 'Invalid', 'Daily', 'Weekly'
* **scheduleRunTimes**: string[]: List of times, during a day, when the schedule runs.
* **scheduleWeeklyFrequency**: int: The number of times per week the schedule runs.


## LongTermSchedulePolicy
### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required): Long-term policy schedule.

## SimpleSchedulePolicy
### Properties
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required): Simple policy schedule.
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: This list is the days of the week when the schedule runs.
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly': Defines the frequency interval (daily or weekly) for the schedule policy. Possible values include: 'Invalid', 'Daily', 'Weekly'
* **scheduleRunTimes**: string[]: List of times, during a day, when the schedule runs.
* **scheduleWeeklyFrequency**: int: The number of times per week the schedule runs.

## AzureSql
### Properties
* **backupManagementType**: 'AzureSql' (Required):  The Azure SQL workload-specific backup policy.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The base class for retention policy.

## MAB
### Properties
* **backupManagementType**: 'MAB' (Required): The backup policy for the file or folder container.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The base class for retention policy.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): The base class for backup schedules.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

