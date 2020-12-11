# Microsoft.Authorization @ 2019-09-01

## Resource Microsoft.Authorization/policyAssignments@2019-09-01
* **Valid Scope(s)**: None
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **sku**: PolicySku
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policyDefinitions@2019-09-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyDefinitionProperties
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policySetDefinitions@2019-09-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicySetDefinitionProperties
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant)

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
### Additional Properties
* **Additional Properties Type**: ParameterValuesValue

## ParameterValuesValue
### Properties
* **value**: any

## PolicySku
### Properties
* **name**: string (Required)
* **tier**: string

## PolicyDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **mode**: string
* **parameters**: Dictionary<string,ParameterDefinitionsValue>
* **policyRule**: any
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static'

## Dictionary<string,ParameterDefinitionsValue>
### Additional Properties
* **Additional Properties Type**: ParameterDefinitionsValue

## ParameterDefinitionsValue
### Properties
* **allowedValues**: any[]
* **defaultValue**: any
* **metadata**: schemas:10_metadata
* **type**: 'Array' | 'Boolean' | 'DateTime' | 'Float' | 'Integer' | 'Object' | 'String'

## schemas:10_metadata
### Properties
* **description**: string
* **displayName**: string
### Additional Properties
* **Additional Properties Type**: any

## PolicySetDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **parameters**: Dictionary<string,ParameterDefinitionsValue>
* **policyDefinitionGroups**: PolicyDefinitionGroup[]
* **policyDefinitions**: PolicyDefinitionReference[] (Required)
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static'

## Dictionary<string,ParameterDefinitionsValue>
### Additional Properties
* **Additional Properties Type**: ParameterDefinitionsValue

## PolicyDefinitionGroup
### Properties
* **additionalMetadataId**: string
* **category**: string
* **description**: string
* **displayName**: string
* **name**: string (Required)

## PolicyDefinitionReference
### Properties
* **groupNames**: string[]
* **parameters**: Dictionary<string,ParameterValuesValue>
* **policyDefinitionId**: string (Required)
* **policyDefinitionReferenceId**: string

## Dictionary<string,ParameterValuesValue>
### Additional Properties
* **Additional Properties Type**: ParameterValuesValue

