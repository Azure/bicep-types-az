# Microsoft.Consumption @ 2017-12-30-preview

## Resource Microsoft.Consumption/budgets@2017-12-30-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-12-30-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BudgetProperties
* **type**: 'Microsoft.Consumption/budgets' (ReadOnly, DeployTimeConstant)

## BudgetProperties
### Properties
* **amount**: int (Required)
* **category**: string (Required)
* **currentSpend**: CurrentSpend (ReadOnly)
* **notifications**: Dictionary<string,Notification>
* **timeGrain**: 'Annually' | 'Monthly' | 'Quarterly' (Required)
* **timePeriod**: BudgetTimePeriod (Required)

## CurrentSpend
### Properties
* **amount**: int (ReadOnly)
* **unit**: string (ReadOnly)

## Dictionary<string,Notification>
### Additional Properties
* **Additional Properties Type**: Notification

## Notification
### Properties
* **contactEmails**: string[] (Required)
* **contactRoles**: string[]
* **enabled**: bool (Required)
* **operator**: 'EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo' (Required)
* **threshold**: int (Required)

## BudgetTimePeriod
### Properties
* **endDate**: string
* **startDate**: string (Required)

