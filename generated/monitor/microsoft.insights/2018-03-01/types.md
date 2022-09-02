# Microsoft.Insights @ 2018-03-01

## Resource microsoft.insights/actionGroups@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionGroup](#actiongroup): The action groups properties of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'microsoft.insights/actionGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/metricAlerts@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetricAlertProperties](#metricalertproperties) (Required): The alert rule properties of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Insights/metricAlerts' (ReadOnly, DeployTimeConstant): The resource type

## ActionGroup
### Properties
* **automationRunbookReceivers**: [AutomationRunbookReceiver](#automationrunbookreceiver)[]: The list of AutomationRunbook receivers that are part of this action group.
* **azureAppPushReceivers**: [AzureAppPushReceiver](#azureapppushreceiver)[]: The list of AzureAppPush receivers that are part of this action group.
* **azureFunctionReceivers**: [AzureFunctionReceiver](#azurefunctionreceiver)[]: The list of azure function receivers that are part of this action group.
* **emailReceivers**: [EmailReceiver](#emailreceiver)[]: The list of email receivers that are part of this action group.
* **enabled**: bool (Required): Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
* **groupShortName**: string (Required): The short name of the action group. This will be used in SMS messages.
* **itsmReceivers**: [ItsmReceiver](#itsmreceiver)[]: The list of ITSM receivers that are part of this action group.
* **logicAppReceivers**: [LogicAppReceiver](#logicappreceiver)[]: The list of logic app receivers that are part of this action group.
* **smsReceivers**: [SmsReceiver](#smsreceiver)[]: The list of SMS receivers that are part of this action group.
* **voiceReceivers**: [VoiceReceiver](#voicereceiver)[]: The list of voice receivers that are part of this action group.
* **webhookReceivers**: [WebhookReceiver](#webhookreceiver)[]: The list of webhook receivers that are part of this action group.

## AutomationRunbookReceiver
### Properties
* **automationAccountId**: string (Required): The Azure automation account Id which holds this runbook and authenticate to Azure resource.
* **isGlobalRunbook**: bool (Required): Indicates whether this instance is global runbook.
* **name**: string: Indicates name of the webhook.
* **runbookName**: string (Required): The name for this runbook.
* **serviceUri**: string: The URI where webhooks should be sent.
* **webhookResourceId**: string (Required): The resource id for webhook linked to this runbook.

## AzureAppPushReceiver
### Properties
* **emailAddress**: string (Required): The email address registered for the Azure mobile app.
* **name**: string (Required): The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group.

## AzureFunctionReceiver
### Properties
* **functionAppResourceId**: string (Required): The azure resource id of the function app.
* **functionName**: string (Required): The function name in the function app.
* **httpTriggerUrl**: string (Required): The http trigger url where http request sent to.
* **name**: string (Required): The name of the azure function receiver. Names must be unique across all receivers within an action group.

## DynamicThresholdFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int (Required): The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
* **numberOfEvaluationPeriods**: int (Required): The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.

## EmailReceiver
### Properties
* **emailAddress**: string (Required): The email address of this receiver.
* **name**: string (Required): The name of the email receiver. Names must be unique across all receivers within an action group.
* **status**: 'Disabled' | 'Enabled' | 'NotSpecified' (ReadOnly): The receiver status of the e-mail.

## ItsmReceiver
### Properties
* **connectionId**: string (Required): Unique identification of ITSM connection among multiple defined in above workspace.
* **name**: string (Required): The name of the Itsm receiver. Names must be unique across all receivers within an action group.
* **region**: string (Required): Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
* **ticketConfiguration**: string (Required): JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
* **workspaceId**: string (Required): OMS LA instance identifier.

## LogicAppReceiver
### Properties
* **callbackUrl**: string (Required): The callback url where http request sent to.
* **name**: string (Required): The name of the logic app receiver. Names must be unique across all receivers within an action group.
* **resourceId**: string (Required): The azure resource id of the logic app receiver.

## MetricAlertAction
### Properties
* **actionGroupId**: string: the id of the action group to use.
* **webHookProperties**: [MetricAlertActionWebHookProperties](#metricalertactionwebhookproperties): This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook.

## MetricAlertActionWebHookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertCriteria
* **Discriminator**: odata.type

### Base Properties

### MetricAlertMultipleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [MultiMetricCriteria](#multimetriccriteria)[]: the list of multiple metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (Required): specifies the type of the alert criteria.

### MetricAlertSingleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [MetricCriteria](#metriccriteria)[]: The list of metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (Required): specifies the type of the alert criteria.

### WebtestLocationAvailabilityCriteria
#### Properties
* **componentId**: string (Required): The Application Insights resource Id.
* **failedLocationCount**: int (Required): The number of failed locations.
* **odata.type**: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (Required): specifies the type of the alert criteria.
* **webTestId**: string (Required): The Application Insights web test Id.


## MetricAlertProperties
### Properties
* **actions**: [MetricAlertAction](#metricalertaction)[]: the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
* **autoMitigate**: bool: the flag that indicates whether the alert should be auto resolved or not. The default is true.
* **criteria**: [MetricAlertCriteria](#metricalertcriteria) (Required): defines the specific alert criteria information.
* **description**: string: the description of the metric alert that will be included in the alert email.
* **enabled**: bool (Required): the flag that indicates whether the metric alert is enabled.
* **evaluationFrequency**: string (Required): how often the metric alert is evaluated represented in ISO 8601 duration format.
* **isMigrated**: bool (ReadOnly): the value indicating whether this alert rule is migrated.
* **lastUpdatedTime**: string (ReadOnly): Last time the rule was updated in ISO8601 format.
* **scopes**: string[] (Required): the list of resource id's that this metric alert is scoped to.
* **severity**: int (Required): Alert severity {0, 1, 2, 3, 4}
* **targetResourceRegion**: string: the region of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
* **targetResourceType**: string: the resource type of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
* **windowSize**: string (Required): the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.

## MetricCriteria
### Properties
* **criterionType**: 'DynamicThresholdCriterion' | 'StaticThresholdCriterion' | string (Required): Specifies the type of threshold criteria
* **dimensions**: [MetricDimension](#metricdimension)[]: List of dimension conditions.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string: Namespace of the metric.
* **name**: string (Required): Name of the criteria.
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string (Required): the criteria operator.
* **skipMetricValidation**: bool: Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
* **threshold**: int (Required): the criteria threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' | string (Required): the criteria time aggregation types.
### Additional Properties
* **Additional Properties Type**: any

## MetricDimension
### Properties
* **name**: string (Required): Name of the dimension.
* **operator**: string (Required): the dimension operator. Only 'Include' and 'Exclude' are supported
* **values**: string[] (Required): list of dimension values.

## MultiMetricCriteria
* **Discriminator**: criterionType

### Base Properties
* **dimensions**: [MetricDimension](#metricdimension)[]: List of dimension conditions.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string: Namespace of the metric.
* **name**: string (Required): Name of the criteria.
* **skipMetricValidation**: bool: Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' | string (Required): the criteria time aggregation types.

### DynamicMetricCriteria
#### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' | string (Required): The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
* **criterionType**: 'DynamicThresholdCriterion' (Required): Specifies the type of threshold criteria
* **failingPeriods**: [DynamicThresholdFailingPeriods](#dynamicthresholdfailingperiods) (Required): The minimum number of violations required within the selected lookback time window required to raise an alert.
* **ignoreDataBefore**: string: Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' | string (Required): The operator used to compare the metric value against the threshold.

### MetricCriteria
#### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required): Specifies the type of threshold criteria
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string (Required): the criteria operator.
* **threshold**: int (Required): the criteria threshold value that activates the alert.


## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SmsReceiver
### Properties
* **countryCode**: string (Required): The country code of the SMS receiver.
* **name**: string (Required): The name of the SMS receiver. Names must be unique across all receivers within an action group.
* **phoneNumber**: string (Required): The phone number of the SMS receiver.
* **status**: 'Disabled' | 'Enabled' | 'NotSpecified' (ReadOnly): The status of the receiver.

## VoiceReceiver
### Properties
* **countryCode**: string (Required): The country code of the voice receiver.
* **name**: string (Required): The name of the voice receiver. Names must be unique across all receivers within an action group.
* **phoneNumber**: string (Required): The phone number of the voice receiver.

## WebhookReceiver
### Properties
* **name**: string (Required): The name of the webhook receiver. Names must be unique across all receivers within an action group.
* **serviceUri**: string (Required): The URI where webhooks should be sent.

