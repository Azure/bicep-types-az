# Microsoft.CostManagement @ 2020-06-01

## Resource Microsoft.CostManagement/views@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ViewProperties
* **type**: 'Microsoft.CostManagement/views' (ReadOnly, DeployTimeConstant)

## ViewProperties
### Properties
* **accumulated**: 'false' | 'true'
* **chart**: 'Area' | 'GroupedColumn' | 'Line' | 'StackedColumn' | 'Table'
* **createdOn**: string (ReadOnly)
* **displayName**: string
* **kpis**: KpiProperties[]
* **metric**: 'ActualCost' | 'AHUB' | 'AmortizedCost'
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
* **type**: string (Required)

## ReportConfigDataset
### Properties
* **aggregation**: Dictionary<string,ReportConfigAggregation>
* **configuration**: ReportConfigDatasetConfiguration
* **filter**: ReportConfigFilter
* **granularity**: 'Daily' | 'Monthly'
* **grouping**: ReportConfigGrouping[]
* **sorting**: ReportConfigSorting[]

## Dictionary<string,ReportConfigAggregation>
### Additional Properties
* **Additional Properties Type**: ReportConfigAggregation

## ReportConfigAggregation
### Properties
* **function**: string (Required)
* **name**: string (Required)

## ReportConfigDatasetConfiguration
### Properties
* **columns**: string[]

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

