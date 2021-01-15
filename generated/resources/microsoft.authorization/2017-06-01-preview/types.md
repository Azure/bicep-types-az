# Microsoft.Authorization @ 2017-06-01-preview

## Resource Microsoft.Authorization/policyAssignments@2017-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
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

