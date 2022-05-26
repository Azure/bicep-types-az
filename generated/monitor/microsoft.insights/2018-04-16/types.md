# Microsoft.Insights @ 2018-04-16

## Resource Microsoft.Insights/scheduledQueryRules@2018-04-16
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-16' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogSearchRule](#logsearchrule) (Required): Log Search Rule Definition
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Insights/scheduledQueryRules' (ReadOnly, DeployTimeConstant): The resource type

## LogSearchRule
### Properties
* **action**: [Action](#action) (Required): Action descriptor.
* **autoMitigate**: bool: The flag that indicates whether the alert should be automatically resolved or not. The default is false.
* **createdWithApiVersion**: string (ReadOnly): The api-version used when creating this alert rule
* **description**: string: The description of the Log Search rule.
* **displayName**: string: The display name of the alert rule
* **enabled**: 'false' | 'true' | string: The flag which indicates whether the Log Search rule is enabled. Value should be true or false
* **isLegacyLogAnalyticsRule**: bool (ReadOnly): True if alert rule is legacy Log Analytic rule
* **lastUpdatedTime**: string (ReadOnly): Last time the rule was updated in IS08601 format.
* **provisioningState**: 'Canceled' | 'Deploying' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the scheduled query rule
* **schedule**: [Schedule](#schedule): Defines how often to run the search and the time interval.
* **source**: [Source](#source) (Required): Specifies the log search query.

## Action
* **Discriminator**: odata.type

### Base Properties
### AlertingAction
#### Properties
* **aznsAction**: [AzNsActionGroup](#aznsactiongroup): Azure action group
* **odata.type**: 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction' (Required): Specifies the action. Supported values - AlertingAction, LogToMetricAction
* **severity**: '0' | '1' | '2' | '3' | '4' | string (Required): Severity Level of Alert
* **throttlingInMin**: int: time (in minutes) for which Alerts should be throttled or suppressed.
* **trigger**: [TriggerCondition](#triggercondition) (Required): The condition that results in the Log Search rule.

### LogToMetricAction
#### Properties
* **criteria**: [Criteria](#criteria)[] (Required): Criteria of Metric
* **odata.type**: 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction' (Required): Specifies the action. Supported values - AlertingAction, LogToMetricAction


## AzNsActionGroup
### Properties
* **actionGroup**: string[]: Azure Action Group reference.
* **customWebhookPayload**: string: Custom payload to be sent for all webhook URI in Azure action group
* **emailSubject**: string: Custom subject override for all email ids in Azure action group

## TriggerCondition
### Properties
* **metricTrigger**: [LogMetricTrigger](#logmetrictrigger): A log metrics trigger descriptor.
* **threshold**: int (Required): Result or count threshold based on which rule should be triggered.
* **thresholdOperator**: 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string (Required): Result Condition Evaluation criteria.

## LogMetricTrigger
### Properties
* **metricColumn**: string: Evaluation of metric on a particular column
* **metricTriggerType**: 'Consecutive' | 'Total' | string: Metric Trigger Evaluation Type
* **threshold**: int: The threshold of the metric trigger.
* **thresholdOperator**: 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string: Result Condition Evaluation criteria.

## Criteria
### Properties
* **dimensions**: [Dimension](#dimension)[]: List of Dimensions for creating metric
* **metricName**: string (Required): Name of the metric

## Dimension
### Properties
* **name**: string (Required): Name of the dimension
* **operator**: 'Include' | string (Required): Operator for dimension values
* **values**: string[] (Required): List of dimension values

## Schedule
### Properties
* **frequencyInMinutes**: int (Required): frequency (in minutes) at which rule condition should be evaluated.
* **timeWindowInMinutes**: int (Required): Time window for which data needs to be fetched for query (should be greater than or equal to frequencyInMinutes).

## Source
### Properties
* **authorizedResources**: string[]: List of  Resource referred into query
* **dataSourceId**: string (Required): The resource uri over which log search query is to be run.
* **query**: string: Log search query. Required for action type - AlertingAction
* **queryType**: 'ResultCount' | string: Set value to 'ResultAccount'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

