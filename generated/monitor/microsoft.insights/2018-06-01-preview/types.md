# microsoft.insights @ 2018-06-01-preview

## Resource microsoft.insights/guestDiagnosticSettings@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GuestDiagnosticSettings](#guestdiagnosticsettings) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'microsoft.insights/guestDiagnosticSettings' (ReadOnly, DeployTimeConstant)

## Resource microsoft.insights/guestDiagnosticSettingsAssociation@2018-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GuestDiagnosticSettingsAssociation](#guestdiagnosticsettingsassociation) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'microsoft.insights/guestDiagnosticSettingsAssociation' (ReadOnly, DeployTimeConstant)

## GuestDiagnosticSettings
### Properties
* **dataSources**: [DataSource](#datasource)[]
* **osType**: 'Linux' | 'Windows'
* **proxySetting**: string

## DataSource
### Properties
* **configuration**: [DataSourceConfiguration](#datasourceconfiguration) (Required)
* **kind**: 'ETWProviders' | 'PerformanceCounter' | 'WindowsEventLogs' (Required)
* **sinks**: [SinkConfiguration](#sinkconfiguration)[] (Required)

## DataSourceConfiguration
### Properties
* **eventLogs**: [EventLogConfiguration](#eventlogconfiguration)[]
* **perfCounters**: [PerformanceCounterConfiguration](#performancecounterconfiguration)[]
* **providers**: [EtwProviderConfiguration](#etwproviderconfiguration)[]

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
* **guestDiagnosticSettingsName**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

