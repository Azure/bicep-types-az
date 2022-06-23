# Microsoft.Authorization @ 2021-01-01-preview

## Resource Microsoft.Authorization/roleAssignmentApprovals@2021-01-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentApprovalProperties](#roleassignmentapprovalproperties) (ReadOnly): Role Assignment Approval properties.
* **type**: 'Microsoft.Authorization/roleAssignmentApprovals' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleAssignmentApprovals/stages@2021-01-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **assignedToMe**: bool (ReadOnly, WriteOnly): Indicates whether the stage is assigned to me for review
* **displayName**: string (WriteOnly): The display name for the approval stage.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **justification**: string (WriteOnly): Justification provided by approvers for their action
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignmentApprovalStepProperties](#roleassignmentapprovalstepproperties) (ReadOnly): Role Assignment Approval Step properties.
* **reviewedBy**: [RoleAssignmentApprovalActorIdentity](#roleassignmentapprovalactoridentity) (ReadOnly, WriteOnly): Details of the approver.
* **reviewedDateTime**: string (ReadOnly, WriteOnly): Date Time when a decision was taken.
* **reviewResult**: 'Approve' | 'Deny' | 'NotReviewed' | string (WriteOnly): The decision on the approval stage. This value is initially set to NotReviewed. Approvers can take action of Approve/Deny
* **status**: 'Completed' | 'Completing' | 'Escalated' | 'Escalating' | 'Expired' | 'InProgress' | 'Initializing' | 'NotStarted' | string (ReadOnly, WriteOnly): This read-only field specifies the status of an approval.
* **type**: 'Microsoft.Authorization/roleAssignmentApprovals/stages' (ReadOnly, DeployTimeConstant): The resource type

## RoleAssignmentApprovalActorIdentity
### Properties
* **principalId**: string (ReadOnly): The identity id
* **principalName**: string (ReadOnly): The identity display name
* **principalType**: 'servicePrincipal' | 'user' | string (ReadOnly): The identity type : user/servicePrincipal
* **userPrincipalName**: string (ReadOnly): The user principal name(if valid)

## RoleAssignmentApprovalProperties
### Properties
* **stages**: [RoleAssignmentApprovalStep](#roleassignmentapprovalstep)[]: This is the collection of stages returned when one does an expand on it.

## RoleAssignmentApprovalStep
### Properties
* **id**: string (ReadOnly): The role assignment approval stage id.
* **name**: string (ReadOnly): The role assignment approval stage name.
* **properties**: [RoleAssignmentApprovalStepProperties](#roleassignmentapprovalstepproperties): Role Assignment Approval Step properties.
* **type**: string (ReadOnly): The resource type.

## RoleAssignmentApprovalStepProperties
### Properties
* **assignedToMe**: bool (ReadOnly): Indicates whether the stage is assigned to me for review
* **displayName**: string: The display name for the approval stage.
* **justification**: string: Justification provided by approvers for their action
* **reviewedBy**: [RoleAssignmentApprovalActorIdentity](#roleassignmentapprovalactoridentity) (ReadOnly): Details of the approver.
* **reviewedDateTime**: string (ReadOnly): Date Time when a decision was taken.
* **reviewResult**: 'Approve' | 'Deny' | 'NotReviewed' | string: The decision on the approval stage. This value is initially set to NotReviewed. Approvers can take action of Approve/Deny
* **status**: 'Completed' | 'Completing' | 'Escalated' | 'Escalating' | 'Expired' | 'InProgress' | 'Initializing' | 'NotStarted' | string (ReadOnly): This read-only field specifies the status of an approval.

