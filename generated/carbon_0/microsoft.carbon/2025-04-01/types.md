# Microsoft.Carbon @ 2025-04-01

## Function carbonEmissionReports (Microsoft.Carbon@2025-04-01)
* **Resource**: Microsoft.Carbon
* **ApiVersion**: 2025-04-01
* **Input**: [QueryFilter](#queryfilter)
* **Output**: [CarbonEmissionDataListResult](#carbonemissiondatalistresult)

## Function queryCarbonEmissionDataAvailableDateRange (Microsoft.Carbon@2025-04-01)
* **Resource**: Microsoft.Carbon
* **ApiVersion**: 2025-04-01
* **Output**: [CarbonEmissionDataAvailableDateRange](#carbonemissiondataavailabledaterange)

## CarbonEmissionData
* **Discriminator**: dataType

### Base Properties
* **latestMonthEmissions**: int (Required): Total carbon emissions for the specified query parameters, measured in kgCO2E. This value represents total emissions over the specified date range (e.g., March-June).
* **monthlyEmissionsChangeValue**: int: The change in carbon emissions between the current and previous period, calculated as: latestMonthEmissions - previousMonthEmissions.
* **monthOverMonthEmissionsChangeRatio**: int: The percentage change in carbon emissions between the current and previous DateRange. This is calculated as: (latestMonthEmissions - previousMonthEmissions) / previousMonthEmissions.
* **previousMonthEmissions**: int (Required): Total carbon emissions for the previous month’s date range, which is the same period as the specified date range but shifted left by one month (e.g., if the specified range is March - June, the previous month’s range will be Feb - May). The value is measured in kgCO2E.

### CarbonEmissionItemDetailData
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): Item category, see supported type value defined in CategoryTypeEnum
* **dataType**: 'ItemDetailsData' (Required): The data type of the query result, indicating the format of the returned response.
* **itemName**: string (Required): Item name, it can be resource name, resource type name, location, resource group name or subscriptionId. It depends on category type.

### CarbonEmissionMonthlySummaryData
#### Properties
* **carbonIntensity**: int (Required): Carbon intensity for the specified month, typically in units of kgCO2E per unit of normalized usage
* **dataType**: 'MonthlySummaryData' (Required): The data type of the query result, indicating the format of the returned response.
* **date**: string (Required): The date, representing the month, for which the emissions data is reported, formatted as yyyy-MM-dd (e.g., 2024-03-01)

### CarbonEmissionOverallSummaryData
#### Properties
* **dataType**: 'OverallSummaryData' (Required): The data type of the query result, indicating the format of the returned response.

### ResourceGroupCarbonEmissionItemDetailData
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): ResourceGroup Item category
* **dataType**: 'ResourceGroupItemDetailsData' (Required): The data type of the query result, indicating the format of the returned response.
* **itemName**: string (Required): It's resource group name
* **resourceGroupUrl**: string (Required): Resource Group url, value format is '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}'
* **subscriptionId**: string (Required): Subscription Id

### ResourceGroupCarbonEmissionTopItemMonthlySummaryData
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): ResourceGroup Item category
* **dataType**: 'ResourceGroupTopItemsMonthlySummaryData' (Required): The data type of the query result, indicating the format of the returned response.
* **date**: string (Required): Monthly date string, format is yyyy-MM-dd
* **itemName**: string (Required): It's resource group name for ResourceGroup category
* **resourceGroupUrl**: string (Required): Resource Group url, the format is '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}'
* **subscriptionId**: string (Required): Subscription Id

### ResourceGroupCarbonEmissionTopItemsSummaryData
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): ResourceGroup Item category
* **dataType**: 'ResourceGroupTopItemsSummaryData' (Required): The data type of the query result, indicating the format of the returned response.
* **itemName**: string (Required): The resourceGroup name of the resource for ResourceGroup Category
* **resourceGroupUrl**: string (Required): Resource Group url, value format is '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}'
* **subscriptionId**: string (Required): Subscription Id

