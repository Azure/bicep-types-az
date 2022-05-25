# Microsoft.Automation @ 2019-06-01

## Resource Microsoft.Automation/automationAccounts@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationAccountCreateOrUpdateProperties](#automationaccountcreateorupdateproperties): The parameters supplied to the create or update account properties.
* **tags**: [AutomationAccountCreateOrUpdateParametersTags](#automationaccountcreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/certificates@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties) (Required): The properties of the create certificate operation.
* **type**: 'Microsoft.Automation/automationAccounts/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscCompilationJobCreateProperties](#dsccompilationjobcreateproperties) (Required): The parameters supplied to the create compilation job operation.
* **tags**: [DscCompilationJobCreateParametersTags](#dsccompilationjobcreateparameterstags) (WriteOnly): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/configurations@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscConfigurationCreateOrUpdateProperties](#dscconfigurationcreateorupdateproperties) (Required): The properties to create or update configuration.
* **tags**: [DscConfigurationCreateOrUpdateParametersTags](#dscconfigurationcreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/connections@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionCreateOrUpdateProperties](#connectioncreateorupdateproperties) (Required): The properties of the create connection properties
* **type**: 'Microsoft.Automation/automationAccounts/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/connectionTypes@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionTypeCreateOrUpdateProperties](#connectiontypecreateorupdateproperties) (Required): The properties of the create connection type.
* **type**: 'Microsoft.Automation/automationAccounts/connectionTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/credentials@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CredentialCreateOrUpdateProperties](#credentialcreateorupdateproperties) (Required): The properties of the create credential operation.
* **type**: 'Microsoft.Automation/automationAccounts/credentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/jobs@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobCreateProperties](#jobcreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/jobSchedules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobScheduleCreateProperties](#jobschedulecreateproperties) (Required): The parameters supplied to the create job schedule operation.
* **type**: 'Microsoft.Automation/automationAccounts/jobSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/modules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModuleCreateOrUpdateProperties](#modulecreateorupdateproperties) (Required): The parameters supplied to the create or update module properties.
* **tags**: [ModuleCreateOrUpdateParametersTags](#modulecreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscNodeConfigurationCreateOrUpdateParametersProperties](#dscnodeconfigurationcreateorupdateparametersproperties): The parameter properties supplied to the create or update node configuration operation.
* **tags**: [DscNodeConfigurationCreateOrUpdateParametersTags](#dscnodeconfigurationcreateorupdateparameterstags) (WriteOnly): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/python2Packages@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PythonPackageCreateProperties](#pythonpackagecreateproperties) (Required): The parameters supplied to the create or update module properties.
* **tags**: [PythonPackageCreateParametersTags](#pythonpackagecreateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/python2Packages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/runbooks@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RunbookCreateOrUpdateProperties](#runbookcreateorupdateproperties) (Required): The parameters supplied to the create or update runbook properties.
* **tags**: [RunbookCreateOrUpdateParametersTags](#runbookcreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/runbooks/draft@2019-06-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'content' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
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


## Resource Microsoft.Automation/automationAccounts/schedules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleCreateOrUpdateProperties](#schedulecreateorupdateproperties) (Required): The parameters supplied to the create or update schedule operation.
* **type**: 'Microsoft.Automation/automationAccounts/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SoftwareUpdateConfigurationProperties](#softwareupdateconfigurationproperties) (Required): Software update configuration properties.
* **type**: 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/sourceControls@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlCreateOrUpdateProperties](#sourcecontrolcreateorupdateproperties) (Required): The properties of the create source control operation.
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlSyncJobCreateProperties](#sourcecontrolsyncjobcreateproperties) (Required): Definition of create source control sync job properties.
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/variables@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VariableCreateOrUpdateProperties](#variablecreateorupdateproperties) (Required): The properties of the create variable operation.
* **type**: 'Microsoft.Automation/automationAccounts/variables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/watchers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatcherProperties](#watcherproperties): Definition of the watcher properties
* **tags**: [WatcherTags](#watchertags): Resource tags.
* **type**: 'Microsoft.Automation/automationAccounts/watchers' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Automation/automationAccounts@2019-06-01)
* **Resource**: Microsoft.Automation/automationAccounts
* **ApiVersion**: 2019-06-01
* **Output**: [KeyListResult](#keylistresult)

## AutomationAccountCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **lastModifiedBy**: string (ReadOnly): Gets or sets the last modified by.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **sku**: [Sku](#sku): The account SKU.
* **state**: 'Ok' | 'Suspended' | 'Unavailable' | string (ReadOnly): Gets status of account.

## Sku
### Properties
* **capacity**: int: Gets or sets the SKU capacity.
* **family**: string: Gets or sets the SKU family.
* **name**: 'Basic' | 'Free' | string (Required): Gets or sets the SKU name of the account.

## AutomationAccountCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateCreateOrUpdateProperties
### Properties
* **base64Value**: string (Required, WriteOnly): Gets or sets the base64 encoded value of the certificate.
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string: Gets or sets the description of the certificate.
* **expiryTime**: string (ReadOnly): Gets the expiry time of the certificate.
* **isExportable**: bool: Gets or sets the is exportable flag of the certificate.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **thumbprint**: string: Gets or sets the thumbprint of the certificate.

## DscCompilationJobCreateProperties
### Properties
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required): The Dsc configuration property associated with the entity.
* **creationTime**: string (ReadOnly): Gets the creation time of the job.
* **endTime**: string (ReadOnly): Gets the end time of the job.
* **exception**: string (ReadOnly): Gets the exception of the job.
* **incrementNodeConfigurationBuild**: bool (WriteOnly): If a new build version of NodeConfiguration is required.
* **jobId**: string (ReadOnly): Gets the id of the job.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time of the job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets the last status modified time of the job.
* **parameters**: [DscCompilationJobCreatePropertiesParameters](#dsccompilationjobcreatepropertiesparameters): Gets or sets the parameters of the job.
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' | string (ReadOnly): The provisioning state of the resource.
* **runOn**: string (ReadOnly): Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startedBy**: string (ReadOnly): Gets the compilation job started by.
* **startTime**: string (ReadOnly): Gets the start time of the job.
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' | string (ReadOnly): Gets or sets the status of the job.
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
* **description**: string: Gets or sets the description of the configuration.
* **jobCount**: int (ReadOnly): Gets or sets the job count of the configuration.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **logProgress**: bool (WriteOnly): Gets or sets progress log option.
* **logVerbose**: bool: Gets or sets verbose log option.
* **nodeConfigurationCount**: int (ReadOnly): Gets the number of compiled node configurations.
* **parameters**: [DscConfigurationCreateOrUpdatePropertiesParameters](#dscconfigurationcreateorupdatepropertiesparameters): Gets or sets the configuration parameters.
* **provisioningState**: 'Succeeded' (ReadOnly): Gets or sets the provisioning state of the configuration.
* **source**: [ContentSource](#contentsource) (Required): Definition of the content source.
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

## ContentSource
### Properties
* **hash**: [ContentHash](#contenthash) (WriteOnly): Definition of the runbook property type.
* **type**: 'embeddedContent' | 'uri' | string (WriteOnly): Gets or sets the content source type.
* **value**: string (WriteOnly): Gets or sets the value of the content. This is based on the content source type.
* **version**: string (WriteOnly): Gets or sets the version of the content.

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
* **description**: string: Gets or sets the description of the connection.
* **fieldDefinitionValues**: [ConnectionCreateOrUpdatePropertiesFieldDefinitionValues](#connectioncreateorupdatepropertiesfielddefinitionvalues): Gets or sets the field definition properties of the connection.
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
* **fieldDefinitions**: [ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions](#connectiontypecreateorupdatepropertiesfielddefinitions) (Required): Gets or sets the field definitions of the connection type.
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
* **description**: string: Gets or sets the description of the credential.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **password**: string (Required, WriteOnly): Gets or sets the password of the credential.
* **userName**: string (Required): Gets or sets the user name of the credential.

## JobCreateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time of the job.
* **endTime**: string (ReadOnly): Gets or sets the end time of the job.
* **exception**: string (ReadOnly): Gets or sets the exception of the job.
* **jobId**: string (ReadOnly): Gets or sets the id of the job.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time of the job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets or sets the last status modified time of the job.
* **parameters**: [JobCreatePropertiesParameters](#jobcreatepropertiesparameters): Gets or sets the parameters of the job.
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' | string (ReadOnly): The provisioning state of the resource.
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty): The runbook property associated with the entity.
* **runOn**: string: Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startedBy**: string (ReadOnly): Gets or sets the job started by.
* **startTime**: string (ReadOnly): Gets or sets the start time of the job.
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' | string (ReadOnly): Gets or sets the status of the job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the job.

## JobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the runbook.

## JobScheduleCreateProperties
### Properties
* **jobScheduleId**: string (ReadOnly): Gets or sets the id of job schedule.
* **parameters**: [JobScheduleCreatePropertiesParameters](#jobschedulecreatepropertiesparameters): Gets or sets a list of job properties.
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty) (Required): The runbook property associated with the entity.
* **runOn**: string: Gets or sets the hybrid worker group that the scheduled job should run on.
* **schedule**: [ScheduleAssociationProperty](#scheduleassociationproperty) (Required): The schedule property associated with the entity.

## JobScheduleCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the Schedule.

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

## DscNodeConfigurationCreateOrUpdateParametersProperties
### Properties
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required): The Dsc configuration property associated with the entity.
* **creationTime**: string (ReadOnly): Gets or sets creation time.
* **incrementNodeConfigurationBuild**: bool: If a new build version of NodeConfiguration is required.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **nodeCount**: int (ReadOnly): Number of nodes with this node configuration assigned
* **source**: [ContentSource](#contentsource) (Required): Definition of the content source.

## DscNodeConfigurationCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PythonPackageCreateProperties
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

## PythonPackageCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string: Gets or sets the description of the runbook.
* **draft**: [RunbookDraft](#runbookdraft)
* **jobCount**: int (ReadOnly): Gets or sets the job count of the runbook.
* **lastModifiedBy**: string (ReadOnly): Gets or sets the last modified by.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **logActivityTrace**: int: Gets or sets the activity-level tracing options of the runbook.
* **logProgress**: bool: Gets or sets progress log option.
* **logVerbose**: bool: Gets or sets verbose log option.
* **outputTypes**: string[] (ReadOnly): Gets or sets the runbook output types.
* **parameters**: [RunbookPropertiesParameters](#runbookpropertiesparameters) (ReadOnly): Gets or sets the runbook parameters.
* **provisioningState**: 'Succeeded' (ReadOnly): Gets or sets the provisioning state of the runbook.
* **publishContentLink**: [ContentLink](#contentlink): Definition of the content link.
* **runbookType**: 'Graph' | 'GraphPowerShell' | 'GraphPowerShellWorkflow' | 'PowerShell' | 'PowerShellWorkflow' | 'Script' | string (Required): Gets or sets the type of the runbook.
* **state**: 'Edit' | 'New' | 'Published' | string (ReadOnly): Gets or sets the state of the runbook.

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
* **description**: string: Gets or sets the description of the schedule.
* **expiryTime**: string: Gets or sets the end time of the schedule.
* **expiryTimeOffsetMinutes**: int (ReadOnly): Gets or sets the expiry time's offset in minutes.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'OneTime' | 'Week' | string (Required): Gets or sets the frequency of the schedule.
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
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string: Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
* **occurrence**: int: Occurrence of the week within the month. Must be between 1 and 5

## SoftwareUpdateConfigurationProperties
### Properties
* **createdBy**: string (ReadOnly): CreatedBy property, which only appears in the response.
* **creationTime**: string (ReadOnly): Creation time of the resource, which only appears in the response.
* **error**: [ErrorResponse](#errorresponse): Error response of an operation failure
* **lastModifiedBy**: string (ReadOnly): LastModifiedBy property, which only appears in the response.
* **lastModifiedTime**: string (ReadOnly): Last time resource was modified, which only appears in the response.
* **provisioningState**: string (ReadOnly): Provisioning state for the software update configuration, which only appears in the response.
* **scheduleInfo**: [SUCScheduleProperties](#sucscheduleproperties) (Required): Definition of schedule parameters.
* **tasks**: [SoftwareUpdateConfigurationTasks](#softwareupdateconfigurationtasks): Task properties of the software update configuration.
* **updateConfiguration**: [UpdateConfiguration](#updateconfiguration) (Required): Update specific properties of the software update configuration.

## ErrorResponse
### Properties
* **code**: string: Error code
* **message**: string: Error message indicating why the operation failed.

## SUCScheduleProperties
### Properties
* **advancedSchedule**: [AdvancedSchedule](#advancedschedule): The properties of the create Advanced Schedule.
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

## SoftwareUpdateConfigurationTasks
### Properties
* **postTask**: [TaskProperties](#taskproperties): Task properties of the software update configuration.
* **preTask**: [TaskProperties](#taskproperties): Task properties of the software update configuration.

## TaskProperties
### Properties
* **parameters**: [TaskPropertiesParameters](#taskpropertiesparameters): Gets or sets the parameters of the task.
* **source**: string: Gets or sets the name of the runbook.

## TaskPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpdateConfiguration
### Properties
* **azureVirtualMachines**: string[]: List of azure resource Ids for azure virtual machines targeted by the software update configuration.
* **duration**: string: Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
* **linux**: [LinuxProperties](#linuxproperties): Linux specific update configuration.
* **nonAzureComputerNames**: string[]: List of names of non-azure machines targeted by the software update configuration.
* **operatingSystem**: 'Linux' | 'Windows' (Required): Target operating system for the software update configuration.
* **targets**: [TargetProperties](#targetproperties): Group specific to the update configuration.
* **windows**: [WindowsProperties](#windowsproperties): Windows specific update configuration.

## LinuxProperties
### Properties
* **excludedPackageNameMasks**: string[]: packages excluded from the software update configuration.
* **includedPackageClassifications**: 'Critical' | 'Other' | 'Security' | 'Unclassified' | string: Update classifications included in the software update configuration.
* **includedPackageNameMasks**: string[]: packages included from the software update configuration.
* **rebootSetting**: string: Reboot setting for the software update configuration.

## TargetProperties
### Properties
* **azureQueries**: [AzureQueryProperties](#azurequeryproperties)[]: List of Azure queries in the software update configuration.
* **nonAzureQueries**: [NonAzureQueryProperties](#nonazurequeryproperties)[]: List of non Azure queries in the software update configuration.

## AzureQueryProperties
### Properties
* **locations**: string[]: List of locations to scope the query to.
* **scope**: string[]: List of Subscription or Resource Group ARM Ids.
* **tagSettings**: [TagSettingsProperties](#tagsettingsproperties): Tag filter information for the VM.

## TagSettingsProperties
### Properties
* **filterOperator**: 'All' | 'Any': Filter VMs by Any or All specified tags.
* **tags**: [TagSettingsPropertiesTags](#tagsettingspropertiestags): Dictionary of tags with its list of values.

## TagSettingsPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## NonAzureQueryProperties
### Properties
* **functionAlias**: string: Log Analytics Saved Search name.
* **workspaceId**: string: Workspace Id for Log Analytics in which the saved Search is resided.

## WindowsProperties
### Properties
* **excludedKbNumbers**: string[]: KB numbers excluded from the software update configuration.
* **includedKbNumbers**: string[]: KB numbers included from the software update configuration.
* **includedUpdateClassifications**: 'Critical' | 'Definition' | 'FeaturePack' | 'Security' | 'ServicePack' | 'Tools' | 'Unclassified' | 'UpdateRollup' | 'Updates' | string: Update classification included in the software update configuration. A comma separated string with required values
* **rebootSetting**: string: Reboot setting for the software update configuration.

## SourceControlCreateOrUpdateProperties
### Properties
* **autoSync**: bool: The auto async of the source control. Default is false.
* **branch**: string: The repo branch of the source control. Include branch as empty string for VsoTfvc.
* **creationTime**: string (ReadOnly): The creation time.
* **description**: string: The user description of the source control.
* **folderPath**: string: The folder path of the source control. Path must be relative.
* **lastModifiedTime**: string (ReadOnly): The last modified time.
* **publishRunbook**: bool: The auto publish of the source control. Default is true.
* **repoUrl**: string: The repo url of the source control.
* **securityToken**: [SourceControlSecurityTokenProperties](#sourcecontrolsecuritytokenproperties) (WriteOnly)
* **sourceType**: 'GitHub' | 'VsoGit' | 'VsoTfvc' | string: The source type. Must be one of VsoGit, VsoTfvc, GitHub.

## SourceControlSecurityTokenProperties
### Properties
* **accessToken**: string (WriteOnly): The access token.
* **refreshToken**: string (WriteOnly): The refresh token.
* **tokenType**: 'Oauth' | 'PersonalAccessToken' | string (WriteOnly): The token type. Must be either PersonalAccessToken or Oauth.

## SourceControlSyncJobCreateProperties
### Properties
* **commitId**: string (Required, WriteOnly): The commit id of the source control sync job. If not syncing to a commitId, enter an empty string.
* **creationTime**: string (ReadOnly): The creation time of the job.
* **endTime**: string (ReadOnly): The end time of the job.
* **exception**: string (ReadOnly): The exceptions that occurred while running the sync job.
* **provisioningState**: 'Completed' | 'Failed' | 'Running' | string (ReadOnly): The provisioning state of the job.
* **sourceControlSyncJobId**: string (ReadOnly): The source control sync job id.
* **startTime**: string (ReadOnly): The start time of the job.
* **syncType**: 'FullSync' | 'PartialSync' | string (ReadOnly): The sync type.

## VariableCreateOrUpdateProperties
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

## KeyListResult
### Properties
* **keys**: [Key](#key)[] (ReadOnly): Lists the automation keys.

## Key
### Properties
* **KeyName**: 'Primary' | 'Secondary' | string (ReadOnly): Automation key name.
* **Permissions**: 'Full' | 'Read' | string (ReadOnly): Automation key permissions.
* **Value**: string (ReadOnly): Value of the Automation Key used for registration.

