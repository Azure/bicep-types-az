# Microsoft.Insights @ 2021-09-01

## Resource Microsoft.Insights/actionGroups@2021-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionGroup](#actiongroup): The action groups properties of the resource.
* **tags**: [AzureResourceTags](#azureresourcetags): Resource tags
* **type**: 'Microsoft.Insights/actionGroups' (ReadOnly, DeployTimeConstant): The resource type

## ActionGroup
### Properties
* **armRoleReceivers**: [ArmRoleReceiver](#armrolereceiver)[]: The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported.
* **automationRunbookReceivers**: [AutomationRunbookReceiver](#automationrunbookreceiver)[]: The list of AutomationRunbook receivers that are part of this action group.
* **azureAppPushReceivers**: [AzureAppPushReceiver](#azureapppushreceiver)[]: The list of AzureAppPush receivers that are part of this action group.
* **azureFunctionReceivers**: [AzureFunctionReceiver](#azurefunctionreceiver)[]: The list of azure function receivers that are part of this action group.
* **emailReceivers**: [EmailReceiver](#emailreceiver)[]: The list of email receivers that are part of this action group.
* **enabled**: bool (Required): Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
* **eventHubReceivers**: [EventHubReceiver](#eventhubreceiver)[]: The list of event hub receivers that are part of this action group.
* **groupShortName**: string (Required): The short name of the action group. This will be used in SMS messages.
* **itsmReceivers**: [ItsmReceiver](#itsmreceiver)[]: The list of ITSM receivers that are part of this action group.
* **logicAppReceivers**: [LogicAppReceiver](#logicappreceiver)[]: The list of logic app receivers that are part of this action group.
* **smsReceivers**: [SmsReceiver](#smsreceiver)[]: The list of SMS receivers that are part of this action group.
* **voiceReceivers**: [VoiceReceiver](#voicereceiver)[]: The list of voice receivers that are part of this action group.
* **webhookReceivers**: [WebhookReceiver](#webhookreceiver)[]: The list of webhook receivers that are part of this action group.

## ArmRoleReceiver
### Properties
* **name**: string (Required): The name of the arm role receiver. Names must be unique across all receivers within an action group.
* **roleId**: string (Required): The arm role id.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

## AutomationRunbookReceiver
### Properties
* **automationAccountId**: string (Required): The Azure automation account Id which holds this runbook and authenticate to Azure resource.
* **isGlobalRunbook**: bool (Required): Indicates whether this instance is global runbook.
* **name**: string: Indicates name of the webhook.
* **runbookName**: string (Required): The name for this runbook.
* **serviceUri**: string: The URI where webhooks should be sent.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.
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
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

## AzureResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EmailReceiver
### Properties
* **emailAddress**: string (Required): The email address of this receiver.
* **name**: string (Required): The name of the email receiver. Names must be unique across all receivers within an action group.
* **status**: 'Disabled' | 'Enabled' | 'NotSpecified' (ReadOnly): The receiver status of the e-mail.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

## EventHubReceiver
### Properties
* **eventHubName**: string (Required): The name of the specific Event Hub queue
* **eventHubNameSpace**: string (Required): The Event Hub namespace
* **name**: string (Required): The name of the Event hub receiver. Names must be unique across all receivers within an action group.
* **subscriptionId**: string (Required): The Id for the subscription containing this event hub
* **tenantId**: string: The tenant Id for the subscription containing this event hub
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

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
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

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
* **identifierUri**: string: Indicates the identifier uri for aad auth.
* **name**: string (Required): The name of the webhook receiver. Names must be unique across all receivers within an action group.
* **objectId**: string: Indicates the webhook app object Id for aad auth.
* **serviceUri**: string (Required): The URI where webhooks should be sent.
* **tenantId**: string: Indicates the tenant id for aad auth.
* **useAadAuth**: bool: Indicates whether or not use AAD authentication.
* **useCommonAlertSchema**: bool: Indicates whether to use common alert schema.

