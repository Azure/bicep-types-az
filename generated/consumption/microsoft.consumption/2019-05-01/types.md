# Microsoft.Consumption @ 2019-05-01

## Resource Microsoft.Consumption/budgets@2019-05-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BudgetProperties](#budgetproperties): The properties of the budget.
* **type**: 'Microsoft.Consumption/budgets' (ReadOnly, DeployTimeConstant): The resource type

## BudgetProperties
### Properties
* **amount**: int (Required): The total amount of cost to track with the budget
* **category**: 'Cost' | 'Usage' (Required): The category of the budget, whether the budget tracks cost or usage.
* **currentSpend**: [CurrentSpend](#currentspend) (ReadOnly): The current amount of cost which is being tracked for a budget.
* **filters**: [Filters](#filters): May be used to filter budgets by resource group, resource, or meter.
* **notifications**: [BudgetPropertiesNotifications](#budgetpropertiesnotifications): Dictionary of notifications associated with the budget. Budget can have up to five notifications.
* **timeGrain**: 'Annually' | 'BillingAnnual' | 'BillingMonth' | 'BillingQuarter' | 'Monthly' | 'Quarterly' (Required): The time covered by a budget. Tracking of the amount will be reset based on the time grain.
* **timePeriod**: [BudgetTimePeriod](#budgettimeperiod) (Required): The start and end date for a budget.

## CurrentSpend
### Properties
* **amount**: int (ReadOnly): The total amount of cost which is being tracked by the budget.
* **unit**: string (ReadOnly): The unit of measure for the budget amount.

## Filters
### Properties
* **meters**: string[]: The list of filters on meters (GUID), mandatory for budgets of usage category. 
* **resourceGroups**: string[]: The list of filters on resource groups, allowed at subscription level only.
* **resources**: string[]: The list of filters on resources.
* **tags**: [FiltersTags](#filterstags): The dictionary of filters on tags.

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
* **contactEmails**: string[] (Required): Email addresses to send the budget notification to when the threshold is exceeded.
* **contactGroups**: string[]: Action groups to send the budget notification to when the threshold is exceeded.
* **contactRoles**: string[]: Contact roles to send the budget notification to when the threshold is exceeded.
* **enabled**: bool (Required): The notification is enabled or not.
* **operator**: 'EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo' (Required): The comparison operator.
* **threshold**: int (Required): Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000.

## BudgetTimePeriod
### Properties
* **endDate**: string: The end date for the budget. If not provided, we default this to 10 years from the start date.
* **startDate**: string (Required): The start date for the budget.

