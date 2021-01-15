# Microsoft.Authorization @ 2020-03-01

## Resource Microsoft.Authorization/policyAssignments@2020-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **sku**: PolicySku
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## PolicyAssignmentProperties
### Properties
* **description**: string
* **displayName**: string
* **enforcementMode**: 'Default' | 'DoNotEnforce'
* **metadata**: any
* **notScopes**: string[]
* **parameters**: Dictionary<string,ParameterValuesValue>
* **policyDefinitionId**: string
* **scope**: string

## Dictionary<string,ParameterValuesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterValuesValue

## ParameterValuesValue
### Properties
* **value**: any

## PolicySku
### Properties
* **name**: string (Required)
* **tier**: string

