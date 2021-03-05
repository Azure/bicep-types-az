# Microsoft.Automation @ 2019-06-01

## Resource Microsoft.Automation/automationAccounts@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AutomationAccountCreateOrUpdateProperties
* **tags**: AutomationAccountCreateOrUpdateParametersTags
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/certificates@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscCompilationJobCreateProperties (Required)
* **tags**: DscCompilationJobCreateParametersTags (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/configurations@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscConfigurationProperties (ReadOnly)
* **tags**: TrackedResourceTags (ReadOnly)
* **type**: 'Microsoft.Automation/automationAccounts/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connectionTypes@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionTypeCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connectionTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connections@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/credentials@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CredentialCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/credentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/jobSchedules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobScheduleCreateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobSchedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/jobs@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobCreateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/modules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ModuleCreateOrUpdateProperties (Required)
* **tags**: ModuleCreateOrUpdateParametersTags
* **type**: 'Microsoft.Automation/automationAccounts/modules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscNodeConfigurationCreateOrUpdateParametersProperties
* **tags**: DscNodeConfigurationCreateOrUpdateParametersTags (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/python2Packages@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PythonPackageCreateProperties (Required)
* **tags**: PythonPackageCreateParametersTags
* **type**: 'Microsoft.Automation/automationAccounts/python2Packages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RunbookCreateOrUpdateProperties (Required)
* **tags**: RunbookCreateOrUpdateParametersTags
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/schedules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/schedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SoftwareUpdateConfigurationProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SourceControlCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SourceControlSyncJobCreateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/variables@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VariableCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/variables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/watchers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WatcherProperties
* **tags**: WatcherTags
* **type**: 'Microsoft.Automation/automationAccounts/watchers' (ReadOnly, DeployTimeConstant)

## AutomationAccountCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **sku**: Sku
* **state**: 'Ok' | 'Suspended' | 'Unavailable' (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: 'Basic' | 'Free' (Required)

## AutomationAccountCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateCreateOrUpdateProperties
### Properties
* **base64Value**: string (Required, WriteOnly)
* **creationTime**: string (ReadOnly)
* **description**: string
* **expiryTime**: string (ReadOnly)
* **isExportable**: bool
* **lastModifiedTime**: string (ReadOnly)
* **thumbprint**: string

## DscCompilationJobCreateProperties
### Properties
* **configuration**: DscConfigurationAssociationProperty (Required)
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **incrementNodeConfigurationBuild**: bool (WriteOnly)
* **jobId**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **parameters**: DscCompilationJobCreatePropertiesParameters
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly)
* **runOn**: string (ReadOnly)
* **startedBy**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## DscConfigurationAssociationProperty
### Properties
* **name**: string

## DscCompilationJobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscCompilationJobCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscConfigurationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **jobCount**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **logVerbose**: bool (ReadOnly)
* **nodeConfigurationCount**: int (ReadOnly)
* **parameters**: DscConfigurationPropertiesParameters (ReadOnly)
* **provisioningState**: '[object Object]' (ReadOnly)
* **source**: ContentSource (ReadOnly)
* **state**: 'Edit' | 'New' | 'Published' (ReadOnly)

## DscConfigurationPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: DscConfigurationParameter

## DscConfigurationParameter
### Properties
* **defaultValue**: string (ReadOnly)
* **isMandatory**: bool (ReadOnly)
* **position**: int (ReadOnly)
* **type**: string (ReadOnly)

## ContentSource
### Properties
* **hash**: ContentHash (WriteOnly)
* **type**: 'embeddedContent' | 'uri' (WriteOnly)
* **value**: string (WriteOnly)
* **version**: string (WriteOnly)

## ContentHash
### Properties
* **algorithm**: string (Required)
* **value**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionTypeCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **fieldDefinitions**: ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions (Required)
* **isGlobal**: bool
* **lastModifiedTime**: string (ReadOnly)

## ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: FieldDefinition

## FieldDefinition
### Properties
* **isEncrypted**: bool
* **isOptional**: bool
* **type**: string (Required)

## ConnectionCreateOrUpdateProperties
### Properties
* **connectionType**: ConnectionTypeAssociationProperty (Required)
* **creationTime**: string (ReadOnly)
* **description**: string
* **fieldDefinitionValues**: ConnectionCreateOrUpdatePropertiesFieldDefinitionValues
* **lastModifiedTime**: string (ReadOnly)

## ConnectionTypeAssociationProperty
### Properties
* **name**: string

## ConnectionCreateOrUpdatePropertiesFieldDefinitionValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CredentialCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **lastModifiedTime**: string (ReadOnly)
* **password**: string (Required, WriteOnly)
* **userName**: string (Required)

## JobScheduleCreateProperties
### Properties
* **jobScheduleId**: string (ReadOnly)
* **parameters**: JobScheduleCreatePropertiesParameters
* **runbook**: RunbookAssociationProperty (Required)
* **runOn**: string
* **schedule**: ScheduleAssociationProperty (Required)

## JobScheduleCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookAssociationProperty
### Properties
* **name**: string

## ScheduleAssociationProperty
### Properties
* **name**: string

## JobCreateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **jobId**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **parameters**: JobCreatePropertiesParameters
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly)
* **runbook**: RunbookAssociationProperty
* **runOn**: string
* **startedBy**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## JobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModuleCreateOrUpdateProperties
### Properties
* **activityCount**: int (ReadOnly)
* **contentLink**: ContentLink (Required)
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **error**: ModuleErrorInfo (ReadOnly)
* **isComposite**: bool (ReadOnly)
* **isGlobal**: bool (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **provisioningState**: 'ActivitiesStored' | 'Cancelled' | 'ConnectionTypeImported' | 'ContentDownloaded' | 'ContentRetrieved' | 'ContentStored' | 'ContentValidated' | 'Created' | 'Creating' | 'Failed' | 'ModuleDataStored' | 'ModuleImportRunbookComplete' | 'RunningImportModuleRunbook' | 'StartingImportModuleRunbook' | 'Succeeded' | 'Updating' (ReadOnly)
* **sizeInBytes**: int (ReadOnly)
* **version**: string (ReadOnly)

## ContentLink
### Properties
* **contentHash**: ContentHash
* **uri**: string
* **version**: string

## ModuleErrorInfo
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## ModuleCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscNodeConfigurationCreateOrUpdateParametersProperties
### Properties
* **configuration**: DscConfigurationAssociationProperty (Required)
* **creationTime**: string (ReadOnly)
* **incrementNodeConfigurationBuild**: bool
* **lastModifiedTime**: string (ReadOnly)
* **nodeCount**: int (ReadOnly)
* **source**: ContentSource (Required)

## DscNodeConfigurationCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PythonPackageCreateProperties
### Properties
* **activityCount**: int (ReadOnly)
* **contentLink**: ContentLink (Required)
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **error**: ModuleErrorInfo (ReadOnly)
* **isComposite**: bool (ReadOnly)
* **isGlobal**: bool (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **provisioningState**: 'ActivitiesStored' | 'Cancelled' | 'ConnectionTypeImported' | 'ContentDownloaded' | 'ContentRetrieved' | 'ContentStored' | 'ContentValidated' | 'Created' | 'Creating' | 'Failed' | 'ModuleDataStored' | 'ModuleImportRunbookComplete' | 'RunningImportModuleRunbook' | 'StartingImportModuleRunbook' | 'Succeeded' | 'Updating' (ReadOnly)
* **sizeInBytes**: int (ReadOnly)
* **version**: string (ReadOnly)

## PythonPackageCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **draft**: RunbookDraft
* **jobCount**: int (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **logActivityTrace**: int
* **logProgress**: bool
* **logVerbose**: bool
* **outputTypes**: string[] (ReadOnly)
* **parameters**: RunbookPropertiesParameters (ReadOnly)
* **provisioningState**: '[object Object]' (ReadOnly)
* **publishContentLink**: ContentLink
* **runbookType**: 'Graph' | 'GraphPowerShell' | 'GraphPowerShellWorkflow' | 'PowerShell' | 'PowerShellWorkflow' | 'Script' (Required)
* **state**: 'Edit' | 'New' | 'Published' (ReadOnly)

## RunbookDraft
### Properties
* **creationTime**: string
* **draftContentLink**: ContentLink
* **inEdit**: bool
* **lastModifiedTime**: string
* **outputTypes**: string[]
* **parameters**: RunbookDraftParameters

## RunbookDraftParameters
### Properties
### Additional Properties
* **Additional Properties Type**: RunbookParameter

## RunbookParameter
### Properties
* **defaultValue**: string
* **isMandatory**: bool
* **position**: int
* **type**: string

## RunbookPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: RunbookParameter

## RunbookCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleCreateOrUpdateProperties
### Properties
* **advancedSchedule**: AdvancedSchedule
* **creationTime**: string (ReadOnly)
* **description**: string
* **expiryTime**: string
* **expiryTimeOffsetMinutes**: int (ReadOnly)
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'OneTime' | 'Week' (Required)
* **interval**: any
* **isEnabled**: bool (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **nextRun**: string (ReadOnly)
* **nextRunOffsetMinutes**: int (ReadOnly)
* **startTime**: string (Required)
* **startTimeOffsetMinutes**: int (ReadOnly)
* **timeZone**: string

## AdvancedSchedule
### Properties
* **monthDays**: int[]
* **monthlyOccurrences**: AdvancedScheduleMonthlyOccurrence[]
* **weekDays**: string[]

## AdvancedScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **occurrence**: int

## SoftwareUpdateConfigurationProperties
### Properties
* **createdBy**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **error**: ErrorResponse
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **scheduleInfo**: SUCScheduleProperties (Required)
* **tasks**: SoftwareUpdateConfigurationTasks
* **updateConfiguration**: UpdateConfiguration (Required)

## ErrorResponse
### Properties
* **code**: string
* **message**: string

## SUCScheduleProperties
### Properties
* **advancedSchedule**: AdvancedSchedule
* **creationTime**: string
* **description**: string
* **expiryTime**: string
* **expiryTimeOffsetMinutes**: int
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'OneTime' | 'Week'
* **interval**: int
* **isEnabled**: bool
* **lastModifiedTime**: string
* **nextRun**: string
* **nextRunOffsetMinutes**: int
* **startTime**: string
* **startTimeOffsetMinutes**: int (ReadOnly)
* **timeZone**: string

## SoftwareUpdateConfigurationTasks
### Properties
* **postTask**: TaskProperties
* **preTask**: TaskProperties

## TaskProperties
### Properties
* **parameters**: TaskPropertiesParameters
* **source**: string

## TaskPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpdateConfiguration
### Properties
* **azureVirtualMachines**: string[]
* **duration**: any
* **linux**: LinuxProperties
* **nonAzureComputerNames**: string[]
* **operatingSystem**: 'Linux' | 'Windows' (Required)
* **targets**: TargetProperties
* **windows**: WindowsProperties

## LinuxProperties
### Properties
* **excludedPackageNameMasks**: string[]
* **includedPackageClassifications**: 'Critical' | 'Other' | 'Security' | 'Unclassified'
* **includedPackageNameMasks**: string[]
* **rebootSetting**: string

## TargetProperties
### Properties
* **azureQueries**: AzureQueryProperties[]
* **nonAzureQueries**: NonAzureQueryProperties[]

## AzureQueryProperties
### Properties
* **locations**: string[]
* **scope**: string[]
* **tagSettings**: TagSettingsProperties

## TagSettingsProperties
### Properties
* **filterOperator**: 'All' | 'Any'
* **tags**: TagSettingsPropertiesTags

## TagSettingsPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## NonAzureQueryProperties
### Properties
* **functionAlias**: string
* **workspaceId**: string

## WindowsProperties
### Properties
* **excludedKbNumbers**: string[]
* **includedKbNumbers**: string[]
* **includedUpdateClassifications**: 'Critical' | 'Definition' | 'FeaturePack' | 'Security' | 'ServicePack' | 'Tools' | 'Unclassified' | 'UpdateRollup' | 'Updates'
* **rebootSetting**: string

## SourceControlCreateOrUpdateProperties
### Properties
* **autoSync**: bool
* **branch**: string
* **creationTime**: string (ReadOnly)
* **description**: string
* **folderPath**: string
* **lastModifiedTime**: string (ReadOnly)
* **publishRunbook**: bool
* **repoUrl**: string
* **securityToken**: SourceControlSecurityTokenProperties (WriteOnly)
* **sourceType**: 'GitHub' | 'VsoGit' | 'VsoTfvc'

## SourceControlSecurityTokenProperties
### Properties
* **accessToken**: string (WriteOnly)
* **refreshToken**: string (WriteOnly)
* **tokenType**: 'Oauth' | 'PersonalAccessToken' (WriteOnly)

## SourceControlSyncJobCreateProperties
### Properties
* **commitId**: string (Required, WriteOnly)
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **provisioningState**: 'Completed' | 'Failed' | 'Running' (ReadOnly)
* **sourceControlSyncJobId**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **syncType**: 'FullSync' | 'PartialSync' (ReadOnly)

## VariableCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **isEncrypted**: bool
* **lastModifiedTime**: string (ReadOnly)
* **value**: string

## WatcherProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **executionFrequencyInSeconds**: int
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **scriptName**: string
* **scriptParameters**: WatcherPropertiesScriptParameters
* **scriptRunOn**: string
* **status**: string (ReadOnly)

## WatcherPropertiesScriptParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WatcherTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

