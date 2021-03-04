# microsoft.insights @ 2018-03-01

## Resource microsoft.insights/actionGroups@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActionGroup
* **tags**: ResourceTags
* **type**: 'microsoft.insights/actionGroups' (ReadOnly, DeployTimeConstant)

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

Minimum' | 'Total' (Required)
### DynamicMetricCriteria
#### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' (Required)
* **criterionType**: 'DynamicThresholdCriterion' (Required)
* **failingPeriods**: DynamicThresholdFailingPeriods (Required)
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
* **failingPeriods**: DynamicThresholdFailingPeriods (Required)
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
* **allOf**: MetricCriteria[]
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

