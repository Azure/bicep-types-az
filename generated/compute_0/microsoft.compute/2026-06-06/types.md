# Microsoft.Compute @ 2026-06-06

## Function virtualMachinesBulkCancel (Microsoft.Compute/locations@2026-06-06)
* **Resource**: Microsoft.Compute/locations
* **ApiVersion**: 2026-06-06
* **Input**: [CancelOperationsRequest](#canceloperationsrequest)
* **Output**: [CancelOperationsResponse](#canceloperationsresponse)

## Function virtualMachinesBulkDeallocate (Microsoft.Compute/locations@2026-06-06)
* **Resource**: Microsoft.Compute/locations
* **ApiVersion**: 2026-06-06
* **Input**: [ExecuteDeallocateRequest](#executedeallocaterequest)
* **Output**: [DeallocateResourceOperationResponse](#deallocateresourceoperationresponse)

## Function virtualMachinesBulkDelete (Microsoft.Compute/locations@2026-06-06)
* **Resource**: Microsoft.Compute/locations
* **ApiVersion**: 2026-06-06
* **Input**: [ExecuteDeleteRequest](#executedeleterequest)
* **Output**: [DeleteResourceOperationResponse](#deleteresourceoperationresponse)

## Function virtualMachinesBulkGetOperationStatus (Microsoft.Compute/locations@2026-06-06)
* **Resource**: Microsoft.Compute/locations
* **ApiVersion**: 2026-06-06
* **Input**: [GetOperationStatusRequest](#getoperationstatusrequest)
* **Output**: [GetOperationStatusResponse](#getoperationstatusresponse)

## Function virtualMachinesBulkHibernate (Microsoft.Compute/locations@2026-06-06)
* **Resource**: Microsoft.Compute/locations
* **ApiVersion**: 2026-06-06
* **Input**: [ExecuteHibernateRequest](#executehibernaterequest)
* **Output**: [HibernateResourceOperationResponse](#hibernateresourceoperationresponse)

## Function virtualMachinesBulkStart (Microsoft.Compute/locations@2026-06-06)
* **Resource**: Microsoft.Compute/locations
* **ApiVersion**: 2026-06-06
* **Input**: [ExecuteStartRequest](#executestartrequest)
* **Output**: [StartResourceOperationResponse](#startresourceoperationresponse)

## CancelOperationsRequest
### Properties
* **operationIds**: string[] (Required): The Bulk Action Operation Ids that identify the operations to cancel.

## CancelOperationsResponse
### Properties
* **results**: [ResourceOperation](#resourceoperation)[] (Required): The current result for each operation submitted for cancellation.

## DeallocateResourceOperationResponse
### Properties
* **description**: string (Required): A description of the bulk action result.
* **location**: string (Required): The Azure region where Bulk Actions processes the request.
* **results**: [ResourceOperation](#resourceoperation)[]: The result for each virtual machine.
* **type**: string (Required): The type of resources targeted by the bulk action.

## DeleteResourceOperationResponse
### Properties
* **description**: string (Required): A description of the bulk action result.
* **location**: string (Required): The Azure region where Bulk Actions processes the request.
* **results**: [ResourceOperation](#resourceoperation)[]: The result for each virtual machine.
* **type**: string (Required): The type of resources targeted by the bulk action.

## ExecuteDeallocateRequest
### Properties
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution settings for the bulk action.
* **resources**: [Resources](#resources) (Required): The target virtual machines.

## ExecuteDeleteRequest
### Properties
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution settings for the bulk action.
* **forceDeletion**: bool: Indicates whether Bulk Actions uses forced deletion for the target virtual machines.
* **resources**: [Resources](#resources) (Required): The target virtual machines.

## ExecuteHibernateRequest
### Properties
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution settings for the bulk action.
* **resources**: [Resources](#resources) (Required): The target virtual machines.

## ExecuteStartRequest
### Properties
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution settings for the bulk action.
* **resources**: [Resources](#resources) (Required): The target virtual machines.

## ExecutionParameters
### Properties
* **retryPolicy**: [RetryPolicy](#retrypolicy): The retry settings for the bulk action.

## FallbackOperationInfo
### Properties
* **error**: [ResourceOperationError](#resourceoperationerror): The error returned when the additional operation did not succeed.
* **lastOpType**: 'Create' | 'Deallocate' | 'Delete' | 'Hibernate' | 'Start' | 'Unknown' | string (Required): The type of the additional operation.
* **status**: string (Required): The status of the additional operation.

## GetOperationStatusRequest
### Properties
* **operationIds**: string[] (Required): The Bulk Action Operation Ids that identify the operations for which current status should be returned.

## GetOperationStatusResponse
### Properties
* **results**: [ResourceOperation](#resourceoperation)[] (Required): The current result for each requested operation.

## HibernateResourceOperationResponse
### Properties
* **description**: string (Required): A description of the bulk action result.
* **location**: string (Required): The Azure region where Bulk Actions processes the request.
* **results**: [ResourceOperation](#resourceoperation)[]: The result for each virtual machine.
* **type**: string (Required): The type of resources targeted by the bulk action.

## ResourceOperation
### Properties
* **errorCode**: string: A code that identifies the error for the virtual machine operation.
* **errorDetails**: string: A message that describes the error for the virtual machine operation.
* **operation**: [ResourceOperationDetails](#resourceoperationdetails): The virtual machine operation details.
* **resourceId**: string: The virtual machine Azure resource ID.

## ResourceOperationDetails
### Properties
* **completedAt**: string: The date and time when the operation completed.
* **deadline**: string: The requested deadline for the operation.
* **deadlineType**: 'CompleteBy' | 'InitiateAt' | 'Unknown' | string: Specifies whether the deadline time indicates the time at which the operation should start or should be complete.
* **fallbackOperationInfo**: [FallbackOperationInfo](#fallbackoperationinfo): Information about the fallback operation attempted after the requested operation did not succeed.
* **operationId**: string (Required): The operation ID used to track the action for this virtual machine.
* **opType**: 'Create' | 'Deallocate' | 'Delete' | 'Hibernate' | 'Start' | 'Unknown' | string: The type of operation performed on the virtual machine.
* **resourceId**: string: The virtual machine's Azure resource ID.
* **resourceOperationError**: [ResourceOperationError](#resourceoperationerror): Contains error details if the operation does not succeed.
* **retryPolicy**: [RetryPolicy](#retrypolicy): The retry settings for the bulk action.
* **state**: 'Blocked' | 'Cancelled' | 'Executing' | 'Failed' | 'PendingExecution' | 'PendingScheduling' | 'Scheduled' | 'Succeeded' | 'Unknown' | string (ReadOnly): The current state of the operation.
* **subscriptionId**: string: The subscription ID associated with the bulk action.
* **timezone**: string: The time zone used to interpret the operation deadline.

## ResourceOperationError
### Properties
* **errorCode**: string (Required): A code that identifies the error.
* **errorDetails**: string (Required): A message that describes the error.

## Resources
### Properties
* **ids**: string[] (Required): The Azure resource IDs of the target virtual machines.

## RetryPolicy
### Properties
* **onFailureAction**: 'Create' | 'Deallocate' | 'Delete' | 'Hibernate' | 'Start' | 'Unknown' | string: The operation that Bulk Actions attempts when the requested operation fails.
* **retryCount**: int: The maximum number of retry attempts.
* **retryWindowInMinutes**: int: The period, in minutes, during which Bulk Actions can retry the operation.

## StartResourceOperationResponse
### Properties
* **description**: string (Required): A description of the bulk action result.
* **location**: string (Required): The Azure region where Bulk Actions processes the request.
* **results**: [ResourceOperation](#resourceoperation)[]: The result for each virtual machine.
* **type**: string (Required): The type of resources targeted by the bulk action.

