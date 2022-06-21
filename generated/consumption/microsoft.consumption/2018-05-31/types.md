# Microsoft.Consumption @ 2018-05-31

## Resource Microsoft.Consumption/pricesheets@2018-05-31 (ReadOnly)
* **Valid Scope(s)**: Subscription, Extension
### Properties
* **apiVersion**: '2018-05-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [PriceSheetModel](#pricesheetmodel) (ReadOnly): price sheet result. It contains the pricesheet associated with billing period
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Consumption/pricesheets' (ReadOnly, DeployTimeConstant): The resource type

## MeterDetails
### Properties
* **meterCategory**: string (ReadOnly): The category of the meter, for example, 'Cloud services', 'Networking', etc..
* **meterLocation**: string (ReadOnly): The location in which the Azure service is available.
* **meterName**: string (ReadOnly): The name of the meter, within the given meter category
* **meterSubCategory**: string (ReadOnly): The subcategory of the meter, for example, 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
* **pretaxStandardRate**: int (ReadOnly): The pretax listing price.
* **totalIncludedQuantity**: int (ReadOnly): The total included quantity associated with the offer.
* **unit**: string (ReadOnly): The unit in which the meter consumption is charged, for example, 'Hours', 'GB', etc.

## PriceSheetModel
### Properties
* **nextLink**: string (ReadOnly): The link (url) to the next page of results.
* **pricesheets**: [PriceSheetProperties](#pricesheetproperties)[] (ReadOnly): Price sheet

## PriceSheetProperties
### Properties
* **billingPeriodId**: string (ReadOnly): The id of the billing period resource that the usage belongs to.
* **currencyCode**: string (ReadOnly): Currency Code
* **includedQuantity**: int (ReadOnly): Included quality for an offer
* **meterDetails**: [MeterDetails](#meterdetails) (ReadOnly): The details about the meter. By default this is not populated, unless it's specified in $expand.
* **meterId**: string (ReadOnly): The meter id (GUID)
* **offerId**: string (ReadOnly): Offer Id
* **partNumber**: string (ReadOnly): Part Number
* **unitOfMeasure**: string (ReadOnly): Unit of measure
* **unitPrice**: int (ReadOnly): Unit Price

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

