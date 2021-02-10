# Microsoft.CostManagement @ 2020-06-01

## Resource Microsoft.CostManagement/exports@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExportProperties
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/views@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
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
* **nextRunTimeEstimate**: string (ReadOnly)
* **runHistory**: ExportExecutionListResult
* **schedule**: ExportSchedule

## ExportDefinition
### Properties
* **dataSet**: ExportDataset
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' (Required)
* **timePeriod**: ExportTimePeriod
* **type**: 'ActualCost' | 'AmortizedCost' | 'Usage' (Required)

## ExportDataset
### Properties
* **configuration**: ExportDatasetConfiguration
* **granularity**: 'Daily'

## ExportDatasetConfiguration
### Properties
* **columns**: string[]

## ExportTimePeriod
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

## ExportExecutionListResult
### Properties
* **value**: ExportExecution[] (ReadOnly)

## ExportExecution
### Properties
* **eTag**: string
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ExportExecutionProperties
* **type**: string (ReadOnly)

## ExportExecutionProperties
### Properties
* **error**: ErrorDetails
* **executionType**: 'OnDemand' | 'Scheduled'
* **fileName**: string
* **processingEndTime**: string
* **processingStartTime**: string
* **runSettings**: CommonExportProperties
* **status**: 'Completed' | 'DataNotAvailable' | 'Failed' | 'InProgress' | 'NewDataNotAvailable' | 'Queued' | 'Timeout'
* **submittedBy**: string
* **submittedTime**: string

## ErrorDetails
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## CommonExportProperties
### Properties
* **definition**: ExportDefinition (Required)
* **deliveryInfo**: ExportDeliveryInfo (Required)
* **format**: 'Csv'
* **nextRunTimeEstimate**: string (ReadOnly)
* **runHistory**: ExportExecutionListResult

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly'
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

