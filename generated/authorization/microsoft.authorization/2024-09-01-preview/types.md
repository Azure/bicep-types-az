# Microsoft.Authorization @ 2024-09-01-preview

## Resource Microsoft.Authorization/roleAssignmentScheduleInstances@2024-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentScheduleInstanceProperties](#roleassignmentscheduleinstanceproperties) (ReadOnly): Role assignment schedule instance properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleAssignmentScheduleInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleAssignmentScheduleRequests@2024-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentScheduleRequestProperties](#roleassignmentschedulerequestproperties): Role assignment schedule request properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleAssignmentScheduleRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleAssignmentSchedules@2024-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentScheduleProperties](#roleassignmentscheduleproperties) (ReadOnly): Role assignment schedule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleAssignmentSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleEligibilityScheduleInstances@2024-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleEligibilityScheduleInstanceProperties](#roleeligibilityscheduleinstanceproperties) (ReadOnly): Role eligibility schedule instance properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleEligibilityScheduleInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleEligibilityScheduleRequests@2024-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleEligibilityScheduleRequestProperties](#roleeligibilityschedulerequestproperties): Role eligibility schedule request properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleEligibilityScheduleRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleEligibilitySchedules@2024-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleEligibilityScheduleProperties](#roleeligibilityscheduleproperties) (ReadOnly): role eligibility schedule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleEligibilitySchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleManagementPolicies@2024-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleManagementPolicyProperties](#rolemanagementpolicyproperties) (ReadOnly): Role management policy properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleManagementPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleManagementPolicyAssignments@2024-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleManagementPolicyAssignmentProperties](#rolemanagementpolicyassignmentproperties): Role management policy properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
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

## MicrosoftCommonPrincipal
### Properties
* **displayName**: string: The name of the principal made changes
* **email**: string: Email of principal
* **id**: string: The id of the principal made changes
* **type**: string: Type of principal such as user , group etc

