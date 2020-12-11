# Microsoft.Consumption @ 2019-10-01

## Microsoft.Consumption/budgets
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
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
* **filter**: BudgetFilter
* **notifications**: Dictionary<string,Notification>
* **timeGrain**: 'Annually' | 'BillingAnnual' | 'BillingMonth' | 'BillingQuarter' | 'Monthly' | 'Quarterly' (Required)
* **timePeriod**: BudgetTimePeriod (Required)

## CurrentSpend
### Properties
* **amount**: int (ReadOnly)
* **unit**: string (ReadOnly)

## BudgetFilter
### Properties
* **and**: BudgetFilterProperties[]
* **dimensions**: BudgetComparisonExpression
* **not**: BudgetFilterProperties
* **tags**: BudgetComparisonExpression

## BudgetFilterProperties
### Properties
* **dimensions**: BudgetComparisonExpression
* **tags**: BudgetComparisonExpression

## BudgetComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: string (Required)
* **values**: string[] (Required)

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
* **thresholdType**: 'Actual'

## BudgetTimePeriod
### Properties
* **endDate**: string
* **startDate**: string (Required)

