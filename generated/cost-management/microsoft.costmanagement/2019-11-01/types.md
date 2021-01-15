# Microsoft.CostManagement @ 2019-11-01

## Resource Microsoft.CostManagement/exports@2019-11-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExportProperties
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant)

## ExportProperties
### Properties
* **definition**: ExportDefinition (Required)
* **deliveryInfo**: ExportDeliveryInfo (Required)
* **format**: 'Csv'
* **schedule**: ExportSchedule

## ExportDefinition
### Properties
* **dataSet**: QueryDataset
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' (Required)
* **timePeriod**: QueryTimePeriod
* **type**: 'ActualCost' | 'AmortizedCost' | 'Usage' (Required)

## QueryDataset
### Properties
* **aggregation**: Dictionary<string,QueryAggregation>
* **configuration**: QueryDatasetConfiguration
* **filter**: QueryFilter
* **granularity**: 'Daily'
* **grouping**: QueryGrouping[]

## Dictionary<string,QueryAggregation>
### Properties
### Additional Properties
* **Additional Properties Type**: QueryAggregation

## QueryAggregation
### Properties
* **function**: string (Required)
* **name**: string (Required)

## QueryDatasetConfiguration
### Properties
* **columns**: string[]

## QueryFilter
### Properties
* **and**: QueryFilter[]
* **dimensions**: QueryComparisonExpression
* **or**: QueryFilter[]
* **tags**: QueryComparisonExpression

## QueryComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: string (Required)
* **values**: string[] (Required)

## QueryGrouping
### Properties
* **name**: string (Required)
* **type**: 'Dimension' | 'Tag' (Required)

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

