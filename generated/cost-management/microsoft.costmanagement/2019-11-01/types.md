# Microsoft.CostManagement @ 2019-11-01

## Resource Microsoft.CostManagement/exports@2019-11-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExportProperties](#exportproperties)
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/settings@2019-11-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SettingsProperties](#settingsproperties)
* **type**: 'Microsoft.CostManagement/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/views@2019-11-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
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
* **schedule**: [ExportSchedule](#exportschedule)

## ExportDefinition
### Properties
* **dataSet**: [QueryDataset](#querydataset)
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' (Required)
* **timePeriod**: [QueryTimePeriod](#querytimeperiod)
* **type**: 'ActualCost' | 'AmortizedCost' | 'Usage' (Required)

## QueryDataset
### Properties
* **aggregation**: [Dictionary<string,QueryAggregation>](#dictionarystringqueryaggregation)
* **configuration**: [QueryDatasetConfiguration](#querydatasetconfiguration)
* **filter**: [QueryFilter](#queryfilter)
* **granularity**: 'Daily'
* **grouping**: [QueryGrouping](#querygrouping)[]

## Dictionary<string,QueryAggregation>
### Properties
### Additional Properties
* **Additional Properties Type**: [QueryAggregation](#queryaggregation)

## QueryAggregation
### Properties
* **function**: string (Required)
* **name**: string (Required)

## QueryDatasetConfiguration
### Properties
* **columns**: string[]

## QueryFilter
### Properties
* **and**: [QueryFilter](#queryfilter)[]
* **dimensions**: [QueryComparisonExpression](#querycomparisonexpression)
* **or**: [QueryFilter](#queryfilter)[]
* **tags**: [QueryComparisonExpression](#querycomparisonexpression)

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
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required)

## ExportDeliveryDestination
### Properties
* **container**: string (Required)
* **resourceId**: string (Required)
* **rootFolderPath**: string

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required)
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod)
* **status**: 'Active' | 'Inactive'

## ExportRecurrencePeriod
### Properties
* **from**: string (Required)
* **to**: string

## SettingsProperties
### Properties
* **scope**: string

## ViewProperties
### Properties
* **accumulated**: 'false' | 'true'
* **chart**: 'Area' | 'GroupedColumn' | 'Line' | 'StackedColumn' | 'Table'
* **createdOn**: string (ReadOnly)
* **currency**: string (ReadOnly)
* **dateRange**: string (ReadOnly)
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
* **dataSet**: [ReportConfigDataset](#reportconfigdataset)
* **includeMonetaryCommitment**: bool (ReadOnly)
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
* **dimensions**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)
* **or**: [ReportConfigFilter](#reportconfigfilter)[]
* **tagKey**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)
* **tags**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)
* **tagValue**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)

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

