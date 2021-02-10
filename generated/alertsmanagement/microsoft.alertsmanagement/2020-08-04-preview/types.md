# Microsoft.AlertsManagement @ 2020-08-04-preview

## Resource Microsoft.AlertsManagement/resourceHealthAlertRules@2020-08-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-04-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HealthAlertProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AlertsManagement/resourceHealthAlertRules' (ReadOnly, DeployTimeConstant)

## HealthAlertProperties
### Properties
* **actions**: HealthAlertAction[]
* **criteria**: HealthAlertCriteria (Required)
* **description**: string (Required)
* **enabled**: bool (Required)
* **lastUpdatedTime**: string (ReadOnly)
* **scopes**: string[]

## HealthAlertAction
### Properties
* **actionGroupId**: string
* **webHookProperties**: Dictionary<string,String>

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HealthAlertCriteria
### Properties
* **allOf**: HealthAlertCriterion[]

## HealthAlertCriterion
* **Discriminator**: namespace
### Base Properties
### GuestVmHealth
#### Properties
* **healthStates**: HealthState[] (Required)
* **monitorNames**: string[]
* **monitorTypes**: string[]
* **namespace**: 'GuestVmHealth' (Required)


## GuestVmHealth
### Properties
* **healthStates**: HealthState[] (Required)
* **monitorNames**: string[]
* **monitorTypes**: string[]
* **namespace**: 'GuestVmHealth' (Required)

## HealthState
### Properties
* **healthStateName**: 'Critical' | 'Warning' (Required)
* **severity**: int (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

