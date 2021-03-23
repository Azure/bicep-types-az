# Microsoft.Automation @ 2015-10-31

## Resource Microsoft.Automation/automationAccounts@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AutomationAccountCreateOrUpdateProperties](#automationaccountcreateorupdateproperties)
* **tags**: [AutomationAccountCreateOrUpdateParametersTags](#automationaccountcreateorupdateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/certificates@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DscCompilationJobCreateProperties](#dsccompilationjobcreateproperties) (Required)
* **tags**: [DscCompilationJobCreateParametersTags](#dsccompilationjobcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/configurations@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DscConfigurationProperties](#dscconfigurationproperties) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly)
* **type**: 'Microsoft.Automation/automationAccounts/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connections@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionCreateOrUpdateProperties](#connectioncreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connectionTypes@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionTypeCreateOrUpdateProperties](#connectiontypecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connectionTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/credentials@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CredentialCreateOrUpdateProperties](#credentialcreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/credentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/jobs@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobCreateProperties](#jobcreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/jobSchedules@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobScheduleCreateProperties](#jobschedulecreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobSchedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/modules@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ModuleCreateOrUpdateProperties](#modulecreateorupdateproperties) (Required)
* **tags**: [ModuleCreateOrUpdateParametersTags](#modulecreateorupdateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts/modules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required)
* **creationTime**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **incrementNodeConfigurationBuild**: bool (WriteOnly)
* **lastModifiedTime**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **source**: [ContentSource](#contentsource) (Required, WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RunbookCreateOrUpdateProperties](#runbookcreateorupdateproperties) (Required)
* **tags**: [RunbookCreateOrUpdateParametersTags](#runbookcreateorupdateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks/draft@2015-10-31
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'content' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)

### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
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


## Resource Microsoft.Automation/automationAccounts/schedules@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScheduleCreateOrUpdateProperties](#schedulecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/schedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/variables@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VariableCreateOrUpdateProperties](#variablecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/variables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/watchers@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WatcherProperties](#watcherproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Automation/automationAccounts/watchers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/webhooks@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebhookCreateOrUpdateProperties](#webhookcreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/webhooks' (ReadOnly, DeployTimeConstant)

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
* **hash**: [ContentHash](#contenthash) (ReadOnly)
* **type**: 'embeddedContent' | 'uri' (ReadOnly)
* **value**: string (ReadOnly)
* **version**: string (ReadOnly)

## ContentHash
### Properties
* **algorithm**: string (ReadOnly)
* **value**: string (ReadOnly)

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
* **jobScheduleId**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **parameters**: [JobCreatePropertiesParameters](#jobcreatepropertiesparameters)
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly)
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty) (Required)
* **runOn**: string
* **schedule**: [ScheduleAssociationProperty](#scheduleassociationproperty) (ReadOnly)
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

## ScheduleAssociationProperty
### Properties
* **name**: string (ReadOnly)

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
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'content' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)

## Microsoft.Automation/automationAccounts/runbooks/draft
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **expiryTime**: string
* **isEnabled**: bool
* **lastInvokedTime**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **parameters**: [WebhookCreateOrUpdatePropertiesParameters](#webhookcreateorupdatepropertiesparameters)
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty)
* **runOn**: string
* **uri**: string

## WebhookCreateOrUpdatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

