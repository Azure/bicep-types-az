# Microsoft.Insights @ 2020-05-01-preview

## Resource Microsoft.Insights/scheduledQueryRules@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScheduledQueryRuleProperties](#scheduledqueryruleproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Insights/scheduledQueryRules' (ReadOnly, DeployTimeConstant)

## ScheduledQueryRuleProperties
### Properties
* **actions**: [Action](#action)[]
* **createdWithApiVersion**: string (ReadOnly)
* **criteria**: [ScheduledQueryRuleCriteria](#scheduledqueryrulecriteria)
* **description**: string
* **displayName**: string
* **enabled**: bool
* **evaluationFrequency**: string
* **isLegacyLogAnalyticsRule**: bool (ReadOnly)
* **muteActionsDuration**: string
* **overrideQueryTimeRange**: string
* **scopes**: string[]
* **severity**: int
* **targetResourceTypes**: string[]
* **windowSize**: string

## Action
### Properties
* **actionGroupId**: string
* **webHookProperties**: [Dictionary<string,String>](#dictionarystringstring)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduledQueryRuleCriteria
### Properties
* **allOf**: [Condition](#condition)[]

## Condition
### Properties
* **dimensions**: [Dimension](#dimension)[]
* **failingPeriods**: [schemas:6_failingPeriods](#schemas6failingperiods)
* **metricMeasureColumn**: string
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **query**: string
* **resourceIdColumn**: string
* **threshold**: int (Required)
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' (Required)

## Dimension
### Properties
* **name**: string (Required)
* **operator**: 'Exclude' | 'Include' (Required)
* **values**: string[] (Required)

## schemas:6_failingPeriods
### Properties
* **minFailingPeriodsToAlert**: int
* **numberOfEvaluationPeriods**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

