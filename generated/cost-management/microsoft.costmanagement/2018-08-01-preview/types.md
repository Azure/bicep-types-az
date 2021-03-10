# Microsoft.CostManagement @ 2018-08-01-preview

## Resource Microsoft.CostManagement/connectors@2018-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectorProperties](#connectorproperties)
* **tags**: [ConnectorDefinitionTags](#connectordefinitiontags)
* **type**: 'Microsoft.CostManagement/connectors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/reports@2018-08-01-preview
* **Valid Scope(s)**: Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2018-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ReportProperties](#reportproperties)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly)
* **type**: 'Microsoft.CostManagement/reports' (ReadOnly, DeployTimeConstant)

## ConnectorProperties
### Properties
* **collection**: [ConnectorCollectionInfo](#connectorcollectioninfo) (ReadOnly)
* **createdOn**: string (ReadOnly)
* **credentialsKey**: string
* **credentialsSecret**: string
* **displayName**: string
* **modifiedOn**: string (ReadOnly)
* **providerAccountId**: string (ReadOnly)
* **reportId**: string
* **status**: 'active' | 'error' | 'suspended'

## ConnectorCollectionInfo
### Properties
* **error**: [ConnectorCollectionErrorInfo](#connectorcollectionerrorinfo)
* **lastRun**: string (ReadOnly)
* **lastUpdated**: string (ReadOnly)
* **sourceLastUpdated**: string (ReadOnly)

## ConnectorCollectionErrorInfo
### Properties
* **errorCode**: string (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **errorStartTime**: string (ReadOnly)

## ConnectorDefinitionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ReportProperties
### Properties
* **definition**: [ReportDefinition](#reportdefinition) (Required)
* **deliveryInfo**: [ReportDeliveryInfo](#reportdeliveryinfo) (Required)
* **format**: 'Csv'
* **schedule**: [ReportSchedule](#reportschedule)

## ReportDefinition
### Properties
* **dataset**: [ReportDataset](#reportdataset)
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' (Required)
* **timePeriod**: [ReportTimePeriod](#reporttimeperiod)
* **type**: 'Usage' (Required)

## ReportDataset
### Properties
* **aggregation**: [ReportDatasetAggregation](#reportdatasetaggregation)
* **configuration**: [ReportDatasetConfiguration](#reportdatasetconfiguration)
* **filter**: [ReportFilter](#reportfilter)
* **granularity**: 'Daily' | 'Hourly'
* **grouping**: [ReportGrouping](#reportgrouping)[]

## ReportDatasetAggregation
### Properties
### Additional Properties
* **Additional Properties Type**: [ReportAggregation](#reportaggregation)

## ReportAggregation
### Properties
* **function**: 'Sum' (Required)
* **name**: string (Required)

## ReportDatasetConfiguration
### Properties
* **columns**: string[]

## ReportFilter
### Properties
* **and**: [ReportFilter](#reportfilter)[]
* **dimension**: [ReportComparisonExpression](#reportcomparisonexpression)
* **not**: [ReportFilter](#reportfilter)
* **or**: [ReportFilter](#reportfilter)[]
* **tag**: [ReportComparisonExpression](#reportcomparisonexpression)

## ReportComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: 'In' (Required)
* **values**: string[] (Required)

## ReportGrouping
### Properties
* **name**: string (Required)
* **type**: 'Dimension' | 'Tag' (Required)

## ReportTimePeriod
### Properties
* **from**: string (Required)
* **to**: string (Required)

## ReportDeliveryInfo
### Properties
* **destination**: [ReportDeliveryDestination](#reportdeliverydestination) (Required)

## ReportDeliveryDestination
### Properties
* **container**: string (Required)
* **resourceId**: string (Required)
* **rootFolderPath**: string

## ReportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required)
* **recurrencePeriod**: [ReportRecurrencePeriod](#reportrecurrenceperiod)
* **status**: 'Active' | 'Inactive'

## ReportRecurrencePeriod
### Properties
* **from**: string (Required)
* **to**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

