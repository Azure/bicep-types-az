# Microsoft.ComputeSchedule @ 2026-03-01-preview

## Resource Microsoft.ComputeSchedule/scheduledActions@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduledActionProperties](#scheduledactionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ComputeSchedule/scheduledActions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ComputeSchedule/scheduledActions/occurrences@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}"} (Required, DeployTimeConstant): The resource name
* **properties**: [OccurrenceProperties](#occurrenceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeSchedule/scheduledActions/occurrences' (ReadOnly, DeployTimeConstant): The resource type

## Function attachResources (Microsoft.ComputeSchedule/scheduledActions@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/scheduledActions
* **ApiVersion**: 2026-03-01-preview
* **Input**: [ResourceAttachRequest](#resourceattachrequest)
* **Output**: [ResourceOperationResponse](#resourceoperationresponse)

## Function cancel (Microsoft.ComputeSchedule/scheduledActions/occurrences@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/scheduledActions/occurrences
* **ApiVersion**: 2026-03-01-preview
* **Input**: [CancelOccurrenceRequest](#canceloccurrencerequest)
* **Output**: [ResourceOperationResponse](#resourceoperationresponse)

## Function cancelNextOccurrence (Microsoft.ComputeSchedule/scheduledActions@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/scheduledActions
* **ApiVersion**: 2026-03-01-preview
* **Input**: [CancelOccurrenceRequest](#canceloccurrencerequest)
* **Output**: [ResourceOperationResponse](#resourceoperationresponse)

## Function delay (Microsoft.ComputeSchedule/scheduledActions/occurrences@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/scheduledActions/occurrences
* **ApiVersion**: 2026-03-01-preview
* **Input**: [DelayRequest](#delayrequest)
* **Output**: [ResourceOperationResponse](#resourceoperationresponse)

## Function detachResources (Microsoft.ComputeSchedule/scheduledActions@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/scheduledActions
* **ApiVersion**: 2026-03-01-preview
* **Input**: [ResourceDetachRequest](#resourcedetachrequest)
* **Output**: [ResourceOperationResponse](#resourceoperationresponse)

## Function disable (Microsoft.ComputeSchedule/scheduledActions@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/scheduledActions
* **ApiVersion**: 2026-03-01-preview
* **Output**: any

## Function enable (Microsoft.ComputeSchedule/scheduledActions@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/scheduledActions
* **ApiVersion**: 2026-03-01-preview
* **Output**: any

## Function patchResources (Microsoft.ComputeSchedule/scheduledActions@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/scheduledActions
* **ApiVersion**: 2026-03-01-preview
* **Input**: [ResourcePatchRequest](#resourcepatchrequest)
* **Output**: [ResourceOperationResponse](#resourceoperationresponse)

## Function triggerManualOccurrence (Microsoft.ComputeSchedule/scheduledActions@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/scheduledActions
* **ApiVersion**: 2026-03-01-preview
* **Output**: [Occurrence](#occurrence)

## Function virtualMachinesCancelOperations (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [CancelOperationsRequest](#canceloperationsrequest)
* **Output**: [CancelOperationsResponse](#canceloperationsresponse)

## Function virtualMachinesExecuteCreate (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [ExecuteCreateRequest](#executecreaterequest)
* **Output**: [CreateResourceOperationResponse](#createresourceoperationresponse)

## Function virtualMachinesExecuteCreateFlex (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [ExecuteCreateFlexRequest](#executecreateflexrequest)
* **Output**: [CreateFlexResourceOperationResponse](#createflexresourceoperationresponse)

## Function virtualMachinesExecuteDeallocate (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [ExecuteDeallocateRequest](#executedeallocaterequest)
* **Output**: [DeallocateResourceOperationResponse](#deallocateresourceoperationresponse)

## Function virtualMachinesExecuteDelete (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [ExecuteDeleteRequest](#executedeleterequest)
* **Output**: [DeleteResourceOperationResponse](#deleteresourceoperationresponse)

## Function virtualMachinesExecuteHibernate (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [ExecuteHibernateRequest](#executehibernaterequest)
* **Output**: [HibernateResourceOperationResponse](#hibernateresourceoperationresponse)

## Function virtualMachinesExecuteStart (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [ExecuteStartRequest](#executestartrequest)
* **Output**: [StartResourceOperationResponse](#startresourceoperationresponse)

## Function virtualMachinesGetOperationErrors (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [GetOperationErrorsRequest](#getoperationerrorsrequest)
* **Output**: [GetOperationErrorsResponse](#getoperationerrorsresponse)

## Function virtualMachinesGetOperationStatus (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [GetOperationStatusRequest](#getoperationstatusrequest)
* **Output**: [GetOperationStatusResponse](#getoperationstatusresponse)

## Function virtualMachinesSubmitDeallocate (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [SubmitDeallocateRequest](#submitdeallocaterequest)
* **Output**: [DeallocateResourceOperationResponse](#deallocateresourceoperationresponse)

## Function virtualMachinesSubmitHibernate (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [SubmitHibernateRequest](#submithibernaterequest)
* **Output**: [HibernateResourceOperationResponse](#hibernateresourceoperationresponse)

## Function virtualMachinesSubmitStart (Microsoft.ComputeSchedule/locations@2026-03-01-preview)
* **Resource**: Microsoft.ComputeSchedule/locations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [SubmitStartRequest](#submitstartrequest)
* **Output**: [StartResourceOperationResponse](#startresourceoperationresponse)

## AzureCoreFoundationsError
### Properties
* **code**: string (Required): One of a server-defined set of error codes.
* **details**: [AzureCoreFoundationsError](#azurecorefoundationserror)[]: An array of details about specific errors that led to this reported error.
* **innererror**: [AzureCoreFoundationsInnerError](#azurecorefoundationsinnererror): An object containing more specific information than the current object about the error.
* **message**: string (Required): A human-readable representation of the error.
* **target**: string: The target of the error.

## AzureCoreFoundationsInnerError
### Properties
* **code**: string: One of a server-defined set of error codes.
* **innererror**: [AzureCoreFoundationsInnerError](#azurecorefoundationsinnererror): Inner error.

## CancelOccurrenceRequest
### Properties
* **resourceIds**: string[] (Required): The resources the cancellation should act on. If no resource is passed in the list, Scheduled Action will cancel the occurrence for all resources.

## CancelOperationsRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
* **operationIds**: string[] (Required): The list of operation ids to cancel operations on

## CancelOperationsResponse
### Properties
* **results**: [ResourceOperation](#resourceoperation)[] (Required): An array of resource operations that were successfully cancelled

## CreateFlexResourceOperationResponse
### Properties
* **description**: string (Required): The description of the operation response
* **location**: string (Required): The location of the create flex request eg westus
* **results**: [ResourceOperation](#resourceoperation)[]: The results from the create flex request if no errors exist
* **type**: string (Required): The type of resources used in the create flex request eg virtual machines

## CreateResourceOperationResponse
### Properties
* **description**: string (Required): The description of the operation response
* **location**: string (Required): The location of the start request eg westus
* **results**: [ResourceOperation](#resourceoperation)[]: The results from the start request if no errors exist
* **type**: string (Required): The type of resources used in the create request eg virtual machines

## DeallocateResourceOperationResponse
### Properties
* **description**: string (Required): The description of the operation response
* **location**: string (Required): The location of the deallocate request eg westus
* **results**: [ResourceOperation](#resourceoperation)[]: The results from the deallocate request if no errors exist
* **type**: string (Required): The type of resources used in the deallocate request eg virtual machines

## DelayRequest
### Properties
* **delay**: string (Required): The exact time to delay the operations to
* **resourceIds**: string[] (Required): The resources that should be delayed. If empty, the delay will apply to the all resources in the occurrence.

## DeleteResourceOperationResponse
### Properties
* **description**: string (Required): The description of the operation response
* **location**: string (Required): The location of the start request eg westus
* **results**: [ResourceOperation](#resourceoperation)[]: The results from the start request if no errors exist
* **type**: string (Required): The type of resources used in the delete request eg virtual machines

## ExecuteCreateFlexRequest
### Properties
* **correlationid**: string: Correlationid item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resourceConfigParameters**: [ResourceProvisionFlexPayload](#resourceprovisionflexpayload) (Required): Resource creation payload with flex properties

## ExecuteCreateRequest
### Properties
* **correlationid**: string: CorrelationId item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resourceConfigParameters**: [ResourceProvisionPayload](#resourceprovisionpayload) (Required): resource creation payload

## ExecuteDeallocateRequest
### Properties
* **correlationid**: string (Required): CorrelationId item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **resources**: [Resources](#resources) (Required): The resources for the request

## ExecuteDeleteRequest
### Properties
* **correlationid**: string: CorrelationId item
* **executionParameters**: [ExecutionParameters](#executionparameters) (Required): The execution parameters for the request
* **forceDeletion**: bool: Forced delete resource item
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

## FallbackOperationInfo
### Properties
* **error**: [ResourceOperationError](#resourceoperationerror): The error code if the fallback operation failed
* **lastOpType**: 'Create' | 'Deallocate' | 'Delete' | 'Hibernate' | 'Start' | 'Unknown' | string (Required): The last operation type that was performed as a fallback
* **status**: string (Required): The status of the fallback operation

## FlexProperties
### Properties
* **osType**: 'Linux' | 'Windows' | string (Required): The operating system type for the VMs
* **priorityProfile**: [PriorityProfile](#priorityprofile) (Required): The priority profile for VM allocation
* **vmSizeProfiles**: [VmSizeProfile](#vmsizeprofile)[] {minLength: 1, maxLength: 5} (Required): The list of VM size profiles to use for flex creation
* **zoneAllocationPolicy**: [ZoneAllocationPolicy](#zoneallocationpolicy): The zone allocation policy for distributing VMs across availability zones

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

## NotificationProperties
### Properties
* **destination**: string (Required): Where the notification should be sent. For email, it should follow email format.
* **disabled**: bool: Tells if the notification is enabled or not.
* **language**: 'en-us' | string (Required): The language the notification should be sent on.
* **type**: 'Email' | string (Required): Type of notification to be sent.

## Occurrence
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [OccurrenceProperties](#occurrenceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## OccurrenceProperties
### Properties
* **provisioningState**: 'Canceled' | 'Cancelling' | 'Created' | 'Failed' | 'Rescheduling' | 'Scheduled' | 'Succeeded' | string (ReadOnly): The aggregated provisioning state of the occurrence
* **resultSummary**: [OccurrenceResultSummary](#occurrenceresultsummary) (Required, ReadOnly): The result for occurrences that achieved a terminal state
* **scheduledTime**: string (Required, ReadOnly): The time the occurrence is scheduled for. This value can be changed by calling the delay API

## OccurrenceResultSummary
### Properties
* **statuses**: [ResourceResultSummary](#resourceresultsummary)[] (Required): The summarized status of the resources.
* **total**: int (Required): The total number of resources that the occurrence was supposed to act on.

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

## PriorityProfile
### Properties
* **allocationStrategy**: 'CapacityOptimized' | 'LowestPrice' | 'Prioritized' | string: The allocation strategy for VM size selection
* **type**: 'Regular' | 'Spot' | string: The priority type for VM allocation

## ResourceAttachRequest
### Properties
* **resources**: [ScheduledActionResource](#scheduledactionresource)[] (Required): List of resources to be attached/patched

## ResourceDetachRequest
### Properties
* **resources**: string[] (Required): List of resources to be detached

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
* **fallbackOperationInfo**: [FallbackOperationInfo](#fallbackoperationinfo): Fallback operation details if a fallback was performed
* **operationId**: string (Required): Operation identifier for the unique operation
* **opType**: 'Create' | 'Deallocate' | 'Delete' | 'Hibernate' | 'Start' | 'Unknown' | string: Type of operation performed on the resources
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

## ResourceOperationResponse
### Properties
* **resourcesStatuses**: [ResourceStatus](#resourcestatus)[] (Required): The resource status of for each resource
* **totalResources**: int (Required): The total number of resources operated on

## ResourcePatchRequest
### Properties
* **resources**: [ScheduledActionResource](#scheduledactionresource)[] (Required): The list of resources we watch to patch

## ResourceProvisionFlexPayload
### Properties
* **baseProfile**: [ResourceProvisionFlexPayloadBaseProfile](#resourceprovisionflexpayloadbaseprofile): JSON object that contains VM properties that are common across all VMs in this batch
* **flexProperties**: [FlexProperties](#flexproperties) (Required): The flex properties for flexible VM creation
* **resourceCount**: int (Required): Number of VMs to be created
* **resourceOverrides**: [ResourceProvisionFlexPayloadResourceOverridesItem](#resourceprovisionflexpayloadresourceoverridesitem)[]: JSON array that contains VM properties that should be overridden for each VM in the batch
* **resourcePrefix**: string: If resourceOverrides doesn't contain name, service will create name based on prefix and resourceCount

## ResourceProvisionFlexPayloadBaseProfile
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceProvisionFlexPayloadResourceOverridesItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceProvisionPayload
### Properties
* **baseProfile**: [ResourceProvisionPayloadBaseProfile](#resourceprovisionpayloadbaseprofile): Virtual machine profile object that contains VM properties that are common across all VMs in this batch  (if you want to create 100 VMs in this request, and they all have same vmSize, then include vmSize in baseProfile)
* **resourceCount**: int (Required): Number of VMs to be created
* **resourceOverrides**: [ResourceProvisionPayloadResourceOverridesItem](#resourceprovisionpayloadresourceoverridesitem)[]: Virtual machine profile array that contains VM properties that needs to be overridden for each VM in the batch (if you want to create 100 VMs, they all need a distinct computerName property, you pass computerNames for each VM in batch in this array), service will merge baseProfile with VM specific overrides and create a merged VMProfile.
* **resourcePrefix**: string: if resourceOverrides doesn't contain "name", service will create name based of prefix and ResourceCount e.g. resourceprefix-0,resourceprefix-1..

## ResourceProvisionPayloadBaseProfile
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceProvisionPayloadResourceOverridesItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceResultSummary
### Properties
* **code**: string (Required): The error code for those resources. In case of success, code is populated with Success.
* **count**: int (Required): The number of resources that the code applies to.
* **errorDetails**: [AzureCoreFoundationsError](#azurecorefoundationserror): The error details for the resources. Not populated on success cases.

## Resources
### Properties
* **ids**: string[] (Required): The resource ids used for the request

## ResourceStatus
### Properties
* **error**: [AzureCoreFoundationsError](#azurecorefoundationserror): Errors encountered while trying to perform
* **resourceId**: string (Required): The arm identifier of the resource
* **status**: 'Failed' | 'Succeeded' | string (Required, ReadOnly): The state the resource is currently on

## RetryPolicy
### Properties
* **onFailureAction**: 'Create' | 'Deallocate' | 'Delete' | 'Hibernate' | 'Start' | 'Unknown' | string: Action to take on failure
* **retryCount**: int: Retry count for user request
* **retryWindowInMinutes**: int: Retry window in minutes for user request

## Schedule
### Properties
* **deadline**: string: The deadline for the operation
* **deadLine**: string: The deadline for the operation
* **deadlineType**: 'CompleteBy' | 'InitiateAt' | 'Unknown' | string (Required): The deadlinetype of the operation, this can either be InitiateAt or CompleteBy
* **timezone**: string: The timezone for the operation
* **timeZone**: string: The timezone for the operation

## ScheduledActionProperties
### Properties
* **actionType**: 'Deallocate' | 'Hibernate' | 'Internal' | 'Start' | string (Required): The action the scheduled action should perform in the resources
* **disabled**: bool: Tell if the scheduled action is disabled or not
* **endTime**: string: The time when the scheduled action is supposed to stop scheduling
* **notificationSettings**: [NotificationProperties](#notificationproperties)[] (Required): The notification settings for the scheduled action
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last provisioning operation performed on the resource.
* **resourceType**: 'VirtualMachine' | 'VirtualMachineScaleSet' | string (Required): The type of resource the scheduled action is targeting
* **schedule**: [ScheduledActionsSchedule](#scheduledactionsschedule) (Required): The schedule the scheduled action is supposed to follow
* **startTime**: string (Required): The time which the scheduled action is supposed to start running

## ScheduledActionResource
### Properties
* **id**: string (Required, ReadOnly): The compute RP resource id of the resource in the scheduled actions scope.
* **name**: string (Required, ReadOnly): The name of the resource
* **notificationSettings**: [NotificationProperties](#notificationproperties)[]: The desired notification settings for the specified resource.
* **resourceId**: string (Required): The ARM Id of the resource.
"subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.Compute/virtualMachines/{vmName}"
* **type**: string (ReadOnly): The type of resource

## ScheduledActionsSchedule
### Properties
* **deadlineType**: 'CompleteBy' | 'InitiateAt' | 'Unknown' | string: The type of deadline the scheduled action is supposed to follow for the schedule. If no value is passed, it will default to InitiateAt.
* **executionParameters**: [ExecutionParameters](#executionparameters): The execution parameters the scheduled action is supposed to follow
* **requestedDaysOfTheMonth**: (int {minValue: 1, maxValue: 31})[] (Required): The days of the month the scheduled action is supposed to run on. If empty, it means it will run on every day of the month.
* **requestedMonths**: ('All' | 'April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September' | string)[] (Required): The months the scheduled action is supposed to run on
* **requestedWeekDays**: ('All' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[] (Required): The week days the scheduled action is supposed to run on
* **scheduledTime**: string (Required): The time the scheduled action is supposed to run on
* **timeZone**: string (Required): The timezone the scheduled time is specified on

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

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VmSizeProfile
### Properties
* **name**: string {minLength: 1} (Required): The name of the VM size, eg Standard_D2ads_v5
* **rank**: int: The rank of this VM size in the priority order

## ZoneAllocationPolicy
### Properties
* **distributionStrategy**: 'BestEffortBalanced' | 'BestEffortSingleZone' | 'Prioritized' | 'StrictBalanced' | string (Required): The distribution strategy for zone allocation
* **zonePreferences**: [ZonePreference](#zonepreference)[]: The zone preferences for allocation priority

## ZonePreference
### Properties
* **rank**: int: The rank of this zone in the priority order
* **zone**: string (Required): The zone identifier

