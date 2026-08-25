# Microsoft.CloudHealth @ 2026-05-01-preview

## Resource Microsoft.CloudHealth/healthmodels@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,42}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HealthModelProperties](#healthmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.CloudHealth/healthmodels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/authenticationsettings@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AuthenticationSettingProperties](#authenticationsettingproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/authenticationsettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/discoveryrules@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiscoveryRuleProperties](#discoveryruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/discoveryrules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/entities@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EntityProperties](#entityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/entities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/relationships@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RelationshipProperties](#relationshipproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/relationships' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/signaldefinitions@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SignalDefinitionProperties](#signaldefinitionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/signaldefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Function addDataAnnotation (Microsoft.CloudHealth/healthmodels/entities@2026-05-01-preview)
* **Resource**: Microsoft.CloudHealth/healthmodels/entities
* **ApiVersion**: 2026-05-01-preview
* **Input**: [AddDataAnnotationRequest](#adddataannotationrequest)
* **Output**: [DataAnnotation](#dataannotation)

## Function getDataAnnotations (Microsoft.CloudHealth/healthmodels/entities@2026-05-01-preview)
* **Resource**: Microsoft.CloudHealth/healthmodels/entities
* **ApiVersion**: 2026-05-01-preview
* **Input**: [GetDataAnnotationsRequest](#getdataannotationsrequest)
* **Output**: [GetDataAnnotationsResponse](#getdataannotationsresponse)

## Function getHistory (Microsoft.CloudHealth/healthmodels/entities@2026-05-01-preview)
* **Resource**: Microsoft.CloudHealth/healthmodels/entities
* **ApiVersion**: 2026-05-01-preview
* **Input**: [EntityHistoryRequest](#entityhistoryrequest)
* **Output**: [EntityHistoryResponse](#entityhistoryresponse)

## Function getSignalHistory (Microsoft.CloudHealth/healthmodels/entities@2026-05-01-preview)
* **Resource**: Microsoft.CloudHealth/healthmodels/entities
* **ApiVersion**: 2026-05-01-preview
* **Input**: [SignalHistoryRequest](#signalhistoryrequest)
* **Output**: [SignalHistoryResponse](#signalhistoryresponse)

## Function getSignalRecommendations (Microsoft.CloudHealth/healthmodels/entities@2026-05-01-preview)
* **Resource**: Microsoft.CloudHealth/healthmodels/entities
* **ApiVersion**: 2026-05-01-preview
* **Output**: [GetSignalRecommendationsResponse](#getsignalrecommendationsresponse)

## Function ingestHealthReport (Microsoft.CloudHealth/healthmodels/entities@2026-05-01-preview)
* **Resource**: Microsoft.CloudHealth/healthmodels/entities
* **ApiVersion**: 2026-05-01-preview
* **Input**: [HealthReportRequest](#healthreportrequest)
* **Output**: any

## AddDataAnnotationRequest
### Properties
* **annotationDetails**: [AddDataAnnotationRequestAnnotationDetails](#adddataannotationrequestannotationdetails) (Required): Annotation details as a dynamic key-value pair bag. Service-enforced limits: a maximum of 10 entries per annotation and a maximum value length of 256 characters. Requests exceeding these limits will be rejected with a 400 response.
* **description**: string {maxLength: 4096}: Optional description of the annotation

## AddDataAnnotationRequestAnnotationDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string {maxLength: 256}

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


## AzureMonitorWorkspaceSignals
### Properties
* **authenticationSetting**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Reference to the name of the authentication setting which is used for querying the data source.
* **azureMonitorWorkspaceResourceId**: string (Required): Azure Monitor workspace resource ID.
* **signals**: [PrometheusMetricsSignal](#prometheusmetricssignal)[] {maxLength: 50}: Signals assigned to this signal group.

## AzureResourceHealthSignal
### Properties
* **enabled**: 'Disabled' | 'Enabled' | string: Whether to automatically add a signal for the Azure resource's availability state from Azure Resource Health. Defaults to Enabled.
* **signalName**: string {maxLength: 256} (ReadOnly): The unique name of the Azure resource health signal. System assigned.
* **status**: [AzureResourceHealthSignalStatus](#azureresourcehealthsignalstatus) (ReadOnly): Current status of the Azure resource health signal.

## AzureResourceHealthSignalStatus
### Properties
* **additionalContext**: string {maxLength: 4096}: Additional context as provided by the submitter
* **availabilityReportedTime**: string (ReadOnly): Timestamp when Azure Resource Health observed the current availability state.
* **availabilityState**: 'Available' | 'Degraded' | 'Unavailable' | 'Unknown' | string (ReadOnly): Availability state of the Azure resource as reported by Azure Resource Health.
* **category**: 'Planned' | 'Unplanned' | string (ReadOnly): Whether the status changing event was planned or unplanned.
* **detailedStatus**: string {maxLength: 4096} (ReadOnly): Detailed status of the Azure resource as reported by Azure Resource Health.
* **error**: string (ReadOnly): Error message if the signal status cannot be retrieved
* **healthState**: 'Degraded' | 'Deleted' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Health state of this signal
* **reasonChronicity**: 'Persistent' | 'Transient' | string (ReadOnly): Whether the current availability state is 'Persistent' or 'Transient'.
* **reasonType**: 'Planned' | 'Unplanned' | 'UserInitiated' | string (ReadOnly): Reason type for the current availability state (e.g. 'Unplanned', 'Planned', 'UserInitiated').
* **reportedAt**: string (ReadOnly): Timestamp when the value was reported
* **summary**: string (ReadOnly): Human-readable summary of the current availability state from Azure Resource Health.
* **value**: int (ReadOnly): Reported value of the signal

## AzureResourceSignal
### Properties
* **aggregationType**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'None' | 'Total' | string: Type of aggregation to apply to the metric
* **dataUnit**: string {minLength: 1, maxLength: 100}: Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
* **dimensionFilter**: string {minLength: 1, maxLength: 256}: Optional: Dimension filter to apply to the dimension. Must only be set if also Dimension is set.
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **evaluationRules**: [EvaluationRule](#evaluationrule): Evaluation rules for the signal definition
* **metricName**: string {minLength: 1, maxLength: 256}: Name of the metric
* **metricNamespace**: string {minLength: 1, maxLength: 256}: Metric namespace
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Unique name of the signal within the entity.
* **refreshInterval**: 'PT10M' | 'PT15M' | 'PT1H' | 'PT1M' | 'PT2H' | 'PT30M' | 'PT5M' | string: Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
* **signalDefinitionName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"}: Optional reference to a signal definition that provides default values.
* **signalKind**: 'AzureResourceMetric' | 'External' | 'LogAnalyticsQuery' | 'PrometheusMetricsQuery' | string (Required): Kind of the signal instance
* **status**: [SignalStatus](#signalstatus) (ReadOnly): Current status of the signal.
* **timeGrain**: string {minLength: 1, maxLength: 100}: Time range of signal. ISO duration format like PT10M.

## AzureResourceSignals
### Properties
* **authenticationSetting**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Reference to the name of the authentication setting which is used for querying the data source.
* **azureResourceId**: string (Required): Azure resource ID
* **azureResourceKind**: string {maxLength: 256}: Azure resource kind (e.g., 'functionapp'). Populated by the UI for icon rendering. Can be null if not populated.
* **resourceHealth**: [AzureResourceHealthSignal](#azureresourcehealthsignal): Optional configuration for automatically adding a signal based on the resource's availability state in Azure Resource Health.
* **signals**: [AzureResourceSignal](#azureresourcesignal)[] {maxLength: 50}: Signals assigned to this group.

## DataAnnotation
### Properties
* **annotationDetails**: [DataAnnotationDetails](#dataannotationdetails) (Required): Annotation details as a dynamic key-value pair bag. Service-enforced limits: a maximum of 10 entries per annotation and a maximum value length of 256 characters. Requests exceeding these limits will be rejected with a 400 response.
* **annotationId**: string {maxLength: 256} (ReadOnly): Auto-assigned identifier for the annotation
* **createdAt**: string (ReadOnly): Timestamp when the annotation was created
* **description**: string {maxLength: 4096}: Optional description of the annotation

## DataAnnotationDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string {maxLength: 256}

## DependenciesSignalGroupV2
### Properties
* **aggregationType**: 'MaxNotHealthy' | 'MinHealthy' | 'WorstOf' | string (Required): Aggregation type for child dependencies.
* **degradedThreshold**: int {minValue: 0}: Degraded threshold for aggregation. For MinHealthy: parent is degraded when healthy count/percentage falls to or below this value. For MaxNotHealthy: parent is degraded when not-healthy count/percentage reaches or exceeds this value. Optional — if not set, there is no degraded state (transitions directly from Healthy to Unhealthy).
* **ignoreUnknown**: bool: If true, children with Unknown health state are excluded from aggregation calculations. Defaults to true.
* **unhealthyThreshold**: int {minValue: 0}: Unhealthy threshold for aggregation. For MinHealthy: parent is unhealthy when healthy count/percentage falls to or below this value. For MaxNotHealthy: parent is unhealthy when not-healthy count/percentage reaches or exceeds this value. Required when aggregationType is MinHealthy or MaxNotHealthy.
* **unit**: 'Absolute' | 'Percentage' | string: Unit type for the aggregation thresholds. Required when aggregationType is MinHealthy or MaxNotHealthy.

## DiscoveryError
### Properties
* **context**: string[] (ReadOnly): Additional context information, like resource IDs or query details
* **message**: string (Required, ReadOnly): Error message

## DiscoveryRuleProperties
### Properties
* **addRecommendedSignals**: 'Disabled' | 'Enabled' | string (Required): Whether to add all recommended signals to the discovered entities.
* **addResourceHealthSignal**: 'Disabled' | 'Enabled' | string: Whether to automatically add a signal for the Azure resource's availability state from Azure Resource Health to the discovered entities. Defaults to `Enabled`: discovery rules updated via this API version without setting this field will begin emitting a Resource Health availability signal. Pass `Disabled` to preserve pre-`2026-05-01-preview` behavior.
* **authenticationSetting**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Reference to the name of the authentication setting which is used for querying Azure Resource Graph. The same authentication setting will also be assigned to any discovered entities.
* **discoverRelationships**: 'Disabled' | 'Enabled' | string (Required): Whether to create relationships between the discovered entities based on a set of built-in rules. These relationships cannot be manually deleted.
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **entityName**: string (Required, ReadOnly): Name of the entity which represents the discovery rule. Note: It might take a few minutes after creating the discovery rule until the entity is created.
* **error**: [DiscoveryError](#discoveryerror) (ReadOnly): Error details if the last discovery operation failed.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **specification**: [DiscoveryRuleSpecification](#discoveryrulespecification) (Required): Specification of the discovery rule defining how entities are discovered.

## DiscoveryRuleSpecification
* **Discriminator**: kind

### Base Properties

### ApplicationInsightsTopologySpecification
#### Properties
* **applicationInsightsResourceId**: string (Required): Application Insights resource ID
* **kind**: 'ApplicationInsightsTopology' (Required): Kind of the discovery rule specification

### ResourceGraphQuerySpecification
#### Properties
* **kind**: 'ResourceGraphQuery' (Required): Kind of the discovery rule specification
* **resourceGraphQuery**: string {minLength: 1, maxLength: 5000} (Required): Azure Resource Graph query text in KQL syntax. The query must return at least a column named 'id' which contains the resource ID of the discovered resources.


## EntityAlerts
### Properties
* **degraded**: [AlertConfiguration](#alertconfiguration): Alert to be triggered on state change to degraded
* **unhealthy**: [AlertConfiguration](#alertconfiguration): Alert to be triggered on state change to unhealthy

## EntityCoordinates
### Properties
* **x**: int (Required): X Coordinate
* **y**: int (Required): Y Coordinate

## EntityHistoryRequest
### Properties
* **endAt**: string: End time for the history query. Defaults to now if not specified.
* **nextMarker**: string {maxLength: 4096}: An opaque string value that identifies the portion of the result set to be returned with the next operation. Must not be combined with startAt or endAt.
* **startAt**: string: Start time for the history query. Defaults to 24 hours ago if not specified.
* **top**: int {minValue: 1, maxValue: 1000}: Maximum number of health state transitions to return per page. Defaults to 1000.

## EntityHistoryResponse
### Properties
* **entityName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Name of the entity
* **history**: [HealthStateTransition](#healthstatetransition)[] (Required): List of health state transitions
* **nextMarker**: string {maxLength: 4096}: An opaque string value that identifies the portion of the result set to be returned with the next operation.

## EntityProperties
### Properties
* **alerts**: [EntityAlerts](#entityalerts): Alert configuration for this entity
* **canvasPosition**: [EntityCoordinates](#entitycoordinates): Positioning of the entity on the model canvas
* **discoveredBy**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (ReadOnly): Discovered by which discovery rule. If set, the entity cannot be deleted manually.
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **healthObjective**: int {minValue: 0, maxValue: 100}: Health objective as a percentage of time the entity should be healthy.
* **healthState**: 'Degraded' | 'Deleted' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Health state of this entity
* **icon**: [IconDefinition](#icondefinition): Visual icon definition. If not set, a default icon is used.
* **impact**: 'Limited' | 'Standard' | 'Suppressed' | string: Impact of the entity in health state propagation
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **signalGroups**: [SignalGroups](#signalgroups): Signal groups which are assigned to this entity
* **tags**: [EntityPropertiesTags](#entitypropertiestags): Optional set of tags (key-value pairs)

## EntityPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string {maxLength: 4096}

## EvaluationRule
### Properties
* **degradedRule**: [ThresholdRuleV2](#thresholdrulev2): Degraded rule with static threshold.
* **unhealthyRule**: [ThresholdRuleV2](#thresholdrulev2) (Required): Unhealthy rule with static threshold.

## ExternalSignal
### Properties
* **evaluationRules**: [EvaluationRule](#evaluationrule): Evaluation rules for the external signal as submitted.
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Unique name of the signal within the entity.
* **signalDefinitionName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"}: Optional reference to a signal definition that provides default values.
* **signalKind**: 'AzureResourceMetric' | 'External' | 'LogAnalyticsQuery' | 'PrometheusMetricsQuery' | string (Required): Kind of the signal instance
* **status**: [SignalStatus](#signalstatus) (ReadOnly): Current status of the signal.

## ExternalSignalGroup
### Properties
* **signals**: [ExternalSignal](#externalsignal)[] (ReadOnly): Signals assigned to this signal group.

## GetDataAnnotationsRequest
### Properties
* **endAt**: string: End of UTC time range. Defaults to now if not specified.
* **nextMarker**: string {maxLength: 4096}: An opaque string value that identifies the portion of the result set to be returned with the next operation. Must not be combined with startAt or endAt.
* **startAt**: string: Start of UTC time range. Defaults to 24 hours ago if not specified.
* **top**: int {minValue: 1, maxValue: 100}: Maximum number of annotations to return per page. Defaults to 100.

## GetDataAnnotationsResponse
### Properties
* **annotations**: [DataAnnotation](#dataannotation)[] (Required): List of data annotations
* **entityName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Name of the entity
* **nextMarker**: string {maxLength: 4096}: An opaque string value that identifies the portion of the result set to be returned with the next operation.

## GetSignalRecommendationsResponse
### Properties
* **recommendedConfigurations**: [SignalConfiguration](#signalconfiguration)[] (Required): Additional signal configurations for metrics that are not broadly applicable to every health model for an Entity of this resource type, but if a caller chooses to monitor one of these metrics, the provided thresholds are suggested as a starting point. Independent of `recommendedSignals` — not paired by index.
* **recommendedSignals**: [SignalConfiguration](#signalconfiguration)[] (Required): Signals that are broadly recommended to be enabled by default for health models monitoring an Entity of this resource type. Each entry is a complete signal configuration (metric, aggregation, thresholds) ready to be added to a health model. Independent of `recommendedConfigurations` — not paired by index.

## HealthModelProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

## HealthReportEvaluationRule
### Properties
* **degradedRule**: [ThresholdRuleV2](#thresholdrulev2): Degraded rule with static threshold.
* **unhealthyRule**: [ThresholdRuleV2](#thresholdrulev2) (Required): Unhealthy rule with static threshold.

## HealthReportRequest
### Properties
* **additionalContext**: string {maxLength: 4096}: Optional additional context or description for the health report
* **evaluationRules**: [HealthReportEvaluationRule](#healthreportevaluationrule): Evaluation rules that were used to determine the reported health state
* **expiresInMinutes**: int {minValue: 1, maxValue: 10080}: Number of minutes until the health report expires. Defaults to 60 (1 hour) if not specified.
* **healthState**: 'Degraded' | 'Deleted' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (Required): Health state to report for the signal
* **signalName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Name of the entity signal to report health for
* **value**: int: Reported value of the signal

## HealthStateTransition
### Properties
* **newState**: 'Degraded' | 'Deleted' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (Required): New health state after the transition
* **occurredAt**: string (Required): Timestamp when the transition occurred
* **previousState**: 'Degraded' | 'Deleted' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (Required): Previous health state before the transition
* **reason**: string {maxLength: 4096}: Reason of the transition

## IconDefinition
### Properties
* **customData**: string {minLength: 1, maxLength: 5000}: Custom data. Base64-encoded SVG data. If set, this overrides the built-in icon.
* **iconName**: string {minLength: 1, maxLength: 100} (Required): Name of the built-in icon, or 'Custom' to use customData

## LogAnalyticsSignal
### Properties
* **dataUnit**: string {minLength: 1, maxLength: 100}: Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **evaluationRules**: [EvaluationRule](#evaluationrule): Evaluation rules for the signal definition
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Unique name of the signal within the entity.
* **queryText**: string {minLength: 1, maxLength: 5000}: Query text in KQL syntax
* **refreshInterval**: 'PT10M' | 'PT15M' | 'PT1H' | 'PT1M' | 'PT2H' | 'PT30M' | 'PT5M' | string: Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
* **signalDefinitionName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"}: Optional reference to a signal definition that provides default values.
* **signalKind**: 'AzureResourceMetric' | 'External' | 'LogAnalyticsQuery' | 'PrometheusMetricsQuery' | string (Required): Kind of the signal instance
* **status**: [SignalStatus](#signalstatus) (ReadOnly): Current status of the signal.
* **timeGrain**: string {minLength: 1, maxLength: 100}: Time range of signal. ISO duration format like PT10M. If not specified, the KQL query must define a time range.
* **valueColumnName**: string {minLength: 1, maxLength: 100}: Name of the column in the result set to evaluate against the thresholds. Defaults to the first column in the result set if not specified. The column must be numeric.

## LogAnalyticsSignals
### Properties
* **authenticationSetting**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Reference to the name of the authentication setting which is used for querying the data source.
* **logAnalyticsWorkspaceResourceId**: string (Required): Log Analytics workspace resource ID.
* **signals**: [LogAnalyticsSignal](#loganalyticssignal)[] {maxLength: 50}: Signals assigned to this group.

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

## PrometheusMetricsSignal
### Properties
* **dataUnit**: string {minLength: 1, maxLength: 100}: Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **evaluationRules**: [EvaluationRule](#evaluationrule): Evaluation rules for the signal definition
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Unique name of the signal within the entity.
* **queryText**: string {minLength: 1, maxLength: 5000}: Query text in PromQL syntax
* **refreshInterval**: 'PT10M' | 'PT15M' | 'PT1H' | 'PT1M' | 'PT2H' | 'PT30M' | 'PT5M' | string: Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
* **signalDefinitionName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"}: Optional reference to a signal definition that provides default values.
* **signalKind**: 'AzureResourceMetric' | 'External' | 'LogAnalyticsQuery' | 'PrometheusMetricsQuery' | string (Required): Kind of the signal instance
* **status**: [SignalStatus](#signalstatus) (ReadOnly): Current status of the signal.
* **timeGrain**: string {minLength: 1, maxLength: 100}: Time range of signal. ISO duration format like PT10M.

## RelationshipProperties
### Properties
* **childEntityName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Resource name of the child entity
* **discoveredBy**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (ReadOnly): Discovered by which discovery rule. If set, the relationship cannot be deleted manually.
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **parentEntityName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Resource name of the parent entity
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **tags**: [RelationshipPropertiesTags](#relationshippropertiestags): Optional set of tags (key-value pairs)

## RelationshipPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string {maxLength: 4096}

## SignalConfiguration
### Properties
* **aggregationType**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'None' | 'Total' | string: Type of aggregation to apply to the metric.
* **dimensionFilter**: string {minLength: 1, maxLength: 256}: Optional dimension filter to apply to the metric.
* **evaluationRules**: [EvaluationRule](#evaluationrule): Evaluation rules with recommended thresholds.
* **metricName**: string {minLength: 1, maxLength: 256}: Name of the metric (e.g. 'Percentage CPU').
* **metricNamespace**: string {minLength: 1, maxLength: 256}: Metric namespace (e.g. 'microsoft.compute/virtualmachines').
* **signalId**: string {minLength: 1, maxLength: 256} (Required): Unique identifier of the recommended signal configuration.
* **timeGrain**: string {minLength: 1, maxLength: 100}: Time range of the metric. ISO 8601 duration format (e.g. 'PT5M').
* **unit**: string {minLength: 1, maxLength: 100}: Unit of the metric (e.g. Percent, Bytes, Count).

## SignalDefinitionProperties
* **Discriminator**: signalKind

### Base Properties
* **dataUnit**: string {minLength: 1, maxLength: 100}: Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
* **displayName**: string {minLength: 1, maxLength: 260}: Display name
* **evaluationRules**: [EvaluationRule](#evaluationrule) (Required): Evaluation rules for the signal definition
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **refreshInterval**: 'PT10M' | 'PT15M' | 'PT1H' | 'PT1M' | 'PT2H' | 'PT30M' | 'PT5M' | string: Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
* **tags**: [SignalDefinitionPropertiesTags](#signaldefinitionpropertiestags): Optional set of tags (key-value pairs)

### ResourceMetricSignalDefinitionProperties
#### Properties
* **aggregationType**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'None' | 'Total' | string (Required): Type of aggregation to apply to the metric
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

## SignalGroups
### Properties
* **azureLogAnalytics**: [LogAnalyticsSignals](#loganalyticssignals): Log Analytics Signal Group
* **azureMonitorWorkspace**: [AzureMonitorWorkspaceSignals](#azuremonitorworkspacesignals): Azure Monitor Workspace Signal Group
* **azureResource**: [AzureResourceSignals](#azureresourcesignals): Azure Resource Signal Group
* **dependencies**: [DependenciesSignalGroupV2](#dependenciessignalgroupv2): Settings for dependency signals to control how the health state of child entities influences the health state of the parent entity.
* **external**: [ExternalSignalGroup](#externalsignalgroup) (ReadOnly): List of signals which have been externally submitted for this entity.

## SignalHistoryDataPoint
### Properties
* **additionalContext**: string {maxLength: 4096}: Additional context as provided by the submitter
* **healthState**: 'Degraded' | 'Deleted' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (Required): Health state at this point in time
* **occurredAt**: string (Required): Timestamp of the data point
* **value**: int: Signal value at this point in time

## SignalHistoryRequest
### Properties
* **endAt**: string: End time for the history query. Defaults to now if not specified.
* **nextMarker**: string {maxLength: 4096}: An opaque string value that identifies the portion of the result set to be returned with the next operation. Must not be combined with startAt or endAt.
* **signalName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Name of the signal to get history for
* **startAt**: string: Start time for the history query. Defaults to 24 hours ago if not specified.
* **top**: int {minValue: 1, maxValue: 1000}: Maximum number of data points to return per page. Defaults to 1000.

## SignalHistoryResponse
### Properties
* **entityName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Name of the entity
* **history**: [SignalHistoryDataPoint](#signalhistorydatapoint)[] (Required): Signal history data points
* **nextMarker**: string {maxLength: 4096}: An opaque string value that identifies the portion of the result set to be returned with the next operation.
* **signalName**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{1,258}[a-zA-Z0-9]$"} (Required): Name of the signal

## SignalStatus
### Properties
* **additionalContext**: string {maxLength: 4096}: Additional context as provided by the submitter
* **error**: string (ReadOnly): Error message if the signal status cannot be retrieved
* **healthState**: 'Degraded' | 'Deleted' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Health state of this signal
* **reportedAt**: string (ReadOnly): Timestamp when the value was reported
* **value**: int (ReadOnly): Reported value of the signal

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ThresholdRuleV2
### Properties
* **lookBackWindow**: 'PT15M' | 'PT1H' | 'PT30M' | 'PT5M' | string: ISO 8601 duration for the historical look-back window used by dynamic threshold computation. Only applicable when operator is Dynamic.
* **operator**: 'Dynamic' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'NotEqual' | string (Required): Operator how to compare the signal value with the threshold
* **sensitivity**: 'High' | 'Low' | 'Medium' | string: Sensitivity level for dynamic threshold detection. Only applicable when operator is Dynamic.
* **threshold**: int: Threshold value

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

