# Microsoft.DataProtection @ 2021-02-01-preview

## Resource Microsoft.DataProtection/backupVaults@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: DppIdentityDetails
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupVault
* **systemData**: SystemData (ReadOnly)
* **tags**: DppTrackedResourceTags
* **type**: 'Microsoft.DataProtection/backupVaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataProtection/backupVaults/backupInstances@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupInstance
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataProtection/backupVaults/backupPolicies@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BaseBackupPolicy
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.DataProtection/backupVaults/backupPolicies' (ReadOnly, DeployTimeConstant)

## DppIdentityDetails
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string

## BackupVault
### Properties
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **storageSettings**: StorageSetting[]

## StorageSetting
### Properties
* **dataStoreType**: 'ArchiveStore' | 'SnapshotStore' | 'VaultStore'
* **type**: 'GeoRedundant' | 'LocallyRedundant'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## DppTrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupInstance
### Properties
* **dataSourceInfo**: Datasource (Required)
* **dataSourceSetInfo**: DatasourceSet
* **objectType**: string
* **policyInfo**: PolicyInfo (Required)
* **protectionStatus**: ProtectionStatusDetails (ReadOnly)
* **provisioningState**: string (ReadOnly)

## Datasource
### Properties
* **datasourceType**: string
* **objectType**: string
* **resourceID**: string (Required)
* **resourceLocation**: string
* **resourceName**: string
* **resourceType**: string
* **resourceUri**: string

## DatasourceSet
### Properties
* **datasourceType**: string
* **objectType**: string
* **resourceID**: string (Required)
* **resourceLocation**: string
* **resourceName**: string
* **resourceType**: string
* **resourceUri**: string

## PolicyInfo
### Properties
* **policyId**: string (Required)
* **policyParameters**: PolicyParameters
* **policyVersion**: string (ReadOnly)

## PolicyParameters
### Properties
* **dataStoreParametersList**: DataStoreParameters[]

## DataStoreParameters
* **Discriminator**: objectType

### Base Properties
* **dataStoreType**: 'ArchiveStore' | 'OperationalStore' | 'VaultStore' (Required)
### AzureOperationalStoreParameters
#### Properties
* **objectType**: 'AzureOperationalStoreParameters' (Required)
* **resourceGroupId**: string


## AzureOperationalStoreParameters
### Properties
* **objectType**: 'AzureOperationalStoreParameters' (Required)
* **resourceGroupId**: string

## ProtectionStatusDetails
### Properties
* **errorDetails**: UserFacingError
* **status**: 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'ProtectionConfigured' | 'ProtectionStopped' | 'SoftDeleted' | 'SoftDeleting'

## UserFacingError
### Properties
* **code**: string
* **details**: UserFacingError[]
* **innerError**: InnerError
* **isRetryable**: bool
* **isUserError**: bool
* **message**: string
* **recommendedAction**: string[]
* **target**: string

## InnerError
### Properties
* **additionalInfo**: InnerErrorAdditionalInfo
* **code**: string
* **embeddedInnerError**: InnerError

## InnerErrorAdditionalInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BaseBackupPolicy
* **Discriminator**: objectType

### Base Properties
* **datasourceTypes**: string[] (Required)
### BackupPolicy
#### Properties
* **objectType**: 'BackupPolicy' (Required)
* **policyRules**: BasePolicyRule[] (Required)


## BackupPolicy
### Properties
* **objectType**: 'BackupPolicy' (Required)
* **policyRules**: BasePolicyRule[] (Required)

## BasePolicyRule
* **Discriminator**: objectType

### Base Properties
* **name**: string (Required)
### AzureBackupRule
#### Properties
* **backupParameters**: BackupParameters
* **dataStore**: DataStoreInfoBase (Required)
* **objectType**: 'AzureBackupRule' (Required)
* **trigger**: TriggerContext (Required)

### AzureRetentionRule
#### Properties
* **isDefault**: bool
* **lifecycles**: SourceLifeCycle[] (Required)
* **objectType**: 'AzureRetentionRule' (Required)


## AzureBackupRule
### Properties
* **backupParameters**: BackupParameters
* **dataStore**: DataStoreInfoBase (Required)
* **objectType**: 'AzureBackupRule' (Required)
* **trigger**: TriggerContext (Required)

## BackupParameters
* **Discriminator**: objectType

### Base Properties
### AzureBackupParams
#### Properties
* **backupType**: string (Required)
* **objectType**: 'AzureBackupParams' (Required)


