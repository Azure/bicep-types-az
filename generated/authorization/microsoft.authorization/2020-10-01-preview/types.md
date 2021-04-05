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
* **expandedProperties**: [ExpandedProperties](#expandedproperties) (ReadOnly):
* **justification**: string: Justification for the role assignment
* **linkedRoleEligibilityScheduleId**: string: The linked role eligibility schedule id - to activate an eligibility.
* **principalId**: string (Required): The principal ID.
* **principalType**: 'Group' | 'ServicePrincipal' | 'User' (ReadOnly): The principal type of the assigned principal ID.
* **requestorId**: string (ReadOnly): Id of the user who created this request
* **requestType**: 'AdminAssign' | 'AdminExtend' | 'AdminRemove' | 'AdminRenew' | 'AdminUpdate' | 'SelfActivate' | 'SelfDeactivate' | 'SelfExtend' | 'SelfRenew' (Required): The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc.
* **roleDefinitionId**: string (Required): The role definition ID.
* **scheduleInfo**: [schemas:15_scheduleInfo](#schemas15scheduleinfo): Schedule info of the role assignment schedule
* **scope**: string (ReadOnly): The role assignment schedule request scope.
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' (ReadOnly): The status of the role assignment schedule request.
* **targetRoleAssignmentScheduleId**: string: The resultant role assignment schedule id or the role assignment schedule id being updated
* **targetRoleAssignmentScheduleInstanceId**: string: The role assignment schedule instance id being updated
* **ticketInfo**: [schemas:15_ticketInfo](#schemas15ticketinfo): Ticket Info of the role assignment

## ExpandedProperties
### Properties
* **principal**: [schemas:6_principal](#schemas6principal): Details of the principal
* **roleDefinition**: [schemas:6_roleDefinition](#schemas6roledefinition): Details of role definition
* **scope**: [schemas:6_scope](#schemas6scope): Details of the resource scope

## schemas:6_principal
### Properties
* **displayName**: string: Display name of the principal
* **email**: string: Email id of the principal
* **id**: string: Id of the principal
* **type**: string: Type of the principal

## schemas:6_roleDefinition
### Properties
* **displayName**: string: Display name of the role definition
* **id**: string: Id of the role definition
* **type**: string: Type of the role definition

## schemas:6_scope
### Properties
* **displayName**: string: Display name of the resource
* **id**: string: Scope id of the resource
* **type**: string: Type of the resource

## schemas:15_scheduleInfo
### Properties
* **expiration**: [schemas:15_scheduleInfo_expiration](#schemas15scheduleinfoexpiration): Expiration of the role assignment schedule
* **startDateTime**: string: Start DateTime of the role assignment schedule.

## schemas:15_scheduleInfo_expiration
### Properties
* **duration**: string: Duration of the role assignment schedule in TimeSpan.
* **endDateTime**: string: End DateTime of the role assignment schedule.
* **type**: 'AfterDateTime' | 'AfterDuration' | 'NoExpiration': Type of the role assignment schedule expiration.

## schemas:15_ticketInfo
### Properties
* **ticketNumber**: string: Ticket number for the role assignment
* **ticketSystem**: string: Ticket system name for the role assignment

## RoleEligibilityScheduleRequestProperties
### Properties
* **approvalId**: string (ReadOnly): The approvalId of the role eligibility schedule request.
* **condition**: string: The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
* **conditionVersion**: string: Version of the condition. Currently accepted value is '2.0'
* **createdOn**: string (ReadOnly): DateTime when role eligibility schedule request was created
* **expandedProperties**: [ExpandedProperties](#expandedproperties) (ReadOnly):
* **justification**: string: Justification for the role eligibility
* **principalId**: string (Required): The principal ID.
* **principalType**: 'Group' | 'ServicePrincipal' | 'User' (ReadOnly): The principal type of the assigned principal ID.
* **requestorId**: string (ReadOnly): Id of the user who created this request
* **requestType**: 'AdminAssign' | 'AdminExtend' | 'AdminRemove' | 'AdminRenew' | 'AdminUpdate' | 'SelfActivate' | 'SelfDeactivate' | 'SelfExtend' | 'SelfRenew' (Required): The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc.
* **roleDefinitionId**: string (Required): The role definition ID.
* **scheduleInfo**: [schemas:36_scheduleInfo](#schemas36scheduleinfo): Schedule info of the role eligibility schedule
* **scope**: string (ReadOnly): The role eligibility schedule request scope.
* **status**: 'Accepted' | 'AdminApproved' | 'AdminDenied' | 'Canceled' | 'Denied' | 'Failed' | 'FailedAsResourceIsLocked' | 'Granted' | 'Invalid' | 'PendingAdminDecision' | 'PendingApproval' | 'PendingApprovalProvisioning' | 'PendingEvaluation' | 'PendingExternalProvisioning' | 'PendingProvisioning' | 'PendingRevocation' | 'PendingScheduleCreation' | 'Provisioned' | 'ProvisioningStarted' | 'Revoked' | 'ScheduleCreated' | 'TimedOut' (ReadOnly): The status of the role eligibility schedule request.
* **targetRoleEligibilityScheduleId**: string: The resultant role eligibility schedule id or the role eligibility schedule id being updated
* **targetRoleEligibilityScheduleInstanceId**: string: The role eligibility schedule instance id being updated
* **ticketInfo**: [schemas:36_ticketInfo](#schemas36ticketinfo): Ticket Info of the role eligibility

## schemas:36_scheduleInfo
### Properties
* **expiration**: [schemas:36_scheduleInfo_expiration](#schemas36scheduleinfoexpiration): Expiration of the role eligibility schedule
* **startDateTime**: string: Start DateTime of the role eligibility schedule.

## schemas:36_scheduleInfo_expiration
### Properties
* **duration**: string: Duration of the role eligibility schedule in TimeSpan.
* **endDateTime**: string: End DateTime of the role eligibility schedule.
* **type**: 'AfterDateTime' | 'AfterDuration' | 'NoExpiration': Type of the role eligibility schedule expiration.

## schemas:36_ticketInfo
### Properties
* **ticketNumber**: string: Ticket number for the role eligibility
* **ticketSystem**: string: Ticket system name for the role eligibility

## RoleManagementPolicyAssignmentProperties
### Properties
* **policyAssignmentProperties**: [PolicyAssignmentProperties](#policyassignmentproperties) (ReadOnly):
* **policyId**: string: The policy id role management policy assignment.
* **roleDefinitionId**: string: The role definition of management policy assignment.
* **scope**: string: The role management policy scope.

## PolicyAssignmentProperties
### Properties
* **policy**: [schemas:63_policy](#schemas63policy): Details of the policy
* **roleDefinition**: [schemas:6_roleDefinition](#schemas6roledefinition): Details of role definition
* **scope**: [schemas:6_scope](#schemas6scope): Details of the resource scope

## schemas:63_policy
### Properties
* **id**: string: Id of the policy
* **lastModifiedBy**: [Principal](#principal): The name of the entity last modified it
* **lastModifiedDateTime**: string: The last modified date time.

## Principal
### Properties
* **displayName**: string: The name of the principal made changes
* **email**: string: Email of principal
* **id**: string: The id of the principal made changes
* **type**: string: Type of principal such as user , group etc

