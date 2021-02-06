# Microsoft.RecoveryServices @ 2016-06-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProtectedItem
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupPolicies@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProtectionPolicy
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant)

## ProtectedItem
* **Discriminator**: protectedItemType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'DPM' | 'Invalid' | 'MAB'
* **lastRecoveryPoint**: string
* **policyId**: string
* **sourceResourceId**: string
* **workloadType**: 'AzureSqlDb' | 'DPMUnknown' | 'Exchange' | 'FileFolder' | 'Invalid' | 'Sharepoint' | 'SQLDB' | 'VM'
### AzureIaaSVMProtectedItem
#### Properties
* **extendedInfo**: AzureIaaSVMProtectedItemExtendedInfo
* **friendlyName**: string
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **virtualMachineId**: string

### MabFileFolderProtectedItem
#### Properties
* **computerName**: string
* **extendedInfo**: MabFileFolderProtectedItemExtendedInfo
* **friendlyName**: string
* **isScheduledForDeferredDelete**: bool
* **lastBackupStatus**: string
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required)
* **protectionState**: string

### Microsoft.Sql/servers/databases
#### Properties
* **extendedInfo**: AzureSqlProtectedItemExtendedInfo
* **protectedItemDataId**: string
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'


## AzureIaaSVMProtectedItem
### Properties
* **extendedInfo**: AzureIaaSVMProtectedItemExtendedInfo
* **friendlyName**: string
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **virtualMachineId**: string

## AzureIaaSVMProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyInconsistent**: bool
* **recoveryPointCount**: int

## MabFileFolderProtectedItem
### Properties
* **computerName**: string
* **extendedInfo**: MabFileFolderProtectedItemExtendedInfo
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

## Microsoft.Sql/servers/databases
### Properties
* **extendedInfo**: AzureSqlProtectedItemExtendedInfo
* **protectedItemDataId**: string
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'

## AzureSqlProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyState**: string
* **recoveryPointCount**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionPolicy
* **Discriminator**: backupManagementType
### Base Properties
* **protectedItemsCount**: int
### AzureIaasVM
#### Properties
* **backupManagementType**: 'AzureIaasVM' (Required)
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy

### AzureSql
#### Properties
* **backupManagementType**: 'AzureSql' (Required)
* **retentionPolicy**: RetentionPolicy

### MAB
#### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy


## AzureIaasVM
### Properties
* **backupManagementType**: 'AzureIaasVM' (Required)
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy

## RetentionPolicy
* **Discriminator**: retentionPolicyType
### Base Properties
### LongTermRetentionPolicy
#### Properties
* **dailySchedule**: DailyRetentionSchedule
* **monthlySchedule**: MonthlyRetentionSchedule
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required)
* **weeklySchedule**: WeeklyRetentionSchedule
* **yearlySchedule**: YearlyRetentionSchedule

### SimpleRetentionPolicy
#### Properties
* **retentionDuration**: RetentionDuration
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required)


## LongTermRetentionPolicy
### Properties
* **dailySchedule**: DailyRetentionSchedule
* **monthlySchedule**: MonthlyRetentionSchedule
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required)
* **weeklySchedule**: WeeklyRetentionSchedule
* **yearlySchedule**: YearlyRetentionSchedule

## DailyRetentionSchedule
### Properties
* **retentionDuration**: RetentionDuration
* **retentionTimes**: string[]

## RetentionDuration
### Properties
* **count**: int
* **durationType**: 'Days' | 'Invalid' | 'Months' | 'Weeks' | 'Years'

## MonthlyRetentionSchedule
### Properties
* **retentionDuration**: RetentionDuration
* **retentionScheduleDaily**: DailyRetentionFormat
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly'
* **retentionScheduleWeekly**: WeeklyRetentionFormat
* **retentionTimes**: string[]

## DailyRetentionFormat
### Properties
* **daysOfTheMonth**: Day[]

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
* **retentionDuration**: RetentionDuration
* **retentionTimes**: string[]

## YearlyRetentionSchedule
### Properties
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'Invalid' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]
* **retentionDuration**: RetentionDuration
* **retentionScheduleDaily**: DailyRetentionFormat
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly'
* **retentionScheduleWeekly**: WeeklyRetentionFormat
* **retentionTimes**: string[]

## SimpleRetentionPolicy
### Properties
* **retentionDuration**: RetentionDuration
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

## AzureSql
### Properties
* **backupManagementType**: 'AzureSql' (Required)
* **retentionPolicy**: RetentionPolicy

## MAB
### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

