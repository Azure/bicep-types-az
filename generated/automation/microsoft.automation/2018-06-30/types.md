# Microsoft.Automation @ 2018-06-30

## Resource Microsoft.Automation/automationAccounts/python2Packages@2018-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PythonPackageCreateProperties (Required)
* **tags**: PythonPackageCreateParametersTags
* **type**: 'Microsoft.Automation/automationAccounts/python2Packages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks@2018-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RunbookCreateOrUpdateProperties (Required)
* **tags**: RunbookCreateOrUpdateParametersTags
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant)

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
* **sizeInBytes**: int (ReadOnly)
* **version**: string (ReadOnly)

## ContentLink
### Properties
* **contentHash**: ContentHash
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

