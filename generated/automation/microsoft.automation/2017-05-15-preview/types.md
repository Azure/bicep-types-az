# Microsoft.Automation @ 2017-05-15-preview

## Resource Microsoft.Automation/automationAccounts/jobs@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobCreateProperties](#jobcreateproperties) (Required):
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [softwareUpdateConfigurationProperties](#softwareupdateconfigurationproperties) (Required): Software update configuration properties.
* **type**: 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/sourceControls@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlCreateOrUpdateProperties](#sourcecontrolcreateorupdateproperties) (Required): The properties of the create source control operation.
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2017-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlSyncJobCreateProperties](#sourcecontrolsyncjobcreateproperties) (Required): Definition of create source control sync job properties.
* **type**: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs' (ReadOnly, DeployTimeConstant): The resource type

## JobCreateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time of the job.
* **endTime**: string (ReadOnly): Gets or sets the end time of the job.
* **exception**: string (ReadOnly): Gets or sets the exception of the job.
* **jobId**: string (ReadOnly): Gets or sets the id of the job.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time of the job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets or sets the last status modified time of the job.
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the parameters of the job.
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly): The current provisioning state of the job. Possible values include: 'Failed', 'Succeeded', 'Suspended', 'Processing'
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty): The runbook property associated with the entity.
* **runOn**: string: Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startedBy**: string (ReadOnly): Gets or sets the job started by.
* **startTime**: string (ReadOnly): Gets or sets the start time of the job.
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly): Gets or sets the status of the job. Possible values include: 'New', 'Activating', 'Running', 'Completed', 'Failed', 'Stopped', 'Blocked', 'Suspended', 'Disconnected', 'Suspending', 'Stopping', 'Resuming', 'Removing'
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the job.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the runbook.

