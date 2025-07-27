# Microsoft.ComputeSchedule @ 2025-04-15-preview

## Resource Microsoft.ComputeSchedule/scheduledActions@2025-04-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduledActionProperties](#scheduledactionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ComputeSchedule/scheduledActions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ComputeSchedule/scheduledActions/occurrences@2025-04-15-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}"} (Required, DeployTimeConstant): The resource name
* **properties**: [OccurrenceProperties](#occurrenceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeSchedule/scheduledActions/occurrences' (ReadOnly, DeployTimeConstant): The resource type

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

## ExecutionParameters
### Properties
* **optimizationPreference**: 'Availability' | 'Cost' | 'CostAvailabilityBalanced' | string: Details that could optimize the user's request
* **retryPolicy**: [RetryPolicy](#retrypolicy): Retry policy the user can pass

## NotificationProperties
### Properties
* **destination**: string (Required): Where the notification should be sent. For email, it should follow email format.
* **disabled**: bool: Tells if the notification is enabled or not.
* **language**: 'en-us' | string (Required): The language the notification should be sent on.
* **type**: 'Email' | string (Required): Type of notification to be sent.

## OccurrenceProperties
### Properties
* **provisioningState**: 'Canceled' | 'Cancelling' | 'Created' | 'Failed' | 'Rescheduling' | 'Scheduled' | 'Succeeded' | string (ReadOnly): The aggregated provisioning state of the occurrence
* **resultSummary**: [OccurrenceResultSummary](#occurrenceresultsummary) (Required, ReadOnly): The result for occurrences that achieved a terminal state
* **scheduledTime**: string (Required, ReadOnly): The time the occurrence is scheduled for. This value can be changed by calling the delay API

## OccurrenceResultSummary
### Properties
* **statuses**: [ResourceResultSummary](#resourceresultsummary)[] (Required): The summarized status of the resources.
* **total**: int (Required): The total number of resources that the occurrence was supposed to act on.

## ResourceResultSummary
### Properties
* **code**: string (Required): The error code for those resources. In case of success, code is populated with Success.
* **count**: int (Required): The number of resources that the code applies to.
* **errorDetails**: [AzureCoreFoundationsError](#azurecorefoundationserror): The error details for the resources. Not populated on success cases.

## RetryPolicy
### Properties
* **retryCount**: int: Retry count for user request
* **retryWindowInMinutes**: int: Retry window in minutes for user request

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

## ScheduledActionsSchedule
### Properties
* **deadlineType**: 'CompleteBy' | 'InitiateAt' | 'Unknown' | string: The type of deadline the scheduled action is supposed to follow for the schedule. If no value is passed, it will default to InitiateAt.
* **executionParameters**: [ExecutionParameters](#executionparameters): The execution parameters the scheduled action is supposed to follow
* **requestedDaysOfTheMonth**: (int {minValue: 1, maxValue: 31})[] (Required): The days of the month the scheduled action is supposed to run on. If empty, it means it will run on every day of the month.
* **requestedMonths**: ('All' | 'April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September' | string)[] (Required): The months the scheduled action is supposed to run on
* **requestedWeekDays**: ('All' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[] (Required): The week days the scheduled action is supposed to run on
* **scheduledTime**: string (Required): The time the scheduled action is supposed to run on
* **timeZone**: string (Required): The timezone the scheduled time is specified on

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

