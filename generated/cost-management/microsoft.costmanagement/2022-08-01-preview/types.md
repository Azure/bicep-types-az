# Microsoft.CostManagement @ 2022-08-01-preview

## Resource Microsoft.CostManagement/alerts@2022-08-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): Alert properties.
* **type**: 'Microsoft.CostManagement/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/views@2022-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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
* **values**: string[] {minLength: 1} (Required): Array of values to use for comparison

## ReportConfigDataset
### Properties
* **aggregation**: [ReportConfigDatasetAggregation](#reportconfigdatasetaggregation): Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
* **configuration**: [ReportConfigDatasetConfiguration](#reportconfigdatasetconfiguration): Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
* **filter**: [ReportConfigFilter](#reportconfigfilter): Has filter expression to use in the report.
* **granularity**: 'Daily' | 'Monthly' | string: The granularity of rows in the report.
* **grouping**: [ReportConfigGrouping](#reportconfiggrouping)[] {maxLength: 2}: Array of group by expression to use in the report. Report can have up to 2 group by clauses.
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
* **and**: [ReportConfigFilter](#reportconfigfilter)[] {minLength: 2}: The logical "AND" expression. Must have at least 2 items.
* **dimensions**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): Has comparison expression for a dimension
* **or**: [ReportConfigFilter](#reportconfigfilter)[] {minLength: 2}: The logical "OR" expression. Must have at least 2 items.
* **tags**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): Has comparison expression for a tag

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
* **currency**: string (ReadOnly): Currency of the current view.
* **dateRange**: string (ReadOnly): Date range of the current view.
* **displayName**: string: User input name of the view. Required.
* **kpis**: [KpiProperties](#kpiproperties)[]: List of KPIs to show in Cost Analysis UI.
* **metric**: 'AHUB' | 'ActualCost' | 'AmortizedCost' | string: Metric to use when displaying costs.
* **modifiedOn**: string (ReadOnly): Date when the user last modified this view.
* **pivots**: [PivotProperties](#pivotproperties)[]: Configuration of 3 sub-views in the Cost Analysis UI.
* **query**: [ReportConfigDefinition](#reportconfigdefinition): Query body configuration. Required.
* **scope**: string: Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.

