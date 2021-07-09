# Microsoft.Authorization @ 2017-06-01-preview

## Resource Microsoft.Authorization/policyAssignments@2017-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): The policy assignment properties.
* **sku**: [PolicySku](#policysku): The policy sku.
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policySetDefinitions@2017-06-01-preview
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicySetDefinitionProperties](#policysetdefinitionproperties): The policy set definition properties.
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## PolicyAssignmentProperties
### Properties
* **description**: string: This message will be part of response in case of policy violation.
* **displayName**: string: The display name of the policy assignment.
* **metadata**: any: Any object
* **notScopes**: string[]: The policy's excluded scopes.
* **parameters**: any: Any object
* **policyDefinitionId**: string: The ID of the policy definition.
* **scope**: string: The scope for the policy assignment.

## PolicySku
### Properties
* **name**: string (Required): The name of the policy sku. Possible values are A0 and A1.
* **tier**: string: The policy sku tier. Possible values are Free and Standard.

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

