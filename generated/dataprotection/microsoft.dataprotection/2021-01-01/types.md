# Microsoft.DataProtection @ 2021-01-01

## Resource Microsoft.DataProtection/backupVaults@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DppIdentityDetails](#dppidentitydetails): Identity details
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupVault](#backupvault) (Required): Backup Vault
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupInstances@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupInstance](#backupinstance): Backup Instance
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupPolicies@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BaseBackupPolicy](#basebackuppolicy): BackupPolicy base
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## DppIdentityDetails
### Properties
* **principalId**: string (ReadOnly): The object ID of the service principal object for the managed identity that is used to grant role-based access to an Azure resource.
* **tenantId**: string (ReadOnly): A Globally Unique Identifier (GUID) that represents the Azure AD tenant where the resource is now a member.
* **type**: string: The identityType which can be either SystemAssigned or None

## BackupVault
### Properties
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): Provisioning state of the BackupVault resource.
* **storageSettings**: [StorageSetting](#storagesetting)[] (Required): Storage Settings

## StorageSetting
### Properties
* **datastoreType**: 'ArchiveStore' | 'SnapshotStore' | 'VaultStore': Gets or sets the type of the datastore.
* **type**: 'GeoRedundant' | 'LocallyRedundant': Gets or sets the type.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupInstance
### Properties
* **currentProtectionState**: 'BackupSchedulesSuspended' | 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'Invalid' | 'NotProtected' | 'ProtectionConfigured' | 'ProtectionError' | 'ProtectionStopped' | 'RetentionSchedulesSuspended' | 'SoftDeleted' | 'SoftDeleting' | 'UpdatingProtection' (ReadOnly): Specifies the current protection state of the resource.
* **dataSourceInfo**: [Datasource](#datasource) (Required): Datasource to be backed up
* **dataSourceSetInfo**: [DatasourceSet](#datasourceset): DatasourceSet details of datasource to be backed up
* **friendlyName**: string (Required): Gets or sets the Backup Instance friendly name.
* **objectType**: string (Required):
* **policyInfo**: [PolicyInfo](#policyinfo) (Required): Policy Info in backupInstance
* **protectionErrorDetails**: [UserFacingError](#userfacingerror) (ReadOnly): Error object used by layers that have access to localized content, and propagate that to user
* **protectionStatus**: [ProtectionStatusDetails](#protectionstatusdetails) (ReadOnly): Protection status details
* **provisioningState**: string (ReadOnly): Specifies the provisioning state of the resource i.e. provisioning/updating/Succeeded/Failed

## Datasource
### Properties
* **datasourceType**: string: DatasourceType of the resource.
* **objectType**: string: Type of Datasource object, used to initialize the right inherited type
* **resourceID**: string (Required): Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
* **resourceLocation**: string: Location of datasource.
* **resourceName**: string: Unique identifier of the resource in the context of parent.
* **resourceType**: string: Resource Type of Datasource.
* **resourceUri**: string: Uri of the resource.

## DatasourceSet
### Properties
* **datasourceType**: string: DatasourceType of the resource.
* **objectType**: string: Type of Datasource object, used to initialize the right inherited type
* **resourceID**: string (Required): Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
* **resourceLocation**: string: Location of datasource.
* **resourceName**: string: Unique identifier of the resource in the context of parent.
* **resourceType**: string: Resource Type of Datasource.
* **resourceUri**: string: Uri of the resource.

## PolicyInfo
### Properties
* **policyId**: string (Required):
* **policyParameters**: [PolicyParameters](#policyparameters): Parameters in Policy
* **policyVersion**: string (ReadOnly):

## PolicyParameters
### Properties
* **dataStoreParametersList**: [DataStoreParameters](#datastoreparameters)[]: Gets or sets the DataStore Parameters

## DataStoreParameters
* **Discriminator**: objectType
### Base Properties
* **dataStoreType**: 'ArchiveStore' | 'OperationalStore' | 'VaultStore' (Required): type of datastore; Operational/Vault/Archive.
### AzureOperationalStoreParameters
#### Properties
* **objectType**: 'AzureOperationalStoreParameters' (Required): Parameters for Operational-Tier DataStore
* **resourceGroupId**: string: Gets or sets the Snapshot Resource Group Uri.


## AzureOperationalStoreParameters
### Properties
* **objectType**: 'AzureOperationalStoreParameters' (Required): Parameters for Operational-Tier DataStore
* **resourceGroupId**: string: Gets or sets the Snapshot Resource Group Uri.

## UserFacingError
### Properties
* **code**: string: Unique code for this error
* **details**: [UserFacingError](#userfacingerror)[]: Additional related Errors
* **innerError**: [InnerError](#innererror): Inner Error
* **isRetryable**: bool: Whether the operation will be retryable or not
* **isUserError**: bool: Whether the operation is due to a user error or service error
* **message**: string:
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Any key value pairs that can be injected inside error object
* **recommendedAction**: string[]: RecommendedAction � localized.
* **target**: string: Target of the error.

## InnerError
### Properties
* **additionalInfo**: [Dictionary<string,String>](#dictionarystringstring): Any Key value pairs that can be provided to the client for additional  verbose information.
* **code**: string: Unique code for this error
* **embeddedInnerError**: [InnerError](#innererror): Inner Error

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionStatusDetails
### Properties
* **errorDetails**: [UserFacingError](#userfacingerror): Error object used by layers that have access to localized content, and propagate that to user
* **status**: 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'ProtectionConfigured' | 'ProtectionStopped' | 'SoftDeleted' | 'SoftDeleting': Specifies the protection status of the resource.

## BaseBackupPolicy
* **Discriminator**: objectType
### Base Properties
* **datasourceTypes**: string[] (Required): Type of datasource for the backup management
### BackupPolicy
#### Properties
* **objectType**: 'BackupPolicy' (Required): Rule based backup policy
* **policyRules**: [BasePolicyRule](#basepolicyrule)[] (Required): Policy rule dictionary that contains rules for each backuptype i.e Full/Incremental/Logs etc


## BackupPolicy
### Properties
* **objectType**: 'BackupPolicy' (Required): Rule based backup policy
* **policyRules**: [BasePolicyRule](#basepolicyrule)[] (Required): Policy rule dictionary that contains rules for each backuptype i.e Full/Incremental/Logs etc

## BasePolicyRule
* **Discriminator**: objectType
### Base Properties
* **name**: string (Required):
### AzureBackupRule
#### Properties
* **backupParameters**: [BackupParameters](#backupparameters): BackupParameters base
* **dataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): DataStoreInfo base
* **objectType**: 'AzureBackupRule' (Required): Azure backup rule
* **trigger**: [TriggerContext](#triggercontext) (Required): Trigger context

### AzureRetentionRule
#### Properties
* **isDefault**: bool:
* **lifecycles**: [SourceLifeCycle](#sourcelifecycle)[] (Required):
* **objectType**: 'AzureRetentionRule' (Required): Azure retention rule


## AzureBackupRule
### Properties
* **backupParameters**: [BackupParameters](#backupparameters): BackupParameters base
* **dataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): DataStoreInfo base
* **objectType**: 'AzureBackupRule' (Required): Azure backup rule
* **trigger**: [TriggerContext](#triggercontext) (Required): Trigger context

## BackupParameters
* **Discriminator**: objectType
### Base Properties
### AzureBackupParams
#### Properties
* **backupType**: string (Required): BackupType ; Full/Incremental etc
* **objectType**: 'AzureBackupParams' (Required): Azure backup parameters


## AzureBackupParams
### Properties
* **backupType**: string (Required): BackupType ; Full/Incremental etc
* **objectType**: 'AzureBackupParams' (Required): Azure backup parameters

## DataStoreInfoBase
### Properties
* **dataStoreType**: 'ArchiveStore' | 'OperationalStore' | 'VaultStore' (Required): type of datastore; Operational/Vault/Archive.
* **objectType**: string (Required): Type of Datasource object, used to initialize the right inherited type

## TriggerContext
* **Discriminator**: objectType
### Base Properties
### AdhocBasedTriggerContext
#### Properties
* **objectType**: 'AdhocBasedTriggerContext' (Required): Adhoc trigger context
* **taggingCriteria**: [AdhocBasedTaggingCriteria](#adhocbasedtaggingcriteria) (Required): Adhoc backup tagging criteria

### ScheduleBasedTriggerContext
#### Properties
* **objectType**: 'ScheduleBasedTriggerContext' (Required): Schedule based trigger context
* **schedule**: [BackupSchedule](#backupschedule) (Required): Schedule for backup
* **taggingCriteria**: [TaggingCriteria](#taggingcriteria)[] (Required): List of tags that can be applicable for given schedule.


## AdhocBasedTriggerContext
### Properties
* **objectType**: 'AdhocBasedTriggerContext' (Required): Adhoc trigger context
* **taggingCriteria**: [AdhocBasedTaggingCriteria](#adhocbasedtaggingcriteria) (Required): Adhoc backup tagging criteria

## AdhocBasedTaggingCriteria
### Properties
* **tagInfo**: [RetentionTag](#retentiontag): Retention tag

## RetentionTag
### Properties
* **eTag**: string (ReadOnly): Retention Tag version.
* **id**: string (ReadOnly): Retention Tag version.
* **tagName**: string (Required): Retention Tag Name to relate it to retention rule.

## ScheduleBasedTriggerContext
### Properties
* **objectType**: 'ScheduleBasedTriggerContext' (Required): Schedule based trigger context
* **schedule**: [BackupSchedule](#backupschedule) (Required): Schedule for backup
* **taggingCriteria**: [TaggingCriteria](#taggingcriteria)[] (Required): List of tags that can be applicable for given schedule.

## BackupSchedule
### Properties
* **repeatingTimeIntervals**: string[] (Required): ISO 8601 repeating time interval format

## TaggingCriteria
### Properties
* **criteria**: [BackupCriteria](#backupcriteria)[]: Criteria which decides whether the tag can be applied to a triggered backup.
* **isDefault**: bool (Required): Specifies if tag is default.
* **taggingPriority**: int (Required): Retention Tag priority.
* **tagInfo**: [RetentionTag](#retentiontag) (Required): Retention tag

## BackupCriteria
* **Discriminator**: objectType
### Base Properties
### ScheduleBasedBackupCriteria
#### Properties
* **absoluteCriteria**: 'AllBackup' | 'FirstOfDay' | 'FirstOfMonth' | 'FirstOfWeek' | 'FirstOfYear'[]: it contains absolute values like "AllBackup" / "FirstOfDay" / "FirstOfWeek" / "FirstOfMonth"
and should be part of AbsoluteMarker enum
* **daysOfMonth**: [Day](#day)[]: This is day of the month from 1 to 28 other wise last of month
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: It should be Sunday/Monday/T..../Saturday
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]: It should be January/February/....../December
* **objectType**: 'ScheduleBasedBackupCriteria' (Required): Schedule based backup criteria
* **scheduleTimes**: string[]: List of schedule times for backup
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third'[]: It should be First/Second/Third/Fourth/Last


## ScheduleBasedBackupCriteria
### Properties
* **absoluteCriteria**: 'AllBackup' | 'FirstOfDay' | 'FirstOfMonth' | 'FirstOfWeek' | 'FirstOfYear'[]: it contains absolute values like "AllBackup" / "FirstOfDay" / "FirstOfWeek" / "FirstOfMonth"
and should be part of AbsoluteMarker enum
* **daysOfMonth**: [Day](#day)[]: This is day of the month from 1 to 28 other wise last of month
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: It should be Sunday/Monday/T..../Saturday
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]: It should be January/February/....../December
* **objectType**: 'ScheduleBasedBackupCriteria' (Required): Schedule based backup criteria
* **scheduleTimes**: string[]: List of schedule times for backup
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third'[]: It should be First/Second/Third/Fourth/Last

## Day
### Properties
* **date**: int: Date of the month
* **isLast**: bool: Whether Date is last date of month

## AzureRetentionRule
### Properties
* **isDefault**: bool:
* **lifecycles**: [SourceLifeCycle](#sourcelifecycle)[] (Required):
* **objectType**: 'AzureRetentionRule' (Required): Azure retention rule

## SourceLifeCycle
### Properties
* **deleteAfter**: [DeleteOption](#deleteoption) (Required): Delete Option
* **sourceDataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): DataStoreInfo base
* **targetDataStoreCopySettings**: [TargetCopySetting](#targetcopysetting)[]:

## DeleteOption
* **Discriminator**: objectType
### Base Properties
* **duration**: string (Required): Duration of deletion after given timespan
### AbsoluteDeleteOption
#### Properties
* **objectType**: 'AbsoluteDeleteOption' (Required): Delete option with duration


## AbsoluteDeleteOption
### Properties
* **objectType**: 'AbsoluteDeleteOption' (Required): Delete option with duration

## TargetCopySetting
### Properties
* **copyAfter**: [CopyOption](#copyoption) (Required): Options to copy
* **dataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): DataStoreInfo base

## CopyOption
* **Discriminator**: objectType
### Base Properties
### CopyOnExpiryOption
#### Properties
* **objectType**: 'CopyOnExpiryOption' (Required): Copy on Expiry Option

### CustomCopyOption
#### Properties
* **duration**: string: Data copied after given timespan
* **objectType**: 'CustomCopyOption' (Required): Duration based custom options to copy

### ImmediateCopyOption
#### Properties
* **objectType**: 'ImmediateCopyOption' (Required): Immediate copy Option


## CopyOnExpiryOption
### Properties
* **objectType**: 'CopyOnExpiryOption' (Required): Copy on Expiry Option

## CustomCopyOption
### Properties
* **duration**: string: Data copied after given timespan
* **objectType**: 'CustomCopyOption' (Required): Duration based custom options to copy

## ImmediateCopyOption
### Properties
* **objectType**: 'ImmediateCopyOption' (Required): Immediate copy Option

