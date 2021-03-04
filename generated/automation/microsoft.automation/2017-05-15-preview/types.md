# Microsoft.Automation @ 2017-05-15-preview

## Resource Microsoft.Automation/automationAccounts/jobs@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobCreateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SoftwareUpdateConfigurationProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SourceControlCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SourceControlSyncJobCreateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs' (ReadOnly, DeployTimeConstant)

## JobCreateProperties
### Properties
* **parameters**: JobCreatePropertiesParameters
* **runbook**: RunbookAssociationProperty
* **runOn**: string

## JobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookAssociationProperty
### Properties
* **name**: string

## SoftwareUpdateConfigurationProperties
### Properties
* **createdBy**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **error**: ErrorResponse
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **scheduleInfo**: ScheduleProperties (Required)
* **tasks**: SoftwareUpdateConfigurationTasks
* **updateConfiguration**: UpdateConfiguration (Required)

## ErrorResponse
### Properties
* **code**: string
* **message**: string

## ScheduleProperties
### Properties
* **advancedSchedule**: AdvancedSchedule
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
* **monthlyOccurrences**: AdvancedScheduleMonthlyOccurrence[]
* **weekDays**: string[]

## AdvancedScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **occurrence**: int

## SoftwareUpdateConfigurationTasks
### Properties
* **postTask**: TaskProperties
* **preTask**: TaskProperties

## TaskProperties
### Properties
* **parameters**: TaskPropertiesParameters
* **source**: string

## TaskPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpdateConfiguration
### Properties
* **azureVirtualMachines**: string[]
* **duration**: any
* **linux**: LinuxProperties
* **nonAzureComputerNames**: string[]
* **targets**: TargetProperties
* **windows**: WindowsProperties

## LinuxProperties
### Properties
* **excludedPackageNameMasks**: string[]
* **includedPackageClassifications**: 'Critical' | 'Other' | 'Security' | 'Unclassified'
* **includedPackageNameMasks**: string[]
* **rebootSetting**: string

## TargetProperties
### Properties
* **azureQueries**: AzureQueryProperties[]
* **nonAzureQueries**: NonAzureQueryProperties[]

## AzureQueryProperties
### Properties
* **locations**: string[]
* **scope**: string[]
* **tagSettings**: TagSettingsProperties

## TagSettingsProperties
### Properties
* **tags**: TagSettingsPropertiesTags

## TagSettingsPropertiesTags
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
* **description**: string
* **folderPath**: string
* **publishRunbook**: bool
* **repoUrl**: string
* **sourceType**: 'GitHub' | 'VsoGit' | 'VsoTfvc'

## SourceControlSyncJobCreateProperties
### Properties

