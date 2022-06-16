# Microsoft.Authorization @ 2021-03-01-preview

## Resource Microsoft.Authorization/accessReviewScheduleDefinitions@2021-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly): This is the collection of backup reviewers.
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly, WriteOnly): The user or other identity who created this review.
* **descriptionForAdmins**: string (WriteOnly): The description provided by the access review creator and visible to admins.
* **descriptionForReviewers**: string (WriteOnly): The description provided by the access review creator to be shown to reviewers.
* **displayName**: string (WriteOnly): The display name for the schedule definition.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instances**: [AccessReviewInstance](#accessreviewinstance)[] (WriteOnly): This is the collection of instances returned when one does an expand on it.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessReviewScheduleDefinitionProperties](#accessreviewscheduledefinitionproperties) (ReadOnly): Access Review properties.
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly): This is the collection of reviewers.
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' | string (ReadOnly, WriteOnly): This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
* **scope**: [AccessReviewScope](#accessreviewscope) (ReadOnly, WriteOnly): This is used to define what to include in scope of the review. The scope definition includes the resourceId and roleDefinitionId.
* **settings**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (WriteOnly): Access Review Settings.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' | string (ReadOnly, WriteOnly): This read-only field specifies the status of an accessReview.
* **type**: 'Microsoft.Authorization/accessReviewScheduleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/accessReviewScheduleSettings@2021-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **autoApplyDecisionsEnabled**: bool (WriteOnly): Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' | string (WriteOnly): This specifies the behavior for the autoReview feature when an access review completes.
* **defaultDecisionEnabled**: bool (WriteOnly): Flag to indicate whether reviewers are required to provide a justification when reviewing access.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instanceDurationInDays**: int (WriteOnly): The duration in days for an instance.
* **justificationRequiredOnApproval**: bool (WriteOnly): Flag to indicate whether the reviewer is required to pass justification when recording a decision.
* **mailNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending mails to reviewers and the review creator is enabled.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (ReadOnly): Access Review properties.
* **recommendationsEnabled**: bool (WriteOnly): Flag to indicate whether showing recommendations to reviewers is enabled.
* **recurrence**: [AccessReviewRecurrenceSettings](#accessreviewrecurrencesettings) (WriteOnly): Access Review Settings.
* **reminderNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending reminder emails to reviewers are enabled.
* **type**: 'Microsoft.Authorization/accessReviewScheduleSettings' (ReadOnly, DeployTimeConstant): The resource type

## AccessReviewActorIdentity
### Properties
* **principalId**: string (ReadOnly): The identity id
* **principalName**: string (ReadOnly): The identity display name
* **principalType**: 'servicePrincipal' | 'user' | string (ReadOnly): The identity type : user/servicePrincipal
* **userPrincipalName**: string (ReadOnly): The user principal name(if valid)

## AccessReviewInstance
### Properties
* **id**: string (ReadOnly): The access review instance id.
* **name**: string (ReadOnly): The access review instance name.
* **properties**: [AccessReviewInstanceProperties](#accessreviewinstanceproperties): Access Review properties.
* **type**: string (ReadOnly): The resource type.

## AccessReviewInstanceProperties
### Properties
* **endDateTime**: string: The DateTime when the review instance is scheduled to end.
* **startDateTime**: string: The DateTime when the review instance is scheduled to be start.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' | string (ReadOnly): This read-only field specifies the status of an access review instance.

## AccessReviewRecurrencePattern
### Properties
* **interval**: int: The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
* **type**: 'absoluteMonthly' | 'weekly' | string: The recurrence type : weekly, monthly, etc.

## AccessReviewRecurrenceRange
### Properties
* **endDate**: string: The DateTime when the review is scheduled to end. Required if type is endDate
* **numberOfOccurrences**: int: The number of times to repeat the access review. Required and must be positive if type is numbered.
* **startDate**: string: The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
* **type**: 'endDate' | 'noEnd' | 'numbered' | string: The recurrence range type. The possible values are: endDate, noEnd, numbered.

## AccessReviewRecurrenceSettings
### Properties
* **pattern**: [AccessReviewRecurrencePattern](#accessreviewrecurrencepattern): Access Review schedule definition recurrence pattern.
* **range**: [AccessReviewRecurrenceRange](#accessreviewrecurrencerange): Access Review schedule definition recurrence range.

## AccessReviewReviewer
### Properties
* **principalId**: string: The id of the reviewer(user/servicePrincipal)
* **principalType**: 'servicePrincipal' | 'user' | string (ReadOnly): The identity type : user/servicePrincipal

## AccessReviewScheduleDefinitionProperties
### Properties
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[]: This is the collection of backup reviewers.
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly): The user or other identity who created this review.
* **descriptionForAdmins**: string: The description provided by the access review creator and visible to admins.
* **descriptionForReviewers**: string: The description provided by the access review creator to be shown to reviewers.
* **displayName**: string: The display name for the schedule definition.
* **instances**: [AccessReviewInstance](#accessreviewinstance)[]: This is the collection of instances returned when one does an expand on it.
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[]: This is the collection of reviewers.
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' | string (ReadOnly): This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
* **scope**: [AccessReviewScope](#accessreviewscope) (ReadOnly): This is used to define what to include in scope of the review. The scope definition includes the resourceId and roleDefinitionId.
* **settings**: [AccessReviewScheduleSettings](#accessreviewschedulesettings): Access Review Settings.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' | string (ReadOnly): This read-only field specifies the status of an accessReview.

## AccessReviewScheduleSettings
### Properties
* **autoApplyDecisionsEnabled**: bool: Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' | string: This specifies the behavior for the autoReview feature when an access review completes.
* **defaultDecisionEnabled**: bool: Flag to indicate whether reviewers are required to provide a justification when reviewing access.
* **instanceDurationInDays**: int: The duration in days for an instance.
* **justificationRequiredOnApproval**: bool: Flag to indicate whether the reviewer is required to pass justification when recording a decision.
* **mailNotificationsEnabled**: bool: Flag to indicate whether sending mails to reviewers and the review creator is enabled.
* **recommendationsEnabled**: bool: Flag to indicate whether showing recommendations to reviewers is enabled.
* **recurrence**: [AccessReviewRecurrenceSettings](#accessreviewrecurrencesettings): Access Review Settings.
* **reminderNotificationsEnabled**: bool: Flag to indicate whether sending reminder emails to reviewers are enabled.

## AccessReviewScope
### Properties
* **assignmentState**: 'active' | 'eligible' | string (ReadOnly): The role assignment state eligible/active to review
* **inactiveDuration**: string: Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
* **principalType**: 'guestUser' | 'servicePrincipal' | 'user' | string (ReadOnly): The identity type user/servicePrincipal to review
* **resourceId**: string (ReadOnly): ResourceId in which this review is getting created
* **roleDefinitionId**: string (ReadOnly): This is used to indicate the role being reviewed

