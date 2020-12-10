# Microsoft.Insights @ 2018-03-01

## Resource microsoft.insights/actionGroups@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActionGroup
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/actionGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/metricAlerts@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MetricAlertProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Insights/metricAlerts' (ReadOnly, DeployTimeConstant)

## ActionGroup
### Properties
* **automationRunbookReceivers**: AutomationRunbookReceiver[]
* **azureAppPushReceivers**: AzureAppPushReceiver[]
* **azureFunctionReceivers**: AzureFunctionReceiver[]
* **emailReceivers**: EmailReceiver[]
* **enabled**: bool (Required)
* **groupShortName**: string (Required)
* **itsmReceivers**: ItsmReceiver[]
* **logicAppReceivers**: LogicAppReceiver[]
* **smsReceivers**: SmsReceiver[]
* **voiceReceivers**: VoiceReceiver[]
* **webhookReceivers**: WebhookReceiver[]

## AutomationRunbookReceiver
### Properties
* **automationAccountId**: string (Required)
* **isGlobalRunbook**: bool (Required)
* **name**: string
* **runbookName**: string (Required)
* **serviceUri**: string
* **webhookResourceId**: string (Required)

## AzureAppPushReceiver
### Properties
* **emailAddress**: string (Required)
* **name**: string (Required)

## AzureFunctionReceiver
### Properties
* **functionAppResourceId**: string (Required)
* **functionName**: string (Required)
* **httpTriggerUrl**: string (Required)
* **name**: string (Required)

## EmailReceiver
### Properties
* **emailAddress**: string (Required)
* **name**: string (Required)
* **status**: 'Disabled' | 'Enabled' | 'NotSpecified' (ReadOnly)

## ItsmReceiver
### Properties
* **connectionId**: string (Required)
* **name**: string (Required)
* **region**: string (Required)
* **ticketConfiguration**: string (Required)
* **workspaceId**: string (Required)

## LogicAppReceiver
### Properties
* **callbackUrl**: string (Required)
* **name**: string (Required)
* **resourceId**: string (Required)

## SmsReceiver
### Properties
* **countryCode**: string (Required)
* **name**: string (Required)
* **phoneNumber**: string (Required)
* **status**: 'Disabled' | 'Enabled' | 'NotSpecified' (ReadOnly)

## VoiceReceiver
### Properties
* **countryCode**: string (Required)
* **name**: string (Required)
* **phoneNumber**: string (Required)

## WebhookReceiver
### Properties
* **name**: string (Required)
* **serviceUri**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertProperties
### Properties
* **actions**: MetricAlertAction[]
* **autoMitigate**: bool
* **criteria**: MetricAlertCriteria (Required)
* **description**: string (Required)
* **enabled**: bool (Required)
* **evaluationFrequency**: string (Required)
* **lastUpdatedTime**: string (ReadOnly)
* **scopes**: string[]
* **severity**: int (Required)
* **targetResourceRegion**: string
* **targetResourceType**: string
* **windowSize**: string (Required)

## MetricAlertAction
### Properties
* **actionGroupId**: string
* **webHookProperties**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertCriteria
* **Discriminator**: odata.type
### Base Properties
### Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria
#### Properties
* **allOf**: MultiMetricCriteria[]
* **odata.type**: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (Required)

### Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria
#### Properties
* **allOf**: StaticThresholdCriterion[]
* **odata.type**: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (Required)

### Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria
#### Properties
* **componentId**: string (Required)
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (Required)
* **webTestId**: string (Required)


## Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria
### Properties
* **allOf**: MultiMetricCriteria[]
* **odata.type**: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (Required)

## MultiMetricCriteria
* **Discriminator**: criterionType
### Base Properties
* **dimensions**: MetricDimension[]
* **metricName**: string (Required)
* **metricNamespace**: string
* **name**: string (Required)
* **skipMetricValidation**: bool
* **timeAggregation**: any (Required)
### DynamicThresholdCriterion
#### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' (Required)
* **criterionType**: 'DynamicThresholdCriterion' (Required)
* **failingPeriods**: DynamicThresholdFailingPeriods (Required)
* **ignoreDataBefore**: string
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' (Required)

### StaticThresholdCriterion
#### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required)
* **dimensions**: MetricDimension[]
* **metricName**: string (Required)
* **metricNamespace**: string
* **name**: string (Required)
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'NotEquals' (Required)
* **skipMetricValidation**: bool
* **threshold**: int (Required)
* **timeAggregation**: any (Required)
#### Additional Properties
* **Additional Properties Type**: any


## MetricDimension
### Properties
* **name**: string (Required)
* **operator**: string (Required)
* **values**: string[] (Required)

## DynamicThresholdCriterion
### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' (Required)
* **criterionType**: 'DynamicThresholdCriterion' (Required)
* **failingPeriods**: DynamicThresholdFailingPeriods (Required)
* **ignoreDataBefore**: string
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' (Required)

## DynamicThresholdFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int (Required)
* **numberOfEvaluationPeriods**: int (Required)

## StaticThresholdCriterion
### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required)
* **dimensions**: MetricDimension[]
* **metricName**: string (Required)
* **metricNamespace**: string
* **name**: string (Required)
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'NotEquals' (Required)
* **skipMetricValidation**: bool
* **threshold**: int (Required)
* **timeAggregation**: any (Required)
### Additional Properties
* **Additional Properties Type**: any

## Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria
### Properties
* **allOf**: StaticThresholdCriterion[]
* **odata.type**: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (Required)

## Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria
### Properties
* **componentId**: string (Required)
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (Required)
* **webTestId**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

