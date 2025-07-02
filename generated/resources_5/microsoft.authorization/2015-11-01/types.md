# Microsoft.Authorization @ 2015-11-01

## Resource Microsoft.Authorization/policyAssignments@2015-11-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties): Gets or sets the policy assignment properties.
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policydefinitions@2015-11-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties): Gets or sets the policy definition properties.
* **type**: 'Microsoft.Authorization/policydefinitions' (ReadOnly, DeployTimeConstant): The resource type

## PolicyAssignmentProperties
### Properties
* **displayName**: string: Gets or sets the policy assignment display name.
* **policyDefinitionId**: string: Gets or sets the policy definition Id.
* **scope**: string: Gets or sets the policy assignment scope.

## PolicyDefinitionProperties
### Properties
* **description**: string: Gets or sets the policy definition description.
* **displayName**: string: Gets or sets the policy definition display name.
* **policyRule**: any: The policy rule json.

