# Microsoft.Insights @ 2019-11-01-preview

## Resource Microsoft.Insights/dataCollectionRuleAssociations@2019-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataCollectionRuleAssociationProxyOnlyResourceProperties](#datacollectionruleassociationproxyonlyresourceproperties)
* **type**: 'Microsoft.Insights/dataCollectionRuleAssociations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/dataCollectionRules@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Linux' | 'Windows'
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataCollectionRuleResourceProperties](#datacollectionruleresourceproperties)
* **tags**: [DataCollectionRuleResourceTags](#datacollectionruleresourcetags)
* **type**: 'Microsoft.Insights/dataCollectionRules' (ReadOnly, DeployTimeConstant)

## DataCollectionRuleAssociationProxyOnlyResourceProperties
### Properties
* **dataCollectionRuleId**: string
* **description**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## DataCollectionRuleResourceProperties
### Properties
* **dataFlows**: [DataFlow](#dataflow)[]
* **dataSources**: [DataCollectionRuleDataSources](#datacollectionruledatasources)
* **description**: string
* **destinations**: [DataCollectionRuleDestinations](#datacollectionruledestinations)
* **immutableId**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## DataFlow
### Properties
* **destinations**: string[]
* **streams**: 'Microsoft-Event' | 'Microsoft-InsightsMetrics' | 'Microsoft-Perf' | 'Microsoft-Syslog' | 'Microsoft-WindowsEvent'[]

## DataCollectionRuleDataSources
### Properties
* **extensions**: [ExtensionDataSource](#extensiondatasource)[]
* **performanceCounters**: [PerfCounterDataSource](#perfcounterdatasource)[]
* **syslog**: [SyslogDataSource](#syslogdatasource)[]
* **windowsEventLogs**: [WindowsEventLogDataSource](#windowseventlogdatasource)[]

## ExtensionDataSource
### Properties
* **extensionName**: string (Required)
* **extensionSettings**: any
* **inputDataSources**: string[]
* **name**: string
* **streams**: 'Microsoft-Event' | 'Microsoft-InsightsMetrics' | 'Microsoft-Perf' | 'Microsoft-Syslog' | 'Microsoft-WindowsEvent'[]

## PerfCounterDataSource
### Properties
* **counterSpecifiers**: string[]
* **name**: string
* **samplingFrequencyInSeconds**: int
* **streams**: 'Microsoft-InsightsMetrics' | 'Microsoft-Perf'[]

## SyslogDataSource
### Properties
* **facilityNames**: '*' | 'auth' | 'authpriv' | 'cron' | 'daemon' | 'kern' | 'local0' | 'local1' | 'local2' | 'local3' | 'local4' | 'local5' | 'local6' | 'local7' | 'lpr' | 'mail' | 'mark' | 'news' | 'syslog' | 'user' | 'uucp'[]
* **logLevels**: '*' | 'Alert' | 'Critical' | 'Debug' | 'Emergency' | 'Error' | 'Info' | 'Notice' | 'Warning'[]
* **name**: string
* **streams**: 'Microsoft-Syslog'[]

## WindowsEventLogDataSource
### Properties
* **name**: string
* **streams**: 'Microsoft-Event' | 'Microsoft-WindowsEvent'[]
* **xPathQueries**: string[]

## DataCollectionRuleDestinations
### Properties
* **azureMonitorMetrics**: [DestinationsSpecAzureMonitorMetrics](#destinationsspecazuremonitormetrics)
* **logAnalytics**: [LogAnalyticsDestination](#loganalyticsdestination)[]

## DestinationsSpecAzureMonitorMetrics
### Properties
* **name**: string

## LogAnalyticsDestination
### Properties
* **name**: string
* **workspaceId**: string (ReadOnly)
* **workspaceResourceId**: string

## DataCollectionRuleResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

