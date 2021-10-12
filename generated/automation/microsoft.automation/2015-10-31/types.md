# Microsoft.Automation @ 2015-10-31

## Resource Microsoft.Automation/automationAccounts@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationAccountCreateOrUpdateProperties](#automationaccountcreateorupdateproperties): Definition of the account property.
* **tags**: [AutomationAccountCreateOrUpdateParametersTags](#automationaccountcreateorupdateparameterstags): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/certificates@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties) (Required): Properties of the certificate.
* **type**: 'Microsoft.Automation/automationAccounts/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscCompilationJobCreateProperties](#dsccompilationjobcreateproperties) (Required): Definition of Dsc Compilation job properties.
* **tags**: [DscCompilationJobCreateParametersTags](#dsccompilationjobcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/configurations@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscConfigurationCreateOrUpdateProperties](#dscconfigurationcreateorupdateproperties) (Required): Definition of the configuration property type.
* **tags**: [DscConfigurationCreateOrUpdateParametersTags](#dscconfigurationcreateorupdateparameterstags): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/connections@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionCreateOrUpdateProperties](#connectioncreateorupdateproperties) (Required): Definition of the connection properties.
* **type**: 'Microsoft.Automation/automationAccounts/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/connectionTypes@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionTypeCreateOrUpdateProperties](#connectiontypecreateorupdateproperties) (Required): Properties of the connection type.
* **type**: 'Microsoft.Automation/automationAccounts/connectionTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/credentials@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CredentialCreateOrUpdateProperties](#credentialcreateorupdateproperties) (Required): Definition of the credential properties
* **type**: 'Microsoft.Automation/automationAccounts/credentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/jobs@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobCreateProperties](#jobcreateproperties) (Required): Definition of job properties.
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/jobSchedules@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobScheduleCreateProperties](#jobschedulecreateproperties) (Required): Definition of job schedule parameters.
* **type**: 'Microsoft.Automation/automationAccounts/jobSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/modules@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModuleCreateOrUpdateProperties](#modulecreateorupdateproperties) (Required): Definition of the module property type.
* **tags**: [ModuleCreateOrUpdateParametersTags](#modulecreateorupdateparameterstags): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required): The Dsc configuration property associated with the entity.
* **creationTime**: string (ReadOnly): Gets or sets creation time.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **incrementNodeConfigurationBuild**: bool (WriteOnly)
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **name**: string (Required, DeployTimeConstant): The resource name
* **source**: [ContentSource](#contentsource) (Required, WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/runbooks@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RunbookCreateOrUpdateProperties](#runbookcreateorupdateproperties) (Required): Definition of the runbook property type.
* **tags**: [RunbookCreateOrUpdateParametersTags](#runbookcreateorupdateparameterstags): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/runbooks/draft@2015-10-31
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'content' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **creationTime**: string (ReadOnly): Gets or sets the creation time of the test job.
* **endTime**: string (ReadOnly): Gets or sets the end time of the test job.
* **exception**: string (ReadOnly): Gets or sets the exception of the test job.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time of the test job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets or sets the last status modified time of the test job.
* **logActivityTrace**: int (ReadOnly): The activity-level tracing options of the runbook.
* **name**: 'testJob' (Required, DeployTimeConstant): The resource name
* **parameters**: [TestJobCreateParameters](#testjobcreateparameters): Gets or sets the parameters of the test job.
* **runOn**: string: Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startTime**: string (ReadOnly): Gets or sets the start time of the test job.
* **status**: string (ReadOnly): Gets or sets the status of the test job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the test job.
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Automation/automationAccounts/schedules@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleCreateOrUpdateProperties](#schedulecreateorupdateproperties) (Required): Definition of schedule parameters.
* **type**: 'Microsoft.Automation/automationAccounts/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/variables@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VariableCreateOrUpdateProperties](#variablecreateorupdateproperties) (Required): Definition of the variable properties
* **type**: 'Microsoft.Automation/automationAccounts/variables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/watchers@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatcherProperties](#watcherproperties): Definition of the watcher properties
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/watchers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/webhooks@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebhookCreateOrUpdateProperties](#webhookcreateorupdateproperties) (Required): Definition of the webhook properties
* **type**: 'Microsoft.Automation/automationAccounts/webhooks' (ReadOnly, DeployTimeConstant): The resource type

## AutomationAccountCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **lastModifiedBy**: string (ReadOnly): Gets or sets the last modified by.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **sku**: [Sku](#sku): The account SKU.
* **state**: 'Ok' | 'Suspended' | 'Unavailable' (ReadOnly): Gets status of account.

## Sku
### Properties
* **capacity**: int: Gets or sets the SKU capacity.
* **family**: string: Gets or sets the SKU family.
* **name**: 'Basic' | 'Free' (Required): Gets or sets the SKU name of the account.

## AutomationAccountCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateCreateOrUpdateProperties
### Properties
* **base64Value**: string (Required, WriteOnly)
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string: Gets or sets the description.
* **expiryTime**: string (ReadOnly): Gets the expiry time of the certificate.
* **isExportable**: bool: Gets the is exportable flag of the certificate.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **thumbprint**: string: Gets the thumbprint of the certificate.

## DscCompilationJobCreateProperties
### Properties
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required): The Dsc configuration property associated with the entity.
* **creationTime**: string (ReadOnly): Gets the creation time of the job.
* **endTime**: string (ReadOnly): Gets the end time of the job.
* **exception**: string (ReadOnly): Gets the exception of the job.
* **incrementNodeConfigurationBuild**: bool (WriteOnly)
* **jobId**: string (ReadOnly): Gets the id of the job.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time of the job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets the last status modified time of the job.
* **parameters**: [DscCompilationJobCreatePropertiesParameters](#dsccompilationjobcreatepropertiesparameters): Gets or sets the parameters of the job.
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly): The provisioning state of the resource.
* **runOn**: string (ReadOnly): Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startedBy**: string (ReadOnly): Gets the compilation job started by.
* **startTime**: string (ReadOnly): Gets the start time of the job.
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly): Gets or sets the status of the job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the job.

## DscConfigurationAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the Dsc configuration.

## DscCompilationJobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscCompilationJobCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscConfigurationCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description.
* **jobCount**: int (ReadOnly): Gets or sets the job count of the configuration.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **logProgress**: bool (WriteOnly)
* **logVerbose**: bool: Gets or sets verbose log option.
* **nodeConfigurationCount**: int (ReadOnly): Gets the number of compiled node configurations.
* **parameters**: [DscConfigurationCreateOrUpdatePropertiesParameters](#dscconfigurationcreateorupdatepropertiesparameters): Gets or sets the configuration parameters.
* **provisioningState**: 'Succeeded' (ReadOnly): Gets or sets the provisioning state of the configuration.
* **source**: [ContentSource](#contentsource) (Required): Definition of the content source.
* **state**: 'Edit' | 'New' | 'Published' (ReadOnly): Gets or sets the state of the configuration.

## DscConfigurationCreateOrUpdatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [DscConfigurationParameter](#dscconfigurationparameter)

## DscConfigurationParameter
### Properties
* **defaultValue**: string: Gets or sets the default value of parameter.
* **isMandatory**: bool: Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
* **position**: int: Get or sets the position of the parameter.
* **type**: string: Gets or sets the type of the parameter.

## ContentSource
### Properties
* **hash**: [ContentHash](#contenthash): Definition of the runbook property type.
* **type**: 'embeddedContent' | 'uri': Gets or sets the content source type.
* **value**: string: Gets or sets the value of the content. This is based on the content source type.
* **version**: string: Gets or sets the version of the content.

## ContentHash
### Properties
* **algorithm**: string (Required): Gets or sets the content hash algorithm used to hash the content.
* **value**: string (Required): Gets or sets expected hash value of the content.

## DscConfigurationCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionCreateOrUpdateProperties
### Properties
* **connectionType**: [ConnectionTypeAssociationProperty](#connectiontypeassociationproperty) (Required): The connection type property associated with the entity.
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string: Gets or sets the description.
* **fieldDefinitionValues**: [ConnectionCreateOrUpdatePropertiesFieldDefinitionValues](#connectioncreateorupdatepropertiesfielddefinitionvalues): Gets the field definition values of the connection.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.

## ConnectionTypeAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the connection type.

## ConnectionCreateOrUpdatePropertiesFieldDefinitionValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionTypeCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **fieldDefinitions**: [ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions](#connectiontypecreateorupdatepropertiesfielddefinitions) (Required): Gets the field definitions of the connection type.
* **isGlobal**: bool: Gets or sets a Boolean value to indicate if the connection type is global.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.

## ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [FieldDefinition](#fielddefinition)

## FieldDefinition
### Properties
* **isEncrypted**: bool: Gets or sets the isEncrypted flag of the connection field definition.
* **isOptional**: bool: Gets or sets the isOptional flag of the connection field definition.
* **type**: string (Required): Gets or sets the type of the connection field definition.

## CredentialCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string: Gets or sets the description.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **password**: string (Required, WriteOnly)
* **userName**: string (Required): Gets the user name of the credential.

## JobCreateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time of the job.
* **endTime**: string (ReadOnly): Gets or sets the end time of the job.
* **exception**: string (ReadOnly): Gets or sets the exception of the job.
* **jobId**: string (ReadOnly): Gets or sets the id of the job.
* **jobScheduleId**: string (ReadOnly): Gets or sets the id of job schedule.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time of the job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets or sets the last status modified time of the job.
* **parameters**: [JobCreatePropertiesParameters](#jobcreatepropertiesparameters): Gets or sets the parameters of the job.
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly): The provisioning state of the resource.
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty) (Required): The runbook property associated with the entity.
* **runOn**: string: Gets or sets the runOn which specifies the group name where the job is to be executed.
* **schedule**: [ScheduleAssociationProperty](#scheduleassociationproperty) (ReadOnly): The schedule property associated with the entity.
* **startedBy**: string (ReadOnly): Gets or sets the job started by.
* **startTime**: string (ReadOnly): Gets or sets the start time of the job.
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly): Gets or sets the status of the job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the job.

## JobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the runbook.

## ScheduleAssociationProperty
### Properties
* **name**: string (ReadOnly): Gets or sets the name of the Schedule.

## JobScheduleCreateProperties
### Properties
* **jobScheduleId**: string (ReadOnly): Gets or sets the id of job schedule.
* **parameters**: [JobScheduleCreatePropertiesParameters](#jobschedulecreatepropertiesparameters): Gets or sets the parameters of the job schedule.
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty) (Required): The runbook property associated with the entity.
* **runOn**: string: Gets or sets the hybrid worker group that the scheduled job should run on.
* **schedule**: [ScheduleAssociationProperty](#scheduleassociationproperty) (Required): The schedule property associated with the entity.

## JobScheduleCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModuleCreateOrUpdateProperties
### Properties
* **activityCount**: int (ReadOnly): Gets or sets the activity count of the module.
* **contentLink**: [ContentLink](#contentlink) (Required): Definition of the content link.
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **error**: [ModuleErrorInfo](#moduleerrorinfo) (ReadOnly): Definition of the module error info type.
* **isComposite**: bool (ReadOnly): Gets or sets type of module, if its composite or not.
* **isGlobal**: bool (ReadOnly): Gets or sets the isGlobal flag of the module.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **provisioningState**: 'ActivitiesStored' | 'Cancelled' | 'ConnectionTypeImported' | 'ContentDownloaded' | 'ContentRetrieved' | 'ContentStored' | 'ContentValidated' | 'Created' | 'Creating' | 'Failed' | 'ModuleDataStored' | 'ModuleImportRunbookComplete' | 'RunningImportModuleRunbook' | 'StartingImportModuleRunbook' | 'Succeeded' | 'Updating' (ReadOnly): Gets or sets the provisioning state of the module.
* **sizeInBytes**: int (ReadOnly): Gets or sets the size in bytes of the module.
* **version**: string (ReadOnly): Gets or sets the version of the module.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash): Definition of the runbook property type.
* **uri**: string: Gets or sets the uri of the runbook content.
* **version**: string: Gets or sets the version of the content.

## ModuleErrorInfo
### Properties
* **code**: string (ReadOnly): Gets or sets the error code.
* **message**: string (ReadOnly): Gets or sets the error message.

## ModuleCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description.
* **draft**: [RunbookDraft](#runbookdraft)
* **jobCount**: int (ReadOnly): Gets or sets the job count of the runbook.
* **lastModifiedBy**: string (ReadOnly): Gets or sets the last modified by.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **logActivityTrace**: int: Gets or sets the option to log activity trace of the runbook.
* **logProgress**: bool: Gets or sets progress log option.
* **logVerbose**: bool: Gets or sets verbose log option.
* **outputTypes**: string[] (ReadOnly): Gets or sets the runbook output types.
* **parameters**: [RunbookPropertiesParameters](#runbookpropertiesparameters) (ReadOnly): Gets or sets the runbook parameters.
* **provisioningState**: 'Succeeded' (ReadOnly): Gets or sets the provisioning state of the runbook.
* **publishContentLink**: [ContentLink](#contentlink): Definition of the content link.
* **runbookType**: 'Graph' | 'GraphPowerShell' | 'GraphPowerShellWorkflow' | 'PowerShell' | 'PowerShellWorkflow' | 'Script' (Required): Gets or sets the type of the runbook.
* **state**: 'Edit' | 'New' | 'Published' (ReadOnly): Gets or sets the state of the runbook.

## RunbookDraft
### Properties
* **creationTime**: string: Gets or sets the creation time of the runbook draft.
* **draftContentLink**: [ContentLink](#contentlink): Definition of the content link.
* **inEdit**: bool: Gets or sets whether runbook is in edit mode.
* **lastModifiedTime**: string: Gets or sets the last modified time of the runbook draft.
* **outputTypes**: string[]: Gets or sets the runbook output types.
* **parameters**: [RunbookDraftParameters](#runbookdraftparameters): Gets or sets the runbook draft parameters.

## RunbookDraftParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [RunbookParameter](#runbookparameter)

## RunbookParameter
### Properties
* **defaultValue**: string: Gets or sets the default value of parameter.
* **isMandatory**: bool: Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
* **position**: int: Get or sets the position of the parameter.
* **type**: string: Gets or sets the type of the parameter.

## RunbookPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [RunbookParameter](#runbookparameter)

## RunbookCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TestJobCreateParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleCreateOrUpdateProperties
### Properties
* **advancedSchedule**: [AdvancedSchedule](#advancedschedule): The properties of the create Advanced Schedule.
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description.
* **expiryTime**: string: Gets or sets the end time of the schedule.
* **expiryTimeOffsetMinutes**: int (ReadOnly): Gets or sets the expiry time's offset in minutes.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'OneTime' | 'Week' (Required): Gets or sets the frequency of the schedule.
* **interval**: any: Anything
* **isEnabled**: bool (ReadOnly): Gets or sets a value indicating whether this schedule is enabled.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **nextRun**: string (ReadOnly): Gets or sets the next run time of the schedule.
* **nextRunOffsetMinutes**: int (ReadOnly): Gets or sets the next run time's offset in minutes.
* **startTime**: string (Required): Gets or sets the start time of the schedule.
* **startTimeOffsetMinutes**: int (ReadOnly): Gets the start time's offset in minutes.
* **timeZone**: string: Gets or sets the time zone of the schedule.

## AdvancedSchedule
### Properties
* **monthDays**: int[]: Days of the month that the job should execute on. Must be between 1 and 31.
* **monthlyOccurrences**: [AdvancedScheduleMonthlyOccurrence](#advancedschedulemonthlyoccurrence)[]: Occurrences of days within a month.
* **weekDays**: string[]: Days of the week that the job should execute on.

## AdvancedScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
* **occurrence**: int: Occurrence of the week within the month. Must be between 1 and 5

## VariableCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description.
* **isEncrypted**: bool: Gets or sets the encrypted flag of the variable.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **value**: string: Gets or sets the value of the variable.

## WatcherProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description.
* **executionFrequencyInSeconds**: int: Gets or sets the frequency at which the watcher is invoked.
* **lastModifiedBy**: string (ReadOnly): Details of the user who last modified the watcher.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **scriptName**: string: Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook.
* **scriptParameters**: [WatcherPropertiesScriptParameters](#watcherpropertiesscriptparameters): Gets or sets the parameters of the script.
* **scriptRunOn**: string: Gets or sets the name of the hybrid worker group the watcher will run on.
* **status**: string (ReadOnly): Gets the current status of the watcher.

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
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **expiryTime**: string: Gets or sets the expiry time.
* **isEnabled**: bool: Gets or sets the value of the enabled flag of the webhook.
* **lastInvokedTime**: string (ReadOnly): Gets or sets the last invoked time.
* **lastModifiedBy**: string (ReadOnly): Details of the user who last modified the Webhook
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **parameters**: [WebhookCreateOrUpdatePropertiesParameters](#webhookcreateorupdatepropertiesparameters): Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with.
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty): The runbook property associated with the entity.
* **runOn**: string: Gets or sets the name of the hybrid worker group the webhook job will run on.
* **uri**: string: Gets or sets the webhook uri.

## WebhookCreateOrUpdatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

