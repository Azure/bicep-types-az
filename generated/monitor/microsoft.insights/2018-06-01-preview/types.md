# microsoft.insights @ 2018-06-01-preview

## Resource microsoft.insights/guestDiagnosticSettings@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestDiagnosticSettings](#guestdiagnosticsettings) (Required): Virtual machine diagnostic settings
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'microsoft.insights/guestDiagnosticSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.insights/guestDiagnosticSettingsAssociation@2018-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestDiagnosticSettingsAssociation](#guestdiagnosticsettingsassociation) (Required): A guest diagnostic settings association.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'microsoft.insights/guestDiagnosticSettingsAssociation' (ReadOnly, DeployTimeConstant): The resource type

## GuestDiagnosticSettings
### Properties
* **dataSources**: [DataSource](#datasource)[]: the array of data source object which are configured to collect and send data
* **osType**: 'Linux' | 'Windows': Operating system type for the configuration.
* **proxySetting**: string

## DataSource
### Properties
* **configuration**: [DataSourceConfiguration](#datasourceconfiguration) (Required)
* **kind**: 'ETWProviders' | 'PerformanceCounter' | 'WindowsEventLogs' (Required): Datasource kind.
* **sinks**: [SinkConfiguration](#sinkconfiguration)[] (Required)

## DataSourceConfiguration
### Properties
* **eventLogs**: [EventLogConfiguration](#eventlogconfiguration)[]: Windows event logs configuration.
* **perfCounters**: [PerformanceCounterConfiguration](#performancecounterconfiguration)[]: Performance counter configuration
* **providers**: [EtwProviderConfiguration](#etwproviderconfiguration)[]: ETW providers configuration

## EventLogConfiguration
### Properties
* **filter**: string
* **logName**: string (Required)

## PerformanceCounterConfiguration
### Properties
* **instance**: string
* **name**: string (Required)
* **samplingPeriod**: string (Required)

## EtwProviderConfiguration
### Properties
* **events**: [EtwEventConfiguration](#etweventconfiguration)[] (Required)
* **id**: string (Required)

## EtwEventConfiguration
### Properties
* **filter**: string
* **id**: int (Required)
* **name**: string (Required)

## SinkConfiguration
### Properties
* **kind**: 'ApplicationInsights' | 'EventHub' | 'LogAnalytics' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GuestDiagnosticSettingsAssociation
### Properties
* **guestDiagnosticSettingsName**: string (Required): The guest diagnostic settings name.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

