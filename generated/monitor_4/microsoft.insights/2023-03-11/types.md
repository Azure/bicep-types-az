# Microsoft.Insights @ 2023-03-11

## Resource Microsoft.Insights/dataCollectionEndpoints@2023-03-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-11' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource entity tag (ETag).
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DataCollectionEndpointResourceIdentity](#datacollectionendpointresourceidentity): Managed service identity of the resource.
* **kind**: 'Linux' | 'Windows' | string: The kind of the resource.
* **location**: string (Required): The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataCollectionEndpointResourceProperties](#datacollectionendpointresourceproperties): Resource properties.
* **systemData**: [DataCollectionEndpointResourceSystemData](#datacollectionendpointresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DataCollectionEndpointResourceTags](#datacollectionendpointresourcetags): Resource tags.
* **type**: 'Microsoft.Insights/dataCollectionEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/dataCollectionRuleAssociations@2023-03-11
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-03-11' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource entity tag (ETag).
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataCollectionRuleAssociationProxyOnlyResourceProperties](#datacollectionruleassociationproxyonlyresourceproperties): Resource properties.
* **systemData**: [DataCollectionRuleAssociationProxyOnlyResourceSystemData](#datacollectionruleassociationproxyonlyresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Insights/dataCollectionRuleAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/dataCollectionRules@2023-03-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-11' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource entity tag (ETag).
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [DataCollectionRuleResourceIdentity](#datacollectionruleresourceidentity): Managed service identity of the resource.
* **kind**: 'Linux' | 'Windows' | string: The kind of the resource.
* **location**: string (Required): The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataCollectionRuleResourceProperties](#datacollectionruleresourceproperties): Resource properties.
* **systemData**: [DataCollectionRuleResourceSystemData](#datacollectionruleresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DataCollectionRuleResourceTags](#datacollectionruleresourcetags): Resource tags.
* **type**: 'Microsoft.Insights/dataCollectionRules' (ReadOnly, DeployTimeConstant): The resource type

## AdxDestination
### Properties
* **databaseName**: string: The name of the database to which data will be ingested.
* **ingestionUri**: string (ReadOnly): The ingestion uri of the Adx resource.
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.
* **resourceId**: string: The ARM resource id of the Adx resource.

## AgentSetting
### Properties
* **name**: 'MaxDiskQuotaInMB' | 'UseTimeReceivedForForwardedEvents' | string: The name of the setting. 
Must be part of the list of supported settings
* **value**: string: The value of the setting

## ColumnDefinition
### Properties
* **name**: string: The name of the column.
* **type**: 'boolean' | 'datetime' | 'dynamic' | 'int' | 'long' | 'real' | 'string' | string: The type of the column data.

## DataCollectionEndpointConfigurationAccess
### Properties
* **endpoint**: string (ReadOnly): The endpoint. This property is READ-ONLY.

## DataCollectionEndpointFailoverConfiguration
### Properties
* **activeLocation**: string: Active location where data flow will occur.
* **locations**: [LocationSpec](#locationspec)[]: Locations that are configured for failover.

## DataCollectionEndpointLogsIngestion
### Properties
* **endpoint**: string (ReadOnly): The endpoint. This property is READ-ONLY.

## DataCollectionEndpointMetadata
### Properties
* **provisionedBy**: string (ReadOnly): Azure offering managing this resource on-behalf-of customer.
* **provisionedByImmutableId**: string (ReadOnly): Immutable Id of azure offering managing this resource on-behalf-of customer.
* **provisionedByResourceId**: string (ReadOnly): Resource Id of azure offering managing this resource on-behalf-of customer.

## DataCollectionEndpointMetricsIngestion
### Properties
* **endpoint**: string (ReadOnly): The endpoint. This property is READ-ONLY.

## DataCollectionEndpointNetworkAcls
### Properties
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: The configuration to set whether network access from public internet to the endpoints are allowed.

## DataCollectionEndpointResourceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## DataCollectionEndpointResourceProperties
### Properties
* **configurationAccess**: [DataCollectionEndpointConfigurationAccess](#datacollectionendpointconfigurationaccess): The endpoint used by clients to access their configuration.
* **description**: string: Description of the data collection endpoint.
* **failoverConfiguration**: [DataCollectionEndpointFailoverConfiguration](#datacollectionendpointfailoverconfiguration) (ReadOnly): Failover configuration on this endpoint. This property is READ-ONLY.
* **immutableId**: string: The immutable ID of this data collection endpoint resource. This property is READ-ONLY.
* **logsIngestion**: [DataCollectionEndpointLogsIngestion](#datacollectionendpointlogsingestion): The endpoint used by clients to ingest logs.
* **metadata**: [DataCollectionEndpointMetadata](#datacollectionendpointmetadata) (ReadOnly): Metadata for the resource. This property is READ-ONLY.
* **metricsIngestion**: [DataCollectionEndpointMetricsIngestion](#datacollectionendpointmetricsingestion): The endpoint used by clients to ingest metrics.
* **networkAcls**: [DataCollectionEndpointNetworkAcls](#datacollectionendpointnetworkacls): Network access control rules for the endpoints.
* **privateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly): List of Azure Monitor Private Link Scope Resources to which this data collection endpoint resource is associated. This property is READ-ONLY.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The resource provisioning state. This property is READ-ONLY.

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

## DataCollectionRuleAgentSettings
### Properties
* **logs**: [AgentSetting](#agentsetting)[]: All the settings that are applicable to the logs agent (AMA)

## DataCollectionRuleAssociationMetadata
### Properties
* **provisionedBy**: string (ReadOnly): Azure offering managing this resource on-behalf-of customer.
* **provisionedByImmutableId**: string (ReadOnly): Immutable Id of azure offering managing this resource on-behalf-of customer.
* **provisionedByResourceId**: string (ReadOnly): Resource Id of azure offering managing this resource on-behalf-of customer.

## DataCollectionRuleAssociationProxyOnlyResourceProperties
### Properties
* **dataCollectionEndpointId**: string: The resource ID of the data collection endpoint that is to be associated.
* **dataCollectionRuleId**: string: The resource ID of the data collection rule that is to be associated.
* **description**: string: Description of the association.
* **metadata**: [DataCollectionRuleAssociationMetadata](#datacollectionruleassociationmetadata) (ReadOnly): Metadata about the resource
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The resource provisioning state.

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
* **dataImports**: [DataSourcesSpecDataImports](#datasourcesspecdataimports): Specifications of pull based data sources
* **extensions**: [ExtensionDataSource](#extensiondatasource)[]: The list of Azure VM extension data source configurations.
* **iisLogs**: [IisLogsDataSource](#iislogsdatasource)[]: The list of IIS logs source configurations.
* **logFiles**: [LogFilesDataSource](#logfilesdatasource)[]: The list of Log files source configurations.
* **performanceCounters**: [PerfCounterDataSource](#perfcounterdatasource)[]: The list of performance counter data source configurations.
* **platformTelemetry**: [PlatformTelemetryDataSource](#platformtelemetrydatasource)[]: The list of platform telemetry configurations
* **prometheusForwarder**: [PrometheusForwarderDataSource](#prometheusforwarderdatasource)[]: The list of Prometheus forwarder data source configurations.
* **syslog**: [SyslogDataSource](#syslogdatasource)[]: The list of Syslog data source configurations.
* **windowsEventLogs**: [WindowsEventLogDataSource](#windowseventlogdatasource)[]: The list of Windows Event Log data source configurations.
* **windowsFirewallLogs**: [WindowsFirewallLogsDataSource](#windowsfirewalllogsdatasource)[]: The list of Windows Firewall logs source configurations.

## DataCollectionRuleDestinations
### Properties
* **azureDataExplorer**: [AdxDestination](#adxdestination)[]: List of Azure Data Explorer destinations.
* **azureMonitorMetrics**: [DestinationsSpecAzureMonitorMetrics](#destinationsspecazuremonitormetrics): Azure Monitor Metrics destination.
* **eventHubs**: [EventHubDestination](#eventhubdestination)[]: List of Event Hubs destinations.
* **eventHubsDirect**: [EventHubDirectDestination](#eventhubdirectdestination)[]: List of Event Hubs Direct destinations.
* **logAnalytics**: [LogAnalyticsDestination](#loganalyticsdestination)[]: List of Log Analytics destinations.
* **microsoftFabric**: [MicrosoftFabricDestination](#microsoftfabricdestination)[]: List of Microsoft Fabric destinations.
* **monitoringAccounts**: [MonitoringAccountDestination](#monitoringaccountdestination)[]: List of monitoring account destinations.
* **storageAccounts**: [StorageBlobDestination](#storageblobdestination)[]: List of storage accounts destinations.
* **storageBlobsDirect**: [StorageBlobDestination](#storageblobdestination)[]: List of Storage Blob Direct destinations. To be used only for sending data directly to store from the agent.
* **storageTablesDirect**: [StorageTableDestination](#storagetabledestination)[]: List of Storage Table Direct destinations.

## DataCollectionRuleEndpoints
### Properties
* **logsIngestion**: string (ReadOnly): The ingestion endpoint for logs
* **metricsIngestion**: string (ReadOnly): The ingestion endpoint for metrics

## DataCollectionRuleMetadata
### Properties
* **provisionedBy**: string (ReadOnly): Azure offering managing this resource on-behalf-of customer.
* **provisionedByImmutableId**: string (ReadOnly): Immutable Id of azure offering managing this resource on-behalf-of customer.
* **provisionedByResourceId**: string (ReadOnly): Resource Id of azure offering managing this resource on-behalf-of customer.

## DataCollectionRuleReferences
### Properties
* **enrichmentData**: [ReferencesSpecEnrichmentData](#referencesspecenrichmentdata): All the enrichment data sources referenced in data flows

## DataCollectionRuleResourceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## DataCollectionRuleResourceProperties
### Properties
* **agentSettings**: [DataCollectionRuleAgentSettings](#datacollectionruleagentsettings): Agent settings used to modify agent behavior on a given host
* **dataCollectionEndpointId**: string: The resource ID of the data collection endpoint that this rule can be used with.
* **dataFlows**: [DataFlow](#dataflow)[]: The specification of data flows.
* **dataSources**: [DataCollectionRuleDataSources](#datacollectionruledatasources): The specification of data sources. 
This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint.
* **description**: string: Description of the data collection rule.
* **destinations**: [DataCollectionRuleDestinations](#datacollectionruledestinations): The specification of destinations.
* **endpoints**: [DataCollectionRuleEndpoints](#datacollectionruleendpoints) (ReadOnly): Defines the ingestion endpoints to send data to via this rule.
* **immutableId**: string (ReadOnly): The immutable ID of this data collection rule. This property is READ-ONLY.
* **metadata**: [DataCollectionRuleMetadata](#datacollectionrulemetadata) (ReadOnly): Metadata about the resource
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The resource provisioning state.
* **references**: [DataCollectionRuleReferences](#datacollectionrulereferences): Defines all the references that may be used in other sections of the DCR
* **streamDeclarations**: [DataCollectionRuleStreamDeclarations](#datacollectionrulestreamdeclarations): Declaration of custom streams used in this rule.

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

## DataCollectionRuleStreamDeclarations
### Properties
### Additional Properties
* **Additional Properties Type**: [StreamDeclaration](#streamdeclaration)

## DataFlow
### Properties
* **builtInTransform**: string: The builtIn transform to transform stream data
* **captureOverflow**: bool: Flag to enable overflow column in LA destinations
* **destinations**: string[]: List of destinations for this data flow.
* **outputStream**: string: The output stream of the transform. Only required if the transform changes data to a different stream.
* **streams**: ('Microsoft-Event' | 'Microsoft-InsightsMetrics' | 'Microsoft-Perf' | 'Microsoft-Syslog' | 'Microsoft-WindowsEvent' | string)[]: List of streams for this data flow.
* **transformKql**: string: The KQL query to transform stream data.

## DataImportSourcesEventHub
### Properties
* **consumerGroup**: string: Event Hub consumer group name
* **name**: string: A friendly name for the data source. 
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **stream**: string: The stream to collect from EventHub

## DataSourcesSpecDataImports
### Properties
* **eventHub**: [DataImportSourcesEventHub](#dataimportsourceseventhub): Definition of Event Hub configuration.

## DestinationsSpecAzureMonitorMetrics
### Properties
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.

## EventHubDestination
### Properties
* **eventHubResourceId**: string: The resource ID of the event hub.
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.

## EventHubDirectDestination
### Properties
* **eventHubResourceId**: string: The resource ID of the event hub.
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

## IisLogsDataSource
### Properties
* **logDirectories**: string[]: Absolute paths file location
* **name**: string: A friendly name for the data source.
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: string[] (Required): IIS streams
* **transformKql**: string: The KQL query to transform the data source.

## LocationSpec
### Properties
* **location**: string: Name of location.
* **provisioningStatus**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The resource provisioning state in this location.

## LogAnalyticsDestination
### Properties
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.
* **workspaceId**: string (ReadOnly): The Customer ID of the Log Analytics workspace.
* **workspaceResourceId**: string: The resource ID of the Log Analytics workspace.

## LogFilesDataSource
### Properties
* **filePatterns**: string[] (Required): File Patterns where the log files are located
* **format**: 'json' | 'text' | string (Required): The data format of the log files
* **name**: string: A friendly name for the data source.
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **settings**: [LogFilesDataSourceSettings](#logfilesdatasourcesettings): The log files specific settings.
* **streams**: string[] (Required): List of streams that this data source will be sent to.
A stream indicates what schema will be used for this data source
* **transformKql**: string: The KQL query to transform the data source.

## LogFilesDataSourceSettings
### Properties
* **text**: [LogFileSettingsText](#logfilesettingstext): Text settings

## LogFileSettingsText
### Properties
* **recordStartTimestampFormat**: 'ISO 8601' | 'M/D/YYYY HH:MM:SS AM/PM' | 'MMM d hh:mm:ss' | 'Mon DD, YYYY HH:MM:SS' | 'YYYY-MM-DD HH:MM:SS' | 'dd/MMM/yyyy:HH:mm:ss zzz' | 'ddMMyy HH:mm:ss' | 'yyMMdd HH:mm:ss' | 'yyyy-MM-ddTHH:mm:ssK' | string (Required): One of the supported timestamp formats

## MicrosoftFabricDestination
### Properties
* **artifactId**: string: The artifact id of the Microsoft Fabric resource.
* **databaseName**: string: The name of the database to which data will be ingested.
* **ingestionUri**: string: The ingestion uri of the Microsoft Fabric resource.
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.
* **tenantId**: string: The tenant id of the Microsoft Fabric resource.

## MonitoringAccountDestination
### Properties
* **accountId**: string (ReadOnly): The immutable ID  of the account.
* **accountResourceId**: string: The resource ID of the monitoring account.
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.

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
* **transformKql**: string: The KQL query to transform the data source.

## PlatformTelemetryDataSource
### Properties
* **name**: string: A friendly name for the data source.
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: string[] (Required): List of platform telemetry streams to collect

## PrivateLinkScopedResource
### Properties
* **resourceId**: string: The resourceId of the Azure Monitor Private Link Scope Scoped Resource through which this DCE is associated with a Azure Monitor Private Link Scope.
* **scopeId**: string: The immutableId of the Azure Monitor Private Link Scope Resource to which the association is.

## PrometheusForwarderDataSource
### Properties
* **labelIncludeFilter**: [PrometheusForwarderDataSourceLabelIncludeFilter](#prometheusforwarderdatasourcelabelincludefilter): The list of label inclusion filters in the form of label "name-value" pairs.
Currently only one label is supported: 'microsoft_metrics_include_label'.
Label values are matched case-insensitively.
* **name**: string: A friendly name for the data source.
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: ('Microsoft-PrometheusMetrics' | string)[]: List of streams that this data source will be sent to.

## PrometheusForwarderDataSourceLabelIncludeFilter
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ReferencesSpecEnrichmentData
### Properties
* **storageBlobs**: [StorageBlob](#storageblob)[]: All the storage blobs used as enrichment data sources

## StorageBlob
### Properties
* **blobUrl**: string: Url of the storage blob
* **lookupType**: 'Cidr' | 'String' | string: The type of lookup to perform on the blob
* **name**: string: The name of the enrichment data source used as an alias when referencing this data source in data flows
* **resourceId**: string: Resource Id of the storage account that hosts the blob

## StorageBlobDestination
### Properties
* **containerName**: string: The container name of the Storage Blob.
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.
* **storageAccountResourceId**: string: The resource ID of the storage account.

## StorageTableDestination
### Properties
* **name**: string: A friendly name for the destination. 
This name should be unique across all destinations (regardless of type) within the data collection rule.
* **storageAccountResourceId**: string: The resource ID of the storage account.
* **tableName**: string: The name of the Storage Table.

## StreamDeclaration
### Properties
* **columns**: [ColumnDefinition](#columndefinition)[]: List of columns used by data in this stream.

## SyslogDataSource
### Properties
* **facilityNames**: ('*' | 'alert' | 'audit' | 'auth' | 'authpriv' | 'clock' | 'cron' | 'daemon' | 'ftp' | 'kern' | 'local0' | 'local1' | 'local2' | 'local3' | 'local4' | 'local5' | 'local6' | 'local7' | 'lpr' | 'mail' | 'mark' | 'news' | 'nopri' | 'ntp' | 'syslog' | 'user' | 'uucp' | string)[]: The list of facility names.
* **logLevels**: ('*' | 'Alert' | 'Critical' | 'Debug' | 'Emergency' | 'Error' | 'Info' | 'Notice' | 'Warning' | string)[]: The log levels to collect.
* **name**: string: A friendly name for the data source.
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: ('Microsoft-Syslog' | string)[]: List of streams that this data source will be sent to.
A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
* **transformKql**: string: The KQL query to transform the data source.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WindowsEventLogDataSource
### Properties
* **name**: string: A friendly name for the data source.
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: ('Microsoft-Event' | 'Microsoft-WindowsEvent' | string)[]: List of streams that this data source will be sent to.
A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
* **transformKql**: string: The KQL query to transform the data source.
* **xPathQueries**: string[]: A list of Windows Event Log queries in XPATH format.

## WindowsFirewallLogsDataSource
### Properties
* **name**: string: A friendly name for the data source.
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **profileFilter**: ('Domain' | 'Private' | 'Public' | string)[]: Firewall logs profile filter
* **streams**: string[] (Required): Firewall logs streams