### ResourceCarbonEmissionItemDetailData
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): Resource Item category, see supported value defined in CategoryTypeEnum
* **dataType**: 'ResourceItemDetailsData' (Required): The data type of the query result, indicating the format of the returned response.
* **itemName**: string (Required): It's resource name.
* **location**: string: Resource Location (e.g., 'east us').
* **resourceGroup**: string (Required): Resource Group
* **resourceId**: string (Required): The fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **resourceType**: string: The type of resource, for example: microsoft.storage/storageaccounts
* **subscriptionId**: string (Required): Subscription Id

### ResourceCarbonEmissionTopItemMonthlySummaryData
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): Resource Item category
* **dataType**: 'ResourceTopItemsMonthlySummaryData' (Required): The data type of the query result, indicating the format of the returned response.
* **date**: string (Required): Monthly date string, format is yyyy-MM-dd
* **itemName**: string (Required): The resource name of resource for Resource Category
* **resourceGroup**: string (Required): Resource Group
* **resourceId**: string (Required): The fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **subscriptionId**: string (Required): Subscription Id

### ResourceCarbonEmissionTopItemsSummaryData
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): The category type of the item. This defines which dimension the emissions are aggregated by, and the supported values are defined in CategoryTypeEnum (e.g., Subscription, ResourceGroup, Resource, etc.).
* **dataType**: 'ResourceTopItemsSummaryData' (Required): The data type of the query result, indicating the format of the returned response.
* **itemName**: string (Required): The resource name of the resource for the Resource Category.
* **resourceGroup**: string (Required): Resource group name
* **resourceId**: string (Required): Resource Id, The URI of the resource for the Resource Category. This identifies the resource being reported.
* **subscriptionId**: string (Required): Subscription Id

### CarbonEmissionTopItemMonthlySummaryData
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): Item category, see supported type value defined in CategoryTypeEnum
* **dataType**: 'TopItemsMonthlySummaryData' (Required): The data type of the query result, indicating the format of the returned response.
* **date**: string (Required): The date, representing the month, for which the emissions data is reported, formatted as yyyy-MM-dd (e.g., 2024-03-01)
* **itemName**: string (Required): Item name, it can be resource name, resource type name, location, resource group name or subscriptionId. It depends on category type.

### CarbonEmissionTopItemsSummaryData
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): The category type of the item. This defines which dimension the emissions are aggregated by, and the supported values are defined in CategoryTypeEnum (e.g., Subscription, ResourceGroup, Resource, etc.).
* **dataType**: 'TopItemsSummaryData' (Required): The data type of the query result, indicating the format of the returned response.
* **itemName**: string (Required): The identifier of the item being reported on, which could refer to the resource name, resource type name, location, resource group name, or subscription ID, depending on the specified category type.


## CarbonEmissionDataAvailableDateRange
### Properties
* **endDate**: string (Required): End date parameter, format is yyyy-MM-dd
* **startDate**: string (Required): Start date parameter, format is yyyy-MM-dd

