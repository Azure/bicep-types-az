# Microsoft.CostManagement @ 2018-05-31

## Microsoft.CostManagement/reportconfigs
### Properties
* **apiVersion**: '2018-05-31' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReportConfigProperties
* **tags**: Dictionary<string,String> (ReadOnly)
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
* **timePeriod**: ReportConfigTimePeriod
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' (Required)
* **type**: string (Required)

## ReportConfigDataset
### Properties
* **aggregation**: Dictionary<string,ReportConfigAggregation>
* **configuration**: ReportConfigDatasetConfiguration
* **filter**: ReportConfigFilter
* **granularity**: 'Daily'
* **grouping**: ReportConfigGrouping[]

## Dictionary<string,ReportConfigAggregation>
### Additional Properties
* **Additional Properties Type**: ReportConfigAggregation

## ReportConfigAggregation
### Properties
* **function**: string (Required)
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
* **operator**: string (Required)
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.CostManagement/reportconfigs
### Properties
* **apiVersion**: '2018-05-31' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReportConfigProperties
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.CostManagement/reportconfigs' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

