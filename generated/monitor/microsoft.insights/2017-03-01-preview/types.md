# microsoft.insights @ 2017-03-01-preview

## Resource microsoft.insights/activityLogAlerts@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActivityLogAlert
* **tags**: ResourceTags
* **type**: 'microsoft.insights/activityLogAlerts' (ReadOnly, DeployTimeConstant)

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

