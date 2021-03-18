# Microsoft.Automation @ 2020-01-13-preview

## Resource Microsoft.Automation/automationAccounts@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AutomationAccountCreateOrUpdateProperties](#automationaccountcreateorupdateproperties)
* **tags**: [AutomationAccountCreateOrUpdateParametersTags](#automationaccountcreateorupdateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/certificates@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DscCompilationJobCreateProperties](#dsccompilationjobcreateproperties) (Required)
* **tags**: [DscCompilationJobCreateParametersTags](#dsccompilationjobcreateparameterstags) (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connections@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionCreateOrUpdateProperties](#connectioncreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connectionTypes@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionTypeCreateOrUpdateProperties](#connectiontypecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connectionTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/credentials@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CredentialCreateOrUpdateProperties](#credentialcreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/credentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/jobSchedules@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobScheduleCreateProperties](#jobschedulecreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobSchedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/modules@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ModuleCreateOrUpdateProperties](#modulecreateorupdateproperties) (Required)
* **tags**: [ModuleCreateOrUpdateParametersTags](#modulecreateorupdateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts/modules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DscNodeConfigurationCreateOrUpdateParametersProperties](#dscnodeconfigurationcreateorupdateparametersproperties)
* **tags**: [DscNodeConfigurationCreateOrUpdateParametersTags](#dscnodeconfigurationcreateorupdateparameterstags) (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/privateEndpointConnections@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Automation/automationAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/python2Packages@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PythonPackageCreateProperties](#pythonpackagecreateproperties) (Required)
* **tags**: [PythonPackageCreateParametersTags](#pythonpackagecreateparameterstags)
* **type**: 'Microsoft.Automation/automationAccounts/python2Packages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/schedules@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScheduleCreateOrUpdateProperties](#schedulecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/schedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SourceControlCreateOrUpdateProperties](#sourcecontrolcreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SourceControlSyncJobCreateProperties](#sourcecontrolsyncjobcreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/variables@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VariableCreateOrUpdateProperties](#variablecreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/variables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/watchers@2020-01-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WatcherProperties](#watcherproperties)
* **tags**: [WatcherTags](#watchertags)
* **type**: 'Microsoft.Automation/automationAccounts/watchers' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## AutomationAccountCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **encryption**: [EncryptionProperties](#encryptionproperties)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **publicNetworkAccess**: bool (ReadOnly)
* **sku**: [Sku](#sku)
* **state**: 'Ok' | 'Suspended' | 'Unavailable' (ReadOnly)

## EncryptionProperties
### Properties
* **keySource**: 'Microsoft.Automation' | 'Microsoft.Keyvault'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)

## KeyVaultProperties
### Properties
* **keyName**: string
* **keyvaultUri**: string
* **keyVersion**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty)

## PrivateEndpointProperty
### Properties
* **id**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string
* **status**: string

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

## RunbookAssociationProperty
### Properties
* **name**: string

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

## ContentHash
### Properties
* **algorithm**: string (Required)
* **value**: string (Required)

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

## ContentSource
### Properties
* **hash**: [ContentHash](#contenthash) (WriteOnly)
* **type**: 'embeddedContent' | 'uri' (WriteOnly)
* **value**: string (WriteOnly)
* **version**: string (WriteOnly)

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

