# Microsoft.Insights @ 2020-05-01-preview

## Resource Microsoft.Insights/scheduledQueryRules@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduledQueryRuleProperties](#scheduledqueryruleproperties) (Required): The rule properties of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Insights/scheduledQueryRules' (ReadOnly, DeployTimeConstant): The resource type

## Action
### Properties
* **actionGroupId**: string: Action Group resource Id to invoke when the alert fires.
* **webHookProperties**: [ActionWebHookProperties](#actionwebhookproperties): The properties of a webhook object.

## ActionWebHookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Condition
### Properties
* **dimensions**: [Dimension](#dimension)[]: List of Dimensions conditions
* **failingPeriods**: [ConditionFailingPeriods](#conditionfailingperiods): The minimum number of violations required within the selected lookback time window required to raise an alert.
* **metricMeasureColumn**: string: The column containing the metric measure number.
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string (Required): The criteria operator.
* **query**: string: Log query alert
* **resourceIdColumn**: string: The column containing the resource id. The content of the column must be a uri formatted as resource id
* **threshold**: int (Required): the criteria threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' | string (Required): Aggregation type

## ConditionFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int: The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1
* **numberOfEvaluationPeriods**: int: The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1

## Dimension
### Properties
* **name**: string (Required): Name of the dimension
* **operator**: 'Exclude' | 'Include' | string (Required): Operator for dimension values
* **values**: string[] (Required): List of dimension values

## ScheduledQueryRuleCriteria
### Properties
* **allOf**: [Condition](#condition)[]: A list of conditions to evaluate against the specified scopes

## ScheduledQueryRuleProperties
### Properties
* **actions**: [Action](#action)[]
* **createdWithApiVersion**: string (ReadOnly): The api-version used when creating this alert rule
* **criteria**: [ScheduledQueryRuleCriteria](#scheduledqueryrulecriteria): The rule criteria that defines the conditions of the scheduled query rule.
* **description**: string: The description of the scheduled query rule.
* **displayName**: string: The display name of the alert rule
* **enabled**: bool: The flag which indicates whether this scheduled query rule is enabled. Value should be true or false
* **evaluationFrequency**: string: How often the scheduled query rule is evaluated represented in ISO 8601 duration format.
* **isLegacyLogAnalyticsRule**: bool (ReadOnly): True if alert rule is legacy Log Analytic rule
* **muteActionsDuration**: string: Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired.
* **overrideQueryTimeRange**: string: If specified then overrides the query time range (default is WindowSize*NumberOfEvaluationPeriods)
* **scopes**: string[]: The list of resource id's that this scheduled query rule is scoped to.
* **severity**: int: Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest
* **targetResourceTypes**: string[]: List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria
* **windowSize**: string: The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size).

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

