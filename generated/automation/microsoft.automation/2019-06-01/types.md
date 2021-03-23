# Microsoft.Automation @ 2019-06-01

## Resource Microsoft.Automation/automationAccounts@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AutomationAccountCreateOrUpdateProperties](#automationaccountcreateorupdateproperties)
* **tags**: [AutomationAccountCreateOrUpdateParametersTags](#automationaccountcreateorupdateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/certificates@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DscCompilationJobCreateProperties](#dsccompilationjobcreateproperties) (Required)
* **tags**: [DscCompilationJobCreateParametersTags](#dsccompilationjobcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/configurations@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DscConfigurationProperties](#dscconfigurationproperties) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly)
* **type**: 'Microsoft.Automation/automationAccounts/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connections@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionCreateOrUpdateProperties](#connectioncreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connectionTypes@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionTypeCreateOrUpdateProperties](#connectiontypecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connectionTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/credentials@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CredentialCreateOrUpdateProperties](#credentialcreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/credentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/jobs@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobCreateProperties](#jobcreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/jobSchedules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobScheduleCreateProperties](#jobschedulecreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobSchedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/modules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ModuleCreateOrUpdateProperties](#modulecreateorupdateproperties) (Required)
* **tags**: [ModuleCreateOrUpdateParametersTags](#modulecreateorupdateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts/modules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DscNodeConfigurationCreateOrUpdateParametersProperties](#dscnodeconfigurationcreateorupdateparametersproperties)
* **tags**: [DscNodeConfigurationCreateOrUpdateParametersTags](#dscnodeconfigurationcreateorupdateparameterstags) (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/python2Packages@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PythonPackageCreateProperties](#pythonpackagecreateproperties) (Required)
* **tags**: [PythonPackageCreateParametersTags](#pythonpackagecreateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts/python2Packages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RunbookCreateOrUpdateProperties](#runbookcreateorupdateproperties) (Required)
* **tags**: [RunbookCreateOrUpdateParametersTags](#runbookcreateorupdateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks/draft@2019-06-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'content' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)

### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **logActivityTrace**: int (ReadOnly)
* **name**: 'testJob' (Required, DeployTimeConstant)
* **parameters**: [TestJobCreateParameters](#testjobcreateparameters)
* **runOn**: string
* **startTime**: string (ReadOnly)
* **status**: string (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)


## Resource Microsoft.Automation/automationAccounts/schedules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScheduleCreateOrUpdateProperties](#schedulecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/schedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SoftwareUpdateConfigurationProperties](#softwareupdateconfigurationproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SourceControlCreateOrUpdateProperties](#sourcecontrolcreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SourceControlSyncJobCreateProperties](#sourcecontrolsyncjobcreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/variables@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VariableCreateOrUpdateProperties](#variablecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/variables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/watchers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WatcherProperties](#watcherproperties)
* **tags**: [WatcherTags](#watchertags)
* **type**: 'Microsoft.Automation/automationAccounts/watchers' (ReadOnly, DeployTimeConstant)

## AutomationAccountCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **sku**: [Sku](#sku)
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
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required)
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **incrementNodeConfigurationBuild**: bool (WriteOnly)
* **jobId**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **parameters**: [DscCompilationJobCreatePropertiesParameters](#dsccompilationjobcreatepropertiesparameters)
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
* **parameters**: [DscConfigurationPropertiesParameters](#dscconfigurationpropertiesparameters) (ReadOnly)
* **provisioningState**: 'Succeeded' (ReadOnly)
* **source**: [ContentSource](#contentsource) (ReadOnly)
* **state**: 'Edit' | 'New' | 'Published' (ReadOnly)

## DscConfigurationPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [DscConfigurationParameter](#dscconfigurationparameter)

## DscConfigurationParameter
### Properties
* **defaultValue**: string (ReadOnly)
* **isMandatory**: bool (ReadOnly)
* **position**: int (ReadOnly)
* **type**: string (ReadOnly)

## ContentSource
### Properties
* **hash**: [ContentHash](#contenthash) (WriteOnly)
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

## ConnectionCreateOrUpdateProperties
### Properties
* **connectionType**: [ConnectionTypeAssociationProperty](#connectiontypeassociationproperty) (Required)
* **creationTime**: string (ReadOnly)
* **description**: string
* **fieldDefinitionValues**: [ConnectionCreateOrUpdatePropertiesFieldDefinitionValues](#connectioncreateorupdatepropertiesfielddefinitionvalues)
* **lastModifiedTime**: string (ReadOnly)

## ConnectionTypeAssociationProperty
### Properties
* **name**: string

## ConnectionCreateOrUpdatePropertiesFieldDefinitionValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionTypeCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **fieldDefinitions**: [ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions](#connectiontypecreateorupdatepropertiesfielddefinitions) (Required)
* **isGlobal**: bool
* **lastModifiedTime**: string (ReadOnly)

## ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [FieldDefinition](#fielddefinition)

## FieldDefinition
### Properties
* **isEncrypted**: bool
* **isOptional**: bool
* **type**: string (Required)

## CredentialCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **lastModifiedTime**: string (ReadOnly)
* **password**: string (Required, WriteOnly)
* **userName**: string (Required)

## JobCreateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **jobId**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **parameters**: [JobCreatePropertiesParameters](#jobcreatepropertiesparameters)
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly)
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty)
* **runOn**: string
* **startedBy**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## JobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookAssociationProperty
### Properties
* **name**: string

## JobScheduleCreateProperties
### Properties
* **jobScheduleId**: string (ReadOnly)
* **parameters**: [JobScheduleCreatePropertiesParameters](#jobschedulecreatepropertiesparameters)
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty) (Required)
* **runOn**: string
* **schedule**: [ScheduleAssociationProperty](#scheduleassociationproperty) (Required)

## JobScheduleCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleAssociationProperty
### Properties
* **name**: string

## ModuleCreateOrUpdateProperties
### Properties
* **activityCount**: int (ReadOnly)
* **contentLink**: [ContentLink](#contentlink) (Required)
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **error**: [ModuleErrorInfo](#moduleerrorinfo) (ReadOnly)
* **isComposite**: bool (ReadOnly)
* **isGlobal**: bool (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **provisioningState**: 'ActivitiesStored' | 'Cancelled' | 'ConnectionTypeImported' | 'ContentDownloaded' | 'ContentRetrieved' | 'ContentStored' | 'ContentValidated' | 'Created' | 'Creating' | 'Failed' | 'ModuleDataStored' | 'ModuleImportRunbookComplete' | 'RunningImportModuleRunbook' | 'StartingImportModuleRunbook' | 'Succeeded' | 'Updating' (ReadOnly)
* **sizeInBytes**: int (ReadOnly)
* **version**: string (ReadOnly)

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash)
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
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required)
* **creationTime**: string (ReadOnly)
* **incrementNodeConfigurationBuild**: bool
* **lastModifiedTime**: string (ReadOnly)
* **nodeCount**: int (ReadOnly)
* **source**: [ContentSource](#contentsource) (Required)

## DscNodeConfigurationCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PythonPackageCreateProperties
### Properties
* **activityCount**: int (ReadOnly)
* **contentLink**: [ContentLink](#contentlink) (Required)
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **error**: [ModuleErrorInfo](#moduleerrorinfo) (ReadOnly)
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
* **draft**: [RunbookDraft](#runbookdraft)
* **jobCount**: int (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **logActivityTrace**: int
* **logProgress**: bool
* **logVerbose**: bool
* **outputTypes**: string[] (ReadOnly)
* **parameters**: [RunbookPropertiesParameters](#runbookpropertiesparameters) (ReadOnly)
* **provisioningState**: 'Succeeded' (ReadOnly)
* **publishContentLink**: [ContentLink](#contentlink)
* **runbookType**: 'Graph' | 'GraphPowerShell' | 'GraphPowerShellWorkflow' | 'PowerShell' | 'PowerShellWorkflow' | 'Script' (Required)
* **state**: 'Edit' | 'New' | 'Published' (ReadOnly)

## RunbookDraft
### Properties
* **creationTime**: string
* **draftContentLink**: [ContentLink](#contentlink)
* **inEdit**: bool
* **lastModifiedTime**: string
* **outputTypes**: string[]
* **parameters**: [RunbookDraftParameters](#runbookdraftparameters)

## RunbookDraftParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [RunbookParameter](#runbookparameter)

## RunbookParameter
### Properties
* **defaultValue**: string
* **isMandatory**: bool
* **position**: int
* **type**: string

## RunbookPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [RunbookParameter](#runbookparameter)

## RunbookCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Automation/automationAccounts/runbooks/draft
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'content' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)

## Microsoft.Automation/automationAccounts/runbooks/draft
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **logActivityTrace**: int (ReadOnly)
* **name**: 'testJob' (Required, DeployTimeConstant)
* **parameters**: [TestJobCreateParameters](#testjobcreateparameters)
* **runOn**: string
* **startTime**: string (ReadOnly)
* **status**: string (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)

## TestJobCreateParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleCreateOrUpdateProperties
### Properties
* **advancedSchedule**: [AdvancedSchedule](#advancedschedule)
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
* **monthlyOccurrences**: [AdvancedScheduleMonthlyOccurrence](#advancedschedulemonthlyoccurrence)[]
* **weekDays**: string[]

## AdvancedScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **occurrence**: int

## SoftwareUpdateConfigurationProperties
### Properties
* **createdBy**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **error**: [ErrorResponse](#errorresponse)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **scheduleInfo**: [SUCScheduleProperties](#sucscheduleproperties) (Required)
* **tasks**: [SoftwareUpdateConfigurationTasks](#softwareupdateconfigurationtasks)
* **updateConfiguration**: [UpdateConfiguration](#updateconfiguration) (Required)

## ErrorResponse
### Properties
* **code**: string
* **message**: string

## SUCScheduleProperties
### Properties
* **advancedSchedule**: [AdvancedSchedule](#advancedschedule)
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
* **postTask**: [TaskProperties](#taskproperties)
* **preTask**: [TaskProperties](#taskproperties)

## TaskProperties
### Properties
* **parameters**: [TaskPropertiesParameters](#taskpropertiesparameters)
* **source**: string

## TaskPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpdateConfiguration
### Properties
* **azureVirtualMachines**: string[]
* **duration**: string
* **linux**: [LinuxProperties](#linuxproperties)
* **nonAzureComputerNames**: string[]
* **operatingSystem**: 'Linux' | 'Windows' (Required)
* **targets**: [TargetProperties](#targetproperties)
* **windows**: [WindowsProperties](#windowsproperties)

## LinuxProperties
### Properties
* **excludedPackageNameMasks**: string[]
* **includedPackageClassifications**: 'Critical' | 'Other' | 'Security' | 'Unclassified'
* **includedPackageNameMasks**: string[]
* **rebootSetting**: string

## TargetProperties
### Properties
* **azureQueries**: [AzureQueryProperties](#azurequeryproperties)[]
* **nonAzureQueries**: [NonAzureQueryProperties](#nonazurequeryproperties)[]

## AzureQueryProperties
### Properties
* **locations**: string[]
* **scope**: string[]
* **tagSettings**: [TagSettingsProperties](#tagsettingsproperties)

## TagSettingsProperties
### Properties
* **filterOperator**: 'All' | 'Any'
* **tags**: [TagSettingsPropertiesTags](#tagsettingspropertiestags)

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
* **securityToken**: [SourceControlSecurityTokenProperties](#sourcecontrolsecuritytokenproperties) (WriteOnly)
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
* **scriptParameters**: [WatcherPropertiesScriptParameters](#watcherpropertiesscriptparameters)
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

