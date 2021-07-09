# Microsoft.Authorization @ 2021-03-01-preview

## Resource Microsoft.Authorization/accessReviewScheduleDefinitions@2021-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly)
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly, WriteOnly)
* **descriptionForAdmins**: string (WriteOnly)
* **descriptionForReviewers**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instances**: [AccessReviewInstance](#accessreviewinstance)[] (WriteOnly)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessReviewScheduleDefinitionProperties](#accessreviewscheduledefinitionproperties) (ReadOnly): Access Review.
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly)
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' (ReadOnly, WriteOnly)
* **scope**: [AccessReviewScope](#accessreviewscope) (ReadOnly, WriteOnly)
* **settings**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (WriteOnly)
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly, WriteOnly)
* **type**: 'Microsoft.Authorization/accessReviewScheduleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/accessReviewScheduleSettings@2021-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **autoApplyDecisionsEnabled**: bool (WriteOnly)
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' (WriteOnly)
* **defaultDecisionEnabled**: bool (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instanceDurationInDays**: int (WriteOnly)
* **justificationRequiredOnApproval**: bool (WriteOnly)
* **mailNotificationsEnabled**: bool (WriteOnly)
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (ReadOnly): Settings of an Access Review.
* **recommendationsEnabled**: bool (WriteOnly)
* **recurrence**: [AccessReviewRecurrenceSettings](#accessreviewrecurrencesettings) (WriteOnly)
* **reminderNotificationsEnabled**: bool (WriteOnly)
* **type**: 'Microsoft.Authorization/accessReviewScheduleSettings' (ReadOnly, DeployTimeConstant): The resource type

## AccessReviewReviewer
### Properties
* **principalId**: string (WriteOnly)
* **principalType**: 'servicePrincipal' | 'user' (ReadOnly, WriteOnly)

## AccessReviewActorIdentity
### Properties
* **principalId**: string (ReadOnly, WriteOnly)
* **principalName**: string (ReadOnly, WriteOnly)
* **principalType**: 'servicePrincipal' | 'user' (ReadOnly, WriteOnly)
* **userPrincipalName**: string (ReadOnly, WriteOnly)

## AccessReviewInstance
### Properties
* **id**: string (ReadOnly, WriteOnly)
* **name**: string (ReadOnly, WriteOnly)
* **properties**: [AccessReviewInstanceProperties](#accessreviewinstanceproperties) (WriteOnly)
* **type**: string (ReadOnly, WriteOnly)

## AccessReviewInstanceProperties
### Properties
* **endDateTime**: string (WriteOnly)
* **startDateTime**: string (WriteOnly)
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly, WriteOnly)

## AccessReviewScheduleDefinitionProperties
### Properties
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (ReadOnly): This is the collection of backup reviewers.
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly): Details of the actor identity
* **descriptionForAdmins**: string (ReadOnly): The description provided by the access review creator and visible to admins.
* **descriptionForReviewers**: string (ReadOnly): The description provided by the access review creator to be shown to reviewers.
* **displayName**: string (ReadOnly): The display name for the schedule definition.
* **instances**: [AccessReviewInstance](#accessreviewinstance)[] (ReadOnly): This is the collection of instances returned when one does an expand on it.
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (ReadOnly): This is the collection of reviewers.
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' (ReadOnly): This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
* **scope**: [AccessReviewScope](#accessreviewscope) (ReadOnly): Descriptor for what needs to be reviewed
* **settings**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (ReadOnly): Settings of an Access Review.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly): This read-only field specifies the status of an accessReview.

## AccessReviewScope
### Properties
* **assignmentState**: 'active' | 'eligible' (ReadOnly, WriteOnly)
* **inactiveDuration**: string (WriteOnly)
* **principalType**: 'guestUser' | 'servicePrincipal' | 'user' (ReadOnly, WriteOnly)
* **resourceId**: string (ReadOnly, WriteOnly)
* **roleDefinitionId**: string (ReadOnly, WriteOnly)

## AccessReviewScheduleSettings
### Properties
* **autoApplyDecisionsEnabled**: bool (WriteOnly)
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' (WriteOnly)
* **defaultDecisionEnabled**: bool (WriteOnly)
* **instanceDurationInDays**: int (WriteOnly)
* **justificationRequiredOnApproval**: bool (WriteOnly)
* **mailNotificationsEnabled**: bool (WriteOnly)
* **recommendationsEnabled**: bool (WriteOnly)
* **recurrence**: [AccessReviewRecurrenceSettings](#accessreviewrecurrencesettings) (WriteOnly)
* **reminderNotificationsEnabled**: bool (WriteOnly)

## AccessReviewRecurrenceSettings
### Properties
* **pattern**: [AccessReviewRecurrencePattern](#accessreviewrecurrencepattern) (WriteOnly)
* **range**: [AccessReviewRecurrenceRange](#accessreviewrecurrencerange) (WriteOnly)

## AccessReviewRecurrencePattern
### Properties
* **interval**: int (WriteOnly)
* **type**: 'absoluteMonthly' | 'weekly' (WriteOnly)

## AccessReviewRecurrenceRange
### Properties
* **endDate**: string (WriteOnly)
* **numberOfOccurrences**: int (WriteOnly)
* **startDate**: string (WriteOnly)
* **type**: 'endDate' | 'noEnd' | 'numbered' (WriteOnly)

