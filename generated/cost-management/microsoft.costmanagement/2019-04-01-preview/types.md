# Microsoft.CostManagement @ 2019-04-01-preview

## Resource Microsoft.CostManagement/budgets@2019-04-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BudgetProperties](#budgetproperties): The properties of the budget.
* **type**: 'Microsoft.CostManagement/budgets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/views@2019-04-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ViewProperties](#viewproperties): The properties of the view.
* **type**: 'Microsoft.CostManagement/views' (ReadOnly, DeployTimeConstant): The resource type

## BudgetProperties
### Properties
* **amount**: int (Required): The total amount of cost to track with the budget
* **category**: 'Cost' | 'Usage' | string (Required): The category of the budget, whether the budget tracks cost or usage.
* **currentSpend**: [CurrentSpend](#currentspend) (ReadOnly): The current amount of cost which is being tracked for a budget.
* **filter**: [ReportConfigFilter](#reportconfigfilter): May be used to filter budgets.
* **notifications**: [BudgetPropertiesNotifications](#budgetpropertiesnotifications): Dictionary of notifications associated with the budget. Budget can have up to five notifications.
* **timeGrain**: 'Annually' | 'Monthly' | 'Quarterly' | string (Required): The time covered by a budget. Tracking of the amount will be reset based on the time grain.
* **timePeriod**: [BudgetTimePeriod](#budgettimeperiod) (Required): Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.

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

## KpiProperties
### Properties
* **enabled**: bool: show the KPI in the UI?
* **id**: string: ID of resource related to metric (budget).
* **type**: 'Budget' | 'Forecast' | string: KPI type (Forecast, Budget).

## Notification
### Properties
* **contactEmails**: string[] (Required): Email addresses to send the budget notification to when the threshold is exceeded.
* **contactGroups**: string[]: Action groups to send the budget notification to when the threshold is exceeded.
* **contactRoles**: string[]: Contact roles to send the budget notification to when the threshold is exceeded.
* **enabled**: bool (Required): The notification is enabled or not.
* **operator**: 'EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo' | string (Required): The comparison operator.
* **threshold**: int (Required): Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000.

## PivotProperties
### Properties
* **name**: string: Data field to show in view.
* **type**: 'Dimension' | 'TagKey' | string: Data type to show in view.

## ReportConfigAggregation
### Properties
* **function**: 'Sum' | string (Required): The name of the aggregation function to use.
* **name**: string (Required): The name of the column to aggregate.

## ReportConfigComparisonExpression
### Properties
* **name**: string (Required): The name of the column to use in comparison.
* **operator**: 'Contains' | 'In' | string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## ReportConfigDataset
### Properties
* **aggregation**: [ReportConfigDatasetAggregation](#reportconfigdatasetaggregation): Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
* **configuration**: [ReportConfigDatasetConfiguration](#reportconfigdatasetconfiguration): Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
* **filter**: [ReportConfigFilter](#reportconfigfilter): Has filter expression to use in the report.
* **granularity**: 'Daily' | 'Monthly' | string: The granularity of rows in the report.
* **grouping**: [ReportConfigGrouping](#reportconfiggrouping)[]: Array of group by expression to use in the report. Report can have up to 2 group by clauses.
* **sorting**: [ReportConfigSorting](#reportconfigsorting)[]: Array of order by expression to use in the report.

## ReportConfigDatasetAggregation
### Properties
### Additional Properties
* **Additional Properties Type**: [ReportConfigAggregation](#reportconfigaggregation)

## ReportConfigDatasetConfiguration
### Properties
* **columns**: string[]: Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.

## ReportConfigDefinition
### Properties
* **dataset**: [ReportConfigDataset](#reportconfigdataset): Has definition for data in this report config.
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' | string (Required): The time frame for pulling data for the report. If custom, then a specific time period must be provided.
* **timePeriod**: [ReportConfigTimePeriod](#reportconfigtimeperiod): Has time period for pulling data for the report.
* **type**: 'Usage' | string (Required): The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.

## ReportConfigFilter
### Properties
* **and**: [ReportConfigFilter](#reportconfigfilter)[]: The logical "AND" expression. Must have at least 2 items.
* **dimension**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): Has comparison expression for a dimension
* **not**: [ReportConfigFilter](#reportconfigfilter): The logical "NOT" expression.
* **or**: [ReportConfigFilter](#reportconfigfilter)[]: The logical "OR" expression. Must have at least 2 items.
* **tag**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): Has comparison expression for a tag

## ReportConfigGrouping
### Properties
* **name**: string (Required): The name of the column to group. This version supports subscription lowest possible grain.
* **type**: 'Dimension' | 'Tag' | string (Required): Has type of the column to group.

## ReportConfigSorting
### Properties
* **direction**: 'Ascending' | 'Descending' | string: Direction of sort.
* **name**: string (Required): The name of the column to sort.

## ReportConfigTimePeriod
### Properties
* **from**: string (Required): The start date to pull data from.
* **to**: string (Required): The end date to pull data to.

## ViewProperties
### Properties
* **accumulated**: 'false' | 'true' | string: Show costs accumulated over time.
* **chart**: 'Area' | 'GroupedColumn' | 'Line' | 'StackedColumn' | 'Table' | string: Chart type of the main view in Cost Analysis. Required.
* **createdOn**: string (ReadOnly): Date the user created this view.
* **displayName**: string: User input name of the view. Required.
* **kpis**: [KpiProperties](#kpiproperties)[]: List of KPIs to show in Cost Analysis UI.
* **metric**: 'AHUB' | 'ActualCost' | 'AmortizedCost' | string: Metric to use when displaying costs.
* **modifiedOn**: string (ReadOnly): Date when the user last modified this view.
* **pivots**: [PivotProperties](#pivotproperties)[]: Configuration of 3 sub-views in the Cost Analysis UI.
* **query**: [ReportConfigDefinition](#reportconfigdefinition): Query body configuration. Required.
* **scope**: string: Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.

