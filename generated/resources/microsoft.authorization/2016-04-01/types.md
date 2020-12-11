# Microsoft.Authorization @ 2016-04-01

## Resource Microsoft.Authorization/policyassignments@2016-04-01
* **Valid Scope(s)**: None
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **type**: 'Microsoft.Authorization/policyassignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policydefinitions@2016-04-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
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
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified'

