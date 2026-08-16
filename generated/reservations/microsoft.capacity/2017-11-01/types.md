# Microsoft.Capacity @ 2017-11-01

## Resource Microsoft.Capacity/reservationOrders@2017-11-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationOrderProperties](#reservationorderproperties) (ReadOnly)
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Capacity/reservationOrders/reservations@2017-11-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
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

## Function merge (Microsoft.Capacity/reservationOrders@2017-11-01)
* **Resource**: Microsoft.Capacity/reservationOrders
* **ApiVersion**: 2017-11-01
* **Input**: [MergeRequest](#mergerequest)
* **Output**: [ReservationResponse](#reservationresponse)[]

## Function split (Microsoft.Capacity/reservationOrders@2017-11-01)
* **Resource**: Microsoft.Capacity/reservationOrders
* **ApiVersion**: 2017-11-01
* **Input**: [SplitRequest](#splitrequest)
* **Output**: [ReservationResponse](#reservationresponse)[]

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

## ReservationMergeProperties
### Properties
* **mergeDestination**: string: Reservation Resource Id Created due to the merge. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **mergeSources**: string[]: Resource Ids of the Source Reservation's merged to form this Reservation. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## ReservationOrderProperties
### Properties
* **createdDateTime**: string: This is the DateTime when the reservation was created.
* **displayName**: string: Friendly name for user to easily identified the reservation.
* **expiryDate**: string: This is the date when the Reservation will expire.
* **originalQuantity**: int: Total Quantity of the SKUs purchased in the Reservation.
* **provisioningState**: 'BillingFailed' | 'Cancelled' | 'ConfirmedBilling' | 'ConfirmedResourceHold' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'Merged' | 'PendingBilling' | 'PendingResourceHold' | 'Processing' | 'Split' | 'Succeeded' | string: Represent the current state of the Reservation.
* **requestDateTime**: string: This is the DateTime when the reservation was initially requested for purchase.
* **reservations**: [ReservationResponse](#reservationresponse)[]
* **term**: 'P1Y' | 'P3Y' | string: Represent the term of Reservation.

## ReservationProperties
### Properties
* **appliedScopes**: string[]: List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'Shared' | 'Single' | string: Type of the Applied Scope.
* **displayName**: string: Friendly name for user to easily identify the reservation
* **effectiveDateTime**: string: DateTime of the Reservation starting when this version is effective from.
* **expiryDate**: string: This is the date when the Reservation will expire.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo)
* **lastUpdatedDateTime**: string (ReadOnly): DateTime of the last time the Reservation was updated.
* **mergeProperties**: [ReservationMergeProperties](#reservationmergeproperties)
* **provisioningState**: 'BillingFailed' | 'Cancelled' | 'ConfirmedBilling' | 'ConfirmedResourceHold' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'Merged' | 'PendingBilling' | 'PendingResourceHold' | 'Processing' | 'Split' | 'Succeeded' | string: Represent the current state of the Reservation.
* **quantity**: int: Quantity of the SKUs that are part of the Reservation.
* **splitProperties**: [ReservationSplitProperties](#reservationsplitproperties)

## ReservationResponse
### Properties
* **etag**: int
* **id**: string (ReadOnly): Identifier of the reservation
* **kind**: 'Microsoft.Compute': Resource Provider type to be reserved.
* **location**: 'australiaeast' | 'australiasoutheast' | 'brazilsouth' | 'canadacentral' | 'canadaeast' | 'centralindia' | 'centralus' | 'eastasia' | 'eastus' | 'eastus2' | 'japaneast' | 'japanwest' | 'northcentralus' | 'northeurope' | 'southcentralus' | 'southeastasia' | 'southindia' | 'uksouth' | 'ukwest' | 'westcentralus' | 'westeurope' | 'westindia' | 'westus' | 'westus2' | string: Location in which the Resources needs to be reserved. It cannot be changed after the resource has been created.
* **name**: string (ReadOnly): Name of the reservation
* **properties**: [ReservationProperties](#reservationproperties)
* **sku**: [SkuName](#skuname)
* **type**: string (ReadOnly): Type of resource. "Microsoft.Capacity/reservationOrders/reservations"

## ReservationSplitProperties
### Properties
* **splitDestinations**: string[]: List of destination Resource Id that are created due to split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **splitSource**: string: Resource Id of the Reservation from which this is split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

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

