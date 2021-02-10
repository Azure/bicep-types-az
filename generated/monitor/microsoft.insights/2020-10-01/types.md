# Microsoft.Insights @ 2020-10-01

## Resource Microsoft.Insights/activityLogAlerts@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertRuleProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Insights/activityLogAlerts' (ReadOnly, DeployTimeConstant)

## AlertRuleProperties
### Properties
* **actions**: ActionList (Required)
* **condition**: AlertRuleAllOfCondition (Required)
* **description**: string
* **enabled**: bool
* **scopes**: string[] (Required)

## ActionList
### Properties
* **actionGroups**: ActionGroup[]

## ActionGroup
### Properties
* **actionGroupId**: string (Required)
* **webhookProperties**: Dictionary<string,String>

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AlertRuleAllOfCondition
### Properties
* **allOf**: AlertRuleAnyOfOrLeafCondition[] (Required)

## AlertRuleAnyOfOrLeafCondition
### Properties
* **anyOf**: AlertRuleLeafCondition[]
* **containsAny**: string[]
* **equals**: string
* **field**: string

## AlertRuleLeafCondition
### Properties
* **containsAny**: string[]
* **equals**: string
* **field**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

