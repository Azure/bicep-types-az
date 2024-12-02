# Microsoft.Authorization @ 2024-04-01

## Resource Microsoft.Authorization/policyAssignments@2024-04-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The managed identity associated with the policy assignment.
* **location**: string: The location of the policy assignment. Only required when utilizing managed identity.
* **name**: string {pattern: "^[^<>*%&:\?.+/]*[^<>*%&:\?.+/ ]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): Properties for the policy assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of the resource identity.  This property will only be provided for a system assigned identity
* **tenantId**: string (ReadOnly): The tenant ID of the resource identity.  This property will only be provided for a system assigned identity
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned': The identity type. This is the only required field when adding a system or user assigned identity to a resource.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The user identity associated with the policy. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

## NonComplianceMessage
### Properties
* **message**: string (Required): A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results.
* **policyDefinitionReferenceId**: string: The policy definition reference ID within a policy set definition the message is intended for. This is only applicable if the policy assignment assigns a policy set definition. If this is not provided the message applies to all policies assigned by this policy assignment.

## Override
### Properties
* **kind**: 'policyEffect' | string: The override kind.
* **selectors**: [Selector](#selector)[]: The list of the selector expressions.
* **value**: string: The value to override the policy property.

## ParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

## ParameterValuesValue
### Properties
* **value**: any: The value of the parameter.

## PolicyAssignmentProperties
### Properties
* **assignmentType**: 'Custom' | 'NotSpecified' | 'System' | 'SystemHidden' | string: The type of policy assignment. Possible values are NotSpecified, System, SystemHidden, and Custom. Immutable.
* **definitionVersion**: string: The version of the policy definition to use.
* **description**: string: This message will be part of response in case of policy violation.
* **displayName**: string: The display name of the policy assignment.
* **effectiveDefinitionVersion**: string (ReadOnly): The effective version of the policy definition in use. This is only present if requested via the $expand query parameter.
* **enforcementMode**: 'Default' | 'DoNotEnforce' | string: The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
* **latestDefinitionVersion**: string (ReadOnly): The latest version of the policy definition available. This is only present if requested via the $expand query parameter.
* **metadata**: any: The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
* **nonComplianceMessages**: [NonComplianceMessage](#noncompliancemessage)[]: The messages that describe why a resource is non-compliant with the policy.
* **notScopes**: string[]: The policy's excluded scopes.
* **overrides**: [Override](#override)[]: The policy property value override.
* **parameters**: [ParameterValues](#parametervalues): The parameter values for the assigned policy rule. The keys are the parameter names.
* **policyDefinitionId**: string: The ID of the policy definition or policy set definition being assigned.
* **resourceSelectors**: [ResourceSelector](#resourceselector)[]: The resource selector list to filter policies by resource properties.
* **scope**: string (ReadOnly): The scope for the policy assignment.

## ResourceSelector
### Properties
* **name**: string: The name of the resource selector.
* **selectors**: [Selector](#selector)[]: The list of the selector expressions.

## Selector
### Properties
* **in**: string[]: The list of values to filter in.
* **kind**: 'policyDefinitionReferenceId' | 'resourceLocation' | 'resourceType' | 'resourceWithoutLocation' | string: The selector kind.
* **notIn**: string[]: The list of values to filter out.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

