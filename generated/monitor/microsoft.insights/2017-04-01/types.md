# microsoft.insights @ 2017-04-01

## Resource microsoft.insights/actionGroups@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActionGroup
* **tags**: ResourceTags
* **type**: 'microsoft.insights/actionGroups' (ReadOnly, DeployTimeConstant)

## Resource microsoft.insights/activityLogAlerts@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActivityLogAlert
* **tags**: ResourceTags
* **type**: 'microsoft.insights/activityLogAlerts' (ReadOnly, DeployTimeConstant)

## ActionGroup
### Properties
* **automationRunbookReceivers**: AutomationRunbookReceiver[]
* **azureAppPushReceivers**: AzureAppPushReceiver[]
* **emailReceivers**: EmailReceiver[]
* **enabled**: bool (Required)
* **groupShortName**: string (Required)
* **itsmReceivers**: ItsmReceiver[]
* **smsReceivers**: SmsReceiver[]
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

## SmsReceiver
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

## ActivityLogAlert
### Properties
* **actions**: ActivityLogAlertActionList (Required)
* **condition**: ActivityLogAlertAllOfCondition (Required)
* **description**: string
* **enabled**: bool
* **scopes**: string[] (Required)

## ActivityLogAlertActionList
### Properties
* **actionGroups**: ActivityLogAlertActionGroup[]

## ActivityLogAlertActionGroup
### Properties
* **actionGroupId**: string (Required)
* **webhookProperties**: ActivityLogAlertActionGroupWebhookProperties

## ActivityLogAlertActionGroupWebhookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ActivityLogAlertAllOfCondition
### Properties
* **allOf**: ActivityLogAlertLeafCondition[] (Required)

## ActivityLogAlertLeafCondition
### Properties
* **equals**: string (Required)
* **field**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

