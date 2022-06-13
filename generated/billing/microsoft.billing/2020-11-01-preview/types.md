# Microsoft.Billing @ 2020-11-01-preview

## Resource Microsoft.Billing/promotions@2020-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PromotionCreateRequestProperties](#promotioncreaterequestproperties)
* **sku**: [PromotionCreateSkuNameRequestProperties](#promotioncreateskunamerequestproperties) (WriteOnly)
* **type**: 'Microsoft.Billing/promotions' (ReadOnly, DeployTimeConstant): The resource type

## PromotionCreateRequestProperties
### Properties
* **appliedScopes**: string[]: List of subscriptions getting the benefit of the promotion.
* **displayName**: string: Friendly name for user to easily identified the promotion.
* **effectiveDateTime**: string (ReadOnly): This is the DateTime when the promotion would come in effect
* **expiryDate**: string (ReadOnly): This is the date when the Reservation will expire.
* **lastUpdatedDateTime**: string (ReadOnly): Last update time of the promotion resource.
* **orderId**: string (WriteOnly): Unique Id for the promotion order.
* **provisioningState**: string (ReadOnly): Current state of the promotion.

## PromotionCreateSkuNameRequestProperties
### Properties
* **name**: string (WriteOnly): SKU Name of the promotion to activate

