# Microsoft.Monitor @ 2026-09-03-preview

## Resource Microsoft.Monitor/accounts@2026-09-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): "If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.")
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]+[^-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureMonitorWorkspace](#azuremonitorworkspace): Resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Monitor/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/issues@2026-09-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]+[^-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IssueProperties](#issueproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/issues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/metricsContainers@2026-09-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^default$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MetricsContainer](#metricscontainer): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/metricsContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/metricsContainers/namespaces@2026-09-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 260, pattern: "^(?:[A-Za-z0-9._-]|~[0-9A-Fa-f]{2})+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MetricNamespaceProperties](#metricnamespaceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/metricsContainers/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/metricsContainers/namespaces/metrics@2026-09-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 260, pattern: "^(?:[A-Za-z0-9._-]|~[0-9A-Fa-f]{2})+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MetricConfigurationProperties](#metricconfigurationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/metricsContainers/namespaces/metrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/traceContainers@2026-09-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [TraceContainer](#tracecontainer): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/traceContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/traceAssociations@2026-09-03-preview
* **Readable Scope(s)**: Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2026-09-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [TraceAssociation](#traceassociation): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/traceAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Function addInvestigationResult (Microsoft.Monitor/accounts/issues@2026-09-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2026-09-03-preview
* **Input**: [InvestigationResult](#investigationresult)
* **Output**: [InvestigationResult](#investigationresult)

## Function addOrUpdateAlerts (Microsoft.Monitor/accounts/issues@2026-09-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2026-09-03-preview
* **Input**: [RelatedAlerts](#relatedalerts)
* **Output**: [RelatedAlerts](#relatedalerts)

## Function addOrUpdateResources (Microsoft.Monitor/accounts/issues@2026-09-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2026-09-03-preview
* **Input**: [RelatedResources](#relatedresources)
* **Output**: [RelatedResources](#relatedresources)

## Function fetchBackgroundVisualization (Microsoft.Monitor/accounts/issues@2026-09-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2026-09-03-preview
* **Output**: [BackgroundVisualization](#backgroundvisualization)

## Function fetchInvestigationResult (Microsoft.Monitor/accounts/issues@2026-09-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2026-09-03-preview
* **Input**: [FetchInvestigationResultParameters](#fetchinvestigationresultparameters)
* **Output**: [InvestigationResult](#investigationresult)

## Function listAlerts (Microsoft.Monitor/accounts/issues@2026-09-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2026-09-03-preview
* **Input**: [ListParameter](#listparameter)
* **Output**: [PagedRelatedAlert](#pagedrelatedalert)

## Function listResources (Microsoft.Monitor/accounts/issues@2026-09-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2026-09-03-preview
* **Input**: [ListParameter](#listparameter)
* **Output**: [PagedRelatedResource](#pagedrelatedresource)

## Function setBackgroundVisualization (Microsoft.Monitor/accounts/issues@2026-09-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2026-09-03-preview
* **Input**: [BackgroundVisualization](#backgroundvisualization)
* **Output**: any

## AzureMonitorWorkspace
### Properties
* **accountId**: string (ReadOnly): The immutable Id of the Azure Monitor Workspace. This property is read-only.
* **actions**: [AzureMonitorWorkspaceActions](#azuremonitorworkspaceactions): Action configuration for the Azure Monitor Workspace.
* **defaultIngestionSettings**: [AzureMonitorWorkspaceDefaultIngestionSettings](#azuremonitorworkspacedefaultingestionsettings) (ReadOnly): The Data Collection Rule and Endpoint used for ingestion by default.
* **endpoints**: [AzureMonitorWorkspaceEndpoints](#azuremonitorworkspaceendpoints) (ReadOnly): Query endpoints for the Azure Monitor Workspace.
* **metrics**: [AzureMonitorWorkspaceMetrics](#azuremonitorworkspacemetrics): Properties related to the metrics container in the Azure Monitor Workspace
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the Azure Monitor Workspace. Set to Succeeded if everything is healthy.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Gets or sets allow or disallow public network access to Azure Monitor Workspace

## AzureMonitorWorkspaceActions
### Properties
* **defaultActionGroups**: [DefaultActionGroupResource](#defaultactiongroupresource)[]: The default action groups associated with the Azure Monitor Workspace.

## AzureMonitorWorkspaceDefaultIngestionSettings
### Properties
* **dataCollectionEndpointResourceId**: string (ReadOnly): The Azure resource Id of the default data collection endpoint for this Azure Monitor Workspace.
* **dataCollectionRuleImmutableId**: string (ReadOnly): The immutable Id of the default data collection rule for this Azure Monitor Workspace.
* **dataCollectionRuleResourceId**: string (ReadOnly): The Azure resource Id of the default data collection rule for this Azure Monitor Workspace.
* **ingestionEndpoints**: [IngestionEndpoints](#ingestionendpoints) (ReadOnly): The ingestion endpoints for this Azure Monitor Workspace.

## AzureMonitorWorkspaceEndpoints
### Properties
* **query**: string (ReadOnly): The query endpoint for the Azure Monitor Workspace.

## AzureMonitorWorkspaceMetrics
### Properties
* **enableAccessUsingResourcePermissions**: bool: Flag that indicates whether to enable access using resource permissions.
* **internalId**: string (ReadOnly): An internal identifier for the metrics container. Only to be used by the system.
* **prometheusQueryEndpoint**: string (ReadOnly): The Prometheus query endpoint for the Azure Monitor Workspace

## Background
### Properties
* **details**: [BackgroundDetails](#backgrounddetails)[]: The background details
* **text**: string: The background text
* **type**: string: The background type

## BackgroundDetails
### Properties
* **name**: string (Required): The background details name
* **value**: string (Required): The background details value

## BackgroundVisualization
### Properties
* **origin**: [OriginAutoGenerated](#originautogenerated) (Required, ReadOnly): The background visualization origin
* **visualization**: string (Required): The background visualization content, in Adaptive Card format

## DefaultActionGroupResource
### Properties
* **id**: string: The resource ID of the action group.

## FetchInvestigationResultParameters
### Properties
* **investigationId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The unique identifier of the investigation

## IngestionEndpoints
### Properties
* **metrics**: string (ReadOnly): The metrics ingestion endpoint for this Azure Monitor Workspace.

## InvestigationMetadata
### Properties
* **createdAt**: string (Required): The creation time of the investigation (in UTC)
* **id**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The unique identifier of the investigation

## InvestigationResult
### Properties
* **createdAt**: string: The creation time of the investigation (in UTC)
* **id**: string (Required): The identifier of the investigation
* **lastModifiedAt**: string: The last update time of the investigation (in UTC)
* **origin**: [OriginAutoGenerated](#originautogenerated): The origin of the investigation
* **result**: string (Required): The result of this investigation

## IssueNotificationType
* **Discriminator**: updateType

### Base Properties

### IssueCreationNotificationType
#### Properties
* **updateType**: 'IssueCreation' (Required): The type of update that triggers the notification

### OnChangeNotificationType
#### Properties
* **updateType**: 'OnChange' (Required): The type of update that triggers the notification

### TimeBasedUpdatesNotificationType
#### Properties
* **updateInterval**: string (Required): The interval between time-based updates
* **updateType**: 'TimeBased' (Required): The type of update that triggers the notification


## IssueProperties
### Properties
* **background**: [Background](#background): The issue background information
* **impactTime**: string (Required): The issue impact time (in UTC)
* **investigations**: [InvestigationMetadata](#investigationmetadata)[] (Required, ReadOnly): The list of investigations in the issue
* **investigationsCount**: int (Required, ReadOnly): The number of investigations in the issue
* **notifications**: [Notifications](#notifications): The issue notification settings
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **severity**: string (Required): The issue severity
* **status**: 'Canceled' | 'Closed' | 'InProgress' | 'Mitigated' | 'New' | string (Required): The issue status
* **title**: string (Required): The issue title

## ListParameter
### Properties
* **filter**: string: The filter to apply on the operation. For example, to filter by relevance, use "$filter=relevance eq 'Relevant'". Note: this property is currently a placeholder and is not in use.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## MetricAggregationConfiguration
### Properties
* **aggregationFunctions**: [MetricAggregationFunctions](#metricaggregationfunctions): Aggregation functions enabled for this aggregation.
* **dimensions**: string[]: Dimensions included in this aggregation.
* **storeAggregatedData**: bool: Whether aggregated metric data is stored.

## MetricAggregationFunctions
### Properties
* **enableMinMax**: bool (Required): Whether minimum and maximum aggregations are enabled.
* **enablePercentiles**: bool (Required): Whether percentile aggregations are enabled.

## MetricConfigurationProperties
### Properties
* **aggregationConfigurations**: [MetricAggregationConfiguration](#metricaggregationconfiguration)[]: Aggregation configurations for an aggregated metric.
* **dimensions**: string[] (ReadOnly): Dimensions emitted by the metric.
* **metricName**: string: The actual ingested metric name before route encoding.
* **metricType**: 'Aggregated' | 'Raw' | string: The metric type.
* **namespace**: string: The actual metric namespace before route encoding.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the metric configuration.
* **sourceMetricResourceId**: string: The resource ID of the source metric for an aggregated metric.
* **storeRawData**: bool: Whether raw metric data is stored.

## MetricNamespaceProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the metric namespace.

## MetricsContainer
### Properties
* **limits**: [MetricsLimits](#metricslimits): Metrics limits.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the metrics container.
* **version**: string: The version of Metrics Query Service that this AMW will use for all metric queries.

## MetricsLimits
### Properties
* **enableAutoScale**: bool: Indicates whether automatic scaling of ingestion limits is enabled.
* **maxActiveTimeSeries**: int: Maximum number of active time series allowed on the metrics containers.
* **maxEventsPerMinute**: int: Maximum rate (events per minute) that can be processed on the metrics containers.

## Notifications
### Properties
* **actionGroupIds**: string[]: The action group IDs to notify
* **excludeDefaultActionGroups**: bool: Whether to exclude default action groups from notifications
* **updateTypes**: [IssueNotificationType](#issuenotificationtype)[]: The types of updates that trigger notifications

## OriginAutoGenerated
### Properties
* **addedBy**: string (Required): The ID of the origin - for example, in case of 'Manual', the user ID/app ID, and in case of 'Automatic', the name of the automatic system
* **addedByType**: 'Automatic' | 'Manual' | string (Required): The source of the origin - Manual or Automatic

## PagedRelatedAlert
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [RelatedAlert](#relatedalert)[] (Required): The RelatedAlert items on this page

## PagedRelatedResource
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [RelatedResource](#relatedresource)[] (Required): The RelatedResource items on this page

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## RelatedAlert
### Properties
* **addedAt**: string (Required, ReadOnly): The time this relation was added to the issue (in UTC)
* **id**: string (Required): The alert ID
* **lastModifiedAt**: string (Required, ReadOnly): The last update time of this relation (in UTC)
* **origin**: [OriginAutoGenerated](#originautogenerated) (Required, ReadOnly): The source that related the alert to the issue
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string (Required): The alerts's relevance status

## RelatedAlerts
### Properties
* **value**: [RelatedAlert](#relatedalert)[] (Required): A list of related alerts

## RelatedResource
### Properties
* **addedAt**: string (Required, ReadOnly): The time this relation was added to the issue (in UTC)
* **id**: string (Required): The resource ID
* **lastModifiedAt**: string (Required, ReadOnly): The last update time of this relation (in UTC)
* **origin**: [OriginAutoGenerated](#originautogenerated) (Required, ReadOnly): The source that related the resource to the issue
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string (Required): The resource's relevance status

## RelatedResources
### Properties
* **value**: [RelatedResource](#relatedresource)[] (Required): A list of related resources

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TraceAssociation
### Properties
* **azureMonitorWorkspaceResourceId**: string (Required): The resource ID of the Azure Monitor Workspace that receives traces from the target scope.

## TraceContainer
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the trace container.
* **traceDurationWindowInSeconds**: int {minValue: 120, maxValue: 600} (Required): The trace duration window in seconds.
* **traceMetricsState**: 'Disabled' | 'Enabled' | string (Required): Controls whether trace-derived metrics are emitted for this trace container.
* **traceRetentionInDays**: int {minValue: 4, maxValue: 730} (Required): The number of days for which the traces are retained. Value must be between 4 and 730 days.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

