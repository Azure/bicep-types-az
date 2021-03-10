# Microsoft.Authorization @ 2016-12-01

## Resource Microsoft.Authorization/policyAssignments@2016-12-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties)
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policyDefinitions@2016-12-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties)
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant)

## PolicyAssignmentProperties
### Properties
* **description**: string
* **displayName**: string
* **parameters**: any
* **policyDefinitionId**: string
* **scope**: string

## PolicyDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **mode**: 'All' | 'Indexed' | 'NotSpecified'
* **parameters**: any
* **policyRule**: any
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified'

