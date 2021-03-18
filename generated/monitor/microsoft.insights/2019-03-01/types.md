# microsoft.insights @ 2019-03-01

## Resource microsoft.insights/actionGroups@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: string (ReadOnly)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ActionGroup](#actiongroup)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'microsoft.insights/actionGroups' (ReadOnly, DeployTimeConstant)

## ActionGroup
### Properties
* **armRoleReceivers**: [ArmRoleReceiver](#armrolereceiver)[]
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

## ArmRoleReceiver
### Properties
* **name**: string (Required)
* **roleId**: string (Required)
* **useCommonAlertSchema**: bool (Required)

## AutomationRunbookReceiver
### Properties
* **automationAccountId**: string (Required)
* **isGlobalRunbook**: bool (Required)
* **name**: string
* **runbookName**: string (Required)
* **serviceUri**: string
* **useCommonAlertSchema**: bool (Required)
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
* **useCommonAlertSchema**: bool (Required)

## EmailReceiver
### Properties
* **emailAddress**: string (Required)
* **name**: string (Required)
* **status**: 'Disabled' | 'Enabled' | 'NotSpecified' (ReadOnly)
* **useCommonAlertSchema**: bool (Required)

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
* **useCommonAlertSchema**: bool (Required)

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
* **useCommonAlertSchema**: bool (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

