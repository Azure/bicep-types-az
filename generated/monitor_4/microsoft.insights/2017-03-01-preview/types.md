# microsoft.insights @ 2017-03-01-preview

## Resource microsoft.insights/activityLogAlerts@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActivityLogAlert](#activitylogalert): An Azure activity log alert.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'microsoft.insights/activityLogAlerts' (ReadOnly, DeployTimeConstant): The resource type

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
* **webhookProperties**: [ActivityLogAlertActionGroupWebhookProperties](#activitylogalertactiongroupwebhookproperties): The dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

