# Microsoft.Authorization @ 2025-03-01

## Resource Microsoft.Authorization/policyAssignments@2025-03-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2025-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The managed identity associated with the policy assignment.
* **location**: string: The location of the policy assignment. Only required when utilizing managed identity.
* **name**: string {pattern: "^[^<>%&:\?/]*[^<>%&:\?/ ]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): Properties for the policy assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policyDefinitions@2025-03-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription
* **Writable Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2025-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>%&:\?/]*[^<>%&:\?/ ]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties): The policy definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policyDefinitions/versions@2025-03-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription
* **Writable Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2025-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\d+\.\d+\.\d+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionVersionProperties](#policydefinitionversionproperties): The policy definition version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/policyDefinitions/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policySetDefinitions@2025-03-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription
* **Writable Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2025-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>%&:\?/]*[^<>%&:\?/ ]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicySetDefinitionProperties](#policysetdefinitionproperties): The policy set definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policySetDefinitions/versions@2025-03-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription
* **Writable Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2025-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\d+\.\d+\.\d+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicySetDefinitionVersionProperties](#policysetdefinitionversionproperties): The policy set definition version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/policySetDefinitions/versions' (ReadOnly, DeployTimeConstant): The resource type

## Function acquirePolicyToken (Microsoft.Authorization@2025-03-01)
* **Resource**: Microsoft.Authorization
* **ApiVersion**: 2025-03-01
* **Input**: [PolicyTokenRequest](#policytokenrequest)
* **Output**: [PolicyTokenResponse](#policytokenresponse)

## Function listPolicyDefinitionVersions (Microsoft.Authorization@2025-03-01)
* **Resource**: Microsoft.Authorization
* **ApiVersion**: 2025-03-01
* **Output**: [PolicyDefinitionVersionListResult](#policydefinitionversionlistresult)

## Function listPolicySetDefinitionVersions (Microsoft.Authorization@2025-03-01)
* **Resource**: Microsoft.Authorization
* **ApiVersion**: 2025-03-01
* **Output**: [PolicySetDefinitionVersionListResult](#policysetdefinitionversionlistresult)

## ExternalEvaluationEndpointInvocationResult
### Properties
* **claims**: any: The set of claims that will be attached to the policy token as an attestation for the result of the endpoint invocation.
* **expiration**: string: The expiration of the results.
* **message**: string: The status message with additional details about the invocation result.
* **policyInfo**: [PolicyLogInfo](#policyloginfo): The details of the policy requiring the external endpoint invocation.
* **result**: 'Failed' | 'Succeeded' | string: The result of the external endpoint. Possible values are Succeeded and Failed.
* **retryAfter**: string: The date and time after which a failed endpoint invocation can be retried.

## ExternalEvaluationEndpointSettings
### Properties
* **details**: any: The details of the endpoint.
* **kind**: string: The kind of the endpoint.

## ExternalEvaluationEnforcementSettings
### Properties
* **endpointSettings**: [ExternalEvaluationEndpointSettings](#externalevaluationendpointsettings): The settings of an external endpoint providing evaluation results.
* **missingTokenAction**: string: What to do when evaluating an enforcement policy that requires an external evaluation and the token is missing. Possible values are Audit and Deny and language expressions are supported.
* **resultLifespan**: string: The lifespan of the endpoint invocation result after which it's no longer valid. Value is expected to follow the ISO 8601 duration format and language expressions are supported.
* **roleDefinitionIds**: string[]: An array of the role definition Ids the assignment's MSI will need in order to invoke the endpoint.

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
* **enforcementMode**: 'Default' | 'DoNotEnforce' | 'Enroll' | string: The policy assignment enforcement mode. Possible values are Default, DoNotEnforce, and Enroll
* **instanceId**: string (ReadOnly): The instance ID of the policy assignment. This ID only and always changes when the assignment is deleted and recreated.
* **latestDefinitionVersion**: string (ReadOnly): The latest version of the policy definition available. This is only present if requested via the $expand query parameter.
* **metadata**: any: The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
* **nonComplianceMessages**: [NonComplianceMessage](#noncompliancemessage)[]: The messages that describe why a resource is non-compliant with the policy.
* **notScopes**: string[]: The policy's excluded scopes.
* **overrides**: [Override](#override)[]: The policy property value override.
* **parameters**: [PolicyAssignmentPropertiesParameters](#policyassignmentpropertiesparameters): The parameter values for the assigned policy rule. The keys are the parameter names.
* **policyDefinitionId**: string: The ID of the policy definition or policy set definition being assigned.
* **resourceSelectors**: [ResourceSelector](#resourceselector)[]: The resource selector list to filter policies by resource properties.
* **scope**: string (ReadOnly): The scope for the policy assignment.

## PolicyAssignmentPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

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
* **externalEvaluationEnforcementSettings**: [ExternalEvaluationEnforcementSettings](#externalevaluationenforcementsettings): The details of the source of external evaluation results required by the policy during enforcement evaluation.
* **metadata**: any: The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
* **mode**: string: The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
* **parameters**: [PolicyDefinitionPropertiesParameters](#policydefinitionpropertiesparameters): The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
* **policyRule**: any: The policy rule.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
* **version**: string: The policy definition version in #.#.# format.
* **versions**: string[]: A list of available versions for this policy definition.

## PolicyDefinitionPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## PolicyDefinitionReference
### Properties
* **definitionVersion**: string: The version of the policy definition to use.
* **effectiveDefinitionVersion**: string (ReadOnly): The effective version of the policy definition in use. This is only present if requested via the $expand query parameter.
* **groupNames**: string[]: The name of the groups that this policy definition reference belongs to.
* **latestDefinitionVersion**: string (ReadOnly): The latest version of the policy definition available. This is only present if requested via the $expand query parameter.
* **parameters**: [PolicyDefinitionReferenceParameters](#policydefinitionreferenceparameters): The parameter values for the referenced policy rule. The keys are the parameter names.
* **policyDefinitionId**: string (Required): The ID of the policy definition or policy set definition.
* **policyDefinitionReferenceId**: string: A unique id (within the policy set definition) for this policy definition reference.

## PolicyDefinitionReferenceParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

## PolicyDefinitionVersion
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PolicyDefinitionVersionProperties](#policydefinitionversionproperties): The policy definition version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PolicyDefinitionVersionListResult
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [PolicyDefinitionVersion](#policydefinitionversion)[] (Required): The PolicyDefinitionVersion items on this page

## PolicyDefinitionVersionProperties
### Properties
* **description**: string: The policy definition description.
* **displayName**: string: The display name of the policy definition.
* **externalEvaluationEnforcementSettings**: [ExternalEvaluationEnforcementSettings](#externalevaluationenforcementsettings): The details of the source of external evaluation results required by the policy during enforcement evaluation.
* **metadata**: any: The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
* **mode**: string: The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
* **parameters**: [PolicyDefinitionVersionPropertiesParameters](#policydefinitionversionpropertiesparameters): The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
* **policyRule**: any: The policy rule.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
* **version**: string: The policy definition version in #.#.# format.

## PolicyDefinitionVersionPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## PolicyLogInfo
### Properties
* **policyAssignmentId**: string: The policy assignment Id.
* **policyAssignmentName**: string: The policy assignment name.
* **policyAssignmentScope**: string: The policy assignment scope.
* **policyAssignmentVersion**: string: The policy assignment version.
* **policyDefinitionEffect**: string: The policy definition action.
* **policyDefinitionId**: string: The policy definition Id.
* **policyDefinitionName**: string: The policy definition name.
* **policyDefinitionReferenceId**: string: The policy definition instance Id inside a policy set.
* **policyDefinitionVersion**: string: The policy definition version.
* **policySetDefinitionId**: string: The policy set definition Id.
* **policySetDefinitionName**: string: The policy set definition name.
* **policySetDefinitionVersion**: string: The policy set definition version.

## PolicySetDefinitionProperties
### Properties
* **description**: string: The policy set definition description.
* **displayName**: string: The display name of the policy set definition.
* **metadata**: any: The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
* **parameters**: [PolicySetDefinitionPropertiesParameters](#policysetdefinitionpropertiesparameters): The policy set definition parameters that can be used in policy definition references.
* **policyDefinitionGroups**: [PolicyDefinitionGroup](#policydefinitiongroup)[]: The metadata describing groups of policy definition references within the policy set definition.
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required): An array of policy definition references.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy set definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
* **version**: string: The policy set definition version in #.#.# format.
* **versions**: string[]: A list of available versions for this policy set definition.

## PolicySetDefinitionPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## PolicySetDefinitionVersion
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PolicySetDefinitionVersionProperties](#policysetdefinitionversionproperties): The policy set definition version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PolicySetDefinitionVersionListResult
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [PolicySetDefinitionVersion](#policysetdefinitionversion)[] (Required): The PolicySetDefinitionVersion items on this page

## PolicySetDefinitionVersionProperties
### Properties
* **description**: string: The policy set definition description.
* **displayName**: string: The display name of the policy set definition.
* **metadata**: any: The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
* **parameters**: [PolicySetDefinitionVersionPropertiesParameters](#policysetdefinitionversionpropertiesparameters): The policy set definition parameters that can be used in policy definition references.
* **policyDefinitionGroups**: [PolicyDefinitionGroup](#policydefinitiongroup)[]: The metadata describing groups of policy definition references within the policy set definition.
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required): An array of policy definition references.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
* **version**: string: The policy set definition version in #.#.# format.

## PolicySetDefinitionVersionPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## PolicyTokenOperation
### Properties
* **content**: any: The payload of the resource operation.
* **httpMethod**: string (Required): The http method of the resource operation.
* **uri**: string (Required): The request URI of the resource operation.

## PolicyTokenRequest
### Properties
* **changeReference**: string: The change reference.
* **operation**: [PolicyTokenOperation](#policytokenoperation) (Required): The resource operation to acquire a token for.

## PolicyTokenResponse
### Properties
* **changeReference**: string: The change reference associated with the operation for which the token is acquired.
* **expiration**: string: The expiration of the policy token.
* **message**: string: Status message with additional details about the token acquisition operation result.
* **result**: 'Failed' | 'Succeeded' | string: The result of the completed token acquisition operation. Possible values are Succeeded and Failed.
* **results**: [ExternalEvaluationEndpointInvocationResult](#externalevaluationendpointinvocationresult)[]: An array of external evaluation endpoint invocation results.
* **retryAfter**: string: The date and time after which the client can try to acquire a token again in the case of retry-able failures.
* **token**: string: The issued policy token.
* **tokenId**: string: The unique Id assigned to the policy token.

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

