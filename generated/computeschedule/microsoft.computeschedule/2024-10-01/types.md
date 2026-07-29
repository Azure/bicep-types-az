# Microsoft.ComputeSchedule @ 2024-10-01

## Function virtualMachinesCancelOperations (Microsoft.ComputeSchedule/locations@2024-10-01)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2024-10-01
* **Input**: [CancelOperationsRequest](#canceloperationsrequest)
* **Output**: [CancelOperationsResponse](#canceloperationsresponse)

## Function virtualMachinesExecuteDeallocate (Microsoft.ComputeSchedule/locations@2024-10-01)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2024-10-01
* **Input**: [ExecuteDeallocateRequest](#executedeallocaterequest)
* **Output**: [DeallocateResourceOperationResponse](#deallocateresourceoperationresponse)

## Function virtualMachinesExecuteHibernate (Microsoft.ComputeSchedule/locations@2024-10-01)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2024-10-01
* **Input**: [ExecuteHibernateRequest](#executehibernaterequest)
* **Output**: [HibernateResourceOperationResponse](#hibernateresourceoperationresponse)

## Function virtualMachinesExecuteStart (Microsoft.ComputeSchedule/locations@2024-10-01)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2024-10-01
* **Input**: [ExecuteStartRequest](#executestartrequest)
* **Output**: [StartResourceOperationResponse](#startresourceoperationresponse)

## Function virtualMachinesGetOperationErrors (Microsoft.ComputeSchedule/locations@2024-10-01)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2024-10-01
* **Input**: [GetOperationErrorsRequest](#getoperationerrorsrequest)
* **Output**: [GetOperationErrorsResponse](#getoperationerrorsresponse)

## Function virtualMachinesGetOperationStatus (Microsoft.ComputeSchedule/locations@2024-10-01)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2024-10-01
* **Input**: [GetOperationStatusRequest](#getoperationstatusrequest)
* **Output**: [GetOperationStatusResponse](#getoperationstatusresponse)

## Function virtualMachinesSubmitDeallocate (Microsoft.ComputeSchedule/locations@2024-10-01)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2024-10-01
* **Input**: [SubmitDeallocateRequest](#submitdeallocaterequest)
* **Output**: [DeallocateResourceOperationResponse](#deallocateresourceoperationresponse)

## Function virtualMachinesSubmitHibernate (Microsoft.ComputeSchedule/locations@2024-10-01)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2024-10-01
* **Input**: [SubmitHibernateRequest](#submithibernaterequest)
* **Output**: [HibernateResourceOperationResponse](#hibernateresourceoperationresponse)

## Function virtualMachinesSubmitStart (Microsoft.ComputeSchedule/locations@2024-10-01)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2024-10-01
* **Input**: [SubmitStartRequest](#submitstartrequest)
* **Output**: [StartResourceOperationResponse](#startresourceoperationresponse)

## CancelOperationsRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
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

## ExecuteDeallocateRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request

## ExecuteHibernateRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request

## ExecuteStartRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request

## ExecutionParameters
### Properties
* **optimizationPreference**: 'Availability' | 'Cost' | 'CostAvailabilityBalanced' | string: Details that could optimize the user's request
* **retryPolicy**: [RetryPolicy](#retrypolicy): Retry policy the user can pass

## GetOperationErrorsRequest
### Properties
* **operationIds**: string[] (Required): The list of operation ids to query errors of

## GetOperationErrorsResponse
### Properties
* **results**: [OperationErrorsResult](#operationerrorsresult)[] (Required): An array of operationids and their corresponding errors if any

## GetOperationStatusRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
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

## OperationErrorDetails
### Properties
* **azureOperationName**: string: The compute operationid of the Start/Deallocate/Hibernate request
* **crpOperationId**: string: The compute operationid of the Start/Deallocate/Hibernate request
* **errorCode**: string (Required): The error code of the operation
* **errorDetails**: string (Required): The error details of the operation
* **timestamp**: string: The timestamp of the error occurence
* **timeStamp**: string: The timestamp of the error occurence

## OperationErrorsResult
### Properties
* **activationTime**: string: The activation time of a vm operation
* **completedAt**: string: The completion time of the operation if the operation was completed
* **creationTime**: string: The creation time of the error result
* **operationErrors**: [OperationErrorDetails](#operationerrordetails)[]: A list of errors associated with the operationid
* **operationId**: string: The operationId identifying a vm operation
* **requestErrorCode**: string: Request level error code
* **requestErrorDetails**: string: Request level error details

## ResourceOperation
### Properties
* **errorCode**: string: Resource level error code if it exists
* **errorDetails**: string: Resource level error details if they exist
* **operation**: [ResourceOperationDetails](#resourceoperationdetails): Details of the operation performed on a resource
* **resourceId**: string: Unique identifier for the resource involved in the operation, eg ArmId

## ResourceOperationDetails
### Properties
* **completedAt**: string: Time the operation was complete if errors are null
* **deadline**: string: Deadline for the operation
* **deadlineType**: 'CompleteBy' | 'InitiateAt' | 'Unknown' | string: Type of deadline of the operation
* **operationId**: string (Required): Operation identifier for the unique operation
* **opType**: 'Deallocate' | 'Hibernate' | 'Start' | 'Unknown' | string: Type of operation performed on the resources
* **resourceId**: string: Unique identifier for the resource involved in the operation, eg ArmId
* **resourceOperationError**: [ResourceOperationError](#resourceoperationerror): Operation level errors if they exist
* **retryPolicy**: [RetryPolicy](#retrypolicy): Retry policy the user can pass
* **state**: 'Blocked' | 'Cancelled' | 'Executing' | 'Failed' | 'PendingExecution' | 'PendingScheduling' | 'Scheduled' | 'Succeeded' | 'Unknown' | string (ReadOnly): Current state of the operation
* **subscriptionId**: string: Subscription id attached to the request
* **timezone**: string: Timezone for the operation
* **timeZone**: string: Timezone for the operation

## ResourceOperationError
### Properties
* **errorCode**: string (Required): Code for the error eg 404, 500
* **errorDetails**: string (Required): Detailed message about the error

## Resources
### Properties
* **ids**: string[] (Required): The resource ids used for the request

## RetryPolicy
### Properties
* **retryCount**: int: Retry count for user request
* **retryWindowInMinutes**: int: Retry window in minutes for user request

## Schedule
### Properties
* **deadline**: string: The deadline for the operation
* **deadLine**: string: The deadline for the operation
* **deadlineType**: 'CompleteBy' | 'InitiateAt' | 'Unknown' | string (Required): The deadlinetype of the operation, this can either be InitiateAt or CompleteBy
* **timezone**: string: The timezone for the operation
* **timeZone**: string: The timezone for the operation

## StartResourceOperationResponse
### Properties
* **description**: string (Required): The description of the operation response
* **location**: string (Required): The location of the start request eg westus
* **results**: [ResourceOperation](#resourceoperation)[]: The results from the start request if no errors exist
* **type**: string (Required): The type of resources used in the start request eg virtual machines

## SubmitDeallocateRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request
* **schedule**: [Schedule](#schedule) (Required): The schedule for the request

## SubmitHibernateRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request
* **schedule**: [Schedule](#schedule) (Required): The schedule for the request

## SubmitStartRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request
* **schedule**: [Schedule](#schedule) (Required): The schedule for the request

