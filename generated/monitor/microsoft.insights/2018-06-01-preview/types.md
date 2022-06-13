# microsoft.insights @ 2018-06-01-preview

## Resource microsoft.insights/guestDiagnosticSettings@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestDiagnosticSettings](#guestdiagnosticsettings) (Required): The diagnostic settings to be applied to azure resources.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'microsoft.insights/guestDiagnosticSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.insights/guestDiagnosticSettingsAssociation@2018-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestDiagnosticSettingsAssociation](#guestdiagnosticsettingsassociation) (Required): The diagnostics settings associations of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'microsoft.insights/guestDiagnosticSettingsAssociation' (ReadOnly, DeployTimeConstant): The resource type

## DataSource
### Properties
* **configuration**: [DataSourceConfiguration](#datasourceconfiguration) (Required)
* **kind**: 'ETWProviders' | 'PerformanceCounter' | 'WindowsEventLogs' | string (Required): Datasource kind
* **sinks**: [SinkConfiguration](#sinkconfiguration)[] (Required)

## DataSourceConfiguration
### Properties
* **eventLogs**: [EventLogConfiguration](#eventlogconfiguration)[]: Windows event logs configuration.
* **perfCounters**: [PerformanceCounterConfiguration](#performancecounterconfiguration)[]: Performance counter configuration
* **providers**: [EtwProviderConfiguration](#etwproviderconfiguration)[]: ETW providers configuration

## EtwEventConfiguration
### Properties
* **filter**: string
* **id**: int (Required)
* **name**: string (Required)

## EtwProviderConfiguration
### Properties
* **events**: [EtwEventConfiguration](#etweventconfiguration)[] (Required)
* **id**: string (Required)

## EventLogConfiguration
### Properties
* **filter**: string
* **logName**: string (Required)

## GuestDiagnosticSettings
### Properties
* **dataSources**: [DataSource](#datasource)[]: the array of data source object which are configured to collect and send data
* **osType**: 'Linux' | 'Windows' | string: Operating system type for the configuration
* **proxySetting**: string

## GuestDiagnosticSettingsAssociation
### Properties
* **guestDiagnosticSettingsName**: string (Required): The guest diagnostic settings name.

## PerformanceCounterConfiguration
### Properties
* **instance**: string
* **name**: string (Required)
* **samplingPeriod**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SinkConfiguration
### Properties
* **kind**: 'ApplicationInsights' | 'EventHub' | 'LogAnalytics' | string (Required)

