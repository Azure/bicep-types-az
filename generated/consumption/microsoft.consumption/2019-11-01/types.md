# Microsoft.Consumption @ 2019-11-01

## Resource Microsoft.Consumption/budgets@2019-11-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BudgetProperties](#budgetproperties): The properties of the budget.
* **type**: 'Microsoft.Consumption/budgets' (ReadOnly, DeployTimeConstant): The resource type

## BudgetComparisonExpression
### Properties
* **name**: string (Required): The name of the column to use in comparison.
* **operator**: 'In' | string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## BudgetFilter
### Properties
* **and**: [BudgetFilterProperties](#budgetfilterproperties)[]: The logical "AND" expression. Must have at least 2 items.
* **dimensions**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a dimension
* **not**: [BudgetFilterProperties](#budgetfilterproperties): The logical "NOT" expression.
* **tags**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a tag

## BudgetFilterProperties
### Properties
* **dimensions**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a dimension
* **tags**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a tag

## BudgetProperties
### Properties
* **amount**: int (Required): The total amount of cost to track with the budget
* **category**: 'Cost' | string (Required): The category of the budget, whether the budget tracks cost or usage.
* **currentSpend**: [CurrentSpend](#currentspend) (ReadOnly): The current amount of cost which is being tracked for a budget.
* **filter**: [BudgetFilter](#budgetfilter): May be used to filter budgets by user-specified dimensions and/or tags.
* **forecastSpend**: [ForecastSpend](#forecastspend) (ReadOnly): The forecasted cost which is being tracked for a budget.
* **notifications**: [BudgetPropertiesNotifications](#budgetpropertiesnotifications): Dictionary of notifications associated with the budget. Budget can have up to five notifications.
* **timeGrain**: 'Annually' | 'BillingAnnual' | 'BillingMonth' | 'BillingQuarter' | 'Monthly' | 'Quarterly' | string (Required): The time covered by a budget. Tracking of the amount will be reset based on the time grain. BillingMonth, BillingQuarter, and BillingAnnual are only supported by WD customers
* **timePeriod**: [BudgetTimePeriod](#budgettimeperiod) (Required): Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than twelve months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.

## BudgetPropertiesNotifications
### Properties
### Additional Properties
* **Additional Properties Type**: [Notification](#notification)

## BudgetTimePeriod
### Properties
* **endDate**: string: The end date for the budget. If not provided, we default this to 10 years from the start date.
* **startDate**: string (Required): The start date for the budget.

## CurrentSpend
### Properties
* **amount**: int (ReadOnly): The total amount of cost which is being tracked by the budget.
* **unit**: string (ReadOnly): The unit of measure for the budget amount.

## ForecastSpend
### Properties
* **amount**: int (ReadOnly): The forecasted cost for the total time period which is being tracked by the budget. This value is only provided if the budget contains a forecast alert type.
* **unit**: string (ReadOnly): The unit of measure for the budget amount.

## Notification
### Properties
* **contactEmails**: string[] (Required): Email addresses to send the budget notification to when the threshold is exceeded. Must have at least one contact email or contact group specified at the Subscription or Resource Group scopes. All other scopes must have at least one contact email specified.
* **contactGroups**: string[]: Action groups to send the budget notification to when the threshold is exceeded. Must be provided as a fully qualified Azure resource id. Only supported at Subscription or Resource Group scopes.
* **contactRoles**: string[]: Contact roles to send the budget notification to when the threshold is exceeded.
* **enabled**: bool (Required): The notification is enabled or not.
* **operator**: 'EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo' | string (Required): The comparison operator.
* **threshold**: int (Required): Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000.
* **thresholdType**: 'Actual' | 'Forecasted' | string: The type of threshold

