# Microsoft.Capacity @ 2020-10-01-preview

## Resource Microsoft.Capacity/reservationOrders@2020-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): The Azure Region where the reserved resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PurchaseRequestProperties](#purchaserequestproperties)
* **sku**: [SkuName](#skuname) (WriteOnly)
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant): The resource type

## PurchaseRequestProperties
### Properties
* **appliedScopes**: string[] (WriteOnly): List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'Shared' | 'Single' (WriteOnly)
* **billingPlan**: 'Monthly' | 'Upfront'
* **billingScopeId**: string (WriteOnly): Subscription that will be charged for purchasing Reservation
* **createdDateTime**: string (ReadOnly): This is the DateTime when the reservation was created.
* **displayName**: string: Friendly name of the Reservation
* **expiryDate**: string (ReadOnly): This is the date when the Reservation will expire.
* **originalQuantity**: int (ReadOnly): Quantity of the SKUs that are part of the Reservation. Must be greater than zero.
* **planInformation**: [ReservationOrderBillingPlanInformation](#reservationorderbillingplaninformation) (ReadOnly): Information describing the type of billing plan for this reservation.
* **provisioningState**: string (ReadOnly): Current state of the reservation.
* **quantity**: int (WriteOnly): Quantity of the SKUs that are part of the Reservation. Must be greater than zero.
* **renew**: bool (WriteOnly): Setting this to true will automatically purchase a new reservation on the expiration date time.
* **requestDateTime**: string (ReadOnly): This is the DateTime when the reservation was initially requested for purchase.
* **reservations**: [ReservationResponse](#reservationresponse)[] (ReadOnly)
* **reservedResourceProperties**: [schemas:39_reservedResourceProperties](#schemas39reservedresourceproperties) (WriteOnly): Properties specific to each reserved resource type. Not required if not applicable.
* **reservedResourceType**: 'AppService' | 'AzureDataExplorer' | 'BlockBlob' | 'CosmosDb' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDatabases' | 'SqlDataWarehouse' | 'SuseLinux' | 'VirtualMachines' | 'VMwareCloudSimple' (WriteOnly)
* **term**: 'P1Y' | 'P3Y'

## ReservationOrderBillingPlanInformation
### Properties
* **nextPaymentDueDate**: string (ReadOnly): For recurring billing plans, indicates the date when next payment will be processed. Null when total is paid off.
* **pricingCurrencyTotal**: [Price](#price) (ReadOnly)
* **startDate**: string (ReadOnly): Date when the billing plan has started.
* **transactions**: [PaymentDetail](#paymentdetail)[] (ReadOnly)

## Price
### Properties
* **amount**: int (ReadOnly)
* **currencyCode**: string (ReadOnly): The ISO 4217 3-letter currency code for the currency used by this purchase record.

## PaymentDetail
### Properties
* **billingAccount**: string (ReadOnly): Shows the Account that is charged for this payment.
* **billingCurrencyTotal**: [Price](#price) (ReadOnly)
* **dueDate**: string (ReadOnly): Date when the payment needs to be done.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **paymentDate**: string (ReadOnly): Date when the transaction is completed. Is null when it is scheduled.
* **pricingCurrencyTotal**: [Price](#price) (ReadOnly)
* **status**: 'Cancelled' | 'Failed' | 'Scheduled' | 'Succeeded' (ReadOnly)

## ExtendedStatusInfo
### Properties
* **message**: string (ReadOnly): The message giving detailed information about the status code.
* **statusCode**: 'Active' | 'Expired' | 'Merged' | 'None' | 'PaymentInstrumentError' | 'Pending' | 'PurchaseError' | 'Split' | 'Succeeded' (ReadOnly)

## ReservationResponse
### Properties
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly): Identifier of the reservation
* **location**: string (ReadOnly): The Azure Region where the reserved resource lives.
* **name**: string (ReadOnly): Name of the reservation
* **properties**: [ReservationProperties](#reservationproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)
* **type**: string (ReadOnly): Type of resource. "Microsoft.Capacity/reservationOrders/reservations"

## ReservationProperties
### Properties
* **appliedScopes**: string[] (ReadOnly): List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'Shared' | 'Single' (ReadOnly)
* **billingPlan**: 'Monthly' | 'Upfront' (ReadOnly)
* **billingScopeId**: string (ReadOnly): Subscription that will be charged for purchasing Reservation
* **displayName**: string (ReadOnly): Friendly name for user to easily identify the reservation
* **effectiveDateTime**: string (ReadOnly): DateTime of the Reservation starting when this version is effective from.
* **expiryDate**: string (ReadOnly): This is the date when the Reservation will expire.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **instanceFlexibility**: 'Off' | 'On' (ReadOnly)
* **lastUpdatedDateTime**: string (ReadOnly): DateTime of the last time the Reservation was updated.
* **mergeProperties**: [ReservationMergeProperties](#reservationmergeproperties) (ReadOnly)
* **provisioningState**: string (ReadOnly): Current state of the reservation.
* **quantity**: int (ReadOnly): Quantity of the SKUs that are part of the Reservation. Must be greater than zero.
* **renew**: bool (ReadOnly): Setting this to true will automatically purchase a new reservation on the expiration date time.
* **renewDestination**: string (ReadOnly): Reservation Id of the reservation which is purchased because of renew. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}.
* **renewProperties**: [RenewPropertiesResponse](#renewpropertiesresponse) (ReadOnly)
* **renewSource**: string (ReadOnly): Reservation Id of the reservation from which this reservation is renewed. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}.
* **reservedResourceType**: 'AppService' | 'AzureDataExplorer' | 'BlockBlob' | 'CosmosDb' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDatabases' | 'SqlDataWarehouse' | 'SuseLinux' | 'VirtualMachines' | 'VMwareCloudSimple' (ReadOnly)
* **skuDescription**: string (ReadOnly): Description of the SKU in english.
* **splitProperties**: [ReservationSplitProperties](#reservationsplitproperties) (ReadOnly)
* **term**: 'P1Y' | 'P3Y' (ReadOnly)

## ReservationMergeProperties
### Properties
* **mergeDestination**: string (ReadOnly): Reservation Resource Id Created due to the merge. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **mergeSources**: string[] (ReadOnly): Resource Ids of the Source Reservation's merged to form this Reservation. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## RenewPropertiesResponse
### Properties
* **billingCurrencyTotal**: [schemas:33_billingCurrencyTotal](#schemas33billingcurrencytotal) (ReadOnly): Currency and amount that customer will be charged in customer's local currency for renewal purchase. Tax is not included.
* **pricingCurrencyTotal**: [schemas:33_pricingCurrencyTotal](#schemas33pricingcurrencytotal) (ReadOnly): Amount that Microsoft uses for record. Used during refund for calculating refund limit. Tax is not included. This is locked price 30 days before expiry.
* **purchaseProperties**: [PurchaseRequest](#purchaserequest) (ReadOnly)

## schemas:33_billingCurrencyTotal
### Properties
* **amount**: int (ReadOnly)
* **currencyCode**: string (ReadOnly)

## schemas:33_pricingCurrencyTotal
### Properties
* **amount**: int (ReadOnly)
* **currencyCode**: string (ReadOnly)

## PurchaseRequest
### Properties
* **location**: string (ReadOnly): The Azure Region where the reserved resource lives.
* **properties**: [PurchaseRequestProperties](#purchaserequestproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)

## SkuName
### Properties
* **name**: string (WriteOnly)

## ReservationSplitProperties
### Properties
* **splitDestinations**: string[] (ReadOnly): List of destination Resource Id that are created due to split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **splitSource**: string (ReadOnly): Resource Id of the Reservation from which this is split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## schemas:39_reservedResourceProperties
### Properties
* **instanceFlexibility**: 'Off' | 'On' (WriteOnly)

