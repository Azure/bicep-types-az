# Microsoft.DataProtection @ 2025-07-01

## Resource Microsoft.DataProtection/backupVaults@2025-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DppIdentityDetails](#dppidentitydetails): Input Managed Identity Details
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupVault](#backupvault) (Required): BackupVaultResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppBaseTrackedResourceTags](#dppbasetrackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupInstances@2025-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupInstance](#backupinstance): BackupInstanceResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppProxyResourceTags](#dppproxyresourcetags): Proxy Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupInstances/operationResults@2025-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupInstance](#backupinstance) (ReadOnly): BackupInstanceResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppProxyResourceTags](#dppproxyresourcetags) (ReadOnly): Proxy Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints@2025-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBackupRecoveryPoint](#azurebackuprecoverypoint) (ReadOnly): AzureBackupRecoveryPointResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupJobs@2025-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBackupJob](#azurebackupjob) (ReadOnly): AzureBackupJobResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupPolicies@2025-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BaseBackupPolicy](#basebackuppolicy): BaseBackupPolicyResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/backupResourceGuardProxies@2025-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGuardProxyBase](#resourceguardproxybase): ResourceGuardProxyBaseResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/backupResourceGuardProxies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/deletedBackupInstances@2025-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeletedBackupInstance](#deletedbackupinstance) (ReadOnly): DeletedBackupInstanceResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataProtection/backupVaults/deletedBackupInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/backupVaults/operationResults@2025-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DppIdentityDetails](#dppidentitydetails) (ReadOnly): Input Managed Identity Details
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupVault](#backupvault) (ReadOnly): BackupVaultResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppBaseTrackedResourceTags](#dppbasetrackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.DataProtection/backupVaults/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataProtection/resourceGuards@2025-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGuard](#resourceguard): ResourceGuardResource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DppBaseTrackedResourceTags](#dppbasetrackedresourcetags): Resource tags.
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
* **rehydrationPriority**: string (ReadOnly): Priority to be used for rehydration
* **restoreType**: string (ReadOnly): It indicates the sub type of operation i.e. in case of Restore it can be ALR/OLR
* **sourceDataStoreName**: string
* **sourceResourceGroup**: string (Required): Resource Group Name of the Datasource
* **sourceSubscriptionID**: string (Required): SubscriptionId corresponding to the DataSource
* **startTime**: string (Required): StartTime of the job(in UTC)
* **status**: string (Required): Status of the job like InProgress/Completed/Failed/Cancelled/CompletedWithWarnings/Cancelling/Paused
* **subscriptionId**: string (Required): Subscription Id of the corresponding backup vault
* **supportedActions**: string[] (Required): List of supported actions
* **vaultName**: string (Required): Name of the vault

## AzureBackupRecoveryPoint
* **Discriminator**: objectType

### Base Properties

### AzureBackupDiscreteRecoveryPoint
#### Properties
* **expiryTime**: string (ReadOnly)
* **friendlyName**: string
* **objectType**: 'AzureBackupDiscreteRecoveryPoint' (Required)
* **policyName**: string
* **policyVersion**: string
* **recoveryPointDataStoresDetails**: [RecoveryPointDataStoreDetails](#recoverypointdatastoredetails)[]
* **recoveryPointId**: string
* **recoveryPointState**: 'Completed' | 'Partial' | string: Specifies recovery point completeness. Partial (i.e., only some of the intended items were backed up), or Completed (i.e., ALL intended items were backed up).
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
* **absoluteCriteria**: ('AllBackup' | 'FirstOfDay' | 'FirstOfMonth' | 'FirstOfWeek' | 'FirstOfYear' | string)[]: it contains absolute values like "AllBackup" / "FirstOfDay" / "FirstOfWeek" / "FirstOfMonth"
and should be part of AbsoluteMarker enum
* **daysOfMonth**: [Day](#day)[]: This is day of the month from 1 to 28 other wise last of month
* **daysOfTheWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[]: It should be Sunday/Monday/T..../Saturday
* **monthsOfYear**: ('April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September' | string)[]: It should be January/February/....../December
* **objectType**: 'ScheduleBasedBackupCriteria' (Required): Type of the specific object - used for deserializing
* **scheduleTimes**: string[]: List of schedule times for backup
* **weeksOfTheMonth**: ('First' | 'Fourth' | 'Last' | 'Second' | 'Third' | string)[]: It should be First/Second/Third/Fourth/Last


## BackupDatasourceParameters
* **Discriminator**: objectType

### Base Properties

### AdlsBlobBackupDatasourceParameters
#### Properties
* **containersList**: string[] (Required): List of containers to be backed up during configuration of backup of blobs
* **objectType**: 'AdlsBlobBackupDatasourceParameters' (Required): Type of the specific object - used for deserializing

### KubernetesClusterBackupDatasourceParameters
#### Properties
* **backupHookReferences**: [NamespacedNameResource](#namespacednameresource)[]: Gets or sets the backup hook references. This property sets the hook reference to be executed during backup.
* **excludedNamespaces**: string[]: Gets or sets the exclude namespaces property. This property sets the namespaces to be excluded during backup.
* **excludedResourceTypes**: string[]: Gets or sets the exclude resource types property. This property sets the resource types to be excluded during backup.
* **includeClusterScopeResources**: bool (Required): Gets or sets the include cluster resources property. This property if enabled will include cluster scope resources during backup.
* **includedNamespaces**: string[]: Gets or sets the include namespaces property. This property sets the namespaces to be included during backup.
* **includedResourceTypes**: string[]: Gets or sets the include resource types property. This property sets the resource types to be included during backup.
* **includedVolumeTypes**: ('AzureDisk' | 'AzureFileShareSMB' | string)[]: Gets or sets the include volume types property. This property sets the volume types to be included during backup.
* **labelSelectors**: string[]: Gets or sets the LabelSelectors property. This property sets the resource with such label selectors to be included during backup.
* **objectType**: 'KubernetesClusterBackupDatasourceParameters' (Required): Type of the specific object - used for deserializing
* **snapshotVolumes**: bool (Required): Gets or sets the volume snapshot property. This property if enabled will take volume snapshots during backup.


## BackupInstance
### Properties
* **currentProtectionState**: 'BackupSchedulesSuspended' | 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'Invalid' | 'NotProtected' | 'ProtectionConfigured' | 'ProtectionError' | 'ProtectionStopped' | 'RetentionSchedulesSuspended' | 'SoftDeleted' | 'SoftDeleting' | 'UpdatingProtection' | string (ReadOnly): Specifies the current protection state of the resource
* **datasourceAuthCredentials**: [AuthCredentials](#authcredentials): Credentials to use to authenticate with data source provider.
* **dataSourceInfo**: [Datasource](#datasource) (Required): Gets or sets the data source information.
* **dataSourceSetInfo**: [DatasourceSet](#datasourceset): Gets or sets the data source set information.
* **friendlyName**: string: Gets or sets the Backup Instance friendly name.
* **identityDetails**: [IdentityDetails](#identitydetails): Contains information of the Identity Details for the BI.
If it is null, default will be considered as System Assigned.
* **objectType**: string (Required)
* **policyInfo**: [PolicyInfo](#policyinfo) (Required): Gets or sets the policy information.
* **protectionErrorDetails**: [UserFacingError](#userfacingerror) (ReadOnly): Specifies the protection error of the resource
* **protectionStatus**: [ProtectionStatusDetails](#protectionstatusdetails) (ReadOnly): Specifies the protection status of the resource
* **provisioningState**: string (ReadOnly): Specifies the provisioning state of the resource i.e. provisioning/updating/Succeeded/Failed
* **resourceGuardOperationRequests**: string[]: ResourceGuardOperationRequests on which LAC check will be performed
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
* **bcdrSecurityLevel**: 'Excellent' | 'Fair' | 'Good' | 'NotSupported' | 'Poor' | string (ReadOnly): Security Level of Backup Vault
* **featureSettings**: [FeatureSettings](#featuresettings): Feature Settings
* **isVaultProtectedByResourceGuard**: bool (ReadOnly): Is vault protected by resource guard
* **monitoringSettings**: [MonitoringSettings](#monitoringsettings): Monitoring Settings
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the BackupVault resource
* **replicatedRegions**: string[]: List of replicated regions for Backup Vault
* **resourceGuardOperationRequests**: string[]: ResourceGuardOperationRequests on which LAC check will be performed
* **resourceMoveDetails**: [ResourceMoveDetails](#resourcemovedetails) (ReadOnly): Resource move details for backup vault
* **resourceMoveState**: 'CommitFailed' | 'CommitTimedout' | 'CriticalFailure' | 'Failed' | 'InProgress' | 'MoveSucceeded' | 'PartialSuccess' | 'PrepareFailed' | 'PrepareTimedout' | 'Unknown' | string (ReadOnly): Resource move state for backup vault
* **secureScore**: 'Adequate' | 'Maximum' | 'Minimum' | 'None' | 'NotSupported' | string (ReadOnly): Secure Score of Backup Vault
* **securitySettings**: [SecuritySettings](#securitysettings): Security Settings
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


## BaseResourceProperties
* **Discriminator**: objectType

### Base Properties

### DefaultResourceProperties
#### Properties
* **objectType**: 'DefaultResourceProperties' (Required): Type of the specific object - used for deserializing


## CmkKekIdentity
### Properties
* **identityId**: string: The managed identity to be used which has access permissions to the Key Vault. Provide a value here in case identity types: 'UserAssigned' only.
* **identityType**: 'SystemAssigned' | 'UserAssigned' | string: The identity type. 'SystemAssigned' and 'UserAssigned' are mutually exclusive. 'SystemAssigned' will use implicitly created managed identity.

## CmkKeyVaultProperties
### Properties
* **keyUri**: string: The key uri of the Customer Managed Key

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


## CrossRegionRestoreSettings
### Properties
* **state**: 'Disabled' | 'Enabled' | string: CrossRegionRestore state

## CrossSubscriptionRestoreSettings
### Properties
* **state**: 'Disabled' | 'Enabled' | 'PermanentlyDisabled' | string: CrossSubscriptionRestore state

## Datasource
### Properties
* **datasourceType**: string: DatasourceType of the resource.
* **objectType**: string: Type of Datasource object, used to initialize the right inherited type
* **resourceID**: string (Required): Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
* **resourceLocation**: string: Location of datasource.
* **resourceName**: string: Unique identifier of the resource in the context of parent.
* **resourceProperties**: [BaseResourceProperties](#baseresourceproperties): Properties specific to data source
* **resourceType**: string: Resource Type of Datasource.
* **resourceUri**: string: Uri of the resource.

## DatasourceSet
### Properties
* **datasourceType**: string: DatasourceType of the resource.
* **objectType**: string: Type of Datasource object, used to initialize the right inherited type
* **resourceID**: string (Required): Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
* **resourceLocation**: string: Location of datasource.
* **resourceName**: string: Unique identifier of the resource in the context of parent.
* **resourceProperties**: [BaseResourceProperties](#baseresourceproperties): Properties specific to data source set
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

## DeletedBackupInstance
### Properties
* **currentProtectionState**: 'BackupSchedulesSuspended' | 'ConfiguringProtection' | 'ConfiguringProtectionFailed' | 'Invalid' | 'NotProtected' | 'ProtectionConfigured' | 'ProtectionError' | 'ProtectionStopped' | 'RetentionSchedulesSuspended' | 'SoftDeleted' | 'SoftDeleting' | 'UpdatingProtection' | string (ReadOnly): Specifies the current protection state of the resource
* **datasourceAuthCredentials**: [AuthCredentials](#authcredentials): Credentials to use to authenticate with data source provider.
* **dataSourceInfo**: [Datasource](#datasource) (Required): Gets or sets the data source information.
* **dataSourceSetInfo**: [DatasourceSet](#datasourceset): Gets or sets the data source set information.
* **deletionInfo**: [DeletionInfo](#deletioninfo) (ReadOnly): Deletion info of Backup Instance
* **friendlyName**: string: Gets or sets the Backup Instance friendly name.
* **identityDetails**: [IdentityDetails](#identitydetails): Contains information of the Identity Details for the BI.
If it is null, default will be considered as System Assigned.
* **objectType**: string (Required)
* **policyInfo**: [PolicyInfo](#policyinfo) (Required): Gets or sets the policy information.
* **protectionErrorDetails**: [UserFacingError](#userfacingerror) (ReadOnly): Specifies the protection error of the resource
* **protectionStatus**: [ProtectionStatusDetails](#protectionstatusdetails) (ReadOnly): Specifies the protection status of the resource
* **provisioningState**: string (ReadOnly): Specifies the provisioning state of the resource i.e. provisioning/updating/Succeeded/Failed
* **resourceGuardOperationRequests**: string[]: ResourceGuardOperationRequests on which LAC check will be performed
* **validationType**: 'DeepValidation' | 'ShallowValidation' | string: Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.

## DeleteOption
* **Discriminator**: objectType

### Base Properties
* **duration**: string (Required): Duration of deletion after given timespan

### AbsoluteDeleteOption
#### Properties
* **objectType**: 'AbsoluteDeleteOption' (Required): Type of the specific object - used for deserializing


## DeletionInfo
### Properties
* **billingEndDate**: string (ReadOnly): Specifies billing end date
* **deleteActivityID**: string (ReadOnly): Delete activity ID for troubleshooting purpose
* **deletionTime**: string (ReadOnly): Specifies time of deletion
* **scheduledPurgeTime**: string (ReadOnly): Specifies purge time

## DppBaseTrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DppBaseTrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DppBaseTrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DppIdentityDetails
### Properties
* **principalId**: string (ReadOnly): The object ID of the service principal object for the managed identity that is used to grant role-based access to an Azure resource.
* **tenantId**: string (ReadOnly): A Globally Unique Identifier (GUID) that represents the Azure AD tenant where the resource is now a member.
* **type**: string: The identityType which can be either SystemAssigned, UserAssigned, 'SystemAssigned,UserAssigned' or None
* **userAssignedIdentities**: [DppIdentityDetailsUserAssignedIdentities](#dppidentitydetailsuserassignedidentities): Gets or sets the user assigned identities.

## DppIdentityDetailsUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## DppProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DppProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EncryptionSettings
### Properties
* **infrastructureEncryption**: 'Disabled' | 'Enabled' | string: Enabling/Disabling the Double Encryption state
* **kekIdentity**: [CmkKekIdentity](#cmkkekidentity): The details of the managed identity used for CMK
* **keyVaultProperties**: [CmkKeyVaultProperties](#cmkkeyvaultproperties): The properties of the Key Vault which hosts CMK
* **state**: 'Disabled' | 'Enabled' | 'Inconsistent' | string: Encryption state of the Backup Vault.

## FeatureSettings
### Properties
* **crossRegionRestoreSettings**: [CrossRegionRestoreSettings](#crossregionrestoresettings)
* **crossSubscriptionRestoreSettings**: [CrossSubscriptionRestoreSettings](#crosssubscriptionrestoresettings): CrossSubscriptionRestore Settings

## IdentityDetails
### Properties
* **userAssignedIdentityArmUrl**: string: ARM URL for User Assigned Identity.
* **useSystemAssignedIdentity**: bool: Specifies if the BI is protected by System Identity.

## ImmutabilitySettings
### Properties
* **state**: 'Disabled' | 'Locked' | 'Unlocked' | string: Immutability state

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
* **warningDetails**: [UserFacingWarningDetail](#userfacingwarningdetail)[] (ReadOnly): A List, detailing the warnings related to the job

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

## NamespacedNameResource
### Properties
* **name**: string: Name of the resource
* **namespace**: string: Namespace in which the resource exists

## PolicyInfo
### Properties
* **policyId**: string (Required)
* **policyParameters**: [PolicyParameters](#policyparameters): Policy parameters for the backup instance
* **policyVersion**: string (ReadOnly)

## PolicyParameters
### Properties
* **backupDatasourceParametersList**: [BackupDatasourceParameters](#backupdatasourceparameters)[]: Gets or sets the Backup Data Source Parameters
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

## ResourceGuardOperationDetail
### Properties
* **defaultResourceRequest**: string
* **vaultCriticalOperation**: string

## ResourceGuardProxyBase
### Properties
* **description**: string
* **lastUpdatedTime**: string
* **resourceGuardOperationDetails**: [ResourceGuardOperationDetail](#resourceguardoperationdetail)[]
* **resourceGuardResourceId**: string

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

## SecuritySettings
### Properties
* **encryptionSettings**: [EncryptionSettings](#encryptionsettings): Customer Managed Key details of the resource.
* **immutabilitySettings**: [ImmutabilitySettings](#immutabilitysettings): Immutability Settings at vault level
* **softDeleteSettings**: [SoftDeleteSettings](#softdeletesettings): Soft delete related settings

## SoftDeleteSettings
### Properties
* **retentionDurationInDays**: int: Soft delete retention duration
* **state**: 'AlwaysOn' | 'Off' | 'On' | string: State of soft delete

## SourceLifeCycle
### Properties
* **deleteAfter**: [DeleteOption](#deleteoption) (Required): Delete Option
* **sourceDataStore**: [DataStoreInfoBase](#datastoreinfobase) (Required): DataStoreInfo base
* **targetDataStoreCopySettings**: [TargetCopySetting](#targetcopysetting)[]

## StorageSetting
### Properties
* **datastoreType**: 'ArchiveStore' | 'OperationalStore' | 'VaultStore' | string: Gets or sets the type of the datastore.
* **type**: 'GeoRedundant' | 'LocallyRedundant' | 'ZoneRedundant' | string: Gets or sets the type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
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


## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

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

## UserFacingWarningDetail
### Properties
* **resourceName**: string: Name of resource for which warning is raised.
* **warning**: [UserFacingError](#userfacingerror) (Required): Error details for the warning.

