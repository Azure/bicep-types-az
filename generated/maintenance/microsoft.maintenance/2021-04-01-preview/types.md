# Microsoft.Maintenance @ 2021-04-01-preview

## Resource Microsoft.Maintenance/applyUpdates@2021-04-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplyUpdateProperties](#applyupdateproperties) (ReadOnly): Properties of the apply update
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Maintenance/applyUpdates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maintenance/configurationAssignments@2021-04-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationAssignmentProperties](#configurationassignmentproperties): Properties of the configuration assignment
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maintenance/maintenanceConfigurations@2021-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties): Gets or sets properties of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [MaintenanceConfigurationTags](#maintenanceconfigurationtags): Gets or sets tags of the resource
* **type**: 'Microsoft.Maintenance/maintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maintenance/publicMaintenanceConfigurations@2021-04-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Gets or sets location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties) (ReadOnly): Gets or sets properties of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [MaintenanceConfigurationTags](#maintenanceconfigurationtags) (ReadOnly): Gets or sets tags of the resource
* **type**: 'Microsoft.Maintenance/publicMaintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## ApplyUpdateProperties
### Properties
* **lastUpdateTime**: string: Last Update time
* **resourceId**: string: The resourceId
* **status**: 'Completed' | 'InProgress' | 'Pending' | 'RetryLater' | 'RetryNow' | string: The status

## ConfigurationAssignmentProperties
### Properties
* **maintenanceConfigurationId**: string: The maintenance configuration Id
* **resourceId**: string: The unique resourceId

## InputLinuxParameters
### Properties
* **classificationsToInclude**: string[]: Classification category of patches to be patched. Allowed values are 'Critical', 'Security', and 'Other'.
* **packageNameMasksToExclude**: string[]: Package names to be excluded for patching.
* **packageNameMasksToInclude**: string[]: Package names to be included for patching.

## InputPatchConfiguration
### Properties
* **linuxParameters**: [InputLinuxParameters](#inputlinuxparameters): Input parameters specific to patching Linux machine. For Windows machines, do not pass this property.
* **rebootSetting**: 'AlwaysReboot' | 'NeverReboot' | 'RebootIfRequired' | string: Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed.
* **tasks**: [SoftwareUpdateConfigurationTasks](#softwareupdateconfigurationtasks): Tasks information for the Software update configuration.
* **windowsParameters**: [InputWindowsParameters](#inputwindowsparameters): Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property.

## InputWindowsParameters
### Properties
* **classificationsToInclude**: string[]: Classification category of patches to be patched. Allowed values are 'Critical', 'Security', 'UpdateRollup', 'FeaturePack', 'ServicePack', 'Definition', 'Tools', and 'Updates'.
* **excludeKbsRequiringReboot**: bool: Exclude patches which need reboot
* **kbNumbersToExclude**: string[]: Windows KBID to be excluded for patching.
* **kbNumbersToInclude**: string[]: Windows KBID to be included for patching.

## MaintenanceConfigurationProperties
### Properties
* **extensionProperties**: [MaintenanceConfigurationPropertiesExtensionProperties](#maintenanceconfigurationpropertiesextensionproperties): Gets or sets extensionProperties of the maintenanceConfiguration
* **installPatches**: [InputPatchConfiguration](#inputpatchconfiguration): The input parameters to be passed to the patch run operation.
* **maintenanceScope**: 'Extension' | 'Host' | 'InGuestPatch' | 'OSImage' | 'SQLDB' | 'SQLManagedInstance' | string: Gets or sets maintenanceScope of the configuration
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Definition of a MaintenanceWindow
* **namespace**: string: Gets or sets namespace of the resource
* **visibility**: 'Custom' | 'Public' | string: Gets or sets the visibility of the configuration. The default value is 'Custom'

## MaintenanceConfigurationPropertiesExtensionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MaintenanceConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MaintenanceConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MaintenanceWindow
### Properties
* **duration**: string: Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00.
* **expirationDateTime**: string: Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
* **recurEvery**: string: Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday] [Optional Offset(No. of days)]. Offset value must be between -6 to 6 inclusive. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday, recurEvery: Month Last Sunday Offset-3, recurEvery: Month Third Sunday Offset6.
* **startDateTime**: string: Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
* **timeZone**: string: Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.

## SoftwareUpdateConfigurationTasks
### Properties
* **postTasks**: [TaskProperties](#taskproperties)[]: List of post tasks. e.g. [{'source' :'runbook', 'taskScope': 'Resource', 'parameters': { 'arg1': 'value1'}}]
* **preTasks**: [TaskProperties](#taskproperties)[]: List of pre tasks. e.g. [{'source' :'runbook', 'taskScope': 'Global', 'parameters': { 'arg1': 'value1'}}]

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TaskProperties
### Properties
* **parameters**: [TaskPropertiesParameters](#taskpropertiesparameters): Gets or sets the parameters of the task.
* **source**: string: Gets or sets the name of the runbook.
* **taskScope**: 'Global' | 'Resource' | string: Global Task execute once when schedule trigger. Resource task execute for each VM.

## TaskPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

