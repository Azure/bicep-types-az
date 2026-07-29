# Microsoft.PolicyInsights @ 2018-07-01-preview

## Resource Microsoft.PolicyInsights/remediations@2018-07-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemediationProperties](#remediationproperties): Properties for the remediation.
* **type**: 'Microsoft.PolicyInsights/remediations' (ReadOnly, DeployTimeConstant): The resource type

## Function cancel (Microsoft.PolicyInsights/remediations@2018-07-01-preview)
* **Resource**: Microsoft.PolicyInsights/remediations
* **ApiVersion**: 2018-07-01-preview
* **Output**: [Remediation](#remediation)

## Function listDeployments (Microsoft.PolicyInsights/remediations@2018-07-01-preview)
* **Resource**: Microsoft.PolicyInsights/remediations
* **ApiVersion**: 2018-07-01-preview
* **Output**: [RemediationDeploymentsListResult](#remediationdeploymentslistresult)

## Function queryResults (Microsoft.PolicyInsights/policyTrackedResources@2018-07-01-preview)
* **Resource**: Microsoft.PolicyInsights/policyTrackedResources
* **ApiVersion**: 2018-07-01-preview
* **Output**: [PolicyTrackedResourcesQueryResults](#policytrackedresourcesqueryresults)

## Function queryResults (Microsoft.PolicyInsights/policyEvents@2018-07-01-preview)
* **Resource**: Microsoft.PolicyInsights/policyEvents
* **ApiVersion**: 2018-07-01-preview
* **Output**: [PolicyEventsQueryResults](#policyeventsqueryresults)

## Function queryResults (Microsoft.PolicyInsights/policyStates@2018-07-01-preview)
* **Resource**: Microsoft.PolicyInsights/policyStates
* **ApiVersion**: 2018-07-01-preview
* **Output**: [PolicyStatesQueryResults](#policystatesqueryresults)

## Function summarize (Microsoft.PolicyInsights/policyStates@2018-07-01-preview)
* **Resource**: Microsoft.PolicyInsights/policyStates
* **ApiVersion**: 2018-07-01-preview
* **Output**: [SummarizeResults](#summarizeresults)

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
* **policySetDefinitionId**: string: Policy set definition ID, if the policy assignment is for a policy set.
* **results**: [SummaryResults](#summaryresults): Non-compliance summary for the policy assignment.

## PolicyDefinitionSummary
### Properties
* **effect**: string: Policy effect, i.e. policy definition action.
* **policyDefinitionId**: string: Policy definition ID.
* **policyDefinitionReferenceId**: string: Policy definition reference ID.
* **results**: [SummaryResults](#summaryresults): Non-compliance summary for the policy definition.

## PolicyDetails
### Properties
* **policyAssignmentDisplayName**: string (ReadOnly): The display name of the policy assignment.
* **policyAssignmentId**: string (ReadOnly): The ID of the policy assignment.
* **policyAssignmentScope**: string (ReadOnly): The scope of the policy assignment.
* **policyDefinitionId**: string (ReadOnly): The ID of the policy definition.
* **policyDefinitionReferenceId**: string (ReadOnly): The policy definition reference ID within the policy set definition.
* **policySetDefinitionId**: string (ReadOnly): The ID of the policy set definition.

## PolicyEvaluationDetails
### Properties
* **evaluatedExpressions**: [ExpressionEvaluationDetails](#expressionevaluationdetails)[]: Details of the evaluated expressions.
* **ifNotExistsDetails**: [IfNotExistsEvaluationDetails](#ifnotexistsevaluationdetails): Evaluation details of IfNotExists effect.

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
* **@odata.nextLink**: string: Odata next link; URL to get the next set of results.
* **value**: [PolicyEvent](#policyevent)[]: Query results.

## PolicyState
### Properties
* **@odata.context**: string: OData context string; used by OData clients to resolve type information based on metadata.
* **@odata.id**: string: OData entity ID; always set to null since policy state records do not have an entity ID.
* **complianceState**: string: Compliance state of the resource.
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
* **policyEvaluationDetails**: [PolicyEvaluationDetails](#policyevaluationdetails): Policy evaluation details.
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
* **@odata.nextLink**: string: Odata next link; URL to get the next set of results.
* **value**: [PolicyState](#policystate)[]: Query results.

## PolicyTrackedResource
### Properties
* **createdBy**: [TrackedResourceModificationDetails](#trackedresourcemodificationdetails) (ReadOnly): The details of the policy triggered deployment that created the tracked resource.
* **lastModifiedBy**: [TrackedResourceModificationDetails](#trackedresourcemodificationdetails) (ReadOnly): The details of the policy triggered deployment that modified the tracked resource.
* **lastUpdateUtc**: string (ReadOnly): Timestamp of the last update to the tracked resource.
* **policyDetails**: [PolicyDetails](#policydetails) (ReadOnly): The details of the policy that require the tracked resource.
* **trackedResourceId**: string (ReadOnly): The ID of the policy tracked resource.

## PolicyTrackedResourcesQueryResults
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [PolicyTrackedResource](#policytrackedresource)[] (ReadOnly): The PolicyTrackedResource items on this page

## Remediation
### Properties
* **id**: string (ReadOnly): The ID of the remediation.
* **name**: string (ReadOnly): The name of the remediation.
* **properties**: [RemediationProperties](#remediationproperties): Properties for the remediation.
* **type**: string (ReadOnly): The type of the remediation.

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
* **nextLink**: string (ReadOnly): The URL to get the next set of results.
* **value**: [RemediationDeployment](#remediationdeployment)[] (ReadOnly): Array of deployments for the remediation.

## RemediationDeploymentSummary
### Properties
* **failedDeployments**: int: The number of deployments required by the remediation that have failed.
* **successfulDeployments**: int: The number of deployments required by the remediation that have succeeded.
* **totalDeployments**: int: The number of deployments required by the remediation.

## RemediationFilters
### Properties
* **locations**: string[]: The resource locations that will be remediated.

## RemediationProperties
### Properties
* **createdOn**: string (ReadOnly): The time at which the remediation was created.
* **deploymentStatus**: [RemediationDeploymentSummary](#remediationdeploymentsummary): The deployment status summary for all deployments created by the remediation.
* **filters**: [RemediationFilters](#remediationfilters): The filters that will be applied to determine which resources to remediate.
* **lastUpdatedOn**: string (ReadOnly): The time at which the remediation was last updated.
* **policyAssignmentId**: string: The resource ID of the policy assignment that should be remediated.
* **policyDefinitionReferenceId**: string: The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
* **provisioningState**: string (ReadOnly): The status of the remediation.

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

## TrackedResourceModificationDetails
### Properties
* **deploymentId**: string (ReadOnly): The ID of the deployment that created or modified the tracked resource.
* **deploymentTime**: string (ReadOnly): Timestamp of the deployment that created or modified the tracked resource.
* **policyDetails**: [PolicyDetails](#policydetails) (ReadOnly): The details of the policy that created or modified the tracked resource.

## TypedErrorInfo
### Properties
* **info**: any (ReadOnly): The scenario specific error details.
* **type**: string (ReadOnly): The type of included error details.

