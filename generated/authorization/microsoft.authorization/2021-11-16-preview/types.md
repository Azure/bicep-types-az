# Microsoft.Authorization @ 2021-11-16-preview

## Resource Microsoft.Authorization/accessReviewHistoryDefinitions@2021-11-16-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-11-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly, WriteOnly): The user or other identity who created this history definition.
* **createdDateTime**: string (ReadOnly, WriteOnly): Date time when history definition was created
* **decisions**: 'Approve' | 'Deny' | 'DontKnow' | 'NotNotified' | 'NotReviewed' | string[] (WriteOnly): Collection of review decisions which the history data should be filtered on. For example if Approve and Deny are supplied the data will only contain review results in which the decision maker approved or denied a review request.
* **displayName**: string (WriteOnly): The display name for the history definition.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instances**: [AccessReviewHistoryInstance](#accessreviewhistoryinstance)[] (WriteOnly): Set of access review history instances for this history definition.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessReviewHistoryDefinitionProperties](#accessreviewhistorydefinitionproperties) (ReadOnly): Access Review History Definition properties.
* **reviewHistoryPeriodEndDateTime**: string (ReadOnly, WriteOnly): Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
* **reviewHistoryPeriodStartDateTime**: string (ReadOnly, WriteOnly): Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
* **scopes**: [AccessReviewScope](#accessreviewscope)[] (WriteOnly): A collection of scopes used when selecting review history data
* **settings**: [AccessReviewHistoryScheduleSettings](#accessreviewhistoryschedulesettings) (WriteOnly): Recurrence settings for recurring history reports, skip for one-time reports.
* **status**: 'Done' | 'Error' | 'InProgress' | 'Requested' | string (ReadOnly, WriteOnly): This read-only field specifies the of the requested review history data. This is either requested, in-progress, done or error.
* **type**: 'Microsoft.Authorization/accessReviewHistoryDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/accessReviewScheduleDefinitions@2021-11-16-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-11-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

## Resource Microsoft.Authorization/accessReviewScheduleDefinitions/instances@2021-11-16-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-11-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly): This is the collection of backup reviewers.
* **endDateTime**: string (WriteOnly): The DateTime when the review instance is scheduled to end.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessReviewInstanceProperties](#accessreviewinstanceproperties) (ReadOnly): Access Review properties.
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly): This is the collection of reviewers.
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' | string (ReadOnly, WriteOnly): This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
* **startDateTime**: string (WriteOnly): The DateTime when the review instance is scheduled to be start.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' | string (ReadOnly, WriteOnly): This read-only field specifies the status of an access review instance.
* **type**: 'Microsoft.Authorization/accessReviewScheduleDefinitions/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/accessReviewScheduleSettings@2021-11-16-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-11-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **autoApplyDecisionsEnabled**: bool (WriteOnly): Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' | string (WriteOnly): This specifies the behavior for the autoReview feature when an access review completes.
* **defaultDecisionEnabled**: bool (WriteOnly): Flag to indicate whether reviewers are required to provide a justification when reviewing access.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instanceDurationInDays**: int (WriteOnly): The duration in days for an instance.
* **justificationRequiredOnApproval**: bool (WriteOnly): Flag to indicate whether the reviewer is required to pass justification when recording a decision.
* **mailNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending mails to reviewers and the review creator is enabled.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (ReadOnly): Access Review properties.
* **recommendationLookBackDuration**: string (WriteOnly): Recommendations for access reviews are calculated by looking back at 30 days of data(w.r.t the start date of the review) by default. However, in some scenarios, customers want to change how far back to look at and want to configure 60 days, 90 days, etc. instead. This setting allows customers to configure this duration. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
* **recommendationsEnabled**: bool (WriteOnly): Flag to indicate whether showing recommendations to reviewers is enabled.
* **recurrence**: [AccessReviewRecurrenceSettings](#accessreviewrecurrencesettings) (WriteOnly): Access Review Settings.
* **reminderNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending reminder emails to reviewers are enabled.
* **type**: 'Microsoft.Authorization/accessReviewScheduleSettings' (ReadOnly, DeployTimeConstant): The resource type

## AccessReviewActorIdentity
### Properties
* **principalId**: string (ReadOnly, WriteOnly): The identity id
* **principalName**: string (ReadOnly, WriteOnly): The identity display name
* **principalType**: 'servicePrincipal' | 'user' | string (ReadOnly, WriteOnly): The identity type : user/servicePrincipal
* **userPrincipalName**: string (ReadOnly, WriteOnly): The user principal name(if valid)

## AccessReviewHistoryDefinitionProperties
### Properties
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly): The user or other identity who created this history definition.
* **createdDateTime**: string (ReadOnly): Date time when history definition was created
* **decisions**: 'Approve' | 'Deny' | 'DontKnow' | 'NotNotified' | 'NotReviewed' | string[] (ReadOnly): Collection of review decisions which the history data should be filtered on. For example if Approve and Deny are supplied the data will only contain review results in which the decision maker approved or denied a review request.
* **displayName**: string (ReadOnly): The display name for the history definition.
* **instances**: [AccessReviewHistoryInstance](#accessreviewhistoryinstance)[] (ReadOnly): Set of access review history instances for this history definition.
* **reviewHistoryPeriodEndDateTime**: string (ReadOnly): Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
* **reviewHistoryPeriodStartDateTime**: string (ReadOnly): Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
* **scopes**: [AccessReviewScope](#accessreviewscope)[] (ReadOnly): A collection of scopes used when selecting review history data
* **settings**: [AccessReviewHistoryScheduleSettings](#accessreviewhistoryschedulesettings) (ReadOnly): Recurrence settings for recurring history reports, skip for one-time reports.
* **status**: 'Done' | 'Error' | 'InProgress' | 'Requested' | string (ReadOnly): This read-only field specifies the of the requested review history data. This is either requested, in-progress, done or error.

## AccessReviewHistoryInstance
### Properties
* **id**: string (ReadOnly, WriteOnly): The access review history definition instance id.
* **name**: string (ReadOnly, WriteOnly): The access review history definition instance unique id.
* **properties**: [AccessReviewHistoryInstanceProperties](#accessreviewhistoryinstanceproperties) (WriteOnly): Access Review History Definition Instance properties.
* **type**: string (ReadOnly, WriteOnly): The resource type.

## AccessReviewHistoryInstanceProperties
### Properties
* **displayName**: string (WriteOnly): The display name for the parent history definition.
* **downloadUri**: string (ReadOnly, WriteOnly): Uri which can be used to retrieve review history data. To generate this Uri, generateDownloadUri() must be called for a specific accessReviewHistoryDefinitionInstance. The link expires after a 24 hour period. Callers can see the expiration date time by looking at the 'se' parameter in the generated uri.
* **expiration**: string (WriteOnly): Date time when history data report expires and the associated data is deleted.
* **fulfilledDateTime**: string (WriteOnly): Date time when the history data report is scheduled to be generated.
* **reviewHistoryPeriodEndDateTime**: string (WriteOnly): Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
* **reviewHistoryPeriodStartDateTime**: string (WriteOnly): Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
* **runDateTime**: string (WriteOnly): Date time when the history data report is scheduled to be generated.
* **status**: 'Done' | 'Error' | 'InProgress' | 'Requested' | string (ReadOnly, WriteOnly): Status of the requested review history instance data. This is either requested, in-progress, done or error. The state transitions are as follows - Requested -> InProgress -> Done -> Expired

## AccessReviewHistoryScheduleSettings
### Properties
* **pattern**: [AccessReviewRecurrencePattern](#accessreviewrecurrencepattern) (WriteOnly): Access Review History Definition recurrence settings.
* **range**: [AccessReviewRecurrenceRange](#accessreviewrecurrencerange) (WriteOnly): Access Review History Definition recurrence settings.

## AccessReviewInstance
### Properties
* **id**: string (ReadOnly, WriteOnly): The access review instance id.
* **name**: string (ReadOnly, WriteOnly): The access review instance name.
* **properties**: [AccessReviewInstanceProperties](#accessreviewinstanceproperties) (WriteOnly): Access Review properties.
* **type**: string (ReadOnly, WriteOnly): The resource type.

## AccessReviewInstanceProperties
### Properties
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly): This is the collection of backup reviewers.
* **endDateTime**: string (WriteOnly): The DateTime when the review instance is scheduled to end.
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly): This is the collection of reviewers.
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' | string (ReadOnly, WriteOnly): This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
* **startDateTime**: string (WriteOnly): The DateTime when the review instance is scheduled to be start.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' | string (ReadOnly, WriteOnly): This read-only field specifies the status of an access review instance.

## AccessReviewRecurrencePattern
### Properties
* **interval**: int (WriteOnly): The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
* **type**: 'absoluteMonthly' | 'weekly' | string (WriteOnly): The recurrence type : weekly, monthly, etc.

## AccessReviewRecurrenceRange
### Properties
* **endDate**: string (WriteOnly): The DateTime when the review is scheduled to end. Required if type is endDate
* **numberOfOccurrences**: int (WriteOnly): The number of times to repeat the access review. Required and must be positive if type is numbered.
* **startDate**: string (WriteOnly): The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
* **type**: 'endDate' | 'noEnd' | 'numbered' | string (WriteOnly): The recurrence range type. The possible values are: endDate, noEnd, numbered.

## AccessReviewRecurrenceSettings
### Properties
* **pattern**: [AccessReviewRecurrencePattern](#accessreviewrecurrencepattern) (WriteOnly): Access Review schedule definition recurrence pattern.
* **range**: [AccessReviewRecurrenceRange](#accessreviewrecurrencerange) (WriteOnly): Access Review schedule definition recurrence range.

## AccessReviewReviewer
### Properties
* **principalId**: string (WriteOnly): The id of the reviewer(user/servicePrincipal)
* **principalType**: 'servicePrincipal' | 'user' | string (ReadOnly, WriteOnly): The identity type : user/servicePrincipal

## AccessReviewScheduleDefinitionProperties
### Properties
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (ReadOnly): This is the collection of backup reviewers.
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly): The user or other identity who created this review.
* **descriptionForAdmins**: string (ReadOnly): The description provided by the access review creator and visible to admins.
* **descriptionForReviewers**: string (ReadOnly): The description provided by the access review creator to be shown to reviewers.
* **displayName**: string (ReadOnly): The display name for the schedule definition.
* **instances**: [AccessReviewInstance](#accessreviewinstance)[] (ReadOnly): This is the collection of instances returned when one does an expand on it.
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (ReadOnly): This is the collection of reviewers.
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' | string (ReadOnly): This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
* **scope**: [AccessReviewScope](#accessreviewscope) (ReadOnly): This is used to define what to include in scope of the review. The scope definition includes the resourceId and roleDefinitionId.
* **settings**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (ReadOnly): Access Review Settings.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' | string (ReadOnly): This read-only field specifies the status of an accessReview.

## AccessReviewScheduleSettings
### Properties
* **autoApplyDecisionsEnabled**: bool (WriteOnly): Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' | string (WriteOnly): This specifies the behavior for the autoReview feature when an access review completes.
* **defaultDecisionEnabled**: bool (WriteOnly): Flag to indicate whether reviewers are required to provide a justification when reviewing access.
* **instanceDurationInDays**: int (WriteOnly): The duration in days for an instance.
* **justificationRequiredOnApproval**: bool (WriteOnly): Flag to indicate whether the reviewer is required to pass justification when recording a decision.
* **mailNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending mails to reviewers and the review creator is enabled.
* **recommendationLookBackDuration**: string (WriteOnly): Recommendations for access reviews are calculated by looking back at 30 days of data(w.r.t the start date of the review) by default. However, in some scenarios, customers want to change how far back to look at and want to configure 60 days, 90 days, etc. instead. This setting allows customers to configure this duration. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
* **recommendationsEnabled**: bool (WriteOnly): Flag to indicate whether showing recommendations to reviewers is enabled.
* **recurrence**: [AccessReviewRecurrenceSettings](#accessreviewrecurrencesettings) (WriteOnly): Access Review Settings.
* **reminderNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending reminder emails to reviewers are enabled.

## AccessReviewScope
### Properties
* **assignmentState**: 'active' | 'eligible' | string (ReadOnly, WriteOnly): The role assignment state eligible/active to review
* **expandNestedMemberships**: bool (WriteOnly): Flag to indicate whether to expand nested memberships or not.
* **inactiveDuration**: string (WriteOnly): Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
* **principalType**: 'guestUser' | 'redeemedGuestUser' | 'servicePrincipal' | 'user' | 'user,group' | string (ReadOnly, WriteOnly): The identity type user/servicePrincipal to review
* **resourceId**: string (ReadOnly, WriteOnly): ResourceId in which this review is getting created
* **roleDefinitionId**: string (ReadOnly, WriteOnly): This is used to indicate the role being reviewed

