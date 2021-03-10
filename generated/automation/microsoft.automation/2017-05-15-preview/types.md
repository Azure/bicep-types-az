# Microsoft.Automation @ 2017-05-15-preview

## Resource Microsoft.Automation/automationAccounts/jobs@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobCreateProperties](#jobcreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [softwareUpdateConfigurationProperties](#softwareupdateconfigurationproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SourceControlCreateOrUpdateProperties](#sourcecontrolcreateorupdateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SourceControlSyncJobCreateProperties](#sourcecontrolsyncjobcreateproperties) (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs' (ReadOnly, DeployTimeConstant)

## JobCreateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **jobId**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly)
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty)
* **runOn**: string
* **startedBy**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookAssociationProperty
### Properties
* **name**: string

## softwareUpdateConfigurationProperties
### Properties
* **createdBy**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **error**: [ErrorResponse](#errorresponse)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **scheduleInfo**: [ScheduleProperties](#scheduleproperties) (Required)
* **tasks**: [softwareUpdateConfigurationTasks](#softwareupdateconfigurationtasks)
* **updateConfiguration**: [updateConfiguration](#updateconfiguration) (Required)

## ErrorResponse
### Properties
* **code**: string
* **message**: string

## ScheduleProperties
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

## AdvancedSchedule
### Properties
* **monthDays**: int[]
* **monthlyOccurrences**: [AdvancedScheduleMonthlyOccurrence](#advancedschedulemonthlyoccurrence)[]
* **weekDays**: string[]

## AdvancedScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **occurrence**: int

## softwareUpdateConfigurationTasks
### Properties
* **postTask**: [taskProperties](#taskproperties)
* **preTask**: [taskProperties](#taskproperties)

## taskProperties
### Properties
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)
* **source**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## updateConfiguration
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
* **tags**: [Dictionary<string,IList<String>>](#dictionarystringiliststring)

## Dictionary<string,IList<String>>
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

