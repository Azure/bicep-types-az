# Microsoft.RecoveryServices @ 2020-12-01

## Resource Microsoft.RecoveryServices/vaults/backupconfig@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupResourceVaultConfig](#backupresourcevaultconfig)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/backupconfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupResourceEncryptionConfig](#backupresourceencryptionconfig)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/backupEncryptionConfigs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProtectionContainer](#protectioncontainer)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProtectedItem](#protecteditem)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProtectionPolicy](#protectionpolicy)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnection](#privateendpointconnection)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## BackupResourceVaultConfig
### Properties
* **enhancedSecurityState**: 'Disabled' | 'Enabled' | 'Invalid'
* **softDeleteFeatureState**: 'Disabled' | 'Enabled' | 'Invalid'
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant'
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant'
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupResourceEncryptionConfig
### Properties
* **encryptionAtRestType**: 'CustomerManaged' | 'Invalid' | 'MicrosoftManaged'
* **infrastructureEncryptionState**: 'Disabled' | 'Enabled' | 'Invalid'
* **keyUri**: string
* **lastUpdateStatus**: 'Failed' | 'Invalid' | 'NotEnabled' | 'PartiallyFailed' | 'PartiallySucceeded' | 'Succeeded'
* **subscriptionId**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionContainer
* **Discriminator**: containerType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB'
* **friendlyName**: string
* **healthStatus**: string
* **registrationStatus**: string
### AzureBackupServerContainer
#### Properties
* **containerType**: 'AzureBackupServerContainer' (Required)

### AzureSqlContainer
#### Properties
* **containerType**: 'AzureSqlContainer' (Required)

