# Microsoft.Authorization @ 2015-11-01

## Resource Microsoft.Authorization/policyAssignments@2015-11-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policydefinitions@2015-11-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyDefinitionProperties
* **type**: 'Microsoft.Authorization/policydefinitions' (ReadOnly, DeployTimeConstant)

## PolicyAssignmentProperties
### Properties
* **displayName**: string
* **policyDefinitionId**: string
* **scope**: string

## PolicyDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **policyRule**: any

