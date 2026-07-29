# Microsoft.PolicyInsights @ 2022-04-01

## Function queryResults (Microsoft.PolicyInsights/componentPolicyStates@2022-04-01)
* **Resource**: Microsoft.PolicyInsights/componentPolicyStates
* **ApiVersion**: 2022-04-01
* **Output**: [ComponentPolicyStatesQueryResults](#componentpolicystatesqueryresults)

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

