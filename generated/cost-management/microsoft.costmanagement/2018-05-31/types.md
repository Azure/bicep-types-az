# Microsoft.CostManagement @ 2018-05-31

## Resource Microsoft.CostManagement/reportconfigs@2018-05-31
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2018-05-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReportConfigProperties](#reportconfigproperties): The properties of the report config.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.CostManagement/reportconfigs' (ReadOnly, DeployTimeConstant): The resource type

## ReportConfigAggregation
### Properties
* **function**: 'Sum' | string (Required): The name of the aggregation function to use.
* **name**: string (Required): The name of the column to aggregate.

## ReportConfigComparisonExpression
### Properties
* **name**: string (Required): The name of the column to use in comparison.
* **operator**: 'In' | string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## ReportConfigDataset
### Properties
* **aggregation**: [ReportConfigDatasetAggregation](#reportconfigdatasetaggregation): Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
* **configuration**: [ReportConfigDatasetConfiguration](#reportconfigdatasetconfiguration): Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
* **filter**: [ReportConfigFilter](#reportconfigfilter): Has filter expression to use in the report.
* **granularity**: 'Daily' | string: The granularity of rows in the report.
* **grouping**: [ReportConfigGrouping](#reportconfiggrouping)[]: Array of group by expression to use in the report. Report can have up to 2 group by clauses.

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
* **type**: 'Usage' | string (Required): The type of the report.

## ReportConfigDeliveryDestination
### Properties
* **container**: string (Required): The name of the container where reports will be uploaded.
* **resourceId**: string (Required): The resource id of the storage account where reports will be delivered.
* **rootFolderPath**: string: The name of the directory where reports will be uploaded.

## ReportConfigDeliveryInfo
### Properties
* **destination**: [ReportConfigDeliveryDestination](#reportconfigdeliverydestination) (Required): Has destination for the report being delivered.

## ReportConfigFilter
### Properties
* **and**: [ReportConfigFilter](#reportconfigfilter)[]: The logical "AND" expression. Must have at least 2 items.
* **dimension**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): Has comparison expression for a dimension
* **not**: [ReportConfigFilter](#reportconfigfilter): The logical "NOT" expression.
* **or**: [ReportConfigFilter](#reportconfigfilter)[]: The logical "OR" expression. Must have at least 2 items.
* **tag**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression): Has comparison expression for a tag

## ReportConfigGrouping
### Properties
* **columnType**: 'Dimension' | 'Tag' | string (Required): Has type of the column to group.
* **name**: string (Required): The name of the column to group.

## ReportConfigProperties
### Properties
* **definition**: [ReportConfigDefinition](#reportconfigdefinition) (Required): Has definition for the report config.
* **deliveryInfo**: [ReportConfigDeliveryInfo](#reportconfigdeliveryinfo) (Required): Has delivery information for the report config.
* **format**: 'Csv' | string: The format of the report being delivered.
* **schedule**: [ReportConfigSchedule](#reportconfigschedule): Has schedule information for the report config.

## ReportConfigRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence. If not provided, we default this to 10 years from the start date.

## ReportConfigSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' | string (Required): The schedule recurrence.
* **recurrencePeriod**: [ReportConfigRecurrencePeriod](#reportconfigrecurrenceperiod) (Required): Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
* **status**: 'Active' | 'Inactive' | string: The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused.

## ReportConfigTimePeriod
### Properties
* **from**: string (Required): The start date to pull data from.
* **to**: string (Required): The end date to pull data to.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

