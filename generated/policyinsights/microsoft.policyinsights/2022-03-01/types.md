# Microsoft.PolicyInsights @ 2022-03-01

## Function checkPolicyRestrictions (Microsoft.PolicyInsights@2022-03-01)
* **Resource**: Microsoft.PolicyInsights
* **ApiVersion**: 2022-03-01
* **Input**: [CheckRestrictionsRequest](#checkrestrictionsrequest)
* **Output**: [CheckRestrictionsResult](#checkrestrictionsresult)

## CheckRestrictionsRequest
### Properties
* **pendingFields**: [PendingField](#pendingfield)[]: The list of fields and values that should be evaluated for potential restrictions.
* **resourceDetails**: [CheckRestrictionsResourceDetails](#checkrestrictionsresourcedetails) (Required): The information about the resource that will be evaluated.

## CheckRestrictionsResourceDetails
### Properties
* **apiVersion**: string: The api-version of the resource content.
* **resourceContent**: any (Required): The resource content. This should include whatever properties are already known and can be a partial set of all resource properties.
* **scope**: string: The scope where the resource is being created. For example, if the resource is a child resource this would be the parent resource's resource ID.

## CheckRestrictionsResult
### Properties
* **contentEvaluationResult**: [CheckRestrictionsResultContentEvaluationResult](#checkrestrictionsresultcontentevaluationresult) (ReadOnly): Evaluation results for the provided partial resource content.
* **fieldRestrictions**: [FieldRestrictions](#fieldrestrictions)[] (ReadOnly): The restrictions that will be placed on various fields in the resource by policy.

## CheckRestrictionsResultContentEvaluationResult
### Properties
* **policyEvaluations**: [PolicyEvaluationResult](#policyevaluationresult)[]: Policy evaluation results against the given resource content. This will indicate if the partial content that was provided will be denied as-is.

## ExpressionEvaluationDetails
### Properties
* **expression**: string: Expression evaluated.
* **expressionKind**: string (ReadOnly): The kind of expression that was evaluated.
* **expressionValue**: any: Value of the expression.
* **operator**: string: Operator to compare the expression value and the target value.
* **path**: string: Property path if the expression is a field or an alias.
* **result**: string: Evaluation result.
* **targetValue**: any: Target value to be compared with the expression value.

## FieldRestriction
### Properties
* **defaultValue**: string (ReadOnly): The value that policy will set for the field if the user does not provide a value.
* **policy**: [PolicyReference](#policyreference) (ReadOnly): The details of the policy that is causing the field restriction.
* **result**: 'Deny' | 'Removed' | 'Required' | string (ReadOnly): The type of restriction that is imposed on the field.
* **values**: string[] (ReadOnly): The values that policy either requires or denies for the field.

## FieldRestrictions
### Properties
* **field**: string (ReadOnly): The name of the field. This can be a top-level property like 'name' or 'type' or an Azure Policy field alias.
* **restrictions**: [FieldRestriction](#fieldrestriction)[]: The restrictions placed on that field by policy.

## IfNotExistsEvaluationDetails
### Properties
* **resourceId**: string: ID of the last evaluated resource for IfNotExists effect.
* **totalResources**: int: Total number of resources to which the existence condition is applicable.

## PendingField
### Properties
* **field**: string (Required): The name of the field. This can be a top-level property like 'name' or 'type' or an Azure Policy field alias.
* **values**: string[]: The list of potential values for the field that should be evaluated against Azure Policy.

## PolicyEvaluationDetails
### Properties
* **evaluatedExpressions**: [ExpressionEvaluationDetails](#expressionevaluationdetails)[]: Details of the evaluated expressions.
* **ifNotExistsDetails**: [IfNotExistsEvaluationDetails](#ifnotexistsevaluationdetails): Evaluation details of IfNotExists effect.

## PolicyEvaluationResult
### Properties
* **evaluationDetails**: [PolicyEvaluationDetails](#policyevaluationdetails) (ReadOnly): The detailed results of the policy expressions and values that were evaluated.
* **evaluationResult**: string (ReadOnly): The result of the policy evaluation against the resource. This will typically be 'NonCompliant' but may contain other values if errors were encountered.
* **policyInfo**: [PolicyReference](#policyreference) (ReadOnly): The details of the policy that was evaluated.

## PolicyReference
### Properties
* **policyAssignmentId**: string (ReadOnly): The resource identifier of the policy assignment.
* **policyDefinitionId**: string (ReadOnly): The resource identifier of the policy definition.
* **policyDefinitionReferenceId**: string (ReadOnly): The reference identifier of a specific policy definition within a policy set definition.
* **policySetDefinitionId**: string (ReadOnly): The resource identifier of the policy set definition.

