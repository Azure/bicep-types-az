# microsoft.insights @ 2016-03-01

## Resource microsoft.insights/logprofiles@2016-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LogProfileProperties (Required)
* **tags**: ResourceTags
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

e**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required)
* **sendToServiceOwners**: bool

### RuleWebhookAction
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required)
* **properties**: RuleWebhookActionProperties
* **serviceUri**: string


## RuleEmailAction
### Properties
* **customEmails**: string[]
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required)
* **sendToServiceOwners**: bool

## RuleWebhookAction
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required)
* **properties**: RuleWebhookActionProperties
* **serviceUri**: string

## RuleWebhookActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RuleCondition
* **Discriminator**: odata.type

### Base Properties
* **dataSource**: RuleDataSource
### LocationThresholdRuleCondition
#### Properties
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required)
* **windowSize**: any

### ManagementEventRuleCondition
#### Properties
* **aggregation**: ManagementEventAggregationCondition
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required)

### ThresholdRuleCondition
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required)
* **threshold**: int (Required)
* **windowSize**: any


## RuleDataSource
* **Discriminator**: odata.type

### Base Properties
* **legacyResourceId**: string
* **metricNamespace**: string
* **resourceLocation**: string
* **resourceUri**: string
### RuleManagementEventDataSource
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

### RuleMetricDataSource
#### Properties
* **metricName**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required)


## RuleManagementEventDataSource
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

## RuleMetricDataSource
### Properties
* **metricName**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required)

## LocationThresholdRuleCondition
### Properties
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required)
* **windowSize**: any

## ManagementEventRuleCondition
### Properties
* **aggregation**: ManagementEventAggregationCondition
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required)

## ManagementEventAggregationCondition
### Properties
* **threshold**: int
* **windowSize**: any

## ThresholdRuleCondition
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required)
* **threshold**: int (Required)
* **windowSize**: any

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

