# Microsoft.DataProtection @ 2022-05-01

## Resource Microsoft.DataProtection/backupVaults@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DppIdentityDetails](#dppidentitydetails): Input Managed Identity Details
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupVault](#backupvault) (Required): BackupVaultResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppTrackedResourceTags](#dpptrackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupInstances@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupInstance](#backupinstance): BackupInstanceResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppProxyResourceTags](#dppproxyresourcetags): Proxy Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupInstances/operationResults@2022-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupInstance](#backupinstance) (ReadOnly): BackupInstanceResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppProxyResourceTags](#dppproxyresourcetags) (ReadOnly): Proxy Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints@2022-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBackupRecoveryPoint](#azurebackuprecoverypoint) (ReadOnly): AzureBackupRecoveryPointResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupJobs@2022-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBackupJob](#azurebackupjob) (ReadOnly): AzureBackupJobResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupPolicies@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BaseBackupPolicy](#basebackuppolicy): BaseBackupPolicyResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/operationResults@2022-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DppIdentityDetails](#dppidentitydetails) (ReadOnly): Input Managed Identity Details
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupVault](#backupvault) (ReadOnly): BackupVaultResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppTrackedResourceTags](#dpptrackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/resourceGuards@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DppIdentityDetails](#dppidentitydetails): Input Managed Identity Details
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGuard](#resourceguard): ResourceGuardResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppTrackedResourceTags](#dpptrackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataProtection/resourceGuards' (ReadOnly, DeployTimeConstant): The resource type

## AdhocBasedTaggingCriteria
### Properties
* **tagInfo**: [RetentionTag](#retentiontag): Retention tag information

## AuthCredentials
* **Discriminator**: objectType

### Base Properties
### SecretStoreBasedAuthCredentials
#### Properties
* **objectType**: 'SecretStoreBasedAuthCredentials' (Required): Type of the specific object - used for deserializing
* **secretStoreResource**: [SecretStoreResource](#secretstoreresource): Secret store resource


## AzureBackupJob
### Properties
* **activityID**: string (Required): Job Activity Id
* **backupInstanceFriendlyName**: string (Required): Name of the Backup Instance
* **backupInstanceId**: string (ReadOnly): ARM ID of the Backup Instance
* **dataSourceId**: string (Required): ARM ID of the DataSource
* **dataSourceLocation**: string (Required): Location of the DataSource
* **dataSourceName**: string (Required): User Friendly Name of the DataSource
* **dataSourceSetName**: string: Data Source Set Name of the DataSource
* **dataSourceType**: string (Required): Type of DataSource
* **destinationDataStoreName**: string
* **duration**: string: Total run time of the job. ISO 8601 format.
* **endTime**: string (ReadOnly): EndTime of the job(in UTC)
* **errorDetails**: [UserFacingError](#userfacingerror)[] (ReadOnly): A List, detailing the errors related to the job
* **etag**: string
* **extendedInfo**: [JobExtendedInfo](#jobextendedinfo) (ReadOnly): Extended Information about the job
* **isUserTriggered**: bool (Required): Indicated that whether the job is adhoc(true) or scheduled(false)
* **operation**: string (Required): It indicates the type of Job i.e. Backup:full/log/diff ;Restore:ALR/OLR; Tiering:Backup/Archive ; Management:ConfigureProtection/UnConfigure
* **operationCategory**: string (Required): It indicates the type of Job i.e. Backup/Restore/Tiering/Management
* **policyId**: string (ReadOnly): ARM ID of the policy
* **policyName**: string (ReadOnly): Name of the policy
* **progressEnabled**: bool (Required): Indicated whether progress is enabled for the job
* **progressUrl**: string (ReadOnly): Url which contains job's progress
* **restoreType**: string (ReadOnly): It indicates the sub type of operation i.e. in case of Restore it can be ALR/OLR
* **sourceDataStoreName**: string
* **sourceResourceGroup**: string (Required): Resource Group Name of the Datasource
* **sourceSubscriptionID**: string (Required): SubscriptionId corresponding to the DataSource
* **startTime**: string (Required): StartTime of the job(in UTC)
* **status**: string (Required): Status of the job like InProgress/Success/Failed/Cancelled/SuccessWithWarning
* **subscriptionId**: string (Required): Subscription Id of the corresponding backup vault
* **supportedActions**: string[] (Required): List of supported actions
* **vaultName**: string (Required): Name of the vault

## AzureBackupRecoveryPoint
* **Discriminator**: objectType

### Base Properties
### AzureBackupDiscreteRecoveryPoint
#### Properties
* **friendlyName**: string
* **objectType**: 'AzureBackupDiscreteRecoveryPoint' (Required)
* **policyName**: string
* **policyVersion**: string
* **recoveryPointDataStoresDetails**: [RecoveryPointDataStoreDetails](#recoverypointdatastoredetails)[]
* **recoveryPointId**: string
* **recoveryPointTime**: string (Required)
* **recoveryPointType**: string
* **retentionTagName**: string
* **retentionTagVersion**: string


## AzureMonitorAlertSettings
### Properties
* **alertsForAllJobFailures**: 'Disabled' | 'Enabled' | string

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
* **datasourceAuthCredentials**: [AuthCredentials](#authcredentials): Credentials to use to authenticate with data source provider.
* **dataSourceInfo**: [Datasource](#datasource) (Required): Gets or sets the data source information.
* **dataSourceSetInfo**: [DatasourceSet](#datasourceset): Gets or sets the data source set information.
* **friendlyName**: string: Gets or sets the Backup Instance friendly name.
* **objectType**: string (Required)
* **policyInfo**: [PolicyInfo](#policyinfo) (Required): Gets or sets the policy information.
* **protectionErrorDetails**: [UserFacingError](#userfacingerror) (ReadOnly): Specifies the protection error of the resource
* **protectionStatus**: [ProtectionStatusDetails](#protectionstatusdetails) (ReadOnly): Specifies the protection status of the resource
* **provisioningState**: string (ReadOnly): Specifies the provisioning state of the resource i.e. provisioning/updating/Succeeded/Failed
* **validationType**: 'DeepValidation' | 'ShallowValidation' | string: Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.

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
* **timeZone**: string: Time zone for a schedule. Example: Pacific Standard Time

## BackupVault
### Properties
* **monitoringSettings**: [MonitoringSettings](#monitoringsettings): Monitoring Settings
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the BackupVault resource
* **resourceMoveDetails**: [ResourceMoveDetails](#resourcemovedetails) (ReadOnly): Resource move details for backup vault
* **resourceMoveState**: 'CommitFailed' | 'CommitTimedout' | 'CriticalFailure' | 'Failed' | 'InProgress' | 'MoveSucceeded' | 'PartialSuccess' | 'PrepareFailed' | 'PrepareTimedout' | 'Unknown' | string (ReadOnly): Resource move state for backup vault
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
* **lifecycles**: [SourceLifeCycle](#sourcelifecycle)[] (Required)
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

## DppProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DppProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DppTrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **embeddedInnerError**: [InnerError](#innererror): Child Inner Error, to allow Nesting.

## InnerErrorAdditionalInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobExtendedInfo
### Properties
* **additionalDetails**: [JobExtendedInfoAdditionalDetails](#jobextendedinfoadditionaldetails): Job's Additional Details
* **backupInstanceState**: string (ReadOnly): State of the Backup Instance
* **dataTransferredInBytes**: int (ReadOnly): Number of bytes transferred
* **recoveryDestination**: string (ReadOnly): Destination where restore is done
* **sourceRecoverPoint**: [RestoreJobRecoveryPointDetails](#restorejobrecoverypointdetails) (ReadOnly): Details of the Source Recovery Point
* **subTasks**: [JobSubTask](#jobsubtask)[] (ReadOnly): List of Sub Tasks of the job
* **targetRecoverPoint**: [RestoreJobRecoveryPointDetails](#restorejobrecoverypointdetails) (ReadOnly): Details of the Target Recovery Point

## JobExtendedInfoAdditionalDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobSubTask
### Properties
* **additionalDetails**: [JobSubTaskAdditionalDetails](#jobsubtaskadditionaldetails): Additional details of Sub Tasks
* **taskId**: int (Required): Task Id of the Sub Task
* **taskName**: string (Required): Name of the Sub Task
* **taskProgress**: string (ReadOnly): Progress of the Sub Task
* **taskStatus**: string (Required): Status of the Sub Task

## JobSubTaskAdditionalDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MonitoringSettings
### Properties
* **azureMonitorAlertSettings**: [AzureMonitorAlertSettings](#azuremonitoralertsettings): Settings for Azure Monitor based alerts

## PolicyInfo
### Properties
* **policyId**: string (Required)
* **policyParameters**: [PolicyParameters](#policyparameters): Policy parameters for the backup instance
* **policyVersion**: string (ReadOnly)

## PolicyParameters
### Properties
* **dataStoreParametersList**: [DataStoreParameters](#datastoreparameters)[]: Gets or sets the DataStore Parameters

## ProtectionStatusDetails
### Properties
* **errorDetails**: [UserFacingError](#userfacingerror): Specifies the protection status error of the resource
* **status**: 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'ProtectionConfigured' | 'ProtectionStopped' | 'SoftDeleted' | 'SoftDeleting' | string: Specifies the protection status of the resource

## RecoveryPointDataStoreDetails
### Properties
* **creationTime**: string
* **expiryTime**: string
* **id**: string
* **metaData**: string
* **rehydrationExpiryTime**: string (ReadOnly)
* **rehydrationStatus**: 'COMPLETED' | 'CREATE_IN_PROGRESS' | 'DELETED' | 'DELETE_IN_PROGRESS' | 'FAILED' | string (ReadOnly)
* **state**: string
* **type**: string
* **visible**: bool

## ResourceGuard
### Properties
* **allowAutoApprovals**: bool (ReadOnly): This flag indicates whether auto approval is allowed or not.
* **description**: string (ReadOnly): Description about the pre-req steps to perform all the critical operations.
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the BackupVault resource
* **resourceGuardOperations**: [ResourceGuardOperation](#resourceguardoperation)[] (ReadOnly): {readonly} List of operation details those are protected by the ResourceGuard resource
* **vaultCriticalOperationExclusionList**: string[]: List of critical operations which are not protected by this resourceGuard

## ResourceGuardOperation
### Properties
* **requestResourceType**: string (ReadOnly): Type of resource request.
* **vaultCriticalOperation**: string (ReadOnly): Name of the critical operation.

## ResourceMoveDetails
### Properties
* **completionTimeUtc**: string: Completion time in UTC of latest ResourceMove operation attempted. ISO 8601 format.
* **operationId**: string: CorrelationId of latest ResourceMove operation attempted
* **sourceResourcePath**: string: ARM resource path of source resource
* **startTimeUtc**: string: Start time in UTC of latest ResourceMove operation attempted. ISO 8601 format.
* **targetResourcePath**: string: ARM resource path of target resource used in latest ResourceMove operation

## RestoreJobRecoveryPointDetails
### Properties
* **recoveryPointID**: string
* **recoveryPointTime**: string

## RetentionTag
### Properties
* **eTag**: string (ReadOnly): Retention Tag version.
* **id**: string (ReadOnly): Retention Tag version.
* **tagName**: string (Required): Retention Tag Name to relate it to retention rule.

## SecretStoreResource
### Properties
* **secretStoreType**: 'AzureKeyVault' | 'Invalid' | string (Required): Gets or sets the type of secret store
* **uri**: string: Uri to get to the resource
* **value**: string: Gets or sets value stored in secret store resource

## SourceLifeCycle
### Properties
* **deleteAfter**: [DeleteOption](#deleteoption) (Required): Delete Option
* **sourceDataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): DataStoreInfo base
* **targetDataStoreCopySettings**: [TargetCopySetting](#targetcopysetting)[]

## StorageSetting
### Properties
* **datastoreType**: 'ArchiveStore' | 'SnapshotStore' | 'VaultStore' | string: Gets or sets the type of the datastore.
* **type**: 'GeoRedundant' | 'LocallyRedundant' | 'ZoneRedundant' | string: Gets or sets the type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TaggingCriteria
### Properties
* **criteria**: [BackupCriteria](#backupcriteria)[]: Criteria which decides whether the tag can be applied to a triggered backup.
* **isDefault**: bool (Required): Specifies if tag is default.
* **taggingPriority**: int (Required): Retention Tag priority.
* **tagInfo**: [RetentionTag](#retentiontag) (Required): Retention tag information

## TargetCopySetting
### Properties
* **copyAfter**: [CopyOption](#copyoption) (Required): It can be CustomCopyOption or ImmediateCopyOption.
* **dataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): Info of target datastore

## TriggerContext
* **Discriminator**: objectType

### Base Properties
### AdhocBasedTriggerContext
#### Properties
* **objectType**: 'AdhocBasedTriggerContext' (Required): Type of the specific object - used for deserializing
* **taggingCriteria**: [AdhocBasedTaggingCriteria](#adhocbasedtaggingcriteria) (Required): Tagging Criteria containing retention tag for adhoc backup.

### ScheduleBasedTriggerContext
#### Properties
* **objectType**: 'ScheduleBasedTriggerContext' (Required): Type of the specific object - used for deserializing
* **schedule**: [BackupSchedule](#backupschedule) (Required): Schedule for this backup
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

