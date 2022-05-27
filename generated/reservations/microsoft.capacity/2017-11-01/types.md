# Microsoft.Capacity @ 2017-11-01

## Resource Microsoft.Capacity/reservationOrders@2017-11-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationOrderProperties](#reservationorderproperties) (ReadOnly)
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Capacity/reservationOrders/reservations@2017-11-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Microsoft.Compute' (ReadOnly): Resource Provider type to be reserved.
* **location**: 'australiaeast' | 'australiasoutheast' | 'brazilsouth' | 'canadacentral' | 'canadaeast' | 'centralindia' | 'centralus' | 'eastasia' | 'eastus' | 'eastus2' | 'japaneast' | 'japanwest' | 'northcentralus' | 'northeurope' | 'southcentralus' | 'southeastasia' | 'southindia' | 'uksouth' | 'ukwest' | 'westcentralus' | 'westeurope' | 'westindia' | 'westus' | 'westus2' | string (ReadOnly): Location in which the Resources needs to be reserved. It cannot be changed after the resource has been created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationProperties](#reservationproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)
* **type**: 'Microsoft.Capacity/reservationOrders/reservations' (ReadOnly, DeployTimeConstant): The resource type

## ReservationOrderProperties
### Properties
* **createdDateTime**: string (ReadOnly): This is the DateTime when the reservation was created.
* **displayName**: string (ReadOnly): Friendly name for user to easily identified the reservation.
* **expiryDate**: string (ReadOnly): This is the date when the Reservation will expire.
* **originalQuantity**: int (ReadOnly): Total Quantity of the SKUs purchased in the Reservation.
* **provisioningState**: 'BillingFailed' | 'Cancelled' | 'ConfirmedBilling' | 'ConfirmedResourceHold' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'Merged' | 'PendingBilling' | 'PendingResourceHold' | 'Processing' | 'Split' | 'Succeeded' | string (ReadOnly): Represent the current state of the Reservation.
* **requestDateTime**: string (ReadOnly): This is the DateTime when the reservation was initially requested for purchase.
* **reservations**: [ReservationResponse](#reservationresponse)[] (ReadOnly): Array of ReservationResponse
* **term**: 'P1Y' | 'P3Y' | string (ReadOnly): Represent the term of Reservation.

## ReservationResponse
### Properties
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly): Identifier of the reservation
* **kind**: 'Microsoft.Compute' (ReadOnly): Resource Provider type to be reserved.
* **location**: 'australiaeast' | 'australiasoutheast' | 'brazilsouth' | 'canadacentral' | 'canadaeast' | 'centralindia' | 'centralus' | 'eastasia' | 'eastus' | 'eastus2' | 'japaneast' | 'japanwest' | 'northcentralus' | 'northeurope' | 'southcentralus' | 'southeastasia' | 'southindia' | 'uksouth' | 'ukwest' | 'westcentralus' | 'westeurope' | 'westindia' | 'westus' | 'westus2' | string (ReadOnly): Location in which the Resources needs to be reserved. It cannot be changed after the resource has been created.
* **name**: string (ReadOnly): Name of the reservation
* **properties**: [ReservationProperties](#reservationproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)
* **type**: string (ReadOnly): Type of resource. "Microsoft.Capacity/reservationOrders/reservations"

## ReservationProperties
### Properties
* **appliedScopes**: string[] (ReadOnly): List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'Shared' | 'Single' | string (ReadOnly): Type of the Applied Scope.
* **displayName**: string (ReadOnly): Friendly name for user to easily identify the reservation
* **effectiveDateTime**: string (ReadOnly): DateTime of the Reservation starting when this version is effective from.
* **expiryDate**: string (ReadOnly): This is the date when the Reservation will expire.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **lastUpdatedDateTime**: string (ReadOnly): DateTime of the last time the Reservation was updated.
* **mergeProperties**: [ReservationMergeProperties](#reservationmergeproperties) (ReadOnly)
* **provisioningState**: 'BillingFailed' | 'Cancelled' | 'ConfirmedBilling' | 'ConfirmedResourceHold' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'Merged' | 'PendingBilling' | 'PendingResourceHold' | 'Processing' | 'Split' | 'Succeeded' | string (ReadOnly): Represent the current state of the Reservation.
* **quantity**: int (ReadOnly): Quantity of the SKUs that are part of the Reservation.
* **splitProperties**: [ReservationSplitProperties](#reservationsplitproperties) (ReadOnly)

## ExtendedStatusInfo
### Properties
* **message**: string (ReadOnly): The message giving detailed information about the status code.
* **statusCode**: 'Active' | 'Expired' | 'Merged' | 'None' | 'PaymentInstrumentError' | 'Pending' | 'PurchaseError' | 'Split' | 'Succeeded' | string (ReadOnly)

## ReservationMergeProperties
### Properties
* **mergeDestination**: string (ReadOnly): Reservation Resource Id Created due to the merge. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **mergeSources**: string[] (ReadOnly): Resource Ids of the Source Reservation's merged to form this Reservation. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## ReservationSplitProperties
### Properties
* **splitDestinations**: string[] (ReadOnly): List of destination Resource Id that are created due to split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **splitSource**: string (ReadOnly): Resource Id of the Reservation from which this is split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## SkuName
### Properties
* **name**: string (ReadOnly)

