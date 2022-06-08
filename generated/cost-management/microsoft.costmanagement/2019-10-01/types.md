# Microsoft.CostManagement @ 2019-10-01

## Resource Microsoft.CostManagement/exports@2019-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExportProperties](#exportproperties): The properties of the export.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant): The resource type

## ExportDeliveryDestination
### Properties
* **container**: string (Required): The name of the container where exports will be uploaded.
* **resourceId**: string (Required): The resource id of the storage account where exports will be delivered.
* **rootFolderPath**: string: The name of the directory where exports will be uploaded.

## ExportDeliveryInfo
### Properties
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required): The destination information for the delivery of the export.

## ExportProperties
### Properties
* **definition**: [QueryDefinition](#querydefinition) (Required): The definition of a query.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): The delivery information associated with a export.
* **format**: 'Csv' | string: The format of the export being delivered.
* **schedule**: [ExportSchedule](#exportschedule): The schedule associated with a export.

## ExportRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence.

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' | string (Required): The schedule recurrence.
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod): The start and end date for recurrence schedule.
* **status**: 'Active' | 'Inactive' | string: The status of the schedule. Whether active or not. If inactive, the export's scheduled execution is paused.

## QueryAggregation
### Properties
* **function**: 'Sum' | string (Required): The name of the aggregation function to use.
* **name**: string (Required): The name of the column to aggregate.

## QueryComparisonExpression
### Properties
* **name**: string (Required): The name of the column to use in comparison.
* **operator**: 'In' | string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## QueryDataset
### Properties
* **aggregation**: [QueryDatasetAggregation](#querydatasetaggregation): Dictionary of aggregation expression to use in the query. The key of each item in the dictionary is the alias for the aggregated column. Query can have up to 2 aggregation clauses.
* **configuration**: [QueryDatasetConfiguration](#querydatasetconfiguration): The configuration of dataset in the query.
* **filter**: [QueryFilter](#queryfilter): The filter expression to be used in the export.
* **granularity**: 'Daily' | 'Hourly' | string: The granularity of rows in the query.
* **grouping**: [QueryGrouping](#querygrouping)[]: Array of group by expression to use in the query. Query can have up to 2 group by clauses.
* **sorting**: [QuerySortingConfiguration](#querysortingconfiguration)[]: Array of sorting by columns in query.

## QueryDatasetAggregation
### Properties
### Additional Properties
* **Additional Properties Type**: [QueryAggregation](#queryaggregation)

## QueryDatasetConfiguration
### Properties
* **columns**: string[]: Array of column names to be included in the query. Any valid query column name is allowed. If not provided, then query includes all columns.

## QueryDefinition
### Properties
* **dataset**: [QueryDataset](#querydataset): The definition of data present in the query.
* **timeframe**: 'Custom' | 'MonthToDate' | 'TheLastMonth' | 'TheLastWeek' | 'TheLastYear' | 'WeekToDate' | 'YearToDate' | string (Required): The time frame for pulling data for the query. If custom, then a specific time period must be provided.
* **timePeriod**: [QueryTimePeriod](#querytimeperiod): The start and end date for pulling data for the query.
* **type**: 'Usage' | string (Required): The type of the query.

## QueryFilter
### Properties
* **and**: [QueryFilter](#queryfilter)[]: The logical "AND" expression. Must have at least 2 items.
* **dimension**: [QueryComparisonExpression](#querycomparisonexpression): The comparison expression to be used in the query.
* **not**: [QueryFilter](#queryfilter): The filter expression to be used in the export.
* **or**: [QueryFilter](#queryfilter)[]: The logical "OR" expression. Must have at least 2 items.
* **tag**: [QueryComparisonExpression](#querycomparisonexpression): The comparison expression to be used in the query.

## QueryGrouping
### Properties
* **name**: string (Required): The name of the column to group.
* **type**: 'Dimension' | 'Tag' | string (Required): The type of the column in the export.

## QuerySortingConfiguration
### Properties
* **name**: string: The name of the column to use in sorting.
* **querySortingDirection**: 'Ascending' | 'Descending' | string: The sorting direction

## QueryTimePeriod
### Properties
* **from**: string (Required): The start date to pull data from.
* **to**: string (Required): The end date to pull data to.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

