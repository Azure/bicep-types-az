# Microsoft.Authorization @ 2020-10-01

## Resource Microsoft.Authorization/roleAssignmentScheduleRequests@2020-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentScheduleRequestProperties](#roleassignmentschedulerequestproperties): Role assignment schedule request properties.
* **type**: 'Microsoft.Authorization/roleAssignmentScheduleRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleEligibilityScheduleRequests@2020-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleEligibilityScheduleRequestProperties](#roleeligibilityschedulerequestproperties): Role eligibility schedule request properties.
* **type**: 'Microsoft.Authorization/roleEligibilityScheduleRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleManagementPolicyAssignments@2020-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleManagementPolicyAssignmentProperties](#rolemanagementpolicyassignmentproperties): Role management policy properties.
* **type**: 'Microsoft.Authorization/roleManagementPolicyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## ApprovalSettings
### Properties
* **approvalMode**: 'NoApproval' | 'Parallel' | 'Serial' | 'SingleStage' | string: The type of rule
* **approvalStages**: [ApprovalStage](#approvalstage)[]: The approval stages of the request.
* **isApprovalRequired**: bool: Determines whether approval is required or not.
* **isApprovalRequiredForExtension**: bool: Determines whether approval is required for assignment extension.
* **isRequestorJustificationRequired**: bool: Determine whether requestor justification is required.

## ApprovalStage
### Properties
* **approvalStageTimeOutInDays**: int: The time in days when approval request would be timed out
* **escalationApprovers**: [UserSet](#userset)[]: The escalation approver of the request.
* **escalationTimeInMinutes**: int: The time in minutes when the approval request would be escalated if the primary approver does not approve
* **isApproverJustificationRequired**: bool: Determines whether approver need to provide justification for his decision.
* **isEscalationEnabled**: bool: The value determine whether escalation feature is enabled.
* **primaryApprovers**: [UserSet](#userset)[]: The primary approver of the request.

## ExpandedProperties
### Properties
* **principal**: [ExpandedPropertiesPrincipal](#expandedpropertiesprincipal): Details of the principal
* **roleDefinition**: [ExpandedPropertiesRoleDefinition](#expandedpropertiesroledefinition): Details of role definition
* **scope**: [ExpandedPropertiesScope](#expandedpropertiesscope): Details of the resource scope

## ExpandedPropertiesPrincipal
### Properties
* **displayName**: string: Display name of the principal
* **email**: string: Email id of the principal
* **id**: string: Id of the principal
* **type**: string: Type of the principal

## ExpandedPropertiesRoleDefinition
### Properties
* **displayName**: string: Display name of the role definition
* **id**: string: Id of the role definition
* **type**: string: Type of the role definition

## ExpandedPropertiesScope
### Properties
* **displayName**: string: Display name of the resource
* **id**: string: Scope id of the resource
* **type**: string: Type of the resource

## PolicyAssignmentProperties
### Properties
* **policy**: [PolicyAssignmentPropertiesPolicy](#policyassignmentpropertiespolicy): Details of the policy
* **roleDefinition**: [PolicyAssignmentPropertiesRoleDefinition](#policyassignmentpropertiesroledefinition): Details of role definition
* **scope**: [PolicyAssignmentPropertiesScope](#policyassignmentpropertiesscope): Details of the resource scope

## PolicyAssignmentPropertiesPolicy
### Properties
* **id**: string: Id of the policy
* **lastModifiedBy**: [Principal](#principal) (ReadOnly): The name of the entity last modified it
* **lastModifiedDateTime**: string: The last modified date time.

## PolicyAssignmentPropertiesRoleDefinition
### Properties
* **displayName**: string: Display name of the role definition
* **id**: string: Id of the role definition
* **type**: string: Type of the role definition

## PolicyAssignmentPropertiesScope
### Properties
* **displayName**: string: Display name of the resource
* **id**: string: Scope id of the resource
* **type**: string: Type of the resource

## Principal
### Properties
* **displayName**: string: The name of the principal made changes
* **email**: string: Email of principal
* **id**: string: The id of the principal made changes
* **type**: string: Type of principal such as user , group etc

## RoleAssignmentScheduleRequestProperties
### Properties
* **approvalId**: string (ReadOnly): The approvalId of the role assignment schedule request.
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdOn**: string (ReadOnly): DateTime when role assignment schedule request was created
* **expandedProperties**: [ExpandedProperties](#expandedproperties) (ReadOnly): Additional properties of principal, scope and role definition
* **justification**: string: Justification for the role assignment
* **linkedRoleEligibilityScheduleId**: string: The linked role eligibility schedule id - to activate an eligibility.
* **principalId**: string (Required): The principal ID.
* **principalType**: 'Device' | 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string (ReadOnly): The principal type of the assigned principal ID.
* **requestorId**: string (ReadOnly): Id of the user who created this request
* **requestType**: 'AdminAssign' | 'AdminExtend' | 'AdminRemove' | 'AdminRenew' | 'AdminUpdate' | 'SelfActivate' | 'SelfDeactivate' | 'SelfExtend' | 'SelfRenew' | string (Required): The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc
* **roleDefinitionId**: string (Required): The role definition ID.
* **scheduleInfo**: [RoleAssignmentScheduleRequestPropertiesScheduleInfo](#roleassignmentschedulerequestpropertiesscheduleinfo): Schedule info of the role assignment schedule
* **scope**: string (ReadOnly): The role assignment schedule request scope.
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' | string (ReadOnly): The status of the role assignment schedule request.
* **targetRoleAssignmentScheduleId**: string: The resultant role assignment schedule id or the role assignment schedule id being updated
* **targetRoleAssignmentScheduleInstanceId**: string: The role assignment schedule instance id being updated
* **ticketInfo**: [RoleAssignmentScheduleRequestPropertiesTicketInfo](#roleassignmentschedulerequestpropertiesticketinfo): Ticket Info of the role assignment

## RoleAssignmentScheduleRequestPropertiesScheduleInfo
### Properties
* **expiration**: [RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration](#roleassignmentschedulerequestpropertiesscheduleinfoexpiration): Expiration of the role assignment schedule
* **startDateTime**: string: Start DateTime of the role assignment schedule.

## RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration
### Properties
* **duration**: string: Duration of the role assignment schedule in TimeSpan.
* **endDateTime**: string: End DateTime of the role assignment schedule.
* **type**: 'AfterDateTime' | 'AfterDuration' | 'NoExpiration' | string: Type of the role assignment schedule expiration

## RoleAssignmentScheduleRequestPropertiesTicketInfo
### Properties
* **ticketNumber**: string: Ticket number for the role assignment
* **ticketSystem**: string: Ticket system name for the role assignment

## RoleEligibilityScheduleRequestProperties
### Properties
* **approvalId**: string (ReadOnly): The approvalId of the role eligibility schedule request.
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdOn**: string (ReadOnly): DateTime when role eligibility schedule request was created
* **expandedProperties**: [ExpandedProperties](#expandedproperties) (ReadOnly): Additional properties of principal, scope and role definition
* **justification**: string: Justification for the role eligibility
* **principalId**: string (Required): The principal ID.
* **principalType**: 'Device' | 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string (ReadOnly): The principal type of the assigned principal ID.
* **requestorId**: string (ReadOnly): Id of the user who created this request
* **requestType**: 'AdminAssign' | 'AdminExtend' | 'AdminRemove' | 'AdminRenew' | 'AdminUpdate' | 'SelfActivate' | 'SelfDeactivate' | 'SelfExtend' | 'SelfRenew' | string (Required): The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc
* **roleDefinitionId**: string (Required): The role definition ID.
* **scheduleInfo**: [RoleEligibilityScheduleRequestPropertiesScheduleInfo](#roleeligibilityschedulerequestpropertiesscheduleinfo): Schedule info of the role eligibility schedule
* **scope**: string (ReadOnly): The role eligibility schedule request scope.
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' | string (ReadOnly): The status of the role eligibility schedule request.
* **targetRoleEligibilityScheduleId**: string: The resultant role eligibility schedule id or the role eligibility schedule id being updated
* **targetRoleEligibilityScheduleInstanceId**: string: The role eligibility schedule instance id being updated
* **ticketInfo**: [RoleEligibilityScheduleRequestPropertiesTicketInfo](#roleeligibilityschedulerequestpropertiesticketinfo): Ticket Info of the role eligibility

## RoleEligibilityScheduleRequestPropertiesScheduleInfo
### Properties
* **expiration**: [RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration](#roleeligibilityschedulerequestpropertiesscheduleinfoexpiration): Expiration of the role eligibility schedule
* **startDateTime**: string: Start DateTime of the role eligibility schedule.

## RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration
### Properties
* **duration**: string: Duration of the role eligibility schedule in TimeSpan.
* **endDateTime**: string: End DateTime of the role eligibility schedule.
* **type**: 'AfterDateTime' | 'AfterDuration' | 'NoExpiration' | string: Type of the role eligibility schedule expiration

## RoleEligibilityScheduleRequestPropertiesTicketInfo
### Properties
* **ticketNumber**: string: Ticket number for the role eligibility
* **ticketSystem**: string: Ticket system name for the role eligibility

## RoleManagementPolicyAssignmentProperties
### Properties
* **effectiveRules**: [RoleManagementPolicyRule](#rolemanagementpolicyrule)[] (ReadOnly): The readonly computed rule applied to the policy.
* **policyAssignmentProperties**: [PolicyAssignmentProperties](#policyassignmentproperties) (ReadOnly): Additional properties of scope, role definition and policy
* **policyId**: string: The policy id role management policy assignment.
* **roleDefinitionId**: string: The role definition of management policy assignment.
* **scope**: string: The role management policy scope.

## RoleManagementPolicyRule
* **Discriminator**: ruleType

### Base Properties
* **id**: string: The id of the rule.
* **target**: [RoleManagementPolicyRuleTarget](#rolemanagementpolicyruletarget): The target of the current rule.
### RoleManagementPolicyApprovalRule
#### Properties
* **ruleType**: 'RoleManagementPolicyApprovalRule' (Required): The type of rule
* **setting**: [ApprovalSettings](#approvalsettings): The approval setting

### RoleManagementPolicyAuthenticationContextRule
#### Properties
* **claimValue**: string: The claim value.
* **isEnabled**: bool: The value indicating if rule is enabled.
* **ruleType**: 'RoleManagementPolicyAuthenticationContextRule' (Required): The type of rule

### RoleManagementPolicyEnablementRule
#### Properties
* **enabledRules**: 'Justification' | 'MultiFactorAuthentication' | 'Ticketing' | string[]: The list of enabled rules.
* **ruleType**: 'RoleManagementPolicyEnablementRule' (Required): The type of rule

### RoleManagementPolicyExpirationRule
#### Properties
* **isExpirationRequired**: bool: The value indicating whether expiration is required.
* **maximumDuration**: string: The maximum duration of expiration in timespan.
* **ruleType**: 'RoleManagementPolicyExpirationRule' (Required): The type of rule

### RoleManagementPolicyNotificationRule
#### Properties
* **isDefaultRecipientsEnabled**: bool: Determines if the notification will be sent to the recipient type specified in the policy rule.
* **notificationLevel**: 'All' | 'Critical' | 'None' | string: The notification level.
* **notificationRecipients**: string[]: The list of notification recipients.
* **notificationType**: 'Email' | string: The type of notification.
* **recipientType**: 'Admin' | 'Approver' | 'Requestor' | string: The recipient type.
* **ruleType**: 'RoleManagementPolicyNotificationRule' (Required): The type of rule


## RoleManagementPolicyRuleTarget
### Properties
* **caller**: string: The caller of the setting.
* **enforcedSettings**: string[]: The list of enforced settings.
* **inheritableSettings**: string[]: The list of inheritable settings.
* **level**: string: The assignment level to which rule is applied.
* **operations**: string[]: The type of operation.
* **targetObjects**: string[]: The list of target objects.

## UserSet
### Properties
* **description**: string: The description of the user.
* **id**: string: The object id of the user.
* **isBackup**: bool: The value indicating whether the user is a backup fallback approver
* **userType**: 'Group' | 'User' | string: The type of user.

