# Microsoft.Authorization @ 2017-06-01-preview

## Microsoft.Authorization/policyAssignments
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

## Microsoft.Authorization/policySetDefinitions
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicySetDefinitionProperties
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant)

## PolicySetDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **parameters**: any
* **policyDefinitions**: PolicyDefinitionReference[] (Required)
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified'

## PolicyDefinitionReference
### Properties
* **parameters**: any
* **policyDefinitionId**: string

## Microsoft.Authorization/policySetDefinitions
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicySetDefinitionProperties
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant)

