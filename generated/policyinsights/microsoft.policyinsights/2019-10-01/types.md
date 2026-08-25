# Microsoft.PolicyInsights @ 2019-10-01

## Function queryResults (Microsoft.PolicyInsights/policyEvents@2019-10-01)
* **Resource**: Microsoft.PolicyInsights/policyEvents
* **ApiVersion**: 2019-10-01
* **Output**: [PolicyEventsQueryResults](#policyeventsqueryresults)

## Function queryResults (Microsoft.PolicyInsights/policyStates@2019-10-01)
* **Resource**: Microsoft.PolicyInsights/policyStates
* **ApiVersion**: 2019-10-01
* **Output**: [PolicyStatesQueryResults](#policystatesqueryresults)

## Function summarize (Microsoft.PolicyInsights/policyStates@2019-10-01)
* **Resource**: Microsoft.PolicyInsights/policyStates
* **ApiVersion**: 2019-10-01
* **Output**: [SummarizeResults](#summarizeresults)

## Function triggerEvaluation (Microsoft.PolicyInsights/policyStates@2019-10-01)
* **Resource**: Microsoft.PolicyInsights/policyStates
* **ApiVersion**: 2019-10-01
* **Output**: any

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

## ComponentStateDetails
### Properties
* **complianceState**: string: Component compliance state.
* **id**: string: Component Id.
* **name**: string: Component name.
* **timestamp**: string: Component compliance evaluation timestamp.
* **type**: string: Component type.
### Additional Properties
* **Additional Properties Type**: any

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

