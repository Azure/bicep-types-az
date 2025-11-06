# Microsoft.Monitor @ 2025-05-03-preview

## Resource Microsoft.Monitor/accounts@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]+[^-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureMonitorWorkspace](#azuremonitorworkspace): Resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Monitor/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/healthmodels@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,42}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HealthModelProperties](#healthmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Monitor/accounts/healthmodels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/healthmodels/authenticationsettings@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AuthenticationSettingProperties](#authenticationsettingproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/healthmodels/authenticationsettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/healthmodels/discoveryrules@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiscoveryRuleProperties](#discoveryruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/healthmodels/discoveryrules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/healthmodels/entities@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EntityProperties](#entityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/healthmodels/entities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/healthmodels/relationships@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RelationshipProperties](#relationshipproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/healthmodels/relationships' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/healthmodels/signaldefinitions@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SignalDefinitionProperties](#signaldefinitionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/healthmodels/signaldefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/issues@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]+[^-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IssueProperties](#issueproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/issues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/metricsContainers@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^default$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MetricsContainer](#metricscontainer): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/metricsContainers' (ReadOnly, DeployTimeConstant): The resource type

## Function listAlerts (Microsoft.Monitor/accounts/issues@2025-05-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2025-05-03-preview
* **Input**: [ListParameter](#listparameter)
* **Output**: [PagedRelatedAlert](#pagedrelatedalert)

## Function listResources (Microsoft.Monitor/accounts/issues@2025-05-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2025-05-03-preview
* **Input**: [ListParameter](#listparameter)
* **Output**: [PagedRelatedResource](#pagedrelatedresource)

## AlertConfiguration
### Properties
* **actionGroupIds**: string[] {minLength: 1, maxLength: 5}: Optional list of action group resource IDs to be notified when the alert is triggered.
* **description**: string {minLength: 1, maxLength: 1000}: The alert rule description.
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (Required): The severity of triggered alert.

## AuthenticationSettingProperties
* **Discriminator**: authenticationKind

### Base Properties
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

### ManagedIdentityAuthenticationSettingProperties
#### Properties
* **authenticationKind**: 'ManagedIdentity' (Required): Kind of the authentication setting
* **managedIdentityName**: string {minLength: 1, maxLength: 500} (Required): Name of the managed identity to use. Either 'SystemAssigned' or the resourceId of a user-assigned identity.


## AzureMonitorWorkspace
### Properties
* **accountId**: string (ReadOnly): The immutable Id of the Azure Monitor Workspace. This property is read-only.
* **defaultIngestionSettings**: [AzureMonitorWorkspaceDefaultIngestionSettings](#azuremonitorworkspacedefaultingestionsettings) (ReadOnly): The Data Collection Rule and Endpoint used for ingestion by default.
* **metrics**: [AzureMonitorWorkspaceMetrics](#azuremonitorworkspacemetrics) (ReadOnly): Properties related to the metrics container in the Azure Monitor Workspace
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the Azure Monitor Workspace. Set to Succeeded if everything is healthy.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Gets or sets allow or disallow public network access to Azure Monitor Workspace

## AzureMonitorWorkspaceDefaultIngestionSettings
### Properties
* **dataCollectionEndpointResourceId**: string (ReadOnly): The Azure resource Id of the default data collection endpoint for this Azure Monitor Workspace.
* **dataCollectionRuleImmutableId**: string (ReadOnly): The immutable Id of the default data collection rule for this Azure Monitor Workspace.
* **dataCollectionRuleResourceId**: string (ReadOnly): The Azure resource Id of the default data collection rule for this Azure Monitor Workspace.
* **ingestionEndpoints**: [IngestionEndpoints](#ingestionendpoints) (ReadOnly): The ingestion endpoints for this Azure Monitor Workspace.

## AzureMonitorWorkspaceMetrics
### Properties
* **enableAccessUsingResourcePermissions**: bool: Flag that indicates whether to enable access using resource permissions.
* **internalId**: string (ReadOnly): An internal identifier for the metrics container. Only to be used by the system.
* **prometheusQueryEndpoint**: string (ReadOnly): The Prometheus query endpoint for the Azure Monitor Workspace

## AzureMonitorWorkspaceSignalGroup
### Properties
* **authenticationSetting**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Reference to the name of the authentication setting which is used for querying the data source
* **azureMonitorWorkspaceResourceId**: string (Required): Azure Monitor workspace resource ID
* **signalAssignments**: [SignalAssignment](#signalassignment)[] {maxLength: 50}: Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.

## AzureResourceSignalGroup
### Properties
* **authenticationSetting**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Reference to the name of the authentication setting which is used for querying the data source
* **azureResourceId**: string (Required): Azure resource ID
* **signalAssignments**: [SignalAssignment](#signalassignment)[] {maxLength: 50}: Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.

## DependenciesSignalGroup
### Properties
* **aggregationType**: 'Thresholds' | 'WorstOf' | string (Required): Aggregation type for child dependencies.
* **degradedThreshold**: string: Degraded threshold for aggregating the propagated health state of child dependencies. Can be either an absolute number that is greater than 0, or a percentage between 1-100%. The entity will be considered degraded when the number of not healthy child dependents (unhealthy, degraded, unknown) is equal to or above the threshold value. Must only be set when AggregationType is 'Thresholds'.
* **unhealthyThreshold**: string: Unhealthy threshold for aggregating the propagated health state of child dependencies. Can be either an absolute number that is greater than 0, or a percentage between 1-100%. The entity will be considered unhealthy when the number of not healthy child dependents (unhealthy, degraded, unknown) is equal to or above the threshold value. Must only be set when AggregationType is 'Thresholds'.

## DiscoveryError
### Properties
* **context**: string[] (ReadOnly): Additional context information, like resource IDs or query details
* **message**: string (Required, ReadOnly): Error message

## DiscoveryRuleProperties
* **Discriminator**: discoveryRuleKind

### Base Properties
* **addRecommendedSignals**: 'Disabled' | 'Enabled' | string (Required): Whether to add all recommended signals to the discovered entities.
* **authenticationSetting**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Reference to the name of the authentication setting which is used for querying Azure Resource Graph. The same authentication setting will also be assigned to any discovered entities.
* **deletionDate**: string (ReadOnly): Date when the discovery rule was (soft-)deleted.
* **discoverRelationships**: 'Disabled' | 'Enabled' | string (Required): Whether to create relationships between the discovered entities based on a set of built-in rules. These relationships cannot be manually deleted.
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **entityName**: string (Required, ReadOnly): Name of the entity which represents the discovery rule. Note: It might take a few minutes after creating the discovery rule until the entity is created.
* **error**: [DiscoveryError](#discoveryerror) (ReadOnly): Error details if the last discovery operation failed.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

### ApplicationInsightsTopologyDiscoveryRuleProperties
#### Properties
* **applicationInsightsResourceId**: string (Required): Application Insights resource ID
* **discoveryRuleKind**: 'ApplicationInsightsTopology' (Required): Kind of the discovery rule

### ResourceGraphQueryDiscoveryRuleProperties
#### Properties
* **discoveryRuleKind**: 'ResourceGraphQuery' (Required): Kind of the discovery rule
* **resourceGraphQuery**: string {minLength: 1, maxLength: 5000} (Required): Azure Resource Graph query text in KQL syntax. The query must return at least a column named 'id' which contains the resource ID of the discovered resources.


## DynamicDetectionRule
### Properties
* **dynamicThresholdDirection**: 'GreaterOrLowerThan' | 'GreaterThan' | 'LowerThan' | string (Required): Threshold direction
* **dynamicThresholdModel**: 'AnomalyDetection' | string (Required): ML model to use for dynamic thresholds
* **modelSensitivity**: int {minValue: 0, maxValue: 5} (Required): ML model sensitivity. Lowest value = high sensitivity. Supported step size = 0.5
* **trainingStartTime**: string: Start time of the training in UTC.

## EntityAlerts
### Properties
* **degraded**: [AlertConfiguration](#alertconfiguration): Alert to be triggered on state change to degraded
* **unhealthy**: [AlertConfiguration](#alertconfiguration): Alert to be triggered on state change to unhealthy

## EntityCoordinates
### Properties
* **x**: int (Required): X Coordinate
* **y**: int (Required): Y Coordinate

## EntityProperties
### Properties
* **alerts**: [EntityAlerts](#entityalerts): Alert configuration for this entity
* **canvasPosition**: [EntityCoordinates](#entitycoordinates): Positioning of the entity on the model canvas
* **deletionDate**: string (ReadOnly): Date when the entity was (soft-)deleted
* **discoveredBy**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (ReadOnly): Discovered by which discovery rule. If set, the entity cannot be deleted manually.
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **healthObjective**: int {minValue: 0, maxValue: 100}: Health objective as a percentage of time the entity should be healthy.
* **healthState**: 'Degraded' | 'Deleted' | 'Error' | 'Healthy' | 'Unknown' | string (ReadOnly): Health state of this entity
* **icon**: [IconDefinition](#icondefinition): Visual icon definition. If not set, a default icon is used.
* **impact**: 'Limited' | 'Standard' | 'Suppressed' | string: Impact of the entity in health state propagation
* **kind**: string {minLength: 1, maxLength: 260}: Entity kind
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **signals**: [SignalGroup](#signalgroup): Signal groups which are assigned to this entity
* **tags**: [EntityPropertiesTags](#entitypropertiestags): Optional set of labels (key-value pairs)

## EntityPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string {maxLength: 4096}

## EvaluationRule
### Properties
* **degradedRule**: [ThresholdRule](#thresholdrule): Degraded rule with static threshold. When used, dynamicDetectionRule must not be set.
* **dynamicDetectionRule**: [DynamicDetectionRule](#dynamicdetectionrule): Configure to use ML-based dynamic thresholds. When used, degradedRule and unhealthyRule must not be set.
* **unhealthyRule**: [ThresholdRule](#thresholdrule): Unhealthy rule with static threshold. When used, dynamicDetectionRule must not be set.

## HealthModelProperties
### Properties
* **discovery**: [ModelDiscoverySettings](#modeldiscoverysettings): Configure to automatically discover entities from a given scope, such as a Service Group. The discovered entities will be linked to the root entity of the health model.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **queryEndpoint**: string (ReadOnly): The data plane endpoint for querying health data

## IconDefinition
### Properties
* **customData**: string {minLength: 1, maxLength: 5000}: Custom data. Base64-encoded SVG data. If set, this overrides the built-in icon.
* **iconName**: string {minLength: 1, maxLength: 100} (Required): Name of the built-in icon, or 'Custom' to use customData

## IngestionEndpoints
### Properties
* **metrics**: string (ReadOnly): The metrics ingestion endpoint for this Azure Monitor Workspace.

## InvestigationExecution
### Properties
* **completedAt**: string: The time at which the investigation execution completed (in UTC)
* **runState**: 'Canceled' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | string (Required, ReadOnly): The state of the investigation execution

## InvestigationMetadata
### Properties
* **createdAt**: string (Required): The creation time of the investigation (in UTC)
* **execution**: [InvestigationExecution](#investigationexecution) (Required): The execution details of the investigation
* **id**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The unique identifier of the investigation
* **runParameters**: [RunParameters](#runparameters) (Required): The parameters that were used to start the investigation

## InvestigationScope
### Properties
* **id**: string (Required): The ID of the scope of the investigation - either an Azure alert ID or an Azure resource ID
* **origin**: [Origin](#origin) (Required): The origin of the scope
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string: The relevance of the scope

## IssueProperties
### Properties
* **impactTime**: string (Required): The issue impact time (in UTC)
* **investigations**: [InvestigationMetadata](#investigationmetadata)[] (Required, ReadOnly): The list of investigations in the issue
* **investigationsCount**: int (Required, ReadOnly): The number of investigations in the issue
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **severity**: string (Required): The issue severity
* **status**: 'Canceled' | 'Closed' | 'InProgress' | 'Mitigated' | 'New' | string (Required): The issue status
* **title**: string (Required): The issue title

## ListParameter
### Properties
* **filter**: string: The filter to apply on the operation. For example, to filter by relevance, use "$filter=relevance eq 'Relevant'". Note: this property is currently a placeholder and is not in use.

## LogAnalyticsSignalGroup
### Properties
* **authenticationSetting**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Reference to the name of the authentication setting which is used for querying the data source
* **logAnalyticsWorkspaceResourceId**: string (Required): Log Analytics Workspace resource ID
* **signalAssignments**: [SignalAssignment](#signalassignment)[] {maxLength: 50}: Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.

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

## MetricsContainer
### Properties
* **limits**: [MetricsLimits](#metricslimits): Metrics limits.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the metrics container.

## MetricsLimits
### Properties
* **maxActiveTimeSeries**: int: Maximum number of active time series allowed on the metrics containers.
* **maxEventsPerMinute**: int: Maximum rate (events per minute) that can be processed on the metrics containers.

## ModelDiscoverySettings
### Properties
* **addRecommendedSignals**: 'Disabled' | 'Enabled' | string (Required): Whether to add all recommended signals to the discovered entities.
* **identity**: string {maxLength: 4096}: Which Managed Identity of the health model to use for discovery. Defaults to SystemAssigned, if not set. Can be set to 'SystemAssigned' or to the resource id of a user-assigned managed identity which is linked to the health model.
* **scope**: string {maxLength: 4096} (Required): The scope from which entities should be automatically discovered. For example, the resource id of a Service Group.

## Origin
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
* **origin**: [Origin](#origin) (Required, ReadOnly): The source that related the alert to the issue
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string (Required): The alerts's relevance status

## RelatedResource
### Properties
* **addedAt**: string (Required, ReadOnly): The time this relation was added to the issue (in UTC)
* **id**: string (Required): The resource ID
* **lastModifiedAt**: string (Required, ReadOnly): The last update time of this relation (in UTC)
* **origin**: [Origin](#origin) (Required, ReadOnly): The source that related the resource to the issue
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string (Required): The resource's relevance status

## RelationshipProperties
### Properties
* **childEntityName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Resource name of the child entity
* **deletionDate**: string (ReadOnly): Date when the relationship was (soft-)deleted
* **discoveredBy**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (ReadOnly): Discovered by which discovery rule. If set, the relationship cannot be deleted manually.
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **parentEntityName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Resource name of the parent entity
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **tags**: [RelationshipPropertiesTags](#relationshippropertiestags): Optional set of labels (key-value pairs)

## RelationshipPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string {maxLength: 4096}

## RunParameters
### Properties
* **alerts**: [InvestigationScope](#investigationscope)[] (Required): The alerts used to run the investigation
* **impactTime**: string (Required): The impact time to investigate (in UTC)
* **resources**: [InvestigationScope](#investigationscope)[] (Required): The resources used to run the investigation

## SignalAssignment
### Properties
* **signalDefinitions**: (string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"})[] {minLength: 1, maxLength: 1} (Required): Signal definitions referenced by their names. All definitions are combined with an AND operator.

## SignalDefinitionProperties
* **Discriminator**: signalKind

### Base Properties
* **dataUnit**: string {minLength: 1, maxLength: 100}: Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
* **deletionDate**: string (ReadOnly): Date when the signal definition was (soft-)deleted
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **evaluationRules**: [EvaluationRule](#evaluationrule) (Required): Evaluation rules for the signal definition
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **refreshInterval**: 'PT10M' | 'PT1H' | 'PT1M' | 'PT2H' | 'PT30M' | 'PT5M' | string: Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
* **tags**: [SignalDefinitionPropertiesTags](#signaldefinitionpropertiestags): Optional set of labels (key-value pairs)

### ResourceMetricSignalDefinitionProperties
#### Properties
* **aggregationType**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'None' | 'Total' | string (Required): Type of aggregation to apply to the metric
* **dimension**: string {minLength: 1, maxLength: 256}: Optional: Dimension to split by
* **dimensionFilter**: string {minLength: 1, maxLength: 256}: Optional: Dimension filter to apply to the dimension. Must only be set if also Dimension is set.
* **metricName**: string {minLength: 1, maxLength: 256} (Required): Name of the metric
* **metricNamespace**: string {minLength: 1, maxLength: 256} (Required): Metric namespace
* **signalKind**: 'AzureResourceMetric' (Required): Kind of the signal definition
* **timeGrain**: string {minLength: 1, maxLength: 100} (Required): Time range of signal. ISO duration format like PT10M.

### LogAnalyticsQuerySignalDefinitionProperties
#### Properties
* **queryText**: string {minLength: 1, maxLength: 5000} (Required): Query text in KQL syntax
* **signalKind**: 'LogAnalyticsQuery' (Required): Kind of the signal definition
* **timeGrain**: string {minLength: 1, maxLength: 100}: Time range of signal. ISO duration format like PT10M. If not specified, the KQL query must define a time range.
* **valueColumnName**: string {minLength: 1, maxLength: 100}: Name of the column in the result set to evaluate against the thresholds. Defaults to the first column in the result set if not specified. The column must be numeric.

### PrometheusMetricsSignalDefinitionProperties
#### Properties
* **queryText**: string {minLength: 1, maxLength: 5000} (Required): Query text in PromQL syntax
* **signalKind**: 'PrometheusMetricsQuery' (Required): Kind of the signal definition
* **timeGrain**: string {minLength: 1, maxLength: 100}: Time range of signal. ISO duration format like PT10M.


## SignalDefinitionPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string {maxLength: 4096}

## SignalGroup
### Properties
* **azureLogAnalytics**: [LogAnalyticsSignalGroup](#loganalyticssignalgroup): Log Analytics Signal Group
* **azureMonitorWorkspace**: [AzureMonitorWorkspaceSignalGroup](#azuremonitorworkspacesignalgroup): Azure Monitor Workspace Signal Group
* **azureResource**: [AzureResourceSignalGroup](#azureresourcesignalgroup): Azure Resource Signal Group
* **dependencies**: [DependenciesSignalGroup](#dependenciessignalgroup): Settings for dependency signals to control how the health state of child entities influences the health state of the parent entity.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ThresholdRule
### Properties
* **operator**: 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string (Required): Operator how to compare the signal value with the threshold
* **threshold**: string {minLength: 1, maxLength: 100} (Required): Threshold value

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

