# microsoft.insights @ 2017-03-01-preview

## Resource microsoft.insights/activityLogAlerts@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ActivityLogAlert](#activitylogalert)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'microsoft.insights/activityLogAlerts' (ReadOnly, DeployTimeConstant)

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

