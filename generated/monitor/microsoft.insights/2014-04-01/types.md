# Microsoft.Insights @ 2014-04-01

## Resource Microsoft.Insights/alertrules@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertRule](#alertrule) (Required): An alert rule.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Insights/alertrules' (ReadOnly, DeployTimeConstant): The resource type

## AlertRule
### Properties
* **action**: [RuleAction](#ruleaction): The action that is performed when the alert rule becomes active, and when an alert condition is resolved.
* **actions**: [RuleAction](#ruleaction)[]: the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
* **condition**: [RuleCondition](#rulecondition) (Required): The condition that results in the alert rule being activated.
* **description**: string: the description of the alert rule that will be included in the alert email.
* **isEnabled**: bool (Required): the flag that indicates whether the alert rule is enabled.
* **lastUpdatedTime**: string (ReadOnly): Last time the rule was updated in ISO8601 format.
* **name**: string (Required): the name of the alert rule.
* **provisioningState**: string: the provisioning state.

## RuleAction
* **Discriminator**: odata.type

### Base Properties
### RuleEmailAction
#### Properties
* **customEmails**: string[]: the list of administrator's custom email addresses to notify of the activation of the alert.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required): specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
* **sendToServiceOwners**: bool: Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated.

### RuleWebhookAction
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required): specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
* **properties**: [RuleWebhookActionProperties](#rulewebhookactionproperties): the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
* **serviceUri**: string: the service uri to Post the notification when the alert activates or resolves.


## RuleEmailAction
### Properties
* **customEmails**: string[]: the list of administrator's custom email addresses to notify of the activation of the alert.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required): specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
* **sendToServiceOwners**: bool: Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated.

## RuleWebhookAction
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required): specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
* **properties**: [RuleWebhookActionProperties](#rulewebhookactionproperties): the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
* **serviceUri**: string: the service uri to Post the notification when the alert activates or resolves.

## RuleWebhookActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RuleCondition
* **Discriminator**: odata.type

### Base Properties
* **dataSource**: [RuleDataSource](#ruledatasource): The resource from which the rule collects its data.
### LocationThresholdRuleCondition
#### Properties
* **failedLocationCount**: int (Required): the number of locations that must fail to activate the alert.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required): specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.

### ManagementEventRuleCondition
#### Properties
* **aggregation**: [ManagementEventAggregationCondition](#managementeventaggregationcondition): How the data that is collected should be combined over time.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required): specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).

### ThresholdRuleCondition
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required): specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Operators allowed in the rule condition.
* **threshold**: int (Required): the threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total': Aggregation operators allowed in a rule.
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.


## RuleDataSource
* **Discriminator**: odata.type

### Base Properties
* **legacyResourceId**: string: the legacy resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
* **metricNamespace**: string: the namespace of the metric.
* **resourceLocation**: string: the location of the resource.
* **resourceUri**: string: the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
### RuleManagementEventDataSource
#### Properties
* **claims**: [RuleManagementEventClaimsDataSource](#rulemanagementeventclaimsdatasource): The claims for a rule management event data source.
* **eventName**: string: the event name.
* **eventSource**: string: the event source.
* **level**: string: the level.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (Required): specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
* **operationName**: string: The name of the operation that should be checked for. If no name is provided, any operation will match.
* **resourceGroupName**: string: the resource group name.
* **resourceProviderName**: string: the resource provider name.
* **status**: string: The status of the operation that should be checked for. If no status is provided, any status will match.
* **subStatus**: string: the substatus.

### RuleMetricDataSource
#### Properties
* **metricName**: string: the name of the metric that defines what the rule monitors.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required): specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource


## RuleManagementEventDataSource
### Properties
* **claims**: [RuleManagementEventClaimsDataSource](#rulemanagementeventclaimsdatasource): The claims for a rule management event data source.
* **eventName**: string: the event name.
* **eventSource**: string: the event source.
* **level**: string: the level.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (Required): specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
* **operationName**: string: The name of the operation that should be checked for. If no name is provided, any operation will match.
* **resourceGroupName**: string: the resource group name.
* **resourceProviderName**: string: the resource provider name.
* **status**: string: The status of the operation that should be checked for. If no status is provided, any status will match.
* **subStatus**: string: the substatus.

## RuleManagementEventClaimsDataSource
### Properties
* **emailAddress**: string: the email address.

## RuleMetricDataSource
### Properties
* **metricName**: string: the name of the metric that defines what the rule monitors.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required): specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource

## LocationThresholdRuleCondition
### Properties
* **failedLocationCount**: int (Required): the number of locations that must fail to activate the alert.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required): specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.

## ManagementEventRuleCondition
### Properties
* **aggregation**: [ManagementEventAggregationCondition](#managementeventaggregationcondition): How the data that is collected should be combined over time.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required): specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).

## ManagementEventAggregationCondition
### Properties
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual': Operators allowed in the rule condition.
* **threshold**: int: The threshold value that activates the alert.
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.

## ThresholdRuleCondition
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required): specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Operators allowed in the rule condition.
* **threshold**: int (Required): the threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total': Aggregation operators allowed in a rule.
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

