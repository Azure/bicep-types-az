# Microsoft.Insights @ 2022-06-01

## Resource Microsoft.Insights/actionGroups@2022-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionGroup](#actiongroup): The action groups properties of the resource.
* **tags**: [AzureResourceTags](#azureresourcetags): Resource tags
* **type**: 'Microsoft.Insights/actionGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/dataCollectionEndpoints@2022-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
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

## Resource Microsoft.Insights/dataCollectionRuleAssociations@2022-06-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource entity tag (ETag).
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataCollectionRuleAssociationProxyOnlyResourceProperties](#datacollectionruleassociationproxyonlyresourceproperties): Resource properties.
* **systemData**: [DataCollectionRuleAssociationProxyOnlyResourceSystemData](#datacollectionruleassociationproxyonlyresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Insights/dataCollectionRuleAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/dataCollectionRules@2022-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
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

## ActionGroup
### Properties
* **armRoleReceivers**: [ArmRoleReceiver](#armrolereceiver)[]: The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported.
* **automationRunbookReceivers**: [AutomationRunbookReceiver](#automationrunbookreceiver)[]: The list of AutomationRunbook receivers that are part of this action group.
* **azureAppPushReceivers**: [AzureAppPushReceiver](#azureapppushreceiver)[]: The list of AzureAppPush receivers that are part of this action group.
* **azureFunctionReceivers**: [AzureFunctionReceiver](#azurefunctionreceiver)[]: The list of azure function receivers that are part of this action group.
* **emailReceivers**: [EmailReceiver](#emailreceiver)[]: The list of email receivers that are part of this action group.
* **enabled**: bool (Required): Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
* **eventHubReceivers**: [EventHubReceiver](#eventhubreceiver)[]: The list of event hub receivers that are part of this action group.
* **groupShortName**: string {maxLength: 12} (Required): The short name of the action group. This will be used in SMS messages.
* **itsmReceivers**: [ItsmReceiver](#itsmreceiver)[]: The list of ITSM receivers that are part of this action group.
* **logicAppReceivers**: [LogicAppReceiver](#logicappreceiver)[]: The list of logic app receivers that are part of this action group.
* **smsReceivers**: [SmsReceiver](#smsreceiver)[]: The list of SMS receivers that are part of this action group.
* **voiceReceivers**: [VoiceReceiver](#voicereceiver)[]: The list of voice receivers that are part of this action group.
* **webhookReceivers**: [WebhookReceiver](#webhookreceiver)[]: The list of webhook receivers that are part of this action group.

## ArmRoleReceiver
### Properties
* **name**: string (Required): The name of the arm role receiver. Names must be unique across all receivers within an action group.
* **roleId**: string (Required): The arm role id.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

## AutomationRunbookReceiver
### Properties
* **automationAccountId**: string (Required): The Azure automation account Id which holds this runbook and authenticate to Azure resource.
* **isGlobalRunbook**: bool (Required): Indicates whether this instance is global runbook.
* **name**: string: Indicates name of the webhook.
* **runbookName**: string (Required): The name for this runbook.
* **serviceUri**: string: The URI where webhooks should be sent.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.
* **webhookResourceId**: string (Required): The resource id for webhook linked to this runbook.

## AzureAppPushReceiver
### Properties
* **emailAddress**: string (Required): The email address registered for the Azure mobile app.
* **name**: string (Required): The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group.

## AzureFunctionReceiver
### Properties
* **functionAppResourceId**: string (Required): The azure resource id of the function app.
* **functionName**: string (Required): The function name in the function app.
* **httpTriggerUrl**: string (Required): The http trigger url where http request sent to.
* **name**: string (Required): The name of the azure function receiver. Names must be unique across all receivers within an action group.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

## AzureResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## DataCollectionRuleAssociationMetadata
### Properties
* **provisionedBy**: string (ReadOnly): Azure offering managing this resource on-behalf-of customer.
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
* **azureMonitorMetrics**: [DestinationsSpecAzureMonitorMetrics](#destinationsspecazuremonitormetrics): Azure Monitor Metrics destination.
* **eventHubs**: [EventHubDestination](#eventhubdestination)[]: List of Event Hubs destinations.
* **eventHubsDirect**: [EventHubDirectDestination](#eventhubdirectdestination)[]: List of Event Hubs Direct destinations.
* **logAnalytics**: [LogAnalyticsDestination](#loganalyticsdestination)[]: List of Log Analytics destinations.
* **monitoringAccounts**: [MonitoringAccountDestination](#monitoringaccountdestination)[]: List of monitoring account destinations.
* **storageAccounts**: [StorageBlobDestination](#storageblobdestination)[]: List of storage accounts destinations.
* **storageBlobsDirect**: [StorageBlobDestination](#storageblobdestination)[]: List of Storage Blob Direct destinations. To be used only for sending data directly to store from the agent.
* **storageTablesDirect**: [StorageTableDestination](#storagetabledestination)[]: List of Storage Table Direct destinations.

## DataCollectionRuleMetadata
### Properties
* **provisionedBy**: string (ReadOnly): Azure offering managing this resource on-behalf-of customer.
* **provisionedByResourceId**: string (ReadOnly): Resource Id of azure offering managing this resource on-behalf-of customer.

## DataCollectionRuleResourceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## DataCollectionRuleResourceProperties
### Properties
* **dataCollectionEndpointId**: string: The resource ID of the data collection endpoint that this rule can be used with.
* **dataFlows**: [DataFlow](#dataflow)[]: The specification of data flows.
* **dataSources**: [DataCollectionRuleDataSources](#datacollectionruledatasources): The specification of data sources. 
This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint.
* **description**: string: Description of the data collection rule.
* **destinations**: [DataCollectionRuleDestinations](#datacollectionruledestinations): The specification of destinations.
* **immutableId**: string (ReadOnly): The immutable ID of this data collection rule. This property is READ-ONLY.
* **metadata**: [DataCollectionRuleMetadata](#datacollectionrulemetadata) (ReadOnly): Metadata about the resource
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The resource provisioning state.
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

## EmailReceiver
### Properties
* **emailAddress**: string (Required): The email address of this receiver.
* **name**: string (Required): The name of the email receiver. Names must be unique across all receivers within an action group.
* **status**: 'Disabled' | 'Enabled' | 'NotSpecified' (ReadOnly): The receiver status of the e-mail.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

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

## EventHubReceiver
### Properties
* **eventHubName**: string (Required): The name of the specific Event Hub queue
* **eventHubNameSpace**: string (Required): The Event Hub namespace
* **name**: string (Required): The name of the Event hub receiver. Names must be unique across all receivers within an action group.
* **subscriptionId**: string (Required): The Id for the subscription containing this event hub
* **tenantId**: string: The tenant Id for the subscription containing this event hub
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

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

## ItsmReceiver
### Properties
* **connectionId**: string (Required): Unique identification of ITSM connection among multiple defined in above workspace.
* **name**: string (Required): The name of the Itsm receiver. Names must be unique across all receivers within an action group.
* **region**: string (Required): Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
* **ticketConfiguration**: string (Required): JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
* **workspaceId**: string (Required): OMS LA instance identifier.

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
* **format**: 'text' | string (Required): The data format of the log files
* **name**: string: A friendly name for the data source. 
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **settings**: [LogFilesDataSourceSettings](#logfilesdatasourcesettings): The log files specific settings.
* **streams**: string[] (Required): List of streams that this data source will be sent to.
A stream indicates what schema will be used for this data source

## LogFilesDataSourceSettings
### Properties
* **text**: [LogFileSettingsText](#logfilesettingstext): Text settings

## LogFileSettingsText
### Properties
* **recordStartTimestampFormat**: 'ISO 8601' | 'M/D/YYYY HH:MM:SS AM/PM' | 'MMM d hh:mm:ss' | 'Mon DD, YYYY HH:MM:SS' | 'YYYY-MM-DD HH:MM:SS' | 'dd/MMM/yyyy:HH:mm:ss zzz' | 'ddMMyy HH:mm:ss' | 'yyMMdd HH:mm:ss' | 'yyyy-MM-ddTHH:mm:ssK' | string (Required): One of the supported timestamp formats

## LogicAppReceiver
### Properties
* **callbackUrl**: string (Required): The callback url where http request sent to.
* **name**: string (Required): The name of the logic app receiver. Names must be unique across all receivers within an action group.
* **resourceId**: string (Required): The azure resource id of the logic app receiver.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

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

## SmsReceiver
### Properties
* **countryCode**: string (Required): The country code of the SMS receiver.
* **name**: string (Required): The name of the SMS receiver. Names must be unique across all receivers within an action group.
* **phoneNumber**: string (Required): The phone number of the SMS receiver.
* **status**: 'Disabled' | 'Enabled' | 'NotSpecified' (ReadOnly): The status of the receiver.

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

## VoiceReceiver
### Properties
* **countryCode**: string (Required): The country code of the voice receiver.
* **name**: string (Required): The name of the voice receiver. Names must be unique across all receivers within an action group.
* **phoneNumber**: string (Required): The phone number of the voice receiver.

## WebhookReceiver
### Properties
* **identifierUri**: string: Indicates the identifier uri for aad auth.
* **name**: string (Required): The name of the webhook receiver. Names must be unique across all receivers within an action group.
* **objectId**: string: Indicates the webhook app object Id for aad auth.
* **serviceUri**: string (Required): The URI where webhooks should be sent.
* **tenantId**: string: Indicates the tenant id for aad auth.
* **useAadAuth**: bool: Indicates whether or not use AAD authentication.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

## WindowsEventLogDataSource
### Properties
* **name**: string: A friendly name for the data source. 
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: ('Microsoft-Event' | 'Microsoft-WindowsEvent' | string)[]: List of streams that this data source will be sent to.
A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
* **xPathQueries**: string[]: A list of Windows Event Log queries in XPATH format.

## WindowsFirewallLogsDataSource
### Properties
* **name**: string: A friendly name for the data source. 
This name should be unique across all data sources (regardless of type) within the data collection rule.
* **streams**: string[] (Required): Firewall logs streams

