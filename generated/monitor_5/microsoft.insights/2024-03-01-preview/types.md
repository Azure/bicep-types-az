# Microsoft.Insights @ 2024-03-01-preview

## Resource Microsoft.Insights/metricAlerts@2024-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetricAlertProperties](#metricalertproperties) (Required): The alert rule properties of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Insights/metricAlerts' (ReadOnly, DeployTimeConstant): The resource type

## DynamicThresholdFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int (Required): The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
* **numberOfEvaluationPeriods**: int (Required): The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required): Type of managed service identity. Previously undocumented values might be returned
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be Azure resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## MetricAlertAction
### Properties
* **actionGroupId**: string: The id of the action group to use.
* **webHookProperties**: [MetricAlertActionWebHookProperties](#metricalertactionwebhookproperties): This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook.

## MetricAlertActionWebHookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertCriteria
* **Discriminator**: odata.type

### Base Properties

### MetricAlertMultipleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [MultiMetricCriteria](#multimetriccriteria)[]: The list of multiple metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (Required): Specifies the type of the alert criteria. Previously undocumented values might be returned

### PromQLCriteria
#### Properties
* **allOf**: [MultiPromQLCriteria](#multipromqlcriteria)[]: The list of promQL criteria. Alert will be raised when all conditions are met.
* **failingPeriods**: [QueryFailingPeriods](#queryfailingperiods): Configuration for failing periods in query-based alerts.
* **odata.type**: 'Microsoft.Azure.Monitor.PromQLCriteria' (Required): Specifies the type of the alert criteria. Previously undocumented values might be returned

### MetricAlertSingleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [MetricCriteria](#metriccriteria)[]: The list of metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (Required): Specifies the type of the alert criteria. Previously undocumented values might be returned

### WebtestLocationAvailabilityCriteria
#### Properties
* **componentId**: string (Required): The Application Insights resource Id.
* **failedLocationCount**: int (Required): The number of failed locations.
* **odata.type**: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (Required): Specifies the type of the alert criteria. Previously undocumented values might be returned
* **webTestId**: string (Required): The Application Insights web test Id.


## MetricAlertProperties
### Properties
* **actionProperties**: [MetricAlertPropertiesActionProperties](#metricalertpropertiesactionproperties): The properties of an action properties.
* **actions**: [MetricAlertAction](#metricalertaction)[]: The array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
* **autoMitigate**: bool: The flag that indicates whether the alert should be auto resolved or not. The default is true.
* **criteria**: [MetricAlertCriteria](#metricalertcriteria) (Required): Defines the specific alert criteria information.
* **customProperties**: [MetricAlertPropertiesCustomProperties](#metricalertpropertiescustomproperties): The properties of an alert payload.
* **description**: string: The description of the metric alert that will be included in the alert email.
* **enabled**: bool (Required): The flag that indicates whether the metric alert is enabled.
* **evaluationFrequency**: string (Required): How often the metric alert is evaluated represented in ISO 8601 duration format.
* **isMigrated**: bool (ReadOnly): The value indicating whether this alert rule is migrated.
* **lastUpdatedTime**: string (ReadOnly): Last time the rule was updated in ISO8601 format.
* **resolveConfiguration**: [ResolveConfiguration](#resolveconfiguration): The configuration for how the alert is resolved. Applicable for PromQLCriteria.
* **scopes**: string[] (Required): The list of resource id's that this metric alert is scoped to. You cannot change the scope of a metric rule based on logs.
* **severity**: int (Required): Alert severity {0, 1, 2, 3, 4}
* **targetResourceRegion**: string: The region of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
* **targetResourceType**: string: The resource type of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
* **windowSize**: string: The period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.

## MetricAlertPropertiesActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertPropertiesCustomProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricCriteria
### Properties
* **criterionType**: 'DynamicThresholdCriterion' | 'StaticThresholdCriterion' | string (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned
* **dimensions**: [MetricDimension](#metricdimension)[]: List of dimension conditions.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string: Namespace of the metric.
* **name**: string (Required): Name of the criteria.
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string (Required): The criteria operator. Previously undocumented values might be returned
* **skipMetricValidation**: bool: Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
* **threshold**: int (Required): The criteria threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' | string (Required): The criteria time aggregation types. Previously undocumented values might be returned
### Additional Properties
* **Additional Properties Type**: any

## MetricDimension
### Properties
* **name**: string (Required): Name of the dimension.
* **operator**: string (Required): The dimension operator. Only 'Include' and 'Exclude' are supported
* **values**: string[] (Required): List of dimension values.

## MultiMetricCriteria
* **Discriminator**: criterionType

### Base Properties
* **dimensions**: [MetricDimension](#metricdimension)[]: List of dimension conditions.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string: Namespace of the metric.
* **name**: string (Required): Name of the criteria.
* **skipMetricValidation**: bool: Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' | string (Required): The criteria time aggregation types. Previously undocumented values might be returned

### DynamicMetricCriteria
#### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' | string (Required): The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern. Previously undocumented values might be returned
* **criterionType**: 'DynamicThresholdCriterion' (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned
* **failingPeriods**: [DynamicThresholdFailingPeriods](#dynamicthresholdfailingperiods) (Required): The minimum number of violations required within the selected lookback time window required to raise an alert.
* **ignoreDataBefore**: string: Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' | string (Required): The operator used to compare the metric value against the threshold. Previously undocumented values might be returned

### MetricCriteria
#### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string (Required): The criteria operator. Previously undocumented values might be returned
* **threshold**: int (Required): The criteria threshold value that activates the alert.


## MultiPromQLCriteria
* **Discriminator**: criterionType

### Base Properties
* **name**: string (Required): Name of the criteria.
* **query**: string (Required): The query used to evaluate the alert rule

### DynamicPromQLCriteria
#### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' | string (Required): The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern. Previously undocumented values might be returned
* **criterionType**: 'DynamicThresholdCriterion' (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned
* **ignoreDataBefore**: string: Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' | string (Required): The operator used to compare the metric value against the threshold. Previously undocumented values might be returned

### StaticPromQLCriteria
#### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned


## QueryFailingPeriods
### Properties
* **for**: string (Required): The amount of time (in ISO 8601 duration format) alert must be active before firing.

## ResolveConfiguration
### Properties
* **autoResolved**: bool (Required): Indicates whether the alert should be auto resolved
* **timeToResolve**: string: The time (in ISO 8601 duration format) after which the alert should be auto resolved

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserIdentityProperties
### Properties
* **clientId**: string (ReadOnly): The client ID of resource identity.
* **principalId**: string (ReadOnly): The principal ID of resource identity.

