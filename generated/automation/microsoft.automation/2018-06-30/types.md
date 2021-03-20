# Microsoft.Automation @ 2018-06-30

## Resource Microsoft.Automation/automationAccounts/python2Packages@2018-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PythonPackageCreateProperties](#pythonpackagecreateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Automation/automationAccounts/python2Packages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks@2018-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RunbookCreateOrUpdateProperties](#runbookcreateorupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks/draft@2018-06-30
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'content' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)

### Microsoft.Automation/automationAccounts/runbooks/draft
#### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **logActivityTrace**: int (ReadOnly)
* **name**: 'testJob' (Required, DeployTimeConstant)
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)
* **runOn**: string
* **startTime**: string (ReadOnly)
* **status**: string (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)


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

## Dictionary<string,String>
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
* **parameters**: [Dictionary<string,RunbookParameter>](#dictionarystringrunbookparameter) (ReadOnly)
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
* **parameters**: [Dictionary<string,RunbookParameter>](#dictionarystringrunbookparameter)

## Dictionary<string,RunbookParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: [RunbookParameter](#runbookparameter)

## RunbookParameter
### Properties
* **defaultValue**: string
* **isMandatory**: bool
* **position**: int
* **type**: string

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
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'content' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)

## Microsoft.Automation/automationAccounts/runbooks/draft
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **logActivityTrace**: int (ReadOnly)
* **name**: 'testJob' (Required, DeployTimeConstant)
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)
* **runOn**: string
* **startTime**: string (ReadOnly)
* **status**: string (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **type**: 'Microsoft.Automation/automationAccounts/runbooks/draft' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

