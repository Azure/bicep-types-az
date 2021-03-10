# Microsoft.Authorization @ 2020-09-01

## Resource Microsoft.Authorization/policyAssignments@2020-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyAssignmentProperties](#policyassignmentproperties)
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policyDefinitions@2020-09-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyDefinitionProperties](#policydefinitionproperties)
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policySetDefinitions@2020-09-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
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
* **nonComplianceMessages**: [NonComplianceMessage](#noncompliancemessage)[]
* **notScopes**: string[]
* **parameters**: [Dictionary<string,ParameterValuesValue>](#dictionarystringparametervaluesvalue)
* **policyDefinitionId**: string
* **scope**: string (ReadOnly)

## NonComplianceMessage
### Properties
* **message**: string (Required)
* **policyDefinitionReferenceId**: string

## Dictionary<string,ParameterValuesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

## ParameterValuesValue
### Properties
* **value**: any

## PolicyDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **mode**: string
* **parameters**: [Dictionary<string,ParameterDefinitionsValue>](#dictionarystringparameterdefinitionsvalue)
* **policyRule**: any
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static'

## Dictionary<string,ParameterDefinitionsValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinitionsValue](#parameterdefinitionsvalue)

## ParameterDefinitionsValue
### Properties
* **allowedValues**: any[]
* **defaultValue**: any
* **metadata**: [schemas:18_metadata](#schemas18metadata)
* **type**: 'Array' | 'Boolean' | 'DateTime' | 'Float' | 'Integer' | 'Object' | 'String'

## schemas:18_metadata
### Properties
* **assignPermissions**: bool
* **description**: string
* **displayName**: string
* **strongType**: string
### Additional Properties
* **Additional Properties Type**: any

## PolicySetDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **parameters**: [Dictionary<string,ParameterDefinitionsValue>](#dictionarystringparameterdefinitionsvalue)
* **policyDefinitionGroups**: [PolicyDefinitionGroup](#policydefinitiongroup)[]
* **policyDefinitions**: [PolicyDefinitionReference](#policydefinitionreference)[] (Required)
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static'

## Dictionary<string,ParameterDefinitionsValue>
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
* **parameters**: [Dictionary<string,ParameterValuesValue>](#dictionarystringparametervaluesvalue)
* **policyDefinitionId**: string (Required)
* **policyDefinitionReferenceId**: string

## Dictionary<string,ParameterValuesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValuesValue](#parametervaluesvalue)

