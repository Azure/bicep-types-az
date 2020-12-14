# Microsoft.Authorization @ 2018-05-01-preview

## Resource Microsoft.Authorization/accessReviewScheduleDefinitions@2018-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant)
* **createdBy**: AccessReviewActorIdentity (ReadOnly, WriteOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **descriptionForAdmins**: string (WriteOnly)
* **descriptionForReviewers**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **instances**: AccessReviewInstance[] (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccessReviewScheduleDefinitionProperties (ReadOnly)
* **reviewers**: AccessReviewReviewer[] (WriteOnly)
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' (ReadOnly, WriteOnly)
* **scope**: AccessReviewScope (ReadOnly, WriteOnly)
* **settings**: AccessReviewScheduleSettings (WriteOnly)
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'Initializing' | 'InProgress' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly, WriteOnly)
* **type**: 'Microsoft.Authorization/accessReviewScheduleDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/accessReviewScheduleSettings@2018-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant)
* **autoApplyDecisionsEnabled**: bool (WriteOnly)
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' (WriteOnly)
* **defaultDecisionEnabled**: bool (WriteOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **instanceDurationInDays**: int (WriteOnly)
* **justificationRequiredOnApproval**: bool (WriteOnly)
* **mailNotificationsEnabled**: bool (WriteOnly)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: AccessReviewScheduleSettings (ReadOnly)
* **recommendationsEnabled**: bool (WriteOnly)
* **recurrence**: AccessReviewRecurrenceSettings (WriteOnly)
* **reminderNotificationsEnabled**: bool (WriteOnly)
* **type**: 'Microsoft.Authorization/accessReviewScheduleSettings' (ReadOnly, DeployTimeConstant)

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
* **properties**: AccessReviewInstanceProperties (WriteOnly)
* **type**: string (ReadOnly, WriteOnly)

## AccessReviewInstanceProperties
### Properties
* **endDateTime**: string (WriteOnly)
* **startDateTime**: string (WriteOnly)
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'Initializing' | 'InProgress' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly, WriteOnly)

## AccessReviewScheduleDefinitionProperties
### Properties
* **createdBy**: AccessReviewActorIdentity (ReadOnly)
* **descriptionForAdmins**: string (ReadOnly)
* **descriptionForReviewers**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **instances**: AccessReviewInstance[] (ReadOnly)
* **reviewers**: AccessReviewReviewer[] (ReadOnly)
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' (ReadOnly)
* **scope**: AccessReviewScope (ReadOnly)
* **settings**: AccessReviewScheduleSettings (ReadOnly)
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'Initializing' | 'InProgress' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly)

## AccessReviewReviewer
### Properties
* **principalId**: string (WriteOnly)
* **principalType**: 'servicePrincipal' | 'user' (ReadOnly, WriteOnly)

## AccessReviewScope
### Properties
* **principalType**: 'servicePrincipal' | 'user' (ReadOnly, WriteOnly)
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
* **recurrence**: AccessReviewRecurrenceSettings (WriteOnly)
* **reminderNotificationsEnabled**: bool (WriteOnly)

## AccessReviewRecurrenceSettings
### Properties
* **pattern**: AccessReviewRecurrencePattern (WriteOnly)
* **range**: AccessReviewRecurrenceRange (WriteOnly)

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

