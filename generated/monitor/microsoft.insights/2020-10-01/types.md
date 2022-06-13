# Microsoft.Insights @ 2020-10-01

## Resource Microsoft.Insights/activityLogAlerts@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource. Since Azure Activity Log Alerts is a global service, the location of the rules should always be 'global'.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertRuleProperties](#alertruleproperties): The Activity Log Alert rule properties of the resource.
* **tags**: [AzureResourceTags](#azureresourcetags): The tags of the resource.
* **type**: 'Microsoft.Insights/activityLogAlerts' (ReadOnly, DeployTimeConstant): The resource type

## ActionGroup
### Properties
* **actionGroupId**: string (Required): The resource ID of the Action Group. This cannot be null or empty.
* **webhookProperties**: [ActionGroupWebhookProperties](#actiongroupwebhookproperties): the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.

## ActionGroupWebhookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ActionList
### Properties
* **actionGroups**: [ActionGroup](#actiongroup)[]: The list of the Action Groups.

## AlertRuleAllOfCondition
### Properties
* **allOf**: [AlertRuleAnyOfOrLeafCondition](#alertruleanyoforleafcondition)[] (Required): The list of Activity Log Alert rule conditions.

## AlertRuleAnyOfOrLeafCondition
### Properties
* **anyOf**: [AlertRuleLeafCondition](#alertruleleafcondition)[]: An Activity Log Alert rule condition that is met when at least one of its member leaf conditions are met.
* **containsAny**: string[]: The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
* **equals**: string: The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
* **field**: string: The name of the Activity Log event's field that this condition will examine.
The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.

## AlertRuleLeafCondition
### Properties
* **containsAny**: string[]: The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
* **equals**: string: The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
* **field**: string: The name of the Activity Log event's field that this condition will examine.
The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.

## AlertRuleProperties
### Properties
* **actions**: [ActionList](#actionlist) (Required): The actions that will activate when the condition is met.
* **condition**: [AlertRuleAllOfCondition](#alertruleallofcondition) (Required): The condition that will cause this alert to activate.
* **description**: string: A description of this Activity Log Alert rule.
* **enabled**: bool: Indicates whether this Activity Log Alert rule is enabled. If an Activity Log Alert rule is not enabled, then none of its actions will be activated.
* **scopes**: string[] (Required): A list of resource IDs that will be used as prefixes. The alert will only apply to Activity Log events with resource IDs that fall under one of these prefixes. This list must include at least one item.

## AzureResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

