# Microsoft.Authorization @ 2019-06-01

## Microsoft.Authorization/policyAssignments
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
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
* **parameters**: any
* **policyDefinitionId**: string
* **scope**: string

## PolicySku
### Properties
* **name**: string (Required)
* **tier**: string

## Microsoft.Authorization/policyDefinitions
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyDefinitionProperties
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant)

## PolicyDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **mode**: string
* **parameters**: any
* **policyRule**: any
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified'

## Microsoft.Authorization/policyDefinitions
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyDefinitionProperties
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant)

## Microsoft.Authorization/policySetDefinitions
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicySetDefinitionProperties
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant)

