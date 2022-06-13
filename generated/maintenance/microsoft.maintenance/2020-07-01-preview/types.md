# Microsoft.Maintenance @ 2020-07-01-preview

## Resource Microsoft.Maintenance/applyUpdates@2020-07-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Maintenance/applyUpdates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maintenance/configurationAssignments@2020-07-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationAssignmentProperties](#configurationassignmentproperties): Properties of the configuration assignment
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maintenance/maintenanceConfigurations@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties): Gets or sets properties of the resource
* **tags**: [MaintenanceConfigurationTags](#maintenanceconfigurationtags): Gets or sets tags of the resource
* **type**: 'Microsoft.Maintenance/maintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationAssignmentProperties
### Properties
* **maintenanceConfigurationId**: string: The maintenance configuration Id
* **resourceId**: string: The unique resourceId

## MaintenanceConfigurationProperties
### Properties
* **extensionProperties**: [MaintenanceConfigurationPropertiesExtensionProperties](#maintenanceconfigurationpropertiesextensionproperties): Gets or sets extensionProperties of the maintenanceConfiguration
* **maintenanceScope**: 'All' | 'Extension' | 'Host' | 'InGuestPatch' | 'InResource' | 'OSImage' | 'Resource' | 'SQLDB' | 'SQLManagedInstance' | string: Gets or sets maintenanceScope of the configuration
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Definition of a MaintenanceWindow
* **namespace**: string: Gets or sets namespace of the resource
* **visibility**: 'Custom' | 'Public' | string: Gets or sets the visibility of the configuration

## MaintenanceConfigurationPropertiesExtensionProperties
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
* **recurEvery**: string: Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday]. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday.
* **startDateTime**: string: Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
* **timeZone**: string: Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.

