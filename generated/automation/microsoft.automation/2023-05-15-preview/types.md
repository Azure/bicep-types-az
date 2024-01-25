# Microsoft.Automation @ 2023-05-15-preview

## Resource Microsoft.Automation/automationAccounts@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Sets the identity property for automation account
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties](#automationaccountcreateorupdatepropertiesorautomationaccountproperties): Gets or sets account create or update properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [AutomationAccountCreateOrUpdateParametersTags](#automationaccountcreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/certificates@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateCreateOrUpdatePropertiesOrCertificateProperties](#certificatecreateorupdatepropertiesorcertificateproperties) (Required): Gets or sets the properties of the certificate.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscCompilationJobCreatePropertiesOrDscCompilationJobProperties](#dsccompilationjobcreatepropertiesordsccompilationjobproperties) (Required): Gets or sets the list of compilation job properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [DscCompilationJobCreateParametersTags](#dsccompilationjobcreateparameterstags) (WriteOnly): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/configurations@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscConfigurationCreateOrUpdatePropertiesOrDscConfigurationProperties](#dscconfigurationcreateorupdatepropertiesordscconfigurationproperties) (Required): Gets or sets configuration create or update properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [DscConfigurationCreateOrUpdateParametersTags](#dscconfigurationcreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/connections@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionCreateOrUpdatePropertiesOrConnectionProperties](#connectioncreateorupdatepropertiesorconnectionproperties) (Required): Gets or sets the properties of the connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/connectionTypes@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionTypeCreateOrUpdatePropertiesOrConnectionTypeProperties](#connectiontypecreateorupdatepropertiesorconnectiontypeproperties) (Required): Gets or sets the value of the connection type.
* **type**: 'Microsoft.Automation/automationAccounts/connectionTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/credentials@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CredentialCreateOrUpdatePropertiesOrCredentialProperties](#credentialcreateorupdatepropertiesorcredentialproperties) (Required): Gets or sets the properties of the credential.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/credentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHybridRunbookWorkerGroupProperties](#hybridrunbookworkergroupcreateorupdatepropertiesorhybridrunbookworkergroupproperties): Gets or sets hybrid runbook worker group create or update properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridRunbookWorkerCreateOrUpdateParametersOrHybridRunbookWorkerProperties](#hybridrunbookworkercreateorupdateparametersorhybridrunbookworkerproperties): Gets or sets hybrid runbook worker group create or update properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/jobs@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobCreatePropertiesOrJobProperties](#jobcreatepropertiesorjobproperties) (Required): Gets or sets the list of job properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/jobSchedules@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobScheduleCreatePropertiesOrJobScheduleProperties](#jobschedulecreatepropertiesorjobscheduleproperties) (Required): Gets or sets the list of job schedule properties.
* **type**: 'Microsoft.Automation/automationAccounts/jobSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/modules@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModuleCreateOrUpdatePropertiesOrModuleProperties](#modulecreateorupdatepropertiesormoduleproperties) (Required): Gets or sets the module create properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ModuleCreateOrUpdateParametersTags](#modulecreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscNodeConfigurationCreateOrUpdateParametersPropertiesOrDscNodeConfigurationProperties](#dscnodeconfigurationcreateorupdateparameterspropertiesordscnodeconfigurationproperties): Node configuration properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [DscNodeConfigurationCreateOrUpdateParametersTags](#dscnodeconfigurationcreateorupdateparameterstags) (WriteOnly): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/nodes@2023-05-15-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscNodeProperties](#dscnodeproperties) (ReadOnly): The properties of a DscNode.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/nodes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/privateEndpointConnections@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/python2Packages@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PythonPackageCreatePropertiesOrModuleProperties](#pythonpackagecreatepropertiesormoduleproperties) (Required): Gets or sets the module create properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [PythonPackageCreateParametersTags](#pythonpackagecreateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/python2Packages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/python3Packages@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PythonPackageCreatePropertiesOrModuleProperties](#pythonpackagecreatepropertiesormoduleproperties) (Required): Gets or sets the module create properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [PythonPackageCreateParametersTags](#pythonpackagecreateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/python3Packages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/runbooks@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location of the resource.
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z-_0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RunbookCreateOrUpdatePropertiesOrRunbookProperties](#runbookcreateorupdatepropertiesorrunbookproperties) (Required): Gets or sets runbook create or update properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [RunbookCreateOrUpdateParametersTags](#runbookcreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/runbooks/draft@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'content' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
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
* **runtimeEnvironment**: string (WriteOnly): The runtime Environment Name on which job needs to be tested
* **startTime**: string (ReadOnly): Gets or sets the start time of the test job.
* **status**: string (ReadOnly): Gets or sets the status of the test job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the test job.
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Automation/automationAccounts/runtimeEnvironments@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z-_0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RuntimeEnvironmentProperties](#runtimeenvironmentproperties): Gets or sets the Runtime Environment properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/runtimeEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/runtimeEnvironments/packages@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allOf**: [TrackedResource](#trackedresource) (WriteOnly): The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location'
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PackageCreateOrUpdatePropertiesOrPackageProperties](#packagecreateorupdatepropertiesorpackageproperties) (Required): Gets or sets the package create properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/runtimeEnvironments/packages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/schedules@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleCreateOrUpdatePropertiesOrScheduleProperties](#schedulecreateorupdatepropertiesorscheduleproperties) (Required): Gets or sets the list of schedule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SoftwareUpdateConfigurationProperties](#softwareupdateconfigurationproperties) (Required): Software update configuration properties.
* **type**: 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/sourceControls@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlCreateOrUpdatePropertiesOrSourceControlProperties](#sourcecontrolcreateorupdatepropertiesorsourcecontrolproperties) (Required): The properties of the source control.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlSyncJobCreatePropertiesOrSourceControlSyncJobByIdProperties](#sourcecontrolsyncjobcreatepropertiesorsourcecontrolsyncjobbyidproperties) (Required): The properties of the source control sync job.
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/variables@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VariableCreateOrUpdatePropertiesOrVariableProperties](#variablecreateorupdatepropertiesorvariableproperties) (Required): Gets or sets the properties of the variable.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/variables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/watchers@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatcherProperties](#watcherproperties): Gets or sets the watcher properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [WatcherTags](#watchertags): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/watchers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/webhooks@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebhookCreateOrUpdatePropertiesOrWebhookProperties](#webhookcreateorupdatepropertiesorwebhookproperties) (Required): Gets or sets the properties of the webhook.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automation/automationAccounts/webhooks' (ReadOnly, DeployTimeConstant): The resource type

## Function listDeletedRunbooks (Microsoft.Automation/automationAccounts@2023-05-15-preview)
* **Resource**: Microsoft.Automation/automationAccounts
* **ApiVersion**: 2023-05-15-preview
* **Output**: [DeletedRunbookListResult](#deletedrunbooklistresult)

## Function listKeys (Microsoft.Automation/automationAccounts@2023-05-15-preview)
* **Resource**: Microsoft.Automation/automationAccounts
* **ApiVersion**: 2023-05-15-preview
* **Output**: [KeyListResult](#keylistresult)

## AdvancedSchedule
### Properties
* **monthDays**: int[]: Days of the month that the job should execute on. Must be between 1 and 31.
* **monthlyOccurrences**: [AdvancedScheduleMonthlyOccurrence](#advancedschedulemonthlyoccurrence)[]: Occurrences of days within a month.
* **weekDays**: string[]: Days of the week that the job should execute on.

## AdvancedScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string: Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
* **occurrence**: int: Occurrence of the week within the month. Must be between 1 and 5

## AutomationAccountCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties
### Properties
* **automationHybridServiceUrl**: string (ReadOnly): URL of automation hybrid service which is used for hybrid worker on-boarding.
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **disableLocalAuth**: bool: Indicates whether requests using non-AAD authentication are blocked
* **encryption**: [EncryptionProperties](#encryptionproperties): Set the encryption properties for the automation account
* **lastModifiedBy**: string (ReadOnly): Gets or sets the last modified by.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of Automation operations supported by the Automation resource provider.
* **publicNetworkAccess**: bool: Indicates whether traffic on the non-ARM endpoint (Webhook/Agent) is allowed from the public internet
* **sku**: [Sku](#sku): Gets or sets account SKU.
* **state**: 'Ok' | 'Suspended' | 'Unavailable' | string (ReadOnly): Gets status of account.

## AzureQueryProperties
### Properties
* **locations**: string[]: List of locations to scope the query to.
* **scope**: string[]: List of Subscription or Resource Group ARM Ids.
* **tagSettings**: [TagSettingsProperties](#tagsettingsproperties): Tag settings for the VM.

## CertificateCreateOrUpdatePropertiesOrCertificateProperties
### Properties
* **base64Value**: string (Required, WriteOnly): Gets or sets the base64 encoded value of the certificate.
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string: Gets or sets the description of the certificate.
* **expiryTime**: string (ReadOnly): Gets the expiry time of the certificate.
* **isExportable**: bool: Gets or sets the is exportable flag of the certificate.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **thumbprint**: string: Gets or sets the thumbprint of the certificate.

## ConnectionCreateOrUpdatePropertiesFieldDefinitionValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionCreateOrUpdatePropertiesOrConnectionProperties
### Properties
* **connectionType**: [ConnectionTypeAssociationProperty](#connectiontypeassociationproperty) (Required): Gets or sets the connectionType of the connection.
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string: Gets or sets the description of the connection.
* **fieldDefinitionValues**: [ConnectionCreateOrUpdatePropertiesFieldDefinitionValues](#connectioncreateorupdatepropertiesfielddefinitionvalues): Gets or sets the field definition properties of the connection.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.

## ConnectionTypeAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the connection type.

## ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [FieldDefinition](#fielddefinition)

## ConnectionTypeCreateOrUpdatePropertiesOrConnectionTypeProperties
### Properties
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **fieldDefinitions**: [ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions](#connectiontypecreateorupdatepropertiesfielddefinitions) (Required): Gets or sets the field definitions of the connection type.
* **isGlobal**: bool: Gets or sets a Boolean value to indicate if the connection type is global.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.

## ContentHash
### Properties
* **algorithm**: string (Required): Gets or sets the content hash algorithm used to hash the content.
* **value**: string (Required): Gets or sets expected hash value of the content.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash): Gets or sets the hash.
* **uri**: string: Gets or sets the uri of content.
* **version**: string: Gets or sets the version of the content.

## ContentSource
### Properties
* **hash**: [ContentHash](#contenthash): Gets or sets the hash.
* **type**: 'embeddedContent' | 'uri' | string: Gets or sets the content source type.
* **value**: string: Gets or sets the value of the content. This is based on the content source type.
* **version**: string: Gets or sets the version of the content.

## ContentSourceOrDscNodeConfigurationPropertiesSource
### Properties
* **hash**: [ContentHash](#contenthash) (WriteOnly): Gets or sets the hash.
* **type**: 'embeddedContent' | 'uri' | string (WriteOnly): Gets or sets the content source type.
* **value**: string (WriteOnly): Gets or sets the value of the content. This is based on the content source type.
* **version**: string (WriteOnly): Gets or sets the version of the content.

## CredentialCreateOrUpdatePropertiesOrCredentialProperties
### Properties
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string: Gets or sets the description of the credential.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **password**: string (Required, WriteOnly): Gets or sets the password of the credential.
* **userName**: string (Required): Gets or sets the user name of the credential.

## DefaultPackages
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeletedRunbook
### Properties
* **id**: string: The resource id.
* **location**: string: Gets or sets the location of the resource.
* **name**: string: Gets or sets name of the resource.
* **properties**: [DeletedRunbookProperties](#deletedrunbookproperties): Gets or sets the runbook properties.

## DeletedRunbookListResult
### Properties
* **nextLink**: string: Gets or sets the next link.
* **value**: [DeletedRunbook](#deletedrunbook)[]: List of deleted runbooks in automation account.

## DeletedRunbookProperties
### Properties
* **creationTime**: string: Gets or sets the creation time.
* **deletionTime**: string: Gets or sets the last modified time.
* **runbookId**: string: Gets or sets the Runbook Id.
* **runbookType**: string: Type of the runbook.
* **runtime**: string: Gets or sets runtime of the runbook.
* **runtimeEnvironment**: string: Environment of the runbook.

## DscCompilationJobCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscCompilationJobCreatePropertiesOrDscCompilationJobProperties
### Properties
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required): Gets or sets the configuration.
* **creationTime**: string (ReadOnly): Gets the creation time of the job.
* **endTime**: string (ReadOnly): Gets the end time of the job.
* **exception**: string (ReadOnly): Gets the exception of the job.
* **incrementNodeConfigurationBuild**: bool (WriteOnly): If a new build version of NodeConfiguration is required.
* **jobId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): Gets the id of the job.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time of the job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets the last status modified time of the job.
* **parameters**: [DscCompilationJobCreatePropertiesParameters](#dsccompilationjobcreatepropertiesparameters): Gets or sets the parameters of the job.
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' | string (ReadOnly): The current provisioning state of the job.
* **runOn**: string (ReadOnly): Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startedBy**: string (ReadOnly): Gets the compilation job started by.
* **startTime**: string (ReadOnly): Gets the start time of the job.
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' | string (ReadOnly): Gets or sets the status of the job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the job.

## DscCompilationJobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscConfigurationAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the Dsc configuration.

## DscConfigurationCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscConfigurationCreateOrUpdatePropertiesOrDscConfigurationProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description of the configuration.
* **jobCount**: int (ReadOnly): Gets or sets the job count of the configuration.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **logProgress**: bool (WriteOnly): Gets or sets progress log option.
* **logVerbose**: bool: Gets or sets verbose log option.
* **nodeConfigurationCount**: int (ReadOnly): Gets the number of compiled node configurations.
* **parameters**: [DscConfigurationCreateOrUpdatePropertiesParameters](#dscconfigurationcreateorupdatepropertiesparameters): Gets or sets the configuration parameters.
* **provisioningState**: 'Succeeded' (ReadOnly): Gets or sets the provisioning state of the configuration.
* **source**: [ContentSource](#contentsource) (Required): Gets or sets the source.
* **state**: 'Edit' | 'New' | 'Published' | string (ReadOnly): Gets or sets the state of the configuration.

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

## DscNodeConfigurationAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the dsc node configuration.

## DscNodeConfigurationCreateOrUpdateParametersPropertiesOrDscNodeConfigurationProperties
### Properties
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required): Gets or sets the configuration of the node.
* **creationTime**: string (ReadOnly): Gets or sets creation time.
* **incrementNodeConfigurationBuild**: bool: If a new build version of NodeConfiguration is required.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **nodeCount**: int (ReadOnly): Number of nodes with this node configuration assigned
* **source**: [ContentSourceOrDscNodeConfigurationPropertiesSource](#contentsourceordscnodeconfigurationpropertiessource) (Required): Gets or sets the source.

## DscNodeConfigurationCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscNodeExtensionHandlerAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the extension handler.
* **version**: string: Gets or sets the version of the extension handler.

## DscNodeProperties
### Properties
* **accountId**: string: Gets or sets the account id of the node.
* **etag**: string: Gets or sets the etag of the resource.
* **extensionHandler**: [DscNodeExtensionHandlerAssociationProperty](#dscnodeextensionhandlerassociationproperty)[]: Gets or sets the list of extensionHandler properties for a Node.
* **ip**: string: Gets or sets the ip of the node.
* **lastSeen**: string: Gets or sets the last seen time of the node.
* **nodeConfiguration**: [DscNodeConfigurationAssociationProperty](#dscnodeconfigurationassociationproperty): Gets or sets the configuration of the node.
* **nodeId**: string: Gets or sets the node id.
* **registrationTime**: string: Gets or sets the registration time of the node.
* **status**: string: Gets or sets the status of the node.
* **totalCount**: int: Gets the total number of records matching filter criteria.

## EncryptionProperties
### Properties
* **identity**: [EncryptionPropertiesIdentity](#encryptionpropertiesidentity): User identity used for CMK.
* **keySource**: 'Microsoft.Automation' | 'Microsoft.Keyvault': Encryption Key Source
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Key vault properties.

## EncryptionPropertiesIdentity
### Properties
* **userAssignedIdentity**: any: The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ErrorResponse
### Properties
* **code**: string: Error code
* **message**: string: Error message indicating why the operation failed.

## FieldDefinition
### Properties
* **isEncrypted**: bool: Gets or sets the isEncrypted flag of the connection field definition.
* **isOptional**: bool: Gets or sets the isOptional flag of the connection field definition.
* **type**: string (Required): Gets or sets the type of the connection field definition.

## HybridRunbookWorkerCreateOrUpdateParametersOrHybridRunbookWorkerProperties
### Properties
* **ip**: string (ReadOnly): Gets or sets the assigned machine IP address.
* **lastSeenDateTime**: string (ReadOnly): Last Heartbeat from the Worker
* **registeredDateTime**: string (ReadOnly): Gets or sets the registration time of the worker machine.
* **vmResourceId**: string: Azure Resource Manager Id for a virtual machine.
* **workerName**: string (ReadOnly): Name of the HybridWorker.
* **workerType**: 'HybridV1' | 'HybridV2' | string (ReadOnly): Type of the HybridWorker.

## HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHybridRunbookWorkerGroupProperties
### Properties
* **credential**: [RunAsCredentialAssociationProperty](#runascredentialassociationproperty): Sets the credential of a worker group.
* **groupType**: 'System' | 'User' | string (ReadOnly): Type of the HybridWorkerGroup.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity. The value must be an UUID.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesProperties](#userassignedidentitiesproperties)

## JobCreatePropertiesOrJobProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time of the job.
* **endTime**: string (ReadOnly): Gets or sets the end time of the job.
* **exception**: string (ReadOnly): Gets or sets the exception of the job.
* **jobId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): Gets or sets the id of the job.
* **jobRuntimeEnvironment**: [JobRuntimeEnvironment](#jobruntimeenvironment) (ReadOnly): Runtime Environment Property
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time of the job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets or sets the last status modified time of the job.
* **parameters**: [JobCreatePropertiesParameters](#jobcreatepropertiesparameters): Gets or sets the parameters of the job.
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' | string (ReadOnly): The current provisioning state of the job.
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty): Gets or sets the runbook.
* **runOn**: string: Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startedBy**: string (ReadOnly): Gets or sets the job started by.
* **startTime**: string (ReadOnly): Gets or sets the start time of the job.
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' | string (ReadOnly): Gets or sets the status of the job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the job.

## JobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobRuntimeEnvironment
### Properties
* **runtimeEnvironmentName**: string: Name of Runtime Environment.

## JobScheduleCreatePropertiesOrJobScheduleProperties
### Properties
* **jobScheduleId**: string (ReadOnly): Gets or sets the id of job schedule.
* **parameters**: [JobScheduleCreatePropertiesParameters](#jobschedulecreatepropertiesparameters): Gets or sets a list of job properties.
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty) (Required): Gets or sets the runbook.
* **runOn**: string: Gets or sets the hybrid worker group that the scheduled job should run on.
* **schedule**: [ScheduleAssociationProperty](#scheduleassociationproperty) (Required): Gets or sets the schedule.

## JobScheduleCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Key
### Properties
* **KeyName**: 'Primary' | 'Secondary' | string (ReadOnly): Automation key name.
* **Permissions**: 'Full' | 'Read' | string (ReadOnly): Automation key permissions.
* **Value**: string (ReadOnly): Value of the Automation Key used for registration.

## KeyListResult
### Properties
* **keys**: [Key](#key)[]: Lists the automation keys.

## KeyVaultProperties
### Properties
* **keyName**: string: The name of key used to encrypt data.
* **keyvaultUri**: string: The URI of the key vault key used to encrypt data.
* **keyVersion**: string: The key version of the key used to encrypt data.

## LinuxProperties
### Properties
* **excludedPackageNameMasks**: string[]: packages excluded from the software update configuration.
* **includedPackageClassifications**: 'Critical' | 'Other' | 'Security' | 'Unclassified' | string: Update classifications included in the software update configuration.
* **includedPackageNameMasks**: string[]: packages included from the software update configuration.
* **rebootSetting**: string: Reboot setting for the software update configuration.

## ModuleCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModuleCreateOrUpdatePropertiesOrModuleProperties
### Properties
* **activityCount**: int (ReadOnly): Gets or sets the activity count of the module.
* **contentLink**: [ContentLink](#contentlink) (Required): Gets or sets the module content link.
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **error**: [ModuleErrorInfo](#moduleerrorinfo) (ReadOnly): Gets or sets the error info of the module.
* **isComposite**: bool (ReadOnly): Gets or sets type of module, if its composite or not.
* **isGlobal**: bool (ReadOnly): Gets or sets the isGlobal flag of the module.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **provisioningState**: 'ActivitiesStored' | 'Cancelled' | 'ConnectionTypeImported' | 'ContentDownloaded' | 'ContentRetrieved' | 'ContentStored' | 'ContentValidated' | 'Created' | 'Creating' | 'Failed' | 'ModuleDataStored' | 'ModuleImportRunbookComplete' | 'RunningImportModuleRunbook' | 'StartingImportModuleRunbook' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the module.
* **sizeInBytes**: int (ReadOnly): Gets or sets the size in bytes of the module.
* **version**: string (ReadOnly): Gets or sets the version of the module.

## ModuleErrorInfo
### Properties
* **code**: string: Gets or sets the error code.
* **message**: string: Gets or sets the error message.

## NonAzureQueryProperties
### Properties
* **functionAlias**: string: Log Analytics Saved Search name.
* **workspaceId**: string: Workspace Id for Log Analytics in which the saved Search is resided.

## PackageCreateOrUpdatePropertiesOrPackageProperties
### Properties
* **allOf**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **contentLink**: [ContentLink](#contentlink) (Required): Gets or sets the package content link.
* **default**: bool (ReadOnly): Gets or sets the isGlobal flag of the package.
* **error**: [PackageErrorInfo](#packageerrorinfo) (ReadOnly): Gets or sets the error info of the Package.
* **provisioningState**: 'ActivitiesStored' | 'Canceled' | 'ConnectionTypeImported' | 'ContentDownloaded' | 'ContentRetrieved' | 'ContentStored' | 'ContentValidated' | 'Created' | 'Creating' | 'Failed' | 'ModuleDataStored' | 'ModuleImportRunbookComplete' | 'RunningImportModuleRunbook' | 'StartingImportModuleRunbook' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the Package.
* **sizeInBytes**: int (ReadOnly): Gets or sets the size in bytes of the Package.
* **version**: string (ReadOnly): Gets or sets the version of the Package.

## PackageErrorInfo
### Properties
* **code**: string: Package import error code.
* **message**: string: Package import error message.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: Gets the groupIds.
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): Connection State of the Private Endpoint Connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): Any action that is required beyond basic workflow (approve/ reject/ disconnect)
* **description**: string: The private link service connection description.
* **status**: string: The private link service connection status.

## PythonPackageCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PythonPackageCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PythonPackageCreatePropertiesOrModuleProperties
### Properties
* **activityCount**: int (ReadOnly): Gets or sets the activity count of the module.
* **contentLink**: [ContentLink](#contentlink) (Required): Gets or sets the module content link.
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **error**: [ModuleErrorInfo](#moduleerrorinfo) (ReadOnly): Gets or sets the error info of the module.
* **isComposite**: bool (ReadOnly): Gets or sets type of module, if its composite or not.
* **isGlobal**: bool (ReadOnly): Gets or sets the isGlobal flag of the module.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **provisioningState**: 'ActivitiesStored' | 'Cancelled' | 'ConnectionTypeImported' | 'ContentDownloaded' | 'ContentRetrieved' | 'ContentStored' | 'ContentValidated' | 'Created' | 'Creating' | 'Failed' | 'ModuleDataStored' | 'ModuleImportRunbookComplete' | 'RunningImportModuleRunbook' | 'StartingImportModuleRunbook' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the module.
* **sizeInBytes**: int (ReadOnly): Gets or sets the size in bytes of the module.
* **version**: string (ReadOnly): Gets or sets the version of the module.

## RunAsCredentialAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the credential.

## RunbookAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the runbook.

## RunbookCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookCreateOrUpdatePropertiesOrRunbookProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description of the runbook.
* **draft**: [RunbookDraft](#runbookdraft): Gets or sets the draft runbook properties.
* **jobCount**: int (ReadOnly): Gets or sets the job count of the runbook.
* **lastModifiedBy**: string (ReadOnly): Gets or sets the last modified by.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **logActivityTrace**: int: Gets or sets the activity-level tracing options of the runbook.
* **logProgress**: bool: Gets or sets progress log option.
* **logVerbose**: bool: Gets or sets verbose log option.
* **outputTypes**: string[] (ReadOnly): Gets or sets the runbook output types.
* **parameters**: [RunbookPropertiesParameters](#runbookpropertiesparameters) (ReadOnly): Gets or sets the runbook parameters.
* **provisioningState**: 'Succeeded' (ReadOnly): Gets or sets the provisioning state of the runbook.
* **publishContentLink**: [ContentLink](#contentlink): Gets or sets the published runbook content link.
* **runbookType**: 'Graph' | 'GraphPowerShell' | 'GraphPowerShellWorkflow' | 'PowerShell' | 'PowerShellWorkflow' | 'Python' | 'Python2' | 'Python3' | 'Script' | string (Required): Gets or sets the type of the runbook.
* **runtimeEnvironment**: string: Environment of the runbook.
* **state**: 'Edit' | 'New' | 'Published' | string (ReadOnly): Gets or sets the state of the runbook.

## RunbookDraft
### Properties
* **creationTime**: string: Gets or sets the creation time of the runbook draft.
* **draftContentLink**: [ContentLink](#contentlink): Gets or sets the draft runbook content link.
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

## RuntimeEnvironmentProperties
### Properties
* **defaultPackages**: [DefaultPackages](#defaultpackages): List of Default packages for Environment
* **description**: string: Gets or sets the description.
* **runtime**: [RuntimeProperties](#runtimeproperties): Runtime properties.

## RuntimeProperties
### Properties
* **language**: string: Language of Runtime Environment
* **version**: string: Version of Language

## ScheduleAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the Schedule.

## ScheduleCreateOrUpdatePropertiesOrScheduleProperties
### Properties
* **advancedSchedule**: [AdvancedSchedule](#advancedschedule): Gets or sets the AdvancedSchedule.
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description of the schedule.
* **expiryTime**: string: Gets or sets the end time of the schedule.
* **expiryTimeOffsetMinutes**: int (ReadOnly): Gets or sets the expiry time's offset in minutes.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'OneTime' | 'Week' | string (Required): Gets or sets the frequency of the schedule.
* **interval**: any: Gets or sets the interval of the schedule.
* **isEnabled**: bool (ReadOnly): Gets or sets a value indicating whether this schedule is enabled.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **nextRun**: string (ReadOnly): Gets or sets the next run time of the schedule.
* **nextRunOffsetMinutes**: int (ReadOnly): Gets or sets the next run time's offset in minutes.
* **startTime**: string (Required): Gets or sets the start time of the schedule.
* **startTimeOffsetMinutes**: int (ReadOnly): Gets the start time's offset in minutes.
* **timeZone**: string: Gets or sets the time zone of the schedule.

## Sku
### Properties
* **capacity**: int: Gets or sets the SKU capacity.
* **family**: string: Gets or sets the SKU family.
* **name**: 'Basic' | 'Free' | string (Required): Gets or sets the SKU name of the account.

## SoftwareUpdateConfigurationProperties
### Properties
* **createdBy**: string (ReadOnly): CreatedBy property, which only appears in the response.
* **creationTime**: string (ReadOnly): Creation time of the resource, which only appears in the response.
* **error**: [ErrorResponse](#errorresponse): Details of provisioning error
* **lastModifiedBy**: string (ReadOnly): LastModifiedBy property, which only appears in the response.
* **lastModifiedTime**: string (ReadOnly): Last time resource was modified, which only appears in the response.
* **provisioningState**: string (ReadOnly): Provisioning state for the software update configuration, which only appears in the response.
* **scheduleInfo**: [SUCScheduleProperties](#sucscheduleproperties) (Required): Schedule information for the Software update configuration
* **tasks**: [SoftwareUpdateConfigurationTasks](#softwareupdateconfigurationtasks): Tasks information for the Software update configuration.
* **updateConfiguration**: [UpdateConfiguration](#updateconfiguration) (Required): update specific properties for the Software update configuration

## SoftwareUpdateConfigurationTasks
### Properties
* **postTask**: [TaskProperties](#taskproperties): Post task properties.
* **preTask**: [TaskProperties](#taskproperties): Pre task properties.

## SourceControlCreateOrUpdatePropertiesOrSourceControlProperties
### Properties
* **autoSync**: bool: The auto async of the source control. Default is false.
* **branch**: string {maxLength: 255}: The repo branch of the source control. Include branch as empty string for VsoTfvc.
* **creationTime**: string (ReadOnly): The creation time.
* **description**: string {maxLength: 512}: The user description of the source control.
* **folderPath**: string {maxLength: 255}: The folder path of the source control. Path must be relative.
* **lastModifiedTime**: string (ReadOnly): The last modified time.
* **publishRunbook**: bool: The auto publish of the source control. Default is true.
* **repoUrl**: string {maxLength: 2000}: The repo url of the source control.
* **securityToken**: [SourceControlSecurityTokenProperties](#sourcecontrolsecuritytokenproperties) (WriteOnly): The authorization token for the repo of the source control.
* **sourceType**: 'GitHub' | 'VsoGit' | 'VsoTfvc' | string: The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive.

## SourceControlSecurityTokenProperties
### Properties
* **accessToken**: string {maxLength: 1024}: The access token.
* **refreshToken**: string {maxLength: 1024}: The refresh token.
* **tokenType**: 'Oauth' | 'PersonalAccessToken' | string: The token type. Must be either PersonalAccessToken or Oauth.

## SourceControlSyncJobCreatePropertiesOrSourceControlSyncJobByIdProperties
### Properties
* **commitId**: string (Required, WriteOnly): The commit id of the source control sync job. If not syncing to a commitId, enter an empty string.
* **creationTime**: string (ReadOnly): The creation time of the job.
* **endTime**: string (ReadOnly): The end time of the job.
* **exception**: string (ReadOnly): The exceptions that occurred while running the sync job.
* **provisioningState**: 'Completed' | 'Failed' | 'Running' | string (ReadOnly): The provisioning state of the job.
* **sourceControlSyncJobId**: string (ReadOnly): The source control sync job id.
* **startTime**: string (ReadOnly): The start time of the job.
* **syncType**: 'FullSync' | 'PartialSync' | string (ReadOnly): The sync type.

## SUCScheduleProperties
### Properties
* **advancedSchedule**: [AdvancedSchedule](#advancedschedule): Gets or sets the advanced schedule.
* **creationTime**: string: Gets or sets the creation time.
* **description**: string: Gets or sets the description.
* **expiryTime**: string: Gets or sets the end time of the schedule.
* **expiryTimeOffsetMinutes**: int: Gets or sets the expiry time's offset in minutes.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'OneTime' | 'Week' | string: Gets or sets the frequency of the schedule.
* **interval**: int: Gets or sets the interval of the schedule.
* **isEnabled**: bool: Gets or sets a value indicating whether this schedule is enabled.
* **lastModifiedTime**: string: Gets or sets the last modified time.
* **nextRun**: string: Gets or sets the next run time of the schedule.
* **nextRunOffsetMinutes**: int: Gets or sets the next run time's offset in minutes.
* **startTime**: string: Gets or sets the start time of the schedule.
* **startTimeOffsetMinutes**: int (ReadOnly): Gets the start time's offset in minutes.
* **timeZone**: string: Gets or sets the time zone of the schedule.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TagSettingsProperties
### Properties
* **filterOperator**: 'All' | 'Any': Filter VMs by Any or All specified tags.
* **tags**: [TagSettingsPropertiesTags](#tagsettingspropertiestags): Dictionary of tags with its list of values.

## TagSettingsPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## TargetProperties
### Properties
* **azureQueries**: [AzureQueryProperties](#azurequeryproperties)[]: List of Azure queries in the software update configuration.
* **nonAzureQueries**: [NonAzureQueryProperties](#nonazurequeryproperties)[]: List of non Azure queries in the software update configuration.

## TaskProperties
### Properties
* **parameters**: [TaskPropertiesParameters](#taskpropertiesparameters): Gets or sets the parameters of the task.
* **source**: string: Gets or sets the name of the runbook.

## TaskPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TestJobCreateParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpdateConfiguration
### Properties
* **azureVirtualMachines**: string[]: List of azure resource Ids for azure virtual machines targeted by the software update configuration.
* **duration**: string: Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
* **linux**: [LinuxProperties](#linuxproperties): Linux specific update configuration.
* **nonAzureComputerNames**: string[]: List of names of non-azure machines targeted by the software update configuration.
* **operatingSystem**: 'Linux' | 'Windows' (Required): operating system of target machines
* **targets**: [TargetProperties](#targetproperties): Group targets for the software update configuration.
* **windows**: [WindowsProperties](#windowsproperties): Windows specific update configuration.

## UserAssignedIdentitiesProperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## VariableCreateOrUpdatePropertiesOrVariableProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description of the variable.
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

## WatcherTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookCreateOrUpdatePropertiesOrWebhookProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **expiryTime**: string: Gets or sets the expiry time.
* **isEnabled**: bool: Gets or sets the value of the enabled flag of webhook.
* **lastInvokedTime**: string (ReadOnly): Gets or sets the last invoked time.
* **lastModifiedBy**: string (ReadOnly): Details of the user who last modified the Webhook
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **parameters**: [WebhookCreateOrUpdatePropertiesParameters](#webhookcreateorupdatepropertiesparameters): Gets or sets the parameters of the job.
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty): Gets or sets the runbook.
* **runOn**: string: Gets or sets the name of the hybrid worker group the webhook job will run on.
* **uri**: string: Gets or sets the uri.

## WebhookCreateOrUpdatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WindowsProperties
### Properties
* **excludedKbNumbers**: string[]: KB numbers excluded from the software update configuration.
* **includedKbNumbers**: string[]: KB numbers included from the software update configuration.
* **includedUpdateClassifications**: 'Critical' | 'Definition' | 'FeaturePack' | 'Security' | 'ServicePack' | 'Tools' | 'Unclassified' | 'UpdateRollup' | 'Updates' | string: Update classification included in the software update configuration. A comma separated string with required values
* **rebootSetting**: string: Reboot setting for the software update configuration.

