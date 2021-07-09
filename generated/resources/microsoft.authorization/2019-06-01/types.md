# Microsoft.Authorization @ 2019-06-01

## Resource Microsoft.Authorization/policyAssignments@2019-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: The location of the policy assignment. Only required when utilizing managed identity.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): The policy assignment properties.
* **sku**: [PolicySku](#policysku): The policy sku. This property is optional, obsolete, and will be ignored.
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policyDefinitions@2019-06-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties): The policy definition properties.
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policySetDefinitions@2019-06-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicySetDefinitionProperties](#policysetdefinitionproperties): The policy set definition properties.
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of the resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of the resource identity.
* **type**: 'None' | 'SystemAssigned': The identity type.

## PolicyAssignmentProperties
### Properties
* **description**: string: This message will be part of response in case of policy violation.
* **displayName**: string: The display name of the policy assignment.
* **enforcementMode**: 'Default' | 'DoNotEnforce': The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
* **metadata**: any: Any object
* **notScopes**: string[]: The policy's excluded scopes.
* **parameters**: any: Any object
* **policyDefinitionId**: string: The ID of the policy definition or policy set definition being assigned.
* **scope**: string: The scope for the policy assignment.

## PolicySku
### Properties
* **name**: string (Required): The name of the policy sku. Possible values are A0 and A1.
* **tier**: string: The policy sku tier. Possible values are Free and Standard.

## PolicyDefinitionProperties
### Properties
* **description**: string: The policy definition description.
* **displayName**: string: The display name of the policy definition.
* **metadata**: any: Any object
* **mode**: string: The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
* **parameters**: any: Any object
* **policyRule**: any: Any object
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified': The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.

## PolicySetDefinitionProperties
### Properties
* **description**: string: The policy set definition description.
* **displayName**: string: The display name of the policy set definition.
* **metadata**: any: Any object
* **parameters**: any: Any object
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required): An array of policy definition references.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified': The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.

## PolicyDefinitionReference
### Properties
* **parameters**: any: Any object
* **policyDefinitionId**: string: The ID of the policy definition or policy set definition.

