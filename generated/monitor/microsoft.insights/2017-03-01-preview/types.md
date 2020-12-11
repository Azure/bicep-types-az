# microsoft.insights @ 2017-03-01-preview

## microsoft.insights/activityLogAlerts
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActivityLogAlert
* **tags**: Dictionary<string,String>
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
* **webhookProperties**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ActivityLogAlertAllOfCondition
### Properties
* **allOf**: ActivityLogAlertLeafCondition[] (Required)

## ActivityLogAlertLeafCondition
### Properties
* **equals**: string (Required)
* **field**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

