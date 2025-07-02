# Microsoft.Authorization @ 2016-04-01

## Resource Microsoft.Authorization/policyassignments@2016-04-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): Properties for the policy assignment.
* **type**: 'Microsoft.Authorization/policyassignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policydefinitions@2016-04-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties): The policy definition properties.
* **type**: 'Microsoft.Authorization/policydefinitions' (ReadOnly, DeployTimeConstant): The resource type

## PolicyAssignmentProperties
### Properties
* **displayName**: string: The display name of the policy assignment.
* **policyDefinitionId**: string: The ID of the policy definition.
* **scope**: string: The scope for the policy assignment.

## PolicyDefinitionProperties
### Properties
* **description**: string: The policy definition description.
* **displayName**: string: The display name of the policy definition.
* **policyRule**: any: The policy rule.
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | string: The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.

