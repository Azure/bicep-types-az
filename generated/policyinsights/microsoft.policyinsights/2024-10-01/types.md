# Microsoft.PolicyInsights @ 2024-10-01

## Resource Microsoft.PolicyInsights/attestations@2024-10-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttestationProperties](#attestationproperties) (Required): Properties for the attestation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PolicyInsights/attestations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PolicyInsights/policyMetadata@2024-10-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyMetadataProperties](#policymetadataproperties) (ReadOnly): Properties of the policy metadata.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PolicyInsights/policyMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PolicyInsights/remediations@2024-10-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemediationProperties](#remediationproperties): Properties for the remediation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PolicyInsights/remediations' (ReadOnly, DeployTimeConstant): The resource type

## Function cancel (Microsoft.PolicyInsights/remediations@2024-10-01)
* **Resource**: Microsoft.PolicyInsights/remediations
* **ApiVersion**: 2024-10-01
* **Output**: [Remediation](#remediation)

## Function listDeployments (Microsoft.PolicyInsights/remediations@2024-10-01)
* **Resource**: Microsoft.PolicyInsights/remediations
* **ApiVersion**: 2024-10-01
* **Output**: [RemediationDeploymentsListResult](#remediationdeploymentslistresult)

## Function queryResults (Microsoft.PolicyInsights/componentPolicyStates@2024-10-01)
* **Resource**: Microsoft.PolicyInsights/componentPolicyStates
* **ApiVersion**: 2024-10-01
* **Output**: [ComponentPolicyStatesQueryResults](#componentpolicystatesqueryresults)

## Function queryResults (Microsoft.PolicyInsights/policyEvents@2024-10-01)
* **Resource**: Microsoft.PolicyInsights/policyEvents
* **ApiVersion**: 2024-10-01
* **Output**: [PolicyEventsQueryResults](#policyeventsqueryresults)

## Function queryResults (Microsoft.PolicyInsights/policyStates@2024-10-01)
* **Resource**: Microsoft.PolicyInsights/policyStates
* **ApiVersion**: 2024-10-01
* **Output**: [PolicyStatesQueryResults](#policystatesqueryresults)

## Function summarize (Microsoft.PolicyInsights/policyStates@2024-10-01)
* **Resource**: Microsoft.PolicyInsights/policyStates
* **ApiVersion**: 2024-10-01
* **Output**: [SummarizeResults](#summarizeresults)

## AttestationEvidence
### Properties
* **description**: string: The description for this piece of evidence.
* **sourceUri**: string: The URI location of the evidence.

## AttestationProperties
### Properties
* **assessmentDate**: string: The time the evidence was assessed
* **comments**: string: Comments describing why this attestation was created.
* **complianceState**: 'Compliant' | 'NonCompliant' | 'Unknown' | string: The compliance state that should be set on the resource.
* **evidence**: [AttestationEvidence](#attestationevidence)[]: The evidence supporting the compliance state set in this attestation.
* **expiresOn**: string: The time the compliance state should expire.
* **lastComplianceStateChangeAt**: string (ReadOnly): The time the compliance state was last changed in this attestation.
* **metadata**: any: Additional metadata for this attestation
* **owner**: string: The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID.
* **policyAssignmentId**: string (Required): The resource ID of the policy assignment that the attestation is setting the state for.
* **policyDefinitionReferenceId**: string: The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition.
* **provisioningState**: string (ReadOnly): The status of the attestation.

## ComplianceDetail
### Properties
* **complianceState**: string: The compliance state.
* **count**: int: Summarized count value for this compliance state.

## ComponentEventDetails
### Properties
* **id**: string: Component Id.
* **name**: string: Component name.
* **policyDefinitionAction**: string: Policy definition action, i.e. effect.
* **principalOid**: string: Principal object ID for the user who initiated the resource component operation that triggered the policy event.
* **tenantId**: string: Tenant ID for the policy event record.
* **timestamp**: string: Timestamp for component policy event record.
* **type**: string: Component type.
### Additional Properties
* **Additional Properties Type**: any

## ComponentExpressionEvaluationDetails
### Properties
* **expression**: string (ReadOnly): Expression evaluated.
* **expressionKind**: string (ReadOnly): The kind of expression that was evaluated.
* **expressionValue**: any (ReadOnly): Value of the expression.
* **operator**: string (ReadOnly): Operator to compare the expression value and the target value.
* **path**: string (ReadOnly): Property path if the expression is a field or an alias.
* **result**: string: Evaluation result.
* **targetValue**: any (ReadOnly): Target value to be compared with the expression value.

## ComponentPolicyEvaluationDetails
### Properties
* **evaluatedExpressions**: [ComponentExpressionEvaluationDetails](#componentexpressionevaluationdetails)[] (ReadOnly): Details of the evaluated expressions.
* **reason**: string: Additional textual reason for the evaluation outcome.

## ComponentPolicyState
### Properties
* **@odata.context**: string (ReadOnly): OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.id**: string (ReadOnly): OData entity ID; always set to null since component policy state records do not have an entity ID.
* **complianceState**: string (ReadOnly): Compliance state of the resource.
* **componentId**: string (ReadOnly): Component Id.
* **componentName**: string (ReadOnly): Component name.
* **componentType**: string (ReadOnly): Component type.
* **policyAssignmentId**: string (ReadOnly): Policy assignment ID.
* **policyAssignmentName**: string (ReadOnly): Policy assignment name.
* **policyAssignmentOwner**: string (ReadOnly): Policy assignment owner.
* **policyAssignmentParameters**: string (ReadOnly): Policy assignment parameters.
* **policyAssignmentScope**: string (ReadOnly): Policy assignment scope.
* **policyAssignmentVersion**: string (ReadOnly): Evaluated policy assignment version.
* **policyDefinitionAction**: string (ReadOnly): Policy definition action, i.e. effect.
* **policyDefinitionCategory**: string (ReadOnly): Policy definition category.
* **policyDefinitionGroupNames**: string[] (ReadOnly): Policy definition group names.
* **policyDefinitionId**: string (ReadOnly): Policy definition ID.
* **policyDefinitionName**: string (ReadOnly): Policy definition name.
* **policyDefinitionReferenceId**: string (ReadOnly): Reference ID for the policy definition inside the policy set, if the policy assignment is for a policy set.
* **policyDefinitionVersion**: string (ReadOnly): Evaluated policy definition version.
* **policyEvaluationDetails**: [ComponentPolicyEvaluationDetails](#componentpolicyevaluationdetails): Policy evaluation details. This is only included in the response if the request contains $expand=PolicyEvaluationDetails.
* **policySetDefinitionCategory**: string (ReadOnly): Policy set definition category, if the policy assignment is for a policy set.
* **policySetDefinitionId**: string (ReadOnly): Policy set definition ID, if the policy assignment is for a policy set.
* **policySetDefinitionName**: string (ReadOnly): Policy set definition name, if the policy assignment is for a policy set.
* **policySetDefinitionOwner**: string (ReadOnly): Policy set definition owner, if the policy assignment is for a policy set.
* **policySetDefinitionParameters**: string (ReadOnly): Policy set definition parameters, if the policy assignment is for a policy set.
* **policySetDefinitionVersion**: string (ReadOnly): Evaluated policy set definition version.
* **resourceGroup**: string (ReadOnly): Resource group name.
* **resourceId**: string (ReadOnly): Resource ID.
* **resourceLocation**: string (ReadOnly): Resource location.
* **resourceType**: string (ReadOnly): Resource type.
* **subscriptionId**: string (ReadOnly): Subscription ID.
* **timestamp**: string (ReadOnly): Timestamp for the component policy state record.
### Additional Properties
* **Additional Properties Type**: any

## ComponentPolicyStatesQueryResults
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.count**: int {minValue: 0}: OData entity count; represents the number of policy state records returned.
* **value**: [ComponentPolicyState](#componentpolicystate)[]: Query results.

## ComponentStateDetails
### Properties
* **complianceState**: string: Component compliance state.
* **id**: string: Component Id.
* **name**: string: Component name.
* **timestamp**: string: Component compliance evaluation timestamp.
* **type**: string: Component type.
### Additional Properties
* **Additional Properties Type**: any

## ErrorDefinition
### Properties
* **additionalInfo**: [TypedErrorInfo](#typederrorinfo)[] (ReadOnly): Additional scenario specific error details.
* **code**: string (ReadOnly): Service specific error code which serves as the substatus for the HTTP error code.
* **details**: [ErrorDefinition](#errordefinition)[] (ReadOnly): Internal error details.
* **message**: string (ReadOnly): Description of the error.
* **target**: string (ReadOnly): The target of the error.

## ExpressionEvaluationDetails
### Properties
* **expression**: string: Expression evaluated.
* **expressionKind**: string (ReadOnly): The kind of expression that was evaluated.
* **expressionValue**: any: Value of the expression.
* **operator**: string: Operator to compare the expression value and the target value.
* **path**: string: Property path if the expression is a field or an alias.
* **result**: string: Evaluation result.
* **targetValue**: any: Target value to be compared with the expression value.

## IfNotExistsEvaluationDetails
### Properties
* **resourceId**: string: ID of the last evaluated resource for IfNotExists effect.
* **totalResources**: int: Total number of resources to which the existence condition is applicable.

## PolicyAssignmentSummary
### Properties
* **policyAssignmentId**: string: Policy assignment ID.
* **policyDefinitions**: [PolicyDefinitionSummary](#policydefinitionsummary)[]: Policy definitions summary.
* **policyGroups**: [PolicyGroupSummary](#policygroupsummary)[]: Policy definition group summary.
* **policySetDefinitionId**: string: Policy set definition ID, if the policy assignment is for a policy set.
* **results**: [SummaryResults](#summaryresults): Compliance summary for the policy assignment.

## PolicyDefinitionSummary
### Properties
* **effect**: string: Policy effect, i.e. policy definition action.
* **policyDefinitionGroupNames**: string[]: Policy definition group names.
* **policyDefinitionId**: string: Policy definition ID.
* **policyDefinitionReferenceId**: string: Policy definition reference ID.
* **results**: [SummaryResults](#summaryresults): Compliance summary for the policy definition.

## PolicyEvaluationDetails
### Properties
* **evaluatedExpressions**: [ExpressionEvaluationDetails](#expressionevaluationdetails)[]: Details of the evaluated expressions.
* **ifNotExistsDetails**: [IfNotExistsEvaluationDetails](#ifnotexistsevaluationdetails): Evaluation details of IfNotExists effect.

## PolicyEvent
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.id**: string: OData entity ID; always set to null since policy event records do not have an entity ID.
* **complianceState**: string: Compliance state of the resource.
* **components**: [ComponentEventDetails](#componenteventdetails)[]: Components events records populated only when URL contains $expand=components clause.
* **effectiveParameters**: string: Effective parameters for the policy assignment.
* **isCompliant**: bool: Flag which states whether the resource is compliant against the policy assignment it was evaluated against.
* **managementGroupIds**: string: Comma separated list of management group IDs, which represent the hierarchy of the management groups the resource is under.
* **policyAssignmentId**: string: Policy assignment ID.
* **policyAssignmentName**: string: Policy assignment name.
* **policyAssignmentOwner**: string: Policy assignment owner.
* **policyAssignmentParameters**: string: Policy assignment parameters.
* **policyAssignmentScope**: string: Policy assignment scope.
* **policyDefinitionAction**: string: Policy definition action, i.e. effect.
* **policyDefinitionCategory**: string: Policy definition category.
* **policyDefinitionId**: string: Policy definition ID.
* **policyDefinitionName**: string: Policy definition name.
* **policyDefinitionReferenceId**: string: Reference ID for the policy definition inside the policy set, if the policy assignment is for a policy set.
* **policySetDefinitionCategory**: string: Policy set definition category, if the policy assignment is for a policy set.
* **policySetDefinitionId**: string: Policy set definition ID, if the policy assignment is for a policy set.
* **policySetDefinitionName**: string: Policy set definition name, if the policy assignment is for a policy set.
* **policySetDefinitionOwner**: string: Policy set definition owner, if the policy assignment is for a policy set.
* **policySetDefinitionParameters**: string: Policy set definition parameters, if the policy assignment is for a policy set.
* **principalOid**: string: Principal object ID for the user who initiated the resource operation that triggered the policy event.
* **resourceGroup**: string: Resource group name.
* **resourceId**: string: Resource ID.
* **resourceLocation**: string: Resource location.
* **resourceTags**: string: List of resource tags.
* **resourceType**: string: Resource type.
* **subscriptionId**: string: Subscription ID.
* **tenantId**: string: Tenant ID for the policy event record.
* **timestamp**: string: Timestamp for the policy event record.
### Additional Properties
* **Additional Properties Type**: any

## PolicyEventsQueryResults
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.count**: int {minValue: 0}: OData entity count; represents the number of policy event records returned.
* **@odata.nextLink**: string: Odata next link; URL to get the next set of results.
* **value**: [PolicyEvent](#policyevent)[]: Query results.

## PolicyGroupSummary
### Properties
* **policyGroupName**: string: Policy group name.
* **results**: [SummaryResults](#summaryresults): Compliance summary for the policy definition group.

## PolicyMetadataProperties
### Properties
* **additionalContentUrl**: string (ReadOnly): Url for getting additional content about the resource metadata.
* **category**: string (ReadOnly): The category of the policy metadata.
* **description**: string (ReadOnly): The description of the policy metadata.
* **metadata**: any (ReadOnly): Additional metadata.
* **metadataId**: string (ReadOnly): The policy metadata identifier.
* **owner**: string (ReadOnly): The owner of the policy metadata.
* **requirements**: string (ReadOnly): The requirements of the policy metadata.
* **title**: string (ReadOnly): The title of the policy metadata.

## PolicyState
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.id**: string: OData entity ID; always set to null since policy state records do not have an entity ID.
* **complianceState**: string: Compliance state of the resource.
* **components**: [ComponentStateDetails](#componentstatedetails)[]: Components state compliance records populated only when URL contains $expand=components clause.
* **effectiveParameters**: string: Effective parameters for the policy assignment.
* **isCompliant**: bool: Flag which states whether the resource is compliant against the policy assignment it was evaluated against. This property is deprecated; please use ComplianceState instead.
* **managementGroupIds**: string: Comma separated list of management group IDs, which represent the hierarchy of the management groups the resource is under.
* **policyAssignmentId**: string: Policy assignment ID.
* **policyAssignmentName**: string: Policy assignment name.
* **policyAssignmentOwner**: string: Policy assignment owner.
* **policyAssignmentParameters**: string: Policy assignment parameters.
* **policyAssignmentScope**: string: Policy assignment scope.
* **policyAssignmentVersion**: string (ReadOnly): Evaluated policy assignment version.
* **policyDefinitionAction**: string: Policy definition action, i.e. effect.
* **policyDefinitionCategory**: string: Policy definition category.
* **policyDefinitionGroupNames**: string[]: Policy definition group names.
* **policyDefinitionId**: string: Policy definition ID.
* **policyDefinitionName**: string: Policy definition name.
* **policyDefinitionReferenceId**: string: Reference ID for the policy definition inside the policy set, if the policy assignment is for a policy set.
* **policyDefinitionVersion**: string (ReadOnly): Evaluated policy definition version.
* **policyEvaluationDetails**: [PolicyEvaluationDetails](#policyevaluationdetails): Policy evaluation details.
* **policySetDefinitionCategory**: string: Policy set definition category, if the policy assignment is for a policy set.
* **policySetDefinitionId**: string: Policy set definition ID, if the policy assignment is for a policy set.
* **policySetDefinitionName**: string: Policy set definition name, if the policy assignment is for a policy set.
* **policySetDefinitionOwner**: string: Policy set definition owner, if the policy assignment is for a policy set.
* **policySetDefinitionParameters**: string: Policy set definition parameters, if the policy assignment is for a policy set.
* **policySetDefinitionVersion**: string (ReadOnly): Evaluated policy set definition version.
* **resourceGroup**: string: Resource group name.
* **resourceId**: string: Resource ID.
* **resourceLocation**: string: Resource location.
* **resourceTags**: string: List of resource tags.
* **resourceType**: string: Resource type.
* **subscriptionId**: string: Subscription ID.
* **timestamp**: string: Timestamp for the policy state record.
### Additional Properties
* **Additional Properties Type**: any

## PolicyStatesQueryResults
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.count**: int {minValue: 0}: OData entity count; represents the number of policy state records returned.
* **@odata.nextLink**: string: Odata next link; URL to get the next set of results.
* **value**: [PolicyState](#policystate)[]: Query results.

## Remediation
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [RemediationProperties](#remediationproperties): Properties for the remediation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## RemediationDeployment
### Properties
* **createdOn**: string (ReadOnly): The time at which the remediation was created.
* **deploymentId**: string (ReadOnly): Resource ID of the template deployment that will remediate the resource.
* **error**: [ErrorDefinition](#errordefinition) (ReadOnly): Error encountered while remediated the resource.
* **lastUpdatedOn**: string (ReadOnly): The time at which the remediation deployment was last updated.
* **remediatedResourceId**: string (ReadOnly): Resource ID of the resource that is being remediated by the deployment.
* **resourceLocation**: string (ReadOnly): Location of the resource that is being remediated.
* **status**: string (ReadOnly): Status of the remediation deployment.

## RemediationDeploymentsListResult
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [RemediationDeployment](#remediationdeployment)[] (Required, ReadOnly): The RemediationDeployment items on this page

## RemediationDeploymentSummary
### Properties
* **failedDeployments**: int (ReadOnly): The number of deployments required by the remediation that have failed.
* **successfulDeployments**: int (ReadOnly): The number of deployments required by the remediation that have succeeded.
* **totalDeployments**: int (ReadOnly): The number of deployments required by the remediation.

## RemediationFilters
### Properties
* **locations**: string[]: The resource locations that will be remediated.
* **resourceIds**: string[]: The IDs of the resources that will be remediated. Can specify at most 100 IDs. This filter cannot be used when ReEvaluateCompliance is set to ReEvaluateCompliance, and cannot be empty if provided.

## RemediationProperties
### Properties
* **correlationId**: string (ReadOnly): The remediation correlation Id. Can be used to find events related to the remediation in the activity log.
* **createdOn**: string (ReadOnly): The time at which the remediation was created.
* **deploymentStatus**: [RemediationDeploymentSummary](#remediationdeploymentsummary) (ReadOnly): The deployment status summary for all deployments created by the remediation.
* **failureThreshold**: [RemediationPropertiesFailureThreshold](#remediationpropertiesfailurethreshold): The remediation failure threshold settings
* **filters**: [RemediationFilters](#remediationfilters): The filters that will be applied to determine which resources to remediate.
* **lastUpdatedOn**: string (ReadOnly): The time at which the remediation was last updated.
* **parallelDeployments**: int: Determines how many resources to remediate at any given time. Can be used to increase or reduce the pace of the remediation. If not provided, the default parallel deployments value is used.
* **policyAssignmentId**: string: The resource ID of the policy assignment that should be remediated.
* **policyDefinitionReferenceId**: string: The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
* **provisioningState**: string (ReadOnly): The status of the remediation. This refers to the entire remediation task, not individual deployments. Allowed values are Evaluating, Canceled, Cancelling, Failed, Complete, or Succeeded.
* **resourceCount**: int: Determines the max number of resources that can be remediated by the remediation job. If not provided, the default resource count is used.
* **resourceDiscoveryMode**: 'ExistingNonCompliant' | 'ReEvaluateCompliance' | string: The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
* **statusMessage**: string (ReadOnly): The remediation status message. Provides additional details regarding the state of the remediation.

## RemediationPropertiesFailureThreshold
### Properties
* **percentage**: int: A number between 0.0 to 1.0 representing the percentage failure threshold. The remediation will fail if the percentage of failed remediation operations (i.e. failed deployments) exceeds this threshold.

## SummarizeResults
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.count**: int {minValue: 1, maxValue: 1}: OData entity count; represents the number of summaries returned; always set to 1.
* **value**: [Summary](#summary)[]: Summarize action results.

## Summary
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.id**: string: OData entity ID; always set to null since summaries do not have an entity ID.
* **policyAssignments**: [PolicyAssignmentSummary](#policyassignmentsummary)[]: Policy assignments summary.
* **results**: [SummaryResults](#summaryresults): Compliance summary for all policy assignments.

## SummaryResults
### Properties
* **nonCompliantPolicies**: int {minValue: 0}: Number of non-compliant policies.
* **nonCompliantResources**: int {minValue: 0}: Number of non-compliant resources.
* **policyDetails**: [ComplianceDetail](#compliancedetail)[]: The policy artifact summary at this level. For query scope level, it represents policy assignment summary. For policy assignment level, it represents policy definitions summary.
* **policyGroupDetails**: [ComplianceDetail](#compliancedetail)[]: The policy definition group summary at this level.
* **queryResultsUri**: string: HTTP POST URI for queryResults action on Microsoft.PolicyInsights to retrieve raw results for the compliance summary. This property will not be available by default in future API versions, but could be queried explicitly.
* **resourceDetails**: [ComplianceDetail](#compliancedetail)[]: The resources summary at this level.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TypedErrorInfo
### Properties
* **info**: any (ReadOnly): The scenario specific error details.
* **type**: string (ReadOnly): The type of included error details.

