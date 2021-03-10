# Microsoft.Consumption @ 2019-10-01

## Resource Microsoft.Consumption/budgets@2019-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BudgetProperties](#budgetproperties)
* **type**: 'Microsoft.Consumption/budgets' (ReadOnly, DeployTimeConstant)

## BudgetProperties
### Properties
* **amount**: int (Required)
* **category**: string (Required)
* **currentSpend**: [CurrentSpend](#currentspend) (ReadOnly)
* **filter**: [BudgetFilter](#budgetfilter)
* **notifications**: [Dictionary<string,Notification>](#dictionarystringnotification)
* **timeGrain**: 'Annually' | 'BillingAnnual' | 'BillingMonth' | 'BillingQuarter' | 'Monthly' | 'Quarterly' (Required)
* **timePeriod**: [BudgetTimePeriod](#budgettimeperiod) (Required)

## CurrentSpend
### Properties
* **amount**: int (ReadOnly)
* **unit**: string (ReadOnly)

## BudgetFilter
### Properties
* **and**: [BudgetFilterProperties](#budgetfilterproperties)[]
* **dimensions**: [BudgetComparisonExpression](#budgetcomparisonexpression)
* **not**: [BudgetFilterProperties](#budgetfilterproperties)
* **tags**: [BudgetComparisonExpression](#budgetcomparisonexpression)

## BudgetFilterProperties
### Properties
* **dimensions**: [BudgetComparisonExpression](#budgetcomparisonexpression)
* **tags**: [BudgetComparisonExpression](#budgetcomparisonexpression)

## BudgetComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: string (Required)
* **values**: string[] (Required)

## Dictionary<string,Notification>
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
* **thresholdType**: 'Actual'

## BudgetTimePeriod
### Properties
* **endDate**: string
* **startDate**: string (Required)

