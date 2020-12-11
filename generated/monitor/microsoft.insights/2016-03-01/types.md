# microsoft.insights @ 2016-03-01

## microsoft.insights/alertrules
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertRule (Required)
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/alertrules' (ReadOnly, DeployTimeConstant)

## AlertRule
### Properties
* **actions**: RuleAction[]
* **condition**: RuleCondition (Required)
* **description**: string
* **isEnabled**: bool (Required)
* **lastUpdatedTime**: string (ReadOnly)
* **name**: string (Required)

## RuleAction
* **Discriminator**: odata.type
### Base Properties
### Microsoft.Azure.Management.Insights.Models.RuleEmailAction
#### Properties
* **customEmails**: string[]
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required)
* **sendToServiceOwners**: bool

### Microsoft.Azure.Management.Insights.Models.RuleWebhookAction
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required)
* **properties**: Dictionary<string,String>
* **serviceUri**: string


## Microsoft.Azure.Management.Insights.Models.RuleEmailAction
### Properties
* **customEmails**: string[]
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required)
* **sendToServiceOwners**: bool

## Microsoft.Azure.Management.Insights.Models.RuleWebhookAction
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required)
* **properties**: Dictionary<string,String>
* **serviceUri**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## RuleCondition
* **Discriminator**: odata.type
### Base Properties
* **dataSource**: RuleDataSource
### Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition
#### Properties
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required)
* **windowSize**: string

### Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition
#### Properties
* **aggregation**: ManagementEventAggregationCondition
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required)

### Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required)
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **threshold**: int (Required)
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total'
* **windowSize**: string


## RuleDataSource
* **Discriminator**: odata.type
### Base Properties
* **resourceUri**: string
### Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource
#### Properties
* **claims**: RuleManagementEventClaimsDataSource
* **eventName**: string
* **eventSource**: string
* **level**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (Required)
* **operationName**: string
* **resourceGroupName**: string
* **resourceProviderName**: string
* **status**: string
* **subStatus**: string

### Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource
#### Properties
* **metricName**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required)


## Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource
### Properties
* **claims**: RuleManagementEventClaimsDataSource
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

## Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource
### Properties
* **metricName**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required)

## Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition
### Properties
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required)
* **windowSize**: string

## Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition
### Properties
* **aggregation**: ManagementEventAggregationCondition
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required)

## ManagementEventAggregationCondition
### Properties
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual'
* **threshold**: int
* **windowSize**: string

## Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required)
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **threshold**: int (Required)
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total'
* **windowSize**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## microsoft.insights/logprofiles
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LogProfileProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/logprofiles' (ReadOnly, DeployTimeConstant)

## LogProfileProperties
### Properties
* **categories**: string[] (Required)
* **locations**: string[] (Required)
* **retentionPolicy**: RetentionPolicy (Required)
* **serviceBusRuleId**: string
* **storageAccountId**: string

## RetentionPolicy
### Properties
* **days**: int (Required)
* **enabled**: bool (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

