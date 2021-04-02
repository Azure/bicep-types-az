# Microsoft.CostManagement @ 2018-08-01-preview

## Resource Microsoft.CostManagement/connectors@2018-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Connector kind (eg aws)
* **location**: string: Connector location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorProperties](#connectorproperties): The properties of a Connector
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.CostManagement/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/reports@2018-08-01-preview
* **Valid Scope(s)**: Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2018-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReportProperties](#reportproperties): The properties of the report.
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Resource tags.
* **type**: 'Microsoft.CostManagement/reports' (ReadOnly, DeployTimeConstant): The resource type

## ConnectorProperties
### Properties
* **collection**: [ConnectorCollectionInfo](#connectorcollectioninfo) (ReadOnly): Collection and ingestion information
* **createdOn**: string (ReadOnly): Connector definition creation datetime
* **credentialsKey**: string: Credentials authentication key (eg AWS ARN)
* **credentialsSecret**: string: Credentials secret (eg AWS ExternalId)
* **displayName**: string: Connector DisplayName (defaults to Name)
* **modifiedOn**: string (ReadOnly): Connector last modified datetime
* **providerAccountId**: string (ReadOnly): Connector providerAccountId (determined from credentials)
* **reportId**: string: Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
* **status**: 'active' | 'error' | 'suspended': Connector status. Possible values include: 'active', 'error', 'suspended'

## ConnectorCollectionInfo
### Properties
* **error**: [ConnectorCollectionErrorInfo](#connectorcollectionerrorinfo): Details of any error encountered on last collection attempt
* **lastRun**: string (ReadOnly): Last time the data acquisition process completed (even if no new data was found)
* **lastUpdated**: string (ReadOnly): Last time the external data was updated into Azure
* **sourceLastUpdated**: string (ReadOnly): Source timestamp of external data currently available in Azure (eg AWS last processed CUR file timestamp)

## ConnectorCollectionErrorInfo
### Properties
* **errorCode**: string (ReadOnly): Short error message
* **errorMessage**: string (ReadOnly): Detailed error message
* **errorStartTime**: string (ReadOnly): Time the error started occurring (Last time error occurred in lastRun)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ReportProperties
### Properties
* **definition**: [ReportDefinition](#reportdefinition) (Required): The definition of a report.
* **deliveryInfo**: [ReportDeliveryInfo](#reportdeliveryinfo) (Required): The delivery information associated with a report.
* **format**: 'Csv': The format of the report being delivered. Possible values include: 'Csv'
* **schedule**: [ReportSchedule](#reportschedule): The schedule associated with a report.

## ReportDefinition
### Properties
* **dataset**: [ReportDataset](#reportdataset): The definition of data present in the report.
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' (Required): The time frame for pulling data for the report. If custom, then a specific time period must be provided. Possible values include: 'WeekToDate', 'MonthToDate', 'Custom'
* **timePeriod**: [ReportTimePeriod](#reporttimeperiod): The start and end date for pulling data for the report.
* **type**: string (Required): The type of the report.

## ReportDataset
### Properties
* **aggregation**: [Dictionary<string,ReportAggregation>](#dictionarystringreportaggregation): Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
* **configuration**: [ReportDatasetConfiguration](#reportdatasetconfiguration): The configuration of dataset in the report.
* **filter**: [ReportFilter](#reportfilter): The filter expression to be used in the report.
* **granularity**: 'Daily' | 'Hourly': The granularity of rows in the report. Possible values include: 'Daily', 'Hourly'
* **grouping**: [ReportGrouping](#reportgrouping)[]: Array of group by expression to use in the report. Report can have up to 2 group by clauses.

## Dictionary<string,ReportAggregation>
### Properties
### Additional Properties
* **Additional Properties Type**: [ReportAggregation](#reportaggregation)

## ReportAggregation
### Properties
* **function**: string (Required): The name of the aggregation function to use.
* **name**: string (Required): The name of the column to aggregate.

## ReportDatasetConfiguration
### Properties
* **columns**: string[]: Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.

## ReportFilter
### Properties
* **and**: [ReportFilter](#reportfilter)[]: The logical "AND" expression. Must have at least 2 items.
* **dimension**: [ReportComparisonExpression](#reportcomparisonexpression): The comparison expression to be used in the report.
* **not**: [ReportFilter](#reportfilter): The filter expression to be used in the report.
* **or**: [ReportFilter](#reportfilter)[]: The logical "OR" expression. Must have at least 2 items.
* **tag**: [ReportComparisonExpression](#reportcomparisonexpression): The comparison expression to be used in the report.

## ReportComparisonExpression
### Properties
* **name**: string (Required): The name of the column to use in comparison.
* **operator**: string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## ReportGrouping
### Properties
* **name**: string (Required): The name of the column to group.
* **type**: 'Dimension' | 'Tag' (Required): Has type of the column to group. Possible values include: 'Tag', 'Dimension'

## ReportTimePeriod
### Properties
* **from**: string (Required): The start date to pull data from.
* **to**: string (Required): The end date to pull data to.

## ReportDeliveryInfo
### Properties
* **destination**: [ReportDeliveryDestination](#reportdeliverydestination) (Required): The destination information for the delivery of the report.

## ReportDeliveryDestination
### Properties
* **container**: string (Required): The name of the container where reports will be uploaded.
* **resourceId**: string (Required): The resource id of the storage account where reports will be delivered.
* **rootFolderPath**: string: The name of the directory where reports will be uploaded.

## ReportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required): The schedule recurrence. Possible values include: 'Daily', 'Weekly', 'Monthly', 'Annually'
* **recurrencePeriod**: [ReportRecurrencePeriod](#reportrecurrenceperiod): The start and end date for recurrence schedule.
* **status**: 'Active' | 'Inactive': The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused. Possible values include: 'Active', 'Inactive'

## ReportRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

