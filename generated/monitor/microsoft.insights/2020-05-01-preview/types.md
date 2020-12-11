# Microsoft.Insights @ 2020-05-01-preview

## Microsoft.Insights/scheduledQueryRules
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduledQueryRuleProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Insights/scheduledQueryRules' (ReadOnly, DeployTimeConstant)

## ScheduledQueryRuleProperties
### Properties
* **actions**: Action[]
* **criteria**: ScheduledQueryRuleCriteria
* **description**: string
* **enabled**: bool
* **evaluationFrequency**: string
* **muteActionsDuration**: string
* **scopes**: string[]
* **severity**: int
* **targetResourceTypes**: string[]
* **windowSize**: string

## Action
### Properties
* **actionGroupId**: string
* **webHookProperties**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ScheduledQueryRuleCriteria
### Properties
* **allOf**: Condition[]

## Condition
### Properties
* **dimensions**: Dimension[]
* **failingPeriods**: schemas:6_failingPeriods
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
### Additional Properties
* **Additional Properties Type**: string

