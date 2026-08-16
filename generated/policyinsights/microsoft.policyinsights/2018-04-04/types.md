# Microsoft.PolicyInsights @ 2018-04-04

## Function queryResults (Microsoft.PolicyInsights/policyEvents@2018-04-04)
* **Resource**: Microsoft.PolicyInsights/policyEvents
* **ApiVersion**: 2018-04-04
* **Output**: [PolicyEventsQueryResults](#policyeventsqueryresults)

## Function queryResults (Microsoft.PolicyInsights/policyStates@2018-04-04)
* **Resource**: Microsoft.PolicyInsights/policyStates
* **ApiVersion**: 2018-04-04
* **Output**: [PolicyStatesQueryResults](#policystatesqueryresults)

## Function summarize (Microsoft.PolicyInsights/policyStates@2018-04-04)
* **Resource**: Microsoft.PolicyInsights/policyStates
* **ApiVersion**: 2018-04-04
* **Output**: [SummarizeResults](#summarizeresults)

## PolicyAssignmentSummary
### Properties
* **policyAssignmentId**: string: Policy assignment ID.
* **policyDefinitions**: [PolicyDefinitionSummary](#policydefinitionsummary)[]: Policy definitions summary.
* **policySetDefinitionId**: string: Policy set definition ID, if the policy assignment is for a policy set.
* **results**: [SummaryResults](#summaryresults): Non-compliance summary for the policy assignment.

## PolicyDefinitionSummary
### Properties
* **effect**: string: Policy effect, i.e. policy definition action.
* **policyDefinitionId**: string: Policy definition ID.
* **policyDefinitionReferenceId**: string: Policy definition reference ID.
* **results**: [SummaryResults](#summaryresults): Non-compliance summary for the policy definition.

## PolicyEvent
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.id**: string: OData entity ID; always set to null since policy event records do not have an entity ID.
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
* **value**: [PolicyEvent](#policyevent)[]: Query results.

## PolicyState
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.id**: string: OData entity ID; always set to null since policy state records do not have an entity ID.
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
* **results**: [SummaryResults](#summaryresults): Non-compliance summary for all policy assignments.

## SummaryResults
### Properties
* **nonCompliantPolicies**: int {minValue: 0}: Number of non-compliant policies.
* **nonCompliantResources**: int {minValue: 0}: Number of non-compliant resources.
* **queryResultsUri**: string: HTTP POST URI for queryResults action on Microsoft.PolicyInsights to retrieve raw results for the non-compliance summary.