## softwareUpdateConfigurationProperties
### Properties
* **createdBy**: string (ReadOnly): CreatedBy property, which only appears in the response.
* **creationTime**: string (ReadOnly): Creation time of the resource, which only appears in the response.
* **error**: [ErrorResponse](#errorresponse): Error response of an operation failure
* **lastModifiedBy**: string (ReadOnly): LastModifiedBy property, which only appears in the response.
* **lastModifiedTime**: string (ReadOnly): Last time resource was modified, which only appears in the response.
* **provisioningState**: string (ReadOnly): Provisioning state for the software update configuration, which only appears in the response.
* **scheduleInfo**: [ScheduleProperties](#scheduleproperties) (Required): Definition of schedule parameters.
* **tasks**: [softwareUpdateConfigurationTasks](#softwareupdateconfigurationtasks): Task properties of the software update configuration.
* **updateConfiguration**: [updateConfiguration](#updateconfiguration) (Required): Update specific properties of the software update configuration.

## ErrorResponse
### Properties
* **code**: string: Error code
* **message**: string: Error message indicating why the operation failed.

## ScheduleProperties
### Properties
* **advancedSchedule**: [AdvancedSchedule](#advancedschedule): The properties of the create Advanced Schedule.
* **creationTime**: string: Gets or sets the creation time.
* **description**: string: Gets or sets the description.
* **expiryTime**: string: Gets or sets the end time of the schedule.
* **expiryTimeOffsetMinutes**: int: Gets or sets the expiry time's offset in minutes.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'OneTime' | 'Week': Gets or sets the frequency of the schedule. Possible values include: 'OneTime', 'Day', 'Hour', 'Week', 'Month', 'Minute'
* **interval**: int: Gets or sets the interval of the schedule.
* **isEnabled**: bool: Gets or sets a value indicating whether this schedule is enabled.
* **lastModifiedTime**: string: Gets or sets the last modified time.
* **nextRun**: string: Gets or sets the next run time of the schedule.
* **nextRunOffsetMinutes**: int: Gets or sets the next run time's offset in minutes.
* **startTime**: string: Gets or sets the start time of the schedule.
* **startTimeOffsetMinutes**: int (ReadOnly): Gets the start time's offset in minutes.
* **timeZone**: string: Gets or sets the time zone of the schedule.

## AdvancedSchedule
### Properties
* **monthDays**: int[]: Days of the month that the job should execute on. Must be between 1 and 31.
* **monthlyOccurrences**: [AdvancedScheduleMonthlyOccurrence](#advancedschedulemonthlyoccurrence)[]: Occurrences of days within a month.
* **weekDays**: string[]: Days of the week that the job should execute on.

## AdvancedScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. Possible values include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
* **occurrence**: int: Occurrence of the week within the month. Must be between 1 and 5

## softwareUpdateConfigurationTasks
### Properties
* **postTask**: [taskProperties](#taskproperties): Task properties of the software update configuration.
* **preTask**: [taskProperties](#taskproperties): Task properties of the software update configuration.

## taskProperties
### Properties
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the parameters of the task.
* **source**: string: Gets or sets the name of the runbook.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## updateConfiguration
### Properties
* **azureVirtualMachines**: string[]: List of azure resource Ids for azure virtual machines targeted by the software update configuration.
* **duration**: string: Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
* **linux**: [LinuxProperties](#linuxproperties): Linux specific update configuration.
* **nonAzureComputerNames**: string[]: List of names of non-azure machines targeted by the software update configuration.
* **operatingSystem**: 'Linux' | 'Windows' (Required): operating system of target machines. Possible values include: 'Windows', 'Linux'
* **targets**: [TargetProperties](#targetproperties): Group specific to the update configuration.
* **windows**: [WindowsProperties](#windowsproperties): Windows specific update configuration.

## LinuxProperties
### Properties
* **excludedPackageNameMasks**: string[]: packages excluded from the software update configuration.
* **includedPackageClassifications**: 'Critical' | 'Other' | 'Security' | 'Unclassified': Update classifications included in the software update configuration. Possible values include: 'Unclassified', 'Critical', 'Security', 'Other'
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
* **filterOperator**: 'All' | 'Any': Filter VMs by Any or All specified tags. Possible values include: 'All', 'Any'
* **tags**: [Dictionary<string,IList<String>>](#dictionarystringiliststring): Dictionary of tags with its list of values.

## Dictionary<string,IList<String>>
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
* **includedUpdateClassifications**: 'Critical' | 'Definition' | 'FeaturePack' | 'Security' | 'ServicePack' | 'Tools' | 'Unclassified' | 'UpdateRollup' | 'Updates': Update classification included in the software update configuration. A comma separated string with required values. Possible values include: 'Unclassified', 'Critical', 'Security', 'UpdateRollup', 'FeaturePack', 'ServicePack', 'Definition', 'Tools', 'Updates'
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
* **securityToken**: [SourceControlSecurityTokenProperties](#sourcecontrolsecuritytokenproperties) (WriteOnly):
* **sourceType**: 'GitHub' | 'VsoGit' | 'VsoTfvc': The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive. Possible values include: 'VsoGit', 'VsoTfvc', 'GitHub'

## SourceControlSecurityTokenProperties
### Properties
* **accessToken**: string (WriteOnly): The access token.
* **refreshToken**: string (WriteOnly): The refresh token.
* **tokenType**: 'Oauth' | 'PersonalAccessToken' (WriteOnly): The token type. Must be either PersonalAccessToken or Oauth. Possible values include: 'PersonalAccessToken', 'Oauth'

## SourceControlSyncJobCreateProperties
### Properties
* **commitId**: string (Required, WriteOnly): The commit id of the source control sync job. If not syncing to a commitId, enter an empty string.
* **creationTime**: string (ReadOnly): The creation time of the job.
* **endTime**: string (ReadOnly): The end time of the job.
* **exception**: string (ReadOnly): The exceptions that occurred while running the sync job.
* **provisioningState**: 'Completed' | 'Failed' | 'Running' (ReadOnly): The provisioning state of the job. Possible values include: 'Completed', 'Failed', 'Running'
* **sourceControlSyncJobId**: string (ReadOnly): The source control sync job id.
* **startTime**: string (ReadOnly): The start time of the job.
* **syncType**: 'FullSync' | 'PartialSync' (ReadOnly): The sync type. Possible values include: 'PartialSync', 'FullSync'

