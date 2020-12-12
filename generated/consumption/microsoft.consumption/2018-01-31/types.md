# Microsoft.Consumption @ 2018-01-31

## Resource Microsoft.Consumption/budgets@2018-01-31
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-01-31' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BudgetProperties
* **type**: 'Microsoft.Consumption/budgets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Consumption/budgets@2018-01-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-31' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BudgetProperties
* **type**: 'Microsoft.Consumption/budgets' (ReadOnly, DeployTimeConstant)

## BudgetProperties
### Properties
* **amount**: int (Required)
* **category**: 'Cost' | 'Usage' (Required)
* **currentSpend**: CurrentSpend (ReadOnly)
* **filters**: Filters
* **notifications**: Dictionary<string,Notification>
* **timeGrain**: 'Annually' | 'Monthly' | 'Quarterly' (Required)
* **timePeriod**: BudgetTimePeriod (Required)

## CurrentSpend
### Properties
* **amount**: int (ReadOnly)
* **unit**: string (ReadOnly)

## Filters
### Properties
* **meters**: string[]
* **resourceGroups**: string[]
* **resources**: string[]

## Dictionary<string,Notification>
### Additional Properties
* **Additional Properties Type**: Notification

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

