# Microsoft.Insights @ 2014-04-01

## Resource Microsoft.Insights/alertrules@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AlertRule](#alertrule) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Insights/alertrules' (ReadOnly, DeployTimeConstant)

## AlertRule
### Properties
* **action**: [RuleAction](#ruleaction)
* **actions**: [RuleAction](#ruleaction)[]
* **condition**: [RuleCondition](#rulecondition) (Required)
* **description**: string
* **isEnabled**: bool (Required)
* **lastUpdatedTime**: string (ReadOnly)
* **name**: string (Required)
* **provisioningState**: string

## RuleAction
* **Discriminator**: odata.type

### Base Properties
### RuleEmailAction
#### Properties
* **customEmails**: string[]
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required)
* **sendToServiceOwners**: bool

### RuleWebhookAction
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required)
* **properties**: [RuleWebhookActionProperties](#rulewebhookactionproperties)
* **serviceUri**: string


## RuleEmailAction
### Properties
* **customEmails**: string[]
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required)
* **sendToServiceOwners**: bool

## RuleWebhookAction
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required)
* **properties**: [RuleWebhookActionProperties](#rulewebhookactionproperties)
* **serviceUri**: string

## RuleWebhookActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RuleCondition
* **Discriminator**: odata.type

### Base Properties
* **dataSource**: [RuleDataSource](#ruledatasource)
### LocationThresholdRuleCondition
#### Properties
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required)
* **windowSize**: string

### ManagementEventRuleCondition
#### Properties
* **aggregation**: [ManagementEventAggregationCondition](#managementeventaggregationcondition)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required)

### ThresholdRuleCondition
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required)
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **threshold**: int (Required)
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total'
* **windowSize**: string


## RuleDataSource
* **Discriminator**: odata.type

### Base Properties
* **legacyResourceId**: string
* **metricNamespace**: string
* **resourceLocation**: string
* **resourceUri**: string
### RuleManagementEventDataSource
#### Properties
* **claims**: [RuleManagementEventClaimsDataSource](#rulemanagementeventclaimsdatasource)
* **eventName**: string
* **eventSource**: string
* **level**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (Required)
* **operationName**: string
* **resourceGroupName**: string
* **resourceProviderName**: string
* **status**: string
* **subStatus**: string

### RuleMetricDataSource
#### Properties
* **metricName**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required)


## RuleManagementEventDataSource
### Properties
* **claims**: [RuleManagementEventClaimsDataSource](#rulemanagementeventclaimsdatasource)
* **eventName**: string
* **eventSource**: string
* **level**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (Required)
* **operationName**: string
* **resourceGroupName**: string
* **resourceProviderName**: string
* **status**: string
* **subStatus**: string

## RuleManagementEventClaimsDataSource
### Properties
* **emailAddress**: string

## RuleMetricDataSource
### Properties
* **metricName**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required)

## LocationThresholdRuleCondition
### Properties
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required)
* **windowSize**: string

## ManagementEventRuleCondition
### Properties
* **aggregation**: [ManagementEventAggregationCondition](#managementeventaggregationcondition)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required)

## ManagementEventAggregationCondition
### Properties
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual'
* **threshold**: int
* **windowSize**: string

## ThresholdRuleCondition
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required)
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **threshold**: int (Required)
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total'
* **windowSize**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

