# Microsoft.Insights @ 2016-03-01

## Resource Microsoft.Insights/alertrules@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertRule](#alertrule) (Required): An alert rule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Insights/alertrules' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.insights/logprofiles@2016-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogProfileProperties](#logprofileproperties) (Required): The log profile properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'microsoft.insights/logprofiles' (ReadOnly, DeployTimeConstant): The resource type

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
### Microsoft.Azure.Management.Insights.Models.RuleEmailAction
#### Properties
* **customEmails**: string[]: the list of administrator's custom email addresses to notify of the activation of the alert.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required): Specifies the action to send email when the rule condition is evaluated. The discriminator is always RuleEmailAction in this case.
* **sendToServiceOwners**: bool: Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated.

### Microsoft.Azure.Management.Insights.Models.RuleWebhookAction
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required): Specifies the action to post to service when the rule condition is evaluated. The discriminator is always RuleWebhookAction in this case.
* **properties**: [Dictionary<string,String>](#dictionarystringstring): the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
* **serviceUri**: string: the service uri to Post the notification when the alert activates or resolves.


## Microsoft.Azure.Management.Insights.Models.RuleEmailAction
### Properties
* **customEmails**: string[]: the list of administrator's custom email addresses to notify of the activation of the alert.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required): Specifies the action to send email when the rule condition is evaluated. The discriminator is always RuleEmailAction in this case.
* **sendToServiceOwners**: bool: Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated.

## Microsoft.Azure.Management.Insights.Models.RuleWebhookAction
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required): Specifies the action to post to service when the rule condition is evaluated. The discriminator is always RuleWebhookAction in this case.
* **properties**: [Dictionary<string,String>](#dictionarystringstring): the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
* **serviceUri**: string: the service uri to Post the notification when the alert activates or resolves.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RuleCondition
* **Discriminator**: odata.type
### Base Properties
* **dataSource**: [RuleDataSource](#ruledatasource): The resource from which the rule collects its data.
### Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition
#### Properties
* **failedLocationCount**: int (Required): the number of locations that must fail to activate the alert.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required): A rule condition based on a certain number of locations failing.
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.

### Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition
#### Properties
* **aggregation**: [ManagementEventAggregationCondition](#managementeventaggregationcondition): How the data that is collected should be combined over time.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required): A management event rule condition.

### Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required): A rule condition based on a metric crossing a threshold.
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): the operator used to compare the data and the threshold. Possible values include: 'GreaterThan', 'GreaterThanOrEqual', 'LessThan', 'LessThanOrEqual'
* **threshold**: int (Required): the threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total': the time aggregation operator. How the data that are collected should be combined over time. The default value is the PrimaryAggregationType of the Metric. Possible values include: 'Average', 'Minimum', 'Maximum', 'Total', 'Last'
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.


## RuleDataSource
* **Discriminator**: odata.type
### Base Properties
* **legacyResourceId**: string: the legacy resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
* **metricNamespace**: string: the namespace of the metric.
* **resourceLocation**: string: the location of the resource.
* **resourceUri**: string: the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
### Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource
#### Properties
* **claims**: [RuleManagementEventClaimsDataSource](#rulemanagementeventclaimsdatasource): The claims for a rule management event data source.
* **eventName**: string: the event name.
* **eventSource**: string: the event source.
* **level**: string: the level.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (Required): A rule management event data source. The discriminator fields is always RuleManagementEventDataSource in this case.
* **operationName**: string: The name of the operation that should be checked for. If no name is provided, any operation will match.
* **resourceGroupName**: string: the resource group name.
* **resourceProviderName**: string: the resource provider name.
* **status**: string: The status of the operation that should be checked for. If no status is provided, any status will match.
* **subStatus**: string: the substatus.

### Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource
#### Properties
* **metricName**: string: the name of the metric that defines what the rule monitors.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required): A rule metric data source. The discriminator value is always RuleMetricDataSource in this case.


## Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource
### Properties
* **claims**: [RuleManagementEventClaimsDataSource](#rulemanagementeventclaimsdatasource): The claims for a rule management event data source.
* **eventName**: string: the event name.
* **eventSource**: string: the event source.
* **level**: string: the level.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (Required): A rule management event data source. The discriminator fields is always RuleManagementEventDataSource in this case.
* **operationName**: string: The name of the operation that should be checked for. If no name is provided, any operation will match.
* **resourceGroupName**: string: the resource group name.
* **resourceProviderName**: string: the resource provider name.
* **status**: string: The status of the operation that should be checked for. If no status is provided, any status will match.
* **subStatus**: string: the substatus.

## RuleManagementEventClaimsDataSource
### Properties
* **emailAddress**: string: the email address.

## Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource
### Properties
* **metricName**: string: the name of the metric that defines what the rule monitors.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required): A rule metric data source. The discriminator value is always RuleMetricDataSource in this case.

## Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition
### Properties
* **failedLocationCount**: int (Required): the number of locations that must fail to activate the alert.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required): A rule condition based on a certain number of locations failing.
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.

## Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition
### Properties
* **aggregation**: [ManagementEventAggregationCondition](#managementeventaggregationcondition): How the data that is collected should be combined over time.
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required): A management event rule condition.

## ManagementEventAggregationCondition
### Properties
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual': the condition operator. Possible values include: 'GreaterThan', 'GreaterThanOrEqual', 'LessThan', 'LessThanOrEqual'
* **threshold**: int: The threshold value that activates the alert.
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.

## Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required): A rule condition based on a metric crossing a threshold.
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): the operator used to compare the data and the threshold. Possible values include: 'GreaterThan', 'GreaterThanOrEqual', 'LessThan', 'LessThanOrEqual'
* **threshold**: int (Required): the threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total': the time aggregation operator. How the data that are collected should be combined over time. The default value is the PrimaryAggregationType of the Metric. Possible values include: 'Average', 'Minimum', 'Maximum', 'Total', 'Last'
* **windowSize**: string: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LogProfileProperties
### Properties
* **categories**: string[] (Required): the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.'
* **locations**: string[] (Required): List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy) (Required): Specifies the retention policy for the log.
* **serviceBusRuleId**: string: The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
* **storageAccountId**: string: the resource id of the storage account to which you would like to send the Activity Log.

## RetentionPolicy
### Properties
* **days**: int (Required): the number of days for the retention in days. A value of 0 will retain the events indefinitely.
* **enabled**: bool (Required): a value indicating whether the retention policy is enabled.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

