# Microsoft.Authorization @ 2021-03-01-preview

## Resource Microsoft.Authorization/accessReviewScheduleDefinitions@2021-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly)
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly, WriteOnly)
* **descriptionForAdmins**: string (WriteOnly)
* **descriptionForReviewers**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **instances**: [AccessReviewInstance](#accessreviewinstance)[] (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccessReviewScheduleDefinitionProperties](#accessreviewscheduledefinitionproperties) (ReadOnly)
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly)
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' (ReadOnly, WriteOnly)
* **scope**: [AccessReviewScope](#accessreviewscope) (ReadOnly, WriteOnly)
* **settings**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (WriteOnly)
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly, WriteOnly)
* **type**: 'Microsoft.Authorization/accessReviewScheduleDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/accessReviewScheduleSettings@2021-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **autoApplyDecisionsEnabled**: bool (WriteOnly)
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' (WriteOnly)
* **defaultDecisionEnabled**: bool (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **instanceDurationInDays**: int (WriteOnly)
* **justificationRequiredOnApproval**: bool (WriteOnly)
* **mailNotificationsEnabled**: bool (WriteOnly)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (ReadOnly)
* **recommendationsEnabled**: bool (WriteOnly)
* **recurrence**: [AccessReviewRecurrenceSettings](#accessreviewrecurrencesettings) (WriteOnly)
* **reminderNotificationsEnabled**: bool (WriteOnly)
* **type**: 'Microsoft.Authorization/accessReviewScheduleSettings' (ReadOnly, DeployTimeConstant)

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
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (ReadOnly)
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly)
* **descriptionForAdmins**: string (ReadOnly)
* **descriptionForReviewers**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **instances**: [AccessReviewInstance](#accessreviewinstance)[] (ReadOnly)
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (ReadOnly)
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' (ReadOnly)
* **scope**: [AccessReviewScope](#accessreviewscope) (ReadOnly)
* **settings**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (ReadOnly)
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly)

## AccessReviewScope
### Properties
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

