# Microsoft.Authorization @ 2018-03-01

## Resource Microsoft.Authorization/policyAssignments@2018-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties)
* **sku**: [PolicySku](#policysku)
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policyDefinitions@2018-03-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties)
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policySetDefinitions@2018-03-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicySetDefinitionProperties](#policysetdefinitionproperties)
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant)

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

## PolicyDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **mode**: 'All' | 'Indexed' | 'NotSpecified'
* **parameters**: any
* **policyRule**: any
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified'

## PolicySetDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **parameters**: any
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required)
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified'

## PolicyDefinitionReference
### Properties
* **parameters**: any
* **policyDefinitionId**: string

