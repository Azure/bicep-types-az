# Microsoft.Authorization @ 2016-12-01

## Resource Microsoft.Authorization/policyAssignments@2016-12-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): The policy assignment properties.
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policyDefinitions@2016-12-01
* **Valid Scope(s)**: Tenant, ManagementGroup, Subscription
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties): The policy definition properties.
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## PolicyAssignmentProperties
### Properties
* **description**: string: This message will be part of response in case of policy violation.
* **displayName**: string: The display name of the policy assignment.
* **parameters**: any: Any object
* **policyDefinitionId**: string: The ID of the policy definition.
* **scope**: string: The scope for the policy assignment.

## PolicyDefinitionProperties
### Properties
* **description**: string: The policy definition description.
* **displayName**: string: The display name of the policy definition.
* **metadata**: any: Any object
* **mode**: 'All' | 'Indexed' | 'NotSpecified': The policy definition mode. Possible values are NotSpecified, Indexed, and All.
* **parameters**: any: Any object
* **policyRule**: any: Any object
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified': The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.

