# Microsoft.Capacity @ 2020-11-15-preview

## Function changeDirectory (Microsoft.Capacity/reservationOrders@2020-11-15-preview)
* **Resource**: Microsoft.Capacity/reservationOrders
* **ApiVersion**: 2020-11-15-preview
* **Input**: [ChangeDirectoryRequest](#changedirectoryrequest)
* **Output**: [ChangeDirectoryResponse](#changedirectoryresponse)

## ChangeDirectoryRequest
### Properties
* **destinationTenantId**: string: Tenant id GUID that reservation order is to be transferred to

## ChangeDirectoryResponse
### Properties
* **reservationOrder**: [ChangeDirectoryResult](#changedirectoryresult): Change directory result for reservation order or reservation
* **reservations**: [ChangeDirectoryResult](#changedirectoryresult)[]

## ChangeDirectoryResult
### Properties
* **error**: string: Error reason if operation failed. Null otherwise
* **id**: string: Identifier of the reservation order or reservation
* **isSucceeded**: bool: True if change directory operation succeeded on this reservation order or reservation
* **name**: string: Name of the reservation order or reservation

