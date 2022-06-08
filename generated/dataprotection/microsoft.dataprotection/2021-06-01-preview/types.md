# Microsoft.DataProtection @ 2021-06-01-preview

## Resource Microsoft.DataProtection/backupVaults@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DppIdentityDetails](#dppidentitydetails): Identity details
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupVault](#backupvault) (Required): Backup Vault
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppTrackedResourceTags](#dpptrackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupInstances@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupInstance](#backupinstance): Backup Instance
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints@2021-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBackupRecoveryPoint](#azurebackuprecoverypoint) (ReadOnly): Azure backup recoveryPoint
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupJobs@2021-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBackupJob](#azurebackupjob) (ReadOnly): AzureBackup Job Class
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupPolicies@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BaseBackupPolicy](#basebackuppolicy): BackupPolicy base
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/operationResults@2021-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DppIdentityDetails](#dppidentitydetails) (ReadOnly): Identity details
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupVault](#backupvault) (ReadOnly): Backup Vault
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppTrackedResourceTags](#dpptrackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## AdhocBasedTaggingCriteria
### Properties
* **tagInfo**: [RetentionTag](#retentiontag): Retention tag

## AuthCredentials
* **Discriminator**: objectType

### Base Properties
### SecretStoreBasedAuthCredentials
#### Properties
* **objectType**: 'SecretStoreBasedAuthCredentials' (Required): Type of the specific object - used for deserializing
* **secretStoreResource**: [SecretStoreResource](#secretstoreresource): Class representing a secret store resource.


## AzureBackupJob
### Properties
* **activityID**: string (ReadOnly): Job Activity Id
* **backupInstanceFriendlyName**: string (ReadOnly): Name of the Backup Instance
* **backupInstanceId**: string (ReadOnly): ARM ID of the Backup Instance
* **dataSourceId**: string (ReadOnly): ARM ID of the DataSource
* **dataSourceLocation**: string (ReadOnly): Location of the DataSource
* **dataSourceName**: string (ReadOnly): User Friendly Name of the DataSource
* **dataSourceSetName**: string (ReadOnly): Data Source Set Name of the DataSource
* **dataSourceType**: string (ReadOnly): Type of DataSource
* **destinationDataStoreName**: string (ReadOnly)
* **duration**: string (ReadOnly): Total run time of the job. ISO 8601 format.
* **endTime**: string (ReadOnly): EndTime of the job(in UTC)
* **errorDetails**: [UserFacingError](#userfacingerror)[] (ReadOnly): A List, detailing the errors related to the job
* **etag**: string (ReadOnly)
* **extendedInfo**: [JobExtendedInfo](#jobextendedinfo) (ReadOnly): Extended Information about the job
* **isUserTriggered**: bool (ReadOnly): Indicated that whether the job is adhoc(true) or scheduled(false)
* **operation**: string (ReadOnly): It indicates the type of Job i.e. Backup:full/log/diff ;Restore:ALR/OLR; Tiering:Backup/Archive ; Management:ConfigureProtection/UnConfigure
* **operationCategory**: string (ReadOnly): It indicates the type of Job i.e. Backup/Restore/Tiering/Management
* **policyId**: string (ReadOnly): ARM ID of the policy
* **policyName**: string (ReadOnly): Name of the policy
* **progressEnabled**: bool (ReadOnly): Indicated whether progress is enabled for the job
* **progressUrl**: string (ReadOnly): Url which contains job's progress
* **restoreType**: string (ReadOnly): It indicates the sub type of operation i.e. in case of Restore it can be ALR/OLR
* **sourceDataStoreName**: string (ReadOnly)
* **sourceResourceGroup**: string (ReadOnly): Resource Group Name of the Datasource
* **sourceSubscriptionID**: string (ReadOnly): SubscriptionId corresponding to the DataSource
* **startTime**: string (ReadOnly): StartTime of the job(in UTC)
* **status**: string (ReadOnly): Status of the job like InProgress/Success/Failed/Cancelled/SuccessWithWarning
* **subscriptionId**: string (ReadOnly): Subscription Id of the corresponding backup vault
* **supportedActions**: string[] (ReadOnly): List of supported actions
* **vaultName**: string (ReadOnly): Name of the vault

## AzureBackupRecoveryPoint
* **Discriminator**: objectType

### Base Properties
### AzureBackupDiscreteRecoveryPoint
#### Properties
* **friendlyName**: string (ReadOnly)
* **objectType**: 'AzureBackupDiscreteRecoveryPoint' (Required)
* **policyName**: string (ReadOnly)
* **policyVersion**: string (ReadOnly)
* **recoveryPointDataStoresDetails**: [RecoveryPointDataStoreDetails](#recoverypointdatastoredetails)[] (ReadOnly): Array of RecoveryPointDataStoreDetails
* **recoveryPointId**: string (ReadOnly)
* **recoveryPointTime**: string (ReadOnly)
* **recoveryPointType**: string (ReadOnly)
* **retentionTagName**: string (ReadOnly)
* **retentionTagVersion**: string (ReadOnly)


## BackupCriteria
* **Discriminator**: objectType

### Base Properties
### ScheduleBasedBackupCriteria
#### Properties
* **absoluteCriteria**: 'AllBackup' | 'FirstOfDay' | 'FirstOfMonth' | 'FirstOfWeek' | 'FirstOfYear' | string[]: it contains absolute values like "AllBackup" / "FirstOfDay" / "FirstOfWeek" / "FirstOfMonth"
and should be part of AbsoluteMarker enum
* **daysOfMonth**: [Day](#day)[]: This is day of the month from 1 to 28 other wise last of month
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string[]: It should be Sunday/Monday/T..../Saturday
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September' | string[]: It should be January/February/....../December
* **objectType**: 'ScheduleBasedBackupCriteria' (Required): Type of the specific object - used for deserializing
* **scheduleTimes**: string[]: List of schedule times for backup
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third' | string[]: It should be First/Second/Third/Fourth/Last


## BackupInstance
### Properties
* **currentProtectionState**: 'BackupSchedulesSuspended' | 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'Invalid' | 'NotProtected' | 'ProtectionConfigured' | 'ProtectionError' | 'ProtectionStopped' | 'RetentionSchedulesSuspended' | 'SoftDeleted' | 'SoftDeleting' | 'UpdatingProtection' | string (ReadOnly): Specifies the current protection state of the resource
* **datasourceAuthCredentials**: [AuthCredentials](#authcredentials): Base class for different types of authentication credentials.
* **dataSourceInfo**: [Datasource](#datasource) (Required): Datasource to be backed up
* **dataSourceSetInfo**: [DatasourceSet](#datasourceset): DatasourceSet details of datasource to be backed up
* **friendlyName**: string: Gets or sets the Backup Instance friendly name.
* **objectType**: string (Required)
* **policyInfo**: [PolicyInfo](#policyinfo) (Required): Policy Info in backupInstance
* **protectionErrorDetails**: [UserFacingError](#userfacingerror) (ReadOnly): Error object used by layers that have access to localized content, and propagate that to user
* **protectionStatus**: [ProtectionStatusDetails](#protectionstatusdetails) (ReadOnly): Protection status details
* **provisioningState**: string (ReadOnly): Specifies the provisioning state of the resource i.e. provisioning/updating/Succeeded/Failed

## BackupParameters
* **Discriminator**: objectType

### Base Properties
### AzureBackupParams
#### Properties
* **backupType**: string (Required): BackupType ; Full/Incremental etc
* **objectType**: 'AzureBackupParams' (Required): Type of the specific object - used for deserializing


## BackupSchedule
### Properties
* **repeatingTimeIntervals**: string[] (Required): ISO 8601 repeating time interval format

## BackupVault
### Properties
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the BackupVault resource
* **storageSettings**: [StorageSetting](#storagesetting)[] (Required): Storage Settings

## BaseBackupPolicy
* **Discriminator**: objectType

### Base Properties
* **datasourceTypes**: string[] (Required): Type of datasource for the backup management
### BackupPolicy
#### Properties
* **objectType**: 'BackupPolicy' (Required)
* **policyRules**: [BasePolicyRule](#basepolicyrule)[] (Required): Policy rule dictionary that contains rules for each backuptype i.e Full/Incremental/Logs etc


## BasePolicyRule
* **Discriminator**: objectType

### Base Properties
* **name**: string (Required)
### AzureBackupRule
#### Properties
* **backupParameters**: [BackupParameters](#backupparameters): BackupParameters base
* **dataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): DataStoreInfo base
* **objectType**: 'AzureBackupRule' (Required)
* **trigger**: [TriggerContext](#triggercontext) (Required): Trigger context

### AzureRetentionRule
#### Properties
* **isDefault**: bool
* **lifecycles**: [SourceLifeCycle](#sourcelifecycle)[] (Required): Array of SourceLifeCycle
* **objectType**: 'AzureRetentionRule' (Required)


## CopyOption
* **Discriminator**: objectType

### Base Properties
### CopyOnExpiryOption
#### Properties
* **objectType**: 'CopyOnExpiryOption' (Required): Type of the specific object - used for deserializing

### CustomCopyOption
#### Properties
* **duration**: string: Data copied after given timespan
* **objectType**: 'CustomCopyOption' (Required): Type of the specific object - used for deserializing

### ImmediateCopyOption
#### Properties
* **objectType**: 'ImmediateCopyOption' (Required): Type of the specific object - used for deserializing


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

## DataStoreInfoBase
### Properties
* **dataStoreType**: 'ArchiveStore' | 'OperationalStore' | 'VaultStore' | string (Required): type of datastore; Operational/Vault/Archive
* **objectType**: string (Required): Type of Datasource object, used to initialize the right inherited type

## DataStoreParameters
* **Discriminator**: objectType

### Base Properties
* **dataStoreType**: 'ArchiveStore' | 'OperationalStore' | 'VaultStore' | string (Required): type of datastore; Operational/Vault/Archive
### AzureOperationalStoreParameters
#### Properties
* **objectType**: 'AzureOperationalStoreParameters' (Required): Type of the specific object - used for deserializing
* **resourceGroupId**: string: Gets or sets the Snapshot Resource Group Uri.


## Day
### Properties
* **date**: int: Date of the month
* **isLast**: bool: Whether Date is last date of month

## DeleteOption
* **Discriminator**: objectType

### Base Properties
* **duration**: string (Required): Duration of deletion after given timespan
### AbsoluteDeleteOption
#### Properties
* **objectType**: 'AbsoluteDeleteOption' (Required): Type of the specific object - used for deserializing


## DppIdentityDetails
### Properties
* **principalId**: string (ReadOnly): The object ID of the service principal object for the managed identity that is used to grant role-based access to an Azure resource.
* **tenantId**: string (ReadOnly): A Globally Unique Identifier (GUID) that represents the Azure AD tenant where the resource is now a member.
* **type**: string: The identityType which can be either SystemAssigned or None

## DppTrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DppTrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InnerError
### Properties
* **additionalInfo**: [InnerErrorAdditionalInfo](#innererroradditionalinfo): Any Key value pairs that can be provided to the client for additional  verbose information.
* **code**: string: Unique code for this error
* **embeddedInnerError**: [InnerError](#innererror): Inner Error

## InnerErrorAdditionalInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobExtendedInfo
### Properties
* **additionalDetails**: [JobExtendedInfoAdditionalDetails](#jobextendedinfoadditionaldetails) (ReadOnly): Job's Additional Details
* **backupInstanceState**: string (ReadOnly): State of the Backup Instance
* **dataTransferredInBytes**: int (ReadOnly): Number of bytes transferred
* **recoveryDestination**: string (ReadOnly): Destination where restore is done
* **sourceRecoverPoint**: [RestoreJobRecoveryPointDetails](#restorejobrecoverypointdetails) (ReadOnly)
* **subTasks**: [JobSubTask](#jobsubtask)[] (ReadOnly): List of Sub Tasks of the job
* **targetRecoverPoint**: [RestoreJobRecoveryPointDetails](#restorejobrecoverypointdetails) (ReadOnly)

## JobExtendedInfoAdditionalDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobSubTask
### Properties
* **additionalDetails**: [JobSubTaskAdditionalDetails](#jobsubtaskadditionaldetails) (ReadOnly): Additional details of Sub Tasks
* **taskId**: int (ReadOnly): Task Id of the Sub Task
* **taskName**: string (ReadOnly): Name of the Sub Task
* **taskProgress**: string (ReadOnly): Progress of the Sub Task
* **taskStatus**: string (ReadOnly): Status of the Sub Task

## JobSubTaskAdditionalDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PolicyInfo
### Properties
* **policyId**: string (Required)
* **policyParameters**: [PolicyParameters](#policyparameters): Parameters in Policy
* **policyVersion**: string (ReadOnly)

## PolicyParameters
### Properties
* **dataStoreParametersList**: [DataStoreParameters](#datastoreparameters)[]: Gets or sets the DataStore Parameters

## ProtectionStatusDetails
### Properties
* **errorDetails**: [UserFacingError](#userfacingerror): Error object used by layers that have access to localized content, and propagate that to user
* **status**: 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'ProtectionConfigured' | 'ProtectionStopped' | 'SoftDeleted' | 'SoftDeleting' | string: Specifies the protection status of the resource

## RecoveryPointDataStoreDetails
### Properties
* **creationTime**: string (ReadOnly)
* **expiryTime**: string (ReadOnly)
* **id**: string (ReadOnly)
* **metaData**: string (ReadOnly)
* **rehydrationExpiryTime**: string (ReadOnly)
* **rehydrationStatus**: 'COMPLETED' | 'CREATE_IN_PROGRESS' | 'DELETED' | 'DELETE_IN_PROGRESS' | 'FAILED' | string (ReadOnly)
* **state**: string (ReadOnly)
* **type**: string (ReadOnly)
* **visible**: bool (ReadOnly)

## RestoreJobRecoveryPointDetails
### Properties
* **recoveryPointID**: string (ReadOnly)
* **recoveryPointTime**: string (ReadOnly)

## RetentionTag
### Properties
* **eTag**: string (ReadOnly): Retention Tag version.
* **id**: string (ReadOnly): Retention Tag version.
* **tagName**: string (Required): Retention Tag Name to relate it to retention rule.

## SecretStoreResource
### Properties
* **secretStoreType**: 'AzureKeyVault' | 'Invalid' | string (Required): Gets or sets the type of secret store
* **uri**: string: Uri to get to the resource

## SourceLifeCycle
### Properties
* **deleteAfter**: [DeleteOption](#deleteoption) (Required): Delete Option
* **sourceDataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): DataStoreInfo base
* **targetDataStoreCopySettings**: [TargetCopySetting](#targetcopysetting)[]: Array of TargetCopySetting

## StorageSetting
### Properties
* **datastoreType**: 'ArchiveStore' | 'SnapshotStore' | 'VaultStore' | string: Gets or sets the type of the datastore.
* **type**: 'GeoRedundant' | 'LocallyRedundant' | string: Gets or sets the type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.

## TaggingCriteria
### Properties
* **criteria**: [BackupCriteria](#backupcriteria)[]: Criteria which decides whether the tag can be applied to a triggered backup.
* **isDefault**: bool (Required): Specifies if tag is default.
* **taggingPriority**: int (Required): Retention Tag priority.
* **tagInfo**: [RetentionTag](#retentiontag) (Required): Retention tag

## TargetCopySetting
### Properties
* **copyAfter**: [CopyOption](#copyoption) (Required): Options to copy
* **dataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): DataStoreInfo base

## TriggerContext
* **Discriminator**: objectType

### Base Properties
### AdhocBasedTriggerContext
#### Properties
* **objectType**: 'AdhocBasedTriggerContext' (Required): Type of the specific object - used for deserializing
* **taggingCriteria**: [AdhocBasedTaggingCriteria](#adhocbasedtaggingcriteria) (Required): Adhoc backup tagging criteria

### ScheduleBasedTriggerContext
#### Properties
* **objectType**: 'ScheduleBasedTriggerContext' (Required): Type of the specific object - used for deserializing
* **schedule**: [BackupSchedule](#backupschedule) (Required): Schedule for backup
* **taggingCriteria**: [TaggingCriteria](#taggingcriteria)[] (Required): List of tags that can be applicable for given schedule.


## UserFacingError
### Properties
* **code**: string: Unique code for this error
* **details**: [UserFacingError](#userfacingerror)[]: Additional related Errors
* **innerError**: [InnerError](#innererror): Inner Error
* **isRetryable**: bool: Whether the operation will be retryable or not
* **isUserError**: bool: Whether the operation is due to a user error or service error
* **message**: string
* **properties**: [UserFacingErrorProperties](#userfacingerrorproperties): Any key value pairs that can be injected inside error object
* **recommendedAction**: string[]: RecommendedAction � localized.
* **target**: string: Target of the error.

## UserFacingErrorProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

