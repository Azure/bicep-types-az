# Microsoft.AlertsManagement @ 2020-08-04-preview

## Resource Microsoft.AlertsManagement/resourceHealthAlertRules@2020-08-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-04-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HealthAlertProperties](#healthalertproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.AlertsManagement/resourceHealthAlertRules' (ReadOnly, DeployTimeConstant)

## HealthAlertProperties
### Properties
* **actions**: [HealthAlertAction](#healthalertaction)[]
* **criteria**: [HealthAlertCriteria](#healthalertcriteria) (Required)
* **description**: string (Required)
* **enabled**: bool (Required)
* **lastUpdatedTime**: string (ReadOnly)
* **scopes**: string[]

## HealthAlertAction
### Properties
* **actionGroupId**: string
* **webHookProperties**: [HealthAlertActionWebHookProperties](#healthalertactionwebhookproperties)

## HealthAlertActionWebHookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HealthAlertCriteria
### Properties
* **allOf**: [HealthAlertCriterion](#healthalertcriterion)[]

## HealthAlertCriterion
* **Discriminator**: namespace

### Base Properties
### VmGuestHealthAlertCriterion
#### Properties
* **healthStates**: [HealthState](#healthstate)[] (Required)
* **monitorNames**: string[]
* **monitorTypes**: string[]
* **namespace**: 'GuestVmHealth' (Required)


## VmGuestHealthAlertCriterion
### Properties
* **healthStates**: [HealthState](#healthstate)[] (Required)
* **monitorNames**: string[]
* **monitorTypes**: string[]
* **namespace**: 'GuestVmHealth' (Required)

## HealthState
### Properties
* **healthStateName**: 'Critical' | 'Warning' (Required)
* **severity**: int (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

