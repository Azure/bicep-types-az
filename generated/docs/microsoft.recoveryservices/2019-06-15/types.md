# Microsoft.RecoveryServices @ 2019-06-15

## Resource Microsoft.RecoveryServices/vaults/backupconfig@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupResourceVaultConfig
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults/backupconfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProtectedItem
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupPolicies@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProtectionPolicy
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant)

## BackupResourceVaultConfig
### Properties
* **enhancedSecurityState**: 'Disabled' | 'Enabled' | 'Invalid'
* **softDeleteFeatureState**: 'Disabled' | 'Enabled' | 'Invalid'
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant'
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant'
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ProtectedItem
* **Discriminator**: protectedItemType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup' | 'DPM' | 'Invalid' | 'MAB'
* **backupSetName**: string
* **containerName**: string
* **createMode**: 'Default' | 'Invalid' | 'Recover'
* **deferredDeleteTimeInUTC**: string
* **deferredDeleteTimeRemaining**: string
* **isDeferredDeleteScheduleUpcoming**: bool
* **isRehydrate**: bool
* **isScheduledForDeferredDelete**: bool
* **lastRecoveryPoint**: string
* **policyId**: string
* **sourceResourceId**: string
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'
### AzureFileShareProtectedItem
#### Properties
* **extendedInfo**: AzureFileshareProtectedItemExtendedInfo
* **friendlyName**: string
* **kpisHealths**: Dictionary<string,KPIResourceHealthDetails>
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string

### AzureIaaSVMProtectedItem
#### Properties
* **extendedInfo**: AzureIaaSVMProtectedItemExtendedInfo
* **extendedProperties**: ExtendedProperties
* **friendlyName**: string
* **healthDetails**: AzureIaaSVMHealthDetails[]
* **healthStatus**: 'ActionRequired' | 'ActionSuggested' | 'Invalid' | 'Passed'
* **kpisHealths**: Dictionary<string,KPIResourceHealthDetails>
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemDataId**: string
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **virtualMachineId**: string

### AzureVmWorkloadProtectedItem
#### Properties
* **extendedInfo**: AzureVmWorkloadProtectedItemExtendedInfo
* **friendlyName**: string
* **kpisHealths**: Dictionary<string,KPIResourceHealthDetails>
* **lastBackupErrorDetail**: ErrorDetail
* **lastBackupStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'Unhealthy'
* **lastBackupTime**: string
* **parentName**: string
* **parentType**: string
* **protectedItemDataSourceId**: string
* **protectedItemHealthStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'NotReachable' | 'Unhealthy'
* **protectedItemType**: 'AzureVmWorkloadProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **serverName**: string

### DPMProtectedItem
#### Properties
* **backupEngineName**: string
* **extendedInfo**: DPMProtectedItemExtendedInfo
* **friendlyName**: string
* **protectedItemType**: 'DPMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'

### GenericProtectedItem
#### Properties
* **fabricName**: string
* **friendlyName**: string
* **policyState**: string
* **protectedItemId**: int
* **protectedItemType**: 'GenericProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **sourceAssociations**: Dictionary<string,String>

### MabFileFolderProtectedItem
#### Properties
* **computerName**: string
* **deferredDeleteSyncTimeInUTC**: int
* **extendedInfo**: MabFileFolderProtectedItemExtendedInfo
* **friendlyName**: string
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required)
* **protectionState**: string

### Microsoft.Sql/servers/databases
#### Properties
* **extendedInfo**: AzureSqlProtectedItemExtendedInfo
* **protectedItemDataId**: string
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'


## AzureFileShareProtectedItem
### Properties
* **extendedInfo**: AzureFileshareProtectedItemExtendedInfo
* **friendlyName**: string
* **kpisHealths**: Dictionary<string,KPIResourceHealthDetails>
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string

## AzureFileshareProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyState**: string
* **recoveryPointCount**: int
* **resourceState**: string (ReadOnly)
* **resourceStateSyncTime**: string (ReadOnly)

## Dictionary<string,KPIResourceHealthDetails>
### Additional Properties
* **Additional Properties Type**: KPIResourceHealthDetails

## KPIResourceHealthDetails
### Properties
* **resourceHealthDetails**: ResourceHealthDetails[]
* **resourceHealthStatus**: 'Healthy' | 'Invalid' | 'PersistentDegraded' | 'PersistentUnhealthy' | 'TransientDegraded' | 'TransientUnhealthy'

## ResourceHealthDetails
### Properties
* **code**: int (ReadOnly)
* **message**: string (ReadOnly)
* **recommendations**: string[] (ReadOnly)
* **title**: string (ReadOnly)

## AzureIaaSVMProtectedItem
### Properties
* **extendedInfo**: AzureIaaSVMProtectedItemExtendedInfo
* **extendedProperties**: ExtendedProperties
* **friendlyName**: string
* **healthDetails**: AzureIaaSVMHealthDetails[]
* **healthStatus**: 'ActionRequired' | 'ActionSuggested' | 'Invalid' | 'Passed'
* **kpisHealths**: Dictionary<string,KPIResourceHealthDetails>
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemDataId**: string
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **virtualMachineId**: string

## AzureIaaSVMProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyInconsistent**: bool
* **recoveryPointCount**: int

## ExtendedProperties
### Properties
* **diskExclusionProperties**: DiskExclusionProperties

## DiskExclusionProperties
### Properties
* **diskLunList**: int[]
* **isInclusionList**: bool

