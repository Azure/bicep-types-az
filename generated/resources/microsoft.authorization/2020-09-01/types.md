# Microsoft.Authorization @ 2020-09-01

## Resource Microsoft.Authorization/policyAssignments@2020-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: The location of the policy assignment. Only required when utilizing managed identity.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): The policy assignment properties.
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policyDefinitions@2020-09-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties): The policy definition properties.
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policySetDefinitions@2020-09-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicySetDefinitionProperties](#policysetdefinitionproperties): The policy set definition properties.
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of the resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of the resource identity.
* **type**: 'None' | 'SystemAssigned': The identity type. This is the only required field when adding a system assigned identity to a resource.

## PolicyAssignmentProperties
### Properties
* **description**: string: This message will be part of response in case of policy violation.
* **displayName**: string: The display name of the policy assignment.
* **enforcementMode**: 'Default' | 'DoNotEnforce' | string: The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
* **metadata**: any: Any object
* **nonComplianceMessages**: [NonComplianceMessage](#noncompliancemessage)[]: The messages that describe why a resource is non-compliant with the policy.
* **notScopes**: string[]: The policy's excluded scopes.
* **parameters**: [ParameterValues](#parametervalues): The parameter values for the policy rule. The keys are the parameter names.
* **policyDefinitionId**: string: The ID of the policy definition or policy set definition being assigned.
* **scope**: string (ReadOnly): The scope for the policy assignment.

## NonComplianceMessage
### Properties
* **message**: string (Required): A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results.
* **policyDefinitionReferenceId**: string: The policy definition reference ID within a policy set definition the message is intended for. This is only applicable if the policy assignment assigns a policy set definition. If this is not provided the message applies to all policies assigned by this policy assignment.

## ParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

## ParameterValuesValue
### Properties
* **value**: any: Any object

## PolicyDefinitionProperties
### Properties
* **description**: string: The policy definition description.
* **displayName**: string: The display name of the policy definition.
* **metadata**: any: Any object
* **mode**: string: The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
* **parameters**: [ParameterDefinitions](#parameterdefinitions): The parameter definitions for parameters used in the policy. The keys are the parameter names.
* **policyRule**: any: Any object
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.

## ParameterDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## ParameterDefinitionsValue
### Properties
* **allowedValues**: any[]: The allowed values for the parameter.
* **defaultValue**: any: Any object
* **metadata**: [ParameterDefinitionsValueMetadata](#parameterdefinitionsvaluemetadata): General metadata for the parameter.
* **type**: 'Array' | 'Boolean' | 'DateTime' | 'Float' | 'Integer' | 'Object' | 'String' | string: The data type of the parameter.

## ParameterDefinitionsValueMetadata
### Properties
* **assignPermissions**: bool: Set to true to have Azure portal create role assignments on the resource ID or resource scope value of this parameter during policy assignment. This property is useful in case you wish to assign permissions outside the assignment scope.
* **description**: string: The description of the parameter.
* **displayName**: string: The display name for the parameter.
* **strongType**: string: Used when assigning the policy definition through the portal. Provides a context aware list of values for the user to choose from.
### Additional Properties
* **Additional Properties Type**: any

## PolicySetDefinitionProperties
### Properties
* **description**: string: The policy set definition description.
* **displayName**: string: The display name of the policy set definition.
* **metadata**: any: Any object
* **parameters**: [ParameterDefinitions](#parameterdefinitions): The parameter definitions for parameters used in the policy. The keys are the parameter names.
* **policyDefinitionGroups**: [PolicyDefinitionGroup](#policydefinitiongroup)[]: The metadata describing groups of policy definition references within the policy set definition.
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required): An array of policy definition references.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.

## ParameterDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## PolicyDefinitionGroup
### Properties
* **additionalMetadataId**: string: A resource ID of a resource that contains additional metadata about the group.
* **category**: string: The group's category.
* **description**: string: The group's description.
* **displayName**: string: The group's display name.
* **name**: string (Required): The name of the group.

## PolicyDefinitionReference
### Properties
* **groupNames**: string[]: The name of the groups that this policy definition reference belongs to.
* **parameters**: [ParameterValues](#parametervalues): The parameter values for the policy rule. The keys are the parameter names.
* **policyDefinitionId**: string (Required): The ID of the policy definition or policy set definition.
* **policyDefinitionReferenceId**: string: A unique id (within the policy set definition) for this policy definition reference.

## ParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

