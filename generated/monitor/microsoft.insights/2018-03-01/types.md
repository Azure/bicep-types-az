# Microsoft.Insights @ 2018-03-01

## Resource Microsoft.Insights/metricAlerts@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetricAlertProperties](#metricalertproperties) (Required): An alert rule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Insights/metricAlerts' (ReadOnly, DeployTimeConstant): The resource type

## MetricAlertProperties
### Properties
* **actions**: [MetricAlertAction](#metricalertaction)[]: the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
* **autoMitigate**: bool: the flag that indicates whether the alert should be auto resolved or not. The default is true.
* **criteria**: [MetricAlertCriteria](#metricalertcriteria) (Required): The rule criteria that defines the conditions of the alert rule.
* **description**: string: the description of the metric alert that will be included in the alert email.
* **enabled**: bool (Required): the flag that indicates whether the metric alert is enabled.
* **evaluationFrequency**: string (Required): how often the metric alert is evaluated represented in ISO 8601 duration format.
* **isMigrated**: bool (ReadOnly): the value indicating whether this alert rule is migrated.
* **lastUpdatedTime**: string (ReadOnly): Last time the rule was updated in ISO8601 format.
* **scopes**: string[] (Required): the list of resource id's that this metric alert is scoped to.
* **severity**: int (Required): Alert severity {0, 1, 2, 3, 4}
* **targetResourceRegion**: string: the region of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
* **targetResourceType**: string: the resource type of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
* **windowSize**: string (Required): the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.

## MetricAlertAction
### Properties
* **actionGroupId**: string: the id of the action group to use.
* **webHookProperties**: [Dictionary<string,String>](#dictionarystringstring): This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertCriteria
* **Discriminator**: odata.type
### Base Properties
### Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [MultiMetricCriteria](#multimetriccriteria)[]: the list of multiple metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (Required): Specifies the metric alert criteria for multiple resource that has multiple metric criteria.

### Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [StaticThresholdCriterion](#staticthresholdcriterion)[]: The list of metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (Required): Specifies the metric alert criteria for a single resource that has multiple metric criteria.

### Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria
#### Properties
* **componentId**: string (Required): The Application Insights resource Id.
* **failedLocationCount**: int (Required): The number of failed locations.
* **odata.type**: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (Required): Specifies the metric alert rule criteria for a web test resource.
* **webTestId**: string (Required): The Application Insights web test Id.


## Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria
### Properties
* **allOf**: [MultiMetricCriteria](#multimetriccriteria)[]: the list of multiple metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (Required): Specifies the metric alert criteria for multiple resource that has multiple metric criteria.

## MultiMetricCriteria
* **Discriminator**: criterionType
### Base Properties
* **dimensions**: [MetricDimension](#metricdimension)[]: List of dimension conditions.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string: Namespace of the metric.
* **name**: string (Required): Name of the criteria.
* **skipMetricValidation**: bool: Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' (Required): the criteria time aggregation types.
### DynamicThresholdCriterion
#### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' (Required): The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
* **criterionType**: 'DynamicThresholdCriterion' (Required): Criterion for dynamic threshold.
* **failingPeriods**: [DynamicThresholdFailingPeriods](#dynamicthresholdfailingperiods) (Required): The minimum number of violations required within the selected lookback time window required to raise an alert.
* **ignoreDataBefore**: string: Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' (Required): The operator used to compare the metric value against the threshold.

### StaticThresholdCriterion
#### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required): Criterion to filter metrics.
* **dimensions**: [MetricDimension](#metricdimension)[]: List of dimension conditions.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string: Namespace of the metric.
* **name**: string (Required): Name of the criteria.
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'NotEquals' (Required): the criteria operator.
* **skipMetricValidation**: bool: Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
* **threshold**: int (Required): the criteria threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' (Required): the criteria time aggregation types.
#### Additional Properties
* **Additional Properties Type**: any


## MetricDimension
### Properties
* **name**: string (Required): Name of the dimension.
* **operator**: string (Required): the dimension operator. Only 'Include' and 'Exclude' are supported
* **values**: string[] (Required): list of dimension values.

## DynamicThresholdCriterion
### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' (Required): The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
* **criterionType**: 'DynamicThresholdCriterion' (Required): Criterion for dynamic threshold.
* **failingPeriods**: [DynamicThresholdFailingPeriods](#dynamicthresholdfailingperiods) (Required): The minimum number of violations required within the selected lookback time window required to raise an alert.
* **ignoreDataBefore**: string: Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' (Required): The operator used to compare the metric value against the threshold.

## DynamicThresholdFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int (Required): The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
* **numberOfEvaluationPeriods**: int (Required): The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.

## StaticThresholdCriterion
### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required): Criterion to filter metrics.
* **dimensions**: [MetricDimension](#metricdimension)[]: List of dimension conditions.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string: Namespace of the metric.
* **name**: string (Required): Name of the criteria.
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'NotEquals' (Required): the criteria operator.
* **skipMetricValidation**: bool: Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
* **threshold**: int (Required): the criteria threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' (Required): the criteria time aggregation types.
### Additional Properties
* **Additional Properties Type**: any

## Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria
### Properties
* **allOf**: [StaticThresholdCriterion](#staticthresholdcriterion)[]: The list of metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (Required): Specifies the metric alert criteria for a single resource that has multiple metric criteria.

## Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria
### Properties
* **componentId**: string (Required): The Application Insights resource Id.
* **failedLocationCount**: int (Required): The number of failed locations.
* **odata.type**: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (Required): Specifies the metric alert rule criteria for a web test resource.
* **webTestId**: string (Required): The Application Insights web test Id.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

