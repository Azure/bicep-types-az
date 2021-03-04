# Microsoft.CostManagement @ 2019-09-01

## Resource Microsoft.CostManagement/exports@2019-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExportProperties
* **tags**: ResourceTags (ReadOnly)
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant)

## ExportProperties
### Properties
* **definition**: QueryDefinition (Required)
* **deliveryInfo**: ExportDeliveryInfo (Required)
* **format**: 'Csv'
* **schedule**: ExportSchedule

## QueryDefinition
### Properties
* **dataset**: QueryDataset
* **timeframe**: 'Custom' | 'MonthToDate' | 'TheLastMonth' | 'TheLastWeek' | 'TheLastYear' | 'WeekToDate' | 'YearToDate' (Required)
* **timePeriod**: QueryTimePeriod
* **type**: 'Usage' (Required)

## QueryDataset
### Properties
* **aggregation**: QueryDatasetAggregation
* **configuration**: QueryDatasetConfiguration
* **filter**: QueryFilter
* **granularity**: 'Daily' | 'Hourly'
* **grouping**: QueryGrouping[]
* **sorting**: QuerySortingConfiguration[]

## QueryDatasetAggregation
### Properties
### Additional Properties
* **Additional Properties Type**: QueryAggregation

## QueryAggregation
### Properties
* **function**: 'Sum' (Required)
* **name**: string (Required)

## QueryDatasetConfiguration
### Properties
* **columns**: string[]

## QueryFilter
### Properties
* **and**: QueryFilter[]
* **dimension**: QueryComparisonExpression
* **not**: QueryFilter
* **or**: QueryFilter[]
* **tag**: QueryComparisonExpression

## QueryComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: 'In' (Required)
* **values**: string[] (Required)

## QueryGrouping
### Properties
* **name**: string (Required)
* **type**: 'Dimension' | 'Tag' (Required)

## QuerySortingConfiguration
### Properties
* **name**: string
* **querySortingDirection**: 'Ascending' | 'Descending'

## QueryTimePeriod
### Properties
* **from**: string (Required)
* **to**: string (Required)

## ExportDeliveryInfo
### Properties
* **destination**: ExportDeliveryDestination (Required)

## ExportDeliveryDestination
### Properties
* **container**: string (Required)
* **resourceId**: string (Required)
* **rootFolderPath**: string

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required)
* **recurrencePeriod**: ExportRecurrencePeriod
* **status**: 'Active' | 'Inactive'

## ExportRecurrencePeriod
### Properties
* **from**: string (Required)
* **to**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

