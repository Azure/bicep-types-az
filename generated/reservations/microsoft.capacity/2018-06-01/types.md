# Microsoft.Capacity @ 2018-06-01

## Resource Microsoft.Capacity/reservationOrders@2018-06-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationOrderProperties](#reservationorderproperties) (ReadOnly)
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Capacity/reservationOrders/reservations@2018-06-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The Azure Region where the reserved resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationProperties](#reservationproperties) (ReadOnly)
* **sku**: [SkuName](#skuname) (ReadOnly)
* **type**: 'Microsoft.Capacity/reservationOrders/reservations' (ReadOnly, DeployTimeConstant): The resource type

## Function merge (Microsoft.Capacity/reservationOrders@2018-06-01)
* **Resource**: Microsoft.Capacity/reservationOrders
* **ApiVersion**: 2018-06-01
* **Input**: [MergeRequest](#mergerequest)
* **Output**: [ReservationResponse](#reservationresponse)[]

## Function split (Microsoft.Capacity/reservationOrders@2018-06-01)
* **Resource**: Microsoft.Capacity/reservationOrders
* **ApiVersion**: 2018-06-01
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
* **provisioningState**: string: Current state of the reservation.
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
* **instanceFlexibility**: 'NotSupported' | 'Off' | 'On' | string: Allows reservation discount to be applied across skus within the same Autofit group. Not all skus support instance size flexibility.
* **lastUpdatedDateTime**: string (ReadOnly): DateTime of the last time the Reservation was updated.
* **mergeProperties**: [ReservationMergeProperties](#reservationmergeproperties)
* **provisioningState**: string: Current state of the reservation.
* **quantity**: int: Quantity of the SKUs that are part of the Reservation.
* **reservedResourceType**: 'CosmosDb' | 'RedHat' | 'SqlDatabases' | 'SuseLinux' | 'VirtualMachines' | string: The type of the resource that is being reserved.
* **skuDescription**: string: Description of the SKU in english.
* **splitProperties**: [ReservationSplitProperties](#reservationsplitproperties)

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

