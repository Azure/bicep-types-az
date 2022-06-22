# Microsoft.RecoveryServices @ 2016-06-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2016-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionContainer](#protectioncontainer) (ReadOnly): The base class for a container with backup items. Containers with specific workloads are derived from this class.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults@2016-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionContainer](#protectioncontainer) (ReadOnly): The base class for a container with backup items. Containers with specific workloads are derived from this class.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults' (ReadOnly, DeployTimeConstant): The resource type

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

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/operationResults@2016-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectedItem](#protecteditem) (ReadOnly): The base class for backup items.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints@2016-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryPoint](#recoverypoint) (ReadOnly): The base class for backup copies. Workload-specific backup copies are derived from this class.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupJobs@2016-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Job](#job) (ReadOnly): Defines workload-agnostic properties for a job.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupJobs' (ReadOnly, DeployTimeConstant): The resource type

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

## Resource Microsoft.RecoveryServices/vaults/backupPolicies/operationResults@2016-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionPolicy](#protectionpolicy) (ReadOnly): The base class for a backup policy. Workload-specific backup policies are derived from this class.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## AzureIaaSVMErrorInfo
### Properties
* **errorCode**: int: Error code.
* **errorString**: string: Localized error string.
* **errorTitle**: string: Title: typically, the entity associated the error.
* **recommendations**: string[]: List of localized recommendations for the error string.

## AzureIaaSVMJobExtendedInfo
### Properties
* **dynamicErrorMessage**: string: Non-localized error message for job execution.
* **progressPercentage**: int: Indicates progress of the job. Null if it has not started or completed.
* **propertyBag**: [AzureIaaSVMJobExtendedInfoPropertyBag](#azureiaasvmjobextendedinfopropertybag): Job properties.
* **tasksList**: [AzureIaaSVMJobTaskDetails](#azureiaasvmjobtaskdetails)[]: List of tasks associated with this job.

## AzureIaaSVMJobExtendedInfoPropertyBag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureIaaSVMJobTaskDetails
### Properties
* **duration**: string: The time elapsed for the task.
* **endTime**: string: The end time.
* **instanceId**: string: The instance ID.
* **progressPercentage**: int: The progress of the task, as a percentage.
* **startTime**: string: The start time.
* **status**: string: The status.
* **taskId**: string: The task display name.

## AzureSqlProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string: The oldest backup copy available for this item in the service.
* **policyState**: string: The state of the backup policy associated with this backup item.
* **recoveryPointCount**: int: The number of available backup copies for this backup item.

## BEKDetails
### Properties
* **secretData**: string: Bitlocker Encryption Key (BEK) data.
* **secretUrl**: string: Secret refers to Bitlocker Encryption Key (BEK). The Secret can be unlocked by the key (or KEK).
* **secretVaultId**: string: ID of the Key Vault where this Secret is stored.

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

## DpmErrorInfo
### Properties
* **errorString**: string: Localized error string.
* **recommendations**: string[]: The list of localized recommendations for the error string.

## DpmJobExtendedInfo
### Properties
* **dynamicErrorMessage**: string: Non-localized error message on job execution.
* **propertyBag**: [DpmJobExtendedInfoPropertyBag](#dpmjobextendedinfopropertybag): The job properties.
* **tasksList**: [DpmJobTaskDetails](#dpmjobtaskdetails)[]: List of tasks associated with this job.

## DpmJobExtendedInfoPropertyBag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DpmJobTaskDetails
### Properties
* **duration**: string: The time elapsed for task.
* **endTime**: string: The end time.
* **startTime**: string: The start time.
* **status**: string: The status.
* **taskId**: string: The task display name.

## Job
* **Discriminator**: jobType

### Base Properties
* **activityId**: string: ActivityId of job.
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'DPM' | 'Invalid' | 'MAB': The backup management type for the current job.
* **endTime**: string: The end time.
* **entityFriendlyName**: string: The friendly name of the entity on which the current job is executing.
* **operation**: string: The operation name.
* **startTime**: string: The start time.
* **status**: string: The job status.
### AzureIaaSVMJob
#### Properties
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: Gets or sets the state, or actions, applicable on this job. Examples of the actions are: Cancel or Retry.
* **duration**: string: The time that elapsed during the execution of this job.
* **errorDetails**: [AzureIaaSVMErrorInfo](#azureiaasvmerrorinfo)[]: Error details about this job.
* **extendedInfo**: [AzureIaaSVMJobExtendedInfo](#azureiaasvmjobextendedinfo): Additional information for this job.
* **jobType**: 'AzureIaaSVMJob' (Required): This property is the discriminator for deciding between the specific types in the polymorphic chain of types.
* **virtualMachineVersion**: string: Specifies whether the backup item is a Classic VM or a Resource Manager VM.

### DpmJob
#### Properties
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: The state or actions applicable on this job, such as Cancel or Retry.
* **containerName**: string: The name of the cluster or server protecting the current backup item, if any.
* **containerType**: string: The type of container.
* **dpmServerName**: string: DPM server name managing the backup item or backup job.
* **duration**: string: The time elapsed for the job.
* **errorDetails**: [DpmErrorInfo](#dpmerrorinfo)[]: The errors.
* **extendedInfo**: [DpmJobExtendedInfo](#dpmjobextendedinfo): Additional information for this job.
* **jobType**: 'DpmJob' (Required): This property is the discriminator for deciding between the specific types in the polymorphic chain of types.
* **workloadType**: string: The type of backup item.

### MabJob
#### Properties
* **actionsInfo**: 'Cancellable' | 'Invalid' | 'Retriable'[]: The state or actions applicable on jobs such as Cancel or Retry.
* **duration**: string: The time required for the job to run.
* **errorDetails**: [MabErrorInfo](#maberrorinfo)[]: The errors.
* **extendedInfo**: [MabJobExtendedInfo](#mabjobextendedinfo): Additional information on the job.
* **jobType**: 'MabJob' (Required): This property is the discriminator for deciding between the specific types in the polymorphic chain of types.
* **mabServerName**: string: The name of server protecting the data store.
* **mabServerType**: 'AzureSqlContainer' | 'ClusterResource' | 'DPMContainer' | 'DPMVenusContainer' | 'IaasVMContainer' | 'IaasVMServiceContainer' | 'Invalid' | 'MABContainer' | 'Unknown' | 'Windows' | 'WindowsServer': Server type of the Azure Backup Server container.
* **workloadType**: 'AzureSqlDb' | 'DPMUnknown' | 'Exchange' | 'FileFolder' | 'Invalid' | 'SQLDB' | 'Sharepoint' | 'VM': Workload type of backup item.


## KEKDetails
### Properties
* **keyBackupData**: string: Key Backup Data refers to Key Encryption Key (KEK) data.
* **keyUrl**: string: Key refers to the Key Encryption Key (KEK). The KEK is the Key to unlock the Secret.
* **keyVaultId**: string: Key Vault ID identifies where the KEK is stored.

## KeyAndSecretDetails
### Properties
* **bekDetails**: [BEKDetails](#bekdetails): BEK is Bitlocker Encryption Key.
* **kekDetails**: [KEKDetails](#kekdetails): The Key Encryption Key (KEK) is the encryption key for the Bitlocker Encryption Key (BEK).

## MabContainerExtendedInfo
### Properties
* **backupItems**: string[]: The list of backup items associated with this container.
* **backupItemType**: 'AzureSqlDb' | 'DPMUnknown' | 'Exchange' | 'FileFolder' | 'Invalid' | 'SQLDB' | 'Sharepoint' | 'VM': The type of backup items associated with this container.
* **lastBackupStatus**: string: The latest backup status of this container.
* **lastRefreshedAt**: string: The time stamp when this container was refreshed.
* **policyName**: string: The backup policy associated with this container.

## MabErrorInfo
### Properties
* **errorString**: string: Localized error string.
* **recommendations**: string[]: List of localized recommendations.

## MabFileFolderProtectedItemExtendedInfo
### Properties
* **lastRefreshedAt**: string: The last day and time the agent synced with the service.
* **oldestRecoveryPoint**: string: The oldest backup copy available.
* **recoveryPointCount**: int: The number of backup copies associated with the backup item.

## MabJobExtendedInfo
### Properties
* **dynamicErrorMessage**: string: Non-localized error message specific to this job.
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


## ProtectionContainer
* **Discriminator**: protectableObjectType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'DPM' | 'Invalid' | 'MAB': The backup management type for the container.
* **containerType**: string (ReadOnly): The type assigned to the container. The values to use for each of these properties are:<br/> 1. Compute Azure VM is Microsoft.Compute/virtualMachines<br/> 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines<br/> 3. Windows machines (like Azure Backup Server and DPM) is Windows<br/> 4. Azure SQL instance is AzureSqlContainer.
* **friendlyName**: string: Friendly name of the container.
* **healthStatus**: string: The status of the container's health.
* **registrationStatus**: string: The container's registration status with the Recovery Services vault.
### AzureSqlContainer
#### Properties
* **protectableObjectType**: 'AzureSqlContainer' (Required): The protectable object type associated with the container.

### MabContainer
#### Properties
* **agentVersion**: string: The version of the agent used with this container.
* **canReRegister**: bool: The container can be registered one more time.
* **containerId**: int: The ID for the container.
* **extendedInfo**: [MabContainerExtendedInfo](#mabcontainerextendedinfo): Additional information for the container.
* **protectableObjectType**: 'MABWindowsContainer' (Required): The protectable object type associated with the container.
* **protectedItemCount**: int: The number of backup items in the container.

### AzureIaaSClassicComputeVMContainer
#### Properties
* **protectableObjectType**: 'Microsoft.ClassicCompute/virtualMachines' (Required): The protectable object type associated with the container.

### AzureIaaSComputeVMContainer
#### Properties
* **protectableObjectType**: 'Microsoft.Compute/virtualMachines' (Required): The protectable object type associated with the container.


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


## RecoveryPoint
* **Discriminator**: objectType

### Base Properties
### GenericRecoveryPoint
#### Properties
* **friendlyName**: string: Friendly name of the backup copy.
* **objectType**: 'GenericRecoveryPoint' (Required): This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointAdditionalInfo**: string: Additional information associated with this backup copy.
* **recoveryPointTime**: string: The time when this backup copy was created.
* **recoveryPointType**: string: Type of the backup copy.

### IaasVMRecoveryPoint
#### Properties
* **isInstantILRSessionActive**: bool: Answer to the question - Is the session to recover items from this backup copy still active.
* **isSourceVMEncrypted**: bool: Identifies whether the VM was encrypted when the backup copy is created.
* **keyAndSecret**: [KeyAndSecretDetails](#keyandsecretdetails): Required details for recovering an encrypted VM. Applicable only when IsSourceVMEncrypted is true.
* **objectType**: 'IaasVMRecoveryPoint' (Required): This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointAdditionalInfo**: string: Additional information associated with this backup copy.
* **recoveryPointTime**: string: The date and time when the backup copy was created.
* **recoveryPointType**: string: Type of the backup copy.
* **sourceVMStorageType**: string: The storage type for the VM whose backup copy was created.


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

