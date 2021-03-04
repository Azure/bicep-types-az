# Microsoft.Automation @ 2018-06-30

## Resource Microsoft.Automation/automationAccounts/python2Packages@2018-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PythonPackageCreateProperties (Required)
* **tags**: PythonPackageCreateParametersTags
* **type**: 'Microsoft.Automation/automationAccounts/python2Packages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks@2018-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RunbookCreateOrUpdateProperties (Required)
* **tags**: RunbookCreateOrUpdateParametersTags
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant)

## PythonPackageCreateProperties
### Properties
* **contentLink**: ContentLink (Required)

## ContentLink
### Properties
* **contentHash**: ContentHash
* **uri**: string
* **version**: string

## ContentHash
### Properties
* **algorithm**: string (Required)
* **value**: string (Required)

## PythonPackageCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookCreateOrUpdateProperties
### Properties
* **description**: string
* **draft**: RunbookDraft
* **logActivityTrace**: int
* **logProgress**: bool
* **logVerbose**: bool
* **publishContentLink**: ContentLink
* **runbookType**: 'Graph' | 'GraphPowerShell' | 'GraphPowerShellWorkflow' | 'PowerShell' | 'PowerShellWorkflow' | 'Script' (Required)

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

## RunbookCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

