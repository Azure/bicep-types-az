# Microsoft.Automation @ 2018-06-30

## Resource Microsoft.Automation/automationAccounts/runbooks@2018-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RunbookCreateOrUpdateProperties](#runbookcreateorupdateproperties) (Required): The parameters supplied to the create or update runbook properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/runbooks/draft@2018-06-30
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'content' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **creationTime**: string (ReadOnly): Gets or sets the creation time of the test job.
* **endTime**: string (ReadOnly): Gets or sets the end time of the test job.
* **exception**: string (ReadOnly): Gets or sets the exception of the test job.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time of the test job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets or sets the last status modified time of the test job.
* **logActivityTrace**: int (ReadOnly): The activity-level tracing options of the runbook.
* **name**: 'testJob' (Required, DeployTimeConstant): The resource name
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the parameters of the test job.
* **runOn**: string: Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startTime**: string (ReadOnly): Gets or sets the start time of the test job.
* **status**: string (ReadOnly): Gets or sets the status of the test job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the test job.
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant): The resource type


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
* **parameters**: [Dictionary<string,RunbookParameter>](#dictionarystringrunbookparameter) (ReadOnly): Gets or sets the runbook parameters.
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
* **parameters**: [Dictionary<string,RunbookParameter>](#dictionarystringrunbookparameter): Gets or sets the runbook draft parameters.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash): Definition of the runbook property type.
* **uri**: string: Gets or sets the uri of the runbook content.
* **version**: string: Gets or sets the version of the content.

## ContentHash
### Properties
* **algorithm**: string (Required): Gets or sets the content hash algorithm used to hash the content.
* **value**: string (Required): Gets or sets expected hash value of the content.

## Dictionary<string,RunbookParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: [RunbookParameter](#runbookparameter)

## RunbookParameter
### Properties
* **defaultValue**: string: Gets or sets the default value of parameter.
* **isMandatory**: bool: Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
* **position**: int: Get or sets the position of the parameter.
* **type**: string: Gets or sets the type of the parameter.

## Dictionary<string,RunbookParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: [RunbookParameter](#runbookparameter)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Automation/automationAccounts/runbooks/draft
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'content' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Automation/automationAccounts/runbooks/draft
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **creationTime**: string (ReadOnly): Gets or sets the creation time of the test job.
* **endTime**: string (ReadOnly): Gets or sets the end time of the test job.
* **exception**: string (ReadOnly): Gets or sets the exception of the test job.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time of the test job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets or sets the last status modified time of the test job.
* **logActivityTrace**: int (ReadOnly): The activity-level tracing options of the runbook.
* **name**: 'testJob' (Required, DeployTimeConstant): The resource name
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the parameters of the test job.
* **runOn**: string: Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startTime**: string (ReadOnly): Gets or sets the start time of the test job.
* **status**: string (ReadOnly): Gets or sets the status of the test job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the test job.
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

