# Microsoft.Authorization @ 2019-09-01

## Resource Microsoft.Authorization/policyAssignments@2019-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties)
* **sku**: [PolicySku](#policysku)
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policyDefinitions@2019-09-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties)
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policySetDefinitions@2019-09-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicySetDefinitionProperties](#policysetdefinitionproperties)
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
* **parameters**: [ParameterValues](#parametervalues)
* **policyDefinitionId**: string
* **scope**: string

## ParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

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
* **parameters**: [ParameterDefinitions](#parameterdefinitions)
* **policyRule**: any
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static'

## ParameterDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## ParameterDefinitionsValue
### Properties
* **allowedValues**: any[]
* **defaultValue**: any
* **metadata**: [ParameterDefinitionsValueMetadata](#parameterdefinitionsvaluemetadata)
* **type**: 'Array' | 'Boolean' | 'DateTime' | 'Float' | 'Integer' | 'Object' | 'String'

## ParameterDefinitionsValueMetadata
### Properties
* **description**: string
* **displayName**: string

## PolicySetDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **parameters**: [ParameterDefinitions](#parameterdefinitions)
* **policyDefinitionGroups**: [PolicyDefinitionGroup](#policydefinitiongroup)[]
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required)
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static'

## ParameterDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

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
* **parameters**: [ParameterValues](#parametervalues)
* **policyDefinitionId**: string (Required)
* **policyDefinitionReferenceId**: string

## ParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

