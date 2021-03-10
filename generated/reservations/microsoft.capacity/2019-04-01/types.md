# Microsoft.Capacity @ 2019-04-01

## Resource Microsoft.Capacity/reservationOrders@2019-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PurchaseRequestProperties](#purchaserequestproperties)
* **sku**: [SkuName](#skuname) (WriteOnly)
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant)

## PurchaseRequestProperties
### Properties
* **appliedScopes**: string[] (WriteOnly)
* **appliedScopeType**: 'Shared' | 'Single' (WriteOnly)
* **billingPlan**: 'Monthly' | 'Upfront'
* **billingScopeId**: string (WriteOnly)
* **createdDateTime**: string (ReadOnly)
* **displayName**: string
* **expiryDate**: string (ReadOnly)
* **originalQuantity**: int (ReadOnly)
* **planInformation**: [ReservationOrderBillingPlanInformation](#reservationorderbillingplaninformation) (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **quantity**: int (WriteOnly)
* **renew**: bool (WriteOnly)
* **requestDateTime**: string (ReadOnly)
* **reservations**: [ReservationResponse](#reservationresponse)[] (ReadOnly)
* **reservedResourceProperties**: [PurchaseRequestPropertiesReservedResourceProperties](#purchaserequestpropertiesreservedresourceproperties) (WriteOnly)
* **reservedResourceType**: 'AppService' | 'AzureDataExplorer' | 'BlockBlob' | 'CosmosDb' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' (WriteOnly)
* **term**: 'P1Y' | 'P3Y'

## ReservationOrderBillingPlanInformation
### Properties
* **nextPaymentDueDate**: string (ReadOnly)
* **pricingCurrencyTotal**: [Price](#price) (ReadOnly)
* **startDate**: string (ReadOnly)
* **transactions**: [PaymentDetail](#paymentdetail)[] (ReadOnly)

## Price
### Properties
* **amount**: int (ReadOnly)
* **currencyCode**: string (ReadOnly)

## PaymentDetail
### Properties
* **billingAccount**: string (ReadOnly)
* **billingCurrencyTotal**: [Price](#price) (ReadOnly)
* **dueDate**: string (ReadOnly)
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **paymentDate**: string (ReadOnly)
* **pricingCurrencyTotal**: [Price](#price) (ReadOnly)
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
* **properties**: [ReservationProperties](#reservationproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)
* **type**: string (ReadOnly)

## ReservationProperties
### Properties
* **appliedScopes**: string[] (ReadOnly)
* **appliedScopeType**: 'Shared' | 'Single' (ReadOnly)
* **billingPlan**: 'Monthly' | 'Upfront' (ReadOnly)
* **billingScopeId**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **effectiveDateTime**: string (ReadOnly)
* **expiryDate**: string (ReadOnly)
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **instanceFlexibility**: 'Off' | 'On' (ReadOnly)
* **lastUpdatedDateTime**: string (ReadOnly)
* **mergeProperties**: [ReservationMergeProperties](#reservationmergeproperties) (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **quantity**: int (ReadOnly)
* **renew**: bool (ReadOnly)
* **renewDestination**: string (ReadOnly)
* **renewProperties**: [RenewPropertiesResponse](#renewpropertiesresponse) (ReadOnly)
* **renewSource**: string (ReadOnly)
* **reservedResourceType**: 'AppService' | 'AzureDataExplorer' | 'BlockBlob' | 'CosmosDb' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' (ReadOnly)
* **skuDescription**: string (ReadOnly)
* **splitProperties**: [ReservationSplitProperties](#reservationsplitproperties) (ReadOnly)
* **term**: 'P1Y' | 'P3Y' (ReadOnly)

## ReservationMergeProperties
### Properties
* **mergeDestination**: string (ReadOnly)
* **mergeSources**: string[] (ReadOnly)

## RenewPropertiesResponse
### Properties
* **billingCurrencyTotal**: [RenewPropertiesResponseBillingCurrencyTotal](#renewpropertiesresponsebillingcurrencytotal) (ReadOnly)
* **pricingCurrencyTotal**: [RenewPropertiesResponsePricingCurrencyTotal](#renewpropertiesresponsepricingcurrencytotal) (ReadOnly)
* **purchaseProperties**: [PurchaseRequest](#purchaserequest) (ReadOnly)

## RenewPropertiesResponseBillingCurrencyTotal
### Properties
* **amount**: int (ReadOnly)
* **currencyCode**: string (ReadOnly)

## RenewPropertiesResponsePricingCurrencyTotal
### Properties
* **amount**: int (ReadOnly)
* **currencyCode**: string (ReadOnly)

## PurchaseRequest
### Properties
* **location**: string (ReadOnly)
* **properties**: [PurchaseRequestProperties](#purchaserequestproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)

## SkuName
### Properties
* **name**: string (WriteOnly)

## ReservationSplitProperties
### Properties
* **splitDestinations**: string[] (ReadOnly)
* **splitSource**: string (ReadOnly)

## PurchaseRequestPropertiesReservedResourceProperties
### Properties
* **instanceFlexibility**: 'Off' | 'On' (WriteOnly)

