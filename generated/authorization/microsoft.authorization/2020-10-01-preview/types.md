# Microsoft.Authorization @ 2020-10-01-preview

## Resource Microsoft.Authorization/roleAssignmentScheduleRequests@2020-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoleAssignmentScheduleRequestProperties](#roleassignmentschedulerequestproperties)
* **type**: 'Microsoft.Authorization/roleAssignmentScheduleRequests' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/roleEligibilityScheduleRequests@2020-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoleEligibilityScheduleRequestProperties](#roleeligibilityschedulerequestproperties)
* **type**: 'Microsoft.Authorization/roleEligibilityScheduleRequests' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/roleManagementPolicies@2020-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoleManagementPolicyProperties](#rolemanagementpolicyproperties)
* **type**: 'Microsoft.Authorization/roleManagementPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/roleManagementPolicyAssignments@2020-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoleManagementPolicyAssignmentProperties](#rolemanagementpolicyassignmentproperties)
* **type**: 'Microsoft.Authorization/roleManagementPolicyAssignments' (ReadOnly, DeployTimeConstant)

## RoleAssignmentScheduleRequestProperties
### Properties
* **approvalId**: string (ReadOnly)
* **condition**: string
* **conditionVersion**: string
* **createdOn**: string (ReadOnly)
* **justification**: string
* **linkedRoleEligibilityScheduleId**: string
* **principalId**: string (Required)
* **principalType**: 'Group' | 'ServicePrincipal' | 'User' (ReadOnly)
* **requestorId**: string (ReadOnly)
* **requestType**: 'AdminAssign' | 'AdminExtend' | 'AdminRemove' | 'AdminRenew' | 'AdminUpdate' | 'SelfActivate' | 'SelfDeactivate' | 'SelfExtend' | 'SelfRenew' (Required)
* **roleDefinitionId**: string (Required)
* **scheduleInfo**: [RoleAssignmentScheduleRequestPropertiesScheduleInfo](#roleassignmentschedulerequestpropertiesscheduleinfo)
* **scope**: string (ReadOnly)
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' (ReadOnly)
* **targetRoleAssignmentScheduleId**: string
* **targetRoleAssignmentScheduleInstanceId**: string
* **ticketInfo**: [RoleAssignmentScheduleRequestPropertiesTicketInfo](#roleassignmentschedulerequestpropertiesticketinfo)

## RoleAssignmentScheduleRequestPropertiesScheduleInfo
### Properties
* **expiration**: [RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration](#roleassignmentschedulerequestpropertiesscheduleinfoexpiration)
* **startDateTime**: string

## RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration
### Properties
* **duration**: string
* **endDateTime**: string
* **type**: 'AfterDateTime' | 'AfterDuration' | 'NoExpiration'

## RoleAssignmentScheduleRequestPropertiesTicketInfo
### Properties
* **ticketNumber**: string
* **ticketSystem**: string

## RoleEligibilityScheduleRequestProperties
### Properties
* **approvalId**: string (ReadOnly)
* **condition**: string
* **conditionVersion**: string
* **createdOn**: string (ReadOnly)
* **justification**: string
* **principalId**: string (Required)
* **principalType**: 'Group' | 'ServicePrincipal' | 'User' (ReadOnly)
* **requestorId**: string (ReadOnly)
* **requestType**: 'AdminAssign' | 'AdminExtend' | 'AdminRemove' | 'AdminRenew' | 'AdminUpdate' | 'SelfActivate' | 'SelfDeactivate' | 'SelfExtend' | 'SelfRenew' (Required)
* **roleDefinitionId**: string (Required)
* **scheduleInfo**: [RoleEligibilityScheduleRequestPropertiesScheduleInfo](#roleeligibilityschedulerequestpropertiesscheduleinfo)
* **scope**: string (ReadOnly)
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' (ReadOnly)
* **targetRoleEligibilityScheduleId**: string
* **targetRoleEligibilityScheduleInstanceId**: string
* **ticketInfo**: [RoleEligibilityScheduleRequestPropertiesTicketInfo](#roleeligibilityschedulerequestpropertiesticketinfo)

## RoleEligibilityScheduleRequestPropertiesScheduleInfo
### Properties
* **expiration**: [RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration](#roleeligibilityschedulerequestpropertiesscheduleinfoexpiration)
* **startDateTime**: string

## RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration
### Properties
* **duration**: string
* **endDateTime**: string
* **type**: 'AfterDateTime' | 'AfterDuration' | 'NoExpiration'

## RoleEligibilityScheduleRequestPropertiesTicketInfo
### Properties
* **ticketNumber**: string
* **ticketSystem**: string

## RoleManagementPolicyProperties
### Properties
* **description**: string
* **displayName**: string
* **effectiveRules**: [RoleManagementPolicyRule](#rolemanagementpolicyrule)[] (ReadOnly)
* **isOrganizationDefault**: bool
* **lastUpdatedDateTime**: string (ReadOnly)
* **rules**: [RoleManagementPolicyRule](#rolemanagementpolicyrule)[]
* **scope**: string

## RoleManagementPolicyRule
* **Discriminator**: ruleType

### Base Properties
* **id**: string
* **target**: [RoleManagementPolicyRuleTarget](#rolemanagementpolicyruletarget)
### RoleManagementPolicyApprovalRule
#### Properties
* **ruleType**: 'RoleManagementPolicyApprovalRule' (Required)
* **setting**: [ApprovalSettings](#approvalsettings)

### RoleManagementPolicyAuthenticationContextRule
#### Properties
* **claimValue**: string
* **isEnabled**: bool
* **ruleType**: 'RoleManagementPolicyAuthenticationContextRule' (Required)

### RoleManagementPolicyEnablementRule
#### Properties
* **enabledRules**: string[]
* **ruleType**: 'RoleManagementPolicyEnablementRule' (Required)

### RoleManagementPolicyExpirationRule
#### Properties
* **isExpirationRequired**: bool
* **maximumDuration**: string
* **ruleType**: 'RoleManagementPolicyExpirationRule' (Required)

### RoleManagementPolicyNotificationRule
#### Properties
* **notificationLevel**: 'ALL' | 'CRITICAL' | 'NONE'
* **notificationRecipients**: string[]
* **notificationType**: 'Email'
* **recipientType**: 'Admin' | 'Approver' | 'Requestor'
* **ruleType**: 'RoleManagementPolicyNotificationRule' (Required)


## RoleManagementPolicyRuleTarget
### Properties
* **caller**: string
* **enforcedSettings**: string[]
* **inheritableSettings**: string[]
* **level**: string
* **operations**: string[]
* **targetObjects**: string[]

## RoleManagementPolicyApprovalRule
### Properties
* **ruleType**: 'RoleManagementPolicyApprovalRule' (Required)
* **setting**: [ApprovalSettings](#approvalsettings)

## ApprovalSettings
### Properties
* **approvalMode**: 'NoApproval' | 'Parallel' | 'Serial' | 'SingleStage'
* **approvalStages**: [ApprovalStage](#approvalstage)[]
* **isApprovalRequired**: bool
* **isApprovalRequiredForExtension**: bool
* **isRequestorJustificationRequired**: bool

## ApprovalStage
### Properties
* **approvalStageTimeOutInDays**: int
* **escalationApprovers**: [UserSet](#userset)[]
* **escalationTimeInMinutes**: int
* **isApproverJustificationRequired**: bool
* **isEscalationEnabled**: bool
* **primaryApprovers**: [UserSet](#userset)[]

## UserSet
* **Discriminator**: userType

### Base Properties
* **isBackup**: bool
### SingleUser
#### Properties
* **description**: string
* **id**: string
* **userType**: 'SingleUser' (Required)


## SingleUser
### Properties
* **description**: string
* **id**: string
* **userType**: 'SingleUser' (Required)

## RoleManagementPolicyAuthenticationContextRule
### Properties
* **claimValue**: string
* **isEnabled**: bool
* **ruleType**: 'RoleManagementPolicyAuthenticationContextRule' (Required)

## RoleManagementPolicyEnablementRule
### Properties
* **enabledRules**: string[]
* **ruleType**: 'RoleManagementPolicyEnablementRule' (Required)

## RoleManagementPolicyExpirationRule
### Properties
* **isExpirationRequired**: bool
* **maximumDuration**: string
* **ruleType**: 'RoleManagementPolicyExpirationRule' (Required)

## RoleManagementPolicyNotificationRule
### Properties
* **notificationLevel**: 'ALL' | 'CRITICAL' | 'NONE'
* **notificationRecipients**: string[]
* **notificationType**: 'Email'
* **recipientType**: 'Admin' | 'Approver' | 'Requestor'
* **ruleType**: 'RoleManagementPolicyNotificationRule' (Required)

## RoleManagementPolicyAssignmentProperties
### Properties
* **policyId**: string
* **roleDefinitionId**: string
* **scope**: string

