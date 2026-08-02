# Microsoft.CostManagement @ 2019-03-01-preview

## Resource Microsoft.CostManagement/cloudConnectors@2019-03-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Connector kind (eg aws)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorProperties](#connectorproperties): Connector properties
* **type**: 'Microsoft.CostManagement/cloudConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/externalBillingAccounts@2019-03-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): ExternalBillingAccount kind (eg aws)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExternalBillingAccountProperties](#externalbillingaccountproperties) (ReadOnly): ExternalBillingAccount properties
* **type**: 'Microsoft.CostManagement/externalBillingAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/externalSubscriptions@2019-03-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.CostManagement/externalSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/showbackRules@2019-03-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ShowbackRuleProperties](#showbackruleproperties): Showback rule properties
* **type**: 'Microsoft.CostManagement/showbackRules' (ReadOnly, DeployTimeConstant): The resource type

## Function Forecast (Microsoft.CostManagement/externalBillingAccounts@2019-03-01-preview)
* **Resource**: Microsoft.CostManagement/externalBillingAccounts
* **ApiVersion**: 2019-03-01-preview
* **Input**: [ReportConfigDefinition](#reportconfigdefinition)
* **Output**: [QueryResult](#queryresult)

## ConnectorCollectionErrorInfo
### Properties
* **errorCode**: string (ReadOnly): Short error code
* **errorInnerMessage**: string (ReadOnly): External Provider error message
* **errorMessage**: string (ReadOnly): Detailed error message
* **errorStartTime**: string (ReadOnly): Time the error started occurring (Last time error occurred in lastChecked)

## ConnectorCollectionInfo
### Properties
* **error**: [ConnectorCollectionErrorInfo](#connectorcollectionerrorinfo): Error information of last collection
* **lastChecked**: string (ReadOnly): Last time the data acquisition process initiated connecting to the external provider
* **lastUpdated**: string (ReadOnly): Last time the external data was updated into Azure
* **sourceLastUpdated**: string (ReadOnly): Source timestamp of external data currently available in Azure (eg AWS last processed CUR file timestamp)

## ConnectorProperties
### Properties
* **billingModel**: 'autoUpgrade' | 'expired' | 'premium' | 'trial' | string: Connector billing model
* **collectionInfo**: [ConnectorCollectionInfo](#connectorcollectioninfo) (ReadOnly): Collection information
* **createdOn**: string (ReadOnly): Connector definition creation datetime
* **credentialsKey**: string: Credentials authentication key (eg AWS ARN)
* **credentialsSecret**: string (WriteOnly): Credentials secret (eg AWS ExternalId)
* **daysTrialRemaining**: int (ReadOnly): Number of days remaining of trial
* **defaultManagementGroupId**: string: Default ManagementGroupId
* **displayName**: string: Connector DisplayName
* **externalBillingAccountId**: string (ReadOnly): Associated ExternalBillingAccountId
* **modifiedOn**: string (ReadOnly): Connector last modified datetime
* **providerBillingAccountDisplayName**: string (ReadOnly): The display name of the providerBillingAccountId as defined on the external provider
* **providerBillingAccountId**: string (ReadOnly): Connector providerBillingAccountId, determined from credentials (eg AWS Consolidated account number)
* **reportId**: string: Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
* **status**: 'active' | 'error' | 'expired' | 'warning' | string (ReadOnly): Connector status
* **subscriptionId**: string: Billing SubscriptionId

## CostAllocationDetails
### Properties
* **policy**: 'Evenly' | 'Fixed' | 'Proportional' | string: Cost allocation policy.

## CustomPriceDetails
### Properties
* **benefits**: ('AHUB' | 'All' | 'None' | 'Reservations' | 'Sum' | string)[]: Array of benefits.
* **markups**: [Markup](#markup)[]: List of markups.
* **pricesheet**: string

## ExternalBillingAccountProperties
### Properties
* **collectionInfo**: [ConnectorCollectionInfo](#connectorcollectioninfo) (ReadOnly): Collection information
* **connectorId**: string (ReadOnly): Underlying ConnectorId
* **displayName**: string (ReadOnly): ExternalBillingAccount DisplayName
* **providerBillingAccountId**: string (ReadOnly): Provider BillingAccountId (eg AWS Consolidated Account number)

## Markup
### Properties
* **percentage**: string

## Query
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [QueryProperties](#queryproperties)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## QueryColumn
### Properties
* **name**: string
* **type**: string

## QueryProperties
### Properties
* **columns**: [QueryColumn](#querycolumn)[]: Array of columns
* **nextLink**: string
* **rows**: any[][]

## QueryResult
### Properties
* **value**: [Query](#query)[] (ReadOnly): The list of usage data.

## ReportConfigAggregation
### Properties
* **function**: 'AHUB' | 'All' | 'None' | 'Reservations' | 'Sum' | string (Required): The name of the aggregation function to use.
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
* **dataset**: [ReportConfigDataset](#reportconfigdataset): Has definition for data in this report config.
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' | string (Required): The time frame for pulling data for the report. If custom, then a specific time period must be provided.
* **timePeriod**: [ReportConfigTimePeriod](#reportconfigtimeperiod): Has time period for pulling data for the report.
* **type**: 'Usage' | string (Required): The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.

## ReportConfigFilter
### Properties
* **and**: [ReportConfigFilter](#reportconfigfilter)[] {minLength: 2}: The logical "AND" expression. Must have at least 2 items.
* **dimension**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): Has comparison expression for a dimension
* **not**: [ReportConfigFilter](#reportconfigfilter): The logical "NOT" expression.
* **or**: [ReportConfigFilter](#reportconfigfilter)[] {minLength: 2}: The logical "OR" expression. Must have at least 2 items.
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Scope
### Properties
* **childScope**: [Scope](#scope): The Scope model definition
* **id**: string: Scope id
* **name**: string: Scope name
* **type**: string: Scope type

## ShowbackRuleProperties
* **Discriminator**: ruleType

### Base Properties
* **creationTime**: string (ReadOnly): The time when the showback rule was created.
* **deprecationTime**: string (ReadOnly): The current time when showback rule was deprecate.
* **description**: string: Description of a showback rule.
* **modificationTime**: string (ReadOnly): The current status when showback rule was modified.
* **scopes**: [Scope](#scope)[]: List of authorized assigned scopes.
* **status**: 'Active' | 'NotActive' | string: The current status of the showback rule.
* **version**: int (ReadOnly): The current version of showback rule.

### CostAllocationDetailsKind
#### Properties
* **details**: [CostAllocationDetails](#costallocationdetails): The CostAllocation properties to validate.
* **ruleType**: 'CostAllocation' (Required): The rule type of the showback rule solution.

### CustomPriceDetailsKind
#### Properties
* **details**: [CustomPriceDetails](#custompricedetails): The Custom price properties to validate.
* **ruleType**: 'CustomPrice' (Required): The rule type of the showback rule solution.


