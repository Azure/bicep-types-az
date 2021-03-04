# Microsoft.CostManagement @ 2019-04-01-preview

## Resource Microsoft.CostManagement/budgets@2019-04-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-04-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BudgetProperties
* **type**: 'Microsoft.CostManagement/budgets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/views@2019-04-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-04-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ViewProperties
* **type**: 'Microsoft.CostManagement/views' (ReadOnly, DeployTimeConstant)

## BudgetProperties
### Properties
* **amount**: int (Required)
* **category**: 'Cost' | 'Usage' (Required)
* **currentSpend**: CurrentSpend (ReadOnly)
* **filter**: ReportConfigFilter
* **notifications**: BudgetPropertiesNotifications
* **timeGrain**: 'Annually' | 'Monthly' | 'Quarterly' (Required)
* **timePeriod**: BudgetTimePeriod (Required)

## CurrentSpend
### Properties
* **amount**: int (ReadOnly)
* **unit**: string (ReadOnly)

## ReportConfigFilter
### Properties
* **and**: ReportConfigFilter[]
* **dimension**: ReportConfigComparisonExpression
* **not**: ReportConfigFilter
* **or**: ReportConfigFilter[]
* **tag**: ReportConfigComparisonExpression

## ReportConfigComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: 'Contains' | 'In' (Required)
* **values**: string[] (Required)

## BudgetPropertiesNotifications
### Properties
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

## ViewProperties
### Properties
* **accumulated**: 'false' | 'true'
* **chart**: 'Area' | 'GroupedColumn' | 'Line' | 'StackedColumn' | 'Table'
* **createdOn**: string (ReadOnly)
* **displayName**: string
* **kpis**: KpiProperties[]
* **metric**: 'AHUB' | 'ActualCost' | 'AmortizedCost'
* **modifiedOn**: string (ReadOnly)
* **pivots**: PivotProperties[]
* **query**: ReportConfigDefinition
* **scope**: string

## KpiProperties
### Properties
* **enabled**: bool
* **id**: string
* **type**: 'Budget' | 'Forecast'

## PivotProperties
### Properties
* **name**: string
* **type**: 'Dimension' | 'TagKey'

## ReportConfigDefinition
### Properties
* **dataset**: ReportConfigDataset
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' (Required)
* **timePeriod**: ReportConfigTimePeriod
* **type**: 'Usage' (Required)

## ReportConfigDataset
### Properties
* **aggregation**: ReportConfigDatasetAggregation
* **configuration**: ReportConfigDatasetConfiguration
* **filter**: ReportConfigFilter
* **granularity**: 'Daily' | 'Monthly'
* **grouping**: ReportConfigGrouping[]
* **sorting**: ReportConfigSorting[]

## ReportConfigDatasetAggregation
### Properties
### Additional Properties
* **Additional Properties Type**: ReportConfigAggregation

## ReportConfigAggregation
### Properties
* **function**: 'Sum' (Required)
* **name**: string (Required)

## ReportConfigDatasetConfiguration
### Properties
* **columns**: string[]

## ReportConfigGrouping
### Properties
* **name**: string (Required)
* **type**: 'Dimension' | 'Tag' (Required)

## ReportConfigSorting
### Properties
* **direction**: 'Ascending' | 'Descending'
* **name**: string (Required)

## ReportConfigTimePeriod
### Properties
* **from**: string (Required)
* **to**: string (Required)

