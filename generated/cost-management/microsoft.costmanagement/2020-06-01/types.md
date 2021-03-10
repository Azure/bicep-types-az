# Microsoft.CostManagement @ 2020-06-01

## Resource Microsoft.CostManagement/exports@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExportProperties](#exportproperties)
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/views@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ViewProperties](#viewproperties)
* **type**: 'Microsoft.CostManagement/views' (ReadOnly, DeployTimeConstant)

## ExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required)
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required)
* **format**: 'Csv'
* **nextRunTimeEstimate**: string (ReadOnly)
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult)
* **schedule**: [ExportSchedule](#exportschedule)

## ExportDefinition
### Properties
* **dataSet**: [ExportDataset](#exportdataset)
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' (Required)
* **timePeriod**: [ExportTimePeriod](#exporttimeperiod)
* **type**: 'ActualCost' | 'AmortizedCost' | 'Usage' (Required)

## ExportDataset
### Properties
* **configuration**: [ExportDatasetConfiguration](#exportdatasetconfiguration)
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
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required)

## ExportDeliveryDestination
### Properties
* **container**: string (Required)
* **resourceId**: string (Required)
* **rootFolderPath**: string

## ExportExecutionListResult
### Properties
* **value**: [ExportExecution](#exportexecution)[] (ReadOnly)

## ExportExecution
### Properties
* **eTag**: string
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [ExportExecutionProperties](#exportexecutionproperties)
* **type**: string (ReadOnly)

## ExportExecutionProperties
### Properties
* **error**: [ErrorDetails](#errordetails)
* **executionType**: 'OnDemand' | 'Scheduled'
* **fileName**: string
* **processingEndTime**: string
* **processingStartTime**: string
* **runSettings**: [CommonExportProperties](#commonexportproperties)
* **status**: 'Completed' | 'DataNotAvailable' | 'Failed' | 'InProgress' | 'NewDataNotAvailable' | 'Queued' | 'Timeout'
* **submittedBy**: string
* **submittedTime**: string

## ErrorDetails
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## CommonExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required)
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required)
* **format**: 'Csv'
* **nextRunTimeEstimate**: string (ReadOnly)
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult)

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly'
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod)
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

