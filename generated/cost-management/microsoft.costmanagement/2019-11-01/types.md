# Microsoft.CostManagement @ 2019-11-01

## Resource Microsoft.CostManagement/exports@2019-11-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExportProperties
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/views@2019-11-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ViewProperties
* **type**: 'Microsoft.CostManagement/views' (ReadOnly, DeployTimeConstant)

## ExportProperties
### Properties
* **definition**: ExportDefinition (Required)
* **deliveryInfo**: ExportDeliveryInfo (Required)
* **format**: 'Csv'
* **schedule**: ExportSchedule

## ExportDefinition
### Properties
* **dataSet**: QueryDataset
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' (Required)
* **timePeriod**: QueryTimePeriod
* **type**: 'ActualCost' | 'AmortizedCost' | 'Usage' (Required)

## QueryDataset
### Properties
* **aggregation**: Dictionary<string,QueryAggregation>
* **configuration**: QueryDatasetConfiguration
* **filter**: QueryFilter
* **granularity**: 'Daily'
* **grouping**: QueryGrouping[]

## Dictionary<string,QueryAggregation>
### Properties
### Additional Properties
* **Additional Properties Type**: QueryAggregation

## QueryAggregation
### Properties
* **function**: string (Required)
* **name**: string (Required)

## QueryDatasetConfiguration
### Properties
* **columns**: string[]

## QueryFilter
### Properties
* **and**: QueryFilter[]
* **dimensions**: QueryComparisonExpression
* **or**: QueryFilter[]
* **tags**: QueryComparisonExpression

## QueryComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: string (Required)
* **values**: string[] (Required)

## QueryGrouping
### Properties
* **name**: string (Required)
* **type**: 'Dimension' | 'Tag' (Required)

## QueryTimePeriod
### Properties
* **from**: string (Required)
* **to**: string (Required)

## ExportDeliveryInfo
### Properties
* **destination**: ExportDeliveryDestination (Required)

## ExportDeliveryDestination
### Properties
* **container**: string (Required)
* **resourceId**: string (Required)
* **rootFolderPath**: string

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required)
* **recurrencePeriod**: ExportRecurrencePeriod
* **status**: 'Active' | 'Inactive'

## ExportRecurrencePeriod
### Properties
* **from**: string (Required)
* **to**: string

## ViewProperties
### Properties
* **accumulated**: 'false' | 'true'
* **chart**: 'Area' | 'GroupedColumn' | 'Line' | 'StackedColumn' | 'Table'
* **createdOn**: string (ReadOnly)
* **currency**: string (ReadOnly)
* **dateRange**: string (ReadOnly)
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
* **dataSet**: ReportConfigDataset
* **includeMonetaryCommitment**: bool (ReadOnly)
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
### Properties
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
* **dimensions**: ReportConfigComparisonExpression
* **or**: ReportConfigFilter[]
* **tags**: ReportConfigComparisonExpression

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

