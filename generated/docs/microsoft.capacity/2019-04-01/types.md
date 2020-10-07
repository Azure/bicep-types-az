# Microsoft.Capacity @ 2019-04-01

## Microsoft.Capacity/reservationOrders
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PurchaseRequestProperties
* **sku**: SkuName (WriteOnly)
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant)

## PurchaseRequestProperties
### Properties
* **appliedScopeType**: 'Shared' | 'Single' (WriteOnly)
* **appliedScopes**: string[] (WriteOnly)
* **billingPlan**: 'Monthly' | 'Upfront'
* **billingScopeId**: string (WriteOnly)
* **createdDateTime**: string (ReadOnly)
* **displayName**: string
* **expiryDate**: string (ReadOnly)
* **originalQuantity**: int (ReadOnly)
* **planInformation**: ReservationOrderBillingPlanInformation (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **quantity**: int (WriteOnly)
* **renew**: bool (WriteOnly)
* **requestDateTime**: string (ReadOnly)
* **reservations**: ReservationResponse[] (ReadOnly)
* **reservedResourceProperties**: schemas:20_reservedResourceProperties (WriteOnly)
* **reservedResourceType**: 'AppService' | 'AzureDataExplorer' | 'BlockBlob' | 'CosmosDb' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' (WriteOnly)
* **term**: 'P1Y' | 'P3Y'

## ReservationOrderBillingPlanInformation
### Properties
* **nextPaymentDueDate**: string (ReadOnly)
* **pricingCurrencyTotal**: Price (ReadOnly)
* **startDate**: string (ReadOnly)
* **transactions**: PaymentDetail[] (ReadOnly)

## Price
### Properties
* **amount**: int (ReadOnly)
* **currencyCode**: string (ReadOnly)

## PaymentDetail
### Properties
* **billingAccount**: string (ReadOnly)
* **billingCurrencyTotal**: Price (ReadOnly)
* **dueDate**: string (ReadOnly)
* **extendedStatusInfo**: ExtendedStatusInfo (ReadOnly)
* **paymentDate**: string (ReadOnly)
* **pricingCurrencyTotal**: Price (ReadOnly)
* **status**: 'Cancelled' | 'Failed' | 'Scheduled' | 'Succeeded' (ReadOnly)

## ExtendedStatusInfo
### Properties
* **message**: string (ReadOnly)
* **statusCode**: 'Active' | 'Expired' | 'Merged' | 'None' | 'PaymentInstrumentError' | 'Pending' | 'PurchaseError' | 'Split' | 'Succeeded' (ReadOnly)

## ReservationResponse
### Properties
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ReservationProperties (ReadOnly)
* **sku**: SkuName (ReadOnly)
* **type**: string (ReadOnly)

## ReservationProperties
### Properties
* **appliedScopeType**: 'Shared' | 'Single' (ReadOnly)
* **appliedScopes**: string[] (ReadOnly)
* **billingPlan**: 'Monthly' | 'Upfront' (ReadOnly)
* **billingScopeId**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **effectiveDateTime**: string (ReadOnly)
* **expiryDate**: string (ReadOnly)
* **extendedStatusInfo**: ExtendedStatusInfo (ReadOnly)
* **instanceFlexibility**: 'Off' | 'On' (ReadOnly)
* **lastUpdatedDateTime**: string (ReadOnly)
* **mergeProperties**: ReservationMergeProperties (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **quantity**: int (ReadOnly)
* **renew**: bool (ReadOnly)
* **renewDestination**: string (ReadOnly)
* **renewProperties**: RenewPropertiesResponse (ReadOnly)
* **renewSource**: string (ReadOnly)
* **reservedResourceType**: 'AppService' | 'AzureDataExplorer' | 'BlockBlob' | 'CosmosDb' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' (ReadOnly)
* **skuDescription**: string (ReadOnly)
* **splitProperties**: ReservationSplitProperties (ReadOnly)
* **term**: 'P1Y' | 'P3Y' (ReadOnly)

## ReservationMergeProperties
### Properties
* **mergeDestination**: string (ReadOnly)
* **mergeSources**: string[] (ReadOnly)

## RenewPropertiesResponse
### Properties
* **billingCurrencyTotal**: schemas:14_billingCurrencyTotal (ReadOnly)
* **pricingCurrencyTotal**: schemas:14_pricingCurrencyTotal (ReadOnly)
* **purchaseProperties**: PurchaseRequest (ReadOnly)

## schemas:14_billingCurrencyTotal
### Properties
* **amount**: int (ReadOnly)
* **currencyCode**: string (ReadOnly)

## schemas:14_pricingCurrencyTotal
### Properties
* **amount**: int (ReadOnly)
* **currencyCode**: string (ReadOnly)

## PurchaseRequest
### Properties
* **location**: string (ReadOnly)
* **properties**: PurchaseRequestProperties (ReadOnly)
* **sku**: SkuName (ReadOnly)

## SkuName
### Properties
* **name**: string (WriteOnly)

## ReservationSplitProperties
### Properties
* **splitDestinations**: string[] (ReadOnly)
* **splitSource**: string (ReadOnly)

## schemas:20_reservedResourceProperties
### Properties
* **instanceFlexibility**: 'Off' | 'On' (WriteOnly)

