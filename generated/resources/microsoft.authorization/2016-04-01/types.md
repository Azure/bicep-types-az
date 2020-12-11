# Microsoft.Authorization @ 2016-04-01

## Microsoft.Authorization/policyassignments
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **type**: 'Microsoft.Authorization/policyassignments' (ReadOnly, DeployTimeConstant)

## PolicyAssignmentProperties
### Properties
* **displayName**: string
* **policyDefinitionId**: string
* **scope**: string

## Microsoft.Authorization/policydefinitions
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyDefinitionProperties
* **type**: 'Microsoft.Authorization/policydefinitions' (ReadOnly, DeployTimeConstant)

## PolicyDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **policyRule**: any
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified'

