# Microsoft.Insights @ 2021-04-01

## Resource Microsoft.Insights/dataCollectionEndpoints@2021-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource entity tag (ETag).
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Linux' | 'Windows' | string: The kind of the resource.
* **location**: string (Required): The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataCollectionEndpointResourceProperties](#datacollectionendpointresourceproperties): Resource properties.
* **systemData**: [DataCollectionEndpointResourceSystemData](#datacollectionendpointresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DataCollectionEndpointResourceTags](#datacollectionendpointresourcetags): Resource tags.
* **type**: 'Microsoft.Insights/dataCollectionEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/dataCollectionRuleAssociations@2021-04-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource entity tag (ETag).
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataCollectionRuleAssociationProxyOnlyResourceProperties](#datacollectionruleassociationproxyonlyresourceproperties): Resource properties.
* **systemData**: [DataCollectionRuleAssociationProxyOnlyResourceSystemData](#datacollectionruleassociationproxyonlyresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Insights/dataCollectionRuleAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/dataCollectionRules@2021-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource entity tag (ETag).
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Linux' | 'Windows' | string: The kind of the resource.
* **location**: string (Required): The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataCollectionRuleResourceProperties](#datacollectionruleresourceproperties): Resource properties.
* **systemData**: [DataCollectionRuleResourceSystemData](#datacollectionruleresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DataCollectionRuleResourceTags](#datacollectionruleresourcetags): Resource tags.
* **type**: 'Microsoft.Insights/dataCollectionRules' (ReadOnly, DeployTimeConstant): The resource type

## DataCollectionEndpointConfigurationAccess
### Properties
* **endpoint**: string (ReadOnly): The endpoint. This property is READ-ONLY.

## DataCollectionEndpointLogsIngestion
### Properties
* **endpoint**: string (ReadOnly): The endpoint. This property is READ-ONLY.

## DataCollectionEndpointNetworkAcls
### Properties
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: The configuration to set whether network access from public internet to the endpoints are allowed.

## DataCollectionEndpointResourceProperties
### Properties
* **configurationAccess**: [DataCollectionEndpointConfigurationAccess](#datacollectionendpointconfigurationaccess): The endpoint used by agents to access their configuration.
* **description**: string: Description of the data collection endpoint.
* **immutableId**: string: The immutable ID of this data collection endpoint resource. This property is READ-ONLY.
* **logsIngestion**: [DataCollectionEndpointLogsIngestion](#datacollectionendpointlogsingestion): The endpoint used by clients to ingest logs.
* **networkAcls**: [DataCollectionEndpointNetworkAcls](#datacollectionendpointnetworkacls): Network access control rules for the endpoints.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The resource provisioning state. This property is READ-ONLY.

## DataCollectionEndpointResourceSystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## DataCollectionEndpointResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataCollectionRuleAssociationProxyOnlyResourceProperties
### Properties
* **dataCollectionEndpointId**: string: The resource ID of the data collection endpoint that is to be associated.
* **dataCollectionRuleId**: string: The resource ID of the data collection rule that is to be associated.
* **description**: string: Description of the association.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The resource provisioning state.

## DataCollectionRuleAssociationProxyOnlyResourceSystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## DataCollectionRuleDataSources
### Properties
* **extensions**: [ExtensionDataSource](#extensiondatasource)[]: The list of Azure VM extension data source configurations.
* **performanceCounters**: [PerfCounterDataSource](#perfcounterdatasource)[]: The list of performance counter data source configurations.
* **syslog**: [SyslogDataSource](#syslogdatasource)[]: The list of Syslog data source configurations.
* **windowsEventLogs**: [WindowsEventLogDataSource](#windowseventlogdatasource)[]: The list of Windows Event Log data source configurations.

## DataCollectionRuleDestinations
### Properties
* **azureMonitorMetrics**: [DestinationsSpecAzureMonitorMetrics](#destinationsspecazuremonitormetrics): Azure Monitor Metrics destination.
* **logAnalytics**: [LogAnalyticsDestination](#loganalyticsdestination)[]: List of Log Analytics destinations.

## DataCollectionRuleResourceProperties
### Properties
* **dataFlows**: [DataFlow](#dataflow)[]: The specification of data flows.
* **dataSources**: [DataCollectionRuleDataSources](#datacollectionruledatasources): The specification of data sources. 
This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint.
* **description**: string: Description of the data collection rule.
* **destinations**: [DataCollectionRuleDestinations](#datacollectionruledestinations): The specification of destinations.
* **immutableId**: string (ReadOnly): The immutable ID of this data collection rule. This property is READ-ONLY.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The resource provisioning state.

## DataCollectionRuleResourceSystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## DataCollectionRuleResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataFlow
### Properties
* **destinations**: string[]: List of destinations for this data flow.
* **streams**: ('Microsoft-Event' | 'Microsoft-InsightsMetrics' | 'Microsoft-Perf' | 'Microsoft-Syslog' | 'Microsoft-WindowsEvent' | string)[]: List of streams for this data flow.

## DestinationsSpecAzureMonitorMetrics
### Properties
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.

## ExtensionDataSource
### Properties
* **extensionName**: string (Required): The name of the VM extension.
* **extensionSettings**: any: The extension settings. The format is specific for particular extension.
* **inputDataSources**: string[]: The list of data sources this extension needs data from.
* **name**: string: A friendly name for the data source. 
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: ('Microsoft-Event' | 'Microsoft-InsightsMetrics' | 'Microsoft-Perf' | 'Microsoft-Syslog' | 'Microsoft-WindowsEvent' | string)[]: List of streams that this data source will be sent to.
A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.

## LogAnalyticsDestination
### Properties
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.
* **workspaceId**: string (ReadOnly): The Customer ID of the Log Analytics workspace.
* **workspaceResourceId**: string: The resource ID of the Log Analytics workspace.

## PerfCounterDataSource
### Properties
* **counterSpecifiers**: string[]: A list of specifier names of the performance counters you want to collect.
Use a wildcard (*) to collect a counter for all instances.
To get a list of performance counters on Windows, run the command 'typeperf'.
* **name**: string: A friendly name for the data source. 
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **samplingFrequencyInSeconds**: int: The number of seconds between consecutive counter measurements (samples).
* **streams**: ('Microsoft-InsightsMetrics' | 'Microsoft-Perf' | string)[]: List of streams that this data source will be sent to.
A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.

## SyslogDataSource
### Properties
* **facilityNames**: ('*' | 'alert' | 'audit' | 'auth' | 'authpriv' | 'clock' | 'cron' | 'daemon' | 'ftp' | 'kern' | 'local0' | 'local1' | 'local2' | 'local3' | 'local4' | 'local5' | 'local6' | 'local7' | 'lpr' | 'mail' | 'mark' | 'news' | 'nopri' | 'ntp' | 'syslog' | 'user' | 'uucp' | string)[]: The list of facility names.
* **logLevels**: ('*' | 'Alert' | 'Critical' | 'Debug' | 'Emergency' | 'Error' | 'Info' | 'Notice' | 'Warning' | string)[]: The log levels to collect.
* **name**: string: A friendly name for the data source. 
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: ('Microsoft-Syslog' | string)[]: List of streams that this data source will be sent to.
A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.

## WindowsEventLogDataSource
### Properties
* **name**: string: A friendly name for the data source. 
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: ('Microsoft-Event' | 'Microsoft-WindowsEvent' | string)[]: List of streams that this data source will be sent to.
A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
* **xPathQueries**: string[]: A list of Windows Event Log queries in XPATH format.

