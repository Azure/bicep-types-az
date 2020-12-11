# microsoft.insights @ 2019-06-01

## Resource microsoft.insights/actionGroups@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActionGroup
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/actionGroups' (ReadOnly, DeployTimeConstant)

## ActionGroup
### Properties
* **armRoleReceivers**: ArmRoleReceiver[]
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
* **identifierUri**: string
* **name**: string (Required)
* **objectId**: string
* **serviceUri**: string (Required)
* **tenantId**: string
* **useAadAuth**: bool
* **useCommonAlertSchema**: bool (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

