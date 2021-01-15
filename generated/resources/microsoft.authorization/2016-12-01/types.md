# Microsoft.Authorization @ 2016-12-01

## Resource Microsoft.Authorization/policyAssignments@2016-12-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## PolicyAssignmentProperties
### Properties
* **description**: string
* **displayName**: string
* **parameters**: any
* **policyDefinitionId**: string
* **scope**: string

