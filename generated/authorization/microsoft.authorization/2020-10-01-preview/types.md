# Microsoft.Authorization @ 2020-10-01-preview

## Resource Microsoft.Authorization/roleAssignmentScheduleRequests@2020-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentScheduleRequestProperties](#roleassignmentschedulerequestproperties): Role assignment schedule request properties with scope.
* **type**: 'Microsoft.Authorization/roleAssignmentScheduleRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleEligibilityScheduleRequests@2020-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleEligibilityScheduleRequestProperties](#roleeligibilityschedulerequestproperties): Role eligibility schedule request properties with scope.
* **type**: 'Microsoft.Authorization/roleEligibilityScheduleRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleManagementPolicies@2020-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleManagementPolicyProperties](#rolemanagementpolicyproperties): Role management policy properties with scope.
* **type**: 'Microsoft.Authorization/roleManagementPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleManagementPolicyAssignments@2020-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleManagementPolicyAssignmentProperties](#rolemanagementpolicyassignmentproperties): Role management policy assignment properties with scope.
* **type**: 'Microsoft.Authorization/roleManagementPolicyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## RoleAssignmentScheduleRequestProperties
### Properties
* **approvalId**: string (ReadOnly): The approvalId of the role assignment schedule request.
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdOn**: string (ReadOnly): DateTime when role assignment schedule request was created
* **justification**: string: Justification for the role assignment
* **linkedRoleEligibilityScheduleId**: string: The linked role eligibility schedule id - to activate an eligibility.
* **principalId**: string (Required): The principal ID.
* **principalType**: 'Group' | 'ServicePrincipal' | 'User' (ReadOnly): The principal type of the assigned principal ID.
* **requestorId**: string (ReadOnly): Id of the user who created this request
* **requestType**: 'AdminAssign' | 'AdminExtend' | 'AdminRemove' | 'AdminRenew' | 'AdminUpdate' | 'SelfActivate' | 'SelfDeactivate' | 'SelfExtend' | 'SelfRenew' (Required): The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc
* **roleDefinitionId**: string (Required): The role definition ID.
* **scheduleInfo**: [RoleAssignmentScheduleRequestPropertiesScheduleInfo](#roleassignmentschedulerequestpropertiesscheduleinfo): Schedule info of the role assignment schedule
* **scope**: string (ReadOnly): The role assignment schedule request scope.
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' (ReadOnly): The status of the role assignment schedule.
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
* **type**: 'AfterDateTime' | 'AfterDuration' | 'NoExpiration': Type of the role assignment schedule expiration

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
* **justification**: string: Justification for the role eligibility
* **principalId**: string (Required): The principal ID.
* **principalType**: 'Group' | 'ServicePrincipal' | 'User' (ReadOnly): The principal type of the assigned principal ID.
* **requestorId**: string (ReadOnly): Id of the user who created this request
* **requestType**: 'AdminAssign' | 'AdminExtend' | 'AdminRemove' | 'AdminRenew' | 'AdminUpdate' | 'SelfActivate' | 'SelfDeactivate' | 'SelfExtend' | 'SelfRenew' (Required): The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc
* **roleDefinitionId**: string (Required): The role definition ID.
* **scheduleInfo**: [RoleEligibilityScheduleRequestPropertiesScheduleInfo](#roleeligibilityschedulerequestpropertiesscheduleinfo): Schedule info of the role eligibility schedule
* **scope**: string (ReadOnly): The role eligibility schedule request scope.
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' (ReadOnly): The status of the role assignment schedule.
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
* **type**: 'AfterDateTime' | 'AfterDuration' | 'NoExpiration': Type of the role assignment schedule expiration

## RoleEligibilityScheduleRequestPropertiesTicketInfo
### Properties
* **ticketNumber**: string: Ticket number for the role eligibility
* **ticketSystem**: string: Ticket system name for the role eligibility

## RoleManagementPolicyProperties
### Properties
* **description**: string: The role management policy description.
* **displayName**: string: The role management policy display name.
* **effectiveRules**: [RoleManagementPolicyRule](#rolemanagementpolicyrule)[] (ReadOnly): The readonly computed rule applied to the policy.
* **isOrganizationDefault**: bool: The role management policy is default policy.
* **lastUpdatedDateTime**: string (ReadOnly): The last updated date time.
* **rules**: [RoleManagementPolicyRule](#rolemanagementpolicyrule)[]: The rule applied to the policy.
* **scope**: string: The role management policy scope.

## RoleManagementPolicyRule
* **Discriminator**: ruleType

### Base Properties
* **id**: string: The id of the rule.
* **target**: [RoleManagementPolicyRuleTarget](#rolemanagementpolicyruletarget): The role management policy rule target.
### RoleManagementPolicyApprovalRule
#### Properties
* **ruleType**: 'RoleManagementPolicyApprovalRule' (Required): The type of rule
* **setting**: [ApprovalSettings](#approvalsettings): The approval settings.

### RoleManagementPolicyAuthenticationContextRule
#### Properties
* **claimValue**: string: The claim value.
* **isEnabled**: bool: The value indicating if rule is enabled.
* **ruleType**: 'RoleManagementPolicyAuthenticationContextRule' (Required): The type of rule

### RoleManagementPolicyEnablementRule
#### Properties
* **enabledRules**: string[]: The list of enabled rules.
* **ruleType**: 'RoleManagementPolicyEnablementRule' (Required): The type of rule

### RoleManagementPolicyExpirationRule
#### Properties
* **isExpirationRequired**: bool: The value indicating whether expiration is required.
* **maximumDuration**: string: The maximum duration of expiration in timespan.
* **ruleType**: 'RoleManagementPolicyExpirationRule' (Required): The type of rule

### RoleManagementPolicyNotificationRule
#### Properties
* **notificationLevel**: 'ALL' | 'CRITICAL' | 'NONE': The notification level.
* **notificationRecipients**: string[]: The list notification recipients.
* **notificationType**: 'Email': The type of notification.
* **recipientType**: 'Admin' | 'Approver' | 'Requestor': The recipient type.
* **ruleType**: 'RoleManagementPolicyNotificationRule' (Required): The type of rule


## RoleManagementPolicyRuleTarget
### Properties
* **caller**: string: The caller of the setting.
* **enforcedSettings**: string[]: The list of enforced settings.
* **inheritableSettings**: string[]: The list of inheritable settings.
* **level**: string: The assignment level to which it is applied.
* **operations**: string[]: The type of operation.
* **targetObjects**: string[]: The list of target objects.

## RoleManagementPolicyApprovalRule
### Properties
* **ruleType**: 'RoleManagementPolicyApprovalRule' (Required): The type of rule
* **setting**: [ApprovalSettings](#approvalsettings): The approval settings.

## ApprovalSettings
### Properties
* **approvalMode**: 'NoApproval' | 'Parallel' | 'Serial' | 'SingleStage': The type of rule
* **approvalStages**: [ApprovalStage](#approvalstage)[]: The approval stages of the request.
* **isApprovalRequired**: bool: Determine whether approval is required or not.
* **isApprovalRequiredForExtension**: bool: Determine whether approval is required for assignment extension.
* **isRequestorJustificationRequired**: bool: Determine whether requestor justification required.

## ApprovalStage
### Properties
* **approvalStageTimeOutInDays**: int: The time in days when approval request would be timed out.
* **escalationApprovers**: [UserSet](#userset)[]: The escalation approver of the request.
* **escalationTimeInMinutes**: int: The time in minutes when the approval request would be escalated if the primary approver does not approves.
* **isApproverJustificationRequired**: bool: Determine whether approver need to provide justification for his decision.
* **isEscalationEnabled**: bool: The value determine whether escalation feature is enabled.
* **primaryApprovers**: [UserSet](#userset)[]: The primary approver of the request.

## UserSet
* **Discriminator**: userType

### Base Properties
* **isBackup**: bool: The value indicating whether the user is a backup fallback approver
### SingleUser
#### Properties
* **description**: string: The description of the user.
* **id**: string: The object id of the user.
* **userType**: 'SingleUser' (Required): The object id of the user.


## SingleUser
### Properties
* **description**: string: The description of the user.
* **id**: string: The object id of the user.
* **userType**: 'SingleUser' (Required): The object id of the user.

## RoleManagementPolicyAuthenticationContextRule
### Properties
* **claimValue**: string: The claim value.
* **isEnabled**: bool: The value indicating if rule is enabled.
* **ruleType**: 'RoleManagementPolicyAuthenticationContextRule' (Required): The type of rule

## RoleManagementPolicyEnablementRule
### Properties
* **enabledRules**: string[]: The list of enabled rules.
* **ruleType**: 'RoleManagementPolicyEnablementRule' (Required): The type of rule

## RoleManagementPolicyExpirationRule
### Properties
* **isExpirationRequired**: bool: The value indicating whether expiration is required.
* **maximumDuration**: string: The maximum duration of expiration in timespan.
* **ruleType**: 'RoleManagementPolicyExpirationRule' (Required): The type of rule

## RoleManagementPolicyNotificationRule
### Properties
* **notificationLevel**: 'ALL' | 'CRITICAL' | 'NONE': The notification level.
* **notificationRecipients**: string[]: The list notification recipients.
* **notificationType**: 'Email': The type of notification.
* **recipientType**: 'Admin' | 'Approver' | 'Requestor': The recipient type.
* **ruleType**: 'RoleManagementPolicyNotificationRule' (Required): The type of rule

## RoleManagementPolicyAssignmentProperties
### Properties
* **policyId**: string: The policy id role management policy assignment.
* **roleDefinitionId**: string: The role definition of management policy assignment.
* **scope**: string: The role management policy scope.

