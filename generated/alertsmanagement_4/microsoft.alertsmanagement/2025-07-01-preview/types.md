# Microsoft.AlertsManagement @ 2025-07-01-preview

## Function previewAlertRule (Microsoft.AlertsManagement@2025-07-01-preview)
* **Resource**: Microsoft.AlertsManagement
* **ApiVersion**: 2025-07-01-preview
* **Input**: [PreviewAlertRuleRequest](#previewalertrulerequest)
* **Output**: [PreviewAlertRuleResponse](#previewalertruleresponse)

## DimensionNameAndValue
### Properties
* **name**: string (Required): Name of the dimension
* **value**: string (Required): Value of the dimension

## EvaluatedPeriod
### Properties
* **highThreshold**: int: The high threshold value for the evaluation period.
* **lowThreshold**: int: The low threshold value for the evaluation period.
* **metricValue**: int: The metric value for the evaluation period.
* **thresholdMet**: bool: Indicates whether the threshold was met during the evaluation period.
* **timestamp**: string: The timestamp of the evaluated period.

## Evaluation
### Properties
* **alertState**: 'Fired' | 'Firing' | 'NoAlert' | 'Resolved' | 'Resolving' | string: The state of the alert after the evaluation.
* **evaluatedPeriods**: [EvaluatedPeriod](#evaluatedperiod)[]: An array of evaluated periods.
* **evaluationTime**: string: The time when the evaluation was performed.
* **thresholdMet**: bool: Indicates whether the threshold was met for this evaluation.

## LogAlertRuleCondition
### Properties
* **alertSensitivity**: string: The extent of deviation required to trigger an alert. Allowed values are 'Low', 'Medium' and 'High'. This will affect how tight the threshold is to the metric series pattern. Relevant and required only for dynamic threshold rules of the kind LogAlert.
* **criterionType**: 'DynamicThresholdCriterion' | 'StaticThresholdCriterion' | string: Specifies the type of threshold criteria
* **dimensions**: [LogAlertRuleDimension](#logalertruledimension)[]: List of Dimensions conditions
* **failingPeriods**: [LogAlertRuleConditionFailingPeriods](#logalertruleconditionfailingperiods): The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
* **ignoreDataBefore**: string: Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format). Relevant only for dynamic threshold rules of the kind LogAlert.
* **metricMeasureColumn**: string: The column containing the metric measure number. Relevant only for rules of the kind LogAlert.
* **metricName**: string: The name of the metric to be sent. Relevant and required only for rules of the kind LogToMetric.
* **operator**: 'Equals' | 'GreaterOrLessThan' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string: The criteria operator. Relevant and required only for rules of the kind LogAlert.
* **query**: string: KQL log query alert
* **resourceIdColumn**: string: The column containing the resource id. The content of the column must be a uri formatted as resource id. Relevant only for rules of the kind LogAlert.
* **threshold**: int: the criteria threshold value that activates the alert. Relevant and required only for static threshold rules of the kind LogAlert.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' | string: Aggregation type. Relevant and required only for rules of the kind LogAlert.

## LogAlertRuleConditionFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int: The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1
* **numberOfEvaluationPeriods**: int: The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1

## LogAlertRuleCriteria
### Properties
* **allOf**: [LogAlertRuleCondition](#logalertrulecondition)[]: A list of conditions to evaluate against the specified scopes

## LogAlertRuleDimension
### Properties
* **name**: string (Required): Name of the dimension
* **operator**: 'Exclude' | 'Include' | string (Required): Operator for dimension values
* **values**: string[] (Required): List of dimension values

## LogAlertRuleProperties
### Properties
* **criteria**: [LogAlertRuleCriteria](#logalertrulecriteria): The rule criteria that defines the conditions of the scheduled query rule.
* **description**: string: The description of the scheduled query rule.
* **displayName**: string: The display name of the alert rule
* **enabled**: bool: The flag which indicates whether this scheduled query rule is enabled. Value should be true or false
* **evaluationFrequency**: string: How often the scheduled query rule is evaluated represented in ISO 8601 duration format. Relevant and required only for rules of the kind LogAlert.
* **overrideQueryTimeRange**: string: If specified then overrides the query time range (default is WindowSize*NumberOfEvaluationPeriods). Relevant only for rules of the kind LogAlert.
* **scopes**: string[]: The list of resource id's that this scheduled query rule is scoped to.
* **severity**: int: Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest. Relevant and required only for rules of the kind LogAlert.
* **targetResourceTypes**: string[]: List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria. Relevant only for rules of the kind LogAlert
* **windowSize**: string: The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size). Relevant and required only for rules of the kind LogAlert.

## LogAlertRuleResource
### Properties
* **kind**: 'EventLogAlert' | 'LogAlert' | 'LogToMetric' | string: Indicates the type of scheduled query rule. The default is LogAlert.
* **location**: string (Required): The geo-location where the resource lives
* **properties**: [LogAlertRuleProperties](#logalertruleproperties) (Required): The rule properties of the resource.
* **tags**: [LogAlertRuleResourceTags](#logalertruleresourcetags): Resource tags.

## LogAlertRuleResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PreviewAlertRuleRequest
### Properties
* **location**: string (Required): The location of the rule resource.
* **properties**: [PreviewAlertRuleRequestProperties](#previewalertrulerequestproperties) (Required)

## PreviewAlertRuleRequestProperties
### Properties
* **scheduledQueryRuleProperties**: [LogAlertRuleResource](#logalertruleresource): The properties of the alert rule to preview.
* **timespan**: string (Required): Specifies the timespan of the preview in ISO 8601 duration format.

## PreviewAlertRuleResponse
### Properties
* **rulePreviewResults**: [RulePreviewResult](#rulepreviewresult)[]: An array of rule preview results.

## RulePreviewResult
### Properties
* **dimensionCombination**: [DimensionNameAndValue](#dimensionnameandvalue)[]: The list of dimensions for the evaluation.
* **evaluations**: [Evaluation](#evaluation)[]: An array of evaluations.

