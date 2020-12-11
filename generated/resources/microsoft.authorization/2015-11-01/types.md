# Microsoft.Authorization @ 2015-11-01

## Microsoft.Authorization/policyAssignments
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## PolicyAssignmentProperties
### Properties
* **displayName**: string
* **policyDefinitionId**: string
* **scope**: string

## Microsoft.Authorization/policydefinitions
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
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