## AzureIaaSVMHealthDetails
### Properties
* **code**: int (ReadOnly)
* **message**: string (ReadOnly)
* **recommendations**: string[] (ReadOnly)
* **title**: string (ReadOnly)

## Dictionary<string,KPIResourceHealthDetails>
### Additional Properties
* **Additional Properties Type**: KPIResourceHealthDetails

## AzureVmWorkloadProtectedItem
### Properties
* **extendedInfo**: AzureVmWorkloadProtectedItemExtendedInfo
* **friendlyName**: string
* **kpisHealths**: Dictionary<string,KPIResourceHealthDetails>
* **lastBackupErrorDetail**: ErrorDetail
* **lastBackupStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'Unhealthy'
* **lastBackupTime**: string
* **parentName**: string
* **parentType**: string
* **protectedItemDataSourceId**: string
* **protectedItemHealthStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'NotReachable' | 'Unhealthy'
* **protectedItemType**: 'AzureVmWorkloadProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **serverName**: string

## AzureVmWorkloadProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyState**: string
* **recoveryPointCount**: int

## Dictionary<string,KPIResourceHealthDetails>
### Additional Properties
* **Additional Properties Type**: KPIResourceHealthDetails

## ErrorDetail
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)
* **recommendations**: string[] (ReadOnly)

## DPMProtectedItem
### Properties
* **backupEngineName**: string
* **extendedInfo**: DPMProtectedItemExtendedInfo
* **friendlyName**: string
* **protectedItemType**: 'DPMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'

## DPMProtectedItemExtendedInfo
### Properties
* **diskStorageUsedInBytes**: string
* **isCollocated**: bool
* **isPresentOnCloud**: bool
* **lastBackupStatus**: string
* **lastRefreshedAt**: string
* **oldestRecoveryPoint**: string
* **onPremiseLatestRecoveryPoint**: string
* **onPremiseOldestRecoveryPoint**: string
* **onPremiseRecoveryPointCount**: int
* **protectableObjectLoadPath**: Dictionary<string,String>
* **protected**: bool
* **protectionGroupName**: string
* **recoveryPointCount**: int
* **totalDiskStorageSizeInBytes**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## GenericProtectedItem
### Properties
* **fabricName**: string
* **friendlyName**: string
* **policyState**: string
* **protectedItemId**: int
* **protectedItemType**: 'GenericProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **sourceAssociations**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MabFileFolderProtectedItem
### Properties
* **computerName**: string
* **deferredDeleteSyncTimeInUTC**: int
* **extendedInfo**: MabFileFolderProtectedItemExtendedInfo
* **friendlyName**: string
* **lastBackupStatus**: string
* **lastBackupTime**: string
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
### Additional Properties
* **Additional Properties Type**: string

## ProtectionPolicy
* **Discriminator**: backupManagementType
### Base Properties
* **protectedItemsCount**: int
### AzureIaasVM
#### Properties
* **backupManagementType**: 'AzureIaasVM' (Required)
* **instantRPDetails**: InstantRPAdditionalDetails
* **instantRpRetentionRangeInDays**: int
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy
* **timeZone**: string

### AzureSql
#### Properties
* **backupManagementType**: 'AzureSql' (Required)
* **retentionPolicy**: RetentionPolicy

### AzureStorage
#### Properties
* **backupManagementType**: 'AzureStorage' (Required)
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy
* **timeZone**: string
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

### AzureWorkload
#### Properties
* **backupManagementType**: 'AzureWorkload' (Required)
* **makePolicyConsistent**: bool
* **settings**: Settings
* **subProtectionPolicy**: SubProtectionPolicy[]
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

### GenericProtectionPolicy
#### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required)
* **fabricName**: string
* **subProtectionPolicy**: SubProtectionPolicy[]
* **timeZone**: string

### MAB
#### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy


## AzureIaasVM
### Properties
* **backupManagementType**: 'AzureIaasVM' (Required)
* **instantRPDetails**: InstantRPAdditionalDetails
* **instantRpRetentionRangeInDays**: int
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy
* **timeZone**: string

## InstantRPAdditionalDetails
### Properties
* **azureBackupRGNamePrefix**: string
* **azureBackupRGNameSuffix**: string

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
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Invalid' | 'Last' | 'Second' | 'Third'[]

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
### LogSchedulePolicy
#### Properties
* **scheduleFrequencyInMins**: int
* **schedulePolicyType**: 'LogSchedulePolicy' (Required)

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


## LogSchedulePolicy
### Properties
* **scheduleFrequencyInMins**: int
* **schedulePolicyType**: 'LogSchedulePolicy' (Required)

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

## AzureStorage
### Properties
* **backupManagementType**: 'AzureStorage' (Required)
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy
* **timeZone**: string
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

## AzureWorkload
### Properties
* **backupManagementType**: 'AzureWorkload' (Required)
* **makePolicyConsistent**: bool
* **settings**: Settings
* **subProtectionPolicy**: SubProtectionPolicy[]
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

## Settings
### Properties
* **isCompression**: bool
* **issqlcompression**: bool
* **timeZone**: string

## SubProtectionPolicy
### Properties
* **policyType**: 'CopyOnlyFull' | 'Differential' | 'Full' | 'Invalid' | 'Log'
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy

## GenericProtectionPolicy
### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required)
* **fabricName**: string
* **subProtectionPolicy**: SubProtectionPolicy[]
* **timeZone**: string

## MAB
### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: RetentionPolicy
* **schedulePolicy**: SchedulePolicy

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

