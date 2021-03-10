# Microsoft.CostManagement @ 2018-05-31

## Resource Microsoft.CostManagement/reportconfigs@2018-05-31
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2018-05-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ReportConfigProperties](#reportconfigproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.CostManagement/reportconfigs' (ReadOnly, DeployTimeConstant)

## ReportConfigProperties
### Properties
* **definition**: [ReportConfigDefinition](#reportconfigdefinition) (Required)
* **deliveryInfo**: [ReportConfigDeliveryInfo](#reportconfigdeliveryinfo) (Required)
* **format**: 'Csv'
* **schedule**: [ReportConfigSchedule](#reportconfigschedule)

## ReportConfigDefinition
### Properties
* **dataset**: [ReportConfigDataset](#reportconfigdataset)
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' | 'YearToDate' (Required)
* **timePeriod**: [ReportConfigTimePeriod](#reportconfigtimeperiod)
* **type**: string (Required)

## ReportConfigDataset
### Properties
* **aggregation**: [Dictionary<string,ReportConfigAggregation>](#dictionarystringreportconfigaggregation)
* **configuration**: [ReportConfigDatasetConfiguration](#reportconfigdatasetconfiguration)
* **filter**: [ReportConfigFilter](#reportconfigfilter)
* **granularity**: 'Daily'
* **grouping**: [ReportConfigGrouping](#reportconfiggrouping)[]

## Dictionary<string,ReportConfigAggregation>
### Properties
### Additional Properties
* **Additional Properties Type**: [ReportConfigAggregation](#reportconfigaggregation)

## ReportConfigAggregation
### Properties
* **function**: string (Required)
* **name**: string (Required)

## ReportConfigDatasetConfiguration
### Properties
* **columns**: string[]

## ReportConfigFilter
### Properties
* **and**: [ReportConfigFilter](#reportconfigfilter)[]
* **dimension**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)
* **not**: [ReportConfigFilter](#reportconfigfilter)
* **or**: [ReportConfigFilter](#reportconfigfilter)[]
* **tag**: [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)

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
* **destination**: [ReportConfigDeliveryDestination](#reportconfigdeliverydestination) (Required)

## ReportConfigDeliveryDestination
### Properties
* **container**: string (Required)
* **resourceId**: string (Required)
* **rootFolderPath**: string

## ReportConfigSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required)
* **recurrencePeriod**: [ReportConfigRecurrencePeriod](#reportconfigrecurrenceperiod) (Required)
* **status**: 'Active' | 'Inactive'

## ReportConfigRecurrencePeriod
### Properties
* **from**: string (Required)
* **to**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