## CarbonEmissionDataListResult
### Properties
* **skipToken**: string: The pagination token to fetch next page data, it's null or empty if it doesn't have next page data
* **subscriptionAccessDecisionList**: [SubscriptionAccessDecision](#subscriptionaccessdecision)[]: The access decision list for each input subscription
* **value**: [CarbonEmissionData](#carbonemissiondata)[] (Required): The CarbonEmissionData items on this page

## DateRange
### Properties
* **end**: string (Required): End date parameter in yyyy-MM-01 format. Only the first day of each month is accepted.
* **start**: string (Required): Start date parameter in yyyy-MM-01 format. Only the first day of each month is accepted.

## QueryFilter
* **Discriminator**: reportType

### Base Properties
* **carbonScopeList**: ('Scope1' | 'Scope2' | 'Scope3' | string)[] (Required): List of carbon emission scopes. Required. Accepts one or more values from EmissionScopeEnum (e.g., Scope1, Scope2, Scope3) in list form. The output will include the total emissions for the specified scopes.
* **dateRange**: [DateRange](#daterange) (Required): The start and end dates for carbon emissions data. Required. For ItemDetailsReport and TopItemsSummaryReport, only one month of data is supported at a time, so start and end dates should be equal within DateRange (e.g., start: 2024-06-01 and end: 2024-06-01).
* **locationList**: string[]: List of locations(Azure Region Display Name) for carbon emissions data, with each location specified in lowercase (e.g., 'east us'). Optional. You can use the command 'az account list-locations -o table' to find Azure Region Display Names.
* **resourceGroupUrlList**: string[]: List of resource group URLs for carbon emissions data. Optional. Each URL must follow the format '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}', and should be in all lowercase.
* **resourceTypeList**: string[]: List of resource types for carbon emissions data. Optional. Each resource type should be specified in lowercase, following the format 'microsoft.{service}/{resourceType}', e.g., 'microsoft.storage/storageaccounts'.
* **subscriptionList**: string[] (Required): List of subscription IDs for which carbon emissions data is requested. Required. Each subscription ID should be in lowercase format. The max length of list is 100.

### ItemDetailsQueryFilter
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): Specifies the category type for detailed emissions data, such as Resource, ResourceGroup, ResourceType, Location, or Subscription. See supported types in CategoryTypeEnum.
* **orderBy**: 'ItemName' | 'LatestMonthEmissions' | 'MonthOverMonthEmissionsChangeRatio' | 'MonthlyEmissionsChangeValue' | 'PreviousMonthEmissions' | 'ResourceGroup' | string (Required): The column name to order the results by. See supported values in OrderByColumnEnum.
* **pageSize**: int {minValue: 1, maxValue: 5000} (Required): Number of items to return in one request, max value is 5000.
* **reportType**: 'ItemDetailsReport' (Required): The ReportType requested for carbon emissions data. Required. Specifies how data is aggregated and displayed in the output, as explained in the ReportTypeEnum.
* **skipToken**: string: Pagination token for fetching the next page of data. This token is nullable and will be returned in the previous response if additional data pages are available.
* **sortDirection**: 'Asc' | 'Desc' | string (Required): Direction for sorting results. See supported values in SortDirectionEnum.

### MonthlySummaryReportQueryFilter
#### Properties
* **reportType**: 'MonthlySummaryReport' (Required): The ReportType requested for carbon emissions data. Required. Specifies how data is aggregated and displayed in the output, as explained in the ReportTypeEnum.

### OverallSummaryReportQueryFilter
#### Properties
* **reportType**: 'OverallSummaryReport' (Required): The ReportType requested for carbon emissions data. Required. Specifies how data is aggregated and displayed in the output, as explained in the ReportTypeEnum.

### TopItemsMonthlySummaryReportQueryFilter
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): Specifies the category type to retrieve top-emitting items, aggregated by month. See supported types in CategoryTypeEnum.
* **reportType**: 'TopItemsMonthlySummaryReport' (Required): The ReportType requested for carbon emissions data. Required. Specifies how data is aggregated and displayed in the output, as explained in the ReportTypeEnum.
* **topItems**: int {minValue: 1, maxValue: 10} (Required): The number of top items to return, based on emissions. Must be between 1 and 10.

### TopItemsSummaryReportQueryFilter
#### Properties
* **categoryType**: 'Location' | 'Resource' | 'ResourceGroup' | 'ResourceType' | 'Subscription' | string (Required): Specifies the category type for which to retrieve top-emitting items. See supported values defined in CategoryTypeEnum.
* **reportType**: 'TopItemsSummaryReport' (Required): The ReportType requested for carbon emissions data. Required. Specifies how data is aggregated and displayed in the output, as explained in the ReportTypeEnum.
* **topItems**: int {minValue: 1, maxValue: 10} (Required): The number of top items to return, based on emissions. This value must be between 1 and 10.


## SubscriptionAccessDecision
### Properties
* **decision**: 'Allowed' | 'Denied' | string (Required): Access decision to subscription
* **denialReason**: string: The reason why access request got denied
* **subscriptionId**: string (Required): Id of Subscription