## AzureBackupParams
### Properties
* **backupType**: string (Required)
* **objectType**: 'AzureBackupParams' (Required)

## DataStoreInfoBase
### Properties
* **dataStoreType**: 'ArchiveStore' | 'OperationalStore' | 'VaultStore' (Required)
* **objectType**: string (Required)

## TriggerContext
* **Discriminator**: objectType

### Base Properties
### AdhocBasedTriggerContext
#### Properties
* **objectType**: 'AdhocBasedTriggerContext' (Required)
* **taggingCriteria**: AdhocBasedTaggingCriteria (Required)

### ScheduleBasedTriggerContext
#### Properties
* **objectType**: 'ScheduleBasedTriggerContext' (Required)
* **schedule**: BackupSchedule (Required)
* **taggingCriteria**: TaggingCriteria[] (Required)


## AdhocBasedTriggerContext
### Properties
* **objectType**: 'AdhocBasedTriggerContext' (Required)
* **taggingCriteria**: AdhocBasedTaggingCriteria (Required)

## AdhocBasedTaggingCriteria
### Properties
* **tagInfo**: RetentionTag

## RetentionTag
### Properties
* **eTag**: string (ReadOnly)
* **id**: string (ReadOnly)
* **tagName**: string (Required)

## ScheduleBasedTriggerContext
### Properties
* **objectType**: 'ScheduleBasedTriggerContext' (Required)
* **schedule**: BackupSchedule (Required)
* **taggingCriteria**: TaggingCriteria[] (Required)

## BackupSchedule
### Properties
* **repeatingTimeIntervals**: string[] (Required)

## TaggingCriteria
### Properties
* **criteria**: BackupCriteria[]
* **isDefault**: bool (Required)
* **taggingPriority**: int (Required)
* **tagInfo**: RetentionTag (Required)

## BackupCriteria
* **Discriminator**: objectType

### Base Properties
### ScheduleBasedBackupCriteria
#### Properties
* **absoluteCriteria**: 'AllBackup' | 'FirstOfDay' | 'FirstOfMonth' | 'FirstOfWeek' | 'FirstOfYear'[]
* **daysOfMonth**: Day[]
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]
* **objectType**: 'ScheduleBasedBackupCriteria' (Required)
* **scheduleTimes**: string[]
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third'[]


## ScheduleBasedBackupCriteria
### Properties
* **absoluteCriteria**: 'AllBackup' | 'FirstOfDay' | 'FirstOfMonth' | 'FirstOfWeek' | 'FirstOfYear'[]
* **daysOfMonth**: Day[]
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]
* **objectType**: 'ScheduleBasedBackupCriteria' (Required)
* **scheduleTimes**: string[]
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third'[]

## Day
### Properties
* **date**: int
* **isLast**: bool

## AzureRetentionRule
### Properties
* **isDefault**: bool
* **lifecycles**: SourceLifeCycle[] (Required)
* **objectType**: 'AzureRetentionRule' (Required)

## SourceLifeCycle
### Properties
* **deleteAfter**: DeleteOption (Required)
* **sourceDataStore**: DataStoreInfoBase (Required)
* **targetDataStoreCopySettings**: TargetCopySetting[]

## DeleteOption
* **Discriminator**: objectType

### Base Properties
* **duration**: string (Required)
### AbsoluteDeleteOption
#### Properties
* **objectType**: 'AbsoluteDeleteOption' (Required)


## AbsoluteDeleteOption
### Properties
* **objectType**: 'AbsoluteDeleteOption' (Required)

## TargetCopySetting
### Properties
* **copyAfter**: CopyOption (Required)
* **dataStore**: DataStoreInfoBase (Required)

## CopyOption
* **Discriminator**: objectType

### Base Properties
### CopyOnExpiryOption
#### Properties
* **objectType**: 'CopyOnExpiryOption' (Required)

### CustomCopyOption
#### Properties
* **duration**: string
* **objectType**: 'CustomCopyOption' (Required)

### ImmediateCopyOption
#### Properties
* **objectType**: 'ImmediateCopyOption' (Required)


## CopyOnExpiryOption
### Properties
* **objectType**: 'CopyOnExpiryOption' (Required)

## CustomCopyOption
### Properties
* **duration**: string
* **objectType**: 'CustomCopyOption' (Required)

## ImmediateCopyOption
### Properties
* **objectType**: 'ImmediateCopyOption' (Required)

