# Microsoft.Capacity @ 2018-06-01

## Resource Microsoft.Capacity/reservationOrders@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationOrderProperties](#reservationorderproperties) (ReadOnly)
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Capacity/reservationOrders/reservations@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The Azure Region where the reserved resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationProperties](#reservationproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)
* **type**: 'Microsoft.Capacity/reservationOrders/reservations' (ReadOnly, DeployTimeConstant): The resource type

## ExtendedStatusInfo
### Properties
* **message**: string (ReadOnly): The message giving detailed information about the status code.
* **statusCode**: 'Active' | 'Expired' | 'Merged' | 'None' | 'PaymentInstrumentError' | 'Pending' | 'PurchaseError' | 'Split' | 'Succeeded' | string (ReadOnly)

## ReservationMergeProperties
### Properties
* **mergeDestination**: string (ReadOnly): Reservation Resource Id Created due to the merge. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **mergeSources**: string[] (ReadOnly): Resource Ids of the Source Reservation's merged to form this Reservation. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## ReservationOrderProperties
### Properties
* **createdDateTime**: string (ReadOnly): This is the DateTime when the reservation was created.
* **displayName**: string (ReadOnly): Friendly name for user to easily identified the reservation.
* **expiryDate**: string (ReadOnly): This is the date when the Reservation will expire.
* **originalQuantity**: int (ReadOnly): Total Quantity of the SKUs purchased in the Reservation.
* **provisioningState**: string (ReadOnly): Current state of the reservation.
* **requestDateTime**: string (ReadOnly): This is the DateTime when the reservation was initially requested for purchase.
* **reservations**: [ReservationResponse](#reservationresponse)[] (ReadOnly): Array of ReservationResponse
* **term**: 'P1Y' | 'P3Y' | string (ReadOnly): Represent the term of Reservation.

## ReservationProperties
### Properties
* **appliedScopes**: string[] (ReadOnly): List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'Shared' | 'Single' | string (ReadOnly): Type of the Applied Scope.
* **displayName**: string (ReadOnly): Friendly name for user to easily identify the reservation
* **effectiveDateTime**: string (ReadOnly): DateTime of the Reservation starting when this version is effective from.
* **expiryDate**: string (ReadOnly): This is the date when the Reservation will expire.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **instanceFlexibility**: 'NotSupported' | 'Off' | 'On' | string (ReadOnly): Allows reservation discount to be applied across skus within the same Autofit group. Not all skus support instance size flexibility.
* **lastUpdatedDateTime**: string (ReadOnly): DateTime of the last time the Reservation was updated.
* **mergeProperties**: [ReservationMergeProperties](#reservationmergeproperties) (ReadOnly)
* **provisioningState**: string (ReadOnly): Current state of the reservation.
* **quantity**: int (ReadOnly): Quantity of the SKUs that are part of the Reservation.
* **reservedResourceType**: 'CosmosDb' | 'RedHat' | 'SqlDatabases' | 'SuseLinux' | 'VirtualMachines' | string (ReadOnly): The type of the resource that is being reserved.
* **skuDescription**: string (ReadOnly): Description of the SKU in english.
* **splitProperties**: [ReservationSplitProperties](#reservationsplitproperties) (ReadOnly)

## ReservationResponse
### Properties
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly): Identifier of the reservation
* **location**: string (ReadOnly): The Azure Region where the reserved resource lives.
* **name**: string (ReadOnly): Name of the reservation
* **properties**: [ReservationProperties](#reservationproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)
* **type**: string (ReadOnly): Type of resource. "Microsoft.Capacity/reservationOrders/reservations"

## ReservationSplitProperties
### Properties
* **splitDestinations**: string[] (ReadOnly): List of destination Resource Id that are created due to split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **splitSource**: string (ReadOnly): Resource Id of the Reservation from which this is split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## SkuName
### Properties
* **name**: string (ReadOnly)

