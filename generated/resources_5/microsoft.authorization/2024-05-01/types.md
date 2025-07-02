# Microsoft.Authorization @ 2024-05-01

## Resource Microsoft.Authorization/policyAssignments@2024-05-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The managed identity associated with the policy assignment.
* **location**: string: The location of the policy assignment. Only required when utilizing managed identity.
* **name**: string {pattern: "^[^<>*%&:\?.+/]*[^<>*%&:\?.+/ ]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): Properties for the policy assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policyDefinitions@2024-05-01
* **Valid Scope(s)**: Tenant (ReadOnly), ManagementGroup, Subscription
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>*%&:\?.+/]*[^<>*%&:\?.+/ ]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties): The policy definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policyDefinitions/versions@2024-05-01
* **Valid Scope(s)**: Tenant (ReadOnly), ManagementGroup, Subscription
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\d+\.\d+\.\d+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionVersionProperties](#policydefinitionversionproperties): The policy definition version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Authorization/policyDefinitions/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policySetDefinitions@2024-05-01
* **Valid Scope(s)**: Tenant (ReadOnly), ManagementGroup, Subscription
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>*%&:\?.+/]*[^<>*%&:\?.+/ ]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicySetDefinitionProperties](#policysetdefinitionproperties): The policy set definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policySetDefinitions/versions@2024-05-01
* **Valid Scope(s)**: Tenant (ReadOnly), ManagementGroup, Subscription
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\d+\.\d+\.\d+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicySetDefinitionVersionProperties](#policysetdefinitionversionproperties): The policy set definition version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Authorization/policySetDefinitions/versions' (ReadOnly, DeployTimeConstant): The resource type

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
* **kind**: 'definitionVersion' | 'policyEffect' | string: The override kind.
* **selectors**: [Selector](#selector)[]: The list of the selector expressions.
* **value**: string: The value to override the policy property.

## ParameterDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## ParameterDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

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
* **schema**: any: Provides validation of parameter inputs during assignment using a self-defined JSON schema. This property is only supported for object-type parameters and follows the Json.NET Schema 2019-09 implementation. You can learn more about using schemas at https://json-schema.org/ and test draft schemas at https://www.jsonschemavalidator.net/.
* **type**: 'Array' | 'Boolean' | 'DateTime' | 'Float' | 'Integer' | 'Object' | 'String' | string: The data type of the parameter.

## ParameterDefinitionsValueMetadata
### Properties
* **assignPermissions**: bool: Set to true to have Azure portal create role assignments on the resource ID or resource scope value of this parameter during policy assignment. This property is useful in case you wish to assign permissions outside the assignment scope.
* **description**: string: The description of the parameter.
* **displayName**: string: The display name for the parameter.
* **strongType**: string: Used when assigning the policy definition through the portal. Provides a context aware list of values for the user to choose from.
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
* **version**: string: The policy definition version in #.#.# format.
* **versions**: string[]: A list of available versions for this policy definition.

## PolicyDefinitionReference
### Properties
* **definitionVersion**: string: The version of the policy definition to use.
* **effectiveDefinitionVersion**: string (ReadOnly): The effective version of the policy definition in use. This is only present if requested via the $expand query parameter.
* **groupNames**: string[]: The name of the groups that this policy definition reference belongs to.
* **latestDefinitionVersion**: string (ReadOnly): The latest version of the policy definition available. This is only present if requested via the $expand query parameter.
* **parameters**: [ParameterValues](#parametervalues): The parameter values for the referenced policy rule. The keys are the parameter names.
* **policyDefinitionId**: string (Required): The ID of the policy definition or policy set definition.
* **policyDefinitionReferenceId**: string: A unique id (within the policy set definition) for this policy definition reference.

## PolicyDefinitionVersionProperties
### Properties
* **description**: string: The policy definition description.
* **displayName**: string: The display name of the policy definition.
* **metadata**: any: The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
* **mode**: string: The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
* **parameters**: [ParameterDefinitions](#parameterdefinitions): The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
* **policyRule**: any: The policy rule.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
* **version**: string: The policy definition version in #.#.# format.

## PolicySetDefinitionProperties
### Properties
* **description**: string: The policy set definition description.
* **displayName**: string: The display name of the policy set definition.
* **metadata**: any: The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
* **parameters**: [ParameterDefinitions](#parameterdefinitions): The policy set definition parameters that can be used in policy definition references.
* **policyDefinitionGroups**: [PolicyDefinitionGroup](#policydefinitiongroup)[]: The metadata describing groups of policy definition references within the policy set definition.
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required): An array of policy definition references.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy set definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
* **version**: string: The policy set definition version in #.#.# format.
* **versions**: string[]: A list of available versions for this policy set definition.

## PolicySetDefinitionVersionProperties
### Properties
* **description**: string: The policy set definition description.
* **displayName**: string: The display name of the policy set definition.
* **metadata**: any: The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
* **parameters**: [ParameterDefinitions](#parameterdefinitions): The policy set definition parameters that can be used in policy definition references.
* **policyDefinitionGroups**: [PolicyDefinitionGroup](#policydefinitiongroup)[]: The metadata describing groups of policy definition references within the policy set definition.
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required): An array of policy definition references.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
* **version**: string: The policy set definition version in #.#.# format.

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

