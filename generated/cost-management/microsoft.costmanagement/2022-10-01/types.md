# Microsoft.CostManagement @ 2022-10-01

## Resource Microsoft.CostManagement/alerts@2022-10-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): Alert properties.
* **type**: 'Microsoft.CostManagement/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/exports@2022-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExportProperties](#exportproperties): The properties of the export.
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/scheduledActions@2022-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Resource Etag. For update calls, eTag is optional and can be specified to achieve optimistic concurrency. Fetch the resource's eTag by doing a 'GET' call first and then including the latest eTag as part of the request body or 'If-Match' header while performing the update. For create calls, eTag is not required.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Email' | 'InsightAlert' | string: Kind of the scheduled action.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduledActionProperties](#scheduledactionproperties): The properties of the scheduled action.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Kind of the scheduled action.
* **type**: 'Microsoft.CostManagement/scheduledActions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/views@2022-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ViewProperties](#viewproperties): The properties of the view.
* **type**: 'Microsoft.CostManagement/views' (ReadOnly, DeployTimeConstant): The resource type

## AlertProperties
### Properties
* **closeTime**: string: dateTime in which alert was closed
* **costEntityId**: string: related budget
* **creationTime**: string: dateTime in which alert was created
* **definition**: [AlertPropertiesDefinition](#alertpropertiesdefinition): defines the type of alert
* **description**: string: Alert description
* **details**: [AlertPropertiesDetails](#alertpropertiesdetails): Alert details
* **modificationTime**: string: dateTime in which alert was last modified
* **source**: 'Preset' | 'User' | string: Source of alert
* **status**: 'Active' | 'Dismissed' | 'None' | 'Overridden' | 'Resolved' | string: alert status
* **statusModificationTime**: string: dateTime in which the alert status was last modified
* **statusModificationUserName**: string: User who last modified the alert

## AlertPropertiesDefinition
### Properties
* **category**: 'Billing' | 'Cost' | 'System' | 'Usage' | string: Alert category
* **criteria**: 'CostThresholdExceeded' | 'CreditThresholdApproaching' | 'CreditThresholdReached' | 'CrossCloudCollectionError' | 'CrossCloudNewDataAvailable' | 'ForecastCostThresholdExceeded' | 'ForecastUsageThresholdExceeded' | 'GeneralThresholdError' | 'InvoiceDueDateApproaching' | 'InvoiceDueDateReached' | 'MultiCurrency' | 'QuotaThresholdApproaching' | 'QuotaThresholdReached' | 'UsageThresholdExceeded' | string: Criteria that triggered alert
* **type**: 'Budget' | 'BudgetForecast' | 'Credit' | 'General' | 'Invoice' | 'Quota' | 'xCloud' | string: type of alert

## AlertPropertiesDetails
### Properties
* **amount**: int: budget threshold amount
* **companyName**: string: company name
* **contactEmails**: string[]: list of emails to contact
* **contactGroups**: string[]: list of action groups to broadcast to
* **contactRoles**: string[]: list of contact roles
* **currentSpend**: int: current spend
* **departmentName**: string: department name
* **enrollmentEndDate**: string: datetime of enrollmentEndDate
* **enrollmentNumber**: string: enrollment number
* **enrollmentStartDate**: string: datetime of enrollmentStartDate
* **invoicingThreshold**: int: invoicing threshold
* **meterFilter**: any[]: array of meters to filter by
* **operator**: 'EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo' | 'LessThan' | 'LessThanOrEqualTo' | 'None' | string: operator used to compare currentSpend with amount
* **overridingAlert**: string: overriding alert
* **periodStartDate**: string: datetime of periodStartDate
* **resourceFilter**: any[]: array of resources to filter by
* **resourceGroupFilter**: any[]: array of resourceGroups to filter by
* **tagFilter**: any: tags to filter by
* **threshold**: int: notification threshold percentage as a decimal which activated this alert
* **timeGrainType**: 'Annually' | 'BillingAnnual' | 'BillingMonth' | 'BillingQuarter' | 'Monthly' | 'None' | 'Quarterly' | string: Type of timegrain cadence
* **triggeredBy**: string: notificationId that triggered this alert
* **unit**: string: unit of currency being used

## CommonExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required): Has the definition for the export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): Has delivery information for the export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next run time.
* **partitionData**: bool: If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): If requested, has the most recent run history for the export.

## ErrorDetails
### Properties
* **code**: int (ReadOnly): Error code.
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
* **container**: string (Required): The name of the container where exports will be uploaded. If the container does not exist it will be created.
* **resourceId**: string: The resource id of the storage account where exports will be delivered. This is not required if a sasToken and storageAccount are specified.
* **rootFolderPath**: string: The name of the directory where exports will be uploaded.
* **sasToken**: string: A SAS token for the storage account. For a restricted set of Azure customers this together with storageAccount can be specified instead of resourceId. Note: the value returned by the API for this property will always be obfuscated. Returning this same obfuscated value will not result in the SAS token being updated. To update this value a new SAS token must be specified.
* **storageAccount**: string: The storage account where exports will be uploaded. For a restricted set of Azure customers this together with sasToken can be specified instead of resourceId.

## ExportDeliveryInfo
### Properties
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required): Has destination for the export being delivered.

## ExportExecutionListResult
### Properties
* **value**: [ExportRun](#exportrun)[] (ReadOnly): A list of export runs.

## ExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required): Has the definition for the export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): Has delivery information for the export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next run time.
* **partitionData**: bool: If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): If requested, has the most recent run history for the export.
* **schedule**: [ExportSchedule](#exportschedule): Has schedule information for the export.

## ExportRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence.

## ExportRun
### Properties
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ExportRunProperties](#exportrunproperties): The properties of the export run.
* **type**: string (ReadOnly): Resource type.

## ExportRunProperties
### Properties
* **error**: [ErrorDetails](#errordetails): The details of any error.
* **executionType**: 'OnDemand' | 'Scheduled' | string: The type of the export run.
* **fileName**: string: The name of the exported file.
* **processingEndTime**: string: The time when the export run finished.
* **processingStartTime**: string: The time when export was picked up to be run.
* **runSettings**: [CommonExportProperties](#commonexportproperties): The export settings that were in effect for this run.
* **status**: 'Completed' | 'DataNotAvailable' | 'Failed' | 'InProgress' | 'NewDataNotAvailable' | 'Queued' | 'Timeout' | string: The last known status of the export run.
* **submittedBy**: string: The identifier for the entity that triggered the export. For on-demand runs it is the user email. For scheduled runs it is 'System'.
* **submittedTime**: string: The time when export was queued to be run.

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' | string: The schedule recurrence.
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod): Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
* **status**: 'Active' | 'Inactive' | string: The status of the export's schedule. If 'Inactive', the export's schedule is paused.

## ExportTimePeriod
### Properties
* **from**: string (Required): The start date for export data.
* **to**: string (Required): The end date for export data.

## FileDestination
### Properties
* **fileFormats**: 'Csv' | string[]: Destination of the view data. Currently only CSV format is supported.

## KpiProperties
### Properties
* **enabled**: bool: show the KPI in the UI?
* **id**: string: ID of resource related to metric (budget).
* **type**: 'Budget' | 'Forecast' | string: KPI type (Forecast, Budget).

## NotificationProperties
### Properties
* **language**: string: Locale of the email.
* **message**: string: Optional message to be added in the email. Length is limited to 250 characters.
* **regionalFormat**: string: Regional format used for formatting date/time and currency values in the email.
* **subject**: string (Required): Subject of the email. Length is limited to 70 characters.
* **to**: string[] (Required): Array of email addresses.

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
* **dataSet**: [ReportConfigDataset](#reportconfigdataset): Has definition for data in this report config.
* **includeMonetaryCommitment**: bool: If true, report includes monetary commitment.
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' | string (Required): The time frame for pulling data for the report. If custom, then a specific time period must be provided.
* **timePeriod**: [ReportConfigTimePeriod](#reportconfigtimeperiod): Has time period for pulling data for the report.
* **type**: 'Usage' | string (Required): The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.

## ReportConfigFilter
### Properties
* **and**: [ReportConfigFilter](#reportconfigfilter)[]: The logical "AND" expression. Must have at least 2 items.
* **dimensions**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): Has comparison expression for a dimension
* **or**: [ReportConfigFilter](#reportconfigfilter)[]: The logical "OR" expression. Must have at least 2 items.
* **tags**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): Has comparison expression for a tag

## ReportConfigGrouping
### Properties
* **name**: string (Required): The name of the column to group. This version supports subscription lowest possible grain.
* **type**: 'Dimension' | 'TagKey' | string (Required): Has type of the column to group.

## ReportConfigSorting
### Properties
* **direction**: 'Ascending' | 'Descending' | string: Direction of sort.
* **name**: string (Required): The name of the column to sort.

## ReportConfigTimePeriod
### Properties
* **from**: string (Required): The start date to pull data from.
* **to**: string (Required): The end date to pull data to.

## ScheduledActionProperties
### Properties
* **displayName**: string (Required): Scheduled action name.
* **fileDestination**: [FileDestination](#filedestination): Destination format of the view data. This is optional.
* **notification**: [NotificationProperties](#notificationproperties) (Required): Notification properties based on scheduled action kind.
* **notificationEmail**: string: Email address of the point of contact that should get the unsubscribe requests and notification emails.
* **schedule**: [ScheduleProperties](#scheduleproperties) (Required): Schedule of the scheduled action.
* **scope**: string: Cost Management scope like 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
* **status**: 'Disabled' | 'Enabled' | 'Expired' | string (Required): Status of the scheduled action.
* **viewId**: string (Required): Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample'

## ScheduleProperties
### Properties
* **dayOfMonth**: int: UTC day on which cost analysis data will be emailed. Must be between 1 and 31. This property is applicable when frequency is Monthly and overrides weeksOfMonth or daysOfWeek.
* **daysOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string[]: Day names in english on which cost analysis data will be emailed. This property is applicable when frequency is Weekly or Monthly.
* **endDate**: string (Required): The end date and time of the scheduled action (UTC).
* **frequency**: 'Daily' | 'Monthly' | 'Weekly' | string (Required): Frequency of the schedule.
* **hourOfDay**: int: UTC time at which cost analysis data will be emailed.
* **startDate**: string (Required): The start date and time of the scheduled action (UTC).
* **weeksOfMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third' | string[]: Weeks in which cost analysis data will be emailed. This property is applicable when frequency is Monthly and used in combination with daysOfWeek.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ViewProperties
### Properties
* **accumulated**: 'false' | 'true' | string: Show costs accumulated over time.
* **chart**: 'Area' | 'GroupedColumn' | 'Line' | 'StackedColumn' | 'Table' | string: Chart type of the main view in Cost Analysis. Required.
* **createdOn**: string (ReadOnly): Date the user created this view.
* **currency**: string (ReadOnly): Currency of the current view.
* **dateRange**: string (ReadOnly): Date range of the current view.
* **displayName**: string: User input name of the view. Required.
* **kpis**: [KpiProperties](#kpiproperties)[]: List of KPIs to show in Cost Analysis UI.
* **metric**: 'AHUB' | 'ActualCost' | 'AmortizedCost' | string: Metric to use when displaying costs.
* **modifiedOn**: string (ReadOnly): Date when the user last modified this view.
* **pivots**: [PivotProperties](#pivotproperties)[]: Configuration of 3 sub-views in the Cost Analysis UI.
* **query**: [ReportConfigDefinition](#reportconfigdefinition): Query body configuration. Required.
* **scope**: string: Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.

