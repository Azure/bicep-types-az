# Microsoft.Capacity @ 2020-10-01-preview

## Resource Microsoft.Capacity/reservationOrders@2020-10-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): The Azure Region where the reserved resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PurchaseRequestPropertiesOrReservationOrderProperties](#purchaserequestpropertiesorreservationorderproperties)
* **sku**: [SkuName](#skuname) (WriteOnly)
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Capacity/reservationOrders/reservations@2020-10-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The Azure Region where the reserved resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationProperties](#reservationproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)
* **type**: 'Microsoft.Capacity/reservationOrders/reservations' (ReadOnly, DeployTimeConstant): The resource type

## Function availableScopes (Microsoft.Capacity/reservationOrders/reservations@2020-10-01-preview)
* **Resource**: Microsoft.Capacity/reservationOrders/reservations
* **ApiVersion**: 2020-10-01-preview
* **Input**: [AvailableScopeRequest](#availablescoperequest)
* **Output**: [AvailableScopeProperties](#availablescopeproperties)

## Function calculateExchange (Microsoft.Capacity@2020-10-01-preview)
* **Resource**: Microsoft.Capacity
* **ApiVersion**: 2020-10-01-preview
* **Input**: [CalculateExchangeRequest](#calculateexchangerequest)
* **Output**: [CalculateExchangeOperationResultResponse](#calculateexchangeoperationresultresponse)

## Function calculatePrice (Microsoft.Capacity@2020-10-01-preview)
* **Resource**: Microsoft.Capacity
* **ApiVersion**: 2020-10-01-preview
* **Input**: [PurchaseRequest](#purchaserequest)
* **Output**: [CalculatePriceResponse](#calculatepriceresponse)

## Function exchange (Microsoft.Capacity@2020-10-01-preview)
* **Resource**: Microsoft.Capacity
* **ApiVersion**: 2020-10-01-preview
* **Input**: [ExchangeRequest](#exchangerequest)
* **Output**: [ExchangeOperationResultResponse](#exchangeoperationresultresponse)

## Function merge (Microsoft.Capacity/reservationOrders@2020-10-01-preview)
* **Resource**: Microsoft.Capacity/reservationOrders
* **ApiVersion**: 2020-10-01-preview
* **Input**: [MergeRequest](#mergerequest)
* **Output**: [ReservationResponse](#reservationresponse)[]

## Function split (Microsoft.Capacity/reservationOrders@2020-10-01-preview)
* **Resource**: Microsoft.Capacity/reservationOrders
* **ApiVersion**: 2020-10-01-preview
* **Input**: [SplitRequest](#splitrequest)
* **Output**: [ReservationResponse](#reservationresponse)[]

## AvailableScopeProperties
### Properties
* **properties**: [SubscriptionScopeProperties](#subscriptionscopeproperties)

## AvailableScopeRequest
### Properties
* **properties**: [AvailableScopeRequestProperties](#availablescoperequestproperties): Available scope request properties

## AvailableScopeRequestProperties
### Properties
* **scopes**: string[]

## BillingInformation
### Properties
* **billingCurrencyProratedAmount**: [Price](#price)
* **billingCurrencyRemainingCommitmentAmount**: [Price](#price)
* **billingCurrencyTotalPaidAmount**: [Price](#price)

## CalculateExchangeOperationResultResponse
### Properties
* **error**: [OperationResultError](#operationresulterror): Required if status == failed or status == canceled.
* **id**: string: It should match what is used to GET the operation result.
* **name**: string: It must match the last segment of the id field, and will typically be a GUID / system generated value.
* **properties**: [CalculateExchangeResponseProperties](#calculateexchangeresponseproperties): CalculateExchange response properties
* **status**: 'Cancelled' | 'Failed' | 'Pending' | 'Succeeded' | string: Status of the operation.

## CalculateExchangeRequest
### Properties
* **properties**: [CalculateExchangeRequestProperties](#calculateexchangerequestproperties): Calculate exchange request properties

## CalculateExchangeRequestProperties
### Properties
* **reservationsToExchange**: [ReservationToReturn](#reservationtoreturn)[]: List of reservations that are being returned in this exchange.
* **reservationsToPurchase**: [PurchaseRequest](#purchaserequest)[]: List of reservations that are being purchased in this exchange.

## CalculateExchangeResponseProperties
### Properties
* **netPayable**: [Price](#price)
* **policyResult**: [ExchangePolicyErrors](#exchangepolicyerrors): Exchange policy errors
* **purchasesTotal**: [Price](#price)
* **refundsTotal**: [Price](#price)
* **reservationsToExchange**: [ReservationToExchange](#reservationtoexchange)[]: Details of the reservations being returned
* **reservationsToPurchase**: [ReservationToPurchaseCalculateExchange](#reservationtopurchasecalculateexchange)[]: Details of the reservations being purchased
* **sessionId**: string: Exchange session identifier

## CalculatePriceResponse
### Properties
* **properties**: [CalculatePriceResponseProperties](#calculatepriceresponseproperties)

## CalculatePriceResponseProperties
### Properties
* **billingCurrencyTotal**: [CalculatePriceResponsePropertiesBillingCurrencyTotal](#calculatepriceresponsepropertiesbillingcurrencytotal): Currency and amount that customer will be charged in customer's local currency. Tax is not included.
* **isBillingPartnerManaged**: bool: True if billing is managed by Microsoft Partner. Used only for CSP accounts.
* **paymentSchedule**: [PaymentDetail](#paymentdetail)[]
* **pricingCurrencyTotal**: [CalculatePriceResponsePropertiesPricingCurrencyTotal](#calculatepriceresponsepropertiespricingcurrencytotal): Amount that Microsoft uses for record. Used during refund for calculating refund limit. Tax is not included.
* **reservationOrderId**: string: GUID that represents reservation order that can be placed after calculating price.
* **skuDescription**: string: Description of SKU that is being purchased.
* **skuTitle**: string: Title of SKU that is being purchased.

## CalculatePriceResponsePropertiesBillingCurrencyTotal
### Properties
* **amount**: int
* **currencyCode**: string

## CalculatePriceResponsePropertiesPricingCurrencyTotal
### Properties
* **amount**: int
* **currencyCode**: string

## ExchangeOperationResultResponse
### Properties
* **error**: [OperationResultError](#operationresulterror): Required if status == failed or status == canceled.
* **id**: string: It should match what is used to GET the operation result.
* **name**: string: It must match the last segment of the id field, and will typically be a GUID / system generated value.
* **properties**: [ExchangeResponseProperties](#exchangeresponseproperties): Exchange response properties
* **status**: 'Cancelled' | 'Failed' | 'PendingPurchases' | 'PendingRefunds' | 'Succeeded' | string: Status of the operation.

## ExchangePolicyError
### Properties
* **code**: string
* **message**: string

## ExchangePolicyErrors
### Properties
* **policyErrors**: [ExchangePolicyError](#exchangepolicyerror)[]: Exchange Policy errors

## ExchangeRequest
### Properties
* **properties**: [ExchangeRequestProperties](#exchangerequestproperties): Exchange request properties

## ExchangeRequestProperties
### Properties
* **sessionId**: string: SessionId that was returned by CalculateExchange API.

## ExchangeResponseProperties
### Properties
* **netPayable**: [Price](#price)
* **policyResult**: [ExchangePolicyErrors](#exchangepolicyerrors): Exchange policy errors
* **purchasesTotal**: [Price](#price)
* **refundsTotal**: [Price](#price)
* **reservationsToExchange**: [ReservationToReturnForExchange](#reservationtoreturnforexchange)[]: Details of the reservations being returned
* **reservationsToPurchase**: [ReservationToPurchaseExchange](#reservationtopurchaseexchange)[]: Details of the reservations being purchased
* **sessionId**: string: Exchange session identifier

## ExtendedStatusInfo
### Properties
* **message**: string: The message giving detailed information about the status code.
* **statusCode**: 'Active' | 'Expired' | 'Merged' | 'None' | 'PaymentInstrumentError' | 'Pending' | 'PurchaseError' | 'Split' | 'Succeeded' | string

## MergeProperties
### Properties
* **sources**: string[]: Format of the resource id should be /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## MergeRequest
### Properties
* **properties**: [MergeProperties](#mergeproperties)

## OperationResultError
### Properties
* **code**: string: Required if status == failed or status == cancelled. If status == failed, provide an invariant error code used for error troubleshooting, aggregation, and analysis.
* **message**: string: Required if status == failed. Localized. If status == failed, provide an actionable error message indicating what error occurred, and what the user can do to address the issue.

## PaymentDetail
### Properties
* **billingAccount**: string: Shows the Account that is charged for this payment.
* **billingCurrencyTotal**: [Price](#price): Amount charged in Billing currency. Tax not included. Is null for future payments
* **dueDate**: string: Date when the payment needs to be done.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo)
* **paymentDate**: string: Date when the transaction is completed. Is null when it is scheduled.
* **pricingCurrencyTotal**: [Price](#price): Amount in pricing currency. Tax not included.
* **status**: 'Cancelled' | 'Failed' | 'Scheduled' | 'Succeeded' | string: Describes whether the payment is completed, failed, cancelled or scheduled in the future.

## Price
### Properties
* **amount**: int
* **currencyCode**: string: The ISO 4217 3-letter currency code for the currency used by this purchase record.

## PurchaseRequest
### Properties
* **location**: string: The Azure Region where the reserved resource lives.
* **properties**: [PurchaseRequestProperties](#purchaserequestproperties)
* **sku**: [SkuName](#skuname)

## PurchaseRequestProperties
### Properties
* **appliedScopes**: string[]: List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'Shared' | 'Single' | string: Type of the Applied Scope.
* **billingPlan**: 'Monthly' | 'Upfront' | string: Represent the billing plans.
* **billingScopeId**: string: Subscription that will be charged for purchasing Reservation
* **displayName**: string: Friendly name of the Reservation
* **quantity**: int: Quantity of the SKUs that are part of the Reservation. Must be greater than zero.
* **renew**: bool: Setting this to true will automatically purchase a new reservation on the expiration date time.
* **reservedResourceProperties**: [PurchaseRequestPropertiesReservedResourceProperties](#purchaserequestpropertiesreservedresourceproperties): Properties specific to each reserved resource type. Not required if not applicable.
* **reservedResourceType**: 'AppService' | 'AzureDataExplorer' | 'BlockBlob' | 'CosmosDb' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' | string: The type of the resource that is being reserved.
* **term**: 'P1Y' | 'P3Y' | string: Represent the term of Reservation.

## PurchaseRequestPropertiesOrReservationOrderProperties
### Properties
* **appliedScopes**: string[] (WriteOnly): List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'Shared' | 'Single' | string (WriteOnly): Type of the Applied Scope.
* **billingPlan**: 'Monthly' | 'Upfront' | string: Represent the billing plans.
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
* **reservedResourceProperties**: [PurchaseRequestPropertiesReservedResourceProperties](#purchaserequestpropertiesreservedresourceproperties) (WriteOnly): Properties specific to each reserved resource type. Not required if not applicable.
* **reservedResourceType**: 'AppService' | 'AzureDataExplorer' | 'BlockBlob' | 'CosmosDb' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' | string (WriteOnly): The type of the resource that is being reserved.
* **term**: 'P1Y' | 'P3Y' | string: Represent the term of Reservation.

## PurchaseRequestPropertiesReservedResourceProperties
### Properties
* **instanceFlexibility**: 'Off' | 'On' | string: Turning this on will apply the reservation discount to other VMs in the same VM size group. Only specify for VirtualMachines reserved resource type.

## RenewPropertiesResponse
### Properties
* **billingCurrencyTotal**: [RenewPropertiesResponseBillingCurrencyTotal](#renewpropertiesresponsebillingcurrencytotal): Currency and amount that customer will be charged in customer's local currency for renewal purchase. Tax is not included.
* **pricingCurrencyTotal**: [RenewPropertiesResponsePricingCurrencyTotal](#renewpropertiesresponsepricingcurrencytotal): Amount that Microsoft uses for record. Used during refund for calculating refund limit. Tax is not included. This is locked price 30 days before expiry.
* **purchaseProperties**: [PurchaseRequest](#purchaserequest)

## RenewPropertiesResponseBillingCurrencyTotal
### Properties
* **amount**: int
* **currencyCode**: string

## RenewPropertiesResponsePricingCurrencyTotal
### Properties
* **amount**: int
* **currencyCode**: string

## ReservationMergeProperties
### Properties
* **mergeDestination**: string: Reservation Resource Id Created due to the merge. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **mergeSources**: string[]: Resource Ids of the Source Reservation's merged to form this Reservation. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## ReservationOrderBillingPlanInformation
### Properties
* **nextPaymentDueDate**: string: For recurring billing plans, indicates the date when next payment will be processed. Null when total is paid off.
* **pricingCurrencyTotal**: [Price](#price): Amount of money to be paid for the Order. Tax is not included.
* **startDate**: string: Date when the billing plan has started.
* **transactions**: [PaymentDetail](#paymentdetail)[]

## ReservationProperties
### Properties
* **appliedScopes**: string[]: List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'Shared' | 'Single' | string: Type of the Applied Scope.
* **billingPlan**: 'Monthly' | 'Upfront' | string: Represent the billing plans.
* **billingScopeId**: string: Subscription that will be charged for purchasing Reservation
* **displayName**: string: Friendly name for user to easily identify the reservation
* **effectiveDateTime**: string: DateTime of the Reservation starting when this version is effective from.
* **expiryDate**: string: This is the date when the Reservation will expire.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo)
* **instanceFlexibility**: 'Off' | 'On' | string: Turning this on will apply the reservation discount to other VMs in the same VM size group. Only specify for VirtualMachines reserved resource type.
* **lastUpdatedDateTime**: string (ReadOnly): DateTime of the last time the Reservation was updated.
* **mergeProperties**: [ReservationMergeProperties](#reservationmergeproperties)
* **provisioningState**: string: Current state of the reservation.
* **quantity**: int: Quantity of the SKUs that are part of the Reservation. Must be greater than zero.
* **renew**: bool: Setting this to true will automatically purchase a new reservation on the expiration date time.
* **renewDestination**: string: Reservation Id of the reservation which is purchased because of renew. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}.
* **renewProperties**: [RenewPropertiesResponse](#renewpropertiesresponse)
* **renewSource**: string: Reservation Id of the reservation from which this reservation is renewed. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}.
* **reservedResourceType**: 'AppService' | 'AzureDataExplorer' | 'BlockBlob' | 'CosmosDb' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' | string: The type of the resource that is being reserved.
* **skuDescription**: string: Description of the SKU in english.
* **splitProperties**: [ReservationSplitProperties](#reservationsplitproperties)
* **term**: 'P1Y' | 'P3Y' | string: Represent the term of Reservation.

## ReservationResponse
### Properties
* **etag**: int
* **id**: string (ReadOnly): Identifier of the reservation
* **location**: string (ReadOnly): The Azure Region where the reserved resource lives.
* **name**: string (ReadOnly): Name of the reservation
* **properties**: [ReservationProperties](#reservationproperties)
* **sku**: [SkuName](#skuname)
* **type**: string (ReadOnly): Type of resource. "Microsoft.Capacity/reservationOrders/reservations"

## ReservationSplitProperties
### Properties
* **splitDestinations**: string[]: List of destination Resource Id that are created due to split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **splitSource**: string: Resource Id of the Reservation from which this is split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## ReservationToExchange
### Properties
* **billingInformation**: [BillingInformation](#billinginformation): billing information
* **billingRefundAmount**: [Price](#price)
* **quantity**: int: Quantity to be returned
* **reservationId**: string: Fully qualified id of the Reservation being returned.

## ReservationToPurchaseCalculateExchange
### Properties
* **billingCurrencyTotal**: [Price](#price)
* **properties**: [PurchaseRequest](#purchaserequest)

## ReservationToPurchaseExchange
### Properties
* **billingCurrencyTotal**: [Price](#price)
* **properties**: [PurchaseRequest](#purchaserequest)
* **reservationId**: string: Fully qualified id of the Reservation being purchased. This value is only guaranteed to be non-null if the purchase is successful.
* **reservationOrderId**: string: Fully qualified id of the ReservationOrder being purchased
* **status**: 'Cancelled' | 'Failed' | 'Pending' | 'Succeeded' | string: Status of the individual operation.

## ReservationToReturn
### Properties
* **quantity**: int: Quantity to be returned. Must be greater than zero.
* **reservationId**: string: Fully qualified identifier of the Reservation being returned

## ReservationToReturnForExchange
### Properties
* **billingInformation**: [BillingInformation](#billinginformation): billing information
* **billingRefundAmount**: [Price](#price)
* **quantity**: int: Quantity to be returned
* **reservationId**: string: Fully qualified id of the Reservation being returned.
* **status**: 'Cancelled' | 'Failed' | 'Pending' | 'Succeeded' | string: Status of the individual operation.

## ScopeProperties
### Properties
* **scope**: string
* **valid**: bool

## SkuName
### Properties
* **name**: string

## SplitProperties
### Properties
* **quantities**: int[]: List of the quantities in the new reservations to create.
* **reservationId**: string: Resource id of the reservation to be split. Format of the resource id should be /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## SplitRequest
### Properties
* **properties**: [SplitProperties](#splitproperties)

## SubscriptionScopeProperties
### Properties
* **scopes**: [ScopeProperties](#scopeproperties)[]

