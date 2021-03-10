# Microsoft.CostManagement @ 2019-09-01

## Resource Microsoft.CostManagement/exports@2019-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExportProperties](#exportproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant)

## ExportProperties
### Properties
* **definition**: [QueryDefinition](#querydefinition) (Required)
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required)
* **format**: 'Csv'
* **schedule**: [ExportSchedule](#exportschedule)

## QueryDefinition
### Properties
* **dataset**: [QueryDataset](#querydataset)
* **timeframe**: 'Custom' | 'MonthToDate' | 'TheLastMonth' | 'TheLastWeek' | 'TheLastYear' | 'WeekToDate' | 'YearToDate' (Required)
* **timePeriod**: [QueryTimePeriod](#querytimeperiod)
* **type**: string (Required)

## QueryDataset
### Properties
* **aggregation**: [Dictionary<string,QueryAggregation>](#dictionarystringqueryaggregation)
* **configuration**: [QueryDatasetConfiguration](#querydatasetconfiguration)
* **filter**: [QueryFilter](#queryfilter)
* **granularity**: 'Daily' | 'Hourly'
* **grouping**: [QueryGrouping](#querygrouping)[]
* **sorting**: [QuerySortingConfiguration](#querysortingconfiguration)[]

## Dictionary<string,QueryAggregation>
### Properties
### Additional Properties
* **Additional Properties Type**: [QueryAggregation](#queryaggregation)

## QueryAggregation
### Properties
* **function**: string (Required)
* **name**: string (Required)

## QueryDatasetConfiguration
### Properties
* **columns**: string[]

## QueryFilter
### Properties
* **and**: [QueryFilter](#queryfilter)[]
* **dimension**: [QueryComparisonExpression](#querycomparisonexpression)
* **not**: [QueryFilter](#queryfilter)
* **or**: [QueryFilter](#queryfilter)[]
* **tag**: [QueryComparisonExpression](#querycomparisonexpression)

## QueryComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: string (Required)
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
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required)

## ExportDeliveryDestination
### Properties
* **container**: string (Required)
* **resourceId**: string (Required)
* **rootFolderPath**: string

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required)
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod)
* **status**: 'Active' | 'Inactive'

## ExportRecurrencePeriod
### Properties
* **from**: string (Required)
* **to**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

