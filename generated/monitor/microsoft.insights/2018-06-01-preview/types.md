# microsoft.insights @ 2018-06-01-preview

## microsoft.insights/guestDiagnosticSettings
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GuestDiagnosticSettings (Required)
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/guestDiagnosticSettings' (ReadOnly, DeployTimeConstant)

## GuestDiagnosticSettings
### Properties
* **dataSources**: DataSource[]
* **osType**: 'Linux' | 'Windows'
* **proxySetting**: string

## DataSource
### Properties
* **configuration**: DataSourceConfiguration (Required)
* **kind**: 'ETWProviders' | 'PerformanceCounter' | 'WindowsEventLogs' (Required)
* **sinks**: SinkConfiguration[] (Required)

## DataSourceConfiguration
### Properties
* **eventLogs**: EventLogConfiguration[]
* **perfCounters**: PerformanceCounterConfiguration[]
* **providers**: EtwProviderConfiguration[]

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
* **events**: EtwEventConfiguration[] (Required)
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
### Additional Properties
* **Additional Properties Type**: string

## microsoft.insights/guestDiagnosticSettingsAssociation
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GuestDiagnosticSettingsAssociation (Required)
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/guestDiagnosticSettingsAssociation' (ReadOnly, DeployTimeConstant)

## GuestDiagnosticSettingsAssociation
### Properties
* **guestDiagnosticSettingsName**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

