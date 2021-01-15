# Microsoft.Authorization @ 2018-03-01

## Resource Microsoft.Authorization/policyAssignments@2018-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **sku**: PolicySku
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## PolicyAssignmentProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **notScopes**: string[]
* **parameters**: any
* **policyDefinitionId**: string
* **scope**: string

## PolicySku
### Properties
* **name**: string (Required)
* **tier**: string

