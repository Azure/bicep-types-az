# Microsoft.Billing @ 2019-10-01

## Resource Microsoft.Billing/billingPeriods/Microsoft.Consumption@2019-10-01 (ReadOnly)
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'aggregatedCost' (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementGroupAggregatedCostProperties](#managementgroupaggregatedcostproperties) (ReadOnly): The properties of the Management Group Aggregated Cost.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Billing/billingPeriods/Microsoft.Consumption' (ReadOnly, DeployTimeConstant): The resource type

## ManagementGroupAggregatedCostProperties
### Properties
* **azureCharges**: int (ReadOnly): Azure Charges.
* **billingPeriodId**: string (ReadOnly): The id of the billing period resource that the aggregated cost belongs to.
* **chargesBilledSeparately**: int (ReadOnly): Charges Billed Separately.
* **children**: [ManagementGroupAggregatedCostResult](#managementgroupaggregatedcostresult)[]: Children of a management group
* **currency**: string (ReadOnly): The ISO currency in which the meter is charged, for example, USD.
* **excludedSubscriptions**: string[]: List of subscription Guids excluded from the calculation of aggregated cost
* **includedSubscriptions**: string[]: List of subscription Guids included in the calculation of aggregated cost
* **marketplaceCharges**: int (ReadOnly): Marketplace Charges.
* **usageEnd**: string (ReadOnly): The end of the date time range covered by the aggregated cost.
* **usageStart**: string (ReadOnly): The start of the date time range covered by aggregated cost.

## ManagementGroupAggregatedCostResult
### Properties
* **etag**: string (ReadOnly): Resource etag.
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ManagementGroupAggregatedCostProperties](#managementgroupaggregatedcostproperties): The properties of the Management Group Aggregated Cost.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

