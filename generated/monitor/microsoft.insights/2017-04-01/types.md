# microsoft.insights @ 2017-04-01

## Resource microsoft.insights/actionGroups@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ActionGroup](#actiongroup)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'microsoft.insights/actionGroups' (ReadOnly, DeployTimeConstant)

## Resource microsoft.insights/activityLogAlerts@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ActivityLogAlert](#activitylogalert)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'microsoft.insights/activityLogAlerts' (ReadOnly, DeployTimeConstant)

## ActionGroup
### Properties
* **automationRunbookReceivers**: [AutomationRunbookReceiver](#automationrunbookreceiver)[]
* **azureAppPushReceivers**: [AzureAppPushReceiver](#azureapppushreceiver)[]
* **emailReceivers**: [EmailReceiver](#emailreceiver)[]
* **enabled**: bool (Required)
* **groupShortName**: string (Required)
* **itsmReceivers**: [ItsmReceiver](#itsmreceiver)[]
* **smsReceivers**: [SmsReceiver](#smsreceiver)[]
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

## SmsReceiver
### Properties
* **countryCode**: string (Required)
* **name**: string (Required)
* **phoneNumber**: string (Required)
* **status**: 'Disabled' | 'Enabled' | 'NotSpecified' (ReadOnly)

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
* **actions**: [ActivityLogAlertActionList](#activitylogalertactionlist) (Required)
* **condition**: [ActivityLogAlertAllOfCondition](#activitylogalertallofcondition) (Required)
* **description**: string
* **enabled**: bool
* **scopes**: string[] (Required)

## ActivityLogAlertActionList
### Properties
* **actionGroups**: [ActivityLogAlertActionGroup](#activitylogalertactiongroup)[]

## ActivityLogAlertActionGroup
### Properties
* **actionGroupId**: string (Required)
* **webhookProperties**: [ActivityLogAlertActionGroupWebhookProperties](#activitylogalertactiongroupwebhookproperties)

## ActivityLogAlertActionGroupWebhookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ActivityLogAlertAllOfCondition
### Properties
* **allOf**: [ActivityLogAlertLeafCondition](#activitylogalertleafcondition)[] (Required)

## ActivityLogAlertLeafCondition
### Properties
* **equals**: string (Required)
* **field**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

