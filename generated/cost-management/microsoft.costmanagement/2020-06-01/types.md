# Microsoft.CostManagement @ 2020-06-01

## Resource Microsoft.CostManagement/alerts@2020-06-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.CostManagement/alerts' (ReadOnly, DeployTimeConstant): The resource type

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

## AlertProperties
### Properties
* **closeTime**: string (ReadOnly): dateTime in which alert was closed
* **costEntityId**: string (ReadOnly): related budget
* **creationTime**: string (ReadOnly): dateTime in which alert was created
* **definition**: [AlertPropertiesDefinition](#alertpropertiesdefinition) (ReadOnly): defines the type of alert
* **description**: string (ReadOnly): Alert description
* **details**: [AlertPropertiesDetails](#alertpropertiesdetails) (ReadOnly): Alert details
* **modificationTime**: string (ReadOnly): dateTime in which alert was last modified
* **source**: 'Preset' | 'User' | string (ReadOnly): Source of alert
* **status**: 'Active' | 'Dismissed' | 'None' | 'Overridden' | 'Resolved' | string (ReadOnly): alert status
* **statusModificationTime**: string (ReadOnly): dateTime in which the alert status was last modified
* **statusModificationUserName**: string (ReadOnly)

## AlertPropertiesDefinition
### Properties
* **category**: 'Billing' | 'Cost' | 'System' | 'Usage' | string (ReadOnly): Alert category
* **criteria**: 'CostThresholdExceeded' | 'CreditThresholdApproaching' | 'CreditThresholdReached' | 'CrossCloudCollectionError' | 'CrossCloudNewDataAvailable' | 'ForecastCostThresholdExceeded' | 'ForecastUsageThresholdExceeded' | 'GeneralThresholdError' | 'InvoiceDueDateApproaching' | 'InvoiceDueDateReached' | 'MultiCurrency' | 'QuotaThresholdApproaching' | 'QuotaThresholdReached' | 'UsageThresholdExceeded' | string (ReadOnly): Criteria that triggered alert
* **type**: 'Budget' | 'BudgetForecast' | 'Credit' | 'General' | 'Invoice' | 'Quota' | 'xCloud' | string (ReadOnly): type of alert

## AlertPropertiesDetails
### Properties
* **amount**: int (ReadOnly): budget threshold amount
* **contactEmails**: string[] (ReadOnly): list of emails to contact
* **contactGroups**: string[] (ReadOnly): list of action groups to broadcast to
* **contactRoles**: string[] (ReadOnly): list of contact roles
* **currentSpend**: int (ReadOnly): current spend
* **meterFilter**: any[] (ReadOnly): array of meters to filter by
* **operator**: 'EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo' | 'LessThan' | 'LessThanOrEqualTo' | 'None' | string (ReadOnly): operator used to compare currentSpend with amount
* **overridingAlert**: string (ReadOnly): overriding alert
* **periodStartDate**: string (ReadOnly): datetime of periodStartDate
* **resourceFilter**: any[] (ReadOnly): array of resources to filter by
* **resourceGroupFilter**: any[] (ReadOnly): array of resourceGroups to filter by
* **tagFilter**: any (ReadOnly): Any object
* **threshold**: int (ReadOnly): notification threshold percentage as a decimal which activated this alert
* **timeGrainType**: 'Annually' | 'BillingAnnual' | 'BillingMonth' | 'BillingQuarter' | 'Monthly' | 'None' | 'Quarterly' | string (ReadOnly): Type of timegrain cadence
* **triggeredBy**: string (ReadOnly): notificationId that triggered this alert
* **unit**: string (ReadOnly): unit of currency being used

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required): The definition of an export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): The delivery information associated with a export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next execution time.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): Result of listing the execution history of an export.
* **schedule**: [ExportSchedule](#exportschedule): The schedule associated with the export.

## ExportDefinition
### Properties
* **dataSet**: [ExportDataset](#exportdataset): The definition for data in the export.
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' | string (Required): The time frame for pulling data for the query. If custom, then a specific time period must be provided.
* **timePeriod**: [ExportTimePeriod](#exporttimeperiod): The date range for data in the export. This should only be specified with timeFrame set to 'Custom'. The maximum date range is 3 months.
* **type**: 'ActualCost' | 'AmortizedCost' | 'Usage' | string (Required): The type of the query.

## ExportDataset
### Properties
* **configuration**: [ExportDatasetConfiguration](#exportdatasetconfiguration): The export dataset configuration. Allows columns to be selected for the export. If not provided then the export will include all available columns.
* **granularity**: 'Daily' | string: The granularity of rows in the forecast.

## ExportDatasetConfiguration
### Properties
* **columns**: string[]: Array of column names to be included in the export. If not provided then the export will include all available columns. The available columns can vary by customer channel (see examples).

## ExportTimePeriod
### Properties
* **from**: string (Required): The start date for export data.
* **to**: string (Required): The end date for export data.

## ExportDeliveryInfo
### Properties
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required): The destination information for the delivery of the export. To allow access to a storage account, you must register the account's subscription with the Microsoft.CostManagementExports resource provider. This is required once per subscription. When creating an export in the Azure portal, it is done automatically, however API users need to register the subscription. For more information see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services .

## ExportDeliveryDestination
### Properties
* **container**: string (Required): The name of the container where exports will be uploaded.
* **resourceId**: string (Required): The resource id of the storage account where exports will be delivered.
* **rootFolderPath**: string: The name of the directory where exports will be uploaded.

## ExportExecutionListResult
### Properties
* **value**: [ExportExecution](#exportexecution)[] (ReadOnly): A list of export executions.

## ExportExecution
### Properties
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ExportExecutionProperties](#exportexecutionproperties): The properties of the export execution.
* **type**: string (ReadOnly): Resource type.

## ExportExecutionProperties
### Properties
* **error**: [ErrorDetails](#errordetails): The details of the error.
* **executionType**: 'OnDemand' | 'Scheduled' | string: The type of the export execution.
* **fileName**: string: The name of the exported file.
* **processingEndTime**: string: The time when the export execution finished.
* **processingStartTime**: string: The time when export was picked up to be executed.
* **runSettings**: [CommonExportProperties](#commonexportproperties): The common properties of the export.
* **status**: 'Completed' | 'DataNotAvailable' | 'Failed' | 'InProgress' | 'NewDataNotAvailable' | 'Queued' | 'Timeout' | string: The last known status of the export execution.
* **submittedBy**: string: The identifier for the entity that executed the export. For OnDemand executions it is the user email. For scheduled executions it is 'System'.
* **submittedTime**: string: The time when export was queued to be executed.

## ErrorDetails
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error message indicating why the operation failed.

## CommonExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required): The definition of an export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): The delivery information associated with a export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next execution time.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): Result of listing the execution history of an export.

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' | string: The schedule recurrence.
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod): The start and end date for recurrence schedule.
* **status**: 'Active' | 'Inactive' | string: The status of the export's schedule. If 'Inactive', the export's schedule is paused.

## ExportRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence.

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
* **query**: [ReportConfigDefinition](#reportconfigdefinition): The definition of a report config.
* **scope**: string: Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.

## KpiProperties
### Properties
* **enabled**: bool: show the KPI in the UI?
* **id**: string: ID of resource related to metric (budget).
* **type**: 'Budget' | 'Forecast' | string: KPI type (Forecast, Budget).

## PivotProperties
### Properties
* **name**: string: Data field to show in view.
* **type**: 'Dimension' | 'TagKey' | string: Data type to show in view.

## ReportConfigDefinition
### Properties
* **dataset**: [ReportConfigDataset](#reportconfigdataset): The definition of data present in the report.
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' | string (Required): The time frame for pulling data for the report. If custom, then a specific time period must be provided.
* **timePeriod**: [ReportConfigTimePeriod](#reportconfigtimeperiod): The start and end date for pulling data for the report.
* **type**: 'Usage' | string (Required): The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.

## ReportConfigDataset
### Properties
* **aggregation**: [ReportConfigDatasetAggregation](#reportconfigdatasetaggregation): Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
* **configuration**: [ReportConfigDatasetConfiguration](#reportconfigdatasetconfiguration): The configuration of dataset in the report.
* **filter**: [ReportConfigFilter](#reportconfigfilter): The filter expression to be used in the report.
* **granularity**: 'Daily' | 'Monthly' | string: The granularity of rows in the report.
* **grouping**: [ReportConfigGrouping](#reportconfiggrouping)[]: Array of group by expression to use in the report. Report can have up to 2 group by clauses.
* **sorting**: [ReportConfigSorting](#reportconfigsorting)[]: Array of order by expression to use in the report.

## ReportConfigDatasetAggregation
### Properties
### Additional Properties
* **Additional Properties Type**: [ReportConfigAggregation](#reportconfigaggregation)

## ReportConfigAggregation
### Properties
* **function**: 'Sum' | string (Required): The name of the aggregation function to use.
* **name**: string (Required): The name of the column to aggregate.

## ReportConfigDatasetConfiguration
### Properties
* **columns**: string[]: Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.

## ReportConfigFilter
### Properties
* **and**: [ReportConfigFilter](#reportconfigfilter)[]: The logical "AND" expression. Must have at least 2 items.
* **dimension**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): The comparison expression to be used in the report.
* **not**: [ReportConfigFilter](#reportconfigfilter): The filter expression to be used in the report.
* **or**: [ReportConfigFilter](#reportconfigfilter)[]: The logical "OR" expression. Must have at least 2 items.
* **tag**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): The comparison expression to be used in the report.

## ReportConfigComparisonExpression
### Properties
* **name**: string (Required): The name of the column to use in comparison.
* **operator**: 'Contains' | 'In' | string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## ReportConfigGrouping
### Properties
* **name**: string (Required): The name of the column to group. This version supports subscription lowest possible grain.
* **type**: 'Dimension' | 'Tag' | string (Required): The type of the column in the report.

## ReportConfigSorting
### Properties
* **direction**: 'Ascending' | 'Descending' | string: Direction of sort.
* **name**: string (Required): The name of the column to sort.

## ReportConfigTimePeriod
### Properties
* **from**: string (Required): The start date to pull data from.
* **to**: string (Required): The end date to pull data to.

