# Microsoft.CostManagement @ 2018-12-01-preview

## Function Forecast (Microsoft.CostManagement@2018-12-01-preview)
* **Resource**: Microsoft.CostManagement
* **ApiVersion**: 2018-12-01-preview
* **Input**: [ReportConfigDefinition](#reportconfigdefinition)
* **Output**: [QueryResult](#queryresult)

## Function Query (Microsoft.CostManagement@2018-12-01-preview)
* **Resource**: Microsoft.CostManagement
* **ApiVersion**: 2018-12-01-preview
* **Input**: [ReportConfigDefinition](#reportconfigdefinition)
* **Output**: [QueryResult](#queryresult)

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

