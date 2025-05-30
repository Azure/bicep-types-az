# Microsoft.CostManagement @ 2024-10-01-preview

## Resource Microsoft.CostManagement/alerts@2024-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): Alert properties.
* **type**: 'Microsoft.CostManagement/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/budgets@2024-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BudgetProperties](#budgetproperties): The properties of the budget.
* **type**: 'Microsoft.CostManagement/budgets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/costAllocationRules@2024-10-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "[A-Za-z0-9\-_]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [CostAllocationRuleProperties](#costallocationruleproperties): Cost allocation rule properties
* **type**: 'Microsoft.CostManagement/costAllocationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/exports@2024-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed identity associated with Export
* **location**: string: The location of the Export's managed identity. Only required when utilizing managed identity.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExportProperties](#exportproperties): The properties of the export.
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/scheduledActions@2024-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Resource Etag. For update calls, eTag is optional and can be specified to achieve optimistic concurrency. Fetch the resource's eTag by doing a 'GET' call first and then including the latest eTag as part of the request body or 'If-Match' header while performing the update. For create calls, eTag is not required.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Email' | 'InsightAlert' | string: Kind of the scheduled action.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduledActionProperties](#scheduledactionproperties): The properties of the scheduled action.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Kind of the scheduled action.
* **type**: 'Microsoft.CostManagement/scheduledActions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/settings@2024-10-01-preview
* **Valid Scope(s)**: Unknown
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'taginheritance' | string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.CostManagement/settings' (ReadOnly, DeployTimeConstant): The resource type

### TagInheritanceSetting
#### Properties
* **kind**: 'taginheritance' (Required): Specifies the kind of settings.
* **properties**: [TagInheritanceProperties](#taginheritanceproperties): The properties of the tag inheritance setting.


## Resource Microsoft.CostManagement/views@2024-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

## BudgetComparisonExpression
### Properties
* **name**: string (Required): The name of the column to use in comparison.
* **operator**: 'In' | string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## BudgetFilter
### Properties
* **and**: [BudgetFilterProperties](#budgetfilterproperties)[]: The logical "AND" expression. Must have at least 2 items.

 Supported for CategoryType(s): Cost.
* **dimensions**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a dimension.

 Supported for CategoryType(s): Cost, ReservationUtilization.

Supported dimension names for **CategoryType: ReservationUtilization** 
- ReservationId
- ReservedResourceType
* **tags**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a tag.

 Supported for CategoryType(s): Cost.

## BudgetFilterProperties
### Properties
* **dimensions**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a dimension.

 Supported for CategoryType(s): Cost, ReservationUtilization.

Supported dimension names for **CategoryType: ReservationUtilization** 
- ReservationId
- ReservedResourceType
* **tags**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a tag.

 Supported for CategoryType(s): Cost.

## BudgetProperties
### Properties
* **amount**: int: The total amount of cost to track with the budget.

 Supported for CategoryType(s): Cost.

 Required for CategoryType(s): Cost.
* **category**: 'Cost' | 'ReservationUtilization' | string (Required): The category of the budget.
- 'Cost' defines a Budget.
- 'ReservationUtilization' defines a Reservation Utilization Alert Rule.
* **currentSpend**: [CurrentSpend](#currentspend) (ReadOnly): The current amount of cost which is being tracked for a budget.

 Supported for CategoryType(s): Cost.
* **filter**: [BudgetFilter](#budgetfilter): May be used to filter budgets by user-specified dimensions and/or tags.

 Supported for CategoryType(s): Cost, ReservationUtilization.
* **forecastSpend**: [ForecastSpend](#forecastspend) (ReadOnly): The forecasted cost which is being tracked for a budget.

 Supported for CategoryType(s): Cost.
* **notifications**: [BudgetPropertiesNotifications](#budgetpropertiesnotifications): Dictionary of notifications associated with the budget.

 Supported for CategoryType(s): Cost, ReservationUtilization.

- Constraints for **CategoryType: Cost** - Budget can have up to 5 notifications with thresholdType: Actual and 5 notifications with thresholdType: Forecasted.
- Constraints for **CategoryType: ReservationUtilization** - Only one notification allowed. thresholdType is not applicable.
* **timeGrain**: 'Annually' | 'BillingAnnual' | 'BillingMonth' | 'BillingQuarter' | 'Last30Days' | 'Last7Days' | 'Monthly' | 'Quarterly' | string (Required): The time covered by a budget. Tracking of the amount will be reset based on the time grain.

Supported for CategoryType(s): Cost, ReservationUtilization.

 Supported timeGrainTypes for **CategoryType: Cost**

- Monthly
- Quarterly
- Annually
- BillingMonth*
- BillingQuarter*
- BillingAnnual*

  *only supported for Web Direct customers.

 Supported timeGrainTypes for **CategoryType: ReservationUtilization**
- Last7Days
- Last30Days

 Required for CategoryType(s): Cost, ReservationUtilization.
* **timePeriod**: [BudgetTimePeriod](#budgettimeperiod) (Required): The time period that defines the active period of the budget. The budget will evaluate data on or after the startDate and will expire on the endDate.

 Supported for CategoryType(s): Cost, ReservationUtilization.

 Required for CategoryType(s): Cost, ReservationUtilization.

## BudgetPropertiesNotifications
### Properties
### Additional Properties
* **Additional Properties Type**: [Notification](#notification)

## BudgetTimePeriod
### Properties
* **endDate**: string: The end date for the budget.

- Constraints for **CategoryType: Cost** - No constraints. If not provided, we default this to 10 years from the start date.

- Constraints for **CategoryType: ReservationUtilization** - End date cannot be more than 3 years after the start date.
* **startDate**: string (Required): The start date for the budget.

- Constraints for **CategoryType: Cost** - Must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than twelve months. Past start date should  be selected within the timegrain period.

- Constraints for **CategoryType: ReservationUtilization** - Must be on or after the current date and less than the end date.

## CommonExportProperties
### Properties
* **compressionMode**: 'None' | 'gzip' | string: Allow customers to select compress data(gzip) for exports. This setting will enable destination file compression scheme at runtime. By default set to None.
* **dataOverwriteBehavior**: 'CreateNewReport' | 'OverwritePreviousReport' | string: Allow customers to select overwrite data(OverwritePreviousReport) for exports. This setting will enable overwrite data for the same month in customer storage account. By default set to CreateNewReport.
* **definition**: [ExportDefinition](#exportdefinition) (Required): Has the definition for the export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): Has delivery information for the export.
* **exportDescription**: string: The export description set by customer at time of export creation/update.
* **format**: 'Csv' | 'Delta' | 'Parquet' | string: The format of the export being delivered.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next run time.
* **partitionData**: bool: If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): If requested, has the most recent run history for the export.
* **systemSuspensionContext**: [ExportSuspensionContext](#exportsuspensioncontext) (ReadOnly): The export suspension reason if export is in SystemSuspended state.

## CostAllocationProportion
### Properties
* **name**: string (Required): Target resource for cost allocation
* **percentage**: int (Required): Percentage of source cost to allocate to this resource. This value can be specified to two decimal places and the total percentage of all resources in this rule must sum to 100.00.

## CostAllocationRuleDetails
### Properties
* **sourceResources**: [SourceCostAllocationResource](#sourcecostallocationresource)[]: Source resources for cost allocation. At this time, this list can contain no more than one element.
* **targetResources**: [TargetCostAllocationResource](#targetcostallocationresource)[]: Target resources for cost allocation. At this time, this list can contain no more than one element.

## CostAllocationRuleProperties
### Properties
* **createdDate**: string (ReadOnly): Time at which the rule was created. Rules that change cost for the same resource are applied in order of creation.
* **description**: string: Description of a cost allocation rule.
* **details**: [CostAllocationRuleDetails](#costallocationruledetails) (Required): Resource information for the cost allocation rule
* **status**: 'Active' | 'NotActive' | 'Processing' | string (Required): Status of the rule
* **updatedDate**: string (ReadOnly): Time at which the rule was last updated.

## CurrentSpend
### Properties
* **amount**: int (ReadOnly): The total amount of cost which is being tracked by the budget.
* **unit**: string (ReadOnly): The unit of measure for the budget amount.

## ErrorDetails
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error message indicating why the operation failed.

## ExportDataset
### Properties
* **configuration**: [ExportDatasetConfiguration](#exportdatasetconfiguration): The export dataset configuration.
* **granularity**: 'Daily' | 'Monthly' | string: The granularity of rows in the export. Currently 'Daily' is supported for most cases.

## ExportDatasetConfiguration
### Properties
* **columns**: string[]: This is on path to deprecation and will not be supported going forward.
* **dataVersion**: string: The data version for the selected for the export. If not provided then the export will default to latest data version.
* **filters**: [FilterItems](#filteritems)[]: Filters associated with the data sets.

## ExportDefinition
### Properties
* **dataSet**: [ExportDataset](#exportdataset): The definition for data in the export.
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheCurrentMonth' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' | string (Required): The time frame for pulling data for the export. If custom, then a specific time period must be provided.
* **timePeriod**: [ExportTimePeriod](#exporttimeperiod): Has time period for pulling data for the export.
* **type**: 'ActualCost' | 'AmortizedCost' | 'FocusCost' | 'PriceSheet' | 'ReservationDetails' | 'ReservationRecommendations' | 'ReservationTransactions' | 'Usage' | string (Required): The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations.

## ExportDeliveryDestination
### Properties
* **container**: string: The name of the container where exports will be uploaded. If the container does not exist it will be created.
* **microsoftFabricSettings**: [MicrosoftFabricDestinationSettings](#microsoftfabricdestinationsettings): The settings for the Microsoft Fabric destination.  This is only applicable when destination.type == 'MicrosoftFabric'.
* **resourceId**: string: The resource id of the storage account where exports will be delivered. This is not required if a sasToken and storageAccount are specified.
* **rootFolderPath**: string: The name of the directory where exports will be uploaded.
* **sasToken**: string {sensitive}: A SAS token for the storage account. For a restricted set of Azure customers this together with storageAccount can be specified instead of resourceId. Note: the value returned by the API for this property will always be obfuscated. Returning this same obfuscated value will not result in the SAS token being updated. To update this value a new SAS token must be specified.
* **storageAccount**: string: The storage account where exports will be uploaded. For a restricted set of Azure customers this together with sasToken can be specified instead of resourceId.
* **type**: 'AzureBlob' | 'MicrosoftFabric' | string: The export delivery destination type. Currently only 'AzureBlob' and 'MicrosoftFabric' is supported.  If no value is provided it will default to 'AzureBlob'.

## ExportDeliveryInfo
### Properties
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required): Has destination for the export being delivered.

## ExportExecutionListResult
### Properties
* **value**: [ExportRun](#exportrun)[] (ReadOnly): A list of export runs.

## ExportProperties
### Properties
* **compressionMode**: 'None' | 'gzip' | string: Allow customers to select compress data(gzip) for exports. This setting will enable destination file compression scheme at runtime. By default set to None.
* **dataOverwriteBehavior**: 'CreateNewReport' | 'OverwritePreviousReport' | string: Allow customers to select overwrite data(OverwritePreviousReport) for exports. This setting will enable overwrite data for the same month in customer storage account. By default set to CreateNewReport.
* **definition**: [ExportDefinition](#exportdefinition) (Required): Has the definition for the export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): Has delivery information for the export.
* **exportDescription**: string: The export description set by customer at time of export creation/update.
* **format**: 'Csv' | 'Delta' | 'Parquet' | string: The format of the export being delivered.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next run time.
* **partitionData**: bool: If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): If requested, has the most recent run history for the export.
* **schedule**: [ExportSchedule](#exportschedule): Has schedule information for the export.
* **systemSuspensionContext**: [ExportSuspensionContext](#exportsuspensioncontext) (ReadOnly): The export suspension reason if export is in SystemSuspended state.

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
* **endDate**: string: The end datetime for the export.
* **error**: [ErrorDetails](#errordetails): The details of any error.
* **executionType**: 'OnDemand' | 'Scheduled' | string: The type of the export run.
* **fileName**: string: The name of the exported file.
* **manifestFile**: string: The manifest file location(URI location) for the exported files.
* **processingEndTime**: string: The time when the export run finished.
* **processingStartTime**: string: The time when export was picked up to be run.
* **runSettings**: [CommonExportProperties](#commonexportproperties): The export settings that were in effect for this run.
* **startDate**: string: The start datetime for the export.
* **status**: 'Completed' | 'DataNotAvailable' | 'Failed' | 'InProgress' | 'NewDataNotAvailable' | 'Queued' | 'Timeout' | string: The last known status of the export run.
* **submittedBy**: string: The identifier for the entity that triggered the export. For on-demand runs it is the user email. For scheduled runs it is 'System'.
* **submittedTime**: string: The time when export was queued to be run.

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' | string: The schedule recurrence.
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod): Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
* **status**: 'Active' | 'Inactive' | 'SystemSuspended' | string: The status of the export's schedule. If 'Inactive', the export's schedule is paused. 'SystemSuspended' can only be set by export service.

## ExportSuspensionContext
### Properties
* **suspensionCode**: string: The code for export suspension.
* **suspensionReason**: string: The detailed reason for export suspension.
* **suspensionTime**: string: The time when the export was suspended.

## ExportTimePeriod
### Properties
* **from**: string (Required): The start date for export data.
* **to**: string (Required): The end date for export data.

## FabricLakehouse
### Properties
* **displayName**: string: The display name of the fabric lakehouse.  This is only returned in Get operations.
* **id**: string: The identifier of the fabric lakehouse.

## FabricWorkspace
### Properties
* **displayName**: string: The display name of the fabric workspace.  This is only returned in Get operations.
* **id**: string: The identifier of the fabric workspace.

## FileDestination
### Properties
* **fileFormats**: ('Csv' | string)[]: Destination of the view data. Currently only CSV format is supported.

## FilterItems
### Properties
* **name**: 'LookBackPeriod' | 'ReservationScope' | 'ResourceType' | string: The name of the filter. This is currently only supported for Export Definition type of ReservationRecommendations. Supported names are ['ReservationScope', 'LookBackPeriod', 'ResourceType']
* **value**: string: Value to filter by. Currently values supported per name are, for 'ReservationScope' supported values are ['Single', 'Shared'], for 'LookBackPeriod' supported values are ['Last7Days', 'Last30Days', 'Last60Days'] and for 'ResourceType' supported values are ['VirtualMachines', 'SQLDatabases', 'PostgreSQL', 'ManagedDisk', 'MySQL', 'RedHat', 'MariaDB', 'RedisCache', 'CosmosDB', 'SqlDataWarehouse', 'SUSELinux', 'AppService', 'BlockBlob', 'AzureDataExplorer', 'VMwareCloudSimple'].

## ForecastSpend
### Properties
* **amount**: int (ReadOnly): The forecasted cost for the total time period which is being tracked by the budget. This value is only provided if the budget contains a forecast alert type.
* **unit**: string (ReadOnly): The unit of measure for the budget amount.

## KpiProperties
### Properties
* **enabled**: bool: show the KPI in the UI?
* **id**: string: ID of resource related to metric (budget).
* **type**: 'Budget' | 'Forecast' | string: KPI type (Forecast, Budget).

## MicrosoftFabricDestinationSettings
### Properties
* **lakehouse**: [FabricLakehouse](#fabriclakehouse): The Microsoft Fabric Lakehouse Identifier.
* **tableName**: string: The name of the Microsoft Fabric Lakehouse Delta table where export data will be ingested to.
* **workspace**: [FabricWorkspace](#fabricworkspace): The Microsoft Fabric Workspace Identifier.

## Notification
### Properties
* **contactEmails**: string[] {maxLength: 50} (Required): Email addresses to send the notification to when the threshold is breached. Must have at least one contact email or contact group specified at the Subscription or Resource Group scopes. All other scopes must have at least one contact email specified.

 Supported for CategoryType(s): Cost, ReservationUtilization.
* **contactGroups**: string[] {maxLength: 50}: Subscription or Resource Group scopes only. Action groups to send the notification to when the threshold is exceeded. Must be provided as a fully qualified Azure resource id.

 Supported for CategoryType(s): Cost.
* **contactRoles**: string[]: Subscription or Resource Group scopes only. Contact roles to send the notification to when the threshold is breached.

 Supported for CategoryType(s): Cost.
* **enabled**: bool (Required): The notification is enabled or not.

 Supported for CategoryType(s): Cost, ReservationUtilization.
* **frequency**: 'Daily' | 'Monthly' | 'Weekly' | string: Frequency of a notification. Represents how long the notification will be silent after triggering an alert for a threshold breach. If not specified, the frequency will be set by default based on the timeGrain (Weekly when timeGrain: Last7Days, Monthly when timeGrain: Last30Days).

 Supported for CategoryType(s): ReservationUtilization.
* **locale**: 'cs-cz' | 'da-dk' | 'de-de' | 'en-gb' | 'en-us' | 'es-es' | 'fr-fr' | 'hu-hu' | 'it-it' | 'ja-jp' | 'ko-kr' | 'nb-no' | 'nl-nl' | 'pl-pl' | 'pt-br' | 'pt-pt' | 'ru-ru' | 'sv-se' | 'tr-tr' | 'zh-cn' | 'zh-tw' | string: Language in which the recipient will receive the notification, 

 Supported for CategoryType(s): Cost, ReservationUtilization.
* **operator**: 'EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo' | 'LessThan' | string (Required): The comparison operator.

 Supported for CategoryType(s): Cost, ReservationUtilization.

 Supported operators for **CategoryType: Cost**
- GreaterThan
- GreaterThanOrEqualTo

 Supported operators for **CategoryType: ReservationUtilization**
- LessThan
* **threshold**: int (Required): Threshold value associated with a notification. It is always percent with a maximum of 2 decimal places.

 Supported for CategoryType(s): Cost, ReservationUtilization.

 **CategoryType: Cost** - Must be between 0 and 1000. Notification is sent when the cost exceeded the threshold.

 **CategoryType: ReservationUtilization** - Must be between 0 and 100. Notification is sent when a reservation has a utilization percentage below the threshold.
* **thresholdType**: 'Actual' | 'Forecasted' | string: The type of threshold.

 Supported for CategoryType(s): Cost.

## NotificationProperties
### Properties
* **language**: string: Locale of the email.
* **message**: string: Optional message to be added in the email. Length is limited to 250 characters.
* **regionalFormat**: string: Regional format used for formatting date/time and currency values in the email.
* **subject**: string (Required): Subject of the email. Length is limited to 70 characters.
* **to**: (string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"})[] {minLength: 1, maxLength: 20} (Required): Array of email addresses.

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
* **scope**: string: For private scheduled action(Create or Update), scope will be empty.<br /> For shared scheduled action(Create or Update By Scope), Cost Management scope can be 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
* **status**: 'Disabled' | 'Enabled' | 'Expired' | string (Required): Status of the scheduled action.
* **viewId**: string (Required): Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample'

## ScheduleProperties
### Properties
* **dayOfMonth**: int: UTC day on which cost analysis data will be emailed. Must be between 1 and 31. This property is applicable when frequency is Monthly and overrides weeksOfMonth or daysOfWeek.
* **daysOfWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[]: Day names in english on which cost analysis data will be emailed. This property is applicable when frequency is Weekly or Monthly.
* **endDate**: string (Required): The end date and time of the scheduled action (UTC).
* **frequency**: 'Daily' | 'Monthly' | 'Weekly' | string (Required): Frequency of the schedule.
* **hourOfDay**: int: UTC time at which cost analysis data will be emailed.
* **startDate**: string (Required): The start date and time of the scheduled action (UTC).
* **weeksOfMonth**: ('First' | 'Fourth' | 'Last' | 'Second' | 'Third' | string)[]: Weeks in which cost analysis data will be emailed. This property is applicable when frequency is Monthly and used in combination with daysOfWeek.

## SourceCostAllocationResource
### Properties
* **name**: string (Required): If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
* **resourceType**: 'Dimension' | 'Tag' | string (Required): Type of resources contained in this cost allocation rule
* **values**: string[] (Required): Source Resources for cost allocation. This list cannot contain more than 25 values.

## SystemAssignedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): Type of managed service identity (either system assigned, or none).

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TagInheritanceProperties
### Properties
* **preferContainerTags**: bool (Required): This property defines the behavior when an inherited tag being applied matches a lower scope tag (Eg. Subscription tag matches the resource tag). If set to true - when tags match, the highest scope tags will be applied. Billing profile is the highest scope,  followed by invoice sections, subscriptions and resource groups (allows overriding of lower scope tag values). If set to false - when tags match, the lowest scope tags will be applied. So, if a resource has the same tag as a subscription tag, the resource tag will be applied (does not allow overriding of lower scope tag values).

## TargetCostAllocationResource
### Properties
* **name**: string (Required): If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
* **policyType**: 'FixedProportion' | string (Required): Method of cost allocation for the rule
* **resourceType**: 'Dimension' | 'Tag' | string (Required): Type of resources contained in this cost allocation rule
* **values**: [CostAllocationProportion](#costallocationproportion)[] (Required): Target resources for cost allocation. This list cannot contain more than 25 values.

## ViewProperties
### Properties
* **accumulated**: 'false' | 'true' | string: Show costs accumulated over time.
* **chart**: 'Area' | 'GroupedColumn' | 'Line' | 'StackedColumn' | 'Table' | string: Chart type of the main view in Cost Analysis. Required.
* **createdOn**: string (ReadOnly): Date the user created this view.
* **currency**: string (ReadOnly): Currency of the current view.
* **dateRange**: string: Date range of the current view.
* **displayName**: string: User input name of the view. Required.
* **kpis**: [KpiProperties](#kpiproperties)[]: List of KPIs to show in Cost Analysis UI.
* **metric**: 'AHUB' | 'ActualCost' | 'AmortizedCost' | string: Metric to use when displaying costs.
* **modifiedOn**: string: Date when the user last modified this view.
* **pivots**: [PivotProperties](#pivotproperties)[]: Configuration of 3 sub-views in the Cost Analysis UI.
* **query**: [ReportConfigDefinition](#reportconfigdefinition): Query body configuration. Required.
* **scope**: string: Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.

