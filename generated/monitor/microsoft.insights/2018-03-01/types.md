# Microsoft.Insights @ 2018-03-01

## Resource microsoft.insights/actionGroups@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ActionGroup](#actiongroup)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'microsoft.insights/actionGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/metricAlerts@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MetricAlertProperties](#metricalertproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Insights/metricAlerts' (ReadOnly, DeployTimeConstant)

## ActionGroup
### Properties
* **automationRunbookReceivers**: [AutomationRunbookReceiver](#automationrunbookreceiver)[]
* **azureAppPushReceivers**: [AzureAppPushReceiver](#azureapppushreceiver)[]
* **azureFunctionReceivers**: [AzureFunctionReceiver](#azurefunctionreceiver)[]
* **emailReceivers**: [EmailReceiver](#emailreceiver)[]
* **enabled**: bool (Required)
* **groupShortName**: string (Required)
* **itsmReceivers**: [ItsmReceiver](#itsmreceiver)[]
* **logicAppReceivers**: [LogicAppReceiver](#logicappreceiver)[]
* **smsReceivers**: [SmsReceiver](#smsreceiver)[]
* **voiceReceivers**: [VoiceReceiver](#voicereceiver)[]
* **webhookReceivers**: [WebhookReceiver](#webhookreceiver)[]

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertProperties
### Properties
* **actions**: [MetricAlertAction](#metricalertaction)[]
* **autoMitigate**: bool
* **criteria**: [MetricAlertCriteria](#metricalertcriteria) (Required)
* **description**: string
* **enabled**: bool (Required)
* **evaluationFrequency**: string (Required)
* **isMigrated**: bool (ReadOnly)
* **lastUpdatedTime**: string (ReadOnly)
* **scopes**: string[] (Required)
* **severity**: int (Required)
* **targetResourceRegion**: string
* **targetResourceType**: string
* **windowSize**: string (Required)

## MetricAlertAction
### Properties
* **actionGroupId**: string
* **webHookProperties**: [MetricAlertActionWebHookProperties](#metricalertactionwebhookproperties)

## MetricAlertActionWebHookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertCriteria
* **Discriminator**: odata.type

### Base Properties
### MetricAlertMultipleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [MultiMetricCriteria](#multimetriccriteria)[]
* **odata.type**: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (Required)

### MetricAlertSingleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [MetricCriteria](#metriccriteria)[]
* **odata.type**: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (Required)

### WebtestLocationAvailabilityCriteria
#### Properties
* **componentId**: string (Required)
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (Required)
* **webTestId**: string (Required)


## MetricAlertMultipleResourceMultipleMetricCriteria
### Properties
* **allOf**: [MultiMetricCriteria](#multimetriccriteria)[]
* **odata.type**: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (Required)

## MultiMetricCriteria
* **Discriminator**: criterionType

### Base Properties
* **dimensions**: [MetricDimension](#metricdimension)[]
* **metricName**: string (Required)
* **metricNamespace**: string
* **name**: string (Required)
* **skipMetricValidation**: bool
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' (Required)
### DynamicMetricCriteria
#### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' (Required)
* **criterionType**: 'DynamicThresholdCriterion' (Required)
* **failingPeriods**: [DynamicThresholdFailingPeriods](#dynamicthresholdfailingperiods) (Required)
* **ignoreDataBefore**: string
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' (Required)

### MetricCriteria
#### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required)
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'NotEquals' (Required)
* **threshold**: int (Required)


## MetricDimension
### Properties
* **name**: string (Required)
* **operator**: string (Required)
* **values**: string[] (Required)

## DynamicMetricCriteria
### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' (Required)
* **criterionType**: 'DynamicThresholdCriterion' (Required)
* **failingPeriods**: [DynamicThresholdFailingPeriods](#dynamicthresholdfailingperiods) (Required)
* **ignoreDataBefore**: string
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' (Required)

## DynamicThresholdFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int (Required)
* **numberOfEvaluationPeriods**: int (Required)

## MetricCriteria
### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required)
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'NotEquals' (Required)
* **threshold**: int (Required)

## MetricAlertSingleResourceMultipleMetricCriteria
### Properties
* **allOf**: [MetricCriteria](#metriccriteria)[]
* **odata.type**: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (Required)

## WebtestLocationAvailabilityCriteria
### Properties
* **componentId**: string (Required)
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (Required)
* **webTestId**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

