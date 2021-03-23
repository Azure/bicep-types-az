# Microsoft.DataProtection @ 2021-02-01-preview

## Resource Microsoft.DataProtection/backupVaults@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [DppIdentityDetails](#dppidentitydetails)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupVault](#backupvault)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [DppTrackedResourceTags](#dpptrackedresourcetags)
* **type**: 'Microsoft.DataProtection/backupVaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataProtection/backupVaults/backupInstances@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupInstance](#backupinstance)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataProtection/backupVaults/backupPolicies@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BaseBackupPolicy](#basebackuppolicy)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataProtection/backupVaults/backupPolicies' (ReadOnly, DeployTimeConstant)

## DppIdentityDetails
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string

## BackupVault
### Properties
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **storageSettings**: [StorageSetting](#storagesetting)[]

## StorageSetting
### Properties
* **datastoreType**: 'ArchiveStore' | 'SnapshotStore' | 'VaultStore'
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
* **currentProtectionState**: 'BackupSchedulesSuspended' | 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'Invalid' | 'NotProtected' | 'ProtectionConfigured' | 'ProtectionError' | 'ProtectionStopped' | 'RetentionSchedulesSuspended' | 'SoftDeleted' | 'SoftDeleting' | 'UpdatingProtection' (ReadOnly)
* **dataSourceInfo**: [Datasource](#datasource) (Required)
* **dataSourceSetInfo**: [DatasourceSet](#datasourceset)
* **friendlyName**: string (Required)
* **objectType**: string (Required)
* **policyInfo**: [PolicyInfo](#policyinfo) (Required)
* **protectionErrorDetails**: [UserFacingError](#userfacingerror) (ReadOnly)
* **protectionStatus**: [ProtectionStatusDetails](#protectionstatusdetails) (ReadOnly)
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
* **policyParameters**: [PolicyParameters](#policyparameters)
* **policyVersion**: string (ReadOnly)

## PolicyParameters
### Properties
* **dataStoreParametersList**: [DataStoreParameters](#datastoreparameters)[]

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

## UserFacingError
### Properties
* **code**: string
* **details**: [UserFacingError](#userfacingerror)[]
* **innerError**: [InnerError](#innererror)
* **isRetryable**: bool
* **isUserError**: bool
* **message**: string
* **properties**: [UserFacingErrorProperties](#userfacingerrorproperties)
* **recommendedAction**: string[]
* **target**: string

## InnerError
### Properties
* **additionalInfo**: [InnerErrorAdditionalInfo](#innererroradditionalinfo)
* **code**: string
* **embeddedInnerError**: [InnerError](#innererror)

## InnerErrorAdditionalInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserFacingErrorProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionStatusDetails
### Properties
* **errorDetails**: [UserFacingError](#userfacingerror)
* **status**: 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'ProtectionConfigured' | 'ProtectionStopped' | 'SoftDeleted' | 'SoftDeleting'

## BaseBackupPolicy
* **Discriminator**: objectType

### Base Properties
* **datasourceTypes**: string[] (Required)
### BackupPolicy
#### Properties
* **objectType**: 'BackupPolicy' (Required)
* **policyRules**: [BasePolicyRule](#basepolicyrule)[] (Required)


## BackupPolicy
### Properties
* **objectType**: 'BackupPolicy' (Required)
* **policyRules**: [BasePolicyRule](#basepolicyrule)[] (Required)

## BasePolicyRule
* **Discriminator**: objectType

### Base Properties
* **name**: string (Required)
### AzureBackupRule
#### Properties
* **backupParameters**: [BackupParameters](#backupparameters)
* **dataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required)
* **objectType**: 'AzureBackupRule' (Required)
* **trigger**: [TriggerContext](#triggercontext) (Required)

### AzureRetentionRule
#### Properties
* **isDefault**: bool
* **lifecycles**: [SourceLifeCycle](#sourcelifecycle)[] (Required)
* **objectType**: 'AzureRetentionRule' (Required)


## AzureBackupRule
### Properties
* **backupParameters**: [BackupParameters](#backupparameters)
* **dataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required)
* **objectType**: 'AzureBackupRule' (Required)
* **trigger**: [TriggerContext](#triggercontext) (Required)

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
* **taggingCriteria**: [AdhocBasedTaggingCriteria](#adhocbasedtaggingcriteria) (Required)

### ScheduleBasedTriggerContext
#### Properties
* **objectType**: 'ScheduleBasedTriggerContext' (Required)
* **schedule**: [BackupSchedule](#backupschedule) (Required)
* **taggingCriteria**: [TaggingCriteria](#taggingcriteria)[] (Required)


## AdhocBasedTriggerContext
### Properties
* **objectType**: 'AdhocBasedTriggerContext' (Required)
* **taggingCriteria**: [AdhocBasedTaggingCriteria](#adhocbasedtaggingcriteria) (Required)

## AdhocBasedTaggingCriteria
### Properties
* **tagInfo**: [RetentionTag](#retentiontag)

## RetentionTag
### Properties
* **eTag**: string (ReadOnly)
* **id**: string (ReadOnly)
* **tagName**: string (Required)

## ScheduleBasedTriggerContext
### Properties
* **objectType**: 'ScheduleBasedTriggerContext' (Required)
* **schedule**: [BackupSchedule](#backupschedule) (Required)
* **taggingCriteria**: [TaggingCriteria](#taggingcriteria)[] (Required)

## BackupSchedule
### Properties
* **repeatingTimeIntervals**: string[] (Required)

## TaggingCriteria
### Properties
* **criteria**: [BackupCriteria](#backupcriteria)[]
* **isDefault**: bool (Required)
* **taggingPriority**: int (Required)
* **tagInfo**: [RetentionTag](#retentiontag) (Required)

## BackupCriteria
* **Discriminator**: objectType

### Base Properties
### ScheduleBasedBackupCriteria
#### Properties
* **absoluteCriteria**: 'AllBackup' | 'FirstOfDay' | 'FirstOfMonth' | 'FirstOfWeek' | 'FirstOfYear'[]
* **daysOfMonth**: [Day](#day)[]
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]
* **objectType**: 'ScheduleBasedBackupCriteria' (Required)
* **scheduleTimes**: string[]
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third'[]


## ScheduleBasedBackupCriteria
### Properties
* **absoluteCriteria**: 'AllBackup' | 'FirstOfDay' | 'FirstOfMonth' | 'FirstOfWeek' | 'FirstOfYear'[]
* **daysOfMonth**: [Day](#day)[]
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
* **lifecycles**: [SourceLifeCycle](#sourcelifecycle)[] (Required)
* **objectType**: 'AzureRetentionRule' (Required)

## SourceLifeCycle
### Properties
* **deleteAfter**: [DeleteOption](#deleteoption) (Required)
* **sourceDataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required)
* **targetDataStoreCopySettings**: [TargetCopySetting](#targetcopysetting)[]

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
* **copyAfter**: [CopyOption](#copyoption) (Required)
* **dataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required)

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

