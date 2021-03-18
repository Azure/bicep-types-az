# microsoft.insights @ 2018-04-16

## Resource microsoft.insights/scheduledQueryRules@2018-04-16
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-16' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LogSearchRule](#logsearchrule) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'microsoft.insights/scheduledQueryRules' (ReadOnly, DeployTimeConstant)

## LogSearchRule
### Properties
* **action**: [Action](#action) (Required)
* **createdWithApiVersion**: string (ReadOnly)
* **description**: string
* **displayName**: string
* **enabled**: 'false' | 'true'
* **isLegacyLogAnalyticsRule**: bool (ReadOnly)
* **lastUpdatedTime**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Deploying' | 'Failed' | 'Succeeded' (ReadOnly)
* **schedule**: [Schedule](#schedule)
* **source**: [Source](#source) (Required)

## Action
* **Discriminator**: odata.type

### Base Properties
### AlertingAction
#### Properties
* **aznsAction**: [AzNsActionGroup](#aznsactiongroup)
* **odata.type**: 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction' (Required)
* **severity**: '0' | '1' | '2' | '3' | '4' (Required)
* **throttlingInMin**: int
* **trigger**: [TriggerCondition](#triggercondition) (Required)

### LogToMetricAction
#### Properties
* **criteria**: [Criteria](#criteria)[] (Required)
* **odata.type**: 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction' (Required)


## AlertingAction
### Properties
* **aznsAction**: [AzNsActionGroup](#aznsactiongroup)
* **odata.type**: 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction' (Required)
* **severity**: '0' | '1' | '2' | '3' | '4' (Required)
* **throttlingInMin**: int
* **trigger**: [TriggerCondition](#triggercondition) (Required)

## AzNsActionGroup
### Properties
* **actionGroup**: string[]
* **customWebhookPayload**: string
* **emailSubject**: string

## TriggerCondition
### Properties
* **metricTrigger**: [LogMetricTrigger](#logmetrictrigger)
* **threshold**: int (Required)
* **thresholdOperator**: 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)

## LogMetricTrigger
### Properties
* **metricColumn**: string
* **metricTriggerType**: 'Consecutive' | 'Total'
* **threshold**: int
* **thresholdOperator**: 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual'

## LogToMetricAction
### Properties
* **criteria**: [Criteria](#criteria)[] (Required)
* **odata.type**: 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction' (Required)

## Criteria
### Properties
* **dimensions**: [Dimension](#dimension)[]
* **metricName**: string (Required)

## Dimension
### Properties
* **name**: string (Required)
* **operator**: 'Include' (Required)
* **values**: string[] (Required)

## Schedule
### Properties
* **frequencyInMinutes**: int (Required)
* **timeWindowInMinutes**: int (Required)

## Source
### Properties
* **authorizedResources**: string[]
* **dataSourceId**: string (Required)
* **query**: string
* **queryType**: 'ResultCount'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

