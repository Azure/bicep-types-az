# Microsoft.Workloads @ 2023-10-01-preview

## Resource Microsoft.Workloads/connectors@2023-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [UserAssignedServiceIdentity](#userassignedserviceidentity): Managed service identity (user assigned identities)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9]+-?[A-Za-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorProperties](#connectorproperties) (Required): Defines the connector resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/connectors/acssBackups@2023-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^.+"} (Required, DeployTimeConstant): The resource name
* **properties**: [AcssBackupConnectionProperties](#acssbackupconnectionproperties): Defines the backup connection properties for a virtual instance for SAP.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/connectors/acssBackups' (ReadOnly, DeployTimeConstant): The resource type

## AcssBackupConnectionProperties
### Properties
* **backupData**: [BackupData](#backupdata): Information about the recovery services vault and backup policy used for backup.
* **errors**: [ConnectorErrorDefinition](#connectorerrordefinition) (ReadOnly): Defines the errors related to backup connection resource of virtual instance for SAP.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.

## AzureIaaSVMProtectionPolicy
### Properties
* **backupManagementType**: string (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **instantRPDetails**: [InstantRPAdditionalDetails](#instantrpadditionaldetails): Instant recovery point additional details.
* **instantRpRetentionRangeInDays**: int: Instant RP retention policy range in days
* **policyType**: 'Invalid' | 'V1' | 'V2' | string: The policy type.
* **protectedItemsCount**: int: Number of items associated with this policy.
* **resourceGuardOperationRequests**: string[]: ResourceGuard Operation Requests
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Retention policy with the details on backup copy retention ranges.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Backup schedule specified as part of backup policy.
* **tieringPolicy**: [AzureIaaSVMProtectionPolicyTieringPolicy](#azureiaasvmprotectionpolicytieringpolicy): Tiering policy to automatically move RPs to another tier
Key is Target Tier, defined in RecoveryPointTierType enum.
Tiering policy specifies the criteria to move RP to the target tier.
* **timeZone**: string: Time zone optional input as string. For example: "Pacific Standard Time".

## AzureIaaSVMProtectionPolicyTieringPolicy
### Properties
### Additional Properties
* **Additional Properties Type**: [TieringPolicy](#tieringpolicy)

## AzureVmWorkloadProtectionPolicy
### Properties
* **backupManagementType**: string (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **makePolicyConsistent**: bool: Fix the policy inconsistency
* **protectedItemsCount**: int: Number of items associated with this policy.
* **resourceGuardOperationRequests**: string[]: ResourceGuard Operation Requests
* **settings**: [Settings](#settings): Common settings for the backup management
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]: List of sub-protection policies which includes schedule and retention
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDBInstance' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Type of workload for the backup management

## BackupData
* **Discriminator**: backupType

### Base Properties
* **recoveryServicesVault**: [RecoveryServicesVaultProperties](#recoveryservicesvaultproperties) (Required): The properties of the recovery services vault used for backup.

### HanaBackupData
#### Properties
* **backupPolicy**: [DBBackupPolicyProperties](#dbbackuppolicyproperties) (Required): Defines the policy properties for database backup.
* **backupType**: 'HANA' (Required): The type of backup, VM, SQL or HANA.
* **dbInstanceSnapshotBackupPolicy**: [DBBackupPolicyProperties](#dbbackuppolicyproperties): Defines the policy properties for database backup.
* **hdbuserstoreKeyName**: string (Required): Name of the HANA Database User Store Key.
* **instanceNumber**: string: Gets or sets the database instance number.
* **sslConfiguration**: [SSLConfiguration](#sslconfiguration): Path of the SSL key store.

### SqlBackupData
#### Properties
* **backupPolicy**: [DBBackupPolicyProperties](#dbbackuppolicyproperties) (Required): Defines the policy properties for database backup.
* **backupType**: 'SQL' (Required): The type of backup, VM, SQL or HANA.

### VMBackupData
#### Properties
* **backupPolicy**: [VMBackupPolicyProperties](#vmbackuppolicyproperties) (Required): Defines the policy properties for virtual machine backup.
* **backupType**: 'VM' (Required): The type of backup, VM, SQL or HANA.
* **diskExclusionProperties**: [DiskExclusionProperties](#diskexclusionproperties): Defines the disk exclusion properties for virtual machine backup.


## ConnectorErrorDefinition
### Properties
* **code**: string (ReadOnly): Service specific error code which serves as the substatus for the HTTP error code.
* **details**: [ConnectorErrorDefinition](#connectorerrordefinition)[] (ReadOnly): Internal error details.
* **message**: string (ReadOnly): Description of the error.

## ConnectorProperties
### Properties
* **errors**: [ConnectorErrorDefinition](#connectorerrordefinition) (ReadOnly): Indicates any errors on the connector resource.
* **managedResourceGroupConfiguration**: [ManagedRGConfiguration](#managedrgconfiguration): Managed resource group configuration
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **sourceResourceId**: string (Required): Defines the ID of the connector's source resource.

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

## DBBackupPolicyProperties
### Properties
* **name**: string (Required): The name of the DB backup policy.
* **properties**: [AzureVmWorkloadProtectionPolicy](#azurevmworkloadprotectionpolicy): Azure VM (Mercury) workload-specific backup policy.

## DiskExclusionProperties
### Properties
* **diskLunList**: int[] (Required): List of Disks' Logical Unit Numbers (LUN) to be used for VM Protection.
* **isInclusionList**: bool (Required): Flag to indicate whether DiskLunList is to be included/ excluded from backup.

## HourlySchedule
### Properties
* **interval**: int: Interval at which backup needs to be triggered. For hourly the value
 can be 4/6/8/12
* **scheduleWindowDuration**: int: To specify duration of the backup window
* **scheduleWindowStartTime**: string: To specify start time of the backup window

## InstantRPAdditionalDetails
### Properties
* **azureBackupRGNamePrefix**: string: Azure backup resource group name prefix.
* **azureBackupRGNameSuffix**: string: Azure backup resource group name suffix.

## ManagedRGConfiguration
### Properties
* **name**: string: Managed resource group name

## MonthlyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of retention Policy.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format for monthly retention policy.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly' | string: Retention schedule format type for monthly retention policy.
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format for monthly retention policy.
* **retentionTimes**: string[]: Retention times of retention policy.

## RecoveryServicesVaultProperties
* **Discriminator**: vaultType

### Base Properties

### ExistingRecoveryServicesVault
#### Properties
* **id**: string (Required): The resource ID of the recovery services vault that has been created.
* **vaultType**: 'Existing' (Required): The vault type, whether it is existing or has to be created.

### NewRecoveryServicesVault
#### Properties
* **name**: string (Required): The name of the recovery services vault has to be created.
* **resourceGroup**: string (Required): The name of the resource group where the recovery services vault has to be created.
* **vaultType**: 'New' (Required): The vault type, whether it is existing or has to be created.


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
* **scheduleRunDays**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: List of days of week this schedule has to be run.
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

## SnapshotBackupAdditionalDetails
### Properties
* **instantRPDetails**: string: Instant RP details for the snapshot.
* **instantRpRetentionRangeInDays**: int: Retention range for instant Rp in days.
* **userAssignedManagedIdentityDetails**: [UserAssignedManagedIdentityDetails](#userassignedmanagedidentitydetails): User Assigned managed identity details used for snapshot policy.

## SSLConfiguration
### Properties
* **sslCryptoProvider**: 'commoncrypto' | 'openssl' | string: Specify the crypto provider being used (commoncrypto/openssl). If this argument is not provided, it is automatically determined by searching in the configuration files.
* **sslHostNameInCertificate**: string: Specify the hostname as mentioned in the SSL certificate. If this argument is not provided, it is automatically determined by searching in the SSL certificate.
* **sslKeyStore**: string: Specify the name of the keystore file that contains the client's identity (eg. sapsrv.pse). The script will search for the file in the appropriate directory depending on the crypto provider mentioned. If this argument is not provided, it is automatically determined by searching in the configuration files.
* **sslTrustStore**: string: Specify the name of the trust store file that contains the server’s public certificates (eg. sapsrv.pse). The script will search for the file in the appropriate directory depending on the crypto provider mentioned. If this argument is not provided, it is automatically determined by searching in the configuration files.

## SubProtectionPolicy
### Properties
* **policyType**: 'CopyOnlyFull' | 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | 'SnapshotCopyOnlyFull' | 'SnapshotFull' | string: Type of backup policy type
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Retention policy with the details on backup copy retention ranges.
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy): Backup schedule specified as part of backup policy.
* **snapshotBackupAdditionalDetails**: [SnapshotBackupAdditionalDetails](#snapshotbackupadditionaldetails): Hana DB instance snapshot backup additional details.
* **tieringPolicy**: [SubProtectionPolicyTieringPolicy](#subprotectionpolicytieringpolicy): Tiering policy to automatically move RPs to another tier.
Key is Target Tier, defined in RecoveryPointTierType enum.
Tiering policy specifies the criteria to move RP to the target tier.

## SubProtectionPolicyTieringPolicy
### Properties
### Additional Properties
* **Additional Properties Type**: [TieringPolicy](#tieringpolicy)

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserAssignedIdentityProperties
### Properties
* **clientId**: string
* **principalId**: string

## UserAssignedManagedIdentityDetails
### Properties
* **identityArmId**: string
* **identityName**: string
* **userAssignedIdentityProperties**: [UserAssignedIdentityProperties](#userassignedidentityproperties): User assigned managed identity properties.

## UserAssignedServiceIdentity
### Properties
* **type**: 'None' | 'UserAssigned' | string (Required): Type of manage identity
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): User assigned identities dictionary

## VMBackupPolicyProperties
### Properties
* **name**: string (Required): The name of the VM Backup policy.
* **properties**: [AzureIaaSVMProtectionPolicy](#azureiaasvmprotectionpolicy): IaaS VM workload-specific backup policy.

## WeeklyRetentionFormat
### Properties
* **daysOfTheWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: List of days of the week.
* **weeksOfTheMonth**: ('First' | 'Fourth' | 'Invalid' | 'Last' | 'Second' | 'Third')[]: List of weeks of month.

## WeeklyRetentionSchedule
### Properties
* **daysOfTheWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: List of days of week for weekly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of retention Policy.
* **retentionTimes**: string[]: Retention times of retention policy.

## WeeklySchedule
### Properties
* **scheduleRunDays**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: Schedule run days.
* **scheduleRunTimes**: string[]: List of times of day this schedule has to be run.

## YearlyRetentionSchedule
### Properties
* **monthsOfYear**: ('April' | 'August' | 'December' | 'February' | 'Invalid' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September')[]: List of months of year of yearly retention policy.
* **retentionDuration**: [RetentionDuration](#retentionduration): Retention duration of retention Policy.
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat): Daily retention format for yearly retention policy.
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly' | string: Retention schedule format for yearly retention policy.
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat): Weekly retention format for yearly retention policy.
* **retentionTimes**: string[]: Retention times of retention policy.