### GenericContainer
#### Properties
* **containerType**: 'GenericContainer' (Required)
* **extendedInformation**: [GenericContainerExtendedInfo](#genericcontainerextendedinfo)
* **fabricName**: string

### AzureIaaSClassicComputeVMContainer
#### Properties
* **containerType**: 'Microsoft.ClassicCompute/virtualMachines' (Required)

### AzureIaaSComputeVMContainer
#### Properties
* **containerType**: 'Microsoft.Compute/virtualMachines' (Required)

### AzureSqlagWorkloadContainerProtectionContainer
#### Properties
* **containerType**: 'SQLAGWorkLoadContainer' (Required)

### AzureStorageContainer
#### Properties
* **containerType**: 'StorageContainer' (Required)
* **protectedItemCount**: int
* **resourceGroup**: string
* **sourceResourceId**: string
* **storageAccountVersion**: string

### AzureVMAppContainerProtectionContainer
#### Properties
* **containerType**: 'VMAppContainer' (Required)

### MabContainer
#### Properties
* **agentVersion**: string
* **canReRegister**: bool
* **containerHealthState**: string
* **containerId**: int
* **containerType**: 'Windows' (Required)
* **extendedInfo**: [MabContainerExtendedInfo](#mabcontainerextendedinfo)
* **mabContainerHealthDetails**: [MABContainerHealthDetails](#mabcontainerhealthdetails)[]
* **protectedItemCount**: int


## AzureBackupServerContainer
### Properties
* **containerType**: 'AzureBackupServerContainer' (Required)

## AzureSqlContainer
### Properties
* **containerType**: 'AzureSqlContainer' (Required)

## GenericContainer
### Properties
* **containerType**: 'GenericContainer' (Required)
* **extendedInformation**: [GenericContainerExtendedInfo](#genericcontainerextendedinfo)
* **fabricName**: string

## GenericContainerExtendedInfo
### Properties
* **containerIdentityInfo**: [ContainerIdentityInfo](#containeridentityinfo)
* **rawCertData**: string
* **serviceEndpoints**: [GenericContainerExtendedInfoServiceEndpoints](#genericcontainerextendedinfoserviceendpoints)

## ContainerIdentityInfo
### Properties
* **aadTenantId**: string
* **audience**: string
* **servicePrincipalClientId**: string
* **uniqueName**: string

## GenericContainerExtendedInfoServiceEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureIaaSClassicComputeVMContainer
### Properties
* **containerType**: 'Microsoft.ClassicCompute/virtualMachines' (Required)

## AzureIaaSComputeVMContainer
### Properties
* **containerType**: 'Microsoft.Compute/virtualMachines' (Required)

## AzureSqlagWorkloadContainerProtectionContainer
### Properties
* **containerType**: 'SQLAGWorkLoadContainer' (Required)

## AzureStorageContainer
### Properties
* **containerType**: 'StorageContainer' (Required)
* **protectedItemCount**: int
* **resourceGroup**: string
* **sourceResourceId**: string
* **storageAccountVersion**: string

## AzureVMAppContainerProtectionContainer
### Properties
* **containerType**: 'VMAppContainer' (Required)

## MabContainer
### Properties
* **agentVersion**: string
* **canReRegister**: bool
* **containerHealthState**: string
* **containerId**: int
* **containerType**: 'Windows' (Required)
* **extendedInfo**: [MabContainerExtendedInfo](#mabcontainerextendedinfo)
* **mabContainerHealthDetails**: [MABContainerHealthDetails](#mabcontainerhealthdetails)[]
* **protectedItemCount**: int

## MabContainerExtendedInfo
### Properties
* **backupItems**: string[]
* **backupItemType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'
* **lastBackupStatus**: string
* **lastRefreshedAt**: string
* **policyName**: string

## MABContainerHealthDetails
### Properties
* **code**: int
* **message**: string
* **recommendations**: string[]
* **title**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectedItem
* **Discriminator**: protectedItemType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB'
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
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'
### AzureFileshareProtectedItem
#### Properties
* **extendedInfo**: [AzureFileshareProtectedItemExtendedInfo](#azurefileshareprotecteditemextendedinfo)
* **friendlyName**: string
* **kpisHealths**: [AzureFileshareProtectedItemKpisHealths](#azurefileshareprotecteditemkpishealths)
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required)
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string

### AzureVmWorkloadSAPAseDatabaseProtectedItem
#### Properties
* **protectedItemType**: 'AzureVmWorkloadSAPAseDatabase' (Required)

### AzureVmWorkloadSAPHanaDatabaseProtectedItem
#### Properties
* **protectedItemType**: 'AzureVmWorkloadSAPHanaDatabase' (Required)

### AzureVmWorkloadSQLDatabaseProtectedItem
#### Properties
* **protectedItemType**: 'AzureVmWorkloadSQLDatabase' (Required)

### DPMProtectedItem
#### Properties
* **backupEngineName**: string
* **extendedInfo**: [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo)
* **friendlyName**: string
* **protectedItemType**: 'DPMProtectedItem' (Required)
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'

### GenericProtectedItem
#### Properties
* **fabricName**: string
* **friendlyName**: string
* **policyState**: string
* **protectedItemId**: int
* **protectedItemType**: 'GenericProtectedItem' (Required)
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **sourceAssociations**: [GenericProtectedItemSourceAssociations](#genericprotecteditemsourceassociations)

### MabFileFolderProtectedItem
#### Properties
* **computerName**: string
* **deferredDeleteSyncTimeInUTC**: int
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo)
* **friendlyName**: string
* **lastBackupStatus**: string
* **lastBackupTime**: string
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


## AzureFileshareProtectedItem
### Properties
* **extendedInfo**: [AzureFileshareProtectedItemExtendedInfo](#azurefileshareprotecteditemextendedinfo)
* **friendlyName**: string
* **kpisHealths**: [AzureFileshareProtectedItemKpisHealths](#azurefileshareprotecteditemkpishealths)
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required)
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string

## AzureFileshareProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyState**: string
* **recoveryPointCount**: int
* **resourceState**: string (ReadOnly)
* **resourceStateSyncTime**: string (ReadOnly)

## AzureFileshareProtectedItemKpisHealths
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## KPIResourceHealthDetails
### Properties
* **resourceHealthDetails**: [ResourceHealthDetails](#resourcehealthdetails)[]
* **resourceHealthStatus**: 'Healthy' | 'Invalid' | 'PersistentDegraded' | 'PersistentUnhealthy' | 'TransientDegraded' | 'TransientUnhealthy'

## ResourceHealthDetails
### Properties
* **code**: int (ReadOnly)
* **message**: string (ReadOnly)
* **recommendations**: string[] (ReadOnly)
* **title**: string (ReadOnly)

## AzureVmWorkloadSAPAseDatabaseProtectedItem
### Properties
* **protectedItemType**: 'AzureVmWorkloadSAPAseDatabase' (Required)

## AzureVmWorkloadSAPHanaDatabaseProtectedItem
### Properties
* **protectedItemType**: 'AzureVmWorkloadSAPHanaDatabase' (Required)

## AzureVmWorkloadSQLDatabaseProtectedItem
### Properties
* **protectedItemType**: 'AzureVmWorkloadSQLDatabase' (Required)

## DPMProtectedItem
### Properties
* **backupEngineName**: string
* **extendedInfo**: [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo)
* **friendlyName**: string
* **protectedItemType**: 'DPMProtectedItem' (Required)
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'

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
* **protectableObjectLoadPath**: [DPMProtectedItemExtendedInfoProtectableObjectLoadPath](#dpmprotecteditemextendedinfoprotectableobjectloadpath)
* **protected**: bool
* **protectionGroupName**: string
* **recoveryPointCount**: int
* **totalDiskStorageSizeInBytes**: string

## DPMProtectedItemExtendedInfoProtectableObjectLoadPath
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GenericProtectedItem
### Properties
* **fabricName**: string
* **friendlyName**: string
* **policyState**: string
* **protectedItemId**: int
* **protectedItemType**: 'GenericProtectedItem' (Required)
* **protectionState**: 'IRPending' | 'Invalid' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **sourceAssociations**: [GenericProtectedItemSourceAssociations](#genericprotecteditemsourceassociations)

## GenericProtectedItemSourceAssociations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MabFileFolderProtectedItem
### Properties
* **computerName**: string
* **deferredDeleteSyncTimeInUTC**: int
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo)
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
* **instantRPDetails**: [InstantRPAdditionalDetails](#instantrpadditionaldetails)
* **instantRpRetentionRangeInDays**: int
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)
* **timeZone**: string

### AzureSqlProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureSql' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)

### AzureFileShareProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureStorage' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)
* **timeZone**: string
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'

### AzureVmWorkloadProtectionPolicy
#### Properties
* **backupManagementType**: 'AzureWorkload' (Required)
* **makePolicyConsistent**: bool
* **settings**: [Settings](#settings)
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'

### GenericProtectionPolicy
#### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required)
* **fabricName**: string
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]
* **timeZone**: string

### MabProtectionPolicy
#### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)


## AzureIaaSVMProtectionPolicy
### Properties
* **backupManagementType**: 'AzureIaasVM' (Required)
* **instantRPDetails**: [InstantRPAdditionalDetails](#instantrpadditionaldetails)
* **instantRpRetentionRangeInDays**: int
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)
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
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Invalid' | 'Last' | 'Second' | 'Third'[]

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

## AzureSqlProtectionPolicy
### Properties
* **backupManagementType**: 'AzureSql' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)

## AzureFileShareProtectionPolicy
### Properties
* **backupManagementType**: 'AzureStorage' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)
* **timeZone**: string
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'

## AzureVmWorkloadProtectionPolicy
### Properties
* **backupManagementType**: 'AzureWorkload' (Required)
* **makePolicyConsistent**: bool
* **settings**: [Settings](#settings)
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'

## Settings
### Properties
* **isCompression**: bool
* **issqlcompression**: bool
* **timeZone**: string

## SubProtectionPolicy
### Properties
* **policyType**: 'CopyOnlyFull' | 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log'
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)

## GenericProtectionPolicy
### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required)
* **fabricName**: string
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]
* **timeZone**: string

## MabProtectionPolicy
### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: 'Deleting' | 'Failed' | 'Pending' | 'Succeeded'

## PrivateEndpoint
### Properties
* **id**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

