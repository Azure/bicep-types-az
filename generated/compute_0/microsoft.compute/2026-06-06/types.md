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
* **operationIds**: string[] (Required): The list of operation ids to cancel operations on

## CancelOperationsResponse
### Properties
* **results**: [ResourceOperation](#resourceoperation)[] (Required): An array of resource operations that were successfully cancelled

## DeallocateResourceOperationResponse
### Properties
* **description**: string (Required): The description of the operation response
* **location**: string (Required): The location of the deallocate request eg westus
* **results**: [ResourceOperation](#resourceoperation)[]: The results from the deallocate request if no errors exist
* **type**: string (Required): The type of resources used in the deallocate request eg virtual machines

## DeleteResourceOperationResponse
### Properties
* **description**: string (Required): The description of the operation response
* **location**: string (Required): The location of the delete request eg westus
* **results**: [ResourceOperation](#resourceoperation)[]: The results from the delete request if no errors exist
* **type**: string (Required): The type of resources used in the delete request eg virtual machines

## ExecuteDeallocateRequest
### Properties
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request

## ExecuteDeleteRequest
### Properties
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **forceDeletion**: bool: Forced delete resource item
* **resources**: [Resources](#resources) (Required): The resources for the request

## ExecuteHibernateRequest
### Properties
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request

## ExecuteStartRequest
### Properties
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request

## ExecutionParameters
### Properties
* **retryPolicy**: [RetryPolicy](#retrypolicy): Retry policy the user can pass

## FallbackOperationInfo
### Properties
* **error**: [ResourceOperationError](#resourceoperationerror): The error code if the fallback operation failed
* **lastOpType**: 'Create' | 'Deallocate' | 'Delete' | 'Hibernate' | 'Start' | 'Unknown' | string (Required): The last operation type that was performed as a fallback
* **status**: string (Required): The status of the fallback operation

## GetOperationStatusRequest
### Properties
* **operationIds**: string[] (Required): The list of operation ids to get the status of

## GetOperationStatusResponse
### Properties
* **results**: [ResourceOperation](#resourceoperation)[] (Required): An array of resource operations based on their operation ids

## HibernateResourceOperationResponse
### Properties
* **description**: string (Required): The description of the operation response
* **location**: string (Required): The location of the Hibernate request eg westus
* **results**: [ResourceOperation](#resourceoperation)[]: The results from the Hibernate request if no errors exist
* **type**: string (Required): The type of resources used in the Hibernate request eg virtual machines

## ResourceOperation
### Properties
* **errorCode**: string: Resource level error code if it exists
* **errorDetails**: string: Resource level error details if they exist
* **operation**: [ResourceOperationDetails](#resourceoperationdetails): Details of the operation performed on a resource
* **resourceId**: string: Unique identifier for the resource involved in the operation, for example Azure resource ID

## ResourceOperationDetails
### Properties
* **completedAt**: string: Time the operation was complete if errors are null
* **deadline**: string: Deadline for the operation
* **deadlineType**: 'CompleteBy' | 'InitiateAt' | 'Unknown' | string: Type of deadline of the operation
* **fallbackOperationInfo**: [FallbackOperationInfo](#fallbackoperationinfo): Fallback operation details if a fallback was performed
* **operationId**: string (Required): Operation identifier for the unique operation
* **opType**: 'Create' | 'Deallocate' | 'Delete' | 'Hibernate' | 'Start' | 'Unknown' | string: Type of operation performed on the resources
* **resourceId**: string: Unique identifier for the resource involved in the operation, for example Azure resource ID
* **resourceOperationError**: [ResourceOperationError](#resourceoperationerror): Operation level errors if they exist
* **retryPolicy**: [RetryPolicy](#retrypolicy): Retry policy the user can pass
* **state**: 'Blocked' | 'Cancelled' | 'Executing' | 'Failed' | 'PendingExecution' | 'PendingScheduling' | 'Scheduled' | 'Succeeded' | 'Unknown' | string (ReadOnly): Current state of the operation
* **subscriptionId**: string: Subscription id attached to the request
* **timezone**: string: Timezone for the operation

## ResourceOperationError
### Properties
* **errorCode**: string (Required): Code for the error eg 404, 500
* **errorDetails**: string (Required): Detailed message about the error

## Resources
### Properties
* **ids**: string[] (Required): The resource ids used for the request

## RetryPolicy
### Properties
* **onFailureAction**: 'Create' | 'Deallocate' | 'Delete' | 'Hibernate' | 'Start' | 'Unknown' | string: Action to take on failure
* **retryCount**: int: Retry count for user request
* **retryWindowInMinutes**: int: Retry window in minutes for user request

## StartResourceOperationResponse
### Properties
* **description**: string (Required): The description of the operation response
* **location**: string (Required): The location of the start request eg westus
* **results**: [ResourceOperation](#resourceoperation)[]: The results from the start request if no errors exist
* **type**: string (Required): The type of resources used in the start request eg virtual machines

