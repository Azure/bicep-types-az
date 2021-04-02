# Microsoft.CostManagement @ 2018-05-31

## Resource Microsoft.CostManagement/reportconfigs@2018-05-31
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2018-05-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReportConfigProperties](#reportconfigproperties): The properties of the report config.
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Resource tags.
* **type**: 'Microsoft.CostManagement/reportconfigs' (ReadOnly, DeployTimeConstant): The resource type

## ReportConfigProperties
### Properties
* **definition**: [ReportConfigDefinition](#reportconfigdefinition) (Required): The definition of a report config.
* **deliveryInfo**: [ReportConfigDeliveryInfo](#reportconfigdeliveryinfo) (Required): The delivery information associated with a report config.
* **format**: 'Csv': The format of the report being delivered.
* **schedule**: [ReportConfigSchedule](#reportconfigschedule): The schedule associated with a report config.

## ReportConfigDefinition
### Properties
* **dataset**: [ReportConfigDataset](#reportconfigdataset): The definition of data present in the report.
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' (Required): The time frame for pulling data for the report. If custom, then a specific time period must be provided.
* **timePeriod**: [ReportConfigTimePeriod](#reportconfigtimeperiod): The start and end date for pulling data for the report.
* **type**: string (Required): The type of the report.

## ReportConfigDataset
### Properties
* **aggregation**: [Dictionary<string,ReportConfigAggregation>](#dictionarystringreportconfigaggregation): Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
* **configuration**: [ReportConfigDatasetConfiguration](#reportconfigdatasetconfiguration): The configuration of dataset in the report.
* **filter**: [ReportConfigFilter](#reportconfigfilter): The filter expression to be used in the report.
* **granularity**: 'Daily': The granularity of rows in the report.
* **grouping**: [ReportConfigGrouping](#reportconfiggrouping)[]: Array of group by expression to use in the report. Report can have up to 2 group by clauses.

## Dictionary<string,ReportConfigAggregation>
### Properties
### Additional Properties
* **Additional Properties Type**: [ReportConfigAggregation](#reportconfigaggregation)

## ReportConfigAggregation
### Properties
* **function**: string (Required): The name of the aggregation function to use.
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
* **operator**: string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## ReportConfigGrouping
### Properties
* **columnType**: 'Dimension' | 'Tag' (Required): Has type of the column to group.
* **name**: string (Required): The name of the column to group.

## ReportConfigTimePeriod
### Properties
* **from**: string (Required): The start date to pull data from.
* **to**: string (Required): The end date to pull data to.

## ReportConfigDeliveryInfo
### Properties
* **destination**: [ReportConfigDeliveryDestination](#reportconfigdeliverydestination) (Required): The destination information for the delivery of the report.

## ReportConfigDeliveryDestination
### Properties
* **container**: string (Required): The name of the container where reports will be uploaded.
* **resourceId**: string (Required): The resource id of the storage account where reports will be delivered.
* **rootFolderPath**: string: The name of the directory where reports will be uploaded.

## ReportConfigSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required): The schedule recurrence.
* **recurrencePeriod**: [ReportConfigRecurrencePeriod](#reportconfigrecurrenceperiod) (Required): The start and end date for recurrence schedule.
* **status**: 'Active' | 'Inactive': The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused.

## ReportConfigRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence. If not provided, we default this to 10 years from the start date.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

