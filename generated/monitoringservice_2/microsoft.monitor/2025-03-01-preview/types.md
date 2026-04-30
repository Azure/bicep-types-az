# Microsoft.Monitor @ 2025-03-01-preview

## Resource Microsoft.Monitor/slis@2025-03-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_()~-]{2,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SliResource](#sliresource): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/slis' (ReadOnly, DeployTimeConstant): The resource type

## AmwAccount
### Properties
* **identity**: string (Required): The ARM resource ID of the managed identity with access to the source account.
* **resourceId**: string (Required): The ARM resource ID of the account where metrics are emitted.

## Baseline
### Properties
* **evaluationCalculationType**: 'CalendarDays' | 'RollingDays' | string (Required): Specifies how evaluation is calculated, either based on calendar days or a rolling window.
* **evaluationPeriodDays**: int {minValue: 1, maxValue: 90} (Required): The time frame (in days) used for SLI evaluation.
* **value**: int {minValue: 0, maxValue: 100} (Required): The user-defined or Azure-defined target value used for comparison against the SLI value.

## BaselineProperties
### Properties
* **baseline**: [Baseline](#baseline) (Required): Defines the baseline target, which is compared against the SLI value to determine compliance.

## Condition
### Properties
* **dimensionName**: string: Dimension name used in filtering.
* **operator**: '!=' | '!contains' | '!in' | '!startswith' | '<' | '<=' | '==' | '>' | '>=' | '@in' | 'contains' | 'startswith' | string (Required): Operator used in the filtering condition.
* **samplingType**: 'avg' | 'max' | 'min' | 'sum' | string: Defines the sampling type.
* **scalarFunction**: 'avg' | 'max' | 'min' | 'sum' | string: Scalar function applied for filtering.
* **value**: string (Required): Value used in filtering.

## ExecutionState
### Properties
* **message**: string: A descriptive message related to the execution state.
* **state**: string (Required): The execution state value.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## Metric
### Properties
* **metricName**: string (Required): The name of the metric.
* **metricNamespace**: string (Required): The namespace of the metric.

## Signal
### Properties
* **signalFormula**: string (Required): Mathematical formula used to combine multiple metrics.
* **signalSources**: [SignalSource](#signalsource)[] (Required): Sources of metrics used for SLIs.

## SignalSource
### Properties
* **filters**: [Condition](#condition)[] (Required): Filters applied to modify signal values.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string (Required): Namespace of the metric.
* **signalSourceId**: string (Required): Unique identifier for the signal source.
* **sourceAmwAccountManagedIdentity**: string (Required): Managed identity for authenticating the signal source.
* **sourceAmwAccountResourceId**: string (Required): Resource ID of the source AMW account.
* **spatialAggregation**: [SpatialAggregation](#spatialaggregation) (Required): Defines how measurements are aggregated across multiple time series.
* **temporalAggregation**: [TemporalAggregation](#temporalaggregation) (Required): Defines how measurements are aggregated over a specific time window within the same time series.

## SliProperties
### Properties
* **goodSignals**: [Signal](#signal): Represents good signals used in request-based SLI calculations.
* **signals**: [Signal](#signal): Signals used for window-based SLI calculations.
* **totalSignals**: [Signal](#signal): Represents total signals used in request-based SLI calculations.
* **windowUptimeCriteria**: [WindowUptimeCriteria](#windowuptimecriteria): Defines the uptime criteria for window-based SLIs.

## SliResource
### Properties
* **baselineProperties**: [BaselineProperties](#baselineproperties) (Required): Defines the SLO baseline associated with the SLI.
* **category**: 'Availability' | 'Latency' | string (Required): Specifies the category of the SLI, used to classify signals such as Availability and Latency.
* **description**: string {pattern: "^[\s\S]{0,1000}$"} (Required): A user-provided description of the SLI, with a maximum length of 1000 characters.
* **destinationAmwAccounts**: [AmwAccount](#amwaccount)[] (Required): Destination AMW accounts.
* **destinationMetrics**: [Metric](#metric)[] (ReadOnly): The destination Azure Monitor Workspace (AMW) accounts where the SLI emits metrics.
* **enableAlert**: bool (Required): A flag to determine whether alert is enabled.
* **evaluationType**: 'RequestBased' | 'WindowBased' | string (Required): Determines how the SLI is evaluated—either based on request counts or time windows.
* **executionState**: [ExecutionState](#executionstate) (ReadOnly): Indicates the current execution status of the SLI resource in ARM responses.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Indicates the provisioning status of the last operation.
* **sliProperties**: [SliProperties](#sliproperties) (Required): Defines the SLI properties associated with the SLI.
* **streamingRuleId**: string (ReadOnly): The streaming rule Id associated with the Sli resource.
* **streamingRuleLastUpdatedTimestamp**: string (ReadOnly): The streaming rule last updated timestamp associated with the Sli resource.

## SpatialAggregation
### Properties
* **dimensions**: string[] (Required): Dimensions considered for spatial aggregation.
* **type**: 'Average' | 'Count' | 'Max' | 'Min' | 'Sum' | string (Required): Type of spatial aggregation.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TemporalAggregation
### Properties
* **type**: 'Average' | 'Delta' | 'IDelta' | 'IRate' | 'Increase' | 'Max' | 'Min' | 'Rate' | 'Sum' | string (Required): Type of temporal aggregation.
* **windowSizeMinutes**: int: Time window size for aggregation, in minutes.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WindowUptimeCriteria
### Properties
* **comparator**: '<' | '<=' | '>' | '>=' | string (Required): Comparison operator used for uptime evaluation.
* **target**: int (Required): Threshold value used to determine uptime.

