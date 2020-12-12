# Microsoft.Authorization @ 2015-10-01-preview

## Resource Microsoft.Authorization/policyassignments@2015-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **type**: 'Microsoft.Authorization/policyassignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policydefinitions@2015-10-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
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

