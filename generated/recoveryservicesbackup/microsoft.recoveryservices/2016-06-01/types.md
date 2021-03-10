# Microsoft.RecoveryServices @ 2016-06-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProtectedItem](#protecteditem)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupPolicies@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProtectionPolicy](#protectionpolicy)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant)

## ProtectedItem
* **Discriminator**: protectedItemType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'DPM' | 'Invalid' | 'MAB'
* **lastRecoveryPoint**: string
* **policyId**: string
* **sourceResourceId**: string
* **workloadType**: 'AzureSqlDb' | 'DPMUnknown' | 'Exchange' | 'FileFolder' | 'Invalid' | 'SQLDB' | 'Sharepoint' | 'VM'
### MabFileFolderProtectedItem
#### Properties
* **computerName**: string
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo)
* **friendlyName**: string
* **isScheduledForDeferredDelete**: bool
* **lastBackupStatus**: string
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required)
* **protectionState**: string

### AzureIaaSClassicComputeVMProtectedItem
#### Properties
* **protectedItemType**: 'Microsoft.ClassicCompute/virtualMachines' (Required)

### AzureIaaSComputeVMProtectedItem
#### Properties
* **protectedItemType**: 'Microsoft.Compute/virtualMachines' (Required)

### AzureSqlProtectedItem
#### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo)
* **protectedItemDataId**: string
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required)
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'


## MabFileFolderProtectedItem
### Properties
* **computerName**: string
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo)
* **friendlyName**: string
* **isScheduledForDeferredDelete**: bool
* **lastBackupStatus**: string
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required)
* **protectionState**: string

## MabFileFolderProtectedItemExtendedInfo
### Properties
* **lastRefreshedAt**: string
* **oldestRecoveryPoint**: string
* **recoveryPointCount**: int

## AzureIaaSClassicComputeVMProtectedItem
### Properties
* **protectedItemType**: 'Microsoft.ClassicCompute/virtualMachines' (Required)

## AzureIaaSComputeVMProtectedItem
### Properties
* **protectedItemType**: 'Microsoft.Compute/virtualMachines' (Required)

## AzureSqlProtectedItem
### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo)
* **protectedItemDataId**: string
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required)
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'

## AzureSqlProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyState**: string
* **recoveryPointCount**: int

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionPolicy
* **Discriminator**: backupManagementType

### Base Properties
* **protectedItemsCount**: int
### AzureIaaSVMProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureIaasVM' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)

### AzureSqlProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureSql' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)

### MabProtectionPolicy
#### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)


## AzureIaaSVMProtectionPolicy
### Properties
* **backupManagementType**: 'AzureIaasVM' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)

## RetentionPolicy
* **Discriminator**: retentionPolicyType

### Base Properties
### LongTermRetentionPolicy
#### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule)
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule)
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required)
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule)
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule)

### SimpleRetentionPolicy
#### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required)


## LongTermRetentionPolicy
### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule)
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule)
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required)
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule)
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule)

## DailyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionTimes**: string[]

## RetentionDuration
### Properties
* **count**: int
* **durationType**: 'Days' | 'Invalid' | 'Months' | 'Weeks' | 'Years'

## MonthlyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat)
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly'
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat)
* **retentionTimes**: string[]

## DailyRetentionFormat
### Properties
* **daysOfTheMonth**: [Day](#day)[]

## Day
### Properties
* **date**: int
* **isLast**: bool

## WeeklyRetentionFormat
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third'[]

## WeeklyRetentionSchedule
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionTimes**: string[]

## YearlyRetentionSchedule
### Properties
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'Invalid' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat)
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly'
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat)
* **retentionTimes**: string[]

## SimpleRetentionPolicy
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required)

## SchedulePolicy
* **Discriminator**: schedulePolicyType

### Base Properties
### LongTermSchedulePolicy
#### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required)

### SimpleSchedulePolicy
#### Properties
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required)
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly'
* **scheduleRunTimes**: string[]
* **scheduleWeeklyFrequency**: int


## LongTermSchedulePolicy
### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required)

## SimpleSchedulePolicy
### Properties
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required)
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly'
* **scheduleRunTimes**: string[]
* **scheduleWeeklyFrequency**: int

## AzureSqlProtectionPolicy
### Properties
* **backupManagementType**: 'AzureSql' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)

## MabProtectionPolicy
### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