## PIMOnlyModeSettings
### Properties
* **excludedAssignmentTypes**: ('ServicePrincipalsAsRequestor' | 'ServicePrincipalsAsTarget' | string)[]: The list of excluded assignment types allowed.
* **excludes**: [UsersOrServicePrincipalSet](#usersorserviceprincipalset)[]: The list of excluded entities that the rule does not apply to.
* **mode**: 'Disabled' | 'Enabled' | 'ReportOnly' | string: Determines whether the setting is enabled, disabled or report only.

## PolicyAssignmentProperties
### Properties
* **policy**: [PolicyAssignmentPropertiesPolicy](#policyassignmentpropertiespolicy): Details of the policy
* **roleDefinition**: [PolicyAssignmentPropertiesRoleDefinition](#policyassignmentpropertiesroledefinition): Details of role definition
* **scope**: [PolicyAssignmentPropertiesScope](#policyassignmentpropertiesscope): Details of the resource scope

## PolicyAssignmentPropertiesPolicy
### Properties
* **id**: string: Id of the policy
* **lastModifiedBy**: [MicrosoftCommonPrincipal](#microsoftcommonprincipal) (ReadOnly): The name of the entity last modified it
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

## PolicyProperties
### Properties
* **scope**: [PolicyPropertiesScope](#policypropertiesscope) (ReadOnly): Details of the resource scope

## PolicyPropertiesScope
### Properties
* **displayName**: string: Display name of the resource
* **id**: string: Scope id of the resource
* **type**: string: Type of the resource

## RoleAssignmentScheduleInstanceProperties
### Properties
* **assignmentType**: 'Activated' | 'Assigned' | string: Assignment type of the role assignment schedule
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdOn**: string: DateTime when role assignment schedule was created
* **endDateTime**: string: The endDateTime of the role assignment schedule instance
* **expandedProperties**: [ExpandedProperties](#expandedproperties): Additional properties of principal, scope and role definition
* **linkedRoleEligibilityScheduleId**: string: roleEligibilityScheduleId used to activate
* **linkedRoleEligibilityScheduleInstanceId**: string: roleEligibilityScheduleInstanceId linked to this roleAssignmentScheduleInstance
* **memberType**: 'Direct' | 'Group' | 'Inherited' | string: Membership type of the role assignment schedule
* **originRoleAssignmentId**: string: Role Assignment Id in external system
* **principalId**: string: The principal ID.
* **principalType**: 'Device' | 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string: The principal type of the assigned principal ID.
* **roleAssignmentScheduleId**: string: Id of the master role assignment schedule
* **roleDefinitionId**: string: The role definition ID.
* **scope**: string: The role assignment schedule scope.
* **startDateTime**: string: The startDateTime of the role assignment schedule instance
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' | string: The status of the role assignment schedule instance.

## RoleAssignmentScheduleProperties
### Properties
* **assignmentType**: 'Activated' | 'Assigned' | string: Assignment type of the role assignment schedule
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdOn**: string: DateTime when role assignment schedule was created
* **endDateTime**: string: End DateTime when role assignment schedule
* **expandedProperties**: [ExpandedProperties](#expandedproperties): Additional properties of principal, scope and role definition
* **linkedRoleEligibilityScheduleId**: string: The id of roleEligibilitySchedule used to activated this roleAssignmentSchedule
* **memberType**: 'Direct' | 'Group' | 'Inherited' | string: Membership type of the role assignment schedule
* **principalId**: string: The principal ID.
* **principalType**: 'Device' | 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string: The principal type of the assigned principal ID.
* **roleAssignmentScheduleRequestId**: string: The id of roleAssignmentScheduleRequest used to create this roleAssignmentSchedule
* **roleDefinitionId**: string: The role definition ID.
* **scope**: string: The role assignment schedule scope.
* **startDateTime**: string: Start DateTime when role assignment schedule
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' | string: The status of the role assignment schedule.
* **updatedOn**: string: DateTime when role assignment schedule was modified

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

## RoleEligibilityScheduleInstanceProperties
### Properties
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdOn**: string: DateTime when role eligibility schedule was created
* **endDateTime**: string: The endDateTime of the role eligibility schedule instance
* **expandedProperties**: [ExpandedProperties](#expandedproperties): Additional properties of principal, scope and role definition
* **memberType**: 'Direct' | 'Group' | 'Inherited' | string: Membership type of the role eligibility schedule
* **principalId**: string: The principal ID.
* **principalType**: 'Device' | 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string: The principal type of the assigned principal ID.
* **roleDefinitionId**: string: The role definition ID.
* **roleEligibilityScheduleId**: string: Id of the master role eligibility schedule
* **scope**: string: The role eligibility schedule scope.
* **startDateTime**: string: The startDateTime of the role eligibility schedule instance
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' | string: The status of the role eligibility schedule instance

## RoleEligibilityScheduleProperties
### Properties
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdOn**: string: DateTime when role eligibility schedule was created
* **endDateTime**: string: End DateTime when role eligibility schedule
* **expandedProperties**: [ExpandedProperties](#expandedproperties): Additional properties of principal, scope and role definition
* **memberType**: 'Direct' | 'Group' | 'Inherited' | string: Membership type of the role eligibility schedule
* **principalId**: string: The principal ID.
* **principalType**: 'Device' | 'ForeignGroup' | 'Group' | 'ServicePrincipal' | 'User' | string: The principal type of the assigned principal ID.
* **roleDefinitionId**: string: The role definition ID.
* **roleEligibilityScheduleRequestId**: string: The id of roleEligibilityScheduleRequest used to create this roleAssignmentSchedule
* **scope**: string: The role eligibility schedule scope.
* **startDateTime**: string: Start DateTime when role eligibility schedule
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' | string: The status of the role eligibility schedule.
* **updatedOn**: string: DateTime when role eligibility schedule was modified

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

## RoleManagementPolicyProperties
### Properties
* **description**: string: The role management policy description.
* **displayName**: string: The role management policy display name.
* **effectiveRules**: [RoleManagementPolicyRule](#rolemanagementpolicyrule)[] (ReadOnly): The readonly computed rule applied to the policy.
* **isOrganizationDefault**: bool: The role management policy is default policy.
* **lastModifiedBy**: [MicrosoftCommonPrincipal](#microsoftcommonprincipal) (ReadOnly): The name of the entity last modified it
* **lastModifiedDateTime**: string (ReadOnly): The last modified date time.
* **policyProperties**: [PolicyProperties](#policyproperties) (ReadOnly): Additional properties of scope
* **rules**: [RoleManagementPolicyRule](#rolemanagementpolicyrule)[]: The rule applied to the policy.
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
* **enabledRules**: ('Justification' | 'MultiFactorAuthentication' | 'Ticketing' | string)[]: The list of enabled rules.
* **ruleType**: 'RoleManagementPolicyEnablementRule' (Required): The type of rule

### RoleManagementPolicyExpirationRule
#### Properties
* **exceptionMembers**: [UserSet](#userset)[]: The members not restricted by expiration rule.
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

### RoleManagementPolicyPimOnlyModeRule
#### Properties
* **pimOnlyModeSettings**: [PIMOnlyModeSettings](#pimonlymodesettings): The PIM Only Mode settings
* **ruleType**: 'RoleManagementPolicyPimOnlyModeRule' (Required): The type of rule


## RoleManagementPolicyRuleTarget
### Properties
* **caller**: string: The caller of the setting.
* **enforcedSettings**: string[]: The list of enforced settings.
* **inheritableSettings**: string[]: The list of inheritable settings.
* **level**: string: The assignment level to which rule is applied.
* **operations**: string[]: The type of operation.
* **targetObjects**: string[]: The list of target objects.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserSet
### Properties
* **description**: string: The description of the user.
* **id**: string: The object id of the user.
* **isBackup**: bool: The value indicating whether the user is a backup fallback approver
* **userType**: 'Group' | 'User' | string: The type of user.

## UsersOrServicePrincipalSet
### Properties
* **displayName**: string: The display Name of the entity.
* **id**: string: The object id of the entity.
* **type**: 'Group' | 'ServicePrincipal' | 'User' | string: The type of user.

