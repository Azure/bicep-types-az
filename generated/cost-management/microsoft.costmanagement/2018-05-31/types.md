# Microsoft.CostManagement @ 2018-05-31

## Resource Microsoft.CostManagement/reportconfigs@2018-05-31
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2018-05-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReportConfigProperties
* **tags**: ResourceTags (ReadOnly)
* **type**: 'Microsoft.CostManagement/reportconfigs' (ReadOnly, DeployTimeConstant)

## ReportConfigProperties
### Properties
* **definition**: ReportConfigDefinition (Required)
* **deliveryInfo**: ReportConfigDeliveryInfo (Required)
* **format**: 'Csv'
* **schedule**: ReportConfigSchedule

## ReportConfigDefinition
### Properties
* **dataset**: ReportConfigDataset
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' (Required)
* **timePeriod**: ReportConfigTimePeriod
* **type**: 'Usage' (Required)

## ReportConfigDataset
### Properties
* **aggregation**: ReportConfigDatasetAggregation
* **configuration**: ReportConfigDatasetConfiguration
* **filter**: ReportConfigFilter
* **granularity**: 'Daily'
* **grouping**: ReportConfigGrouping[]

## ReportConfigDatasetAggregation
### Properties
### Additional Properties
* **Additional Properties Type**: ReportConfigAggregation

## ReportConfigAggregation
### Properties
* **function**: 'Sum' (Required)
* **name**: string (Required)

## ReportConfigDatasetConfiguration
### Properties
* **columns**: string[]

## ReportConfigFilter
### Properties
* **and**: ReportConfigFilter[]
* **dimension**: ReportConfigComparisonExpression
* **not**: ReportConfigFilter
* **or**: ReportConfigFilter[]
* **tag**: ReportConfigComparisonExpression

## ReportConfigComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: 'In' (Required)
* **values**: string[] (Required)

## ReportConfigGrouping
### Properties
* **columnType**: 'Dimension' | 'Tag' (Required)
* **name**: string (Required)

## ReportConfigTimePeriod
### Properties
* **from**: string (Required)
* **to**: string (Required)

## ReportConfigDeliveryInfo
### Properties
* **destination**: ReportConfigDeliveryDestination (Required)

## ReportConfigDeliveryDestination
### Properties
* **container**: string (Required)
* **resourceId**: string (Required)
* **rootFolderPath**: string

## ReportConfigSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required)
* **recurrencePeriod**: ReportConfigRecurrencePeriod (Required)
* **status**: 'Active' | 'Inactive'

## ReportConfigRecurrencePeriod
### Properties
* **from**: string (Required)
* **to**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

