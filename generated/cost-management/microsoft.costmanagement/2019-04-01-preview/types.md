# Microsoft.CostManagement @ 2019-04-01-preview

## Resource Microsoft.CostManagement/budgets@2019-04-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-04-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BudgetProperties](#budgetproperties)
* **type**: 'Microsoft.CostManagement/budgets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/views@2019-04-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-04-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ViewProperties](#viewproperties)
* **type**: 'Microsoft.CostManagement/views' (ReadOnly, DeployTimeConstant)

## BudgetProperties
### Properties
* **amount**: int (Required)
* **category**: 'Cost' | 'Usage' (Required)
* **currentSpend**: [CurrentSpend](#currentspend) (ReadOnly)
* **filter**: [ReportConfigFilter](#reportconfigfilter)
* **notifications**: [Dictionary<string,Notification>](#dictionarystringnotification)
* **timeGrain**: 'Annually' | 'Monthly' | 'Quarterly' (Required)
* **timePeriod**: [BudgetTimePeriod](#budgettimeperiod) (Required)

## CurrentSpend
### Properties
* **amount**: int (ReadOnly)
* **unit**: string (ReadOnly)

## ReportConfigFilter
### Properties
* **and**: [ReportConfigFilter](#reportconfigfilter)[]
* **dimension**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)
* **not**: [ReportConfigFilter](#reportconfigfilter)
* **or**: [ReportConfigFilter](#reportconfigfilter)[]
* **tag**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)

## ReportConfigComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: 'Contains' | 'In' (Required)
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
* **kpis**: [KpiProperties](#kpiproperties)[]
* **metric**: 'ActualCost' | 'AHUB' | 'AmortizedCost'
* **modifiedOn**: string (ReadOnly)
* **pivots**: [PivotProperties](#pivotproperties)[]
* **query**: [ReportConfigDefinition](#reportconfigdefinition)
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
* **dataset**: [ReportConfigDataset](#reportconfigdataset)
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' (Required)
* **timePeriod**: [ReportConfigTimePeriod](#reportconfigtimeperiod)
* **type**: string (Required)

## ReportConfigDataset
### Properties
* **aggregation**: [Dictionary<string,ReportConfigAggregation>](#dictionarystringreportconfigaggregation)
* **configuration**: [ReportConfigDatasetConfiguration](#reportconfigdatasetconfiguration)
* **filter**: [ReportConfigFilter](#reportconfigfilter)
* **granularity**: 'Daily' | 'Monthly'
* **grouping**: [ReportConfigGrouping](#reportconfiggrouping)[]
* **sorting**: [ReportConfigSorting](#reportconfigsorting)[]

## Dictionary<string,ReportConfigAggregation>
### Properties
### Additional Properties
* **Additional Properties Type**: [ReportConfigAggregation](#reportconfigaggregation)

## ReportConfigAggregation
### Properties
* **function**: string (Required)
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

