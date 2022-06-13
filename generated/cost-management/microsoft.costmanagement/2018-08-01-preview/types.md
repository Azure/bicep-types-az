# Microsoft.CostManagement @ 2018-08-01-preview

## Resource Microsoft.CostManagement/connectors@2018-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Connector kind (eg aws)
* **location**: string: Connector location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorProperties](#connectorproperties): Connector properties
* **tags**: [ConnectorDefinitionTags](#connectordefinitiontags): Resource tags.
* **type**: 'Microsoft.CostManagement/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/reports@2018-08-01-preview
* **Valid Scope(s)**: Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2018-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReportProperties](#reportproperties): The properties of the report.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.CostManagement/reports' (ReadOnly, DeployTimeConstant): The resource type

## ConnectorCollectionErrorInfo
### Properties
* **errorCode**: string (ReadOnly): Short error message
* **errorMessage**: string (ReadOnly): Detailed error message
* **errorStartTime**: string (ReadOnly): Time the error started occurring (Last time error occurred in lastRun)

## ConnectorCollectionInfo
### Properties
* **error**: [ConnectorCollectionErrorInfo](#connectorcollectionerrorinfo): Error information of last collection
* **lastRun**: string (ReadOnly): Last time the data acquisition process completed (even if no new data was found)
* **lastUpdated**: string (ReadOnly): Last time the external data was updated into Azure
* **sourceLastUpdated**: string (ReadOnly): Source timestamp of external data currently available in Azure (eg AWS last processed CUR file timestamp)

## ConnectorDefinitionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectorProperties
### Properties
* **collection**: [ConnectorCollectionInfo](#connectorcollectioninfo) (ReadOnly): Collection information
* **createdOn**: string (ReadOnly): Connector definition creation datetime
* **credentialsKey**: string: Credentials authentication key (eg AWS ARN)
* **credentialsSecret**: string (WriteOnly): Credentials secret (eg AWS ExternalId)
* **displayName**: string: Connector DisplayName (defaults to Name)
* **modifiedOn**: string (ReadOnly): Connector last modified datetime
* **providerAccountId**: string (ReadOnly): Connector providerAccountId (determined from credentials)
* **reportId**: string: Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
* **status**: 'active' | 'error' | 'suspended' | string: Connector status

## ReportAggregation
### Properties
* **function**: 'Sum' | string (Required): The name of the aggregation function to use.
* **name**: string (Required): The name of the column to aggregate.

## ReportComparisonExpression
### Properties
* **name**: string (Required): The name of the column to use in comparison.
* **operator**: 'In' | string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## ReportDataset
### Properties
* **aggregation**: [ReportDatasetAggregation](#reportdatasetaggregation): Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
* **configuration**: [ReportDatasetConfiguration](#reportdatasetconfiguration): Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
* **filter**: [ReportFilter](#reportfilter): Has filter expression to use in the report.
* **granularity**: 'Daily' | 'Hourly' | string: The granularity of rows in the report.
* **grouping**: [ReportGrouping](#reportgrouping)[]: Array of group by expression to use in the report. Report can have up to 2 group by clauses.

## ReportDatasetAggregation
### Properties
### Additional Properties
* **Additional Properties Type**: [ReportAggregation](#reportaggregation)

## ReportDatasetConfiguration
### Properties
* **columns**: string[]: Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.

## ReportDefinition
### Properties
* **dataset**: [ReportDataset](#reportdataset): Has definition for data in this report.
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | string (Required): The time frame for pulling data for the report. If custom, then a specific time period must be provided.
* **timePeriod**: [ReportTimePeriod](#reporttimeperiod): Has time period for pulling data for the report.
* **type**: 'Usage' | string (Required): The type of the report.

## ReportDeliveryDestination
### Properties
* **container**: string (Required): The name of the container where reports will be uploaded.
* **resourceId**: string (Required): The resource id of the storage account where reports will be delivered.
* **rootFolderPath**: string: The name of the directory where reports will be uploaded.

## ReportDeliveryInfo
### Properties
* **destination**: [ReportDeliveryDestination](#reportdeliverydestination) (Required): Has destination for the report being delivered.

## ReportFilter
### Properties
* **and**: [ReportFilter](#reportfilter)[]: The logical "AND" expression. Must have at least 2 items.
* **dimension**: [ReportComparisonExpression](#reportcomparisonexpression): Has comparison expression for a dimension
* **not**: [ReportFilter](#reportfilter): The logical "NOT" expression.
* **or**: [ReportFilter](#reportfilter)[]: The logical "OR" expression. Must have at least 2 items.
* **tag**: [ReportComparisonExpression](#reportcomparisonexpression): Has comparison expression for a tag

## ReportGrouping
### Properties
* **name**: string (Required): The name of the column to group.
* **type**: 'Dimension' | 'Tag' | string (Required): Has type of the column to group.

## ReportProperties
### Properties
* **definition**: [ReportDefinition](#reportdefinition) (Required): Has definition for the report.
* **deliveryInfo**: [ReportDeliveryInfo](#reportdeliveryinfo) (Required): Has delivery information for the report.
* **format**: 'Csv' | string: The format of the report being delivered.
* **schedule**: [ReportSchedule](#reportschedule): Has schedule information for the report.

## ReportRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence.

## ReportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' | string (Required): The schedule recurrence.
* **recurrencePeriod**: [ReportRecurrencePeriod](#reportrecurrenceperiod): Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
* **status**: 'Active' | 'Inactive' | string: The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused.

## ReportTimePeriod
### Properties
* **from**: string (Required): The start date to pull data from.
* **to**: string (Required): The end date to pull data to.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

