# Microsoft.Insights @ 2019-11-01-preview

## Resource Microsoft.Insights/dataCollectionRuleAssociations@2019-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataCollectionRuleAssociationProxyOnlyResourceProperties](#datacollectionruleassociationproxyonlyresourceproperties) (Required)
* **type**: 'Microsoft.Insights/dataCollectionRuleAssociations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/dataCollectionRules@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataCollectionRuleResourceProperties](#datacollectionruleresourceproperties) (Required)
* **tags**: [DataCollectionRuleResourceTags](#datacollectionruleresourcetags)
* **type**: 'Microsoft.Insights/dataCollectionRules' (ReadOnly, DeployTimeConstant)

## DataCollectionRuleAssociationProxyOnlyResourceProperties
### Properties
* **dataCollectionRuleId**: string (Required)
* **description**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## DataCollectionRuleResourceProperties
### Properties
* **dataFlows**: [DataFlow](#dataflow)[] (Required)
* **dataSources**: [DataCollectionRuleDataSources](#datacollectionruledatasources)
* **description**: string
* **destinations**: [DataCollectionRuleDestinations](#datacollectionruledestinations) (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## DataFlow
### Properties
* **destinations**: string[] (Required)
* **streams**: 'Microsoft-AntiMalwareStatus' | 'Microsoft-Auditd' | 'Microsoft-CISCOASA' | 'Microsoft-CommonSecurityLog' | 'Microsoft-ComputerGroup' | 'Microsoft-Event' | 'Microsoft-FirewallLog' | 'Microsoft-HealthStateChange' | 'Microsoft-Heartbeat' | 'Microsoft-InsightsMetrics' | 'Microsoft-OperationLog' | 'Microsoft-Perf' | 'Microsoft-ProcessInvestigator' | 'Microsoft-ProtectionStatus' | 'Microsoft-RomeDetectionEvent' | 'Microsoft-SecurityBaseline' | 'Microsoft-SecurityBaselineSummary' | 'Microsoft-SecurityEvent' | 'Microsoft-Syslog' | 'Microsoft-WindowsEvent'[] (Required)

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
* **name**: string (Required)
* **streams**: 'Microsoft-AntiMalwareStatus' | 'Microsoft-Auditd' | 'Microsoft-CISCOASA' | 'Microsoft-CommonSecurityLog' | 'Microsoft-ComputerGroup' | 'Microsoft-Event' | 'Microsoft-FirewallLog' | 'Microsoft-HealthStateChange' | 'Microsoft-Heartbeat' | 'Microsoft-InsightsMetrics' | 'Microsoft-OperationLog' | 'Microsoft-Perf' | 'Microsoft-ProcessInvestigator' | 'Microsoft-ProtectionStatus' | 'Microsoft-RomeDetectionEvent' | 'Microsoft-SecurityBaseline' | 'Microsoft-SecurityBaselineSummary' | 'Microsoft-SecurityEvent' | 'Microsoft-Syslog' | 'Microsoft-WindowsEvent'[] (Required)

## PerfCounterDataSource
### Properties
* **counterSpecifiers**: string[] (Required)
* **name**: string (Required)
* **samplingFrequencyInSeconds**: int (Required)
* **scheduledTransferPeriod**: 'PT15M' | 'PT1M' | 'PT30M' | 'PT5M' | 'PT60M' (Required)
* **streams**: 'Microsoft-InsightsMetrics' | 'Microsoft-Perf'[] (Required)

## SyslogDataSource
### Properties
* **facilityNames**: 'UUCP' | 'auth' | 'authpriv' | 'cron' | 'daemon' | 'kern' | 'local0' | 'local1' | 'local2' | 'local3' | 'local4' | 'local5' | 'local6' | 'local7' | 'lpr' | 'mail' | 'mark' | 'news' | 'syslog' | 'user'[] (Required)
* **logLevels**: 'Alert' | 'Critical' | 'Debug' | 'Emergency' | 'Error' | 'Info' | 'Notice' | 'Warning'[]
* **name**: string (Required)
* **streams**: 'Microsoft-Syslog'[] (Required)

## WindowsEventLogDataSource
### Properties
* **name**: string (Required)
* **scheduledTransferPeriod**: 'PT15M' | 'PT1M' | 'PT30M' | 'PT5M' | 'PT60M' (Required)
* **streams**: 'Microsoft-Event' | 'Microsoft-WindowsEvent'[] (Required)
* **xPathQueries**: string[] (Required)

## DataCollectionRuleDestinations
### Properties
* **azureMonitorMetrics**: [DestinationsSpecAzureMonitorMetrics](#destinationsspecazuremonitormetrics)
* **logAnalytics**: [LogAnalyticsDestination](#loganalyticsdestination)[]

## DestinationsSpecAzureMonitorMetrics
### Properties
* **name**: string (Required)

## LogAnalyticsDestination
### Properties
* **name**: string (Required)
* **workspaceResourceId**: string (Required)

## DataCollectionRuleResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

