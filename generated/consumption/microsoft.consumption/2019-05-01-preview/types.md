# Microsoft.Consumption @ 2019-05-01-preview

## Resource Microsoft.Consumption/budgets@2019-05-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BudgetProperties](#budgetproperties)
* **type**: 'Microsoft.Consumption/budgets' (ReadOnly, DeployTimeConstant)

## BudgetProperties
### Properties
* **amount**: int (Required)
* **category**: 'Cost' | 'Usage' (Required)
* **currentSpend**: [CurrentSpend](#currentspend) (ReadOnly)
* **filters**: [Filters](#filters)
* **notifications**: [BudgetPropertiesNotifications](#budgetpropertiesnotifications)
* **timeGrain**: 'Annually' | 'Monthly' | 'Quarterly' (Required)
* **timePeriod**: [BudgetTimePeriod](#budgettimeperiod) (Required)

## CurrentSpend
### Properties
* **amount**: int (ReadOnly)
* **unit**: string (ReadOnly)

## Filters
### Properties
* **meters**: string[]
* **resourceGroups**: string[]
* **resources**: string[]
* **tags**: [FiltersTags](#filterstags)

## FiltersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## BudgetPropertiesNotifications
### Properties
### Additional Properties
* **Additional Properties Type**: [Notification](#notification)

## Notification
### Properties
* **contactEmails**: string[] (Required)
* **contactGroups**: string[]
* **contactRoles**: string[]
* **enabled**: bool (Required)
* **operator**: 'EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo' (Required)
* **threshold**: int (Required)

## BudgetTimePeriod
### Properties
* **endDate**: string
* **startDate**: string (Required)

