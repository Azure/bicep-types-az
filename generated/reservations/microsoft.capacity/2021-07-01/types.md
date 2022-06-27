# Microsoft.Capacity @ 2021-07-01

## Resource Microsoft.Capacity/reservationOrders@2021-07-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): The Azure Region where the reserved resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PurchaseRequestPropertiesOrReservationOrderProperties](#purchaserequestpropertiesorreservationorderproperties)
* **sku**: [SkuName](#skuname) (WriteOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Capacity/reservationOrders/reservations@2021-07-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Microsoft.Compute' (ReadOnly): Resource Provider type to be reserved.
* **location**: string (ReadOnly): The Azure Region where the reserved resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationsProperties](#reservationsproperties) (ReadOnly): The properties associated to this reservation
* **sku**: [SkuName](#skuname) (ReadOnly): The sku information associated to this reservation
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Capacity/reservationOrders/reservations' (ReadOnly, DeployTimeConstant): The resource type

## ExtendedStatusInfo
### Properties
* **message**: string: The message giving detailed information about the status code.
* **statusCode**: 'Active' | 'Expired' | 'Merged' | 'None' | 'PaymentInstrumentError' | 'Pending' | 'Processing' | 'PurchaseError' | 'Split' | 'Succeeded' | string

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
* **quantity**: int: Quantity of the SKUs that are part of the Reservation.
* **renew**: bool: Setting this to true will automatically purchase a new reservation on the expiration date time.
* **reservedResourceProperties**: [PurchaseRequestPropertiesReservedResourceProperties](#purchaserequestpropertiesreservedresourceproperties): Properties specific to each reserved resource type. Not required if not applicable.
* **reservedResourceType**: 'AVS' | 'AppService' | 'AzureDataExplorer' | 'AzureFiles' | 'BlockBlob' | 'CosmosDb' | 'DataFactory' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'NetAppStorage' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SqlEdge' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' | string: The type of the resource that is being reserved.
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represent the term of Reservation.

## PurchaseRequestPropertiesOrReservationOrderProperties
### Properties
* **appliedScopes**: string[] (WriteOnly): List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'Shared' | 'Single' | string (WriteOnly): Type of the Applied Scope.
* **billingPlan**: 'Monthly' | 'Upfront' | string: Represent the billing plans.
* **billingScopeId**: string (WriteOnly): Subscription that will be charged for purchasing Reservation
* **createdDateTime**: string (ReadOnly): This is the DateTime when the reservation was created.
* **displayName**: string: Friendly name of the Reservation
* **expiryDate**: string (ReadOnly): This is the date when the Reservation will expire.
* **originalQuantity**: int (ReadOnly): Total Quantity of the SKUs purchased in the Reservation.
* **planInformation**: [ReservationOrderBillingPlanInformation](#reservationorderbillingplaninformation) (ReadOnly): Information describing the type of billing plan for this reservation.
* **provisioningState**: 'BillingFailed' | 'Cancelled' | 'ConfirmedBilling' | 'ConfirmedResourceHold' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'Merged' | 'PendingBilling' | 'PendingResourceHold' | 'Split' | 'Succeeded' | string (ReadOnly): Current state of the reservation.
* **quantity**: int (WriteOnly): Quantity of the SKUs that are part of the Reservation.
* **renew**: bool (WriteOnly): Setting this to true will automatically purchase a new reservation on the expiration date time.
* **requestDateTime**: string (ReadOnly): This is the DateTime when the reservation was initially requested for purchase.
* **reservations**: [ReservationResponse](#reservationresponse)[] (ReadOnly)
* **reservedResourceProperties**: [PurchaseRequestPropertiesReservedResourceProperties](#purchaserequestpropertiesreservedresourceproperties) (WriteOnly): Properties specific to each reserved resource type. Not required if not applicable.
* **reservedResourceType**: 'AVS' | 'AppService' | 'AzureDataExplorer' | 'AzureFiles' | 'BlockBlob' | 'CosmosDb' | 'DataFactory' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'NetAppStorage' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SqlEdge' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' | string (WriteOnly): The type of the resource that is being reserved.
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represent the term of Reservation.

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
* **currencyCode**: string: The ISO 4217 3-letter currency code for the currency used by this purchase record.

## RenewPropertiesResponsePricingCurrencyTotal
### Properties
* **amount**: int
* **currencyCode**: string: The ISO 4217 3-letter currency code for the currency used by this purchase record.

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

## ReservationResponse
### Properties
* **etag**: int
* **id**: string (ReadOnly): Identifier of the reservation
* **kind**: 'Microsoft.Compute': Resource Provider type to be reserved.
* **location**: string: The Azure Region where the reserved resource lives.
* **name**: string (ReadOnly): Name of the reservation
* **properties**: [ReservationsProperties](#reservationsproperties): The properties associated to this reservation
* **sku**: [SkuName](#skuname): The sku information associated to this reservation
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): Type of resource. "Microsoft.Capacity/reservationOrders/reservations"

## ReservationSplitProperties
### Properties
* **splitDestinations**: string[]: List of destination Resource Id that are created due to split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **splitSource**: string: Resource Id of the Reservation from which this is split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## ReservationsProperties
### Properties
* **appliedScopes**: string[]: The list of applied scopes
* **appliedScopeType**: 'Shared' | 'Single' | string: The applied scope type
* **archived**: bool: Indicates if the reservation is archived
* **billingPlan**: 'Monthly' | 'Upfront' | string: The billing plan options available for this SKU.
* **billingScopeId**: string: Subscription that will be charged for purchasing Reservation
* **capabilities**: string: Capabilities of the reservation
* **displayName**: string: Friendly name for user to easily identify the reservation
* **displayProvisioningState**: string (ReadOnly): The provisioning state of the reservation for display, e.g. Succeeded
* **effectiveDateTime**: string: DateTime of the Reservation starting when this version is effective from.
* **expiryDate**: string: This is the date when the Reservation will expire.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo): The message giving detailed information about the status code.
* **instanceFlexibility**: 'Off' | 'On' | string: Allows reservation discount to be applied across skus within the same Autofit group. Not all skus support instance size flexibility.
* **lastUpdatedDateTime**: string (ReadOnly): DateTime of the last time the Reservation was updated.
* **mergeProperties**: [ReservationMergeProperties](#reservationmergeproperties)
* **provisioningState**: 'BillingFailed' | 'Cancelled' | 'ConfirmedBilling' | 'ConfirmedResourceHold' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'Merged' | 'PendingBilling' | 'PendingResourceHold' | 'Split' | 'Succeeded' | string: Current state of the reservation.
* **provisioningSubState**: string (ReadOnly): The provisioning state of the reservation, e.g. Succeeded
* **purchaseDate**: string: This is the date when the Reservation was purchased.
* **quantity**: int: Quantity of the SKUs that are part of the Reservation.
* **renew**: bool: Setting this to true will automatically purchase a new reservation on the expiration date time.
* **renewDestination**: string: Reservation Id of the reservation which is purchased because of renew. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}.
* **renewProperties**: [RenewPropertiesResponse](#renewpropertiesresponse)
* **renewSource**: string: Reservation Id of the reservation from which this reservation is renewed. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}.
* **reservedResourceType**: 'AVS' | 'AppService' | 'AzureDataExplorer' | 'AzureFiles' | 'BlockBlob' | 'CosmosDb' | 'DataFactory' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'NetAppStorage' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SqlEdge' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines' | string: The type of the resource that is being reserved.
* **skuDescription**: string: Description of the SKU in english.
* **splitProperties**: [ReservationSplitProperties](#reservationsplitproperties)
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represent the term of Reservation.
* **userFriendlyAppliedScopeType**: string (ReadOnly): The applied scope type of the reservation for display, e.g. Shared
* **userFriendlyRenewState**: string (ReadOnly): The renew state of the reservation for display, e.g. On
* **utilization**: [ReservationsPropertiesUtilization](#reservationspropertiesutilization) (ReadOnly): Reservation utilization

## ReservationsPropertiesUtilization
### Properties
* **aggregates**: [ReservationUtilizationAggregates](#reservationutilizationaggregates)[]: The array of aggregates of a reservation's utilization
* **trend**: string (ReadOnly): The number of days trend for a reservation

## ReservationUtilizationAggregates
### Properties
* **grain**: int (ReadOnly): The grain of the aggregate
* **grainUnit**: string (ReadOnly): The grain unit of the aggregate
* **value**: int (ReadOnly): The aggregate value
* **valueUnit**: string (ReadOnly): The aggregate value unit

## SkuName
### Properties
* **name**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

