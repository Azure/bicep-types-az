# microsoft.insights @ 2017-04-01

## Resource microsoft.insights/actionGroups@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionGroup](#actiongroup): The action groups properties of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'microsoft.insights/actionGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.insights/activityLogAlerts@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActivityLogAlert](#activitylogalert): The activity log alert properties of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'microsoft.insights/activityLogAlerts' (ReadOnly, DeployTimeConstant): The resource type

## ActionGroup
### Properties
* **automationRunbookReceivers**: [AutomationRunbookReceiver](#automationrunbookreceiver)[]: The list of AutomationRunbook receivers that are part of this action group.
* **azureAppPushReceivers**: [AzureAppPushReceiver](#azureapppushreceiver)[]: The list of AzureAppPush receivers that are part of this action group.
* **emailReceivers**: [EmailReceiver](#emailreceiver)[]: The list of email receivers that are part of this action group.
* **enabled**: bool (Required): Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
* **groupShortName**: string (Required): The short name of the action group. This will be used in SMS messages.
* **itsmReceivers**: [ItsmReceiver](#itsmreceiver)[]: The list of ITSM receivers that are part of this action group.
* **smsReceivers**: [SmsReceiver](#smsreceiver)[]: The list of SMS receivers that are part of this action group.
* **webhookReceivers**: [WebhookReceiver](#webhookreceiver)[]: The list of webhook receivers that are part of this action group.

## ActivityLogAlert
### Properties
* **actions**: [ActivityLogAlertActionList](#activitylogalertactionlist) (Required): The actions that will activate when the condition is met.
* **condition**: [ActivityLogAlertAllOfCondition](#activitylogalertallofcondition) (Required): The condition that will cause this alert to activate.
* **description**: string: A description of this activity log alert.
* **enabled**: bool: Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.
* **scopes**: string[] (Required): A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item.

## ActivityLogAlertActionGroup
### Properties
* **actionGroupId**: string (Required): The resourceId of the action group. This cannot be null or empty.
* **webhookProperties**: [ActivityLogAlertActionGroupWebhookProperties](#activitylogalertactiongroupwebhookproperties): the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.

## ActivityLogAlertActionGroupWebhookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ActivityLogAlertActionList
### Properties
* **actionGroups**: [ActivityLogAlertActionGroup](#activitylogalertactiongroup)[]: The list of activity log alerts.

## ActivityLogAlertAllOfCondition
### Properties
* **allOf**: [ActivityLogAlertLeafCondition](#activitylogalertleafcondition)[] (Required): The list of activity log alert conditions.

## ActivityLogAlertLeafCondition
### Properties
* **equals**: string (Required): The field value will be compared to this value (case-insensitive) to determine if the condition is met.
* **field**: string (Required): The name of the field that this condition will examine. The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties.'.

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

## WebhookReceiver
### Properties
* **name**: string (Required): The name of the webhook receiver. Names must be unique across all receivers within an action group.
* **serviceUri**: string (Required): The URI where webhooks should be sent.

