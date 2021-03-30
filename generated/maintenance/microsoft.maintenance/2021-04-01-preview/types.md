# Microsoft.Maintenance @ 2021-04-01-preview

## Resource Microsoft.Maintenance/applyUpdates@2021-04-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Maintenance/applyUpdates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maintenance/configurationAssignments@2021-04-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationAssignmentProperties](#configurationassignmentproperties): Properties for configuration assignment
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maintenance/maintenanceConfigurations@2021-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties): Properties for maintenance configuration
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets tags of the resource
* **type**: 'Microsoft.Maintenance/maintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationAssignmentProperties
### Properties
* **maintenanceConfigurationId**: string: The maintenance configuration Id
* **resourceId**: string: The unique resourceId

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'

## MaintenanceConfigurationProperties
### Properties
* **extensionProperties**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets extensionProperties of the maintenanceConfiguration
* **installPatches**: [InputPatchConfiguration](#inputpatchconfiguration): Input configuration for a patch run
* **maintenanceScope**: 'Extension' | 'Host' | 'InGuestPatch' | 'OSImage' | 'SQLDB' | 'SQLManagedInstance': Gets or sets maintenanceScope of the configuration. Possible values include: 'Host', 'OSImage', 'Extension', 'InGuestPatch', 'SQLDB', 'SQLManagedInstance'
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Definition of a MaintenanceWindow
* **namespace**: string: Gets or sets namespace of the resource
* **visibility**: 'Custom' | 'Public': Gets or sets the visibility of the configuration. Possible values include: 'Custom', 'Public'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InputPatchConfiguration
### Properties
* **linuxParameters**: [InputLinuxParameters](#inputlinuxparameters): Input properties for patching a Linux machine.
* **rebootSetting**: 'AlwaysReboot' | 'NeverReboot' | 'RebootIfRequired': Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed. Possible values include: 'NeverReboot', 'RebootIfRequired', 'AlwaysReboot'
* **tasks**: [softwareUpdateConfigurationTasks](#softwareupdateconfigurationtasks): Task properties of the software update configuration.
* **windowsParameters**: [InputWindowsParameters](#inputwindowsparameters): Input properties for patching a Windows machine.

## InputLinuxParameters
### Properties
* **classificationsToInclude**: string[]: Classification category of patches to be patched
* **packageNameMasksToExclude**: string[]: Package names to be excluded for patching.
* **packageNameMasksToInclude**: string[]: Package names to be included for patching.

## softwareUpdateConfigurationTasks
### Properties
* **postTasks**: [taskProperties](#taskproperties)[]: List of post tasks. e.g. [{'source' :'runbook', 'taskScope': 'Resource', 'parameters': { 'arg1': 'value1'}}]
* **preTasks**: [taskProperties](#taskproperties)[]: List of pre tasks. e.g. [{'source' :'runbook', 'taskScope': 'Global', 'parameters': { 'arg1': 'value1'}}]

## taskProperties
### Properties
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the parameters of the task.
* **source**: string: Gets or sets the name of the runbook.
* **taskScope**: 'Global' | 'Resource': Global Task execute once when schedule trigger. Resource task execute for each VM. Possible values include: 'Global', 'Resource'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InputWindowsParameters
### Properties
* **classificationsToInclude**: string[]: Classification category of patches to be patched
* **kbNumbersToExclude**: string[]: Windows KBID to be excluded for patching.
* **kbNumbersToInclude**: string[]: Windows KBID to be included for patching.

## MaintenanceWindow
### Properties
* **duration**: string: Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00.
* **expirationDateTime**: string: Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
* **recurEvery**: string: Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday]. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday.
* **startDateTime**: string: Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
* **timeZone**: string: Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

