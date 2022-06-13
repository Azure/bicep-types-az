# Microsoft.CostManagement @ 2020-06-01

## Resource Microsoft.CostManagement/exports@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExportProperties](#exportproperties): The properties of the export.
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/views@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ViewProperties](#viewproperties): The properties of the view.
* **type**: 'Microsoft.CostManagement/views' (ReadOnly, DeployTimeConstant): The resource type

## CommonExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required): Has the definition for the export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): Has delivery information for the export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next execution time.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): If requested, has the most recent execution history for the export.

## ErrorDetails
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error message indicating why the operation failed.

## ExportDataset
### Properties
* **configuration**: [ExportDatasetConfiguration](#exportdatasetconfiguration): The export dataset configuration.
* **granularity**: 'Daily' | string: The granularity of rows in the export. Currently only 'Daily' is supported.

## ExportDatasetConfiguration
### Properties
* **columns**: string[]: Array of column names to be included in the export. If not provided then the export will include all available columns. The available columns can vary by customer channel (see examples).

## ExportDefinition
### Properties
* **dataSet**: [ExportDataset](#exportdataset): The definition for data in the export.
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' | string (Required): The time frame for pulling data for the export. If custom, then a specific time period must be provided.
* **timePeriod**: [ExportTimePeriod](#exporttimeperiod): Has time period for pulling data for the export.
* **type**: 'ActualCost' | 'AmortizedCost' | 'Usage' | string (Required): The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations.

## ExportDeliveryDestination
### Properties
* **container**: string (Required): The name of the container where exports will be uploaded.
* **resourceId**: string (Required): The resource id of the storage account where exports will be delivered.
* **rootFolderPath**: string: The name of the directory where exports will be uploaded.

## ExportDeliveryInfo
### Properties
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required): Has destination for the export being delivered.

## ExportExecution
### Properties
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ExportExecutionProperties](#exportexecutionproperties): The properties of the export execution.
* **type**: string (ReadOnly): Resource type.

## ExportExecutionListResult
### Properties
* **value**: [ExportExecution](#exportexecution)[] (ReadOnly): A list of export executions.

## ExportExecutionProperties
### Properties
* **error**: [ErrorDetails](#errordetails): The details of any error.
* **executionType**: 'OnDemand' | 'Scheduled' | string: The type of the export execution.
* **fileName**: string: The name of the exported file.
* **processingEndTime**: string: The time when the export execution finished.
* **processingStartTime**: string: The time when export was picked up to be executed.
* **runSettings**: [CommonExportProperties](#commonexportproperties): The export settings that were in effect for this execution.
* **status**: 'Completed' | 'DataNotAvailable' | 'Failed' | 'InProgress' | 'NewDataNotAvailable' | 'Queued' | 'Timeout' | string: The last known status of the export execution.
* **submittedBy**: string: The identifier for the entity that executed the export. For OnDemand executions it is the user email. For scheduled executions it is 'System'.
* **submittedTime**: string: The time when export was queued to be executed.

## ExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required): Has the definition for the export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): Has delivery information for the export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next execution time.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): If requested, has the most recent execution history for the export.
* **schedule**: [ExportSchedule](#exportschedule): Has schedule information for the export.

## ExportRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence.

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' | string: The schedule recurrence.
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod): Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
* **status**: 'Active' | 'Inactive' | string: The status of the export's schedule. If 'Inactive', the export's schedule is paused.

## ExportTimePeriod
### Properties
* **from**: string (Required): The start date for export data.
* **to**: string (Required): The end date for export data.

## KpiProperties
### Properties
* **enabled**: bool: show the KPI in the UI?
* **id**: string: ID of resource related to metric (budget).
* **type**: 'Budget' | 'Forecast' | string: KPI type (Forecast, Budget).

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

