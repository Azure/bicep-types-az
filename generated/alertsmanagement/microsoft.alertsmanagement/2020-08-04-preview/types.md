# Microsoft.AlertsManagement @ 2020-08-04-preview

## Resource Microsoft.AlertsManagement/resourceHealthAlertRules@2020-08-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthAlertProperties](#healthalertproperties) (Required): An alert rule.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.AlertsManagement/resourceHealthAlertRules' (ReadOnly, DeployTimeConstant): The resource type

## HealthAlertProperties
### Properties
* **actions**: [HealthAlertAction](#healthalertaction)[]: the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
* **criteria**: [HealthAlertCriteria](#healthalertcriteria) (Required): Specifies the resource health alert criteria for a single resource that has multiple metric criteria.
* **description**: string (Required): the description of the health alert that will be included in the alert email.
* **enabled**: bool (Required): the flag that indicates whether the health alert is enabled.
* **lastUpdatedTime**: string (ReadOnly): Last time the rule was updated in ISO8601 format.
* **scopes**: string[]: the list of resource id's that this health alert is scoped to.

## HealthAlertAction
### Properties
* **actionGroupId**: string: the id of the action group to use.
* **webHookProperties**: [Dictionary<string,String>](#dictionarystringstring): The properties of a webhook object.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HealthAlertCriteria
### Properties
* **allOf**: [HealthAlertCriterion](#healthalertcriterion)[]: The list of metric criteria for this 'all of' operation.

## HealthAlertCriterion
* **Discriminator**: namespace
### Base Properties
### GuestVmHealth
#### Properties
* **healthStates**: [HealthState](#healthstate)[] (Required): Health states to alert on
* **monitorNames**: string[]: Names of health monitor on which to define alert
* **monitorTypes**: string[]: Names of health monitor type on which to define alert
* **namespace**: 'GuestVmHealth' (Required): Specifies the health alert criteria to alert on.


## GuestVmHealth
### Properties
* **healthStates**: [HealthState](#healthstate)[] (Required): Health states to alert on
* **monitorNames**: string[]: Names of health monitor on which to define alert
* **monitorTypes**: string[]: Names of health monitor type on which to define alert
* **namespace**: 'GuestVmHealth' (Required): Specifies the health alert criteria to alert on.

## HealthState
### Properties
* **healthStateName**: 'Critical' | 'Warning' (Required): Health state name. Possible values include: 'Warning', 'Critical'
* **severity**: int (Required): Severity of alert fired

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

