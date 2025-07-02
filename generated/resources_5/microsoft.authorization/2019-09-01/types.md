# Microsoft.Authorization @ 2019-09-01

## Resource Microsoft.Authorization/policyAssignments@2019-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The managed identity associated with the policy assignment.
* **location**: string: The location of the policy assignment. Only required when utilizing managed identity.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): Properties for the policy assignment.
* **sku**: [PolicySku](#policysku): The policy sku. This property is optional, obsolete, and will be ignored.
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policyDefinitions@2019-09-01
* **Valid Scope(s)**: Tenant (ReadOnly), ManagementGroup, Subscription
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties): The policy definition properties.
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policySetDefinitions@2019-09-01
* **Valid Scope(s)**: Tenant (ReadOnly), ManagementGroup, Subscription
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicySetDefinitionProperties](#policysetdefinitionproperties): The policy definition properties.
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of the resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of the resource identity.
* **type**: 'None' | 'SystemAssigned': The identity type. This is the only required field when adding a system assigned identity to a resource.

## ParameterDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## ParameterDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## ParameterDefinitionsValue
### Properties
* **allowedValues**: any[]: The allowed values for the parameter.
* **defaultValue**: any: The default value for the parameter if no value is provided.
* **metadata**: [ParameterDefinitionsValueMetadata](#parameterdefinitionsvaluemetadata): General metadata for the parameter.
* **type**: 'Array' | 'Boolean' | 'DateTime' | 'Float' | 'Integer' | 'Object' | 'String' | string: The data type of the parameter.

## ParameterDefinitionsValueMetadata
### Properties
* **description**: string: The description of the parameter.
* **displayName**: string: The display name for the parameter.
### Additional Properties
* **Additional Properties Type**: any

## ParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

## ParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

## ParameterValuesValue
### Properties
* **value**: any: The value of the parameter.

## PolicyAssignmentProperties
### Properties
* **description**: string: This message will be part of response in case of policy violation.
* **displayName**: string: The display name of the policy assignment.
* **enforcementMode**: 'Default' | 'DoNotEnforce' | string: The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
* **metadata**: any: The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
* **notScopes**: string[]: The policy's excluded scopes.
* **parameters**: [ParameterValues](#parametervalues): The parameter values for the assigned policy rule. The keys are the parameter names.
* **policyDefinitionId**: string: The ID of the policy definition or policy set definition being assigned.
* **scope**: string: The scope for the policy assignment.

## PolicyDefinitionGroup
### Properties
* **additionalMetadataId**: string: A resource ID of a resource that contains additional metadata about the group.
* **category**: string: The group's category.
* **description**: string: The group's description.
* **displayName**: string: The group's display name.
* **name**: string (Required): The name of the group.

## PolicyDefinitionProperties
### Properties
* **description**: string: The policy definition description.
* **displayName**: string: The display name of the policy definition.
* **metadata**: any: The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
* **mode**: string: The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
* **parameters**: [ParameterDefinitions](#parameterdefinitions): The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
* **policyRule**: any: The policy rule.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.

## PolicyDefinitionReference
### Properties
* **groupNames**: string[]: The name of the groups that this policy definition reference belongs to.
* **parameters**: [ParameterValues](#parametervalues): The parameter values for the referenced policy rule. The keys are the parameter names.
* **policyDefinitionId**: string (Required): The ID of the policy definition or policy set definition.
* **policyDefinitionReferenceId**: string: A unique id (within the policy set definition) for this policy definition reference.

## PolicySetDefinitionProperties
### Properties
* **description**: string: The policy set definition description.
* **displayName**: string: The display name of the policy set definition.
* **metadata**: any: The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
* **parameters**: [ParameterDefinitions](#parameterdefinitions): The policy set definition parameters that can be used in policy definition references.
* **policyDefinitionGroups**: [PolicyDefinitionGroup](#policydefinitiongroup)[]: The metadata describing groups of policy definition references within the policy set definition.
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required): An array of policy definition references.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.

## PolicySku
### Properties
* **name**: string (Required): The name of the policy sku. Possible values are A0 and A1.
* **tier**: string: The policy sku tier. Possible values are Free and Standard.

