# Microsoft.AlertsManagement @ 2020-08-04-preview

## Microsoft.AlertsManagement/resourceHealthAlerts
### Properties
* **apiVersion**: '2020-08-04-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HealthAlertProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AlertsManagement/resourceHealthAlerts' (ReadOnly, DeployTimeConstant)

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
### Additional Properties
* **Additional Properties Type**: string

## HealthAlertCriteria
### Properties
* **allOf**: HealthAlertCriterion[]

## HealthAlertCriterion
* **Discriminator**: namespace
### Base Properties
### VmGuestHealth
#### Properties
* **healthMonitorName**: string (Required)
* **healthStates**: HealthState[]
* **namespace**: 'VmGuestHealth' (Required)


## VmGuestHealth
### Properties
* **healthMonitorName**: string (Required)
* **healthStates**: HealthState[]
* **namespace**: 'VmGuestHealth' (Required)

## HealthState
### Properties
* **healthStateName**: string (Required)
* **severity**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

